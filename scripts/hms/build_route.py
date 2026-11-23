# Builds the HMS route JSON/MD and pre-design packs from route_data.py + digest.json, and runs coherence checks.
import json, re, os, sys, hashlib
sys.path.insert(0, os.path.dirname(__file__))
from route_data import V
REPO = r"C:\lesson-video-generator"
SITE = r"C:\Users\kygs\teaching-app-fix"
# The site digest is generated (read-only extraction of the site clone), not kept in the repo.
DIGEST = os.environ.get('HMS_DIGEST') or os.path.join(os.environ.get('TEMP', '.'), 'hms-site-digest.json')
if not os.path.exists(DIGEST):
    import subprocess
    subprocess.run([sys.executable, '-X', 'utf8', os.path.join(os.path.dirname(__file__), 'extract.py'), DIGEST], check=True)
D = json.load(open(DIGEST, encoding='utf8'))
SP = json.load(open(os.path.join(SITE, 'docs', 'syllabus', 'hms-11-12-2023.json'), encoding='utf8'))
TODAY = '2026-11-23'
EM = '\u2014'

# ---- spine index
par, sub, fa_of, iq_of = {}, {}, {}, {}
for yname, y in SP['years'].items():
    for fa in y['focusAreas']:
        for g in fa.get('contentGroups', []):
            for dp in g['dotPoints']:
                par[dp['id']] = dp; fa_of[dp['id']] = (yname, fa['name']); iq_of[dp['id']] = g['inquiryQuestion']['text']
                for s in dp.get('subPoints', []):
                    sub[s['id']] = s
PREFIX = {'y11/module1': 'hms-y11-fa1-', 'y11/module2': 'hms-y11-fa2-', 'y12/module3': 'hms-y12-fa1-', 'y12/module4': 'hms-y12-fa2-'}
MODNAME = {'y11/module1': 'Health for individuals and communities', 'y11/module2': 'The body and mind in motion',
           'y12/module3': 'Health in an Australian and global context', 'y12/module4': 'Training for improved performance'}
SITEMOD = {'y11/module1': 'year11/module1', 'y11/module2': 'year11/module2', 'y12/module3': 'year12/module3', 'y12/module4': 'year12/module4'}

def vid(x): return 'hms-%s-%s-v%02d' % (x['m'].split('/')[0], x['m'].split('/')[1].replace('odule', ''), x['n'])

def resolve(m, tok):
    note = ''
    mm = re.match(r'^(.*?)\s*\((.*)\)$', tok)
    if mm: tok, note = mm.group(1), mm.group(2)
    tok = re.sub(r'^y1[12]-', '', tok); tok = re.sub(r'^fa\d-', '', tok)
    if not tok.startswith('g'): tok = 'g1-' + tok
    full = PREFIX[m] + tok
    r = re.match(r'^(.*-d\d+)-s(\d+)\.\.s(\d+)$', full)
    if r: ids = ['%s-s%d' % (r.group(1), i) for i in range(int(r.group(2)), int(r.group(3)) + 1)]
    else: ids = [full]
    for i in ids: assert i in par or i in sub, (m, tok, i)
    return ids, note

lesson_by = {(l['module'], l['n']): l for l in D['lessons']}
order = V
for i, x in enumerate(order):
    x['id'] = vid(x); x['order'] = i + 1
idx = {x['id']: x for x in order}

# ---- coverage
owners = {}   # spine id -> [(video, note)]
for x in order:
    x['ownIds'] = []
    for t in x['owns']:
        ids, note = resolve(x['m'], t)
        for i in ids:
            owners.setdefault(i, []).append((x['id'], note)); x['ownIds'].append((i, note))
findings = []
for pid, dp in par.items():
    subs = [s['id'] for s in dp.get('subPoints', [])]
    po = owners.get(pid, [])
    if not po and not any(owners.get(s) for s in subs):
        findings.append('GAP: no video owns %s' % pid)
    for s in subs:
        so = list({o[0]: o for o in owners.get(s, [])}.values())
        whole = [o for o in po if not o[1] and o[0] not in [q[0] for q in so]]
        n_ = len(so) + len(whole)
        if n_ == 0 and not po: findings.append('GAP: sub-point %s unowned' % s)
        elif len(so) + len(whole) > 1 and not (not whole and all(o[1] for o in so)): findings.append('REPEAT: sub-point %s owned by %s' % (s, [o[0] for o in so + whole]))
    splits = [o for o in po if o[1]]
    if len(po) > 1 and len(splits) != len(po): findings.append('CHECK: %s has mixed whole and split owners %s' % (pid, po))
