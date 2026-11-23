# Read-only extraction of HMS site lessons into a JSON digest (scratch tool for route and pre-design work).
import re, html, json, hashlib, sys, os
SITE = r"C:\Users\kygs\teaching-app-fix"
HMS = os.path.join(SITE, "subjects", "health-movement-science")
OUT = sys.argv[1]

def clean(t):
    t = re.sub(r'<script.*?</script>|<style.*?</style>|<svg.*?</svg>', ' ', t, flags=re.S)
    t = re.sub(r'<[^>]+>', ' ', t)
    t = html.unescape(t)
    t = t.replace('\u2014', ', ')  # never carry em dashes forward
    t = re.sub(r'\s+', ' ', t).strip()
    t = re.sub(r' ,', ',', t)
    return t

def blocks(s, cls):
    # returns inner html of <div class="cls"...> blocks, balanced
    out = []
    for m in re.finditer(r'<div class="%s"[^>]*>' % re.escape(cls), s):
        i = m.end(); depth = 1; j = i
        for t in re.finditer(r'<(/?)div\b[^>]*>', s[i:]):
            depth += -1 if t.group(1) else 1
            if depth == 0:
                j = i + t.start(); break
        out.append((m.start(), m.group(0), s[i:j]))
    return out

spine = json.load(open(os.path.join(SITE, 'docs', 'syllabus', 'hms-11-12-2023.json'), encoding='utf8'))
dps = {}
def walk(o, fa=None):
    if isinstance(o, dict):
        if 'id' in o and 'text' in o and str(o.get('id', '')).startswith('hms-'):
            dps[o['id']] = o
        for v in o.values(): walk(v)
    elif isinstance(o, list):
        for v in o: walk(v)
walk(spine['years'])
def norm(x): return re.sub(r'[^a-z0-9]', '', x.lower())
dpnorm = {k: norm(v['text']) for k, v in dps.items()}

cmap = json.load(open(os.path.join(HMS, 'curriculum-map.json'), encoding='utf8'))
lessons = []
for mod in cmap['modules']:
    for l in mod['lessons']:
        p = os.path.join(HMS, l['href'].replace('/', os.sep))
        raw = open(p, 'rb').read(); s = raw.decode('utf8')
        learn = s[s.find('id="phase-learn"'):s.find('id="phase-practice"')] if 'id="phase-practice"' in s else s
        cards = []
        for st, tag, inner in blocks(learn, 'sa-card fade-up') + blocks(learn, 'sa-card'):
            tm = re.search(r'class="sa-card-title"[^>]*>(.*?)</div>', inner, re.S)
            nm = re.search(r'class="sa-card-num[^"]*"[^>]*>(.*?)</div>', inner, re.S)
            body = clean(re.sub(r'<div class="sa-card-head">.*?</div>\s*</div>', ' ', inner, count=1, flags=re.S))
            cards.append({'pos': st, 'num': clean(nm.group(1)) if nm else '', 'title': clean(tm.group(1)) if tm else '', 'text': body})
        seen = set(); uc = []
        for c in sorted(cards, key=lambda c: c['pos']):
            if c['pos'] in seen: continue
            seen.add(c['pos']); uc.append(c)
        flags = [clean(b[2]) for b in blocks(learn, 'hms-flag')]
        book = [clean(b[2]) for b in blocks(learn, 'sa-book-notes')]
        we = []
        for m in re.finditer(r'<div class="sa-worked[^"]*" id="(we-[^"]+)"[^>]*?(?:data-directive="([^"]*)")?[^>]*?(?:data-marks="([^"]*)")?>', s):
            seg = s[m.end():m.end() + 6000]
            q = re.search(r'class="we-text"[^>]*>(.*?)</p>', seg, re.S)
            we.append({'id': m.group(1), 'directive': m.group(2), 'marks': m.group(3), 'text': clean(q.group(1)) if q else ''})
        dx = sorted(set(re.findall(r'id="(dx-[a-z0-9-]+?)(?:-d|-t)?"', s)))
        imgs = sorted(set(re.findall(r'src="([^"]*lesson-visuals[^"]*)"', s)))
        # dotpoint match
        want = norm(l.get('dotpoints', ''))
        ids = [k for k, v in dpnorm.items() if v and (v in want or want in v or v[:80] in want)]
        lessons.append({
            'module': mod['path'], 'moduleName': mod['name'], 'n': l['n'], 'title': l['title'], 'iq': l['iq'],
            'href': l['href'], 'path': p, 'sha256': hashlib.sha256(raw).hexdigest(), 'bytes': len(raw),
            'mapDotpoints': l.get('dotpoints', ''), 'outcomes': l.get('outcomes', ''),
            'spineIds': ids, 'spineText': {k: dps[k]['text'] for k in ids},
            'spineSub': {k: [clean(json.dumps(x, ensure_ascii=False)) for x in dps[k].get('subPoints', dps[k].get('including', []))] for k in ids},
            'cards': [{'num': c['num'], 'title': c['title'], 'text': c['text'][:3000]} for c in uc],
            'flags': flags, 'bookNotes': book, 'workedExamples': we, 'diagrams': dx, 'images': imgs,
        })
json.dump({'spineKeys': list(next(iter(dps.values())).keys()), 'lessons': lessons}, open(OUT, 'w', encoding='utf8'), ensure_ascii=False, indent=1)
print(len(lessons), 'lessons;', sum(1 for l in lessons if not l['spineIds']), 'without spine match')
for l in lessons:
    if len(l['spineIds']) != 1: print(l['module'], l['n'], l['spineIds'])
