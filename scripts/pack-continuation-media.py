"""Preserve the newly recorded lesson and verified pilots as an additive snapshot."""
import hashlib
import json
from pathlib import Path
import re
import zipfile

ROOT = Path(__file__).resolve().parents[1]
RECORD = ROOT / 'docs/production/computer-transfer-2026-10-09.json'
OUT = ROOT / 'out/archives/continuation-media-2026-10-09.zip'
VOICED = 'out/prototypes/empirical-formulas-voiced-2026-10-09'


def digest(file):
    h = hashlib.sha256()
    with file.open('rb') as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b''):
            h.update(block)
    return h.hexdigest()


record = json.loads(RECORD.read_text(encoding='utf-8'))
if OUT.exists():
    raise RuntimeError('Preserve the existing continuation archive. Use a new revision for later changes.')
for folder in [VOICED + '/worked-pilot-01', 'out/prototypes/limiting-clear-working-2026-10-09/worked-pilot-02']:
    render = json.loads((ROOT / folder / 'render-record.json').read_text(encoding='utf-8'))
    if not render['inputDriftCheckPassed'] or digest(ROOT / folder / 'video.mp4') != render['videoSha256']:
        raise RuntimeError('Pilot has no verified render binding: ' + folder)
paths = set()
for folder in [VOICED, 'out/prototypes/limiting-clear-working-2026-10-09/worked-pilot-02', 'out/prototypes/continuation-review-2026-10-09']:
    for file in (ROOT / folder).rglob('*'):
        if file.is_file() and 'bundle' not in file.relative_to(ROOT).parts and file.suffix.lower() != '.env':
            paths.add(file)
paths.add(ROOT / 'out/prototypes/limiting-clear-working-2026-10-09/worked-pilot-config.json')
manifest = json.loads((ROOT / VOICED / 'voice-manifest.json').read_text(encoding='utf-8'))
lesson = json.loads((ROOT / VOICED / 'narrated.lesson.json').read_text(encoding='utf-8'))
for value in [item['audioFile'] for item in manifest['scenes']] + [scene['voiceover']['audioFile'] for scene in lesson['scenes']]:
    file = ROOT / value
    paths.add(file)
    for suffix in ['.alignment.json', '.assembly.json', '.generation.json']:
        sidecar = file.with_suffix(suffix)
        if sidecar.exists():
            paths.add(sidecar)
secrets = []
env = ROOT / '.env.local'
if env.exists():
    for line in env.read_text(encoding='utf-8-sig').splitlines():
        if '=' in line and not line.lstrip().startswith('#'):
            key, value = line.split('=', 1)
            value = value.strip().strip('"\'')
            if re.search(r'KEY|TOKEN|SECRET|PASSWORD', key, re.I) and len(value) >= 12:
                secrets.append(value.encode())
entries = []
with zipfile.ZipFile(OUT, 'x', zipfile.ZIP_DEFLATED, compresslevel=1) as archive:
    for file in sorted(paths):
        name = file.relative_to(ROOT).as_posix()
        if file.suffix in {'.json', '.md', '.html', '.mjs', '.txt'} and any(secret in file.read_bytes() for secret in secrets):
            raise RuntimeError('Local credential in ' + name)
        archive.write(file, name)
        entries.append({'path': name, 'bytes': file.stat().st_size, 'sha256': digest(file)})
    archive.writestr('transfer-manifest.json', json.dumps({'schemaVersion': 1, 'stateArchiveSha256': record['stateArchiveSha256'], 'files': entries}, indent=2))
with zipfile.ZipFile(OUT) as archive:
    if archive.testzip() is not None:
        raise RuntimeError('Continuation ZIP integrity failure.')
entry = {'name': OUT.name, 'bytes': OUT.stat().st_size, 'sha256': digest(OUT), 'files': len(entries),
         'status': 'prepared-upload-pending', 'scope': 'Additive fresh empirical recordings, measured assembly, verified limiting/empirical pilots and review page. No full export or listening approval.'}
record.setdefault('continuations', []).append(entry)
RECORD.write_text(json.dumps(record, indent=2) + '\n', encoding='utf-8')
print(json.dumps(entry), flush=True)
