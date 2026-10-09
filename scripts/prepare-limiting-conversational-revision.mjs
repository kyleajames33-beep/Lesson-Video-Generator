import fs from 'node:fs';
import {sha256, resolvePlayback, writePlayback} from './lib/playback-assembly.mjs';
import {verifyAssembly} from './lib/verify-assembly.mjs';
import {lessonTimeline} from '../src/lesson/timeline.mjs';
import {TRANSITION_FRAMES} from './_yt-constants.mjs';

const dir = 'out/prototypes/limiting-conversational-2026-10-09';
const read = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const write = (file, value) => fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n');
const scripts = {
  'hook-prompt': "You're making burgers. Five buns, four patties. That's four burgers, right? One lonely bun left over. Buying another hundred buns won't help. You've still got no patties. Chemistry has exactly this problem, except the recipe can ask for two of one ingredient. And that's where the obvious answer can be wrong.",
  'hook-answer': "The ingredient that runs out sets the limit. In chemistry, that's the limiting reagent. The balanced equation tells us the recipe.",
  title: "Limiting reagents. What runs out, what gets made, and what's left.",
  concept: "Here's the same idea with hydrogen and oxygen. The recipe needs two hydrogen molecules for every oxygen molecule, making two water molecules. We've got ten hydrogen and four oxygen. Enough for four batches. There goes the oxygen. We've made eight water molecules, with two hydrogen molecules still sitting there. They've got nobody left to react with. More hydrogen won't get us any more water. Oxygen is limiting; hydrogen is in excess. This is a counting model, so those neat batches aren't real collisions, and the graph isn't showing reaction speed.",
  formula: "Now here's the trap. We've got about zero point four three five moles of sodium, and zero point two eight two moles of chlorine gas. Less chlorine. So chlorine runs out first? Sounds reasonable. But the equation needs twice as much sodium: two sodium for one chlorine. Sodium's bigger supply has a bigger job to do. Dividing by two gives sodium about zero point two one eight batches' worth. Chlorine gives zero point two eight two, because its coefficient is one. Sodium runs out first. The recipe decided it. These are mole amounts per equation coefficient, not literal little batches in a beaker.",
  'worked-example-2': "That surprising result is the key to this calculation. Ten point zero grams of sodium and twenty point zero grams of chlorine gas. How much sodium chloride could we make, and how much chlorine would be left? Grams alone can't tell us who runs out, because the particles have different masses. Using the supplied molar masses, we get about zero point four three five moles of sodium and zero point two eight two moles of chlorine. Same comparison we just saw: sodium is limiting. Now the nice part. The equation has two sodium and two sodium chloride, so their mole ratio is one to one. That sodium amount gives a theoretical yield of twenty-five point four grams of sodium chloride. The chlorine hasn't all disappeared, though. The recipe uses one chlorine for two sodium, so only about zero point two one seven five moles of chlorine react. What's left is the starting amount minus that amount: four point five eight grams of chlorine. The working keeps extra digits; these final masses are rounded to three significant figures.",
  misconception: "It's tempting to look for the smallest number and call it a day. Our chlorine example would catch you out. There were fewer moles of chlorine, but sodium was required in a two-to-one ratio. That's why the coefficients matter. And theoretical yield is a ceiling for the stated reaction, not a promise about what we'll collect in the lab. We're assuming the limiting reagent is completely consumed in the stated reaction. Actual yield can be lower.",
  'quick-check-prompt': "One more: four point zero zero grams of hydrogen and sixteen point zero grams of oxygen, with the same two-to-one recipe for water. Hydrogen has less mass. Does it actually run out first? The molar masses are here. If you'd like a go, this is a good spot to pause.",
  'quick-check-answer': "Hydrogen gives about one point nine eight four moles. Dividing by two leaves zero point nine nine two. Oxygen gives about zero point five zero zero moles, and its coefficient is one. So oxygen runs out first, even though we started with more grams of it. Again, the recipe beats the first impression.",
  summary: "So the useful question isn't, 'Which pile looks smaller?' It's, 'How much reaction can each supply support?' Moles account for particle numbers; the coefficients account for the recipe. Whichever runs out sets the theoretical yield. The excess is whatever we started with minus whatever reacted. Once those ideas click, the calculation has a reason behind it. And the leftover bun finally makes sense."
};
const cues = {
  hook: {assemble: "That's four burgers", extraBuns: 'Buying another hundred buns'},
  concept: {bullets: ['The recipe needs two hydrogen', "We've got ten hydrogen", "We've made eight water"], secondary: 'This is a counting model', callout: 'Oxygen is limiting', run: 'There goes the oxygen', leftovers: 'two hydrogen molecules still'},
  formula: {bullets: ["We've got about", 'But the equation needs', 'Sodium runs out first'], steps: ["We've got about", 'Dividing by two', 'Sodium runs out first'], secondary: 'These are mole amounts', callout: 'The recipe decided it'},
  'worked-example-2': {steps: ['we get about', 'Same comparison', 'a theoretical yield', 'so only about', "What's left"], coachNote: 'The working keeps'},
  misconception: {secondary: 'There were fewer moles', callout: 'Actual yield can be lower'},
  'quick-check': {steps: ['Hydrogen gives about', 'Oxygen gives about', 'So oxygen runs out first']},
  summary: {takeaways: ['Moles account', 'Whichever runs out', 'The excess is'], finalPrompt: 'Once those ideas click'}
};
const mode = process.argv[2] ?? 'prepare';
if (mode === 'prepare') {
  if (fs.existsSync(`${dir}/voice-manifest.json`) && (!process.argv.includes('--refresh-unrecorded') || read(`${dir}/voice-manifest.json`).scenes.some(s=>fs.existsSync(s.audioFile)))) throw Error('Preserve recorded revision. Only an unrecorded draft may be refreshed explicitly.');
  fs.mkdirSync(dir, {recursive: true});
  const lesson = read('out/prototypes/limiting-reagents-feedback-2026-10-09/narrated.lesson.json');
  lesson.title = 'Limiting reagents';
  lesson.subtitle = 'The recipe decides what runs out';
  lesson.lessonIntent = 'Explain limiting reagents through prediction, reaction capacity and a counterintuitive worked example.';
  const get = id => lesson.scenes.find(s => s.id === id);
  Object.assign(get('hook'), {heading: 'Another hundred buns?', body: '5 buns. 4 patties. One of each per burger.', callout: '4 burgers. The patties set the limit.'});
  Object.assign(get('concept'), {heading: 'No oxygen, no more water'});
  Object.assign(get('formula'), {heading: 'The smaller pile wins?', body: 'The starting amounts suggest one answer. Does the recipe agree?', callout: 'The recipe decides what runs out.'});
  Object.assign(get('quick-check'), {pausePrompt: 'Pause here if you would like a go.'});
  Object.assign(get('misconception'), {callout: 'Theoretical yield is a maximum. Actual yield can be lower.'});
  Object.assign(get('summary'), {heading: 'The recipe wins', points: ['Reaction capacity: moles divided by the equation coefficient.', 'Theoretical yield: set by the reactant that runs out.', 'Excess left: starting amount minus amount reacted.'], finalPrompt: 'Which supply supports less reaction?', caption: 'The recipe decides what runs out, the yield and the leftovers.'});
  const manifest = {compositionId: 'Chemistry-limiting-conversational-2026-10-09', lessonPath: `${dir}/lesson.json`, fps: 30,
    requiredAccent: 'Australian', voiceSelection: read('out/prototypes/limiting-reagents-feedback-2026-10-09/voice-manifest.json').voiceSelection, scenes: []};
  const plan = {lessonPath: manifest.lessonPath, playback: []};
  for (const scene of lesson.scenes) {
    const keys = scene.id === 'hook' ? ['hook-prompt', 'hook-answer'] : scene.id === 'quick-check' ? ['quick-check-prompt', 'quick-check-answer'] : [scene.id];
    scene.voiceover = {text: keys.map(k => scripts[k]).join(' ')};
    delete scene.captions; delete scene.responseHold;
    scene.revealDelays = scene.diagram ? {diagram: 30} : {};
    const items = [];
    for (const [index, key] of keys.entries()) {
      if (index && scene.id === 'quick-check') items.push({kind: 'silence', seconds: 2, frames: 60});
      const text = scripts[key], hash = sha256(text).slice(0, 12);
      const audioFile = `public/audio/${manifest.compositionId}/${key}.${hash}.mp3`;
      manifest.scenes.push({id: key, parentSceneId: scene.id, text, hash, audioFile});
      items.push({kind: 'audio', segmentId: key, audioFile});
    }
    plan.playback.push({sceneId: scene.id, items});
    scene.durationInFrames = Math.ceil(scene.voiceover.text.split(/\s+/).length / 150 * 1800) + 60;
    const estimate = phrase => {const at = scene.voiceover.text.toLowerCase().indexOf(phrase.toLowerCase()); if (at < 0) throw Error(`Missing estimated cue ${phrase}`); return Math.max(30, Math.ceil(scene.voiceover.text.slice(0, at).trim().split(/\s+/).length / 150 * 1800));};
    applyCues(scene, phrase => estimate(phrase));
    if (scene.id === 'hook') scene.revealDelays = {...scene.revealDelays, answerVisibleStart: 0, callout: estimate("That's four burgers")};
    if (scene.id === 'quick-check') {
      const startFrame = Math.ceil(scripts['quick-check-prompt'].split(/\s+/).length / 150 * 1800);
      scene.responseHold = {startFrame, endFrame: startFrame + 60};
      scene.revealDelays.answerVisibleStart = startFrame + 60;
      scene.revealDelays.stepAts = scene.revealDelays.stepAts.map(n => n + 60);
      scene.durationInFrames += 60;
    }
  }
  applyVisualDirection(lesson);
  if (JSON.stringify(lesson).includes(String.fromCodePoint(0x2014))) throw Error('Em dash in selected lesson');
  write(`${dir}/lesson.json`, lesson); write(`${dir}/voice-manifest.json`, manifest); write(`${dir}/voice-playback-plan.json`, plan); write(`${dir}/cue-plan.json`, cues);
  write(`${dir}/request-options.json`, {stability: 0.35, similarity: 0.75});
  write(`${dir}/remotion-preview-props.json`, {lesson});
  fs.writeFileSync(`${dir}/recording-script.md`, Object.entries(scripts).map(([id,text]) => `## ${id}\n\n${text}`).join('\n\n') + '\n');
  write(`${dir}/revision-plan.json`, {status: 'Unrecorded draft with estimated cues', priorVideo: 'https://youtu.be/b7OCuLsXgG8',
    words: Object.values(scripts).join(' ').split(/\s+/).length, feedback: 'Replace directive checklist delivery with conversational teaching, varied sentence shapes and meaningful surprise. Fix recap heading overlap.',
    delivery: 'Same Australian Simon v4 voice. Lower stability from 0.50 to 0.35 for a separate expressive take. No forced laughter, shouting or sound effects. Questions, contractions and contrasting predictions carry the performance.',
    reviewBoundary: 'Actual narration quality requires listening. Draft estimates are replaced with provider alignment. Review short narrated pilots before another full export.',
    priorMediaPreserved: true});
  console.log('Prepared fresh text for all ten segments. Words: ' + Object.values(scripts).join(' ').split(/\s+/).length);
} else if (mode === 'finalize' || mode === 'finalize-pilot') {
  const lesson = read(`${dir}/lesson.json`), manifest = read(`${dir}/voice-manifest.json`), plan = read(`${dir}/voice-playback-plan.json`);
  applyVisualDirection(lesson);
  const pilotOnly = mode === 'finalize-pilot';
  if (pilotOnly) {
    const selected = new Set(['concept','formula','summary']);
    lesson.scenes = lesson.scenes.filter(s=>selected.has(s.id));
    manifest.scenes = manifest.scenes.filter(s=>selected.has(s.parentSceneId));
    plan.playback = plan.playback.filter(s=>selected.has(s.sceneId));
  }
  const result = resolvePlayback({lesson, manifest, plan, tailSeconds: 0.5});
  writePlayback(result);
  const norm = text => text.toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
  const cue = (scene, phrase) => {const words = phrase.split(/\s+/).map(norm); const index = scene.captions.findIndex((_,i) => words.every((w,j) => norm(scene.captions[i+j]?.text ?? '') === w)); if (index < 0) throw Error(`Missing aligned cue ${scene.id}: ${phrase}`); return Math.ceil(scene.captions[index].startMs * 30 / 1000);};
  for (const scene of result.lesson.scenes) {
    applyCues(scene, phrase => cue(scene, phrase));
    if (scene.id === 'hook') scene.revealDelays = {...scene.revealDelays, answerVisibleStart: 0, callout: cue(scene,"That's four burgers")};
    scene.durationInFrames = Math.max(scene.voiceover.endFrame + 15 + TRANSITION_FRAMES,
      Math.max(0, ...(scene.revealDelays.stepAts ?? []), ...(scene.revealDelays.takeawayAts ?? [])) + 90 + TRANSITION_FRAMES);
    const errors = verifyAssembly(scene, 30); if (errors.length) throw Error(`${scene.id}: ${errors.join('; ')}`);
  }
  const lessonPath = `${dir}/${pilotOnly ? 'pilot' : 'narrated'}.lesson.json`;
  write(lessonPath, result.lesson); write(`${dir}/${pilotOnly ? 'remotion-narrated-pilot' : 'remotion-full'}-props.json`, {lesson: result.lesson});
  const timeline = lessonTimeline(result.lesson);
  write(`${dir}/timeline.json`, {durationInFrames: timeline.durationInFrames, scenes: timeline.scenes.map(s => ({id:s.scene.id, startFrame:s.startFrame, durationInFrames:s.scene.durationInFrames}))});
  const base = {lessonPath, entryPoint:'src/dev/release-entry.tsx', compositionId:'Lesson-release', codec:'h264', scale:1, crf:16, normalizeAudio:true, concurrency:2, audioMode:'alignedPcm', inputs:['scripts/prepare-limiting-conversational-revision.mjs',`${dir}/voice-manifest.json`,`${dir}/voice-playback-plan.json`,`${dir}/cue-plan.json`,`${dir}/request-options.json`]};
  const first = timeline.scenes.find(s=>s.scene.id==='concept').startFrame;
  const recap = timeline.scenes.find(s=>s.scene.id==='summary').startFrame;
  const last = (pilotOnly ? recap : timeline.scenes.find(s=>s.scene.id==='worked-example-2').startFrame) - 1;
  write(`${dir}/pilot-config.json`, {...base, frameRange:[first,last]});
  write(`${dir}/recap-config.json`, {...base, frameRange:[recap,timeline.durationInFrames-1]});
  if (!pilotOnly) write(`${dir}/full-config.json`, base);
  console.log(JSON.stringify({seconds:timeline.durationMs/1000, pilotSeconds:(last-first+1)/30, recapSeconds:(timeline.durationInFrames-recap)/30}));
} else throw Error('Use prepare or finalize.');

