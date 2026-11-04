import {decodePcm} from '../scripts/lib/media-tools.mjs';import fs from 'node:fs';
const m=JSON.parse(fs.readFileSync('docs/production/claude-pm/lessons/math-a12-d01/voice-manifest.json'));
for(const s of m.scenes.slice(0,13)){
 const raw=decodePcm(s.audioFile), al=JSON.parse(fs.readFileSync(s.audioFile.replace(/\.wav$/,'.alignment.json'))), t=s.text, ends=[...t.matchAll(/[.!?]+(?=\s|$)/g)].map(x=>x.index+x[0].length).slice(0,-1), duration=raw.length/96000;
 let values=[];for(let p=0;p<raw.length;p+=960){let power=0,n=0;for(let k=p;k<Math.min(raw.length,p+960);k+=2){let v=raw.readInt16LE(k);power+=v*v;n++;}values.push(Math.sqrt(power/n));}
 const silent=[];for(let i=1;i<values.length-1;i++) if(values[i]<200 && values[i]<=values[i-1] && values[i]<=values[i+1]) silent.push(i/100);
 const diffs=ends.map(i=>{let approx=duration*i/t.length, candidates=silent.filter(v=>Math.abs(v-approx)<2), nearest=candidates.reduce((best,v)=>Math.abs(v-approx)<Math.abs(best-approx)?v:best,approx);return Math.abs(nearest-al.character_end_times_seconds[i-1]);});
 console.log(s.id,'sentences',ends.length+1,'largest boundary error seconds',Math.max(0,...diffs).toFixed(2));
}
