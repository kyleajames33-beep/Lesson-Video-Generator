# Provisional "measured" lesson.json for a Physics design that has no voice yet.
# Root tool, 21 November 2026. Lets a builder key scenes to cue words (cueFrame) before
# recording. Word times are ESTIMATES at the Google voice's measured rate (about 15.9
# characters per second, chem-y11-m1-v17). When the real take arrives, the lesson's
# common.ts switches its import to docs/production/claude-pm/lessons/<key>/measured/lesson.json
# and every cue re-resolves from the real word times; cue phrases do not change because
# the narration does not change.
#
# Usage: python -I work/physics-prebuild/make-provisional.py phys-y12-m5-v01
# Reads:  work/brief259/physics/candidates/<lesson>/source-audit.json
# Writes: work/physics-prebuild/<key>/lesson.json  (flagged "provisional": true)
import json, math, re, sys, pathlib

RATE = 15.9          # characters per second, Google voice voice_shdbjsxcrr0a
LEAD_MS = 350        # silence before the first word
FPS = 30
NOTES_HOLD_S = 45

lesson = sys.argv[1]
root = pathlib.Path(__file__).resolve().parents[2]
audit = json.loads((root / f'work/brief259/physics/candidates/{lesson}/source-audit.json').read_text(encoding='utf-8'))
key = audit['key']
scenes_out = []
for s in audit['scenes']:
    text = s['text']
    hold_s = float(s.get('holdSeconds') or 0)
    kind = s.get('holdKind') or 'visual'
    scene = {'id': s['id'], 'title': s['title'], 'holdSeconds': hold_s, 'holdKind': kind}
    if not text.strip():
        scene['durationInFrames'] = max(1, round(hold_s * FPS))
        scene['voiceover'] = {'text': ''}
        scene['captions'] = []
        scenes_out.append(scene)
        continue
    words = text.split()
    t = LEAD_MS
    caps = []
    for i, w in enumerate(words):
        dur = 1000 * (len(w) + 1) / RATE
        caps.append({'text': (' ' if i else '') + w, 'startMs': round(t), 'endMs': round(t + dur * 0.92),
                     'timestampMs': round(t + dur / 2, 1), 'confidence': None})
        t += dur
        if re.search(r'[.?!:]$', w):
            t += 280
        elif w.endswith(','):
            t += 110
    end_frame = math.ceil(caps[-1]['endMs'] / 1000 * FPS) + 9
    scene['voiceover'] = {'text': text, 'audioFile': None, 'startFrame': 0, 'endFrame': end_frame}
    scene['captions'] = caps
    if kind == 'notes':
        scene['durationInFrames'] = end_frame + NOTES_HOLD_S * FPS
    else:
        scene['durationInFrames'] = end_frame + round(hold_s * FPS)
    if kind == 'countdown':
        scene['planningResponseInterval'] = {'countdownSeconds': hold_s}
        scene['responseHold'] = {'startFrame': end_frame, 'endFrame': end_frame + round(hold_s * FPS)}
    scenes_out.append(scene)

out = {'id': lesson, 'fps': FPS, 'subject': 'Physics', 'yearLevel': 12, 'provisional': True,
       'note': 'Estimated word times for pre-build only. Never render a release from this file.',
       'sourceDesignSha256': audit['sourceSha256'], 'scenes': scenes_out}
dest = root / f'work/physics-prebuild/{key}/lesson.json'
dest.parent.mkdir(parents=True, exist_ok=True)
dest.write_text(json.dumps(out, indent=1, ensure_ascii=False) + '\n', encoding='utf-8', newline='\n')
total = sum(s['durationInFrames'] for s in scenes_out) / FPS
print(f'{lesson} -> {dest.relative_to(root)}: {len(scenes_out)} scenes, about {total:.0f} s')
