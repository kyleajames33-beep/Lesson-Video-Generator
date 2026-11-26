"""Write per-design status and preserve explicit holds. Does not request speech."""
from pathlib import Path
import json,re,hashlib,sys
B=Path('docs/production/claude-pm')
def load(p):return json.loads(Path(p).read_text(encoding='utf8'))
def save(p,v):p=Path(p);p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(v,indent=2,ensure_ascii=True)+'\n',encoding='utf8')
plan=load('work/brief267/next-three-nights.json');dates={r['lesson']:n['date'] for n in plan['nights'] for r in n.get('lessons',[])}
status=['\n### Briefs 267 to 270: HMS checks and recording preparation (25 November 2026)\n',
'No speech requested. 82 prepared designs pass the recording gate. Two Module 1 designs stop with findings. The existing recording gate returns no duration estimate; the declared source estimate is reported separately. All 12 queue and Chemistry preparation tests pass (`work/brief267/tests.tap`). Human listening remains pending.\n']
for b in range(267,271):
 p=f'work/brief{b}/hand-in.json';d=load(p)
 for r in d['results']:
  number=int(r['lesson'][-2:]);night=dates.get(r['lesson'])
  if not r['prepared']:night='held for root source repair'
  elif not night:night='2026-11-28, if earlier nights succeed' if b==267 else 'after HMS Module '+str(b-267)+'; date held until earlier Module 1 findings are resolved'
  r['plannedVoicingNight']=night
  status += [f"\n#### Brief {b}: {r['lesson']}\n",f"Check: {r['blockers']} blockers, {r['shouldFix']} should fix. Source SHA-256: `{r['sourceSha256']}`. Prepared: {'yes' if r['prepared'] else 'no'}. Planned night: {night}.\n",f"{r['characters']} characters, {r['scenes']} scenes; source estimate {r['sourceEstimateSeconds']} s; recording gate duration estimate: not provided. Check: `{r['review']}`. Details and missing-plate fallbacks: `work/brief{b}/hand-in.json`.\n"]
 save(p,d)
 if b in [269,270]:
  title='Year 12 Module '+str(b-266)+' science check resolved'
  raw=(B/'hms-status.md').read_text(encoding='utf8');section=raw.split('## '+title,1)[1].split('\n## ',1)[0]
  release='\n'.join(l for l in section.splitlines() if 'Release re-check list' in l)
  out=B/'checks'/f'brief{b}-release-rechecks.md';out.write_text('# Release rechecks for brief '+str(b)+'\n\nCopied from the current hms-status.md on 25 November 2026. These are release checks, not completed checks now.\n\n'+release+'\n',encoding='utf8')
  status += [f'\nRelease rechecks: `checks/brief{b}-release-rechecks.md`.\n']
status += ['\nThe Module 4 concussion and WADA source checks pass: `checks/brief270-official-source-checks.md`. The current guideline PDF itself was read. No listening or release approval follows.\n']

