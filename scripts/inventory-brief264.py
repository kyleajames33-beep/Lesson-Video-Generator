"""Inventory only approved brief264 assets, resolving their own design briefs."""
import json,re
from pathlib import Path
B=Path('docs/production/claude-pm');W=Path('work/brief264');W.mkdir(exist_ok=True)
def text(p):return p.read_text(encoding='utf-8-sig')
def block(raw,name):
 heads=list(re.finditer(r'^## .*',raw,re.M));sections=[]
 for i,h in enumerate(heads):
  if 'codex'in h[0].lower()and('asset'in h[0].lower()or'plate'in h[0].lower()):sections.append(raw[h.start():heads[i+1].start()if i+1<len(heads)else len(raw)])
 for section in sections:
  lines=section.splitlines()
  for i,l in enumerate(lines):
   if name in l:
    end=i+1
    while end<len(lines)and not re.match(r'^\s*(?:\d+\.|-\s+\*\*`?hms-|##)',lines[end]):end+=1
    return '\n'.join(lines[i:end]).strip()
 return next((p for p in raw.split('\n\n')if name in p and ('New:'in p or'**Plates.**'in p)),name)
rows=[]
def add(name,folder,doc,brief=None,kind='generate'):
 p=B/doc;raw=text(p);dest=Path('public/assets')/folder/name
 rows.append({'name':name,'destination':dest.as_posix(),'source':p.as_posix(),'brief':brief or block(raw,name),'kind':kind,'alreadyExists':dest.exists()})
add('y12p-circular-track-top-v1.png','physics','codex-prompts/264-plates-and-fact-checks-batch.md','Painted orthographic top-view circular track matching v09/v10 house style. No vehicles, arrows or text. Transparent centre and outside.')
add('phys-y11-large-stone-v1.png','physics','lessons/phys-y11-fa1-v25.md')
for n,doc in [('ms11-electricity-meter-v1.png','math-s11-m07.md'),('ms11-water-meter-v1.png','math-s11-m07.md'),('ms11-fridge-v1.png','math-s11-m04.md')]:add(n,'maths','lessons/'+doc)
for file in ['bio-y11-fa3-v05.md','bio-y11-fa3-v16.md']:
 raw=text(B/'lessons'/file);m=re.search(r'^## Codex asset brief.*',raw,re.M);section=raw[m.start():];n=re.search(r'^## ',section[m.end()-m.start():],re.M);section=section[:m.end()-m.start()+n.start()]if n else section
 for name in re.findall(r'^\d+\. `([^`]+\.png)`',section,re.M):add(name,'biology','lessons/'+file)
for name,file,brief in [
 ('y11-potato-cylinders-v1.png','bio-y11-ws-v02.md','Equal-length freshly cut pale potato cylinders on a plain white laboratory tile beside one stainless cork borer. No numbers, labels, hands or people; ink and watercolour, transparent outside the objects.'),
 ('y11-beetroot-cylinders-v1.png','bio-y11-ws-v02.md','Equal-size beetroot cylinders, dark beet-red cut surfaces with realistic plant tissue, on a small white laboratory tile. No beakers or coloured-liquid result that gives away a question answer. No text, people or hands.'),
 ('y11-potato-cylinder-firm-soft-v1.png','bio-y11-ws-v03.md','Two potato cylinders from the same potato: one straight and firm, the other visibly bowed and limp. Same original cut dimensions and natural pale tissue colour, separated side by side, no labels or arrows. Transparent background.'),
 ('y11-seagrass-v1.png','bio-y11-ws-v07.md','A natural small clump of green seagrass with long narrow strap leaves and a short pale rhizome/root base, isolated specimen, transparent. Botanical seagrass, not kelp or generic terrestrial lawn grass; no labels or water backdrop.')]:add(name,'biology','lessons/'+file,brief)
for name in ['m5x-cycad-plant-v1.png','m5x-cycad-leaching-v1.png']:add(name,'biology','bio-y11-gap-fix-status-2026-11-23.md','Copy the existing Chemistry asset byte for byte and inspect on cream.',kind='copy')
status=text(B/'hms-status.md').split('## Plate requests')[1];names=list(dict.fromkeys(re.findall(r'hms-[a-z0-9-]+\.png',status)))
docs=[p for p in (B/'lessons').glob('hms-y11-m1-v*.md')]+[p for p in (B/'lessons').glob('hms-y11-m2-v*.md')if int(re.search(r'-v(\d+)\.md',p.name)[1])<=8]
order=['hms-knee-synovial-cutaway-v1.png','hms-arm-bones-v1.png','hms-arm-muscles-overlay-v1.png','hms-heart-cutaway-v1.png']
excluded=[]
for name in order+[n for n in names if n not in order]:
 candidates=[p for p in docs if name in text(p)]
 if not candidates:excluded.append(name);continue
 own=[p for p in candidates if name in block(text(p),name)and block(text(p),name)!=name]
 p=next((p for p in own if name in block(text(p),name)and re.match(r'^\d+\.',block(text(p),name))),own[0]if own else candidates[0])
 add(name,'hms',p.relative_to(B).as_posix())
add('y11c-plant-kernels-whole-ground-v1.png','chemistry','lessons/chem-y11-m3-v06.md')
(W/'plate-inventory.json').write_text(json.dumps({'rows':rows,'excludedBeyondApprovedModules':excluded},indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
print(json.dumps({'assets':len(rows),'generate':sum(r['kind']=='generate'for r in rows),'copy':2,'existing':sum(r['alreadyExists']for r in rows),'excluded':excluded}))
