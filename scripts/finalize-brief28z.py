"""Record the 29 October live Studio and playlist readbacks."""
import json
import re
from functools import reduce
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PM = ROOT / 'docs/production/claude-pm'

def read(path):
    return json.loads(path.read_text(encoding='utf-8'))

def write(path, value):
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

def fnv(value):
    return reduce(lambda h, c: ((h ^ ord(c)) * 16777619) & 0xffffffff,
                  re.sub(r'\n{3,}', '\n\n', value).strip(), 2166136261)

preflight_path = PM / 'youtube/brief28z-preflight.json'
preflight = read(preflight_path)
videos = preflight['videos']
# Actual normalized description fingerprints returned by the saved Studio UI.
observed = [2667501010, 2211966737, 2633714719, 550486650, 1563931880,
            3969029366, 619343896, 170906494, 1208283293, 1093874227,
            4270616375, 1851108938, 1694714694, 411165540, 3479740422]
assert len(videos) == len(observed) == 15
assert len({v['videoId'] for v in videos}) == 15
assert all(v['status'] == 'published' for v in videos)

audits = []
for video, actual in zip(videos, observed):
    assert fnv(video['description']) == actual, video['lessonId']
    audit = dict(lessonId=video['lessonId'], videoId=video['videoId'],
                 titleMatch=True, descriptionMatch=True,
                 descriptionComparison='FNV-1a of saved UI text; collapse 3+ newlines to two and trim',
                 observedDescriptionFingerprint=actual, public=True, hdComplete=True,
                 notMadeForKids=True, aiDisclosure=True, noPaidPromotion=True,
                 language='English (Australia)', category='Education',
                 captions='Timed cumulative SRT imported and Done confirmed; English (Australia) by you',
                 checks='Copyright and Community Guidelines no issues found')
    audits.append(audit)
    video['readback'] = 'pass: saved title, description, Public, HD, audience, AI, paid promotion, language and category checked on 2026-10-29'
    video['thumbnail'] = ('Auto-generated frame 1, target comparison, visually inspected; frame 2 was an empty table'
                          if video['lessonId'] == 'skills-s07' else 'Auto-generated frame 2 visually inspected')

orders = {
    'PLZn7qgJ_Eg2E': ['y-galt8f4ow', 'ZWPnKycf4bg', 'G3nQPPbvO7I', 'hJ3m9qswFqI',
                     '3sb8EukMr5g', 'S4bQV1cOzS4', '8qKRorP_RRk', 'M0yxewjPCUE',
                     '1qF_486TVQE', '-XVSCs8nHnI', '7dqWjzokvJU', 'Od9P6Tuv800',
                     'NT6MvX6VT6g', 'PPIwkdv8dC8', 'GJVFRMiNDOk', 'j2GPr4yGQHc'],
    'PLF46LOS0IuCo': ['SfHlZFpl5c4', 'lh7xCoEFpkI', 'UbgSznvRHtk', 'sGl2I3C9TyY',
                     'eOZU7je8BFM', 'J5T5I_p_WQI', 'iNiVBNVSRvs', '97ipuiUA2hw',
                     'fGIkZ3nwXZw', 'IcOyh0y7EjI', '2Xrb7pKgo6w', 'nwBfq4XGI0w',
                     'Qg_caOin2x0', '9FkW6EQuzrA'],
    'PLD-Lwfjq3gW0': ['-ouJt6UBaBw', 'ENUgFBDb0pY', 'wYqgEi0J71g', 'dZQvSUxFY8A',
                     '4uehJ1QBp2o', 'NT6MvX6VT6g'],
}
uploads_path = PM / 'youtube/wave5-uploads.json'
uploads = read(uploads_path)
by_id = {v['videoId']: v['lessonId'] for v in uploads['videos'] if v.get('videoId')}
playlists = [dict(playlistId=pid, url='https://www.youtube.com/playlist?list=' + pid,
                  visibility='Public', sorting='Manual', routeOrder='pass',
                  evidence='Live YouTube DOM readback, Chemistry reloaded after final reorder',
                  rows=[dict(position=i, videoId=vid, lessonId=by_id.get(vid))
                        for i, vid in enumerate(ids, 1)]) for pid, ids in orders.items()]
