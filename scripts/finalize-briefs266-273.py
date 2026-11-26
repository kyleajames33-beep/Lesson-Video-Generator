"""Preserve reviewed image attempts and exact partial-batch evidence. No speech."""
from pathlib import Path
import json,hashlib,shutil
from PIL import Image

B=Path('docs/production/claude-pm')
G=Path(r'C:\Users\kygs\.codex\generated_images\01a20f26-9336-7500-9a5e-dc2abaaab590')
def load(p):return json.loads(Path(p).read_text(encoding='utf8'))
def save(p,d):
 p=Path(p);p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(d,indent=2,ensure_ascii=True)+'\n',encoding='utf8')
def sha(p):return hashlib.sha256(Path(p).read_bytes()).hexdigest()
prompts=load('work/brief271/image-prompts.json')
def attempt(brief,filename,label,reason,prompt=None):
 src=G/filename;dest=Path(f'work/brief{brief}/image-attempts')/(label+'.png');dest.parent.mkdir(parents=True,exist_ok=True)
 if dest.exists():assert sha(dest)==sha(src)
 else:shutil.copy2(src,dest)
 im=Image.open(dest)
 return {'path':dest.as_posix(),'original':str(src),'sha256':sha(dest),'size':list(im.size),'mode':im.mode,'alphaExtrema':im.getchannel('A').getextrema() if im.mode=='RGBA' else None,'status':'rejected','reason':reason,'tool':'image_gen.imagegen','prompt':prompts.get(prompt) if prompt else None,'visualReview':'actual generated image inspected'}
arm=[attempt(266,'exec-64a19860-f2c3-489f-9537-00e7381943b9.png','arm-overlay-attempt1','Biceps tendon extends too far along the forearm; attachment is anatomically wrong.'),attempt(266,'exec-0752f70e-8769-439b-8488-baab545b1b7f.png','arm-overlay-attempt2','Canvas differs from the base (1012x1554 versus1001x1572); biceps and triceps tendon attachments do not register with the radius and ulna.')]
plates=load('work/brief266/plate-inventory.json');missing=[r for r in plates if not r['exists']]
save(B/'assets/brief266-manifest.json',{'brief':266,'date':'2026-11-25','status':'held at required brief264 registered arm anchor','delivered':[],'rejections':arm,'leftoverCount':len(missing),'leftovers':missing,'nextAction':'Root must resolve the registered arm-muscle overlay. Brief266 requires completion of brief264 anchors before the remaining course-order plates. No later HMS plate was accepted or installed.'})
save('work/brief266/hand-in.json',load(B/'assets/brief266-manifest.json'))
globe1=attempt(271,'exec-f5e97199-04c0-4d19-976c-560a86c5f005.png','globe-attempt1','Top axis finial is clipped.','brief271272_globe')
globe=attempt(271,'exec-4ace6b0f-4a28-41b3-bfe7-437a22c0c71a.png','globe-attempt2','', 'brief271272_globe2')
dest=Path('public/assets/maths/ms11-desk-globe-v1.png');src=Path(globe['path'])
if dest.exists():assert sha(dest)==sha(src),'Do not overwrite a different public asset'
else:shutil.copy2(src,dest)
globe.update(status='accepted',reason='Whole object visible, recognisable Australia and western Pacific, clean display silhouette on paper and black.',path=dest.as_posix(),uses=['math-s11-t03','math-s11-t04'],qa='work/brief271/qa/globe-paper-black.jpg')
save(B/'assets/brief271-manifest.json',{'brief':271,'date':'2026-11-25','delivered':[globe],'rejections':[globe1],'leftovers':[],'existingAssets':'All other named plates were already present at source inventory. This manifest does not claim a fresh visual review of every inherited asset.'})
loaves=[]
for i,(f,k,reason) in enumerate([
 ('exec-1034ffee-cdd8-44d5-b7e5-47f191fed8de.png','brief271272_loaf','Photographic appearance and large surrounding orange glow fail the house style and clean alpha silhouette.'),
 ('exec-99849c1c-0a98-42fd-be92-31d236cbaa92.png','brief271272_loaf2','Large orange glow remains outside the bread silhouette.'),
 ('exec-c75009fc-cf41-48ea-a785-2452e46b870d.png','brief271272_loaf3','Background-removal edit still retains a large coloured glow outside the bread silhouette.')],1):loaves.append(attempt(272,f,'loaf-attempt'+str(i),reason,k))
