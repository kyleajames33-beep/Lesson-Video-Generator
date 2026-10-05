import test, {after} from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {componentBaselineSource} from './lib/component-baseline-fixtures.mjs';
import {readFile, mkdir, mkdtemp, writeFile, rm, readdir} from 'node:fs/promises';
import {fileURLToPath, pathToFileURL} from 'node:url';
import path from 'node:path';
import {validateWaterHealthDiagram} from '../src/slides/diagrams/water-health-models.mjs';

// Render real components with ReactDOMServer and actual Remotion interpolation.
// Only the frame/config hooks are synthetic. Baseline source comes from preserved
// main, so exact SVG equality checks geometry, animation, text and accessibility.
const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const require = createRequire(import.meta.url);
const baseline = 'ca58c157f0349b29774f93a76cd041aefab3a2a2';
const reviewedBaseline = 'bacbbf308e6eb4d4ce0f7d36648d4259397b8972';
const components = {chem12m8Bod: 'Bod', chem12m8WaterBody: 'WaterBody', chem12m8Treatment: 'Treatment', chem12m8Ionisation: 'Ionisation'};
const changedFiles = Object.values(components).map(name => `src/slides/diagrams/kinds/chem-y12-m8/${name}Diagram.tsx`);
const actualRemotion = path.join(path.dirname(require.resolve('remotion/package.json')), 'dist/esm/index.mjs');
const stub = `export {interpolate,spring,Easing,random} from ${JSON.stringify(actualRemotion)};export const useCurrentFrame=()=>globalThis.__waterHealthFrame;export const useVideoConfig=()=>({fps:30,width:1920,height:1080,durationInFrames:2400});export const staticFile=p=>p;`;
await mkdir(path.join(root, 'out/checks'), {recursive: true});
const directory = await mkdtemp(path.join(root, 'out/checks/water-health-markup-'));
after(() => rm(directory, {recursive: true, force: true}));
async function renderer(source = 'current') {
  const imports = Object.values(components).map(name => `import {${name}Diagram} from './src/slides/diagrams/kinds/chem-y12-m8/${name}Diagram';`).join('');
  const kinds = Object.entries(components).map(([kind, name]) => `${kind}:${name}Diagram`).join(',');
  const built = await build({
    stdin: {contents: `import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';${imports}const kinds={${kinds}};export function render(kind,props,frame=1700){globalThis.__waterHealthFrame=frame;return renderToStaticMarkup(React.createElement(kinds[kind],props));}`, resolveDir: root, loader: 'tsx'},
    bundle: true, write: false, format: 'esm', platform: 'node', jsx: 'automatic', packages: 'external',
    plugins: [{name: 'synthetic-hooks-and-main-baseline', setup(builder) {
      builder.onResolve({filter: /^remotion$/}, () => ({path: 'fixture', namespace: 'fixture'}));
      builder.onLoad({filter: /.*/, namespace: 'fixture'}, () => ({contents: stub, loader: 'js', resolveDir: root}));
      if (source !== 'current') builder.onLoad({filter: /(?:Bod|WaterBody|Treatment|Ionisation)Diagram\.tsx$/}, args => {
        const relative = path.relative(root, args.path);
        assert.ok(changedFiles.includes(relative));
        return {contents: componentBaselineSource(source !== 'main' && relative.endsWith('/IonisationDiagram.tsx') ? reviewedBaseline : baseline, relative), loader: 'tsx', resolveDir: path.dirname(args.path)};
      });
    }}],
  });
  const file = path.join(directory, `${source}.mjs`);
  await writeFile(file, built.outputFiles[0].text);
  return (await import(pathToFileURL(file))).render;
}
const render = await renderer(), old = await renderer('preserved'), main = await renderer('main');
const frames = [0, 240, 700, 1200, 1700];
const waterModes = ['oxygen', 'nutrients', 'sources', 'chain', 'management'];
const defaults = [
  ...Object.keys(components).map(kind => ({kind, props: {}})),
  ...waterModes.map(mode => ({kind: 'chem12m8WaterBody', props: {mode}})),
  ...['train', 'coag', 'filter'].map(mode => ({kind: 'chem12m8Treatment', props: {mode}})),
  ...['forms', 'hh', 'compare', 'salts', 'hocl'].map(mode => ({kind: 'chem12m8Ionisation', props: {mode}})),
];
const authored = [];
for (const file of await readdir(path.join(root, 'src/data'))) {
  if (!file.endsWith('.json')) continue;
  const lesson = JSON.parse(await readFile(path.join(root, 'src/data', file)));
  for (const scene of lesson.scenes ?? []) {
    if (Object.hasOwn(components, scene.diagram?.kind ?? '')) {
      authored.push({name: `${file}#${scene.id}`, kind: scene.diagram.kind, props: scene.diagram.props});
    }
  }
}
const optIns = defaults.filter(({kind, props}) => (kind !== 'chem12m8Treatment' || !props.mode || props.mode === 'train') && (kind !== 'chem12m8Ionisation' || props.mode === 'hocl'));
const shapes = html => [...html.matchAll(/<(?:rect|path|circle|ellipse|line|polygon|polyline)\b[^>]*>/gu)].map(match => match[0]);
const clips = html => [...html.matchAll(/<clipPath\b[^>]*>[\s\S]*?<\/clipPath>/gu)].map(match => match[0]);
const reviewed = (kind, props = {}, frame = 1700) => render(kind, {...props, reviewedWaterHealth: true}, frame);

