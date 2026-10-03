import {cpSync, mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {bundle} from '@remotion/bundler';
import {selectComposition, renderStill, renderMedia} from '@remotion/renderer';
import {normalizePilotAudio} from './normalize-pilot-audio.mjs';
import {spawnSync} from 'node:child_process';

const revision = process.argv.includes('--v2');
const output = path.resolve(`out/prototypes/molar-mass-pilot${revision?'-v2':''}`);
const publicDir = path.join(output,'public');
const lesson = JSON.parse(readFileSync('src/data/chemistry-y11-m2-l2-molar-mass.json','utf8'));
const ids = ['marginalia-molar-mass','lab-footage','formula'];
const scenes = ids.map(id=>lesson.scenes.find(s=>s.id===id));
mkdirSync(publicDir,{recursive:true});
cpSync('public/fonts',path.join(publicDir,'fonts'),{recursive:true});
const artDir = 'assets/hscscience/generated/lesson-2-molar-mass';
mkdirSync(path.join(publicDir,artDir),{recursive:true});
for (const file of ['marginalia-bridge-particles-grams.png','lab-footage-balance-beaker.png']) {
  cpSync(path.join('public',artDir,file),path.join(publicDir,artDir,file));
}
let offset = 0;
const subtitles = [];
const report = [];
const timestamp = milliseconds => {
  const ms = Math.round(milliseconds);
  return `${String(Math.floor(ms/3600000)).padStart(2,'0')}:${String(Math.floor(ms/60000)%60).padStart(2,'0')}:${String(Math.floor(ms/1000)%60).padStart(2,'0')}.${String(ms%1000).padStart(3,'0')}`;
};
for (const scene of scenes) {
  if (JSON.stringify(scene).includes('\u2014')) throw new Error(`Em dash in selected scene: ${scene.id}`);
  const hash = createHash('sha256').update(scene.voiceover.text).digest('hex').slice(0,12);
  if (!scene.voiceover.audioFile.endsWith(`.${hash}.mp3`)) throw new Error(`Stale narration: ${scene.id}`);
  const alignment = JSON.parse(readFileSync(scene.voiceover.audioFile.replace('.mp3','.alignment.json'),'utf8'));
  if (alignment.characters.join('') !== scene.voiceover.text) throw new Error(`Alignment text differs: ${scene.id}`);
  if (alignment.character_end_times_seconds.at(-1)>scene.durationInFrames/30) throw new Error(`Clipped narration: ${scene.id}`);
  const relativeAudio = scene.voiceover.audioFile.replace(/^public\//,'');
  mkdirSync(path.dirname(path.join(publicDir,relativeAudio)),{recursive:true});
  cpSync(scene.voiceover.audioFile,path.join(publicDir,relativeAudio));
  let group=[];
  const flush = () => {
    if(!group.length)return;
    subtitles.push(`${timestamp(offset+group[0].startMs)} --> ${timestamp(offset+group.at(-1).endMs)}\n${group.map(c=>c.text).join('').trim()}`);
    group=[];
  };
  for(const word of scene.captions){
    if(group.length && (group.map(c=>c.text).join('').length+word.text.length>64 || word.endMs-group[0].startMs>4500))flush();
    group.push(word);
    if(/[.!?]$/.test(word.text.trim()))flush();
  }
  flush();
  report.push({sceneId:scene.id,fromSeconds:offset/1000,durationSeconds:scene.durationInFrames/30,narrationSeconds:alignment.character_end_times_seconds.at(-1),textHash:hash,audioFile:scene.voiceover.audioFile});
  offset += scene.durationInFrames/30*1000;
}
writeFileSync(path.join(output,'captions.vtt'),`WEBVTT\n\n${subtitles.join('\n\n')}\n`);
writeFileSync(path.join(output,'provenance.json'),JSON.stringify({source:'src/data/chemistry-y11-m2-l2-molar-mass.json',sceneOrder:ids,durationSeconds:offset/1000,newVoiceGenerated:false,scenes:report},null,2)+'\n');
const serveUrl = await bundle({entryPoint:path.resolve('src/prototypes/index.tsx'),publicDir,outDir:path.join(output,'bundle')});
const composition = await selectComposition({serveUrl,id:'MolarMass-mixed-pilot'});
for(const [name,seconds] of [['bridge',15],['balance',34],['formula',60],['cancel',64.8],['result',68]]){
  await renderStill({serveUrl,composition,frame:Math.round(seconds*30),scale:0.5,imageFormat:'png',output:path.join(output,`${name}.png`)});
}
console.log('Five pilot review frames ready.');
if(!process.argv.includes('--stills')){
  // Short frame ranges avoid the long-render font stall seen on this machine.
  // Decode AAC and trim each segment to its frame duration before joining,
  // so per-file encoder padding cannot accumulate at the boundaries.
  const segments=[];
  for(let first=0; first<composition.durationInFrames; first+=600){
    const last=Math.min(first+599,composition.durationInFrames-1);
    const file=path.join(output,`segment-${segments.length}.mp4`);
    // V2 changes only the formula, which begins at frame 1273.
    if(revision && first<1200)cpSync(path.resolve(`out/prototypes/molar-mass-pilot/segment-${segments.length}.mp4`),file);
    else if(!process.argv.includes('--reuse-sections'))await renderMedia({serveUrl,composition,codec:'h264',outputLocation:file,scale:2/3,crf:18,concurrency:1,timeoutInMilliseconds:60000,overwrite:true,frameRange:[first,last]});
    segments.push({file,seconds:(last-first+1)/composition.fps});
    console.log(`Pilot section ${segments.length} complete (${first} to ${last}).`);
  }
  const runFFmpeg=args=>{
    const result=spawnSync(path.resolve('node_modules/@remotion/compositor-win32-x64-msvc/ffmpeg.exe'),['-hide_banner','-y',...args],{encoding:'utf8',windowsHide:true});
    if(result.error||result.status!==0)throw new Error(result.error?.message ?? result.stderr);
  };
  // The bundled ffmpeg omits the video setpts filter. Copy the video through
  // concat's explicit durations; join decoded audio separately at exact ends.
  const list=path.join(output,'sections.ffconcat');
  writeFileSync(list,'ffconcat version 1.0\n'+segments.map(s=>`file '${s.file.replaceAll('\\','/')}'\nduration ${s.seconds}`).join('\n')+'\n');
  runFFmpeg(['-f','concat','-safe','0','-i',list,'-an','-c:v','copy',path.join(output,'pilot-video.mp4')]);
  const filters=segments.map((s,i)=>`[${i}:a]atrim=duration=${s.seconds},asetpts=PTS-STARTPTS[a${i}]`);
  filters.push(segments.map((_,i)=>`[a${i}]`).join('')+`concat=n=${segments.length}:v=0:a=1[a]`);
  runFFmpeg([...segments.flatMap(s=>['-i',s.file]),'-filter_complex',filters.join(';'),'-map','[a]','-c:a','pcm_s16le','-ar','48000',path.join(output,'pilot-audio.wav')]);
  runFFmpeg(['-i',path.join(output,'pilot-video.mp4'),'-i',path.join(output,'pilot-audio.wav'),'-map','0:v','-map','1:a','-c:v','copy','-c:a','aac','-ar','48000',path.join(output,'pilot-raw.mp4')]);
  normalizePilotAudio(path.join(output,'pilot-raw.mp4'),path.join(output,'pilot.mp4'));
}
writeFileSync(path.join(output,'index.html'),`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Molar mass: narrated mixed-style pilot</title>
<style>body{background:#f7f7f5;color:#1a1a1a;font:18px system-ui;margin:0}main{max-width:1100px;margin:auto;padding:32px 20px}h1{letter-spacing:-.04em}p{line-height:1.5}video{width:100%;display:block;background:#eee}#player.phone{max-width:390px;margin:auto}button{background:white;border:1px solid #ccc;border-radius:8px;padding:12px;margin:6px 6px 6px 0;font:inherit;cursor:pointer}a{color:#0d6b52}.toolbar{margin:20px 0}</style>
<main><h1>Molar mass: one connected explanation</h1><p>A 73-second pilot using existing artwork and recorded narration. Hand-drawn bridge, lab context, then coded unit cancellation. Captions are available in the player.</p><div id="player"><video controls playsinline preload="metadata" poster="bridge.png"><source src="pilot.mp4" type="video/mp4"><track kind="captions" label="English" srclang="en" src="captions.vtt"></video></div>
<div class="toolbar"><button id="play">Play / pause</button><button id="clear">Hide / show player controls</button><button data-at="0">Bridge</button><button data-at="20.433333">Balance</button><button data-at="42.433333">Formula</button><button data-at="61.1">Units</button><button data-at="64.1">Cancellation</button><button id="phone">Phone-size test</button></div>
<p>Review whether the graphics explain the narration, whether the cancellation is readable, and whether the style changes feel coherent. This is a production test, not a release-ready lesson.</p><p><a href="pilot.mp4" download>Download MP4</a> · <a href="captions.vtt" download>Captions</a> · <a href="provenance.json">Source record</a> · <a href="PLAN.md">Scene plan</a></p></main>
<script>const video=document.querySelector('video');document.getElementById('play').onclick=()=>video.paused?video.play():video.pause();document.getElementById('clear').onclick=()=>video.controls=!video.controls;document.querySelectorAll('[data-at]').forEach(button=>button.onclick=()=>{video.pause();video.currentTime=Number(button.dataset.at)});document.getElementById('phone').onclick=()=>document.getElementById('player').classList.toggle('phone');</script></html>`);
cpSync('docs/molar-mass-pilot-plan.md',path.join(output,'PLAN.md'));
console.log(`Pilot review: ${path.join(output,'index.html')}`);
