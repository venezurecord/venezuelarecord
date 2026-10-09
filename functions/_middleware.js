// Cloudflare Pages Function: send each visitor to their browser's language.
//
// English lives at "/", Spanish at "/es/". On an HTML page request:
//   1. "?setlang=en|es" (the header language link) saves the choice in a cookie
//      and redirects to the clean URL — works without JavaScript.
//   2. Otherwise the "vr_lang" cookie wins.
//   3. Otherwise the browser's Accept-Language decides (es → Spanish, en → English).
//      Other languages and crawlers (no Accept-Language) get the page they asked for,
//      so search engines index both editions (linked with hreflang).
// Only routes listed in public/_routes.json reach this function.

const COOKIE = 'vr_lang';
const LANGS = ['en', 'es'];
const ONE_YEAR = 60 * 60 * 24 * 365;

const isSpanishPath = (p) => p === '/es' || p.startsWith('/es/');
const toLang = (p, lang) => {
  const base = isSpanishPath(p) ? p.replace(/^\/es/, '') || '/' : p;
  return lang === 'es' ? `/es${base}` : base;
};

function readCookie(request) {
  const m = (request.headers.get('Cookie') || '').match(/(?:^|;\s*)vr_lang=(en|es)\b/);
  return m ? m[1] : null;
}

/** First supported language in the Accept-Language list, by quality. */
function fromAcceptLanguage(header) {
  if (!header) return null;
  const ranked = header
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().toLowerCase().split(';');
      const q = params.find((p) => p.trim().startsWith('q='));
      return { lang: tag.split('-')[0], q: q ? Number(q.split('=')[1]) || 0 : 1 };
    })
    .filter((x) => x.q > 0)
    .sort((a, b) => b.q - a.q);
  return ranked.find((x) => LANGS.includes(x.lang))?.lang ?? null;
}

function redirect(location, cookieLang) {
  const headers = new Headers({
    Location: location,
    'Cache-Control': 'private, no-store',
    Vary: 'Accept-Language, Cookie',
  });
  if (cookieLang) headers.append('Set-Cookie', `${COOKIE}=${cookieLang}; Path=/; Max-Age=${ONE_YEAR}; SameSite=Lax; Secure`);
  return new Response(null, { status: 302, headers });
}

export async function onRequest(context) {
  const { request, next, env } = context;
  if (request.method !== 'GET' && request.method !== 'HEAD') return next();

  const url = new URL(request.url);

  // 1. Explicit choice from the language link.
  const chosen = url.searchParams.get('setlang');
  if (LANGS.includes(chosen)) {
    url.searchParams.delete('setlang');
    return redirect(toLang(url.pathname, chosen) + url.search + url.hash, chosen);
  }

  // Only HTML navigations are redirected.
  if (!(request.headers.get('Accept') || '').includes('text/html')) return next();

  const preferred = readCookie(request) ?? fromAcceptLanguage(request.headers.get('Accept-Language'));
  const current = isSpanishPath(url.pathname) ? 'es' : 'en';

  if (preferred && preferred !== current) {
    const target = toLang(url.pathname, preferred);
    // Only redirect when the page exists in the other language.
    const probe = await env.ASSETS.fetch(new Request(new URL(target, url.origin), { method: 'HEAD' }));
    if (probe.ok || (probe.status >= 300 && probe.status < 400)) return redirect(target + url.search);
  }

  const response = await next();
  const out = new Response(response.body, response);
  out.headers.append('Vary', 'Accept-Language, Cookie');
  return out;
}
