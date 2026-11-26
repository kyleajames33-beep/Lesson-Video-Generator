// Owner-authorised billing probe: exactly one single-scene request, no retry.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash,randomUUID} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {readVoiceJson,estimateVoiceRow} from './lib/nightly-voice-plan.mjs';
import {googleQuotaDay,requestsInGoogleQuotaDay} from './lib/google-request-budget.mjs';
import {checkProductionBrief} from './lib/production-brief.mjs';
import {assessGoogleTake} from './lib/google-runon-gate.mjs';
import {decodePcm} from './lib/media-tools.mjs';

const W='work/brief262/billing-test',STATE='work/brief240/daily-voice-state.json',LOCK='work/brief245/root/stills.lock',OTHER='out/explainer/.stills-lock';
const read=readVoiceJson,sha=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const save=(p,v)=>{fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');};
const ledger=()=>fs.readFileSync('work/google-tts-requests.jsonl','utf8').trim().split('\n').filter(Boolean).map(JSON.parse);
const side=(p,k)=>p.replace(/\.wav$/,'.'+k+'.json');
const rows=read('work/brief259/physics/P5-preparation.json'),row=rows.find(r=>r.lesson==='phys-y12-m5-v11');assert(row);
function busy(){
 if(fs.existsSync(LOCK)||fs.existsSync(OTHER))return true;
 const cmd="$p=Get-CimInstance Win32_Process | Where-Object {$_.Name -match 'node|python|ffmpeg' -and $_.CommandLine -match 'render-explainer[.]mjs|render-isolated[.]mjs|pre-render-nov09[.]mjs|generate-google-audio[.]mjs|daily-voice-continuation[.]mjs|voice-physics-recording-wave[.]mjs'};[Console]::Write(@($p).Count)";
 const p=spawnSync('powershell.exe',['-NoProfile','-NonInteractive','-Command',cmd],{encoding:'utf8',windowsHide:true});assert.equal(p.status,0);return Number(p.stdout.trim())>0;
}
function cacheSnapshot(){
 const all=new Set();
 for(const r of rows)for(const s of read(r.manifest).scenes){const hash=createHash('sha256').update(s.text).digest('hex'),dir='work/google-tts-cache/'+s.id+'-'+hash;
  if(fs.existsSync(dir))for(const n of fs.readdirSync(dir,{recursive:true}))if(fs.statSync(dir+'/'+n).isFile())all.add(dir+'/'+n);}
 return [...all].map(p=>({path:p,sha256:sha(p)}));
}
function verifyCache(before){for(const f of before)assert.equal(sha(f.path),f.sha256,'Previously cached take changed');}
function updateBoard(status,result){
 const file='docs/production/parallel-production-board-2026-10-10.json',b=read(file);
 b.brief262={...b.brief262,status,billingTest:{scene:result.scene,providerStatus:result.provider?.status??null,requestsUsed:result.requestsUsed,gate:result.gate??null,evidence:W+'/result.json'},humanListening:'pending'};save(file,b);
}
function deliver(){
 const dest='G:/My Drive/HSCScience video masters/work/brief262/billing-test-delivery/';
 const names=fs.readdirSync(W,{recursive:true}).filter(n=>fs.statSync(W+'/'+n).isFile()).map(n=>W+'/'+n);
 names.push('scripts/test-p5-billing-brief262.mjs','scripts/lib/google-provider-response.mjs','scripts/google-provider-response.test.mjs');
 const mirrored=[];for(const p of names){const q=dest+p;fs.mkdirSync(path.dirname(q),{recursive:true});assert(!fs.existsSync(q));fs.copyFileSync(p,q);assert.equal(sha(p),sha(q));mirrored.push({path:p,sha256:sha(p),mirror:q});}
 save(W+'/mirror-check.json',{allHashesMatch:true,files:mirrored,qualification:'Mounted files verified; cloud sync not individually checked'});
 const q=dest+W+'/mirror-check.json';fs.copyFileSync(W+'/mirror-check.json',q,fs.constants.COPYFILE_EXCL);
}
async function execute(){
 assert(!fs.existsSync(W+'/test-start.json'),'A billing test was already started; do not make another request');
 const day=googleQuotaDay();assert.equal(day,'2026-11-23');
 const first=estimateVoiceRow(row).takes.find(t=>t.needsRequest);assert(first);assert.equal(first.id,'hook');
 const sourceSha=sha(row.source),heldStateSha256=sha(STATE);assert.equal(sourceSha,row.sourceSha256);
 save(W+'/progress.json',{phase:'waiting for render/audio locks',quotaDay:day,scene:first.id});
 const token=randomUUID();
 while(true){assert.equal(googleQuotaDay(),day);if(!busy()){try{fs.mkdirSync(LOCK);save(LOCK+'/owner.json',{brief:262,task:'billing-test',pid:process.pid,token});break;}catch(e){if(e.code!=='EEXIST')throw e;}}await new Promise(r=>setTimeout(r,250));}
 let result,start,before,initialMeasured;
 try{
  assert(!fs.existsSync(OTHER));assert.equal(sha(STATE),heldStateSha256);assert.equal(sha(row.source),sourceSha);
  assert.equal(estimateVoiceRow(row).takes.find(t=>t.needsRequest)?.id,first.id);
  assert(checkProductionBrief(process.cwd(),row.recordingBrief,{stage:'recording',expectedLessonPath:row.lessonInput}).ready);
  before=cacheSnapshot();save(W+'/preserved-cache.json',before);initialMeasured=rows.filter(r=>fs.existsSync(r.measuredOutput)).map(r=>r.lesson);
  start=ledger().length;assert(requestsInGoogleQuotaDay(ledger()).length<99);
  const input=read(row.lessonInput),manifest=read(row.manifest),scene=input.scenes.find(s=>s.id===first.id),source=manifest.scenes.find(s=>s.id===first.id);
  assert(!scene.voiceover.text.includes('\u2014'));assert.equal(source.text,scene.voiceover.text);
  assert.equal(manifest.voiceSelection.modelId,'gemini-3.8-flash-tts');assert.equal(manifest.voiceSelection.voiceId,'voice_shdbjsxcrr0a');
  const audio=W+'/hook.wav',lp=W+'/input.json',mp=W+'/manifest.json',out=W+'/measured.json';
  save(lp,{...input,scenes:[scene]});save(mp,{...manifest,scenes:[{...source,audioFile:audio}]});
  save(W+'/test-start.json',{at:new Date().toISOString(),quotaDay:day,scene:first.id,sourceSha256:sourceSha,heldStateSha256,maximumRequests:1});
  save(W+'/progress.json',{phase:'one single-scene provider test',quotaDay:day,scene:first.id});
  const fd=fs.openSync(W+'/generation.log','a');const p=spawnSync(process.execPath,['scripts/generate-google-audio.mjs',mp,lp,out],{windowsHide:true,
   env:{...process.env,GOOGLE_TTS_BATCH_MODE:'0',GOOGLE_TTS_CAPTURE_ONLY:'0',GOOGLE_TTS_REQUEST_BUDGET:'1',GOOGLE_TTS_CACHE_ROOT:W+'/cache',GOOGLE_TTS_PROVIDER_RECEIPT:W+'/provider-response.json'},stdio:['ignore',fd,fd]});fs.closeSync(fd);
  const provider=fs.existsSync(W+'/provider-response.json')?read(W+'/provider-response.json'):{status:null,statusText:null,responseText:null};
  const own=ledger().slice(start);assert(own.length<=1,'Test must never retry');
  result={quotaDay:day,lesson:row.lesson,scene:first.id,requestsUsed:own.length,provider,heldStateSha256,passed:false};
  if(p.status===0&&provider.status===200){
   assert.equal(own.length,1);const s=read(out).scenes[0],hash=createHash('sha256').update(s.voiceover.text).digest('hex'),cache=W+'/cache/'+s.id+'-'+hash;
   assert(decodePcm(audio).equals(decodePcm(cache+'/whole-scene.wav')));
   const receipt='work/google-runon-checks/'+sha(audio)+'.json';if(!fs.existsSync(receipt))save(receipt,{[audio]:Object.values(read(cache+'/whole-scene.recognition.json'))[0]});
   const gate=assessGoogleTake(s,{recogniseMissing:false});assert(gate.pass);result.gate=gate;
   for(const k of [null,'alignment','generation']){const from=k?side(audio,k):audio,to=k?side(source.audioFile,k):source.audioFile;fs.mkdirSync(path.dirname(to),{recursive:true});assert(!fs.existsSync(to));fs.copyFileSync(from,to,fs.constants.COPYFILE_EXCL);assert.equal(sha(from),sha(to));}
   result={...result,passed:true,canonicalAudio:source.audioFile,audioSha256:sha(source.audioFile)};
  }else{
   const log=fs.readFileSync(W+'/generation.log','utf8');result.failure=provider.status&&provider.status!==200?'Provider error; no retry':provider.status===200?'Audio/check failed after the single request; no retry':'No HTTP response; no retry';
   result.localError=log.match(/(?:Error|TypeError): ([^\r\n]+)/)?.[1]??'See generation.log';
  }
  verifyCache(before);save(W+'/result.json',result);
 }finally{assert.equal(read(LOCK+'/owner.json').token,token);fs.unlinkSync(LOCK+'/owner.json');fs.rmdirSync(LOCK);}
 let text='\n### Brief262 billing test after owner billing update (23 November2026)\n\n';
 text+=`${row.lesson}/${result.scene}: ${result.requestsUsed}fresh single-scene request; HTTP status${result.provider.status??'unavailable'} ${result.provider.statusText??''}. `;
 if(!result.passed){text+=`${result.failure}. Exact provider response text as a JSON string: ${JSON.stringify(result.provider.responseText)}. ${result.localError??''}. The hold remains; no retry or later lesson request made. Evidence: ${W}/provider-response.json and ${W}/result.json.\n`;fs.appendFileSync('docs/production/claude-pm/status.md',text);updateBoard('Billing test stopped; hold retained',result);deliver();console.log(JSON.stringify({passed:false,status:result.provider.status,responseText:result.provider.responseText,requests:result.requestsUsed}));return;}
 text+=`Brief257 gate passes: ${result.gate.seconds}s, ${result.gate.charactersPerSecond}characters/s, ${result.gate.insertedWords}inserted/${result.gate.trailingInsertedWords}trailing words. SHA256 ${result.audioSha256}. Existing caches preserved. Clearing only the inspected hold tied to this successful test, then continuing P5 within99. Human listening pending. Evidence: ${W}/result.json.\n`;
 fs.appendFileSync('docs/production/claude-pm/status.md',text);updateBoard('Billing test passed; normal P5 dispatcher resuming',result);
 save(W+'/progress.json',{phase:'normal dispatcher resumed',quotaDay:day,scene:first.id});
 const fd=fs.openSync(W+'/dispatcher.log','a');const p=spawnSync(process.execPath,['work/brief240/daily-voice-continuation.mjs','--resume-p5-billing-test'],{windowsHide:true,stdio:['ignore',fd,fd]});fs.closeSync(fd);
 verifyCache(before);const state=read(STATE),entries=ledger().slice(start),measured=rows.filter(r=>!initialMeasured.includes(r.lesson)&&fs.existsSync(r.measuredOutput)).map(r=>({lesson:r.lesson,path:r.measuredOutput,sha256:sha(r.measuredOutput)}));
 const done={...result,dispatcherExitCode:p.status,dailyState:state,requestsAfterBillingUpdate:entries.length,quotaRequests:requestsInGoogleQuotaDay(ledger()).length,newMeasuredLessons:measured,humanListening:'pending'};assert(done.quotaRequests<=99);save(W+'/hand-in.json',done);
 let report=`\nBrief262 billing-test continuation: ${entries.length}logged request attempts after the billing update (${done.quotaRequests}/99in this quota window); dispatcher state: ${state.phase}; ${state.error??''}.\n\n`;
 for(const m of measured)report+=`${m.lesson}: ${m.path}; SHA256 ${m.sha256}.\n\n`;
 report+=`All pre-existing cache files retain their hashes. Details: ${W}/hand-in.json. Human listening pending.\n`;fs.appendFileSync('docs/production/claude-pm/status.md',report);updateBoard('Billing test passed; dispatcher '+state.phase,result);deliver();console.log(JSON.stringify({passed:true,requests:entries.length,quota:done.quotaRequests,state:state.phase,newMeasuredLessons:measured.map(r=>r.lesson)}));
}
if(process.argv[2]==='--execute')try{await execute();}catch(e){save(W+'/stop.json',{at:new Date().toISOString(),error:e.message});console.error(e.message);process.exitCode=1;}
else throw Error('Use --execute');
