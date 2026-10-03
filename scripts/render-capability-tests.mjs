import {cpSync,mkdirSync,writeFileSync} from 'node:fs';
import path from 'node:path';
import {bundle} from '@remotion/bundler';
import {renderMedia,renderStill,selectComposition} from '@remotion/renderer';

const output=path.resolve('out/prototypes/capability-tests');
const publicDir=path.join(output,'public');
mkdirSync(path.join(publicDir,'assets/prototypes'),{recursive:true});
cpSync('public/fonts',path.join(publicDir,'fonts'),{recursive:true});
cpSync('public/assets/prototypes/lab-background-v1.png',path.join(publicDir,'assets/prototypes/lab-background-v1.png'));
const serveUrl=await bundle({entryPoint:path.resolve('src/prototypes/index.tsx'),publicDir,outDir:path.join(output,'bundle')});
const tests=[{id:'Native-DNA-test',file:'dna',label:'Native hand-drawn DNA replication'},
  {id:'Plain-diorama-test',file:'plain',label:'Existing molar-mass diorama'},
  {id:'Painted-diorama-test',file:'painted',label:'Same diorama with painted laboratory context'}];
for(const test of tests){
  const composition=await selectComposition({serveUrl,id:test.id});
  for(const seconds of [4,9,16])await renderStill({serveUrl,composition,frame:seconds*30,scale:0.5,imageFormat:'png',output:path.join(output,`${test.file}-${seconds}.png`)});
  console.log(`${test.file}: review frames ready.`);
  if(!process.argv.includes('--stills')){
    await renderMedia({serveUrl,composition,codec:'h264',outputLocation:path.join(output,`${test.file}.mp4`),scale:2/3,crf:18,concurrency:1,timeoutInMilliseconds:60000,overwrite:true});
    console.log(`${test.file}: 18-second 720p test complete.`);
  }
}
writeFileSync(path.join(output,'index.html'),`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Teaching animation capability tests</title>
<style>body{background:#f7f7f5;color:#1a1a1a;font:18px system-ui;margin:0}main{max-width:1100px;margin:auto;padding:30px 20px}h1{letter-spacing:-.04em}video{width:100%;display:block;background:#eee}.player.phone{max-width:390px;margin:auto}article{margin:30px 0}button{font:inherit;padding:10px;margin:5px;border:1px solid #ccc;border-radius:8px;background:white;cursor:pointer}a{color:#0d6b52}p{line-height:1.5}</style>
<main><h1>Actual mechanisms and dioramas</h1><p>Three 18-second silent tests. The DNA clip uses the existing native hand-drawn replication component. The two chemistry clips use the same existing molar-mass diorama with identical content and timing.</p><p><a href="../voice-comparison/">Voice comparison status</a> · <a href="PLAN.md">Plan and limitations</a></p>
${tests.map(t=>`<article><h2>${t.label}</h2><div class="player"><video playsinline preload="metadata" poster="${t.file}-16.png" src="${t.file}.mp4"></video></div><button class="play">Play / pause</button><button class="seek" data-at="4">Early · 4s</button><button class="seek" data-at="9">Build · 9s</button><button class="seek" data-at="16">Result · 16s</button><button class="phone">Phone-size test</button><a href="${t.file}.mp4" download>Download MP4</a></article>`).join('')}
<p>For DNA: can you identify the original and new strands, and see pairing happen behind the fork? This is a schematic; helicase is shown, but primers, polymerase, ligase and proofreading are omitted. For chemistry: does the painted context help orient you, or merely decorate the same explanation?</p></main>
<script>document.querySelectorAll('article').forEach(a=>{const v=a.querySelector('video');a.querySelector('.play').onclick=()=>v.paused?v.play():v.pause();a.querySelectorAll('.seek').forEach(b=>b.onclick=()=>{v.pause();v.currentTime=Number(b.dataset.at)});a.querySelector('.phone').onclick=()=>a.querySelector('.player').classList.toggle('phone')});</script></html>`);
cpSync('docs/capability-tests-plan.md',path.join(output,'PLAN.md'));
console.log('Review: http://127.0.0.1:8778/capability-tests/');
