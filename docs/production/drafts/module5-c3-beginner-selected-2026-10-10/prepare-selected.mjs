import assert from 'node:assert/strict';
import {readFileSync, writeFileSync, mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {createProductionBrief} from '../../../../scripts/lib/production-brief.mjs';

const base = 'docs/production/drafts/module5-c3-beginner-selected-2026-10-10';
const preparationPath = 'docs/production/drafts/module5-beginner-preparation-2026-10-10/chemistry-c3.md';
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const preparationBytes = readFileSync(preparationPath);
assert.equal(hash(preparationBytes), '22bcd7f9a2d7279dd2f7c8df7f9a9e091fcff11e23d4df20b4012d8420f98ff2');
const preparation = preparationBytes.toString('utf8');
const sections = [...preparation.matchAll(/^### (c3-[\w-]+): ([^\r\n]+)\r?\n([\s\S]*?)(?=^### |^## |$(?![\s\S]))/gm)];
const speeches = [...preparation.matchAll(/^\*\*(Narration|Prompt|Feedback):\*\* "([^\r\n]+)"$/gm)].map(match => ({kind: match[1].toLowerCase(), text: match[2]}));
const words = text => text.trim().split(/\s+/).length;
const estimatedFrames = text => Math.ceil(words(text) / 140 * 60 * 30);
const cue = (text, phrase, offset = 0) => {
  const index = text.indexOf(phrase);
  assert(index >= 0, phrase);
  return offset + Math.ceil(words(text.slice(0, index) || ' ') / 140 * 60 * 30);
};
const captions = {
  'c3-hook': 'Separate the direct addition from the later reaction.',
  'c3-add': 'Only A jumps. Reaction changes both concentrations afterwards.',
  'c3-remove': 'Reset the experiment. Replacement is partial in this model.',
  'c3-principle': 'Same temperature, same equilibrium relationship.',
  'c3-temperature': 'Use the written heat-releasing direction to predict the response.',
  'c3-temperature-response': 'Temperature changes K; composition adjusts afterwards.',
  'c3-water': 'An open oven can combine heating and water removal.',
  'c3-transfer-a': 'Separate the imposed removal from the later reaction.',
  'c3-transfer-b': 'Use the stated heat change and written reaction.',
  'c3-summary': 'Identify the disturbance before predicting the response.',
};
const boards = {
  'c3-add': {heading: 'Add A: direct change, then reaction', rows: [
    ['Use our simple', 'A ⇌ B. Fixed temperature and volume.'],
    ["A's concentration rises", 'Only A rises immediately.'],
    ['Straight after mixing', 'A to B initially faster; B to A unchanged.'],
    ['A now falls', 'A falls from its jump; B rises.'],
    ['In this model, the new', 'Final: more A and B than originally, in this model.'],
  ]},
  'c3-remove': {heading: 'Separate experiment: remove B', rows: [
    ['Start again', 'A ⇌ B. Fixed temperature and volume; reclose.'],
    ['B drops immediately', 'Only B drops immediately.'],
    ['With less B', 'B to A initially slower; A to B faster.'],
    ['But compare B', 'B partly recovers, but remains below original.'],
  ]},
  'c3-principle': {heading: 'Same temperature: same K', rows: [
    ["Our model gives", 'One direction is temporarily faster.'],
    ['We also need', 'K describes the equilibrium relationship.'],
    ['Adding or removing', 'Adding or removing material at fixed temperature: same K.'],
  ]},
  'c3-temperature': {heading: 'Which direction releases heat?', rows: [
    ['Two nitrogen', '2NO₂(g) ⇌ N₂O₄(g). Closed; fixed volume.'],
    ['It releases heat', 'Joining releases heat: exothermic, ΔH < 0.'],
    ['The reverse direction', 'Splitting absorbs heat: endothermic.'],
    ['Heating favours', 'Heating favours splitting; cooling favours joining.'],
  ]},
  'c3-temperature-response': {heading: 'Temperature first, composition later', rows: [
    ['Heating can', 'Closed; fixed volume. No material added or removed.'],
    ['Their concentrations', 'No imposed concentration jump. Reaction follows.'],
    ['K has a value', 'K belongs to the new temperature immediately.'],
    ['For our written', 'Written exothermic forward reaction: heating lowers K.'],
  ]},
  'c3-water': {heading: 'An open oven can change two things', rows: [
    ['That combines', 'Heating plus possible water removal.'],
    ['For a temperature-only', 'Heating only: material retained.'],
    ['For a water-removal', 'Water removal only: temperature fixed.'],
  ]},
};
const lesson = {
  title: 'Disturbing equilibrium: concentration and temperature',
  subtitle: 'Separate the direct change from the reaction afterwards',
  subject: 'Chemistry', yearLevel: 'Year 12', module: 'Module 5', lesson: 'Lesson 3',
  syllabusVersion: 'Chemistry Stage 6 Syllabus (2017)',
  syllabusModule: 'Module 5: Equilibrium and Acid Reactions',
  syllabusDotPoints: ['Candidate explanation: concentration and temperature disturbances, with stated conditions. Practical investigation and action approval remain pending.'],
  nesaOutcomes: ['CH12-12'],
  inquiryQuestion: 'What happens when chemical reactions do not go through to completion?',
  lessonIntent: 'Distinguish an imposed change from subsequent net reaction, predict its direction under stated conditions, and explain fixed-temperature versus temperature-dependent K.',
  examSkill: 'Explain a supplied disturbance using initial rate imbalance or the stated heat-releasing direction.',
  productionRole: 'production', fps: 30, width: 1920, height: 1080, introDurationInFrames: 0,
  scenes: [{id: 'c3-title', type: 'title', durationInFrames: 120, caption: 'Disturbing equilibrium: concentration and temperature', syllabusDotPointIndex: -1}],
};
const segments = [];
const estimatedHolds = [];
const trace = [];
for (const [ , id, heading, section] of sections) {
  if (id === 'c3-title') continue;
  const parts = [...section.matchAll(/^\*\*(Narration|Prompt|Feedback):\*\* "([^\r\n]+)"$/gm)].map(match => ({kind: match[1].toLowerCase(), text: match[2]}));
  assert(parts.length, id);
  const text = parts.map(part => part.text).join(' ');
  const common = {id, durationInFrames: estimatedFrames(text) + 90, caption: captions[id], voiceover: {text}, syllabusDotPointIndex: -1};
  const cues = [];
  if (id === 'c3-hook') {
    lesson.scenes.push({...common, type: 'hook', heading: 'Add A: what changes immediately?', body: 'A ⇌ B. Brief addition, then close the mixture again.',
      comparison: [{label: 'Initial equilibrium', amount: 'One-to-one model', mass: 'A: 2; B: 1'}, {label: 'Brief addition', amount: 'Fixed temperature and volume', mass: 'Add A only'}],
      comparisonIsPrompt: true, callout: 'Extra B has to be made by reaction.',
      revealDelays: {heading: 12, body: 24, callout: cue(text, 'Any extra B')}});
    cues.push({field: 'revealDelays.callout', phrase: 'Any extra B', unit: 'frames', estimatedAt: cue(text, 'Any extra B')});
  } else if (boards[id]) {
    const board = boards[id];
    lesson.scenes.push({...common, type: 'concept', heading: board.heading, body: board.rows[0][1],
      bullets: board.rows.map(([phrase, copy], index) => { const at = index === 0 ? 0.8 : cue(text, phrase) / 30; cues.push({field: `bullets[${index}].at`, phrase, unit: 'seconds', estimatedAt: at}); return {text: copy, at}; }),
      revealDelays: {heading: 12, body: 24}});
  } else if (id.startsWith('c3-transfer-')) {
    const prompt = parts.find(part => part.kind === 'prompt').text;
    const feedback = parts.find(part => part.kind === 'feedback').text;
    const promptEnd = estimatedFrames(prompt), feedbackStart = promptEnd + 360;
    common.durationInFrames = feedbackStart + estimatedFrames(feedback) + 90;
    const a = id.endsWith('-a');
    const stages = a ? [
      ['Only A drops', 'Immediate change', ['Only A drops immediately.'], ['Only A drops']],
      ['Less A initially', 'Initial rate comparison', ['A to B initially slower.', 'B to A initially unchanged.'], ['Less A initially', 'B has not changed yet']],
      ['B is now', 'Reaction afterwards', ['B to A is initially faster.', 'A partly recovers; B decreases.'], ['B is now', 'A starts recovering']],
      ['K stays', 'Temperature and K', ['K stays the same.', 'Temperature stayed fixed.'], ['K stays', 'temperature stayed fixed']],
    ] : [
      ['Cooling favours', 'Use the stated heat change', ['Cooling favours heat release.', 'Here, that means joining.'], ['Cooling favours', 'Here that is']],
      ['contains more', 'Composition after cooling', ['More N₂O₄ at equilibrium.'], ['contains more']],
      ['K is larger', 'K at the new temperature', ['K is larger at lower temperature.'], ['K is larger']],
    ];
    const stepAts = stages.map(row => cue(feedback, row[0], feedbackStart));
    const presentationStages = stages.map(([phrase, label, lines, linePhrases], index) => ({label, lines, summary: lines.join(' '), lineAts: linePhrases.map(line => cue(feedback, line, feedbackStart))}));
    const task = a ? 'Remove A: what changes immediately?' : 'After cooling: more or less N₂O₄?';
    const secondaryTask = a ? 'Explain the later direction. Does K change?' : 'Is K larger or smaller? Explain using heat release.';
    const lines = a ? ['Initially at equilibrium', 'Remove A, then reclose', 'Fixed temperature and volume', 'Each rate depends on its starting form'] : ['Initially at equilibrium', 'Closed; fixed volume', 'Cool the mixture', 'Forward releases heat: ΔH < 0'];
    const equation = a ? 'A ⇌ B: one-for-one' : '2NO₂(g) ⇌ N₂O₄(g)';
    lesson.scenes.push({...common, type: 'quickCheck', heading: a ? 'Separate experiment: remove A' : 'Separate experiment: cool', question: task + ' ' + secondaryTask,
      pausePrompt: 'Pause to explain your reason.', answerSteps: presentationStages.map(stage => stage.lines.join(' ')),
      calculationPresentation: {layout: 'module5Evidence', captionSafeWorking: true, task, givens: [], stages: presentationStages,
        focusedContext: [{at: 0, title: equation, lines, task, secondaryTask}]},
      revealDelays: {heading: 12, responseHoldStart: promptEnd, pausePrompt: Math.max(24, promptEnd - 90), answerVisibleStart: feedbackStart, stepAts}});
    estimatedHolds.push({sceneId: id, startFrame: promptEnd, endFrame: feedbackStart, frames: 360, seconds: 12, status: 'planning-estimate-not-measured', audioAssemblyRequired: 'Separate prompt and feedback takes with twelve seconds of assembled silence after accepted prompt audio.'});
    for (let index = 0; index < presentationStages.length; index++) cues.push({field: `calculationPresentation.stages[${index}].lineAts`, phrases: stages[index][3], unit: 'frames', estimatedAt: presentationStages[index].lineAts});
  } else if (id === 'c3-summary') {
    const takeawayAts = ['Start with what changed', 'Then ask which reaction', 'For heating or cooling'].map(phrase => cue(text, phrase));
    lesson.scenes.push({...common, type: 'summary', heading: 'Direct change, then reaction',
      points: ['What changed directly?', 'Which direction is initially faster?', 'Same or changed temperature?'],
      finalPrompt: 'Next: gaseous volume changes and catalysts.', revealDelays: {heading: 12, takeawayAts, finalPrompt: cue(text, 'Next, we')}});
    cues.push({field: 'revealDelays.takeawayAts', phrases: ['Start with what changed', 'Then ask which reaction', 'For heating or cooling'], unit: 'frames', estimatedAt: takeawayAts});
  } else throw new Error('Unmapped scene ' + id);
  for (const part of parts) segments.push({sceneId: id, kind: part.kind, text: part.text, textSha256: hash(Buffer.from(part.text)), words: words(part.text), recordingStatus: 'unrecorded', estimatedSpeechFrames: estimatedFrames(part.text)});
  trace.push({sceneId: id, preparationSection: heading, spokenSegments: parts.map(part => part.kind), exactWordsPreserved: true, cues, timings: 'Estimated word-position planning only. Replace with accepted fresh alignment.'});
}
assert.deepEqual(segments.map(segment => ({kind: segment.kind, text: segment.text})), speeches);
mkdirSync(base, {recursive: true});
const write = (name, data) => writeFileSync(base + '/' + name, JSON.stringify(data, null, 2) + '\n');
write('lesson.json', lesson);
write('remotion-props.json', {lesson});
const sourceHash = hash(readFileSync(base + '/lesson.json'));
write('narration-plan.json', {schemaVersion: 1, source: {path: base + '/lesson.json', sha256: sourceHash}, preparation: {path: preparationPath, sha256: hash(preparationBytes)}, model: 'Fresh recording selection by root after exact selected-source and visual review. No voice settings or audio selected here.', words: segments.reduce((sum, segment) => sum + segment.words, 0), segments, responseIntervals: estimatedHolds, timingStatus: 'All durations/reveals are estimates; no audio, alignment, captions or measured responseHold attached.'});
write('traceability.json', {schemaVersion: 1, source: {path: base + '/lesson.json', sha256: sourceHash}, preparation: {path: preparationPath, sha256: hash(preparationBytes)}, preparationReview: {path: 'docs/production/module5-beginner-next-preparation-review-2026-10-10.md', sha256: 'c939d86f608969eee9ffb67f316f65d675a3274be6ed5704f445d65ca2519429', scope: 'Human-readable preparation only; not selected-source approval.'}, scenes: trace, silentTitle: 'c3-title', cuts: [], limitation: 'All accepted spoken paragraphs preserved in order. Current concise text boards are provisional integration treatments; graph/reference progression remains blocked as detailed in visual-implementation-proposal.json.'});
const brief = createProductionBrief(process.cwd(), base + '/lesson.json');
brief.progression = {planPath: 'docs/production/course-progression-plan-2026-10-09.md',
  prerequisiteKnowledge: 'C2: equal opposing rates versus amounts, closed versus insulated systems and the declared one-to-one A/B model. Entry check: equal rates need not mean equal concentrations. Rate and concentration are reminded in speech; released/absorbed heat and the enthalpy sign are explained here before use.',
  startsWith: 'Established equilibrium, briefly add/remove one participating form at fixed temperature/volume and reclose. A/B is a well-mixed one-to-one first-order model with positive fixed coefficients and no side reactions. Separate temperature case: closed, fixed-volume 2NO₂(g) ⇌ N₂O₄(g), forward heat-releasing.',
  stopsAfter: 'Distinguish immediate imposed change from subsequent reaction, explain direction and fixed-temperature versus temperature-dependent K; diagnose possible open-oven water loss. No pressure/volume disturbance, catalyst mechanism, Q, ICE, K-expression construction or practical conduct.',
  nextLesson: 'chem-m5-c04: gaseous volume/pressure and catalyst distinctions. C5 constructs equilibrium expressions; C6 calculations; C9 temperature/K data; p01 supervised named investigations remain separate.'};
brief.researchReferences = ['docs/research/hsc-video-production-standard-2026-10-02.md', 'docs/research/library-implementation-plan.md', 'docs/production/teaching-templates.md', 'docs/production/teaching-visual-brief-template.md', 'docs/visual-design-handbook.md', 'docs/animation-planning.md', 'docs/production/preview-first-review.md', 'docs/production/module5-video-route-2026-10-10.json', 'docs/production/course-progression-ledger-2026-10-09.json', 'docs/production/course-content-checklist-2026-10-09.json', 'docs/production/module5-beginner-next-selection-2026-10-10.json'];
brief.teaching = {task: lesson.lessonIntent,
  causalExplanation: 'The controlled transfer directly changes one concentration, then the model rate imbalance changes both forms towards a new limiting state. Fixed temperature retains K. For the separate heat-releasing association, temperature changes K and the preferred equilibrium composition without an imposed concentration jump at fixed volume.',
  conversationalApproach: 'Every accepted beginner spoken paragraph is preserved exactly. First-use terms have plain meanings; observations precede causes and conclusions. No added spoken metadata or unexplained cuts.',
  openingDecision: 'Rhetorical addition question with immediate answer. Existing HookSlide uses meaningful model/transfer comparison cards, preventing its generic atom fallback. Animated A-only jump remains blocked pending the bounded visual board.',
  understandingCheck: 'Two independent experiments with complete prompts and separate fresh prompt/feedback segments. Remove A: immediate concentration, later rate reason/direction and K. Cool written exothermic NO₂/N₂O₄: N₂O₄ and K direction justified by heat release. Each planned response interval is twelve seconds after full prompt, not measured or universal learner timing.',
  curriculumScope: 'Chemistry Stage 6 Syllabus (2017), Year 12 Module 5, chem-m5-c03 at route playlist position 4. Candidate contribution to C-disturbances, C-collision-observations, C-heat and C-temperature-K; official cached paragraph scope retained in preparation. Explanation does not establish investigation/practical conduct, complete action coverage or release.'};
brief.scenes = lesson.scenes.map(scene => {
  const section = sections.find(item => item[1] === scene.id)?.[3] ?? '';
  const decision = section.match(/\*\*Visual decision: ([^*]+)\*\*([\s\S]*?)(?=\*\*(?:Purpose|Teaching purpose|Feedback progression|Response evidence)|$)/)?.[2]?.trim() ?? 'Stable title reading hold.';
  const holds = section.match(/\*\*(?:Purpose and hold|Teaching purpose and hold|Feedback progression and hold):\*\*([\s\S]*?)(?=\*\*|$)/)?.[1]?.trim() ?? 'Stable reading hold; all actual delivery and caption clearance remain pending.';
  const blocked = ['c3-hook','c3-add','c3-remove','c3-principle','c3-temperature','c3-temperature-response'].includes(scene.id);
  return {sceneId: scene.id, visualDecision: scene.type === 'title' || scene.type === 'summary' ? 'reuse' : 'adjust',
    visualReference: scene.type === 'quickCheck' ? 'src/slides/QuickCheckSlide.tsx; src/slides/shared/Module5EvidenceBoard.tsx, focusedContext selected opt-in' : scene.type === 'hook' ? 'src/slides/HookSlide.tsx, supplied comparison cards' : scene.type === 'title' ? 'src/slides/TitleSlide.tsx' : scene.type === 'summary' ? 'src/slides/SummarySlide.tsx' : 'src/slides/ConceptSlide.tsx, full-width text-only board',
    teachingReason: decision + (blocked ? ' Current source provides a concise supported text/card treatment. The accepted staged model/graph/reference treatment remains an explicit integration blocker in visual-implementation-proposal.json, not a claimed completed visual.' : ' Current source uses this existing supported treatment; exact fit and continuous playback are pending.'),
    narrationCue: scene.id === 'c3-title' ? 'Silent title.' : JSON.stringify(trace.find(row => row.sceneId === scene.id)?.cues ?? []) + ' Word-position estimates only. Final cues must use fresh selected alignment.',
    motionPurpose: blocked ? 'Provisional narrated-order text reveals; future isolated board must show the imposed step, later causal progression and relevant reference without decorative motion. No legacy exact-equilibrium marker is selected.' : 'Narrated-order reveals and stable reasoning/response holds. Two separate tasks never share stimuli or feedback.',
    holdPurpose: holds};
});
brief.preparationReview = {status: 'pass', reviewer: 'Sol 6.1 preparation reviewer', evidence: {path: 'docs/production/module5-beginner-next-preparation-review-2026-10-10.md', sha256: 'c939d86f608969eee9ffb67f316f65d675a3274be6ed5704f445d65ca2519429'}, limitation: 'Earlier exact Markdown only. scriptReview below remains pending for this JSON.'};
brief.visualIntegration = {status: 'changes-required', blockedScenes: ['c3-hook','c3-add','c3-remove','c3-principle','c3-temperature','c3-temperature-response'], proposalPath: base + '/visual-implementation-proposal.json'};
brief.limitation = 'Silent selected draft integration only. All words copied exactly, no old audio. Earlier preparation pass does not approve selected JSON. Staged graph/association/reference implementation and independent exact-source/visual review remain pending. Timing estimates are not measured silence, actual cues or human listening. No recording, coverage, full-export or publication approval.';
write('production-brief.json', brief);
console.log(JSON.stringify({sourceHash, scenes: lesson.scenes.length, segments: segments.length, words: segments.reduce((sum, segment) => sum + segment.words, 0)}));
