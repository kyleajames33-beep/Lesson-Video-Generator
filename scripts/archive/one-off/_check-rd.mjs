import {readFileSync} from 'node:fs';
const probe = [
  ['chemistry-y12-m5-l3-collision-theory-equilibrium','concept-approach'],
  ['chemistry-y12-m5-l3-collision-theory-equilibrium','concept-catalyst'],
  ['chemistry-y12-m5-l2-reversibility-entropy','concept-spectrum'],
  ['chemistry-y12-m5-l1-static-dynamic-equilibrium','concept-conditions'],
  ['chemistry-y12-m6-l16-titration-curves','concept-four-types'],
  ['chemistry-y12-m6-l18-back-conductometric-titration','concept-conductometric'],
];
for (const [f,id] of probe) {
  const d = JSON.parse(readFileSync(`src/data/${f}.json`,'utf8'));
  const s = d.scenes.find(x=>x.id===id);
  console.log(`${f} :: ${id}`);
  console.log(`   dur=${s.durationInFrames} revealDelays=${JSON.stringify(s.revealDelays||{})} hasDiagram=${!!s.diagram} hasImage=${!!s.image}`);
}
