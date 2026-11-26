// Brief265: refresh the approved hook only, preserving all other measured scenes.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash,randomUUID} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {checkProductionBrief} from './lib/production-brief.mjs';
import {googleQuotaDay,requestsInGoogleQuotaDay} from './lib/google-request-budget.mjs';
import {assessGoogleTake,googleWavSeconds} from './lib/google-runon-gate.mjs';
import {explainerCaptionCues,toSrt,toVtt} from './lib/explainer-captions.mjs';
const W='work/brief265',B='docs/production/claude-pm',LOCK='work/brief245/root/stills.lock';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8').replace(/^\uFEFF/,''));
const hash=x=>createHash('sha256').update(x).digest('hex'),sha=p=>hash(fs.readFileSync(p));
const save=(p,v)=>{fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');};
const backup=p=>{assert(!fs.existsSync(p+'.before-brief265'));fs.copyFileSync(p,p+'.before-brief265');};
const side=(p,k)=>p.replace(/\.wav$/,'.'+k+'.json');
const ledger=()=>fs.readFileSync('work/google-tts-requests.jsonl','utf8').trim().split('\n').filter(Boolean).map(JSON.parse);
const prep='work/brief259/physics/P5-preparation.json',rows=read(prep),diffs=[];
assert(!fs.existsSync(W+'/hand-in.json'),'Already completed; inspect hand-in rather than repeat');
for(const number of ['09','11']){
 const row=rows.find(r=>r.key==='p-y12-m5-v'+number),raw=fs.readFileSync(row.source,'utf8');
 const heads=[...raw.matchAll(/^### (\d+[a-z]?)\. ([^\r\n]+)/gm)];
 const input=read(row.lessonInput),manifest=read(row.manifest),audit=read(row.sourceAudit);
 const scenes=heads.map((h,i)=>{const p=raw.slice(h.index,heads[i+1]?.index??raw.length).split(/^## /m)[0];const q=p.split(/\r?\n/).filter(l=>l.startsWith('> ')).map(l=>l.slice(2).trim()).join(' ');return {text:q.replaceAll('**',''),boldCues:[...q.matchAll(/\*\*([^*]+)\*\*/g)].map(m=>m[1]),visual:p.split('Visual:')[1]?.trim()??''};});
 assert.equal(scenes.length,input.scenes.length);assert(!raw.includes('\u2014'));
 const changes=[];for(let i=0;i<scenes.length;i++)if(scenes[i].text!==input.scenes[i].voiceover.text){assert.equal(input.scenes[i].id,'hook');changes.push({id:'hook',before:input.scenes[i].voiceover.text,after:scenes[i].text});}
 assert(changes.length<=1);if(number==='09')assert.equal(changes.length,1);
 diffs.push({lesson:row.lesson,sourceSha256:sha(row.source),changes,allOtherSceneTextsIdentical:true});
 if(!changes.length){assert.equal(read(row.measuredOutput).scenes[0].voiceover.text,scenes[0].text);continue;}
 for(const p of [row.lessonInput,row.manifest,row.recordingBrief,row.sourceAudit])backup(p);
 row.sourceSha256=sha(row.source);row.characters=scenes.reduce((n,s)=>n+s.text.length,0);
 input.sourceDesignSha256=row.sourceSha256;manifest.sourceSha256=row.sourceSha256;audit.sourceSha256=row.sourceSha256;audit.characters=row.characters;
 for(let i=0;i<scenes.length;i++){input.scenes[i].voiceover.text=scenes[i].text;manifest.scenes[i].text=scenes[i].text;Object.assign(audit.scenes[i],scenes[i],{characters:scenes[i].text.length});}
 save(row.lessonInput,input);save(row.manifest,manifest);save(row.sourceAudit,audit);
 const ep=W+'/recording-source-check.json';save(ep,{authority:'Brief265 owner-approved first-sentence replacement only',diff:diffs.at(-1),priorReviews:audit.readiness.existingReviews,humanListening:'pending'});
 const brief=read(row.recordingBrief);brief.source.lessonSha256=sha(row.lessonInput);
 for(const field of ['scriptReview','studentLearningReview'])brief[field].evidence={path:ep,sha256:sha(ep)};
 save(row.recordingBrief,brief);
 const gate=checkProductionBrief(process.cwd(),row.recordingBrief,{stage:'recording',expectedLessonPath:row.lessonInput});save(W+'/recording-gate.json',gate);assert(gate.ready,JSON.stringify(gate.blockers));
}
backup(prep);save(prep,rows);save(W+'/preparation-diff.json',diffs);
const row=rows.find(r=>r.key==='p-y12-m5-v09'),original=read(row.measuredOutput),old=original.scenes[0],fresh=read(row.lessonInput).scenes[0];
const oldAudio=old.voiceover.audioFile,oldSeconds=googleWavSeconds(oldAudio),oldHash=sha(oldAudio);
assert(!fs.existsSync(LOCK)&&!fs.existsSync('out/explainer/.stills-lock'),'Audio/render lock occupied');
const token=randomUUID();fs.mkdirSync(LOCK);save(LOCK+'/owner.json',{brief:265,pid:process.pid,token});
try{
 const day=googleQuotaDay(),start=ledger().length;assert(requestsInGoogleQuotaDay(ledger()).length+2<=99);
 let accepted;const attempts=[];
 for(let n=1;n<=2;n++){
  assert.equal(googleQuotaDay(),day);const dir=W+'/attempt'+n;assert(!fs.existsSync(dir));
  const audio=dir+'/hook.wav';save(dir+'/input.json',{id:original.id,fps:30,scenes:[fresh]});
  save(dir+'/manifest.json',{...read(row.manifest),scenes:[{id:'hook',text:fresh.voiceover.text,audioFile:audio}]});
  const fd=fs.openSync(dir+'/generation.log','a');const before=ledger().length;
  const p=spawnSync(process.execPath,['scripts/generate-google-audio.mjs',dir+'/manifest.json',dir+'/input.json',dir+'/measured.json'],{windowsHide:true,env:{...process.env,GOOGLE_TTS_BATCH_MODE:'0',GOOGLE_TTS_CAPTURE_ONLY:'0',GOOGLE_TTS_REQUEST_BUDGET:'1',GOOGLE_TTS_CACHE_ROOT:dir+'/cache'},stdio:['ignore',fd,fd]});fs.closeSync(fd);
  const result={attempt:n,exitCode:p.status,requests:ledger().length-before};assert(result.requests<=1);
  if(p.status!==0){save(dir+'/result.json',result);throw Error('Generation stopped. Inspect '+dir+'/generation.log before any retry.');}
  const measured=read(dir+'/measured.json');result.gate=assessGoogleTake(measured.scenes[0]);save(dir+'/result.json',result);attempts.push(result);
  if(result.gate.pass){accepted={audio,scene:measured.scenes[0],gate:result.gate};break;}
 }
 assert(accepted,'Two failed gates; old take retained');
 const next=structuredClone(original),quiet=old.durationInFrames-old.voiceover.endFrame;
 next.scenes[0]={...accepted.scene,voiceover:{...accepted.scene.voiceover,audioFile:oldAudio},durationInFrames:accepted.scene.voiceover.endFrame+quiet};
 for(let i=1;i<original.scenes.length;i++)assert.deepEqual(original.scenes[i],next.scenes[i]);
 assert.equal(next.scenes[0].holdSeconds,old.holdSeconds);assert.equal(next.scenes.at(-1).durationInFrames,original.scenes.at(-1).durationInFrames);
 const dir=path.dirname(row.measuredOutput),vp=dir+'/validation-brief259.json',validation=read(vp),alignment=read(side(accepted.audio,'alignment'));
 const newValidation=structuredClone(validation),hook=newValidation.scenes.find(s=>s.id==='hook');
 hook.cues=read(row.sourceAudit).scenes[0].boldCues.map(text=>{const at=fresh.voiceover.text.indexOf(text);assert(at>=0);return {text,start:alignment.character_start_times_seconds[at],end:alignment.character_end_times_seconds[at+text.length-1]};});
 Object.assign(hook,{seconds:googleWavSeconds(accepted.audio),durationInFrames:next.scenes[0].durationInFrames,runOn:accepted.gate,humanListening:'pending'});
 const caps=explainerCaptionCues(next),totalSeconds=next.scenes.reduce((n,s)=>n+s.durationInFrames,0)/30;assert(totalSeconds<570);
 const report={brief:265,quotaDay:day,requests:ledger().length-start,oldSeconds,newSeconds:hook.seconds,oldAudioSha256:oldHash,newAudioSha256:sha(accepted.audio),gate:accepted.gate,attempts,measuredSha256:hash(JSON.stringify(next,null,2)+'\n'),allOtherScenesCuesHoldsAndNotesIdentical:true,v11:'Already voiced with current neutral hook by P5; no request or invalidation needed',humanListening:'pending'};
 save(W+'/word-time-diff.json',report);Object.assign(newValidation,{sourceSha256:row.sourceSha256,measuredSha256:report.measuredSha256,totalSeconds,brief265:report});
 assert(!fs.existsSync(dir+'.before-brief265'));fs.cpSync(dir,dir+'.before-brief265',{recursive:true,errorOnExist:true,force:false});
 for(const k of [null,'alignment','generation']){const dest=k?side(oldAudio,k):oldAudio;fs.renameSync(dest,dest+'.before-brief265');fs.copyFileSync(k?side(accepted.audio,k):accepted.audio,dest);}
 save(row.measuredOutput,next);save(vp,newValidation);save(dir+'/validation.json',newValidation);
 const cd=dir+'/captions-brief265';fs.mkdirSync(cd);fs.writeFileSync(cd+'/captions.srt',toSrt(caps.cues));fs.writeFileSync(cd+'/captions.vtt',toVtt(caps.cues));save(cd+'/caption-export.json',{lessonSha256:sha(row.measuredOutput),timeline:caps.timeline,cueCount:caps.cues.length,humanListening:'pending'});
 save(W+'/hand-in.json',report);fs.appendFileSync(B+'/status.md','\n### Brief 265: hook refresh (25 November 2026)\n\n'+JSON.stringify(report,null,2)+'\n\nEvidence: work/brief265/preparation-diff.json, word-time-diff.json and hand-in.json. Old audio, sidecars and measured files retained with .before-brief265. Human listening pending.\n');
 console.log(JSON.stringify(report));
}finally{assert.equal(read(LOCK+'/owner.json').token,token);fs.unlinkSync(LOCK+'/owner.json');fs.rmdirSync(LOCK);}
