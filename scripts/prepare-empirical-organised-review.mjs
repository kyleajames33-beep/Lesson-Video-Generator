import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {createProductionBrief} from './lib/production-brief.mjs';
import {lessonTimeline} from '../src/lesson/timeline.mjs';
const dir='out/prototypes/empirical-formulas-organised-2026-10-09';
const source='out/prototypes/next-chemistry-review-2026-10-09/empirical-formulas.lesson.json';
if(fs.existsSync(`${dir}/lesson.json`)){
 const existing=JSON.parse(fs.readFileSync(`${dir}/lesson.json`));
 const manifestPath=`${dir}/voice-manifest.json`;
 const recorded=existing.scenes.some(scene=>scene.voiceover?.audioFile)||fs.existsSync(manifestPath)&&JSON.parse(fs.readFileSync(manifestPath)).scenes.some(scene=>scene.audioFile&&fs.existsSync(scene.audioFile));
 if(!process.argv.includes('--refresh-unrecorded')||recorded)throw Error('Preserve recorded work. Use --refresh-unrecorded only while this revision has no recordings.');
}
const lesson=JSON.parse(fs.readFileSync(source));
const get=id=>lesson.scenes.find(s=>s.id===id);
get('molecular-extension').voiceover.text=get('molecular-extension').voiceover.text.replace('One empirical formula has a formula mass of thirty point zero two six. The actual molecular mass is about six times that size', 'The empirical-formula molar mass is thirty point zero two six grams per mole. The supplied molar mass is about six times that value');
get('hook').voiceover.text="We already know how to turn grams into moles. Now we can use that idea to work backwards from a compound's composition. "+get('hook').voiceover.text;
get('summary').voiceover.text+=" Next, a balanced equation lets us compare amounts of different substances in a reaction. That is a different ratio, and it is where stoichiometry begins.";
for(const id of ['hook','summary'])get(id).durationInFrames=Math.ceil(get(id).voiceover.text.trim().split(/\s+/).length/150*1800)+60;
const elements=[{label:'Carbon (C)',value:'40.00%',reference:'M = 12.01 g mol⁻¹'},{label:'Hydrogen (H)',value:'6.71%',reference:'M = 1.008 g mol⁻¹'},{label:'Oxygen (O)',value:'53.29%',reference:'M = 16.00 g mol⁻¹'}];
get('worked-example').steps=['Convert the elemental masses to moles','Divide by the smallest unrounded amount','Recognise the whole-number atom ratio','Write the empirical formula'];
get('worked-example').revealDelays.stepAts=[45,432,673,780];
get('worked-example').calculationPresentation={task:'Find the empirical formula from composition',givens:elements,note:'Choose a 100 g calculation basis. Retain unrounded amounts for the ratios.',stages:[
 {label:'Convert each elemental mass to moles',lines:['n(C) = 40.00 ÷ 12.01 ≈ 3.3306 mol','n(H) = 6.71 ÷ 1.008 ≈ 6.6567 mol','n(O) = 53.29 ÷ 16.00 ≈ 3.3306 mol'],summary:'C: 3.3306 mol; H: 6.6567 mol; O: 3.3306 mol'},
 {label:'Divide all amounts by the smallest',lines:['Using unrounded mole amounts:','C : H : O ≈ 1 : 1.99869 : 1.00002'],summary:'Normalised ratio: close to 1 : 2 : 1'},
 {label:'Recognise the simplest whole-number ratio',lines:['C : H : O = 1 : 2 : 1'],summary:'One carbon, two hydrogens, one oxygen'},
 {label:'Write the empirical formula',lines:['CH₂O'],summary:'Empirical formula: CH₂O'}
]};
get('molecular-extension').calculationPresentation={task:'Extension: find the molecular formula',givens:[{label:'Empirical formula',value:'CH₂O'},{label:'Molecular M',value:'180.16 g mol⁻¹'}],references:[{label:'M(C)',value:'12.01 g mol⁻¹'},{label:'M(H)',value:'1.008 g mol⁻¹'},{label:'M(O)',value:'16.00 g mol⁻¹'}],note:'The molecule is a whole-number multiple of the empirical formula.',stages:[
 {label:'Find the mass of one empirical-formula amount',lines:['M(CH₂O) = 12.01 + 2(1.008) + 16.00'],summary:'Add the elemental contributions'},
 {label:'Keep the empirical molar mass',lines:['M(CH₂O) = 30.026 g mol⁻¹'],summary:'Empirical-formula molar mass: 30.026 g mol⁻¹'},
 {label:'Find the whole-number multiplier',lines:['180.16 ÷ 30.026 ≈ 6'],summary:'Molecular formula is 6 times the empirical ratio'},
 {label:'Multiply every subscript by the same number',lines:['(CH₂O) × 6 → C₆H₁₂O₆'],summary:'Molecular formula: C₆H₁₂O₆'},
 {label:'Keep the identification claim limited',lines:['Glucose has this molecular formula.','The formula alone does not identify a substance.'],summary:'Formula is composition, not a unique identity'}
]};
const quick=get('quick-check');
quick.answerSteps=['Convert composition masses to moles','Divide both mole amounts by the smaller','Empirical formula NO₂'];
quick.revealDelays.stepAts=[quick.revealDelays.stepAts[0],quick.revealDelays.stepAts[3],quick.revealDelays.stepAts[4]];
quick.calculationPresentation={task:'Find the empirical formula of this compound',givens:[{label:'Nitrogen (N)',value:'30.45%',reference:'M = 14.01 g mol⁻¹'},{label:'Oxygen (O)',value:'69.55%',reference:'M = 16.00 g mol⁻¹'}],note:'Percentages are by mass. A 100 g calculation basis gives 30.45 g N and 69.55 g O.',stages:[
 {label:'Convert the composition masses to moles',lines:['n(N) = 30.45 ÷ 14.01 ≈ 2.1734 mol','n(O) = 69.55 ÷ 16.00 ≈ 4.3469 mol'],summary:'N: 2.1734 mol; O: 4.3469 mol'},
 {label:'Divide both amounts by the smaller',lines:['Using unrounded mole amounts:','N : O ≈ 1 : 2'],summary:'Simplest atom ratio: 1 : 2'},
 {label:'Write the empirical formula',lines:['NO₂'],summary:'Empirical formula: NO₂'}
]};
if(JSON.stringify(lesson).includes(String.fromCharCode(0x2014)))throw Error('Forbidden copy punctuation');
for(const scene of lesson.scenes)if(scene.voiceover?.audioFile||scene.captions)throw Error('Do not attach stale recordings/captions to this revised draft');
fs.mkdirSync(dir,{recursive:true});
const save=(name,data)=>fs.writeFileSync(`${dir}/${name}`,JSON.stringify(data,null,2)+'\n');
save('lesson.json',lesson);save('remotion-props.json',{lesson});
const brief=createProductionBrief(process.cwd(),`${dir}/lesson.json`);
brief.progression={planPath:'docs/production/course-progression-plan-2026-10-09.md',prerequisiteKnowledge:'Chemical formula reading, molar mass and grams-to-moles conversion',startsWith:'Mass composition as a clue to an atom ratio, not a unique identity',stopsAfter:'Infer simplest whole-number atom ratios from composition; molecular inference stays a labelled extension',nextLesson:'Mole ratios between substances from a balanced equation'};
const previous=JSON.parse(fs.readFileSync('out/prototypes/next-chemistry-review-2026-10-09/empirical-formulas.lesson.production-brief.json'));
brief.teaching=previous.teaching;brief.scenes=previous.scenes;
for(const scene of brief.scenes){if(get(scene.sceneId)?.calculationPresentation){scene.visualDecision='adjust';scene.visualReference='src/slides/shared/OrganisedCalculation.tsx';scene.teachingReason+=' Keep supplied quantities together and show one operation at a time.';scene.motionPurpose='Reveal the current stage; retain completed results as a compact trail.';}}
brief.teaching.curriculumScope+=' Course boundary: enter with formula reading and grams/moles; stop core at within-substance ratios. Next video covers between-substance ratios from balanced equations.';
save('production-brief.json',brief);
const manifest=JSON.parse(fs.readFileSync('out/prototypes/next-chemistry-review-2026-10-09/voice-manifest.text-only.json'));
manifest.lessonPath=`${dir}/lesson.json`;manifest.status='Unrecorded selected revision. Script, scene and cue review required before generation.';
for(const item of manifest.scenes)if(['hook','summary','molecular-extension'].includes(item.id))item.text=get(item.id).voiceover.text;
save('voice-manifest.text-only.json',manifest);
fs.writeFileSync(`${dir}/recording-script.md`,'# Empirical formulas: organised revision\n\nUnrecorded draft. All cue estimates require measured alignment before export.\n\n'+manifest.scenes.map(s=>`## ${s.id}\n\n${s.text}\n`).join('\n'));
const timeline=lessonTimeline(lesson);
save('revision.json',{status:'Next course-order draft. Organised working and explicit entry/exit boundary; unrecorded.',source,sourceSha256:createHash('sha256').update(fs.readFileSync(source)).digest('hex'),lessonSha256:createHash('sha256').update(fs.readFileSync(`${dir}/lesson.json`)).digest('hex'),estimatedFrames:timeline.durationInFrames,coursePlan:'docs/production/course-progression-plan-2026-10-09.md',entry:'Chemical formula reading and grams-to-moles conversion',coreExit:'Infer the simplest whole-number atom ratio from composition',extension:'Molecular-formula inference stays a separately labelled scene',next:'Mole ratios from balanced equations',reviewFrames:Object.fromEntries(timeline.scenes.filter(s=>s.scene.calculationPresentation).map(s=>[s.scene.id,s.startFrame+s.scene.durationInFrames-50]))});
console.log('Prepared next empirical-formula revision with organised calculations and course handoff.');
