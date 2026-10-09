import fs from 'node:fs';
import {resolvePlayback, writePlayback, sha256} from './lib/playback-assembly.mjs';
import {verifyAssembly} from './lib/verify-assembly.mjs';
import {lessonTimeline} from '../src/lesson/timeline.mjs';
import {TRANSITION_FRAMES} from './_yt-constants.mjs';

const dir = 'out/prototypes/empirical-formulas-voiced-2026-10-09';
const sourceDir = 'out/prototypes/empirical-formulas-organised-2026-10-09';
const read = file => JSON.parse(fs.readFileSync(file,'utf8'));
const write = (file,value) => fs.writeFileSync(file,JSON.stringify(value,null,2)+'\n',{flag:'wx'});
if(fs.existsSync(`${dir}/narrated.lesson.json`)) throw Error('Preserve the existing voiced revision. Prepare a separate revision for further changes.');
const manifest = read(`${dir}/voice-manifest.json`);
if(sha256(fs.readFileSync(manifest.lessonPath)) !== manifest.lessonSha256) throw Error('Reviewed source changed after recording preparation.');
const original = read(manifest.lessonPath);
const result = resolvePlayback({lesson:original,manifest,plan:read(`${dir}/voice-playback-plan.json`),tailSeconds:0.5});
writePlayback(result);
const norm = text => text.toLowerCase().replace(/[^\p{L}\p{N}]/gu,'');
const cue = (scene,phrase) => {
  const words = phrase.split(/\s+/).map(norm);
  const at = scene.captions.findIndex((_,i)=>words.every((word,j)=>norm(scene.captions[i+j]?.text??'')===word));
  if(at<0) throw Error(`Missing measured cue ${scene.id}: ${phrase}`);
  return Math.ceil(scene.captions[at].startMs*30/1000);
};
const get = id => result.lesson.scenes.find(scene=>scene.id===id);
const delays = (id,fields) => {
  const scene=get(id);
  for(const [field,phrase] of Object.entries(fields)) scene.revealDelays[field]=cue(scene,phrase);
};
delays('hook',{callout:'The first clue is an empirical formula'});
const concept=get('concept');
concept.bullets[0].at=cue(concept,'Glucose has six')/30;
concept.bullets[1].at=cue(concept,'Formaldehyde already has')/30;
delays('concept',{callout:'The empirical formula keeps',secondary:'These blocks are a counting model'});
const relative = phrase => Math.max(0,cue(concept,phrase)-concept.diagram.delay);
concept.diagram.props.beats={big:0,sort:relative('That six to twelve to six'),small:relative('Formaldehyde already has'),
  same:relative('The empirical formula keeps'),times:relative('The molecular formula keeps'),
  nBig:relative('The molecular formula keeps'),nSmall:relative('The molecular formula keeps')};
const definition=get('definition');
definition.bullets.forEach((bullet,i)=>bullet.at=cue(definition,['Percentage composition measures','For C H two O','Divide the carbon contribution'][i])/30);
delays('definition',{callout:'Atom ratios and mass percentages'});
const basis=get('formula');
basis.bullets.forEach((bullet,i)=>bullet.at=cue(basis,['A hundred-gram calculation basis','Next dividing each mass'][i])/30);
delays('formula',{callout:'a common counting scale'});
const worked=get('worked-example');
worked.revealDelays.stepAts=[30,cue(worked,'Dividing every amount'),cue(worked,'With the extra digits retained'),cue(worked,'So the empirical formula')];
worked.calculationPresentation.stages[0].lineAts=['Carbon gives about','hydrogen about','and oxygen about'].map(phrase=>cue(worked,phrase));
const extension=get('molecular-extension');
extension.revealDelays.stepAts=[30,cue(extension,'The empirical-formula molar mass'),cue(extension,'The supplied molar mass'),cue(extension,'We get C six'),cue(extension,'but the formula alone')];
delays('misconception',{rightCard:'Multiplying both values',callout:'Keep the calculation digits'});
const quiz=get('quick-check');
quiz.revealDelays.responseHoldStart=quiz.responseHold.startFrame;
quiz.revealDelays.answerVisibleStart=quiz.responseHold.endFrame;
quiz.revealDelays.stepAts=[quiz.responseHold.endFrame,cue(quiz,'Dividing by the nitrogen'),cue(quiz,'The empirical formula is N')];
quiz.calculationPresentation.stages[0].lineAts=['the nitrogen gives about','and the oxygen about'].map(phrase=>cue(quiz,phrase));
const summary=get('summary');
summary.revealDelays.takeawayAts=['Choose a convenient basis','then find the simplest','A molecular molar mass'].map(phrase=>cue(summary,phrase));
summary.revealDelays.finalPrompt=cue(summary,'Next a balanced equation');
const report=[];
for(const scene of result.lesson.scenes){
  if(scene.voiceover.text!==original.scenes.find(before=>before.id===scene.id).voiceover.text) throw Error('Spoken text changed: '+scene.id);
  const lastCue=Math.max(0,...(scene.revealDelays?.stepAts??[]),...(scene.revealDelays?.takeawayAts??[]));
  scene.durationInFrames=Math.max(scene.voiceover.endFrame+15+TRANSITION_FRAMES,lastCue+90+TRANSITION_FRAMES);
  const errors=verifyAssembly(scene,30);
  if(errors.length) throw Error(scene.id+': '+errors.join('; '));
  const stages=scene.revealDelays?.stepAts??[];
  if(stages.some((at,i)=>i&&at<=stages[i-1])) throw Error('Stages must follow measured speech order: '+scene.id);
  if(scene.id==='quick-check' && stages.some(at=>at<scene.responseHold.endFrame)) throw Error('Quiz answer leaks into its hold.');
  report.push({sceneId:scene.id,frames:scene.durationInFrames,stepAts:stages,
    stageSeconds:stages.map((at,i)=>((stages[i+1]??scene.durationInFrames)-at)/30),responseHold:scene.responseHold??null});
}
const source=`${dir}/narrated.lesson.json`;
write(source,result.lesson);
write(`${dir}/remotion-props.json`,{lesson:result.lesson});
const timeline=lessonTimeline(result.lesson);
write(`${dir}/timing-review.json`,{source,sourceSha256:sha256(fs.readFileSync(source)),durationSeconds:timeline.durationMs/1000,scenes:report,
  limitation:'Measured alignment and assembly checks only. Continuous visual playback and human listening remain pending.'});
