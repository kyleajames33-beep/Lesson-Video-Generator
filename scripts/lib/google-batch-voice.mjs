import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {decodePcm,pcmWav} from './media-tools.mjs';
import {pronunciationText,mapWordTimings} from './google-pronunciation.mjs';
import {compareGoogleWords,planGoogleBatches,checkGoogleRunOn,googleSceneHasLongPause} from './google-batch-checks.mjs';
import {googleQuotaDay,requestsInGoogleQuotaDay} from './google-request-budget.mjs';
import {googleTimeoutAction,googleTimeoutRequestKey,googleTimeoutCount} from './google-timeout-policy.mjs';

const ledgerPath='work/google-tts-requests.jsonl';
const statusPath='docs/production/claude-pm/status.md';
const model='gemini-3.8-flash-tts',voice='voice_shdbjsxcrr0a';
const python='work/brief124/venv/Scripts/python.exe';
const read=file=>JSON.parse(fs.readFileSync(file,'utf8').replace(/^\uFEFF/,''));
const write=(file,data)=>fs.writeFileSync(file,JSON.stringify(data,null,2)+'\n');
const sha=text=>createHash('sha256').update(text).digest('hex');
const cacheDir=scene=>'work/google-tts-cache/'+scene.id+'-'+sha(scene.text);
const note=message=>fs.appendFileSync(statusPath,'\n'+message+'\n');

function runPython(script,args,log) {
  const p=spawnSync(python,[script,...args],{encoding:'utf8',windowsHide:true});
  fs.writeFileSync(log,(p.stdout??'')+(p.stderr??''));
  if(p.error||p.status!==0)throw Error('Local audio check failed: '+log);
}

function align(audio,spoken,stem){
  fs.writeFileSync(stem+'.txt',spoken);
  runPython('scripts/align-google-scene.py',[audio,stem+'.txt',stem+'.json'],stem+'.log');
  return read(stem+'.json');
}

function rms(pcm,first,last){
  let sum=0;
  for(let i=first;i<last;i++)sum+=(pcm.readInt16LE(i*2)/32768)**2;
  return Math.sqrt(sum/(last-first));
}

function speechEdges(pcm,words){
  const samples=pcm.length/2, seconds=samples/48000;
  const lead=words[0].start, tail=seconds-words.at(-1).end;
  const edges=[rms(pcm,0,960),rms(pcm,samples-960,samples)];
  return {lead,tail,edges,pass:lead>=.1&&tail>=.1&&edges.every(x=>x<=.005)};
}

export function cutGoogleBatch(pcm,guide,spoken){
  const samples=pcm.length/2,words=guide.segments.flatMap(s=>s.words);
  const cuts=[0];
  let index=0;
  for (const text of spoken.slice(0,-1)){
    index+=text.trim().split(/\s+/).length;
    const left=words[index-1].end,right=words[index].start;
    let best=null;
    for(let t=left+.1;t<=right-.1;t+=.01){
      const mid=Math.round(t*48000);
      if(mid<4800||mid>samples-4800)continue;
      const levels=Array.from({length:10},(_,i)=>rms(pcm,mid-4800+i*960,mid-3840+i*960));
      if(levels.some(x=>x>.005))continue;
      const score=Math.abs(t-(left+right)/2);
      if(best===null||score<best.score)best={mid,score};
    }
    if(best===null)throw Error('No measured 200 ms quiet gap at scene boundary '+index);
    cuts.push(best.mid*2);
  }
  cuts.push(pcm.length);
  return spoken.map((_,i)=>pcm.subarray(cuts[i],cuts[i+1]));
}

