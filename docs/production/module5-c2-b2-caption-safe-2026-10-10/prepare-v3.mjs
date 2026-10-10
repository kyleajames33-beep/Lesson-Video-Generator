import {readFileSync, writeFileSync, mkdirSync, existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {verifyAssembly} from '../../../scripts/lib/verify-assembly.mjs';
import {answerTiming} from '../../../src/lesson/answer-timing.mjs';

const docs = 'docs/production/module5-c2-b2-caption-safe-2026-10-10';
const read = p => JSON.parse(readFileSync(p, 'utf8'));
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const hash = p => sha(readFileSync(p));
const json = value => JSON.stringify(value, null, 2) + '\n';
const assert = (condition, message) => {if (!condition) throw new Error(message);};
const before = read(`${docs}/before-inputs.json`);
const changedSources = before.sourceFiles.map(file => ({...file, priorSha256:file.sha256, sha256:hash(file.path)}));
const report = {schemaVersion:1, status:'author-caption-layout-correction-pending-independent-review-and-native-playback',
  originalRuntimeCheckpoint:before.runtimeCheckpoint,
  preservedRuntime:'out/checks/module5-voiced-v2-transfer-2026-10-10',
  finding:{observer:'Root', scope:'Actual selected B2 v2 worked pilot browser playback, captions with controls visible',
    detail:'Native caption region at approximately y898 overlapped the lower active result. This is the reported playback finding, not a new author observation.'},
  sourceFiles:changedSources,
  geometry:{units:'1920 by1080 source pixels', captionReserveStartsAt:850, estimatesOnly:true,
    workingTop:{default:680,optIn:600}, workingVerticalPadding:{default:18,optIn:14}, stageLabelGap:{default:16,optIn:12}, givenCardVerticalPadding:{default:16,optIn:12},
    unchangedHeaderTop:142, unchangedGivensTop:330, unchangedNotePaddingTop:12,
    unchangedFonts:{task:62,equation:52,givenLabel:58,givenValue:54,referenceAndNote:52,stageLabel:48,result:58,trail:44,pauseInstruction:42},
    estimatedTwoSingleLineResultCardBottom:842.32,
    estimatedC2GivensWithReferencesAndSingleLineNoteBottom:587.3,
    estimatedB2GivensAndSingleLineNoteBottom:511.5,
    selectedCountdown:{left:1296,right:64,bottom:312,top:600,height:168}, selectedPauseInstruction:{left:634,right:64,bottom:240,unrotatedBottom:840},
    constraints:'Estimates assume no wrapped stage label or result line, single-line notes and current selected given rows. Native font bounds, entry motion, caption placement with controls visible and small-player playback still need verification. No clipping or hidden overflow substitutes for review.'},
  packages:[], invariants:{narrationMediaCaptionsCuesAndDurationsUnchanged:true,onlySelectedSourceFlagAdded:true,priorFilesBytePreserved:true,noPaidVoiceOrExport:true},
  limitation:'Author source and geometry estimates only. V3 independent source review, exact voiced preview, native caption/control clearance and human listening remain pending.'};
const pending = {status:'pending',reviewer:'',evidence:null};
const prepared = [];
for (const key of ['c2','b2']) {
  const out = `out/prototypes/module5-${key}-voiced-2026-10-10`;
  const parent = `${out}/narrated-v2.lesson.json`, original = read(parent), lesson = structuredClone(original);
  const optedScenes=[];
  for (const scene of lesson.scenes) {
    if (scene.calculationPresentation) {
      assert(scene.calculationPresentation.layout === 'module5Evidence', 'Unexpected selected board.');
      scene.calculationPresentation.captionSafeWorking = true; optedScenes.push(scene.id);
    }
    if (scene.voiceover) assert(verifyAssembly(scene, lesson.fps).length === 0, `Media provenance failed: ${scene.id}`);
    if (scene.responseHold) answerTiming(scene.revealDelays,scene.responseHold);
  }
  assert(JSON.stringify(optedScenes) === JSON.stringify(key==='c2'?['c2-transfer']:['worked-example','quick-check']), 'Unexpected opt-in scope.');
  const recovered=structuredClone(lesson);
  recovered.scenes.forEach(scene=>{if(scene.calculationPresentation)delete scene.calculationPresentation.captionSafeWorking;});
  assert(JSON.stringify(recovered)===JSON.stringify(original), 'Unexpected source changes.');
  const candidatePath=`${out}/narrated-v3.lesson.json`, propsPath=`${out}/remotion-props-v3.json`;
  const oldDocs=`docs/production/module5-c2-b2-preview-briefs-2026-10-10/${key}`;
  const newDocs=`${docs}/${key}`, oldBriefPath=`${oldDocs}/production-brief.json`, oldConfigPath=`${oldDocs}/pilot-config.json`;
  const config=read(oldConfigPath);assert(config.lessonPath===parent, 'Wrong prior pilot source.');
  const brief=read(oldBriefPath); assert(brief.source.lessonPath===parent && brief.source.lessonSha256===hash(parent), 'Prior brief drift.');
  brief.source={lessonPath:candidatePath,lessonSha256:sha(json(lesson))};
  brief.originV2={lessonPath:parent,lessonSha256:hash(parent),briefPath:oldBriefPath,briefSha256:hash(oldBriefPath),scope:'Historical exact v2 source/timing evidence. V3 layout/source/preview review is separate.'};
  brief.scriptReview={...pending,scope:'Same spoken words and measured cue values; selected-only captionSafeWorking opt-in and runtime correction require independent v3 source review.'};
  brief.voicedPreview={...pending,mode:'',inputSnapshotPath:'',humanListening:{...pending,mode:'human-listening'}};
  brief.limitation=report.limitation;
  for(const row of brief.scenes.filter(row=>optedScenes.includes(row.sceneId))) {
    row.visualDecision='adjust';
    row.visualReference += '; selected captionSafeWorking in Module5EvidenceBoard and QuickCheckSlide';
    row.motionPurpose += ' Caption-safe selected layout moves the active card to y600 while preserving all reveal/line cues and stage order.';
    row.holdPurpose += ' Reserve lower frame space from about y850 for native player captions. Header, givens, result wrapping and pause controls need exact v3 player review with controls visible.';
  }
  config.lessonPath=candidatePath; config.teachingBriefPath=`${newDocs}/production-brief.json`;
  config.inputs=[...new Set([...(config.inputs??[]),`${docs}/correction-record.json`])];
  const entry={key,parent:{path:parent,sha256:hash(parent)},parentBrief:{path:oldBriefPath,sha256:hash(oldBriefPath)},parentPilotConfig:{path:oldConfigPath,sha256:hash(oldConfigPath)},
    candidate:{path:candidatePath,sha256:sha(json(lesson))},props:{path:propsPath,sha256:sha(json({lesson}))},optedScenes,frameRange:config.frameRange,
    exactInvariant:'Delete only captionSafeWorking from the v3 presentation objects to recover the exact v2 lesson object. All media provenance verifies.'};
  report.packages.push(entry); prepared.push({newDocs,candidatePath,propsPath,lesson,brief,config});
}
for(const file of before.preservedFiles)assert(hash(file.path)===file.sha256,`Preserved input changed: ${file.path}`);
report.preservedFiles=before.preservedFiles;
const recordPath=`${docs}/correction-record.json`, recordBytes=json(report);
const outputs=[[recordPath,recordBytes]];
for(const item of prepared){
  item.brief.captionLayoutEvidence={path:recordPath,sha256:sha(recordBytes)};
  mkdirSync(item.newDocs,{recursive:true});
  outputs.push([item.candidatePath,json(item.lesson)],[item.propsPath,json({lesson:item.lesson})],[`${item.newDocs}/production-brief.json`,json(item.brief)],[`${item.newDocs}/pilot-config.json`,json(item.config)]);
}
for(const [path,contents] of outputs){assert(!existsSync(path),`Refusing overwrite: ${path}`);assert(!contents.includes('\u2014'),`Forbidden punctuation: ${path}`);}
if(process.argv.includes('--write'))for(const[path,contents]of outputs)writeFileSync(path,contents,{flag:'wx'});
console.log(json({status:report.status,outputs:outputs.map(([path,contents])=>({path,sha256:sha(contents)})),packages:report.packages,sourceFiles:changedSources}));
