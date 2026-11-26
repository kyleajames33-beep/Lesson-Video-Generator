"""Brief260: strict source comparison and wave7 preparation setup. No speech."""
import hashlib
import json
import re
import shutil
from pathlib import Path

B=Path('docs/production/claude-pm'); W=Path('work/brief260'); W.mkdir(parents=True,exist_ok=True)
def read(p): return json.loads(p.read_text(encoding='utf-8-sig'))
def sha(p): return hashlib.sha256(p.read_bytes()).hexdigest()
def save(p,v):
    p.parent.mkdir(parents=True,exist_ok=True)
    p.write_text(json.dumps(v,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
def backup(p):
    q=Path(str(p)+'.before-brief260'); assert not q.exists(),q
    shutil.copy2(p,q); assert sha(p)==sha(q)

readiness=B/'checks/chem-y11-voicing-readiness.md'; before=readiness.read_bytes(); backup(readiness)
report=[]; prepared=[]; candidates=[]
for n in [18,19,20,22,23,24,25,26,27]:
    lesson=f'chem-y11-m1-v{n}'; key=f'c-y11-m1-v{n}'; source=B/'lessons'/(lesson+'.md')
    check=B/'checks'/(key+('-upgrade-error-check.md' if n==19 else '-rev2-error-check.md'))
    text=source.read_text(encoding='utf-8-sig'); review=check.read_text(encoding='utf-8-sig')
    expected=re.search(r'SHA256 `([a-f0-9]{64})`',review)[1]
    heads=list(re.finditer(r'^### (\d+[a-z]?)\. ([^\r\n]+)',text,re.M))
    order=[v.strip() for v in re.search(r'^In order[^\r\n]*:\s*([^\r\n]+)',text,re.M)[1].replace('`','').rstrip('.').split(',')]
    assert len(heads)==len(order)
    scenes=[]
    for i,h in enumerate(heads):
        part=re.split(r'^## ',text[h.end():heads[i+1].start() if i+1<len(heads) else len(text)],maxsplit=1,flags=re.M)[0]
        quoted=' '.join(x[2:].strip() for x in part.splitlines() if x.startswith('> ')); speech=quoted.replace('**','')
        cues=re.findall(r'\*\*([^*]+)\*\*',quoted);cursor=0
        for cue in cues:
            at=speech.find(cue,cursor);assert at>=0;cursor=at+len(cue)
        hold=re.search(r'Hold about (\d+(?:\.\d+)?)\s*(?:s\b|seconds?)',part,re.I)
        scenes.append({'number':h[1],'id':order[i],'title':h[2],'text':speech,'characters':len(speech),
            'boldCues':cues,'visual':part.split('Visual:',1)[-1].strip(),'explicitHoldSeconds':float(hold[1]) if hold else None})
    assert '\u2014' not in text
    inventory=read(Path(f'work/brief237/v{n}-source-inventory.json'))
    diffs=[]
    for old,current in zip(inventory['scenes'],scenes):
        changes=[]
        if old['text']!=current['text']: changes.append('narration')
        if old.get('cues',[])!=current['boldCues']: changes.append('bold cues')
        if old['visual'].strip()!=current['visual'].strip(): changes.append('visual instructions')
        if changes: diffs.append({'scene':current['id'],'number':current['number'],'changed':changes,
            'oldText':old['text'],'currentText':current['text'],
            'oldVisual':old['visual'].strip(),'currentVisual':current['visual'].strip()})
    ready=sha(source)==expected
    row={'lesson':lesson,'buildKey':key,'source':source.as_posix(),'sourceSha256':sha(source),
        'reviewedSourceSha256':expected,'latestCheck':check.as_posix(),'latestCheckSha256':sha(check),
        'characters':sum(s['characters'] for s in scenes),'sceneCount':len(scenes),'ready':ready,
        'differingScenesAgainstBrief237':diffs,
        'reason':'Exact latest checked source matches' if ready else 'STOP: current file hash differs from the source named by latest check, even where narration is unchanged',
        'builderItem':'Scene5 heat-slider onset is a builder note; no narration change required' if n==25 else None}
    report.append(row)
    candidates.append({**row,'scenes':scenes})
    save(W/'candidates'/lesson/'source-comparison.json',{**row,'scenes':scenes})
    if ready: prepared.append({**row,'holdsLine':next(l for l in text.splitlines() if l.startswith('Holds:')),'scenes':scenes})

add=['','## Brief260 readiness addendum (21 November2026)','',
    'The nine Module1 repairs supersede the historical 7 November held decision for the repair findings. Brief260 requires an exact match to the latest checked source before a design enters wave7. The source check below admits one design and stops eight source mismatches. A zero-blocker repair review alone does not bypass that stop rule.','',
    '| Lesson | Latest check | Exact current source match | Wave7 |','| --- | --- | --- | --- |']
for r in report:
    add.append(f"| {r['lesson']} | {Path(r['latestCheck']).name} | {'Y' if r['ready'] else 'N'} | {'Ready' if r['ready'] else 'Held: source hash mismatch'} |")
add+=['','v19: brief242 confirms the oxide-ion source repair, with 0 blockers and 0 should-fix items. Its current source hash matches exactly.',
    'v25: the scene5 heat-slider onset is a builder item with no narration change. The current file still needs the source-mismatch stop resolved.',
    'All nine repairs have review evidence; eight current files do not match the hashes named in their brief237 checks. Unchanged narration is reported separately and is not treated as an exact source pass. Details and differing scenes: `work/brief260/source-comparisons.json`. No new speech, independent review or listening pass is claimed.','']
readiness.write_bytes(before+('\n'.join(add)).encode('utf-8'))
assert readiness.read_bytes().startswith(before)
for r in prepared:
    r.update({'readinessPath':readiness.as_posix(),'readinessSha256':sha(readiness),
        'readinessRow':next(l for l in add if l.startswith('| '+r['lesson']+' |'))})
    save(Path('work/brief236/wave7')/r['lesson']/'source-audit.json',r)
save(Path('work/brief236/wave7-source-audit.json'),[{k:v for k,v in r.items() if k!='scenes'} for r in prepared])
save(W/'source-comparisons.json',{'rows':report,'ready':len(prepared),'held':len(report)-len(prepared),'speechRequests':0})
save(Path('work/brief236/wave7-status.json'),{'wave':7,'pendingReadiness':[r['lesson'] for r in report if not r['ready']],
    'reason':'Brief260 exact-source mismatch stop','sourceComparisons':'work/brief260/source-comparisons.json'})

# Use the existing wave1 preparation method, retaining its schema and gates.
method=Path('work/brief236/prepare-wave1.mjs').read_text(encoding='utf-8-sig').replace('wave1','wave7')
method=method.replace("const checks=['learning-review','science-check']", "const checks=['learning-review','science-check','upgrade-error-check']")
method=method.replace('Root readiness decision34 accepts count/status/cue repairs despite older error-check hashes. Current scene sums match readiness;no em dashes. Partial quoted visual cues manually inspected in v01,v03,v08,v09,ws-v02 and occur within the longer spoken phrases.',
    'Brief260 requires exact latest checked source hashes. The source matches its brief242 error check; earlier independent reviews and current scene sums/cue order are retained. No new manual visual or learning review claimed.')
method=method.replace('root readiness decision34','root brief260 and exact checked source')
method=method.replace("save(W+'/backup/verified-backups.json',backups);", "fs.writeFileSync(W+'/backup/verified-backups.json',JSON.stringify([...read(W+'/backup/verified-backups.json'),...backups],null,2)+'\\n');")
backup(Path('work/brief236/backup/verified-backups.json'))
(W/'prepare-wave7.mjs').write_text('// Brief260 adaptation of the existing wave1 preparation method. No speech.\n'+method,encoding='utf-8')
print(json.dumps({'ready':len(prepared),'held':len(report)-len(prepared),'candidates':[{'lesson':r['lesson'],'ready':r['ready'],'characters':r['characters'],'differentScenes':[s['number'] for s in r['differingScenesAgainstBrief237']]}for r in report]}))
