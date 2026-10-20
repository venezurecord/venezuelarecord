// Investigation 2: "The Capacity to Persecute Is Still There" / "La capacidad de perseguir sigue ahí".
// Idea: Minerva Mendoza Paipa. Residual State capacity to persecute after January 2026, in three components kept
// apart (available capacity, documented exercise, risk of repetition), plus the Foro Penal series.
// Every figure and every row cites a numbered source of THIS piece (SOURCES below, 1–35).
import type { InvestigationMeta, L, Source } from './types';
import { SOURCES as PART1 } from './who-commands-venezuela-2026';
import ogEn from '../../assets/investigations/residual-capacity-2026/social-en.png';
import ogEs from '../../assets/investigations/residual-capacity-2026/social-es.png';
import cover from '../../assets/investigations/residual-capacity-2026/cover.png';

export const META: InvestigationMeta = {
  slug: 'residual-capacity-2026',
  title: { en: 'The Capacity to Persecute Is Still There', es: 'La capacidad de perseguir sigue ahí' },
  subtitle: {
    en: 'What the Venezuelan State can still do after January 2026, and what guarantees exist that it will stop',
    es: 'Qué puede seguir haciendo el Estado venezolano después de enero de 2026, y qué garantías existen de que deje de hacerlo',
  },
  summary: {
    en: 'Foro Penal verified 1,104 releases of political prisoners in 2026. But 11,468 people still live with restricted freedom, the laws used to persecute remain in force and almost every security body is still in place. Releasing people is not the same as repairing the harm.',
    es: 'Foro Penal verificó 1.104 excarcelaciones de presos políticos en 2026. Pero 11.468 personas siguen con su libertad restringida, las leyes usadas para perseguir siguen vigentes y casi todos los cuerpos de seguridad siguen en su lugar. Excarcelar no es reparar.',
  },
  published: '2026-10-20',
  updated: '2026-10-20',
  ideaBy: 'Minerva Mendoza Paipa',
  cover,
  social: { en: ogEn, es: ogEs },
};

/** Section anchors (shareable). The source list keeps the same anchor as part one. */
export const R_ANCHORS = {
  en: { fig: 'figures', comp: 'components', src: 'sources' },
  es: { fig: 'cifras', comp: 'componentes', src: 'fuentes' },
} as const;

/** Part-one source id -> id in this piece, for the sources both pieces share. */
const SHARED: [number, number][] = [[1, 14], [2, 15], [7, 16], [9, 17], [10, 18], [11, 19], [14, 20], [15, 21], [16, 22], [18, 23], [19, 24], [20, 25], [22, 26], [26, 27], [28, 28], [30, 29], [31, 30], [34, 31], [37, 32], [38, 33], [40, 34], [41, 35]];

