import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {checkProductionBrief} from '../../../scripts/lib/production-brief.mjs';
import {verifyAssembly} from '../../../scripts/lib/verify-assembly.mjs';
import {lessonTimeline} from '../../../src/lesson/timeline.mjs';

const docs='docs/production/module5-c2-b2-caption-safe-v4-2026-10-10';
const sha=b=>createHash('sha256').update(b).digest('hex');
const hash=p=>sha(readFileSync(p));
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const assert=(c,m)=>{if(!c)throw Error(m);};
const writeExact=(p,bytes)=>{if(existsSync(p))assert(readFileSync(p,'utf8')===bytes,`Existing check log drift: ${p}`);else writeFileSync(p,bytes,{flag:'wx'});};
const write=(p,v)=>writeExact(p,JSON.stringify(v,null,2)+'\n');
const before=read(`${docs}/before-inputs.json`),record=read(`${docs}/correction-record.json`),markup=read(`${docs}/markup-check.json`);
assert(markup.status==='pass','SSR check failed.');
for(const f of before.preservedFiles)assert(hash(f.path)===f.sha256,`Preserved input drift: ${f.path}`);
const checks=[],files=[];
for(const entry of record.packages){
 assert(readFileSync(entry.parent.path).equals(readFileSync(entry.candidate.path)),'V3/v4 candidate bytes changed.');
 assert(readFileSync(entry.parentProps.path).equals(readFileSync(entry.props.path)),'V3/v4 props bytes changed.');
 const lesson=read(entry.candidate.path),parent=read(entry.parent.path);
 assert(JSON.stringify(lesson)===JSON.stringify(parent),'Lesson object changed.');
 const media=lesson.scenes.filter(s=>s.voiceover).map(s=>({sceneId:s.id,errors:verifyAssembly(s,lesson.fps)}));
 assert(media.every(s=>s.errors.length===0),'Assembled/raw media, captions or response boundaries changed.');
 const timeline=lessonTimeline(lesson),briefPath=`${docs}/${entry.key}/production-brief.json`;
 const draft=checkProductionBrief(process.cwd(),briefPath,{stage:'draft'});assert(draft.ready,'Draft brief failed.');
 write(`${docs}/${entry.key}/draft-check.json`,draft);
 const validation=execFileSync(process.execPath,['scripts/validate-lesson.mjs',entry.candidate.path],{encoding:'utf8',windowsHide:true});
 writeExact(`${docs}/${entry.key}/lesson-validation.txt`,validation);
 checks.push({key:entry.key,candidateBytesUnchanged:true,propsBytesUnchanged:true,deepLessonUnchanged:true,timelineDurationInFrames:timeline.durationInFrames,voicedScenes:media.length,assemblyRawGenerationAlignmentCaptionsAndResponseVerified:true,draftReady:draft.ready,reviewGatesPending:true,validatorExitCode:0,voiceTextListSha256:sha(JSON.stringify(lesson.scenes.map(s=>[s.id,s.voiceover?.text??null]))),timingAndCaptionsSha256:sha(JSON.stringify(lesson.scenes.map(s=>({id:s.id,duration:s.durationInFrames,voiceover:s.voiceover,responseHold:s.responseHold,captions:s.captions,revealDelays:s.revealDelays,stages:s.calculationPresentation?.stages}))))});
 files.push(entry.candidate.path,entry.props.path,briefPath,...record.pilots.filter(p=>p.key===entry.key).map(p=>p.configPath));
}
execFileSync('git',['diff','--check','--','src/slides/shared/Module5EvidenceBoard.tsx'],{windowsHide:true});
files.push(`${docs}/correction-record.json`,`${docs}/markup-check.json`,...record.sourceFiles.map(f=>f.path));
for(const p of files.filter(p=>!['src/lesson/types.ts','src/slides/QuickCheckSlide.tsx'].includes(p)))assert(!readFileSync(p,'utf8').includes('\u2014'),`Forbidden punctuation ${p}`);
for(const f of record.sourceFiles)assert(hash(f.path)===f.sha256,'Runtime source drift.');
write(`${docs}/author-check.json`,{status:'pass-pending-independent-source-and-native-pilot-review',previousRuntime:'7106255',tscResult:'See tsc-check.txt; separate completed command must have exit 0 before freeze.',diffCheckPassed:true,preservedFilesVerified:before.preservedFiles.length,syntheticMarkupFrameCases:markup.cases.length,defaultAndFalseFlagsUnchanged:true,selectedMarkupOnlyTrailPaddingDelta:true,checks,files:files.map(path=>({path,sha256:hash(path)})),limitation:record.limitation});
console.log(JSON.stringify({status:'pass',checks,files:files.map(path=>({path,sha256:hash(path)}))},null,2));
