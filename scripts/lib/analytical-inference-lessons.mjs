import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {hash,stringFields} from './science-audit.mjs';
import {removeMediaAndCues} from './science-corrections.mjs';
import {removeSpeechCues} from './quantitative-lessons.mjs';
import {reconciledChemistryScenes,reconciledChemistrySources} from './reconciled-chemistry-scenes.mjs';
import {getVoiceoverBudget} from '../lesson-utils.mjs';
import {validateAnalyticalDiagram} from '../../src/slides/diagrams/analytical-inference-models.mjs';
const copy={...JSON.parse(readFileSync(new URL('../data/analytical-titration-copy.json',import.meta.url))),...JSON.parse(readFileSync(new URL('../data/analytical-qualitative-copy.json',import.meta.url)))};
export const analyticalSources={
  "chemistry-y11-m2-l10-volumetric-analysis-titration": "6b6e483410a6d6bf8063ac47346a98e389b143543139e984364c61cb294c978c",
  "chemistry-y11-m2-l17-back-calculations": "9914d6f5fb6463ce016733c994218cd2de81b0ef5cf3d59150f74a1492d09a65",
  "chemistry-y12-m6-l16-titration-curves": "d9b402eecd4da835e231177ec52b4aa6b322891018e219ca63fbac9f0fa16aec",
  "chemistry-y12-m6-l17-titration-indicator-mastery": "c6800bb97501a3b4bcb25caf68964ee2755837776fe221455ff9f29abbac78ca",
  "chemistry-y12-m8-l3-precipitation-qualitative-analysis": "ed93f94f9be06b5d75a7a8f6aa05acef2569502976a4dd0b0795e08ac8ff6e5a"
};
export const analyticalEvidence={...JSON.parse(readFileSync(new URL('../data/analytical-titration-evidence.json',import.meta.url))),...JSON.parse(readFileSync(new URL('../data/analytical-qualitative-evidence.json',import.meta.url)))};
// Independent ideal monoprotic weak-acid/strong-base charge balance.
export function weakAcidTitrationPH(addedMl,{volumeMl=25,acidM=.1,titrantM=.1,pKa=4.74,kw=1e-14}={}){
 if(![addedMl,volumeMl,acidM,titrantM,pKa,kw].every(Number.isFinite)||addedMl<0||volumeMl<=0||acidM<=0||titrantM<=0||kw<=0||pKa<0||pKa>14)throw new Error('Invalid ideal titration model inputs');
 const total=volumeMl+addedMl,acidTotal=acidM*volumeMl/total,sodium=titrantM*addedMl/total,ka=10**-pKa;
 let lo=-2,hi=16;
 for(let i=0;i<160;i++){const ph=(lo+hi)/2,h=10**-ph,residual=h+sodium-kw/h-acidTotal*ka/(ka+h);if(residual>0)lo=ph;else hi=ph;}
 return (lo+hi)/2;
}
function stationaryAllowed(draft,trail,key,child){
 if(child!==0)return false;const m=trail.match(/^\.scenes\.(\d+)\.diagram\.props(?:\.(.*))?$/u);if(!m)return false;
 if(draft.scenes[Number(m[1])]?.diagram?.kind!=='chem12m6TitrationCurve')return false;
 return key==='at'&&/^(?:series|bands)\.\d+$/u.test(m[2]??'')||['epAt','halfAt','pKaAt','bufferAt'].includes(key)&&m[2]==='markers';
}
export function assertAnalyticalDraft(draft){
 const visit=(value,trail='')=>{if(!value||typeof value!=='object')return;for(const [key,child]of Object.entries(value)){
  if(/audio|alignment|backgroundMusic/iu.test(key)||['captions','introVoiceover','responseHold','startFrame','endFrame','delay','beat','beats','revealDelays'].includes(key)||((key==='at'||/(?:At|Beat)$/u.test(key))&&!stationaryAllowed(draft,trail,key,child)))throw new Error('Inherited analytical-inference media/cue: '+trail+'.'+key);
  visit(child,trail+'.'+key);
 }};visit(draft);if(JSON.stringify(draft).includes('\u2014'))throw new Error('Prohibited punctuation');for(const s of draft.scenes)validateAnalyticalDiagram(s.diagram);
}
export function analyticalDraft(name,bytes){
 if(!Object.hasOwn(analyticalSources,name)||hash(bytes)!==analyticalSources[name])throw new Error('Analytical-inference source changed: review content, not just its hash');
 const original=JSON.parse(bytes),draft=removeSpeechCues(removeMediaAndCues(structuredClone(original))),plan=copy[name];
 for(const k of ['introVoiceover','productionRole','productionNotes'])delete draft[k];
 Object.assign(draft,structuredClone(plan.root));
 if(Object.hasOwn(reconciledChemistrySources,name))for(const r of reconciledChemistryScenes(name,bytes))Object.assign(draft.scenes.find(s=>s.id===r.scene.id),structuredClone(r.scene));
 for(const [id,patch]of Object.entries(plan.scenes)){const scene=draft.scenes.find(s=>s.id===id);if(!scene)throw new Error('Missing analytical-inference scene '+id);Object.assign(scene,structuredClone(patch));}
 // Declarative source patches can retain original diagram properties; strip
 // media/cues again before authoring explicitly new zero-time review markers.
 Object.assign(draft,removeSpeechCues(removeMediaAndCues(draft)));
 for(const scene of draft.scenes){const d=scene.diagram;if(!d)continue;
  if(['chem12m8TubeTests','chem12m8FlameTests'].includes(d.kind))d.props.reviewedAnalytical=true;
  if(d.kind==='chem11m2Pathway')Object.assign(d.props,{given:{icon:'solution',label:'known amount',sub:'mass or c × known V'},wanted:{icon:'solution',label:'unknown solution',sub:'concentration'},inOp:'establish n',outOp:'÷ matching V',trap:'Use the stated reaction and matching solution volume'});
  if(d.kind==='chem12m6TitrationCurve'){
   const grid=scene.id==='concept-four-types';
   d.props={reviewedAnalytical:true,ca:.1,va:25,cb:.1,pKa:4.74,pKb:4.75,vMax:50,
    series:(grid?['SA-SB','WA-SB','SA-WB','WA-WB']:['WA-SB']).map(type=>({type,label:({'SA-SB':'strong acid + strong base','WA-SB':'weak acid + strong base','SA-WB':'strong acid + weak base','WA-WB':'weak acid + weak base'})[type],at:0,dur:110,epLabel:'model EP pH {pH}'})),
    ...(grid?{grid:true}:{apparatus:scene.id==='concept-reading',epDots:false,markers:{epAt:0,halfAt:0,pKaAt:0,bufferAt:0}}),
    ...(scene.id==='concept-students'?{bands:[{lo:8.3,hi:10,label:'phenolphthalein',color:'#e0368f',at:0}]}:{})};
  }
 }
 const clean=value=>typeof value==='string'?value.replaceAll('\u2014',','):Array.isArray(value)?value.map(clean):value&&typeof value==='object'?Object.fromEntries(Object.entries(value).map(([k,v])=>[k,clean(v)])):value;
 Object.assign(draft,clean(draft));
 const pacing=draft.scenes.map(scene=>{const old=original.scenes.find(s=>s.id===scene.id),text=scene.voiceover?.text??'',budget=getVoiceoverBudget({text,durationInFrames:old.durationInFrames,fps:draft.fps}),response=scene.id==='quick-check'?plan.response:null;scene.durationInFrames=Math.max(old.durationInFrames,budget.requiredFrames+(response?response.minimumThinkingSeconds*draft.fps:90));const narrationChanged=text!==(old.voiceover?.text??'');return {scene:scene.id,inheritedFrames:old.durationInFrames,proposedFrames:scene.durationInFrames,narrationChanged,changeKind:!narrationChanged?'unchanged':plan.scenes[scene.id]?.voiceover?'science-or-scope-correction':'punctuation-only',status:'unmeasured source estimate; cues and visual review pending',...(response?{response}:{} )};});
 assertAnalyticalDraft(draft);const before=new Map(stringFields(original).map(f=>[f.field,f.text]));const changes=stringFields(draft).filter(f=>before.get(f.field)!==f.text).map(f=>({field:f.field,before:before.get(f.field)??null,after:f.text}));
 return {draft,pacing,changes,evidence:analyticalEvidence[name]};
}
export function analyticalArtifacts(name,bytes){
 const r=analyticalDraft(name,bytes),links={sourceSha256:analyticalSources[name],draftSha256:hash(JSON.stringify(r.draft,null,2)+'\n')};
 const takes=r.draft.scenes.flatMap(s=>{if(!s.voiceover)return[];const p=r.pacing.find(p=>p.scene===s.id),response=p.response;return(response?[['prompt',response.promptText],['answer',response.answerText]]:[['narration',s.voiceover.text]]).map(([phase,text])=>({scene:s.id,phase,text,textSha256:hash(text),narrationChanged:p.narrationChanged,changeKind:p.changeKind,...links,audioFile:null,status:'unapproved text candidate; unchanged narration reuse requires provenance verification'}));});
 return {draft:r.draft,changes:r.changes,pacing:{...links,scenes:r.pacing},takes:{...links,generationAuthorised:false,audioGenerated:false,voiceId:null,modelId:null,settings:null,takes},review:{...links,...r.evidence,scienceApproval:false,registered:false,rendered:false,catalogueChanged:false,holds:['Teacher/science and curriculum delivery review pending.','This package fully integrates the C17/C19 scene amendments without refreshing original source guards.','Model values are ideal calculations, not measured precision, unique sample identity or validated practical performance.','The new zero-time curve-series and reading markers are review placeholders, not inherited or measured narration cues.','Other diagram defaults are unmeasured; final narration-linked animation and response boundaries must be rebuilt.','Retained artwork pixels, fonts, optical/electronic displays, listening, device and continuous playback QA not run.','Chemical test examples require a teacher-approved procedure and risk assessment; do not test unlabelled substances or identify gases by direct smell.','No executable audio generation queue is authorised.' ]}};
}
export function validateAnalyticalArtifacts(name,bytes,artifacts){assertAnalyticalDraft(artifacts.draft);assert.deepEqual(artifacts,analyticalArtifacts(name,bytes),'Analytical-inference package differs from guarded candidate');return {scenes:artifacts.draft.scenes.length,narratedScenes:artifacts.draft.scenes.filter(s=>s.voiceover).length,narrationChanges:artifacts.pacing.scenes.filter(s=>s.narrationChanged).length,takes:artifacts.takes.takes.length};}
