// "Venezuela 2026: The Post-Maduro Power Structure" (until 22 Oct 2026: "The Oil Changed. The Power Didn't.") — data and texts shared by /investigations/who-commands-venezuela-2026/
// (English) and /es/investigations/who-commands-venezuela-2026/ (Spanish).
// Facts are attributed; every org-chart line and timeline entry cites a numbered source (SOURCES below).
// Author: Venezuela Record. Original idea: Minerva Mendoza Paipa.
import type { ImageMetadata } from 'astro';
import type { InvestigationMeta, L, Source } from './types';

import sig2015 from '../../assets/investigations/who-commands-venezuela-2026/gazettes/sig-2015-go-40599.jpg';
import sig2023 from '../../assets/investigations/who-commands-venezuela-2026/gazettes/sig-2023-go-6759.jpg';
import sig2024a from '../../assets/investigations/who-commands-venezuela-2026/gazettes/sig-2024-go-6859.jpg';
import sig2024b from '../../assets/investigations/who-commands-venezuela-2026/gazettes/sig-2024-go-6872.jpg';
import sig2026 from '../../assets/investigations/who-commands-venezuela-2026/gazettes/sig-2026-go-6957.jpg';
import sig2026b from '../../assets/investigations/who-commands-venezuela-2026/gazettes/sig-2026-go-7006.jpg';
import BOXES from './who-commands-venezuela-2026.signatures.json';
import pDelcy from '../../assets/investigations/who-commands-venezuela-2026/portraits/delcy-rodriguez.jpg';
import pJorge from '../../assets/investigations/who-commands-venezuela-2026/portraits/jorge-rodriguez.jpg';
import pCabello from '../../assets/investigations/who-commands-venezuela-2026/portraits/diosdado-cabello.jpg';
import pGonzalez from '../../assets/investigations/who-commands-venezuela-2026/portraits/gustavo-gonzalez-lopez.jpg';
import lgUsa from '../../assets/investigations/who-commands-venezuela-2026/logos/usa.png';
import lgTsj from '../../assets/investigations/who-commands-venezuela-2026/logos/tsj.png';
import lgSebin from '../../assets/investigations/who-commands-venezuela-2026/logos/sebin.png';
import lgDgcim from '../../assets/investigations/who-commands-venezuela-2026/logos/dgcim.png';
import lgCicpc from '../../assets/investigations/who-commands-venezuela-2026/logos/cicpc.png';
import lgPnb from '../../assets/investigations/who-commands-venezuela-2026/logos/pnb.png';
import lgFanb from '../../assets/investigations/who-commands-venezuela-2026/logos/fanb.png';
import scColectivos from '../../assets/investigations/who-commands-venezuela-2026/scenes/colectivos.jpg';
import scConsejo from '../../assets/investigations/who-commands-venezuela-2026/scenes/consejo-comunal.jpg';
import scPalacio from '../../assets/investigations/who-commands-venezuela-2026/scenes/palacio-de-justicia.jpg';
import scProtesta from '../../assets/investigations/who-commands-venezuela-2026/scenes/protesta-2024.jpg';
import ogEn from '../../assets/investigations/who-commands-venezuela-2026/social-en.png';
import ogEs from '../../assets/investigations/who-commands-venezuela-2026/social-es.png';
import cover from '../../assets/investigations/who-commands-venezuela-2026/cover.jpg';
import hero from '../../assets/investigations/who-commands-venezuela-2026/hero.jpg';

export const META: InvestigationMeta = {
  slug: 'who-commands-venezuela-2026',
  // Title proposed by Minerva Mendoza Paipa, approved by Roger on 2026-10-22 (was "Cambió el petróleo, no el poder").
  title: { en: 'Venezuela 2026: The Post-Maduro Power Structure', es: 'Venezuela 2026: La estructura del poder post-Maduro' },
  subtitle: {
    en: 'Who appoints whom in Venezuela in 2026, according to official gazettes, the laws and the UN',
    es: 'Quién designa a quién en la Venezuela de 2026, según las gacetas oficiales, las leyes y la ONU',
  },
  summary: {
    en: 'Since January, Venezuela opened its oil, welcomed back the IMF and signed an oil deal with the United States. The people who signed the laws used against dissent still appoint the heads of intelligence and counterintelligence. The gazettes show it.',
    es: 'Desde enero, Venezuela abrió su petróleo, recibió de nuevo al FMI y firmó un acuerdo petrolero con EE. UU. Las mismas personas que firmaron las leyes usadas contra quien disiente siguen nombrando a los jefes de la inteligencia y la contrainteligencia. Las gacetas lo muestran.',
  },
  /** Standfirst under the cover (Minerva Mendoza Paipa, 2026-10-22). */
  intro: {
    en: 'The reorganization of power in Venezuela during 2026 raises a question that goes beyond the change of authorities: which security and intelligence structures remain, who holds their command powers and which mechanisms of control and political persecution are still operating. What really changed in Venezuela? The official gazettes and the reports of international bodies show the institutional reality as of October 2026.',
    es: 'La reorganización del poder en Venezuela durante 2026 plantea una cuestión que trasciende el cambio de autoridades: qué estructuras de seguridad e inteligencia permanecen, quién ejerce sus facultades de mando y qué mecanismos de control y persecución política continúan operando. ¿Qué fue lo que realmente cambió en Venezuela? Las gacetas oficiales y los informes de organismos internacionales permiten mostrar la realidad institucional a octubre de 2026.',
  },
  published: '2026-10-16',
  updated: '2026-10-22',
  ideaBy: 'Minerva Mendoza Paipa',
  cover,
  hero,
  heroAlt: {
    en: 'AI-generated illustration: an empty government office, desk and chair in place, while an oil refinery burns its flare outside the window.',
    es: 'Ilustración generada con IA: un despacho de gobierno vacío, con el escritorio y el sillón en su sitio, mientras afuera una refinería quema su mechurrio.',
  },
  coverCredit: {
    text: {
      en: 'AI-generated illustration (Google Flow) for Venezuela Record.',
      es: 'Ilustración generada con IA (Google Flow) para Venezuela Record.',
    },
  },
  social: { en: ogEn, es: ogEs },
};

/* ------------------------------------------------------------------ sources */