function designCues(manifest,lesson) {
  assert.equal(sha(fs.readFileSync(manifest.source)),(process.env.GOOGLE_TTS_VERIFIED_SOURCE_SHA256??manifest.sourceSha256),'Design changed before recording');
  const raw=fs.readFileSync(manifest.source,'utf8');
  const sections=[...raw.matchAll(/^### (?:\d+[a-z]?)\. [^\r\n]+\r?\n([\s\S]*?)(?=^### |^## |$(?![\s\S]))/gm)]
    .map(m=>m[1].split(/\r?\n/).filter(x=>x.startsWith('> ')).map(x=>x.slice(2).trim()).join(' ')).filter(Boolean);
  assert.equal(sections.length,lesson.scenes.length,'Scene cue sources do not match');
  return new Map(lesson.scenes.map((s,i)=>{
    assert.equal(sections[i].replaceAll('**',''),s.voiceover.text,'Narration source mismatch: '+s.id);
    return [s.id,[...sections[i].matchAll(/\*\*([^*]+)\*\*/g)].map(m=>m[1])];
  }));
}

export async function prepareGoogleBatches({manifest,lesson,key,needed,dryRun=false}){
  const missing=new Set(needed);
  const selected=lesson.scenes.map(s=>manifest.scenes.find(x=>x.id===s.id)).filter(Boolean);
  for(const scene of selected)assert.equal(scene.text,lesson.scenes.find(s=>s.id===scene.id).voiceover.text,'Manifest narration mismatch: '+scene.id);
  if(selected.some(s=>s.text.includes('\u2014')))throw Error('Em dash in narration');
  const cues=designCues(manifest,lesson);
  const day=googleQuotaDay();
  const stamp=new Date().toISOString().replace(/[:.]/g,'-');
  const runDir='work/google-batch-voice/'+lesson.id+'/'+stamp;
  fs.mkdirSync(runDir,{recursive:true});
  const summary={lesson:lesson.id,quotaDay:day,ledgerStart:new Date().toISOString(),attempts:[],pilot:[],checks:[],fallbacks:[],reviews:[],assessedScenes:0};
  const snapshot=()=>write(runDir+'/report.json',summary);
  const used=()=>fs.existsSync(ledgerPath)?requestsInGoogleQuotaDay(fs.readFileSync(ledgerPath,'utf8').trim().split('\n').filter(Boolean).map(JSON.parse)).length:0;

  const recordReview=(result,file)=>{
    if(!result.review)return;
    summary.reviews.push({scene:result.scene,file,mismatches:result.comparison.mismatches});
  };

  const spoken=scene=>pronunciationText(scene.text,{math:!!manifest.mathPronunciation}).spokenText;
  const accept=(scene,pcm,aligned,batch,check,charge={})=>{
    const dir=cacheDir(scene);
    if(fs.existsSync(dir))throw Error('Existing cache folder requires inspection: '+dir);
    const staging=dir+'.batch-'+stamp;
    fs.mkdirSync(staging,{recursive:true});
    fs.writeFileSync(staging+'/whole-scene.wav',pcmWav(pcm));
    write(staging+'/whole-scene.alignment.json',aligned);
    write(staging+'/whole-scene.generation.json',{model,voice,text:spoken(scene),
      usage:{total_input_tokens:charge.total_input_tokens??0,total_output_tokens:charge.total_output_tokens??0},
      batch:{...batch,quality:check,receipt:runDir+'/report.json'}});
    fs.renameSync(staging,dir);
    missing.delete(scene.id);
  };

  function check(scene,file,stem,recognised){
    const pcm=decodePcm(file);
    const aligned=align(file,spoken(scene),stem);
    const words=aligned.segments.flatMap(s=>s.words);
    const edge=speechEdges(pcm,words);
    const mapped=mapWordTimings(scene.text,spoken(scene),words);
    assert.equal(mapped.characters.join(''),scene.text);
    let cursor=0;
    for(const cue of cues.get(scene.id)){
      const start=scene.text.indexOf(cue,cursor);
      assert(start>=0&&mapped.character_end_times_seconds[start+cue.length-1]>mapped.character_start_times_seconds[start], 'Untimed cue '+cue);
      cursor=start+cue.length;
    }
    const comparison=compareGoogleWords(spoken(scene),recognised.map(w=>w.word).join(''));
    const runOn=checkGoogleRunOn({text:scene.text,expectedText:spoken(scene),seconds:pcm.length/96000,comparison,
      deliberateLongPauses:googleSceneHasLongPause(lesson.scenes.find(s=>s.id===scene.id))});
    const recognitionEdges=recognised.length?[recognised[0].start,pcm.length/96000-recognised.at(-1).end]:[];
    const result={scene:scene.id,textSha256:sha(scene.text),audioSha256:sha(fs.readFileSync(file)),edge,recognitionEdges,comparison,cueCount:cues.get(scene.id).length,
      // Root, 19 Nov: forced alignment against the exact scene text (above), the edges and the pause block a take.
      // Brief 257 also blocks run-on speech. Other word and number differences are logged for review: number formatting
      // ("152" for "one fifty two", "two" for "too", split decimals) stopped three nights of voicing on good audio.
      runOn,pass:edge.pass&&comparison.pausePresent&&runOn.pass,
      review:edge.pass&&comparison.pausePresent&&runOn.pass&&!comparison.pass};
    return {pcm,aligned,result};
  }

  function recognise(files,stem){
    const output=stem+'.recognition.json';
    runPython('scripts/recognise-google-scenes.py',[output,...files],stem+'.recognition.log');
    return read(output);
  }

  // Root, 19 Nov: a dropped connection (socket closed, ECONNABORTED) is retried up to twice after a pause.
  // Each attempt is written to the ledger first, so the local quota count stays conservative. HTTP errors are never retried.
  async function request(group,tag){
    const recoveryFile='work/brief262/timeout-resume-2026-11-24.json';
    const recovery=fs.existsSync(recoveryFile)?read(recoveryFile):null;
    const signature=googleTimeoutRequestKey(lesson.id,group.map(s=>s.id),group.map(s=>sha(s.text)));
    const timeoutRecords=fs.existsSync('work/google-tts-timeouts.jsonl')?fs.readFileSync('work/google-tts-timeouts.jsonl','utf8').trim().split('\n').filter(Boolean).map(JSON.parse):[];
    const prior=Math.max(recovery?.timeoutRequestKey===signature?recovery.priorTimeouts:0,googleTimeoutCount(timeoutRecords,lesson.id,group.map(s=>s.id),group.map(s=>sha(s.text))));
    if(prior>=2)throw Error('GOOGLE_TTS_REPEATED_TIMEOUT: '+lesson.id+' '+group.map(s=>s.id).join(',')+' already timed out twice; stop this lesson and keep its caches');
    let timeoutCount=prior;
    for(let attempt=1;;attempt++){
      try { return await requestOnce(group,tag); }
      catch(error){
        const timeoutAction=googleTimeoutAction(error,1,timeoutCount);
        if(timeoutAction!=='other error'){
          timeoutCount++;
          fs.appendFileSync('work/google-tts-timeouts.jsonl',JSON.stringify({at:new Date().toISOString(),lesson:lesson.id,scenes:group.map(s=>s.id),textHashes:group.map(s=>sha(s.text)),attempt:timeoutCount,action:timeoutAction})+'\n');
          if(timeoutAction==='stop lesson')throw Error('GOOGLE_TTS_REPEATED_TIMEOUT: '+lesson.id+' '+group.map(s=>s.id).join(',')+' timed out twice; stop this lesson and keep its caches');
          console.error('Client timeout; retrying this request once in30seconds.');
          await new Promise(r=>setTimeout(r,30000));continue;
        }
        const network=error instanceof TypeError&&/fetch failed|terminated/i.test(error.message)
          ||/UND_ERR_SOCKET|ECONNABORTED|ECONNRESET|ETIMEDOUT/.test(String(error.cause?.code??error.code??''));
        if(!network||attempt>=3||process.env.GOOGLE_TTS_FINAL_RETRY==='1')throw error;
        console.error('Network drop on attempt '+attempt+' ('+String(error.cause?.code??error.message)+'); retrying in 30 s');
        await new Promise(r=>setTimeout(r,30000));
      }
    }
  }
  async function requestOnce(group,tag){
    if(googleQuotaDay()!==day||used()>=99)throw Error('Daily local quota exhausted; no speech requested');
    const text=group.map(spoken).join('\n\n');
    const ids=group.map(s=>s.id), hashes=group.map(s=>sha(s.text));
    const entry={at:new Date().toISOString(),lesson:lesson.id,scene:ids[0],textHash:hashes[0],batchSize:ids.length,scenes:ids,textHashes:hashes,kind:tag};
    fs.appendFileSync(ledgerPath,JSON.stringify(entry)+'\n');
    summary.attempts.push(entry);snapshot();
    const payload={model,input:[{type:'user_input',content:[{type:'text',text}]}],response_format:{type:'audio'},generation_config:{speech_config:[{voice}]}};
    const response=await fetch('https://generativelanguage.googleapis.com/v1beta/interactions',{method:'POST',headers:{'content-type':'application/json','x-goog-api-key':key},body:JSON.stringify(payload),signal:AbortSignal.timeout(120000)});
    if(!response.ok){
      const error=await response.json().catch(()=>({}));
      throw Error('Google speech failure HTTP '+response.status+': '+String(error.error?.message??'').split(key).join('[REDACTED]').slice(0,1000));
    }
    const body=await response.json(), audio=(body.steps??[]).flatMap(x=>x.content??[]).filter(x=>x.type==='audio').at(-1);
    assert(audio?.data&&Number.isFinite(body.usage?.total_input_tokens)&&Number.isFinite(body.usage?.total_output_tokens),'Missing speech or billed usage');
    Object.assign(entry,{usage:body.usage});
    const file=runDir+'/'+String(summary.attempts.length).padStart(2,'0')+'-request.wav';
    fs.writeFileSync(file,Buffer.from(audio.data,'base64'),{flag:'wx'});
    snapshot();
    return {file,text,entry};
  }

  try {
    const prePlan=planGoogleBatches(selected,missing);
    if(dryRun && process.env.GOOGLE_TTS_BATCH_AUDIT_PILOT!=='1'){
      summary.plan=prePlan.map(g=>g.map(s=>s.id));
      snapshot();
      console.log(JSON.stringify(summary.plan));
      return;
    }
    if(lesson.id==='math-a12-t04'){
      for(const scene of selected){
        const number=Number(scene.id.slice(-2));
        if(number<8||number>15||!missing.has(scene.id))continue;
        const dir='work/voice-batch-pilot/'+(number<=12?'recut/':'');
        const file=dir+scene.id+'.wav';
        const old=read(dir+scene.id+'.validation.json');
        assert.equal(old.sourceTextSHA256,sha(scene.text),'Pilot text changed');
        const stem=runDir+'/pilot-'+scene.id;
        try {
          const transcript=recognise([file],stem);
          const proof=check(scene,file,stem,transcript[file]);
          const result=proof.result;
          summary.pilot.push(result);
          if(result.pass){
            recordReview(result,file);
            if(dryRun)missing.delete(scene.id);
            else accept(scene,proof.pcm,proof.aligned,{kind:'pilot',size:number===11||number===12?2:3},result);
          }
        } catch(e){summary.pilot.push({scene:scene.id,pass:false,error:e.message});}
        snapshot();
      }
    }
    const pilotRejects=new Set(summary.pilot.filter(p=>!p.pass).map(p=>p.scene));
    const planned=selected.map(s=>pilotRejects.has(s.id)?{...s,forceSingle:true}:s);
    const groups=planGoogleBatches(planned,missing);
    summary.plan=groups.map(g=>g.map(s=>s.id));
    if(dryRun){summary.state='offline pilot audit';return;}
    if(used()+groups.length>99)throw Error('Daily local quota exhausted; batch plan exceeds remaining requests');
    let singlesOnly=false;
    for(const plannedGroup of groups){
      const activeGroups=singlesOnly?plannedGroup.map(scene=>[scene]):[plannedGroup];
      for(const group of activeGroups){
        const send=await request(group,group.length===1?'planned single':'batch');
        const stem=send.file.slice(0,-4);
        if(group.length===1){
          if(group[0].forceSingle)note('Google pilot fallback '+lesson.id+' '+group[0].id+'. Pilot checks failed. Re-voiced alone.');
          try {
            continueSingle(group[0],send,stem,group[0].forceSingle?'pilot fallback':'planned single');
          } catch(error) {
            // Only a failed quality check permits the one replacement take.
            if(process.env.GOOGLE_TTS_FINAL_RETRY==='1'||group[0].forceSingle||
              !String(error.message).startsWith('Single-scene planned single failed audio checks'))throw error;
            summary.fallbacks.push({scene:group[0].id,reason:error.message});
            const retry=await request([group[0]],'quality retry');
            continueSingle(group[0],retry,retry.file.slice(0,-4),'quality retry');
          }
          continue;
        }
        let failures=[];
        try {
          const guide=align(send.file,send.text,stem+'-guide');
          const chunks=cutGoogleBatch(decodePcm(send.file),guide,group.map(spoken));
          const files=chunks.map((pcm,i)=>{
            const file=stem+'-'+group[i].id+'.wav';
            fs.writeFileSync(file,pcmWav(pcm));
            return file;
          });
          const transcripts=recognise(files,stem);
          let charge=send.entry.usage;
          for(const [i,scene] of group.entries()){
            try{
              const proof=check(scene,files[i],files[i].slice(0,-4),transcripts[files[i]]);
              summary.checks.push(proof.result);
              if(!proof.result.pass){failures.push({scene,reason:JSON.stringify(proof.result)});continue;}
              recordReview(proof.result,files[i]);
              accept(scene,proof.pcm,proof.aligned,{kind:'batch',size:group.length,requestAt:send.entry.at},proof.result,charge);
              charge={};
            }catch(e){failures.push({scene,reason:e.message});}
          }
        } catch(e){failures=group.filter(scene=>missing.has(scene.id)).map(scene=>({scene,reason:e.message}));}
        summary.assessedScenes+=group.length;
        for(const {scene,reason} of failures){
          summary.fallbacks.push({scene:scene.id,reason});
          note('Google batch fallback '+lesson.id+' '+scene.id+'. Re-voice alone. '+reason);
        }
        snapshot();
        const rateExceeded=summary.fallbacks.length/summary.assessedScenes>.25;
        if(rateExceeded)note('Google batch fallback rate above 25 percent for '+lesson.id+'. Using single requests for the rest of this lesson.');
        for(const {scene} of failures){
          const one=await request([scene],'fallback');
          continueSingle(scene,one,one.file.slice(0,-4),'fallback');
        }
        if(rateExceeded)singlesOnly=true;
      }

    }
    function continueSingle(scene,send,stem,kind){
      const proof=check(scene,send.file,stem,recognise([send.file],stem)[send.file]);
      summary.checks.push(proof.result);
      snapshot();
      if(!proof.result.pass)throw Error('Single-scene '+kind+' failed audio checks for '+scene.id+'; no further retry');
      recordReview(proof.result,send.file);
      accept(scene,proof.pcm,proof.aligned,{kind,size:1,requestAt:send.entry.at},proof.result,send.entry.usage);
    }
    assert.equal(missing.size,0);
    summary.state='all new takes accepted';
  }catch(e){
    summary.state='stopped';
    summary.error=e.message;
    throw e;
  }finally{
    snapshot();
    if(!dryRun&&summary.reviews.length)note('Google recognition review '+lesson.id+' (takes retained). '+summary.reviews.map(
      r=>r.scene+': '+r.mismatches.map(m=>JSON.stringify(m.expected)+' heard as '+JSON.stringify(m.recognised)).join(', ')
    ).join('; ')+'. Evidence '+runDir+'/report.json.');
    if(!dryRun)note('Google batch ledger '+lesson.id+' '+summary.state+'. '+summary.attempts.length+
      ' requests, sizes '+(summary.attempts.map(a=>a.batchSize).join(', ')||'none')+
      '. '+summary.fallbacks.length+' fallbacks. '+(summary.error??'')+' Evidence '+runDir+'/report.json.');
  }
}
