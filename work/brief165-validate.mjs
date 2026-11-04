import fs from 'node:fs';import {decodePcm} from '../scripts/lib/media-tools.mjs';
const root='docs/production/claude-pm/lessons/math-a12-d01', lesson=JSON.parse(fs.readFileSync(`${root}/measured/lesson.json`));
const findings=[];let totalSeconds=0,cost=0;
for(const s of lesson.scenes){
 const audio=s.voiceover.audioFile, a=JSON.parse(fs.readFileSync(audio.replace(/\.wav$/,'.alignment.json'))), g=JSON.parse(fs.readFileSync(audio.replace(/\.wav$/,'.generation.json'))), dur=decodePcm(audio).length/96000;
 if(a.characters.join('')!==s.voiceover.text) throw Error(`Display mismatch ${s.id}`);
 if(a.characters.length!==a.character_start_times_seconds.length||a.characters.length!==a.character_end_times_seconds.length) throw Error(`Alignment array mismatch ${s.id}`);
 let prior=0; for(let i=0;i<a.characters.length;i++){const x=a.character_start_times_seconds[i],y=a.character_end_times_seconds[i];if(!Number.isFinite(x)||!Number.isFinite(y)||x<prior-1e-5||y<x||y>dur+.03)throw Error(`Invalid timing ${s.id} ${i}`);prior=y;}
 const expected=Math.ceil(dur*lesson.fps)+Math.round(s.holdSeconds*lesson.fps);
 if(s.durationInFrames!==expected)throw Error(`Duration mismatch ${s.id}`);
 if(s.holdKind==='countdown'&&(s.responseHold?.endFrame-s.responseHold?.startFrame)!==10*lesson.fps)throw Error(`Countdown mismatch ${s.id}`);
 if(s.id==='scene-16'&&s.holdSeconds!==60)throw Error('Notes hold mismatch');
 totalSeconds+=dur;cost+=g.estimatedCostUsd;findings.push({id:s.id,seconds:dur,characters:s.voiceover.text.length,holdSeconds:s.holdSeconds,cost:g.estimatedCostUsd});
}
fs.writeFileSync(`${root}/measured/validation.json`,JSON.stringify({findings,totalSeconds,costUsd:cost,scope:'Alignment structure and timing bounds, not human accuracy.'},null,2));console.log(`Validated ${findings.length} scenes; ${totalSeconds.toFixed(1)} speech seconds; estimated $${cost.toFixed(5)}.`);
