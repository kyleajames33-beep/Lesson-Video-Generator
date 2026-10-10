import fs from 'node:fs';
import path from 'node:path';
import {build} from 'esbuild';
import {bundle} from '@remotion/bundler';
import {selectComposition,renderStill,openBrowser} from '@remotion/renderer';
import {createHash} from 'node:crypto';
import lesson from './lesson.json' with {type:'json'};
const base='docs/production/overnight-module5-2026-10-10/chemistry-catalysts';
const out='out/prototypes/overnight-chemistry-catalysts-2026-10-10';
fs.mkdirSync(out,{recursive:true});fs.cpSync('public/fonts',out+'/public/fonts',{recursive:true});
const built=await build({metafile:true,entryPoints:[base+'/Player.tsx'],outfile:out+'/review.js',bundle:true,format:'iife',platform:'browser',jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'}});
fs.writeFileSync(out+'/index.html',`<!doctype html><html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="review.css"><div id="root"></div><script>window.remotion_staticBase="/overnight-chemistry-catalysts-2026-10-10/public";</script><script src="review.js"></script></html>`);
if(process.argv.includes('--stills')){
 const captured=['Candidate.tsx','Render.tsx','lesson.json'].map(name=>({path:base+'/'+name,sha256:createHash('sha256').update(fs.readFileSync(base+'/'+name)).digest('hex')}));
 const url=await bundle({entryPoint:base+'/Render.tsx',publicDir:'public',outDir:path.resolve(out+'/bundle')});
 const browser=await openBrowser('chrome');
 const composition=await selectComposition({serveUrl:url,browserInstance:browser,id:'Catalysts'});
 let start=0;const frames=[];
 for(const scene of lesson.scenes){frames.push({name:scene.id,frame:start+Math.min(300,scene.durationInFrames-30)});if(scene.id==='c4b-path')frames.push({name:'path-final',frame:start+Math.min(750,scene.durationInFrames-30)});if(scene.responseHold){frames.push({name:'response-end',frame:start+scene.responseHold.endFrame-1});frames.push({name:'feedback-boundary',frame:start+scene.responseHold.endFrame});}start+=scene.durationInFrames-24;}
 const selected=process.argv.includes('--profile')?frames.filter(item=>['c4b-path','path-final'].includes(item.name)):process.argv.includes('--targeted')?frames.filter(item=>['c4b-path','path-final','c4b-approach','c4b-response','response-end','feedback-boundary','c4b-notes'].includes(item.name)):frames;
 for(const item of selected)for(const scale of [.5,.25])await renderStill({serveUrl:url,browserInstance:browser,composition,frame:item.frame,scale,output:out+'/'+item.name+'-'+(scale===.5?'960':'480')+'.png',imageFormat:'png'});
 await browser.close({silent:true});
 fs.writeFileSync(out+'/still-record.json',JSON.stringify({scope:'Native Remotion stills only. Silent estimated cues, no voiced or continuous playback review.',inputs:captured,frames:selected},null,2));
}
const hash=file=>createHash('sha256').update(fs.readFileSync(file)).digest('hex');
fs.writeFileSync(out+'/page-inputs.json',JSON.stringify({source:base+'/lesson.json',sourceSha256:hash(base+'/lesson.json'),inputs:Object.keys(built.metafile.inputs).filter(file=>!file.includes('node_modules')&&fs.existsSync(file)).map(file=>({path:file.replaceAll('\\','/'),sha256:hash(file)})),pageSha256:hash(out+'/index.html')},null,2));
console.log('http://127.0.0.1:8778/overnight-chemistry-catalysts-2026-10-10/');


