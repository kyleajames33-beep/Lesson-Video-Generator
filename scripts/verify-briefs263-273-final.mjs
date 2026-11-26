import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {checkProductionBrief} from './lib/production-brief.mjs';
import {googleQuotaDay,requestsInGoogleQuotaDay} from './lib/google-request-budget.mjs';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8').replace(/^\uFEFF/,''));
const sha=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex');
let hms=0,sourceHashes=0;
for(let b=267;b<=272;b++){
 for(const row of read(`work/brief${b}/source-inventory.json`)){assert.equal(sha(row.design),row.sourceSha256);sourceHashes++;}
 if(b<=270)for(const row of read(`work/brief${b}/preparation.json`)){
  assert.equal(sha(row.source),row.sourceSha256);
  const gate=checkProductionBrief(process.cwd(),row.recordingBrief,{stage:'recording',expectedLessonPath:row.lessonInput});
  assert.equal(gate.ready,true,JSON.stringify({lesson:row.lesson,blockers:gate.blockers}));hms++;
 }
}
const a264=read('docs/production/claude-pm/assets/brief264-manifest.json');
let inherited=0;for(const a of a264.assets.filter(a=>a.status==='accepted')){assert.equal(sha(a.path),a.sha256);inherited++;}
for(const b of [266,271,272]){
 const manifest=read(`docs/production/claude-pm/assets/brief${b}-manifest.json`);
 for(const row of [...manifest.delivered,...manifest.rejections])assert.equal(sha(row.path),row.sha256);
}
const v09=read('work/brief265/hand-in.json');
assert(v09.allOtherScenesCuesHoldsAndNotesIdentical&&v09.exactOtherValidationRowsIdentical);
assert.equal(sha('docs/production/claude-pm/lessons/p-y12-m5-v09/measured/lesson.json'),v09.measuredSha256);
assert.equal(v09.requests,1);assert.equal(v09.gate.pass,true);
const v14=read('work/brief273/hand-in.json');assert.equal(sha(v14.source),v14.sourceSha256);assert.equal(v14.requestsThisBrief,0);
const entries=fs.readFileSync('work/google-tts-requests.jsonl','utf8').trim().split(/\r?\n/).map(JSON.parse);
const result={pass:true,checkedAt:new Date().toISOString(),unchangedSourceDesigns:sourceHashes,hmsRecordingGatesReady:hms,inheritedBrief264AssetsVerified:inherited,brief265Requests:1,brief273Requests:0,currentQuotaDay:googleQuotaDay(),currentQuotaRequests:requestsInGoogleQuotaDay(entries).length,humanListening:'pending',renderAndPublication:'not performed'};
assert.equal(hms,82);assert.equal(sourceHashes,138);assert.equal(inherited,92);
fs.writeFileSync('work/brief273/final-verification.json',JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result));
