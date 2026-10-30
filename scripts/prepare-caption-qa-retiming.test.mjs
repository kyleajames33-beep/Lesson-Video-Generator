import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {parseSrt, parseSbv, serialiseCaptions, retimeQaCues, prepareCaptionQaRetiming, parseArgs} from './prepare-caption-qa-retiming.mjs';
const sha = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const older = [{startMs: 0, endMs: 1000, text: 'P C L five. Keep it.'}, {startMs: 9200, endMs: 10200, text: 'Feedback.'}];
const qa = older.map((cue, i) => ({...cue, text: i ? cue.text : 'PCl₅.\nKeep it.'}));
const prior = older.map((cue, i) => ({...cue, startMs: cue.startMs + i * 800, endMs: cue.endMs + i * 800}));
const lesson = {fps: 30, introDurationInFrames: 0, scenes: [
  {id: 'attempt', durationInFrames: 300, responseHold: {startFrame: 120, endFrame: 270}, voiceover: {text: older[0].text}, captions: [{text: older[0].text, startMs: 0, endMs: 1000}]},
  {id: 'feedback', durationInFrames: 90, voiceover: {text: older[1].text}, captions: [{text: older[1].text, startMs: 0, endMs: 1000}]},
]};

function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'caption-qa-retiming-'));
  t.after(() => { assert.equal(path.dirname(root), path.resolve(os.tmpdir())); fs.rmSync(root, {recursive: true, force: true}); });
  const write = (file, bytes) => { fs.mkdirSync(path.dirname(path.join(root, file)), {recursive: true}); fs.writeFileSync(path.join(root, file), bytes); return sha(bytes); };
  for (const folder of ['a', 'b']) write(folder + '/captions-fixed.srt', serialiseCaptions(qa));
  const git = args => execFileSync('git', args, {cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe']}).trim();
  git(['init', '--quiet']); git(['add', 'a/captions-fixed.srt', 'b/captions-fixed.srt']);
  git(['-c', 'user.name=Caption fixture', '-c', 'user.email=fixture@example.invalid', 'commit', '--quiet', '-m', 'QA fixture']);
  const commit = git(['rev-parse', 'HEAD']);
  write('qa.md', '| [A](a/captions-fixed.srt) | 2 | Notation and wrapping |\n| [B](b/captions-fixed.srt) | 2 | Notation and wrapping |\n');
  const records = ['a', 'b'].map((folder, i) => ({
    lessonId: i ? 'bio-m5-b03a' : 'chem-fixture', videoId: 'video-' + folder, videoPath: folder + '/video.mp4', recordedVideoSha256: 'a'.repeat(64),
    lessonPath: folder + '/lesson.json', lessonSha256: write(folder + '/lesson.json', JSON.stringify(lesson)),
    originalCaptionPath: folder + '/captions.srt', originalCaptionSha256: write(folder + '/captions.srt', serialiseCaptions(older)),
    recordedCaptionSha256: i ? sha(serialiseCaptions(older)) : null, uploadedTrackIdentityVerified: true,
    correctedSrtPath: folder + '/prior.srt', correctedSrtSha256: write(folder + '/prior.srt', serialiseCaptions(prior)),
    correctedVttPath: folder + '/prior.vtt', correctedVttSha256: write(folder + '/prior.vtt', serialiseCaptions(prior, 'vtt')),
    untouchedLedgerField: 'retain this original value',
  }));
  Object.assign(records[1], {timingEvidence: {path: 'timing.json', sha256: write('timing.json', '{"fixture":true}')}, videoTailVarianceSeconds: -0.3, reviewNotes: ['Fixture tail remains pending.']});
  const inputHash = write('uploads.json', JSON.stringify({videos: records}));
  const manifest = {input: 'uploads.json', inputSha256: inputHash, sourceInputs: [{path: 'uploads.json', sha256: inputHash}], videos: records};
  const parentHash = write('parent.json', JSON.stringify(manifest)), reviewHash = write('review.json', JSON.stringify(manifest));
  write('catalog.json', JSON.stringify({manifests: [{path: 'review.json', sha256: reviewHash, parent: 'parent.json', parentSha256: parentHash, videoCount: 2}]}));
  const sbv = '0:00:00.000,0:00:01.101\nPCl₅.\nKeep it.\n\n0:00:09.200,0:00:10.200\nFeedback.\n';
  const rawHash = write('saved.sbv', sbv);
  write('live.json', JSON.stringify({method: 'Fixture saved Studio download', videos: [{lessonId: records[0].lessonId, videoId: records[0].videoId,
    captionLanguage: 'English (Australia)', downloadPath: 'saved.sbv', downloadedSha256: rawHash, referencePath: 'a/captions-fixed.srt', referenceSha256: sha(serialiseCaptions(qa)), studioUrl: 'https://studio.youtube.com/fixture'}]}));
  return {root, records, write, options: {root, catalogPath: 'catalog.json', qaPath: 'qa.md', liveEvidencePath: 'live.json', outputPath: 'prepared', qaCommit: commit, expectedQaCount: 2, expectedLiveCount: 1}};
}

test('parsing and serialization preserve notation and exact cue line breaks', () => {
  assert.deepEqual(parseSrt(serialiseCaptions(qa)), qa);
  const sbv = Buffer.from('0:00:00.000,0:00:01.101\r\nPCl₅.\r\nKeep it.\r\n');
  assert.equal(parseSbv(sbv)[0].text, qa[0].text); assert.equal(parseSbv(sbv)[0].endMs, 1101);
  assert.match(serialiseCaptions(qa, 'vtt').toString(), /PCl₅\.\nKeep it\./);
  assert.throws(() => parseSrt(Buffer.from('2\n00:00:00,000 --> 00:00:01,000\nWrong index.')), /cue index/);
});

test('retiming preserves QA bodies and reports saved Studio time differences', () => {
  const live = qa.map((cue, i) => ({...cue, endMs: cue.endMs + (i ? 0 : 101)}));
  const result = retimeQaCues({qa, older, prior, lesson, live});
  assert.deepEqual(result.cues.map(c => c.text), qa.map(c => c.text)); assert.equal(result.cues[1].startMs, 10000);
  assert.deepEqual(result.liveVsQaTiming.differences, [{cue: 1, startDeltaMs: 0, endDeltaMs: 101}]);
  assert.throws(() => retimeQaCues({qa: qa.slice(1), older, prior, lesson}), /cue counts/);
  assert.throws(() => retimeQaCues({qa: qa.map((c, i) => ({...c, startMs: c.startMs + i})), older, prior, lesson}), /QA cue timestamps/);
  assert.throws(() => retimeQaCues({qa, older, prior: older, lesson}), /Prior staged timestamps/);
  assert.throws(() => retimeQaCues({qa, older, prior, lesson, live: qa.map(c => ({...c, text: c.text.replace('\n', ' ')}))}), /line breaks/);
});

test('preparation freezes provenance, retains old fields and identifies only captured saved tracks', t => {
  const f = fixture(t), result = prepareCaptionQaRetiming(f.options);
  assert.equal(result.videos, 2); assert.equal(result.savedStudioReferences, 1);
  const manifest = JSON.parse(fs.readFileSync(path.join(f.root, 'prepared/manifest.json')));
  for (const file of [{path: manifest.input, sha256: manifest.inputSha256}, ...manifest.sourceInputs]) assert.equal(sha(fs.readFileSync(path.join(f.root, file.path))), file.sha256);
  const input = JSON.parse(fs.readFileSync(path.join(f.root, manifest.input))); assert.deepEqual(input.videos, f.records);
  const [captured, sourceOnly] = manifest.videos;
  assert.equal(captured.currentSavedTrackIdentityVerified, true); assert.equal(sourceOnly.currentSavedTrackIdentityVerified, false);
  assert.equal(captured.recordedCaptionSha256, null); assert.equal(sourceOnly.recordedCaptionSha256, f.records[1].recordedCaptionSha256);
  assert.deepEqual(sourceOnly.reviewNotes, f.records[1].reviewNotes); assert.deepEqual(sourceOnly.timingEvidence, f.records[1].timingEvidence);
  assert.equal(sourceOnly.videoTailVarianceSeconds, -0.3);
  assert.deepEqual(parseSrt(fs.readFileSync(path.join(f.root, captured.originalCaptionPath))), parseSbv(fs.readFileSync(path.join(f.root, 'saved.sbv'))));
  assert.equal(captured.savedStudioReferenceSrtPath, captured.originalCaptionPath);
  assert.equal(captured.rawDownloadProvenance.rawSnapshot.sha256, sha(fs.readFileSync(path.join(f.root, 'saved.sbv'))));
  for (const record of manifest.videos) {
    assert.deepEqual(parseSrt(fs.readFileSync(path.join(f.root, record.correctedSrtPath))).map(c => c.text), qa.map(c => c.text));
    assert.equal(record.untouchedLedgerField, 'retain this original value');
    assert.equal(sha(fs.readFileSync(path.join(f.root, record.qaSourcePath))), record.qaSourceSha256);
    assert.equal(parseSrt(fs.readFileSync(path.join(f.root, record.correctedSrtPath)))[1].startMs, 10000);
    assert.equal(sha(fs.readFileSync(path.join(f.root, record.ledgerOriginalCaptionPath))), record.ledgerOriginalCaptionSha256);
    assert.equal(record.lessonPath.startsWith('prepared/inputs/'), true);
  }
  assert.throws(() => prepareCaptionQaRetiming(f.options), /Output already exists/);
});

test('missing captures and changed pinned inputs fail before output', t => {
  const f = fixture(t);
  assert.throws(() => prepareCaptionQaRetiming({...f.options, expectedLiveCount: 5}), /Expected 5 saved Studio captures/);
  assert.equal(fs.existsSync(path.join(f.root, 'prepared')), false);
  fs.appendFileSync(path.join(f.root, 'uploads.json'), ' ');
  assert.throws(() => prepareCaptionQaRetiming(f.options), /SHA256 mismatch/);
  assert.equal(fs.existsSync(path.join(f.root, 'prepared')), false);
});

test('QA changes since the pinned commit fail before output', t => {
  const f = fixture(t); fs.appendFileSync(path.join(f.root, 'b/captions-fixed.srt'), '\n');
  assert.throws(() => prepareCaptionQaRetiming(f.options), /differs from commit/);
  assert.equal(fs.existsSync(path.join(f.root, 'prepared')), false);
});

test('CLI needs explicit additive output and exposes no count or commit override', () => {
  assert.deepEqual(parseArgs(['--output', 'out/new']), {outputPath: 'out/new'});
  assert.throws(() => parseArgs([]), /--output/);
  assert.throws(() => parseArgs(['--expected-count', '2']), /Unknown/);
  assert.throws(() => parseArgs(['--qa-commit', 'other']), /Unknown/);
});
