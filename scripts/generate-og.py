from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

W, H = 1200, 630
img = Image.new("RGB", (W, H), "#FFFFFF")
d = ImageDraw.Draw(img)
logo_font = ImageFont.truetype("public/fonts/bricolage-700.ttf", 156)
tag_font = ImageFont.truetype("public/fonts/hanken-500.ttf", 38)
logo = "morpio"
tag = "Another world starts here."
logo_box = d.textbbox((0, 0), logo, font=logo_font)
logo_w = logo_box[2] - logo_box[0]
logo_h = logo_box[3] - logo_box[1]
dot_r = 13
logo_group_w = logo_w + 18 + dot_r * 2
logo_x = (W - logo_group_w) / 2
logo_y = 204
d.text((logo_x, logo_y), logo, font=logo_font, fill="#090A0C", anchor="la")
baseline_y = logo_y + logo_h - 14
d.ellipse((logo_x + logo_w + 18, baseline_y - dot_r * 2, logo_x + logo_w + 18 + dot_r * 2, baseline_y), fill="#00AEFF")
tag_box = d.textbbox((0, 0), tag, font=tag_font)
tag_w = tag_box[2] - tag_box[0]
d.text(((W - tag_w) / 2, 402), tag, font=tag_font, fill="#4D535D")
img.save("public/og-morpio.png", optimize=True)
print(img.size, Path("public/og-morpio.png").stat().st_size)
