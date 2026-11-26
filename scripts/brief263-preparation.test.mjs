import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import {createHash} from 'node:crypto';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8')),sha=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex');
test('all nine current wave7 sources have exact passed review bindings',()=>{
 const rows=read('work/brief236/wave7-preparation.json');assert.equal(rows.length,9);
 for(const r of rows){const a=read(`work/brief236/wave7/${r.lesson}/source-audit.json`);
  assert.equal(sha(r.source),a.reviewedSourceSha256);assert.equal(sha(a.latestCheck),a.latestCheckSha256);
  assert(read(`work/brief236/wave7/${r.lesson}/recording-gate.json`).ready);
 }
});
test('v19 narration input is reused byte for byte',()=>{
 const p='docs/production/claude-pm/lessons/c-y11-m1-v19/lesson.json';assert.equal(sha(p),sha(p+'.before-brief263'));
});
test('changed prepared scenes and screen instructions equal the checked current source',()=>{
 const source=read('work/brief263/source-comparison.json');for(const r of read('work/brief263/preparation.json').results){
  const current=source.find(s=>s.lesson===r.lesson),lp=`docs/production/claude-pm/lessons/${r.lesson.replace('chem-','c-')}/lesson.json`,lesson=read(lp),brief=read(lp.replace('lesson.json','lesson.production-brief.json'));
  assert.deepEqual(lesson.scenes.map(s=>s.voiceover.text),current.scenes.map(s=>s.text));
  assert.deepEqual(brief.scenes.map(s=>s.onScreenChange),current.scenes.map(s=>s.visual));
  if(fs.existsSync(lp+'.before-brief263')){
   const old=read(lp+'.before-brief263');for(let i=0;i<old.scenes.length;i++){
    assert.equal(old.scenes[i].holdSeconds,lesson.scenes[i].holdSeconds);assert.equal(old.scenes[i].holdKind,lesson.scenes[i].holdKind);
   }
  }
 }
});
test('m3-v06 remains unprepared with its source review and cultural check recorded',()=>{
 assert(!fs.existsSync('docs/production/claude-pm/lessons/c-y11-m3-v06/lesson.json'));
 const r=read('work/brief263/check-results.json').find(r=>r.lesson==='chem-y11-m3-v06');assert.equal(r.shouldFix,1);assert(r.action.startsWith('held'));
 assert(fs.existsSync('docs/production/claude-pm/checks/c-y11-m3-v06-brief263-cultural-check.md'));
});
