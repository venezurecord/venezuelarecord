# Cover, hero and social background for investigation 1 ("who-commands-venezuela-2026"): an empty government office,
# the desk and the chair in place, while an oil refinery burns its flare outside the window. AI-generated illustration
# (Google Flow, Nano Banana) made for Venezuela Record on 2026-10-20, chosen by the editor; the 2K master is kept in
# brand/investigations/who-commands-venezuela-2026/. Always labelled as an AI illustration on the site (META.coverCredit).
# No text in these files: the page puts the headline over the hero in HTML; scripts/investigation-social.mjs adds it to
# the social images.
#   python scripts/investigation-cover-1.py   (needs Pillow), then: node scripts/investigation-social.mjs
from PIL import Image

BRAND = 'brand/investigations/who-commands-venezuela-2026'
ASSETS = 'src/assets/investigations/who-commands-venezuela-2026'
im = Image.open(f'{BRAND}/oficina-refineria-flow.jpg').convert('RGB')  # 2752x1536
W, H = im.size


def crop(ratio, cy=0.5):
    """Full-width crop at the given ratio, vertical centre cy (0 top, 1 bottom)."""
    ch = round(W / ratio)
    y0 = max(0, min(H - ch, round(cy * H - ch / 2)))
    return im.crop((0, y0, W, y0 + ch))


card = crop(1200 / 630, 0.5).resize((1200, 630), Image.LANCZOS)
# Home / index card (1200x630).
card.save(f'{ASSETS}/cover.jpg', quality=88, optimize=True, progressive=True)
# Page hero: the whole frame; the page crops it with object-fit/object-position (4:5 on phones, wide on desktop).
im.save(f'{ASSETS}/hero.jpg', quality=86, optimize=True, progressive=True)
# Social background (text goes on the dark wood panelling at the left).
card.save(f'{BRAND}/social-bg.png', optimize=True)
print('ok')
