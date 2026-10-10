// Un-split the 6 over-corrected A/B lessons back into single lessons.
// Merge = A.scenes (drop the endCard bridge) + B.scenes (drop B's title + recap).
import {readFileSync, writeFileSync, readdirSync, rmSync} from 'node:fs';
const targets=[
  ['biology-y12-m8-l12','biology-y12-m8-l12-epidemiology-measures-study-design'],
  ['biology-y12-m8-l14','biology-y12-m8-l14-treatment-non-infectious-disease'],
  ['biology-y12-m8-l16','biology-y12-m8-l16-autoimmune-diseases-allergies'],
  ['biology-y12-m8-l20','biology-y12-m8-l20-kidney-disorders-dialysis-transplantation'],
  ['biology-y12-m8-l21','biology-y12-m8-l21-module-8-mastery-integration'],
  ['chemistry-y12-m7-l11','chemistry-y12-m7-l11-combustion-of-alcohols'],
];
const all=readdirSync('src/data');
for(const [stem,outBase] of targets){
  const af=all.find(f=>f.startsWith(stem+'a-')); const bf=all.find(f=>f.startsWith(stem+'b-'));
  if(!af||!bf){console.log(`!! ${stem}: A=${af} B=${bf} — skipping`);continue;}
  const A=JSON.parse(readFileSync('src/data/'+af,'utf8'));
  const B=JSON.parse(readFileSync('src/data/'+bf,'utf8'));
  const merged={...A};
  merged.title=(A.title||'').replace(/,?\s*Part\s*A\s*$/i,'');
  merged.lesson=(A.lesson||'').replace(/\s*A\s*$/i,'');
  if(A.subtitle) merged.subtitle=A.subtitle.replace(/\s*\(?Part A\)?\s*/i,'').trim();
  const aScenes=A.scenes.filter(s=>s.type!=='endCard');
  const bScenes=B.scenes.filter(s=> s.type!=='title' && s.id!=='recap' && !/where we left off/i.test(s.heading||''));
  merged.scenes=[...aScenes,...bScenes];
  writeFileSync('src/data/'+outBase+'.json', JSON.stringify(merged,null,2)+'\n');
  rmSync('src/data/'+af); rmSync('src/data/'+bf);
  console.log(`${stem}: merged ${aScenes.length}+${bScenes.length}=${merged.scenes.length} scenes -> ${outBase}.json | lesson="${merged.lesson}" | deleted ${af}, ${bf}`);
}
