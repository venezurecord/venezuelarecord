# Venezuela Record — guía para Claude Code

Resumen del brief completo en [docs/BRIEF.md](docs/BRIEF.md). Si hay dudas, manda el brief, salvo en las
**decisiones posteriores** listadas abajo, que lo actualizan.

## Qué es
Archivo cronológico **bilingüe (inglés / español)** de noticias políticas sobre Venezuela, **republicadas**
desde las fuentes originales con crédito completo (autor, medio, fecha, enlace). Sitio: Astro estático en
Cloudflare Pages (`venezuelarecord.pages.dev`, luego `venezuelarecord.com`).
Repo: `github.com/venezurecord/venezuelarecord`.

## Decisiones posteriores al brief
- **2026-10-08 — Sitio bilingüe** (Roger): inglés en `/`, español en `/es/`. Cada visitante ve el idioma de su
  navegador: [functions/_middleware.js](functions/_middleware.js) (Cloudflare Pages Function) redirige según
  `Accept-Language`; cookie `vr_lang` y el enlace del encabezado (`?setlang=`) permiten cambiar. Otros
  idiomas y buscadores ven la URL pedida (inglés por defecto); `hreflang` enlaza ambas versiones.
  `public/_routes.json` limita el middleware a páginas HTML.
- En **nivel A**, la versión en español es el **texto original** (sin traducir); la inglesa, traducción fiel.
- Cada noticia publicada debe existir en **los dos idiomas**: el build de producción falla si falta el
  archivo en español.
- Las subidas a GitHub se hacen **por la web** (Roger prefirió no autorizar Git Credential Manager).

## Cómo trabajar con Roger
- Roger **no usa la terminal**: ejecuta tú todos los comandos. Háblale en **español**; instrucciones clic por clic.
- La interfaz y el contenido del sitio van en **inglés y español** (ver arriba).
- Pide confirmación antes de: autorizar OAuth, aceptar términos, comprar el dominio o publicar fuera del repo.
- Nunca escribas contraseñas, 2FA ni datos de pago. Si algo pide iniciar sesión, detente y avisa.
- Al terminar cada fase: resumen, enlace y lista de **pendientes**.

## Reglas editoriales (implementadas en código, no las rompas)
- **Nivel A** (Voluntad Popular, VenAmérica — hay permiso): texto completo (original en `/es/`, traducción
  fiel en `/`) + imagen original guardada en el repo (`Photo: <medio>`). Pie en inglés: *"Republished with
  permission of <Medio>. Translated from Spanish by Venezuela Record."*; en español: *"Republicado con
  permiso de <Medio>."*
- **Nivel B** (otros medios serios): solo titular + resumen propio ≤ 60 palabras (en cada idioma) + "Read the
  full story at <medio>". **Nunca** texto completo. **Nunca** su foto, salvo licencia libre (CC BY/BY-SA,
  dominio público) con `imageLicense`. Sin foto → "tarjeta de fuente".
- Crédito de republicación: `Republished by Roger Q.` / `Eyleen V.` — **nunca** como autoría.
- Sin autor → `Staff, <Medio>` / `Redacción, <Medio>`.
- Todo se ordena por **`originalDate`** (nunca por `republishedDate`).
- Alcance: política, represión/presos políticos, DDHH, elecciones y poder, presión internacional, situación
  del país en su dimensión política. **Fuera**: farándula, deportes, migración, vida en EE. UU., opinión sin
  hecho noticioso. Opinión de fuentes A sobre hechos del alcance → categoría `Opinion`.
- Respeta `robots.txt`. **No** raspes `voluntadpopular.com/wp-json/`. Ingreso manual asistido.
- No uses fotos de agencias (AP, Reuters, AFP, EFE, Getty). No guardes secretos en el repo.

## Modelo de contenido
- Esquema: [src/content.config.ts](src/content.config.ts). El build **falla** si una noticia rompe el esquema.
  - Colección `news` = versión **inglesa + todos los metadatos** (fechas, fuente, créditos, imagen):
    `src/content/news/YYYY/YYYY-MM-DD-<slug>.md` → `/news/<slug>/`.
  - Colección `newsEs` = versión **española** (solo `title`, `summary`, `imageAlt` opcional y el cuerpo), con el
    **mismo nombre de archivo** en `src/content/news-es/YYYY/` → `/es/news/<slug>/`.
  - Nota: el brief menciona `src/content/config.ts` con `type: "content"`; Astro 7 ya no admite esa API.
    Reglas extra: `imageAlt` obligatorio con imagen, `republishedDate >= originalDate`, resumen B ≤ 60 palabras.
- Imágenes: `src/assets/news/YYYY/MM/<slug>.<ext>` (ruta relativa en el frontmatter).
  - Nota: el brief dice `public/images/news/...`, pero `astro:assets` solo optimiza (WebP, varios tamaños)
    imágenes dentro de `src/`. Nunca hotlinking.
- `draft: true` o `needsTranslation: true` → **no** sale en producción (rama `main`); sí en vistas previas
  de PR y en local, con etiqueta "Pending translation" / "Draft". Lógica en [src/lib/news.ts](src/lib/news.ts)
  (`CF_PAGES_BRANCH`; `SHOW_DRAFTS=1|0` para forzar).
- Textos de interfaz y rutas por idioma: [src/i18n/ui.ts](src/i18n/ui.ts). Categorías y fuentes autorizadas:
  [src/lib/constants.ts](src/lib/constants.ts).

## Estructura
- `src/views/*` = cada página (recibe `lang`); `src/pages/**` y `src/pages/es/**` = rutas mínimas que las usan.
- `src/components/*` = Header, Nav, LangSwitch, HeroGrid, NewsCard, SourceCard, CategorySection, LatestList,
  CreditsBlock, Timeline, Pagination, PendingBadge, Footer.
- Fuentes (Source Serif 4 + Inter) con la API de fuentes de Astro: se descargan de Google Fonts al compilar y
  se sirven desde el propio dominio, con fallbacks ajustados (CLS 0).

## Flujo "procesa las noticias pendientes"
Cuando Roger lo pida: busca PRs/archivos con `needsTranslation: true`; traduce fielmente al inglés título,
resumen y cuerpo del archivo de `src/content/news/` (el original en español queda en `src/content/news-es/` y
su título en `originalTitle`); en nivel B escribe también el resumen en español si falta; quita la marca;
corre `npm run build` (valida el esquema) y haz commit en la misma rama del PR.

## Comandos
- `npm run dev` · `npm run build` (valida esquema + mueve `es/404.html`) · `npm run check` (tipos) ·
  `npm run preview`
- `node scripts/demo-content.mjs` crea 30 noticias de demostración **solo locales** (ignoradas por git,
  `draft: true`) para probar el diseño; `--clean` las borra. `node scripts/brand-assets.mjs` regenera
  favicon / apple-touch-icon / imagen social.
- Node ≥ 22.12. Git del repo configurado localmente como `venezurecord`.

## Fases (docs/BRIEF.md §5)
1. Repo + base Astro ✅ · 2. Diseño y plantillas ✅ · 3. Publicación desde GitHub (issue → Action → PR) ·
4. Contenido inicial (en tandas) · 5. Cloudflare Pages · 6. Control de calidad · 7. Dominio `.com`.

## Panel admin / PWA
El sitio **no tiene panel de administración**: se publica desde la web de GitHub (issues + PR). Por eso la
regla global "admin = PWA instalable" no aplica por ahora. Si algún día se agrega un `/admin`, debe ser PWA.
