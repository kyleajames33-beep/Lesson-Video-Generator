import {copyFileSync,readFileSync,readdirSync,statSync,writeFileSync} from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';

// Package existing downloads. This script does not generate speech.
const downloads=process.argv[2];
if(!downloads)throw new Error('Pass the directory containing downloaded auditions.');
const output='out/prototypes/australian-voice-review';
const text='Molar mass is twelve point zero one grams per mole. The mole units cancel, leaving grams.';
const candidates=[{slug:'brad',name:'Brad - Australian',voiceId:'PjC87YIKtz6Y7JFMZ1hh'},
  {slug:'hannah',name:'Hannah - Natural Australian',voiceId:'M7ya1YbaeFaPXljg9BpK'}];
for(const voice of candidates){
  const sources=readdirSync(downloads).filter(n=>n.startsWith('ElevenLabs_2026-10-02')&&n.includes(voice.name)&&/_v4(?: \(\d+\))?\.mp3$/.test(n))
    .map(n=>path.join(downloads,n)).sort((a,b)=>statSync(a).mtimeMs-statSync(b).mtimeMs);
  if(sources.length!==2)throw new Error(`Expected two ${voice.name} downloads; found ${sources.length}.`);
  voice.files=sources.map((source,i)=>{
    const file=`${voice.slug}-v4-take-${i+1}.mp3`;
    copyFileSync(source,path.join(output,file));
    const result=spawnSync(path.resolve('node_modules/@remotion/compositor-win32-x64-msvc/ffmpeg.exe'),
      ['-hide_banner','-v','error','-i',path.join(output,file),'-f','null','-'],{encoding:'utf8',windowsHide:true});
    if(result.status!==0)throw new Error(`Audio decode failed: ${file}: ${result.stderr}`);
    return {file,downloadName:path.basename(source),sha256:createHash('sha256').update(readFileSync(source)).digest('hex')};
  });
  if(voice.files[0].sha256===voice.files[1].sha256)throw new Error(`Duplicate downloads for ${voice.name}.`);
}
const metadata={date:'2026-10-02',status:'audition only; awaiting listening choice',requiredAccent:'Australian',modelId:'eleven_v4',text,
  uiSettings:{stability:0.5,similarity:0.75,audioEffects:false,format:'MP3 44.1 kHz (128kbps)'},
  settingsCaveat:'The download filenames encode different voice preset values from the settings panel. Preserve both observations; do not treat this as a controlled model benchmark.',
  generation:'One request per voice. Each request returned two takes. 89 characters per request.',
  allowance:'Rounded account display moved from 241.2k to 241k free credits across the two requests.',voices:candidates};
writeFileSync(path.join(output,'alternatives.json'),JSON.stringify(metadata,null,2)+'\n');
const fragment=`<!-- alternatives-start --><h2>Short alternatives</h2><p>Brad and Hannah each read the same two sentences on v4. These are voice auditions, not a controlled model benchmark.</p><p>${text}</p>${candidates.map(v=>`<section><h3>${v.name}</h3>${v.files.map((f,i)=>`<p>Take ${i+1}</p><audio controls preload="metadata" src="${f.file}"></audio>`).join('')}</section>`).join('')}<p><a href="alternatives.json">Alternative voice details</a></p><!-- alternatives-end -->`;
const index=path.join(output,'index.html');
let html=readFileSync(index,'utf8').replace(/<!-- alternatives-start -->[\s\S]*?<!-- alternatives-end -->/,'');
html=html.replace('<h2>Script</h2>',fragment+'<h2>Simon script</h2>');
if(!html.includes('<!-- alternatives-start -->'))html=html.replace('<h2>Simon script</h2>',fragment+'<h2>Simon script</h2>');
writeFileSync(index,html);
console.log('Packaged and decoded four short Australian v4 audition clips. No speech generated.');
