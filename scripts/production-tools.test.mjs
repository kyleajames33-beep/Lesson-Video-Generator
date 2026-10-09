import test, {after} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync, existsSync, symlinkSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import {sha256} from './lib/playback-assembly.mjs';
import {captionsForExactNarration, inspectNarration} from './lib/narration-integrity.mjs';
import {invalidateDraftNarration} from './lib/draft-invalidation.mjs';
import {writeIsolatedPackage} from './lib/isolated-output.mjs';
import {visualScienceChecklist} from './lib/visual-science-checklist.mjs';
import {readinessReport} from './lib/production-readiness.mjs';
import {responseProposal} from './lib/response-proposals.mjs';
const repo = fileURLToPath(new URL('..', import.meta.url)), temporary = [];
after(() => temporary.forEach(p => rmSync(p, {recursive: true, force: true})));
const temp = () => {const p = mkdtempSync(path.join(tmpdir(), 'production-tools-')); temporary.push(p); return p;};
const put = (root, p, value) => {mkdirSync(path.dirname(path.join(root, p)), {recursive: true}); writeFileSync(path.join(root, p), typeof value === 'string' ? value : JSON.stringify(value));};
const alignment = text => ({characters: [...text], character_start_times_seconds: [...text].map((_, i) => i / 50), character_end_times_seconds: [...text].map((_, i) => (i + 1) / 50)});
const scene = () => ({id: 'quiz', type: 'quickCheck', heading: 'Recall', question: 'Find the amount.', answerSteps: ['1.00 mol'], caption: 'Try the question.', durationInFrames: 500, voiceover: {text: 'Try Cl₂.'}});
const lesson = () => ({subject: 'Chemistry', yearLevel: 'Year 11', module: 'Module 2', lesson: 'Lesson 2', title: 'Fixture', width: 1920, height: 1080, fps: 30, introDurationInFrames: 0, scenes: [scene()]});
function voiced(root, text = 'Try Cl₂.', id = 'quiz') {
  const audioFile = `public/audio/${id}.${sha256(text).slice(0, 12)}.mp3`, a = alignment(text);
  put(root, audioFile, 'nonempty synthetic test bytes, not recorded speech'); put(root, audioFile.replace('.mp3', '.alignment.json'), a);
  return {...scene(), id, voiceover: {text, audioFile, startFrame: 0, endFrame: 120}, captions: captionsForExactNarration(text, a)};
}
const cli = (file, args, cwd) => spawnSync(process.execPath, [path.join(repo, 'scripts', file), ...args], {cwd, encoding: 'utf8', maxBuffer: 16 * 1024 * 1024});

