// Additive exact LessonVideo review for selected teaching resets. Never overwrites evidence.
import fs from 'node:fs';
import path from 'node:path';
import {build} from 'esbuild';
import {sha256} from './lib/playback-assembly.mjs';
import {lessonTimeline} from '../src/lesson/timeline.mjs';
const [source,page]=process.argv.slice(2).filter(arg=>!arg.startsWith('--'));
if(!source||!/^[-a-z0-9]+$/.test(page??'')) throw Error('Usage: node scripts/build-teaching-reset-review.mjs lesson.json unique-page-name [--stills]');
const output=path.resolve('out/prototypes',page);
if(fs.existsSync(output)) throw Error('Preserve previous review. Choose a new page name.');
const lesson=JSON.parse(fs.readFileSync(source,'utf8'));
const timeline=lessonTimeline(lesson);
fs.mkdirSync(path.join(output,'public'),{recursive:true});
const assets=new Set();
const scan=value=>{if(typeof value==='string'&&/^(public\/)?(audio|assets|fonts)\//.test(value))assets.add(value.startsWith('public/')?value:'public/'+value);else if(Array.isArray(value))value.forEach(scan);else if(value&&typeof value==='object')Object.values(value).forEach(scan);};
scan(lesson);
for(const dir of ['public/fonts'])fs.cpSync(dir,path.join(output,dir),{recursive:true});
// Painted plates chosen in reusable scene code are explicit dependencies.
if(lesson.teachingRenderer==='b1Continuity')for(const file of fs.readdirSync('public/assets/biology'))if(/^(strawberry-runner-botanical-v1|strawberry-(flower|seedling|seed-cutaway)-botanical-b1-v1)/.test(file))assets.add('public/assets/biology/'+file);
if(lesson.teachingRenderer==='b2Animals')for(const file of ['common-frog-pond-b2-v1.png','hen-nest-b2-v1.png','hen-reproductive-location-b2-v1.png'])assets.add('public/assets/biology/'+file);
for(const file of assets){const to=path.join(output,file);fs.mkdirSync(path.dirname(to),{recursive:true});fs.copyFileSync(file,to);}
const relative=file=>{const result=path.relative(output,path.resolve(file)).replaceAll('\\','/');return result.startsWith('.')?result:'./'+result;};
const entry=path.join(output,'entry.tsx');
fs.writeFileSync(entry,`import React from 'react';import {createRoot} from 'react-dom/client';import {TeachingResetReview} from ${JSON.stringify(relative('src/prototypes/TeachingResetReview'))};import lesson from ${JSON.stringify(relative(source))};createRoot(document.getElementById('root')!).render(<TeachingResetReview lesson={lesson as any}/>);`);
const result=await build({entryPoints:[entry],outfile:path.join(output,'review.js'),bundle:true,format:'iife',platform:'browser',target:'chrome110',jsx:'automatic',minify:true,metafile:true,define:{'process.env.NODE_ENV':'"production"'}});
const css=fs.existsSync(path.join(output,'review.css'))?fs.readFileSync(path.join(output,'review.css'),'utf8'):'';
const html=`<!doctype html><html lang="en-AU"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Teaching review</title><style>${css}body{margin:0;background:#faf9f5;color:#24382f;font:18px/1.5 system-ui}main{max-width:1200px;margin:auto;padding:24px}.controls{display:flex;flex-wrap:wrap;gap:8px;margin:20px 0}button,label{font:inherit;padding:8px}button{background:white;border:1px solid #b3c5b9;border-radius:4px;color:#386c59}details{padding:12px 0}section{border-top:1px solid #ddd}@media(max-width:600px){main{padding:10px}}</style><div id="root"></div><script>window.remotion_staticBase="/${page}/public"</script><script src="review.js"></script></html>`;
fs.writeFileSync(path.join(output,'index.html'),html,{flag:'wx'});
const inputs=[...new Set([source,'scripts/build-teaching-reset-review.mjs',...Object.keys(result.metafile.inputs).filter(file=>!file.startsWith('node_modules/')&&!file.startsWith('out/prototypes/')&&!file.startsWith('(disabled):')).map(file=>file.replace(/ with \{ type: 'json' \}$/, ''))])];
fs.writeFileSync(path.join(output,'inputs.json'),JSON.stringify({source,sourceSha256:sha256(fs.readFileSync(source)),pageSha256:sha256(html),timeline,inputs:inputs.map(file=>({path:file,sha256:sha256(fs.readFileSync(file))})),assets:[...assets].map(file=>({path:file,sha256:sha256(fs.readFileSync(file))})),scope:'Actual production dispatch. Source/still/playback/listening/release evidence remain separate.'},null,2)+'\n');
const native=path.join(output,'Native.tsx');
fs.writeFileSync(native,`import React from 'react';import {Composition,registerRoot} from 'remotion';import {TeachingResetVideo} from ${JSON.stringify(relative('src/prototypes/TeachingResetReview'))};import lesson from ${JSON.stringify(relative(source))};registerRoot(()=> <Composition id="TeachingReset" component={TeachingResetVideo} defaultProps={{lesson:lesson as any,captions:true}} durationInFrames={${timeline.durationInFrames}} fps={${lesson.fps}} width={${lesson.width}} height={${lesson.height}}/>);`);
if(process.argv.includes('--stills')){
 const {bundle}=await import('@remotion/bundler');const {renderStill,selectComposition}=await import('@remotion/renderer');
 const serveUrl=await bundle({entryPoint:native,publicDir:path.join(output,'public'),outDir:path.join(output,'native-bundle')});const composition=await selectComposition({serveUrl,id:'TeachingReset'});
 for(const item of timeline.scenes){const cues=item.scene.responseHold?[item.scene.responseHold.startFrame+60]:[Math.min(400,item.scene.durationInFrames-1)];for(const local of cues)await renderStill({serveUrl,composition,frame:item.startFrame+local,output:path.join(output,`native-${item.scene.id}.png`),imageFormat:'png'});}
}
console.log('http://127.0.0.1:8778/'+page+'/');
