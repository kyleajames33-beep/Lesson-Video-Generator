#!/usr/bin/env node
// export-youtube-package — produces the ready-to-paste YouTube upload
// metadata for a lesson: title, description (with chapter timestamps),
// tags, and pinned-comment templates.
//
// Output: out/youtube/{compositionId}.yt.md  (markdown for easy review)
// Plus:   out/youtube/{compositionId}.yt.json  (machine-readable)
//
// Usage:
//   node scripts/export-youtube-package.mjs src/data/<lesson>.json

import {readFileSync, writeFileSync, mkdirSync, existsSync} from 'node:fs';
import path from 'node:path';
import {getCompositionId} from './lesson-utils.mjs';
import {INTRO_STINGER_FRAMES, TRANSITION_FRAMES} from './_yt-constants.mjs';

const args = process.argv.slice(2);
const lessonPath = args.find((a) => !a.startsWith('--'));
if (!lessonPath) {
	console.error('Usage: node scripts/export-youtube-package.mjs <lesson-json>');
	process.exit(1);
}

const lesson = JSON.parse(readFileSync(lessonPath, 'utf8'));
const fps = lesson.fps || 30;
const compositionId = getCompositionId(lesson);

// ── Title (kept under 70 chars for full mobile display) ──
const lessonCode = lesson.lesson.replace(/^Lesson\s+/i, '');
const titleBase = `${lesson.title} | ${lesson.subject} Y${lesson.yearLevel.replace(/[^\d]/g, '')} M${lesson.module.replace(/[^\d]/g, '')}`;
const ytTitle = titleBase.length <= 100 ? titleBase : titleBase.slice(0, 97) + '...';

// ── Chapter timestamps ──
// Stinger gets a "Welcome" chapter at 0:00, then each scene's heading
// (or short type label if no heading).
const fmtTimestamp = (seconds) => {
	const total = Math.floor(seconds);
	const h = Math.floor(total / 3600);
	const m = Math.floor((total % 3600) / 60);
	const s = total % 60;
	if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
	return `${m}:${String(s).padStart(2, '0')}`;
};

const sceneTitleFor = (scene, index) => {
	if (scene.type === 'title') return 'Welcome';
	if (scene.heading) return scene.heading;
	if (scene.type === 'workedExample') return `Worked example ${index}`;
	if (scene.type === 'quickCheck') return 'Quick check';
	if (scene.type === 'summary') return 'Key takeaways';
	if (scene.type === 'endCard') return 'What\'s next';
	return scene.type;
};

const chapters = [{time: 0, title: 'Welcome'}];
let cursorFrames = INTRO_STINGER_FRAMES;
for (let i = 0; i < lesson.scenes.length; i++) {
	const scene = lesson.scenes[i];
	const startSec = cursorFrames / fps;
	chapters.push({time: startSec, title: sceneTitleFor(scene, i + 1)});
	cursorFrames += scene.durationInFrames - (i < lesson.scenes.length - 1 ? TRANSITION_FRAMES : 0);
}

const chapterLines = chapters.map((c) => `${fmtTimestamp(c.time)} ${c.title}`).join('\n');

// ── Description ──
const confidenceChecks = lesson.scenes
	.map((s) => s.confidenceCheck)
	.filter(Boolean);
const dotPoints = lesson.syllabusDotPoints || [];

const description = `${lesson.lessonIntent || lesson.subtitle}

In this lesson:
${lesson.scenes
	.filter((s) => s.recapSeed && s.type !== 'title' && s.type !== 'endCard')
	.slice(0, 5)
	.map((s) => `• ${s.recapSeed}`)
	.join('\n')}

By the end you'll be able to:
${confidenceChecks.slice(0, 6).map((c) => `✓ ${c[0].toUpperCase()}${c.slice(1)}`).join('\n')}

⏱ CHAPTERS
${chapterLines}

📘 NESA SYLLABUS
${lesson.syllabusModule || lesson.module}
${dotPoints.map((p) => `• ${p}`).join('\n')}

🎓 Full HSC course: hscscience.com.au
👇 Got a question? Drop it in the comments.

#HSCChemistry #${lesson.subject.replace(/\s+/g, '')} #Year${lesson.yearLevel.replace(/[^\d]/g, '')} #NESA #HSCStudy #HSCScience`;

// ── Tags ──
const tags = [
	'HSC Chemistry',
	'HSC Chemistry Year 11',
	`HSC Chemistry ${lesson.module}`,
	lesson.title,
	'NESA Chemistry',
	'HSC Study',
	'Chemistry tutorial',
	'Australian curriculum',
	'Year 11 Chemistry',
	'HSC Science',
	...dotPoints.map((p) => p.split(/\s+/).slice(0, 4).join(' ')),
];

// ── Pinned comment template ──
const pinned = `📍 Save the key formula: N = n × Nₐ. Know any two, find the third.

If this helped, like + subscribe so I keep making these. Got a question? Reply here and I'll get back to you.

Full ${lesson.subject} course → hscscience.com.au`;

// ── Output ──
const outDir = path.resolve('out/youtube');
if (!existsSync(outDir)) mkdirSync(outDir, {recursive: true});
const outMd = path.join(outDir, `${compositionId}.yt.md`);
const outJson = path.join(outDir, `${compositionId}.yt.json`);

const md = `# YouTube upload package — ${compositionId}

## Title (${ytTitle.length} chars)
\`\`\`
${ytTitle}
\`\`\`

## Description (${description.length} chars)
\`\`\`
${description}
\`\`\`

## Tags (${tags.length} tags, ${tags.join(',').length} chars — limit 500)
\`\`\`
${tags.join(', ')}
\`\`\`

## Pinned comment
\`\`\`
${pinned}
\`\`\`

## Chapter timestamps (paste into description if not done already)
\`\`\`
${chapterLines}
\`\`\`
`;

writeFileSync(outMd, md);
writeFileSync(outJson, JSON.stringify({title: ytTitle, description, tags, pinned, chapters}, null, 2) + '\n');

console.log(`Wrote ${outMd}`);
console.log(`Wrote ${outJson}`);
console.log(`Title len: ${ytTitle.length}/100`);
console.log(`Desc len:  ${description.length}/5000`);
console.log(`Tag total: ${tags.join(',').length}/500`);
console.log(`Chapters:  ${chapters.length}`);
