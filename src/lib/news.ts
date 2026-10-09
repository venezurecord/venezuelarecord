import { getCollection, type CollectionEntry } from 'astro:content';

export type NewsEntry = CollectionEntry<'news'>;

/**
 * Production = the build Cloudflare Pages runs for `main`.
 * PR previews (any other branch) and local dev also show drafts and items
 * pending translation, labelled "Pending translation".
 * SHOW_DRAFTS=1 / SHOW_DRAFTS=0 overrides it for local testing.
 */
export const IS_PRODUCTION = (() => {
  const override = process.env.SHOW_DRAFTS;
  if (override === '1') return false;
  if (override === '0') return true;
  const branch = process.env.CF_PAGES_BRANCH;
  if (branch) return branch === 'main';
  return import.meta.env.PROD;
})();

export const isPending = (n: NewsEntry) => n.data.draft || n.data.needsTranslation;

/** Newest first by ORIGINAL publication date (never by republication date). */
export const byOriginalDateDesc = (a: NewsEntry, b: NewsEntry) =>
  b.data.originalDate.getTime() - a.data.originalDate.getTime() || a.id.localeCompare(b.id);

export async function getNews(): Promise<NewsEntry[]> {
  const all = await getCollection('news', (n) => !IS_PRODUCTION || !isPending(n));
  return all.sort(byOriginalDateDesc);
}
