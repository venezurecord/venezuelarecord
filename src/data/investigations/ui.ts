// Interface strings used only by the investigation pages (the site-wide ones live in src/i18n/ui.ts).
import type { Lang } from '../../i18n/ui';

const en = {
  kicker: 'Investigation',
  original: 'Original reporting',
  ideaCredit: 'Original idea: <strong>{name}</strong>. Research and editing: Venezuela Record.',
  updated: 'Updated {date}',
  scroll: 'Scroll',
  readTime: '{n}-minute read',
  quotesTitle: 'What the UN says',
  quoteSource: 'UN Fact-Finding Mission, report A/HRC/63/57, para. {p}',
  translationNote: 'Translation by Venezuela Record.',
  lanes: 'Economy / Security',
  laneEcon: 'Economy',
  laneSec: 'Security apparatus',
  laneBase: 'Turning point',
  toc: 'In this piece',
  copyLink: 'Copy link',
  linkCopied: 'Link copied',
  sourceN: 'Source {n}',
  sources: 'Sources',
  openOriginal: 'Open the original document',
  inSourceList: 'See in the source list',
  closeCard: 'Close',
  noLink: 'No public online copy',

  // sections
  sigKicker: 'The signature',
  sigTitle: 'The same signature, two posts',
  sigIntro:
    'Organic laws in Venezuela are countersigned by the whole cabinet. What stands out is that one name appears twice on the same law, because she held two posts at once — and that, since January 2026, it appears alone.',
  sigHighlightNote: 'Yellow highlighting added by Venezuela Record.',
  sigAlone: 'Signed alone, no countersignatures',
  sigPosts: 'Posts in this signature',
  sigLedger: 'Six signatures, 2015–2026',
  sigSwipe: 'Swipe to see the six signatures',
  gzSwipe: 'Swipe to see every document',
  orgKicker: 'Org chart',
  orgTitle: 'Who appoints whom',
  orgIntro:
    'Follow the four guided steps, or switch to free mode and open any profile. Each line says what kind of link it is and where it comes from.',
  modeLabel: 'Viewing mode',
  modeGuided: 'Guided',
  modeFree: 'Free',
  filters: 'Line types',
  step: 'Step {n} of {total}',
  prev: 'Previous',
  next: 'Next',
  freeHint: 'Tap or click any person or institution to light up its connections and open its profile.',
  open: 'Open profile',
  close: 'Close',
  appointedBy: 'Appointed by / answers to',
  appoints: 'Appoints / commands',
  linksIn: 'Links',
  facts: 'What the record shows',
  noPhoto: 'No freely licensed photo',
  levelN: 'Level {n}',
  tlKicker: '2026 in two lanes',
  tlTitle: 'What moved and what stayed',
  tlIntro: 'Every point is a dated, sourced fact. Filter by lane, then tap a point to read it.',
  tlAll: 'All',
  tlPick: 'Select a point on the timeline to read the details.',
  gzKicker: 'The documents',
  gzTitle: 'The gazettes',
  gzIntro: 'Each official act, the key text highlighted, what it proves — and what it does not.',
  gzProves: 'What it proves',
  gzNot: 'What it does not prove',
  penKicker: 'The laws',
  penTitle: 'The laws that punish opinion',
  penIntro: 'Maximum prison sentence, on a 0–30-year scale, and status as of {date}.',
  penLaw: 'Law',
  penMax: 'Maximum prison',
  penStatus: 'Status',
  penYears: 'years',
  vaKicker: 'VenApp',
  vaTitle: 'An app for reporting neighbors',
  vaIntro:
    'From public-service complaints to anonymous reports against opponents. There is no public evidence that it was used in 2026; the UN does describe informant networks.',
  vaUncertain: 'No public evidence',
  balKicker: 'The balance',
  balTitle: 'What changed and what did not',
  balIntro: 'First, Foro Penal’s 2026 figures. Then what changed and what did not, each with its source.',
  balSlider: 'Compare what changed with what did not',
  balChanged: 'What changed',
  balUnchanged: 'What did not',
  waffleCaption: '{before} of {total} political detentions documented by the UN between September 2025 and July 2026 happened before the end of January 2026 (para. 57).',
  waffleBefore: 'Before February 2026',
  waffleAfter: 'February–July 2026',
  methodKicker: 'Method',
  methodTitle: 'How we did it',
  methodBody:
    'This piece is built on primary documents: Official Gazettes of the Bolivarian Republic of Venezuela, the texts of the laws, Supreme Court rulings and the 2026 report of the UN Independent International Fact-Finding Mission on Venezuela, plus verified press reports. Every line in the org chart and every point on the timeline cites its source. The signature crops come from the gazettes themselves; the yellow highlighting is ours, and ID numbers were covered. Portraits are only used when they carry a free license (public domain or Creative Commons); when none exists, we show the public-domain emblem of the agency the person heads, with their initials.',
  methodWarning:
    'A command structure does not by itself prove individual responsibility. Allegations against specific people are cited as what they are: allegations attributed to whoever makes them.',
  methodUnverified: 'What we could not verify',
  methodUnverifiedItems: [
    'Whether Alexis Rodríguez Cabello still heads SEBIN: the last public confirmation we found is from March 2026.',
    'Which force detained Javier Oropeza on 17 September 2026: El Pitazo says the PNB; Infobae says SEBIN.',
    'Whether VenApp is used for reporting in 2026: there is no public evidence.',
  ],
  methodCorrections: 'Found an error? Write to us through our {link}. We reply within 7 days.',
  correctionsPage: 'corrections page',
  methodChecked: 'Sources and posts last checked on {date}.',
  indexTitle: 'Investigations',
  indexIntro:
    'Original reporting by Venezuela Record, built on official documents and verified sources. Each piece credits the person who proposed the idea.',
  readInvestigation: 'Read the investigation',
  homeKicker: 'Investigation',
};

