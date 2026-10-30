"""Record Brief 28aa only after observing each Studio result."""
import json
import sys
from pathlib import Path

pm = Path(__file__).resolve().parents[1] / 'docs/production/claude-pm'
lesson_id, video_id, status = sys.argv[1:4]
path = pm / 'youtube/brief28aa-preflight.json'
data = json.loads(path.read_text(encoding='utf-8'))
video = next(v for v in data['videos'] if v['lessonId'] == lesson_id)
assert not video.get('videoId') or video['videoId'] == video_id
video.update(videoId=video_id, url='https://youtu.be/' + video_id, status=status)
if status == 'published':
    video.update(visibility='Public', madeForKids=False, category='Education',
                 language='English (Australia)', alteredContentDisclosure=True,
                 captionStatus='Timed cumulative English (Australia) SRT imported and Done confirmed',
                 thumbnail='Auto-generated frame 2 visually inspected',
                 checks='Copyright and Community Guidelines no issues; HD complete',
                 endScreen='Skipped for final key notes',
                 readback='Studio Video published dialog confirmed; saved settings and playlist readback pending')
data['status'] = 'in-progress'
path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
path = pm / 'youtube/wave5-uploads.json'
uploads = json.loads(path.read_text(encoding='utf-8'))
record = next((v for v in uploads['videos'] if v['lessonId'] == lesson_id), None)
if record is None:
    uploads['videos'].append(dict(video, brief='28aa'))
else:
    record.update(video)
uploads['status'] = 'Brief 28aa in progress'
path.write_text(json.dumps(uploads, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(lesson_id, video_id, status)
