"""Create one immutable additive backup of the parallel review scratch evidence."""
from pathlib import Path
import argparse
import hashlib
import json
import zipfile

ROOT = Path(__file__).resolve().parents[1]
SIMPLE_CLIP_FILES = {'video.mp4', 'render-record.json', 'inputs.snapshot.json',
                     'release.snapshot.json', 'captions.srt', 'captions.vtt',
                     'timeline-audio.json', 'timeline-audio.wav', 'video.audio-review.json',
                     'video-silent.mp4', 'video-unmastered.mp4'}


def require_complete_simple(directory, key, scene_id):
    missing = [name for name in sorted(SIMPLE_CLIP_FILES)
               if not (directory / name).is_file() or (directory / name).stat().st_size == 0]
    if missing:
        raise RuntimeError('Incomplete v5 clip, no archive written: ' + str(directory) + ': ' + ', '.join(missing))
    source = f'out/prototypes/module5-{key}-voiced-2026-10-10/narrated-v5.lesson.json'
    config_names = {'c2-transfer': 'transfer-pilot-config.json',
                    'worked-example': 'worked-pilot-config.json',
                    'quick-check': 'quick-pilot-config.json'}
    config_path = ('docs/production/module5-c2-b2-simple-working-2026-10-10/'
                   f'native-adjustment-01/{key}/{config_names[scene_id]}')
    config = json.loads((ROOT / config_path).read_text(encoding='utf-8'))
    lesson = json.loads((ROOT / source).read_text(encoding='utf-8'))
    cursor = lesson['introDurationInFrames']
    expected_range = None
    for scene in lesson['scenes']:
        if scene['id'] == scene_id:
            expected_range = [cursor, cursor + scene['durationInFrames'] - 1]
            break
        cursor += scene['durationInFrames'] - 24
    if expected_range is None:
        raise RuntimeError('Missing selected v5 scene, no archive written: ' + scene_id)
    inputs = json.loads((directory / 'inputs.snapshot.json').read_text(encoding='utf-8'))
    render = json.loads((directory / 'render-record.json').read_text(encoding='utf-8'))
    release = json.loads((directory / 'release.snapshot.json').read_text(encoding='utf-8'))
    exports = [item for item in release['files'] if 'export' in item.get('roles', [])]
    artifact_paths = {value.replace('\\', '/') for value in release['options']['artifacts']}
    if not exports or {item['path'] for item in exports} != artifact_paths:
        raise RuntimeError('V5 snapshot export bindings disagree, no archive written: ' + str(directory))
    for item in exports:
        artifact = (ROOT / item['path']).resolve()
        if (artifact.parent != directory.resolve() or artifact.name not in SIMPLE_CLIP_FILES or
                not artifact.is_file() or artifact.stat().st_size == 0):
            raise RuntimeError('Missing or unsupported v5 snapshot export, no archive written: ' + item['path'])
        digest = hashlib.sha256()
        with artifact.open('rb') as stream:
            for block in iter(lambda: stream.read(1024 * 1024), b''):
                digest.update(block)
        if digest.hexdigest() != item['sha256']:
            raise RuntimeError('V5 snapshot export hash mismatch, no archive written: ' + item['path'])
    bindings = [item for item in inputs['files'] if item['path'] == source and 'lesson' in item.get('roles', [])]
    if (inputs['options']['lessonPath'] != source or len(bindings) != 1 or
            inputs['options']['renderConfig'] != config_path or inputs['renderConfig'] != config or
            bindings[0]['sha256'] != hashlib.sha256((ROOT / source).read_bytes()).hexdigest() or
            render.get('inputDriftCheckPassed') is not True or
            render['inputPackageSha256'] != inputs['packageSha256'] or
            inputs.get('missingRequired') or release.get('missingRequired') or
            render['render']['frameRange'] != expected_range or
            inputs['renderConfig']['frameRange'] != expected_range):
        raise RuntimeError('V5 clip source/completion records disagree, no archive written: ' + str(directory))
    h = hashlib.sha256()
    with (directory / 'video.mp4').open('rb') as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b''):
            h.update(block)
    if h.hexdigest() != render['videoSha256']:
        raise RuntimeError('Final v5 clip hash mismatch, no archive written: ' + str(directory))


