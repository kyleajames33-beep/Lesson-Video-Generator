#!/usr/bin/env node
// export-lesson-notes — produces a printable HTML lesson summary that
// students can save as PDF (Ctrl+P → Save as PDF) or read directly.
//
// The HTML embeds all styles — no external dependencies. Designed for
// A4 print: title, key formula, 5 takeaways, common mistakes, syllabus
// alignment, footer link back to hscscience.com.au.
//
// Usage:
//   node scripts/export-lesson-notes.mjs src/data/<lesson>.json [...more]
//
// Pass multiple lessons (e.g. a Part A + Part B pair) and they merge
// into one unified notes page.

import {readFileSync, writeFileSync, mkdirSync, existsSync} from 'node:fs';
import path from 'node:path';
import {getCompositionId} from './lesson-utils.mjs';

const args = process.argv.slice(2);
const lessonPaths = args.filter((a) => !a.startsWith('--'));
if (lessonPaths.length === 0) {
	console.error('Usage: node scripts/export-lesson-notes.mjs <lesson.json> [more.json ...]');
	process.exit(1);
}

const lessons = lessonPaths.map((p) => JSON.parse(readFileSync(p, 'utf8')));
const primary = lessons[0];

// Aggregate content across all lessons passed in
const allRecaps = [];
const allConfidenceChecks = [];
const allWorkedExamples = [];
const allMistakes = [];
const allTakeaways = [];
const allSyllabusDots = new Set();

for (const lesson of lessons) {
	for (const dp of lesson.syllabusDotPoints || []) allSyllabusDots.add(dp);
	for (const scene of lesson.scenes) {
		if (scene.recapSeed && scene.type !== 'title' && scene.type !== 'endCard') {
			allRecaps.push({id: scene.id, text: scene.recapSeed, type: scene.type});
		}
		if (scene.confidenceCheck) allConfidenceChecks.push(scene.confidenceCheck);
		if (scene.type === 'workedExample') {
			allWorkedExamples.push({
				question: scene.question,
				steps: scene.steps || [],
				heading: scene.heading,
			});
		}
		if (scene.type === 'misconception') {
			allMistakes.push({
				heading: scene.heading,
				body: scene.body,
				secondary: scene.secondary,
				callout: scene.callout,
			});
		}
		if (scene.type === 'summary') {
			for (const p of scene.points || []) allTakeaways.push(p);
		}
	}
}

const compositionId = getCompositionId(primary);
const outDir = path.resolve('out/notes');
if (!existsSync(outDir)) mkdirSync(outDir, {recursive: true});
const outPath = path.join(outDir, `${compositionId}.notes.html`);

