// Generates LOCAL-ONLY demo stories (draft: true) to preview the design with a full page.
//   node scripts/demo-content.mjs          -> create
//   node scripts/demo-content.mjs --clean  -> remove
// The demo folders are git-ignored and never published.
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';

const dirs = ['src/content/news/demo', 'src/content/news-es/demo', 'src/assets/news/demo'];
for (const d of dirs) rmSync(d, { recursive: true, force: true });
if (process.argv.includes('--clean')) process.exit(0);
for (const d of dirs) mkdirSync(d, { recursive: true });

const cats = [
  ['Political prisoners', 'presos políticos'],
  ['Repression & human rights', 'derechos humanos'],
  ['Elections & power', 'elecciones y poder'],
  ['International pressure', 'presión internacional'],
  ['Country situation', 'situación del país'],
  ['Opposition & resistance', 'oposición'],
];
const sourcesA = ['Voluntad Popular', 'VenAmérica'];
const sourcesB = ['Foro Penal', 'Efecto Cocuyo', 'El Pitazo'];
const colors = ['#3d5a80', '#98c1d9', '#ee6c4d', '#293241', '#6d597a', '#b56576', '#355070', '#e0afa0'];

let n = 0;
for (let m = 0; m < 10; m++) {
  for (let k = 0; k < 3; k++) {
    n++;
    const date = new Date(Date.UTC(2025, m * 2 + (k > 1 ? 1 : 0), 3 + k * 9));
    const iso = date.toISOString().slice(0, 10);
    const [cat, catEs] = cats[n % cats.length];
    const tierA = n % 3 !== 0;
    const source = tierA ? sourcesA[n % 2] : sourcesB[n % 3];
    const slug = `demo-story-${n}`;
    const file = `${iso}-${slug}.md`;
    let imageLines = '';
    if (tierA) {
      const img = `src/assets/news/demo/${slug}.jpg`;
      const c = colors[n % colors.length];
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c}"/><stop offset="1" stop-color="#1b1b1b"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><text x="600" y="420" font-family="Arial" font-size="64" fill="#fff" fill-opacity=".75" text-anchor="middle">DEMO PHOTO ${n}</text></svg>`;
      await sharp(Buffer.from(svg)).jpeg({ quality: 70 }).toFile(img);
      imageLines = `image: "../../../assets/news/demo/${slug}.jpg"\nimageCredit: "Photo: ${source}"\nimageAlt: "Demo placeholder photo number ${n}"\n`;
    }
    const long = n % 4 === 0 ? ' with a longer headline to check how two or three lines wrap in the cards' : '';
    writeFileSync(
      `src/content/news/demo/${file}`,
      `---\ntitle: "Demo story ${n}: ${cat.toLowerCase()} headline example${long}"\noriginalTitle: "Noticia de demostración ${n}"\nsummary: "Demo summary for layout testing only. This placeholder text shows how a short standfirst looks in cards and on the article page."\noriginalDate: ${iso}\nrepublishedDate: 2026-10-08\nrepublishedBy: "${n % 5 === 0 ? 'Eyleen V.' : 'Roger Q.'}"\nsourceName: "${source}"\nsourceUrl: "https://example.org/demo-${n}"\nsourceTier: "${tierA ? 'A' : 'B'}"\noriginalAuthor: "${n % 2 ? '' : 'Demo Author'}"\ncategory: "${cat}"\n${imageLines}featured: ${n === 28}\ndraft: true\n---\n\nDemo body paragraph for layout testing. It is not a real news story and is never published.\n\nA second paragraph shows the reading rhythm of the article column, roughly 680 pixels wide, with comfortable line height for long texts.\n`,
    );
    writeFileSync(
      `src/content/news-es/demo/${file}`,
      `---\ntitle: "Noticia de demostración ${n}: ejemplo de titular de ${catEs}${long ? ' con un titular más largo para ver cómo se reparte en dos o tres líneas' : ''}"\nsummary: "Resumen de demostración solo para probar el diseño. Este texto de relleno muestra cómo se ve una entradilla corta en tarjetas y artículos."\n---\n\nPárrafo de demostración para probar el diseño. No es una noticia real y nunca se publica.\n\nUn segundo párrafo muestra el ritmo de lectura de la columna del artículo, de unos 680 píxeles de ancho.\n`,
    );
  }
}
console.log(`demo: ${n} stories created`);
