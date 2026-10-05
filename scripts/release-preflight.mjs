import {inspectNarration, narrationFilenameTextHash} from './lib/narration-integrity.mjs';
import {validateBiologyResidualDiagram} from '../src/slides/diagrams/biology-residuals-models.mjs';
import {validateAnalyticalDiagram} from '../src/slides/diagrams/analytical-inference-models.mjs';
import {validateSafetyMedicineDiagram} from '../src/slides/diagrams/safety-medicine-models.mjs';
import {validateWaterHealthDiagram} from '../src/slides/diagrams/water-health-models.mjs';
import {validatePriorityScienceDiagram} from '../src/slides/diagrams/priority-science-models.mjs';
import {validateReviewedMedicineDiagram} from '../src/slides/diagrams/medicine-models.mjs';
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
const heldBiologyResidualLessons = new Set(['Biology-Y11-M1-L7', 'Biology-Y11-M1-L24', 'Biology-Y11-M2-L11', 'Biology-Y11-M2-L19', 'Biology-Y11-M2-L20']);
const heldAnalyticalLessons = new Set(['Chemistry-Y11-M2-L10', 'Chemistry-Y11-M2-L17', 'Chemistry-Y12-M6-L16', 'Chemistry-Y12-M6-L17', 'Chemistry-Y12-M8-L3']);
const heldSafetyMedicineLessons = new Set(['Chemistry-Y11-M1-L3', 'Chemistry-Y12-M8-L13', 'Chemistry-Y12-M8-L14']);
const heldWaterHealthLessons = new Set(['Chemistry-Y12-M6-L13', 'Chemistry-Y12-M8-L7', 'Chemistry-Y12-M8-L9', 'Chemistry-Y12-M8-L10']);
const heldFoundationsLessons = new Set(['Chemistry-Y11-M4-L13', 'Chemistry-Y11-M4-Checkpoint3', 'Chemistry-Y12-M7-L21', 'Chemistry-Y12-M6-L2']);
const heldPriorityLessons = new Set(['Biology-Y11-M2-L25', 'Biology-Y12-M6-L16', 'Chemistry-Y11-M2-L8', 'Chemistry-Y12-M8-L8']);
const heldMedicineLessons = new Set(['Chemistry-Y12-M8-L11', 'Chemistry-Y12-M8-L12']);
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
  if (heldBiologyResidualLessons.has(getCompositionId(lesson))) error('lesson', 'BIOLOGY_RESIDUAL_SOURCE_REVIEW_PENDING', 'Membrane, kidney, dialysis, potometer and meiosis source proposals require teacher/science, curriculum, visual and media approval.');
  if (heldAnalyticalLessons.has(getCompositionId(lesson))) error('lesson', 'ANALYTICAL_SOURCE_REVIEW_PENDING', 'Titration and qualitative-identification source proposals require teacher/science, visual and media approval.');
  if (heldSafetyMedicineLessons.has(getCompositionId(lesson))) error('lesson', 'SAFETY_MEDICINE_SOURCE_REVIEW_PENDING', 'Separation safety and medicine-enrichment source proposals require teacher/science, visual and media approval.');
  if (heldWaterHealthLessons.has(getCompositionId(lesson))) error('lesson', 'WATER_HEALTH_SOURCE_REVIEW_PENDING', 'Legacy blood-buffer, environmental and treatment claims or their source proposals need teacher/science, visual and media approval.');
  if (heldFoundationsLessons.has(getCompositionId(lesson))) error('lesson', 'FOUNDATIONS_SOURCE_REVIEW_PENDING', 'Legacy thermodynamics, polymers and acid-reaction claims or their isolated proposals require teacher/source approval and actual visual/audio evidence.');
  if (heldPriorityLessons.has(getCompositionId(lesson))) error('lesson', 'PRIORITY_SOURCE_REVIEW_PENDING', 'Confirmed legacy science claims and their isolated replacement proposals require source, teacher and actual visual/media review.');
  if (heldMedicineLessons.has(getCompositionId(lesson))) error('lesson', 'MEDICINE_SOURCE_REVIEW_PENDING', 'Legacy medicine claims or their isolated replacement proposal require specialist/teacher source review and actual visual/playback evidence before release.');
  if ((timeline?.introFrames ?? INTRO_STINGER_FRAMES) > 0) {
    if (lesson.backgroundMusic) checkMedia('intro', lesson.backgroundMusic);
    if (lesson.introVoiceover?.audioFile) checkMedia('intro', lesson.introVoiceover.audioFile);
    else warn('intro', 'INTRO_SILENT', 'Intro has no recorded narration. Review the opening for retention.');
  }
  // Check exact text/alignment/caption pairing for ordinary and assembled takes,
  // including intros. Run even when audio is absent so staleness is not hidden.
  const narratedSegments = [...lesson.scenes];
  if ((timeline?.introFrames ?? INTRO_STINGER_FRAMES) > 0) narratedSegments.push({id: 'intro', voiceover: lesson.introVoiceover, captions: lesson.introCaptions});
  const integrityIssues = [];
  for (const segment of narratedSegments) {
    const integrity = inspectNarration(segment);
    for (const issue of integrity.errors) integrityIssues.push({sceneId: segment.id, ...issue});
  }
  for (const scene of lesson.scenes) {
    // These slides currently do not render an authored diagram. Keep release
    // blocked until scoped renderer integration and actual visual QA exist.
    if (scene.diagram && ['workedExample', 'summary'].includes(scene.type)) error(scene.id, 'DIAGRAM_HOST_UNSUPPORTED', 'Authored diagram is ignored by this slide; renderer integration and visual review required.');
    if (scene.diagram?.props?.reviewedBiologyResiduals) error(scene.id, 'BIOLOGY_RESIDUAL_VISUAL_REVIEW_PENDING', 'Opt-in Biology diagrams have no measured cue, visual-fit or playback approval.');
    if (scene.diagram?.props?.reviewedAnalytical) error(scene.id, 'ANALYTICAL_VISUAL_REVIEW_PENDING', 'Analytical diagram opt-ins have no actual visual-fit, measured-cue or playback approval.');
    if (scene.diagram?.props?.reviewedSafetyMedicine) error(scene.id, 'SAFETY_MEDICINE_VISUAL_REVIEW_PENDING', 'Chirality/delivery opt-ins have no actual visual-fit, measured-cue or playback approval.');
    if (scene.diagram?.props?.reviewedWaterHealth) error(scene.id, 'WATER_HEALTH_VISUAL_REVIEW_PENDING', 'Source-only water-health diagram changes require visual-fit, measured-cue and playback review.');
    if (scene.diagram?.props?.reviewedPolymer) error(scene.id, 'FOUNDATIONS_VISUAL_REVIEW_PENDING', 'Reviewed polymer source labels have no visual-fit, measured-cue or playback approval.');
    if (scene.diagram?.props?.reviewedMedicine) error(scene.id, 'MEDICINE_VISUAL_REVIEW_PENDING', 'Opt-in medicine enrichment is an unapproved source proposal; actual visual-fit, timing and playback review are pending.');
    if (scene.diagram?.props?.referenceBandOnly || scene.diagram?.props?.reviewedMethylmercury) error(scene.id, 'PRIORITY_VISUAL_REVIEW_PENDING', 'Opt-in reference-band/food-web illustration has no actual visual-fit, cue or playback approval.');
    try {
      validateBiologyResidualDiagram(scene.diagram);
      validateAnalyticalDiagram(scene.diagram);
      validateSafetyMedicineDiagram(scene.diagram);
      validateWaterHealthDiagram(scene.diagram);
      validateReviewedMedicineDiagram(scene.diagram);
      validatePriorityScienceDiagram(scene.diagram);
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
    const filenameHash = narrationFilenameTextHash(audio);
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
  for (const issue of integrityIssues) if (!errors.some(e => e.sceneId === issue.sceneId && e.code === issue.code)) errors.push(issue);
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
if (args.includes('--json')) console.log(JSON.stringify({lessons: reports}, null, 2));
else {
for (const report of reports) {
  console.log(`${report.compositionId}: ${report.errors.length} errors, ${report.warnings.length} warnings`);
  if (!args.includes('--all')) for (const issue of [...report.errors, ...report.warnings]) console.log(`  ${issue.sceneId} ${issue.code}: ${issue.message}`);
}
console.log(`Media ready: ${reports.filter(r => r.mediaReady).length}/${reports.length}. Details: out/audits/release-preflight.json`);
}
process.exitCode = reports.some(r => !r.mediaReady) ? 1 : 0;
