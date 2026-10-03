import {readFileSync, writeFileSync, existsSync, mkdirSync} from 'node:fs';
import path from 'node:path';
import {recordReview, verifyReview} from './lib/release-review.mjs';
const [command, target, ...args] = process.argv.slice(2);
const option = name => args.find(a => a.startsWith(`--${name}=`))?.slice(name.length + 3);
if (command === 'record') {
  const output = option('output');
  if (!output || existsSync(output)) throw new Error('Review output must be a new file.');
  const record = recordReview(process.cwd(), {snapshotPath: target, reviewer: option('reviewer'), scope: option('scope'), outcome: option('outcome'), evidence: option('evidence')});
  mkdirSync(path.dirname(path.resolve(output)), {recursive: true});
  writeFileSync(output, JSON.stringify(record, null, 2) + '\n', {flag: 'wx'});
  console.log('Saved review evidence for ' + record.packageSha256);
} else if (command === 'verify') {
  const report = verifyReview(process.cwd(), JSON.parse(readFileSync(target, 'utf8')));
  console.log(JSON.stringify(report, null, 2)); if (!report.valid) process.exitCode = 1;
} else throw new Error('Usage: node scripts/release-review.mjs record snapshot.json --reviewer=Name --scope=motion --outcome=pass --evidence=review.md --output=new-review.json | verify review.json');