test('all fourteen authored uses and all default modes exactly preserve main output, including explicit false', () => {
  assert.equal(authored.length, 14, 'Update this coverage expectation when authored uses change');
  assert.equal(defaults.length, 17);
  for (const sample of [...defaults, ...authored]) for (const frame of frames) {
    const label = `${sample.name ?? sample.kind + ':' + (sample.props?.mode ?? 'default')} frame ${frame}`;
    const expected = old(sample.kind, sample.props, frame);
    assert.equal(render(sample.kind, sample.props, frame), expected, label);
    assert.equal(render(sample.kind, sample.props, frame), main(sample.kind, sample.props, frame), `${label} main`);
    assert.equal(render(sample.kind, {...sample.props, reviewedWaterHealth: false}, frame), expected, `${label} explicit false`);
  }
});

test('reviewed scenarios have finite SVG output at every requested frame and retain apparatus geometry', () => {
  for (const sample of optIns) for (const frame of frames) {
    const html = reviewed(sample.kind, sample.props, frame);
    const legacy = old(sample.kind, sample.props, frame);
    assert.doesNotMatch(html, /NaN|Infinity|undefined/u);
    assert.deepEqual(clips(html), clips(legacy), `${sample.kind} ${sample.props.mode ?? 'default'} apparatus clips at ${frame}`);
    if (sample.kind !== 'chem12m8Bod') {
      assert.deepEqual(shapes(html), shapes(legacy), `${sample.kind} ${sample.props.mode ?? 'default'} animation geometry at ${frame}`);
    }
  }
  // The BOD scale alone is intentionally replaced. Its two bottle outlines and
  // contents are retained, including their exact animated molecule coordinates.
  for (const frame of frames) {
    const current = reviewed('chem12m8Bod', {}, frame), legacy = old('chem12m8Bod', {}, frame);
    const beforeFormula = html => html.slice(html.indexOf('<defs>'), html.indexOf('<text x="380" y="392"'));
    assert.deepEqual(shapes(beforeFormula(current)), shapes(beforeFormula(legacy)));
  }
});

test('BOD opt-in qualifies the accepted assay and removes all universal pollution bands', () => {
  const html = reviewed('chem12m8Bod');
  assert.match(html, /Undiluted, unseeded: BOD₅ = initial DO − final DO/u);
  assert.match(html, /meeting test acceptance criteria/u);
  assert.match(html, /Apply dilution and seed corrections/u);
  assert.match(html, /five-day assay, not a field oxygen forecast/u);
  assert.match(html, /during test/u);
  assert.doesNotMatch(html, /Under 2|2 to 8|above 8|moderate pollution|heavy pollution|>clean<|= the BOD/u);
});

