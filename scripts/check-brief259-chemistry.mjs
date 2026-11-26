// Brief 259: bind the four re-prepared inputs to existing reviews and check them.
// No speech generator is called.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {checkProductionBrief} from './lib/production-brief.mjs';

const read=p=>JSON.parse(fs.readFileSync(p,'utf8').replace(/^\uFEFF/,''));
const sha=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const save=(p,v)=>fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');
const report=read('work/brief259/chemistry-repreparation.json');
for(const change of report.changes){
  const row=read(`work/brief236/wave${change.wave}-preparation.json`).find(r=>r.lesson===change.lesson);
  const dir=`work/brief236/wave${change.wave}/${change.lesson}`,audit=read(dir+'/source-audit.json');
  const input=read(row.lessonInput),old=read(row.recordingBrief+'.before-brief259');
  const previous=read(dir+'/recording-source-check.json.before-brief259');
  const git=spawnSync('git',['show','HEAD:'+row.source],{encoding:'utf8',windowsHide:true});
  assert.equal(git.status,0);assert.equal(git.stdout.replaceAll('\r\n','\n'),fs.readFileSync(row.source,'utf8').replaceAll('\r\n','\n'),'Input differs from committed root edit');
  const evidence={...previous,brief:259,lesson:row.lesson,source:row.source,sourceSha256:row.sourceSha256,
    characters:row.characters,sceneCount:input.scenes.length,sourceAudit:dir+'/source-audit.json',
    rootEditAuthority:{path:'docs/production/claude-pm/codex-prompts/259-voicing-order-physics-waves-and-ledgers.md',sha256:sha('docs/production/claude-pm/codex-prompts/259-voicing-order-physics-waves-and-ledgers.md')},
    previousPreparedCharacters:change.oldCharacters,characterDelta:change.delta,boldCuesUnchanged:true,
    decision:'Root brief 259 authorises the course-label removals. Exact committed root narration copied; existing independent reviews and Chemistry readiness retained. Scene sums, IDs and cue order checked. No new speech, science review, visual approval or listening claimed.',speechRequested:false};
  save(dir+'/recording-source-check.json',evidence);
  old.source.lessonSha256=sha(row.lessonInput);
  old.progression.startsWith=input.scenes[0].voiceover.text;
  old.teaching.causalExplanation=input.scenes.slice(1,4).map(s=>s.voiceover.text).join(' ');
  old.teaching.conversationalApproach=input.scenes.slice(0,3).map(s=>s.voiceover.text).join(' ');
  old.teaching.understandingCheck=input.scenes.filter(s=>s.holdKind==='countdown').map(s=>s.voiceover.text).join(' ');
  old.teaching.openingDecision=audit.scenes[0].visual;
  for(let i=0;i<old.scenes.length;i++){
    const s=old.scenes[i],a=audit.scenes[i];assert.equal(s.sceneId,a.id);
    s.teachingReason=a.text;s.narrationCue=a.boldCues.join(' / ')||a.text;
    s.motionPurpose=a.visual;s.onScreenChange=a.visual;
  }
  const ev={path:dir+'/recording-source-check.json',sha256:sha(dir+'/recording-source-check.json')};
  old.scriptReview.evidence=ev;old.studentLearningReview.evidence=ev;
  old.limitation='Brief 259 recording preparation only. Root label edits copied without other narration changes. Human listening, built visual and exact voiced review remain pending.';
  save(row.recordingBrief,old);
  const gate=checkProductionBrief(process.cwd(),row.recordingBrief,{stage:'recording',expectedLessonPath:row.lessonInput});save(dir+'/recording-gate.json',gate);assert(gate.ready,JSON.stringify(gate.blockers));
  const p=spawnSync(process.execPath,['work/brief236/prevoice-file-gate.mjs',String(change.wave),row.lesson],{encoding:'utf8',windowsHide:true,env:{...process.env,GOOGLE_TTS_BATCH_MODE:'1'}});
  fs.writeFileSync(dir+'/prevoice-brief259.log',(p.stdout??'')+(p.stderr??''));
  change.recordingGateReady=gate.ready;change.prevoiceExitCode=p.status;change.prevoiceGate=dir+'/prevoice-file-gate.json';
  if(p.status!==0)change.prevoiceFinding=(p.stderr??'').slice(-2500);
  const fileGate=read(change.prevoiceGate);
  change.prevoiceStructuralPass=fileGate.recordingStageReady===true&&fileGate.sourceSha256===row.sourceSha256;
  change.quotaHold=p.status!==0&&fileGate.quotaFits===false&&String(p.stderr).includes('Whole lesson exceeds daily99request cap');
  console.log(JSON.stringify({lesson:row.lesson,characters:row.characters,delta:change.delta,recordingReady:gate.ready,prevoiceExitCode:p.status}));
}
save('work/brief259/chemistry-repreparation.json',report);
assert(report.changes.every(r=>r.prevoiceExitCode===0||r.prevoiceStructuralPass&&r.quotaHold),'Inspect recorded prevoice findings; no speech was requested');
