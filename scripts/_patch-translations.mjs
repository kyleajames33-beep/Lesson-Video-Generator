#!/usr/bin/env node
// _patch-translations — merges a translated JSON (returned by ChatGPT)
// into each scene's voiceover.translations field, keyed by language code.
//
// Usage:
//   node scripts/_patch-translations.mjs <lesson-json> <translations.json> <lang-code>
//
// Translations file should be { sceneId: translatedText, ... } — exactly
// what the prompt generator's "Output format" asks ChatGPT for.

import {readFileSync, writeFileSync} from 'node:fs';

const [lessonPath, transPath, lang] = process.argv.slice(2);
if (!lessonPath || !transPath || !lang) {
	console.error('Usage: node scripts/_patch-translations.mjs <lesson-json> <translations.json> <lang-code>');
	process.exit(1);
}

const lesson = JSON.parse(readFileSync(lessonPath, 'utf8'));
const trans = JSON.parse(readFileSync(transPath, 'utf8'));

let n = 0;
for (const scene of lesson.scenes) {
	if (!scene.voiceover) continue;
	const translated = trans[scene.id];
	if (typeof translated !== 'string') continue;
	scene.voiceover.translations = scene.voiceover.translations || {};
	scene.voiceover.translations[lang] = translated;
	n++;
}

writeFileSync(lessonPath, JSON.stringify(lesson, null, 2) + '\n');
console.log(`Patched ${n} scenes with ${lang} translations in ${lessonPath}`);
