import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {readFileSync,writeFileSync,unlinkSync} from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';

// Actual React components with synthetic frame/config hooks. This is neither
// native pixel geometry nor audio/continuous playback evidence.
const root=process.cwd(),docs='docs/production/module5-c2-b2-caption-safe-2026-10-10';
const require=createRequire(import.meta.url),actualRemotion=path.join(path.dirname(require.resolve('remotion/package.json')),'dist/esm/index.mjs');
const stub=`export * from ${JSON.stringify(actualRemotion)}; export const useCurrentFrame=()=>globalThis.__captionCheckFrame; export const useVideoConfig=()=>({fps:30,width:1920,height:1080,durationInFrames:4000}); export const staticFile=p=>p;`;
const code=`import React from 'react';import{renderToStaticMarkup}from'react-dom/server';import{QuickCheckSlide}from'./src/slides/QuickCheckSlide';import{WorkedExampleSlide}from'./src/slides/WorkedExampleSlide';export function render(scene,lesson,frame){globalThis.__captionCheckFrame=frame;return renderToStaticMarkup(React.createElement(scene.type==='quickCheck'?QuickCheckSlide:WorkedExampleSlide,{scene,lesson,sceneIndex:7,totalScenes:9}));}`;
async function compile(before){
 const result=await build({stdin:{contents:code,resolveDir:root,loader:'tsx'},bundle:true,write:false,platform:'node',format:'esm',jsx:'automatic',packages:'external',plugins:[{name:'bounded-baseline-and-frame-hooks',setup(b){
  b.onResolve({filter:/^remotion$/},()=>({path:'hooks',namespace:'hooks'}));
  b.onLoad({filter:/.*/,namespace:'hooks'},()=>({contents:stub,loader:'js',resolveDir:root}));
  if(before)b.onLoad({filter:/(QuickCheckSlide|Module5EvidenceBoard)\.tsx$/},args=>{const relative=path.relative(root,args.path).replaceAll('\\','/');return{contents:execFileSync('git',['show',`40fa283:${relative}`],{encoding:'utf8',windowsHide:true}),loader:'tsx',resolveDir:path.dirname(args.path)};});
 }}]});
 const filename=`${docs}/markup-${before?'baseline':'current'}.mjs`;
 writeFileSync(filename,result.outputFiles[0].text,{flag:'wx'});return import(pathToFileURL(path.resolve(filename)));
}
const baseline=await compile(true),current=await compile(false),cases=[];
for(const key of ['c2','b2']){
 const lesson=JSON.parse(readFileSync(`out/prototypes/module5-${key}-voiced-2026-10-10/narrated-v2.lesson.json`,'utf8'));
 for(const scene of lesson.scenes.filter(scene=>scene.calculationPresentation)){
  const stepAts=scene.revealDelays.stepAts;
  const frames=[0,100,...(scene.responseHold?[scene.responseHold.startFrame,scene.responseHold.endFrame-1,scene.responseHold.endFrame]:[]),...stepAts,...stepAts.map(n=>n+16),...scene.calculationPresentation.stages.flatMap(s=>(s.lineAts??[]).map(n=>n+16)),scene.durationInFrames-70];
  for(const frame of [...new Set(frames)]){
   const expected=baseline.render(scene,lesson,frame),actual=current.render(scene,lesson,frame);
   if(expected!==actual)throw Error(`Default markup changed ${key}:${scene.id}:${frame}`);
   const explicitFalse=structuredClone(scene);explicitFalse.calculationPresentation.captionSafeWorking=false;
   if(current.render(explicitFalse,lesson,frame)!==expected)throw Error('Explicit false changed default markup.');
   const selected=structuredClone(scene);selected.calculationPresentation.captionSafeWorking=true;
   const enabled=current.render(selected,lesson,frame);
   cases.push({key,sceneId:scene.id,frame,defaultMarkupUnchanged:true,explicitFalseUnchanged:true,selectedMarkupSha256:createHash('sha256').update(enabled).digest('hex')});
  }
 }
}
const report={status:'pass',baselineCommit:'40fa283',cases,scope:'Actual React SSR markup comparison at synthetic scene frames for the three existing selected tasks. Both missing and false opt-in retain exact baseline markup. No pixel, native caption/player or listening approval.'};
writeFileSync(`${docs}/default-markup-check.json`,JSON.stringify(report,null,2)+'\n',{flag:'wx'});
for(const version of ['baseline','current'])unlinkSync(`${docs}/markup-${version}.mjs`);
console.log(`Default and explicit-false markup identical for ${cases.length} sampled task frames.`);
