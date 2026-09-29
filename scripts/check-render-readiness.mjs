// Read-only preflight. Run on the machine holding public/audio and public/assets.
// This validates media/timing prerequisites; it does not certify scientific or visual quality.
import {readFileSync, existsSync, readdirSync} from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {getCompositionId} from './lesson-utils.mjs';

const args = process.argv.slice(2);
const json = args.includes('--json');
const explicit = args.filter((a) => !a.startsWith('--'));
const files = explicit.length ? explicit : readdirSync('src/data').filter((f) => f.endsWith('.json')).map((f) => `src/data/${f}`);
const registry = readFileSync('src/data/lessonRegistry.ts', 'utf8');
const registered = new Set([...registry.matchAll(/from '\.\/([^']+\.json)'/g)].map((m) => m[1]));
const assetSource = readFileSync('src/assets/index.ts', 'utf8');
const assets = new Map([...assetSource.matchAll(/^\s*([A-Za-z0-9_]+):\s*staticFile\(['"]([^'"]+)['"]\)/gm)].map((m) => [m[1], m[2]]));
const hash = (text) => createHash('sha256').update(text).digest('hex').slice(0, 12);
const rows = files.map((file) => {
  const lesson = JSON.parse(readFileSync(file, 'utf8'));
  const findings = [];
  const add = (scene, code, detail) => findings.push({scene, code, detail});
  if (!registered.has(path.basename(file))) add('-', 'NOT_REGISTERED', 'Run npm run generate:registry before rendering.');
  const fps = lesson.fps || 30;
  for (const scene of lesson.scenes) {
    const text = scene.voiceover?.text?.trim();
    const audio = scene.voiceover?.audioFile;
    if (text) {
      if (!audio) add(scene.id, 'NEEDS_AUDIO', 'Narration has no audio link.');
      else {
        const expected = `${scene.id}.${hash(scene.voiceover.text)}.mp3`;
        if (path.basename(audio) !== expected) add(scene.id, 'STALE_AUDIO', `Expected ${expected}; re-sync or regenerate.`);
        if (!existsSync(audio)) add(scene.id, 'MISSING_AUDIO', audio);
        const sidecar = audio.replace(/\.mp3$/, '.alignment.json');
        if (!existsSync(sidecar)) add(scene.id, 'MISSING_ALIGNMENT', sidecar);
        else {
          try {
            const alignment = JSON.parse(readFileSync(sidecar, 'utf8'));
            const ends = alignment.character_end_times_seconds;
            const seconds = Array.isArray(ends) ? ends.at(-1) : undefined;
            if (!Number.isFinite(seconds) || seconds < 0) add(scene.id, 'INVALID_ALIGNMENT', 'No finite nonnegative end time.');
            else {
              // SceneVoiceover trims to endFrame-startFrame; the transition begins 24 frames before the scene ends.
              const start = scene.voiceover.startFrame ?? 0;
              const end = scene.voiceover.endFrame ?? scene.durationInFrames;
              if (seconds * fps > end - start) add(scene.id, 'AUDIO_TRIMMED', 'Narration exceeds its playback window. Fit durations and check start/endFrame.');
              if (start + seconds * fps > scene.durationInFrames - 24) add(scene.id, 'NARRATION_IN_TRANSITION', 'Narration runs into the outgoing transition; retain tail room.');
            }
          } catch (e) { add(scene.id, 'INVALID_ALIGNMENT', e.message); }
        }
      }
    }
    if (scene.image) {
      const asset = assets.get(scene.image);
      if (!asset) add(scene.id, 'UNKNOWN_IMAGE', scene.image);
      else if (!existsSync(path.join('public', asset.replace(/^public\//, '')))) add(scene.id, 'MISSING_IMAGE', asset);
    }
    for (const [key, value] of Object.entries(scene.revealDelays ?? {})) {
      const frames = Array.isArray(value) ? value : [value];
      if (frames.some((f) => typeof f === 'number' && f >= scene.durationInFrames - 24)) add(scene.id, 'LATE_REVEAL', key);
    }
    for (const bullet of scene.bullets ?? []) {
      if (typeof bullet === 'object' && typeof bullet.at === 'number' && bullet.at * fps >= scene.durationInFrames - 24) add(scene.id, 'LATE_BULLET', bullet.text);
    }
  }
  if (lesson.introVoiceover?.audioFile && !existsSync(lesson.introVoiceover.audioFile)) add('intro', 'MISSING_INTRO', lesson.introVoiceover.audioFile);
  return {id: getCompositionId(lesson), file, prerequisiteChecksPass: findings.length === 0, findings};
});
const counts = {};
for (const row of rows) for (const f of row.findings) counts[f.code] = (counts[f.code] ?? 0) + 1;
const report = {lessons: rows.length, passing: rows.filter((r) => r.prerequisiteChecksPass).length, counts, rows};
if (json) console.log(JSON.stringify(report, null, 2));
else {
  console.log(`${report.passing}/${report.lessons} lessons pass media/timing prerequisites. Scientific review, subtitle export and visual review are separate.`);
  console.log(JSON.stringify(counts));
  for (const row of rows) if (row.findings.length) console.log(`${row.id}: ${[...new Set(row.findings.map((f) => f.code))].join(', ')}`);
}
if (rows.some((r) => !r.prerequisiteChecksPass)) process.exitCode = 1;
