import {readFileSync,writeFileSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
const docs='docs/production/module5-c2-b2-simple-working-2026-10-10/native-adjustment-01';
const hash=p=>createHash('sha256').update(readFileSync(p)).digest('hex'),read=p=>JSON.parse(readFileSync(p,'utf8'));
const assert=(c,m)=>{if(!c)throw Error(m);};
const collect=dir=>readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?collect(`${dir}/${e.name}`):[`${dir}/${e.name}`]);
const record=read(`${docs}/correction-record.json`),markup=read(`${docs}/markup-check.json`),native=read(`${docs}/native-inputs.json`);
for(const f of [...record.preservedInitialFiles,...record.preservedNativeFiles,...record.sourceFiles])assert(hash(f.path)===f.sha256,`Frozen input drift ${f.path}`);
assert(hash(record.parentCorrection.path)===record.parentCorrection.sha256&&hash(record.parentFreeze.path)===record.parentFreeze.sha256,'Initial historical records changed.');
assert(markup.status==='pass','Markup check failed.');
assert(readFileSync(`${docs}/tsc-check.txt`,'utf8').includes('Completed exit code: 0'),'TypeScript not passed.');
const files=[...collect(docs),...record.sourceFiles.map(f=>f.path),...record.packages.flatMap(p=>[p.candidate.path,p.props.path]),native.initial.manifest.path,native.initial.rendererRecord.path,native.adjusted.manifest.path,native.adjusted.rendererRecord.path,...native.adjusted.frames.map(f=>f.path)];
for(const entry of record.packages){assert(hash(entry.candidate.path)===entry.candidate.sha256&&hash(entry.props.path)===entry.props.sha256,'Frozen v5 data changed.');}
for(const p of collect(docs))assert(!readFileSync(p,'utf8').includes('\u2014'),'Forbidden punctuation in new documentation.');
const freeze={status:'current-author-inputs-frozen-pending-independent-source-and-native-pilots',tscExitCode:0,defaultMarkupCases:markup.defaultCases.length,selectedContextGateAndAdjustedGeometryCases:markup.selectedCases.length,initialHistoricalFreeze:record.parentFreeze,initialHistoricalCorrection:record.parentCorrection,initialComponent:record.archivedInitialComponent,currentComponent:record.sourceFiles.find(f=>f.path==='src/slides/shared/Module5EvidenceBoard.tsx'),v5LessonAndPropsHashesUnchanged:true,voiceAudioCaptionsResponseHoldsDurationsAndAllCuesUnchanged:true,packages:record.packages,pilots:record.pilots,nativeEvidencePath:`${docs}/native-inputs.json`,nativeEvidenceSha256:hash(`${docs}/native-inputs.json`),files:[...new Set(files)].map(path=>({path,sha256:hash(path)})),pending:['Independent source review of adjusted runtime','Adjusted native/caption/control and small-player review','Three exact full-task pilot playback reviews','Human listening','Whole-lesson and release gates'],limitation:record.limitation};
writeFileSync(`${docs}/frozen-current-inputs.json`,JSON.stringify(freeze,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({status:freeze.status,path:`${docs}/frozen-current-inputs.json`,sha256:hash(`${docs}/frozen-current-inputs.json`),sourceFiles:record.sourceFiles,packages:record.packages,pilots:record.pilots},null,2));
