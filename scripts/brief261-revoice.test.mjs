import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {replaceAcceptedScenes,assertRepairWindow,retimeCues,rebuildRevoicedLesson} from './revoice-runon-brief261.mjs';
import {googleQuotaDay} from './lib/google-request-budget.mjs';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
test('repair window starts at19Sydney22November and requires its scheduled parent',()=>{
 assert.throws(()=>assertRepairWindow(googleQuotaDay('2026-11-22T18:59:59+11:00'),'2026-11-22'));
 assert.doesNotThrow(()=>assertRepairWindow(googleQuotaDay('2026-11-22T19:00:00+11:00'),'2026-11-22'));
 assert.throws(()=>assertRepairWindow('2026-11-22',undefined));
 assert.throws(()=>assertRepairWindow('2026-11-23','2026-11-23'));
});
test('six planned sources and exact original cue occurrences pass preflight without requests',()=>{
 const hash=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex'),files=['work/google-tts-requests.jsonl','work/brief240/daily-voice-state.json'];
 const before=files.map(hash),p=spawnSync(process.execPath,['scripts/revoice-runon-brief261.mjs','--check'],{encoding:'utf8',windowsHide:true});
 assert.equal(p.status,0,p.stderr);assert.deepEqual(files.map(hash),before);
 const plan=read('work/brief261/plan.json');assert.equal(plan.scenes.length,6);assert.equal(plan.lessons.length,5);assert.equal(plan.maximumRequests,12);
});
test('both d02 replacements preserve all other scene objects and every quiet hold',()=>{
 const original=read('docs/production/claude-pm/lessons/math-a12-d02/measured/lesson.json'),frozen=structuredClone(original);
 const ids=['scene-07','scene-08'],accepted=ids.map(id=>{const scene=structuredClone(original.scenes.find(s=>s.id===id));scene.voiceover.endFrame-=30;scene.captions=scene.captions.map(c=>({...c}));return {id,scene};});
 const next=replaceAcceptedScenes(original,accepted);assert.deepEqual(original,frozen);
 for(let i=0;i<next.scenes.length;i++){
  const a=original.scenes[i],b=next.scenes[i];if(!ids.includes(a.id))assert.deepEqual(a,b);
  else assert.equal(b.durationInFrames,a.durationInFrames-30);
  assert.equal(a.durationInFrames-a.voiceover.endFrame,b.durationInFrames-b.voiceover.endFrame);
  assert.equal(a.holdSeconds,b.holdSeconds);
 }
 assert.equal(next.scenes.at(-1).durationInFrames,1350);
});
test('cue retiming chooses the approved occurrence of repeated text',()=>{
 const old={character_start_times_seconds:[0,1,2],character_end_times_seconds:[.5,1.5,2.5]};
 const next={character_start_times_seconds:[0,.8,1.6],character_end_times_seconds:[.4,1.2,2]};
 assert.deepEqual(retimeCues([{text:'a',start:2,end:2.5}],'a a',old,next),[{text:'a',start:1.6,end:2}]);
});
test('priority repair hook precedes all nightly lesson workers',()=>{
 const text=fs.readFileSync('work/brief240/daily-voice-continuation.mjs','utf8');
 assert(text.indexOf("const repair=run(['scripts/revoice-runon-brief261.mjs'")<text.indexOf(" const maths=['s10'"));
 assert(text.includes("!fs.existsSync('work/brief261/hand-in.json')"));
});
test('five lesson rebuilds preserve originals and back up takes, measured files and captions in disposable fixtures',()=>{
 const fixtureRoot=path.resolve('work/brief261-tests');assert(fixtureRoot.startsWith(path.resolve('work')+path.sep));
 assert(!fs.existsSync(fixtureRoot),'Inspect existing fixtures before repeating');fs.mkdirSync(fixtureRoot,{recursive:true});
 const sha=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex');
 const save=(p,v)=>fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');
 const plan=read('work/brief261/plan.json'),side=(p,k)=>p.replace(/\.wav$/,'.'+k+'.json');
 try{for(const original of plan.lessons){
  const dir=fixtureRoot+'/'+original.key+'/measured';fs.cpSync(original.dir,dir,{recursive:true});
  const lesson=read(dir+'/lesson.json'),selected=plan.scenes.filter(s=>s.key===original.key),accepted=[],results=[];
  for(const row of selected){
   const audio=fixtureRoot+'/'+original.key+'/'+row.id+'.wav';
   for(const k of [null,'alignment','generation'])fs.copyFileSync(k?side(row.audio,k):row.audio,k?side(audio,k):audio);
   const scene=lesson.scenes.find(s=>s.id===row.id);scene.voiceover.audioFile=audio;
   accepted.push({id:row.id,audio:row.audio,newSeconds:row.oldSeconds,scene:structuredClone(scene),gate:{pass:true,fixtureOnly:true}});
   results.push({id:row.id,audio,audioSha256:sha(audio),requestsUsed:0,attempts:[]});
  }
  save(dir+'/lesson.json',lesson);
  const l={...original,dir,measured:dir+'/lesson.json',sha256:sha(dir+'/lesson.json'),validation:dir+'/'+path.basename(original.validation),
   files:fs.readdirSync(dir,{recursive:true}).filter(n=>fs.statSync(dir+'/'+n).isFile()).map(n=>({name:n,sha256:sha(dir+'/'+n)})),
   allTakes:lesson.scenes.map(s=>({id:s.id,audio:s.voiceover.audioFile,audioSha256:sha(s.voiceover.audioFile),alignmentSha256:sha(side(s.voiceover.audioFile,'alignment')),generationSha256:sha(side(s.voiceover.audioFile,'generation'))}))};
  const result=rebuildRevoicedLesson(l,accepted,results,{evidenceRoot:fixtureRoot+'/evidence'});
  assert(result.diffPass);assert.equal(sha(l.measured),result.newMeasuredSha256);
  assert.equal(sha(result.measuredBackup+'/lesson.json'),l.sha256);
  for(const move of result.backups)assert.equal(sha(move.to),move.sha256);
  assert.equal(sha(original.measured),original.sha256);
  for(const row of selected)assert.equal(sha(row.audio),row.audioSha256);
 }}finally{assert(fixtureRoot===path.resolve('work/brief261-tests'));fs.rmSync(fixtureRoot,{recursive:true});}
});
