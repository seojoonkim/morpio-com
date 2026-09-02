from PIL import Image, ImageDraw, ImageEnhance, ImageFont, ImageOps
from pathlib import Path

W, H = 1200, 630
source = Image.open("public/media/hero/hero-poster.jpg").convert("RGB")
scene = ImageOps.fit(source, (W, H), method=Image.Resampling.LANCZOS, centering=(0.52, 0.48))
scene = ImageEnhance.Color(scene).enhance(0.82)
scene = ImageEnhance.Contrast(scene).enhance(1.06)
img = Image.new("RGB", (W, H), "#090A0C")
img.paste(scene, (180, 0))

wash = Image.new("RGBA", (W, H), (0, 0, 0, 0))
wash_draw = ImageDraw.Draw(wash)
for x in range(W):
    alpha = int(224 - 150 * (x / W))
    wash_draw.line((x, 0, x, H), fill=(4, 7, 10, alpha))
for y in range(H):
    alpha = int(24 + 104 * (y / H) ** 2)
    wash_draw.line((0, y, W, y), fill=(4, 7, 10, alpha))
img = Image.alpha_composite(img.convert("RGBA"), wash).convert("RGB")

d = ImageDraw.Draw(img)
logo_font = ImageFont.truetype("public/fonts/bricolage-700.ttf", 64)
headline_font = ImageFont.truetype("public/fonts/bricolage-700.ttf", 70)
meta_font = ImageFont.truetype("public/fonts/geist-600.ttf", 26)

logo = "morpio"
logo_w = d.textlength(logo, font=logo_font)
d.text((72, 54), logo, font=logo_font, fill="#FFFFFF")
d.ellipse((72 + logo_w + 8, 96, 72 + logo_w + 24, 112), fill="#00AEFF")
d.rectangle((72, 200, 80, 472), fill="#00AEFF")
d.text((108, 198), "ANOTHER", font=headline_font, fill="#FFFFFF")
d.text((108, 270), "WORLD", font=headline_font, fill="#FFFFFF")
d.text((108, 342), "STARTS HERE.", font=headline_font, fill="#FFFFFF")
d.text((108, 486), "ANIMATION STUDIO / SEOUL", font=meta_font, fill="#D9F1FC")
img.save("public/og-morpio.png", optimize=True)
print(img.size, Path("public/og-morpio.png").stat().st_size)
