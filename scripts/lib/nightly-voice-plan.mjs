// Pure planning and filesystem inspection only. Never requests speech.
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {planGoogleBatches} from './google-batch-checks.mjs';
export const readVoiceJson=p=>JSON.parse(fs.readFileSync(p,'utf8').replace(/^\uFEFF/,''));
export const voiceModule=(row,stage)=>stage.moduleId??'C-M'+(row.lesson.match(/-m(\d)-/)?.[1]??stage.skillsModule??'unknown');
export function missingVoiceTakes(manifest){
  return manifest.scenes.filter(s=>s.text?.trim()).map(s=>{
    const hash=createHash('sha256').update(s.text).digest('hex');let audio=s.audioFile;
    const meta=audio.replace(/\.wav$/,'.generation.json');
    if(fs.existsSync(meta)&&readVoiceJson(meta).textSha256!==hash)audio=audio.replace(/\.wav$/,`-${hash.slice(0,12)}.wav`);
    const cache=`work/google-tts-cache/${s.id}-${hash}/whole-scene.wav`;
    return {id:s.id,textHash:hash,audio,cache,needsRequest:!fs.existsSync(audio)&&!fs.existsSync(cache)};
  });
}
export function estimateVoiceRow(row){
  const manifest=readVoiceJson(row.manifest),takes=missingVoiceTakes(manifest),missing=new Set(takes.filter(t=>t.needsRequest).map(t=>t.id));
  const plannedRequests=planGoogleBatches(manifest.scenes,missing).length;
  return {lesson:row.lesson,characters:row.characters,missingScenes:missing.size,plannedRequests,
    maximumWithOneQualityRetry:plannedRequests+missing.size,takes};
}
export function selectNightModule(rows,stage,isDelivered){
  const remaining=rows.filter(r=>!isDelivered(r));if(!remaining.length)return {moduleId:null,rows:[]};
  const moduleId=voiceModule(remaining[0],stage);
  return {moduleId,rows:remaining.filter(r=>voiceModule(r,stage)===moduleId)};
}
export function fitVoiceRows(estimates,cap=99){
  let used=0;const selected=[];
  for(const row of estimates){if(used+row.plannedRequests>cap)break;selected.push(row);used+=row.plannedRequests;}
  return {rows:selected,plannedRequests:used,unusedPlannedRequests:cap-used};
}
export function threeNightVoicePlan(config,{startDate=new Intl.DateTimeFormat('en-CA',{timeZone:'Australia/Sydney',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date())}={}){
  const wave2=readVoiceJson('work/brief236/wave2-preparation.json');
  const delivered=new Set(wave2.filter(r=>fs.existsSync(`work/brief236/wave2/${r.lesson}/hand-in.json`)).map(r=>r.lesson));
  const nights=[];
  const stages=config.stages.map(stage=>({...stage,rows:readVoiceJson(stage.preparation),readiness:stage.status?readVoiceJson(stage.status):null}));
  const projected=new Set(),completed=new Set();
  for(const stage of stages)for(const row of stage.rows)if(fs.existsSync(`${stage.workRoot}/${row.lesson}/hand-in.json`))projected.add(stage.id+'/'+row.lesson);
  for(let n=0;n<3;n++){
    const date=new Date(Date.parse(startDate+'T00:00:00Z')+n*86400000).toISOString().slice(0,10);
    const c2=wave2.filter(r=>!delivered.has(r.lesson));
    if(c2.length||date<config.newOrderNotBeforeQuotaDay){const fit=fitVoiceRows(c2.map(estimateVoiceRow),config.dailyRequestCap);nights.push({date,start:'19:00 Australia/Sydney',stage:'C2 preserved remainder',lessons:fit.rows.map(({takes,...r})=>r),plannedRequests:fit.plannedRequests});for(const r of fit.rows)delivered.add(r.lesson);continue;}
    const stage=stages.find(s=>!fs.existsSync(s.aggregate)&&!completed.has(s.id));
    if(!stage){nights.push({date,state:'configured queue complete'});continue;}
    const rows=stage.rows,status=stage.readiness;
    const held=rows.filter(r=>{const dir=stage.workRoot+'/'+r.lesson;return fs.existsSync(dir)&&fs.readdirSync(dir).some(n=>/^timeout-stop-.*[.]json$/.test(n));});
    const group=selectNightModule(rows.filter(r=>!held.includes(r)),stage,r=>projected.has(stage.id+'/'+r.lesson));
    if(!group.rows.length&&held.length){nights.push({date,stage:stage.id,state:'repeated-timeout hold',held:held.map(r=>r.lesson),plannedRequests:0});continue;}
    if(!rows.length||!group.rows.length&&status?.pendingReadiness?.length){nights.push({date,stage:stage.id,state:'readiness hold',unreviewed:status?.pendingReadiness??[],
      note:'No unreviewed design enters a wave. Root must supply current source readiness, then re-run Physics preparation. Any actual C2 remainder takes precedence.'});continue;}
    if(!group.rows.length){nights.push({date,stage:stage.id,state:'complete wave hand-in pending',plannedRequests:0});completed.add(stage.id);continue;}
    const fit=fitVoiceRows(group.rows.map(estimateVoiceRow),config.dailyRequestCap);nights.push({date,stage:stage.id,moduleId:group.moduleId,lessons:fit.rows.map(({takes,...r})=>r),plannedRequests:fit.plannedRequests});
    for(const row of fit.rows)projected.add(stage.id+'/'+row.lesson);
    if(rows.every(r=>projected.has(stage.id+'/'+r.lesson))&&!status?.pendingReadiness?.length&&!held.length)completed.add(stage.id);
  }
  return {generatedAt:new Date().toISOString(),speechRequests:0,cap:config.dailyRequestCap,assumptions:'No-failure estimates from current prepared inputs and hand-ins. No future review approvals assumed; fallback retries are not reserved. Inspected v11 timeout gets one remaining retry; a second timeout holds that lesson and later P5 lessons continue.',nights};
}
