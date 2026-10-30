// Additive retiming only. Keep the 18 October QA cue bodies and saved Studio SBV evidence.
// Usage: node scripts/prepare-caption-qa-retiming.mjs --output out/caption-repairs/<NEW-directory>
// Requires 31 commit-verified QA links and five saved-track captures. No remote or media actions.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {explainerCaptionCues, toSrt} from './lib/explainer-captions.mjs';

const sha = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const decode = bytes => bytes.toString('utf8').replace(/^\uFEFF/, '');
const readJson = bytes => JSON.parse(decode(bytes));
const slash = value => value.split(path.sep).join('/');
const validHash = value => typeof value === 'string' && /^[a-f0-9]{64}$/i.test(value);
const must = (condition, message) => { if (!condition) throw new Error(message); };
const sameTimes = (a, b) => a.length === b.length && a.every((cue, i) => cue.startMs === b[i].startMs && cue.endMs === b[i].endMs);
const sameBodies = (a, b) => a.length === b.length && a.every((cue, i) => cue.text === b[i].text);
const flat = value => value.replace(/\s+/g, ' ').trim();

function milliseconds(value, separator) {
  const match = new RegExp(`^(\\d+):(\\d{2}):(\\d{2})\\${separator}(\\d{3})$`).exec(value);
  must(match && Number(match[2]) < 60 && Number(match[3]) < 60, `Invalid caption timestamp: ${value}`);
  return ((Number(match[1]) * 60 + Number(match[2])) * 60 + Number(match[3])) * 1000 + Number(match[4]);
}

function blocks(bytes) {
  return decode(bytes).replace(/\r\n/g, '\n').replace(/\n+$/, '').split(/\n[ \t]*\n/).filter(block => block.trim());
}

export function parseSrt(bytes) {
  return blocks(bytes).map((block, index) => {
    const rows = block.split('\n');
    must(rows[0] === String(index + 1), `Unexpected SRT cue index ${index + 1}.`);
    const times = rows[1]?.split(' --> ');
    must(times?.length === 2 && rows.length >= 3, `Invalid SRT cue ${index + 1}.`);
    const cue = {startMs: milliseconds(times[0], ','), endMs: milliseconds(times[1], ','), text: rows.slice(2).join('\n')};
    must(cue.endMs > cue.startMs && cue.text.length, `Invalid interval or text in SRT cue ${index + 1}.`);
    return cue;
  });
}

export function parseSbv(bytes) {
  return blocks(bytes).map((block, index) => {
    const rows = block.split('\n'), times = rows[0].split(',');
    must(times.length === 2 && rows.length >= 2, `Invalid SBV cue ${index + 1}.`);
    const cue = {startMs: milliseconds(times[0], '.'), endMs: milliseconds(times[1], '.'), text: rows.slice(1).join('\n')};
    must(cue.endMs > cue.startMs && cue.text.length, `Invalid interval or text in SBV cue ${index + 1}.`);
    return cue;
  });
}

function stamp(ms, separator) {
  must(Number.isSafeInteger(ms) && ms >= 0, 'Caption time must be whole nonnegative milliseconds.');
  return `${String(Math.floor(ms / 3600000)).padStart(2, '0')}:${String(Math.floor(ms / 60000) % 60).padStart(2, '0')}:${String(Math.floor(ms / 1000) % 60).padStart(2, '0')}${separator}${String(ms % 1000).padStart(3, '0')}`;
}

export function serialiseCaptions(cues, format = 'srt') {
  must(['srt', 'vtt'].includes(format), 'Unsupported caption format.');
  return Buffer.from((format === 'vtt' ? 'WEBVTT\n\n' : '') + cues.map((cue, i) =>
    `${format === 'srt' ? `${i + 1}\n` : ''}${stamp(cue.startMs, format === 'srt' ? ',' : '.')} --> ${stamp(cue.endMs, format === 'srt' ? ',' : '.')}\n${cue.text}\n`).join('\n'));
}

