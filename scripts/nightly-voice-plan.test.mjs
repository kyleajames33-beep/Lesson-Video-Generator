import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {fitVoiceRows,selectNightModule,readVoiceJson} from './lib/nightly-voice-plan.mjs';
test('quota planning keeps whole lessons within 99 requests',()=>{
  const result=fitVoiceRows([{lesson:'a',plannedRequests:50},{lesson:'b',plannedRequests:50}],99);
  assert.deepEqual(result.rows.map(r=>r.lesson),['a']);assert.equal(result.plannedRequests,50);
});
test('night module remains contiguous and resumes before another module',()=>{
  const rows=[{lesson:'chem-y11-m2-v20'},{lesson:'chem-y11-m3-v01'},{lesson:'chem-y11-m3-v02'}];
  const first=selectNightModule(rows,{},()=>false);assert.equal(first.moduleId,'C-M2');assert.equal(first.rows.length,1);
  const next=selectNightModule(rows,{},r=>r.lesson.includes('m2'));assert.equal(next.moduleId,'C-M3');assert.equal(next.rows.length,2);
});
test('brief273 banked track follows the other 2017 lessons and no unreviewed input is voiced',()=>{
  const p5=readVoiceJson('work/brief259/physics/P5-candidates.json');
  assert(!p5.some(r=>r.lesson==='phys-y12-m5-v04'));
  assert.deepEqual(p5.slice(-3).map(r=>r.lesson),['phys-y12-m5-v10','phys-y12-m5-v15','phys-y12-m5-v14']);
  for(const wave of ['P5','P6','P7','P8'])for(const row of readVoiceJson(`work/brief259/physics/${wave}-preparation.json`)){
    assert.equal(readVoiceJson(row.sourceAudit).readiness.ready,true);
  }
});
test('nightly entry dry-run leaves paid-request ledger, wave2 inputs and live state untouched',()=>{
  const files=['work/google-tts-requests.jsonl','work/brief240/daily-voice-state.json','work/brief236/wave2-preparation.json'];
  const hash=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex'),before=files.map(hash);
  const p=spawnSync(process.execPath,['work/brief240/daily-voice-continuation.mjs','--dry-run'],{encoding:'utf8',windowsHide:true});
  assert.equal(p.status,0,p.stderr);assert.deepEqual(files.map(hash),before);
  const plan=readVoiceJson('work/brief259/next-three-nights.json');assert.equal(plan.speechRequests,0);
  const today=new Intl.DateTimeFormat('en-CA',{timeZone:'Australia/Sydney',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  assert.equal(plan.nights[0].date,today);assert.equal(plan.nights.length,3);
  const remaining=readVoiceJson('work/brief236/wave2-preparation.json').filter(r=>!fs.existsSync(`work/brief236/wave2/${r.lesson}/hand-in.json`));
  if(remaining.length)assert.equal(plan.nights[0].lessons[0].lesson,remaining[0].lesson);
  assert(plan.nights[0].plannedRequests<=99);
  assert.equal(Date.parse(plan.nights[1].date)-Date.parse(plan.nights[0].date),86400000);
  const old=fs.readFileSync('work/brief240/daily-voice-continuation.mjs.before-brief259','utf8'),now=fs.readFileSync('work/brief240/daily-voice-continuation.mjs','utf8');
  const start="  const chemistry='work/brief236';";
  const a=old.slice(old.indexOf(start),old.indexOf(" state.phase='Year 11 Maths then Maths Standard'"));
  const b=now.slice(now.indexOf(start),now.indexOf(" state.phase='Brief259 science queue'"));
  assert(a.length>100);assert.equal(a,b,'Preserved Chemistry wave1/2 execution body changed');
});