export const SOURCES: Source[] = [
  { id: 1, outlet: 'UN Human Rights Council', title: { en: 'Independent International Fact-Finding Mission on Venezuela, report A/HRC/63/57 (advance edited version)', es: 'Misión Internacional Independiente de Determinación de los Hechos sobre Venezuela, informe A/HRC/63/57 (versión avanzada editada)' }, date: '17 Aug 2026', url: 'https://www.ohchr.org/sites/default/files/documents/hrbodies/hrcouncil/sessions-regular/session63/a-hrc-63-57-auv.pdf' },
  { id: 2, outlet: 'OHCHR', title: { en: 'Venezuela: Amidst limited political changes, country’s repressive apparatus remains intact, UN Fact-Finding Mission says', es: 'Venezuela: Pese a cambios políticos limitados, el aparato represivo del país permanece intacto, afirma la Misión de la ONU' }, date: '16 Sep 2026', url: 'https://www.ohchr.org/en/press-releases/2026/09/venezuela-amidst-limited-political-changes-countrys-repressive-apparatus' },
  { id: 3, outlet: 'IUSDATA', title: { en: 'Summary of Official Gazette No. 6,957 Extraordinary (6 Jan 2026)', es: 'Sumario de la Gaceta Oficial N° 6.957 Extraordinaria (6 ene 2026)' }, date: '6 Jan 2026', url: 'https://iusdata.com/sumarios-gacetas-oficiales-6-957-6-959-6-960-extraordinarias-del-06-de-enero-de-2026/' },
  { id: 4, outlet: 'Swissinfo / EFE', title: { en: 'Delcy Rodríguez appoints new heads of the Honor Guard and military counterintelligence', es: 'Delcy Rodríguez designa a nuevo jefe de Guardia de Honor y de contrainteligencia militar' }, date: '7 Jan 2026', url: 'https://www.swissinfo.ch/spa/delcy-rodr%C3%ADguez-designa-a-nuevo-jefe-de-guardia-de-honor-y-de-contrainteligencia-militar/90734828' },
  { id: 5, outlet: 'MIPPCI', title: { en: 'Acting President makes new appointments in the Honor Guard and DGCIM', es: 'Presidenta encargada realiza nuevas designaciones en la Guardia de Honor y DGCIM' }, date: 'Jan 2026', url: 'https://mippci.gob.ve/presidenta-encargada-realiza-nuevas-designaciones-en-la-guardia-de-honor-y-dgcim/' },
  { id: 6, outlet: 'X · @delcyrodriguezv', title: { en: 'Post by Delcy Rodríguez announcing the new DGCIM director', es: 'Publicación de Delcy Rodríguez que anuncia al nuevo director de la DGCIM' }, date: '18 Mar 2026', url: 'https://x.com/delcyrodriguezv/status/2034384428995342671' },
  { id: 7, outlet: 'El Imparcial', title: { en: 'Delcy Rodríguez removed Vladimir Padrino López after 12 years and appointed Gustavo González López', es: 'Delcy Rodríguez destituyó a Vladimir Padrino López tras 12 años al frente y nombró a Gustavo González López' }, date: '19 Mar 2026', url: 'https://www.elimparcial.com/mundo/2026/03/19/delcy-rodriguez-destituyo-a-vladimir-padrino-lopez-tras-12-anos-al-frente-y-nombro-a-gustavo-gonzalez-lopez/' },
  { id: 8, outlet: 'NTN24', title: { en: 'Former political prisoner says Germán Gómez Lárez, the new DGCIM director, was one of his torturers', es: 'Exprisionero político denuncia que Germán Gómez Lárez, nuevo director de la DGCIM, fue uno de sus torturadores' }, date: '19 Mar 2026', url: 'https://www.ntn24.com/noticias-actualidad/exprisionero-politico-denuncia-que-german-gomez-larez-designado-por-delcy-rodriguez-nuevo-director-general-de-contrainteligencia-militar-fue-uno-de-sus-torturadores-mientras-estuvo-secuestrado-613122' },
  { id: 9, outlet: 'Efecto Cocuyo', title: { en: 'SEBIN, DGCIM and CESPPA under Delcy Rodríguez (fact check)', es: 'SEBIN, DGCIM y CESPPA con Delcy Rodríguez (Cocuyo Chequea)' }, date: '5 Mar 2026', url: 'https://efectococuyo.com/cocuyo-chequea/sebin-dgcim-cesppa-delcy/' },
  { id: 10, outlet: 'InSight Crime', title: { en: 'Profile: Diosdado Cabello', es: 'Perfil: Diosdado Cabello' }, url: 'https://insightcrime.org/es/?p=297819' },
  { id: 11, outlet: 'La Nación (Paraguay)', title: { en: 'Venezuela’s acting president adds the daughter of the powerful interior minister to her cabinet', es: 'Presidenta interina de Venezuela suma a su gabinete a hija de poderoso ministro del Interior' }, date: '2 Feb 2026', url: 'https://www.lanacion.com.py/mundo/2026/02/02/presidenta-interina-de-venezuela-suma-a-su-gabinete-a-hija-de-poderoso-ministro-del-interior/' },
  { id: 12, outlet: 'Energías Renovables', title: { en: 'Venezuela opens oil production to private companies (Hydrocarbons Law)', es: 'Venezuela abre la explotación petrolera (Ley de Hidrocarburos)' }, date: '23 Jan 2026', url: 'https://www.energias-renovables.com/panorama/venezuela-abre-la-explotaci-n-petrolera-al-20260123' },
  { id: 13, outlet: 'Forbes Colombia', title: { en: 'Venezuela projects more than US$200 billion in revenue after the oil agreement with the U.S.', es: 'Venezuela proyecta ingresos por más de US$200.000 millones tras el acuerdo petrolero con EE. UU.' }, date: '31 Aug 2026', url: 'https://forbes.co/2026/08/31/actualidad/venezuela-proyecta-ingresos-por-mas-de-us200-000-millones-tras-el-acuerdo-petrolero-con-ee-uu/' },
  { id: 14, outlet: 'Infobae', title: { en: 'Parliament approves increasing the number of Supreme Court justices', es: 'El Parlamento aprobó aumentar el número de magistrados del Tribunal Supremo de Justicia' }, date: '5 May 2026', url: 'https://www.infobae.com/venezuela/2026/05/06/el-parlamento-venezolano-aprobo-el-proyecto-para-aumentar-el-numero-de-magistrados-en-el-tribunal-supremo-de-justicia/' },
  { id: 15, outlet: 'El Nacional', title: { en: 'Delcy Rodríguez ends the Amnesty Law and moves ahead with a judicial reform', es: 'Delcy Rodríguez pone fin a la Ley de Amnistía y avanza con una reforma judicial' }, date: '23 Apr 2026', url: 'https://www.elnacional.com/2026/04/delcy-rodriguez-pone-fin-a-la-ley-de-amnistia-y-avanza-con-una-reforma-judicial/' },
  { id: 16, outlet: 'El Tiempo', title: { en: 'A Venezuelan remains detained for a TikTok comment on Maduro’s capture, NGO says', es: 'Un venezolano permanece detenido por comentar en TikTok sobre captura de Maduro, según ONG' }, date: '8 Apr 2026', url: 'https://www.eltiempo.com/mundo/venezuela/un-venezolano-permanece-detenido-por-comentar-en-tiktok-sobre-captura-de-maduro-segun-ong-3546227' },
  { id: 17, outlet: 'Efecto Cocuyo', title: { en: 'Foro Penal reports 344 political prisoners still held in Venezuela', es: 'Foro Penal reporta que aún existen 344 presos políticos en Venezuela' }, date: '18 Sep 2026', url: 'https://efectococuyo.com/la-humanidad/foro-penal-reporta-que-aun-existen-344-presos-politicos-en-venezuela/' },
  { id: 18, outlet: 'El Pitazo', title: { en: 'PNB detains former mayor Javier Oropeza 48 hours after his return to the country', es: 'PNB detiene a exalcalde Javier Oropeza: tenía 48 horas de haber regresado al país' }, date: '17 Sep 2026', url: 'https://elpitazo.net/politica/pnb-detiene-a-exalcalde-javier-oropeza-tenia-48-horas-de-haber-regresado-al-pais/' },
  { id: 19, outlet: 'Infobae', title: { en: 'Opposition leader Javier Oropeza released after arbitrary detention', es: 'Liberaron al dirigente opositor Javier Oropeza tras ser detenido de forma arbitraria' }, date: '18 Sep 2026', url: 'https://www.infobae.com/venezuela/2026/09/18/liberaron-al-dirigente-opositor-javier-oropeza-tras-ser-detenido-de-forma-arbitraria-en-venezuela/' },
  { id: 20, outlet: 'Telemundo 51', title: { en: '“There was abusive use”: Delcy Rodríguez asks to reform the anti-hate law', es: '“Se hizo un uso abusivo”: Delcy Rodríguez pide reformar Ley contra el Odio' }, date: '30 Sep 2026', url: 'https://www.telemundo51.com/noticias/venezuela/se-hizo-un-uso-abusivo-delcy-rodriguez-pide-reformar-ley-contra-el-odio-en-venezuela/2831233/' },
  { id: 21, outlet: 'Prensa Latina', title: { en: 'Anti-hate law reform bill sent to the Supreme Court', es: 'Remiten al TSJ proyecto de reforma de Ley contra el Odio' }, date: '13 Oct 2026', url: 'https://www.prensa-latina.cu/2026/10/13/remiten-al-tsj-proyecto-de-reforma-de-ley-contra-el-odio-en-venezuela/' },
  { id: 22, outlet: 'La Tercera', title: { en: 'VenApp: Amnesty questions the app Maduro uses to receive reports against opponents', es: 'VenApp: Amnistía cuestiona aplicación que Maduro usa para recibir denuncias contra opositores' }, date: '7 Aug 2024', url: 'https://www.latercera.com/mundo/noticia/venapp-amnistia-cuestiona-aplicacion-que-maduro-usa-para-recibir-denuncias-contra-opositores/FHRLZUMC3JBWZP75ZTGKSTS54A/' },
  { id: 23, outlet: 'CNN via KEYT', title: { en: 'Fearing US effort to remove him, Maduro urges Venezuelans to snitch via app', es: 'Por temor a un esfuerzo de EE. UU. para sacarlo, Maduro pide a los venezolanos denunciar por una aplicación' }, date: '4 Nov 2025', url: 'https://keyt.com/news/national-world/cnn-world/2025/11/04/fearing-us-effort-to-remove-him-maduro-urges-venezuelans-to-snitch-via-app/' },
  { id: 24, outlet: 'Human Rights Watch', title: { en: 'World Report 2026: Venezuela', es: 'Informe Mundial 2026: Venezuela' }, url: 'https://www.hrw.org/world-report/2026/country-chapters/venezuela' },
  { id: 25, outlet: 'Gaceta Oficial', title: { en: 'Official Gazette No. 40,153 (24 Apr 2013): Decree 9,446, Organic Regulation of SEBIN', es: 'Gaceta Oficial N° 40.153 (24 abr 2013): Decreto 9.446, Reglamento Orgánico del SEBIN' }, date: '24 Apr 2013' },
  { id: 26, outlet: 'Wikimedia Commons', title: { en: 'Official Gazette No. 6,957 Extraordinary (6 Jan 2026): Decree 5,203', es: 'Gaceta Oficial N° 6.957 Extraordinaria (6 ene 2026): Decreto 5.203' }, date: '6 Jan 2026', url: 'https://commons.wikimedia.org/wiki/File:Gaceta_Oficial_de_Venezuela_(Extraordinaria)_-_6957.pdf' },
  { id: 27, outlet: 'Wikimedia Commons', title: { en: 'Official Gazette No. 40,599 (10 Feb 2015): Decree 1,605, Organic Regulation of the DGCIM', es: 'Gaceta Oficial N° 40.599 (10 feb 2015): Decreto 1.605, Reglamento Orgánico de la DGCIM' }, date: '10 Feb 2015', url: 'https://commons.wikimedia.org/wiki/File:Gaceta_Oficial_de_Venezuela_-_40599.pdf' },
  { id: 28, outlet: 'Acceso a la Justicia', title: { en: 'The Constitutional Chamber orders Delcy Rodríguez to take over the presidency (ruling No. 1)', es: 'La SC ordena que Delcy Rodríguez asuma la Presidencia de la República (sentencia N° 1)' }, date: '3 Jan 2026', url: 'https://accesoalajusticia.org/la-sc-ordena-que-delcy-rodriguez-presidencia-de-la-republica/' },
  { id: 29, outlet: 'TSJ', title: { en: 'Record of the Constitutional Chamber, 3 Jan 2026', es: 'Cuenta de la Sala Constitucional del 3 de enero de 2026' }, date: '3 Jan 2026', url: 'https://historico.tsj.gob.ve/cuentas/generadas/scon/2026/cuentascon-1-03012026.html' },
  { id: 30, outlet: 'Efecto Cocuyo', title: { en: 'Why hasn’t Delcy Rodríguez appointed an executive vice president?', es: '¿Por qué Delcy Rodríguez no ha designado vicepresidente ejecutivo?' }, date: '19 Apr 2026', url: 'https://efectococuyo.com/politica/por-que-delcy-rodriguez-designado-vicepresidente-ejecutivo/' },
  { id: 31, outlet: 'RNV', title: { en: 'CICPC director Douglas Rico reviews operational progress', es: 'Director del CICPC, Douglas Rico, evalúa avances operativos' }, date: '26 Aug 2026', url: 'https://rnv.gob.ve/director-del-cicpc-douglas-rico-evalua-avances-operativos/' },
  { id: 32, outlet: 'Gaceta Oficial', title: { en: 'Official Gazette No. 6,759 Extraordinary (25 Aug 2023): reform of the Communal Councils Law (reprinted “due to material error”; first published in No. 6,749 Extraordinary, 26 Jun 2023)', es: 'Gaceta Oficial N° 6.759 Extraordinaria (25 ago 2023): reforma de la Ley de los Consejos Comunales (“se reimprime por error material”; publicada primero en la N° 6.749 Extraordinaria, 26 jun 2023)' }, date: '25 Aug 2023', url: 'https://www.traviesoevans.com/travieso/wp-content/uploads/gacetas/2023/08-agosto/2023-08-25-6759-extraordinario.pdf' },
  { id: 33, outlet: 'Gaceta Oficial', title: { en: 'Official Gazette No. 6,749 Extraordinary (26 Jun 2023): first publication of the Communal Councils Law reform', es: 'Gaceta Oficial N° 6.749 Extraordinaria (26 jun 2023): primera publicación de la reforma de la Ley de los Consejos Comunales' }, date: '26 Jun 2023', url: 'https://www.traviesoevans.com/travieso/wp-content/uploads/gacetas/2023/06-junio/2023-06-26-6749-extraordinario.pdf' },
  { id: 34, outlet: 'Gaceta Oficial', title: { en: 'Official Gazette No. 6,859 Extraordinary (29 Nov 2024): Liberator Simón Bolívar Organic Law', es: 'Gaceta Oficial N° 6.859 Extraordinaria (29 nov 2024): Ley Orgánica Libertador Simón Bolívar' }, date: '29 Nov 2024', url: 'https://www.traviesoevans.com/travieso/wp-content/uploads/gacetas/2024/11-noviembre/2024-11-29-6859-extraordinario.pdf' },
  { id: 35, outlet: 'Gaceta Oficial', title: { en: 'Official Gazette No. 6,872 Extraordinary (30 Dec 2024): reform of the Organic Law of Communes', es: 'Gaceta Oficial N° 6.872 Extraordinaria (30 dic 2024): reforma de la Ley Orgánica de las Comunas' }, date: '30 Dec 2024', url: 'https://www.traviesoevans.com/travieso/wp-content/uploads/gacetas/2024/12-diciembre/2024-12-30-6872-extraordinario.pdf' },
  { id: 36, outlet: 'World Bank', title: { en: 'World Bank Group announces resumption of dealings with Venezuela (statement)', es: 'El Grupo Banco Mundial anuncia la reanudación de relaciones con Venezuela (comunicado)' }, date: '16 Apr 2026', url: 'https://www.worldbank.org/en/news/statement/2026/04/16/world-bank-group-announces-resumption-of-dealings-with-venezuela' },
  { id: 37, outlet: 'Wikimedia Commons', title: { en: 'Official Gazette No. 7,006 Extraordinary (18 Mar 2026): Decree 5,284, appointment of the DGCIM director', es: 'Gaceta Oficial N° 7.006 Extraordinaria (18 mar 2026): Decreto 5.284, nombramiento del director de la DGCIM' }, date: '18 Mar 2026', url: 'https://commons.wikimedia.org/wiki/File:Gaceta_Oficial_de_Venezuela_(Extraordinaria)_-_7006.pdf' },
  { id: 41, outlet: 'El Nacional', title: { en: 'The Supreme Court endorses the reform of the anti-hate law and lets the National Assembly continue the debate (ruling No. 1034)', es: 'El TSJ avala la reforma a la Ley contra el Odio y autoriza a la Asamblea Nacional a continuar el debate legislativo (sentencia N.° 1034)' }, date: '15 Oct 2026', url: 'https://www.elnacional.com/2026/10/el-tsj-avala-la-reforma-a-la-ley-contra-el-odio-y-autoriza-a-la-asamblea-nacional-a-continuar-el-debate-legislativo/' },
  { id: 40, outlet: 'Chequeado / Factchequeado', title: { en: 'Who is Delcy Rodríguez, Venezuela’s interim president after Nicolás Maduro’s capture', es: 'Quién es Delcy Rodríguez, la presidenta interina de Venezuela tras la captura de Nicolás Maduro' }, date: '5 Jan 2026', url: 'https://chequeado.com/el-explicador/quien-es-delcy-rodriguez-la-presidenta-interina-de-venezuela-tras-la-captura-de-nicolas-maduro/' },
  { id: 39, outlet: 'vLex Venezuela', title: { en: 'Organic Law of the Police Service and the Bolivarian National Police Corps (art. 17: the ministry is the “governing body” of the police service)', es: 'Ley Orgánica del Servicio de Policía y del Cuerpo de Policía Nacional Bolivariana (art. 17: el ministerio es el “Órgano Rector” del servicio de policía)' }, url: 'https://vlexvenezuela.com/vid/739939169' },
  { id: 38, outlet: 'Maldita.es', title: { en: 'VenApp, the app the Venezuelan government uses to report citizens', es: 'VenApp, la aplicación del Gobierno de Venezuela para denunciar a ciudadanos' }, date: '31 Jul 2024', url: 'https://maldita.es/malditatecnologia/20240731/venapp-aplicacion-venezuela-maduro-denunciar-ciudadanos/' },
];

/** UN report paragraph references, used in labels: "UN, para. 46" / "ONU, párr. 46" */
export const un = (p: string): L => ({ en: `UN, para. ${p}`, es: `ONU, párr. ${p}` });

/* ------------------------------------------------------------------ opening */

