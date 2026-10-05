import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';

export const componentBaselineFixtureSha256='d5d751f5849febf39b2bbc84cb8ae0d0d42089bf0f2e9b3a146e00457bc3593b';
const digest=(algorithm,bytes)=>createHash(algorithm).update(bytes).digest('hex');
// The pinned exact source capture is a transport substitute for git show.
// It never regenerates expected markup, changes cases or substitutes current code.
export function validateComponentBaselineFixture(bytes){
 if(!Buffer.isBuffer(bytes))throw new Error('Baseline fixture must be exact bytes');
 if(digest('sha256',bytes)!==componentBaselineFixtureSha256)throw new Error('Component baseline fixture pin mismatch');
 const f=JSON.parse(bytes.toString('utf8'));
 if(f.schemaVersion!==1||f.repository!=='kyleajames33-beep/Lesson-Video-Generator'||!Array.isArray(f.records)||f.records.length!==23||!f.blobs||typeof f.blobs!=='object'||Array.isArray(f.blobs)||Object.keys(f.blobs).length!==15)throw new Error('Invalid component baseline fixture schema');
 const seen=new Set(),used=new Set();
 for(const r of f.records){
  if(!r||typeof r!=='object'||Object.keys(r).sort().join(',')!=='gitBlobSha,path,ref'||!/^[a-f0-9]{40}$/u.test(r.ref)||!/^[a-f0-9]{40}$/u.test(r.gitBlobSha)||typeof r.path!=='string'||!/^src\/slides\/diagrams\/kinds\/[a-z0-9-]+\/[A-Za-z0-9-]+\.tsx$/u.test(r.path))throw new Error('Invalid component baseline source reference');
  const key=r.ref+':'+r.path;if(seen.has(key))throw new Error('Duplicate component baseline reference');seen.add(key);used.add(r.gitBlobSha);
  if(!Object.hasOwn(f.blobs,r.gitBlobSha))throw new Error('Missing component baseline blob');
 }
 for(const [sha,b]of Object.entries(f.blobs)){
  if(!used.has(sha)||!b||Object.keys(b).sort().join(',')!=='byteLength,content,sha256'||typeof b.content!=='string'||!Number.isSafeInteger(b.byteLength)||b.byteLength<1||!/^[a-f0-9]{64}$/u.test(b.sha256))throw new Error('Invalid component baseline blob metadata');
  const content=Buffer.from(b.content,'utf8');
  if(content.length!==b.byteLength||content.toString('utf8')!==b.content||digest('sha256',content)!==b.sha256||digest('sha1',Buffer.concat([Buffer.from(`blob ${content.length}\0`),content]))!==sha)throw new Error('Component baseline blob integrity mismatch');
 }
 return f;
}
const fixture=validateComponentBaselineFixture(readFileSync(new URL('../fixtures/component-baseline-sources.json',import.meta.url)));
const sources=new Map(fixture.records.map(r=>[r.ref+':'+r.path,fixture.blobs[r.gitBlobSha].content]));
export function componentBaselineSource(ref,path){
 if(typeof ref!=='string'||typeof path!=='string')throw new Error('Unknown component baseline source');
 const key=ref+':'+path;if(!sources.has(key))throw new Error('Unknown component baseline source: '+key);
 return sources.get(key);
}
export function componentBaselineProvenance(){
 return structuredClone({fixtureSha256:componentBaselineFixtureSha256,repository:fixture.repository,provenance:fixture.provenance,records:fixture.records.map(r=>({...r,sha256:fixture.blobs[r.gitBlobSha].sha256,byteLength:fixture.blobs[r.gitBlobSha].byteLength})),uniqueBlobs:Object.keys(fixture.blobs).length});
}
