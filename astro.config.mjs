// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Test domain. Switch to https://venezuelarecord.com in Phase 7.
  site: 'https://venezuelarecord.pages.dev',
  // Cloudflare Pages serves /about/index.html at /about/ — keep URLs and canonicals identical.
  trailingSlash: 'always',
  build: { format: 'directory' },
  // Google Fonts (Source Serif 4 + Inter, font-display: swap), downloaded at build time and
  // served from our own domain with size-adjusted fallbacks, so text does not jump on load.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Source Serif 4',
      cssVariable: '--font-serif',
      weights: [400, 600, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'latin-ext'],
      display: 'swap',
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      display: 'swap',
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !/\/404\/?$/.test(page),
      i18n: { defaultLocale: 'en', locales: { en: 'en', es: 'es' } },
    }),
  ],
  // English at "/", Spanish at "/es/". Visitors are sent to their browser's
  // language by functions/_middleware.js (Cloudflare Pages).
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
});