export const SOURCES: Source[] = [
  { id: 1, outlet: 'Foro Penal', title: { en: 'The repression in figures (page updated continuously; figures as of 5 Oct 2026)', es: 'La represión en cifras (página que se actualiza; cifras al 5 oct 2026)' }, date: '5 Oct 2026', url: 'https://foropenal.com/represion-en-cifras' },
  { id: 2, outlet: 'Foro Penal', title: { en: 'Political prisoners in Venezuela as of 5 October 2026 (weekly balance)', es: 'Balance de presos políticos en Venezuela al 05/10/2026' }, date: '9 Oct 2026', url: 'https://foropenal.com/articulo/balance-de-presos-politicos-en-venezuela-al-05102026-por' },
  { id: 3, outlet: 'Foro Penal', title: { en: 'Proposed amendments to the draft Amnesty Law for Democratic Coexistence, submitted to the National Assembly (PDF)', es: 'Propuesta de modificación al proyecto de Ley de Amnistía para la Convivencia Democrática, entregada a la Asamblea Nacional (PDF)' }, date: '7 Feb 2026', url: 'https://foropenal.com/wp-content/uploads/2026/02/Propuesta-FORO-PENAL-a-la-AN-7-2-2026-EDITADA-PARA-DIVULGACION.pdf' },
  { id: 4, outlet: 'Gaceta Oficial', title: { en: 'Official Gazette No. 6,990 Extraordinary (19 Feb 2026): Amnesty Law for Democratic Coexistence (copy published by Foro Penal)', es: 'Gaceta Oficial N° 6.990 Extraordinaria (19 feb 2026): Ley de Amnistía para la Convivencia Democrática (copia publicada por Foro Penal)' }, date: '19 Feb 2026', url: 'https://foropenal.com/articulo/asamblea-nacional-ley-de-amnistia-para-la-convivencia-democratica-gaceta-oficial-n-6-990-extraordinario-19-de-febrero-2026' },
  { id: 5, outlet: 'Foro Penal', title: { en: 'Report on political repression in Venezuela, January–February 2026 (PDF)', es: 'Reporte sobre la represión política en Venezuela, enero–febrero 2026 (PDF)' }, date: '13 Mar 2026', url: 'https://foropenal.com/wp-content/uploads/2026/03/Reporte-EneroFebrero_2026_260313.pdf' },
  { id: 6, outlet: 'Foro Penal', title: { en: '“The Amnesty Law is a positive step, but the repressive apparatus remains intact”', es: '«La Ley de Amnistía es un paso positivo, pero el aparato represivo sigue intacto»' }, date: '20 Feb 2026', url: 'https://foropenal.com/articulo/foro-penal-la-ley-de-amnistia-es-un-paso-positivo-pero-el-aparato-represivo-sigue-intacto' },
  { id: 7, outlet: 'Foro Penal / EFE', title: { en: 'Less than 25% of the releases in Venezuela are due to the amnesty', es: 'Menos del 25 % de las excarcelaciones en Venezuela se deben a la amnistía' }, date: '22 Apr 2026', url: 'https://foropenal.com/articulo/foro-penal-revelo-que-menos-del-25-de-las-excarcelaciones-en-venezuela-se-deben-a-la-amnistia' },
  { id: 8, outlet: 'Foro Penal', title: { en: 'Foro Penal on the repeal of the Amnesty Law', es: 'Foro Penal sobre la derogación de la Ley de Amnistía' }, date: '24 Apr 2026', url: 'https://foropenal.com/articulo/foro-penal-sobre-la-derogacion-de-la-ley-de-amnistia' },
  { id: 9, outlet: 'Foro Penal / Versión Final', title: { en: 'Foro Penal warns that only Parliament can repeal the amnesty law', es: 'Foro Penal advierte que solo el Parlamento puede derogar la ley de amnistía' }, date: '24 Apr 2026', url: 'https://foropenal.com/articulo/foro-penal-advierte-que-solo-el-parlamento-puede-derogar-la-ley-de-amnistia' },
  { id: 10, outlet: 'Foro Penal / El Diario', title: { en: 'Foro Penal questions courts’ refusal to accept amnesty requests', es: 'Foro Penal cuestionó la negativa de tribunales a recibir solicitudes de amnistía' }, date: '23 Feb 2026', url: 'https://foropenal.com/articulo/foro-penal-cuestiono-la-negativa-de-tribunales-a-recibir-solicitudes-de-amnistia' },
  { id: 11, outlet: 'Foro Penal', title: { en: '894 political prisoners released since 8 January (cites the official figure of 8,740 “full freedoms”)', es: 'Se han excarcelado 894 presos políticos desde el 8 de enero (cita la cifra oficial de 8.740 «libertades plenas»)' }, date: '12 Jun 2026', url: 'https://foropenal.com/articulo/se-han-excarcelado-894-presos-politicos-desde-el-8-de-enero-informa-foro-penal' },
  { id: 12, outlet: 'Foro Penal / Unión Radio', title: { en: 'Foro Penal reports the transfer of 94 political prisoners out of Rodeo I', es: 'Foro Penal reporta el traslado de 94 presos políticos desde Rodeo I' }, date: '3 Sep 2026', url: 'https://foropenal.com/articulo/foro-penal-reporta-el-traslado-de-94-presos-politicos-desde-rodeo-i' },
  { id: 13, outlet: 'Foro Penal', title: { en: 'The Supreme Court renewal must include changes to the judicial structure', es: 'Renovación del TSJ debe incluir cambios de estructura judicial' }, date: '20 Oct 2026', url: 'https://foropenal.com/articulo/renovacion-del-tsj-debe-incluir-cambios-de-estructura-judicial-segun-foro-penal' },
  ...SHARED.map(([from, id]) => ({ ...PART1.find((s) => s.id === from)!, id })),
];

const FP = 'https://foropenal.com/articulo/';

/** Foro Penal weekly balances: [cut date, political prisoners, page that reports it]. */
export const FP_PRISONERS: [string, number, string][] = [
  ['2026-01-28', 711, `${FP}seguimiento-foro-penal-711-presos-politicos-52-desaparecidos-y-302-excarcelaciones-en-venezuela`],
  ['2026-02-02', 687, `${FP}foro-penal-registra-687-presos-politicos-para-este-lunes-2-2-2026`],
  ['2026-02-26', 568, `${FP}foro-penal-contabiliza-568-presos-politicos-tras-excarcelaciones-de-la-nueva-amnistia`],
  ['2026-03-02', 526, `${FP}foro-penal-registra-que-aun-hay-526-presos-politicos-en-venezuela-y-alerta-sobre-11-desaparecidos`],
  ['2026-03-09', 508, `${FP}seguimiento-nuevo-balance-de-foro-penal-fija-en-508-los-presos-politicos-en-venezuela`],
  ['2026-03-23', 503, `${FP}ong-foro-penal-contabiliza-503-presos-politicos-en-venezuela-en-medio-del-proceso-de-amnistia`],
  ['2026-03-30', 490, `${FP}foro-penal-cifra-en-490-los-presos-politicos-en-venezuela`],
  ['2026-04-06', 485, `${FP}foro-penal-contabilizo-485-presos-politicos-en-venezuela`],
  ['2026-04-20', 473, `${FP}foro-penal-registro-473-presos-politicos-en-venezuela-incluidos-mas-de-40-extranjeros`],
  ['2026-04-27', 454, `${FP}vpitv-foro-penal-contabiliza-454-presos-politicos-al-27-de-abril-2026`],
  ['2026-05-25', 409, `${FP}seguimiento-foro-penal-contabiliza-409-presos-politicos-en-venezuela-en-su-mas-reciente-balance-y-tras-excarcelaciones`],
  ['2026-06-01', 404, `${FP}foro-penal-reporta-404-presos-politicos-en-venezuela`],
  ['2026-06-09', 389, `${FP}balance-de-presos-politicos-en-venezuela-al-09062026-por`],
  ['2026-07-06', 372, `${FP}balance-de-presos-poliiicos-en-venezuela-al-06072026-por`],
  ['2026-07-27', 379, `${FP}balance-de-presos-politicos-en-venezuela-al-27072026-por`],
  ['2026-08-03', 382, `${FP}balance-de-presos-politicos-en-venezuela-al-03082026-por`],
  ['2026-08-10', 391, `${FP}balance-de-presos-politicos-en-venezuela-al-10082026-por`],
  ['2026-08-31', 328, `${FP}balance-de-presos-politicos-en-venezuela-al-31082026-por`],
  ['2026-09-14', 344, `${FP}balance-de-presos-politicos-en-venezuela-al-14092026-por`],
  ['2026-09-28', 324, `${FP}balance-de-presos-politicos-en-venezuela-al-28092026-por`],
  ['2026-10-05', 322, `${FP}balance-de-presos-politicos-en-venezuela-al-05102026-por`],
];

