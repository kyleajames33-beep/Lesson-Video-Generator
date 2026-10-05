import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,mkdir,mkdtemp,writeFile,rm} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import path from 'node:path';
import {safetyMedicineSources,safetyMedicineArtifacts,validateSafetyMedicineArtifacts,safetyMedicineEvidence,lipinskiRiskFlags,idealPairRotation} from './lib/safety-medicine-lessons.mjs';
import {getVoiceoverBudget} from './lesson-utils.mjs';
import {hash} from './lib/science-audit.mjs';
const names=Object.keys(safetyMedicineSources),counts=[[10,9,9,10],[11,10,9,11],[11,10,10,11]];
for(const [i,name]of names.entries()){
 const bytes=await readFile('src/data/'+name+'.json'),original=JSON.parse(bytes);
 test(name+': complete guarded proposal preserves scene identity, images and timing floors',()=>{
  const a=safetyMedicineArtifacts(name,bytes),[scenes,narratedScenes,narrationChanges,takes]=counts[i];assert.deepEqual(validateSafetyMedicineArtifacts(name,bytes,a),{scenes,narratedScenes,narrationChanges,takes});
  assert.deepEqual(a.draft.scenes.map(s=>[s.id,s.type,s.image,s.diagram?.kind??s.diagram?.type]),original.scenes.map(s=>[s.id,s.type,s.image,s.diagram?.kind??s.diagram?.type]));
  for(const s of a.draft.scenes){assert.ok(s.durationInFrames>=original.scenes.find(o=>o.id===s.id).durationInFrames);if(s.voiceover)assert.equal(getVoiceoverBudget({text:s.voiceover.text,durationInFrames:s.durationInFrames,fps:a.draft.fps}).status,'ok');}
  const p=a.pacing.scenes.find(p=>p.response),ts=a.takes.takes.filter(t=>t.scene===p.scene);assert.deepEqual(ts.map(t=>t.phase),['prompt','answer']);assert.equal(a.draft.scenes.find(s=>s.id===p.scene).voiceover.text,ts.map(t=>t.text).join(' '));assert.ok(p.response.minimumThinkingSeconds>=40);
  assert.equal(a.changes.filter(c=>c.field.endsWith('.voiceover.text')).length,narrationChanges);assert.equal(a.review.scienceApproval,false);assert.equal(a.takes.generationAuthorised,false);
  assert.equal(a.draft.syllabusVersion,original.syllabusVersion);
  if(i>0){assert.equal(a.draft.syllabusNeutral,true);assert.equal(a.draft.syllabusDotPoints,undefined);assert.equal(a.draft.nesaOutcomes,undefined);assert.match(a.draft.subtitle,/Enrichment/u);}else assert.deepEqual(a.draft.syllabusDotPoints,original.syllabusDotPoints);
 });
 test(name+': source/media/cue/permission and package tampering fail closed',()=>{
  assert.throws(()=>safetyMedicineArtifacts(name,Buffer.concat([bytes,Buffer.from(' ')])),/source changed/u);
  for(const edit of [a=>a.draft.scenes[1].voiceover.audioFile='old.wav',a=>a.draft.scenes[1].captions=[],a=>a.draft.scenes[1].delay=0,a=>a.draft.scenes[1].diagram={props:{beat:1}},a=>a.takes.takes.reverse(),a=>a.review.scienceApproval=true,a=>a.takes.generationAuthorised=true,a=>a.pacing.scenes.find(p=>p.response).response.minimumThinkingSeconds=0,a=>a.draft.scenes[1].voiceover.text='changed']){const a=safetyMedicineArtifacts(name,bytes);edit(a);assert.throws(()=>validateSafetyMedicineArtifacts(name,bytes,a));}
 });
}
test('distillation stop boundary and separate recovery replace the unsafe dry-flask instruction',async()=>{
 const a=safetyMedicineArtifacts(names[0],await readFile('src/data/'+names[0]+'.json')),text=JSON.stringify(a.draft),q=a.draft.scenes.find(s=>s.id==='quick-check');
 assert.match(q.voiceover.text,/Never distil to dryness/u);assert.match(q.voiceover.text,/while liquid remains/u);assert.match(q.voiceover.text,/separate approved/u);assert.doesNotMatch(q.voiceover.text,/keep heating|pure water|dry solid/u);
 assert.match(text,/modest temperature/u);assert.match(text,/purity checks/u);assert.match(text,/49 g/u);assert.equal(80-31,49);
 assert.doesNotMatch(text,/each cycle raises purity|larger, purer crystals|repeat the process, recrystallising two or three/u);
});
test('chirality and zero-rotation conclusions retain conditional measurement scope',async()=>{
 const a=safetyMedicineArtifacts(names[1],await readFile('src/data/'+names[1]+'.json')),text=JSON.stringify(a.draft),q=a.draft.scenes.find(s=>s.id==='quick-check');
 assert.match(text,/interconvert/u);assert.match(text,/R\/S does not predict/u);assert.match(q.voiceover.text,/Neither conclusion follows from zero alone/u);assert.match(q.voiceover.text,/within uncertainty/u);
 assert.doesNotMatch(text,/R form was the safe sedative|one heals and one harms|syllabus framing|worth five marks|Band 6/u);
 const original=JSON.parse(await readFile('src/data/'+names[1]+'.json'));assert.equal(a.draft.scenes.find(s=>s.id==='concept-biology').voiceover.text,original.scenes.find(s=>s.id==='concept-biology').voiceover.text);
 assert.equal(idealPairRotation(10,.5,.1,1),0);assert.ok(Math.abs(idealPairRotation(10,.65,.1,1)-.3)<1e-12);assert.equal(idealPairRotation(10,1,.1,1),1);assert.equal(idealPairRotation(10,0,.1,1),-1);
 // Different specific rotation/concentration pairs can yield the same measurement.
 assert.equal(idealPairRotation(10,.75,.1,1),idealPairRotation(20,.75,.05,1));
 for(const args of [[0,.5,.1,1],[10,-.1,.1,1],[10,1.1,.1,1],[10,.5,0,1],[10,.5,.1,0],[NaN,.5,.1,1]])assert.throws(()=>idealPairRotation(...args));
});
test('original Rule of Five boundary values are not violations and no outcome is certified',async()=>{
 const boundary={mass:500,clogP:5,donors:5,acceptors:10};assert.deepEqual(lipinskiRiskFlags(boundary),[]);
 assert.deepEqual(lipinskiRiskFlags({mass:500.001,clogP:5.001,donors:6,acceptors:11}),['mass','clogP','donors','acceptors']);
 for(const [key,value]of Object.entries({mass:NaN,clogP:Infinity,donors:1.5,acceptors:-1}))assert.throws(()=>lipinskiRiskFlags({...boundary,[key]:value}));
 const a=safetyMedicineArtifacts(names[2],await readFile('src/data/'+names[2]+'.json')),text=JSON.stringify(a.draft);
 assert.match(text,/log P = log₁₀\(P\)/u);assert.match(text,/Codeine has activity/u);assert.match(text,/later hepatic metabolism/u);assert.match(text,/insufficient data/u);
 assert.doesNotMatch(text,/codeine is inactive|bypassing the liver entirely|over ninety-seven|over seventy|recommend the transdermal patch|Mass < 500|Donors < 5/u);
 assert.deepEqual(a.draft.scenes.find(s=>s.id==='concept-lipinski').diagram.props.cards.map(c=>c.title),['Mass ≤ 500 Da','log P ≤ 5','Donors ≤ 5','Acceptors ≤ 10']);
});
test('curriculum records preserve official text hashes and the full original medicine attribution',async()=>{
 const p=JSON.parse(await readFile('scripts/fixtures/chemistry-curriculum-2017.json'));
 for(const name of names){const c=safetyMedicineEvidence[name].curriculum;assert.equal(c.syllabusSha256,p.sourceSha256);assert.ok(c.originalMapping.syllabusDotPoints.length);assert.match(c.scope,/No clinical advice/u);for(const r of c.publishedReferences){assert.equal(r.text,p.paragraphs.find(x=>x.id===r.id)?.text);assert.equal(hash(r.text),r.textSha256);}}
 for(const name of names.slice(1))assert.deepEqual(safetyMedicineEvidence[name].curriculum.publishedReferences.filter(r=>['p1307','p1308','p1309'].includes(r.id)).map(r=>r.id),['p1307','p1308','p1309']);
});
test('renamed legacy/proposal lessons stay held and unsupported reviewed modes fail schema',async()=>{
 await mkdir('out/checks',{recursive:true});const dir=await mkdtemp('out/checks/safety-medicine-gate-');try{
  for(const name of names){const bytes=await readFile('src/data/'+name+'.json');for(const content of [bytes,JSON.stringify(safetyMedicineArtifacts(name,bytes).draft)]){const file=path.join(dir,'assembled.json');await writeFile(file,content);const r=spawnSync(process.execPath,['scripts/release-preflight.mjs',file,'--json'],{encoding:'utf8'});assert.notEqual(r.status,0);assert.match(r.stdout,/SAFETY_MEDICINE_SOURCE_REVIEW_PENDING/u,name);}}
  const a=safetyMedicineArtifacts(names[1],await readFile('src/data/'+names[1]+'.json'));a.draft.scenes.find(s=>s.id==='concept-chiral').diagram.props.mode='unsupported';const file=path.join(dir,'invalid.json');await writeFile(file,JSON.stringify(a.draft));const r=spawnSync(process.execPath,['scripts/validate-lesson.mjs',file],{encoding:'utf8'});assert.notEqual(r.status,0);assert.match(r.stdout+r.stderr,/Unsupported reviewed chirality/u);
 }finally{await rm(dir,{recursive:true,force:true});}
});
