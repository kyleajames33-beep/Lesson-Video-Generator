import {existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import {alignmentPathFor, lessonCaptionCues} from './lib/caption-timeline.mjs';
import {createHash} from 'node:crypto';
import {getCompositionId} from './lesson-utils.mjs';
import {INTRO_STINGER_FRAMES, TRANSITION_FRAMES} from './_yt-constants.mjs';
import {lessonTimeline} from '../src/lesson/timeline.mjs';
import {verifyAssembly} from './lib/verify-assembly.mjs';
import {verifyRelease} from './lib/release-snapshot.mjs';
import {validateSeriesCircuit, validateShellOccupancy} from '../src/slides/diagrams/physics-models.mjs';
import {validateQuantitativeDiagram} from '../src/slides/diagrams/quantitative-models.mjs';

// Physical media readiness, separate from editorial scores. Does not generate
// audio, alter lessons, or claim that a rendered video has been reviewed.
const args = process.argv.slice(2);
const files = args.includes('--all')
  ? readdirSync('src/data').filter(f => f.endsWith('.json')).sort().map(f => path.join('src/data', f))
  : args.filter(a => !a.startsWith('--'));
if (!files.length) {
  console.error('Usage: node scripts/release-preflight.mjs <lesson.json> [more.json] | --all');
  process.exit(1);
}
const registry = readFileSync('src/assets/index.ts', 'utf8');
const assets = new Map([...registry.matchAll(/(\w+)\s*:\s*staticFile\('([^']+)'\)/g)].map(m => [m[1], m[2]]));
const mediaPath = value => path.resolve('public', value.replace(/^public[\\/]/, '').replace(/\\/g, '/'));
const present = file => existsSync(file) && statSync(file).isFile() && statSync(file).size > 0;
const reports = files.map(file => {
  const lesson = JSON.parse(readFileSync(file, 'utf8'));
  const errors = [], warnings = [];
  const fps = lesson.fps ?? 30;
  const error = (id, code, message) => errors.push({sceneId: id, code, message});
  const warn = (id, code, message) => warnings.push({sceneId: id, code, message});
  const checkMedia = (id, value) => {
    if (!present(mediaPath(value))) error(id, 'MEDIA_MISSING', value);
  };
  let timeline;
  try { timeline = lessonTimeline(lesson); }
  catch (e) { error('lesson', 'TIMELINE_INVALID', e.message); }
  const inspectCopy = (value, field = 'lesson') => {
    if (typeof value === 'string' && value.includes(String.fromCodePoint(0x2014))) error('lesson', 'COPY_PUNCTUATION', field + ' contains U+2014.');
    else if (Array.isArray(value)) value.forEach((item, i) => inspectCopy(item, `${field}[${i}]`));
    else if (value && typeof value === 'object') Object.entries(value).forEach(([key, item]) => inspectCopy(item, field + '.' + key));
  };
  inspectCopy(lesson);
  if ((timeline?.introFrames ?? INTRO_STINGER_FRAMES) > 0) {
    if (lesson.backgroundMusic) checkMedia('intro', lesson.backgroundMusic);
    if (lesson.introVoiceover?.audioFile) checkMedia('intro', lesson.introVoiceover.audioFile);
    else warn('intro', 'INTRO_SILENT', 'Intro has no recorded narration. Review the opening for retention.');
  }
  for (const scene of lesson.scenes) {
    try {
      validateQuantitativeDiagram(scene.diagram);
      if (scene.diagram?.type === 'circuit3d') validateSeriesCircuit(scene.diagram.components, scene.diagram.showCurrent);
      if (scene.diagram?.type === 'orbit') validateShellOccupancy(scene.diagram.electrons);
    } catch (e) { error(scene.id, 'DIAGRAM_MODEL_INVALID', e.message); }
    if (scene.durationInFrames <= TRANSITION_FRAMES) error(scene.id, 'TRANSITION_DURATION', 'Scene must exceed transition duration.');
    if (scene.image) {
      const asset = assets.get(scene.image);
      if (!asset) error(scene.id, 'IMAGE_UNREGISTERED', scene.image);
      else checkMedia(scene.id, asset);
    }
    if (scene.diagram?.type === 'lottie') checkMedia(scene.id, scene.diagram.src);
    const vo = scene.voiceover;
    if (!vo?.text?.trim()) continue;
    if (!vo.audioFile) { error(scene.id, 'AUDIO_UNWIRED', 'Narration text has no audioFile.'); continue; }
    const audio = mediaPath(vo.audioFile);
    if (!present(audio)) { error(scene.id, 'AUDIO_MISSING', vo.audioFile); continue; }
    const hash = createHash('sha256').update(vo.text).digest('hex').slice(0, 12);
    const filenameHash = path.basename(audio).match(/\.([a-f0-9]{12})\.(?:mp3|wav)$/i)?.[1];
    if (filenameHash && filenameHash !== hash) error(scene.id, 'AUDIO_STALE', 'Filename text hash differs from current narration.');
    if (!filenameHash) warn(scene.id, 'AUDIO_UNVERSIONED', 'Cannot verify narration text against this filename.');
    try {
      const alignment = JSON.parse(readFileSync(alignmentPathFor(audio), 'utf8'));
      const {characters, character_start_times_seconds: starts, character_end_times_seconds: ends} = alignment;
      if (!Array.isArray(characters) || !Array.isArray(starts) || !Array.isArray(ends) || !ends.length || characters.length !== starts.length || starts.length !== ends.length ||
          ends.some((end, i) => !Number.isFinite(end) || !Number.isFinite(starts[i]) || starts[i] < 0 || end < starts[i] || (i > 0 && end < ends[i - 1]))) {
        error(scene.id, 'ALIGNMENT_INVALID', 'Character timestamps must be finite, ordered, nonempty and equal in length.');
      } else {
        const startFrame = vo.startFrame ?? 0;
        const endFrame = vo.endFrame ?? scene.durationInFrames;
        if (startFrame < 0 || endFrame <= startFrame || endFrame > scene.durationInFrames) error(scene.id, 'AUDIO_WINDOW', 'Invalid narration playback window.');
        const available = (endFrame - startFrame) / fps;
        if (ends.at(-1) > available) error(scene.id, 'AUDIO_CLIPPED', `${ends.at(-1).toFixed(2)}s narration exceeds ${available.toFixed(2)}s playback.`);
        else if (ends.at(-1) + 1.5 > (scene.durationInFrames - startFrame - TRANSITION_FRAMES) / fps) warn(scene.id, 'SHORT_TAIL', 'Less than 1.5s of scene hold after narration before the outgoing transition.');
      }
    } catch {
      error(scene.id, 'ALIGNMENT_MISSING', 'Missing or unreadable alignment sidecar; rebuild before syncing captions.');
    }
    if (!Array.isArray(scene.captions) || !scene.captions.length) error(scene.id, 'CAPTIONS_MISSING', 'Build timed captions before exporting YouTube subtitles.');
    else if (scene.captions.some((c, i) => typeof c.text !== 'string' || !Number.isFinite(c.startMs) || !Number.isFinite(c.endMs) || c.startMs < 0 || c.endMs < c.startMs ||
        (i > 0 && c.startMs < scene.captions[i - 1].startMs) || c.endMs + ((vo.startFrame ?? 0) / fps) * 1000 > scene.durationInFrames / fps * 1000)) {
      error(scene.id, 'CAPTIONS_INVALID', 'Captions must be ordered, finite and fit the narration playback scene.');
    }
  }
  for (const scene of lesson.scenes) {
    if (scene.voiceover?.audioFile && present(mediaPath(scene.voiceover.audioFile))) {
      try { for (const message of verifyAssembly(scene, fps)) error(scene.id, 'ASSEMBLY_STALE', message); }
      catch (e) { error(scene.id, 'ASSEMBLY_INVALID', e.message); }
    }
  }
  try {
    const captionCheck = lessonCaptionCues(lesson);
    for (const message of captionCheck.warnings.filter(m => m.startsWith('Narrated intro'))) error('intro', 'INTRO_CAPTIONS_MISSING', message);
  } catch (e) { error('lesson', 'CAPTION_TIMELINE_INVALID', e.message); }
  const snapshotPath = args.find(a => a.startsWith('--snapshot='))?.slice('--snapshot='.length);
  if (snapshotPath) {
    try {
      const snapshot = JSON.parse(readFileSync(snapshotPath, 'utf8'));
      if (path.resolve(snapshot.options.lessonPath) !== path.resolve(file)) error('lesson', 'SNAPSHOT_SCOPE', 'Snapshot belongs to a different lesson.');
      const check = verifyRelease(process.cwd(), snapshot);
      if (!check.valid) error('lesson', 'RELEASE_STALE', JSON.stringify(check));
    } catch (e) { error('lesson', 'SNAPSHOT_INVALID', e.message); }
  }
  return {compositionId: getCompositionId(lesson), sourceJson: file, mediaReady: errors.length === 0,
    durationSeconds: timeline ? timeline.durationMs / 1000 : null,
    errors, warnings};
});
mkdirSync('out/audits', {recursive: true});
writeFileSync('out/audits/release-preflight.json', JSON.stringify({generatedAt: new Date().toISOString(), lessons: reports}, null, 2) + '\n');
for (const report of reports) {
  console.log(`${report.compositionId}: ${report.errors.length} errors, ${report.warnings.length} warnings`);
  if (!args.includes('--all')) for (const issue of [...report.errors, ...report.warnings]) console.log(`  ${issue.sceneId} ${issue.code}: ${issue.message}`);
}
console.log(`Media ready: ${reports.filter(r => r.mediaReady).length}/${reports.length}. Details: out/audits/release-preflight.json`);
process.exitCode = reports.some(r => !r.mediaReady) ? 1 : 0;
