import {createHash} from 'node:crypto';
import {alignmentToCaptions} from './caption-timeline.mjs';

export const sha256 = data => createHash('sha256').update(data).digest('hex');

export function pcmWav(pcm, sampleRate = 48000) {
  if (!Buffer.isBuffer(pcm) || pcm.length % 2) throw new Error('Expected mono signed 16-bit PCM.');
  const header = Buffer.alloc(44);
  header.write('RIFF'); header.writeUInt32LE(36 + pcm.length, 4); header.write('WAVEfmt ', 8);
  header.writeUInt32LE(16, 16); header.writeUInt16LE(1, 20); header.writeUInt16LE(1, 22);
  header.writeUInt32LE(sampleRate, 24); header.writeUInt32LE(sampleRate * 2, 28); header.writeUInt16LE(2, 32); header.writeUInt16LE(16, 34);
  header.write('data', 36); header.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([header, pcm]);
}

export function assembleSpeech(segments, takes, {fps = 30, sampleRate = 48000, finalReadingHoldFrames = 45} = {}) {
  if (!Number.isInteger(fps) || fps < 1 || !Number.isInteger(sampleRate) || sampleRate % fps || !Number.isInteger(finalReadingHoldFrames) || finalReadingHoldFrames < 0) throw new Error('Timing must resolve to integer samples per frame.');
  const samplesPerFrame = sampleRate / fps;
  const blocks = [], timeline = [], captions = [];
  const alignment = {characters: [], character_start_times_seconds: [], character_end_times_seconds: []};
  const texts = [], dependencies = [], ids = new Set();
  let cursor = 0;
  for (const segment of segments) {
    if (ids.has(segment.id)) throw new Error('Duplicate speech segment ID.');
    ids.add(segment.id);
    const startSample = cursor;
    if (segment.kind === 'silence') {
      if (!Number.isInteger(segment.durationFrames) || segment.durationFrames < 1 || segment.durationFrames / fps !== segment.durationSeconds) throw new Error('Silence duration does not match its frame count.');
      const count = segment.durationFrames * samplesPerFrame;
      blocks.push(Buffer.alloc(count * 2)); cursor += count;
    } else if (segment.kind === 'speech') {
      const textHash = sha256(segment.text);
      if (segment.textSha256 !== textHash) throw new Error(`Stale script hash: ${segment.id}.`);
      const take = takes[textHash];
      if (!take || take.textSha256 !== textHash || !Buffer.isBuffer(take.pcm) || !take.pcm.length || take.pcm.length % 2) throw new Error(`Missing or invalid selected take: ${segment.id}.`);
      const local = alignmentToCaptions(take.alignment);
      if (take.alignment.characters.join('').replace(/\s+/g, ' ').trim() !== segment.text.replace(/\s+/g, ' ').trim()) throw new Error(`Alignment text differs from selected script: ${segment.id}.`);
      const count = take.pcm.length / 2;
      if (take.alignment.character_end_times_seconds.at(-1) > count / sampleRate + 1 / sampleRate) throw new Error(`Alignment exceeds decoded take: ${segment.id}.`);
      const offsetSeconds = cursor / sampleRate;
      if (texts.length) {
        alignment.characters.push(' ');
        alignment.character_start_times_seconds.push(offsetSeconds);
        alignment.character_end_times_seconds.push(offsetSeconds);
      }
      take.alignment.characters.forEach((c, i) => {
        alignment.characters.push(c);
        alignment.character_start_times_seconds.push(take.alignment.character_start_times_seconds[i] + offsetSeconds);
        alignment.character_end_times_seconds.push(take.alignment.character_end_times_seconds[i] + offsetSeconds);
      });
      for (const c of local) {
        captions.push({...c, text: (captions.length && !/^\s/.test(c.text) ? ' ' : '') + c.text, startMs: c.startMs + offsetSeconds * 1000, endMs: c.endMs + offsetSeconds * 1000, timestampMs: c.timestampMs + offsetSeconds * 1000});
      }
      texts.push(segment.text); dependencies.push({segmentId: segment.id, textSha256: textHash, pcmSha256: sha256(take.pcm), alignmentSha256: sha256(JSON.stringify(take.alignment)), ...take.provenance});
      blocks.push(take.pcm); cursor += count;
    } else throw new Error(`Unknown segment kind: ${segment.kind}.`);
    timeline.push({id: segment.id, kind: segment.kind, startSample, endSample: cursor, startMs: startSample / sampleRate * 1000, endMs: cursor / sampleRate * 1000,
      startFrame: Math.ceil(startSample / samplesPerFrame), endFrame: Math.ceil(cursor / samplesPerFrame)});
  }
  const durationInFrames = Math.ceil(cursor / samplesPerFrame) + finalReadingHoldFrames;
  blocks.push(Buffer.alloc((durationInFrames * samplesPerFrame - cursor) * 2));
  const pcm = Buffer.concat(blocks);
  for (const gap of timeline.filter(s => s.kind === 'silence')) {
    if (pcm.subarray(gap.startSample * 2, gap.endSample * 2).some(byte => byte !== 0)) throw new Error('Assembled response gap contains nonzero samples.');
    if (captions.some(c => c.startMs < gap.endMs && c.endMs > gap.startMs)) throw new Error('Caption overlaps response silence.');
  }
  const feedback = timeline.find(s => s.id === 'feedback');
  return {pcm, wav: pcmWav(pcm, sampleRate), text: texts.join(' '), alignment, captions, timeline, dependencies, fps, sampleRate, durationInFrames,
    finalReadingHoldFrames, revealDelays: feedback ? {answerVisibleStart: feedback.startFrame} : {},
    verification: {insertedGapsHaveZeroSamples: true, captionsAvoidGaps: true, listening: 'pending', fullPlayback: 'pending', scienceApproval: 'pending'}};
}
