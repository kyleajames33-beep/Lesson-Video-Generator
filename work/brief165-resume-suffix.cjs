const fs=require('fs'),path=require('path');
(async()=>{try{process.loadEnvFile('.env.local');const key=process.env.GEMINI_API_KEY;if(!key)throw Error('GEMINI_API_KEY missing');
const scene=JSON.parse(fs.readFileSync('docs/production/claude-pm/lessons/math-a12-d01/voice-manifest.json')).scenes.find(x=>x.id==='scene-14');
const dirs=fs.readdirSync('work/google-tts-cache').filter(x=>x.startsWith('scene-14-'));if(dirs.length!==1)throw Error('Ambiguous scene 14 cache');const dir=path.join('work/google-tts-cache',dirs[0]);
const sentences=scene.text.match(/[^.!?]+(?:[.!?]+|$)/gu).map(x=>x.trim()).filter(Boolean);let done=0;while(fs.existsSync(path.join(dir,`${done}.wav`))&&fs.existsSync(path.join(dir,`${done}.alignment.json`)))done++;
const remain=sentences.slice(done).join(' '), wav=path.join(dir,`remaining-from-${done}.wav`),meta=path.join(dir,`remaining-from-${done}.generation.json`);
if(!remain){console.log('All scene 14 sentences already cached.');return}if(fs.existsSync(wav)){console.log('Remaining scene 14 audio already saved.');return}
const model='gemini-3.8-flash-tts',voice='voice_shdbjsxcrr0a';const body={model,input:[{type:'user_input',content:[{type:'text',text:remain}]}],response_format:{type:'audio'},generation_config:{speech_config:[{voice}]}};
const res=await fetch('https://generativelanguage.googleapis.com/v1beta/interactions',{method:'POST',headers:{'content-type':'application/json','x-goog-api-key':key},body:JSON.stringify(body),signal:AbortSignal.timeout(120000)});
if(!res.ok){const err=await res.json().catch(()=>({}));console.log(`Google HTTP ${res.status}: ${String(err.error?.message||'request failed').split(key).join('[REDACTED]')}`);return}
const data=await res.json(),clip=(data.steps||[]).flatMap(x=>x.content||[]).filter(x=>x.type==='audio').at(-1);if(!clip?.data)throw Error('No audio returned');fs.writeFileSync(wav,Buffer.from(clip.data,'base64'),{flag:'wx'});fs.writeFileSync(meta,JSON.stringify({model,voice,firstSentence:done,text:remain,usage:data.usage},null,2),{flag:'wx'});console.log(`Saved remaining scene 14 audio as one request; ${sentences.length-done} sentences need alignment.`);
}catch(e){console.error('Voice request failed:',e.message);process.exitCode=1}})();
