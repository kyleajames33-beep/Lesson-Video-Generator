"""Build recording lesson.json files from Claude's lesson designs (run from repo root).

Scene ids come from the design headings ("### 6b. worked-more ..." -> "worked-more").
Quoted lines ("> ...") are the narration; **bold** cue markers are stripped.
"""
import io, re, json, os, sys

HOLD_FRAMES = 750  # 25 second answer-free thinking hold after an attempt
NOTES_LINE = 'Here are the key notes. Pause the video if you need more time to copy them.'

LESSONS = {
    'c1': ('docs/production/claude-pm/lessons/chem-m5-c01.md',
           {'title': 'Static and dynamic equilibrium', 'subtitle': 'Has everything stopped?', 'subject': 'Chemistry', 'yearLevel': 12, 'module': 5, 'lesson': 1,
            'lessonIntent': 'Classify a system as static equilibrium, dynamic equilibrium or neither, and explain why dynamic equilibrium needs a closed system.'}),
    'b1': ('docs/production/claude-pm/lessons/bio-m5-b01.md',
           {'title': 'Reproduction and continuity of a species', 'subtitle': 'Why is one shared set of DNA risky?', 'subject': 'Biology', 'yearLevel': 12, 'module': 5, 'lesson': 1,
            'lessonIntent': 'Explain how sexual and asexual reproduction each support the continuity of a species, and judge which suits stable or changing conditions.'}),
}


def build(key):
    design, meta = LESSONS[key]
    s = io.open(design, encoding='utf8').read()
    parts = re.split(r'^### \d+b?\. ', s, flags=re.M)[1:]
    scenes = []
    for p in parts:
        head = p.split('\n', 1)[0].strip()
        sid = head.split(' ')[0]
        quote = ' '.join(l[2:].strip() for l in p.split('\n') if l.startswith('> '))
        quote = re.sub(r'\*\*', '', quote).strip()
        if sid == 'key':
            sid, quote = 'key-notes', NOTES_LINE
        if sid == 'memory':
            sid = 'memory'
        sc = {'id': sid, 'type': 'concept', 'durationInFrames': 300, 'voiceover': {'text': quote}}
        if sid == 'attempt':
            sc['responseHold'] = {'startFrame': 0, 'endFrame': HOLD_FRAMES}
        scenes.append(sc)
    lesson = {**meta, 'fps': 30, 'width': 1920, 'height': 1080, 'introDurationInFrames': 0, 'productionRole': 'production-draft', 'scenes': scenes}
    out = f'docs/production/claude-pm/lessons/{key}/lesson.json'
    os.makedirs(os.path.dirname(out), exist_ok=True)
    io.open(out, 'w', encoding='utf8').write(json.dumps(lesson, ensure_ascii=False, indent=2) + '\n')
    words = sum(len(x['voiceover']['text'].split()) for x in scenes)
    print(key, [x['id'] for x in scenes], words, 'words')


for k in (sys.argv[1:] or LESSONS):
    build(k)
