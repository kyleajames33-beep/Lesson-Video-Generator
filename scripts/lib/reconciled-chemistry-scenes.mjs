import {hash,stringFields} from './science-audit.mjs';
import {removeMediaAndCues} from './science-corrections.mjs';
import {removeSpeechCues} from './quantitative-lessons.mjs';
import {getVoiceoverBudget} from '../lesson-utils.mjs';
export const reconciledChemistrySources={
 'chemistry-y11-m1-l14-isotopes-relative-atomic-mass':'3c4a4646acc7987c66ed70b135abb4d66e0dae0a262807bf7ff4244fc8336586',
 'chemistry-y11-m2-l10-volumetric-analysis-titration':'6b6e483410a6d6bf8063ac47346a98e389b143543139e984364c61cb294c978c',
 'chemistry-y11-m2-l17-back-calculations':'9914d6f5fb6463ce016733c994218cd2de81b0ef5cf3d59150f74a1492d09a65',
 'chemistry-y11-m4-l10-hess-combustion-consolidation':'24852f478c5e10dcaefbef71ee325a88067e098e81d0f83ae59d849ff7ed8665',
};
export function reconciledChemistryScenes(name,bytes){
 if(!Object.hasOwn(reconciledChemistrySources,name)||hash(bytes)!==reconciledChemistrySources[name])throw new Error('Source changed or unsupported: '+name);
 const lesson=JSON.parse(bytes),revisions=[];
 const add=(id,finding,copy,text,response=null)=>{
  const before=lesson.scenes.find(s=>s.id===id);if(!before)throw new Error('Missing scene '+id);
  const scene=removeSpeechCues(removeMediaAndCues(structuredClone(before)));Object.assign(scene,copy,{voiceover:{text}});
  const budget=getVoiceoverBudget({text,durationInFrames:before.durationInFrames,fps:lesson.fps});
  scene.durationInFrames=Math.max(before.durationInFrames,budget.requiredFrames+90+(response?.minimumThinkingSeconds??0)*lesson.fps);
  const previous=new Map(stringFields(before).map(f=>[f.field,f.text]));
  const changes=stringFields(scene).filter(f=>previous.get(f.field)!==f.text).map(f=>({field:f.field,before:previous.get(f.field)??null,after:f.text}));
  revisions.push({finding,scene,sourceSha256:hash(bytes),sourceSceneSha256:hash(JSON.stringify(before)),
   changes,response,pacing:{inheritedFrames:before.durationInFrames,proposedFrames:scene.durationInFrames,status:'estimate only; final voice, cues and response boundary pending'},
   scope:'Isolated scene proposal. Other lesson scenes and component labels are not cleared. Integrate with the whole lesson before audio or preview.'});
 };
 if(name.includes('isotopes-relative')){
  add('worked-example','historical-chemistry:C10',{
   question:'Using approximate relative isotope masses 79 and 81, and abundances 50.69% and 49.31%, calculate the approximate relative atomic mass of bromine to two decimal places.',
   coachNote:'Mass numbers are approximate masses in this exercise; they are not the measured isotope masses.',
   steps:['Use fractions 0.5069 and 0.4931.','79 × 0.5069 = 40.0451.','81 × 0.4931 = 39.9411.','Keep guard digits: 40.0451 + 39.9411 = 79.9862.','Approximate result: Ar = 79.99 using the supplied mass-number model.'],
   caption:'79.99 is an approximate mass-number result, not the tabulated atomic weight.'},
   'Use the approximate relative isotope masses explicitly supplied in this exercise: seventy-nine and eighty-one. Multiply seventy-nine by nought point five zero six nine to obtain forty point zero four five one. Multiply eighty-one by nought point four nine three one to obtain thirty-nine point nine four one one. Add before rounding: seventy-nine point nine eight six two. Report seventy-nine point nine nine to two decimal places. This is the result of the mass-number approximation. Measured isotope masses are slightly different, so the tabulated atomic weight need not equal this approximate result.');
 }else if(name.includes('volumetric-analysis')){
  add('concept','historical-chemistry:C17',{
   body:'Add a standard solution to observe an endpoint close to the stoichiometric equivalence point.',
   callout:'Concordant titres show agreement; they do not by themselves remove systematic error.',
   caption:'Endpoint is an observed signal; equivalence is the stoichiometric condition.'},
   'Place a measured portion of the unknown in a flask and add standard solution from a burette. The standard concentration is known. The endpoint is the observed signal, such as a defined indicator colour change. Choose a method for which the endpoint volume is close enough to stoichiometric equivalence. Record the delivered titre. A rough run can locate the region, and careful repeats assess agreement. Apply the acceptance rule specified by the method, for example a stated tolerance between titres. Average the suitable results while retaining guard digits. Agreement alone does not prove accuracy: a calibration error or unsuitable endpoint can affect every repeat.');
  add('worked-example','historical-chemistry:C17',{
   question:'25.00 mL of NaOH is titrated against 0.1000 mol L⁻¹ HCl. Accepted titres are 18.45, 18.50 and 18.48 mL. Calculate c(NaOH), retain the unrounded mean and report four significant figures.',
   coachNote:'The displayed mean is approximate; carry the unrounded expression through the calculation.',
   steps:['Mean titre = (18.45 + 18.50 + 18.48) / 3 = 18.476666… mL.',
    'n(HCl) = 0.1000 × [(18.45 + 18.50 + 18.48) / 3] / 1000 mol.',
    'The 1:1 equation gives n(NaOH) = n(HCl).','c(NaOH) = 0.1000 × [(18.45 + 18.50 + 18.48) / 3] / 25.00.',
    'Unrounded c ≈ 0.0739066667 mol L⁻¹; report 0.07391 mol L⁻¹ (4 s.f.).'],
   caption:'Retain the unrounded mean; the requested four-significant-figure result is 0.07391 mol L⁻¹.'},
   'The question explicitly asks for four significant figures and an unrounded mean. Add eighteen point four five, eighteen point five zero and eighteen point four eight, then divide by three. Keep that expression in the calculation rather than substituting a rounded mean. The acid and base react one to one. Multiply the acid concentration, nought point one zero zero zero, by the mean titre and divide by the twenty-five point zero zero millilitre base aliquot. The two volume units cancel. The concentration is approximately nought point zero seven three nine zero six six six seven moles per litre. To four significant figures, report nought point zero seven three nine one moles per litre.');
 }else if(name.includes('back-calculations')){
  add('worked-example','historical-chemistry:C19',{
   question:'25.0 mL of NaOH is titrated against 0.100 mol L⁻¹ HCl. Accepted titres are 22.3, 22.4 and 22.3 mL. Calculate [NaOH], retaining the unrounded mean and reporting three significant figures.',
   coachNote:'Keep the mean in the expression; the displayed 22.3 mL is only a rounded summary.',
   steps:['Mean titre = (22.3 + 22.4 + 22.3) / 3 = 22.3333… mL.',
    'n(HCl) = 0.100 × [(22.3 + 22.4 + 22.3) / 3] / 1000 mol.',
    'HCl : NaOH = 1 : 1, so the base has the same mole amount.',
    '[NaOH] = 0.100 × [(22.3 + 22.4 + 22.3) / 3] / 25.0.',
    'Unrounded [NaOH] ≈ 0.0893333 mol L⁻¹; report 0.0893 mol L⁻¹ (3 s.f.).'],
   caption:'The final 0.0893 mol L⁻¹ is retained; its working now uses the unrounded mean.'},
   'Average the three accepted titres without discarding the repeating digits. Twenty-two point three plus twenty-two point four plus twenty-two point three, divided by three, gives twenty-two point three recurring millilitres. Keep that expression. The one-to-one equation gives the same moles of acid and base. Multiply nought point one zero zero by the mean titre, then divide by the twenty-five point zero millilitre base aliquot. The result is approximately nought point zero eight nine three recurring moles per litre. Report nought point zero eight nine three to three significant figures. The final answer stays the same; the working must not claim that a rounded intermediate gives an incompatible exact equality.');
 }else{
  const response={minimumThinkingSeconds:40,
   promptText:'A question supplies only the combustion enthalpies of ethyne and ethane, minus thirteen hundred and minus fifteen hundred and sixty kilojoules per mole. It asks for the enthalpy of ethyne plus two hydrogen molecules forming ethane. Is Hess law relevant, and are the supplied data sufficient? Identify any missing thermochemical datum. Pause and explain.',
   answerText:'Hess law is relevant, but the two supplied combustion equations are insufficient. Neither contains hydrogen gas as a species, so reversing, adding or scaling them cannot create the required hydrogen reactant. Add the combustion enthalpy of hydrogen to water, with the water phase and other conditions consistent with both supplied combustions. Then ethyne combustion plus twice hydrogen combustion minus ethane combustion gives the desired reaction. Without that extra datum, do not claim a numerical enthalpy.'};
  add('quick-check','historical-chemistry:C28',{
   question:'Only ΔcH(ethyne) = −1300 and ΔcH(ethane) = −1560 kJ mol⁻¹ are supplied. For C₂H₂ + 2H₂ → C₂H₆, is Hess law relevant and are these data sufficient? Identify missing data.',
   pausePrompt:'Pause: can either supplied equation contribute an H₂ term?',
   answerSteps:['Hess law is the appropriate framework, but the data are incomplete.',
    'Neither supplied combustion equation contains H₂, so their combinations cannot produce the target.',
    'Need ΔcH(H₂ → H₂O), with consistent product-water phase and reference conditions.',
    'ΔH(target) = ΔcH(C₂H₂) + 2ΔcH(H₂) − ΔcH(C₂H₆).',
    'No numerical target enthalpy follows from the two supplied values alone.'],
   caption:'Hess law applies, but hydrogen combustion data and consistent phases are missing.'},
   response.promptText+' '+response.answerText,response);
 }
 return revisions;
}
