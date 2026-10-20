"""Validate Brief 88 plates and rebuild anchors, provenance, and QA strips."""

from __future__ import annotations

import hashlib
import json
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[4]
ASSETS = Path(__file__).resolve().parent
QA = ASSETS / "brief88-qa"
SOURCES = [
    ASSETS / "brief88-mitosis-provenance.json",
    ASSETS / "brief88-meiosis-provenance.json",
    ASSETS / "brief88-closeups-provenance.json",
]
SERIES = {
    "mitosis": ["interphase", "prophase", "metaphase", "anaphase", "telophase", "cytokinesis", "daughters"],
    "meiosis-i": ["m1-prophase", "m1-metaphase", "m1-anaphase", "m1-telophase"],
    "meiosis-ii": ["pair-metaphase", "pair-anaphase", "four-cells"],
    "nucleus": ["nucleus-zoom", "nucleus-zoom-breaking"],
}


def digest(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def panel(path: Path, title: str, size: int = 260) -> Image.Image:
    with Image.open(path) as source:
        rgba = source.convert("RGBA")
        rgba.thumbnail((size, size), Image.Resampling.LANCZOS)
        tile = Image.new("RGBA", (size, size), "#f8f3e9")
        tile.alpha_composite(rgba, ((size - rgba.width) // 2, (size - rgba.height) // 2))
    out = Image.new("RGB", (size, size + 35), "#f8f3e9")
    out.paste(tile.convert("RGB"), (0, 0))
    ImageDraw.Draw(out).text((8, size + 9), title, fill="#2f2a2b", font=ImageFont.load_default())
    return out


def strip(name: str, stages: list[str]) -> None:
    size = 260
    plates = []
    for stage in stages:
        path = ROOT / f"public/assets/biology/cd-{stage}-v1.png"
        with Image.open(path) as source:
            im = source.convert("RGBA")
            im.thumbnail((size, size), Image.Resampling.LANCZOS)
            canvas = Image.new("RGBA", (size, size), "#f8f3e9")
            canvas.alpha_composite(im, ((size - im.width) // 2, (size - im.height) // 2))
            plates.append(canvas)
    views = []
    for index, stage in enumerate(stages):
        views.append((plates[index], stage))
        if index < len(stages) - 1:
            views.append((Image.blend(plates[index], plates[index + 1], 0.5), "50% crossfade"))
    contact = Image.new("RGB", (size * len(views), size + 35), "#f8f3e9")
    for index, (im, label) in enumerate(views):
        tile = panel_image(im, label, size)
        contact.paste(tile, (index * size, 0))
    contact.save(QA / f"{name}-crossfade-strip.png")


def panel_image(im: Image.Image, title: str, size: int) -> Image.Image:
    out = Image.new("RGB", (size, size + 35), "#f8f3e9")
    out.paste(im.convert("RGB"), (0, 0))
    ImageDraw.Draw(out).text((8, size + 9), title, fill="#2f2a2b", font=ImageFont.load_default())
    return out


def main() -> None:
    records = []
    for source in SOURCES:
        data = json.loads(source.read_text(encoding="utf-8"))
        records.extend(data["records"])
    if len(records) != 20:
        raise ValueError(f"Expected 20 full plates, found {len(records)}")

    anchors = {}
    verified = []
    for record in records:
        for key, hash_key, empty in (("path", "sha256", False), ("emptyPath", "emptySha256", True)):
            relative = record[key]
            path = ROOT / relative
            if not path.is_file():
                raise FileNotFoundError(path)
            with Image.open(path) as im:
                if im.size != (2000, 2000) or im.mode != "RGBA":
                    raise ValueError(f"Not 2000 x 2000 RGBA: {relative}: {im.size}, {im.mode}")
                low, high = im.getchannel("A").getextrema()
                if low != 0 or high == 0:
                    raise ValueError(f"Missing meaningful alpha: {relative}: {low}, {high}")
            actual_hash = digest(path)
            if record.get(hash_key) != actual_hash:
                raise ValueError(f"Stale hash for {relative}")
            anchor = {key: record.get(key) for key in ("cellBoxes", "nuclei", "spindlePoles", "equator", "furrowPoints")}
            anchor["chromosomes"] = [] if empty else record.get("chromosomes", [])
            for optional in ("locusBandYs", "kinetochoreAttachments", "notes"):
                if optional in record:
                    anchor[optional] = record[optional]
            anchors[relative] = anchor
            verified.append(relative)

    (ASSETS / "brief88-anchors.json").write_text(
        json.dumps({"brief": 88, "canvas": [2000, 2000], "coordinateSystem": "pixels from top left", "plates": anchors}, indent=2) + "\n",
        encoding="utf-8",
    )
    (ASSETS / "brief88-provenance.json").write_text(
        json.dumps({"brief": 88, "canvas": [2000, 2000], "sourceFiles": [str(p.relative_to(ROOT)).replace("\\", "/") for p in SOURCES], "records": records, "verifiedPlateCount": len(verified), "metaphaseSpread": "public/assets/biology/m6-metaphase-spread-v1.png"}, indent=2) + "\n",
        encoding="utf-8",
    )
    QA.mkdir(exist_ok=True)
    for name, stages in SERIES.items():
        strip(name, stages)
    archive = ROOT / "out/archives/brief88-cell-division-plates-2026-10-20.zip"
    archive.parent.mkdir(parents=True, exist_ok=True)
    members = [ROOT / relative for relative in verified]
    members += SOURCES + [ASSETS / "brief88-anchors.json", ASSETS / "brief88-provenance.json"]
    members += sorted(QA.glob("*.png"))
    members += sorted(QA.glob("*.md"))
    with ZipFile(archive, "w", compression=ZIP_DEFLATED, compresslevel=6) as bundle:
        for member in members:
            bundle.write(member, member.relative_to(ROOT).as_posix())
    checkpoint = {
        "brief": 88,
        "archive": archive.relative_to(ROOT).as_posix(),
        "sha256": digest(archive),
        "memberCount": len(members),
        "plateCount": len(verified),
        "allMemberPaths": [path.relative_to(ROOT).as_posix() for path in members],
    }
    (ASSETS / "brief88-media-checkpoint.json").write_text(
        json.dumps(checkpoint, indent=2) + "\n", encoding="utf-8"
    )
    print(f"Validated {len(records)} stages and {len(verified)} full/empty PNGs")


if __name__ == "__main__":
    main()
