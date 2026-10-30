"""Prepare Brief 28ab locally without claiming any YouTube changes."""
import hashlib, json, re, subprocess
from pathlib import Path
ROOT=next(p for p in Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists())
PM=ROOT/'docs/production/claude-pm'
def read(p): return json.loads(p.read_text(encoding='utf-8'))
def sha(p):
    with p.open('rb') as f: return hashlib.file_digest(f,'sha256').hexdigest()
def normal(s): return re.sub(r'\s+',' ',s).strip()
def write(p,d): p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
design=PM/'lessons/chem-m6-c02.md'
t=design.read_text(encoding='utf-8').split('## YouTube metadata (draft)',1)[1].split('\n## ',1)[0]
title=re.search(r'^Title: (.+)',t,re.M)[1]
desc=t.split('Description: ',1)[1].strip().replace('/lesson02\n','/lesson02.sa.html\n')
ledger=read(ROOT/'docs/production/programme/syllabus/chem-2017-y12.json')
points=[p for m in ledger['modules'] for p in m['contentPoints'] if normal(p['text']) in normal(desc)]
assert len(points)==2
official_path=ROOT/'out/research/continuity-2026-10-08/chemistry-2017-paragraphs.json'
official=read(official_path)
official_text=normal(' '.join(p['text'] for p in official['paragraphs']))
checks=[]
for p in points:
    parts=[p['text']]+p.get('examples',[])
    assert all(normal(part) in official_text for part in parts)
    assert all(normal(part) in normal(desc) for part in parts)
    checks.append(dict(id=p['id'],text=p['text'],examples=p.get('examples',[]),officialSourceMatch=True,sourceUrl=p['sourceUrl'],officialDocumentSha256=official['sourceSha256']))
measured=PM/'lessons/m6c02/measured/lesson.json'
lesson=read(measured);frame=lesson.get('introDurationInFrames',0);chapters=[]
for scene in lesson['scenes']:
    sec=frame//lesson['fps'];chapters.append(f"{sec//60}:{sec%60:02d} {scene['id'].replace('-',' ').capitalize()}")
    frame+=scene['durationInFrames']
desc=desc.replace('\n\nPrerequisite:', '\n\n'+'\n'.join(chapters)+'\n\nPrerequisite:')
assert len(title)<=100 and len(desc)<=5000 and chr(0x2014) not in title+desc
video=ROOT/'out/explainer/Explainer-chem-m6-c02/Explainer-chem-m6-c02-v2.mp4'
expected='a2850ece55131cd2ee6cef5fe961544cf348ac7d21fabae659d36c7f1ee418a7'
assert sha(video)==expected
cap=PM/'lessons/m6c02/measured/captions-cumulative.srt'
route=read(ROOT/'docs/production/module6-video-route-draft.json')
entry=next(e for s in route['subjects'].values() for e in s['entries'] if e['id']=='chem-m6-c02')
uploads=read(PM/'youtube/wave5-uploads.json')
example=next(v for v in uploads['videos'] if v['lessonId']=='chem-m6-c01')
v=dict(lessonId='chem-m6-c02',file=video.relative_to(ROOT).as_posix(),sha256=expected,title=title,description=desc,design=design.relative_to(ROOT).as_posix(),designSha256=sha(design),captionFile=cap.relative_to(ROOT).as_posix(),captionSha256=sha(cap),measuredLesson=measured.relative_to(ROOT).as_posix(),measuredLessonSha256=sha(measured),syllabusChecks=checks,chapters=chapters,durationInFrames=frame,playlist=example['playlist'],playlistOrder=entry['playlistOrder'],status='prepared-not-uploaded')
js="""import fs from 'node:fs';import{execFileSync}from'node:child_process';import{explainerCaptionCues,toSrt}from'./scripts/lib/explainer-captions.mjs';const v=JSON.parse(fs.readFileSync(0,'utf8'));const l=JSON.parse(fs.readFileSync(v.measuredLesson,'utf8'));const c=explainerCaptionCues(l);const current=fs.readFileSync(v.captionFile,'utf8');const norm=s=>s.replace(/\\r\\n/g,'\\n');if(norm(current)!==norm(toSrt(c.cues)))throw Error('caption mismatch');const p=JSON.parse(execFileSync('node_modules/@remotion/compositor-win32-x64-msvc/ffprobe.exe',['-v','error','-show_entries','stream=codec_type,width,height,nb_frames:format=duration','-of','json',v.file],{encoding:'utf8'}));const s=p.streams.find(s=>s.codec_type==='video');if(s.width!==1920||s.height!==1080||Number(s.nb_frames)!==16884||!p.streams.some(s=>s.codec_type==='audio'))throw Error('container mismatch');if((l.scenes.map(s=>s.voiceover?.text||'').join(' ')+current).includes(String.fromCharCode(8212)))throw Error('em dash');console.log(JSON.stringify({captionsMatchCumulativeExporter:true,cueCount:c.cues.length,responseHolds:'pass',probe:p}));"""
result=subprocess.run(['node','--input-type=module','-e',js],input=json.dumps(v),text=True,capture_output=True,cwd=ROOT,check=True)
v['inputChecks']=json.loads(result.stdout)
old=next(x for x in uploads['videos'] if x['lessonId']=='bio-m7-p02')
correction='Correction: the video\'s memory line says "tape, don\'t seal". Follow your school\'s approved procedure for securing the lid, which may use tape or parafilm. Keep grown plates closed.'
original=old['description']
# Existing chapters precede the syllabus. Move that exact chapter block after
# the syllabus quotation so the new paragraph is both after the quote and
# before the chapters, as the brief requests. Other wording stays unchanged.
blocks=original.split('\n\n');chapter=next(b for b in blocks if b.startswith('0:00 '));blocks.remove(chapter)
idx=next(i for i,b in enumerate(blocks) if 'Syllabus dotpoint' in b)
blocks.insert(idx+1,correction);blocks.insert(idx+2,chapter)
proposed='\n\n'.join(blocks)
data=dict(brief='28ab',date='2026-10-30',status='local-preflight-complete-browser-unavailable',videos=[v],descriptionCorrection=dict(lessonId=old['lessonId'],videoId=old['videoId'],url=old['url'],oldDescription=original,proposedDescription=proposed,paragraph=correction,status='prepared-not-saved',chapterPlacement='Existing exact chapter block moved after syllabus quote and correction. No chapter text or timing changed.'),blocker='Native Computer Use pipe and browser access host unavailable on initial inventory and retry. No upload, description save or live readback performed.')
write(PM/'youtube/brief28ab-preflight.json',data)
draft=read(PM/'youtube/wave5-metadata-draft.json');prior=next((x for x in draft if x['lessonId']==v['lessonId']),None)
if prior: prior.update(v)
else: draft.append(v)
write(PM/'youtube/wave5-metadata-draft.json',draft)
print(json.dumps(dict(status=data['status'],title=title,frames=frame,playlistOrder=v['playlistOrder'],captionCues=v['inputChecks']['cueCount'])))
