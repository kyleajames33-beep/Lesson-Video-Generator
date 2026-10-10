"""Build only the separate v5 simple-working review page from frozen inputs."""
from copy import deepcopy
from hashlib import sha256
from html import escape
import json
from pathlib import Path
import struct
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
PROTOTYPES = ROOT / 'out/prototypes'
DOCS = ROOT / 'docs/production/module5-c2-b2-simple-working-2026-10-10/native-adjustment-01'
NATIVE = PROTOTYPES / 'module5-simple-working-v5-native-adjusted-2026-10-10'
OUTPUT = PROTOTYPES / 'module5-simple-working-review-2026-10-10/index.html'
V4_HASHES = {
    'c2': 'f4e473e210efdb0a53f10b6dd636e261ef112a7fca0f146a92da2557ce75a3ba',
    'b2': 'ff680f50cf74fb6821a3244752599c718624158e42d93ed9db7b0dc19ce47496',
}
SCENES = {'c2': {'c2-transfer'}, 'b2': {'worked-example', 'quick-check'}}
PILOTS = [
    ('c2', 'c2-transfer', 'c2/transfer-pilot-config.json',
     'module5-c2-voiced-2026-10-10/transfer-simple-pilot01', 'Chemistry: predict the approach to equilibrium'),
    ('b2', 'worked-example', 'b2/worked-pilot-config.json',
     'module5-b2-voiced-2026-10-10/worked-simple-pilot01', 'Biology: classify the three animal cases'),
    ('b2', 'quick-check', 'b2/quick-pilot-config.json',
     'module5-b2-voiced-2026-10-10/quick-simple-pilot01', 'Biology: predict encounters and explain survival'),
]


def read(path):
    return json.loads(path.read_text(encoding='utf-8'))


def digest(path):
    h = sha256()
    with path.open('rb') as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b''):
            h.update(block)
    return h.hexdigest()


def e(value):
    return escape(str(value), quote=True)


def url(path):
    return '/' + quote(path.relative_to(PROTOTYPES).as_posix(), safe='/')


def source_path(key, version):
    return f'out/prototypes/module5-{key}-voiced-2026-10-10/narrated-{version}.lesson.json'


def assert_invariants(key, previous, current):
    before, after = deepcopy(previous), deepcopy(current)
    seen = set()
    prior_scenes = {s['id']: s for s in before['scenes']}
    for scene in after['scenes']:
        if scene['id'] in SCENES[key]:
            prior = prior_scenes[scene['id']]
            a = prior.pop('calculationPresentation')
            b = scene.pop('calculationPresentation')
            if not isinstance(a, dict) or not isinstance(b, dict):
                raise ValueError('Selected working presentation must be an object')
            # Narration-paced line cues are still timing, even inside the changed presentation.
            if [s.get('lineAts') for s in a['stages']] != [s.get('lineAts') for s in b['stages']]:
                raise ValueError(f'Selected result-line timing changed: {key}/{scene["id"]}')
            seen.add(scene['id'])
    if seen != SCENES[key] or before != after:
        raise ValueError(f'V5 changed outside the selected working presentations: {key}')


def verify_audio(lesson, record):
    dependencies = {r['sceneId']: r for r in record['timelineNarration']['dependencies']}
    for scene in lesson['scenes']:
        voice = scene.get('voiceover', {})
        if not voice.get('audioFile'):
            continue
        frozen = dependencies[scene['id']]
        if voice['audioFile'] != frozen['audioFile']:
            raise ValueError(f'Assembled audio path changed: {scene["id"]}')
        audio = ROOT / voice['audioFile']
        if digest(audio) != frozen['audioSha256']:
            raise ValueError(f'Assembled audio bytes changed: {scene["id"]}')
        assembly = read(audio.with_suffix('.assembly.json'))
        if (assembly['audioSha256'] != frozen['audioSha256'] or
                assembly['textSha256'] != sha256(voice['text'].encode()).hexdigest() or
                assembly['alignmentSha256'] != digest(audio.with_suffix('.alignment.json'))):
            raise ValueError(f'Assembled text/alignment binding changed: {scene["id"]}')
        for item in assembly['dependencies']:
            raw = ROOT / item['audioFile']
            if (digest(raw) != item['audioSha256'] or
                    digest(raw.with_suffix('.alignment.json')) != item['alignmentSha256'] or
                    digest(raw.with_suffix('.generation.json')) != item['generationSha256']):
                raise ValueError(f'Raw take or sidecar changed: {raw}')


