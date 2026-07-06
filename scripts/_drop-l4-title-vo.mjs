import {readFileSync, writeFileSync} from 'node:fs';
const PATH = 'src/data/chemistry-y11-m2-l4-gases-molar-volume.json';
const d = JSON.parse(readFileSync(PATH, 'utf8'));
const t = d.scenes.find((x) => x.id === 'title');
delete t.voiceover;
delete t.captions;
writeFileSync(PATH, JSON.stringify(d, null, 2) + '\n');
console.log('L4 title VO + captions removed. voiceover:', t.voiceover ?? '(absent)');
console.log('captions:', t.captions ?? '(absent)');
