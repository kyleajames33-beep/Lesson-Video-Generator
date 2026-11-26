// Brief261: six fresh single-scene requests, scheduled before the22November queue.
// --plan is read-only apart from its plan file. --execute requires the nightly parent.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash,randomUUID} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {googleQuotaDay,requestsInGoogleQuotaDay,isGoogleSpeechLimit,isGoogleSpeechSpendCap} from './lib/google-request-budget.mjs';
import {pronunciationText} from './lib/google-pronunciation.mjs';
import {decodePcm} from './lib/media-tools.mjs';
import {assessGoogleTake,googleWavSeconds} from './lib/google-runon-gate.mjs';
import {checkGoogleRunOn,compareGoogleWords} from './lib/google-batch-checks.mjs';
import {explainerCaptionCues,toSrt,toVtt} from './lib/explainer-captions.mjs';

const W='work/brief261',LOCK='work/brief245/root/stills.lock',OTHER='out/explainer/.stills-lock';
const targets=[['c-y11-m1-v08','feedback-1'],['c-y11-m1-v09','sense-check'],['c-y11-m1-v16','spectroscope'],
 ['math-a12-d02','scene-07'],['math-a12-d02','scene-08'],['math-a12-s04','scene-16']];
const read=p=>JSON.parse(fs.readFileSync(p,'utf8').replace(/^\uFEFF/,''));
const hash=b=>createHash('sha256').update(b).digest('hex'),sha=p=>hash(fs.readFileSync(p));
const save=(p,v)=>{fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');};
const side=(p,k)=>p.replace(/\.wav$/,'.'+k+'.json');
const ledger=()=>fs.existsSync('work/google-tts-requests.jsonl')?fs.readFileSync('work/google-tts-requests.jsonl','utf8').trim().split('\n').filter(Boolean).map(JSON.parse):[];
const within=p=>{assert(path.resolve(p).startsWith(path.resolve('.')+path.sep));return p;};
const backup=p=>p+'.before-brief261';
export function assertRepairWindow(day,scheduledDay){
 assert.equal(day,'2026-11-22','Brief261 is first in the22November quota window');
 assert.equal(scheduledDay,day,'Scheduled nightly parent required');
}
export function retimeCues(cues,text,oldAlignment,newAlignment){
 return cues.map(c=>{let at=-1,cursor=0;while(cursor<text.length){const found=text.indexOf(c.text,cursor);if(found<0)break;
   if(Math.abs(oldAlignment.character_start_times_seconds[found]-c.start)<1e-6&&Math.abs(oldAlignment.character_end_times_seconds[found+c.text.length-1]-c.end)<1e-6){at=found;break;}cursor=found+1;}
  assert(at>=0,'Cannot locate the exact previously approved cue occurrence: '+c.text);
  const start=newAlignment.character_start_times_seconds[at],end=newAlignment.character_end_times_seconds[at+c.text.length-1];assert(end>start);return {...c,start,end};});
}

export function replaceAcceptedScenes(original,accepted){
 const next=structuredClone(original),ids=new Set(accepted.map(a=>a.id));
 for(const a of accepted){
  const old=original.scenes.find(s=>s.id===a.id),s=next.scenes.find(s=>s.id===a.id);assert(old&&s);
  assert.equal(a.scene.voiceover.text,old.voiceover.text);
  const quiet=old.durationInFrames-old.voiceover.endFrame;
  s.voiceover.endFrame=a.scene.voiceover.endFrame;s.captions=structuredClone(a.scene.captions);
  s.durationInFrames=s.voiceover.endFrame+quiet;
 }
 for(let i=0;i<original.scenes.length;i++){
  const a=original.scenes[i],b=next.scenes[i];
  if(!ids.has(a.id))assert.deepEqual(a,b);
  assert.equal(a.holdSeconds,b.holdSeconds);assert.equal(a.holdKind,b.holdKind);
  assert.equal(a.durationInFrames-a.voiceover.endFrame,b.durationInFrames-b.voiceover.endFrame);
  if(ids.has(a.id)){const stripped=x=>{const c=structuredClone(x);delete c.captions;delete c.durationInFrames;delete c.voiceover.endFrame;return c;};assert.deepEqual(stripped(a),stripped(b));}
 }
 assert.equal(next.scenes.at(-1).durationInFrames,original.scenes.at(-1).durationInFrames);
 return next;
}

function plan(){
 assert(!fs.existsSync(W+'/plan.json'),'Preserve the existing reviewed plan');
 const lessons={},scenes=[];
 for(const[key,id]of targets){
  const dir='docs/production/claude-pm/lessons/'+key+'/measured',lp=dir+'/lesson.json',lesson=read(lp);
  if(!lessons[key]){
   const files=fs.readdirSync(dir,{recursive:true}).filter(n=>fs.statSync(dir+'/'+n).isFile());
   const vp=dir+'/'+(fs.existsSync(dir+'/validation.json')?'validation.json':'validation-brief236.json');
   const manifest='docs/production/claude-pm/lessons/'+key+'/voice-manifest.json';
   lessons[key]={key,dir,measured:lp,sha256:sha(lp),validation:vp,validationSha256:sha(vp),manifest,manifestSha256:sha(manifest),
    files:files.map(n=>({name:n,sha256:sha(dir+'/'+n)})),
    allTakes:lesson.scenes.filter(s=>s.voiceover?.audioFile).map(s=>({id:s.id,audio:s.voiceover.audioFile,
      audioSha256:sha(s.voiceover.audioFile),alignmentSha256:sha(side(s.voiceover.audioFile,'alignment')),generationSha256:sha(side(s.voiceover.audioFile,'generation'))}))};
  }
  assert(lesson.scenes.every(s=>!s.voiceover.text.includes('\u2014')));
  const s=lesson.scenes.find(s=>s.id===id);assert(s);
  const audio=s.voiceover.audioFile,g=read(side(audio,'generation')),manifest=read(lessons[key].manifest);
  assert.equal(g.textSha256,hash(s.voiceover.text));assert.equal(g.modelId,'gemini-3.8-flash-tts');assert.equal(g.voiceId,'voice_shdbjsxcrr0a');
  assert.equal(pronunciationText(s.voiceover.text,{math:!!manifest.mathPronunciation}).spokenText,g.pronunciationText,'Recorded pronunciation settings differ');
  scenes.push({key,id,text:s.voiceover.text,textSha256:hash(s.voiceover.text),audio,audioSha256:sha(audio),
   oldSeconds:googleWavSeconds(audio),modelId:g.modelId,voiceId:g.voiceId,mathPronunciation:!!manifest.mathPronunciation,
   alignmentSha256:sha(side(audio,'alignment')),generationSha256:sha(side(audio,'generation'))});
 }
 save(W+'/plan.json',{brief:261,quotaDay:'2026-11-22',scheduledStart:'2026-11-22T19:00:00+11:00',
  minimumRequests:6,maximumRequests:12,batchMode:false,createdAt:new Date().toISOString(),lessons:Object.values(lessons),scenes});
 console.log('Prepared six exact-text takes across five lessons. No speech requested.');
}

function assertInputs(plan){
 for(const l of plan.lessons){assert.equal(sha(l.measured),l.sha256);assert.equal(sha(l.manifest),l.manifestSha256);
  for(const f of l.files)assert.equal(sha(l.dir+'/'+f.name),f.sha256);
  for(const t of l.allTakes){assert.equal(sha(t.audio),t.audioSha256);assert.equal(sha(side(t.audio,'alignment')),t.alignmentSha256);assert.equal(sha(side(t.audio,'generation')),t.generationSha256);}
 }
}
function checkPlan(){
 const p=read(W+'/plan.json');assertInputs(p);
 for(const l of p.lessons){assert(!fs.existsSync(l.dir+'.before-brief261'),'An earlier measured backup requires inspection');
  const lesson=read(l.measured),validation=read(l.validation);explainerCaptionCues(lesson);
  for(const row of p.scenes.filter(r=>r.key===l.key)){const s=lesson.scenes.find(s=>s.id===row.id),a=read(side(row.audio,'alignment'));
   for(const file of [row.audio,side(row.audio,'alignment'),side(row.audio,'generation')])assert(!fs.existsSync(backup(file)),'An earlier take backup requires inspection');
   assert.equal(pronunciationText(row.text,{math:row.mathPronunciation}).spokenText,read(side(row.audio,'generation')).pronunciationText);
   const cues=validation.scenes.find(s=>s.id===row.id).cues;assert.deepEqual(retimeCues(cues,s.voiceover.text,a,a),cues);}}
 console.log('All frozen inputs, original caption timelines and exact bold cue occurrences verified. No speech requested.');
}
function heavyJob(){
 const command="$p=Get-CimInstance Win32_Process | Where-Object {$_.Name -match 'node|python|ffmpeg' -and $_.CommandLine -match 'render-explainer[.]mjs|render-isolated[.]mjs|generate-google-audio[.]mjs|generate-elevenlabs-audio[.]mjs|voice-wave-status[.]mjs|voice-later-maths[.]mjs'};[Console]::Write(@($p).Count)";
 const p=spawnSync('powershell.exe',['-NoProfile','-NonInteractive','-Command',command],{encoding:'utf8',windowsHide:true});assert.equal(p.status,0);return Number(p.stdout.trim());
}
function signal(audio){
 const pcm=decodePcm(audio);let peak=0,fullScaleSamples=0,quietStart=null;const silences=[];
 for(let at=0;at<pcm.length;at+=960){let sum=0,n=0;for(let i=at;i<Math.min(at+960,pcm.length);i+=2){const v=Math.abs(pcm.readInt16LE(i));peak=Math.max(peak,v);if(v>=32760)fullScaleSamples++;sum+=v*v;n++;}
  const quiet=Math.sqrt(sum/n)/32768<.001;if(quiet&&quietStart===null)quietStart=at/96000;
  if(!quiet&&quietStart!==null){if(at/96000-quietStart>=1.5)silences.push({start:quietStart,end:at/96000});quietStart=null;}}
 if(quietStart!==null&&pcm.length/96000-quietStart>=1.5)silences.push({start:quietStart,end:pcm.length/96000});
 return {peakFraction:peak/32768,fullScaleSamples,silencesAtLeast1_5s:silences};
}
function runAttempt(row,original,number){
 const dir=W+'/'+row.key+'/'+row.id+'/attempt'+number;assert(!fs.existsSync(dir),'Existing attempt requires inspection; no automatic repeat');
 fs.mkdirSync(dir,{recursive:true});const audio=dir+'/candidate.wav',input=dir+'/input.json',manifest=dir+'/manifest.json',out=dir+'/measured.json';
 save(input,{id:read('docs/production/claude-pm/lessons/'+row.key+'/measured/lesson.json').id,fps:30,scenes:[original]});
 save(manifest,{mathPronunciation:row.mathPronunciation,voiceSelection:{voiceId:row.voiceId,modelId:row.modelId},
  scenes:[{id:row.id,text:row.text,audioFile:audio}]});
 const before=ledger().length,fd=fs.openSync(dir+'/generation.log','a');
 const p=spawnSync(process.execPath,['scripts/generate-google-audio.mjs',manifest,input,out],{windowsHide:true,
  env:{...process.env,GOOGLE_TTS_BATCH_MODE:'0',GOOGLE_TTS_CAPTURE_ONLY:'0',GOOGLE_TTS_REQUEST_BUDGET:'1',GOOGLE_TTS_CACHE_ROOT:dir+'/cache'},stdio:['ignore',fd,fd]});fs.closeSync(fd);
 const log=fs.readFileSync(dir+'/generation.log','utf8'),requests=ledger().slice(before);assert(requests.length<=1,'Single-scene request limit exceeded');
 const result={attempt:number,dir,requestsUsed:requests.length,requestEntries:requests,exitCode:p.status,pass:false};
 if(isGoogleSpeechSpendCap(log)){save(dir+'/result.json',{...result,state:'spend cap hold'});const e=Error('Google spend cap; inspect before retry');e.exitCode=5;throw e;}
 if(isGoogleSpeechLimit(log)){save(dir+'/result.json',{...result,state:'quota hold'});const e=Error('Google quota stop; no retry');e.exitCode=4;throw e;}
 const cache=dir+'/cache/'+row.id+'-'+row.textSha256,recognition=cache+'/whole-scene.recognition.json';
 if(fs.existsSync(cache+'/whole-scene.generation.json')){const usage=read(cache+'/whole-scene.generation.json').usage;
  result.inputTokens=usage?.total_input_tokens??0;result.outputTokens=usage?.total_output_tokens??0;
  result.costUsd=result.inputTokens*.5/1e6+result.outputTokens*9/1e6;}
 if(fs.existsSync(recognition)&&fs.existsSync(cache+'/whole-scene.wav')){
  const cached=read(cache+'/whole-scene.generation.json');assert.equal(cached.model,row.modelId);assert.equal(cached.voice,row.voiceId);
  assert.equal(cached.text,read(side(row.audio,'generation')).pronunciationText);
  const words=Object.values(read(recognition))[0],spoken=cached.text;
  result.gate=checkGoogleRunOn({text:row.text,expectedText:spoken,seconds:googleWavSeconds(cache+'/whole-scene.wav'),comparison:compareGoogleWords(spoken,words.map(w=>w.word).join(''))});
 }
 if(p.status===0){
  const measured=read(out),scene=measured.scenes[0];assert.equal(scene.voiceover.text,row.text);
  assert(decodePcm(audio).equals(decodePcm(cache+'/whole-scene.wav')));
  const receipt='work/google-runon-checks/'+sha(audio)+'.json';if(!fs.existsSync(receipt))save(receipt,{[audio]:Object.values(read(recognition))[0]});
  result.gate=assessGoogleTake(scene,{recogniseMissing:false});assert(result.gate.pass);
  result.pass=true;result.audio=audio;result.newSeconds=googleWavSeconds(audio);result.newAudioSha256=sha(audio);
  result.scene=scene;
 }else if(!result.gate||result.gate.pass){
  result.state='stopped: generation/alignment error, not an authorised run-on retry';
 }
 save(dir+'/result.json',result);
 if(result.state)throw Error(result.state+'. Inspect '+dir+'/result.json; no automatic retry.');
 return result;
}

export function rebuildRevoicedLesson(l,accepted,sceneResults,{evidenceRoot=W}={}){
 assert(accepted.every(a=>a.gate.pass),'Only gated replacement takes may be installed');
 const original=read(l.measured),oldValidation=read(l.validation),next=replaceAcceptedScenes(original,accepted);
 const changed=new Set(accepted.map(a=>a.id)),oldCaps=explainerCaptionCues(original),caps=explainerCaptionCues(next);
 const unaltered=[];
 for(const take of l.allTakes)if(!changed.has(take.id)){
  assert.equal(sha(take.audio),take.audioSha256);assert.equal(sha(side(take.audio,'alignment')),take.alignmentSha256);
  assert.equal(sha(side(take.audio,'generation')),take.generationSha256);unaltered.push(take);
 }
 const validations=oldValidation.scenes.map(before=>{
  const a=accepted.find(a=>a.id===before.id);if(!a)return structuredClone(before);
  const alignment=read(side(a.audio,'alignment')),scene=next.scenes.find(s=>s.id===a.id),text=scene.voiceover.text;
  assert.equal(alignment.characters.join(''),text);let previousStart=0,previousEnd=0;
  for(let i=0;i<alignment.characters.length;i++){const start=alignment.character_start_times_seconds[i],end=alignment.character_end_times_seconds[i];
   assert(Number.isFinite(start)&&Number.isFinite(end)&&start>=previousStart-1e-8&&end>=previousEnd-1e-8&&end>=start&&end<=a.newSeconds+.03);previousStart=start;previousEnd=end;}
  const oldAlignment=read(side(scene.voiceover.audioFile,'alignment'));
  const cues=retimeCues(before.cues,text,oldAlignment,alignment);
  const words=[...text.matchAll(/\S+/g)].map(m=>({word:m[0],start:alignment.character_start_times_seconds[m.index],end:alignment.character_end_times_seconds[m.index+m[0].length-1]}));
  const gaps=words.slice(1).map((w,i)=>({seconds:w.start-words[i].end,after:words[i].word,before:w.word})).sort((a,b)=>b.seconds-a.seconds);
  const generation=read(side(a.audio,'generation'));
  return {...before,cues,audio:scene.voiceover.audioFile,seconds:a.newSeconds,durationInFrames:scene.durationInFrames,
   runOn:a.gate,worstWordGap:gaps[0]??null,...signal(a.audio),lowScoreWords:generation.alignmentQuality?.lowScoreWords??[],
   pronunciationText:generation.pronunciationText,changed:true,humanListening:'pending'};
 });
 for(const before of oldValidation.scenes)if(!changed.has(before.id))assert.deepEqual(before,validations.find(s=>s.id===before.id));
 for(const s of original.scenes)if(!changed.has(s.id)){
  const before=oldCaps.cues.filter(c=>c.segment===s.id),after=caps.cues.filter(c=>c.segment===s.id);assert.equal(before.length,after.length);
  const oldStart=oldCaps.timeline.scenes.find(t=>t.id===s.id)?.startFrame;
  const newStart=caps.timeline.scenes.find(t=>t.id===s.id)?.startFrame;
  for(let i=0;i<before.length;i++){assert.equal(before[i].text,after[i].text);assert(Math.abs((after[i].startMs-before[i].startMs)-(newStart-oldStart)/30*1000)<.001);}
 }
 const base=evidenceRoot+'/'+l.key,bytes=JSON.stringify(next,null,2)+'\n',measuredSha256=hash(bytes),totalSeconds=next.scenes.reduce((n,s)=>n+s.durationInFrames,0)/30;assert(totalSeconds<570);
 const diff={pass:true,changedScenes:[...changed],allOtherSceneObjectsIdentical:true,allOtherAlignmentFilesIdentical:true,
  allOtherBoldCueTimesIdentical:true,allOtherLocalCaptionsIdentical:true,allHoldsAndNotesDurationsIdentical:true,
  notesFrames:next.scenes.at(-1).durationInFrames,oldMeasuredSha256:l.sha256,newMeasuredSha256:measuredSha256,
  unalteredTakes:unaltered,cumulativeCaptionShift:'Derived from changed scene durations; unaffected local captions and cue times are identical'};
 save(base+'/word-time-diff.json',diff);
 const srt=toSrt(caps.cues),vtt=toVtt(caps.cues),captionReport={lessonPath:l.measured,lessonSha256:measuredSha256,
  srtSha256:hash(srt),vttSha256:hash(vtt),cueCount:caps.cues.length,timeline:caps.timeline,status:'exported-locally-playback-review-pending'};
 const validation={...oldValidation,brief:261,measuredPath:l.measured,measuredSha256,canonicalMeasuredPath:l.measured,canonicalMeasuredSha256:measuredSha256,
  changedTakes:accepted.length,reusedTakes:next.scenes.length-accepted.length,totalSeconds,under570:true,durationOver570:false,
  scenes:validations,captions:captionReport,wordTimeDiff:diff,humanListening:'pending',builtPreview:'pending',
  newRequests:sceneResults.reduce((n,r)=>n+r.requestsUsed,0),
  inputTokens:sceneResults.flatMap(r=>r.attempts).reduce((n,a)=>n+(a.inputTokens??0),0),
  outputTokens:sceneResults.flatMap(r=>r.attempts).reduce((n,a)=>n+(a.outputTokens??0),0),
  costUsd:sceneResults.flatMap(r=>r.attempts).reduce((n,a)=>n+(a.costUsd??0),0),
  originalVoicingValidation:l.dir+'.before-brief261/'+path.basename(l.validation),
  machineChecks:'Exact source/provenance, run-on recognition, aligned character bounds, unchanged other scenes, cue times, holds and local captions. Human listening pending.'};
 const worst=validations.filter(s=>s.worstWordGap).sort((a,b)=>b.worstWordGap.seconds-a.worstWordGap.seconds)[0];
 validation.worstWordGap=worst?{scene:worst.id,...worst.worstWordGap}:null;
 validation.machineFlags=validations.filter(s=>s.fullScaleSamples>0||s.silencesAtLeast1_5s?.length||s.lowScoreWords?.length);
 validation.machineListenFindings=validation.machineFlags;
 save(base+'/validation.json',validation);fs.writeFileSync(base+'/lesson.json',bytes);
 const moves=[],mdBackup=within(l.dir+'.before-brief261');assert(!fs.existsSync(mdBackup));let measuredMoved=false,committed=false;
 try{
  assert.equal(sha(l.measured),l.sha256);
  for(const a of accepted){const row=sceneResults.find(r=>r.id===a.id);
   assert.equal(sha(row.audio),row.audioSha256);
   for(const k of [null,'alignment','generation']){const from=k?side(row.audio,k):row.audio,to=backup(from);within(from);within(to);assert(!fs.existsSync(to));
    const entry={from,to,sha256:sha(from)};fs.renameSync(from,to);moves.push(entry);
    fs.copyFileSync(k?side(a.audio,k):a.audio,from,fs.constants.COPYFILE_EXCL);}
  }
  fs.renameSync(within(l.dir),mdBackup);measuredMoved=true;fs.cpSync(mdBackup,l.dir,{recursive:true,errorOnExist:true,force:false});
  fs.writeFileSync(l.measured,bytes);fs.copyFileSync(base+'/validation.json',l.validation);
  if(l.validation!==l.dir+'/validation.json')fs.copyFileSync(base+'/validation.json',l.dir+'/validation.json');
  fs.mkdirSync(l.dir+'/captions',{recursive:true});fs.writeFileSync(l.dir+'/captions/captions.srt',srt);fs.writeFileSync(l.dir+'/captions/captions.vtt',vtt);save(l.dir+'/captions/caption-export.json',captionReport);
  for(const move of moves)assert.equal(sha(move.to),move.sha256);
  for(const f of l.files)assert.equal(sha(mdBackup+'/'+f.name),f.sha256);
  assert.equal(sha(l.measured),measuredSha256);committed=true;
 }finally{
  if(!committed){
   if(measuredMoved){if(fs.existsSync(l.dir))fs.renameSync(within(l.dir),within(l.dir+'.failed-brief261'));fs.renameSync(mdBackup,l.dir);}
   for(const move of moves.reverse()){if(fs.existsSync(move.from))fs.renameSync(within(move.from),within(move.from+'.failed-brief261'));fs.renameSync(move.to,move.from);assert.equal(sha(move.from),move.sha256);}
  }
 }
 const report={lesson:l.key,measuredPath:l.measured,oldMeasuredSha256:l.sha256,newMeasuredSha256:measuredSha256,
  acceptedScenes:[...changed],wordTimeDiff:base+'/word-time-diff.json',diffPass:true,totalSeconds,captionCues:caps.cues.length,
  backups:moves,measuredBackup:mdBackup,humanListening:'pending',renderReview:'pending'};
 save(base+'/hand-in.json',report);return report;
}

async function execute(){
 if(fs.existsSync(W+'/hand-in.json')){console.log('Brief261 already handed in; no new speech.');return;}
 const day=googleQuotaDay();assertRepairWindow(day,process.env.GOOGLE_TTS_SCHEDULED_DISPATCH);
 const p=read(W+'/plan.json');checkPlan();
 assert.equal(requestsInGoogleQuotaDay(ledger()).length,0,'Another request already used the22November window; inspect ordering');
 while(fs.existsSync(LOCK)||fs.existsSync(OTHER)||heavyJob()){
  assert.equal(googleQuotaDay(),day);await new Promise(r=>setTimeout(r,20000));
 }
 const token=randomUUID();fs.mkdirSync(LOCK);save(LOCK+'/owner.json',{brief:261,pid:process.pid,token,startedAt:new Date().toISOString()});
 const report={brief:261,startedAt:new Date().toISOString(),quotaDay:day,scenes:[],lessons:[],speechRequests:0,humanListening:'pending',renderReview:'pending'};
 try{
  assert(!fs.existsSync(OTHER));assertInputs(p);
  assert.equal(requestsInGoogleQuotaDay(ledger()).length,0,'Another request used the window while waiting for the shared lock');
  for(const row of p.scenes){
   const original=read(p.lessons.find(l=>l.key===row.key).measured).scenes.find(s=>s.id===row.id),attempts=[];let accepted;
   for(let number=1;number<=2;number++){
    assert.equal(googleQuotaDay(),day);const a=runAttempt(row,original,number);attempts.push(a);
    if(a.pass){accepted=a;break;}
    if(!a.gate||a.gate.pass)break;
   }
   const result={...row,attempts,requestsUsed:attempts.reduce((n,a)=>n+a.requestsUsed,0),
    state:accepted?'accepted':'stopped; old take retained',accepted:accepted??null};
   if(!accepted){assert.equal(sha(row.audio),row.audioSha256);assert.equal(sha(side(row.audio,'alignment')),row.alignmentSha256);assert.equal(sha(side(row.audio,'generation')),row.generationSha256);}
   report.scenes.push(result);report.speechRequests+=result.requestsUsed;assert(report.speechRequests<=12);save(W+'/progress.json',report);
  }
  for(const l of p.lessons){
   const rs=report.scenes.filter(r=>r.key===l.key),accepted=rs.filter(r=>r.accepted).map(r=>({...r.accepted,id:r.id}));
   if(accepted.length)report.lessons.push(rebuildRevoicedLesson(l,accepted,rs));else assert.equal(sha(l.measured),l.sha256);
   save(W+'/progress.json',report);
  }
  report.completedAt=new Date().toISOString();report.acceptedScenes=report.scenes.filter(r=>r.accepted).length;report.stoppedScenes=6-report.acceptedScenes;
  // Additive mounted-Drive delivery, including every preserved old take and measured file.
  const files=new Set(fs.readdirSync(W,{recursive:true}).filter(n=>fs.statSync(W+'/'+n).isFile()).map(n=>W+'/'+n));
  for(const l of report.lessons){for(const dir of [path.dirname(l.measuredPath),l.measuredBackup])for(const n of fs.readdirSync(dir,{recursive:true}).filter(n=>fs.statSync(dir+'/'+n).isFile()))files.add(dir+'/'+n);
   for(const move of l.backups)for(const f of [move.from,move.to])files.add(f);}
  report.mirror=[];
  for(const f of files){const dest='G:/My Drive/HSCScience video masters/work/brief261/delivered/'+f;fs.mkdirSync(path.dirname(dest),{recursive:true});assert(!fs.existsSync(dest),'Preserve existing delivery');fs.copyFileSync(f,dest);assert.equal(sha(f),sha(dest));report.mirror.push({path:f,mirror:dest,sha256:sha(f)});}
  report.mirrorQualification='Mounted files hash verified; cloud sync not individually checked';
  let status='\n### Brief261: six run-on scene re-voices (22 November2026)\n\n';
  for(const r of report.scenes){const a=r.accepted,last=r.attempts.at(-1),g=a?.gate??last?.gate;
   status+=`${r.key}/${r.id}: ${r.state}; ${r.oldSeconds.toFixed(3)}s -> ${a?a.newSeconds.toFixed(3)+'s':'unchanged'}; requests${r.requestsUsed}; gate${g?.pass??'unavailable'}, CPS${g?.charactersPerSecond??'unavailable'}, inserted${g?.insertedWords??'unavailable'}, trailing${g?.trailingInsertedWords??'unavailable'}; old SHA256 ${r.audioSha256}; new SHA256 ${a?.newAudioSha256??'none'}.\n\n`;}
  for(const l of report.lessons)status+=`${l.lesson}: measured SHA256 ${l.newMeasuredSha256}; word-time diff passes (other scene objects, alignments, bold cues, local captions, holds and notes unchanged); ${l.wordTimeDiff}. Old measured directory: ${l.measuredBackup}.\n\n`;
  status+=`Totals: ${report.acceptedScenes}accepted, ${report.stoppedScenes}stopped, ${report.speechRequests}requests. Hand-in: work/brief261/hand-in.json. Old takes and sidecars renamed with .before-brief261. Root renders and release replacement remain pending. Human listening pending.\n`;
  fs.appendFileSync('docs/production/claude-pm/status.md',status);
  const boardPath='docs/production/parallel-production-board-2026-10-10.json',board=read(boardPath);
  board.brief261={...board.brief261,status:'Scheduled execution completed; see scene outcomes',acceptedScenes:report.acceptedScenes,stoppedScenes:report.stoppedScenes,
   speechRequests:report.speechRequests,evidence:['work/brief261/hand-in.json','work/brief261/progress.json'],humanListening:'pending',renderReview:'pending'};save(boardPath,board);
  save(W+'/hand-in.json',report);
  const mirror='G:/My Drive/HSCScience video masters/work/brief261/delivered/work/brief261/hand-in.json';fs.copyFileSync(W+'/hand-in.json',mirror,fs.constants.COPYFILE_EXCL);assert.equal(sha(W+'/hand-in.json'),sha(mirror));
  console.log(`Brief261 handed in: ${report.acceptedScenes}accepted, ${report.stoppedScenes}stopped; ${report.speechRequests}requests.`);
 }finally{assert.equal(read(LOCK+'/owner.json').token,token);fs.unlinkSync(LOCK+'/owner.json');fs.rmdirSync(LOCK);}
}

if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 if(process.argv[2]==='--plan')plan();
 else if(process.argv[2]==='--check')checkPlan();
 else if(process.argv[2]==='--execute')try{await execute();}catch(error){save(W+'/stop.json',{at:new Date().toISOString(),reason:error.message,exitCode:error.exitCode??1});console.error(error.message);process.exitCode=error.exitCode??1;}
 else throw Error('Use --plan or --execute');
}
