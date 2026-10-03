import {readFile, mkdir, writeFile} from 'node:fs/promises';
import {hash} from './lib/science-audit.mjs';
import {quantitativeSources} from './lib/quantitative-corrections.mjs';
import {chemistryCurriculumReview, chemistrySyllabusSha256, chemistryReviewedSourceHashes} from './lib/chemistry-curriculum.mjs';

// Offline audit of a reviewed edition and selected immutable source/draft bytes.
const cache = 'out/research/curriculum', output = 'out/review/curriculum';
const manifestBytes = await readFile(`${cache}/chemistry-sources.json`), manifest = JSON.parse(manifestBytes);
const expected = new Map([
  ['course', 'chemistry-2017-course.html'], ['changes', 'chemistry-2017-changes.html'],
  ['transition', 'chemistry-2025-course.html'], ['syllabus', 'chemistry-2017-syllabus.docx'],
]);
if (manifest.schemaVersion !== 1 || manifest.sources?.length !== 4 || new Set(manifest.sources.map((source) => source.id)).size !== 4) throw new Error('Invalid Chemistry source manifest');
for (const source of manifest.sources) {
  if (source.file !== `${cache}/${expected.get(source.id)}` || !['www.nsw.gov.au', 'curriculum.nsw.edu.au'].includes(new URL(source.url).hostname)) throw new Error('Unexpected official Chemistry source path or host');
  const bytes = await readFile(source.file);
  if (hash(bytes) !== source.sha256 || bytes.length !== source.bytes || source.sha256 !== chemistryReviewedSourceHashes[source.id]) throw new Error('Cached official source changed or requires a new review');
}
if (manifest.sources.find((source) => source.id === 'syllabus').sha256 !== chemistrySyllabusSha256) throw new Error('Refresh requires a new edition review');
if (manifest.extraction?.file !== `${cache}/chemistry-2017-paragraphs.json`) throw new Error('Unexpected extraction path');
const extraction = await readFile(manifest.extraction.file);
if (hash(extraction) !== manifest.extraction.sha256 || hash(await readFile('scripts/extract-nesa-docx.py')) !== manifest.extraction.scriptSha256) throw new Error('Extraction or extractor changed; regenerate and review');
const fullSyllabus = JSON.parse(extraction);
const fixture = JSON.parse(await readFile('scripts/fixtures/chemistry-curriculum-2017.json'));
if (fixture.sourceSha256 !== fullSyllabus.sourceSha256 || fixture.paragraphs.some((paragraph) =>
  JSON.stringify(paragraph) !== JSON.stringify(fullSyllabus.paragraphs.find((item) => item.id === paragraph.id)))) throw new Error('Offline test fixture differs from official extraction');
const packageManifest = JSON.parse(await readFile('out/review/quantitative-lessons/manifest.json'));
const sourceBytes = {}, draftBytes = {};
for (const name of Object.keys(quantitativeSources)) {
  sourceBytes[name] = await readFile(`src/data/${name}.json`);
  const entry = packageManifest.lessons.find((lesson) => lesson.name === name);
  const artifact = entry?.exports.find((file) => file.role === 'unvoiced-lesson-draft');
  if (!artifact || artifact.file !== `${name}.json`) throw new Error('Missing selected unvoiced draft');
  draftBytes[name] = await readFile(`out/review/quantitative-lessons/${artifact.file}`);
  if (hash(draftBytes[name]) !== artifact.sha256) throw new Error('Selected draft changed');
}
const lessons = chemistryCurriculumReview({syllabus: fullSyllabus, sourceBytes, draftBytes});
for (const lesson of lessons) lesson.learnerTaskSha256 = hash(await readFile(lesson.learnerTask));
const report = {schemaVersion: 1, reviewedOn: '2026-10-03', sourceManifestSha256: hash(manifestBytes), officialSources: manifest.sources,
  extraction: manifest.extraction, lessons,
  cohortInterpretation: {basis: 'Manual review of the cached official legacy and new-course guidance',
    newYear11Start: '2028 Term 1', newYear12Start: '2028 Term 4', firstNewHsc: 2029,
    note: 'Retain the 2017 edition for its cohorts. No automatic 2025 syllabus conversion is proposed.'},
  courseRequirements: {depthStudyHoursEachYear: 15, minimumPracticalHoursEachYear: 35, references: ['p315', 'p317', 'p362', 'p364'],
    note: 'Course requirements, not requirements assigned to each video. Written practice and watching demonstrations do not establish practical completion.'},
  status: 'audit prepared; metadata proposals unapplied; teaching review pending',
  limitation: 'Six selected lessons only. Source matches do not establish complete curriculum coverage, practical completion, achieved outcomes, formal assessment compliance or release approval.'};
await mkdir(output, {recursive: true});
await writeFile(`${output}/selected-chemistry.json`, JSON.stringify(report, null, 2).replaceAll('\u2014', '\\u2014') + '\n');
await writeFile(`${output}/chemistry-queue.md`, ['# Selected Chemistry curriculum and delivery review', '', report.limitation, '',
  '| Lesson | Curriculum disposition | Remaining delivery |', '| --- | --- | --- |',
  ...lessons.map((lesson) => `| ${lesson.name} | ${lesson.scope} ${lesson.finding} | ${lesson.missingDelivery} |`), '',
  'Metadata proposals are pinned to original and unvoiced-draft hashes in selected-chemistry.json. None were applied to production sources or drafts.', '',
  'The accompanying learner tasks are formative drafts with separate teacher keys. Their synthetic data are not learner investigation results. All approvals and learner evidence remain pending.', ''].join('\n'));
console.log(JSON.stringify({lessons: lessons.length, storedPoints: lessons.reduce((sum, lesson) => sum + lesson.storedPointComparisons.length, 0),
  exactStoredPoints: lessons.flatMap((lesson) => lesson.storedPointComparisons).filter((point) => point.exactPublishedWording).length,
  missingOutcomeLists: lessons.filter((lesson) => !lesson.outcomes.length).length, status: report.status}));
