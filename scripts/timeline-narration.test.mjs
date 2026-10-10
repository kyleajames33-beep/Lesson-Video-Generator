import test from 'node:test';
import assert from 'node:assert/strict';
import {assembleTimelineNarration} from './lib/timeline-narration.mjs';
const samples=(frames,value)=>{const b=Buffer.alloc(frames*1600*2);for(let i=0;i<b.length;i+=2)b.writeInt16LE(value,i);return b;};
const lesson={fps:30,introDurationInFrames:0,scenes:[
 {id:'a',durationInFrames:60,voiceover:{audioFile:'public/a.wav',startFrame:0,endFrame:30}},
 {id:'b',durationInFrames:60,voiceover:{audioFile:'public/b.wav',startFrame:6,endFrame:36}}
]};
const options={decode:f=>samples(30,f.endsWith('a.wav')?1000:2000),read:()=>Buffer.from('source')};
const pcm=r=>r.wav.subarray(44);
test('timeline includes transition overlap, delayed speech, correct gain and exact quiet tails',()=>{
 const r=assembleTimelineNarration(lesson,options),b=pcm(r);
 assert.equal(r.record.sampleCount,96*1600);
 assert.equal(b.readInt16LE(0),960);
 assert.equal(b.readInt16LE(30*1600*2),0);
 assert.equal(b.readInt16LE(41*1600*2),0);
 assert.equal(b.readInt16LE(42*1600*2),1920);
 assert.equal(b.readInt16LE(72*1600*2),0);
 assert.deepEqual(r.record.dependencies.map(d=>[d.startFrame,d.endFrame]),[[0,30],[42,72]]);
});
test('a cropped pilot has the exact corresponding full-track samples',()=>{
 const full=pcm(assembleTimelineNarration(lesson,options));
 const cropped=pcm(assembleTimelineNarration(lesson,{...options,frameRange:[40,50]}));
 assert.deepEqual(cropped,full.subarray(40*1600*2,51*1600*2));
});
test('response silence inside a recording is preserved sample for sample',()=>{
 const source=Buffer.concat([samples(10,1000),samples(10,0),samples(10,1000)]);
 const r=assembleTimelineNarration({...lesson,scenes:[lesson.scenes[0]]},{...options,decode:()=>source});
 assert.ok(pcm(r).subarray(10*1600*2,20*1600*2).every(v=>v===0));
});
test('unsupported intro, invalid crop and missing narration fail before export',()=>{
 assert.throws(()=>assembleTimelineNarration({...lesson,introDurationInFrames:30},options),/hook-first/);
 assert.throws(()=>assembleTimelineNarration(lesson,{...options,frameRange:[-1,50]}),/frame range/);
 assert.throws(()=>assembleTimelineNarration({...lesson,scenes:[{id:'empty',durationInFrames:60}]},options),/Missing/);
});
test('overlapping loud recordings fail rather than clipping speech silently',()=>{
 const l={...lesson,scenes:lesson.scenes.map(s=>({...s,durationInFrames:60,voiceover:{...s.voiceover,startFrame:0,endFrame:60}}))};
 assert.throws(()=>assembleTimelineNarration(l,{...options,decode:()=>samples(60,32767)}),/clips/);
});

test('an explicitly unvoiced title retains silence and narrated scene offsets',()=>{
 const l={...lesson,scenes:[{id:'title',type:'title',durationInFrames:60},lesson.scenes[0]]};
 const r=assembleTimelineNarration(l,options),b=pcm(r);
 assert.ok(b.subarray(0,36*1600*2).every(v=>v===0));
 assert.equal(b.readInt16LE(36*1600*2),960);
 assert.deepEqual(r.record.dependencies.map(d=>[d.startFrame,d.endFrame]),[[36,66]]);
 assert.deepEqual(r.record.silentScenes,[{sceneId:'title',startFrame:0,endFrame:60,reason:'Unvoiced title'}]);
 const crop=pcm(assembleTimelineNarration(l,{...options,frameRange:[30,40]}));
 assert.deepEqual(crop,b.subarray(30*1600*2,41*1600*2));
 assert.throws(()=>assembleTimelineNarration({...l,scenes:[{...l.scenes[0],voiceover:{text:'Spoken title'}}]},options),/Missing scene narration/);
});