function applyCues(scene, frame) {
  const spec = cues[scene.id]; if (!spec) return;
  if (spec.bullets) scene.bullets.forEach((b,i)=>b.at=frame(spec.bullets[i])/30);
  if (spec.steps) {
    if (scene.diagram?.type === 'coefficientDivide') {scene.diagram.delay=30; scene.diagram.steps=spec.steps.map(p=>Math.max(0,frame(p)-30));}
    else scene.revealDelays.stepAts=spec.steps.map(frame);
  }
  if (spec.run) {scene.diagram.delay=30; scene.diagram.runStart=Math.max(0,frame(spec.run)-30-3*31);}
  if (spec.leftovers) scene.diagram.leftoversAt=Math.max(0,frame(spec.leftovers)-30);
  if (spec.assemble) scene.diagram={...scene.diagram,type:'recipeCount',delay:0,assembleAt:frame(spec.assemble),extraBunsAt:frame(spec.extraBuns)};
  if (spec.takeaways) scene.revealDelays.takeawayAts=spec.takeaways.map(frame);
  for (const key of ['secondary','callout','coachNote','finalPrompt']) if (spec[key]) scene.revealDelays[key]=frame(spec[key]);
}

function applyVisualDirection(lesson) {
  for (const scene of lesson.scenes) {
    if (scene.id === 'hook') scene.diagram={type:'recipeCount',delay:0,assembleAt:scene.diagram?.assembleAt ?? 90,extraBunsAt:scene.diagram?.extraBunsAt ?? 240};
    if (scene.id === 'concept') Object.assign(scene.diagram,{highlightLeftovers:true});
    if (scene.id === 'formula') Object.assign(scene.diagram,{attention:'handdrawn'});
    if (scene.id === 'worked-example-2') {
      scene.workedVisualLayout='compact';
      scene.steps[3]='Cl₂ reacted = n(Na) / 2 = 0.21749 mol; left = initial − reacted';
      scene.steps[4]='NaCl yield = 25.4 g; Cl₂ left = 4.58 g';
    }
  }
}
