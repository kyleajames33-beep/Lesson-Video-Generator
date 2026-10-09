import {readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync} from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {bundle} from '@remotion/bundler';
import {selectComposition, renderMedia} from '@remotion/renderer';
import {captureRelease, verifyRelease} from './lib/release-snapshot.mjs';
import {sha256} from './lib/playback-assembly.mjs';
import {lessonCaptionCues, toSrt, toVtt} from './lib/caption-timeline.mjs';
import {normalizePilotAudio} from './normalize-pilot-audio.mjs';
import {assembleTimelineNarration} from './lib/timeline-narration.mjs';
import {runMedia} from './lib/media-tools.mjs';
import {prepareRenderProductionBrief} from './lib/production-brief.mjs';

const [configPath, ...args] = process.argv.slice(2);
const outputDir = args.find(a => a.startsWith('--output-dir='))?.slice('--output-dir='.length);
if (!configPath || !outputDir || existsSync(outputDir)) throw new Error('Usage: node scripts/render-release.mjs config.json --output-dir=new-directory');
const config = JSON.parse(readFileSync(configPath, 'utf8'));
const allowed = ['lessonPath', 'entryPoint', 'compositionId', 'codec', 'scale', 'crf', 'frameRange', 'inputs', 'normalizeAudio', 'concurrency', 'audioMode', 'teachingBriefPath'];
if (Object.keys(config).some(k => !allowed.includes(k))) throw new Error('Unsupported render config field.');
if (config.normalizeAudio !== undefined && typeof config.normalizeAudio !== 'boolean') throw new Error('normalizeAudio must be a boolean.');
if (config.audioMode !== undefined && config.audioMode !== 'alignedPcm') throw new Error('Unsupported audioMode.');
if (config.entryPoint !== 'src/dev/release-entry.tsx' || config.compositionId !== 'Lesson-release' || config.codec !== 'h264') throw new Error('Use the Lesson-release entry point and h264 codec.');
const scale = config.scale ?? 1, crf = config.crf ?? 18;
const concurrency = config.concurrency ?? 1;
if (!Number.isInteger(concurrency) || concurrency < 1 || concurrency > 8) throw new Error('Render concurrency must be an integer from 1 to 8.');
if (!Number.isFinite(scale) || scale <= 0 || scale > 1 || !Number.isInteger(crf) || crf < 0 || crf > 51) throw new Error('Invalid scale/crf.');
const root = process.cwd();
const briefPreparation = prepareRenderProductionBrief(root, config);
const options = {lessonPath: config.lessonPath, renderConfig: configPath, inputs: briefPreparation.inputs, artifacts: []};
const before = captureRelease(root, options);
if (before.missingRequired.length) throw new Error('Missing dependencies: ' + before.missingRequired.join(', '));
if (briefPreparation.teachingBrief && !before.files.some(file => file.path === briefPreparation.teachingBrief.path && file.sha256 === briefPreparation.teachingBrief.sha256)) throw new Error('Production brief changed before inputs were frozen. Recheck the exact voiced preview.');
const preflight = spawnSync(process.execPath, ['scripts/release-preflight.mjs', config.lessonPath], {encoding: 'utf8', windowsHide: true});
if (preflight.status !== 0) throw new Error('Preflight failed:\n' + preflight.stdout + preflight.stderr);
const lesson = JSON.parse(readFileSync(config.lessonPath, 'utf8'));
if (before.files.find(f => f.roles.includes('lesson')).sha256 !== sha256(readFileSync(config.lessonPath))) throw new Error('Lesson changed before rendering.');
const {cues, warnings} = lessonCaptionCues(lesson);
if (warnings.length) throw new Error('Incomplete caption coverage: ' + warnings.join('; '));
const totalFrames = before.timeline.durationInFrames;
if (config.frameRange && (!Array.isArray(config.frameRange) || config.frameRange.length !== 2 || config.frameRange.some(n => !Number.isInteger(n)) || config.frameRange[0] < 0 || config.frameRange[1] < config.frameRange[0] || config.frameRange[1] >= totalFrames)) throw new Error('Invalid frame range.');
mkdirSync(outputDir, {recursive: true});
writeFileSync(path.join(outputDir, 'inputs.snapshot.json'), JSON.stringify(before, null, 2) + '\n');
const publicDir = path.resolve(outputDir, 'public');
mkdirSync(publicDir, {recursive: true});
for (const file of before.files.filter(f => f.path.startsWith('public/') && f.sha256)) {
  const destination = path.join(publicDir, file.path.slice(7));
  mkdirSync(path.dirname(destination), {recursive: true}); copyFileSync(file.path, destination);
}
console.log('Bundling selected release dependencies.');
const serveUrl = await bundle({entryPoint: path.resolve(config.entryPoint), publicDir, outDir: path.resolve(outputDir, 'bundle')});
const inputProps = {lesson};
const composition = await selectComposition({serveUrl, id: config.compositionId, inputProps});
if (composition.durationInFrames !== totalFrames || composition.fps !== before.timeline.fps) throw new Error('Rendered composition differs from shared timeline.');
const videoFile = path.join(outputDir, 'video.mp4');
const rawVideoFile = config.normalizeAudio ? path.join(outputDir, 'video-unmastered.mp4') : videoFile;
const silentVideoFile = config.audioMode === 'alignedPcm' ? path.join(outputDir, 'video-silent.mp4') : undefined;
const timelineAudio = silentVideoFile ? assembleTimelineNarration(lesson, {frameRange: config.frameRange}) : undefined;
let lastProgress = -1;
await renderMedia({serveUrl, composition, inputProps, codec: 'h264', outputLocation: path.resolve(silentVideoFile ?? rawVideoFile), scale, crf,
  frameRange: config.frameRange, concurrency, timeoutInMilliseconds: 60000, overwrite: false, enforceAudioTrack: !silentVideoFile, muted: Boolean(silentVideoFile),
  onProgress: ({renderedFrames}) => {
    const bucket = Math.floor(renderedFrames / (config.frameRange ? config.frameRange[1] - config.frameRange[0] + 1 : totalFrames) * 20);
    if (bucket > lastProgress) {lastProgress = bucket; console.log(`Rendering: ${renderedFrames} frames (${Math.min(100,bucket * 5)}%).`);}
  }});
