// Isolated botanical mould design study. Build a Player page and optional native stills, never paid audio or a full export.
import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {build} from 'esbuild';
const revision = process.argv.find(arg => arg.startsWith('--revision='))?.slice(11);
if (revision && !/^v\d+$/.test(revision)) throw Error('Revision must use v2, v3 or another numbered version.');
const page = `fungi-design-pilot-2026-10-11${revision ? '-' + revision : ''}`;
const output = path.resolve('out/prototypes', page);
const entry = 'src/prototypes/FungiDesignPilot.tsx';
const asset = 'public/assets/biology/rhizopus-bread-mould-botanical-v1.png';
const germination = 'public/assets/biology/rhizopus-germination-botanical-v1.png';
const hash = file => createHash('sha256').update(fs.readFileSync(file)).digest('hex');
if (fs.existsSync(path.join(output, 'index.html'))) throw Error('Preserve the existing compiled pilot. Select a new output before rebuilding.');
fs.mkdirSync(path.join(output, 'public/assets/biology'), {recursive:true});
fs.cpSync('public/fonts', path.join(output, 'public/fonts'), {recursive:true});
fs.copyFileSync(asset, path.join(output, asset));
fs.copyFileSync(germination, path.join(output, germination));
const result = await build({entryPoints:[entry], outfile:path.join(output,'review.js'),bundle:true,format:'iife',platform:'browser',target:'chrome110',jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'},minify:true,metafile:true});
const html = `<!doctype html><html lang="en-AU"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Bread mould | Botanical teaching pilot</title><style>body{margin:0;background:#fafaf8;color:#202a23;font:18px/1.5 system-ui,sans-serif}main{max-width:1100px;margin:auto;padding:28px 24px}h1{font-size:34px;line-height:1.15}p{max-width:1000px}.controls{display:flex;flex-wrap:wrap;gap:10px;margin:18px 0}button{font:inherit;padding:9px 14px;background:white;color:#386348;border:1px solid #b9c5ba;border-radius:5px;cursor:pointer}@media(max-width:600px){main{padding:16px}h1{font-size:28px}}</style><div id="pilot-review-root"></div><script>window.remotion_staticBase="/${page}/public";</script><script src="review.js"></script></html>`;
fs.writeFileSync(path.join(output,'index.html'),html,{flag:'wx'});
fs.writeFileSync(path.join(output,'page-inputs.json'), JSON.stringify({scope:'Silent botanical direction pilot. Human taste review pending. No lesson source, audio or release evidence changed.',durationInFrames:2700,fps:30,assets:[{path:asset,sha256:hash(asset)},{path:germination,sha256:hash(germination)}],inputs:Object.keys(result.metafile.inputs).filter(p=>!p.startsWith('node_modules/')).map(p=>({path:p,sha256:hash(p)}))},null,2)+'\n',{flag:'wx'});
console.log(`http://127.0.0.1:8778/${page}/`);
if (process.argv.includes('--stills')) {
  const {bundle} = await import('@remotion/bundler');
  const {renderStill,selectComposition} = await import('@remotion/renderer');
  const native = path.join(output,'Native.tsx');
  fs.writeFileSync(native,`import React from 'react';import {Composition,registerRoot} from 'remotion';import {FungiDesignPilot} from '../../../src/prototypes/FungiDesignPilot';registerRoot(()=> <Composition id="Fungi" component={FungiDesignPilot} durationInFrames={2700} fps={30} width={1920} height={1080}/>);\n`,{flag:'wx'});
  const serveUrl = await bundle({entryPoint:native,publicDir:path.join(output,'public'),outDir:path.join(output,'native-bundle')});
  const composition = await selectComposition({serveUrl,id:'Fungi'});
  for (const frame of [120,450,780,1170,1530,1980,2370]) await renderStill({serveUrl,composition,frame,output:path.join(output,`native-${frame}.png`),imageFormat:'png',scale:1});
  console.log('Seven native 1920x1080 stills written. No full video rendered.');
}
