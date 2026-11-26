"""Brief 259: official Physics crosswalk, unique Y12 aliases and citation inventory."""
import hashlib
import json
import re
import subprocess
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding='utf-8')
W = Path('work/brief259')
B = Path('docs/production/programme/syllabus')
read = lambda p: json.loads(Path(p).read_text(encoding='utf-8-sig'))
sha = lambda p: hashlib.sha256(Path(p).read_bytes()).hexdigest()
save = lambda p, value: Path(p).write_text(json.dumps(value, ensure_ascii=False, indent=2)+'\n', encoding='utf8')

subjects = [('chem', 'C25'), ('bio', 'B25')]
clashes, migrations = set(), []
for subject, prefix in subjects:
    old11, old12 = read(B/f'{subject}-new-y11.json'), read(B/f'{subject}-new-y12.json')
    ids11 = {p['id'] for m in old11['modules'] for p in m['contentPoints']}
    ids12 = {p['id'] for m in old12['modules'] for p in m['contentPoints']}
    assert all(i.startswith(prefix+'-') for i in ids12), 'Preserve already migrated ledger'
    clashes |= ids11 & ids12
    migrations += [{'subject': subject, 'year': 12, 'oldId': i, 'newId': i.replace(prefix+'-', prefix+'Y12-', 1),
                    'alsoExistsInYear11': i in ids11} for i in sorted(ids12)]

# Inventory existing text files, including ignored working/frozen copies. Never rewrite citations.
pattern = r'\b(?:C25|B25)-FA\d+-G\d+-\d{2}\b'
args = ['rg', '--json', '--hidden', '--no-ignore', '-I', '-e', pattern,
        '-g', '!**/node_modules/**', '-g', '!**/.git/**', '-g', '!**/venv/**',
        '-g', '!**/models/**', '-g', '!work/brief259/**']
for glob in ['*.md','*.json','*.ts','*.tsx','*.js','*.mjs','*.py','*.html','*.txt','*.csv','*.ps1','*.yml','*.yaml']:
    args += ['-g', glob]
args += ['.']
process = subprocess.run(args, capture_output=True, text=True, encoding='utf8', errors='replace')
assert process.returncode in (0, 1), process.stderr[:1000]
citations = []
for line in process.stdout.splitlines():
    item = json.loads(line)
    if item['type'] != 'match':
        continue
    data = item['data']; text = data['lines']['text']
    ids = sorted(set(re.findall(pattern, text)) & clashes)
    if ids:
        citations.append({'path': data['path']['text'].removeprefix('.\\').removeprefix('./').replace('\\','/'),
                          'line': data['line_number'], 'ids': ids, 'excerpt': text.strip()[:350]})
save(W/'id-clash-citations.json', {'scanBeforeMigration': True,
    'scope': 'All repository text, including ignored working/frozen text; excludes dependencies, models, Git internals and this task output.',
    'clashingIds': sorted(clashes), 'files': sorted({c['path'] for c in citations}), 'citations': citations})

for subject, prefix in subjects:
    p=B/f'{subject}-new-y12.json';before=p.read_bytes();backup=W/(p.name+'.before-brief259')
    assert not backup.exists();backup.write_bytes(before)
    old=json.loads(before);after=before.replace(('"id": "'+prefix+'-').encode(),('"id": "'+prefix+'Y12-').encode())
    new=json.loads(after)
    for om,nm in zip(old['modules'],new['modules']):
        for op,np in zip(om['contentPoints'],nm['contentPoints']):
            expected=dict(op);expected['id']=op['id'].replace(prefix+'-',prefix+'Y12-',1);assert expected==np
    p.write_bytes(after)
save(B/'y12-id-migration-brief259.json', {'reason':'Year12 aliases previously collided with Year11. Year11 references are not automatically rewritten.',
    'rows':migrations,'clashingAliases':len(clashes),'citationInventory':'work/brief259/id-clash-citations.json'})

ledger=read(B/'phys-new-y12.json')
groups=read(W/'nesa/transcribed-groups.json')
codes={'FA1':['PM','CM','GF'],'FA2':['CP','ME','EI','AP'],'FA3':['EW','WM','QM','SR'],'FA4':['MA','RA','NE','AS']}
audit=read('docs/production/programme/syllabus-reuse-audit-2026-11-21.json')
q1=[r for r in audit['rows'] if r['section']=='Q1']
uses={}
for row in q1:
    for ref in row['y2025Year12Ids']:
        found=re.search(r'P25Y12-FA\d+-[A-Z]+-\d+',ref)
        if found:
            uses.setdefault(found[0],[]).append({'videoId':row['videoId'],'auditReference':ref,'class':row['class'],'notes':row['notes']})
crosswalk=[]
for module in ledger['modules'][1:]:
    for gi,group in enumerate(module['contentGroups']):
        transcribed=next(g for g in groups if g['group']=='### '+group)
        points=[p for p in module['contentPoints'] if p['group']==group]
        assert len(points)==len(transcribed['points']),group
        for pi,point in enumerate(points,1):
            provisional=f"P25Y12-{module['module']}-{codes[module['module']][gi]}-{pi:02d}"
            crosswalk.append({'provisionalId':provisional,'ledgerId':point['id'],
                'officialCodename':point['officialCodename'],'sourceItemId':point['sourceItemId'],
                'group':group,'text':point['text'],'includingStatements':point['includingStatements'],
                'sourceUrl':point['sourceUrl'],'retrievalDate':point['retrievalDate'],
                'transcribedText':transcribed['points'][pi-1],'auditReferences':uses.get(provisional,[]),
                'resolution':'same focus area, group and ordinal; official wording retained above'})
missing=sorted(set(uses)-{r['provisionalId'] for r in crosswalk});assert not missing,missing
save(B/'phys-new-y12-audit-crosswalk.json', {'officialSource':ledger['sourceUrl'],
    'retrievalDate':'2026-11-21','ledgerSha256':sha(B/'phys-new-y12.json'),
    'note':'Provisional topic aliases are not official IDs. officialCodename is the exact NESA CMS codename. ID resolution does not certify whole-point coverage or completion of practicals.',
    'rows':crosswalk,'unresolvedProvisionalIds':missing})

all_ids={};duplicates=[]
for p in B.glob('*-y1[12].json'):
    d=read(p)
    for module in d.get('modules',[]):
        for point in module.get('contentPoints',[]):
            identifier=point['id']
            if identifier in all_ids:duplicates.append([identifier,all_ids[identifier],p.as_posix()])
            all_ids[identifier]=p.as_posix()
assert not duplicates,duplicates
validation={'officialPhysicsPoints':sum(len(m['contentPoints']) for m in ledger['modules']),
    'physicsProvisionalCrosswalkRows':len(crosswalk),'auditReferencedIdsResolved':len(uses),'unresolvedProvisionalIds':missing,
    'migratedYear12Ids':len(migrations),'oldYear11Year12Clashes':len(clashes),'globalDuplicateLedgerIds':duplicates,
    'citationFiles':len({c['path'] for c in citations}),'citationMatches':len(citations),
    'sourceArchive':'work/brief259/nesa/official/sources.json','speechRequests':0}
save(W/'ledger-validation.json',validation)
print(json.dumps(validation))
