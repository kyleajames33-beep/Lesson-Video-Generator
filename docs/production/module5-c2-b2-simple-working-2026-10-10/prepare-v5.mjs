import {readFileSync,writeFileSync,mkdirSync,readdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {verifyAssembly} from '../../../scripts/lib/verify-assembly.mjs';
import {lessonTimeline} from '../../../src/lesson/timeline.mjs';

const docs='docs/production/module5-c2-b2-simple-working-2026-10-10';
const priorDocs='docs/production/module5-c2-b2-caption-safe-v4-2026-10-10';
const sha=b=>createHash('sha256').update(b).digest('hex'),hash=p=>sha(readFileSync(p));
const read=p=>JSON.parse(readFileSync(p,'utf8')),json=v=>JSON.stringify(v,null,2)+'\n';
const assert=(c,m)=>{if(!c)throw Error(m);};
const collect=dir=>readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?collect(`${dir}/${e.name}`):[`${dir}/${e.name}`]);
const preservedFiles=[...collect(priorDocs),...['c2','b2'].flatMap(key=>collect(`out/prototypes/module5-${key}-voiced-2026-10-10`).filter(p=>!/\/narrated-v5\.lesson\.json$|\/remotion-props-v5\.json$/.test(p)))].map(path=>({path,sha256:hash(path)}));
const record={schemaVersion:1,status:'author-preparation-pending-independent-science-source-and-preview-review',baselineRuntime:'1fd9fd2a3c421e796b7a7478c8271615f4e88815',
 purpose:'Respond to user feedback about clutter and plain explanations for students beginning Year 12. Keep the current question, relevant evidence and one current reasoning stage. Remove the established-result trail only in the new opt-in layout.',
 runtimeOwnership:'Root owns focusedContext types and renderer. This author changes only additive selected presentation data and records.',
 sourceFiles:['src/lesson/types.ts','src/slides/shared/Module5EvidenceBoard.tsx','src/slides/QuickCheckSlide.tsx'].map(path=>({path,sha256:hash(path)})),
 invariants:{onlyThreeCalculationPresentationsDiffer:true,spokenWordsAudioCaptionsDurationsRevealDelaysAndLineAtsUnchanged:true,stageCountAndTwoLineShapeUnchanged:true,noPaidVoiceOrRender:true,preservedPriorFiles:true},
 geometry:{estimatesOnly:true,contextTop:350,contextWidth:600,workingLeft:704,workingRight:64,questionTop:142,captionReserveStartsAt:850,contextFontSize:50,resultFontSize:58,stageLabelFontSize:48,maximumContextRows:5,estimatedFiveUnwrappedRowCardBottom:830.2,headerEquationOmitted:true,limitation:'Source layout estimate assumes one line for each context row/title. Native wrapping, glyph bounds, entry transforms, caption controls and small-player fit require the exact new pilots.'},
 preservedFiles,alignmentCues:[],packages:[],pilots:[],reviewStatus:{science:'pending',independentSource:'pending',nativePreview:'pending',humanListening:'pending',release:'pending'}};
const pending={status:'pending',reviewer:'',evidence:null},outputs=[];