export const OPENING = {
  dek: {
    en: 'The departure of Nicolás Maduro opened a new stage of economic and political reorganization in Venezuela. The oil legislation was reformed and the agreements with the United States moved forward. The official gazettes, however, reveal another dimension of the change: Delcy Rodríguez, who had previously countersigned rules on security and state control, took over the presidential power to appoint the heads of military counterintelligence. The decrees of January and March 2026 show who kept the authority to run the institutions historically linked to political repression.',
    es: 'La salida de Nicolás Maduro abrió una nueva etapa de reorganización económica y política en Venezuela. Se reformó la legislación petrolera y avanzaron los acuerdos con Estados Unidos. Sin embargo, las gacetas oficiales revelan otra dimensión del cambio: Delcy Rodríguez, quien anteriormente refrendó normas relacionadas con la seguridad y el control estatal, asumió la facultad presidencial de designar a las autoridades de contrainteligencia militar. Los decretos de enero y marzo de 2026 permiten advertir quién conservó la autoridad para dirigir las instituciones históricamente vinculadas con la represión política.',
  } as L,
  steps: [
    {
      kicker: { en: '3 January 2026', es: '3 de enero de 2026' },
      text: {
        en: 'One line, two paths. From the day Maduro was captured, the country moved in two directions at once.',
        es: 'Una línea, dos caminos. Desde el día de la captura de Maduro, el país se movió en dos direcciones a la vez.',
      },
    },
    {
      kicker: { en: 'The economy changed', es: 'La economía cambió' },
      // One fact per line ("\n" = line break on the card).
      text: {
        en: 'In January a new Hydrocarbons Law was passed.\nIn April ties with the IMF and the World Bank were restored.\nIn August a 25-year oil agreement was signed with the United States.\nThe economic turn was visible, fast and documented.',
        es: 'En enero se aprobó una nueva Ley de Hidrocarburos.\nEn abril se retomaron los vínculos con el FMI y el Banco Mundial.\nEn agosto se firmó un acuerdo petrolero de 25 años con Estados Unidos.\nEl giro económico fue visible, rápido y documentado.',
      },
    },
    {
      kicker: { en: 'The structure of control and security remains', es: 'Persiste la estructura de control y seguridad' },
      text: {
        en: 'On 6 January and 18 March 2026, Delcy Rodríguez signed the decrees appointing the directors of military counterintelligence (DGCIM). The UN documented that SEBIN and the DGCIM kept operating under the same structures and rules. The anti-hate law remained in force and, as of 14 September, Foro Penal counted 344 political prisoners.',
        es: 'El 6 de enero y el 18 de marzo de 2026, Delcy Rodríguez firmó los decretos de designación de los directores de la contrainteligencia militar (DGCIM). La ONU documentó que el SEBIN y la DGCIM continuaban operando bajo las mismas estructuras y reglas. La Ley contra el Odio permanecía vigente y, al 14 de septiembre, Foro Penal registraba 344 presos políticos.',
      },
    },
  ],
  // Dated facts on each lane (from TIMELINE). The curves only show direction: they are not data.
  econLabels: [
    { date: '2026-01-22', label: { en: '22 Jan · Hydrocarbons Law', es: '22 ene · Ley de Hidrocarburos' } },
    { date: '2026-04-16', label: { en: '16 Apr · IMF and World Bank', es: '16 abr · FMI y Banco Mundial' } },
    { date: '2026-08-28', label: { en: '28 Aug · Oil deal with the U.S.', es: '28 ago · Acuerdo petrolero con EE. UU.' } },
  ],
  secLabels: [
    { date: '2026-01-06', label: { en: '6 Jan · New DGCIM chief', es: '6 ene · Nuevo jefe de la DGCIM' } },
    { date: '2026-03-18', label: { en: '18 Mar · Another DGCIM chief', es: '18 mar · Otro jefe de la DGCIM' } },
    { date: '2026-04-23', label: { en: '23 Apr · Amnesty ended', es: '23 abr · Fin de la amnistía' } },
    { date: '2026-09-14', label: { en: '14 Sep · 344 political prisoners', es: '14 sept · 344 presos políticos' } },
  ],
  illustrative: {
    en: 'Illustrative graphic: the curves only show direction; each point is a dated fact.',
    es: 'Gráfico ilustrativo: las curvas solo indican dirección; cada punto es un hecho con fecha.',
  } as L,
  quotesTitle: { en: 'The United Nations warning', es: 'La advertencia de Naciones Unidas' } as L,
  /** Context line under the first quote. */
  quotesNote: {
    en: 'The Independent International Fact-Finding Mission on Venezuela examined this direction in the report it presented to the Human Rights Council in September 2026.',
    es: 'La Misión Internacional Independiente de Determinación de los Hechos sobre Venezuela examinó esta orientación en el informe que presentó al Consejo de Derechos Humanos en septiembre de 2026.',
  } as L,
  quotes: [
    {
      para: '16',
      en: 'prioritized economic and commercial interests over democratic reform or human rights considerations',
      es: 'priorizó los intereses económicos y comerciales por encima de la reforma democrática o de las consideraciones de derechos humanos',
      about: { en: 'On the direction of the U.S. plan for Venezuela in 2026', es: 'Sobre la orientación del plan estadounidense para Venezuela en 2026' },
    },
    {
      para: '46',
      en: 'continue to operate under the same structures and with the same rules',
      es: 'siguen operando con las mismas estructuras y con las mismas reglas',
      about: { en: 'On SEBIN and the DGCIM', es: 'Sobre el SEBIN y la DGCIM' },
    },
  ],
};

/* --------------------------------------------------------------- signatures */

export interface Highlight {
  k: 'name' | 'role' | 'act';
  x: number;
  y: number;
  w: number;
  h: number;
}
export interface Signature {
  id: string;
  year: string;
  image: ImageMetadata;
  boxes: Highlight[];
  law: L;
  gazette: L;
  roles: L[];
  note: L;
  caption: L;
  alt: L;
  src: number[];
  alone?: boolean;
}

// Highlight boxes are percentages of each composite image (generated from the PDFs).
export const SIGNATURES: Signature[] = [
  {
    id: 'sig-2015',
    year: '2015',
    image: sig2015,
    boxes: BOXES['2015'].boxes as Highlight[],
    law: { en: 'Organic Regulation of the DGCIM (Decree 1,605)', es: 'Reglamento Orgánico de la DGCIM (Decreto 1.605)' },
    gazette: { en: 'Official Gazette No. 40,599 · 10 February 2015', es: 'Gaceta Oficial N° 40.599 · 10 de febrero de 2015' },
    roles: [{ en: 'Minister of Foreign Affairs', es: 'Ministra de Relaciones Exteriores' }],
    note: {
      en: 'Prologue. As foreign minister, she countersigned the regulation whose article 6 says the DGCIM director “is appointed by the President … and Commander in Chief.” Eleven years later, that power is hers.',
      es: 'Prólogo. Como canciller, refrendó el reglamento cuyo artículo 6 dice que el director de la DGCIM “es designado por el Presidente o Presidenta … y Comandante en Jefe”. Once años después, ese poder es suyo.',
    },
    caption: { en: 'Official Gazette of the Bolivarian Republic of Venezuela No. 40,599, p. 418,695 (masthead: p. 1).', es: 'Gaceta Oficial de la República Bolivariana de Venezuela N° 40.599, pág. 418.695 (cabecera: pág. 1).' },
    alt: {
      en: 'Masthead of Official Gazette No. 40,599 of 10 February 2015 and the countersignature block: “Countersigned. The Minister of the People’s Power for Foreign Affairs. Delcy Eloína Rodríguez Gómez.”',
      es: 'Cabecera de la Gaceta Oficial N° 40.599 del 10 de febrero de 2015 y el bloque de refrendo: “Refrendado. La Ministra del Poder Popular para Relaciones Exteriores. Delcy Eloina Rodríguez Gómez”.',
    },
    src: [27],
  },
  {
    id: 'sig-2023',
    year: '2023',
    image: sig2023,
    boxes: BOXES['2023'].boxes as Highlight[],
    law: { en: 'Reform of the Organic Law of Communal Councils', es: 'Reforma de la Ley Orgánica de los Consejos Comunales' },
    gazette: { en: 'Official Gazette No. 6,759 Extraordinary · 25 August 2023', es: 'Gaceta Oficial N° 6.759 Extraordinaria · 25 de agosto de 2023' },
    roles: [
      { en: 'Executive Vice President', es: 'Vicepresidenta Ejecutiva' },
      { en: 'Minister of Economy, Finance and Foreign Trade', es: 'Ministra de Economía, Finanzas y Comercio Exterior' },
    ],
    note: {
      en: 'Two signatures, two posts, one law. The reform orders each communal council to contribute to security and defense “jointly with the Bolivarian Militia” (art. 24.8). Reprinted “due to material error”; first published in No. 6,749 Extraordinary on 26 June 2023, with the same signatures.',
      es: 'Dos firmas, dos cargos, una ley. La reforma ordena a cada consejo comunal contribuir a la seguridad y defensa “conjuntamente con la Milicia Bolivariana” (art. 24.8). Reimpresa “por error material”; publicada primero en la N° 6.749 Extraordinaria del 26 de junio de 2023, con las mismas firmas.',
    },
    caption: { en: 'Official Gazette No. 6,759 Extraordinary, pp. 14–15 (masthead: p. 1).', es: 'Gaceta Oficial N° 6.759 Extraordinaria, págs. 14–15 (cabecera: pág. 1).' },
    alt: {
      en: 'Masthead of Official Gazette No. 6,759 Extraordinary of 25 August 2023 and two countersignatures by Delcy Eloína Rodríguez Gómez: as Executive Vice President and First Vice President of the Council of Ministers, and as Minister of Economy, Finance and Foreign Trade.',
      es: 'Cabecera de la Gaceta Oficial N° 6.759 Extraordinaria del 25 de agosto de 2023 y dos refrendos de Delcy Eloína Rodríguez Gómez: como Vicepresidenta Ejecutiva y Primera Vicepresidenta del Consejo de Ministros, y como Ministra de Economía, Finanzas y Comercio Exterior.',
    },
    src: [32, 33],
  },
  {
    id: 'sig-2024a',
    year: '2024',
    image: sig2024a,
    boxes: BOXES['2024a'].boxes as Highlight[],
    law: { en: 'Liberator Simón Bolívar Organic Law (“against the imperialist blockade”)', es: 'Ley Orgánica Libertador Simón Bolívar (“contra el bloqueo imperialista”)' },
    gazette: { en: 'Official Gazette No. 6,859 Extraordinary · 29 November 2024', es: 'Gaceta Oficial N° 6.859 Extraordinaria · 29 de noviembre de 2024' },
    roles: [
      { en: 'Executive Vice President', es: 'Vicepresidenta Ejecutiva' },
      { en: 'Minister of Oil and Sectoral Vice President for the Economy (acting)', es: 'Ministra de Petróleo y Vicepresidenta Sectorial de Economía (E)' },
    ],
    note: {
      en: 'The law punishes anyone who “promotes, instigates, requests, invokes, favors” sanctions with 25 to 30 years in prison (art. 11) and political disqualification for up to 60 years (art. 13). Also countersigned by Diosdado Cabello and Vladimir Padrino López.',
      es: 'La ley castiga a quien “promueva, instigue, solicite, invoque, favorezca” sanciones con 25 a 30 años de prisión (art. 11) e inhabilitación política hasta por 60 años (art. 13). También la refrendaron Diosdado Cabello y Vladimir Padrino López.',
    },
    caption: { en: 'Official Gazette No. 6,859 Extraordinary, pp. 3–4 (masthead: p. 1).', es: 'Gaceta Oficial N° 6.859 Extraordinaria, págs. 3–4 (cabecera: pág. 1).' },
    alt: {
      en: 'Masthead of Official Gazette No. 6,859 Extraordinary of 29 November 2024 and two countersignatures by Delcy Eloína Rodríguez Gómez: as Executive Vice President, and as Minister of Oil and acting Sectoral Vice President for the Economy.',
      es: 'Cabecera de la Gaceta Oficial N° 6.859 Extraordinaria del 29 de noviembre de 2024 y dos refrendos de Delcy Eloína Rodríguez Gómez: como Vicepresidenta Ejecutiva, y como Ministra de Petróleo y Vicepresidenta Sectorial de Economía (E).',
    },
    src: [34],
  },
  {
    id: 'sig-2024b',
    year: '2024',
    image: sig2024b,
    boxes: BOXES['2024b'].boxes as Highlight[],
    law: { en: 'Reform of the Organic Law of Communes', es: 'Reforma de la Ley Orgánica de las Comunas' },
    gazette: { en: 'Official Gazette No. 6,872 Extraordinary · 30 December 2024', es: 'Gaceta Oficial N° 6.872 Extraordinaria · 30 de diciembre de 2024' },
    roles: [
      { en: 'Executive Vice President', es: 'Vicepresidenta Ejecutiva' },
      { en: 'Minister of Oil and Sectoral Vice President for the Economy (acting)', es: 'Ministra de Petróleo y Vicepresidenta Sectorial de Economía (E)' },
    ],
    note: {
      en: 'One month later, the same pair of posts. The reform creates a Security and Peace Commission in every commune that works “jointly with the Bolivarian Militia” (art. 43.2) and communal justices of the peace. Also countersigned by Cabello and Padrino López.',
      es: 'Un mes después, el mismo par de cargos. La reforma crea en cada comuna una Comisión de Seguridad y Paz que actúa “conjuntamente con la Milicia Bolivariana” (art. 43.2) y jueces de paz comunal. También la refrendaron Cabello y Padrino López.',
    },
    caption: { en: 'Official Gazette No. 6,872 Extraordinary, pp. 18–19 (masthead: p. 1).', es: 'Gaceta Oficial N° 6.872 Extraordinaria, págs. 18–19 (cabecera: pág. 1).' },
    alt: {
      en: 'Masthead of Official Gazette No. 6,872 Extraordinary of 30 December 2024 and two countersignatures by Delcy Eloína Rodríguez Gómez: as Executive Vice President, and as Minister of Oil and acting Sectoral Vice President for the Economy.',
      es: 'Cabecera de la Gaceta Oficial N° 6.872 Extraordinaria del 30 de diciembre de 2024 y dos refrendos de Delcy Eloína Rodríguez Gómez: como Vicepresidenta Ejecutiva, y como Ministra de Petróleo y Vicepresidenta Sectorial de Economía (E).',
    },
    src: [35],
  },
  {
    id: 'sig-2026',
    year: '2026',
    image: sig2026,
    boxes: BOXES['2026'].boxes as Highlight[],
    alone: true,
    law: { en: 'Decree 5,203: appointment of the DGCIM director', es: 'Decreto 5.203: nombramiento del director de la DGCIM' },
    gazette: { en: 'Official Gazette No. 6,957 Extraordinary · 6 January 2026', es: 'Gaceta Oficial N° 6.957 Extraordinaria · 6 de enero de 2026' },
    roles: [{ en: 'Acting President of the Republic', es: 'Presidenta (E) de la República' }],
    note: {
      en: 'One day after taking the oath, she signs alone, with no countersignature: “I appoint General-in-Chief Gustavo Enrique González López” as head of military counterintelligence. The appointed authority now appoints.',
      es: 'Un día después de jurar, firma sola, sin refrendos: “Nombro al ciudadano General en Jefe Gustavo Enrique González López” jefe de la contrainteligencia militar. La autoridad designada ahora designa.',
    },
    caption: { en: 'Official Gazette No. 6,957 Extraordinary, p. 2 (masthead: p. 1). The ID number has been redacted by Venezuela Record.', es: 'Gaceta Oficial N° 6.957 Extraordinaria, pág. 2 (cabecera: pág. 1). Venezuela Record tapó el número de cédula.' },
    alt: {
      en: 'Masthead of Official Gazette No. 6,957 Extraordinary of 6 January 2026, article 1 of Decree 5,203 (“I appoint General-in-Chief Gustavo Enrique González López … as Director General of the Directorate General of Military Counterintelligence”) and the signature “Delcy Eloína Rodríguez Gómez, Acting President of the Republic.”',
      es: 'Cabecera de la Gaceta Oficial N° 6.957 Extraordinaria del 6 de enero de 2026, artículo 1 del Decreto 5.203 (“Nombro al ciudadano General en Jefe Gustavo Enrique González López … como Director General de la Dirección General de Contrainteligencia Militar”) y la firma “Delcy Eloína Rodríguez Gómez, Presidenta (E) de la República”.',
    },
    src: [26, 3],
  },
  {
    id: 'sig-2026b',
    year: '2026',
    image: sig2026b,
    boxes: BOXES['2026b'].boxes as Highlight[],
    alone: true,
    law: { en: 'Decree 5,284: a new DGCIM director', es: 'Decreto 5.284: nuevo director de la DGCIM' },
    gazette: { en: 'Official Gazette No. 7,006 Extraordinary · 18 March 2026', es: 'Gaceta Oficial N° 7.006 Extraordinaria · 18 de marzo de 2026' },
    roles: [{ en: 'Acting President of the Republic', es: 'Presidenta (E) de la República' }],
    note: {
      en: 'Ten weeks later, the same formula and the same single signature: “I appoint Germán Edoardo Gómez Lárez” as director of the DGCIM, while González López moves to Defense.',
      es: 'Diez semanas después, la misma fórmula y la misma firma única: “Nombro al ciudadano Germán Edoardo Gómez Lárez” director de la DGCIM, mientras González López pasa a Defensa.',
    },
    caption: { en: 'Official Gazette No. 7,006 Extraordinary, p. 2 (masthead: p. 1). The ID number has been redacted by Venezuela Record.', es: 'Gaceta Oficial N° 7.006 Extraordinaria, pág. 2 (cabecera: pág. 1). Venezuela Record tapó el número de cédula.' },
    alt: {
      en: 'Masthead of Official Gazette No. 7,006 Extraordinary of 18 March 2026, article 1 of Decree 5,284 (“I appoint Germán Edoardo Gómez Lárez … as Director General of the Directorate General of Military Counterintelligence”) and the signature “Delcy Eloína Rodríguez Gómez, Acting President of the Republic.”',
      es: 'Cabecera de la Gaceta Oficial N° 7.006 Extraordinaria del 18 de marzo de 2026, artículo 1 del Decreto 5.284 (“Nombro al ciudadano Germán Edoardo Gómez Lárez … como Director General de la Dirección General de Contrainteligencia Militar”) y la firma “Delcy Eloína Rodríguez Gómez, Presidenta (E) de la República”.',
    },
    src: [37, 6],
  },
];

