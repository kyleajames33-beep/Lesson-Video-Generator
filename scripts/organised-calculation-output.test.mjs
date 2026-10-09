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
const dir=mkdtempSync('out/checks/organised-calculation-');
const built=await build({stdin:{contents:`import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';import {QuickCheckSlide} from './src/slides/QuickCheckSlide';import {WorkedExampleSlide} from './src/slides/WorkedExampleSlide';
export function render(scene,frame){globalThis.__frame=frame;return renderToStaticMarkup(React.createElement(scene.type==='quickCheck'?QuickCheckSlide:WorkedExampleSlide,{scene,lesson:{title:'Calculation',subject:'Chemistry',yearLevel:'Year 11',module:'Module 2',lesson:'Lesson 13',syllabusNeutral:true}}));}`,
loader:'tsx',resolveDir:root},bundle:true,write:false,format:'esm',platform:'node',jsx:'automatic',packages:'external',plugins:[{name:'controlled-frame',setup(b){b.onResolve({filter:/^remotion$/},()=>({path:'mock',namespace:'mock'}));b.onLoad({filter:/.*/,namespace:'mock'},()=>({contents:`export * from ${JSON.stringify(remotion)};export const useCurrentFrame=()=>globalThis.__frame;export const useVideoConfig=()=>({fps:30,width:1920,height:1080,durationInFrames:3000});export const staticFile=p=>p;`,loader:'js',resolveDir:root}));}}]});
const mod=path.join(dir,'component.mjs');writeFileSync(mod,built.outputFiles[0].text);
const {render}=await import(pathToFileURL(path.resolve(mod)));
const browser=await openBrowser('chrome',{logLevel:'error'});
after(()=>browser.close({silent:true}));
const page=await browser.newPage({context:()=>null,logLevel:'error',indent:false,pageIndex:0,onBrowserLog:null,onLog:()=>{}});
await page.setViewport({width:1920,height:1080,deviceScaleFactor:1});
const fonts=[['Inter Tight','inter-tight-latin-wght-normal.woff2'],['JetBrains Mono','jetbrains-mono-latin-wght-normal.woff2']].map(([f,p])=>`@font-face{font-family:"${f}";font-weight:100 900;src:url(data:font/woff2;base64,${readFileSync('public/fonts/'+p).toString('base64')})}`).join('');
async function load(scene,frame){await page.goto({url:'data:text/html;base64,'+Buffer.from(`<html><meta charset="utf-8"><style>${fonts}*{box-sizing:border-box}body{margin:0;width:1920px;height:1080px}</style><body>${render(scene,frame)}</body></html>`).toString('base64'),timeout:30000});await page.evaluate(()=>document.fonts.ready);}
const presentation={task:'Which reactant runs out first?',equation:'2H₂ + O₂ → 2H₂O',givens:[{label:'Hydrogen (H₂)',value:'4.00 g',reference:'M = 2.016 g mol⁻¹'},{label:'Oxygen (O₂)',value:'16.0 g',reference:'M = 31.998 g mol⁻¹'}],stages:[{label:'Find the hydrogen capacity',lines:['n(H₂) = 4.00 ÷ 2.016 = 1.9841 mol','H₂: 1.9841 ÷ 2 = 0.99206'],summary:'Hydrogen capacity: 0.99206'},{label:'Find the oxygen capacity',lines:['n(O₂) = 16.0 ÷ 31.998 = 0.50003 mol','O₂: 0.50003 ÷ 1 = 0.50003'],summary:'Oxygen capacity: 0.50003'},{label:'Compare the capacities',lines:['0.50003 < 0.99206','Oxygen is limiting.'],summary:'Oxygen is limiting'}]};
const quiz={id:'quiz',type:'quickCheck',durationInFrames:1400,heading:'Question',question:'Legacy compound question',answerSteps:['Hydrogen','Oxygen','Conclusion'],calculationPresentation:presentation,responseHold:{startFrame:120,endFrame:300},revealDelays:{answerVisibleStart:300,stepAts:[300,500,700]}};
test('structured recall retains the givens and exposes no answer during the complete response interval',async()=>{
 for(const frame of [100,120,299]){await load(quiz,frame);const state=await page.evaluate(()=>({givens:document.querySelector('[data-calculation-givens]').textContent,active:document.querySelector('[data-calculation-active]'),trail:document.querySelector('[data-calculation-trail]')}));assert.match(state.givens,/4.00 g/);assert.match(state.givens,/2.016/);assert.equal(state.active,null);assert.equal(state.trail,null);}
});
test('one recorded stage appears at a time; prior results persist and future conclusions remain absent',async()=>{
 await load(quiz,330);let state=await page.evaluate(()=>({active:document.querySelector('[data-calculation-active]').textContent,trail:document.querySelector('[data-calculation-trail]')?.textContent}));assert.match(state.active,/1.9841/);assert.doesNotMatch(state.active,/0.50003|Oxygen is limiting/);assert.equal(state.trail,undefined);
 await load(quiz,530);state=await page.evaluate(()=>({active:document.querySelector('[data-calculation-active]').textContent,trail:document.querySelector('[data-calculation-trail]').textContent}));assert.match(state.active,/0.50003/);assert.match(state.trail,/0.99206/);assert.doesNotMatch(state.active+state.trail,/Oxygen is limiting/);
 await load(quiz,730);assert.match(await page.evaluate(()=>document.querySelector('[data-calculation-active]').textContent),/Oxygen is limiting/);
});
test('measured five-stage layout keeps associated givens, active working and result trail clear of each other and captions',async()=>{
 const stages=Array.from({length:5},(_,i)=>({label:`Stage ${i+1}: one operation with a clear purpose`,lines:i===3?['n(Cl₂ used) = n(Na) ÷ 2 = 0.21749 mol','n(Cl₂ left) = initial − used = 0.06460 mol','m(Cl₂ left) = n(Cl₂ left) × 70.90 = 4.58 g']:['n(Na) = 10.0 ÷ 22.99 = 0.43497 mol','n(Cl₂) = 20.0 ÷ 70.90 = 0.28209 mol'],summary:'Na: 0.43497 mol; Cl₂: 0.28209 mol'}));
 const scene={id:'worked',type:'workedExample',durationInFrames:3000,heading:'Working',question:'Legacy question',steps:Array(5).fill('Calculation'),revealDelays:{stepAts:[100,300,500,700,900]},calculationPresentation:{...presentation,task:'Find the NaCl yield and chlorine left over',equation:'2Na + Cl₂ → 2NaCl',references:[{label:'M(NaCl)',value:'58.44 g mol⁻¹'}],note:'Keep extra digits in the working. Final masses:3 significant figures.',stages}};
 for(const frame of [120,720,920]){await load(scene,frame);const boxes=await page.evaluate(()=>{const box=s=>{const e=document.querySelector(s),r=e.getBoundingClientRect();return {top:r.top,bottom:r.bottom,left:r.left,right:r.right,scrollWidth:e.scrollWidth,clientWidth:e.clientWidth};};return {header:box('[data-calculation-header]'),givens:box('[data-calculation-givens]'),working:box('[data-calculation-working]'),lines:[...document.querySelectorAll('[data-calculation-line]')].map(e=>({scroll:e.scrollWidth,width:e.clientWidth}))};});assert.ok(boxes.header.bottom+20<boxes.givens.top,JSON.stringify(boxes));assert.ok(boxes.givens.right+30<boxes.working.left,JSON.stringify(boxes));assert.ok(boxes.working.bottom<930,JSON.stringify(boxes));assert.ok(boxes.givens.bottom<930,JSON.stringify(boxes));assert.ok(boxes.lines.every(l=>l.scroll<=l.width));}
});
test('early authored row cues still cannot expose a structured answer before the response boundary',async()=>{const early={...quiz,revealDelays:{answerVisibleStart:300,stepAts:[0,20,40]}};await load(early,299);assert.equal(await page.evaluate(()=>document.querySelector('[data-calculation-active]')),null);});
test('a later result line waits for its own recorded phrase while its relationship is already visible',async()=>{
 const stages=[{label:'Product ratio and mass',lines:['n(NaCl) = n(Na)','Theoretical yield = 25.4 g'],lineAts:[100,400],summary:'25.4 g'}];
 const scene={id:'product',type:'workedExample',durationInFrames:900,heading:'Product',question:'Find the yield',steps:['Product'],revealDelays:{stepAts:[100]},calculationPresentation:{...presentation,stages}};
 await load(scene,200);let opacity=await page.evaluate(()=>[...document.querySelectorAll('[data-calculation-line]')].map(e=>Number(getComputedStyle(e).opacity)));assert.deepEqual(opacity,[1,0]);
 await load(scene,420);opacity=await page.evaluate(()=>[...document.querySelectorAll('[data-calculation-line]')].map(e=>Number(getComputedStyle(e).opacity)));assert.deepEqual(opacity,[1,1]);
});