function contextsFor(scene,fps,key){
 const audio=scene.voiceover.audioFile,alignmentPath=audio.replace(/\.(wav|mp3)$/i,'.alignment.json');
 const alignment=read(alignmentPath),text=alignment.characters.join('');
 const cue=phrase=>{
  const index=text.toLowerCase().indexOf(phrase.toLowerCase());assert(index>=0,`Missing measured phrase ${phrase}`);
  const seconds=alignment.character_start_times_seconds[index],at=Math.ceil(seconds*fps-1e-7);
  record.alignmentCues.push({key,sceneId:scene.id,phrase,alignmentPath,alignmentSha256:hash(alignmentPath),characterIndex:index,startSeconds:seconds,frame:at,units:'scene-local frames, ceiling of measured phrase onset'});
  return at;
 };
 const rows=[];
 const add=(at,title,lines,task,secondaryTask)=>rows.push({at,title,lines,...(task?{task}:{}),...(secondaryTask?{secondaryTask}:{})});
 if(scene.id==='c2-transfer'){
  const task='Which substance increases at first?';
  const secondary='Same start + suitable catalyst: does the final amount of D change?';
  add(0,'A different start',[],task,secondary);
  add(cue('C and D interconvert'),'C ⇌ D: one-for-one',[],task,secondary);
  add(cue('closed container'),'C ⇌ D: one-for-one',['Closed container'],task,secondary);
  add(cue('constant temperature'),'C ⇌ D: one-for-one',['Closed container','Fixed temperature, volume'],task,secondary);
  add(cue('mostly as D'),'C ⇌ D: one-for-one',['Closed; mostly D','Fixed temperature, volume'],task,secondary);
  add(cue('a forward rate'),'C ⇌ D: one-for-one',['Closed; mostly D','Fixed temperature, volume','C → D: 2 rate units'],task,secondary);
  add(cue('a reverse rate'),'C ⇌ D: one-for-one',['Closed; mostly D','Fixed temperature, volume','C → D: 2 rate units','D → C: 6 rate units'],task,secondary);
  add(cue('same scale'),'C ⇌ D: one-for-one',['Closed; mostly D','Fixed temperature, volume','C → D: 2 rate units','D → C: 6 rate units','Both rates: same scale'],task,secondary);
  add(cue('C initially increases'),'Use both supplied rates',['C → D: 2 rate units','D → C: 6 rate units','Both rates: same scale','One-for-one conversion'],task,secondary);
  add(cue('With the suitable catalyst'),'With a suitable catalyst',['Identical starting mixture','Same temperature + volume','Same closed container','Only change: catalyst'],task,secondary);
  scene.calculationPresentation.task=task;
  const stages=scene.calculationPresentation.stages;
  stages[0].label='What changes first?';stages[0].lines=['C increases at first.','D → C makes C.'];
  stages[1].label='Net: made minus used';stages[1].lines=['Makes C: 6; uses C: 2.','Net: 6 − 2 = 4 towards C.'];
  stages[2].label='With a suitable catalyst';stages[2].lines=['It gets to equilibrium sooner.','Same final concentration of D.'];
 }else if(scene.id==='worked-example'){
  const task='Where do egg and sperm join?',secondary='That joining is fertilisation.';
  add(0,'Use the supplied location',[],task,secondary);
  add(cue('In the frog case'),'Frog case',[],task,secondary);
  add(cue('eggs and sperm meet'),'Frog case',['Eggs + sperm meet','in pond water'],task,secondary);
  add(cue('In the kangaroo case'),'Kangaroo case',[],task,secondary);
  add(cue('sperm meets egg'),'Kangaroo case',['Sperm meets egg','inside the female'],task,secondary);
  add(cue('Now the bird'),'Bird case',[],task,secondary);
  add(cue('already fertilised egg'),'Bird case',['Egg already fertilised','before it is laid.'],task,secondary);
  scene.calculationPresentation.task=task;
  const stages=scene.calculationPresentation.stages;
  stages[0].label='Where they join';stages[0].lines=['External: egg + sperm join outside.','Moist water + nearby release help them meet.'];
  stages[1].label='Where they join';stages[1].lines=['Internal: they join inside the female.','Moist conditions help prevent drying.'];
  stages[2].label='Joining and later development';stages[2].lines=['Internal: they joined inside, before laying.','Development later happens outside, in the egg.'];
 }else if(scene.id==='quick-check'){
  const task='How does the current affect egg and sperm meeting?';
  const secondary='Why might different numbers of offspring survive?';
  add(0,'A supplied water model',[],task,secondary);
  add(cue('adults release'),'Group 1',['Eggs + sperm released'],task,secondary);
  add(cue('same patch'),'Group 1',['Same place','Same time'],task,secondary);
  add(cue('A second group'),'Compare two groups',['Group 1: same place','and the same time'],task,secondary);
  add(cue('same numbers'),'Equal gamete numbers',['Group 1: same place','and the same time'],task,secondary);
  add(cue('stronger current'),'Equal gamete numbers',['Group 1: same place','and the same time','Group 2: stronger current','carries sperm from eggs'],task,secondary);
  add(cue('gametes remain viable'),'Equal gamete numbers',['Same time able to join','Group 1: same place','and the same time','Group 2: stronger current','carries sperm from eggs'],task,secondary);
  add(cue('In the stated model'),'What changed?',['Same gamete numbers','Same time able to join','Sperm carried away'],task,secondary);
  add(cue('And fertilisation'),'Two separate outcomes',['1. Egg + sperm join','2. Offspring survive','to reproduce'],task,secondary);
  scene.calculationPresentation.task=task;
  const stages=scene.calculationPresentation.stages;
  stages[0].label='What changed?';stages[0].lines=['The current carries sperm away.','Fewer chances to fertilise eggs.'];
  stages[1].label='What can we predict?';stages[1].lines=['Fewer chances for egg and sperm to meet.','We cannot give an exact count of fertilised eggs.'];
  stages[2].label='Joining is only the start';stages[2].lines=['Fertilisation does not ensure later survival.','Development, predators and conditions matter.'];
 }else throw Error('Unexpected selected task.');
 assert(rows[0].at===0&&rows.every((r,i)=>r.lines.length<=5&&(!i||r.at>rows[i-1].at)),'Context rows or order invalid.');
 return rows;
}