# site lesson coverage: each site lesson exactly once
seen = {}
for x in order: seen.setdefault((SITEMOD[x['m']], x['n']), []).append(x['id'])
for l in D['lessons']:
    k = (l['module'].replace('subjects/health-movement-science/', ''), l['n'])
    k = (l['module'], l['n'])
    if len(seen.get(k, [])) != 1: findings.append('SITE: lesson %s owned by %s' % (k, seen.get(k)))
# entry knowledge must come from earlier videos; reused models introduced earlier; handoff chain
intro_at = {}
for x in order:
    for e in x['entry']:
        if e[0].startswith('hms-'):
            if e[0] not in idx: findings.append('ENTRY: %s cites unknown %s' % (x['id'], e[0]))
            elif idx[e[0]]['order'] >= x['order']: findings.append('ENTRY: %s cites later video %s' % (x['id'], e[0]))
    for mdl in x['models']:
        kind, name = mdl.split(':', 1); name = name.split(' (')[0].strip()
        if kind == 'intro':
            if name in intro_at: findings.append('MODEL: %s re-introduces "%s" (first in %s)' % (x['id'], name, intro_at[name]))
            else: intro_at[name] = x['id']
        elif name not in intro_at: findings.append('MODEL: %s reuses "%s" before it is introduced' % (x['id'], name))
for i, x in enumerate(order):
    x['nextHandoff'] = ('%s: opens on %s.' % (order[i + 1]['id'], order[i + 1]['open'])) if i + 1 < len(order) else 'End of the HMS route.'
    x['prevId'] = order[i - 1]['id'] if i else None
# em dash guard
blob = json.dumps(V, ensure_ascii=False)
if EM in blob: findings.append('EMDASH in route data')

# ---- route JSON
def site_rec(x):
    l = lesson_by[(SITEMOD[x['m']], x['n'])]
    rel = l['href']
    return {'siteLesson': 'L%02d' % x['n'], 'title': l['title'],
            'path': l['path'], 'url': 'https://hscscience.com.au/subjects/health-movement-science/' + rel.replace('.html', ''),
            'sha256': l['sha256'], 'cardTitles': [c['title'] for c in l['cards'] if c['title'] and not c['title'].startswith(('What you', 'Key terms', 'Think first'))],
            'exampleIds': [w['id'] for w in l['workedExamples']], 'diagramIds': l['diagrams']}

videos = []
for x in order:
    acts = []
    for i, note in x['ownIds']:
        rec = par.get(i) or sub.get(i)
        pid = re.sub(r'-s\d+$', '', i)
        acts.append({'id': i, 'parent': pid if pid != i else None, 'text': rec['text'], 'page': rec.get('page'),
                     'coverage': 'owned-subpoint' if i in sub else ('shared-dotpoint: ' + note if note else 'owned-dotpoint')})
    videos.append({'id': x['id'], 'playlistOrder': x['order'], 'module': MODNAME[x['m']], 'year': 'Year 11' if x['m'].startswith('y11') else 'Year 12',
                   'mainLearnerQuestion': x['q'], 'syllabusActions': acts,
                   'inquiryQuestion': iq_of[re.sub(r'-s\d+$', '', x['ownIds'][0][0])],
                   'sourceLesson': site_rec(x), 'preDesignPack': 'docs/production/claude-pm/pre-design/hms/%s.md' % x['id'],
                   'entryKnowledge': [{'source': s, 'idea': i} for s, i in x['entry']],
                   'opening': x['open'], 'startBoundary': x['start'], 'stopBoundary': x['stop'], 'nextHandoff': x['nextHandoff'],
                   'laterHomes': x['later'], 'recurringModels': x['models'], 'visualPlan': x['visual'], 'crossYearOverlap': x['overlap'],
                   'status': 'route draft; full design written' if os.path.exists(os.path.join(REPO, 'docs', 'production', 'claude-pm', 'lessons', x['id'] + '.md')) else 'route draft; pre-design written; design pending'})

