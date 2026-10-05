import {analyticalSources,analyticalDraft} from './lib/analytical-inference-lessons.mjs';
import {safetyMedicineSources,safetyMedicineDraft} from './lib/safety-medicine-lessons.mjs';
import {waterHealthSources,waterHealthDraft} from './lib/water-health-lessons.mjs';
import {foundationsSources,foundationsDraft} from './lib/foundations-chemistry-lessons.mjs';
import {execFileSync} from 'node:child_process';
import {mkdir,readFile,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {hash} from './lib/science-audit.mjs';
import {reconciliationRefs as refs,changedNarration,heldScene,audioReferenceStatus} from './lib/pr38-reconciliation.mjs';
import {priorityScienceSources,priorityScienceDraft} from './lib/priority-science-lessons.mjs';
import {medicineSources,medicineDraft} from './lib/medicine-lessons.mjs';
import {indicatorName,indicatorDraft} from './lib/indicator-corrections.mjs';
import {quantitativeSources} from './lib/quantitative-corrections.mjs';
import {biologySources} from './lib/biology-lessons.mjs';
import {thermochemistrySources} from './lib/thermochemistry-lessons.mjs';
import {reconciledChemistrySources,reconciledChemistryScenes} from './lib/reconciled-chemistry-scenes.mjs';
const git=(...args)=>execFileSync('git',args,{maxBuffer:20*1024*1024,stdio:['pipe','pipe','pipe']});
for(const ref of Object.values(refs)){
 try{git('cat-file','-e',ref+'^{commit}');}
 catch{throw new Error('Required history '+ref+' is absent. Fetch full history before reconciling; no source was changed.');}
}
const output=path.resolve(process.argv.find(a=>a.startsWith('--output='))?.slice(9)??'out/review/pr38-reconciliation');
const changed=git('diff','--name-only',refs.base,refs.historicalDraft).toString().trim().split('\n');
const paths=git('ls-tree','-r','--name-only',refs.preservedMain,'src/data').toString().trim().split('\n').filter(f=>f.endsWith('.json'));
const snapshots=[],inventory={},lessons=[],otherFiles=[],queue=[],counts={},orphanedDiagrams=[];
const candidates=indicatorDraft(await readFile('src/data/'+indicatorName+'.json')).draft;
const increment=(o,k)=>{o[k]=(o[k]??0)+1;};
const readAt=(ref,file)=>git('show',ref+':'+file);
const preserved=new Map();
// Git stores LF blobs while .gitattributes deliberately checks out selected
// lessons as CRLF for existing reviewed-source guards. Check canonical blob
// identity AND record the working-byte SHA-256. Never normalise stored lessons.
for(const file of paths){
 const live=await readFile(file),blob=git('hash-object','--path='+file,file).toString().trim();
 const expected=git('rev-parse',refs.preservedMain+':'+file).toString().trim();
 if(blob!==expected)throw new Error('Current catalogue changed: '+file+'. Review the reconciliation rather than refreshing hashes blindly.');
 const lesson=JSON.parse(live);preserved.set(file,{bytes:live,lesson});
 snapshots.push({file,workingSha256:hash(live),gitBlobSha:blob});
 for(const scene of lesson.scenes){
  increment(inventory,audioReferenceStatus(scene));
  if(scene.diagram&&['workedExample','summary'].includes(scene.type))orphanedDiagrams.push({file,scene:scene.id,type:scene.type,diagram:scene.diagram.type});
 }
}
const route=name=>Object.hasOwn(analyticalSources,name)?'new-analytical-inference-package':Object.hasOwn(safetyMedicineSources,name)?'new-safety-medicine-package':Object.hasOwn(waterHealthSources,name)?'new-water-health-package':Object.hasOwn(foundationsSources,name)?'new-foundations-chemistry-package':Object.hasOwn(priorityScienceSources,name)?'new-priority-science-package':Object.hasOwn(medicineSources,name)?'new-isolated-medicine-enrichment-package':Object.hasOwn(biologySources,name)?'newer-biology-package':Object.hasOwn(quantitativeSources,name)?'newer-quantitative-package':Object.hasOwn(thermochemistrySources,name)?'newer-thermochemistry-package':name===indicatorName?'new-isolated-indicator-package':name.startsWith('biology-y11-')?'merged-biology-pr39-intent-review':'historical-proposal-review';
for(const file of changed){
 const oldBytes=readAt(refs.historicalDraft,file),historical=hash(oldBytes);
 const historicalURL='https://github.com/kyleajames33-beep/Lesson-Video-Generator/blob/'+refs.historicalDraft+'/'+file;
 if(file.startsWith('src/data/')&&file.endsWith('.json')){
  const original=JSON.parse(readAt(refs.base,file)),proposed=JSON.parse(oldBytes),current=preserved.get(file);
  if(!current)throw new Error('Changed lesson not in preserved catalogue: '+file);
  const name=path.basename(file,'.json'),disposition=route(name),narration=changedNarration(original,current.lesson,proposed);
  const entry={file,disposition,currentWorkingSha256:hash(current.bytes),historicalBlobSha256:historical,historicalURL,
   productionDecision:'keep-current-main-bytes',narrationChanges:narration,historicalNarrationChangeCount:narration.length,
   remainingWork:disposition==='new-analytical-inference-package'?'Complete guarded analytical-inference proposal integrates applicable C17/C19 scene repairs; catalogue retained and teacher, visual and audio review pending.':disposition==='new-safety-medicine-package'?'Complete guarded separation safety/chirality/delivery proposal prepared; recorded catalogue retained and teacher, visual and audio review pending.':disposition==='new-water-health-package'?'Complete guarded blood-buffer/BOD/nutrient/treatment proposal prepared; recorded catalogue retained and teacher, visual and audio review pending.':disposition==='new-foundations-chemistry-package'?'Complete guarded Gibbs/polymer/acid proposal prepared, preserving recorded catalogue; teacher, visual and audio review pending.':disposition==='new-priority-science-package'?'Complete guarded proposal prepares confirmed science/marking repairs while preserving existing valid fields; source/teacher and visual/media approval pending.':disposition==='new-isolated-medicine-enrichment-package'?'Complete source-checked enrichment proposal prepared; recorded catalogue retained, teacher/specialist review, new voice/cues and actual visual QA pending.':disposition==='new-isolated-indicator-package'?'Review complete replacement proposal; eight changed scenes supersede historical two-scene edit.':
    disposition.startsWith('newer-')?'Compare historical intent with the newer source-hashed unvoiced package; do not replay old catalogue edits.':
    disposition==='merged-biology-pr39-intent-review'?'Review finding semantics against merged Biology fixes. Byte difference alone does not prove a missing fix.':
    'Recheck scientific claims and every affected field against current source before choosing final copy.'};
  lessons.push(entry);
  for(const item of narration){
   increment(counts,current.lesson.subject+':'+item.relation);
   const useNew=name===indicatorName;
   queue.push(heldScene({file,scene:item.scene,sourceSha256:entry.currentWorkingSha256,current:current.lesson.scenes.find(s=>s.id===item.scene),
    proposal:(useNew?candidates:proposed).scenes.find(s=>s.id===item.scene),proposalSource:useNew?'isolated-indicator-package':'historical-pr38',relation:item.relation,disposition}));
  }
 }else{
  let current=null;try{current=hash(readAt(refs.preservedMain,file));}catch{}
  const disposition=file.startsWith('docs/')?'retained-historical-evidence':file.endsWith('lessonRegistry.ts')?'regenerated-current-catalogue':
   file==='scripts/check-render-readiness.mjs'?'delegates-to-current-release-preflight':'preserve-current-component-and-review-historical-diff';
  otherFiles.push({file,disposition,historicalBlobSha256:historical,currentMainBlobSha256:current,historicalURL,historicalDiffSha256:hash(git('diff',refs.base,refs.historicalDraft,'--',file))});
 }
}
const indicatorFile='src/data/'+indicatorName+'.json',active=preserved.get(indicatorFile);
for(const scene of candidates.scenes.filter(s=>s.voiceover)){
 if(queue.some(q=>q.file===indicatorFile&&q.scene===scene.id))continue;
 queue.push(heldScene({file:indicatorFile,scene:scene.id,sourceSha256:hash(active.bytes),current:active.lesson.scenes.find(s=>s.id===scene.id),proposal:scene,
  proposalSource:'isolated-indicator-package',relation:'additional-current-source-correction',disposition:'new-isolated-indicator-package'}));
}
// Source-checked scene amendments replace matching historical candidates;
// unmatched amendments get their own review row, without duplicating IDs.
for(const name of Object.keys(reconciledChemistrySources)){
 const file='src/data/'+name+'.json',current=preserved.get(file);
 for(const amendment of reconciledChemistryScenes(name,current.bytes)){
  const existing=queue.find(q=>q.file===file&&q.scene===amendment.scene.id);
  if(existing){
   existing.candidateTextSha256=hash(amendment.scene.voiceover.text);
   existing.proposalSource='reconciled-chemistry-scene-package';
   existing.disposition='scene-amendment-prepared-full-lesson-integration-pending';
   existing.blockers=existing.blockers.filter(b=>b!=='historical-proposal-not-integrated-with-current-source');
   existing.blockers.unshift('partial-scene-package-whole-lesson-integration-pending');
  }else{
   const entry=heldScene({file,scene:amendment.scene.id,sourceSha256:hash(current.bytes),current:current.lesson.scenes.find(s=>s.id===amendment.scene.id),
    proposal:amendment.scene,proposalSource:'reconciled-chemistry-scene-package',relation:'additional-current-source-correction',
    disposition:'scene-amendment-prepared-full-lesson-integration-pending'});
   entry.blockers.unshift('partial-scene-package-whole-lesson-integration-pending');queue.push(entry);
  }
 }
}
// Complete medicine drafts supersede historical candidates only for the two
// exact hash-guarded lessons. Original intent remains in lessons[].narrationChanges.
for(const name of Object.keys(medicineSources)){
 const file='src/data/'+name+'.json',current=preserved.get(file),draft=medicineDraft(name,current.bytes).draft;
 for(const scene of draft.scenes.filter(s=>s.voiceover)){
  let entry=queue.find(q=>q.file===file&&q.scene===scene.id);
  if(!entry){entry=heldScene({file,scene:scene.id,sourceSha256:hash(current.bytes),current:current.lesson.scenes.find(s=>s.id===scene.id),proposal:scene,proposalSource:'isolated-medicine-enrichment-package',relation:'additional-current-source-correction',disposition:'complete-medicine-enrichment-proposal-prepared'});queue.push(entry);}
  entry.candidateTextSha256=hash(scene.voiceover.text);entry.proposalSource='isolated-medicine-enrichment-package';entry.disposition='complete-medicine-enrichment-proposal-prepared';
  entry.blockers=entry.blockers.filter(b=>!['historical-proposal-not-integrated-with-current-source','prohibited-punctuation-in-historical-candidate'].includes(b));
  entry.blockers.unshift('medicine-teacher-specialist-and-actual-visual-fit-review-pending');
 }
}
// This bounded batch retains already-correct narration in seven scenes while
// replacing residual incorrect fields. Unchanged text is not a regeneration job.
for(const name of Object.keys(priorityScienceSources)){
 const file='src/data/'+name+'.json',current=preserved.get(file),draft=priorityScienceDraft(name,current.bytes).draft;
 for(const scene of draft.scenes.filter(s=>s.voiceover)){
  const sourceScene=current.lesson.scenes.find(s=>s.id===scene.id);
  let entry=queue.find(q=>q.file===file&&q.scene===scene.id);
  if(!entry){entry=heldScene({file,scene:scene.id,sourceSha256:hash(current.bytes),current:sourceScene,proposal:scene,proposalSource:'isolated-priority-science-package',relation:'additional-current-source-correction',disposition:'complete-priority-science-proposal-prepared'});queue.push(entry);}
  entry.candidateTextSha256=hash(scene.voiceover.text);entry.proposalSource='isolated-priority-science-package';entry.disposition='complete-priority-science-proposal-prepared';
  entry.candidateNarrationChanged=scene.voiceover.text!==sourceScene.voiceover?.text;
  if(!entry.candidateNarrationChanged)entry.nextAudioAction='review';
  entry.blockers=entry.blockers.filter(b=>!['historical-proposal-not-integrated-with-current-source','prohibited-punctuation-in-historical-candidate','current-narration-diverged-preserve-main-and-review-intent'].includes(b));
  entry.blockers.unshift('priority-science-source-teacher-and-visual-media-review-pending');
  if(!entry.candidateNarrationChanged)entry.blockers.push('unchanged-narration-reuse-requires-provenance-verification');
 }
}
// Further bounded source proposals supersede historical text, never recorded media.
for(const name of Object.keys(foundationsSources)){
 const file='src/data/'+name+'.json',current=preserved.get(file),draft=foundationsDraft(name,current.bytes).draft;
 for(const scene of draft.scenes.filter(s=>s.voiceover)){
  const sourceScene=current.lesson.scenes.find(s=>s.id===scene.id);
  let entry=queue.find(q=>q.file===file&&q.scene===scene.id);
  if(!entry){entry=heldScene({file,scene:scene.id,sourceSha256:hash(current.bytes),current:sourceScene,proposal:scene,proposalSource:'isolated-foundations-chemistry-package',relation:'additional-current-source-correction',disposition:'complete-foundations-chemistry-proposal-prepared'});queue.push(entry);}
  entry.candidateTextSha256=hash(scene.voiceover.text);entry.proposalSource='isolated-foundations-chemistry-package';entry.disposition='complete-foundations-chemistry-proposal-prepared';
  entry.candidateNarrationChanged=scene.voiceover.text!==sourceScene.voiceover?.text;
  if(!entry.candidateNarrationChanged)entry.nextAudioAction='review';
  entry.blockers=entry.blockers.filter(b=>!['historical-proposal-not-integrated-with-current-source','prohibited-punctuation-in-historical-candidate','current-narration-diverged-preserve-main-and-review-intent'].includes(b));
  entry.blockers.unshift('foundations-source-teacher-and-visual-media-review-pending');
  if(!entry.candidateNarrationChanged)entry.blockers.push('unchanged-narration-reuse-requires-provenance-verification');
 }
}
// Further bounded source proposals supersede historical text, never recorded media.
for(const name of Object.keys(waterHealthSources)){
 const file='src/data/'+name+'.json',current=preserved.get(file),draft=waterHealthDraft(name,current.bytes).draft;
 for(const scene of draft.scenes.filter(s=>s.voiceover)){
  const sourceScene=current.lesson.scenes.find(s=>s.id===scene.id);
  let entry=queue.find(q=>q.file===file&&q.scene===scene.id);
  if(!entry){entry=heldScene({file,scene:scene.id,sourceSha256:hash(current.bytes),current:sourceScene,proposal:scene,proposalSource:'isolated-water-health-package',relation:'additional-current-source-correction',disposition:'complete-water-health-proposal-prepared'});queue.push(entry);}
  entry.candidateTextSha256=hash(scene.voiceover.text);entry.proposalSource='isolated-water-health-package';entry.disposition='complete-water-health-proposal-prepared';
  entry.candidateNarrationChanged=scene.voiceover.text!==sourceScene.voiceover?.text;
  if(!entry.candidateNarrationChanged)entry.nextAudioAction='review';
  entry.blockers=entry.blockers.filter(b=>!['historical-proposal-not-integrated-with-current-source','prohibited-punctuation-in-historical-candidate','current-narration-diverged-preserve-main-and-review-intent'].includes(b));
  entry.blockers.unshift('water-health-source-teacher-and-visual-media-review-pending');
  if(!entry.candidateNarrationChanged)entry.blockers.push('unchanged-narration-reuse-requires-provenance-verification');
 }
}
for(const name of Object.keys(safetyMedicineSources)){
 const file='src/data/'+name+'.json',current=preserved.get(file),draft=safetyMedicineDraft(name,current.bytes).draft;
 for(const scene of draft.scenes.filter(s=>s.voiceover)){
  const sourceScene=current.lesson.scenes.find(s=>s.id===scene.id);
  let entry=queue.find(q=>q.file===file&&q.scene===scene.id);
  if(!entry){entry=heldScene({file,scene:scene.id,sourceSha256:hash(current.bytes),current:sourceScene,proposal:scene,proposalSource:'isolated-safety-medicine-package',relation:'additional-current-source-correction',disposition:'complete-safety-medicine-proposal-prepared'});queue.push(entry);}
  entry.candidateTextSha256=hash(scene.voiceover.text);entry.proposalSource='isolated-safety-medicine-package';entry.disposition='complete-safety-medicine-proposal-prepared';
  entry.candidateNarrationChanged=scene.voiceover.text!==sourceScene.voiceover?.text;
  if(!entry.candidateNarrationChanged)entry.nextAudioAction='review';
  entry.blockers=entry.blockers.filter(b=>!['historical-proposal-not-integrated-with-current-source','prohibited-punctuation-in-historical-candidate','current-narration-diverged-preserve-main-and-review-intent'].includes(b));
  entry.blockers.unshift('safety-medicine-source-teacher-and-visual-media-review-pending');
  if(!entry.candidateNarrationChanged)entry.blockers.push('unchanged-narration-reuse-requires-provenance-verification');
 }
}
for(const name of Object.keys(analyticalSources)){
 const file='src/data/'+name+'.json',current=preserved.get(file),draft=analyticalDraft(name,current.bytes).draft;
 for(const scene of draft.scenes.filter(s=>s.voiceover)){
  const sourceScene=current.lesson.scenes.find(s=>s.id===scene.id);
  let entry=queue.find(q=>q.file===file&&q.scene===scene.id);
  if(!entry){entry=heldScene({file,scene:scene.id,sourceSha256:hash(current.bytes),current:sourceScene,proposal:scene,proposalSource:'isolated-analytical-inference-package',relation:'additional-current-source-correction',disposition:'complete-analytical-inference-proposal-prepared'});queue.push(entry);}
  entry.candidateTextSha256=hash(scene.voiceover.text);entry.proposalSource='isolated-analytical-inference-package';entry.disposition='complete-analytical-inference-proposal-prepared';
  entry.candidateNarrationChanged=scene.voiceover.text!==sourceScene.voiceover?.text;
  if(!entry.candidateNarrationChanged)entry.nextAudioAction='review';
  entry.blockers=entry.blockers.filter(b=>!['historical-proposal-not-integrated-with-current-source','prohibited-punctuation-in-historical-candidate','current-narration-diverged-preserve-main-and-review-intent','partial-scene-package-whole-lesson-integration-pending'].includes(b));
  entry.blockers.unshift('analytical-inference-source-teacher-and-visual-media-review-pending');
  if(!entry.candidateNarrationChanged)entry.blockers.push('unchanged-narration-reuse-requires-provenance-verification');
 }
}
// These are source-confirmed renderer gaps, not narration-change requests.
for(const item of orphanedDiagrams){
 const current=preserved.get(item.file),scene=current.lesson.scenes.find(s=>s.id===item.scene);
 if(queue.some(q=>q.file===item.file&&q.scene===item.scene))continue;
 const entry=heldScene({file:item.file,scene:item.scene,sourceSha256:hash(current.bytes),current:scene,proposal:scene,
  proposalSource:'renderer-gap-current-main',relation:'unchanged-narration-renderer-gap',disposition:'renderer-integration-and-visual-review-required'});
 entry.nextAudioAction='review';entry.blockers.unshift('authored-diagram-not-rendered-by-current-slide');
 queue.push(entry);
}
queue.sort((a,b)=>a.file.localeCompare(b.file)||a.scene.localeCompare(b.scene));
const handoff=JSON.parse(await readFile('docs/content-corrections-audio-handoff-2026-09-30.json'));
const actual=lessons.flatMap(l=>l.narrationChanges.map(s=>l.file+'#'+s.scene)).sort(),old=handoff.scenes.map(s=>s.file+'#'+s.scene).sort();
if(JSON.stringify(actual)!==JSON.stringify(old))throw new Error('Historical handoff differs from actual Git narration delta');
const semantic=JSON.parse(await readFile('docs/production/pr38-semantic-review-2026-10-04.json'));
if(semantic.preservedMain!==refs.preservedMain)throw new Error('Semantic review baseline differs');
for(const finding of semantic.findings)for(const source of finding.currentSources){
 if(hash(await readFile(source.file))!==source.workingSha256)throw new Error('Semantic review source changed: '+source.file);
}
for(const lesson of lessons)lesson.semanticFindings=semantic.findings.filter(f=>f.currentSources.some(s=>s.file===lesson.file)).map(f=>({key:f.key,status:f.status,remedyStatus:f.remedyStatus,scope:f.scenes}));
for(const item of queue){
 item.semanticFindings=semantic.findings.filter(f=>f.currentSources.some(s=>s.file===item.file)&&f.scenes.includes(item.scene)).map(f=>({key:f.key,status:f.status,remedyStatus:f.remedyStatus}));
 item.semanticScope='Links concern specified original claims, not all words in this scene. Absence of a link is unverified, not proof of correctness.';
 item.status='not-approved-for-production';
 item.audioActionOnlyIfCandidateAdopted=item.nextAudioAction;delete item.nextAudioAction;
}

const report={schemaVersion:1,refs,scope:'Historical PR #38 intent reconciliation against exact current catalogue. Not audio-generation or release approval.',
 sourceLessonsModified:false,mediaInspected:false,audioGenerated:false,rendered:false,
 summary:{historicalChangedFiles:changed.length,historicalLessonFiles:lessons.length,historicalNarrationLessons:lessons.filter(l=>l.narrationChanges.length).length,
  historicalNarrationScenes:actual.length,historicalNarrationRelations:counts,preservedCatalogueLessons:snapshots.length,catalogueNarrationReferences:inventory,
  reviewEntryCount:queue.length,semanticFindingCounts:semantic.counts,approvedGenerationScenes:0,approvedRegenerationScenes:0},
 warning:'323 is historical, not an executable queue. Reference hashes are metadata only; media existence, speech contents and release evidence are not established.',
 openPullRequests:[
  {number:38,decision:'Continue existing draft with current-main preservation and explicit historical intent dispositions.'},
  {number:37,decision:'Audit documents retained in #38; do not merge overlapping audit branch independently.'},
  {number:36,decision:'Historical fixes remain traceable. Old readiness command delegates to current gate. Do not merge independently.'},
  {number:35,decision:'Current registry already registers 308 lessons. Historical registry-only branch is not a required generation step.'},
  {number:1,decision:'Current WorkedExample/Summary slides omit DiagramRenderer and validator omits host checks. Five authored scenes are affected. Old layout patch requires scoped integration and fresh visual QA.',orphanedDiagrams},
 ],catalogueSnapshot:snapshots,lessons,otherFiles,reviewEntries:queue,
 semanticReview:'docs/production/pr38-semantic-review-2026-10-04.json',
 audioGenerationQueue:semantic.audioGenerationQueue,
 interpretation:'The review entries preserve all prior intent and selected new findings. They are not unresolved-defect or audio-job counts. Use the semantic finding dispositions and approve final source before any generation.'};
await mkdir(output,{recursive:true});const encode=v=>JSON.stringify(v,null,2)+'\n';
await writeFile(path.join(output,'reconciliation.json'),encode(report));
if(process.argv.includes('--write-snapshot'))await writeFile('docs/production/pr38-reconciliation-2026-10-04.json',encode(report));
if(process.argv.includes('--check-snapshot')&&encode(report)!==await readFile('docs/production/pr38-reconciliation-2026-10-04.json','utf8'))throw new Error('Reconciliation snapshot changed');
if(process.argv.includes('--export-historical')){
 const archive=path.join(output,'historical-source');await mkdir(archive,{recursive:true});
 for(const item of lessons)await writeFile(path.join(archive,path.basename(item.file)+'.historical'),readAt(refs.historicalDraft,item.file));
 await writeFile(path.join(archive,'README.txt'),'Exact historical source bytes for diff/review only. Not current lessons or unvoiced drafts. Never feed this folder to TTS or rendering. See ../reconciliation.json for current hashes, conflicts and dispositions.\n');
}
console.log(JSON.stringify(report.summary,null,2));
