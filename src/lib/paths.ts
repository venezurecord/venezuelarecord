// getStaticPaths helpers shared by the English ("/") and Spanish ("/es/") routes.
import { AUTHORIZED_SOURCES, CATEGORIES, CATEGORY_INFO, type Category } from './constants';
import { chunk, getStories, slugify, type Story } from './news';
import type { Lang } from '../i18n/ui';

export const PAGE_SIZE = 12;

export interface ListPageProps {
  stories: Story[];
  current: number;
  total: number;
}

const paginate = (stories: Story[]) => {
  const pages = chunk(stories, PAGE_SIZE);
  return pages.map((items, i) => ({
    page: i === 0 ? undefined : String(i + 1),
    props: { stories: items, current: i + 1, total: pages.length } satisfies ListPageProps,
  }));
};

export async function storyPaths(lang: Lang) {
  return (await getStories(lang)).map((story) => ({ params: { slug: story.id }, props: { story } }));
}

/** Every category gets a page, even while empty, so the navigation never 404s. */
export async function categoryPaths(lang: Lang) {
  const stories = await getStories(lang);
  return CATEGORIES.flatMap((category: Category) =>
    paginate(stories.filter((s) => s.data.category === category)).map(({ page, props }) => ({
      params: { slug: CATEGORY_INFO[category].slug, page },
      props: { ...props, category },
    })),
  );
}

/** Authorized sources always get a page; other outlets once they have a story. */
export async function sourcePaths(lang: Lang) {
  const stories = await getStories(lang);
  const names = [...new Set([...AUTHORIZED_SOURCES.map((s) => s.name), ...stories.map((s) => s.data.sourceName)])];
  return names.flatMap((sourceName) =>
    paginate(stories.filter((s) => s.data.sourceName === sourceName)).map(({ page, props }) => ({
      params: { slug: slugify(sourceName), page },
      props: { ...props, sourceName },
    })),
  );
}
