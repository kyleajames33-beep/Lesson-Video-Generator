import fs from 'node:fs';
import path from 'node:path';
import {build} from 'esbuild';
import {createHash} from 'node:crypto';
const revision=process.argv.find(a=>a.startsWith('--revision='))?.slice(11)||'v1';
if(!/^v\d+$/.test(revision)) throw Error('Use a numbered revision.');
const page=`c1-bottle-teaching-reset-2026-10-11-${revision}`, output=path.resolve('out/prototypes',page);
if(fs.existsSync(path.join(output,'index.html'))) throw Error('Preserve existing output; choose a new revision.');
fs.mkdirSync(path.join(output,'public'),{recursive:true});
fs.cpSync('public/fonts',path.join(output,'public/fonts'),{recursive:true});
const entry='src/prototypes/C1BottleTeachingReset.tsx';
const source='docs/production/module5-starters-2026-10-10/chemistry/teaching-reset/lesson.json';
const lesson=JSON.parse(fs.readFileSync(source,'utf8').replace(/^\uFEFF/,''));
const total=lesson.scenes.reduce((n,s)=>n+s.durationInFrames,0);
await build({entryPoints:[entry],outfile:path.join(output,'review.js'),bundle:true,format:'iife',platform:'browser',target:'chrome110',jsx:'automatic',minify:true,define:{'process.env.NODE_ENV':'"production"'}});
fs.writeFileSync(path.join(output,'index.html'),`<!doctype html><html lang="en-AU"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>C1 bottle teaching reset | Silent preview</title><style>body{margin:0;background:#faf9f5;color:#24382f;font:18px/1.5 system-ui}main{max-width:1100px;margin:auto;padding:28px}h1{font-size:34px}.controls{display:flex;flex-wrap:wrap;gap:8px;margin:20px 0}button{font:inherit;padding:8px 12px;background:white;color:#386c59;border:1px solid #b3c5b9;border-radius:4px}</style><div id="c1-reset-root"></div><script>window.remotion_staticBase="/${page}/public"</script><script src="review.js"></script></html>`,{flag:'wx'});
fs.writeFileSync(path.join(output,'inputs.json'),JSON.stringify({status:'silent preview, pending review',source,sourceSha256:createHash('sha256').update(fs.readFileSync(source)).digest('hex'),entry,entrySha256:createHash('sha256').update(fs.readFileSync(entry)).digest('hex'),durationInFrames:total,remaining:'Independent science/learning, motion/narrow, narration/alignment/captions, human listening and release review pending.'},null,2));
console.log(`http://127.0.0.1:8778/${page}/`);
if(process.argv.includes('--stills')){
 const {bundle}=await import('@remotion/bundler');
 const {renderStill,selectComposition}=await import('@remotion/renderer');
 const native=path.join(output,'Native.tsx');
 fs.writeFileSync(native,`import React from 'react';import {Composition,registerRoot} from 'remotion';import {C1BottleTeachingReset} from '../../../src/prototypes/C1BottleTeachingReset';registerRoot(()=> <Composition id="C1Reset" component={C1BottleTeachingReset} durationInFrames={${total}} fps={30} width={1920} height={1080}/>);`);
 const serveUrl=await bundle({entryPoint:native,publicDir:path.join(output,'public'),outDir:path.join(output,'native-bundle')});
 const composition=await selectComposition({serveUrl,id:'C1Reset'});
 let offset=0;
 for(const s of lesson.scenes){const local=s.id==='application-attempt'?810:s.id==='boundary'?780:s.id==='application-feedback'?750:400;await renderStill({serveUrl,composition,frame:offset+Math.min(local,s.durationInFrames-1),output:path.join(output,`native-${s.id}.png`),imageFormat:'png'});offset+=s.durationInFrames;}
 console.log('Ten native1920x1080 scene stills written. No full render or audio generated.');
}
