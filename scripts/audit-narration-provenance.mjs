import {readdir, readFile, mkdir, writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';

// Read JSON and filenames only. Never open, decode or generate audio.
const digest = (bytes) => createHash('sha256').update(bytes).digest('hex');
const output = path.resolve(process.argv[2] ?? 'out/review/narration-provenance');
const root = process.cwd(), publicRoot = path.resolve(root, 'public');
const report = {status: 'text/sidecar provenance diagnostics; listening and take settings remain unverified', segments: []};
for (const file of (await readdir('src/data')).filter((file) => file.endsWith('.json')).sort()) {
  const source = `src/data/${file}`, bytes = await readFile(source), lesson = JSON.parse(bytes);
  if (!Array.isArray(lesson.scenes)) continue;
  for (const segment of [{id: 'intro', voiceover: lesson.introVoiceover}, ...lesson.scenes]) {
    const voiceover = segment.voiceover;
    if (!voiceover?.audioFile || typeof voiceover.text !== 'string') continue;
    const reference = voiceover.audioFile.replace(/^public[\\/]/u, '').replaceAll('\\', '/');
    const audioPath = path.resolve(publicRoot, reference), relative = path.relative(publicRoot, audioPath);
    if (relative.startsWith('..') || path.isAbsolute(relative)) {
      report.segments.push({source, scene: segment.id, status: 'invalid-media-path'}); continue;
    }
    const row = {source, sourceHash: digest(bytes), scene: segment.id, audioReference: voiceover.audioFile,
      textHash: digest(voiceover.text), filenameTextHash: path.basename(reference).match(/\.([a-f0-9]{12})\.(?:mp3|wav)$/iu)?.[1] ?? null};
    const alignmentPath = audioPath.replace(/\.[^.]+$/u, '.alignment.json');
    try {
      const alignmentBytes = await readFile(alignmentPath), alignment = JSON.parse(alignmentBytes);
      if (!Array.isArray(alignment.characters) || !alignment.characters.every((character) => typeof character === 'string')) throw new Error('Invalid character array');
      const alignedText = alignment.characters.join('');
      row.alignmentPath = path.relative(root, alignmentPath).replaceAll('\\', '/');
      row.alignmentHash = digest(alignmentBytes);
      row.alignedTextHash = digest(alignedText);
      row.exactTextMatch = alignedText === voiceover.text;
      row.whitespaceNormalisedMatch = alignedText.replace(/\s+/gu, ' ').trim() === voiceover.text.replace(/\s+/gu, ' ').trim();
      row.filenameMatchesAlignedText = row.filenameTextHash === row.alignedTextHash.slice(0, 12);
      row.status = row.exactTextMatch ? 'text-alignment-match' : row.whitespaceNormalisedMatch ? 'whitespace-difference-review' : 'text-mismatch-review';
      if (!row.whitespaceNormalisedMatch) {
        let index = 0;
        while (index < alignedText.length && index < voiceover.text.length && alignedText[index] === voiceover.text[index]) index++;
        row.firstDifference = {index, current: voiceover.text.slice(Math.max(0, index - 30), index + 150), aligned: alignedText.slice(Math.max(0, index - 30), index + 150)};
      }
    } catch (error) { row.status = error.code === 'ENOENT' ? 'alignment-missing' : 'alignment-invalid'; }
    row.filenameMatchesCurrentText = row.filenameTextHash === row.textHash.slice(0, 12);
    report.segments.push(row);
  }
}
report.counts = report.segments.reduce((counts, segment) => ({...counts, [segment.status]: (counts[segment.status] ?? 0) + 1}), {});
await mkdir(output, {recursive: true});
await writeFile(path.join(output, 'catalogue.json'), JSON.stringify(report, null, 2).replaceAll('\u2014', '\\u2014') + '\n');
const affected = report.segments.filter((segment) => segment.status === 'text-mismatch-review');
await writeFile(path.join(output, 'queue.md'), ['# Narration text provenance queue', '', report.status, '',
  'These are current text versus alignment-character comparisons, not listening findings. Matching text does not validate take settings, pronunciation, timing or actual speech.', '',
  '| Source | Scene | Status | Filename matches old aligned text? |', '| --- | --- | --- | --- |',
  ...affected.map((segment) => `| ${segment.source} | ${segment.scene} | ${segment.status} | ${segment.filenameMatchesAlignedText} |`), ''].join('\n'));
const selected = report.segments.find((segment) => segment.source === 'src/data/chemistry-y12-m6-l9-ka-kb-ice-tables.json' && segment.scene === 'hook');
if (selected?.status === 'text-mismatch-review') {
  const lesson = JSON.parse(await readFile(selected.source));
  const text = lesson.scenes.find((scene) => scene.id === 'hook').voiceover.text;
  await writeFile(path.join(output, 'C12-handoff.json'), JSON.stringify({status: 'replacement-take request draft; no recording authorised by this file',
    source: selected.source, sourceHash: selected.sourceHash, scene: 'hook', text, textHash: selected.textHash,
    existingReference: selected.audioReference, firstDifference: selected.firstDifference,
    voiceId: null, modelId: null, audioGenerated: false, sourceModified: false,
    nextActions: ['Review the current scientific hook before recording.', 'Choose the final approved voice/model/settings explicitly.',
      'Generate a new take and alignment later. Do not reuse the old take for changed words.',
      'Rebuild the scene duration, cues and captions, then inspect/listen and package the new release.'],
    limitation: 'Alignment text supports a stale take/text pairing; audio contents were not inspected.'}, null, 2).replaceAll('\u2014', '\\u2014') + '\n');
}
console.log(JSON.stringify({output, segments: report.segments.length, counts: report.counts}, null, 2));
