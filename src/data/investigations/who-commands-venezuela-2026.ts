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
  ideaRole: { en: 'Original idea and methodological design', es: 'Idea original y arquitectura metodológica' },
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
  { id: 42, outlet: 'Noticiero Digital', title: { en: 'Yorman Acevedo, detained over a comment on Maduro’s capture, is released', es: 'Excarcelaron a Yorman Acevedo, detenido por un comentario sobre la captura de Maduro' }, date: '26 Sep 2026', url: 'https://noticierodigital.com/2026/09/excarcelaron-a-yorman-acevedo-detenido-por-un-comentario-sobre-la-captura-de-maduro/' },
  { id: 43, outlet: 'El Diario', title: { en: 'Who are the political prisoners released (Espacio Público reported the release; the conditions were not disclosed)', es: 'Quiénes son los presos políticos excarcelados (Espacio Público reportó la excarcelación; no se informaron las condiciones)' }, date: '26 Sep 2026', url: 'https://eldiario.com/2026/09/26/quienes-son-los-presos-politicos-excarcelados-2/' },
  { id: 44, outlet: 'Infobae / EFE', title: { en: 'Former mayor Oropeza released after strong pressure from Venezuelans, the opposition says', es: 'Exalcalde Oropeza es excarcelado tras fuerte presión de venezolanos, dice la oposición' }, date: '18 Sep 2026', url: 'https://www.infobae.com/america/agencias/2026/09/18/exalcalde-oropeza-es-excarcelado-tras-fuerte-presion-de-venezolanos-dice-la-oposicion/' },
  { id: 45, outlet: 'NTN24', title: { en: 'Former mayor Javier Oropeza released', es: 'Liberaron al exalcalde venezolano Javier Oropeza' }, date: '17 Sep 2026', url: 'https://www.ntn24.com/noticias-actualidad/liberaron-al-exalcalde-venezolano-javier-oropeza-asi-fue-su-salida-triunfante-de-tribunales-y-saludo-con-maria-corina-machado-651312' },
  { id: 46, outlet: 'La Prensa de Lara', title: { en: 'Oropeza released under precautionary measures', es: 'Oropeza en libertad bajo medidas cautelares' }, date: '18 Sep 2026', url: 'https://laprensadelara.com/locales/politica-oropeza-libertad-cautelares/' },
  { id: 47, outlet: 'El Nacional', title: { en: 'VenApp and a phone line activated to report missing people after the double earthquake', es: 'Activaron la plataforma VenApp y una línea telefónica para reportar personas desaparecidas tras el doble terremoto' }, date: '27 Jun 2026', url: 'https://www.elnacional.com/2026/06/activaron-la-plataforma-venapp-y-una-linea-telefonica-para-reportar-personas-desaparecidas-tras-el-doble-terremoto/' },
  { id: 48, outlet: 'teleSUR', title: { en: 'VenApp available to Venezuelans after the earthquakes', es: 'VenApp está disponible para disposición de los venezolanos tras sismos que afectaron al país' }, date: '25 Jun 2026', url: 'https://www.telesurtv.net/venapp-esta-disponible-para-disposicion-de-los-venezolanos-tras-sismos-que-afectaron-al-pais/' },
  { id: 49, outlet: 'IACHR / RELE', title: { en: 'Press release 184/24 on post-electoral repression in Venezuela (VenApp “has been reconfigured”)', es: 'Comunicado 184/24 sobre la represión postelectoral en Venezuela (VenApp “ha sido reconfigurada”)' }, date: '15 Aug 2024', url: 'https://www.oas.org/es/cidh/jsForm/?File=%2Fes%2Fcidh%2Fprensa%2Fcomunicados%2F2024%2F184.asp' },
  { id: 50, outlet: 'IACHR', title: { en: 'Annual Report 2025, chapter IV.B Venezuela, paras. 127–128 (sensitive information via VenApp; campaigns urging people to report neighbors)', es: 'Informe Anual 2025, capítulo IV.B Venezuela, párrs. 127–128 (información sensible mediante VenApp; campañas para delatar a vecinos)' }, date: '2026', url: 'https://www.oas.org/es/cidh/docs/anual/2025/Capitulos/IA2025_4B_VEN_ES.PDF' },
  { id: 51, outlet: 'La Gran Aldea', title: { en: 'Milagros Socorro, “A crystal vault: the re-engineering of civil control in Venezuela” (column based on anonymous technical sources)', es: 'Milagros Socorro, «Una bóveda de cristal: la reingeniería del control civil en Venezuela» (columna basada en fuentes técnicas anónimas)' }, date: '26 Dec 2025', url: 'https://lga.lagranaldea.com/2025/12/26/una-boveda-de-cristal-la-reingenieria-del-control-civil-en-venezuela/' },
  { id: 52, outlet: 'El Tiempo', title: { en: 'Investigation reveals a new surveillance system that would let chavismo block citizens with a click', es: 'Investigación revelaría nuevo sistema que permitiría al chavismo bloquear ciudadanos con un clic' }, date: '31 Dec 2025', url: 'https://www.eltiempo.com/mundo/venezuela/vigilancia-en-tiempo-real-investigacion-revelaria-nuevo-sistema-que-permitiria-al-chavismo-bloquear-ciudadanos-con-un-clic-3520747' },
  { id: 53, outlet: 'EUAA', title: { en: 'Venezuela: Country Focus, section 1.7 “Monitoring mechanisms”', es: 'Venezuela: Country Focus, apartado 1.7 «Monitoring mechanisms»' }, date: 'Jul 2026', url: 'https://www.euaa.europa.eu/venezuela-country-focus/17-monitoring-mechanisms' },
  { id: 54, outlet: 'DFRLab / Conexión Segura y Libre', title: { en: 'Watch the Watchers: surveillance technologies for political control in Venezuela', es: 'Los vigilantes en la mira: tecnologías de vigilancia para el control político en Venezuela' }, date: '26 Mar 2026', url: 'https://dfrlab.org/2026/03/26/watch-the-watchers-report/' },
  { id: 55, outlet: 'Acceso a la Justicia', title: { en: 'Analysis of the Liberator Simón Bolívar Organic Law (executive summary, PDF)', es: 'Análisis de la Ley Orgánica Libertador Simón Bolívar (resumen ejecutivo, PDF)' }, date: '27 Dec 2024', url: 'https://accesoalajusticia.org/wp-content/uploads/2024/12/Resumen-ejecutivo_Analisis-de-la-Ley-Organica-Libertador-Simon-Bolivar_AJ2024-2.pdf' },
  { id: 56, outlet: 'Gaceta Oficial', title: { en: 'Official Gazette No. 6,999 Extraordinary (18 Mar 2026): Decree 5,277, appointment of the Minister of Defense', es: 'Gaceta Oficial N° 6.999 Extraordinaria (18 mar 2026): Decreto 5.277, nombramiento del ministro de la Defensa' }, date: '18 Mar 2026', url: 'http://www.gacetaoficial.gob.ve/storage/2026/6999-2026-03-18-EXTRAORDINARIA.pdf' },
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
  /** Interpretive heading (Minerva Mendoza Paipa, 2026-10-22). */
  heading: L;
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
    heading: {
      en: 'The documentary origin of an institutional continuity',
      es: 'El origen documental de una continuidad institucional',
    },
    note: {
      en: 'Delcy Rodríguez countersigned Decree 1,605, which issued the Organic Regulation of the Directorate General of Military Counterintelligence (DGCIM). Its article 6 gives the President of the Republic, as Commander in Chief, the power to appoint the agency’s director (“is appointed by the President … and Commander in Chief”). Eleven years later her signature is again tied to that power, now from the acting presidency. The relationship between both decisions makes it possible to examine the continuity of institutional power.',
      es: 'Delcy Rodríguez refrendó el Decreto N.º 1.605, mediante el cual se dictó el Reglamento Orgánico de la Dirección General de Contrainteligencia Militar (DGCIM). Su artículo 6 atribuye al Presidente o Presidenta de la República, en su condición de Comandante en Jefe, la designación del director del organismo (“es designado por el Presidente o Presidenta … y Comandante en Jefe”). Once años después, su firma aparece nuevamente vinculada a esa atribución, ahora desde el ejercicio de la Presidencia encargada. La relación entre ambas decisiones permite examinar la continuidad del poder institucional.',
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
    heading: {
      en: 'State security is linked to community organization',
      es: 'La seguridad estatal se articula con la organización comunitaria',
    },
    note: {
      en: 'The reform orders each communal council to contribute to security and the integral defense of the Nation “jointly with the Bolivarian Militia” (art. 24.8). Delcy Rodríguez countersigns it from two posts in the Executive. The document shows an institutional link between community organization and State security functions that matters for examining the territorial structure of power. Reprinted “due to material error”; first published in No. 6,749 Extraordinary on 26 June 2023, with the same signatures.',
      es: 'La reforma ordena a cada consejo comunal contribuir a la seguridad y defensa integral de la Nación “conjuntamente con la Milicia Bolivariana” (artículo 24, numeral 8). Delcy Rodríguez aparece refrendando la norma desde dos cargos del Ejecutivo. El documento permite identificar una relación institucional entre la organización comunitaria y las funciones estatales de seguridad que resulta relevante para examinar la estructura territorial del poder. Reimpresa “por error material”; publicada primero en la N° 6.749 Extraordinaria del 26 de junio de 2023, con las mismas firmas.',
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
    heading: {
      en: 'The power to punish: prison and political disqualification',
      es: 'El poder sancionador: prisión e inhabilitación política',
    },
    note: {
      en: 'The law sets prison terms of 25 to 30 years for conduct related to promoting, supporting or taking part in international coercive measures against Venezuela (art. 11) and political disqualification for up to 60 years as an accessory penalty (art. 13). Delcy Rodríguez countersigns it from two posts in the Executive, along with other officials, among them Diosdado Cabello and Vladimir Padrino López. The document shows her formal participation in approving a legal framework that expands the State’s sanctioning tools. Acceso a la Justicia warns that the 60-year disqualification is in practice a lifetime ban and that the registry in article 23 is a list of suspects that violates the presumption of innocence.',
      es: 'La ley establece penas de 25 a 30 años de prisión para determinadas conductas relacionadas con la promoción, el respaldo o la participación en medidas coercitivas internacionales contra Venezuela (artículo 11). También contempla la inhabilitación política hasta por 60 años como pena accesoria (artículo 13). Delcy Rodríguez aparece refrendando la norma desde dos cargos del Ejecutivo, junto con otras autoridades, entre ellas Diosdado Cabello y Vladimir Padrino López. Este documento permite identificar su participación formal en la aprobación de un marco normativo que amplía los instrumentos sancionadores del Estado. Acceso a la Justicia advierte que la inhabilitación por 60 años es, en realidad, de por vida, y que el registro del artículo 23 es una lista de sospechosos que viola la presunción de inocencia.',
    },
    caption: { en: 'Official Gazette No. 6,859 Extraordinary, pp. 3–4 (masthead: p. 1).', es: 'Gaceta Oficial N° 6.859 Extraordinaria, págs. 3–4 (cabecera: pág. 1).' },
    alt: {
      en: 'Masthead of Official Gazette No. 6,859 Extraordinary of 29 November 2024 and two countersignatures by Delcy Eloína Rodríguez Gómez: as Executive Vice President, and as Minister of Oil and acting Sectoral Vice President for the Economy.',
      es: 'Cabecera de la Gaceta Oficial N° 6.859 Extraordinaria del 29 de noviembre de 2024 y dos refrendos de Delcy Eloína Rodríguez Gómez: como Vicepresidenta Ejecutiva, y como Ministra de Petróleo y Vicepresidenta Sectorial de Economía (E).',
    },
    src: [34, 55],
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
    heading: {
      en: 'State security is linked to communal power',
      es: 'La seguridad estatal se articula con el poder comunal',
    },
    note: {
      en: 'The reform adds a Security and Peace Commission to the governing structure of the communes and gives it security and integral defense functions together with the Bolivarian Militia (arts. 42 and 43.2); it also creates communal justices of the peace. Delcy Rodríguez again countersigns the law from two posts in the Executive, as do Cabello and Padrino López. The rule thus documents an institutional link between the territorial organization of communities and State security functions.',
      es: 'La reforma incorpora la Comisión de Seguridad y Paz a la estructura de gobierno de las comunas y le atribuye funciones de seguridad y defensa integral junto con la Milicia Bolivariana (artículos 42 y 43.2); crea además jueces de paz comunal. Delcy Rodríguez refrenda nuevamente la legislación desde dos cargos del Ejecutivo, como también Cabello y Padrino López. La norma documenta así una vinculación institucional entre la organización territorial de las comunidades y las funciones estatales de seguridad.',
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
    heading: {
      en: 'From countersigning to appointing',
      es: 'De refrendar a designar',
    },
    note: {
      en: 'One day after taking the oath, she signs alone, with no countersignature: “I appoint General-in-Chief Gustavo Enrique González López” as head of military counterintelligence. The appointed authority now appoints, using the power set out in the 2015 regulation she countersigned.',
      es: 'Un día después de jurar, firma sola, sin refrendos: “Nombro al ciudadano General en Jefe Gustavo Enrique González López” jefe de la contrainteligencia militar. La autoridad designada ahora designa, con la facultad prevista en el reglamento de 2015 que ella refrendó.',
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
    heading: {
      en: 'The directors change; the command structure remains',
      es: 'Cambian los directores, permanece la estructura de mando',
    },
    note: {
      en: 'On 18 March 2026 Delcy Rodríguez appointed Germán Edoardo Gómez Lárez director of the DGCIM (“I appoint …”), with the same formula and the same single signature. That same day, by Decree 5,277, she named Gustavo González López, whom she had appointed head of military counterintelligence on 6 January, as Minister of Defense. Both appointments document a reorganization of the security and defense authorities under the exercise of the same presidential power of appointment.',
      es: 'El 18 de marzo de 2026, Delcy Rodríguez designó a Germán Edoardo Gómez Lárez como director de la DGCIM (“Nombro al ciudadano …”), con la misma fórmula y la misma firma única. Ese mismo día, mediante el Decreto 5.277, nombró ministro de Defensa a Gustavo González López, a quien había designado jefe de la contrainteligencia militar el 6 de enero. Los dos nombramientos documentan una reorganización de las autoridades de seguridad y defensa bajo el ejercicio de la misma facultad presidencial de nombramiento.',
    },
    caption: { en: 'Official Gazette No. 7,006 Extraordinary, p. 2 (masthead: p. 1). The ID number has been redacted by Venezuela Record.', es: 'Gaceta Oficial N° 7.006 Extraordinaria, pág. 2 (cabecera: pág. 1). Venezuela Record tapó el número de cédula.' },
    alt: {
      en: 'Masthead of Official Gazette No. 7,006 Extraordinary of 18 March 2026, article 1 of Decree 5,284 (“I appoint Germán Edoardo Gómez Lárez … as Director General of the Directorate General of Military Counterintelligence”) and the signature “Delcy Eloína Rodríguez Gómez, Acting President of the Republic.”',
      es: 'Cabecera de la Gaceta Oficial N° 7.006 Extraordinaria del 18 de marzo de 2026, artículo 1 del Decreto 5.284 (“Nombro al ciudadano Germán Edoardo Gómez Lárez … como Director General de la Dirección General de Contrainteligencia Militar”) y la firma “Delcy Eloína Rodríguez Gómez, Presidenta (E) de la República”.',
    },
    src: [37, 56, 6, 7],
  },
];

/** Closing of the signature section (Minerva Mendoza Paipa, 2026-10-22). Paragraphs separated by "\n\n". */
export const SIG_OUTRO = {
  title: {
    en: 'The posts changed. The power structure calls for another reading.',
    es: 'Cambiaron los cargos. La estructura de poder exige otra lectura.',
  },
  text: {
    en: 'Six official gazettes published between 2015 and 2026 reconstruct an institutional continuity that goes beyond the succession of authorities. Delcy Rodríguez’s signature first appears countersigning rules tied to military counterintelligence, territorial organization, security and the State’s sanctioning powers. Eleven years later it appears exercising the presidential authority to appoint those who run the DGCIM.\n\nThe names and positions of command changed. The institutional powers that make it possible to run these agencies remained. This documentary sequence shows who took part in their legal design and who currently holds the power of appointment. To establish the reach of that continuity over practices of control and political persecution, we must also examine how those institutions operate and which of their actions have been documented.\n\nThe true dimension of political change cannot be measured only by who leaves power or who takes over its leadership. It must also be examined in the structures that survive that transition, the powers they keep and the effective guarantees that limit their exercise.',
    es: 'Seis gacetas oficiales, publicadas entre 2015 y 2026, reconstruyen una continuidad institucional que trasciende la sucesión de autoridades. La firma de Delcy Rodríguez aparece primero en el refrendo de normas vinculadas con la contrainteligencia militar, la organización territorial, la seguridad y las facultades sancionadoras del Estado. Once años después, aparece ejerciendo la autoridad presidencial para designar a quienes dirigen la DGCIM.\n\nLos nombres y las posiciones de mando cambiaron. Las competencias institucionales que permiten dirigir estos organismos permanecieron. Esta secuencia documental muestra quién participó en su configuración normativa y quién ejerce actualmente las facultades de nombramiento. Para establecer el alcance de esa continuidad sobre las prácticas de control y persecución política, debemos examinar también cómo operan esas instituciones y qué actuaciones han sido documentadas.\n\nLa verdadera dimensión del cambio político no puede medirse únicamente por quién abandona el poder o quién asume su conducción. También debe examinarse en las estructuras que sobreviven a esa transición, las facultades que conservan y las garantías efectivas que limitan su ejercicio.',
  },
};

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
  { type: 'legal', label: { en: 'Legal or institutional command', es: 'Mando legal o institucional' }, hint: { en: 'Solid line', es: 'Línea sólida' } },
  { type: 'coord', label: { en: 'Institutional coordination', es: 'Coordinación institucional' }, hint: { en: 'Dashed line', es: 'Línea discontinua' } },
  { type: 'un', label: { en: 'De facto link documented by the UN', es: 'Vínculo de hecho documentado por la ONU' }, hint: { en: 'Dotted line', es: 'Línea punteada' } },
  { type: 'family', label: { en: 'Family tie', es: 'Parentesco' }, hint: { en: 'Thin dash-dot line', es: 'Línea fina de raya y punto' } },
  { type: 'result', label: { en: 'Documented action', es: 'Actuación documentada' }, hint: { en: 'Red arrow', es: 'Flecha roja' } },
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
      { text: { en: 'In June 2026 the government activated it to report missing people and damaged homes after the double earthquake. There is no public confirmation that its political-reporting functions are still active.', es: 'En junio de 2026 el gobierno la activó para reportar personas desaparecidas y viviendas afectadas tras el doble sismo. No hay confirmación pública de que sigan activas sus funciones de denuncia política.' }, src: [47, 48] },
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
  { from: 'usa', to: 'delcy', type: 'un', label: { en: 'Documented political influence: major decisions “instigated, authorized or approved” by Washington (UN, para. 16). It gives the U.S. no legal power to appoint Venezuelan officials', es: 'Influencia política documentada: las grandes decisiones las promueve, autoriza o aprueba Washington (ONU, párr. 16). No le da a EE. UU. una competencia jurídica para nombrar autoridades venezolanas' }, src: [1] },
  { from: 'delcy', to: 'gonzalez', type: 'appoint', label: { en: 'DGCIM (Decree 5,203, 6 Jan) and Defense (Decree 5,277, 18 Mar)', es: 'DGCIM (Decreto 5.203, 6 ene) y Defensa (Decreto 5.277, 18 mar)' }, src: [26, 56, 7] },
  { from: 'delcy', to: 'dgcim', type: 'appoint', label: { en: 'DGCIM director (Decree 5,284, 18 Mar)', es: 'Director de la DGCIM (Decreto 5.284, 18 mar)' }, src: [37, 6] },
  { from: 'delcy', to: 'cabello', type: 'legal', label: { en: 'Keeps him at Interior', es: 'Lo mantiene en Interior' }, src: [10] },
  { from: 'delcy', to: 'sebin', type: 'legal', label: { en: 'SEBIN belongs to the Vice Presidency she still holds', es: 'Órgano de la Vicepresidencia que ella sigue ocupando' }, src: [25, 30] },
  { from: 'delcy', to: 'jorge', type: 'family', label: { en: 'Siblings', es: 'Hermanos' }, src: [1, 40] },
  { from: 'jorge', to: 'tsj', type: 'coord', label: { en: 'The National Assembly he presides has the power to elect the justices, and in May it expanded the court. Presiding over the Assembly is not personal hierarchical command over the court', es: 'La Asamblea Nacional que preside tiene la atribución de elegir a los magistrados, y en mayo amplió el tribunal. Presidir la Asamblea no supone mando jerárquico personal sobre el TSJ' }, src: [14] },
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
  { from: 'sebin', to: 'disiente', type: 'result', label: { en: 'Detained Yorman Acevedo (Jan 2026; released 26 Sep)', es: 'Detuvo a Yorman Acevedo (ene 2026; excarcelado el 26 sept)' }, src: [16, 42] },
  { from: 'pnb', to: 'disiente', type: 'result', label: { en: 'Detained Javier Oropeza, per El Pitazo and the opposition (Sep 2026; other outlets say SEBIN)', es: 'Detuvo a Javier Oropeza, según El Pitazo y la oposición (sept 2026; otros medios dicen el SEBIN)' }, src: [18, 44, 19] },
  { from: 'tribunales', to: 'disiente', type: 'result', label: { en: 'Apply the anti-hate law (UN, para. 41)', es: 'Aplican la Ley contra el Odio (ONU, párr. 41)' }, src: [1] },
  { from: 'colectivos', to: 'disiente', type: 'result', label: { en: 'Act alongside security forces in times of unrest (UN, para. 96)', es: 'Actúan junto a fuerzas de seguridad en momentos de protesta (ONU, párr. 96)' }, src: [1] },
];

export interface GuidedStep {
  title: L;
  /** Paragraphs separated by "\n\n". */
  text: L;
  /** Key idea, shown as a highlighted line (Minerva Mendoza Paipa). */
  key?: L;
  /** Extra panel drawn under the text (from Minerva Mendoza Paipa's sketches). */
  panel?: 'decrees' | 'command';
  nodes: string[];
}

export const STEPS: GuidedStep[] = [
  {
    title: { en: '1 · The origin of the new leadership of the State', es: '1 · El origen de la nueva conducción del Estado' },
    text: {
        en: 'Nicolás Maduro’s departure on 3 January 2026 opened a presidential succession decided institutionally by the Supreme Court, which ordered the executive vice president to take over the presidency. Delcy Rodríguez became acting president, while the National Assembly remained under the presidency of Jorge Rodríguez, her brother. At the same time, the United States gained a decisive influence over the direction of the new political and economic stage, whose extent has been examined by the United Nations.\n\nThe result is a power structure that must be understood through its effective relationships: who confers authority, who appoints officials, who exercises command and which links connect the top decisions with the security institutions and their actions.',
        es: 'La salida de Nicolás Maduro el 3 de enero de 2026 abrió una sucesión presidencial decidida institucionalmente por el Tribunal Supremo de Justicia, que ordenó a la vicepresidenta ejecutiva asumir la Presidencia. Delcy Rodríguez asumió la Presidencia encargada, mientras la Asamblea Nacional continuó bajo la presidencia de Jorge Rodríguez, su hermano. Paralelamente, Estados Unidos adquirió una influencia determinante en la orientación de la nueva etapa política y económica, cuya magnitud ha sido examinada por Naciones Unidas.\n\nEl resultado es una estructura de poder que debe comprenderse mediante sus relaciones efectivas: quién confiere autoridad, quién designa funcionarios, quién ejerce el mando y qué vínculos permiten conectar las decisiones superiores con las instituciones de seguridad y sus actuaciones.',
      },
    nodes: ['usa', 'tsj', 'delcy', 'jorge'],
  },
  {
    title: { en: '2 · Who holds the power to appoint', es: '2 · Quién ejerce el poder de nombrar' },
    text: {
        en: 'The reorganization of Venezuela’s security apparatus in 2026 shows how the acting presidency used its powers of appointment over strategic State institutions. On 6 January, Delcy Rodríguez appointed Gustavo González López director of the DGCIM. On 18 March she named him Minister of Defense and put Germán Edoardo Gómez Lárez at the head of military counterintelligence. She kept Diosdado Cabello at Interior; SEBIN, headed at least until March by his cousin Alexis Rodríguez Cabello, belongs to the Vice Presidency she still holds.\n\nThese moves changed who holds the posts without showing, by themselves, any transformation of the powers, structures or ways of working of the agencies involved. The question this documentary sequence raises goes beyond the appointments: who keeps the power of command over institutions that international bodies have linked to human rights violations, and what effective controls exist over the use of that power.',
        es: 'La reorganización del aparato de seguridad venezolano durante 2026 revela cómo la Presidencia encargada ejerció sus facultades de designación sobre instituciones estratégicas del Estado. El 6 de enero, Delcy Rodríguez nombró a Gustavo González López director de la DGCIM. El 18 de marzo lo designó ministro de Defensa y nombró a Germán Edoardo Gómez Lárez al frente de la contrainteligencia militar. Mantuvo a Diosdado Cabello en Interior; el SEBIN, dirigido al menos hasta marzo por su primo Alexis Rodríguez Cabello, depende de la Vicepresidencia que ella sigue ocupando.\n\nEstos movimientos modificaron la distribución de los cargos sin acreditar, por sí mismos, una transformación de las competencias, estructuras o mecanismos de funcionamiento de los organismos involucrados. La cuestión que deja planteada esta secuencia documental trasciende los nombramientos: quién conserva las facultades de mando sobre instituciones señaladas por organismos internacionales por violaciones de derechos humanos y qué controles efectivos existen sobre el ejercicio de ese poder.',
      },
    key: {
        en: 'The appointments reveal who exercises authority. The permanence of the structures makes it possible to examine what institutional capacity the State keeps.',
        es: 'Los nombramientos revelan quién ejerce la autoridad. La permanencia de las estructuras permite examinar qué capacidad institucional conserva el Estado.',
      },
    panel: 'decrees',
    nodes: ['delcy', 'gonzalez', 'dgcim', 'cabello', 'sebin'],
  },
  {
    title: { en: '3 · From central command to territorial control', es: '3 · Del mando central al control territorial' },
    text: {
      en: 'The organization of State power takes on a territorial dimension through the agencies in charge of security, intelligence and defense.\n\nThe Interior Ministry has powers over the national police forces and governs the police service. The Defense Ministry holds the military chain of command, while the law ties the Bolivarian Militia to communal councils and communes in security and defense activities.\n\nTo this formal organization the United Nations adds documented de facto links between colectivos, State authorities and security agencies. The coexistence of legal powers and informal ties calls for examining how those relationships work, who takes part in the actions and what responsibility belongs to each institution.\n\nThe territorial dimension of power helps explain how decisions taken by the central authorities can turn into concrete actions against the population. Determining when those actions amount to political persecution requires identifying the facts, those responsible, the people affected and the documented motivations.',
      es: 'La organización del poder estatal adquiere una dimensión territorial a través de los organismos encargados de la seguridad, la inteligencia y la defensa.\n\nEl Ministerio de Interior ejerce competencias sobre los cuerpos policiales nacionales y funciones rectoras del servicio de policía. El Ministerio de Defensa integra la estructura de mando militar, mientras la legislación vincula a la Milicia Bolivariana con consejos comunales y comunas en actividades de seguridad y defensa.\n\nA esta organización formal se suman vínculos de hecho documentados por Naciones Unidas entre colectivos, autoridades estatales y organismos de seguridad. La coexistencia de competencias legales y vínculos informales exige examinar cómo funcionan esas relaciones, quién interviene en las actuaciones y qué responsabilidad corresponde a cada institución.\n\nLa dimensión territorial del poder permite comprender cómo las decisiones adoptadas por las autoridades centrales pueden traducirse en actuaciones concretas sobre la población. Determinar cuándo esas actuaciones constituyen persecución política exige identificar los hechos, sus responsables, las personas afectadas y las motivaciones documentadas.',
    },
    key: {
        en: 'Institutional command establishes who holds authority. Documented actions show how it is exercised.',
        es: 'El mando institucional establece quién tiene autoridad. Las actuaciones documentadas permiten establecer cómo se ejerce.',
      },
    panel: 'command',
    nodes: ['cabello', 'gonzalez', 'cicpc', 'pnb', 'gob', 'polest', 'fanb', 'consejos', 'colectivos', 'venapp'],
  },
  {
    title: { en: '4 · Political opinion under persecution', es: '4 · La opinión política bajo persecución' },
    text: {
      en: 'Political persecution takes a concrete shape when we look at what happens to people who criticize the government or whom the authorities identify as opponents. The question is not limited to whether detentions occur: it covers the reasons behind them, the agencies involved and their consequences for the exercise of political rights.\n\nIn January 2026, SEBIN detained Yorman Acevedo over a TikTok comment about Maduro’s capture; he was accused of “incitement to hatred.” He was released on 26 September; the conditions were not disclosed.\n\nIn September, Javier Oropeza, a former mayor and opposition leader, was detained 48 hours after returning to Venezuela from more than two years in exile, even though the day before he had obtained the dismissal of his case under the Amnesty Law. He was released some six hours later, with precautionary measures according to the opposition.\n\nThese cases make it possible to examine State actions, after Maduro’s departure, against people identified by their expression or political record. The United Nations also documented, as a notable new pattern, short-term arbitrary detentions and measures of intimidation against people perceived as opponents (para. 61).\n\nThe permanence of the security structures thus matters beyond the org charts: their actions can directly affect freedom of expression, political participation and the safety of those who question power.',
      es: 'La persecución política adquiere una dimensión concreta cuando examinamos qué ocurre con quienes expresan críticas al gobierno o son identificados por las autoridades como opositores. La cuestión no se limita a la existencia de detenciones: comprende las razones que las motivan, los organismos que intervienen y las consecuencias que producen sobre el ejercicio de los derechos políticos.\n\nEn enero de 2026, el SEBIN detuvo a Yorman Acevedo por un comentario en TikTok sobre la captura de Maduro; lo acusaron de “instigación al odio”. Fue excarcelado el 26 de septiembre; no se informaron las condiciones.\n\nEn septiembre, Javier Oropeza, exalcalde y dirigente opositor, fue detenido 48 horas después de regresar a Venezuela tras más de dos años de exilio, pese a que el día anterior había obtenido el sobreseimiento de su causa con la Ley de Amnistía. Fue excarcelado unas seis horas después, con medidas cautelares según la oposición.\n\nEstos casos permiten examinar actuaciones estatales posteriores a la salida de Maduro frente a personas identificadas por su expresión o trayectoria política. Naciones Unidas también documentó, como un patrón nuevo, la utilización de detenciones arbitrarias breves y medidas de intimidación contra personas percibidas como opositoras (párr. 61).\n\nLa permanencia de las estructuras de seguridad adquiere así una relevancia que trasciende los organigramas: sus actuaciones pueden afectar directamente la libertad de expresión, la participación política y la seguridad de quienes cuestionan al poder.',
    },
    key: {
        en: 'Persecution for political opinion does not require holding an opposition post. It can also reach anyone who voices public criticism or is identified as opposed to those in power.',
        es: 'La persecución por opinión política no requiere que una persona ocupe un cargo opositor. También puede afectar a quien expresa una crítica pública o es identificado como contrario al poder.',
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
  { date: '2026-09-17', lane: 'sec', when: { en: '17 Sep', es: '17 sept' }, title: { en: 'Javier Oropeza detained', es: 'Detienen a Javier Oropeza' }, text: { en: 'The Voluntad Popular leader is detained in Barquisimeto, 48 hours after returning from exile and one day after obtaining the dismissal of his case under the Amnesty Law; he is released some six hours later, with precautionary measures according to the opposition. El Pitazo and the opposition said the arrest was made by the National Police (PNB); Infobae and NTN24 attributed it to SEBIN.', es: 'Detienen en Barquisimeto al dirigente de Voluntad Popular 48 horas después de volver del exilio y un día después de obtener el sobreseimiento de su causa con la Ley de Amnistía; lo liberan unas seis horas después, con medidas cautelares según la oposición. El Pitazo y la oposición dijeron que lo detuvo la Policía Nacional (PNB); Infobae y NTN24 lo atribuyeron al SEBIN.' }, src: [18, 19, 44, 45, 46] },
  { date: '2026-09-26', lane: 'sec', when: { en: '26 Sep', es: '26 sept' }, title: { en: 'Yorman Acevedo released', es: 'Excarcelan a Yorman Acevedo' }, text: { en: 'After eight months in detention over a TikTok comment, he is released in Maracay. Espacio Público reported the release; the conditions were not disclosed.', es: 'Tras ocho meses detenido por un comentario en TikTok, lo excarcelan en Maracay. Espacio Público reportó la excarcelación; no se informaron las condiciones.' }, src: [42, 43] },
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
  /** Interpretive title (Minerva Mendoza Paipa, 2026-10-22). */
  heading: L;
  proves: L;
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
    heading: {
      en: 'Civilian intelligence under the Vice Presidency',
      es: 'La inteligencia civil bajo la Vicepresidencia',
    },
    proves: { en: 'SEBIN depends on the Vice Presidency — the post Delcy Rodríguez still holds.', es: 'El SEBIN depende de la Vicepresidencia, el cargo que Delcy Rodríguez sigue ocupando.' },
    src: [25, 30],
  },
  {
    id: 'go-40599',
    number: { en: 'No. 40,599', es: 'N° 40.599' },
    date: { en: '10 February 2015', es: '10 de febrero de 2015' },
    act: { en: 'Decree 1,605 · Organic Regulation of the DGCIM', es: 'Decreto 1.605 · Reglamento Orgánico de la DGCIM' },
    article: { en: 'The Directorate General of Military Counterintelligence is led by a Director General, [[who is appointed by the President of the Bolivarian Republic of Venezuela and Commander in Chief]] of the Bolivarian National Armed Forces.', es: 'La Dirección General de Contrainteligencia Militar está dirigida y administrada por un Director o Directora General, [[quien es designado por el Presidente o Presidenta de la República Bolivariana de Venezuela y Comandante en Jefe]] de la Fuerza Armada Nacional Bolivariana.' },
    articleRef: { en: 'Art. 6 · p. 418,693 · countersigned by the Foreign Minister, Delcy Rodríguez (p. 418,695)', es: 'Art. 6 · pág. 418.693 · refrendado por la canciller Delcy Rodríguez (pág. 418.695)' },
    heading: {
      en: 'The presidential power to appoint the director',
      es: 'La facultad presidencial de designar al director',
    },
    proves: { en: 'She countersigned the rule that today gives her the power to appoint the head of the DGCIM.', es: 'Delcy Rodríguez refrendó la norma que hoy le da el poder de nombrar al jefe de la DGCIM.' },
    src: [27],
  },
  {
    id: 'go-6957',
    number: { en: 'No. 6,957 Extraordinary', es: 'N° 6.957 Extraordinario' },
    date: { en: '6 January 2026', es: '6 de enero de 2026' },
    act: { en: 'Decree 5,203 · Appointment of the DGCIM director', es: 'Decreto 5.203 · Nombramiento del director de la DGCIM' },
    article: { en: '[[I appoint General-in-Chief GUSTAVO ENRIQUE GONZÁLEZ LÓPEZ]] … as DIRECTOR GENERAL OF THE DIRECTORATE GENERAL OF MILITARY COUNTERINTELLIGENCE (DGCIM). “Let it be executed”: [[Delcy Eloína Rodríguez Gómez, Acting President]] — no countersignatures.', es: '[[Nombro al ciudadano General en Jefe GUSTAVO ENRIQUE GONZÁLEZ LÓPEZ]] … como DIRECTOR GENERAL DE LA DIRECCIÓN GENERAL DE CONTRAINTELIGENCIA MILITAR (DGCIM). “Ejecútese”: [[Delcy Eloína Rodríguez Gómez, Presidenta (E)]], sin refrendos.' },
    articleRef: {
      en: 'Art. 1 · based on arts. 226 and 236 (2, 5, 6) of the Constitution and art. 46 of the Public Administration Law. It does not cite the DGCIM regulation, whose art. 6 sets out the same power',
      es: 'Art. 1 · con base en los arts. 226 y 236 (num. 2, 5 y 6) de la Constitución y el art. 46 de la Ley Orgánica de la Administración Pública. No cita el Reglamento de la DGCIM, cuyo art. 6 prevé la misma facultad',
    },
    heading: {
      en: 'The presidential power, exercised',
      es: 'El ejercicio de la facultad presidencial',
    },
    proves: { en: 'An appointed authority that appoints: she names him alone, one day after taking the oath.', es: '“Autoridad designada que designa”: lo nombra ella sola, un día después de jurar.' },
    src: [26, 3],
  },
  {
    id: 'go-7006',
    number: { en: 'No. 7,006 Extraordinary', es: 'N° 7.006 Extraordinario' },
    date: { en: '18 March 2026', es: '18 de marzo de 2026' },
    act: { en: 'Decree 5,284 · Appointment of the DGCIM director', es: 'Decreto 5.284 · Nombramiento del director de la DGCIM' },
    article: { en: '[[I appoint GERMÁN EDOARDO GÓMEZ LÁREZ]] … as DIRECTOR GENERAL OF THE DIRECTORATE GENERAL OF MILITARY COUNTERINTELLIGENCE (DGCIM). Signed: [[Delcy Eloína Rodríguez Gómez, Acting President]].', es: '[[Nombro al ciudadano GERMÁN EDOARDO GÓMEZ LÁREZ]] … como DIRECTOR GENERAL DE LA DIRECCIÓN GENERAL DE CONTRAINTELIGENCIA MILITAR (DGCIM). Firma: [[Delcy Eloína Rodríguez Gómez, Presidenta (E)]].' },
    articleRef: { en: 'Art. 1 · same legal basis as Decree 5,203 · no countersignatures', es: 'Art. 1 · misma base legal que el Decreto 5.203 · sin refrendos' },
    heading: {
      en: 'The directors change; the power remains',
      es: 'Cambian los directores, permanece la facultad',
    },
    proves: { en: 'The power to appoint the DGCIM chief was used twice in ten weeks, by her alone.', es: 'La facultad de nombrar al jefe de la DGCIM la usó dos veces en diez semanas, ella sola.' },
    src: [37],
  },
  {
    id: 'go-6859',
    number: { en: 'No. 6,859 Extraordinary', es: 'N° 6.859 Extraordinario' },
    date: { en: '29 November 2024', es: '29 de noviembre de 2024' },
    act: { en: 'Liberator Simón Bolívar Organic Law', es: 'Ley Orgánica Libertador Simón Bolívar' },
    article: { en: 'Anyone who “promotes, instigates, requests, invokes, favors, facilitates, supports or participates” in the adoption of unilateral coercive measures … [[shall be punished with 25 to 30 years in prison]] (art. 11). The judge shall impose [[political disqualification for up to 60 years]] (art. 13). A national registry of people “who conflict with this Law” (art. 23).', es: 'Toda persona que “promueva, instigue, solicite, invoque, favorezca, facilite, respalde o participe” en la adopción de medidas coercitivas unilaterales … [[será sancionada con prisión de veinticinco (25) a treinta (30) años]] (art. 11). El juez impondrá [[inhabilitación política hasta por sesenta (60) años]] (art. 13). Un Registro nacional de personas que “colidan con esta Ley” (art. 23).' },
    articleRef: { en: 'Arts. 11–13 and 23 · countersigned by Delcy Rodríguez (two posts) and Diosdado Cabello', es: 'Arts. 11–13 y 23 · refrendada por Delcy Rodríguez (dos cargos) y Diosdado Cabello' },
    heading: {
      en: 'Prison, disqualification and a national registry',
      es: 'Prisión, inhabilitación y un registro nacional',
    },
    proves: {
      en: 'A sanctioning regime with 25 to 30 years in prison for the conduct defined in article 11 and accessory political disqualification of up to 60 years under article 13. It also creates a national registry and restrictive administrative measures (art. 23): a State capacity to identify and restrict people.',
      es: 'La existencia de un régimen sancionador que contempla penas de 25 a 30 años de prisión por las conductas tipificadas en el artículo 11 y una inhabilitación política accesoria de hasta 60 años conforme al artículo 13. Incluye, además, un registro nacional y medidas administrativas restrictivas previstas en el artículo 23: una capacidad estatal de identificación y restricción administrativa.',
    },
    src: [34, 55],
  },
  {
    id: 'go-6872',
    number: { en: 'No. 6,872 Extraordinary', es: 'N° 6.872 Extraordinario' },
    date: { en: '30 December 2024', es: '30 de diciembre de 2024' },
    act: { en: 'Reform of the Organic Law of Communes', es: 'Reforma de la Ley Orgánica de las Comunas' },
    article: { en: 'The Security and Peace Commission of the Commune shall “promote, participate and contribute, [[jointly with the Bolivarian Militia]], to the security and integral defense of the Nation.” The reform also creates communal justices of the peace.', es: 'La Comisión de Seguridad y Paz de la Comuna debe “Promover, participar y contribuir, [[conjuntamente con la Milicia Bolivariana]], en la seguridad y defensa integral de la Nación”. La reforma crea además jueces de paz comunal.' },
    articleRef: { en: 'Art. 43.2 (reformed text) · countersigned by Delcy Rodríguez (two posts), Cabello and Padrino López', es: 'Art. 43.2 (texto reformado) · refrendada por Delcy Rodríguez (dos cargos), Cabello y Padrino López' },
    heading: {
      en: 'State security is linked to communal power',
      es: 'La seguridad estatal se articula con el poder comunal',
    },
    proves: {
      en: 'The legal creation of the Commune’s Security and Peace Commission and its role in security and integral defense jointly with the Bolivarian Militia (arts. 42 and 43.2).',
      es: 'La creación normativa de la Comisión de Seguridad y Paz de la Comuna y su participación en actividades de seguridad y defensa integral conjuntamente con la Milicia Bolivariana, según los artículos 42 y 43.2.',
    },
    src: [35],
  },
  {
    id: 'tsj-1-2026',
    number: { en: 'Ruling No. 1 · Constitutional Chamber', es: 'Sentencia N° 1 · Sala Constitucional' },
    date: { en: '3 January 2026', es: '3 de enero de 2026' },
    act: { en: 'File 2026-00001 · joint opinion, no dissent', es: 'Exp. 2026-00001 · ponencia conjunta, sin voto salvado' },
    article: {
      en: 'Faced with Nicolás Maduro’s “forced absence”, the Constitutional Chamber interpreted articles 234 and 239 of the Constitution “ex officio” and ordered the Executive Vice President to [[“ASSUME AND EXERCISE” the Presidency “as ACTING PRESIDENT”]], with all the powers of the office. Joint opinion, no dissent, no time limit set.',
      es: 'Ante la “ausencia forzosa” de Nicolás Maduro, la Sala Constitucional interpretó “de oficio” los arts. 234 y 239 de la Constitución y ordenó que la Vicepresidenta Ejecutiva [[“ASUMA Y EJERZA en condición de ENCARGADA” la Presidencia]], con todas las atribuciones inherentes al cargo. Ponencia conjunta, sin voto salvado y sin plazo expreso.',
    },
    articleRef: { en: 'Not a gazette: TSJ record and Acceso a la Justicia', es: 'No es gaceta: cuenta del TSJ y Acceso a la Justicia' },
    heading: {
      en: 'The court ruling that opened the acting presidency',
      es: 'La decisión judicial que abrió la Presidencia encargada',
    },
    proves: {
      en: 'The Supreme Court intervened directly with a ruling that ordered Delcy Rodríguez to take on and exercise the presidential powers. Acceso a la Justicia argues that the Constitution gives the court no power to order it.',
      es: 'El TSJ intervino directamente mediante una decisión judicial que ordenó a Delcy Rodríguez asumir y ejercer las atribuciones presidenciales. Acceso a la Justicia sostiene que la Constitución no le da al TSJ competencia para ordenarlo.',
    },
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

export const VENAPP: { when: L; text: L; src: number[]; uncertain?: boolean; flag?: L }[] = [
  { when: { en: 'Dec 2022', es: 'dic 2022' }, text: { en: 'Announced by the government as an app to report failures in public services.', es: 'El gobierno la anuncia como aplicación para reportar fallas de servicios públicos.' }, src: [38] },
  { when: { en: 'Jul–Aug 2024', es: 'jul–ago 2024' }, text: { en: 'After the election, the government adds a channel for anonymous reports against opponents. Amnesty International warns of illegitimate detention; the IACHR says the app “has been reconfigured”.', es: 'Tras la elección, el gobierno añade un canal de denuncias anónimas contra opositores. Amnistía Internacional advierte del riesgo de detenciones ilegítimas; la CIDH señala que la aplicación “ha sido reconfigurada”.' }, src: [38, 22, 49] },
  { when: { en: 'Aug 2024', es: 'ago 2024' }, text: { en: 'Apple and Google remove it from their stores. That is not the end of the service: it keeps working for those who had it and on the web.', es: 'Apple y Google la retiran de sus tiendas. No es una interrupción del servicio: sigue funcionando para quien la tenía y en versión web.' }, src: [22, 23] },
  { when: { en: 'Oct 2025', es: 'oct 2025' }, text: { en: 'Maduro urges people to use it to “report everything they hear, everything they read” (CNN).', es: 'Maduro pide usarla para reportar todo lo que se oye y todo lo que se lee (según CNN; traducción de Venezuela Record).' }, src: [23] },
  { when: { en: 'Jun 2026', es: 'jun 2026' }, flag: { en: 'Documented official use', es: 'Uso oficial documentado' }, text: { en: 'After the double earthquake of 24 June, Delcy Rodríguez’s government activates it to report missing people and damaged homes. There is no public confirmation that its political-reporting functions are still active, nor of who can access the data.', es: 'Tras el doble sismo del 24 de junio, el gobierno de Delcy Rodríguez la activa para reportar personas desaparecidas y viviendas afectadas. No hay confirmación pública de que sigan activas sus funciones de denuncia política, ni de quién puede acceder a los datos.' }, src: [47, 48] },
];

/* ------------------------------------------------------- changed / unchanged */

export type BalStatus = 'done' | 'pending' | 'doc';
export const BAL_STATUS: Record<BalStatus, L> = {
  done: { en: 'Carried out', es: 'Ejecutado' },
  pending: { en: 'In progress, not in force', es: 'En trámite, no vigente' },
  doc: { en: 'Documented', es: 'Documentado' },
};

export const CHANGED: { text: L; src: number[]; status: BalStatus }[] = [
  { text: { en: 'Prison releases and an amnesty — short-lived and conditional.', es: 'Excarcelaciones y una amnistía, corta y condicional.' }, src: [1, 15], status: 'done' },
  { text: { en: 'Dialogue with the opposition and an agreement to renew the Supreme Court.', es: 'Diálogo con la oposición y un acuerdo para renovar el TSJ.' }, src: [1], status: 'doc' },
  { text: { en: 'A bill to reform the anti-hate law: the Supreme Court cleared it on 15 October and the Assembly is debating it. It is an initiative in progress; the 2017 law remains in force.', es: 'Proyecto de reforma de la Ley contra el Odio: el TSJ lo avaló el 15 de octubre y la AN lo debate. Es una iniciativa en trámite; la ley de 2017 sigue vigente.' }, src: [20, 21, 41], status: 'pending' },
  { text: { en: 'The harshest repression eased: of 214 political detentions between September 2025 and July 2026, 207 happened before the end of January (UN, para. 57).', es: 'La represión más dura bajó: de 214 detenciones políticas entre septiembre de 2025 y julio de 2026, 207 fueron antes de fin de enero (ONU, párr. 57).' }, src: [1], status: 'doc' },
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

/** Closing of the balance (Minerva Mendoza Paipa, 2026-10-22). Paragraphs separated by "\n\n". */
export const BAL_ESSAY = {
  title: {
    en: 'Political change versus the continuity of the capacity to persecute',
    es: 'El cambio político frente a la continuidad de la capacidad persecutoria',
  },
  text: {
    en: 'The changes recorded in 2026 show a shift in Venezuela’s landscape: prison releases, a reorganization of authorities, reform initiatives and new economic relations. Yet the evolution of political conditions also calls for examining which institutions keep their powers, which control mechanisms remain available and how the authorities act toward those who voice opinions contrary to those in power.\n\nThe decline of certain repressive practices is a documentable change. Their persistence in other forms, especially when it affects people identified by their real or attributed political opinion, poses a different problem: the continuity of the institutional conditions that make it possible to restrict rights and to persecute.\n\nThe reach of Venezuela’s transformation cannot be established only by the number of people released or the reforms announced. It must also be examined through the guarantees that exist to prevent new arbitrary detentions, acts of intimidation and restrictions linked to political expression or participation.',
    es: 'Las transformaciones registradas durante 2026 muestran una modificación del escenario venezolano: excarcelaciones, reorganización de autoridades, iniciativas de reforma y nuevas relaciones económicas. Sin embargo, la evolución de las condiciones políticas exige examinar también qué instituciones conservan sus competencias, qué mecanismos de control permanecen disponibles y cómo actúan las autoridades frente a quienes expresan opiniones contrarias al poder.\n\nLa disminución de determinadas prácticas represivas constituye un cambio documentable. Su persistencia bajo otras modalidades, especialmente cuando afecta a personas identificadas por su opinión política real o atribuida, plantea un problema distinto: la continuidad de las condiciones institucionales que permiten restringir derechos y ejercer persecución.\n\nEl alcance de la transformación venezolana no puede establecerse exclusivamente mediante el número de personas excarceladas o las reformas anunciadas. Debe examinarse también mediante las garantías que existen para impedir nuevas detenciones arbitrarias, actos de intimidación y restricciones vinculadas con la expresión o participación política.',
  },
  key: {
    en: 'The persistence of the capacity to persecute is a different object of investigation from how often that capacity is used.',
    es: 'La persistencia de la capacidad de persecución constituye un objeto de investigación distinto de la frecuencia con que esa capacidad se ejerce.',
  },
};

/** Method (Minerva Mendoza Paipa, "methodological design", 2026-10-22). Each block: optional heading + paragraphs. */
export const METHOD: { h?: L; p: L[] }[] = [
  {
    h: {
      en: 'Methodological design of the investigation',
      es: 'Arquitectura metodológica de la investigación',
    },
    p: [
      {
        en: 'This investigation was built on a methodological design for the documentary reconstruction of power and its operational persistence, conceived to examine the institutional transformations of the Venezuelan State during 2026 and to establish which relationships of authority, powers and capacities to act remain after Nicolás Maduro’s departure.',
        es: 'Esta investigación se desarrolló mediante una arquitectura metodológica de reconstrucción documental del poder y su persistencia operativa, concebida para examinar las transformaciones institucionales del Estado venezolano durante 2026 y establecer qué relaciones de autoridad, competencias y capacidades de actuación permanecen después de la salida de Nicolás Maduro.',
      },
      {
        en: 'Our approach is qualitative, documentary, historical-institutional and comparative. We combine legal analysis, the chronological reconstruction of official decisions and the comparison of documented events in order to explain how State power is configured, transmitted and exercised. This makes it possible to go beyond a reading centered only on who holds each post and to study the institutional relationships that survive when their occupants change.',
        es: 'Nuestro enfoque es cualitativo, documental, histórico-institucional y comparativo. Articulamos el análisis normativo, la reconstrucción cronológica de decisiones oficiales y el contraste de acontecimientos documentados con el propósito de explicar cómo se configura, transmite y ejerce el poder estatal. Esta articulación permite superar una lectura centrada exclusivamente en los titulares de los cargos y estudiar las relaciones institucionales que subsisten cuando sus ocupantes cambian.',
      },
    ],
  },
  {
    h: {
      en: 'Three levels of analysis',
      es: 'La arquitectura de análisis',
    },
    p: [
      {
        en: 'We organized the investigation in three related levels.',
        es: 'Organizamos la investigación en tres niveles relacionados.',
      },
      {
        en: 'The first is the legal configuration of power. We examine official gazettes, laws, regulations and court rulings to identify the creation of agencies, their powers, the powers of appointment and the legal mechanisms that govern the exercise of authority. Each document is read according to its nature and scope, distinguishing the powers provided by law from their actual use.',
        es: 'El primero corresponde a la configuración normativa del poder. Examinamos las gacetas oficiales, leyes, reglamentos y decisiones judiciales para identificar la creación de organismos, sus atribuciones, las facultades de nombramiento y los mecanismos jurídicos que regulan el ejercicio de la autoridad. Cada documento es interpretado según su naturaleza y alcance, distinguiendo las competencias legalmente previstas de su utilización efectiva.',
      },
      {
        en: 'The second addresses institutional continuity and the changes in positions of command. We reconstruct the documentary trajectories of certain officials and compare the rules in force before January 2026 with later decisions. This shows the permanence of powers, the reshuffling of officials and the relationships between the security, intelligence, defense and territorial administration agencies. The org chart represents these relationships with distinct categories of appointment, legal command, coordination and de facto links, each attributed to an identifiable source.',
        es: 'El segundo nivel aborda la continuidad institucional y las transformaciones en las posiciones de mando. Reconstruimos las trayectorias documentales de determinadas autoridades y contrastamos las normas anteriores a enero de 2026 con las decisiones posteriores. Este procedimiento permite identificar la permanencia de competencias, la reorganización de funcionarios y las relaciones entre los organismos de seguridad, inteligencia, defensa y administración territorial. El organigrama representa estas relaciones mediante categorías diferenciadas de designación, mando legal, coordinación y vínculos de hecho atribuidos a fuentes identificables.',
      },
      {
        en: 'The third examines State actions and their consequences for people. We compare the institutional background with the events documented during 2026, paying particular attention to detentions, intimidation and restrictions related to the expression of real or attributed political opinions. We analyze separately the action, the agency named, the person affected, the documented circumstances and the available evidence about a possible political motivation.',
        es: 'El tercer nivel examina las actuaciones estatales y sus consecuencias sobre las personas. Contrastamos los antecedentes institucionales con los acontecimientos documentados durante 2026, prestando particular atención a las detenciones, intimidaciones y restricciones relacionadas con la expresión de opiniones políticas reales o atribuidas. Analizamos separadamente la actuación, el organismo señalado, la persona afectada, las circunstancias documentadas y los elementos disponibles sobre su posible motivación política.',
      },
    ],
  },
  {
    h: {
      en: 'Operational persistence of coercive power',
      es: 'Persistencia operativa del poder coercitivo',
    },
    p: [
      {
        en: 'As an analytical category for this investigation, we propose the “operational persistence of coercive power” to examine one specific dimension of State continuity: the preservation and possible use of institutional capacities of control, surveillance, coercion and sanction after a change in political leadership.',
        es: 'Como categoría analítica de esta investigación, proponemos la «persistencia operativa del poder coercitivo» para examinar una dimensión específica de la continuidad estatal: la conservación y eventual utilización de capacidades institucionales de control, vigilancia, coerción y sanción después de una transformación en la conducción política.',
      },
      {
        en: 'This category distinguishes the existence of a structure, the availability of its powers and the documented use of its mechanisms. The permanence of an agency does not automatically prove political persecution; nor does a decline in certain actions prove that the capacities that could allow their repetition have disappeared.',
        es: 'Esta categoría permite distinguir la existencia de una estructura, la disponibilidad de sus facultades y el ejercicio documentado de sus mecanismos. La permanencia de un organismo no demuestra automáticamente persecución política; tampoco una disminución de determinadas actuaciones acredita la desaparición de las capacidades que podrían permitir su repetición.',
      },
      {
        en: 'That is why we study the relationship between legal continuity, the exercise of powers, verifiable actions and the institutional guarantees meant to prevent abuse. The category works as an interpretive tool to recognize both effective transformations and continuities that require further examination.',
        es: 'Por ello, estudiamos la relación entre continuidad normativa, ejercicio de las competencias, actuaciones verificables y garantías institucionales destinadas a impedir abusos. La categoría funciona como una herramienta interpretativa para reconocer tanto las transformaciones efectivas como las continuidades que requieren examen adicional.',
      },
    ],
  },
  {
    h: {
      en: 'Sources, comparison and documentary traceability',
      es: 'Fuentes, contraste y trazabilidad documental',
    },
    p: [
      {
        en: 'Our corpus includes official gazettes of the Bolivarian Republic of Venezuela, legislative instruments, Supreme Court rulings, reports of the Independent International Fact-Finding Mission on Venezuela, documentation by human rights organizations and identifiable press reports.',
        es: 'Nuestro corpus comprende gacetas oficiales de la República Bolivariana de Venezuela, instrumentos legislativos, decisiones del Tribunal Supremo de Justicia, informes de la Misión Internacional Independiente de Determinación de los Hechos sobre Venezuela, documentación de organismos de derechos humanos y publicaciones periodísticas identificables.',
      },
      {
        en: 'We distinguish legal, judicial, institutional, international and press sources by their capacity to prove specific facts. Official documents establish formal decisions and powers; international reports provide findings and allegations that must be read within their scope; press reports help reconstruct events and compare versions.',
        es: 'Diferenciamos las fuentes normativas, judiciales, institucionales, internacionales y periodísticas por su capacidad para acreditar hechos específicos. Los documentos oficiales permiten constatar decisiones y atribuciones formales; los informes internacionales aportan hallazgos y denuncias que deben interpretarse conforme a su alcance; las publicaciones periodísticas contribuyen a reconstruir acontecimientos y contrastar versiones.',
      },
      {
        en: 'Every link in the org chart and every event in the timeline points to an identified source. We distinguish established facts, statements attributed to third parties and inferences drawn from the documents as a whole. The signature crops come from the gazettes themselves; the yellow highlighting is ours and ID numbers were covered. Portraits are only used when they carry a free license; when none exists, we show the public-domain emblem of the agency the person heads.',
        es: 'Cada vínculo representado en el organigrama y cada acontecimiento incorporado a la cronología remite a una fuente identificada. Distinguimos los hechos acreditados, las afirmaciones atribuidas a terceros y las inferencias elaboradas a partir del conjunto documental. Los recortes de las firmas salen de las propias gacetas; el resaltado amarillo es nuestro y tapamos los números de cédula. Solo usamos retratos con licencia libre; si no existe ninguno, mostramos el escudo (de dominio público) del organismo que la persona dirige.',
      },
    ],
  },
  {
    h: {
      en: 'Scope and limits of the investigation',
      es: 'Alcance y límites de la investigación',
    },
    p: [
      {
        en: 'Reconstructing an institutional chain of command is not, by itself, proof of individual responsibility for human rights violations. Likewise, signing a rule proves formal participation in that instrument, but does not automatically show the signer’s involvement in later actions.',
        es: 'La reconstrucción de una cadena institucional de mando no constituye, por sí misma, prueba de responsabilidad individual por violaciones de derechos humanos. Del mismo modo, la firma de una norma acredita una participación formal en el instrumento correspondiente, pero no demuestra automáticamente la intervención de quien la suscribe en actuaciones posteriores.',
      },
      {
        en: 'Relationships without sufficient public confirmation are flagged as such. When versions contradict each other, we keep their attribution and avoid presenting as proven what remains to be verified. Allegations against specific people are cited as what they are: allegations attributed to whoever makes them.',
        es: 'Las relaciones que no cuentan con confirmación pública suficiente se identifican expresamente. Cuando existen versiones contradictorias, conservamos su atribución y evitamos presentar como demostrado aquello que permanece pendiente de verificación. Las acusaciones contra personas concretas se citan como lo que son: denuncias atribuidas a quien las hace.',
      },
      {
        en: 'This methodological design examines the transformation of Venezuelan power through a question of institutional scope: what changed in the leadership of the State, which powers and capacities remained, and which later actions help explain the consequences of that continuity for the exercise of political rights. The investigation thus leaves open a line of analysis on the relationship between the formal transformations of power, the persistence of its coercive capacities and the guarantees needed to prevent their use against people for their real or attributed political opinion.',
        es: 'Esta arquitectura metodológica permite examinar la transformación del poder venezolano mediante una pregunta de alcance institucional: qué cambió en la conducción del Estado, qué competencias y capacidades permanecieron y qué actuaciones posteriores permiten comprender las consecuencias de esa continuidad sobre el ejercicio de los derechos políticos. La investigación deja así abierta una línea de análisis sobre la relación entre las transformaciones formales del poder, la persistencia de sus capacidades coercitivas y las garantías necesarias para evitar su utilización contra personas por su opinión política real o atribuida.',
      },
    ],
  },
];

/** VenApp section texts (Minerva Mendoza Paipa, 2026-10-22; facts checked on that date). */
export const VA_TEXT = {
  intro: {
    en: 'VenApp was presented in 2022 as a tool to report problems with public services. During the 2024 post-election crisis, Amnesty International denounced its use to point out people identified with the opposition. In October 2025, Nicolás Maduro asked people to use it to report everything they see and hear.\\n\\nThe relevance of this change does not lie only in the technology. A platform that records information about third parties can become a tool of political control when the reports are used to identify, intimidate or persecute people for their real or attributed opinions.\\n\\nIn June 2026, under Delcy Rodríguez’s acting presidency, VenApp was officially activated again as an emergency channel. This documents the continuity of its institutional use after Maduro, although it does not establish that the political-reporting functions remained active.',
    es: 'VenApp fue presentada en 2022 como una herramienta para comunicar problemas de servicios públicos. Durante la crisis postelectoral de 2024, Amnistía Internacional denunció su utilización para señalar a personas identificadas con la oposición. En octubre de 2025, Nicolás Maduro pidió usarla para reportar todo lo que se ve y se oye.\\n\\nLa relevancia de esta transformación no reside únicamente en la tecnología. Una plataforma que permite registrar información sobre terceros puede convertirse en un instrumento de control político cuando los reportes se utilizan para identificar, intimidar o perseguir a personas por sus opiniones reales o atribuidas.\\n\\nEn junio de 2026, bajo la Presidencia encargada de Delcy Rodríguez, VenApp volvió a ser activada oficialmente como canal de atención de emergencias. Este hecho documenta la continuidad de su utilización institucional después de Maduro, aunque no permite establecer que las funcionalidades de denuncia política permanecieran activas.',
  },
  cidh: {
    en: 'In its 2025 annual report, the IACHR warned that citizens are forced to hand over sensitive information through platforms such as VenApp and criticized official campaigns that urged people to report their neighbors (paras. 127–128).',
    es: 'En su informe anual de 2025, la CIDH advirtió que la ciudadanía se ve obligada a entregar información sensible mediante plataformas como VenApp y criticó las campañas oficiales que instaron a delatar a vecinos (párrs. 127–128).',
  },
  pull: {
    en: 'A platform can keep its public function and, at the same time, raise questions about the political uses of the information it receives. Technological continuity calls for examining who manages the data, who can use it and what controls protect people identified by their political opinions.',
    es: 'Una plataforma puede conservar su función pública y, al mismo tiempo, plantear interrogantes sobre los usos políticos de la información que recibe. La continuidad tecnológica exige examinar quién administra los datos, quién puede utilizarlos y qué controles protegen a las personas identificadas por sus opiniones políticas.',
  },
};

/** "Crystal Vault" section (proposed by Minerva Mendoza Paipa, 2026-10-22; facts checked on that date). */
export const VAULT = {
  intro: {
    en: 'Political surveillance can reach beyond cameras, citizen reports and the monitoring of communications. It can also work through the integration of the administrative records that allow the State to identify people, know their movements and manage their access to services.',
    es: 'La vigilancia política puede extenderse más allá de las cámaras, las denuncias ciudadanas y el monitoreo de comunicaciones. También puede operar mediante la integración de los registros administrativos que permiten al Estado identificar a las personas, conocer sus movimientos y gestionar su acceso a servicios.',
  },
  body: {
    en: 'On 26 December 2025, journalist Milagros Socorro published in La Gran Aldea “A crystal vault”, a column based on anonymous technical sources about an alleged technological architecture that would interconnect the data of SAIME (identity and migration), the public banks and the Patria system. According to the text, those databases were merged “into a single centralized node”, which would make it possible to relate identity, movement and financial information and to restrict certain services automatically. El Tiempo picked up the story on 31 December.\\n\\nIn July 2026 the European Union Agency for Asylum (EUAA) cited that text in its report Venezuela: Country Focus, in the section on monitoring mechanisms. In March 2026, DFRLab and Conexión Segura y Libre published Watch the Watchers, a report on surveillance technologies for political control which says that infrastructure remains fully operational under Delcy Rodríguez’s acting presidency.\\n\\nSystems that collect and cross-reference data raise a specific dimension of political control: the possibility of identifying people and relating their activities without constant physical surveillance. However, the full deployment and actual functioning of the capabilities attributed to the “Crystal Vault” require further technical verification.\\n\\nThe question this background adds to our investigation is the continuity of the State’s digital infrastructure after January 2026, its capacity to relate citizens’ information and the guarantees available against possible discriminatory or persecutory uses against people for their real or attributed political opinion.',
    es: 'El 26 de diciembre de 2025, la periodista Milagros Socorro publicó en La Gran Aldea «Una bóveda de cristal», una columna basada en fuentes técnicas anónimas sobre una presunta arquitectura tecnológica que interconectaría los datos del SAIME, la banca pública y el Sistema Patria. Según el texto, esas bases de datos se fundieron «en un solo nodo centralizado», lo que permitiría relacionar información de identidad, movilidad y operaciones financieras, así como restringir de forma automatizada determinados servicios. El Tiempo recogió la noticia el 31 de diciembre.\\n\\nEn julio de 2026, la Agencia de Asilo de la Unión Europea (EUAA) citó ese texto en su informe Venezuela: Country Focus, en el apartado sobre mecanismos de vigilancia. En marzo de 2026, el DFRLab y Conexión Segura y Libre publicaron Los vigilantes en la mira, un informe sobre tecnologías de vigilancia para el control político que sostiene que esa infraestructura sigue plenamente operativa bajo la Presidencia encargada de Delcy Rodríguez.\\n\\nLa existencia de sistemas de recopilación y cruce de datos plantea una dimensión específica del control político: la posibilidad de identificar personas y relacionar sus actividades sin necesidad de vigilancia física permanente. Sin embargo, la implantación íntegra y el funcionamiento concreto de las capacidades atribuidas a la «Bóveda de Cristal» requieren verificación técnica adicional.\\n\\nLa cuestión que incorpora este antecedente a nuestra investigación es la continuidad de la infraestructura digital del Estado después de enero de 2026, su capacidad para relacionar información ciudadana y las garantías disponibles frente a posibles usos discriminatorios o persecutorios contra personas por su opinión política real o atribuida.',
  },
  bodySrc: [[51, 52], [53, 54], [], []] as number[][],
  concept: {
    en: '“Data interoperability with coercive potential”: the possibility that information collected for administrative purposes is integrated and used to identify, classify or restrict people.',
    es: '«Interoperabilidad de datos con potencial coercitivo»: la posibilidad de que información recogida para finalidades administrativas sea integrada y utilizada para identificar, clasificar o restringir a personas.',
  },
  nodes: [
    { name: { en: 'SAIME', es: 'SAIME' }, what: { en: 'Identity and migration records', es: 'Identidad y movimientos migratorios' } },
    { name: { en: 'Patria system', es: 'Sistema Patria' }, what: { en: 'Personal and family data, social benefits', es: 'Información personal, familiar y beneficios' } },
    { name: { en: 'Public banks', es: 'Banca pública' }, what: { en: 'Financial operations and information', es: 'Operaciones e información financiera' } },
  ],
  hub: { en: '“A single centralized node”, according to La Gran Aldea', es: '«Un solo nodo centralizado», según La Gran Aldea' },
  result: { en: 'Cross-referencing and identification: the described possibility of relating identity, movements and financial operations, and of restricting services', es: 'Cruce e identificación de información: la posibilidad descrita de relacionar identidad, movimientos y operaciones, y de restringir servicios' },
  caption: { en: 'Diagram by Venezuela Record based on the description in La Gran Aldea. Its full deployment has not been technically verified.', es: 'Esquema de Venezuela Record a partir de la descripción de La Gran Aldea. Su implantación íntegra no ha sido verificada técnicamente.' },
};

/** Step 2 panel: the three key decrees (Minerva Mendoza Paipa's sketch). */
export const STEP_DECREES: { n: string; date: L; text: L; src: number[] }[] = [
  { n: '5.203', date: { en: '6 January 2026', es: '6 de enero de 2026' }, text: { en: 'Appoints Gustavo González López director of the DGCIM.', es: 'Designa a Gustavo González López director de la DGCIM.' }, src: [26, 3] },
  { n: '5.277', date: { en: '18 March 2026', es: '18 de marzo de 2026' }, text: { en: 'Appoints Gustavo González López Minister of Defense.', es: 'Designa a Gustavo González López ministro de Defensa.' }, src: [56] },
  { n: '5.284', date: { en: '18 March 2026', es: '18 de marzo de 2026' }, text: { en: 'Appoints Germán Edoardo Gómez Lárez director of the DGCIM.', es: 'Designa a Germán Edoardo Gómez Lárez director de la DGCIM.' }, src: [37, 6] },
];

/** Step 3 panel: the two chains of command and the territory (Minerva Mendoza Paipa's sketch). */
export const STEP_COMMAND = {
  cols: [
    {
      tone: 'int',
      head: { en: 'Interior Ministry', es: 'Ministerio del Interior' },
      who: 'Diosdado Cabello',
      items: [
        { name: { en: 'National Police (PNB)', es: 'Policía Nacional (PNB)' }, how: { en: 'Reports to Interior (legal command)', es: 'Adscrita a Interior (mando legal)' }, src: [10] },
        { name: { en: 'CICPC (criminal police)', es: 'CICPC (policía científica)' }, how: { en: 'Reports to Interior (legal command)', es: 'Adscrito a Interior (mando legal)' }, src: [10] },
        { name: { en: 'State police forces', es: 'Policías estadales' }, how: { en: 'Interior governs the police service (coordination)', es: 'Interior es el órgano rector del servicio de policía (coordinación)' }, src: [39] },
      ],
    },
    {
      tone: 'def',
      head: { en: 'Defense Ministry', es: 'Ministerio de Defensa' },
      who: 'Gustavo González López',
      items: [
        { name: { en: 'Armed Forces (FANB)', es: 'Fuerza Armada (FANB)' }, how: { en: 'Institutional command', es: 'Mando institucional' }, src: [7] },
        { name: { en: 'National Guard', es: 'Guardia Nacional' }, how: { en: 'FANB component; not reformed, says the UN (para. 46)', es: 'Componente de la FANB; sin reforma, según la ONU (párr. 46)' }, src: [1] },
        { name: { en: 'Bolivarian Militia', es: 'Milicia Bolivariana' }, how: { en: 'Security and defense with communal councils and communes, by law', es: 'Seguridad y defensa con consejos comunales y comunas, prevista por ley' }, src: [32, 35] },
      ],
    },
  ],
  ground: [
    { tone: 'un', name: { en: 'Colectivos', es: 'Colectivos' }, how: { en: 'De facto links with police and intelligence documented by the UN (paras. 93–96)', es: 'Vínculos de hecho con policías e inteligencia documentados por la ONU (párrs. 93–96)' }, src: [1] },
    { tone: 'law', name: { en: 'Communal councils and communes', es: 'Consejos comunales y comunas' }, how: { en: 'Security and defense tasks set by law, jointly with the Militia', es: 'Tareas de seguridad y defensa previstas por ley, junto con la Milicia' }, src: [32, 35] },
  ],
  result: { en: 'Documented actions against people perceived as opponents (step 4)', es: 'Actuaciones documentadas contra personas percibidas como opositoras (paso 4)' },
};
