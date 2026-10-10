import {readFileSync} from 'node:fs';
for (const t of ['chemistry-y12-m5-l1-static-dynamic-equilibrium','chemistry-y12-m5-l2-reversibility-entropy','chemistry-y12-m5-l3-collision-theory-equilibrium','chemistry-y12-m6-l16-titration-curves','chemistry-y12-m6-l18-back-conductometric-titration']) {
  const d = JSON.parse(readFileSync(`src/data/${t}.json`,'utf8'));
  console.log(`\n### ${t}`);
  d.scenes.forEach((s,i)=>{
    const v = s.image?`img:${s.image}`:s.diagram?`diag:${s.diagram.type}`:'(no visual)';
    console.log(`  [${i}] ${s.type} | id=${s.id} | "${s.heading||''}" | ${v}`);
  });
}
