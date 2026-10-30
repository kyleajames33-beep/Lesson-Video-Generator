# Verify the owner-approved brief 28z upload inputs and prepare metadata.
import hashlib, json, re
from pathlib import Path
R=Path(__file__).resolve().parents[1]
P=R/'docs/production/claude-pm'
progress=P/'youtube/brief28z-preflight.json'
if progress.exists() and any(v.get('videoId') for v in json.loads(progress.read_text(encoding='utf-8')).get('videos',[])):
 raise SystemExit('Upload IDs already recorded. Preserve progress and resume the existing draft; do not rebuild this initial preflight.')
brief=(P/'codex-prompts/28z-youtube-upload-m7-fifteen.md').read_text(encoding='utf-8')
rows=re.findall(r'^\| ([\w-]+) \| `([^`]+)` \| `([a-f0-9]+)` \| `([^`]+)` \| `([^`]+)`',brief,re.M)
priority=re.findall(r'^\d+\. ([\w-]+)$',brief,re.M)
route=json.loads((R/'docs/production/module7-video-route-draft.json').read_text(encoding='utf-8'))
entries={e['id']:e for s in route['subjects'].values() for e in s['entries']}
ledgers={}
for subject in ['chem','bio']:
 d=json.loads((R/f'docs/production/programme/syllabus/{subject}-2017-y12.json').read_text(encoding='utf-8'))
 ledgers[subject]={p['id']:p for m in d['modules'] for p in m['contentPoints']}
def sha(p):
 h=hashlib.sha256()
 with p.open('rb') as f:
  for b in iter(lambda:f.read(1048576),b''):h.update(b)
 return h.hexdigest()
out=[]
for lid,video,expected,caption,design in rows:
 source=(P/'lessons'/design).read_text(encoding='utf-8')
 section=re.split(r'^## YouTube metadata[^\n]*\n',source,flags=re.M)[-1].split('\n## ')[0]
 title=re.search(r'(?:\*\*)?Title:(?:\*\*)?\s*(.+)',section)[1].strip()
 title=re.sub(r'\s*\(\d+ characters[^)]*\)\s*$','',title).strip().strip('"')
 original=title
 if len(title)>100:title=title.replace('Year 12 Chemistry Module 7','Year 12 Chemistry').replace('Year 12 Biology Module 7','Year 12 Biology')
 assert len(title)<=100,(lid,title)
 desc=re.split(r'(?:\*\*)?Description:(?:\*\*)?\s*',section,maxsplit=1)[1]
 desc=re.split(r'\n- \*\*(?:syllabusDotpoints|Playlists)',desc)[0]
 desc=re.sub(r'(?m)^  ','',desc).strip()
 desc=re.split(r'\n- (?:Dotpoint|\*\*syllabus)',desc)[0].strip().strip('"')
 desc=re.sub(r'\nChapters \([^\n]+\):\n.*?(?=\nPrevious:|\nPrerequisite:|\n#)', '\n', desc, flags=re.S)
 desc=re.sub(r'(https://hscscience.com.au/subjects/[^\s]+/lesson\d+)(?=\s|$)',r'\1.sa',desc)
 if lid=='skills-s07':desc='Full lessons, notes and practice questions: https://hscscience.com.au/subjects/chemistry/year12\nhttps://hscscience.com.au/subjects/biology/year12\n\n'+desc
 measured=P/'lessons'/Path(caption).parent/'lesson.json'
 lesson=json.loads(measured.read_text(encoding='utf-8'))
 frame=lesson.get('introDurationInFrames',0);chapters=[]
 for s in lesson['scenes']:
  sec=frame//lesson['fps'];chapters.append(f"{sec//60}:{sec%60:02d} {s['id'].replace('-',' ').capitalize()}");frame+=s['durationInFrames']
 blocks=desc.split('\n\n');blocks.insert(2,'\n'.join(chapters));desc='\n\n'.join(blocks)
 assert '\u2014' not in title+desc,lid
 checks=[]
 if lid in entries:
  for pid in entries[lid].get('syllabusActions',[]):
   p=ledgers[lid.split('-')[0]][pid]
   if p.get('examples') and ('"'+p['text']+'"') in desc:
    full=p['text']+'\n'+'\n'.join('- '+x for x in p['examples'])
    desc=desc.replace('"'+p['text']+'"','"'+full+'"')
   checks.append({'id':pid,'text':p['text'],'examples':p.get('examples',[]),'textPresent':p['text'] in desc,'examplesPresent':all(x in desc for x in p.get('examples',[]))})
 assert len(desc)<=5000,(lid,len(desc))
 file=R/'out/explainer'/video;cap=P/'lessons'/caption
 actual=sha(file);assert actual==expected,(lid,actual)
 playlist={'id':'PLD-Lwfjq3gW0','title':'HSC exam skills'} if lid=='skills-s07' else ({'id':'PLZn7qgJ_Eg2E','title':'Year 12 Chemistry: Module 7, Organic Chemistry (2017 syllabus)'} if lid.startswith('chem') else {'id':'PLF46LOS0IuCo','title':'Year 12 Biology: Module 7, Infectious Disease (2017 syllabus)'})
 out.append({'lessonId':lid,'file':file.relative_to(R).as_posix(),'sha256':actual,'captionFile':cap.relative_to(R).as_posix(),'captionSha256':sha(cap),'measuredLesson':measured.relative_to(R).as_posix(),'title':title,'originalTitle':original,'description':desc,'syllabusDotpoints':re.findall(r'"([^\"]+)"',desc),'syllabusChecks':checks,'playlist':playlist,'chapters':chapters,'durationInFrames':frame,'status':'prepared','priority':priority.index(lid)+1})
out.sort(key=lambda x:x['priority'])
(P/'youtube/brief28z-preflight.json').write_text(json.dumps({'brief':'28z','date':'2026-10-28','prerequisites':{'28x':'complete','28y':'complete'},'status':'prepared','videos':out},indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
draftpath=P/'youtube/wave5-metadata-draft.json';draft=json.loads(draftpath.read_text(encoding='utf-8'))
for item in out:
 old=next((x for x in draft if x['lessonId']==item['lessonId']),None)
 if old:old.update(item)
 else:draft.append(item)
draftpath.write_text(json.dumps(draft,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
print(json.dumps([{'id':x['lessonId'],'title':x['title'],'syllabusChecks':x['syllabusChecks']} for x in out],ensure_ascii=False,indent=2))
