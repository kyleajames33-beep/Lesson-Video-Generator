import fs from 'node:fs';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {answerTiming} from '../../../../src/lesson/answer-timing.mjs';
const base = 'docs/production/drafts/module5-b2-selected-2026-10-10';
const output = 'out/prototypes/module5-b2-selected-2026-10-10';
const source = `${base}/lesson.json`;
const hash = p => createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const read = p => JSON.parse(fs.readFileSync(p, 'utf8'));
const lesson = read(source), brief = read(`${base}/production-brief.json`), segments = read(`${base}/recording-segments.json`);
const preparation = brief.origin.preparation.path;
assert.equal(hash(preparation), '8525e4ab2d89a68b0b3124ffe04a4bd648ec762de3d19b5cee413609afe96956');
assert.equal(hash(brief.origin.original.path), 'aa69e9a31be275f142b656052c9f4882c203cab45afd2593d6caa95ccd9719e0');
const prep = fs.readFileSync(preparation, 'utf8').replaceAll('\r\n', '\n');
const accepted = Object.fromEntries([...prep.matchAll(/### ([^\n]+)\n\n\*\*Speech\*\*\n\n([^\n]+)/g)].map(m => [m[1].match(/\(`([^`]+)`\)/)?.[1], m[2]]));
assert.equal(segments.segments.length, 11);
for (const s of segments.segments) assert.equal(s.text, accepted[s.id], `${s.id}: accepted narration changed`);
for (const scene of lesson.scenes.filter(s => s.voiceover?.text)) assert.equal(scene.voiceover.text, segments.segments.filter(s => s.sceneId === scene.id).map(s => s.text).join(' '));
assert.deepEqual(read(`${base}/remotion-props.json`).lesson, lesson);
assert.equal(brief.schemaVersion, 2); assert.equal(brief.source.lessonSha256, hash(source));
assert.equal(segments.source.sha256, hash(source));
const noMedia = (value, location = 'lesson') => {
  if (!value || typeof value !== 'object') return;
  for (const [key, item] of Object.entries(value)) {
    if (/audio|alignment|^captions$|timedCaptions|captionTrack/i.test(key)) assert.ok(item == null || item === '' || Array.isArray(item) && item.length === 0, `${location}.${key}: selected media binding`);
    noMedia(item, `${location}.${key}`);
  }
};
noMedia(lesson);
assert.ok(!lesson.scenes.some(s => s.image));
assert.ok(lesson.scenes.filter(s => s.diagram).every(s => s.diagram.kind === 'bioM5AnimalReproduction'));
assert.ok(lesson.scenes.find(s => s.id === 'hook').comparisonIsPrompt);
const quiz = lesson.scenes.find(s => s.type === 'quickCheck');
assert.equal(quiz.responseHold, undefined, 'Do not claim an estimated interval is measured');
assert.equal(quiz.revealDelays.answerVisibleStart - quiz.revealDelays.responseHoldStart, 360);
assert.equal(answerTiming(quiz.revealDelays).fadeStart, quiz.revealDelays.answerVisibleStart);
assert.ok(quiz.revealDelays.stepAts.every(at => at >= quiz.revealDelays.answerVisibleStart));
for (const s of lesson.scenes) {
  const cues = s.revealDelays?.stepAts ?? [];
  assert.ok(cues.every(c => c < s.durationInFrames), `${s.id}: stage beyond scene`);
  if (cues.length) assert.ok(s.durationInFrames - cues.at(-1) >= 180, `${s.id}: final stage needs a settled draft reading hold`);
}
for (const file of ['lesson.json', 'remotion-props.json', 'production-brief.json', 'narration.md', 'recording-segments.json', 'create-draft.mjs', 'author-check.mjs']) {
  assert.ok(!fs.readFileSync(`${base}/${file}`, 'utf8').includes(String.fromCharCode(0x2014)), `${file}: prohibited punctuation`);
}
const component = 'src/slides/diagrams/kinds/bio-y12-m5/Module5AnimalReproductionDiagram.tsx';
assert.ok(!fs.readFileSync(component, 'utf8').includes(String.fromCharCode(0x2014)));
const commands = [
  ['scripts/validate-lesson.mjs', source], ['scripts/check-production-brief.mjs', `${base}/production-brief.json`, '--stage=draft'],
  ['scripts/check-production-brief.mjs', `${base}/production-brief.json`, '--stage=recording'],
].map((args, i) => {const r = spawnSync(process.execPath, args, {encoding: 'utf8'}); const expected = i === 2 && brief.scriptReview.status !== 'pass' ? 1 : 0; assert.equal(r.status, expected, `${args.join(' ')}\n${r.stderr}\n${r.stdout}`); return {command: `node ${args.join(' ')}`, exitCode: r.status, stdout: r.stdout.trim(), stderr: r.stderr.trim()};});
const runtime = ['src/LessonVideo.tsx', 'src/dev/release-entry.tsx', 'src/lesson/types.ts', 'src/lesson/timeline.mjs', 'src/lesson/answer-timing.mjs', 'src/slides/HookSlide.tsx', 'src/slides/ConceptSlide.tsx', 'src/slides/WorkedExampleSlide.tsx', 'src/slides/QuickCheckSlide.tsx', 'src/slides/SummarySlide.tsx', 'src/slides/MisconceptionSlide.tsx', 'src/slides/shared/Module5EvidenceBoard.tsx', 'src/slides/shared/OrganisedCalculation.tsx', 'src/slides/diagrams/DiagramRenderer.tsx', 'src/slides/diagrams/dioramaKinds/lane-bio-y12-m5.ts', component];
const report = {schemaVersion: 1, date: '2026-10-10', reviewer: '/root/bio_b2_selected_implementation', scope: 'Author source/mechanical validation. Not independent selected-source review, visual approval or listening.', source: {path: source, sha256: hash(source)}, preparation: brief.origin.preparation, results: {exactAcceptedSpeechPreserved: true, promptFeedbackSeparatedInTextManifest: true, noSelectedMediaOrArtwork: true, noAtomFallbackInHook: true, safeOptInVisualBindingsOnly: true, initial12SecondIntervalPlannedNotMeasured: true, firstAnswerGateUsesBoundaryNotMidpoint: true, exactPropsAndBriefBinding: true, prohibitedPunctuationAbsent: true}, commands, warningDisposition: 'Syllabus actions are scoped in the brief instead of claiming root dotpoint coverage. Compact scene copy is deliberate. Built-in pause instruction remains; no duplicate pausePrompt/callout/coach note is needed.', selectedRuntime: runtime.map(p => ({path: p, sha256: hash(p)})), runtimeScope: 'Selected key source hashes, not a complete frozen dependency package.', pending: ['Exact selected JSON and diagram independent science/teaching review', 'Native/narrow sampled visual observations and continuous full-scene review', 'Fresh narration, alignment, faithful captions and measured hold assembly', 'Exact voiced preview and actual device/caption review', 'Human listening', 'Recording/export/release approvals']};
fs.writeFileSync(`${base}/author-validation.json`, JSON.stringify(report, null, 2) + '\n');
fs.copyFileSync(`${base}/author-validation.json`, `${output}/author-validation.json`);
console.log(`B2 author source checks passed: ${hash(source)}. Recording source-review status: ${brief.scriptReview.status}.`);
