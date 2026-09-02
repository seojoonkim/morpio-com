#!/usr/bin/env python3
"""Verify the thesis loop media contract after encoding."""

from __future__ import annotations

import json
import statistics
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MEDIA = ROOT / "public/media/thesis/video"
FILES = sorted(MEDIA.glob("*-h3*.mp4"))


def probe(path: Path) -> dict:
    result = subprocess.run(
        [
            "ffprobe", "-v", "error", "-show_streams", "-show_format",
            "-of", "json", str(path),
        ],
        check=True,
        capture_output=True,
        text=True,
    )
    return json.loads(result.stdout)


def neutral_corner_stats(path: Path, width: int, height: int) -> tuple[float, float]:
    result = subprocess.run(
        [
            "ffmpeg", "-v", "error", "-i", str(path),
            "-vf", "select='eq(n,0)+eq(n,60)+eq(n,119)'",
            "-vsync", "0", "-f", "rawvideo", "-pix_fmt", "rgb24", "-",
        ],
        check=True,
        capture_output=True,
    )
    frame_size = width * height * 3
    if len(result.stdout) != frame_size * 3:
        raise AssertionError(f"{path.name}: expected three decoded frames")

    neutral_values: list[int] = []
    white_pixels = 0
    total_pixels = 0
    stride = width * 3
    patch_size = min(width, height) // 10
    if "stories" in path.name:
        corners = ("top-left", "bottom-left")
    elif "system" in path.name:
        corners = ("top-left", "top-right", "bottom-right")
    else:
        corners = ("top-left", "top-right", "bottom-left", "bottom-right")
    origins = {
        "top-left": (0, 0),
        "top-right": (0, width - patch_size),
        "bottom-left": (height - patch_size, 0),
        "bottom-right": (height - patch_size, width - patch_size),
    }
    for frame_index in range(3):
        frame = memoryview(result.stdout)[frame_index * frame_size:(frame_index + 1) * frame_size]
        for corner in corners:
            start_y, start_x = origins[corner]
            for y in range(start_y, start_y + patch_size):
                row = frame[y * stride + start_x * 3:y * stride + (start_x + patch_size) * 3]
                for offset in range(0, len(row), 3):
                    rgb = row[offset:offset + 3]
                    neutral_values.extend(rgb)
                    white_pixels += int(all(channel >= 250 for channel in rgb))
                    total_pixels += 1
    return statistics.median(neutral_values), white_pixels / total_pixels


assert len(FILES) == 6, f"expected six thesis videos, found {len(FILES)}"
for path in FILES:
    data = probe(path)
    video_streams = [stream for stream in data["streams"] if stream["codec_type"] == "video"]
    audio_streams = [stream for stream in data["streams"] if stream["codec_type"] == "audio"]
    assert len(video_streams) == 1 and not audio_streams, f"{path.name}: stream contract changed"
    stream = video_streams[0]
    mobile = path.name.endswith("-mobile.mp4")
    expected_size = (400, 300) if mobile else (800, 600)
    actual_size = (int(stream["width"]), int(stream["height"]))
    assert stream["codec_name"] == "h264", f"{path.name}: codec is not H.264"
    assert stream["pix_fmt"] == "yuv420p", f"{path.name}: pixel format changed"
    assert stream["r_frame_rate"] == "24/1", f"{path.name}: frame rate changed"
    assert int(stream["nb_frames"]) == 120, f"{path.name}: frame count changed"
    assert abs(float(data["format"]["duration"]) - 5) < 0.01, f"{path.name}: duration changed"
    assert actual_size == expected_size, f"{path.name}: expected {expected_size}, got {actual_size}"
    median, white_ratio = neutral_corner_stats(path, *actual_size)
    assert median >= 250, f"{path.name}: encoded empty paper is too dark ({median})"
    assert white_ratio >= 0.95, f"{path.name}: only {white_ratio:.1%} of empty-paper pixels are blend-neutral"

print("PASS: six thesis loops retain 5s/24fps/H.264 and blend-neutral paper edges")
