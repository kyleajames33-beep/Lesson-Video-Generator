import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {mkdirSync, mkdtempSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const require = createRequire(import.meta.url);
const actualRemotion = path.join(path.dirname(require.resolve('remotion/package.json')), 'dist/esm/index.mjs');
mkdirSync(path.join(root, 'out/checks'), {recursive: true});
const directory = mkdtempSync(path.join(root, 'out/checks/quick-check-markup-'));
const built = await build({stdin: {contents: `import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';import {QuickCheckSlide} from './src/slides/QuickCheckSlide';
export function render(scene,frame){globalThis.__quickCheckFrame=frame;return renderToStaticMarkup(React.createElement(QuickCheckSlide,{scene,lesson:{title:'Recall',subject:'Biology',yearLevel:'Year 11',module:'Module 1',lesson:'Lesson 1',syllabusNeutral:true},sceneIndex:1,totalScenes:1}));}`,
  resolveDir: root, loader: 'tsx'}, bundle: true, write: false, format: 'esm', platform: 'node', jsx: 'automatic', packages: 'external', plugins: [{
  name: 'frame-controlled-remotion', setup(builder) {
    builder.onResolve({filter: /^remotion$/}, () => ({path: 'fixture', namespace: 'fixture'}));
    builder.onLoad({filter: /.*/, namespace: 'fixture'}, () => ({contents: `export * from ${JSON.stringify(actualRemotion)};
export const useCurrentFrame=()=>globalThis.__quickCheckFrame;export const useVideoConfig=()=>({fps:30,width:1920,height:1080,durationInFrames:1200});export const staticFile=p=>p;`, loader: 'js', resolveDir: root}));
  }}]});
const modulePath = path.join(directory, 'renderer.mjs');
writeFileSync(modulePath, built.outputFiles[0].text);
const {render} = await import(pathToFileURL(modulePath));

// Check actual component output, including zero opacity on ancestor wrappers.
function visibleText(html) {
  const stack = [], text = [];
  for (const token of html.match(/<[^>]*>|[^<]+/g) ?? []) {
    if (token.startsWith('</')) {stack.pop(); continue;}
    if (token.startsWith('<')) {
      if (/^<(?:img|path|line|rect|circle|br|meta|link)\b/.test(token)) continue;
      const opacity = token.match(/(?:^|[;" ])opacity:([\d.]+)/);
      stack.push((stack.at(-1) ?? true) && (!opacity || Number(opacity[1]) > 0.01));
    } else if (stack.at(-1) ?? true) text.push(token);
  }
  return text.join(' ').replace(/\s+/g, ' ');
}
const base = {id: 'fixture', type: 'quickCheck', durationInFrames: 1200, question: 'Which model explains the change?',
  answerSteps: ['First explanation', 'Second explanation', 'Final conclusion'], responseHold: {startFrame: 120, endFrame: 300},
  revealDelays: {answerVisibleStart: 300}};

test('aligned recall rows remain hidden through the attempt and until each recorded row cue', () => {
  const scene = {...base, revealDelays: {...base.revealDelays, stepAts: [360, 480, 660]}};
  for (const frame of [0, 120, 299, 300, 359]) assert.doesNotMatch(visibleText(render(scene, frame)), /First explanation|Second explanation|Final conclusion/);
  assert.match(visibleText(render(scene, 376)), /First explanation/);
  assert.doesNotMatch(visibleText(render(scene, 479)), /Second explanation|Final conclusion/);
  assert.match(visibleText(render(scene, 496)), /Second explanation/);
  assert.doesNotMatch(visibleText(render(scene, 659)), /Final conclusion/);
  assert.match(visibleText(render(scene, 676)), /Final conclusion/);
});

test('early overrides cannot reveal answers during the measured response interval', () => {
  const scene = {...base, revealDelays: {...base.revealDelays, stepAts: [0, 50, 100]}};
  for (const frame of [0, 120, 200, 299, 300]) assert.doesNotMatch(visibleText(render(scene, frame)), /First explanation|Second explanation|Final conclusion/);
  assert.match(visibleText(render(scene, 348)), /First explanation/);
  assert.match(visibleText(render(scene, 348)), /Final conclusion/);
});

test('omitted row cues retain existing spacing and partial cues keep the row fallback', () => {
  assert.doesNotMatch(visibleText(render(base, 315)), /First explanation/);
  assert.match(visibleText(render(base, 332)), /First explanation/);
  assert.doesNotMatch(visibleText(render(base, 383)), /Second explanation/);
  assert.match(visibleText(render(base, 400)), /Second explanation/);
  assert.doesNotMatch(visibleText(render(base, 451)), /Final conclusion/);
  assert.match(visibleText(render(base, 468)), /Final conclusion/);
  const partial = {...base, revealDelays: {...base.revealDelays, stepAts: [360]}};
  assert.match(visibleText(render(partial, 400)), /Second explanation/);
  assert.match(visibleText(render(partial, 468)), /Final conclusion/);
});
