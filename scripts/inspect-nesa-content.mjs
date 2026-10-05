import {mkdir, writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';

// Cache exact public response bytes for a scoped source audit. No lesson writes.
const base = 'https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025';
const sources = [
  ['course', `${base}/overview/course`],
  ['outcomes', `${base}/outcomes`],
  ['cells', `${base}/content/year-11/fa0edb304c`],
];
const directory = 'out/research/curriculum';
await mkdir(directory, {recursive: true});
const results = await Promise.allSettled(sources.map(async ([id, url]) => {
  const response = await fetch(url, {signal: AbortSignal.timeout(30000)});
  if (!response.ok) throw new Error(`NESA ${id} returned ${response.status}`);
  const bytes = Buffer.from(await response.arrayBuffer()), html = bytes.toString('utf8');
  const embedded = html.match(/<script\b[^>]*id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/u)?.[1];
  if (!embedded || !JSON.parse(embedded).props?.pageProps?.data?.syllabus) throw new Error(`NESA ${id} page data unavailable`);
  const file = `${directory}/biology-2025-${id}.html`;
  await writeFile(file, bytes);
  return {id, url, file, bytes: bytes.length, sha256: createHash('sha256').update(bytes).digest('hex'), fetchedAt: new Date().toISOString()};
}));
for (const result of results) if (result.status === 'rejected') throw result.reason;
const manifest = {schemaVersion: 1, purpose: 'Selected Biology cohort/content verification, not lesson approval', sources: results.map((result) => result.value)};
await writeFile(`${directory}/sources.json`, JSON.stringify(manifest, null, 2) + '\n');
console.log(JSON.stringify(manifest, null, 2));
