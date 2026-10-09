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
- **2026-10-08 — Logo oficial** (Roger): `brand/venezuela-record-masthead.png`. `node scripts/brand-assets.mjs`
  genera desde él el logo transparente claro/oscuro (`src/assets/brand/`), favicon, apple-touch-icon e imagen
  social. El lema va como texto HTML (no el del PNG) para poder traducirlo.

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
- `src/components/*` = Masthead (logo), Header, Nav, LangSwitch, HeroGrid, NewsCard, SourceCard, CategorySection, LatestList,
  CreditsBlock, Timeline, Pagination, PendingBadge, Footer.
- Fuentes (Source Serif 4 + Inter) con la API de fuentes de Astro: se descargan de Google Fonts al compilar y
  se sirven desde el propio dominio, con fallbacks ajustados (CLS 0).

## Publicación sin terminal (Fase 3)
- Formulario [.github/ISSUE_TEMPLATE/nueva-noticia.yml](.github/ISSUE_TEMPLATE/nueva-noticia.yml) → Action
  [.github/workflows/nueva-noticia.yml](.github/workflows/nueva-noticia.yml) → [scripts/issue-to-story.ts](scripts/issue-to-story.ts)
  crea los dos archivos + la foto, valida con `npm run build` y abre el PR `News: <título>` en la rama
  `noticia/<issue>-<slug>` (que cierra el issue al hacer Merge). Errores → comentario en español en el issue;
  al editar el issue se reintenta. Solo actúa si quien lo envía tiene permiso de escritura en el repo.
- Los títulos (`label`) del formulario y las constantes `F` del script deben coincidir.
- Ajuste necesario del repo (ya activado): Settings → Actions → "Allow GitHub Actions to create and approve
  pull requests". Etiqueta `nueva-noticia` creada.
- Guía para Roger y Eyleen: [docs/COMO-PUBLICAR.md](docs/COMO-PUBLICAR.md).

## Cloudflare Pages (Fase 5)
- Proyecto **`venezuelarecord`** (cuenta Cloudflare de venezurecord@gmail.com, id `2f188b2e677aed2fe4e996ad7e39f36e`),
  conectado por Git a `venezurecord/venezuelarecord` (app de GitHub con acceso **solo** a este repo).
  Preset Astro · `npm run build` · salida `dist` · variable `NODE_VERSION=24` · rama de producción `main`.
- Producción: <https://venezuelarecord.pages.dev>. Cada push a `main` publica; cada rama/PR genera vista previa
  (`<rama>.venezuelarecord.pages.dev`) y Cloudflare comenta el enlace en el PR. Las vistas previas llevan
  `X-Robots-Tag: noindex` (Cloudflare) y muestran borradores; producción no.
- `functions/_middleware.js` (detección de idioma) se despliega como Pages Function; `public/_routes.json` la
  limita a HTML.

## Flujo "procesa las noticias pendientes"
Cuando Roger lo pida: busca los PR abiertos con la etiqueta `nueva-noticia` (ramas `noticia/*`) y los archivos con
`needsTranslation: true`; traduce fielmente al inglés título,
resumen y cuerpo del archivo de `src/content/news/` (el original en español queda en `src/content/news-es/` y
su título en `originalTitle`); traduce también `imageAlt` (el script deja uno provisional) y quita el comentario
`# PENDING TRANSLATION`; revisa que la categoría encaje con el alcance (§2.2); quita la marca; corre
`npm run build` (valida el esquema) y sube el archivo a la **misma rama del PR** (por la web:
`github.com/venezurecord/venezuelarecord/upload/<rama>/<carpeta>`).

## Comandos
- `npm run dev` · `npm run build` (valida esquema + mueve `es/404.html`) · `npm run check` (tipos) ·
  `npm run preview`
- `node scripts/demo-content.mjs` crea 30 noticias de demostración **solo locales** (ignoradas por git,
  `draft: true`) para probar el diseño; `--clean` las borra. `node scripts/brand-assets.mjs` regenera
  favicon / apple-touch-icon / imagen social.
- Node ≥ 22.12. Git del repo configurado localmente como `venezurecord`.

## Fases (docs/BRIEF.md §5)
1. Repo + base Astro ✅ · 2. Diseño y plantillas ✅ · 3. Publicación desde GitHub (issue → Action → PR) ✅ ·
4. Contenido inicial (en tandas) · 5. Cloudflare Pages ✅ (adelantada) · 6. Control de calidad · 7. Dominio `.com`.

## Panel admin / PWA
El sitio **no tiene panel de administración**: se publica desde la web de GitHub (issues + PR). Por eso la
regla global "admin = PWA instalable" no aplica por ahora. Si algún día se agrega un `/admin`, debe ser PWA.
