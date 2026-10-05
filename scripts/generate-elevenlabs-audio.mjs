import {mkdirSync, readFileSync, writeFileSync, existsSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {buildSpeechRequest, DEFAULT_TTS_MODEL, validateSpeechPayload} from './elevenlabs-request.mjs';
import {canonical} from './lib/playback-assembly.mjs';

const usage = () => {
  console.error('Usage: node scripts/generate-elevenlabs-audio.mjs <manifest-json> [--voice-id=<id>] [--model=<id>] [--scene=<id>] [--output-dir=<dir>] [--dry-run]');
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
const modelId = args.find(a => a.startsWith('--model='))?.slice(8) ?? process.env.ELEVENLABS_MODEL_ID ?? DEFAULT_TTS_MODEL;
const onlyScene = args.find(a => a.startsWith('--scene='))?.slice(8);
const outputDir = args.find(a => a.startsWith('--output-dir='))?.slice(13);

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
const {compositionId} = manifest;
const scenes = manifest.scenes.filter(s => s.text?.trim() && (!onlyScene || s.id === onlyScene)).map(s => ({...s,
  audioFile: outputDir ? path.join(outputDir, path.basename(s.audioFile)) : s.audioFile}));
if (!scenes.length) throw new Error('No narrated scenes matched the request.');
if (scenes.some(s => s.text.includes(String.fromCodePoint(0x2014)))) throw new Error('Selected narration contains U+2014. Revise the script before generation.');
// Validate every request before any paid generation begins.
const requests = scenes.map(s => buildSpeechRequest({text: s.text, voiceId: voiceId ?? 'dry-run', modelId}));

console.log(`ElevenLabs batch generation for ${compositionId}`);
console.log(`Scenes: ${scenes.length}`);
console.log(`Voice ID: ${voiceId ?? '(not set)'}`);
console.log(`Model: ${modelId}`);
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

for (const [index, scene] of scenes.entries()) {
  if (existsSync(scene.audioFile)) {
    const metadataPath = scene.audioFile.replace(/\.mp3$/i, '.generation.json');
    if (existsSync(metadataPath)) {
      const previous = JSON.parse(readFileSync(metadataPath, 'utf8'));
      if (previous.modelId !== modelId || previous.voiceId !== voiceId ||
          previous.request && canonical(previous.request) !== canonical(requests[index].body)) {
        console.error(`  FAIL ${scene.id}: existing recording uses a different model, voice or request/settings. Use --output-dir for a separate take.`);
        failed++;
        continue;
      }
    } else console.warn(`  Legacy recording ${scene.id}: model/voice provenance unknown; preserved.`);
    console.log(`  SKIP ${scene.id}: already exists (${scene.audioFile})`);
    skipped++;
    continue;
  }

  const outputPath = scene.audioFile;
  mkdirSync(path.dirname(outputPath), {recursive: true});

  console.log(`  GEN  ${scene.id}: "${scene.text.slice(0, 50)}${scene.text.length > 50 ? '...' : ''}"`);

  try {
    // Use the with-timestamps endpoint so we get character-level alignment
    // data back — needed by scripts/auto-sync-bullets.mjs to land bullet
    // reveals exactly when the narrator says them.
    const request = requests[index];
    const response = await fetch(request.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': apiKey,
      },
      body: JSON.stringify(request.body),
      signal: AbortSignal.timeout(120000),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`  FAIL ${scene.id}: HTTP ${response.status} — ${errorText}`);
      failed++;
      continue;
    }

    // with-timestamps returns JSON with base64 audio + alignment data
    const payload = await response.json();
    const alignment = validateSpeechPayload(payload);
    const audioBuffer = Buffer.from(payload.audio_base64, 'base64');
    writeFileSync(outputPath, audioBuffer);

    // Save alignment sidecar — character-level start/end times
    const alignmentPath = outputPath.replace(/\.mp3$/, '.alignment.json');
    writeFileSync(alignmentPath, JSON.stringify(alignment, null, 2));
    writeFileSync(outputPath.replace(/\.mp3$/i, '.generation.json'), JSON.stringify({modelId, voiceId,
      request: request.body, generatedAt: new Date().toISOString(), requestId: response.headers.get('request-id')}, null, 2));

    console.log(`  OK   ${scene.id}: ${outputPath} (${audioBuffer.length} bytes, alignment saved)`);
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
