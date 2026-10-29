"""Independent read-only verification of brief 113's existing master outputs."""
import collections, concurrent.futures, hashlib, json, pathlib, re, urllib.request
from datetime import datetime, timezone
ROOT = pathlib.Path(__file__).resolve().parents[4]
OUT = ROOT / 'docs/production/claude-pm/checks'
def read(p): return json.loads(pathlib.Path(p).read_text(encoding='utf-8-sig'))
def text(p): return pathlib.Path(p).read_text(encoding='utf-8-sig')
def walk(x):
    if isinstance(x, dict):
        yield x
        for v in x.values(): yield from walk(v)
    elif isinstance(x, list):
        for v in x: yield from walk(v)
master = OUT / 'coverage-audit-2026-10-30.json'
d = read(master)
findings = []
def check(ok, msg):
    if not ok: findings.append(msg)
def fetch(old):
    raw = urllib.request.urlopen(old['url'], timeout=35).read()
    data = json.loads(re.search(r'var ytInitialData = (.*?);</script>', raw.decode()).group(1))
    rows = []
    for n in walk(data.get('contents', {})):
        v = n.get('playlistVideoRenderer')
        if v: rows.append({'videoId': v['videoId'], 'title': ''.join(x.get('text','') for x in v.get('title',{}).get('runs',[]))})
        v = n.get('lockupViewModel')
        if v and v.get('contentType') == 'LOCKUP_CONTENT_TYPE_VIDEO':
            rows.append({'videoId':v['contentId'],'title':v.get('metadata',{}).get('lockupMetadataViewModel',{}).get('title',{}).get('content','')})
    continuation = any('continuationItemRenderer' in n for n in walk(data.get('contents',{})))
    return {'id':old['id'],'url':old['url'],'videos':rows,'count':len(rows),'continuationPresent':continuation,'htmlSha256':hashlib.sha256(raw).hexdigest(),'fetchedAtUTC':datetime.now(timezone.utc).isoformat()}
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    live = list(pool.map(fetch, d['liveReadback']['playlists']))
ids = set()
for p, old in zip(live,d['liveReadback']['playlists']):
    got = [v['videoId'] for v in p['videos']]
    expected = [v['videoId'] for v in old['videos']]
    check(got == expected, 'Live playlist differs: '+p['id'])
    check(not p['continuationPresent'], 'Playlist continuation unhandled: '+p['id'])
    check(len(got)==len(set(got)), 'Duplicate within playlist: '+p['id'])
    ids.update(got)
check(len(ids)==145, 'Fresh playlist union differs from 145')
u=[]
for n in range(1,6):
    for v in read(ROOT / f'docs/production/claude-pm/youtube/wave{n}-uploads.json')['videos']:
        if v.get('status')=='published' or v.get('visibility','').lower()=='public':
            lid=v.get('lessonId') or re.search(r'Explainer-([^/]+)',v['file']).group(1)
            u.append(dict(v,lessonId=lid))
check(len(u)==139,'Current public wave count differs from139')
check(len({v['videoId'] for v in u})==len(u),'Duplicate upload ID')
check(len({v['lessonId'] for v in u})==len(u),'Duplicate uploaded lesson')
for v in u: check(v['videoId'] in ids,'Upload missing public playlist: '+v['lessonId'])
byid={v['lessonId']:v for v in u}
videos=d['routeAudit']['videos']
for v in videos:
    if v.get('designPath'):
        p=ROOT/v['designPath']
        check(p.exists(),'Missing design '+str(p))
        status=next(x for x in text(p).splitlines() if x.startswith('Status:'))
        m=re.search(r'Revision\s+(\d+)',status)
        check(not m or int(m.group(1))==v['revision'],'Wrong Revision '+v['id'])
    if v.get('buildPath'): check((ROOT/v['buildPath']).exists(),'Missing build '+v['id'])
    if v['state']=='Public':
        check(v['videoId'] in ids,'Public route absent '+v['id'])
        if v['id'] in byid:
            check(byid[v['id']]['videoId']==v['videoId'],'Wrong public URL '+v['id'])
            paths=[x for x in byid[v['id']].values() if isinstance(x,str) and x.endswith('.mp4')]
            audit=ROOT/f"out/checks/owner-release-2026-10-25/{v['id']}/final-export-audit.json"
            if audit.exists():paths.append(read(audit)['mp4'])
            check(any('/explainer/' in x.replace('\\','/') for x in paths),'Non-explainer '+v['id'])
    else: check(v['id'] not in byid,'Nonpublic route actually uploaded '+v['id'])
