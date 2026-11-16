# Root (15 Nov): queue a checked non-Maths master for the release chat.
# Usage: python work/brief245/root/queue-any.py <lesson-id> <rev> <work-dir> <playlist-id> <route,ids,in,order> "<review note>" [old-public-video-id]
# Positions: count of lessons in the live playlist (plus queued, unpublished entries) that come earlier in the route.
from pathlib import Path
import json, hashlib, re, sys, subprocess
from datetime import datetime, timezone

key, rev, wdir, pid, route, note = sys.argv[1:7]
route = route.split(',')
assert key in route
read = lambda p: json.loads(Path(p).read_text(encoding='utf8'))
def sha(p):
    with Path(p).open('rb') as f: return hashlib.file_digest(f, 'sha256').hexdigest()
w = Path(wdir); q = Path('work/release-queue'); dest = q / f'{key}-{rev}.json'
assert not dest.exists() and not (q / 'done' / dest.name).exists(), 'Already queued'
assert not (q / f'{key}-{rev}.HOLD.txt').exists(), 'HOLD file present'
m = read(w / 'master-checks.json'); meta = read(w / 'publication-metadata.json')
master = Path(m['master'].replace('\\', '/'))
assert master.name == f'Explainer-{key}-{rev}.mp4', master
assert sha(master) == m['sha256'], 'Master hash mismatch'
cap = w / 'captions-v1/captions.srt'
assert sha(cap) == m['captions']['sha256'], 'Caption hash mismatch'
assert not m.get('sourceChangesSinceFreeze'), 'Source changed since freeze'
title, desc = meta['title'], meta['description']
assert len(title) <= 100 and len(desc) <= 5000 and '—' not in title + desc and '�' not in title + desc
assert f'{key} {rev}' in Path('work/root-playback-sample/README.md').read_text(encoding='utf8'), 'No root sampled-playback entry'

# Live playlist readback (read-only API GET).
js = r"""
import fs from 'node:fs';
const raw=JSON.parse(fs.readFileSync('secrets/youtube-client.json','utf8')),client=raw.installed??raw.web;
const {refresh_token}=JSON.parse(fs.readFileSync('secrets/youtube-token.json','utf8'));
const tr=await fetch(client.token_uri??'https://oauth2.googleapis.com/token',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({client_id:client.client_id,client_secret:client.client_secret??'',refresh_token,grant_type:'refresh_token'})});
const t=await tr.json();if(!tr.ok)throw Error('token '+tr.status);
let next,items=[];do{const u=new URL('https://www.googleapis.com/youtube/v3/playlistItems');u.search=new URLSearchParams({part:'snippet,contentDetails',playlistId:process.argv[2],maxResults:'50',...(next?{pageToken:next}:{})});const r=await fetch(u,{headers:{Authorization:'Bearer '+t.access_token}});const j=await r.json();if(!r.ok)throw Error('read '+r.status);items.push(...j.items);next=j.nextPageToken;}while(next);
console.log(JSON.stringify(items.map(x=>({position:x.snippet.position,videoId:x.contentDetails.videoId,title:x.snippet.title}))));
"""
Path('work/brief245/root/_read-playlist.mjs').write_text(js, encoding='utf8')
live = json.loads(subprocess.run(['node', 'work/brief245/root/_read-playlist.mjs', pid], check=True, capture_output=True, text=True).stdout.strip().splitlines()[-1])

# Map live videos to lessons: upload records, YouTube ledgers, then exact titles from prepared metadata.
vid = {}
for p in Path('out/youtube').glob('*.json'):
    try:
        r = read(p)
        if 'videoId' in r: vid.setdefault(r['videoId'], re.sub(r'-v\d+$', '', p.stem))
    except Exception: pass
def walk(o):
    if isinstance(o, list): [walk(x) for x in o]; return
    if not isinstance(o, dict): return
    lid = o.get('lessonId') or o.get('lesson'); v = o.get('videoId')
    if isinstance(lid, str) and isinstance(v, str): vid.setdefault(v, lid)
    for x in o.values(): walk(x)
for p in Path('docs/production/claude-pm/youtube').glob('*.json'):
    try: walk(read(p))
    except Exception: pass
titles = {}
for p in Path('work').glob('brief*/*/publication-metadata.json'):
    try: r = read(p); titles.setdefault(r['title'], r['lessonId'])
    except Exception: pass
for i in live:
    if i['videoId'] not in vid and i['title'] in titles: vid[i['videoId']] = titles[i['title']]
unknown = [i['videoId'] for i in live if i['videoId'] not in vid]
assert not unknown, f'Unmapped videos in {pid}: {unknown}'
current = [vid[i['videoId']] for i in live]
pending = [read(p) for p in q.glob('*.json')]
current += [r['lesson'] for r in pending if any(x['id'] == pid for x in r['playlists'])]
replacing = len(sys.argv) > 7
current = list(dict.fromkeys(current))  # a live lesson with a queued replacement counts once
if replacing: current = [k for k in current if k != key]  # the old public copy is retired by the release chat
assert key not in current, f'{key} already in playlist'
rank = {k: n for n, k in enumerate(route)}
off = [k for k in current if k not in rank]
assert not off, f'Playlist lessons not in route: {off}'
position = sum(rank[k] < rank[key] for k in current)
positions = [{'id': pid, 'position': position}]

now = datetime.now(timezone.utc).isoformat()
(w / 'root-export-review.json').write_text(json.dumps({'lesson': key, 'revision': rev, 'masterSha256': m['sha256'], 'checkedAt': now,
    'state': 'pass (root decoded-frame sampling ruling)', 'visual': note, 'sampledPlayback': 'work/root-playback-sample/README.md',
    'humanListening': 'with owner on YouTube', 'releaseApproval': True}, indent=2), encoding='utf8')
desc_file = q / f'{key}-{rev}.description.txt'; desc_file.write_text(desc, encoding='utf8')
record = {'lesson': key, 'revision': rev, 'master': master.as_posix(), 'masterSha256': m['sha256'], 'captionFile': cap.as_posix(),
          'title': title, 'descriptionFile': desc_file.as_posix(), 'playlists': positions, 'replaces': (sys.argv[7] if len(sys.argv) > 7 else None), 'checks': 'pass', 'checkedAt': now}
with Path('docs/production/claude-pm/status.md').open('a', encoding='utf8') as f:
    f.write(f'\nRoot (15 Nov): queued {key} {rev}; {dest.as_posix()}. Root sampled playback pass; playlist {pid} position {position} (route order).\n')
with dest.open('x', encoding='utf8') as f: json.dump(record, f, indent=2)
print(json.dumps({'queued': dest.as_posix(), 'title': title, 'playlist': positions, 'liveBefore': current}))
