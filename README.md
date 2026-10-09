# Venezuela Record

A chronological record of Venezuela's political news, in English and Spanish, republished from the original
sources with full credit (original author, outlet, date and link).

- Site (test): https://venezuelarecord.pages.dev
- Stack: [Astro](https://astro.build) static site + Content Collections, hosted on Cloudflare Pages.
- News are Markdown files: English + metadata in `src/content/news/YYYY/`, Spanish in `src/content/news-es/YYYY/`
  (same file name). The build fails if any item is missing its credits or its Spanish version.
- English at `/`, Spanish at `/es/`; `functions/_middleware.js` sends visitors to their browser's language.

## Development

```sh
npm install
npm run dev      # local server
npm run build    # production build (validates the content schema)
npm run check    # type check
```

Editorial rules and the full project brief: [docs/BRIEF.md](docs/BRIEF.md).

Corrections and takedown requests: venezurecord@gmail.com
