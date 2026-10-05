import {mkdirSync,readFileSync,writeFileSync} from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {buildSpeechRequest} from './elevenlabs-request.mjs';

// Stage a new script version. Never connect revised words to old recordings.
const sourcePath='src/prototypes/data/molar-mass-v2.json';
const lessonPath='src/prototypes/data/molar-mass-v3.json';
const source=JSON.parse(readFileSync(sourcePath,'utf8'));
const selection=JSON.parse(readFileSync('src/prototypes/data/molar-mass-voice-selection.json','utf8'));
const revisions={
  hook:{heading:'Same particle count. Which sample is heavier?',body:'One mole of carbon atoms. One mole of oxygen atoms.',callout:'Equal amounts do not mean equal masses.',
    text:'One mole of carbon atoms. One mole of oxygen atoms. Same number of atoms. So, would they weigh the same? It’s a reasonable guess. But oxygen atoms are heavier. Equal amounts can have different masses. Molar mass explains the difference, and lets us turn a mass on a balance into an amount in moles.',
    delivery:'Curious question, then a warm correction. Stress same number and heavier. Let the contrast land.',
    visual:'Reuse the molar-scale atoms. Compare carbon and oxygen with equal entity counts, then reveal their different masses. Do not suggest one mole is a single atom.'},
  title:{text:'Molar mass.',delivery:'Brief, confident chapter punctuation.',visual:'Reuse the existing title after the opening question. Keep the year and module in chrome; do not speak the metadata.'},
  concept:{heading:'Molar mass tells us the mass per mole',body:'Molar mass is mass divided by amount of substance, in grams per mole.',
    bullets:[{text:'M = m ÷ n, in g mol⁻¹.',at:2},{text:'For carbon atoms: M = 12.01 g mol⁻¹.',at:8},{text:'Use the complete formula for molecules and compounds.',at:18}],
    text:'Think of molar mass as the mass per mole. For carbon atoms, the periodic-table value gives twelve point zero one grams per mole. For oxygen atoms, sixteen point zero zero. That explains our heavier sample. For these school calculations, the relative atomic mass gives the numerical molar mass of the atoms. But check what you’re counting. Oxygen gas is O two: two atoms in each molecule. Its molar mass is twice the atomic value.',
    delivery:'Steady explanation with emphasis on per mole and atoms. Slow slightly for the change to oxygen gas.',
    visual:'Reuse the H, C and O diorama. Keep H as a visual reference rather than reading every value. Highlight carbon then oxygen. Show the O₂ relationship as a separate cue; keep the atomic reference labels stable.'},
  definition:{heading:'More sample. Same molar mass.',body:'g mol⁻¹ means grams per mole.',secondary:'m is sample mass. M is mass per mole.',
    text:'Here’s a useful distinction. Lowercase m is your sample’s mass. Capital M is its mass per mole. Double a sample of the same substance: twice the mass, twice the amount. The molar mass stays the same. And that unit, grams per mole, tells you why.',
    delivery:'Friendly explanation. Contrast sample mass with mass per mole, then settle on stays the same.',
    visual:'Reuse definition layout. Keep m and M distinct. Double mass and amount together while holding M fixed for unchanged composition.'},
  'lab-footage':{heading:'The balance gives grams. We want moles.',
    text:'A balance gives us grams, not moles. Tare the empty container, add the sample, and read its mass. Now we need a bridge from that mass to an amount. If we know the substance and its molar mass, we can make the conversion.',
    delivery:'Practical and purposeful. Small lift on now we need a bridge.',
    visual:'Preserve the tared balance schematic and its schematic caption. Highlight mass in grams. No invented measurement or implication of a completed practical.'},
  formula:{heading:'What are you trying to find?',callout:'Mass: multiply. Amount: divide.',
    text:'Start with what you want to find. Mass? Multiply the amount in moles, lowercase n, by the molar mass, capital M. That gives m equals n times capital M. Watch the units: moles times grams per mole leaves grams. Finding the amount instead? Divide mass by molar mass. The units help check the setup. They don’t check your atom counts for you.',
    delivery:'Two clear questions with different intonation. Confident on multiply and divide. Slow for the unit cancellation.',
    visual:'Reuse the readable m, n and M cards and unit cancellation. Show one target at a time. Hold each equation for at least four seconds; do not flash the rearrangement.'},
  'mass-example':{heading:'Two moles of carbon: multiply or divide?',coachNote:'Find mass, so multiply n by M. Keep guard digits until the final answer.',
    text:'Let’s try it. What is the mass of two point zero zero moles of carbon atoms? We want grams, so multiply. Two point zero zero times twelve point zero one gives twenty-four point zero two grams. Keep those digits for now. The amount has three significant figures, so our final answer is twenty-four point zero grams. That last zero matters: it records the precision of the answer.',
    delivery:'Inviting start. Patient calculation. Satisfying but restrained emphasis on that last zero matters.',
    visual:'Reuse WorkedCarbon. Highlight the target unit before substitution. Reveal 24.02, then 24.0 and its final zero. Do not round mid-calculation.'},
  'worked-example':{heading:'What does the outside 2 multiply?',coachNote:'Count first: Ca 1, H 4, P 2, O 8. Then calculate.',
    text:'Now for the bracket trap. Calcium dihydrogen phosphate looks busy, but we can unpack it. The two outside the bracket doubles everything inside. Calcium sits outside, so it stays at one. Before you touch the calculator, count the oxygen atoms. Eight oxygen atoms. Four inside each group, with two groups. The full count is one calcium, four hydrogens, two phosphorus atoms and eight oxygens. Multiply each count by its supplied atomic mass, then add the contributions shown. Keep the extra digits until the end. The total is two hundred thirty-four point zero four four grams per mole. Rounded to two decimal places: two hundred thirty-four point zero four grams per mole. Count first. Calculate second.',
    delivery:'Light anticipation on bracket trap, then patient coaching. Ask the oxygen question genuinely. Calm confidence in the answer; measured pace on decimals.',
    visual:'Reuse the hand-drawn bracket board and exact contributions 40.08, 4.032, 61.94 and 127.992. First show the formula without atom counts. Keep counts and solution hidden through a four-second thinking gap; then draw the bracket to explain eight oxygens. Preserve the unrounded sum and final answer.'},
  misconception:{heading:'Two ways to catch a wrong setup',
    body:'Changing sample size does not change M for the same composition.',secondary:'The outside 2 multiplies H, P and O, but not Ca.',
    text:'If your answer feels wrong, check two things before you start again. Did you confuse sample mass with molar mass? More sample doesn’t mean a bigger molar mass. And did you apply the outside subscript to every atom inside the bracket? It doubles hydrogen, phosphorus and oxygen, but not calcium. Catch the setup error before repeating the arithmetic.',
    delivery:'Reassuring and diagnostic, with a small pause between the two checks.',
    visual:'Reuse misconception comparison. Refer back to the same bracket and same symbols rather than introducing a new example. No unsupported claims about class error rates or exam marks.'},
  'quick-check':{heading:'Your turn: what must you calculate first?',pausePrompt:'Find M(Cl₂), then choose the conversion. Take five seconds or pause longer.',
    text:'Your turn. You have seventy-one point zero grams of chlorine gas, Cl two. How many moles is that? Use thirty-five point four five for chlorine. First decide what the complete formula tells you. Take five seconds to start, or pause for longer. Chlorine gas has two atoms per molecule, so double the atomic value. Its molar mass is seventy point nine zero grams per mole. We want moles, so divide mass by molar mass. The calculation gives about one point zero zero one four one moles. To three significant figures: one point zero zero moles. If you used the atomic value just once, go back to Cl two. That’s the step to fix.',
    delivery:'Invite an attempt without pressure. Patient feedback, then a helpful diagnosis rather than generic praise.',
    visual:'Reuse chlorine question and stable formula. Insert five seconds of actual silence between prompt and solution, with solution graphics hidden. Retain the full substitution 71.0 ÷ 70.90 and unit cancellation on screen.'},
  summary:{heading:'Choose the target. Check the formula.',points:['M: mass per mole, in g mol⁻¹.','Count every atom in the complete formula.','Find mass: multiply. Find amount: divide.','Keep guard digits. Round the final answer.'],finalPrompt:'What are you finding: M, m or n?',
    text:'When you meet the next question, make three decisions. What am I finding: mass, amount, or molar mass? Have I counted every atom in the formula? And do the units fit? Find mass: multiply. Find amount: divide. Keep extra digits during the working, then round the final answer. That’s a method you can take into the next problem.',
    delivery:'Confident and encouraging, with three clearly separated decisions. Finish warmly without a promotional flourish.',
    visual:'Reuse summary. End on the decision rule and hold it. No new decorative motion or catalogue restyling.'},
};
const order=['hook','title','concept','definition','lab-footage','formula','mass-example','worked-example','misconception','quick-check','summary'];
const lesson={...structuredClone(source),productionRole:'prototype',scriptRevision:'engagement-v3',scenes:order.map(id=>{
  const base=structuredClone(source.scenes.find(s=>s.id===id));
  const {text,delivery,visual,...copy}=revisions[id];
  delete base.captions;delete base.voiceover;delete base.revealDelays;
  const words=text.split(/\s+/).length;
  const seconds=id==='title'?3:Math.ceil(words/140*60)+4+(id==='worked-example'?4:0)+(id==='quick-check'?5:0);
  return {...base,...copy,durationInFrames:seconds*source.fps,voiceover:{text}};
})};
delete lesson.introVoiceover;
if(JSON.stringify(lesson).includes('\u2014'))throw new Error('Em dash in revised copy');
const output='out/prototypes/molar-mass-script-v3';
mkdirSync(output,{recursive:true});
writeFileSync(lessonPath,JSON.stringify(lesson,null,2)+'\n');
const recordings=[];
const playback=[];
const splitRules={
  'worked-example':{marker:'Eight oxygen atoms.',gapSeconds:4},
  'quick-check':{marker:'Chlorine gas has two atoms per molecule',gapSeconds:5},
};
for(const scene of lesson.scenes){
  const rule=splitRules[scene.id];
  const split=rule?scene.voiceover.text.indexOf(rule.marker):-1;
  if(rule&&split<0)throw new Error(`Missing answer boundary: ${scene.id}`);
  const parts=rule?[{id:scene.id+'-prompt',text:scene.voiceover.text.slice(0,split).trim()},
    {id:scene.id+'-answer',text:scene.voiceover.text.slice(split).trim()}]:[{id:scene.id,text:scene.voiceover.text}];
  if(parts.map(p=>p.text).join(' ')!==scene.voiceover.text)throw new Error('Split altered script');
  const items=[];
  for(const [i,part] of parts.entries()){
    const hash=createHash('sha256').update(part.text).digest('hex').slice(0,12);
    const audioFile=path.posix.join('public/audio/Chemistry-Y11-M2-L2-engagement-v3',`${part.id}.${hash}.mp3`);
    buildSpeechRequest({text:part.text,voiceId:selection.voiceId,modelId:selection.modelId});
    recordings.push({...part,parentSceneId:scene.id,hash,audioFile});
    if(i>0)items.push({kind:'silence',seconds:rule.gapSeconds,frames:rule.gapSeconds*lesson.fps});
    items.push({kind:'audio',segmentId:part.id,audioFile});
  }
  playback.push({sceneId:scene.id,items});
}
const manifest={compositionId:'Chemistry-Y11-M2-L2-engagement-v3',lessonPath,fps:lesson.fps,voiceSelection:selection,
  requiredAccent:'Australian',status:'unvoiced revision; all changed narration needs new audio and alignment',scenes:recordings};
