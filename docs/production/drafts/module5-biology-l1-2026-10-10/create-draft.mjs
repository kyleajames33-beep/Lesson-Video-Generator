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
  heading: 'When could copying one plant become a shared risk?',
  body: 'A grower copies one productive crop plant. A new disease arrives.',
  callout: 'One useful inherited combination, across a whole crop.',
  comparison: [{label: 'Clone 1', amount: 'Same parent', mass: 'Risk?'}, {label: 'Clone 2', amount: 'Same parent', mass: 'Risk?'}],
  comparisonIsPrompt: true,
  durationInFrames: 900,
  caption: 'Why can a useful cloning strategy become a shared risk?'
}, 'Imagine a grower has a crop plant that produces exactly the fruit they want. Making new plants from it keeps that useful inherited combination. Now a new disease arrives. How could copying a productive plant become a shared risk? The answer begins with what reproduction passes from one generation to the next.');
replace('concept-continuity', {
  heading: 'Individuals die. Generations can continue.',
  body: 'Reproduction makes offspring and passes on hereditary information in DNA.',
  bullets: bullets('A lineage is a connected sequence of ancestors and descendants.', 'A population needs enough descendants to survive and reproduce across generations.'),
  secondary: 'Schematic: one selected lineage, with compressed lifetimes. Viable means able to live and develop; fertility is a separate requirement.',
  callout: 'Continuity needs successful reproduction over successive generations.',
  durationInFrames: 1560,
  caption: 'Inherited DNA connects generations; population continuity also needs reproductive success.',
  diagram: {type: 'diorama', kind: 'bio12m5Lineage', props: {delay: 62, at: {parade: 430, ribbon: 520, offspring: 700, transfer: 760, viable: 1000000, rule: 1200}}}
}, 'An individual has a limited lifetime, yet its descendants may continue for many generations. That connected sequence is a lineage. Reproduction makes the link by producing offspring and passing on hereditary information in DNA. In this schematic, each generation receives information from the previous one. The lifetimes are compressed; real parents can live alongside their offspring. Viable means able to live and develop; being fertile is a separate requirement. For a population to continue, enough descendants must survive and reproduce in turn.');
replace('definition', {
  heading: 'The useful distinction: do gametes fuse?',
  bullets: bullets('Asexual reproduction: offspring form without fusion of gametes, typically from one parent.', 'Sexual reproduction: gametes fuse during fertilisation to form a zygote.', 'An allele is a version of a gene. Genetic variation includes differences in inherited alleles.'),
  callout: 'Gamete fusion distinguishes the methods. Parent count alone can mislead.',
  durationInFrames: 1320,
  caption: 'Asexual: no gamete fusion. Sexual: gamete fusion during fertilisation.'
}, 'Both methods pass on hereditary information, but they do it differently. Asexual reproduction produces offspring without gametes fusing, typically from one parent. Sexual reproduction involves gametes, reproductive cells, fusing during fertilisation. The cell formed is a zygote. There are usually two parents, but some organisms can self-fertilise using their own gametes. That is still sexual reproduction because gametes fuse. We will also use the word allele. An allele is a version of a gene; differences in inherited alleles are one form of genetic variation.');
replace('concept-asexual', {
  heading: 'Asexual: retaining a useful combination',
  body: 'Clonal offspring usually have very similar genetic information to their parent.',
  bullets: bullets('No mate is required. A successful combination can be propagated.', 'Population growth can be rapid when resources and the organism permit it.', 'Mutation can introduce genetic differences; conditions can affect appearance and growth.'),
  callout: 'Low inherited variation does not mean identical lives.',
  durationInFrames: 1500,
  caption: 'Cloning usually retains the parent combination, with mutation and environmental limits.',
  diagram: {type: 'table', headers: ['What is passed on?', 'What can differ?'], rows: [['Usually very similar DNA', 'Mutation in cells that form offspring'], ['A useful inherited combination', 'Light, water and other conditions']]}
}, 'A strawberry plant can grow a new plant on a runner without gametes fusing. The offspring usually retains very similar genetic information, so we describe it as a clone. When the parent performs well, this passes on a useful combination without needing a mate. Under suitable conditions, an asexual population can increase rapidly, depending on the organism and its resources. There are two different reasons clones can differ. Mutation can alter DNA in cells that contribute to offspring. Different light or water can change growth even with very similar DNA. A difference caused by those growing conditions does not, by itself, show a new inherited allele.');
replace('concept-sexual', {
  heading: 'Sexual: new combinations of inherited alleles',
  body: 'Gamete formation and fertilisation can combine alleles in different ways.',
  bullets: bullets('Outcrossing joins gametes from different individuals.', 'Offspring can differ genetically; variation depends on the alleles available.', 'Mating and gamete production can involve time and energy.'),
  callout: 'Existing alleles, new combinations.',
  durationInFrames: 1140,
  caption: 'Gamete formation and fertilisation can reshuffle existing inherited alleles.',
  diagram: {type: 'table', headers: ['Starting information', 'Offspring'], rows: [['Alleles available in parents', 'Different combinations'], ['Gametes from different parents', 'Combined at fertilisation']]}
}, 'Sexual reproduction gives inherited information another route forward. In outcrossing, gametes from different individuals fuse. Gamete formation and fertilisation can assemble different combinations of the alleles already available. Offspring from genetically different parents can therefore differ from each other and from their parents. It is like dealing a new hand from an existing set of cards: the combinations change, using alleles that are already there. Finding a mate and producing gametes can also take time and energy.');
replace('concept-tradeoff', {
  heading: 'Productive now. A shared risk after change.',
  body: 'A useful inherited combination may be productive now and vulnerable under a new stress.',
  bullets: bullets('Suitable, stable conditions can favour rapid clonal increase.', 'Changing conditions may favour some inherited combinations over others.', 'Actual infection also depends on exposure, pathogen and environment.'),
  callout: 'Ask which variation matters for this particular change.',
  durationInFrames: 1380,
  caption: 'Compare reproductive strategies under stated conditions, not as a universal ranking.',
  diagram: {type: 'table', headers: ['Question', 'Asexual', 'Sexual'], rows: [['Gametes fuse?', 'No', 'Yes'], ['Combinations', 'Usually retained', 'Can be reshuffled'], ['Possible benefit', 'Suited genotype', 'Varied responses'], ['Survival certain?', 'No', 'No']]}
}, 'Return to the grower. Cloning preserves the crop characteristics they value. But if those clones share an inherited susceptibility to a pathogen, many may be vulnerable to the same threat. A genetically varied population could contain combinations that reduce susceptibility, if that relevant variation is present. Infection also depends on exposure, pathogen behaviour and growing conditions, so genetic susceptibility is only part of the outcome. Cloning can be useful when a genotype suits the conditions; varied inherited combinations may help when conditions change. Neither method is a universal winner.');
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
  heading: 'Shared risk is not a certain outcome',
  body: 'Mistake: one clone is infected, so every clone must be infected.',
  secondary: 'Repair: clones may share a susceptibility. One infected plant does not establish the outcome for every other plant.',
  mistakeTag: 'Risk mistaken for certainty',
  callout: 'A shared weakness is a risk, not a predicted count of infections.',
  durationInFrames: 660,
  caption: 'Shared susceptibility is different from every plant becoming infected.'
}, 'Suppose one clone becomes infected. Does that tell us every clone must be infected? The mistake is turning a shared susceptibility into a certain outcome. The plants may share a weakness, but one infected plant does not establish what will happen to every other plant.');
const prompt = 'A nursery grows cuttings from one parent and seedlings from crosses among genetically different parents. Some inherited combinations reduce susceptibility to a new disease. Which group is likely to show a wider range of inherited susceptibility, and why does that not promise every plant will survive?';
const feedback = 'The seedlings are likely to show a wider range of inherited susceptibility because the crosses combine alleles from genetically different parents. The cuttings usually retain a much narrower set of combinations from one parent. In this case, some combinations reduce susceptibility, but particular seedlings may not inherit them. Even reduced susceptibility is not the same as complete protection, so neither group can be promised complete survival.';
replace('quick-check', {
  heading: 'A new nursery decision',
  question: prompt,
  answerSteps: ['Crossed seedlings: wider range of inherited allele combinations.', 'Cuttings: usually retain combinations from one parent.', 'Some combinations reduce susceptibility; seedlings may not inherit them.', 'Reduced susceptibility is not complete protection.'],
  calculationPresentation: {
    task: 'Which group has wider inherited susceptibility?',
    givens: [
      {label: 'Cuttings', value: 'One parent'},
      {label: 'Seedlings', value: 'Crosses', reference: 'Among genetically different parents'}
    ],
    note: 'Some inherited combinations reduce disease susceptibility. Why is survival still uncertain?',
    stages: [
      {label: 'Seedlings: wider range', lines: ['Crosses combine alleles from', 'genetically different parents.'], summary: 'Seedlings: more varied inherited combinations.'},
      {label: 'Cuttings: retained combinations', lines: ['Usually retain combinations', 'from one parent.'], summary: 'Cuttings: narrower inherited combinations.'},
      {label: 'Apply the supplied condition', lines: ['Some combinations reduce susceptibility.', 'Particular seedlings may not inherit them.'], summary: 'Helpful combinations may not be inherited.'},
      {label: 'Limit the survival claim', lines: ['Reduced susceptibility', 'is not complete protection.'], summary: 'Neither group is promised complete survival.'}
    ]
  },
  durationInFrames: 2040,
  caption: 'Explain the inherited difference and qualify the survival prediction.',
  revealDelays: {answerVisibleStart: 960, responseHoldStart: 720, stepAts: [960, 1190, 1410, 1640]}
}, prompt + ' Pause here to explain your reasoning. ' + feedback);
replace('summary', {
  heading: 'Carry the reasoning forward',
  points: ['Reproduction links generations through offspring and inherited DNA.', 'Asexual: no gamete fusion; usually retains a parent combination.', 'Sexual: gametes fuse; inherited alleles can be reshuffled.', 'The value of a combination depends on the conditions.'],
  finalPrompt: 'Next: how do different organisms achieve reproduction?',
  durationInFrames: 1020,
  caption: 'From inheritance and variation to specific reproductive mechanisms.'
}, 'Reproduction connects generations by producing offspring and passing on DNA. Asexual reproduction usually retains a parent combination without gametes fusing. Sexual reproduction fuses gametes and can reshuffle inherited alleles. A combination that works well in one set of conditions may become a weakness when those conditions change. Next we will look at how animals achieve reproduction, followed by plants and other organisms.');

