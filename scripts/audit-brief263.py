"""Read-only source comparison for brief263. No speech or source edits."""
import hashlib,json,re
from pathlib import Path
B=Path('docs/production/claude-pm');W=Path('work/brief263')
def read(p):return json.loads(p.read_text(encoding='utf-8-sig'))
def parse(p):
 raw=p.read_text(encoding='utf-8-sig');heads=list(re.finditer(r'^### (\d+[a-z]?)\. ([^\r\n]+)',raw,re.M))
 ids=[s.strip()for s in re.search(r'^In order[^\r\n]*:\s*([^\r\n]+)',raw,re.M)[1].replace('`','').rstrip('.').split(',')];assert len(ids)==len(heads)
 scenes=[]
 for i,h in enumerate(heads):
  part=re.split(r'^## ',raw[h.end():heads[i+1].start()if i+1<len(heads)else len(raw)],maxsplit=1,flags=re.M)[0]
  q=' '.join(l[2:].strip()for l in part.splitlines()if l.startswith('> '));text=q.replace('**','');cues=re.findall(r'\*\*([^*]+)\*\*',q)
  scenes.append({'number':h[1],'id':ids[i],'title':h[2],'text':text,'characters':len(text),'boldCues':cues,'visual':part.split('Visual:',1)[-1].strip()})
 return raw,scenes
wave7=[f'chem-y11-m1-v{n}'for n in [18,19,20,22,23,24,25,26,27]]
other=['chem-y11-'+s for s in ['m2-v05','m3-v05','m3-v07','m3-v08','m4-v04','m4-v05','m4-v08','m4-v14','m2-v20','m3-v01','m3-v15','m4-v01','m3-v06']]
report=[]
for lesson in wave7+other:
 p=B/'lessons'/(lesson+'.md');raw,scenes=parse(p);baseline=None;wave=None
 if lesson in wave7:
  q=Path('work/brief260/candidates')/lesson/'source-comparison.json'
  if q.exists():baseline=read(q)['scenes']
 else:
  for n in range(1,7):
   q=Path(f'work/brief236/wave{n}')/lesson/'source-audit.json'
   if q.exists():baseline=read(q)['scenes'];wave=n;break
 changed=[]
 if baseline:
  for a,b in zip(baseline,scenes):
   what=[k for k in ['text','visual','boldCues']if a.get(k)!=b.get(k)]
   if what:changed.append({'scene':b['id'],'number':b['number'],'changed':what,'old':a,'current':b})
 else:changed=[{'number':s['number'],'scene':s['id'],'changed':['new'],'current':s}for s in scenes]
 declared=re.search(r'^Narration\s+([\d,]+) characters.*?(\d+) scenes',raw,re.M)
 item={'lesson':lesson,'wave':7 if lesson in wave7 else wave,'source':p.as_posix(),'sourceSha256':hashlib.sha256(p.read_bytes()).hexdigest(),
  'characters':sum(s['characters']for s in scenes),'scenes':scenes,'sceneCount':len(scenes),'declaredCharacters':int(declared[1].replace(',',''))if declared else None,
  'declaredScenes':int(declared[2])if declared else None,'emDash': '\u2014'in raw,'changedScenes':changed}
 report.append(item)
W.mkdir(parents=True,exist_ok=True);(W/'source-comparison.json').write_text(json.dumps(report,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
print(json.dumps([{'lesson':r['lesson'],'characters':r['characters'],'declared':r['declaredCharacters'],'scenes':r['sceneCount'],'speechChanged':[d['number']for d in r['changedScenes']if'text'in d['changed']or'new'in d['changed']]}for r in report]))
