from hashlib import sha256
from pathlib import Path
import subprocess
from typing import cast

from PIL import Image


ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / "public" / "og-morpio.png"


def regenerate() -> str:
    subprocess.run(["python3", "scripts/generate-og.py"], cwd=ROOT, check=True, capture_output=True)
    return sha256(OUTPUT.read_bytes()).hexdigest()


first = regenerate()
second = regenerate()
assert first == second, "OG generation is not deterministic"

image = Image.open(OUTPUT).convert("RGB")
assert image.size == (1200, 630), f"Unexpected OG dimensions: {image.size}"
pixels = [cast(tuple[int, int, int], image.getpixel((x, y))) for y in range(image.height) for x in range(image.width)]
white = sum(1 for r, g, b in pixels if r > 240 and g > 240 and b > 240) / len(pixels)
dark = sum(1 for r, g, b in pixels if r < 55 and g < 55 and b < 60) / len(pixels)
sky = sum(1 for r, g, b in pixels if b > 180 and g > 110 and r < 80)
assert white < 0.25, f"OG still reads as a white logo card ({white:.1%} white)"
assert dark > 0.35, f"OG lacks a cinematic dark field ({dark:.1%} dark)"
assert sky > 100, "OG is missing the Morpio sky accent"
print(f"PASS: cinematic OG is deterministic ({first[:12]})")