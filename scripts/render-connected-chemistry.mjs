import {cpSync,mkdirSync,writeFileSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import path from 'node:path';
import {bundle} from '@remotion/bundler';
import {renderMedia,renderStill,selectComposition} from '@remotion/renderer';

const output=path.resolve('out/prototypes/connected-chemistry');
const publicDir=path.join(output,'public');
mkdirSync(path.join(publicDir,'assets/prototypes'),{recursive:true});
cpSync('public/fonts',path.join(publicDir,'fonts'),{recursive:true});
cpSync('public/assets/prototypes/lab-background-v1.png',path.join(publicDir,'assets/prototypes/lab-background-v1.png'));
const serveUrl=await bundle({entryPoint:path.resolve('src/prototypes/index.tsx'),publicDir,outDir:path.join(output,'bundle')});
const composition=await selectComposition({serveUrl,id:'Connected-chemistry'});
for(const [name,seconds] of [['context',16],['calculation',24],['cancel',26.7],['result',30],['question',37],['answer',41]]){
  await renderStill({serveUrl,composition,frame:Math.round(seconds*30),scale:0.5,imageFormat:'png',output:path.join(output,`${name}.png`)});
}
if(!process.argv.includes('--stills')){
  const segments=[];
  for(let first=0;first<composition.durationInFrames;first+=540){
    const last=Math.min(first+539,composition.durationInFrames-1);
    const file=path.join(output,`section-${segments.length}.mp4`);
    await renderMedia({serveUrl,composition,codec:'h264',outputLocation:file,scale:2/3,crf:18,concurrency:1,timeoutInMilliseconds:60000,overwrite:true,muted:true,frameRange:[first,last]});
    segments.push({file,seconds:(last-first+1)/30});
    console.log(`Section ${segments.length} complete.`);
  }
  const list=path.join(output,'sections.ffconcat');
  writeFileSync(list,'ffconcat version 1.0\n'+segments.map(s=>`file '${s.file.replaceAll('\\','/')}'\nduration ${s.seconds}`).join('\n')+'\n');
  const result=spawnSync(path.resolve('node_modules/@remotion/compositor-win32-x64-msvc/ffmpeg.exe'),['-hide_banner','-y','-f','concat','-safe','0','-i',list,'-an','-c:v','copy',path.join(output,'preview.mp4')],{encoding:'utf8',windowsHide:true});
  if(result.status!==0)throw new Error(result.stderr);
}
writeFileSync(path.join(output,'index.html'),`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Connected chemistry visual preview</title><style>body{background:#f7f7f5;color:#1a1a1a;font:18px system-ui;margin:0}main{max-width:1100px;margin:auto;padding:30px 20px}p{line-height:1.5}video{width:100%;display:block}.phone{max-width:390px;margin:auto}button{font:inherit;padding:10px;margin:5px;border:1px solid #ccc;border-radius:8px;background:white}a{color:#0d6b52}</style><main><h1>Context, calculation, recall</h1><p>A 42-second silent visual preview. Existing painted artwork and the existing molar-mass diorama lead into a precise calculation and a five-second thinking hold. Voice selection is deferred.</p><div id="player"><video playsinline preload="metadata" poster="context.png" src="preview.mp4"></video></div><button id="play">Play / pause</button><button data-at="0">Diorama</button><button data-at="18">Calculation</button><button data-at="26.7">Cancel units</button><button data-at="34">Think</button><button data-at="39.5">Answer</button><button id="phone">Phone-size test</button><p><a href="preview.mp4" download>Download MP4</a> · <a href="PLAN.md">Plan</a> · <a href="../molar-mass-pilot-v2/">Original narrated pilot with larger definitions</a> · <a href="../capability-tests/">Separate mechanism comparisons</a></p><p>The heaps represent one mole schematically. Carbon values use the rounded molar mass 12.01 g mol⁻¹. The example gives 24.02 g before rounding and 24.0 g to three significant figures. Final narration must determine the production reveal timing.</p></main><script>const v=document.querySelector('video');document.getElementById('play').onclick=()=>v.paused?v.play():v.pause();document.querySelectorAll('[data-at]').forEach(b=>b.onclick=()=>{v.pause();v.currentTime=Number(b.dataset.at)});document.getElementById('phone').onclick=()=>document.getElementById('player').classList.toggle('phone');</script></html>`);
cpSync('docs/connected-chemistry-plan.md',path.join(output,'PLAN.md'));
console.log('Review: http://127.0.0.1:8778/connected-chemistry/');
