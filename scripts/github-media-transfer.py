"""Split or retrieve the hash-checked media snapshot hosted on GitHub Releases."""
import argparse
import hashlib
import json
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]
RECORD = ROOT / 'docs/production/computer-transfer-2026-10-09.json'
PART_BYTES = 1536 * 1024 * 1024
REPO = 'kyleajames33-beep/Lesson-Video-Generator'
TAG = 'workspace-media-2026-10-09'


def sha256(file):
    h = hashlib.sha256()
    with file.open('rb') as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b''):
            h.update(block)
    return h.hexdigest()


def split(record):
    archive = ROOT / record['archive']
    if archive.stat().st_size != record['bytes'] or sha256(archive) != record['sha256']:
        raise RuntimeError('Original media archive hash differs from the transfer record.')
    parts = []
    with archive.open('rb') as source:
        for index in range((record['bytes'] + PART_BYTES - 1) // PART_BYTES):
            file = archive.with_name(archive.name + f'.part{index + 1:02}')
            count = min(PART_BYTES, record['bytes'] - index * PART_BYTES)
            h = hashlib.sha256()
            if file.exists():
                # Validate a previous split without replacing it.
                with file.open('rb') as existing:
                    remaining = count
                    while remaining:
                        block = source.read(min(1024 * 1024, remaining))
                        if existing.read(len(block)) != block:
                            raise RuntimeError('Existing different part preserved: ' + str(file))
                        h.update(block)
                        remaining -= len(block)
                    if existing.read(1):
                        raise RuntimeError('Existing part is too long: ' + str(file))
            else:
                with file.open('xb') as target:
                    remaining = count
                    while remaining:
                        block = source.read(min(1024 * 1024, remaining))
                        if not block:
                            raise RuntimeError('Unexpected end of archive.')
                        target.write(block)
                        h.update(block)
                        remaining -= len(block)
            parts.append({'name': file.name, 'bytes': count, 'sha256': h.hexdigest()})
            print('Verified part: ' + file.name, flush=True)
    record['githubRelease'] = {
        'repository': REPO, 'tag': TAG,
        'url': f'https://github.com/{REPO}/releases/tag/{TAG}',
        'status': 'prepared-upload-pending', 'parts': parts,
    }
    RECORD.write_text(json.dumps(record, indent=2) + '\n', encoding='utf-8')


def join(record, folder):
    archive = folder / Path(record['archive']).name
    if archive.exists():
        if sha256(archive) != record['sha256']:
            raise RuntimeError('Existing different archive preserved: ' + str(archive))
        print('Complete archive already present and verified: ' + str(archive))
        return archive
    parts = record['githubRelease']['parts']
    for part in parts:
        file = folder / part['name']
        if file.stat().st_size != part['bytes'] or sha256(file) != part['sha256']:
            raise RuntimeError('Part hash or size mismatch: ' + str(file))
    h = hashlib.sha256()
    with archive.open('xb') as target:
        for part in parts:
            with (folder / part['name']).open('rb') as source:
                for block in iter(lambda: source.read(1024 * 1024), b''):
                    target.write(block)
                    h.update(block)
    if archive.stat().st_size != record['bytes'] or h.hexdigest() != record['sha256']:
        raise RuntimeError('Joined archive hash or size mismatch.')
    print('Joined archive verified: ' + str(archive))
    return archive


parser = argparse.ArgumentParser()
parser.add_argument('command', choices=['split', 'join', 'download', 'download-continuation'])
parser.add_argument('--directory', default='out/archives')
args = parser.parse_args()
record = json.loads(RECORD.read_text(encoding='utf-8'))
folder = (ROOT / args.directory).resolve()
folder.mkdir(parents=True, exist_ok=True)
if args.command == 'download-continuation':
    continuation = record['continuations'][-1]
    file = folder / continuation['name']
    if not file.exists():
        subprocess.run(['gh', 'release', 'download', TAG, '--repo', REPO,
                        '--dir', str(folder), '--pattern', continuation['name']], check=True)
    if file.stat().st_size != continuation['bytes'] or sha256(file) != continuation['sha256']:
        raise RuntimeError('Continuation archive hash or size mismatch.')
    print('Continuation verified: ' + str(file))
elif args.command == 'split':
    split(record)
else:
    if args.command == 'download':
        for part in record['githubRelease']['parts']:
            file = folder / part['name']
            if file.exists():
                if file.stat().st_size != part['bytes'] or sha256(file) != part['sha256']:
                    raise RuntimeError('Existing different download preserved: ' + str(file))
                continue
            subprocess.run(['gh', 'release', 'download', TAG, '--repo', REPO,
                            '--dir', str(folder), '--pattern', part['name']], check=True)
    join(record, folder)
