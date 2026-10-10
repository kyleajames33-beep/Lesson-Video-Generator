import { parseMedia } from '@remotion/media-parser';
import { nodeReader } from '@remotion/media-parser/node';

try {
  const result = await parseMedia({
    src: 'public/audio/Chemistry-Y11-M2-L2/title.b2a24bbc1bd1.mp3',
    reader: nodeReader,
    fields: { durationInSeconds: true },
    acknowledgeRemotionLicense: true,
  });
  console.log('Duration:', result.durationInSeconds);
} catch (err) {
  console.error('Error:', err.message);
}
