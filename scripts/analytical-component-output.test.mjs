import test, {after} from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {componentBaselineSource} from './lib/component-baseline-fixtures.mjs';
import {readFile, mkdir, mkdtemp, writeFile, rm, readdir} from 'node:fs/promises';
import {fileURLToPath, pathToFileURL} from 'node:url';
import path from 'node:path';
import {validateAnalyticalDiagram} from '../src/slides/diagrams/analytical-inference-models.mjs';

// Real React markup and Remotion interpolation, with synthetic time hooks only.
// This is a source/component regression check, not a rendered-media approval.
const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const require = createRequire(import.meta.url);
const baseline = 'ca58c157f0349b29774f93a76cd041aefab3a2a2';
const localBaseline = 'efe86ab83a94fde6c0aaefc49355f6d43cdc7058';
const components = {
  chem12m6TitrationCurve: ['chem-y12-m6', 'TitrationCurve'],
  chem12m8TubeTests: ['chem-y12-m8', 'TubeTests'],
  chem12m8FlameTests: ['chem-y12-m8', 'FlameTests'],
};
const changedFiles = Object.values(components).map(([lane, name]) => `src/slides/diagrams/kinds/${lane}/${name}Diagram.tsx`);
const git = componentBaselineSource;
const actualRemotion = path.join(path.dirname(require.resolve('remotion/package.json')), 'dist/esm/index.mjs');
const stub = `export {interpolate,spring,Easing,random} from ${JSON.stringify(actualRemotion)};export const useCurrentFrame=()=>globalThis.__analyticalFrame;export const useVideoConfig=()=>({fps:30,width:1920,height:1080,durationInFrames:2400});export const staticFile=p=>p;`;
await mkdir(path.join(root, 'out/checks'), {recursive: true});
const directory = await mkdtemp(path.join(root, 'out/checks/analytical-markup-'));
after(() => rm(directory, {recursive: true, force: true}));
async function renderer(source = 'current') {
  const imports = Object.values(components).map(([lane, name]) => `import {${name}Diagram${name === 'TitrationCurve' ? ',curvePH' : ''}} from './src/slides/diagrams/kinds/${lane}/${name}Diagram';`).join('');
  const kinds = Object.entries(components).map(([kind, [, name]]) => `${kind}:${name}Diagram`).join(',');
  const built = await build({
    stdin: {contents: `import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';${imports}const kinds={${kinds}};export {curvePH};export function render(kind,props,frame=1700){globalThis.__analyticalFrame=frame;return renderToStaticMarkup(React.createElement(kinds[kind],props));}`, resolveDir: root, loader: 'tsx'},
    bundle: true, write: false, format: 'esm', platform: 'node', jsx: 'automatic', packages: 'external',
    plugins: [{name: 'synthetic-hooks-and-preserved-baselines', setup(builder) {
      builder.onResolve({filter: /^remotion$/}, () => ({path: 'fixture', namespace: 'fixture'}));
      builder.onLoad({filter: /.*/, namespace: 'fixture'}, () => ({contents: stub, loader: 'js', resolveDir: root}));
      if (source !== 'current') builder.onLoad({filter: /(?:TitrationCurve|TubeTests|FlameTests)Diagram\.tsx$/}, args => {
        const relative = path.relative(root, args.path);
        assert.ok(changedFiles.includes(relative));
        return {contents: git(source === 'local' ? localBaseline : baseline, relative), loader: 'tsx', resolveDir: path.dirname(args.path)};
      });
    }}],
  });
  const file = path.join(directory, `${source}.mjs`);
  await writeFile(file, built.outputFiles[0].text);
  return import(pathToFileURL(file));
}
const current = await renderer(), preservedMain = await renderer('main'), preservedLocal = await renderer('local');
const render = current.render, main = preservedMain.render, local = preservedLocal.render;
const frames = [0, 240, 700, 1200, 1700];
const types = ['SA-SB', 'WA-SB', 'SA-WB', 'WA-WB'];
const series = types.map(type => ({type, label: type, at: 0}));
const curveKind = 'chem12m6TitrationCurve', tubeKind = 'chem12m8TubeTests', flameKind = 'chem12m8FlameTests';
const weak = {series: [series[1]]};
const defaults = [
  ...types.map((type, i) => ({kind: curveKind, props: {series: [series[i]]}})),
  {kind: curveKind, props: {series, epDots: true}},
  {kind: curveKind, props: {series, grid: true}},
  {kind: curveKind, props: {...weak, apparatus: true, markers: {epAt: 150, halfAt: 288, pKaAt: 375, bufferAt: 648}}},
  {kind: curveKind, props: {...weak, bands: [{lo: 8.3, hi: 10, label: 'phenolphthalein', color: '#e0368f', at: 100}]}},
  {kind: tubeKind, props: {}}, {kind: tubeKind, props: {mode: 'anion'}}, {kind: tubeKind, props: {mode: 'cation'}},
  {kind: flameKind, props: {}},
];
const authored = [];
for (const file of await readdir(path.join(root, 'src/data'))) {
  if (!file.endsWith('.json')) continue;
  const lesson = JSON.parse(await readFile(path.join(root, 'src/data', file)));
  for (const scene of lesson.scenes ?? []) if (Object.hasOwn(components, scene.diagram?.kind ?? '')) {
    authored.push({name: `${file}#${scene.id}`, kind: scene.diagram.kind, props: scene.diagram.props ?? {}});
  }
}
const shapes = html => [...html.matchAll(/<(?:rect|path|circle|ellipse|line|polygon|polyline)\b[^>]*>/gu)].map(match => match[0]);
const visibleText = html => [...html.matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/gu)].map(match => match[1].replace(/<[^>]+>/gu, '')).join(' ');
const reviewed = (kind, props = {}, frame = 1700) => render(kind, {...props, reviewedAnalytical: true}, frame);
const validate = (kind, props) => validateAnalyticalDiagram({type: 'diorama', kind, props: {...props, reviewedAnalytical: true}});
const validReviewed = [...defaults, ...authored.filter(sample => !Object.hasOwn(sample.props, 'jumpRead'))];
// The one unsafe legacy input is not silently rewritten by the component.
const legacyJump = authored.find(sample => Object.hasOwn(sample.props, 'jumpRead'));
const correctedMastery = {...legacyJump.props};
delete correctedMastery.jumpRead; delete correctedMastery.wrongPins;
correctedMastery.bands = correctedMastery.bands.slice(0, 1);
validReviewed.push({kind: curveKind, props: correctedMastery});
validReviewed.push({kind: curveKind, props: {
  series: [{type: 'WA-SB', label: 'supplied weak acid', at: 20, dur: 150}],
  ca: .05, va: 30, cb: .1, pKa: 4.76, pKb: 5.1, vMax: 40, delay: 0,
  markers: {epAt: 0, halfAt: 0, pKaAt: 0, bufferAt: 0},
}});