/** Releases verified by Foro Penal since 8 January (cumulative). */
export const FP_RELEASES: [string, number, string][] = [
  ['2026-01-17', 270, 'https://foropenal.com/wp-content/uploads/2026/03/Reporte-EneroFebrero_2026_260313.pdf'],
  ['2026-01-28', 302, `${FP}seguimiento-foro-penal-711-presos-politicos-52-desaparecidos-y-302-excarcelaciones-en-venezuela`],
  ['2026-02-15', 444, `${FP}seguimiento-foro-penal-reporta-444-excarcelaciones-de-presos-politicos-al-15feb-en-venezuela`],
  ['2026-02-20', 452, `${FP}seguimiento-foro-penal-contabiliza-452-excarcelaciones-pero-mas-de-600-presos-politicos-siguen-detenidos`],
  ['2026-03-02', 621, `${FP}foro-penal-confirma-excarcelacion-de-621-presos-politicos-desde-el-8ene`],
  ['2026-03-08', 670, `${FP}foro-penal-confirmo-que-se-han-registrado-670-excarcelaciones-de-presos-politicos-en-venezuela`],
  ['2026-03-13', 690, `${FP}foro-penal-contabiliza-690-presos-politicos-tras-proceso-de-excarcelaciones-y-amnistia-en-venezuela`],
  ['2026-04-21', 786, `${FP}foro-penal-revelo-que-menos-del-25-de-las-excarcelaciones-en-venezuela-se-deben-a-la-amnistia`],
  ['2026-06-12', 894, `${FP}se-han-excarcelado-894-presos-politicos-desde-el-8-de-enero-informa-foro-penal`],
  ['2026-10-05', 1104, 'https://foropenal.com/represion-en-cifras'],
];

/** The four figures that must not be mixed (Foro Penal, 5 Oct 2026). */
export const FP_FIGURES: { n: number; tone: 'sec' | 'yes' | 'econ'; label: L; sub: L; src: number[] }[] = [
  { n: 322, tone: 'sec', label: { en: 'political prisoners', es: 'presos políticos' }, sub: { en: 'behind bars on 5 Oct 2026', es: 'tras las rejas al 5 oct 2026' }, src: [2] },
  { n: 32, tone: 'sec', label: { en: 'new detentions', es: 'detenciones nuevas' }, sub: { en: 'political jailings in 2026', es: 'encarcelaciones políticas en 2026' }, src: [1] },
  { n: 1104, tone: 'yes', label: { en: 'releases', es: 'excarcelaciones' }, sub: { en: 'verified in 2026', es: 'verificadas en 2026' }, src: [1] },
  { n: 11468, tone: 'econ', label: { en: 'judicial restrictions', es: 'restricciones judiciales' }, sub: { en: 'people under precautionary measures', es: 'personas con medidas cautelares' }, src: [1] },
];

export type CapStatus = 'same' | 'holder' | 'formal' | 'gone' | 'tbd';
export const CAP_STATUS: Record<CapStatus, L> = {
  same: { en: 'Unchanged', es: 'Sin cambio' },
  holder: { en: 'New head', es: 'Cambió el titular' },
  formal: { en: 'Formal change', es: 'Cambio formal' },
  gone: { en: 'Abolished', es: 'Suprimido' },
  tbd: { en: 'To be verified', es: 'Por verificar' },
};

export interface CapRow {
  name: L;
  kind?: L;
  jan: L;
  oct: L;
  status: CapStatus;
  src: number[];
}

