import json, re, os, sys, importlib
sys.path.insert(0, os.path.dirname(__file__))
REPO = 'C:/lesson-video-generator/docs/production'
SCR = os.path.dirname(__file__)
COMMIT = '5d74a62729764d93f6bf22c3d09c6535f28b8090'
cw = json.load(open(REPO + '/programme/syllabus/maths-advanced-2024-y11-crosswalk.json', encoding='utf-8'))
outline = json.load(open(REPO + '/programme/maths-a11-course-outline.json', encoding='utf-8'))
POINTS = {}
for fa in cw['focusAreas']:
    for p in fa['contentPoints']:
        POINTS[p['id']] = dict(p, focus=fa['title'], url=fa['sourceUrl'])
INV = {l['path']: l for l in cw['siteLessonInventory']}
OUT = {v['id']: v for v in outline['videos']}
NEXT_START = {}


def flat(path):
    f = os.path.join(SCR, 'site', path.replace('/', '_').replace('.sa.html', '.txt'))
    s = open(f, encoding='utf-8').read()
    return re.sub(r'\s+', ' ', s)


def worked(path, wid):
    s = flat(path)
    m = re.search(re.escape('[[WORKED %s]]' % wid) + r'(.*?)\[\[/WORKED\]\]', s)
    body = m.group(1)
    body = re.sub(r'Reveal next step( →)?', ' ', body)
    body = re.sub(r'\bStep\s+of \d', ' ', body)
    body = re.sub(r'\b\d of \d\b', ' ', body)
    body = re.sub(r'(?<=\s)of \d(?=\s|$)', ' ', body)
    body = re.sub(r'\+\d+ XP on full reveal', ' ', body)
    body = re.sub(r'Band \d( (Apply|Analyse|Understand))?', ' ', body)
    body = re.sub(r'\s+', ' ', body).strip()
    body = re.sub(r" ?Step$", "", body)
    return body


def quote(path, start, end):
    s = flat(path)
    try:
        i = s.index(start)
        j = s.index(end, i) + len(end)
    except ValueError:
        raise SystemExit('quote not found in %s: %r ... %r' % (path, start, end))
    return s[i:j]


def check_no_emdash(txt, where):
    if '\u2014' in txt:
        raise SystemExit('em dash in ' + where)


def pack(v):
    o = OUT[v['id']]
    L = []
    L.append('# %s: %s' % (v['id'], o['mainLearnerQuestion']))
    L.append('')
    L.append('Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.')
    L.append('')
    L.append('## 1. Exact 2024 syllabus content and entry knowledge')
    L.append('')
    for pid in o['syllabusActionIds']:
        p = POINTS[pid]
        line = '- `%s` (%s): %s [NESA](%s). Site coverage: %s.' % (pid, p['group'], p['text'], p['url'], p['status'])
        if p['status'] != 'covered' and p.get('gapOrNote'):
            line += ' Gap: ' + p['gapOrNote']
        L.append(line)
    if v.get('share'):
        L.append('')
        L.append(v['share'])
    L.append('')
    L.append('These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.')
    L.append('')
    L.append('**Entry knowledge:** ' + ' '.join('%s: %s' % (s, t) for s, t in v['ek']))
    L.append('')
    L.append('**Prior video:** %s.' % v['prior'])
    L.append('')
    L.append('**Start:** ' + v['start'])
    L.append('')
    L.append('**Stop:** ' + v['stop'])
    L.append('')
    L.append('**Next:** %s.' % v['next'])
    L.append('')
    L.append('## 2. Site order, sections and worked examples')
    L.append('')
    for src in v['sources']:
        inv = INV[src['path']]
        L.append('Read-only source: [%s](%s) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `%s`. Title: %s. Lesson id %s.%s' % (
            src['path'], inv['url'], inv['sha256'], inv['h1'], inv['lessonId'], (' ' + src['note']) if src.get('note') else ''))
        L.append('')
        L.append('Data-step ids: ' + ', '.join('`%s`' % s for s in inv['sectionIds']) + '.')
        L.append('')
        for wid in src.get('examples', []):
            L.append('### Source %s, `%s`' % (src['path'], wid))
            L.append('')
            L.append(worked(src['path'], wid))
            L.append('')
        for label, st, en in src.get('cards', []):
            L.append('### Source %s, %s' % (src['path'], label))
            L.append('')
            L.append(quote(src['path'], st, en))
            L.append('')
        if src.get('deferred'):
            L.append(src['deferred'])
            L.append('')
    L.append('Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.')
    L.append('')
    L.append('## 3. Recalculation')
    L.append('')
    for b in v['recalc']:
        L.append('- ' + b)
    L.append('')
    L.append(v.get('recalcClose', 'Every example above was recalculated with SymPy (`work/brief243-t/recalc.py`, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site\'s numbers.'))
    L.append('')
    L.append('## 4. Misconceptions and HSC-style traps')
    L.append('')
    for b in v['traps']:
        L.append('- ' + b)
    L.append('')
    L.append('These follow from the functions and official content, not claims about how often markers see them.')
    L.append('')
    L.append('## 5. Visual needs')
    L.append('')
    for b in v['visuals']:
        L.append('- ' + b)
    L.append('')
    L.append('All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Part names are checked against the exports of `src/explainer/math/studio/` and `src/explainer/math/` (17 November 2026); proposed new parts are listed in `../../checks/maths-a11-kit-needs.md`, section "Trigonometry strand (t01 to t16)". Spoken maths follows the course conventions: decimals said "zero point ...", degrees and radians always named ("sixty degrees", "pi over three radians"), cosec said "cosec".')
    L.append('')
    L.append('## 6. Two original candidate practice questions')
    L.append('')
    for i, (q, a) in enumerate(v['questions'], 1):
        L.append('### Question %d' % i)
        L.append('')
        L.append(q)
        L.append('')
        L.append('**Worked answer:** ' + a)
        L.append('')
    L.append('Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy (`work/brief243-t/recalc.py`).')
    L.append('')
    L.append('## 7. Everyday anchors')
    L.append('')
    for b in v['anchors']:
        L.append('- ' + b)
    L.append('')
    L.append('Varied everyday contexts (money, phones, sport, travel, cooking, games, building and DIY, music, home). None repeats an anchor context in the Year 12 Maths designs (`lessons/math-a12-*.md`, including the Ferris wheel, bike pedal, guitar, lighthouse beam, sun and shadow, drone and tide board), the Year 11 w, c and e designs, or the w, c and e pack suggestions (grepped 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects, never people.')
    L.append('')
    L.append('## 8. Site corrections and decisions for Claude')
    L.append('')
    L.append('See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.')
    L.append('')
    if v.get('findings'):
        L.append('Site findings from this pack (logged in section 7 of `site-corrections-maths-a11.md`, 17 November 2026):')
        L.append('')
        for b in v['findings']:
            L.append('- ' + b)
        L.append('')
    L.append('Decisions for Claude:')
    L.append('')
    for b in v['decisions']:
        L.append('- ' + b)
    nxt = NEXT_START.get(v['id'])
    if nxt:
        L.append("- Join: the next pack (%s) opens on this video's final frame. Its start reads: %s" % (v['next'], nxt))
    elif v['next']:
        L.append('- Join: %s has no pack yet; leave the final frame free for its designer.' % v['next'])
    L.append('')
    L.append('Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.')
    L.append('')
    txt = '\n'.join(L)
    return txt


