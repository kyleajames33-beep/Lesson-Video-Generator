import {readFileSync} from 'node:fs';
import {lessonTimeline} from '../../src/lesson/timeline.mjs';
import {publicPath, sha256} from './playback-assembly.mjs';
import {decodePcm, pcmWav} from './media-tools.mjs';

// An explicit fallback for narrated, hook-first lessons. It uses the same
// scene offsets, playback windows and 0.96 volume as SceneVoiceover.
export function assembleTimelineNarration(lesson, {root=process.cwd(), frameRange,
  decode=file=>decodePcm(file,root), read=file=>readFileSync(file)}={}) {
  const timeline=lessonTimeline(lesson);
  if(timeline.introFrames!==0)throw Error('Aligned PCM export requires a hook-first lesson without intro audio or music.');
  const samplesPerFrame=48000/timeline.fps;
  if(!Number.isInteger(samplesPerFrame))throw Error('Narration fps must divide 48000.');
  const first=frameRange?.[0]??0,last=frameRange?.[1]??timeline.durationInFrames-1;
  if(!Number.isInteger(first)||!Number.isInteger(last)||first<0||last<first||last>=timeline.durationInFrames)throw Error('Invalid narration frame range.');
  const track=new Int32Array(timeline.durationInFrames*samplesPerFrame), dependencies=[];
  for(const entry of timeline.scenes){
    const voice=entry.scene.voiceover;
    if(!voice?.audioFile)throw Error('Missing scene narration: '+entry.scene.id);
    const start=voice.startFrame??0,end=voice.endFrame??entry.scene.durationInFrames;
    if(!Number.isInteger(start)||!Number.isInteger(end)||start<0||end<=start||end>entry.scene.durationInFrames)throw Error('Invalid scene narration window.');
    const file=publicPath(root,voice.audioFile),pcm=decode(file);
    if(!Buffer.isBuffer(pcm)||!pcm.length||pcm.length%2)throw Error('Invalid decoded PCM.');
    const offset=(entry.startFrame+start)*samplesPerFrame;
    const count=Math.min(pcm.length/2,(end-start)*samplesPerFrame,track.length-offset);
    for(let i=0;i<count;i++)track[offset+i]+=Math.round(pcm.readInt16LE(i*2)*0.96);
    dependencies.push({sceneId:entry.scene.id,audioFile:voice.audioFile,audioSha256:sha256(read(file)),startFrame:entry.startFrame+start,endFrame:entry.startFrame+end});
  }
  const begin=first*samplesPerFrame,count=(last-first+1)*samplesPerFrame,pcm=Buffer.alloc(count*2);
  for(let i=0;i<count;i++){
    const sample=track[begin+i];
    if(sample<-32768||sample>32767)throw Error('Overlapping narration clips the assembled track.');
    pcm.writeInt16LE(sample,i*2);
  }
  const wav=pcmWav(pcm);
  return {wav,record:{schemaVersion:1,mode:'aligned-pcm',sampleRate:48000,channels:1,volume:0.96,
    fps:timeline.fps,frameRange:[first,last],sampleCount:count,wavSha256:sha256(wav),dependencies}};
}
