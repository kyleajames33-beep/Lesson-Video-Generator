#!/usr/bin/env node
// generate-asset-image — takes one or more asset-prompt markdown files
// from out/asset-prompts/ and generates the PNG via OpenAI's Images API
// (gpt-image-1, the high-quality 2026 model). Saves to the exact path
// declared inside the prompt's "## Save as" section.
//
// This is the script Codex / any CLI agent calls to drive the asset
// pipeline end-to-end with zero manual chatgpt.com pasting.
//
// Requires:
//   OPENAI_API_KEY=sk-… environment variable
//
// Usage:
//   node scripts/generate-asset-image.mjs out/asset-prompts/nVsLowercaseN.md
//   node scripts/generate-asset-image.mjs --all
//   node scripts/generate-asset-image.mjs nVsLowercaseN waterMoleculePremium
//
// Quality flag (default "high"):
//   --quality=high   ~$0.17 per image, ~30 s per gen
//   --quality=medium ~$0.04, ~15 s
//   --quality=low    ~$0.01, ~10 s

import {readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const args = process.argv.slice(2);
const all = args.includes('--all');
const dryRun = args.includes('--dry-run');
const qualityArg = args.find((a) => a.startsWith('--quality='))?.split('=')[1];
const sizeArg = args.find((a) => a.startsWith('--size='))?.split('=')[1];
const QUALITY = qualityArg ?? 'high';      // 'low' | 'medium' | 'high' | 'auto'
const SIZE = sizeArg ?? '1024x1024';        // 1024x1024 | 1536x1024 | 1024x1536 | auto

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey && !dryRun) {
	console.error('OPENAI_API_KEY is not set.');
	console.error('Set it with: $env:OPENAI_API_KEY = "sk-..."');
	process.exit(1);
}

const PROMPT_DIR = path.resolve('out/asset-prompts');

const collectPromptFiles = () => {
	if (all) {
		return readdirSync(PROMPT_DIR)
			.filter((f) => f.endsWith('.md') && f !== '_ALL.md')
			.map((f) => path.join(PROMPT_DIR, f));
	}
	const positional = args.filter((a) => !a.startsWith('--'));
	if (positional.length === 0) {
		console.error('Pass either --all OR one or more prompt names/paths.');
		console.error('Examples:');
		console.error('  node scripts/generate-asset-image.mjs --all');
		console.error('  node scripts/generate-asset-image.mjs nVsLowercaseN');
		console.error('  node scripts/generate-asset-image.mjs out/asset-prompts/moleSwarm.md');
		process.exit(1);
	}
	return positional.map((p) => {
		if (p.endsWith('.md') || p.includes('/') || p.includes('\\')) return path.resolve(p);
		const guess = path.join(PROMPT_DIR, `${p}.md`);
		if (!existsSync(guess)) {
			console.error(`No prompt file at ${guess}`);
			process.exit(1);
		}
		return guess;
	});
};

// Parse the markdown prompt file to extract:
//   - The prompt body to send to the API (everything after "## Subject" up to "## Save as")
//   - The save path from "## Save as"
const parsePrompt = (filePath) => {
	const md = readFileSync(filePath, 'utf8');

	// Save-path: line of backticked path inside the "## Save as" section
	const saveMatch = md.match(/## Save as\s*\n+`([^`]+)`/);
	if (!saveMatch) {
		throw new Error(`Could not find "## Save as" with backticked path in ${filePath}`);
	}
	const savePath = saveMatch[1];

	// Body for the API call: combine the style preamble + subject + accent +
	// hard requirements. We drop the "Match the canonical exemplar" section
	// because gpt-image-1 can't actually see our reference PNG — explaining it
	// in words is enough.
	const sections = [
		['## Style preamble', /## Style preamble[\s\S]*?\n\n([\s\S]*?)(?=\n## )/],
		['## Subject',        /## Subject\s*\n+([\s\S]*?)(?=\n## )/],
		['## Primary accent', /## Primary accent\s*\n+([\s\S]*?)(?=\n## )/],
		['## Hard requirements', /## Hard requirements\s*\n+([\s\S]*?)(?=\n## )/],
	];
	const parts = [];
	for (const [label, re] of sections) {
		const m = md.match(re);
		if (m) parts.push(`${label.replace('## ', '').toUpperCase()}:\n${m[1].trim()}`);
	}
	const prompt = parts.join('\n\n');
	return {prompt, savePath, filePath};
};

const callOpenAi = async ({prompt}) => {
	const r = await fetch('https://api.openai.com/v1/images/generations', {
		method: 'POST',
		headers: {
			'Authorization': `Bearer ${apiKey}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			model: 'gpt-image-1',
			prompt,
			size: SIZE,
			quality: QUALITY,
			// gpt-image-1 supports transparent backgrounds — request it explicitly.
			background: 'transparent',
			output_format: 'png',
			n: 1,
		}),
	});
	if (!r.ok) {
		const err = await r.text();
		throw new Error(`OpenAI API ${r.status}: ${err}`);
	}
	const payload = await r.json();
	const b64 = payload.data?.[0]?.b64_json;
	if (!b64) throw new Error('No image data in response');
	return Buffer.from(b64, 'base64');
};

const promptFiles = collectPromptFiles();
console.log(`Generating ${promptFiles.length} image(s) at quality=${QUALITY} size=${SIZE}`);
console.log(dryRun ? '(dry run — no API calls)' : '(LIVE — costs apply)');
console.log('');

let ok = 0, fail = 0;
for (const pf of promptFiles) {
	const {prompt, savePath} = parsePrompt(pf);
	const promptName = path.basename(pf, '.md');
	process.stdout.write(`  ${promptName.padEnd(28)} → ${savePath} ... `);

	if (dryRun) {
		console.log(`would gen (${prompt.length} chars)`);
		ok++;
		continue;
	}

	try {
		const buf = await callOpenAi({prompt});
		mkdirSync(path.dirname(savePath), {recursive: true});
		writeFileSync(savePath, buf);
		console.log(`OK (${(buf.length / 1024).toFixed(0)} KB)`);
		ok++;
	} catch (e) {
		console.log(`FAIL: ${e.message}`);
		fail++;
	}
}

console.log('');
console.log(`Done. ${ok} ok, ${fail} failed.`);
if (ok > 0) {
	console.log('');
	console.log('Next: register the new asset(s) in src/assets/index.ts and reference them from');
	console.log('the lesson JSON via scene.image = "<assetId>".');
}
if (fail > 0) process.exit(1);
