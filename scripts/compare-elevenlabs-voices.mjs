import {cpSync,existsSync,mkdirSync,readFileSync,writeFileSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {buildSpeechRequest,validateSpeechPayload} from './elevenlabs-request.mjs';

const output=path.resolve('out/prototypes/voice-comparison');
mkdirSync(output,{recursive:true});
const lesson=JSON.parse(readFileSync('src/data/chemistry-y11-m2-l2-molar-mass.json','utf8'));
const scene=lesson.scenes.find(s=>s.id==='formula');
const text=scene.voiceover.text;
if(text.includes('\u2014'))throw new Error('Rewrite em dashes before voice generation.');
const textHash=createHash('sha256').update(text).digest('hex');
if(!scene.voiceover.audioFile.endsWith(`.${textHash.slice(0,12)}.mp3`))throw new Error('Baseline narration does not match the current script.');
const baselineAlignment=JSON.parse(readFileSync(scene.voiceover.audioFile.replace('.mp3','.alignment.json'),'utf8'));
if(baselineAlignment.characters.join('')!==text)throw new Error('Baseline alignment text does not match the script.');
const models=['eleven_flash_v2_5','eleven_multilingual_v2','eleven_v3','eleven_v4'];
const voiceId=process.env.ELEVENLABS_VOICE_ID;
const apiKey=process.env.ELEVENLABS_API_KEY;
const prepare=process.argv.includes('--prepare');
const ffmpeg=path.resolve('node_modules/@remotion/compositor-win32-x64-msvc/ffmpeg.exe');
const run=args=>{
  const result=spawnSync(ffmpeg,args,{encoding:'utf8',windowsHide:true});
  if(result.error||result.status!==0)throw new Error(result.error?.message??result.stderr);
  return result.stderr;
};
const measure=file=>JSON.parse(run(['-hide_banner','-i',file,'-vn','-af','loudnorm=I=-18:TP=-2:LRA=7:print_format=json','-f','null','NUL']).match(/\{\s*"input_i"[\s\S]*?\}/)?.[0]??'null');
const normalize=(input,destination)=>{
  const before=measure(input);
  if(!before||!Number.isFinite(Number(before.input_i)))throw new Error('Voice sample is silent or unmeasurable.');
  const filter=`loudnorm=I=-18:TP=-2:LRA=7:measured_I=${before.input_i}:measured_TP=${before.input_tp}:measured_LRA=${before.input_lra}:measured_thresh=${before.input_thresh}:offset=${before.target_offset}:linear=true`;
  run(['-hide_banner','-y','-i',input,'-af',filter,'-c:a','pcm_s16le','-ar','48000',destination]);
  return {before,after:measure(destination)};
};
cpSync(scene.voiceover.audioFile,path.join(output,'baseline-original.mp3'));
const baselineLevels=normalize(scene.voiceover.audioFile,path.join(output,'sample-a.wav'));
const samples=[{label:'A',status:'ready',file:'sample-a.wav',modelId:'unknown legacy recording',voiceId:null,textHash,levels:baselineLevels}];
writeFileSync(path.join(output,'transcript.txt'),text+'\n');
let availableModels;
let accessError;
if(!prepare && apiKey && voiceId){
  try{
    const response=await fetch('https://api.elevenlabs.io/v1/models',{headers:{'xi-api-key':apiKey},signal:AbortSignal.timeout(30000)});
    if(!response.ok)throw new Error(`Models API returned HTTP ${response.status}`);
    availableModels=new Set((await response.json()).filter(m=>m.can_do_text_to_speech).map(m=>m.model_id));
  }catch(error){accessError=error.message;}
}
for(const [index,modelId] of models.entries()){
  const label=String.fromCharCode(66+index);
  const raw=path.join(output,`${modelId}.mp3`);
  const metaFile=raw.replace('.mp3','.generation.json');
  const request=buildSpeechRequest({text,voiceId:voiceId??'not-configured',modelId});
  const sample={label,modelId,voiceId:voiceId??null,textHash,status:'pending',requestSettings:request.body.voice_settings??'provider defaults'};
  let cached=false;
  if(existsSync(raw)&&existsSync(metaFile)){
    const meta=JSON.parse(readFileSync(metaFile,'utf8'));
    cached=meta.textHash===textHash && meta.voiceId===voiceId && meta.modelId===modelId && JSON.stringify(meta.request)===JSON.stringify(request.body);
  }
  if(!cached && !prepare && apiKey && voiceId && !accessError){
    if(!availableModels.has(modelId)){sample.reason='This model is not listed as available by the API.';}
    else try{
      console.log(`Generating ${modelId}: one short sample.`);
      const response=await fetch(request.endpoint,{method:'POST',headers:{'Content-Type':'application/json','xi-api-key':apiKey},body:JSON.stringify(request.body),signal:AbortSignal.timeout(120000)});
      if(!response.ok)throw new Error(`Speech API returned HTTP ${response.status}`);
      const payload=await response.json();
      const alignment=validateSpeechPayload(payload);
      writeFileSync(raw,Buffer.from(payload.audio_base64,'base64'));
      writeFileSync(raw.replace('.mp3','.alignment.json'),JSON.stringify(alignment,null,2)+'\n');
      writeFileSync(metaFile,JSON.stringify({modelId,voiceId,textHash,request:request.body,generatedAt:new Date().toISOString(),requestId:response.headers.get('request-id')},null,2)+'\n');
      cached=true;
    }catch(error){sample.reason=error.message;}
  }
  if(cached){sample.file=`sample-${label.toLowerCase()}.wav`;sample.levels=normalize(raw,path.join(output,sample.file));sample.status='ready';}
  else sample.reason??=accessError??(!apiKey||!voiceId?'Local ElevenLabs credentials are missing.':'Prepared only. Generation has not been run.');
  samples.push(sample);
}
const report={scriptSource:'Chemistry Y11 M2 L2, formula',text,textHash,configuredVoiceId:voiceId??null,generatedAt:new Date().toISOString(),samples};
writeFileSync(path.join(output,'comparison.json'),JSON.stringify(report,null,2)+'\n');
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
writeFileSync(path.join(output,'index.html'),`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>ElevenLabs voice comparison</title><style>body{background:#f7f7f5;color:#1a1a1a;font:18px system-ui;margin:0}main{max-width:950px;margin:auto;padding:32px 20px}p{line-height:1.5}article{padding:20px;border:1px solid #ccc;border-radius:12px;background:white;margin:20px 0}audio{width:100%}a{color:#0d6b52}details{margin:18px 0}.pending{color:#795714}</style><main><h1>Same script. Voice quality comparison.</h1><p>${samples.filter(s=>s.status==='ready').length} of 5 samples ready. A is the existing recording. The other four are new ElevenLabs model candidates, using one configured voice ID.</p><p>Rate technical pronunciation, clarity, calm delivery and pacing before revealing model names. Review copies are level-normalized; raw recordings remain preserved. The old recording's model and voice are unknown, so it is a practical baseline rather than a controlled model test.</p>${samples.map(s=>`<article><h2>Sample ${s.label}</h2>${s.status==='ready'?`<audio controls preload="metadata" src="${s.file}"></audio>`:`<p class="pending">Pending: ${escape(s.reason)}</p>`}<details><summary>Reveal source</summary><p>${escape(s.modelId)}</p></details></article>`).join('')}<details><summary>Read the exact script</summary><p>${escape(text)}</p></details><p><a href="comparison.json">Settings and measurements</a> · <a href="../capability-tests/">Animation tests</a></p></main></html>`);
console.log(`Voice comparison: ${samples.filter(s=>s.status==='ready').length}/5 ready. http://127.0.0.1:8778/voice-comparison/`);
if(!prepare && samples.some(s=>s.status!=='ready'))process.exitCode=1;
