import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {decodePcm} from './media-tools.mjs';
import {compareGoogleWords, checkGoogleRunOn, googleSceneHasLongPause} from './google-batch-checks.mjs';

const sha = data => createHash('sha256').update(data).digest('hex');
const read = file => JSON.parse(fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, ''));
export const googleRecognitionCache = audio => 'work/google-runon-checks/' + sha(fs.readFileSync(audio)) + '.json';

export function googleWavSeconds(audio, data=fs.readFileSync(audio)) {
  if(data.toString('ascii',0,4)==='RIFF'&&data.toString('ascii',8,12)==='WAVE'){
    let byteRate;
    for(let offset=12;offset+8<=data.length;){
      const tag=data.toString('ascii',offset,offset+4),size=data.readUInt32LE(offset+4);
      if(tag==='fmt ')byteRate=data.readUInt32LE(offset+16);
      if(tag==='data'&&byteRate)return Math.min(size,data.length-offset-8)/byteRate;
      offset+=8+size+(size%2);
    }
  }
  return decodePcm(audio).length/96000;
}

// Forced alignment is not recognition. Historical takes without a recognition
// receipt must be independently transcribed before they can pass this gate.
export function assessGoogleTake(scene, {recogniseMissing = true} = {}) {
  const audio = scene.voiceover.audioFile;
  const generation = read(audio.replace(/\.wav$/, '.generation.json'));
  const text = scene.voiceover.text;
  if (generation.textSha256 !== sha(text)) throw Error('Run-on gate text mismatch: ' + scene.id);
  const audioBytes = fs.readFileSync(audio);
  const audioSha256 = sha(audioBytes);
  const quality = generation.batch?.quality;
  // Single requests arrive with a provider WAV header, then are wrapped in the
  // standard production header. Verify decoded audio before reusing that receipt.
  let receiptMatches = quality?.audioSha256 === audioSha256;
  if (!receiptMatches && quality?.audioSha256 && fs.existsSync(generation.batch.receipt ?? '')) {
    const dir = path.dirname(generation.batch.receipt);
    for (const name of fs.readdirSync(dir).filter(n => n.endsWith('.wav'))) {
      const file = path.join(dir, name);
      if (sha(fs.readFileSync(file)) === quality.audioSha256 && decodePcm(file).equals(decodePcm(audio))) {
        receiptMatches = true; break;
      }
    }
  }
  let comparison, evidence;
  if (receiptMatches && quality.textSha256 === sha(text) && Array.isArray(quality.comparison?.mismatches)) {
    comparison = quality.comparison;
    evidence = generation.batch.receipt;
  } else {
    const cache = 'work/google-runon-checks/' + audioSha256 + '.json';
    if (!fs.existsSync(cache)) {
      if (!recogniseMissing) return {pass: false, pendingRecognition: true, audio, audioSha256};
      fs.mkdirSync(path.dirname(cache), {recursive: true});
      const proc = spawnSync('work/brief124/venv/Scripts/python.exe',
        ['scripts/recognise-google-scenes.py', cache, audio], {windowsHide: true, encoding: 'utf8'});
      if (proc.error || proc.status !== 0) throw Error('Run-on recognition failed: ' + scene.id);
    }
    const recognised = read(cache);
    const words = recognised[audio] ?? (Object.keys(recognised).length === 1 ? Object.values(recognised)[0] : null);
    if (!Array.isArray(words) || !words.length) throw Error('Missing independent recognition: ' + scene.id);
    comparison = compareGoogleWords(generation.pronunciationText ?? text, words.map(w => w.word).join(''));
    evidence = cache;
  }
  const result = checkGoogleRunOn({text, expectedText: generation.pronunciationText ?? text,
    seconds: googleWavSeconds(audio, audioBytes), comparison,
    deliberateLongPauses: googleSceneHasLongPause(scene)});
  return {...result, audio, audioSha256, evidence};
}

export function assertGoogleTake(scene) {
  const result = assessGoogleTake(scene);
  if (!result.pass) throw Error('Google run-on gate failed for ' + scene.id + ': ' + JSON.stringify(result));
  return result;
}
