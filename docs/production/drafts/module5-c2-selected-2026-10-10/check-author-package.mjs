import assert from 'node:assert/strict';
import {readFileSync, writeFileSync, mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {buildSync} from 'esbuild';
import {createRequire} from 'node:module';
import {checkProductionBrief} from '../../../../scripts/lib/production-brief.mjs';
import {answerTiming} from '../../../../src/lesson/answer-timing.mjs';
import {lessonTimeline} from '../../../../src/lesson/timeline.mjs';
const selected = 'docs/production/drafts/module5-c2-selected-2026-10-10';
const out = 'out/prototypes/module5-c2-selected-2026-10-10';
mkdirSync(out, {recursive: true});
const hash = b => createHash('sha256').update(b).digest('hex');
const lessonBytes = readFileSync(selected + '/lesson.json');
const lesson = JSON.parse(lessonBytes);
const preparation = readFileSync('docs/production/drafts/module5-next-preparation-2026-10-10/chemistry-c2.md');
assert.equal(hash(preparation), '699108d28dc0ee421351c70d3223f42a50b9e1eb188e2d4e67e7d0498719f3a5');
const speeches = [...preparation.toString().matchAll(/\*\*Narration(?:, (?:prompt|feedback) segment)?:\*\* “([^”]+)”/g)].map(m => m[1]);
const narration = JSON.parse(readFileSync(selected + '/narration-plan.json'));
assert.deepEqual(narration.segments.map(s => s.text), speeches);
assert.equal(lesson.scenes.filter(s => s.voiceover).map(s => s.voiceover.text).join(' '), speeches.join(' '));
assert.deepEqual(JSON.parse(readFileSync(selected + '/remotion-props.json')).lesson, lesson);
for (const file of ['lesson.json', 'remotion-props.json', 'production-brief.json', 'narration-plan.json']) assert(!readFileSync(selected + '/' + file).toString().includes('\u2014'));
assert(!lesson.scenes.some(s => s.voiceover?.audioFile || s.captions));
const modelFile = out + '/author-model-check.cjs';
buildSync({entryPoints: ['src/slides/diagrams/kinds/chem-y12-m5/Module5ApproachDiagram.tsx'], outfile: modelFile,
  bundle: true, platform: 'node', format: 'cjs', external: ['react', 'remotion']});
const require = createRequire(import.meta.url);
const {approachState} = require(path.resolve(modelFile));
assert.deepEqual(approachState(0), {a: 1, b: 0, forward: 1, reverse: 0});
for (const t of [0.0001, 0.1, 0.5, 1, 2]) {
  const s = approachState(t);
  assert(Math.abs(s.a + s.b - 1) < 1e-12);
  assert(s.forward > s.reverse && s.reverse > 0);
  assert(s.a > s.b);
}
const limit = approachState(100);
assert(Math.abs(limit.a - 2 * limit.b) < 1e-12);
assert(Math.abs(limit.forward - limit.reverse) < 1e-12 && limit.forward > 0);
const transfer = lesson.scenes.find(s => s.id === 'c2-transfer');
const timing = answerTiming(transfer.revealDelays);
assert.equal(timing.fadeStart, transfer.revealDelays.answerVisibleStart);
assert.equal(transfer.revealDelays.answerVisibleStart - transfer.revealDelays.responseHoldStart, 300);
assert(transfer.revealDelays.stepAts.every(at => at >= timing.fadeStart));
assert(transfer.calculationPresentation.stages.every(s => (s.lineAts ?? []).every(at => at >= timing.fadeStart)));
assert(transfer.caption === 'Use both rates. Compare initial change with final equilibrium.');
const draft = checkProductionBrief(process.cwd(), selected + '/production-brief.json', {stage: 'draft'});
const recording = checkProductionBrief(process.cwd(), selected + '/production-brief.json', {stage: 'recording'});
assert(draft.ready);
const record = {reviewer: 'Sol 6.1 implementation author', evidenceType: 'author source and mathematical checks only',
  selectedLessonPath: selected + '/lesson.json', selectedLessonSha256: hash(lessonBytes),
  componentPath: 'src/slides/diagrams/kinds/chem-y12-m5/Module5ApproachDiagram.tsx',
  componentSha256: hash(readFileSync('src/slides/diagrams/kinds/chem-y12-m5/Module5ApproachDiagram.tsx')),
  results: {speechCopiedExactly: true, portablePropsMatch: true, noEmDash: true, noSelectedAudioOrCaptions: true,
    actualModelInitialRatesAndConservation: true, finiteModelRatesUnequal: true, equilibriumLimitRatesEqualNonzero: true,
    concentrationLimitTwoToOne: true, plannedAnswerFreeResponseFrames: 300, responseAnswerTimingSourceCheck: true},
  timeline: {fps: lesson.fps, dimensions: [lesson.width, lesson.height], frames: lessonTimeline(lesson).durationInFrames, allTimingsEstimated: true},
  draftBrief: draft, recordingBrief: recording,
  limitations: ['Author checks are not independent source approval.', 'Silence is planned, not measured assembly.', 'Still frames do not establish continuous playback, exact voiced cues, external-caption fit, device readability or human listening.']};
writeFileSync(selected + '/author-checks.json', JSON.stringify(record, null, 2) + '\n');
console.log(JSON.stringify({source: record.selectedLessonSha256, component: record.componentSha256, draftReady: draft.ready, recordingReady: recording.ready}, null, 2));
