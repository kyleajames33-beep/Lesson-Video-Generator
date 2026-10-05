import {readFileSync, existsSync} from 'node:fs';
import {publicPath, sha256, canonical} from './playback-assembly.mjs';
import {alignmentPathFor, alignmentToCaptions} from './caption-timeline.mjs';
import {answerTiming} from '../../src/lesson/answer-timing.mjs';

export function verifyAssembly(scene, fps, root = process.cwd()) {
  const errors = [], fail = message => errors.push(message);
  const audio = publicPath(root, scene.voiceover.audioFile);
  const sidecar = audio.replace(/\.[^.]+$/, '.assembly.json');
  if (!existsSync(sidecar)) {
    if (scene.responseHold || audio.endsWith('.wav') && audio.includes('assembled')) fail('Missing assembly provenance for measured playback.');
    return errors;
  }
  try {
    const assembly = JSON.parse(readFileSync(sidecar, 'utf8'));
    if (assembly.schemaVersion !== 1 || assembly.fps !== fps || assembly.textSha256 !== sha256(scene.voiceover.text)) fail('Assembly script/fps changed.');
    if (assembly.audioSha256 !== sha256(readFileSync(audio))) fail('Assembled audio changed.');
    const bytes = readFileSync(alignmentPathFor(audio));
    if (assembly.alignmentSha256 !== sha256(bytes)) fail('Assembled alignment changed.');
    const expected = alignmentToCaptions(JSON.parse(bytes));
    if (canonical(expected) !== canonical(scene.captions)) fail('Captions differ from assembled alignment.');
    for (const item of assembly.dependencies) {
      const source = publicPath(root, item.audioFile);
      if (sha256(readFileSync(source)) !== item.audioSha256 || sha256(readFileSync(alignmentPathFor(source))) !== item.alignmentSha256) fail('Selected recording/alignment changed: ' + item.audioFile);
      const metadata = source.replace(/\.[^.]+$/, '.generation.json');
      const current = existsSync(metadata) ? sha256(readFileSync(metadata)) : null;
      if (current !== item.generationSha256) fail('Selected voice/model/settings provenance changed: ' + item.audioFile);
    }
    if ((scene.voiceover.startFrame ?? 0) !== 0 || scene.voiceover.endFrame !== assembly.durationFrames) fail('Assembly playback window changed.');
    const gaps = assembly.items.filter(i => i.kind === 'silence');
    if (gaps.length) {
      const gap = gaps[0];
      if (canonical(scene.responseHold) !== canonical({startFrame: gap.startFrame, endFrame: gap.endFrame})) fail('Measured response gap changed.');
      if (scene.type === 'quickCheck' && answerTiming(scene.revealDelays).fadeStart < gap.endFrame) fail('Answer fade begins before response hold ends.');
      if (scene.type === 'workedExample' && ((scene.revealDelays?.stepsStart ?? 116) < gap.endFrame ||
        (scene.revealDelays?.coachNote ?? 42) < gap.endFrame || (scene.revealDelays?.diagram ?? 30) < gap.endFrame ||
        scene.revealDelays?.stepAts?.some(t => t < gap.endFrame))) fail('Worked solution begins before response hold ends.');
      if (expected.some(c => c.startMs < gap.endFrame / fps * 1000 && c.endMs > gap.startFrame / fps * 1000)) fail('Caption leaks across response hold.');
    }
  } catch (error) { fail('Cannot verify assembled dependencies: ' + error.message); }
  return errors;
}