/* ---------------------------------------------------------------- org chart */

export type EdgeType = 'appoint' | 'legal' | 'coord' | 'un' | 'family' | 'result';
export type NodeKind = 'person' | 'inst' | 'group' | 'outcome';

export interface OrgNode {
  id: string;
  level: 0 | 1 | 2 | 3 | 4 | 5;
  kind: NodeKind;
  name: L;
  role: L;
  short: L; // one-line label under the node
  initials?: string;
  photo?: ImageMetadata;
  photoCredit?: L;
  /** Official emblem (public domain, Wikimedia Commons): institutions, and people with no free photo */
  logo?: ImageMetadata;
  logoCredit?: L;
  /** Free-licensed photo that illustrates a group or institution (not a person) */
  image?: ImageMetadata;
  imageAlt?: L;
  imageCredit?: L;
  facts: { text: L; src: number[] }[];
  /** desktop diagram position (viewBox 0 0 1100 900) */
  x: number;
  y: number;
}

export interface OrgEdge {
  from: string;
  to: string;
  type: EdgeType;
  label: L;
  src: number[];
}

export const LEVELS: L[] = [
  { en: 'Origin', es: 'Origen' },
  { en: 'Leadership', es: 'Jefatura' },
  { en: 'Cabinet', es: 'Gabinete' },
  { en: 'Security', es: 'Seguridad' },
  { en: 'Territory', es: 'Territorio' },
  { en: 'Result', es: 'Resultado' },
];

export const EDGE_TYPES: { type: EdgeType; label: L; hint: L }[] = [
  { type: 'appoint', label: { en: 'Appointment', es: 'Designación' }, hint: { en: 'Thick line with arrow', es: 'Línea gruesa con flecha' } },
  { type: 'legal', label: { en: 'Legal command', es: 'Mando legal' }, hint: { en: 'Solid line', es: 'Línea sólida' } },
  { type: 'coord', label: { en: 'Coordination', es: 'Coordinación' }, hint: { en: 'Dashed line', es: 'Línea discontinua' } },
  { type: 'un', label: { en: 'De facto link documented by the UN', es: 'Vínculo de hecho documentado por la ONU' }, hint: { en: 'Dotted line', es: 'Línea punteada' } },
  { type: 'family', label: { en: 'Family tie', es: 'Parentesco' }, hint: { en: 'Thin dash-dot line', es: 'Línea fina de raya y punto' } },
  { type: 'result', label: { en: 'Documented outcome', es: 'Resultado documentado' }, hint: { en: 'Red arrow', es: 'Flecha roja' } },
];

const noPhoto: L = {
  en: 'No freely licensed photo of this person exists: the emblem of the agency they head is shown instead.',
  es: 'No existe una foto con licencia libre de esta persona: se muestra el escudo del organismo que dirige.',
};
const emblem = (en: string, es: string): L => ({
  en: `Emblem: ${en} · public domain, via Wikimedia Commons`,
  es: `Escudo: ${es} · dominio público, vía Wikimedia Commons`,
});