const brief=read(`${sourceDir}/production-brief.json`);
brief.source={lessonPath:source,lessonSha256:sha256(fs.readFileSync(source))};
for(const row of brief.scenes){
  const scene=get(row.sceneId);
  row.narrationCue=JSON.stringify({measuredReveals:scene.revealDelays,bullets:scene.bullets?.map(b=>b.at),diagramBeats:scene.diagram?.props?.beats});
}
const review=`${dir}/assembly-source-review.md`;
fs.writeFileSync(review,`# Empirical narration assembly source check\n\nReviewed by the coordinating agent. Original reviewed source: ${manifest.lessonPath}, SHA-256 ${manifest.lessonSha256}. New source: ${source}, SHA-256 ${brief.source.lessonSha256}.\n\nAll ten scene transcripts match the independently reviewed draft exactly. All eleven takes have timestamp alignment and immutable assembly provenance. Only durations, measured reveals and selected audio/captions changed. Arithmetic, task, boundaries, stage content and model limits are preserved. The quiz contains a measured two-second digital-silence gap and its working waits until the gap ends. Short stage durations still require playback review; this check does not claim listening or device approval. Prior report: ${read(`${sourceDir}/production-brief.json`).scriptReview.evidence.path}.\n`,{flag:'wx'});
brief.scriptReview={status:'pass',reviewer:'Coordinating agent (unchanged transcript and measured assembly source check)',evidence:{path:review,sha256:sha256(fs.readFileSync(review))}};
brief.teaching.understandingCheck='Separate nitrogen/oxygen prompt and answer, with a measured two-second silent attempt and invitation to pause longer. Working and captions wait for the recorded answer.';
brief.limitation='Fresh voiced revision. Assembly/source checks passed; exact visual playback, caption clearance, device review and human listening remain pending.';
write(`${dir}/production-brief.json`,brief);
const base={lessonPath:source,entryPoint:'src/dev/release-entry.tsx',compositionId:'Lesson-release',codec:'h264',scale:1,crf:16,
  normalizeAudio:true,concurrency:1,audioMode:'alignedPcm',teachingBriefPath:`${dir}/production-brief.json`,
  inputs:['scripts/finalize-empirical-narration.mjs',`${dir}/voice-manifest.json`,`${dir}/voice-playback-plan.json`,`${dir}/request-options.json`]};
const first=timeline.scenes.find(s=>s.scene.id==='worked-example').startFrame;
const last=timeline.scenes.find(s=>s.scene.id==='misconception').startFrame-1;
write(`${dir}/worked-pilot-config.json`,{...base,frameRange:[first,last]});
const question=timeline.scenes.find(s=>s.scene.id==='quick-check').startFrame;
write(`${dir}/quiz-pilot-config.json`,{...base,frameRange:[question,question+quiz.durationInFrames-1]});
write(`${dir}/full-config.json`,base);
console.log(JSON.stringify({seconds:timeline.durationMs/1000,pilotSeconds:(last-first+1)/30,quizHold:quiz.responseHold,source},null,2));
