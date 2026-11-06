// Static React/SVG proof only. Does not register, bundle or render a lesson/video.
import {build} from 'esbuild';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {openBrowser} from '@remotion/renderer';
import {mkdir,readFile,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
const out=path.resolve('work/brief147/components');await mkdir(out,{recursive:true});
const compiled=path.join(out,'proof-components.mjs');
await build({entryPoints:['src/explainer/biology/fa1/index.ts'],bundle:true,platform:'node',format:'esm',external:['react'],outfile:compiled});
const m=await import(pathToFileURL(compiled).href);
const simulation=m.createGapSimulation();
const selective=m.createGapSimulation({...m.DEFAULT_GAP_CONFIG,divider:'membrane',maxSteps:700,kinds:[{id:'water',label:'Water',left:50,right:25,passes:true,color:'#2b7db0'},{id:'sugar',label:'Sugar',left:4,right:18,passes:false,color:'#b86e0a',shape:'hexagon',radius:9}]});
const impact=['cristae','ER and ribosomes','Golgi stack','nuclear pores','bacteria: no nucleus','structure explains function','light microscope: living cells, colour, cheap'].map((label,i)=>({id:`impact${i}`,label}));
const limits=['dead specimens','preparation artefacts','cost and training'].map((label,i)=>({id:`limit${i}`,label}));
const cases=[
 ['ladder-light',m.SizeLadder,{progress:0}],['ladder-electron',m.SizeLadder,{progress:1}],
 ['assess-judgement',m.AssessBalance,{criterion:'What could it resolve, and so explain?',impact,limitations:limits,tiltDegrees:-7,judgement:'Great impact; complementary tools still matter.'}],
 ['assess-neutral',m.AssessBalance,{criterion:'What could it resolve, and so explain?',impact,limitations:limits}],
 ['gap-early',m.GapBox,{simulation,frame:150,fps:30}],['gap-later',m.GapBox,{simulation,frame:1500,fps:30,showTotals:true}],
 ['gap-selective',m.GapBox,{simulation:selective,frame:700,fps:30,counterKind:'water',title:'Water can cross this membrane; sugar cannot'}],
];
// Same scientific instant must give the same SVG across composition frame rates.
if(renderToStaticMarkup(React.createElement(m.GapBox,{simulation,frame:300,fps:30}))!==renderToStaticMarkup(React.createElement(m.GapBox,{simulation,frame:600,fps:60})))throw new Error('Frame-rate dependence');
const defaultGap=renderToStaticMarkup(React.createElement(m.GapBox,{simulation,frame:300,fps:30}));
if(/model steps|No target counts|Cumulative|Illustrative model|Crossings since the start/.test(defaultGap))throw new Error('Author/provenance copy must be opt-in');
if(/not a count of chips/.test(renderToStaticMarkup(React.createElement(m.AssessBalance,{criterion:'Criterion',impact:[],limitations:[]}))))throw new Error('Balance author note must be opt-in');
if(/Thumbnails are not to scale/.test(renderToStaticMarkup(React.createElement(m.SizeLadder,{}))))throw new Error('No thumbnail note without thumbnails');
const font=(await readFile('public/fonts/inter-tight-latin-wght-normal.woff2')).toString('base64');
const browser=await openBrowser('chrome',{logLevel:'error'});
const page=await browser.newPage({context:()=>null,logLevel:'error',indent:false,pageIndex:0,onBrowserLog:null,onLog:()=>{}});
const audit=[];
try{
 for(const [id,Component,props] of cases){
  for(const [label,w,h] of [['native',1920,1080],['phone',844,390]]){
   const svg=renderToStaticMarkup(React.createElement(Component,{...props,width:'100%',height:'100%'}));
   await writeFile(path.join(out,`${id}.svg`),svg);
   const html=path.join(out,`${id}-${label}.html`);
   await writeFile(html,`<!doctype html><html><meta charset="utf-8"><style>@font-face{font-family:'Inter Tight';src:url(data:font/woff2;base64,${font});font-weight:100 900}*{box-sizing:border-box}body{margin:0;background:#f6f1e7;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center}main{width:100%;height:100%;padding:${label==='phone'?4:20}px}svg{display:block}</style><main>${svg}</main></html>`);
   await page.setViewport({width:w,height:h,deviceScaleFactor:1});
   await page.goto({url:pathToFileURL(html).href,timeout:30000});
   await page.evaluate(()=>document.fonts.ready);
   const boxes=await page.evaluate(()=>{const svg=document.querySelector('svg'),vb=svg.viewBox.baseVal;return [...svg.querySelectorAll('text')].map(t=>{const b=t.getBBox();return {text:t.textContent,x:b.x,y:b.y,width:b.width,height:b.height,inside:b.x>=0&&b.y>=0&&b.x+b.width<=vb.width+.1&&b.y+b.height<=vb.height+.1};});});
   const shot=await page._client().send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false,fromSurface:true});
   await writeFile(path.join(out,`${id}-${label}.png`),Buffer.from(shot.value.data,'base64'));
   audit.push({id,layout:label,dimensions:[w,h],allTextInsideViewBox:boxes.every(b=>b.inside),textBoxes:boxes});
  }
 }
}finally{await browser.close({silent:true});}
await writeFile(path.join(out,'still-audit.json'),JSON.stringify({status:audit.every(a=>a.allTextInsideViewBox)?'pass':'needs-fix',frameRateInvariant:true,stills:audit},null,2)+'\n');
if(audit.some(a=>!a.allTextInsideViewBox))throw new Error('Text outside SVG: '+audit.filter(a=>!a.allTextInsideViewBox).map(a=>a.id).join(','));
console.log(`Saved ${audit.length} static native/phone proofs; text bounds and frame-rate invariance pass.`);
