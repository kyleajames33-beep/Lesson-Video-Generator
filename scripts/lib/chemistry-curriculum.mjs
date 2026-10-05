import {hash} from './science-audit.mjs';
import {quantitativeSources} from './quantitative-corrections.mjs';

export const chemistrySyllabusSha256 = '7c75fc806d4d8154499b0c596eda048ce4367547922bbd4058da075d9c319d42';
export const chemistryReviewedSourceHashes = {
  course: 'd47e4087b6378bed31fdbe6dfdcce2947a355b4fab1249e43281c95a84da0766',
  changes: '315b7c63fca76b75572b8c82bc3f64299a5ef282921a8ef36878873f9c322558',
  transition: '067757b528699acdc3345eda73ffb76e06bb5a7655cf813de99ad846da4b9217',
  syllabus: chemistrySyllabusSha256,
};
export const chemistrySelections = [
  {suffix: 'empirical-molecular-formulas', primary: ['p784', 'p786'], inquiry: 'p777',
    scope: 'Explicit Module 2 empirical-formula/composition content; molecular-formula inference is a related extension.',
    proposedOutcomes: ['CH11-9', 'CH11/12-4', 'CH11/12-6'], task: 'empirical-formulas',
    finding: 'Both stored points paraphrase or reorder published content. Keep the parent mole point and its empirical-formula child identifiable. Molecular formula is not explicitly named in that child.',
    missingDelivery: 'An independent ratio decision, molecular multiplier, precision justification and limits on compound identification.'},
  {suffix: 'gravimetric-analysis', primary: ['p792', 'p793'], inquiry: 'p789', cross: ['p1291', 'p1292'],
    scope: 'Year 11 quantitative-method extension. Explicit gravimetric content belongs to Year 12 Module 8; this is not a Module 2 gravimetry requirement.',
    proposedOutcomes: ['CH11-9', 'CH11/12-4', 'CH11/12-6'], task: 'gravimetry',
    finding: 'The stored gravimetric point is not a published Module 2 point. Preserve the Year 11 identity and label the extension; a Year 12 edition would need a separate teaching brief and CH12-15 mapping.',
    missingDelivery: 'Independent concentration inference and recovery/purity evaluation. Actual practical data collection is absent; Module 8 permits investigations and/or data processing.'},
  {suffix: 'calorimetry-combustion', primary: ['p888', 'p889', 'p891'], inquiry: 'p885',
    scope: 'Explicit Module 4 combustion temperature investigation and calorimetry analysis.',
    proposedOutcomes: ['CH11-11', 'CH11/12-5', 'CH11/12-6'], task: 'combustion',
    finding: 'Stored points are teacher summaries, not exact published points. Outcome codes and the linked inquiry question are absent.',
    missingDelivery: 'Supervised measurement, independent heat/fuel calculation, reliable reference comparison and evidence-based explanation of discrepancies.'},
  {suffix: 'calorimetry-neutralisation', primary: ['p891'], inquiry: 'p885', cross: ['p1125'],
    scope: 'Module 4 calorimetry application. The specifically named neutralisation practical is a Year 12 Module 6 cross-reference.',
    proposedOutcomes: ['CH11-11', 'CH11/12-5', 'CH11/12-6'], task: 'neutralisation',
    finding: 'Stored points are teacher summaries. Do not present the Year 12 named neutralisation practical as a verbatim Year 11 point. Outcome codes and inquiry question are absent.',
    missingDelivery: 'Balanced water stoichiometry, limiting-reagent reasoning, heat-model evaluation, supervised measurements and matched reference comparison.'},
  {suffix: 'calorimetry-dissolution', primary: ['p888', 'p890', 'p891'], inquiry: 'p885',
    scope: 'Explicit Module 4 ionic-dissociation temperature investigation and calorimetry analysis.',
    proposedOutcomes: ['CH11-11', 'CH11/12-5', 'CH11/12-6'], task: 'dissolution',
    finding: 'Stored points are teacher summaries; the official term is dissociation of ionic substances in aqueous solution. Outcome codes and inquiry question are absent.',
    missingDelivery: 'Supervised temperature measurements, signed heat inference, solution-mass justification and reference comparison at appropriate conditions.'},
  {suffix: 'back-conductometric-titration', primary: ['p1146', 'p1147', 'p1148'], inquiry: 'p1143',
    scope: 'Explicit Module 6 titration/conductivity analysis. Back titration is an application of titration, not a separately named content point.',
    proposedOutcomes: ['CH12-13', 'CH11/12-4', 'CH11/12-5', 'CH11/12-6'], task: 'titration',
    finding: 'The stored titration point matches published wording, but the conductivity parent and strong-acid/strong-base child are omitted. All existing codes exist; investigation outcomes require learner investigation evidence.',
    missingDelivery: 'Independent aliquot scaling and acid accounting, analysis of conductivity data, endpoint qualification and supervised primary-data collection.'},
];
const normalise = (text) => text.replace(/[’‘]/gu, "'").replace(/\s+/gu, ' ').trim();
export function chemistryCurriculumReview({syllabus, sourceBytes, draftBytes}) {
  if (syllabus.schemaVersion !== 1 || syllabus.sourceSha256 !== chemistrySyllabusSha256 || !Array.isArray(syllabus.paragraphs)) throw new Error('Unreviewed Chemistry syllabus edition');
  const paragraphs = new Map();
  let module = null, topic = null;
  for (const paragraph of syllabus.paragraphs) {
    if (paragraphs.has(paragraph.id)) throw new Error('Duplicate syllabus paragraph identifier');
    if (paragraph.style === 'Heading2' && /^Module \d:/u.test(paragraph.text)) module = paragraph.text.trim();
    if (paragraph.style === 'Heading4') topic = paragraph.text.trim();
    paragraphs.set(paragraph.id, {...paragraph, module, topic});
  }
  const point = (id) => {
    const paragraph = paragraphs.get(id);
    if (!paragraph) throw new Error(`Missing reviewed syllabus paragraph ${id}`);
    const parentId = {p786: 'p784', p889: 'p888', p890: 'p888', p1292: 'p1291', p1148: 'p1147'}[id] ?? null;
    return {id, parentId, module: paragraph.module, topic: paragraph.topic, text: paragraph.text.trim(), textSha256: hash(paragraph.text.trim())};
  };
  const codes = new Set(syllabus.paragraphs.flatMap((paragraph) => paragraph.text.match(/CH(?:11\/12|11|12)-\d+\b/gu) ?? []));
  return chemistrySelections.map((selection) => {
    const name = Object.keys(quantitativeSources).find((name) => name.endsWith(selection.suffix));
    const bytes = sourceBytes[name], draft = draftBytes[name];
    if (!bytes || hash(bytes) !== quantitativeSources[name] || !draft) throw new Error(`Changed or missing selected source: ${name}`);
    const lesson = JSON.parse(bytes), primary = selection.primary.map(point), cross = (selection.cross ?? []).map(point), inquiry = point(selection.inquiry);
    if (lesson.syllabusVersion !== 'Chemistry Stage 6 Syllabus (2017)' || primary.some((item) => item.module !== lesson.syllabusModule)) throw new Error('Unexpected lesson edition or module');
    const outcomes = (lesson.nesaOutcomes ?? []).map((code) => ({code, existsInEdition: codes.has(code), deliveryVerified: false}));
    if (selection.proposedOutcomes.some((code) => !codes.has(code))) throw new Error('Proposed outcome is not in the reviewed edition');
    return {name, source: `src/data/${name}.json`, sourceSha256: hash(bytes), draftSha256: hash(draft),
      publishedContent: primary, crossReferences: cross, scope: selection.scope,
      storedPointComparisons: (lesson.syllabusDotPoints ?? []).map((text) => ({text, exactPublishedWording: syllabus.paragraphs.some((paragraph) => normalise(paragraph.text) === normalise(text))})),
      outcomes, finding: selection.finding, missingDelivery: selection.missingDelivery,
      metadataProposal: {status: 'unapplied; teacher review required', sourceSha256: hash(bytes), draftSha256: hash(draft),
        syllabusVersion: lesson.syllabusVersion, syllabusModule: lesson.syllabusModule, yearLevel: lesson.yearLevel,
        inquiryQuestion: inquiry.text.replace(/^Inquiry question:\s*/u, ''),
        syllabusDotPoints: primary.map((item) => item.text), nesaOutcomes: selection.proposedOutcomes,
        scopeNotes: selection.scope, note: 'Hierarchical parent/child content references are retained above. Target codes describe proposed learner evidence, not achieved outcomes. Investigation codes may be added when a teacher supplies and reviews an actual investigation.'},
      learnerTask: `docs/production/quantitative-learner-tasks/${selection.task}.md`,
      approval: {curriculum: 'pending', science: 'pending', practicalDelivery: 'pending', learnerEvidence: 'pending', formalAssessmentSuitability: 'not assessed'}};
  });
}
