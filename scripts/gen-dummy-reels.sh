#!/usr/bin/env bash
set -euo pipefail

OUT="${1:-public/video}"
mkdir -p "$OUT"

colors=("1B3AA0" "14503C" "6E1B2E" "3B2340" "B4441A" "12343B")
accents=("F5C451" "FF6B4A" "7FC8E8" "79E0B4" "4E6E8E" "FF9F1C")

for index in 1 2 3 4 5 6; do
  slot=$(printf "%02d" "$index")
  base="${colors[$((index-1))]}"
  accent="${accents[$((index-1))]}"
  ffmpeg -hide_banner -loglevel error -y \
    -f lavfi -i "color=c=0x${base}:s=720x900:r=24:d=4" \
    -vf "drawbox=x='-240+t*180':y=0:w=240:h=900:color=0x${accent}@1:t=fill,drawbox=x='720-t*120':y=0:w=100:h=900:color=white@0.18:t=fill,drawbox=x=36:y=36:w=648:h=828:color=white@0.55:t=2,drawbox=x=52:y=55:w=280:h=18:color=white@0.9:t=fill,drawbox=x=52:y=h-84:w=190:h=10:color=white@0.65:t=fill" \
    -an -c:v libx264 -preset veryfast -crf 29 -pix_fmt yuv420p -movflags +faststart \
    "$OUT/sample-${slot}.mp4"
done

printf 'Generated six silent placeholder reels in %s\n' "$OUT"
