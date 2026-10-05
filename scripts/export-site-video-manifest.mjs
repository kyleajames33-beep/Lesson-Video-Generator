import {mkdirSync, readFileSync, readdirSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {getCompositionId} from './lesson-utils.mjs';
import {lessonTimeline} from '../src/lesson/timeline.mjs';

const dataDir = path.resolve('src/data');
const outputFile = process.argv[2] ?? 'out/site-video-manifest.json';
mkdirSync(path.dirname(outputFile), {recursive: true});

const lessons = readdirSync(dataDir)
  .filter((file) => file.endsWith('.json'))
  .sort()
  .map((file) => {
    const lessonPath = path.join(dataDir, file);
    const lesson = JSON.parse(readFileSync(lessonPath, 'utf8'));
    const compositionId = getCompositionId(lesson);
    const durationSeconds = lessonTimeline(lesson).durationMs / 1000;

    return {
      compositionId,
      sourceJson: path.relative(process.cwd(), lessonPath).replace(/\\/g, '/'),
      title: lesson.title,
      subtitle: lesson.subtitle,
      subject: lesson.subject,
      yearLevel: lesson.yearLevel,
      module: lesson.module,
      lesson: lesson.lesson,
      syllabusVersion: lesson.syllabusVersion ?? null,
      syllabusModule: lesson.syllabusModule ?? null,
      syllabusDotPoints: lesson.syllabusDotPoints ?? [],
      lessonIntent: lesson.lessonIntent ?? null,
      examSkill: lesson.examSkill ?? null,
      productionRole: lesson.productionRole ?? 'production',
      durationSeconds: Number(durationSeconds.toFixed(2)),
      videoPath: `/videos/${compositionId}.mp4`,
      posterPath: `/video-posters/${compositionId}.jpg`,
      transcriptPath: `/video-transcripts/${compositionId}.json`,
      recommendedEmbed: {
        preload: 'none',
        lazyStrategy: 'poster-first-intersection-observer',
        usePoster: true,
        autoplay: false,
        placeVideoOnLessonPageOnly: true,
      },
    };
  });

writeFileSync(outputFile, `${JSON.stringify({lessons}, null, 2)}\n`);
console.log(`Wrote ${outputFile} with ${lessons.length} lesson(s).`);
