import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import {createRequire} from 'node:module';
import {build} from 'esbuild';
import {openBrowser} from '@remotion/renderer';
import {ROOT, FONTS, loadConfig} from './explainer-common.mjs';

// Evaluate every scene frame to include conditionally displayed staticFile paths,
// including paths in shared components that are absent from config.assets.
export async function collectExplainerAssets(id, directory, entrySource) {
  const output = path.resolve(directory, 'asset-scan.cjs');
  const remotion = createRequire(import.meta.url).resolve('remotion');
  const seen = new Set(FONTS);
  globalThis.__explainerAssetScan = {frame: 0, seen};
  try {
    const source = entrySource ?? (await loadConfig(id)).__entrySource;
    await build({stdin: {contents: `import React from 'react'; import {renderToStaticMarkup} from 'react-dom/server'; export {React, renderToStaticMarkup}; export {${source.exportName} as config} from ${JSON.stringify(source.modulePath)};`, resolveDir: ROOT, loader: 'tsx'}, outfile: output, bundle: true, platform: 'node', format: 'cjs', packages: 'external', jsx: 'automatic', logLevel: 'silent', plugins: [{name: 'asset-scan', setup(b) {
      b.onResolve({filter: /^remotion$/}, () => ({path: 'remotion', namespace: 'asset-scan'}));
      b.onLoad({filter: /.*/, namespace: 'asset-scan'}, () => ({contents: `export * from ${JSON.stringify(remotion)}; export const useCurrentFrame = () => globalThis.__explainerAssetScan.frame; export const useVideoConfig = () => ({id:globalThis.__explainerAssetScan.id,fps:30,width:1920,height:1080,durationInFrames:globalThis.__explainerAssetScan.duration,defaultProps:{},props:{}}); export const staticFile = p => {globalThis.__explainerAssetScan.seen.add(p); return '/'+p;};`, loader: 'js', resolveDir: ROOT}));
    }}]});
    const requireScan = createRequire(import.meta.url);
    delete requireScan.cache[output];
    const {config, React, renderToStaticMarkup} = requireScan(output);
    const scenes = [];
    globalThis.__explainerAssetScan.id = id;
    globalThis.__explainerAssetScan.duration = config.lesson.scenes.reduce((n, s) => n + s.durationInFrames, 0);
    for (const scene of config.lesson.scenes) {
      // ExplainerVideo keeps a scene mounted for its 14-frame outgoing overlap.
      for (let frame = 0; frame < scene.durationInFrames + 14; frame++) {
        globalThis.__explainerAssetScan.frame = frame;
        renderToStaticMarkup(React.createElement(config.scenes[scene.id]));
      }
      scenes.push({id: scene.id, frames: scene.durationInFrames, scannedFrames: scene.durationInFrames + 14});
    }
    return {assets: [...seen].sort(), scenes};
  } finally {
    delete globalThis.__explainerAssetScan;
    fs.rmSync(output, {force: true});
  }
}

export function assertSlimAssets(assets, pub) {
  const missing = assets.filter(rel => !fs.existsSync(path.join(pub, rel)));
  if (missing.length) throw new Error(`Referenced assets missing from slim public: ${missing.join(', ')}`);
}

// Decode in the same browser engine used by Remotion. Existence alone does not
// catch corrupt images or invalid WOFF2 files.
export async function verifyBrowserAssets(assets, pub) {
  assertSlimAssets(assets, pub);
  const server = http.createServer((req, res) => {
    const rel = decodeURIComponent(new URL(req.url, 'http://localhost').pathname).slice(1);
    if (!rel) {res.end('<!doctype html><html><body></body></html>'); return;}
    const file = path.resolve(pub, rel);
    if (!file.startsWith(path.resolve(pub) + path.sep) || !fs.existsSync(file)) {res.writeHead(404).end(); return;}
    res.setHeader('Content-Type', file.endsWith('.woff2') ? 'font/woff2' : file.endsWith('.png') ? 'image/png' : 'application/octet-stream');
    fs.createReadStream(file).pipe(res);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  let browser;
  try {
    browser = await openBrowser('chrome');
    const page = await browser.newPage({context: () => null, logLevel: 'error', indent: false, pageIndex: 0, onBrowserLog: null, onLog: () => {}});
    await page.goto({url: `http://127.0.0.1:${server.address().port}/`, timeout: 60000});
    return await page.evaluate(async (paths) => {
      const results = [];
      for (const p of paths) {
        if (/\.woff2$/i.test(p)) {
          const name = p.includes('inter-tight') ? 'Inter Tight' : 'Caveat';
          const face = new FontFace(name, `url("/${p}")`);
          await face.load(); document.fonts.add(face);
          if (!document.fonts.check(`24px "${name}"`)) throw new Error(`Font check failed: ${p}`);
          results.push({path: p, kind: 'font', status: face.status});
        } else if (/\.(png|jpe?g|webp|svg|gif|avif)$/i.test(p)) {
          const img = new Image(); img.src = '/' + p; await img.decode();
          if (!img.naturalWidth) throw new Error(`Empty image: ${p}`);
          results.push({path: p, kind: 'image', width: img.naturalWidth, height: img.naturalHeight});
        }
      }
      return results;
    }, assets);
  } finally {
    if (browser) await browser.close({silent: true});
    await new Promise(resolve => server.close(resolve));
  }
}
