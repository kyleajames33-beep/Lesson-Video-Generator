import {readFileSync, writeFileSync, mkdirSync, existsSync} from 'node:fs';
import path from 'node:path';
import {resolvePlayback, writePlayback} from './lib/playback-assembly.mjs';

const args = process.argv.slice(2);
const [manifestFile, planFile] = args.filter(a => !a.startsWith('--'));
const option = name => args.find(a => a.startsWith(`--${name}=`))?.slice(name.length + 3);
const output = option('output');
if (!manifestFile || !planFile || !output) throw new Error('Usage: node scripts/assemble-lesson-playback.mjs manifest.json plan.json --output=separate-lesson.json [--dry-run] [--hook-first]');
const manifest = JSON.parse(readFileSync(manifestFile, 'utf8'));
const plan = JSON.parse(readFileSync(planFile, 'utf8'));
if (manifest.lessonPath !== plan.lessonPath) throw new Error('Manifest and plan lesson paths differ.');
if (path.resolve(output) === path.resolve(plan.lessonPath) || existsSync(output)) throw new Error('Output must be a new lesson file, preserving the source.');
const lesson = JSON.parse(readFileSync(plan.lessonPath, 'utf8'));
if (args.includes('--hook-first')) lesson.introDurationInFrames = 0;
const result = resolvePlayback({lesson, manifest, plan});
if (!args.includes('--dry-run')) {
  writePlayback(result);
  mkdirSync(path.dirname(path.resolve(output)), {recursive: true});
  writeFileSync(output, JSON.stringify(result.lesson, null, 2) + '\n', {flag: 'wx'});
}
console.log(`${args.includes('--dry-run') ? 'Validated' : 'Assembled'} ${result.scenes.length} scenes. Original media preserved.`);
