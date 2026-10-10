import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {checkProductionBrief} from '../../../../scripts/lib/production-brief.mjs';
import {verifyAssembly} from '../../../../scripts/lib/verify-assembly.mjs';
import {lessonTimeline} from '../../../../src/lesson/timeline.mjs';

const originalDocs='docs/production/module5-c2-b2-simple-working-2026-10-10',docs=`${originalDocs}/native-adjustment-01`;
const sha=b=>createHash('sha256').update(b).digest('hex'),hash=p=>sha(readFileSync(p));
const read=p=>JSON.parse(readFileSync(p,'utf8')),json=v=>JSON.stringify(v,null,2)+'\n';
const assert=(c,m)=>{if(!c)throw Error(m);};
const component='src/slides/shared/Module5EvidenceBoard.tsx',archivedComponent='out/prototypes/module5-simple-working-v5-native-2026-10-10/initial-Module5EvidenceBoard.tsx';
const initial=read(`${originalDocs}/correction-record.json`),freeze=read(`${originalDocs}/frozen-author-inputs.json`);
const oldComponentHash=initial.sourceFiles.find(f=>f.path===component).sha256;
assert(hash(archivedComponent)===oldComponentHash,'Initial source copy does not match original freeze.');
assert(hash(component)==='092554d51375d0272482857f46115e810c7a6c427aa38490cea826cb2698d46f','Root corrected runtime drift.');
const before=readFileSync(archivedComponent,'utf8').replaceAll('\r\n','\n');
const expected=before.replace('width: 600','width: 670').replace('left: 704, right: 64, top: 780','left: 774, right: 64, top: 780').replace('left: focused ? 704 : 64','left: focused ? 774 : 64');
assert(readFileSync(component,'utf8').replaceAll('\r\n','\n')===expected,'Runtime adjustment exceeds selected context width and working/prompt x positions.');
const preservedFiles=freeze.files.filter(f=>f.path!==component);
for(const f of preservedFiles)assert(hash(f.path)===f.sha256,`Initial frozen input changed ${f.path}`);
for(const f of initial.preservedFiles)assert(hash(f.path)===f.sha256,`Earlier version changed ${f.path}`);
const nativeDir='out/prototypes/module5-simple-working-v5-native-2026-10-10';
const nativeFiles=[`${nativeDir}/frames.json`,`${nativeDir}/renderer-record.json`,archivedComponent,...read(`${nativeDir}/frames.json`).map(f=>f.path)];
const record={schemaVersion:1,status:'runtime-adjustment-pending-independent-source-and-native-pilot-review',
 parentCorrection:{path:`${originalDocs}/correction-record.json`,sha256:hash(`${originalDocs}/correction-record.json`)},parentFreeze:{path:`${originalDocs}/frozen-author-inputs.json`,sha256:hash(`${originalDocs}/frozen-author-inputs.json`)},
 finding:{observer:'Root',scope:'Initial native C2 v5 frame1100',framePath:`${nativeDir}/c2-c2-transfer-1100.png`,frameSha256:hash(`${nativeDir}/c2-c2-transfer-1100.png`),detail:'Fixed temperature, volume wrapped, turning five authored rows into six visual rows. The final text reached approximately y858, below the conservative y850 caption reserve. This is the reported root observation, not a new author measurement.'},
 sourceFiles:initial.sourceFiles.map(f=>({path:f.path,initialSha256:f.sha256,sha256:hash(f.path)})),archivedInitialComponent:{path:archivedComponent,sha256:hash(archivedComponent)},
 geometry:{estimatesOnly:true,contextWidth:{initial:600,adjusted:670},contextInnerWidth:{initial:547,adjusted:617},workingAndPromptX:{initial:704,adjusted:774},contextRightEdge:734,columnGap:40,workingWidth:{initial:1152,adjusted:1082},unchangedContextTop:350,unchangedQuestionTop:142,unchangedWorkingRight:64,captionReserveStartsAt:850,unchangedFonts:{context:50,answer:58,stageLabel:48,question:62,secondaryQuestion:44},
  estimatedFiveUnwrappedRowCardBottom:830.2,estimatedLowerTextAfterRemovingOneWrappedLine:799,explanation:'Adding70px to the context width should remove the observed extra line; one context line has59px line height, so the reported lower text858 predicts799. Working/prompt moves70px right to retain40px between columns. The narrower answer column must be rechecked for wrapping. Native font bounds and clearance are pending.'},
 invariants:{allV5LessonAndPropsBytesUnchanged:true,wordsAudioCaptionsResponseHoldsDurationsAndAllCuesUnchanged:true,defaultLayoutUntouched:true,onlyOptInWidthAndWorkingPromptXChanged:true,originalBriefsConfigsCorrectionAndFreezePreserved:true,noAudioGenerationOrRenderByAuthor:true},
 preservedInitialFiles:preservedFiles,preservedNativeFiles:nativeFiles.map(path=>({path,sha256:hash(path)})),
 packages:[],pilots:[],limitation:'Runtime source estimates and author invariants only. New independent source review, adjusted native playback, captions/controls/small-player review and human listening are pending. Original freeze and native evidence remain historical and are not approvals for the adjusted runtime.'};
