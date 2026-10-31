// Check quantitative relationships against the exact model used by the preview.
import {build} from 'esbuild';
import assert from 'node:assert/strict';
import {writeFile, mkdir} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const {outputFiles} = await build({entryPoints: [path.join(dir, 'model.ts')], bundle: true, write: false, platform: 'node', format: 'esm'});
const {PILOT_MODEL: model, flightTime, projectileState: state} = await import(`data:text/javascript;base64,${Buffer.from(outputFiles[0].text).toString('base64')}`);
const close = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1e-7, `${actual} differs from ${expected}`);
close(flightTime(model), 2.4);
close(state(model, 1.2).y, 7.2);
close(state(model, 2.4).x, 38.4);
for (let i = 1; i < 240; i++) {
  const t = i / 100;
  const s = state(model, t);
  const h = 0.00001;
  close((state(model, t + h).x - state(model, t - h).x) / (2 * h), s.vx);
  close((state(model, t + h).y - state(model, t - h).y) / (2 * h), s.vy);
  close(s.y, state(model, flightTime(model) - t).y);
  assert.ok(s.y >= 0);
}
for (const invalid of [{...model, g: 0}, {...model, vx0: 0}, {...model, vy0: -1}]) assert.throws(() => flightTime(invalid));
const samples = [0, 0.6, 1.2, 1.8, 2.4].map(t => state(model, t));
const audit = {model, units: {t: 's', x: 'm', y: 'm', vx: 'm/s', vy: 'm/s', g: 'm/s²'}, samples, checks: ['2.4 s flight', '7.2 m peak at 1.2 s', '38.4 m range', 'velocity agrees with position derivatives at 239 interior times', 'height is symmetric', 'unsupported inputs rejected'], playbackApproval: 'pending: no browser surface is available in this session'};
await mkdir(path.join(dir, 'artifacts'), {recursive: true});
await writeFile(path.join(dir, 'artifacts', 'model-check.json'), JSON.stringify(audit, null, 2) + '\n');
console.log(JSON.stringify(audit, null, 2));
