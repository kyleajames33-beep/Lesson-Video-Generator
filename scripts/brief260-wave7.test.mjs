import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {assertChemistryReadinessEvidence} from './lib/chemistry-readiness-evidence.mjs';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const hash=b=>createHash('sha256').update(b).digest('hex');
test('historical brief260 stops are preserved and current wave7 sources match their latest reviews',()=>{
  const comparison=read('work/brief260/source-comparisons.json');
  assert.equal(comparison.ready,1);assert.equal(comparison.held,8);
  const rows=read('work/brief236/wave7-preparation.json');
  assert(rows.length>=1);
  for(const r of rows){const audit=read(`work/brief236/wave7/${r.lesson}/source-audit.json`);
    assert.equal(hash(fs.readFileSync(r.source)),audit.reviewedSourceSha256);}
});
test('C7 follows P5 before C3 and cannot complete without all lesson hand-ins',()=>{
  const config=read('docs/production/claude-pm/nightly-voice-order.json');
  assert.deepEqual(config.stages.map(s=>s.id),['P5','C7','H11M1','H11M2','H12M3','H12M4','C3','P6','C4','P7','C5','P8','C6']);
  const p=spawnSync(process.execPath,['work/brief236/hand-in-wave.mjs','7'],{encoding:'utf8',windowsHide:true});
  assert.notEqual(p.status,0);
  assert(!fs.existsSync('work/brief236/wave7-hand-in.json'));
});
test('readiness accepts an appended addendum but rejects changes to original evidence',()=>{
  const folder=fs.mkdtempSync(path.join(os.tmpdir(),'brief260-')),file=folder+'/readiness.md';
  const original=Buffer.from('Existing checked readiness.\n'),expected=hash(original);
  try{
    fs.writeFileSync(file+'.before-brief260',original);
    fs.writeFileSync(file,Buffer.concat([original,Buffer.from('\n## Brief260 readiness addendum (21 November2026)\nNew rows.\n')]));
    assertChemistryReadinessEvidence(file,expected);
    fs.writeFileSync(file,'Edited existing evidence.\n');
    assert.throws(()=>assertChemistryReadinessEvidence(file,expected),/Existing readiness content was edited/);
  }finally{fs.unlinkSync(file);fs.unlinkSync(file+'.before-brief260');fs.rmdirSync(folder);}
});
test('all prepared original waves retain verifiable readiness evidence after the addendum',()=>{
  for(let wave=1;wave<=6;wave++)for(const r of read(`work/brief236/wave${wave}-preparation.json`)){
    const a=read(`work/brief236/wave${wave}/${r.lesson}/source-audit.json`);
    assertChemistryReadinessEvidence(a.readinessPath,a.readinessSha256);
  }
});
