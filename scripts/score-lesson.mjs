#!/usr/bin/env node
// score-lesson — auto-grade a lesson JSON against docs/gold-standard-script.md.
//
// Mechanical checks only (~60/100 of the rubric). The remaining ~40 require
// human review (e.g. is the analogy *good*, is the misconception *sharp*).
// A lesson that scores ≥85 here is a candidate for production; below that it
// goes back for rewrite, not render.
//
// Usage:
//   node scripts/score-lesson.mjs src/data/<lesson>.json
//   node scripts/score-lesson.mjs            # scores every lesson in src/data

import {existsSync, readFileSync, readdirSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';

// ---------- helpers ----------

const wordCount = (text) => (text ?? '').trim().split(/\s+/).filter(Boolean).length;
const has = (s, needle) => s.toLowerCase().includes(needle.toLowerCase());
const hasAny = (s, needles) => needles.some((n) => has(s ?? '', n));
const hasAll = (s, needles) => needles.every((n) => has(s ?? '', n));

const getScenesByType = (lesson, type) => lesson.scenes.filter((s) => s.type === type);
const allVoiceoverText = (lesson) =>
	lesson.scenes
		.map((s) => s.voiceover?.text ?? '')
		.join(' \n ');

const collectAllText = (lesson) => {
	const parts = [];
	for (const s of lesson.scenes) {
		for (const k of ['heading', 'body', 'secondary', 'callout', 'question', 'coachNote', 'pausePrompt', 'finalPrompt', 'mistakeTag']) {
			if (typeof s[k] === 'string') parts.push(s[k]);
		}
		if (Array.isArray(s.steps)) parts.push(s.steps.join(' '));
		if (Array.isArray(s.answerSteps)) parts.push(s.answerSteps.join(' '));
		if (Array.isArray(s.points)) parts.push(s.points.join(' '));
		if (Array.isArray(s.bullets)) {
			for (const b of s.bullets) parts.push(typeof b === 'string' ? b : b.text);
		}
		if (s.voiceover?.text) parts.push(s.voiceover.text);
	}
	return parts.join(' \n ').toLowerCase();
};

// ---------- category scorers ----------

const scoreSyllabusAlignment = (lesson) => {
	const findings = [];
	let score = 0;

	if (Array.isArray(lesson.syllabusDotPoints) && lesson.syllabusDotPoints.length > 0) {
		score += 8;
	} else {
		findings.push('Missing or empty syllabusDotPoints');
	}
	if (typeof lesson.syllabusVersion === 'string' && lesson.syllabusVersion.trim()) {
		score += 3;
	} else {
		findings.push('Missing syllabusVersion');
	}
	if (typeof lesson.syllabusModule === 'string' && lesson.syllabusModule.trim()) {
		score += 3;
	} else {
		findings.push('Missing syllabusModule');
	}
	if (typeof lesson.lessonIntent === 'string' && /students?\s+(can|should|will|are\s+able)/i.test(lesson.lessonIntent)) {
		score += 3;
	} else {
		findings.push('lessonIntent should be a "Students can…" / "Students will…" statement');
	}
	if (typeof lesson.examSkill === 'string' && lesson.examSkill.trim().length >= 20) {
		score += 3;
	} else {
		findings.push('examSkill missing or too short to describe a markable behaviour');
	}

	return {category: 'Syllabus alignment', score, max: 20, findings};
};

const scoreHook = (lesson) => {
	const findings = [];
	let score = 0;
	const hooks = getScenesByType(lesson, 'hook');
	if (hooks.length === 0) {
		findings.push('No hook scene present');
		return {category: 'Hook quality', score: 0, max: 10, findings};
	}
	const hook = hooks[0];
	score += 4;

	if (typeof hook.callout === 'string' && hook.callout.trim().length >= 20) {
		score += 3;
	} else {
		findings.push('Hook callout missing or too short');
	}
	const heading = (hook.heading ?? '').toLowerCase();
	const looksLikeProblem = /\?|\bcan we\b|\bwhy\b|\bhow\b|\bwhat\b/.test(heading);
	if (looksLikeProblem) {
		score += 3;
	} else {
		findings.push('Hook heading does not read like a problem/question — risk of starting with a syllabus heading');
	}

	return {category: 'Hook quality', score, max: 10, findings};
};

const scoreConceptClarity = (lesson) => {
	const findings = [];
	let score = 10;
	const fps = lesson.fps ?? 30;

	for (const s of lesson.scenes) {
		if (!s.voiceover || !s.voiceover.text) {
			findings.push(`Scene "${s.id}" missing voiceover.text`);
			score -= 2;
			continue;
		}
		const seconds = s.durationInFrames / fps;
		const budget = Math.round(seconds * 2.2);
		const wc = wordCount(s.voiceover.text);
		// Allow a small overshoot; flag only when the scene is materially overpacked.
		if (wc > budget + 5) {
			findings.push(`Scene "${s.id}" voiceover ${wc} words > budget ${budget} (${seconds.toFixed(1)}s × 2.2)`);
			score -= 1;
		}
		if (/\bandalso\b|\band also\b/i.test(s.voiceover.text)) {
			findings.push(`Scene "${s.id}" voiceover contains "and also" — likely teaching two ideas in one scene`);
			score -= 1;
		}
	}

	return {category: 'Concept clarity', score: Math.max(0, score), max: 10, findings};
};

const scoreAnalogy = (lesson) => {
	const findings = [];
	const text = collectAllText(lesson);
	// Phrases that strongly suggest a real analogy (not just a stray "like")
	const strong = [
		'is like a', 'are like a', 'is a chemist',
		'think of', 'imagine ', 'is a bridge',
		'is to ', // "X is to Y what A is to B"
		'compare it to', 'similar to a',
		'just as a ', 'just like a ',
		'is the equivalent of',
	];
	const weak = [' like ', ' as a '];
	const matches = strong.filter((p) => has(text, p));
	const weakMatches = weak.filter((p) => has(text, p));

	let score = 0;
	if (matches.length >= 1) score += 7;
	else if (weakMatches.length >= 1) {
		score += 3;
		findings.push('Weak analogy signal only (e.g. "like…") — verify there is a real mapping, not a passing simile');
	} else {
		findings.push('No analogy detected — every lesson should bridge to an everyday concept');
	}

	// Bonus for "where the analogy breaks" honesty
	if (/\bbreaks\s+down\b|\banalogy\s+(breaks|isn'?t\s+perfect|is\s+not\s+perfect)\b|\bbut\s+unlike\b/i.test(text)) {
		score += 3;
	} else if (matches.length >= 1) {
		findings.push('Analogy present but no "where it breaks" line — add one when the mapping is partial');
	}

	return {category: 'Analogy', score: Math.min(10, score), max: 10, findings};
};

const scoreWorkedExample = (lesson) => {
	const findings = [];
	const examples = getScenesByType(lesson, 'workedExample');
	if (examples.length === 0) {
		findings.push('No workedExample scene present');
		return {category: 'Worked example', score: 0, max: 15, findings};
	}
	const ex = examples[0];
	let score = 4;

	if (typeof ex.coachNote === 'string' && ex.coachNote.trim().length >= 15) {
		score += 3;
	} else {
		findings.push('Worked example missing coachNote or too short');
	}
	if (ex.unitCancel && ex.unitCancel.left && ex.unitCancel.right && ex.unitCancel.result) {
		score += 3;
	} else {
		findings.push('Worked example missing unitCancel — add when units prove the setup');
	}

	// Stages can show up either as literal labels (Known:/Find:/...) or as
	// structural content across the question + coachNote + steps. Detect both.
	const allText = `${ex.question ?? ''} | ${ex.coachNote ?? ''} | ${(ex.steps ?? []).join(' | ')}`.toLowerCase();
	const stagePatterns = {
		known: /\bknown\b|\bgiven\b|n\s*=\s*\d|m\s*=\s*\d/,
		find: /\bfind\b|\btarget\b|\bcalculate\b|\bwhat is\b|\bdetermine\b/,
		formula: /\bformula\b|\bm\s*=\s*n\s*[×*x]\s*m\b|=\s*[a-z]+\s*[×*x]\s*[a-z]+/i,
		substitute: /=\s*[\d.]+\s*[×*x]\s*[\d.]+|\bsubstitute\b/,
		answer: /=\s*[\d.]+\s*[a-z]/i, // a number followed by a unit
	};
	const presentStages = Object.entries(stagePatterns).filter(([, re]) => re.test(allText)).map(([k]) => k);
	if (presentStages.length === 5) {
		score += 4;
	} else {
		const missing = Object.keys(stagePatterns).filter((k) => !presentStages.includes(k));
		findings.push(`Worked example missing stage content: ${missing.join(', ')}`);
		score += Math.max(0, presentStages.length - 1);
	}

	// Final answer should carry a unit. Check the last step (or any step with
	// `= <number> <unit>`).
	const lastSteps = (ex.steps ?? []).slice(-2).join(' ');
	if (/=\s*-?[\d.]+\s*[a-zµ⁻¹²³⁰]+/i.test(lastSteps)) {
		score += 1;
	} else {
		findings.push('Worked example final answer should include a unit');
	}

	return {category: 'Worked example', score: Math.min(15, score), max: 15, findings};
};

const scoreMisconception = (lesson) => {
	const findings = [];
	const scenes = getScenesByType(lesson, 'misconception');
	if (scenes.length === 0) {
		findings.push('No misconception scene present — every lesson must call out one common trap');
		return {category: 'Misconception', score: 0, max: 10, findings};
	}
	const m = scenes[0];
	let score = 4;

	if (typeof m.mistakeTag === 'string' && m.mistakeTag.trim()) {
		score += 2;
	} else {
		findings.push('Misconception missing mistakeTag');
	}

	const body = `${m.body ?? ''} ${m.callout ?? ''} ${m.voiceover?.text ?? ''}`;
	const hasWrong = hasAny(body, ['wrong', 'mistake', 'incorrect', 'students think', 'common error', 'trap']);
	const hasRight = hasAny(body, ['actually', 'instead', 'correct', 'in fact', 'the truth']);
	if (hasWrong && hasRight) score += 4;
	else findings.push('Misconception should explicitly contrast the wrong instinct with the corrected rule');

	return {category: 'Misconception', score: Math.min(10, score), max: 10, findings};
};

const scoreQuickCheck = (lesson) => {
	const findings = [];
	const checks = getScenesByType(lesson, 'quickCheck');
	if (checks.length === 0) {
		findings.push('No quickCheck scene present');
		return {category: 'Quick check', score: 0, max: 10, findings};
	}
	const q = checks[0];
	let score = 4;

	if (typeof q.pausePrompt === 'string' && q.pausePrompt.trim()) {
		score += 3;
	} else {
		findings.push('Quick check missing pausePrompt — that is what makes it active recall');
	}

	const examples = getScenesByType(lesson, 'workedExample');
	if (examples.length > 0 && q.question && examples[0].question) {
		const a = q.question.toLowerCase().replace(/[^a-z0-9 ]/g, '');
		const b = examples[0].question.toLowerCase().replace(/[^a-z0-9 ]/g, '');
		const overlap = a.length > 0 && b.length > 0 && (a.includes(b.slice(0, 30)) || b.includes(a.slice(0, 30)));
		if (overlap) findings.push('Quick check question looks too similar to the worked example — make it transfer-level');
		else score += 3;
	} else {
		score += 3;
	}

	return {category: 'Quick check', score: Math.min(10, score), max: 10, findings};
};

const scoreSummary = (lesson) => {
	const findings = [];
	const scenes = getScenesByType(lesson, 'summary');
	if (scenes.length === 0) {
		findings.push('No summary scene present');
		return {category: 'Summary + decision rule', score: 0, max: 10, findings};
	}
	const s = scenes[0];
	let score = 3;

	const points = s.points ?? [];
	if (points.length >= 4 && points.length <= 6) score += 3;
	else findings.push(`Summary should have 4–6 takeaways (has ${points.length})`);

	const finalPrompt = (s.finalPrompt ?? '').toLowerCase();
	const encouragementPhrases = [
		'you can do this', 'great job', 'well done', 'good luck', 'you got this',
		'now you know', 'congratulations', "you're amazing",
	];
	if (!finalPrompt) {
		findings.push('Summary missing finalPrompt decision rule');
	} else if (encouragementPhrases.some((p) => finalPrompt.includes(p))) {
		findings.push(`Summary finalPrompt is encouragement, not a decision rule: "${s.finalPrompt}"`);
	} else if (!finalPrompt.includes('?') && !/\b(use|check|ask|choose|pick|decide)\b/.test(finalPrompt)) {
		findings.push('Summary finalPrompt should be a question or imperative the student asks themselves on the day');
	} else {
		score += 4;
	}

	return {category: 'Summary + decision rule', score: Math.min(10, score), max: 10, findings};
};

const scoreTone = (lesson) => {
	const findings = [];
	let score = 5;
	const text = allVoiceoverText(lesson).toLowerCase();

	const filler = [
		"let's now", 'as we just saw', 'moving on', 'so now', 'okay so',
		'in this video', 'today we will',
	];
	const cheerleading = ["you can do this", 'great job', 'awesome', 'super easy', "you're amazing"];
	const babyTalk = ['teeny', 'tiny ball', 'itty bitty', 'super duper'];
	const vague = ['scientists discovered', 'scientists believe', 'they say that'];

	for (const phrase of filler) {
		if (text.includes(phrase)) {
			findings.push(`Filler phrase: "${phrase}"`);
			score -= 1;
		}
	}
	for (const phrase of cheerleading) {
		if (text.includes(phrase)) {
			findings.push(`Cheerleading: "${phrase}"`);
			score -= 1;
		}
	}
	for (const phrase of babyTalk) {
		if (text.includes(phrase)) {
			findings.push(`Baby-talk: "${phrase}"`);
			score -= 1;
		}
	}
	for (const phrase of vague) {
		if (text.includes(phrase)) {
			findings.push(`Vague claim: "${phrase}"`);
			score -= 1;
		}
	}

	return {category: 'Tone', score: Math.max(0, score), max: 5, findings};
};

// ---------- runner ----------

const scoreLesson = (lesson) => {
	return [
		scoreSyllabusAlignment(lesson),
		scoreHook(lesson),
		scoreConceptClarity(lesson),
		scoreAnalogy(lesson),
		scoreWorkedExample(lesson),
		scoreMisconception(lesson),
		scoreQuickCheck(lesson),
		scoreSummary(lesson),
		scoreTone(lesson),
	];
};

const ANSI = {
	reset: '\x1b[0m',
	bold: '\x1b[1m',
	dim: '\x1b[2m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	red: '\x1b[31m',
	cyan: '\x1b[36m',
};

const colorForRatio = (r) => (r >= 0.9 ? ANSI.green : r >= 0.7 ? ANSI.yellow : ANSI.red);

const printReport = (filePath, results) => {
	const total = results.reduce((acc, r) => acc + r.score, 0);
	const max = results.reduce((acc, r) => acc + r.max, 0);
	const ratio = total / max;
	const verdict = total >= 85 ? `${ANSI.green}PRODUCTION-READY${ANSI.reset}` : total >= 70 ? `${ANSI.yellow}NEEDS REWRITE${ANSI.reset}` : `${ANSI.red}NOT READY${ANSI.reset}`;

	console.log(`\n${ANSI.bold}${ANSI.cyan}${path.basename(filePath)}${ANSI.reset}`);
	console.log(`${ANSI.dim}${'─'.repeat(72)}${ANSI.reset}`);

	for (const r of results) {
		const rr = r.score / r.max;
		const c = colorForRatio(rr);
		const bar = `${c}${r.score}/${r.max}${ANSI.reset}`;
		console.log(`  ${r.category.padEnd(28)} ${bar}`);
		for (const f of r.findings) {
			console.log(`    ${ANSI.dim}· ${f}${ANSI.reset}`);
		}
	}

	console.log(`${ANSI.dim}${'─'.repeat(72)}${ANSI.reset}`);
	const c = colorForRatio(ratio);
	console.log(`  ${ANSI.bold}TOTAL${ANSI.reset}                        ${c}${ANSI.bold}${total}/${max}${ANSI.reset}   ${verdict}`);
	return total;
};

const main = () => {
	const args = process.argv.slice(2);
	const files = args.length > 0
		? args
		: readdirSync(path.resolve('src/data'))
				.filter((f) => f.endsWith('.json'))
				.map((f) => path.join('src/data', f));

	let exitCode = 0;
	for (const file of files) {
		if (!existsSync(file)) {
			console.error(`File not found: ${file}`);
			exitCode = 1;
			continue;
		}
		let lesson;
		try {
			lesson = JSON.parse(readFileSync(file, 'utf8'));
		} catch (e) {
			console.error(`Could not parse JSON: ${file} — ${e.message}`);
			exitCode = 1;
			continue;
		}
		const results = scoreLesson(lesson);
		const total = printReport(file, results);
		if (total < 85) exitCode = Math.max(exitCode, 1);
	}
	console.log('');
	process.exit(exitCode);
};

main();
