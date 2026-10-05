import assert from 'node:assert/strict';
import {hash, stringFields} from './science-audit.mjs';
import {removeMediaAndCues} from './science-corrections.mjs';
import {removeSpeechCues} from './quantitative-lessons.mjs';
import {getVoiceoverBudget} from '../lesson-utils.mjs';

export const indicatorName = 'chemistry-y12-m6-l15-indicators';
export const indicatorSourceSha256 = 'bd8f3954b80afc24ee904692083bde33fb716ae322740402c8ddebf06be7bf6c';
export const indicatorEvidence = [
  {url: 'https://publications.iupac.org/pac/pdf/1969/pdf/1803x0427.pdf', scope: 'Original IUPAC recommendations: visual endpoint, equivalence and small indicator consumption.'},
  {url: 'https://media.iupac.org/publications/analytical_compendium/Cha06sec2.pdf', scope: 'Stoichiometric equivalence and observed endpoints are distinct.'},
  {url: 'https://openstax.org/books/chemistry-2e/pages/14-7-acid-base-titrations', scope: 'Authored textbook cross-check of indicator intervals and the steep-region criterion.'},
  {url: 'https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017', scope: '2017 Module 6 placement retained. Practical delivery and outcome achievement not certified.'},
  {url: 'https://curriculum.nsw.edu.au/learning-areas/science/chemistry-11-12-2025/overview/course', scope: 'New Year 11 starts 2028, Year 12 Term 4 2028, first HSC 2029. Do not relabel this lesson.'},
];
// Original ideal-solution charge-balance calculation, not experimental data.
// Ct*V + h*(V0+V) = Ca*V0*Ka/(Ka+h) + (Kw/h)*(V0+V).
// Volumes are mL on both sides. ka=null denotes complete acid dissociation.
export function titrantVolumeAtPH(pH, {volumeMl=25,acidM=.1,titrantM=.1,ka=null,kw=1e-14}={}) {
  if (![pH,volumeMl,acidM,titrantM,kw].every(Number.isFinite) || volumeMl<=0 || acidM<=0 || titrantM<=0 || kw<=0 || (ka!==null && (!Number.isFinite(ka)||ka<=0))) throw new Error('Invalid titration inputs');
  const h=10**-pH,d=kw/h-h,f=ka===null?1:ka/(ka+h),denominator=titrantM-d;
  const volume=volumeMl*(acidM*f+d)/denominator;
  if(denominator<=0||!Number.isFinite(volume)||volume<0)throw new Error('pH is outside this titration model');
  return volume;
}
export function assertUnvoicedIndicatorDraft(draft) {
  const visit=(value,trail='')=>{
    if(!value||typeof value!=='object')return;
    for(const [key,child] of Object.entries(value)){
      const field=trail+'.'+key;
      // A newly authored stationary midpoint satisfies the required sweep
      // contract. It is not copied or measured narration timing.
      const stationary=field==='.scenes.2.diagram.props.sweep.0.at'&&child===0&&value.pH===7;
      if(/audio|alignment|backgroundMusic/iu.test(key)||['captions','introVoiceover','responseHold','startFrame','endFrame','delay','beat','beats','revealDelays'].includes(key)||/(?:At|Beat)$/u.test(key)||(key==='at'&&!stationary))throw new Error('Stale indicator media/cue: '+field);
      visit(child,field);
    }
  };visit(draft);
  if(JSON.stringify(draft).includes('\u2014'))throw new Error('Prohibited punctuation in indicator draft');
}
export function indicatorDraft(bytes) {
  if(hash(bytes)!==indicatorSourceSha256)throw new Error('Indicator source changed. Review the correction, not just the hash.');
  const original=JSON.parse(bytes),draft=removeSpeechCues(removeMediaAndCues(structuredClone(original)));
  delete draft.introVoiceover;delete draft.productionRole;delete draft.productionNotes;
  draft.lessonIntent='Distinguish endpoint from equivalence and justify an indicator using the actual titration curve and acceptable volume error.';
  draft.examSkill='Use stoichiometry, solution equilibria and a supplied curve to evaluate indicator choice under stated conditions.';
  const set=(id,copy,text)=>{const s=draft.scenes.find(s=>s.id===id);if(!s)throw new Error('Missing indicator scene '+id);Object.assign(s,copy,{voiceover:{text}});return s;};
  set('hook',{heading:'A colour change can come too soon',body:'Hypothetical example: methyl orange changes before equivalence when ethanoic acid is titrated with sodium hydroxide.',callout:'A clear colour change can still give the wrong titre.',caption:'Hypothetical titration: choose from the curve and check the volume error.'},
    'Imagine titrating ethanoic acid with sodium hydroxide and stopping at the methyl orange colour change. That can occur well before the required amount of base has been added. This is a hypothetical example, not a documented laboratory incident. A visible colour change is not enough: the endpoint volume must be close enough to the equivalence volume for the intended analysis. Today we separate those two ideas and justify indicator choices using the titration curve.');
  const mechanism=set('concept-mechanism',{heading:'A simple indicator equilibrium',body:'Many indicators can be modelled as a weak acid and its differently coloured conjugate base.',bullets:[
    {text:'HIn ⇌ H⁺ + In⁻ is a simple weak-acid indicator model.'},{text:'Changing pH changes the ratio of the two coloured forms.'},{text:'A typical visible interval is about pKIn ± 1; actual ranges are empirical.'}],
    secondary:'The ratio model explains a transition; observation conditions and indicator chemistry affect its visible interval.',callout:'Use the supplied indicator range.',caption:'The pKIn ± 1 interval is approximate.'},
    'Acid-base indicators can be weak acids or weak bases. Here we use a simple weak-acid model: H In is in equilibrium with hydrogen ion and In minus. The two forms have different colours. At lower p H the acid form is favoured; at higher p H the conjugate-base form is favoured. Changing from about ten times more acid form to ten times more base form spans about two p H units. That explains the approximate p K indicator plus or minus one rule. Actual visible ranges depend on the indicator and observation conditions. Use the supplied range rather than treating this model as a universal optical threshold.');
  mechanism.diagram.props.sweep=[{pH:7,at:0}];
  mechanism.diagram.props.indicators[0].rangeText='Approximate transition: pKIn ± 1';
  set('concept-ep',{heading:'Equivalence is a stoichiometric condition',body:'The reaction equation sets the required acid-base ratio. The resulting solution determines pH.',bullets:[
    {text:'HCl + NaOH: neutral at equivalence; pH 7 at 25 °C in the ideal model.'},{text:'Ethanoic acid + NaOH: acetate makes equivalence basic.'},{text:'Ammonia + HCl: ammonium makes equivalence acidic.'}],
    secondary:'Concentration, temperature and equilibrium constants affect the curve. A weak/weak pair may have no useful visual endpoint.',callout:'Judge the transition on the actual curve.',caption:'Equivalence pH alone does not determine endpoint volume error.'},
    'Equivalence means that acid and base have reacted in their stoichiometric proportions. It does not mean that every titration reaches p H seven. For hydrochloric acid and sodium hydroxide, the equivalence solution is neutral, giving p H seven at twenty-five degrees Celsius in this ideal model. Acetate from ethanoic acid and sodium hydroxide makes equivalence basic. Ammonium from ammonia and hydrochloric acid makes it acidic. The precise value depends on the solution conditions. Compare an indicator transition with the actual steep part of the curve. A weak acid and weak base can give an endpoint that is difficult to locate even with instrumental data.');
  set('definition',{heading:'Transition range and endpoint',bullets:[
    {text:'Methyl orange: approximately pH 3.1–4.4, red to yellow as pH rises.'},{text:'Bromothymol blue: approximately pH 6.0–7.6, yellow to blue.'},{text:'Phenolphthalein: approximately pH 8.3–10.0, colourless to pink.'},{text:'Endpoint: observed signal. Equivalence: stoichiometric condition.'}],
    callout:'Ranges are useful data, not automatic titration-type rules.',caption:'Use a consistent endpoint criterion and a small indicator amount.'},
    'Useful approximate transition intervals are three point one to four point four for methyl orange, six point zero to seven point six for bromothymol blue, and eight point three to ten point zero for phenolphthalein. These colour directions describe increasing p H; adding acid reverses them. The endpoint is the observed signal, such as a specified persistent colour. Equivalence is defined by reaction stoichiometry. Their volumes should be close enough for the analytical purpose. Use a consistent observation criterion and a small indicator amount so its own acid-base reaction does not consume appreciable titrant.');
  set('worked-example',{heading:'The range need not contain pH 7',question:'Ideal model at 25 °C: 25.00 mL of 0.100 mol L⁻¹ HCl is titrated with 0.100 mol L⁻¹ NaOH. Judge a pH 8.3–10.0 interval using an illustrative ±0.10 mL endpoint tolerance.',
    coachNote:'Calculated curve, not experimental precision or a universal acceptance limit.',steps:[
      'Stoichiometry gives Veq = 25.00 mL; ideal equivalence pH = 7.00.','Charge balance gives V(pH 8.3) ≈ 25.001 mL.','Charge balance gives V(pH 10.0) ≈ 25.050 mL.','The interval stays within the stated ±0.10 mL tolerance.','It does not contain pH 7. Evaluate endpoint volume error, not literal bracketing.'],
    caption:'Ideal calculation: about +0.001 to +0.050 mL across the interval.'},
    'Consider twenty-five point zero zero millilitres of nought point one zero zero molar hydrochloric acid, titrated with the same concentration of sodium hydroxide at twenty-five degrees Celsius. Assume ideal solutions and negligible indicator consumption. Equivalence is at twenty-five point zero zero millilitres and p H seven. Our independent charge-balance calculation places p H eight point three at about twenty-five point zero zero one millilitres, and p H ten at about twenty-five point zero five zero millilitres. Both fall within the illustrative tolerance of plus or minus nought point one zero millilitres. The transition does not contain p H seven, but the calculated volume error meets the stated criterion. Different concentrations or required precision need their own check.');
  set('misconception',{heading:'Avoid automatic indicator rules',body:'The transition need not contain the exact equivalence pH.',secondary:'An acidic or basic equivalence pH alone does not establish suitability. Use the curve, concentrations and accepted volume error.',
    mistakeTag:'Endpoint and equivalence are different',callout:'A schematic does not establish a real incident or guaranteed accuracy.',caption:'A pH meter supplies data; it does not guarantee a sharply defined endpoint.'},
    'Avoid three shortcuts. First, do not insist that an indicator interval contains the exact equivalence p H. Our strong-acid example shows why that is too strict. Second, do not choose solely from the labels strong and weak. Concentration and required precision also matter. Third, do not assume a p H meter automatically repairs an unsuitable titration. It records the curve, but weak reactions and shallow changes can still make endpoint analysis difficult. Keep a teaching example clearly separate from a documented experimental result.');
  const response={minimumThinkingSeconds:45,
    promptText:'A supplied curve describes ethanoic acid titrated with sodium hydroxide. Its equivalence volume is twenty-five millilitres. Methyl orange changes from about one to eight millilitres. Phenolphthalein changes from twenty-four point nine nine to twenty-five point zero five millilitres. These are rounded illustrative intervals. With an allowed endpoint error of plus or minus nought point one millilitres, which indicator is suitable? Explain using volumes, rather than only the equivalence p H. Pause and decide.',
    answerText:'Phenolphthalein is suitable for the supplied curve and tolerance. Its transition volumes are within nought point one millilitres of twenty-five millilitres. Methyl orange changes much earlier and fails that criterion. The reason is the endpoint volume error, not a requirement that the transition contain an exact p H. A real analysis still needs a defined observation criterion, suitable apparatus and an uncertainty assessment.'};
  set('quick-check',{question:'Illustrative curve intervals: Veq = 25.00 mL; methyl orange changes at about 1–8 mL; phenolphthalein at 24.99–25.05 mL. Which satisfies an illustrative ±0.10 mL endpoint tolerance? Explain.',
    pausePrompt:'Pause: compare each transition volume with 25.00 mL.',answerSteps:['Phenolphthalein: the interval is within 0.10 mL of equivalence.','Methyl orange: the interval is far before equivalence.','Use the actual curve and required volume tolerance.','These are teaching calculations, not measured precision or a validated method.'],caption:'Use the supplied intervals and endpoint-volume criterion.'},response.promptText+' '+response.answerText);
  set('summary',{points:['Equivalence is fixed by reaction stoichiometry.','The endpoint is observed and can have a volume error.','Indicator intervals are empirical and condition-dependent.','Choose a transition near equivalence with an acceptable volume error.','Recheck the actual curve, concentrations and required precision.'],
    finalPrompt:'Which volume does the signal mark, and is its error acceptable?',caption:'Choose with the actual curve and a stated analytical tolerance.'},
    'Separate stoichiometric equivalence from the endpoint you observe. Use the actual curve, an appropriate indicator interval and the required volume tolerance. The transition should give a small enough endpoint error near equivalence. It does not have to contain the exact equivalence p H. Check concentration, temperature and observation conditions, and state when numbers are illustrative. A lesson or calculation does not replace conducting and evaluating a practical titration.');
  const pacing=draft.scenes.map(scene=>{
    const old=original.scenes.find(s=>s.id===scene.id);
    const budget=getVoiceoverBudget({text:scene.voiceover?.text??'',durationInFrames:old.durationInFrames,fps:draft.fps});
    scene.durationInFrames=Math.max(old.durationInFrames,budget.requiredFrames+(scene.id==='quick-check'?response.minimumThinkingSeconds*draft.fps:90));
    return {scene:scene.id,inheritedFrames:old.durationInFrames,proposedFrames:scene.durationInFrames,status:'source estimate; recorded pacing and visual review pending',
      ...(scene.id==='quick-check'?{response}:{}),motion:scene.id==='concept-mechanism'?'Stationary midpoint placeholder; rebuild pH sweep from new narration cues before preview.':'Retain the existing treatment; rebuild and review removed cues before preview.'};
  });
  assertUnvoicedIndicatorDraft(draft);
  const before=new Map(stringFields(original).map(f=>[f.field,f.text]));
  const changes=stringFields(draft).filter(f=>before.get(f.field)!==f.text).map(f=>({field:f.field,before:before.get(f.field)??null,after:f.text}));
  return {draft,sourceSha256:indicatorSourceSha256,changes,pacing,evidence:indicatorEvidence};
}
export function indicatorArtifacts(bytes) {
  const result=indicatorDraft(bytes),draftSha256=hash(JSON.stringify(result.draft,null,2)+'\n');
  const links={sourceSha256:result.sourceSha256,draftSha256};
  const takes=result.draft.scenes.flatMap(scene=>{
    if(!scene.voiceover)return [];
    const response=result.pacing.find(p=>p.scene===scene.id).response;
    return (response?[['prompt',response.promptText],['answer',response.answerText]]:[['narration',scene.voiceover.text]]).map(([phase,text])=>({scene:scene.id,phase,text,textSha256:hash(text),...links,audioFile:null,status:'unapproved text candidate'}));
  });
  return {draft:result.draft,changes:result.changes,pacing:{...links,scenes:result.pacing},
    takes:{...links,generationAuthorised:false,audioGenerated:false,voiceId:null,modelId:null,settings:null,takes},
    review:{...links,sources:result.evidence,scienceApproval:false,registered:false,rendered:false,catalogueChanged:false,limitations:[
      'Scientific and teacher review pending.','No audio, listening, measured pacing, render or device review.','Stationary diagram placeholder requires new narration cues.','Curriculum edition and mapping retained; practical achievement is not established.']}};
}
export function validateIndicatorArtifacts(bytes,artifacts) {
  assertUnvoicedIndicatorDraft(artifacts.draft);
  assert.deepEqual(artifacts,indicatorArtifacts(bytes),'Indicator proposal differs from the source package');
  return {scenes:artifacts.draft.scenes.length,narratedScenes:artifacts.draft.scenes.filter(s=>s.voiceover).length,takes:artifacts.takes.takes.length};
}
