# Record the first brief 28z draft after the inherited browser timeout stop.
import json
from pathlib import Path
R=Path(__file__).resolve().parents[1]
P=R/'docs/production/claude-pm'
def read(p):return json.loads(p.read_text(encoding='utf-8'))
def write(p,d):p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
p=P/'youtube/brief28z-preflight.json';d=read(p)
d['status']='stopped-after-browser-timeout'
d['videos'][0].update({'videoId':'1qF_486TVQE','url':'https://youtu.be/1qF_486TVQE','status':'private-draft-settings-captions-checks-pending','visibility':'Private','readback':'Studio showed Saved as private, full title, not made for kids, selected Chemistry Module 7 playlist, copyright no issues, Community Guidelines checking 18%. Advanced settings click timed out. No captions uploaded or publication attempted.'})
write(p,d)
p=P/'youtube/wave5-uploads.json';uploads=read(p)
v=dict(d['videos'][0]);v.update({'brief':'28z','madeForKids':False,'requestedVisibility':'Public','date':'2026-10-28'})
existing=next((x for x in uploads['videos'] if x['lessonId']==v['lessonId']),None)
if existing:existing.update(v)
else:uploads['videos'].append(v)
uploads['status']='Brief 28z stopped on browser timeout: C05 private draft, fourteen files not uploaded'
write(p,uploads)
p=R/'docs/production/parallel-production-board-2026-10-10.json';board=read(p)
board['brief28z']={'status':d['status'],'owner':'/root','date':'2026-10-28','evidence':['docs/production/claude-pm/youtube/brief28z-preflight.json','docs/production/claude-pm/youtube/wave5-uploads.json'],'summary':'All fifteen MP4 hashes match. Prepared cumulative chapters, captions and syllabus metadata. C05 private draft 1qF_486TVQE. Stopped on advanced settings browser timeout under inherited brief28x rule.','unresolvedGates':['Resume existing C05 draft, do not upload it again','C05 advanced settings, timed captions, thumbnail inspection, checks, public visibility and saved metadata readback','Fourteen subsequent uploads in priority order','Final readback of every changed playlist']}
for number in [109,110,111]:
 board[f'brief{number}']={'status':'in-progress','owner':f'/root/brief{number}','date':'2026-10-28','scope':'Independent learning and science reviews, requested plates and QA/archive. Root owns shared hand-in and Module 7 site log integration.','unresolvedGates':['Reviews and artwork in progress','Claude resolves review findings','Owner artwork acceptance']}
write(p,board)
p=P/'status.md'
with p.open('a',encoding='utf-8') as f:
 f.write('\n### Brief 28z: prepared, first draft uploaded, browser timeout (28 October 2026)\n\nPrerequisites 28x and 28y are complete. All fifteen MP4 SHA-256 values match the brief and every cumulative caption file is present. Prepared titles, site links, syllabus quotations and chapters using cumulative scene starts in `youtube/brief28z-preflight.json` and `youtube/wave5-metadata-draft.json`. No title needed shortening.\n\nChemistry C05 is an existing private draft at https://youtu.be/1qF_486TVQE. Studio confirmed its title, description, not made for kids setting and Chemistry Module 7 playlist. Copyright showed no issues; Community Guidelines checks were at 18%. The advanced settings click timed out. Upload work stopped under the inherited 28x timeout rule. Resume this draft without uploading a duplicate. Advanced settings, captions, thumbnail inspection, completed checks and publication remain pending. The other fourteen files remain unuploaded. The playlist membership changed but final playlist readback remains pending. Per-video state is in `youtube/wave5-uploads.json`.\n')
print('Recorded C05 private draft and all remaining gates.')
