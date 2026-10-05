import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {hash,stringFields} from './science-audit.mjs';
import {removeMediaAndCues} from './science-corrections.mjs';
import {removeSpeechCues} from './quantitative-lessons.mjs';
import {getVoiceoverBudget} from '../lesson-utils.mjs';
import {validateReviewedPolymerDiagram} from '../../src/slides/diagrams/reviewed-polymer-models.mjs';
const copy=JSON.parse(readFileSync(new URL('../data/foundations-chemistry-copy.json',import.meta.url)));
export const foundationsSources={
 'chemistry-y11-m4-l13-gibbs-free-energy':'afdbaaa865567fe909a15d82e3f2ba05db5f4b781d384e5fd3eb3de68bdb8b08',
 'chemistry-y11-m4-cp3-entropy-gibbs':'5bf741b73f621ba00e49f280d6fe6e32de507357b5f4844ac62d1e8949007d8e',
 'chemistry-y12-m7-l21-addition-polymers':'f4fc04d15f4245ba67917b620a08657a6dc6594d8ed3adb84021c4091a3b5c1d',
 'chemistry-y12-m6-l2-nomenclature-indicators-acid-reactions':'7f94be85b78fa64463745eb3427b53f1862fda635326a451029c7693fa8e8696',
};
export const foundationsEvidence=JSON.parse(readFileSync(new URL('../data/foundations-chemistry-evidence.json',import.meta.url)));
export function gibbsModel(hKJ,sJK,T,Q=1){
 if(![hKJ,sJK,T,Q].every(Number.isFinite)||T<=0||Q<=0)throw new Error('Invalid Gibbs model inputs');
 const standard=hKJ-T*sJK/1000;
 return {standard,actual:standard+8.31446261815324*T*Math.log(Q)/1000,constantPropertyCrossover:sJK!==0&&hKJ/(sJK/1000)>0?hKJ/(sJK/1000):null};
}
function stationaryAllowed(draft,trail,key,child){
 if(key!=='at'||child!==0)return false;
 const match=trail.match(/^\.scenes\.(\d+)\.diagram\.props\.(.+)$/u);if(!match)return false;
 const kind=draft.scenes[Number(match[1])]?.diagram?.kind,p=match[2];
 return kind==='chem12m6Indicator'&&p==='sweep.0'||kind==='chem12m6Sorter'&&/^(question|items\.\d+|footer\.\d+)$/u.test(p)||kind==='chem12m6FizzBeakers'&&/^(beakers\.\d+|footer)$/u.test(p);
}
export function assertFoundationsDraft(draft){
 const visit=(value,trail='')=>{if(!value||typeof value!=='object')return;for(const [key,child]of Object.entries(value)){
  if(/audio|alignment|backgroundMusic/iu.test(key)||['captions','introVoiceover','responseHold','startFrame','endFrame','delay','beat','beats','revealDelays'].includes(key)||/(?:At|Beat)$/u.test(key)||(key==='at'&&!stationaryAllowed(draft,trail,key,child)))throw new Error('Inherited foundations media/cue: '+trail+'.'+key);
  visit(child,trail+'.'+key);
 }};visit(draft);if(JSON.stringify(draft).includes('\u2014'))throw new Error('Prohibited punctuation');for(const s of draft.scenes)validateReviewedPolymerDiagram(s.diagram);
}
export function foundationsDraft(name,bytes){
 if(!Object.hasOwn(foundationsSources,name)||hash(bytes)!==foundationsSources[name])throw new Error('Foundations source changed: review content, not just its hash');
 const original=JSON.parse(bytes),draft=removeSpeechCues(removeMediaAndCues(structuredClone(original))),plan=copy[name];
 for(const k of ['introVoiceover','productionRole','productionNotes'])delete draft[k];
 Object.assign(draft,structuredClone(plan.root));
 for(const [id,patch]of Object.entries(plan.scenes)){const scene=draft.scenes.find(s=>s.id===id);if(!scene)throw new Error('Missing foundations scene '+id);Object.assign(scene,structuredClone(patch));}
 // A punctuation-only change in the retained correct entropy calculation is
 // recorded separately and still invalidates any narration-byte provenance.
 const clean=value=>typeof value==='string'?value.replaceAll('\u2014',','):Array.isArray(value)?value.map(clean):value&&typeof value==='object'?Object.fromEntries(Object.entries(value).map(([k,v])=>[k,clean(v)])):value;
 const cleaned=clean(draft);Object.assign(draft,cleaned);
 if(name.includes('addition-polymers'))for(const id of ['concept-properties','concept-thermo'])draft.scenes.find(s=>s.id===id).diagram.props.reviewedPolymer=true;
 if(name.includes('nomenclature-indicators')){
  const get=id=>draft.scenes.find(s=>s.id===id).diagram.props;
  const sorter=get('concept-naming');sorter.question={text:'For these examples, does the acid contain oxygen?',at:0};sorter.items.forEach(item=>{item.at=0;item.text=item.text.replace('HCl →','HCl(aq) →').replace('HBr →','HBr(aq) →').replace('H₂S →','H₂S(aq) →');});sorter.footer=[{text:'Common examples, not a complete naming algorithm',at:0}];
  const indicators=get('concept-indicators');indicators.sweep=[{pH:7,at:0}];delete indicators.flag;
  indicators.indicators[0].lo=3.1;indicators.indicators[0].hi=4.4;indicators.indicators[0].rangeText='≈ 3.1–4.4';indicators.indicators[1].hi=7.6;indicators.indicators[1].rangeText='≈ 6.0–7.6';
  const fizz=get('concept-patterns');fizz.beakers=[{title:'HCl + NaOH',lines:['HCl + NaOH →','NaCl + H₂O','H⁺ + OH⁻ → H₂O'],solid:'none',gas:null,at:0},{title:'Sufficient HCl + CaCO₃',lines:['CaCO₃ + 2HCl →','CaCl₂ + H₂O + CO₂'],solid:'chip',gas:'CO₂',at:0},{title:'Dilute HCl + Mg',lines:['Mg + 2HCl →','MgCl₂ + H₂'],solid:'metal',solidLabel:'Mg',gas:'H₂',at:0}];fizz.footer={text:'Specific examples; conditions and oxidising acids matter',at:0};
 }
 const pacing=draft.scenes.map(scene=>{const old=original.scenes.find(s=>s.id===scene.id),text=scene.voiceover?.text??'',budget=getVoiceoverBudget({text,durationInFrames:old.durationInFrames,fps:draft.fps}),response=scene.id==='quick-check'?plan.response:null;scene.durationInFrames=Math.max(old.durationInFrames,budget.requiredFrames+(response?response.minimumThinkingSeconds*draft.fps:90));const narrationChanged=text!==(old.voiceover?.text??'');return {scene:scene.id,inheritedFrames:old.durationInFrames,proposedFrames:scene.durationInFrames,narrationChanged,changeKind:!narrationChanged?'unchanged':plan.scenes[scene.id]?.voiceover?'science-or-scope-correction':'punctuation-only',status:'unmeasured source estimate; cues and visual review pending',...(response?{response}:{} )};});
 assertFoundationsDraft(draft);const before=new Map(stringFields(original).map(f=>[f.field,f.text]));const changes=stringFields(draft).filter(f=>before.get(f.field)!==f.text).map(f=>({field:f.field,before:before.get(f.field)??null,after:f.text}));
 return {draft,pacing,changes,evidence:foundationsEvidence[name]};
}
export function foundationsArtifacts(name,bytes){
 const r=foundationsDraft(name,bytes),links={sourceSha256:foundationsSources[name],draftSha256:hash(JSON.stringify(r.draft,null,2)+'\n')};
 const takes=r.draft.scenes.flatMap(s=>{if(!s.voiceover)return[];const p=r.pacing.find(p=>p.scene===s.id),response=p.response;return(response?[['prompt',response.promptText],['answer',response.answerText]]:[['narration',s.voiceover.text]]).map(([phase,text])=>({scene:s.id,phase,text,textSha256:hash(text),narrationChanged:p.narrationChanged,changeKind:p.changeKind,...links,audioFile:null,status:'unapproved text candidate; unchanged narration reuse requires provenance verification'}));});
 return {draft:r.draft,changes:r.changes,pacing:{...links,scenes:r.pacing},takes:{...links,generationAuthorised:false,audioGenerated:false,voiceId:null,modelId:null,settings:null,takes},review:{...links,...r.evidence,scienceApproval:false,registered:false,rendered:false,catalogueChanged:false,holds:['Teacher/science review and curriculum delivery approval pending.','Whole-draft schema and exact source checks do not certify audio or visual readiness.','New stationary acid-diagram annotations are placeholders; measured narration cues must be rebuilt.','The indicator illustration is a qualitative colour guide, not measured fractions or alkaline fading kinetics.','The Gibbs ramp is a thermodynamic direction analogy, not a reaction-rate simulation.','Artwork pixels, font fit, motion, listening, device and continuous playback QA not run.','No executable audio generation queue is authorised.']}};
}
export function validateFoundationsArtifacts(name,bytes,artifacts){assertFoundationsDraft(artifacts.draft);assert.deepEqual(artifacts,foundationsArtifacts(name,bytes),'Foundations package differs from guarded candidate');return {scenes:artifacts.draft.scenes.length,narratedScenes:artifacts.draft.scenes.filter(s=>s.voiceover).length,narrationChanges:artifacts.pacing.scenes.filter(s=>s.narrationChanged).length,takes:artifacts.takes.takes.length};}
