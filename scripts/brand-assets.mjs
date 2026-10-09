// Builds every brand asset from the official logo (brand/venezuela-record-masthead.png) and the
// official isotipo (brand/venezuela-record-isotipo.png, Roger 2026-10-09: only for icons).
//   node scripts/brand-assets.mjs
// Outputs:
//   src/assets/brand/masthead-light.png  icon + wordmark + tricolor, transparent, dark ink (light mode)
//   src/assets/brand/masthead-dark.png   same, light ink (dark mode)
//   public/favicon.ico, public/favicon.svg, public/apple-touch-icon.png  (isotipo)
//   public/og-default.png                default social image (logo + both taglines)
import { writeFileSync } from 'node:fs';
import sharp from 'sharp';

const SRC = 'brand/venezuela-record-masthead.png';
const ISOTIPO = 'brand/venezuela-record-isotipo.png';
// Measured on the 2172x724 original: logo block (icon + wordmark + bar).
const MASTHEAD = { left: 165, top: 232, width: 1855, height: 220 };
const FULL = { left: 165, top: 232, width: 1855, height: 276 }; // includes the English tagline

/** "Color to alpha" against white: keeps ink and the colored bar, drops the paper. */
async function transparent(region, inkFor) {
  const { data, info } = await sharp(SRC).extract(region).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
    let a = (255 - Math.min(r, g, b)) / 255;
    if (a < 0.05) a = 0;
    const un = (c) => (a ? Math.round(Math.min(255, Math.max(0, 255 - (255 - c) / a))) : 0);
    let rgb = [un(r), un(g), un(b)];
    const saturated = Math.max(...rgb) - Math.min(...rgb) > 60;
    if (!saturated) rgb = inkFor;
    data[i] = rgb[0]; data[i + 1] = rgb[1]; data[i + 2] = rgb[2]; data[i + 3] = Math.round(a * 255);
  }
  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } });
}

await (await transparent(MASTHEAD, [17, 17, 17])).png({ compressionLevel: 9 }).toFile('src/assets/brand/masthead-light.png');
await (await transparent(MASTHEAD, [236, 238, 241])).png({ compressionLevel: 9 }).toFile('src/assets/brand/masthead-dark.png');

// Isotipo (column + page + tricolor) on a white tile: favicons must read on any tab color.
// trim() drops the white margin of the delivered file so the icon fills the tile.
const isotipo = await sharp(ISOTIPO).flatten({ background: '#ffffff' }).trim({ background: '#ffffff', threshold: 20 }).png().toBuffer();
const tile = async (size, pad, radius) => {
  const inner = Math.round(size * (1 - 2 * pad));
  const icon = await sharp(isotipo).resize(inner, inner, { fit: 'contain', background: '#ffffff' }).toBuffer();
  const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${radius}" fill="#ffffff"/></svg>`);
  return sharp(bg).composite([{ input: icon, gravity: 'center' }]).png().toBuffer();
};
writeFileSync('public/apple-touch-icon.png', await tile(180, 0.12, 0));
const png128 = await tile(128, 0.06, 24);
// favicon.svg = a 128px PNG embedded (sharp cannot trace to vectors); sharp on high-DPI tabs.
writeFileSync(
  'public/favicon.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><image width="128" height="128" href="data:image/png;base64,${png128.toString('base64')}"/></svg>`,
);
// favicon.ico = 16, 32 and 48 px PNGs in one ICO container.
const sizes = [16, 32, 48];
const pngs = await Promise.all(sizes.map((n) => tile(n, 0.04, Math.round(n / 6))));
const header = Buffer.alloc(6 + 16 * sizes.length);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
sizes.forEach((n, k) => {
  const e = 6 + 16 * k;
  header.writeUInt8(n, e); header.writeUInt8(n, e + 1);
  header.writeUInt16LE(1, e + 4); header.writeUInt16LE(32, e + 6);
  header.writeUInt32LE(pngs[k].length, e + 8); header.writeUInt32LE(offset, e + 12);
  offset += pngs[k].length;
});
writeFileSync('public/favicon.ico', Buffer.concat([header, ...pngs]));

// Social image 1200x630: full logo (with the English tagline) + the Spanish tagline.
const logo = await (await transparent(FULL, [17, 17, 17])).resize({ width: 1040 }).png().toBuffer();
const es = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#ffffff"/>
  <text x="667" y="400" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="30" fill="#5b616e" text-anchor="middle">Un registro cronológico de las noticias políticas de Venezuela</text>
</svg>`);
await sharp(es).composite([{ input: logo, top: 205, left: 80 }]).png({ compressionLevel: 9 }).toFile('public/og-default.png');
console.log('brand assets written');
