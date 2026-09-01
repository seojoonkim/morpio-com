from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

W, H = 1200, 630
img = Image.new("RGB", (W, H), "#FFFFFF")
d = ImageDraw.Draw(img)
logo_font = ImageFont.truetype("public/fonts/bricolage-700.ttf", 156)
tag_font = ImageFont.truetype("public/fonts/hanken-500.ttf", 45.98)
logo = "morpio"
logo_mark = "."
tag = "Another world starts here."
logo_w = d.textlength(logo, font=logo_font)
mark_w = d.textlength(logo_mark, font=logo_font)
logo_group_w = logo_w + mark_w
logo_x = (W - logo_group_w) / 2
logo_y = 204
d.text((logo_x, logo_y), logo, font=logo_font, fill="#090A0C", anchor="la")
d.text((logo_x + logo_w, logo_y), logo_mark, font=logo_font, fill="#00AEFF", anchor="la")
tag_box = d.textbbox((0, 0), tag, font=tag_font)
tag_w = tag_box[2] - tag_box[0]
d.text(((W - tag_w) / 2, 402), tag, font=tag_font, fill="#4D535D")
img.save("public/og-morpio.png", optimize=True)
print(img.size, Path("public/og-morpio.png").stat().st_size)
