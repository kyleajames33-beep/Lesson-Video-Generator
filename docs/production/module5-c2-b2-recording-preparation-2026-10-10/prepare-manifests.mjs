import assert from 'node:assert/strict';
import {readFileSync, writeFileSync, existsSync} from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {buildSpeechRequest} from '../../../scripts/elevenlabs-request.mjs';
import {checkProductionBrief} from '../../../scripts/lib/production-brief.mjs';
const output = path.dirname(fileURLToPath(import.meta.url));
const base = path.relative(process.cwd(), output).replaceAll('\\', '/');
const hash = b => createHash('sha256').update(b).digest('hex');
const voiceSelection = {voiceName: 'Simon - Australian male', voiceId: 'cOEV2DrZBBGNLpE74kQu', modelId: 'eleven_v4',
  requiredAccent: 'Australian', selectionBasis: 'Established selected narrator and conversational v4 settings. Fresh takes require actual listening; voice selection is not take approval.'};
const requestOptions = {stability: 0.35, similarity: 0.75};
const lessons = [
  {key: 'chemistry-c2', short: 'c2', subject: 'Chemistry', sha256: 'ce66abda591b0dbf8bff7371cb87d43fb0f6fce5bd0c819e80d21796248dac90',
    dir: 'docs/production/drafts/module5-c2-selected-2026-10-10', segmentPlan: 'narration-plan.json', responseSeconds: 10},
  {key: 'biology-b2', short: 'b2', subject: 'Biology', sha256: 'a9caaa09366537f56d1ea60cee0184313a62a421b9b64e76b023ae5c112ca8af',
    dir: 'docs/production/drafts/module5-b2-selected-2026-10-10', segmentPlan: 'recording-segments.json', responseSeconds: 12}
];
function write(name, value) {
  writeFileSync(path.join(output, name), JSON.stringify(value, null, 2) + '\n', {flag: 'wx'});
}
write('request-options.json', requestOptions);
const packet = [];
for (const task of lessons) {
  const lessonPath = task.dir + '/lesson.json';
  const bytes = readFileSync(lessonPath), lesson = JSON.parse(bytes);
  assert.equal(hash(bytes), task.sha256, 'Frozen source drift: ' + task.key);
  const segmentPath = task.dir + '/' + task.segmentPlan;
  const segmentBytes = readFileSync(segmentPath), segmentPlan = JSON.parse(segmentBytes);
  assert.equal(segmentPlan.source.lessonSha256 ?? segmentPlan.source.sha256, task.sha256);
  const briefPath = task.dir + '/production-brief.json';
  const recordingGate = checkProductionBrief(process.cwd(), briefPath, {stage: 'recording'});
  assert(recordingGate.ready, 'Recording-stage brief blocked: ' + task.key);
  const compositionId = `${task.subject}-Y12-M5-${task.short.toUpperCase()}-selected-2026-10-10-take01`;
  const sceneIds = new Set(lesson.scenes.map(s => s.id));
  const segments = segmentPlan.segments.map(s => {
    assert(sceneIds.has(s.sceneId));
    assert(!s.text.includes('\u2014'));
    const textSha256 = hash(s.text);
    assert(!s.textSha256 || s.textSha256 === textSha256);
    const request = buildSpeechRequest({text: s.text, voiceId: voiceSelection.voiceId, modelId: voiceSelection.modelId, requestOptions});
    assert(request.endpoint.endsWith('/text-to-dialogue/with-timestamps'));
    const audioFile = `public/audio/${compositionId}/${s.id}.${textSha256.slice(0, 12)}.mp3`;
    assert(!existsSync(audioFile), 'Proposed take path already exists; choose a new take explicitly');
    return {id: s.id, parentSceneId: s.sceneId, role: s.role, text: s.text, textSha256,
      hash: textSha256.slice(0, 12), characterCount: s.text.length, audioFile,
      alignmentFile: audioFile.replace(/\.mp3$/, '.alignment.json'), generationFile: audioFile.replace(/\.mp3$/, '.generation.json'),
      plannedRequestSha256: hash(JSON.stringify(request.body)), audioSha256: null, status: 'planned-new-take-not-generated'};
  });
  const playback = [], silentScenes = [];
  for (const scene of lesson.scenes) {
    const related = segments.filter(s => s.parentSceneId === scene.id);
    if (!scene.voiceover?.text) {
      assert.equal(related.length, 0);
      silentScenes.push({sceneId: scene.id, durationInFrames: scene.durationInFrames, reason: 'Existing silent title; retain unchanged without inventing speech.'});
      continue;
    }
    assert.equal(related.map(s => s.text).join(' '), scene.voiceover.text, 'Segment plan changes accepted speech: ' + scene.id);
    const items = [];
    for (const [i, seg] of related.entries()) {
      items.push({kind: 'audio', segmentId: seg.id, audioFile: seg.audioFile});
      if (i < related.length - 1) {
        assert(seg.role === 'prompt' && related[i + 1].role === 'feedback', 'Only planned response prompts are split');
        items.push({kind: 'silence', seconds: task.responseSeconds, frames: task.responseSeconds * lesson.fps});
      }
    }
    playback.push({sceneId: scene.id, items});
  }
  const manifest = {schemaVersion: 1, compositionId, lessonPath, lessonSha256: task.sha256, fps: lesson.fps,
    status: 'recording-ready-source/dry-run-preparation; generation waits for root visual review', voiceSelection,
    sourceSegmentPlan: {path: segmentPath, sha256: hash(segmentBytes)},
    recordingBrief: {path: briefPath, sha256: hash(readFileSync(briefPath)), gateReadyAtPreparation: recordingGate.ready},
    requestOptions: {path: base + '/request-options.json', sha256: hash(readFileSync(path.join(output, 'request-options.json')))},
    scenes: segments, silentScenes, limitations: ['No media hashes exist before new takes are generated.', 'Do not attach historical recordings to these words.', 'All scene/reveal estimates require measured cue reconciliation.']};
  const manifestName = task.key + '.voice-manifest.json';
  write(manifestName, manifest);
  const planName = task.key + '.playback-plan.json';
  write(planName, {schemaVersion: 1, lessonPath, lessonSha256: task.sha256, playback, silentScenes,
    contract: 'Use assemble-selected.mjs. Direct generic assembly expects every scene narrated and cannot accept the retained silent title.',
    responseSilenceStatus: 'Exact frame/sample insertion planned; final prompt speech, first feedback sound and first answer exposure must be measured after recording.'});
  const candidateDir = `out/prototypes/module5-${task.short}-voiced-2026-10-10`;
  const config = {schemaVersion: 1, lessonPath, lessonSha256: task.sha256, teachingBriefPath: briefPath,
    manifestPath: base + '/' + manifestName, manifestSha256: hash(readFileSync(path.join(output, manifestName))),
    playbackPlanPath: base + '/' + planName, playbackPlanSha256: hash(readFileSync(path.join(output, planName))),
    candidateLessonPath: candidateDir + '/assembled.lesson.json', candidatePropsPath: candidateDir + '/assembled.remotion-props.json',
    assemblyReportPath: candidateDir + '/assembly-record.json',
    immutableTitlePolicy: 'Keep existing silent title duration and copy unchanged. Assemble narrated scenes only, then restore the original scene order.',
    timingStatus: 'Assembly candidate is not voiced-preview approval. Existing estimated reveals are retained only for root reconciliation.'};
  write(task.key + '.assembly-config.json', config);
  write(task.key + '.cue-reconciliation.json', {source: {lessonPath, lessonSha256: task.sha256}, status: 'pending-measured-audio',
    units: {bulletAt: 'seconds from scene start', revealDelays: 'scene-local frames', diagramProps: 'component-specific scene-local cue frames', lineAts: 'scene-local frames'},
    scenes: lesson.scenes.map(s => ({sceneId: s.id, currentEstimatedDurationInFrames: s.durationInFrames,
      currentEstimatedReveals: s.revealDelays ?? {}, currentBulletCuesSeconds: s.bullets?.filter(b => typeof b === 'object').map(b => ({text: b.text, at: b.at})) ?? [],
      currentDiagramProps: s.diagram?.props ?? {}, currentStageLineAts: s.calculationPresentation?.stages?.map(stage => ({label: stage.label, lineAts: stage.lineAts ?? []})) ?? [],
      requiredAction: s.voiceover?.text ? 'Resolve narration onset, complete scene duration, all meaningful reveals and reading holds against selected alignment; no word-count estimate passes timing.' : 'Retain silent title and its existing transition overlap.'}))});
  packet.push({key: task.key, source: {lessonPath, lessonSha256: task.sha256}, segmentPlanSha256: hash(segmentBytes),
    manifest: {path: base + '/' + manifestName, sha256: config.manifestSha256},
    segments: segments.length, spokenCharacters: segments.reduce((n, s) => n + s.characterCount, 0), maximumSegmentCharacters: Math.max(...segments.map(s => s.characterCount)),
    responseSilenceSeconds: task.responseSeconds, recordingGate, plannedAudioPathsAllAbsent: true,
    textHashes: segments.map(s => ({id: s.id, parentSceneId: s.parentSceneId, sha256: s.textSha256}))});
}
write('preparation-record.json', {author: 'Sol 6.1 recording-preparation author', date: '2026-10-10', voiceSelection,
  requestOptions, settingsBasis: ['out/prototypes/limiting-conversational-2026-10-09/request-options.json', 'out/prototypes/mole-ratios-voiced-2026-10-09/request-options.json'],
  approvedControls: 'Existing v4 timestamped single-narrator dialogue endpoint; settings.stability and settings.similarity. No v4 speed, style, speaker boost or SSML is supplied.',
  packages: packet, paidRequestsSent: 0, audioCopied: 0, humanListening: 'pending', limitations: ['Dry-run request validation is not generated media or pronunciation evidence.', 'Frozen sources and their briefs were read only.']});
console.log(JSON.stringify(packet.map(({key, source, segments, maximumSegmentCharacters, responseSilenceSeconds}) => ({key, source, segments, maximumSegmentCharacters, responseSilenceSeconds})), null, 2));
