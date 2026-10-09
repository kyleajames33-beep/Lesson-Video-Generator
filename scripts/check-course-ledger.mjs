import {readFileSync, existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {checkProductionBrief} from './lib/production-brief.mjs';
const file=process.argv[2]??'docs/production/course-progression-ledger-2026-10-09.json';
const raw=readFileSync(file,'utf8'), ledger=JSON.parse(raw);
const blockers=[], warnings=[];
const hash=file=>createHash('sha256').update(readFileSync(file)).digest('hex');
const require=(condition,message)=>{if(!condition)blockers.push(message);};
require(ledger.schemaVersion===1,'Unsupported schema.');
require(!raw.includes('\u2014'),'Prohibited punctuation in ledger.');
require(ledger.inventory.length===308 && new Set(ledger.inventory.map(row=>row.id)).size===308,'Registry coverage or duplicate IDs need review.');
for(const subject of ['Chemistry','Biology']) for(const [version,total] of [['2017',8],['2025',7]]) require(ledger.areas.filter(row=>row.subject===subject&&row.version===version).length===total,subject+' '+version+': missing/extra major-area rows.');
require(new Set(ledger.areas.map(row=>row.id)).size===30,'Major-area IDs must be unique.');
const inventoryIds=new Set(ledger.inventory.map(row=>row.id));
if(ledger.mandatoryActionChecklist)require(existsSync(ledger.mandatoryActionChecklist.path)&&hash(ledger.mandatoryActionChecklist.path)===ledger.mandatoryActionChecklist.sha256,'Mandatory action checklist missing/drifted; regenerate the ledger deliberately after its mapping changes.');
for(const row of ledger.inventory){
  require(existsSync(row.sourcePath)&&hash(row.sourcePath)===row.sourceSha256,row.id+': current source changed or missing. Regenerate and reconcile selected review.');
  if(row.selectedRevision)require(existsSync(row.selectedRevision.path)&&hash(row.selectedRevision.path)===row.selectedRevision.sha256,row.id+': selected revision changed or missing.');
  require(row.curriculum.fullRequiredActionCoverage==='not-established',row.id+': approved coverage requires a new evidenced mapping schema, not a status toggle.');
  if(row.publication)require(Boolean(row.publication.basis)&&existsSync(row.publication.basis),row.id+': publication state needs a saved evidence source.');
}
for(const area of ledger.areas){
  require(area.approvedCoverage===false&&area.coverageStatus==='required-action-and-scene-audit-pending',area.id+': no unsupported course-completion claims.');
  require(area.candidateSourceIds.every(id=>inventoryIds.has(id)),area.id+': candidate not in registry.');
  require(area.majorTeachingGroups.length>0&&Boolean(area.nextAction),area.id+': missing scope/next work.');
  if(area.version==='2025'){
    const cached='out/research/continuity-2026-10-08/'+area.subject.toLowerCase()+'-'+area.areaId+'.html';
    if(existsSync(cached)){
      const title=readFileSync(cached,'utf8').match(/<title>([^<]+)<\/title>/)?.[1]??'';
      const normal=value=>value.toLowerCase().replaceAll('–','-');
      require(normal(title).includes(normal(area.title)),area.id+': URL/cache title does not match the focus area.');
    } else warnings.push(area.id+': cached page absent; check official focus-area URL manually.');
  }
}
const runIds=new Set(ledger.immediateChemistry.map(row=>row.id));
for(const row of ledger.immediateChemistry){
  require(Boolean(row.start&&row.stop&&row.excluded&&row.nextHandoff),row.id+': incomplete start/stop/handoff.');
  require(row.next===null||runIds.has(row.next),row.id+': next handoff missing from immediate route.');
  if(row.sourcePath)require(existsSync(row.sourcePath)&&hash(row.sourcePath)===row.sourceSha256,row.id+': immediate source drifted.');
  if(row.briefPath)require(existsSync(row.briefPath),row.id+': selected brief missing.');
}
const links=new Map(ledger.immediateChemistry.map(row=>[row.id,row.next]));
for(const start of runIds){let next=start;const seen=new Set();while(next){if(seen.has(next)){blockers.push('Next-handoff cycle at '+start);break;}seen.add(next);next=links.get(next);}}
for(const input of ledger.inputs)if(!existsSync(input.path)||hash(input.path)!==input.sha256)warnings.push(input.path+': planning evidence changed; regenerate deliberately and review status differences.');
const empirical=ledger.immediateChemistry.find(row=>row.id==='empirical-formulas');
require(['corrected-silent-draft-review-pending','organised-silent-draft-review-pending','organised-silent-draft-source-reviewed-recording-ready'].includes(empirical.productionState),'Next empirical draft must not be silently marked recorded or approved.');
if(empirical.productionState==='organised-silent-draft-source-reviewed-recording-ready'){
 const report=checkProductionBrief(process.cwd(),empirical.briefPath,{stage:'recording'});
 require(report.ready,'Recording-ready empirical state requires the current source-reviewed recording-stage brief.');
 if(report.source){const draft=JSON.parse(readFileSync(report.source.lessonPath,'utf8'));require(draft.scenes.every(scene=>!scene.voiceover?.audioFile&&!scene.captions),'Silent empirical draft must not contain stale audio or captions.');}
}
require(!ledger.immediateChemistry.find(row=>row.id==='mole-ratios').prerequisites.includes('empirical-formulas'),'Empirical formulas is not a universal stoichiometry prerequisite.');
console.log(JSON.stringify({valid:blockers.length===0,registeredSources:ledger.inventory.length,majorAreaRows:ledger.areas.length,immediateBoundaryRows:ledger.immediateChemistry.length,blockers,warnings,limitation:'Structural, dependency and claim-boundary checks only. No semantic syllabus, teaching, playback or listening approval.'},null,2));
if(blockers.length)process.exitCode=1;
