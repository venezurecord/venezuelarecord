import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Editorial rules (docs/BRIEF.md §2–3) are enforced here: the build FAILS if a
// news item is missing credits, so nothing can be published without them.
export const CATEGORIES = [
  'Political prisoners',
  'Repression & human rights',
  'Elections & power',
  'International pressure',
  'Country situation',
  'Opposition & resistance',
  'Opinion',
] as const;

export const REPUBLISHERS = ['Roger Q.', 'Eyleen V.'] as const;

const news = defineCollection({
  // Files live in src/content/news/YYYY/YYYY-MM-DD-<slug>.md(x).
  // The entry id (used in /news/<slug>) is the file name without the date prefix.
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: './src/content/news',
    generateId: ({ entry }) =>
      entry
        .split('/')
        .pop()!
        .replace(/\.(md|mdx)$/, '')
        .replace(/^\d{4}-\d{2}-\d{2}-/, ''),
  }),
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
        image: image().optional(), // required when sourceTier = "A"
        imageCredit: z.string().optional(), // required when there is an image
        imageAlt: z.string().optional(),
        imageLicense: z.string().optional(), // only for tier B with a free license
        featured: z.boolean().default(false),
        draft: z.boolean().default(false),
        needsTranslation: z.boolean().default(false), // true = still in Spanish; not published
      })
      .superRefine((d, ctx) => {
        if (d.sourceTier === 'A' && !d.image)
          ctx.addIssue({ code: 'custom', path: ['image'], message: 'Tier A requires the original image' });
        if (d.image && !d.imageCredit)
          ctx.addIssue({ code: 'custom', path: ['imageCredit'], message: 'imageCredit is required' });
        if (d.image && !d.imageAlt)
          ctx.addIssue({ code: 'custom', path: ['imageAlt'], message: 'imageAlt (English) is required' });
        if (d.sourceTier === 'B' && d.image && !d.imageLicense)
          ctx.addIssue({ code: 'custom', path: ['imageLicense'], message: 'Tier B images need a free license' });
        if (d.republishedDate < d.originalDate)
          ctx.addIssue({
            code: 'custom',
            path: ['republishedDate'],
            message: 'republishedDate cannot be earlier than originalDate',
          });
      }),
});

export const collections = { news };
