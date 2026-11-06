import {alignmentToCaptions} from './caption-timeline.mjs';

export function applyGoogleSceneTiming(scene,source,audio,alignment,seconds,fps=30){
 const frames=Math.ceil(seconds*fps),hold=Math.round((scene.holdSeconds??0)*fps);
 scene.voiceover={...scene.voiceover,text:source.text,audioFile:audio,startFrame:0,endFrame:frames};
 scene.captions=alignmentToCaptions(alignment);
 if(scene.holdKind==='countdown'){
  const countdown=Math.round((scene.planningResponseInterval?.countdownSeconds??scene.holdSeconds??0)*fps);
  if(countdown>hold)throw Error(`Countdown exceeds quiet interval: ${scene.id}`);
  scene.responseHold={startFrame:frames,endFrame:frames+countdown};
 }
 scene.durationInFrames=frames+hold;
}
