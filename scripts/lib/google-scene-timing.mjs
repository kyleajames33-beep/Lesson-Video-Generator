import {alignmentToCaptions} from './caption-timeline.mjs';
import {insertGoogleResponseHold} from './google-response-hold.mjs';

export function applyGoogleSceneTiming(scene,source,audio,alignment,seconds,fps=30){
 const inserted=insertGoogleResponseHold(scene,source,audio,alignment,seconds,fps);
 ({audio,alignment,seconds}=inserted);
 const frames=Math.ceil(seconds*fps),hold=Math.round((scene.holdSeconds??0)*fps)-(inserted.plan?.frames??0);
 if(hold<0)throw Error('Response gap exceeds planned hold: '+scene.id);
 scene.voiceover={...scene.voiceover,text:source.text,audioFile:audio,startFrame:0,endFrame:frames};
 scene.captions=alignmentToCaptions(alignment);
 if(scene.holdKind==='countdown'){
  const countdown=Math.round((scene.planningResponseInterval?.countdownSeconds??scene.holdSeconds??0)*fps);
  if(countdown>hold+(inserted.plan?.frames??0))throw Error(`Countdown exceeds quiet interval: ${scene.id}`);
  scene.responseHold=inserted.plan?{startFrame:inserted.plan.startFrame,endFrame:inserted.plan.endFrame}:{startFrame:frames,endFrame:frames+countdown};
 }
 scene.durationInFrames=frames+hold;
}