def require_complete_full(directory):
    required = ['video.mp4', 'render-record.json', 'inputs.snapshot.json',
                'release.snapshot.json', 'captions.srt', 'captions.vtt',
                'timeline-audio.json', 'timeline-audio.wav', 'video.audio-review.json',
                'video-silent.mp4', 'video-unmastered.mp4']
    missing = [name for name in required
               if not (directory / name).is_file() or (directory / name).stat().st_size == 0]
    if missing:
        raise RuntimeError('Incomplete full export, no archive written: ' + str(directory) + ': ' + ', '.join(missing))
    render = json.loads((directory / 'render-record.json').read_text(encoding='utf-8'))
    inputs = json.loads((directory / 'inputs.snapshot.json').read_text(encoding='utf-8'))
    release = json.loads((directory / 'release.snapshot.json').read_text(encoding='utf-8'))
    expected_range = [0, inputs['timeline']['durationInFrames'] - 1]
    if (render.get('inputDriftCheckPassed') is not True or
            render['inputPackageSha256'] != inputs['packageSha256'] or
            inputs.get('missingRequired') or release.get('missingRequired') or
            render['render']['frameRange'] != expected_range):
        raise RuntimeError('Full export completion records disagree, no archive written: ' + str(directory))
    h = hashlib.sha256()
    with (directory / 'video.mp4').open('rb') as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b''):
            h.update(block)
    if h.hexdigest() != render['videoSha256']:
        raise RuntimeError('Final full video hash mismatch, no archive written: ' + str(directory))


parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--wave', choices=['initial', 'visual-v2', 'selected-c2-b2', 'voiced-c2-b2', 'caption-safe', 'full-empirical', 'full-mole', 'full-mass', 'full-limiting', 'caption-safe-v4', 'simple-working-v5'], default='initial')
args = parser.parse_args()
record_path = ROOT / 'docs/production/computer-transfer-2026-10-09.json'
record = json.loads(record_path.read_text(encoding='utf-8'))
if args.wave == 'initial':
    name = 'module5-parallel-review-media-2026-10-10.zip'
    directories = ['module5-visual-review-2026-10-10', 'module5-draft-visual-review-2026-10-10', 'parallel-production-2026-10-10']
    scope = 'Additive original/revised Module 5 diagnostic frames, their evidence and render helpers, and production reading desk. No audio, full export or release approval.'
elif args.wave == 'visual-v2':
    name = 'module5-visual-v2-media-2026-10-10.zip'
    directories = ['module5-visual-v2-review-2026-10-10', 'module5-course-plan-2026-10-10']
    scope = 'Additive Module 5 v2 visual review evidence and focused course route page. Source/static/silent evidence remains distinct from voiced playback, listening and release approval.'
elif args.wave == 'selected-c2-b2':
    name = 'module5-c2-b2-selected-media-2026-10-10.zip'
    directories = ['module5-c2-selected-2026-10-10', 'module5-b2-selected-2026-10-10', 'parallel-production-2026-10-10', 'calculation-full-review-2026-10-10']
    scope = 'Additive C2/B2 selected silent native and narrow still evidence, preserved diagnostic states and current production/full-export reading pages. No new recordings or completed full videos in this checkpoint.'
elif args.wave == 'voiced-c2-b2':
    name = 'module5-c2-b2-voiced-media-2026-10-10.zip'
    directories = ['module5-c2-voiced-2026-10-10', 'module5-b2-voiced-2026-10-10', 'module5-voiced-review-2026-10-10', 'module5-voiced-pilots-2026-10-10']
    scope = 'Fresh C2/B2 raw Simon v4 takes, sidecars, lossless assemblies, preserved v1 and corrected v2 measured candidates, complete listening tracks and two short voiced pilot packages. Human listening and complete visual playback/release approval remain pending.'
elif args.wave == 'full-empirical':
    name = 'calculation-full-empirical-media-2026-10-10.zip'
    directories = ['calculation-full-2026-10-10/empirical-formulas/full-render-02']
    scope = 'Completed empirical full1080p export, aligned/mastered audio, captions and exact pinned-runtime dependency records. Export is unreviewed for public release.'
