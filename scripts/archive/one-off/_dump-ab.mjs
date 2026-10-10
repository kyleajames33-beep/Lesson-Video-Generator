import {readFileSync, readdirSync} from 'node:fs';
const pairs=[['biology-y12-m8-l12a','biology-y12-m8-l12b'],['chemistry-y12-m7-l11a','chemistry-y12-m7-l11b']];
const find=(p)=>readdirSync('src/data').find(f=>f.startsWith(p+'-'));
for(const [a,b] of pairs){
  for(const p of [a,b]){
    const f=find(p); if(!f){console.log('MISSING',p);continue;}
    const d=JSON.parse(readFileSync('src/data/'+f,'utf8'));
    console.log(`\n${f}  (lesson="${d.lesson}", title="${d.title}")`);
    d.scenes.forEach((s,i)=>console.log(`  [${i}] ${s.type.padEnd(13)} id=${s.id}  "${(s.heading||'').slice(0,40)}"`));
  }
}
