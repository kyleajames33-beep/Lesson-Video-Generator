import {readFileSync} from 'node:fs';
import {biologyResidualArtifacts, soluteBalance} from './lib/biology-residuals-lessons.mjs';
import {responseProposal} from './lib/response-proposals.mjs';
import {writeIsolatedPackage} from './lib/isolated-output.mjs';
import {visualScienceChecklist} from './lib/visual-science-checklist.mjs';
import {sha256} from './lib/playback-assembly.mjs';
const name = 'biology-y11-m2-l19-the-nephron', source = 'src/data/' + name + '.json', bytes = readFileSync(source);
const base = biologyResidualArtifacts(name, bytes);
const assumption = 'Use amounts for the same solute and interval. Assume unchanged tubular solute content and no other sources or sinks, including production or consumption.';
const assumptions = {unchangedTubularSoluteContent: true, noOtherSourcesOrSinks: true};
if (soluteBalance(80, 50, 10, assumptions) !== 40 || soluteBalance(100, 60, 30, assumptions) !== 70) throw new Error('Independent interval arithmetic failed.');
const pause = base.pacing.scenes.find(s => s.scene === 'quick-check').response;
const result = responseProposal(base.draft, [
  {kind: 'pause', sceneId: 'quick-check', question: base.draft.scenes.find(s => s.id === 'quick-check').question,
    promptText: pause.promptText, answerText: pause.answerText, thinkingSeconds: pause.minimumThinkingSeconds,
    answerSteps: base.draft.scenes.find(s => s.id === 'quick-check').answerSteps},
  {kind: 'predict', sceneId: 'predict-secretion', afterSceneId: 'worked-example',
    question: `The synthetic model has 100 units filtered, 60 reabsorbed and 20 secreted. Secretion alone increases to 30 units. ${assumption} Predict the change in net excretion before calculating.`,
    promptText: `In the synthetic model, one hundred units are filtered, sixty reabsorbed and twenty secreted. Secretion alone increases to thirty units. ${assumption} Predict the change in net excretion and explain your sign.`,
    answerText: 'Under those assumptions, ten extra units are added to the tubular fluid, so net excretion increases by ten units. One hundred minus sixty plus thirty equals seventy units, compared with the earlier sixty. This is a synthetic transfer balance, not a measured physiological response.',
    answerSteps: ['The stated no-accumulation/no-other-source model still applies.', 'Extra secretion adds 10 units to tubular fluid.', '100 − 60 + 30 = 70 units excreted, an increase of 10 units.'], thinkingSeconds: 30},
  {kind: 'retrieval', sceneId: 'retrieve-transport', afterSceneId: 'quick-check',
    question: 'Without replaying the explanation, distinguish filtration, reabsorption, secretion and excretion by transport direction. Can reabsorption coexist with positive net excretion?',
    promptText: 'Without replaying, name the direction of filtration, reabsorption and secretion. What is excretion? Then explain whether a solute can be reabsorbed and still have positive net excretion.',
    answerText: 'Filtration moves material from glomerular blood into the capsule. Reabsorption returns material from tubular fluid towards blood. Secretion adds material from blood to tubular fluid. Excretion is the final urine output. Yes, reabsorption can coexist with positive net excretion; some urea is reabsorbed and recycled while urea is excreted overall.',
    answerSteps: ['Filtration: glomerular blood to capsule.', 'Reabsorption: tubular fluid towards blood.', 'Secretion: blood to tubular fluid.', 'Excretion: final urine output.', 'Reabsorption and positive net excretion can coexist.'], thinkingSeconds: 45},
]);
const draftBytes = JSON.stringify(result.draft, null, 2) + '\n';
const output = process.argv[2] ?? 'out/review/active-learning-nephron';
const report = {schemaVersion: 1, source, sourceSha256: sha256(bytes), draftSha256: sha256(draftBytes),
  baseCandidate: 'ee186e42bc818ff4c05c0b2ec9c7df4fc3e55f55', sourceEvidence: base.review.sourceEvidence,
  scienceApproval: false, visualApproval: false, mediaApproval: false, generationAuthorised: false, registered: false,
  catalogueChanged: false, rendered: false, holds: result.holds,
  limitation: 'Three source proposals on reused quick-check layouts. Durations are estimates; silence, measured concealment and rendered review remain pending.'};
console.log(writeIsolatedPackage(output, {'lesson.json': draftBytes, 'interactions.json': result.interactions, 'takes.json': result.takes,
  'review.json': report, 'visual-science-checklist.json': visualScienceChecklist(result.draft, report.draftSha256)}));
console.log('Three unvoiced pause/predict/retrieval proposals prepared. No catalogue edits, recordings or rendering.');
