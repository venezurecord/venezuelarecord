// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Test domain. Switch to https://venezuelarecord.com in Phase 7.
  site: 'https://venezuelarecord.pages.dev',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  // English only for now. Prepared so a Spanish edition can live under /es/
  // later without moving existing content (add 'es' to locales).
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    routing: { prefixDefaultLocale: false },
  },
});
