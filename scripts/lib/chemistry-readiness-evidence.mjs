// Brief260 appends readiness findings without invalidating the original snapshot.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const hash=b=>createHash('sha256').update(b).digest('hex');
export function assertChemistryReadinessEvidence(file,expectedHash){
  const current=fs.readFileSync(file);
  if(hash(current)===expectedHash)return;
  const original=fs.readFileSync(file+'.before-brief260');
  assert.equal(hash(original),expectedHash,'Original readiness evidence changed');
  assert(current.subarray(0,original.length).equals(original),'Existing readiness content was edited');
  assert(current.subarray(original.length).toString('utf8').startsWith('\n## Brief260 readiness addendum (21 November2026)'),
    'Only the explicit brief260 additive readiness update is accepted');
}
