import assert from 'node:assert/strict';
import {readFileSync, writeFileSync, mkdirSync, existsSync} from 'node:fs';
import path from 'node:path';
import {sha256, resolvePlayback, writePlayback} from '../../../scripts/lib/playback-assembly.mjs';
import {checkProductionBrief} from '../../../scripts/lib/production-brief.mjs';
import {buildSpeechRequest} from '../../../scripts/elevenlabs-request.mjs';
const args = process.argv.slice(2);
const configPath = args.find(a => !a.startsWith('--'));
const modes = ['--validate-plan', '--dry-run', '--assemble'].filter(mode => args.includes(mode));
if (!configPath || modes.length !== 1) throw Error('Use assemble-selected.mjs config.json with exactly one of --validate-plan, --dry-run or --assemble.');
const load = file => JSON.parse(readFileSync(file));
const config = load(configPath);
assert.equal(sha256(readFileSync(config.lessonPath)), config.lessonSha256, 'Frozen source changed');
assert.equal(sha256(readFileSync(config.manifestPath)), config.manifestSha256, 'Recording manifest changed');
assert.equal(sha256(readFileSync(config.playbackPlanPath)), config.playbackPlanSha256, 'Playback plan changed');
const recordingGate = checkProductionBrief(process.cwd(), config.teachingBriefPath, {stage: 'recording'});
assert(recordingGate.ready, 'Recording-stage brief is blocked');
const lesson = load(config.lessonPath), manifest = load(config.manifestPath), plan = load(config.playbackPlanPath);
assert.equal(sha256(readFileSync(manifest.recordingBrief.path)), manifest.recordingBrief.sha256, 'Recording-stage brief changed since manifest preparation');
assert.equal(manifest.lessonSha256, config.lessonSha256);
assert.equal(plan.lessonSha256, config.lessonSha256);
assert.equal(sha256(readFileSync(manifest.requestOptions.path)), manifest.requestOptions.sha256, 'Request options changed');
const options = load(manifest.requestOptions.path);
const spoken = lesson.scenes.filter(s => s.voiceover?.text?.trim());
const silent = lesson.scenes.filter(s => !s.voiceover?.text?.trim());
assert.deepEqual(plan.silentScenes.map(s => s.sceneId), silent.map(s => s.id));
assert.deepEqual(plan.playback.map(p => p.sceneId), spoken.map(s => s.id));
const segmentMap = new Map(manifest.scenes.map(s => [s.id, s]));
assert.equal(segmentMap.size, manifest.scenes.length);
for (const row of plan.playback) {
  const segments = row.items.filter(i => i.kind === 'audio').map(i => segmentMap.get(i.segmentId));
  const scene = spoken.find(s => s.id === row.sceneId);
  assert.equal(segments.map(s => s.text).join(' '), scene.voiceover.text);
  for (const seg of segments) {
    assert.equal(seg.parentSceneId, row.sceneId);
    assert.equal(sha256(seg.text), seg.textSha256);
    assert.equal(seg.hash, seg.textSha256.slice(0, 12));
    buildSpeechRequest({text: seg.text, voiceId: manifest.voiceSelection.voiceId, modelId: manifest.voiceSelection.modelId, requestOptions: options});
  }
}
const missing = manifest.scenes.flatMap(s => [s.audioFile, s.alignmentFile, s.generationFile]).filter(f => !existsSync(f));
if (modes[0] === '--validate-plan') {
  console.log(JSON.stringify({mode: 'source-and-plan-validation', sourceReady: recordingGate.ready, lessonSha256: config.lessonSha256,
    segments: manifest.scenes.length, silentTitlesPreserved: silent.map(s => s.id), missingMediaSidecars: missing.length,
    generationPerformed: false, assemblyPerformed: false, measuredCueReconciliation: 'pending'}, null, 2));
  process.exit(0);
}
if (missing.length) throw Error('New recordings and their sidecars are still missing. Generate only after root visual review, then rerun assembly dry-run.');
const narratedOnly = {...lesson, scenes: spoken};
// The shared resolver remains authoritative for PCM, alignment, provenance
// and frame-exact silence. Silent titles are restored without adding speech.
const result = resolvePlayback({lesson: narratedOnly, manifest, plan});
const assembledMap = new Map(result.lesson.scenes.map(s => [s.id, s]));
result.lesson.scenes = lesson.scenes.map(s => assembledMap.get(s.id) ?? structuredClone(s));
const report = {schemaVersion: 1, sourceLessonPath: config.lessonPath, sourceLessonSha256: config.lessonSha256,
  manifestPath: config.manifestPath, manifestSha256: config.manifestSha256,
  mode: modes[0] === '--dry-run' ? 'measured-assembly-dry-run' : 'assembled-candidate',
  silentTitlesPreserved: silent.map(s => ({sceneId: s.id, durationInFrames: s.durationInFrames})),
  scenes: result.scenes.map(s => ({sceneId: s.sceneId, audioFile: s.audioFile, provenance: s.provenance})),
  limitation: 'Source spoken words and silent titles are preserved. All previous estimated display/diagram/stage cues still require measured reconciliation before exact voiced preview. No playback or listening approval.'};
if (modes[0] === '--assemble') {
  for (const file of [config.candidateLessonPath, config.candidatePropsPath, config.assemblyReportPath]) assert(!existsSync(file), 'Preserve existing candidate: ' + file);
  writePlayback(result);
  for (const file of [config.candidateLessonPath, config.candidatePropsPath, config.assemblyReportPath]) mkdirSync(path.dirname(file), {recursive: true});
  writeFileSync(config.candidateLessonPath, JSON.stringify(result.lesson, null, 2) + '\n', {flag: 'wx'});
  writeFileSync(config.candidatePropsPath, JSON.stringify({lesson: result.lesson}, null, 2) + '\n', {flag: 'wx'});
  writeFileSync(config.assemblyReportPath, JSON.stringify(report, null, 2) + '\n', {flag: 'wx'});
}
console.log(JSON.stringify(report, null, 2));
