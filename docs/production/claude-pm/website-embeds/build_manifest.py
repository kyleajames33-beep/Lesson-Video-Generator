"""Brief 75: prepare website embed snippets without editing the site checkout."""

from __future__ import annotations

import html
import json
from collections import defaultdict
from pathlib import Path

from bs4 import BeautifulSoup


ROOT = Path(__file__).resolve().parents[4]
OUT = Path(__file__).resolve().parent
SITE = Path("C:/Users/kygs/hscscience")
YOUTUBE = ROOT / "docs/production/claude-pm/youtube"
OLD = ROOT / "docs/production/programme/site-video-manifest.json"

# New placements are based on the video's lesson link and the site's current headings.
# A practice video goes in the practice section rather than interrupting new teaching.
NEW_PLACEMENTS = {
    "A0Z2-OLzRCI": [("chemistry", 10, "Get oriented")],
    "btrFMU7Yhxc": [("biology", 5, "Benefits Must Be Balanced Against Biological and Ethical Trade-Offs")],
    "8hZ3MVi7kHU": [("chemistry", 7, "The industrial compromise")],
    "6BhGJlXbKCA": [("biology", 14, "Punnett squares as a probability model")],
    "PQ9nuqM4b-Y": [("chemistry", 15, "What happens when an ionic solid dissolves")],
    "QcSZ2Wn0CE0": [("biology", 6, "Practise independently"),
                    ("biology", 8, "Practise independently"),
                    ("biology", 10, "Practise independently"),
                    ("biology", 11, "Practise independently")],
    "4IYt7nemcRI": [("chemistry", 16, "The solubility rules")],
    "cY7hnSTN1uY": [("chemistry", 16, "Activities")],
    "UMgrHQaLSH8": [("chemistry", 17, "Writing a Ksp expression")],
}


def site_path(subject: str, number: int) -> str:
    return f"subjects/{subject}/year12/module5/lesson{number:02}.sa.html"


def duration_seconds(value: str) -> int:
    minutes, seconds = value.split(":")
    return 60 * int(minutes) + int(seconds)


def placement(path: str, heading: str) -> dict:
    source = SITE / path
    if not source.exists():
        raise FileNotFoundError(source)
    soup = BeautifulSoup(source.read_text(encoding="utf-8"), "html.parser")
    matches = [tag for tag in soup.find_all(["h2", "h3", "h4"])
               if tag.get_text(" ", strip=True) == heading]
    if not matches:
        raise ValueError(f"Heading not found: {path}: {heading}")
    tag = matches[0]
    step = tag.find_parent(class_="sa-step")
    if step is None:
        raise ValueError(f"Heading is outside a lesson step: {path}: {heading}")
    step_heading = step.select_one("h2.sa-step-title")
    return {
        "siteLessonPath": path,
        "sectionWhereItFits": heading,
        "sectionId": tag.get("id") or (step_heading.get("id") if step_heading else None),
        "stepHeading": step_heading.get_text(" ", strip=True) if step_heading else heading,
    }


def embed(entry: dict, place: dict) -> str:
    vid = entry["videoId"]
    title = html.escape(entry["title"], quote=True)
    duration = f"{entry['durationSeconds'] // 60}:{entry['durationSeconds'] % 60:02}"
    return "\n".join([
        f"<!-- Paste inside the .sa-step-content under: {html.escape(place['stepHeading'])} -->",
        '<div class="sa-callout sky" style="max-width:760px;margin:1.5rem auto;">',
        '  <span class="sa-callout-tag">Watch the video</span>',
        '  <div style="width:100%;aspect-ratio:16 / 9;">',
        f'    <iframe src="https://www.youtube-nocookie.com/embed/{vid}"',
        f'      title="{title}" loading="lazy"',
        '      style="width:100%;height:100%;border:0;border-radius:12px;display:block;"',
        '      referrerpolicy="strict-origin-when-cross-origin"',
        '      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"',
        '      allowfullscreen></iframe>',
        '  </div>',
        f'  <p><a href="https://youtu.be/{vid}">{title}</a> ({duration}, English captions)</p>',
        '</div>',
    ])


