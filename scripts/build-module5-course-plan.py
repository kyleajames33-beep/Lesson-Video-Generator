"""Build the focused Module 5 route from its tracked planning record."""
from pathlib import Path
from html import escape
import json

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'docs/production/module5-video-route-2026-10-10.json'
OUTPUT = ROOT / 'out/prototypes/module5-course-plan-2026-10-10'


def e(value):
    return escape(str(value))


def joined(values):
    return ', '.join(e(value) for value in values) or 'None'


def build():
    data = json.loads(SOURCE.read_text(encoding='utf-8'))
    actions = {action['id']: action for action in data['syllabusActions']}
    entries_by_id = {row['id']: row for group in data['subjects'].values() for row in group['entries']}
    external = {row['id']: row['description'] for row in data['externalHandoffs']}

    def next_links(ids):
        return '; '.join(f'<a href="#{e(key)}">{e(entries_by_id[key]["title"])}</a>'
                         if key in entries_by_id else e(external[key]) for key in ids) or 'End of this route'
    parts = ['''<!doctype html><html lang="en-AU"><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Module 5: video sequence and syllabus plan</title>
<style>body{font:18px/1.6 system-ui,sans-serif;background:#f6f7f5;color:#162b23;margin:0;padding:24px}main{max-width:1100px;margin:auto}h1{font-size:clamp(30px,5vw,48px);line-height:1.15}h2{margin-top:2em}h3{line-height:1.3}a{color:#086b50}article{background:white;border:1px solid #d3ddd6;border-radius:12px;padding:24px;margin:20px 0}p{max-width:90ch}.note{padding:16px;border-left:4px solid #b77710;background:#fff6e7}.tag{font-size:14px;color:#435b4e}.detail{overflow-wrap:anywhere}summary{cursor:pointer;font-weight:650}li{margin:10px 0}.links{display:flex;gap:24px;flex-wrap:wrap}code{font-size:14px}</style>
<main><h1>Module 5: the video sequence</h1>
<p>Each subject is a series of focused lessons, followed by appropriate application and practical support videos. The opening drafts are the first lessons in that sequence.</p>
<p>This focused route uses the Year 12 2017 syllabus. The full catalogue keeps the new Year 11 Biology 2025 mapping separate.</p>
<p class="note">This is a production plan. Syllabus references indicate planned relevance, not completed teaching or practical work. Source files, planned uploads and published videos are different counts. Playlist order is separate from upload chronology.</p>
<nav class="links"><a href="#Chemistry">Chemistry</a><a href="#Biology">Biology</a><a href="/video-syllabus-map-2026-10-09/">Full video catalogue and syllabus mapping</a><a href="/parallel-production-2026-10-10/">Draft scripts and production desk</a><a href="route.json">Download this planning record</a></nav>''']
    for subject, group in data['subjects'].items():
        entries = group['entries']
        counts = {kind: sum(row['type'] == kind for row in entries)
                  for kind in ['core', 'companion', 'practical-support']}
        parts.append(f'<section id="{e(subject)}"><h2>{e(subject)} Module 5</h2><p>{e(group["sourceCandidateCount"])} existing source candidates. Proposed route: {counts["core"]} core lessons, {counts["companion"]} companions and {counts["practical-support"]} practical support videos.</p>')
        for row in entries:
            references = [actions[key] for key in row['syllabusActions']]
            optional = row.get('includeInDefaultPlaylistNavigation') is False
            prefix = 'Optional support' if optional else e(row['playlistOrder'])
            next_ids = row.get('supportRouteNext', []) if optional else row['next']
            parts.append(f'<article id="{e(row["id"])}"><p class="tag">{e(row["id"])} · {e(row["type"])} · {e(row["status"])}</p><h3>{prefix}. {e(row["title"])}</h3><p><strong>Before this:</strong> {e(row["entryKnowledge"])}</p><p><strong>Start:</strong> {e(row["start"])}</p><p><strong>Stop:</strong> {e(row["stop"])}</p><p><strong>Next:</strong> {next_links(next_ids)}</p><details><summary>Syllabus alignment and source plan</summary><ul>')
            for action in references:
                parts.append(f'<li><strong>{e(action["id"])}</strong>: {e(action["paraphrase"])}<br><span class="tag"><a href="{e(action["officialUrl"])}">Official syllabus</a>, cached extract: {joined(action["paragraphIds"])}. {e(action["status"])}</span></li>')
            parts.append('</ul><p class="detail"><strong>Source candidates:</strong> ' + joined(item['path'] for item in row['sourceCandidates']) + '</p><p><strong>Coverage:</strong> ' + e(row['coverageStatus']) + '</p></details></article>')
        parts.append('</section>')
    parts.append('<section><h2>Open coverage work</h2><p>A video can prepare learners for an investigation; watching it does not establish that they conducted it.</p><ul>')
    for gap in data['gaps']:
        parts.append(f'<li><strong>{e(gap["id"])}:</strong> {e(gap["gap"])}</li>')
    parts.append('</ul></section><p class="tag">Generated from docs/production/module5-video-route-2026-10-10.json. Rebuild with python scripts/build-module5-course-plan.py.</p></main></html>')
    html = ''.join(parts)
    assert '\u2014' not in html, 'Prohibited punctuation in selected plan copy'
    OUTPUT.mkdir(parents=True, exist_ok=True)
    (OUTPUT / 'index.html').write_text(html, encoding='utf-8', newline='\n')
    (OUTPUT / 'route.json').write_bytes(SOURCE.read_bytes())
    print('http://127.0.0.1:8778/module5-course-plan-2026-10-10/')


if __name__ == '__main__':
    build()
