"""Normalise brief 100 generated plates and build alignment QA views."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageOps
import json

ROOT = Path(__file__).resolve().parents[4]
GEN = Path(r"C:\Users\kygs\.codex\generated_images\01a161fe-cd0c-7b12-bf77-ec3d97fb72d3")
QA = ROOT / "docs/production/claude-pm/assets/brief100-qa"
QA.mkdir(parents=True, exist_ok=True)

MAP = {
    "chemistry/m7-paraffin-candle-v1.png": "exec-e719d3a0-4009-4a0e-a109-4dc0f9d8b39b.png",
    "chemistry/m7-hexane-water-heptane-tubes-v1.png": "exec-33b4305a-9abd-4c3d-a773-49298cfbe1bd.png",
    "chemistry/m7-vegetable-oil-bottle-v1.png": "exec-72892468-cc21-4b93-b29e-63e7087a3f9f.png",
    "chemistry/m7-margarine-tub-v1.png": "exec-94b92765-7c6c-419a-83d5-b79971bc2156.png",
    "chemistry/m7-uv-lamp-v1.png": "exec-81e896b1-f4ac-4065-8d7a-e63e9bce2079.png",
    "biology/m7-cattle-hoof-healthy-v1.png": "exec-0a8904c7-7b03-48b9-8505-5cadf868f4ef.png",
    "biology/m7-fmd-hoof-blisters-v1.png": "exec-5292779b-a04a-4ea1-bb47-f3c0de4e6954.png",
    "biology/m7-stock-truck-v1.png": "exec-144b7c12-2cce-48eb-bd09-9597d7401234.png",
    "biology/m7-nursery-pots-v1.png": "exec-1ac1ea89-078e-4499-bbf8-f07ef6873a0b.png",
    "biology/m7-lemon-myrtle-rows-v1.png": "exec-13e18eb4-d521-42ca-b4f4-0e529ab44a27.png",
    "biology/m7-farm-gate-closed-v1.png": "exec-7a4f1938-620c-4107-bb9b-806d7754770e.png",
    "biology/m7-shipping-container-v1.png": "exec-5f4936dc-18a1-409b-a760-7d9cee4fa59c.png",
}

def normalize(source, target, extent=1600, fixed_bbox=None):
    im = Image.open(source).convert("RGBA")
    a = im.getchannel("A")
    # Ignore near-invisible edge speckles but retain the paint's soft alpha.
    mask = a.point(lambda v: 255 if v > 12 else 0)
    box = mask.getbbox()
    if not box:
        raise ValueError(f"empty alpha: {source}")
    if fixed_bbox:
        box = fixed_bbox
    crop = im.crop(box)
    w, h = crop.size
    scale = min(extent / w, extent / h)
    crop = crop.resize((round(w * scale), round(h * scale)), Image.Resampling.LANCZOS)
    out = Image.new("RGBA", (2000, 2000))
    xy = ((2000 - crop.width) // 2, (2000 - crop.height) // 2)
    out.alpha_composite(crop, xy)
    target.parent.mkdir(parents=True, exist_ok=True)
    out.save(target)
    return {"source": str(source), "destination": str(target.relative_to(ROOT)).replace("\\", "/"), "sourceCrop": box, "placement": xy, "alphaBbox": out.getchannel("A").getbbox()}

def qa(path, name):
    im = Image.open(path).convert("RGBA")
    cream = Image.new("RGBA", im.size, "#f5f0e4")
    cream.alpha_composite(im)
    cream.convert("RGB").resize((500, 500)).save(QA / f"{name}-cream.jpg", quality=90)
    check = Image.new("RGB", im.size, "#f5f5f5")
    d = ImageDraw.Draw(check)
    for y in range(0, 2000, 100):
        for x in range(0, 2000, 100):
            if (x // 100 + y // 100) % 2:
                d.rectangle((x, y, x + 99, y + 99), fill="#bcbcbc")
    check.paste(im, mask=im.getchannel("A"))
    check.resize((500, 500)).save(QA / f"{name}-checker.jpg", quality=90)

if __name__ == "__main__":
    records = []
    for rel, source in MAP.items():
        target = ROOT / "public/assets" / rel
        records.append(normalize(GEN / source, target))
        qa(target, target.stem)
    (QA / "process-records.json").write_text(json.dumps(records, indent=2))
