"""Read-only source inventory and mechanical checks for briefs266-272.

This does not declare a science, maths or recording approval.
"""
import re,json,hashlib
from pathlib import Path
B=Path('docs/production/claude-pm')
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def read(p):return p.read_text(encoding='utf-8-sig')
def save(p,v):p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(v,indent=2,ensure_ascii=True)+'\n',encoding='utf-8')
status=read(B/'hms-status.md'); table=status.split('## Plate requests',1)[1].split('\n## ',1)[0]
asset_names={p.name for p in Path('public/assets').rglob('*.png')}
plates=[]
for line in table.splitlines():
 m=re.match(r'\| `([^`]+\.png)` \| (.*?) \| (.*?) \|',line)
 if not m:continue
 name,uses,brief=m.groups();p=Path('public/assets/hms')/name
 designs=[q.as_posix() for q in sorted((B/'lessons').glob('hms-*.md')) if name in read(q)]
 plates.append(dict(name=name,uses=uses,brief=brief,path=p.as_posix(),exists=p.exists(),sha256=sha(p) if p.exists() else None,designs=designs))
name='hms-fibre-cross-section-v2.png';p=Path('public/assets/hms')/name
plates.append(dict(name=name,uses='m2-v02, m4-v08',brief=status.split('**Root note (24 Nov 2026, Module 2 learning review):')[1].split('\n\n')[0],path=p.as_posix(),exists=p.exists(),sha256=sha(p) if p.exists() else None,designs=[q.as_posix() for q in (B/'lessons').glob('hms-*.md') if name in read(q)]))
save(Path('work/brief266/plate-inventory.json'),plates)
for brief,pattern in [(267,'hms-y11-m1-v*.md'),(268,'hms-y11-m2-v*.md'),(269,'hms-y12-m3-v*.md'),(270,'hms-y12-m4-v*.md'),(271,'math-s11-[matn]*.md'),(272,'math-s11-d*.md')]:
 rows=[]
 for p in sorted((B/'lessons').glob(pattern)):
  raw=read(p);heads=list(re.finditer(r'^### (\d+[a-z]?)\. ([^\r\n]+)',raw,re.M));scenes=[]
  for i,h in enumerate(heads):
   part=raw[h.end():heads[i+1].start() if i+1<len(heads) else len(raw)].split('\n## ')[0]
   q=' '.join(l[2:].strip() for l in part.splitlines() if l.startswith('> '));text=q.replace('**','')
   vm=re.search(r'^Visual(?:\s*\([^\n]*?\))?:\s*',part,re.M)
   visual=part[vm.start():].strip() if vm else '\n'.join(l for l in part.splitlines() if not l.startswith('> ')).strip()
   scenes.append(dict(number=h[1],title=h[2],text=text,characters=len(text),boldCues=re.findall(r'\*\*([^*]+)\*\*',q),visual=visual))
  count=sum(s['characters'] for s in scenes)
  declared=re.search(r'Narration\s+([\d,]+)\s+characters',raw)
  issues=[]
  for code,character in [('em-dash','\u2014'),('en-dash','\u2013')]:
   for n,line in enumerate(raw.splitlines(),1):
    if character in line:issues.append(dict(code=code,line=n,text=line))
  if declared and int(declared[1].replace(',',''))!=count:issues.append(dict(code='count-mismatch',declared=declared[1],actual=count))
  for s in scenes:
   if 'Pause here to answer.' in s['text'] and not re.search(r'countdown',s['visual'],re.I):issues.append(dict(code='countdown-not-described',scene=s['number']))
  missing=[]
  for name in sorted(set(re.findall(r'`([^`/]+\.png)`',raw))):
   existing=name in asset_names
   if not existing:missing.append(dict(name=name,approved=any(x['name']==name for x in plates),mentions=[l for l in raw.splitlines() if name in l]))
  row=dict(design=p.as_posix(),sourceSha256=sha(p),characters=count,sceneCount=len(scenes),issues=issues,missingPlates=missing,scenes=scenes,reviewStatus='mechanical inventory only; error review pending')
  rows.append(row)
 save(Path(f'work/brief{brief}/source-inventory.json'),rows)
 print(json.dumps(dict(brief=brief,designs=len(rows),issues=[dict(design=r['design'],issues=r['issues']) for r in rows if r['issues']],missingPlates=len({m['name'] for r in rows for m in r['missingPlates']}))))
print(json.dumps(dict(plates=len(plates),missing=[p['name'] for p in plates if not p['exists']])))