type Key = keyof typeof en;
type Dict = { [K in Key]: (typeof en)[K] extends readonly string[] ? readonly string[] : string };

const es: Dict = {
  kicker: 'Investigación',
  original: 'Trabajo original',
  ideaCredit: 'Idea original: <strong>{name}</strong>. Investigación y edición: Venezuela Record.',
  updated: 'Actualizado al {date}',
  scroll: 'Desliza',
  readTime: 'Lectura de {n} minutos',
  quotesTitle: 'Lo que dice la ONU',
  quoteSource: 'Misión de la ONU, informe A/HRC/63/57, párr. {p}',
  translationNote: 'Traducción de Venezuela Record.',
  lanes: 'Economía / Seguridad',
  laneEcon: 'Economía',
  laneSec: 'Aparato de seguridad',
  laneBase: 'Punto de quiebre',
  toc: 'En esta pieza',
  copyLink: 'Copiar enlace',
  linkCopied: 'Enlace copiado',
  sourceN: 'Fuente {n}',
  openOriginal: 'Abrir documento original',
  inSourceList: 'Ver en la lista de fuentes',
  closeCard: 'Cerrar',
  noLink: 'Sin copia pública en línea',
  sources: 'Fuentes',

  sigKicker: 'La firma',
  sigTitle: 'La misma firma, dos cargos',
  sigIntro:
    'En Venezuela, las leyes orgánicas las refrenda todo el gabinete. Lo singular es que un mismo nombre aparezca dos veces en la misma ley, porque ocupaba dos cargos a la vez, y que desde enero de 2026 aparezca solo.',
  sigHighlightNote: 'El resaltado amarillo es de Venezuela Record.',
  sigAlone: 'Firma sola, sin refrendos',
  sigPosts: 'Cargos con los que firma',
  sigLedger: 'Seis firmas, 2015–2026',
  sigSwipe: 'Desliza para ver las seis firmas',
  gzSwipe: 'Desliza para ver todos los documentos',
  orgKicker: 'Organigrama',
  orgTitle: 'Quién designa a quién',
  orgIntro:
    'Sigue los cuatro pasos guiados o cambia al modo libre y abre cualquier ficha. Cada línea dice qué tipo de vínculo es y de dónde sale.',
  modeLabel: 'Modo de lectura',
  modeGuided: 'Guiado',
  modeFree: 'Libre',
  filters: 'Tipos de línea',
  step: 'Paso {n} de {total}',
  prev: 'Anterior',
  next: 'Siguiente',
  freeHint: 'Toca o haz clic en cualquier persona o institución para iluminar sus conexiones y abrir su ficha.',
  open: 'Abrir ficha',
  close: 'Cerrar',
  appointedBy: 'Lo designó / depende de',
  appoints: 'Designa / manda sobre',
  linksIn: 'Vínculos',
  facts: 'Lo que muestran los documentos',
  noPhoto: 'Sin foto con licencia libre',
  levelN: 'Nivel {n}',
  tlKicker: '2026 en dos carriles',
  tlTitle: 'Lo que se movió y lo que se quedó',
  tlIntro: 'Cada punto es un hecho con fecha y fuente. Filtra por carril y toca un punto para leerlo.',
  tlAll: 'Todo',
  tlPick: 'Elige un punto de la línea de tiempo para leer el detalle.',
  gzKicker: 'Los documentos',
  gzTitle: 'Las gacetas',
  gzIntro: 'Cada acto oficial, el texto clave resaltado, qué prueba y qué no prueba.',
  gzProves: 'Qué prueba',
  gzNot: 'Qué no prueba',
  penKicker: 'Las leyes',
  penTitle: 'Las leyes que castigan la opinión',
  penIntro: 'Pena máxima de prisión, en una escala de 0 a 30 años, y estado al {date}.',
  penLaw: 'Ley',
  penMax: 'Prisión máxima',
  penStatus: 'Estado',
  penYears: 'años',
  vaKicker: 'VenApp',
  vaTitle: 'Una aplicación para denunciar al vecino',
  vaIntro:
    'De las quejas por servicios públicos a las denuncias anónimas contra opositores. No hay prueba pública de que se usara en 2026; la ONU sí describe redes de informantes.',
  vaUncertain: 'Sin prueba pública',
  balKicker: 'El balance',
  balTitle: 'Lo que cambió y lo que no',
  balIntro: 'Primero, las cifras de Foro Penal de 2026. Después, lo que cambió y lo que no, cada punto con su fuente.',
  balSlider: 'Comparar lo que cambió con lo que no',
  balChanged: 'Sí cambió',
  balUnchanged: 'No cambió',
  waffleCaption: '{before} de las {total} detenciones políticas que documentó la ONU entre septiembre de 2025 y julio de 2026 ocurrieron antes de fin de enero de 2026 (párr. 57).',
  waffleBefore: 'Antes de febrero de 2026',
  waffleAfter: 'Febrero–julio de 2026',
  methodKicker: 'Método',
  methodTitle: 'Cómo se hizo',
  methodBody:
    'Esta pieza se basa en documentos primarios: gacetas oficiales de la República Bolivariana de Venezuela, los textos de las leyes, sentencias del TSJ y el informe de 2026 de la Misión Internacional Independiente de Determinación de los Hechos de la ONU, además de prensa verificada. Cada línea del organigrama y cada punto de la línea de tiempo citan su fuente. Los recortes de las firmas salen de las propias gacetas; el resaltado amarillo es nuestro y tapamos los números de cédula. Solo usamos retratos con licencia libre (dominio público o Creative Commons); si no existe ninguno, mostramos el escudo (de dominio público) del organismo que la persona dirige, con sus iniciales.',
  methodWarning:
    'Una estructura de mando no prueba por sí sola responsabilidad individual. Las acusaciones contra personas concretas se citan como lo que son: denuncias atribuidas a quien las hace.',
  methodUnverified: 'Lo que no pudimos verificar',
  methodUnverifiedItems: [
    'Si Alexis Rodríguez Cabello sigue al frente del SEBIN: la última confirmación pública que encontramos es de marzo de 2026.',
    'Qué cuerpo detuvo a Javier Oropeza el 17 de septiembre de 2026: El Pitazo dice la PNB; Infobae, el SEBIN.',
    'Si VenApp se usa para denunciar en 2026: no hay prueba pública.',
  ],
  methodCorrections: '¿Encontraste un error? Escríbenos desde nuestra {link}. Respondemos en un máximo de 7 días.',
  correctionsPage: 'página de correcciones',
  methodChecked: 'Fuentes y cargos verificados por última vez el {date}.',
  indexTitle: 'Investigaciones',
  indexIntro:
    'Trabajo original de Venezuela Record, basado en documentos oficiales y fuentes verificadas. Cada pieza da crédito a quien propuso la idea.',
  readInvestigation: 'Leer la investigación',
  homeKicker: 'Investigación',
};

