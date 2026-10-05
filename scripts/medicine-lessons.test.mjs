import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,mkdir,mkdtemp,writeFile,rm} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import path from 'node:path';
import {medicineSources,medicineArtifacts,validateMedicineArtifacts} from './lib/medicine-lessons.mjs';
import {getVoiceoverBudget} from './lesson-utils.mjs';
import {weakAcidFractions,illustrativeSolubilityRatio,validateReviewedMedicineDiagram} from '../src/slides/diagrams/medicine-models.mjs';
for(const name of Object.keys(medicineSources)){
 const bytes=await readFile('src/data/'+name+'.json'),original=JSON.parse(bytes);
 test(name+': preserve catalogue composition and later duration floors; isolate media and disputed mapping',()=>{
  const a=medicineArtifacts(name,bytes);assert.deepEqual(validateMedicineArtifacts(name,bytes,a),{scenes:11,narratedScenes:10,takes:11});
  assert.deepEqual(a.draft.scenes.map(s=>[s.id,s.type,s.image,s.diagram?.kind??s.diagram?.type]),original.scenes.map(s=>[s.id,s.type,s.image,s.diagram?.kind??s.diagram?.type]));
  assert.deepEqual(a.review.originalMapping.syllabusDotPoints,original.syllabusDotPoints);assert.equal(a.draft.syllabusDotPoints,undefined);assert.equal(a.draft.nesaOutcomes,undefined);assert.equal(a.draft.syllabusNeutral,true);
  assert.equal(a.changes.filter(c=>c.field.endsWith('.voiceover.text')).length,10);
  for(const s of a.draft.scenes){assert.ok(s.durationInFrames>=original.scenes.find(o=>o.id===s.id).durationInFrames);if(s.voiceover)assert.equal(getVoiceoverBudget({text:s.voiceover.text,durationInFrames:s.durationInFrames,fps:a.draft.fps}).status,'ok');}
  const q=a.pacing.scenes.find(s=>s.response),takes=a.takes.takes.filter(t=>t.scene===q.scene);assert.deepEqual(takes.map(t=>t.phase),['prompt','answer']);assert.equal(a.draft.scenes.find(s=>s.id===q.scene).voiceover.text,takes.map(t=>t.text).join(' '));assert.ok(q.response.minimumThinkingSeconds>=35);
 });
 test(name+': source drift, stale media, changed text, approval and response tampering fail closed',()=>{
  assert.throws(()=>medicineArtifacts(name,Buffer.concat([bytes,Buffer.from(' ')])),/source changed/iu);
  for(const change of [a=>a.draft.scenes[1].voiceover.audioFile='old.mp3',a=>a.draft.scenes[1].captions=[],a=>a.draft.scenes[2].diagram.props.beats=[1,2],a=>a.takes.takes.reverse(),a=>a.review.scienceApproval=true,a=>a.takes.generationAuthorised=true,a=>a.draft.scenes[1].voiceover.text='changed',a=>a.review.originalMapping.nesaOutcomes=[]]){const a=medicineArtifacts(name,bytes);change(a);assert.throws(()=>validateMedicineArtifacts(name,bytes,a));}
 });
}
test('ionisation arithmetic separates ratio, fractions and illustrative solubility',()=>{
 for(const [pH,pKa,expected] of [[1.5,3.5,.01],[6.5,3.5,1000],[4.8,4.8,1]]){const f=weakAcidFractions(pH,pKa);assert.equal(f.ratio,expected);assert.ok(Math.abs(f.ionised+f.unionised-1)<1e-15);assert.ok(Math.abs(f.ionised/f.unionised-expected)<1e-7);}
 assert.equal((weakAcidFractions(1.5,3.5).unionised*100).toFixed(2),'99.01');assert.equal((weakAcidFractions(6.5,3.5).ionised*100).toFixed(2),'99.90');
 assert.equal(illustrativeSolubilityRatio(3,30),10);for(const args of [[0,30],[3,-1],[30,3],[NaN,30]])assert.throws(()=>illustrativeSolubilityRatio(...args));assert.throws(()=>weakAcidFractions(NaN,3.5));
});
test('opt-in schema rejects unrelated modes, implicit examples and contradictory numeric labels',()=>{
 const d=(kind,props)=>({type:'diorama',kind,props:{reviewedMedicine:true,...props}});
 for(const diagram of [d('chem12m8Skeletal',{mode:'gallery'}),d('chem12m8Ionisation',{mode:'hocl'}),d('chem12m8Ionisation',{mode:'compare'}),d('chem12m8Ionisation',{mode:'salts'}),d('chem12m8Ionisation',{mode:'salts',acidSolubility:3,saltSolubility:30,foldLabel:'160-fold'}),d('other',{mode:'forms'}),d('chem12m8Ionisation',{mode:'forms',reviewedMedicine:'true'})])assert.throws(()=>validateReviewedMedicineDiagram(diagram));
 assert.doesNotThrow(()=>validateReviewedMedicineDiagram(d('chem12m8Ionisation',{mode:'salts',acidSolubility:3,saltSolubility:30})));
});

test('lesson schema and release entry points enforce medicine model and source-review holds',async()=>{
 await mkdir('out/checks',{recursive:true});const dir=await mkdtemp('out/checks/medicine-gates-');
 try {
  const name=Object.keys(medicineSources)[1],a=medicineArtifacts(name,await readFile('src/data/'+name+'.json')),file=path.join(dir,name+'.json');
  await writeFile(file,JSON.stringify(a.draft));
  let run=spawnSync(process.execPath,['scripts/release-preflight.mjs',file,'--json'],{encoding:'utf8'});assert.notEqual(run.status,0);assert.match(run.stdout,/MEDICINE_SOURCE_REVIEW_PENDING/u);assert.match(run.stdout,/MEDICINE_VISUAL_REVIEW_PENDING/u);
  a.draft.scenes.find(s=>s.id==='concept-salts').diagram.props.foldLabel='160-fold';await writeFile(file,JSON.stringify(a.draft));
  run=spawnSync(process.execPath,['scripts/validate-lesson.mjs',file],{encoding:'utf8'});assert.notEqual(run.status,0);assert.match(run.stdout+run.stderr,/do not supply a fold label/u);
  run=spawnSync(process.execPath,['scripts/release-preflight.mjs','src/data/'+name+'.json','--json'],{encoding:'utf8'});assert.match(run.stdout,/MEDICINE_SOURCE_REVIEW_PENDING/u);
  // Playback assembly may rename the JSON. Holds follow composition identity.
  for(const lessonName of Object.keys(medicineSources)){
   const copied=JSON.parse(await readFile('src/data/'+lessonName+'.json'));copied.introDurationInFrames=0;
   const renamed=path.join(dir,'assembled.json');await writeFile(renamed,JSON.stringify(copied));
   run=spawnSync(process.execPath,['scripts/release-preflight.mjs',renamed,'--json'],{encoding:'utf8'});assert.match(run.stdout,/MEDICINE_SOURCE_REVIEW_PENDING/u,lessonName+' renamed copy');
  }
 }finally{await rm(dir,{recursive:true,force:true});}
});
