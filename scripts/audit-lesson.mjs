#!/usr/bin/env node
// audit-lesson — pre-render quality audit. Catches the issues that we hit
// manually this week so they don't make it into the final MP4.
//
// Severity:
//   ERROR    will produce a visibly broken video → block render
//   WARN     suboptimal but watchable → call out, allow render
//   INFO     style nit → mention, don't surface
//
// Exit code 1 if any errors; 0 otherwise. Use in CI / pre-commit.
//
// Usage:
//   node scripts/audit-lesson.mjs src/data/<lesson>.json [...more] [--json]

import {readFileSync, existsSync} from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const lessonPaths = args.filter((a) => !a.startsWith('--'));
const asJson = args.includes('--json');

if (lessonPaths.length === 0) {
	console.error('Usage: node scripts/audit-lesson.mjs <lesson.json> [more.json ...] [--json]');
	process.exit(1);
}

const FPS_DEFAULT = 30;
const WPM_TARGET = 165; // narration target — anything above feels rushed
const WPM_HARD_CAP = 195;

const issuesByLesson = {};
let totalErrors = 0;
let totalWarns = 0;

const countWords = (s) => (s ?? '').trim().split(/\s+/).filter(Boolean).length;

const audit = (lessonPath) => {
	const issues = [];
	const push = (severity, sceneId, code, message) => {
		issues.push({severity, sceneId, code, message});
		if (severity === 'ERROR') totalErrors++;
		else if (severity === 'WARN') totalWarns++;
	};

	if (!existsSync(lessonPath)) {
		push('ERROR', '-', 'FILE_MISSING', `Lesson JSON not found: ${lessonPath}`);
		return issues;
	}

	let lesson;
	try {
		lesson = JSON.parse(readFileSync(lessonPath, 'utf8'));
	} catch (e) {
		push('ERROR', '-', 'JSON_PARSE', `Failed to parse JSON: ${e.message}`);
		return issues;
	}

	const fps = lesson.fps || FPS_DEFAULT;

	// ── Lesson-level checks ──
	if (!lesson.subject) push('ERROR', '-', 'MISSING_SUBJECT', 'lesson.subject is required');
	if (!lesson.lesson) push('ERROR', '-', 'MISSING_LESSON', 'lesson.lesson is required');
	if (!lesson.syllabusDotPoints || lesson.syllabusDotPoints.length === 0) {
		push('WARN', '-', 'NO_SYLLABUS', 'lesson.syllabusDotPoints is empty — syllabus badge will not render');
	}
	if (!lesson.moduleLessonCount) {
		push('WARN', '-', 'NO_MODULE_COUNT', 'lesson.moduleLessonCount missing — progress chip "L1 of N" will not show N');
	}

	// ── Scene checks ──
	const sceneIds = new Set();
	const sceneTypes = new Set();
	for (let i = 0; i < lesson.scenes.length; i++) {
		const scene = lesson.scenes[i];
		const id = scene.id;
		const dur = scene.durationInFrames || 0;
		const durSec = dur / fps;

		if (!id) {
			push('ERROR', `[${i}]`, 'NO_SCENE_ID', 'Scene has no id');
			continue;
		}
		if (sceneIds.has(id)) {
			push('ERROR', id, 'DUPLICATE_ID', `Duplicate scene id "${id}"`);
		}
		sceneIds.add(id);
		sceneTypes.add(scene.type);

		// Duration sanity
		if (dur <= 0) push('ERROR', id, 'ZERO_DURATION', 'durationInFrames is 0 or missing');
		if (dur > fps * 120) push('WARN', id, 'LONG_SCENE', `Scene is ${(durSec).toFixed(1)}s — over 2 min`);

		// Voiceover + audio + alignment
		if (scene.type !== 'title' && scene.type !== 'endCard' && scene.type !== 'mnemonic') {
			if (!scene.voiceover?.text) {
				push('ERROR', id, 'NO_VO_TEXT', 'voiceover.text missing');
			} else {
				const vo = scene.voiceover.text;
				const wc = countWords(vo);
				const wpm = (wc / Math.max(durSec, 1)) * 60;
				if (wpm > WPM_HARD_CAP) {
					push('ERROR', id, 'WPM_HARD', `narration ${wpm.toFixed(0)} wpm exceeds hard cap ${WPM_HARD_CAP} (will sound rushed)`);
				} else if (wpm > WPM_TARGET) {
					push('WARN', id, 'WPM_TIGHT', `narration ${wpm.toFixed(0)} wpm exceeds target ${WPM_TARGET}`);
				}
			}

			if (scene.voiceover?.audioFile) {
				const audioPath = path.resolve(scene.voiceover.audioFile);
				if (!existsSync(audioPath)) {
					push('ERROR', id, 'AUDIO_MISSING', `audioFile not found: ${scene.voiceover.audioFile}`);
				} else {
					const alignPath = audioPath.replace(/\.mp3$/, '.alignment.json');
					if (!existsSync(alignPath)) {
						push('WARN', id, 'NO_ALIGNMENT', 'alignment sidecar missing — auto-sync + captions will fail');
					} else {
						try {
							const a = JSON.parse(readFileSync(alignPath, 'utf8'));
							const ends = a.character_end_times_seconds || [];
							if (ends.length > 0) {
								const audioDur = ends[ends.length - 1];
								const slack = durSec - audioDur;
								if (slack < -0.5) {
									push('ERROR', id, 'AUDIO_TOO_LONG', `audio ${audioDur.toFixed(1)}s exceeds scene ${durSec.toFixed(1)}s — will be cut off`);
								} else if (slack > 3.5) {
									push('WARN', id, 'DEAD_AIR', `${slack.toFixed(1)}s of silence after audio ends`);
								}
							}
						} catch (e) {
							push('WARN', id, 'ALIGNMENT_PARSE', `alignment JSON unreadable: ${e.message}`);
						}
					}
				}
			} else {
				push('WARN', id, 'NO_AUDIO_FILE', 'voiceover.audioFile not set');
			}

			// Captions present?
			if (!scene.captions || scene.captions.length === 0) {
				push('WARN', id, 'NO_CAPTIONS', 'captions array empty — burned-in captions will not show');
			}
		}

		// recapSeed?
		if (i > 0 && scene.type !== 'title' && !lesson.scenes[i - 1].recapSeed) {
			push('INFO', id, 'NO_PRIOR_RECAP', 'previous scene has no recapSeed — "previously…" callback will not show on this scene');
		}

		// Type-specific
		if (scene.type === 'misconception') {
			if (!scene.body) push('WARN', id, 'MISC_NO_BODY', 'misconception scene with no body');
			if (!scene.secondary && !scene.callout) push('WARN', id, 'MISC_NO_FIX', 'misconception has neither secondary nor callout — fix card will be empty');
		}
		if (scene.type === 'workedExample') {
			if (!scene.steps || scene.steps.length < 3) push('WARN', id, 'WE_FEW_STEPS', `worked example has only ${scene.steps?.length ?? 0} steps`);
		}
		if (scene.type === 'summary') {
			const points = scene.points || scene.takeaways || [];
			if (points.length < 3) push('WARN', id, 'SUMMARY_FEW', `summary has only ${points.length} points (target 3-7)`);
			if (points.length > 7) push('WARN', id, 'SUMMARY_MANY', `summary has ${points.length} points (target 3-7)`);
		}
		if (scene.type === 'quickCheck') {
			if (!scene.answerSteps && !scene.answer) push('ERROR', id, 'QC_NO_ANSWER', 'quickCheck scene has no answer revealed');
		}

		// revealDelays sanity — none should exceed scene duration
		if (scene.revealDelays) {
			for (const [k, v] of Object.entries(scene.revealDelays)) {
				if (k === 'stepAts' || k === 'takeawayAts') {
					if (Array.isArray(v)) {
						for (let j = 0; j < v.length; j++) {
							if (v[j] > dur) push('WARN', id, 'REVEAL_OVERFLOW', `${k}[${j}] = ${v[j]}f exceeds scene duration ${dur}f`);
						}
					}
					continue;
				}
				if (typeof v === 'number' && v > dur) {
					push('WARN', id, 'REVEAL_OVERFLOW', `revealDelays.${k} = ${v}f exceeds scene duration ${dur}f`);
				}
			}
		}

		// Bullets `at` sanity
		if (Array.isArray(scene.bullets)) {
			for (let j = 0; j < scene.bullets.length; j++) {
				const b = scene.bullets[j];
				if (typeof b === 'object' && typeof b.at === 'number') {
					if (b.at * fps > dur) push('WARN', id, 'BULLET_OVERFLOW', `bullets[${j}].at = ${b.at}s exceeds scene ${durSec.toFixed(1)}s`);
				}
			}
		}
	}

	// ── Cross-scene checks ──
	const expectedTypes = ['title', 'hook'];
	for (const t of expectedTypes) {
		if (!sceneTypes.has(t)) push('WARN', '-', 'MISSING_TYPE', `lesson has no "${t}" scene`);
	}

	return issues;
};

