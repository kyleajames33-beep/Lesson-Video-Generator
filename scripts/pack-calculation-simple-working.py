"""Back up exact calculation pilots and the dependencies needed to restore them."""
from hashlib import sha256
import json
from pathlib import Path
import runpy
import subprocess
import zipfile

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'out/archives/calculation-simple-working-media-2026-10-10.zip'
MEDIA = ROOT / 'out/prototypes/calculation-simple-working-2026-10-10'


def digest(path):
    h = sha256()
    with path.open('rb') as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b''):
            h.update(block)
    return h.hexdigest()


def main():
    if OUTPUT.exists():
        raise ValueError('Preserve the existing archive. Use an additive version for later changes.')
    api = runpy.run_path(str(ROOT / 'scripts/build-calculation-simple-working-review.py'))
    tracked = set(subprocess.check_output(['git', 'ls-files'], cwd=ROOT, text=True).splitlines())
    files = set()
    for key in api['SCENES']:
        directory, _ = api['check'](key)
        for name in api['CLIP_FILES']:
            files.add(directory / name)
        for name in ('narrated.lesson.json', 'remotion-props.json'):
            files.add(MEDIA / key / name)
        snapshot = api['read'](directory / 'inputs.snapshot.json')
        for item in snapshot['files']:
            if not item.get('sha256'):
                if item.get('required'):
                    raise ValueError('Missing required input')
                continue
            p = ROOT / item['path']
            if not p.resolve().is_relative_to(ROOT.resolve()) or digest(p) != item['sha256']:
                raise ValueError(f'Input changed: {item["path"]}')
            if item['path'] not in tracked:
                if not item['path'].startswith(('out/', 'public/', 'docs/')):
                    raise ValueError(f'Unexpected untracked input: {item["path"]}')
                files.add(p)
        # The baseline is bound by author invariance evidence and is needed by the page builder.
        files.add(ROOT / f'out/prototypes/{key}-paced-2026-10-10/narrated.lesson.json')
    manifest_path = MEDIA / 'native/frames.json'
    manifest = api['read'](manifest_path)
    files.add(manifest_path)
    for item in manifest['frames']:
        p = ROOT / item['path']
        if digest(p) != item['sha256']:
            raise ValueError('Native evidence changed')
        files.add(p)
    for name in ('check-calculation-retention.mjs', 'render-calculation-simple-native.mjs',
                 'check-calculation-simple-pilots.mjs'):
        files.add(ROOT / 'out/local' / name)
    files.update((MEDIA / 'decoded').glob('*.png'))
    files.update((MEDIA / 'decoded').glob('*.json'))
    entries = [{'path': p.relative_to(ROOT).as_posix(), 'bytes': p.stat().st_size,
                'sha256': digest(p)} for p in sorted(files)]
    if any('.env' in Path(item['path']).name or 'node_modules' in Path(item['path']).parts
           for item in entries):
        raise ValueError('Unexpected private or rebuildable input')
    transfer_path = ROOT / 'docs/production/computer-transfer-2026-10-09.json'
    transfer = api['read'](transfer_path)
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(OUTPUT, 'x', zipfile.ZIP_DEFLATED, compresslevel=1) as archive:
        for item in entries:
            archive.write(ROOT / item['path'], item['path'])
        archive.writestr('transfer-manifest.json', json.dumps({
            'schemaVersion': 1, 'stateArchiveSha256': transfer['stateArchiveSha256'],
            'files': entries}, indent=2))
    with zipfile.ZipFile(OUTPUT) as archive:
        if archive.testzip() is not None:
            raise ValueError('CRC check failed')
        for item in entries:
            if sha256(archive.read(item['path'])).hexdigest() != item['sha256']:
                raise ValueError('Archive member hash mismatch')
    record = {'name': OUTPUT.name, 'bytes': OUTPUT.stat().st_size,
              'sha256': digest(OUTPUT), 'files': len(entries), 'status': 'prepared-upload-pending',
              'scope': 'Two complete selected-scene calculation display pilots, all snapshot-bound exports, selected sources, native and decoded evidence, original source baselines and required ignored inputs. No full replacement, human listening or public release approval.'}
    transfer['continuations'].append(record)
    transfer_path.write_text(json.dumps(transfer, indent=2) + '\n', encoding='utf-8', newline='\n')
    print(json.dumps(record), flush=True)


if __name__ == '__main__':
    main()