for b in [271,272]:
 rows=load(f'work/brief{b}/source-inventory.json');results=[]
 status += [f'\n### Brief {b}: source preflight holds (25 November 2026)\n',
'Official facts: `checks/maths-standard-y11-official-facts.md`. No design edits or speech. These are failed count preflights, not completed maths approvals. Full arithmetic, joins and anchor checks remain pending.\n']
 for r in rows:
  key=Path(r['design']).stem.replace('math-s11-','');bad=[x for x in r['issues'] if x['code'] in ['count-mismatch','em-dash']]
  assert bad,'Inspect a passing source rather than place an unsupported hold'
  report=B/'checks'/f'm-s11-{key}-maths-check.md'
  additions=''
  if b==272 and key in ['d13','d19']:additions='\nThe revised bus and drag-stop arithmetic passes independently in work/brief272/core-data-results.json. This includes all 151 drag stops; population sigma and halves-method quartiles are used. That partial arithmetic check does not clear this source count or the remaining lesson checks.\n'
  report.write_text(f"# math-s11-{key}: maths-check preflight hold\n\n25 November 2026. Source SHA-256: `{r['sourceSha256']}`.\n\nResult: 0 blockers, {len(bad)} should fix. No recording approval.\n\n"+'\n'.join('- '+json.dumps(x,ensure_ascii=True) for x in bad)+f"\n\nThe narration count must be the sum of the {r['sceneCount']} scene strings, which is {r['characters']}. The declared count appears to include spaces between scenes. No source or narration was edited. Full arithmetic, syllabus-description, playlist-join and anchor checks remain pending. Evidence: work/brief{b}/source-inventory.json.\n"+additions+'\nOfficial facts and root-application holds: checks/maths-standard-y11-official-facts.md. Human listening pending.\n',encoding='utf8')
  results.append({'lesson':'math-s11-'+key,'sourceSha256':r['sourceSha256'],'characters':r['characters'],'review':report.as_posix(),'status':'held at count preflight; full maths check incomplete','findings':bad,'prepared':False,'speechRequests':0})
  status += [f'\n#### Brief {b}: math-s11-{key}\n',f"Source SHA-256 `{r['sourceSha256']}`. Count preflight: {len(bad)} should fix; scene-string sum {r['characters']}. Prepared: no. Voice: held. Check: `{report.relative_to(B).as_posix()}`. Full maths and joins remain pending.\n"]
 save(f'work/brief{b}/hand-in.json',{'brief':b,'results':results,'speechRequests':0,'fullMathsReview':'pending','officialFacts':'docs/production/claude-pm/checks/maths-standard-y11-official-facts.md'})
status += ['\nBrief272 extra checks: d02 first shows the full label "140 live nearby" in scene 12. The 12/8 sleep subsets recombine exactly into the 20-value sample. d13 now teaches that extremes change sigma; Year 12 z02 and z03 retain compatible calculator/spread recalls. Population sigma and the d19 half-up display rounding are checked in `work/brief272/check-core-data.py`. The remaining recurring-data and full calculation/joins checks are not claimed complete.\n']

row=next(r for r in load('work/brief259/physics/P5-preparation.json') if r['lesson']=='phys-y12-m5-v14')
save('work/brief273/hand-in.json',{'brief':273,'source':row['source'],'sourceSha256':row['sourceSha256'],'check':'docs/production/claude-pm/checks/p-y12-m5-v14-brief273-error-check.md','checkResult':'0 blockers, 0 should fix','characters':row['characters'],'prepared':True,'queuePosition':'after v15, last in P5','plannedNight':dates.get(row['lesson']),'requestsThisBrief':0,'gate':'recording ready; take gate pending','measuredSha256':None,'hold':'83 requests already used in the current quota window; the remaining P5 lessons must precede v14 and exceed the remaining allowance','humanListening':'pending'})
status += [f"\n### Brief 273: banked tracks prepared and queued (25 November 2026)\n\nCurrent-source error check: 0 blockers, 0 should fix. Source SHA-256 `{row['sourceSha256']}`. {row['characters']} characters. Prepared into `lessons/p-y12-m5-v14/` and appended after v15 in P5. Dry-run night: {dates.get(row['lesson'])}, conditional on earlier P5 completion and request availability. Requests for this brief: 0. Recording gate passes; speech gate and measured SHA-256 pending. Current quota window already has 83 requests; all earlier P5 work retains priority. Evidence: `work/brief273/hand-in.json`. Human listening pending.\n"]
if '--refresh-only' not in sys.argv:
 with (B/'status.md').open('a',encoding='utf8') as f:f.write('\n'.join(status))
print(json.dumps({'hmsPrepared':82,'hmsHeld':2,'mathsCountHolds':54,'bankedTrack':'prepared, queued, not voiced','speechRequestsThisScript':0}))
