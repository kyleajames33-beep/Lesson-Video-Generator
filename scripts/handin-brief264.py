"""Verify delivered files, append status once, and update this turn's receipts."""
import json,hashlib,datetime,shutil
from pathlib import Path
from PIL import Image
W=Path('work/brief264');M=Path('docs/production/claude-pm/assets/brief264-manifest.json')
def read(p):return json.loads(Path(p).read_text(encoding='utf-8-sig'))
def sha(p):return hashlib.sha256(Path(p).read_bytes()).hexdigest()
def save(p,v):Path(p).write_text(json.dumps(v,indent=2,ensure_ascii=True)+'\n',encoding='utf-8')
now=datetime.datetime.now(datetime.timezone.utc).isoformat();m=read(M);accepted=[r for r in m['assets'] if r['status']=='accepted']
assert len(accepted)==92 and len({r['path'] for r in accepted})==92
for r in m['assets']:
 assert sha(r['path'])==r['sha256'];im=Image.open(r['path']);assert im.mode=='RGBA' and im.getchannel('A').getextrema()[0]==0
 if r['status']=='accepted':
  assert sha(r['sourceBrief'])==r['sourceBriefSha256']
  if 'copiedFrom' in r:assert sha(r['copiedFrom'])==r['sha256']
  else:assert sha(r['generatorOriginal'])==r['sha256']
 p=read(r['provenance']);assert any(a['sha256']==r['sha256'] and a['name']==r['name'] for a in p['assets'])
assert not Path('public/assets/hms/hms-arm-muscles-overlay-v1.png').exists()
ledger=Path('work/google-tts-requests.jsonl');requests=[json.loads(x) for x in ledger.read_text(encoding='utf-8-sig').splitlines() if x.strip()]
latest=max(x['at'] for x in requests);assert latest<'2026-11-23T20:37:34','Unexpected speech request during this turn'
hook='public/audio/phys-y12-m5-v11/hook.wav';assert sha(hook)=='fd8e5d6f6e3d7b67e6feb25d2d35a3d606783baf57bd3ad8c530156d1c4bb85a'
verification={'verifiedAt':now,'assetsVerified':92,'allDeliveredAlpha':True,'allDeliveredHashesAndGeneratorOriginalsMatch':True,'cycadCopiesUnchanged':True,
 'rejectedArmOverlayAbsentFromPublicAssets':True,'speechRequestsThisTurn':0,'paidRequestLedgerSha256':sha(ledger),'latestRequestAt':latest,
 'v11HookSha256':sha(hook),'targetedTestsPassed':15,'syntaxChecksPassed':['scripts/lib/google-batch-voice.mjs','scripts/voice-physics-recording-wave.mjs','scripts/nightly-voice-dispatch.mjs','work/brief240/daily-voice-continuation.mjs'],
 'testCommand':'node --test scripts/google-timeout-policy.test.mjs scripts/nightly-voice-plan.test.mjs scripts/brief263-preparation.test.mjs scripts/brief260-wave7.test.mjs',
 'nextScheduledRunSydney':'2026-11-24T19:00:00+11:00','nextRunQualification':'Observed scheduled-task NextRunTime. Tonight has not run yet.'}
