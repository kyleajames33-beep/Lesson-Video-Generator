"""Additive backup for the 11 October silent design pilots. Never clobbers media."""
import argparse, ast, hashlib, json, re, subprocess, zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RECORD = ROOT / 'docs/production/plant-design-reset-2026-10-11/media-backup.json'
ARCHIVE = ROOT / 'out/archives/module5-design-reset-media-2026-10-11.zip'
STATE = ROOT / 'docs/production/handoff-state-2026-10-09.zip'
REPO = 'kyleajames33-beep/Lesson-Video-Generator'
TAG = 'workspace-media-2026-10-09'
ROOTS = [
    'out/prototypes/plant-runner-design-pilot-2026-10-11-v3',
    'out/prototypes/pressure-design-pilot-2026-10-11-v4',
    'out/prototypes/fungi-design-pilot-2026-10-11-v1',
    'out/prototypes/module5-morning-review-2026-10-10',
]
ASSETS = ['strawberry-runner-botanical-v1.png', 'rhizopus-bread-mould-botanical-v1.png', 'rhizopus-germination-botanical-v1.png']

def sha(p):
    return hashlib.sha256(Path(p).read_bytes()).hexdigest()

def freeze():
    if ARCHIVE.exists() or RECORD.exists():
        raise RuntimeError('Existing archive or record preserved.')
    files = {ROOT / 'public/assets/biology' / name for name in ASSETS}
    for rel in ROOTS:
        base = ROOT / rel
        if not (base / 'index.html').is_file():
            raise RuntimeError('Selected pilot missing: ' + rel)
        files.update(p for p in base.rglob('*') if p.is_file() and not any(x in {'node_modules', '.git', 'bundle'} or x.endswith('-bundle') for x in p.relative_to(base).parts))
    files = sorted(files)
    module = ast.parse((ROOT / 'scripts/transfer-workspace.py').read_text())
    helper = next(n for n in module.body if isinstance(n, ast.FunctionDef) and n.name == 'secret_values')
    ns = {'ROOT': ROOT, 're': re}
    exec(compile(ast.Module(body=[helper], type_ignores=[]), 'existing-private-helper', 'exec'), ns)
    secrets = ns['secret_values']()
    members = []
    for p in files:
        rel = p.relative_to(ROOT).as_posix()
        if not rel.startswith(('out/prototypes/', 'public/assets/biology/')) or p.name.startswith('.env'):
            raise RuntimeError('Unexpected selected member: ' + rel)
        data = p.read_bytes()
        if any(s in data for s in secrets):
            raise RuntimeError('Credential bytes detected. No values printed.')
        members.append({'path': rel, 'bytes': len(data), 'sha256': hashlib.sha256(data).hexdigest()})
    state_hash = sha(STATE)
    transfer = json.loads((ROOT / 'docs/production/computer-transfer-2026-10-09.json').read_text())
    if transfer['stateArchiveSha256'] != state_hash:
        raise RuntimeError('Historical restore state drift.')
    ARCHIVE.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(ARCHIVE, 'x', zipfile.ZIP_DEFLATED, compresslevel=1) as z:
        for p, item in zip(files, members):
            z.write(p, item['path'])
            if sha(p) != item['sha256']:
                raise RuntimeError('Member changed during backup.')
        z.writestr('transfer-manifest.json', json.dumps({'schemaVersion': 1, 'stateArchiveSha256': state_hash, 'files': members}))
    with zipfile.ZipFile(ARCHIVE) as z:
        if z.testzip() or any(hashlib.sha256(z.read(i['path'])).hexdigest() != i['sha256'] for i in members):
            raise RuntimeError('Archive verification failed.')
    digest = sha(ARCHIVE)
    ARCHIVE.with_suffix('.zip.sha256').write_text(digest + '  ' + ARCHIVE.name + '\n')
    record = {'status': 'local-verified', 'archive': ARCHIVE.relative_to(ROOT).as_posix(), 'sha256': digest, 'bytes': ARCHIVE.stat().st_size, 'files': len(members), 'stateArchiveSha256': state_hash, 'roots': ROOTS, 'allMemberCRCsAndSHAsPass': True, 'privateSecretCheckPass': True, 'scope': ('New silent C1/B1 teaching drafts, additive C1 layout with earlier speech, review desk, native stills and a short silent C1 motion checkpoint. Sources use Git. New narration and release pending.' if args.pack == 'starters' else 'Three current silent design pages, mutable review desk, native stills, fonts and three botanical assets. Sources use Git. No voiced or release approval.')}
    RECORD.write_text(json.dumps(record, indent=2) + '\n', encoding='utf-8')
    print(json.dumps({k: record[k] for k in ['status', 'files', 'bytes', 'sha256']}))

