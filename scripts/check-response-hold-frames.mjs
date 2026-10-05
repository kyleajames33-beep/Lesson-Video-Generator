import {bundle} from '@remotion/bundler';
import {renderStill, selectComposition} from '@remotion/renderer';
import {cpSync, mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import path from 'node:path';

const dir = path.resolve('out/checks/response-timeline');
const inputProps = JSON.parse(readFileSync(path.join(dir, 'variant-A.reveal-props.json'), 'utf8'));
const publicDir = path.join(dir, 'public');
mkdirSync(publicDir, {recursive: true});
// This fixture uses only fonts. Do not copy the entire audio/art catalogue
// every time the answer boundary is checked.
cpSync(path.resolve('public/fonts'), path.join(publicDir, 'fonts'), {recursive: true});
const serveUrl = await bundle({entryPoint: path.resolve('src/prototypes/response-hold-check.tsx'), outDir: path.join(dir, 'bundle'), publicDir, enableCaching: true});
const composition = await selectComposition({serveUrl, id: 'Response-hold-check', inputProps});
const checks = [
  {label: 'before-answer', frame: inputProps.answerVisibleStart - 1},
  {label: 'answer-boundary', frame: inputProps.answerVisibleStart},
  {label: 'after-answer', frame: inputProps.answerVisibleStart + 48},
];
for (const check of checks) {
  await renderStill({serveUrl, composition, inputProps, frame: check.frame, output: path.join(dir, check.label + '.png'), imageFormat: 'png', scale: 0.5, overwrite: true, logLevel: 'error'});
}
writeFileSync(path.join(dir, 'frame-check.json'), JSON.stringify({fixture: true, type: 'saved-still-boundary-check-not-full-playback', inputProps, frames: checks}, null, 2) + '\n');
console.log(JSON.stringify({directory: 'out/checks/response-timeline', frames: checks}, null, 2));
