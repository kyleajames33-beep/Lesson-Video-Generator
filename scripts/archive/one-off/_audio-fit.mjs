import {readFileSync, readdirSync} from 'node:fs';
const dir='public/audio/Biology-Y12-M5-L14';
const lesson=JSON.parse(readFileSync('src/data/biology-y12-m5-l14-mendelian-patterns.json','utf8'));
const fps=lesson.fps||30;
const files=readdirSync(dir).filter(f=>f.endsWith('.alignment.json'));
const dur=(sceneId)=>{
  const f=files.find(x=>x.startsWith(sceneId+'.'));
  if(!f) return null;
  const a=JSON.parse(readFileSync(dir+'/'+f,'utf8'));
  const ends=a.character_end_times_seconds||[];
  return ends.length?ends[ends.length-1]:0;
};
let totA=0,totB=0,over=0;
console.log('scene                | audio  | budget | fit');
for(const s of lesson.scenes||[]){
  const a=dur(s.id); const b=(s.durationInFrames||0)/fps;
  if(a==null){console.log(`${s.id.padEnd(20)} | (no audio)`);continue;}
  totA+=a; totB+=b;
  const ok=a<=b-0.3?'ok':(a<=b?'tight':'OVERFLOW +'+(a-b).toFixed(1)+'s');
  if(a>b)over++;
  console.log(`${s.id.padEnd(20)} | ${a.toFixed(1).padStart(5)}s | ${b.toFixed(1).padStart(5)}s | ${ok}`);
}
console.log(`\nTOTAL audio ${ (totA/60).toFixed(1)} min | budget ${(totB/60).toFixed(1)} min | scenes overflowing: ${over}`);
