#!/usr/bin/env node
// export-youtube-ai-description — produces a Claude-written YouTube
// title + description + tags + pinned comment from the full lesson
// transcript and key concepts. Smarter SEO than the heuristic version
// because the LLM can paraphrase, hook with a question, and pick
// emotionally-resonant phrasings.
//
// Modes:
//   1. If ANTHROPIC_API_KEY is set, calls the Claude API directly and
//      writes the result to out/youtube/<id>.yt-ai.md.
//   2. Otherwise writes a ready-to-paste prompt to
//      out/youtube/<id>.yt-ai-prompt.md — open it, paste into
//      claude.ai, and save the response yourself.
//
// Usage:
//   node scripts/export-youtube-ai-description.mjs src/data/<lesson>.json [...more]

import {readFileSync, writeFileSync, mkdirSync, existsSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {getCompositionId} from './lesson-utils.mjs';

const args = process.argv.slice(2);
const lessonPaths = args.filter((a) => !a.startsWith('--'));
if (lessonPaths.length === 0) {
	console.error('Usage: node scripts/export-youtube-ai-description.mjs <lesson.json> [more.json ...]');
	process.exit(1);
}

const lessons = lessonPaths.map((p) => JSON.parse(readFileSync(p, 'utf8')));
const primary = lessons[0];
const compositionId = getCompositionId(primary);

// Aggregate content across all lessons (handles split lessons cleanly)
const transcript = lessons
	.flatMap((l) => l.scenes.filter((s) => s.voiceover?.text).map((s) => s.voiceover.text))
	.join(' ');
const takeaways = lessons
	.flatMap((l) => l.scenes.filter((s) => s.type === 'summary').flatMap((s) => s.points || s.takeaways || []));
const confidenceChecks = lessons
	.flatMap((l) => l.scenes.map((s) => s.confidenceCheck).filter(Boolean));
const mistakeBodies = lessons
	.flatMap((l) => l.scenes.filter((s) => s.type === 'misconception').map((s) => ({heading: s.heading, body: s.body, secondary: s.secondary})));
const dotPoints = [...new Set(lessons.flatMap((l) => l.syllabusDotPoints || []))];

const promptBody = `You are writing the YouTube upload metadata for an HSC Chemistry video lesson. Your goal is **maximum click-through from Australian Year 11 + 12 students searching for HSC Chemistry help**, while staying truthful to what the video actually teaches.

Output **valid JSON** with these exact keys: \`title\`, \`description\`, \`tags\` (array of strings), \`pinned_comment\`. No commentary, no markdown fences around the JSON.

## Style rules

- **Title**: ≤70 chars. Hook with the concept first, then "| HSC Chemistry Year 11 Module 2". Use a question or surprising claim if natural. Avoid clickbait.
- **Description**: 2,000–4,500 chars. Open with a one-line hook + 2-sentence promise. Then bullet "In this video you'll:" (3-5 items). Then "Common mistakes to avoid:" (2 items, from the data). Then a one-liner about the syllabus alignment. Footer: hscscience.com.au link and discreet hashtags.
- **Tags**: 8-15 high-relevance HSC Chemistry phrases. No filler, no spam.
- **Pinned comment**: a single message ending with "Reply with your question and I'll get back to you." that includes the most important takeaway as a screenshot-worthy formula card.

## The lesson

**Title (English):** ${primary.title}
**Subject:** ${primary.subject}, ${primary.yearLevel}, ${primary.module}
**Intent:** ${primary.lessonIntent || primary.subtitle}

**Syllabus dot points covered:**
${dotPoints.map((d) => `- ${d}`).join('\n')}

**Key takeaways from the summary scene:**
${takeaways.map((t, i) => `${i + 1}. ${t}`).join('\n')}

**Confidence-check items (what students should be able to do):**
${confidenceChecks.map((c) => `- ${c}`).join('\n')}

**Common mistakes addressed:**
${mistakeBodies.map((m) => `- ${m.heading}: ${m.body}`).join('\n')}

**Full transcript (for tone reference):**

${transcript}

---

Now produce the JSON.`;

const outDir = path.resolve('out/youtube');
if (!existsSync(outDir)) mkdirSync(outDir, {recursive: true});

const apiKey = process.env.ANTHROPIC_API_KEY;
if (!apiKey) {
	// Fallback mode — write the prompt for manual claude.ai use
	const promptPath = path.join(outDir, `${compositionId}.yt-ai-prompt.md`);
	writeFileSync(promptPath, `# Paste this into claude.ai\n\n${promptBody}\n`);
	console.log(`No ANTHROPIC_API_KEY set — wrote prompt for manual use:`);
	console.log(`  ${promptPath}`);
	console.log('');
	console.log('Set ANTHROPIC_API_KEY=sk-ant-... to call Claude directly next time.');
	process.exit(0);
}

console.log(`Calling Claude API for ${compositionId} (transcript ${transcript.length} chars)...`);

const r = await fetch('https://api.anthropic.com/v1/messages', {
	method: 'POST',
	headers: {
		'x-api-key': apiKey,
		'anthropic-version': '2023-06-01',
		'content-type': 'application/json',
	},
	body: JSON.stringify({
		model: 'claude-opus-4-7',
		max_tokens: 2000,
		messages: [{role: 'user', content: promptBody}],
	}),
});

if (!r.ok) {
	const errText = await r.text();
	console.error(`Claude API call failed (${r.status}): ${errText}`);
	process.exit(1);
}

const payload = await r.json();
const rawText = payload.content?.[0]?.text || '';

// Try to parse as JSON; Claude sometimes wraps in markdown code fences.
const jsonText = rawText
	.replace(/^```(?:json)?\s*/i, '')
	.replace(/\s*```\s*$/i, '')
	.trim();

let result;
try {
	result = JSON.parse(jsonText);
} catch (e) {
	console.error('Failed to parse Claude response as JSON. Raw response:');
	console.error(rawText);
	process.exit(1);
}

const outMd = path.join(outDir, `${compositionId}.yt-ai.md`);
const outJson = path.join(outDir, `${compositionId}.yt-ai.json`);

const md = `# Claude-written YouTube package — ${compositionId}

## Title (${result.title?.length || 0} chars)
\`\`\`
${result.title}
\`\`\`

## Description (${result.description?.length || 0} chars)
\`\`\`
${result.description}
\`\`\`

## Tags (${(result.tags || []).length} tags)
\`\`\`
${(result.tags || []).join(', ')}
\`\`\`

## Pinned comment
\`\`\`
${result.pinned_comment}
\`\`\`
`;

writeFileSync(outMd, md);
writeFileSync(outJson, JSON.stringify(result, null, 2) + '\n');
console.log(`✓ ${outMd}`);
console.log(`✓ ${outJson}`);
console.log(`  title ${result.title?.length}/70, description ${result.description?.length}/5000, tags ${(result.tags || []).length}`);
