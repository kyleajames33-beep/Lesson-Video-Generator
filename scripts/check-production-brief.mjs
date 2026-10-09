import {mkdirSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import {checkProductionBrief, companionBriefPath, createProductionBrief} from './lib/production-brief.mjs';
const [file, ...args] = process.argv.slice(2);
if (file === 'init') {
  const lesson = args.find(arg => !arg.startsWith('--'));
  if (!lesson) throw new Error('Usage: node scripts/check-production-brief.mjs init lesson.json [--output=brief.json]');
  const output = args.find(arg => arg.startsWith('--output='))?.slice(9) ?? companionBriefPath(lesson);
  mkdirSync(path.dirname(path.resolve(output)), {recursive: true});
  writeFileSync(output, JSON.stringify(createProductionBrief(process.cwd(), lesson), null, 2) + '\n', {flag: 'wx'});
  console.log('Created pending teaching/visual brief: ' + output);
  process.exit(0);
}
if (!file) throw new Error('Usage: node scripts/check-production-brief.mjs brief.json --stage=draft|recording|export|release');
const stage = args.find(arg => arg.startsWith('--stage='))?.slice(8) ?? 'export';
const report = checkProductionBrief(process.cwd(), file, {stage});
console.log(JSON.stringify(report, null, 2));
if (!report.ready) process.exitCode = 1;
