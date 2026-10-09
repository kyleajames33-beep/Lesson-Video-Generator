import test, {after} from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {createRequire} from 'node:module';
import {componentBaselineSource} from './lib/component-baseline-fixtures.mjs';
import {readFile, mkdir, mkdtemp, writeFile, rm, readdir} from 'node:fs/promises';
import {fileURLToPath, pathToFileURL} from 'node:url';
import path from 'node:path';
import {validateSafetyMedicineDiagram} from '../src/slides/diagrams/safety-medicine-models.mjs';

// Render real components with ReactDOMServer and actual Remotion interpolation.
// Only the frame/config hooks are synthetic. Baseline source comes from preserved
// main, so exact SVG equality checks geometry, animation, text and accessibility.
const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const require = createRequire(import.meta.url);
const baseline = 'ca58c157f0349b29774f93a76cd041aefab3a2a2';
const localBaseline = '691096da3c72f71ef50f37cfad7a8272bc710be6';
const components = {chem12m8Chirality: 'Chirality', chem12m8Delivery: 'Delivery'};
const changedFiles = Object.values(components).map(name => `src/slides/diagrams/kinds/chem-y12-m8/${name}Diagram.tsx`);
const actualRemotion = path.join(path.dirname(require.resolve('remotion/package.json')), 'dist/esm/index.mjs');
const stub = `export {interpolate,spring,Easing,random} from ${JSON.stringify(actualRemotion)};export const useCurrentFrame=()=>globalThis.__safetyMedicineFrame;export const useVideoConfig=()=>({fps:30,width:1920,height:1080,durationInFrames:2400});export const staticFile=p=>p;`;
await mkdir(path.join(root, 'out/checks'), {recursive: true});
const directory = await mkdtemp(path.join(root, 'out/checks/safety-medicine-markup-'));
after(() => rm(directory, {recursive: true, force: true}));
async function renderer(source = 'current') {
  const imports = Object.values(components).map(name => `import {${name}Diagram} from './src/slides/diagrams/kinds/chem-y12-m8/${name}Diagram';`).join('');
  const kinds = Object.entries(components).map(([kind, name]) => `${kind}:${name}Diagram`).join(',');
  const built = await build({
    stdin: {contents: `import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';${imports}const kinds={${kinds}};export function render(kind,props,frame=1700){globalThis.__safetyMedicineFrame=frame;return renderToStaticMarkup(React.createElement(kinds[kind],props));}`, resolveDir: root, loader: 'tsx'},
    bundle: true, write: false, format: 'esm', platform: 'node', jsx: 'automatic', packages: 'external',
    plugins: [{name: 'synthetic-hooks-and-main-baseline', setup(builder) {
      builder.onResolve({filter: /^remotion$/}, () => ({path: 'fixture', namespace: 'fixture'}));
      builder.onLoad({filter: /.*/, namespace: 'fixture'}, () => ({contents: stub, loader: 'js', resolveDir: root}));
      if (source !== 'current') builder.onLoad({filter: /(?:Chirality|Delivery)Diagram\.tsx$/}, args => {
        const relative = path.relative(root, args.path).split(path.sep).join('/');
        assert.ok(changedFiles.includes(relative));
        return {contents: componentBaselineSource(source === 'local' ? localBaseline : baseline, relative), loader: 'tsx', resolveDir: path.dirname(args.path)};
      });
    }}],
  });
  const file = path.join(directory, `${source}.mjs`);
  await writeFile(file, built.outputFiles[0].text);
  return (await import(pathToFileURL(file))).render;
}
const render = await renderer(), main = await renderer('main'), local = await renderer('local');
const frames = [0, 240, 700, 1200, 1700];
const chiralityModes = ['mirror', 'compare', 'receptor', 'racemic', 'polarimeter'];
const deliveryModes = ['like', 'firstpass'];
const defaults = [
  ...Object.keys(components).map(kind => ({kind, props: {}})),
  ...chiralityModes.map(mode => ({kind: 'chem12m8Chirality', props: {mode}})),
  ...deliveryModes.map(mode => ({kind: 'chem12m8Delivery', props: {mode}})),
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
const shapes = html => [...html.matchAll(/<(?:rect|path|circle|ellipse|line|polygon|polyline)\b[^>]*>/gu)].map(match => match[0]);
const clips = html => [...html.matchAll(/<clipPath\b[^>]*>[\s\S]*?<\/clipPath>/gu)].map(match => match[0]);
const reviewed = (kind, props = {}, frame = 1700) => render(kind, {...props, reviewedSafetyMedicine: true}, frame);
const visibleText = html => [...html.matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/gu)].map(match => match[1].replace(/<[^>]+>/gu, '')).join(' ');
// The two racemic safety stamps are the sole geometry exception: the original
// R check/S cross is scientifically misleading. Neutral question marks replace
// their paths; both circle positions, all tokens and animation remain intact.
const withoutSafetyStamps = html => html.replace(/<g opacity="[^"]*" transform="translate\(718,(?:62|142)\)">[\s\S]*?<\/g>/gu, '');