elif args.wave == 'caption-safe':
    name = 'module5-c2-b2-caption-safe-media-2026-10-10.zip'
    directories = ['module5-voiced-pilots-2026-10-10/c2/transfer-pilot-02', 'module5-voiced-pilots-2026-10-10/b2/worked-pilot-02', 'module5-caption-safe-native-2026-10-10']
    scope = 'Additive caption-safe C2/B2 v3 sources/props, native frame evidence and two short voiced pilot packages. Reuses frozen narration from the earlier voiced archive. Full visual playback, human listening and public release remain pending.'
elif args.wave == 'caption-safe-v4':
    name = 'module5-c2-b2-caption-safe-v4-media-2026-10-10.zip'
    directories = ['module5-voiced-pilots-2026-10-10/c2/transfer-pilot-03', 'module5-voiced-pilots-2026-10-10/b2/worked-pilot-03', 'module5-voiced-pilots-2026-10-10/b2/quick-pilot-01', 'module5-caption-safe-v4-native-2026-10-10']
    scope = 'Additive caption-safe C2/B2 v4 sources/props, native frame evidence and three short voiced pilot packages. Reuses immutable narration. Full continuous visual playback, human listening and public release remain pending.'
elif args.wave == 'simple-working-v5':
    name = 'module5-c2-b2-simple-working-v5-media-2026-10-10.zip'
    directories = ['module5-c2-voiced-2026-10-10/transfer-simple-pilot01', 'module5-b2-voiced-2026-10-10/worked-simple-pilot01', 'module5-b2-voiced-2026-10-10/quick-simple-pilot01', 'module5-simple-working-v5-native-2026-10-10', 'module5-simple-working-v5-native-adjusted-2026-10-10', 'calculation-beginner-reading-audit-2026-10-10']
    scope = 'Additive C2/B2 v5 simple-working sources/props, initial and adjusted native still evidence and three finalized complete-selected-scene short pilot packages with all snapshot-bound exports. Separately includes prior-calculation beginner reading-audit decoded stills, which are source/still evidence only. Narration is preserved. Human listening, whole-lesson continuous visual review and publication approval remain pending.'
elif args.wave == 'full-mass':
    name = 'calculation-full-mass-media-2026-10-10.zip'
    directories = ['calculation-full-2026-10-10/mass-to-mass/full-render-01']
    scope = 'Completed mass-to-mass full1080p export, aligned/mastered audio, captions and exact pinned-runtime dependency records. Export remains unapproved for public release.'
elif args.wave == 'full-limiting':
    name = 'calculation-full-limiting-media-2026-10-10.zip'
    directories = ['calculation-full-2026-10-10/limiting/full-render-01']
    scope = 'Completed limiting-reactants full1080p export, aligned/mastered audio, captions and exact pinned-runtime dependency records. Export remains unapproved for public release.'
else:
    name = 'calculation-full-mole-media-2026-10-10.zip'
    directories = ['calculation-full-2026-10-10/mole-ratios/full-render-01']
    scope = 'Completed mole-ratios full1080p export, aligned/mastered audio, captions and exact pinned-runtime dependency records. Export is unreviewed for public release.'
output = ROOT / 'out/archives' / name
if output.exists():
    raise RuntimeError('Preserve the existing dated archive; use a new version for later changes.')
if args.wave in {'full-mass', 'full-limiting'}:
    for name in directories:
        require_complete_full(ROOT / 'out/prototypes' / name)
if args.wave == 'simple-working-v5':
    for name, key, scene_id in zip(directories[:3], ['c2', 'b2', 'b2'], ['c2-transfer', 'worked-example', 'quick-check']):
        require_complete_simple(ROOT / 'out/prototypes' / name, key, scene_id)
    for name in directories[3:5]:
        native_manifest = ROOT / 'out/prototypes' / name / 'frames.json'
        if not native_manifest.is_file() or native_manifest.stat().st_size == 0:
            raise RuntimeError('Missing v5 native frame manifest, no archive written: ' + name)
    audit_manifest = ROOT / 'out/prototypes' / directories[5] / 'frames.json'
    if (not audit_manifest.is_file() or hashlib.sha256(audit_manifest.read_bytes()).hexdigest() !=
            'd900591eaf2bc2083431d6b7b450a5de0e0bfc85f2917c5221796d6135995e64'):
        raise RuntimeError('Prior-calculation reading-audit manifest mismatch, no archive written.')
