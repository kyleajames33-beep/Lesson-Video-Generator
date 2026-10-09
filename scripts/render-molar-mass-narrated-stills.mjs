import {mkdirSync, readFileSync, copyFileSync} from 'node:fs';
import path from 'node:path';
import {bundle} from '@remotion/bundler';
import {selectComposition, renderStill} from '@remotion/renderer';
import {captureRelease} from './lib/release-snapshot.mjs';
import {lessonTimeline} from '../src/lesson/timeline.mjs';

const output = path.resolve('out/prototypes/molar-mass-continuity-handoff/review-stills');
const configPath = 'out/prototypes/molar-mass-continuity-handoff/narrated-render-config.json';
const config = JSON.parse(readFileSync(configPath, 'utf8'));
const lesson = JSON.parse(readFileSync(config.lessonPath, 'utf8'));
const dependencies = captureRelease(process.cwd(), {lessonPath:config.lessonPath,renderConfig:configPath,inputs:config.inputs});
const publicDir = path.join(output,'public');
mkdirSync(publicDir,{recursive:true});
for (const file of dependencies.files.filter(file=>file.path.startsWith('public/')&&file.sha256)) {
  const destination = path.join(publicDir,file.path.slice(7));
  mkdirSync(path.dirname(destination),{recursive:true});copyFileSync(file.path,destination);
}
const serveUrl = await bundle({entryPoint:path.resolve(config.entryPoint),publicDir,outDir:path.join(output,'bundle')});
const inputProps = {lesson};
const composition = await selectComposition({serveUrl,id:config.compositionId,inputProps});
const timeline = lessonTimeline(lesson);
const selected = [
  ['hook','thinking',scene=>scene.responseHold.startFrame+60],
  ['hook','answer',scene=>scene.responseHold.endFrame+30],
  ['concept','oxygen',scene=>scene.diagram.props.elements.find(e=>e.sym==='O').beat+60],
  ['definition','fixed-molar-mass',scene=>scene.revealDelays.fixed+45],
  ['lab-footage','conversion',scene=>scene.revealDelays.convert+45],
  ['formula','causal',scene=>scene.revealDelays.twoMoles+45],
  ['formula','multiply',scene=>scene.revealDelays.mass+45],
  ['formula','units',scene=>scene.revealDelays.cancel+25],
  ['formula','divide',scene=>scene.revealDelays.divide+45],
  ['mass-example','precision',scene=>scene.revealDelays.precision+45],
  ['worked-example','thinking',scene=>scene.responseHold.startFrame+60],
  ['worked-example','oxygen-count',scene=>scene.responseHold.endFrame+45],
  ['worked-example','contributions',scene=>scene.revealDelays.contributions+45],
  ['worked-example','total',scene=>scene.revealDelays.rounded+45],
  ['misconception','checks',scene=>scene.durationInFrames-90],
  ['quick-check','thinking',scene=>scene.responseHold.startFrame+60],
  ['quick-check','answer',scene=>scene.revealDelays.rounded+45],
  ['summary','method',scene=>scene.durationInFrames-90]
];
for (const [id,beat,localFrame] of selected) {
  const entry = timeline.scenes.find(entry=>entry.scene.id===id);
  const frame = entry.startFrame+localFrame(entry.scene);
  await renderStill({serveUrl,composition,inputProps,frame,scale:0.5,imageFormat:'png',
    output:path.join(output,`${id}-${beat}.png`),timeoutInMilliseconds:60000});
  console.log(`${id}: ${beat} (${frame}).`);
}
console.log('Narrated visual review frames ready.');
