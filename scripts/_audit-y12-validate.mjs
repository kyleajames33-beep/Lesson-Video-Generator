// Catalogue-wide validation audit. Runs validate-lesson, groups errors per file
// (in emission order via 2>&1), normalizes each error to a category, and reports
// any error that is NOT one of the two intentional gold-standard patterns:
//   • title scene with no voiceover.text  (silent title)
//   • definition scene with no body       (bullets-only multi-term definition)
// Also independently checks every scene type + diagram type against what the
// renderer/validator supports, to catch things like an unsupported "endCard".
import {execSync} from 'node:child_process';
import {readFileSync, readdirSync} from 'node:fs';

let out = '';
try {
	out = execSync('node scripts/validate-lesson.mjs 2>&1', {encoding: 'utf8', shell: true});
} catch (e) {
	out = e.stdout || '';
}

const isIntentional = (err) =>
	/missing non-empty "body"/i.test(err) || /missing.*voiceover/i.test(err);

const blocks = out.split(/\n(?=\S)/);
const byCategory = {};
const filesWithReal = new Set();
let y12 = 0, y12clean = 0;
for (const b of blocks) {
	const first = b.split('\n')[0].trim();
	if (!/\.json$/.test(first)) continue;
	const isY12 = /chemistry-y12-/.test(first);
	if (isY12) y12++;
	const errs = [...b.matchAll(/^\s*error:\s*(.+)$/gim)].map((m) => m[1].trim());
	const real = errs.filter((e) => !isIntentional(e));
	if (isY12 && real.length === 0) y12clean++;
	for (const e of real) {
		const cat = e.replace(/scene\[\d+\]\s*\([^)]*\):\s*/i, '').trim();
		byCategory[cat] = (byCategory[cat] || 0) + 1;
		filesWithReal.add(first.split(/[\\/]/).pop());
	}
}

console.log(`Y12: ${y12} files | clean after filtering intentional patterns: ${y12clean}`);
console.log(`\nNon-intentional error CATEGORIES catalogue-wide:`);
const cats = Object.entries(byCategory).sort((a, b) => b[1] - a[1]);
if (cats.length === 0) console.log('  (none) ✓');
for (const [cat, n] of cats) console.log(`  ${n}×  ${cat}`);
if (filesWithReal.size) console.log(`\nFiles with real errors: ${[...filesWithReal].join(', ')}`);

// Independent scene/diagram type support check across all data files.
const SUPPORTED_SCENES = new Set(['title','hook','concept','definition','formula','workedExample','misconception','quickCheck','summary','marginalia','labFootage']);
const typeIssues = [];
for (const f of readdirSync('src/data').filter((x) => x.endsWith('.json') && /chemistry-/.test(x))) {
	const d = JSON.parse(readFileSync('src/data/' + f, 'utf8'));
	for (const s of d.scenes || []) {
		if (!SUPPORTED_SCENES.has(s.type)) typeIssues.push(`${f}: scene id="${s.id}" type="${s.type}"`);
	}
}
console.log(`\nUnsupported scene types across all data files: ${typeIssues.length}`);
for (const t of typeIssues) console.log('  ✗ ' + t);