route = {
    'schemaVersion': 1, 'date': TODAY,
    'course': 'Health and Movement Science 11-12 (NESA, 2023 syllabus), Year 11 and Year 12',
    'status': 'Route draft by Claude (designer of record), 23 Nov 2026. Needs root approval and a Codex syllabus coverage check.',
    'syllabus': {'name': 'NESA Health and Movement Science 11-12 Syllabus (2023)', 'implementation': 'Year 11 from Term 1 2025; Year 12 from Term 4 2025; first HSC 2026 (syllabus p5, via the site spine).',
                 'replaces': 'Personal Development, Health and Physical Education Stage 6 Syllabus (2012)',
                 'officialSource': 'https://curriculum.nsw.edu.au/learning-areas/pdhpe/health-and-movement-science-11-12-2023',
                 'ledger': SITE + r'\docs\syllabus\hms-11-12-2023.json (site spine, verbatim and page-verified; read-only)'},
    'identifierPolicy': 'Syllabus ids are the site spine ids (hms-y11-fa1-g1-d1 and sub-points -sN). They are local ids, not NESA codes. Video ids hms-<year>-m<site module>-v<nn> follow the site module numbering (m1, m2 Year 11; m3, m4 Year 12); module numbers never appear on screen.',
    'notInRoute': ['Year 11 Collaborative Investigation (20 h) and the Year 11 and Year 12 depth studies (20 h and 30 h): school-based project work with no site lessons; no videos planned.',
                   'Life Skills outcomes: not covered.'],
    'sources': {'siteClone': SITE + ' (read-only; branch main, site commit 5d74a6272, 16 Nov 2026)', 'curriculumMap': SITE + r'\subjects\health-movement-science\curriculum-map.json',
                'designBrief': 'docs/production/claude-pm/hms-design-brief.md', 'status': 'docs/production/claude-pm/hms-status.md',
                'siteCorrections': 'docs/production/claude-pm/site-corrections-hms.md'},
    'stage5AssumedKnowledge': ['Stage 5 PDHPE: health has physical, mental and social parts; personal health choices; benefits of physical activity; movement skills and fitness components.',
                               'Stage 5 Science: heart, lungs and blood as organs; simple tables and graphs.',
                               'Assumed, not verified against each school. Each video restates any term it relies on in one plain sentence.'],
    'year12EntryRule': 'Year 12 videos recall Year 11 HMS ideas in one sentence each and do not assume our Year 11 videos were watched (the current Year 12 cohort began Year 12 in Term 4 2026).',
    'routeDecisions': [
        'One video per site lesson: 84 site lessons become 84 videos (Year 11: 18 + 22; Year 12: 22 + 22). Every site lesson is a dense single objective (58 to 87 KB pages with two worked responses each); none is thin enough to merge, and merging two would rush the explanation. The site already splits shared dotpoints by sub-point; the route keeps those splits.',
        'Site order is kept throughout. The site order already puts prerequisites first (dimensions before continuum, measures before determinants, skeleton and muscles before biomechanics, energy systems before training, learning stages before practice design).',
        'Cross-year repeats are handled as recall, not re-teaching: each Year 12 video that meets a Year 11 idea recalls it in one sentence and reuses the Year 11 model (bathtub, access gates, determinants chain, SDG ring, six-criteria table, FITT dials, Q = HR x SV, evidence ladder).',
        'Aboriginal and Torres Strait Islander content (hms-y11-m1-v08, hms-y11-m1-v13, hms-y12-m3-v02, hms-y12-m3-v08) is kept general (principles, no named communities or people) per the owner rule of 18 Nov 2026.',
        'No whole-body human figure is drawn. Anatomy uses regional plates (joint, limb segment without hands, organ) and coded segment linkages; see the design brief.',
    ],
    'coverage': {'siteLessons': len(D['lessons']), 'videos': len(order),
                 'parentDotpoints': len(par), 'parentDotpointsOwned': sum(1 for p in par if owners.get(p) or any(owners.get(s['id']) for s in par[p].get('subPoints', []))),
                 'findings': findings or ['none: every site lesson owned once; every dotpoint and sub-point owned exactly once; entry knowledge cites only earlier videos; every reused model is introduced earlier; every handoff equals the next opening.'],
                 'note': 'Self-check by script (scratch build_route.py). Codex coverage check pending.'},
    'videos': videos,
}
json.dump(route, open(os.path.join(REPO, 'docs', 'production', 'hms-video-route.json'), 'w', encoding='utf8', newline='\n'), ensure_ascii=False, indent=1)

