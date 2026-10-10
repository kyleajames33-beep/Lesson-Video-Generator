"""Package and restore ignored lesson state and media without credentials."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import re
import zipfile

ROOT = Path(__file__).resolve().parents[1]
# Frozen public copies can exceed Windows' legacy 260-character path limit.
# Keep the same resolved workspace boundary while using extended-length paths.
if os.name == 'nt' and not str(ROOT).startswith('\\\\?\\'):
    ROOT = Path('\\\\?\\UNC\\' + str(ROOT)[2:] if str(ROOT).startswith('\\\\') else '\\\\?\\' + str(ROOT))
STATE = ROOT / 'docs/production/handoff-state-2026-10-09.zip'
MANIFEST = ROOT / 'docs/production/handoff-state-2026-10-09.manifest.json'
MEDIA = ROOT / 'out/archives/computer-transfer-2026-10-09.zip'
TEXT = {'.json', '.md', '.txt', '.html', '.srt', '.vtt', '.csv', '.docx'}
EXCLUDED = {'node_modules', 'bundle', '.git', 'checks', 'archives'}

def digest(file):
    h = hashlib.sha256()
    with file.open('rb') as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b''):
            h.update(block)
    return h.hexdigest()

def secret_values():
    values = []
    for name in ['.env.local', '.env']:
        file = ROOT / name
        if not file.exists():
            continue
        for line in file.read_text(encoding='utf-8-sig').splitlines():
            if '=' not in line or line.lstrip().startswith('#'):
                continue
            key, value = line.split('=', 1)
            value = value.strip().strip('"\'')
            if re.search(r'KEY|TOKEN|SECRET|PASSWORD', key, re.I) and len(value) >= 12:
                values.append(value.encode())
    return values

def permitted(file):
    relative = file.relative_to(ROOT)
    return not any(part in EXCLUDED for part in relative.parts) and not file.name.startswith('.env') and file.suffix.lower() != '.env' and not re.search(r'credential|oauth|cookie|token-store', file.name, re.I)

def candidates():
    for base in ['out']:
        for current, directories, files in os.walk(ROOT / base):
            directories[:] = sorted(d for d in directories if d not in EXCLUDED)
            for name in sorted(files):
                file = Path(current) / name
                if permitted(file):
                    yield file

def pack_state():
    secrets = secret_values()
    files = [file for file in candidates() if file.suffix.lower() in TEXT and 'public' not in file.relative_to(ROOT).parts]
    entries = []
    # Inspect the complete selection before publishing an archive.
    for file in files:
        contents = file.read_bytes()
        if any(value in contents for value in secrets):
            raise RuntimeError('Local credential detected in ' + file.relative_to(ROOT).as_posix())
        entries.append({'path': file.relative_to(ROOT).as_posix(), 'bytes': len(contents), 'sha256': hashlib.sha256(contents).hexdigest()})
    STATE.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(STATE, 'w', zipfile.ZIP_DEFLATED, compresslevel=6) as archive:
        for file in files:
            archive.write(file, file.relative_to(ROOT).as_posix())
    report = {'schemaVersion': 1, 'archive': STATE.relative_to(ROOT).as_posix(), 'sha256': digest(STATE), 'scope': 'Ignored non-media lesson state and pinned research. No credentials, runtime bundles, tests or media.', 'files': entries}
    MANIFEST.write_text(json.dumps(report, indent=2) + '\n', encoding='utf-8')
    print(json.dumps({'stateFiles': len(entries), 'archiveBytes': STATE.stat().st_size, 'archive': report['archive']}))

def pack_media():
    if not STATE.exists():
        raise RuntimeError('Pack state first.')
    secrets = secret_values()
    files = [file for base in ['public/audio', 'public/assets'] for file in (ROOT / base).rglob('*') if file.is_file() and permitted(file)]
    # Include historical output files and frozen public copies, but omit reproducible bundles/test scratch.
    files += [file for file in candidates() if file.suffix.lower() not in TEXT or 'public' in file.relative_to(ROOT).parts]
    entries = []
    MEDIA.parent.mkdir(parents=True, exist_ok=True)
    if MEDIA.exists():
        raise RuntimeError('Transfer archive already exists. Preserve it or choose a separately dated revision.')
    with zipfile.ZipFile(MEDIA, 'x', zipfile.ZIP_DEFLATED, compresslevel=1) as archive:
        for i, file in enumerate(files):
            if file.suffix.lower() in {'.json', '.txt', '.html', '.md'} and any(value in file.read_bytes() for value in secrets):
                raise RuntimeError('Local credential detected in ' + file.relative_to(ROOT).as_posix())
            relative = file.relative_to(ROOT).as_posix()
            entry = {'path': relative, 'bytes': file.stat().st_size, 'sha256': digest(file)}
            archive.write(file, relative)
            entries.append(entry)
            if i % 250 == 0:
                print(f'Transfer files: {i + 1}/{len(files)}', flush=True)
        # Also carry state so one local transfer file restores the ignored workspace.
        archive.write(STATE, STATE.relative_to(ROOT).as_posix())
        archive.writestr('transfer-manifest.json', json.dumps({'schemaVersion': 1, 'stateArchiveSha256': digest(STATE), 'files': entries}, indent=2))
    # Test CRCs of every compressed member; hashing during restore protects contents as well.
    with zipfile.ZipFile(MEDIA) as archive:
        bad = archive.testzip()
        if bad:
            raise RuntimeError('Transfer archive corruption: ' + bad)
    checksum = digest(MEDIA)
    (MEDIA.with_suffix('.zip.sha256')).write_text(checksum + '  ' + MEDIA.name + '\n', encoding='utf-8')
    print(json.dumps({'mediaFiles': len(entries), 'archiveBytes': MEDIA.stat().st_size, 'sha256': checksum, 'archive': MEDIA.relative_to(ROOT).as_posix()}), flush=True)

def safe_target(name):
    target = (ROOT / name).resolve()
    if not target.is_relative_to(ROOT) or not name.startswith(('out/', 'public/audio/', 'public/assets/', 'docs/production/handoff-state-')):
        raise RuntimeError('Archive member outside transfer scope: ' + name)
    return target

def restore(archive_path, entries):
    with zipfile.ZipFile(archive_path) as archive:
        members = set(archive.namelist())
        # Reject conflicting destinations before changing any file.
        for item in entries:
            target = safe_target(item['path'])
            if item['path'] not in members:
                raise RuntimeError('Missing archive member: ' + item['path'])
            if target.exists() and digest(target) != item['sha256']:
                raise RuntimeError('Existing different file, preserved: ' + item['path'])
        restored = 0
        for item in entries:
            target = safe_target(item['path'])
            if target.exists():
                continue
            target.parent.mkdir(parents=True, exist_ok=True)
            h = hashlib.sha256()
            with archive.open(item['path']) as source, target.open('xb') as dest:
                for block in iter(lambda: source.read(1024 * 1024), b''):
                    h.update(block)
                    dest.write(block)
            if h.hexdigest() != item['sha256']:
                raise RuntimeError('Restored hash mismatch: ' + item['path'])
            restored += 1
    print(json.dumps({'restored': restored, 'alreadyPresent': len(entries) - restored, 'archive': str(archive_path)}))

parser = argparse.ArgumentParser()
parser.add_argument('command', choices=['pack-state', 'pack-media', 'restore-state', 'restore-media'])
parser.add_argument('archive', nargs='?')
parser.add_argument('--skip-rebuildable-pages', action='store_true',
                    help='Preserve current production desk/full-export HTML and rebuild it from tracked scripts after restoring evidence.')
args = parser.parse_args()
if args.command == 'pack-state':
    pack_state()
elif args.command == 'pack-media':
    pack_media()
elif args.command == 'restore-state':
    manifest = json.loads(MANIFEST.read_text(encoding='utf-8'))
    if digest(STATE) != manifest['sha256']:
        raise RuntimeError('State archive hash mismatch.')
    restore(STATE, manifest['files'])
else:
    media_path = Path(args.archive).resolve() if args.archive else MEDIA
    with zipfile.ZipFile(media_path) as archive:
        manifest = json.loads(archive.read('transfer-manifest.json'))
    if manifest['stateArchiveSha256'] != digest(STATE):
        raise RuntimeError('Media and checked-in state belong to different transfers. Use the matching Git revision.')
    entries = manifest['files']
    if args.skip_rebuildable_pages:
        rebuildable = {'out/prototypes/parallel-production-2026-10-10/index.html',
                       'out/prototypes/calculation-full-review-2026-10-10/index.html'}
        skipped = [item for item in entries if item['path'] in rebuildable]
        with zipfile.ZipFile(media_path) as archive:
            for item in skipped:
                if hashlib.sha256(archive.read(item['path'])).hexdigest() != item['sha256']:
                    raise RuntimeError('Skipped page archive hash mismatch: ' + item['path'])
        entries = [item for item in entries if item['path'] not in rebuildable]
        print(json.dumps({'preservedRebuildablePages': [item['path'] for item in skipped]}))
    restore(media_path, entries)
