import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {readFileSync,writeFileSync,unlinkSync} from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';

const root=process.cwd(),docs='docs/production/module5-c2-b2-simple-working-2026-10-10/native-adjustment-01';
const assert=(c,m)=>{if(!c)throw Error(m);};
const require=createRequire(import.meta.url),actualRemotion=path.join(path.dirname(require.resolve('remotion/package.json')),'dist/esm/index.mjs');
const stub=`export * from ${JSON.stringify(actualRemotion)}; export const useCurrentFrame=()=>globalThis.__captionCheckFrame; export const useVideoConfig=()=>({fps:30,width:1920,height:1080,durationInFrames:4000}); export const staticFile=p=>p;`;
const code=`import React from 'react';import{renderToStaticMarkup}from'react-dom/server';import{QuickCheckSlide}from'./src/slides/QuickCheckSlide';import{WorkedExampleSlide}from'./src/slides/WorkedExampleSlide';export function render(scene,lesson,frame){globalThis.__captionCheckFrame=frame;return renderToStaticMarkup(React.createElement(scene.type==='quickCheck'?QuickCheckSlide:WorkedExampleSlide,{scene,lesson,sceneIndex:7,totalScenes:9}));}`;
async function compile(before){
 const result=await build({stdin:{contents:code,resolveDir:root,loader:'tsx'},bundle:true,write:false,platform:'node',format:'esm',jsx:'automatic',packages:'external',plugins:[{name:'bounded-baseline-and-frame-hooks',setup(b){
  b.onResolve({filter:/^remotion$/},()=>({path:'hooks',namespace:'hooks'}));
  b.onLoad({filter:/.*/,namespace:'hooks'},()=>({contents:stub,loader:'js',resolveDir:root}));
  if(before)b.onLoad({filter:/Module5EvidenceBoard\.tsx$/},args=>{const relative=path.relative(root,args.path).replaceAll('\\','/');return{contents:execFileSync('git',['show',`1fd9fd2:${relative}`],{encoding:'utf8',windowsHide:true}),loader:'tsx',resolveDir:path.dirname(args.path)};});
 }}]});
 const filename=`${docs}/markup-${before?'baseline':'current'}.mjs`;
 writeFileSync(filename,result.outputFiles[0].text,{flag:'wx'});return import(pathToFileURL(path.resolve(filename)));
}
const baseline=await compile(true),current=await compile(false),defaultCases=[],selectedCases=[];
for(const key of ['c2','b2']){
 const oldLesson=JSON.parse(readFileSync(`out/prototypes/module5-${key}-voiced-2026-10-10/narrated-v4.lesson.json`,'utf8'));
 const lesson=JSON.parse(readFileSync(`out/prototypes/module5-${key}-voiced-2026-10-10/narrated-v5.lesson.json`,'utf8'));
 for(const scene of lesson.scenes.filter(s=>s.calculationPresentation?.focusedContext)){
  const oldScene=oldLesson.scenes.find(s=>s.id===scene.id),stepAts=scene.revealDelays.stepAts;
  const baseFrames=[0,100,...(scene.responseHold?[scene.responseHold.startFrame,scene.responseHold.endFrame-1,scene.responseHold.endFrame]:[]),...stepAts,...stepAts.map(n=>n+16),...scene.calculationPresentation.stages.flatMap(s=>(s.lineAts??[]).map(n=>n+16)),scene.durationInFrames-70];
  for(const frame of [...new Set(baseFrames)]){
   assert(baseline.render(oldScene,oldLesson,frame)===current.render(oldScene,oldLesson,frame),`V4 markup changed: ${key}/${scene.id}/${frame}`);
   for(const flag of [undefined,false]){
    const withoutFlag=structuredClone(oldScene);if(flag===undefined)delete withoutFlag.calculationPresentation.captionSafeWorking;else withoutFlag.calculationPresentation.captionSafeWorking=false;
    assert(baseline.render(withoutFlag,oldLesson,frame)===current.render(withoutFlag,oldLesson,frame),'Legacy default/false flag markup changed.');
   }
   defaultCases.push({key,sceneId:scene.id,frame,v4WithoutFocusedContextIdentical:true,missingAndFalseCaptionFlagIdentical:true});
  }
  const p=scene.calculationPresentation;
  const frames=[...baseFrames,...p.focusedContext.flatMap(c=>[Math.max(0,c.at-1),c.at,c.at+16]),...p.stages.flatMap(s=>s.lineAts.flatMap(at=>[at-1,at,at+16]))];
  for(const frame of [...new Set(frames)].sort((a,b)=>a-b)){
   const markup=current.render(scene,lesson,frame),context=p.focusedContext.filter(c=>c.at<=frame).at(-1);
   assert(markup.includes(`data-calculation-focused-context="${context.at}"`),'Wrong current context.');
   assert(!markup.includes('data-calculation-trail'),'New focused layout exposes established trail.');
   assert(markup.includes('left:64px;width:670px'), 'Adjusted context width missing.');
   if(markup.includes('data-calculation-working'))assert(markup.includes('top:350px;left:774px;right:64px'),'Adjusted working position missing.');
   const active=stepAts.reduce((index,cue,i)=>frame>=cue?i:index,-1);
   const shouldShow=active>=0&&context.at<=stepAts[active];
   assert(markup.includes('data-calculation-working')===shouldShow,'Previous case working suppression or stage gate failed.');
   if(scene.responseHold&&frame>=scene.responseHold.startFrame&&frame<scene.responseHold.endFrame)assert(!shouldShow,'Answer visible during response hold.');
   const opacities=[...markup.matchAll(/data-calculation-line="true" style="opacity:([^;]+)/g)].map(m=>Number(m[1]));
   if(shouldShow){
    assert(opacities.length===2,'Two measured result lines changed.');
    p.stages[active].lineAts.forEach((at,index)=>{if(frame<=at)assert(opacities[index]===0,'Line visible before its original cue.');});
   }else assert(opacities.length===0,'Hidden working still exposes result lines.');
   selectedCases.push({key,sceneId:scene.id,frame,contextAt:context.at,activeStage:shouldShow?active:null,resultOpacities:opacities,trailAbsent:true,markupSha256:createHash('sha256').update(markup).digest('hex')});
  }
 }
}
const report={status:'pass',baselineCommit:'1fd9fd2',defaultCases,selectedCases,scope:'Actual React server markup at synthetic frames. Legacy and v4 non-opt-in paths are byte-identical. New focused contexts, prior-case answer suppression, absent trail, response boundaries and original line gates verify. No native glyph bounds, caption/control playback or listening claim.'};
writeFileSync(`${docs}/markup-check.json`,JSON.stringify(report,null,2)+'\n',{flag:'wx'});
for(const version of ['baseline','current'])unlinkSync(`${docs}/markup-${version}.mjs`);
console.log(`Passed ${defaultCases.length} unchanged-default cases and ${selectedCases.length} selected context/answer-gate cases.`);
