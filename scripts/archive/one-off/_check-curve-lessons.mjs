import {readFileSync} from 'node:fs';
const targets = {
  'chemistry-y12-m5-l1-static-dynamic-equilibrium':'rate/conc vs time',
  'chemistry-y12-m5-l3-collision-theory-equilibrium':'rate vs time',
  'chemistry-y12-m6-l16-titration-curves':'pH vs volume curve',
  'chemistry-y12-m6-l18-back-conductometric-titration':'conductance vs volume',
  'chemistry-y12-m8-l1-acid-base-titrations-indicators':'titration curve',
};
for (const [t,want] of Object.entries(targets)) {
  const d = JSON.parse(readFileSync(`src/data/${t}.json`,'utf8'));
  console.log(`\n${t}  (ideal visual: ${want})`);
  for (const s of d.scenes||[]) {
    const v = s.image ? `image:${s.image}` : s.diagram ? `diagram:${s.diagram.type}` : '—';
    if (v!=='—') console.log(`   [${s.type}] ${s.heading||s.id}  ->  ${v}`);
  }
}
