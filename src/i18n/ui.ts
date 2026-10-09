// Interface strings and locale helpers. English lives at "/", Spanish at "/es/".
// Visitors are sent to their browser's language by functions/_middleware.js.

export const LANGS = ['en', 'es'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';

export const LANG_META: Record<Lang, { label: string; htmlLang: string; ogLocale: string; intl: string }> = {
  en: { label: 'English', htmlLang: 'en', ogLocale: 'en_US', intl: 'en-US' },
  es: { label: 'Español', htmlLang: 'es', ogLocale: 'es_ES', intl: 'es' },
};

const en = {
  'site.tagline': "A chronological record of Venezuela's political news",
  'site.description':
    "Venezuela Record is a chronological archive of Venezuela's political news in English and Spanish, republished from the original sources with full credit.",
  'nav.home': 'Home',
  'nav.timeline': 'Timeline',
  'nav.about': 'About',
  'nav.menu': 'Menu',
  'nav.main': 'Main',
  'nav.language': 'Language',
  'skip': 'Skip to content',

  'home.latest': 'Latest',
  'home.viewAll': 'View all',
  'home.empty': 'The first stories are being prepared. Please check back soon.',
  'home.title': "Venezuela Record — A chronological record of Venezuela's political news",

  'card.source': 'Source',
  'pending.translation': 'Pending translation',
  'pending.draft': 'Draft',

  'credits.originallyPublished': 'Originally published by',
  'credits.writtenBy': 'Written by',
  'credits.republishedBy': 'Republished by',
  'credits.readOriginal': 'Read the original',
  'credits.staff': 'Staff',

  'article.readOriginalAt': 'Read the original at',
  'article.readFullStoryAt': 'Read the full story at',
  'article.permissionNote': 'Republished with permission of {source}. Translated from Spanish by Venezuela Record.',
  'article.permissionNoteOriginal': 'Republished with permission of {source}.',
  'article.tierBNote':
    'Venezuela Record only links to this story. The summary above is our own; the full text belongs to {source}.',
  'article.moreFrom': 'More from {category}',
  'article.onlyInOtherLang': 'This story is not yet available in English. Showing the Spanish version.',
  'article.photo': 'Photo',

  'timeline.title': 'Timeline',
  'timeline.intro':
    "Every story in the archive, grouped by month of original publication. The record begins in January 2025.",
  'timeline.order': 'Order',
  'timeline.oldest': 'Oldest first',
  'timeline.newest': 'Newest first',
  'timeline.jump': 'Jump to month',
  'timeline.stories': '{n} stories',
  'timeline.story': '1 story',

  'category.title': '{category}',
  'source.title': 'News from {source}',
  'source.intro': 'Stories originally published by {source}, ordered by original publication date.',
  'source.visit': 'Visit {source}',
  'source.authorized': 'Authorized source — republished in full with permission.',
  'source.linked': 'Linked source — headline, our own summary and a link to the original.',

  'pagination.label': 'Pagination',
  'pagination.prev': 'Newer',
  'pagination.next': 'Older',
  'pagination.page': 'Page {n} of {total}',

  'footer.about':
    'Venezuela Record republishes news about Venezuela from the original sources, always with the original author, outlet, date and link. Rights belong to their owners.',
  'footer.pages': 'Pages',
  'footer.sections': 'Sections',
  'footer.contact': 'Contact',
  'footer.corrections': 'Corrections & takedowns',
  'footer.sourcesPermissions': 'Sources & permissions',
  'footer.rss': 'RSS feed',

  'share.title': 'Share',
  'share.native': 'Share',
  'share.copy': 'Copy link',
  'share.copied': 'Link copied',
  'share.newWindow': 'opens in a new window',

  'notFound.title': 'Page not found',
  'notFound.text': 'The page you are looking for does not exist or has moved.',
  'notFound.home': 'Go to the home page',
} as const;

export type UIKey = keyof typeof en;

const es: Record<UIKey, string> = {
  'site.tagline': 'Un registro cronológico de las noticias políticas de Venezuela',
  'site.description':
    'Venezuela Record es un archivo cronológico de las noticias políticas de Venezuela, republicadas desde las fuentes originales con crédito completo.',
  'nav.home': 'Inicio',
  'nav.timeline': 'Cronología',
  'nav.about': 'Acerca de',
  'nav.menu': 'Menú',
  'nav.main': 'Principal',
  'nav.language': 'Idioma',
  'skip': 'Saltar al contenido',

  'home.latest': 'Lo último',
  'home.viewAll': 'Ver todo',
  'home.empty': 'Estamos preparando las primeras noticias. Vuelve pronto.',
  'home.title': 'Venezuela Record — Un registro cronológico de las noticias políticas de Venezuela',

  'card.source': 'Fuente',
  'pending.translation': 'Traducción pendiente',
  'pending.draft': 'Borrador',

  'credits.originallyPublished': 'Publicado originalmente por',
  'credits.writtenBy': 'Escrito por',
  'credits.republishedBy': 'Republicado por',
  'credits.readOriginal': 'Leer el original',
  'credits.staff': 'Redacción',

  'article.readOriginalAt': 'Lee el original en',
  'article.readFullStoryAt': 'Lee la noticia completa en',
  'article.permissionNote': 'Republicado con permiso de {source}.',
  'article.permissionNoteOriginal': 'Republicado con permiso de {source}.',
  'article.tierBNote':
    'Venezuela Record solo enlaza esta noticia. El resumen es nuestro; el texto completo pertenece a {source}.',
  'article.moreFrom': 'Más de {category}',
  'article.onlyInOtherLang': 'Esta noticia aún no está disponible en español. Se muestra la versión en inglés.',
  'article.photo': 'Foto',

  'timeline.title': 'Cronología',
  'timeline.intro':
    'Todas las noticias del archivo, agrupadas por mes de publicación original. El registro comienza en enero de 2025.',
  'timeline.order': 'Orden',
  'timeline.oldest': 'Más antiguas primero',
  'timeline.newest': 'Más recientes primero',
  'timeline.jump': 'Ir al mes',
  'timeline.stories': '{n} noticias',
  'timeline.story': '1 noticia',

  'category.title': '{category}',
  'source.title': 'Noticias de {source}',
  'source.intro': 'Noticias publicadas originalmente por {source}, ordenadas por fecha de publicación original.',
  'source.visit': 'Visitar {source}',
  'source.authorized': 'Fuente autorizada: se republica completa, con permiso.',
  'source.linked': 'Fuente enlazada: titular, resumen propio y enlace al original.',

  'pagination.label': 'Paginación',
  'pagination.prev': 'Más recientes',
  'pagination.next': 'Más antiguas',
  'pagination.page': 'Página {n} de {total}',

  'footer.about':
    'Venezuela Record republica noticias sobre Venezuela desde las fuentes originales, siempre con el autor, el medio, la fecha y el enlace originales. Los derechos pertenecen a sus dueños.',
  'footer.pages': 'Páginas',
  'footer.sections': 'Secciones',
  'footer.contact': 'Contacto',
  'footer.corrections': 'Correcciones y retiros',
  'footer.sourcesPermissions': 'Fuentes y permisos',
  'footer.rss': 'Feed RSS',

  'share.title': 'Compartir',
  'share.native': 'Compartir',
  'share.copy': 'Copiar enlace',
  'share.copied': 'Enlace copiado',
  'share.newWindow': 'se abre en una ventana nueva',

  'notFound.title': 'Página no encontrada',
  'notFound.text': 'La página que buscas no existe o cambió de dirección.',
  'notFound.home': 'Ir a la página de inicio',
};

const dict: Record<Lang, Record<UIKey, string>> = { en, es };

/** Translate a UI key, replacing {placeholders}. */
export function t(lang: Lang, key: UIKey, vars: Record<string, string | number> = {}): string {
  return dict[lang][key].replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}

/** Prefix a site path ("/timeline/") with the language ("/es/timeline/"). */
export function localePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === DEFAULT_LANG ? clean : `/${lang}${clean}`;
}

/** Remove the language prefix from a pathname: "/es/news/x/" → "/news/x/". */
export function stripLang(pathname: string): string {
  return pathname.replace(/^\/es(?=\/|$)/, '') || '/';
}

/** Language of a pathname. */
export const langFromPath = (pathname: string): Lang =>
  /^\/es(\/|$)/.test(pathname) ? 'es' : 'en';

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'es' : 'en');

/** Named static pages with localized titles. Paths are the same in both languages. */
export const PAGES = {
  about: { path: '/about/', en: 'About', es: 'Acerca de' },
  sources: { path: '/sources-and-permissions/', en: 'Sources & permissions', es: 'Fuentes y permisos' },
  corrections: { path: '/corrections/', en: 'Corrections', es: 'Correcciones' },
} as const;
