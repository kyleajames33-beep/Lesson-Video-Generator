import {readFileSync, existsSync, mkdirSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {decodePcm, pcmWav} from './media-tools.mjs';
import {alignmentPathFor, alignmentToCaptions} from './caption-timeline.mjs';
import {lessonTimeline} from '../../src/lesson/timeline.mjs';
import {TRANSITION_FRAMES} from '../_yt-constants.mjs';
import {hookRevealTiming} from '../../src/lesson/answer-timing.mjs';

export const sha256 = data => createHash('sha256').update(data).digest('hex');
export const canonical = value => JSON.stringify(value, (_, v) => v && typeof v === 'object' && !Array.isArray(v)
  ? Object.fromEntries(Object.keys(v).sort().map(k => [k, v[k]])) : v);
export function publicPath(root, value) {
  if (typeof value !== 'string' || !value) throw new Error('Missing public media path.');
  const base = path.resolve(root, 'public');
  const file = path.resolve(base, value.replace(/^public[\\/]/, '').replace(/\\/g, '/'));
  const relative = path.relative(base, file);
  if (!relative || relative.startsWith('..') || path.isAbsolute(relative)) throw new Error('Media must stay inside public/.');
  return file;
}

export function resolvePlayback({lesson, manifest, plan, root = process.cwd(), decode = file => decodePcm(file, root), tailSeconds = 1.5}) {
  lessonTimeline(lesson);
  const fps = lesson.fps ?? 30;
  if (!Number.isInteger(48000 / fps)) throw new Error('Assembly requires fps dividing 48000 for sample-exact frame gaps.');
  if (!Number.isFinite(tailSeconds) || tailSeconds < 0) throw new Error('Invalid narration tail.');
  if (manifest.fps !== fps) throw new Error('Recording manifest fps differs from lesson.');
  const recordings = new Map();
  for (const segment of manifest.scenes) {
    if (!segment.id || recordings.has(segment.id)) throw new Error('Duplicate or missing recording segment ID.');
    recordings.set(segment.id, segment);
  }
  if (plan.playback.length !== lesson.scenes.length || new Set(plan.playback.map(p => p.sceneId)).size !== lesson.scenes.length) {
    throw new Error('Playback plan must contain each lesson scene exactly once.');
  }
  const plans = new Map(plan.playback.map(p => [p.sceneId, p]));
  const draft = structuredClone(lesson), resolved = [], used = new Set();
  for (const scene of draft.scenes) {
    const spec = plans.get(scene.id);
    if (!spec?.items?.length) throw new Error(`Missing playback: ${scene.id}`);
    let cursorSamples = 0;
    const buffers = [], texts = [], dependencies = [], items = [];
    const alignment = {characters: [], character_start_times_seconds: [], character_end_times_seconds: []};
    for (const [index, item] of spec.items.entries()) {
      const startFrame = cursorSamples / (48000 / fps);
      if (item.kind === 'silence') {
        const frames = item.frames ?? item.seconds * fps;
        if (!Number.isInteger(frames) || frames <= 0 || (item.seconds !== undefined && Math.abs(frames / fps - item.seconds) > 1e-8)) throw new Error(`Invalid gap: ${scene.id}`);
        if (index === 0 || index === spec.items.length - 1 || spec.items[index - 1].kind !== 'audio' || spec.items[index + 1].kind !== 'audio') throw new Error('A response gap must separate two recordings.');
        const silence = Buffer.alloc(frames * (48000 / fps) * 2);
        buffers.push(silence); cursorSamples += silence.length / 2;
        items.push({kind: 'silence', startFrame, endFrame: cursorSamples / (48000 / fps)});
        continue;
      }
      if (item.kind !== 'audio') throw new Error('Unknown playback item.');
      const segment = recordings.get(item.segmentId);
      if (!segment || used.has(segment.id) || segment.parentSceneId !== scene.id || item.audioFile !== segment.audioFile) throw new Error(`Invalid segment mapping: ${item.segmentId}`);
      used.add(segment.id);
      if (sha256(segment.text).slice(0, 12) !== segment.hash) throw new Error(`Changed segment text: ${segment.id}`);
      if (segment.text.includes(String.fromCodePoint(0x2014))) throw new Error('Selected narration contains U+2014.');
      const file = publicPath(root, segment.audioFile);
      const bytes = readFileSync(file);
      const alignmentFile = alignmentPathFor(file), alignmentBytes = readFileSync(alignmentFile);
      let sourceAlignment = JSON.parse(alignmentBytes);
      alignmentToCaptions(sourceAlignment);
      if (sourceAlignment.characters.join('').replace(/\s+/g, ' ').trim() !== segment.text.replace(/\s+/g, ' ').trim()) throw new Error(`Alignment text differs from script: ${segment.id}`);
      const pcm = decode(file);
      if (!Buffer.isBuffer(pcm) || !pcm.length || pcm.length % 2) throw new Error('Decoded audio must be nonempty mono 16-bit PCM.');
      const durationSeconds = pcm.length / 96000;
      let alignmentAdjustment;
      if (sourceAlignment.character_end_times_seconds.at(-1) > durationSeconds + 1 / 48000) {
        // Some v4 responses extend their terminal full stop 80 ms past media.
        // Preserve spoken-character timing and raw sidecars. Bound only a small
        // terminal punctuation interval, and record the derivation explicitly.
        const overrun = sourceAlignment.character_end_times_seconds.at(-1) - durationSeconds;
        const firstPast = sourceAlignment.character_end_times_seconds.findIndex(t => t > durationSeconds);
        if (overrun > 0.1 + 1e-9 || sourceAlignment.characters.slice(firstPast).some(c => !/^[.!?,;:\s]$/.test(c))) {
          throw new Error(`Alignment exceeds decoded audio: ${segment.id}`);
        }
        alignmentAdjustment = {kind: 'terminal-punctuation-bounded-to-decoded-media', overrunSeconds: overrun,
          firstCharacter: firstPast, decodedDurationSeconds: durationSeconds};
        sourceAlignment = {...sourceAlignment,
          character_start_times_seconds: sourceAlignment.character_start_times_seconds.map(t => Math.min(t, durationSeconds)),
          character_end_times_seconds: sourceAlignment.character_end_times_seconds.map(t => Math.min(t, durationSeconds))};
        alignmentToCaptions(sourceAlignment);
      }
      const frameCount = Math.ceil(durationSeconds * fps - 1e-9);
      const padding = Buffer.alloc(frameCount * (48000 / fps) * 2 - pcm.length);
      buffers.push(pcm, padding);
      const offset = cursorSamples / 48000;
      if (texts.length) {
        alignment.characters.push(' ');
        alignment.character_start_times_seconds.push(offset);
        alignment.character_end_times_seconds.push(offset);
      }
      alignment.characters.push(...sourceAlignment.characters);
      alignment.character_start_times_seconds.push(...sourceAlignment.character_start_times_seconds.map(t => t + offset));
      alignment.character_end_times_seconds.push(...sourceAlignment.character_end_times_seconds.map(t => t + offset));
      cursorSamples += (pcm.length + padding.length) / 2;
      texts.push(segment.text);
      const metadata = file.replace(/\.[^.]+$/, '.generation.json');
      if (existsSync(metadata) && manifest.voiceSelection) {
        const generation = JSON.parse(readFileSync(metadata, 'utf8'));
        for (const field of ['voiceId', 'modelId']) {
          if (manifest.voiceSelection[field] && generation[field] !== manifest.voiceSelection[field]) throw new Error(`Selected ${field} differs from recording provenance: ${segment.id}`);
        }
      }
      dependencies.push({audioFile: segment.audioFile, audioSha256: sha256(bytes), alignmentSha256: sha256(alignmentBytes),
        generationSha256: existsSync(metadata) ? sha256(readFileSync(metadata)) : null, textSha256: sha256(segment.text)});
      items.push({kind: 'audio', segmentId: segment.id, startFrame, endFrame: cursorSamples / (48000 / fps), decodedDurationSeconds: durationSeconds,
        ...(alignmentAdjustment ? {alignmentAdjustment} : {})});
    }
    if (texts.join(' ') !== scene.voiceover?.text) throw new Error(`Playback changes narration: ${scene.id}`);
    const pcm = Buffer.concat(buffers), wav = pcmWav(pcm);
    const textHash = sha256(scene.voiceover.text).slice(0, 12);
    const signature = sha256(canonical({fps, dependencies, items, wavSha256: sha256(wav)}));
    const audioFile = `public/audio/assembled/${scene.id}.${signature.slice(0, 20)}.${textHash}.wav`;
    const mediaFrames = cursorSamples / (48000 / fps);
    scene.voiceover = {...scene.voiceover, audioFile, startFrame: 0, endFrame: mediaFrames};
    scene.durationInFrames = Math.max(scene.durationInFrames, mediaFrames + Math.ceil(tailSeconds * fps) + TRANSITION_FRAMES);
    scene.captions = alignmentToCaptions(alignment);
    const gaps = items.filter(i => i.kind === 'silence');
    if (gaps.length > 1) throw new Error('Multiple response gaps need an explicit visual cue plan.');
    if (gaps.length) {
      const boundary = gaps[0].endFrame;
      scene.revealDelays = {...scene.revealDelays, answerVisibleStart: boundary};
      if (scene.type === 'workedExample') {
        // The complete solution board must remain hidden during the attempt.
        scene.revealDelays.stepsStart = boundary;
        scene.revealDelays.coachNote = boundary;
        delete scene.revealDelays.stepAts;
        scene.revealDelays.diagram = boundary;
      } else if (scene.type === 'hook') {
        scene.revealDelays = hookRevealTiming(scene.revealDelays);
      } else if (scene.type !== 'quickCheck') throw new Error(`Response gap needs supported visual treatment: ${scene.id}`);
    }
    const lastSolutionFrame = scene.type === 'quickCheck'
      ? (scene.revealDelays?.answerVisibleStart ?? 360) + 16 + Math.max(0, scene.answerSteps.length - 1) * 68 + 60
      : scene.type === 'workedExample'
        ? (scene.revealDelays?.stepsStart ?? 116) + Math.max(0, scene.steps.length - 1) * (scene.revealDelays?.stepInterval ?? 86) + 60 : 0;
    scene.durationInFrames = Math.max(scene.durationInFrames, lastSolutionFrame + Math.ceil(tailSeconds * fps) + TRANSITION_FRAMES);
    scene.responseHold = gaps.length ? {startFrame: gaps[0].startFrame, endFrame: gaps[0].endFrame} : undefined;
    const provenance = {schemaVersion: 1, signature, fps, textSha256: sha256(scene.voiceover.text), audioSha256: sha256(wav),
      alignmentSha256: sha256(JSON.stringify(alignment, null, 2) + '\n'), dependencies, items,
      durationFrames: mediaFrames, tailSeconds, sampleRate: 48000, format: 'mono-pcm-s16le',
      provenanceStatus: dependencies.every(d => d.generationSha256) ? 'sidecars-present-unreviewed' : 'some-generation-provenance-unknown'};
    resolved.push({sceneId: scene.id, audioFile, wav, alignment, provenance});
  }
  if (used.size !== recordings.size) throw new Error('Unused recordings in manifest.');
  return {lesson: draft, scenes: resolved};
}

export function writePlayback(result, root = process.cwd()) {
  // Validate all immutable targets before writing any of them.
  const files = result.scenes.flatMap(s => [[s.audioFile, s.wav],
    [s.audioFile.replace(/\.wav$/, '.alignment.json'), JSON.stringify(s.alignment, null, 2) + '\n'],
    [s.audioFile.replace(/\.wav$/, '.assembly.json'), JSON.stringify(s.provenance, null, 2) + '\n']]);
  for (const [name, bytes] of files) {
    const target = publicPath(root, name);
    if (existsSync(target) && sha256(readFileSync(target)) !== sha256(bytes)) throw new Error(`Immutable assembled output differs: ${name}`);
  }
  for (const [name, bytes] of files) {
    const target = publicPath(root, name);
    mkdirSync(path.dirname(target), {recursive: true});
    if (!existsSync(target)) writeFileSync(target, bytes, {flag: 'wx'});
  }
}
