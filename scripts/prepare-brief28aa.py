"""Verify the nine approved Brief 28aa files and prepare upload metadata."""
import hashlib
import json
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PM = ROOT / 'docs/production/claude-pm'
OUTPUT = PM / 'youtube/brief28aa-preflight.json'
if OUTPUT.exists() and any(v.get('videoId') for v in json.loads(OUTPUT.read_text(encoding='utf-8'))['videos']):
    raise SystemExit('Preserve recorded uploads. Resume the existing preflight.')

def read(path):
    return json.loads(path.read_text(encoding='utf-8'))

def sha(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

def normal(text):
    return re.sub(r'\s+', ' ', text).strip()

def design_point_ids(description, ledger):
    """Match complete quoted headings or blocks, never a heading prefix."""
    quoted = {normal(block) for block in re.findall(r'"([^\"]+)"', description)}
    found = []
    for pid, point in ledger.items():
        full = point['text'] + ''.join('\n- ' + x for x in point.get('examples', []))
        if normal(point['text']) in quoted or normal(full) in quoted:
            found.append(pid)
    return found

brief = (PM / 'codex-prompts/28aa-youtube-upload-m7-nine.md').read_text(encoding='utf-8')
rows = re.findall(r'^\| ([\w-]+) \| `([^`]+)` \| `([a-f0-9]+)` \| `([^`]+)` \| `([^`]+)`', brief, re.M)
assert len(rows) == 9
route = read(ROOT / 'docs/production/module7-video-route-draft.json')
entries = {e['id']: e for s in route['subjects'].values() for e in s['entries']}
ledgers = {}
official = {}
for subject, name in [('chem', 'chemistry'), ('bio', 'biology')]:
    ledgers[subject] = {p['id']: p for m in read(ROOT / f'docs/production/programme/syllabus/{subject}-2017-y12.json')['modules'] for p in m['contentPoints']}
    path = ROOT / f'out/research/continuity-2026-10-08/{name}-2017-paragraphs.json'
    data = read(path)
    official[subject] = (path, data, normal(' '.join(p['text'] for p in data['paragraphs'])))

videos = []
for order, (lid, video, expected, caption, design) in enumerate(rows, 1):
    source = (PM / 'lessons' / design).read_text(encoding='utf-8')
    section = re.split(r'^## YouTube metadata[^\n]*\n', source, flags=re.M)[-1].split('\n## ')[0]
    title = re.search(r'(?:\*\*)?Title:(?:\*\*)?\s*(.+)', section)[1].strip()
    title = re.sub(r'\s*\(\d+ characters[^)]*\)\s*$', '', title).strip().strip('"')
    original = title
    if len(title) > 100:
        title = title.replace('Year 12 Chemistry Module 7', 'Year 12 Chemistry').replace('Year 12 Biology Module 7', 'Year 12 Biology')
    assert len(title) <= 100, (lid, title)
    desc = re.split(r'(?:\*\*)?Description:(?:\*\*)?\s*', section, maxsplit=1)[1]
    desc = re.split(r'\n- (?:Dotpoint|\*\*(?:syllabusDotpoints|Playlist))', desc)[0].strip().strip('"')
    desc = re.sub(r'(https://hscscience.com.au/subjects/[^\s,]+/lesson\d+)(?=[\s,]|$)', r'\1.sa', desc)
    subject = lid.split('-')[0]
    ledger = ledgers[subject]
    point_ids = design_point_ids(desc, ledger)
    assert point_ids, lid
    # Replace partial example quotes with the complete ledger block, retaining
    # the design's teaching summary and explicit scope statement.
    start = desc.index('\n', desc.index('Syllabus dotpoint')) + 1
    end = desc.index('Official 2017 course:')
    old_block = desc[start:end]
    scope = '\n'.join(line for line in old_block.splitlines() if line.startswith('This video '))
    blocks = []
    checks = []
    opath, odata, otext = official[subject]
    for pid in point_ids:
        point = ledger[pid]
        parts = [point['text']] + point.get('examples', [])
        assert all(normal(part) in otext for part in parts), (lid, pid, 'official source mismatch')
        quote = point['text'] + ''.join('\n- ' + x for x in point.get('examples', []))
        blocks.append('"' + quote + '"')
        checks.append({'id': pid, 'text': point['text'], 'examples': point.get('examples', []), 'textPresent': True, 'examplesPresent': True, 'officialSourceMatch': True, 'officialSourceUrl': point['sourceUrl'], 'officialParagraphExtract': opath.relative_to(ROOT).as_posix(), 'officialDocumentSha256': odata['sourceSha256']})
    desc = desc[:start] + '\n'.join(blocks) + '\n' + (scope + '\n' if scope else '') + desc[end:]
    measured = PM / 'lessons' / Path(caption).parent / 'lesson.json'
    lesson = read(measured)
    frame = lesson.get('introDurationInFrames', 0)
    chapters = []
    for scene in lesson['scenes']:
        sec = frame // lesson['fps']
        chapters.append(f"{sec // 60}:{sec % 60:02d} {scene['id'].replace('-', ' ').capitalize()}")
        frame += scene['durationInFrames']
    paragraphs = desc.split('\n\n')
    paragraphs.insert(2, '\n'.join(chapters))
    desc = '\n\n'.join(paragraphs)
    assert len(desc) <= 5000 and '\u2014' not in title + desc, lid
    links = re.findall(r'https://hscscience.com.au/[^\s,]+', desc.split('\n')[0])
    site_checks = []
    for link in links:
        path = Path('C:/Users/kygs/hscscience') / (link.split('hscscience.com.au/')[1] + '.html')
        assert path.exists(), path
        site_checks.append({'url': link, 'localSiteFile': path.as_posix(), 'exists': True})
    file = ROOT / 'out/explainer' / video
    cap = PM / 'lessons' / caption
    actual = sha(file)
    assert actual == expected, (lid, actual)
    playlist = {'id': 'PLZn7qgJ_Eg2E', 'title': 'Year 12 Chemistry: Module 7, Organic Chemistry (2017 syllabus)'} if subject == 'chem' else {'id': 'PLF46LOS0IuCo', 'title': 'Year 12 Biology: Module 7, Infectious Disease (2017 syllabus)'}
    videos.append({'lessonId': lid, 'file': file.relative_to(ROOT).as_posix(), 'sha256': actual, 'captionFile': cap.relative_to(ROOT).as_posix(), 'captionSha256': sha(cap), 'measuredLesson': measured.relative_to(ROOT).as_posix(), 'measuredLessonSha256': sha(measured), 'design': 'docs/production/claude-pm/lessons/' + design, 'title': title, 'originalTitle': original, 'description': desc, 'syllabusDotpoints': blocks, 'syllabusChecks': checks, 'siteLinks': site_checks, 'playlist': playlist, 'playlistOrder': entries[lid]['playlistOrder'], 'chapters': chapters, 'durationInFrames': frame, 'status': 'prepared', 'priority': order})

# Read-only caption and container checks. The cumulative caption generator also
# refuses any cue that overlaps a response hold.
js = """
import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
import {explainerCaptionCues,toSrt} from './scripts/lib/explainer-captions.mjs';
const videos=JSON.parse(fs.readFileSync(0,'utf8'));
const results=videos.map(v=>{
 const lesson=JSON.parse(fs.readFileSync(v.measuredLesson,'utf8'));
 const generated=explainerCaptionCues(lesson);
 const current=fs.readFileSync(v.captionFile,'utf8');
 const normalize=s=>s.replace(/\\r\\n/g,'\\n');
 const probe=JSON.parse(execFileSync('node_modules/@remotion/compositor-win32-x64-msvc/ffprobe.exe',['-v','error','-show_entries','stream=codec_type,width,height,nb_frames,r_frame_rate:format=duration','-of','json',v.file],{encoding:'utf8'}));
 const video=probe.streams.find(s=>s.codec_type==='video');
 const narration=lesson.scenes.map(s=>s.voiceover?.text||'').join(' ');
 const result={lessonId:v.lessonId,captionsMatchCumulativeExporter:normalize(current)===normalize(toSrt(generated.cues)),cueCount:generated.cues.length,responseHoldCheck:'passed by explainerCaptionCues',width:video.width,height:video.height,hasAudio:probe.streams.some(s=>s.codec_type==='audio'),frames:Number(video.nb_frames),expectedFrames:v.durationInFrames,endHoldShortfall:v.durationInFrames-Number(video.nb_frames),narrationEmDashCount:(narration.match(/\\u2014/g)||[]).length,captionEmDashCount:(current.match(/\\u2014/g)||[]).length};
 if(!result.captionsMatchCumulativeExporter||!result.hasAudio||video.width!==1920||video.height!==1080||result.narrationEmDashCount||result.captionEmDashCount||result.endHoldShortfall<0||result.endHoldShortfall>4)throw new Error(JSON.stringify(result));
 return result;
});
console.log(JSON.stringify(results));
"""
result = subprocess.run(['C:/Program Files/nodejs/node.exe', '--input-type=module', '-e', js], input=json.dumps(videos), cwd=ROOT, text=True, capture_output=True, check=True)
checks = json.loads(result.stdout)
for video, check in zip(videos, checks):
    video['inputChecks'] = check
data = {'brief': '28aa', 'date': '2026-10-29', 'prerequisites': {'28x': 'complete', '28y': 'complete', '28z': 'complete'}, 'status': 'prepared', 'notes': ['All nine MP4 hashes match the brief.', 'Only the named cumulative caption files are prepared.', 'Full syllabus blocks include every ledger bullet; the design teaching summary remains unchanged.', 'Existing official 2017 document extracts were checked word for word after whitespace normalization.', 'Technical input checks do not replace Studio saved metadata, caption, thumbnail or playlist readbacks.'], 'videos': videos}
OUTPUT.write_text(json.dumps(data, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
draft_path = PM / 'youtube/wave5-metadata-draft.json'
draft = read(draft_path)
for video in videos:
    old = next((v for v in draft if v['lessonId'] == video['lessonId']), None)
    if old is not None:
        old.update(video)
    else:
        draft.append(video)
draft_path.write_text(json.dumps(draft, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
print(json.dumps([{'lessonId': v['lessonId'], 'titleCharacters': len(v['title']), 'descriptionCharacters': len(v['description']), 'inputChecks': v['inputChecks']} for v in videos], indent=2))
