// Bounded asset preview only. Run from the repository root with Node.
import {bundle} from '@remotion/bundler';
import {renderMedia, renderStill, selectComposition} from '@remotion/renderer';
import {mkdir, copyFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const artifacts = path.join(dir, 'artifacts');
const publicDir = path.join(artifacts, 'public');
await mkdir(path.join(publicDir, 'fonts'), {recursive: true});
await copyFile(path.resolve('public/fonts/inter-tight-latin-wght-normal.woff2'), path.join(publicDir, 'fonts/inter-tight-latin-wght-normal.woff2'));
const serveUrl = await bundle({entryPoint: path.join(dir, 'entry.tsx'), publicDir, outDir: path.join(artifacts, 'bundle')});
const desktop = await selectComposition({serveUrl, id: 'PhysicsProjectileKitPreview'});
const phone = await selectComposition({serveUrl, id: 'PhysicsProjectileKitPhone'});
for (const [name, frame] of [['launch', 45], ['apex', 180], ['descent', 270]]) {
  await renderStill({serveUrl, composition: desktop, output: path.join(artifacts, `desktop-${name}.png`), frame});
  await renderStill({serveUrl, composition: phone, output: path.join(artifacts, `phone-${name}.png`), frame, scale: 390 / 1080});
  console.log(`Rendered ${name} at desktop and phone size.`);
}
console.log('Rendering silent preview.');
let lastBucket = -1;
await renderMedia({serveUrl, composition: desktop, codec: 'h264', muted: true, outputLocation: path.join(artifacts, 'projectile-kit-silent.mp4'), scale: 2 / 3, concurrency: 1, timeoutInMilliseconds: 120000, onProgress: ({progress}) => {
  const bucket = Math.floor(progress * 10);
  if (bucket > lastBucket) {lastBucket = bucket; console.log(`Preview ${bucket * 10}%`);}
}});
console.log('Physics visual kit artifacts:', artifacts);
