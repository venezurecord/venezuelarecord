# Venezuela Record — guía para Claude Code

Resumen del brief completo en [docs/BRIEF.md](docs/BRIEF.md). Si hay dudas, manda el brief.

## Qué es
Archivo cronológico **en inglés** de noticias políticas sobre Venezuela, **republicadas** desde las fuentes
originales con crédito completo (autor, medio, fecha, enlace). Sitio: Astro estático en Cloudflare Pages
(`venezuelarecord.pages.dev`, luego `venezuelarecord.com`). Repo: `github.com/venezurecord/venezuelarecord`.

## Cómo trabajar con Roger
- Roger **no usa la terminal**: ejecuta tú todos los comandos. Háblale en **español**; instrucciones clic por clic.
- El contenido público del sitio va en **inglés**.
- Pide confirmación antes de: autorizar OAuth, aceptar términos, comprar el dominio o publicar fuera del repo.
- Nunca escribas contraseñas, 2FA ni datos de pago. Si algo pide iniciar sesión, detente y avisa.
- Al terminar cada fase: resumen, enlace y lista de **pendientes**.

## Reglas editoriales (implementadas en código, no las rompas)
- **Nivel A** (Voluntad Popular, VenAmérica — hay permiso): texto completo traducido fielmente al inglés +
  imagen original guardada en el repo (`Photo: <medio>`). Pie: *"Republished with permission of <Medio>.
  Translated from Spanish by Venezuela Record."*
- **Nivel B** (otros medios serios): solo titular + resumen propio ≤ 60 palabras + "Read the full story at
  <medio>". **Nunca** texto completo. **Nunca** su foto, salvo licencia libre (CC BY/BY-SA, dominio público)
  con `imageLicense`. Sin foto → "tarjeta de fuente".
- Crédito de republicación: `Republished by Roger Q.` / `Eyleen V.` — **nunca** como autoría.
- Sin autor → `Staff, <Medio>`.
- Todo se ordena por **`originalDate`** (nunca por `republishedDate`).
- Alcance: política, represión/presos políticos, DDHH, elecciones y poder, presión internacional, situación
  del país en su dimensión política. **Fuera**: farándula, deportes, migración, vida en EE. UU., opinión sin
  hecho noticioso. Opinión de fuentes A sobre hechos del alcance → categoría `Opinion`.
- Respeta `robots.txt`. **No** raspes `voluntadpopular.com/wp-json/`. Ingreso manual asistido.
- No uses fotos de agencias (AP, Reuters, AFP, EFE, Getty). No guardes secretos en el repo.

## Modelo de contenido
- Esquema: [src/content.config.ts](src/content.config.ts) (colección `news`, loader `glob`). El build
  **falla** si una noticia rompe el esquema.
  - Nota: el brief menciona `src/content/config.ts` con `type: "content"`; Astro 7 ya no admite esa API,
    por eso el esquema vive en `src/content.config.ts`. Las reglas son las mismas (+ `imageAlt` obligatorio
    con imagen y `republishedDate >= originalDate`).
- Noticias: `src/content/news/YYYY/YYYY-MM-DD-<slug>.md` → URL `/news/<slug>`.
- Imágenes: `src/assets/news/YYYY/MM/<slug>.<ext>` (referenciadas en frontmatter con ruta relativa).
  - Nota: el brief dice `public/images/news/...`, pero `astro:assets` solo optimiza (WebP, varios tamaños)
    imágenes dentro de `src/`. Nunca hotlinking.
- `draft: true` o `needsTranslation: true` → **no** sale en producción (rama `main`); sí en vistas previas
  de PR y en local, con etiqueta "Pending translation". Lógica en [src/lib/news.ts](src/lib/news.ts)
  (`CF_PAGES_BRANCH`; `SHOW_DRAFTS=1|0` para forzar).

## Flujo "procesa las noticias pendientes"
Cuando Roger lo pida: busca PRs/archivos con `needsTranslation: true`, traduce fielmente título, resumen y
cuerpo al inglés (guarda el título original en `originalTitle`), quita la marca, corre `npm run build`
(valida el esquema) y haz commit en la misma rama del PR.

## Comandos
- `npm run dev` · `npm run build` (valida esquema) · `npm run check` (tipos) · `npm run preview`
- Node ≥ 22.12. Git del repo configurado localmente como `venezurecord`.

## Fases (docs/BRIEF.md §5)
1. Repo + base Astro ✅ · 2. Diseño y plantillas · 3. Publicación desde GitHub (issue → Action → PR) ·
4. Contenido inicial (en tandas) · 5. Cloudflare Pages · 6. Control de calidad · 7. Dominio `.com`.

## Panel admin / PWA
El sitio **no tiene panel de administración**: se publica desde la web de GitHub (issues + PR). Por eso la
regla global "admin = PWA instalable" no aplica por ahora. Si algún día se agrega un `/admin`, debe ser PWA.
