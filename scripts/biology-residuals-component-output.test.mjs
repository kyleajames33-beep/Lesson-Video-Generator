import test,{after} from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {readFile,readdir,mkdir,mkdtemp,writeFile,rm} from 'node:fs/promises';
import {fileURLToPath,pathToFileURL} from 'node:url';
import path from 'node:path';
import {hash} from './lib/science-audit.mjs';
import {biologyResidualSources,biologyResidualDraft,pinnedBiologyFixture} from './lib/biology-residuals-lessons.mjs';
const root=path.resolve(fileURLToPath(new URL('..',import.meta.url))),require=createRequire(import.meta.url);
const components={
 bio11m1Membrane:['bio-y11-m1a','Membrane','CellMembrane'],
 bio12m8Membrane:['bio-y12-m8','Membrane','ExchangeMembrane'],
 bio11m2Nephron:['bio-y11-m2b','Nephron','Nephron'],
 bio11m2Compare:['bio-y11-m2b','Compare','Compare'],
 bio11m2Potometer:['bio-y11-m2a','Potometer','Potometer'],
 bio12m5Meiosis:['bio-y12-m5','Meiosis','Meiosis'],
 bio12m5Reshuffle:['bio-y12-m5','Reshuffle','Reshuffle'],
 bio11m1bAssortment:['bio-y11-m1b','Assortment','Assortment'],
};
const fixture=pinnedBiologyFixture('components');
const actualRemotion=path.join(path.dirname(require.resolve('remotion/package.json')),'dist/esm/index.mjs');
const stub=`export {interpolate,spring,Easing,random} from ${JSON.stringify(actualRemotion)};export const useCurrentFrame=()=>globalThis.__bioResidualFrame;export const useVideoConfig=()=>({fps:30,width:1920,height:1080,durationInFrames:3600});export const staticFile=p=>p;`;
await mkdir(path.join(root,'out/checks'),{recursive:true});const temp=await mkdtemp(path.join(root,'out/checks/bio-residual-markup-'));after(()=>rm(temp,{recursive:true,force:true}));
async function renderer(baseline=false){
 const imports=Object.values(components).map(([lane,name,alias])=>`import {${name}Diagram as ${alias}} from './src/slides/diagrams/kinds/${lane}/${name}Diagram';`).join('');
 const kinds=Object.entries(components).map(([k,[,,alias]])=>`${k}:${alias}`).join(',');
 const built=await build({stdin:{contents:`import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';${imports}const kinds={${kinds}};export const render=(kind,props,frame)=>{globalThis.__bioResidualFrame=frame;return renderToStaticMarkup(React.createElement(kinds[kind],props));};`,resolveDir:root,loader:'tsx'},bundle:true,write:false,format:'esm',platform:'node',jsx:'automatic',packages:'external',plugins:[{name:'time-hooks-and-exact-baseline',setup(b){
  b.onResolve({filter:/^remotion$/},()=>({path:'fixture',namespace:'fixture'}));b.onLoad({filter:/.*/,namespace:'fixture'},()=>({contents:stub,loader:'js',resolveDir:root}));
  if(baseline)b.onLoad({filter:/(?:Reshuffle|Assortment)Diagram\.tsx$/},args=>{const relative=path.relative(root,args.path).split(path.sep).join('/'),entry=fixture.sources[relative];assert.ok(entry);assert.equal(hash(entry.content),entry.sha256);return{contents:entry.content,loader:'tsx',resolveDir:path.dirname(args.path)};});
 }}]});
 const p=path.join(temp,baseline?'baseline.mjs':'current.mjs');await writeFile(p,built.outputFiles[0].text);return import(pathToFileURL(p));
}
const current=await renderer(),baseline=await renderer(true),frames=[0,62,240,700,1500];
const authored=[];
for(const name of(await readdir('src/data')).filter(f=>f.endsWith('.json'))){const d=JSON.parse(await readFile(path.join('src/data',name)));for(const s of d.scenes??[])if(['bio12m5Reshuffle','bio11m1bAssortment'].includes(s.diagram?.kind))authored.push({name:name+'#'+s.id,kind:s.diagram.kind,props:s.diagram.props??{}});}
const drafts=[];for(const name of Object.keys(biologyResidualSources)){const d=biologyResidualDraft(name,await readFile(`src/data/${name}.json`)).draft;for(const s of d.scenes)if(s.diagram)drafts.push({name:name+'#'+s.id,...s.diagram});}
const text=html=>[...html.matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/gu)].map(m=>m[1].replace(/<[^>]+>/gu,'')).join(' ');