def load_lessons():
    authority = read(DOCS / 'correction-record.json')
    if authority.get('schemaVersion') != 1:
        raise ValueError('Unsupported simple-working source record')
    lessons, hashes, records = {}, {}, {}
    for key in SCENES:
        expected = source_path(key, 'v5')
        matches = [p['candidate'] for p in authority['packages']
                   if p['key'] == key and p['candidate']['path'] == expected]
        if len(matches) != 1:
            raise ValueError(f'Missing or ambiguous selected v5 source: {key}')
        source_hash = matches[0]['sha256']
        brief = read(DOCS / key / 'production-brief.json')
        if brief['source'] != {'lessonPath': expected, 'lessonSha256': source_hash}:
            raise ValueError(f'V5 brief does not bind current selected source: {key}')
        if digest(ROOT / expected) != source_hash:
            raise ValueError(f'V5 source byte hash changed: {key}')
        v4_path = ROOT / source_path(key, 'v4')
        if digest(v4_path) != V4_HASHES[key]:
            raise ValueError(f'Frozen v4 source changed: {key}')
        previous, current = read(v4_path), read(ROOT / expected)
        assert_invariants(key, previous, current)
        record = read(PROTOTYPES / 'module5-voiced-review-2026-10-10' / f'{key}.listening-record.json')
        if record['source'] != source_path(key, 'v2') or digest(ROOT / record['source']) != record['sourceSha256']:
            raise ValueError(f'Frozen listening source changed: {key}')
        normalized = deepcopy(previous)
        for scene in normalized['scenes']:
            presentation = scene.get('calculationPresentation')
            if presentation and 'captionSafeWorking' in presentation:
                if presentation.pop('captionSafeWorking') is not True:
                    raise ValueError('Unexpected preserved caption-safe flag')
        if normalized != read(ROOT / record['source']):
            raise ValueError(f'V4 differs from listening source beyond its presentation flag: {key}')
        for item in record['files']:
            if digest(ROOT / item['path']) != item['sha256']:
                raise ValueError('Frozen full narration or captions changed: ' + item['path'])
        verify_audio(current, record)
        lessons[key], hashes[key], records[key] = current, source_hash, record
    return lessons, hashes, records


def scene_range(lesson, scene_id):
    cursor = lesson['introDurationInFrames']
    for scene in lesson['scenes']:
        if scene['id'] == scene_id:
            return [cursor, cursor + scene['durationInFrames'] - 1]
        cursor += scene['durationInFrames'] - 24
    raise ValueError('Unknown selected scene: ' + scene_id)


def pilot_html(spec, lessons, hashes):
    key, scene_id, config_name, directory_name, title = spec
    config = read(DOCS / config_name)
    expected = source_path(key, 'v5')
    expected_range = scene_range(lessons[key], scene_id)
    if (config['lessonPath'] != expected or config['frameRange'] != expected_range or
            config['teachingBriefPath'] != (DOCS / key / 'production-brief.json').relative_to(ROOT).as_posix()):
        raise ValueError('Pilot config is not the exact full selected v5 scene: ' + config_name)
    directory = PROTOTYPES / directory_name
    video = directory / 'video.mp4'
    if not video.is_file():
        return f'<section><h2>{e(title)}</h2><p>This selected-scene clip is not yet available.</p></section>', False
    for name in ['render-record.json', 'inputs.snapshot.json', 'release.snapshot.json', 'captions.vtt']:
        if not (directory / name).is_file():
            raise ValueError('Selected clip is not finalized: ' + directory_name)
    render = read(directory / 'render-record.json')
    snapshot = read(directory / 'inputs.snapshot.json')
    release = read(directory / 'release.snapshot.json')
    bindings = [item for item in snapshot['files'] if item['path'] == expected and 'lesson' in item.get('roles', [])]
    if (snapshot['options']['lessonPath'] != expected or len(bindings) != 1 or
            snapshot['options']['renderConfig'] != (DOCS / config_name).relative_to(ROOT).as_posix() or
            snapshot['renderConfig'] != config or
            bindings[0]['sha256'] != hashes[key] or snapshot.get('missingRequired') or
            release.get('missingRequired') or
            render.get('inputDriftCheckPassed') is not True or
            render['inputPackageSha256'] != snapshot['packageSha256'] or
            render['render']['fps'] != lessons[key]['fps'] or
            render['render']['frameRange'] != expected_range or
            render['videoSha256'] != digest(video)):
        raise ValueError('Selected clip does not bind the exact v5 source and scene: ' + directory_name)
    caption_path = (directory / 'captions.vtt').relative_to(ROOT).as_posix()
    caption_bindings = [item for item in release['files'] if item['path'] == caption_path]
    if len(caption_bindings) != 1 or caption_bindings[0]['sha256'] != digest(directory / 'captions.vtt'):
        raise ValueError('Selected clip caption bytes differ from its finalized package')
    seconds = (expected_range[1] - expected_range[0] + 1) / lessons[key]['fps']
    return f'''<section><h2>{e(title)}</h2><p>Selected scene, {seconds:.1f} seconds. This is not a complete Module 5 lesson video.</p>
<video controls preload="metadata" playsinline><source src="{e(url(video))}" type="video/mp4">
<track kind="captions" src="{e(url(directory / 'captions.vtt'))}" srclang="en" label="English captions" default>
</video><p><a href="{e(url(video))}">Open video</a> · <a href="{e(url(directory / 'captions.vtt'))}">Clip captions</a></p></section>''', True


