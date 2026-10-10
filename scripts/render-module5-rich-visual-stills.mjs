import fs from 'node:fs';
import path from 'node:path';
import {bundle} from '@remotion/bundler';
import {openBrowser, renderStill, selectComposition} from '@remotion/renderer';
import {lessonTimeline} from '../src/lesson/timeline.mjs';
import {sha256} from './lib/playback-assembly.mjs';

const output = process.argv[2] ?? 'out/prototypes/module5-rich-visuals-2026-10-10/native-01';
const selectedSceneIds = process.argv[3]?.split(',');
if(!path.resolve(output).startsWith(path.resolve('out/prototypes') + path.sep)) throw Error('Evidence stays in the prototype workspace.');
if(fs.existsSync(`${output}/frames.json`)) throw Error('Preserve existing evidence. Choose a new output directory.');
fs.mkdirSync(output, {recursive:true});
const publicDir = path.resolve(output, 'public');
fs.cpSync('public/fonts', path.join(publicDir, 'fonts'), {recursive:true});
const serveUrl = await bundle({entryPoint:path.resolve('src/dev/release-entry.tsx'),publicDir,outDir:path.resolve(output,'bundle')});
const browser = await openBrowser('chrome');
const recordPath = 'docs/production/drafts/module5-rich-visuals-2026-10-10/integration-record.json';
const record = JSON.parse(fs.readFileSync(recordPath, 'utf8'));
if(selectedSceneIds?.some(id=>!record.lessons.some(item=>item.changedSceneIds.includes(id)))) throw Error('Unknown selected scene.');
const frames = [];
try {
 for(const selection of record.lessons) {
  const lesson = JSON.parse(fs.readFileSync(selection.source.path, 'utf8'));
  const inputProps = {lesson};
  const composition = await selectComposition({serveUrl,id:'Lesson-release',inputProps,browserInstance:browser});
  const timeline = lessonTimeline(lesson);
  for(const id of selection.changedSceneIds) {
   if(selectedSceneIds && !selectedSceneIds.includes(id)) continue;
   const entry = timeline.scenes.find(item => item.scene.id === id);
   const cues = selection.cueRecords.filter(cue => cue.sceneId === id);
   const locals = [...new Set([90, ...cues.map(cue => Math.min(entry.scene.durationInFrames-60, cue.localFrame+24)), entry.scene.durationInFrames-60])].sort((a,b)=>a-b);
   for(const localFrame of locals) {
    const file = `${output}/${selection.subject}-${id}-${localFrame}.png`;
    await renderStill({serveUrl,composition,inputProps,frame:entry.startFrame+localFrame,output:file,imageFormat:'png',browserInstance:browser});
    frames.push({subject:selection.subject,sceneId:id,localFrame,globalFrame:entry.startFrame+localFrame,path:file,sha256:sha256(fs.readFileSync(file)),sourcePath:selection.source.path,sourceSha256:sha256(fs.readFileSync(selection.source.path))});
   }
  }
 }
} finally {await browser.close({silent:true});}
const inputPaths = [recordPath,'src/slides/ConceptSlide.tsx','src/lesson/types.ts', ...record.lessons.flatMap(item=>[item.source.path,item.component]), 'src/slides/diagrams/dioramaKinds/lane-chem-y12-m5.ts','src/slides/diagrams/dioramaKinds/lane-bio-y12-m5.ts'];
fs.writeFileSync(`${output}/frames.json`,JSON.stringify({schemaVersion:1,scope:'Native full lesson-renderer stills with estimated local narration cues. No continuous motion, listening, device or release approval.', selectedSceneIds:selectedSceneIds ?? record.lessons.flatMap(item=>item.changedSceneIds), inputs:inputPaths.map(file=>({path:file,sha256:sha256(fs.readFileSync(file))})),frames},null,2)+'\n',{flag:'wx'});
console.log(`${frames.length} native stills saved at ${output}.`);
