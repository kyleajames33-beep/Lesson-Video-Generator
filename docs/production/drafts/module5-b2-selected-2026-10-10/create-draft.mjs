import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import {createProductionBrief} from '../../../../scripts/lib/production-brief.mjs';

const base = 'docs/production/drafts/module5-b2-selected-2026-10-10';
const prototype = 'out/prototypes/module5-b2-selected-2026-10-10';
const preparation = 'docs/production/drafts/module5-next-preparation-2026-10-10/biology-b2-animals.md';
const original = 'src/data/biology-y12-m5-l2-reproduction-in-animals.json';
const prepReview = 'docs/production/biology-b2-preparation-review-2026-10-10.md';
const hash = file => createHash('sha256').update(fs.readFileSync(file)).digest('hex');
assert.equal(hash(preparation), '8525e4ab2d89a68b0b3124ffe04a4bd648ec762de3d19b5cee413609afe96956');
assert.equal(hash(original), 'aa69e9a31be275f142b656052c9f4882c203cab45afd2593d6caa95ccd9719e0');
const prep = fs.readFileSync(preparation, 'utf8').replaceAll('\r\n', '\n');
const speech = Object.fromEntries([...prep.matchAll(/### ([^\n]+)\n\n\*\*Speech\*\*\n\n([^\n]+)/g)].map(match => [match[1].match(/\(`([^`]+)`\)/)?.[1], match[2]]));
assert.equal(Object.keys(speech).length, 11);
assert.ok(Object.values(speech).every(text => !text.includes(String.fromCharCode(0x2014))));
const estimate = text => Math.ceil(text.split(/\s+/).length / 2.1 * 30) + 90;
const scene = (id, type, caption, segment, extra = {}) => ({id, type, caption, durationInFrames: estimate(speech[segment]), voiceover: {text: speech[segment]}, ...extra});
const diagram = (mode, at) => ({type: 'diorama', kind: 'bioM5AnimalReproduction', props: {mode, at}});
const concept = (id, caption, segment, heading, bullets, mode, at, extra = {}) => scene(id, 'concept', caption, segment, {heading, body: '', bullets, conceptVisualLayout: 'diagramFocus', diagram: diagram(mode, at), ...extra});
const stage = (label, lines, summary) => ({label, lines, summary});
const promptEnd = estimate(speech['b2-check-prompt']);
const answerAt = promptEnd + 360;
const scenes = [
  {id: 'title', type: 'title', durationInFrames: 90, caption: 'Reproduction in Animals: Where Do Gametes Fuse?'},
  scene('hook', 'hook', 'Where did gametes fuse?', 'b2-hook', {
    heading: 'Same location of fertilisation?', body: 'Both eggs are outside when we see them. Where did gametes fuse?',
    comparisonIsPrompt: true, comparison: [
      {label: 'Frog', amount: 'Eggs in pond', mass: 'Fusion?'},
      {label: 'Bird', amount: 'Fertilised egg in nest', mass: 'Fusion?'},
    ], revealDelays: {heading: 22, body: 50, callout: 800},
  }),
  concept('concept-fertilisation', 'Haploid gametes supply one set each. The diploid zygote has two.', 'b2-fertilisation', 'One set + one set', [
    {text: 'Haploid: one chromosome set.', at: 5},
    {text: 'Diploid: two chromosome sets.', at: 22},
  ], 'ploidy', {start: 110, second: 470, result: 690, condition: 1000000}, {
    secondary: 'Set-count model, not the full chromosome count or molecular sequence.', revealDelays: {secondary: 1260},
  }),
  concept('concept-asexual-animal', 'Hydra budding produces a new animal without gamete fusion.', 'b2-hydra', 'A bud becomes a hydra', [
    {text: 'Growth and development precede detachment.', at: 4},
    {text: 'Classify the event by its mechanism.', at: 36},
  ], 'hydra', {start: 65, second: 225, result: 450, condition: 615}),
  concept('concept-external', 'External fertilisation: fusion outside the body. Encounters depend on conditions.', 'b2-external', 'Fusion outside the body', [
    {text: 'Moisture limits gamete drying.', at: 13},
    {text: 'Proximity and timing support encounters.', at: 24},
    {text: 'Fertilisation and later survival are separate.', at: 47},
  ], 'external', {start: 80, second: 300, result: 1000000, condition: 750}),
  concept('concept-internal', 'Internal fertilisation: fusion inside the body. Costs and survival depend on context.', 'b2-internal', 'Fusion inside the body', [
    {text: 'A moist tract reduces exposure to drying.', at: 9},
    {text: 'Sperm transfer has costs and constraints.', at: 35},
    {text: 'Offspring number and care vary.', at: 46},
  ], 'internal', {start: 70, second: 200, result: 1000000, condition: 425}),
  concept('definition-comparison', 'Fusion location, embryo development and parental support are separate questions.', 'b2-comparison', 'Ask three questions', [
    {text: 'Where do gametes fuse?', at: 1},
    {text: 'Where does the embryo develop?', at: 5},
    {text: 'What support follows?', at: 9},
  ], 'bird', {start: 400, second: 560, result: 690, condition: 950}),
  scene('worked-example', 'workedExample', 'Use the stated fusion location to classify fertilisation.', 'b2-worked', {
    heading: 'Where did fusion occur?', question: 'Classify using the supplied fusion location.',
    steps: ['Frog: external, fusion in pond water.', 'Kangaroo: internal, fusion inside the female.', 'Bird: internal, fusion before egg laying.'],
    revealDelays: {heading: 18, stepAts: [400, 880, 1280]},
    calculationPresentation: {layout: 'module5Evidence', task: 'Where did gametes fuse?', givens: [
      {label: 'Frog', value: 'Pond water'}, {label: 'Kangaroo', value: 'Inside female'},
    ], note: 'Bird: an already fertilised egg is laid.', stages: [
      stage('Frog: external', ['Fusion in pond water.', 'Moisture and proximity help encounters.'], 'Frog: fusion outside.'),
      stage('Kangaroo: internal', ['Fusion inside the female.', 'Moist tract reduces exposure to drying.'], 'Kangaroo: fusion inside.'),
      stage('Bird: internal', ['Fusion occurred before egg laying.', 'Development later continues outside.'], 'Bird: internal fusion, external development.'),
    ]},
  }),
  scene('misconception', 'misconception', 'Explain an advantage from mechanism and conditions.', 'b2-misconception', {
    heading: 'Internal always better?', body: 'An advantage depends on the mechanism and conditions.',
    mistakeTag: 'Universal verdict', callout: 'Neither strategy promises survival to reproduction.',
    revealDelays: {heading: 18, body: 720, callout: 1060},
  }),
  {id: 'quick-check', type: 'quickCheck', heading: 'Same numbers, changed separation', question: 'Predict fertilisation opportunities and explain why surviving offspring need not be equal.',
    caption: 'Same initial gamete numbers and viable lifetime. Stronger current carries sperm away.',
    durationInFrames: answerAt + estimate(speech['b2-check-feedback']) + 90,
    voiceover: {text: speech['b2-check-prompt'] + ' ' + speech['b2-check-feedback']},
    answerSteps: ['Separation reduces gamete encounters.', 'This predicts fewer fertilisation opportunities, not an exact count.', 'Later survival and reproduction depend on further conditions.'],
    revealDelays: {heading: 18, responseHoldStart: promptEnd, answerVisibleStart: answerAt, stepAts: [answerAt, answerAt + 700, answerAt + 1190]},
    calculationPresentation: {layout: 'module5Evidence', task: 'Predict encounters. Why can offspring survival differ?', givens: [
      {label: 'Gamete numbers', value: 'Equal'}, {label: 'Viable lifetime', value: 'Equal'},
    ], note: 'Group 1: same place/time. Group 2: stronger current carries sperm away.', stages: [
      stage('Separation changes encounters', ['Sperm is carried away from eggs.', 'Fewer fertilisation opportunities.'], 'Separation reduces encounters.'),
      stage('Prediction has a limit', ['Equal numbers do not give equal encounters.', 'No exact fertilised-egg count follows.'], 'Prediction, not an exact count.'),
      stage('Fertilisation is one stage', ['Development and predation still matter.', 'Survival to reproduction is separate.'], 'Fusion does not guarantee survival.'),
    ]},
  },
  scene('summary', 'summary', 'Mechanism, chromosome sets, fusion location and conditions.', 'b2-summary', {
    heading: 'Explain the mechanism', points: [
      'Hydra budding: no gamete fusion.', 'Haploid + haploid: diploid zygote.',
      'Internal/external: where fusion occurs.', 'Advantage: feature plus conditions.',
    ], finalPrompt: 'Next: plants, fungi, bacteria and protists.',
  }),
];
const lesson = {title: 'Reproduction in Animals: Where Do Gametes Fuse?', subtitle: 'Mechanisms, fusion location and conditions', subject: 'Biology', yearLevel: 'Year 12', module: 'Module 5', lesson: 'Lesson 2', syllabusNeutral: true, syllabusVersion: 'Biology Stage 6 Syllabus (2017)', syllabusModule: 'Module 5: Heredity', lessonIntent: 'Explain named animal reproductive mechanisms, classify fusion location and analyse a contextual advantage or limitation.', examSkill: 'Link a supplied condition to gamete encounter opportunities and keep fertilisation separate from later survival.', productionRole: 'production', fps: 30, width: 1920, height: 1080, introDurationInFrames: 0, scenes};
fs.mkdirSync(base, {recursive: true}); fs.mkdirSync(prototype, {recursive: true});
const write = (name, data) => {const text = typeof data === 'string' ? data : JSON.stringify(data, null, 2) + '\n'; fs.writeFileSync(path.join(base, name), text); fs.writeFileSync(path.join(prototype, name), text);};
write('lesson.json', lesson); write('remotion-props.json', {lesson});
const brief = createProductionBrief(process.cwd(), `${base}/lesson.json`);
brief.progression = {planPath: 'docs/production/course-progression-plan-2026-10-09.md', routePath: 'docs/production/module5-video-route-2026-10-10.json', routeId: 'bio-m5-b02a', playlistPosition: 2,
  prerequisiteKnowledge: 'B1: inherited information in DNA, continuity across generations, gametes, sexual gamete fusion and asexual reproduction without fusion. Entry diagnostic: fusion, rather than parent count, defines a sexual event. B1 publication is not presumed.',
  startsWith: 'Frog gametes meet in pond water; a bird lays a supplied fertilised egg after internal fusion. Find fusion location rather than present egg location.',
  stopsAfter: 'Named hydra budding mechanism, a haploid-to-diploid animal set model, contextual external/internal fusion, bird development contrast and a supplied separation prediction. No detailed meiosis, hormones, reproductive anatomy, pregnancy or plant/microbe mechanisms.',
  nextLesson: 'bio-m5-b02b: reproduction in plants, fungi, bacteria and protists, candidate src/data/biology-y12-m5-l3-reproduction-plants-fungi-bacteria-protists.json. Then bio-m5-b03a for mammalian reproduction. Playlist order does not establish upload chronology.'};
brief.researchReferences.push('docs/research/library-implementation-plan.md', 'docs/production/teaching-visual-brief-template.md', 'docs/visual-design-handbook.md', 'docs/production/preview-first-review.md', 'docs/production/course-content-checklist-2026-10-09.md', 'docs/production/course-progression-ledger-2026-10-09.json', 'docs/production/module5-video-route-2026-10-10.json');
brief.teaching = {task: lesson.lessonIntent,
  causalExplanation: 'Moist conditions reduce drying exposure; proximity and timing affect gamete encounters. Stipulated separation reduces encounters at equal initial numbers and viable lifetime. One chromosome set from each gamete yields two in a zygote. Hydra growth and detachment form offspring without fusion.',
  conversationalApproach: 'Preserve the accepted preparation speech exactly, including causal links, named cases, model boundaries and diagnostic feedback. New words require fresh recordings. Draft scenes and cues are estimates, not recorded timings.',
  openingDecision: 'A supplied fertilised bird egg and frog eggs are both outside when observed. The rhetorical contrast asks where fusion occurred, without judging from egg location. No protected opening attempt claimed.',
  understandingCheck: 'Supplied stronger-current model carries sperm away while initial gamete numbers and viable lifetime stay equal. Explain encounters and why fertilisation differs from survival. Separate prompt and feedback takes with an initial 12-second assembled answer-free hold after final prompt speech. Timing must be rebuilt from alignment. Evidence does not independently test budding, set tracing or internal classification.',
  curriculumScope: 'Current Year 12 Biology 2017 Module 5, bio-m5-b02a. Pending animal contribution to cached p1025 and external/internal advantage analysis p1026, extraction IDs not official codes. Broad organism action, p1031 mammalian detail, practical conduct, assessed mastery and complete coverage are not certified.'};
const decisions = {
  title: ['reuse', 'Existing TitleSlide with no artwork binding', 'Orient without a spoken metadata recital', 'No speech; title settles before contrast', 'Single title reveal', 'Brief readable orientation'],
  hook: ['adjust', 'Existing HookSlide neutral comparison cards; comparisonIsPrompt true; no image/atom fallback', 'Egg location alone cannot classify fertilisation', 'Both eggs are outside the body when we see them', 'Reveal neutral frog/bird stimuli and fusion question, no verdict', 'Rhetorical contrast, no protected attempt'],
  'concept-fertilisation': ['adjust', 'Existing ConceptSlide diagramFocus; bounded bioM5AnimalReproduction ploidy board, historical bio12m5Ploidy unmodified', 'Readable labelled sperm and egg sets stay available after combination', 'each carry one set; brings the two sets together; diploid', 'Draw converging set relation, reveal zygote with both distinguishable sets', 'Retain gametes and zygote references; arbitrary chromosome count and compressed events are model limits'],
  'concept-asexual-animal': ['new', 'Existing concept shell and new plain labelled hydra mechanism flow; no animal outline or raster needed', 'Growth, development and detachment explain budding without gamete fusion', 'bud grows; cells divide; detach', 'Reveal attached developing bud then separate hydra in order', 'Parent remains as reference; flow is not one division producing an entire hydra'],
  'concept-external': ['adjust', 'Existing concept shell; neutral external location board replaces unsafe Fertilise binding; salmon raster deliberately unbound', 'Separate moisture, encounter opportunity and later survival', 'outside the female body; close together in place and time; dispersal', 'Location outline and directed encounter arrow only, no outcome fraction', 'Stable water context; icons are schematic not measured gamete counts or rates'],
  'concept-internal': ['adjust', 'Existing concept shell; opt-in neutral internal moist-compartment board; historical Fertilise unmodified', 'Internal location protects the meeting setting without determining care or survival', 'inside; moist reproductive tract; time and energy; depend on the animal', 'Draw encounter direction inside compartment, focus drying context', 'No anatomical precision, fixed offspring number, parental care or survival outcome depicted'],
  'definition-comparison': ['adjust', 'ConceptSlide shell instead of dense vocabulary board; three stable questions beside labelled bird sequence', 'Keep fusion location, embryo development and support as separate dimensions', 'Where do gametes fuse; embryo develop; support; bird uses internal fertilisation', 'Sequential fusion-before-laying-before-development flow', 'Bird egg is explicitly fertilised; care question is independent, not a guaranteed outcome'],
  'worked-example': ['adjust', 'Existing WorkedExampleSlide and opt-in module5Evidence board, one active case plus established trail', 'Classify supplied fusion location and connect a condition with a useful feature', 'frog case; kangaroo case; bird lays an already fertilised egg', 'One case at its spoken cue; retain prior classifications', 'Demonstration only, not a learner attempt. Draft frame cues require measured narration'],
  misconception: ['adjust', 'Existing MisconceptionSlide mistake and repair board', 'Repair universal ranking using mechanism plus conditions', 'universal verdict; mechanism and conditions', 'Faulty claim then contextual decision rule', 'Stable repair, no winner badge or guaranteed success'],
  'quick-check': ['adjust', 'Existing QuickCheckSlide, module5Evidence givens/active stage/trail and answerVisibleStart gate', 'Transfer separation mechanism under equal stipulated quantities, then diagnose same-number reasoning', 'Pause here to give your reason; carrying sperm away reduces opportunities', 'Prompt-only supplied conditions through planned hold; first answer stages start after hold; later stages need aligned cues', `Provisional prompt reserve ${promptEnd} frames, 360-frame (12-second) silent hold, first answer boundary ${answerAt}. No measured responseHold claimed. Current text-only combined scene requires separate fresh takes and explicit silence assembly. Prompt-only captions during hold; no diagram/verdict/count/reasoning before boundary. Exact first answer frame and continuous playback pending`],
  summary: ['reuse', 'Existing SummarySlide, four compact relationships and separate next handoff', 'Consolidate mechanism, sets, fusion location and contextual advantage', 'hydra bud; haploid; external and internal; connecting a feature', 'Reveal compact relationships and settle next handoff', 'Readable final hold; no full-module coverage or survival guarantee'],
};
brief.scenes = scenes.map(s => {const [visualDecision, visualReference, teachingReason, narrationCue, motionPurpose, holdPurpose] = decisions[s.id]; return {sceneId: s.id, visualDecision, visualReference, teachingReason, narrationCue, motionPurpose, holdPurpose};});
brief.origin = {preparation: {path: preparation, sha256: hash(preparation)}, preparationReview: {path: prepReview, sha256: hash(prepReview), scope: 'Document and factual review only, resolved hook follow-up; not exact selected-source approval.'}, original: {path: original, sha256: hash(original)}, retainedOriginal: true, oldMediaReused: false};
brief.limitation = 'Silent additive selected candidate. Exact selected-source independent review pending. No recording/export/release approval. All scene and cue timings are provisional; no audio, alignment or faithful timed captions selected. New source, layout and labels need exact review. Native stills cannot establish playback or human listening.';
write('production-brief.json', brief);
const segments = Object.entries(speech).map(([id, text]) => ({id, sceneId: id.startsWith('b2-check-') ? 'quick-check' : scenes.find(s => s.voiceover?.text === text)?.id, text, role: id === 'b2-check-prompt' ? 'prompt' : id === 'b2-check-feedback' ? 'feedback' : 'explanation'}));
write('recording-segments.json', {schemaVersion: 1, status: 'text-only-no-media-selected', source: {path: `${base}/lesson.json`, sha256: hash(`${base}/lesson.json`)}, segments,
  responsePlan: {sceneId: 'quick-check', promptSegment: 'b2-check-prompt', feedbackSegment: 'b2-check-feedback', silenceSeconds: 12, status: 'unmeasured-drafting-hypothesis', assembly: 'Start exact silence after final prompt speech; bind feedback sound, first visual answer and first answer caption after its verified end. Rebuild quick-check text/audio window, duration and reveals from measured alignment. Do not infer silence from this text manifest.'}});
write('narration.md', '# Biology B2 selected narration\n\nUnrecorded. Exact speech from the reviewed preparation. Scene durations and cues are provisional. No title speech.\n\n' + segments.map(s => `## ${s.id}\n\n${s.text}\n`).join('\n') + '\nThe quick-check prompt and feedback are separate fresh takes. Assemble 12 seconds of initial silent response time after the final prompt speech; measure and review before treating it as protected response evidence.\n');
console.log(JSON.stringify({source: `${base}/lesson.json`, sha256: hash(`${base}/lesson.json`), scenes: scenes.length, promptReserveFrames: promptEnd, firstAnswerFrame: answerAt, portablePrototype: prototype}, null, 2));