export const NODES: OrgNode[] = [
  {
    id: 'usa', level: 0, kind: 'inst', x: 340, y: 64, logo: lgUsa,
    logoCredit: { en: 'Great Seal of the United States · public domain, via Wikimedia Commons', es: 'Gran Sello de los Estados Unidos · dominio público, vía Wikimedia Commons' },
    name: { en: 'U.S. government', es: 'Gobierno de EE. UU.' },
    role: { en: 'Plan of “stability, recovery, transition”', es: 'Plan de “estabilidad, recuperación, transición”' },
    short: { en: 'U.S. government', es: 'Gobierno de EE. UU.' },
    facts: [
      { text: { en: 'According to the UN mission, the U.S. plan for Venezuela “prioritized economic and commercial interests over democratic reform or human rights considerations” (para. 16).', es: 'Según la misión de la ONU, el plan de EE. UU. para Venezuela “priorizó los intereses económicos y comerciales por encima de la reforma democrática o de las consideraciones de derechos humanos” (párr. 16).' }, src: [1] },
      { text: { en: 'The UN reports that “all major political, economic and security decisions in the country are being instigated, authorized or approved by the Government of the United States” (para. 16).', es: 'La ONU afirma que todas las decisiones políticas, económicas y de seguridad importantes del país son “instigated, authorized or approved” (promovidas, autorizadas o aprobadas) por el gobierno de EE. UU. (párr. 16).' }, src: [1] },
    ],
  },
  {
    id: 'tsj', level: 0, kind: 'inst', x: 760, y: 64, logo: lgTsj,
    logoCredit: { en: 'Logo: Supreme Court of Justice · public domain, via Wikimedia Commons', es: 'Logo: Tribunal Supremo de Justicia · dominio público, vía Wikimedia Commons' },
    name: { en: 'Supreme Court (TSJ)', es: 'Tribunal Supremo de Justicia (TSJ)' },
    role: { en: 'Named the acting president on 3 Jan 2026', es: 'Nombró a la presidenta encargada el 3 ene 2026' },
    short: { en: 'Supreme Court', es: 'TSJ' },
    facts: [
      { text: { en: 'Ruling No. 1 of the Constitutional Chamber (3 Jan 2026), issued “ex officio”, ordered the executive vice president to “assume and exercise” the presidency “as acting president”, with no time limit.', es: 'La sentencia N° 1 de la Sala Constitucional (3 ene 2026), dictada “de oficio”, ordenó que la vicepresidenta ejecutiva “asuma y ejerza” la Presidencia “en condición de encargada”, sin fijar plazo.' }, src: [28, 29] },
      { text: { en: 'Acceso a la Justicia argues that the Constitution gives the court no power to order this.', es: 'Acceso a la Justicia sostiene que la Constitución no le da al TSJ competencia para ordenarlo.' }, src: [28] },
      { text: { en: 'In April–May 2026, eight justices were retired and the National Assembly expanded the court from 20 to 32 seats; the UN warns of a risk of political influence (para. 47).', es: 'En abril y mayo de 2026 se jubiló a 8 magistrados y la Asamblea Nacional amplió el tribunal de 20 a 32; la ONU advierte riesgo de influencia política (párr. 47).' }, src: [1, 14] },
    ],
  },
  {
    id: 'delcy', level: 1, kind: 'person', x: 550, y: 200, photo: pDelcy,
    photoCredit: { en: 'Photo: Presidency of Venezuela, 19 Jan 2026 · public domain, via Wikimedia Commons', es: 'Foto: Presidencia de Venezuela, 19 ene 2026 · dominio público, vía Wikimedia Commons' },
    name: { en: 'Delcy Rodríguez', es: 'Delcy Rodríguez' },
    role: { en: 'Acting President since 5 Jan 2026 · still Executive Vice President', es: 'Presidenta encargada desde el 5 ene 2026 · sigue siendo vicepresidenta ejecutiva' },
    short: { en: 'Acting President', es: 'Presidenta (E)' },
    facts: [
      { text: { en: 'Sworn in as acting president on 5 January 2026, after the Supreme Court ruling (UN, para. 17).', es: 'Juró como presidenta encargada el 5 de enero de 2026, tras la sentencia del TSJ (ONU, párr. 17).' }, src: [1, 28] },
      { text: { en: 'She has not appointed an executive vice president (no appointment had been reported as of 13 October 2026). As lawyer Nelson Chitty La Roche told Efecto Cocuyo, under the 3 January ruling she “is still the vice president but is also the acting president.” SEBIN is a body of the Vice Presidency (Decree 9,446, art. 3).', es: 'No ha nombrado vicepresidente ejecutivo (no se había informado de ningún nombramiento al 13 de octubre de 2026). Como explicó a Efecto Cocuyo el abogado Nelson Chitty La Roche, según la sentencia del 3 de enero “sigue siendo la vicepresidente pero además es la presidenta encargada”. El SEBIN es un órgano de la Vicepresidencia (Decreto 9.446, art. 3).' }, src: [30, 25] },
      { text: { en: 'Executive vice president from 2018 and, according to the UN, “formally responsible for overseeing” SEBIN; in 2017 she chaired the National Constituent Assembly (para. 34), which adopted the anti-hate law (para. 41).', es: 'Vicepresidenta ejecutiva desde 2018 y, según la ONU, formalmente responsable de supervisar el SEBIN; en 2017 presidió la Asamblea Nacional Constituyente (párr. 34), que adoptó la Ley contra el Odio (párr. 41).' }, src: [1] },
      { text: { en: 'Countersigned the DGCIM regulation (2015) and, holding two posts at once, the communal councils reform (2023), the Simón Bolívar Law and the communes reform (2024).', es: 'Refrendó el Reglamento de la DGCIM (2015) y, con dos cargos a la vez, la reforma de los consejos comunales (2023), la Ley Simón Bolívar y la reforma de Comunas (2024).' }, src: [27, 32, 34, 35] },
      { text: { en: 'On 6 January and 18 March 2026 she signed, alone, the decrees appointing the head of the DGCIM (5,203 and 5,284).', es: 'El 6 de enero y el 18 de marzo de 2026 firmó, sola, los decretos que nombran al jefe de la DGCIM (5.203 y 5.284).' }, src: [26, 37] },
    ],
  },
  {
    id: 'jorge', level: 2, kind: 'person', x: 200, y: 340, photo: pJorge,
    photoCredit: { en: 'Photo: duma.gov.ru, 30 Sep 2023 · CC BY 4.0, via Wikimedia Commons', es: 'Foto: duma.gov.ru, 30 sept 2023 · CC BY 4.0, vía Wikimedia Commons' },
    name: { en: 'Jorge Rodríguez', es: 'Jorge Rodríguez' },
    role: { en: 'President of the National Assembly · Delcy Rodríguez’s brother', es: 'Presidente de la Asamblea Nacional · hermano de Delcy Rodríguez' },
    short: { en: 'National Assembly', es: 'Asamblea Nacional' },
    facts: [
      { text: { en: 'Delcy Rodríguez’s brother; on 5 January 2026 he was reappointed president of the National Assembly (UN, para. 35).', es: 'Hermano de Delcy Rodríguez; el 5 de enero de 2026 fue reelegido presidente de la Asamblea Nacional (ONU, párr. 35).' }, src: [1, 40] },
      { text: { en: 'The UN mission calls him a “prominent spokesperson for State repressive policies” (para. 35).', es: 'La misión de la ONU lo describe como “prominent spokesperson for State repressive policies” (destacado portavoz de las políticas represivas del Estado) (párr. 35).' }, src: [1] },
      { text: { en: 'His Assembly passed the Hydrocarbons Law reform in January and the expansion of the Supreme Court from 20 to 32 justices in May 2026.', es: 'Su Asamblea aprobó la reforma de la Ley de Hidrocarburos en enero y la ampliación del TSJ de 20 a 32 magistrados en mayo de 2026.' }, src: [12, 14] },
    ],
  },
  {
    id: 'cabello', level: 2, kind: 'person', x: 550, y: 340, photo: pCabello,
    photoCredit: { en: 'Photo: VTV / Con El Mazo Dando, 28 May 2025 · public domain, via Wikimedia Commons', es: 'Foto: VTV / Con El Mazo Dando, 28 may 2025 · dominio público, vía Wikimedia Commons' },
    name: { en: 'Diosdado Cabello', es: 'Diosdado Cabello' },
    role: { en: 'Minister of Interior, Justice and Peace · Sectoral Vice President for Security', es: 'Ministro de Interior, Justicia y Paz · vicepresidente sectorial de Seguridad' },
    short: { en: 'Interior', es: 'Interior' },
    facts: [
      { text: { en: 'His ministry is the “governing body” of the police service nationwide; the CICPC and the National Police (PNB) report to it.', es: 'Su ministerio es el “Órgano Rector” del servicio de policía en todo el país; el CICPC y la Policía Nacional (PNB) dependen de él.' }, src: [39, 10] },
      { text: { en: 'Countersigned the Simón Bolívar Law and the communes reform in 2024.', es: 'Refrendó la Ley Simón Bolívar y la reforma de Comunas en 2024.' }, src: [34, 35] },
      { text: { en: 'The UN mission notes he kept his post despite his role in past repression; in previous reports it linked him “to serious human rights violations and crimes against humanity” (para. 39). It also records his public endorsements of colectivos (para. 101).', es: 'La misión de la ONU señala que mantuvo su cargo pese a su papel en la represión anterior; en informes previos lo vinculó con graves violaciones de derechos humanos y crímenes de lesa humanidad (párr. 39). También registra su respaldo público a los colectivos (párr. 101).' }, src: [1] },
      { text: { en: 'His cousin, Alexis Rodríguez Cabello, was appointed head of SEBIN in October 2024; his daughter has been tourism minister since February 2026.', es: 'Su primo, Alexis Rodríguez Cabello, fue nombrado director del SEBIN en octubre de 2024; su hija es ministra de Turismo desde febrero de 2026.' }, src: [10, 11] },
    ],
  },
  {
    id: 'gonzalez', level: 2, kind: 'person', x: 840, y: 340, photo: pGonzalez,
    photoCredit: { en: 'Photo: Michael Wimbish, U.S. Army, 26 Jun 2026 · public domain, via Wikimedia Commons', es: 'Foto: Michael Wimbish, Ejército de EE. UU., 26 jun 2026 · dominio público, vía Wikimedia Commons' },
    name: { en: 'Gustavo González López', es: 'Gustavo González López' },
    role: { en: 'Minister of Defense since 18 Mar 2026', es: 'Ministro de Defensa desde el 18 mar 2026' },
    short: { en: 'Defense', es: 'Defensa' },
    facts: [
      { text: { en: 'Head of SEBIN from April 2019 to October 2024.', es: 'Director del SEBIN de abril de 2019 a octubre de 2024.' }, src: [4] },
      { text: { en: 'Appointed head of the DGCIM by Delcy Rodríguez on 6 January 2026 (Decree 5,203). Minister Freddy Ñáñez called it “institutional continuity.”', es: 'Nombrado jefe de la DGCIM por Delcy Rodríguez el 6 de enero de 2026 (Decreto 5.203). El ministro Freddy Ñáñez lo llamó “continuidad institucional”.' }, src: [26, 3, 4] },
      { text: { en: 'Became defense minister on 18 March 2026, replacing Vladimir Padrino López.', es: 'Pasó a ministro de Defensa el 18 de marzo de 2026, en lugar de Vladimir Padrino López.' }, src: [7] },
      { text: { en: 'In previous reports, the UN mission linked him “to serious human rights violations and crimes against humanity” (para. 39).', es: 'En informes previos, la misión de la ONU lo vinculó con graves violaciones de derechos humanos y crímenes de lesa humanidad (párr. 39).' }, src: [1] },
    ],
  },
  {
    id: 'gob', level: 2, kind: 'inst', x: 1020, y: 470,
    name: { en: 'State governments', es: 'Gobernaciones' },
    role: { en: 'Each state government runs its own police force', es: 'Cada gobernación tiene su propia policía' },
    short: { en: 'Governors', es: 'Gobernaciones' },
    facts: [
      { text: { en: 'State police forces answer to their state governments, while the Interior Ministry is the “governing body” of the whole police service (Police Service Law, art. 17). Shown generically: no specific state is singled out.', es: 'Las policías estadales dependen de cada gobernación, mientras el Ministerio de Interior es el “Órgano Rector” de todo el servicio de policía (Ley del Servicio de Policía, art. 17). Se muestran en genérico, sin estados concretos.' }, src: [39] },
    ],
  },
  {
    id: 'sebin', level: 3, kind: 'person', x: 60, y: 500, initials: 'AR', logo: lgSebin,
    photoCredit: noPhoto, logoCredit: emblem('SEBIN', 'SEBIN'),
    name: { en: 'Alexis Rodríguez Cabello', es: 'Alexis Rodríguez Cabello' },
    role: { en: 'Director of SEBIN (intelligence) since Oct 2024 · last confirmed in office in March 2026', es: 'Director del SEBIN (inteligencia) desde oct 2024 · confirmado en el cargo por última vez en marzo de 2026' },
    short: { en: 'SEBIN', es: 'SEBIN' },
    facts: [
      { text: { en: 'SEBIN is “a deconcentrated body of the Vice Presidency of the Republic” (Decree 9,446, art. 3); its director is “appointed by the President” (art. 2).', es: 'El SEBIN es “un órgano desconcentrado de la Vicepresidencia de la República” (Decreto 9.446, art. 3); su director “será nombrado por el Presidente” (art. 2).' }, src: [25] },
      { text: { en: 'Appointed in October 2024. When the CESPPA was abolished on 9 February 2026, SEBIN and the DGCIM remained and, according to Efecto Cocuyo (5 March), he stayed in the post. Venezuela Record could not confirm whether he still heads SEBIN.', es: 'Nombrado en octubre de 2024. Cuando se suprimió el CESPPA, el 9 de febrero de 2026, el SEBIN y la DGCIM siguieron y, según Efecto Cocuyo (5 de marzo), él se mantuvo en el cargo. Venezuela Record no pudo confirmar si sigue al frente del SEBIN.' }, src: [9] },
      { text: { en: 'Cousin of Diosdado Cabello.', es: 'Primo de Diosdado Cabello.' }, src: [10] },
      { text: { en: 'SEBIN detained Yorman Acevedo on 13 January 2026 over a TikTok comment about Maduro’s capture; he was accused of “incitement to hatred,” according to the NGO Espacio Público.', es: 'El SEBIN detuvo a Yorman Acevedo el 13 de enero de 2026 por un comentario en TikTok sobre la captura de Maduro; lo acusaron de “instigación al odio”, según la ONG Espacio Público.' }, src: [16] },
    ],
  },
  {
    id: 'dgcim', level: 3, kind: 'person', x: 228, y: 500, initials: 'GG', logo: lgDgcim,
    photoCredit: noPhoto, logoCredit: emblem('DGCIM', 'DGCIM'),
    name: { en: 'Germán Gómez Lárez', es: 'Germán Gómez Lárez' },
    role: { en: 'Director of the DGCIM (military counterintelligence) since 18 Mar 2026', es: 'Director de la DGCIM (contrainteligencia militar) desde el 18 mar 2026' },
    short: { en: 'DGCIM', es: 'DGCIM' },
    facts: [
      { text: { en: 'Delcy Rodríguez: “I have appointed Germán Gómez Lárez as the new director.” Decree 5,284 (Official Gazette No. 7,006 Extraordinary), signed by her alone.', es: 'Delcy Rodríguez: “he designado como nuevo director a Germán Gómez Lárez”. Decreto 5.284 (G.O. N° 7.006 Extraordinaria), firmado solo por ella.' }, src: [6, 37] },
      { text: { en: 'The DGCIM director “is appointed by the President … and Commander in Chief” (DGCIM regulation, art. 6).', es: 'El director de la DGCIM “es designado por el Presidente o Presidenta … y Comandante en Jefe” (Reglamento de la DGCIM, art. 6).' }, src: [27] },
      { text: { en: 'A retired National Guard captain and former political prisoner alleged on NTN24 that Gómez Lárez was one of his torturers while he was held. It is an allegation: it has not been independently verified and there is no conviction.', es: 'Un capitán retirado de la Guardia Nacional y expreso político denunció en NTN24 que Gómez Lárez fue uno de sus torturadores mientras estuvo detenido. Es una denuncia: no ha sido verificada de forma independiente y no hay condena.' }, src: [8] },
    ],
  },
  {
    id: 'cicpc', level: 3, kind: 'person', x: 396, y: 500, initials: 'DR', logo: lgCicpc,
    photoCredit: noPhoto, logoCredit: emblem('CICPC', 'CICPC'),
    name: { en: 'Douglas Rico', es: 'Douglas Rico' },
    role: { en: 'Director of the CICPC (criminal police) since 2016', es: 'Director del CICPC (policía científica) desde 2016' },
    short: { en: 'CICPC', es: 'CICPC' },
    facts: [
      { text: { en: 'In the post since February 2016; state radio RNV presented him as director on 26 August 2026, and regional media still did so in October.', es: 'En el cargo desde febrero de 2016; la radio estatal RNV lo presentaba como director el 26 de agosto de 2026, y medios regionales seguían haciéndolo en octubre.' }, src: [31] },
      { text: { en: 'The CICPC reports to the Interior Ministry.', es: 'El CICPC depende del Ministerio de Interior.' }, src: [10] },
    ],
  },
  {
    id: 'pnb', level: 3, kind: 'inst', x: 550, y: 500, logo: lgPnb, logoCredit: emblem('Bolivarian National Police', 'Policía Nacional Bolivariana'),
    name: { en: 'National Police (PNB)', es: 'Policía Nacional (PNB)' },
    role: { en: 'Chain: Presidency → Interior → PNB', es: 'Cadena: Presidencia → Interior → PNB' },
    short: { en: 'National Police', es: 'PNB' },
    facts: [
      { text: { en: 'On 17 September 2026 Javier Oropeza (Voluntad Popular) was detained in Barquisimeto, 48 hours after returning from exile, and released some six hours later. El Pitazo reported the arrest was made by PNB officers; Infobae attributed it to SEBIN.', es: 'El 17 de septiembre de 2026 detuvieron en Barquisimeto a Javier Oropeza (Voluntad Popular), 48 horas después de volver del exilio, y lo liberaron unas seis horas después. El Pitazo informó que lo detuvieron funcionarios de la PNB; Infobae lo atribuyó al SEBIN.' }, src: [18, 19] },
    ],
  },
  {
    id: 'polest', level: 3, kind: 'inst', x: 760, y: 560,
    name: { en: 'State police forces', es: 'Policías estadales' },
    role: { en: 'Run by state governments · Interior is the governing body', es: 'Dependen de las gobernaciones · Interior es el órgano rector' },
    short: { en: 'State police', es: 'Policías estadales' },
    facts: [
      { text: { en: 'Each state police force depends on its state government; the Interior Ministry is the “governing body” of the police service nationwide (art. 17).', es: 'Cada policía estadal depende de su gobernación; el Ministerio de Interior es el “Órgano Rector” del servicio de policía en todo el país (art. 17).' }, src: [39] },
    ],
  },
  {
    id: 'fanb', level: 3, kind: 'inst', x: 940, y: 600, logo: lgFanb, logoCredit: emblem('Bolivarian National Armed Forces', 'Fuerza Armada Nacional Bolivariana'),
    name: { en: 'Armed Forces · National Guard · Militia', es: 'FANB · Guardia Nacional · Milicia' },
    role: { en: 'Under the Defense Ministry; commander in chief: the president', es: 'Bajo el Ministerio de Defensa; comandante en jefe: la presidenta' },
    short: { en: 'Armed Forces', es: 'FANB' },
    facts: [
      { text: { en: 'The UN notes that the National Guard has not been reformed and keeps the same units and detention centers (para. 46).', es: 'La ONU señala que la Guardia Nacional no ha sido reformada y mantiene las mismas unidades y centros de detención (párr. 46).' }, src: [1] },
    ],
  },
  {
    id: 'venapp', level: 4, kind: 'inst', x: 120, y: 700,
    name: { en: 'VenApp', es: 'VenApp' },
    role: { en: 'Government reporting app', es: 'Aplicación de denuncias del gobierno' },
    short: { en: 'VenApp', es: 'VenApp' },
    facts: [
      { text: { en: 'After the 2024 election the government added anonymous reports against opponents; Amnesty International warned of arbitrary detentions.', es: 'Tras la elección de 2024 el gobierno añadió denuncias anónimas contra opositores; Amnistía Internacional advirtió del riesgo de detenciones arbitrarias.' }, src: [22] },
      { text: { en: 'There is no public evidence of its use in 2026.', es: 'No hay prueba pública de su uso en 2026.' }, src: [] },
    ],
  },
  {
    id: 'colectivos', level: 4, kind: 'group', x: 360, y: 700, image: scColectivos,
    imageAlt: { en: 'A hooded motorcyclist with a red flag, part of a group of colectivos that blocked an opposition march in Caracas on 19 April 2017', es: 'Motorizado encapuchado con una bandera roja, parte de un grupo de colectivos que bloqueó una marcha opositora en Caracas el 19 de abril de 2017' },
    imageCredit: { en: 'Photo: Oscar (derivative work: ZiaLater), Caracas, 19 Apr 2017 · CC BY-SA 4.0, via Wikimedia Commons', es: 'Foto: Oscar (obra derivada: ZiaLater), Caracas, 19 abr 2017 · CC BY-SA 4.0, vía Wikimedia Commons' },
    name: { en: 'Colectivos', es: 'Colectivos' },
    role: { en: 'Armed pro-government groups outside the formal law', es: 'Grupos armados progubernamentales, fuera de la ley formal' },
    short: { en: 'Colectivos', es: 'Colectivos' },
    facts: [
      { text: { en: 'No law integrates them into the armed forces or the police.', es: 'Ninguna norma los integra a la FANB ni a la policía.' }, src: [] },
      { text: { en: 'The UN finds “substantial evidence of long-standing relationships between colectivos and State institutions” (para. 88): operational orders and direct dealings with ministers, legislators, governors, police directors, judges and prosecutors (para. 89), places on public payrolls (para. 90) and firearms and ammunition supplied by the Government (para. 92).', es: 'La ONU encuentra evidencia sustancial de “long-standing relationships” (relaciones de larga data) entre los colectivos y las instituciones del Estado (párr. 88): órdenes operativas y trato directo con ministros, diputados, gobernadores, directores de policía, jueces y fiscales (párr. 89), puestos en nóminas públicas (párr. 90) y armas y municiones entregadas por el gobierno (párr. 92).' }, src: [1] },
      { text: { en: 'According to the UN they “participate in or control” community councils and social programs (para. 93), run neighborhood informant networks in “collaboration with State intelligence services” (para. 94) and “frequently acted alongside police, military and intelligence personnel” (para. 96).', es: 'Según la ONU participan en o controlan consejos comunales y programas sociales (párr. 93), operan redes de informantes de barrio en colaboración con los servicios de inteligencia del Estado (párr. 94) y con frecuencia actuaron junto a policías, militares y personal de inteligencia (párr. 96).' }, src: [1] },
    ],
  },
  {
    id: 'consejos', level: 4, kind: 'inst', x: 640, y: 720, image: scConsejo,
    imageAlt: { en: 'Headquarters of a commune and its communal council in Maracaibo, with murals', es: 'Sede de una comuna y su consejo comunal en Maracaibo, con murales' },
    imageCredit: { en: 'Photo: Zerojosefer, Maracaibo, 2025 · CC0, via Wikimedia Commons', es: 'Foto: Zerojosefer, Maracaibo, 2025 · CC0, vía Wikimedia Commons' },
    name: { en: 'Communal councils and communes', es: 'Consejos comunales y comunas' },
    role: { en: 'Neighborhood bodies with a legal security role', es: 'Instancias vecinales con función legal de seguridad' },
    short: { en: 'Communal councils', es: 'Consejos comunales' },
    facts: [
      { text: { en: 'The 2023 reform orders them to “promote, participate and contribute, jointly with the Bolivarian Militia, to the security and integral defense of the Nation” (art. 24.8) and lists a “security and integral defense committee” (art. 26.5).', es: 'La reforma de 2023 les ordena “Promover, participar y contribuir, conjuntamente con la Milicia Bolivariana, en la seguridad y defensa integral de la Nación” (art. 24.8) y prevé un “Comité de seguridad y defensa integral” (art. 26.5).' }, src: [32] },
      { text: { en: 'The 2024 communes reform adds a Security and Peace Commission with the same formula (art. 43.2), communal justices of the peace and communal charters to help guarantee “public order.”', es: 'La reforma de Comunas de 2024 añade una Comisión de Seguridad y Paz con la misma fórmula (art. 43.2), jueces de paz comunal y cartas comunales para contribuir a “la garantía del orden público”.' }, src: [35] },
    ],
  },
  {
    id: 'tribunales', level: 4, kind: 'inst', x: 900, y: 760, image: scPalacio,
    imageAlt: { en: 'The Palace of Justice in Caracas', es: 'El Palacio de Justicia de Caracas' },
    imageCredit: { en: 'Photo: Jesús Rincón · CC BY-SA 4.0, via Wikimedia Commons', es: 'Foto: Jesús Rincón · CC BY-SA 4.0, vía Wikimedia Commons' },
    name: { en: 'Courts and Public Prosecutor’s Office', es: 'Tribunales y Fiscalía' },
    role: { en: 'Apply the anti-hate and Simón Bolívar laws', es: 'Aplican la Ley contra el Odio y la Ley Simón Bolívar' },
    short: { en: 'Courts', es: 'Tribunales' },
    facts: [
      { text: { en: 'The UN notes the widespread use of provisional judges and prosecutors (para. 48).', es: 'La ONU señala el uso extendido de jueces y fiscales provisorios (párr. 48).' }, src: [1] },
      { text: { en: 'The UN says the anti-hate law has been used “systematically” against criticism (para. 41).', es: 'La ONU afirma que la Ley contra el Odio se ha usado “sistemáticamente” contra la crítica (párr. 41).' }, src: [1] },
    ],
  },
  {
    id: 'disiente', level: 5, kind: 'outcome', x: 550, y: 850, image: scProtesta,
    imageAlt: { en: 'Aerial view of a crowd protesting in Venezuela on 3 August 2024', es: 'Vista aérea de una multitud que protesta en Venezuela el 3 de agosto de 2024' },
    imageCredit: { en: 'Photo: Confidencial, 3 Aug 2024 · CC BY 3.0, via Wikimedia Commons', es: 'Foto: Confidencial, 3 ago 2024 · CC BY 3.0, vía Wikimedia Commons' },
    name: { en: 'Those who dissent', es: 'Quien disiente' },
    role: { en: 'Opponents, journalists and ordinary citizens', es: 'Opositores, periodistas y ciudadanos' },
    short: { en: 'Those who dissent', es: 'Quien disiente' },
    facts: [
      { text: { en: 'Yorman Acevedo: detained by SEBIN in January 2026 over a TikTok comment.', es: 'Yorman Acevedo: detenido por el SEBIN en enero de 2026 por un comentario en TikTok.' }, src: [16] },
      { text: { en: 'Javier Oropeza: detained in September 2026 (by the PNB according to El Pitazo; by SEBIN according to Infobae) and released hours later.', es: 'Javier Oropeza: detenido en septiembre de 2026 (por la PNB según El Pitazo; por el SEBIN según Infobae) y liberado horas después.' }, src: [18, 19] },
      { text: { en: 'Foro Penal counted 344 political prisoners on 14 September 2026: 200 civilians and 144 military.', es: 'Foro Penal contó 344 presos políticos el 14 de septiembre de 2026: 200 civiles y 144 militares.' }, src: [17] },
    ],
  },
];

