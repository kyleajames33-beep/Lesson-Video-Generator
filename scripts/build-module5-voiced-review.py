"""Rebuild Module 5 review from preserved audio and verified v2, v3 or v4.

Writes only out/prototypes/module5-voiced-review-2026-10-10/index.html.
Does not prepare, render or modify any media, captions or review records.
"""
from hashlib import sha256
from html import escape
from copy import deepcopy
import json
from pathlib import Path
import re
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
PROTOTYPES = ROOT / 'out/prototypes'
OUTPUT = PROTOTYPES / 'module5-voiced-review-2026-10-10/index.html'
SELECTION = ROOT / 'docs/production/module5-c2-b2-caption-safe-2026-10-10/review-selection.json'
V4_SELECTION = ROOT / 'docs/production/module5-c2-b2-caption-safe-v4-2026-10-10/review-selection.json'
PILOTS = {
    'c2': ('module5-voiced-pilots-2026-10-10/c2/transfer-pilot-01',
           'Short selected clip: equilibrium transfer response'),
    'b2': ('module5-voiced-pilots-2026-10-10/b2/worked-pilot-01',
           'Short selected clip: animal reproduction worked cases'),
}
SELECTED_PILOTS = {
    'v3': {'c2': 'module5-voiced-pilots-2026-10-10/c2/transfer-pilot-02',
           'b2': 'module5-voiced-pilots-2026-10-10/b2/worked-pilot-02'},
    'v4': {'c2': 'module5-voiced-pilots-2026-10-10/c2/transfer-pilot-03',
           'b2': 'module5-voiced-pilots-2026-10-10/b2/worked-pilot-03'},
}
B2_QUICK_PILOT = 'module5-voiced-pilots-2026-10-10/b2/quick-pilot-01'


def read(path):
    return json.loads(path.read_text(encoding='utf-8'))


def digest(path):
    return sha256(path.read_bytes()).hexdigest()


def e(value):
    return escape(str(value), quote=True)


def url(path):
    return '/' + quote(path.relative_to(PROTOTYPES).as_posix(), safe='/')


def duration(seconds):
    seconds = round(seconds)
    return f'{seconds // 60}:{seconds % 60:02d}'


def selection():
    selection_path = V4_SELECTION if V4_SELECTION.is_file() else SELECTION
    if not selection_path.is_file():
        return {}
    data = read(selection_path)
    if (set(data) != {'schemaVersion', 'lessons'} or
            type(data['schemaVersion']) is not int or data['schemaVersion'] != 1 or
            not isinstance(data['lessons'], dict) or set(data['lessons']) != {'c2', 'b2'}):
        raise ValueError('Unsupported Module 5 review selection schema')
    for key, row in data['lessons'].items():
        required = {'source', 'sourceSha256', 'pilotDirectory'}
        if not isinstance(row, dict) or not required <= set(row) or set(row) - required - {'quickPilotDirectory'}:
            raise ValueError(f'Unsupported selected lesson fields: {key}')
        version = selected_version(key, row)
        if (row['pilotDirectory'] != SELECTED_PILOTS[version][key] or
                not isinstance(row['sourceSha256'], str) or
                not re.fullmatch('[0-9a-f]{64}', row['sourceSha256'])):
            raise ValueError(f'Unsupported selected source or pilot path: {key}')
        if 'quickPilotDirectory' in row and (key != 'b2' or version != 'v4' or
                                            row['quickPilotDirectory'] != B2_QUICK_PILOT):
            raise ValueError(f'Unsupported selected quick-check pilot: {key}')
    return data['lessons']


def selected_version(key, row):
    for version in SELECTED_PILOTS:
        expected = f'out/prototypes/module5-{key}-voiced-2026-10-10/narrated-{version}.lesson.json'
        if row['source'] == expected:
            return version
    raise ValueError(f'Unsupported selected source: {key}')


