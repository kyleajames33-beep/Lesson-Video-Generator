import {createHash} from 'node:crypto';
import {gzipSync, gunzipSync} from 'node:zlib';
import {lstat, readdir, readFile, mkdir, writeFile, realpath} from 'node:fs/promises';
import path from 'node:path';

const MAX_FILES = 5000, MAX_BYTES = 64 * 1024 * 1024;
const rootFiles = new Set(['AGENTS.md', 'README.md', 'package.json', 'package-lock.json', 'tsconfig.json', 'remotion.config.ts', '.gitignore', '.gitattributes']);
const extensions = /\.(?:tsx?|jsx?|mjs|cjs|mts|css|json|md|ya?ml|py|txt)$/iu;
const reviewRoots = ['out/review/quantitative-lessons/', 'out/review/thermochemistry-lessons/', 'out/review/biology-lessons/', 'out/review/science-corrections/', 'out/review/scientific-models/', 'out/review/selected-artwork/', 'out/review/curriculum/'];
export const sourceDigest = (bytes) => createHash('sha256').update(bytes).digest('hex');
export function sourcePathAllowed(name) {
  if (typeof name !== 'string' || !name || name.includes('\\') || /[\u0000-\u001f<>:"|?*]/u.test(name) || name.startsWith('/')) return false;
  const parts = name.split('/');
  if (parts.some((part) => !part || part === '.' || part === '..' || /[. ]$/u.test(part) || /^(?:con|prn|aux|nul|com\d|lpt\d)(?:\.|$)/iu.test(part))) return false;
  if (rootFiles.has(name)) return true;
  if (parts.some((part) => ['node_modules', '.git', 'public', '.env'].includes(part.toLowerCase()) || part.toLowerCase().startsWith('.env.'))) return false;
  if (name.startsWith('out/research/curriculum/')) return name === 'out/research/curriculum/chemistry-2017-syllabus.docx' || /\.(?:json|html)$/iu.test(name);
  if (reviewRoots.some((prefix) => name.startsWith(prefix))) return /\.(?:json|md)$/iu.test(name);
  return ['src/', 'scripts/', 'docs/', '.github/workflows/'].some((prefix) => name.startsWith(prefix)) && extensions.test(name);
}
function checkedFiles(files) {
  if (!Array.isArray(files) || !files.length || files.length > MAX_FILES) throw new Error('Source archive file count is invalid');
  const seen = new Set(), normalised = [], names = [];
  let total = 0;
  for (const file of files) {
    if (!sourcePathAllowed(file.path)) throw new Error(`Not an allowed source path: ${file.path}`);
    const name = file.path.toLowerCase();
    if (seen.has(name)) throw new Error('Duplicate or case-colliding source path');
    seen.add(name); names.push(name);
    const bytes = Buffer.from(file.content);
    total += bytes.length;
    if (total > MAX_BYTES) throw new Error('Source archive exceeds byte budget');
    normalised.push({path: file.path, content: bytes});
  }
  for (const name of names) {
    const parts = name.split('/');
    while (parts.length > 1) {parts.pop(); if (seen.has(parts.join('/'))) throw new Error('Source archive file/directory collision');}
  }
  return normalised.sort((a, b) => a.path < b.path ? -1 : a.path > b.path ? 1 : 0);
}
export function encodeSourceArchive(files) {
  const checked = checkedFiles(files);
  const records = checked.map((file) => ({path: file.path, bytes: file.content.length, sha256: sourceDigest(file.content)}));
  const manifest = {schemaVersion: 1, scope: 'repository-source-and-selected-unvoiced-reviews', mediaIncluded: false,
    files: records, sourceSha256: sourceDigest(JSON.stringify(records)),
    exclusions: ['public media/assets/fonts', 'node_modules', 'Git history', 'environment files', 'finished release evidence']};
  const bytes = gzipSync(Buffer.from(JSON.stringify({manifest, contents: checked.map((file) => file.content.toString('base64'))})), {level: 9});
  return {bytes, archiveSha256: sourceDigest(bytes), manifest};
}
export function decodeSourceArchive(bytes, expectedSha256) {
  if (bytes.length > MAX_BYTES || expectedSha256 && sourceDigest(bytes) !== expectedSha256) throw new Error('Source archive hash or compressed size mismatch');
  const bundle = JSON.parse(gunzipSync(bytes, {maxOutputLength: 2 * MAX_BYTES}).toString('utf8'));
  const {manifest, contents} = bundle;
  if (manifest?.schemaVersion !== 1 || manifest.scope !== 'repository-source-and-selected-unvoiced-reviews' || manifest.mediaIncluded !== false ||
      !Array.isArray(manifest.files) || !manifest.files.length || manifest.files.length > MAX_FILES || !Array.isArray(contents) || contents.length !== manifest.files.length ||
      manifest.sourceSha256 !== sourceDigest(JSON.stringify(manifest.files))) throw new Error('Invalid source archive manifest');
  const files = manifest.files.map((record, index) => {
    const encoded = contents[index];
    if (typeof encoded !== 'string') throw new Error('Source content must use base64');
    const content = Buffer.from(encoded, 'base64');
    if (content.toString('base64') !== encoded || !Number.isSafeInteger(record.bytes) || record.bytes < 0 || record.bytes !== content.length ||
        !/^[a-f0-9]{64}$/u.test(record.sha256) || sourceDigest(content) !== record.sha256) throw new Error('Source archive content mismatch');
    return {path: record.path, content};
  });
  return {manifest, files: checkedFiles(files), archiveSha256: sourceDigest(bytes)};
}
export async function captureSourceArchive(root) {
  const files = [];
  const add = async (name) => {
    const file = path.resolve(root, name), info = await lstat(file);
    if (info.isSymbolicLink()) throw new Error(`Source archive refuses symlinks: ${name}`);
    if (!info.isFile() || !sourcePathAllowed(name)) throw new Error(`Not a permitted source file: ${name}`);
    files.push({path: name, content: await readFile(file)});
  };
  const walk = async (name, optional = false) => {
    let entries;
    try {
      const directory = path.resolve(root, name), info = await lstat(directory);
      if (info.isSymbolicLink() || !info.isDirectory()) throw new Error(`Source archive needs a direct directory: ${name}`);
      entries = await readdir(directory, {withFileTypes: true});
    }
    catch (error) {if (optional && error.code === 'ENOENT') return; throw error;}
    for (const entry of entries) {
      const child = `${name}/${entry.name}`;
      if (entry.isSymbolicLink()) throw new Error(`Source archive refuses symlinks: ${child}`);
      if (entry.isDirectory() && !['node_modules', '.git', 'public'].includes(entry.name.toLowerCase())) await walk(child);
      else if (entry.isFile() && sourcePathAllowed(child)) await add(child);
    }
  };
  for (const name of rootFiles) await add(name);
  for (const name of ['src', 'scripts', 'docs', '.github/workflows']) await walk(name);
  for (const name of [...reviewRoots.map((item) => item.slice(0, -1)), 'out/research/curriculum']) await walk(name, true);
  // Refuse a mixed snapshot if an included file changed during capture.
  for (const file of files) if (sourceDigest(await readFile(path.resolve(root, file.path))) !== sourceDigest(file.content)) throw new Error(`Source changed during capture: ${file.path}`);
  return encodeSourceArchive(files);
}
export async function restoreSourceArchive(bytes, destination, expectedSha256) {
  // Verify every entry and path before creating the fresh destination.
  const archive = decodeSourceArchive(bytes, expectedSha256);
  await mkdir(destination); // exclusive: existing directories are never overlaid
  const root = await realpath(destination);
  for (const file of archive.files) {
    const target = path.resolve(root, file.path), directory = path.dirname(target);
    await mkdir(directory, {recursive: true});
    const resolved = await realpath(directory), relative = path.relative(root, resolved);
    if (relative.startsWith('..') || path.isAbsolute(relative)) throw new Error('Source restore parent escapes destination');
    await writeFile(target, file.content, {flag: 'wx'});
  }
  return archive;
}
export async function verifyRestoredSources(destination, archive) {
  const root = await realpath(destination);
  for (const file of archive.files) {
    const target = path.resolve(root, file.path), info = await lstat(target), resolved = await realpath(target), relative = path.relative(root, resolved);
    if (info.isSymbolicLink() || !info.isFile() || relative.startsWith('..') || path.isAbsolute(relative) ||
        sourceDigest(await readFile(target)) !== sourceDigest(file.content)) throw new Error(`Restored source changed or escaped: ${file.path}`);
  }
  return {checkedFiles: archive.files.length, sourceSha256: archive.manifest.sourceSha256, status: 'all declared source bytes restored; no media restore claimed'};
}
