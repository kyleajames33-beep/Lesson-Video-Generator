from pathlib import Path
import json,sys,re
key,rev=sys.argv[1:];assert re.fullmatch(r'math-a12-[dtifsg]\d\d',key) and re.fullmatch(r'v\d+',rev)
w=Path('work/brief245')/key;lesson=json.loads((w/'lesson.playback.json').read_text(encoding='utf8'));frames=sum(s['durationInFrames']for s in lesson['scenes'])
s=Path('work/brief241/math-a12-d03/scan.py').read_text(encoding='utf8').replace('work/brief241','work/brief245').replace('math-a12-d03',key).replace('-v2.mp4',f'-{rev}.mp4').replace("'v2-",f"'{rev}-").replace("'plannedFrames':16636",f"'plannedFrames':{frames}")
assert 'import cv2' in s and 'cv3'not in s
(w/'scan.py').write_text(s,encoding='utf8')
font=Path('work/brief241/math-a12-d03/check-fonts.py').read_text(encoding='utf8').replace('work/brief241','work/brief245').replace('math-a12-d03',key).replace('v2-scan',f'{rev}-scan').replace(key+'-v2',key+'-'+rev)
(w/'check-fonts.py').write_text(font,encoding='utf8')
for n in ['prior-release.json','source-learning-review.json']:
 p=Path('work/brief241')/key/n
 if not p.exists():p=Path('work/brief239')/key[-3:]/n
 if p.exists():(w/n).write_bytes(p.read_bytes())
p=Path('work/brief241')/key/'native-plan.json'
if not p.exists():p=Path('work/brief239')/key[-3:]/'native-plan.json'
if p.exists():
 plan=json.loads(p.read_text(encoding='utf8'));plan.update(revision=rev,state='Planned only, no new native playback approval');(w/'native-plan.json').write_text(json.dumps(plan,indent=2),encoding='utf8')
print(json.dumps({'lesson':key,'revision':rev,'plannedFrames':frames,'scanPrepared':True}))