export const EDGES: OrgEdge[] = [
  { from: 'tsj', to: 'delcy', type: 'appoint', label: { en: 'Names her acting president (Jan 2026)', es: 'La nombra presidenta encargada (ene 2026)' }, src: [28, 1] },
  { from: 'usa', to: 'delcy', type: 'coord', label: { en: 'Authorizes or approves major decisions (UN, para. 16)', es: 'Autoriza o aprueba las grandes decisiones (ONU, párr. 16)' }, src: [1] },
  { from: 'delcy', to: 'gonzalez', type: 'appoint', label: { en: 'DGCIM (6 Jan) and Defense (18 Mar)', es: 'DGCIM (6 ene) y Defensa (18 mar)' }, src: [26, 7] },
  { from: 'delcy', to: 'dgcim', type: 'appoint', label: { en: 'DGCIM director (Decree 5,284, 18 Mar)', es: 'Director de la DGCIM (Decreto 5.284, 18 mar)' }, src: [37, 6] },
  { from: 'delcy', to: 'cabello', type: 'legal', label: { en: 'Keeps him at Interior', es: 'Lo mantiene en Interior' }, src: [10] },
  { from: 'delcy', to: 'sebin', type: 'legal', label: { en: 'SEBIN belongs to the Vice Presidency she still holds', es: 'Órgano de la Vicepresidencia que ella sigue ocupando' }, src: [25, 30] },
  { from: 'delcy', to: 'jorge', type: 'family', label: { en: 'Siblings', es: 'Hermanos' }, src: [1, 40] },
  { from: 'jorge', to: 'tsj', type: 'legal', label: { en: 'The Assembly elects and expanded the court', es: 'La AN elige y amplió el TSJ' }, src: [14] },
  { from: 'cabello', to: 'cicpc', type: 'legal', label: { en: 'Reports to Interior', es: 'Adscrito a Interior' }, src: [10] },
  { from: 'cabello', to: 'pnb', type: 'legal', label: { en: 'Reports to Interior', es: 'Adscrita a Interior' }, src: [10] },
  { from: 'cabello', to: 'polest', type: 'coord', label: { en: 'Governing body of the police service', es: 'Órgano rector del servicio de policía' }, src: [39] },
  { from: 'cabello', to: 'sebin', type: 'family', label: { en: 'Cousins', es: 'Primos' }, src: [10] },
  { from: 'cabello', to: 'colectivos', type: 'un', label: { en: 'Public backing (UN, para. 101)', es: 'Respaldo público (ONU, párr. 101)' }, src: [1] },
  { from: 'gonzalez', to: 'fanb', type: 'legal', label: { en: 'Defense Ministry', es: 'Ministerio de Defensa' }, src: [7] },
  { from: 'gob', to: 'polest', type: 'legal', label: { en: 'Each state runs its force', es: 'Cada estado dirige su policía' }, src: [39] },
  { from: 'fanb', to: 'consejos', type: 'coord', label: { en: 'Security commissions + Militia', es: 'Comisión de Seguridad y Paz + Milicia' }, src: [32, 35] },
  { from: 'colectivos', to: 'consejos', type: 'un', label: { en: 'Participate in or control councils (UN, para. 93)', es: 'Participan en o controlan consejos (ONU, párr. 93)' }, src: [1] },
  { from: 'colectivos', to: 'pnb', type: 'un', label: { en: 'Act with police (UN, paras. 89, 96)', es: 'Actúan con policías (ONU, párrs. 89, 96)' }, src: [1] },
  { from: 'colectivos', to: 'sebin', type: 'un', label: { en: 'Collaborate with State intelligence services (UN, para. 94; it does not say which)', es: 'Colaboran con los servicios de inteligencia del Estado (ONU, párr. 94; no dice cuál)' }, src: [1] },
  { from: 'venapp', to: 'sebin', type: 'coord', label: { en: 'Reports (2024)', es: 'Denuncias (2024)' }, src: [22] },
  { from: 'tsj', to: 'tribunales', type: 'legal', label: { en: 'Top of the judiciary', es: 'Cúspide del poder judicial' }, src: [1] },
  { from: 'sebin', to: 'disiente', type: 'result', label: { en: 'Detained Yorman Acevedo (Jan 2026)', es: 'Detuvo a Yorman Acevedo (ene 2026)' }, src: [16] },
  { from: 'pnb', to: 'disiente', type: 'result', label: { en: 'Detained Javier Oropeza, per El Pitazo (Sep 2026)', es: 'Detuvo a Javier Oropeza, según El Pitazo (sept 2026)' }, src: [18, 19] },
  { from: 'tribunales', to: 'disiente', type: 'result', label: { en: 'Apply the anti-hate law (UN, para. 41)', es: 'Aplican la Ley contra el Odio (ONU, párr. 41)' }, src: [1] },
  { from: 'colectivos', to: 'disiente', type: 'result', label: { en: 'Act alongside security forces in times of unrest (UN, para. 96)', es: 'Actúan junto a fuerzas de seguridad en momentos de protesta (ONU, párr. 96)' }, src: [1] },
];

export interface GuidedStep {
  title: L;
  text: L;
  nodes: string[];
}

export const STEPS: GuidedStep[] = [
  {
    title: { en: '1 · Who handed over power in 2026', es: '1 · Quién dio el poder en 2026' },
    text: {
      en: 'On 3 January the Supreme Court ordered the executive vice president to take over the presidency. According to the UN, all major decisions are “instigated, authorized or approved” by Washington. The court itself is elected — and was expanded in May — by the National Assembly, led by her brother.',
      es: 'El 3 de enero el TSJ ordenó que la vicepresidenta ejecutiva asumiera la Presidencia. Según la ONU, las grandes decisiones las promueve, autoriza o aprueba Washington. Al propio TSJ lo elige —y en mayo lo amplió— la Asamblea Nacional que preside su hermano.',
    },
    nodes: ['usa', 'tsj', 'delcy', 'jorge'],
  },
  {
    title: { en: '2 · Whom she appointed', es: '2 · A quién nombró' },
    text: {
      en: 'One day after the oath she appointed, alone, the head of military counterintelligence; in March she moved him to Defense and named another DGCIM chief, again alone. She kept Cabello at Interior. SEBIN — headed at least until March by his cousin — belongs to the vice presidency she still holds.',
      es: 'Un día después de jurar nombró, ella sola, al jefe de la contrainteligencia militar; en marzo lo pasó a Defensa y nombró, otra vez sola, a otro jefe de la DGCIM. Mantuvo a Cabello en Interior. El SEBIN —dirigido al menos hasta marzo por su primo— depende de la Vicepresidencia que ella sigue ocupando.',
    },
    nodes: ['delcy', 'gonzalez', 'dgcim', 'cabello', 'sebin'],
  },
  {
    title: { en: '3 · Down to the street', es: '3 · Hasta la calle' },
    text: {
      en: 'From Interior, command reaches the national and criminal police and sets the rules for state forces. From Defense, the National Guard and the Militia — which, by law, work with communal councils. The UN documents colectivos acting alongside police and intelligence.',
      es: 'Desde Interior, el mando llega a la policía nacional y a la científica, y fija las reglas de las policías estadales. Desde Defensa, a la Guardia Nacional y la Milicia, que por ley trabajan con los consejos comunales. La ONU documenta colectivos que actúan junto a policías e inteligencia.',
    },
    nodes: ['cabello', 'gonzalez', 'cicpc', 'pnb', 'gob', 'polest', 'fanb', 'consejos', 'colectivos', 'venapp'],
  },
  {
    title: { en: '4 · What happens to those who dissent', es: '4 · Qué le pasa a quien disiente' },
    text: {
      en: 'A TikTok comment led to a SEBIN arrest in January. In September, an opposition leader was detained 48 hours after returning from exile. Courts apply the anti-hate law. Foro Penal still counted 344 political prisoners.',
      es: 'Un comentario en TikTok terminó en una detención del SEBIN en enero. En septiembre detuvieron a un dirigente opositor 48 horas después de volver del exilio. Los tribunales aplican la Ley contra el Odio. Foro Penal aún contaba 344 presos políticos.',
    },
    nodes: ['sebin', 'pnb', 'tribunales', 'colectivos', 'tsj', 'disiente'],
  },
];

