import {readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync} from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {bundle} from '@remotion/bundler';
import {selectComposition, renderMedia} from '@remotion/renderer';
import {captureRelease, verifyRelease} from './lib/release-snapshot.mjs';
import {sha256} from './lib/playback-assembly.mjs';
import {lessonCaptionCues, toSrt, toVtt} from './lib/caption-timeline.mjs';

const [configPath, ...args] = process.argv.slice(2);
const outputDir = args.find(a => a.startsWith('--output-dir='))?.slice('--output-dir='.length);
if (!configPath || !outputDir || existsSync(outputDir)) throw new Error('Usage: node scripts/render-release.mjs config.json --output-dir=new-directory');
const config = JSON.parse(readFileSync(configPath, 'utf8'));
const allowed = ['lessonPath', 'entryPoint', 'compositionId', 'codec', 'scale', 'crf', 'frameRange', 'inputs'];
if (Object.keys(config).some(k => !allowed.includes(k))) throw new Error('Unsupported render config field.');
if (config.entryPoint !== 'src/dev/release-entry.tsx' || config.compositionId !== 'Lesson-release' || config.codec !== 'h264') throw new Error('Use the Lesson-release entry point and h264 codec.');
const scale = config.scale ?? 1, crf = config.crf ?? 18;
if (!Number.isFinite(scale) || scale <= 0 || scale > 1 || !Number.isInteger(crf) || crf < 0 || crf > 51) throw new Error('Invalid scale/crf.');
const root = process.cwd();
const options = {lessonPath: config.lessonPath, renderConfig: configPath, inputs: config.inputs ?? [], artifacts: []};
const before = captureRelease(root, options);
if (before.missingRequired.length) throw new Error('Missing dependencies: ' + before.missingRequired.join(', '));
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
await renderMedia({serveUrl, composition, inputProps, codec: 'h264', outputLocation: path.resolve(videoFile), scale, crf,
  frameRange: config.frameRange, concurrency: 1, timeoutInMilliseconds: 60000, overwrite: false, enforceAudioTrack: true});
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
    concurrency: 1, fps: composition.fps, width: composition.width, height: composition.height, frameRange: [firstFrame, lastFrame]},
  inputDriftCheckPassed: true, status: config.frameRange ? 'preview-unreviewed' : 'full-render-unreviewed'};
const recordFile = path.join(outputDir, 'render-record.json');
writeFileSync(recordFile, JSON.stringify(record, null, 2) + '\n');
const snapshot = captureRelease(root, {...options, artifacts: [videoFile, srtFile, vttFile, recordFile]});
const finalCheck = verifyRelease(root, before);
if (!finalCheck.valid) throw new Error('Inputs changed while packaging; no release snapshot written: ' + JSON.stringify(finalCheck));
writeFileSync(path.join(outputDir, 'release.snapshot.json'), JSON.stringify(snapshot, null, 2) + '\n');
console.log(`Rendered ${lastFrame - firstFrame + 1} frames with matching captions and dependency record. Playback review pending.`);
