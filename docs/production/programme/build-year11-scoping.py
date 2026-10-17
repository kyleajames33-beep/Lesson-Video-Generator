"""Build brief 49 inventory and source extracts from the read-only site checkout."""

from __future__ import annotations

import difflib
import json
import re
from pathlib import Path

from bs4 import BeautifulSoup


REPO = Path(__file__).parents[3]
SITE = Path('C:/Users/kygs/hscscience')
EXTRACTS = REPO / 'docs/production/claude-pm/site-extracts'
OUT = Path(__file__).parent / 'year11-scoping.md'
LEDGER = REPO / 'docs/production/programme/syllabus'

# Candidate links for the Chemistry draft areas whose pages omit `teaches` metadata.
# The source page must be read against the point before these become coverage claims.
CHEM_DRAFT_CANDIDATES = {
    2: {
        1: ['G1-01', 'G1-02', 'G1-06'], 2: ['G1-03'], 3: ['G1-04', 'G1-05'],
        4: ['G2-01', 'G2-02'], 5: ['G2-03'], 6: ['G2-04', 'G2-05'],
        7: ['G2-06'], 8: ['G2-07'], 9: ['G2-08'], 10: ['G3-01'],
        11: ['G3-02'], 12: ['G3-04', 'G3-05'], 13: ['G3-06'],
        14: ['G3-07'], 15: ['G4-01'], 16: ['G4-02'], 17: ['G4-03'],
        18: ['G4-04'], 19: ['G4-05'], 20: ['G4-06'], 21: ['G4-02'],
        22: ['G3-03'], 23: ['G2-08', 'G3-07', 'G4-06'], 24: [],
    },
    3: {
        1: ['G1-01'], 2: ['G1-02'], 3: ['G1-03'], 4: ['G1-04', 'G1-05'],
        5: ['G1-06', 'G1-09'], 6: ['G1-07'], 7: ['G1-08', 'G1-09'],
        8: ['G1-10'], 9: ['G1-11'], 10: ['G1-12'], 11: ['G1-13'],
        12: ['G2-01'], 13: ['G2-02'], 14: ['G2-03'], 15: ['G3-01'],
        16: ['G3-02'], 17: ['G3-03'], 18: ['G3-04'], 19: ['G3-05'],
        20: ['G3-06'], 21: ['G3-07'], 22: ['G3-08'],
        23: ['G3-09', 'G3-10'], 24: [],
    },
}

# Old 2017 lesson titles aligned to likely 2025 Year 11 points. Empty entries
# indicate that no specific 2025 Year 11 point is apparent from the title.
CHEM_OLD_CANDIDATES = {
    1: {
        1: ['FA1-G1-01'], 2: ['FA1-G1-01'], 3: ['FA1-G1-01'], 4: ['FA1-G1-01'],
        5: [], 6: ['FA1-G4-02', 'FA1-G4-05', 'FA1-G4-09'],
        7: ['FA1-G4-05', 'FA1-G4-06'], 8: ['FA1-G4-02', 'FA1-G4-03'],
        9: ['FA1-G4-09'], 10: ['FA1-G4-13'], 11: [], 12: [],
        13: ['FA1-G2-01'], 14: ['FA1-G2-03', 'FA1-G2-04'],
        15: ['FA1-G3-01'], 16: ['FA1-G2-13'], 17: ['FA1-G3-03'],
        18: ['FA1-G3-04'], 19: ['FA1-G2-15'], 20: ['FA1-G2-06'], 21: [],
    },
    2: {
        1: ['FA2-G2-01'], 2: ['FA2-G2-03'], 3: ['FA2-G2-06'],
        4: ['FA2-G4-02'], 5: [], 6: ['FA2-G3-01', 'FA2-G3-02'],
        7: ['FA2-G3-04', 'FA2-G3-05'], 8: ['FA2-G3-01'], 9: [], 10: [],
        11: ['FA2-G2-05'], 12: ['FA2-G2-08'], 13: ['FA2-G2-07'],
        14: [], 15: ['FA2-G4-06'], 16: ['FA2-G3-07'],
        17: ['FA2-G3-02'], 18: [], 19: [], 20: [],
    },
    3: {
        1: ['FA3-G1-01'], 2: ['FA3-G1-01', 'FA3-G1-02'],
        3: ['FA3-G1-04', 'FA3-G1-05'], 4: ['FA3-G1-01'],
        5: ['FA3-G1-01'], 6: ['FA3-G1-03'], 7: ['FA3-G1-06', 'FA3-G1-11'],
        8: ['FA3-G1-07'], 9: [], 10: [], 11: ['FA3-G2-01'],
        12: ['FA3-G2-02'],
    },
    4: {
        1: ['FA3-G3-01', 'FA3-G3-04'], 2: ['FA3-G3-06', 'FA3-G3-08'],
        3: ['FA3-G3-06', 'FA3-G3-08'], 4: ['FA3-G3-06', 'FA3-G3-08'],
        5: ['FA3-G3-09'], 6: ['FA3-G3-03'], 7: [], 8: [], 9: [],
        10: [], 11: [], 12: [], 13: [],
    },
}


