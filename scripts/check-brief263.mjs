// Finish current review bindings and existing prevoice checks. Never requests speech.
import fs from 'node:fs';import assert from 'node:assert/strict';import {createHash} from 'node:crypto';import {spawnSync} from 'node:child_process';
import {checkProductionBrief} from './lib/production-brief.mjs';
const W='work/brief236',O='work/brief263',read=p=>JSON.parse(fs.readFileSync(p,'utf8').replace(/^\uFEFF/,'')),sha=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex'),save=(p,v)=>fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');
const checks=read(O+'/check-results.json'),comparisons=read(O+'/source-comparison.json'),results=[];
const ledger=fs.readFileSync('work/google-tts-requests.jsonl','utf8').trim().split('\n').filter(Boolean).map(JSON.parse);
for(const c of checks){
 if(c.shouldFix||c.action.startsWith('held'))continue;
 const r=comparisons.find(r=>r.lesson===c.lesson),row=read(`${W}/wave${r.wave}-preparation.json`).find(x=>x.lesson===c.lesson),dir=`${W}/wave${r.wave}/${c.lesson}`;
 assert(row);assert.equal(sha(row.source),c.sourceSha256);
 const a=read(dir+'/source-audit.json');a.latestCheckSha256=sha(c.review);save(dir+'/source-audit.json',a);
 const evidence=read(dir+'/recording-source-check.json');for(const e of evidence.reviews)e.sha256=sha(e.path);save(dir+'/recording-source-check.json',evidence);
 const b=read(row.recordingBrief);b.scriptReview.evidence.sha256=sha(dir+'/recording-source-check.json');b.studentLearningReview.evidence.sha256=b.scriptReview.evidence.sha256;save(row.recordingBrief,b);
 const gate=checkProductionBrief(process.cwd(),row.recordingBrief,{stage:'recording',expectedLessonPath:row.lessonInput});assert(gate.ready);save(dir+'/recording-gate.json',gate);
 const aggPath=`${W}/wave${r.wave}-source-audit.json`,agg=read(aggPath),item=agg.find(x=>x.lesson===c.lesson);item.latestCheckSha256=a.latestCheckSha256;save(aggPath,agg);
 const prior=dir+'/prevoice-file-gate.json';
 if(fs.existsSync(prior)&&read(prior).sourceSha256!==row.sourceSha256){
  assert(!ledger.some(e=>e.lesson===row.lesson),'Do not reset a paid retry history');
  const retired=prior+'.superseded-brief263';assert(!fs.existsSync(retired));fs.renameSync(prior,retired);
 }
 const p=spawnSync(process.execPath,[W+'/prevoice-file-gate.mjs',String(r.wave),c.lesson],{encoding:'utf8',windowsHide:true,env:{...process.env,GOOGLE_TTS_BATCH_MODE:'1'}});
 fs.writeFileSync(dir+'/prevoice-brief263.log',(p.stdout??'')+(p.stderr??''));const pre=read(prior);
 const quotaHold=p.status!==0&&pre.quotaFits===false&&String(p.stderr).includes('Whole lesson exceeds daily99request cap');assert(p.status===0||quotaHold,dir+'/prevoice-brief263.log');
 results.push({lesson:c.lesson,wave:r.wave,characters:r.characters,scenes:r.sceneCount,sourceSha256:c.sourceSha256,recordingGateReady:true,prevoicePass:p.status===0,quotaHold,action:c.action,review:c.review});
}
save(O+'/preparation.json',{speechRequests:0,results});console.log(JSON.stringify({prepared:results.length,wave7:results.filter(r=>r.wave===7).length,prevoicePassed:results.filter(r=>r.prevoicePass).length,speechRequests:0}));
