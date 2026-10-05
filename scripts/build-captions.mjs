// Faithful tokens preserve scientific Unicode and support assembled WAV files.
import {readFileSync, writeFileSync, existsSync} from 'node:fs';
import {publicPath} from './lib/playback-assembly.mjs';
import {alignmentPathFor} from './lib/caption-timeline.mjs';
import {captionsForExactNarration, assertRecordingMatchesNarration} from './lib/narration-integrity.mjs';
const args = process.argv.slice(2);
const lessonPath = args.find(a => !a.startsWith('--'));
if (!lessonPath) throw new Error('Usage: node scripts/build-captions.mjs lesson.json [--dry-run]');
const lesson = JSON.parse(readFileSync(lessonPath, 'utf8'));
let count = 0;
for (const scene of lesson.scenes) {
  if (!scene.voiceover?.audioFile) {
    if (scene.captions?.length) throw new Error('Timed captions have no selected recording: ' + scene.id);
    continue;
  }
  const audio = publicPath(process.cwd(), scene.voiceover.audioFile);
  assertRecordingMatchesNarration(scene.voiceover.text, audio);
  const sidecar = alignmentPathFor(audio);
  if (!existsSync(sidecar)) throw new Error('Selected alignment is missing: ' + scene.id);
  scene.captions = captionsForExactNarration(scene.voiceover.text, JSON.parse(readFileSync(sidecar, 'utf8')));
  count++;
}
if (lesson.introVoiceover?.audioFile) {
  const audio = publicPath(process.cwd(), lesson.introVoiceover.audioFile);
  assertRecordingMatchesNarration(lesson.introVoiceover.text, audio);
  const sidecar = alignmentPathFor(audio);
  if (!existsSync(sidecar)) throw new Error('Selected intro alignment is missing.');
  lesson.introCaptions = captionsForExactNarration(lesson.introVoiceover.text, JSON.parse(readFileSync(sidecar, 'utf8')));
}
if (!lesson.introVoiceover?.audioFile && lesson.introCaptions?.length) throw new Error('Intro captions have no selected recording.');
if (!args.includes('--dry-run')) writeFileSync(lessonPath, JSON.stringify(lesson, null, 2) + '\n');
console.log(`${count} scenes captioned${args.includes('--dry-run') ? ' (dry run)' : ''}.`);
