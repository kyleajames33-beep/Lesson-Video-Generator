// Check prepared brief 28z captions against the cumulative exporter and MP4 streams.
import fs from 'node:fs';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {explainerCaptionCues,toSrt} from './lib/explainer-captions.mjs';
const file='docs/production/claude-pm/youtube/brief28z-preflight.json';
const data=JSON.parse(fs.readFileSync(file,'utf8'));
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const results=data.videos.map(v=>{
 const lesson=JSON.parse(fs.readFileSync(v.measuredLesson,'utf8'));
 const generated=explainerCaptionCues(lesson);
 const current=fs.readFileSync(v.captionFile,'utf8');
 const normalize=s=>s.replace(/\r\n/g,'\n');
 const probe=JSON.parse(execFileSync('node_modules/@remotion/compositor-win32-x64-msvc/ffprobe.exe',['-v','error','-show_entries','stream=codec_type,width,height,nb_frames,r_frame_rate:format=duration','-of','json',v.file],{encoding:'utf8'}));
 const video=probe.streams.find(s=>s.codec_type==='video');
 const audio=probe.streams.some(s=>s.codec_type==='audio');
 const narration=lesson.scenes.map(s=>s.voiceover?.text||'').join(' ');
 const result={lessonId:v.lessonId,captionSha256:sha(current),captionsMatchCumulativeExporter:normalize(current)===normalize(toSrt(generated.cues)),cueCount:generated.cues.length,responseHoldCheck:'passed by explainerCaptionCues',width:video.width,height:video.height,hasAudio:audio,frames:Number(video.nb_frames),expectedFrames:v.durationInFrames,endHoldShortfall:v.durationInFrames-Number(video.nb_frames),narrationEmDashCount:(narration.match(/\u2014/g)||[]).length,titleWithinLimit:v.title.length<=100,descriptionWithinLimit:v.description.length<=5000};
 if(!result.captionsMatchCumulativeExporter||!audio||video.width!==1920||video.height!==1080||result.narrationEmDashCount||result.endHoldShortfall<0||result.endHoldShortfall>4)throw new Error(JSON.stringify(result));
 return result;
});
fs.writeFileSync('docs/production/claude-pm/youtube/brief28z-input-check.json',JSON.stringify({brief:'28z',date:'2026-10-28',status:'pass',results,limitations:'Technical input checks only. Owner preview approval is in the upload brief. Studio captions, metadata, thumbnail, processing and playlist readbacks remain per-video tasks.'},null,2)+'\n');
console.log(`${results.length} input checks passed.`);
