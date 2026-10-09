import { getCollection, type CollectionEntry } from 'astro:content';
import { AUTHORIZED_SOURCES, CATEGORY_INFO, TIER_B_SUMMARY_MAX_WORDS, type Category } from './constants';
import { LANG_META, localePath, t, type Lang } from '../i18n/ui';

export type NewsEntry = CollectionEntry<'news'>;
export type NewsEsEntry = CollectionEntry<'newsEs'>;
type NewsData = NewsEntry['data'];

/**
 * Production = the build Cloudflare Pages runs for `main`.
 * PR previews (any other branch) and local dev also show drafts and items
 * pending translation, labelled "Pending translation".
 * SHOW_DRAFTS=1 / SHOW_DRAFTS=0 overrides it for local testing.
 */
export const IS_PRODUCTION = (() => {
  const override = process.env.SHOW_DRAFTS;
  if (override === '1') return false;
  if (override === '0') return true;
  const branch = process.env.CF_PAGES_BRANCH;
  if (branch) return branch === 'main';
  return import.meta.env.PROD;
})();

/** A news item ready to render in one language. */
export interface Story {
  id: string;
  lang: Lang;
  data: NewsData; // metadata always comes from the English file
  title: string;
  summary: string;
  imageAlt: string;
  /** Entry whose Markdown body is shown (tier A only). */
  bodyEntry?: NewsEntry | NewsEsEntry;
  /** Shown in the other language because this language's version is missing (previews only). */
  fallback: boolean;
  draft: boolean;
  needsTranslation: boolean;
}

export const isPending = (s: Story) => s.draft || s.needsTranslation;

/** Newest first by ORIGINAL publication date (never by republication date). */
export const byOriginalDateDesc = (a: Story, b: Story) =>
  b.data.originalDate.getTime() - a.data.originalDate.getTime() || a.id.localeCompare(b.id);

/** Oldest first by ORIGINAL publication date. */
export const byOriginalDateAsc = (a: Story, b: Story) => byOriginalDateDesc(b, a);

const wordCount = (s: string) => s.trim().split(/\s+/).length;

async function load(): Promise<Record<Lang, Story[]>> {
  const [allEn, allEs] = await Promise.all([getCollection('news'), getCollection('newsEs')]);
  const esById = new Map(allEs.map((e) => [e.id, e]));
  const errors: string[] = [];

  for (const e of allEs)
    if (!allEn.some((n) => n.id === e.id))
      errors.push(`news-es/${e.id}: no matching English file in src/content/news/ (check the file name)`);

  const en: Story[] = [];
  const es: Story[] = [];
  for (const n of allEn) {
    const d = n.data;
    const pending = d.draft || d.needsTranslation;
    if (IS_PRODUCTION && pending) continue;

    const esEntry = esById.get(n.id);
    if (!esEntry && IS_PRODUCTION)
      errors.push(`news/${n.id}: missing Spanish version at src/content/news-es/ (same file name)`);
    if (esEntry && d.sourceTier === 'B' && wordCount(esEntry.data.summary) > TIER_B_SUMMARY_MAX_WORDS)
      errors.push(`news-es/${n.id}: tier B summary must be ${TIER_B_SUMMARY_MAX_WORDS} words or fewer`);

    const base = { id: n.id, data: d, draft: d.draft, needsTranslation: d.needsTranslation };
    const tierA = d.sourceTier === 'A';
    en.push({
      ...base,
      lang: 'en',
      title: d.title,
      summary: d.summary,
      imageAlt: d.imageAlt ?? '',
      bodyEntry: tierA ? n : undefined,
      fallback: false,
    });
    es.push(
      esEntry
        ? {
            ...base,
            lang: 'es',
            title: esEntry.data.title,
            summary: esEntry.data.summary,
            imageAlt: esEntry.data.imageAlt ?? d.imageAlt ?? '',
            bodyEntry: tierA ? esEntry : undefined,
            fallback: false,
            // The Spanish text is the original, so it never waits for translation.
            needsTranslation: false,
          }
        : {
            ...base,
            lang: 'es',
            title: d.title,
            summary: d.summary,
            imageAlt: d.imageAlt ?? '',
            bodyEntry: tierA ? n : undefined,
            fallback: true,
          },
    );
  }

  if (errors.length) throw new Error(`News content errors:\n- ${errors.join('\n- ')}`);
  return { en: en.sort(byOriginalDateDesc), es: es.sort(byOriginalDateDesc) };
}

