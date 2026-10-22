# Venezuela Record — guía para Claude Code

Resumen del brief completo en [docs/BRIEF.md](docs/BRIEF.md). Si hay dudas, manda el brief, salvo en las
**decisiones posteriores** listadas abajo, que lo actualizan.

## Qué es
Archivo cronológico **bilingüe (inglés / español)** de noticias políticas sobre Venezuela, **republicadas**
desde las fuentes originales con crédito completo (autor, medio, fecha, enlace). Sitio: Astro estático en
Cloudflare Pages: <https://venezuelarecord.com> (`www` y `venezuelarecord.pages.dev` redirigen ahí).
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
  genera desde él el logo transparente claro/oscuro (`src/assets/brand/`) e imagen social. El lema va como texto
  HTML (no el del PNG) para poder traducirlo.
- **2026-10-09 — Isotipo** (Roger): `brand/venezuela-record-isotipo.png` se usa **solo** donde lo amerita: favicon
  (pestaña) y apple-touch-icon. El logo del encabezado se queda como está.

- **2026-10-08 — Fotos y portada** (Roger): si la nota original de una fuente A no trae foto propia (VenAmérica
  suele usar solo su logo), se usa una foto **con licencia libre** acorde a la noticia (Wikimedia Commons: CC0,
  dominio público, CC BY, CC BY-SA; nunca agencias) con `imageCredit` + `imageLicense`; si no hay ninguna adecuada,
  sale la **tarjeta de fuente**. El inicio **no** lleva el bloque de botones "De nuestras fuentes".
- **2026-10-09 — Portada** (Roger): la noticia principal del inicio **siempre lleva foto** (nunca tarjeta de fuente):
  es la más reciente con imagen ([src/views/HomePage.astro](src/views/HomePage.astro)).
- **2026-10-13 — Investigaciones (Roger):** piezas originales en /investigations/, crédito de idea a la persona que la
  propuso, autor = Venezuela Record, sin nombres del equipo. Primera pieza: "Venezuela 2026: La estructura del poder post-Maduro" /
  "Venezuela 2026: The Post-Maduro Power Structure" (idea original: Minerva Mendoza Paipa; título y entradilla propuestos
  por ella y aprobados por Roger el 2026-10-22; antes se llamaba "Cambió el petróleo, no el poder"). No lleva bloque de republicación ni `sourceTier`.
- **2026-10-16 — Agente semanal (Roger):** todos los viernes a las 9:00 a. m. (hora del Pacífico) una tarea programada de
  la app de Claude (`venezuelarecord-noticias-semanales`, guardada en la carpeta `scheduled-tasks` del perfil de Claude)
  busca las noticias de la semana (nivel A: todas las de VP y VenAmérica que cumplan el alcance; nivel B: 3–6 hechos
  clave), las carga en los dos idiomas con los mismos criterios de este archivo, valida con `npm run build` y **publica
  directo en `main`**; las dudosas quedan en el reporte como "pendiente de tu decisión". Corre mientras la app esté
  abierta (si está cerrada a esa hora, corre al abrirla).
- **Fase 4 — ritmo de lectura:** `voluntadpopular.com/robots.txt` pide `Crawl-delay: 60` y prohíbe URL con `?`:
  una página por minuto como máximo, solo URL limpias. Su lista de noticias está en `/noticias/page/N/`.
  Ojo: algunas notas tienen mal la fecha en la web (p. ej. las del 25M figuran como 21/04/2024): usar la fecha
  real del texto.

## Cómo trabajar con Roger
- Roger **no usa la terminal**: ejecuta tú todos los comandos. Háblale en **español**; instrucciones clic por clic.
- La interfaz y el contenido del sitio van en **inglés y español** (ver arriba).
- Pide confirmación antes de: autorizar OAuth, aceptar términos, comprar el dominio o publicar fuera del repo.
- Nunca escribas contraseñas, 2FA ni datos de pago. Si algo pide iniciar sesión, detente y avisa.
- Al terminar cada fase: resumen, enlace y lista de **pendientes**.

