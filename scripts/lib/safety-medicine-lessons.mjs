import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {hash,stringFields} from './science-audit.mjs';
import {removeMediaAndCues} from './science-corrections.mjs';
import {removeSpeechCues} from './quantitative-lessons.mjs';
import {getVoiceoverBudget} from '../lesson-utils.mjs';
import {validateSafetyMedicineDiagram} from '../../src/slides/diagrams/safety-medicine-models.mjs';
const copy=JSON.parse(readFileSync(new URL('../data/safety-medicine-copy.json',import.meta.url)));
export const safetyMedicineSources={
  "chemistry-y11-m1-l3-separation-physical-methods": "df8a72affd79ff284aec281a1e13e77dbf62a5ca117c24565c19a773a60a42e6",
  "chemistry-y12-m8-l13-optical-isomerism-chirality": "e7d28c8de10f93888c76bbcbea05d43ff81d40c25176474973a753a672b5a62f",
  "chemistry-y12-m8-l14-solubility-polarity-drug-delivery": "7cd09926831313c9e581c4a7aba145ea99cabef5ccb1a93d2a1d8173f8b93d41"
};
export const safetyMedicineEvidence=JSON.parse(readFileSync(new URL('../data/safety-medicine-evidence.json',import.meta.url)));
export function lipinskiRiskFlags({mass,clogP,donors,acceptors}){
 if(![mass,clogP,donors,acceptors].every(Number.isFinite)||mass<=0||!Number.isInteger(donors)||!Number.isInteger(acceptors)||donors<0||acceptors<0)throw new Error('Invalid Rule of Five inputs');
 return Object.entries({mass:mass>500,clogP:clogP>5,donors:donors>5,acceptors:acceptors>10}).filter(([,flag])=>flag).map(([name])=>name);
}
// Ideal additive optical model only: known enantiomer pair, matched conditions,
// nonzero specific-rotation reference, concentration in g/mL, path length in dm.
export function idealPairRotation(firstSpecificRotation,fractionFirst,concentration,pathLength){
 if(![firstSpecificRotation,fractionFirst,concentration,pathLength].every(Number.isFinite)||firstSpecificRotation===0||fractionFirst<0||fractionFirst>1||concentration<=0||pathLength<=0)throw new Error('Invalid ideal polarimetry inputs');
 return firstSpecificRotation*concentration*pathLength*(2*fractionFirst-1);
}
export function assertSafetyMedicineDraft(draft){
 const visit=(value,trail='')=>{if(!value||typeof value!=='object')return;for(const [key,child]of Object.entries(value)){
  if(/audio|alignment|backgroundMusic/iu.test(key)||['captions','introVoiceover','responseHold','startFrame','endFrame','delay','beat','beats','revealDelays','at'].includes(key)||/(?:At|Beat)$/u.test(key))throw new Error('Inherited safety-medicine media/cue: '+trail+'.'+key);
  visit(child,trail+'.'+key);
 }};visit(draft);if(JSON.stringify(draft).includes('\u2014'))throw new Error('Prohibited punctuation');for(const s of draft.scenes)validateSafetyMedicineDiagram(s.diagram);
}
export function safetyMedicineDraft(name,bytes){
 if(!Object.hasOwn(safetyMedicineSources,name)||hash(bytes)!==safetyMedicineSources[name])throw new Error('Safety-medicine source changed: review content, not just its hash');
 const original=JSON.parse(bytes),draft=removeSpeechCues(removeMediaAndCues(structuredClone(original))),plan=copy[name];
 for(const k of ['introVoiceover','productionRole','productionNotes'])delete draft[k];
 if(name.includes('-m8-')){delete draft.syllabusDotPoints;delete draft.nesaOutcomes;draft.syllabusNeutral=true;}
 Object.assign(draft,structuredClone(plan.root));
 for(const [id,patch]of Object.entries(plan.scenes)){const scene=draft.scenes.find(s=>s.id===id);if(!scene)throw new Error('Missing safety-medicine scene '+id);Object.assign(scene,structuredClone(patch));}
 // Author only opt-in science changes; no inherited alignment/cues survive.
 for(const scene of draft.scenes)if(['chem12m8Chirality','chem12m8Delivery'].includes(scene.diagram?.kind))scene.diagram.props.reviewedSafetyMedicine=true;
 const clean=value=>typeof value==='string'?value.replaceAll('\u2014',','):Array.isArray(value)?value.map(clean):value&&typeof value==='object'?Object.fromEntries(Object.entries(value).map(([k,v])=>[k,clean(v)])):value;
 Object.assign(draft,clean(draft));
 const pacing=draft.scenes.map(scene=>{const old=original.scenes.find(s=>s.id===scene.id),text=scene.voiceover?.text??'',budget=getVoiceoverBudget({text,durationInFrames:old.durationInFrames,fps:draft.fps}),response=scene.id==='quick-check'?plan.response:null;scene.durationInFrames=Math.max(old.durationInFrames,budget.requiredFrames+(response?response.minimumThinkingSeconds*draft.fps:90));const narrationChanged=text!==(old.voiceover?.text??'');return {scene:scene.id,inheritedFrames:old.durationInFrames,proposedFrames:scene.durationInFrames,narrationChanged,changeKind:!narrationChanged?'unchanged':plan.scenes[scene.id]?.voiceover?'science-or-scope-correction':'punctuation-only',status:'unmeasured source estimate; cues and visual review pending',...(response?{response}:{} )};});
 assertSafetyMedicineDraft(draft);const before=new Map(stringFields(original).map(f=>[f.field,f.text]));const changes=stringFields(draft).filter(f=>before.get(f.field)!==f.text).map(f=>({field:f.field,before:before.get(f.field)??null,after:f.text}));
 return {draft,pacing,changes,evidence:safetyMedicineEvidence[name]};
}
export function safetyMedicineArtifacts(name,bytes){
 const r=safetyMedicineDraft(name,bytes),links={sourceSha256:safetyMedicineSources[name],draftSha256:hash(JSON.stringify(r.draft,null,2)+'\n')};
 const takes=r.draft.scenes.flatMap(s=>{if(!s.voiceover)return[];const p=r.pacing.find(p=>p.scene===s.id),response=p.response;return(response?[['prompt',response.promptText],['answer',response.answerText]]:[['narration',s.voiceover.text]]).map(([phase,text])=>({scene:s.id,phase,text,textSha256:hash(text),narrationChanged:p.narrationChanged,changeKind:p.changeKind,...links,audioFile:null,status:'unapproved text candidate; unchanged narration reuse requires provenance verification'}));});
 return {draft:r.draft,changes:r.changes,pacing:{...links,scenes:r.pacing},takes:{...links,generationAuthorised:false,audioGenerated:false,voiceId:null,modelId:null,settings:null,takes},review:{...links,...r.evidence,scienceApproval:false,registered:false,rendered:false,catalogueChanged:false,holds:['Teacher/science and curriculum delivery review pending.','These are conceptual chemistry lessons, not a laboratory procedure, medical advice or a recommended drug/route.','Medicine L13/L14 are explicitly enrichment, not invented named 2017 requirements.','Whole-draft schema/source checks do not certify visual fit, optical accuracy or media readiness.','Diagram default timing is unmeasured; final narration-linked cues and response boundaries must be rebuilt.','The reviewed thalidomide diagram replaces only its two misleading safe/unsafe stamps; molecular and apparatus geometry otherwise remains unchanged.','Retained artwork pixels, fonts, motion, listening, device and continuous playback QA not run.','No executable audio generation queue is authorised.' ]}};
}
export function validateSafetyMedicineArtifacts(name,bytes,artifacts){assertSafetyMedicineDraft(artifacts.draft);assert.deepEqual(artifacts,safetyMedicineArtifacts(name,bytes),'Safety-medicine package differs from guarded candidate');return {scenes:artifacts.draft.scenes.length,narratedScenes:artifacts.draft.scenes.filter(s=>s.voiceover).length,narrationChanges:artifacts.pacing.scenes.filter(s=>s.narrationChanged).length,takes:artifacts.takes.takes.length};}
