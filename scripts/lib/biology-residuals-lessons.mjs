import {validateBiologyResidualDiagram} from '../../src/slides/diagrams/biology-residuals-models.mjs';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {hash,stringFields} from './science-audit.mjs';
import {removeMediaAndCues} from './science-corrections.mjs';
import {removeSpeechCues} from './quantitative-lessons.mjs';
import {getVoiceoverBudget} from '../lesson-utils.mjs';
const copyBytes=readFileSync(new URL('../data/biology-residuals-copy.json',import.meta.url));
const evidenceBytes=readFileSync(new URL('../data/biology-residuals-evidence.json',import.meta.url));
export const biologyResidualCopySha256='1a2c6702943898344ee6118380720417ac6b04e5b8a9b6b15efefa60148c99bc';
export const biologyResidualEvidenceSha256='2934951abdf9d58ea533c8eeb6ecf1ff6f75b736e8881c4757475ed36a1d30c2';
if(hash(copyBytes)!==biologyResidualCopySha256||hash(evidenceBytes)!==biologyResidualEvidenceSha256)throw new Error('Biology residual copy/evidence pin changed: review content before refreshing');
const plans=JSON.parse(copyBytes);
export const biologyResidualEvidence=JSON.parse(evidenceBytes);
export const biologyResidualSources=Object.fromEntries(Object.keys(plans).map(name=>[name,biologyResidualEvidence.lessons[name].sourceSha256]));
export const biologyResidualBase='013bb2984e1ac371c201dcd46733cb91850443ab';
export const catalogueFixtureSha256='d97afab2de427e60c4ab63434db5de2e7be1fc3dc82d75886c78de0967732652';
export const componentFixtureSha256='2b64610ffeddc737c578b3e0efacf8f2b1f50ef26b5c844d764c24ddeb0b8b0c';
export function pinnedBiologyFixture(kind){
 const bytes=readFileSync(new URL(`../fixtures/biology-residuals-${kind}.json`,import.meta.url));
 if(hash(bytes)!==({catalogue:catalogueFixtureSha256,components:componentFixtureSha256})[kind])throw new Error('Biology residual baseline fixture changed');
 return JSON.parse(bytes);
}
// Restricted finite-interval model for the same solute. Callers must explicitly
// confirm zero change in tubular content and no other production, consumption,
// inflows or outflows. A general dynamic balance requires those additional terms.
export function soluteBalance(filtered,reabsorbed,secreted,assumptions){
 if(assumptions?.unchangedTubularSoluteContent!==true||assumptions?.noOtherSourcesOrSinks!==true)throw new Error('Explicit no-accumulation and no-other-source/sink assumptions required');
 if(![filtered,reabsorbed,secreted].every(v=>Number.isFinite(v)&&v>=0)||reabsorbed>filtered+secreted)throw new Error('Invalid interval amounts');
 return filtered-reabsorbed+secreted;
}
export function potometerRate(distanceMm,minutes,areaMm2){
 if(!Number.isFinite(distanceMm)||distanceMm<0||!Number.isFinite(minutes)||minutes<=0||!Number.isFinite(areaMm2)||areaMm2<=0)throw new Error('Invalid potometer inputs');
 return {linearMmPerMin:distanceMm/minutes,volumeMm3PerMin:areaMm2*distanceMm/minutes};
}
export function waterStorageChange(uptake,transpired){
 if(![uptake,transpired].every(v=>Number.isFinite(v)&&v>=0))throw new Error('Invalid simplified water balance');
 return uptake-transpired;
}
export function wholeChromosomeCombinations(pairs){
 if(!Number.isSafeInteger(pairs)||pairs<1||pairs>52)throw new Error('Invalid independent pair count');
 return 2**pairs;
}
// All inherited timing is discarded. Numeric diagram markers below are newly
// authored source-review schedules, not retained narration alignments.
function staging(value){
 if(Array.isArray(value))return value.map(staging);
 if(!value||typeof value!=='object')return value;
 return Object.fromEntries(Object.entries(value).filter(([k])=>!['beats','revealDelays','startFrame','endFrame','responseHold'].includes(k)&&!/audio|alignment|backgroundMusic/iu.test(k)).map(([k,v])=>[k,k==='at'||k==='delay'||/(?:At|Beat)$/u.test(k)?typeof v==='object'?{}:0:staging(v)]));
}
function diagramFor(name,scene){
 if(!scene.diagram)return null;
 const d=staging(structuredClone(scene.diagram)),p=(d.props ??= {});d.delay=0;p.delay=0;
 if(d.kind==='bio11m1Membrane'){
  for(const label of p.labels??[])if(label.part==='integral'){label.text='transmembrane example';label.note='an integral protein spanning the bilayer';}
  if(scene.id==='concept-proteins')p.footer=[{text:'Other integral proteins can be embedded from one side',at:0}];
  if(scene.id==='concept-cholesterol')p.footer=[{text:'Animal-membrane example; effects depend on composition and temperature',at:0}];
 }
 if(d.kind==='bio12m8Membrane'){
  p.crossAt=120;
  for(const sp of p.species)if(sp.size==='large')sp.label='cells; most proteins';
  if(p.mode==='filtration')p.notes=[{text:'Physical selectivity, not selection by usefulness',at:0,amber:true}];
  if(p.mode==='dialysis'){
   p.species=p.species.filter(s=>s.key!=='gl');
   p.notes=[{text:'Illustrative solute diffusion; water ultrafiltration not shown',at:0,amber:true}];
  }
 }
 if(d.kind==='bio11m2Nephron'){
  p.filterAt=0;p.reabsorbAt=120;p.secreteAt=240;
  p.footer=[{text:'Schematic paths; particle counts are not physiological fractions',at:0}];
 }
 if(d.kind==='bio11m2Compare'){
  if(name.includes('nephron')){
   p.columns=[
    {name:'Filtration',sub:'glomerular barrier',icon:'glomerulus',at:0,lines:[{text:'water and many small solutes',at:0},{text:'useful and waste molecules',at:0}]},
    {name:'Reabsorption',sub:'tubules',icon:'tubule',at:0,lines:[{text:'returns material towards blood',at:0},{text:'includes some urea',at:0}]},
    {name:'Secretion',sub:'tubules',icon:'tubule',at:0,lines:[{text:'adds selected material to fluid',at:0}]},
   ];p.footer=[{text:'Excreted = filtered − reabsorbed + secreted',at:0,amber:true},{text:'Unchanged tubular solute content; no other sources or sinks',at:0}];
  }else if(scene.id==='concept-compare'){
   p.columns=[{name:'Kidney',icon:'kidney',at:0},{name:'Haemodialysis',icon:'dialyser',at:0}];
   p.rowLabels=['waste/fluid balance','mechanism','timing','endocrine roles'].map(text=>({text,at:0}));
   p.rows=[
    [{text:'regulated excretion'},{text:'partial replacement'}],
    [{text:'filtration + tubular transport'},{text:'diffusion + ultrafiltration'}],
    [{text:'continuous regulation'},{text:'regimen varies'}],
    [{text:'several functions'},{text:'not fully replaced'}],
   ];p.footer=[];
  }else if(scene.id==='concept-sources'){
   p.columns=[
    {name:'Research/review',icon:'source',at:0,lines:[{text:'methods and claim relevance',at:0},{text:'currency and conflicts',at:0}]},
    {name:'Patient resource',icon:'source',at:0,lines:[{text:'accessible explanation',at:0},{text:'check simplifications',at:0}]},
    {name:'Manufacturer',icon:'source',at:0,lines:[{text:'device-specific detail',at:0},{text:'independently check claims',at:0}]},
   ];p.footer=[{text:'Evidence and independence matter; no automatic ranking',at:0,amber:true}];
  }
 }
 if(d.kind==='bio11m2Potometer'){
  p.title='Synthetic uptake data';
  p.runs.forEach((run,i)=>{run.at=i*180;run.dur=120;});
  if(p.average)p.average={at:500,label:'mean linear rate'};
  if(p.proxy)p.proxy={at:500,text:'Uptake is a conditional proxy; storage and bias can differ between runs.'};
  p.notes=[{text:'mm/min is bubble speed; volume rate also requires capillary area',at:0}];
 }
 if(d.kind==='bio12m5Meiosis')p.at={pairing:0,m1:120,m2:300,result:480,once:540};
 if(d.kind==='bio12m5Reshuffle'){p.reviewedBiologyResiduals=true;p.at={cross:0,swap:120,assort:300,arrange2:420,result:600};p.rule='One example; no universal uniqueness guarantee';}
 if(d.kind==='bio11m1bAssortment'){p.reviewedBiologyResiduals=true;p.at={one:0,two:120,three:240,human:420,crossing:540,fertilisation:660,rule:780};p.rule='Possible types across many meioses; not products of one';}
 return d;
}
export function assertBiologyResidualDraft(draft){
 const visit=(v,trail='')=>{if(!v||typeof v!=='object')return;for(const[k,x]of Object.entries(v)){
  if(/audio|alignment|backgroundMusic/iu.test(k)||['captions','introVoiceover','responseHold','startFrame','endFrame','revealDelays'].includes(k))throw new Error('Forbidden residual media/cue '+trail+'.'+k);
  if((k==='at'||k==='delay'||/(?:At|Beat)$/u.test(k))&&!/^\.scenes\.\d+\.diagram(?:\.|$)/u.test(trail))throw new Error('Non-diagram inherited cue '+trail+'.'+k);
  if(typeof x==='number'&&!Number.isFinite(x))throw new Error('Nonfinite residual value');
  visit(x,trail+'.'+k);
 }};visit(draft);
 if(JSON.stringify(draft).includes('\u2014'))throw new Error('Prohibited punctuation');
 for(const s of draft.scenes){
  if(!s.voiceover?.text)throw new Error('Every residual scene needs an explicit narration decision');
  validateBiologyResidualDiagram(s.diagram);
  if(s.diagram&&s.diagram.type!=='diorama')throw new Error('Unexpected residual diagram type');
 }
}
export function biologyResidualDraft(name,bytes){
 if(!Object.hasOwn(biologyResidualSources,name)||hash(bytes)!==biologyResidualSources[name])throw new Error('Biology residual source changed: review the changed content, not just its hash');
 const original=JSON.parse(bytes),plan=plans[name];
 const draft=removeSpeechCues(removeMediaAndCues(structuredClone(original)));
 for(const key of ['introVoiceover','productionRole','productionNotes'])delete draft[key];
 Object.assign(draft,structuredClone(plan.root));
 assert.deepEqual(Object.keys(plan.scenes).sort(),original.scenes.map(s=>s.id).sort(),'Every scene must be explicitly reviewed');
 for(const scene of draft.scenes){
  Object.assign(scene,structuredClone(plan.scenes[scene.id]));
  const old=original.scenes.find(s=>s.id===scene.id),diagram=diagramFor(name,old);
  if(diagram)scene.diagram=diagram;
 }
 const clean=v=>typeof v==='string'?v.replaceAll('\u2014',','):Array.isArray(v)?v.map(clean):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).map(([k,x])=>[k,clean(x)])):v;
 Object.assign(draft,clean(draft));
 const pacing=draft.scenes.map(s=>{
  const old=original.scenes.find(o=>o.id===s.id),response=s.id==='quick-check'?structuredClone(plan.response):null;
  const budget=getVoiceoverBudget({text:s.voiceover.text,durationInFrames:old.durationInFrames,fps:draft.fps});
  s.durationInFrames=Math.max(old.durationInFrames,budget.requiredFrames+90+(response?response.minimumThinkingSeconds*draft.fps:0));
  return {scene:s.id,inheritedFrames:old.durationInFrames,proposedFrames:s.durationInFrames,narrationChanged:s.voiceover.text!==old.voiceover?.text,status:'source estimate, not measured speech or approved pacing',motion:s.diagram?'Reuse illustration; corrected props and newly staged schematic cues. Visual/device review required.':'Reuse existing scene layout; text changed. Reading hold and fit unverified.',...(response?{response}:{})};
 });
 assertBiologyResidualDraft(draft);
 const old=new Map(stringFields(original).map(f=>[f.field,f.text]));
 const changes=stringFields(draft).filter(f=>old.get(f.field)!==f.text).map(f=>({field:f.field,before:old.get(f.field)??null,after:f.text}));
 return{draft,pacing,changes};
}
export function biologyResidualArtifacts(name,bytes){
 const r=biologyResidualDraft(name,bytes),e=biologyResidualEvidence.lessons[name];
 const links={sourceSha256:biologyResidualSources[name],draftSha256:hash(JSON.stringify(r.draft,null,2)+'\n')};
 const takes=r.draft.scenes.flatMap(s=>{const p=r.pacing.find(p=>p.scene===s.id),q=p.response;return(q?[['prompt',q.promptText],['answer',q.answerText]]:[['narration',s.voiceover.text]]).map(([phase,text])=>({scene:s.id,phase,text,textSha256:hash(text),...links,audioFile:null,status:'unapproved text candidate; not an audio job'}));});
 return {draft:r.draft,changes:r.changes,pacing:{...links,scenes:r.pacing},takes:{...links,generationAuthorised:false,audioGenerated:false,voiceId:null,modelId:null,settings:null,takes},review:{...links,...structuredClone(e),scienceApproval:false,curriculumDeliveryApproved:false,visualApproval:false,mediaApproval:false,registered:false,rendered:false,catalogueChanged:false,holds:[
  'Teacher science and curriculum-delivery review remains required.',
  'Practical or secondary-source investigation verbs require learner activity and records; viewing is insufficient.',
  'All narration candidates are unvoiced. Old recordings, captions and alignment are not reused.',
  'Diagram schedules are newly authored source-review estimates, not measured narration cues.',
  'Prompt/answer takes are split planning text. Actual silence and solution concealment remain unimplemented.',
  'Retained artwork provenance, pixels, fonts, fit, phone-size motion, listening and continuous playback are unverified.',
  'Source traceability and passing tests do not authorise speech generation, publication or release.',
 ]}};
}
export function validateBiologyResidualArtifacts(name,bytes,artifacts){
 assertBiologyResidualDraft(artifacts.draft);
 assert.deepEqual(artifacts,biologyResidualArtifacts(name,bytes),'Residual package differs from canonical guarded candidate');
 return{scenes:artifacts.draft.scenes.length,narratedScenes:artifacts.draft.scenes.filter(s=>s.voiceover).length,takes:artifacts.takes.takes.length};
}
