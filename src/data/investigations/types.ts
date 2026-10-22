// Shared shapes for original investigations (/investigations/<slug>/).
// Every text is bilingual: { en, es }. Sources are referenced by number.
import type { ImageMetadata } from 'astro';
import type { Lang } from '../../i18n/ui';

export type L = Record<Lang, string>;

export interface Source {
  id: number;
  /** Outlet or issuing body, e.g. "UN Fact-Finding Mission" */
  outlet: string;
  title: L;
  date?: string; // human date in the source's terms, e.g. "16 Sep 2026"
  url?: string;
}

export interface InvestigationMeta {
  slug: string;
  title: L;
  subtitle: L;
  /** Short card text for the home page and the index */
  summary: L;
  /** ISO date of first publication and of the last fact check */
  published: string;
  updated: string;
  /** Who proposed the idea (credited, never as author) */
  ideaBy: string;
  /** Optional standfirst shown right under the cover. */
  intro?: L;
  cover?: ImageMetadata;
  /** Credit for a cover that uses third-party material (license requires it next to the image). */
  coverCredit?: { text: L; url?: string };
  /** Optional full-width photo band in the page hero. */
  hero?: ImageMetadata;
  /** Text description of the hero image. */
  heroAlt?: L;
  social: Record<Lang, ImageMetadata>;
}

export const pick = (v: L, lang: Lang) => v[lang];