def tidy(s: str, maxlen: int | None = None) -> str:
    s = re.sub(r'\s+', ' ', s or '').strip().replace(chr(0x2014), ':')
    s = re.sub(r'\s+([,.;?!])', r'\1', s)
    if not maxlen or len(s) <= maxlen:
        return s
    sentences = re.split(r'(?<=[.!?])\s+(?=[A-Z"“‘])', s)
    short = []
    for sentence in sentences:
        candidate = ' '.join(short + [sentence])
        if len(candidate) > maxlen and short:
            break
        short.append(sentence)
        if len(candidate) >= maxlen:
            break
    return ' '.join(short)


def first_sentence(s: str) -> str:
    s = tidy(s)
    candidates = re.split(r'(?<=[.!?])\s+(?=[A-Z"“‘])', s)
    first = candidates[0].strip() if candidates else ''
    return first if re.search(r'[.!?]["”’]?$', first) else ''


def norm(s: str) -> str:
    return re.sub(r'[^a-z0-9]+', '', s.lower())


def points(subject: str) -> list[dict]:
    data = json.loads((LEDGER / f'{subject}-new-y11.json').read_text(encoding='utf-8'))
    return [p for m in data['modules'] if m['module'] != 'FA0' for p in m['contentPoints']]


def metadata(soup: BeautifulSoup) -> list[str]:
    for sc in soup.find_all('script', type='application/ld+json'):
        try:
            obj = json.loads(sc.string or sc.get_text())
        except (ValueError, TypeError):
            continue
        if isinstance(obj, dict) and obj.get('teaches'):
            val = obj['teaches']
            if isinstance(val, list):
                return [tidy(str(x)) for x in val]
            return [tidy(x) for x in re.split(r'\|\||;\s+(?=[A-Z])', str(val)) if x.strip()]
    return []


def map_point(text: str, pool: list[dict], allow_candidate: bool = True) -> tuple[str, str]:
    key = norm(text)
    exact = [p for p in pool if norm(p['text']) == key]
    if exact:
        return exact[0]['id'], 'exact'
    contained = [p for p in pool if key and (key in norm(p['text']) or norm(p['text']) in key)]
    if len(contained) == 1 and min(len(key), len(norm(contained[0]['text']))) >= 35:
        return contained[0]['id'], 'close wording'
    if allow_candidate:
        scores = sorted(((difflib.SequenceMatcher(None, key, norm(p['text'])).ratio(), p) for p in pool),
                        key=lambda pair: pair[0], reverse=True)
        if scores and scores[0][0] >= 0.62:
            return scores[0][1]['id'], 'candidate, check source'
    return '', 'unmapped'


def question(soup: BeautifulSoup, title: str) -> str:
    hook = soup.select_one('.sa-hook-body')
    source = tidy(hook.get_text(' ', strip=True)) if hook else ''
    found = [x for x in re.split(r'(?<=[.!?])\s+(?=[A-Z“"‘])', source) if '?' in x]
    if found:
        result = re.sub(r"^Today's hook:\s*", '', found[-1], flags=re.I)
        return tidy(result).strip(' "“”‘’')
    return 'No explicit question found in the hook.'


