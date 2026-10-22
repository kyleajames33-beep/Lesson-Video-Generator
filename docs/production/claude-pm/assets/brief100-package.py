"""Package brief 100 ignored media with a verifiable checkpoint."""
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

own = json.loads((ASSETS / "brief100-own-notes.json").read_text())
own_audit = json.loads((ASSETS / "brief100-qa/own-audit.json").read_text())
b03_p02 = json.loads((ASSETS / "brief100-b03-p02-notes.json").read_text())
b05 = json.loads((ASSETS / "brief100-b05-notes.json").read_text())

records = []
for row in own_audit:
    name = Path(row["path"]).name
    records.append({**row, "sourceGenerated": str(Path(own["sourceDirectory"]) / own["files"][name]), "tool": own["tool"], "part": "C03/C04a/C04b/B04"})
for row in b03_p02:
    records.append({"path": row["path"], "sourceGenerated": row["source"], "prompt": row["prompt"], "tool": row["tool"], "part": "B03/P02", "agentNotes": row.get("notes")})
for row in b05["plates"]:
    records.append({"path": row["path"], "part": "B05", "tool": b05["tool"],
                    "generationNativeSize": row["sourceNativeSize"],
                    "sourceGenerated": row["sourceGenerated"],
                    "promptSpec": row["promptSpec"],
                    "b05Review": b05.get("review", {}).get(Path(row["path"]).stem)})

paths = [r["path"] for r in records]
if len(paths) != 46 or len(set(paths)) != 46:
    raise RuntimeError(f"Expected 46 unique plate paths, got {len(paths)} total and {len(set(paths))} unique")
for row in records:
    path = ROOT / row["path"]
    if not path.exists():
        raise FileNotFoundError(path)
    with Image.open(path) as im:
        if im.size != (2000, 2000) or im.mode != "RGBA":
            raise RuntimeError(f"Bad plate size/mode: {path}: {im.size} {im.mode}")
        alpha = im.getchannel("A")
        if alpha.getextrema() != (0, 255):
            raise RuntimeError(f"Alpha extrema not 0..255: {path}")
        box = alpha.point(lambda v: 255 if v > 12 else 0).getbbox()
    row["size"] = [2000, 2000]
    row["mode"] = "RGBA"
    row["alphaBbox12"] = box
    row["minClearMarginFraction"] = min(box[0], box[1], 2000-box[2], 2000-box[3]) / 2000
    row["sha256"] = digest(path)

provenance = {
    "brief": 100,
    "date": DATE,
    "tool": "built-in image_gen",
    "plateCount": len(records),
    "parts": ["C03", "C04a", "C04b", "B03", "Bio P02", "B04", "B05"],
    "records": records,
    "qaNotes": [own["qaException"], b05.get("review", {})]
}
provenance_path = ASSETS / "brief100-provenance.json"
provenance_path.write_text(json.dumps(provenance, indent=2, ensure_ascii=False) + "\n")

members = paths + [
    provenance_path.relative_to(ROOT).as_posix(),
    "docs/production/claude-pm/assets/brief100-own-notes.json",
    "docs/production/claude-pm/assets/brief100-b05-notes.json",
    "docs/production/claude-pm/assets/brief100-b03-p02-notes.json",
]
members += [p.relative_to(ROOT).as_posix() for p in (ASSETS / "brief100-qa").rglob("*") if p.is_file()]
members = sorted(set(members))

archive = ROOT / "out/archives/brief100-plates-2026-10-22.zip"
archive.parent.mkdir(parents=True, exist_ok=True)
with zipfile.ZipFile(archive, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=6) as z:
    for rel in members:
        z.write(ROOT / rel, rel)
with zipfile.ZipFile(archive) as z:
    bad = z.testzip()
    if bad:
        raise RuntimeError(f"Bad ZIP member CRC: {bad}")
    archive_names = z.namelist()
    if sorted(archive_names) != members:
        raise RuntimeError("ZIP member list mismatch")
    member_rows = []
    for rel in paths:
        local = ROOT / rel
        with z.open(rel) as stream:
            archived = hashlib.sha256(stream.read()).hexdigest()
        local_hash = digest(local)
        member_rows.append({"path": rel, "sha256": local_hash, "matchesLocal": archived == local_hash})
    if not all(row["matchesLocal"] for row in member_rows):
        raise RuntimeError("ZIP plate differs from local")

checkpoint = {
    "brief": 100,
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
(ASSETS / "brief100-media-checkpoint.json").write_text(json.dumps(checkpoint, indent=2) + "\n")
print(f"Packaged {len(paths)} plates, {len(members)} members: {archive}")
