// Plan a Bunny Stream upload of every finished master. Read-only: calls no API and reads no secret.
// Usage:
//   node scripts/bunny-catalogue.mjs [--dry-run] [--course "Year 12 Biology"] [--problems] [--commands] [--json out/bunny/plan.json]
// For each composition in out/explainer it takes the latest <Composition>-vN.mp4, then shows the course collection,
// the title it would use, the captions file it would attach, and whether out/bunny/<id>.json says it is already up.
// Flags: NO CAPTIONS, CHECK CAPTIONS (not the measured export), NO TITLE, NO COURSE, EM DASH, UPLOADED, NEWER VERSION.
// --problems lists only flagged masters; --commands prints a bunny-upload.mjs line for each ready master.
// Everything here is a plan (the --dry-run flag is accepted for symmetry with the other scripts).
import fs from 'node:fs';
import path from 'node:path';
import {ROOT, latestMasters, courseFor, findCaptions, findTitle, existingRecord} from './lib/bunny-catalogue-lib.mjs';

const args = Object.fromEntries(process.argv.slice(2).reduce((acc, a, i, all) => {
	if (a.startsWith('--')) acc.push([a.slice(2), all[i + 1] && !all[i + 1].startsWith('--') ? all[i + 1] : true]);
	return acc;
}, []));

const rows = latestMasters().map(m => {
	const course = courseFor(m.id);
	const title = findTitle(m.id);
	const captions = findCaptions(m.id);
	const record = existingRecord(m.id);
	const flags = [];
	if (!captions) flags.push('NO CAPTIONS');
	else if (captions.source !== 'measured export') flags.push('CHECK CAPTIONS');
	if (!title) flags.push('NO TITLE');
	if (!course) flags.push('NO COURSE');
	if (title && /—/.test(title.title)) flags.push('EM DASH');
	if (record?.status === 'uploaded') flags.push(record.file === m.file ? 'UPLOADED' : 'NEWER VERSION');
	return {...m, course, title: title?.title ?? null, titleSource: title?.source ?? null, captions: captions?.file ?? null, captionSource: captions?.source ?? null, flags};
});

let shown = rows;
if (typeof args.course === 'string') shown = shown.filter(r => r.course === args.course);
if (args.problems === true) shown = shown.filter(r => r.flags.some(f => f !== 'UPLOADED'));

const byCourse = new Map();
for (const r of shown) { const k = r.course ?? '(no course)'; if (!byCourse.has(k)) byCourse.set(k, []); byCourse.get(k).push(r); }
for (const [course, list] of [...byCourse].sort()) {
	const mb = list.reduce((n, r) => n + r.bytes, 0) / 1048576;
	console.log(`\n== Collection: ${course} (${list.length} masters, ${mb.toFixed(0)} MB)`);
	for (const r of list) {
		console.log(`  ${r.id} v${r.version} ${(r.bytes / 1048576).toFixed(1)} MB${r.flags.length ? '  [' + r.flags.join(', ') + ']' : ''}`);
		console.log(`    title:    ${r.title ?? '(none: pass --title)'}`);
		console.log(`    captions: ${r.captions ? `${r.captions} (${r.captionSource})` : '(none)'}`);
	}
}

const count = f => rows.filter(r => r.flags.includes(f)).length;
const ready = rows.filter(r => !r.flags.some(f => ['NO CAPTIONS', 'NO TITLE', 'NO COURSE', 'EM DASH', 'UPLOADED'].includes(f)));
const totalMb = rows.reduce((n, r) => n + r.bytes, 0) / 1048576;
console.log(`\nWhole catalogue: ${rows.length} masters (${totalMb.toFixed(0)} MB). Ready to upload: ${ready.length} (including any marked CHECK CAPTIONS).`);
console.log(`No captions: ${count('NO CAPTIONS')}. Captions to check against the master: ${count('CHECK CAPTIONS')}. No title: ${count('NO TITLE')}. No course: ${count('NO COURSE')}. Em dash in title: ${count('EM DASH')}.`);
console.log(`Already uploaded: ${count('UPLOADED')}. Newer version than the uploaded one: ${count('NEWER VERSION')}.`);

if (args.commands === true) {
	console.log('\nUpload commands (ready masters; run one at a time, add --dry-run first):');
	for (const r of ready.filter(r => shown.includes(r))) {
		console.log(`node scripts/bunny-upload.mjs --video ${r.file} --srt ${r.captions}`);
	}
}
if (typeof args.json === 'string') {
	const out = path.resolve(ROOT, args.json);
	fs.mkdirSync(path.dirname(out), {recursive: true});
	fs.writeFileSync(out, JSON.stringify({generatedAt: new Date().toISOString(), masters: rows}, null, 2) + '\n');
	console.log(`Plan written: ${path.relative(ROOT, out).replace(/\\/g, '/')}`);
}
console.log('Dry run: nothing uploaded.');
