import assert from 'node:assert/strict';
import {readFileSync, writeFileSync, unlinkSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {createRequire} from 'node:module';
import {pathToFileURL} from 'node:url';
import path from 'node:path';
import {build} from 'esbuild';
import {checkProductionBrief} from '../../../../scripts/lib/production-brief.mjs';
import {answerTiming} from '../../../../src/lesson/answer-timing.mjs';
import {lessonTimeline} from '../../../../src/lesson/timeline.mjs';

const root = process.cwd(), base = 'docs/production/drafts/module5-c3-beginner-selected-2026-10-10';
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const htmlText = text => text.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#x27;');
const read = name => JSON.parse(readFileSync(base + '/' + name));
const sourceBytes = readFileSync(base + '/lesson.json'), lesson = JSON.parse(sourceBytes);
const preparationPath = 'docs/production/drafts/module5-beginner-preparation-2026-10-10/chemistry-c3.md';
const preparationBytes = readFileSync(preparationPath);
assert.equal(hash(preparationBytes), '22bcd7f9a2d7279dd2f7c8df7f9a9e091fcff11e23d4df20b4012d8420f98ff2');
const speeches = [...preparationBytes.toString().matchAll(/^\*\*(Narration|Prompt|Feedback):\*\* "([^\r\n]+)"$/gm)].map(match => ({kind: match[1].toLowerCase(), text: match[2]}));
const plan = read('narration-plan.json'), trace = read('traceability.json'), proposal = read('visual-implementation-proposal.json');
assert.deepEqual(plan.segments.map(segment => ({kind: segment.kind, text: segment.text})), speeches);
assert.equal(lesson.scenes.filter(scene => scene.voiceover).map(scene => scene.voiceover.text).join(' '), speeches.map(segment => segment.text).join(' '));
assert.equal(plan.words, 1184);
assert.equal(plan.segments.length, 12);
assert.equal(lesson.scenes.length, 11);
assert.equal(new Set(lesson.scenes.map(scene => scene.id)).size, 11);
assert.deepEqual(read('remotion-props.json').lesson, lesson);
assert.equal(trace.source.sha256, hash(sourceBytes));
assert.equal(plan.source.sha256, hash(sourceBytes));
assert.equal(trace.cuts.length, 0);
assert.equal(lesson.introDurationInFrames, 0);
assert(!lesson.introVoiceover && !lesson.backgroundMusic);
assert(!lesson.scenes.some(scene => scene.voiceover?.audioFile || scene.captions || scene.responseHold || scene.image || scene.diagram));
assert(lesson.scenes.find(scene => scene.id === 'c3-hook').comparison.length === 2);
for (const scene of lesson.scenes) {
  assert(Number.isInteger(scene.durationInFrames) && scene.durationInFrames > 0);
  if (scene.bullets) {
    assert(scene.bullets.length <= 5);
    assert(scene.bullets.every((bullet, index) => bullet.at >= 0 && bullet.at * 30 < scene.durationInFrames && (!index || bullet.at >= scene.bullets[index - 1].at)));
  }
}
for (const interval of plan.responseIntervals) {
  const scene = lesson.scenes.find(item => item.id === interval.sceneId);
  const timing = answerTiming(scene.revealDelays);
  assert.equal(interval.frames, 360);
  assert.equal(interval.endFrame - interval.startFrame, 360);
  assert.equal(timing.fadeStart, interval.endFrame);
  assert.equal(scene.revealDelays.stepAts.length, scene.answerSteps.length);
  assert.equal(scene.calculationPresentation.stages.length, scene.answerSteps.length);
  const context = scene.calculationPresentation.focusedContext[0];
  assert.equal(context.at, 0);
  assert(context.task && context.secondaryTask && context.title && context.lines.length === 4);
  for (let index = 0; index < scene.calculationPresentation.stages.length; index++) {
    const stage = scene.calculationPresentation.stages[index];
    assert.equal(stage.lineAts.length, stage.lines.length);
    assert(stage.lineAts.every((at, lineIndex) => at >= interval.endFrame && at < scene.durationInFrames && at >= scene.revealDelays.stepAts[index] && (!lineIndex || at >= stage.lineAts[lineIndex - 1])));
  }
}
const require = createRequire(import.meta.url);
const remotion = path.join(path.dirname(require.resolve('remotion/package.json')), 'dist/esm/index.mjs');
const stub = `export * from ${JSON.stringify(remotion)}; export const useCurrentFrame=()=>globalThis.__c3Frame; export const useVideoConfig=()=>({fps:30,width:1920,height:1080,durationInFrames:4000}); export const staticFile=p=>p;`;
const code = `import React from 'react'; import {renderToStaticMarkup} from 'react-dom/server'; import {QuickCheckSlide} from './src/slides/QuickCheckSlide'; export function render(scene,lesson,frame){globalThis.__c3Frame=frame; return renderToStaticMarkup(React.createElement(QuickCheckSlide,{scene,lesson,sceneIndex:7,totalScenes:11}));}`;
const bundle = await build({stdin: {contents: code, resolveDir: root, loader: 'tsx'}, bundle: true, write: false, platform: 'node', format: 'esm', jsx: 'automatic', packages: 'external', plugins: [{name: 'local-author-frame-hooks', setup(builder) {
  builder.onResolve({filter: /^remotion$/}, () => ({path: 'hooks', namespace: 'hooks'}));
  builder.onLoad({filter: /.*/, namespace: 'hooks'}, () => ({contents: stub, loader: 'js', resolveDir: root}));
}}]});
const temporaryBundle = base + '/author-markup-temporary.mjs';
writeFileSync(temporaryBundle, bundle.outputFiles[0].text, {flag: 'wx'});
const renderedCases = [];
try {
  const renderer = await import(pathToFileURL(path.resolve(temporaryBundle)));
  for (const interval of plan.responseIntervals) {
    const scene = lesson.scenes.find(item => item.id === interval.sceneId);
    const frames = [...new Set([0, 60, interval.startFrame, interval.endFrame - 1, interval.endFrame, ...scene.revealDelays.stepAts, ...scene.calculationPresentation.stages.flatMap(stage => stage.lineAts.flatMap(at => [at - 1, at, at + 16])), scene.durationInFrames - 60])];
    for (const frame of frames) {
      const markup = renderer.render(scene, lesson, frame);
      assert(markup.includes('data-calculation-focused-context="0"'));
      assert(!markup.includes('data-calculation-trail'));
      for (const given of scene.calculationPresentation.focusedContext[0].lines) assert(markup.includes(htmlText(given)));
      const active = scene.revealDelays.stepAts.reduce((index, at, i) => frame >= at ? i : index, -1);
      assert.equal(markup.includes('data-calculation-working'), active >= 0);
      if (frame < interval.endFrame) assert(!markup.includes('data-calculation-working'));
      const opacity = [...markup.matchAll(/data-calculation-line="true" style="opacity:([^;]+)/g)].map(match => Number(match[1]));
      if (active >= 0) {
        const stage = scene.calculationPresentation.stages[active];
        assert.equal(opacity.length, stage.lines.length);
        stage.lineAts.forEach((at, index) => {if (frame <= at) assert.equal(opacity[index], 0);});
      }
      renderedCases.push({sceneId: scene.id, frame, activeStage: active, resultOpacities: opacity, markupSha256: hash(Buffer.from(markup))});
    }
  }
} finally {unlinkSync(temporaryBundle);}
const modelCases = [{a: 5,b:1,limitA:4,limitB:2}, {a:2,b:0.5,limitA:5/3,limitB:5/6}, {a:1,b:1,limitA:4/3,limitB:2/3}];
for (const row of modelCases) {
  const total = row.a + row.b;
  assert(Math.abs(row.limitA + row.limitB - total) < 1e-12);
  assert(Math.abs(row.limitA - 2 * row.limitB) < 1e-12);
  for (const t of [0,0.01,0.1,1,2]) {
    const a = row.limitA + (row.a - row.limitA) * Math.exp(-3*t), b = total - a;
    assert(a > 0 && b > 0);
    assert(Math.abs(a+b-total) < 1e-12);
    if (t === 0) {assert(Math.abs(a-row.a)<1e-12);assert(Math.abs(b-row.b)<1e-12);}
  }
}
const draft = checkProductionBrief(root, base + '/production-brief.json', {stage: 'draft'});
const recording = checkProductionBrief(root, base + '/production-brief.json', {stage: 'recording'});
assert(draft.ready);
assert(!recording.ready && recording.blockers.some(item => item.code === 'BRIEF_REVIEW_PENDING'));
assert.equal(read('production-brief.json').scriptReview.status, 'pending');
assert.deepEqual(read('production-brief.json').visualIntegration.blockedScenes, proposal.blockedScenes);
const validation = spawnSync(process.execPath, ['scripts/validate-lesson.mjs', base + '/lesson.json'], {encoding: 'utf8', windowsHide: true});
assert.equal(validation.status, 0, validation.stdout + validation.stderr);
const files = ['lesson.json','remotion-props.json','production-brief.json','narration-plan.json','traceability.json','visual-implementation-proposal.json','prepare-selected.mjs','check-author-package.mjs','README.md'];
const inputs = files.map(name => {const p = base+'/'+name, bytes = readFileSync(p); assert(!bytes.toString().includes('\u2014') && !bytes.toString().includes('\ufffd')); return {path:p,sha256:hash(bytes),bytes:bytes.length};});
const report = {schemaVersion:1,status:'pass',reviewType:'Author exact-source, model-reference and synthetic React-markup checks only',source:{path:base+'/lesson.json',sha256:hash(sourceBytes)},preparation:{path:preparationPath,sha256:hash(preparationBytes)},inputs,
  results:{speechExactlyPreserved:true,spokenWords:1184,recordingSegments:12,scenes:11,portablePropsExact:true,noAudioOrCaptionsOrMeasuredHolds:true,noProhibitedPunctuation:true,noUnsupportedOrFlawedDiagramAttached:true,meaningfulHookCardsAvoidGenericAtomFallback:true,twoDistinctCompleteAttempts:true,twoPlannedTwelveSecondIntervals:true,bulletAtSeconds:true,stageAndLineAtsLocalFrames:true,modelReferenceMath:true},
  timeline:{...lessonTimeline(lesson),allTimingsEstimated:true},renderedCases,draftBrief:draft,recordingBrief:recording,lessonValidation:{exitCode:validation.status,stdout:validation.stdout,stderr:validation.stderr},
  limitations:['No independent exact-selected-source pass.', 'Six accepted staged visual treatments remain blocked pending isolated implementation.', 'Synthetic SSR verifies DOM gates and retained prompts, not native glyph bounds, actual audio/caption timing, device fit, continuous playback, human listening or learner comprehension.', 'Model mathematics checks silent references, not any implemented graph simulation.']};
writeFileSync(base+'/author-checks.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({source:report.source.sha256,draftReady:draft.ready,recordingReady:recording.ready,syntheticCases:renderedCases.length,lessonValidationExit:validation.status}));