for(const key of ['c2','b2']){
 const out=`out/prototypes/module5-${key}-voiced-2026-10-10`,parentPath=`${out}/narrated-v4.lesson.json`,candidatePath=`${out}/narrated-v5.lesson.json`,propsPath=`${out}/remotion-props-v5.json`;
 const original=read(parentPath),lesson=structuredClone(original),ids=key==='c2'?['c2-transfer']:['worked-example','quick-check'];
 for(const scene of lesson.scenes){
  if(scene.voiceover)assert(verifyAssembly(scene,lesson.fps).length===0,`Media provenance ${scene.id}`);
  if(ids.includes(scene.id))scene.calculationPresentation.focusedContext=contextsFor(scene,lesson.fps,key);
 }
 const recovered=structuredClone(lesson);for(const scene of recovered.scenes.filter(s=>ids.includes(s.id)))scene.calculationPresentation=original.scenes.find(s=>s.id===scene.id).calculationPresentation;
 assert(JSON.stringify(recovered)===JSON.stringify(original),'Change outside selected presentations.');
 for(const id of ids){
  const old=original.scenes.find(s=>s.id===id).calculationPresentation,newPresentation=lesson.scenes.find(s=>s.id===id).calculationPresentation;
  assert(old.stages.length===newPresentation.stages.length,'Stage count changed.');
  old.stages.forEach((s,i)=>assert(JSON.stringify(s.lineAts)===JSON.stringify(newPresentation.stages[i].lineAts)&&s.lines.length===newPresentation.stages[i].lines.length,'Line timing/shape changed.'));
 }
 const parentBriefPath=`${priorDocs}/${key}/production-brief.json`,brief=read(parentBriefPath);
 assert(brief.source.lessonPath===parentPath&&brief.source.lessonSha256===hash(parentPath),'Parent brief drift.');
 brief.source={lessonPath:candidatePath,lessonSha256:sha(json(lesson))};
 brief.originV4={lessonPath:parentPath,lessonSha256:hash(parentPath),briefPath:parentBriefPath,briefSha256:hash(parentBriefPath),runtimeBaseline:record.baselineRuntime,scope:'Historical exact v4 package. New focused context/display copy and runtime require v5 review.'};
 brief.scriptReview={...pending,scope:'V5 display-only plain wording and focused context require independent science and source review. Recorded words and timing are unchanged.'};
 brief.voicedPreview={...pending,mode:'',inputSnapshotPath:'',humanListening:{...pending,mode:'human-listening'}};
 brief.limitation='V5 source estimates and author invariants only. Independent science/source review, exact full-task pilots, native caption/control and small-player checks, human listening and release gates remain pending.';
 for(const row of brief.scenes.filter(r=>ids.includes(r.sceneId))){
  const scene=lesson.scenes.find(s=>s.id===row.sceneId),p=scene.calculationPresentation;
  row.visualDecision='adjust';row.visualReference='Existing Module5EvidenceBoard through the opted-in focusedContext path, root-authored runtime; two-column context/current working, no established trail.';
  row.teachingReason=scene.id==='worked-example'?'Use one animal case at a time. Plain joining language preserves internal/external fertilisation and keeps bird development separate from fertilisation. Supplied location appears before classification; prior answer disappears when the next case prompt begins.':scene.id==='c2-transfer'?'Retain both questions and every stated model condition through the answer-free hold. Explain net as made minus used. Retain supplied rates for the rate explanation; replace them with identical-start/fixed-condition evidence for the catalyst comparison.': 'Retain both questions, equal numbers/lifetimes and the two water conditions through the answer-free hold. Focus current-driven separation first, qualify the prediction, then separate fertilisation from later survival.';
  row.narrationCue=json({units:'scene-local frames',focusedContext:p.focusedContext.map(c=>({at:c.at,title:c.title})),unchangedStageCues:scene.revealDelays.stepAts,unchangedLineCues:p.stages.map(s=>s.lineAts),responseHold:scene.responseHold??null}).trim();
  row.motionPurpose='Only context changes with the spoken case or relevant feedback. Current working reveals at the original stage and line cues. Neutral labels avoid announcing a future result. No established-result trail or decorative movement. Text stays fixed after the short entrance.';
  row.holdPurpose=scene.responseHold?`Preserve the exact answer-free silence from ${scene.responseHold.startFrame} to ${scene.responseHold.endFrame}. All prompt conditions and both questions remain visible. Two result lines use unchanged measured cues. New full-scene pilot checks native wrapping, captions, controls and small-player fit; listening remains pending.`:'Preserve original narration/caption timing and reading tail. One case replaces the previous case on its spoken cue; each supplied location precedes its reasoning. New complete worked-scene pilot and human listening remain pending.';
 }
 const timeline=lessonTimeline(lesson),configs=[];
 for(const id of ids){
  const entry=timeline.scenes.find(s=>s.scene.id===id),name=id==='c2-transfer'?'transfer':id==='worked-example'?'worked':'quick';
  const priorConfigPath=`${priorDocs}/${key}/${name==='transfer'?'transfer-pilot03':name==='worked'?'worked-pilot03':'quick-pilot01'}-config.json`,config=read(priorConfigPath);
  config.lessonPath=candidatePath;config.teachingBriefPath=`${docs}/${key}/production-brief.json`;
  config.frameRange=[entry.startFrame,entry.endFrame-1];config.inputs=[...new Set([...(config.inputs??[]),`${docs}/correction-record.json`])];
  const configPath=`${docs}/${key}/${name}-pilot-config.json`,proposedOutputDirectory=`${out}/${name}-simple-pilot01`;
  configs.push(configPath);outputs.push([configPath,json(config)]);
  record.pilots.push({key,sceneId:id,configPath,proposedOutputDirectory,localFrameRangeInclusive:[0,entry.scene.durationInFrames-1],globalFrameRangeInclusive:config.frameRange,frames:entry.scene.durationInFrames,seconds:entry.scene.durationInFrames/lesson.fps,scope:'Complete task scene including prompt, full response hold when present, all feedback and reading tail. Adjacent transition overlap remains part of the actual lesson runtime.'});
 }
 record.packages.push({key,parent:{path:parentPath,sha256:hash(parentPath)},candidate:{path:candidatePath,sha256:sha(json(lesson))},props:{path:propsPath,sha256:sha(json({lesson}))},parentBrief:{path:parentBriefPath,sha256:hash(parentBriefPath)},briefPath:`${docs}/${key}/production-brief.json`,selectedSceneIds:ids,fullTimelineDurationInFrames:timeline.durationInFrames,configPaths:configs});
 outputs.push([candidatePath,json(lesson)],[propsPath,json({lesson})],[`${docs}/${key}/production-brief.json`,brief]);
}
for(const f of preservedFiles)assert(hash(f.path)===f.sha256,`Prior input changed ${f.path}`);
const recordPath=`${docs}/correction-record.json`,recordBytes=json(record);
const replaceDraft=process.argv.includes('--replace-draft');
if(replaceDraft)assert(!existsSync(`${docs}/frozen-author-inputs.json`),'Cannot replace a frozen v5 draft.');
for(const[p,content]of outputs){
 const bytes=typeof content==='object'?json({...content,simpleWorkingEvidence:{path:recordPath,sha256:sha(recordBytes)}}):content;
 assert(replaceDraft||!existsSync(p),`Refusing overwrite ${p}`);assert(!bytes.includes('\u2014'),`Forbidden punctuation ${p}`);
 mkdirSync(p.slice(0,p.lastIndexOf('/')),{recursive:true});writeFileSync(p,bytes,{flag:replaceDraft?'w':'wx'});
}
writeFileSync(recordPath,recordBytes,{flag:replaceDraft?'w':'wx'});
console.log(json({status:record.status,correctionRecord:{path:recordPath,sha256:hash(recordPath)},packages:record.packages,pilots:record.pilots,sourceFiles:record.sourceFiles,preservedFiles:preservedFiles.length}));