test('all six authored uses and twelve meaningful defaults preserve main and local output at all five frames, including false', () => {
  assert.equal(authored.length, 6, 'Update the explicit authored-use coverage when catalogue usage changes');
  assert.equal(defaults.length, 12);
  for (const sample of [...defaults, ...authored]) for (const frame of frames) {
    const name = `${sample.name ?? sample.kind} frame ${frame}`;
    const expected = main(sample.kind, sample.props, frame);
    assert.equal(render(sample.kind, sample.props, frame), expected, `${name} preserved main`);
    assert.equal(render(sample.kind, sample.props, frame), local(sample.kind, sample.props, frame), `${name} preserved local`);
    assert.equal(render(sample.kind, {...sample.props, reviewedAnalytical: false}, frame), expected, `${name} explicit false`);
  }
});

test('all valid reviewed examples produce finite SVG with unchanged curves, apparatus and animation geometry', () => {
  for (const sample of validReviewed) for (const frame of frames) {
    assert.doesNotThrow(() => validate(sample.kind, sample.props));
    const html = reviewed(sample.kind, sample.props, frame);
    assert.doesNotMatch(html, /NaN|Infinity|undefined/u);
    assert.deepEqual(shapes(html), shapes(main(sample.kind, sample.props, frame)), `${sample.kind} geometry frame ${frame}`);
  }
});