def selected_lesson(key, v2, row):
    source = ROOT / row['source']
    if digest(source) != row['sourceSha256']:
        raise ValueError(f'Selected source changed: {source}')
    current = read(source)
    normalized = deepcopy(current)
    for scene in normalized['scenes']:
        presentation = scene.get('calculationPresentation')
        if isinstance(presentation, dict) and 'captionSafeWorking' in presentation:
            if presentation['captionSafeWorking'] is not True:
                raise ValueError(f'Unexpected captionSafeWorking value: {key}/{scene["id"]}')
            del presentation['captionSafeWorking']
    if normalized != v2:
        raise ValueError(f'Selected lesson differs beyond calculationPresentation.captionSafeWorking: {key}')
    return current


def pilot_section(key, selected=None, title_override=None):
    default_relative, title = PILOTS[key]
    title = title_override or title
    relative = selected['pilotDirectory'] if selected else default_relative
    directory = PROTOTYPES / relative
    video = directory / 'video.mp4'
    if not video.is_file():
        return '<p class="status">Short video preview is not yet available on this page.</p>', False
    candidates = sorted(directory.glob('*.vtt'))
    preferred = directory / 'captions.vtt'
    if preferred.is_file():
        captions = preferred
    elif len(candidates) == 1:
        captions = candidates[0]
    else:
        raise ValueError(f'Expected one usable VTT caption track for {video}')
    record_path = directory / 'render-record.json'
    length = ''
    if selected:
        if not record_path.is_file():
            raise ValueError(f'Selected pilot has no completed render record: {video}')
        snapshot = read(directory / 'inputs.snapshot.json')
        source_entries = [entry for entry in snapshot['files']
                          if entry['path'] == selected['source'] and 'lesson' in entry.get('roles', [])]
        if (snapshot['options']['lessonPath'] != selected['source'] or len(source_entries) != 1 or
                source_entries[0]['sha256'] != selected['sourceSha256']):
            raise ValueError(f'Selected pilot does not bind the exact selected source: {video}')
    if record_path.is_file():
        record = read(record_path)
        if digest(video) != record['videoSha256']:
            raise ValueError(f'Pilot video differs from its render record: {video}')
        render = record['render']
        if render.get('frameRange'):
            start, end = render['frameRange']
            length = f' ({duration((end - start + 1) / render["fps"])})'
    return f'''<div class="pilot"><h3>{e(title)}{e(length)}</h3>
<p>This is a short selected teaching sequence. It does not show the whole lesson.</p>
<video controls preload="metadata" playsinline>
<source src="{e(url(video))}" type="video/mp4">
<track kind="captions" src="{e(url(captions))}" srclang="en" label="English captions" default>
Your browser does not support video playback. <a href="{e(url(video))}">Open the clip</a>.
</video><p><a href="{e(url(video))}">Open video</a> · <a href="{e(url(captions))}">Clip captions</a></p></div>''', True