def upload():
    record = json.loads(RECORD.read_text())
    if record['status'] != 'local-verified' or sha(ARCHIVE) != record['sha256']:
        raise RuntimeError('Missing verified exclusive local archive.')
    checksum = ARCHIVE.with_suffix('.zip.sha256')
    api = ['gh', 'api', f'repos/{REPO}/releases/tags/{TAG}']
    before = json.loads(subprocess.check_output(api, text=True))
    if any(a['name'] in {ARCHIVE.name, checksum.name} for a in before['assets']):
        raise RuntimeError('Existing remote assets preserved; no clobber.')
    subprocess.run(['gh', 'release', 'upload', TAG, str(ARCHIVE), str(checksum), '--repo', REPO], check=True)
    after = json.loads(subprocess.check_output(api, text=True))
    selected = []
    for p in [ARCHIVE, checksum]:
        matches = [a for a in after['assets'] if a['name'] == p.name]
        if len(matches) != 1:
            raise RuntimeError('Remote member missing or duplicate.')
        a = matches[0]
        if a['size'] != p.stat().st_size or a['state'] != 'uploaded' or a.get('digest') != 'sha256:' + sha(p):
            raise RuntimeError('Remote identity does not match local archive.')
        selected.append({k: a[k] for k in ['id', 'name', 'size', 'digest', 'browser_download_url']})
    record.update(status='published-verified', repository=REPO, tag=TAG, assets=selected, uploadedStateSizeAndDigestsMatch=True)
    RECORD.write_text(json.dumps(record, indent=2) + '\n', encoding='utf-8')
    transfer_path = ROOT / 'docs/production/computer-transfer-2026-10-09.json'
    transfer = json.loads(transfer_path.read_text())
    if any(c['name'] == ARCHIVE.name for c in transfer['continuations']):
        raise RuntimeError('Existing continuation record preserved.')
    transfer['continuations'].append({'name': ARCHIVE.name, 'bytes': record['bytes'], 'sha256': record['sha256'], 'files': record['files'], 'status': 'published-verified', 'scope': record['scope'], 'verification': 'All ZIP member CRCs and SHAs pass; remote uploaded sizes and SHA256 digests match. Compatible with existing transfer manifest; separate restoration test not run.', 'evidencePath': RECORD.relative_to(ROOT).as_posix()})
    transfer_path.write_text(json.dumps(transfer, indent=2) + '\n', encoding='utf-8')
    print(json.dumps({'status': record['status'], 'archive': ARCHIVE.name, 'bytes': record['bytes']}))

parser = argparse.ArgumentParser()
parser.add_argument('command', choices=['freeze', 'upload'])
parser.add_argument('--pack', choices=['design', 'starters'], default='design')
parser.add_argument('--starter-revision', default='v6')
args = parser.parse_args()
if args.pack == 'starters':
    if not re.fullmatch(r'v\d+', args.starter_revision):
        raise RuntimeError('Use a numbered starter revision.')
    RECORD = ROOT / f'docs/production/module5-starters-2026-10-10/learning-reset-media-backup-{args.starter_revision}.json'
    ARCHIVE = ROOT / f'out/archives/module5-starter-learning-reset-media-2026-10-11-{args.starter_revision}.zip'
    ROOTS = [f'out/prototypes/c1-bottle-teaching-reset-2026-10-11-{args.starter_revision}',
             'out/prototypes/b1-continuity-teaching-reset-2026-10-11-v2',
             'out/prototypes/module5-reading-load-review-2026-10-11-v3',
             'out/prototypes/module5-morning-review-2026-10-10']
    ASSETS = ['strawberry-runner-botanical-v1.png']
{'freeze': freeze, 'upload': upload}[args.command]()