def route_entry(v):
    o = OUT[v['id']]
    acts = []
    for pid in o['syllabusActionIds']:
        p = POINTS[pid]
        acts.append({'id': pid, 'text': p['text'], 'sourceHtml': p['sourceHtml'], 'sourceUrl': p['url'],
                     'siteCoverage': p['status'], 'siteGap': p['gapOrNote'] if p['status'] != 'covered' else None})
    lessons = []
    for src in v['sources']:
        inv = INV[src['path']]
        lessons.append({'path': 'kyleajames33-beep/Teaching-APP@5d74a627:subjects/maths-advanced/year11/' + src['path'],
                        'url': inv['url'], 'sectionIds': inv['sectionIds'], 'sectionSelector': 'data-step-id',
                        'exampleIds': src.get('examples', []), 'sha256': inv['sha256']})
    return {
        'id': v['id'], 'playlistOrder': o['playlistOrder'], 'mainLearnerQuestion': o['mainLearnerQuestion'],
        'syllabusActionIds': o['syllabusActionIds'], 'syllabusActions': acts,
        'sourceLesson': lessons[0], 'sourceLessons': lessons,
        'entryKnowledge': [{'source': s, 'text': t} for s, t in v['ek']],
        'prerequisiteVideos': [v['prior']] if v['prior'] else [],
        'startBoundary': v['start'], 'stopBoundary': v['stop'], 'nextHandoff': v['next'],
        'recommendation': v.get('rec', 'Keep the focused boundary and the site\'s exact worked-example numbers. Partial or missing site coverage needs original teaching. Old module labels are not the route. Claude chooses final splits and length.'),
        'preDesignPack': 'docs/production/claude-pm/pre-design/maths-a11/%s.md' % v['id'],
        'status': 'research-input-for-Claude-not-approved-route'}


if __name__ == '__main__':
    vids = []
    for mod in ['data_t1', 'data_t2']:
        vids += importlib.import_module(mod).VIDEOS
    entries = []
    for i, v in enumerate(vids):
        if i + 1 < len(vids):
            NEXT_START[v['id']] = vids[i + 1]['start']
    for v in vids:
        txt = pack(v)
        check_no_emdash(txt, v['id'])
        open(REPO + '/claude-pm/pre-design/maths-a11/%s.md' % v['id'], 'w', encoding='utf-8', newline='\n').write(txt)
        entries.append(route_entry(v))
        print(v['id'], len(txt))
    from data_t2 import RECS
    r = {
        'schemaVersion': 1, 'date': '2026-11-17', 'brief': 243,
        'purpose': 'Research route inputs for Claude, not a canonical route or teaching approval',
        'syllabus': 'Mathematics Advanced 11-12 (2024), Year 11',
        'identifierPolicy': 'Exact CMS codenames; official sourceHtml preserves mathematical layout',
        'officialEvidence': {'source': 'Fresh seven NSW Curriculum Year 11 focus-area pages, read 16 November 2026', 'year11Points': 201,
                             'crosswalk': 'docs/production/programme/syllabus/maths-advanced-2024-y11-crosswalk.json'},
        'siteSource': {'repo': 'kyleajames33-beep/Teaching-APP', 'commit': COMMIT, 'commitDate': '2026-11-16 11:01:17 +1100',
                       'note': 'Paths are repo paths at this commit, read from the read-only local clone C:/Users/kygs/teaching-app-fix, whose HEAD is this commit (checked 17 November 2026; not modified). SHA256 values recomputed from the clone and match the crosswalk inventory.'},
        'recommendations': RECS, 'part': 4,
        'covers': 'math-a11-t01 to math-a11-t16 (Trigonometry and measure of angles; Trigonometric identities and equations)',
        'subjects': {'Mathematics Advanced': {'year': 11, 'entries': entries}}}
    s = json.dumps(r, ensure_ascii=False, indent=2)
    check_no_emdash(s, 'route json')
    open(REPO + '/programme/maths-a11-route-inputs-4.json', 'w', encoding='utf-8', newline='\n').write(s + '\n')
    print('route entries', len(entries))
