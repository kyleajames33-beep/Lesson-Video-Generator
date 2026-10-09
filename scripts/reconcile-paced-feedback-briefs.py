"""Reconcile mutable review metadata without changing frozen speech or pilot inputs."""
from pathlib import Path
import hashlib
import json

ROOT = Path(__file__).resolve().parents[1]
spec = json.loads((ROOT / 'docs/production/calculation-feedback-2026-10-10.json').read_text(encoding='utf-8'))
for entry in spec['lessons']:
    folder = ROOT / entry['output']
    source = folder / 'narrated.lesson.json'
    file = folder / 'production-brief.json'
    brief = json.loads(file.read_text(encoding='utf-8'))
    lesson = json.loads(source.read_text(encoding='utf-8'))
    if brief['source']['lessonSha256'] != hashlib.sha256(source.read_bytes()).hexdigest():
        raise RuntimeError('Selected source drift: ' + entry['key'])
    if entry['key'] == 'mole-ratios':
        row = next(s for s in brief['scenes'] if s['sceneId'] == 'worked-example-2')
        row['visualDecision'] = 'adjust'
    quiz = next(s for s in lesson['scenes'] if s['type'] == 'quickCheck')
    gap = quiz['responseHold']
    brief['teaching']['understandingCheck'] = (
        'Use the existing unseen practice task and explain the chosen relationship. '
        f'The separately recorded prompt and answer have sixty silent frames from {gap["startFrame"]} '
        f'to {gap["endFrame"]} in the selected revision. Answer visuals and captions wait until the gap ends. '
        'The invitation to pause longer is retained. Exact playback and listening remain pending.'
    )
    file.write_text(json.dumps(brief, ensure_ascii=False, indent=2) + '\n', encoding='utf-8', newline='\n')
print('Mutable brief decisions and exact practice-gap descriptions reconciled; source/audio unchanged.')
