// Queued C1/C2/C3 review builder. Root source integration is pending; do not run yet.
import fs from 'node:fs';
import path from 'node:path';
import {build} from 'esbuild';
import {sha256} from './lib/playback-assembly.mjs';
import {lessonTimeline} from '../src/lesson/timeline.mjs';

const root = process.cwd();
const pageName = 'module5-reading-load-review-2026-10-11';
const output = path.resolve('out/prototypes', pageName);
if (fs.existsSync(path.join(output, 'index.html'))) throw Error('Preserve existing review. Choose a fresh output identity before rebuilding.');
const sourcePaths = ['c1', 'c2', 'c3'].map(key => `docs/production/module5-reading-load-fix-2026-10-11/${key}/lesson.json`);
const lessons = sourcePaths.map(file => {
  const raw = fs.readFileSync(file, 'utf8');
  if (raw.includes('\u2014')) throw Error(`Prohibited punctuation: ${file}`);
  const lesson = JSON.parse(raw);
  lessonTimeline(lesson);
  if (lesson.scenes.some(scene => scene.voiceover?.text && !scene.voiceover.audioFile)) throw Error(`Missing prerecorded narration: ${file}`);
  return lesson;
});
fs.mkdirSync(output, {recursive:true});
const assetPaths = new Set();
const findAssets = value => {
  if (typeof value === 'string') {
    const clean = value.replaceAll('\\', '/');
    if (clean.startsWith('public/')) assetPaths.add(clean);
    else if (/^(audio|assets|fonts)\//.test(clean)) assetPaths.add(`public/${clean}`);
  } else if (Array.isArray(value)) value.forEach(findAssets);
  else if (value && typeof value === 'object') Object.values(value).forEach(findAssets);
};
lessons.forEach(findAssets);
// Diagram artwork can be selected by runtime code rather than lesson strings.
for (const directory of ['fonts', 'assets']) {
  const walk = base => {
    for (const item of fs.readdirSync(base, {withFileTypes:true})) {
      const file = path.join(base, item.name);
      if (item.isDirectory()) walk(file);
      else assetPaths.add(path.relative(root, file).replaceAll('\\', '/'));
    }
  };
  if (fs.existsSync(`public/${directory}`)) walk(`public/${directory}`);
}
const assets = [...assetPaths].sort().map(file => {
  const from = path.resolve(file);
  if (!from.startsWith(path.resolve('public') + path.sep) || !fs.statSync(from).isFile()) throw Error(`Invalid media path: ${file}`);
  const target = path.join(output, file);
  fs.mkdirSync(path.dirname(target), {recursive:true});
  fs.copyFileSync(from, target);
  return {path:file, copiedPath:file, sha256:sha256(fs.readFileSync(from))};
});
const relativeImport = file => {
  let relative = path.relative(output, path.resolve(file)).replaceAll('\\', '/');
  return relative.startsWith('.') ? relative : `./${relative}`;
};
const write = (file, text) => fs.writeFileSync(path.join(output, file), text);
const imports = sourcePaths.map((file, i) => `import lesson${i} from ${JSON.stringify(relativeImport(file))};`).join('\n');
// Keep caption pagination identical to the established exact voiced review.
const captionSource = 'src/prototypes/Module5C3FeedbackReview.tsx';
const existing = fs.readFileSync(captionSource, 'utf8');
const captionStart = existing.indexOf('const VoicedLesson =');
const captionEnd = existing.indexOf('\nconst Review =', captionStart);
if (captionStart < 0 || captionEnd < 0) throw Error('Established caption wrapper changed; review extraction before building.');
const captionComponent = existing.slice(captionStart, captionEnd).replace('const VoicedLesson =', 'export const VoicedLesson =');
write('shared.tsx', `import React, {useMemo} from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {createTikTokStyleCaptions} from '@remotion/captions';
import {LessonVideo} from ${JSON.stringify(relativeImport('src/LessonVideo'))};
import type {LessonData} from ${JSON.stringify(relativeImport('src/lesson/types'))};
import {lessonTimeline} from ${JSON.stringify(relativeImport('src/lesson/timeline.mjs'))};
${imports}
export const lessons = {c1:lesson0, c2:lesson1, c3:lesson2} as Record<string, LessonData>;
export {lessonTimeline};
${captionComponent}
`);
write('review.tsx', `import React, {useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Player, type PlayerRef} from '@remotion/player';
import {lessons, lessonTimeline, VoicedLesson} from './shared';
const fixtures = (scene:any, fps:number) => {
  const values:Array<{label:string;frame:number}> = [{label:'Scene start',frame:0},{label:'After entrance',frame:120}];
  const scan = (value:any, route:string) => {
    if (!value || typeof value !== 'object') return;
    for (const [key,item] of Object.entries(value)) {
      const name = route ? route+'.'+key : key;
      if (key === 'stepAts' && Array.isArray(item)) item.forEach((at:any,i:number) => {
        if (Number.isFinite(at)) values.push({label:'Step '+(i+1),frame:Math.round(at)});
      });
      else if (key === 'at' && route.includes('diagram') && item && typeof item === 'object') {
        for (const [cue,at] of Object.entries(item)) if (Number.isFinite(at)) values.push({label:cue,frame:Math.round(at as number)});
      } else if (key !== 'captions' && key !== 'voiceover') scan(item,name);
    }
  };
  scan(scene,'');
  return values.filter(cue=>cue.frame>=0&&cue.frame<scene.durationInFrames);
};
const Review = () => {
  const [key,setKey] = useState('c1');
  const [sceneId,setSceneId] = useState(lessons.c1.scenes[0].id);
  const [captions,setCaptions] = useState(true);
  const [localFrame,setLocalFrame] = useState(0);
  const player = useRef<PlayerRef>(null);
  const lesson = lessons[key];
  const timeline = lessonTimeline(lesson);
  const entry = timeline.scenes.find((item:any)=>item.scene.id===sceneId) ?? timeline.scenes[0];
  const jump = (frame:number) => player.current?.seekTo(Math.max(0,Math.min(timeline.durationInFrames-1,Math.round(frame))));
  const seekLocal = (frame:number) => { const bounded=Math.max(0,Math.min(entry.scene.durationInFrames-1,Math.round(frame)));setLocalFrame(bounded);jump(entry.startFrame+bounded); };
  return <main><h1>Module 5 Chemistry: reading load review</h1><p>Exact prerecorded narration. Selected visual changes require caption fit and continuous playback review.</p>
  <div className="controls"><label>Lesson <select value={key} onChange={event=>{const next=event.target.value;setKey(next);setSceneId(lessons[next].scenes[0].id);setLocalFrame(0);}}>{Object.keys(lessons).map(id=><option key={id} value={id}>{id.toUpperCase()}: {lessons[id].title}</option>)}</select></label>
  <label>Scene <select value={entry.scene.id} onChange={event=>{setSceneId(event.target.value);setLocalFrame(0);jump(timeline.scenes.find((item:any)=>item.scene.id===event.target.value)!.startFrame);}}>{lesson.scenes.map(scene=><option key={scene.id} value={scene.id}>{scene.id}: {'heading' in scene ? scene.heading : scene.type}</option>)}</select></label>
  <label><input type="checkbox" checked={captions} onChange={event=>setCaptions(event.target.checked)}/>Show captions</label></div>
  <Player key={key} ref={player} component={VoicedLesson} inputProps={{lesson,captions}} durationInFrames={timeline.durationInFrames} initialFrame={entry.startFrame} fps={lesson.fps} compositionWidth={lesson.width} compositionHeight={lesson.height} controls showVolumeControls loop={false} style={{width:'100%'}}/>
  <div className="controls"><button onClick={()=>jump(0)}>Whole lesson start</button><label>Scene local frame <input type="number" min={0} max={entry.scene.durationInFrames-1} value={localFrame} onChange={event=>setLocalFrame(Number(event.target.value))}/></label><button onClick={()=>seekLocal(localFrame)}>Seek</button><button onClick={()=>seekLocal(localFrame-1)}>Previous frame</button><button onClick={()=>seekLocal(localFrame+1)}>Next frame</button></div>
  <div className="controls">{fixtures(entry.scene,lesson.fps).map((cue,i)=><button key={i} onClick={()=>seekLocal(cue.frame)}>{cue.label} ({cue.frame})</button>)}</div>
  <details><summary>Selected scene narration</summary><p>{entry.scene.voiceover?.text ?? 'Quiet notes hold.'}</p></details></main>;
};
createRoot(document.getElementById('root')!).render(<Review/>);
`);
write('native.tsx', `import React from 'react';
import {Composition, registerRoot} from 'remotion';
import {lessons, lessonTimeline, VoicedLesson} from './shared';
const Root = () => <>{Object.entries(lessons).map(([key,lesson])=><Composition key={key} id={'ReadingLoad-'+key.toUpperCase()} component={VoicedLesson} defaultProps={{lesson,captions:true}} durationInFrames={lessonTimeline(lesson).durationInFrames} fps={lesson.fps} width={lesson.width} height={lesson.height}/>)}</>;
registerRoot(Root);
`);
const result = await build({entryPoints:[path.join(output,'review.tsx')],outfile:path.join(output,'review.js'),bundle:true,format:'iife',platform:'browser',target:'chrome110',jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'},minify:true,metafile:true});
const cssPath = path.join(output,'review.css');
const css = fs.existsSync(cssPath) ? fs.readFileSync(cssPath,'utf8') : '';
const html = `<!doctype html><html lang="en-AU"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Module 5 reading load review</title><style>${css}body{margin:0;background:#f7f7f5;color:#1a1a1a;font:18px/1.5 system-ui}main{max-width:1440px;margin:auto;padding:24px}.controls{display:flex;flex-wrap:wrap;gap:12px;margin:20px 0;align-items:center}label{display:flex;gap:8px;align-items:center}button,select,input{font:inherit;padding:7px;border:1px solid #aaa;border-radius:6px}select{max-width:650px}input[type=number]{width:110px}details{border:1px solid #bbb;padding:16px}details p{white-space:pre-wrap}@media(max-width:600px){main{padding:12px}select{max-width:100%}label{flex-wrap:wrap}}</style><div id="root"></div><script>window.remotion_staticBase="/${pageName}/public";</script><script>${fs.readFileSync(path.join(output,'review.js'),'utf8').replaceAll('</script','<\\/script').replaceAll('\u2014','\\u2014')}</script></html>`;
fs.writeFileSync(path.join(output,'index.html'),html,{flag:'wx'});
const inputs = [...new Set(['scripts/build-module5-reading-load-review.mjs',captionSource,...sourcePaths,...Object.keys(result.metafile.inputs).filter(file=>!file.startsWith('node_modules/')&&!file.startsWith('(disabled):')).map(file=>file.replace(/ with \{ type: 'json' \}$/, ''))])].sort();
write('page-inputs.json',JSON.stringify({schemaVersion:1,scope:'Exact voiced Player. New visual review and release gates pending.',pageSha256:sha256(html),inputs:inputs.map(file=>({path:file,sha256:sha256(fs.readFileSync(file))})),assets},null,2)+'\n');
write('fixtures.json',JSON.stringify(Object.fromEntries(lessons.map((lesson,i)=>[['c1','c2','c3'][i],lessonTimeline(lesson)])),null,2)+'\n');
console.log(`http://127.0.0.1:8778/${pageName}/`);
console.log(`Native entry: ${path.relative(root,path.join(output,'native.tsx'))}`);
console.log(`Still example: npx remotion still ${path.relative(root,path.join(output,'native.tsx'))} ReadingLoad-C3 out/checks/reading-load-c3.png --frame=0 --public-dir=${path.relative(root,path.join(output,'public'))}`);
