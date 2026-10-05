import {readFileSync, mkdirSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import {checkReleaseEvidence} from './lib/release-gate.mjs';

const [configPath, ...args] = process.argv.slice(2);
if (!configPath) throw new Error('Usage: node scripts/check-release-evidence.mjs gate-config.json [--output=report.json]');
let report;
try { report = checkReleaseEvidence(process.cwd(), JSON.parse(readFileSync(configPath, 'utf8'))); }
catch (error) { report = {ready: false, status: 'release-evidence-incomplete', blockers: [{code: 'GATE_INPUT_INVALID', detail: error.message}]}; }
const output = args.find((arg) => arg.startsWith('--output='))?.slice(9);
if (output) { mkdirSync(path.dirname(output), {recursive: true}); writeFileSync(output, JSON.stringify(report, null, 2) + '\n'); }
console.log(JSON.stringify(report, null, 2));
if (!report.ready) process.exitCode = 1;
