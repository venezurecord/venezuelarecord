import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from './constants';
import { authorCredit, categoryName, getStories, storyUrl } from './news';
import { LANG_META, localePath, t, type Lang } from '../i18n/ui';

/** RSS feed per language, newest first by ORIGINAL publication date. */
export async function rssFeed(lang: Lang, context: APIContext) {
  const stories = (await getStories(lang)).slice(0, 50);
  return rss({
    title: `${SITE.name} (${LANG_META[lang].label})`,
    description: t(lang, 'site.description'),
    site: new URL(localePath(lang, '/'), context.site!).href,
    trailingSlash: true,
    customData: `<language>${LANG_META[lang].intl}</language>`,
    items: stories.map((s) => ({
      title: s.title,
      link: storyUrl(s),
      pubDate: s.data.originalDate,
      description: `${s.summary} — ${t(lang, 'credits.originallyPublished')} ${s.data.sourceName}. ${t(lang, 'credits.writtenBy')} ${authorCredit(s)}.`,
      categories: [categoryName(lang, s.data.category)],
    })),
  });
}