let cache: Promise<Record<Lang, Story[]>> | undefined;

/** All visible stories in a language, newest first by original date. */
export async function getStories(lang: Lang): Promise<Story[]> {
  cache ??= load();
  return (await cache)[lang];
}

// ---------- URLs & slugs ----------

export const slugify = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const storyUrl = (s: Story) => localePath(s.lang, `/news/${s.id}/`);
export const categoryUrl = (lang: Lang, c: Category) => localePath(lang, `/category/${CATEGORY_INFO[c].slug}/`);
export const sourcePageUrl = (lang: Lang, sourceName: string) => localePath(lang, `/source/${slugify(sourceName)}/`);
export const categoryName = (lang: Lang, c: Category) => CATEGORY_INFO[c][lang].name;

// ---------- Credits ----------

/** Original author, or "Staff, <outlet>" when the source does not name one. */
export const authorCredit = (s: Story) =>
  s.data.originalAuthor.trim() || `${t(s.lang, 'credits.staff')}, ${s.data.sourceName}`;

const fmtCache = new Map<string, Intl.DateTimeFormat>();
const fmt = (lang: Lang, opts: Intl.DateTimeFormatOptions) => {
  const key = lang + JSON.stringify(opts);
  if (!fmtCache.has(key)) fmtCache.set(key, new Intl.DateTimeFormat(LANG_META[lang].intl, { ...opts, timeZone: 'UTC' }));
  return fmtCache.get(key)!;
};

/** "March 3, 2026" / "3 de marzo de 2026" */
export const formatDate = (lang: Lang, d: Date) => fmt(lang, { dateStyle: 'long' }).format(d);
/** "Mar 3, 2026" / "3 mar 2026" */
export const formatShortDate = (lang: Lang, d: Date) => fmt(lang, { dateStyle: 'medium' }).format(d);
/** "March 2026" / "marzo de 2026" */
export const formatMonth = (lang: Lang, d: Date) => {
  const s = fmt(lang, { month: 'long', year: 'numeric' }).format(d);
  return s.charAt(0).toUpperCase() + s.slice(1);
};
/** "2026-03-03" for <time datetime> */
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);

/**
 * The image a template may show. Tier A: the original image. Tier B: only an
 * image with a free license (CC BY / BY-SA / public domain). The schema already
 * enforces this; the template checks again so the rule cannot be bypassed.
 */
export const displayImage = (s: Story) => {
  if (!s.data.image) return undefined;
  if (s.data.sourceTier === 'B' && !s.data.imageLicense) return undefined;
  return s.data.image;
};

/** Caption shown under an image: credit ("Photo: …" localized), plus the license when there is one. */
export const imageCaption = (s: Story) =>
  [s.data.imageCredit?.replace(/^(Photo|Foto):\s*/i, `${t(s.lang, 'article.photo')}: `), s.data.imageLicense]
    .filter(Boolean)
    .join(' · ');

export const isAuthorizedSource = (sourceName: string) => AUTHORIZED_SOURCES.some((s) => s.name === sourceName);

// ---------- Grouping ----------

export interface MonthGroup {
  key: string; // "2025-01"
  label: string; // "January 2025"
  items: Story[];
}

/** Groups stories by month of original publication, oldest month first, oldest item first. */
export function groupByMonth(lang: Lang, stories: Story[]): MonthGroup[] {
  const groups = new Map<string, MonthGroup>();
  for (const s of [...stories].sort(byOriginalDateAsc)) {
    const key = s.data.originalDate.toISOString().slice(0, 7);
    if (!groups.has(key)) groups.set(key, { key, label: formatMonth(lang, s.data.originalDate), items: [] });
    groups.get(key)!.items.push(s);
  }
  return [...groups.values()];
}

/** Splits a list into pages of `size` items; always returns at least one (possibly empty) page. */
export function chunk<T>(items: T[], size: number): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) pages.push(items.slice(i, i + size));
  return pages.length ? pages : [[]];
}
