import {spawnSync} from 'node:child_process';
import {writeFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {mediaTool} from './lib/media-tools.mjs';

export function normalizePilotAudio(input, output) {
  if(path.resolve(input)===path.resolve(output))throw new Error('Audio normalization needs a separate output file.');
  const ffmpeg = mediaTool('ffmpeg');
  const run = args => {
    const result = spawnSync(ffmpeg,args,{encoding:'utf8',windowsHide:true});
    if(result.error || result.status!==0)throw new Error(result.error?.message ?? result.stderr);
    return result.stderr;
  };
  const measure = file => {
    const log = run(['-hide_banner','-i',file,'-vn','-af','loudnorm=I=-18:TP=-2:LRA=7:print_format=json','-f','null',process.platform === 'win32' ? 'NUL' : '/dev/null']);
    return JSON.parse(log.match(/\{\s*"input_i"[\s\S]*?\}/)?.[0] ?? 'null');
  };
  const before = measure(input);
  if(!before || !Number.isFinite(Number(before.input_i)))throw new Error('Missing or silent pilot audio.');
  const filter = `loudnorm=I=-18:TP=-2:LRA=7:measured_I=${before.input_i}:measured_TP=${before.input_tp}:measured_LRA=${before.input_lra}:measured_thresh=${before.input_thresh}:offset=${before.target_offset}:linear=true`;
  const probe = spawnSync(mediaTool('ffprobe'),['-v','error','-select_streams','v:0','-show_entries','stream=duration','-of','csv=p=0',input],{encoding:'utf8',windowsHide:true});
  const duration = Number(probe.stdout.trim().split(/\s/)[0].replace(/,$/,''));
  if(probe.status!==0 || !Number.isFinite(duration) || duration<=0)throw new Error('Cannot determine pilot video duration.');
  run(['-hide_banner','-y','-i',input,'-af',filter,'-c:v','copy','-c:a','aac','-b:a','192k','-ar','48000','-t',String(duration),output]);
  const after = measure(output);
  writeFileSync(output.replace(/\.mp4$/i,'.audio-review.json'),JSON.stringify({targetIntegratedLUFS:-18,targetTruePeakDbTP:-1.5,normalizationPeakDbTP:-2,before,after,originalRecordingsModified:false},null,2)+'\n');
  console.log(`Export loudness: ${before.input_i} to ${after.input_i} LUFS; peak ${after.input_tp} dBTP.`);
  return {before,after};
}

if(process.argv[1] && path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  if(process.argv.length!==4)throw new Error('Usage: node scripts/normalize-pilot-audio.mjs input.mp4 output.mp4');
  normalizePilotAudio(process.argv[2],process.argv[3]);
}
