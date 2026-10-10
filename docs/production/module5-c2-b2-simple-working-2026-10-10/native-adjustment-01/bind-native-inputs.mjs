import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
const docs='docs/production/module5-c2-b2-simple-working-2026-10-10/native-adjustment-01';
const hash=p=>createHash('sha256').update(readFileSync(p)).digest('hex'),read=p=>JSON.parse(readFileSync(p,'utf8'));
const assert=(c,m)=>{if(!c)throw Error(m);};
assert(!existsSync(`${docs}/frozen-current-inputs.json`),'Current inputs already frozen.');
const correction=read(`${docs}/correction-record.json`),native={schemaVersion:1,status:'provenance-bound-pending-independent-native-review',scope:'Exact initial and adjusted native files only. No new author visual, motion, caption/player or listening pass.',initial:{},adjusted:{}};
for(const [key,dir]of [['initial','out/prototypes/module5-simple-working-v5-native-2026-10-10'],['adjusted','out/prototypes/module5-simple-working-v5-native-adjusted-2026-10-10']]){
 const manifestPath=`${dir}/frames.json`,rendererPath=`${dir}/renderer-record.json`,frames=read(manifestPath),renderer=read(rendererPath);
 const expected=key==='initial'?correction.archivedInitialComponent.sha256:correction.sourceFiles.find(f=>f.path===renderer.componentPath).sha256;
 assert(renderer.componentSha256===expected,'Native renderer record source mismatch.');
 for(const frame of frames){
  assert(hash(frame.path)===frame.sha256,'Native PNG changed.');
  assert(correction.packages.some(p=>p.key===frame.key&&p.candidate.path===frame.sourcePath&&p.candidate.sha256===frame.sourceSha256),'Native frame lesson mismatch.');
 }
 native[key]={manifest:{path:manifestPath,sha256:hash(manifestPath)},rendererRecord:{path:rendererPath,sha256:hash(rendererPath)},componentPath:renderer.componentPath,componentSha256:renderer.componentSha256,frames:frames.map(f=>({path:f.path,sha256:f.sha256,key:f.key,sceneId:f.sceneId,localFrame:f.localFrame,globalFrame:f.globalFrame,sourcePath:f.sourcePath,sourceSha256:f.sourceSha256}))};
}
native.archivedInitialComponent=correction.archivedInitialComponent;
const path=`${docs}/native-inputs.json`;writeFileSync(path,JSON.stringify(native,null,2)+'\n',{flag:'wx'});
for(const pilot of correction.pilots){const config=read(pilot.configPath);config.inputs=[...new Set([...(config.inputs??[]),path])];writeFileSync(pilot.configPath,JSON.stringify(config,null,2)+'\n');}
console.log(JSON.stringify({path,sha256:hash(path),initialFrames:native.initial.frames.length,adjustedFrames:native.adjusted.frames.length,pilotConfigs:correction.pilots.map(p=>({path:p.configPath,sha256:hash(p.configPath)}))},null,2));
