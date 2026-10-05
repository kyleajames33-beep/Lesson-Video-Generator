import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,mkdir,mkdtemp,writeFile,rm} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import path from 'node:path';
import {waterHealthSources,waterHealthArtifacts,validateWaterHealthArtifacts,waterHealthEvidence,idealBufferPH,bod5,assertWaterHealthDraft} from './lib/water-health-lessons.mjs';
import {getVoiceoverBudget} from './lesson-utils.mjs';
import {hash} from './lib/science-audit.mjs';
const names=Object.keys(waterHealthSources),counts=[[10,9,9,10],[9,8,7,9],[12,11,11,12],[11,10,9,11]];
for(const [i,name]of names.entries()){
 const bytes=await readFile('src/data/'+name+'.json'),original=JSON.parse(bytes);
 test(name+': complete guarded source proposal preserves scene identities and timing floors',()=>{
  const a=waterHealthArtifacts(name,bytes),[scenes,narratedScenes,narrationChanges,takes]=counts[i];assert.deepEqual(validateWaterHealthArtifacts(name,bytes,a),{scenes,narratedScenes,narrationChanges,takes});
  assert.deepEqual(a.draft.scenes.map(s=>[s.id,s.type,s.image]),original.scenes.map(s=>[s.id,s.type,s.image]));
  for(const s of a.draft.scenes){assert.ok(s.durationInFrames>=original.scenes.find(o=>o.id===s.id).durationInFrames);if(s.voiceover)assert.equal(getVoiceoverBudget({text:s.voiceover.text,durationInFrames:s.durationInFrames,fps:a.draft.fps}).status,'ok');}
  const p=a.pacing.scenes.find(p=>p.response),ts=a.takes.takes.filter(t=>t.scene===p.scene);assert.deepEqual(ts.map(t=>t.phase),['prompt','answer']);assert.equal(a.draft.scenes.find(s=>s.id===p.scene).voiceover.text,ts.map(t=>t.text).join(' '));assert.ok(p.response.minimumThinkingSeconds>=40);
  assert.equal(a.changes.filter(c=>c.field.endsWith('.voiceover.text')).length,narrationChanges);assert.equal(a.review.scienceApproval,false);assert.equal(a.takes.generationAuthorised,false);
  assert.equal(a.draft.syllabusVersion,original.syllabusVersion);assert.deepEqual(a.draft.nesaOutcomes,original.nesaOutcomes);
  if(i>0)assert.deepEqual(a.draft.syllabusDotPoints,['analyse the need for monitoring the environment']);
 });
 test(name+': source drift, media, cue, export and approval tampering fail closed',()=>{
  assert.throws(()=>waterHealthArtifacts(name,Buffer.concat([bytes,Buffer.from(' ')])),/source changed/u);
  for(const edit of [a=>a.draft.scenes[1].voiceover.audioFile='old.wav',a=>a.draft.scenes[1].captions=[],a=>a.draft.scenes[1].delay=0,a=>a.draft.scenes[1].diagram={props:{beat:1}},a=>a.takes.takes.reverse(),a=>a.review.scienceApproval=true,a=>a.takes.generationAuthorised=true,a=>a.pacing.scenes.find(p=>p.response).response.minimumThinkingSeconds=0,a=>a.draft.scenes[1].voiceover.text='changed']){const a=waterHealthArtifacts(name,bytes);edit(a);assert.throws(()=>validateWaterHealthArtifacts(name,bytes,a));}
 });
}
test('independent buffer calculation and equal-ratio counterexample support bounded interpretation',async()=>{
 // Independent H+ = Ka * acid/base form, rather than the implementation log sum.
 const initial=-Math.log10(1.8e-5*.15/.10),final=-Math.log10(1.8e-5*.14/.11);
 assert.ok(Math.abs(idealBufferPH(1.8e-5,.15,.10)-initial)<1e-12);assert.ok(Math.abs(idealBufferPH(1.8e-5,.14,.11)-final)<1e-12);
 assert.equal(initial.toFixed(2),'4.57');assert.equal(final.toFixed(2),'4.64');assert.ok(Math.abs((final-initial)-.071355908)<1e-8);
 // A lower ratio can be produced by lowering numerator OR raising denominator.
 assert.equal(16/1,24/1.5);assert.equal(6.1+Math.log10(16/1),6.1+Math.log10(24/1.5));
 for(const args of [[0,1,1],[1,0,1],[1,1,0],[NaN,1,1],[1,Infinity,1]])assert.throws(()=>idealBufferPH(...args));
 const a=waterHealthArtifacts(names[0],await readFile('src/data/'+names[0]+'.json')),text=JSON.stringify(a.draft);
 assert.match(text,/apparent pKa/u);assert.match(text,/acidemia/u);assert.match(text,/4\.57/u);assert.match(text,/not identify the cause/u);assert.doesNotMatch(text,/every second of your life|medical emergency|resists not neutralises|more H₂CO₃\) means more/u);
 const blood=a.draft.scenes.find(s=>s.id==='concept-blood');assert.equal(blood.diagram.kind,'chem12m8Cards');assert.doesNotMatch(JSON.stringify(blood.diagram),/openCO2|H₂CO₃/u);
 for(const s of a.draft.scenes.filter(s=>s.diagram?.kind==='chem12m6Buffer')){assert.deepEqual(s.diagram.props.events,[]);assert.deepEqual(s.diagram.props.working,[]);}
});
test('BOD calculation explicitly handles dilution and seed correction and retains the valid Winkler result',async()=>{
 assert.equal(bod5({initial:7.2,final:3.6}),3.6);assert.equal(bod5({initial:8,final:4,sampleFraction:.2,seedCorrection:.4}),18);
 for(const a of [{initial:1,final:2},{initial:8,final:-1},{initial:8,final:4,sampleFraction:0},{initial:8,final:4,sampleFraction:2},{initial:8,final:4,seedCorrection:5},{initial:NaN,final:4}])assert.throws(()=>bod5(a));
 const a=waterHealthArtifacts(names[1],await readFile('src/data/'+names[1]+'.json')),text=JSON.stringify(a.draft);
 assert.match(text,/undiluted/u);assert.match(text,/unseeded/u);assert.match(text,/nitrification/u);assert.doesNotMatch(text,/Under 2|2 to 8|Above 8|moderate pollution|forecasts the oxygen/u);
 // Four electron equivalents per O2 and one per thiosulfate molecule.
 assert.ok(Math.abs(.01*.004/4*32*1000/.05-6.4)<1e-12);
 const source=JSON.parse(await readFile('src/data/'+names[1]+'.json'));assert.equal(a.draft.scenes.find(s=>s.id==='worked-example').voiceover.text,source.scenes.find(s=>s.id==='worked-example').voiceover.text);
});
test('nutrient snapshot does not invent observations, chronology or required syllabus techniques',async()=>{
 const a=waterHealthArtifacts(names[2],await readFile('src/data/'+names[2]+'.json')),text=JSON.stringify(a.draft);
 assert.match(text,/Invented teaching data/u);assert.match(text,/time sequence/u);assert.match(text,/Living algae/u);assert.match(text,/conductivity/u);
 assert.doesNotMatch(text,/Fish already dying|confirm advanced eutrophication|real monitoring data|200 million|four hundred thousand|syllabus-named|method specifically named/u);
 assert.ok(a.draft.scenes.filter(s=>s.diagram?.kind==='chem12m8WaterBody').every(s=>s.diagram.props.reviewedWaterHealth===true));
});
test('treatment recommendation requires conditions and avoids categorical chloramine or safety advice',async()=>{
 const a=waterHealthArtifacts(names[3],await readFile('src/data/'+names[3]+'.json')),text=JSON.stringify(a.draft);
 assert.match(text,/Primary monochloramination is possible/u);assert.match(text,/NDMA/u);assert.match(text,/before the first customer/u);assert.match(text,/too little evidence/u);
 assert.doesNotMatch(text,/twenty-six times|under 100 dollars|U-V light produces no by-products|chloramines are usually the better|not how much you dosed/u);
 assert.equal(a.draft.scenes.find(s=>s.id==='concept-chlorination').diagram.props.reviewedWaterHealth,true);
});
test('curriculum evidence verifies selected full-text paragraph hashes and preserves source attribution history',async()=>{
 const p=JSON.parse(await readFile('scripts/fixtures/chemistry-curriculum-2017.json'));
 for(const name of names){const c=waterHealthEvidence[name].curriculum;assert.equal(c.syllabusSha256,p.sourceSha256);assert.ok(c.originalSyllabusDotPoints.length);assert.match(c.scope,/No completed practical/u);for(const r of c.publishedReferences){assert.equal(r.text,p.paragraphs.find(x=>x.id===r.id)?.text);assert.equal(hash(r.text),r.textSha256);}}
});
test('renamed original and proposed lessons retain composition-based release holds; unsupported opt-in fails schema',async()=>{
 await mkdir('out/checks',{recursive:true});const dir=await mkdtemp('out/checks/water-health-gate-');try{
  for(const name of names){const bytes=await readFile('src/data/'+name+'.json');for(const content of [bytes,JSON.stringify(waterHealthArtifacts(name,bytes).draft)]){const file=path.join(dir,'assembled.json');await writeFile(file,content);const r=spawnSync(process.execPath,['scripts/release-preflight.mjs',file,'--json'],{encoding:'utf8'});assert.notEqual(r.status,0);assert.match(r.stdout,/WATER_HEALTH_SOURCE_REVIEW_PENDING/u,name);}}
  const a=waterHealthArtifacts(names[3],await readFile('src/data/'+names[3]+'.json'));a.draft.scenes.find(s=>s.id==='concept-train').diagram.props.mode='filter';const file=path.join(dir,'invalid.json');await writeFile(file,JSON.stringify(a.draft));const r=spawnSync(process.execPath,['scripts/validate-lesson.mjs',file],{encoding:'utf8'});assert.notEqual(r.status,0);assert.match(r.stdout+r.stderr,/reviewed water-health|reviewedWaterHealth|train/u);
 }finally{await rm(dir,{recursive:true,force:true});}
});
