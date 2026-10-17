"""Brief 63: extract frames and build review-only thumbnails from local MP4s."""

from __future__ import annotations

import json
import subprocess
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parents[5]
HERE = Path(__file__).resolve().parent
FFMPEG = ROOT / "node_modules/@remotion/compositor-win32-x64-msvc/ffmpeg.exe"
LEDGER = ROOT / "docs/production/claude-pm/youtube/wave4-uploads.json"
FRACTIONS = (0.12, 0.28, 0.44, 0.60, 0.76)
FRAMES = HERE / "candidates"

# The boxes use source pixels (all checked MP4 frames are 1920 x 1080).
# They isolate the teaching visual so the video caption and long scene headings stay out.
DESIGNS = {
    "chem-m5-g01": (3, "Why fire keeps\nburning", (65, 230, 480, 690)),
    "chem-m5-c04a": (3, "Squeeze the\ngas", (60, 400, 1150, 850)),
    "bio-m5-b02b": (1, "Flower to\nseed", (830, 30, 1580, 895)),
    "bio-m5-b04": (2, "DNA copies\nitself", (385, 155, 1325, 625)),
    "bio-m5-b03a": (2, "Where does it\nimplant?", (755, 225, 1910, 925)),
    "bio-m5-b03a2": (1, "Pregnancy\nfeedback loops", (1200, 160, 1900, 790)),
    "chem-m5-c05": (3, "Build the K\nexpression", (1000, 410, 1390, 760)),
    "chem-m5-c04b": (1, "Catalyst:\nsame K", (70, 170, 950, 870)),
    "chem-m5-c08": (3, "Q predicts\nthe shift", (810, 200, 1790, 760)),
    "chem-m5-c06a": (2, "3 ways to\nfind K", (1510, 215, 1870, 930)),
    "chem-m5-c09": (4, "Heat changes\nK", (70, 180, 960, 900)),
    "chem-m5-c06b": (3, "Find\nconcentration\nfrom K", (1330, 135, 1860, 945)),
    "bio-m5-b06a": (1, "Where DNA\nlives", (160, 135, 1700, 955)),
    "chem-m5-g03c": (1, "Hard K\npractice: 1", (1370, 225, 1840, 820)),
    "chem-m5-g03d": (1, "Hard K\npractice: 2", (1510, 220, 1850, 840)),
    "chem-m5-g03b": (4, "5 calculation\ntypes", (150, 155, 1310, 845)),
    "bio-m5-b03b": (2, "Breed for\nwhat?", (55, 140, 1390, 940)),
    "chem-m5-c07": (3, "Why factories\ncompromise", (710, 190, 1710, 870)),
}


def seconds(duration: str) -> int:
    m, s = duration.split(":")
    return int(m) * 60 + int(s)


def extract(task: tuple[dict, int, float]) -> str:
    video, index, fraction = task
    destination = FRAMES / f"{video['lessonId']}-{index}.jpg"
    if destination.exists():
        return destination.name
    moment = seconds(video["duration"]) * fraction
    subprocess.run(
        [str(FFMPEG), "-hide_banner", "-loglevel", "error", "-ss", str(moment),
         "-i", str(ROOT / video["file"]), "-frames:v", "1", "-q:v", "2", "-y", str(destination)],
        check=True,
    )
    return destination.name


def candidate_sheets(videos: list[dict]) -> None:
    FRAMES.mkdir(parents=True, exist_ok=True)
    tasks = [(v, i, f) for v in videos for i, f in enumerate(FRACTIONS, 1)]
    with ThreadPoolExecutor(max_workers=4) as pool:
        for done in as_completed([pool.submit(extract, task) for task in tasks]):
            done.result()
    font = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 18)
    for page in range(3):
        chunk = videos[page * 6:(page + 1) * 6]
        sheet = Image.new("RGB", (5 * 250, 6 * 178), "#f7f4ed")
        draw = ImageDraw.Draw(sheet)
        for row, video in enumerate(chunk):
            for col in range(5):
                source = Image.open(FRAMES / f"{video['lessonId']}-{col + 1}.jpg").convert("RGB")
                thumb = ImageOps.fit(source, (246, 139))
                x, y = col * 250, row * 178
                sheet.paste(thumb, (x, y))
                label = f"{video['lessonId']}  {col + 1}"
                draw.text((x + 5, y + 143), label, fill="#172b35", font=font)
        sheet.save(HERE / f"candidates-{page + 1}.jpg", quality=87)


def draw_draft(video: dict) -> dict:
    key = video["lessonId"]
    candidate, hook, crop = DESIGNS[key]
    source = Image.open(FRAMES / f"{key}-{candidate}.jpg").convert("RGB")
    art = ImageOps.fit(source.crop(crop), (800, 720), method=Image.Resampling.LANCZOS)
    canvas = Image.new("RGB", (1280, 720), "#f4f0e7")
    canvas.paste(art, (480, 0))
    chemistry = key.startswith("chem")
    colour = "#075c57" if chemistry else "#205689"
    canvas.paste(colour, (0, 0, 480, 720))
    draw = ImageDraw.Draw(canvas)
    draw.rectangle((480, 0, 493, 720), fill="#dca144")
    small = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 30)
    brand = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 33)
    subject = "CHEMISTRY" if chemistry else "BIOLOGY"
    draw.text((52, 50), f"{subject}  |  MODULE 5", font=small, fill="#e6c883")
    lines = hook.split("\n")
    headline_size = 81
    while True:
        headline = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", headline_size)
        if max(draw.textbbox((0, 0), line, font=headline)[2] for line in lines) <= 400:
            break
        headline_size -= 2
    y = 218 if len(lines) == 2 else 184
    for line in lines:
        draw.text((49, y), line, font=headline, fill="#fffdf5", stroke_width=0)
        y += headline_size * 1.13
    draw.rectangle((52, 600, 425, 602), fill="#b9cfc6" if chemistry else "#b5d0e9")
    draw.text((52, 631), "HSCScience", font=brand, fill="#fffdf5")
    label = key.split("-m5-")[-1].upper()
    draw.text((350, 649), label, font=small, fill="#e6c883")
    canvas.save(HERE / f"{key}.png", optimize=True)
    return {"lessonId": key, "candidate": candidate, "timeSeconds": round(seconds(video["duration"]) * FRACTIONS[candidate - 1], 1), "crop": crop, "hook": hook.replace("\n", " ")}


def final_sheet(videos: list[dict]) -> None:
    width, height = 400, 225
    sheet = Image.new("RGB", (width * 3, (len(videos) + 2) // 3 * height), "#eeeae2")
    for n, video in enumerate(videos):
        thumb = Image.open(HERE / f"{video['lessonId']}.png").convert("RGB")
        sheet.paste(thumb.resize((width, height), Image.Resampling.LANCZOS), ((n % 3) * width, (n // 3) * height))
    sheet.save(HERE / "contact-sheet.png", optimize=True)


if __name__ == "__main__":
    data = json.loads(LEDGER.read_text(encoding="utf-8"))
    videos = [v for v in data["videos"] if v.get("status") == "published"]
    candidate_sheets(videos)
    choices = [draw_draft(video) for video in videos]
    (HERE / "frame-choices.json").write_text(json.dumps(choices, indent=2) + "\n", encoding="utf-8")
    final_sheet(videos)
    print(f"Extracted five frames and drafted thumbnails for {len(videos)} videos")