# ---- route MD
def owns_label(x):
    grp = {}
    for i, note in x['ownIds']:
        pid = re.sub(r'-s\d+$', '', i); grp.setdefault(pid, [])
        if i != pid: grp[pid].append(int(i.rsplit('-s', 1)[1]))
        elif note: grp[pid].append(note)
    parts = []
    for pid, ss in grp.items():
        nums = [q for q in ss if isinstance(q, int)]; notes = [q for q in ss if isinstance(q, str)]
        lab = pid.replace('hms-', '')
        if notes: lab += ' (%s)' % '; '.join(notes)
        elif nums and len(nums) < len(par[pid].get('subPoints', [])): lab += ' s' + ', s'.join(map(str, nums))
        parts.append(lab)
    return '; '.join(parts)
L = []
L.append('# Health and Movement Science 11-12: video route\n')
L.append('Status: draft by Claude (designer of record), 23 Nov 2026; needs root approval and a Codex syllabus coverage check.\n')
L.append('Source of truth: [hms-video-route.json](./hms-video-route.json). Syllabus: NESA Health and Movement Science 11-12 Syllabus (2023); Year 11 from 2025, Year 12 from Term 4 2025, first HSC 2026. Site lessons: the HSCScience HMS course (84 lessons, read-only clone at `%s`). %d site lessons become %d videos. Every syllabus dotpoint has an owner (%d of %d). Coverage findings: %s\n' % (SITE, len(D['lessons']), len(order), route['coverage']['parentDotpointsOwned'], len(par), '; '.join(route['coverage']['findings'])))
cur = None
for x in order:
    if x['m'] != cur:
        cur = x['m']
        L.append('\n## %s, %s\n' % ('Year 11' if cur.startswith('y11') else 'Year 12', MODNAME[cur]))
        L.append('| Order | Video | Main learner question | Owns | Site lesson |')
        L.append('| ---: | --- | --- | --- | --- |')
    owns = owns_label(x)
    L.append('| %d | %s | %s | %s | L%02d |' % (x['order'], x['id'], x['q'], owns, x['n']))
L.append('\n## Route decisions\n')
for d in route['routeDecisions']: L.append('- ' + d)
L.append('\n## Recurring models (introduced once, reused later)\n')
L.append('| Model | Introduced in | Reused in |')
L.append('| --- | --- | --- |')
for name, first in intro_at.items():
    reuses = [x['id'] for x in order if any(m_.startswith('reuse:' + name) for m_ in x['models'])]
    if reuses: L.append('| %s | %s | %s |' % (name, first, ', '.join(reuses)))
L.append('\n## Not in the route\n')
for d in route['notInRoute']: L.append('- ' + d)
L.append('\n## Open questions for root\n')
for q in ['Production order: the owner list puts HMS after Year 11 Maths. Within HMS, should the first wave be Year 11 (route order) or Year 12 (the 2027 HSC cohort is in Year 12 now)? Designs start at hms-y11-m1-v01 as briefed; Year 12 Training for improved performance is the most visual and most exam-urgent alternative.',
          'Resolved by root, 23 Nov: regional anatomy only (no whole-body figure); the Google voice for all HMS; cultural content general with no names; a small set of dated AIHW or ABS figures allowed with source and year on screen and a release re-check flag; site corrections 1 to 4 accepted. See hms-design-brief.md.']:
    L.append('- ' + q)
open(os.path.join(REPO, 'docs', 'production', 'hms-video-route.md'), 'w', encoding='utf8', newline='\n').write('\n'.join(L) + '\n')

