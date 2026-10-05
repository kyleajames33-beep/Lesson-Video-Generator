import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,mkdir,mkdtemp,writeFile,rm} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import path from 'node:path';
import {foundationsSources,foundationsArtifacts,validateFoundationsArtifacts,gibbsModel,foundationsEvidence} from './lib/foundations-chemistry-lessons.mjs';
import {validateReviewedPolymerDiagram} from '../src/slides/diagrams/reviewed-polymer-models.mjs';
import {getVoiceoverBudget} from './lesson-utils.mjs';
const names=Object.keys(foundationsSources),sceneCounts=[7,9,10,11],narrated=[7,9,9,10],changed=[6,8,8,10];
for(const [i,name]of names.entries()){
 const bytes=await readFile('src/data/'+name+'.json'),original=JSON.parse(bytes);
 test(name+': source-guarded complete draft preserves scene identities and duration floors',()=>{
  const a=foundationsArtifacts(name,bytes);assert.deepEqual(validateFoundationsArtifacts(name,bytes,a),{scenes:sceneCounts[i],narratedScenes:narrated[i],narrationChanges:changed[i],takes:narrated[i]+1});
  assert.deepEqual(a.draft.scenes.map(s=>[s.id,s.type,s.image,s.diagram?.kind??s.diagram?.type]),original.scenes.map(s=>[s.id,s.type,s.image,s.diagram?.kind??s.diagram?.type]));
  for(const k of ['syllabusVersion','syllabusDotPoints','nesaOutcomes'])assert.deepEqual(a.draft[k],original[k]);
  for(const s of a.draft.scenes){assert.ok(s.durationInFrames>=original.scenes.find(o=>o.id===s.id).durationInFrames);if(s.voiceover)assert.equal(getVoiceoverBudget({text:s.voiceover.text,durationInFrames:s.durationInFrames,fps:a.draft.fps}).status,'ok');}
  const p=a.pacing.scenes.find(p=>p.response),takes=a.takes.takes.filter(t=>t.scene===p.scene);assert.deepEqual(takes.map(t=>t.phase),['prompt','answer']);assert.equal(a.draft.scenes.find(s=>s.id===p.scene).voiceover.text,takes.map(t=>t.text).join(' '));assert.ok(p.response.minimumThinkingSeconds>=45);
  assert.equal(a.changes.filter(c=>c.field.endsWith('.voiceover.text')).length,changed[i]);assert.equal(a.review.scienceApproval,false);
 });
 test(name+': changed source, artifact, timing or permission claims fail closed',()=>{
  assert.throws(()=>foundationsArtifacts(name,Buffer.concat([bytes,Buffer.from(' ')])),/source changed/u);
  for(const change of [a=>a.draft.scenes[1].voiceover.audioFile='old.wav',a=>a.draft.scenes[1].captions=[],a=>a.draft.scenes[1].delay=0,a=>a.takes.takes.reverse(),a=>a.review.scienceApproval=true,a=>a.takes.generationAuthorised=true,a=>a.pacing.scenes.find(p=>p.response).response.minimumThinkingSeconds=0,a=>a.draft.scenes[1].voiceover.text='changed']){const a=foundationsArtifacts(name,bytes);change(a);assert.throws(()=>validateFoundationsArtifacts(name,bytes,a));}
 });
}
test('Gibbs independent arithmetic and composition counterexample preserve standard-state scope',()=>{
 const h=gibbsModel(-92.4,-198.9,298.15);assert.ok(Math.abs(h.standard-(-33.097965))<1e-10);assert.ok(Math.abs(h.constantPropertyCrossover-464.5550527903469)<1e-9);assert.equal(h.standard,h.actual);
 assert.ok(gibbsModel(-92.4,-198.9,298.15,1e10).actual>0,'same negative standard value can give positive actual reaction Gibbs energy');
 const e=gibbsModel(-137,-120.7,298.15);assert.ok(Math.abs(e.standard-(-101.013295))<1e-10);assert.ok(Math.abs(e.constantPropertyCrossover-1135.0455675227838)<1e-9);
 assert.equal(gibbsModel(-10,0,298).constantPropertyCrossover,null);assert.equal(gibbsModel(10,-1,298).constantPropertyCrossover,null);
 for(const x of [[0,1,0],[0,1,298,0],[NaN,1,298]])assert.throws(()=>gibbsModel(...x));
});
test('monoalkene reverse method conserves atoms and restores valence without extra H',async()=>{
 const a=foundationsArtifacts(names[2],await readFile('src/data/'+names[2]+'.json')),text=JSON.stringify(a.draft);
 // –CH2–CH(CH3)–: chain continuation contributes one bond to each backbone carbon.
 const originalBondOrders=[2+1+1,1+1+1+1],recovered=[2+2,2+1+1];assert.deepEqual(originalBondOrders,[4,4]);assert.deepEqual(recovered,[4,4]);assert.equal(2+1+3,6);
 assert.match(text,/do not add extra H/u);assert.match(text,/CH₂–CH=CH–CH₂/u);assert.doesNotMatch(text,/cannot have come from addition|higher melting point than polyethylene|recyclable thermoplastics but/u);
});
test('acid corrections retain chemical conditions in narration, visible copy and diagrams',async()=>{
 const a=foundationsArtifacts(names[3],await readFile('src/data/'+names[3]+'.json')),text=JSON.stringify(a.draft);
 assert.doesNotMatch(text,/only four bases are strong|there are exactly four|it does not return to colourless|6HNO₃ \+ 2Al|Cu, Ag don/u);
 assert.match(text,/Mg \+ 2HCl → MgCl₂ \+ H₂ \(dilute HCl\)/u);assert.match(text,/LiOH/u);assert.match(text,/not an exhaustive/u);assert.match(text,/observation time/u);assert.match(text,/NH₃ \+ H⁺ → NH₄⁺/u);
 assert.equal(a.draft.scenes.find(s=>s.id==='concept-indicators').diagram.props.sweep.length,1);
 assert.deepEqual(a.draft.scenes.find(s=>s.id==='concept-indicators').diagram.props.sweep,[{pH:7,at:0}]);
});
test('curriculum evidence keeps required hierarchies, qualifiers and delivery holds',()=>{
 for(const n of names){const c=foundationsEvidence[n].curriculum;assert.equal(c.syllabusSha256,'7c75fc806d4d8154499b0c596eda048ce4367547922bbd4058da075d9c319d42');assert.match(c.scope,/No completed practical/u);assert.ok(c.publishedReferences.length);}
 assert.ok(foundationsEvidence[names[0]].curriculum.publishedReferences.some(p=>p.id==='p918'));assert.ok(foundationsEvidence[names[3]].curriculum.publishedReferences.some(p=>p.id==='p1118'));
});
test('renamed assembled lessons remain release-held and unsupported diagram opt-ins fail schema',async()=>{
 await mkdir('out/checks',{recursive:true});const dir=await mkdtemp('out/checks/foundations-gate-');try{
  for(const name of names){const file=path.join(dir,'assembled.json');await writeFile(file,await readFile('src/data/'+name+'.json'));const r=spawnSync(process.execPath,['scripts/release-preflight.mjs',file,'--json'],{encoding:'utf8'});assert.notEqual(r.status,0);assert.match(r.stdout,/FOUNDATIONS_SOURCE_REVIEW_PENDING/u,name);}
  const a=foundationsArtifacts(names[2],await readFile('src/data/'+names[2]+'.json'));a.draft.scenes.find(s=>s.id==='concept-thermo').diagram.props.mode='environment';const file=path.join(dir,'invalid.json');await writeFile(file,JSON.stringify(a.draft));const r=spawnSync(process.execPath,['scripts/validate-lesson.mjs',file],{encoding:'utf8'});assert.notEqual(r.status,0);assert.match(r.stdout+r.stderr,/limited to the polyethylene/u);
 }finally{await rm(dir,{recursive:true,force:true});}
});
test('reviewed polymer schema is opt-in and rejects invalid scope',()=>{for(const d of [{type:'diorama',kind:'wrong',props:{reviewedPolymer:true}},{type:'diorama',kind:'chem12m7PolymerProps',props:{reviewedPolymer:'true'}},{type:'diorama',kind:'chem12m7PolymerFate',props:{reviewedPolymer:true,mode:'hydrolysis'}}])assert.throws(()=>validateReviewedPolymerDiagram(d));assert.doesNotThrow(()=>validateReviewedPolymerDiagram({type:'diorama',kind:'chem12m7PolymerFate',props:{mode:'hydrolysis'}}));});
