"""Brief260 documentation and additive backup. Does not request speech."""
import hashlib
import json
import shutil
from pathlib import Path

B=Path('docs/production/claude-pm'); W=Path('work/brief260')
def read(p):return json.loads(p.read_text(encoding='utf-8-sig'))
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def save(p,v):
    p.parent.mkdir(parents=True,exist_ok=True)
    p.write_text(json.dumps(v,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
r=read(W/'source-comparisons.json'); rows=read(Path('work/brief236/wave7-preparation.json'))
plan=read(Path('work/brief259/next-three-nights.json'));save(W/'next-three-nights.json',plan)
for item in r['rows']:
    assert sha(Path(item['source']))==item['sourceSha256']
    if item['lesson']!='chem-y11-m1-v19':
        inventory=read(Path('work/brief237')/(item['lesson'].rsplit('-',1)[1]+'-source-inventory.json'))
        assert inventory['sha256']==item['reviewedSourceSha256']
        assert not any('narration' in d['changed'] for d in item['differingScenesAgainstBrief237'])
gate=read(Path('work/brief236/wave7/chem-y11-m1-v19/prevoice-file-gate.json'))
assert gate['recordingStageReady'] and gate['quotaFits'] and gate['speechRequested'] is False
checks={'testsPassed':8,'testsFailed':0,'javascriptSyntaxChecksPassed':8,'speechRequestsByThisBrief':0,
    'sourceHashesVerified':9,'readyLessons':1,'heldForSourceMismatch':8,
    'readyCharacters':6372,'candidateCharacters':52508,'candidateScenes':156,
    'recordingGatePass':True,'prevoicePass':True,'prevoiceQuotaDay':gate['quotaDay'],
    'prevoiceUsedRequests':gate['usedRequests'],'prevoiceBatchRequests':gate['batchRequests'],
    'nightlyDryRunPreservedLiveLedgerAndStateDuringTest':True,
    'scheduledWave2AlreadyRunning':True,
    'qualification':'The scheduled worker continues making its own authorised requests. This brief made none; a whole-session static request ledger is not claimed.'}
assert checks['candidateScenes']==sum(i['sceneCount'] for i in r['rows'])
save(W/'final-check.json',checks)
board_path=Path('docs/production/parallel-production-board-2026-10-10.json');board=read(board_path)
order=['P5','C7','C3','P6','C4','P7','C5','P8','C6']
board['brief259']['nightlyOrder']=order
board['brief259']['orderAmendedBy']='Brief260 inserts C7 after P5, before C3. Tonight wave2 remains unchanged.'
board['brief260']={'date':'2026-11-21','owner':'Codex solo (brief260)',
    'status':'Prepared v19; eight designs stopped on exact checked-source mismatch as required',
    'speechRequests':0,'nightlyOrder':order,'tonight':'Existing scheduled wave2 run continues unchanged',
    'readyLessons':rows,'heldLessons':[{k:i[k]for k in ['lesson','sourceSha256','reviewedSourceSha256','latestCheck']}for i in r['rows'] if not i['ready']],
    'builderItem':'v25 scene5 heat-slider onset; no narration change required',
    'evidence':['work/brief260/source-comparisons.json','work/brief236/wave7-preparation.json',
        'work/brief236/wave7-status.json','work/brief260/next-three-nights.json','work/brief260/final-check.json'],
    'unresolvedGates':['Eight brief260 exact-source mismatches require root resolution',
        'P5 and other Physics current recording-readiness reviews remain pending',
        'Future measured playback, human listening and release review']}
save(board_path,board)
lines=['### Brief260: Chemistry wave7 and amended nightly order (21 November2026)','',
    'Prepared the exact checked v19 source. Stopped the other eight designs as brief260 requires because their current whole-file hashes differ from the latest checks. No design or narration edits, speech requests, agents or commits. The existing 19:00 wave2 worker was already running during this work and continues unchanged.','',
    '| Lesson | Characters | Scenes | Exact checked source | Differing visual scenes against brief237 |',
    '| --- | ---: | ---: | --- | --- |']
for i in r['rows']:
    diffs=', '.join(d['number']for d in i['differingScenesAgainstBrief237'] if 'visual instructions'in d['changed'])
    lines.append(f"| {i['lesson']} | {i['characters']} | {i['sceneCount']} | {'Match: prepared' if i['ready'] else 'Mismatch: held'} | {diffs or 'none'} |")
lines+=['',
    'All nine candidates total52,508characters across156scenes. Executable wave7 has one lesson,6,372characters and19scenes. Its current/reviewed SHA256 is `92d0c58db530cab23c02d1c6fef4a26bbef66fc420fbcc1785a38912279a5089`. Brief242 confirms v19\'s oxide-ion source repair and supersedes the older brief237 finding. Its scene16 narration and scene19 visual differences above are measured against the old brief237 inventory, not against its matching latest brief242 source.','',
    'For the eight held designs, narration and bold cue strings match their checked brief237 scene inventories. Visual instructions differ in the listed scenes, so the files are not exact source matches. Their current and reviewed hashes, check paths/hashes, full differing scene text and visual instructions are listed in `work/brief260/source-comparisons.json` and `work/brief260/candidates/<lesson>/source-comparison.json`. They were not placed into the executable wave. No unchanged-narration exception was applied.','',
    'Prepared files: `work/brief236/wave7-preparation.json`, `wave7-source-audit.json`, `wave7-status.json`, per-lesson source/recording/prevoice gates under `work/brief236/wave7/chem-y11-m1-v19/`, and the input lesson, voice manifest and production brief under `docs/production/claude-pm/lessons/c-y11-m1-v19/`. Existing pack/audio state was backed up using the brief236 method. Source hashes, scene sums, IDs, em dashes, cue order and the recording-stage production gate pass. The live prevoice check also passes:9planned batch requests, with35used at the time of that check; no speech requested.','',
    'Appended the dated addendum to `checks/chem-y11-voicing-readiness.md`. It records the repaired review status for all nine, admits v19 and explicitly holds the eight hash mismatches. The original readiness bytes are preserved as `.before-brief260`. An append-only evidence check verifies that exact old snapshot and unchanged original prefix so the existing waves retain their recording evidence. It rejects edits to the original content. v25\'s scene5 heat-slider onset remains a builder item with no narration change; its separate source mismatch is still held.','',
    '**Amended order:** P5, Chemistry7, Chemistry3, P6, Chemistry4, P7, Chemistry5, P8, Chemistry6. Updated `nightly-voice-order.json` and the production board. Kept the one-module-per-night policy and cap99. P5\'s current readiness hold remains. Year11 Biology/Physics still await their separate brief afterP6. Wave7 support was added to the existing preparation/gate/validation/hand-in workers; it cannot be marked complete or bypassed while its eight excluded designs remain held. Wave7 rejects any later source change, including an unchanged-narration hash change.','',
    '**Updated next-three-nights dry run (taken during tonight\'s running wave2):**','',
    '| Night, Sydney | Plan | Base requests |','| --- | --- | ---: |']
for night in plan['nights']:
    if night.get('lessons'):
        desc=night['stage']+': '+', '.join(i['lesson'].replace('chem-y11-','')for i in night['lessons'])
    else:desc=night.get('stage','')+': '+night.get('state','')
    lines.append(f"| {night['date']} | {desc} | {night.get('plannedRequests',0)} |")
lines+=['',
    'The21November line is a remaining-work estimate, not a restart instruction or a promise of completion. Tonight\'s previous hand-ins and caches are retained. Fallbacks can leave a remainder, which runs before the new order. The22/23November holds assume no future Physics review pass. Chemistry7 follows P5 once that stage can proceed. Full amended plan: `work/brief260/next-three-nights.json`.','',
    'Eight targeted tests and eight syntax checks passed. Tests cover wave7\'s exact-source admission, the new order, refusal of a complete wave hand-in while eight designs are held, preservation of all original wave readiness evidence, rejection of edits to that evidence, and the actual nightly entry dry run preserving its live request-ledger/state/wave2-input hashes during the test. Evidence: `work/brief260/final-check.json`. No measured audio, human listening, build or release pass is claimed.','',
    'Root action needed: resolve the eight source-hash mismatches before those designs enter wave7. No re-review or approval was invented. Additive mounted-Drive delivery and hash inventory: `work/brief260/mirror-check.json` (cloud sync not individually checked).','']
section='\n'.join(lines);assert '\u2014'not in section
status=B/'status.md';assert lines[0]not in status.read_text(encoding='utf-8-sig')
with status.open('a',encoding='utf-8')as f:f.write('\n'+section)
files={p for p in W.rglob('*')if p.is_file()}
files.update(p for p in Path('work/brief236/wave7').rglob('*')if p.is_file())
files.update(p for p in (B/'lessons/c-y11-m1-v19').rglob('*')if p.is_file())
files.update(Path(p)for p in [str(status),str(board_path),'scripts/prepare-brief260.py','scripts/finish-brief260.py',
    'scripts/brief260-wave7.test.mjs','scripts/nightly-voice-plan.test.mjs','scripts/lib/chemistry-readiness-evidence.mjs',
    'scripts/refresh-prepared-chemistry-source.mjs','docs/production/claude-pm/checks/chem-y11-voicing-readiness.md',
    'docs/production/claude-pm/checks/chem-y11-voicing-readiness.md.before-brief260',
    'docs/production/claude-pm/nightly-voice-order.json','docs/production/claude-pm/nightly-voice-order.json.before-brief260',
    'work/brief236/wave7-preparation.json','work/brief236/wave7-source-audit.json','work/brief236/wave7-status.json',
    'work/brief236/backup/verified-backups.json','work/brief236/backup/verified-backups.json.before-brief260',
    'work/brief236/prevoice-file-gate.mjs','work/brief236/voice-wave-status.mjs','work/brief236/validate-voice.mjs',
    'work/brief236/hand-in-voice.mjs','work/brief236/hand-in-wave.mjs'])
for i in r['rows']:files.update([Path(i['source']),Path(i['latestCheck'])])
files={p for p in files if p.name not in ['mirror-check.json','hand-in.json']}
save(W/'hand-in.json',{'brief':260,'speechRequests':0,'checks':checks,
    'files':[{'path':p.as_posix(),'sha256':sha(p)}for p in sorted(files)]})
files.add(W/'hand-in.json');dest=Path('G:/My Drive/HSCScience video masters/work/brief260/delivered');assert dest.parent.parent.exists()
mirrors=[]
for p in sorted(files):
    q=dest/p;q.parent.mkdir(parents=True,exist_ok=True)
    if q.exists():assert sha(q)==sha(p),'Preserve differing existing mirror'
    else:shutil.copy2(p,q)
    assert sha(q)==sha(p);mirrors.append({'path':p.as_posix(),'mirror':str(q),'sha256':sha(p)})
save(W/'mirror-check.json',{'allHashesMatch':True,'files':len(mirrors),'rows':mirrors,
    'qualification':'Mounted file hashes verified; cloud sync not individually checked'})
q=dest/W/'mirror-check.json';shutil.copy2(W/'mirror-check.json',q);assert sha(q)==sha(W/'mirror-check.json')
print(json.dumps({'ready':1,'held':8,'statusAppended':True,'boardUpdated':True,'mirrorFiles':len(mirrors),'speechRequestsByBrief':0}))
