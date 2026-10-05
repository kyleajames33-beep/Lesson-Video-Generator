import {createHash} from 'node:crypto';
import {existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {getCompositionId} from './lesson-utils.mjs';

const slash = value => value.replace(/\\/g, '/');
const hash = value => createHash('sha256').update(value).digest('hex');
const present = file => existsSync(file) && statSync(file).isFile() && statSync(file).size > 0;
const readJson = file => JSON.parse(readFileSync(file, 'utf8'));
const words = value => typeof value === 'string' ? value.trim().split(/\s+/).filter(Boolean).length : 0;

// Existing source values may contain prohibited copy. Preserve them as escaped
// data in the inventory, without introducing that punctuation in new prose.
export const serialise = value => JSON.stringify(value, null, 2).replace(/\u2014/g, '\\u2014') + '\n';

function strings(value, field = '', result = []) {
  if (typeof value === 'string') result.push({field, value});
  else if (Array.isArray(value)) value.forEach((item, i) => strings(item, `${field}[${i}]`, result));
  else if (value && typeof value === 'object') {
    for (const [key, item] of Object.entries(value)) strings(item, field ? `${field}.${key}` : key, result);
  }
  return result;
}

function taskCandidates(lesson) {
  const text = `${lesson.title ?? ''} ${lesson.lessonIntent ?? ''}`;
  const result = new Set();
  if (/practical|investigation|experiment|titration|apparatus/i.test(text)) result.add('investigation');
  if (/graph|data|evidence|interpret|reading/i.test(text)) result.add('evidence-interpretation');
  if (/replication|transcription|translation|mechanism|process|transport|photosynthesis|respiration/i.test(text)) result.add('mechanism');
  if (/molar|calculate|calculation|stoichiometr|limiting|concentration|yield|mass/i.test(text)) result.add('calculation-or-ratio');
  if (/revision|checkpoint|exam/i.test(text)) result.add('revision-or-exam');
  if (!result.size) result.add('concept-or-other');
  return [...result];
}

export function inventoryLibrary(root = process.cwd()) {
  const at = rel => path.resolve(root, rel);
  const dataDir = at('src/data');
  const files = readdirSync(dataDir).filter(f => /^(chemistry|biology|physics)-.*\.json$/i.test(f)).sort();
  const registryFile = at('src/assets/index.ts');
  const registry = existsSync(registryFile) ? readFileSync(registryFile, 'utf8') : '';
  const assets = new Map([...registry.matchAll(/(\w+)\s*:\s*staticFile\(['"]([^'"]+)['"]\)/g)].map(m => [m[1], m[2]]));
  const constantsPath = at('src/lesson/timing-constants.json');
  const timing = existsSync(constantsPath) ? readJson(constantsPath) : null;
  const usedAssets = new Map();
  const issues = [];
  const issue = (lessonId, sceneId, code, field, detail) => issues.push({lessonId, sceneId, code, field, detail});
  const sourceFiles = [];
  const checkPath = (value, base = 'public') => {
    if (typeof value !== 'string' || !value) return {path: null, present: false, invalid: false};
    const cleaned = slash(value).replace(/^public\//, '');
    const resolved = path.resolve(at(base), cleaned);
    const rel = path.relative(at(base), resolved);
    if (rel === '..' || rel.startsWith('..' + path.sep) || path.isAbsolute(rel)) return {path: value, present: false, invalid: true};
    return {path: slash(path.relative(root, resolved)), present: present(resolved), invalid: false};
  };
  const artefacts = candidates => candidates.filter(rel => present(at(rel))).map(rel => ({path: rel, bytes: statSync(at(rel)).size}));
  const lessons = files.map(file => {
    const sourceJson = `src/data/${file}`;
    const bytes = readFileSync(at(sourceJson));
    const sourceSha256 = hash(bytes);
    sourceFiles.push({path: sourceJson, sha256: sourceSha256});
    let lesson;
    try { lesson = JSON.parse(bytes.toString('utf8')); }
    catch (error) {
      issue(file, null, 'JSON_INVALID', '', error.message);
      return {sourceJson, sourceSha256, contentStatus: 'invalid-json', disposition: 'hold'};
    }
    const id = getCompositionId(lesson);
    const scenes = Array.isArray(lesson.scenes) ? lesson.scenes : [];
    if (!scenes.length) issue(id, null, 'SCENES_MISSING', 'scenes', 'No scene array or empty array.');
    for (const item of strings(lesson)) {
      if (item.value.includes(String.fromCodePoint(0x2014))) issue(id, null, 'COPY_PUNCTUATION', item.field, 'Contains U+2014; inspect before recording or releasing selected copy.');
      if (/\b(?:full marks|guaranteed? (?:marks|band)|half (?:the |your )?class|band (?:six|6))\b/i.test(item.value)) {
        issue(id, null, 'CLAIM_REVIEW', item.field, 'Possible unsupported attainment/prevalence claim; context needs human review.');
      }
    }
    const spoken = [];
    if (lesson.introVoiceover?.text?.trim()) spoken.push({id: 'intro', vo: lesson.introVoiceover, captions: lesson.introCaptions, duration: timing?.INTRO_STINGER_FRAMES});
    scenes.forEach(scene => {
      if (scene.voiceover?.text?.trim()) spoken.push({id: scene.id, vo: scene.voiceover, captions: scene.captions, duration: scene.durationInFrames});
      if (scene.type === 'quickCheck' && scene.pausePrompt) issue(id, scene.id, 'RESPONSE_HOLD_REVIEW', 'pausePrompt', 'Prompt exists, but actual answer-free audio/visual interval has not been verified.');
      if (scene.image) {
        const value = assets.get(scene.image);
        const ref = value ? checkPath(value) : {path: null, present: false, invalid: false};
        if (!usedAssets.has(scene.image)) usedAssets.set(scene.image, {key: scene.image, ...ref, references: []});
        usedAssets.get(scene.image).references.push({lessonId: id, sceneId: scene.id});
        if (!value) issue(id, scene.id, 'IMAGE_UNREGISTERED', 'image', scene.image);
        else if (!ref.present) issue(id, scene.id, ref.invalid ? 'PATH_OUTSIDE_PUBLIC' : 'IMAGE_MISSING', 'image', value);
      }
      if (scene.diagram?.type === 'lottie') {
        const ref = checkPath(scene.diagram.src);
        if (!ref.present) issue(id, scene.id, ref.invalid ? 'PATH_OUTSIDE_PUBLIC' : 'DIAGRAM_MEDIA_MISSING', 'diagram.src', scene.diagram.src);
      }
    });
    const fps = lesson.fps ?? 30;
    const recordings = spoken.map(({id: sceneId, vo, captions, duration}) => {
      const media = checkPath(vo.audioFile);
      const textHash = hash(vo.text).slice(0, 12);
      const filenameHash = vo.audioFile?.match(/\.([a-f0-9]{12})\.mp3$/i)?.[1]?.toLowerCase();
      const textHashStatus = filenameHash ? filenameHash === textHash ? 'matches-filename' : 'mismatch' : 'unverifiable';
      if (!media.present) issue(id, sceneId, media.invalid ? 'PATH_OUTSIDE_PUBLIC' : vo.audioFile ? 'AUDIO_MISSING' : 'AUDIO_UNWIRED', 'voiceover.audioFile', vo.audioFile ?? 'No audio path.');
      if (media.present && textHashStatus === 'mismatch') issue(id, sceneId, 'AUDIO_TEXT_HASH_MISMATCH', 'voiceover.text', 'Filename hash differs from current text; no listening performed.');
      if (media.present && textHashStatus === 'unverifiable') issue(id, sceneId, 'AUDIO_HASH_UNVERIFIABLE', 'voiceover.audioFile', 'Filename does not expose a text hash.');
      let alignmentStatus = 'not-checked-without-audio';
      let alignmentPath = null;
      if (media.present) {
        alignmentPath = media.path?.replace(/\.[^.]+$/, '.alignment.json');
        if (!present(at(alignmentPath))) alignmentStatus = 'missing';
        else {
          try {
            const a = readJson(at(alignmentPath));
            const starts = a.character_start_times_seconds, ends = a.character_end_times_seconds;
            const valid = Array.isArray(a.characters) && Array.isArray(starts) && Array.isArray(ends) && starts.length > 0 && starts.length === ends.length && a.characters.length === ends.length &&
              ends.every((end, i) => Number.isFinite(end) && Number.isFinite(starts[i]) && starts[i] >= 0 && end >= starts[i] && (!i || starts[i] >= starts[i - 1] && end >= ends[i - 1]));
            alignmentStatus = valid ? 'structure-valid' : 'invalid';
            if (valid && Number.isFinite(duration)) {
              const startFrame = vo.startFrame ?? 0, endFrame = vo.endFrame ?? duration;
              if (startFrame < 0 || endFrame <= startFrame || endFrame > duration || ends.at(-1) > (endFrame - startFrame) / fps) {
                issue(id, sceneId, 'AUDIO_WINDOW_REVIEW', 'voiceover', 'Alignment end or configured playback window exceeds scene bounds.');
              }
            }
          } catch { alignmentStatus = 'invalid'; }
        }
        if (alignmentStatus !== 'structure-valid') issue(id, sceneId, 'ALIGNMENT_' + alignmentStatus.toUpperCase(), 'voiceover.audioFile', alignmentPath);
      }
      const captionsPresent = Array.isArray(captions) && captions.length > 0;
      if (!captionsPresent) issue(id, sceneId, sceneId === 'intro' ? 'INTRO_CAPTION_REVIEW' : 'TIMED_CAPTIONS_MISSING', 'captions', 'No local timed tokens found; exported track may differ and needs review.');
      return {sceneId, wordCount: words(vo.text), audio: media, textHashStatus, alignmentPath, alignmentStatus, timedCaptionTokensPresent: captionsPresent};
    });
    const metadataPresent = !!(lesson.syllabusVersion && lesson.syllabusDotPoints?.length);
    if (!metadataPresent) issue(id, null, 'CURRICULUM_METADATA_MISSING', 'syllabusVersion/syllabusDotPoints', 'Missing source version or declared content points.');
    const videoFiles = artefacts([`out/${id}.mp4`, `out/videos/${id}.mp4`, `public/videos/${id}.mp4`]);
    const supportingFiles = artefacts([`out/voiceover/${id}.manifest.json`, `out/captions/${id}.srt`, `out/captions/${id}.vtt`, `out/transcripts/${id}.json`, `out/retrospectives/${id}.md`]);
    const stageCounts = {
      spokenSegments: recordings.length,
      audioFilesPresent: recordings.filter(r => r.audio.present).length,
      matchingTextHashFiles: recordings.filter(r => r.audio.present && r.textHashStatus === 'matches-filename').length,
      structurallyValidAlignments: recordings.filter(r => r.alignmentStatus === 'structure-valid').length,
      segmentsWithTimedCaptionTokens: recordings.filter(r => r.timedCaptionTokensPresent).length,
    };
    const sourceDurationFrames = scenes.reduce((sum, scene) => sum + (Number.isFinite(scene.durationInFrames) ? scene.durationInFrames : 0), 0);
    const configuredDurationSeconds = timing ? (timing.INTRO_STINGER_FRAMES + sourceDurationFrames - Math.max(0, scenes.length - 1) * timing.TRANSITION_FRAMES) / fps : null;
    return {
      compositionId: id, sourceJson, sourceSha256, title: lesson.title, subject: lesson.subject, yearLevel: lesson.yearLevel,
      declaredProductionRole: lesson.productionRole ?? null,
      curriculum: {declaredVersion: lesson.syllabusVersion ?? null, declaredModule: lesson.syllabusModule ?? null, declaredContentPoints: lesson.syllabusDotPoints ?? [], verification: 'pending-source-and-cohort-check'},
      teaching: {declaredIntent: lesson.lessonIntent ?? null, taskCandidates: taskCandidates(lesson), classificationStatus: 'heuristic-review-required', prerequisiteMapping: 'pending'},
      sceneCount: scenes.length, sceneTypes: [...new Set(scenes.map(s => s.type))], configuredDurationSeconds,
      stages: {...stageCounts, content: 'source-present', rendering: videoFiles.length ? 'candidate-export-present' : 'not-found-at-canonical-paths', review: supportingFiles.some(f => f.path.includes('/retrospectives/')) ? 'record-present-unassessed' : 'unknown', release: 'unknown'},
      disposition: 'triage-pending', recordings, videoFiles, supportingFiles,
    };
  });
  const collisions = new Map();
  for (const lesson of lessons.filter(l => l.compositionId)) {
    const paths = collisions.get(lesson.compositionId) ?? [];
    paths.push(lesson.sourceJson); collisions.set(lesson.compositionId, paths);
  }
  for (const [id, paths] of collisions) if (paths.length > 1) issue(id, null, 'COMPOSITION_ID_COLLISION', '', paths.join(', '));
  const tally = selector => lessons.reduce((acc, l) => {const key = selector(l); acc[key] = (acc[key] ?? 0) + 1; return acc;}, {});
  const diagnosticsByCode = issues.reduce((acc, i) => {acc[i.code] = (acc[i.code] ?? 0) + 1; return acc;}, {});
  const summaries = {
    lessons: lessons.length, subjects: tally(l => l.subject ?? 'unparsed'), years: tally(l => l.yearLevel ?? 'unparsed'),
    audioCoverage: tally(l => !l.stages?.spokenSegments ? 'no-spoken-segments' : !l.stages.audioFilesPresent ? 'none' : l.stages.audioFilesPresent === l.stages.spokenSegments ? 'all-referenced-files-present' : 'partial'),
    candidateExports: lessons.filter(l => l.videoFiles?.length).length,
    retrospectiveFiles: lessons.filter(l => l.stages?.review === 'record-present-unassessed').length,
    verifiedReleases: null, diagnostics: issues.length, diagnosticsByCode,
  };
  return {
    schemaVersion: 1, generatedAt: new Date().toISOString(), scope: 'Local factual inventory and diagnostic flags; no playback, listening or release approval',
    limitations: ['Canonical export filenames only; differently named videos are not automatically associated', 'File presence and text filename hashes do not prove audio contents, science, rights or review approval', 'Existing retrospective files are located but not interpreted as release sign-off', 'Task classifications are title/intent heuristics, not verified teaching briefs', 'Curriculum metadata is declared source data, not independently verified mapping', 'Diagnostic flags need context; counts are occurrences rather than confirmed defects', 'Source inventory is hashed for drift detection; media files are not decoded by this tool'],
    summaries, lessons, diagnostics: issues, sourceFiles,
    assets: [...usedAssets.values()].map(a => ({...a, provenanceStatus: 'pending', scientificReviewStatus: 'pending'})),
    registrySha256: registry ? hash(registry) : null,
  };
}

export function summaryMarkdown(inventory) {
  const s = inventory.summaries;
  const counts = object => Object.entries(object).map(([key, value]) => `| ${key} | ${value} |`).join('\n');
  return `# Library baseline\n\nGenerated from local source and file presence at ${inventory.generatedAt}. Regenerate with \`node scripts/inventory-library.mjs\`. Existing lessons and media are read only.\n\n## What exists\n\n${s.lessons} lesson sources; ${s.candidateExports} lessons with candidate MP4s at canonical paths; ${s.retrospectiveFiles} lessons with retrospective files. Verified release count is unknown. A manifest, review template or exported file is not publication evidence.\n\n| Subject | Sources |\n| --- | --- |\n${counts(s.subjects)}\n\n| Referenced audio coverage | Lessons |\n| --- | --- |\n${counts(s.audioCoverage)}\n\n## Diagnostic queue\n\n${s.diagnostics} occurrences require triage. These are diagnostic flags, not ${s.diagnostics} confirmed errors. No duration ceiling, scene quota or inferred engagement score determines readiness.\n\n| Flag | Occurrences |\n| --- | --- |\n${counts(s.diagnosticsByCode)}\n\nInspect lesson/scene/field details in [catalogue-status.json](catalogue-status.json). Read the ranked [correction register](correction-register.md) before choosing production work. Asset references and pending provenance are in [asset-index.json](asset-index.json). Existing audits and dashboards remain historical inputs.\n\n## Interpretation limits\n\n${inventory.limitations.map(l => '- ' + l).join('\n')}\n\nNo Physics source was found if Physics is absent from the subject table. Physics component findings are tracked separately in the correction register. All dispositions remain triage-pending until a person verifies scope and severity.\n`;
}

export function writeInventory(root = process.cwd(), output = 'docs/production') {
  const inventory = inventoryLibrary(root);
  const dir = path.resolve(root, output);
  mkdirSync(dir, {recursive: true});
  const {assets, ...catalogue} = inventory;
  writeFileSync(path.join(dir, 'catalogue-status.json'), serialise(catalogue));
  writeFileSync(path.join(dir, 'asset-index.json'), serialise({generatedAt: inventory.generatedAt, scope: 'Image registry references used by catalogue scenes; not a complete component or rights inventory', registrySha256: inventory.registrySha256, assets}));
  writeFileSync(path.join(dir, 'catalogue-summary.md'), summaryMarkdown(inventory));
  return inventory.summaries;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log(serialise(writeInventory()).trim());
}
