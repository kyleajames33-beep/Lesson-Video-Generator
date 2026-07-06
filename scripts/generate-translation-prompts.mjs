#!/usr/bin/env node
// generate-translation-prompts — produces a ChatGPT-ready document for
// translating an entire lesson's voiceover into a target language.
//
// The prompt instructs the LLM to:
//   - Preserve chemistry symbols (N, n, Nₐ, mol, etc.) untranslated
//   - Maintain narrator tone (warm, conversational, teacher-like)
//   - Keep spoken-number formats appropriate to the target language
//   - Output as JSON keyed by scene id (paste back into lesson JSON)
//
// Usage:
//   node scripts/generate-translation-prompts.mjs <lesson-json> \
//     --lang=zh-CN [--lang-name="Simplified Chinese (Mandarin)"]
//
// Output: out/translations/<compositionId>-<lang>.md (ready to paste).
// Once translated, paste the resulting JSON back into the scene voiceover
// `translations` field, then run generate-elevenlabs-multilang.mjs.

import {readFileSync, writeFileSync, mkdirSync, existsSync} from 'node:fs';
import path from 'node:path';
import {getCompositionId} from './lesson-utils.mjs';

const args = process.argv.slice(2);
const lessonPath = args.find((a) => !a.startsWith('--'));
const lang = args.find((a) => a.startsWith('--lang='))?.split('=')[1];
const langNameArg = args.find((a) => a.startsWith('--lang-name='))?.split('=')[1];

if (!lessonPath || !lang) {
	console.error('Usage: node scripts/generate-translation-prompts.mjs <lesson-json> --lang=<code> [--lang-name=<full name>]');
	process.exit(1);
}

const LANG_NAMES = {
	'zh-CN': 'Simplified Chinese (Mandarin)',
	'zh-TW': 'Traditional Chinese (Mandarin)',
	'vi': 'Vietnamese',
	'ar': 'Arabic',
	'hi': 'Hindi',
	'ko': 'Korean',
	'ja': 'Japanese',
	'es': 'Spanish',
	'fr': 'French',
};
const langName = langNameArg || LANG_NAMES[lang] || lang;

const lesson = JSON.parse(readFileSync(lessonPath, 'utf8'));
const compositionId = getCompositionId(lesson);
const sceneTexts = lesson.scenes
	.filter((s) => s.voiceover?.text)
	.map((s) => ({id: s.id, text: s.voiceover.text}));

const outDir = path.resolve('out/translations');
if (!existsSync(outDir)) mkdirSync(outDir, {recursive: true});
const outPath = path.join(outDir, `${compositionId}-${lang}.md`);

const md = `# Translation prompt — ${compositionId} → ${langName} (${lang})

Paste the prompt below into ChatGPT (GPT-4 or Claude). Save the returned
JSON to a file (e.g. \`${lang}.json\`), then use the patch helper to merge
it back into the lesson JSON:

\`\`\`powershell
node scripts/_patch-translations.mjs ${path.basename(lessonPath)} ${lang}.json ${lang}
\`\`\`

---

## Prompt to paste

You are translating a Year 11 HSC Chemistry video narration from English
into **${langName}**. The narration is the spoken script students hear;
slide visuals and chemistry symbols remain unchanged.

**Rules:**
1. Keep all chemistry symbols and units **exactly as written** in the
   original (do not translate N, n, Nₐ, mol, mol⁻¹, g, g/mol, ×, 10²³,
   6.022, etc.).
2. Maintain a **warm, conversational teacher tone** — not academic
   formal, not casual slang. Imagine a confident classroom teacher.
3. **Spoken numbers**: render in the natural way a ${langName} speaker
   would say them aloud. (E.g. for Mandarin, "six point zero two two
   times ten to the twenty-three" → "六点零二二乘以十的二十三次方".)
4. **Discourse markers**: keep them as natural connectors in the target
   language ("OK", "Alright", "So", "Now" etc. translate idiomatically).
5. **Length parity**: keep each scene's translation within ±15% of the
   original word count so audio durations stay comparable.
6. **No translator notes, no asterisks, no commentary** — just clean
   spoken narration text.

**Output format:** valid JSON with one key per scene id, value = translated
text. Do not add any other fields, no markdown wrapping, no preamble.

Example output shape:
\`\`\`json
{
  "title": "(translated text for title scene)",
  "hook": "(translated text for hook scene)"
}
\`\`\`

**Input — original English narration by scene:**

\`\`\`json
${JSON.stringify(Object.fromEntries(sceneTexts.map((s) => [s.id, s.text])), null, 2)}
\`\`\`

Translate now. Return ONLY the JSON object — no other text.
`;

writeFileSync(outPath, md);
console.log(`✓ ${outPath}`);
console.log(`  ${sceneTexts.length} scenes ready to translate to ${langName}`);
console.log('');
console.log('Next: paste the prompt into ChatGPT, save the returned JSON, then patch it back.');