## Reglas editoriales (implementadas en código, no las rompas)
- **Nivel A** (Voluntad Popular, VenAmérica — hay permiso): texto completo (original en `/es/`, traducción
  fiel en `/`) + imagen original guardada en el repo (`Photo: <medio>`), o foto libre / tarjeta de fuente (ver arriba). Pie en inglés: *"Republished with
  permission of <Medio>. Translated from Spanish by Venezuela Record."*; en español: *"Republicado con
  permiso de <Medio>."*
- **Nivel B** (otros medios serios): solo titular + resumen propio ≤ 60 palabras (en cada idioma) + "Read the
  full story at <medio>". **Nunca** texto completo. **Nunca** su foto, salvo licencia libre (CC BY/BY-SA,
  dominio público) con `imageLicense`. Sin foto → "tarjeta de fuente".
- Crédito de republicación (Roger, 2026-10-09): `Republished by Roger Quiroz` / `Eyleen Valiente` — **nunca** como autoría. Eyleen figura en al menos la mitad de las republicaciones (alternadas por fecha original).
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
- Producción: <https://venezuelarecord.com> (dominio comprado por Roger en Cloudflare Registrar el 2026-10-09; dominios
  personalizados `venezuelarecord.com` y `www` en Pages → Custom domains; `functions/_middleware.js` manda `www` y
  `venezuelarecord.pages.dev` a la `.com` con 301). Cada push a `main` publica; cada rama/PR genera vista previa
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
4. Contenido inicial ✅ (30 noticias VP + VenAmérica, 2026-10-09) · 5. Cloudflare Pages ✅ (adelantada) ·
6. Control de calidad ✅ · 7. Dominio `.com` ✅ (2026-10-09) ·
8. Foto de portada para todas las noticias ✅ (2026-10-09: 26 fotos libres de Commons / gobierno de EE. UU. / Provea;
   nivel B solo con licencia libre y `imageLicense`). · 9. Primera investigación publicada ✅ (2026-10-16,
   PR #6: `/investigations/who-commands-venezuela-2026/`). · 10. Segunda investigación publicada ✅ (2026-10-20, por
   decisión de Roger: `/investigations/residual-capacity-2026/`). El inicio muestra la más reciente en grande
   (`InvestigationCard`) y las anteriores en tarjeta compacta (`InvestigationMini`). Lo que Minerva mande después
   (tabla, matriz) se agrega como actualización: cambiar `updated` en el META.
- Ojo en producción: Cloudflare (Scrape Shield → Email Address Obfuscation) inyecta `email-decode.min.js` en el .com
  (no en las vistas previas); falla con enlaces `<a>` dentro de SVG, así que en los SVG se usan `<g role="button">`.

## Investigaciones (piezas originales)
- Rutas: `/investigations/` (índice) y `/investigations/<slug>/`, con su par en `/es/`. Menú, pie e inicio (bloque
  "Investigación" debajo de la portada; la noticia principal sigue siendo la más reciente con foto).
- Registro: [src/data/investigations/index.ts](src/data/investigations/index.ts). Cada pieza tiene un archivo de datos
  bilingüe `{ en, es }` en `src/data/investigations/<slug>.ts` (textos, fuentes numeradas, nodos, líneas, cronología) y
  una vista en `src/views/investigations/`. Textos de interfaz propios en `src/data/investigations/ui.ts`.
- Componentes interactivos en `src/components/investigation/` (SVG + JS propio, sin librerías): `Opening` (scrollytelling
  con escenario fijo), `Signatures` (recortes de gacetas + resaltador), `OrgChart` (diagrama en escritorio, lista por
  niveles + hoja inferior en móvil; modo guiado/libre; filtros por tipo de línea), `TwoLanes`, `Gazettes`, `Penalties`,
  `VenApp`, `Balance`, `Method`, `Cite` (números de fuente). Todo funciona sin JS (estado final, fichas abiertas) y con
  `prefers-reduced-motion`.
