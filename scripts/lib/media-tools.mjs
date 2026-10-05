import {existsSync} from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
export {pcmWav} from './speech-assembly.mjs';

export function mediaTool(name, root = process.cwd()) {
  const suffix = process.platform === 'win32' ? '.exe' : '';
  const platform = process.platform === 'win32' ? 'win32-x64-msvc'
    : process.platform === 'darwin' ? `darwin-${process.arch}` : `linux-${process.arch}-gnu`;
  const local = path.join(root, 'node_modules', '@remotion', `compositor-${platform}`, name + suffix);
  return process.env[name.toUpperCase() + '_PATH'] ?? (existsSync(local) ? local : name);
}

export function runMedia(name, args, root = process.cwd()) {
  const result = spawnSync(mediaTool(name, root), args, {windowsHide: true, maxBuffer: 256 * 1024 * 1024});
  if (result.error || result.status !== 0) throw new Error(`${name}: ${result.error?.message ?? result.stderr?.toString().slice(-3000)}`);
  return result.stdout;
}

export function decodePcm(file, root) {
  const wav = runMedia('ffmpeg', ['-v', 'error', '-i', file, '-vn', '-ac', '1', '-ar', '48000', '-c:a', 'pcm_s16le', '-f', 'wav', 'pipe:1'], root);
  if (wav.toString('ascii', 0, 4) !== 'RIFF' || wav.toString('ascii', 8, 12) !== 'WAVE') throw new Error('Decoder did not return WAV.');
  for (let offset = 12; offset + 8 <= wav.length;) {
    const tag = wav.toString('ascii', offset, offset + 4), size = wav.readUInt32LE(offset + 4);
    if (tag === 'data') return wav.subarray(offset + 8, Math.min(wav.length, offset + 8 + size));
    offset += 8 + size + (size % 2);
  }
  throw new Error('Decoded WAV contains no sample data.');
}
