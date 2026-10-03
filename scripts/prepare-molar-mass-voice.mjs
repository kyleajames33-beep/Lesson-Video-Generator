import {mkdirSync,readFileSync,writeFileSync} from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {buildSpeechRequest} from './elevenlabs-request.mjs';

// Prepare only. This script makes no network requests and generates no speech.
const lessonPath='src/prototypes/data/molar-mass-v2.json';
const lesson=JSON.parse(readFileSync(lessonPath,'utf8'));
const voiceSelection=JSON.parse(readFileSync('src/prototypes/data/molar-mass-voice-selection.json','utf8'));
if(JSON.stringify(lesson).includes('\u2014'))throw new Error('Em dash in selected lesson');
const output='out/prototypes/molar-mass-full-review';
mkdirSync(output,{recursive:true});
const audioRoot='public/audio/Chemistry-Y11-M2-L2-revision';
const scenes=[];
const playback=[];
for(const scene of lesson.scenes){
  const text=scene.voiceover.text;
  let parts=[{id:scene.id,text}];
  if(scene.id==='quick-check'){
    const split=text.indexOf('Chlorine gas has two atoms per molecule');
    if(split<0)throw new Error('Missing quick-check solution boundary');
    parts=[{id:'quick-check-prompt',text:text.slice(0,split).trim()},
      {id:'quick-check-answer',text:text.slice(split).trim()}];
    if(parts.some(p=>!p.text))throw new Error('Empty quick-check section');
    if(parts.map(p=>p.text).join(' ')!==text)throw new Error('Split changed narration');
  }
  const items=[];
  for(const [i,part] of parts.entries()){
    const hash=createHash('sha256').update(part.text).digest('hex').slice(0,12);
    const file=path.posix.join(audioRoot,`${part.id}.${hash}.mp3`);
    for(const modelId of ['eleven_flash_v2_5','eleven_multilingual_v2','eleven_v3','eleven_v4']){
      buildSpeechRequest({text:part.text,voiceId:'request-validation-only',modelId});
    }
    scenes.push({...part,parentSceneId:scene.id,hash,audioFile:file});
    if(i>0)items.push({kind:'silence',seconds:5,frames:5*lesson.fps});
    items.push({kind:'audio',segmentId:part.id,audioFile:file});
  }
  playback.push({sceneId:scene.id,estimatedDurationInFrames:scene.durationInFrames,items});
}
const manifest={compositionId:'Chemistry-Y11-M2-L2-revision',lessonPath,title:lesson.title,fps:lesson.fps,
  requiredAccent:'Australian',voiceBrief:'Clear, natural Australian English for HSC students. Calm teaching delivery, precise scientific terms and spoken significant figures. Avoid exaggerated character voices.',
  voiceSelection,status:'voice selected; production recordings and pronunciation review pending',outputConvention:'One MP3 and character alignment per segment. Keep revision media separate from original recordings.',scenes};
const plan={lessonPath,sceneOrder:lesson.scenes.map(s=>s.id),timing:'resolve audio durations and captions from final recordings',playback};
writeFileSync(path.join(output,'voice-manifest.json'),JSON.stringify(manifest,null,2)+'\n');
writeFileSync(path.join(output,'voice-playback-plan.json'),JSON.stringify(plan,null,2)+'\n');
const pronunciation=[
  ['m','lowercase m; sample mass'],['n','lowercase n; amount of substance'],['M','capital M; molar mass'],
  ['g mol⁻¹','grams per mole'],['Ca(H₂PO₄)₂','calcium dihydrogen phosphate; outer subscript applies to the complete group'],
  ['Cl₂','chlorine gas; two chlorine atoms per molecule'],['234.04','two hundred thirty-four point zero four'],
  ['24.0','twenty-four point zero; preserve the spoken trailing zero'],['1.00','one point zero zero; preserve both spoken trailing zeros'],
];
writeFileSync(path.join(output,'VOICE-REVIEW.md'),`# Voice recording and review\n\nPrepared ${scenes.length} recording segments for ${lesson.scenes.length} scenes.\nThis preparation step generates no speech. Australian English is required for the HSC audience. Simon - Australian male is selected, with v4 as the auditioned model. Check compound pronunciation before the full batch.\n\nUse the same formula passage and voice ID for the four model comparison samples.\nThe existing recording is a practical baseline with unknown original model and\nvoice, so it cannot isolate the effect of a model upgrade. Comparison text is\na historical benchmark; use the corrected revision script for production.\n\n| Written form | Listen for |\n| --- | --- |\n${pronunciation.map(row=>'| '+row.join(' | ')+' |').join('\n')}\n\nThe manifest has separate quick-check prompt and solution recordings.\nInsert 150 frames of silence between them at 30 fps. Resolve final durations\nand visual cues from alignment, then offset solution captions by the prompt\nplayback duration plus the five-second gap. The playback plan is preparation\nmetadata; the production renderer must consume or assemble it before release.\n\nValidate pronunciation on the compound example before generating every scene.\nSave original files and model/voice provenance; normalize review copies only.\n\nReproduce: node scripts/prepare-molar-mass-voice.mjs\nDry run: node scripts/generate-elevenlabs-audio.mjs ${output}/voice-manifest.json --voice-id=cOEV2DrZBBGNLpE74kQu --model=eleven_v4 --dry-run\n`);
console.log(`Prepared ${scenes.length} recording segments, ${lesson.scenes.length} scenes, one five-second gap. No speech generated.`);
