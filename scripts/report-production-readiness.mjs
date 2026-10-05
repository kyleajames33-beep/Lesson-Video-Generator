import {readFileSync, readdirSync, mkdirSync, writeFileSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {sha256} from './lib/playback-assembly.mjs';
import {inspectNarration} from './lib/narration-integrity.mjs';
import {readinessReport} from './lib/production-readiness.mjs';
import {checkReleaseEvidence} from './lib/release-gate.mjs';
const args = process.argv.slice(2), gatePath = args.find(a => a.startsWith('--gate='))?.slice(7);
const sourceFiles = args.includes('--all') ? readdirSync('src/data').filter(f => f.endsWith('.json')).sort().map(f => 'src/data/' + f) : args.filter(a => !a.startsWith('--'));
if (!sourceFiles.length || gatePath && sourceFiles.length !== 1) throw new Error('Usage: npm run report:readiness -- lesson.json [--gate=config.json] | --all');
const inputs = sourceFiles.map(file => ({file, bytes: readFileSync(file)}));
const script = fileURLToPath(new URL('release-preflight.mjs', import.meta.url));
const run = spawnSync(process.execPath, [script, ...sourceFiles, '--json'], {encoding: 'utf8', maxBuffer: 64 * 1024 * 1024});
if (run.error || ![0, 1].includes(run.status)) throw new Error('Preflight could not run: ' + (run.error?.message ?? run.stderr));
let result;
try { result = JSON.parse(run.stdout); } catch { throw new Error('Preflight produced no readable report: ' + run.stderr); }
if (result.lessons?.length !== sourceFiles.length) throw new Error('Incomplete fresh preflight report.');
let releaseGate = null;
if (gatePath) {
  try {
    const config = JSON.parse(readFileSync(gatePath));
    // Bind both package snapshots to this input before trusting their gate.
    for (const key of ['snapshotPath', 'inputSnapshotPath']) {
      const snapshot = JSON.parse(readFileSync(config[key]));
      if (path.resolve(snapshot.options?.lessonPath ?? '') !== path.resolve(sourceFiles[0])) throw new Error('Release evidence belongs to a different lesson.');
    }
    releaseGate = checkReleaseEvidence(process.cwd(), config);
  } catch (e) { releaseGate = {ready: false, status: 'release-evidence-incomplete', blockers: [{code: 'EVIDENCE_INVALID', detail: e.message}]}; }
}
const lessons = inputs.map(({file, bytes}, i) => {
  if (sha256(readFileSync(file)) !== sha256(bytes)) throw new Error('Source changed during readiness check. Retry against a stable draft.');
  const lesson = JSON.parse(bytes), segments = [...lesson.scenes];
  if ((lesson.introDurationInFrames ?? 270) > 0 && lesson.introVoiceover) segments.push({id: 'intro', voiceover: lesson.introVoiceover, captions: lesson.introCaptions});
  return readinessReport({lesson, sourceJson: file, sourceSha256: sha256(bytes), preflight: result.lessons[i],
    narration: segments.filter(s => s.voiceover).map(s => ({scene: s.id, ...inspectNarration(s)})), releaseGate});
});
mkdirSync('out/audits', {recursive: true});
const report = {generatedAt: new Date().toISOString(), scope: 'selected local source and evidence only', lessons};
writeFileSync('out/audits/production-readiness.json', JSON.stringify(report, null, 2) + '\n');
const lines = lessons.flatMap(r => [`${r.compositionId}: ${r.status}`, ...Object.entries(r.stages).map(([stage, value]) => `  ${stage}: ${value.status}`), '']);
writeFileSync('out/audits/production-readiness.txt', lines.join('\n') + '\nProduction availability elsewhere is unknown. No generation or publication authorised.\n');
console.log(args.includes('--json') ? JSON.stringify(report, null, 2) : lines.join('\n') + '\nDetails: out/audits/production-readiness.json');
process.exitCode = lessons.every(r => r.status === 'release-evidence-complete') ? 0 : 1;