files = []
for name in directories:
    directory = ROOT / 'out/prototypes' / name
    if not directory.is_dir():
        raise RuntimeError('Missing review directory: ' + name)
    if args.wave == 'simple-working-v5' and name in directories[:3]:
        files.extend(directory / final_name for final_name in sorted(SIMPLE_CLIP_FILES))
        continue
    for item in directory.rglob('*'):
        relative = item.relative_to(directory)
        if item.is_file() and not {'bundle', 'public', 'node_modules'}.intersection(relative.parts) and item.suffix in {'.png', '.json', '.mjs', '.tsx', '.html', '.mp4', '.py', '.wav', '.mp3', '.m4a', '.srt', '.vtt', '.txt'}:
            files.append(item)
if args.wave == 'voiced-c2-b2':
    audio_directories = set()
    for key, subject in [('c2', 'chemistry-c2'), ('b2', 'biology-b2')]:
        lesson = json.loads((ROOT / f'out/prototypes/module5-{key}-voiced-2026-10-10/narrated-v2.lesson.json').read_text(encoding='utf-8'))
        manifest = json.loads((ROOT / f'docs/production/module5-c2-b2-recording-preparation-2026-10-10/{subject}.voice-manifest.json').read_text(encoding='utf-8'))
        values = [s['audioFile'] for s in manifest['scenes']] + [s['voiceover']['audioFile'] for s in lesson['scenes'] if s.get('voiceover', {}).get('audioFile')]
        for value in values:
            relative = value if value.startswith('public/') else 'public/' + value
            resolved = (ROOT / relative).resolve()
            if not resolved.is_relative_to((ROOT / 'public/audio').resolve()):
                raise RuntimeError('Audio outside selected transfer scope.')
            audio_directories.add(resolved.parent)
    for directory in audio_directories:
        files.extend(item for item in directory.iterdir() if item.is_file() and item.suffix in {'.wav', '.mp3', '.json'})
files = sorted(set(files))
if args.wave in {'caption-safe', 'caption-safe-v4', 'simple-working-v5'}:
    version = {'caption-safe': 'v3', 'caption-safe-v4': 'v4', 'simple-working-v5': 'v5'}[args.wave]
    for key in ['c2', 'b2']:
        for name in [f'narrated-{version}.lesson.json', f'remotion-props-{version}.json']:
            file = ROOT / f'out/prototypes/module5-{key}-voiced-2026-10-10' / name
            if not file.is_file():
                raise RuntimeError('Missing caption-safe selected source: ' + str(file))
            files.append(file)
    files = sorted(set(files))
entries = [{'path': p.relative_to(ROOT).as_posix(), 'bytes': p.stat().st_size,
            'sha256': hashlib.sha256(p.read_bytes()).hexdigest()} for p in files]
with zipfile.ZipFile(output, 'x', zipfile.ZIP_DEFLATED, compresslevel=1) as archive:
    for item in entries:
        archive.write(ROOT / item['path'], item['path'])
    archive.writestr('transfer-manifest.json', json.dumps({'schemaVersion': 1,
        'stateArchiveSha256': record['stateArchiveSha256'], 'files': entries}, indent=2))
with zipfile.ZipFile(output) as archive:
    assert archive.testzip() is None, 'CRC failure'
    for item in entries:
        assert hashlib.sha256(archive.read(item['path'])).hexdigest() == item['sha256'], item['path']
entry = {'name': output.name, 'bytes': output.stat().st_size,
         'sha256': hashlib.sha256(output.read_bytes()).hexdigest(), 'files': len(entries),
         'status': 'prepared-upload-pending',
         'scope': scope}
record['continuations'].append(entry)
record_path.write_text(json.dumps(record, indent=2) + '\n', encoding='utf-8', newline='\n')
print(json.dumps(entry), flush=True)
