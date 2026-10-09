"""Build a local reading desk from the tracked production board and drafts."""
from pathlib import Path
from html import escape
import hashlib
import json

ROOT = Path(__file__).resolve().parents[1]
board_path = ROOT / 'docs/production/parallel-production-board-2026-10-10.json'
board = json.loads(board_path.read_text(encoding='utf-8'))
output = ROOT / 'out/prototypes/parallel-production-2026-10-10'
output.mkdir(parents=True, exist_ok=True)

def e(value):
    return escape(str(value))

rows = ''.join('<tr><td>' + e(task['id']) + '</td><td>' + e(task.get('model', 'Coordinator'))
               + '</td><td>' + e(task['status']) + '</td><td>' + e(task['scope']) + '</td></tr>'
               for task in board['tasks'])
queue_section = ''
queue_path = ROOT / 'docs/production/youtube-queue-2026-10-10.json'
if queue_path.exists():
    queue = json.loads(queue_path.read_text(encoding='utf-8'))
    queue_rows = ''.join(f'<li><strong>{e(item["title"])}</strong><br>{e(item["stopsAfter"])}</li>'
                         for item in queue['videos'])
    queue_section = '<section><h2>YouTube preparation</h2><p>Current learner order. Titles and captions are prepared; exact full exports and release checks are pending.</p><ol>' + queue_rows + '</ol></section>'
drafts = []
for subject in ['chemistry', 'biology']:
    folder = ROOT / f'docs/production/drafts/module5-{subject}-l1-2026-10-10'
    source = folder / 'lesson.json'
    if not source.exists():
        drafts.append(f'<section><h2>{e(subject.title())} Module 5</h2><p>Draft preparation in progress.</p></section>')
        continue
    data = json.loads(source.read_text(encoding='utf-8'))
    digest = hashlib.sha256(source.read_bytes()).hexdigest()
    scenes = []
    for scene in data['scenes']:
        narration = scene.get('voiceover', {}).get('text', '')
        if not narration:
            narration = 'No narration supplied for this scene.'
        scenes.append(f'<details><summary>{e(scene["id"])}: {e(scene.get("title", scene.get("type", "")))}</summary>'
                      f'<p class="script">{e(narration)}</p></details>')
    brief_path = folder / 'production-brief.json'
    progression = ''
    if brief_path.exists():
        brief = json.loads(brief_path.read_text(encoding='utf-8'))
        progression = ''.join(f'<p><strong>{label}:</strong> {e(brief.get("progression", {}).get(key, "Pending"))}</p>'
                              for key, label in [('prerequisiteKnowledge', 'Entry knowledge'), ('startsWith', 'Starting point'),
                                                 ('stopsAfter', 'Stopping point'), ('nextLesson', 'Next lesson')])
    drafts.append(f'<section><h2>{e(subject.title())} Module 5: opening draft</h2>'
                  '<p class="notice">Silent writing draft. Narration, visual playback and listening are not approved.</p>'
                  + progression + ''.join(scenes)
                  + f'<p class="small">Exact draft SHA-256: {e(digest)}</p></section>')

document = '''<!doctype html><html lang="en-AU"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>HSCScience production desk</title><style>
body{font:18px/1.6 system-ui,sans-serif;color:#17251f;background:#f7f7f5;margin:0;padding:24px}main{max-width:1100px;margin:auto}
h1{font-size:clamp(30px,5vw,50px);line-height:1.1}h2{font-size:26px}a{color:#0d6b52}section{background:white;border:1px solid #d7ddd9;border-radius:12px;padding:24px;margin:24px 0}
.notice{border-left:4px solid #bd7900;padding:12px;background:#fff6e6}.scroll{overflow:auto}table{border-collapse:collapse;width:100%;min-width:650px}th,td{text-align:left;vertical-align:top;padding:12px;border-bottom:1px solid #d7ddd9}th{background:#edf4ef}
details{border-top:1px solid #d7ddd9;padding:14px 0}summary{cursor:pointer;font-weight:650}.script{max-width:78ch;white-space:pre-wrap}.small{font-size:13px;overflow-wrap:anywhere;color:#57625b}
</style><main><h1>HSCScience production desk</h1><p>Module 5 in Chemistry and Biology. Coordinated drafting, visual design and independent review.</p>
<p class="notice">This is a saved production snapshot, not a live background service. The current calculation clips still need revised listening and release checks.</p>
<p><a href="/calculation-batch-review-2026-10-10/">Open the current four calculation clips and full narration</a></p>
<section><h2>Work assignments</h2><div class="scroll"><table><thead><tr><th>Task</th><th>Model</th><th>State</th><th>Deliverable</th></tr></thead><tbody>'''
document += rows + '</tbody></table></div></section>' + queue_section + ''.join(drafts)
document += '<p class="small">Generated from tracked task state and exact draft files. Rebuild with python scripts/build-parallel-production-review.py.</p></main></html>'
if '\u2014' in document:
    raise ValueError('Selected production copy contains prohibited punctuation.')
(output / 'index.html').write_text(document, encoding='utf-8', newline='\n')
print('http://127.0.0.1:8778/parallel-production-2026-10-10/')
