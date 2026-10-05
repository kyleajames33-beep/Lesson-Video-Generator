import {analyticalSources,analyticalArtifacts} from './lib/analytical-inference-lessons.mjs';
import {safetyMedicineSources,safetyMedicineArtifacts} from './lib/safety-medicine-lessons.mjs';
import {waterHealthSources,waterHealthArtifacts} from './lib/water-health-lessons.mjs';
import {foundationsSources,foundationsArtifacts} from './lib/foundations-chemistry-lessons.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {hash} from './lib/science-audit.mjs';
import {changedNarration,narrationRelation,audioReferenceStatus,heldScene,reconciliationRefs} from './lib/pr38-reconciliation.mjs';
import {priorityScienceSources,priorityScienceArtifacts} from './lib/priority-science-lessons.mjs';
import {medicineSources,medicineArtifacts} from './lib/medicine-lessons.mjs';
import {indicatorArtifacts,indicatorName} from './lib/indicator-corrections.mjs';
import {reconciledChemistrySources,reconciledChemistryScenes} from './lib/reconciled-chemistry-scenes.mjs';
const snapshot=JSON.parse(await readFile('docs/production/pr38-reconciliation-2026-10-04.json'));
test('reconciliation pins all current catalogue bytes and preserves the complete historical handoff',async()=>{
 assert.deepEqual(snapshot.refs,reconciliationRefs);assert.equal(snapshot.catalogueSnapshot.length,308);
 for(const item of snapshot.catalogueSnapshot)assert.equal(hash(await readFile(item.file)),item.workingSha256,item.file);
 const old=JSON.parse(await readFile('docs/content-corrections-audio-handoff-2026-09-30.json'));
 const expected=old.scenes.map(s=>s.file+'#'+s.scene).sort(),actual=snapshot.lessons.flatMap(l=>l.narrationChanges.map(s=>l.file+'#'+s.scene)).sort();
 assert.deepEqual(actual,expected);assert.equal(actual.length,323);assert.equal(snapshot.lessons.length,108);assert.equal(snapshot.otherFiles.length,17);
 assert.ok(snapshot.lessons.every(l=>l.productionDecision==='keep-current-main-bytes'));
});
test('queue is exact, deduplicated, current-source linked and never authorises generation',async()=>{
 const seen=new Set(),historical=new Map(snapshot.lessons.flatMap(l=>l.narrationChanges.map(s=>[l.file+'#'+s.scene,s.historicalTextSha256])));
 const amendments=new Map();
 for(const name of Object.keys(reconciledChemistrySources)){
  const source='src/data/'+name+'.json';
  for(const item of reconciledChemistryScenes(name,await readFile(source)))amendments.set(source+'#'+item.scene.id,hash(item.scene.voiceover.text));
 }
 const analytical=new Map();
 for(const name of Object.keys(analyticalSources)){const file='src/data/'+name+'.json';for(const scene of analyticalArtifacts(name,await readFile(file)).draft.scenes.filter(s=>s.voiceover))analytical.set(file+'#'+scene.id,hash(scene.voiceover.text));}
 const safetyMedicine=new Map();
 for(const name of Object.keys(safetyMedicineSources)){const file='src/data/'+name+'.json';for(const scene of safetyMedicineArtifacts(name,await readFile(file)).draft.scenes.filter(s=>s.voiceover))safetyMedicine.set(file+'#'+scene.id,hash(scene.voiceover.text));}
 const waterHealth=new Map();
 for(const name of Object.keys(waterHealthSources)){const file='src/data/'+name+'.json';for(const scene of waterHealthArtifacts(name,await readFile(file)).draft.scenes.filter(s=>s.voiceover))waterHealth.set(file+'#'+scene.id,hash(scene.voiceover.text));}
 const foundations=new Map();
 for(const name of Object.keys(foundationsSources)){const file='src/data/'+name+'.json';for(const scene of foundationsArtifacts(name,await readFile(file)).draft.scenes.filter(s=>s.voiceover))foundations.set(file+'#'+scene.id,hash(scene.voiceover.text));}
 const priority=new Map();
 for(const name of Object.keys(priorityScienceSources)){const file='src/data/'+name+'.json';for(const scene of priorityScienceArtifacts(name,await readFile(file)).draft.scenes.filter(s=>s.voiceover))priority.set(file+'#'+scene.id,hash(scene.voiceover.text));}
 const medicine=new Map();
 for(const name of Object.keys(medicineSources)){const file='src/data/'+name+'.json';for(const scene of medicineArtifacts(name,await readFile(file)).draft.scenes.filter(s=>s.voiceover))medicine.set(file+'#'+scene.id,hash(scene.voiceover.text));}
 const indicator=indicatorArtifacts(await readFile('src/data/'+indicatorName+'.json')).draft;
 const allKeys=new Set([...historical.keys(),...medicine.keys(),...priority.keys(),...foundations.keys(),...waterHealth.keys(),...safetyMedicine.keys(),...analytical.keys(),...indicator.scenes.filter(s=>s.voiceover).map(s=>'src/data/'+indicatorName+'.json#'+s.id),...snapshot.openPullRequests.find(p=>p.number===1).orphanedDiagrams.map(s=>s.file+'#'+s.scene)]);
 assert.equal(snapshot.reviewEntries.length,allKeys.size);
 for(const q of snapshot.reviewEntries){
  const key=q.file+'#'+q.scene;assert.ok(!seen.has(key));seen.add(key);
  const bytes=await readFile(q.file),scene=JSON.parse(bytes).scenes.find(s=>s.id===q.scene);
  assert.equal(hash(bytes),q.sourceSha256);assert.equal(scene?.voiceover?.text?hash(scene.voiceover.text):null,q.sourceTextSha256);
  assert.equal(q.status,'not-approved-for-production');assert.equal(q.canExecute,false);assert.ok(q.blockers.length);
  const expected=q.proposalSource==='isolated-indicator-package'?hash(indicator.scenes.find(s=>s.id===q.scene).voiceover.text):
   q.proposalSource==='isolated-analytical-inference-package'?analytical.get(key):q.proposalSource==='isolated-safety-medicine-package'?safetyMedicine.get(key):q.proposalSource==='isolated-water-health-package'?waterHealth.get(key):q.proposalSource==='isolated-foundations-chemistry-package'?foundations.get(key):q.proposalSource==='isolated-priority-science-package'?priority.get(key):q.proposalSource==='isolated-medicine-enrichment-package'?medicine.get(key):q.proposalSource==='reconciled-chemistry-scene-package'?amendments.get(key):q.proposalSource==='renderer-gap-current-main'?hash(scene.voiceover.text):historical.get(key);
  assert.equal(q.candidateTextSha256,expected,key);
  if(['isolated-priority-science-package','isolated-foundations-chemistry-package','isolated-water-health-package','isolated-safety-medicine-package','isolated-analytical-inference-package'].includes(q.proposalSource)&&!q.candidateNarrationChanged){assert.equal(q.sourceTextSha256,q.candidateTextSha256);assert.equal(q.audioActionOnlyIfCandidateAdopted,'review');}
 }
 for(const name of Object.keys(waterHealthSources)){const l=snapshot.lessons.find(l=>l.file==='src/data/'+name+'.json');assert.equal(l.disposition,'new-water-health-package');assert.match(l.remainingWork,/Complete guarded blood-buffer/u);assert.match(l.remainingWork,/review pending/u);}
 for(const name of Object.keys(safetyMedicineSources)){const l=snapshot.lessons.find(l=>l.file==='src/data/'+name+'.json');assert.equal(l.disposition,'new-safety-medicine-package');assert.match(l.remainingWork,/Complete guarded separation safety/u);assert.match(l.remainingWork,/review pending/u);}
 for(const name of Object.keys(analyticalSources)){const l=snapshot.lessons.find(l=>l.file==='src/data/'+name+'.json');assert.equal(l.disposition,'new-analytical-inference-package');assert.match(l.remainingWork,/Complete guarded analytical-inference/u);assert.match(l.remainingWork,/review pending/u);}
 assert.equal(snapshot.summary.reviewEntryCount,allKeys.size);assert.deepEqual(snapshot.audioGenerationQueue.generate,[]);assert.deepEqual(snapshot.audioGenerationQueue.regenerate,[]);
});
test('narration reconciliation distinguishes already-applied, unchanged and conflicting text',()=>{
 assert.equal(narrationRelation('old','new','new'),'same-as-proposal');
 assert.equal(narrationRelation('old','old','new'),'current-retains-baseline-text');
 assert.equal(narrationRelation('old','newer','new'),'current-diverged-from-both');
 const scene=text=>({id:'hook',voiceover:{text}}),lesson=text=>({scenes:[scene(text)]});
 assert.equal(changedNarration(lesson('old'),lesson('newer'),lesson('new'))[0].relation,'current-diverged-from-both');
 assert.throws(()=>changedNarration({scenes:[scene('a'),scene('b')]},lesson('a'),lesson('c')),/Duplicate/u);
 const old=scene('old');old.voiceover.audioFile='hook.'+hash('old').slice(0,12)+'.mp3';
 assert.equal(audioReferenceStatus(old),'text-hash-matches-reference');old.voiceover.text='new';assert.equal(audioReferenceStatus(old),'stale-text-hash-reference');
 const held=heldScene({file:'src/data/example.json',scene:'hook',sourceSha256:'x',current:old,proposal:scene('updated'),proposalSource:'historical-pr38',relation:'current-diverged-from-both'});
 assert.equal(held.status,'hold');assert.equal(held.nextAudioAction,'regenerate');assert.ok(held.blockers.some(b=>b.startsWith('current-narration-diverged')));
});
test('five authored WorkedExample/Summary diagrams stay held until current slide integration is reviewed',async()=>{
 const gaps=snapshot.openPullRequests.find(p=>p.number===1).orphanedDiagrams;assert.equal(gaps.length,5);
 for(const g of gaps){
  const scene=JSON.parse(await readFile(g.file)).scenes.find(s=>s.id===g.scene);
  assert.equal(scene.diagram.type,g.diagram);assert.equal(scene.type,g.type);
  const q=snapshot.reviewEntries.find(q=>q.file===g.file&&q.scene===g.scene);assert.ok(q.blockers.includes('authored-diagram-not-rendered-by-current-slide'));assert.equal(q.audioActionOnlyIfCandidateAdopted,'review');
 }
 for(const file of ['WorkedExampleSlide.tsx','SummarySlide.tsx'])assert.doesNotMatch(await readFile('src/slides/'+file,'utf8'),/DiagramRenderer/u,'Renderer changed: refresh the explicit gap policy and evidence.');
});

