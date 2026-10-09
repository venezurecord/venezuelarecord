import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORIES, REPUBLISHERS, TIER_B_SUMMARY_MAX_WORDS } from './lib/constants';

// Editorial rules (docs/BRIEF.md §2–3) are enforced here: the build FAILS if a
// news item is missing credits, so nothing can be published without them.

// The entry id (used in /news/<slug>/) is the file name without the date prefix.
const idFromFile = ({ entry }: { entry: string }) =>
  entry
    .split('/')
    .pop()!
    .replace(/\.(md|mdx)$/, '')
    .replace(/^\d{4}-\d{2}-\d{2}-/, '');

// English version + ALL the metadata (dates, source, credits, image).
// Files: src/content/news/YYYY/YYYY-MM-DD-<slug>.md
const news = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/news', generateId: idFromFile }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string().min(1), // English title
        originalTitle: z.string().min(1), // original (Spanish) title
        summary: z.string().min(1).max(400), // English summary (cards, SEO)
        originalDate: z.coerce.date(), // ORDERS THE WHOLE SITE
        republishedDate: z.coerce.date(),
        republishedBy: z.enum(REPUBLISHERS),
        sourceName: z.string().min(1), // "Voluntad Popular", "VenAmérica", "Foro Penal"...
        sourceUrl: z.url(), // link to the original story
        sourceTier: z.enum(['A', 'B']),
        originalAuthor: z.string().default(''), // empty => "Staff, <sourceName>"
        category: z.enum(CATEGORIES),
        tags: z.array(z.string()).default([]),
        image: image().optional(), // tier A: the original photo; none => source card
        imageCredit: z.string().optional(), // required when there is an image
        imageAlt: z.string().optional(),
        imageLicense: z.string().optional(), // required for any photo not taken from the source (free license)
        featured: z.boolean().default(false),
        draft: z.boolean().default(false),
        needsTranslation: z.boolean().default(false), // true = still in Spanish; not published
      })
      .superRefine((d, ctx) => {
        if (d.image && !d.imageCredit)
          ctx.addIssue({ code: 'custom', path: ['imageCredit'], message: 'imageCredit is required' });
        if (d.image && !d.imageAlt)
          ctx.addIssue({ code: 'custom', path: ['imageAlt'], message: 'imageAlt (English) is required' });
        if (d.sourceTier === 'B' && d.image && !d.imageLicense)
          ctx.addIssue({ code: 'custom', path: ['imageLicense'], message: 'Tier B images need a free license' });
        if (d.sourceTier === 'B') {
          const words = d.summary.trim().split(/\s+/).length;
          if (words > TIER_B_SUMMARY_MAX_WORDS)
            ctx.addIssue({
              code: 'custom',
              path: ['summary'],
              message: `Tier B summary must be ${TIER_B_SUMMARY_MAX_WORDS} words or fewer (has ${words})`,
            });
        }
        if (d.republishedDate < d.originalDate)
          ctx.addIssue({
            code: 'custom',
            path: ['republishedDate'],
            message: 'republishedDate cannot be earlier than originalDate',
          });
      }),
});

// Spanish version of the same story, same file name under src/content/news-es/.
// Only the text lives here; metadata always comes from the English file.
// Tier A: the ORIGINAL Spanish text, untouched. Tier B: our own summary in Spanish.
const newsEs = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/news-es', generateId: idFromFile }),
  schema: z.object({
    title: z.string().min(1),
    summary: z.string().min(1).max(400),
    imageAlt: z.string().optional(), // Spanish alt text; falls back to the English one
  }),
});

export const collections = { news, newsEs };
