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
const stub=`export {interpolate,spring,Easing,random} from ${JSON.stringify(actualRemotion)};export const useCurrentFrame=()=>globalThis.__medicineTestFrame;export const useVideoConfig=()=>({fps:30,width:1920,height:1080,durationInFrames:2000});export const staticFile=p=>p;`;
const built=await build({stdin:{contents:`import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';import {SkeletalDiagram} from './src/slides/diagrams/kinds/chem-y12-m8/SkeletalDiagram';import {IonisationDiagram} from './src/slides/diagrams/kinds/chem-y12-m8/IonisationDiagram';export function render(kind,props,frame=1000){globalThis.__medicineTestFrame=frame;return renderToStaticMarkup(React.createElement(kind==='skeletal'?SkeletalDiagram:IonisationDiagram,props));}`,resolveDir:root,loader:'tsx'},bundle:true,write:false,format:'esm',platform:'node',jsx:'automatic',packages:'external',plugins:[{name:'synthetic-remotion-hooks',setup(b){b.onResolve({filter:/^remotion$/},()=>({path:'fixture',namespace:'fixture'}));b.onLoad({filter:/.*/,namespace:'fixture'},()=>({contents:stub,loader:'js',resolveDir:root}));}}]});
await mkdir(path.join(root,'out/checks'),{recursive:true});const directory=await mkdtemp(path.join(root,'out/checks/medicine-markup-'));await writeFile(path.join(directory,'components.mjs'),built.outputFiles[0].text);after(()=>rm(directory,{recursive:true,force:true}));
const {render}=await import(pathToFileURL(path.join(directory,'components.mjs')));
const normalise=html=>html.replace(/(-?\d+\.\d{7,})/g,n=>Number(n).toFixed(6));
const fixture=JSON.parse(await readFile(new URL('./fixtures/medicine-legacy-markup.json',import.meta.url)));
test('all nine legacy modes and all nine authored catalogue uses retain baseline component markup',()=>{
 assert.equal(fixture.cases.length,18);assert.equal(fixture.baselineCommit,'ca58c157f0349b29774f93a76cd041aefab3a2a2');
 for(const c of fixture.cases)for(const [index,frame] of fixture.frames.entries()){
  assert.equal(hash(normalise(render(c.kind,c.props,frame))),c.hashes[index],c.name+' frame '+frame);
  assert.equal(render(c.kind,{...c.props,reviewedMedicine:false},frame),render(c.kind,c.props,frame));
 }
});
test('corrected skeletal output replaces causal and safety claims without losing molecule geometry',()=>{
 const html=render('skeletal',{mode:'modify',reviewedMedicine:true});assert.match(html,/RETAINED GROUP/u);assert.match(html,/acid-base role/u);assert.match(html,/acetyl group matters/u);assert.match(html,/safety needs evidence/u);assert.doesNotMatch(html,/PHARMACOPHORE|pain relief kept|stomach irritation ↓|irritating group/u);
 const paths=s=>[...s.matchAll(/<path\b[^>]*\bd="([^"]+)"/g)].map(m=>m[1]);assert.deepEqual(paths(html),paths(render('skeletal',{mode:'modify'})));
});
test('reviewed numeric values reach visible SVG labels and accessibility descriptions',()=>{
 const compare=render('ionisation',{mode:'compare',reviewedMedicine:true,pKa:3.5,stomachRange:[1,2],intestineRange:[6,7],stomachPH:1.5,intestinePH:6.5});assert.match(compare,/99\.01% HA \(ideal model\)/u);assert.match(compare,/99\.90% A⁻ \(ideal model\)/u);assert.match(compare,/not an absorption percentage/u);assert.doesNotMatch(compare,/more water-soluble|crosses membranes more easily/u);
 const salts=render('ionisation',{mode:'salts',reviewedMedicine:true,acidSolubility:4,saltSolubility:40});for(const text of ['Illustrative data only','4 g/L','40 g/L','10.0-fold','Not measured aspirin solubilities','Same solvent and temperature'])assert.ok(salts.includes(text),text);assert.doesNotMatch(salts,/over 500|160-fold|morphine|fix solubility/u);
 assert.match(render('ionisation',{mode:'forms',reviewedMedicine:true}),/Schematic passive diffusion, not total absorption/u);
 assert.match(render('ionisation',{mode:'hh',reviewedMedicine:true}),/schematic particles/u);
 assert.throws(()=>render('ionisation',{mode:'compare',reviewedMedicine:true}));assert.throws(()=>render('ionisation',{mode:'salts',reviewedMedicine:true,acidSolubility:3,saltSolubility:30,foldLabel:'160-fold'}));assert.throws(()=>render('skeletal',{mode:'reaction',reviewedMedicine:true}));
});
