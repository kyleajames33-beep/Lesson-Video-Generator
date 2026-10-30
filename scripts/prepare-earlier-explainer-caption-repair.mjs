// Prepare additive earlier-wave tracks only for diagnosed caption timeline cases.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {spawnSync, execFileSync} from 'node:child_process';
import {explainerCaptionCues, toSrt, toVtt} from './lib/explainer-captions.mjs';
import {lessonCaptionCues} from './lib/caption-timeline.mjs';
const output = process.argv[2] || 'out/caption-repairs/earlier-waves-2026-10-25';
const only = process.argv[3]?.startsWith('--only=') ? process.argv[3].slice(7) : null;
if (process.argv[3] && !only) throw new Error('Optional third argument must be --only=<lesson-id>.');
if (fs.existsSync(output)) throw new Error('Output exists. Choose a new directory.');
const read = p => JSON.parse(fs.readFileSync(p, 'utf8').replace(/^\uFEFF/, ''));
const hash = b => crypto.createHash('sha256').update(b).digest('hex');
const blocks = text => text.replace(/\r\n/g, '\n').trim().split(/\n\s*\n/).map(b => b.split('\n'));
const equivalent = (a, b) => JSON.stringify(blocks(a).map(x => [x[1], x.slice(2).join(' ').replace(/\s+/g, ' ').trim()])) === JSON.stringify(blocks(b).map(x => [x[1], x.slice(2).join(' ').replace(/\s+/g, ' ').trim()]));
const ffmpeg = path.resolve('node_modules/@remotion/compositor-win32-x64-msvc/ffmpeg.exe');
const sourceInputs = [], chosen = new Map(), excluded = [];
for (let wave = 1; wave <= 4; wave++) {
  const file = `docs/production/claude-pm/youtube/wave${wave}-uploads.json`;
  sourceInputs.push({path: file, sha256: hash(fs.readFileSync(file))});
  for (const v of read(file).videos) {
    if (v.visibility !== 'Public' || (v.status && v.status !== 'published')) {excluded.push({videoId: v.videoId, status: v.status, visibility: v.visibility}); continue;}
    const lessonId = v.lessonId ?? path.basename(path.dirname(v.file)).replace(/^Explainer-/, '');
    if (!/^[a-z0-9-]+$/.test(lessonId)) throw new Error('Invalid lesson ID.');
    chosen.set(v.videoId, {...v, lessonId, status: 'published', sourceUploadPath: file});
  }
}
const prepared = [], alreadyCorrect = [], blocked = [];
const selectedRecords = [...chosen.values()].filter(v => !only || v.lessonId === only);
if (!selectedRecords.length) throw new Error('No public records match the requested lesson.');
for (const v of selectedRecords) {
  const lessonPath = path.join(path.dirname(v.captionFile), 'lesson.json');
  const base = {lessonId: v.lessonId, videoId: v.videoId, title: v.title, sourceUploadPath: v.sourceUploadPath, videoPath: v.file, recordedVideoSha256: v.sha256, lessonPath, originalCaptionPath: v.captionFile};
  try {
    const original = fs.readFileSync(v.captionFile), lessonBytes = fs.readFileSync(lessonPath), lesson = read(lessonPath);
    const localCaptionHash = hash(original);
    if (v.captionSha256 && localCaptionHash !== v.captionSha256.toLowerCase()) throw new Error('Recorded caption hash differs from local file.');
    const fixed = explainerCaptionCues(lesson);
    const originalText = original.toString('utf8').replace(/\r\n/g, '\n');
    if (equivalent(originalText, toSrt(fixed.cues))) {alreadyCorrect.push({...base, captionSha256: localCaptionHash}); continue;}
    let diagnosis = 'legacy-transition-overlap', historicalSource = null;
    if (!equivalent(originalText, toSrt(lessonCaptionCues(lesson).cues))) {
      if (!['bio-m5-b03a', 'chem-m5-c04b'].includes(v.lessonId)) throw new Error('Current SRT does not reproduce the diagnosed legacy timeline.');
      const commit = execFileSync('git', ['rev-parse', 'e05a3dc'], {encoding: 'utf8'}).trim();
      const bytes = execFileSync('git', ['show', `${commit}:${lessonPath.replaceAll('\\', '/')}`]);
      const old = JSON.parse(bytes.toString('utf8'));
      const speech = l => l.scenes.map(s => ({id: s.id, captions: s.captions, voiceover: s.voiceover}));
      if (JSON.stringify(speech(old)) !== JSON.stringify(speech(lesson)) || !equivalent(originalText, toSrt(lessonCaptionCues(old).cues))) throw new Error('Historical source does not prove the caption timing diagnosis.');
      historicalSource = {commit, lessonSha256: hash(bytes)};
      diagnosis = 'legacy-transition-overlap-and-historical-thinking-hold';
    }
    const originalBlocks = blocks(originalText);
    if (originalBlocks.length !== fixed.cues.length) throw new Error('Caption grouping changed.');
    const preserved = fixed.cues.map((c, i) => ({...c, text: originalBlocks[i].slice(2).join('\n')}));
    const srt = toSrt(preserved), vtt = toVtt(preserved);
    let videoSeconds = null, timingEvidence = null, videoTailVarianceSeconds = null;
    const localVideoExists = fs.existsSync(v.file);
    if (localVideoExists) {
      const probe = spawnSync(ffmpeg, ['-hide_banner', '-i', v.file], {encoding: 'utf8', maxBuffer: 1024 * 1024});
      const m = (probe.stderr ?? '').match(/Duration: (\d+):(\d+):(\d+\.\d+)/);
      if (!m) throw new Error('Video metadata duration could not be read.');
      videoSeconds = Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]);
      const difference = videoSeconds - fixed.timeline.durationInFrames / 30;
      if (Math.abs(difference) > 0.1) {
        const evidencePath = 'docs/production/claude-pm/checks/codex-interim-b03a-audio-evidence.json';
        if (v.lessonId !== 'bio-m5-b03a' || Math.abs(difference + 0.3) > 0.02 || !fs.existsSync(evidencePath)) throw new Error(`Video duration ${videoSeconds}s differs from current lesson ${(fixed.timeline.durationInFrames / 30).toFixed(3)}s.`);
        const evidenceBytes = fs.readFileSync(evidencePath), evidence = read(evidencePath);
        const refined = evidence.audioAlignment.feedbackOne.highResolutionCrossCorrelation;
        const key = evidence.audioAlignment.keyNotes;
        if (evidence.assets.observedMp4Sha256 !== v.sha256 || hash(fs.readFileSync(v.file)) !== v.sha256 || evidence.assets.measuredLessonSha256 !== hash(lessonBytes) || refined.windows.length < 3 || refined.windows.some(w => w.normalizedCorrelation < 0.85) || Math.abs(refined.lagRelativeToExactSceneStartSeconds) > 0.002 || key.correlationWindow1sAtSchedule < 0.95 || Math.abs(key.bestStartOffsetFromScheduleSeconds) > 0.01 || fixed.cues.some(c => c.endMs > videoSeconds * 1000)) throw new Error('B03a independent audio timing evidence does not clear caption preparation.');
        timingEvidence = {path: evidencePath, sha256: hash(evidenceBytes)};
        videoTailVarianceSeconds = difference;
      }
    }
    prepared.push({srt, vtt, upload: v, record: {...base,
      originalCaptionSha256: localCaptionHash, recordedCaptionSha256: v.captionSha256 ?? null,
      uploadedTrackIdentityVerified: Boolean(v.captionSha256), lessonSha256: hash(lessonBytes),
      localVideoExists, observedVideoSeconds: videoSeconds,
      timingEvidence, videoTailVarianceSeconds,
      reviewNotes: videoTailVarianceSeconds === null ? [] : ['The MP4 ends 0.3 seconds before the source total. Sampled PCM confirms the feedback and notes start on schedule. Check the video ending separately.'],
      reviewStatus: v.captionSha256 && localVideoExists ? 'prepared-playback-pending' : 'source-only-candidate-media-or-upload-caption-identity-pending',
      correctedSrtPath: `${output}/${v.lessonId}.srt`, correctedSrtSha256: hash(srt),
      correctedVttPath: `${output}/${v.lessonId}.vtt`, correctedVttSha256: hash(vtt),
      cueCount: fixed.cues.length, sceneCount: lesson.scenes.length,
      responseHoldCount: lesson.scenes.filter(s => s.responseHold).length,
      durationInFrames: fixed.timeline.durationInFrames, textUnchanged: true, lineBreaksPreserved: true,
      diagnosis, historicalSource, legacyTimelineReproduced: true,
    }});
  } catch (error) {blocked.push({...base, reason: error.message});}
}
const inputPath = `${output}/repair-inputs.json`;
const inputBytes = JSON.stringify({sourceInputs, videos: prepared.map(p => p.upload)}, null, 2) + '\n';
const manifest = {
  date: '2026-10-25', timezone: 'Australia/Sydney',
  status: 'local-repair-candidates-playback-and-provenance-review-pending',
  input: inputPath, inputSha256: hash(inputBytes), sourceInputs,
  includedPublicRecords: selectedRecords.length, totalEarlierPublicRecords: chosen.size, selection: only ?? 'all', excluded, alreadyCorrect, blocked,
  videos: prepared.map(p => p.record),
};
fs.mkdirSync(output, {recursive: true});
fs.writeFileSync(inputPath, inputBytes, {flag: 'wx'});
for (const p of prepared) {
  fs.writeFileSync(p.record.correctedSrtPath, p.srt, {flag: 'wx'});
  fs.writeFileSync(p.record.correctedVttPath, p.vtt, {flag: 'wx'});
}
fs.writeFileSync(`${output}/manifest.json`, JSON.stringify(manifest, null, 2) + '\n', {flag: 'wx'});
console.log(JSON.stringify({included: selectedRecords.length, prepared: prepared.length, alreadyCorrect: alreadyCorrect.length, blocked: blocked.length, sourceOnlyCandidates: prepared.filter(p => !p.record.uploadedTrackIdentityVerified || !p.record.localVideoExists).length, cues: prepared.reduce((n, p) => n + p.record.cueCount, 0), responseHolds: prepared.reduce((n, p) => n + p.record.responseHoldCount, 0)}));
for (const b of blocked) console.log(`${b.lessonId}: ${b.reason}`);
