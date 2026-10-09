import {mkdir, writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';

// Fresh official sources in a separate cache. Existing reviewed caches are preserved.
const directory = 'out/research/continuity-2026-10-08';
const base = 'https://curriculum.nsw.edu.au/learning-areas/science/';
const areas = {
  biology: [[11, 'fa0edb304c'], [11, 'fa79a477bc'], [11, 'fad715a0de'],
    [12, 'fab2288036'], [12, 'facdcec83d'], [12, 'fa0a6a1d67'], [12, 'fa610240ba'],
    [11, 'fa42935d20'], [12, 'fa3b53de21']],
  chemistry: [[11, 'fa3318146f'], [11, 'faf0876f2f'], [11, 'fa4c5f59fc'],
    [12, 'fad224f44b'], [12, 'fa5c257b16'], [12, 'fa9677511e'], [12, 'fac41998e6'],
    [11, 'fa206b9d23'], [12, 'fa76868f0b']],
};
const digest = value => createHash('sha256').update(value).digest('hex');
const clean = html => html.replace(/<[^>]+>/gu, ' ').replace(/&nbsp;/gu, ' ')
  .replace(/&amp;/gu, '&').replace(/&lt;/gu, '<').replace(/&gt;/gu, '>')
  .replace(/&#(\d+);/gu, (_, n) => String.fromCodePoint(Number(n))).replace(/\s+/gu, ' ').trim();
function expand(element, linked) {
  return clean((element?.value ?? '').replace(/<object\b[^>]*data-codename="([^"]+)"[^>]*><\/object>/gu,
    (_, code) => linked[code]?.elements?.content?.value ?? ''));
}
await mkdir(directory, {recursive: true});
const sources = [], points = [], focusAreas = [];
const retrieve = async (subject, year, area) => {
  const url = `${base}${subject}-11-12-2025/${area ? `content/year-${year}/${area}` : 'overview'}`;
  const response = await fetch(url, {signal: AbortSignal.timeout(30000)});
  if (!response.ok || new URL(response.url).hostname !== 'curriculum.nsw.edu.au') throw new Error(`Official source unavailable: ${url}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  const embedded = bytes.toString('utf8').match(/<script\b[^>]*id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/u)?.[1];
  const data = embedded && JSON.parse(embedded).props?.pageProps?.data;
  if (!data?.syllabus) throw new Error(`Missing official page data: ${url}`);
  const file = `${directory}/${subject}-${area ?? 'overview'}.html`;
  await writeFile(file, bytes);
  sources.push({subject, year, area, url, file, sha256: digest(bytes), fetchedAt: new Date().toISOString()});
  if (!area) return;
  const focus = data.focusArea;
  if (!focus?.item || focus.item.system.codename !== area) throw new Error(`Unexpected focus area: ${url}`);
  const title = focus.item.elements.title.value;
  focusAreas.push({subject, year, area, title, url});
  for (const groupId of focus.item.elements.contentgroups.value) {
    const group = focus.linkedItems[groupId];
    if (!group) throw new Error(`Missing group ${groupId}`);
    for (const id of group.elements.content_items.value) {
      const item = focus.linkedItems[id];
      if (!item) throw new Error(`Missing content ${id}`);
      const text = expand(item.elements.title, focus.linkedItems);
      const including = expand(item.elements.including_statements, focus.linkedItems);
      const examples = expand(item.elements.examples, focus.linkedItems);
      if (!text) throw new Error(`Empty content ${id}`);
      points.push({subject, year, area, focusArea: title, group: group.elements.title.value,
        id, text, including, examples, url, contentSha256: digest(JSON.stringify({text, including, examples}))});
    }
  }
};
// Limit concurrent public downloads to four. Inspect every result before exporting.
const tasks = Object.entries(areas).flatMap(([subject, values]) => [[subject, null, null], ...values.map(([year, area]) => [subject, year, area])]);
for (let i = 0; i < tasks.length; i += 4) {
  const results = await Promise.allSettled(tasks.slice(i, i + 4).map(args => retrieve(...args)));
  for (const result of results) if (result.status === 'rejected') throw result.reason;
}
for (const subject of Object.keys(areas)) {
  const url = `https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/${subject}-stage-6-2017`;
  const response = await fetch(url, {signal: AbortSignal.timeout(30000)});
  if (!response.ok) throw new Error(`Legacy course unavailable: ${subject}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  const links = [...bytes.toString('utf8').matchAll(/href="([^"]+syllabus[^"?]*\.docx)"/gu)]
    .map(m => new URL(m[1], url).href).filter(link => new URL(link).hostname === 'www.nsw.gov.au');
  const candidates = [...new Set(links)].filter(link => link.includes(subject));
  if (candidates.length !== 1) throw new Error(`Expected one official legacy syllabus: ${subject}`);
  const doc = await fetch(candidates[0], {signal: AbortSignal.timeout(30000)});
  if (!doc.ok) throw new Error(`Legacy syllabus unavailable: ${subject}`);
  const docBytes = Buffer.from(await doc.arrayBuffer()), file = `${directory}/${subject}-2017.docx`;
  await writeFile(file, docBytes);
  const extractedFile = `${directory}/${subject}-2017-paragraphs.json`;
  const extraction = spawnSync('python', ['scripts/extract-nesa-docx.py', file, extractedFile], {encoding: 'utf8'});
  if (extraction.error || extraction.status !== 0) throw new Error(extraction.error?.message ?? extraction.stderr);
  sources.push({subject, edition: 2017, url: candidates[0], file, sha256: digest(docBytes), extractedFile, fetchedAt: new Date().toISOString()});
}
sources.sort((a, b) => a.url.localeCompare(b.url));
points.sort((a, b) => a.subject.localeCompare(b.subject) || a.year - b.year || a.area.localeCompare(b.area));
const report = {schemaVersion: 1, generatedAt: new Date().toISOString(), sources, focusAreas, points,
  limits: 'Official content extraction, not lesson coverage or scientific approval. Examples remain separate from requirements. Read raw HTML for mathematical notation.'};
await writeFile(`${directory}/official-content.json`, JSON.stringify(report, null, 2) + '\n');
await writeFile(`${directory}/official-content.txt`, points.map(p => `${p.subject} Y${p.year} | ${p.focusArea} | ${p.group} | ${p.id}\n${p.text}${p.including ? '\nIncluding: ' + p.including : ''}${p.examples ? '\nExamples: ' + p.examples : ''}`).join('\n\n') + '\n');
console.log(JSON.stringify({sources: sources.length, contentItems: points.length,
  bySubject: Object.fromEntries(Object.keys(areas).map(s => [s, points.filter(p => p.subject === s).length])), directory}));
