# Venezuela Record — Brief de construcción para Claude Code

> Proyecto: blog de republicación de noticias sobre Venezuela
> Dominio final: **venezuelarecord.com** (se compra después en Cloudflare)
> Dominio de prueba: **venezuelarecord.pages.dev** (Cloudflare Pages)
> Cuenta de GitHub: **venezurecord** · Correo del proyecto: **venezurecord@gmail.com**
> Responsable: Roger J. Quiroz R. (Los Ángeles, California)

---

## 0. Cómo trabajar en este proyecto (léelo primero)

### Con quién trabajas
- Roger es ingeniero de sistemas pero **no usa la terminal**. Tú ejecutas todos los comandos. Nunca le pidas que escriba comandos.
- Cuando necesites que Roger haga algo, dale instrucciones **clic por clic, una acción por paso**, en español sencillo.
- Habla con Roger en **español**. El contenido público del sitio va en **inglés** (ver sección 2.6).
- Al terminar cada fase: resumen de 3–5 líneas, enlace para ver el resultado y lista explícita de **pendientes**.

### Sesión de Chrome lista
- Tienes acceso a **Chrome con la sesión ya iniciada** en:
  - **GitHub**, cuenta `venezurecord`, que todavía no tiene repositorios.
  - **Cloudflare**, en una pestaña abierta.
- Úsala para crear el repositorio y el proyecto de Cloudflare Pages.

### Límites al usar el navegador (obligatorios)
- No escribas contraseñas, códigos 2FA ni datos de pago. No crees cuentas nuevas.
- **Pide confirmación a Roger antes de**:
  - autorizar conexiones OAuth (Cloudflare ↔ GitHub);
  - aceptar términos;
  - comprar el dominio;
  - publicar cualquier cosa fuera del repositorio.
- Si algo pide iniciar sesión otra vez, detente y pídele a Roger que lo haga.

### Pila técnica (estándar de Roger)
- **Astro** (sitio estático) + **Content Collections** con esquema validado (zod).
- Hosting **solo Cloudflare**: Pages para el sitio, Registrar para el dominio.
- Repositorio en GitHub, despliegue automático a Cloudflare Pages en cada push a `main`.
- Sin base de datos ni CMS de pago. Las noticias son archivos Markdown en el repo.

---

## 1. Qué es el producto

**Venezuela Record** es un archivo cronológico en inglés de noticias políticas sobre Venezuela, **republicadas** desde las fuentes originales con crédito completo.

- No escribimos las noticias: las **republicamos**. Siempre con:
  - el **autor original**;
  - el **medio original**;
  - la **fecha original**;
  - el **enlace a la nota original**.
- Cada republicación indica quién la subió: **Roger Q.** o **Eyleen V.** Ese crédito es solo de la republicación, nunca de autoría.
- Orden **cronológico por fecha de publicación original**, nunca por fecha de republicación.
- Alcance temporal: enero 2025 → hoy, y se sigue alimentando.

---

## 2. Reglas editoriales (deben quedar implementadas en el código)

### 2.1 Fuentes permitidas