def native_html(lessons, hashes):
    rows = read(NATIVE / 'frames.json')
    if not isinstance(rows, list) or not rows:
        raise ValueError('Current native frame list is missing')
    images = []
    seen = set()
    for row in rows:
        key, scene_id = row['key'], row['sceneId']
        if key not in SCENES or scene_id not in SCENES[key]:
            raise ValueError('Unexpected native review scene')
        if row['sourcePath'] != source_path(key, 'v5') or row['sourceSha256'] != hashes[key]:
            raise ValueError('Native frame is not bound to current v5')
        start, end = scene_range(lessons[key], scene_id)
        if (type(row['localFrame']) is not int or row['localFrame'] < 0 or
                start + row['localFrame'] > end or row['globalFrame'] != start + row['localFrame']):
            raise ValueError('Native frame timeline disagrees with selected v5 scene')
        path = ROOT / row['path']
        if path.parent != NATIVE or path.suffix != '.png' or digest(path) != row['sha256']:
            raise ValueError('Native frame path or byte hash changed')
        with path.open('rb') as stream:
            header = stream.read(24)
        if header[:8] != b'\x89PNG\r\n\x1a\n' or struct.unpack('>II', header[16:24]) != (1920, 1080):
            raise ValueError('Expected native 1920 by 1080 PNG')
        seconds = row['localFrame'] / lessons[key]['fps']
        label = f'{"Chemistry" if key == "c2" else "Biology"}: {scene_id}, {seconds:.1f} seconds into the scene'
        images.append(f'<figure><a href="{e(url(path))}"><img loading="lazy" src="{e(url(path))}" alt="{e(label)}"></a><figcaption>{e(label)}</figcaption></figure>')
        seen.add((key, scene_id))
    if seen != {(key, scene_id) for key, values in SCENES.items() for scene_id in values}:
        raise ValueError('Native manifest does not include all three selected scenes')
    return '<section><h2>Current still samples</h2><p>Open an image to inspect it at its native size. Stills do not establish continuous playback or listening quality.</p><div class="stills">' + ''.join(images) + '</div></section>'


def build():
    lessons, hashes, records = load_lessons()
    clips, available = [], {}
    for spec in PILOTS:
        html, present = pilot_html(spec, lessons, hashes)
        clips.append(html)
        available[spec[1]] = present
    stills = native_html(lessons, hashes)
    narration = []
    for key in ('c2', 'b2'):
        files = {Path(item['path']).suffix: ROOT / item['path'] for item in records[key]['files']}
        title = 'Chemistry complete narration' if key == 'c2' else 'Biology complete narration'
        narration.append(f'<p><a href="{e(url(files[".m4a"]))}">{title}</a> · <a href="{e(url(files[".srt"]))}">Full narration captions</a></p>')
    html = '''<!doctype html><html lang="en-AU"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Module 5: simpler working review</title><style>
*{box-sizing:border-box}body{margin:0;padding:24px;font:18px/1.6 system-ui,sans-serif;background:#f7f7f5;color:#17251f}main{max-width:1100px;margin:auto}
h1,h2{line-height:1.2}section{background:white;border:1px solid #d7ddd9;border-radius:12px;padding:24px;margin:24px 0}a{color:#0d6b52}
video,img{display:block;width:100%;height:auto}video{background:#17251f}.note{padding:16px;border-left:4px solid #b77710;background:#fff6e7}
.stills{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px}figure{margin:0}figcaption{font-size:15px;margin-top:8px}
nav{display:flex;flex-wrap:wrap;gap:16px}@media(max-width:650px){body{padding:12px}section{padding:16px}.stills{grid-template-columns:1fr}}
</style></head><body><main><h1>Module 5: simpler working</h1>
<p>These selected scenes show one reasoning step at a time with simpler teaching text. The recorded narration is unchanged.</p>
<p class="note">This is a preview for review. Human listening, complete lesson playback, device checks and full Module 5 video approval remain pending.</p>
<nav><a href="/module5-voiced-review-2026-10-10/">Complete narration and scripts</a><a href="/parallel-production-2026-10-10/">Production desk</a><a href="/calculation-full-review-2026-10-10/">Complete calculation videos</a></nav>
''' + ''.join(clips) + stills + '<section><h2>Unchanged complete narration</h2>' + ''.join(narration) + '</section></main></body></html>\n'
    if '\u2014' in html:
        raise ValueError('Em dash in new review copy')
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(html, encoding='utf-8')
    print(json.dumps({'page': OUTPUT.relative_to(ROOT).as_posix(), 'sha256': digest(OUTPUT),
                      'sourceSha256': hashes, 'clipsAvailable': available}, indent=2))


if __name__ == '__main__':
    build()