def main() -> None:
    old = {item["videoId"]: item for item in json.loads(OLD.read_text(encoding="utf-8"))}
    uploads = []
    for path in sorted(YOUTUBE.glob("wave*-uploads.json")):
        uploads.extend(json.loads(path.read_text(encoding="utf-8"))["videos"])
    published = [v for v in uploads if v.get("visibility") == "Public"
                 and v.get("status") not in ("superseded-deleted", "deleted")]
    ids = [v["videoId"] for v in published]
    if len(ids) != len(set(ids)):
        raise ValueError("Duplicate public video ID in upload ledgers")
    if set(ids) != set(old) | set(NEW_PLACEMENTS):
        raise ValueError(f"Unmapped videos: {set(ids) - set(old) - set(NEW_PLACEMENTS)}")

    manifest = []
    by_page = defaultdict(list)
    for video in published:
        vid = video["videoId"]
        if video.get("captionStatus") != "Published":
            raise ValueError(f"Captions not marked published: {vid}")
        if vid in old:
            base = old[vid]
            raw = [(path, base["sectionWhereItFits"]) for path in base["siteLessonPaths"]]
        else:
            raw = [(site_path(subject, number), heading)
                   for subject, number, heading in NEW_PLACEMENTS[vid]]
        places = [placement(path, heading) for path, heading in raw]
        item = {
            "videoId": vid,
            "youtubeUrl": f"https://youtu.be/{vid}",
            "title": video["title"],
            "subject": "Chemistry" if "Chemistry" in video["title"] else "Biology",
            "year": 12,
            "module": 5,
            "siteLessonPaths": [p["siteLessonPath"] for p in places],
            "placements": places,
            "durationSeconds": duration_seconds(video["duration"]),
            "captionsAvailable": True,
        }
        manifest.append(item)
        for place in places:
            by_page[place["siteLessonPath"]].append((item, place))

    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / "manifest.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    for page, items in by_page.items():
        snippet = OUT / "subjects" / page.removeprefix("subjects/")
        snippet = snippet.with_name(snippet.name + ".snippet")
        snippet.parent.mkdir(parents=True, exist_ok=True)
        snippet.write_text("\n\n".join(embed(entry, place) for entry, place in items) + "\n", encoding="utf-8")
    readme = [
        "# Website video embeds, Brief 75",
        "",
        "These are ready-to-paste blocks for the static Year 12 Module 5 lesson pages in `C:/Users/kygs/hscscience`. The site checkout was read only. No embed is live yet.",
        "",
        "Each snippet mirrors its site path under `subjects/` and ends in `.snippet`. Paste each block inside the named section's `.sa-step-content`, after the section introduction and before the worked explanation or activity. A snippet with several blocks serves several sections on the same page. Keep each block in the section named in its comment.",
        "",
        "The markup uses the site's existing `sa-callout sky` style and responsive inline sizing. The iframe loads from `www.youtube-nocookie.com` with `loading=lazy`; its title and link use the upload ledger's current public metadata. A direct YouTube link remains available below each player.",
        "",
        "| Site lesson | Placement | Video ID |",
        "| --- | --- | --- |",
    ]
    for page, items in sorted(by_page.items()):
        for entry, place in items:
            readme.append(f"| `{page}` | {place['sectionWhereItFits']} | `{entry['videoId']}` |")
    readme += [
        "",
        "After pasting, check the section opens normally, the player fits a phone screen, captions appear, and keyboard focus reaches the iframe and direct link. These are site checks for the owner before publishing.",
        "",
    ]
    (OUT / "README.md").write_text("\n".join(readme), encoding="utf-8")
    print(f"{len(manifest)} public videos; {len(by_page)} lesson snippets")


if __name__ == "__main__":
    main()
