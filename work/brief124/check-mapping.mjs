import fs from 'node:fs';
import assert from 'node:assert/strict';
import {pronunciationText,mapWordTimings} from '../../scripts/lib/google-pronunciation.mjs';
const original="By the end, you'll know why, and how to differentiate k e to the a x plus b.";
const p=pronunciationText(original,{math:true});
assert.equal(p.spokenText,"By the end, you'll know why, and how to differentiate k e to the ay x plus b.");
assert.equal(pronunciationText('At a half, times a.',{math:true}).spokenText,'At a half, times ay.');
const words=JSON.parse(fs.readFileSync('out/google-tts-pilot/math-constant-override-alignment.json','utf8')).segments.flatMap(s=>s.words);
const mapped=mapWordTimings(original,p.spokenText,words);assert.equal(mapped.characters.join(''),original);
let at=0; const rows=[];for(const [i,m] of [...original.matchAll(/\S+/gu)].entries()) {const start=m.index,end=start+m[0].length-1; rows.push({word:m[0],spoken:words[i].word,alignedStart:words[i].start,mappedStart:mapped.character_start_times_seconds[start],startDifferenceMs:(mapped.character_start_times_seconds[start]-words[i].start)*1000,alignedEnd:words[i].end,mappedEnd:mapped.character_end_times_seconds[end],endDifferenceMs:(mapped.character_end_times_seconds[end]-words[i].end)*1000});}
fs.writeFileSync('out/google-tts-pilot/math-constant-mapping-check.json',JSON.stringify({method:'Compare mapped display word endpoints with the same WhisperX spoken-word endpoints; this tests the mapping, not alignment accuracy.',rows},null,2));
console.log(`${rows.length} word mappings checked; max endpoint difference ${Math.max(...rows.flatMap(r=>[Math.abs(r.startDifferenceMs),Math.abs(r.endDifferenceMs)]))} ms`);
