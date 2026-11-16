import fs from 'node:fs';
const boardPath='docs/production/parallel-production-board-2026-10-10.json';

import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
if(fs.existsSync('.env.local'))process.loadEnvFile('.env.local');
const base='docs/production/claude-pm',out='work/brief245/root/voice',results=[];
const redact=s=>{for(const k of ['ELEVENLABS_API_KEY','GEMINI_API_KEY'])if(process.env[k])s=s.split(process.env[k]).join('[REDACTED]');return s;};
function run(args,label){if(args[0]==='python')args[0]='C:/Users/kygs/AppData/Local/Python/pythoncore-3.14-64/python.exe';const p=spawnSync(args[0],args.slice(1),{encoding:'utf8',windowsHide:true,maxBuffer:32*1024*1024,env:{...process.env,PYTHONIOENCODING:'utf-8'}});const log=redact((p.stdout??'')+(p.stderr??''));fs.writeFileSync(`${out}/${label}.log`,log);console.log(label,p.status===0?'OK':'FAILED',p.status===0?'':log.slice(-1800));return p.status===0;}
const spendPath='work/brief245/root/spend-elevenlabs.json';
if(!fs.existsSync(spendPath))fs.writeFileSync(spendPath,JSON.stringify({run:'root 16 Nov',ownerEstimateCredits:70000,reserveCharacters:5000,cap:40000,cumulativeBilledCharacters:0,lessons:[],requests:[]},null,2));
const spend=()=>JSON.parse(fs.readFileSync(spendPath,'utf8'));
async function balance(){return (spend().cap??40000)-spend().cumulativeBilledCharacters;}
const cycle1=['chem-m8-c09','chem-m8-c10','chem-m8-c11a','chem-m8-c11b','chem-m8-c12'];const cycle1nov16a=['bio-m8-b12','bio-m8-b13','bio-m8-b14','bio-m8-b16','chem-m8-c13'];const cycle1old=['bio-m8-g03','bio-m8-p01','chem-m5-g02','bio-m8-p02','chem-m8-p03','bio-m8-b06','chem-m8-c04','bio-m8-b07','chem-m8-p04','bio-m8-b08','chem-m8-g02','bio-m8-b09','chem-m8-c05','bio-m8-b10','chem-m8-c06','bio-m8-b11','chem-m8-c08','bio-m8-g01','chem-m8-p05'];
const cycle2=['bio-m8-b12','chem-m8-c09','bio-m8-b13','bio-m8-b14','bio-m8-b16','chem-m8-c13','bio-m8-g02'];
let remaining,initial,active=null,stopReason='';
try{
 remaining=initial=await balance('balance');
 for(const name of cycle1){
  if(remaining<5000){stopReason='Credit reserve reached';break;}
  const design=`${base}/lessons/${name}.md`,text=fs.readFileSync(design,'utf8'),status=text.split(/\r?\n/).find(l=>l.startsWith('Status:'))??'';
  if(!/ready to voice/i.test(status)||/cultural hold|recording hold/i.test(status)){results.push({name,status:'skipped-status-hold',statusLine:status});continue;}
  if(name!=='bio-m8-g03'&&!run(['python',`work/brief174/gen174.py`,name],name+'-config')){results.push({name,status:'skipped-config-error'});continue;}
  // Read the key emitted by the parser. g03 keeps its existing take and folder.
  const configLog=name==='bio-m8-g03'?'m8g03':fs.readFileSync(`${out}/${name}-config.log`,'utf8'),key=configLog.trim().split(/\s+/)[0],root=`${base}/lessons/${key}`;
  if(fs.existsSync(`${root}/measured/measured-report.json`)){results.push({name,key,status:'already-measured'});continue;}
  if(!fs.existsSync(`${root}/lesson.json`)){
   if(!run(['python',`work/brief174/gen174.py`,name,'--emit'],name+'-emit')){results.push({name,key,status:'skipped-emission-error'});continue;}
   const subject=name.startsWith('bio')?'bio':'chem';
   if(!run(['python',`${base}/lessons/build_wave5_${subject}.py`,key],name+'-build')){results.push({name,key,status:'skipped-build-error'});continue;}
  }
  if(!run([process.execPath,'scripts/check-production-brief.mjs',`${root}/lesson.production-brief.json`,'--stage=recording'],name+'-recording-check')){results.push({name,key,status:'skipped-recording-check'});continue;}
  if(!fs.existsSync(`${root}/voice-manifest.json`)){
   const subject=name.startsWith('bio')?'Biology':'Chemistry',m=name.match(/-m(\d+)-([a-z])(\d+)/),take=`${subject}-Y12-M${m[1]}-${m[2].toUpperCase()}${m[3]}-claude-2026-11-05-take01`;
   if(!run([process.execPath,'scripts/prepare-teaching-reset-narration.mjs',`${root}/lesson.json`,`${root}/lesson.production-brief.json`,take],name+'-prepare')){results.push({name,key,status:'skipped-prepare-error'});continue;}
  }
  const manifest=JSON.parse(fs.readFileSync(`${root}/voice-manifest.json`)),lesson=JSON.parse(fs.readFileSync(`${root}/lesson.json`));
  if(manifest.voiceSelection.voiceId!=='cOEV2DrZBBGNLpE74kQu'||manifest.voiceSelection.modelId!=='eleven_v4')throw Error(`${name}: wrong voice/model`);
  const parts=text.split(/^### \d+[a-z]?\. /m).slice(1).map(p=>p.split(/^## |^# /m)[0]);
  const quotes=parts.map(p=>p.split(/\r?\n/).filter(l=>l.startsWith('> ')).map(l=>l.slice(2).trim()).join(' ').replaceAll('**','').trim());
  if(quotes.length!==manifest.scenes.length||quotes.some((q,i)=>q!==manifest.scenes[i].text||q!==lesson.scenes[i].voiceover.text))throw Error(`${name}: narration differs from current design`);
  if(!run([process.execPath,`work/brief174/reuse22g.cjs`,key],name+'-reuse'))throw Error(`${name}: reuse failed`);
  const args=[process.execPath,'--import','./work/brief245/root/billing-hook-root.mjs','scripts/generate-elevenlabs-audio.mjs',`${root}/voice-manifest.json`,'--voice-id=cOEV2DrZBBGNLpE74kQu','--model=eleven_v4',`--request-options=${root}/request-options.json`];
  if(!run([...args,'--dry-run'],name+'-dry-run'))throw Error(`${name}: dry run failed`);
  const todo=manifest.scenes.filter(s=>!fs.existsSync(s.audioFile)),chars=manifest.scenes.reduce((n,s)=>n+s.text.length,0),newChars=todo.reduce((n,s)=>n+s.text.length,0);
  const counts=[...text.matchAll(/Narration\s+\*?\*?([\d,]+)\s+characters/gi)].map(m=>Number(m[1].replaceAll(',','')));
  fs.writeFileSync(`${out}/${name}-character-check.json`,JSON.stringify({characters:chars,missingCharacters:newChars,designDeclaredCounts:counts,exactSceneTextMatch:true,declaredCountMatch:counts.includes(chars)},null,2));
  if(!counts.includes(chars)){results.push({name,key,status:'skipped-character-count-mismatch',characters:chars,declaredCounts:counts});continue;}
  let ledger=spend();ledger.lessons.push({name,key,dryRunNarrationCharacters:chars,missingCharacters:newChars,reused:manifest.scenes.length-todo.length,checkedAt:new Date().toISOString()});fs.writeFileSync(spendPath,JSON.stringify(ledger,null,2)+'\n');
  remaining=await balance();
  if(remaining-newChars<5000){stopReason=`Stop before ${name}: ${newChars} new characters would cross the 5000-credit reserve`;results.push({name,key,status:'deferred-credit-reserve',characters:chars,newChars,remaining});break;}
  const before=remaining;let generated=0;active={name,key,characters:chars,before,missingAtStart:todo.map(s=>s.audioFile),sceneCount:manifest.scenes.length};
  // One-scene invocations make any first error stop the whole wave; the legacy generator otherwise continues.
  for(const scene of manifest.scenes){process.env.BRIEF194_LESSON=name;process.env.BRIEF194_SCENE=scene.id;if(!run([...args,`--scene=${scene.id}`],name+'-voice-'+scene.id))throw Error(`${name}: generation stopped on ${scene.id}. No retry.`);if(todo.some(s=>s.id===scene.id))generated++;}
  remaining=await balance(name+'-balance-after');
  if(!run([process.execPath,'scripts/assemble-teaching-reset-narration.mjs',`${root}/lesson.json`],name+'-assemble'))throw Error(`${name}: assembly failed; takes saved`);
  const measured=JSON.parse(fs.readFileSync(`${root}/measured/lesson.json`));
  const row={name,key,status:'measured',characters:chars,creditsUsed:before-remaining,generated,reused:manifest.scenes.length-generated,durationSeconds:measured.scenes.reduce((n,s)=>n+s.durationInFrames,0)/measured.fps,report:`${root}/measured/measured-report.json`,remaining};
  results.push(row);active=null;fs.writeFileSync(`${out}/results.json`,JSON.stringify(results,null,2));console.log(JSON.stringify(row));
 }
}catch(e){stopReason=redact(e.message);console.log('STOP',stopReason);results.push({status:'stopped',reason:stopReason});if(active){try{remaining=await balance('balance-after-stop');}catch{}const generated=active.missingAtStart.filter(p=>fs.existsSync(p)).length;results.push({name:active.name,key:active.key,status:'partial-stopped',characters:active.characters,generated,reused:active.sceneCount-active.missingAtStart.length,creditsUsed:active.before-remaining,remaining,reason:stopReason});}}
fs.writeFileSync(`${out}/results.json`,JSON.stringify({initial,remaining,stopReason,results},null,2));
fs.appendFileSync(`${base}/status.md`,'\n\n## Root ElevenLabs voicing, 16 November 2026 (Module 8 b12, b13, b14, b16, c13; readiness review work/brief245/root/m8-voice-readiness.md)\n\nPlan allowance: '+(initial??'unavailable')+' credits. Plan allowance less cumulative billed characters: '+(remaining??'unavailable')+'. '+(stopReason||'Cycle complete.')+'\n\n'+results.map(r=>(r.name??'Wave')+': '+r.status+(r.status==='measured'?`, ${r.characters} characters, ${r.creditsUsed} credits used, ${r.generated} scenes generated, ${r.reused} reused, ${r.durationSeconds.toFixed(2)} seconds. Report: ${r.report}`:'')+'.').join('\n\n')+'\n\nDetails and recording/dry-run checks: work/brief174/results.json and work/brief174/*.log. No design edits or commits. Human listening pending.\n');
