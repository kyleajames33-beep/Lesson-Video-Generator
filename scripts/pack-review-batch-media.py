"""Back up the next two review candidates without replacing earlier snapshots."""
import hashlib
import json
from pathlib import Path
import re
import subprocess
import zipfile

ROOT = Path(__file__).resolve().parents[1]
RECORD = ROOT / 'docs/production/computer-transfer-2026-10-09.json'
OUT = ROOT / 'out/archives/calculation-batch-media-2026-10-09.zip'
FOLDERS = ['out/prototypes/mole-ratios-voiced-2026-10-09', 'out/prototypes/mass-to-mass-voiced-2026-10-09']


def digest(file):
    h = hashlib.sha256()
    with file.open('rb') as stream:
        for block in iter(lambda: stream.read(1024*1024), b''):
            h.update(block)
    return h.hexdigest()


if OUT.exists():
    raise RuntimeError('Preserve the existing dated snapshot.')
record = json.loads(RECORD.read_text(encoding='utf-8'))
paths = set()
for folder in FOLDERS:
    for pilot in ['diagram-pilot-01', 'worked-pilot-01']:
        result = subprocess.run(['node', 'scripts/release-snapshot.mjs', 'verify', folder+'/'+pilot+'/release.snapshot.json'],
            cwd=ROOT, capture_output=True, text=True)
        if result.returncode:
            raise RuntimeError('Pilot inputs/media no longer verify: '+folder+'/'+pilot+'\n'+result.stdout+result.stderr)
    for file in (ROOT/folder).rglob('*'):
        if file.is_file() and 'bundle' not in file.relative_to(ROOT).parts and file.suffix != '.log':
            paths.add(file)
    manifest = json.loads((ROOT/folder/'voice-manifest.json').read_text(encoding='utf-8'))
    lesson = json.loads((ROOT/folder/'narrated.lesson.json').read_text(encoding='utf-8'))
    for value in [item['audioFile'] for item in manifest['scenes']]+[scene['voiceover']['audioFile'] for scene in lesson['scenes']]:
        file = ROOT/value
        paths.add(file)
        for suffix in ['.alignment.json', '.generation.json', '.assembly.json']:
            if file.with_suffix(suffix).exists():
                paths.add(file.with_suffix(suffix))
for folder in ['out/prototypes/calculation-batch-review-2026-10-09',
               'out/prototypes/mole-ratios-conversational-2026-10-09',
               'out/prototypes/mass-to-mass-conversational-2026-10-09']:
    for file in (ROOT/folder).rglob('*'):
        if file.is_file() and 'bundle' not in file.relative_to(ROOT).parts and file.suffix != '.log':
            paths.add(file)
for file in (ROOT/'out/prototypes/feedback-independent-reviews').glob('*'):
    if file.is_file() and file.name.startswith(('mole-ratios-', 'mass-to-mass-')):
        paths.add(file)
secrets = []
if (ROOT/'.env.local').exists():
    for line in (ROOT/'.env.local').read_text(encoding='utf-8-sig').splitlines():
        if '=' in line and not line.lstrip().startswith('#'):
            key,value = line.split('=',1)
            value = value.strip().strip('"\'')
            if re.search('KEY|TOKEN|SECRET|PASSWORD',key,re.I) and len(value)>=12:
                secrets.append(value.encode())
entries = []
for file in sorted(paths):
    if file.suffix in {'.json','.md','.html','.txt','.srt','.vtt','.py'} and any(secret in file.read_bytes() for secret in secrets):
        raise RuntimeError('Credential found in backup candidate: '+str(file.relative_to(ROOT)))
    entries.append({'path':file.relative_to(ROOT).as_posix(),'bytes':file.stat().st_size,'sha256':digest(file)})
with zipfile.ZipFile(OUT,'x',zipfile.ZIP_DEFLATED,compresslevel=1) as archive:
    for item in entries:
        archive.write(ROOT/item['path'],item['path'])
    archive.writestr('transfer-manifest.json',json.dumps({'schemaVersion':1,'stateArchiveSha256':record['stateArchiveSha256'],'files':entries},indent=2))
with zipfile.ZipFile(OUT) as archive:
    if archive.testzip() is not None:
        raise RuntimeError('ZIP CRC verification failed.')
    for item in entries:
        if hashlib.sha256(archive.read(item['path'])).hexdigest()!=item['sha256']:
            raise RuntimeError('Archived content mismatch: '+item['path'])
entry={'name':OUT.name,'bytes':OUT.stat().st_size,'sha256':digest(OUT),'files':len(entries),
    'status':'prepared-upload-pending','scope':'Additive mole-ratios and mass-to-mass takes, measured sources/captions, four verified short pilots and combined review. Listening/full exports pending.'}
record['continuations'].append(entry)
RECORD.write_text(json.dumps(record,indent=2)+'\n',encoding='utf-8')
print(json.dumps(entry),flush=True)
