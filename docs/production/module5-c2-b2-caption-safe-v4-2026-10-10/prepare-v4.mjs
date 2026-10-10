import {readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {verifyAssembly} from '../../../scripts/lib/verify-assembly.mjs';
import {lessonTimeline} from '../../../src/lesson/timeline.mjs';
import {answerTiming} from '../../../src/lesson/answer-timing.mjs';

const docs='docs/production/module5-c2-b2-caption-safe-v4-2026-10-10';
const priorDocs='docs/production/module5-c2-b2-caption-safe-2026-10-10';
const component='src/slides/shared/Module5EvidenceBoard.tsx';
const sha=b=>createHash('sha256').update(b).digest('hex');
const hash=p=>sha(readFileSync(p));
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const json=v=>JSON.stringify(v,null,2)+'\n';
const assert=(c,m)=>{if(!c)throw Error(m);};
const collect=dir=>readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?collect(`${dir}/${e.name}`):[`${dir}/${e.name}`]);
const snapshotPath=`${docs}/before-inputs.json`;
if(process.argv.includes('--snapshot')){
 const files=[...collect(priorDocs),...['c2','b2'].flatMap(key=>collect(`out/prototypes/module5-${key}-voiced-2026-10-10`))];
 writeFileSync(snapshotPath,json({runtimeCheckpoint:'7106255',preservedFiles:files.map(path=>({path,sha256:hash(path)})),sourceFiles:[component,'src/lesson/types.ts','src/slides/QuickCheckSlide.tsx'].map(path=>({path,sha256:hash(path)}))}),{flag:'wx'});
 console.log(`Captured ${files.length} prior files.`);process.exit(0);
}
const before=read(snapshotPath);
for(const f of before.preservedFiles)assert(hash(f.path)===f.sha256,`Prior file drift: ${f.path}`);
const baseline=execFileSync('git',['show',`7106255:${component}`],{encoding:'utf8',windowsHide:true});
const oldPadding="padding: '10px 0', borderBottom";
const newPadding="padding: captionSafe ? '4px 0' : '10px 0', borderBottom";
assert(baseline.includes(oldPadding),'Unexpected runtime baseline.');
assert(readFileSync(component,'utf8').replaceAll('\r\n','\n')===baseline.replace(oldPadding,newPadding).replaceAll('\r\n','\n'),'Runtime delta exceeds opted-in trail padding.');
for(const f of before.sourceFiles.filter(f=>f.path!==component))assert(hash(f.path)===f.sha256,`Unowned source changed: ${f.path}`);
const record={schemaVersion:1,status:'author-correction-pending-independent-source-and-native-pilot-review',previousRuntime:'7106255',
 finding:{observer:'Root',scope:'Native B2 v3 quick-check playback with captions and controls',detail:'The lower count. line in the final established trail appeared around y865, below the conservative y850 caption reserve. This records the reported observation, not a fresh author measurement.'},
 sourceFiles:before.sourceFiles.map(f=>({path:f.path,priorSha256:f.sha256,sha256:hash(f.path)})),
 geometry:{estimatesOnly:true,units:'1920 by 1080 source pixels',captionReserveStartsAt:850,trailVerticalPadding:{priorOptIn:10,newOptIn:4,default:10},unchangedTrailFontSize:44,unchangedTrailLineHeight:1.13,
  reductionPerEstablishedRow:12,reductionForTwoEstablishedRows:24,estimatedSecondRowGlyphShift:18,reportedPriorLowerGlyphY:865,estimatedNewLowerGlyphY:847,estimatedReserveMargin:3,
  explanation:'Each completed row loses 6 px top and 6 px bottom padding. The second row starts 12 px earlier and its text starts another 6 px earlier. The estimate assumes unchanged wrapping and native font metrics; exact caption/control clearance needs the new B2 quick pilot. No clipping or font reduction is introduced.'},
 invariants:{candidateAndPropsByteSameAsV3:true,voiceTextAudioCaptionsResponseHoldsCuesSummariesAndDurationsUnchanged:true,onlyOptedInTrailPaddingRuntimeChange:true,defaultTrailPaddingRemains10:true,noVoiceGenerationOrExport:true,priorFilesBytePreserved:true},
 packages:[],pilots:[],preservedFiles:before.preservedFiles,limitation:'Source estimates and author invariants only. V4 independent source review, exact caption/control playback and human listening remain pending. Earlier evidence remains historical.'};
