import fs from 'node:fs';
import {sha256, resolvePlayback, writePlayback} from './lib/playback-assembly.mjs';
import {verifyAssembly} from './lib/verify-assembly.mjs';
import {lessonTimeline} from '../src/lesson/timeline.mjs';
import {TRANSITION_FRAMES} from './_yt-constants.mjs';
const dir='out/prototypes/enzyme-story-feedback-2026-10-09';
const read=f=>JSON.parse(fs.readFileSync(f,'utf8'));
const write=(f,v)=>{const t=JSON.stringify(v,null,2)+'\n';if(fs.existsSync(f)&&fs.readFileSync(f,'utf8')!==t)throw Error('Preserve revision: '+f);if(!fs.existsSync(f))fs.writeFileSync(f,t,{flag:'wx'});};
const scripts={
 hook:"A glass of milk contains a sugar called lactose. To break it down, your small intestine uses an enzyme called lactase. Lactose binds to a small region of the enzyme, then the reaction produces two simpler sugars. The enzyme is ready to work again. How does a protein make such a selective partnership? Two models help explain it.",
 title:"Lock and key, and induced fit. Two models of how enzymes work.",
 'concept-lock-key':"The active site is the region where a substrate binds and the reaction happens. A substrate is the molecule an enzyme acts on. In the lock-and-key model, the pocket is already complementary to the substrate. The substrate settles into it, forming an enzyme-substrate complex. Think of a key sliding into a lock: the lock keeps its shape. A badly matched molecule cannot make the same productive contacts. That explains selectivity. But matching an outline is only the start. The chemical interactions between enzyme and substrate matter too.",
 'concept-induced-fit':"The lock analogy is useful, but proteins have a trick that a metal lock doesn't: they move. As a suitable substrate binds, the active site can change shape around it. That's induced fit. A glove closing around a hand is a closer analogy. The dashed outline is the original shape; the solid outline is the changed site. This movement can line up the substrate with the enzyme's catalytic groups. Those groups help stabilise the transition state, the brief, unstable arrangement on the way from reactants to products. That lowers the activation energy, helping the reaction happen more readily. The enzyme can then be used again.",
 'concept-compare':"Both models put enzyme and substrate together at an active site, forming a temporary complex. The difference is what happens to the site. Lock and key holds it fixed. Induced fit includes a shape change during binding. So a complex alone doesn't identify the model; the shape change does. Our cut-out shapes make that relationship easy to see. Real proteins are three-dimensional, with many chemical interactions. Some enzymes also accept several related substrates. These models simplify the process, which is what makes them useful.",
 misconception:"There is a catch. If the active site can change shape, could any molecule make it work? The substrate still needs suitable chemical interactions with the active site. Flexibility helps a suitable substrate bind productively; it doesn't give the enzyme unlimited choice. Even binding alone isn't enough. An inhibitor can bind without being converted into the usual product. So 'it binds' and 'it gets catalysed' are two different claims.",
 'quick-check-prompt':"Suppose a diagram shows a substrate arriving, and the active site changing shape as it binds. Which model is that, and what difference would you mention in an answer? There is room to pause if you want to work it out.",
 'quick-check-answer':"That shape change points to induced fit. In lock and key, the active site is represented as fixed. Both models can show an enzyme-substrate complex, so the complex alone doesn't tell you which model you're seeing.",
 summary:"The useful contrast is a fixed active site and a flexible one. Both models connect the enzyme, its substrate and the temporary complex. Induced fit adds a shape change during binding, which can help position the groups involved in catalysis. Back in our milk example, lactase helps a particular reaction happen: breaking down lactose. A useful model explains that relationship while leaving out some of the molecular detail."
};
const cues={
 hook:{at:{enzyme:'your small intestine uses an enzyme',substrate:'Lactose binds',bind:'to a small region',react:'then the reaction',release:'produces two simpler sugars',again:'ready to work again',labels:'your small intestine'},bullets:['A glass of milk','an enzyme called lactase','produces two simpler sugars'],secondary:'How does a protein'},
 'concept-lock-key':{at:{enzyme:'The active site',substrate:'In the lock-and-key model',fit:'The substrate settles',complex:'forming an enzyme-substrate complex',wrong:'A badly matched molecule',rule:'That explains selectivity'},bullets:['The active site','the pocket is already complementary','The chemical interactions'],callout:'The chemical interactions'},
 'concept-induced-fit':{at:{enzyme:'The lock analogy',substrate:'As a suitable substrate binds',mould:'the active site can change shape',grip:"That's induced fit",complex:'The dashed outline',rule:'That lowers the activation energy'},bullets:['the active site can change shape','This movement can line up','Those groups help stabilise'],secondary:'The dashed outline',callout:'That lowers the activation energy'},
 'concept-compare':{at:{l_enzyme:'Both models',i_enzyme:'Both models',l_substrate:'enzyme and substrate together',i_substrate:'enzyme and substrate together',l_fit:'forming a temporary complex',l_complex:'forming a temporary complex',i_approach:'forming a temporary complex',i_mould:'Induced fit includes',i_grip:'a shape change during binding',i_complex:'forming a temporary complex',same:'forming a temporary complex',different:'The difference',rule:'the shape change does'},bullets:['Both models','The difference','Real proteins'],secondary:'Real proteins',callout:'the shape change does'},
 misconception:{secondary:'The substrate still needs',callout:'An inhibitor can bind'}
};
const mode=process.argv[2]??'prepare';
if(mode==='prepare'){
 fs.mkdirSync(dir,{recursive:true});
 const l=read('out/prototypes/continuity-batch-01/enzyme-models/narrated.lesson-v2.json');
 l.title='Enzyme models';
 l.subtitle='Lock and key, induced fit and selective catalysis';
 l.lessonIntent='Explain enzyme models through a familiar reaction, active-site interactions and purposeful animations.';
 const get=id=>l.scenes.find(s=>s.id===id);
 Object.assign(get('hook'),{type:'concept',heading:'A specific job for a protein',body:'Lactase helps break down lactose in milk.',bullets:[{text:'Milk contains lactose.'},{text:'Lactase is the enzyme; lactose is its substrate.'},{text:'Products: glucose and galactose.'}],diagram:{type:'diorama',kind:'bio11m1bEnzyme',delay:30,props:{mode:'cycle',at:{wrong:999999}}},secondary:'Process sketch, not a molecular structure.',callout:undefined});
 Object.assign(get('concept-lock-key'),{bullets:[{text:'Active site: binding and reaction.'},{text:'A complementary, fixed pocket.'},{text:'Shape and chemical interactions matter.'}],secondary:'Schematic shapes, not a scale drawing.',callout:'Selective binding depends on chemistry too.'});
 Object.assign(get('concept-induced-fit'),{heading:'Binding can change the protein',bullets:[{text:'Binding changes the active-site shape.'},{text:'Substrate and catalytic groups are positioned.'},{text:'The transition state is stabilised.'}],secondary:'Dashed: original shape. Solid: changed site.',callout:'A lower activation-energy barrier.'});
 get('concept-induced-fit').diagram.props.bindingLabel='active site changes shape';
 Object.assign(get('concept-compare'),{heading:'The shape change is the clue',body:'Both models depict binding at an active site. Induced fit includes conformational change.',bullets:[{text:'Both form an enzyme-substrate complex.'},{text:'Fixed site or shape change during binding?'},{text:'Real specificity involves chemical interactions.'}],secondary:'Some enzymes accept several related substrates.',callout:'A complex alone does not identify the model.'});
 Object.assign(get('misconception'),{heading:'Flexible, still selective',body:'Any molecule can make a flexible active site work.',secondary:'Productive binding still needs suitable chemical interactions.',callout:'Binding alone does not guarantee catalysis.',mistakeTag:'A useful limit to the model'});
 Object.assign(get('quick-check'),{heading:'What does the shape change tell us?',question:'A substrate binds and the active site changes shape. Which model is shown, and how does it differ from lock and key?',pausePrompt:'Pause to think it through, if you want more time.',answerSteps:['Induced fit: the active site changes shape during binding.','Lock and key represents the active site as fixed.','Both models can form an enzyme-substrate complex.']});
 Object.assign(get('summary'),{heading:'A fixed site. A flexible site.',points:['Both models show an enzyme-substrate complex.','Lock and key represents a fixed active site.','Induced fit includes shape change during binding.','Chemistry contributes to selectivity and catalysis.'],finalPrompt:'Shape change during binding points to induced fit.'});
 const manifest={compositionId:'Biology-enzyme-story-feedback-2026-10-09',lessonPath:`${dir}/lesson.json`,fps:30,requiredAccent:'Australian',voiceSelection:read('out/prototypes/continuity-batch-01/enzyme-models/voice-manifest.json').voiceSelection,scenes:[]};
 const plan={lessonPath:manifest.lessonPath,playback:[]};
 for(const s of l.scenes){
  const keys=s.id==='quick-check'?['quick-check-prompt','quick-check-answer']:[s.id];
  s.voiceover={text:keys.map(k=>scripts[k]).join(' ')};s.caption=s.heading??'Lock and key, and induced fit';s.captions=undefined;s.responseHold=undefined;s.revealDelays={};s.durationInFrames=180;
  if(s.diagram){s.conceptVisualLayout='diagramFocus';s.revealDelays.diagram=30;}
  const items=[];
  for(const [index,key] of keys.entries()){
   if(index)items.push({kind:'silence',seconds:2,frames:60});
   const text=scripts[key],hash=sha256(text).slice(0,12),audioFile=`public/audio/Biology-enzyme-story-feedback-2026-10-09/${key}.${hash}.mp3`;
   manifest.scenes.push({id:key,parentSceneId:s.id,text,hash,audioFile});items.push({kind:'audio',segmentId:key,audioFile});
  }
  plan.playback.push({sceneId:s.id,items});
 }
 if(JSON.stringify(l).includes(String.fromCodePoint(0x2014)))throw Error('Em dash in selected copy');
 write(`${dir}/lesson.json`,l);write(`${dir}/voice-manifest.json`,manifest);write(`${dir}/voice-playback-plan.json`,plan);write(`${dir}/cue-plan.json`,cues);write(`${dir}/request-options.json`,{stability:0.5,similarity:0.75});
 fs.writeFileSync(`${dir}/recording-script.md`,Object.entries(scripts).map(([id,text])=>`## ${id}\n\n${text}`).join('\n\n')+'\n');
 console.log('Prepared nine fresh segments. Words: '+Object.values(scripts).join(' ').split(/\s+/).length);
}else if(mode==='finalize'){
 const r=resolvePlayback({lesson:read(`${dir}/lesson.json`),manifest:read(`${dir}/voice-manifest.json`),plan:read(`${dir}/voice-playback-plan.json`)});writePlayback(r);
 const norm=t=>t.toLowerCase().replace(/[^\p{L}\p{N}]/gu,'');
 const cue=(s,phrase)=>{const w=phrase.split(/\s+/).map(norm);const i=s.captions.findIndex((_,i)=>w.every((v,j)=>norm(s.captions[i+j]?.text??'')===v));if(i<0)throw Error('Missing cue '+s.id+': '+phrase);return Math.ceil(s.captions[i].startMs*30/1000);};
 for(const s of r.lesson.scenes){const p=cues[s.id];if(p){if(p.at){s.diagram.delay=30;s.diagram.props.at={...s.diagram.props.at,...Object.fromEntries(Object.entries(p.at).map(([k,v])=>[k,Math.max(0,cue(s,v)-30)]))};}if(p.bullets)s.bullets.forEach((b,i)=>b.at=cue(s,p.bullets[i])/30);for(const k of ['secondary','callout'])if(p[k])s.revealDelays[k]=cue(s,p[k]);}
  if(s.id==='quick-check')s.revealDelays.stepAts=['That shape change','In lock and key','Both models'].map(phrase=>cue(s,phrase));
  const lastAnswer=s.type==='quickCheck'?Math.max(...s.revealDelays.stepAts)+16:0;
  s.durationInFrames=Math.max(s.voiceover.endFrame+15+TRANSITION_FRAMES,lastAnswer+90+TRANSITION_FRAMES);
  const e=verifyAssembly(s,30);if(e.length)throw Error(s.id+': '+e.join('; '));
 }
 write(`${dir}/narrated.lesson.json`,r.lesson);write(`${dir}/render-config.json`,{lessonPath:`${dir}/narrated.lesson.json`,entryPoint:'src/dev/release-entry.tsx',compositionId:'Lesson-release',codec:'h264',scale:1,crf:16,normalizeAudio:true,concurrency:2,audioMode:'alignedPcm',inputs:['scripts/prepare-enzyme-feedback-revision.mjs',`${dir}/lesson.json`,`${dir}/voice-manifest.json`,`${dir}/voice-playback-plan.json`,`${dir}/cue-plan.json`,`${dir}/request-options.json`]});
 console.log(JSON.stringify({seconds:lessonTimeline(r.lesson).durationMs/1000}));
}else throw Error('Use prepare or finalize');