export function parseQaLinks(bytes, qaPath, root) {
  return [...decode(bytes).matchAll(/^\|\s*\[([^\]]+)\]\(([^)]+captions-fixed\.srt)\)\s*\|\s*(\d+)\s*\|/gm)].map(match => {
    const file = path.resolve(path.dirname(qaPath), match[2]);
    return {label: match[1], path: file, cueCount: Number(match[3]), relative: slash(path.relative(root, file))};
  });
}

export function timingDifferences(actual, reference) {
  must(actual.length === reference.length, 'Timing comparison cue counts differ.');
  const differences = actual.flatMap((cue, i) => {
    const startDeltaMs = cue.startMs - reference[i].startMs, endDeltaMs = cue.endMs - reference[i].endMs;
    return startDeltaMs || endDeltaMs ? [{cue: i + 1, startDeltaMs, endDeltaMs}] : [];
  });
  return {differentCues: differences.length, maxAbsoluteDeltaMs: Math.max(0, ...differences.flatMap(cue => [Math.abs(cue.startDeltaMs), Math.abs(cue.endDeltaMs)])), differences};
}

export function retimeQaCues({qa, older, prior, lesson, live = null}) {
  const target = parseSrt(Buffer.from(toSrt(explainerCaptionCues(lesson).cues)));
  must(qa.length && qa.length === older.length && qa.length === prior.length && qa.length === target.length, 'QA, original, staged and measured cue counts must match.');
  must(sameTimes(qa, older), 'QA cue timestamps differ from the older original baseline.');
  must(sameTimes(prior, target), 'Prior staged timestamps differ from measured cumulative timing.');
  must(older.every((cue, i) => flat(cue.text) === flat(target[i].text)), 'Original cue order or grouping differs from measured source.');
  must(prior.every((cue, i) => flat(cue.text) === flat(older[i].text)), 'Prior staged cue order differs from the older baseline.');
  if (live) must(sameBodies(live, qa), 'Saved Studio SBV cue text or line breaks differ from QA.');
  const baseline = live ?? qa, cues = target.map((cue, i) => ({...cue, text: baseline[i].text}));
  must(sameBodies(cues, qa), 'Retiming changed QA cue text or line breaks.');
  return {cues, baseline, liveVsQaTiming: live ? timingDifferences(live, qa) : null, retimingVsReference: timingDifferences(cues, baseline)};
}