/** Component 1a — norms in force. */
export const CAP_NORMS: CapRow[] = [
  {
    name: { en: 'Anti-Hate Law', es: 'Ley contra el Odio' },
    kind: { en: 'Constitutional law, 2017', es: 'Ley constitucional, 2017' },
    jan: { en: 'In force and applied by the courts', es: 'Vigente y aplicada por los tribunales' },
    oct: { en: 'In force. The acting president admitted “abusive use” and asked for a reform; the Supreme Court cleared it on 15 Oct and the debate went back to the Assembly', es: 'Vigente. La presidenta encargada reconoció un «uso abusivo» y pidió reformarla; el TSJ la avaló el 15 de octubre y el debate volvió a la AN' },
    status: 'formal',
    src: [25, 35],
  },
  {
    name: { en: 'Liberator Simón Bolívar Organic Law', es: 'Ley Orgánica Libertador Simón Bolívar' },
    kind: { en: 'Organic law, Nov 2024', es: 'Ley orgánica, nov. 2024' },
    jan: { en: 'In force', es: 'Vigente' },
    oct: { en: 'In force, no known reform', es: 'Vigente, sin reforma conocida' },
    status: 'same',
    src: [31],
  },
  {
    name: { en: 'Amnesty Law', es: 'Ley de Amnistía' },
    kind: { en: 'Official Gazette 6,990, 19 Feb 2026', es: 'Gaceta Oficial 6.990, 19 feb 2026' },
    jan: { en: 'Did not exist', es: 'No existía' },
    oct: { en: 'Declared over by the Executive on 23 April. It repealed none of the norms used to persecute', es: 'El Ejecutivo la dio por terminada el 23 de abril. No derogó ninguna de las normas usadas para perseguir' },
    status: 'same',
    src: [4, 21, 8],
  },
];

/** Component 1b — bodies and operational means that remain. */
export const CAP_BODIES: CapRow[] = [
  { name: { en: 'Presidency', es: 'Presidencia' }, jan: { en: 'Nicolás Maduro, captured on 3 January', es: 'Nicolás Maduro, capturado el 3 de enero' }, oct: { en: 'Delcy Rodríguez, acting president and still executive vice president', es: 'Delcy Rodríguez, presidenta encargada y aún vicepresidenta ejecutiva' }, status: 'holder', src: [28, 29] },
  { name: { en: 'National Assembly', es: 'Asamblea Nacional' }, jan: { en: 'Jorge Rodríguez', es: 'Jorge Rodríguez' }, oct: { en: 'Jorge Rodríguez', es: 'Jorge Rodríguez' }, status: 'same', src: [34] },
  { name: { en: 'Interior, Justice and Peace', es: 'Interior, Justicia y Paz' }, jan: { en: 'Diosdado Cabello', es: 'Diosdado Cabello' }, oct: { en: 'Diosdado Cabello, also vice president for Security', es: 'Diosdado Cabello, también vicepresidente de Seguridad' }, status: 'same', src: [18, 19] },
  { name: { en: 'Defense', es: 'Defensa' }, jan: { en: 'Vladimir Padrino López, minister since 2014', es: 'Vladimir Padrino López, ministro desde 2014' }, oct: { en: 'Gustavo González López, since 18 March', es: 'Gustavo González López, desde el 18 de marzo' }, status: 'holder', src: [16] },
  { name: { en: 'DGCIM', es: 'DGCIM' }, kind: { en: 'military counterintelligence', es: 'contrainteligencia militar' }, jan: { en: 'Gustavo González López, from 6 January (SEBIN chief 2019–2024)', es: 'Gustavo González López, desde el 6 de enero (jefe del SEBIN 2019–2024)' }, oct: { en: 'Germán Gómez Lárez, since 18 March', es: 'Germán Gómez Lárez, desde el 18 de marzo' }, status: 'holder', src: [27, 32] },
  { name: { en: 'SEBIN', es: 'SEBIN' }, kind: { en: 'intelligence', es: 'inteligencia' }, jan: { en: 'Alexis Rodríguez Cabello, since October 2024', es: 'Alexis Rodríguez Cabello, desde octubre de 2024' }, oct: { en: 'No confirmation after March 2026', es: 'Sin confirmación posterior a marzo de 2026' }, status: 'tbd', src: [17] },
  { name: { en: 'CESPPA', es: 'CESPPA' }, kind: { en: 'strategic intelligence centre', es: 'centro estratégico de inteligencia' }, jan: { en: 'Existed', es: 'Existía' }, oct: { en: 'Abolished by Decree 5,248 (9 February)', es: 'Suprimido por el Decreto 5.248 (9 de febrero)' }, status: 'gone', src: [17] },
  { name: { en: 'CICPC', es: 'CICPC' }, kind: { en: 'criminal police', es: 'policía científica' }, jan: { en: 'Douglas Rico, in office since 2016', es: 'Douglas Rico, en el cargo desde 2016' }, oct: { en: 'Douglas Rico', es: 'Douglas Rico' }, status: 'same', src: [30] },
  { name: { en: 'Supreme Court (TSJ)', es: 'TSJ' }, jan: { en: '20 justices', es: '20 magistrados' }, oct: { en: '32 justices after the April–May expansion; the UN warns of a greater risk of political influence (para. 47)', es: '32 magistrados tras la ampliación de abril y mayo; la ONU advierte un mayor riesgo de influencia política (párr. 47)' }, status: 'formal', src: [20, 14] },
  { name: { en: 'Courts and Prosecutor’s Office', es: 'Tribunales y Fiscalía' }, jan: { en: 'Judges and prosecutors of the political cases', es: 'Jueces y fiscales de las causas políticas' }, oct: { en: 'Still in their posts, says Foro Penal', es: 'Siguen en sus cargos, según Foro Penal' }, status: 'same', src: [6, 13] },
  { name: { en: 'VenApp', es: 'VenApp' }, kind: { en: 'operational tool', es: 'medio operativo' }, jan: { en: 'Active, with an anonymous reporting channel since 2024', es: 'Activa, con un canal de denuncias anónimas desde 2024' }, oct: { en: 'No verified information', es: 'Sin dato verificado' }, status: 'tbd', src: [26, 33] },
];

