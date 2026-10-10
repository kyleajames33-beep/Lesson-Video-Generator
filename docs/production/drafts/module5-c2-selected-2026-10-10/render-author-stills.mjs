import {readFileSync, writeFileSync, mkdirSync, cpSync} from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {bundle} from '@remotion/bundler';
import {openBrowser, renderStill, selectComposition} from '@remotion/renderer';
import {lessonTimeline} from '../../../../src/lesson/timeline.mjs';

const selected = 'docs/production/drafts/module5-c2-selected-2026-10-10';
const output = path.resolve('out/prototypes/module5-c2-selected-2026-10-10/author-stills');
mkdirSync(output, {recursive: true});
const publicDir = path.join(output, 'public');
mkdirSync(publicDir, {recursive: true});
cpSync('public/fonts', path.join(publicDir, 'fonts'), {recursive: true});
const sourceBytes = readFileSync(path.join(selected, 'lesson.json'));
const lesson = JSON.parse(sourceBytes);
const inputProps = {lesson};
const hash = value => createHash('sha256').update(value).digest('hex');
const serveUrl = await bundle({entryPoint: path.resolve('src/dev/release-entry.tsx'), publicDir,
  outDir: path.join(output, 'bundle'), enableCaching: true});
const browser = await openBrowser('chrome', {logLevel: 'error'});
const composition = await selectComposition({serveUrl, id: 'Lesson-release', inputProps, puppeteerInstance: browser, envVariables: {}});
const timeline = lessonTimeline(lesson);
const transfer = lesson.scenes.find(s => s.id === 'c2-transfer');
const checks = [
  ['c2-hook', 730, 'hook-reverse'], ['c2-model', 100, 'model-A-only'], ['c2-model', 1240, 'model-B-forms'],
  ['c2-collision', 1000, 'association'], ['c2-rates', 1000, 'rates-limit'], ['c2-amounts', 800, 'amounts-limit'],
  ['c2-catalyst', 990, 'catalyst-early'], ['c2-catalyst', 1250, 'catalyst-limit'],
  ['c2-transfer', transfer.revealDelays.answerVisibleStart - 1, 'transfer-hold-end'],
  ['c2-transfer', transfer.revealDelays.answerVisibleStart + 30, 'transfer-first-answer'],
  ['c2-transfer', transfer.calculationPresentation.stages[2].lineAts[0] + 30, 'transfer-final-answer']
];
const records = [];
try {
  for (const [sceneId, localFrame, name] of checks) {
    const startFrame = timeline.scenes.find(s => s.scene.id === sceneId).startFrame;
    const globalFrame = startFrame + localFrame;
    const file = path.join(output, name + '.png');
    await renderStill({serveUrl, composition, inputProps, frame: globalFrame, imageFormat: 'png', output: file,
      scale: 1, overwrite: true, puppeteerInstance: browser, envVariables: {}, logLevel: 'error'});
    records.push({sceneId, localFrame, globalFrame, file: path.relative(process.cwd(), file).replaceAll('\\', '/'), sha256: hash(readFileSync(file)), dimensions: [1920, 1080]});
    console.log(name + ': native still rendered');
  }
} finally { await browser.close({silent: true}); }
writeFileSync(path.join(output, 'frames.json'), JSON.stringify({evidenceType: 'silent native stills only',
  selectedLessonPath: selected + '/lesson.json', selectedLessonSha256: hash(sourceBytes),
  componentSha256: hash(readFileSync('src/slides/diagrams/kinds/chem-y12-m5/Module5ApproachDiagram.tsx')),
  dimensions: [1920, 1080], fps: 30, noAudioSelected: true, allCueTimingsEstimated: true, records}, null, 2) + '\n');
