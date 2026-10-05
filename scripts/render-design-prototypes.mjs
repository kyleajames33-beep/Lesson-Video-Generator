import {cpSync, mkdirSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import {bundle} from '@remotion/bundler';
import {renderMedia, renderStill, selectComposition} from '@remotion/renderer';

const output = path.resolve('out/prototypes');
const publicDir = path.join(output, 'public');
mkdirSync(path.join(publicDir, 'assets/prototypes'), {recursive: true});
cpSync('public/fonts', path.join(publicDir, 'fonts'), {recursive: true});
cpSync('public/assets/prototypes/lab-background-v1.png', path.join(publicDir, 'assets/prototypes/lab-background-v1.png'));
const serveUrl = await bundle({entryPoint: path.resolve('src/prototypes/index.tsx'), publicDir, outDir: path.join(output, 'bundle')});
console.log('Prototype bundle ready.');
const directions = ['editorial', 'handdrawn', 'painted'];
const compositions = await Promise.all(directions.map(direction => selectComposition({serveUrl, id:`Direction-${direction}`})));
// Check content before committing time to video. --stills is useful for iteration.
for (const [i, direction] of directions.entries()) {
  for (const [phase, frame] of [['question',150],['divide',330],['answer',570]]) {
    await renderStill({serveUrl, composition:compositions[i], frame, output:path.join(output,`${direction}-${phase}.png`), imageFormat:'png', scale:0.5});
  }
  console.log(`${direction}: three review stills rendered.`);
}
if (!process.argv.includes('--stills')) {
  for (const [i, direction] of directions.entries()) {
    let nextProgress = 0;
    await renderMedia({serveUrl, composition:compositions[i], codec:'h264', outputLocation:path.join(output,`${direction}.mp4`),
      scale:2/3, crf:18, concurrency:2, timeoutInMilliseconds:60000, overwrite:true,
      onProgress:({progress})=>{const percent=Math.floor(progress*100);if(percent>=nextProgress){console.log(`${direction}: ${percent}%`);nextProgress=percent+25;}}});
    console.log(`${direction}: 24-second 720p prototype complete.`);
  }
}
writeFileSync(path.join(output,'index.html'), `<!doctype html>
<html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>HSC Science · Design directions</title>
<style>
*{box-sizing:border-box}body{margin:0;background:#f7f7f5;color:#1a1a1a;font:16px system-ui,sans-serif}main{max-width:1450px;margin:auto;padding:36px 24px}h1{font-size:clamp(28px,4vw,48px);letter-spacing:-.04em;margin:0 0 10px}p{line-height:1.5;max-width:900px;color:#5a5a5a}.toolbar{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin:24px 0}button,select{padding:10px 15px;border:1px solid #ccc;background:white;color:#1a1a1a;border-radius:8px;font:inherit;cursor:pointer}button.active{background:#0d6b52;color:white;border-color:#0d6b52}.players{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.players.focus{display:block}.players.focus article{display:none}.players.focus article.selected{display:block;max-width:1100px;margin:auto}.players.phone article.selected{max-width:390px}article{background:white;border:1px solid #deded8;border-radius:12px;overflow:hidden}article h2{margin:0;padding:14px 16px;font-size:18px}video{display:block;width:100%;aspect-ratio:16/9;background:#ecece8}.caption{padding:12px 16px;font-size:14px;color:#5a5a5a}input{flex:1;min-width:150px;accent-color:#0d6b52}.rubric{margin-top:30px;padding:20px;background:#fff;border:1px solid #deded8;border-radius:12px}.rubric li{margin:10px 0}a{color:#0d6b52}@media(max-width:750px){.players{grid-template-columns:1fr}main{padding:24px 16px}}
</style><main><h1>One explanation. Three visual directions.</h1><p>Each silent prototype is 24 seconds and uses the same sodium/chlorine example, quantities and teaching beats. Judge the explanation first, then the atmosphere. These are design studies, with no voice or music.</p>
<div class="toolbar"><button id="play">Play all</button><button id="restart">Restart</button><input id="time" aria-label="Playback position" type="range" min="0" max="24" step="0.1" value="0"><span id="clock">0.0s</span></div>
<div class="toolbar"><button class="beat" data-at="5">Question · 5s</button><button class="beat" data-at="11">Divide · 11s</button><button class="beat" data-at="19">Answer · 19s</button></div>
<div class="toolbar"><button class="mode active" data-mode="all">Compare all</button><button class="mode" data-mode="editorial">A · Editorial</button><button class="mode" data-mode="handdrawn">B · Hand-drawn</button><button class="mode" data-mode="painted">C · Painted</button><button id="phone">Phone-size test</button></div>
<div class="players" id="players">
${directions.map((d,i)=>`<article data-direction="${d}"><h2>${['A · Editorial diorama','B · Hand-drawn explanation','C · Painted laboratory'][i]}</h2><video src="${d}.mp4" poster="${d}-answer.png" preload="auto" playsinline muted controls></video><div class="caption">${['Stone plinths and restrained depth. Candidate for the default system.','Pencil construction and held motion. Candidate for selected explanatory moments.','Generated background around coded bars. Test whether atmosphere earns its space.'][i]} <a href="${d}.mp4" download>Download MP4</a></div></article>`).join('')}
</div><div class="rubric"><strong>Review in this order</strong><ol><li>Can you explain why sodium is limiting after watching once?</li><li>Are the equation, quantities and changing bars readable at phone size?</li><li>Does motion guide your eye to the calculation at the right moment?</li><li>What competes with the explanation or feels unnecessary?</li><li>Which direction would you comfortably watch for eight minutes?</li></ol><p>A visual preference alone does not establish better learning. The winner needs a narrated pilot and a second subject test.</p></div></main>
<script>
const videos=[...document.querySelectorAll('video')],play=document.getElementById('play'),slider=document.getElementById('time'),players=document.getElementById('players');let running=false;
async function ready(v){if(v.readyState>=3)return;await new Promise((resolve,reject)=>{const timer=setTimeout(()=>{cleanup();reject(new Error('Video not ready'))},10000);const cleanup=()=>{clearTimeout(timer);v.removeEventListener('canplay',done);v.removeEventListener('error',failed)};const done=()=>{cleanup();resolve()};const failed=()=>{cleanup();reject(new Error('Video could not load'))};v.addEventListener('canplay',done,{once:true});v.addEventListener('error',failed,{once:true})})}
async function toggle(){if(running){running=false;videos.forEach(v=>v.pause());play.textContent='Play all';return}play.disabled=true;play.textContent='Loading videos…';try{await Promise.all(videos.map(ready));const at=videos[0].currentTime>=24?0:videos[0].currentTime;videos.forEach(v=>{v.pause();v.currentTime=at});await Promise.all(videos.map(ready));await Promise.all(videos.map(v=>v.play()));running=true;play.textContent='Pause all'}catch(error){videos.forEach(v=>v.pause());running=false;play.textContent='Retry playback';console.error(error)}finally{play.disabled=false}}play.onclick=toggle;
document.getElementById('restart').onclick=()=>{videos.forEach(v=>{v.pause();v.currentTime=0});running=false;play.textContent='Play all'};
slider.oninput=()=>videos.forEach(v=>v.currentTime=Number(slider.value));
document.querySelectorAll('.beat').forEach(b=>b.onclick=()=>{videos.forEach(v=>{v.pause();v.currentTime=Number(b.dataset.at)});running=false;play.textContent='Play all';slider.value=b.dataset.at;document.getElementById('clock').textContent=Number(b.dataset.at).toFixed(1)+'s'});
videos[0].addEventListener('timeupdate',()=>{const at=videos[0].currentTime;slider.value=at;document.getElementById('clock').textContent=at.toFixed(1)+'s';if(running)videos.slice(1).forEach(v=>{if(Math.abs(v.currentTime-at)>0.2)v.currentTime=at})});videos[0].addEventListener('ended',()=>{running=false;videos.forEach(v=>v.pause());play.textContent='Play all'});
document.querySelectorAll('.mode').forEach(b=>b.onclick=()=>{document.querySelectorAll('.mode').forEach(x=>x.classList.toggle('active',x===b));players.classList.toggle('focus',b.dataset.mode!=='all');document.querySelectorAll('article').forEach(a=>a.classList.toggle('selected',a.dataset.direction===b.dataset.mode))});
document.getElementById('phone').onclick=()=>{if(!players.classList.contains('focus'))document.querySelector('[data-mode="editorial"]').click();players.classList.toggle('phone')};
</script></html>`);
console.log(`Comparison page: ${path.join(output,'index.html')}`);
