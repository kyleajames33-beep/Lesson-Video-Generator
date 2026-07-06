import {readFileSync, readdirSync} from 'node:fs';
const SUP=new Set(['title','hook','concept','definition','formula','workedExample','misconception','quickCheck','summary','marginalia','labFootage','endCard','mnemonic']);
const counts={}; const bad=[];
for(const f of readdirSync('src/data')){
  if(!/(chemistry|biology)-.*\.json$/.test(f)) continue;
  const d=JSON.parse(readFileSync('src/data/'+f,'utf8'));
  for(const s of d.scenes||[]){counts[s.type]=(counts[s.type]||0)+1; if(!SUP.has(s.type)) bad.push(`${f}: ${s.type} (id=${s.id})`);}
}
console.log('Scene type counts:');
Object.entries(counts).sort((a,b)=>b[1]-a[1]).forEach(([t,n])=>console.log(`  ${n}× ${t}`));
console.log(`\nGenuinely unsupported (vs renderer set incl endCard/mnemonic): ${bad.length}`);
bad.forEach(x=>console.log('  ✗ '+x));
