// Cloudflare Pages serves the nearest "404.html" for missing pages. Astro writes the
// Spanish one as /es/404/index.html, so move it to /es/404.html.
import { existsSync, mkdirSync, renameSync, rmSync } from 'node:fs';

const from = 'dist/es/404/index.html';
if (existsSync(from)) {
  mkdirSync('dist/es', { recursive: true });
  renameSync(from, 'dist/es/404.html');
  rmSync('dist/es/404', { recursive: true, force: true });
  console.log('postbuild: dist/es/404.html ready');
}
