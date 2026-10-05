import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {indicatorName,indicatorArtifacts,validateIndicatorArtifacts,titrantVolumeAtPH} from './lib/indicator-corrections.mjs';
import {getVoiceoverBudget} from './lesson-utils.mjs';
const bytes=await readFile('src/data/'+indicatorName+'.json'),original=JSON.parse(bytes);
test('indicator proposal preserves production structure, metadata and all later timing floors',()=>{
 const a=indicatorArtifacts(bytes);
 assert.deepEqual(a.draft.scenes.map(s=>[s.id,s.type,s.image,s.diagram?.kind??s.diagram?.type]),original.scenes.map(s=>[s.id,s.type,s.image,s.diagram?.kind??s.diagram?.type]));
 for(const k of ['syllabusVersion','syllabusModule','syllabusDotPoints','nesaOutcomes'])assert.deepEqual(a.draft[k],original[k]);
 assert.equal(a.changes.filter(c=>c.field.endsWith('.voiceover.text')).length,8);
 assert.ok(a.changes.every(c=>typeof c.field==='string'&&c.field.startsWith('$.')));
 for(const s of a.draft.scenes){assert.ok(s.durationInFrames>=original.scenes.find(o=>o.id===s.id).durationInFrames);if(s.voiceover)assert.equal(getVoiceoverBudget({text:s.voiceover.text,durationInFrames:s.durationInFrames,fps:a.draft.fps}).status,'ok');}
 assert.deepEqual(validateIndicatorArtifacts(bytes,a),{scenes:9,narratedScenes:8,takes:9});
});
test('indicator package rejects source drift, stale media/cues, altered exports and reordered responses',()=>{
 assert.throws(()=>indicatorArtifacts(Buffer.concat([bytes,Buffer.from(' ')])),/source changed/iu);
 for(const change of [a=>{a.draft.scenes[1].voiceover.audioFile='old.mp3';},a=>{a.draft.scenes[2].diagram.props.sweep[0].at=10;},a=>{a.takes.takes.reverse();},a=>{a.pacing.scenes.find(s=>s.response).response.minimumThinkingSeconds=0;},a=>{a.takes.generationAuthorised=true;},a=>{a.review.scienceApproval=true;},a=>{a.changes[0].after='altered';}]){
  const a=indicatorArtifacts(bytes);change(a);assert.throws(()=>validateIndicatorArtifacts(bytes,a));
 }
});
test('bracketing counterexample independently verifies charge balance and explicit endpoint tolerance',()=>{
 const pairs=[8.3,10].map(pH=>({pH,v:titrantVolumeAtPH(pH)}));assert.ok(pairs.every(p=>Math.abs(p.v-25)<.1));
 assert.ok(Math.abs(pairs[0].v-25.000995145027193)<1e-10);assert.ok(Math.abs(pairs[1].v-25.0500499999499)<1e-10);
 for(const {pH,v} of pairs){const excess=.1*(v-25)/(v+25),oh=(excess+Math.sqrt(excess**2+4e-14))/2;assert.ok(Math.abs(14+Math.log10(oh)-pH)<1e-9);}
 assert.equal(titrantVolumeAtPH(7),25);assert.throws(()=>titrantVolumeAtPH(15));assert.throws(()=>titrantVolumeAtPH(NaN));
});
test('weak-acid illustrative intervals, hypothetical hook and separate thinking plan agree',()=>{
 const v=pH=>titrantVolumeAtPH(pH,{ka:1.8e-5});
 assert.ok(v(3.1)>.3&&v(3.1)<1);assert.ok(v(4.4)>7&&v(4.4)<8);assert.ok(Math.abs(v(8.3)-24.99)<.01);assert.ok(Math.abs(v(10)-25.05)<.01);
 const a=indicatorArtifacts(bytes),r=a.pacing.scenes.find(s=>s.response).response;
 assert.equal(a.draft.scenes.find(s=>s.id==='quick-check').voiceover.text,r.promptText+' '+r.answerText);assert.equal(r.minimumThinkingSeconds,45);
 assert.match(a.draft.scenes.find(s=>s.id==='hook').body,/Hypothetical/u);
 assert.doesNotMatch(JSON.stringify(a.draft),/real quality control failure|112%|hundred and twelve|must bracket|range brackets|range encompasses/u);
 assert.match(a.draft.scenes.find(s=>s.id==='worked-example').question,/25 °C/u);
});
