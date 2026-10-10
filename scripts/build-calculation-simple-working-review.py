"""Build the separate selected calculation display-review page from exact pilots."""
from copy import deepcopy
from hashlib import sha256
from html import escape
import json
from pathlib import Path
import re
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / 'docs/production/calculation-simple-working-2026-10-10'
MEDIA = ROOT / 'out/prototypes/calculation-simple-working-2026-10-10'
OUTPUT = ROOT / 'out/prototypes/calculation-simple-working-review-2026-10-10/index.html'
CLIP_FILES = ('video.mp4', 'video-silent.mp4', 'video-unmastered.mp4',
              'render-record.json', 'inputs.snapshot.json', 'release.snapshot.json',
              'captions.srt', 'captions.vtt', 'timeline-audio.json',
              'timeline-audio.wav', 'video.audio-review.json')
SCENES = {'limiting': 'worked-example-2', 'empirical-formulas': 'molecular-extension'}
TITLES = {'limiting': 'Limiting reagents: yield and chlorine left',
          'empirical-formulas': 'From empirical formula to molecular formula'}


def read(path):
    return json.loads(path.read_text(encoding='utf-8'))


def digest(path):
    h = sha256()
    with path.open('rb') as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b''):
            h.update(block)
    return h.hexdigest()


def url(path):
    return '/' + quote(path.relative_to(ROOT / 'out/prototypes').as_posix(), safe='/')


def check(key):
    source = MEDIA / key / 'narrated.lesson.json'
    lesson = read(source)
    previous = read(ROOT / f'out/prototypes/{key}-paced-2026-10-10/narrated.lesson.json')
    before, after = deepcopy(previous), deepcopy(lesson)
    for a, b in zip(before['scenes'], after['scenes'], strict=True):
        if a['id'] == SCENES[key]:
            a.pop('calculationPresentation')
            b.pop('calculationPresentation')
    if before != after:
        raise ValueError(f'Changes outside the selected display: {key}')
    if source.read_bytes() != (DOCS / key / 'lesson.json').read_bytes():
        raise ValueError(f'Tracked selected source differs: {key}')
    config_path = DOCS / key / 'pilot-config.json'
    config = read(config_path)
    directory = MEDIA / key / 'pilot-01'
    for name in CLIP_FILES:
        if not (directory / name).is_file() or not (directory / name).stat().st_size:
            raise ValueError(f'Missing complete pilot artifact: {key}/{name}')
    inputs, release, render = (read(directory / name) for name in
                               ('inputs.snapshot.json', 'release.snapshot.json', 'render-record.json'))
    relative_source = source.relative_to(ROOT).as_posix()
    bindings = [item for item in inputs['files'] if item['path'] == relative_source]
    if (inputs['options']['lessonPath'] != relative_source or len(bindings) != 1 or
            bindings[0]['sha256'] != digest(source) or inputs['renderConfig'] != config or
            inputs['options']['renderConfig'] != config_path.relative_to(ROOT).as_posix() or
            render.get('inputDriftCheckPassed') is not True or
            render['inputPackageSha256'] != inputs['packageSha256'] or
            render['render']['frameRange'] != config['frameRange'] or
            inputs.get('missingRequired') or release.get('missingRequired')):
        raise ValueError(f'Pilot completion/source bindings disagree: {key}')
    exports = [item for item in release['files'] if 'export' in item.get('roles', [])]
    if {item['path'] for item in exports} != {p.replace('\\', '/') for p in release['options']['artifacts']}:
        raise ValueError(f'Pilot export bindings disagree: {key}')
    for item in exports:
        p = ROOT / item['path']
        if p.parent.resolve() != directory.resolve() or p.name not in CLIP_FILES or digest(p) != item['sha256']:
            raise ValueError(f'Pilot artifact mismatch: {item["path"]}')
    cursor = lesson['introDurationInFrames']
    for scene in lesson['scenes']:
        if scene['id'] == SCENES[key]:
            expected = [cursor, cursor + scene['durationInFrames'] - 1]
            break
        cursor += scene['durationInFrames'] - 24
    else:
        raise ValueError('Selected scene missing')
    if expected != config['frameRange'] or digest(directory / 'video.mp4') != render['videoSha256']:
        raise ValueError(f'Exact scene/video mismatch: {key}')
    return directory, expected


