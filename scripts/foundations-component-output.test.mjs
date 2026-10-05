import test,{after} from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {componentBaselineSource} from './lib/component-baseline-fixtures.mjs';
import {readFile,mkdir,mkdtemp,writeFile,rm,readdir} from 'node:fs/promises';
import {fileURLToPath,pathToFileURL} from 'node:url';
import path from 'node:path';
import {foundationsSources,foundationsArtifacts} from './lib/foundations-chemistry-lessons.mjs';
const root=path.resolve(fileURLToPath(new URL('..',import.meta.url))),require=createRequire(import.meta.url);
const baseline='ca58c157f0349b29774f93a76cd041aefab3a2a2';
const changedFiles=['src/slides/diagrams/kinds/chem-y12-m7b/PolymerPropsDiagram.tsx','src/slides/diagrams/kinds/chem-y12-m7b/PolymerFateDiagram.tsx'];
const actualRemotion=path.join(path.dirname(require.resolve('remotion/package.json')),'dist/esm/index.mjs');
const stub=`export {interpolate,spring,Easing,random} from ${JSON.stringify(actualRemotion)};export const useCurrentFrame=()=>globalThis.__foundationsFrame;export const useVideoConfig=()=>({fps:30,width:1920,height:1080,durationInFrames:2400});export const staticFile=p=>p;`;
await mkdir('out/checks',{recursive:true});const directory=await mkdtemp(path.join(root,'out/checks/foundations-markup-'));after(()=>rm(directory,{recursive:true,force:true}));
async function renderer(old=false){
 const built=await build({stdin:{contents:`import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';import {PolymerPropsDiagram} from './src/slides/diagrams/kinds/chem-y12-m7b/PolymerPropsDiagram';import {PolymerFateDiagram} from './src/slides/diagrams/kinds/chem-y12-m7b/PolymerFateDiagram';import {SorterDiagram} from './src/slides/diagrams/kinds/chem-y12-m6/SorterDiagram';import {IndicatorDiagram} from './src/slides/diagrams/kinds/chem-y12-m6/IndicatorDiagram';import {FizzBeakersDiagram} from './src/slides/diagrams/kinds/chem-y12-m6/FizzBeakersDiagram';const kinds={chem12m7PolymerProps:PolymerPropsDiagram,chem12m7PolymerFate:PolymerFateDiagram,chem12m6Sorter:SorterDiagram,chem12m6Indicator:IndicatorDiagram,chem12m6FizzBeakers:FizzBeakersDiagram};export function render(kind,props,frame=1700){globalThis.__foundationsFrame=frame;return renderToStaticMarkup(React.createElement(kinds[kind],props));}`,resolveDir:root,loader:'tsx'},bundle:true,write:false,format:'esm',platform:'node',jsx:'automatic',packages:'external',plugins:[{name:'synthetic-hooks-and-main-baseline',setup(b){b.onResolve({filter:/^remotion$/},()=>({path:'fixture',namespace:'fixture'}));b.onLoad({filter:/.*/,namespace:'fixture'},()=>({contents:stub,loader:'js',resolveDir:root}));if(old)b.onLoad({filter:/Polymer(?:Props|Fate)Diagram\.tsx$/},args=>{const relative=path.relative(root,args.path);assert.ok(changedFiles.includes(relative));return{contents:componentBaselineSource(baseline,relative),loader:'tsx',resolveDir:path.dirname(args.path)};});}}]});
 const file=path.join(directory,old?'main.mjs':'candidate.mjs');await writeFile(file,built.outputFiles[0].text);return(await import(pathToFileURL(file))).render;
}
const render=await renderer(),old=await renderer(true),frames=[0,240,700,1200,1700];
const cases=[{kind:'chem12m7PolymerProps',props:{}},...['thermo','hydrolysis','environment'].map(mode=>({kind:'chem12m7PolymerFate',props:{mode}}))];
for(const file of await readdir('src/data'))if(file.endsWith('.json'))for(const s of JSON.parse(await readFile('src/data/'+file)).scenes)if(['chem12m7PolymerProps','chem12m7PolymerFate'].includes(s.diagram?.kind))cases.push({name:file+'#'+s.id,kind:s.diagram.kind,props:s.diagram.props});
test('every current polymer use and default mode matches preserved-main component output',()=>{
 assert.equal(cases.length,8);for(const c of cases)for(const f of frames){assert.equal(render(c.kind,c.props,f),old(c.kind,c.props,f),(c.name??c.kind)+' '+f);assert.equal(render(c.kind,{...c.props,reviewedPolymer:false},f),old(c.kind,c.props,f));}
});
test('opt-in polymer labels qualify PVC properties and polyethylene fate without changing geometry',()=>{
 const props=render('chem12m7PolymerProps',{reviewedPolymer:true}),fate=render('chem12m7PolymerFate',{reviewedPolymer:true,mode:'thermo'});
 assert.match(props,/formulation matters/u);assert.doesNotMatch(props,/higher MP/u);assert.match(props,/low adhesion/u);
 assert.match(fate,/not readily biodegradable/u);assert.match(fate,/reprocessing depends/u);assert.match(fate,/Fragmentation is not complete biodegradation/u);assert.doesNotMatch(fate,/no microbe enzyme can|Recyclable, yes/u);
 for(const x of [props,fate])assert.doesNotMatch(x,/NaN|Infinity/u);
 assert.throws(()=>render('chem12m7PolymerFate',{reviewedPolymer:true,mode:'environment'}));
});
test('authored acid proposal produces finite component markup with scoped examples and stationary cues',async()=>{
 const name=Object.keys(foundationsSources)[3],a=foundationsArtifacts(name,await readFile('src/data/'+name+'.json'));
 for(const scene of a.draft.scenes.filter(s=>s.diagram))for(const frame of frames){const html=render(scene.diagram.kind,scene.diagram.props,frame);assert.doesNotMatch(html,/NaN|Infinity/u);if(scene.id==='concept-patterns'){assert.match(html,/Dilute HCl/u);assert.doesNotMatch(html,/Cu, Ag|HNO₃/u);}if(scene.id==='concept-naming'){assert.match(html,/not a complete naming algorithm/u);assert.match(html,/does the acid contain oxygen/u);assert.match(html,/No: binary acid/u);assert.match(html,/Yes: oxoacid/u);}}
});
