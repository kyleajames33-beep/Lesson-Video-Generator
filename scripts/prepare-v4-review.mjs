import {readFileSync, writeFileSync, mkdirSync, copyFileSync} from 'node:fs';
import path from 'node:path';
import {homedir} from 'node:os';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {mediaTool, decodePcm} from './lib/media-tools.mjs';

const directory = 'out/prototypes/voice-v4-review';
const downloadDirectory = process.argv[2] ?? path.join(homedir(), 'Downloads');
mkdirSync(directory, {recursive: true});
const text = 'Two point zero zero moles of carbon atoms gives twenty-four point zero two grams. Report twenty-four point zero grams to three significant figures. Calcium dihydrogen phosphate contains one calcium, four hydrogen, two phosphorus and eight oxygen atoms. Its molar mass is two hundred thirty-four point zero four grams per mole. Chlorine gas is C l two, with two atoms per molecule. In DNA replication, helicase separates the strands. Primase, DNA polymerase and ligase have different roles. What would you predict? Pause here, then check your reasoning.';
const profiles = [
  {label: 'A', timestamp: '07_35_50', stability: 0.5, similarity: 0.75},
  {label: 'B', timestamp: '07_38_24', stability: 0.65, similarity: 0.75},
  {label: 'C', timestamp: '07_48_49', stability: 0.5, similarity: 0.9}
];
const sha = value => createHash('sha256').update(value).digest('hex');
const records = [];
for (const profile of profiles) for (let take = 1; take <= 2; take++) {
  const filename = `ElevenLabs_2026-10-08T${profile.timestamp}_Simon - Australian male_pvc_sp100_s50_sb75_v4${take === 2 ? ' (1)' : ''}.mp3`;
  const raw = `${directory}/${profile.label}${take}.mp3`;
  copyFileSync(path.join(downloadDirectory, filename), raw);
  const pcm = decodePcm(raw);
  let peak = 0, saturatedSamples = 0;
  for (let i = 0; i < pcm.length; i += 2) {
    const value = Math.abs(pcm.readInt16LE(i)); peak = Math.max(peak, value);
    if (value >= 32767) saturatedSamples++;
  }
  const measure = spawnSync(mediaTool('ffmpeg'), ['-hide_banner','-i',raw,'-af','loudnorm=I=-18:TP=-2:LRA=7:print_format=json','-f','null','-'], {encoding: 'utf8', windowsHide: true});
  if (measure.status !== 0) throw new Error(measure.stderr);
  const match = measure.stderr.match(/\{\s*"input_i"[\s\S]*?\}/);
  if (!match) throw new Error('No loudness measurement returned.');
  const loudness = JSON.parse(match[0]);
  const silences = spawnSync(mediaTool('ffmpeg'), ['-hide_banner','-i',raw,'-af',`silencedetect=noise=${loudness.input_thresh}dB:d=0.5`,'-f','null','-'], {encoding: 'utf8', windowsHide: true});
  if (silences.status !== 0) throw new Error(silences.stderr);
  writeFileSync(`${directory}/${profile.label}${take}.silence.txt`, silences.stderr);
  const normalized = `${directory}/${profile.label}${take}.review.wav`;
  const render = spawnSync(mediaTool('ffmpeg'), ['-y','-v','error','-i',raw,'-af','loudnorm=I=-18:TP=-2:LRA=7','-ar','48000','-c:a','pcm_s16le',normalized], {encoding: 'utf8', windowsHide: true});
  if (render.status !== 0) throw new Error(render.stderr);
  records.push({...profile, take, label: `${profile.label}${take}`, sourceFilename: filename, rawAudio: path.basename(raw),
    reviewAudio: path.basename(normalized), audioSha256: sha(readFileSync(raw)), reviewSha256: sha(readFileSync(normalized)),
    durationSeconds: pcm.length / 96000, decodedPeak: peak, saturatedSamples, loudness,
    status: 'downloaded and decoded; user finds the short auditions acceptable; final lesson listening pending'});
}
const manifest = {date: '2026-10-08', voiceName: 'Simon - Australian male', voiceId: 'cOEV2DrZBBGNLpE74kQu', modelId: 'eleven_v4',
  text, textSha256: sha(text), inputCharactersPerRequest: text.length,
  generation: 'Three browser requests, two takes each. Promotional v4 credits, no purchase. UI balance approximately 240.1k before and 238.5k after.',
  controls: 'Settings taken from observed UI controls. Download filenames retain s50/sb75 even for changed controls and are not authoritative setting evidence.',
  limitations: 'No timestamp sidecars from UI downloads. No automatic intelligibility, accent or scientific pronunciation approval. These are comparison samples, not final v3 narration.',
  reviewProcessing: 'Separate review WAVs use FFmpeg loudnorm at -18 LUFS and -2 dBTP to reduce loudness bias. Raw MP3s are preserved. No trimming or EQ.', records};
