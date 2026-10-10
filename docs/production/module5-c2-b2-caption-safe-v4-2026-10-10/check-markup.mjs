import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {readFileSync,writeFileSync,unlinkSync} from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';

// Synthetic frame hooks compare actual component markup. This is source-output
// evidence and does not measure native glyphs, player controls or listening.
const root=process.cwd(),docs='docs/production/module5-c2-b2-caption-safe-v4-2026-10-10';
const require=createRequire(import.meta.url),actualRemotion=path.join(path.dirname(require.resolve('remotion/package.json')),'dist/esm/index.mjs');
const stub=`export * from ${JSON.stringify(actualRemotion)}; export const useCurrentFrame=()=>globalThis.__captionCheckFrame; export const useVideoConfig=()=>({fps:30,width:1920,height:1080,durationInFrames:4000}); export const staticFile=p=>p;`;
const code=`import React from 'react';import{renderToStaticMarkup}from'react-dom/server';import{QuickCheckSlide}from'./src/slides/QuickCheckSlide';import{WorkedExampleSlide}from'./src/slides/WorkedExampleSlide';export function render(scene,lesson,frame){globalThis.__captionCheckFrame=frame;return renderToStaticMarkup(React.createElement(scene.type==='quickCheck'?QuickCheckSlide:WorkedExampleSlide,{scene,lesson,sceneIndex:7,totalScenes:9}));}`;
async function compile(before){
 const result=await build({stdin:{contents:code,resolveDir:root,loader:'tsx'},bundle:true,write:false,platform:'node',format:'esm',jsx:'automatic',packages:'external',plugins:[{name:'checkpoint-and-frame-hooks',setup(b){
  b.onResolve({filter:/^remotion$/},()=>({path:'hooks',namespace:'hooks'}));
  b.onLoad({filter:/.*/,namespace:'hooks'},()=>({contents:stub,loader:'js',resolveDir:root}));
  if(before)b.onLoad({filter:/Module5EvidenceBoard\.tsx$/},args=>{const relative=path.relative(root,args.path).replaceAll('\\','/');return{contents:execFileSync('git',['show',`7106255:${relative}`],{encoding:'utf8',windowsHide:true}),loader:'tsx',resolveDir:path.dirname(args.path)};});
 }}]});
 const filename=`${docs}/markup-${before?'baseline':'current'}.mjs`;
 writeFileSync(filename,result.outputFiles[0].text,{flag:'wx'});return import(pathToFileURL(path.resolve(filename)));
}
const baseline=await compile(true),current=await compile(false),cases=[];
for(const key of ['c2','b2']){
 const lesson=JSON.parse(readFileSync(`out/prototypes/module5-${key}-voiced-2026-10-10/narrated-v4.lesson.json`,'utf8'));
 for(const scene of lesson.scenes.filter(s=>s.calculationPresentation)){
  const stepAts=scene.revealDelays.stepAts;
  const frames=[0,100,...(scene.responseHold?[scene.responseHold.startFrame,scene.responseHold.endFrame-1,scene.responseHold.endFrame]:[]),...stepAts,...stepAts.map(n=>n+16),...scene.calculationPresentation.stages.flatMap(s=>(s.lineAts??[]).map(n=>n+16)),scene.durationInFrames-70];
  for(const frame of [...new Set(frames)]){
   const missing=structuredClone(scene);delete missing.calculationPresentation.captionSafeWorking;
   const expectedDefault=baseline.render(missing,lesson,frame),actualDefault=current.render(missing,lesson,frame);
   if(expectedDefault!==actualDefault)throw Error(`Default markup changed ${key}:${scene.id}:${frame}`);
   const explicitFalse=structuredClone(scene);explicitFalse.calculationPresentation.captionSafeWorking=false;
   if(current.render(explicitFalse,lesson,frame)!==baseline.render(explicitFalse,lesson,frame)||current.render(explicitFalse,lesson,frame)!==expectedDefault)throw Error('Explicit false changed default markup.');
   const beforeEnabled=baseline.render(scene,lesson,frame),enabled=current.render(scene,lesson,frame);
   const paddingChanges=(enabled.match(/padding:4px 0/g)??[]).length;
   if(enabled.replaceAll('padding:4px 0','padding:10px 0')!==beforeEnabled)throw Error(`Selected markup changed beyond trail padding ${key}:${scene.id}:${frame}`);
   const trailRows=(enabled.match(/data-calculation-result=/g)??[]).length;
   if(paddingChanges!==trailRows)throw Error('Changed padding is not exactly the established trail.');
   cases.push({key,sceneId:scene.id,frame,defaultMarkupUnchanged:true,explicitFalseUnchanged:true,selectedOnlyTrailPaddingChanged:true,trailRows,paddingChanges,selectedMarkupSha256:createHash('sha256').update(enabled).digest('hex')});
  }
 }
}
writeFileSync(`${docs}/markup-check.json`,JSON.stringify({status:'pass',baselineCommit:'7106255',cases,scope:'Actual React SSR at synthetic scene frames. Default and false flags are byte-identical to checkpoint. Selected markup differs only in trail-row padding. No native geometry, player caption or listening approval.'},null,2)+'\n',{flag:'wx'});
for(const version of ['baseline','current'])unlinkSync(`${docs}/markup-${version}.mjs`);
console.log(`Default/false markup unchanged and selected only-trail-padding delta verified at ${cases.length} frames.`);
