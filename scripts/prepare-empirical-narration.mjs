import fs from 'node:fs';
import {sha256} from './lib/playback-assembly.mjs';
import {checkProductionBrief} from './lib/production-brief.mjs';

const sourceDir = 'out/prototypes/empirical-formulas-organised-2026-10-09';
const output = 'out/prototypes/empirical-formulas-voiced-2026-10-09';
const read = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const brief = checkProductionBrief(process.cwd(), `${sourceDir}/production-brief.json`, {stage:'recording'});
if (!brief.ready) throw Error('Recording brief is not ready: ' + JSON.stringify(brief.blockers));
if (fs.existsSync(output)) throw Error('Preserve the existing recording package. Resume its generator instead of recreating it.');
const lesson = read(`${sourceDir}/lesson.json`);
const textOnly = read(`${sourceDir}/voice-manifest.text-only.json`);
const canonical = text => text.replace(/\s+/g, ' ').trim();
const manifest = {compositionId:'Chemistry-empirical-organised-v4-2026-10-09',
  lessonPath:`${sourceDir}/lesson.json`, lessonSha256:brief.source.lessonSha256, fps:30,
  requiredAccent:'Australian', voiceSelection:{voiceName:'Simon - Australian male',
    voiceId:'cOEV2DrZBBGNLpE74kQu', modelId:'eleven_v4', requiredAccent:'Australian',
    selectionBasis:'Existing user-selected Australian voice. Use the conversational limiting request settings for a fresh take.',
    productionStatus:'Fresh recording requires exact playback and listening review.'}, scenes:[]};
const plan = {lessonPath:manifest.lessonPath, playback:[]};
for (const scene of lesson.scenes) {
  const selected = textOnly.scenes.filter(segment => segment.parentSceneId === scene.id);
  if (!selected.length || canonical(selected.map(segment=>segment.text).join(' ')) !== canonical(scene.voiceover.text)) {
    throw Error('Text-only manifest and reviewed scene differ: ' + scene.id);
  }
  if (selected.length !== (scene.id === 'quick-check' ? 2 : 1)) throw Error('Unexpected segment split: ' + scene.id);
  const items = [];
  for (const [index, segment] of selected.entries()) {
    if (segment.text.length > 2000 || segment.text.includes(String.fromCharCode(0x2014))) throw Error('Invalid narration segment: ' + segment.id);
    if (index && scene.id === 'quick-check') items.push({kind:'silence',seconds:2,frames:60});
    const hash = sha256(segment.text).slice(0,12);
    const audioFile = `public/audio/${manifest.compositionId}/${segment.id}.${hash}.mp3`;
    manifest.scenes.push({...segment,hash,audioFile});
    items.push({kind:'audio',segmentId:segment.id,audioFile});
  }
  plan.playback.push({sceneId:scene.id,items});
}
if (JSON.stringify(lesson).includes(String.fromCharCode(0x2014))) throw Error('Selected copy has prohibited punctuation.');
fs.mkdirSync(output,{recursive:true});
const write = (name,value) => fs.writeFileSync(`${output}/${name}`,JSON.stringify(value,null,2)+'\n',{flag:'wx'});
write('voice-manifest.json',manifest);
write('voice-playback-plan.json',plan);
write('request-options.json',{stability:0.35,similarity:0.75});
write('recording-inputs.json',{source:brief.source,scriptReview:read(`${sourceDir}/production-brief.json`).scriptReview,
  priorDraftPreserved:true,words:manifest.scenes.map(scene=>scene.text).join(' ').split(/\s+/).length,
  status:'Prepared valid production manifest. No playback or listening approval.'});
console.log(`Prepared ${manifest.scenes.length} hashed segments. Reviewed words unchanged; quiz hold planned separately.`);
