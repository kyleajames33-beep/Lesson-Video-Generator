import {readFileSync, writeFileSync, mkdirSync, existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {alignmentPathFor, alignmentToCaptions, lessonCaptionCues, groupCaptionCues, toSrt, toVtt} from '../../../scripts/lib/caption-timeline.mjs';
import {answerTiming} from '../../../src/lesson/answer-timing.mjs';

// Run from the repository root. This only creates additive candidates and evidence.
const base = 'out/prototypes/module5-c2-voiced-2026-10-10';
const docs = 'docs/production/module5-c2-voiced-preparation-2026-10-10';
const assembledPath = `${base}/assembled.lesson.json`;
const sourcePath = 'docs/production/drafts/module5-c2-selected-2026-10-10/lesson.json';
const sourceHash = 'ce66abda591b0dbf8bff7371cb87d43fb0f6fce5bd0c819e80d21796248dac90';
const sha = value => createHash('sha256').update(value).digest('hex');
const hashFile = p => sha(readFileSync(p));
const read = p => JSON.parse(readFileSync(p, 'utf8'));
const assert = (test, reason) => {if (!test) throw new Error(reason);};
assert(hashFile(sourcePath) === sourceHash, 'Frozen selected source drift.');
const source = read(sourcePath), assembled = read(assembledPath), lesson = structuredClone(assembled);
const fps = lesson.fps, record = read(`${base}/assembly-record.json`);
assert(fps === 30, 'Unexpected fps.');
const report = {schemaVersion: 1, status: 'measured-author-candidate-pending-independent-review-and-voiced-preview',
  units: {bulletAt: 'seconds', revealDelays: 'scene-local frames', diagramProps: 'scene-local frames', lineAts: 'scene-local frames'},
  rounding: 'Cue start frames ceil(aligned seconds * fps), never before their aligned words.',
  source: {path: sourcePath, sha256: sourceHash},
  assemblyInputs: ['assembled.lesson.json', 'assembled.remotion-props.json', 'assembly-record.json'].map(p => ({path: `${base}/${p}`, sha256: hashFile(`${base}/${p}`)})),
  consumerInputs: ['src/slides/diagrams/kinds/chem-y12-m5/Module5ApproachDiagram.tsx', 'src/animations/BulletReveal.tsx', 'src/lesson/answer-timing.mjs', 'src/slides/QuickCheckSlide.tsx', 'src/slides/shared/Module5EvidenceBoard.tsx', 'src/slides/ConceptSlide.tsx', 'src/slides/SummarySlide.tsx', 'src/lesson/timeline.mjs'].map(p => ({path:p, sha256:hashFile(p)})), scenes: []};
for (const scene of lesson.scenes) {
  const original = source.scenes.find(s => s.id === scene.id);
  assert(original && original.voiceover?.text === scene.voiceover?.text, `Spoken source drift ${scene.id}.`);
  if (!scene.voiceover) {assert(JSON.stringify(scene) === JSON.stringify(original), 'Silent title drift.'); continue;}
  const aPath = alignmentPathFor(scene.voiceover.audioFile), alignment = read(aPath);
  const text = alignment.characters.join('');
  assert(text.replace(/\s+/g,' ').trim() === scene.voiceover.text.replace(/\s+/g,' ').trim(), `Alignment text drift ${scene.id}.`);
  assert(!scene.voiceover.text.includes('\u2014'), 'Forbidden punctuation.');
  assert(JSON.stringify(alignmentToCaptions(alignment)) === JSON.stringify(scene.captions), `Caption derivation drift ${scene.id}.`);
  const evidence = record.scenes.find(s => s.sceneId === scene.id).provenance;
  assert(hashFile(scene.voiceover.audioFile) === evidence.audioSha256 && hashFile(aPath) === evidence.alignmentSha256, 'Assembled media drift.');
  const entry = {sceneId: scene.id, spokenTextSha256: sha(scene.voiceover.text), audioFile: scene.voiceover.audioFile,
    audioSha256: evidence.audioSha256, alignmentPath: aPath, alignmentSha256: evidence.alignmentSha256,
    oldDurationInFrames: scene.durationInFrames, mediaFrames: evidence.durationFrames, cues: []};
  const cue = (phrase, purpose, edge = 'start') => {
    const i = text.indexOf(phrase);
    assert(i >= 0 && text.indexOf(phrase, i + 1) === -1, `Missing or ambiguous phrase: ${scene.id}: ${phrase}`);
    const seconds = edge === 'end' ? alignment.character_end_times_seconds[i + phrase.length - 1] : alignment.character_start_times_seconds[i];
    const frame = Math.ceil(seconds * fps - 1e-8);
    entry.cues.push({phrase, edge, alignedSeconds: seconds, frame, purpose}); return frame;
  };
  const rd = scene.revealDelays ??= {};
  if (scene.id === 'c2-hook') {
    rd.body = cue('As B forms,', 'Question text introduces the overlap challenge.');
    rd.diagram = cue('Imagine a reversible reaction', 'A-only diagram enters with the stated starting system.');
    scene.diagram.props.reverseAt = rd.callout = cue('It can turn back', 'Reverse arrow and overlap answer start with the feedback.');
  }
  if (scene.id === 'c2-model') {
    scene.bullets[0].at = cue('One A can become one B', 'One-to-one conversion statement.') / fps;
    scene.bullets[1].at = cue('At the beginning', 'A-only declaration.') / fps;
    scene.bullets[2].at = cue('we are following a simple model', 'First-order restriction is introduced with the declared model.') / fps;
    rd.secondary = cue('The container is closed', 'Supporting fixed-system qualifiers.');
    // Complete the zero-reverse explanation before any B appears.
    scene.diagram.props.runAt = cue('there is no B to convert yet.', 'Model remains exactly A-only through the zero-reverse explanation.', 'end');
    rd.callout = cue('It does not mean', 'Closed versus insulated distinction.');
    entry.modelFirstPositiveReverseFrame = scene.diagram.props.runAt + 1;
  }
  if (scene.id === 'c2-collision') {
    scene.bullets[0].at = cue('The particles also need enough energy', 'Effective collision conditions.') / fps;
    scene.bullets[1].at = cue('With more nitrogen dioxide molecules', 'More concentration gives more meeting opportunities.') / fps;
    rd.diagram = cue('For example, two nitrogen dioxide molecules', 'Distinct two-to-one association visual enters with its example.');
    rd.callout = cue('Activation energy is', 'Barrier definition.');
    rd.secondary = cue('Our A-to-B arrows only track conversion', 'Separate conversion model from collision mechanism.');
  }
  if (scene.id === 'c2-rates') {
    const p = scene.diagram.props;
    p.forwardAt = cue('As A decreases', 'Forward curve and cause appear together.');
    p.reverseAt = cue('As B builds up', 'Reverse curve and cause appear together.');
    scene.bullets[0].at = p.forwardAt / fps; scene.bullets[1].at = p.reverseAt / fps;
    p.limitAt = rd.callout = cue('At equilibrium,', 'Separate exact limiting-state card, after both finite traces.');
    rd.secondary = cue('The rate graph shows', 'Scale and finite-versus-limit qualifier.');
    assert(p.reverseAt + 150 <= p.limitAt, 'Rates limit would precede completed curves.');
  }
  if (scene.id === 'c2-amounts') {
    const p = scene.diagram.props;
    p.forwardAt = cue('A decreases', 'A concentration curve.');
    p.reverseAt = cue('B increases', 'B concentration curve.');
    p.limitAt = rd.secondary = cue('Their two final levels', 'Unequal limiting-concentration statement is separate from finite traces.');
    scene.bullets[0].at = cue('Rate tells us', 'Rate definition.') / fps;
    scene.bullets[1].at = cue('Concentration tells us', 'Concentration definition.') / fps;
    rd.callout = cue('If a mixture began with excess B', 'A different initial condition can reverse approach.');
  }
  if (scene.id === 'c2-catalyst') {
    const p = scene.diagram.props;
    scene.bullets[0].at = cue('A catalyst provides', 'Lower effective activation barrier.') / fps;
    scene.bullets[1].at = cue('It does not change the energies', 'Unchanged overall endpoint energies.') / fps;
    p.graphAt = cue('or favour a different final equilibrium composition.', 'Introduce the composition comparison after the unchanged-endpoint explanation, allowing both coded curve traces to reach the later comparison marker.');
    cue('In our comparison,', 'Narration now refers to the established concentration comparison.');
    p.limitAt = cue('same final level sooner', 'Shared limiting level stated explicitly.');
    p.comparisonAt = cue('At an early comparison time,', 'Early-time marker appears only for the early comparison.');
    p.comparisonEnd = rd.callout = cue('Once both mixtures reach equilibrium,', 'Early marker removed when final equilibrium is compared.');
    rd.secondary = cue('Suppose we repeat the same starting mixture', 'Conditions and schematic qualifier remain with comparison setup.');
    entry.curvesFullyDrawnAt = p.graphAt + 270;
    entry.bothCurvesReachEarlyMarkerByFrame = p.graphAt + 160;
    assert(entry.bothCurvesReachEarlyMarkerByFrame <= p.comparisonAt, 'Early marker precedes the uncatalysed trace at its comparison coordinate.');
    entry.earlyMarkerRemovalFrame = p.comparisonEnd;
  }
  if (scene.id === 'c2-transfer') {
    const gap = evidence.items.find(i => i.kind === 'silence');
    assert(gap && gap.endFrame - gap.startFrame === 300, 'Response silence is not exactly ten seconds.');
    assert(scene.responseHold.startFrame === gap.startFrame && scene.responseHold.endFrame === gap.endFrame, 'Response interval drift.');
    rd.responseHoldStart = gap.startFrame;
    rd.pausePrompt = cue('Take a moment,', 'Pause invitation before assembled response silence.');
    const first = cue('C initially increases.', 'First feedback result after the response interval.');
    const reverse = cue('The reverse process makes C', 'Direction reasoning line.');
    const compare = cue('at six units while', 'Compare supplied rates after direction reasoning.');
    const net = cue('net four units towards C.', 'Net result is withheld until its exact spoken phrase.');
    const finalStage = cue('With the suitable catalyst,', 'Advance to catalyst final-composition comparison.');
    const sooner = cue('sooner under the same conditions.', 'Faster approach line at its spoken result.');
    const sameD = cue('It does not finish with a different equilibrium concentration of D.', 'Final D result at the explicit contrast.');
    assert(first >= gap.endFrame, 'Feedback reveal occurs in response silence.');
    rd.answerVisibleStart = first; rd.stepAts = [first, compare, finalStage];
    scene.calculationPresentation.stages[0].lineAts = [reverse, first];
    scene.calculationPresentation.stages[1].lineAts = [compare, net];
    scene.calculationPresentation.stages[2].lineAts = [sameD, sooner];
    answerTiming(rd, scene.responseHold);
    assert(scene.captions.every(c => c.endMs <= gap.startFrame / fps * 1000 + 1e-6 || c.startMs >= gap.endFrame / fps * 1000 - 1e-6), 'Caption enters silent response gap.');
    assert(groupCaptionCues(scene.captions).every(c => c.endMs <= gap.startFrame / fps * 1000 + 1e-6 || c.startMs >= gap.endFrame / fps * 1000 - 1e-6), 'Grouped caption enters silent response gap.');
    entry.response = {startFrame: gap.startFrame, endFrame: gap.endFrame, silenceFrames: 300, firstFeedbackFrame: first, captionsAbsentThroughoutInterval: true,
      stages: rd.stepAts, lineAts: scene.calculationPresentation.stages.map(s => s.lineAts)};
  }
  if (scene.id === 'c2-summary') {
    rd.takeawayAts = [cue('A reversible reaction can run in both directions', 'Opposing process recap.'), cue('Equilibrium is the balance', 'Rate versus concentration recap.'), cue('A suitable catalyst', 'Catalyst recap.')];
    rd.finalPrompt = cue('Next, we will start', 'C3 progression handoff.');
  }
  // Preserve existing 1.5-second reading tail and overlap allowance, replacing estimates.
  scene.durationInFrames = evidence.durationFrames + 45 + 24;
  entry.newDurationInFrames = scene.durationInFrames;
  entry.tailAndTransitionAllowanceFrames = 69;
  entry.finalRevealDelays = rd; entry.finalDiagramProps = scene.diagram?.props ?? {};
  entry.finalBulletCuesSeconds = scene.bullets?.map(b => ({text:b.text, at:b.at})) ?? [];
  report.scenes.push(entry);
}
const captionPackage = lessonCaptionCues(lesson);
assert(!captionPackage.warnings.length, 'Missing caption coverage.');
report.durationInFrames = captionPackage.timeline.durationInFrames;
report.durationSeconds = report.durationInFrames / fps;
report.captionCueCount = captionPackage.cues.length;
report.limitations = [
  'Character alignment and source checks are measured timing evidence. No human listening or exact voiced playback approval is supplied.',
  'Fixed graph drawing lasts 150 frames per curve. Catalyst uncatalysed curve starts 120 frames later; existing component is unchanged.',
  'Model bullet numbering briefly skips an unrevealed row because its source order is unchanged. This was a nonblocking silent review observation.',
  'Dense qualifier and narrow supporting text readability still require voiced preview on the intended device.',
  'Root added bounded silent-title support to timeline narration after historical recording preparation. This does not alter selected source or audio.'
];
const json = v => JSON.stringify(v, null, 2) + '\n';
mkdirSync(docs, {recursive:true});
const outputs = {[`${base}/narrated.lesson.json`]: json(lesson), [`${base}/remotion-props.json`]: json({lesson}),
  [`${base}/captions.srt`]: toSrt(captionPackage.cues), [`${base}/captions.vtt`]: toVtt(captionPackage.cues)};
report.outputs = Object.entries(outputs).map(([path, contents]) => ({path, sha256:sha(contents)}));
if (process.argv.includes('--write')) {
  for (const [p, contents] of Object.entries(outputs)) {assert(!existsSync(p), `Refusing to overwrite ${p}`); writeFileSync(p, contents, {flag:'wx'});}
  const p = `${docs}/measured-cue-report.json`; assert(!existsSync(p), `Refusing to overwrite ${p}`); writeFileSync(p, json(report), {flag:'wx'});
}
console.log(json(report));
