import {createInterface} from 'node:readline';
import {spawn} from 'node:child_process';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(prompt) {
  return new Promise((resolve) => rl.question(prompt, resolve));
}

async function main() {
  console.log('ElevenLabs Audio Generation for Chemistry-Y11-M2-L2');
  console.log('');
  
  const apiKey = await question('Paste your ElevenLabs API key: ');
  
  if (!apiKey.trim()) {
    console.error('No API key provided. Exiting.');
    process.exit(1);
  }
  
  const voiceId = '4cWYklmD3mkJ0HAsoo2F';
  const manifest = 'out/voiceover/Chemistry-Y11-M2-L2.manifest.json';
  
  console.log('');
  console.log('Starting generation...');
  console.log('');
  
  const child = spawn('node', [
    'scripts/generate-elevenlabs-audio.mjs',
    manifest,
    `--voice-id=${voiceId}`,
  ], {
    stdio: 'inherit',
    env: {
      ...process.env,
      ELEVENLABS_API_KEY: apiKey.trim(),
    },
    shell: true,
  });
  
  child.on('exit', (code) => {
    process.exit(code ?? 0);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
