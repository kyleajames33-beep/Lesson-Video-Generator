import {cpSync,mkdirSync,readFileSync,writeFileSync} from 'node:fs';
import path from 'node:path';
import {bundle} from '@remotion/bundler';
import {selectComposition,renderStill,renderMedia} from '@remotion/renderer';

const output=path.resolve('out/prototypes/molar-mass-full-review');
const publicDir=path.join(output,'public');
mkdirSync(publicDir,{recursive:true});
cpSync('public/fonts',path.join(publicDir,'fonts'),{recursive:true});
const draft=JSON.parse(readFileSync('src/prototypes/data/molar-mass-v2.json','utf8'));
if(JSON.stringify(draft).includes('\u2014'))throw new Error('Em dash in draft');
if(draft.scenes.some(s=>s.voiceover.audioFile||s.captions))throw new Error('Draft must not reuse stale audio or captions');
const serveUrl=await bundle({entryPoint:path.resolve('src/prototypes/index.tsx'),publicDir,outDir:path.join(output,'bundle')});
const tests=[{id:'Revision-mass',file:'mass',label:'Simple mass conversion',frames:[240,420]},
{id:'Revision-brackets',file:'brackets',label:'Corrected bracket calculation',frames:[140,300,480]},
{id:'Revision-chlorine',file:'chlorine',label:'Chlorine question with a thinking hold',frames:[150,225,500]}];
for(const t of tests){
  const only=process.argv.find(arg=>arg.startsWith('--only='))?.slice(7);
  if(only && only!==t.file)continue;
  const composition=await selectComposition({serveUrl,id:t.id});
  for(const frame of t.frames)await renderStill({serveUrl,composition,frame,scale:0.5,imageFormat:'png',output:path.join(output,`${t.file}-${frame}.png`)});
  if(!process.argv.includes('--stills'))await renderMedia({serveUrl,composition,codec:'h264',outputLocation:path.join(output,`${t.file}.mp4`),scale:2/3,crf:18,concurrency:1,muted:true,timeoutInMilliseconds:60000,overwrite:true});
  console.log(`${t.file} ready.`);
}
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const transcript=draft.scenes.map((s,i)=>`## ${i+1}. ${s.heading??s.id}\n\n${s.voiceover.text}`).join('\n\n');
writeFileSync(path.join(output,'SCRIPT.md'),`# Molar mass: unvoiced revision\n\nEstimated scene duration: ${draft.scenes.reduce((n,s)=>n+s.durationInFrames,0)/30} seconds. Final timings need recorded alignment.\nThe chlorine prompt and answer must be recorded separately, with a five-second\nsilent thinking gap between them.\n\n${transcript}\n`);
cpSync('src/prototypes/data/molar-mass-v2.json',path.join(output,'lesson-draft.json'));
cpSync('docs/molar-mass-full-review.md',path.join(output,'PLAN.md'));
writeFileSync(path.join(output,'index.html'),`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Molar mass full lesson review</title><style>body{background:#f7f7f5;color:#1a1a1a;font:18px system-ui;margin:0}main{max-width:1100px;margin:auto;padding:30px 20px}p{line-height:1.6}video{width:100%;display:block}.player.phone{max-width:390px;margin:auto}button{font:inherit;padding:10px;margin:5px;border:1px solid #ccc;border-radius:8px;background:white}a{color:#0d6b52}article{margin:40px 0}summary{cursor:pointer;font-size:24px;font-weight:650;padding:15px 0}details{border-top:1px solid #ccc}.note{background:#e8f5f0;padding:20px;border-radius:12px}</style><main><h1>Molar mass: full lesson review</h1><p class="note">A revised 11-scene script with three silent previews of the calculation beats. The estimated lesson is 5 minutes 29 seconds, before final voice timing. This page is a production draft, not a complete narrated export.</p><p>The original lesson remains intact. This revision corrects the mole definition, the bracket arithmetic and inconsistent spoken values. It adds a simple conversion before the compound example and removes repeated bridge narration.</p><p><a href="SCRIPT.md">Full narration draft</a> · <a href="PLAN.md">Science audit and scene plan</a> · <a href="lesson-draft.json">Unvoiced lesson draft</a> · <a href="revision.json">Revision record</a></p><p><a href="VOICE-REVIEW.md">Voice pronunciation checklist</a> · <a href="voice-manifest.json">Recording manifest</a> · <a href="voice-playback-plan.json">Quiz pause plan</a></p><h2>Calculation previews</h2>${tests.map(t=>`<article><h3>${t.label}</h3><div class="player"><video src="${t.file}.mp4" poster="${t.file}-${t.frames.at(-1)}.png" playsinline preload="metadata"></video></div><button class="play">Play / pause</button><button class="start">Start</button><button class="result">Result</button><button class="phone">Phone-size test</button><a href="${t.file}.mp4" download>Download MP4</a></article>`).join('')}<h2>Complete scene-by-scene script</h2>${draft.scenes.map((s,i)=>`<details><summary>${i+1}. ${escape(s.heading??draft.title)} (${s.durationInFrames/30}s estimated)</summary><p>${escape(s.voiceover.text)}</p>${s.id==='quick-check'?'<p><strong>Production instruction:</strong> split the prompt and solution into separate recordings. Insert five seconds of silence after the prompt; keep all solution graphics hidden until the solution starts.</p>':''}</details>`).join('')}<p>Next: voice comparison and selection, final audio and captions, cue alignment, complete lesson render and release review. The existing media preflight passes for the original lesson, but cannot establish scientific correctness.</p></main><script>document.querySelectorAll('article').forEach(a=>{const v=a.querySelector('video');a.querySelector('.play').onclick=()=>v.paused?v.play():v.pause();a.querySelector('.start').onclick=()=>{v.pause();v.currentTime=0};a.querySelector('.result').onclick=()=>{v.pause();v.currentTime=Math.max(0,v.duration-2)};a.querySelector('.phone').onclick=()=>a.querySelector('.player').classList.toggle('phone')});</script></html>`);
console.log('Review: http://127.0.0.1:8778/molar-mass-full-review/');
