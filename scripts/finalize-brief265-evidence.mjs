// Complete source and hand-in bookkeeping after the accepted hook replacement.
import fs from 'node:fs';import assert from 'node:assert/strict';import {createHash} from 'node:crypto';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const sha=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const save=(p,v)=>fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');
const W='work/brief265',report=read(W+'/hand-in.json');
const row=read('work/brief259/physics/P5-preparation.json').find(r=>r.key==='p-y12-m5-v09');
const lp=row.measuredOutput,dir=lp.replace(/\/lesson.json$/,''),old=read(dir+'.before-brief265/lesson.json'),lesson=read(lp);
for(let i=1;i<old.scenes.length;i++)assert.deepEqual(old.scenes[i],lesson.scenes[i]);
const oldv=read(dir+'.before-brief265/validation-brief259.json'),v=read(dir+'/validation-brief259.json');
for(const s of oldv.scenes.filter(s=>s.id!=='hook'))assert.deepEqual(s,v.scenes.find(x=>x.id===s.id));
lesson.sourceDesignSha256=row.sourceSha256;save(lp,lesson);report.measuredSha256=sha(lp);
const align=read('public/audio/phys-y12-m5-v09/hook.alignment.json');assert.equal(align.characters.join(''),lesson.scenes[0].voiceover.text);
for(const name of ['validation-brief259.json','validation.json']){const p=dir+'/'+name,d=read(p);d.measuredSha256=report.measuredSha256;d.canonicalMeasuredSha256=report.measuredSha256;d.characters=row.characters;d.brief265=report;save(p,d);}
const cp=dir+'/captions-brief265/caption-export.json',c=read(cp);c.lessonSha256=report.measuredSha256;save(cp,c);
const hp='work/brief259/physics/P5/phys-y12-m5-v09/hand-in.json';
if(!fs.existsSync(hp+'.before-brief265'))fs.copyFileSync(hp,hp+'.before-brief265');
const h=read(hp);Object.assign(h,{sourceSha256:row.sourceSha256,characters:row.characters,totalSeconds:lesson.scenes.reduce((n,s)=>n+s.durationInFrames,0)/30,measuredSha256:report.measuredSha256,canonicalMeasuredSha256:report.measuredSha256,captionDirectory:dir+'/captions-brief265',brief265:report});save(hp,h);
report.exactOtherValidationRowsIdentical=true;report.sourceSha256=row.sourceSha256;report.v11OldTakeRetirement=W+'/v11-old-take-retirement.json';
save(W+'/hand-in.json',report);save(W+'/word-time-diff.json',report);
const candidates='work/brief259/physics/P5-candidates.json',a=read(candidates),c9=a.find(c=>c.lesson===row.lesson);Object.assign(c9,{sourceSha256:row.sourceSha256,characters:row.characters,sourceAudit:row.sourceAudit});save(candidates,a);
fs.appendFileSync('docs/production/claude-pm/status.md',`\nBrief265 final source bookkeeping: measured SHA-256 ${report.measuredSha256}. Other measured scene objects and validation rows are deeply identical to .before-brief265. The current P5 v09 hand-in now selects the new captions; its earlier report is preserved. V11's old billing audio and sidecars are renamed .before-brief265, and its current neutral hook remains selected.\n`);
console.log(JSON.stringify({pass:true,measuredSha256:report.measuredSha256,requests:report.requests}));