def content_cards(soup: BeautifulSoup) -> list[tuple[str, str]]:
    cards = []
    excluded = ('Before You Read', 'Learning Intentions', 'Scan these', 'Misconceptions',
                'Activity', 'Multiple Choice', 'Short Answer', 'Check what', 'Lock it in',
                'How did your thinking', 'Drill', 'Practise', 'Warm up')
    for h in soup.select('h2.sa-card-title'):
        title = tidy(h.get_text(' ', strip=True))
        if title.startswith(excluded):
            continue
        card = h.find_parent(class_='sa-card')
        if not card:
            continue
        paras = [first_sentence(p.get_text(' ', strip=True)) for p in card.find_all('p')
                 if not any(c in (p.get('class') or []) for c in
                            ('sa-card-subtitle', 'sa-bridge', 'sa-copy-cue'))]
        paras = [p for p in paras if p and not p.startswith(('We just saw', 'That raises a question'))]
        if paras:
            cards.append((title, paras[0]))
    if not cards:
        for h in soup.find_all('h2'):
            title = tidy(h.get_text(' ', strip=True))
            if title and not title.startswith(excluded):
                nextp = h.find_next('p')
                if nextp:
                    summary = first_sentence(nextp.get_text(' ', strip=True))
                    if summary:
                        cards.append((title, summary))
    return cards[:8]


def extract(page: dict, path: Path) -> None:
    soup = page['soup']
    title = page['title']
    source = page['path'].as_posix()
    cards = content_cards(soup)
    terms = []
    for x in soup.select('.sa-kt-item')[:10]:
        term = x.select_one('.sa-kt-term')
        definition = x.select_one('.sa-kt-def')
        if term and definition:
            terms.append(f"- {tidy(term.get_text(' ', strip=True))}: {tidy(definition.get_text(' ', strip=True), 130)}")
    misc = []
    for x in soup.select('.tint-rose')[:3]:
        text = tidy(x.get_text(' ', strip=True), 260)
        if 'Wrong:' in text or 'Misconception' in text:
            misc.append('- ' + text)
    worked = []
    for h in soup.find_all(['h2', 'h3']):
        if 'worked example' in h.get_text(' ', strip=True).lower():
            parent = h.find_parent(class_='sa-card') or h.parent
            worked.append('- ' + tidy(parent.get_text(' ', strip=True), 380))
    activities = [tidy(h.get_text(' ', strip=True)) for h in soup.find_all(['h2', 'h3'])
                  if any(word in h.get_text(' ', strip=True).lower() for word in ('activity', 'question', 'multiple choice'))][:8]
    review = page['path'].with_name(page['path'].name.replace('.sa.html', '.review.json'))
    sample = None
    if review.exists():
        try:
            questions = json.loads(review.read_text(encoding='utf-8')).get('questions', [])
            if questions:
                sample = questions[0].get('stem')
        except ValueError:
            pass
    ids = ', '.join(mid + (' (candidate)' if status.startswith('candidate') else '')
                    for mid, status in page['matches'] if mid) or 'No verified new-syllabus ID from metadata'
    text = [f'# {title}', '', '## 1. Title and main question', '',
            f'{title}{"" if title.endswith((".", "?", "!")) else "."} {page["question"]}', '', f'Source: `{source}`.', '',
            '## 2. Syllabus content covered', '',
            f'New-syllabus ledger IDs: {ids}.',
            'Site metadata: ' + ('; '.join(page['teaches'][:3]) if page['teaches'] else 'No `teaches` entry found.'), '',
            '## 3. Key ideas in order', '']
    text += [f'{i}. {name}: {summary}' for i, (name, summary) in enumerate(cards, 1)] or ['Content sections need a manual read.']
    text += ['', '## 4. Key terms', ''] + (terms or ['No structured term list found by the extractor.'])
    text += ['', '## 5. Worked examples', ''] + (worked[:2] or ['No explicitly labelled worked example found by the extractor.'])
    text += ['', '## 6. Misconceptions the page addresses', ''] + (misc or ['No structured misconception card found by the extractor.'])
    text += ['', '## 7. Practical or real-world examples used', '']
    examples = [f'- {name}: {summary}' for name, summary in cards if re.search('practical|experiment|field|real.world|medicine|industry|application', name + ' ' + summary, re.I)]
    text += examples[:3] or ['Inspect the source page for examples before designing a video.']
    text += ['', '## 8. Activities and questions', '']
    text += ['- Page sections: ' + ', '.join(activities) + '.' if activities else '- Inspect page activities.']
    if sample:
        text += ['- Sample review question: ' + tidy(sample, 260)]
    text += ['', '## 9. Anything the current video script contradicts or omits', '',
             'No current explainer video script was compared.', '',
             'Extractor note: This is a short source digest. Check the full page for worked numbers and diagrams before scripting.', '']
    path.write_text('\n'.join(text).replace(chr(0x2014), ':'), encoding='utf-8')