test('all water-body opt-ins describe qualified illustrative scenarios, not guaranteed outcomes', () => {
  for (const mode of waterModes) {
    const html = reviewed('chem12m8WaterBody', {mode});
    assert.match(html, /[Ii]llustrative/u, mode);
    assert.doesNotMatch(html, /200 million dollars|Lake Erie/u, mode);
  }
  const oxygen = reviewed('chem12m8WaterBody', {mode: 'oxygen'});
  assert.match(oxygen, /response varies by species/u);
  assert.match(oxygen, /possible stress/u);
  assert.doesNotMatch(oxygen, /organisms in trouble/u);
  const nutrients = reviewed('chem12m8WaterBody', {mode: 'nutrients'});
  assert.match(nutrients, /PO₄ is analytical shorthand/u);
  assert.match(nutrients, /H₂PO₄⁻ \/ HPO₄²⁻ vary with pH/u);
  assert.match(nutrients, /Bloom risk can rise/u);
  assert.match(nutrients, /light, flow and nutrient limits matter/u);
  assert.doesNotMatch(nutrients, /PO₄³⁻|Balanced ecosystem|Explosive algal growth|helpful at low levels|low nitrate and phosphate keep/u);
  const sources = reviewed('chem12m8WaterBody', {mode: 'sources'});
  assert.match(sources, /Oxygen balance may tip/u);
  assert.match(sources, /some formulations/u);
  assert.doesNotMatch(sources, /Balance tips|tipping its oxygen balance/u);
  const chain = reviewed('chem12m8WaterBody', {mode: 'chain'});
  assert.match(chain, /Possible oxygen stress/u);
  assert.match(chain, /Living algae respire in light and darkness/u);
  assert.doesNotMatch(chain, /O₂ collapse kills fish|oxygen collapses and fish die/u);
  const management = reviewed('chem12m8WaterBody', {mode: 'management'});
  assert.match(management, /locally validated controls/u);
  assert.match(management, /Measure nutrient loads and ecological response/u);
  assert.doesNotMatch(management, /Stop nutrients|Prevention beats reaction/u);
});

test('reviewed treatment train labels its order as illustrative and site-specific', () => {
  const html = reviewed('chem12m8Treatment');
  assert.match(html, /Illustrative sequence; barriers are site-specific/u);
  assert.match(html, /Treatment uses multiple barriers/u);
  assert.doesNotMatch(html, /Chlorination is only the final stage/u);
  for (const mode of ['coag', 'filter', 'unknown', null]) {
    assert.throws(() => reviewed('chem12m8Treatment', {mode}), /limited to train mode/u);
  }
});

test('opt-in validator rejects nonboolean flags and unsupported diagram kinds and modes', () => {
  for (const sample of optIns) {
    assert.doesNotThrow(() => validateWaterHealthDiagram({type: 'diorama', kind: sample.kind, props: {...sample.props, reviewedWaterHealth: true}}));
  }
  for (const sample of [...defaults, ...authored]) {
    assert.doesNotThrow(() => validateWaterHealthDiagram({type: 'diorama', kind: sample.kind, props: sample.props}));
    assert.doesNotThrow(() => validateWaterHealthDiagram({type: 'diorama', kind: sample.kind, props: {...sample.props, reviewedWaterHealth: false}}));
  }
  for (const value of [undefined, null, 0, 1, '', 'false', 'true', [], {}]) {
    assert.throws(() => validateWaterHealthDiagram({type: 'diorama', kind: 'chem12m8Bod', props: {reviewedWaterHealth: value}}), /must be boolean/u);
  }
  for (const kind of Object.keys(components)) for (const value of [null, 0, 'false', {}]) {
    assert.throws(() => render(kind, {reviewedWaterHealth: value}), /must be boolean/u);
  }
  for (const diagram of [
    {type: 'chart', kind: 'chem12m8Bod'},
    {type: 'diorama', kind: 'chem12m8FoodChain'},
    {type: 'diorama', kind: 'chem12m8Bod', mode: 'bottles'},
    ...['coag', 'filter', 'unknown', null].map(mode => ({type: 'diorama', kind: 'chem12m8Treatment', mode})),
    ...['unknown', '', null, 7].map(mode => ({type: 'diorama', kind: 'chem12m8WaterBody', mode})),
    ...['forms', 'hh', 'compare', 'salts', undefined, null].map(mode => ({type: 'diorama', kind: 'chem12m8Ionisation', mode})),
  ]) {
    const {mode, ...base} = diagram;
    assert.throws(() => validateWaterHealthDiagram({...base, props: {reviewedWaterHealth: true, ...(Object.hasOwn(diagram, 'mode') ? {mode} : {})}}));
  }
  assert.throws(() => reviewed('chem12m8WaterBody', {mode: 'unknown'}), /Unsupported reviewed water-body mode/u);
});


