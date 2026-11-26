// Brief 257: scan canonical Google-voiced hand-ins without requesting speech.
import fs from 'node:fs';
import path from 'node:path';
import {assessGoogleTake,googleWavSeconds} from './lib/google-runon-gate.mjs';

const output=process.argv[2];
if(!output)throw Error('Usage: node scripts/check-google-runon.mjs OUTPUT_DIRECTORY');
fs.mkdirSync(output,{recursive:true});
if(process.argv.includes('--progress')){
  const scan=JSON.parse(fs.readFileSync(output+'/scan.json'));
  const lessons=new Map();
  for(const result of scan.results.filter(r=>r.pendingRecognition)){
    if(!lessons.has(result.lesson))lessons.set(result.lesson,JSON.parse(fs.readFileSync(
      'docs/production/claude-pm/lessons/'+result.lesson+'/measured/lesson.json')));
    const scene=lessons.get(result.lesson).scenes.find(s=>s.id===result.scene);
    if(fs.existsSync('work/google-runon-checks/'+result.audioSha256+'.json')){
      try { Object.assign(result,assessGoogleTake(scene,{recogniseMissing:false})); }
      catch(error) { Object.assign(result,{pass:false,error:error.message,
        seconds:googleWavSeconds(scene.voiceover.audioFile),characters:scene.voiceover.text.length}); }
      delete result.pendingRecognition;
    }
  }
  const pending=scan.results.filter(r=>r.pendingRecognition).length;
  const failures=scan.results.filter(r=>!r.pass&&!r.pendingRecognition);
  fs.writeFileSync(output+'/progress.json',JSON.stringify({checkedAt:new Date().toISOString(),
    lessons:scan.lessons,scenes:scan.scenes,pending,failures,results:scan.results},null,2)+'\n');
  console.log(JSON.stringify({scenes:scan.scenes,pending,failures:failures.map(r=>({lesson:r.lesson,scene:r.scene,
    seconds:r.seconds,charactersPerSecond:r.charactersPerSecond,insertedWords:r.insertedWords,trailingInsertedWords:r.trailingInsertedWords}))}));
  process.exit(pending||failures.length?1:0);
}
const base='docs/production/claude-pm/lessons',scenes=[],jobs=new Map(),lessons=[];
for(const key of fs.readdirSync(base)){
  const file=path.join(base,key,'measured','lesson.json');
  if(!fs.existsSync(file))continue;
  const lesson=JSON.parse(fs.readFileSync(file));
  let count=0;
  for(const scene of lesson.scenes){
    const audio=scene.voiceover?.audioFile;
    if(!audio?.endsWith('.wav'))continue;
    const meta=audio?.replace(/\.wav$/,'.generation.json');
    if(!meta||!fs.existsSync(meta))continue;
    const generation=JSON.parse(fs.readFileSync(meta));
    if(generation.modelId!=='gemini-3.8-flash-tts')continue;
    let check;
    try { check=assessGoogleTake(scene,{recogniseMissing:false}); }
    catch(error) { check={pass:false,error:error.message,audio,
      seconds:googleWavSeconds(audio),characters:scene.voiceover.text.length}; }
    scenes.push({lesson:key,scene:scene.id,...check});count++;
    if(check.pendingRecognition){const cache='work/google-runon-checks/'+check.audioSha256+'.json';if(!jobs.has(cache))jobs.set(cache,{audio,cache});}
  }
  if(count){lessons.push({lesson:key,file,scenes:count});console.log('Scanned '+key+': '+count+' scenes');}
}
const summary={lessons:lessons.length,scenes:scenes.length,pendingRecognition:scenes.filter(s=>s.pendingRecognition).length,
  recognitionJobs:jobs.size,failures:scenes.filter(s=>!s.pass&&!s.pendingRecognition),lessonInventory:lessons,results:scenes};
fs.writeFileSync(output+'/scan.json',JSON.stringify(summary,null,2)+'\n');
fs.writeFileSync(output+'/recognition-jobs.json',JSON.stringify([...jobs.values()],null,2)+'\n');
console.log(JSON.stringify({...summary,lessonInventory:undefined,results:undefined}));
process.exitCode=summary.pendingRecognition||summary.failures.length?1:0;