/** Component 2 — documented exercise in 2026 (no names of affected people). */
export const CAP_ACTIONS: { when: L; text: L; src: number[] }[] = [
  { when: { en: '13 Jan', es: '13 ene' }, text: { en: 'SEBIN detains a citizen over a TikTok comment about Maduro’s capture and charges him with “incitement to hatred.”', es: 'El SEBIN detiene a un ciudadano por un comentario en TikTok sobre la captura de Maduro y lo acusa de «instigación al odio».' }, src: [22] },
  { when: { en: 'Feb–Mar', es: 'feb–mar' }, text: { en: 'Courts refuse to accept amnesty requests or to hand over copies of their rulings, Foro Penal reports.', es: 'Tribunales se niegan a recibir solicitudes de amnistía o a entregar copia de sus decisiones, denuncia Foro Penal.' }, src: [10] },
  { when: { en: '23 Apr', es: '23 abr' }, text: { en: 'The Executive declares the amnesty over. Only 24% of the releases had come from it.', es: 'El Ejecutivo da por terminada la amnistía. Solo el 24 % de las excarcelaciones se había debido a ella.' }, src: [21, 7] },
  { when: { en: '3 Sep', es: '3 sept' }, text: { en: '94 political prisoners are moved out of Rodeo I without notice; Foro Penal could confirm where only 24 went.', es: '94 presos políticos son trasladados desde Rodeo I sin aviso; Foro Penal solo pudo confirmar el destino de 24.' }, src: [12] },
  { when: { en: '16 Sep', es: '16 sept' }, text: { en: 'The UN Fact-Finding Mission concludes that, despite limited political changes, the repressive apparatus remains intact.', es: 'La Misión de la ONU concluye que, pese a cambios políticos limitados, el aparato represivo sigue intacto.' }, src: [15, 14] },
  { when: { en: '17 Sep', es: '17 sept' }, text: { en: 'An opposition leader is detained 48 hours after returning from exile and released about six hours later.', es: 'Detienen a un dirigente opositor 48 horas después de volver del exilio; lo liberan unas seis horas después.' }, src: [23, 24] },
  { when: { en: 'Jan–Oct', es: 'ene–oct' }, text: { en: '32 new political jailings, while 11,468 people remain under measures that restrict their freedom.', es: '32 encarcelaciones políticas nuevas, mientras 11.468 personas siguen con medidas que restringen su libertad.' }, src: [1] },
];

export type Guar = 'done' | 'part' | 'unver' | 'not';
export const GUAR_STATUS: Record<Guar, L> = {
  done: { en: 'Carried out', es: 'Ejecutada' },
  part: { en: 'Partly carried out', es: 'Ejecutada en parte' },
  unver: { en: 'Not verifiable', es: 'Sin verificación' },
  not: { en: 'Not carried out', es: 'No ejecutada' },
};

/** Guarantees: the reforms Foro Penal requested on 7 Feb vs what the State did. */
export const CAP_GUARANTEES: { ask: L; did: L; status: Guar; src: number[] }[] = [
  { ask: { en: 'Absolute nullity of the cases and all their effects', es: 'Nulidad absoluta de los procesos y de todos sus efectos' }, did: { en: 'The law chose the “extinction by operation of law” of the actions (art. 10), which Foro Penal had called insufficient.', es: 'La ley optó por la «extinción de pleno derecho» de las acciones (art. 10), que Foro Penal había calificado de insuficiente.' }, status: 'not', src: [3, 4] },
  { ask: { en: 'Full restoration of civil, political, administrative and property rights', es: 'Restitución plena de derechos civiles, políticos, administrativos y patrimoniales' }, did: { en: 'The law ends the measures but says nothing about restoring rights or property.', es: 'La ley ordena cesar las medidas, pero no menciona la restitución de derechos ni de bienes.' }, status: 'not', src: [3, 4] },
  { ask: { en: 'Repeal the norms used to persecute', es: 'Derogar las normas usadas para perseguir' }, did: { en: 'The law repeals none. The Anti-Hate Law is still in force; its reform is pending.', es: 'La ley no deroga ninguna. La Ley contra el Odio sigue vigente; su reforma está en trámite.' }, status: 'not', src: [3, 35] },
  { ask: { en: 'Erase all criminal records and registries', es: 'Eliminación total de antecedentes y registros' }, did: { en: 'Article 14 orders it. There is no public way to check that it is done.', es: 'El art. 14 lo ordena. No hay forma pública de comprobar que se cumpla.' }, status: 'unver', src: [3, 4] },
  { ask: { en: 'Automatic application, without delay', es: 'Aplicación de oficio y sin dilaciones' }, did: { en: 'Article 4 makes it a matter of public order, but courts act only “at the request of a party” (art. 11), and some refused requests.', es: 'El art. 4 la declara de orden público, pero el tribunal actúa «a instancia de parte» (art. 11), y hubo tribunales que no recibían solicitudes.' }, status: 'part', src: [4, 10] },
  { ask: { en: 'Breadth: civilians and military, the whole period', es: 'Amplitud: civiles y militares, todo el período' }, did: { en: 'Article 9 excludes offences often used against dissidents; Foro Penal says it covers about 20 months of almost 28 years of persecution.', es: 'El art. 9 excluye delitos usados a menudo contra disidentes; según Foro Penal cubre unos 20 meses de casi 28 años de persecución.' }, status: 'part', src: [4, 6] },
  { ask: { en: 'Oversight with binding participation of NGOs and victims', es: 'Control con participación vinculante de ONG y víctimas' }, did: { en: 'A special committee of the National Assembly with expert support (art. 15), with no binding participation.', es: 'Una Comisión Especial de la Asamblea Nacional con apoyo de expertos (art. 15), sin participación vinculante.' }, status: 'part', src: [4] },
  { ask: { en: 'Keep releasing people and turn releases into full freedom', es: 'Que las excarcelaciones sigan y se conviertan en libertades plenas' }, did: { en: 'Releases continued (1,104 in 2026), but 11,468 people remain under restrictive measures.', es: 'Siguieron (1.104 en 2026), pero 11.468 personas siguen con medidas restrictivas.' }, status: 'part', src: [1] },
];