test('exact narration guard rejects punctuation, whitespace and scientific Unicode changes', () => {
  const text = 'Try Cl₂.';
  assert.ok(captionsForExactNarration(text, alignment(text)).length);
  for (const changed of ['Try Cl2.', 'Try  Cl₂.', 'Try Cl₂!', ' Try Cl₂.']) assert.throws(() => captionsForExactNarration(changed, alignment(text)), /exact current narration/u);
  assert.throws(() => captionsForExactNarration(text, {...alignment(text), character_start_times_seconds: []}), /Invalid character alignment/u);
});
test('ordinary recordings detect exact stale text and captions even with missing audio', () => {
  const root = temp(), s = voiced(root); assert.deepEqual(inspectNarration(s, root).errors, []);
  s.captions[0].text = 'Wrong'; assert.ok(inspectNarration(s, root).errors.some(e => e.code === 'CAPTIONS_STALE'));
  s.voiceover.text = 'Try Cl2.'; rmSync(path.join(root, s.voiceover.audioFile));
  const codes = inspectNarration(s, root).errors.map(e => e.code);
  for (const c of ['AUDIO_MISSING', 'AUDIO_STALE', 'NARRATION_ALIGNMENT_STALE']) assert.ok(codes.includes(c));
});
test('unversioned legacy media stays explicitly unknown and invalid paths fail closed', () => {
  const root = temp(), s = voiced(root); const old = s.voiceover.audioFile;
  s.voiceover.audioFile = 'public/audio/plain.mp3'; put(root, s.voiceover.audioFile, 'fixture'); put(root, s.voiceover.audioFile.replace('.mp3', '.alignment.json'), alignment(s.voiceover.text));
  assert.equal(inspectNarration(s, root).warnings[0].code, 'AUDIO_UNVERSIONED');
  s.voiceover.audioFile = '../escape.mp3'; assert.equal(inspectNarration(s, root).errors[0].code, 'AUDIO_PATH_INVALID');
  s.voiceover.audioFile = old; delete s.voiceover.text; assert.equal(inspectNarration(s, root).errors[0].code, 'NARRATION_TEXT_MISSING');
});
test('caption builder is atomic when a later scene has stale alignment', () => {
  const root = temp(), l = lesson(); l.scenes = [voiced(root, 'Good.', 'one'), voiced(root, 'Old.', 'two')]; l.scenes[1].voiceover.text = 'New.';
  put(root, 'lesson.json', l); const before = readFileSync(path.join(root, 'lesson.json'));
  const run = cli('build-captions.mjs', ['lesson.json'], root); assert.notEqual(run.status, 0); assert.match(run.stderr, /exact current narration/u);
  assert.deepEqual(readFileSync(path.join(root, 'lesson.json')), before);
});
test('caption builder validates intro and refuses missing sidecars and unwired cached captions', () => {
  for (const kind of ['intro', 'missing', 'unwired']) {
    const root = temp(), l = lesson(), s = voiced(root); l.scenes = [s];
    if (kind === 'intro') { l.introVoiceover = {...s.voiceover, text: 'Changed.'}; l.introDurationInFrames = 270; }
    if (kind === 'missing') rmSync(path.join(root, s.voiceover.audioFile.replace('.mp3', '.alignment.json')));
    if (kind === 'unwired') delete s.voiceover.audioFile;
    put(root, 'lesson.json', l); assert.notEqual(cli('build-captions.mjs', ['lesson.json'], root).status, 0, kind);
  }
});
test('caption dry-run preserves bytes and a valid rebuild uses exact tokens', () => {
  const root = temp(), l = lesson(); l.scenes = [voiced(root)]; delete l.scenes[0].captions; put(root, 'lesson.json', l);
  const before = readFileSync(path.join(root, 'lesson.json'));
  assert.equal(cli('build-captions.mjs', ['lesson.json', '--dry-run'], root).status, 0); assert.deepEqual(readFileSync(path.join(root, 'lesson.json')), before);
  assert.equal(cli('build-captions.mjs', ['lesson.json'], root).status, 0);
  assert.deepEqual(JSON.parse(readFileSync(path.join(root, 'lesson.json'))).scenes[0].captions, captionsForExactNarration(l.scenes[0].voiceover.text, alignment(l.scenes[0].voiceover.text)));
});
test('invalidation is exact, segment-scoped and strips translated media, captions and nested cues', () => {
  const root = temp(), before = lesson(); before.scenes = [voiced(root), {...voiced(root, 'Keep.', 'keep'), durationInFrames: 400}];
  Object.assign(before.scenes[0], {responseHold: {startFrame: 30, endFrame: 90}, revealDelays: {answerVisibleStart: 90}, diagram: {kind: 'example', props: {delay: 10, at: {a: 10}, labelAt: 20, label: 'Keep label'}}});
  before.scenes[0].voiceover.translatedAudioFiles = {fr: 'old.mp3'}; before.scenes[0].voiceover.translations = {fr: 'Old translation'};
  const candidate = structuredClone(before); candidate.scenes[0].voiceover.text += ' ';
  const original = JSON.stringify(before), edited = JSON.stringify(candidate), result = invalidateDraftNarration(before, candidate);
  assert.equal(result.report.changes.length, 1); assert.deepEqual(result.draft.scenes[1], before.scenes[1]);
  assert.deepEqual(result.draft.scenes[0].voiceover, {text: 'Try Cl₂. ', translations: {fr: 'Old translation'}});
  assert.equal(result.draft.scenes[0].diagram.props.label, 'Keep label');
  assert.doesNotMatch(JSON.stringify(result.draft.scenes[0]), /audioFile|translatedAudio|captions|revealDelays|responseHold|labelAt|"at"|"delay"/u);
  assert.equal(JSON.stringify(before), original); assert.equal(JSON.stringify(candidate), edited);
});
test('intro/fps/new/removed scene invalidation and duplicate-ID rejection', () => {
  const root = temp(), before = lesson(); before.scenes = [voiced(root)]; before.introVoiceover = {...before.scenes[0].voiceover}; before.introCaptions = before.scenes[0].captions;
  const candidate = structuredClone(before); candidate.introVoiceover.text += '!'; const r = invalidateDraftNarration(before, candidate); assert.equal(r.report.changes[0].scene, 'intro'); assert.equal(r.draft.introCaptions, undefined);
  candidate.fps = 60; assert.equal(invalidateDraftNarration(before, candidate).report.changes.length, 2);
  candidate.scenes = [{...scene(), id: 'new'}]; assert.deepEqual(invalidateDraftNarration(before, candidate).report.removedScenes, ['quiz']);
  candidate.scenes.push({...scene(), id: 'new'}); assert.throws(() => invalidateDraftNarration(before, candidate), /unique/u);
});
test('unchanged narration keeps its scene; visual-only changes invalidate render evidence', () => {
  const a = lesson(), b = structuredClone(a); assert.equal(invalidateDraftNarration(a, b).report.renderEvidenceInvalidated, false);
  b.scenes[0].caption = 'Changed visual.'; const r = invalidateDraftNarration(a, b); assert.equal(r.report.changes.length, 0); assert.equal(r.report.renderEvidenceInvalidated, true);
});
test('proposal writer refuses catalogue paths, symlinks, overwrites and unsafe filenames', () => {
  const root = temp();
  assert.throws(() => writeIsolatedPackage('src/data', {'lesson.json': {}}, root), /out\/review/u);
  assert.throws(() => writeIsolatedPackage('out/review/new', {'../x': {}}, root), /filenames/u);
  writeIsolatedPackage('out/review/new', {'lesson.json': {}}, root);
  assert.throws(() => writeIsolatedPackage('out/review/new', {'lesson.json': {}}, root), /already exists/u);
  mkdirSync(path.join(root, 'elsewhere'));
  // Directory junctions exercise the same path guard without Windows symlink privileges.
  symlinkSync(path.join(root, 'elsewhere'), path.join(root, 'out/review/link'), process.platform === 'win32' ? 'junction' : 'dir');
  assert.throws(() => writeIsolatedPackage('out/review/link/new', {'lesson.json': {}}, root), /symlinks/u);
});
test('visual science checklist covers five science dimensions and binds each unreviewed scene', () => {
  const l = lesson(); l.scenes[0].diagram = {type: 'flow', labels: ['blood', 'tubule']}; const c = visualScienceChecklist(l, sha256('source'));
  assert.equal(c.approval, false); assert.deepEqual(c.scenes[0].checks.map(c => c.id), ['labels', 'arrows', 'units', 'scales', 'consistency']);
  assert.ok(c.scenes[0].checks.every(c => c.outcome === 'unreviewed' && c.reviewer === null && c.evidence === null));
  const old = c.scenes[0].sceneSha256; l.scenes[0].diagram.labels[0] = 'changed'; assert.notEqual(visualScienceChecklist(l, sha256('source')).scenes[0].sceneSha256, old);
});
const report = (extras = {}) => readinessReport({lesson: lesson(), sourceJson: 'lesson.json', sourceSha256: sha256('fixture'), narration: [], preflight: {sourceJson: 'lesson.json', compositionId: 'Fixture', mediaReady: true, errors: [], warnings: []}, ...extras});
test('six-stage report never treats diagnostic success or missing checkout media as production approval', () => {
  const r = report(); assert.deepEqual(Object.keys(r.stages), ['science', 'artwork', 'narration', 'audio', 'captions', 'render']);
  assert.equal(r.status, 'release-evidence-incomplete'); assert.ok(Object.values(r.stages).every(s => s.status === 'unverified'));
  assert.match(r.productionAvailability, /unknown/u); assert.equal(r.publicationAuthorised, false); assert.equal(r.generationAuthorised, false);
  const missing = report({preflight: {sourceJson: 'lesson.json', compositionId: 'Fixture', mediaReady: false, errors: [{sceneId: 'quiz', code: 'AUDIO_MISSING', message: 'Unavailable here.'}], warnings: []}, releaseGate: {ready: true}});
  assert.equal(missing.stages.audio.status, 'blocked'); assert.equal(missing.status, 'release-evidence-incomplete'); assert.ok(!('productionReadyCount' in missing));
  assert.throws(() => report({sourceJson: 'wrong.json'}), /exact selected source/u);
});
test('only supplied full existing gate evidence plus preflight can complete the report', () => {
  assert.equal(report({releaseGate: {ready: true, status: 'release-evidence-complete'}}).status, 'release-evidence-complete');
  assert.equal(report({releaseGate: {ready: false, blockers: [{code: 'REVIEW_MISSING'}]}}).status, 'release-evidence-incomplete');
});
const specs = () => [{kind: 'pause', sceneId: 'quiz', question: 'Question?', promptText: 'Try first.', answerText: 'Feedback.', answerSteps: ['Feedback.'], thinkingSeconds: 5},
  {kind: 'predict', sceneId: 'predict', afterSceneId: 'quiz', question: 'Predict?', promptText: 'Predict first.', answerText: 'Then compare.', answerSteps: ['Compare.'], thinkingSeconds: 10},
  {kind: 'retrieval', sceneId: 'recall', afterSceneId: 'predict', question: 'Recall?', promptText: 'Recall first.', answerText: 'Then check.', answerSteps: ['Check.'], thinkingSeconds: 8}];
