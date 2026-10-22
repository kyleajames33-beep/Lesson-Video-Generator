"""Package brief 101 ignored plates with hashes and QA evidence."""

from pathlib import Path
from PIL import Image
import hashlib
import json
import zipfile


ROOT = Path(__file__).resolve().parents[4]
ASSETS = ROOT / "docs/production/claude-pm/assets"
DATE = "2026-10-22"


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


chem = json.loads((ASSETS / "brief101-chem-notes.json").read_text(encoding="utf-8"))
bio = json.loads((ASSETS / "brief101-bio-notes.json").read_text(encoding="utf-8"))
records = chem["records"] + bio["records"]
paths = [r["path"].replace("\\", "/") for r in records]
if len(paths) != 25 or len(set(paths)) != 25:
    raise RuntimeError(f"Expected 25 unique plates, got {len(paths)} total and {len(set(paths))} unique")

for row in records:
    path = ROOT / row["path"]
    if not path.is_file():
        raise FileNotFoundError(path)
    with Image.open(path) as image:
        if image.size != (2000, 2000) or image.mode != "RGBA":
            raise RuntimeError(f"Bad plate size or mode: {path}: {image.size} {image.mode}")
        alpha = image.getchannel("A")
        if alpha.getextrema() != (0, 255):
            raise RuntimeError(f"Missing full alpha range: {path}")
        box = alpha.point(lambda value: 255 if value > 12 else 0).getbbox()
    row["size"] = [2000, 2000]
    row["mode"] = "RGBA"
    row["alphaBbox12"] = box
    row["minClearMarginFraction"] = min(box[0], box[1], 2000 - box[2], 2000 - box[3]) / 2000
    row["sha256"] = digest(path)

provenance_path = ASSETS / "brief101-provenance.json"
provenance = {
    "brief": 101,
    "date": DATE,
    "tool": "built-in image_gen",
    "plateCount": len(records),
    "parts": ["Chem P01", "Chem P02", "Chem C05", "Chem C06", "Bio B06", "Bio B07"],
    "records": records,
    "qaNotes": [chem.get("review"), bio.get("review")],
}
provenance_path.write_text(json.dumps(provenance, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

members = paths + [
    provenance_path.relative_to(ROOT).as_posix(),
    "docs/production/claude-pm/assets/brief101-chem-notes.json",
    "docs/production/claude-pm/assets/brief101-bio-notes.json",
]
members += [path.relative_to(ROOT).as_posix() for path in (ASSETS / "brief101-qa").rglob("*") if path.is_file()]
members = sorted(set(members))

archive = ROOT / "out/archives/brief101-plates-2026-10-22.zip"
archive.parent.mkdir(parents=True, exist_ok=True)
with zipfile.ZipFile(archive, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=6) as output:
    for rel in members:
        output.write(ROOT / rel, rel)

with zipfile.ZipFile(archive) as check:
    bad = check.testzip()
    if bad:
        raise RuntimeError(f"Bad ZIP member CRC: {bad}")
    if sorted(check.namelist()) != members:
        raise RuntimeError("ZIP member list mismatch")
    member_rows = []
    for rel in paths:
        with check.open(rel) as stream:
            archived_hash = hashlib.sha256(stream.read()).hexdigest()
        local_hash = digest(ROOT / rel)
        member_rows.append({"path": rel, "sha256": local_hash, "matchesLocal": archived_hash == local_hash})
    if not all(row["matchesLocal"] for row in member_rows):
        raise RuntimeError("ZIP plate differs from local")

checkpoint = {
    "brief": 101,
    "date": DATE,
    "archive": archive.relative_to(ROOT).as_posix(),
    "archiveBytes": archive.stat().st_size,
    "archiveSha256": digest(archive),
    "zipCrcCheck": True,
    "plateCount": len(paths),
    "memberCount": len(members),
    "members": member_rows,
    "allMemberPaths": members,
}
(ASSETS / "brief101-media-checkpoint.json").write_text(json.dumps(checkpoint, indent=2) + "\n", encoding="utf-8")
print(f"Packaged {len(paths)} plates, {len(members)} members: {archive}")
