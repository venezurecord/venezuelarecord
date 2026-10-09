# Venezuela Record

A chronological record of Venezuela's political news, republished from the original sources with full credit
(original author, outlet, date and link).

- Site (test): https://venezuelarecord.pages.dev
- Stack: [Astro](https://astro.build) static site + Content Collections, hosted on Cloudflare Pages.
- News are Markdown files in `src/content/news/YYYY/`. The build fails if any item is missing its credits.

## Development

```sh
npm install
npm run dev      # local server
npm run build    # production build (validates the content schema)
npm run check    # type check
```

Editorial rules and the full project brief: [docs/BRIEF.md](docs/BRIEF.md).

Corrections and takedown requests: venezurecord@gmail.com