test('three response modes remain isolated unvoiced text plans with exact prompt/feedback splits', () => {
  const l = lesson(), before = JSON.stringify(l), p = responseProposal(l, specs());
  assert.equal(JSON.stringify(l), before); assert.deepEqual(p.interactions.interactions.map(i => i.kind), ['pause', 'predict', 'retrieval']);
  for (const s of p.draft.scenes) {assert.equal(s.type, 'quickCheck'); assert.equal(s.responseHold, undefined); assert.equal(s.revealDelays, undefined); assert.equal(s.captions, undefined); assert.equal(s.voiceover.audioFile, undefined); assert.equal(p.takes.takes.filter(t => t.scene === s.id).map(t => t.text).join(' '), s.voiceover.text);}
  assert.equal(p.takes.generationAuthorised, false); assert.ok(p.takes.takes.every(t => t.audioFile === null)); assert.equal(p.interactions.registered, false);
});
test('response proposals reject invalid timing, missing anchors, duplicate scenes and copy boundaries', () => {
  for (const patch of [{thinkingSeconds: -1}, {thinkingSeconds: 0}, {thinkingSeconds: 1/7}, {kind: 'poll'}, {promptText: ' leading'}, {question: ''}, {answerSteps: []}]) assert.throws(() => responseProposal(lesson(), [{...specs()[0], ...patch}]));
  assert.throws(() => responseProposal(lesson(), [specs()[0], specs()[0]]), /Unique/u);
  assert.throws(() => responseProposal(lesson(), [{...specs()[1], afterSceneId: 'absent'}]), /anchor/u);
});
test('one-command report uses fresh exact selected source and existing hold codes', () => {
  const root = temp(), l = lesson(); put(root, 'lesson.json', l); put(root, 'src/assets/index.ts', 'export const ASSETS = {};');
  const run = cli('report-production-readiness.mjs', ['lesson.json', '--json'], root); assert.equal(run.status, 1, run.stderr);
  const r = JSON.parse(run.stdout).lessons[0]; assert.equal(r.sourceSha256, sha256(readFileSync(path.join(root, 'lesson.json'))));
  assert.equal(r.stages.audio.status, 'blocked'); assert.match(r.productionAvailability, /unknown/u);
  assert.ok(existsSync(path.join(root, 'out/audits/production-readiness.txt')));
});
test('readiness refuses unrelated release evidence and stale intro before caption regeneration', () => {
  const root = temp(), l = lesson(); l.introDurationInFrames = 270; l.introVoiceover = voiced(root).voiceover; l.introVoiceover.text += '!';
  put(root, 'lesson.json', l); put(root, 'src/assets/index.ts', 'export const ASSETS = {};');
  put(root, 'other.snapshot.json', {options: {lessonPath: 'other.json'}}); put(root, 'gate.json', {snapshotPath: 'other.snapshot.json', inputSnapshotPath: 'other.snapshot.json', reviews: []});
  const run = cli('report-production-readiness.mjs', ['lesson.json', '--gate=gate.json', '--json'], root); assert.equal(run.status, 1, run.stderr);
  const r = JSON.parse(run.stdout).lessons[0]; assert.match(r.stages.render.releaseGate.blockers[0].detail, /different lesson/u);
  assert.ok(r.preflight.errors.some(e => e.sceneId === 'intro' && e.code === 'NARRATION_ALIGNMENT_STALE'));
});