const dict = { en, es } as Record<Lang, Dict>;

export function it(lang: Lang, key: Exclude<Key, 'methodUnverifiedItems'>, vars: Record<string, string | number> = {}): string {
  return (dict[lang][key] as string).replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}

export const itList = (lang: Lang, key: 'methodUnverifiedItems') => dict[lang][key];

/** "13 October 2026" / "13 de octubre de 2026" */
export const longDate = (lang: Lang, iso: string) =>
  new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'es', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${iso}T12:00:00Z`));

/** Section anchors per language (shareable: #signatures / #firmas, #org-chart / #organigrama …) */
export const ANCHORS = {
  en: { sig: 'signatures', org: 'org-chart', cap: 'residual-capacity', tl: 'timeline-2026', gz: 'gazettes', pen: 'laws', va: 'venapp', bal: 'balance', src: 'sources' },
  es: { sig: 'firmas', org: 'organigrama', cap: 'capacidad-residual', tl: 'cronologia-2026', gz: 'gacetas', pen: 'leyes', va: 'venapp', bal: 'balance', src: 'fuentes' },
} as const;

export const TOC_LABELS = {
  en: { sig: 'The signature', org: 'Org chart', cap: 'Capacity', tl: '2026', gz: 'Gazettes', pen: 'Laws', va: 'VenApp', bal: 'Balance', src: 'Sources' },
  es: { sig: 'La firma', org: 'Organigrama', cap: 'Capacidad', tl: '2026', gz: 'Gacetas', pen: 'Leyes', va: 'VenApp', bal: 'Balance', src: 'Fuentes' },
} as const;

/** Month labels for every axis in the piece (same capitalization everywhere). */
export const MONTHS = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct'],
} as const;
