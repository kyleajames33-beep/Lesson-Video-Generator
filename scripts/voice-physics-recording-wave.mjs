// Scheduled Physics adapter for the brief236 scene/manifest/measured workflow.
// Without --execute this script only reports readiness. No key is loaded here.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {checkProductionBrief} from './lib/production-brief.mjs';
import {googleQuotaDay,requestsInGoogleQuotaDay} from './lib/google-request-budget.mjs';
import {estimateVoiceRow,readVoiceJson} from './lib/nightly-voice-plan.mjs';
import {assessGoogleTake,googleWavSeconds} from './lib/google-runon-gate.mjs';
import {decodePcm} from './lib/media-tools.mjs';

const wave=process.argv[2];assert(/^(?:P[5-8]|H(?:11M[12]|12M[34]))$/.test(wave));
const hmsBrief={H11M1:267,H11M2:268,H12M3:269,H12M4:270}[wave];
const W=hmsBrief?'work/brief'+hmsBrief:'work/brief259/physics';
const base=hmsBrief?W:W+'/'+wave;
const rows=readVoiceJson(hmsBrief?W+'/preparation.json':W+'/'+wave+'-preparation.json'),status=readVoiceJson(hmsBrief?W+'/status.json':W+'/'+wave+'-status.json');
const aggregate=hmsBrief?W+'/voice-hand-in.json':W+'/'+wave+'-hand-in.json';
const copyVerified=(from,to)=>{if(fs.existsSync(to)){assert.equal(sha(to),sha(from),'Existing delivery differs: '+to);return;}fs.mkdirSync(path.dirname(to),{recursive:true});fs.copyFileSync(from,to);assert.equal(sha(to),sha(from));};
const sha=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const save=(p,v)=>{fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');};
function signal(audio){
  const pcm=decodePcm(audio),seconds=pcm.length/96000;let peak=0,fullScaleSamples=0,quietStart=null;const silences=[];
  for(let at=0;at<pcm.length;at+=960){let sum=0,n=0;for(let j=at;j<Math.min(at+960,pcm.length);j+=2){const v=Math.abs(pcm.readInt16LE(j));peak=Math.max(peak,v);if(v>=32760)fullScaleSamples++;sum+=v*v;n++;}const quiet=Math.sqrt(sum/n)/32768<.001;if(quiet&&quietStart===null)quietStart=at/96000;if(!quiet&&quietStart!==null){if(at/96000-quietStart>=1.5)silences.push({start:quietStart,end:at/96000});quietStart=null;}}
  if(quietStart!==null&&seconds-quietStart>=1.5)silences.push({start:quietStart,end:seconds});
  return {peakFraction:peak/32768,fullScaleSamples,silencesAtLeast1_5s:silences};
}
if(process.argv[3]!=='--execute'){console.log(JSON.stringify({wave,ready:rows.length,pending:status.pendingReadiness,speechRequests:0}));process.exit(0);}
const day=googleQuotaDay();assert.equal(process.env.GOOGLE_TTS_SCHEDULED_DISPATCH,day,'Scheduled parent required');
assert.equal(readVoiceJson('work/brief245/root/stills.lock/owner.json').token,process.env.GOOGLE_TTS_LOCK_TOKEN,'Parent must own the audio/render lock');
if(!rows.length){console.log('Readiness hold: '+wave);process.exit(3);}
const run=(args,log,env=process.env)=>{const logStart=fs.existsSync(log)?fs.statSync(log).size:0;const fd=fs.openSync(log,'a');const p=spawnSync(process.execPath,args,{windowsHide:true,env,stdio:['ignore',fd,fd]});fs.closeSync(fd);if(p.error||p.status!==0){const e=Error('Stopped at '+args[0]+'. Inspect '+log+'; no automatic request retry.');if(fs.readFileSync(log).subarray(logStart).toString('utf8').includes('GOOGLE_TTS_REPEATED_TIMEOUT:'))e.code='GOOGLE_TTS_REPEATED_TIMEOUT';throw e;}};
const delivered=[];
const timeoutStops=[];
for(const row of rows){
  const dir=base+'/'+row.lesson;
  if(fs.existsSync(dir+'/hand-in.json')){delivered.push(readVoiceJson(dir+'/hand-in.json'));continue;}
  const held=fs.existsSync(dir)&&fs.readdirSync(dir).find(n=>/^timeout-stop-.*[.]json$/.test(n));
  if(held){timeoutStops.push({lesson:row.lesson,evidence:dir+'/'+held});continue;}
  try{
  assert.equal(googleQuotaDay(),day,'quota stop: quota window changed');
  const audit=readVoiceJson(row.sourceAudit),input=readVoiceJson(row.lessonInput),manifest=readVoiceJson(row.manifest);
  assert(audit.readiness.ready,'Source has no current passed readiness review');assert.equal(sha(row.source),row.sourceSha256);assert.equal(audit.sourceSha256,row.sourceSha256);
  assert(!fs.readFileSync(row.source,'utf8').includes('\u2014'));
  assert.equal(input.scenes.length,audit.scenes.length);assert.equal(input.scenes.reduce((n,s)=>n+s.voiceover.text.length,0),row.characters);
  for(const[s,i]of input.scenes.map((s,i)=>[s,i])){assert.equal(s.id,audit.scenes[i].id);assert.equal(s.voiceover.text,audit.scenes[i].text);assert.equal(manifest.scenes[i].text,s.voiceover.text);let cursor=0;for(const cue of audit.scenes[i].boldCues){const at=s.voiceover.text.indexOf(cue,cursor);assert(at>=0);cursor=at+cue.length;}}
  const gate=checkProductionBrief(process.cwd(),row.recordingBrief,{stage:'recording',expectedLessonPath:row.lessonInput});assert(gate.ready,JSON.stringify(gate.blockers));
  const estimate=estimateVoiceRow(row),ledger=fs.existsSync('work/google-tts-requests.jsonl')?fs.readFileSync('work/google-tts-requests.jsonl','utf8').trim().split('\n').filter(Boolean).map(JSON.parse):[];
  const used=requestsInGoogleQuotaDay(ledger).length,gatePath=dir+'/prevoice-file-gate.json',previous=fs.existsSync(gatePath)?readVoiceJson(gatePath):null;
  const checkedAt=previous?.checkedAt??new Date().toISOString();
  const prevoice={lesson:row.lesson,wave,checkedAt,lastCheckedAt:new Date().toISOString(),sourceSha256:row.sourceSha256,
    recordingStageReady:true,characters:row.characters,quotaDay:day,usedRequests:used,neededRequests:estimate.missingScenes,
    batchRequests:estimate.plannedRequests,batchMode:true,quotaFits:used+estimate.plannedRequests<=99,takes:previous?.takes??estimate.takes,currentTakes:estimate.takes,speechRequested:false};
  save(gatePath,prevoice);assert(prevoice.quotaFits,'quota stop: whole lesson exceeds daily99request cap');
  for(const t of estimate.takes.filter(t=>t.needsRequest)){
    const attempts=ledger.filter(e=>e.lesson===row.lesson&&(e.scenes??[e.scene]).includes(t.id)&&(e.textHashes??[e.textHash]).includes(t.textHash)&&e.at>=checkedAt);
    const recoveryPath='work/brief262/timeout-resume-2026-11-24.json';
    const recovery=fs.existsSync(recoveryPath)?readVoiceJson(recoveryPath):null;
    const exclusions=recovery?.lesson===row.lesson&&recovery.sourceSha256===row.sourceSha256?recovery.failedTransportRequestTimes:[];
    if(exclusions.length)for(const proof of recovery.proofs)assert.equal(sha(proof.path),proof.sha256,'Inspected transport evidence changed');
    assert(attempts.filter(e=>!exclusions.includes(e.at)).length<2,'Initial request and permitted retry already attempted: '+t.id);
  }
  const measured=dir+'/voiced/lesson.json';
  if(!fs.existsSync(measured))run(['scripts/generate-google-audio.mjs',row.manifest,row.lessonInput,measured],dir+'/voice.log',
    {...process.env,GOOGLE_TTS_BATCH_MODE:'1',GOOGLE_TTS_REQUEST_BUDGET:String(estimate.missingScenes),GOOGLE_TTS_CAPTURE_ONLY:'0',GOOGLE_TTS_VERIFIED_SOURCE_SHA256:row.sourceSha256});
  const lesson=readVoiceJson(measured),notes=lesson.scenes.find(s=>s.id==='key-notes');assert(notes&&notes.voiceover.endFrame<=1350);notes.durationInFrames=1350;notes.holdSeconds=(1350-notes.voiceover.endFrame)/30;
  fs.writeFileSync(measured,JSON.stringify(lesson,null,2)+'\n');
  const scenes=[];let inputTokens=0,outputTokens=0,costUsd=0;
  for(let i=0;i<lesson.scenes.length;i++){
    const scene=lesson.scenes[i],source=audit.scenes[i];assert.equal(scene.id,source.id);assert.equal(scene.voiceover.text,source.text);
    if(!source.text.trim()){assert.equal(scene.durationInFrames,input.scenes[i].durationInFrames);scenes.push({id:scene.id,silent:true,durationInFrames:scene.durationInFrames});continue;}
    const audio=scene.voiceover.audioFile,a=readVoiceJson(audio.replace(/\.wav$/,'.alignment.json')),g=readVoiceJson(audio.replace(/\.wav$/,'.generation.json')),seconds=googleWavSeconds(audio);
    assert.equal(a.characters.join(''),source.text);assert.equal(scene.voiceover.endFrame,Math.ceil(seconds*30));
    assert.equal(a.characters.length,a.character_start_times_seconds.length);assert.equal(a.characters.length,a.character_end_times_seconds.length);
    assert.equal(g.modelId,'gemini-3.8-flash-tts');assert.equal(g.voiceId,'voice_shdbjsxcrr0a');
    assert.equal(g.textSha256,createHash('sha256').update(source.text).digest('hex'));
    const insertedResponse=input.scenes[i].planningResponseInterval?.afterText?Math.round(input.scenes[i].planningResponseInterval.countdownSeconds*30):0;
    assert.equal(scene.durationInFrames,scene.holdKind==='notes'?1350:scene.voiceover.endFrame+Math.round(input.scenes[i].holdSeconds*30)-insertedResponse);
    let beforeStart=0,beforeEnd=0;for(let j=0;j<a.characters.length;j++){const x=a.character_start_times_seconds[j],y=a.character_end_times_seconds[j];assert(Number.isFinite(x)&&Number.isFinite(y)&&x>=beforeStart-1e-8&&y>=beforeEnd-1e-8&&y>=x&&y<=seconds+.03);beforeStart=x;beforeEnd=y;}
    let cursor=0;const cues=source.boldCues.map(text=>{const at=source.text.indexOf(text,cursor);assert(at>=0);cursor=at+text.length;const start=a.character_start_times_seconds[at],end=a.character_end_times_seconds[at+text.length-1];assert(end>start);return {text,start,end};});
    const words=[...source.text.matchAll(/\S+/g)].map(m=>({word:m[0],start:a.character_start_times_seconds[m.index],end:a.character_end_times_seconds[m.index+m[0].length-1]}));
    const gaps=words.slice(1).map((w,j)=>({seconds:w.start-words[j].end,after:words[j].word,before:w.word})).sort((a,b)=>b.seconds-a.seconds);
    const runOn=assessGoogleTake(scene);assert(runOn.pass);inputTokens+=g.inputTokens??0;outputTokens+=g.outputTokens??0;costUsd+=g.estimatedCostUsd??0;
    scenes.push({id:scene.id,audio,seconds,durationInFrames:scene.durationInFrames,cues,worstWordGap:gaps[0]??null,runOn,...signal(audio),lowScoreWords:g.alignmentQuality?.lowScoreWords??[],humanListening:'pending'});
  }
  const totalSeconds=lesson.scenes.reduce((n,s)=>n+s.durationInFrames,0)/30;
  const worst=scenes.filter(s=>s.worstWordGap).sort((a,b)=>b.worstWordGap.seconds-a.worstWordGap.seconds)[0];
  const validation={lesson:row.lesson,wave,sourceSha256:row.sourceSha256,measuredPath:measured,measuredSha256:sha(measured),characters:row.characters,
    totalSeconds,under570:totalSeconds<570,inputTokens,outputTokens,costUsd,cuesTimingPass:true,scenes,worstWordGap:worst?{scene:worst.id,...worst.worstWordGap}:null,
    humanListening:'pending',builtPreview:'pending',notesFrames:1350,machineChecks:'Source hashes, character alignment and cue bounds, hold durations and independent run-on checks. Human listening and exact built playback pending.'};
  save(dir+'/validation.json',validation);assert(validation.under570,'Measured duration exceeds570s; no automatic narration trim');
  if(!fs.existsSync(dir+'/captions'))run(['scripts/export-explainer-captions.mjs',measured,dir+'/captions'],dir+'/captions.log');
  const caps=readVoiceJson(dir+'/captions/caption-export.json');assert.equal(caps.lessonSha256,validation.measuredSha256);
  const canonical=path.dirname(row.measuredOutput);
  fs.mkdirSync(canonical,{recursive:true});copyVerified(measured,row.measuredOutput);copyVerified(dir+'/validation.json',canonical+'/validation-brief259.json');fs.mkdirSync(canonical+'/captions-brief259',{recursive:true});
  for(const file of ['captions.srt','captions.vtt','caption-export.json'])copyVerified(dir+'/captions/'+file,canonical+'/captions-brief259/'+file);
  const handin={...validation,canonicalMeasuredPath:row.measuredOutput,captionDirectory:canonical+'/captions-brief259',captionCues:caps.cueCount,captionsPass:true};
  // Same mounted-Drive hand-in method as Chemistry, with unique output paths.
  const files=new Set([row.source,row.lessonInput,row.manifest,row.recordingBrief,row.sourceAudit,row.measuredOutput,canonical+'/validation-brief259.json']);
  for(const s of scenes.filter(s=>s.audio))for(const file of [s.audio,s.audio.replace(/\.wav$/,'.alignment.json'),s.audio.replace(/\.wav$/,'.generation.json')])files.add(file);
  for(const s of scenes.filter(s=>s.audio)){
    const sidecar=s.audio.replace(/\.wav$/,'.assembly.json');
    if(fs.existsSync(sidecar)){files.add(sidecar);for(const dep of readVoiceJson(sidecar).dependencies)for(const file of [dep.audioFile,dep.audioFile.replace(/\.wav$/,'.alignment.json'),dep.audioFile.replace(/\.wav$/,'.generation.json')])files.add(file);}
  }
  for(const file of ['captions.srt','captions.vtt','caption-export.json'])files.add(canonical+'/captions-brief259/'+file);
  handin.backup=[];for(const file of files){const target='G:/My Drive/HSCScience video masters/'+dir+'/delivered/'+file;copyVerified(file,target);handin.backup.push({file,mirror:target,sha256:sha(file)});}
  handin.backupQualification='Mounted Drive mirror hash verified; cloud sync not individually checked';save(dir+'/hand-in.json',handin);delivered.push(handin);
  fs.appendFileSync('docs/production/claude-pm/status.md',`\nBrief259 ${wave}: ${row.lesson}, ${row.characters} characters, ${totalSeconds.toFixed(3)} s; ${row.measuredOutput}; source/alignment/cues/captions and holds passed. Human listening and built preview pending. ${dir}/hand-in.json.\n`);
  }catch(error){
    if(error.code!=='GOOGLE_TTS_REPEATED_TIMEOUT')throw error;
    const evidence=dir+'/timeout-stop-'+day+'.json';save(evidence,{lesson:row.lesson,quotaDay:day,reason:'Same request timed out twice; lesson stopped, caches retained',voiceLog:dir+'/voice.log',humanListening:'pending'});
    timeoutStops.push({lesson:row.lesson,evidence});
    fs.appendFileSync('docs/production/claude-pm/status.md',`\n${row.lesson}: stopped after the same request timed out twice; cached takes retained. Continuing later ${wave} lessons. Evidence: ${evidence}.\n`);
  }
}
if(timeoutStops.length){save(W+'/'+wave+'-timeout-status.json',{wave,timeoutStops,quotaDay:day});console.log('Night finished with timeout-held lessons: '+timeoutStops.map(s=>s.lesson).join(','));process.exit(7);}
if(status.pendingReadiness.length){console.log('Readiness hold: remaining excluded designs in '+wave);process.exit(3);}
assert.equal(delivered.length,rows.length);save(aggregate,{wave,lessons:delivered.map(h=>({lesson:h.lesson,characters:h.characters,totalSeconds:h.totalSeconds,measuredSha256:h.measuredSha256})),
  characters:delivered.reduce((n,h)=>n+h.characters,0),seconds:delivered.reduce((n,h)=>n+h.totalSeconds,0),humanListening:'pending'});
console.log(wave+': all prepared lessons handed in');
