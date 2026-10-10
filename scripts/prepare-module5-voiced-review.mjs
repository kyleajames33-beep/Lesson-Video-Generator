import {readFileSync, writeFileSync, mkdirSync, existsSync} from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {assembleTimelineNarration} from './lib/timeline-narration.mjs';
import {lessonCaptionCues, toSrt, toVtt} from './lib/caption-timeline.mjs';
import {mediaTool, runMedia} from './lib/media-tools.mjs';
import {sha256} from './lib/playback-assembly.mjs';

const root = process.cwd();
const directory = 'out/prototypes/module5-voiced-review-2026-10-10';
const packages = [
  {key:'c2', title:'Chemistry: how reversible reactions approach equilibrium', hash:'2fe120341673c6173c3070272d3fad7ddc2a60a2ac19ba630487a8da0bf3eefa'},
  {key:'b2', title:'Biology: reproduction in animals', hash:'f4f0bf6ac5fd414d00e8e53aa19b0859b9d97d18752455a3ffaf03eb11917b49'},
];
const measure = file => {
  const result = spawnSync(mediaTool('ffmpeg'), ['-hide_banner','-i',file,'-vn','-af','loudnorm=I=-18:TP=-2:LRA=7:print_format=json','-f','null',process.platform === 'win32' ? 'NUL' : '/dev/null'], {encoding:'utf8',windowsHide:true});
  if (result.error || result.status !== 0) throw Error('Listening-track measurement failed.');
  const measured = JSON.parse(result.stderr.match(/\{\s*"input_i"[\s\S]*?\}/)?.[0] ?? 'null');
  if (!measured || !Number.isFinite(Number(measured.input_i))) throw Error('Invalid listening-track measurement.');
  return measured;
};
mkdirSync(directory, {recursive:true});
const records = [];
for (const item of packages) {
  const source = `out/prototypes/module5-${item.key}-voiced-2026-10-10/narrated-v2.lesson.json`;
  if (sha256(readFileSync(source)) !== item.hash) throw Error('Selected review source changed.');
  const outputs = Object.fromEntries(['wav','m4a','srt','vtt'].map(ext => [ext,path.join(directory,item.key+'.'+ext)]));
  if (Object.entries(outputs).some(([ext,file])=>ext!=='wav' && existsSync(file))) throw Error('Preserve existing listening review files.');
  const lesson = JSON.parse(readFileSync(source,'utf8'));
  const {cues,warnings,timeline} = lessonCaptionCues(lesson);
  if (warnings.length) throw Error('Incomplete captions: '+warnings.join('; '));
  const track = assembleTimelineNarration(lesson);
  if (existsSync(outputs.wav)) {
    if (sha256(readFileSync(outputs.wav)) !== sha256(track.wav)) throw Error('Existing timeline audio changed.');
  } else writeFileSync(outputs.wav, track.wav, {flag:'wx'});
  const before = measure(outputs.wav);
  const filter = `loudnorm=I=-18:TP=-2:LRA=7:measured_I=${before.input_i}:measured_TP=${before.input_tp}:measured_LRA=${before.input_lra}:measured_thresh=${before.input_thresh}:offset=${before.target_offset}:linear=true`;
  runMedia('ffmpeg',['-v','error','-n','-i',outputs.wav,'-af',filter,'-c:a','aac','-b:a','192k','-ar','48000','-ac','2','-t',String(timeline.durationMs/1000),'-f','mp4',outputs.m4a]);
  const after = measure(outputs.m4a);
  if (Math.abs(Number(after.input_i)+18)>1 || Number(after.input_tp)>-1.5) throw Error('Listening-track loudness outside targets.');
  writeFileSync(outputs.srt,toSrt(cues),{flag:'wx'});
  writeFileSync(outputs.vtt,toVtt(cues),{flag:'wx'});
  const record = {...item,source,sourceSha256:item.hash,durationSeconds:timeline.durationMs/1000,
    timelineNarration:track.record,loudness:{before,after,targetIntegratedLUFS:-18,targetTruePeakDbTP:-1.5},
    files:Object.values(outputs).map(file=>({path:file.replaceAll('\\','/'),sha256:sha256(readFileSync(file))})),
    limitation:'Complete audio and captions for listening review. AAC may retain bounded codec padding. No continuous visual playback, human listening or release pass.'};
  writeFileSync(path.join(directory,item.key+'.listening-record.json'),JSON.stringify(record,null,2)+'\n',{flag:'wx'});
  records.push(record);
  console.log(item.key+': complete listening track prepared.');
}
const escape = value => value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const cards = records.map(item => {
  const lesson = JSON.parse(readFileSync(item.source,'utf8'));
  const script = lesson.scenes.filter(scene=>scene.voiceover?.text).map(scene=>`<details><summary>${escape(scene.id)}</summary><p>${escape(scene.voiceover.text)}</p></details>`).join('');
  return `<section><h2>${escape(item.title)}</h2><p>Complete narration, ${Math.round(item.durationSeconds/60*10)/10} minutes. Visual preview and human listening remain pending.</p><audio controls preload="metadata" src="${item.key}.m4a"></audio><p><a href="${item.key}.srt">Aligned captions</a></p>${script}</section>`;
}).join('');
const html = '<!doctype html><html lang="en-AU"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Module 5 narration review</title><style>body{font:18px/1.6 system-ui,sans-serif;color:#17251f;background:#f7f7f5;padding:24px}main{max-width:1000px;margin:auto}section{background:white;border:1px solid #d7ddd9;border-radius:12px;padding:24px;margin:24px 0}audio{width:100%}a{color:#0d6b52}details{padding:12px 0;border-top:1px solid #ddd}</style><main><h1>Module 5 narration review</h1><p>Fresh Simon v4 narration for two focused lessons. The scripts and display cues have separate source/timing evidence; these tracks are ready for actual listening.</p><p><a href="/parallel-production-2026-10-10/">Production desk and visual plans</a> | <a href="/calculation-full-review-2026-10-10/">Complete calculation exports</a></p>'+cards+'</main></html>';
if (html.includes(String.fromCodePoint(0x2014))) throw Error('Prohibited punctuation in review copy.');
writeFileSync(path.join(directory,'index.html'),html,{flag:'wx'});
console.log('http://127.0.0.1:8778/module5-voiced-review-2026-10-10/');
