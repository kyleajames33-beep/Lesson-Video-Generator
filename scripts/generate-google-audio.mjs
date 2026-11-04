import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {decodePcm, pcmWav} from './lib/media-tools.mjs';
import {pronunciationText, mapWordTimings} from './lib/google-pronunciation.mjs';
import {alignmentToCaptions} from './lib/caption-timeline.mjs';

// Experimental sentence-based path: each sentence is generated and aligned independently.
// The scene cache prevents unchanged takes being regenerated.
const model='gemini-3.8-flash-tts', voice='voice_shdbjsxcrr0a';
const sha = x => createHash('sha256').update(x).digest('hex');
const [manifestPath, lessonPath, outputLesson] = process.argv.slice(2);
if (!manifestPath || !lessonPath || !outputLesson) throw Error('Usage: node scripts/generate-google-audio.mjs MANIFEST LESSON OUTPUT_LESSON');
if (fs.existsSync('.env.local')) process.loadEnvFile(path.resolve('.env.local'));
const key=process.env.GEMINI_API_KEY;
if (!key) throw Error('GEMINI_API_KEY is missing');
const manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));
const lesson=JSON.parse(fs.readFileSync(lessonPath,'utf8'));
if (!Array.isArray(manifest.scenes) || !Array.isArray(lesson.scenes)) throw Error('Invalid lesson or manifest');
if (path.resolve(lessonPath)===path.resolve(outputLesson)) throw Error('Output must not overwrite source lesson');
const python=path.resolve('work/brief124/venv/Scripts/python.exe');
if (!fs.existsSync(python)) throw Error('WhisperX environment missing');
const aligner=path.resolve('work/brief124/align-one.py');
let totalCost=0;
function applyTiming(scene, source, audio, alignment, seconds) {
  const fps=lesson.fps??30, frames=Math.ceil(seconds*fps);
  scene.voiceover={...scene.voiceover,text:source.text,audioFile:audio,startFrame:0,endFrame:frames};
  scene.captions=alignmentToCaptions(alignment);
  const hold=Math.round((scene.holdSeconds??0)*fps);
  if (scene.holdKind==='countdown') scene.responseHold={startFrame:frames,endFrame:frames+hold};
  scene.durationInFrames=frames+hold;
}
for (const scene of lesson.scenes) {
  const source=manifest.scenes.find(s=>s.id===scene.id); if (!source?.text?.trim()) continue;
  if (!source.audioFile?.endsWith('.wav')) throw Error(`WAV audioFile required: ${scene.id}`);
  let audio=source.audioFile, meta=audio.replace(/\.wav$/,'.generation.json'), alignmentPath=audio.replace(/\.wav$/,'.alignment.json');
  const textHash=sha(source.text), {spokenText}=pronunciationText(source.text,{math:!!manifest.mathPronunciation});
  if (fs.existsSync(audio) && fs.existsSync(meta)) {
    const previous=JSON.parse(fs.readFileSync(meta,'utf8'));
    if (previous.textSha256 && previous.textSha256!==textHash) {
      audio=audio.replace(/\.wav$/,`-${textHash.slice(0,12)}.wav`);
      meta=audio.replace(/\.wav$/,'.generation.json'); alignmentPath=audio.replace(/\.wav$/,'.alignment.json');
    }
  }
  const existing=fs.existsSync(audio);
  if (existing) {
    if (!fs.existsSync(meta)||!fs.existsSync(alignmentPath)) throw Error(`Preserving unverified existing take: ${scene.id}`);
    const previous=JSON.parse(fs.readFileSync(meta,'utf8'));
    if (previous.textSha256!==textHash || previous.modelId!==model || previous.voiceId!==voice) throw Error(`Existing scene provenance mismatch: ${scene.id}`);
    applyTiming(scene,source,audio,JSON.parse(fs.readFileSync(alignmentPath,'utf8')),decodePcm(audio).length/96000);
    console.log(`Reused ${scene.id}`); continue;
  }
  const displays=source.text.match(/[^.!?]+(?:[.!?]+|$)/gu)?.map(s=>s.trim()).filter(Boolean)??[];
  const spokenSentences=spokenText.match(/[^.!?]+(?:[.!?]+|$)/gu)?.map(s=>s.trim()).filter(Boolean)??[];
  if (!displays.length || displays.length!==spokenSentences.length) throw Error(`Sentence split mismatch ${scene.id}`);
  const staging=path.join('work','google-tts-cache',`${scene.id}-${textHash}`);fs.mkdirSync(staging,{recursive:true});
  const pcm=[], allWords=[]; let offset=0, inputTokens=0, outputTokens=0;
  for(let i=0;i<displays.length;i++) {
    const wav=path.join(staging,`${i}.wav`), sentMeta=path.join(staging,`${i}.json`), textPath=path.join(staging,`${i}.txt`), resultPath=path.join(staging,`${i}.alignment.json`);
    if(!fs.existsSync(wav)) {
      const request={model,input:[{type:'user_input',content:[{type:'text',text:spokenSentences[i]}]}],response_format:{type:'audio'},generation_config:{speech_config:[{voice}]}};
      let response;
      const maxAttempts=Math.max(1,Number(process.env.GOOGLE_TTS_MAX_ATTEMPTS??4));
      for (let attempt=0;attempt<maxAttempts;attempt++) {
        response=await fetch('https://generativelanguage.googleapis.com/v1beta/interactions',{method:'POST',headers:{'content-type':'application/json','x-goog-api-key':key},body:JSON.stringify(request),signal:AbortSignal.timeout(120000)});
        if(response.status!==429 || attempt===maxAttempts-1) break;
        const retry=Number(response.headers.get('retry-after'));
        const delay=Number.isFinite(retry)&&retry>0?Math.min(60000,retry*1000):30000*(attempt+1);
        console.log(`Rate limited on ${scene.id}; waiting ${Math.round(delay/1000)} seconds before retry.`);
        await new Promise(resolve=>setTimeout(resolve,delay));
      }
      if(!response.ok) {
        let detail='';
        try { const body=await response.json(); detail=String(body?.error?.message??'').split(key).join('[REDACTED]').slice(0,1200); } catch {}
        throw Error(`Google speech request failed for ${scene.id} sentence ${i}: HTTP ${response.status}${detail?`: ${detail}`:''}`);
      }
      const payload=await response.json(), result=(payload.steps??[]).flatMap(x=>x.content??[]).filter(x=>x.type==='audio').at(-1);
      if(!result?.data) throw Error(`No audio returned for ${scene.id} sentence ${i}`);
      fs.writeFileSync(wav,Buffer.from(result.data,'base64'),{flag:'wx'});
      fs.writeFileSync(sentMeta,JSON.stringify({model,voice,text:spokenSentences[i],usage:payload.usage??null}),{flag:'wx'});
    }
    if(!fs.existsSync(sentMeta)) throw Error(`Missing sentence metadata ${scene.id} ${i}`);
    const sent=JSON.parse(fs.readFileSync(sentMeta,'utf8'));
    if(sent.text!==spokenSentences[i]||sent.model!==model||sent.voice!==voice) throw Error(`Sentence cache mismatch ${scene.id} ${i}`);
    if(!sent.usage || !Number.isFinite(sent.usage.total_input_tokens) || !Number.isFinite(sent.usage.total_output_tokens)) throw Error(`Missing billed usage ${scene.id} ${i}`);
    inputTokens+=sent.usage.total_input_tokens; outputTokens+=sent.usage.total_output_tokens;
    if(!fs.existsSync(resultPath)) {
      fs.writeFileSync(textPath,spokenSentences[i]);
      const proc=spawnSync(python,[aligner,wav,textPath,resultPath],{windowsHide:true,encoding:'utf8'});
      if(proc.error||proc.status!==0) throw Error(`Alignment failed ${scene.id} sentence ${i}: ${proc.error?.message??proc.stderr.slice(-700)}`);
    }
    const result=JSON.parse(fs.readFileSync(resultPath,'utf8'));const words=result.segments.flatMap(x=>x.words??[]);
    mapWordTimings(displays[i],spokenSentences[i],words);
    const raw=decodePcm(wav); pcm.push(raw); allWords.push(...words.map(w=>({...w,start:w.start+offset,end:w.end+offset})));offset+=raw.length/96000;
  }
  const mapped=mapWordTimings(source.text,spokenText,allWords);
  const cost=inputTokens*.5/1e6+outputTokens*9/1e6;totalCost+=cost;
  const generation={modelId:model,voiceId:voice,textSha256:textHash,displayText:source.text,pronunciationText:spokenText,inputTokens,outputTokens,estimatedCostUsd:cost,pricing:'USD 0.50 per million input and USD 9 per million audio output tokens through 2026-12-31',generatedAt:new Date().toISOString(),sentenceCount:displays.length};
  fs.mkdirSync(path.dirname(audio),{recursive:true});
  fs.writeFileSync(audio,pcmWav(Buffer.concat(pcm)),{flag:'wx'});fs.writeFileSync(alignmentPath,JSON.stringify(mapped,null,2),{flag:'wx'});fs.writeFileSync(meta,JSON.stringify(generation,null,2),{flag:'wx'});
  applyTiming(scene,source,audio,mapped,offset);
  console.log(`Generated ${scene.id}: ${offset.toFixed(2)} seconds; estimated $${cost.toFixed(5)}`);
}
fs.mkdirSync(path.dirname(outputLesson),{recursive:true});fs.writeFileSync(outputLesson,JSON.stringify(lesson,null,2),{flag:'wx'});
console.log(`Estimated cost for newly generated scenes: $${totalCost.toFixed(5)}`);
