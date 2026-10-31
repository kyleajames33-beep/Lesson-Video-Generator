// Scope checks to the Physics assets; unrelated lesson work may be in progress.
import {execFileSync} from 'node:child_process';
import {mkdir,readFile,readdir,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const dir=path.dirname(fileURLToPath(import.meta.url)),repo=path.resolve(dir,'../../..'),out=path.join(dir,'artifacts');
const checks=[];
for(const [label,args] of [['Scoped TypeScript',['node_modules/typescript/bin/tsc','--project','src/explainer/physics/tsconfig.json']],...[5,6,7,8].map(n=>[`Module ${n} model invariants`,[`src/explainer/physics/module${n}/verify.mjs`]]),...['projectile-details','practical-details','rotation-details'].map(name=>[name+' invariants',[`src/explainer/physics/module5/${name}/verify.mjs`]])]){
  const stdout=execFileSync(process.execPath,args,{cwd:repo,encoding:'utf8'}).trim();
  checks.push({label,status:'pass',stdout});console.log(label+': pass');
}
const walk=async folder=>{const items=await readdir(folder,{withFileTypes:true});const all=[];for(const item of items){if(item.name==='artifacts')continue;const p=path.join(folder,item.name);if(item.isDirectory())all.push(...await walk(p));else if(/\.(tsx?|mjs|md|html)$/.test(p))all.push(p);}return all;};
const sourceHashes={};
for(const file of await walk(dir)){const bytes=await readFile(file);if(bytes.includes(Buffer.from('\u2014')))throw new Error('Forbidden punctuation: '+file);sourceHashes[path.relative(dir,file).replaceAll('\\','/')]=createHash('sha256').update(bytes).digest('hex');}
const ffprobe=path.join(repo,'node_modules/@remotion/compositor-win32-x64-msvc/ffprobe.exe');
const mapping=JSON.parse(await readFile(path.join(out,'site','course-map.json'),'utf8'));
const media=[];
const expectedMedia=[...[5,6,7,8].map(n=>({key:`module${n}`,seconds:24,module:n})),...(mapping.samples??[]).map(s=>({key:s.id,seconds:s.seconds}))];
for(const item of expectedMedia){
  const file=path.join(out,'site','previews',`${item.key}-silent.mp4`);
  const data=JSON.parse(execFileSync(ffprobe,['-v','error','-show_entries','stream=codec_type,codec_name,width,height,r_frame_rate,nb_frames:format=duration','-of','json',file],{encoding:'utf8'}));
  if(data.streams.some(s=>s.codec_type==='audio'))throw new Error('Expected no audio stream: '+file);
  const video=data.streams.find(s=>s.codec_type==='video');
  if(Number(video.nb_frames)!==item.seconds*30||video.r_frame_rate!=='30/1'||Number(data.format.duration)!==item.seconds||video.width!==1280||video.height!==720)throw new Error('Unexpected preview media: '+file);
  execFileSync(path.join(repo,'node_modules/@remotion/compositor-win32-x64-msvc/ffmpeg.exe'),['-v','error','-i',file,'-an','-c:v','rawvideo','-f','null','-'],{stdio:['ignore','ignore','pipe']});
  const bytes=await readFile(file);media.push({...item,...data,sha256:createHash('sha256').update(bytes).digest('hex')});
}
if(mapping.lessons.length!==70||mapping.lessons.some(l=>!l.visuals.length))throw new Error('Incomplete site-lesson support map');
const labels=JSON.parse(await readFile(path.join(out,'label-audit.json'),'utf8'));
for(const v of mapping.modules.flatMap(m=>m.visuals))for(const phone of [false,true]){
  if(!labels.some(row=>row.id===v.id&&row.phone===phone&&row.frame===(v.stillFrame??210)))throw new Error(`Missing native label audit: ${v.id}, phone=${phone}`);
}
const reuseFile=path.join(out,'graph-reuse-check.json'),reuse=JSON.parse(await readFile(reuseFile,'utf8'));
reuse.after={};for(const id of Object.keys(reuse.before))reuse.after[id]=createHash('sha256').update(await readFile(path.join(out,'site','stills',`${id}-desktop.png`))).digest('hex');
reuse.unchanged=Object.keys(reuse.before).every(id=>reuse.before[id]===reuse.after[id]);
reuse.basePreviewsUnchanged=media.filter(m=>m.module).every(m=>reuse.basePreviewsBefore[m.key]===m.sha256);
await writeFile(reuseFile,JSON.stringify(reuse,null,2));
if(!reuse.unchanged||!reuse.basePreviewsUnchanged)throw new Error('A preserved graph or module preview changed');
const findings=labels.filter(x=>x.overflow.length||x.overlaps.length);
await mkdir(out,{recursive:true});
await writeFile(path.join(out,'verification.json'),JSON.stringify({checks,sourceHashes,media,reuse,siteLessons:70,visualFamilies:mapping.modules.reduce((n,m)=>n+m.visuals.length,0),labelFrames:labels.length,labelFindings:findings,playback:'Browser spot checks at 1x recorded separately; continuous human motion review pending',teachingApproval:'not a full lesson'},null,2));
console.log(`Media: ${media.length} silent previews; labels: ${findings.length} frames with findings. Preserved graph PNGs and four base MP4s are unchanged.`);
if(findings.length)process.exitCode=1;
