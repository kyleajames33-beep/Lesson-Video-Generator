"""Verify, preview and archive brief 103 plates."""

from pathlib import Path
from PIL import Image, ImageDraw
import hashlib
import json
import numpy as np
import zipfile

ROOT = Path(__file__).resolve().parents[4]
ASSETS = ROOT / "docs/production/claude-pm/assets"
QA = ASSETS / "brief103-qa"
QA.mkdir(parents=True, exist_ok=True)
DATE = "2026-10-23"

SOURCES = {
    "chemistry/m7-spirit-burner-calorimeter-v1.png": "exec-e5d8fa6d-95b4-482c-9596-6ff65c0aa05d.png",
    "chemistry/m7-spirit-burner-calorimeter-sooty-v1.png": "exec-4712edf3-6e6c-4c0e-b5ef-3dd898180f99.png",
    "chemistry/m7-spirit-burner-calorimeter-shield-v1.png": "exec-347af793-e837-4797-ab76-d581b1290dc5.png",
    "chemistry/m7-spirit-burner-on-balance-v1.png": "exec-369b3e8b-6f7a-4002-8463-8d2d2ac63ab5.png",
    "chemistry/m7-sugarcane-stalks-v1.png": "exec-0a1d9c7e-3692-4072-9538-2c06b4a2bdf4.png",
    "biology/m7-airway-cell-v1.png": "exec-13dddbf1-560e-4bb2-87bc-e7af2421d6ac.png",
    "biology/m7-airway-cell-infected-v1.png": "exec-f6b47465-591a-45be-b5b3-aeb6c8e5f8a5.png",
    "biology/m7-airway-cell-apoptotic-v1.png": "exec-215db30c-4383-409b-aa7a-cfaf7d6b6bab.png",
    "biology/m7-t-cell-killer-v1.png": "exec-e33a6e13-7455-47a7-be3b-c4ad5bd1f879.png",
    "biology/m7-varicella-virus-v1.png": "exec-26ed3beb-0539-434e-a19f-a5b699d0ab53.png",
    "biology/m7-placenta-villus-v1.png": "exec-003b0d22-ae1f-4ae7-8ee2-9b78643ca096.png",
    "biology/m7-brown-snake-v1.png": "exec-19aa40dc-42f0-4a61-acac-86aee498504f.png",
    "biology/m7-b-cell-bare-v1.png": "existing plate, technical re-matte",
}

PROMPTS = {
    "m7-spirit-burner-calorimeter-v1.png": "Ink and watercolour school spirit burner calorimeter, clear glass lamp on heatproof mat, small blue flame under a clean copper can held by a retort clamp, water cutaway and glass thermometer, no lid or shield, isolated transparent plate.",
    "m7-spirit-burner-calorimeter-sooty-v1.png": "Edit the base calorimeter in place: larger yellow-orange smoky flame and a black soot patch under the copper can, while preserving the apparatus and transparent plate.",
    "m7-spirit-burner-calorimeter-shield-v1.png": "Edit the base calorimeter in place: add a folded three-panel grey draught shield, buff lid, upright thermometer and wire stirrer; keep the blue flame and clean can.",
    "m7-spirit-burner-on-balance-v1.png": "Isolated ink and watercolour unlit capped glass spirit burner on a white electronic top-pan balance with blank display, transparent background, no text.",
    "m7-sugarcane-stalks-v1.png": "Three mature segmented sugarcane stalks with green arching leaves and some dry lower leaves, cut off at ground level, isolated ink and watercolour on transparent background.",
    "m7-airway-cell-v1.png": "One healthy ciliated columnar airway epithelial cell in side-view cutaway, rose cytoplasm and purple nucleus, isolated transparent watercolour plate.",
    "m7-airway-cell-infected-v1.png": "Edit healthy airway cell in place with many small internal virus particles and some at the top between disordered cilia; preserve cell outline and transparent background.",
    "m7-airway-cell-apoptotic-v1.png": "Edit aligned airway cell as a shrunken apoptotic cell with membrane blebs, nuclear fragments, fewer cilia and enclosed particles, no rupture or spilled contents.",
    "m7-t-cell-killer-v1.png": "Edit existing T cell plate while preserving its outline and nucleus; add eleven larger dark purple-red round granules to the cytoplasm rim on the right.",
    "m7-varicella-virus-v1.png": "Single cutaway varicella-zoster herpesvirus with pale envelope, fine teal spikes, lilac tegument, faceted blue icosahedral capsid and coiled double-stranded DNA, transparent watercolour plate.",
    "m7-placenta-villus-v1.png": "Single branching chorionic villus lengthwise cutaway with continuous lining, fetal capillaries and red blood cells in single file, maternal red cells outside, transparent ink and watercolour plate.",
    "m7-brown-snake-v1.png": "Whole eastern brown snake in a loose S curve, slender brown body and pale cream belly, small raised head, natural-history watercolour on transparent background.",
    "m7-b-cell-bare-v1.png": "Existing ImageGen plate. No new generation. Alpha fringe and off-subject pixels removed in place without changing geometry.",
}


