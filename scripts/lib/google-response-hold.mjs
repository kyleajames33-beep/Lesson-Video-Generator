// Brief278: preserve the take and insert a frame-exact quiet gap after a prompt.
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {decodePcm,pcmWav} from './media-tools.mjs';
const sha=x=>createHash('sha256').update(x).digest('hex');
export function responseHoldPlan(scene,text,alignment,fps=30){
 const spec=scene.planningResponseInterval;
 if(!spec?.afterText)return null;
 const at=text.indexOf(spec.afterText);
 if(at<0||text.indexOf(spec.afterText,at+1)>=0)throw Error('Response prompt must occur exactly once: '+scene.id);
 if(alignment.characters.join('')!==text)throw Error('Response hold alignment text differs: '+scene.id);
 const end=at+spec.afterText.length;
 const startFrame=Math.ceil(alignment.character_end_times_seconds[end-1]*fps-1e-8);
 let next=end;while(next<text.length&&/\s/.test(text[next]))next++;
 if(next<text.length&&alignment.character_start_times_seconds[next]<startFrame/fps-1e-8)throw Error('Response boundary overlaps next word: '+scene.id);
 const frames=Math.round(spec.countdownSeconds*fps);
 if(frames<=0||Math.abs(frames/fps-spec.countdownSeconds)>1e-8)throw Error('Invalid response interval');
 return {startFrame,endFrame:startFrame+frames,frames,characterBoundary:end,afterText:spec.afterText};
}
export function insertGoogleResponseHold(scene,source,audio,alignment,seconds,fps=30){
 const plan=responseHoldPlan(scene,source.text,alignment,fps);
 if(!plan)return {audio,alignment,seconds,plan:null};
 const pcm=decodePcm(audio),samplesPerFrame=48000/fps;
 if(!Number.isInteger(samplesPerFrame))throw Error('Response hold requires whole samples per frame');
 const cut=plan.startFrame*samplesPerFrame*2;
 if(cut>pcm.length)throw Error('Response boundary outside recording');
 const gap=Buffer.alloc(plan.frames*samplesPerFrame*2);
 const assembled=pcmWav(Buffer.concat([pcm.subarray(0,cut),gap,pcm.subarray(cut)]));
 const shifted=structuredClone(alignment),shift=plan.frames/fps;
 for(let i=plan.characterBoundary;i<shifted.characters.length;i++){
  shifted.character_start_times_seconds[i]+=shift;shifted.character_end_times_seconds[i]+=shift;
 }
 const alignBytes=JSON.stringify(shifted,null,2)+'\n';
 const base=audio.replace(/\.wav$/,`-response-${sha(JSON.stringify(plan)+sha(fs.readFileSync(audio))).slice(0,12)}`);
 const target=base+'.wav',originalAlign=audio.replace(/\.wav$/,'.alignment.json'),originalMeta=audio.replace(/\.wav$/,'.generation.json');
 const assembledSeconds=(pcm.length+gap.length)/96000;
 const durationFrames=Math.ceil(assembledSeconds*fps);
 const receipt={schemaVersion:1,fps,textSha256:sha(source.text),audioSha256:sha(assembled),alignmentSha256:sha(alignBytes),durationFrames,
  dependencies:[{audioFile:audio,audioSha256:sha(fs.readFileSync(audio)),alignmentSha256:sha(fs.readFileSync(originalAlign)),generationSha256:sha(fs.readFileSync(originalMeta))}],
  items:[{kind:'audio',startFrame:0,endFrame:plan.startFrame},{kind:'silence',startFrame:plan.startFrame,endFrame:plan.endFrame},{kind:'audio',startFrame:plan.endFrame,endFrame:durationFrames}],responsePrompt:plan.afterText};
 const generation={...JSON.parse(fs.readFileSync(originalMeta,'utf8')),batch:null,assembly:{receipt:base+'.assembly.json',originalAudio:audio,originalAudioSha256:receipt.dependencies[0].audioSha256,insertedSilenceSeconds:shift},humanListening:'pending'};
 for(const [p,bytes] of [[target,assembled],[base+'.alignment.json',alignBytes],[base+'.generation.json',JSON.stringify(generation,null,2)+'\n'],[base+'.assembly.json',JSON.stringify(receipt,null,2)+'\n']]){
  if(fs.existsSync(p)){if(sha(fs.readFileSync(p))!==sha(bytes))throw Error('Preserving different response assembly: '+p);}else fs.writeFileSync(p,bytes,{flag:'wx'});
 }
 return {audio:target,alignment:shifted,seconds:assembledSeconds,plan};
}