test('semantic dispositions cover all original findings without converting unresolved or historical intent into an audio queue',async()=>{
 const semantic=JSON.parse(await readFile('docs/production/pr38-semantic-review-2026-10-04.json'));
 assert.equal(semantic.findings.length,99);assert.equal(new Set(semantic.findings.map(f=>f.key)).size,99);
 const counts={};for(const finding of semantic.findings){
  counts[finding.status]=(counts[finding.status]??0)+1;
  const currentLocations=new Set();
  for(const source of finding.currentSources){const bytes=await readFile(source.file);assert.equal(hash(bytes),source.workingSha256);const lesson=JSON.parse(bytes);for(const key of Object.keys(lesson))currentLocations.add(key);for(const scene of lesson.scenes)currentLocations.add(scene.id);}
  for(const location of finding.scenes)assert.ok(currentLocations.has(location),finding.key+' has no current source location '+location);
  assert.equal(finding.releaseApproved,false);
 }
 assert.deepEqual(counts,semantic.counts);assert.deepEqual(snapshot.summary.semanticFindingCounts,counts);
 assert.equal(semantic.findings.find(f=>f.key==='original:A01').status,'resolved-original-claim');
 assert.equal(semantic.findings.find(f=>f.key==='original:A05').status,'mixed-residual');
 assert.equal(semantic.findings.find(f=>f.key==='chemistry:C34').remedyStatus,'superseded-by-new-complete-indicator-proposal');
 assert.deepEqual(snapshot.audioGenerationQueue.ready,[]);
});

