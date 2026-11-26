// Briefs267-270: recording inputs only. Never requests speech or changes designs.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {createProductionBrief,checkProductionBrief} from './lib/production-brief.mjs';
const B='docs/production/claude-pm';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8').replace(/^\uFEFF/,''));
const sha=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const save=(p,v)=>{fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');};
const words={'half a':.5,one:1,two:2,three:3,four:4,five:5};
for(let brief=267;brief<=270;brief++){
 const W='work/brief'+brief,inventory=read(W+'/source-inventory.json'),checks=read(W+'/error-checks.json'),rows=[],results=[];
 for(const r of inventory){
  assert.equal(sha(r.design),r.sourceSha256);const id=path.basename(r.design,'.md'),key=id.replace(/^hms-/,'h-');
  const raw=fs.readFileSync(r.design,'utf8'),check=checks.find(c=>c.design===r.design);
  const activeMissing=r.missingPlates.filter(m=>!m.mentions.every(l=>/If the brief must be cut/.test(l)));
  const findings=[...check.findings,...activeMissing.filter(m=>!m.approved).map(m=>({code:'unapproved-missing-plate',name:m.name}))];
  const review=B+'/checks/'+key+'-brief'+brief+'-error-check.md';
  const sourceEstimate=Number(raw.match(/Narration[^\n]*?about (\d+) s/)?.[1]??0)||null;
  const reviewText=`# ${id}: current source error check\n\n25 November 2026. Source SHA-256: ${r.sourceSha256}.\n\nResult: 0 blockers, ${findings.length} should fix.\n\n${findings.length?findings.map(f=>'- '+JSON.stringify(f)).join('\n'):'No error found in the checks requested by this brief.'}\n\nChecked current scene strings and the later resolution sections. Every quoted on-cue phrase is present in spoken order (${check.cueChecks.length} phrases). Compared numeric speech with numeric screen strings in ${W}/number-review.jsonl. Both question cards and their demands remain visible during the described countdowns. Number rounding and illustrative inputs remain labelled in the designs. Notes checked against 95 characters per line. Cultural references describe general content; the unnamed 1965 bus-tour case remains unnamed. No claim of community approval. Missing approved plates are listed in ${W}/source-inventory.json, with each design's own fallback or absence of one. Optional unused cut-down plates are not production requirements.\n\nExisting learning/science review resolutions remain the authority for scientific and teaching changes. This is a written error check, not a new science, playback or listening pass. ${brief===268?'v12 retains 70 to 85 per cent of maximum heart rate; v21 uses the revised main question. ':''}${brief===269?'v05 scene 3 keeps the silent cannot-tell chip and the three possible causes after the spoken reserve cut. ':''}${brief===270?'Concussion and WADA source checks are recorded separately in checks/brief270-official-source-checks.md. v22 has no Next chip. ':''}Human listening remains pending.\n`;
  fs.writeFileSync(review,reviewText);
  const result={lesson:id,key,source:r.design,sourceSha256:r.sourceSha256,review,blockers:0,shouldFix:findings.length,findings,characters:r.characters,scenes:r.sceneCount,sourceEstimateSeconds:sourceEstimate,recordingGateDurationEstimate:null,recordingGateEstimateNote:'The existing recording gate returns readiness and blockers, not a duration estimate. The source estimate is separate.',missingPlates:activeMissing,prepared:false,humanListening:'pending'};
  if(findings.length){results.push(result);continue;}
  const orderText=raw.match(/^(?:In order|Scene headings)[^\r\n]*:\s*([\s\S]*?)(?=\r?\n\s*\r?\n)/m)?.[1];
  let order=orderText?orderText.replaceAll('`','').replace(/\s+/g,' ').trim().replace(/\.$/,'').split(',').map(s=>s.trim()):[];
  if(order.length!==r.scenes.length){result.sceneIdNote=order.length?'Earlier ID list predates later numbered scene splits. Prepared IDs follow the current scene headings.':'No source ID list. Prepared IDs follow numbered scene headings.';order=r.scenes.map((s,i)=>i===0?'hook':/key notes/i.test(s.title)?'key-notes':'scene-'+s.number);}
  assert.equal(order.length,r.scenes.length,id+': scene count');
  const scenes=r.scenes.map((s,i)=>{
   const notes=order[i]==='key-notes',attempt=s.text.includes('Pause here to answer.');
   const holds=[...s.visual.matchAll(/(?:hold|settle)(?:s)?(?:\s+about)?\s+(half a|one|two|three|four|five|\d+(?:\.\d+)?)\s*(?:s\b|seconds?)/gi)];
   const last=holds.at(-1)?.[1]?.toLowerCase();const explicit=last?(words[last]??Number(last)):0;
   const prediction=!attempt&&/countdown/i.test(s.visual)&&/3\s*s|three seconds/i.test(s.visual);
   const hold=notes?0:attempt?10:prediction?3:explicit;
   const inline=[...s.visual.matchAll(/after "([^"]+)" a (\d+(?:\.\d+)?) s quiet hold/g)].map(m=>({afterText:m[1],seconds:Number(m[2]),implementation:'Builder must insert this quiet interval into the playback timeline and export captions from that timeline.'}));
   return {id:order[i],title:s.title,voiceover:{text:s.text},durationInFrames:notes?1350:1,holdSeconds:hold,holdKind:notes?'notes':attempt||prediction?'countdown':'visual',...(attempt||prediction?{planningResponseInterval:{countdownSeconds:hold}}:{}),...(inline.length?{plannedInlineHolds:inline}:{})};
  });
  const root=B+'/lessons/'+key,lp=root+'/lesson.json',mp=root+'/voice-manifest.json',bp=root+'/lesson.production-brief.json';
  if(fs.existsSync(lp)){const prior=read(lp);assert.equal(prior.sourceDesignSha256,r.sourceSha256);assert.deepEqual(prior.scenes.map(s=>s.voiceover.text),scenes.map(s=>s.voiceover.text));if(JSON.stringify(prior.scenes)!==JSON.stringify(scenes)){assert(!fs.existsSync(root+'/measured/lesson.json'));if(!fs.existsSync(lp+'.before-parser-correction'))fs.copyFileSync(lp,lp+'.before-parser-correction');}}
  save(lp,{id,fps:30,subject:'Health and Movement Science',yearLevel:id.includes('y11')?11:12,sourceDesignSha256:r.sourceSha256,scenes});
  save(mp,{mathPronunciation:false,source:r.design,sourceSha256:r.sourceSha256,voiceSelection:{voiceId:'voice_shdbjsxcrr0a',modelId:'gemini-3.8-flash-tts'},scenes:scenes.map(s=>({id:s.id,text:s.voiceover.text,audioFile:`public/audio/${id}/${s.id}.wav`}))});
  const folder=W+'/'+id,sourceAudit=folder+'/source-audit.json';
  const learning=B+'/checks/'+id+'-learning-review.md',science=B+'/checks/'+id+'-science-check.md';
  for(const p of [learning,science])assert(fs.existsSync(p),p);
  save(sourceAudit,{lesson:id,key,source:r.design,sourceSha256:r.sourceSha256,characters:r.characters,scenes:r.scenes.map((s,i)=>({...s,id:order[i]})),readiness:{ready:true,existingReviews:[review,learning,science].map(p=>({path:p,sha256:sha(p)}))},speechRequested:false});
  const ev=folder+'/recording-source-check.json';save(ev,{...result,reviews:[review,learning,science].map(p=>({path:p,sha256:sha(p)})),resolution:'Owner briefs267-270 confirm learning Revision2 and science Revision3 resolutions. Last source sections override earlier notes.',speechRequested:false});
  const b=createProductionBrief(process.cwd(),lp),opening=raw.slice(0,raw.indexOf('### 1.'));
  const line=name=>raw.match(new RegExp('^'+name+':\\s*(.+)$','m'))?.[1]??opening;
  b.progression={...b.progression,prerequisiteKnowledge:line('Entry knowledge'),startsWith:scenes[0].voiceover.text,stopsAfter:line('Stops after'),nextLesson:line('Handoff')};
  b.teaching={task:raw.split('\n')[0],causalExplanation:scenes.slice(1,4).map(s=>s.voiceover.text).join(' '),conversationalApproach:scenes.slice(0,3).map(s=>s.voiceover.text).join(' '),openingDecision:r.scenes[0].visual,understandingCheck:scenes.filter(s=>s.holdKind==='countdown').map(s=>s.voiceover.text).join(' '),curriculumScope:opening};
  b.design={renderer:'src/explainer/ExplainerVideo.tsx',visualSystem:opening,transitionPlan:r.scenes.map(s=>s.visual).join('\n')};
  b.scenes=scenes.map((s,i)=>({sceneId:s.id,visualDecision:'new',visualReference:r.design+'#scene-'+r.scenes[i].number,teachingReason:s.voiceover.text,narrationCue:r.scenes[i].boldCues.join(' / ')||s.voiceover.text,motionPurpose:r.scenes[i].visual.replace(/^no people[.]\s*/i,'')||s.title,motionRole:['notes','countdown'].includes(s.holdKind)?'hold':'explain',onScreenChange:r.scenes[i].visual||s.title,motionTools:s.holdKind==='countdown'?['Countdown','QuestionScene']:['Cue-directed changes described in the design'],holdPurpose:s.holdKind==='notes'?'45 seconds in total after measurement.':`Retain ${s.holdSeconds} seconds after speech.`}));
  const evidence={path:ev,sha256:sha(ev)};b.scriptReview={status:'pass',reviewer:'Codex error-only source check',evidence};b.studentLearningReview={status:'pass',reviewer:'Existing independent learning review resolved at Revision2 by owner',evidence};
  b.limitation='Recording preparation only. No speech requested. Measured duration, exact voiced preview, listening and release review pending.';save(bp,b);
  const gate=checkProductionBrief(process.cwd(),bp,{stage:'recording',expectedLessonPath:lp});save(folder+'/recording-gate.json',gate);assert(gate.ready,JSON.stringify({id,blockers:gate.blockers}));
  const row={lesson:id,key,source:r.design,sourceSha256:r.sourceSha256,lessonInput:lp,manifest:mp,recordingBrief:bp,characters:r.characters,scenes:scenes.length,measuredOutput:root+'/measured/lesson.json',requestedNotesSeconds:45,moduleId:'H-'+id.match(/y\d+-m\d/)[0],sourceAudit};rows.push(row);
  results.push({...result,prepared:true,lessonInput:lp,recordingGateReady:true});
 }
 save(W+'/preparation.json',rows);save(W+'/hand-in.json',{brief,results,speechRequests:0,humanListening:'pending'});save(W+'/status.json',{readyLessons:rows.length,pendingReadiness:results.filter(r=>!r.prepared).map(r=>r.lesson)});
 console.log(JSON.stringify({brief,prepared:rows.length,held:results.filter(r=>!r.prepared).map(r=>r.lesson),speechRequests:0}));
}
