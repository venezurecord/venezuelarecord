// Phone "tiles": cards collapsed into boxes that expand on tap (signatures, gazettes). One open at a time.
// The CSS only collapses them when this script has run (root gets .tiles-on) and on screens under 900 px.
export function initTiles(selector: string) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll<HTMLElement>(selector).forEach((root) => {
    root.classList.add('tiles-on');
    const tiles = [...root.querySelectorAll<HTMLElement>('[data-tile]')];
    const set = (t: HTMLElement, open: boolean) => {
      t.classList.toggle('is-open', open);
      t.querySelector('.tile-btn')?.setAttribute('aria-expanded', String(open));
    };
    root.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest<HTMLElement>('.tile-btn');
      if (!btn || !root.contains(btn)) return;
      const tile = btn.closest<HTMLElement>('[data-tile]')!;
      const open = !tile.classList.contains('is-open');
      tiles.forEach((t) => t !== tile && set(t, false));
      set(tile, open);
      requestAnimationFrame(() => tile.scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' }));
    });
  });
}