test('remedy inventory is source-linked, exhaustive and separates substantive residuals from production readiness',async()=>{
 const bytes=await readFile('docs/production/pr38-semantic-review-2026-10-04.json'),semantic=JSON.parse(bytes),inventory=JSON.parse(await readFile('docs/production/source-remedy-inventory-2026-10-04.json'));
 assert.equal(inventory.semanticLedgerSha256,hash(bytes));assert.equal(inventory.preservedCatalogue,reconciliationRefs.preservedMain);
 const entries=Object.values(inventory.categories).flat();assert.equal(entries.length,99);assert.equal(new Set(entries.map(e=>e.key)).size,99);
 for(const e of entries){const f=semantic.findings.find(f=>f.key===e.key);assert.equal(e.sourceStatus,f.status);assert.equal(e.remedyStatus,f.remedyStatus);assert.deepEqual(e.lessonPrefixes,f.lessonPrefixes);}
 for(const [k,list]of Object.entries(inventory.categories))assert.equal(inventory.counts[k],list.length);
 assert.deepEqual(inventory.counts,{narrowClaimResolvedInMain:7,coveredByCompleteIsolatedProposals:31,coveredByPartialSceneProposals:1,unaddressedSubstantiveResidual:51,unaddressedNarrowQualification:8,unverifiedCorrespondence:1});
 assert.ok(inventory.categories.unaddressedSubstantiveResidual.some(e=>e.key==='chemistry:C10'));
 assert.deepEqual(inventory.categories.coveredByPartialSceneProposals.map(e=>e.key),['chemistry:C28']);
 assert.deepEqual(snapshot.audioGenerationQueue.ready,[]);
});
