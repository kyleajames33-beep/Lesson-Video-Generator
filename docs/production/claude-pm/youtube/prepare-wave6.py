"""Prepare Brief 28ac metadata and streaming hashes. Does not publish anything."""
import json,re,hashlib
from pathlib import Path
R=Path('C:/lesson-video-generator'); P=R/'docs/production/claude-pm'
def read(p):return json.loads(p.read_text(encoding='utf-8-sig'))
def sha(p):
 with p.open('rb') as f:return hashlib.file_digest(f,'sha256').hexdigest()
def norm(s):return re.sub(r'\s+',' ',s).strip()
brief=next((P/'codex-prompts').glob('28ac-*')).read_text(encoding='utf-8')
rows=re.findall(r'^\| ([a-z0-9-]+) \| `([^`]+)` \| `([0-9a-f]{64})` \| `([^`]+)` \| `([^`]+)`',brief,re.M)
ledgers={k:read(R/f'docs/production/programme/syllabus/{k}-2017-y12.json') for k in ['chem','bio']}
videos=[]
for key,file,expected,cap,design in rows:
 dp=P/'lessons'/design; text=dp.read_text(encoding='utf-8'); meta=text.split('## YouTube metadata',1)[1].split('\n## ',1)[0]
 mt=re.search(r'(?:\*\*)?Title:(?:\*\*)?\s*(.+)',meta); title=mt[1].strip();title=re.sub(r'\s*\(\d+ characters.*$','',title).strip('"')
 original=title
 if len(title)>100:title=title.replace(' Module 7','').replace(' Module 8','')
 assert len(title)<=100,(key,title)
 desc=re.split(r'(?:\*\*)?Description:(?:\*\*)?',meta,maxsplit=1)[1]
 desc=desc.split('#HSCScience',1)[0]+'#HSCScience'
 desc='\n'.join(l.strip() for l in desc.strip().splitlines()).lstrip('"').rstrip('"')
 desc=re.sub(r'(https://hscscience\.com\.au/[^\s"\n]*?/lesson\d+)(?![\d.])',r'\1.sa.html',desc)
 if key.startswith('skills'):
  desc='Lessons and practice: https://hscscience.com.au/subjects/chemistry/year12/\nBiology: https://hscscience.com.au/subjects/biology/year12/\n\n'+desc
  desc=re.sub(r'Chapters \(timestamps.*?(?=Previous:)','',desc,flags=re.S)
 measured=P/'lessons'/Path(cap).parent/'lesson.json'; lesson=read(measured)
 frame=lesson.get('introDurationInFrames',0);chapters=[]
 for scene in lesson['scenes']:
  sec=frame//lesson['fps'];chapters.append(f"{sec//60}:{sec%60:02d} {scene['id'].replace('-',' ').capitalize()}");frame+=scene['durationInFrames']
 desc=desc.replace('\n\n#','\n\n'+'\n'.join(chapters)+'\n\n#',1)
 vp=R/'out/explainer'/file;cp=P/'lessons'/cap; actual=sha(vp)
 assert actual==expected,(key,actual)
 points=[]
 if not key.startswith('skills'):
  ledger=ledgers['chem' if key.startswith('chem') else 'bio']
  for mod in ledger['modules']:
   for point in mod['contentPoints']:
    if norm(point['text']) in norm(desc):points.append(point)
 assert len(desc)<=5000,(key,len(desc))
 videos.append(dict(lessonId=key,file=vp.relative_to(R).as_posix(),sha256=actual,title=title,originalTitle=original,description=desc,design=dp.relative_to(R).as_posix(),designSha256=sha(dp),captionFile=cp.relative_to(R).as_posix(),captionSha256=sha(cp),measuredLesson=measured.relative_to(R).as_posix(),measuredLessonSha256=sha(measured),durationInFrames=frame,chapters=chapters,syllabusLedgerMatches=points,status='prepared-not-uploaded',metadataNeedsReview=True))
 print(key,len(title),len(desc),'hash pass',len(points),'syllabus stems')
(P/'youtube/wave6-metadata-draft.json').write_text(json.dumps(videos,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
