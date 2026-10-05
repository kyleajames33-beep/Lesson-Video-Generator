import {mkdir, writeFile, readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';

// Explicit refresh of public NESA sources only. No lesson, media or approval writes.
const directory = 'out/research/curriculum';
const legacy = 'https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017';
const sources = [
  ['course', legacy, 'chemistry-2017-course.html'],
  ['changes', `${legacy}/record-of-changes`, 'chemistry-2017-changes.html'],
  ['transition', 'https://curriculum.nsw.edu.au/learning-areas/science/chemistry-11-12-2025/overview/course', 'chemistry-2025-course.html'],
];
await mkdir(directory, {recursive: true});
const digest = (bytes) => createHash('sha256').update(bytes).digest('hex');
const retrieve = async (id, url, name) => {
  const response = await fetch(url, {signal: AbortSignal.timeout(30000)});
  if (!response.ok) throw new Error(`NESA ${id} returned ${response.status}`);
  if (new URL(response.url).hostname !== new URL(url).hostname) throw new Error('Unexpected source redirect');
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length > 8 * 1024 * 1024) throw new Error('Unexpected syllabus download size');
  const file = `${directory}/${name}`;
  await writeFile(file, bytes);
  return {id, url, resolvedUrl: response.url, file, bytes: bytes.length, sha256: digest(bytes), fetchedAt: new Date().toISOString(), content: bytes};
};
const results = await Promise.allSettled(sources.map((args) => retrieve(...args)));
for (const result of results) if (result.status === 'rejected') throw result.reason;
const records = results.map((result) => result.value);
const links = [...records[0].content.toString('utf8').matchAll(/href="([^"]+chemistry-stage6-syllabus-word\.docx)"/gu)];
const candidates = [...new Set(links.map((match) => new URL(match[1], legacy).href))];
if (candidates.length !== 1 || new URL(candidates[0]).hostname !== 'www.nsw.gov.au') throw new Error('Expected one official legacy syllabus download');
records.push(await retrieve('syllabus', candidates[0], 'chemistry-2017-syllabus.docx'));
const extraction = spawnSync('python', ['scripts/extract-nesa-docx.py', `${directory}/chemistry-2017-syllabus.docx`, `${directory}/chemistry-2017-paragraphs.json`], {encoding: 'utf8'});
if (extraction.error || extraction.status !== 0) throw new Error(extraction.error?.message ?? extraction.stderr);
const manifest = {schemaVersion: 1, purpose: 'Selected legacy Chemistry source verification, not curriculum coverage or lesson approval',
  sources: records.map(({content, ...record}) => record),
  extraction: {file: `${directory}/chemistry-2017-paragraphs.json`, sha256: digest(await readFile(`${directory}/chemistry-2017-paragraphs.json`)),
    scriptSha256: digest(await readFile('scripts/extract-nesa-docx.py'))}};
await writeFile(`${directory}/chemistry-sources.json`, JSON.stringify(manifest, null, 2) + '\n');
console.log(JSON.stringify({sources: manifest.sources.map(({id, bytes, sha256}) => ({id, bytes, sha256})), extraction: JSON.parse(extraction.stdout)}));
