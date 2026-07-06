import {readFileSync, writeFileSync} from 'node:fs';
const PATH = 'src/data/chemistry-y11-m2-l5-mole-consolidation.json';
const d = JSON.parse(readFileSync(PATH, 'utf8'));
const t = d.scenes.find((x) => x.id === 'title');
delete t.voiceover;
delete t.captions;
writeFileSync(PATH, JSON.stringify(d, null, 2) + '\n');
console.log('L5 title VO dropped (unvoiced, matches L3/L4). voiceover:', t.voiceover ?? '(absent)');
