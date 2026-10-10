// Isolated pressure design comparison. Creates a silent Player page and optional stills.
import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {build} from 'esbuild';
const revision=process.argv.find(a=>a.startsWith('--revision='))?.slice(11);
if(revision&&!/^v\d+$/.test(revision)) throw Error('Use a numbered revision, such as v2.');
const page=`pressure-design-pilot-2026-10-11${revision?'-'+revision:''}`;
const output=path.resolve('out/prototypes',page);
const entry='src/prototypes/PressureDesignPilot.tsx';
const hash=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex');
if(fs.existsSync(path.join(output,'index.html'))) throw Error('Existing pilot preserved. Use --revision=v2 or another new numbered revision.');
fs.mkdirSync(path.join(output,'public'),{recursive:true});
fs.cpSync('public/fonts',path.join(output,'public/fonts'),{recursive:true});
const result=await build({entryPoints:[entry],outfile:path.join(output,'review.js'),bundle:true,format:'iife',platform:'browser',target:'chrome110',jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'},minify:true,metafile:true});
fs.writeFileSync(path.join(output,'index.html'),`<!doctype html><html lang="en-AU"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Pressure | Silent design pilot</title><style>body{margin:0;background:#f8f7f2;color:#243731;font:18px/1.5 system-ui,sans-serif}main{max-width:1100px;margin:auto;padding:28px 24px}h1{font-size:32px;line-height:1.2}.controls{display:flex;flex-wrap:wrap;gap:9px;margin:16px 0}button{font:inherit;padding:9px 13px;background:white;border:1px solid #acbfb1;border-radius:5px;color:#0d6b52;cursor:pointer}</style><div id="pilot-review-root"></div><script>window.remotion_staticBase="/${page}/public";</script><script src="review.js"></script></html>`,{flag:'wx'});
fs.writeFileSync(path.join(output,'page-inputs.json'),JSON.stringify({scope:'Silent pressure design comparison; no paid audio, full export or release approval.',durationInFrames:1980,fps:30,inputs:Object.keys(result.metafile.inputs).filter(p=>!p.startsWith('node_modules/')).map(p=>({path:p,sha256:hash(p)}))},null,2)+'\n',{flag:'wx'});
console.log(`http://127.0.0.1:8778/${page}/`);
if(process.argv.includes('--stills')){
  const {bundle}=await import('@remotion/bundler');
  const {renderStill,selectComposition}=await import('@remotion/renderer');
  const native=path.join(output,'Native.tsx');
  fs.writeFileSync(native,`import React from 'react';import {Composition,registerRoot} from 'remotion';import {PressureDesignPilot} from '../../../src/prototypes/PressureDesignPilot';registerRoot(()=> <Composition id="Pressure" component={PressureDesignPilot} durationInFrames={1980} fps={30} width={1920} height={1080}/>);\n`,{flag:'wx'});
  const serveUrl=await bundle({entryPoint:native,publicDir:path.join(output,'public'),outDir:path.join(output,'native-bundle')});
  const composition=await selectComposition({serveUrl,id:'Pressure'});
  for(const frame of [120,360,600,870,1230,1530,1770]) await renderStill({serveUrl,composition,frame,output:path.join(output,`native-${frame}.png`),imageFormat:'png',scale:1});
  console.log('Seven native stills written. No full video rendered.');
}
