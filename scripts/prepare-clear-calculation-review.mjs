import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {lessonTimeline} from '../src/lesson/timeline.mjs';
import {createProductionBrief} from './lib/production-brief.mjs';
const dir='out/prototypes/limiting-clear-working-2026-10-09';
const source='out/prototypes/limiting-conversational-2026-10-09/narrated.lesson.json';
if(fs.existsSync(`${dir}/lesson.json`) && (!process.argv.includes('--refresh-unrendered') || fs.existsSync(`${dir}/render-01/release.snapshot.json`)))throw Error('Preserve rendered revisions. Use --refresh-unrendered only for this unrendered display draft.');
const lesson=JSON.parse(fs.readFileSync(source));
const get=id=>lesson.scenes.find(s=>s.id===id);
const cue=(scene,phrase)=>{
  const normalise=text=>text.toLowerCase().replace(/[^a-z0-9]/g,'');
  const words=phrase.split(/\s+/).map(normalise);
  const index=scene.captions.findIndex((_,i)=>words.every((word,j)=>normalise(scene.captions[i+j]?.text??'')===word));
  if(index<0)throw Error('Missing recorded cue: '+phrase);
  return Math.ceil(scene.captions[index].startMs*lesson.fps/1000);
};
const productCue=cue(get('worked-example-2'),'The equation has');
const yieldCue=get('worked-example-2').revealDelays.stepAts[2];
get('worked-example-2').revealDelays.stepAts[2]=productCue;
get('worked-example-2').calculationPresentation={
  task:'Find the NaCl yield and chlorine left over',equation:'2Na + Cl₂ → 2NaCl',
  givens:[{label:'Sodium (Na)',value:'10.0 g',reference:'M = 22.99 g mol⁻¹'},{label:'Chlorine (Cl₂)',value:'20.0 g',reference:'M = 70.90 g mol⁻¹'}],
  references:[{label:'M(NaCl)',value:'58.44 g mol⁻¹'}],note:'Keep extra digits in the working. Final masses: 3 significant figures.',
  stages:[
    {label:'Convert each mass to moles',lines:['n(Na) = 10.0 ÷ 22.99 = 0.43497 mol','n(Cl₂) = 20.0 ÷ 70.90 = 0.28209 mol'],summary:'Na: 0.43497 mol; Cl₂: 0.28209 mol'},
    {label:'Compare amounts per equation coefficient',lines:['Na: 0.43497 mol ÷ 2 ≈ 0.21749 mol','Cl₂: 0.28209 mol ÷ 1 = 0.28209 mol','0.21749 < 0.28209. Sodium is limiting.'],summary:'Sodium is limiting: 0.21749 < 0.28209 mol'},
    {label:'Use the product ratio, then convert to mass',lines:['n(NaCl) = n(Na) ≈ 0.43497 mol','m(NaCl) = n(NaCl) × 58.44 ≈ 25.4 g'],lineAts:[productCue,yieldCue],summary:'Theoretical NaCl yield: 25.4 g'},
    {label:'Find how much chlorine reacts',lines:['n(Cl₂ used) = n(Na) ÷ 2 ≈ 0.21749 mol'],summary:'Chlorine used: 0.21749 mol'},
    {label:'Subtract used chlorine and report both masses',lines:['n(Cl₂ left) = 0.28209 − 0.21749 ≈ 0.06460 mol','m(Cl₂ left) = n(Cl₂ left) × 70.90 ≈ 4.58 g','NaCl yield: 25.4 g; chlorine left: 4.58 g'],summary:'25.4 g NaCl; 4.58 g Cl₂ left'}
  ]
};
get('quick-check').calculationPresentation={
  task:'Which reactant runs out first?',equation:'2H₂ + O₂ → 2H₂O',
  givens:[{label:'Hydrogen (H₂)',value:'4.00 g',reference:'M = 2.016 g mol⁻¹'},{label:'Oxygen (O₂)',value:'16.0 g',reference:'M = 31.998 g mol⁻¹'}],
  stages:[
    {label:'Hydrogen: moles, then divide by its coefficient',lines:['n(H₂) = 4.00 ÷ 2.016 ≈ 1.9841 mol','H₂: 1.9841 mol ÷ 2 ≈ 0.99206 mol'],summary:'Hydrogen capacity: 0.99206 mol'},
    {label:'Oxygen: moles, then divide by its coefficient',lines:['n(O₂) = 16.0 ÷ 31.998 ≈ 0.50003 mol','O₂: 0.50003 mol ÷ 1 = 0.50003 mol'],summary:'Oxygen capacity: 0.50003 mol'},
    {label:'Compare the two reaction capacities',lines:['0.50003 mol < 0.99206 mol','Oxygen is limiting.'],summary:'Oxygen is limiting'}
  ]
};
// Narration, alignment, timings and media selection remain byte-for-byte equivalent.
const original=JSON.parse(fs.readFileSync(source));
for(let i=0;i<lesson.scenes.length;i++)if(JSON.stringify(lesson.scenes[i].voiceover)!==JSON.stringify(original.scenes[i].voiceover)||JSON.stringify(lesson.scenes[i].captions)!==JSON.stringify(original.scenes[i].captions))throw Error('Display-only revision changed selected speech');
fs.mkdirSync(dir,{recursive:true});
const save=(name,data)=>fs.writeFileSync(`${dir}/${name}`,JSON.stringify(data,null,2)+'\n');
save('lesson.json',lesson);save('remotion-props.json',{lesson});
const brief=createProductionBrief(process.cwd(),`${dir}/lesson.json`);
const previousBrief=JSON.parse(fs.readFileSync(source.replace(/\.json$/,'.production-brief.json')));
brief.teaching=previousBrief.teaching;
brief.scenes=previousBrief.scenes;
for(const row of brief.scenes){
 if(get(row.sceneId)?.calculationPresentation){
  row.visualDecision='adjust';row.visualReference='src/slides/shared/OrganisedCalculation.tsx';
  row.teachingReason='Group each supplied mass with its molar mass. Separate the task and reaction, focus on one calculation stage, and retain established results.';
  row.motionPurpose='Reveal the current operation at its recorded cue. Later product mass waits for its own line cue.';
  row.holdPurpose=row.sceneId==='quick-check'?'Protect the existing two-second silence and retain the givens during thinking.':'Keep prior results available without accumulating competing active calculations.';
  if(row.sceneId==='worked-example-2')row.narrationCue=`Aligned stages632,838,${productCue},1532,1673; product mass line${yieldCue}; rounding note1858.`;
 }
}
brief.progression={planPath:'docs/production/course-progression-plan-2026-10-09.md',prerequisiteKnowledge:'Molar mass, grams/moles and balanced-equation ratios',startsWith:'Two fixed reactant supplies and a reaction recipe',stopsAfter:'Identify the limiting reactant, theoretical yield and excess remaining',nextLesson:'Actual yield and purity, after the prerequisite mole-ratios and mass-to-mass videos are reviewed'};
save('production-brief.json',brief);
const timeline=lessonTimeline(lesson);
const worked=timeline.scenes.find(s=>s.scene.id==='worked-example-2'),quiz=timeline.scenes.find(s=>s.scene.id==='quick-check');
save('visual-review-config.json',{lessonPath:`${dir}/lesson.json`,entryPoint:'src/dev/release-entry.tsx',compositionId:'Lesson-release',codec:'h264',scale:1,crf:16,normalizeAudio:true,concurrency:2,audioMode:'alignedPcm',frameRange:[worked.startFrame,quiz.endFrame-1],inputs:['scripts/prepare-clear-calculation-review.mjs']});
save('revision.json',{status:'Display-only revision for organised quantitative working. Source and audio kept; review new visuals before full export.',source,sourceSha256:createHash('sha256').update(fs.readFileSync(source)).digest('hex'),lessonSha256:createHash('sha256').update(fs.readFileSync(`${dir}/lesson.json`)).digest('hex'),narrationChanged:false,frames:timeline.durationInFrames,reviewFrames:{worked:worked.startFrame+740,workedComparison:worked.startFrame+880,workedExcess:worked.startFrame+1620,workedFinal:worked.startFrame+1900,quizPrompt:quiz.startFrame+400,quizHold:quiz.startFrame+590,quizFirst:quiz.startFrame+660,quizFinal:quiz.startFrame+1100}});
console.log('Prepared separate clear-working revision with unchanged recorded speech.');
