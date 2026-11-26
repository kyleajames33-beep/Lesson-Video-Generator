// Brief 258: trim only recognised clean tail boundaries. No speech or render API.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash, randomUUID} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {assessGoogleTake} from './lib/google-runon-gate.mjs';
import {explainerCaptionCues, toSrt, toVtt} from './lib/explainer-captions.mjs';

const ROOT=path.resolve('.'), W='work/brief258', LOCK='work/brief245/root/stills.lock';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8').replace(/^\uFEFF/,''));
const sha=data=>createHash('sha256').update(data).digest('hex');
const fileSha=p=>sha(fs.readFileSync(p));
const write=(p,data)=>{fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,JSON.stringify(data,null,2)+'\n');};
const normal=s=>s.toLowerCase().replace(/[’‘]/g,"'").replace(/[^a-z0-9']/g,'');
const within=p=>{const a=path.resolve(p);assert(a.startsWith(ROOT+path.sep),'Path outside workspace: '+a);return a;};
const side=(audio,kind)=>audio.replace(/\.wav$/,'.'+kind+'.json');
const backupName=p=>p.endsWith('.wav')?p.replace(/\.wav$/,'.before-brief258.wav'):
  p.replace(/\.(alignment|generation)\.json$/,'.before-brief258.$1.json');

function recognised(row){
  if(row.evidence.startsWith('work/google-runon-checks/'))return {file:row.evidence,words:Object.values(read(row.evidence))[0]};
  const report=read(row.evidence),source=report.reviews.find(r=>r.scene===row.scene)?.file;
  assert(source,'Missing saved recognition source');
  for(const name of fs.readdirSync(path.dirname(row.evidence)).filter(n=>n.endsWith('.recognition.json'))){
    const file=path.join(path.dirname(row.evidence),name),words=read(file)[source];
    if(words)return {file,audio:source,words};
  }
  throw Error('Missing saved recognition words');
}

function makePlan(){
  assert(!fs.existsSync(W+'/plan.json'),'Preserving existing plan');
  const scan=read('work/brief257/rescan/scan.json'),scenes=[];
  for(const row of scan.failures.filter(r=>r.lesson!=='math-a12-f07')){
    const measured=`docs/production/claude-pm/lessons/${row.lesson}/measured/lesson.json`;
    const lesson=read(measured),scene=lesson.scenes.find(s=>s.id===row.scene);
    const recognition=recognised(row),words=recognition.words.filter(w=>normal(w.word));
    const firstInsertedIndex=words.length-row.trailingInsertedWords;
    const last=words[firstInsertedIndex-1],inserted=words[firstInsertedIndex];
    const tailWords=words.slice(firstInsertedIndex),alignment=read(side(row.audio,'alignment'));
    const finalWord=scene.voiceover.text.trim().split(/\s+/).at(-1),gap=inserted.start-last.end;
    let reason=null;
    if(normal(last.word)!==normal(finalWord))reason=`Final recognised word ${JSON.stringify(last.word.trim())} does not match scripted ${JSON.stringify(finalWord)}.`;
    else if(gap<.15-1e-8)reason=`No 0.15 s gap: scripted end ${last.end.toFixed(3)}, first inserted start ${inserted.start.toFixed(3)} (${gap.toFixed(3)} s gap).`;
    scenes.push({...row,measured,measuredSha256:fileSha(measured),recognitionFile:recognition.file,
      recognitionSha256:fileSha(recognition.file),recognitionAudio:recognition.audio??row.audio,
      lastScriptedWord:finalWord,lastRecognisedWord:last,firstInsertedWord:inserted,gapSeconds:gap,
      trailingRecognitionWords:tailWords,zeroDurationTailWords:tailWords.filter(w=>w.end-w.start<=1e-8).length,
      recognisedTailSpanSeconds:tailWords.at(-1).end-tailWords[0].start,lastAlignedScriptEnd:alignment.character_end_times_seconds.at(-1),
      cutSeconds:reason?null:Math.min(last.end+.35,inserted.start),
      state:reason?'stopped: no reliable clean boundary':'planned clean trim',reason,
      alignmentSha256:fileSha(side(row.audio,'alignment')),generationSha256:fileSha(side(row.audio,'generation'))});
  }
  assert.equal(scenes.length,7);
  const fp=scan.failures.find(r=>r.lesson==='math-a12-f07');
  const falsePositive={...fp,decision:'Root reviewed: split numbers, no extra speech. Take and gate unchanged.',
    measured:'docs/production/claude-pm/lessons/math-a12-f07/measured/lesson.json'};
  falsePositive.measuredSha256=fileSha(falsePositive.measured);
  const plan={brief:258,createdAt:new Date().toISOString(),speechRequests:0,scenes,falsePositive,
    playbackConfig:{path:'src/explainer/lessons/math-a12-d04/config.ts',sha256:fileSha('src/explainer/lessons/math-a12-d04/config.ts')}};
  write(W+'/plan.json',plan);
  console.log(JSON.stringify(scenes.map(s=>({lesson:s.lesson,scene:s.scene,gap:s.gapSeconds,cut:s.cutSeconds,state:s.state,reason:s.reason}))));
}

function wave(buffer){
  assert.equal(buffer.toString('ascii',0,4),'RIFF');assert.equal(buffer.toString('ascii',8,12),'WAVE');
  let fmt,data;
  for(let at=12;at+8<=buffer.length;){
    const tag=buffer.toString('ascii',at,at+4),size=buffer.readUInt32LE(at+4);
    if(tag==='fmt ')fmt={format:buffer.readUInt16LE(at+8),channels:buffer.readUInt16LE(at+10),
      sampleRate:buffer.readUInt32LE(at+12),blockAlign:buffer.readUInt16LE(at+20),bits:buffer.readUInt16LE(at+22),bytes:buffer.subarray(at+8,at+8+size).toString('hex')};
    if(tag==='data')data={size,start:at+8,sizeAt:at+4};
    at+=8+size+(size%2);
  }
  assert(fmt&&data);assert.equal(fmt.format,1,'Preserve unsupported format for root');assert.equal(fmt.bits,16,'Preserve unsupported sample width for root');
  assert(data.start+data.size<=buffer.length);assert.equal(data.size%fmt.blockAlign,0);
  return {...fmt,...data,frames:data.size/fmt.blockAlign,seconds:data.size/fmt.blockAlign/fmt.sampleRate};
}

function level(pcm,first,last){
  let sum=0,n=0;for(let at=first;at<last;at+=2){sum+=(pcm.readInt16LE(at)/32768)**2;n++;}
  return Math.sqrt(sum/Math.max(1,n));
}

function signal(buffer){
  const f=wave(buffer),pcm=buffer.subarray(f.start,f.start+f.size),step=Math.round(.01*f.sampleRate)*f.blockAlign;
  let peak=0,fullScaleSamples=0,quietStart=null;const silences=[];
  for(let first=0;first<pcm.length;first+=step){
    const end=Math.min(first+step,pcm.length);let sum=0,n=0;
    for(let at=first;at<end;at+=2){const v=Math.abs(pcm.readInt16LE(at));peak=Math.max(peak,v);if(v>=32760)fullScaleSamples++;sum+=v*v;n++;}
    const seconds=first/f.blockAlign/f.sampleRate,quiet=Math.sqrt(sum/n)/32768<.001;
    if(quiet&&quietStart===null)quietStart=seconds;
    if(!quiet&&quietStart!==null){if(seconds-quietStart>=1.5)silences.push({start:quietStart,end:seconds});quietStart=null;}
  }
  if(quietStart!==null&&f.seconds-quietStart>=1.5)silences.push({start:quietStart,end:f.seconds});
  return {peakFraction:peak/32768,fullScaleSamples,silencesAtLeast1_5s:silences};
}

function trim(buffer,row){
  const f=wave(buffer),cutFrames=Math.floor(row.cutSeconds*f.sampleRate+1e-8),fadeFrames=Math.round(.04*f.sampleRate);
  assert(cutFrames<f.frames&&cutFrames>fadeFrames);
  const cut=cutFrames/f.sampleRate;assert(cut<=row.firstInsertedWord.start+1e-8);
  const pcm=buffer.subarray(f.start,f.start+f.size),outPcm=Buffer.from(pcm.subarray(0,cutFrames*f.blockAlign));
  const fadeStart=(cutFrames-fadeFrames)*f.blockAlign,fadeRms=level(pcm,fadeStart,outPcm.length);
  assert(fadeRms<=.005,'Fade would touch audible sound; stop this scene');
  let quiet=0,longest=0;
  const binFrames=Math.max(1,Math.round(.01*f.sampleRate));
  for(let frame=Math.ceil(row.lastRecognisedWord.end*f.sampleRate);frame+binFrames<=Math.floor(row.firstInsertedWord.start*f.sampleRate);frame+=binFrames){
    if(level(pcm,frame*f.blockAlign,(frame+binFrames)*f.blockAlign)<=.005)quiet+=binFrames;else quiet=0;
    longest=Math.max(longest,quiet);
  }
  assert(longest/f.sampleRate>=.15-1e-8,'No measured 0.15 s quiet gap; stop this scene');
  for(let i=0;i<fadeFrames;i++)for(let c=0;c<f.channels;c++){
    const at=(cutFrames-fadeFrames+i)*f.blockAlign+c*2;
    outPcm.writeInt16LE(Math.round(outPcm.readInt16LE(at)*(fadeFrames-1-i)/(fadeFrames-1)),at);
  }
  const oldEnd=f.start+f.size+(f.size%2),out=Buffer.concat([buffer.subarray(0,f.start),outPcm,buffer.subarray(oldEnd)]);
  out.writeUInt32LE(out.length-8,4);out.writeUInt32LE(outPcm.length,f.sizeAt);
  const result=wave(out);assert.equal(result.bytes,f.bytes);assert(pcm.subarray(0,fadeStart).equals(outPcm.subarray(0,fadeStart)));
  return {bytes:out,proof:{oldSeconds:f.seconds,newSeconds:result.seconds,cutSeconds:cut,fadeSeconds:.04,
    sampleRate:f.sampleRate,channels:f.channels,bits:f.bits,format:f.format,formatIdentical:true,prefixSamplesIdentical:true,
    fadeStartSeconds:(cutFrames-fadeFrames)/f.sampleRate,fadeRms,longestQuietGapSeconds:longest/f.sampleRate}};
}

function differences(a,b,at=''){
  if(JSON.stringify(a)===JSON.stringify(b))return [];
  if(a&&b&&typeof a==='object'&&typeof b==='object')return [...new Set([...Object.keys(a),...Object.keys(b)])].flatMap(k=>differences(a[k],b[k],at+'/'+k));
  return [{path:at,old:a,new:b}];
}

function verifyTimes(lesson,oldValidation,trimRow,candidateGate){
  const scenes=[];
  for(const s of lesson.scenes){
    const a=read(side(s.voiceover.audioFile,'alignment')),text=s.voiceover.text;
    assert.equal(a.characters.join(''),text);
    assert.equal(a.characters.length,a.character_start_times_seconds.length);assert.equal(a.characters.length,a.character_end_times_seconds.length);
    let previousStart=0,previousEnd=0;
    for(let i=0;i<a.characters.length;i++){
      const start=a.character_start_times_seconds[i],end=a.character_end_times_seconds[i];
      assert(Number.isFinite(start)&&Number.isFinite(end)&&start>=previousStart-1e-8&&end>=previousEnd-1e-8&&end>=start&&end<=s.voiceover.endFrame/30+.0001);
      previousStart=start;previousEnd=end;
    }
    const before=oldValidation.scenes.find(x=>x.id===s.id);assert(before);
    let cursor=0;const cues=before.cues.map(c=>{
      const at=text.indexOf(c.text,cursor);assert(at>=0);cursor=at+c.text.length;
      const timed={text:c.text,start:a.character_start_times_seconds[at],end:a.character_end_times_seconds[at+c.text.length-1]};
      assert.deepEqual(timed,c);assert(timed.end<=s.durationInFrames/30);return timed;
    });
    const runOn=s.id===trimRow.scene?candidateGate:assessGoogleTake(s,{recogniseMissing:false});assert(runOn.pass);
    scenes.push({...before,cues,runOn,...(s.id===trimRow.scene?trimRow.signal:{}),durationInFrames:s.durationInFrames,seconds:s.id===trimRow.scene?trimRow.trim.newSeconds:before.seconds});
  }
  return scenes;
}

function otherHeavyJob(){
  const command="$jobs=Get-CimInstance Win32_Process | Where-Object { $_.Name -match 'node|python|ffmpeg' -and $_.CommandLine -match 'render-explainer[.]mjs|generate-google-audio[.]mjs|generate-elevenlabs-audio[.]mjs|daily-voice-continuation[.]mjs|voice-wave[.]mjs|voice-later-maths[.]mjs' }; [Console]::Write(@($jobs).Count)";
  const p=spawnSync('powershell.exe',['-NoProfile','-NonInteractive','-Command',command],{encoding:'utf8',windowsHide:true});
  assert.equal(p.status,0);return Number(p.stdout.trim());
}

async function apply(){
  assert(!fs.existsSync(W+'/hand-in.json'),'Preserving completed hand-in');
  const time=new Intl.DateTimeFormat('en-AU',{timeZone:'Australia/Sydney',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(new Date());
  assert(time<'18:45','Night voicing has priority: resume after its completion, outside this helper window');
  if(fs.existsSync(LOCK)){console.log('Waiting: root render lock is occupied. No audio work performed.');return;}
  assert.equal(otherHeavyJob(),0,'Another render or voicing job is active');
  const lock=within(LOCK),token=randomUUID();fs.mkdirSync(lock);write(LOCK+'/owner.json',{brief:258,pid:process.pid,token,started:new Date().toISOString()});
  const report={...read(W+'/plan.json'),startedAt:new Date().toISOString(),lessons:[],speechRequests:0,newCostUsd:0,humanListening:'pending',renderReview:'pending'};
  try{
    assert.equal(fileSha(report.playbackConfig.path),report.playbackConfig.sha256,'Playback config changed');
    for(const row of report.scenes){
      assert.equal(fileSha(row.audio),row.audioSha256,'Source audio changed');assert.equal(fileSha(row.measured),row.measuredSha256,'Measured source changed');
      assert.equal(fileSha(side(row.audio,'alignment')),row.alignmentSha256);assert.equal(fileSha(side(row.audio,'generation')),row.generationSha256);
      if(row.reason)continue;
      const base=W+'/'+row.lesson,original=read(row.measured),oldValidation=read(path.dirname(row.measured)+'/validation.json');
      const candidate=base+'/'+row.scene+'.trimmed.wav';fs.mkdirSync(base,{recursive:true});
      let backupMoves=[],measuredMove=null,committed=false;
      try{
        const cut=trim(fs.readFileSync(row.audio),row);row.trim=cut.proof;row.signal=signal(cut.bytes);
        const alignment=read(side(row.audio,'alignment'));assert(Math.max(...alignment.character_end_times_seconds)<=cut.proof.fadeStartSeconds,'Fade could cut a scripted word');
        if(fs.existsSync(candidate))assert.equal(fileSha(candidate),sha(cut.bytes));else fs.writeFileSync(candidate,cut.bytes,{flag:'wx'});
        fs.copyFileSync(side(row.audio,'alignment'),side(candidate,'alignment'));
        const generation=read(side(row.audio,'generation'));
        write(side(candidate,'generation'),{...generation,audioTrim:{brief:258,at:new Date().toISOString(),sourceAudio:row.audio,sourceSha256:row.audioSha256,
          trimmedSha256:fileSha(candidate),...cut.proof,newSpeechRequests:0}});
        const scene=structuredClone(original.scenes.find(s=>s.id===row.scene));scene.voiceover.audioFile=candidate;
        const gate=assessGoogleTake(scene);write(base+'/gate.json',gate);assert(gate.pass&&gate.trailingInsertedWords===0,'Trimmed take failed gate or has trailing inserted words');row.gate=gate;
        const next=structuredClone(original),target=next.scenes.find(s=>s.id===row.scene),oldFrames=target.voiceover.endFrame,newFrames=Math.ceil(cut.proof.newSeconds*30);
        target.voiceover.endFrame=newFrames;target.durationInFrames-=oldFrames-newFrames;
        const index=next.scenes.indexOf(target),diff=differences(original,next);
        assert.deepEqual(diff.map(d=>d.path).sort(),[`/scenes/${index}/durationInFrames`,`/scenes/${index}/voiceover/endFrame`].sort());
        assert.equal(next.scenes.at(-1).durationInFrames,1350);
        const timings=verifyTimes(next,oldValidation,row,gate),oldCaptions=explainerCaptionCues(original),captions=explainerCaptionCues(next),delta=(oldFrames-newFrames)/30*1000;
        assert.equal(oldCaptions.cues.length,captions.cues.length);
        for(let i=0;i<captions.cues.length;i++){
          const a=oldCaptions.cues[i],b=captions.cues[i],shift=a.segment===row.scene?0:delta;
          assert.equal(a.text,b.text);assert(Math.abs(a.startMs-b.startMs-shift)<.001);assert(Math.abs(a.endMs-b.endMs-shift)<.001);
        }
        const bytes=JSON.stringify(next,null,2)+'\n',measuredSha256=sha(bytes),totalSeconds=next.scenes.reduce((n,s)=>n+s.durationInFrames,0)/30;
        assert(totalSeconds<570);
        const capdir=base+'/captions';fs.mkdirSync(capdir,{recursive:true});
        const srt=toSrt(captions.cues),vtt=toVtt(captions.cues),captionReport={lessonPath:row.measured,lessonSha256:measuredSha256,srtSha256:sha(srt),vttSha256:sha(vtt),cueCount:captions.cues.length,timeline:captions.timeline,status:'exported-locally-playback-review-pending'};
        fs.writeFileSync(capdir+'/captions.srt',srt);fs.writeFileSync(capdir+'/captions.vtt',vtt);write(capdir+'/caption-export.json',captionReport);
        const wordDiff={pass:true,allScriptedWordsAndCharacterTimesIdentical:true,allBoldCueTimesIdentical:true,allLocalCaptionsIdentical:true,
          allOtherScenesIdentical:true,holdsAndNotesIdentical:true,lessonChanges:diff,allCaptionBodiesIdentical:true,
          subsequentCaptionShiftFrames:oldFrames-newFrames,subsequentCaptionShiftSeconds:delta/1000,
          alignmentHashes:Object.fromEntries(next.scenes.map(s=>[s.id,fileSha(side(s.voiceover.audioFile,'alignment'))]))};
        write(base+'/word-time-diff.json',wordDiff);
        const validation={...oldValidation,brief:258,measuredPath:row.measured,measuredSha256,canonicalMeasuredPath:row.measured,canonicalMeasuredSha256:measuredSha256,
          changedTakes:1,reusedTakes:next.scenes.length-1,voicedCharacters:0,newRequests:0,inputTokens:0,outputTokens:0,costUsd:0,totalSeconds,durationOver570:false,
          originalVoicing:{validationBackup:path.dirname(row.measured)+'.before-brief258/validation.json',costUsd:oldValidation.costUsd},
          scenes:timings,captions:captionReport,wordTimeDiff:wordDiff,
          machineListenFindings:timings.filter(s=>s.possibleRetry||s.fullScaleSamples>0||s.silencesAtLeast1_5s?.length||s.lowScoreWords?.length)
            .map(s=>({scene:s.id,possibleRetry:s.possibleRetry,fullScaleSamples:s.fullScaleSamples,silencesAtLeast1_5s:s.silencesAtLeast1_5s,lowScoreWords:s.lowScoreWords})),
          machineChecks:'PCM prefix and format, quiet cut and fade, independent recognition, unchanged word/cue/hold timings and cumulative captions.',
          humanListening:'pending',builtPreview:'pending',speechRequestedByThisHelper:false};
        write(base+'/validation.json',validation);fs.writeFileSync(base+'/lesson.json',bytes);
        // Verify both absolute rename targets stay inside this workspace before moving backups.
        const backups=[];backupMoves=backups;
        for(const from of [row.audio,side(row.audio,'alignment'),side(row.audio,'generation')]){
          const to=backupName(from);within(from);within(to);assert(!fs.existsSync(to));backups.push({from,to,sha256:fileSha(from)});
        }
        const measuredDir=path.dirname(row.measured),measuredBackup=measuredDir+'.before-brief258';within(measuredDir);within(measuredBackup);assert(!fs.existsSync(measuredBackup));
        const measuredFiles=fs.readdirSync(measuredDir,{recursive:true}).filter(n=>fs.statSync(measuredDir+'/'+n).isFile()).map(n=>({name:n,sha256:fileSha(measuredDir+'/'+n)}));
        measuredMove={from:measuredDir,to:measuredBackup,moved:false};
        assert.equal(fileSha(row.audio),row.audioSha256);assert.equal(fileSha(row.measured),row.measuredSha256);
        for(const b of backups){fs.renameSync(b.from,b.to);b.moved=true;}
        fs.copyFileSync(candidate,row.audio,fs.constants.COPYFILE_EXCL);fs.copyFileSync(side(candidate,'alignment'),side(row.audio,'alignment'),fs.constants.COPYFILE_EXCL);fs.copyFileSync(side(candidate,'generation'),side(row.audio,'generation'),fs.constants.COPYFILE_EXCL);
        fs.renameSync(measuredDir,measuredBackup);measuredMove.moved=true;fs.cpSync(measuredBackup,measuredDir,{recursive:true,errorOnExist:true,force:false});
        fs.writeFileSync(row.measured,bytes);fs.copyFileSync(base+'/validation.json',measuredDir+'/validation.json');
        for(const f of ['captions.srt','captions.vtt','caption-export.json'])fs.copyFileSync(capdir+'/'+f,measuredDir+'/captions/'+f);
        for(const b of backups)assert.equal(fileSha(b.to),b.sha256);
        for(const b of measuredFiles)assert.equal(fileSha(measuredBackup+'/'+b.name),b.sha256);
        assert.equal(fileSha(row.measured),measuredSha256);assert.equal(fileSha(row.audio),fileSha(candidate));assert.equal(fileSha(side(row.audio,'alignment')),row.alignmentSha256);
        committed=true;
        row.state='trimmed, gate passed, measured files rebuilt';row.newAudioSha256=fileSha(row.audio);row.oldDuration=row.seconds;row.newDuration=cut.proof.newSeconds;
        const handin={lesson:row.lesson,scene:row.scene,oldMeasuredSha256:row.measuredSha256,newMeasuredSha256:measuredSha256,measuredPath:row.measured,
          oldAudioSha256:row.audioSha256,newAudioSha256:row.newAudioSha256,trim:row.trim,gate,validation:base+'/validation.json',wordTimeDiff:base+'/word-time-diff.json',
          backups,measuredBackup:{from:measuredDir,to:measuredBackup,files:measuredFiles},captionReport,speechRequests:0,newCostUsd:0,humanListening:'pending',renderReview:'pending'};
        write(base+'/hand-in.json',handin);report.lessons.push(handin);
      }catch(error){
        if(committed)throw error;
        // Restore originals on a failed write, retaining partial new files for inspection.
        if(measuredMove?.moved){
          if(fs.existsSync(measuredMove.from)){
            const failed=within(measuredMove.from+'.failed-brief258');assert(!fs.existsSync(failed));fs.renameSync(within(measuredMove.from),failed);
          }
          fs.renameSync(within(measuredMove.to),within(measuredMove.from));
        }
        for(const b of backupMoves.filter(b=>b.moved).reverse()){
          if(fs.existsSync(b.from)){
            const failed=within(b.from+'.failed-brief258');assert(!fs.existsSync(failed));fs.renameSync(within(b.from),failed);
          }
          fs.renameSync(within(b.to),within(b.from));assert.equal(fileSha(b.from),b.sha256);
        }
        row.state='stopped';row.reason=error.message;write(base+'/stop.json',{reason:row.reason,row});
      }
    }
    const stopped=report.scenes.filter(r=>r.state.startsWith('stopped'));
    for(const r of stopped){assert.equal(fileSha(r.audio),r.audioSha256);assert.equal(fileSha(r.measured),r.measuredSha256);}
    assert.equal(fileSha(report.falsePositive.audio),report.falsePositive.audioSha256);assert.equal(fileSha(report.falsePositive.measured),report.falsePositive.measuredSha256);
    report.completedAt=new Date().toISOString();report.trimmedScenes=report.scenes.length-stopped.length;report.stoppedScenes=stopped.length;
    write(W+'/hand-in.json',report);console.log(JSON.stringify({trimmed:report.trimmedScenes,stopped:report.stoppedScenes,speechRequests:0,lessons:report.lessons.map(l=>({lesson:l.lesson,sha256:l.newMeasuredSha256}))}));
  }finally{
    const owner=read(LOCK+'/owner.json');assert.equal(owner.token,token,'Lock owner changed');fs.unlinkSync(LOCK+'/owner.json');fs.rmdirSync(lock);
  }
}

if(process.argv[2]==='--plan')makePlan();
else if(process.argv[2]==='--apply')await apply();
else throw Error('Usage: node scripts/trim-runon-tails-brief258.mjs --plan|--apply');
