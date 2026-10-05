import {copyFileSync,mkdirSync,readFileSync,readdirSync,statSync,writeFileSync} from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';

// Package the existing compound audition downloads. No generation requests.
const [downloads,prefix]=process.argv.slice(2);
if(!downloads||!prefix)throw new Error('Pass download directory and exact generation filename prefix.');
const selection=JSON.parse(readFileSync('src/prototypes/data/molar-mass-voice-selection.json','utf8'));
const lesson=JSON.parse(readFileSync('src/prototypes/data/molar-mass-v2.json','utf8'));
const scene=lesson.scenes.find(s=>s.id==='worked-example');
if(scene.voiceover.text.includes('\u2014'))throw new Error('Em dash in narration');
const sources=readdirSync(downloads).filter(n=>n.startsWith(prefix)&&n.endsWith('.mp3'))
  .map(n=>path.join(downloads,n)).sort((a,b)=>statSync(a).mtimeMs-statSync(b).mtimeMs);
if(sources.length!==2)throw new Error(`Expected two downloaded takes, found ${sources.length}.`);
const output='out/prototypes/australian-voice-review';
mkdirSync(output,{recursive:true});
const ffmpeg=path.resolve('node_modules/@remotion/compositor-win32-x64-msvc/ffmpeg.exe');
const files=sources.map((source,i)=>{
  const file=`simon-v4-compound-take-${i+1}.mp3`;
  copyFileSync(source,path.join(output,file));
  const decoded=spawnSync(ffmpeg,['-hide_banner','-i',path.join(output,file),'-f','null','-'],{encoding:'utf8',windowsHide:true});
  if(decoded.status!==0)throw new Error(`Decode failed: ${file}: ${decoded.stderr}`);
  const match=decoded.stderr.match(/Duration: (\d+):(\d+):(\d+\.\d+)/);
  if(!match)throw new Error(`Cannot read duration: ${file}`);
  const durationSeconds=Number(match[1])*3600+Number(match[2])*60+Number(match[3]);
  return {file,downloadName:path.basename(source),durationSeconds,sha256:createHash('sha256').update(readFileSync(source)).digest('hex')};
});
if(files[0].sha256===files[1].sha256)throw new Error('Duplicate takes');
const metadata={date:'2026-10-02',...selection,sceneId:scene.id,text:scene.voiceover.text,
  textSha256:createHash('sha256').update(scene.voiceover.text).digest('hex'),
  generation:'One Generate click produced two takes. Download order: Generation 1 then Generation 2.',
  allowance:'Rounded free allowance moved from 241k to 240.1k.',
  settings:{stability:0.5,similarity:0.75,audioEffects:false,format:'MP3 44.1 kHz (128kbps)'},
  status:'Both files decode. Spoken pronunciation, number accuracy and take selection await listening review.',
  alignment:'Not exported. Do not use provisional scene or caption timing for production.',files};
writeFileSync(path.join(output,'compound.json'),JSON.stringify(metadata,null,2)+'\n');
const fragment=`<!-- compound-start --><h2>Simon: compound pronunciation check</h2><p>The complete calcium dihydrogen phosphate example. Listen for the compound name, four hydrogens, two phosphorus atoms, eight oxygens, and the final result: two hundred thirty-four point zero four grams per mole.</p><p>The unrounded total should be two hundred thirty-four point zero four four. Take selection and pronunciation review are pending.</p>${files.map((f,i)=>`<section><h3>Compound take ${i+1}</h3><p>${f.durationSeconds.toFixed(1)} seconds</p><audio controls preload="metadata" src="${f.file}"></audio><a href="${f.file}" download>Download MP3</a></section>`).join('')}<details><summary>Exact compound script</summary><p>${scene.voiceover.text}</p></details><p><a href="compound.json">Compound generation details</a></p><!-- compound-end -->`;
const index=path.join(output,'index.html');
let html=readFileSync(index,'utf8').replace(/<!-- compound-start -->[\s\S]*?<!-- compound-end -->/,'');
html=html.replace('<h2>Short alternatives</h2>',fragment+'<h2>Short alternatives</h2>');
if(!html.includes('<!-- compound-start -->'))throw new Error('Review page insertion failed');
writeFileSync(index,html);
console.log(JSON.stringify({files,status:metadata.status},null,2));
