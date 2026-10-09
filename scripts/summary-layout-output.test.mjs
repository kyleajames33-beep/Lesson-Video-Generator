import test, {after} from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {openBrowser} from '@remotion/renderer';
import {createRequire} from 'node:module';
import {mkdirSync, mkdtempSync, readFileSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const require = createRequire(import.meta.url);
const actualRemotion = path.join(path.dirname(require.resolve('remotion/package.json')), 'dist/esm/index.mjs');
mkdirSync(path.join(root, 'out/checks'), {recursive: true});
const directory = mkdtempSync(path.join(root, 'out/checks/summary-layout-'));
const built = await build({stdin: {contents: `import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';import {SummarySlide} from './src/slides/SummarySlide';
export function render(scene){globalThis.__summaryFrame=800;return renderToStaticMarkup(React.createElement(SummarySlide,{scene,lesson:{title:'Summary',subject:'Chemistry',yearLevel:'Year 11',module:'Module 2',lesson:'Lesson 13',syllabusNeutral:true},sceneIndex:8,totalScenes:8}));}`,
  resolveDir: root, loader: 'tsx'}, bundle: true, write: false, format: 'esm', platform: 'node', jsx: 'automatic', packages: 'external', plugins: [{
  name: 'frame-controlled-remotion', setup(builder) {
    builder.onResolve({filter: /^remotion$/}, () => ({path: 'fixture', namespace: 'fixture'}));
    builder.onLoad({filter: /.*/, namespace: 'fixture'}, () => ({contents: `export * from ${JSON.stringify(actualRemotion)};
export const useCurrentFrame=()=>globalThis.__summaryFrame;export const useVideoConfig=()=>({fps:30,width:1920,height:1080,durationInFrames:1200});export const staticFile=p=>p;`, loader: 'js', resolveDir: root}));
  }}]});
const modulePath = path.join(directory, 'renderer.mjs');
writeFileSync(modulePath, built.outputFiles[0].text);
const {render} = await import(pathToFileURL(modulePath));
const browser = await openBrowser('chrome', {logLevel: 'error'});
const measurements = [];
after(async () => {
  writeFileSync(path.join(directory, 'layout-measurements.json'), JSON.stringify(measurements, null, 2));
  await browser.close({silent: true});
});
const page = await browser.newPage({context: () => null, logLevel: 'error', indent: false, pageIndex: 0, onBrowserLog: null, onLog: () => {}});
await page.setViewport({width: 1920, height: 1080, deviceScaleFactor: 1});
const fonts = [['Inter Tight', 'inter-tight-latin-wght-normal.woff2'], ['JetBrains Mono', 'jetbrains-mono-latin-wght-normal.woff2']]
  .map(([family, file]) => `@font-face{font-family:"${family}";font-weight:100 900;src:url(data:font/woff2;base64,${readFileSync(path.join(root, 'public/fonts', file)).toString('base64')}) format('woff2')}`).join('');

async function measure(scene) {
  const html = `<html><head><style>${fonts}*{box-sizing:border-box}body{margin:0;width:1920px;height:1080px}</style></head><body>${render(scene)}</body></html>`;
  await page.goto({url: `data:text/html;base64,${Buffer.from(html).toString('base64')}`, timeout: 30000});
  const layout = await page.evaluate(async () => {
    await document.fonts.ready;
    const rect = element => {
      const {top, bottom, left, right, height} = element.getBoundingClientRect();
      return {top, bottom, left, right, height};
    };
    const heading = document.querySelector('[data-summary-heading]');
    return {heading: rect(heading), fontSize: getComputedStyle(heading).fontSize,
      rows: [...document.querySelectorAll('[data-summary-row]')].map(rect),
      card: document.querySelector('aside') ? rect(document.querySelector('aside')) : null};
  });
  measurements.push({id: scene.id, heading: scene.heading, points: scene.points.length, finalPrompt: scene.finalPrompt ?? null, ...layout});
  return layout;
}

const points = [
  'Convert to moles: Use mass divided by molar mass.',
  'Compare fairly: Divide each amount by its equation coefficient.',
  'Find the limit: The smaller reaction amount sets the product yield.',
  'Calculate the product: Use the limiting reactant and the equation ratio.',
  'Check what remains: Subtract the excess reactant consumed.',
];

for (const count of [3, 4, 5]) {
  for (const wrapped of [false, true]) {
    for (const card of [false, true]) {
      test(`${count} recap rows clear a ${wrapped ? 'wrapped' : 'short'} heading${card ? ' and decision card' : ''}`, async () => {
        const layout = await measure({id: 'fixture', type: 'summary', durationInFrames: 1200,
          heading: wrapped ? 'Use the equation to find the yield and what remains.' : 'The reaction checklist',
          points: points.slice(0, count), ...(card ? {finalPrompt: 'Compare moles divided by coefficients.'} : {})});
        assert.equal(layout.fontSize, '88px', 'preserve the established heading type size');
        assert.ok(wrapped ? layout.heading.height > 100 : layout.heading.height < 100, 'fixture exercises the intended heading wrap');
        assert.equal(layout.rows.length, count);
        assert.ok(layout.rows[0].top >= layout.heading.bottom + 20,
          `heading ends at ${layout.heading.bottom}, first row starts at ${layout.rows[0].top}`);
        for (let index = 1; index < count; index++) assert.ok(layout.rows[index].top >= layout.rows[index - 1].bottom,
          `rows ${index} and ${index + 1} overlap`);
        assert.ok(layout.rows.at(-1).bottom <= 940, `last row intrudes into caption-safe area at ${layout.rows.at(-1).bottom}`);
        if (layout.card) assert.ok(layout.rows.every(row => row.right <= layout.card.left - 32), 'rows remain clear of the decision card');
      });
    }
  }
}

for (const scene of [
  {id: 'limiting', heading: 'Convert. Compare. Calculate.', points: [
    'Convert both reactant amounts to moles.',
    'Divide by coefficients; the smallest value is limiting.',
    'Use the limiting reagent to calculate theoretical yield.',
    'Excess left = initial amount − amount reacted.',
    'Keep extra digits. Round the final answer.',
  ], finalPrompt: 'The balanced equation is the recipe.'},
  {id: 'enzyme', heading: 'A fixed site. A flexible site.', points: [
    'Both models show an enzyme-substrate complex.',
    'Lock and key represents a fixed active site.',
    'Induced fit includes shape change during binding.',
    'Chemistry contributes to selectivity and catalysis.',
  ], finalPrompt: 'Shape change during binding points to induced fit.'},
]) {
  test(`${scene.id} recap content clears the heading, rule card and caption area`, async () => {
    const layout = await measure({...scene, type: 'summary', durationInFrames: 1200});
    assert.ok(layout.rows[0].top >= layout.heading.bottom + 20, 'first takeaway follows the complete heading');
    assert.ok(layout.rows.at(-1).bottom <= 940, 'final takeaway stays above captions');
    assert.ok(layout.rows.every(row => row.right <= layout.card.left - 32), 'takeaways stay left of the rule card');
    assert.ok(layout.card.bottom <= 940, 'decision rule stays above captions');
  });
}
