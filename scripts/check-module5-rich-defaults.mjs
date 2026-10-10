import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {pathToFileURL} from 'node:url';
import {build} from 'esbuild';
import assert from 'node:assert/strict';
import {sha256} from './lib/playback-assembly.mjs';
const root=process.cwd();
const baseline=execFileSync('git',['show','1da1d59:src/slides/ConceptSlide.tsx'],{encoding:'utf8'});
const folder='out/local/rich-concept-defaults';fs.mkdirSync(folder,{recursive:true});
const modules=[];
for(const old of [true,false]) {
 const result=await build({stdin:{contents:`import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';import {Player} from '@remotion/player';import {ConceptSlide} from '${old?'legacy-concept':'./src/slides/ConceptSlide'}';import {AccentContext,themeFor} from './src/styles/theme';export function render(scene,lesson,frame){const C=()=>React.createElement(AccentContext.Provider,{value:themeFor(lesson.subject)},React.createElement(ConceptSlide,{scene,lesson}));return renderToStaticMarkup(React.createElement(Player,{component:C,durationInFrames:scene.durationInFrames,compositionWidth:1920,compositionHeight:1080,fps:30,initialFrame:frame,inputProps:{}}));}`,resolveDir:root,loader:'tsx'},bundle:true,write:false,format:'esm',platform:'node',jsx:'automatic',packages:'external',plugins:[{name:'legacy-concept',setup(b){b.onResolve({filter:/^legacy-concept$/},()=>({path:'legacy',namespace:'legacy'}));b.onLoad({filter:/.*/,namespace:'legacy'},()=>({contents:baseline,loader:'tsx',resolveDir:path.resolve('src/slides')}));}}]});
 const file=path.resolve(folder,old?'baseline.mjs':'current.mjs');fs.writeFileSync(file,result.outputFiles[0].text);modules.push(await import(pathToFileURL(file)));
}
let count=0;
const sources=[
 'docs/production/drafts/module5-c3-beginner-selected-2026-10-10/lesson.json',
 'docs/production/drafts/module5-plants-beginner-selected-2026-10-10/revision-02/lesson.json',
 'docs/production/drafts/module5-c2-selected-2026-10-10/lesson.json',
 'docs/production/drafts/module5-b2-selected-2026-10-10/lesson.json',
];
for(const source of sources) {
 const lesson=JSON.parse(fs.readFileSync(source,'utf8'));
 for(const scene of lesson.scenes.filter(s=>s.type==='concept')) {
  for(const frame of [90,Math.floor(scene.durationInFrames/2),scene.durationInFrames-60]) {
   assert.equal(modules[1].render(scene,lesson,frame),modules[0].render(scene,lesson,frame),`${source}/${scene.id}/${frame}`);count++;
  }
 }
}
const report={schemaVersion:1,scope:'Actual Remotion Player/server markup comparison for unchanged supported ConceptSlide layouts only. Not a native, continuous playback or listening pass.',baselineCommit:'1da1d59',cases:count,pass:true,currentComponentSha256:sha256(fs.readFileSync('src/slides/ConceptSlide.tsx')),sources:sources.map(p=>({path:p,sha256:sha256(fs.readFileSync(p))}))};
fs.writeFileSync('docs/production/drafts/module5-rich-visuals-2026-10-10/default-layout-check.json',JSON.stringify(report,null,2)+'\n');console.log(`${count} unchanged supported default layout samples match actual Player markup.`);
