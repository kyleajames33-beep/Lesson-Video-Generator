import {readFileSync, writeFileSync, existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {verifyAssembly} from '../../../scripts/lib/verify-assembly.mjs';
import {answerTiming} from '../../../src/lesson/answer-timing.mjs';

const docs = 'docs/production/module5-c2-voiced-preparation-2026-10-10';
const out = 'out/prototypes/module5-c2-voiced-2026-10-10';
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const hash = path => sha(readFileSync(path));
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const assert = (condition, reason) => {if (!condition) throw new Error(reason);};
const json = object => JSON.stringify(object, null, 2) + '\n';
const sourcePath = `${out}/narrated.lesson.json`, v1 = read(sourcePath), v2 = structuredClone(v1);
assert(hash(sourcePath) === '68a69277f041d60281369572e4f670d37e22ece12ab000706d638324bd103a90', 'V1 source changed.');
const protectedFiles = [`${out}/assembled.lesson.json`, `${out}/assembled.remotion-props.json`, `${out}/assembly-record.json`, sourcePath, `${out}/remotion-props.json`, `${out}/captions.srt`, `${out}/captions.vtt`, `${docs}/production-brief.json`, `${docs}/measured-cue-report.json`, `${docs}/final-author-check.json`, 'src/slides/diagrams/kinds/chem-y12-m5/Module5ApproachDiagram.tsx', 'src/slides/shared/Module5EvidenceBoard.tsx'];
const protectedHashes = protectedFiles.map(path => ({path, sha256: hash(path)}));
const model = v2.scenes.find(s => s.id === 'c2-model'), transfer = v2.scenes.find(s => s.id === 'c2-transfer');
assert(JSON.stringify(model.bullets.map(b => Math.round(b.at * v2.fps))) === '[113,588,376]', 'Unexpected model cues.');
const modelBefore = structuredClone(model.bullets);
model.bullets = [model.bullets[0], model.bullets[2], model.bullets[1]];
const stageBefore = structuredClone(transfer.calculationPresentation.stages);
for (const index of [0, 2]) {
  const stage = transfer.calculationPresentation.stages[index];
  assert(stage.lines.length === 2 && stage.lineAts.length === 2, 'Unexpected stage row shape.');
  stage.lines = [stage.lines[1], stage.lines[0]];
  stage.lineAts = [stage.lineAts[1], stage.lineAts[0]];
}
// Reversing only the three display arrays must recover the exact original lesson.
const recovered = structuredClone(v2);
recovered.scenes.find(s => s.id === 'c2-model').bullets = modelBefore;
recovered.scenes.find(s => s.id === 'c2-transfer').calculationPresentation.stages = stageBefore;
assert(JSON.stringify(recovered) === JSON.stringify(v1), 'Unexpected change outside three display arrays.');
assert(model.bullets.every((b, i, array) => i === 0 || b.at >= array[i - 1].at), 'Model display cues not monotonic.');
for (const stage of transfer.calculationPresentation.stages) assert(stage.lineAts.every((frame, i, array) => i === 0 || frame >= array[i - 1]), 'Feedback display cues not monotonic.');
for (const scene of v2.scenes.filter(s => s.voiceover)) assert(!verifyAssembly(scene, v2.fps).length, `Assembled media/captions changed: ${scene.id}`);
const answer = answerTiming(transfer.revealDelays, transfer.responseHold);
assert(answer.fadeStart === 1472 && transfer.responseHold.startFrame === 1172 && transfer.responseHold.endFrame === 1472, 'Response boundary changed.');
const stages = transfer.calculationPresentation.stages;
const trailChecks = transfer.revealDelays.stepAts.map((frame, activeIndex) => ({frame, activeIndex, established: stages.slice(0, activeIndex).map(stage => stage.summary)}));
assert(JSON.stringify(stages.map(s => s.summary)) === JSON.stringify(stageBefore.map(s => s.summary)), 'Established summaries changed.');
assert(trailChecks[1].established[0] === 'C initially increases.' && trailChecks[2].established[1] === 'Supplied rates justify direction.', 'Established-result trail changed.');
const candidatePath = `${out}/narrated-v2.lesson.json`, propsPath = `${out}/remotion-props-v2.json`;
const report = {schemaVersion: 1, status: 'author-order-correction-pending-independent-bounded-follow-up',
  parent: {path: sourcePath, sha256: hash(sourcePath)},
  scope: 'Reorder display bullet objects and paired feedback text/cue rows only. All spoken words, audio, captions, cue values, durations, stage order, summaries and components remain unchanged.',
  model: {oldBulletObjects: modelBefore, newBulletObjects: model.bullets, oldFrameOrder: [113,588,376], newFrameOrder: [113,376,588]},
  transfer: {oldStages: stageBefore, newStages: stages, establishedResultTrailChecks: trailChecks, responseHold: transfer.responseHold, firstAnswerFrame: answer.fadeStart},
  checks: {onlyRequestedDisplayArraysChanged: true, exactSpokenWordsUnchanged: true, selectedMediaAndCaptionsVerified: true, allCueValuesUnchanged: true, displayedRowCuesMonotonic: true, establishedResultTrailUnchanged: true, responseGateUnchanged: true},
  protectedFiles: protectedHashes,
  outputs: [{path: candidatePath, sha256: sha(json(v2))}, {path: propsPath, sha256: sha(json({lesson:v2}))}],
  limitation: 'Source and consumer checks only. V2 independent source/timing review, exact voiced playback and human listening remain pending. V1 SRT and VTT remain valid because captions and timeline are unchanged.'};
const reportPath = `${docs}/v2-order-correction.json`, briefPath = `${docs}/production-brief-v2.json`;
const brief = read(`${docs}/production-brief.json`);
brief.source = {lessonPath: candidatePath, lessonSha256: report.outputs[0].sha256};
brief.scriptReview = {status:'pending', reviewer:'', evidence:null, scope:'V2 display order correction requires independent bounded follow-up. All reviewed narration and measured cue values remain unchanged.'};
brief.voicedPreview = {status:'pending', reviewer:'', mode:'', inputSnapshotPath:'', evidence:null, humanListening:{status:'pending', reviewer:'', mode:'human-listening', evidence:null}};
brief.orderCorrectionEvidence = {path:reportPath, sha256:sha(json(report))};
brief.scenes.find(s => s.sceneId === 'c2-model').motionPurpose += ' Display bullet rows follow their spoken order at frames 113, 376 and 588, retaining the paired seconds values.';
brief.scenes.find(s => s.sceneId === 'c2-transfer').motionPurpose += ' Display rows follow spoken order: C increase at 1472 then D-to-C reasoning at 1544; sooner at 2339 then same final D at 2413. Each exact row cue remains paired with its original text. Established summaries and stage transitions are unchanged.';
brief.limitation = report.limitation;
const outputs = [[candidatePath,json(v2)], [propsPath,json({lesson:v2})], [reportPath,json(report)], [briefPath,json(brief)]];
for (const [path, contents] of outputs) {assert(!existsSync(path), `Refusing to overwrite ${path}`); assert(!contents.includes('\u2014'), 'Forbidden punctuation.');}
if (process.argv.includes('--write')) for (const [path, contents] of outputs) writeFileSync(path, contents, {flag:'wx'});
for (const file of protectedHashes) assert(hash(file.path) === file.sha256, `Protected input changed: ${file.path}`);
console.log(json({status:report.status, outputs:outputs.map(([path,contents]) => ({path,sha256:sha(contents)})), checks:report.checks, establishedResultTrail:trailChecks}));
