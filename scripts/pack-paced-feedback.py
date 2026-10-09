"""Package additive feedback revisions, preserving all earlier transfer snapshots."""
from pathlib import Path
import hashlib
import json
import re
import subprocess
import zipfile

ROOT = Path(__file__).resolve().parents[1]
SPEC = ROOT / 'docs/production/calculation-feedback-2026-10-10.json'
RECORD = ROOT / 'docs/production/computer-transfer-2026-10-09.json'
OUT = ROOT / 'out/archives/calculation-feedback-media-2026-10-10.zip'


def digest(file):
    return hashlib.sha256(file.read_bytes()).hexdigest()


if OUT.exists():
    raise RuntimeError('Preserve the existing archive.')
spec = json.loads(SPEC.read_text(encoding='utf-8'))
record = json.loads(RECORD.read_text(encoding='utf-8'))
files = set()
for entry in spec['lessons']:
    folder = ROOT / entry['output']
    snapshot = folder / 'worked-pilot-02/release.snapshot.json'
    result = subprocess.run(['node', 'scripts/release-snapshot.mjs', 'verify', str(snapshot)],
                            cwd=ROOT, capture_output=True, text=True)
    if result.returncode:
        raise RuntimeError('Current pilot does not verify: ' + entry['key'])
    for file in folder.rglob('*'):
        parts = file.relative_to(folder).parts
        if file.is_file() and 'bundle' not in parts and 'worked-pilot-01' not in parts and file.suffix != '.log':
            files.add(file)
    dependencies = json.loads(snapshot.read_text(encoding='utf-8'))['files']
    for item in dependencies:
        if item['path'].startswith('public/audio/'):
            file = ROOT / item['path']
            if file.is_file():
                files.add(file)
review = ROOT / 'out/prototypes/calculation-batch-review-2026-10-10'
files.update(file for file in review.rglob('*') if file.is_file())
for file in (ROOT / 'out/prototypes/feedback-independent-reviews').glob('*'):
    if file.is_file() and 'paced' in file.name and '2026-10-10' in file.name:
        files.add(file)
secrets = []
for name in ['.env.local', '.env']:
    file = ROOT / name
    if not file.exists():
        continue
    for line in file.read_text(encoding='utf-8-sig').splitlines():
        if '=' not in line or line.lstrip().startswith('#'):
            continue
        key, value = line.split('=', 1)
        value = value.strip().strip('"\'')
        if re.search('KEY|TOKEN|SECRET|PASSWORD', key, re.I) and len(value) >= 12:
            secrets.append(value.encode())
entries = []
for file in sorted(files):
    if file.name.startswith('.env') or file.suffix == '.env':
        raise RuntimeError('Environment file excluded from media transfer.')
    if file.suffix in {'.json', '.md', '.html', '.txt', '.srt', '.vtt', '.py'} and any(value in file.read_bytes() for value in secrets):
        raise RuntimeError('Credential found in selected transfer content.')
    entries.append({'path': file.relative_to(ROOT).as_posix(), 'bytes': file.stat().st_size, 'sha256': digest(file)})
with zipfile.ZipFile(OUT, 'x', zipfile.ZIP_DEFLATED, compresslevel=1) as archive:
    for item in entries:
        archive.write(ROOT / item['path'], item['path'])
    archive.writestr('transfer-manifest.json', json.dumps({'schemaVersion': 1,
        'stateArchiveSha256': record['stateArchiveSha256'], 'files': entries}, indent=2))
with zipfile.ZipFile(OUT) as archive:
    if archive.testzip() is not None:
        raise RuntimeError('ZIP CRC failure.')
    for item in entries:
        if hashlib.sha256(archive.read(item['path'])).hexdigest() != item['sha256']:
            raise RuntimeError('Archived content differs: ' + item['path'])
entry = {'name': OUT.name, 'bytes': OUT.stat().st_size, 'sha256': digest(OUT), 'files': len(entries),
    'status': 'prepared-upload-pending',
    'scope': 'Additive explicit-ratio/paced calculation revisions, four short pilots and full listening tracks; new exact playback/listening and full exports remain pending.'}
record['continuations'].append(entry)
RECORD.write_text(json.dumps(record, indent=2) + '\n', encoding='utf-8', newline='\n')
print(json.dumps(entry), flush=True)
