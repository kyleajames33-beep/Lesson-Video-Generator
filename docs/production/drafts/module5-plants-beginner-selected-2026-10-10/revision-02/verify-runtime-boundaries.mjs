import {build} from 'esbuild';
import {readFileSync, writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import assert from 'node:assert/strict';
import {lessonTimeline} from '../../../../../src/lesson/timeline.mjs';

const root=process.cwd();
const folder=path.resolve('docs/production/drafts/module5-plants-beginner-selected-2026-10-10/revision-02');
const sha=p=>createHash('sha256').update(readFileSync(p)).digest('hex');
const lesson=JSON.parse(readFileSync(path.join(folder,'lesson.json'),'utf8'));
const timeline=lessonTimeline(lesson);
const prompt=timeline.scenes.find(s=>s.scene.id==='b3-check-prompt');
const feedback=timeline.scenes.find(s=>s.scene.id==='b3-check-feedback');
const start=prompt.startFrame+1119, end=prompt.startFrame+1479;
assert.equal(feedback.startFrame,end);
assert.equal(prompt.endFrame-end,24);
const built=await build({stdin:{contents:`
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {Player} from '@remotion/player';
import {LessonVideo} from './src/LessonVideo';
export const render=(lesson,frame,durationInFrames)=>renderToStaticMarkup(React.createElement(Player,{component:LessonVideo,inputProps:{lesson},durationInFrames,compositionWidth:1920,compositionHeight:1080,fps:30,initialFrame:frame,controls:false}));
`,resolveDir:root,loader:'tsx'},bundle:true,write:false,format:'esm',platform:'node',jsx:'automatic',packages:'external',loader:{'.css':'empty'}});
const bundle=path.join(folder,'.runtime-bundle.mjs');writeFileSync(bundle,built.outputFiles[0].text);
const {render}=await import(pathToFileURL(bundle));
const rows=[];
for(const frame of [start-1,start,end-1,end,end+1,end+16]) {
  const html=render(lesson,frame,timeline.durationInFrames);
  const file='runtime-global-'+frame+'.html';writeFileSync(path.join(folder,file),html);
  const answerMounted=html.includes('data-calculation-active=')||html.includes('data-calculation-focused-context=');
  assert.equal(answerMounted,frame>=end,'Feedback component mounting at global '+frame);
  rows.push({globalFrame:frame,promptLocalFrame:frame-prompt.startFrame,activeRuntimeScenes:timeline.scenes.filter(s=>frame>=s.startFrame&&frame<s.endFrame).map(s=>({id:s.scene.id,localFrame:frame-s.startFrame})),feedbackMounted:answerMounted,markup:{path:path.relative(root,path.join(folder,file)).split(path.sep).join('/'),sha256:sha(path.join(folder,file))}});
}
const record={schemaVersion:1,source:{path:path.relative(root,path.join(folder,'lesson.json')).split(path.sep).join('/'),sha256:sha(path.join(folder,'lesson.json'))},runtimeBindings:['src/LessonVideo.tsx','src/lesson/timeline.mjs','src/lesson/timing-constants.json','src/slides/ConceptSlide.tsx','src/slides/WorkedExampleSlide.tsx','src/slides/shared/Module5EvidenceBoard.tsx'].map(p=>({path:p,sha256:sha(path.join(root,p))})),runtimeTransitionFrames:24,estimatedPrompt:{globalStartFrame:prompt.startFrame,globalEndFrame:prompt.endFrame,plannedResponseStartFrame:start,plannedResponseEndFrame:end,plannedResponseFrames:end-start,nonHoldTailFrames:24},feedbackGlobalStartFrame:feedback.startFrame,samples:rows,method:'Actual lessonTimeline and actual LessonVideo rendered through actual Remotion Player with initialFrame and ReactDOMServer. No frame hooks, sequences or transitions mocked. CSS loading omitted for server markup only.','limitations':['Source/component mounting evidence only, not pixels or browser playback.','No selected audio or captions exist, so this does not prove actual answer-free silence or measured speech completion.','No continuous motion, device fit, caption clearance or listening claim.']};
writeFileSync(path.join(folder,'runtime-boundary-check.json'),JSON.stringify(record,null,2)+'\n');
console.log(JSON.stringify(record,null,2));
