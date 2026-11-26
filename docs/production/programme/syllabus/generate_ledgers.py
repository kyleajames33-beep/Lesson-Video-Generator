"""Rebuild brief 45 science ledgers from NESA's current public syllabus files.

Run from the repository root with: python docs/production/programme/syllabus/generate_ledgers.py
Requires python-docx and beautifulsoup4. The 2017 DOCX page numbers follow its
last rendered page breaks and should be checked in Word before publication.
"""

from __future__ import annotations

import concurrent.futures
import argparse
import hashlib
import io
import json
import re
import threading
import urllib.request
from datetime import date
from pathlib import Path

from bs4 import BeautifulSoup
from docx import Document


OUT = Path(__file__).parent
BASE = "https://curriculum.nsw.edu.au"
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; HSCScience syllabus ledger)"}
CAPTURE_DIR = None
CAPTURES = {}
CAPTURE_LOCK = threading.Lock()


def fetch(url: str) -> bytes:
    body = urllib.request.urlopen(urllib.request.Request(url, headers=HEADERS), timeout=45).read()
    if CAPTURE_DIR is not None:
        target = CAPTURE_DIR / (hashlib.sha256(url.encode()).hexdigest() + ".html")
        with CAPTURE_LOCK:
            target.write_bytes(body)
            CAPTURES[url] = {"path": str(target), "sha256": hashlib.sha256(body).hexdigest()}
    return body


def mathml_text(node) -> str:
    """Keep operators, fractions, indices and powers when producing plain text."""
    if isinstance(node, str):
        return node.strip()
    name = node.name
    children = [c for c in node.children if getattr(c, 'name', None) not in ('annotation', 'annotation-xml')
                and not (isinstance(c, str) and not c.strip())]
    parts = [mathml_text(c) for c in children]
    if name == 'mfrac' and len(parts) == 2:
        if node.get('linethickness') == '0':
            return f'stack({parts[0]};{parts[1]})'
        return f'({parts[0]})/({parts[1]})'
    if name == 'msup' and len(parts) == 2:
        return f'{parts[0]}^({parts[1]})'
    if name == 'msub' and len(parts) == 2:
        return f'{parts[0]}_({parts[1]})'
    if name == 'msubsup' and len(parts) == 3:
        return f'{parts[0]}_({parts[1]})^({parts[2]})'
    if name == 'msqrt':
        return 'sqrt(' + ''.join(parts) + ')'
    if name == 'mroot' and len(parts) == 2:
        return f'root({parts[1]};{parts[0]})'
    if name in ('mover', 'munder', 'munderover'):
        return name + '(' + ';'.join(parts) + ')'
    if name in ('mtr', 'mtable'):
        return (';' if name == 'mtable' else ',').join(parts)
    if name == 'mfenced':
        return node.get('open', '(') + node.get('separators', ',').join(parts) + node.get('close', ')')
    return ''.join(parts)


def clean_html(value: str, preserve_math: bool = False) -> str:
    soup = BeautifulSoup(value or "", "html.parser")
    if preserve_math:
        for math in list(soup.find_all('math')):
            math.replace_with(mathml_text(math))
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
            preserve_math = prefix.startswith('P25')
            statement = clean_html(title_html, preserve_math=preserve_math)
            including = clean_html(including_html, preserve_math=preserve_math)
            point = {"id": f"{prefix}-FA{fa_num}-G{gi}-{pi:02d}", "text": statement,
                     "group": group_title, "includingStatements": including or None,
                     "sourceHtml": title_html,
                     "includingStatementsHtml": including_html or None,
                     "depthStudyOrPractical": bool(re.search(r"\b(investigat|experiment|practical|fieldwork)", statement, re.I)),
                     "sourceItemId": item_id, "sourceUrl": BASE + path, "page": None}
            if preserve_math:
                point['sourceMathML'] = [str(m) for m in BeautifulSoup(title_html + including_html, 'html.parser').find_all('math')]
            points.append(point)
    outcomes = []
    for outcome_id in data["item"]["elements"]["outcomes"]["value"]:
        outcome = linked[outcome_id]["elements"]
        outcomes.append({"code": outcome["code"]["value"],
                         "text": clean_html(outcome["description"]["value"])})
    return {"module": f"FA{fa_num}", "moduleTitle": title, "inquiryQuestion": None,
            "outcomes": outcomes,
            "contentGroups": groups, "contentPoints": points, "sourceUrl": BASE + path}


def new_ledger(subject: str, syllabus_path: str, year: int, prefix: str, retrieval_date: str | None = None) -> None:
    retrieval_date = retrieval_date or date.today().isoformat()
    # Local aliases must identify the year as well as the subject.
    if year == 12 and not prefix.endswith("Y12"):
        prefix += "Y12"
    root = BASE + "/learning-areas/science/" + syllabus_path + "/content"
    year_slug = f"year-{year}"
    start = next_data(root)["defaultFocusAreaUrls"]["n11" if year == 11 else "n12"]
    soup = BeautifulSoup(fetch(BASE + start), "html.parser")
    links = list(dict((a["href"], a.get_text(" ", strip=True)) for a in soup.find_all("a", href=True)
                      if f"/{syllabus_path}/content/{year_slug}/" in a["href"]).items())
    areas = [(title, href) for href, title in links if title]
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        modules = list(pool.map(lambda x: focus_ledger(x[1], prefix, x[0]), enumerate(areas)))
    for module in modules:
        module["retrievalDate"] = retrieval_date
        for point in module["contentPoints"]:
            point["officialCodename"] = point["sourceItemId"]
            point["retrievalDate"] = retrieval_date
    save(f"{subject}-new-y{year}.json", {"subject": subject.title(), "syllabusYear": 2025,
                                        "year": year, "modules": modules,
                                        "sourceUrl": root, "retrievalDate": retrieval_date,
                                        "note": f"Local {prefix} identifiers are convenience aliases. officialCodename/sourceItemId is the exact NESA CMS codename. Working scientifically is integrated FA0. HTML has no page numbers."})
    print(subject, "new", year, [(m["moduleTitle"], len(m["contentPoints"])) for m in modules], flush=True)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--new", choices=["bio", "chem", "phys"], help="Rebuild only this new-syllabus subject")
    parser.add_argument("--year", type=int, choices=[11, 12])
    parser.add_argument("--retrieval-date", default=None)
    parser.add_argument("--capture-dir", type=Path, help="Keep the exact public HTML and its SHA-256")
    args = parser.parse_args()
    CAPTURE_DIR = args.capture_dir
    if CAPTURE_DIR is not None:
        CAPTURE_DIR.mkdir(parents=True, exist_ok=True)
    subjects = [("bio", "biology-11-12-2025", "B25"),
                ("chem", "chemistry-11-12-2025", "C25"),
                ("phys", "physics-11-12-2025", "P25")]
    if args.new:
        if args.year is None:
            parser.error("--new requires --year")
        subject, syllabus, prefix = next(row for row in subjects if row[0] == args.new)
        new_ledger(subject, syllabus, args.year, prefix, args.retrieval_date)
    else:
        old_ledger("chem", "chemistry-stage6-syllabus-word.docx", "C")
        old_ledger("bio", "biology-stage-6-syllabus-2017.docx", "B")
        for subject, syllabus, prefix in subjects:
            for year in (11, 12):
                new_ledger(subject, syllabus, year, prefix, args.retrieval_date)
    if CAPTURE_DIR is not None:
        (CAPTURE_DIR / "sources.json").write_text(json.dumps(CAPTURES, indent=2) + "\n", encoding="utf-8")