/* ----------------------------------------------------------------- timeline */

export type Lane = 'base' | 'econ' | 'sec';
export interface TimelineEvent {
  date: string; // ISO start date
  when: L; // label
  lane: Lane;
  title: L;
  text: L;
  src: number[];
}

export const TIMELINE: TimelineEvent[] = [
  { date: '2026-01-03', lane: 'base', when: { en: '3 Jan', es: '3 ene' }, title: { en: 'Maduro captured; the Supreme Court names an acting president', es: 'Captura de Maduro; el TSJ nombra presidenta encargada' }, text: { en: 'The U.S. captures Nicolás Maduro. The Supreme Court names Vice President Delcy Rodríguez acting president; she is sworn in on 5 January (UN, para. 17).', es: 'EE. UU. captura a Nicolás Maduro. El TSJ nombra presidenta encargada a la vicepresidenta Delcy Rodríguez; jura el 5 de enero (ONU, párr. 17).' }, src: [1, 28] },
  { date: '2026-01-06', lane: 'sec', when: { en: '6 Jan', es: '6 ene' }, title: { en: 'Decree 5,203: a former SEBIN chief takes over the DGCIM', es: 'Decreto 5.203: un exjefe del SEBIN pasa a la DGCIM' }, text: { en: 'Delcy Rodríguez appoints Gustavo González López, head of SEBIN from 2019 to 2024, as director of the DGCIM. A minister calls it “institutional continuity.”', es: 'Delcy Rodríguez nombra director de la DGCIM a Gustavo González López, director del SEBIN de 2019 a 2024. Un ministro lo llama “continuidad institucional”.' }, src: [26, 3, 4] },
  { date: '2026-01-13', lane: 'sec', when: { en: '13 Jan', es: '13 ene' }, title: { en: 'Detained for a TikTok comment', es: 'Detenido por un comentario en TikTok' }, text: { en: 'SEBIN detains Yorman Acevedo over a TikTok comment about Maduro’s capture; he is accused of “incitement to hatred.”', es: 'El SEBIN detiene a Yorman Acevedo por un comentario en TikTok sobre la captura de Maduro; lo acusan de “instigación al odio”.' }, src: [16] },
  { date: '2026-01-22', lane: 'econ', when: { en: '22–23 Jan', es: '22–23 ene' }, title: { en: 'The oil sector opens to private companies', es: 'El petróleo se abre a privados' }, text: { en: 'The National Assembly, led by Jorge Rodríguez, passes the Hydrocarbons Law reform that opens oil to private companies. Jorge Rodríguez announces a sale of crude to the U.S. government.', es: 'La Asamblea Nacional, presidida por Jorge Rodríguez, aprueba la reforma de la Ley de Hidrocarburos que abre el petróleo a privados. Jorge Rodríguez anuncia una venta de crudo al gobierno de EE. UU.' }, src: [12] },
  { date: '2026-02-09', lane: 'sec', when: { en: '9 Feb', es: '9 feb' }, title: { en: 'CESPPA abolished; SEBIN and DGCIM remain', es: 'Se suprime el CESPPA; SEBIN y DGCIM siguen' }, text: { en: 'Decree 5,248 abolishes the CESPPA. SEBIN keeps the director appointed in 2024, Alexis Rodríguez Cabello.', es: 'El Decreto 5.248 suprime el CESPPA. El SEBIN mantiene al director nombrado en 2024, Alexis Rodríguez Cabello.' }, src: [9] },
  { date: '2026-03-18', lane: 'sec', when: { en: '18 Mar', es: '18 mar' }, title: { en: 'Padrino López out; a new DGCIM chief', es: 'Sale Padrino López; nuevo jefe de la DGCIM' }, text: { en: 'González López moves to Defense. Decree 5,284, signed by Delcy Rodríguez alone, names Germán Gómez Lárez head of the DGCIM.', es: 'González López pasa a Defensa. El Decreto 5.284, firmado solo por Delcy Rodríguez, nombra director de la DGCIM a Germán Gómez Lárez.' }, src: [7, 37, 6] },
  { date: '2026-04-16', lane: 'econ', when: { en: '16 Apr', es: '16 abr' }, title: { en: 'The IMF and the World Bank return', es: 'Vuelven el FMI y el Banco Mundial' }, text: { en: 'Both institutions resume dealings with Venezuela, suspended since 2019. The UN links it to the partial lifting of U.S. sanctions that revived the oil sector (para. 22).', es: 'Ambas instituciones reanudan relaciones con Venezuela, suspendidas desde 2019. La ONU lo une al levantamiento parcial de sanciones de EE. UU. que reactivó el sector petrolero (párr. 22).' }, src: [36, 1] },
  { date: '2026-04-23', lane: 'sec', when: { en: '23 Apr', es: '23 abr' }, title: { en: 'End of the Amnesty Law', es: 'Fin de la Ley de Amnistía' }, text: { en: 'Delcy Rodríguez ends the amnesty law and moves ahead with a judicial reform.', es: 'Delcy Rodríguez pone fin a la Ley de Amnistía y avanza con una reforma judicial.' }, src: [15] },
  { date: '2026-05-05', lane: 'sec', when: { en: 'Apr–May', es: 'abr–may' }, title: { en: 'The Supreme Court grows from 20 to 32', es: 'El TSJ pasa de 20 a 32 magistrados' }, text: { en: 'In April eight justices are made to retire; in May the Assembly expands the court. The UN warns of an increased “risk of political influence” (para. 47).', es: 'En abril jubilan a 8 magistrados; en mayo la AN amplía el tribunal. La ONU advierte un mayor riesgo de influencia política (párr. 47).' }, src: [14, 1] },
  { date: '2026-08-28', lane: 'econ', when: { en: '28 Aug', es: '28 ago' }, title: { en: 'Oil agreement with the U.S.', es: 'Acuerdo petrolero con EE. UU.' }, text: { en: '17 fields, some 65 billion barrels of potential according to the government, 25 years according to Delcy Rodríguez: “We want to be an energy power.”', es: '17 campos, unos 65.000 millones de barriles de potencial según el gobierno, 25 años según Delcy Rodríguez: “Queremos ser una potencia energética”.' }, src: [13] },
  { date: '2026-09-14', lane: 'sec', when: { en: '14 Sep', es: '14 sept' }, title: { en: '344 political prisoners', es: '344 presos políticos' }, text: { en: 'Foro Penal counts 344 political prisoners: 200 civilians and 144 military.', es: 'Foro Penal cuenta 344 presos políticos: 200 civiles y 144 militares.' }, src: [17] },
  { date: '2026-09-16', lane: 'sec', when: { en: '16 Sep', es: '16 sept' }, title: { en: 'UN: the repressive apparatus remains intact', es: 'ONU: el aparato represivo sigue intacto' }, text: { en: 'The UN Fact-Finding Mission presents its report: limited political changes, the repressive apparatus intact.', es: 'La Misión de la ONU presenta su informe: cambios políticos limitados, el aparato represivo intacto.' }, src: [2, 1] },
  { date: '2026-09-17', lane: 'sec', when: { en: '17 Sep', es: '17 sept' }, title: { en: 'Javier Oropeza detained', es: 'Detienen a Javier Oropeza' }, text: { en: 'The Voluntad Popular leader is detained in Barquisimeto, 48 hours after returning from exile, and released some six hours later. El Pitazo reported the arrest was made by the National Police (PNB); Infobae attributed it to SEBIN.', es: 'Detienen en Barquisimeto al dirigente de Voluntad Popular 48 horas después de volver del exilio; lo liberan unas seis horas después. El Pitazo informó que lo detuvo la Policía Nacional (PNB); Infobae lo atribuyó al SEBIN.' }, src: [18, 19] },
  { date: '2026-09-29', lane: 'sec', when: { en: '29 Sep–15 Oct', es: '29 sept–15 oct' }, title: { en: 'Anti-hate law: reform requested, still in force', es: 'Ley contra el Odio: piden reformarla, sigue vigente' }, text: { en: 'Delcy Rodríguez says there was “abusive use” of the law and asks to reform it; on 13 October the Assembly sends the bill to the Supreme Court, whose Constitutional Chamber declares it constitutional on 15 October (ruling No. 1034); the debate returns to the Assembly. Until a reform is passed, the 2017 law remains in force.', es: 'Delcy Rodríguez dice que “se hizo un uso abusivo” de la ley y pide reformarla; el 13 de octubre la AN envía el proyecto al TSJ, cuya Sala Constitucional lo declara constitucional el 15 de octubre (sentencia N.° 1034); el debate vuelve a la AN. Mientras no se apruebe una reforma, la ley de 2017 sigue vigente.' }, src: [20, 21, 41] },
];

/* ----------------------------------------------------------------- gazettes */

export interface Gazette {
  id: string;
  number: L;
  date: L;
  act: L;
  article: L; // key text, with [[...]] marking the highlighted part
  articleRef: L;
  proves: L;
  doesNot: L;
  src: number[];
}