test('both changed diagrams preserve every authored catalogue use and omitted/false defaults at five frames',()=>{
 assert.equal(authored.length,4,'Review catalogue component-usage changes explicitly');for(const x of [...authored,{kind:'bio12m5Reshuffle',props:{}},{kind:'bio11m1bAssortment',props:{}}])for(const frame of frames){
  const expected=baseline.render(x.kind,x.props,frame);assert.equal(current.render(x.kind,x.props,frame),expected,x.name??x.kind);assert.equal(current.render(x.kind,{...x.props,reviewedBiologyResiduals:false},frame),expected);
 }
});
test('all proposed diagrams have finite real React/SVG output at five source-review frames',()=>{
 assert.equal(drafts.length,15);
 for(const d of drafts)for(const frame of frames){const html=current.render(d.kind,d.props,frame);assert.doesNotMatch(html,/NaN|Infinity|undefined/u,d.name+' frame '+frame);assert.match(html,/<svg/u);}
});
test('reviewed assortment names possible types and separates fertilisation from gamete formation',()=>{
 const props=drafts.find(d=>d.kind==='bio11m1bAssortment').props,t=text(current.render('bio11m1bAssortment',props,1500));
 assert.match(t,/possible types/u);assert.match(t,/8,388,608/u);assert.match(t,/Fertilisation: offspring variety/u);assert.doesNotMatch(t,/= 8 gametes|× random fertilisation/u);
});
test('reviewed reshuffle uses single-chromatid gamete output while retaining the crossing-over example',()=>{
 const d=drafts.find(d=>d.kind==='bio12m5Reshuffle'),html=current.render(d.kind,d.props,1500),old=baseline.render(d.kind,d.props,1500);
 assert.match(text(html),/2 pairs → 4 possible types/u);assert.match(text(html),/recombinant: Ab, aB/u);assert.notEqual(html,old);
 // Chromatid rods are authored through the shared Chromosome helper. The
 // reviewed end products remove one sister rod per displayed chromosome.
 const count=h=>[...h.matchAll(/<path\b/gu)].length;assert.ok(count(html)<count(old),'post-meiosis glyphs have fewer chromatid paths');
});
test('explicit invalid review flags are rejected while omitted and false remain compatible',()=>{
 for(const kind of ['bio12m5Reshuffle','bio11m1bAssortment'])for(const value of [undefined,null,1,0,'true','false',[],{}])assert.throws(()=>current.render(kind,{reviewedBiologyResiduals:value},1500),/must be boolean/u);
});

test('reviewed diagram schema rejects invalid timing, mixed flags, unsupported type and misleading pair labels',async()=>{
 const {validateBiologyResidualDiagram:validate}=await import('../src/slides/diagrams/biology-residuals-models.mjs');
 for(const kind of ['bio12m5Reshuffle','bio11m1bAssortment']){
  for(const extras of [{at:null},{at:[]},{at:{other:0}},{delay:-1},{delay:NaN},{delay:'0'},{rule:''},{reviewedFuture:true},{reviewedMedicine:'false'}]){
   const props={reviewedBiologyResiduals:true,...extras};assert.throws(()=>validate({type:'diorama',kind,props}));assert.throws(()=>current.render(kind,props,1500));
  }
  assert.throws(()=>validate({type:'chart',kind,props:{reviewedBiologyResiduals:true}}),/require a diorama/u);
 }
 assert.throws(()=>validate({type:'diorama',kind:'unknown',props:{reviewedBiologyResiduals:true}}),/Unsupported/u);
 for(const pairs of [0,2,NaN,Infinity,'23',null])assert.throws(()=>current.render('bio11m1bAssortment',{reviewedBiologyResiduals:true,pairs},1500),/23 pairs/u);
 assert.throws(()=>current.render('bio12m5Reshuffle',{reviewedBiologyResiduals:true,at:{cross:100,swap:20}},1500),/ordered/u);
});

test('partial reviewed cue schedules validate their effective order after component defaults are merged',async()=>{
 const {validateBiologyResidualDiagram:validate,validateBiologyResidualProps:validateProps}=await import('../src/slides/diagrams/biology-residuals-models.mjs');
 for(const [kind,at]of [
  ['bio12m5Reshuffle',{cross:1000}],['bio11m1bAssortment',{one:1000}],
  ['bio12m5Reshuffle',{swap:20}],['bio11m1bAssortment',{two:5}],
 ]){
  const props={reviewedBiologyResiduals:true,at};
  assert.throws(()=>validateProps(kind,props),/effective schedule must be ordered/u);
  assert.throws(()=>validate({type:'diorama',kind,props}),/effective schedule must be ordered/u);
  assert.throws(()=>current.render(kind,props,1500),/effective schedule must be ordered/u);
  // No new validation or output change is imposed on unreviewed legacy use.
  assert.equal(current.render(kind,{at},1500),baseline.render(kind,{at},1500));
  assert.equal(current.render(kind,{...props,reviewedBiologyResiduals:false},1500),baseline.render(kind,{at},1500));
 }
 for(const [kind,at]of [['bio12m5Reshuffle',{cross:100}],['bio11m1bAssortment',{one:20}]]){
  const props={reviewedBiologyResiduals:true,at};assert.doesNotThrow(()=>validateProps(kind,props));assert.doesNotThrow(()=>current.render(kind,props,1500));
 }
});
