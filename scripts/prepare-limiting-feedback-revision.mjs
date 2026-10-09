import fs from 'node:fs';
import {resolvePlayback, writePlayback, sha256} from './lib/playback-assembly.mjs';
import {verifyAssembly} from './lib/verify-assembly.mjs';
import {lessonTimeline} from '../src/lesson/timeline.mjs';
import {TRANSITION_FRAMES} from './_yt-constants.mjs';

const original = 'out/prototypes/continuity-batch-01/limiting-reagents';
const destination = 'out/prototypes/limiting-reagents-feedback-2026-10-09';
const read = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const cueFrame = (scene, phrase) => {
  const norm = text => text.toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
  const words = phrase.split(/\s+/).map(norm);
  const index = scene.captions.findIndex((_, i) => words.every((word, j) => norm(scene.captions[i + j]?.text ?? '') === word));
  if (index < 0) throw Error('Missing aligned cue: ' + phrase);
  return Math.ceil(scene.captions[index].startMs * 30 / 1000);
};
const write = (file, value) => {
  const text = JSON.stringify(value, null, 2) + '\n';
  if (fs.existsSync(file) && fs.readFileSync(file, 'utf8') !== text) throw Error('Preserve existing revision: ' + file);
  if (!fs.existsSync(file)) fs.writeFileSync(file, text, {flag: 'wx'});
};
const mode = process.argv[2] ?? 'prepare';
if (mode === 'prepare') {
  fs.mkdirSync(destination, {recursive: true});
  const lesson = read(`${original}/narrated.lesson-v2.json`);
  const manifest = read(`${original}/voice-manifest.json`);
  const plan = read(`${original}/voice-playback-plan.json`);
  manifest.lessonPath = plan.lessonPath = `${destination}/lesson.json`;
  const prompt = manifest.scenes.find(s => s.id === 'quick-check-prompt');
  prompt.text = prompt.text.replace('Take five seconds to start, or pause for longer.', 'Pause here to try it, then continue for the answer.');
  prompt.hash = sha256(prompt.text).slice(0, 12);
  prompt.audioFile = `public/audio/Chemistry-limiting-reagents-feedback-2026-10-09/${prompt.id}.${prompt.hash}.mp3`;
  for (const item of plan.playback.flatMap(p => p.items)) {
    if (item.segmentId === prompt.id) item.audioFile = prompt.audioFile;
    if (item.kind === 'silence') {item.seconds = 2; item.frames = 60;}
  }
  const quick = lesson.scenes.find(s => s.id === 'quick-check');
  quick.voiceover.text = manifest.scenes.filter(s => s.parentSceneId === quick.id).map(s => s.text).join(' ');
  const hook = lesson.scenes.find(s => s.id === 'hook');
  hook.comparison = [{label:'Buns', amount:'One per burger', mass:'5'}, {label:'Patties', amount:'One per burger', mass:'4'}];
  hook.comparisonIsPrompt = true;
  for (const scene of lesson.scenes) {
    if (scene.diagram) {
      scene.conceptVisualLayout = 'diagramFocus';
      scene.revealDelays = {...scene.revealDelays, diagram: 30};
    }
    if (scene.diagram?.type === 'reactionRun') {
      // Show the starting particles while the narrator introduces the model.
      // Keep the consumption and stopping beats at their recorded cues.
      scene.diagram.runStart = scene.diagram.delay + 60 - 30;
      scene.diagram.delay = 30;
    }
  }
  write(`${destination}/lesson.json`, lesson);
  write(`${destination}/voice-manifest.json`, manifest);
  write(`${destination}/voice-playback-plan.json`, plan);
  write(`${destination}/request-options.json`, read(`${original}/request-options.json`));
  console.log('Prepared revision. Only quick-check-prompt needs a fresh recording.');
} else if (mode === 'finalize') {
  const result = resolvePlayback({lesson: read(`${destination}/lesson.json`),
    manifest: read(`${destination}/voice-manifest.json`), plan: read(`${destination}/voice-playback-plan.json`)});
  writePlayback(result);
  // Source assembly files remain immutable. Scene reading tails are a layout
  // decision applied after assembling the exact recorded speech and quiz gaps.
  for (const scene of result.lesson.scenes) {
    if (scene.id === 'quick-check') scene.revealDelays.stepAts = [
      'Hydrogen gives about', 'Oxygen gives about', 'Oxygen supports fewer',
    ].map(phrase => cueFrame(scene, phrase));
    const lastStep = Math.max(0, ...(scene.revealDelays?.stepAts ?? []));
    const lastAnswer = scene.type === 'quickCheck'
      ? Math.max(...scene.revealDelays.stepAts) + 16 : 0;
    scene.durationInFrames = Math.max(scene.voiceover.endFrame + 15 + TRANSITION_FRAMES,
      lastStep + 90 + TRANSITION_FRAMES, lastAnswer + 90 + TRANSITION_FRAMES);
    const errors = verifyAssembly(scene, result.lesson.fps);
    if (errors.length) throw Error(scene.id + ': ' + errors.join('; '));
  }
  write(`${destination}/narrated.lesson.json`, result.lesson);
  write(`${destination}/render-config.json`, {lessonPath: `${destination}/narrated.lesson.json`,
    entryPoint: 'src/dev/release-entry.tsx', compositionId: 'Lesson-release', codec: 'h264', scale: 1,
    crf: 16, normalizeAudio: true, concurrency: 2, audioMode: 'alignedPcm',
    inputs: ['scripts/prepare-limiting-feedback-revision.mjs', `${destination}/lesson.json`,
      `${destination}/voice-manifest.json`, `${destination}/voice-playback-plan.json`, `${destination}/request-options.json`]});
  const timeline = lessonTimeline(result.lesson);
  write(`${destination}/revision-notes.json`, {
    originalVideo: 'https://youtu.be/sijXK98W_9w',
    feedback: 'Looks blurry, pauses too pronounced, diagrams too small.',
    blurObservation: 'YouTube watch player was on Auto (360p). Switched and verified 1080p HD. Native export is 1920x1080 with vector diagrams.',
    diagramLayout: 'Opt-in 600px text column, 1152px visual column, 16px stage padding. Diagram width increases from about 744px to 1120px.',
    reactionEntrance: 'Starting particles appear at one second rather than 10.5 seconds. Consumption and stop cues retain their original aligned frames.',
    hookVisual: 'Ingredient count cards replace the generic atom. These are given quantities, visible during the prompt; the answer still waits for the response gap.',
    responseGaps: {hookSeconds: 2, quickCheckSeconds: 2},
    sceneReadingTailSeconds: 0.5,
    freshRecording: 'quick-check-prompt, same Simon v4 voice and settings. All other recordings preserved.',
    durationSeconds: timeline.durationMs / 1000,
    reviewStatus: 'Technical checks pending; user playback review pending',
    chapters: timeline.scenes.map(e => ({id: e.scene.id, title: e.scene.heading ?? e.scene.id, seconds: e.startFrame / 30}))
  });
  console.log(JSON.stringify({frames: timeline.durationInFrames, seconds: timeline.durationMs / 1000}));
} else throw Error('Use prepare or finalize.');
