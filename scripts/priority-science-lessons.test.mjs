import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,mkdir,mkdtemp,writeFile,rm} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import path from 'node:path';
import {priorityScienceSources,priorityScienceArtifacts,validatePriorityScienceArtifacts,nitrateModel,arsenicGuidelineRatio} from './lib/priority-science-lessons.mjs';
import {validatePriorityScienceDiagram} from '../src/slides/diagrams/priority-science-models.mjs';
import {getVoiceoverBudget} from './lesson-utils.mjs';
const names=Object.keys(priorityScienceSources),changedCounts=[6,8,5,9],sceneCounts=[10,9,10,10];
for(const [i,name] of names.entries()){
 const bytes=await readFile('src/data/'+name+'.json'),original=JSON.parse(bytes);
 test(name+': full isolated source package preserves visual identities and duration floors',()=>{
  const a=priorityScienceArtifacts(name,bytes);assert.deepEqual(validatePriorityScienceArtifacts(name,bytes,a),{scenes:sceneCounts[i],narratedScenes:sceneCounts[i]-1,narrationChanges:changedCounts[i],takes:sceneCounts[i]});
  assert.deepEqual(a.draft.scenes.map(s=>[s.id,s.type,s.image,s.diagram?.kind??s.diagram?.type]),original.scenes.map(s=>[s.id,s.type,s.image,s.diagram?.kind??s.diagram?.type]));
  for(const k of ['syllabusVersion','syllabusDotPoints','nesaOutcomes'])assert.deepEqual(a.draft[k],original[k]);
  for(const s of a.draft.scenes){assert.ok(s.durationInFrames>=original.scenes.find(o=>o.id===s.id).durationInFrames);if(s.voiceover)assert.equal(getVoiceoverBudget({text:s.voiceover.text,durationInFrames:s.durationInFrames,fps:a.draft.fps}).status,'ok');}
  assert.equal(a.changes.filter(c=>c.field.endsWith('.voiceover.text')).length,changedCounts[i]);
  const response=a.pacing.scenes.find(s=>s.response),takes=a.takes.takes.filter(t=>t.scene===response.scene);assert.deepEqual(takes.map(t=>t.phase),['prompt','answer']);assert.equal(a.draft.scenes.find(s=>s.id===response.scene).voiceover.text,takes.map(t=>t.text).join(' '));assert.ok(response.response.minimumThinkingSeconds>=35);
 });
 test(name+': changed source, candidate, media, cues and false approvals fail closed',()=>{
  assert.throws(()=>priorityScienceArtifacts(name,Buffer.concat([bytes,Buffer.from(' ')])),/source changed/iu);
  for(const change of [a=>a.draft.scenes[1].voiceover.audioFile='old.wav',a=>a.draft.scenes[1].captions=[],a=>a.draft.scenes[1].delay=0,a=>a.takes.takes.reverse(),a=>a.review.scienceApproval=true,a=>a.takes.generationAuthorised=true,a=>a.draft.scenes[1].voiceover.text='modified',a=>a.pacing.scenes.find(s=>s.response).response.minimumThinkingSeconds=0]){const a=priorityScienceArtifacts(name,bytes);change(a);assert.throws(()=>validatePriorityScienceArtifacts(name,bytes,a));}
 });
}
test('new package preserves repaired Biology narration and changes unsafe residual fields',async()=>{
 const name=names[0],bytes=await readFile('src/data/'+name+'.json'),o=JSON.parse(bytes),a=priorityScienceArtifacts(name,bytes);
 for(const id of ['concept-zones','concept-enzymes','worked-example'])assert.equal(a.draft.scenes.find(s=>s.id===id).voiceover.text,o.scenes.find(s=>s.id===id).voiceover.text);
 for(const s of a.draft.scenes.filter(s=>s.diagram?.kind==='bio11m2Zones')){const p=s.diagram.props;assert.equal(p.referenceBandOnly,true);assert.equal(p.tolerance.from,p.scale.min);assert.equal(p.tolerance.to,p.scale.max);assert.equal(p.critical.failLabel,'');assert.equal(p.enzyme,undefined);assert.equal(p.optimal.at,0);}
 assert.doesNotMatch(a.draft.scenes.find(s=>s.id==='summary').voiceover.text,/like with a forty|twenty eight|denatured enzymes don't/u);
});
test('concentration metadata retains the same unit and density qualifications as the worked model',async()=>{
 const a=priorityScienceArtifacts(names[2],await readFile('src/data/'+names[2]+'.json'));
 assert.match(a.draft.examSkill,/Convert mg\/L to g\/L before dividing/u);assert.match(a.draft.examSkill,/density assumption/u);assert.doesNotMatch(a.draft.examSkill,/ppm \(mg/u);
});
test('independent nitrate and arsenic calculations catch both factor-of-ten guideline mistakes',()=>{
 const n=nitrateModel(.0500);assert.equal(n.mgPerL,50);assert.equal(n.guidelineRatio,1);assert.ok(Math.abs(n.molPerL-0.0008063995871234114)<1e-15);assert.ok(Math.abs(n.molPerL*(14.007+3*15.999)-.0500)<1e-15);
 assert.equal(arsenicGuidelineRatio(.125),12.5);assert.equal(.125*1000,125);assert.equal(.01*1000,10);
 const purity=5*.96/39.997/.5;assert.equal(purity.toPrecision(3),'0.240');assert.equal((.2*.2500*39.997/.95).toPrecision(3),'2.11');
 for(const args of [[-1],[NaN],[1,0]])assert.throws(()=>nitrateModel(...args));assert.throws(()=>arsenicGuidelineRatio(-1));
});
test('recombinant overview distinguishes end compatibility and protein expression design',async()=>{
 const a=priorityScienceArtifacts(names[1],await readFile('src/data/'+names[1]+'.json')),text=JSON.stringify(a.draft);
 assert.match(text,/Different restriction enzymes can produce compatible/u);assert.match(text,/synthetic A and B chain/u);assert.match(text,/introns/u);assert.match(text,/control sequences/u);assert.doesNotMatch(text,/same enzyme must|only way to get matching|ninety-five percent of the insulin/u);
});
test('schema and renamed-source release entry points keep the four consequential lessons held',async()=>{
 await mkdir('out/checks',{recursive:true});const dir=await mkdtemp('out/checks/priority-gate-');
 try{for(const name of names){const file=path.join(dir,'assembled.json');await writeFile(file,await readFile('src/data/'+name+'.json'));const r=spawnSync(process.execPath,['scripts/release-preflight.mjs',file,'--json'],{encoding:'utf8'});assert.notEqual(r.status,0);assert.match(r.stdout,/PRIORITY_SOURCE_REVIEW_PENDING/u,name);}
  const a=priorityScienceArtifacts(names[0],await readFile('src/data/'+names[0]+'.json'));a.draft.scenes.find(s=>s.id==='concept-zones').diagram.props.tolerance.from=28;const file=path.join(dir,'invalid.json');await writeFile(file,JSON.stringify(a.draft));const r=spawnSync(process.execPath,['scripts/validate-lesson.mjs',file],{encoding:'utf8'});assert.notEqual(r.status,0);assert.match(r.stdout+r.stderr,/Reference-band chart/u);
 }finally{await rm(dir,{recursive:true,force:true});}
});
test('new diagram opts reject unsupported combinations while legacy input remains unchanged',()=>{
 const d=(kind,props)=>({type:'diorama',kind,props});for(const x of [d('wrong',{referenceBandOnly:true}),d('bio11m2Zones',{referenceBandOnly:'true'}),d('chem12m8FoodChain',{reviewedMethylmercury:true,contaminant:'As'}),d('wrong',{reviewedMethylmercury:true,contaminant:'MeHg'})])assert.throws(()=>validatePriorityScienceDiagram(x));assert.doesNotThrow(()=>validatePriorityScienceDiagram(d('chem12m8FoodChain',{contaminant:'Hg'})));
});
