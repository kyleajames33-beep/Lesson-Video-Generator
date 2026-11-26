// Read-only verification of current P5 preparation and preserved evidence.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {missingVoiceTakes,readVoiceJson as read} from './lib/nightly-voice-plan.mjs';
import {checkProductionBrief} from './lib/production-brief.mjs';
const root='work/brief262/prevoice-refresh-2026-11-24';
const sha=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const hash=t=>createHash('sha256').update(t).digest('hex');
const baseline=read(root+'/baseline.json'),comparison=read(root+'/comparison.json');
for(const group of ['media','otherWaves','deliveredHandins'])for(const [p,h] of Object.entries(baseline[group]))assert.equal(sha(p),h,p);
assert.equal(sha('work/google-tts-requests.jsonl'),baseline.requestLedgerSha256,'Paid request ledger changed');
const rows=read('work/brief259/physics/P5-preparation.json');
for(const prior of comparison){
 const row=rows.find(r=>r.lesson===prior.lesson),audit=read(row.sourceAudit),lesson=read(row.lessonInput),manifest=read(row.manifest);
 assert.equal(sha(row.source),row.sourceSha256);assert.equal(row.sourceSha256,prior.sourceSha256);
 assert.equal(audit.sourceSha256,row.sourceSha256);assert(audit.readiness.ready);
 const raw=fs.readFileSync(row.source,'utf8');
 const sections=[...raw.matchAll(/^### (?:\d+[a-z]?)\. [^\r\n]+\r?\n([\s\S]*?)(?=^### |^## |$(?![\s\S]))/gm)]
  .map(m=>m[1].split(/\r?\n/).filter(x=>x.startsWith('> ')).map(x=>x.slice(2).trim()).join(' ').replaceAll('**','')).filter(Boolean);
 assert.deepEqual(lesson.scenes.map(s=>s.voiceover.text),sections,row.lesson);
 assert.deepEqual(manifest.scenes.map(s=>s.text),sections,row.lesson);
 assert.deepEqual(audit.scenes.map(s=>s.text),sections,row.lesson);
 assert.equal(row.characters,sections.reduce((n,t)=>n+t.length,0));assert(!raw.includes('\u2014'));
 assert.equal(row.requestedNotesSeconds,45);
 const gate=checkProductionBrief(process.cwd(),row.recordingBrief,{stage:'recording',expectedLessonPath:row.lessonInput});assert(gate.ready,JSON.stringify(gate.blockers));
 for(const evidence of audit.readiness.existingReviews)assert.equal(sha(evidence.path),evidence.sha256);
}
const row=rows.find(r=>r.lesson==='phys-y12-m5-v11'),manifest=read(row.manifest),receipt=read('work/brief262/timeout-resume-2026-11-24.json');
assert.equal(receipt.sourceSha256,row.sourceSha256);
const [lesson,ids,hashes]=JSON.parse(receipt.timeoutRequestKey);assert.equal(lesson,row.lesson);
assert.deepEqual(ids.map(id=>hash(manifest.scenes.find(s=>s.id===id).text)),hashes);
for(const proof of receipt.proofs)assert.equal(sha(proof.path),proof.sha256);
const hook=missingVoiceTakes(manifest).find(s=>s.id==='hook');
assert(hook.needsRequest);assert.notEqual(hook.audio,'public/audio/phys-y12-m5-v11/hook.wav');
assert.equal(sha('public/audio/phys-y12-m5-v11/hook.wav'),'fd8e5d6f6e3d7b67e6feb25d2d35a3d606783baf57bd3ad8c530156d1c4bb85a');
console.log(JSON.stringify({pass:true,pendingLessons:comparison.length,refreshedLessons:comparison.filter(r=>r.changed).length,preservedMedia:Object.keys(baseline.media).length,preservedDeliveredHandins:Object.keys(baseline.deliveredHandins).length,otherWavesUnchanged:true,requestLedgerUnchanged:true,changedHook:hook,normalSettings:manifest.voiceSelection,timeoutSignatureUnchanged:true,speechRequests:0},null,2));
