// Dedicated B2 silent source preview and sampled native stills. No paid narration or full export.
import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {build} from 'esbuild';
const revision=process.argv.find(arg=>arg.startsWith('--revision='))?.slice(11)??'v1';
if(!/^v\d+$/.test(revision)) throw Error('Use a numbered revision.');
const page=`b2-animal-teaching-reset-2026-10-11-${revision}`;
const output=path.resolve('out/prototypes',page);
const entry='src/prototypes/B2AnimalTeachingReset.tsx';
const lessonPath='docs/production/module5-seconds-notes-2026-10-10/biology/teaching-reset/lesson.json';
const assets=['common-frog-pond-b2-v1.png','hen-nest-b2-v1.png','hen-reproductive-location-b2-v1.png'].map(file=>`public/assets/biology/${file}`);
const hash=file=>createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const lesson=JSON.parse(fs.readFileSync(lessonPath,'utf8'));
if(fs.existsSync(path.join(output,'index.html'))) throw Error('Preserve prior preview and use a new revision.');
if(JSON.stringify(lesson).includes(String.fromCodePoint(0x2014))) throw Error('Prohibited punctuation.');
if(lesson.scenes.some(scene=>scene.voiceover?.audioFile)) throw Error('Silent draft must not attach audio.');
for(const scene of lesson.scenes) for(const beat of scene.teachingReset.previewBeats) if(scene.voiceover.text.split(beat.spokenCue).length!==2) throw Error(`Cue must occur exactly once: ${scene.id} ${beat.spokenCue}`);
fs.mkdirSync(path.join(output,'public/assets/biology'),{recursive:true});
fs.cpSync('public/fonts',path.join(output,'public/fonts'),{recursive:true});
for(const file of assets) fs.copyFileSync(file,path.join(output,file));
const result=await build({entryPoints:[entry],outfile:path.join(output,'review.js'),bundle:true,format:'iife',platform:'browser',target:'chrome110',jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'},minify:true,metafile:true});
fs.writeFileSync(path.join(output,'index.html'),`<!doctype html><html lang="en-AU"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>B2a animal fertilisation</title><style>body{margin:0;background:#fafaf8;color:#202a23;font:18px/1.5 system-ui}main{max-width:1100px;margin:auto;padding:28px 24px}h1{font-size:34px;line-height:1.15}.controls{display:flex;flex-wrap:wrap;gap:10px;margin:18px 0}button{font:inherit;padding:9px 14px;background:white;color:#1f6fb2;border:1px solid #bccad5;border-radius:5px;cursor:pointer}</style><div id="b2-reset-review-root"></div><script>window.remotion_staticBase="/${page}/public";</script><script src="review.js"></script></html>`,{flag:'wx'});
let from=0;
const scenes=lesson.scenes.map(scene=>{const item={id:scene.id,from,durationInFrames:scene.durationInFrames};from+=scene.durationInFrames;return item;});
const inputs=Object.keys(result.metafile.inputs).filter(file=>!file.startsWith('node_modules/')).map(file=>({path:file,sha256:hash(file)}));
fs.writeFileSync(path.join(output,'page-inputs.json'),JSON.stringify({scope:'Silent source and sampled native layout only. Independent science/student learning and exact voiced reviews pending.',lessonPath,lessonSha256:hash(lessonPath),durationInFrames:from,fps:30,width:1920,height:1080,scenes,assets:assets.map(file=>({path:file,sha256:hash(file)})),inputs,visualLimits:lesson.teachingReset.visualLimits},null,2)+'\n',{flag:'wx'});
console.log(`http://127.0.0.1:8778/${page}/`);
if(process.argv.includes('--stills')){
 const {bundle}=await import('@remotion/bundler');
 const {renderStill,selectComposition}=await import('@remotion/renderer');
 const native=path.join(output,'Native.tsx');
 fs.writeFileSync(native,`import React from 'react';import {Composition,registerRoot} from 'remotion';import {B2AnimalTeachingReset} from '../../../src/prototypes/B2AnimalTeachingReset';registerRoot(()=> <Composition id="B2Reset" component={B2AnimalTeachingReset} durationInFrames={${from}} fps={30} width={1920} height={1080}/>);\n`,{flag:'wx'});
 const serveUrl=await bundle({entryPoint:native,publicDir:path.join(output,'public'),outDir:path.join(output,'native-bundle')});
 const composition=await selectComposition({serveUrl,id:'B2Reset'});
 const picks=[['pond-and-nest',450],['frog-joining',100],['frog-joining',420],['frog-joining',820],['water-and-encounters',600],['water-and-encounters',870],['hen-inside',100],['hen-inside',540],['join-shell-lay',100],['join-shell-lay',330],['join-shell-lay',860],['pond-current-attempt',1040],['pond-current-feedback',620],['key-notes',500]];
 const frames=picks.map(([id,local])=>scenes.find(scene=>scene.id===id).from+local);
 for(const frame of frames) await renderStill({serveUrl,composition,frame,output:path.join(output,`native-${frame}.png`),imageFormat:'png',scale:1});
 fs.writeFileSync(path.join(output,'still-frames.json'),JSON.stringify({scope:'Sampled native layout only. No continuous playback or listening pass.',frames},null,2)+'\n',{flag:'wx'});
 console.log('Fourteen native stills written.');
}

