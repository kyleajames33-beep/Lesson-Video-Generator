import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {hash,stringFields} from './science-audit.mjs';
import {removeMediaAndCues} from './science-corrections.mjs';
import {removeSpeechCues} from './quantitative-lessons.mjs';
import {getVoiceoverBudget} from '../lesson-utils.mjs';
import {validateWaterHealthDiagram} from '../../src/slides/diagrams/water-health-models.mjs';
const copy=JSON.parse(readFileSync(new URL('../data/water-health-copy.json',import.meta.url)));
export const waterHealthSources={
 'chemistry-y12-m6-l13-buffers':'51e64bc2c8dc71e3aee0fe0a3c0df119e9ef1d3919cfb859c3bd749d1751cf57',
 'chemistry-y12-m8-l7-monitoring-dissolved-oxygen-bod':'5065dbdb2a2680db9e29b7a8d9837cad0807065a4aa1e7d2af1a64811e7d2526',
 'chemistry-y12-m8-l9-nutrient-pollution-eutrophication':'4a5bfa525aca17d873242a62419889f6ac4069bd53d4556de472c30edd4aecac',
 'chemistry-y12-m8-l10-water-treatment-processes':'32ebf7953390095063039d405a12b3a5e8af3125d2c3882655bf424df0715074',
};
export const waterHealthEvidence=JSON.parse(readFileSync(new URL('../data/water-health-evidence.json',import.meta.url)));
export function idealBufferPH(ka,acidMoles,baseMoles){
 if(![ka,acidMoles,baseMoles].every(v=>Number.isFinite(v)&&v>0))throw new Error('Buffer requires positive finite Ka and both components');
 return -Math.log10(ka)+Math.log10(baseMoles/acidMoles);
}
export function bod5({initial,final,sampleFraction=1,seedCorrection=0}){
 if(![initial,final,sampleFraction,seedCorrection].every(Number.isFinite)||initial<final||final<0||sampleFraction<=0||sampleFraction>1||seedCorrection<0||seedCorrection>initial-final)throw new Error('Invalid BOD model inputs');
 return (initial-final-seedCorrection)/sampleFraction;
}
export function assertWaterHealthDraft(draft){
 const visit=(value,trail='')=>{if(!value||typeof value!=='object')return;for(const [key,child]of Object.entries(value)){
  if(/audio|alignment|backgroundMusic/iu.test(key)||['captions','introVoiceover','responseHold','startFrame','endFrame','delay','beat','beats','revealDelays','at'].includes(key)||/(?:At|Beat)$/u.test(key))throw new Error('Inherited water-health media/cue: '+trail+'.'+key);
  visit(child,trail+'.'+key);
 }};visit(draft);if(JSON.stringify(draft).includes('\u2014'))throw new Error('Prohibited punctuation');for(const s of draft.scenes)validateWaterHealthDiagram(s.diagram);
}
export function waterHealthDraft(name,bytes){
 if(!Object.hasOwn(waterHealthSources,name)||hash(bytes)!==waterHealthSources[name])throw new Error('Water-health source changed: review content, not just its hash');
 const original=JSON.parse(bytes),draft=removeSpeechCues(removeMediaAndCues(structuredClone(original))),plan=copy[name];
 for(const k of ['introVoiceover','productionRole','productionNotes'])delete draft[k];
 Object.assign(draft,structuredClone(plan.root));
 for(const [id,patch]of Object.entries(plan.scenes)){const scene=draft.scenes.find(s=>s.id===id);if(!scene)throw new Error('Missing water-health scene '+id);Object.assign(scene,structuredClone(patch));}
 // Remove inherited timed actions instead of treating old narration cues as current.
 // The finite acetate model remains a static initial-state illustration pending rebuild.
 for(const scene of draft.scenes){
  const d=scene.diagram;if(!d)continue;
  if(d.kind==='chem12m6Buffer'){d.props.events=[];d.props.working=[];d.props.title='Initial-state acetate model; addition cues pending';}
  if(['chem12m8WaterBody','chem12m8Bod'].includes(d.kind)||d.kind==='chem12m8Treatment'&&d.props.mode==='train'||d.kind==='chem12m8Ionisation'&&d.props.mode==='hocl')d.props.reviewedWaterHealth=true;
  if(d.kind==='chem12m8Steps'){
   d.props.stages[1].tokens.text='Mn(IV)';d.props.stages[1].label='oxygen fixed';d.props.stages[1].sub='oxidised Mn species';
   d.props.note.sub='simplified electron accounting; not a laboratory procedure';
  }
 }
 const clean=value=>typeof value==='string'?value.replaceAll('\u2014',','):Array.isArray(value)?value.map(clean):value&&typeof value==='object'?Object.fromEntries(Object.entries(value).map(([k,v])=>[k,clean(v)])):value;
 Object.assign(draft,clean(draft));
 const pacing=draft.scenes.map(scene=>{const old=original.scenes.find(s=>s.id===scene.id),text=scene.voiceover?.text??'',budget=getVoiceoverBudget({text,durationInFrames:old.durationInFrames,fps:draft.fps}),response=scene.id==='quick-check'?plan.response:null;scene.durationInFrames=Math.max(old.durationInFrames,budget.requiredFrames+(response?response.minimumThinkingSeconds*draft.fps:90));const narrationChanged=text!==(old.voiceover?.text??'');return {scene:scene.id,inheritedFrames:old.durationInFrames,proposedFrames:scene.durationInFrames,narrationChanged,changeKind:!narrationChanged?'unchanged':plan.scenes[scene.id]?.voiceover?'science-or-scope-correction':'punctuation-only',status:'unmeasured source estimate; cues and visual review pending',...(response?{response}:{} )};});
 assertWaterHealthDraft(draft);const before=new Map(stringFields(original).map(f=>[f.field,f.text]));const changes=stringFields(draft).filter(f=>before.get(f.field)!==f.text).map(f=>({field:f.field,before:before.get(f.field)??null,after:f.text}));
 return {draft,pacing,changes,evidence:waterHealthEvidence[name]};
}
export function waterHealthArtifacts(name,bytes){
 const r=waterHealthDraft(name,bytes),links={sourceSha256:waterHealthSources[name],draftSha256:hash(JSON.stringify(r.draft,null,2)+'\n')};
 const takes=r.draft.scenes.flatMap(s=>{if(!s.voiceover)return[];const p=r.pacing.find(p=>p.scene===s.id),response=p.response;return(response?[['prompt',response.promptText],['answer',response.answerText]]:[['narration',s.voiceover.text]]).map(([phase,text])=>({scene:s.id,phase,text,textSha256:hash(text),narrationChanged:p.narrationChanged,changeKind:p.changeKind,...links,audioFile:null,status:'unapproved text candidate; unchanged narration reuse requires provenance verification'}));});
 return {draft:r.draft,changes:r.changes,pacing:{...links,scenes:r.pacing},takes:{...links,generationAuthorised:false,audioGenerated:false,voiceId:null,modelId:null,settings:null,takes},review:{...links,...r.evidence,scienceApproval:false,registered:false,rendered:false,catalogueChanged:false,holds:['Teacher/science review and curriculum delivery approval pending.','These educational models are not clinical advice, a water-safety certification, or an operational treatment procedure.','Whole-draft schema and source checks do not certify audio or visual readiness.','The former open-blood beaker model is replaced only in this proposal by an existing explanatory card layout.','Acetate diagrams retain only initial states. Measured addition cues and narration-linked animation must be rebuilt.','Other diagrams use unmeasured default timing; no cue alignment or visual fit is claimed.','Preserved artwork pixels, fonts, motion, listening, device and continuous playback QA not run.','No executable audio generation queue is authorised.']}};
}
export function validateWaterHealthArtifacts(name,bytes,artifacts){assertWaterHealthDraft(artifacts.draft);assert.deepEqual(artifacts,waterHealthArtifacts(name,bytes),'Water-health package differs from guarded candidate');return {scenes:artifacts.draft.scenes.length,narratedScenes:artifacts.draft.scenes.filter(s=>s.voiceover).length,narrationChanges:artifacts.pacing.scenes.filter(s=>s.narrationChanged).length,takes:artifacts.takes.takes.length};}
