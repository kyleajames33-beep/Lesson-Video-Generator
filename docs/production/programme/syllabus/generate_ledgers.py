"""Rebuild brief 45 science ledgers from NESA's current public syllabus files.

Run from the repository root with: python docs/production/programme/syllabus/generate_ledgers.py
Requires python-docx and beautifulsoup4. The 2017 DOCX page numbers follow its
last rendered page breaks and should be checked in Word before publication.
"""

from __future__ import annotations

import concurrent.futures
import io
import json
import re
import urllib.request
from pathlib import Path

from bs4 import BeautifulSoup
from docx import Document


OUT = Path(__file__).parent
BASE = "https://curriculum.nsw.edu.au"
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; HSCScience syllabus ledger)"}


def fetch(url: str) -> bytes:
    return urllib.request.urlopen(urllib.request.Request(url, headers=HEADERS), timeout=45).read()


def clean_html(value: str) -> str:
    soup = BeautifulSoup(value or "", "html.parser")
    return re.sub(r"\s+", " ", soup.get_text(" ", strip=True)).strip()


def expand_components(value: str, linked: dict) -> str:
    soup = BeautifulSoup(value or "", "html.parser")
    for obj in list(soup.find_all("object", attrs={"data-codename": True})):
        component = linked.get(obj["data-codename"], {})
        html = component.get("elements", {}).get("content", {}).get("value")
        if html:
            obj.replace_with(BeautifulSoup(html, "html.parser"))
    return str(soup)


def save(name: str, data: dict) -> None:
    (OUT / name).write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def old_ledger(subject: str, docname: str, prefix: str) -> None:
    url = f"https://www.nsw.gov.au/sites/default/files/noindex/2025-03/{docname}"
    doc = Document(io.BytesIO(fetch(url)))
    modules = []
    active = None
    section = None
    inquiry = None
    in_content = False
    page = 1
    point = None
    section_number = 0
    point_number = 0
    for para in doc.paragraphs:
        page += len(para._p.xpath(".//w:lastRenderedPageBreak"))
        txt = para.text.strip()
        style = para.style.name
        if style == "Heading 2" and re.match(r"Module [5-8]:", txt):
            number = int(txt.split(":")[0].split()[1])
            active = {"module": number, "moduleTitle": txt.split(":", 1)[1].strip(),
                      "inquiryQuestions": [], "contentPoints": [], "sourceUrl": url,
                      "sourceFormat": "DOCX", "pageReferenceMethod": "lastRenderedPageBreak"}
            modules.append(active)
            section = inquiry = None
            in_content = False
            section_number = point_number = 0
            continue
        if style == "Heading 2" and active is not None:
            active = None
        if active is None:
            continue
        if style == "Heading 3":
            in_content = txt == "Content"
            continue
        if not in_content:
            continue
        if style == "Heading 4":
            section = txt
            inquiry = None
            section_number += 1
            point_number = 0
            continue
        if txt.startswith("Inquiry question:"):
            inquiry = txt.split(":", 1)[1].strip()
            active["inquiryQuestions"].append({"section": section, "text": inquiry, "page": page})
            continue
        if not txt or txt == "Students:":
            continue
        numpr = para._p.pPr.numPr if para._p.pPr is not None else None
        # The Chemistry Module 6 Ka/pKa bullet is styled as List Bullet but has
        # no direct numPr. Treat that Word list style as a top-level point.
        if numpr is None or numpr.ilvl is None:
            if style != "List Bullet":
                continue
            level = 0
        else:
            level = int(numpr.ilvl.val)
        if level == 0:
            point_number += 1
            point = {"id": f"{prefix}{active['module']}-IQ{section_number}-{point_number:02d}",
                     "text": txt, "section": section, "inquiryQuestion": inquiry,
                     "depthStudyOrPractical": bool(re.search(r"\b(investigat|experiment|practical|fieldwork)", txt, re.I)),
                     "examples": [], "sourceUrl": url, "page": page}
            active["contentPoints"].append(point)
        elif point is not None:
            point["examples"].append(txt)
    save(f"{subject}-2017-y12.json", {"subject": subject.title(), "syllabusYear": 2017,
                                      "year": 12, "modules": modules,
                                      "note": "Practical flag is a text search, not a formal NESA classification. Page references derive from DOCX rendered page breaks."})
    print(subject, "2017", [(m["module"], len(m["contentPoints"])) for m in modules], flush=True)


