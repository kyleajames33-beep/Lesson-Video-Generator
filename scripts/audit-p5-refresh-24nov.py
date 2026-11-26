"""Compare current P5 designs with prepared strings, without requesting speech."""
import json,re,hashlib,difflib
from pathlib import Path
W=Path('work/brief262/prevoice-refresh-2026-11-24');W.mkdir(exist_ok=True)
def sha(p):return hashlib.sha256(Path(p).read_bytes()).hexdigest()
rows=[]
for r in json.load(open('work/brief259/physics/P5-preparation.json',encoding='utf-8')):
 if Path('work/brief259/physics/P5',r['lesson'],'hand-in.json').exists():continue
 raw=Path(r['source']).read_text(encoding='utf-8');heads=list(re.finditer(r'^### (\d+[a-z]?)\. ([^\r\n]+)',raw,re.M));parts=[raw[h.start():(heads[i+1].start() if i+1<len(heads) else len(raw))].split('\n## ')[0] for i,h in enumerate(heads)]
 texts=[' '.join(l[2:].strip() for l in p.splitlines() if l.startswith('> ')).replace('**','') for p in parts]
 visuals=[p.split('Visual:')[1].strip() if 'Visual:' in p else '' for p in parts]
 old=json.load(open(r['lessonInput'],encoding='utf-8'));audit=json.load(open(r['sourceAudit'],encoding='utf-8'))
 assert len(texts)==len(old['scenes'])==len(audit['scenes'])
 narration=[{'number':heads[i][1],'scene':s['id'],'before':s['voiceover']['text'],'after':texts[i]} for i,s in enumerate(old['scenes']) if s['voiceover']['text']!=texts[i]]
 visual=[]
 for i,s in enumerate(audit['scenes']):
  if s['visual']!=visuals[i]:visual.append({'scene':s['id'],'diff':'\n'.join(difflib.unified_diff(s['visual'].splitlines(),visuals[i].splitlines(),lineterm=''))})
 rows.append({'lesson':r['lesson'],'key':r['key'],'source':r['source'],'beforeSha256':r['sourceSha256'],'sourceSha256':sha(r['source']),'changed':r['sourceSha256']!=sha(r['source']),
  'beforeCharacters':r['characters'],'characters':sum(map(len,texts)),'sceneCount':len(texts),'narrationChanges':narration,'visualChanges':visual,'emDash':chr(0x2014) in raw,'preparedRow':r})
(W/'comparison.json').write_text(json.dumps(rows,indent=2,ensure_ascii=True)+'\n',encoding='utf-8')
for r in rows:print(json.dumps({k:v for k,v in r.items() if k not in ['preparedRow','source','key','beforeSha256','sourceSha256']},ensure_ascii=True))
