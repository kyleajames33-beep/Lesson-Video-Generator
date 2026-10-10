import {readFileSync, writeFileSync} from 'node:fs';
const PATH = 'src/data/chemistry-y11-m2-l4-gases-molar-volume.json';
const d = JSON.parse(readFileSync(PATH, 'utf8'));
d.introVoiceover.text = "Welcome to HSC Science. This is HSC Chemistry. Today, gases and molar volume. Let's get into it.";
delete d.introVoiceover.audioFile;
writeFileSync(PATH, JSON.stringify(d, null, 2) + '\n');
console.log('Trimmed L4 intro VO to', d.introVoiceover.text.length, 'chars');
console.log(d.introVoiceover.text);
