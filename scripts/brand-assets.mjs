// Builds every brand asset from the official logo: brand/venezuela-record-masthead.png
//   node scripts/brand-assets.mjs
// Outputs:
//   src/assets/brand/masthead-light.png  icon + wordmark + tricolor, transparent, dark ink (light mode)
//   src/assets/brand/masthead-dark.png   same, light ink (dark mode)
//   public/favicon.ico, public/favicon.svg, public/apple-touch-icon.png  (column icon)
//   public/og-default.png                default social image (logo + both taglines)
import { writeFileSync } from 'node:fs';
import sharp from 'sharp';

const SRC = 'brand/venezuela-record-masthead.png';
// Measured on the 2172x724 original: logo block (icon + wordmark + bar) and the column icon.
const MASTHEAD = { left: 165, top: 232, width: 1855, height: 220 };
const ICON = { left: 165, top: 232, width: 264, height: 220 };
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

// Column icon on a white tile (favicons must read on any tab color).
const iconPng = await (await transparent(ICON, [17, 17, 17])).png().toBuffer();
const tile = async (size, pad, radius) => {
  const inner = Math.round(size * (1 - 2 * pad));
  const icon = await sharp(iconPng).resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${radius}" fill="#ffffff"/></svg>`);
  return sharp(bg).composite([{ input: icon, gravity: 'center' }]).png().toBuffer();
};
writeFileSync('public/apple-touch-icon.png', await tile(180, 0.14, 0));
const png32 = await tile(32, 0.06, 6);
const png64 = await tile(64, 0.06, 12);
// favicon.svg = the 64px PNG embedded (sharp cannot trace to vectors).
writeFileSync(
  'public/favicon.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><image width="64" height="64" href="data:image/png;base64,${png64.toString('base64')}"/></svg>`,
);
// favicon.ico = one 32x32 PNG in an ICO container.
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6); header.writeUInt8(32, 7);
header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12);
header.writeUInt32LE(png32.length, 14); header.writeUInt32LE(22, 18);
writeFileSync('public/favicon.ico', Buffer.concat([header, png32]));

// Social image 1200x630: full logo (with the English tagline) + the Spanish tagline.
const logo = await (await transparent(FULL, [17, 17, 17])).resize({ width: 1040 }).png().toBuffer();
const es = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#ffffff"/>
  <text x="667" y="400" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="30" fill="#5b616e" text-anchor="middle">Un registro cronológico de las noticias políticas de Venezuela</text>
</svg>`);
await sharp(es).composite([{ input: logo, top: 205, left: 80 }]).png({ compressionLevel: 9 }).toFile('public/og-default.png');
console.log('brand assets written');
