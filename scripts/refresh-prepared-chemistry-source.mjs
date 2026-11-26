// Before future Chemistry waves only: prove a changed design has identical speech.
// Root brief236 permits count/status/visual source freshness; brief259 sets the order.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const [wave,key]=process.argv.slice(2),W='work/brief236';assert(/^[3-7]$/.test(wave));
const read=p=>JSON.parse(fs.readFileSync(p,'utf8').replace(/^\uFEFF/,''));
const hash=x=>createHash('sha256').update(x).digest('hex'),sha=p=>hash(fs.readFileSync(p));
const prep=`${W}/wave${wave}-preparation.json`,rows=read(prep),row=rows.find(r=>r.lesson===key);assert(row);
const current=sha(row.source);if(current===row.sourceSha256)process.exit(0);
assert.notEqual(wave,'7','Brief260 stops wave7 on any source mismatch; no unchanged-narration exception');
const raw=fs.readFileSync(row.source,'utf8');assert(!raw.includes('\u2014'));
const heads=[...raw.matchAll(/^### (\d+[a-z]?)\. [^\r\n]+/gm)],input=read(row.lessonInput),manifest=read(row.manifest),audit=read(`${W}/wave${wave}/${key}/source-audit.json`);
assert.equal(heads.length,input.scenes.length);
const texts=heads.map((head,i)=>{
  const part=raw.slice(head.index,heads[i+1]?.index??raw.length).split(/^## /m)[0];
  const quoted=part.split(/\r?\n/).filter(l=>l.startsWith('> ')).map(l=>l.slice(2).trim()).join(' '),text=quoted.replaceAll('**','');
  assert.equal(text,input.scenes[i].voiceover.text,'Narration changed: recording re-preparation required');assert.equal(text,manifest.scenes[i].text);assert.equal(text,audit.scenes[i].text);
  assert.deepEqual([...quoted.matchAll(/\*\*([^*]+)\*\*/g)].map(m=>m[1]),audit.scenes[i].boldCues);return text;
});
const proofPath=`${W}/wave${wave}/${key}/source-freshness-${current.slice(0,12)}.json`;
const previous=row.sourceSha256,proof={lesson:key,source:row.source,sourceSha256:current,originalPreparedSourceSha256:previous,
  sameNarrationAsReviewedPreparedInput:true,sceneTextSha256:texts.map(hash),characters:texts.reduce((n,s)=>n+s.length,0),
  sceneCount:texts.length,readinessPath:audit.readinessPath,readinessSha256:sha(audit.readinessPath),
  authority:'Brief236 root readiness decision34 and brief259: exact unchanged narrated strings and bold cues; source visual/build review remains separate.',speechRequested:false};
assert.equal(proof.characters,row.characters);fs.writeFileSync(proofPath,JSON.stringify(proof,null,2)+'\n');
const backup=prep+'.before-freshness-'+current.slice(0,12);assert(!fs.existsSync(backup));fs.copyFileSync(prep,backup);
row.originalPreparedSourceSha256=previous;row.sourceSha256=current;row.freshnessEvidence={path:proofPath,sha256:sha(proofPath)};
fs.writeFileSync(prep,JSON.stringify(rows,null,2)+'\n');console.log(key+': exact narrated strings and cues unchanged; current source hash bound.');