for r in d['summary']:
    vs=[v for v in videos if (v['module'],v['subject'])==(r['module'],r['subject'])]
    check(len(vs)==r['activeTotal'],'Wrong active total '+str(r))
    for s in ['Public','Built or rendered, not uploaded','Designed','Held','Not started']:
        check(sum(v['state']==s for v in vs)==r[s],'Wrong state count '+str(r))
for n in [5,6,7,8]:
    route=read(ROOT/f'docs/production/module{n}-video-route-{"2026-10-10" if n==5 else "draft"}.json')
    for subject,body in route['subjects'].items():
        expected={e['id'] for e in body['entries']}
        for x in d['routeAudit']['droppedOrMerged']:
            if (x['module'],x['subject'])==(n,subject) and x['id'] in expected:
                expected.remove(x['id'])
                if not (n==6 and x['id']=='bio-m6-p02'): expected.update(x['into'])
        if n==5 and subject=='Biology':expected.update(['bio-m5-b02c','bio-m5-mould','bio-m5-runner','bio-m5-b03a2'])
        if n==6 and subject=='Biology':expected.update(['bio-m6-g01','bio-m6-g02'])
        if n==8 and subject=='Biology':expected.add('bio-m8-g03')
        got={v['id'] for v in videos if (v['module'],v['subject'])==(n,subject)}
        check(got==expected,f'Route ID difference {n} {subject}: {got-expected}, {expected-got}')
points={p['id']:p for s in ['chem','bio'] for m in read(ROOT/f'docs/production/programme/syllabus/{s}-2017-y12.json')['modules'] for p in m['contentPoints']}
check(set(points)=={p['id'] for p in d['syllabusAudit']['allPoints']},'Point inventory mismatch')
for p in d['syllabusAudit']['allPoints']:
    check(points[p['id']]['text']==p['text'],'Wrong point text '+p['id'])
    for design in p['designs']:check((ROOT/design['designPath']).exists(),'Missing mapped design '+p['id'])
for group in ['legacyChemistry','biology2025','chemistry2025Draft']:
    for row in d['year11Inventory'][group]:
        check(len(list(pathlib.Path(row['siteLessons'][0]['path']).parent.glob('lesson*.sa.html')))==row['siteLessonCount'],'Year11 site count mismatch '+group)
        for key in ['siteLessons','extracts','legacyEngineSources','preDesignPacks']:
            for item in row.get(key,[]):
                p=item['path'] if isinstance(item,dict) else item
                check((ROOT/p).exists(),'Year11 missing '+p)
check(sum(v.get('burnedInCaptions',False) for v in videos)==6,'Burned-in count differs')
result={'date':'2026-10-30','masterSha256':hashlib.sha256(master.read_bytes()).hexdigest(),'method':'Fresh independent urllib HTML readback of all9playlists; local route/count/revision/ledger/site checks. Channel continuation results in master were not independently repeated.','publicPlaylists':live,'uniquePublicPlaylistVideos':len(ids),'currentWaveUploads':len(u),'routeRows':len(videos),'syllabusPoints':len(points),'findings':findings}
(OUT/'coverage-audit-2026-10-30-review.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps({k:v for k,v in result.items() if k!='publicPlaylists'},indent=2))