test('translation-only edits preserve authored text but invalidate selected translated recordings', () => {
  const a = lesson(); a.scenes[0].voiceover.translations = {fr: 'Ancien'}; a.scenes[0].voiceover.translatedAudioFiles = {fr: 'old.mp3'};
  const b = structuredClone(a); b.scenes[0].voiceover.translations.fr = 'Nouveau';
  const r = invalidateDraftNarration(a, b); assert.equal(r.report.changes[0].reason, 'translation-text-changed');
  assert.deepEqual(r.draft.scenes[0].voiceover.translations, {fr: 'Nouveau'}); assert.equal(r.draft.scenes[0].voiceover.translatedAudioFiles, undefined);
});

test('fresh narration failures cannot be hidden behind a passing earlier preflight/gate', () => {
  const r = report({releaseGate: {ready: true}, narration: [{scene: 'quiz', errors: [{code: 'CAPTIONS_STALE', message: 'Changed after preflight.'}]}]});
  assert.equal(r.status, 'release-evidence-incomplete'); assert.equal(r.stages.captions.status, 'blocked');
});

test('preflight retains the stricter nonmonotonic-start alignment failure without duplicate errors', () => {
  const root = temp(), l = lesson(), s = voiced(root); l.scenes = [s]; const a = alignment(s.voiceover.text);
  a.character_start_times_seconds[2] = 0; put(root, s.voiceover.audioFile.replace('.mp3', '.alignment.json'), a);
  put(root, 'lesson.json', l); put(root, 'src/assets/index.ts', 'export const ASSETS = {};');
  const run = cli('release-preflight.mjs', ['lesson.json', '--json'], root); assert.equal(run.status, 1);
  const errors = JSON.parse(run.stdout).lessons[0].errors; assert.equal(errors.filter(e => e.code === 'ALIGNMENT_INVALID').length, 1);
});

