import {copyFileSync,mkdirSync,readFileSync,readdirSync,statSync,writeFileSync} from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';

// Package downloaded auditions only. Never makes speech or network requests.
const downloads=process.argv[2];
if(!downloads)throw new Error('Pass the directory containing the two downloaded Simon v4 auditions.');
const sources=readdirSync(downloads).filter(n=>n.startsWith('ElevenLabs_2026-10-02')&&n.includes('Simon - Australian male')&&/_v4(?: \(\d+\))?\.mp3$/.test(n))
  .map(n=>path.join(downloads,n)).sort((a,b)=>statSync(a).mtimeMs-statSync(b).mtimeMs);
if(sources.length!==2)throw new Error(`Expected exactly two audition files, found ${sources.length}.`);
const output='out/prototypes/australian-voice-review';
mkdirSync(output,{recursive:true});
const lesson=JSON.parse(readFileSync('src/prototypes/data/molar-mass-v2.json','utf8'));
const text=lesson.scenes.find(s=>s.id==='mass-example').voiceover.text;
const files=sources.map((source,i)=>{
  const file=`simon-v4-take-${i+1}.mp3`;
  copyFileSync(source,path.join(output,file));
  return {file,downloadName:path.basename(source),sha256:createHash('sha256').update(readFileSync(source)).digest('hex')};
});
const metadata={date:'2026-10-02',status:'audition only; not approved for production',requiredAccent:'Australian',
  voiceName:'Simon - Australian male',voiceId:'cOEV2DrZBBGNLpE74kQu',modelId:'eleven_v4',
  settings:{stability:0.5,similarity:0.75,audioEffects:false,format:'MP3 44.1 kHz (128kbps)'},
  text,textSha256:createHash('sha256').update(text).digest('hex'),
  generation:'One Generate click in ElevenCreative produced two takes. Download order follows Generation 1 then Generation 2.',
  allowance:'UI showed 241.6k free credits before and 241.2k after. Rounded display, not exact billing data.',
  alignment:'Not exported. Production timing and captions must be rebuilt from final recordings.',files};
writeFileSync(path.join(output,'provenance.json'),JSON.stringify(metadata,null,2)+'\n');
writeFileSync(path.join(output,'index.html'),`<!doctype html><html lang="en-AU"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Australian voice audition</title><style>body{font:19px/1.5 system-ui;background:#faf7ee;color:#173b38;max-width:850px;margin:40px auto;padding:0 22px}section{background:white;padding:20px;margin:20px 0;border-radius:12px}audio{width:100%}small{display:block}</style><h1>Australian voice audition</h1><p>Simon, Eleven v4. Two takes from one generation using the corrected carbon example.</p><p>Listen for a natural Australian accent, clear teaching pace, and accurate numbers. In particular: two point zero zero, twelve point zero one, and twenty-four point zero.</p>${files.map((f,i)=>`<section><h2>Take ${i+1}</h2><audio controls preload="metadata" src="${f.file}"></audio><a href="${f.file}" download>Download MP3</a></section>`).join('')}<h2>Script</h2><p>${text}</p><small>Audition only. Voice and model are not approved for the full lesson. Raw downloads are preserved. No alignment has been exported. <a href="provenance.json">Generation details</a></small></html>`);
console.log(`Packaged ${files.length} Australian v4 takes in ${output}. No speech generated.`);
