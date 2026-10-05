import {mkdirSync, readFileSync, readdirSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import {getCompositionId} from './lesson-utils.mjs';
import {lessonCaptionCues, toVtt} from './lib/caption-timeline.mjs';
// Accept documented lesson-first usage and legacy output-dir-first usage.
const args = process.argv.slice(2);
const option = args.find(a => a.startsWith('--output-dir='));
const positional = args.filter(a => !a.startsWith('--'));
const oldOutput = positional[0] && !positional[0].endsWith('.json') ? positional.shift() : undefined;
const outputDir = option?.slice('--output-dir='.length) ?? oldOutput ?? 'out/transcripts';
const files = positional.length ? positional : readdirSync('src/data').filter(f => f.endsWith('.json')).sort().map(f => path.join('src/data', f));
const resolved = files.map(file => {
  const lesson = JSON.parse(readFileSync(file, 'utf8'));
  const {timeline, cues: speechCues, warnings} = lessonCaptionCues(lesson);
  const cues = timeline.scenes.map(({scene, startFrame, endFrame, audioStartMs}) => ({
    sceneId: scene.id, type: scene.type, startFrame, endFrame,
    startSeconds: startFrame / timeline.fps, endSeconds: endFrame / timeline.fps,
    audioStartSeconds: audioStartMs / 1000, caption: scene.caption,
    text: scene.voiceover?.text ?? scene.caption,
  }));
  return {lesson, file, cues, speechCues, warnings, timeline, id: getCompositionId(lesson)};
});
mkdirSync(outputDir, {recursive: true});
for (const {lesson, file, cues, speechCues, warnings, timeline, id} of resolved) {
  const transcript = {compositionId: id, sourceJson: path.relative(process.cwd(), file).replace(/\\/g, '/'),
    title: lesson.title, syllabusVersion: lesson.syllabusVersion ?? null, syllabusModule: lesson.syllabusModule ?? null,
    syllabusDotPoints: lesson.syllabusDotPoints ?? [], productionRole: lesson.productionRole ?? 'production',
    fps: timeline.fps, durationSeconds: timeline.durationMs / 1000, introText: lesson.introVoiceover?.text ?? null,
    cues, speechCues, warnings};
  writeFileSync(path.join(outputDir, id + '.json'), JSON.stringify(transcript, null, 2) + '\n');
  // Only aligned speech becomes subtitles. Scene summaries remain in JSON.
  writeFileSync(path.join(outputDir, id + '.vtt'), toVtt(speechCues));
  for (const warning of warnings) console.warn(`${id}: ${warning}`);
  console.log(`Exported ${id} transcript and aligned speech VTT.`);
}
