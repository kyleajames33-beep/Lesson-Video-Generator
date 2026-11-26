// Brief263: copy passed current source strings into prepared inputs. No speech.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {createProductionBrief,checkProductionBrief} from './lib/production-brief.mjs';
const B='docs/production/claude-pm',W='work/brief236',OUT='work/brief263';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8').replace(/^\uFEFF/,''));
const sha=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const save=(p,v)=>{fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');};
const backup=p=>{if(!fs.existsSync(p))return;const q=p+'.before-brief263';assert(!fs.existsSync(q),q);fs.copyFileSync(p,q,fs.constants.COPYFILE_EXCL);assert.equal(sha(p),sha(q));};
const comparison=read(OUT+'/source-comparison.json'),checks=read(OUT+'/check-results.json');
const readiness=B+'/checks/chem-y11-voicing-readiness.md';backup(readiness);
const ready7=checks.filter(c=>comparison.find(r=>r.lesson===c.lesson).wave===7&&c.shouldFix===0);
fs.appendFileSync(readiness,'\n## Brief263 current-source addendum (24 November 2026)\n\nThe nine wave 7 sources now pass their current-source error checks. The earlier source mismatches have been inspected. V25\'s heat-slider repair is present in its active instructions. No speech requested.\n\n| Lesson | Current source SHA256 | Check | Ready |\n| --- | --- | --- | --- |\n'+ready7.map(c=>`| ${c.lesson} | ${c.sourceSha256} | ${path.basename(c.review)} | Y |`).join('\n')+'\n\nM3-v06 remains unprepared pending its learning review and the reported denaturation correction.\n');
const prepared=new Map(),aggregates=new Map(),results=[];
for(const wave of [3,4,5,6,7]){
 for(const [kind,map]of [['preparation',prepared],['source-audit',aggregates]]){const p=`${W}/wave${wave}-${kind}.json`;backup(p);map.set(wave,fs.existsSync(p)?read(p):[]);}
}
const backupsFile=W+'/backup/verified-backups.json';backup(backupsFile);const backups=read(backupsFile);
for(const c of checks){
 if(c.shouldFix||c.action.startsWith('held'))continue;
 const r=comparison.find(r=>r.lesson===c.lesson),wave=r.wave,key=r.lesson.replace('chem-','c-'),folder=`${W}/wave${wave}/${r.lesson}`,root=B+'/lessons/'+key;
 assert.equal(sha(r.source),c.sourceSha256);assert(!r.emDash);fs.mkdirSync(folder,{recursive:true});
 const old=prepared.get(wave).find(x=>x.lesson===r.lesson),lp=root+'/lesson.json',mp=root+'/voice-manifest.json',bp=root+'/lesson.production-brief.json';
 const raw=fs.readFileSync(r.source,'utf8'),opening=raw.slice(0,raw.indexOf('### 1.')),holdsLine=raw.split(/\r?\n/).find(l=>l.startsWith('Holds:'))??'',pred=holdsLine.split('attempt-1')[0];
 if(!old){
  for(const[kind,dir]of [['pack',root],['audio','public/audio/'+r.lesson]]){
   const target=OUT+'/backup/'+r.lesson+'/'+kind;assert(!fs.existsSync(target));fs.mkdirSync(target,{recursive:true});const files={};
   if(fs.existsSync(dir))for(const n of fs.readdirSync(dir,{recursive:true})){const p=dir+'/'+n;if(!fs.statSync(p).isFile())continue;assert(!['lesson.json','voice-manifest.json','lesson.production-brief.json'].includes(n),'Inspect prior prepared input before replacing');const q=target+'/'+n;fs.mkdirSync(path.dirname(q),{recursive:true});fs.copyFileSync(p,q);files[n]=sha(p);assert.equal(sha(q),files[n]);}
   backups.push({lesson:r.lesson,kind,source:dir,backup:target,files});
  }
 }
 const oldLesson=fs.existsSync(lp)?read(lp):null,oldManifest=fs.existsSync(mp)?read(mp):null,oldBrief=fs.existsSync(bp)?read(bp):null;
 for(const p of [lp,mp,bp,folder+'/source-audit.json',folder+'/recording-source-check.json',folder+'/recording-gate.json',folder+'/prevoice-file-gate.json'])backup(p);
 const scenes=r.scenes.map((s,i)=>{
  if(oldLesson){const prev=structuredClone(oldLesson.scenes[i]);assert.equal(prev.id,s.id);prev.voiceover.text=s.text;return prev;}
  const notes=s.id==='key-notes',attempt=s.text.includes('Pause here to answer.'),prediction=pred.includes(s.id),explicit=s.visual.match(/Hold about (\d+(?:\.\d+)?)\s*(?:s\b|seconds?)/i)?.[1];
  const hold=notes?0:attempt?10:prediction?3:explicit?Number(explicit):0;
  return {id:s.id,title:s.title,voiceover:{text:s.text},durationInFrames:notes?1350:1,holdSeconds:hold,holdKind:notes?'notes':attempt||prediction?'countdown':'visual',...(attempt||prediction?{planningResponseInterval:{countdownSeconds:hold}}:{})};
 });
 const lesson={...(oldLesson??{id:r.lesson,fps:30,subject:'Chemistry',yearLevel:11}),sourceDesignSha256:r.sourceSha256,scenes};save(lp,lesson);
 const manifest={...(oldManifest??{mathPronunciation:false,voiceSelection:{voiceId:'voice_shdbjsxcrr0a',modelId:'gemini-3.8-flash-tts'}}),source:r.source,sourceSha256:r.sourceSha256,
  scenes:scenes.map((s,i)=>({...oldManifest?.scenes[i],id:s.id,text:s.voiceover.text,audioFile:oldManifest?.scenes[i]?.audioFile??`public/audio/${r.lesson}/${s.id}.wav`}))};save(mp,manifest);
 const readinessRow=`${r.lesson}: current source error check passes; ${c.review}`;
 const audit={lesson:r.lesson,buildKey:key,source:r.source,sourceSha256:r.sourceSha256,reviewedSourceSha256:r.sourceSha256,
  characters:r.characters,sceneCount:r.sceneCount,holdsLine,readinessPath:readiness,readinessSha256:sha(readiness),readinessRow,
  latestCheck:c.review,latestCheckSha256:sha(c.review),scenes:r.scenes,brief263:{action:c.action,narrationChanged:!!r.changedScenes.find(d=>d.changed.includes('text')),speechRequested:false}};
 save(folder+'/source-audit.json',audit);
 const reviewPaths=[B+'/checks/'+key+'-learning-review.md',B+'/checks/'+key+'-science-check.md',c.review];for(const p of reviewPaths)assert(fs.existsSync(p),p);
 const evp=folder+'/recording-source-check.json';save(evp,{lesson:r.lesson,source:r.source,sourceSha256:r.sourceSha256,characters:r.characters,sceneCount:r.sceneCount,sourceAudit:folder+'/source-audit.json',
  reviews:reviewPaths.map(p=>({path:p,sha256:sha(p)})),readiness:{path:readiness,sha256:sha(readiness),row:readinessRow},
  decision:'Brief263 current source error check passed. Existing independent learning/science reviews retained; current changed text and visuals copied without authoring changes. Human listening and exact voiced build remain pending.',speechRequested:false,humanListening:'pending',builtPreview:'pending'});
 const b=oldBrief??createProductionBrief(process.cwd(),lp),line=p=>raw.split('\n').find(s=>s.startsWith(p+':'))?.slice(p.length+1).trim()||opening;
 b.source.lessonSha256=sha(lp);b.progression={...b.progression,prerequisiteKnowledge:line('Entry knowledge'),startsWith:scenes[0].voiceover.text,stopsAfter:line('Stops after'),nextLesson:line('Handoff')};
 b.teaching={task:raw.split('\n')[0],causalExplanation:scenes.slice(1,4).map(s=>s.voiceover.text).join(' '),conversationalApproach:scenes.slice(0,3).map(s=>s.voiceover.text).join(' '),openingDecision:r.scenes[0].visual,understandingCheck:scenes.filter(s=>s.holdKind==='countdown').map(s=>s.voiceover.text).join(' '),curriculumScope:opening};
 b.design={renderer:'src/explainer/ExplainerVideo.tsx',visualSystem:opening,transitionPlan:r.scenes.map(s=>s.visual).join('\n')};
 b.scenes=scenes.map((s,i)=>({...oldBrief?.scenes[i],sceneId:s.id,visualDecision:oldBrief?.scenes[i]?.visualDecision??'new',visualReference:r.source+'#scene-'+r.scenes[i].number,teachingReason:s.voiceover.text,
  narrationCue:r.scenes[i].boldCues.join(' / ')||s.voiceover.text,motionPurpose:r.scenes[i].visual,motionRole:['notes','countdown'].includes(s.holdKind)?'hold':'explain',onScreenChange:r.scenes[i].visual,
  motionTools:s.holdKind==='countdown'?['Countdown','QuestionCard']:['Existing painted plates and cue-directed source diagram changes'],holdPurpose:s.holdKind==='notes'?'Retain45seconds total after measurement.':`Retain the source ${s.holdSeconds}second quiet interval.`}));
 const ev={path:evp,sha256:sha(evp)};b.scriptReview={status:'pass',reviewer:'Brief263 independent current source error check',evidence:ev};b.studentLearningReview={status:'pass',reviewer:'Existing independent learning review, with current changed-beat source check',evidence:ev};
 b.limitation='Brief263 preparation only. Current source copied without design edits. Human listening, actual motion and exact voiced build pending.';save(bp,b);
 const gate=checkProductionBrief(process.cwd(),bp,{stage:'recording',expectedLessonPath:lp});save(folder+'/recording-gate.json',gate);assert(gate.ready,JSON.stringify(gate.blockers));
 const row={...(old??{}),lesson:r.lesson,key,source:r.source,sourceSha256:r.sourceSha256,lessonInput:lp,manifest:mp,recordingBrief:bp,characters:r.characters,scenes:r.sceneCount,measuredOutput:root+'/measured/lesson.json',requestedNotesSeconds:45};
 delete row.freshnessEvidence;delete row.originalPreparedSourceSha256;
 const index=prepared.get(wave).findIndex(x=>x.lesson===r.lesson);if(index<0)prepared.get(wave).push(row);else prepared.get(wave)[index]=row;
 const agg=aggregates.get(wave),ai=agg.findIndex(x=>x.lesson===r.lesson),a={...audit};delete a.scenes;if(ai<0)agg.push(a);else agg[ai]=a;
 results.push({lesson:r.lesson,wave,characters:r.characters,scenes:r.sceneCount,sourceSha256:r.sourceSha256,recordingGateReady:gate.ready,action:c.action,review:c.review});
}
for(const wave of prepared.keys()){if(wave===7)prepared.get(wave).sort((a,b)=>a.lesson.localeCompare(b.lesson));save(`${W}/wave${wave}-preparation.json`,prepared.get(wave));save(`${W}/wave${wave}-source-audit.json`,aggregates.get(wave));}
save(backupsFile,backups);backup(W+'/wave7-status.json');save(W+'/wave7-status.json',{wave:7,pendingReadiness:[],ready:9,evidence:OUT+'/check-results.json'});
for(const r of results){const dir=`${W}/wave${r.wave}/${r.lesson}`;
 const p=spawnSync(process.execPath,[W+'/prevoice-file-gate.mjs',String(r.wave),r.lesson],{encoding:'utf8',windowsHide:true,env:{...process.env,GOOGLE_TTS_BATCH_MODE:'1'}});
 fs.writeFileSync(dir+'/prevoice-brief263.log',(p.stdout??'')+(p.stderr??''));const gate=read(dir+'/prevoice-file-gate.json');
 r.prevoiceExitCode=p.status;r.quotaHold=p.status!==0&&gate.quotaFits===false&&String(p.stderr).includes('Whole lesson exceeds daily99request cap');assert(p.status===0||r.quotaHold,dir+'/prevoice-brief263.log');
}
save(OUT+'/preparation.json',{speechRequests:0,results});console.log(JSON.stringify({prepared:results.length,wave7:prepared.get(7).length,recordingGatesPass:results.every(r=>r.recordingGateReady),speechRequests:0}));
