import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {build} from 'esbuild';
import {lessonTimeline} from '../src/lesson/timeline.mjs';
const revision=process.argv.find(a=>a.startsWith('--revision='))?.slice(11)||'v1';
if(!/^v\d+$/.test(revision))throw Error('Use numbered revision.');
const page=`module5-c4-teaching-reset-2026-10-11-${revision}`,out=path.resolve('out/prototypes',page),entry='src/prototypes/C4TeachingResetReview.tsx';
if(fs.existsSync(path.join(out,'index.html')))throw Error('Preserve existing output. Use new revision.');
fs.mkdirSync(path.join(out,'public'),{recursive:true});fs.cpSync('public/fonts',path.join(out,'public/fonts'),{recursive:true});
const result=await build({entryPoints:[entry],outfile:path.join(out,'review.js'),bundle:true,format:'iife',platform:'browser',jsx:'automatic',target:'chrome110',minify:true,metafile:true,define:{'process.env.NODE_ENV':'"production"'}});
fs.writeFileSync(path.join(out,'index.html'),`<!doctype html><html lang="en-AU"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>C4A/C4B silent teaching reset</title><link rel="stylesheet" href="review.css"><style>body{margin:0;background:#faf9f5;color:#26352e;font:18px/1.5 system-ui}main{max-width:1100px;margin:auto;padding:28px}.controls{display:flex;flex-wrap:wrap;gap:10px;margin:20px 0}button,select{font:inherit;padding:9px;background:white;color:#26352e;border:1px solid #abc0b0}</style><div id="c4-reset-review-root"></div><script>window.remotion_staticBase="/${page}/public";</script><script src="review.js"></script></html>`,{flag:'wx'});
const inputs=Object.keys(result.metafile.inputs).filter(p=>!p.startsWith('node_modules/')&&!p.startsWith('(disabled):')).map(p=>p.replace(/ with \{ type: 'json' \}$/,''));
fs.writeFileSync(path.join(out,'page-inputs.json'),JSON.stringify({status:'Silent supported LessonVideo draft, no audio or listening pass',inputs:inputs.map(p=>({path:p,sha256:createHash('sha256').update(fs.readFileSync(p)).digest('hex')}))},null,2));
console.log(`http://127.0.0.1:8778/${page}/`);
if(process.argv.includes('--stills')){
 const {bundle}=await import('@remotion/bundler'),{renderStill,selectComposition}=await import('@remotion/renderer');
 const sources=['docs/production/overnight-module5-2026-10-10/chemistry-pressure/teaching-reset/lesson.json','docs/production/overnight-module5-2026-10-10/chemistry-catalysts/teaching-reset/lesson.json'];
 const lessons=sources.map(p=>JSON.parse(fs.readFileSync(p,'utf8'))),timelines=lessons.map(lessonTimeline);
 const native=path.join(out,'Native.tsx');fs.writeFileSync(native,`import React from 'react';import {Composition,registerRoot} from 'remotion';import {C4PressureLesson,C4CatalystLesson} from '../../../src/prototypes/C4TeachingResetReview';registerRoot(()=> <><Composition id="C4A" component={C4PressureLesson} durationInFrames={${timelines[0].durationInFrames}} fps={30} width={1920} height={1080}/><Composition id="C4B" component={C4CatalystLesson} durationInFrames={${timelines[1].durationInFrames}} fps={30} width={1920} height={1080}/></>);`);
 const serveUrl=await bundle({entryPoint:native,publicDir:path.join(out,'public'),outDir:path.join(out,'native-bundle')});
 for(let i=0;i<2;i++){
  const composition=await selectComposition({serveUrl,id:i?'C4B':'C4A'});
  for(const item of timelines[i].scenes){const s=item.scene;const local=s.responseHold?s.responseHold.endFrame-90:s.diagram?.props?.limitAt?Math.min(s.durationInFrames-90,s.diagram.props.limitAt+120):Math.floor(s.durationInFrames*.65);await renderStill({serveUrl,composition,frame:item.startFrame+local,output:path.join(out,`native-${i===0?'c4a':'c4b'}-${s.id}.png`),imageFormat:'png'});}
 }
 console.log('Actual LessonVideo native scene stills written; no full video or audio.');
}
