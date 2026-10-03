// Faithful tokens preserve scientific Unicode and support assembled WAV files.
import {readFileSync, writeFileSync, existsSync} from 'node:fs';
import {publicPath} from './lib/playback-assembly.mjs';
import {alignmentPathFor, alignmentToCaptions} from './lib/caption-timeline.mjs';
const args = process.argv.slice(2);
const lessonPath = args.find(a => !a.startsWith('--'));
if (!lessonPath) throw new Error('Usage: node scripts/build-captions.mjs lesson.json [--dry-run]');
const lesson = JSON.parse(readFileSync(lessonPath, 'utf8'));
let count = 0;
for (const scene of lesson.scenes) {
  if (!scene.voiceover?.audioFile) continue;
  const sidecar = alignmentPathFor(publicPath(process.cwd(), scene.voiceover.audioFile));
  if (!existsSync(sidecar)) continue;
  scene.captions = alignmentToCaptions(JSON.parse(readFileSync(sidecar, 'utf8')));
  count++;
}
if (lesson.introVoiceover?.audioFile) {
  const sidecar = alignmentPathFor(publicPath(process.cwd(), lesson.introVoiceover.audioFile));
  if (existsSync(sidecar)) lesson.introCaptions = alignmentToCaptions(JSON.parse(readFileSync(sidecar, 'utf8')));
}
if (!args.includes('--dry-run')) writeFileSync(lessonPath, JSON.stringify(lesson, null, 2) + '\n');
console.log(`${count} scenes captioned${args.includes('--dry-run') ? ' (dry run)' : ''}.`);
