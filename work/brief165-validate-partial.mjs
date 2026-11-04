import fs from 'node:fs';import {decodePcm} from '../scripts/lib/media-tools.mjs';
const root='docs/production/claude-pm/lessons/math-a12-d01', manifest=JSON.parse(fs.readFileSync(`${root}/voice-manifest.json`));let checked=[];
for(const s of manifest.scenes){if(!fs.existsSync(s.audioFile))continue;const a=JSON.parse(fs.readFileSync(s.audioFile.replace(/\.wav$/,'.alignment.json'))), m=JSON.parse(fs.readFileSync(s.audioFile.replace(/\.wav$/,'.generation.json'))), dur=decodePcm(s.audioFile).length/96000;
if(a.characters.join('')!==s.text)throw Error(`${s.id}: text mismatch`);let prev=0;
for(let i=0;i<a.characters.length;i++){const x=a.character_start_times_seconds[i],y=a.character_end_times_seconds[i];if(!Number.isFinite(x)||!Number.isFinite(y)||x<prev-1e-5||y<x||y>dur+.03)throw Error(`${s.id}: invalid alignment ${i}`);prev=y;}
checked.push({id:s.id,seconds:dur,characters:s.text.length,inputTokens:m.inputTokens,outputTokens:m.outputTokens,estimatedCostUsd:m.estimatedCostUsd});}
fs.writeFileSync('work/brief165/partial-validation.json',JSON.stringify({scope:'Existing take metadata, display text, array monotonicity and duration bounds; not human audio accuracy.',checked},null,2));console.log(`Checked ${checked.length} saved scenes.`);
