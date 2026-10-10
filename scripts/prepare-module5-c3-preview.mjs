import fs from 'node:fs';
import {sha256} from './lib/playback-assembly.mjs';
import {lessonTimeline} from '../src/lesson/timeline.mjs';
const directory='docs/production/module5-c3-voiced-preparation-2026-10-10';
const lessonPath=`${directory}/lesson.json`;
const lesson=JSON.parse(fs.readFileSync(lessonPath));
const brief=JSON.parse(fs.readFileSync('docs/production/drafts/module5-chemistry-clear-layout-2026-10-10/production-brief.json'));
const report=JSON.parse(fs.readFileSync(`${directory}/measured-cue-report.json`));
const bind=file=>({path:file,sha256:sha256(fs.readFileSync(file))});
brief.source={lessonPath,lessonSha256:sha256(fs.readFileSync(lessonPath))};
for(const row of brief.scenes){
  const measured=report.scenes.find(scene=>scene.sceneId===row.sceneId);
  if(measured) row.narrationCue=JSON.stringify(measured.cues)+' Measured scene-local frames. Bullets use seconds; model and reasoning cues use frames. See measured-cue-report.json.';
}
brief.scriptReview={status:'pending',reviewer:'',evidence:null};
brief.voicedPreview={status:'pending',reviewer:'',mode:'',inputSnapshotPath:'',evidence:null,humanListening:{status:'pending',reviewer:'',mode:'human-listening',evidence:null}};
brief.visualIntegration.status='silent-layout-accepted-measured-voiced-preview-pending';
brief.limitation='Fresh recorded words match the accepted source. Measured character cues and response holds applied. Current independent timing, exact voiced playback and human listening remain pending.';
brief.teaching.understandingCheck='Two independent complete questions with separate prompt/feedback recordings. Each exact response interval is360frames after the complete decoded prompt; it is a12-second classroom preview hold, not a universal learner time.';
const briefPath=`${directory}/production-brief.json`;
if(fs.existsSync(briefPath)) throw Error('Preserve existing preview brief.');
fs.writeFileSync(briefPath,JSON.stringify(brief,null,2)+'\n',{flag:'wx'});
const timeline=lessonTimeline(lesson);
const pilotRecords=[];
for(const [name,id] of [['remove-pilot01','c3-remove'],['transfer-pilot01','c3-transfer-a']]){
  const entry=timeline.scenes.find(item=>item.scene.id===id);
  const frameRange=[entry.startFrame,entry.startFrame+entry.scene.durationInFrames-1];
  const config={lessonPath,entryPoint:'src/dev/release-entry.tsx',compositionId:'Lesson-release',codec:'h264',scale:1,crf:16,concurrency:2,audioMode:'alignedPcm',normalizeAudio:true,frameRange,teachingBriefPath:briefPath,inputs:[`${directory}/measured-cue-report.json`,`${directory}/generation-record.json`,`${directory}/assembly-record.json`]};
  const file=`${directory}/${name}-config.json`;
  if(fs.existsSync(file)) throw Error('Preserve pilot config.');
  fs.writeFileSync(file,JSON.stringify(config,null,2)+'\n',{flag:'wx'});
  pilotRecords.push({name,sceneId:id,config:bind(file),frameRange,durationSeconds:(frameRange[1]-frameRange[0]+1)/lesson.fps,outputDirectory:`out/prototypes/module5-c3-voiced-2026-10-10/${name}`});
}
fs.writeFileSync(`${directory}/pilot-plan.json`,JSON.stringify({schemaVersion:1,source:bind(lessonPath),scope:'Two bounded voiced scene previews,1080p30fpsCRF16. Complete scene narration and response interval included. FrameRange permits pilot while full-export gate remains pending.',pilots:pilotRecords},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify(pilotRecords.map(({name,frameRange,durationSeconds})=>({name,frameRange,durationSeconds}))));
