"""Rebuild the local full-export review page from the real queue state."""
from pathlib import Path
from html import escape
import json

ROOT = Path(__file__).resolve().parents[1]
plan = json.loads((ROOT / 'docs/production/calculation-full-export-queue-2026-10-10.json').read_text(encoding='utf-8'))
status_path = ROOT / plan['statusPath']
completion_path = ROOT / 'docs/production/calculation-full-export-completion-2026-10-10.json'
state_path = status_path if status_path.exists() else completion_path
state = json.loads(state_path.read_text(encoding='utf-8')) if state_path.exists() else {'status': 'queued', 'jobs': []}
states = {item['key']: item for item in state['jobs']}
cards = []
for job in plan['jobs']:
    item = states.get(job['key'], {'status': 'queued'})
    title = escape(job['title'])
    output = ROOT / job['outputPath']
    if item['status'] == 'exported-unreviewed' and (output / 'video.mp4').exists():
        relative = '/' + job['outputPath'].removeprefix('out/prototypes/')
        label = 'Complete video ready for review.'
        media = f'<video controls preload="metadata"><source src="{relative}/video.mp4" type="video/mp4"><track kind="captions" src="{relative}/captions.vtt" srclang="en" label="English" default></video><p><a href="{relative}/captions.srt">Aligned captions</a></p>'
    else:
        label = 'Full video being prepared.'
        media = '<p>The full file is still being prepared. The approved pilots remain available below.</p>'
    cards.append(f'<section><h2>{title}</h2><p>{label}</p>{media}</section>')
page = '''<!doctype html><html lang="en-AU"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Complete calculation videos</title><style>body{font:18px/1.6 system-ui,sans-serif;background:#f7f7f5;color:#17251f;margin:0;padding:24px}main{max-width:1100px;margin:auto}section{background:white;border:1px solid #d7ddd9;border-radius:12px;margin:24px 0;padding:24px}video{width:100%;height:auto;background:white}a{color:#0d6b52}</style><main><h1>Complete calculation videos</h1><p>These complete videos use the approved revisions. They are available for final review before YouTube posting.</p><p><a href="/calculation-batch-review-2026-10-10/">Approved pilots and complete narration tracks</a> | <a href="/parallel-production-2026-10-10/">Production desk</a></p>'''
page += ''.join(cards) + '</main></html>'
assert chr(0x2014) not in page
output = ROOT / 'out/prototypes/calculation-full-review-2026-10-10'
output.mkdir(parents=True, exist_ok=True)
(output / 'index.html').write_text(page, encoding='utf-8', newline='\n')
print('http://127.0.0.1:8778/calculation-full-review-2026-10-10/')
