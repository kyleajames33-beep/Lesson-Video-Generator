"""Print spoken numeric sentences and numeric screen strings for source review."""
import re,json,sys
word=r'(?:\d+|zero|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand|million)'
for r in json.load(open(f'work/brief{sys.argv[1]}/source-inventory.json')):
 out=[]
 for s in r['scenes']:
  sentences=[x for x in re.split(r'(?<=[.!?])\s+',s['text']) if re.search(r'\b'+word+r'\b',x,re.I)]
  if not sentences:continue
  screen=[x for x in re.findall(r'"([^"\n]+)"',s['visual']) if re.search(r'\d',x) and not re.search(r'(?:px|\.png|v0[1-9])',x)]
  out.append({'scene':s['number'],'speech':sentences,'screen':screen})
 print(json.dumps({'design':r['design'].split('/')[-1],'numbers':out},ensure_ascii=True))
