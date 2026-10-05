import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {componentBaselineSource,componentBaselineProvenance,componentBaselineFixtureSha256,validateComponentBaselineFixture} from './lib/component-baseline-fixtures.mjs';
const hash=(algorithm,bytes)=>createHash(algorithm).update(bytes).digest('hex');
const bytes=await readFile(new URL('./fixtures/component-baseline-sources.json',import.meta.url));
test('all 23 exact historical source references retain provenance and canonical blob bytes without Git',()=>{
 const f=validateComponentBaselineFixture(bytes),p=componentBaselineProvenance();assert.equal(p.records.length,23);assert.equal(p.uniqueBlobs,15);assert.equal(hash('sha256',bytes),componentBaselineFixtureSha256);
 assert.deepEqual([...new Set(p.records.map(r=>r.ref))].sort(),['ca58c157f0349b29774f93a76cd041aefab3a2a2','bacbbf308e6eb4d4ce0f7d36648d4259397b8972','691096da3c72f71ef50f37cfad7a8272bc710be6','efe86ab83a94fde6c0aaefc49355f6d43cdc7058'].sort());
 for(const r of p.records){const content=Buffer.from(componentBaselineSource(r.ref,r.path));assert.equal(content.length,r.byteLength);assert.equal(hash('sha256',content),r.sha256);assert.equal(hash('sha1',Buffer.concat([Buffer.from(`blob ${content.length}\0`),content])),r.gitBlobSha);assert.equal(content.toString(),f.blobs[r.gitBlobSha].content);}
 p.records[0].ref='changed';assert.notEqual(componentBaselineProvenance().records[0].ref,'changed');
});
test('fixture and source lookup refuse byte drift, metadata replacement and unknown identities',()=>{
 assert.throws(()=>validateComponentBaselineFixture(Buffer.concat([bytes,Buffer.from('\n')])),/pin mismatch/u);
 const f=JSON.parse(bytes);for(const edit of [x=>x.records.reverse(),x=>x.records[0].ref='0'.repeat(40),x=>x.records[0].path='src/current.tsx',x=>x.blobs[Object.keys(x.blobs)[0]].content+='\n',x=>x.blobs[Object.keys(x.blobs)[0]].byteLength++]){const copy=structuredClone(f);edit(copy);assert.throws(()=>validateComponentBaselineFixture(Buffer.from(JSON.stringify(copy))),/pin mismatch/u);}
 assert.throws(()=>componentBaselineSource('main','src/slides/diagrams/kinds/chem-y12-m8/IonisationDiagram.tsx'),/Unknown/u);
 assert.throws(()=>componentBaselineSource(f.records[0].ref,'../../current.tsx'),/Unknown/u);
 assert.throws(()=>componentBaselineSource(null,f.records[0].path),/Unknown/u);
});
test('component tests use frozen sources without reducing their existing comparison suites',async()=>{
 for(const name of ['foundations','water-health','safety-medicine','analytical']){const text=await readFile(new URL('./'+name+'-component-output.test.mjs',import.meta.url),'utf8');assert.match(text,/componentBaselineSource/u);assert.doesNotMatch(text,/execFileSync|node:child_process/u);}
});
