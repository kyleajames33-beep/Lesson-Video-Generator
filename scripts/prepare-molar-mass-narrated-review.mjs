import {readFileSync, writeFileSync, existsSync} from 'node:fs';
import path from 'node:path';
import {sha256, canonical} from './lib/playback-assembly.mjs';
import {decodePcm} from './lib/media-tools.mjs';
import {verifyAssembly} from './lib/verify-assembly.mjs';
import {lessonTimeline} from '../src/lesson/timeline.mjs';
import {TRANSITION_FRAMES} from './_yt-constants.mjs';

const output = 'out/prototypes/molar-mass-continuity-handoff';
const lesson = JSON.parse(readFileSync(`${output}/assembled.lesson.json`, 'utf8'));
const manifest = JSON.parse(readFileSync(`${output}/voice-manifest.json`, 'utf8'));
const normalize = text => text.toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
const cue = (scene, phrase) => {
  const words = phrase.split(/\s+/).map(normalize);
  const tokens = scene.captions ?? [];
  const index = tokens.findIndex((_, i) => words.every((word, j) => normalize(tokens[i+j]?.text ?? '') === word));
  if (index < 0) throw new Error(`Missing exact aligned phrase: ${scene.id}: ${phrase}`);
  return Math.ceil(tokens[index].startMs * lesson.fps / 1000);
};
const plans = {
  definition: {layout:'molarMassDefinition',cues:{mass:'Lowercase m is your sample’s mass',molarMass:'Capital M is its mass per mole',
    double:'Double a sample of the same substance',fixed:'The molar mass stays the same',units:'grams per mole'}},
  'lab-footage': {layout: 'molarMassBalance', cues: {tare: 'Tare the empty container', measure: 'read its mass', convert: 'we can make the conversion'}},
  formula: {layout: 'molarMassFormula', cues: {oneMole: 'each mole of carbon atoms', twoMoles: 'Two moles contribute twice that mass',
    multiply: 'That is why we multiply', mass: 'Sample mass lowercase m', amount: 'amount in moles lowercase n',
    molarMass: 'by the molar mass capital M', units: 'Moles times grams per mole', cancel: 'leaves grams', divide: 'Finding the amount instead'}},
  'mass-example': {layout: 'molarMassCarbon', cues: {multiply: 'We want grams so multiply', substitute: 'Two point zero zero times',
    unrounded: 'gives twenty-four point zero two grams', rounded: 'final answer is twenty-four point zero grams', precision: 'That last zero matters'}},
  'worked-example': {layout: 'molarMassBrackets', cues: {counts: 'full count is one calcium', contributions: 'Multiply each count',
    total: 'total is two hundred thirty-four', rounded: 'Rounded to two decimal places', guardDigits: 'Keep the extra digits'}},
  'quick-check': {layout: 'molarMassChlorine', cues: {molarMass: 'Its molar mass is seventy point nine zero', divide: 'We want moles so divide',
    unrounded: 'The calculation gives about', rounded: 'To three significant figures'}}
};
const report = {status: 'recorded technical draft; science and listening review pending', recordings: [], scenes: []};
for (const segment of manifest.scenes) {
  const pcm = decodePcm(segment.audioFile);
  let peak = 0, saturatedSamples = 0;
  for (let offset = 0; offset < pcm.length; offset += 2) {
    const sample = pcm.readInt16LE(offset); peak = Math.max(peak, Math.abs(sample));
    if (sample === -32768 || sample === 32767) saturatedSamples++;
  }
  if (saturatedSamples) throw new Error(`Saturated recording needs review: ${segment.id}`);
  report.recordings.push({id: segment.id, audioFile: segment.audioFile, audioSha256: sha256(readFileSync(segment.audioFile)),
    durationSeconds: pcm.length / 96000, decodedPeak: peak, saturatedSamples, listening: 'unreviewed'});
}
for (const scene of lesson.scenes) {
  const errors = verifyAssembly(scene, lesson.fps);
  if (errors.length) throw new Error(`${scene.id}: ${errors.join('; ')}`);
  const plan = plans[scene.id];
  if (plan) {
    scene.teachingLayout = plan.layout;
    scene.revealDelays = {...scene.revealDelays, ...Object.fromEntries(Object.entries(plan.cues).map(([name, phrase]) => [name, cue(scene, phrase)]))};
    if (scene.responseHold) {
      for (const name of scene.id === 'worked-example' ? ['counts','contributions','total','rounded','guardDigits'] : ['molarMass','divide','unrounded','rounded']) {
        if (scene.revealDelays[name] < scene.responseHold.endFrame) throw new Error(`Answer cue during thinking hold: ${scene.id}/${name}`);
      }
    }
  }
  if (scene.id === 'concept') {
    const elements = scene.diagram.props.elements;
    elements.find(element => element.sym === 'C').beat = cue(scene, 'For carbon atoms');
    elements.find(element => element.sym === 'O').beat = cue(scene, 'For oxygen atoms');
  }
  if (scene.id === 'misconception') {
    scene.body = 'A bigger sample has a bigger molar mass.';
    scene.secondary = 'For the same substance, sample mass changes. Molar mass stays fixed.';
    scene.callout = 'Bracket check: the outside 2 doubles H, P and O, but not Ca.';
    scene.revealDelays = {callout:cue(scene,'And did you apply the outside subscript')};
  }
  if (scene.id === 'summary') scene.heading = 'Choose. Count. Check.';
  const lastCue = Math.max(0, ...Object.values(scene.revealDelays ?? {}).filter(Number.isFinite));
  // Measured audio plus a reading hold and transition allowance replaces WPM estimates.
  scene.durationInFrames = Math.max(scene.voiceover.endFrame + 60 + TRANSITION_FRAMES, lastCue + 75 + TRANSITION_FRAMES);
  const secondCheck = verifyAssembly(scene, lesson.fps);
  if (secondCheck.length) throw new Error(`${scene.id}: ${secondCheck.join('; ')}`);
  const sidecar = JSON.parse(readFileSync(scene.voiceover.audioFile.replace('.wav', '.assembly.json'), 'utf8'));
  report.scenes.push({id: scene.id, durationInFrames: scene.durationInFrames, teachingLayout: scene.teachingLayout ?? 'existing',
    responseHold: scene.responseHold, revealDelays: scene.revealDelays,
    alignmentAdjustments: sidecar.items.filter(item => item.alignmentAdjustment).map(item => ({segmentId: item.segmentId, ...item.alignmentAdjustment}))});
}
report.durationSeconds = lessonTimeline(lesson).durationMs / 1000;
report.spokenWords = manifest.scenes.reduce((sum, s) => sum + s.text.split(/\s+/).length, 0);
const lessonPath = `${output}/narrated.lesson-v2.json`;
if (existsSync(lessonPath) && canonical(JSON.parse(readFileSync(lessonPath, 'utf8'))) !== canonical(lesson)) throw new Error('Narrated draft exists with different inputs; preserve it and use a new version.');
writeFileSync(lessonPath, JSON.stringify(lesson, null, 2)+'\n');
writeFileSync(`${output}/narrated-technical-checks.json`, JSON.stringify(report, null, 2)+'\n');
const config = {lessonPath, entryPoint: 'src/dev/release-entry.tsx', compositionId: 'Lesson-release', codec: 'h264', scale: 1, crf: 18, normalizeAudio:true, concurrency:3,
  inputs: [`${output}/voice-manifest.json`, `${output}/voice-playback-plan.json`, `${output}/accepted-request-options.json`, `${output}/narrated-technical-checks.json`]};
