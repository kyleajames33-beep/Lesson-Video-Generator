import {hash, stringFields} from './science-audit.mjs';
import {correctedDraft, sources} from './science-corrections.mjs';
import {removeSpeechCues} from './quantitative-lessons.mjs';
import {countWords, estimateSpeechSeconds} from '../lesson-utils.mjs';

export const biologySources = Object.fromEntries(Object.entries(sources).filter(([name]) => name.startsWith('biology')));
export const biologyEvidencePins = {
  course: {file: 'out/research/curriculum/biology-2025-course.html', sha256: 'a2e8fa3bf1993b76dabcf1478eda7c37051783326c362262eda7b1c8e265e134'},
  outcomes: {file: 'out/research/curriculum/biology-2025-outcomes.html', sha256: 'f8dcab9ab9a6b4f0e34a9e50532d935e8016acfb63cae5892a041df5783f0b60'},
  cells: {file: 'out/research/curriculum/biology-2025-cells.html', sha256: '436b20d0601f15b8fee03513c29d43ff181b9af94800d0b72a74ee30c1bf9cab'},
};
export const biologyMappings = {
  'biology-y11-m1-l17-enzyme-activity-practical': {register: 'C04', group: 'cg58c49de7', items: ['ci75e851a5'], task: 'enzyme-practical',
    targets: ['BI-11-01', 'BI-11WS-02', 'BI-11WS-03', 'BI-11WS-04', 'BI-11WS-05']},
  'biology-y11-m1-l18-reading-enzyme-graphs': {register: 'C06', group: 'cg58c49de7', items: ['cia9a328b1'], task: 'enzyme-graphs',
    targets: ['BI-11-01', 'BI-11WS-04', 'BI-11WS-05', 'BI-11WS-07']},
  'biology-y11-m1-l20-dna-replication': {register: 'C05', group: 'cged2f04de', items: ['cif2b03f19', 'cicf152a3d'], task: 'dna-model',
    targets: ['BI-11-01', 'BI-11WS-02', 'BI-11WS-03', 'BI-11WS-05', 'BI-11WS-07']},
};
const normalise = (text) => text.replace(/<[^>]*>/gu, '').replace(/&nbsp;|&#160;/gu, ' ').replace(/&amp;/gu, '&')
  .replace(/&quot;/gu, '"').replace(/&#39;/gu, "'").replace(/\s+/gu, ' ').trim();

// Reviewed response bytes are pinned independently of the cache manifest.
export function biologyEvidence(manifest, pageBytes) {
  if (manifest.schemaVersion !== 1 || manifest.sources?.length !== 3 || new Set(manifest.sources.map((item) => item.id)).size !== 3) throw new Error('Invalid Biology evidence manifest');
  const pages = {};
  for (const [id, pin] of Object.entries(biologyEvidencePins)) {
    const source = manifest.sources.find((item) => item.id === id), bytes = pageBytes[id];
    const suffix = {course: 'overview/course', outcomes: 'outcomes', cells: 'content/year-11/fa0edb304c'}[id];
    if (!source || source.file !== pin.file || source.sha256 !== pin.sha256 || !bytes || hash(bytes) !== pin.sha256 ||
      source.url !== `https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/${suffix}`) throw new Error(`Reviewed Biology evidence changed: ${id}`);
    const embedded = bytes.toString('utf8').match(/<script\b[^>]*id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/u)?.[1];
    if (!embedded) throw new Error('Missing official page data');
    pages[id] = JSON.parse(embedded).props.pageProps.data;
  }
  const focus = pages.cells.focusArea;
  if (focus.item.system.codename !== 'fa0edb304c' || !focus.item.elements.stages__stage_years.value.some((year) => year.codename === 'n11')) throw new Error('Unexpected Biology focus area/year');
  const outcomes = Object.values(pages.outcomes.syllabus.linkedItems).filter((item) => item.system.type === 'outcome' &&
    item.system.workflowStep === 'published' && item.elements.stages__stage_years.value.some((year) => year.codename === 'n11'));
  return {focus, outcomes, sources: manifest.sources.map(({id, url, file, sha256}) => ({id, url, file, sha256}))};
}

export function biologyCurriculumProposal(name, source, draft, evidence) {
  const mapping = biologyMappings[name];
  if (!mapping || source.yearLevel !== 'Year 11' || source.syllabusVersion !== 'Biology 11–12 (2025)' ||
      source.syllabusModule !== evidence.focus.item.elements.title.value) throw new Error('Unreviewed Biology edition or focus area');
  const group = evidence.focus.linkedItems[mapping.group];
  if (!evidence.focus.item.elements.contentgroups.value.includes(mapping.group)) throw new Error('Unexpected Biology group');
  const points = mapping.items.map((id) => {
    const item = evidence.focus.linkedItems[id];
    if (!group.elements.content_items.value.includes(id) || item?.system.workflowStep !== 'published') throw new Error('Unpublished Biology content');
    const text = normalise(item.elements.title.value);
    return {id, parentId: mapping.group, text, textSha256: hash(text)};
  });
  if (source.syllabusDotPoints?.length !== points.length || !points.every((item) => source.syllabusDotPoints.some((point) => normalise(point) === item.text))) throw new Error('Selected Biology metadata changed');
  const published = new Map(evidence.outcomes.map((item) => [item.elements.code.value, item]));
  if (!source.nesaOutcomes?.length || !source.nesaOutcomes.every((code) => published.has(code))) throw new Error('Unreviewed Biology outcome code');
  const targets = mapping.targets.map((code) => {
    const item = published.get(code);
    if (!item) throw new Error('Proposed outcome is not a reviewed Year 11 code');
    return {code, description: normalise(item.elements.description.value), status: code === 'BI-11WS-03' ? 'requires actual conducted investigation and records' : 'target for teacher review; achievement not established'};
  });
  return {status: 'selected new-course mapping and learner-task targets; unapplied and not teacher approved',
    edition: source.syllabusVersion, yearLevel: source.yearLevel, focusArea: source.syllabusModule, group: mapping.group,
    groupTitle: group.elements.title.value, points, originalOutcomeCodes: source.nesaOutcomes, targets,
    sources: evidence.sources, metadataPreserved: draft.syllabusVersion === source.syllabusVersion && draft.syllabusModule === source.syllabusModule,
    remainingEvidence: ['teacher science/curriculum review', 'independent learner responses',
      ...(mapping.task !== 'enzyme-graphs' ? ['actual supervised investigation and primary records'] : [])],
    scope: mapping.task === 'enzyme-practical' ? 'Temperature planning and synthetic data are scaffolding. The named content also requires pH and substrate-concentration experiments with the selected enzyme.' :
      mapping.task === 'dna-model' ? 'The learner must build, operate and assess a model with the named enzyme roles. Watching an animation does not establish conducting the practical.' :
        'Independent analysis of all three factor graphs supports the content. Generic curve shapes do not uniquely identify molecular mechanisms.'};
}

export function biologyDraft(name, bytes) {
  if (!Object.hasOwn(biologySources, name)) throw new Error('Unsupported Biology lesson');
  const original = JSON.parse(bytes), draft = removeSpeechCues(correctedDraft(name, bytes).draft);
  delete draft.productionNotes;
  const scene = (id) => {const found = draft.scenes.find((item) => item.id === id); if (!found) throw new Error(`Missing Biology scene: ${id}`); return found;};
  const copy = (id, fields, text) => {Object.assign(scene(id), fields); if (text !== undefined) scene(id).voiceover = {text};};
  copy('title', {caption: draft.title}, `${draft.title}. Year eleven Biology, Cells as the basis of life.`);
  let response;
  if (name.includes('activity-practical')) {
    draft.subtitle = 'Plan a defined catalase assay and judge the evidence';
    draft.lessonIntent = 'Students plan a controlled assay, calculate an interval-average oxygen rate and separate repeat variation, systematic error and control-based inference.';
    const fair = scene('concept-fair-test');
    fair.diagram.props.title = '2H₂O₂ → 2H₂O + O₂ (catalase catalyst)';
    fair.diagram.props.chips[1].text = 'DV: collected O₂ volume ÷ interval';
    fair.diagram.props.chips[2].text = 'Same preparation, H₂O₂, pH and collection conditions';
    fair.body = 'Catalase catalyses peroxide decomposition. Estimate average oxygen rate over a stated interval.';
    fair.voiceover.text += ' Catalase is the catalyst, not a consumed reactant in the net equation. Compare collected gas volumes at common recorded temperature and pressure, or apply a justified correction. The bubbles and foam in this illustration are not a calibrated gas-volume measurement.';
    const reliable = scene('concept-reliability');
    reliable.diagram.props.title = 'Illustrative matched assays after treatment';
    reliable.diagram.props.tubes = [
      {label: 'untreated A', sub: 'illustrative activity', rate: .85, bath: 'warm'},
      {label: 'untreated B', sub: 'illustrative activity', rate: .80, bath: 'warm'},
      {label: 'heated/cooled', sub: 'same assay temperature', rate: .08, bath: 'warm', amber: true},
      {label: 'no enzyme', sub: 'background check', rate: .03, bath: 'warm'},
    ];
    reliable.diagram.props.rule.text = 'Same assay conditions; treatment and blank answer different questions';
    reliable.voiceover.text += ' The comparison shown now has untreated preparations, a heat-treated and cooled preparation, and a no-enzyme blank, all at the same assay temperature. The illustrated bubble levels are synthetic, not collected data. A heated sample still in a hotter bath would confound treatment history with assay temperature.';
    copy('misconception', {heading: 'Repeats cannot repair a confounded design',
      body: 'Changing temperature and enzyme amount together confounds their effects.',
      secondary: 'Repeats estimate variation; a shared leak or calibration bias can remain.', callout: 'Control the comparison, then assess mean, spread and bias.',
      caption: 'Separate confounding, repeat variation and systematic error.'});
    scene('worked-example').question = 'Plan a teacher-reviewed temperature investigation with one standardised catalase preparation. Explain the rate measurement, matched controls and uncertainty checks.';
    scene('worked-example').steps.push('Collect a temperature-time record; compare gas volumes at common conditions or justify correction. Average over 60 s is not automatically the initial rate.');
    scene('worked-example').voiceover.text += ' Record temperature and time as well as volume. A sixty-second quotient is an interval average, not automatically the initial rate. Use time-resolved data and a suitable early near-linear region if initial rate is the objective.';
    response = {promptText: 'In a catalase temperature test, how would you measure an average oxygen-production rate? Explain why a heated sample should be cooled to the same assay temperature as an untreated control, and name two variables to hold constant. Pause and write your reasoning.',
      answerText: 'Divide collected oxygen volume by the stated collection interval, comparing gas at common conditions. Cooling both preparations to the same assay temperature separates treatment history from the temperature during measurement. Keep the enzyme preparation and peroxide concentration and volume consistent, along with pH, mixing and collection. A no-enzyme blank checks background production. These controls support an explanation; they do not uniquely prove denaturation.', minimumThinkingSeconds: 60};
    copy('quick-check', {question: 'How would you measure average oxygen rate? Why cool a heated sample to the untreated assay temperature? Name two controlled variables.',
      answerSteps: ['Average collected O₂ rate = volume ÷ stated interval, at comparable gas conditions.', 'Matched assay temperature separates treatment history from measurement temperature.', 'Control preparation, peroxide concentration/volume, pH, mixing and collection.', 'A blank checks background; controls support but do not uniquely prove a structural explanation.'],
      pausePrompt: 'Pause and record the measurement, comparison and controls.', caption: 'A defined rate and matched comparison support a bounded inference.'});
  } else if (name.includes('reading-enzyme-graphs')) {
    draft.subtitle = 'Read the data, propose a mechanism and test its limits';
    draft.lessonIntent = 'Students describe three defined enzyme-assay graphs, separate observations from mechanisms and propose controlled follow-up evidence.';
    const substrate = scene('concept-substrate');
    substrate.diagram.props.notes[1].text = 'approaches a limit';
    copy('misconception', {body: 'A plateau is an observation. Saturation explains this simple model; other assay limits can also flatten data.',
      secondary: 'A pH-related fall can reflect altered ionisation or catalysis; it does not by itself demonstrate unfolding.',
      callout: 'Name the observation, hypothesis and discriminating test separately.', caption: 'Curve shape alone does not identify a unique molecular cause.'});
    copy('worked-example', {coachNote: 'Describe the defined curve, give a plausible explanation, then test recovery under matched assay conditions.'});
    response = {promptText: 'For the labelled temperature, pH and substrate models, explain the peak and fall, the pH-dependent peak, and the approach to a plateau. State one inference that the curves alone cannot support. Pause and write an observation separately from its explanation.',
      answerText: 'Temperature can increase catalytic rate, while sufficiently high heat can reduce active enzyme. pH can affect ionisation and catalysis, with denaturation possible at extremes. A simple fixed-enzyme substrate model approaches a limiting rate as substrate increases. The shapes alone do not uniquely identify a molecular mechanism, prove permanent damage or show that every active site is occupied at every instant. Assay conditions and controlled follow-up evidence are needed.', minimumThinkingSeconds: 60};
    copy('quick-check', {question: 'For the labelled temperature, pH and substrate models, explain each trend. Name a conclusion that the shapes alone cannot establish.',
      pausePrompt: 'Pause: distinguish a measured trend from a proposed explanation.',
      caption: 'Use the defined assay context and bound each molecular inference.'});
    scene('summary').finalPrompt = 'Describe the data, state a scoped mechanism and choose a useful test.';
  } else {
    draft.subtitle = 'Strand inheritance, synthesis direction and model limits';
    draft.lessonIntent = 'Students construct and assess a replication model, explain both strands growing 5′ to 3′, distinguish primer processing from nick sealing and separate strand inheritance from fidelity.';
    copy('hook', {heading: 'A template guides a new partner', callout: 'How does templating differ from error control?', caption: 'Complementary templates guide copying; additional processes support fidelity.'});
    copy('concept-unzip', {callout: 'One original and one new strand describes inheritance, not an error-free guarantee.'});
    const model = scene('concept-models');
    model.body = 'Judge the represented features of the strand-inheritance model and the simplified fork separately.';
    model.bullets = [{text: 'Strand-inheritance model: old/new composition and complementary bases.'},
      {text: 'Fork model: labelled directions, primers, extension and schematic nick sealing.'},
      {text: 'Neither models molecular scale, kinetic fidelity, proofreading or mismatch repair.'}];
    model.diagram.props.title.text = 'strand-inheritance and simplified fork models';
    model.diagram.props.right.cards[2].text = 'omits detailed processing chemistry, proofreading and repair';
    model.voiceover.text = 'Judge the actual features in each model. The strand-inheritance animation shows complementary partners and one original plus one new strand; it does not show fork enzyme actions. The simplified fork shows labelled leading and lagging synthesis, RNA primers, schematic replacement and sealing. It leaves out detailed processing chemistry, proofreading and mismatch repair. A learner-built model can add labelled enzyme-role cards, but moving a card is not a chemical reaction. Name what it represents, what it omits and why that matters for the chosen question. Hands-on construction creates an opportunity to reason; it does not by itself prove better memory or understanding.';
    copy('misconception', {body: 'Semi-conservative means one original and one new strand per completed molecule.',
      secondary: 'Templating, polymerase selectivity, proofreading and mismatch repair support fidelity. Errors can remain.',
      mistakeTag: 'Strand composition is not fidelity', caption: 'Helicase separates strands; polymerase builds; error control is additional.'});
    response = {promptText: 'Each completed DNA molecule contains one original strand. Name this composition, explain how the template guides a new partner, and name additional processes that support fidelity. Does this guarantee no errors? Pause and answer each part separately.',
      answerText: 'It is semi-conservative replication: one original and one new strand. The original strand guides complementary base choice, A with T and C with G. Polymerase selectivity, proofreading and mismatch repair also support high fidelity, but errors can remain. Both new strands grow five-prime to three-prime. Strand composition and accurate copying answer different questions.', minimumThinkingSeconds: 60};
    copy('quick-check', {pausePrompt: 'Pause: separate inheritance, complementary templating and error control.', caption: 'Semi-conservative composition does not guarantee an error-free copy.'});
  }
  scene('quick-check').voiceover = {text: `${response.promptText} ${response.answerText}`};
  const pacing = draft.scenes.map((item) => {
    if (!item.voiceover?.text) throw new Error(`Unreviewed Biology narration: ${item.id}`);
    const prior = original.scenes.find((entry) => entry.id === item.id), hold = item.id === 'quick-check' ? response : null;
    const speech = estimateSpeechSeconds(item.voiceover.text, 145), reading = ['workedExample', 'quickCheck'].includes(item.type) ? 8 : 5;
    item.durationInFrames = Math.ceil(Math.max(prior.durationInFrames / draft.fps, speech / .92 + reading + (hold?.minimumThinkingSeconds ?? 0)) * draft.fps);
    return {scene: item.id, inheritedFrames: prior.durationInFrames, proposedFrames: item.durationInFrames,
      wordCount: countWords(item.voiceover.text), speechEstimateSeconds: Number(speech.toFixed(2)), wordsPerMinute: 145,
      finalReadingSeconds: reading, response: hold, status: 'source planning estimate; not measured or learner validated',
      reuse: {sceneType: item.type, image: item.image ?? null, diagram: item.diagram?.kind ?? item.diagram?.type ?? null},
      motion: item.diagram?.kind === 'bio12m5Fork' ? 'Retain fork directions and primer-before-extension/processing-before-sealing order. Align the actual model beats after approved speech.' :
        item.diagram?.kind === 'bio11m1bPractical' ? 'Keep matched conditions and synthetic bubble scope visible. Bubbles illustrate a rate; use recorded gas-volume data to measure it.' :
          item.diagram?.kind === 'bio11m1bEnzymeGraph' ? 'Keep assay context and illustrative scope visible. A cursor highlights a rate without proving structural damage.' :
            'Keep labels stable, highlight the named relationship and allow deliberate reading/thinking holds. Set final cues after new alignment.'};
  });
  if (JSON.stringify(draft).includes('\u2014')) throw new Error('Prohibited punctuation in Biology proposal');
  const before = new Map(stringFields(original).map(({field, text}) => [field, text]));
  const changes = stringFields(draft).filter(({field, text}) => before.get(field) !== text).map(({field, text}) => ({field, before: before.get(field) ?? null, after: text}));
  return {draft, changes, pacing, sourceSha256: hash(bytes), mapping: biologyMappings[name]};
}
