// Brief262: inspect the failed v09 takes, request missing scenes singly, resume P5.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash,randomUUID} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {googleQuotaDay,requestsInGoogleQuotaDay,isGoogleSpeechLimit,isGoogleSpeechSpendCap} from './lib/google-request-budget.mjs';
import {readVoiceJson,estimateVoiceRow} from './lib/nightly-voice-plan.mjs';
import {checkProductionBrief} from './lib/production-brief.mjs';
import {assessGoogleTake,googleWavSeconds} from './lib/google-runon-gate.mjs';
import {compareGoogleWords,checkGoogleRunOn} from './lib/google-batch-checks.mjs';
import {decodePcm} from './lib/media-tools.mjs';

const W='work/brief262',B='work/google-batch-voice/phys-y12-m5-v09/2026-11-22T10-04-20-687Z';
const LOCK='work/brief245/root/stills.lock',OTHER='out/explainer/.stills-lock',STATE='work/brief240/daily-voice-state.json';
const read=readVoiceJson,sha=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const save=(p,v)=>{fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');};
const ledger=()=>fs.readFileSync('work/google-tts-requests.jsonl','utf8').trim().split('\n').filter(Boolean).map(JSON.parse);
const row=read('work/brief259/physics/P5-preparation.json').find(r=>r.lesson==='phys-y12-m5-v09');assert(row);
const DIR='work/brief259/physics/P5/phys-y12-m5-v09',MEASURED=DIR+'/voiced/lesson.json';
const side=(p,k)=>p.replace(/\.wav$/,'.'+k+'.json');
const files=dir=>fs.existsSync(dir)?fs.readdirSync(dir,{recursive:true}).filter(n=>fs.statSync(dir+'/'+n).isFile()).map(n=>dir+'/'+n):[];
function snapshot(){
 const manifest=read(row.manifest),prior=new Set(files(B));
 for(const s of manifest.scenes){const hash=createHash('sha256').update(s.text).digest('hex');
  for(const f of files('work/google-tts-cache/'+s.id+'-'+hash))prior.add(f);
  for(const f of [s.audioFile,side(s.audioFile,'alignment'),side(s.audioFile,'generation')])if(fs.existsSync(f))prior.add(f);}
 return [...prior].map(p=>({path:p,sha256:sha(p)}));
}
function diagnose(){
 const old=read(B+'/report.json'),names=['two-slips','moment-arm','along-handle'];
 const report={brief:262,sourceReport:B+'/report.json',sourceReportSha256:sha(B+'/report.json'),
  diagnosis:'Both two-slips takes contain actual unscripted trailing speech. They fail the brief257 trailing-insertion gate, not the rate or edge checks. No checker change is made.',
  checks:old.checks.filter(c=>names.includes(c.scene)),fallbacks:old.fallbacks,
  batchFailure:fs.readFileSync(B+'/02-request-guide.log','utf8'),
  numbersCaveat:'moment-arm passes the existing audio gate and is retained for human listening. Its number comparison flags twelve and a half versus12.5, and sin versus sine. No listening pass or checker override is claimed.',
  currentMissing:estimateVoiceRow(row).takes.filter(t=>t.needsRequest),
  initialP5HandIns:read('work/brief259/physics/P5-preparation.json').filter(r=>fs.existsSync(`work/brief259/physics/P5/${r.lesson}/hand-in.json`)).map(r=>r.lesson),
  sourceSha256:sha(row.source),manifestSha256:sha(row.manifest),inputSha256:sha(row.lessonInput),preservedFiles:snapshot(),createdAt:new Date().toISOString()};
 assert.equal(report.sourceSha256,row.sourceSha256);save(W+'/diagnosis.json',report);return report;
}
function busy(){
 if(fs.existsSync(LOCK)||fs.existsSync(OTHER))return true;
 const cmd="$p=Get-CimInstance Win32_Process | Where-Object {$_.Name -match 'node|python|ffmpeg' -and $_.CommandLine -match 'render-explainer[.]mjs|render-isolated[.]mjs|pre-render-nov09[.]mjs|generate-google-audio[.]mjs|daily-voice-continuation[.]mjs|voice-physics-recording-wave[.]mjs'};[Console]::Write(@($p).Count)";
 const p=spawnSync('powershell.exe',['-NoProfile','-NonInteractive','-Command',cmd],{encoding:'utf8',windowsHide:true});assert.equal(p.status,0);return Number(p.stdout.trim())>0;
}
function verifyPreserved(d){for(const f of d.preservedFiles)assert.equal(sha(f.path),f.sha256,'Existing cached take changed: '+f.path);}
function finalReport(d,start,repair,phase){
 const all=read('work/brief259/physics/P5-preparation.json'),newLessons=all.filter(r=>!d.initialP5HandIns.includes(r.lesson)&&fs.existsSync(r.measuredOutput)).map(r=>({lesson:r.lesson,path:r.measuredOutput,sha256:sha(r.measuredOutput),handIn:fs.existsSync(`work/brief259/physics/P5/${r.lesson}/hand-in.json`)}));
 const entries=ledger().slice(start),report={brief:262,completedAt:new Date().toISOString(),phase,repair,
  requestsUsed:entries.length,v09Requests:entries.filter(e=>e.lesson===row.lesson).length,
  quotaDay:googleQuotaDay(),quotaRequests:requestsInGoogleQuotaDay(ledger()).length,newMeasuredLessons:newLessons,
  dailyState:read(STATE),preservedCacheFiles:d.preservedFiles.length,humanListening:'pending'};
 verifyPreserved(d);save(W+'/hand-in.json',report);
 let s='\n### Brief262: Physics P5 v09 repair and resumed dispatcher (23 November2026)\n\n';
 s+='two-slips first take:26.040s,15.9754characters/s,7inserted and7trailing words. Retry:26.680s,15.5922characters/s,8inserted and8trailing words. Both fail the five-trailing-word gate; rates and audio edges pass. Real added endings include “we’ll see you in the next one” and “next alright we’ll see you next next year”. Checker unchanged.\n\n';
 s+='The components/moment-arm/along-handle batch failed with an incomplete boundary guide. The separate moment-arm fallback passes at33.040s,15.4964characters/s,2inserted and0trailing; its12.5word/number recognition difference remains a listening note. Along-handle passes at35.480s,15.5581characters/s,0inserted/0trailing. Both accepted caches retained.\n\n';
 s+=`Repair outcome: ${phase}; ${JSON.stringify(repair)}. Requests this brief: ${report.requestsUsed} (${report.v09Requests} forv09); quota total${report.quotaRequests}/99. Preserved${d.preservedFiles.length}existing cache/evidence files, hashes unchanged.\n\n`;
 for(const r of newLessons)s+=`${r.lesson}: ${r.path}; SHA256 ${r.sha256}; normal hand-in ${r.handIn?'complete':'pending'}.\n\n`;
 s+=`Worker state: ${report.dailyState.phase}; ${report.dailyState.error??''}. Evidence: work/brief262/diagnosis.json, work/brief262/hand-in.json and work/brief262/dispatcher.log. Human listening pending. No design edits, agents or commits.\n`;
 fs.appendFileSync('docs/production/claude-pm/status.md',s);
 const bp='docs/production/parallel-production-board-2026-10-10.json',board=read(bp);board.brief262={owner:'Codex solo (brief262)',date:'2026-11-23',status:phase,requestsUsed:report.requestsUsed,v09Requests:report.v09Requests,quotaRequests:report.quotaRequests,newMeasuredLessons:newLessons,evidence:['work/brief262/diagnosis.json','work/brief262/hand-in.json'],humanListening:'pending'};save(bp,board);
 const dest='G:/My Drive/HSCScience video masters/work/brief262/delivered/';
 for(const f of [...files(W),'scripts/unblock-p5-brief262.mjs']){const q=dest+f;fs.mkdirSync(path.dirname(q),{recursive:true});assert(!fs.existsSync(q));fs.copyFileSync(f,q);assert.equal(sha(f),sha(q));}
 console.log(JSON.stringify({phase,requests:report.requestsUsed,v09Requests:report.v09Requests,newLessons:newLessons.map(r=>r.lesson),state:report.dailyState.phase}));
}
async function execute(){
 assert(!fs.existsSync(W+'/hand-in.json'),'Already handed in; preserve existing result');
 const day=googleQuotaDay();assert.equal(day,'2026-11-23');
 const d=read(W+'/diagnosis.json'),start=ledger().length;
 const progress={phase:'waiting for locks',quotaDay:day,startedAt:new Date().toISOString()};save(W+'/progress.json',progress);
 const token=randomUUID();
 while(true){
  assert.equal(googleQuotaDay(),day);
  if(!busy()){
   try{fs.mkdirSync(LOCK);save(LOCK+'/owner.json',{brief:262,pid:process.pid,token,at:new Date().toISOString()});break;}
   catch(error){if(error.code!=='EEXIST')throw error;}
  }
  await new Promise(r=>setTimeout(r,250));
 }
 let repair,passed=false;
 try{
  assert(!fs.existsSync(OTHER));verifyPreserved(d);assert.equal(sha(row.source),d.sourceSha256);assert.equal(sha(row.manifest),d.manifestSha256);assert.equal(sha(row.lessonInput),d.inputSha256);
  assert(checkProductionBrief(process.cwd(),row.recordingBrief,{stage:'recording',expectedLessonPath:row.lessonInput}).ready);
  const estimate=estimateVoiceRow(row),used=requestsInGoogleQuotaDay(ledger()).length;assert(used+estimate.missingScenes<=99);
  assert(estimate.takes.find(t=>t.id==='two-slips').needsRequest,'Fresh authorised two-slips take must still be missing');
  assert(!fs.existsSync(MEASURED));progress.phase='v09 single-scene requests';save(W+'/progress.json',progress);
  const fd=fs.openSync(W+'/v09-generation.log','a');
  const p=spawnSync(process.execPath,['scripts/generate-google-audio.mjs',row.manifest,row.lessonInput,MEASURED],{windowsHide:true,
   env:{...process.env,GOOGLE_TTS_BATCH_MODE:'0',GOOGLE_TTS_CAPTURE_ONLY:'0',GOOGLE_TTS_REQUEST_BUDGET:String(estimate.missingScenes),GOOGLE_TTS_VERIFIED_SOURCE_SHA256:row.sourceSha256},stdio:['ignore',fd,fd]});fs.closeSync(fd);
  const log=fs.readFileSync(W+'/v09-generation.log','utf8'),manifest=read(row.manifest),s=manifest.scenes.find(s=>s.id==='two-slips');
  const hash=createHash('sha256').update(s.text).digest('hex'),cache='work/google-tts-cache/'+s.id+'-'+hash;
  const wordsFile=cache+'/whole-scene.recognition.json';
  if(fs.existsSync(wordsFile)){const words=Object.values(read(wordsFile))[0],g=read(cache+'/whole-scene.generation.json');
   repair={audio:cache+'/whole-scene.wav',sha256:sha(cache+'/whole-scene.wav'),seconds:googleWavSeconds(cache+'/whole-scene.wav'),
    gate:checkGoogleRunOn({text:s.text,expectedText:g.text,seconds:googleWavSeconds(cache+'/whole-scene.wav'),comparison:compareGoogleWords(g.text,words.map(w=>w.word).join(''))})};}
  const own=ledger().slice(start).filter(e=>e.lesson===row.lesson&&e.scene==='two-slips');assert(own.length<=1,'Only one fresh two-slips request is authorised');
  if(p.error||p.status!==0){
   repair={...repair,reason:isGoogleSpeechSpendCap(log)?'spend cap':isGoogleSpeechLimit(log)?'quota stop':'Generation/check stopped; no further request authorised; existing takes retained',log:W+'/v09-generation.log'};
  }else{
   const scene=read(MEASURED).scenes.find(s=>s.id==='two-slips');assert(decodePcm(scene.voiceover.audioFile).equals(decodePcm(cache+'/whole-scene.wav')));
   const receipt='work/google-runon-checks/'+sha(scene.voiceover.audioFile)+'.json';if(!fs.existsSync(receipt))save(receipt,{[scene.voiceover.audioFile]:Object.values(read(wordsFile))[0]});
   const gate=assessGoogleTake(scene,{recogniseMissing:false});assert(gate.pass);
   repair={...repair,canonicalAudio:scene.voiceover.audioFile,sha256:sha(scene.voiceover.audioFile),gate};passed=true;
  }
  verifyPreserved(d);save(W+'/repair.json',{...repair,passed});
 }finally{assert.equal(read(LOCK+'/owner.json').token,token);fs.unlinkSync(LOCK+'/owner.json');fs.rmdirSync(LOCK);}
 if(!passed){finalReport(d,start,repair,'v09 stopped; dispatcher hold retained');return;}
 // Root brief262 explicitly authorises clearing this inspected P5 hold, without resetting caches or quota.
 const old=read(STATE);assert.equal(old.phase,'hold; inspect without retry');assert.equal(old.error,'Science queue stopped; inspect its voice log before retry');
 const stateBackup=STATE+'.before-brief262';assert(!fs.existsSync(stateBackup));fs.copyFileSync(STATE,stateBackup);
 const released={...old,phase:'waiting for next recording preparation',brief262Inspection:{at:new Date().toISOString(),evidence:W+'/diagnosis.json',repair:W+'/repair.json',oldStateSha256:sha(stateBackup)},updatedAt:new Date().toISOString()};save(STATE,released);
 progress.phase='normal P5 dispatcher resumed';save(W+'/progress.json',progress);
 const fd=fs.openSync(W+'/dispatcher.log','a');const p=spawnSync(process.execPath,['work/brief240/daily-voice-continuation.mjs'],{windowsHide:true,stdio:['ignore',fd,fd]});fs.closeSync(fd);
 finalReport(d,start,repair,p.status===0?'v09 repaired; normal dispatcher completed its night':'v09 repaired; later dispatcher stopped for inspection');
}
if(process.argv[2]==='--diagnose')diagnose();
else if(process.argv[2]==='--execute')try{await execute();}catch(error){save(W+'/stop.json',{at:new Date().toISOString(),error:error.message});console.error(error.message);process.exitCode=1;}
else throw Error('Use --diagnose or --execute');