def next_data(url: str) -> dict:
    soup = BeautifulSoup(fetch(url), "html.parser")
    return json.loads(soup.find("script", id="__NEXT_DATA__").string)["props"]["pageProps"]["data"]


def focus_ledger(item: tuple[str, str], prefix: str, fa_num: int) -> dict:
    title, path = item
    data = next_data(BASE + path)["focusArea"]
    linked = data["linkedItems"]
    groups = []
    points = []
    for gi, group_id in enumerate(data["item"]["elements"]["contentgroups"]["value"], 1):
        group = linked[group_id]["elements"]
        group_title = group["title"]["value"]
        groups.append(group_title)
        for pi, item_id in enumerate(group["content_items"]["value"], 1):
            elem = linked[item_id]["elements"]
            title_html = expand_components(elem["title"]["value"], linked)
            including_html = expand_components(elem.get("including_statements", {}).get("value", ""), linked)
            statement = clean_html(title_html)
            including = clean_html(including_html)
            point = {"id": f"{prefix}-FA{fa_num}-G{gi}-{pi:02d}", "text": statement,
                     "group": group_title, "includingStatements": including or None,
                     "sourceHtml": title_html,
                     "includingStatementsHtml": including_html or None,
                     "depthStudyOrPractical": bool(re.search(r"\b(investigat|experiment|practical|fieldwork)", statement, re.I)),
                     "sourceItemId": item_id, "sourceUrl": BASE + path, "page": None}
            points.append(point)
    outcomes = []
    for outcome_id in data["item"]["elements"]["outcomes"]["value"]:
        outcome = linked[outcome_id]["elements"]
        outcomes.append({"code": outcome["code"]["value"],
                         "text": clean_html(outcome["description"]["value"])})
    return {"module": f"FA{fa_num}", "moduleTitle": title, "inquiryQuestion": None,
            "outcomes": outcomes,
            "contentGroups": groups, "contentPoints": points, "sourceUrl": BASE + path}


def new_ledger(subject: str, syllabus_path: str, year: int, prefix: str) -> None:
    root = BASE + "/learning-areas/science/" + syllabus_path + "/content"
    year_slug = f"year-{year}"
    start = next_data(root)["defaultFocusAreaUrls"]["n11" if year == 11 else "n12"]
    soup = BeautifulSoup(fetch(BASE + start), "html.parser")
    links = list(dict((a["href"], a.get_text(" ", strip=True)) for a in soup.find_all("a", href=True)
                      if f"/{syllabus_path}/content/{year_slug}/" in a["href"]).items())
    areas = [(title, href) for href, title in links if title]
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        modules = list(pool.map(lambda x: focus_ledger(x[1], prefix, x[0]), enumerate(areas)))
    save(f"{subject}-new-y{year}.json", {"subject": subject.title(), "syllabusYear": 2025,
                                        "year": year, "modules": modules,
                                        "sourceUrl": root, "note": "NESA HTML has no page numbers. Practical flag is a text search, not a formal NESA classification. Working scientifically is FA0 and is integrated across the other focus areas."})
    print(subject, "new", year, [(m["moduleTitle"], len(m["contentPoints"])) for m in modules], flush=True)


if __name__ == "__main__":
    old_ledger("chem", "chemistry-stage6-syllabus-word.docx", "C")
    old_ledger("bio", "biology-stage-6-syllabus-2017.docx", "B")
    for subject, path, prefix in [("bio", "biology-11-12-2025", "B25"),
                                  ("chem", "chemistry-11-12-2025", "C25")]:
        for year in (11, 12):
            new_ledger(subject, path, year, prefix)