test('reviewed titration uses charge-balance equivalence and approximate half-equivalence under stated conditions', () => {
  const html = reviewed(curveKind, {...weak, markers: {epAt: 0, halfAt: 0, pKaAt: 0, bufferAt: 0}});
  const text = visibleText(html);
  assert.match(text, /equivalence: 25\.00 mL/u);
  assert.match(text, /charge balance: pH 8\.72/u);
  assert.match(text, /pH ≈ pKa = 4\.74/u);
  assert.match(text, /Ideal dilute model, 25 °C; monoprotic acid and monobasic base/u);
  assert.doesNotMatch(text, /halfway up|middle of the jump|pH = pKa/u);
  assert.match(html, /Equivalence is the stoichiometric volume, not an arithmetic average of pH bounds/u);
  assert.match(html, /suitability requires endpoint-volume error and experimental conditions/u);
  const band = reviewed(curveKind, correctedMastery);
  assert.match(visibleText(band), /transition interval check volume error/u);
  assert.doesNotMatch(band, /✓|brackets the jump|halfway up/u);
  const grid = reviewed(curveKind, {series, grid: true});
  assert.match(visibleText(grid), /Ideal dilute model, 25 °C/u);
  assert.match(grid, /<text x="380" y="18"[^>]*>Ideal dilute model/u, 'grid model caption avoids the lower graph plinth');
});

test('charge-balance solver is preserved, monotonic and consistent with independent limiting calculations', () => {
  const Ka = 10 ** -4.74, Kb = 10 ** -4.75;
  for (const type of types) {
    let previous = -Infinity;
    for (const v of [0, 1, 10, 12.5, 20, 24.9, 25, 25.1, 30, 40, 50]) {
      const pH = current.curvePH(type, v, .1, 25, .1, Ka, Kb);
      assert.ok(Number.isFinite(pH));
      assert.equal(pH, preservedMain.curvePH(type, v, .1, 25, .1, Ka, Kb));
      assert.equal(pH, preservedLocal.curvePH(type, v, .1, 25, .1, Ka, Kb));
      assert.ok(pH >= previous, `${type} is monotonic at ${v} mL`);
      previous = pH;
    }
  }
  const pH = (type, v) => current.curvePH(type, v, .1, 25, .1, Ka, Kb);
  assert.ok(Math.abs(pH('SA-SB', 0) - 1) < 1e-10);
  assert.ok(Math.abs(pH('SA-SB', 25) - 7) < 1e-8);
  assert.ok(Math.abs(pH('SA-SB', 50) - (14 + Math.log10((.1 * 50 - .1 * 25) / 75))) < 1e-10);
  const approximateWeakEp = 14 + Math.log10(Math.sqrt(1e-14 / Ka * .05));
  assert.ok(Math.abs(pH('WA-SB', 25) - approximateWeakEp) < .001);
  assert.ok(Math.abs(pH('WA-SB', 12.5) - 4.74) < .001);
  assert.notEqual(pH('WA-SB', 12.5), 4.74, 'half-equivalence uses the full model, not a forced equality');
  assert.ok(pH('SA-WB', 25) < 7);
  assert.ok(pH('WA-SB', 25) > 7);
});

test('reviewed tube tests are controlled examples with acid selection, separate aliquots and safe gas tests', () => {
  const anion = reviewed(tubeKind, {mode: 'anion'}, 240);
  assert.match(visibleText(anion), /Known-ion examples; fresh aliquots; supervised tests/u);
  assert.match(visibleText(anion), /dilute HNO₃ first/u);
  assert.match(visibleText(anion), /dilute HCl first/u);
  assert.match(visibleText(anion), /limewater: initially cloudy/u);
  assert.match(anion, /not a unique-identification lookup/u);
  assert.match(anion, /never sulfuric acid/u);
  assert.match(anion, /rather than identifying gas from bubbles alone/u);
  const barium = reviewed(tubeKind, {mode: 'anion'});
  assert.match(visibleText(barium), /Known BaSO₄ and BaCO₃: add dilute HCl/u);
  assert.match(visibleText(barium), /comparison is limited to these two precipitates/u);
  assert.match(visibleText(barium), /persists in dilute HCl/u);
  const cation = reviewed(tubeKind, {mode: 'cation'}, 700);
  assert.match(visibleText(cation), /white; not unique/u);
  assert.match(visibleText(cation), /NH₃: moist red litmus turns blue\. Do not smell gases/u);
  const combined = reviewed(tubeKind, {mode: 'cation'});
  assert.match(visibleText(combined), /Combine evidence from fresh aliquots/u);
  assert.match(visibleText(combined), /→ Cu²⁺ supports not unique identification/u);
  assert.doesNotMatch(visibleText(combined), /strong case|stronger than/u);
});