for (const segmentKind of ['scene', 'intro']) test(`caption builder atomically rejects stale recording filename for ${segmentKind} despite matching new alignment`, () => {
  assert.equal(sha256('Old wording.').slice(0, 12), 'd55e7ed43c63');
  assert.equal(sha256('New wording.').slice(0, 12), '4a6b1ca7ebdb');
  for (const extension of ['mp3', 'wav']) {
    const root = temp(), l = lesson(), valid = voiced(root, 'First valid segment.', 'valid');
    delete valid.captions; // Would be added before reaching the later bad segment.
    l.scenes = [valid];
    const audioFile = `public/audio/old.d55e7ed43c63.${extension}`;
    put(root, audioFile, 'old synthetic recording bytes');
    put(root, audioFile.replace(/\.(mp3|wav)$/u, '.alignment.json'), alignment('New wording.'));
    const changed = {...scene(), id: 'changed', voiceover: {text: 'New wording.', audioFile}};
    if (segmentKind === 'intro') {l.introDurationInFrames = 270; l.introVoiceover = changed.voiceover;}
    else l.scenes.push(changed);
    put(root, 'lesson.json', l); const before = readFileSync(path.join(root, 'lesson.json'));
    const run = cli('build-captions.mjs', ['lesson.json'], root);
    assert.notEqual(run.status, 0, extension); assert.match(run.stderr, /recording filename text hash differs/u);
    assert.deepEqual(readFileSync(path.join(root, 'lesson.json')), before, 'No partial caption rewrite');
    assert.equal(readFileSync(path.join(root, audioFile), 'utf8'), 'old synthetic recording bytes');
    const dry = cli('build-captions.mjs', ['lesson.json', '--dry-run'], root);
    assert.notEqual(dry.status, 0); assert.deepEqual(readFileSync(path.join(root, 'lesson.json')), before);
  }
});