export const GAZETTES: Gazette[] = [
  {
    id: 'go-40153',
    number: { en: 'No. 40,153', es: 'N° 40.153' },
    date: { en: '24 April 2013', es: '24 de abril de 2013' },
    act: { en: 'Decree 9,446 · Organic Regulation of SEBIN', es: 'Decreto 9.446 · Reglamento Orgánico del SEBIN' },
    article: { en: 'The Bolivarian National Intelligence Service [[is a deconcentrated body of the Vice Presidency of the Republic]] … Its highest authority is the Director General, [[who shall be appointed by the President]].', es: 'El Servicio Bolivariano de Inteligencia Nacional [[es un órgano desconcentrado de la Vicepresidencia de la República]] … La máxima autoridad … corresponde al Director o Directora General, [[que será nombrado por el Presidente]] de la República.' },
    articleRef: { en: 'Arts. 3 and 2 · p. 400,953', es: 'Arts. 3 y 2 · pág. 400.953' },
    proves: { en: 'SEBIN depends on the Vice Presidency — the post Delcy Rodríguez still holds.', es: 'El SEBIN depende de la Vicepresidencia, el cargo que Delcy Rodríguez sigue ocupando.' },
    doesNot: { en: 'It does not mention her: others signed it in 2013.', es: 'No la menciona: lo firmaron otros en 2013.' },
    src: [25, 30],
  },
  {
    id: 'go-40599',
    number: { en: 'No. 40,599', es: 'N° 40.599' },
    date: { en: '10 February 2015', es: '10 de febrero de 2015' },
    act: { en: 'Decree 1,605 · Organic Regulation of the DGCIM', es: 'Decreto 1.605 · Reglamento Orgánico de la DGCIM' },
    article: { en: 'The Directorate General of Military Counterintelligence is led by a Director General, [[who is appointed by the President of the Bolivarian Republic of Venezuela and Commander in Chief]] of the Bolivarian National Armed Forces.', es: 'La Dirección General de Contrainteligencia Militar está dirigida y administrada por un Director o Directora General, [[quien es designado por el Presidente o Presidenta de la República Bolivariana de Venezuela y Comandante en Jefe]] de la Fuerza Armada Nacional Bolivariana.' },
    articleRef: { en: 'Art. 6 · p. 418,693 · countersigned by the Foreign Minister, Delcy Rodríguez (p. 418,695)', es: 'Art. 6 · pág. 418.693 · refrendado por la canciller Delcy Rodríguez (pág. 418.695)' },
    proves: { en: 'She countersigned the rule that today gives her the power to appoint the head of the DGCIM.', es: 'Delcy Rodríguez refrendó la norma que hoy le da el poder de nombrar al jefe de la DGCIM.' },
    doesNot: { en: 'That she directed DGCIM operations.', es: 'Que dirigiera operaciones de la DGCIM.' },
    src: [27],
  },
  {
    id: 'go-6957',
    number: { en: 'No. 6,957 Extraordinary', es: 'N° 6.957 Extraordinario' },
    date: { en: '6 January 2026', es: '6 de enero de 2026' },
    act: { en: 'Decree 5,203 · Appointment of the DGCIM director', es: 'Decreto 5.203 · Nombramiento del director de la DGCIM' },
    article: { en: '[[I appoint General-in-Chief GUSTAVO ENRIQUE GONZÁLEZ LÓPEZ]] … as DIRECTOR GENERAL OF THE DIRECTORATE GENERAL OF MILITARY COUNTERINTELLIGENCE (DGCIM). “Let it be executed”: [[Delcy Eloína Rodríguez Gómez, Acting President]] — no countersignatures.', es: '[[Nombro al ciudadano General en Jefe GUSTAVO ENRIQUE GONZÁLEZ LÓPEZ]] … como DIRECTOR GENERAL DE LA DIRECCIÓN GENERAL DE CONTRAINTELIGENCIA MILITAR (DGCIM). “Ejecútese”: [[Delcy Eloína Rodríguez Gómez, Presidenta (E)]], sin refrendos.' },
    articleRef: { en: 'Art. 1 · based on arts. 226 and 236 (2, 5, 6) of the Constitution and art. 46 of the Public Administration Law', es: 'Art. 1 · con base en los arts. 226 y 236 (num. 2, 5 y 6) de la Constitución y el art. 46 de la Ley Orgánica de la Administración Pública' },
    proves: { en: 'An appointed authority that appoints: she names him alone, one day after taking the oath.', es: '“Autoridad designada que designa”: lo nombra ella sola, un día después de jurar.' },
    doesNot: { en: 'The decree does not cite the DGCIM regulation; its art. 6 confirms the same power.', es: 'El decreto no cita el Reglamento de la DGCIM; el art. 6 de ese reglamento confirma la misma facultad.' },
    src: [26, 3],
  },
  {
    id: 'go-7006',
    number: { en: 'No. 7,006 Extraordinary', es: 'N° 7.006 Extraordinario' },
    date: { en: '18 March 2026', es: '18 de marzo de 2026' },
    act: { en: 'Decree 5,284 · Appointment of the DGCIM director', es: 'Decreto 5.284 · Nombramiento del director de la DGCIM' },
    article: { en: '[[I appoint GERMÁN EDOARDO GÓMEZ LÁREZ]] … as DIRECTOR GENERAL OF THE DIRECTORATE GENERAL OF MILITARY COUNTERINTELLIGENCE (DGCIM). Signed: [[Delcy Eloína Rodríguez Gómez, Acting President]].', es: '[[Nombro al ciudadano GERMÁN EDOARDO GÓMEZ LÁREZ]] … como DIRECTOR GENERAL DE LA DIRECCIÓN GENERAL DE CONTRAINTELIGENCIA MILITAR (DGCIM). Firma: [[Delcy Eloína Rodríguez Gómez, Presidenta (E)]].' },
    articleRef: { en: 'Art. 1 · same legal basis as Decree 5,203 · no countersignatures', es: 'Art. 1 · misma base legal que el Decreto 5.203 · sin refrendos' },
    proves: { en: 'The power to appoint the DGCIM chief was used twice in ten weeks, by her alone.', es: 'La facultad de nombrar al jefe de la DGCIM la usó dos veces en diez semanas, ella sola.' },
    doesNot: { en: 'Anything about the allegations against the appointee (see the org chart).', es: 'Nada sobre las denuncias contra el designado (ver el organigrama).' },
    src: [37],
  },
  {
    id: 'go-6859',
    number: { en: 'No. 6,859 Extraordinary', es: 'N° 6.859 Extraordinario' },
    date: { en: '29 November 2024', es: '29 de noviembre de 2024' },
    act: { en: 'Liberator Simón Bolívar Organic Law', es: 'Ley Orgánica Libertador Simón Bolívar' },
    article: { en: 'Anyone who “promotes, instigates, requests, invokes, favors, facilitates, supports or participates” in the adoption of unilateral coercive measures … [[shall be punished with 25 to 30 years in prison]] (art. 11). The judge shall impose [[political disqualification for up to 60 years]] (art. 13). A national registry of people “who conflict with this Law” (art. 23).', es: 'Toda persona que “promueva, instigue, solicite, invoque, favorezca, facilite, respalde o participe” en la adopción de medidas coercitivas unilaterales … [[será sancionada con prisión de veinticinco (25) a treinta (30) años]] (art. 11). El juez impondrá [[inhabilitación política hasta por sesenta (60) años]] (art. 13). Un Registro nacional de personas que “colidan con esta Ley” (art. 23).' },
    articleRef: { en: 'Arts. 11–13 and 23 · countersigned by Delcy Rodríguez (two posts) and Diosdado Cabello', es: 'Arts. 11–13 y 23 · refrendada por Delcy Rodríguez (dos cargos) y Diosdado Cabello' },
    proves: { en: 'Asking for sanctions can carry up to 30 years in prison, under a law signed by today’s acting president and interior minister.', es: 'Pedir sanciones puede costar hasta 30 años de cárcel, con una ley que firmaron la actual presidenta encargada y el ministro de Interior.' },
    doesNot: { en: 'How many people have been convicted under it.', es: 'Cuántas personas han sido condenadas con ella.' },
    src: [34],
  },
  {
    id: 'go-6872',
    number: { en: 'No. 6,872 Extraordinary', es: 'N° 6.872 Extraordinario' },
    date: { en: '30 December 2024', es: '30 de diciembre de 2024' },
    act: { en: 'Reform of the Organic Law of Communes', es: 'Reforma de la Ley Orgánica de las Comunas' },
    article: { en: 'The Security and Peace Commission of the Commune shall “promote, participate and contribute, [[jointly with the Bolivarian Militia]], to the security and integral defense of the Nation.” The reform also creates communal justices of the peace.', es: 'La Comisión de Seguridad y Paz de la Comuna debe “Promover, participar y contribuir, [[conjuntamente con la Milicia Bolivariana]], en la seguridad y defensa integral de la Nación”. La reforma crea además jueces de paz comunal.' },
    articleRef: { en: 'Art. 43.2 (reformed text) · countersigned by Delcy Rodríguez (two posts), Cabello and Padrino López', es: 'Art. 43.2 (texto reformado) · refrendada por Delcy Rodríguez (dos cargos), Cabello y Padrino López' },
    proves: { en: 'A legal link between communes and the Militia.', es: 'El vínculo legal entre las comunas y la Milicia.' },
    doesNot: { en: 'That colectivos are part of the communes (that is what the UN reports).', es: 'Que los colectivos sean parte de la comuna (eso lo dice la ONU).' },
    src: [35],
  },
  {
    id: 'tsj-1-2026',
    number: { en: 'Ruling No. 1 · Constitutional Chamber', es: 'Sentencia N° 1 · Sala Constitucional' },
    date: { en: '3 January 2026', es: '3 de enero de 2026' },
    act: { en: 'File 2026-00001 · joint opinion, no dissent', es: 'Exp. 2026-00001 · ponencia conjunta, sin voto salvado' },
    article: { en: 'Interpreting “ex officio” articles 234 and 239 of the Constitution in view of the president’s “forced absence”, the court orders the Executive Vice President to [[“ASSUME AND EXERCISE” the Presidency “as ACTING PRESIDENT”]]. No time limit is set.', es: 'Interpretando “de oficio” los arts. 234 y 239 de la Constitución ante la “ausencia forzosa” del presidente, ordena que la Vicepresidenta Ejecutiva [[“ASUMA Y EJERZA en condición de ENCARGADA” la Presidencia]]. No fija plazo.' },
    articleRef: { en: 'Not a gazette: TSJ record and Acceso a la Justicia', es: 'No es gaceta: cuenta del TSJ y Acceso a la Justicia' },
    proves: { en: 'She was appointed by the Supreme Court.', es: '“Es designada” por el TSJ.' },
    doesNot: { en: 'Acceso a la Justicia: the Constitution gives the TSJ no power to order it.', es: 'Acceso a la Justicia: la Constitución no da al TSJ competencia para ordenarlo.' },
    src: [28, 29],
  },
];

/* ------------------------------------------------------------------- laws */

export interface LawBar {
  name: L;
  gazette: L;
  min: number; // years
  max: number; // years
  maxLabel: L;
  status: L;
  src: number[];
}

export const LAWS: LawBar[] = [
  { name: { en: 'Simón Bolívar Law', es: 'Ley Simón Bolívar' }, gazette: { en: 'G.O. 6,859 Ext., Nov 2024', es: 'G.O. 6.859 Ext., nov 2024' }, min: 25, max: 30, maxLabel: { en: '25–30 years', es: '25–30 años' }, status: { en: 'In force, unchanged', es: 'Vigente, sin cambios' }, src: [34] },
  { name: { en: 'Anti-hate law', es: 'Ley contra el Odio' }, gazette: { en: 'Constituent Assembly, Nov 2017', es: 'ANC, nov 2017' }, min: 0, max: 20, maxLabel: { en: 'up to 20 years', es: 'hasta 20 años' }, status: { en: 'In force; the Supreme Court cleared a reform bill on 15 Oct 2026 and the Assembly is debating it. UN: used “systematically” against criticism (para. 41)', es: 'Vigente; el TSJ avaló un proyecto de reforma el 15 oct 2026 y la AN lo debate. ONU: usada “sistemáticamente” contra la crítica (párr. 41)' }, src: [20, 21, 41, 1] },
  { name: { en: 'NGO law', es: 'Ley de ONG' }, gazette: { en: 'Aug 2024', es: 'ago 2024' }, min: 0, max: 0, maxLabel: { en: 'no prison (administrative penalties)', es: 'sin prisión (sanciones administrativas)' }, status: { en: 'In force; the UN mission has warned it is “a mechanism of political control” (para. 42)', es: 'Vigente; la misión de la ONU advirtió que es un mecanismo de control político (párr. 42)' }, src: [1] },
  { name: { en: 'Communes reform', es: 'Reforma de Comunas' }, gazette: { en: 'G.O. 6,872 Ext., Dec 2024', es: 'G.O. 6.872 Ext., dic 2024' }, min: 0, max: 0, maxLabel: { en: 'creates no crimes', es: 'no crea delitos' }, status: { en: 'In force', es: 'Vigente' }, src: [35] },
];

/* ------------------------------------------------------------------ VenApp */

export const VENAPP: { when: L; text: L; src: number[]; uncertain?: boolean }[] = [
  { when: { en: 'Dec 2022', es: 'dic 2022' }, text: { en: 'Announced by the government as an app to report failures in public services.', es: 'El gobierno la anuncia como aplicación para reportar fallas de servicios públicos.' }, src: [38] },
  { when: { en: 'Jul–Aug 2024', es: 'jul–ago 2024' }, text: { en: 'After the election, the government adds a channel for anonymous reports against opponents. Amnesty International warns of illegitimate detention.', es: 'Tras la elección, el gobierno añade un canal de denuncias anónimas contra opositores. Amnistía Internacional advierte del riesgo de detenciones ilegítimas.' }, src: [38, 22] },
  { when: { en: 'Aug 2024', es: 'ago 2024' }, text: { en: 'Apple and Google remove it from their stores; it keeps working for those who had it and on the web.', es: 'Apple y Google la retiran de sus tiendas; sigue funcionando para quien la tenía y en versión web.' }, src: [22, 23] },
  { when: { en: 'Oct 2025', es: 'oct 2025' }, text: { en: 'Maduro urges people to use it to “report everything they hear, everything they read” (CNN).', es: 'Maduro pide usarla para reportar todo lo que se oye y todo lo que se lee (según CNN; traducción de Venezuela Record).' }, src: [23] },
  { when: { en: '2026', es: '2026' }, text: { en: 'No public evidence of its use. The UN does describe networks of neighborhood informants (para. 94).', es: 'Sin prueba pública de su uso. La ONU sí describe redes de informantes de barrio (párr. 94).' }, src: [1], uncertain: true },
];

/* ------------------------------------------------------- changed / unchanged */

export const CHANGED: { text: L; src: number[] }[] = [
  { text: { en: 'Prison releases and an amnesty — short-lived and conditional.', es: 'Excarcelaciones y una amnistía, corta y condicional.' }, src: [1, 15] },
  { text: { en: 'Dialogue with the opposition and an agreement to renew the Supreme Court.', es: 'Diálogo con la oposición y un acuerdo para renovar el TSJ.' }, src: [1] },
  { text: { en: 'A reform of the anti-hate law is under way: the Supreme Court cleared the bill on 15 October and the Assembly is debating it.', es: 'La reforma de la Ley contra el Odio avanza: el TSJ avaló el proyecto el 15 de octubre y la AN lo debate.' }, src: [20, 21, 41] },
  { text: { en: 'The harshest repression eased: of 214 political detentions between September 2025 and July 2026, 207 happened before the end of January (UN, para. 57).', es: 'La represión más dura bajó: de 214 detenciones políticas entre septiembre de 2025 y julio de 2026, 207 fueron antes de fin de enero (ONU, párr. 57).' }, src: [1] },
];

export const UNCHANGED: { text: L; src: number[] }[] = [
  { text: { en: 'SEBIN and the DGCIM keep “the same structures” and “the same rules” (UN, para. 46).', es: 'SEBIN y DGCIM con “las mismas estructuras” y “las mismas reglas” (ONU, párr. 46).' }, src: [1] },
  { text: { en: 'The National Guard has not been reformed (UN, para. 46).', es: 'La Guardia Nacional, sin reforma (ONU, párr. 46).' }, src: [1] },
  { text: { en: 'Diosdado Cabello is still at Interior.', es: 'Diosdado Cabello sigue en Interior.' }, src: [10] },
  { text: { en: 'The Simón Bolívar Law is intact.', es: 'La Ley Simón Bolívar, intacta.' }, src: [34] },
  { text: { en: 'Colectivos have not been disarmed.', es: 'Los colectivos, sin desarmar.' }, src: [1] },
  { text: { en: 'The UN says the political openings “remain partial, conditional and reversible at best” (para. 106).', es: 'La ONU dice que las aperturas políticas siguen siendo “partial, conditional and reversible at best” (parciales, condicionales y, en el mejor de los casos, reversibles) (párr. 106).' }, src: [1] },
];

export const DETENTIONS = { total: 214, beforeFeb: 207 };
