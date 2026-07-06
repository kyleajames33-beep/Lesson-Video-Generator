import {readFileSync, readdirSync} from 'node:fs';
// Supported coded diagram types (from DiagramRenderer switch).
const src = readFileSync('src/slides/diagrams/DiagramRenderer.tsx', 'utf8');
const supported = new Set([...src.matchAll(/case '([a-zA-Z]+)'/g)].map((m) => m[1]));
const diagTypes = {}, imgCount = {}, tableCount = {};
let scenes = 0, withImage = 0, withDiagram = 0, withTable = 0;
const unsupported = [];
for (const f of readdirSync('src/data').filter((x) => /chemistry-y12-/.test(x) && x.endsWith('.json'))) {
  const d = JSON.parse(readFileSync('src/data/' + f, 'utf8'));
  for (const s of d.scenes || []) {
    scenes++;
    if (s.image) { withImage++; imgCount[f] = (imgCount[f]||0)+1; }
    if (s.diagram) {
      withDiagram++;
      const t = s.diagram.type;
      diagTypes[t] = (diagTypes[t]||0)+1;
      if (t === 'table') { withTable++; }
      if (!supported.has(t)) unsupported.push(`${f}: diagram "${t}"`);
    }
  }
}
console.log(`Y12 scenes: ${scenes} | with image: ${withImage} | with diagram: ${withDiagram}`);
console.log(`\nDiagram types used in Y12 (count):`);
for (const [t,n] of Object.entries(diagTypes).sort((a,b)=>b[1]-a[1])) console.log(`  ${supported.has(t)?'✓':'✗'} ${n}×  ${t}`);
console.log(`\nUnsupported diagram types: ${unsupported.length}`);
for (const u of unsupported) console.log('  ✗ '+u);