writeFileSync(path.join(output,'voice-manifest.json'),JSON.stringify(manifest,null,2)+'\n');
writeFileSync(path.join(output,'voice-playback-plan.json'),JSON.stringify({lessonPath,timing:'provisional; resolve from selected recordings and alignment',playback},null,2)+'\n');
const report={sourcePath,sourceHash:createHash('sha256').update(readFileSync(sourcePath)).digest('hex'),
  wordsBefore:source.scenes.reduce((n,s)=>n+s.voiceover.text.split(/\s+/).length,0),wordsAfter:lesson.scenes.reduce((n,s)=>n+s.voiceover.text.split(/\s+/).length,0),
  estimatedSeconds:lesson.scenes.reduce((n,s)=>n+s.durationInFrames,0)/lesson.fps,allTimingsProvisional:true,
  originalAudioPreserved:true,oldAuditionsStatus:'Pronunciation accepted by user for v2 wording. These files do not match v3 text.',
  scenes:lesson.scenes.map(s=>({id:s.id,narrationChanged:s.voiceover.text!==source.scenes.find(o=>o.id===s.id).voiceover.text,
    delivery:revisions[s.id].delivery,visual:revisions[s.id].visual}))};
writeFileSync(path.join(output,'revision.json'),JSON.stringify(report,null,2)+'\n');
const script=lesson.scenes.map((s,i)=>`## ${i+1}. ${s.heading??s.id}\n\n${s.voiceover.text}\n\nDelivery: ${revisions[s.id].delivery}\n\nVisual: ${revisions[s.id].visual}${splitRules[s.id]?`\n\nSilent thinking gap: ${splitRules[s.id].gapSeconds} seconds before the answer.`:''}`).join('\n\n');
writeFileSync(path.join(output,'SCRIPT.md'),`# Molar mass: engagement revision\n\n${report.wordsAfter} spoken words. All timing estimates are provisional. Simon, Australian English, v4. No old recording is attached to revised text.\n\n${script}\n`);
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
writeFileSync(path.join(output,'index.html'),`<!doctype html><html lang="en-AU"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Molar mass: refreshed script</title><style>body{font:19px/1.6 system-ui;background:#faf7ee;color:#183b37;max-width:980px;margin:35px auto;padding:0 20px}article{padding:24px;background:white;border-radius:12px;margin:22px 0}small{display:block;color:#536762}summary{cursor:pointer}audio{width:100%}a{color:#0d6b52}.note{background:#e8f5f0;padding:18px;border-radius:10px}</style><h1>Molar mass: refreshed script</h1><p class="note">${report.wordsBefore} to ${report.wordsAfter} spoken words. A stronger opening, questions with feedback, clearer decisions and more natural delivery. This is a script and cue plan, not a finished video. All revised narration needs new recordings.</p><p><a href="SCRIPT.md">Complete script and delivery notes</a> · <a href="voice-manifest.json">New recording manifest</a> · <a href="voice-playback-plan.json">Thinking holds</a></p><div id="voice-preview"></div>${lesson.scenes.map((s,i)=>`<article><h2>${i+1}. ${escape(s.heading??s.id)}</h2><p>${escape(s.voiceover.text)}</p><small>${escape(revisions[s.id].delivery)}</small><details><summary>Previous wording and visual plan</summary><p><strong>Previous:</strong> ${escape(source.scenes.find(o=>o.id===s.id).voiceover.text)}</p><p><strong>Visual plan:</strong> ${escape(revisions[s.id].visual)}</p>${splitRules[s.id]?`<p>Insert ${splitRules[s.id].gapSeconds} seconds of actual silence before the answer.</p>`:''}</details></article>`).join('')}</html>`);
console.log(JSON.stringify({wordsBefore:report.wordsBefore,wordsAfter:report.wordsAfter,estimatedSeconds:report.estimatedSeconds,segments:recordings.length,output},null,2));