| Nivel | Fuentes | Qué se republica | Imagen |
| --- | --- | --- | --- |
| **A — Autorizadas** | Voluntad Popular (https://voluntadpopular.com/) y VenAmérica (https://venamerica.org/home/). Roger tiene permiso de ambas para difundir sus noticias. | Texto completo (traducido al inglés), con autor, medio, fecha y enlace | La **misma imagen de la publicación original**, guardada en el repo, con pie: `Photo: <medio original>` |
| **B — Otros medios** | Medios serios cuyas noticias cumplan el alcance (2.2): agencias, prensa venezolana independiente, ONG de DDHH (Foro Penal, etc.) | **Solo** titular, un resumen propio de máximo 60 palabras y el enlace "Read the full story at <medio>". **Nunca** el texto completo. | **No** se copia su foto. Se muestra una "tarjeta de fuente" con el nombre del medio. Excepción: imágenes con licencia libre (CC BY/BY-SA, dominio público) con su crédito y licencia. |

- El nivel se guarda en cada noticia (`sourceTier: "A" | "B"`).
- La plantilla aplica la regla automáticamente: si es B, no renderiza `body` completo ni `image` sin `imageLicense`.

### 2.2 Alcance temático
- **Sí:**
  - política venezolana;
  - represión y presos políticos;
  - derechos humanos;
  - elecciones y poder;
  - decisiones internacionales que afecten políticamente a Venezuela;
  - situación del país (economía, servicios, crisis humanitaria) en su dimensión política;
  - hechos que afecten a los ciudadanos venezolanos en general.
- **No:**
  - farándula;
  - deportes;
  - noticias de migración;
  - vida de venezolanos en EE. UU.;
  - contenido de opinión sin hecho noticioso.
- Los artículos de opinión de las fuentes A se pueden republicar solo si tratan un hecho del alcance, y se etiquetan como `Opinion`.

### 2.3 Créditos visibles en cada noticia
Bloque de créditos en la parte superior del artículo y repetido en la tarjeta de listado:

```
Originally published by <Medio original> · <Fecha original, ej. March 3, 2026>
Written by <Autor original>        (si no hay autor: "Staff, <Medio>")
Republished by Roger Q.  ·  <fecha de republicación>     (o Eyleen V.)
Read the original: <enlace>
```

Al pie de cada artículo de nivel A: *"Republished with permission of <Medio>. Translated from Spanish by Venezuela Record."*

### 2.4 Fechas y orden
- `originalDate` (fecha de la nota original) es **obligatoria** y es la que ordena todo el sitio.
- `republishedDate` se muestra en pequeño.
- **Inicio:** de la más reciente a la más antigua.
- **Archive / Timeline** (`/timeline`):
  - agrupado por mes;
  - con selector *Newest first / Oldest first*;
  - por defecto, *Oldest first* desde enero 2025.

### 2.5 Imágenes
- Nivel A:
  - se descarga la imagen original y se guarda en `public/images/news/YYYY/MM/<slug>.<ext>`;
  - se optimiza con `astro:assets` (WebP, varios tamaños);
  - nunca se usa hotlinking.
- Cada imagen lleva `imageCredit` (obligatorio) y `imageAlt` en inglés.
- Nivel B: ver 2.1.

### 2.6 Idioma
- Interfaz y artículos en **inglés**.
- Para fuentes A, el texto se traduce fielmente, sin añadir ni quitar contenido, y se enlaza el original en español.
- Los títulos guardan el título original en español en `originalTitle`.
- **Decisión pendiente de confirmar con Roger:** si prefiere sitio bilingüe ES/EN, la arquitectura debe permitir agregar `/es/` después sin rehacer el contenido. Deja preparado `i18n` en la configuración de Astro.

### 2.7 Robots y acceso a las fuentes
- **Respeta `robots.txt`.** `voluntadpopular.com` bloquea el acceso automatizado a su API (`/wp-json/`). No la raspes.
- El ingreso de noticias es **manual asistido** (ver Fase 3). Solo automatiza la lectura de una fuente si su `robots.txt` lo permite (por ejemplo, un feed RSS permitido) o si la organización da acceso explícito.

---

## 3. Modelo de contenido

`src/content/config.ts`, colección `news`:

```ts
import { defineCollection, z } from "astro:content";

const news = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),                       // título en inglés
      originalTitle: z.string(),               // título original (español)
      summary: z.string().max(400),            // resumen en inglés (tarjetas, SEO)
      originalDate: z.coerce.date(),           // ORDENA EL SITIO
      republishedDate: z.coerce.date(),
      republishedBy: z.enum(["Roger Q.", "Eyleen V."]),
      sourceName: z.string(),                  // "Voluntad Popular", "VenAmérica", "Foro Penal"...
      sourceUrl: z.string().url(),             // enlace a la nota original
      sourceTier: z.enum(["A", "B"]),
      originalAuthor: z.string().default(""),  // vacío => "Staff, <sourceName>"
      category: z.enum([
        "Political prisoners",
        "Repression & human rights",
        "Elections & power",
        "International pressure",
        "Country situation",
        "Opposition & resistance",
        "Opinion",
      ]),
      tags: z.array(z.string()).default([]),
      image: image().optional(),               // obligatoria si sourceTier = "A"
      imageCredit: z.string().optional(),      // obligatoria si hay imagen
      imageAlt: z.string().optional(),
      imageLicense: z.string().optional(),     // solo para nivel B con licencia libre
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      needsTranslation: z.boolean().default(false), // true = aún en español; no se publica
    }).superRefine((d, ctx) => {
      if (d.sourceTier === "A" && !d.image)
        ctx.addIssue({ code: "custom", message: "Tier A requires the original image" });
      if (d.image && !d.imageCredit)
        ctx.addIssue({ code: "custom", message: "imageCredit is required" });
      if (d.sourceTier === "B" && d.image && !d.imageLicense)
        ctx.addIssue({ code: "custom", message: "Tier B images need a free license" });
    }),
});

export const collections = { news };
```

- Archivos en `src/content/news/YYYY/YYYY-MM-DD-<slug>.md`.
- El build debe **fallar** si una noticia rompe el esquema. Así nadie publica sin créditos.
- Las noticias con `draft: true` o `needsTranslation: true` no aparecen en el sitio de producción. En las vistas previas de los PR sí se muestran, con una etiqueta visible "Pending translation".

---

## 4. Diseño

### Referencia visual
Revista limpia y minimalista, al estilo de los temas "Cambridge" y "Hague" que Roger compartió. Tómalos como referencia de estructura; **no copies código, logos ni assets de esos temas**.

- **Cabecera:**
  - wordmark **VENEZUELA RECORD** en tipografía serif fuerte;
  - debajo, la línea *"A chronological record of Venezuela's political news"*;
  - una barra fina tricolor (amarillo, azul, rojo) como único toque de color nacional.
- **Navegación:** Home · Timeline · Political prisoners · Human rights · Elections & power · International · Country situation · About.
- **Home:**
  1. **Hero:** noticia destacada grande al centro, dos noticias medianas a un lado y una columna "Latest" con 5 titulares, fecha y miniatura.
  2. **Secciones por categoría:** cuadrícula de 4 tarjetas (imagen o tarjeta de fuente, categoría, titular, fecha original, fuente) y enlace "View all »".
  3. **Franja "From our sources":** logos de texto de Voluntad Popular y VenAmérica, con enlace a sus sitios.
- **Artículo:**
  - columna de lectura de unos 680 px;
  - bloque de créditos (2.3) arriba;
  - imagen con pie de crédito;
  - cuerpo;
  - caja final "Read the original at <medio>" y aviso de permiso o traducción;
  - debajo, "More from <categoría>".
- **Tipografía:** titulares en serif (Source Serif 4 o Newsreader) y texto e interfaz en Inter. Las dos son Google Fonts y se cargan con `font-display: swap`.
- **Colores:**
  - fondo blanco y texto casi negro `#111`;
  - grises para metadatos;
  - acento en azul oscuro `#1F3A93` para enlaces y categorías;
  - modo oscuro respetando `prefers-color-scheme`.
- **Responsive:** primero móvil. En móvil la cuadrícula pasa a una columna y la navegación a un menú hamburguesa.

### Páginas
| Ruta | Contenido |
| --- | --- |
| `/` | Home (hero + secciones) |
| `/timeline` | Archivo cronológico agrupado por mes, con selector de orden |
| `/news/<slug>` | Artículo |
| `/category/<slug>` | Listado por categoría, paginado |
| `/source/<slug>` | Listado por medio (Voluntad Popular, VenAmérica, …) |
| `/about` | Qué es Venezuela Record. Republican Roger J. Quiroz R. (Ing. de Sistemas, activista de Voluntad Popular, colaborador de VenAmérica y Venezolanos en Ventura) y Eyleen V. Con base en Los Ángeles, California. |
| `/sources-and-permissions` | Fuentes, permisos de Voluntad Popular y VenAmérica, cómo se acredita, política de imágenes |
| `/corrections` | Política de correcciones y retiro de contenido. Contacto: venezurecord@gmail.com |
| `/rss.xml`, `/sitemap-index.xml` | RSS y sitemap |

---

## 5. Fases de construcción

> Trabaja fase por fase. Al final de cada una, muestra el resultado a Roger y espera su "OK" antes de seguir, salvo en las fases marcadas como continuas.

### Fase 1 — Repositorio y base del proyecto
1. En Chrome, en GitHub (`venezurecord`), crea el repositorio **`venezuelarecord`**, público, con README.
2. Clona el repositorio localmente y crea el proyecto Astro (TypeScript estricto). Integraciones:
   - `@astrojs/sitemap`
   - `@astrojs/rss`
   - `@astrojs/mdx`
3. Configura `site: "https://venezuelarecord.pages.dev"`. Se cambiará a `.com` en la Fase 7.
4. Crea el esquema de contenido de la sección 3.
5. Agrega 3 noticias de ejemplo marcadas `draft: true` para probar el esquema.
6. Crea `CLAUDE.md` en la raíz con un resumen de este brief. Copia este brief a `docs/BRIEF.md`.
7. Haz el primer commit y push a `main`.

**Listo cuando:** el repositorio existe en GitHub con el proyecto Astro y `npm run build` pasa.

### Fase 2 — Diseño y plantillas
1. Construye los componentes:
   - `Header`
   - `Nav`
   - `HeroGrid`
   - `NewsCard` (con variante "tarjeta de fuente" para nivel B)
   - `CategorySection`
   - `LatestList`
   - `CreditsBlock`
   - `Timeline`
   - `Footer`
2. Construye todas las páginas de la sección 4.
3. Implementa las reglas de 2.1 a 2.5 en las plantillas (nivel B sin texto completo ni foto sin licencia).
4. Agrega SEO:
   - `<title>` y meta description por página;
   - Open Graph con la imagen de la noticia y su crédito;
   - JSON-LD `NewsArticle` con `author` = autor original, `publisher` = medio original y `isBasedOn` = URL original;
   - `link rel="canonical"` apuntando a la URL de Venezuela Record.
5. Revisa la accesibilidad: contraste AA, `alt` en todas las imágenes, foco visible y navegación con teclado.

**Listo cuando:** el sitio se ve completo en local en escritorio y móvil, con capturas para Roger.

### Fase 3 — Flujo de publicación sin terminal
Roger y Eyleen deben poder publicar **solo desde la web de GitHub**, sin terminal.

1. Crea el formulario `.github/ISSUE_TEMPLATE/nueva-noticia.yml` ("Nueva noticia") con estos campos:
   - URL de la nota original (obligatorio)
   - Fuente: Voluntad Popular / VenAmérica / Otro medio
   - Nombre del medio (si es otro)
   - Título original
   - Autor original
   - Fecha de publicación original (AAAA-MM-DD, obligatorio)
   - Publicado por: Roger Q. / Eyleen V.
   - Categoría (lista de la sección 3)
   - Texto completo (solo fuentes A) o resumen (otros medios)
   - Imagen: se arrastra al cuerpo del issue
   - Crédito de la imagen
2. Crea la GitHub Action `.github/workflows/nueva-noticia.yml`, que se dispara cuando un issue recibe la etiqueta `nueva-noticia`:
   - lee los campos del formulario;
   - descarga la imagen adjunta al repo;
   - genera el archivo Markdown con el esquema;
   - abre un **Pull Request** "News: <título>" y comenta en el issue con el enlace.
3. La traducción al inglés **no** va en la Action, para no necesitar claves de API. El PR se crea con el texto original y `needsTranslation: true`. Roger luego abre Claude Code y dice *"procesa las noticias pendientes"*. Tú entonces:
   - traduces el título, el resumen y el cuerpo;
   - quitas la marca;
   - validas el esquema;
   - haces commit en el mismo PR.
4. Cloudflare Pages genera un **enlace de vista previa** por cada PR. Al aprobar y fusionar el PR (botón verde *Merge*), la noticia se publica sola.
5. Escribe `docs/COMO-PUBLICAR.md` en español con los pasos clic por clic para Roger y Eyleen. Incluye capturas.

**Listo cuando:** una noticia de prueba viaja de issue a PR a vista previa a publicación sin usar la terminal.

### Fase 4 — Contenido inicial (continua, en tandas)
1. Usando Chrome como lo haría una persona (sin raspado masivo y respetando `robots.txt`), revisa la sección **Noticias** de voluntadpopular.com. Haz lo mismo con el sitio y el Instagram de VenAmérica (`@venamerica_comunica`).
2. Arma una lista de candidatas desde **enero 2025 hasta hoy** que cumplan el alcance (2.2). Preséntala a Roger en una tabla con fecha original, título, medio, autor y categoría sugerida.
3. Con la aprobación de Roger, carga las noticias en tandas de 5–10 siguiendo el esquema, con la imagen original y los créditos.
   - `republishedBy`: por defecto **Roger Q.**, salvo que Roger indique Eyleen V.
4. Redes de referencia para detectar noticias (no para copiar imágenes de terceros):
   - Instagram: `@voluntadpopular`, `@vpinternacional`, `@vp_losangeles_us`, `@leopoldolopezoficial`, `@venamerica_comunica`.
   - Si una publicación de estas cuentas reproduce material de otro medio, la noticia se trata como **nivel B** con ese medio como fuente.

**Listo cuando:** hay al menos 20 noticias publicadas y verificadas, en orden cronológico correcto.

### Fase 5 — Publicación en Cloudflare Pages (dominio de prueba)
1. En Chrome, en Cloudflare, ve a **Workers & Pages → Create → Pages → Connect to Git**. **Antes de autorizar GitHub, pide confirmación a Roger.**
2. Elige el repositorio `venezuelarecord`, el preset **Astro**, el comando `npm run build` y la salida `dist`.
3. Nombra el proyecto `venezuelarecord`, para que quede `venezuelarecord.pages.dev`. Si ese nombre no está disponible, usa `venezuela-record` y actualiza `site` en la configuración.
4. Activa las vistas previas para las ramas de los PR.
5. Verifica que el sitio publicado coincide con el local.

**Listo cuando:** `https://venezuelarecord.pages.dev` está en línea y los PR generan vista previa.

### Fase 6 — Control de calidad
Revisa cada punto y entrega a Roger un informe con ✅/❌:
- [ ] Todas las noticias tienen medio, autor (o "Staff"), fecha original, enlace original y "Republished by".
- [ ] El orden cronológico es correcto en Home, Timeline, categorías y medios.
- [ ] Las noticias de nivel B no muestran texto completo ni fotos sin licencia.
- [ ] Todas las imágenes tienen crédito y `alt`.
- [ ] Ninguna noticia está fuera del alcance (2.2).
- [ ] Lighthouse móvil ≥ 90 en Performance, Accessibility, Best Practices y SEO.
- [ ] El RSS y el sitemap son válidos.
- [ ] Las páginas About, Sources & permissions y Corrections están completas.
- [ ] No hay enlaces rotos.

### Fase 7 — Dominio definitivo (más adelante, solo con la aprobación de Roger)
1. Comprueba que `venezuelarecord.com` está disponible en Cloudflare Registrar.
2. **Detente.** La compra la hace Roger con su método de pago. Dale los pasos clic por clic.
3. Cuando Roger confirme la compra, conecta el dominio en Pages → **Custom domains** y agrega también `www`, con redirección a la versión sin `www`.
4. Cambia `site` a `https://venezuelarecord.com`, revisa las canónicas y el sitemap, y vuelve a desplegar.

---

## 6. Qué no hacer
- No copies el texto completo de medios que no sean Voluntad Popular o VenAmérica.
- No uses fotos de agencias (AP, Reuters, AFP, EFE, Getty) ni de medios de nivel B sin licencia libre.
- No pongas "by Roger Q." o "by Eyleen V." como autoría. Su crédito es solo "Republished by".
- No ordenes por fecha de republicación.
- No raspes sitios contra su `robots.txt`.
- No guardes contraseñas, tokens ni claves en el repositorio.
- No compres, pagues ni autorices nada sin el "sí" explícito de Roger.

## 7. Formato del reporte al final de cada fase
```
✅ Fase N terminada: <qué se hizo en 2–3 líneas>
🔗 Ver: <enlace a vista previa o captura>
⏭️ Siguiente: <fase siguiente>
📋 Pendientes de Roger:
- ...
```
