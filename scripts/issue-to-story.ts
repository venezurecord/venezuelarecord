// Turns a "Nueva noticia" issue (.github/ISSUE_TEMPLATE/nueva-noticia.yml) into story files:
//   src/content/news/YYYY/YYYY-MM-DD-<slug>.md     English file + metadata (needsTranslation: true)
//   src/content/news-es/YYYY/YYYY-MM-DD-<slug>.md  Spanish file (tier A: original text)
//   src/assets/news/YYYY/MM/<slug>.<ext>           original photo (downloaded, never hotlinked)
// Translation is NOT done here (no API keys): Claude Code does it later ("procesa las noticias pendientes").
//
// Run by .github/workflows/nueva-noticia.yml (Node >= 23.6 runs .ts directly). Local test:
//   ISSUE_BODY="$(cat issue.md)" ISSUE_NUMBER=1 node scripts/issue-to-story.ts
// Writes RESULT_FILE (JSON) and PR_BODY_FILE; exits 1 with Spanish error messages on invalid input.
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  AUTHORIZED_SOURCES,
  CATEGORIES,
  CATEGORY_INFO,
  REPUBLISHERS,
  TIER_B_SUMMARY_MAX_WORDS,
  type Category,
} from '../src/lib/constants.ts';

// Issue form labels (must match the "label" values in the issue template).
const F = {
  url: 'Enlace a la nota original',
  fuente: 'Fuente',
  medio: 'Nombre del medio (si elegiste Otro medio)',
  titulo: 'Título original',
  autor: 'Autor original',
  fecha: 'Fecha de publicación original',
  publicadoPor: 'Publicado por',
  categoria: 'Categoría',
  texto: 'Texto',
  imagen: 'Imagen',
  credito: 'Crédito de la imagen',
  descripcion: 'Descripción de la imagen',
  licencia: 'Licencia de la imagen',
} as const;

const OTHER = 'Otro medio';
const MAX_IMAGE_BYTES = 15 * 1024 * 1024;

export function parseIssueForm(body: string): Record<string, string> {
  const out: Record<string, string> = {};
  const parts = body.replace(/\r\n/g, '\n').split(/^### /m).slice(1);
  for (const part of parts) {
    const nl = part.indexOf('\n');
    const label = (nl < 0 ? part : part.slice(0, nl)).trim();
    const value = (nl < 0 ? '' : part.slice(nl + 1)).trim();
    out[label] = value === '_No response_' ? '' : value;
  }
  return out;
}

export const slugify = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/&/g, ' y ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 9)
    .join('-')
    .slice(0, 70)
    .replace(/-+$/, '');

const wordCount = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;
const yamlStr = (s: string) => JSON.stringify(s); // JSON strings are valid YAML double-quoted scalars

/** Image URLs in Markdown or HTML (GitHub attachments). */
const IMG_RE = /!\[[^\]]*\]\((https?:\/\/[^)\s]+)\)|<img[^>]*\ssrc="(https?:\/\/[^"]+)"[^>]*>/gi;
const findImages = (s: string) => [...s.matchAll(IMG_RE)].map((m) => m[1] ?? m[2]);
const stripImages = (s: string) => s.replace(IMG_RE, '').replace(/\n{3,}/g, '\n\n').trim();

/** Plain-text summary from the first paragraphs, cut at a sentence end, max `max` characters. */
export function autoSummary(text: string, max = 380): string {
  const plain = text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_#>`]/g, '')
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s+/g, ' ').trim())
    .filter(Boolean);
  let out = '';
  for (const p of plain) {
    if ((out + ' ' + p).trim().length > max) break;
    out = (out + ' ' + p).trim();
    if (out.length >= 160) break;
  }
  if (!out) {
    const first = plain[0] ?? '';
    const cut = first.slice(0, max);
    const end = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('.'));
    out = end > 80 ? cut.slice(0, end + 1) : cut.replace(/\s+\S*$/, '') + '…';
  }
  return out;
}

function isRealDate(s: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const d = new Date(`${s}T00:00:00Z`);
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s;
}

const todayLA = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Los_Angeles' }).format(new Date());

function findExistingSourceUrl(url: string): string | undefined {
  const root = 'src/content/news';
  if (!existsSync(root)) return undefined;
  const norm = (u: string) => u.replace(/^https?:\/\/(www\.)?/, '').replace(/[/#?]+$/, '');
  const walk = (dir: string): string[] =>
    readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
      e.isDirectory() ? walk(join(dir, e.name)) : e.name.endsWith('.md') ? [join(dir, e.name)] : [],
    );
  for (const file of walk(root)) {
    const m = readFileSync(file, 'utf8').match(/^sourceUrl:\s*"?([^"\n]+)"?/m);
    if (m && norm(m[1]) === norm(url)) return file;
  }
  return undefined;
}