evidence_path = PM / 'youtube/brief28z-final-readback.json'
write(evidence_path, dict(brief='28z', date='2026-10-29', status='complete',
                         verification='All fifteen published dialogs confirmed. All saved Studio pages checked; final S07 used accessibility because Playwright timed out.',
                         videos=audits, playlistReadbacks=playlists,
                         notes=['S07 follows S05 in skills; S06 is not yet available.',
                                'S07 also follows P03 and precedes G02 in Chemistry, per route review.',
                                'Removed internal practical-link author notes for P02/P03 and corrected G03 lesson11 to .sa before publication.',
                                'No duplicate uploads, paid narration, renders, source edits, commit or push.']))
preflight.update(status='complete', latestResume='2026-10-29: all fifteen public; saved metadata and three playlists read back',
                 finalReadback='docs/production/claude-pm/youtube/brief28z-final-readback.json')
write(preflight_path, preflight)
for video in videos:
    next(v for v in uploads['videos'] if v['lessonId'] == video['lessonId']).update(video)
uploads['status'] = 'Briefs 28x, 28y and 28z complete'
uploads['brief28zFinalReadback'] = preflight['finalReadback']
write(uploads_path, uploads)

board_path = ROOT / 'docs/production/parallel-production-board-2026-10-10.json'
board = read(board_path)
board['brief28z'].update(status='complete', latestResumeDate='2026-10-29',
    latestResumeResult='All fifteen videos public. Saved Studio settings and metadata passed; three Public Manual playlists read back.',
    summary='15 public uploads, timed cumulative captions, HD complete, no initial check issues. P02 in route order; S07 after P03 in Chemistry and after S05 in skills.',
    unresolvedGates=[])
if preflight['finalReadback'] not in board['brief28z']['evidence']:
    board['brief28z']['evidence'].append(preflight['finalReadback'])
write(board_path, board)

status_path = PM / 'status.md'
status = status_path.read_text(encoding='utf-8')
heading = '### Brief 28z complete: fifteen public uploads and final readbacks (29 October 2026)'
assert heading not in status, 'Hand-in already recorded'
links = '\n'.join('- ' + v['lessonId'] + ': ' + v['url'] for v in videos)
status += '\n\n' + heading + '\n\nAll fifteen approved MP4s are public. Resumed the existing C05 draft and uploaded the other fourteen once each. Every saved title and description matches the prepared record after blank-line normalization. All fifteen saved pages show Public, HD complete, not made for kids, AI disclosure, no paid promotion, English (Australia) and Education. Cumulative timed SRT captions were imported and saved; copyright and Community Guidelines checks found no issues. End screens were skipped for the final key notes.\n\n' + links + '\n\nPublic Manual playlists were read back: Chemistry M7 (16 entries) https://www.youtube.com/playlist?list=PLZn7qgJ_Eg2E, Biology M7 (14 entries) https://www.youtube.com/playlist?list=PLF46LOS0IuCo, and skills (6 entries) https://www.youtube.com/playlist?list=PLD-Lwfjq3gW0. Chemistry P02 follows C04b and precedes G01; S07 follows P03 and precedes G02. Skills S07 follows S05, leaving S06 for later. Chemistry persisted after reload.\n\nS07 uses automatic frame 1 (the three-target comparison), because frame 2 showed an empty table. Other uploads retain inspected frame 2. Removed internal practical-link author notes from P02/P03 and corrected G03 lesson11 to the live .sa URL before publication. Evidence: `youtube/brief28z-final-readback.json`, `youtube/brief28z-preflight.json`, `youtube/brief28z-input-check.json` and `youtube/wave5-uploads.json`. Earlier interruption entries above are historical. No daily upload limit, duplicates, paid narration, renders, source changes, commit or push. Briefs 109 to 111 remain delivered as recorded above, with Claude to resolve their review findings. Question for Claude: none for the upload hand-in.\n'
assert '\u2014' not in status[status.index(heading):]
status_path.write_text(status, encoding='utf-8')
print('Brief 28z complete: 15 public records and 3 playlist readbacks saved.')
