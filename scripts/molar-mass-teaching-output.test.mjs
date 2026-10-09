import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {mkdirSync, mkdtempSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const require = createRequire(import.meta.url);
const actualRemotion = path.join(path.dirname(require.resolve('remotion/package.json')), 'dist/esm/index.mjs');
mkdirSync(path.join(root,'out/checks'),{recursive:true});
const directory = mkdtempSync(path.join(root,'out/checks/molar-mass-markup-'));
const built = await build({stdin:{contents:`import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';import {MolarMassTeachingSlide} from './src/slides/MolarMassTeachingSlide';
export function render(scene,frame){globalThis.__molarMassFrame=frame;return renderToStaticMarkup(React.createElement(MolarMassTeachingSlide,{scene,lesson:{title:'Molar mass',subject:'Chemistry',yearLevel:'Year 11',module:'Module 2',lesson:'Lesson 2',syllabusNeutral:true},sceneIndex:1,totalScenes:11}));}`,
  resolveDir:root,loader:'tsx'},bundle:true,write:false,format:'esm',platform:'node',jsx:'automatic',packages:'external',plugins:[{
  name:'frame-controlled-remotion',setup(builder){
    builder.onResolve({filter:/^remotion$/},()=>({path:'fixture',namespace:'fixture'}));
    builder.onLoad({filter:/.*/,namespace:'fixture'},()=>({contents:`export * from ${JSON.stringify(actualRemotion)};
export const useCurrentFrame=()=>globalThis.__molarMassFrame;export const useVideoConfig=()=>({fps:30,width:1920,height:1080,durationInFrames:1800});export const staticFile=p=>p;`,loader:'js',resolveDir:root}));
  }}]});
const modulePath = path.join(directory,'renderer.mjs');
writeFileSync(modulePath,built.outputFiles[0].text);
const {render} = await import(pathToFileURL(modulePath));

// Read visible text while respecting ancestor opacity in actual component output.
function visibleText(html) {
  const stack = [], text = [];
  for (const token of html.match(/<[^>]*>|[^<]+/g) ?? []) {
    if (token.startsWith('</')) {stack.pop();continue;}
    if (token.startsWith('<')) {
      if (/^<(?:img|path|line|rect|br|meta|link)\b/.test(token)) continue;
      const opacity = token.match(/(?:^|[;" ])opacity:([\d.]+)/);
      stack.push((stack.at(-1) ?? true) && (!opacity || Number(opacity[1])>0.01));
    } else if (stack.at(-1) ?? true) text.push(token);
  }
  return text.join(' ').replaceAll('&#x27;',"'").replace(/\s+/g,' ');
}
const base = {id:'fixture',durationInFrames:1800,caption:'Fixture'};

test('bracket prediction shows supplied data while all counts and solution values remain hidden through the hold',()=>{
  const scene = {...base,type:'workedExample',teachingLayout:'molarMassBrackets',responseHold:{startFrame:90,endFrame:210},
    revealDelays:{counts:240,contributions:300,total:360,rounded:420,guardDigits:330}};
  for (const frame of [0,89,90,150,209,210]) {
    const visible=visibleText(render(scene,frame));
    assert.match(visible,/Ca\(H₂PO₄\)₂/);
    assert.match(visible,/15\.999/);
    assert.doesNotMatch(visible,/8 atoms|4 atoms|2 atoms|1 atom|127\.992|234\.044|234\.04/);
  }
  assert.match(visibleText(render(scene,225)),/8 atoms/);
  assert.doesNotMatch(visibleText(render(scene,225)),/4 atoms|127\.992/);
  const final=visibleText(render(scene,450));
  assert.match(final,/1 atom/);assert.match(final,/4 atoms/);assert.match(final,/2 atoms/);assert.match(final,/8 atoms/);
  assert.match(final,/234\.044/);assert.match(final,/234\.04/);
});

test('chlorine solution stays hidden during its actual hold and follows separate molar-mass, division and rounding cues',()=>{
  const scene={...base,type:'quickCheck',teachingLayout:'molarMassChlorine',responseHold:{startFrame:90,endFrame:240},
    revealDelays:{molarMass:270,divide:330,unrounded:390,rounded:450}};
  for(const frame of [0,90,150,239,240])assert.doesNotMatch(visibleText(render(scene,frame)),/70\.90|1\.00141|1\.00 mol/);
  assert.match(visibleText(render(scene,300)),/70\.90/);
  assert.doesNotMatch(visibleText(render(scene,300)),/1\.00141|1\.00 mol/);
  assert.match(visibleText(render(scene,480)),/1\.00 mol \(3 significant figures\)/);
});

test('formula board preserves the causal comparison before multiplication, then switches to the amount formula and its units',()=>{
  const scene={...base,type:'concept',teachingLayout:'molarMassFormula',revealDelays:{oneMole:0,twoMoles:40,multiply:80,
    amount:90,molarMass:100,mass:110,units:140,cancel:165,divide:200}};
  const causal=visibleText(render(scene,60));assert.match(causal,/12\.01 g/);assert.match(causal,/24\.02 g/);assert.doesNotMatch(causal,/m = n/);
  assert.match(visibleText(render(scene,180)),/m = n × M/);
  const divide=visibleText(render(scene,225));assert.match(divide,/n = m ÷ M/);assert.match(divide,/g ÷ \(g mol⁻¹\) = mol/);
});

test('boards reject missing narration cues and missing measured response holds',()=>{
  assert.throws(()=>render({...base,type:'concept',teachingLayout:'molarMassFormula'},10),/Missing aligned teaching cue/);
  assert.throws(()=>render({...base,type:'workedExample',teachingLayout:'molarMassBrackets',revealDelays:{}},10),/measured response hold/);
});