def run() -> None:
    roots = [('Biology 2025', 'bio', SITE / 'subjects/biology/year11', 'bio-y11'),
             ('Chemistry 2025 draft', 'chem', SITE / '_new-syllabus-2027/chemistry-2025/year11', 'chem-y11'),
             ('Chemistry 2017 live', 'chem', SITE / 'subjects/chemistry/year11', 'chem-y11')]
    data = []
    used = {'bio': set(), 'chem': set()}
    candidate_used = {'bio': set(), 'chem': set()}
    for label, subject, root, prefix in roots:
        pool = points(subject)
        pages = []
        for file in sorted(root.rglob('lesson*.sa.html')):
            soup = BeautifulSoup(file.read_text(encoding='utf-8'), 'html.parser')
            h1 = soup.find('h1')
            title = tidy(h1.get_text(' ', strip=True) if h1 else (soup.title.get_text(' ', strip=True) if soup.title else file.stem))
            area = re.search(r'(fa|module)(\d+)', file.parent.name)
            area_num = int(area.group(2)) if area else 0
            num = int(re.search(r'lesson(\d+)', file.name).group(1))
            teaches = metadata(soup)
            matches = [map_point(t, pool, label != 'Chemistry 2017 live') for t in teaches]
            if label == 'Chemistry 2025 draft' and not teaches:
                matches = [(f'C25-FA{area_num}-{suffix}', 'candidate, check source')
                           for suffix in CHEM_DRAFT_CANDIDATES.get(area_num, {}).get(num, [])]
            if label == 'Chemistry 2017 live':
                matches = [(f'C25-{suffix}', 'candidate, check source')
                           for suffix in CHEM_OLD_CANDIDATES.get(area_num, {}).get(num, [])]
            ids = list(dict.fromkeys(mid for mid, status in matches if mid))
            for mid, status in matches:
                if mid and label != 'Chemistry 2017 live':
                    candidate_used[subject].add(mid)
                if mid and status in ('exact', 'close wording') and label != 'Chemistry 2017 live':
                    used[subject].add(mid)
            body_len = len(soup.body.get_text(' ', strip=True)) if soup.body else 0
            state = 'content present' if h1 and body_len > 1800 else 'placeholder or short page'
            page = {'path': file, 'soup': soup, 'title': title, 'question': question(soup, title),
                    'area': area_num, 'num': num, 'teaches': teaches, 'matches': matches, 'ids': ids,
                    'state': state, 'noindex': bool(soup.find('meta', attrs={'name': 'robots', 'content': re.compile('noindex')}))}
            pages.append(page)
            if state == 'content present':
                segment = f'm{area_num}' if label == 'Chemistry 2017 live' else f'fa{area_num}'
                dest = EXTRACTS / f'{prefix}-{segment}-l{num:02d}.md'
                extract(page, dest)
        data.append((label, root, pages))
    lines = ['# Year 11 new-syllabus scoping', '', 'Checked 16 October 2026 against the local site checkout and brief 45 NESA ledgers.', '',
             'The lesson mapping uses each page’s structured `teaches` metadata. `Exact` and `close wording` matches are counted as metadata coverage. Candidate mappings need a page read; they do not prove teaching or review approval. A content-present HTML file is not a science, teaching or publication pass.', '',
             'NESA starts the 2025 Biology Year 11 course in Term 1 2027 and the 2025 Chemistry Year 11 course in Term 1 2028. The `_new-syllabus-2027/chemistry-2025` folder name and its README launch year are stale.', '']
    for label, root, pages in data:
        lines += [f'## {label}', '', f'Source: `{root.as_posix()}`. {len(pages)} lesson HTML files. '
                  f'{sum(p["state"] == "content present" for p in pages)} have substantial content; '
                  f'{sum(p["noindex"] for p in pages)} carry `noindex`; '
                  f'{sum(bool(p["teaches"]) for p in pages)} have structured `teaches` metadata.', '',
                  '| Area | Lesson | Title and main question | New-syllabus point IDs | State |',
                  '| --- | --- | --- | --- | --- |']
        for p in pages:
            match_parts = [mid + ('?' if status.startswith('candidate') else '') for mid, status in p['matches'] if mid]
            mapped = ', '.join(match_parts) or 'unmapped'
            title_stop = '' if p['title'].endswith(('.', '?', '!')) else '.'
            lines.append(f'| {p["area"]} | {p["num"]:02d} | {p["title"]}{title_stop} {p["question"]} | {mapped} | {p["state"]} |')
        lines.append('')
    for subject, title in [('bio', 'Biology'), ('chem', 'Chemistry')]:
        missing = [p for p in points(subject) if p['id'] not in used[subject]]
        chem_note = (' Chemistry FA2 and FA3 have no `teaches` metadata, so their lesson-to-point links above are title-based candidates only.'
                     if subject == 'chem' else '')
        lines += [f'## {title} metadata gaps', '',
                  f'{len(missing)} of {len(points(subject))} focus-area points have no exact or close match in the 2025 Year 11 lesson metadata. This is a metadata gap list, not proof that the page body omits the idea.{chem_note} Working scientifically is integrated and is not counted here.', '']
        lines += [f'- {p["id"]}: {tidy(p["text"], 180)}' for p in missing]
        provisional = [p for p in points(subject) if p['id'] not in candidate_used[subject]]
        lines += ['', f'After including title-based and wording candidates, {len(provisional)} focus-area points still have no candidate site lesson. This is the narrower page-review queue:', '']
        lines += [f'- {p["id"]}: {tidy(p["text"], 180)}' for p in provisional] or ['- None.']
        lines.append('')
    lines += ['## Old Chemistry course and video reuse', '',
              'The live Chemistry Year 11 folders are Modules 1 to 4 of the 2017 syllabus. Their page metadata can suggest new focus-area links, but the mapping requires a content review. The 2025 Chemistry pages are a separate draft course, outside `subjects/`, with `noindex` and no recorded gate. For the new course, organise videos by Properties and structure of matter, Quantitative chemistry and Chemical reactions, not the old four-module route.', '',
              'Old live Chemistry lessons whose main topic has no matching 2025 Year 11 main point include M1 lesson 11 (polymers), M2 lessons 9 and 10 (gravimetric analysis and titration), M2 lesson 14 (percentage yield and purity), M3 lessons 9 and 10 (galvanic cells), and M4 lessons 7 to 13 (enthalpy of formation, Hess’s law, entropy and Gibbs free energy). Some ideas may belong in new Year 12 or appear as supporting examples; do not copy these lessons into a Year 11 route without a separate syllabus check.', '',
              'The old slide-engine dependency audit records six older public Year 11 videos: Mole Concept Part A, molar mass and four calculation lessons. Their topic overlap with Quantitative chemistry is plausible; no video is cleared as 2025-syllabus coverage without an exact content and voiced-package review. See `docs/production/claude-pm/research/old-engine-ideas-audit.md`.', '',
              'No `*-temp.js` or `*-missing.js` files were found in the three Year 11 source roots.', '',
              'Working scientifically has 32 Biology Year 11 and 34 Chemistry Year 11 content points in the NESA ledgers. They are integrated across focus areas. The site metadata does not map each of these points to a lesson, so a practical and skills coverage audit is still needed.', '',
              '## Initial video count for planning', '',
              '| New focus area | Site lessons | Initial video range |', '| --- | ---: | ---: |',
              '| Biology: Cells as the basis of life | 25 | 25 to 35 |',
              '| Biology: Cells to systems | 25 | 25 to 35 |',
              '| Biology: Evolution and ecosystems | 25 | 25 to 35 |',
              '| Chemistry: Properties and structure of matter | 27 | 27 to 38 |',
              '| Chemistry: Quantitative chemistry | 24 | 24 to 34 |',
              '| Chemistry: Chemical reactions | 24 | 24 to 34 |', '',
              'These are rough planning ranges based on one video per site lesson through about 1.4 videos per lesson. Set actual boundaries from the main learner question and the syllabus points after reviewing each page.', '',
              '## Remaining checks', '',
              '- Read every candidate and unmapped page body to distinguish a real content gap from shortened metadata.',
              '- Check the 2025 Biology and Chemistry pages for science accuracy and teaching quality before video design.',
              '- Compare the old Year 11 chemistry videos to the exact 2025 syllabus points and their original voiced exports.',
              '- Review old 2017 Chemistry extracts against full page bodies before using them for 2025 video design.', '']
    OUT.write_text('\n'.join(lines).replace(chr(0x2014), ':'), encoding='utf-8')
    print([(label, len(pages)) for label, _, pages in data])


if __name__ == '__main__':
    run()
