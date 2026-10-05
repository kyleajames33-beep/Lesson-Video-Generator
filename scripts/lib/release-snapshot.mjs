import {readFileSync, readdirSync, existsSync, statSync} from 'node:fs';
import path from 'node:path';
import {canonical, sha256, publicPath} from './playback-assembly.mjs';
import {alignmentPathFor} from './caption-timeline.mjs';
import {lessonTimeline} from '../../src/lesson/timeline.mjs';

function inside(root, value) {
  const file = path.resolve(root, value), relative = path.relative(root, file);
  if (!relative || relative.startsWith('..') || path.isAbsolute(relative)) throw new Error('Release dependencies must stay inside the workspace.');
  return file;
}
const relative = (root, file) => path.relative(root, file).replace(/\\/g, '/');
function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, {withFileTypes: true}).flatMap(entry => {
    if (entry.isSymbolicLink()) throw new Error('Release dependency trees cannot contain symlinks.');
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}

export function captureRelease(root, options) {
  const lessonFile = inside(root, options.lessonPath);
  const lesson = JSON.parse(readFileSync(lessonFile, 'utf8'));
  const timeline = lessonTimeline(lesson);
  const dependencies = new Map();
  const add = (file, role, required = true) => {
    file = inside(root, file);
    const name = relative(root, file), previous = dependencies.get(name);
    const present = existsSync(file) && statSync(file).isFile();
    dependencies.set(name, {path: name, roles: [...new Set([...(previous?.roles ?? []), role])].sort(),
      required: required || previous?.required || false, sha256: present ? sha256(readFileSync(file)) : null});
    return present;
  };
  add(lessonFile, 'lesson');
  // Conservative tracking of shared render source, excluding other lesson data.
  for (const file of walk(path.join(root, 'src')).filter(f => /\.(tsx?|mjs|mts|css|json)$/.test(f))) {
    const name = relative(root, file);
    if (name.startsWith('src/data/') || name.startsWith('src/prototypes/data/')) continue;
    add(file, 'render-source');
  }
  for (const file of walk(path.join(root, 'public/fonts'))) add(file, 'font');
  for (const name of ['package.json', 'package-lock.json', 'remotion.config.ts']) add(path.join(root, name), 'render-environment');
  for (const file of walk(path.join(root, 'scripts')).filter(f => /\.(mjs|json)$/.test(f) && !f.endsWith('.test.mjs'))) add(file, 'production-tool');
  const registryFile = path.join(root, 'src/assets/index.ts');
  const registry = existsSync(registryFile) ? readFileSync(registryFile, 'utf8') : '';
  const assets = new Map([...registry.matchAll(/(\w+)\s*:\s*staticFile\('([^']+)'\)/g)].map(m => [m[1], m[2]]));
  const audio = value => {
    const file = publicPath(root, value);
    add(file, 'audio'); add(alignmentPathFor(file), 'alignment');
    add(file.replace(/\.[^.]+$/, '.generation.json'), 'generation-settings', false);
    const assemblyFile = file.replace(/\.[^.]+$/, '.assembly.json');
    if (add(assemblyFile, 'assembly-plan', false)) {
      const assembly = JSON.parse(readFileSync(assemblyFile, 'utf8'));
      for (const item of assembly.dependencies ?? []) {
        const source = publicPath(root, item.audioFile);
        add(source, 'selected-take'); add(alignmentPathFor(source), 'selected-take-alignment');
        add(source.replace(/\.[^.]+$/, '.generation.json'), 'selected-take-settings', false);
      }
    }
  };
  if (lesson.introVoiceover?.audioFile && timeline.introFrames > 0) audio(lesson.introVoiceover.audioFile);
  if (lesson.backgroundMusic && timeline.introFrames > 0) add(publicPath(root, lesson.backgroundMusic), 'music');
  for (const scene of lesson.scenes) {
    if (scene.voiceover?.audioFile) audio(scene.voiceover.audioFile);
    if (scene.image) {
      const asset = assets.get(scene.image);
      if (!asset) throw new Error(`Unregistered scene image: ${scene.image}`);
      add(publicPath(root, asset), 'artwork');
    }
    if (scene.diagram?.type === 'lottie') add(publicPath(root, scene.diagram.src), 'diagram');
  }
  for (const file of options.inputs ?? []) add(inside(root, file), 'explicit-input');
  if (!options.renderConfig) throw new Error('An explicit render config JSON is required.');
  const configFile = inside(root, options.renderConfig);
  const renderConfig = JSON.parse(readFileSync(configFile, 'utf8'));
  if (!renderConfig.entryPoint || !renderConfig.compositionId || !renderConfig.codec) throw new Error('Render config needs entryPoint, compositionId and codec.');
  add(configFile, 'render-config'); add(inside(root, renderConfig.entryPoint), 'entry-point');
  for (const file of options.artifacts ?? []) add(inside(root, file), 'export');
  const files = [...dependencies.values()].sort((a, b) => a.path.localeCompare(b.path));
  const payload = {schemaVersion: 1, options, renderConfig,
    timeline: {fps: timeline.fps, durationInFrames: timeline.durationInFrames, introFrames: timeline.introFrames}, files};
  return {...payload, packageSha256: sha256(canonical(payload)), capturedAt: new Date().toISOString(),
    status: 'dependency-snapshot-unreviewed', missingRequired: files.filter(f => f.required && !f.sha256).map(f => f.path),
    limitations: ['Snapshot hashes establish local versions, not a claim that an export was rendered from them.',
      'Shared render code and production tools are tracked conservatively.',
      'Pass dictionaries, custom assets, external props and other inputs explicitly.',
      'Science, listening, device review and publication approval require separate evidence.']};
}

export function verifyRelease(root, snapshot) {
  const {schemaVersion, options, renderConfig, timeline, files} = snapshot;
  if (schemaVersion !== 1 || snapshot.packageSha256 !== sha256(canonical({schemaVersion, options, renderConfig, timeline, files}))) {
    return {valid: false, changes: [{code: 'SNAPSHOT_INVALID', path: null}], missingRequired: []};
  }
  const current = captureRelease(root, options);
  const old = new Map(files.map(f => [f.path, f])), fresh = new Map(current.files.map(f => [f.path, f]));
  const changes = [...new Set([...old.keys(), ...fresh.keys()])].sort().flatMap(name => {
    if (canonical(old.get(name)) === canonical(fresh.get(name))) return [];
    return [{code: !old.has(name) ? 'DEPENDENCY_ADDED' : !fresh.has(name) ? 'DEPENDENCY_REMOVED' : 'DEPENDENCY_CHANGED', path: name}];
  });
  return {valid: changes.length === 0 && current.packageSha256 === snapshot.packageSha256 && !current.missingRequired.length,
    packageSha256: current.packageSha256, changes, missingRequired: current.missingRequired};
}