test('HOCl opt-in describes same-total-free-chlorine speciation and cannot override medicine review', () => {
  const html = reviewed('chem12m8Ionisation', {mode: 'hocl'});
  assert.match(html, /Species, concentration/u);
  assert.match(html, /and contact time all matter/u);
  assert.match(html, /same total free chlorine concentration/u);
  assert.match(html, /does not predict treatment efficacy by itself/u);
  assert.match(html, /more HOCl/u);
  assert.match(html, /more OCl⁻/u);
  assert.match(html, /Cl₂ \+ H₂O ⇌ HOCl \+ H⁺ \+ Cl⁻/u);
  assert.doesNotMatch(html, /Not how much chlorine|stronger disinfection|weaker disinfection|more effective disinfectant|weaker disinfectant/u);
  for (const frame of frames) {
    const current = reviewed('chem12m8Ionisation', {mode: 'hocl'}, frame);
    const legacy = old('chem12m8Ionisation', {mode: 'hocl'}, frame);
    assert.deepEqual([...current.matchAll(/<(?:rect|path|circle|ellipse|line|polygon|polyline)\b[^>]*>/gu)].map(m => m[0]), [...legacy.matchAll(/<(?:rect|path|circle|ellipse|line|polygon|polyline)\b[^>]*>/gu)].map(m => m[0]), `All HOCl geometry at ${frame}`);
  }
  const invalid = [
    {mode: 'hocl', reviewedMedicine: true},
    {mode: 'hocl', hoclPKa: NaN},
    {mode: 'hocl', lowerPH: Infinity},
    {mode: 'hocl', higherPH: null},
    {mode: 'hocl', lowerPH: 9, higherPH: 6},
    {mode: 'hocl', lowerPH: 7.5},
    {mode: 'hh'},
    {},
  ];
  for (const props of invalid) {
    assert.throws(() => reviewed('chem12m8Ionisation', props));
    assert.throws(() => validateWaterHealthDiagram({type: 'diorama', kind: 'chem12m8Ionisation', props: {...props, reviewedWaterHealth: true}}));
  }
});

test('all existing reviewed medicine modes preserve bacbbf3 markup with the water flag omitted or false', () => {
  const cases = [
    {mode: 'forms'},
    {mode: 'hh'},
    {mode: 'compare', pKa: 3.5, stomachRange: [1, 2], intestineRange: [6, 7], stomachPH: 1.5, intestinePH: 6.5},
    {mode: 'salts', acidSolubility: 4, saltSolubility: 40},
  ];
  for (const props of cases) for (const frame of frames) {
    const medicine = {...props, reviewedMedicine: true};
    const expected = old('chem12m8Ionisation', medicine, frame);
    assert.equal(render('chem12m8Ionisation', medicine, frame), expected);
    assert.equal(render('chem12m8Ionisation', {...medicine, reviewedWaterHealth: false}, frame), expected);
  }
});
