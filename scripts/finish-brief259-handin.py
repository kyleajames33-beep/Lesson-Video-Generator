"""Finish brief 259 documentation and an additive, hash-verified Drive mirror."""
import hashlib
import json
import shutil
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
W = ROOT / 'work/brief259'
PM = ROOT / 'docs/production/claude-pm'
SYL = ROOT / 'docs/production/programme/syllabus'

def read(p):
    return json.loads(p.read_text(encoding='utf-8-sig'))

def save(p, value):
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(json.dumps(value, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')

def sha(p):
    return hashlib.sha256(p.read_bytes()).hexdigest()

def rel(p):
    return p.relative_to(ROOT).as_posix()

chem = read(W / 'chemistry-repreparation.json')
physics = read(W / 'physics-wave-report.json')
plan = read(W / 'next-three-nights.json')
ledger = read(W / 'ledger-final-check.json')
citations = read(W / 'id-clash-citations.json')

# Refresh only the current inventory. Preserve all historical inventories.
inventory = ROOT / 'work/brief236/remaining-wave-inventory.json'
old = inventory.with_name(inventory.name + '.before-brief259')
if not old.exists():
    shutil.copy2(inventory, old)
rows = read(inventory)
for row in rows:
    if row['wave'] in [4, 5]:
        prepared = read(ROOT / f"work/brief236/wave{row['wave']}-preparation.json")
        row['characters'] = sum(r['characters'] for r in prepared)
        row['state'] = 'Prepared inputs refreshed by brief259; recording gates apply per lesson; no speech requested'
save(inventory, rows)

for row in physics['unreviewed']:
    audit = read(ROOT / row['sourceAudit'])
    assert sha(ROOT / audit['source']) == row['sourceSha256']
for change in chem['changes']:
    source = PM / 'lessons' / (change['lesson'] + '.md')
    assert sha(source) == change['sourceSha256']
    assert change['recordingGateReady'] and change['prevoiceStructuralPass']

verification = {
    'date': '2026-11-21', 'speechRequests': 0,
    'nightlyPlannerTests': {'passed': 4, 'failed': 0,
        'command': 'node --test scripts/nightly-voice-plan.test.mjs',
        'checks': ['Whole lessons within cap99', 'One module per night and resume ordering',
            'Physics exclusions and readiness hold',
            'Actual daily entry dry run preserves paid-request ledger, wave2 inputs and live state; preserved Chemistry loop unchanged']},
    'javascriptSyntaxChecksPassed': 8,
    'sourceHashesCurrent': True,
    'chemistryRecordingGatesPassed': 4,
    'chemistryStructuralPrevoiceChecksPassed': 4,
    'chemistryLiveQuotaHolds': 4,
    'physicsCandidates': sum(w['candidateLessons'] for w in physics['waves']),
    'physicsReadyLessons': sum(w['readyLessons'] for w in physics['waves']),
    'ledger': ledger,
    'scheduledEntryVerified': 'HSCScience Maths voice continuation 17 Nov -> work/brief240/resume-17-nov.ps1 -> work/brief240/daily-voice-continuation.mjs',
    'restrictions': 'No speech, design edits, sub-agents or commits. No full exports or release approvals.'
}
save(W / 'final-check.json', verification)

lines = [
    '### Brief 259: voicing order, Physics recording candidates and syllabus ledgers (21 November 2026)',
    '',
    'Hand-in complete within the brief\'s readiness stop rule. No speech requests, design edits, sub-agents or commits. Tonight\'s 19:00 Chemistry wave 2 remainder still starts at m1-v17. Brief 258 was completed to its boundary stop rules before this work and was not reopened.',
    '',
    '**Chemistry re-preparation.** Archived the previous prepared inputs, manifests, source/recording evidence, production briefs and wave 4/5 aggregate rows with `.before-brief259`. Prepared all four from root\'s current label-edited sources. Scene IDs/counts and bold cue order are unchanged.',
    '',
    '| Lesson | Previous characters | Current characters | Change | Scenes |',
    '| --- | ---: | ---: | ---: | ---: |'
]
for c in chem['changes']:
    lines.append(f"| {c['lesson']} | {c['oldCharacters']} | {c['characters']} | {c['delta']:+} | {c['scenes']} |")
lines += [
    '',
    'All four recording-stage gates and structural prevoice checks pass (source hashes, em dashes, cue order, scene counts). The existing live prevoice command stops solely at its whole-lesson quota check: 96 requests used in the current pre-reset window, only 3 left. These are explicit quota holds, not full prevoice passes or requests to bypass the cap. Wave 4 now totals 69,342 characters; wave 5 totals 73,820. Evidence: `work/brief259/chemistry-repreparation.json` and each `work/brief236/waveN/<lesson>/prevoice-file-gate.json`.',
    '',
    '**Physics candidates and readiness.** P5/P6/P7/P8 contain 79 ordered candidates and 478,310 characters. No current-source recording-readiness pass was found for any of the 79. Existing Revision 2 learning/science reviews do not establish approval for the current Revision 3 text or root\'s label edits. All 79 are listed as unreviewed and excluded from executable preparation arrays. No approval has been inferred. Root can supply the passed current-source review evidence, then re-run `node scripts/prepare-brief259-physics.mjs <readiness-json>`; the optional sign-off rows use `lesson`, `sourceSha256`, and `ready: true`, alongside the existing independent review files.',
    '',
    '| Wave | Candidates | Candidate characters | Recording-ready lessons / characters |',
    '| --- | ---: | ---: | ---: |'
]
for wave in physics['waves']:
    lines.append(f"| {wave['wave']} | {wave['candidateLessons']} | {wave['candidateCharacters']:,} | 0 / 0 |")
lines += ['', 'Exact order below uses `vNN (characters)` within the named module. Every listed candidate is held for root\'s current recording-stage review.', '']
for wave in physics['waves']:
    candidates = read(W / 'physics' / (wave['wave'] + '-candidates.json'))
    items = ', '.join(f"{c['lesson'].rsplit('-', 1)[1]} ({c['characters']})" for c in candidates)
    lines += [f"- **{wave['wave']}:** {items}."]
lines += [
    '',
    'P5 excludes m5-v04 (already voiced pilot) and defers m5-v14 (banked tracks). As-is/minor candidates precede partial candidates; the specified 2017-only lessons are last. Per-candidate scene text, cues, holds, source hashes and review evidence are in `work/brief259/physics/candidates/<lesson>/source-audit.json`. Full ordered lists and explicit held lists: `work/brief259/physics/P5-candidates.json` through `P8-candidates.json`, their `*-status.json` files, and `work/brief259/physics-wave-report.json`. Executable `*-preparation.json` files are empty pending review.',
    '',
    '**Nightly order and dry run.** Configured in `docs/production/claude-pm/nightly-voice-order.json` and the production board: P5, C3, P6, C4, P7, C5, P8, C6. C6 retains m4-v04 to v06 before v07 to v14. After the preserved run, keep one module per quota night, resume its remainder before moving on, cap99. Year 11 Biology/Physics 2025 are reserved after P6 for root\'s separate brief; no unprepared streams are automatically inserted. The existing later-Maths worker is retained after the configured science queue.',
    '',
    'The registered nightly task still calls `work/brief240/resume-17-nov.ps1`, which calls the updated daily entry. Its Maths completion and Chemistry wave 1/2 loop are preserved; new dispatch cannot start before the 22 November quota day. The dispatcher holds at unready Physics rather than bypassing it to Chemistry. It shares the existing resource/lock protections and delegates paid generation only during scheduled execution.',
    '',
    '| Night at 19:00 Sydney | Dry-run plan | Base batch requests |',
    '| --- | --- | ---: |',
    '| 21 November | C2: m1-v17, m1-v21, m2-v01, m2-v02, m2-v03, m2-v04 | 52 |',
    '| 22 November | P5 readiness hold, unless root supplies passed reviews. Any actual C2 remainder runs first. | 0 on current readiness |',
    '| 23 November | P5 readiness hold on current evidence. Any actual C2 remainder runs first. | 0 on current readiness |',
    '',
    'Tonight\'s per-lesson base estimates are 8, 9, 9, 9, 8 and 9. Adding one quality retry per missing scene would total 158, so 52 is a no-failure estimate, not a promise that all six finish within99. Existing live gates stop at99 and preserve caches. No new stream starts tonight even if capacity remains. Machine-readable plan: `work/brief259/next-three-nights.json`.',
    '',
    '**Official syllabus ledger and crosswalk.** Added `docs/production/programme/syllabus/phys-new-y12.json`: 229 official Year 12 points including34 Working scientifically points, official CMS codenames, source URLs, retrieval date21 November2026, exact source HTML and retained MathML. Captured and hash-verified six official NESA pages in `work/brief259/nesa/official/`. The ledger reproduces offline from those captures. [Official NESA source](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content).',
    '',
    '`phys-new-y12-audit-crosswalk.json` maps195 provisional domain point IDs to ledger IDs and official codenames; all178 unique IDs used by the audit resolve. `phys-new-y12-audit-match-findings.json` records four findings: the audit\'s cosine torque warning does not hold (live NESA uses sine with the area-normal angle); m6-v05 lacks the complete uniform-gravity/four-path comparison; m6-v16 covers the DC motor part but not the AC/slip-ring part; m7-v11 lacks the thermionic-emission parts. The last three retain partial coverage. This is an ID/wording check, not a new independent learning or science review of all designs.',
    '',
    '**Year 12 identifier migration.** Changed321 Chemistry/Biology Year12 aliases to `C25Y12-...` / `B25Y12-...` (170 Chemistry,151 Biology), removing203 cross-year clashes. No duplicate point IDs remain across the ledgers. All non-ID C/B point fields are unchanged, proven against preserved originals. Updated `generate_ledgers.py` so later generation retains unique Year12 prefixes. Mapping: `docs/production/programme/syllabus/y12-id-migration-brief259.json`.',
    '',
    f"The exhaustive pre-migration citation inventory lists {len(citations['files'])} files and {len(citations['citations'])} matching lines: `work/brief259/id-clash-citations.json`. Each entry includes the path, line and ID. Existing citations include legitimate Year11 references and historical/frozen evidence, so they were inventoried rather than blanket-rewritten. The new migration file intentionally documents the old aliases.",
    '',
    '**Validation and delivery.** Four targeted worker tests passed, including calling the actual nightly entry in dry-run mode while verifying unchanged request-ledger, live-state and wave2-input hashes. Eight JavaScript syntax checks passed. Official captures, mathematical fractions/powers/indices, all current candidate hashes and the identifier-only C/B migration passed. Evidence: `work/brief259/final-check.json`, `work/brief259/ledger-final-check.json`, `work/brief259/hand-in.json`. Additive mounted-Drive mirror: `G:/My Drive/HSCScience video masters/work/brief259/delivered/`; hashes are checked in `work/brief259/mirror-check.json`. Mounted file hashes establish the local mirror; cloud sync was not individually checked.',
    '',
    'Unresolved gates: root\'s recording-readiness reviews for all79 Physics candidates, normal reset/quota gates, then measured playback, human listening and release reviews after actual voicing. No human listening or release pass is claimed.'
]
section = '\n'.join(lines) + '\n'
assert '\u2014' not in section
status = PM / 'status.md'
marker = '### Brief 259: voicing order, Physics recording candidates and syllabus ledgers (21 November 2026)'
text = status.read_text(encoding='utf-8-sig')
assert marker not in text, 'Hand-in already appended; inspect rather than duplicate'
with status.open('a', encoding='utf-8') as f:
    f.write('\n' + section)

board_path = ROOT / 'docs/production/parallel-production-board-2026-10-10.json'
board = read(board_path)
board['brief259'] = {
    'owner': 'Codex solo (brief259)', 'date': '2026-11-21',
    'status': 'Hand-in complete; all79 Physics candidates excluded pending current recording-readiness reviews',
    'speechRequests': 0, 'chemistryReprepared': [{k:c[k] for k in ['lesson','characters','delta','recordingGateReady','quotaHold']} for c in chem['changes']],
    'physicsWaves': physics['waves'], 'deferredAndPreviouslyVoiced': physics['deferred'],
    'nightlyOrder': ['P5','C3','P6','C4','P7','C5','P8','C6'],
    'tonight': 'Unchanged wave2 remainder from m1-v17, 19:00 Sydney21 November; no new stream tonight',
    'moduleNightPolicy': 'One module per night after the preserved run; resume remainder first; cap99',
    'futureStreams': 'Year11 Biology/Physics2025 afterP6, awaiting separate root brief and stand-in decisions',
    'existingLaterMathsTail': 'Retained after the configured science queue',
    'configuration': 'docs/production/claude-pm/nightly-voice-order.json',
    'evidence': ['work/brief259/chemistry-repreparation.json','work/brief259/physics-wave-report.json',
        'work/brief259/next-three-nights.json','work/brief259/ledger-final-check.json',
        'work/brief259/id-clash-citations.json','work/brief259/final-check.json','work/brief259/mirror-check.json'],
    'unresolvedGates': ['Root current-source recording readiness for79 Physics candidates',
        'Live whole-lesson quota gates', 'Later human listening, exact voiced playback and release review'],
    'restrictions': 'No speech, design edits, sub-agents or commits'
}
save(board_path, board)

files = set(p for p in W.rglob('*') if p.is_file())
files.update([status, board_path, PM/'nightly-voice-order.json', SYL/'generate_ledgers.py'])
files.update(SYL / f for f in ['phys-new-y12.json','phys-new-y12-audit-crosswalk.json',
    'phys-new-y12-audit-match-findings.json','chem-new-y12.json','bio-new-y12.json','y12-id-migration-brief259.json'])
files.update(ROOT/'scripts'/f for f in ['prepare-brief259-chemistry.py','prepare-brief259-physics.mjs',
    'check-brief259-chemistry.mjs','finish-brief259-ledgers.py','check-brief259-ledgers.py',
    'finish-brief259-handin.py','nightly-voice-dispatch.mjs','nightly-voice-plan.test.mjs',
    'lib/nightly-voice-plan.mjs','voice-physics-recording-wave.mjs','refresh-prepared-chemistry-source.mjs'])
for f in ['work/brief240/daily-voice-continuation.mjs','work/brief240/daily-voice-continuation.mjs.before-brief259',
    'work/brief240/resume-17-nov.ps1','work/brief236/voice-wave-status.mjs',
    'work/brief236/remaining-wave-inventory.json','work/brief236/remaining-wave-inventory.json.before-brief259']:
    files.add(ROOT / f)
for wave in [4,5]:
    for suffix in ['preparation','source-audit']:
        for ending in ['', '.before-brief259']:
            files.add(ROOT / f'work/brief236/wave{wave}-{suffix}.json{ending}')
for c in chem['changes']:
    lesson_root = PM/'lessons'/c['lesson'].replace('chem-','c-',1)
    files.add(PM/'lessons'/(c['lesson']+'.md'))
    for stem in ['lesson.json','voice-manifest.json','lesson.production-brief.json']:
        for ending in ['', '.before-brief259']:
            files.add(lesson_root/(stem+ending))
    files.update(p for p in (ROOT/f"work/brief236/wave{c['wave']}/{c['lesson']}").glob('*') if p.is_file())

files = {p for p in files if p.exists() and p.name not in ['hand-in.json','mirror-check.json']}
handin = {'brief':259, 'createdAt':datetime.now(timezone.utc).isoformat(),
    'status':'Complete to readiness stop rule; Physics wave preparation held for root review',
    'speechRequests':0, 'verification':verification,
    'files':[{'path':rel(p),'sha256':sha(p)} for p in sorted(files)],
    'mirrorQualification':'Mounted Drive files hash verified; cloud sync not individually checked'}
save(W/'hand-in.json',handin)
files.add(W/'hand-in.json')
mirror = Path('G:/My Drive/HSCScience video masters/work/brief259/delivered')
assert mirror.parent.parent.parent.exists(), 'Mounted Drive destination unavailable'
copied=[]
for p in sorted(files):
    target = mirror / rel(p)
    target.parent.mkdir(parents=True,exist_ok=True)
    if target.exists():
        assert sha(target)==sha(p), f'Preserve differing mirror file: {target}'
    else:
        shutil.copy2(p,target)
    assert sha(p)==sha(target)
    copied.append({'file':rel(p),'mirror':str(target),'sha256':sha(p)})
check = {'files':len(copied),'allHashesMatch':True,'qualification':handin['mirrorQualification'],'rows':copied}
save(W/'mirror-check.json',check)
target=mirror/rel(W/'mirror-check.json')
target.parent.mkdir(parents=True,exist_ok=True)
shutil.copy2(W/'mirror-check.json',target)
assert sha(target)==sha(W/'mirror-check.json')
print(json.dumps({'statusAppended':True,'boardUpdated':True,'mirrorFiles':len(copied),
    'chemistryRecordingPasses':4,'physicsReady':0,'physicsHeld':79,'speechRequests':0}))