function imageExt(buf: Buffer): string | undefined {
  if (buf[0] === 0xff && buf[1] === 0xd8) return 'jpg';
  if (buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return 'png';
  if (buf.subarray(0, 4).toString() === 'RIFF' && buf.subarray(8, 12).toString() === 'WEBP') return 'webp';
  if (buf.subarray(4, 12).toString().startsWith('ftypavi')) return 'avif';
  return undefined;
}

async function download(url: string, token?: string): Promise<Buffer> {
  const attempt = async (auth: boolean) => {
    const res = await fetch(url, { headers: auth && token ? { Authorization: `Bearer ${token}` } : {}, redirect: 'follow' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return Buffer.from(await res.arrayBuffer());
  };
  try {
    return await attempt(false);
  } catch {
    return await attempt(true);
  }
}

export interface Result {
  ok: boolean;
  errors: string[];
  notes: string[];
  slug?: string;
  title?: string;
  branch?: string;
  files?: string[];
}

export async function run(body: string, issueNumber: string, token?: string): Promise<Result> {
  const f = parseIssueForm(body);
  const errors: string[] = [];
  const notes: string[] = [];
  const get = (k: keyof typeof F) => (f[F[k]] ?? '').trim();

  // ---- Source and tier
  const fuente = get('fuente');
  const authorized = AUTHORIZED_SOURCES.find((s) => s.name === fuente);
  let sourceName = authorized?.name ?? get('medio');
  if (!authorized && fuente !== OTHER) errors.push(`La fuente "${fuente}" no es válida.`);
  if (fuente === OTHER && !sourceName) errors.push('Elegiste **Otro medio**: escribe el nombre del medio.');
  if (authorized && get('medio')) notes.push(`Se ignoró el nombre de medio "${get('medio')}" porque la fuente es ${authorized.name}.`);
  sourceName = sourceName.replace(/\s+/g, ' ').trim();
  const tier: 'A' | 'B' = authorized ? 'A' : 'B';

  // ---- URL
  const url = get('url');
  try {
    const u = new URL(url);
    if (!/^https?:$/.test(u.protocol)) throw new Error();
  } catch {
    errors.push(`El enlace a la nota original no es una URL válida: "${url}".`);
  }
  const dup = url && findExistingSourceUrl(url);
  if (dup) errors.push(`Esta noticia ya existe en el sitio: \`${dup}\`.`);

  // ---- Title, author, dates, people
  const originalTitle = get('titulo').replace(/\s+/g, ' ');
  if (!originalTitle) errors.push('Falta el título original.');
  const author = get('autor').replace(/\s+/g, ' ');
  const date = get('fecha');
  const today = todayLA();
  if (!isRealDate(date)) errors.push(`La fecha "${date}" no es válida. Usa el formato AAAA-MM-DD, por ejemplo 2025-03-14.`);
  else if (date < '2025-01-01') errors.push(`La fecha ${date} es anterior a enero de 2025, el inicio del archivo.`);
  else if (date > today) errors.push(`La fecha ${date} está en el futuro.`);
  const republishedBy = get('publicadoPor');
  if (!(REPUBLISHERS as readonly string[]).includes(republishedBy)) errors.push(`"Publicado por" no es válido: "${republishedBy}".`);
  const category = CATEGORIES.find((c: Category) => CATEGORY_INFO[c].es.name === get('categoria'));
  if (!category) errors.push(`La categoría "${get('categoria')}" no es válida.`);

  // ---- Text and image
  let texto = get('texto').replace(/\r\n/g, '\n');
  const imageUrls = findImages(get('imagen'));
  if (!imageUrls.length && findImages(texto).length) {
    imageUrls.push(...findImages(texto));
    notes.push('La imagen estaba dentro del campo "Texto"; se usó como foto de la noticia.');
  }
  texto = stripImages(texto);
  if (!texto) errors.push('El campo "Texto" está vacío.');
  if (tier === 'B' && wordCount(texto) > TIER_B_SUMMARY_MAX_WORDS)
    errors.push(
      `Para otros medios el texto debe ser un resumen propio de ${TIER_B_SUMMARY_MAX_WORDS} palabras como máximo (tiene ${wordCount(texto)}). Nunca se copia el texto completo de otro medio.`,
    );
  const license = get('licencia');
  let useImage = imageUrls.length > 0;
  if (tier === 'B' && useImage && !license) {
    useImage = false;
    notes.push('Se ignoró la foto: de otros medios solo se usan fotos con licencia libre (campo "Licencia de la imagen").');
  }
  if (imageUrls.length > 1) notes.push('Había varias imágenes; se usó la primera.');

  if (errors.length) return { ok: false, errors, notes };

  // ---- Paths
  const [yyyy, mm] = date.split('-');
  let slug = slugify(originalTitle) || `noticia-${issueNumber}`;
  const enPath = (s: string) => `src/content/news/${yyyy}/${date}-${s}.md`;
  for (let i = 2; existsSync(enPath(slug)); i++) slug = `${slugify(originalTitle)}-${i}`;
  const files: string[] = [];

  let imageLines = '';
  if (useImage) {
    let buf: Buffer;
    try {
      buf = await download(imageUrls[0], token);
    } catch (e) {
      return { ok: false, errors: [`No se pudo descargar la imagen (${(e as Error).message}). Vuelve a arrastrarla al campo "Imagen".`], notes };
    }
    const ext = imageExt(buf);
    if (!ext) return { ok: false, errors: ['La imagen no es JPG, PNG, WebP ni AVIF.'], notes };
    if (buf.length > MAX_IMAGE_BYTES) return { ok: false, errors: ['La imagen pesa más de 15 MB.'], notes };
    const imgRel = `src/assets/news/${yyyy}/${mm}/${slug}.${ext}`;
    mkdirSync(`src/assets/news/${yyyy}/${mm}`, { recursive: true });
    writeFileSync(imgRel, buf);
    files.push(imgRel);
    const credit = get('credito') || `Photo: ${sourceName}`;
    const alt = get('descripcion') || `Photo published by ${sourceName} with the story "${originalTitle}"`;
    imageLines =
      `image: ${yamlStr(`../../../assets/news/${yyyy}/${mm}/${slug}.${ext}`)}\n` +
      `imageCredit: ${yamlStr(credit)}\n` +
      `imageAlt: ${yamlStr(alt)}\n` +
      (license ? `imageLicense: ${yamlStr(license)}\n` : '');
  }

  const summaryEs = tier === 'A' ? autoSummary(texto) : texto.replace(/\s+/g, ' ').trim();

  // English file: metadata + Spanish placeholders until translated.
  const en =
    `---\n` +
    `# PENDING TRANSLATION (issue #${issueNumber}): ${['title', 'summary', ...(useImage ? ['imageAlt'] : []), ...(tier === 'A' ? ['body'] : [])].join(', ')} still in Spanish.\n` +
    `title: ${yamlStr(originalTitle)}\n` +
    `originalTitle: ${yamlStr(originalTitle)}\n` +
    `summary: ${yamlStr(summaryEs)}\n` +
    `originalDate: ${date}\n` +
    `republishedDate: ${today}\n` +
    `republishedBy: ${yamlStr(republishedBy)}\n` +
    `sourceName: ${yamlStr(sourceName)}\n` +
    `sourceUrl: ${yamlStr(url)}\n` +
    `sourceTier: "${tier}"\n` +
    `originalAuthor: ${yamlStr(author)}\n` +
    `category: ${yamlStr(category!)}\n` +
    `tags: []\n` +
    imageLines +
    `needsTranslation: true\n` +
    `---\n` +
    (tier === 'A' ? `\n${texto}\n` : '');
  // Spanish file: tier A keeps the original text untouched; tier B only has our summary.
  const es =
    `---\n` +
    `title: ${yamlStr(originalTitle)}\n` +
    `summary: ${yamlStr(summaryEs)}\n` +
    (useImage && get('descripcion') ? `imageAlt: ${yamlStr(get('descripcion'))}\n` : '') +
    `---\n` +
    (tier === 'A' ? `\n${texto}\n` : '');

  const esRel = `src/content/news-es/${yyyy}/${date}-${slug}.md`;
  mkdirSync(`src/content/news/${yyyy}`, { recursive: true });
  mkdirSync(`src/content/news-es/${yyyy}`, { recursive: true });
  writeFileSync(enPath(slug), en);
  writeFileSync(esRel, es);
  files.unshift(enPath(slug), esRel);

  return { ok: true, errors, notes, slug, title: originalTitle, branch: `noticia/${issueNumber}-${slug}`.slice(0, 90), files };
}

export function prBody(r: Result, issueNumber: string): string {
  return [
    `Noticia creada desde el formulario #${issueNumber}.`,
    '',
    '### Pasos',
    '1. Espera el enlace de **vista previa** de Cloudflare Pages en este Pull Request.',
    '2. Abre Claude Code y escribe **"procesa las noticias pendientes"**: traduce al inglés y quita la marca *Pending translation*.',
    '3. Revisa la vista previa en inglés y en español.',
    '4. Pulsa el botón verde **Merge pull request** → **Confirm merge**. La noticia se publica sola.',
    '',
    '### Archivos',
    ...(r.files ?? []).map((f) => `- \`${f}\``),
    ...(r.notes.length ? ['', '### Notas', ...r.notes.map((n) => `- ${n}`)] : []),
    '',
    `Closes #${issueNumber}`,
  ].join('\n');
}

// ---- CLI
if (/issue-to-story\.ts$/.test(process.argv[1] ?? '')) {
  const body = process.env.ISSUE_BODY ?? '';
  const issue = process.env.ISSUE_NUMBER ?? '0';
  const result = await run(body, issue, process.env.GITHUB_TOKEN);
  writeFileSync(process.env.RESULT_FILE ?? 'story-result.json', JSON.stringify(result, null, 2));
  if (result.ok) writeFileSync(process.env.PR_BODY_FILE ?? 'pr-body.md', prBody(result, issue));
  console.log(JSON.stringify(result, null, 2));
  process.exit(result.ok ? 0 : 1);
}
