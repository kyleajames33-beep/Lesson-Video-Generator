// Additive visual pilot. Recorded words, captions, timings and protected holds stay exact.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const base='docs/production/plant-design-reset-2026-10-11';
const source=`${base}/teaching-reset/runner/measured/lesson.json`;
const parent=JSON.parse(fs.readFileSync(source,'utf8'));
const lesson=structuredClone(parent);
delete lesson.teachingRenderer;
lesson.visualRecovery={parent:source,purpose:'Restore purposeful motion and existing editorial craft. Visual pilot with unchanged recorded narration; not a release.',knownNarrationIssue:'The recorded feedback still says supplied early stage. A small future recording correction remains separate from this visual comparison.'};
const headings={
 'runner-question':'How can a stem become a separate plant?',
 'runner-stem':'The connection is a stem.',
 'runner-node':'One node. A new set of roots and leaves.',
 'runner-resources':'What makes independence possible?',
 'runner-independent':'What happens when the connection is cut?',
 'runner-asexual':'One parent, a new plant.',
 'runner-attempt':'An earlier stage: ready to separate?',
 'runner-feedback':'The leaves are only part of the answer.',
 'runner-memory':'The order matters.',
 'key-notes':'Key notes: what to write in your book'
};
for(const scene of lesson.scenes){
 scene.heading=headings[scene.id];scene.body='';scene.caption='';
 scene.conceptVisualLayout='diagramBoard';
 scene.diagram={type:'diorama',kind:'bioM5RunnerMotion',props:{mode:scene.id,beats:scene.teachingReset.previewBeats,art:'assets/biology/strawberry-runner-botanical-v1.png',earlyArt:'assets/biology/strawberry-runner-early-bud-v1.png',hold:scene.responseHold,notes:lesson.teachingNotes}};
}
const output=`${base}/motion-pilot`;
fs.mkdirSync(output,{recursive:true});
fs.writeFileSync(`${output}/lesson.json`,JSON.stringify(lesson,null,2)+'\n');
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const changed=parent.scenes.filter((s,i)=>JSON.stringify([s.voiceover,s.captions,s.durationInFrames,s.responseHold])!==JSON.stringify([lesson.scenes[i].voiceover,lesson.scenes[i].captions,lesson.scenes[i].durationInFrames,lesson.scenes[i].responseHold]));
if(changed.length)throw Error('Visual pilot changed recorded inputs');
fs.writeFileSync(`${output}/pilot-record.json`,JSON.stringify({status:'working-visual-pilot',parent:source,parentSha256:sha(source),lesson:`${output}/lesson.json`,lessonSha256:sha(`${output}/lesson.json`),recordedInputs:'Identical voiceover metadata, captions, durations and response holds for all ten scenes.',renderer:'LessonVideo -> ConceptSlide diagramBoard -> DiagramRenderer -> bioM5RunnerMotion',reused:['SlideFrame','SlideChrome','FadeUp','ScribbleAnnotation','ScribbleCircle','ScribbleUnderline','QuickCheckSlide.PauseCountdown','existing transitions','strawberry-runner-botanical-v1.png'],limitations:['Camera, drawn annotation and illustrated development using two related botanical stages; not a filmed time-lapse.','The early-stage practice uses a separately generated matching rootless-bud plate, visually inspected against the original.','Existing recorded supplied early stage wording remains audible until separately re-recorded.','Complete owner playback and visual approval pending.']},null,2)+'\n');
console.log(`${output}/lesson.json`);