- Reglas: autor = organización Venezuela Record (también en JSON-LD); crédito visible a quien propuso la idea; ningún
  nombre del equipo ni casos personales; acusaciones siempre atribuidas ("denunció X en <medio>"); retratos solo con
  licencia libre (Commons) con crédito en la ficha; si no hay foto libre, el escudo oficial (dominio público en Commons) del organismo que dirige, con sus iniciales y la aclaración en la ficha; en los recortes de gacetas se tapan los números de
  cédula y se aclara que el resaltado es nuestro. Cada línea del organigrama y cada punto de la cronología citan fuente.
- Recortes de firmas: imágenes compuestas (cabecera + bloque de firma) en
  `src/assets/investigations/<slug>/gazettes/`; las cajas del resaltador (en %) están en
  `src/data/investigations/<slug>.signatures.json`. Se generaron con PyMuPDF desde los PDF de las gacetas (no se guardan
  los PDF en el repo).
- Portada (2026-10-20, elegida por Roger): **ilustración generada con IA en Google Flow** (despacho de gobierno vacío;
  afuera una refinería quema su mechurrio), original 2K en `brand/investigations/who-commands-venezuela-2026/`.
  `python scripts/investigation-cover-1.py` y luego `node scripts/investigation-social.mjs` (imágenes sociales con título).
  La página abre con `InvCover` (título en HTML sobre la imagen; crédito de IA debajo, también en la tarjeta del inicio);
  con portada, `Opening` no repite el título y empieza en el crédito y la doble línea. Toda imagen hecha con IA se
  rotula siempre como tal (`coverCredit`). Imágenes de IA: Google Flow (cuenta de Roger, Chrome), sin personas,
  texto ni banderas.
- **Segunda investigación (idea: Minerva Mendoza Paipa):** «La capacidad de perseguir sigue ahí» / «The Capacity to
  Persecute Is Still There» en `/investigations/residual-capacity-2026/`. Datos y fuentes propias (1–35, comparte
  algunas con la primera por id) en `src/data/investigations/residual-capacity-2026.ts`; vista
  `ResidualCapacityPage.astro`; componentes `FpSeries` (serie de Foro Penal, cada cifra enlaza a su balance con fecha,
  nunca a «Represión en cifras», que cambia) y `Capacity` (tres componentes separados en pestañas: capacidad disponible,
  ejercicio documentado, riesgo de repetición). Portada, cabecera e imágenes sociales: **ilustración generada con IA en Google Flow**
  (puerta de celda abierta; la sombra de los barrotes sigue en el suelo), elegida por Roger el 2026-10-20; original 2K en
  `brand/investigations/residual-capacity-2026/celda-abierta-flow.jpg`. En la página el título va **sobre** la imagen (HTML,
  abajo en el teléfono, sobre la pared oscura de la izquierda en escritorio). `python scripts/investigation-cover-2.py` y
  luego `node scripts/investigation-social-2.mjs` (las sociales llevan título y cifras). Toda imagen hecha con IA se rotula
  siempre como tal (`coverCredit`, sin enlace): tarjeta, cabecera, tarjeta `NextPart` e imagen social.
  Las imágenes de IA se generan en Google Flow (proyecto en la cuenta de Roger, Chrome): sin personas, texto ni banderas.
  La primera entrega termina con la tarjeta `NextPart`.
- Compartido entre investigaciones: `src/styles/investigation.css` (tokens y cabeceras), `InvToc` (índice fijo),
  `PieceMethod` (método + fuentes de piezas nuevas) y las **fichas de fuente**: cada número de cita (`Cite`) abre una
  ficha con «Abrir documento original» (hoja inferior en el teléfono); sin JS baja a la lista.

## Panel admin / PWA
El sitio **no tiene panel de administración**: se publica desde la web de GitHub (issues + PR). Por eso la
regla global "admin = PWA instalable" no aplica por ahora. Si algún día se agrega un `/admin`, debe ser PWA.
