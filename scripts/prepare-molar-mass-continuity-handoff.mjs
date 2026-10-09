import {readFileSync, writeFileSync, mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {buildSpeechRequest} from './elevenlabs-request.mjs';

const output = 'out/prototypes/molar-mass-continuity-handoff';
mkdirSync(output, {recursive: true});
const sourcePath = 'src/prototypes/data/molar-mass-v3.json';
const selectionPath = 'src/prototypes/data/molar-mass-voice-selection.json';
const sha = value => createHash('sha256').update(value).digest('hex');
const lesson = JSON.parse(readFileSync(sourcePath, 'utf8'));
const selection = JSON.parse(readFileSync(selectionPath, 'utf8'));
const manifest = {fps: lesson.fps, voiceSelection: selection, requiredAccent: 'Australian', scenes: []};
const plan = {timing: 'provisional; resolve from selected recordings and alignment', playback: []};
const splitRules = {hook: {answer: 'The oxygen sample has more mass', seconds: 4}, 'worked-example': {answer: 'Eight oxygen atoms.', seconds: 4},
  'quick-check': {answer: 'Chlorine gas has two atoms per molecule', seconds: 5}};
for (const scene of lesson.scenes) {
  const rule = splitRules[scene.id];
  const split = rule ? scene.voiceover.text.indexOf(rule.answer) : -1;
  if (rule && split < 0) throw new Error(`Missing answer boundary: ${scene.id}`);
  const parts = rule ? [{id: scene.id+'-prompt', text: scene.voiceover.text.slice(0,split).trim()},
    {id: scene.id+'-answer', text: scene.voiceover.text.slice(split).trim()}] : [{id: scene.id, text: scene.voiceover.text}];
  const items = [];
  for (const [index, part] of parts.entries()) {
    const hash = sha(part.text).slice(0,12);
    const audioFile = `public/audio/Chemistry-Y11-M2-L2-engagement-v3/${part.id}.${hash}.mp3`;
    manifest.scenes.push({...part,parentSceneId:scene.id,hash,audioFile});
    if (index) items.push({kind:'silence',seconds:rule.seconds,frames:rule.seconds*lesson.fps});
    items.push({kind:'audio',segmentId:part.id,audioFile});
  }
  plan.playback.push({sceneId:scene.id,items});
}
if (JSON.stringify(lesson).includes(String.fromCodePoint(0x2014))) throw new Error('Selected lesson copy contains U+2014. Review before generating speech.');
lesson.syllabusNeutral = true;
lesson.productionRole = 'reference';
manifest.lessonPath = `${output}/lesson.json`;
plan.lessonPath = manifest.lessonPath;
manifest.compositionId = 'Chemistry-molar-mass-continuity-v3';
manifest.voiceSelection.takePreference = null;
manifest.voiceSelection.productionStatus = 'Simon selected; user found v4 auditions acceptable. Default A controls retained; full final narration and listening review pending.';
manifest.voiceSelection.reviewPath = 'out/prototypes/voice-v4-review/index.html';
manifest.status = 'unvoiced course-neutral pilot; no recording or release approval';
const paths = new Map();
for (const segment of manifest.scenes) {
  if (sha(segment.text).slice(0,12) !== segment.hash) throw new Error(`Stale script hash: ${segment.id}`);
  buildSpeechRequest({text:segment.text,voiceId:manifest.voiceSelection.voiceId,modelId:manifest.voiceSelection.modelId});
  paths.set(segment.audioFile, `public/audio/Chemistry-molar-mass-continuity-v3/${path.basename(segment.audioFile)}`);
  segment.audioFile = paths.get(segment.audioFile);
}
for (const scene of plan.playback) for (const item of scene.items) if (item.kind === 'audio') {
  if (!paths.has(item.audioFile)) throw new Error('Unmatched recording path.');
  item.audioFile = paths.get(item.audioFile);
}
const segments = new Map(manifest.scenes.map(s=>[s.id,s]));
const seen = new Set();
const holds = [];
for (const scene of lesson.scenes) {
  const playback = plan.playback.find(p=>p.sceneId===scene.id);
  if (!playback) throw new Error('Scene missing from playback plan.');
  const spoken = [];
  for (const item of playback.items) {
    if (item.kind === 'silence') holds.push({sceneId:scene.id,seconds:item.seconds,frames:item.frames??item.seconds*lesson.fps});
    else {
      const segment = segments.get(item.segmentId);
      if (!segment || segment.parentSceneId!==scene.id || seen.has(segment.id)) throw new Error('Invalid segment mapping.');
      spoken.push(segment.text);seen.add(segment.id);
    }
  }
  if (spoken.join(' ').replace(/\s+/g,' ').trim() !== scene.voiceover.text.replace(/\s+/g,' ').trim()) throw new Error(`Narration differs from segment plan: ${scene.id}`);
}
if (seen.size!==manifest.scenes.length || holds.length!==3 || holds.map(h=>h.seconds).join(',')!=='4,4,5') throw new Error('Recording/hold coverage changed.');
const write = (file,value) => writeFileSync(`${output}/${file}`,JSON.stringify(value,null,2)+'\n');
write('lesson.json',lesson);write('voice-manifest.json',manifest);write('voice-playback-plan.json',plan);
for (const [label,stability,similarity] of [['A',0.5,0.75],['B',0.65,0.75],['C',0.5,0.9]]) write(`candidate-${label}-request-options.json`,{stability,similarity});
write('render-config.json',{lessonPath:`${output}/assembled.lesson.json`,entryPoint:'src/dev/release-entry.tsx',compositionId:'Lesson-release',codec:'h264',scale:1,crf:18,
  inputs:[`${output}/voice-manifest.json`,`${output}/voice-playback-plan.json`]});
const evidence = {date:'2026-10-08',sourcePath,sourceSha256:sha(readFileSync(sourcePath)),
  inputs:[selectionPath].map(file=>({file,sha256:sha(readFileSync(file))})),
  sceneCount:lesson.scenes.length,recordingCount:manifest.scenes.length,
  words:manifest.scenes.reduce((n,s)=>n+s.text.split(/\s+/).length,0),holds,
  changes:['Copied corrected v3 source into an isolated draft; spoken text unchanged.',
    'Enabled existing syllabusNeutral display behavior.', 'Isolated final recording destinations from earlier prototypes.',
    'User found all six auditions acceptable. Default A controls are the starting settings; final narration remains unreviewed.'],
  verifiedCalculations:['2.00 mol × 12.01 g/mol = 24.02 g, reported as 24.0 g to three significant figures.',
    'Ca(H2PO4)2 atom counts: Ca 1, H 4, P 2, O 8. Supplied values total 234.044 g/mol, rounded to 234.04 g/mol.',
    '71.0 g / 70.90 g/mol = approximately 1.00141 mol, reported as 1.00 mol.'],
  pending:['Teacher/science approval of the complete script and its visuals.', 'Listening review of complete final narration.',
    'All 14 final recordings and timestamp alignments.', 'Measured playback assembly and fresh captions.',
    'Full export review for science, listening, motion, devices and accessibility.']};
write('handoff.json',evidence);
write('listening-review-template.json',{status:'pending',reviewer:null,preferredAudition:null,acceptedSettings:null,
  segments:manifest.scenes.map(s=>({id:s.id,textSha256:sha(s.text),audioSha256:null,pronunciation:'unreviewed',numbers:'unreviewed',accent:'unreviewed',delivery:'unreviewed',omissions:'unreviewed',notes:''}))});
writeFileSync(`${output}/recording-script.md`,['# Molar mass: final v3 recording script','',
  'Course-neutral isolated draft. Simon Australian male, Eleven v4. All final recordings are pending. Do not substitute the earlier compound audition for this exact script.','',
  ...manifest.scenes.flatMap(s=>[`## ${s.id}`, '', s.text, '', `Expected hash: ${s.hash}. Parent scene: ${s.parentSceneId}.`, '']),
  '## Measured response holds','',...holds.map(h=>`- ${h.sceneId}: ${h.seconds} seconds (${h.frames} frames at ${lesson.fps} fps), between separately recorded prompt and answer.`),''].join('\n'));
const escape = value => String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
writeFileSync(`${output}/index.html`, `<!doctype html><html lang="en-AU"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Molar mass: updated recording script</title><style>body{font:19px/1.6 system-ui;background:#faf7ee;color:#183b37;max-width:960px;margin:36px auto;padding:0 20px}article{background:white;border-radius:12px;padding:24px;margin:22px 0}.note{background:#e8f5f0;padding:18px;border-radius:10px}a{color:#0d6b52}video{width:100%}</style><h1>Molar mass: updated script</h1><p class="note">${evidence.words} spoken words across ${evidence.sceneCount} scenes. This draft includes an opening prediction hold and an explanation of why multiplying works. Final audio and video are pending.</p><p><a href="recording-script.md">Exact recording script</a> · <a href="handoff.json">Calculation checks and status</a></p><h2>Opening timing preview</h2><p>This unvoiced visual test uses provisional timing. The answer image and callout stay hidden through the thinking hold. Final timing will follow the new recording.</p><video controls preload="metadata" src="hook-visual-timing.mp4"></video>${lesson.scenes.map(scene=>`<article><h2>${escape(scene.heading??scene.id)}</h2><p>${escape(scene.voiceover.text)}</p>${splitRules[scene.id]?`<p><strong>Thinking hold:</strong> ${splitRules[scene.id].seconds} seconds of silence before the answer. Answer artwork stays hidden during the hold.</p>`:''}</article>`).join('')}</html>`);
writeFileSync(`${output}/README.md`,['# Molar mass continuity recording handoff','',
  'This is the corrected v3 lesson, with existing course-neutral display enabled. It preserves spoken text, usable layouts, images and scene animations. Frame durations remain provisional until measured assembly. It is not an approved or rendered lesson.','',
  'Eleven scenes use fourteen separately recorded segments. The opening prediction and bracket worked example each have a four-second response gap. The chlorine quick check has five seconds. Use measured silent PCM between recordings rather than an SSML break or an imprecise audio tag.','',
  'The user found the six v4 auditions acceptable with no distinct preference. Default A controls are retained in `accepted-request-options.json`. Keep the exact final script in `recording-script.md`; the short auditions are separate tests. Review every final segment before release.','',
  'The expected calculation checks and remaining approvals are recorded in `handoff.json`. The complete script still needs science/listening approval, including calcium dihydrogen phosphate, O two/C l two, lowercase m/capital M, decimal precision and significant figures. New course requirements involving investigation are mapped separately; this explanation alone does not satisfy practical work.','',
  '## Commands after the corresponding reviews','', 'From the repository root:','', '```powershell',
  `node scripts/generate-elevenlabs-audio.mjs ${output}/voice-manifest.json --request-options=${output}/candidate-A-request-options.json --dry-run`,
  '# After setting an API key privately and selecting accepted settings:',
  `node scripts/generate-elevenlabs-audio.mjs ${output}/voice-manifest.json --request-options=${output}/accepted-request-options.json`,
  '# Listen to every final segment, then assemble measured playback:',
  `node scripts/assemble-lesson-playback.mjs ${output}/voice-manifest.json ${output}/voice-playback-plan.json --output=${output}/assembled.lesson.json --hook-first`,
  `node scripts/release-preflight.mjs ${output}/assembled.lesson.json`,
  `node scripts/render-release.mjs ${output}/render-config.json --output-dir=${output}/full-render`,
  '```','',
  'The renderer writes a dependency snapshot and caption artifacts. Watch the entire exported MP4 and record all five review scopes using `scripts/release-review.mjs`, following `docs/production/playback-and-release.md`. Do not create pass records before performing the actual reviews.','',
  'Browser auditions supplied MP3s only; production requires fresh timestamped recordings. All fourteen final audio files are currently pending. This package makes the next recording step concrete without overwriting accepted media.',''].join('\n'));
console.log(JSON.stringify({output,scenes:evidence.sceneCount,segments:evidence.recordingCount,words:evidence.words,holds},null,2));