def lesson_section(key, selected=None):
    record_path = OUTPUT.parent / f'{key}.listening-record.json'
    record = read(record_path)
    expected = f'out/prototypes/module5-{key}-voiced-2026-10-10/narrated-v2.lesson.json'
    if record['key'] != key or record['source'] != expected:
        raise ValueError(f'Unexpected listening source in {record_path}')
    source = ROOT / record['source']
    if digest(source) != record['sourceSha256']:
        raise ValueError(f'Listening source changed: {source}')
    files = {}
    for entry in record['files']:
        path = ROOT / entry['path']
        if digest(path) != entry['sha256']:
            raise ValueError(f'Preserved listening file changed: {path}')
        files[path.suffix] = path
    lesson = read(source)
    if selected:
        lesson = selected_lesson(key, lesson, selected)
    script = []
    for scene in lesson['scenes']:
        text = scene.get('voiceover', {}).get('text')
        if text:
            heading = scene.get('heading') or scene.get('caption') or scene['id']
            script.append(f'<section class="scene"><h4>{e(heading)}</h4><p>{e(text)}</p></section>')
    pilot, present = pilot_section(key, selected)
    if selected and selected.get('quickPilotDirectory'):
        quick_selection = {**selected, 'pilotDirectory': selected['quickPilotDirectory']}
        quick, _ = pilot_section(key, quick_selection,
                                 'Short selected clip: gamete encounters and later survival')
        pilot += quick
    display_hash = selected['sourceSha256'] if selected else record['sourceSha256']
    return f'''<article id="{e(key)}" data-source-sha256="{e(display_hash)}" data-narration-source-sha256="{e(record['sourceSha256'])}">
<h2>{e(record['title'])}</h2>
<h3>Complete narration ({duration(record['durationSeconds'])})</h3>
<audio controls preload="metadata"><source src="{e(url(files['.m4a']))}" type="audio/mp4">
Your browser does not support audio playback. <a href="{e(url(files['.m4a']))}">Open complete narration</a>.
</audio><p><a href="{e(url(files['.m4a']))}">Open complete narration</a> ·
<a href="{e(url(files['.srt']))}">Full narration captions (SRT)</a> ·
<a href="{e(url(files['.vtt']))}">Full narration captions (VTT)</a></p>
{pilot}<details><summary>Read the full narration script</summary>{''.join(script)}</details>
</article>''', present


def build():
    selected = selection()
    sections = []
    pilot_status = {}
    for key in ('c2', 'b2'):
        section, present = lesson_section(key, selected.get(key))
        sections.append(section)
        pilot_status[key] = present
    html = '''<!doctype html><html lang="en-AU"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Module 5 voiced lesson review</title>
<style>
*{box-sizing:border-box}body{margin:0;padding:24px;font:18px/1.6 system-ui,sans-serif;color:#17251f;background:#f7f7f5}
main{max-width:1000px;margin:auto}h1{font-size:clamp(30px,5vw,44px);line-height:1.15}h2,h3,h4{line-height:1.3}
article{background:white;border:1px solid #d7ddd9;border-radius:12px;padding:24px;margin:24px 0}
audio,video{display:block;width:100%}video{height:auto;background:#17251f;border-radius:8px}
a{color:#0d6b52}nav{display:flex;flex-wrap:wrap;gap:12px 24px}.status{padding:16px;border-left:4px solid #b77710;background:#fff6e7}
details{padding:16px 0;border-top:1px solid #ddd;margin-top:24px}summary{cursor:pointer;font-weight:650}.scene{border-top:1px solid #e4e8e5;margin-top:16px}
@media(max-width:520px){body{padding:12px}article{padding:16px}}
</style></head><body><main><h1>Module 5 voiced lesson review</h1>
<p>Complete narration and scripts for two focused Year 12 lessons, with short selected video clips when available.</p>
<p class="status">Human listening and full continuous visual review remain pending. The short clips cover selected sequences, not complete lesson videos. Device and caption-clearance checks also remain pending.</p>
<nav><a href="#c2">Chemistry C2</a><a href="#b2">Biology B2</a>
<a href="/parallel-production-2026-10-10/">Production desk</a>
<a href="/calculation-full-review-2026-10-10/">Complete calculation videos</a></nav>
''' + ''.join(sections) + '</main></body></html>\n'
    if '\u2014' in html:
        raise ValueError('Em dash in selected page copy')
    OUTPUT.write_text(html, encoding='utf-8')
    print(json.dumps({'page': OUTPUT.relative_to(ROOT).as_posix(),
                      'sha256': digest(OUTPUT), 'pilotsAvailable': pilot_status,
                      'selectedRevision': {key: selected_version(key, row)
                                           for key, row in selected.items()} if selected else 'v2',
                      'quickPilotAvailable': bool(selected.get('b2', {}).get('quickPilotDirectory') and
                          (PROTOTYPES / selected['b2']['quickPilotDirectory'] / 'video.mp4').is_file())}, indent=2))


if __name__ == '__main__':
    build()
