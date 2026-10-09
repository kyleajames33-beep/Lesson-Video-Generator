"""Preserve the settled decoded-frame evidence beside the immutable media ZIP."""
from pathlib import Path
import hashlib
import json
import zipfile

ROOT = Path(__file__).resolve().parents[1]
record_path = ROOT / 'docs/production/computer-transfer-2026-10-09.json'
record = json.loads(record_path.read_text(encoding='utf-8'))
output = ROOT / 'out/archives/calculation-feedback-frames-2026-10-10.zip'
if output.exists():
    raise RuntimeError('Preserve the existing evidence archive.')
files = sorted((ROOT / 'out/prototypes/feedback-independent-reviews').glob('*-paced-pilot02-*.png'))
if len(files) != 27:
    raise RuntimeError('Expected all 27 settled independently decoded frames.')
entries = [{'path': p.relative_to(ROOT).as_posix(), 'bytes': p.stat().st_size,
            'sha256': hashlib.sha256(p.read_bytes()).hexdigest()} for p in files]
with zipfile.ZipFile(output, 'x', zipfile.ZIP_DEFLATED, compresslevel=1) as archive:
    for item in entries:
        archive.write(ROOT / item['path'], item['path'])
    archive.writestr('transfer-manifest.json', json.dumps({'schemaVersion': 1,
        'stateArchiveSha256': record['stateArchiveSha256'], 'files': entries}, indent=2))
with zipfile.ZipFile(output) as archive:
    if archive.testzip() is not None:
        raise RuntimeError('Evidence ZIP failed CRC checks.')
    for item in entries:
        if hashlib.sha256(archive.read(item['path'])).hexdigest() != item['sha256']:
            raise RuntimeError('Evidence ZIP content changed.')
entry = {'name': output.name, 'bytes': output.stat().st_size,
    'sha256': hashlib.sha256(output.read_bytes()).hexdigest(), 'files': len(entries),
    'status': 'prepared-upload-pending',
    'scope': 'Companion native decoded-frame evidence for the four paced pilots, referenced by the independent review; no continuous playback or listening approval.'}
record['continuations'].append(entry)
record_path.write_text(json.dumps(record, indent=2) + '\n', encoding='utf-8', newline='\n')
print(json.dumps(entry), flush=True)
