// One-off exact measured assembly for the selected 10 October Module 5 starters.
// Never generates speech. Preserves base sources, raw takes and earlier packages.
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import path from 'node:path';
import {resolvePlayback,writePlayback,sha256,canonical} from './lib/playback-assembly.mjs';
import {buildSpeechRequest} from './elevenlabs-request.mjs';
import {alignmentToCaptions,lessonCaptionCues,toSrt,toVtt} from './lib/caption-timeline.mjs';
const base='docs/production/module5-starters-2026-10-10';
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const hash=p=>sha256(readFileSync(p));
const subjects=process.argv.slice(2).filter(x=>!x.startsWith('--'));
const selected=subjects.length?subjects:['chemistry','biology'];
const mappings={
 chemistry:{
  'concept-two-states':{bullets:['That is a static mechanical equilibrium','Chemical equilibrium has a different kind of balance'],secondary:'It does not mean every particle',callout:'At dynamic equilibrium'},
  definition:{bullets:['Dynamic means','A closed system','An open system'],callout:'So closed does not mean insulated'},
  'concept-conditions':{bullets:['given enough time to settle','Opening the bottle'],secondary:'Some gas can still dissolve back in',callout:'a lid alone does not establish equilibrium'},
  'worked-example':{steps:['The forward process removes A','So both concentrations remain constant','They do not need to match each other']},
  'worked-example-2':{steps:['a sealed mixture keeps the same colour','The reaction might simply be too slow','the extra evidence was conversion continuing','A steady observation tells us']},
  'quick-check':{steps:['Yes, this supplied evidence','The concentrations can differ','If we only had steady readings']},
  summary:{points:['An unchanged mixture can still be reacting','the forward and reverse reaction rates','without requiring equal concentrations','Closure helps make equilibrium possible','constant measurements alone']},
 },
 biology:{
  'concept-continuity':{bullets:['That connected sequence is a lineage','For a population to continue'],secondary:'Viable means',callout:'enough descendants must survive'},
  definition:{bullets:['Asexual reproduction produces offspring','Sexual reproduction involves gametes','An allele is a version'],callout:'That is still sexual reproduction'},
  'concept-asexual':{bullets:['without needing a mate','Under suitable conditions','Mutation can alter DNA'],callout:'A difference caused by those growing conditions'},
  'concept-sexual':{bullets:['In outcrossing','Offspring from genetically different parents','Finding a mate'],callout:'the combinations change'},
  'concept-tradeoff':{bullets:['Cloning can be useful','varied inherited combinations may help','Infection also depends'],callout:'Neither method is a universal winner'},
  'worked-example':{steps:['A strawberry makes a runner','Coral eggs and sperm fuse','Now a plant uses sperm']},
  'quick-check':{steps:['The seedlings are likely','The cuttings usually','In this case','Even reduced susceptibility']},
  summary:{points:['Reproduction connects generations','Asexual reproduction usually','Sexual reproduction fuses gametes','A combination that works well']},
 }
};
function prepare(subject){
 const dir=`${base}/${subject}`, lesson=read(`${dir}/lesson.json`),manifest=read(`${dir}/voice-manifest.json`),plan=read(`${dir}/playback-plan.json`);
 if(hash(`${dir}/lesson.json`)!==manifest.lessonSha256||plan.lessonSha256!==manifest.lessonSha256)throw Error('Base source drift: '+subject);
 const raw=[];
 for(const segment of manifest.scenes){
  const files=[segment.audioFile,segment.alignmentFile,segment.generationFile];
  if(files.some(p=>!existsSync(p)))throw Error('Generation incomplete: '+subject+'/'+segment.id);
  const gen=read(segment.generationFile),alignment=read(segment.alignmentFile);
  alignmentToCaptions(alignment);
  const expected=buildSpeechRequest({text:segment.text,voiceId:manifest.voiceSelection.voiceId,modelId:manifest.voiceSelection.modelId,requestOptions:manifest.requestOptions}).body;
  if(canonical(gen.request)!==canonical(expected)||gen.voiceId!==manifest.voiceSelection.voiceId||gen.modelId!==manifest.voiceSelection.modelId)throw Error('Request provenance mismatch '+segment.id);
  if(segment.plannedRequestSha256!==sha256(canonical(expected)))throw Error('Planned request hash mismatch '+segment.id);
  raw.push({segmentId:segment.id,textSha256:sha256(segment.text),requestSha256:sha256(canonical(gen.request)),files:files.map(p=>({path:p,sha256:hash(p)})),generatedAt:gen.generatedAt});
 }
 const narrated=structuredClone(lesson); narrated.scenes=narrated.scenes.filter(s=>s.voiceover?.text?.trim()); narrated.introDurationInFrames=0;
 // Remove obsolete estimated scene durations before applying measured media tails.
 narrated.scenes.forEach(s=>{s.durationInFrames=25;});
 const result=resolvePlayback({lesson:narrated,manifest,plan,tailSeconds:2});
 const report={subject,sourceSha256:manifest.lessonSha256,manifestSha256:hash(`${dir}/voice-manifest.json`),planSha256:hash(`${dir}/playback-plan.json`),rawGeneration:raw,cues:[],unsupported:[],humanListening:'pending',voicedPreview:'pending'};
 for(const scene of result.lesson.scenes){
  const assembled=result.scenes.find(s=>s.sceneId===scene.id),alignment=assembled.alignment,text=alignment.characters.join('');
  const cue=(phrase,field)=>{const at=text.indexOf(phrase);if(at<0||text.indexOf(phrase,at+1)>=0)throw Error(`Nonunique/missing phrase ${subject}/${scene.id}: ${phrase}`);const frame=Math.ceil(alignment.character_start_times_seconds[at]*30-1e-8);report.cues.push({sceneId:scene.id,field,phrase,characterIndex:at,localFrame:frame});return frame;};
  const m=mappings[subject][scene.id]??{};scene.revealDelays??={};
  if(m.bullets){if(m.bullets.length!==scene.bullets.length)throw Error('Bullet count');scene.bullets=scene.bullets.map((b,i)=>({...typeof b==='string'?{text:b}:b,at:cue(m.bullets[i],`bullets[${i}].at`)/30}));}
  for(const f of ['secondary','callout'])if(m[f])scene.revealDelays[f]=cue(m[f],`revealDelays.${f}`);
  if(m.steps){scene.revealDelays.stepAts=m.steps.map((p,i)=>cue(p,`revealDelays.stepAts[${i}]`));}
  if(m.points)scene.revealDelays.takeawayAts=m.points.map((p,i)=>cue(p,`revealDelays.takeawayAts[${i}]`));
  if(scene.responseHold){const hold=scene.responseHold;scene.revealDelays.responseHoldStart=hold.startFrame;scene.revealDelays.pausePrompt=hold.startFrame;const expected=subject==='chemistry'?360:240;if(hold.endFrame-hold.startFrame!==expected)throw Error('Response gap mismatch');if(scene.revealDelays.stepAts.some(f=>f<hold.endFrame))throw Error('Answer leakage');if(scene.captions.some(c=>c.startMs<hold.endFrame/30*1000&&c.endMs>hold.startFrame/30*1000))throw Error('Caption in hold');}
  if(subject==='chemistry'&&scene.id==='concept-two-states'){
   const start=cue('Chemical equilibrium has a different kind of balance','diagram.props.delay');scene.diagram.props.delay=start;scene.revealDelays.diagram=Math.max(0,start-16);scene.diagram.props.startAt=cue('In a reversible reaction','diagram.props.startAt')-start;scene.diagram.props.captions[0].at=cue('The two groups in this schematic','diagram.props.captions[0].at')-start;
  }
  if(subject==='biology'&&scene.id==='concept-continuity'){
   const props=scene.diagram.props,delay=props.delay??62;
   props.at.offspring=cue('producing offspring','diagram.props.at.offspring')-delay;
   props.at.transfer=cue('passing on hereditary information in DNA','diagram.props.at.transfer')-delay;
   props.at.ribbon=cue('each generation receives information','diagram.props.at.ribbon')-delay;
   props.at.parade=Math.max(props.at.transfer+30,props.at.ribbon+30);
   report.cues.push({sceneId:scene.id,field:'diagram.props.at.parade',localFrame:props.at.parade+delay,derivedFrom:'After inherited DNA and the receiving-generation cue; protects initial transfer marker before destination birth.'});
   props.at.rule=cue('The lifetimes are compressed','diagram.props.at.rule')-delay;props.at.viable=1000000;
   report.unsupported.push({sceneId:scene.id,scope:'Remaining births and deaths use fixed 70-frame generation intervals and 40-frame death offsets. No distinct narrated event exists for each later generation; they are compressed context, not exact speech-aligned individual events.'});
  }
  if(scene.diagram?.type==='table')report.unsupported.push({sceneId:scene.id,scope:'Table rows do not expose per-row spoken reveal cues in this component. Whole-board static comparison remains; no per-row measured alignment claimed.'});
  const latest=Math.max(0,...(scene.revealDelays.stepAts??[]),...(scene.revealDelays.takeawayAts??[]));scene.durationInFrames=Math.max(scene.voiceover.endFrame+84,latest+84);
 }
 const merged=structuredClone(lesson);merged.introDurationInFrames=0;merged.scenes=lesson.scenes.map(s=>result.lesson.scenes.find(v=>v.id===s.id)??structuredClone(s));
 const summary=merged.scenes.find(s=>s.id==='summary');if(summary.voiceover.endFrame>summary.durationInFrames-24)throw Error('Notes overlap narration');
 const captions=lessonCaptionCues(merged);if(captions.warnings.length)throw Error(captions.warnings.join(';'));
 report.durationInFrames=captions.timeline.durationInFrames;report.durationSeconds=report.durationInFrames/30;report.captionCues=captions.cues.length;report.silenceHolds=merged.scenes.filter(s=>s.responseHold).map(s=>({sceneId:s.id,...s.responseHold}));
 const brief=read(`${dir}/production-brief.json`);brief.source={lessonPath:`${dir}/measured/lesson.json`,lessonSha256:sha256(JSON.stringify(merged,null,2)+'\n')};brief.scriptReview={status:'pending',reviewer:'',evidence:null};brief.voicedPreview={status:'pending',reviewer:'',mode:'',inputSnapshotPath:'',evidence:null,humanListening:{status:'pending',reviewer:'',mode:'human-listening',evidence:null}};brief.limitation='Fresh measured assembly. Base spoken text unchanged, cues derived from current selected takes. Exact measured source review, voiced Player, native/device/caption observations and human listening remain pending. No export or release approval.';
 for(const decision of brief.scenes){
  const current=merged.scenes.find(s=>s.id===decision.sceneId),cues=report.cues.filter(c=>c.sceneId===decision.sceneId);
  if(cues.length)decision.narrationCue=JSON.stringify(cues)+' Measured from assembled character alignment. Actual viewing and listening remain pending.';
  if(current?.responseHold)decision.holdPurpose=`Measured answer-free PCM interval ${current.responseHold.startFrame} to ${current.responseHold.endFrame} at 30 fps. First answer display and stage cues are at or after the interval end; captions do not intersect the gap. Actual voiced preview remains pending.`;
 }
 return {dir,result,merged,brief,report,captions};
}
// Validate every subject and all provenance before writing any measured package.
const packages=selected.map(prepare);
for(const pkg of packages){
 const out=`${pkg.dir}/measured`;if(existsSync(out))throw Error('Measured folder already exists; preserve exact evidence.');
}
if(!process.argv.includes('--dry-run'))for(const pkg of packages){
 writePlayback(pkg.result);const out=`${pkg.dir}/measured`;mkdirSync(out,{recursive:true});
 const json=(name,value)=>writeFileSync(`${out}/${name}`,JSON.stringify(value,null,2)+'\n',{flag:'wx'});
 json('lesson.json',pkg.merged);json('remotion-props.json',{lesson:pkg.merged});json('production-brief.json',pkg.brief);json('measured-report.json',pkg.report);json('raw-generation-index.json',pkg.report.rawGeneration);
 writeFileSync(`${out}/captions.srt`,toSrt(pkg.captions.cues),{flag:'wx'});writeFileSync(`${out}/captions.vtt`,toVtt(pkg.captions.cues),{flag:'wx'});
}
console.log(JSON.stringify(packages.map(p=>({subject:p.report.subject,durationSeconds:p.report.durationSeconds,cues:p.report.cues.length,unsupported:p.report.unsupported,mode:process.argv.includes('--dry-run')?'validated dry run':'assembled'})),null,2));
