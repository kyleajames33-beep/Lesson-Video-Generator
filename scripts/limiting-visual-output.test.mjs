import test, {after} from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {openBrowser} from '@remotion/renderer';
import {createRequire} from 'node:module';
import {mkdirSync,mkdtempSync,readFileSync,writeFileSync} from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';

const root=process.cwd(),require=createRequire(import.meta.url);
const remotion=path.join(path.dirname(require.resolve('remotion/package.json')),'dist/esm/index.mjs');
mkdirSync('out/checks',{recursive:true});
const dir=mkdtempSync('out/checks/limiting-visual-');
const built=await build({stdin:{contents:`import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';
import {RecipeCountDiagram} from './src/slides/diagrams/RecipeCountDiagram';
import {ReactionRunDiagram} from './src/slides/diagrams/ReactionRunDiagram';
import {WorkedExampleSlide} from './src/slides/WorkedExampleSlide';
export function render(kind,props,frame){globalThis.__frame=frame;return renderToStaticMarkup(React.createElement({recipe:RecipeCountDiagram,reaction:ReactionRunDiagram,worked:WorkedExampleSlide}[kind],props));}`,
loader:'tsx',resolveDir:root},bundle:true,write:false,format:'esm',platform:'node',jsx:'automatic',packages:'external',plugins:[{
name:'controlled-frame',setup(b){b.onResolve({filter:/^remotion$/},()=>({path:'mock',namespace:'mock'}));b.onLoad({filter:/.*/,namespace:'mock'},()=>({contents:`export * from ${JSON.stringify(remotion)};export const useCurrentFrame=()=>globalThis.__frame;export const useVideoConfig=()=>({fps:30,width:1920,height:1080,durationInFrames:3000});export const staticFile=p=>p;`,loader:'js',resolveDir:root}));}}]});
const mod=path.join(dir,'component.mjs');writeFileSync(mod,built.outputFiles[0].text);
const {render}=await import(pathToFileURL(path.resolve(mod)));
const browser=await openBrowser('chrome',{logLevel:'error'});
after(()=>browser.close({silent:true}));
const page=await browser.newPage({context:()=>null,logLevel:'error',indent:false,pageIndex:0,onBrowserLog:null,onLog:()=>{}});
await page.setViewport({width:1920,height:1080,deviceScaleFactor:1});
const fonts=[['Inter Tight','inter-tight-latin-wght-normal.woff2'],['JetBrains Mono','jetbrains-mono-latin-wght-normal.woff2']].map(([f,p])=>`@font-face{font-family:"${f}";font-weight:100 900;src:url(data:font/woff2;base64,${readFileSync('public/fonts/'+p).toString('base64')})}`).join('');
async function load(html){await page.goto({url:'data:text/html;base64,'+Buffer.from(`<html><meta charset="utf-8"><style>${fonts}*{box-sizing:border-box}body{margin:0;width:1920px;height:1080px}</style><body>${html}</body></html>`).toString('base64'),timeout:30000});await page.evaluate(()=>document.fonts.ready);}

test('one-to-one recipe conserves ingredients and shows the bun that cannot become a fifth burger',async()=>{
 for(const [frame,used] of [[0,0],[120,4],[300,4]]){
  await load(render('recipe',{assembleAt:90,extraBunsAt:240},frame));
  const state=await page.evaluate(()=>({buns:[...document.querySelectorAll('[data-recipe-bun]')].map(e=>e.getAttribute('data-consumed')),patties:[...document.querySelectorAll('[data-recipe-patty]')].map(e=>e.getAttribute('data-consumed')),burgers:[...document.querySelectorAll('[data-recipe-burger]')].filter(e=>Number(e.getAttribute('opacity'))===1).length}));
  assert.equal(state.buns.filter(v=>v==='true').length,used);assert.equal(state.patties.filter(v=>v==='true').length,used);assert.equal(state.burgers,used);assert.equal(state.buns.length,5);assert.equal(state.patties.length,4);
 }
});
test('leftover emphasis waits for completion and the narration cue, with no circle on consumed oxygen',async()=>{
 for(const [frame,visible] of [[200,false],[330,false],[400,true]]){
  await load(render('reaction',{delay:0,runStart:60,framesPerEvent:31,highlightLeftovers:true,leftoversAt:360},frame));
  const marks=await page.evaluate(()=>[...document.querySelectorAll('[data-leftover-focus]')].map(e=>({label:e.getAttribute('data-leftover-focus'),opacity:Number(e.getAttribute('opacity'))})));
  assert.equal(marks.length,2);assert.ok(marks.every(m=>m.label==='H₂'));assert.ok(marks.every(m=>visible?m.opacity===1:m.opacity===0));
 }
});
test('compact five-operation worked board clears its givens and the caption area while retaining both final masses',async()=>{
 const scene={id:'worked',type:'workedExample',durationInFrames:3000,workedVisualLayout:'compact',heading:'Yield and leftover chlorine',question:'10.0 g Na + 20.0 g Cl₂. 2Na + Cl₂ → 2NaCl. Find NaCl yield and Cl₂ left. M: Na 22.99, Cl₂ 70.90, NaCl 58.44 g mol⁻¹.',coachNote:'Carry the unrounded values. Report final masses to 3 significant figures.',steps:['n(Na) = 0.43497 mol; n(Cl₂) = 0.28209 mol','Na / 2 = 0.21749 < Cl₂ / 1 = 0.28209. Na is limiting.','n(NaCl) = n(Na). m(NaCl) = 25.4 g','Cl₂ reacted = n(Na) / 2 = 0.21749 mol; left = initial − reacted','NaCl yield = 25.4 g; Cl₂ left = 4.58 g']};
 await load(render('worked',{scene,lesson:{title:'Limiting reagents',subject:'Chemistry',yearLevel:'Year 11',module:'Module 2',lesson:'Lesson 13',syllabusNeutral:true}},2500));
 const layout=await page.evaluate(()=>{const box=e=>{const {top,bottom,right}=e.getBoundingClientRect();return {top,bottom,right};};return {question:box(document.querySelector('[data-worked-question]')),rows:[...document.querySelectorAll('[data-worked-row]')].map(box),text:document.body.textContent};});
 assert.equal(layout.rows.length,5);assert.ok(layout.rows[0].top>layout.question.bottom+20,JSON.stringify(layout));assert.ok(layout.rows.at(-1).bottom<940,JSON.stringify(layout));assert.match(layout.text,/NaCl yield = 25.4 g; Cl₂ left = 4.58 g/);
 for(let i=1;i<5;i++)assert.ok(layout.rows[i].top>=layout.rows[i-1].bottom);
});