test('reviewed flame tests distinguish emitting species from starting ions and retain the sodium-masking demonstration', () => {
  const early = reviewed(flameKind, {}, 240);
  assert.match(visibleText(early), /Excited species in the flame emit characteristic light/u);
  assert.match(visibleText(early), /Often neutral atoms; ion labels identify the starting samples/u);
  assert.doesNotMatch(early, /Excited metal ions emit/u);
  const late = reviewed(flameKind);
  assert.equal(visibleText(late), visibleText(main(flameKind, {}, 1700)), 'already-correct sodium masking copy is unchanged');
  assert.match(visibleText(late), /Sodium’s yellow masks weaker colours/u);
  assert.match(visibleText(late), /Supporting evidence, not proof/u);
});

test('review flags, supported kinds and option schemas reject drift without changing omitted/false legacy behavior', () => {
  for (const [kind, props] of [[curveKind, weak], [tubeKind, {}], [flameKind, {}]]) {
    for (const value of [undefined, null, 0, 1, '', 'false', 'true', [], {}]) {
      const bad = {...props, reviewedAnalytical: value};
      assert.throws(() => validateAnalyticalDiagram({type: 'diorama', kind, props: bad}), /must be boolean/u);
      assert.throws(() => render(kind, bad), /must be boolean/u);
    }
    for (const flag of ['reviewedMedicine', 'reviewedWaterHealth', 'reviewedPolymer', 'reviewedFuture']) {
      for (const value of [true, 'true', null, 1]) {
        assert.throws(() => validate(kind, {...props, [flag]: value}), /cannot be combined/u);
        assert.throws(() => reviewed(kind, {...props, [flag]: value}), /cannot be combined/u);
      }
      assert.doesNotThrow(() => reviewed(kind, {...props, [flag]: false}));
    }
    assert.throws(() => reviewed(kind, {...props, mode: 'unknown'}), /Unsupported reviewed/u);
    for (const value of [NaN, Infinity, -1, null, '62']) {
      assert.throws(() => reviewed(kind, {...props, delay: value}), /finite/u);
    }
    assert.throws(() => validateAnalyticalDiagram({type: 'chart', kind, props: {...props, reviewedAnalytical: true}}), /require a diorama/u);
  }
  assert.throws(() => validate('otherKind', {}), /Unsupported reviewed analytical diagram/u);
  assert.doesNotThrow(() => validateAnalyticalDiagram({type: 'chart', kind: 'otherKind', props: {reviewedAnalytical: false}}));
});

test('reviewed titration rejects jump averaging, unqualified indicator verdicts and incompatible marker scope', () => {
  for (const value of [legacyJump.props.jumpRead, undefined, null]) {
    assert.throws(() => reviewed(curveKind, {...weak, jumpRead: value}), /rejects jumpRead/u);
    assert.throws(() => validate(curveKind, {...weak, jumpRead: value}), /rejects jumpRead/u);
  }
  assert.throws(() => reviewed(curveKind, {...weak, wrongPins: legacyJump.props.wrongPins}), /rejects wrong pins/u);
  assert.throws(() => validate(curveKind, {...weak, wrongPins: legacyJump.props.wrongPins}), /rejects wrong pins/u);
  for (const wrong of [true, false, undefined, null]) {
    const props = {...weak, bands: [{lo: 8.3, hi: 10, label: 'indicator', color: '#abcdef', at: 0, wrong}]};
    assert.throws(() => reviewed(curveKind, props), /reject wrong flags/u);
    assert.throws(() => validate(curveKind, props), /reject wrong flags/u);
  }
  for (const props of [
    {series, markers: {epAt: 0}}, {...weak, grid: true, markers: {epAt: 0}},
    {series, apparatus: true}, {...weak, grid: true, apparatus: true},
    {...weak, grid: true}, {series: [series[0], series[0], series[2], series[3]], grid: true},
    {...weak, apparatus: true, bands: correctedMastery.bands},
    {...weak, markers: {pKaAt: 0}},
    ...['SA-SB', 'SA-WB', 'WA-WB'].map(type => ({series: [{type, label: type, at: 0}], markers: {halfAt: 0}})),
    {...weak, pKa: 0, markers: {halfAt: 0}}, {...weak, pKa: 14, markers: {bufferAt: 0}},
    {series, bands: [{lo: 8.3, hi: 10, label: 'indicator', color: '#abcdef', at: 0}]},
  ]) {
    assert.throws(() => reviewed(curveKind, props), /require/u);
    assert.throws(() => validate(curveKind, props), /require/u);
  }
});

