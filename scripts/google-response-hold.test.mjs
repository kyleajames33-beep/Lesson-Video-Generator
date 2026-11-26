import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {responseHoldPlan} from './lib/google-response-hold.mjs';
import {applyGoogleSceneTiming} from './lib/google-scene-timing.mjs';
import {pcmWav,decodePcm} from './lib/media-tools.mjs';
const text='Guess. Answer.';
const alignment={characters:[...text],character_start_times_seconds:[...text].map((_,i)=>.1+i*.05),character_end_times_seconds:[...text].map((_,i)=>.14+i*.05)};
const makeScene=()=>({id:'hook',holdSeconds:3,holdKind:'countdown',planningResponseInterval:{afterText:'Guess.',countdownSeconds:3}});
test('prompt in the middle gets the response interval before its answer',()=>{
 const p=responseHoldPlan(makeScene(),text,alignment);assert.equal(p.startFrame,12);assert.equal(p.endFrame,102);
 assert(p.startFrame<alignment.character_start_times_seconds[7]*30);
});
test('assembly inserts only silence, preserves source samples and shifts answer captions',()=>{
 const dir=fs.mkdtempSync('work/brief278/test-');const audio=path.join(dir,'hook.wav');
 const pcm=Buffer.alloc(2*48000*2);for(let i=0;i<pcm.length/2;i++)pcm.writeInt16LE(Math.round(1500*Math.sin(i*.1)),i*2);
 fs.writeFileSync(audio,pcmWav(pcm));fs.writeFileSync(audio.replace('.wav','.alignment.json'),JSON.stringify(alignment));fs.writeFileSync(audio.replace('.wav','.generation.json'),JSON.stringify({textSha256:createHash('sha256').update(text).digest('hex'),modelId:'test',voiceId:'test'}));
 const original=fs.readFileSync(audio),scene=makeScene();
 applyGoogleSceneTiming(scene,{text},audio,alignment,2);
 assert.deepEqual(fs.readFileSync(audio),original);
 assert.deepEqual(scene.responseHold,{startFrame:12,endFrame:102});assert.equal(scene.durationInFrames,150);assert.equal(scene.voiceover.endFrame,150);
 const data=decodePcm(scene.voiceover.audioFile),cut=12*1600*2,end=102*1600*2;
 assert(data.subarray(cut,end).every(x=>x===0));assert.deepEqual(Buffer.concat([data.subarray(0,cut),data.subarray(end)]),pcm);
 const answer=scene.captions.find(c=>c.text.trim()==='Answer.');assert(Math.abs(answer.startMs-3450)<.001);
 assert(scene.captions.every(c=>c.endMs<=400||c.startMs>=3400));
 assert.equal(JSON.parse(fs.readFileSync(scene.voiceover.audioFile.replace('.wav','.assembly.json'))).responsePrompt,'Guess.');
});
test('unchanged consumers retain their existing trailing response hold',()=>{
 const s={id:'attempt',holdSeconds:10,holdKind:'countdown',planningResponseInterval:{countdownSeconds:10}};
 applyGoogleSceneTiming(s,{text},'not-read.wav',alignment,2);assert.equal(s.durationInFrames,360);assert.deepEqual(s.responseHold,{startFrame:60,endFrame:360});
});
test('missing or ambiguous prompts stop assembly',()=>{
 const s=makeScene();s.planningResponseInterval.afterText='Absent';assert.throws(()=>responseHoldPlan(s,text,alignment),/exactly once/);
 s.planningResponseInterval.afterText='Guess.';assert.throws(()=>responseHoldPlan(s,text+' Guess.',alignment),/exactly once/);
});
