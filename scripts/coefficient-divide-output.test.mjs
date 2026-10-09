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
const directory = mkdtempSync(path.join(root, 'out/checks/coefficient-divide-markup-'));
const built = await build({stdin: {contents: `import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';import {CoefficientDivideDiagram} from './src/slides/diagrams/CoefficientDivideDiagram';
export function render(props,frame){globalThis.__coefficientFrame=frame;return renderToStaticMarkup(React.createElement(CoefficientDivideDiagram,props));}`,
  resolveDir: root, loader: 'tsx'}, bundle: true, write: false, format: 'esm', platform: 'node', jsx: 'automatic', packages: 'external', plugins: [{
  name: 'frame-controlled-remotion', setup(builder) {
    builder.onResolve({filter: /^remotion$/}, () => ({path: 'fixture', namespace: 'fixture'}));
    builder.onLoad({filter: /.*/, namespace: 'fixture'}, () => ({contents: `export * from ${JSON.stringify(actualRemotion)};
export const useCurrentFrame=()=>globalThis.__coefficientFrame;export const useVideoConfig=()=>({fps:30,width:1920,height:1080,durationInFrames:1500});export const staticFile=p=>p;`, loader: 'js', resolveDir: root}));
  }}]});
const modulePath = path.join(directory, 'renderer.mjs');
writeFileSync(modulePath, built.outputFiles[0].text);
const {render} = await import(pathToFileURL(modulePath));

function element(html, marker) {
  const tag = html.match(new RegExp(`<[^>]*${marker}[^>]*>`))?.[0];
  assert.ok(tag, `missing ${marker}`);
  return Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(match => [match[1], match[2]]));
}
const height = (html, label) => Number(element(html, `data-capacity-column="${label}"`).height);
const props = {delay: 30, steps: [20, 200, 440]};

test('geometry halves exact sodium capacity while displayed values round and chlorine stays unchanged', () => {
  const raw = render(props, 220), divided = render(props, 400);
  assert.ok(Math.abs(height(raw, 'Na') - 200) < 1e-8);
  assert.ok(Math.abs(height(divided, 'Na') - 100) < 1e-8);
  assert.ok(Math.abs(height(raw, 'Cl₂') - height(divided, 'Cl₂')) < 1e-8);
  assert.match(divided, /data-capacity-value="Na"[^>]*>0\.218<\/text>/);
  assert.match(divided, /data-raw-amount="Na"[^>]*>0\.435<\/text>/);
  assert.equal(Number(element(divided, 'data-raw-reference="Na"').height), 200);
});

test('limiting selection uses exact ratios when rounded labels would be tied', () => {
  const html = render({...props, equation: 'A + B', reactants: [
    {label: 'A', moles: 0.4004, coef: 2, atoms: ['Na']},
    {label: 'B', moles: 0.2001, coef: 1, atoms: ['Cl']},
  ]}, 600);
  assert.match(html, />B is limiting: smallest moles ÷ coefficient<\/text>/);
  assert.ok(height(html, 'A') > height(html, 'B'));
});

test('drawn cue is opt-in and follows coefficient reveal, transformation, result, then comparison', () => {
  assert.doesNotMatch(render(props, 400), /data-capacity-attention|Half the capacity/);
  assert.equal(render({...props, attention: undefined}, 400), render(props, 400));
  const marked = {...props, attention: 'handdrawn'};
  assert.equal(Number(element(render(marked, 229), 'data-capacity-attention="Na"').opacity), 0);
  assert.equal(Number(element(render(marked, 248), 'data-capacity-link')['stroke-dashoffset']), 1);
  assert.equal(Number(element(render(marked, 263), 'data-capacity-link')['stroke-dashoffset']), 0.5);
  assert.equal(Number(element(render(marked, 278), 'data-capacity-link')['stroke-dashoffset']), 0);
  assert.equal(Number(element(render(marked, 278), 'data-capacity-note').opacity), 0);
  assert.equal(Number(element(render(marked, 290), 'data-capacity-note').opacity), 1);
  assert.equal(Number(element(render(marked, 482), 'data-capacity-attention="Na"').opacity), 0);
  assert.doesNotMatch(render(marked, 400), /data-capacity-attention="Cl₂"/);
  assert.equal(element(render(marked, 400), 'data-raw-amount="Na"')['text-decoration'], undefined);
});

test('labels and completed drawn paths stay fixed during the reading hold', () => {
  const marked = {...props, attention: 'handdrawn'};
  const first = render(marked, 330), last = render(marked, 420);
  for (const marker of ['data-raw-amount="Na"', 'data-capacity-value="Na"', 'data-capacity-note', 'data-capacity-link']) {
    assert.deepEqual(element(first, marker), element(last, marker), marker);
  }
});