const path = directory + '/lesson.json';
writeFileSync(path, JSON.stringify(lesson, null, 2) + '\n');
const brief = createProductionBrief(process.cwd(), path);
brief.researchReferences = ['docs/research/hsc-video-production-standard-2026-10-02.md', 'docs/research/library-implementation-plan.md', 'docs/production/teaching-templates.md', 'docs/production/teaching-visual-brief-template.md', 'docs/visual-design-handbook.md', 'docs/animation-planning.md', 'docs/production/year12-module5-teaching-priority-2026-10-10.md', 'docs/production/course-content-checklist-2026-10-09.md', 'docs/production/preview-first-review.md'];
brief.progression = {planPath: 'docs/production/course-progression-plan-2026-10-09.md', prerequisiteKnowledge: 'Cells contain DNA; offspring inherit information. Distinguish an individual from a population. Short prerequisite check in author-notes: what material carries hereditary information between generations? Expected: DNA. Support route: school cell/DNA foundations, with reviewed video availability pending.', startsWith: 'An individual can die while a connected lineage continues; cloning a useful crop creates a conditional shared-risk question.', stopsAfter: 'Explain inheritance across generations, classify gamete fusion and compare sexual/asexual variation and survival under stated conditions. No detailed mechanism, DNA replication, chromosome division, probability or disease practical.', nextLesson: 'B2: src/data/biology-y12-m5-l2-reproduction-in-animals.json, followed by distinct plants/fungi/bacteria/protists mechanism lessons from L3. These are source candidates, not approved or guaranteed available uploads.'};
brief.teaching = {task: lesson.lessonIntent, causalExplanation: 'Passing on DNA links ancestors and descendants; continuity additionally needs sufficient descendants to reproduce. Cloning usually retains combinations, whereas gamete formation/fertilisation can reshuffle existing alleles. Relevant inherited variation may affect response to a stress; exposure/environment and available alleles limit the prediction.', conversationalApproach: 'Connected grower scenario and runner/coral/self-fertilisation contrast. Each caveat has one main teaching home: mutation/environment in asexual; existing-allele reshuffling in sexual; exposure and conditional risk in tradeoff. Misconception diagnoses one shared-risk-to-certainty inference, with concise case feedback.', openingDecision: 'Rhetorical crop-risk question, intentionally revisited after inheritance and variation. This is a hook, not a measured retrieval opportunity.', understandingCheck: 'Unseen nursery transfer: cuttings from one parent versus crosses among genetically different parents, with some inherited combinations reducing susceptibility. Predict the wider range of inherited susceptibility and explain why reduced susceptibility is not complete survival. Record prompt and feedback separately and assemble an answer-free hold after measured narration.', curriculumScope: 'Year 12 Biology Module 5 Heredity, 2017 syllabus opening for current cohort. Retains original declared reproduction point as planned context, not complete mechanism/practical coverage. New-course placement and exact reviewed action coverage remain pending. Catalogue ledger is source-present-unreviewed.'};
const visual = {
  title: ['reuse', 'Existing title slide and subject tokens', 'Short identity anchor', 'Reproduction: Continuity and Variation', 'Stable title with existing entrance', 'Brief reading hold'],
  hook: ['adjust', 'Existing HookSlide comparison cards. Original crop image key bioM5L1BananaClone has missing local media.', 'Crop context creates a useful conditional risk question. Explicit comparison prevents the renderer default atom placeholder.', 'How could copying a productive plant become a shared risk?', 'Question and same-parent comparison reveal together; no answer implied by decorative colour', 'Hold the question. No answer claim before explanation'],
  'concept-continuity': ['adjust', 'Existing bio12m5Lineage; suppress hardcoded viable=fertile label with at.viable=1000000 outside this scene', 'Preserve connected generations and DNA handoff while narration identifies selected schematic lineage', 'Reproduction makes the link', 'DNA handoff and generation change explain succession; lifetime compression explicitly stated', 'Hold generations and inheritance ribbon; viability/fertility explained in stable source text'],
  definition: ['adjust', 'Existing definition board, three concise bullets', 'Separate fusion criterion from parent-count heuristic; define allele before use', 'That is still sexual reproduction because gametes fuse', 'Reveal vocabulary in connected order', 'Read gamete fusion and zygote before moving on'],
  'concept-asexual': ['adjust', 'Existing table/concept layout. Original bio12m5Population clone binding deliberately withheld.', 'Retain comparison layout and teach the mutation/environment distinction once, without deterministic disease outcomes', 'There are two different reasons clones can differ', 'Stable DNA versus difference comparison; no deterministic disease animation', 'Hold both columns together; phone-fit inspection pending'],
  'concept-sexual': ['adjust', 'Existing table/concept layout. Original bio12m5Population varied binding deliberately withheld.', 'Show existing alleles combined differently without depicting guaranteed survivors', 'It is like dealing a new hand from an existing set of cards', 'Sequential starting-information and combination reveal, then stable comparison', 'Hold parent alleles and offspring combinations together; card analogy refers only to reshuffling'],
  'concept-tradeoff': ['adjust', 'Reuse original three-column table structure with shorter qualified entries', 'Gamete fusion and conditional benefit can be compared without universal winner labels', 'Infection also depends on exposure', 'Table entrance serves comparison; no universal ranking', 'Keep both methods and survival-certain row visible'],
  'worked-example': ['adjust', 'Existing worked-example board with three staged reasons', 'Transfer fusion criterion to self-fertilisation; no DNA-copying mechanism detail', 'There is only one parent plant', 'Reveal classification and reason together, in example order', 'Hold all three established reasons; cue timings are estimates'],
  misconception: ['adjust', 'Existing misconception board', 'Diagnose one risk-to-certainty inference without repeating the earlier caveat list', 'The mistake is turning a shared susceptibility into a certain outcome', 'Contrast mistaken inference and qualified explanation', 'Hold the repair while the inference is explained'],
  'quick-check': ['adjust', 'Existing QuickCheckSlide calculationPresentation used as a non-arithmetic comparison/evidence board; short task, two givens, condition and four stages', 'Group the unchanged nursery stimulus for less reading load. Keep inherited susceptibility and survival-limit reasoning visible without a long heading or repeated pause text.', 'Pause here to explain your reasoning', 'Answer stages remain hidden before estimated frame 960; then reveal one reasoning stage at a time and retain established conclusions. Speech and segment text are unchanged; replace stage cues after measured assembly.', 'Estimated hold 720 through 960 is an eight-second planning interval, not a measured responseHold. Givens and supplied condition remain visible. No authored pausePrompt duplicates the built-in instruction.'],
  summary: ['adjust', 'Existing summary board and next-handoff prompt, reduced to four compact takeaways', 'Consolidate lineage, gamete fusion and retained/reshuffled combination reasoning, then hand off to mechanisms', 'A combination that works well in one set of conditions', 'Reveal compact takeaways; stable ending', 'Read final distinction and next mechanism handoff']
};
brief.scenes = lesson.scenes.map(s => {const v = visual[s.id]; return {sceneId: s.id, visualDecision: v[0], visualReference: v[1], teachingReason: v[2], narrationCue: v[3], motionPurpose: v[4], holdPurpose: v[5]};});
brief.origin = {lessonPath: originalPath, lessonSha256: originalHash, preservedSceneIds: lesson.scenes.map(s => s.id), previousAttachedSceneRecordings: 10, originalMediaReused: false};
brief.supersededDraft = {lessonPath: directory + '/initial-review/lesson.json', lessonSha256: '921923cfabfb29cc27c693f9b59bb1e364e16b3b02854ca2b9d36ba1965b6af6', status: 'superseded-initial-review-evidence-no-approval', reason: 'Editorial revision after independent findings about repetition and ambiguous genetic-in-response phrasing.'};
brief.priorSourceRevision = {lessonPath: directory + '/source-reviewed/lesson.json', lessonSha256: '712a505e6c41fb5acb0d670c25614c88162dd5895013174c7b0d9988a872fb26', status: 'historical-source-evidence-no-layout-or-release-approval', reason: 'Root identified a dense quick-check heading in exact native still959. Active revision changes display organisation only; narration and recording segments are byte-identical.'};
brief.limitation = 'Silent additive source draft. Independent science, visual, motion/playback, caption/device and human listening review pending. Scene lengths and reveal cues are estimates. No paid narration, full export or release authorised by this file. Old recordings/alignment/captions are not attached to revised speech.';
writeFileSync(directory + '/production-brief.json', JSON.stringify(brief, null, 2) + '\n');
writeFileSync(directory + '/recording-segments.json', JSON.stringify({status: 'silent-source-draft', timingStatus: 'estimated-not-measured', sceneId: 'quick-check', prompt: prompt + ' Pause here to explain your reasoning.', proposedSilenceSeconds: 8, feedback, instructions: 'Record prompt and feedback separately with fresh takes. Measure the prompt, assemble an exact silent gap, rebuild scene length/alignment/captions and reveal cues. Do not generate a single continuous scene take and assume a written pause creates silence.'}, null, 2) + '\n');
const md = ['# Reproduction: Continuity and Variation', '', 'Silent source draft, 10 October 2026. Narration only below. No selected recordings. Scene timing remains estimated.', '', ...lesson.scenes.flatMap(s => ['## ' + s.id, '', narration[s.id] ?? '(Silent title.)', ''])];
writeFileSync(directory + '/narration.md', md.join('\n'));
console.log(JSON.stringify({path, originalPath, originalHash, sceneCount: lesson.scenes.length, narratedScenes: Object.keys(narration).length, estimatedSceneSeconds: lesson.scenes.reduce((n,s)=>n+s.durationInFrames/lesson.fps,0)}, null, 2));
