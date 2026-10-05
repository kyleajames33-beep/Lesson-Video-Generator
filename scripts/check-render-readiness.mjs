// Compatibility entry point for historical PR #36/#38 instructions.
// Delegate to the current stronger gate. No audio generation or rendering.
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const args = process.argv.slice(2);
if (!args.some(arg => !arg.startsWith('--')) && !args.includes('--all')) args.push('--all');
const result = spawnSync(process.execPath, [fileURLToPath(new URL('./release-preflight.mjs', import.meta.url)), ...args], {encoding: 'utf8'});
if (result.error) throw result.error;
process.stdout.write(result.stdout ?? '');
process.stderr.write(result.stderr ?? '');
process.exitCode = result.status ?? 1;