const escape = (s) => String(s).replace(/[&<>"']/g, (c) => ({
	'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[c]));

// Concept-color highlighter — same palette as the video for continuity
const highlightConcepts = (s) => {
	if (!s) return '';
	let out = escape(s);
	const replacements = [
		[/Avogadro's number|Avogadro/g, (m) => `<span class="c-avo">${m}</span>`],
		[/Nₐ|N_A/g, (m) => `<span class="c-avo">${m}</span>`],
		[/\bCapital N\b/g, (m) => `<span class="c-N">${m}</span>`],
		[/\bLowercase n\b|\blowercase n\b/g, (m) => `<span class="c-n">${m}</span>`],
		[/(?<![A-Za-z])N(?![A-Za-zₐ])/g, (m) => `<span class="c-N">${m}</span>`],
		[/(?<![A-Za-z])n(?![A-Za-z])/g, (m) => `<span class="c-n">${m}</span>`],
		[/\bmoles?\b|\bmol\b/gi, (m) => `<span class="c-mol">${m}</span>`],
		[/\batoms?\b|\bmolecules?\b|\bions?\b|\bparticles?\b/g, (m) => `<span class="c-particles">${m}</span>`],
	];
	for (const [re, fn] of replacements) out = out.replace(re, fn);
	return out;
};

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${escape(primary.title)} — Notes</title>
<style>
  @page { size: A4; margin: 15mm 12mm; }
  :root {
    --ink: #1a1a1a;
    --ink-dim: #5a5a5a;
    --ink-mute: #9a9a9a;
    --rule: rgba(0,0,0,0.08);
    --chem1: #0d6b52;
    --chem2: #148a6f;
    --amber: #b87800;
    --particles: #2a72b8;
    --avo: #7b51c3;
    --paper: #faf9f6;
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: var(--paper); color: var(--ink); font-family: -apple-system, "Inter Tight", system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
  .sheet { max-width: 720px; margin: 24px auto; padding: 32px 36px; background: white; box-shadow: 0 8px 32px rgba(0,0,0,0.08); }
  @media print { .sheet { box-shadow: none; max-width: none; margin: 0; padding: 0; } }
  header { border-bottom: 2px solid var(--ink); padding-bottom: 14px; margin-bottom: 22px; }
  .eyebrow { font-family: ui-monospace, "JetBrains Mono", monospace; font-size: 11px; letter-spacing: 0.2em; color: var(--ink-mute); text-transform: uppercase; }
  h1 { font-size: 28px; line-height: 1.1; letter-spacing: -0.02em; margin: 6px 0 4px; font-weight: 800; }
  .subtitle { color: var(--ink-dim); font-size: 14px; font-weight: 500; }
  section { margin: 22px 0; page-break-inside: avoid; }
  h2 { font-size: 14px; font-family: ui-monospace, "JetBrains Mono", monospace; letter-spacing: 0.16em; color: var(--ink-dim); text-transform: uppercase; margin: 0 0 10px; font-weight: 700; }
  .key-formula { display: inline-block; padding: 12px 22px; border: 2px solid var(--amber); border-radius: 8px; font-size: 22px; font-weight: 700; letter-spacing: -0.01em; background: rgba(255,200,80,0.08); }
  ul.takeaways, ul.checks { list-style: none; padding: 0; margin: 0; }
  ul.takeaways li { padding: 8px 0 8px 26px; position: relative; font-size: 13px; line-height: 1.45; border-bottom: 1px solid var(--rule); }
  ul.takeaways li:before { content: counter(item); counter-increment: item; position: absolute; left: 0; top: 8px; font-family: ui-monospace, monospace; font-size: 11px; color: var(--amber); font-weight: 700; }
  ul.takeaways { counter-reset: item; }
  ul.checks li { padding: 4px 0 4px 22px; position: relative; font-size: 12px; line-height: 1.4; color: var(--ink); }
  ul.checks li:before { content: "✓"; position: absolute; left: 0; color: var(--chem2); font-weight: 700; }
  .mistake { border-left: 4px solid var(--amber); padding: 10px 14px; margin: 8px 0; background: rgba(255,200,80,0.06); }
  .mistake-title { font-weight: 700; font-size: 13px; margin-bottom: 4px; }
  .mistake-body { font-size: 12px; line-height: 1.4; color: var(--ink-dim); }
  .worked { padding: 12px 14px; border: 1px solid var(--rule); border-radius: 6px; margin: 10px 0; }
  .worked-q { font-weight: 700; font-size: 13px; margin-bottom: 6px; }
  .worked-steps { font-family: ui-monospace, monospace; font-size: 11px; color: var(--ink-dim); line-height: 1.6; padding-left: 16px; }
  .syllabus { font-size: 11px; color: var(--ink-dim); }
  .syllabus li { padding: 2px 0; }
  footer { margin-top: 30px; padding-top: 14px; border-top: 1px solid var(--rule); font-size: 10px; color: var(--ink-mute); display: flex; justify-content: space-between; }
  /* Concept-color threading — matches the video palette */
  .c-N { color: var(--amber); font-weight: 700; }
  .c-n { color: var(--chem2); font-weight: 700; }
  .c-avo { color: var(--avo); font-weight: 700; }
  .c-mol { color: var(--chem1); font-weight: 700; }
  .c-particles { color: var(--particles); font-weight: 600; }
</style>
</head>
<body>
<div class="sheet">

<header>
  <div class="eyebrow">HSC ${escape(primary.subject)} · ${escape(primary.module)} · ${primary.moduleLessonCount ? `Lesson ${primary.lesson.replace(/^Lesson\s+/i, '')} of ${primary.moduleLessonCount}` : escape(primary.lesson)}</div>
  <h1>${escape(primary.title.replace(/\s*[—-]\s*Part\s+[AB].*/i, ''))}</h1>
  <div class="subtitle">${highlightConcepts(primary.subtitle || primary.lessonIntent || '')}</div>
</header>

<section>
  <h2>◆ Key formula</h2>
  <div class="key-formula"><span class="c-N">N</span> = <span class="c-n">n</span> × <span class="c-avo">Nₐ</span></div>
  <div style="font-size: 12px; color: var(--ink-dim); margin-top: 8px;">
    Where <span class="c-N">N</span> = number of <span class="c-particles">particles</span>, <span class="c-n">n</span> = amount in <span class="c-mol">moles</span>,
    <span class="c-avo">Nₐ</span> = <span class="c-avo">Avogadro's number</span> (6.022 × 10²³ mol⁻¹).
  </div>
</section>

${allTakeaways.length ? `<section>
  <h2>◆ Five things to remember</h2>
  <ul class="takeaways">
    ${allTakeaways.map((t) => `<li>${highlightConcepts(t)}</li>`).join('\n    ')}
  </ul>
</section>` : ''}

${allConfidenceChecks.length ? `<section>
  <h2>◆ You should be able to</h2>
  <ul class="checks">
    ${allConfidenceChecks.map((c) => `<li>${highlightConcepts(c[0].toUpperCase() + c.slice(1))}</li>`).join('\n    ')}
  </ul>
</section>` : ''}

${allMistakes.length ? `<section>
  <h2>◆ Common mistakes</h2>
  ${allMistakes.map((m) => `
  <div class="mistake">
    <div class="mistake-title">${highlightConcepts(m.heading)}</div>
    ${m.body ? `<div class="mistake-body">${highlightConcepts(m.body)}</div>` : ''}
    ${m.secondary ? `<div class="mistake-body" style="margin-top:4px;color:var(--chem1);font-weight:600;">${highlightConcepts(m.secondary)}</div>` : ''}
  </div>`).join('')}
</section>` : ''}

${allWorkedExamples.length ? `<section>
  <h2>◆ Worked examples</h2>
  ${allWorkedExamples.map((w) => `
  <div class="worked">
    <div class="worked-q">${highlightConcepts(w.question)}</div>
    <div class="worked-steps">
${w.steps.map((s) => '      ' + highlightConcepts(s)).join('<br>\n')}
    </div>
  </div>`).join('')}
</section>` : ''}

<section>
  <h2>◆ NESA syllabus</h2>
  <div class="syllabus">${escape(primary.syllabusModule || primary.module)}</div>
  <ul class="syllabus">
    ${[...allSyllabusDots].map((d) => `<li>• ${escape(d)}</li>`).join('\n    ')}
  </ul>
</section>

<footer>
  <div>hscscience.com.au · HSC ${escape(primary.subject)} ${escape(primary.yearLevel)}</div>
  <div>${primary.syllabusVersion || ''}</div>
</footer>

</div>
</body>
</html>`;

writeFileSync(outPath, html);
console.log(`Wrote ${outPath}`);
console.log(`Lessons combined: ${lessons.length}`);
console.log(`Takeaways: ${allTakeaways.length} · Mistakes: ${allMistakes.length} · Worked: ${allWorkedExamples.length} · Checks: ${allConfidenceChecks.length}`);
console.log(`Open in browser and Ctrl+P → "Save as PDF" for the printable handout.`);
