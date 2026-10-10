import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';

const base = 'docs/production/drafts/module5-visual-v2-2026-10-10';
const hash = p => createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const read = p => JSON.parse(fs.readFileSync(p, 'utf8'));
const assertSilentBindings = (value, location = 'lesson') => {
  if (!value || typeof value !== 'object') return;
  for (const [key, item] of Object.entries(value)) {
    // Exchange diagram beat captions are authored labels, not spoken-caption media.
    const diagramLabels = key === 'captions' && location.endsWith('.diagram.props') && Array.isArray(item) && item.every(beat => typeof beat.at === 'number' && typeof beat.text === 'string' && Object.keys(beat).every(k => k === 'at' || k === 'text'));
    if (!diagramLabels && /^(audio(File|Path|Url|Sha256|Hash)?|alignment(File|Path|Url|Sha256|Hash)?|captions(File|Path|Url|Sha256|Hash)?|timedCaptions|captionTrack)$/i.test(key)) {
      const empty = item == null || item === '' || (Array.isArray(item) && item.length === 0);
      assert.ok(empty, `Selected media binding ${location}.${key}`);
    }
    assertSilentBindings(item, `${location}.${key}`);
  }
};
const oldHashes = {
  chemistry: '14e05ef9c9f6808bb07565d1d9d3030515f157cfc161c24e58ddd9e5f43b497a',
  biology: '17591531e1050b33a758f5a43a470b217330c7e969240a991d08bf5d1d3c826e',
};
const runtime = [
  'src/lesson/types.ts', 'src/slides/shared/OrganisedCalculation.tsx',
  'src/slides/shared/Module5EvidenceBoard.tsx',
  'src/slides/diagrams/dioramaKinds/lane-chem-y12-m5.ts',
  'src/slides/diagrams/dioramaKinds/lane-bio-y12-m5.ts',
  'src/slides/diagrams/kinds/chem-y12-m5/ExchangeDiagram.tsx',
  'src/slides/diagrams/kinds/chem-y12-m5/Module5ExchangeDiagram.tsx',
  'src/slides/diagrams/kinds/bio-y12-m5/LineageDiagram.tsx',
  'src/slides/diagrams/kinds/bio-y12-m5/Module5LineageDiagram.tsx',
];
for (const subject of ['chemistry', 'biology']) {
  const dir = `${base}/${subject}`;
  const original = `docs/production/drafts/module5-${subject}-l1-2026-10-10/lesson.json`;
  const source = `${dir}/lesson.json`;
  const lesson = read(source), old = read(original);
  assert.equal(hash(original), oldHashes[subject]);
  assert.deepEqual(lesson.scenes.map(s => [s.id, s.voiceover?.text]), old.scenes.map(s => [s.id, s.voiceover?.text]));
  assert.equal(hash(`${dir}/narration.md`), hash(path.join(path.dirname(original), 'narration.md')));
  const segmentFile = subject === 'chemistry' ? 'voice-segments.text-only.json' : 'recording-segments.json';
  const segments = read(`${dir}/${segmentFile}`), originalSegments = read(path.join(path.dirname(original), segmentFile));
  if (subject === 'chemistry') assert.deepEqual(segments.segments, originalSegments.segments);
  else assert.deepEqual(segments, originalSegments);
  assert.deepEqual(lesson.scenes.map(s => [s.id, s.durationInFrames]), old.scenes.map(s => [s.id, s.durationInFrames]));
  assert.deepEqual(read(`${dir}/remotion-props.json`).lesson, lesson);
  assert.equal(read(`${dir}/production-brief.json`).source.lessonSha256, hash(source));
  const quiz = lesson.scenes.find(s => s.type === 'quickCheck');
  const oldQuiz = old.scenes.find(s => s.type === 'quickCheck');
  assert.deepEqual(quiz.revealDelays, oldQuiz.revealDelays);
  assertSilentBindings(lesson);
  const scanned = [...runtime.filter(p => p.includes('Module5')), source, `${dir}/production-brief.json`, `${dir}/narration.md`];
  for (const file of scanned) assert.ok(!fs.readFileSync(file, 'utf8').includes(String.fromCharCode(0x2014)), `Prohibited punctuation in ${file}`);
  const commands = [
    ['scripts/validate-lesson.mjs', source],
    ['scripts/check-production-brief.mjs', `${dir}/production-brief.json`, '--stage=draft'],
  ].map(args => {
    const result = spawnSync(process.execPath, args, {encoding: 'utf8'});
    assert.equal(result.status, 0, `${args.join(' ')}\n${result.stderr}\n${result.stdout}`);
    return {command: `node ${args.join(' ')}`, exitCode: result.status, stdout: result.stdout.trim(), stderr: result.stderr.trim()};
  });
  const checks = {
    schemaVersion: 1, date: '2026-10-10', reviewer: '/root/module5_visual_implementation',
    scope: 'Author mechanical and source validation of the additive silent visual draft. Independent review and listening are separate.',
    source: {path: source, sha256: hash(source)},
    preservedOriginal: {path: original, expectedSha256: oldHashes[subject], actualSha256: hash(original)},
    results: {narrationStringsUnchanged: true, narrationDocumentBytesUnchanged: true, recordingSegmentTextUnchanged: true, durationsUnchanged: true, responseBoundaryAndStepCuesUnchanged: true, exactPropsAndBriefBinding: true, noSelectedAudioAttached: true, prohibitedPunctuationAbsent: true},
    commands,
    warningDisposition: 'Missing authored pausePrompt is deliberate. The unchanged renderer provides its existing neutral pause instruction; duplicate prompt previously approached the footer.',
    selectedRuntime: runtime.map(p => ({path: p, sha256: hash(p)})),
    runtimeScope: 'Relevant source hashes, not a complete frozen export snapshot. Shared dispatch was integrated by root. Old frozen release packages remain historical and require their preserved runtime.',
    pending: ['Continuous motion and full selected scene review', 'Measured speech/alignment and assembled response hold', 'External captions and actual-device viewing', 'Human listening', 'Recording/export/release approval'],
  };
  const review = 'docs/production/module5-visual-v2-review-2026-10-10.md';
  if (fs.existsSync(review)) checks.independentStaticEvidence = {path: review, sha256: hash(review), scope: 'Attributed independent final sampled native and384 still report; targeted findings resolved, remaining full-device/playback limits retained.'};
  fs.writeFileSync(path.join(dir, 'author-validation.json'), JSON.stringify(checks, null, 2) + '\n');
  console.log(`${subject}: ${hash(source)} validated`);
}