def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def make_background(kind):
    if kind == "cream":
        return Image.new("RGBA", (2000, 2000), "#f4eee1")
    if kind == "dark":
        return Image.new("RGBA", (2000, 2000), "#111923")
    bg = Image.new("RGBA", (2000, 2000), "#eee")
    draw = ImageDraw.Draw(bg)
    for y in range(0, 2000, 100):
        for x in range(0, 2000, 100):
            if (x // 100 + y // 100) % 2:
                draw.rectangle((x, y, x + 99, y + 99), fill="#b8b8b8")
    return bg


records = []
for short, original in SOURCES.items():
    rel = "public/assets/" + short
    path = ROOT / rel
    plate = Image.open(path)
    if plate.size != (2000, 2000) or plate.mode != "RGBA":
        raise RuntimeError(f"Bad plate: {rel}: {plate.size} {plate.mode}")
    alpha = plate.getchannel("A")
    if alpha.getextrema() != (0, 255):
        raise RuntimeError(f"Alpha range: {rel}: {alpha.getextrema()}")
    bbox = alpha.point(lambda a: 255 if a > 12 else 0).getbbox()
    margin = min(bbox[0], bbox[1], 2000 - bbox[2], 2000 - bbox[3]) / 2000
    if margin < 0.099:
        raise RuntimeError(f"Margin below 10 percent: {rel}: {margin}")
    for kind in ("cream", "checker", "dark"):
        bg = make_background(kind)
        bg.alpha_composite(plate)
        bg.convert("RGB").resize((800, 800)).save(QA / f"{path.stem}-{kind}.jpg", quality=90)
    records.append({"path": rel, "sourceGenerated": original, "promptSummary": PROMPTS[path.name],
                    "size": [2000, 2000], "mode": "RGBA", "alphaBbox12": bbox,
                    "minClearMarginFraction": round(margin, 4), "sha256": sha(path)})

pairs = [
    ("chemistry/m7-spirit-burner-calorimeter-v1.png", "chemistry/m7-spirit-burner-calorimeter-sooty-v1.png", "calorimeter-base-sooty"),
    ("chemistry/m7-spirit-burner-calorimeter-v1.png", "chemistry/m7-spirit-burner-calorimeter-shield-v1.png", "calorimeter-base-shield"),
    ("biology/m7-airway-cell-v1.png", "biology/m7-airway-cell-infected-v1.png", "airway-healthy-infected"),
    ("biology/m7-airway-cell-infected-v1.png", "biology/m7-airway-cell-apoptotic-v1.png", "airway-infected-apoptotic"),
    ("biology/m7-t-cell-v1.png", "biology/m7-t-cell-killer-v1.png", "t-cell-normal-killer"),
    ("biology/m7-b-cell-v1.png", "biology/m7-b-cell-bare-v1.png", "b-cell-plain-bare"),
]
overlays = []
for one, two, name in pairs:
    a = Image.open(ROOT / "public/assets" / one).convert("RGBA")
    b = Image.open(ROOT / "public/assets" / two).convert("RGBA")
    aa = np.array(a.getchannel("A")) > 128
    bb = np.array(b.getchannel("A")) > 128
    iou = float((aa & bb).sum() / (aa | bb).sum())
    bg = make_background("cream")
    bg.alpha_composite(Image.blend(a, b, 0.5))
    bg.convert("RGB").resize((800, 800)).save(QA / f"{name}-overlay.jpg", quality=92)
    overlays.append({"pair": [one, two], "alphaIoU128": round(iou, 4), "view": f"brief103-qa/{name}-overlay.jpg"})

provenance = {"brief": 103, "date": DATE, "tool": "built-in image_gen", "plateCount": len(records),
              "technicalProcessing": "Alpha fringe cleanup, fit to 2000 square, affine alignment of sooty apparatus, compositing generated granules onto the exact existing T-cell plate, and B-cell bare re-matte. See brief103-process.py.",
              "retakes": {"sugarcane": ["exec-176eb811-5d29-4202-b44b-763377f3b769.png", "exec-0a1d9c7e-3692-4072-9538-2c06b4a2bdf4.png"],
                          "brownSnake": ["exec-cdc0753d-1b45-4fd8-9bbd-762136c61acc.png", "exec-19aa40dc-42f0-4a61-acac-86aee498504f.png"]},
              "records": records, "alignedPairQA": overlays}
provenance_path = ASSETS / "brief103-provenance.json"
provenance_path.write_text(json.dumps(provenance, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

members = sorted({r["path"] for r in records} |
                 {"docs/production/claude-pm/assets/brief103-provenance.json", "docs/production/claude-pm/assets/brief103-process.py", "docs/production/claude-pm/assets/brief103-package.py"} |
                 {p.relative_to(ROOT).as_posix() for p in QA.glob("*.jpg")})
archive = ROOT / f"out/archives/brief103-plates-{DATE}.zip"
archive.parent.mkdir(parents=True, exist_ok=True)
with zipfile.ZipFile(archive, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=6) as z:
    for rel in members:
        z.write(ROOT / rel, rel)
with zipfile.ZipFile(archive) as z:
    if z.testzip() or sorted(z.namelist()) != members:
        raise RuntimeError("Archive CRC or member list failed")
    for row in records:
        if hashlib.sha256(z.read(row["path"])).hexdigest() != row["sha256"]:
            raise RuntimeError(f"Archive hash mismatch: {row['path']}")
checkpoint = {"brief": 103, "date": DATE, "archive": archive.relative_to(ROOT).as_posix(),
              "archiveBytes": archive.stat().st_size, "archiveSha256": sha(archive),
              "zipCrcCheck": True, "plateCount": len(records), "memberCount": len(members),
              "members": members}
(ASSETS / "brief103-media-checkpoint.json").write_text(json.dumps(checkpoint, indent=2) + "\n", encoding="utf-8")
print(f"Packaged {len(records)} plates, {len(members)} archive members: {archive}")
