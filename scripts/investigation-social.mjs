// Social images (1200x630, en/es) for investigation 1, "who-commands-venezuela-2026": the empty office with the
// refinery outside (AI illustration, Google Flow, prepared by scripts/investigation-cover-1.py) with the headline.
//   python scripts/investigation-cover-1.py && node scripts/investigation-social.mjs
import sharp from 'sharp';

const BG = 'brand/investigations/who-commands-venezuela-2026/social-bg.png';
const OUT = 'src/assets/investigations/who-commands-venezuela-2026';

const T = {
  en: {
    kicker: 'INVESTIGATION · VENEZUELA RECORD',
    title: ['The Oil Changed.', "The Power Didn't."],
    sub: 'Who appoints whom in Venezuela in 2026, according to official gazettes, the laws and the UN',
    credit: 'Original idea: Minerva Mendoza Paipa',
    photo: 'AI-generated illustration (Google Flow) for Venezuela Record',
  },
  es: {
    kicker: 'INVESTIGACIÓN · VENEZUELA RECORD',
    title: ['Cambió el petróleo,', 'no el poder'],
    sub: 'Quién designa a quién en la Venezuela de 2026, según las gacetas oficiales, las leyes y la ONU',
    credit: 'Idea original: Minerva Mendoza Paipa',
    photo: 'Ilustración generada con IA (Google Flow) para Venezuela Record',
  },
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/'/g, '&#39;');
const wrap = (s, n) => {
  const out = [''];
  for (const w of s.split(' ')) {
    if ((out.at(-1) + ' ' + w).trim().length > n) out.push(w);
    else out[out.length - 1] = (out.at(-1) + ' ' + w).trim();
  }
  return out;
};

for (const [lang, t] of Object.entries(T)) {
  const sub = wrap(t.sub, 44);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="l" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="#0b0f17" stop-opacity="0.78"/><stop offset="0.5" stop-color="#0b0f17" stop-opacity="0.35"/><stop offset="1" stop-color="#0b0f17" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="b" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0.7" stop-color="#0b0f17" stop-opacity="0"/><stop offset="1" stop-color="#0b0f17" stop-opacity="0.8"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#l)"/>
  <rect width="1200" height="630" fill="url(#b)"/>
  <rect y="0" width="400" height="8" fill="#ffcc00"/><rect x="400" y="0" width="400" height="8" fill="#00247d"/><rect x="800" y="0" width="400" height="8" fill="#cf142b"/>
  <text x="64" y="84" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="20" letter-spacing="3" fill="#ffcc00">${esc(t.kicker)}</text>
  ${t.title.map((l, i) => `<text x="60" y="${168 + i * 72}" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="60" fill="#f3f0e8">${esc(l)}</text>`).join('')}
  ${sub.map((l, i) => `<text x="64" y="${300 + i * 32}" font-family="Georgia, 'Times New Roman', serif" font-size="23" fill="#ddd8ce">${esc(l)}</text>`).join('')}
  <text x="64" y="${300 + sub.length * 32 + 22}" font-family="Arial, Helvetica, sans-serif" font-size="18" fill="#c3c8d1">${esc(t.credit)}</text>
  <text x="1180" y="614" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="#c3c8d1">${esc(t.photo)}</text>
</svg>`;
  await sharp(BG)
    .composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
    .png({ compressionLevel: 9 })
    .toFile(`${OUT}/social-${lang}.png`);
  console.log(`social-${lang}.png`);
}
