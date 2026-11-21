// Brief 259: inventory recording candidates and prepare only explicitly passed sources.
// No speech requests, reviews, narration edits or design edits are performed.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {createProductionBrief,checkProductionBrief} from './lib/production-brief.mjs';

const W='work/brief259/physics',B='docs/production/claude-pm';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8').replace(/^\uFEFF/,''));
const sha=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const save=(p,v)=>{fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');};
const readinessPath=process.argv[2]??B+'/checks/phys-y12-recording-readiness.json';
const signed=fs.existsSync(readinessPath)?read(readinessPath):null;
const signatures=Array.isArray(signed)?signed:signed?.rows??[];
const audit=read('docs/production/programme/syllabus-reuse-audit-2026-11-21.json');
const low=new Set(['phys-y12-m5-v10','phys-y12-m5-v15','phys-y12-m6-v08','phys-y12-m6-v15','phys-y12-m7-v02','phys-y12-m8-v01']);
const deferred=[],unreviewed=[],waves=[];

function parse(id){
  const source=B+'/lessons/'+id+'.md',raw=fs.readFileSync(source,'utf8');
  const heads=[...raw.matchAll(/^### (\d+[a-z]?)\. ([^\r\n]+)/gm)];
  const order=raw.match(/^In order[^\r\n]*:\s*([^\r\n]+)/m)?.[1].replaceAll('`','').trim().replace(/\.$/,'').split(',').map(x=>x.trim());
  assert(order&&order.length===heads.length,id+': scene count');
  const holdsLine=raw.split(/\r?\n/).find(l=>l.startsWith('Holds:'))??'';
  const beforeAttempts=holdsLine.split('attempt-1')[0];
  const scenes=heads.map((h,i)=>{
    const part=raw.slice(h.index,heads[i+1]?.index??raw.length).split(/^## /m)[0];
    const quoted=part.split(/\r?\n/).filter(l=>l.startsWith('> ')).map(l=>l.slice(2).trim()).join(' ');
    const text=quoted.replaceAll('**',''),boldCues=[...quoted.matchAll(/\*\*([^*]+)\*\*/g)].map(m=>m[1]);
    let cursor=0;for(const cue of boldCues){const at=text.indexOf(cue,cursor);assert(at>=0);cursor=at+cue.length;}
    const explicit=part.match(/Hold about (\d+(?:\.\d+)?)\s*(?:s\b|seconds?)/i)?.[1];
    const notes=order[i]==='key-notes',attempt=text.includes('Pause here to answer.'),prediction=beforeAttempts.includes(order[i])&&/countdown/i.test(beforeAttempts);
    const silent=!text.trim(),hold=notes?0:attempt?10:prediction?3:explicit?Number(explicit):silent?Number(part.match(/about (\d+) seconds/i)?.[1]??3):0;
    return {number:h[1],id:order[i],title:h[2],text,characters:text.length,boldCues,visual:part.split('Visual:')[1]?.trim()??'',
      holdSeconds:hold,holdKind:notes?'notes':attempt||prediction?'countdown':silent?'silent':'visual',
      durationInFrames:notes?1350:silent?Math.round(hold*30):1};
  });
  const key=raw.match(/Lesson key `([^`]+)`/)?.[1];assert(key,id+': build key');
  const characters=scenes.reduce((n,s)=>n+s.characters,0),sourceSha256=sha(source);
  const reviewPrefix=key+'-',checks=fs.readdirSync(B+'/checks').filter(n=>n.startsWith(reviewPrefix)&&n.endsWith('.md'));
  const matching=checks.filter(n=>{const text=fs.readFileSync(B+'/checks/'+n,'utf8');return text.includes(sourceSha256)&&/Result:\s*0 blockers,\s*0 should fix/i.test(text);});
  const sign=signatures.find(r=>(r.lesson??r.videoId)===id&&r.ready===true&&r.sourceSha256===sourceSha256);
  const learning=B+'/checks/'+key+'-learning-review.md',science=B+'/checks/'+key+'-science-check.md';
  const reviewEvidence=[learning,science,...matching.map(n=>B+'/checks/'+n)].filter(p=>fs.existsSync(p));
  const currentPassed=(!!sign||matching.length>0)&&fs.existsSync(learning)&&fs.existsSync(science);
  const emDash=raw.includes('\u2014'),ready=currentPassed&&!emDash;
  return {lesson:id,key,source,sourceSha256,characters,scenes,holdsLine,raw,
    readiness:{ready,currentPassedSourceReview:currentPassed,emDash,signature:sign??null,readinessPath:sign?readinessPath:null,
      matchingCurrentReviews:matching,existingReviews:reviewEvidence.map(p=>({path:p,sha256:sha(p)})),
      reason:ready?'Current passed recording source review and existing learning/science reviews.':emDash?'Source contains U+2014.':'No passed recording-readiness review for this exact current source; older Revision 2 reviews precede Revision 3 or root label edits.'}};
}

for(const module of [5,6,7,8]){
  const wave='P'+module,rows=[],candidates=[];
  const all=audit.rows.filter(r=>r.section==='Q1'&&r.videoId.startsWith('phys-y12-m'+module+'-'));
  all.sort((a,b)=>{const rank=r=>low.has(r.videoId)?2:r.class==='partial-2025'?1:0;return rank(a)-rank(b)||a.videoId.localeCompare(b.videoId);});
  for(const a of all){
    if(a.videoId==='phys-y12-m5-v04'){deferred.push({lesson:a.videoId,reason:'Already voiced pilot, excluded from paid waves.'});continue;}
    if(a.videoId==='phys-y12-m5-v14'){deferred.push({lesson:a.videoId,reason:'Root brief259 defers banked tracks; absent from 2025.'});continue;}
    const current=parse(a.videoId),{raw,...inventory}=current;
    const folder=W+'/'+wave+'/'+a.videoId;
    const sourceAudit={...inventory,wave,module,syllabusReuse:a.class,readinessPath:current.readiness.readinessPath,
      readinessSha256:current.readiness.readinessPath?sha(current.readiness.readinessPath):null,speechRequested:false};
    save(W+'/candidates/'+a.videoId+'/source-audit.json',sourceAudit);
    candidates.push({lesson:a.videoId,key:current.key,characters:current.characters,scenes:current.scenes.length,
      class:a.class,ready:current.readiness.ready,sourceSha256:current.sourceSha256,readiness:current.readiness,
      sourceAudit:W+'/candidates/'+a.videoId+'/source-audit.json'});
    if(!current.readiness.ready){unreviewed.push({wave,...candidates.at(-1)});continue;}
    fs.mkdirSync(folder,{recursive:true});
    const root=B+'/lessons/'+current.key,lp=root+'/lesson.json',mp=root+'/voice-manifest.json',bp=root+'/lesson.production-brief.json';
    const preparedRow={lesson:a.videoId,key:current.key,source:current.source,sourceSha256:current.sourceSha256,lessonInput:lp,manifest:mp,recordingBrief:bp,
      characters:current.characters,scenes:current.scenes.length,measuredOutput:root+'/measured/lesson.json',requestedNotesSeconds:45,moduleId:'P-M'+module,sourceAudit:folder+'/source-audit.json'};
    if(fs.existsSync(lp)||fs.existsSync(mp)||fs.existsSync(bp)){
      assert(fs.existsSync(lp)&&fs.existsSync(mp)&&fs.existsSync(bp)&&fs.existsSync(folder+'/source-audit.json'),'Incomplete prior preparation requires inspection');
      const existing=read(folder+'/source-audit.json');assert.equal(existing.sourceSha256,current.sourceSha256,'Archive changed prepared source before replacement');
      assert.deepEqual(read(lp).scenes.map(s=>s.voiceover.text),current.scenes.map(s=>s.text));
      const gate=checkProductionBrief(process.cwd(),bp,{stage:'recording',expectedLessonPath:lp});assert(gate.ready);
      rows.push(preparedRow);continue;
    }
    save(folder+'/source-audit.json',sourceAudit);
    const scenes=current.scenes.map(s=>({id:s.id,title:s.title,voiceover:{text:s.text},durationInFrames:s.durationInFrames,
      holdSeconds:s.holdSeconds,holdKind:s.holdKind,...(s.holdKind==='countdown'?{planningResponseInterval:{countdownSeconds:s.holdSeconds}}:{})}));
    save(lp,{id:a.videoId,fps:30,subject:'Physics',yearLevel:12,sourceDesignSha256:current.sourceSha256,scenes});
    save(mp,{mathPronunciation:false,source:current.source,sourceSha256:current.sourceSha256,
      voiceSelection:{voiceId:'voice_shdbjsxcrr0a',modelId:'gemini-3.8-flash-tts'},scenes:scenes.map(s=>({id:s.id,text:s.voiceover.text,audioFile:`public/audio/${a.videoId}/${s.id}.wav`}))});
    const evidence={lesson:a.videoId,source:current.source,sourceSha256:current.sourceSha256,characters:current.characters,
      reviews:current.readiness.existingReviews,readiness:current.readiness,speechRequested:false,humanListening:'pending',builtPreview:'pending'};
    save(folder+'/recording-source-check.json',evidence);
    const brief=createProductionBrief(process.cwd(),lp),opening=raw.slice(0,raw.indexOf('### 1.'));
    const line=prefix=>raw.match(new RegExp('^'+prefix+':\\s*(.+)$','m'))?.[1]??opening;
    brief.progression={...brief.progression,prerequisiteKnowledge:line('Entry knowledge'),startsWith:scenes[0].voiceover.text,stopsAfter:line('Stops after'),nextLesson:line('Handoff')};
    brief.teaching={task:raw.split('\n')[0],causalExplanation:scenes.slice(1,4).map(s=>s.voiceover.text).join(' '),conversationalApproach:scenes.slice(0,3).map(s=>s.voiceover.text).join(' '),openingDecision:current.scenes[0].visual,understandingCheck:scenes.filter(s=>s.holdKind==='countdown').map(s=>s.voiceover.text).join(' '),curriculumScope:opening};
    brief.design={renderer:'src/explainer/ExplainerVideo.tsx',visualSystem:opening,transitionPlan:current.scenes.map(s=>s.visual).join('\n')};
    brief.scenes=scenes.map((s,i)=>({sceneId:s.id,visualDecision:'new',visualReference:current.source+'#scene-'+current.scenes[i].number,
      teachingReason:s.voiceover.text||current.scenes[i].visual,narrationCue:current.scenes[i].boldCues.join(' / ')||s.voiceover.text||'Silent final hold',
      motionPurpose:current.scenes[i].visual||(s.holdKind==='notes'?'Quiet notes hold: the key notes and the memory card stay still so students can copy them.':s.title),motionRole:['countdown','notes','silent'].includes(s.holdKind)?'hold':'explain',onScreenChange:current.scenes[i].visual||(s.holdKind==='notes'?'The key notes list and memory card from the design, written on and then held.':s.title),
      motionTools:s.holdKind==='countdown'?['Countdown','QuestionCard']:['Source diagrams, painted plates and cue-directed changes'],holdPurpose:s.holdKind==='notes'?'45 seconds total after measurement.':`Retain the design's ${s.holdSeconds} second hold.`}));
    const ev={path:folder+'/recording-source-check.json',sha256:sha(folder+'/recording-source-check.json')};
    brief.scriptReview={status:'pass',reviewer:'Existing passed current source review',evidence:ev};brief.studentLearningReview={status:'pass',reviewer:'Existing independent learning review and current source readiness',evidence:ev};
    brief.limitation='Recording source preparation only. Measured timing, built playback, human listening and release review pending.';
    save(bp,brief);const gate=checkProductionBrief(process.cwd(),bp,{stage:'recording',expectedLessonPath:lp});save(folder+'/recording-gate.json',gate);assert(gate.ready,JSON.stringify(gate.blockers));
    rows.push(preparedRow);
  }
  save(W+'/'+wave+'-preparation.json',rows);save(W+'/'+wave+'-candidates.json',candidates);
  const status={wave,module,readyLessons:rows.length,readyCharacters:rows.reduce((n,r)=>n+r.characters,0),
    candidateLessons:candidates.length,candidateCharacters:candidates.reduce((n,r)=>n+r.characters,0),
    pendingReadiness:candidates.filter(r=>!r.ready).map(r=>r.lesson),state:rows.length===candidates.length?'recording inputs prepared':'held for current source readiness; unreviewed designs excluded',speechRequests:0};
  save(W+'/'+wave+'-status.json',status);waves.push(status);console.log(JSON.stringify(status));
}
save('work/brief259/physics-wave-report.json',{waves,deferred,unreviewed,readinessFileLookedFor:readinessPath,
  criterion:'Exact current source hash in a passed recording review, or explicit current-hash readiness sign-off, plus existing independent learning/science reviews. No new reviews are invented.',speechRequests:0});