for (const p of lessonPaths) {
	issuesByLesson[p] = audit(p);
}

if (asJson) {
	console.log(JSON.stringify({summary: {errors: totalErrors, warnings: totalWarns}, issuesByLesson}, null, 2));
} else {
	for (const [p, issues] of Object.entries(issuesByLesson)) {
		console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
		console.log(`  ${path.basename(p)}`);
		console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
		if (issues.length === 0) {
			console.log('  ✓ clean — no issues found\n');
			continue;
		}
		const grouped = {ERROR: [], WARN: [], INFO: []};
		for (const i of issues) grouped[i.severity].push(i);
		for (const sev of ['ERROR', 'WARN', 'INFO']) {
			if (grouped[sev].length === 0) continue;
			const icon = sev === 'ERROR' ? '✗' : sev === 'WARN' ? '⚠' : '·';
			console.log(`  ${icon} ${sev} (${grouped[sev].length})`);
			for (const i of grouped[sev]) {
				console.log(`     ${i.sceneId.padEnd(24)} [${i.code}] ${i.message}`);
			}
			console.log('');
		}
	}
	console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
	console.log(`  TOTAL: ${totalErrors} errors, ${totalWarns} warnings`);
	console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
}

process.exit(totalErrors > 0 ? 1 : 0);
