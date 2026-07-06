// Strip em (—) and en (–) dashes from EVERY visible string in the lesson
// JSON, recursing into nested objects + arrays.
//
// Exclusions:
//   - voiceover.text  (drives already-generated audio timing — never touch)
//   - captions        (those are word tokens with embedded spaces — rebuild
//                      script handles them)
//
// Replacement: " — " → ", "  (sentence rhythm preserved, cleaner visual)

import {readFileSync, writeFileSync} from 'node:fs';

const stripDashes = (s) => {
	if (typeof s !== 'string') return s;
	let out = s;
	out = out.replace(/ +— +/g, ', ');
	out = out.replace(/ +– +/g, ', ');
	out = out.replace(/—/g, ', ');
	out = out.replace(/–/g, ', ');
	out = out.replace(/, ,/g, ',');
	out = out.replace(/  +/g, ' ');
	return out;
};

const SKIP_KEYS = new Set(['captions']);

const walk = (obj, parentKey) => {
	if (Array.isArray(obj)) {
		for (let i = 0; i < obj.length; i++) {
			if (typeof obj[i] === 'string') obj[i] = stripDashes(obj[i]);
			else if (obj[i] && typeof obj[i] === 'object') walk(obj[i], parentKey);
		}
		return;
	}
	if (!obj || typeof obj !== 'object') return;
	for (const key of Object.keys(obj)) {
		if (SKIP_KEYS.has(key)) continue;
		const val = obj[key];
		// Never touch voiceover.text — audio depends on its exact content.
		if (parentKey === 'voiceover' && key === 'text') continue;
		if (typeof val === 'string') {
			obj[key] = stripDashes(val);
		} else if (val && typeof val === 'object') {
			walk(val, key);
		}
	}
};

for (const file of [
	'src/data/chemistry-y11-m2-l1a-mole-understanding.json',
	'src/data/chemistry-y11-m2-l1b-mole-applying.json',
]) {
	const d = JSON.parse(readFileSync(file, 'utf8'));
	walk(d, null);
	writeFileSync(file, JSON.stringify(d, null, 2) + '\n');
	console.log('Stripped dashes from every string (except voiceover.text + captions) in ' + file);
}
