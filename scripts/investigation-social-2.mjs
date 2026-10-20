// Social images (1200x630, en/es) and a text-free cover for investigation 2, "residual-capacity-2026":
// headline, the two Foro Penal figures (releases vs people still restricted) and the Jan–Oct series.
//   node scripts/investigation-social-2.mjs
import { mkdirSync } from 'node:fs';
import sharp from 'sharp';

const OUT = 'src/assets/investigations/residual-capacity-2026';
mkdirSync(OUT, { recursive: true });

const T = {
  en: {
    kicker: 'INVESTIGATION · PART TWO · VENEZUELA RECORD',
    title: ['The Capacity to Persecute', 'Is Still There'],
    a: '1,104',
    aL: 'releases verified in 2026',
    b: '11,468',
    bL: 'people still under restrictions',
    src: 'Source: Foro Penal, 5 Oct 2026',
    credit: 'Original idea: Minerva Mendoza Paipa',
  },
  es: {
    kicker: 'INVESTIGACIÓN · SEGUNDA ENTREGA · VENEZUELA RECORD',
    title: ['La capacidad de perseguir', 'sigue ahí'],
    a: '1.104',
    aL: 'excarcelaciones verificadas en 2026',
    b: '11.468',
    bL: 'personas siguen con restricciones',
    src: 'Fuente: Foro Penal, 5 oct 2026',
    credit: 'Idea original: Minerva Mendoza Paipa',
  },
};
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/'/g, '&#39;');

// Foro Penal series (same data as the page), drawn in a box.
const P = [['01-28', 711], ['02-26', 568], ['03-23', 503], ['04-27', 454], ['06-01', 404], ['07-06', 372], ['08-10', 391], ['08-31', 328], ['09-14', 344], ['10-05', 322]];
const R = [['01-17', 270], ['02-20', 452], ['03-08', 670], ['04-21', 786], ['06-12', 894], ['10-05', 1104]];
const doy = (md) => (Date.parse(`2026-${md}T12:00:00Z`) - Date.parse('2026-01-01T12:00:00Z')) / 864e5;
function series(x0, y0, w, h, sw = 5) {
  const X = (md) => x0 + (doy(md) / 303) * w;
  const Y = (v) => y0 + h - (v / 1200) * h;
  const d = (arr) => arr.map(([m, v], i) => `${i ? 'L' : 'M'}${X(m).toFixed(1)},${Y(v).toFixed(1)}`).join('');
  const band = `<rect x="${X('02-19')}" y="${y0}" width="${X('04-23') - X('02-19')}" height="${h}" fill="#ffd60a" opacity="0.14"/>`;
  return `${band}<line x1="${x0}" x2="${x0 + w}" y1="${y0 + h}" y2="${y0 + h}" stroke="#2a2e36" stroke-width="2"/>
    <path d="${d(R)}" fill="none" stroke="#4fc28a" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="${d(P)}" fill="none" stroke="#ff6b72" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"/>`;
}

{
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0b0f17"/>
  ${series(140, 120, 920, 390, 9)}
</svg>`;
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(`${OUT}/cover.png`);
  console.log('cover.png');
}

for (const [lang, t] of Object.entries(T)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0b0f17"/>
  <rect y="0" width="400" height="8" fill="#ffcc00"/><rect x="400" y="0" width="400" height="8" fill="#00247d"/><rect x="800" y="0" width="400" height="8" fill="#cf142b"/>
  <text x="64" y="84" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="21" letter-spacing="3" fill="#ffcc00">${esc(t.kicker)}</text>
  ${t.title.map((l, i) => `<text x="60" y="${170 + i * 76}" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="68" fill="#f3f0e8">${esc(l)}</text>`).join('')}
  <g>${series(700, 300, 440, 200, 5)}</g>
  <text x="64" y="398" font-family="Georgia, serif" font-weight="700" font-size="92" fill="#4fc28a">${esc(t.a)}</text>
  <text x="66" y="434" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#c9c5bc">${esc(t.aL)}</text>
  <text x="64" y="530" font-family="Georgia, serif" font-weight="700" font-size="92" fill="#f2a93b">${esc(t.b)}</text>
  <text x="66" y="566" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#c9c5bc">${esc(t.bL)}</text>
  <text x="1140" y="540" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="18" fill="#a9b0bd">${esc(t.src)}</text>
  <text x="1140" y="600" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="20" fill="#a9b0bd">${esc(t.credit)}</text>
</svg>`;
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(`${OUT}/social-${lang}.png`);
  console.log(`social-${lang}.png`);
}
