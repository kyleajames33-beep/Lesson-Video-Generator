import {mkdirSync, readFileSync, readdirSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {getCompositionId} from './lesson-utils.mjs';

const dataDir = path.resolve('src/data');
const outputDir = process.argv[2] ?? 'out/transcripts';
const lessonArgs = process.argv.slice(3);

const formatTimestamp = (seconds) => {
  const clamped = Math.max(0, seconds);
  const hours = Math.floor(clamped / 3600);
  const minutes = Math.floor((clamped % 3600) / 60);
  const wholeSeconds = Math.floor(clamped % 60);
  const milliseconds = Math.round((clamped - Math.floor(clamped)) * 1000);

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(wholeSeconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
};

const getLessonFiles = () => {
  if (lessonArgs.length > 0) {
    return lessonArgs.map((file) => path.resolve(file));
  }

  return readdirSync(dataDir)
    .filter((file) => file.endsWith('.json'))
    .sort()
    .map((file) => path.join(dataDir, file));
};

mkdirSync(outputDir, {recursive: true});

for (const lessonPath of getLessonFiles()) {
  const lesson = JSON.parse(readFileSync(lessonPath, 'utf8'));
  const compositionId = getCompositionId(lesson);
  const fps = lesson.fps ?? 30;
  const transitionFrames = 24;
  let cursor = 0;

  const cues = lesson.scenes.map((scene, index) => {
    const startFrame = cursor;
    const endFrame = startFrame + scene.durationInFrames;
    cursor = endFrame - (index === lesson.scenes.length - 1 ? 0 : transitionFrames);

    return {
      sceneId: scene.id,
      type: scene.type,
      startFrame,
      endFrame,
      startSeconds: Number((startFrame / fps).toFixed(3)),
      endSeconds: Number((endFrame / fps).toFixed(3)),
      caption: scene.caption,
      text: scene.voiceover?.text ?? scene.caption,
    };
  });

  const transcript = {
    compositionId,
    sourceJson: path.relative(process.cwd(), lessonPath).replace(/\\/g, '/'),
    title: lesson.title,
    syllabusVersion: lesson.syllabusVersion ?? null,
    syllabusModule: lesson.syllabusModule ?? null,
    syllabusDotPoints: lesson.syllabusDotPoints ?? [],
    productionRole: lesson.productionRole ?? 'production',
    fps,
    cues,
  };

  const jsonPath = path.join(outputDir, `${compositionId}.json`);
  const vttPath = path.join(outputDir, `${compositionId}.vtt`);
  const vtt = [
    'WEBVTT',
    '',
    ...cues.flatMap((cue, index) => [
      String(index + 1),
      `${formatTimestamp(cue.startSeconds)} --> ${formatTimestamp(cue.endSeconds)}`,
      cue.text,
      '',
    ]),
  ].join('\n');

  writeFileSync(jsonPath, `${JSON.stringify(transcript, null, 2)}\n`);
  writeFileSync(vttPath, `${vtt}\n`);
  console.log(`Wrote ${jsonPath}`);
  console.log(`Wrote ${vttPath}`);
}