test('all seven authored uses and nine defaults exactly preserve both preserved main and local output, including false', () => {
  assert.equal(authored.length, 7, 'Update this expectation when authored uses change');
  assert.equal(defaults.length, 9);
  for (const sample of [...defaults, ...authored]) for (const frame of frames) {
    const label = `${sample.name ?? sample.kind + ':' + (sample.props?.mode ?? 'default')} frame ${frame}`;
    const expected = main(sample.kind, sample.props, frame);
    assert.equal(render(sample.kind, sample.props, frame), expected, `${label} preserved main`);
    assert.equal(render(sample.kind, sample.props, frame), local(sample.kind, sample.props, frame), `${label} preserved local`);
    assert.equal(render(sample.kind, {...sample.props, reviewedSafetyMedicine: false}, frame), expected, `${label} explicit false`);
  }
});

test('all reviewed defaults and authored uses have finite SVG and preserve geometry except the reported safety stamps', () => {
  for (const sample of [...defaults, ...authored]) for (const frame of frames) {
    const html = reviewed(sample.kind, sample.props, frame);
    const legacy = main(sample.kind, sample.props, frame);
    assert.doesNotMatch(html, /NaN|Infinity|undefined/u);
    assert.deepEqual(clips(html), clips(legacy), `${sample.kind} ${sample.props.mode ?? 'default'} clips at ${frame}`);
    const strip = sample.props.mode === 'racemic' ? withoutSafetyStamps : value => value;
    assert.deepEqual(shapes(strip(html)), shapes(strip(legacy)), `${sample.kind} ${sample.props.mode ?? 'default'} animation geometry at ${frame}`);
  }
});

test('reviewed mirror and compare modes delimit the single-centre example and the enantiomer criterion', () => {
  const mirror = reviewed('chem12m8Chirality', {mode: 'mirror'});
  assert.match(mirror, /common single-stereocentre example/iu);
  assert.match(visibleText(mirror), /not an exhaustive test for chirality/u);
  assert.match(visibleText(mirror), /Chirality: not superimposable on its mirror image/u);
  const compare = reviewed('chem12m8Chirality', {mode: 'compare'});
  assert.match(visibleText(compare), /Matching melting points in achiral conditions/u);
  assert.match(visibleText(compare), /Same connectivity \+ non-superimposable mirror images/u);
  assert.match(compare, /equal and opposite optical rotation under identical conditions/u);
});

test('reviewed receptor schematic makes no efficacy, harm or measured affinity claims', () => {
  const html = reviewed('chem12m8Chirality', {mode: 'receptor'});
  assert.match(visibleText(html), /Simplified binding model: real interactions require evidence/u);
  assert.match(visibleText(html), /illustrative 2-point fit/u);
  assert.match(visibleText(html), /illustrative 3-point fit/u);
  assert.equal((visibleText(html).match(/effect requires evidence/gu) ?? []).length, 2);
  assert.match(visibleText(html), /Same connectivity; biological effects may differ/u);
  assert.doesNotMatch(html, /binds weakly|binds well|inactive, or even harmful|therapeutic effect/u);
});

test('reviewed thalidomide has no R-safe/S-harmful stamps and assesses both forms and interconversion', () => {
  const html = reviewed('chem12m8Chirality', {mode: 'racemic'});
  const text = visibleText(html);
  assert.equal((text.match(/requires benefit\/risk assessment/gu) ?? []).length, 2);
  assert.match(text, /Thalidomide: neither form is presumed safe/u);
  assert.match(text, /both forms interconvert/u);
  assert.match(text, /Assess both forms and interconversion/u);
  assert.match(text, /R\/S: configuration tokens, not drug structures/u);
  assert.match(text, /R ⇌ S/u);
  assert.match(html, /not real drug molecular models/u);
  assert.doesNotMatch(html, /sedative: the intended effect|teratogenic: birth defects|Even pure R isn’t a clean fix/u);
  for (const y of [62, 142]) {
    const stamp = html.match(new RegExp(`<g opacity="[^"]*" transform="translate\\(718,${y}\\)">([\\s\\S]*?)<\\/g>`))?.[1];
    assert.ok(stamp, `neutral assessment stamp at ${y}`);
    assert.match(stamp, />\?<\/text>/u);
    assert.match(stamp, /<circle r="15" fill="#ffffff" stroke="#[0-9a-f]+" stroke-width="2.5"><\/circle>/u, 'existing assessment-circle geometry is preserved');
    assert.doesNotMatch(stamp, /<path/u, 'no benefit/harm tick or cross');
  }
});

test('reviewed polarimetry is a supplied nonzero ideal example, and does not identify purity or R/S from rotation', () => {
  const final = reviewed('chem12m8Chirality', {mode: 'polarimeter'});
  const text = visibleText(final);
  assert.match(text, /Supplied ideal example: the pure sample has nonzero rotation/u);
  assert.match(text, /R\/S configuration does not determine \(\+\)\/\(−\) optical sign/u);
  assert.match(text, /Zero rotation alone proves neither a racemate nor purity/u);
  assert.match(text, /pure sample \(\+\), ideal/u);
  const early = reviewed('chem12m8Chirality', {mode: 'polarimeter'}, 280);
  assert.match(visibleText(early), /pure sample \(\+\)/u);
  assert.doesNotMatch(early, />R<\/text>|>S<\/text>/u, 'optical-sign tokens do not imply R=positive');
});

