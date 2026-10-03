import {readFileSync, writeFileSync, mkdirSync, existsSync} from 'node:fs';
import path from 'node:path';
import {captureRelease, verifyRelease} from './lib/release-snapshot.mjs';
const [command, target, ...args] = process.argv.slice(2);
const option = name => args.find(a => a.startsWith(`--${name}=`))?.slice(name.length + 3);
const values = name => args.filter(a => a.startsWith(`--${name}=`)).map(a => a.slice(name.length + 3));
if (command === 'capture') {
  const output = option('output');
  if (!target || !output || existsSync(output)) throw new Error('Capture requires lesson.json --config=render.json --output=new-snapshot.json.');
  const snapshot = captureRelease(process.cwd(), {lessonPath: target, renderConfig: option('config'), inputs: values('input'), artifacts: values('artifact')});
  mkdirSync(path.dirname(path.resolve(output)), {recursive: true});
  writeFileSync(output, JSON.stringify(snapshot, null, 2) + '\n', {flag: 'wx'});
  console.log(`Captured ${snapshot.files.length} dependencies, ${snapshot.missingRequired.length} required files missing. Unreviewed.`);
  if (snapshot.missingRequired.length) process.exitCode = 1;
} else if (command === 'verify') {
  const report = verifyRelease(process.cwd(), JSON.parse(readFileSync(target, 'utf8')));
  console.log(JSON.stringify(report, null, 2));
  if (!report.valid) process.exitCode = 1;
} else throw new Error('Usage: node scripts/release-snapshot.mjs capture lesson.json --config=render.json --output=new-snapshot.json [--input=file] [--artifact=file] | verify snapshot.json');
