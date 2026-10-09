// Shared constants. Imported by the content schema and by the templates, so the
// category list and the republishers can never drift apart.

export const SITE = {
  name: 'Venezuela Record',
  email: 'venezurecord@gmail.com',
} as const;

export const CATEGORIES = [
  'Political prisoners',
  'Repression & human rights',
  'Elections & power',
  'International pressure',
  'Country situation',
  'Opposition & resistance',
  'Opinion',
] as const;

export type Category = (typeof CATEGORIES)[number];

interface CategoryLabels {
  name: string;
  short: string;
  description: string;
}

/** URL slug and per-language labels for each category (the enum value is the English name). */
export const CATEGORY_INFO: Record<Category, { slug: string; en: CategoryLabels; es: CategoryLabels }> = {
  'Political prisoners': {
    slug: 'political-prisoners',
    en: {
      name: 'Political prisoners',
      short: 'Political prisoners',
      description: 'Arrests, detentions, releases and the situation of political prisoners in Venezuela.',
    },
    es: {
      name: 'Presos políticos',
      short: 'Presos políticos',
      description: 'Detenciones, excarcelaciones y la situación de los presos políticos en Venezuela.',
    },
  },
  'Repression & human rights': {
    slug: 'human-rights',
    en: {
      name: 'Repression & human rights',
      short: 'Human rights',
      description: 'Repression, persecution and human rights violations in Venezuela.',
    },
    es: {
      name: 'Represión y derechos humanos',
      short: 'Derechos humanos',
      description: 'Represión, persecución y violaciones de derechos humanos en Venezuela.',
    },
  },
  'Elections & power': {
    slug: 'elections-and-power',
    en: {
      name: 'Elections & power',
      short: 'Elections & power',
      description: 'Elections, institutions and the struggle for power in Venezuela.',
    },
    es: {
      name: 'Elecciones y poder',
      short: 'Elecciones y poder',
      description: 'Elecciones, instituciones y la lucha por el poder en Venezuela.',
    },
  },
  'International pressure': {
    slug: 'international',
    en: {
      name: 'International pressure',
      short: 'International',
      description: 'International decisions, sanctions and diplomacy that affect Venezuela politically.',
    },
    es: {
      name: 'Presión internacional',
      short: 'Internacional',
      description: 'Decisiones internacionales, sanciones y diplomacia que afectan políticamente a Venezuela.',
    },
  },
  'Country situation': {
    slug: 'country-situation',
    en: {
      name: 'Country situation',
      short: 'Country situation',
      description: "Venezuela's economy, public services and humanitarian crisis in their political dimension.",
    },
    es: {
      name: 'Situación del país',
      short: 'Situación del país',
      description: 'Economía, servicios públicos y crisis humanitaria de Venezuela en su dimensión política.',
    },
  },
  'Opposition & resistance': {
    slug: 'opposition-and-resistance',
    en: {
      name: 'Opposition & resistance',
      short: 'Opposition',
      description: 'The democratic opposition, its leaders and civic resistance.',
    },
    es: {
      name: 'Oposición y resistencia',
      short: 'Oposición',
      description: 'La oposición democrática, sus líderes y la resistencia cívica.',
    },
  },
  Opinion: {
    slug: 'opinion',
    en: {
      name: 'Opinion',
      short: 'Opinion',
      description: 'Opinion pieces from our authorized sources about facts within our scope.',
    },
    es: {
      name: 'Opinión',
      short: 'Opinión',
      description: 'Artículos de opinión de nuestras fuentes autorizadas sobre hechos de nuestro alcance.',
    },
  },
};

/** Categories listed in the main navigation, in order. */
export const NAV_CATEGORIES: Category[] = [
  'Political prisoners',
  'Repression & human rights',
  'Elections & power',
  'International pressure',
  'Country situation',
];

export const REPUBLISHERS = ['Roger Q.', 'Eyleen V.'] as const;

/** Tier A sources: authorized, full text republished with permission. */
export const AUTHORIZED_SOURCES = [
  {
    name: 'Voluntad Popular',
    url: 'https://voluntadpopular.com/',
    description: {
      en: 'Venezuelan democratic opposition party.',
      es: 'Partido de la oposición democrática venezolana.',
    },
  },
  {
    name: 'VenAmérica',
    url: 'https://venamerica.org/home/',
    description: {
      en: 'Venezuelan-American civic organization.',
      es: 'Organización cívica venezolano-americana.',
    },
  },
] as const;

/** Tier B summaries are limited to this many words (never the full text). */
export const TIER_B_SUMMARY_MAX_WORDS = 60;
