# Cover, hero and social background for investigation 2 ("residual-capacity-2026"): an open cell door whose
# bars still cast their shadow on the floor. AI-generated illustration (Google Flow, Nano Banana) made for
# Venezuela Record on 2026-10-20, chosen by the editor; the 2K master is kept in brand/investigations/residual-capacity-2026/.
# It is always labelled as an AI illustration on the site (META.coverCredit). No text in these files: the page puts
# the headline over the hero in HTML, and scripts/investigation-social-2.mjs adds it to the social images.
#   python scripts/investigation-cover-2.py   (needs Pillow), then: node scripts/investigation-social-2.mjs
from PIL import Image

BRAND = 'brand/investigations/residual-capacity-2026'
ASSETS = 'src/assets/investigations/residual-capacity-2026'
im = Image.open(f'{BRAND}/celda-abierta-flow.jpg').convert('RGB')  # 2752x1536
W, H = im.size


def crop(ratio, cy=0.5):
    """Full-width crop at the given ratio, vertical centre cy (0 top, 1 bottom)."""
    ch = round(W / ratio)
    y0 = max(0, min(H - ch, round(cy * H - ch / 2)))
    return im.crop((0, y0, W, y0 + ch))


# Home / index card (1200x630): a little more floor than ceiling so the bar shadows stay in.
crop(1200 / 630, 0.52).resize((1200, 630), Image.LANCZOS).save(f'{ASSETS}/cover.jpg', quality=88, optimize=True, progressive=True)
# Page hero: the whole frame; the page crops it with object-fit/object-position (4:5 on phones, wide on desktop).
im.save(f'{ASSETS}/hero.jpg', quality=86, optimize=True, progressive=True)
# Social background (text goes on the dark wall at the left).
crop(1200 / 630, 0.52).resize((1200, 630), Image.LANCZOS).save(f'{BRAND}/social-bg.png', optimize=True)
print('ok')
