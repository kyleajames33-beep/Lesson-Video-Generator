import {cpSync, mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import {bundle} from '@remotion/bundler';
import {renderMedia, renderStill, selectComposition} from '@remotion/renderer';
import {hookRevealTiming} from '../src/lesson/answer-timing.mjs';

// An explicitly unvoiced timing fixture. Production timing comes from audio.
const output = path.resolve('out/prototypes/molar-mass-continuity-handoff');
const lesson = JSON.parse(readFileSync('src/prototypes/data/molar-mass-v3.json', 'utf8'));
const hook = structuredClone(lesson.scenes.find(scene => scene.id === 'hook'));
delete hook.voiceover;
delete hook.captions;
hook.durationInFrames = 660;
hook.responseHold = {startFrame: 300, endFrame: 420};
hook.revealDelays = hookRevealTiming({answerVisibleStart: 420}, hook.responseHold);
lesson.scenes = [hook];
lesson.introDurationInFrames = 0;
delete lesson.introVoiceover;
delete lesson.backgroundMusic;
const publicDir = path.join(output, 'opening-public');
mkdirSync(publicDir, {recursive: true});
cpSync('public/fonts', path.join(publicDir, 'fonts'), {recursive: true});
const inputProps = {lesson};
const serveUrl = await bundle({entryPoint: path.resolve('src/dev/release-entry.tsx'), publicDir,
  outDir: path.join(output, 'opening-bundle')});
const composition = await selectComposition({serveUrl, id: 'Lesson-release', inputProps});
for (const [name, frame] of [['prompt', 240], ['thinking', 360], ['boundary', 420], ['answer', 450]]) {
  await renderStill({serveUrl, composition, inputProps, frame, scale: 0.5, imageFormat: 'png',
    output: path.join(output, `hook-${name}.png`), timeoutInMilliseconds: 60000});
  console.log(`Opening frame verified for review: ${name} (${frame}).`);
}
await renderMedia({serveUrl, composition, inputProps, codec: 'h264', scale: 0.5, crf: 18,
  concurrency: 1, timeoutInMilliseconds: 60000, overwrite: true,
  outputLocation: path.join(output, 'hook-visual-timing.mp4')});
writeFileSync(path.join(output, 'hook-visual-timing.json'), JSON.stringify({
  status: 'unvoiced visual timing fixture; not measured final narration or release approval',
  fps: lesson.fps, durationInFrames: 660, responseHold: hook.responseHold,
  revealDelays: hook.revealDelays, finalTiming: 'Rebuild from timestamped final recordings.'
}, null, 2)+'\n');
console.log('Opening visual timing preview complete.');