const outputs=[],pending={status:'pending',reviewer:'',evidence:null};
for(const entry of initial.packages){
 const key=entry.key,lesson=read(entry.candidate.path),props=read(entry.props.path);
 assert(hash(entry.candidate.path)===entry.candidate.sha256&&hash(entry.props.path)===entry.props.sha256,'V5 source/props changed.');
 assert(JSON.stringify(lesson)===JSON.stringify(props.lesson),'Portable props mismatch.');
 for(const scene of lesson.scenes.filter(s=>s.voiceover))assert(verifyAssembly(scene,lesson.fps).length===0,'Media provenance changed.');
 const parentBriefPath=entry.briefPath,brief=read(parentBriefPath),newBriefPath=`${docs}/${key}/production-brief.json`;
 assert(brief.source.lessonPath===entry.candidate.path&&brief.source.lessonSha256===entry.candidate.sha256,'Original v5 brief drift.');
 brief.originInitialV5Brief={path:parentBriefPath,sha256:hash(parentBriefPath),scope:'Historical initial v5 width600/x704 source and estimates. Preserved unchanged.'};
 brief.scriptReview={...pending,scope:'Same frozen v5 lesson bytes; root opt-in geometry adjustment width670 and x774 requires separate bounded source review.'};
 brief.voicedPreview={...pending,mode:'',inputSnapshotPath:'',humanListening:{...pending,mode:'human-listening'}};
 brief.limitation=record.limitation;
 for(const scene of brief.scenes.filter(s=>entry.selectedSceneIds.includes(s.sceneId)))scene.holdPurpose+=' Adjusted context width670 and working/prompt x774 retain the original fonts/cues. Recheck all context and answer wrapping, caption/control space and small-player fit in the current exact pilot.';
 const timeline=lessonTimeline(lesson),configPaths=[];
 for(const pilot of initial.pilots.filter(p=>p.key===key)){
  const name=pilot.configPath.slice(pilot.configPath.lastIndexOf('/')+1),configPath=`${docs}/${key}/${name}`,config=read(pilot.configPath);
  config.teachingBriefPath=newBriefPath;config.inputs=[...new Set([...(config.inputs??[]),`${docs}/correction-record.json`])];
  const scene=timeline.scenes.find(s=>s.scene.id===pilot.sceneId);
  assert(JSON.stringify(config.frameRange)===JSON.stringify([scene.startFrame,scene.endFrame-1]),'Pilot timing drift.');
  outputs.push([configPath,json(config)]);configPaths.push(configPath);
  record.pilots.push({...pilot,initialConfig:{path:pilot.configPath,sha256:hash(pilot.configPath)},configPath});
 }
 record.packages.push({...entry,briefPath:newBriefPath,configPaths,initialV5Brief:{path:parentBriefPath,sha256:hash(parentBriefPath)}});
 outputs.push([newBriefPath,brief]);
}
const recordPath=`${docs}/correction-record.json`,recordBytes=json(record);
for(const[p,content]of outputs){const bytes=typeof content==='object'?json({...content,nativeAdjustmentEvidence:{path:recordPath,sha256:sha(recordBytes)}}):content;assert(!existsSync(p),`Refusing overwrite ${p}`);assert(!bytes.includes('\u2014'),`Forbidden punctuation ${p}`);mkdirSync(p.slice(0,p.lastIndexOf('/')),{recursive:true});writeFileSync(p,bytes,{flag:'wx'});}
writeFileSync(recordPath,recordBytes,{flag:'wx'});
const drafts=record.packages.map(entry=>({key:entry.key,report:checkProductionBrief(process.cwd(),entry.briefPath,{stage:'draft'})}));
assert(drafts.every(d=>d.report.ready),'Adjusted draft brief failed.');
writeFileSync(`${docs}/draft-checks.json`,json(drafts),{flag:'wx'});
console.log(json({status:record.status,record:{path:recordPath,sha256:hash(recordPath)},sourceFiles:record.sourceFiles,packages:record.packages,pilots:record.pilots,preservedInitialFileCount:preservedFiles.length,preservedNativeFileCount:nativeFiles.length}));
