import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,mkdir,mkdtemp,writeFile,rm} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import path from 'node:path';
import {analyticalSources,analyticalArtifacts,validateAnalyticalArtifacts,analyticalEvidence,weakAcidTitrationPH,assertAnalyticalDraft} from './lib/analytical-inference-lessons.mjs';
import {reconciledChemistryScenes} from './lib/reconciled-chemistry-scenes.mjs';
import {titrantVolumeAtPH} from './lib/indicator-corrections.mjs';
import {getVoiceoverBudget} from './lesson-utils.mjs';
import {hash} from './lib/science-audit.mjs';
const names=Object.keys(analyticalSources),counts=[[10,9,8,10],[10,9,7,10],[9,8,8,9],[9,8,8,9],[11,10,10,11]];
for(const [i,name]of names.entries()){
 const bytes=await readFile('src/data/'+name+'.json'),original=JSON.parse(bytes);
 test(name+': full guarded proposal preserves scene identities, images and duration floors',()=>{
  const a=analyticalArtifacts(name,bytes),[scenes,narratedScenes,narrationChanges,takes]=counts[i];assert.deepEqual(validateAnalyticalArtifacts(name,bytes,a),{scenes,narratedScenes,narrationChanges,takes});
  assert.deepEqual(a.draft.scenes.map(s=>[s.id,s.type,s.image,s.diagram?.kind??s.diagram?.type]),original.scenes.map(s=>[s.id,s.type,s.image,s.diagram?.kind??s.diagram?.type]));
  for(const s of a.draft.scenes){assert.ok(s.durationInFrames>=original.scenes.find(o=>o.id===s.id).durationInFrames);if(s.voiceover)assert.equal(getVoiceoverBudget({text:s.voiceover.text,durationInFrames:s.durationInFrames,fps:a.draft.fps}).status,'ok');}
  const p=a.pacing.scenes.find(p=>p.response),ts=a.takes.takes.filter(t=>t.scene===p.scene);assert.deepEqual(ts.map(t=>t.phase),['prompt','answer']);assert.equal(a.draft.scenes.find(s=>s.id===p.scene).voiceover.text,ts.map(t=>t.text).join(' '));assert.ok(p.response.minimumThinkingSeconds>=40);
  assert.equal(a.changes.filter(c=>c.field.endsWith('.voiceover.text')).length,narrationChanges);assert.equal(a.review.scienceApproval,false);assert.equal(a.takes.generationAuthorised,false);assert.equal(a.draft.syllabusVersion,original.syllabusVersion);
 });
 test(name+': source drift, inherited cues and export/approval tampering fail closed',()=>{
  assert.throws(()=>analyticalArtifacts(name,Buffer.concat([bytes,Buffer.from(' ')])),/source changed/u);
  for(const edit of [a=>a.draft.scenes[1].voiceover.audioFile='old.wav',a=>a.draft.scenes[1].captions=[],a=>a.draft.scenes[1].delay=0,a=>a.draft.scenes[1].diagram={props:{beat:1}},a=>a.takes.takes.reverse(),a=>a.review.scienceApproval=true,a=>a.takes.generationAuthorised=true,a=>a.pacing.scenes.find(p=>p.response).response.minimumThinkingSeconds=0,a=>a.draft.scenes[1].voiceover.text='changed']){const a=analyticalArtifacts(name,bytes);edit(a);assert.throws(()=>validateAnalyticalArtifacts(name,bytes,a));}
 });
}
test('C17/C19 partial scientific text is integrated exactly into complete lessons',async()=>{
 for(const name of names.slice(0,2)){
  const bytes=await readFile('src/data/'+name+'.json'),a=analyticalArtifacts(name,bytes);
  for(const r of reconciledChemistryScenes(name,bytes)){const integrated=a.draft.scenes.find(s=>s.id===r.scene.id);assert.equal(integrated.voiceover.text,r.scene.voiceover.text);if(r.scene.steps)assert.deepEqual(integrated.steps,r.scene.steps);if(r.scene.question)assert.equal(integrated.question,r.scene.question);}
 }
 const c17=.1*((18.45+18.50+18.48)/3)/25,c19=.1*((22.3+22.4+22.3)/3)/25;
 assert.equal(c17.toPrecision(4),'0.07391');assert.equal(c19.toPrecision(3),'0.0893');
 const report=JSON.parse(await readFile('docs/production/pr38-reconciliation-2026-10-04.json'));
 for(const q of report.reviewEntries.filter(q=>names.slice(0,2).some(n=>q.file==='src/data/'+n+'.json'))){assert.equal(q.proposalSource,'isolated-analytical-inference-package');assert.ok(!q.blockers.includes('partial-scene-package-whole-lesson-integration-pending'));}
});
test('unknown burette concentration uses its own titre and correct standard identity',async()=>{
 const a=analyticalArtifacts(names[1],await readFile('src/data/'+names[1]+'.json')),text=JSON.stringify(a.draft);
 assert.doesNotMatch(text,/never the titre|acid is the standard being delivered|titre is the standard.s volume|aliquot for the unknown, the titre for the standard/u);
 assert.match(text,/unknown can be in either vessel/u);assert.match(text,/sodium carbonate preparation is the standard/u);
 const molarMass=2*22.99+12.011+3*15.999,c=2*(.530/molarMass)*(.025/.100)/.0245;assert.ok(Math.abs(molarMass-105.988)<1e-10);assert.equal(c.toPrecision(3),'0.102');
});
test('independent weak-acid hydrolysis and forward-substitution checks certify model values, not pH-bound averages',()=>{
 for(const [volumeMl,pKa,expectedEq,expectedHalf]of [[25,4.74,8.719541263730576,4.740473640488018],[30,4.2,8.449746648240442,4.201637936424541]]){
  const eq=weakAcidTitrationPH(volumeMl,{volumeMl,pKa}),half=weakAcidTitrationPH(volumeMl/2,{volumeMl,pKa});assert.ok(Math.abs(eq-expectedEq)<1e-10);assert.ok(Math.abs(half-expectedHalf)<1e-10);
  const ka=10**-pKa,kb=1e-14/ka,c=.05,oh=2*kb*c/(Math.sqrt(kb*kb+4*kb*c)+kb),hydrolysis=14+Math.log10(oh);assert.ok(Math.abs(eq-hydrolysis)<.001);
  const h=10**-eq;assert.ok(Math.abs(h+.05-1e-14/h-.05*ka/(ka+h))<1e-12);
  assert.ok(Math.abs(half-pKa)<.002);assert.notEqual(half,pKa,'half-neutralisation equality is approximate');
  for(const pH of [8.3,10]){const v=titrantVolumeAtPH(pH,{volumeMl,ka});assert.ok(Math.abs(weakAcidTitrationPH(v,{volumeMl,pKa})-pH)<1e-9);}
 }
 assert.ok(Math.abs(weakAcidTitrationPH(25)-(7.5+11.5)/2)>.7);
 for(const x of [[-1,{}],[1,{volumeMl:0}],[1,{acidM:0}],[1,{pKa:NaN}],[1,{kw:0}]])assert.throws(()=>weakAcidTitrationPH(...x));
});
test('indicator example checks the specified endpoint volume instead of exact-pH bracketing',()=>{
 const v=titrantVolumeAtPH(9),error=v-25;assert.ok(Math.abs(v-25.005000000025)<1e-7);assert.ok(error<.02);assert.ok(titrantVolumeAtPH(10)-25>.02,'a different endpoint can fail a tighter criterion');
 const weak=titrantVolumeAtPH(10,{volumeMl:30,ka:10**-4.2});assert.ok(Math.abs(weak-30.060012405625194)<1e-10);assert.ok(weak-30<.1);
});
test('curve proposals remove false midpoint/indicator flags and retain only explicitly new stationary review cues',async()=>{
 for(const name of names.slice(2,4)){const a=analyticalArtifacts(name,await readFile('src/data/'+name+'.json'));
  for(const s of a.draft.scenes.filter(s=>s.diagram?.kind==='chem12m6TitrationCurve')){const p=s.diagram.props;assert.equal(p.reviewedAnalytical,true);assert.equal(p.jumpRead,undefined);assert.equal(p.wrongPins,undefined);assert.ok(p.series.every(x=>x.at===0));assert.ok(Object.values(p.markers??{}).every(x=>x===0));assert.ok((p.bands??[]).every(x=>x.at===0&&!Object.hasOwn(x,'wrong')));const b=structuredClone(a);b.draft.scenes.find(x=>x.id===s.id).diagram.props.series[0].at=1;assert.throws(()=>assertAnalyticalDraft(b.draft),/Inherited analytical-inference media\/cue/u);}
 }
});
test('qualitative candidate/controls and no-direct-smell boundary make the inference explicit',async()=>{
 const a=analyticalArtifacts(names[4],await readFile('src/data/'+names[4]+'.json')),text=JSON.stringify(a.draft),q=a.draft.scenes.find(s=>s.id==='quick-check');
 assert.match(text,/dilute HNO₃/u);assert.match(text,/separate aliquots/iu);assert.match(text,/Never smell gases directly/u);assert.match(q.voiceover.text,/Neither identification is unique/u);assert.match(text,/one cation from copper two, iron two or iron three/u);assert.match(text,/Hydrogencarbonate/u);assert.match(text,/initial milky or cloudy limewater response/u);
 assert.doesNotMatch(q.voiceover.text,/the ions are magnesium and sulfate/u);assert.ok(a.draft.scenes.filter(s=>['chem12m8TubeTests','chem12m8FlameTests'].includes(s.diagram?.kind)).every(s=>s.diagram.props.reviewedAnalytical));
});
test('curriculum evidence retains source hierarchy and distinguishes examples from completed practicals',async()=>{
 const fixture=JSON.parse(await readFile('scripts/fixtures/chemistry-curriculum-2017.json'));
 for(const name of names){const c=analyticalEvidence[name].curriculum;assert.equal(c.syllabusSha256,fixture.sourceSha256);for(const r of c.publishedReferences){assert.equal(r.text,fixture.paragraphs.find(p=>p.id===r.id)?.text);assert.equal(hash(r.text),r.textSha256);}}
 const q=analyticalEvidence[names[4]].curriculum;assert.ok(q.publishedReferences.some(r=>r.id==='p1287'));assert.ok(q.publishedReferences.some(r=>r.id==='p1288'));assert.ok(q.publishedReferences.some(r=>r.id==='p1289'));
});
test('renamed legacy and full proposals retain source holds; unsupported analytical opt-in fails schema',async()=>{
 await mkdir('out/checks',{recursive:true});const dir=await mkdtemp('out/checks/analytical-gate-');try{
  for(const name of names){const bytes=await readFile('src/data/'+name+'.json');for(const content of [bytes,JSON.stringify(analyticalArtifacts(name,bytes).draft)]){const file=path.join(dir,'assembled.json');await writeFile(file,content);const r=spawnSync(process.execPath,['scripts/release-preflight.mjs',file,'--json'],{encoding:'utf8'});assert.notEqual(r.status,0);assert.match(r.stdout,/ANALYTICAL_SOURCE_REVIEW_PENDING/u,name);}}
  const a=analyticalArtifacts(names[2],await readFile('src/data/'+names[2]+'.json'));a.draft.scenes.find(s=>s.id==='concept-reading').diagram.props.jumpRead={lo:7.5,hi:11.5,at:0};const file=path.join(dir,'invalid.json');await writeFile(file,JSON.stringify(a.draft));const r=spawnSync(process.execPath,['scripts/validate-lesson.mjs',file],{encoding:'utf8'});assert.notEqual(r.status,0);assert.match(r.stdout+r.stderr,/rejects jumpRead/u);
 }finally{await rm(dir,{recursive:true,force:true});}
});
