import test,{after} from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {readFile,mkdir,mkdtemp,writeFile,rm} from 'node:fs/promises';
import {fileURLToPath,pathToFileURL} from 'node:url';
import path from 'node:path';
import {hash} from './lib/science-audit.mjs';
// Actual components and ReactDOMServer; only runtime frame/config hooks are
// synthetic. No browser, audio, pixels, network or paid rendering is involved.
const root=path.resolve(fileURLToPath(new URL('..',import.meta.url))),require=createRequire(import.meta.url);
const actualRemotion=path.join(path.dirname(require.resolve('remotion/package.json')),'dist/esm/index.mjs');
const stub=`export {interpolate,spring,Easing,random} from ${JSON.stringify(actualRemotion)};export const useCurrentFrame=()=>globalThis.__priorityTestFrame;export const useVideoConfig=()=>({fps:30,width:1920,height:1080,durationInFrames:2000});export const staticFile=p=>p;`;
const built=await build({stdin:{contents:`import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';import {ZonesDiagram} from './src/slides/diagrams/kinds/bio-y11-m2b/ZonesDiagram';import {FoodChainDiagram} from './src/slides/diagrams/kinds/chem-y12-m8/FoodChainDiagram';export function render(kind,props,frame=1000){globalThis.__priorityTestFrame=frame;return renderToStaticMarkup(React.createElement(kind==='zones'?ZonesDiagram:FoodChainDiagram,props));}`,resolveDir:root,loader:'tsx'},bundle:true,write:false,format:'esm',platform:'node',jsx:'automatic',packages:'external',plugins:[{name:'synthetic-remotion-hooks',setup(b){b.onResolve({filter:/^remotion$/},()=>({path:'fixture',namespace:'fixture'}));b.onLoad({filter:/.*/,namespace:'fixture'},()=>({contents:stub,loader:'js',resolveDir:root}));}}]});
await mkdir(path.join(root,'out/checks'),{recursive:true});const directory=await mkdtemp(path.join(root,'out/checks/priority-markup-'));await writeFile(path.join(directory,'components.mjs'),built.outputFiles[0].text);after(()=>rm(directory,{recursive:true,force:true}));
const {render}=await import(pathToFileURL(path.join(directory,'components.mjs')));
const normalise=html=>html.replace(/(-?\d+\.\d{7,})/g,n=>Number(n).toFixed(6));
const fixture=JSON.parse(await readFile(new URL('./fixtures/priority-legacy-markup.json',import.meta.url)));
test('four current authored uses preserve all sixteen main-baseline component snapshots',()=>{
 assert.equal(fixture.cases.length,4);
 for(const c of fixture.cases.filter(c=>c.kind==='zones'))assert.equal([...render('zones',c.props).matchAll(/<line[^>]*stroke="#b3261e"[^>]*stroke-width="3"/gu)].length,2,'baseline has the two critical-boundary lines');assert.equal(fixture.baselineCommit,'ca58c157f0349b29774f93a76cd041aefab3a2a2');
 for(const c of fixture.cases)for(const [i,frame] of fixture.frames.entries()){
  assert.equal(hash(normalise(render(c.kind,c.props,frame))),c.hashes[i],c.name+' '+frame);
  assert.equal(render(c.kind,{...c.props,referenceBandOnly:false,reviewedMethylmercury:false},frame),render(c.kind,c.props,frame));
 }
});
const {priorityScienceSources,priorityScienceArtifacts}=await import('./lib/priority-science-lessons.mjs');
test('reference-band component renders no critical cutoff lines or universal enzyme curve',async()=>{
 const name=Object.keys(priorityScienceSources)[0],a=priorityScienceArtifacts(name,await readFile('src/data/'+name+'.json'));
 for(const s of a.draft.scenes.filter(s=>s.diagram?.kind==='bio11m2Zones')){
  const html=render('zones',s.diagram.props);assert.match(html,/No universal safety or survival boundaries/u);assert.match(html,/Reference band only/u);assert.doesNotMatch(html,/NaN|Infinity|enzyme activity|denature/u);assert.equal(s.diagram.props.enzyme,undefined);assert.doesNotMatch(html,/<line[^>]*stroke="#b3261e"[^>]*stroke-width="3"/u);
 }
});
test('food-web component names a qualitative MeHg example and distinguishes water uptake',()=>{
 const html=render('foodchain',{reviewedMethylmercury:true,contaminant:'MeHg'});assert.match(html,/Water is not a trophic level/u);assert.match(html,/water uptake, then food-chain transfer/u);assert.match(html,/uptake exceeds elimination/u);assert.match(html,/dots and bars are not measurements/u);assert.doesNotMatch(html,/NaN|Infinity/u);
 assert.throws(()=>render('foodchain',{reviewedMethylmercury:true,contaminant:'As'}));
});