/** Component 3 — criteria: when the capacity is still relevant to assess a risk, each with its 2026 example. */
export const CAP_CRITERIA: { name: L; test: L; example: L; src: number[] }[] = [
  { name: { en: 'In force', es: 'Vigencia' }, test: { en: 'The norm or body is still in force under an official act: it was neither repealed nor annulled.', es: 'La norma u organismo sigue en vigor según un acto oficial: no fue derogado ni anulado.' }, example: { en: 'The Anti-Hate Law is still in force in October 2026.', es: 'La Ley contra el Odio sigue vigente en octubre de 2026.' }, src: [35] },
  { name: { en: 'Same chain of command', es: 'Continuidad de mando' }, test: { en: 'It is run by the same people, or by people appointed through the same chain.', es: 'Lo dirigen las mismas personas o personas designadas por la misma cadena.' }, example: { en: 'The new DGCIM chief was appointed by decree signed by the acting president alone.', es: 'El nuevo jefe de la DGCIM fue designado por un decreto firmado solo por la presidenta encargada.' }, src: [32] },
  { name: { en: 'Documented use after the change', es: 'Uso documentado tras el cambio' }, test: { en: 'It was applied after January 2026.', es: 'Se aplicó después de enero de 2026.' }, example: { en: 'A detention for “incitement to hatred” over a TikTok comment, on 13 January.', es: 'Una detención por «instigación al odio» por un comentario en TikTok, el 13 de enero.' }, src: [22] },
  { name: { en: 'No effective oversight', es: 'Sin control efectivo' }, test: { en: 'No independent judge, external body or victims’ mechanism can stop it.', es: 'Ningún juez independiente, órgano externo o mecanismo de las víctimas puede frenarla.' }, example: { en: 'Courts refused to accept amnesty requests.', es: 'Tribunales se negaron a recibir solicitudes de amnistía.' }, src: [10] },
  { name: { en: 'Reversible improvement', es: 'Mejora reversible' }, test: { en: 'The improvement depends on a decision that can be undone, not on a firm legal change.', es: 'La mejora depende de una decisión que se puede revertir, no de un cambio legal firme.' }, example: { en: 'The Executive declared the amnesty over on 23 April.', es: 'El Ejecutivo dio por terminada la amnistía el 23 de abril.' }, src: [21] },
];

/** Group profiles where the criteria weigh more (never individuals). */
export const CAP_PROFILES: L[] = [
  { en: 'People released with an open case or precautionary measures, without nullity', es: 'Excarcelados con proceso abierto o medidas cautelares, sin nulidad' },
  { en: 'Groups excluded from the amnesty: military personnel, offences under article 9', es: 'Grupos excluidos de la amnistía: militares y delitos del art. 9' },
  { en: 'People with a prior detention or a record that was not erased', es: 'Personas con detención previa o antecedentes sin borrar' },
  { en: 'Visible political or journalistic activity', es: 'Actividad política o periodística visible' },
  { en: 'People returning from exile', es: 'Personas que regresan del exilio' },
];