test('reviewed delivery qualifies polarity as a simple affinity model', () => {
  const html = reviewed('chem12m8Delivery', {mode: 'like'});
  const text = visibleText(html);
  assert.match(text, /Simple affinity model: aqueous and lipid interactions/u);
  assert.match(text, /Polarity alone cannot establish solubility or absorption/u);
  assert.match(text, /pH, formulation and measured data also matter/u);
  assert.match(text, /non-polar interior/u);
  assert.match(text, /aqueous affinity/u);
  assert.doesNotMatch(html, /A good drug:|→ dissolve in plasma|must do both/u);
});

test('reviewed first-pass view follows unchanged parent, recognises metabolites and retains codeine to morphine', () => {
  const html = reviewed('chem12m8Delivery', {mode: 'firstpass'});
  const text = visibleText(html);
  assert.match(text, /Parent-drug view: metabolites and their effects are not shown/u);
  assert.match(text, /Presystemic metabolism can occur in gut wall and liver/u);
  assert.match(text, /Metabolism changes molecules; it does not always inactivate them/u);
  assert.match(text, /unchanged parent may fall/u);
  assert.match(text, /oral bioavailability may fall/u);
  assert.match(text, /Codeine has activity; morphine also contributes/u);
  assert.match(text, /codeine morphine/u);
  assert.match(html, /loss of parent identity, not destruction of all drug activity/u);
  assert.doesNotMatch(html, /Prodrug: given inactive|a large fraction|less active drug/u);
  // Molecular conversion arrow is retained, including its terminal coordinates.
  assert.match(html, /<line x1="362" y1="500" x2="409" y2="500"/u);
});

test('source and runtime validators require boolean review flags and supported kinds/modes', () => {
  for (const sample of [...defaults, ...authored]) {
    for (const props of [sample.props, {...sample.props, reviewedSafetyMedicine: false}, {...sample.props, reviewedSafetyMedicine: true}]) {
      assert.doesNotThrow(() => validateSafetyMedicineDiagram({type: 'diorama', kind: sample.kind, props}));
    }
  }
  for (const kind of Object.keys(components)) {
    for (const value of [undefined, null, 0, 1, '', 'false', 'true', [], {}]) {
      const props = {reviewedSafetyMedicine: value};
      assert.throws(() => validateSafetyMedicineDiagram({type: 'diorama', kind, props}), /must be boolean/u);
      assert.throws(() => render(kind, props), /must be boolean/u);
    }
    for (const mode of ['unknown', '', null, 7, {}, []]) {
      const props = {mode, reviewedSafetyMedicine: true};
      assert.throws(() => validateSafetyMedicineDiagram({type: 'diorama', kind, props}), /Unsupported reviewed/u);
      assert.throws(() => render(kind, props), /Unsupported reviewed/u);
    }
    for (const flag of ['reviewedMedicine', 'reviewedWaterHealth', 'reviewedPolymer', 'reviewedMethylmercury', 'reviewedFuture']) {
      for (const value of [true, 'true', null, 1]) {
        const props = {reviewedSafetyMedicine: true, [flag]: value};
        assert.throws(() => validateSafetyMedicineDiagram({type: 'diorama', kind, props}), /cannot be combined/u);
        assert.throws(() => render(kind, props), /cannot be combined/u);
      }
      assert.doesNotThrow(() => reviewed(kind, {[flag]: false}));
    }
  }
  assert.throws(() => validateSafetyMedicineDiagram({type: 'chart', kind: 'chem12m8Chirality', props: {reviewedSafetyMedicine: true}}), /requires a diorama/u);
  assert.throws(() => validateSafetyMedicineDiagram({type: 'diorama', kind: 'chem12m8Ionisation', props: {reviewedSafetyMedicine: true}}), /Unsupported reviewed safety-medicine diagram/u);
});

test('first-pass review rejects unreviewed drug pairs while legacy custom props remain exact', () => {
  for (const pair of [{prodrug: 'other'}, {activeDrug: 'other'}, {prodrug: null}, {activeDrug: null}, {prodrug: ''}]) {
    const props = {mode: 'firstpass', ...pair};
    assert.throws(() => reviewed('chem12m8Delivery', props), /limited to codeine and morphine/u);
    assert.throws(() => validateSafetyMedicineDiagram({type: 'diorama', kind: 'chem12m8Delivery', props: {...props, reviewedSafetyMedicine: true}}), /limited to codeine and morphine/u);
    for (const frame of frames) {
      assert.equal(render('chem12m8Delivery', props, frame), main('chem12m8Delivery', props, frame));
      assert.equal(render('chem12m8Delivery', {...props, reviewedSafetyMedicine: false}, frame), main('chem12m8Delivery', props, frame));
    }
  }
});