writeFileSync(`${output}/narrated-render-config.json`, JSON.stringify(config, null, 2)+'\n');
const escape = value => String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const chapters = lessonTimeline(lesson).scenes.map(({scene,startFrame}) => ({id:scene.id, seconds:startFrame/lesson.fps}));
writeFileSync(`${output}/index.html`, `<!doctype html><html lang="en-AU"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Molar mass: complete narrated draft</title><style>body{font:18px/1.6 system-ui;background:#faf7ee;color:#183b37;max-width:1100px;margin:30px auto;padding:0 20px}video{width:100%;background:white}button{font:inherit;background:white;border:1px solid #b7cbc3;border-radius:8px;padding:9px 13px;margin:6px 6px 0 0;cursor:pointer}a{color:#0d6b52}article{padding:22px;background:white;border-radius:12px;margin:18px 0}.note{padding:18px;background:#e8f5f0;border-radius:10px}.phone{max-width:390px;margin:auto}textarea{font:inherit;width:100%;box-sizing:border-box;min-height:120px}</style><h1>Molar mass: complete narrated draft</h1><p class="note">Simon Australian English, Eleven v4. ${report.spokenWords} words, ${Math.floor(report.durationSeconds/60)} minutes ${Math.round(report.durationSeconds%60)} seconds. The opening, bracket and chlorine questions include protected thinking pauses. This is a review draft; final listening and science approval are pending.</p><div id="player"><video controls playsinline preload="metadata"><source src="narrated-render-02/video.mp4" type="video/mp4"><track kind="captions" label="English" srclang="en" src="narrated-render-02/captions.vtt"></video></div><p><button id="phone">Phone-size view</button>${chapters.map(c=>`<button data-at="${c.seconds}">${escape(c.id)}</button>`).join('')}</p><p><a href="narrated-render-02/video.mp4" download>Download video</a> · <a href="narrated-render-02/captions.srt" download>Captions</a> · <a href="recording-script.md">Script</a> · <a href="narrated-technical-checks.json">Technical checks</a></p><h2>Listening review</h2><p>Check calcium dihydrogen phosphate, O two and Cl two, lowercase m/capital M, decimal precision and the final zero. Note the scene and time for any unclear wording or awkward delivery.</p><textarea id="notes" aria-label="Review notes" placeholder="Scene/time and what needs changing"></textarea><button id="save">Save notes</button><p id="status" role="status"></p>${lesson.scenes.map(s=>`<article><h2>${escape(s.heading??s.id)}</h2><p>${escape(s.voiceover.text)}</p></article>`).join('')}<script>const video=document.querySelector('video');document.getElementById('phone').onclick=()=>document.getElementById('player').classList.toggle('phone');document.querySelectorAll('[data-at]').forEach(button=>button.onclick=()=>{video.pause();video.currentTime=Number(button.dataset.at)});const notes=document.getElementById('notes');notes.value=localStorage.getItem('molar-mass-v3-full-review')||'';notes.oninput=()=>localStorage.setItem('molar-mass-v3-full-review',notes.value);document.getElementById('save').onclick=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify({notes:notes.value,status:'user review notes, not release approval'},null,2)],{type:'application/json'}));a.download='molar-mass-full-review.json';a.click();URL.revokeObjectURL(a.href);document.getElementById('status').textContent='Review notes downloaded.'};</script></html>`);
console.log(JSON.stringify({lessonPath, recordings: report.recordings.length, words: report.spokenWords, durationSeconds: report.durationSeconds}, null, 2));