/** Section strings. */
export const CAP_UI = {
  en: {
    kicker: 'Three questions',
    title: 'What it can do, what it did, what could happen again',
    intro: 'Three things have to be kept apart: what the State can still do, what it did in 2026 and the risk that it does it again. Mixing them is the usual mistake: fewer prisoners does not mean less risk.',
    def: 'Residual capacity to persecute: the verifiable persistence of legal powers, institutional structures and operational means that allow the State to identify, investigate, restrict or sanction people arbitrarily for political reasons, even after a change of leadership or a documented drop in detentions.',
    tabs: ['Available capacity', 'Documented exercise', 'Risk of repetition'],
    tabsShort: ['Capacity', 'Exercise', 'Risk'],
    tabsLabel: 'The three components',
    p1Intro: 'Norms, bodies, powers and resources that remain. A status only changes with a verifiable official act.',
    norms: 'Norms in force',
    bodies: 'Bodies and means that remain',
    jan: 'January 2026',
    oct: 'October 2026',
    of: 'of {total}',
    p2Intro: 'Detentions, investigations, restrictions and actions verified in 2026. No names of affected people.',
    p3Intro: 'An inference, not a prediction: it depends on the person’s profile, their record and whether effective guarantees exist.',
    guarTitle: 'The guarantees: what Foro Penal requested and what the State did',
    guarIntro: 'Every row is a reform Foro Penal submitted to the National Assembly on 7 February, set against the Amnesty Law published on 19 February.',
    asked: 'Requested',
    did: 'What the State did',
    critTitle: 'When the capacity still matters',
    critIntro: 'Our criteria to decide whether a capacity is still relevant to assess a risk. Each one with its example from 2026.',
    example: 'In 2026',
    profilesTitle: 'Where the criteria weigh more',
    profilesNote: 'Groups, never individuals. “Arbitrary” follows the categories of the UN Working Group on Arbitrary Detention.',
    endNote: '23 April: the Executive declared the Amnesty Law over. Foro Penal answered that the law had no expiry date and that only the National Assembly can repeal it.',
  },
  es: {
    kicker: 'Tres preguntas',
    title: 'Lo que puede, lo que hizo, lo que podría repetir',
    intro: 'Hay que separar tres cosas: lo que el Estado todavía puede hacer, lo que hizo en 2026 y el riesgo de que lo vuelva a hacer. Mezclarlas es el error más común: menos presos no significa menos riesgo.',
    def: 'Capacidad persecutoria residual: la persistencia verificable de facultades normativas, estructuras institucionales y medios operativos que permiten al Estado identificar, investigar, restringir o sancionar arbitrariamente a personas por motivos políticos, aun después de cambios en la conducción gubernamental o de una reducción documentada de las detenciones.',
    tabs: ['Capacidad disponible', 'Ejercicio documentado', 'Riesgo de repetición'],
    tabsShort: ['Capacidad', 'Ejercicio', 'Riesgo'],
    tabsLabel: 'Los tres componentes',
    p1Intro: 'Normas, organismos, competencias y recursos que permanecen. Un estado solo cambia con un acto oficial verificable.',
    norms: 'Normas vigentes',
    bodies: 'Organismos y medios que permanecen',
    jan: 'Enero 2026',
    oct: 'Octubre 2026',
    of: 'de {total}',
    p2Intro: 'Detenciones, investigaciones, restricciones y actuaciones verificadas en 2026. Sin nombres de personas afectadas.',
    p3Intro: 'Una inferencia, no una predicción: depende del perfil de la persona, de sus antecedentes y de que existan garantías efectivas.',
    guarTitle: 'Las garantías: lo que pidió Foro Penal y lo que hizo el Estado',
    guarIntro: 'Cada fila es una reforma que Foro Penal entregó a la Asamblea Nacional el 7 de febrero, frente a la Ley de Amnistía publicada el 19 de febrero.',
    asked: 'Solicitado',
    did: 'Lo que hizo el Estado',
    critTitle: 'Cuándo la capacidad sigue importando',
    critIntro: 'Nuestros criterios para decidir si una capacidad conserva relevancia para evaluar un riesgo. Cada uno con su ejemplo de 2026.',
    example: 'En 2026',
    profilesTitle: 'Dónde pesan más los criterios',
    profilesNote: 'Grupos, nunca personas. «Arbitrario» sigue las categorías del Grupo de Trabajo de la ONU sobre la Detención Arbitraria.',
    endNote: '23 de abril: el Ejecutivo dio por terminada la Ley de Amnistía. Foro Penal respondió que la ley no tenía fecha de vencimiento y que solo la Asamblea Nacional puede derogarla.',
  },
} as const;

/** Balance additions. */
export const FPBAL_UI = {
  en: {
    head: 'Foro Penal’s count, January to October 2026',
    note: 'Each figure links to the dated Foro Penal page that reports it. The “Repression in figures” page updates itself, so the series uses the weekly balances, which do not change. The historical total of detentions since 2014 (19,253) also grows with late-reported cases, so it is not presented as new arrests.',
    chartLabel: 'Line chart, January to October 2026: political prisoners counted by Foro Penal fall from 711 to 322; cumulative releases rise from 270 to 1,104. Use the arrow keys to move through the cut dates.',
    prisoners: 'Political prisoners',
    releases: 'Cumulative releases',
    cut: 'cut',
    legendP: 'Political prisoners (cut date)',
    legendR: 'Releases since 8 January (cumulative)',
    legendA: 'Amnesty Law in force (19 Feb – 23 Apr)',
    amnesty: 'Amnesty',
    endP: '{n} prisoners',
    endR: '{n} releases',
    gapTitle: 'The sum that does not add up.',
    gap: 'Between 28 January and 5 October Foro Penal verified 802 releases, but the number of political prisoners fell by only 389. The difference, 413 people, are new detentions and cases nobody had reported before.',
    gapCalc: 'Our calculation with Foro Penal figures: (1,104 − 302) − (711 − 322) = 413. Foro Penal records 32 new jailings in 2026; the rest are late-reported cases.',
    table: 'See every figure with its link to Foro Penal',
    thDate: 'Cut date',
  },
  es: {
    head: 'El conteo de Foro Penal, de enero a octubre de 2026',
    note: 'Cada cifra enlaza a la página con fecha de Foro Penal que la reporta. La página «Represión en cifras» se actualiza sola; por eso la serie usa los balances semanales, que no cambian. El total histórico de detenciones desde 2014 (19.253) crece también con casos reportados tarde y no se presenta como detenciones nuevas.',
    chartLabel: 'Gráfico de líneas, enero a octubre de 2026: los presos políticos que cuenta Foro Penal bajan de 711 a 322; las excarcelaciones acumuladas suben de 270 a 1.104. Use las flechas para recorrer las fechas de corte.',
    prisoners: 'Presos políticos',
    releases: 'Excarcelaciones acumuladas',
    cut: 'corte',
    legendP: 'Presos políticos (fecha de corte)',
    legendR: 'Excarcelaciones desde el 8 de enero (acumuladas)',
    legendA: 'Ley de Amnistía vigente (19 feb – 23 abr)',
    amnesty: 'Amnistía',
    endP: '{n} presos',
    endR: '{n} excarcelaciones',
    gapTitle: 'La cuenta que no cuadra.',
    gap: 'Entre el 28 de enero y el 5 de octubre Foro Penal verificó 802 excarcelaciones, pero la cifra de presos políticos bajó solo 389. La diferencia, 413 personas, son detenciones nuevas y casos que nadie había denunciado antes.',
    gapCalc: 'Cálculo nuestro con cifras de Foro Penal: (1.104 − 302) − (711 − 322) = 413. Foro Penal registra 32 encarcelaciones nuevas en 2026; el resto son casos reportados tarde.',
    table: 'Ver cada cifra con su enlace a Foro Penal',
    thDate: 'Fecha de corte',
  },
} as const;