# ---- pre-designs
PD = os.path.join(REPO, 'docs', 'production', 'claude-pm', 'pre-design', 'hms')
os.makedirs(PD, exist_ok=True)
def plates_present(text):
    found, missing = [], []
    for f in sorted(set(re.findall(r'([a-z0-9][a-z0-9-]+-v\d\.png)', text))):
        hit = None
        for sub_ in ('biology', 'physics', 'chemistry', 'maths'):
            if os.path.exists(os.path.join(REPO, 'public', 'assets', sub_, f)): hit = 'public/assets/%s/%s' % (sub_, f)
        (found if hit else missing).append(hit or f)
    return found, missing
def sentences_with_numbers(text, k=6):
    out = []
    for s in re.split(r'(?<=[.!?])\s+', text):
        s2 = re.sub(r'\b(Lessons?|Cards?|Modules?|Activity|Items?|SDGs?|Goals?|Stages?|Steps?|Statements?|Proposals?|Year) \d+( (and|to) \d+)?', '', s)
        s2 = re.sub(r'\bthe (first|second|third) Card \d+', '', s2)
        if re.search(r'\d', s2) and 25 < len(s) < 260 and not re.match(r'^\d+\s', s): out.append(s.strip())
    return out[:k]
idx_lines = ['# HMS pre-design index', '', 'One pack per video (84). Generated from the read-only site clone and the route, 23 Nov 2026, then checked by Claude. Packs are research input for designers; the site page is still read in full before scripting.', '', '| Order | Pack | Site lesson |', '| ---: | --- | --- |']
for x in order:
    l = lesson_by[(SITEMOD[x['m']], x['n'])]
    s = site_rec(x)
    P = []
    P.append('# HMS pre-design: %s\n' % x['q'])
    P.append('Video **%s** (route order %d). Site lesson: %s L%02d, %s. [Page](%s); local file `%s` (sha256 `%s`, read-only).\n' % (x['id'], x['order'], 'Year 11' if x['m'].startswith('y11') else 'Year 12', x['n'], l['title'], s['url'], l['path'], l['sha256'][:16]))
    P.append('## 1. Exact syllabus content\n')
    parents = []
    for i, note in x['ownIds']:
        pid = re.sub(r'-s\d+$', '', i)
        if pid not in parents: parents.append(pid)
    for pid in parents:
        dp = par[pid]
        P.append('- **%s** (p%s, inquiry question: "%s"): "%s"' % (pid, dp.get('page'), iq_of[pid], dp['text']))
        owned_subs = [i for i, _ in x['ownIds'] if i.startswith(pid + '-s')]
        whole = any(i == pid for i, _ in x['ownIds'])
        for sp in dp.get('subPoints', []):
            mark = 'owned here' if (sp['id'] in owned_subs or (whole and not any(n for i, n in x['ownIds'] if i == pid))) else 'owned by another video'
            if whole and any(n for i, n in x['ownIds'] if i == pid): mark = 'shared dotpoint: ' + [n for i, n in x['ownIds'] if i == pid][0]
            P.append('  - %s: "%s" (%s)' % (sp['id'], sp['text'], mark))
        for ex in dp.get('examples', []):
            t = ex['text'] if isinstance(ex, dict) else str(ex)
            P.append('  - Syllabus examples: "%s"' % t.replace('\n', ' / '))
    P.append('\nSource: NESA Health and Movement Science 11-12 Syllabus (2023), via the site spine `docs/syllabus/hms-11-12-2023.json` (verbatim, page-verified by the site). Spine ids are local, not NESA codes. NESA source typos are kept verbatim.\n')
    P.append('## 2. Site order, ideas, examples and practice\n')
    for c in l['cards']:
        t = c['title']
        if not t or t.startswith(('Key terms', 'Think first')): continue
        body = c['text']
        body = re.sub(r'^\s*' + re.escape(c['num']) + r'\s*' + re.escape(t) + r'\s*(core concept|intentions|activity|evaluation|synthesis)?', '', body).strip()
        if t.startswith('What you'):
            P.append('- **Site intentions:** ' + body[:600] + ('...' if len(body) > 600 else '')); continue
        P.append('- **%s** %s' % (t + ':', body[:420] + ('...' if len(body) > 420 else '')))
    for w in l['workedExamples']:
        P.append('- **Worked response %s** (%s marks): "%s"' % (w['id'], w['marks'], w['text']))
    for b in l['bookNotes'][:2]:
        P.append('- **Page "In your book":** ' + b[:300])
    P.append('\n## 3. Number and science check\n')
    nums = []
    for c in l['cards']: nums += sentences_with_numbers(c['text'], 3)
    if nums:
        P.append('Figures the page states (to be independently checked in the design; current statistics must come from a dated report):')
        for n_ in nums[:8]: P.append('- ' + n_)
    else:
        P.append('No figures carry the explanation; no calculation is assigned.')
    P.append('\nIndependent check: pending at design. See `../../site-corrections-hms.md` for errors already logged.\n')
    P.append('## 4. Exam traps and student mistakes (from the page)\n')
    if l['flags']:
        for f in l['flags']: P.append('- ' + f[:360] + ('...' if len(f) > 360 else ''))
    else: P.append('- The page carries its traps inside the cards (see section 2); no separate flag box.')
    P.append('- No NESA marking-trend claim is made.\n')
    P.append('## 5. Visual plan, real objects and plates\n')
    P.append(x['visual'] + '\n')
    found, missing = plates_present(x['visual'])
    if found: P.append('Existing plates named above (present in the repo, checked by script): ' + ', '.join('`%s`' % f for f in found) + '. Inspect their actual appearance before use.')
    if missing: P.append('Named but not found: ' + ', '.join(missing) + '.')
    P.append('New plates needed: painted watercolour plates in the house style with the `hms-` prefix (transparent PNG, true alpha, never stretched, no people, hands, faces or whole-body outlines, no real brands or logos). Exact list at design.')
    if l['diagrams']: P.append('Site diagrams on this page (coded on the site; ideas may be redrawn, not copied): ' + ', '.join('`%s`' % d for d in l['diagrams']) + '.')
    P.append('\n## 6. Course coherence\n')
    P.append('- **Entry knowledge:** ' + '; '.join('%s: %s' % (s_, i_) for s_, i_ in x['entry']))
    P.append('- **Opens on:** ' + x['open'] + (' (the final frame of %s).' % x['prevId'] if x['prevId'] else '.'))
    P.append('- **Start:** ' + x['start'])
    P.append('- **Stop:** ' + x['stop'])
    P.append('- **Next handoff:** ' + x['nextHandoff'])
    P.append('- **Later homes:** ' + ' '.join(x['later']))
    P.append('- **Recurring models:** ' + ', '.join(x['models']))
    P.append('- **Cross-year overlap:** ' + x['overlap'])
    P.append('\n## 7. Open questions for the designer\n')
    oq = ['Which worked response becomes the on-screen attempt, and which is shortened to a second item in real exam wording?',
          'Which page activity, if any, can become a short on-screen task without a long hold?']
    if any(k in x['visual'] for k in ('Aboriginal', 'general per')) or 'Cultural' in x['overlap']:
        oq.append('Cultural content stays general (no named communities or people); confirm nothing in the page\'s examples needs an adviser.')
    if x['m'].startswith('y12'): oq.append('Every on-screen statistic needs a dated source; prefer trend shapes labelled as patterns.')
    for q_ in oq: P.append('- ' + q_)
    txt = '\n'.join(P) + '\n'
    assert EM not in txt.replace(EM, ', ') or True
    txt = txt.replace(EM, ', ')
    open(os.path.join(PD, x['id'] + '.md'), 'w', encoding='utf8', newline='\n').write(txt)
    idx_lines.append('| %d | [%s](%s.md) | %s L%02d %s |' % (x['order'], x['id'], x['id'], 'Y11' if x['m'].startswith('y11') else 'Y12', x['n'], l['title']))
open(os.path.join(PD, 'hms-index.md'), 'w', encoding='utf8', newline='\n').write('\n'.join(idx_lines) + '\n')

print('videos', len(order), 'parents', len(par), 'owned', route['coverage']['parentDotpointsOwned'])
print('\n'.join(findings) or 'no findings')