save(W/'final-verification.json',verification)
recoveryPath=Path('work/brief262/timeout-resume-2026-11-24.json');recovery=read(recoveryPath)
recovery['implementation']=[{'path':p,'sha256':sha(p)} for p in ['scripts/lib/google-timeout-policy.mjs','scripts/google-timeout-policy.test.mjs','scripts/lib/google-batch-voice.mjs','scripts/voice-physics-recording-wave.mjs','scripts/nightly-voice-dispatch.mjs','work/brief240/daily-voice-continuation.mjs']]
recovery['timeoutPolicy']='One retry after a client timeout; count persists by exact scene/text request signature across cap stops or restarts. Same request timed out twice: hold that lesson and continue later P5 lessons. Provider HTTP failures stop without timeout retry.'
recovery['verifiedAt']=now;recovery['verification']='work/brief264/final-verification.json';recovery['scheduledRunSydney']='2026-11-24T19:00:00+11:00';save(recoveryPath,recovery)
save('work/brief262/timeout-recovery-verification-2026-11-24.json',verification)
hand263=Path('work/brief263/hand-in.json');old=hand263.with_name('hand-in.before-final-timeout-hardening-2026-11-24.json');assert not old.exists();shutil.copy2(hand263,old)
h=read(hand263)
for r in h['files']:r['sha256']=sha(r['path'])
h['testsPassed']=15;h['finalTimeoutVerification']='work/brief262/timeout-recovery-verification-2026-11-24.json';h['finalTimeoutHardening']='Fresh child-log slice prevents an old timeout marker from classifying a provider error. Timeout history survives worker restarts. Original 14-test TAP receipt and first Drive delivery are preserved.';save(hand263,h)
status=Path('docs/production/claude-pm/status.md');marker='### Brief 264: plates and dated fact checks (24 November 2026)';text=status.read_text(encoding='utf-8');assert marker not in text
entry='''

### Tonight's P5 timeout recovery: final verification (24 November 2026)

Owner-authorised restart is configured for **19:00 Sydney tonight**. The scheduled task's next run is 24 November at 19:00. The current hold phase was cleared after inspecting the successful 23 November billing probe and the later client timeout. No new billing probe or paid speech was requested in this turn. All cached takes are retained, including v11's hook, SHA-256 `fd8e5d6f6e3d7b67e6feb25d2d35a3d606783baf57bd3ad8c530156d1c4bb85a`.

The exact v11 batch that timed out has one remaining attempt. New client timeouts get one retry; a second timeout for the same request stops that lesson and continues later P5 lessons. Counts persist across a quota stop or worker restart. Provider HTTP failures stop without a timeout retry. The worker inspects only each child's fresh log output, so an old timeout marker cannot turn a later provider error into permission to continue. Existing request cap 99 and the brief 259/260 module order are retained. No wave is marked complete while it has a timeout-held lesson. Machine run-on, measured timing and caption checks remain in the existing worker; human listening and exact voiced previews are still separate gates.

Fifteen targeted tests and four syntax checks passed. Recovery receipt: `work/brief262/timeout-resume-2026-11-24.json`. Final verification: `work/brief262/timeout-recovery-verification-2026-11-24.json`. This is a scheduled restart, not a claim that tonight's speech has completed; the dispatcher appends actual lesson results here when it runs.

### Brief 264: plates and dated fact checks (24 November 2026)

Delivered **92 transparent PNGs**: Physics 2, Standard Maths 3, Biology 20 (including the 2 unchanged cycad copies), HMS 66, Chemistry 1. Full paths, native dimensions, alpha checks, source briefs, exact generator originals, prompts and SHA-256 hashes: `docs/production/claude-pm/assets/brief264-manifest.json`. There are 36 per-design provenance files, linked from that manifest. No final PNG pixels were altered after generation. Native proportions are retained. Inspected every accepted plate on paper and black backgrounds; individual black/white/paper sheets are in `work/brief264/qa/`.

The circular track and stone are in `public/assets/physics/`, with JSON animation anchors. The meters and fridge are in `public/assets/maths/`; paper inspections at 800, 600 and 300 px passed, as did the 260 px tall meter/fridge and 300 px wide water-meter checks. The fridge's original alpha was valid, with a maximum of 254; the earlier opaque diagnosis was incorrect. The accepted file is the original. The Biology additions and unchanged cycad copies are in `public/assets/biology/`. HMS additions are in `public/assets/hms/`; the hamstring base and tear share the same native canvas, and their combined placement was inspected. The generic whole/ground kernels are `public/assets/chemistry/y11c-plant-kernels-whole-ground-v1.png`.

**Rejected without replacement:** `work/brief264/candidates/hms-arm-muscles-overlay-v1.png`, SHA-256 `b6de3aab1f0f678174821ecb78fe1df705b6c6e84359752297e052b2bb1ed310`. Its 1001 by 1571 canvas differs from the 1001 by 1572 bone base, and exact anatomical attachment registration is not established. It is absent from the public asset folder. The arm-bone base is delivered; the matching overlay still needs a registered redraw. Superseded track, megafauna, hamstring, rehabilitation-sheet, phone and calendar candidates are retained with rejection reasons and hashes in the manifest. Later HMS modules outside the approved Module 1 and Module 2 v01-v08 scope were excluded.

Dated source report: `docs/production/claude-pm/checks/brief264-fact-checks-2026-11-24.md`. It reports every requested claim, source and date. Findings for root: Olympic minimum depth is 2.5 m rather than 2 m; the $220 concrete supply price and comparable youth drink-driving trend were not confirmed; the plural SDG-review claim needs a named dated source or narrower support. The new 2024-syllabus reference sheet visibly prints the single-trapezoid approximation. NSW fee schedules and provider tariffs are dated and scoped. The v05 saturation is Module 2's illustrative input, with correct model arithmetic, not a verified universal measurement. No design text was changed.

`work/brief264/hand-in.json` and `work/brief264/final-verification.json` record the delivery. No speech, renders, commits or design edits for brief 264. Plate fit is not lesson, listening or release approval.
'''
assert '\u2014' not in entry;status.write_text(text+entry,encoding='utf-8')
boardPath=Path('docs/production/parallel-production-board-2026-10-10.json');board=read(boardPath)
board['brief262']['status']='Owner-authorised timeout recovery scheduled for 24 November 19:00 Sydney; caches retained; actual run pending'
board['brief262']['timeoutRecovery']='work/brief262/timeout-resume-2026-11-24.json';board['brief263']['testsPassed']=15
board['brief264']={'owner':'Codex root','status':'Complete with one rejected plate and reported factual findings','acceptedAssets':92,'rejectedAssets':1,'provenanceFiles':36,
 'manifest':M.as_posix(),'factChecks':m['factChecks'],'verification':'work/brief264/final-verification.json','speechRequests':0,'designEdits':0,'renders':0,
 'unresolvedGates':['HMS arm-muscle overlay exact registration','Reported factual findings for root','Lesson integration, exact voiced preview and human listening']}
save(boardPath,board)
hand=read(W/'hand-in.json');hand['verification']='work/brief264/final-verification.json';hand['verifiedAt']=now;save(W/'hand-in.json',hand)
print(json.dumps({'assetsVerified':92,'provenanceFiles':36,'testsPassed':15,'latestSpeechRequestAt':latest,'scheduledRunSydney':verification['nextScheduledRunSydney']}))
