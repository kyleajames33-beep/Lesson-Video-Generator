import {existsSync, mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {assembleSpeech, sha256} from './lib/speech-assembly.mjs';
import {groupCaptionCues, toSrt, toVtt} from './lib/caption-timeline.mjs';
import {decodePcm} from './lib/media-tools.mjs';

const root = process.cwd();
const packagePath = 'docs/production/pilots/molar-mass/pilot.json';
const localPath = relative => {
  const file = path.resolve(root, relative), scope = path.relative(root, file);
  if (scope === '..' || scope.startsWith('..' + path.sep) || path.isAbsolute(scope)) throw new Error('Pilot inputs/outputs must stay in this workspace.');
  return file;
};
const json = file => JSON.parse(readFileSync(file, 'utf8'));

export function verifyDependencies(manifest, workspace = root) {
  return manifest.files.filter(item => {
    const file = path.resolve(workspace, item.path), relative = path.relative(workspace, file);
    if (relative === '..' || relative.startsWith('..' + path.sep) || path.isAbsolute(relative)) return true;
    return !existsSync(file) || sha256(readFileSync(file)) !== item.sha256;
  }).map(item => item.path);
}

function fixtureTake(segment, sampleRate, index) {
  // Synthetic tone, not speech. Deliberately non-frame-aligned durations test
  // rounding. Captions here describe a timing fixture, never listened words.
  const count = Math.round(sampleRate * (0.7 + index * 0.17)) + 17;
  const pcm = Buffer.alloc(count * 2);
  for (let i = 0; i < count; i++) pcm.writeInt16LE(Math.round(2000 * Math.sin(2 * Math.PI * 220 * i / sampleRate)), i * 2);
  const chars = [...segment.text];
  const alignment = {characters: chars, character_start_times_seconds: chars.map((_, i) => i / chars.length * count / sampleRate), character_end_times_seconds: chars.map((_, i) => (i + 1) / chars.length * count / sampleRate)};
  return {textSha256: segment.textSha256, pcm, alignment, provenance: {fixture: true}};
}

export function resolvePilot({fixture = false, takesFile, output} = {}) {
  if (!fixture && !takesFile) throw new Error('Use --fixture for a synthetic check, or --takes=<selected-takes.json>. No voice generation occurs.');
  const pilotBytes = readFileSync(localPath(packagePath)), pilot = JSON.parse(pilotBytes);
  if (sha256(readFileSync(localPath(pilot.sourceProtocol))) !== pilot.sourceProtocolSha256) throw new Error('Protocol changed; regenerate and review the pilot package.');
  const fps = pilot.controls.fps, sampleRate = 48000;
  const dir = output ?? (fixture ? 'out/checks/response-timeline' : 'out/pilots/molar-mass-resolved');
  const out = localPath(dir);
  const unique = [...new Map(pilot.variants.flatMap(v => v.segments).filter(s => s.kind === 'speech').map(s => [s.textSha256, s])).values()];
  const takes = {}, files = [{path: packagePath, sha256: sha256(pilotBytes)}, {path: pilot.sourceProtocol, sha256: pilot.sourceProtocolSha256}];
  for (const file of ['scripts/lib/speech-assembly.mjs', 'scripts/lib/caption-timeline.mjs', 'scripts/lib/media-tools.mjs', 'scripts/resolve-pilot-timeline.mjs', 'src/lesson/timeline.mjs', 'src/lesson/timing-constants.json', 'src/lesson/answer-timing.mjs', 'src/slides/QuickCheckSlide.tsx', 'src/lesson/types.ts', 'src/styles/tokens.ts', 'remotion.config.ts']) files.push({path: file, sha256: sha256(readFileSync(localPath(file)))});
  let config;
  if (fixture) unique.forEach((s, i) => {takes[s.textSha256] = fixtureTake(s, sampleRate, i);});
  else {
    const configBytes = readFileSync(localPath(takesFile)); config = JSON.parse(configBytes);
    files.push({path: takesFile, sha256: sha256(configBytes)});
    if (config.voiceId !== pilot.controls.voiceId || config.modelId !== pilot.controls.trialModelId || !config.settings || typeof config.settings !== 'object' || !Object.hasOwn(config, 'dictionaryVersion')) throw new Error('Take configuration must match the pilot voice/model and record settings/dictionary version.');
    for (const segment of unique) {
      const take = config.takes?.[segment.textSha256];
      if (!take || take.textSha256 !== segment.textSha256) throw new Error(`Missing selected take for ${segment.id}.`);
      const audio = localPath(take.audioFile), alignmentFile = localPath(take.alignmentFile);
      const pcm = decodePcm(audio, root);
      const alignmentBytes = readFileSync(alignmentFile);
      takes[segment.textSha256] = {textSha256: segment.textSha256, pcm, alignment: JSON.parse(alignmentBytes), provenance: {audioFile: take.audioFile, sourceAudioSha256: sha256(readFileSync(audio)), alignmentFile: take.alignmentFile}};
      files.push({path: take.audioFile, sha256: sha256(readFileSync(audio))}, {path: take.alignmentFile, sha256: sha256(alignmentBytes)});
    }
  }
  // Validate both variants before emitting any resolved package.
  const variants = pilot.variants.map(v => ({id: v.id, assembly: assembleSpeech(v.segments, takes, {fps, sampleRate})}));
  mkdirSync(out, {recursive: true});
  const outputVariants = [];
  for (const {id, assembly} of variants) {
    const stem = `variant-${id}.${sha256(assembly.text).slice(0, 12)}`;
    const save = (name, bytes) => {
      const p = path.join(out, name); writeFileSync(p, bytes);
      const relative = path.relative(root, p).replace(/\\/g, '/'); files.push({path: relative, sha256: sha256(bytes)}); return relative;
    };
    const audioFile = save(stem + '.wav', assembly.wav);
    const alignmentFile = save(stem + '.alignment.json', JSON.stringify(assembly.alignment, null, 2) + '\n');
    const cues = groupCaptionCues(assembly.captions);
    save(`variant-${id}.srt`, toSrt(cues)); save(`variant-${id}.vtt`, toVtt(cues));
    const {pcm, wav, ...resolved} = assembly;
    const timelineFile = save(`variant-${id}.timeline.json`, JSON.stringify({...resolved, fixture, audioFile, alignmentFile}, null, 2) + '\n');
    save(`variant-${id}.reveal-props.json`, JSON.stringify({answerVisibleStart: assembly.revealDelays.answerVisibleStart, responseHoldStart: assembly.timeline.find(s => s.id === 'response-hold').startFrame}, null, 2) + '\n');
    outputVariants.push({id, audioFile, alignmentFile, timelineFile, durationInFrames: assembly.durationInFrames, revealDelays: assembly.revealDelays, responseGap: assembly.timeline.find(s => s.id === 'response-hold'), verification: assembly.verification});
  }
  const manifest = {schemaVersion: 1, createdAt: new Date().toISOString(), fixture, status: fixture ? 'synthetic-timing-check-only' : 'assembled-pending-human-review',
    sourcePackage: packagePath, voice: fixture ? null : {voiceId: config.voiceId, modelId: config.modelId, settings: config.settings, dictionaryVersion: config.dictionaryVersion},
    alignmentMethod: 'Selected segment alignment concatenated with measured decoded-sample offsets; not a new provider alignment',
    displayedValuesSha256: sha256(JSON.stringify(pilot.suppliedValues)), renderConfiguration: {fps, width: 1920, height: 1080, finalReadingHoldFrames: 45}, assetProvenance: 'pending',
    finalExportGapVerification: 'pending', released: false, variants: outputVariants, files};
  writeFileSync(path.join(out, 'release-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
  if (fixture) {
    const example = {voiceId: pilot.controls.voiceId, modelId: pilot.controls.trialModelId, settings: {}, dictionaryVersion: null, takes: Object.fromEntries(unique.map(s => [s.textSha256, {textSha256: s.textSha256, audioFile: 'public/audio/pilots/REPLACE-WITH-SELECTED-TAKE.mp3', alignmentFile: 'public/audio/pilots/REPLACE-WITH-SELECTED-TAKE.alignment.json'}]))};
    writeFileSync(path.join(out, 'selected-takes.example.json'), JSON.stringify(example, null, 2) + '\n');
  }
  return {directory: dir, fixture, variants: outputVariants};
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const value = name => args.find(a => a.startsWith(name + '='))?.slice(name.length + 1);
  if (value('--verify')) {
    const changed = verifyDependencies(json(localPath(value('--verify'))));
    console.log(JSON.stringify({changed, valid: !changed.length}, null, 2)); process.exitCode = changed.length ? 1 : 0;
  } else console.log(JSON.stringify(resolvePilot({fixture: args.includes('--fixture'), takesFile: value('--takes'), output: value('--output')}), null, 2));
}
