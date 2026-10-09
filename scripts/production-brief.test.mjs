import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync, mkdirSync, writeFileSync, readFileSync} from 'node:fs';
import path from 'node:path';
import {createProductionBrief, checkProductionBrief, prepareRenderProductionBrief} from './lib/production-brief.mjs';
import {captureRelease} from './lib/release-snapshot.mjs';
import {sha256} from './lib/playback-assembly.mjs';

function fixture() {
  const parent = path.resolve('out/checks/production-brief-tests');
  mkdirSync(parent, {recursive: true});
  const root = mkdtempSync(path.join(parent, 'run-'));
  const put = (file, content) => {mkdirSync(path.dirname(path.join(root, file)), {recursive: true}); writeFileSync(path.join(root, file), content);};
  for (const file of ['package.json', 'package-lock.json', 'remotion.config.ts', 'entry.tsx']) put(file, '{}');
  for (const file of ['docs/research/hsc-video-production-standard-2026-10-02.md', 'docs/production/teaching-templates.md', 'docs/animation-planning.md', 'docs/production/course-progression-plan-2026-10-09.md']) put(file, 'Fixture reference');
  put('public/audio/selected.mp3', 'Selected recording fixture');
  put('public/audio/selected.alignment.json', '{}');
  const lesson = {title: 'Fixture', subject: 'Chemistry', fps: 30, introDurationInFrames: 0, scenes: [{id: 'concept', type: 'concept', durationInFrames: 300, voiceover: {text: 'Because each mole contributes the same mass.', audioFile: 'public/audio/selected.mp3'}}]};
  put('lesson.json', JSON.stringify(lesson));
  put('render.json', JSON.stringify({entryPoint: 'entry.tsx', compositionId: 'fixture', codec: 'h264'}));
  put('evidence.md', 'Named fixture source or playback observations. Not a real review.');
  const evidence = {path: 'evidence.md', sha256: sha256(readFileSync(path.join(root, 'evidence.md')))};
  const brief = createProductionBrief(root, 'lesson.json');
  const save = () => put('lesson.production-brief.json', JSON.stringify(brief));
  save();
  const readyToRecord = () => {
    Object.assign(brief.progression, {prerequisiteKnowledge: 'Moles and units', startsWith: 'One mole has a stated mass', stopsAfter: 'Connect mass with amount', nextLesson: 'Reaction ratios'});
    for (const key of Object.keys(brief.teaching)) brief.teaching[key] = 'Specific fixture decision';
    Object.assign(brief.scenes[0], {visualDecision: 'reuse', visualReference: 'Existing board', teachingReason: 'Show proportionality', narrationCue: 'Each mole', motionPurpose: 'Reveal the contribution', holdPurpose: 'Read the stable units'});
    brief.scriptReview = {status: 'pass', reviewer: 'Named fixture reviewer', evidence}; save();
  };
  const readyToExport = () => {
    readyToRecord();
    const snapshot = captureRelease(root, {lessonPath: 'lesson.json', renderConfig: 'render.json'});
    put('preview-inputs.json', JSON.stringify(snapshot));
    Object.assign(brief.voicedPreview, {status: 'pass', reviewer: 'Named fixture observer', mode: 'ui-playback', inputSnapshotPath: 'preview-inputs.json', evidence}); save();
  };
  const check = stage => checkProductionBrief(root, 'lesson.production-brief.json', {stage, expectedLessonPath: 'lesson.json'});
  return {root, lesson, brief, put, save, check, readyToRecord, readyToExport, evidence};
}

test('draft scaffolding stays usable but pending planning blocks recording', () => {
  const f = fixture();
  assert.equal(f.check('draft').ready, true);
  assert.ok(f.check('draft').pending.length > 0);
  assert.equal(f.check('recording').ready, false);
  f.readyToRecord();
  assert.equal(f.check('recording').ready, true);
  assert.equal(f.check('export').ready, false);
});

test('new briefs block recording when the course stopping point or handoff is missing', () => {
  const f=fixture();f.readyToRecord();f.brief.progression.stopsAfter='';f.save();
  assert.equal(f.check('recording').ready,false);
  assert.ok(f.check('recording').blockers.some(item=>item.detail==='progression.stopsAfter'));
  f.brief.progression.stopsAfter='Explain amount and mass';f.brief.progression.nextLesson='';f.save();
  assert.ok(f.check('recording').blockers.some(item=>item.detail==='progression.nextLesson'));
});

test('existing version-one briefs retain their previous review contract', () => {
  const f=fixture();f.readyToRecord();f.brief.schemaVersion=1;delete f.brief.progression;f.save();
  assert.equal(f.check('recording').ready,true);
});

