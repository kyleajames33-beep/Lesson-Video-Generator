import {parseMedia} from '@remotion/media-parser';
import {nodeReader} from '@remotion/media-parser/node';
import {readFileSync} from 'node:fs';

const lesson = JSON.parse(readFileSync('src/data/chemistry-y11-m2-l2-molar-mass.json', 'utf8'));
const fps = lesson.fps ?? 30;

console.log('Scene'.padEnd(20), 'AudioFile', 'Actual(s)', 'Scene(s)', 'Status');
console.log('-'.repeat(70));

for (const scene of lesson.scenes) {
  const audioFile = scene.voiceover?.audioFile;
  if (!audioFile) {
    console.log(scene.id.padEnd(20), '(no audio)', '-', (scene.durationInFrames/fps).toFixed(2), 'SILENT');
    continue;
  }
  
  try {
    const result = await parseMedia({
      src: audioFile,
      reader: nodeReader,
      fields: {durationInSeconds: true},
      acknowledgeRemotionLicense: true,
    });
    const actual = result.durationInSeconds;
    const sceneDur = scene.durationInFrames / fps;
    const status = actual > sceneDur ? 'CUT OFF!' : 'OK';
    console.log(scene.id.padEnd(20), audioFile.split('/').pop(), actual.toFixed(2), sceneDur.toFixed(2), status);
  } catch (e) {
    console.log(scene.id.padEnd(20), 'ERROR', e.message);
  }
}
