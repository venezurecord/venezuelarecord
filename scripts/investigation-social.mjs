// Social images (1200x630) for the investigation "who-commands-venezuela-2026", in English and Spanish:
// headline over the two lanes (economy / security) and a small org-chart motif. No photos.
//   node scripts/investigation-social.mjs
import sharp from 'sharp';

const OUT = 'src/assets/investigations/who-commands-venezuela-2026';
const T = {
  en: {
    kicker: 'INVESTIGATION · VENEZUELA RECORD',
    title: ['The Oil Changed.', "The Power Didn't."],
    sub: 'Who appoints whom in Venezuela in 2026, according to official gazettes, the laws and the UN',
    credit: 'Original idea: Minerva Mendoza Paipa',
    econ: 'ECONOMY',
    sec: 'SECURITY',
  },
  es: {
    kicker: 'INVESTIGACIÓN · VENEZUELA RECORD',
    title: ['Cambió el petróleo,', 'no el poder'],
    sub: 'Quién designa a quién en la Venezuela de 2026, según las gacetas oficiales, las leyes y la ONU',
    credit: 'Idea original: Minerva Mendoza Paipa',
    econ: 'ECONOMÍA',
    sec: 'SEGURIDAD',
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

function lanes() {
  const x0 = 120;
  const x1 = 1140;
  const y = 520;
  const ease = (m, k) => 1 - Math.exp(-m / k);
  const pts = (fy) =>
    Array.from({ length: 101 }, (_, i) => {
      const m = i / 10;
      return `${(x0 + ((x1 - x0) * m) / 10).toFixed(1)},${fy(m).toFixed(1)}`;
    }).join(' ');
  const econ = pts((m) => y - 4 - 70 * ease(m, 1.9) - 8 * Math.sin(m * 1.75) * ease(m, 0.8));
  const sec = pts((m) => y + 4 + 34 * ease(m, 0.22));
  return `
    <line x1="0" x2="${x0 + 2}" y1="${y - 4}" y2="${y - 4}" stroke="#f3f0e8" stroke-width="3"/>
    <line x1="0" x2="${x0 + 2}" y1="${y + 4}" y2="${y + 4}" stroke="#f3f0e8" stroke-width="3"/>
    <polyline points="${econ}" fill="none" stroke="#f2a93b" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="${sec}" fill="none" stroke="#ff6a70" stroke-width="5" stroke-linecap="round"/>`;
}

function orgMotif() {
  // A small appointment tree, top right: one node, three below, five below those.
  const n = [
    [1030, 96, 20],
    [970, 168, 14],
    [1030, 168, 14],
    [1090, 168, 14],
    [940, 236, 10],
    [985, 236, 10],
    [1030, 236, 10],
    [1075, 236, 10],
    [1120, 236, 10],
  ];
  const e = [
    [0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [2, 6], [3, 7], [3, 8],
  ];
  const lines = e
    .map(([a, b]) => `<line x1="${n[a][0]}" y1="${n[a][1]}" x2="${n[b][0]}" y2="${n[b][1]}" stroke="#5b6475" stroke-width="2.5"/>`)
    .join('');
  const dots = n
    .map(([x, y, r], i) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${i === 0 ? '#ffcc00' : '#0b0f17'}" stroke="${i === 0 ? '#ffcc00' : '#a9b0bd'}" stroke-width="3"/>`)
    .join('');
  return lines + dots;
}

// Language-neutral cover for cards (no text): the two lanes and a larger org motif.
{
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0b0f17"/>
  <g transform="translate(-620 -40) scale(1.5)">${orgMotif()}</g>
  <g transform="translate(0 -60)">${lanes()}</g>
</svg>`;
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(`${OUT}/cover.png`);
  console.log('cover.png');
}

for (const [lang, t] of Object.entries(T)) {
  const sub = wrap(t.sub, 58);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0b0f17"/>
  <rect y="0" width="400" height="8" fill="#ffcc00"/><rect x="400" y="0" width="400" height="8" fill="#00247d"/><rect x="800" y="0" width="400" height="8" fill="#cf142b"/>
  ${orgMotif()}
  <text x="64" y="92" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="22" letter-spacing="3" fill="#ffcc00">${esc(t.kicker)}</text>
  ${t.title.map((l, i) => `<text x="60" y="${190 + i * 84}" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="80" fill="#f3f0e8">${esc(l)}</text>`).join('')}
  ${sub.map((l, i) => `<text x="64" y="${338 + i * 36}" font-family="Georgia, 'Times New Roman', serif" font-size="28" fill="#c9c5bc">${esc(l)}</text>`).join('')}
  ${lanes()}
  <text x="1140" y="430" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="20" letter-spacing="2" fill="#f2a93b">${esc(t.econ)}</text>
  <text x="1140" y="590" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="20" letter-spacing="2" fill="#ff6a70">${esc(t.sec)}</text>
  <text x="64" y="598" font-family="Arial, Helvetica, sans-serif" font-size="20" fill="#a9b0bd">${esc(t.credit)}</text>
</svg>`;
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(`${OUT}/social-${lang}.png`);
  console.log(`social-${lang}.png`);
}