def main():
    native = read(MEDIA / 'native/frames.json')
    for item in native['frames']:
        if digest(ROOT / item['path']) != item['sha256']:
            raise ValueError('Native frame hash mismatch')
    cards = []
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    for key in SCENES:
        directory, frames = check(key)
        original_captions = (directory / 'captions.vtt').read_text(encoding='utf-8')
        # Review-only cue positioning keeps paused captions above native controls.
        # Original exported caption artifacts, text and timing remain preserved.
        positioned_captions = re.sub(r'^(\d{2}:\d{2}:\d{2}\.\d{3} --> \d{2}:\d{2}:\d{2}\.\d{3})$',
                                     r'\1 line:80%', original_captions, flags=re.MULTILINE)
        cue_count = sum('-->' in line for line in original_captions.splitlines())
        if (cue_count == 0 or positioned_captions.count(' line:80%') != cue_count or
                positioned_captions.replace(' line:80%', '') != original_captions):
            raise ValueError('Review caption content or timing changed')
        review_captions = OUTPUT.parent / f'{key}-review-captions.vtt'
        review_captions.write_text(positioned_captions, encoding='utf-8', newline='\n')
        note = ('Working clears as the explanation moves from subtraction to mass, then the two final answers.'
                if key == 'limiting' else
                'The molecular formula remains visible while the explanation turns to atom arrangement. Completed arithmetic clears.')
        cards.append(f'''<article><h2>{escape(TITLES[key])}</h2><p>{escape(note)}</p>
<video controls preload="metadata" playsinline aria-label="{escape(TITLES[key])}">
<source src="{url(directory / 'video.mp4')}" type="video/mp4">
<track kind="captions" label="English" srclang="en" default src="{url(review_captions)}"></video>
<p class="links"><a href="{url(directory / 'video.mp4')}">Open video</a>
<a href="{url(directory / 'captions.vtt')}">Captions</a></p>
<p class="meta">1920 × 1080, 30 fps. Selected scene interval with its transition: {(frames[1]-frames[0]+1)/30:.2f} seconds. Review captions are positioned above controls; their words and timing match the preserved export.</p></article>''')
    page = '''<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Clearer calculation working | HSCScience</title><style>
body{margin:0;background:#f7f7f5;color:#1a1a1a;font:17px/1.5 system-ui,sans-serif}main{max-width:1120px;margin:auto;padding:28px 20px 60px}
h1{font-size:clamp(28px,4vw,42px);line-height:1.15}h2{font-size:25px;line-height:1.25}article{padding:20px;background:white;border:1px solid #ddd;border-radius:12px;margin-top:28px}
video{display:block;width:100%;background:#fff;aspect-ratio:16/9}.links{display:flex;gap:24px;flex-wrap:wrap}a{color:#0d6b52}.meta{color:#666;font-size:14px}.status{border-left:4px solid #0d6b52;padding:8px 16px;background:#edf5f0}
</style><main><h1>Clearer calculation working</h1><p>Two revised displays with the existing narration. Listen while following the calculation, then check whether each screen keeps the information you need.</p>
<p class="status">These are voiced review pilots. Source and still checks are separate from continuous playback and human listening. New full exports and posting remain pending review.</p>''' + '\n'.join(cards) + '''<p><a href="/module5-simple-working-review-2026-10-10/">Module 5 revised examples</a> · <a href="/parallel-production-2026-10-10/">Production desk</a></p></main></html>'''
    if '\u2014' in page:
        raise ValueError('Prohibited punctuation in review page')
    OUTPUT.write_text(page, encoding='utf-8', newline='\n')
    print(json.dumps({'path': OUTPUT.relative_to(ROOT).as_posix(), 'sha256': digest(OUTPUT)}))


if __name__ == '__main__':
    main()