/** Page strings: hero, figures section, section index, method. */
export const R_UI = {
  en: {
    kicker: 'Investigation · Part two',
    readTime: '9-minute read',
    heroA: 'releases of political prisoners verified in 2026',
    heroB: 'people still live with their freedom restricted by the courts',
    heroSrc: 'Foro Penal, figures as of 5 October 2026',
    part1Label: 'Part one',
    figKicker: 'The figures',
    figTitle: 'More than a thousand released. How many are still not free?',
    figIntro: 'Foro Penal counts four different things. Mixing them hides what matters: fewer people in prison does not mean fewer people persecuted.',
    toc: { fig: 'Figures', p1: 'Capacity', p2: 'Exercise', p3: 'Risk', src: 'Sources' },
    nextKicker: 'Continues in part two',
    nextCta: 'Read part two',
    prevKicker: 'Read first',
    prevCta: 'Read part one',
    methodBody:
      'This piece relies on Foro Penal’s weekly balances and documents, the text of the Amnesty Law published in the Official Gazette, the 2026 report of the UN Fact-Finding Mission and verified press reports. Every figure carries its cut date and links to the page that reports it. A status in the matrix only changes with a verifiable official act: a gazette, a decree or a ruling. The risk of repetition is an inference based on explicit criteria, never a prediction about a specific person, so we speak of groups and not of personal cases.',
    methodWarning:
      'Available capacity does not by itself prove it will be used. Allegations are cited as what they are: attributed to whoever makes them. Foro Penal’s figures are its own verified counts; the government has not published the list of people granted amnesty.',
    unverified: [
      'Whether Alexis Rodríguez Cabello still heads SEBIN: the last public confirmation we found is from March 2026.',
      'Whether VenApp is used for reporting in 2026: there is no public evidence.',
      'Whether criminal records are actually being erased as article 14 of the Amnesty Law orders: there is no public way to check.',
    ],
  },
  es: {
    kicker: 'Investigación · Segunda entrega',
    readTime: 'Lectura de 9 minutos',
    heroA: 'excarcelaciones de presos políticos verificadas en 2026',
    heroB: 'personas siguen con su libertad restringida por los tribunales',
    heroSrc: 'Foro Penal, cifras al 5 de octubre de 2026',
    part1Label: 'Primera entrega',
    figKicker: 'Las cifras',
    figTitle: 'Salieron más de mil. ¿Cuántos siguen sin ser libres?',
    figIntro: 'Foro Penal cuenta cuatro cosas distintas. Mezclarlas esconde lo importante: menos personas presas no significa menos personas perseguidas.',
    toc: { fig: 'Cifras', p1: 'Capacidad', p2: 'Ejercicio', p3: 'Riesgo', src: 'Fuentes' },
    nextKicker: 'Continúa en la segunda entrega',
    nextCta: 'Leer la segunda entrega',
    prevKicker: 'Lee primero',
    prevCta: 'Leer la primera entrega',
    methodBody:
      'Esta pieza usa los balances semanales y documentos de Foro Penal, el texto de la Ley de Amnistía publicado en Gaceta Oficial, el informe de 2026 de la Misión de la ONU y prensa verificada. Cada cifra lleva su fecha de corte y enlaza a la página que la reporta. Un estado de la matriz solo cambia con un acto oficial verificable: gaceta, decreto o sentencia. El riesgo de repetición es una inferencia basada en criterios explícitos, nunca una predicción sobre una persona concreta; por eso hablamos de grupos y no de casos personales.',
    methodWarning:
      'Una capacidad disponible no prueba por sí sola que se vaya a usar. Las denuncias se citan como lo que son: atribuidas a quien las hace. Las cifras de Foro Penal son sus propios conteos verificados; el gobierno no ha publicado la lista de amnistiados.',
    unverified: [
      'Si Alexis Rodríguez Cabello sigue al frente del SEBIN: la última confirmación pública que encontramos es de marzo de 2026.',
      'Si VenApp se usa para denunciar en 2026: no hay prueba pública.',
      'Si los antecedentes penales se están borrando como ordena el artículo 14 de la Ley de Amnistía: no hay forma pública de comprobarlo.',
    ],
  },
} as const;