test('scene omissions and changed narration invalidate the selected brief', () => {
  const f = fixture(); f.readyToRecord();
  f.brief.scenes = []; f.save();
  assert.ok(f.check('recording').blockers.some(item => item.code === 'BRIEF_SCENE_COVERAGE'));
  f.lesson.scenes[0].voiceover.text = 'Changed words'; f.put('lesson.json', JSON.stringify(f.lesson));
  assert.ok(f.check('draft').blockers.some(item => item.code === 'BRIEF_LESSON_CHANGED'));
});

test('source/still inspection cannot satisfy exact voiced motion preview', () => {
  const f = fixture(); f.readyToExport();
  for (const mode of ['source', 'still']) {
    f.brief.voicedPreview.mode = mode; f.save();
    assert.ok(f.check('export').blockers.some(item => item.code === 'BRIEF_PREVIEW_MODE'));
  }
});

test('current voiced inputs permit full export while human listening remains explicitly pending', () => {
  const f = fixture(); f.readyToExport();
  const report = f.check('export');
  assert.equal(report.ready, true, JSON.stringify(report));
  assert.ok(report.pending.some(item => item.detail.includes('Human listening')));
  assert.equal(f.check('release').ready, false);
});

test('changed selected audio and edited evidence invalidate preview approval', () => {
  const f = fixture(); f.readyToExport();
  f.put('public/audio/selected.mp3', 'A different take');
  assert.ok(f.check('export').blockers.some(item => item.code === 'BRIEF_PREVIEW_CHANGED' || item.code === 'BRIEF_PREVIEW_AUDIO_MISMATCH'));
  f.put('evidence.md', 'Changed observations');
  assert.ok(f.check('export').blockers.some(item => item.code === 'BRIEF_EVIDENCE_CHANGED'));
});

test('human-listening declarations require their own scope and named evidence', () => {
  const f = fixture(); f.readyToExport();
  Object.assign(f.brief.voicedPreview.humanListening, {status: 'pass', reviewer: 'Fixture listener', mode: 'ui-playback', evidence: f.evidence}); f.save();
  assert.ok(f.check('release').blockers.some(item => item.code === 'BRIEF_LISTENING_MODE'));
  f.brief.voicedPreview.humanListening.mode = 'human-listening'; f.save();
  assert.equal(f.check('release').ready, true);
});

test('brief path escapes fail without reading arbitrary files', () => {
  const f = fixture();
  f.brief.source.lessonPath = '../escape.json'; f.save();
  assert.equal(f.check('draft').ready, false);
});

test('full render rejects missing and pending briefs before media work', () => {
  const f = fixture();
  assert.throws(() => prepareRenderProductionBrief(f.root, {lessonPath: 'lesson.json'}), /Full render requires teachingBriefPath/);
  assert.throws(() => prepareRenderProductionBrief(f.root, {lessonPath: 'lesson.json', teachingBriefPath: 'lesson.production-brief.json'}), /not ready/);
  assert.throws(() => prepareRenderProductionBrief(f.root, {lessonPath: 'lesson.json', frameRange: null}), /Invalid frame range/);
});

test('pending pilots omit mutable brief while full exports freeze its current hash', () => {
  const f = fixture();
  const config = {lessonPath: 'lesson.json', teachingBriefPath: 'lesson.production-brief.json', inputs: ['lesson.production-brief.json', 'evidence.md']};
  const pilot = prepareRenderProductionBrief(f.root, {...config, frameRange: [0, 29]});
  assert.deepEqual(pilot.inputs, ['evidence.md']);
  assert.equal(pilot.teachingBrief, undefined);
  f.readyToExport();
  const full = prepareRenderProductionBrief(f.root, config);
  assert.equal(full.inputs.filter(input => input === config.teachingBriefPath).length, 1);
  assert.equal(full.teachingBrief.path, config.teachingBriefPath);
  assert.equal(full.teachingBrief.sha256, sha256(readFileSync(path.join(f.root, config.teachingBriefPath))));
  assert.ok(full.teachingBrief.pending.some(item => item.detail.includes('Human listening')));
  const snapshot = captureRelease(f.root, {lessonPath: 'lesson.json', renderConfig: 'render.json', inputs: full.inputs});
  assert.ok(snapshot.files.some(file => file.path === config.teachingBriefPath && file.sha256 === full.teachingBrief.sha256));
});

test('full render rejects a voiced-preview brief after selected audio drifts', () => {
  const f = fixture(); f.readyToExport();
  f.put('public/audio/selected.mp3', 'Changed selected take');
  assert.throws(() => prepareRenderProductionBrief(f.root, {lessonPath: 'lesson.json', teachingBriefPath: 'lesson.production-brief.json'}), /BRIEF_PREVIEW_CHANGED|BRIEF_PREVIEW_AUDIO_MISMATCH/);
});
