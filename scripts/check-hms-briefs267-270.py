"""Error-only HMS checks, with exact strings retained for review. No design edits."""
import json,re,hashlib
from pathlib import Path
B=Path('docs/production/claude-pm')
def norm(s):return re.sub(r'[^a-z0-9 ]','',s.lower()).strip()
for brief in range(267,271):
 rows=json.loads(Path(f'work/brief{brief}/source-inventory.json').read_text())
 results=[]
 for r in rows:
  raw=Path(r['design']).read_text(encoding='utf8'); findings=list(r['issues']);cue_checks=[];notes=[]
  for s in r['scenes']:
   text=norm(s['text']);cursor=0
   cues=re.findall(r'\bon ["“]([^"”]+)["”]',s['visual'],re.I)
   for cue in cues:
    c=norm(cue);at=text.find(c,cursor);anywhere=text.find(c)
    cue_checks.append(dict(scene=s['number'],cue=cue,found=anywhere>=0,inOrder=at>=0))
    if anywhere<0:findings.append(dict(code='cue-not-verbatim',scene=s['number'],cue=cue))
    elif at>=0:cursor=at
   if 'key notes' in s['title'].lower():
    # The numbered notes are part of the scene, after its narration.
    h=re.search(r'^### '+re.escape(s['number'])+r'\. .*$',raw,re.M)
    body=raw[h.end():].split('\n## ')[0]
    notes=re.findall(r'^\d+\. (.+)$',body,re.M)
    for note in notes:
     visible=re.sub(r'\*|`','',note)
     if len(visible)>95:findings.append(dict(code='key-note-over95',characters=len(visible),text=visible))
  result={**{k:r[k] for k in ['design','sourceSha256','characters','sceneCount','missingPlates']},'findings':findings,'cueChecks':cue_checks,'notes':notes,'status':'findings' if findings else 'mechanical checks passed; screen-number and cultural review pending','prepared':False,'speechRequests':0}
  results.append(result)
 Path(f'work/brief{brief}/error-checks.json').write_text(json.dumps(results,indent=2,ensure_ascii=True)+'\n',encoding='utf8')
 print(json.dumps({'brief':brief,'designs':len(results),'cueCount':sum(len(r['cueChecks']) for r in results),'findings':[{'design':r['design'].split('/')[-1],'findings':r['findings']} for r in results if r['findings']]}))
