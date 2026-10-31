import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {allVisuals,modules,extraSamples} from './catalog';
import {CourseVisualFrame,ModuleSilentPreview,DetailSilentPreview} from './course-preview';
import './projectile/fonts';
const Root:React.FC=()=> <>
  {allVisuals.flatMap(v=>[false,true].map(phone=><Composition key={`${v.id}-${phone}`} id={`${v.id}${phone?'-phone':''}`} component={CourseVisualFrame} defaultProps={{visualId:v.id,phone}} durationInFrames={(v.seconds??12)*30} fps={30} width={phone?1080:1920} height={phone?1350:1080}/>))}
  {modules.map(m=><Composition key={m.number} id={`PhysicsModule${m.number}Silent`} component={ModuleSilentPreview} defaultProps={{module:m.number}} durationInFrames={720} fps={30} width={1920} height={1080}/>)}
  {extraSamples.map(sample=><Composition key={sample.id} id={sample.compositionId} component={DetailSilentPreview} defaultProps={{visualIds:sample.visualIds}} durationInFrames={sample.seconds*30} fps={30} width={1920} height={1080}/>)}
</>;
registerRoot(Root);