if (timelineAudio) {
  const wavFile = path.join(outputDir, 'timeline-audio.wav');
  writeFileSync(wavFile, timelineAudio.wav);
  writeFileSync(path.join(outputDir, 'timeline-audio.json'), JSON.stringify(timelineAudio.record, null, 2) + '\n');
  runMedia('ffmpeg', ['-v', 'error', '-i', silentVideoFile, '-i', wavFile, '-map', '0:v:0', '-map', '1:a:0',
    '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-ac', '2', '-ar', '48000', '-t',
    String((timelineAudio.record.frameRange[1] - timelineAudio.record.frameRange[0] + 1) / lesson.fps), rawVideoFile]);
}
const mastering = config.normalizeAudio ? normalizePilotAudio(rawVideoFile, videoFile) : undefined;
if (mastering && (Math.abs(Number(mastering.after.input_i) - (-18)) > 1 || Number(mastering.after.input_tp) > -1.5)) throw new Error('Mastered audio is outside the listening loudness targets.');
const stable = verifyRelease(root, before);
if (!stable.valid) throw new Error('Inputs changed during render; export is unverified: ' + JSON.stringify(stable));
const firstFrame = config.frameRange?.[0] ?? 0, lastFrame = config.frameRange?.[1] ?? totalFrames - 1;
const startMs = firstFrame / composition.fps * 1000, endMs = (lastFrame + 1) / composition.fps * 1000;
const exportCues = cues.filter(c => c.endMs > startMs && c.startMs < endMs).map(c => ({...c,
  startMs: Math.max(c.startMs, startMs) - startMs, endMs: Math.min(c.endMs, endMs) - startMs}));
const srtFile = path.join(outputDir, 'captions.srt'), vttFile = path.join(outputDir, 'captions.vtt');
writeFileSync(srtFile, toSrt(exportCues)); writeFileSync(vttFile, toVtt(exportCues));
const record = {schemaVersion: 1, inputPackageSha256: before.packageSha256,
  videoSha256: sha256(readFileSync(videoFile)), renderedAt: new Date().toISOString(),
  render: {entryPoint: config.entryPoint, compositionId: config.compositionId, codec: 'h264', scale, crf,
    concurrency, fps: composition.fps, width: composition.width, height: composition.height, frameRange: [firstFrame, lastFrame]},
  inputDriftCheckPassed: true, audioMastering: mastering ? {targetIntegratedLUFS:-18,targetTruePeakDbTP:-1.5,measured:mastering.after,sourceRecordingsModified:false} : undefined,
  audioAssembly: timelineAudio?.record,
  teachingBrief: briefPreparation.teachingBrief,
  status: config.frameRange ? 'preview-unreviewed' : 'full-render-unreviewed'};
const recordFile = path.join(outputDir, 'render-record.json');
writeFileSync(recordFile, JSON.stringify(record, null, 2) + '\n');
const snapshot = captureRelease(root, {...options, artifacts: [videoFile, srtFile, vttFile, recordFile,
  ...(mastering ? [rawVideoFile, videoFile.replace(/\.mp4$/i,'.audio-review.json')] : []),
  ...(timelineAudio ? [silentVideoFile, path.join(outputDir, 'timeline-audio.wav'), path.join(outputDir, 'timeline-audio.json')] : [])]});
const finalCheck = verifyRelease(root, before);
if (!finalCheck.valid) throw new Error('Inputs changed while packaging; no release snapshot written: ' + JSON.stringify(finalCheck));
writeFileSync(path.join(outputDir, 'release.snapshot.json'), JSON.stringify(snapshot, null, 2) + '\n');
console.log(`Rendered ${lastFrame - firstFrame + 1} frames with matching captions and dependency record. Playback review pending.`);
