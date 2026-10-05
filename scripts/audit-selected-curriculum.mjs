import {readFile, mkdir, writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';

// Exact selected metadata comparison against hashed public NESA page data.
// Does not certify lesson science, learner achievement or legacy crossover.
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex');
const normalise = (text) => text.replace(/<[^>]*>/gu, '').replace(/&nbsp;|&#160;/gu, ' ')
  .replace(/&amp;/gu, '&').replace(/&quot;/gu, '"').replace(/&#39;/gu, "'").replace(/\s+/gu, ' ').trim();
const root = process.cwd();
const localPath = (file) => {
  const resolved = path.resolve(root, file), relative = path.relative(root, resolved);
  if (!relative || relative.startsWith('..') || path.isAbsolute(relative)) throw new Error('Source path must stay in the workspace');
  return resolved;
};
const manifest = JSON.parse(await readFile('out/research/curriculum/sources.json', 'utf8'));
if (manifest.schemaVersion !== 1) throw new Error('Unsupported curriculum source manifest');
const pages = new Map();
for (const id of ['course', 'outcomes', 'cells']) {
  const source = manifest.sources.find((source) => source.id === id);
  if (!source || !source.url.startsWith('https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/')) throw new Error(`Missing official source: ${id}`);
  const bytes = await readFile(localPath(source.file));
  if (sha256(bytes) !== source.sha256) throw new Error(`Curriculum source changed: ${source.file}. Refresh and review it.`);
  const embedded = bytes.toString('utf8').match(/<script\b[^>]*id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/u)?.[1];
  if (!embedded) throw new Error(`Missing page data: ${id}`);
  pages.set(id, JSON.parse(embedded).props.pageProps.data);
}
const focus = pages.get('cells').focusArea;
if (focus.item.system.codename !== 'fa0edb304c' || !focus.item.elements.stages__stage_years.value.some((year) => year.codename === 'n11')) throw new Error('Unexpected focus area or year');
const officialOutcomes = new Map(Object.values(pages.get('outcomes').syllabus.linkedItems)
  .filter((item) => item.system.type === 'outcome' && item.system.workflowStep === 'published')
  .map((item) => [item.elements.code.value, item]));
const selected = [
  {file: 'biology-y11-m1-l17-enzyme-activity-practical.json', group: 'cg58c49de7', items: ['ci75e851a5'],
    coverage: 'Planning support is present. A learner must still conduct supervised experiments and collect data to establish practical coverage and BI-11WS-03. The video does not establish completion.',
    followUp: 'A teacher-reviewed laboratory plan, results table and evaluation across the three specified factors. C04 science corrections remain open.'},
  {file: 'biology-y11-m1-l18-reading-enzyme-graphs.json', group: 'cg58c49de7', items: ['cia9a328b1'],
    coverage: 'Worked explanations and a question support graph analysis. Learner analysis of graphs with defined assay conditions is still required; scientific qualifications in C06 remain open.',
    followUp: 'An independent graph task with axes, assay conditions, regions, uncertainty and justified molecular explanations. Do not infer unfolding or an optimum solely from a generic illustration.'},
  {file: 'biology-y11-m1-l20-dna-replication.json', group: 'cged2f04de', items: ['cif2b03f19', 'cicf152a3d'],
    coverage: 'The lesson discusses model strengths and limitations and suggests physical materials. It does not provide a complete learner investigation procedure or evidence of conducting one.',
    followUp: 'A learner-built fork with strand polarity, complementary pairing and enzyme roles, plus a justified evaluation of model strengths and omissions. C05 fidelity and model/media review remain open.'},
];
const lessons = [];
for (const selectedLesson of selected) {
  const source = `src/data/${selectedLesson.file}`, bytes = await readFile(source), lesson = JSON.parse(bytes);
  const group = focus.linkedItems[selectedLesson.group];
  if (!focus.item.elements.contentgroups.value.includes(selectedLesson.group)) throw new Error('Group is not part of the selected focus area');
  const points = selectedLesson.items.map((id) => {
    if (!group.elements.content_items.value.includes(id)) throw new Error(`Content item is not in the selected group: ${id}`);
    const item = focus.linkedItems[id];
    if (!item || item.system.workflowStep !== 'published') throw new Error(`Unpublished or missing content item: ${id}`);
    const text = normalise(item.elements.title.value);
    return {item: id, officialTextSha256: sha256(text), sourceMetadataMatch: lesson.syllabusDotPoints?.some((point) => normalise(point) === text) === true};
  });
  const outcomes = (lesson.nesaOutcomes ?? []).map((code) => ({code, publishedYear11Code: officialOutcomes.get(code)?.elements.stages__stage_years.value.some((year) => year.codename === 'n11') === true}));
  const metadataMatches = lesson.yearLevel === 'Year 11' && lesson.syllabusVersion === 'Biology 11–12 (2025)'
    && lesson.syllabusModule === focus.item.elements.title.value
    && points.length === lesson.syllabusDotPoints?.length && points.every((point) => point.sourceMetadataMatch)
    && outcomes.length > 0 && outcomes.every((outcome) => outcome.publishedYear11Code);
  lessons.push({source, sourceSha256: sha256(bytes), focusArea: focus.item.system.codename, group: selectedLesson.group,
    groupTitle: group.elements.title.value, points, outcomes, metadataMatches, coverage: selectedLesson.coverage,
    followUp: selectedLesson.followUp, status: metadataMatches ? 'selected-new-course-metadata-matches; delivery-review-open' : 'metadata-review-required'});
}
const report = {schemaVersion: 1, sourceManifestSha256: sha256(await readFile('out/research/curriculum/sources.json')),
  officialSources: manifest.sources, cohortInterpretation: {reviewedOn: '2026-10-03', year11Start: '2027 Term 1', year12Start: '2027 Term 4', firstHsc: 2028,
    note: 'Manually checked against official implementation advice. Year 12 continues the 2017 syllabus during 2027 before the new course starts in Term 4. Legacy crossover is outside this audit.'},
  lessons, limitation: 'Only three selected source lessons. Published outcome-code existence and dot-point matches do not prove scientific correctness, activity completion, assessment suitability or syllabus coverage. No teacher approval or media review is recorded.'};
const output = 'out/review/curriculum';
await mkdir(output, {recursive: true});
await writeFile(`${output}/selected-biology.json`, JSON.stringify(report, null, 2).replaceAll('\u2014', '\\u2014') + '\n');
await writeFile(`${output}/queue.md`, ['# Selected Biology curriculum review', '', report.limitation, '',
  '| Source | New-course metadata matches? | Remaining delivery review |', '| --- | --- | --- |',
  ...lessons.map((lesson) => `| ${lesson.source} | ${lesson.metadataMatches} | ${lesson.coverage} |`), '',
  'Source files, cached official responses and their hashes are recorded in selected-biology.json. No lesson source, narration or registration was changed.', ''].join('\n'));
console.log(JSON.stringify({lessons: lessons.length, metadataMatches: lessons.filter((lesson) => lesson.metadataMatches).length, output}, null, 2));
if (lessons.some((lesson) => !lesson.metadataMatches)) process.exitCode = 1;
