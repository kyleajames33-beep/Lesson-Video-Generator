// Phase-1 script QA: TTS reads bare digits unpredictably (e.g. "1945", "0.16",
// "10^6"). Gold-standard VO spells numbers out ("nineteen forty five"). Scan all
// voiceover.text (+ introVoiceover) for digit patterns that may need respelling.
import {readFileSync, readdirSync} from 'node:fs';
const files=readdirSync('src/data').filter(f=>/(chemistry|biology)-.*\.json$/.test(f));
let lessonsWith=0, totalHits=0; const perFile=[];
const sample=[];
for(const f of files){
  const d=JSON.parse(readFileSync('src/data/'+f,'utf8'));
  const vos=[];
  if(d.introVoiceover?.text) vos.push(d.introVoiceover.text);
  for(const s of d.scenes||[]) if(s.voiceover?.text) vos.push(s.voiceover.text);
  let hits=0;
  for(const t of vos){
    // bare digit runs, decimals, exponents, percentages with digits
    const m=t.match(/\d[\d.,]*/g);
    if(m){hits+=m.length; if(sample.length<25) for(const x of m.slice(0,2)) sample.push(`${f}: "${x}" … ${t.slice(Math.max(0,t.indexOf(x)-25), t.indexOf(x)+25).replace(/\n/g,' ')}"`);}
  }
  if(hits){lessonsWith++; totalHits+=hits; perFile.push([f,hits]);}
}
console.log(`Lessons with digits in VO: ${lessonsWith}/${files.length} | total digit tokens: ${totalHits}`);
console.log('\nTop offenders:');
perFile.sort((a,b)=>b[1]-a[1]).slice(0,15).forEach(([f,n])=>console.log(`  ${n}  ${f}`));
console.log('\nSamples:');
sample.slice(0,20).forEach(s=>console.log('  '+s));
