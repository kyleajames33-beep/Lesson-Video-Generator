import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {verifyAssembly} from '../../../scripts/lib/verify-assembly.mjs';
import {checkProductionBrief} from '../../../scripts/lib/production-brief.mjs';
import {lessonTimeline} from '../../../src/lesson/timeline.mjs';

const docs='docs/production/module5-c2-b2-simple-working-2026-10-10';
const sha=b=>createHash('sha256').update(b).digest('hex'),hash=p=>sha(readFileSync(p));
const read=p=>JSON.parse(readFileSync(p,'utf8')),json=v=>JSON.stringify(v,null,2)+'\n';
const assert=(c,m)=>{if(!c)throw Error(m);};
const write=(p,bytes)=>{if(existsSync(p))assert(readFileSync(p,'utf8')===bytes,`Prior check log differs ${p}`);else writeFileSync(p,bytes,{flag:'wx'});};
const record=read(`${docs}/correction-record.json`),markup=read(`${docs}/markup-check.json`),checks=[],files=[];
assert(markup.status==='pass','Markup check failed.');
for(const f of record.preservedFiles)assert(hash(f.path)===f.sha256,`Preserved file drift ${f.path}`);
for(const f of record.sourceFiles)assert(hash(f.path)===f.sha256,`Root runtime changed after source capture ${f.path}`);
for(const cue of record.alignmentCues){
 assert(hash(cue.alignmentPath)===cue.alignmentSha256,'Measured alignment changed.');
 const alignment=read(cue.alignmentPath);
 assert(alignment.characters.join('').slice(cue.characterIndex,cue.characterIndex+cue.phrase.length).toLowerCase()===cue.phrase.toLowerCase(),'Cue phrase mismatch.');
 assert(Math.ceil(alignment.character_start_times_seconds[cue.characterIndex]*30-1e-7)===cue.frame,'Measured frame mismatch.');
}
for(const entry of record.packages){
 const old=read(entry.parent.path),lesson=read(entry.candidate.path),props=read(entry.props.path);
 assert(hash(entry.parent.path)===entry.parent.sha256&&hash(entry.candidate.path)===entry.candidate.sha256&&hash(entry.props.path)===entry.props.sha256,'Candidate bytes drift.');
 assert(JSON.stringify(props.lesson)===JSON.stringify(lesson),'Portable props mismatch.');
 const restored=structuredClone(lesson),selected=[];
 for(const scene of restored.scenes.filter(s=>entry.selectedSceneIds.includes(s.id))){
  const previous=old.scenes.find(s=>s.id===scene.id),p=scene.calculationPresentation,prior=previous.calculationPresentation;
  const presentation=structuredClone(p);delete presentation.focusedContext;presentation.task=prior.task;
  presentation.stages.forEach((s,i)=>{assert(s.lines.length===2&&JSON.stringify(s.lineAts)===JSON.stringify(prior.stages[i].lineAts),'Stage line timing/shape changed.');s.label=prior.stages[i].label;s.lines=prior.stages[i].lines;});
  assert(JSON.stringify(presentation)===JSON.stringify(prior),'Unexpected presentation fields changed.');
  assert(p.focusedContext.every(c=>c.lines.length<=5&&!c.equation),'Context rows/header equation constraint failed.');
  if(scene.responseHold){
   const context=p.focusedContext.filter(c=>c.at<=scene.responseHold.startFrame).at(-1);
   assert(context.secondaryTask&&p.focusedContext.every(c=>c.task&&c.secondaryTask),'Both questions must remain throughout the hold and feedback.');
   assert(!p.focusedContext.some(c=>c.at>=scene.responseHold.startFrame&&c.at<scene.responseHold.endFrame),'Context changes inside silent hold.');
  }
  selected.push({sceneId:scene.id,unchangedStepAts:scene.revealDelays.stepAts,unchangedLineAts:p.stages.map(s=>s.lineAts),contextCues:p.focusedContext.map(c=>c.at),responseHold:scene.responseHold??null,stageCount:prior.stages.length,stageSummariesUnchanged:true});
  scene.calculationPresentation=prior;
 }
 assert(JSON.stringify(restored)===JSON.stringify(old),'Change outside only selected calculation presentations.');
 const media=lesson.scenes.filter(s=>s.voiceover).map(s=>({sceneId:s.id,errors:verifyAssembly(s,lesson.fps)}));
 assert(media.every(s=>s.errors.length===0),'Audio/caption/response provenance failed.');
 const timeline=lessonTimeline(lesson);
 for(const pilot of record.pilots.filter(p=>p.key===entry.key)){
  const scene=timeline.scenes.find(s=>s.scene.id===pilot.sceneId),config=read(pilot.configPath);
  assert(JSON.stringify(config.frameRange)===JSON.stringify([scene.startFrame,scene.endFrame-1]),'Full-scene pilot range mismatch.');
  assert(config.lessonPath===entry.candidate.path&&config.teachingBriefPath===entry.briefPath,'Config source/brief mismatch.');
  assert(config.audioMode==='alignedPcm'&&config.scale===1&&config.crf===16&&config.concurrency===1&&config.normalizeAudio===true,'Pilot settings changed.');
 }
 const draft=checkProductionBrief(process.cwd(),entry.briefPath,{stage:'draft'});assert(draft.ready,'Draft brief check failed.');
 write(`${docs}/${entry.key}/draft-check.json`,json(draft));
 const validation=execFileSync(process.execPath,['scripts/validate-lesson.mjs',entry.candidate.path],{encoding:'utf8',windowsHide:true});
 write(`${docs}/${entry.key}/lesson-validation.txt`,validation);
 checks.push({key:entry.key,onlySelectedCalculationPresentationsChanged:true,allowedChanges:'task, stage labels/lines and focusedContext only',voiceTextAudioCaptionsResponseHoldsDurationsRevealsLineAtsAndSummariesUnchanged:true,voicedScenesVerified:media.length,validatorExitCode:0,draftBriefReady:true,scienceSourcePreviewAndListeningPending:true,voiceTextListSha256:sha(JSON.stringify(lesson.scenes.map(s=>[s.id,s.voiceover?.text??null]))),timingAndCaptionsSha256:sha(JSON.stringify(lesson.scenes.map(s=>({id:s.id,duration:s.durationInFrames,voiceover:s.voiceover,responseHold:s.responseHold,captions:s.captions,revealDelays:s.revealDelays,stageLineAts:s.calculationPresentation?.stages.map(s=>s.lineAts)})))),selected});
 files.push(entry.candidate.path,entry.props.path,entry.briefPath,...entry.configPaths);
}
files.push(`${docs}/correction-record.json`,`${docs}/markup-check.json`,...record.sourceFiles.map(f=>f.path));
for(const p of files.filter(p=>!p.startsWith('src/')))assert(!readFileSync(p,'utf8').includes('\u2014'),`Forbidden punctuation ${p}`);
write(`${docs}/author-check.json`,json({status:'pass-pending-independent-science-source-and-exact-pilots',baselineRuntime:record.baselineRuntime,preservedFilesVerified:record.preservedFiles.length,alignmentCuesVerified:record.alignmentCues.length,defaultMarkupCases:markup.defaultCases.length,selectedContextAndGateMarkupCases:markup.selectedCases.length,checks,files:files.map(path=>({path,sha256:hash(path)})),limitation:'Author source/output and provenance checks only. Native rendering, glyph/control/caption clearance, continuous playback, science review and human listening are separate pending gates.'}));
console.log(json({status:'pass',checks,preservedFiles:record.preservedFiles.length,files:files.map(path=>({path,sha256:hash(path)}))}));