test('reviewed numeric inputs and beat schedules fail closed before nonfinite geometry is produced', () => {
  const badCurves = [
    {}, {series: []}, {series: Array(1)}, {series: [...series, series[0]]}, {series: null},
    {series: [{type: 'other', label: 'other', at: 0}]},
    {series: [{type: 'WA-SB', label: '', at: 0}]},
    ...[NaN, Infinity, -1, undefined, null, '0'].map(at => ({series: [{type: 'WA-SB', label: 'weak acid', at}]})),
    ...[0, -1, NaN, Infinity, null].map(dur => ({series: [{type: 'WA-SB', label: 'weak acid', at: 0, dur}]})),
    ...['ca', 'cb', 'va', 'vMax'].flatMap(key => [0, -1, NaN, Infinity, null, '25'].map(value => ({...weak, [key]: value}))),
    ...['pKa', 'pKb'].flatMap(key => [-1, 15, NaN, Infinity, null, '4'].map(value => ({...weak, [key]: value}))),
    {...weak, ca: .21}, {...weak, cb: .21}, {...weak, va: 1001}, {...weak, vMax: 1001},
    {...weak, vMax: 25}, {...weak, vMax: 1000},
    {...weak, markers: null}, {...weak, markers: {epAt: NaN}}, {...weak, markers: {other: 1}},
    {...weak, bands: null}, {...weak, bands: Array(1)}, {...weak, wrongPins: null},
    {...weak, bands: [{lo: 10, hi: 8.3, label: 'bad', color: 'pink', at: 0}]},
    {...weak, bands: [{lo: NaN, hi: 10, label: 'bad', color: 'pink', at: 0}]},
    {...weak, wrongPins: [{v: 51, pH: 7, label: 'bad', at: 0}]},
    {...weak, apparatus: 'true'}, {...weak, grid: 1}, {...weak, epDots: null},
  ];
  for (const props of badCurves) {
    assert.throws(() => validate(curveKind, props));
    assert.throws(() => reviewed(curveKind, props));
  }
  for (const [kind, props, count] of [[tubeKind, {mode: 'anion'}, 9], [tubeKind, {mode: 'cation'}, 13], [flameKind, {}, 10]]) {
    for (const bad of [[], null, Array(count), Array(count).fill(NaN), Array(count).fill(Infinity), [2, 1, ...Array(count - 2).fill(3)]]) {
      assert.throws(() => validate(kind, {...props, beats: bad}));
      assert.throws(() => reviewed(kind, {...props, beats: bad}));
    }
    assert.doesNotThrow(() => reviewed(kind, {...props, beats: Array(count).fill(0)}));
  }
  for (const ions of [[], null, [{ion: 'K⁺', color: '#c39ae6', name: 'lilac'}]]) {
    assert.throws(() => reviewed(flameKind, {ions}), /six known-ion samples/u);
  }
  assert.throws(() => reviewed(flameKind, {ions: Array(6)}), /must be an object/u);
});

test('solver and shared illustration dependencies retain baseline source bytes', async () => {
  for (const file of [
    'src/slides/diagrams/kinds/chem-y12-m6/shared.tsx',
    'src/slides/diagrams/kinds/chem-y12-m8/shared.tsx',
    'src/slides/diagrams/kinds/chem-y12-m8/lab-parts.tsx',
  ]) {
    const source = await readFile(path.join(root, file), 'utf8');
    assert.equal(source, git(baseline, file), `${file} main drift guard`);
    assert.equal(source, git(localBaseline, file), `${file} local drift guard`);
  }
});

test('all six opt-ins in the five guarded source drafts have finite output and preserve illustration geometry', async () => {
  const {analyticalDraft, analyticalSources} = await import('./lib/analytical-inference-lessons.mjs');
  let count = 0;
  for (const name of Object.keys(analyticalSources)) {
    const bytes = await readFile(path.join(root, 'src/data', `${name}.json`));
    const {draft} = analyticalDraft(name, bytes);
    for (const scene of draft.scenes) {
      const diagram = scene.diagram;
      if (!diagram?.props?.reviewedAnalytical) continue;
      count++;
      validateAnalyticalDiagram(diagram);
      for (const frame of frames) {
        const html = render(diagram.kind, diagram.props, frame);
        assert.doesNotMatch(html, /NaN|Infinity|undefined/u);
        assert.deepEqual(shapes(html), shapes(main(diagram.kind, diagram.props, frame)), `${name}/${scene.id} at ${frame}`);
      }
    }
  }
  assert.equal(count, 6, 'All drafted analytical components are covered');
});
