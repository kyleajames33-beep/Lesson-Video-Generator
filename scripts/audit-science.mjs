import {mkdir, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {auditCatalogue} from './lib/science-audit.mjs';

const root = process.cwd();
const output = path.resolve(root, process.argv[2] ?? 'out/review/science-audit');
const report = await auditCatalogue(root);
await mkdir(output, {recursive: true});
await writeFile(path.join(output, 'catalogue.json'), JSON.stringify(report, null, 2).replaceAll('\u2014', '\\u2014') + '\n');
const ranking = report.lessons.filter((lesson) => lesson.findings.length).sort((a, b) => b.findings.length - a.findings.length);
await writeFile(path.join(output, 'queue.md'), [
  '# Scientific source diagnostic queue', '', report.scope, '',
  `${report.totals.lessons} lessons; ${report.totals.findings} diagnostic flags in ${report.totals.lessonsFlagged} lessons. Flags are not confirmed defects.`, '',
  'This ordering counts occurrences, not scientific severity. Use the manually reviewed correction register for release priorities.', '',
  '| Lesson | Flags | Source SHA-256 |', '| --- | ---: | --- |',
  ...ranking.map((lesson) => `| ${lesson.file} | ${lesson.findings.length} | ${lesson.sourceHash} |`), '',
  '## Limits', '', ...report.limitations.map((limit) => `- ${limit}`), '',
].join('\n'));
console.log(JSON.stringify({output, ...report.totals}, null, 2));