manifest.userFeedback = {date: '2026-10-08', statement: 'They all sound the same and I guess they are fine.',
  scope: 'Six short auditions only, not full lesson recordings.', startingSettings: {stability:0.5,similarity:0.75},
  settingDecision: 'Agent retains the default comparison controls because no alternative preference or defect was identified.'};
writeFileSync(`${directory}/manifest.json`, JSON.stringify(manifest, null, 2)+'\n');
mkdirSync('docs/production', {recursive: true});
writeFileSync('docs/production/voice-v4-auditions-2026-10-08.json', JSON.stringify(manifest, null, 2)+'\n');
const esc = v => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
writeFileSync(`${directory}/index.html`, `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Simon v4 listening review</title><style>body{max-width:1000px;margin:2rem auto;padding:0 1rem;font:17px/1.6 system-ui;color:#173e35;background:#faf8f1}h1{font-size:2rem}article{background:white;border:1px solid #cddad0;border-radius:12px;padding:1.2rem;margin:1rem 0}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1rem}audio{width:100%}label{display:block}textarea{box-sizing:border-box;width:100%;min-height:75px;font:inherit}select,button{font:inherit;padding:.7rem}button{background:#17624c;color:white;border:0;border-radius:6px}a{color:#075e52}small{color:#52685e}blockquote{margin:0;background:#eaf0e5;padding:1rem}</style><h1>Simon v4: choose the teaching voice</h1><p>Six short takes, with the same science passage. Listen first, then reveal settings. Compare accent, calm delivery, pacing and every number or technical term. These are auditions; final lesson audio is still pending.</p><p><a href="../continuity-review/">Browse the curriculum priorities</a> · <a href="manifest.json">Recording evidence</a></p><details><summary>Expected spoken passage</summary><blockquote>${esc(text)}</blockquote></details><p>Check: 2.00, 24.02, 24.0 (three significant figures), calcium dihydrogen phosphate, 234.04, C l two, helicase, primase, DNA polymerase and ligase. The words “Pause here” are not a measured response hold in this audition.</p><div class="grid">${records.map(r=>`<article><h2>Take ${r.label}</h2><audio controls preload="metadata" src="${r.reviewAudio}"></audio><small>${r.durationSeconds.toFixed(1)} seconds. Review volume normalized.</small><details><summary>Reveal settings and original</summary><p>Stability ${r.stability}, similarity ${r.similarity}.</p><audio controls preload="none" src="${r.rawAudio}"></audio><p>Original ${Number(r.loudness.input_i).toFixed(1)} LUFS. Decoded saturated samples: ${r.saturatedSamples}.</p></details><label>Listening notes for ${r.label}<textarea data-take="${r.label}" placeholder="Accent, delivery, mispronounced words, numbers or omissions"></textarea></label></article>`).join('')}</div><p><label>Preferred take <select id="preferred"><option value="">Choose after listening</option>${records.map(r=>`<option>${r.label}</option>`).join('')}<option>None yet</option></select></label></p><button id="save">Download my listening notes</button><p id="result" aria-live="polite"></p><p>Accepted recordings will be frozen with text and audio hashes. Production will use timestamped generation, separate prompt/answer takes and measured silence, followed by full lesson review.</p><script>const fields=[...document.querySelectorAll('textarea')];try{const saved=JSON.parse(localStorage.getItem('simon-v4-review')||'{}');preferred.value=saved.preferred||'';fields.forEach(f=>f.value=saved.notes?.[f.dataset.take]||'')}catch{}function data(){return {date:new Date().toISOString(),preferred:preferred.value,notes:Object.fromEntries(fields.map(f=>[f.dataset.take,f.value])),status:'user listening notes, not release approval'}}function persist(){localStorage.setItem('simon-v4-review',JSON.stringify(data()))}fields.forEach(f=>f.addEventListener('input',persist));preferred.addEventListener('input',persist);save.addEventListener('click',()=>{persist();const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(data(),null,2)],{type:'application/json'}));a.download='simon-v4-listening-notes.json';a.click();URL.revokeObjectURL(a.href);result.textContent='Listening notes downloaded.'});</script></html>`);
console.log(JSON.stringify({takes: records.length, saturatedSamples: records.map(r => ({take:r.label,count:r.saturatedSamples})), durationRange: [Math.min(...records.map(r=>r.durationSeconds)),Math.max(...records.map(r=>r.durationSeconds))]}, null, 2));
