import {mkdirSync, readFileSync, writeFileSync, existsSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const usage = () => {
  console.error('Usage: node scripts/generate-elevenlabs-audio.mjs <manifest-json> [--voice-id=<id>] [--dry-run]');
  console.error('Example: node scripts/generate-elevenlabs-audio.mjs out/voiceover/Chemistry-Y11-M2-L2.manifest.json --voice-id=21m00Tcm4TlvDq8ikWAM');
  console.error('');
  console.error('Environment: ELEVENLABS_API_KEY must be set.');
  console.error('Get your API key from https://elevenlabs.io/app/settings/api-keys');
  console.error('Find voice IDs from https://elevenlabs.io/app/voice-library');
};

const args = process.argv.slice(2);
const manifestPath = args.find((a) => !a.startsWith('--'));
const dryRun = args.includes('--dry-run');
const voiceIdArg = args.find((a) => a.startsWith('--voice-id='));
const voiceId = voiceIdArg ? voiceIdArg.split('=')[1] : process.env.ELEVENLABS_VOICE_ID;

const apiKey = process.env.ELEVENLABS_API_KEY;

if (!manifestPath) {
  usage();
  process.exit(1);
}

if (!apiKey && !dryRun) {
  console.error('Error: ELEVENLABS_API_KEY is not set.');
  usage();
  process.exit(1);
}

if (!voiceId && !dryRun) {
  console.error('Error: No voice ID provided. Use --voice-id=<id> or set ELEVENLABS_VOICE_ID.');
  usage();
  process.exit(1);
}

const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const {compositionId, scenes} = manifest;

console.log(`ElevenLabs batch generation for ${compositionId}`);
console.log(`Scenes: ${scenes.length}`);
console.log(`Voice ID: ${voiceId ?? '(not set)'}`);
console.log(`Mode: ${dryRun ? 'DRY RUN' : 'LIVE'}`);
console.log('');

if (dryRun) {
  console.log('Dry-run preview:');
  for (const scene of scenes) {
    const exists = existsSync(scene.audioFile);
    console.log(`  [${exists ? 'EXISTS' : 'MISSING'}] ${scene.id}: ${scene.text.slice(0, 60)}${scene.text.length > 60 ? '...' : ''}`);
  }
  console.log('');
  console.log(`Total missing: ${scenes.filter((s) => !existsSync(s.audioFile)).length}`);
  process.exit(0);
}

let generated = 0;
let skipped = 0;
let failed = 0;

for (const scene of scenes) {
  if (existsSync(scene.audioFile)) {
    console.log(`  SKIP ${scene.id}: already exists (${scene.audioFile})`);
    skipped++;
    continue;
  }

  const outputPath = scene.audioFile;
  mkdirSync(path.dirname(outputPath), {recursive: true});

  console.log(`  GEN  ${scene.id}: "${scene.text.slice(0, 50)}${scene.text.length > 50 ? '...' : ''}"`);

  try {
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': apiKey,
      },
      body: JSON.stringify({
        text: scene.text,
        model_id: 'eleven_monolingual_v1',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`  FAIL ${scene.id}: HTTP ${response.status} — ${errorText}`);
      failed++;
      continue;
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    writeFileSync(outputPath, buffer);
    console.log(`  OK   ${scene.id}: ${outputPath} (${buffer.length} bytes)`);
    generated++;
  } catch (err) {
    console.error(`  FAIL ${scene.id}: ${err.message}`);
    failed++;
  }
}

console.log('');
console.log('Done.');
console.log(`  generated: ${generated}`);
console.log(`  skipped:   ${skipped}`);
console.log(`  failed:    ${failed}`);

if (failed > 0) {
  process.exit(1);
}
