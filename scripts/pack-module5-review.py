"""Create one immutable additive backup of the parallel review scratch evidence."""
from pathlib import Path
import argparse
import hashlib
import json
import zipfile

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--wave', choices=['initial', 'visual-v2'], default='initial')
args = parser.parse_args()
record_path = ROOT / 'docs/production/computer-transfer-2026-10-09.json'
record = json.loads(record_path.read_text(encoding='utf-8'))
if args.wave == 'initial':
    name = 'module5-parallel-review-media-2026-10-10.zip'
    directories = ['module5-visual-review-2026-10-10', 'module5-draft-visual-review-2026-10-10', 'parallel-production-2026-10-10']
    scope = 'Additive original/revised Module 5 diagnostic frames, their evidence and render helpers, and production reading desk. No audio, full export or release approval.'
else:
    name = 'module5-visual-v2-media-2026-10-10.zip'
    directories = ['module5-visual-v2-review-2026-10-10', 'module5-course-plan-2026-10-10']
    scope = 'Additive Module 5 v2 visual review evidence and focused course route page. Source/static/silent evidence remains distinct from voiced playback, listening and release approval.'
output = ROOT / 'out/archives' / name
if output.exists():
    raise RuntimeError('Preserve the existing dated archive; use a new version for later changes.')
files = []
for name in directories:
    directory = ROOT / 'out/prototypes' / name
    if not directory.is_dir():
        raise RuntimeError('Missing review directory: ' + name)
    for item in directory.rglob('*'):
        relative = item.relative_to(directory)
        if item.is_file() and not {'bundle', 'public', 'node_modules'}.intersection(relative.parts) and item.suffix in {'.png', '.json', '.mjs', '.tsx', '.html', '.mp4'}:
            files.append(item)
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
