import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import {build} from 'esbuild';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const FFMPEG = path.join(ROOT, 'node_modules/@remotion/compositor-win32-x64-msvc/ffmpeg.exe');
export const FONTS = ['assets/explainer-paper-grain.png', 'fonts/caveat-latin-wght-normal.woff2', 'fonts/inter-tight-latin-wght-normal.woff2'];

/** Load the explainer registry (configs only) in node via a throwaway CJS bundle. */
export const loadConfig = async (id) => {
	const tmp = path.join(ROOT, 'out/explainer', `.registry-${process.pid}.cjs`);
	fs.mkdirSync(path.dirname(tmp), {recursive: true});
	try {
		await build({entryPoints: [path.join(ROOT, 'src/explainer/registry.ts')], outfile: tmp, bundle: true, platform: 'node', format: 'cjs', packages: 'external', jsx: 'automatic', logLevel: 'silent'});
		const {explainers} = createRequire(import.meta.url)(tmp);
		const config = explainers.find((e) => e.id === id);
		if (!config) throw new Error(`Unknown explainer "${id}". Known: ${explainers.map((e) => e.id).join(', ')}`);
		return config;
	} finally {
		fs.rmSync(tmp, {force: true});
	}
};

export const audioFiles = (config) =>
	config.lesson.scenes.filter((s) => s.voiceover?.audioFile).map((s) => s.voiceover.audioFile.replace(/^public\//, ''));

/** Copy only the fonts, config assets and lesson audio into destDir. */
export const buildSlimPublic = (config, destDir) => {
	// Always rebuild so an updated asset is never served from a stale copy.
	fs.rmSync(destDir, {recursive: true, force: true});
	const rels = [...new Set([...FONTS, ...config.assets, ...audioFiles(config)])];
	let bytes = 0;
	for (const rel of rels) {
		const src = path.join(ROOT, 'public', rel);
		if (!fs.existsSync(src)) throw new Error(`Missing public asset: ${rel}`);
		const dst = path.join(destDir, rel);
		fs.mkdirSync(path.dirname(dst), {recursive: true});
		fs.copyFileSync(src, dst);
		bytes += fs.statSync(src).size;
	}
	return {bytes, files: rels.length};
};

export const totalFrames = (config) => config.lesson.scenes.reduce((t, s) => t + s.durationInFrames, 0);

/** Wrapper entry so the bundle registers just this explainer composition. */
export const writeEntry = (config, file) => {
	const posix = (p) => p.split(path.sep).join('/');
	const body = `import React from 'react';
import {Composition, registerRoot} from 'remotion';
import {ExplainerVideo} from '${posix(path.join(ROOT, 'src/explainer/ExplainerVideo'))}';
import {explainers} from '${posix(path.join(ROOT, 'src/explainer/registry'))}';
const config = explainers.find((e) => e.id === ${JSON.stringify(config.id)})!;
const Wrapped: React.FC = () => <ExplainerVideo config={config} />;
registerRoot(() => <Composition id={config.id} component={Wrapped} durationInFrames={${totalFrames(config)}} fps={30} width={1920} height={1080} />);
`;
	fs.mkdirSync(path.dirname(file), {recursive: true});
	fs.writeFileSync(file, body);
};