export function prepareCaptionQaRetiming({root = process.cwd(), catalogPath = 'out/caption-repairs/review-catalog-2026-10-25-v2/catalog.json',
  qaPath = 'docs/production/claude-pm/youtube/captions-qa-2026-10.md', liveEvidencePath = 'docs/production/claude-pm/checks/codex-interim-live-caption-provenance.json',
  outputPath, qaCommit = '93642fc', expectedQaCount = 31, expectedLiveCount = 5} = {}) {
  root = path.resolve(root);
  const absolute = relative => path.resolve(root, relative.replaceAll('\\', path.sep));
  const relative = absolutePath => slash(path.relative(root, absolutePath));
  must(outputPath, 'Supply an explicit new output directory.');
  const output = absolute(outputPath), outputRelative = relative(output);
  must(outputRelative && !outputRelative.startsWith('../') && !path.isAbsolute(outputRelative), 'Output must be a new directory inside the workspace.');
  must(!fs.existsSync(output), 'Output already exists. Preserve it and choose a new directory.');
  const files = new Map(), snapshots = new Map(), sourceInputs = [];
  const put = (localPath, bytes) => { must(!files.has(localPath), `Duplicate output: ${localPath}`); files.set(localPath, Buffer.isBuffer(bytes) ? bytes : Buffer.from(bytes)); return slash(path.join(outputRelative, localPath)); };
  const snapshot = (sourcePath, bytes) => {
    const key = absolute(sourcePath), old = snapshots.get(key);
    if (old) { must(old.sha256 === sha(bytes), `Input changed while preparing: ${sourcePath}`); return old; }
    const localPath = `inputs/${String(snapshots.size).padStart(3, '0')}-${path.basename(key)}`;
    const item = {path: put(localPath, bytes), sha256: sha(bytes), originalPath: relative(key)};
    snapshots.set(key, item); sourceInputs.push(item); return item;
  };
  const read = sourcePath => { const bytes = fs.readFileSync(absolute(sourcePath)); snapshot(sourcePath, bytes); return bytes; };
  const pinned = (sourcePath, expected) => { must(validHash(expected), `Missing SHA256 for ${sourcePath}`); const bytes = read(sourcePath); must(sha(bytes) === expected.toLowerCase(), `SHA256 mismatch: ${sourcePath}`); return bytes; };
  const catalogBytes = read(catalogPath), catalog = readJson(catalogBytes);
  must(Array.isArray(catalog.manifests) && catalog.manifests.length, 'Catalog has no manifests.');
  const byQaPath = new Map(), parentManifests = [];
  for (const item of catalog.manifests) {
    const manifestBytes = pinned(item.path, item.sha256), manifest = readJson(manifestBytes);
    pinned(item.parent, item.parentSha256);
    if (manifest.parentManifestPath) must(absolute(manifest.parentManifestPath) === absolute(item.parent) && manifest.parentManifestSha256 === item.parentSha256, 'Catalog and manifest parent references differ.');
    pinned(manifest.input, manifest.inputSha256);
    for (const source of manifest.sourceInputs ?? []) pinned(source.path, source.sha256);
    must(Array.isArray(manifest.videos), 'Parent manifest has no videos.');
    if (item.videoCount !== undefined) must(item.videoCount === manifest.videos.length, 'Catalog video count differs from manifest.');
    parentManifests.push({...item});
    for (const record of manifest.videos) {
      const qaFile = path.join(path.dirname(absolute(record.lessonPath)), 'captions-fixed.srt');
      const list = byQaPath.get(qaFile) ?? []; list.push({record, parent: item}); byQaPath.set(qaFile, list);
    }
  }
  const qaBytes = read(qaPath), links = parseQaLinks(qaBytes, absolute(qaPath), root);
  must(links.length === expectedQaCount && new Set(links.map(link => link.path)).size === links.length, `Expected ${expectedQaCount} unique QA links.`);
  const fullCommit = execFileSync('git', ['rev-parse', '--verify', `${qaCommit}^{commit}`], {cwd: root, encoding: 'utf8'}).trim();
  const liveBytes = read(liveEvidencePath), liveEvidence = readJson(liveBytes);
  must(Array.isArray(liveEvidence.videos) && liveEvidence.videos.length === expectedLiveCount, `Expected ${expectedLiveCount} saved Studio captures before output.`);
  const liveById = new Map();
  for (const capture of liveEvidence.videos) { must(capture.videoId && !liveById.has(capture.videoId), 'Duplicate or missing captured video ID.'); liveById.set(capture.videoId, capture); }
  const prepared = [], sourceRecords = [], consumedCaptures = new Set();
  for (const link of links) {
    must(link.relative && !link.relative.startsWith('../') && !path.isAbsolute(link.relative), 'QA file is outside the repository.');
    const matches = byQaPath.get(link.path) ?? [];
    must(matches.length === 1, `QA link must match exactly one catalogue record: ${link.label}`);
    const {record, parent} = matches[0];
    must(/^[a-z0-9-]+$/i.test(record.lessonId) && record.videoId, 'Missing or unsafe lesson/video ID.');
    const fixedBytes = read(link.relative), fixedHash = sha(fixedBytes);
    const historical = execFileSync('git', ['show', `${fullCommit}:${link.relative}`], {cwd: root, maxBuffer: 16 * 1024 * 1024});
    must(fixedHash === sha(historical), `QA file differs from commit ${qaCommit}: ${link.relative}`);
    const qa = parseSrt(fixedBytes); must(qa.length === link.cueCount, `QA document cue count differs: ${link.label}`);
    const olderBytes = pinned(record.originalCaptionPath, record.originalCaptionSha256), older = parseSrt(olderBytes);
    const lessonBytes = pinned(record.lessonPath, record.lessonSha256), lesson = readJson(lessonBytes);
    const priorBytes = pinned(record.correctedSrtPath, record.correctedSrtSha256), prior = parseSrt(priorBytes);
    pinned(record.correctedVttPath, record.correctedVttSha256);
    let timingEvidenceSnapshot = null;
    if (record.timingEvidence) timingEvidenceSnapshot = snapshot(record.timingEvidence.path, pinned(record.timingEvidence.path, record.timingEvidence.sha256));
    if (record.lessonId === 'bio-m5-b03a') must(record.timingEvidence && Number.isFinite(record.videoTailVarianceSeconds) && record.reviewNotes?.length, 'B03a requires its timing evidence and tail note.');
    const capture = liveById.get(record.videoId); let live = null, rawDownloadProvenance = null;
    if (capture) {
      must(capture.lessonId === record.lessonId && capture.captionLanguage === 'English (Australia)', `Captured track identity differs: ${record.lessonId}`);
      must(absolute(capture.referencePath) === link.path && capture.referenceSha256 === fixedHash, `Captured QA reference differs: ${record.lessonId}`);
      const raw = pinned(capture.downloadPath, capture.downloadedSha256); live = parseSbv(raw); consumedCaptures.add(record.videoId);
      rawDownloadProvenance = {...capture, rawSnapshot: snapshot(capture.downloadPath, raw),
        evidencePath: liveEvidencePath, evidenceSha256: sha(liveBytes), evidenceSnapshot: snapshots.get(absolute(liveEvidencePath)),
        scope: 'Saved Studio track SBV cue content and timing. No raw historical SRT byte identity or public playback claim.'};
    }
    const result = retimeQaCues({qa, older, prior, lesson, live});
    const referenceBytes = live ? serialiseCaptions(result.baseline) : fixedBytes;
    const referencePath = put(`references/${record.lessonId}.srt`, referenceBytes);
    const correctedSrt = serialiseCaptions(result.cues), correctedVtt = serialiseCaptions(result.cues, 'vtt');
    must(sameBodies(parseSrt(correctedSrt), qa), 'Serialized output changed QA cue bodies.');
    const correctedSrtPath = put(`${record.lessonId}.srt`, correctedSrt), correctedVttPath = put(`${record.lessonId}.vtt`, correctedVtt);
    sourceRecords.push({parentManifest: parent, record});
    prepared.push({...record,
      sourceLessonPath: record.lessonPath, lessonPath: snapshots.get(absolute(record.lessonPath)).path,
      originalCaptionPath: referencePath, originalCaptionSha256: sha(referenceBytes),
      ledgerOriginalCaptionPath: record.originalCaptionPath, ledgerOriginalCaptionSha256: record.originalCaptionSha256,
      uploadedTrackIdentityVerified: false, currentSavedTrackIdentityVerified: !!capture,
      savedStudioReferenceSrtPath: capture ? referencePath : null, savedStudioReferenceSrtSha256: capture ? sha(referenceBytes) : null,
      recordedCaptionHashScope: 'Unchanged historical upload-ledger field. Does not identify the later QA replacement or current saved track.',
      captionReferenceKind: capture ? 'saved-studio-sbv-converted-to-reference-srt' : 'git-verified-qa-baseline-current-saved-identity-pending',
      qaSourcePath: link.relative, qaSourceSha256: fixedHash, qaSourceCommit: fullCommit, qaSourceCommitRequested: qaCommit,
      qaSourceSnapshot: snapshots.get(absolute(link.relative)),
      parentManifestPath: parent.path, parentManifestSha256: parent.sha256,
      previousCandidateSrtPath: record.correctedSrtPath, previousCandidateSrtSha256: record.correctedSrtSha256,
      rawDownloadProvenance, savedTrackVsQaTiming: result.liveVsQaTiming, retimingVsReference: result.retimingVsReference,
      timingEvidenceSnapshot, correctedSrtPath, correctedSrtSha256: sha(correctedSrt), correctedVttPath, correctedVttSha256: sha(correctedVtt),
      cueCount: result.cues.length, textUnchanged: true, lineBreaksPreserved: true, qaTextAndLineBreaksPreserved: true,
      priorStagedTimesMatch: true, reviewStatus: capture ? 'saved-studio-reference-verified-playback-and-replacement-pending' : 'qa-baseline-source-only-current-saved-identity-and-playback-pending',
      identityLimits: 'Known saved Studio tracks only where captured. No raw historical upload SRT hashes are inferred. Playback, listening and public replacement remain pending.'});
  }
  must(consumedCaptures.size === expectedLiveCount, 'Every saved capture must match one of the QA links.');
  const inputBytes = Buffer.from(JSON.stringify({date: '2026-10-25', qaDocumentPath: qaPath, qaDocumentSha256: sha(qaBytes), qaCommit: fullCommit,
    parentCatalogPath: catalogPath, parentCatalogSha256: sha(catalogBytes), liveEvidencePath, liveEvidenceSha256: sha(liveBytes),
    sourceRecords, videos: sourceRecords.map(source => source.record)}, null, 2) + '\n');
  const inputPath = put('repair-inputs.json', inputBytes);
  const manifest = {date: '2026-10-25', timezone: 'Australia/Sydney', status: 'qa-preserving-local-retiming-playback-and-replacement-pending',
    input: inputPath, inputSha256: sha(inputBytes), sourceInputs, parentCatalogPath: catalogPath, parentCatalogSha256: sha(catalogBytes), parentManifests,
    qaDocumentPath: qaPath, qaDocumentSha256: sha(qaBytes), qaSourceCommit: fullCommit, qaLinkCount: links.length,
    currentSavedTrackIdentityVerifiedCount: consumedCaptures.size,
    sourceOnlyLimits: ['QA files are pinned to the documented commit. Uncaptured current saved tracks remain unverified.',
      'Captured SBV evidence proves saved cue content and timing, not raw historical SRT bytes or current public-player playback.',
      'No media, narration, live tracks, upload records or approval state changed. B03a tail and baked-in captions remain separate review issues.'],
    videos: prepared};
  put('manifest.json', JSON.stringify(manifest, null, 2) + '\n');
  // All input validation finishes before the first directory or file write.
  fs.mkdirSync(path.dirname(output), {recursive: true}); fs.mkdirSync(output);
  for (const [file, bytes] of files) { const destination = path.join(output, file); fs.mkdirSync(path.dirname(destination), {recursive: true}); fs.writeFileSync(destination, bytes, {flag: 'wx'}); }
  return {output: outputRelative, videos: prepared.length, savedStudioReferences: consumedCaptures.size, cueCount: prepared.reduce((n, row) => n + row.cueCount, 0), manifestSha256: sha(files.get('manifest.json'))};
}

export function parseArgs(args) {
  const options = {}, flags = {'--catalog': 'catalogPath', '--qa': 'qaPath', '--live-evidence': 'liveEvidencePath', '--output': 'outputPath'};
  for (let i = 0; i < args.length; i++) { must(flags[args[i]] && args[i + 1] && !args[i + 1].startsWith('--'), `Unknown or incomplete option: ${args[i]}`); options[flags[args[i]]] = args[++i]; }
  must(options.outputPath, 'Use --output with a new directory.'); return options;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  if (process.argv.slice(2).includes('--help')) console.log('Usage: node scripts/prepare-caption-qa-retiming.mjs --output <NEW-workspace-directory> [--catalog <catalog.json>] [--qa <QA.md>] [--live-evidence <captures.json>]\nRequires 31 commit-verified QA links and five saved Studio SBVs. Preserves exact cue text and line breaks. Refuses changed inputs, cue mismatch, missing captures and existing output. Writes additive local candidates and frozen provenance only. Playback, B03a tail review and live replacement remain pending.');
  else console.log(JSON.stringify(prepareCaptionQaRetiming(parseArgs(process.argv.slice(2))), null, 2));
}
