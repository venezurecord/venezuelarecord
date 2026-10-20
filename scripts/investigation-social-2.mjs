// Social images (1200x630, en/es) for investigation 2, "residual-capacity-2026": the open cell door (AI illustration,
// Google Flow, prepared by scripts/investigation-cover-2.py) with the headline and the two Foro Penal figures.
//   python scripts/investigation-cover-2.py && node scripts/investigation-social-2.mjs
import sharp from 'sharp';

const BG = 'brand/investigations/residual-capacity-2026/social-bg.png';
const OUT = 'src/assets/investigations/residual-capacity-2026';

const T = {
  en: {
    kicker: 'INVESTIGATION · PART TWO · VENEZUELA RECORD',
    title: ['The Capacity', 'to Persecute', 'Is Still There'],
    a: '1,104',
    aL: 'releases verified in 2026',
    b: '11,468',
    bL: 'people still under restrictions',
    idea: 'Original idea: Minerva Mendoza Paipa · Figures: Foro Penal, 5 Oct 2026',
    photo: 'AI-generated illustration (Google Flow) for Venezuela Record',
  },
  es: {
    kicker: 'INVESTIGACIÓN · SEGUNDA ENTREGA · VENEZUELA RECORD',
    title: ['La capacidad', 'de perseguir', 'sigue ahí'],
    a: '1.104',
    aL: 'excarcelaciones verificadas en 2026',
    b: '11.468',
    bL: 'personas siguen con restricciones',
    idea: 'Idea original: Minerva Mendoza Paipa · Cifras: Foro Penal, 5 oct 2026',
    photo: 'Ilustración generada con IA (Google Flow) para Venezuela Record',
  },
};
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/'/g, '&#39;');

for (const [lang, t] of Object.entries(T)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="l" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="#0b0f17" stop-opacity="0.82"/><stop offset="0.5" stop-color="#0b0f17" stop-opacity="0.35"/><stop offset="1" stop-color="#0b0f17" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="b" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0.55" stop-color="#0b0f17" stop-opacity="0"/><stop offset="1" stop-color="#0b0f17" stop-opacity="0.9"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#l)"/>
  <rect width="1200" height="630" fill="url(#b)"/>
  <rect y="0" width="400" height="8" fill="#ffcc00"/><rect x="400" y="0" width="400" height="8" fill="#00247d"/><rect x="800" y="0" width="400" height="8" fill="#cf142b"/>
  <text x="64" y="76" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="20" letter-spacing="3" fill="#ffcc00">${esc(t.kicker)}</text>
  ${t.title.map((l, i) => `<text x="60" y="${150 + i * 70}" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="64" fill="#f3f0e8">${esc(l)}</text>`).join('')}
  <text x="64" y="342" font-family="Arial, Helvetica, sans-serif" font-size="19" fill="#d8d3c8">${esc(t.idea)}</text>
  <text x="62" y="548" font-family="Georgia, serif" font-weight="700" font-size="84" fill="#4fc28a">${esc(t.a)}</text>
  <text x="66" y="584" font-family="Arial, Helvetica, sans-serif" font-size="19" fill="#e6e2d8">${esc(t.aL)}</text>
  <text x="430" y="548" font-family="Georgia, serif" font-weight="700" font-size="84" fill="#f2a93b">${esc(t.b)}</text>
  <text x="434" y="584" font-family="Arial, Helvetica, sans-serif" font-size="19" fill="#e6e2d8">${esc(t.bL)}</text>
  <text x="1180" y="618" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="#c3c8d1">${esc(t.photo)}</text>
</svg>`;
  await sharp(BG)
    .composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
    .png({ compressionLevel: 9 })
    .toFile(`${OUT}/social-${lang}.png`);
  console.log(`social-${lang}.png`);
}
