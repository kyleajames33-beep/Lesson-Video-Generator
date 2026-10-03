import {readFileSync} from 'node:fs';
import path from 'node:path';
import {verifyRelease} from './release-snapshot.mjs';
import {sha256, canonical} from './playback-assembly.mjs';

function evidencePath(root, value) {
  const file = path.resolve(root, value), relative = path.relative(root, file);
  if (!relative || relative.startsWith('..') || path.isAbsolute(relative)) throw new Error('Review evidence must stay inside the workspace.');
  return file;
}
export function recordReview(root, {snapshotPath, evidence, reviewer, scope, outcome}) {
  if (!reviewer?.trim() || !['science', 'listening', 'motion', 'device', 'accessibility'].includes(scope) || !['pass', 'changes-required'].includes(outcome)) throw new Error('Specify reviewer, supported scope and pass/changes-required outcome.');
  const snapshot = JSON.parse(readFileSync(evidencePath(root, snapshotPath), 'utf8'));
  if (!verifyRelease(root, snapshot).valid) throw new Error('Cannot review a stale or incomplete release snapshot.');
  if (!snapshot.files.some(f => f.roles.includes('export') && /\.mp4$/i.test(f.path))) throw new Error('Review requires a snapshot containing a rendered MP4.');
  const file = evidencePath(root, evidence);
  const bytes = readFileSync(file);
  if (!bytes.length) throw new Error('Review evidence is empty.');
  const record = {schemaVersion: 1, snapshotPath, packageSha256: snapshot.packageSha256,
    evidence: {path: evidence, sha256: sha256(bytes)}, reviewer: reviewer.trim(), scope, outcome,
    recordedAt: new Date().toISOString(), status: 'review-evidence-recorded',
    limitation: 'Records the named review and its evidence. Does not independently confirm judgement or publication approval.'};
  return {...record, recordSha256: sha256(canonical(record))};
}
export function verifyReview(root, record) {
  if (record?.schemaVersion !== 1 || typeof record.reviewer !== 'string' || !record.reviewer.trim() || !['science', 'listening', 'motion', 'device', 'accessibility'].includes(record.scope)
    || !['pass', 'changes-required'].includes(record.outcome) || typeof record.recordedAt !== 'string' || !Number.isFinite(Date.parse(record.recordedAt))) return {valid: false, reason: 'Invalid review fields.'};
  const {recordSha256, ...payload} = record;
  if (sha256(canonical(payload)) !== recordSha256) return {valid: false, reason: 'Review record changed.'};
  const snapshot = JSON.parse(readFileSync(evidencePath(root, record.snapshotPath), 'utf8'));
  if (snapshot.packageSha256 !== record.packageSha256 || !verifyRelease(root, snapshot).valid) return {valid: false, reason: 'Reviewed release changed.'};
  if (sha256(readFileSync(evidencePath(root, record.evidence.path))) !== record.evidence.sha256) return {valid: false, reason: 'Review evidence changed.'};
  return {valid: true, scope: record.scope, outcome: record.outcome, reviewer: record.reviewer};
}