save(B/'assets/brief272-manifest.json',{'brief':272,'date':'2026-11-25','delivered':[],'rejections':loaves,'leftovers':[{'name':'ms12-bread-loaf-v1.png','design':'math-s11-d14','fallback':'Keep the existing question card, as the design authorises, until a suitable plate passes review.'}]})

# Keep the substantive spreadsheet finding in the exact source's per-design review.
p=B/'checks/m-s11-m06-maths-check.md';s=p.read_text(encoding='utf8')
if 'circular-reference' not in s:
 s=s.replace('Result: 0 blockers, 1 should fix.','Result: 1 blocker, 1 should fix.')
 s+='\n## Additional maths finding: circular-reference blocker\n\nScene 4 puts `=SUM(B4:B10)` in cell B10. The formula includes its own cell. This creates a circular reference; it does not reliably double $5,408 to $10,816 as the narrated mistake claims. With ordinary calculation settings Excel reports the circular reference. A valid correction needs root to change the example and matching narration/visual together. No source edit or speech was made. Microsoft confirms that a formula including its own cell is a circular reference: https://support.microsoft.com/en-us/excel/remove-or-allow-a-circular-reference-in-excel (read25November2026).\n'
 p.write_text(s,encoding='utf8')
for b in [271,272]:
 p=f'work/brief{b}/hand-in.json';d=load(p)
 d['partialArithmeticEvidence']=(['work/brief271/money-measurement-results.json','work/brief271/networks-and-times-results.json'] if b==271 else ['work/brief272/core-data-results.json','work/brief272/recurring-data-results.json'])
 d['assetManifest']=str(B/f'assets/brief{b}-manifest.json').replace('\\','/')
 if b==271:
  r=next(r for r in d['results'] if r['lesson']=='math-s11-m06')
  if not any(f['code']=='circular-reference' for f in r['findings']):r['findings'].append({'code':'circular-reference','severity':'blocker','scene':4,'cell':'B10','formula':'=SUM(B4:B10)'})
 save(p,d)

board=load('docs/production/parallel-production-board-2026-10-10.json')
states={263:('reverified prior complete preparation, one science hold',['work/brief263']),264:('92 delivered files reverified; registered arm overlay still rejected',['docs/production/claude-pm/assets/brief264-manifest.json']),265:('v09 hook revoiced; v11 already has neutral hook; old v11 take retired',['work/brief265/hand-in.json']),266:('held at registered arm anchor;52 missing plates inventoried',['work/brief266/hand-in.json']),267:('16 prepared,2 source findings held',['work/brief267/hand-in.json']),268:('22 prepared, no speech',['work/brief268/hand-in.json']),269:('22 prepared, no speech',['work/brief269/hand-in.json']),270:('22 prepared, current concussion/WADA checked, no speech',['work/brief270/hand-in.json']),271:('34 count holds, partial arithmetic and official facts, globe accepted; full maths reviews pending',['work/brief271/hand-in.json']),272:('20 count holds, partial data arithmetic and facts; loaf rejected; full maths reviews pending',['work/brief272/hand-in.json']),273:('v14 checked and prepared, last in P5, speech held by priority/cap',['work/brief273/hand-in.json'])}
for b,(state,evidence) in states.items():
 old=board.get('brief'+str(b),{})
 old.update(owner='Codex solo, explicit no-subagent briefs',date='2026-11-25',status=state,evidence=evidence,speechRequestsThisRun=1 if b==265 else 0,unresolvedGates=['Human listening and exact voiced preview remain pending; no render or release approval.'])
 if b in [271,272]:old['unresolvedGates']+=['Root source count/fact repair; full maths, playlist joins, syllabus-description and anchor checks; then recording preparation.']
 if b==266:old['unresolvedGates']+=['Registered arm-muscle overlay must pass anatomy and exact registration before later plates.']
 if b==273:old['unresolvedGates']+=['Finish earlier P5 lessons within the daily99 request cap before voicing v14.']
 board['brief'+str(b)]=old
save('docs/production/parallel-production-board-2026-10-10.json',board)
print(json.dumps({'acceptedGlobe':globe['sha256'],'hmsLeftovers':len(missing),'rejectedArm':len(arm),'rejectedLoaf':len(loaves),'speechRequests':0}))
