"""Archive stale pending P5 preparation and record checks of the exact changes."""
import json,hashlib,shutil
from pathlib import Path
W=Path('work/brief262/prevoice-refresh-2026-11-24');rows=json.loads((W/'comparison.json').read_text(encoding='utf-8'));root=Path.cwd().resolve()
def sha(p):return hashlib.sha256(Path(p).read_bytes()).hexdigest()
def save(p,v):p=Path(p);p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(v,indent=2,ensure_ascii=True)+'\n',encoding='utf-8')
expected={'phys-y12-m5-v11':['hook'],'phys-y12-m5-v17':['memory-aid']}
reviewBindingDifferences=[]
for r in rows:
 assert sha(r['source'])==r['sourceSha256'],'Design changed during inspection'
 assert [c['scene'] for c in r['narrationChanges']]==expected.get(r['lesson'],[])
 assert not r['emDash']
 assert [c['scene'] for c in r['visualChanges']]==({'phys-y12-m5-v17':['memory-aid'],'phys-y12-m5-v23':['module-bridge']}.get(r['lesson'],[]))
media={p.as_posix():sha(p) for folder in Path('public/audio').glob('phys-y12-m5-*') for p in folder.rglob('*') if p.is_file()}
baseline={'media':media,'requestLedgerSha256':sha('work/google-tts-requests.jsonl'),'otherWaves':{p.as_posix():sha(p) for n in [6,7,8] for p in Path('work/brief259/physics').glob('P'+str(n)+'-*.json')},
 'deliveredHandins':{p.as_posix():sha(p) for p in Path('work/brief259/physics/P5').glob('*/hand-in.json')}}
if (W/'baseline.json').exists():assert json.loads((W/'baseline.json').read_text(encoding='utf-8'))==baseline,'Existing baseline differs'
else:save(W/'baseline.json',baseline)
archive=W/'archive';archive.mkdir(exist_ok=True);archived=[]
def copy(p):
 p=Path(p);assert p.resolve().is_relative_to(root);dest=archive/p;dest.parent.mkdir(parents=True,exist_ok=True)
 if dest.exists():assert sha(p)==sha(dest),'Refuse to replace a different archive'
 else:shutil.copy2(p,dest)
 assert sha(p)==sha(dest);archived.append({'path':p.as_posix(),'archive':dest.as_posix(),'sha256':sha(p)})
for p in list(Path('work/brief259/physics').glob('P5-*.json'))+[Path('work/brief259/physics-wave-report.json'),Path('scripts/prepare-brief259-physics.mjs'),Path('work/brief262/timeout-resume-2026-11-24.json')]:copy(p)
for r in rows:
 if not r['changed']:continue
 old=json.loads(Path(r['preparedRow']['sourceAudit']).read_text(encoding='utf-8'));assert old['readiness']['ready']
 for evidence in old['readiness']['existingReviews']:
  actual=sha(evidence['path'])
  if actual!=evidence['sha256']:
   assert r['lesson']=='phys-y12-m5-v11' and evidence['path'].endswith('p-y12-m5-v11-rev3-readiness-check.md')
   review=Path(evidence['path']).read_text(encoding='utf-8');assert r['beforeSha256'] in review and 'Result: 0 blockers, 0 should fix' in review
   reviewBindingDifferences.append({'path':evidence['path'],'recordedSha256':evidence['sha256'],'currentSha256':actual,'inspection':'Current review explicitly covers the old prepared source hash and still records zero blockers/should-fix; learning and science hashes match. Current file retained separately.'})
  copy(evidence['path'])
 report=Path('docs/production/claude-pm/checks')/(r['key']+'-24nov-prevoice-refresh-check.md');assert not report.exists()
 explanation='Narration and parsed scene visuals are unchanged. Current source paths and author metadata were refreshed.'
 if r['lesson']=='phys-y12-m5-v11':explanation='Only the hook opening changes from "Here\'s that crane again" to "Here\'s a crane". It removes a backward reference; the question, mechanism, calculations, remaining narration and parsed scene visuals are unchanged. The cached older hook is retained but must not be used for this changed text.'
 if r['lesson']=='phys-y12-m5-v17':explanation='Scene 12 changes to "Twice as far, a quarter of the pull", as the 24 November audit directs. For unchanged masses, F is proportional to 1/r squared, so F(2r)/F(r) = 1/4. The wording preserves the centre-to-centre distance condition and the same physical meaning. The corresponding memory card changes with it. All other narration and parsed scene visuals are unchanged.'
 if r['lesson']=='phys-y12-m5-v23':explanation='Narration is unchanged. The final chip changes from "determine" to "set" and adds "the", matching the next lesson question as recorded in the 24 November audit. No teaching mechanism or response opportunity changes.'
 text=f'''# {r['lesson']}: 24 November prevoice refresh check

Source SHA256 `{r['sourceSha256']}`. Previous prepared design SHA256 `{r['beforeSha256']}`.

Codex error-only check of the changes before re-preparation, under the owner's instruction to use current designs. Original independent learning and science reviews are retained. This check does not claim a new full lesson learning review, listening pass or built playback approval.

{explanation}

Parsed {r['sceneCount']} scenes and {r['characters']} narration characters (previously {r['beforeCharacters']}). No U+2014. The existing preparer checks exact scene strings, bold-cue order, holds and recording-stage evidence after generation. Exact change details: `work/brief262/prevoice-refresh-2026-11-24/comparison.json`. Design-fix authority: `docs/production/claude-pm/phys-y12-audit-fixes-2026-11-24.md`.

Original review files:
'''
 for e in old['readiness']['existingReviews']:text+=f"- `{e['path']}`, current SHA256 `{sha(e['path'])}` (old preparation recorded `{e['sha256']}`).\n"
 text+='\nResult: 0 blockers, 0 should fix. Recording preparation may refresh these checked changes. Human listening and exact voiced preview remain pending.\n'
 assert chr(0x2014) not in text;report.write_text(text,encoding='utf-8')
 for p in Path('work/brief259/physics/P5',r['lesson']).glob('*.json'):copy(p)
 for key in ['lessonInput','manifest','recordingBrief']:
  p=Path(r['preparedRow'][key]);copy(p);p.unlink()
save(W/'archive-index.json',archived)
save(W/'review-binding-differences.json',reviewBindingDifferences)
print(json.dumps({'changedPendingLessons':sum(r['changed'] for r in rows),'archivedFiles':len(archived),'cachedMediaFilesPreserved':len(media),'speechRequests':0}))
