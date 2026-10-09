import {readFileSync, writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {createProductionBrief} from '../../../../scripts/lib/production-brief.mjs';

const directory = 'docs/production/drafts/module5-biology-l1-2026-10-10';
const originalPath = 'src/data/biology-y12-m5-l1-reproduction-continuity.json';
const originalBytes = readFileSync(originalPath);
const originalHash = createHash('sha256').update(originalBytes).digest('hex');
if (originalHash !== '104d48a5c1308965859ac7ac2035fc9a586bbd4faffb370e98dfba35ab6bdf02') throw new Error('Original source drift. Reconcile before authoring.');
const lesson = JSON.parse(originalBytes);
delete lesson.backgroundMusic;
delete lesson.backgroundMusicVolume;
delete lesson.introVoiceover;
lesson.title = 'Reproduction: Continuity and Variation';
lesson.subtitle = 'How inherited information connects generations';
lesson.syllabusModule = 'Module 5: Heredity';
lesson.lessonIntent = 'Explain how reproduction supports continuity across generations and compare sexual and asexual reproduction under stated conditions.';
lesson.examSkill = 'Classify a reproductive event using gamete fusion, then justify a conditional variation claim without guaranteeing survival.';
const narration = {};
const replace = (id, content, text) => {
  const scene = lesson.scenes.find(s => s.id === id);
  for (const key of Object.keys(scene)) if (!['id', 'type'].includes(key)) delete scene[key];
  Object.assign(scene, content);
  if (text) {scene.voiceover = {text}; narration[id] = text;}
};
const bullets = (...texts) => texts.map(text => ({text}));
replace('title', {durationInFrames: 110, caption: lesson.title});
replace('hook', {
  heading: 'Would every clone respond the same way?',
  body: 'A grower copies one productive crop plant. A new disease arrives.',
  callout: 'Same inherited genes. Guaranteed same outcome?',
  comparison: [{label: 'Clone 1', amount: 'Same parent', mass: 'Risk?'}, {label: 'Clone 2', amount: 'Same parent', mass: 'Risk?'}],
  comparisonIsPrompt: true,
  durationInFrames: 960,
  caption: 'Why can a useful cloning strategy become a shared risk?'
}, 'Imagine a grower has a crop plant that produces exactly the fruit they want. Making new plants from it keeps that useful inherited combination. But then a new disease arrives. Does being a clone mean every plant must become infected? Keep that question in mind. The important difference is between sharing a genetic risk and guaranteeing an outcome.');
replace('concept-continuity', {
  heading: 'Individuals die. Generations can continue.',
  body: 'Reproduction makes offspring and passes on hereditary information in DNA.',
  bullets: bullets('A lineage is a connected sequence of ancestors and descendants.', 'A population needs enough descendants to survive and reproduce across generations.'),
  secondary: 'Schematic: one selected lineage, with compressed lifetimes. Viable means able to live and develop; fertility is a separate requirement.',
  callout: 'Continuity needs successful reproduction over successive generations.',
  durationInFrames: 1770,
  caption: 'Inherited DNA connects generations; population continuity also needs reproductive success.',
  diagram: {type: 'diorama', kind: 'bio12m5Lineage', props: {delay: 62, at: {parade: 430, ribbon: 520, offspring: 700, transfer: 760, viable: 1000000, rule: 1200}}}
}, 'An individual has a limited lifetime, yet its descendants may continue for many generations. That connected sequence is a lineage. Reproduction makes the link by producing offspring and passing on hereditary information in DNA. In this schematic, each generation receives information from the previous one. The lifetimes are compressed; real parents can live alongside their offspring. For a population to continue, enough descendants must survive and reproduce in turn. Viable means able to live and develop. It does not automatically mean fertile, or certain to reproduce. Passing on DNA is essential, but DNA alone cannot guarantee that a species will persist.');
replace('definition', {
  heading: 'The useful distinction: do gametes fuse?',
  bullets: bullets('Asexual reproduction: offspring form without fusion of gametes, typically from one parent.', 'Sexual reproduction: gametes fuse during fertilisation to form a zygote.', 'An allele is a version of a gene. Genetic variation includes differences in inherited alleles.'),
  callout: 'Gamete fusion distinguishes the methods. Parent count alone can mislead.',
  durationInFrames: 1470,
  caption: 'Asexual: no gamete fusion. Sexual: gamete fusion during fertilisation.'
}, 'Before we compare the methods, check the starting idea: offspring inherit DNA from their parent or parents. Asexual reproduction produces offspring without fusion of gametes, typically from one parent. Sexual reproduction involves gametes, reproductive cells, fusing during fertilisation. The cell formed is a zygote. There are usually two parents, but some organisms can self-fertilise, using their own gametes. That is still sexual reproduction. So count gamete fusion, rather than simply counting adults. We will also use the word allele. An allele is a version of a gene; differences in inherited alleles are one form of genetic variation.');
replace('concept-asexual', {
  heading: 'Asexual: retaining a useful combination',
  body: 'Clonal offspring usually have very similar genetic information to their parent.',
  bullets: bullets('No mate is required. A successful combination can be propagated.', 'Population growth can be rapid when resources and the organism permit it.', 'Mutation can introduce genetic differences; conditions can affect appearance and growth.'),
  callout: 'Low inherited variation does not mean identical lives.',
  durationInFrames: 1590,
  caption: 'Cloning usually retains the parent combination, with mutation and environmental limits.',
  diagram: {type: 'table', headers: ['What is passed on?', 'What can differ?'], rows: [['Usually very similar DNA', 'Mutation in cells that form offspring'], ['A useful inherited combination', 'Light, water and other conditions']]}
}, 'A strawberry plant can grow a new plant on a runner without gametes fusing. The offspring usually retains very similar genetic information, so we describe it as a clone. This can be useful when the parent already performs well: the plant does not need a mate to pass on that combination. Under suitable conditions, an asexual population can increase rapidly. But rapid growth depends on the organism and its resources. Clones are also not guaranteed to be identical in every characteristic. Mutation can alter DNA in cells that contribute to offspring. Different light or water can change growth even when inherited DNA is very similar. An environmental difference in appearance is not, by itself, evidence of a new inherited allele.');
replace('concept-sexual', {
  heading: 'Sexual: new combinations of inherited alleles',
  body: 'Gamete formation and fertilisation can combine alleles in different ways.',
  bullets: bullets('Outcrossing joins gametes from different individuals.', 'Offspring can differ genetically; variation depends on the alleles available.', 'Mating and gamete production can involve time and energy.'),
  callout: 'New combinations can matter. Resistance is not guaranteed.',
  durationInFrames: 1560,
  caption: 'Sexual reproduction can reshuffle existing alleles; mutation can create new variants.',
  diagram: {type: 'table', headers: ['Process', 'Contribution'], rows: [['Sexual reproduction', 'Different allele combinations'], ['Mutation', 'New genetic variants'], ['Environmental conditions', 'Can change characteristics']]}
}, 'Sexual reproduction gives inherited information another route forward. In outcrossing, gametes from different individuals fuse. Gamete formation and fertilisation can assemble different combinations of the alleles already available. That can produce genetically varied offspring, but it does not promise that every offspring is different at every gene. It also does not produce a resistance allele just because a disease arrives. Mutation can create new genetic variants; sexual reproduction can reshuffle existing ones. If some combinations affect survival in the new conditions, that variation may matter. If none provides resistance, sex cannot guarantee resistant offspring. Finding a mate and producing gametes can also take time and energy. We will study the mechanisms later.');
replace('concept-tradeoff', {
  heading: 'State the conditions before judging the method',
  body: 'A useful inherited combination may be productive now and vulnerable under a new stress.',
  bullets: bullets('Suitable, stable conditions can favour rapid clonal increase.', 'Changing conditions may favour some inherited combinations over others.', 'Actual infection also depends on exposure, pathogen and environment.'),
  callout: 'Ask which variation matters for this particular change.',
  durationInFrames: 1530,
  caption: 'Compare reproductive strategies under stated conditions, not as a universal ranking.',
  diagram: {type: 'table', headers: ['Question', 'Asexual', 'Sexual'], rows: [['Gametes fuse?', 'No', 'Yes'], ['Inherited combinations', 'Usually retained in clones', 'Can be reshuffled'], ['Possible benefit', 'Propagate a suited genotype', 'Varied responses to change'], ['Survival guaranteed?', 'No', 'No']]}
}, 'Return to the grower. Cloning can preserve useful crop characteristics, which explains why it is used. But if those clones share an inherited susceptibility to a pathogen, many plants may be vulnerable to the same threat. That is a risk, not proof that every plant becomes infected. Exposure, pathogen behaviour and growing conditions also affect infection and survival. A genetically varied population may contain a combination that copes better, provided that relevant variation is actually present. Sexual reproduction is therefore not automatically the better strategy. A good comparison names the conditions, explains what the method changes, and then states the limit of the prediction.');
replace('worked-example', {
  heading: 'Classify the event, then give the reason',
  question: 'A strawberry makes a runner. Coral eggs and sperm fuse. A plant fertilises an egg with its own pollen-derived sperm. Which events are sexual?',
  coachNote: 'Use gamete fusion, including when both gametes come from one plant.',
  steps: ['Runner: no gamete fusion, so asexual.', 'Coral fertilisation: egg and sperm fuse, so sexual.', 'Self-fertilisation: gametes still fuse, so sexual.'],
  durationInFrames: 1170,
  caption: 'The event is classified by gamete fusion, including self-fertilisation.',
  revealDelays: {stepAts: [250, 500, 760]}
}, 'Here are three events. A strawberry makes a runner: a new plant grows without gamete fusion, so the event is asexual. Coral eggs and sperm fuse: that fertilisation is sexual. Now a plant uses sperm produced from its own pollen to fertilise an egg. There is only one parent plant, yet two gametes still fuse. The event is sexual. Parent number is a useful clue, but gamete fusion is the stronger reason. The next lessons will unpack how these events occur in different organisms.');
replace('misconception', {
  heading: 'Same genes do not guarantee the same outcome',
  body: 'Mistake: one clone is infected, so every clone must be infected.',
  secondary: 'Repair: shared inherited susceptibility raises a shared risk. Exposure and conditions also matter. Sexual reproduction supplies possible combinations, not guaranteed resistance.',
  mistakeTag: 'Risk mistaken for certainty',
  callout: 'Separate inherited variation from environmental effects.',
  durationInFrames: 1230,
  caption: 'Genetic similarity supports a risk prediction, not a guaranteed disease outcome.'
}, 'Here is the reasoning trap: one clone becomes infected, so every clone must become infected. Similar inherited genes may give them a shared susceptibility, but infection also depends on exposure and conditions. Now consider the reverse trap: sexually produced offspring must resist the disease. They may have varied combinations, but none has to be resistant. And a clone that grows differently in better soil has not necessarily gained a different inherited allele. Keep three ideas separate: inherited combinations, mutations that alter DNA, and environmental effects on characteristics. Then your prediction can be precise without pretending the outcome is certain.');
const prompt = 'A nursery has two groups of the same crop species: cuttings from one parent, and seedlings from several crosses. A disease arrives. Assuming some inherited combinations reduce susceptibility, which group is more likely to contain genetic differences in response? Why can neither group be promised complete survival?';
const feedback = 'The seedlings from several crosses are more likely to contain different inherited allele combinations. Under the stated assumption, some combinations may reduce susceptibility. The cuttings usually retain a much narrower set of combinations, so a shared susceptibility can put many at risk. Neither group has guaranteed survival. Relevant variants might be absent from particular offspring, and exposure and conditions still matter. Mutation can also introduce differences within a clonal group. The useful answer connects inheritance to risk, then bounds the prediction.';
replace('quick-check', {
  heading: 'A new nursery decision',
  question: 'Cuttings from one parent or seedlings from several crosses? A disease arrives. Some inherited combinations reduce susceptibility. Which group is more likely to vary genetically in response? Why is survival not guaranteed?',
  pausePrompt: 'Explain the inherited difference and one limit. Pause for more time.',
  answerSteps: ['Crossed seedlings can inherit more varied allele combinations.', 'Some combinations may reduce susceptibility under the stated assumption.', 'Clones may share a risk; mutation and environmental differences still matter.', 'Neither method guarantees resistance, exposure or survival.'],
  durationInFrames: 2340,
  caption: 'Explain the inherited difference and qualify the survival prediction.',
  revealDelays: {answerVisibleStart: 960, pausePrompt: 600}
}, prompt + ' Pause here to explain your reasoning. ' + feedback);
replace('summary', {
  heading: 'Carry the reasoning forward',
  points: ['Reproduction links generations by producing offspring and passing on DNA.', 'Asexual reproduction has no gamete fusion and usually retains a parent combination.', 'Sexual reproduction fuses gametes and can reshuffle inherited alleles.', 'Mutation and environment are different sources of differences.', 'Compare under stated conditions; survival is not guaranteed.'],
  finalPrompt: 'Next: how do different organisms achieve reproduction?',
  durationInFrames: 1380,
  caption: 'From inheritance and variation to specific reproductive mechanisms.'
}, 'The link across generations is reproduction: offspring receive hereditary information and may pass it on again. Asexual reproduction has no gamete fusion and usually retains a parent combination. Sexual reproduction involves gamete fusion and can produce different inherited combinations. Mutation changes DNA; environmental conditions can affect characteristics without establishing a new inherited allele. Neither method guarantees survival, so compare them under the conditions given. That is our stopping point. Next we will look at specific reproductive mechanisms in animals, followed by plants and other organisms. DNA copying and cell division come later, once the purpose of inheritance is clear.');

const path = directory + '/lesson.json';
writeFileSync(path, JSON.stringify(lesson, null, 2) + '\n');
const brief = createProductionBrief(process.cwd(), path);
brief.researchReferences = ['docs/research/hsc-video-production-standard-2026-10-02.md', 'docs/research/library-implementation-plan.md', 'docs/production/teaching-templates.md', 'docs/production/teaching-visual-brief-template.md', 'docs/visual-design-handbook.md', 'docs/animation-planning.md', 'docs/production/year12-module5-teaching-priority-2026-10-10.md', 'docs/production/course-content-checklist-2026-10-09.md', 'docs/production/preview-first-review.md'];
brief.progression = {planPath: 'docs/production/course-progression-plan-2026-10-09.md', prerequisiteKnowledge: 'Cells contain DNA; offspring inherit information. Distinguish an individual from a population. Entry check is supplied in definition narration. Support route: school cell/DNA foundations, with reviewed video availability pending.', startsWith: 'An individual can die while a connected lineage continues; cloning a useful crop creates a conditional shared-risk question.', stopsAfter: 'Explain inheritance across generations, classify gamete fusion and compare sexual/asexual variation and survival under stated conditions. No detailed mechanism, DNA replication, chromosome division, probability or disease practical.', nextLesson: 'B2: src/data/biology-y12-m5-l2-reproduction-in-animals.json, followed by distinct plants/fungi/bacteria/protists mechanism lessons from L3. These are source candidates, not approved or guaranteed available uploads.'};
brief.teaching = {task: lesson.lessonIntent, causalExplanation: 'Passing on DNA links ancestors and descendants; continuity additionally needs sufficient descendants to reproduce. Cloning usually retains combinations, whereas gamete formation/fertilisation can reshuffle existing alleles. Relevant inherited variation may affect response to a stress; exposure/environment and available alleles limit the prediction.', conversationalApproach: 'Connected grower scenario, concrete runner/coral/self-fertilisation contrast, and specific corrective feedback. No invented marks, universal speed or survival guarantees.', openingDecision: 'Rhetorical crop-risk question, intentionally revisited after inheritance and variation. This is a hook, not a measured retrieval opportunity.', understandingCheck: 'Unseen nursery transfer: compare cuttings with seedlings from several crosses under the explicit assumption that some inherited combinations reduce susceptibility. Identify allele-combination variation and qualify survival. Record prompt and feedback separately and assemble an answer-free hold after measured narration.', curriculumScope: 'Year 12 Biology Module 5 Heredity, 2017 syllabus opening for current cohort. Retains original declared reproduction point as planned context, not complete mechanism/practical coverage. New-course placement and exact reviewed action coverage remain pending. Catalogue ledger is source-present-unreviewed.'};
const visual = {
  title: ['reuse', 'Existing title slide and subject tokens', 'Short identity anchor', 'Reproduction: Continuity and Variation', 'Stable title with existing entrance', 'Brief reading hold'],
  hook: ['adjust', 'Existing HookSlide comparison cards. Original crop image key bioM5L1BananaClone has missing local media.', 'Crop context creates a useful conditional risk question. Explicit comparison prevents the renderer default atom placeholder.', 'Does being a clone mean every plant must become infected?', 'Question and same-parent comparison reveal together; no answer implied by decorative colour', 'Hold the question. No answer claim before explanation'],
  'concept-continuity': ['adjust', 'Existing bio12m5Lineage; suppress hardcoded viable=fertile label with at.viable=1000000 outside this scene', 'Preserve connected generations and DNA handoff while narration identifies selected schematic lineage', 'Reproduction makes the link', 'DNA handoff and generation change explain succession; lifetime compression explicitly stated', 'Hold generations and inheritance ribbon; viability/fertility explained in stable source text'],
  definition: ['adjust', 'Existing definition board, three concise bullets', 'Separate fusion criterion from parent-count heuristic; define allele before use', 'So count gamete fusion', 'Reveal vocabulary in connected order', 'Read gamete fusion and zygote before moving on'],
  'concept-asexual': ['adjust', 'Existing table/concept layout. Original bio12m5Population clone binding deliberately withheld.', 'Retain comparison layout without universal all-clone death, exact-copy label or arbitrary growth-rate inference', 'An environmental difference in appearance', 'Stable DNA versus difference comparison; no deterministic disease animation', 'Hold both columns together; phone-fit inspection pending'],
  'concept-sexual': ['adjust', 'Existing table/concept layout. Original bio12m5Population varied binding deliberately withheld.', 'Distinguish reshuffling, mutation and environment without depicting guaranteed survivors', 'It also does not produce a resistance allele', 'Sequential category reveal, then stable comparison', 'Hold conditions and contribution categories together'],
  'concept-tradeoff': ['adjust', 'Reuse original three-column table structure with qualified entries', 'Gamete fusion and conditional benefit can be compared without universal winner labels', 'A good comparison names the conditions', 'Table entrance serves comparison; no universal ranking', 'Keep both methods and no-guarantee row visible'],
  'worked-example': ['adjust', 'Existing worked-example board with three staged reasons', 'Transfer fusion criterion to self-fertilisation; no DNA-copying mechanism detail', 'There is only one parent plant', 'Reveal classification and reason together, in example order', 'Hold all three established reasons; cue timings are estimates'],
  misconception: ['adjust', 'Existing misconception board', 'Repair risk-to-certainty reasoning and environmental/inherited confusion', 'Similar inherited genes may give them a shared susceptibility', 'Contrast mistaken inference and qualified explanation', 'Hold the repair while limitation is spoken'],
  'quick-check': ['adjust', 'Existing QuickCheckSlide; neutral caption and estimate answerVisibleStart=960', 'Unseen crop nursery application requires causal justification, not only recall', 'Pause here to explain your reasoning', 'Answer remains hidden to estimated frame 960 in silent preview; fresh measured assembly required before recording/export review', 'Plan an 8-second answer-free silence after complete prompt; assemble from measured recordings, not text tags'],
  summary: ['adjust', 'Existing summary board and next-handoff prompt', 'Consolidate reasoning and stop before mechanisms', 'That is our stopping point', 'Reveal compact takeaways; stable ending', 'Read final distinction and next mechanism handoff']
};
brief.scenes = lesson.scenes.map(s => {const v = visual[s.id]; return {sceneId: s.id, visualDecision: v[0], visualReference: v[1], teachingReason: v[2], narrationCue: v[3], motionPurpose: v[4], holdPurpose: v[5]};});
brief.origin = {lessonPath: originalPath, lessonSha256: originalHash, preservedSceneIds: lesson.scenes.map(s => s.id), previousAttachedSceneRecordings: 10, originalMediaReused: false};
brief.limitation = 'Silent additive source draft. Independent science, visual, motion/playback, caption/device and human listening review pending. Scene lengths and reveal cues are estimates. No paid narration, full export or release authorised by this file. Old recordings/alignment/captions are not attached to revised speech.';
writeFileSync(directory + '/production-brief.json', JSON.stringify(brief, null, 2) + '\n');
writeFileSync(directory + '/recording-segments.json', JSON.stringify({status: 'silent-source-draft', timingStatus: 'estimated-not-measured', sceneId: 'quick-check', prompt: prompt + ' Pause here to explain your reasoning.', proposedSilenceSeconds: 8, feedback, instructions: 'Record prompt and feedback separately with fresh takes. Measure the prompt, assemble an exact silent gap, rebuild scene length/alignment/captions and reveal cues. Do not generate a single continuous scene take and assume a written pause creates silence.'}, null, 2) + '\n');
const md = ['# Reproduction: Continuity and Variation', '', 'Silent source draft, 10 October 2026. Narration only below. No selected recordings. Scene timing remains estimated.', '', ...lesson.scenes.flatMap(s => ['## ' + s.id, '', narration[s.id] ?? '(Silent title.)', ''])];
writeFileSync(directory + '/narration.md', md.join('\n'));
console.log(JSON.stringify({path, originalPath, originalHash, sceneCount: lesson.scenes.length, narratedScenes: Object.keys(narration).length, estimatedSceneSeconds: lesson.scenes.reduce((n,s)=>n+s.durationInFrames/lesson.fps,0)}, null, 2));
