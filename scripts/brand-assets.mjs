// Regenerates the favicon, apple-touch-icon and default social image from SVG.
//   node scripts/brand-assets.mjs
import { writeFileSync } from 'node:fs';
import sharp from 'sharp';

const NAVY = '#111a3a';
const icon = (size, radius) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="${radius}" fill="${NAVY}"/>
  <text x="32" y="41" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="29" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">VR</text>
  <rect x="10" y="50" width="14.67" height="4" fill="#ffcc00"/><rect x="24.67" y="50" width="14.67" height="4" fill="#00247d"/><rect x="39.33" y="50" width="14.67" height="4" fill="#cf142b"/>
</svg>`;

writeFileSync('public/favicon.svg', icon(64, 12));
await sharp(Buffer.from(icon(180, 0))).png().toFile('public/apple-touch-icon.png');

// favicon.ico = one 32x32 PNG wrapped in an ICO container.
const png32 = await sharp(Buffer.from(icon(32, 12))).png().toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6); header.writeUInt8(32, 7); header.writeUInt8(0, 8); header.writeUInt8(0, 9);
header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12);
header.writeUInt32LE(png32.length, 14); header.writeUInt32LE(22, 18);
writeFileSync('public/favicon.ico', Buffer.concat([header, png32]));

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect x="0" y="0" width="400" height="14" fill="#ffcc00"/><rect x="400" y="0" width="400" height="14" fill="#00247d"/><rect x="800" y="0" width="400" height="14" fill="#cf142b"/>
  <text x="600" y="300" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="92" fill="#111111" text-anchor="middle" letter-spacing="3">VENEZUELA RECORD</text>
  <text x="600" y="375" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="36" fill="#5b616e" text-anchor="middle">A chronological record of Venezuela's political news</text>
  <text x="600" y="430" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="30" fill="#5b616e" text-anchor="middle">Un registro cronológico de las noticias políticas de Venezuela</text>
  <rect x="0" y="616" width="400" height="14" fill="#ffcc00"/><rect x="400" y="616" width="400" height="14" fill="#00247d"/><rect x="800" y="616" width="400" height="14" fill="#cf142b"/>
</svg>`;
await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile('public/og-default.png');
console.log('brand assets written to public/');
