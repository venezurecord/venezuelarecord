# Cover, hero band and social background for investigation 2: El Helicoide at dusk.
# Source photo: "Atardecer y Helicoide" by Enzo861, CC BY-SA 3.0, Wikimedia Commons
# (https://commons.wikimedia.org/wiki/File:Atardecer_y_Helicoide.JPG), kept in brand/investigations/residual-capacity-2026/.
# The derived images are shared under the same license (CC BY-SA 3.0) and credited wherever they appear.
# Dramatic grade: sky mapped to a dusk gradient (night navy -> crimson -> amber at the horizon) keeping the cloud
# texture of the original; the building and the city stay as a near-black silhouette. No text.
#   python scripts/investigation-cover-2.py   (needs Pillow + numpy), then: node scripts/investigation-social-2.mjs
import sys
import numpy as np
from PIL import Image, ImageFilter

BRAND = 'brand/investigations/residual-capacity-2026'
ASSETS = 'src/assets/investigations/residual-capacity-2026'
src = f'{BRAND}/helicoide-atardecer-enzo861.jpg'
im = Image.open(src).convert('RGB')


def render(cw, ratio, dome_x=0.62, dome_y=0.5, size=(2400, 1260)):
    ch = round(cw / ratio)
    x0 = 1490 - int(dome_x * cw)
    y0 = 825 - int(dome_y * ch)
    crop = im.crop((x0, y0, x0 + cw, y0 + ch)).resize(size, Image.LANCZOS)
    a = np.asarray(crop).astype(np.float32) / 255.0
    l = 0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2]
    h, w = l.shape
    # Sky mask: bright pixels, softened (the silhouette edge stays crisp because the city is ~black).
    sky = np.clip((l - 0.06) / 0.22, 0, 1)
    sky = np.asarray(Image.fromarray((sky * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.2))).astype(np.float32) / 255
    # Horizon line ~ where the skyline sits (fraction of height).
    hz = 0.80 if size[1] / size[0] < 0.6 else 0.78
    yy = np.mgrid[0:h, 0:w][0] / h
    t = np.clip(yy / hz, 0, 1)  # 0 at top, 1 at horizon
    stops = [(0.0, (14, 18, 38)), (0.45, (52, 24, 52)), (0.72, (140, 34, 46)), (0.9, (226, 104, 54)), (1.0, (246, 170, 80))]
    grad = np.zeros((h, w, 3), np.float32)
    for (p0, c0), (p1, c1) in zip(stops, stops[1:]):
        m = (t >= p0) & (t <= p1)
        k = ((t - p0) / (p1 - p0))[..., None]
        grad = np.where(m[..., None], np.array(c0) + (np.array(c1) - np.array(c0)) * k, grad)
    grad /= 255.0
    # Cloud texture from the original luminance (relative to its local mean).
    blur = np.asarray(Image.fromarray((l * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(40))).astype(np.float32) / 255
    detail = np.clip((l - blur) * 2.2 + 1.0, 0.7, 1.35)[..., None]
    skycol = np.clip(grad * detail, 0, 1)
    ground = np.array([8, 11, 18]) / 255.0
    # City lights: keep small bright points inside the dark area, warmed.
    lights = np.clip((l - 0.25) * 3, 0, 1)[..., None] * (1 - sky[..., None]) * np.array([1.0, 0.85, 0.55])
    out = skycol * sky[..., None] + ground * (1 - sky[..., None]) + lights * 0.8
    # Vignette, heavier at the left and bottom.
    xx = np.mgrid[0:h, 0:w][1] / w
    vig = np.clip(1.08 - 0.5 * ((xx - 0.62) ** 2 / 0.35 + (yy - 0.42) ** 2 / 0.6), 0.45, 1)[..., None]
    out *= vig
    rng = np.random.default_rng(11)
    out = np.clip(out + rng.normal(0, 0.010, out.shape), 0, 1)
    return Image.fromarray((out * 255).astype(np.uint8))


card = render(1760, 1200 / 630)
card.save(f'{ASSETS}/hero.jpg', quality=86, optimize=True, progressive=True)
card.resize((1200, 630), Image.LANCZOS).save(f'{ASSETS}/cover.jpg', quality=88, optimize=True, progressive=True)
# Wider sky for the social images (text sits on the left over the dark sky).
social = render(2000, 1200 / 630, dome_x=0.72, dome_y=0.56)
social.resize((1200, 630), Image.LANCZOS).save(f'{BRAND}/social-bg.png', optimize=True)
print('ok')
