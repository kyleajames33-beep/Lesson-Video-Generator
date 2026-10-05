import {existsSync, lstatSync, mkdirSync, realpathSync, writeFileSync} from 'node:fs';
import path from 'node:path';

// Proposal writers can only create a fresh directory under out/review, never
// overwrite catalogue/source/media or traverse an existing symlink.
export function writeIsolatedPackage(output, files, root = process.cwd()) {
  root = realpathSync(root);
  const base = path.resolve(root, 'out/review'), destination = path.resolve(root, output);
  if (!destination.startsWith(base + path.sep)) throw new Error('Proposal output must be a new directory below out/review/.');
  if (existsSync(destination)) throw new Error('Proposal output already exists. Choose a new directory.');
  let ancestor = path.dirname(destination);
  while (ancestor !== root) {
    if (existsSync(ancestor) && (lstatSync(ancestor).isSymbolicLink() || realpathSync(ancestor) !== ancestor)) throw new Error('Proposal output cannot traverse symlinks.');
    ancestor = path.dirname(ancestor);
  }
  const entries = Object.entries(files);
  if (!entries.length || entries.some(([name]) => !/^[a-zA-Z0-9][a-zA-Z0-9._-]*$/u.test(name))) throw new Error('Invalid proposal filenames.');
  mkdirSync(destination, {recursive: true});
  for (const [name, value] of entries) writeFileSync(path.join(destination, name), typeof value === 'string' ? value : JSON.stringify(value, null, 2) + '\n', {flag: 'wx'});
  return destination;
}
