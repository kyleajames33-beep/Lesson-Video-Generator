# Record brief 28z Studio progress after each verified UI result.
import json,sys
from pathlib import Path
P=Path(__file__).resolve().parents[1]/'docs/production/claude-pm'
lid,vid,status=sys.argv[1:4]
p=P/'youtube/brief28z-preflight.json';d=json.loads(p.read_text(encoding='utf-8'))
v=next(x for x in d['videos'] if x['lessonId']==lid)
assert not v.get('videoId') or v['videoId']==vid,'Refuse to overwrite an existing upload ID'
v.update({'videoId':vid,'url':'https://youtu.be/'+vid,'status':status,'progressDate':'2026-10-29'})
if status=='published':
 v.update({'visibility':'Public','madeForKids':False,'category':'Education','language':'English (Australia)','alteredContentDisclosure':True,'captionStatus':'Timed English (Australia) imported and saved with Done','thumbnail':'Auto-generated frame 2 visually inspected','checks':'Copyright and Community Guidelines no issues; HD complete','endScreen':'Skipped because final key notes occupy the screen','readback':'Studio Video published dialog confirmed publication. Final saved metadata and playlist readback pending.'})
d['status']='in-progress'
p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
p=P/'youtube/wave5-uploads.json';u=json.loads(p.read_text(encoding='utf-8'))
old=next((x for x in u['videos'] if x['lessonId']==lid),None)
if old:old.update(v)
else:u['videos'].append(dict(v,brief='28z'))
u['status']='Brief 28z in progress, see preflight per-video states'
p.write_text(json.dumps(u,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(f'{lid}: {status}, {vid}')
