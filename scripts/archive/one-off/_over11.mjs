import {readFileSync, readdirSync} from 'node:fs';
const rows=[];
for(const f of readdirSync('src/data').filter(f=>f.endsWith('.json')&&!/lessonRegistry/.test(f)&&/(chemistry|biology)-/.test(f))){
  let d; try{d=JSON.parse(readFileSync('src/data/'+f,'utf8'));}catch(e){continue;}
  let w=0; if(d.introVoiceover?.text)w+=d.introVoiceover.text.trim().split(/\s+/).length;
  for(const s of d.scenes||[])if(s.voiceover?.text)w+=s.voiceover.text.trim().split(/\s+/).length;
  const min=w/145;
  if(min>11.0) rows.push([f.replace('.json',''), min.toFixed(1), w]);
}
rows.sort((a,b)=>b[1]-a[1]);
console.log(`Lessons over 11.0 min spoken @145wpm: ${rows.length}\n`);
for(const [f,m,w] of rows) console.log(`  ${m}m (${w}w)  ${f}`);
