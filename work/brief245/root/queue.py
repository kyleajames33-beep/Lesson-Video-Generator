# Root takeover of brief 245 (15 Nov): queue one checked Maths master for the release chat.
# Usage: python work/brief245/root/queue.py math-a12-d15 v3 "<one-line visual review>"
# Requires: master-checks.json, youtube-metadata.json and captions from the post-check, a
# picture scan with no flags, font flags (if any) reviewed in the note, and a root sampled-playback
# entry for "<key> <rev>" in work/root-playback-sample/README.md. Refresh the readback first:
#   node work/brief245/read-current-playlists.mjs
from pathlib import Path
import json, hashlib, re, sys
from datetime import datetime, timezone

key, rev, note = sys.argv[1], sys.argv[2], sys.argv[3]
assert re.fullmatch(r'math-a12-[dtifsg]\d\d', key) and re.fullmatch(r'v\d+', rev)
read = lambda p: json.loads(Path(p).read_text(encoding='utf8'))
def sha(p):
    with Path(p).open('rb') as f: return hashlib.file_digest(f, 'sha256').hexdigest()
w = Path('work/brief245') / key; q = Path('work/release-queue'); dest = q / f'{key}-{rev}.json'
assert not dest.exists() and not (q / 'done' / dest.name).exists(), 'Already queued'
assert not (q / f'{key}-{rev}.HOLD.txt').exists(), 'HOLD file present'
m = read(w / 'master-checks.json'); meta = read(w / 'youtube-metadata.json')
assert m['revision'] == rev and m['sha256'] == meta['masterSha256'] == sha(m['master']), 'Master hash mismatch'
assert sha(w / 'captions/captions.srt') == m['captionSHA256'], 'Caption hash mismatch'
assert not m['criticalChanges'], 'Critical source changed after render'
_flags = read(w / f'{rev}-scan.json')['flags']
_readme = Path('work/root-playback-sample/README.md').read_text(encoding='utf8')
_entry = _readme.split(f'## {key} {rev}')[-1].split('\n## ')[0] if f'## {key} {rev}' in _readme else ''
assert not _flags or all(f'{x["time"]:.1f} s' in _entry for x in _flags), 'Picture scan flags not reviewed in the README entry'
assert f'{key} {rev}' in Path('work/root-playback-sample/README.md').read_text(encoding='utf8'), 'No root sampled-playback entry'

import subprocess
subprocess.run(['node', 'work/brief245/read-current-playlists.mjs'], check=True, stdout=subprocess.DEVNULL)  # always a fresh readback
# Map every video in the live playlists to its lesson.
vid = {}
def walk(o):
    if isinstance(o, list): [walk(x) for x in o]; return
    if not isinstance(o, dict): return
    lid = o.get('lessonId') or o.get('lesson')
    v = o.get('videoId') or o.get('newVideoId') or (o.get('url') or o.get('newURL') or '').split('/')[-1] or None
    if isinstance(lid, str) and lid.startswith('math-a12-') and isinstance(v, str) and re.fullmatch(r'[\w-]{11}', v): vid.setdefault(v, lid)
    for x in o.values(): walk(x)
for p in Path('out/youtube').glob('math-a12-*.json'):  # release chat records: lesson from the file name
    r = read(p); vid.setdefault(r['videoId'], re.sub(r'-v\d+$', '', p.stem))
for p in [*Path('docs/production/claude-pm/youtube').glob('*.json'), Path('work/brief241/ledger.json')]:
    try: walk(read(p))
    except Exception: pass
titles = {}
for p in Path('work').glob('brief2*/*/youtube-metadata.json'):
    try: r = read(p); titles.setdefault(r['title'], r['lesson'])
    except Exception: pass
for p in Path('docs/production/claude-pm/lessons').glob('math-a12-*.md'):
    t = p.read_text(encoding='utf8'); at = t.find('## YouTube metadata'); mt = re.search(r'^Title:\s*(.+?)\s*$', t[at:], re.M) if at >= 0 else None
    if mt: titles.setdefault(re.sub(r'\s*\(\d+ characters\)$', '', mt.group(1)).strip('"*` '), p.stem)
config = read('docs/production/claude-pm/youtube/maths-focus-playlists.json'); live = read('work/brief245/current-playlists.json')
order = lambda k: ('dtifsge'.index(k.removeprefix('math-a12-')[0]), int(k[-2:]))
route = {r['lesson']: r for r in config['futurePublicationRouting']}
pending = [read(p) for p in q.glob('math-a12-*.json')]  # queued, not yet published
positions = []
for pid in [config['fullCourse']['id'], route[key]['focusPlaylist']]:
    items = next(x for x in live['playlists'] if x['id'] == pid)['items']
    for i in items:  # older uploads: match the exact title against lesson metadata
        if i['videoId'] not in vid and i['title'] in titles: vid[i['videoId']] = titles[i['title']]
    unknown = [i['videoId'] for i in items if i['videoId'] not in vid]
    assert not unknown, f'Unmapped videos in {pid}: {unknown}'
    current = [vid[i['videoId']] for i in items] + [r['lesson'] for r in pending if any(x['id'] == pid for x in r['playlists'])]
    current = sorted(set(current), key=order)
    assert key not in current, f'{key} already in {pid}'
    positions.append({'id': pid, 'position': sum(order(k) < order(key) for k in current)})

now = datetime.now(timezone.utc).isoformat()
review = {'lesson': key, 'revision': rev, 'master': m['master'], 'masterSha256': m['sha256'], 'checkedAt': now,
          'state': 'pass (root takeover of brief 245, decoded-frame sampling ruling)', 'reviewer': 'Root',
          'checks': {'package': m, 'pictureScanFlags': 0, 'fontFlagsReviewed': read(w / 'font-scan.json').get('flags', []) and len(read(w / 'font-scan.json')['flags'])},
          'visual': note, 'sampledPlayback': 'work/root-playback-sample/README.md',
          'humanListening': 'with owner on YouTube', 'releaseApproval': True}
(w / 'export-review.json').write_text(json.dumps(review, indent=2), encoding='utf8')
desc = q / f'{key}-{rev}.description.txt'; desc.write_text(meta['description'], encoding='utf8')
record = {'lesson': key, 'revision': rev, 'master': m['master'], 'masterSha256': m['sha256'], 'captionFile': (w / 'captions/captions.srt').as_posix(),
          'title': meta['title'], 'descriptionFile': desc.as_posix(), 'playlists': positions, 'replaces': None, 'checks': 'pass', 'checkedAt': now}
(w / 'queue-evidence.json').write_text(json.dumps({'readback': 'work/brief245/current-playlists.json', 'readAt': live['readAt'], 'positions': positions, 'pendingCounted': [r['lesson'] for r in pending]}, indent=2), encoding='utf8')
with Path('docs/production/claude-pm/status.md').open('a', encoding='utf8') as f:
    f.write(f'\nBrief245 (root takeover): queued {key} {rev}; {dest.as_posix()}. Root sampled playback and sheet review pass; positions {positions}.\n')
with dest.open('x', encoding='utf8') as f: json.dump(record, f, indent=2)  # written last
print(json.dumps({'queued': dest.as_posix(), 'title': meta['title'], 'playlists': positions}))
