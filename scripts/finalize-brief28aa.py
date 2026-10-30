"""Record the observed Brief 28aa Studio and playlist results."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PM = ROOT / 'docs/production/claude-pm'

def read(path):
    return json.loads(path.read_text(encoding='utf-8'))

def write(path, data):
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

preflight_path = PM / 'youtube/brief28aa-preflight.json'
data = read(preflight_path)
videos = data['videos']
observed = [1687379134, 2144884961, 729043628, 3484014532, 3309559376,
            3438005231, 3028840910, 1679586264, 2791940854]
assert len(videos) == 9 and all(v['status'] == 'published' for v in videos)
audits = []
for video, actual in zip(videos, observed):
    fingerprint = 2166136261
    for char in re.sub(r'\s+', ' ', video['description']).strip():
        fingerprint = ((fingerprint ^ ord(char)) * 16777619) & 0xffffffff
    assert fingerprint == actual, video['lessonId']
    video.update(visibility='Public', madeForKids=False, category='Education',
                 language='English (Australia)', alteredContentDisclosure=True,
                 paidPromotion=False,
                 readback='Published dialog confirmed; saved title, description, Public, audience, AI disclosure, no paid promotion and language checked. Education checked during upload. Module 7 playlist persisted after reload.')
    audits.append(dict(lessonId=video['lessonId'], videoId=video['videoId'],
        url=video['url'], publishedDialogConfirmed=True, public=True,
        titleMatch=True, descriptionMatch=True,
        descriptionComparison='FNV-1a of saved Studio UI text, whitespace collapsed and trimmed',
        observedDescriptionFingerprint=actual, notMadeForKids=True,
        aiDisclosure=True, noPaidPromotion=True, language='English (Australia)',
        category='Education', categoryEvidence='Checked during upload',
        hdComplete=True, checks='Copyright and Community Guidelines: no issues found',
        captions='Listed cumulative timed SRT imported; Done and English (Australia) by you confirmed',
        thumbnail='Automatic frame 2 visually inspected and retained',
        endScreen='Skipped because final key notes need the space'))

orders = {
    'PLZn7qgJ_Eg2E': ['y-galt8f4ow', 'ZWPnKycf4bg', 'G3nQPPbvO7I', 'hJ3m9qswFqI',
        '3sb8EukMr5g', 'S4bQV1cOzS4', '8qKRorP_RRk', 'M0yxewjPCUE',
        '1qF_486TVQE', '-XVSCs8nHnI', '7dqWjzokvJU', 'Od9P6Tuv800',
        'NT6MvX6VT6g', 'PPIwkdv8dC8', 'GJVFRMiNDOk', 'j2GPr4yGQHc',
        'hk9wDdhbTLA', '_y2Ow9e-0sI', 'vxG4x229SeE', 'Cms4sZ-Sly0',
        'aGWfHHCxzrU', 'Mv1CG4fzbaM'],
    'PLF46LOS0IuCo': ['SfHlZFpl5c4', 'lh7xCoEFpkI', 'UbgSznvRHtk', 'PzrqjRdWUjY',
        'sGl2I3C9TyY', 'eOZU7je8BFM', 'J5T5I_p_WQI', 'iNiVBNVSRvs',
        '97ipuiUA2hw', 'fGIkZ3nwXZw', 'IcOyh0y7EjI', '2Xrb7pKgo6w',
        'nwBfq4XGI0w', 'Qg_caOin2x0', '9FkW6EQuzrA', 'HEm9ud4b7iI', 'SYgIWk0__bk'],
}
uploads_path = PM / 'youtube/wave5-uploads.json'
uploads = read(uploads_path)
by_id = {v['videoId']: v['lessonId'] for v in uploads['videos'] if v.get('videoId')}
playlists = [dict(playlistId=pid, url='https://www.youtube.com/playlist?list=' + pid,
    visibility='Public', sorting='Manual', routeOrder='pass', persistedAfterReload=True,
    evidence='Native Chrome accessibility link rows read back after reload',
    rows=[dict(position=i, videoId=vid, lessonId=by_id.get(vid))
          for i, vid in enumerate(ids, 1)]) for pid, ids in orders.items()]
evidence = 'docs/production/claude-pm/youtube/brief28aa-final-readback.json'
write(ROOT / evidence, dict(brief='28aa', date='2026-10-29', status='complete',
    videos=audits, playlistReadbacks=playlists, notes=[
        'All nine MP4 hashes match the brief; cumulative caption inputs and official syllabus quotes passed preflight.',
        'Biology P01 moved from upload chronology to route position 4, after B03 and before P02.',
        'Existing gaps for future videos remain. Playlist order does not claim those videos are available.',
        'No daily upload limit, duplicate uploads, paid narration, rendering, source edits, commit or push.']))
data.update(status='complete', finalReadback=evidence)
write(preflight_path, data)
for video in videos:
    next(v for v in uploads['videos'] if v['lessonId'] == video['lessonId']).update(video)
uploads.update(status='Briefs 28x, 28y, 28z and 28aa complete', brief28aaFinalReadback=evidence)
write(uploads_path, uploads)

board_path = ROOT / 'docs/production/parallel-production-board-2026-10-10.json'
board = read(board_path)
board['brief28aa'] = dict(status='complete', owner='/root', date='2026-10-29',
    delegatedPreflightOwner='/root/preflight',
    summary='Nine approved Module 7 videos public, cumulative timed captions saved, metadata checked. Chemistry 22 and Biology 17 entries in persisted route order.',
    evidence=[evidence, 'docs/production/claude-pm/youtube/brief28aa-preflight.json',
              'docs/production/claude-pm/youtube/wave5-uploads.json'], unresolvedGates=[])
write(board_path, board)

status_path = PM / 'status.md'
status = status_path.read_text(encoding='utf-8')
heading = '### Brief 28aa complete: nine public Module 7 uploads (29 October 2026)'
assert heading not in status
links = '\n'.join('- ' + v['lessonId'] + ': ' + v['url'] for v in videos)
addition = '\n\n' + heading + '\n\nAll nine approved MP4s were uploaded once each in the brief table order and are public. Every MP4 SHA-256 matched. Only the listed cumulative timed SRT files were imported. HD processing and copyright/Community Guidelines checks completed with no issues. Saved titles and descriptions match the prepared metadata after whitespace normalization, including exact syllabus quotations, live .sa links and cumulative chapters. Saved audience, AI disclosure, no paid promotion and English (Australia) settings were checked; Education was checked during upload. Automatic thumbnail frame 2 was visually inspected for every video. End screens were skipped for the final key notes.\n\n' + links + '\n\nBoth Public Manual playlists were read back after reload: Chemistry M7 (22 entries) https://www.youtube.com/playlist?list=PLZn7qgJ_Eg2E and Biology M7 (17 entries) https://www.youtube.com/playlist?list=PLF46LOS0IuCo. Chemistry C09 to C14 follow C08b. Biology P01 is fourth, after B03 and before P02; B13 and G01 follow B12. Future lesson gaps remain.\n\nEvidence: `youtube/brief28aa-preflight.json`, `youtube/brief28aa-final-readback.json`, `youtube/wave5-uploads.json` and the production board. No daily upload limit or duplicates. No paid narration, rendering, lesson source edits, commit or push. Question for Claude: none for this upload hand-in.\n'
assert '\u2014' not in addition
status_path.write_text(status + addition, encoding='utf-8')
print('Brief 28aa complete: nine public uploads and two persisted playlist readbacks.')
