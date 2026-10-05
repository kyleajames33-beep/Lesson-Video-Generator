import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {chemistryCurriculumReview} from './lib/chemistry-curriculum.mjs';
import {quantitativeSources} from './lib/quantitative-corrections.mjs';
import {integratedQuantitativeDraft} from './lib/quantitative-lessons.mjs';

const syllabus = JSON.parse(await readFile(new URL('./fixtures/chemistry-curriculum-2017.json', import.meta.url)));
const sourceBytes = {}, draftBytes = {};
for (const name of Object.keys(quantitativeSources)) {
  sourceBytes[name] = await readFile(`src/data/${name}.json`);
  draftBytes[name] = Buffer.from(JSON.stringify(integratedQuantitativeDraft(name, sourceBytes[name]).draft));
}
const run = (overrides = {}) => chemistryCurriculumReview({syllabus, sourceBytes, draftBytes, ...overrides});
test('curriculum audit preserves extension boundaries and does not infer delivery approval', () => {
  const lessons = run(), gravimetry = lessons.find((lesson) => lesson.name.endsWith('gravimetric-analysis'));
  assert.equal(gravimetry.metadataProposal.yearLevel, 'Year 11');
  assert.ok(gravimetry.crossReferences.some((point) => point.module === 'Module 8: Applying Chemical Ideas' && point.text === 'gravimetric analysis'));
  assert.ok(!gravimetry.publishedContent.some((point) => /gravimetric/iu.test(point.text)));
  const neutralisation = lessons.find((lesson) => lesson.name.endsWith('calorimetry-neutralisation'));
  assert.ok(neutralisation.crossReferences.some((point) => point.module === 'Module 6: Acid/Base Reactions'));
  assert.equal(lessons.filter((lesson) => !lesson.outcomes.length).length, 3);
  for (const lesson of lessons) {
    assert.equal(lesson.approval.learnerEvidence, 'pending');
    assert.equal(lesson.approval.practicalDelivery, 'pending');
    assert.equal(lesson.metadataProposal.status, 'unapplied; teacher review required');
    assert.ok(lesson.outcomes.every((outcome) => outcome.existsInEdition && !outcome.deliveryVerified));
  }
});
test('unreviewed editions, duplicated evidence identifiers and edited lesson sources are refused', () => {
  assert.throws(() => run({syllabus: {...syllabus, sourceSha256: '0'.repeat(64)}}), /edition/u);
  assert.throws(() => run({syllabus: {...syllabus, paragraphs: [...syllabus.paragraphs, syllabus.paragraphs[0]]}}), /Duplicate/u);
  const name = Object.keys(sourceBytes)[0];
  assert.throws(() => run({sourceBytes: {...sourceBytes, [name]: Buffer.concat([sourceBytes[name], Buffer.from(' ')])}}), /Changed/u);
});
test('published wording comparison retains nested content and extracted heat formula', () => {
  const lessons = run(), titration = lessons.find((lesson) => lesson.name.endsWith('back-conductometric-titration'));
  assert.equal(titration.storedPointComparisons[0].exactPublishedWording, true);
  assert.ok(titration.publishedContent.some((point) => point.id === 'p1147'));
  const combustion = lessons.find((lesson) => lesson.name.endsWith('calorimetry-combustion'));
  assert.ok(combustion.publishedContent.find((point) => point.id === 'p891').text.includes('q = mcΔT'));
  assert.ok(combustion.storedPointComparisons.every((point) => !point.exactPublishedWording));
});
