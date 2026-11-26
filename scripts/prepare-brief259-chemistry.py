"""Brief 259: refresh four root-edited prepared inputs. Never requests speech."""
import hashlib
import json
import re
from pathlib import Path

ROOT = Path.cwd().resolve()
W = Path('work/brief236')
OUT = Path('work/brief259')
OUT.mkdir(parents=True, exist_ok=True)
read = lambda p: json.loads(Path(p).read_text(encoding='utf-8-sig'))
sha = lambda p: hashlib.sha256(Path(p).read_bytes()).hexdigest()
save = lambda p, v: Path(p).write_text(json.dumps(v, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')


def archive(p):
    p = Path(p)
    target = Path(str(p) + '.before-brief259')
    assert p.resolve().is_relative_to(ROOT) and target.resolve().is_relative_to(ROOT)
    assert not target.exists(), target
    before = sha(p)
    p.rename(target)
    assert sha(target) == before
    return {'source': p.as_posix(), 'backup': target.as_posix(), 'sha256': before}


def parse(source):
    raw = Path(source).read_text(encoding='utf-8-sig')
    assert '\u2014' not in raw
    heads = list(re.finditer(r'^### (\d+[a-z]?)\. ([^\r\n]+)', raw, re.M))
    order = re.search(r'^In order[^\r\n]*:\s*([^\r\n]+)', raw, re.M)[1]
    ids = [v.strip() for v in order.replace('`', '').strip().rstrip('.').split(',')]
    assert len(ids) == len(heads)
    scenes = []
    for i, head in enumerate(heads):
        part = re.split(r'^## ', raw[head.end():heads[i+1].start() if i+1 < len(heads) else len(raw)], maxsplit=1, flags=re.M)[0]
        quoted = ' '.join(line[2:].strip() for line in part.splitlines() if line.startswith('> '))
        text = quoted.replace('**', '')
        cues = re.findall(r'\*\*([^*]+)\*\*', quoted)
        cursor = 0
        for cue in cues:
            at = text.find(cue, cursor)
            assert at >= 0
            cursor = at + len(cue)
        scenes.append({'number': head[1], 'id': ids[i], 'title': head[2], 'text': text,
                       'characters': len(text), 'boldCues': cues,
                       'visual': part.split('Visual:', 1)[-1].strip()})
    return raw, scenes


targets = {4: ['chem-y11-m2-v20', 'chem-y11-m3-v01'], 5: ['chem-y11-m3-v13', 'chem-y11-m3-v15']}
changes, backups = [], []
for wave, keys in targets.items():
    prep_path = W / f'wave{wave}-preparation.json'
    audit_path = W / f'wave{wave}-source-audit.json'
    prep, aggregate = read(prep_path), read(audit_path)
    original_unaffected = {r['lesson']: r for r in prep if r['lesson'] not in keys}
    jobs = []
    for key in keys:
        row = next(r for r in prep if r['lesson'] == key)
        folder = W / f'wave{wave}' / key
        old_audit = read(folder / 'source-audit.json')
        source = row['source'].replace('\\', '/')
        raw, current = parse(source)
        lesson, manifest = read(row['lessonInput']), read(row['manifest'])
        assert len(current) == len(old_audit['scenes']) == len(lesson['scenes']) == len(manifest['scenes'])
        old_characters = row['characters']
        changed_scenes = []
        for a, b, s, m in zip(old_audit['scenes'], current, lesson['scenes'], manifest['scenes']):
            assert a['id'] == b['id'] == s['id'] == m['id']
            assert a['boldCues'] == b['boldCues'], (key, b['id'])
            assert a['text'] == s['voiceover']['text'] == m['text']
            if a['text'] != b['text']:
                changed_scenes.append({'id': b['id'], 'old': a['text'], 'new': b['text']})
            s['voiceover']['text'] = b['text']
            m['text'] = b['text']
            a.update(b)
        assert changed_scenes
        new_sha = sha(source)
        lesson['sourceDesignSha256'] = new_sha
        manifest['sourceSha256'] = new_sha
        characters = sum(s['characters'] for s in current)
        old_audit.update({'source': source, 'sourceSha256': new_sha, 'characters': characters,
                          'brief259': {'authority': 'docs/production/claude-pm/codex-prompts/259-voicing-order-physics-waves-and-ledgers.md',
                                       'oldCharacters': old_characters, 'boldCuesUnchanged': True,
                                       'narrationChanged': True, 'speechRequested': False}})
        row.pop('freshnessEvidence', None)
        row['beforeBrief259SourceSha256'] = row['sourceSha256']
        row.update({'source': source, 'sourceSha256': new_sha, 'characters': characters,
                    'brief259NarrationReprepared': True})
        agg = next(r for r in aggregate if r['lesson'] == key)
        agg.update({k: v for k, v in old_audit.items() if k != 'scenes'})
        jobs.append((row, folder, old_audit, lesson, manifest))
        changes.append({'lesson': key, 'wave': wave, 'oldCharacters': old_characters,
                        'characters': characters, 'delta': characters-old_characters,
                        'scenes': len(current), 'changedScenes': changed_scenes,
                        'sourceSha256': new_sha, 'boldCuesUnchanged': True})
    backups += [archive(prep_path), archive(audit_path)]
    for row, folder, audit, lesson, manifest in jobs:
        for p in [folder/'source-audit.json', folder/'recording-source-check.json', folder/'recording-gate.json',
                  Path(row['lessonInput']), Path(row['manifest']), Path(row['recordingBrief'])]:
            if p.exists():
                backups.append(archive(p))
        for name in ['prevoice-file-gate.json', 'recording-gate-run.log']:
            if (folder/name).exists():
                backups.append(archive(folder/name))
        save(folder/'source-audit.json', audit)
        save(row['lessonInput'], lesson)
        save(row['manifest'], manifest)
    for row in prep:
        if row['lesson'] in original_unaffected:
            assert row == original_unaffected[row['lesson']]
    save(prep_path, prep)
    save(audit_path, aggregate)
save(OUT/'chemistry-repreparation.json', {'changes': changes, 'backups': backups, 'speechRequests': 0})
print(json.dumps([{k: v for k, v in r.items() if k != 'changedScenes'} for r in changes]))