const pending={status:'pending',reviewer:'',evidence:null};
const outputs=[];
for(const key of ['c2','b2']){
 const out=`out/prototypes/module5-${key}-voiced-2026-10-10`,parent=`${out}/narrated-v3.lesson.json`,candidate=`${out}/narrated-v4.lesson.json`,parentProps=`${out}/remotion-props-v3.json`,props=`${out}/remotion-props-v4.json`;
 const lesson=read(parent),propsLesson=read(parentProps).lesson;
 assert(JSON.stringify(lesson)===JSON.stringify(propsLesson),'V3 props mismatch.');
 const checks=[];
 for(const scene of lesson.scenes){
  if(scene.voiceover){const errors=verifyAssembly(scene,lesson.fps);assert(errors.length===0,`${key}/${scene.id}: ${errors.join('; ')}`);checks.push({sceneId:scene.id,voiceTextSha256:sha(scene.voiceover.text),assemblyVerified:true});}
  if(scene.responseHold)answerTiming(scene.revealDelays,scene.responseHold);
 }
 const parentBrief=`${priorDocs}/${key}/production-brief.json`,brief=read(parentBrief);
 assert(brief.source.lessonPath===parent&&brief.source.lessonSha256===hash(parent),'Parent brief mismatch.');
 brief.source={lessonPath:candidate,lessonSha256:hash(parent)};
 brief.originV3={lessonPath:parent,lessonSha256:hash(parent),briefPath:parentBrief,briefSha256:hash(parentBrief),runtimeCheckpoint:'7106255',scope:'Preserved v3 source and prior evidence. New trail padding and pilot input paths require separate v4 review.'};
 brief.scriptReview={...pending,scope:'Exact v3 words, media and timing; only selected established-trail vertical padding changes from 10 to 4. Independent v4 bounded source review pending.'};
 brief.voicedPreview={...pending,mode:'',inputSnapshotPath:'',humanListening:{...pending,mode:'human-listening'}};
 brief.limitation=record.limitation;
 for(const row of brief.scenes.filter(row=>lesson.scenes.find(s=>s.id===row.sceneId)?.calculationPresentation)){
  row.holdPurpose=row.holdPurpose.replace('exact v3 player review','exact v4 player review');
  row.motionPurpose+=' V4 reduces only opted-in established-trail vertical padding to 4 px, retaining 44 px text and every cue.';
 }
 const specs=key==='c2'?[{name:'transfer-pilot03',sceneId:'c2-transfer',localRange:[1322,2550],expectedGlobalRange:[8631,9859]}]:[{name:'worked-pilot03',sceneId:'worked-example',localRange:[880,1353],expectedGlobalRange:[8464,8937]},{name:'quick-pilot01',sceneId:'quick-check',localRange:[1230,2250],expectedGlobalRange:[11274,12294]}];
 const timeline=lessonTimeline(lesson),template=read(`${priorDocs}/${key}/pilot-config.json`);
 for(const spec of specs){
  const entry=timeline.scenes.find(s=>s.scene.id===spec.sceneId);assert(entry,'Missing pilot scene.');
  assert(spec.localRange[0]>=0&&spec.localRange[1]<entry.scene.durationInFrames,'Pilot exceeds scene.');
  const frameRange=spec.localRange.map(f=>f+entry.startFrame);
  assert(JSON.stringify(frameRange)===JSON.stringify(spec.expectedGlobalRange),'Global pilot timing drift.');
  const config={...template,lessonPath:candidate,teachingBriefPath:`${docs}/${key}/production-brief.json`,frameRange,inputs:[...new Set([...(template.inputs??[]),`${docs}/correction-record.json`])]};
  const configPath=`${docs}/${key}/${spec.name}-config.json`;
  outputs.push([configPath,json(config)]);
  record.pilots.push({key,name:spec.name,configPath,sceneId:spec.sceneId,sceneStartFrame:entry.startFrame,sceneEndFrameExclusive:entry.endFrame,localFrameRangeInclusive:spec.localRange,globalFrameRangeInclusive:frameRange,frames:frameRange[1]-frameRange[0]+1,seconds:(frameRange[1]-frameRange[0]+1)/lesson.fps,responseHold:entry.scene.responseHold??null});
 }
 record.packages.push({key,parent:{path:parent,sha256:hash(parent)},candidate:{path:candidate,sha256:hash(parent)},parentProps:{path:parentProps,sha256:hash(parentProps)},props:{path:props,sha256:hash(parentProps)},parentBrief:{path:parentBrief,sha256:hash(parentBrief)},voicedScenes:checks,timelineDurationInFrames:timeline.durationInFrames});
 outputs.push([candidate,readFileSync(parent)],[props,readFileSync(parentProps)]);
 outputs.push([`${docs}/${key}/production-brief.json`,brief]);
}
const recordPath=`${docs}/correction-record.json`,recordBytes=json(record);
for(const [p,content]of outputs){
 const bytes=typeof content==='object'&&!Buffer.isBuffer(content)?json({...content,captionLayoutEvidence:{path:recordPath,sha256:sha(recordBytes)}}):content;
 assert(!existsSync(p),`Refusing overwrite ${p}`);assert(!bytes.toString().includes('\u2014'),`Forbidden punctuation ${p}`);
 mkdirSync(p.slice(0,p.lastIndexOf('/')),{recursive:true});writeFileSync(p,bytes,{flag:'wx'});
}
writeFileSync(recordPath,recordBytes,{flag:'wx'});
console.log(json({status:record.status,sourceFiles:record.sourceFiles,packages:record.packages.map(({voicedScenes,...p})=>p),pilots:record.pilots,preservedFiles:before.preservedFiles.length,correctionRecordSha256:hash(recordPath)}));
