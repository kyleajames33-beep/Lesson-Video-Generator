import React from 'react';
import {AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY} from '../../styles/tokens';
import {allVisuals,modules} from './catalog';
import {C} from './course-kit';
import {DiagramAudit} from './diagram-audit';
import {visualProgress} from './timing';

const wrap=(s:string,max:number)=>{
  const lines:string[]=[];
  for(const word of s.split(' ')){if(lines.length&&`${lines.at(-1)} ${word}`.length<=max)lines[lines.length-1]+=' '+word;else lines.push(word);}
  return lines;
};
export const CourseVisualFrame:React.FC<{visualId:string;phone?:boolean;seconds?:number;qa?:boolean}>=({visualId,phone=false,seconds,qa=false})=>{
  const frame=useCurrentFrame(),{fps}=useVideoConfig(),spec=allVisuals.find(v=>v.id===visualId);
  if(!spec)throw new Error(`Unknown Physics visual ${visualId}`);
  const Visual=spec.component,p=visualProgress(frame,fps,seconds??spec.seconds??12);
  const title=wrap(spec.title,phone?32:70),focus=wrap(spec.focus,phone?47:110);
  return <AbsoluteFill style={{background:C.paper,fontFamily:FONT_DISPLAY}}>
    <svg viewBox={phone?'0 0 1080 1350':'0 0 1920 1080'} width="100%" height="100%">
      <text x={phone?42:92} y={phone?62:52} fill={C.orange} fontFamily={FONT_DISPLAY} fontSize={phone?30:25} fontWeight={750}>HSC PHYSICS • MODULE {spec.id.slice(1,2)}</text>
      {title.map((line,i)=><text key={i} x={phone?42:92} y={(phone?136:124)+i*(phone?64:66)} fill={C.ink} fontFamily={FONT_DISPLAY} fontSize={phone?53:62} fontWeight={800}>{line}</text>)}
      {focus.map((line,i)=><text key={i} x={phone?42:92} y={(phone?145+title.length*64:175)+i*(phone?48:40)} fill={C.muted} fontFamily={FONT_DISPLAY} fontSize={phone?36:32}>{line}</text>)}
      <g transform={phone?'translate(0 400) scale(.98181818)':'translate(260 212) scale(1.27272727)'}><DiagramAudit id={visualId} enabled={qa}><Visual progress={p}/></DiagramAudit></g>
      <text x={phone?42:92} y={phone?1160:1050} fill={C.muted} fontFamily={FONT_DISPLAY} fontSize={phone?30:26}>Silent visual study • Motion illustrates the stated model.</text>
      <text x={phone?42:1820} y={phone?1212:1050} textAnchor={phone?'start':'end'} fill={C.orange} fontFamily={FONT_DISPLAY} fontSize={phone?30:26}>Lesson support: {spec.siteLessons.map(n=>String(n).padStart(2,'0')).join(', ')}</text>
    </svg>
  </AbsoluteFill>;
};
export const sampleIds=(module:number)=>({5:['m5-launch-angle','m5-vertical-loop','m5-kepler'],6:['m6-plates','m6-generator-flux','m6-eddy-brake'],7:['m7-em-geometry','m7-light-clock','m7-photoelectric'],8:['m8-expansion','m8-rutherford','m8-accelerator']} as Record<number,string[]>)[module];
export const ModuleSilentPreview:React.FC<{module:number}>=({module})=><>{sampleIds(module).map((id,i)=><Sequence key={id} from={i*240} durationInFrames={240}><CourseVisualFrame visualId={id} seconds={8}/></Sequence>)}</>;
export const DetailSilentPreview:React.FC<{visualIds:string[]}>=({visualIds})=>{
  let start=0;
  return <>{visualIds.map(id=>{const seconds=allVisuals.find(v=>v.id===id)?.seconds??12,from=start;start+=seconds*30;return <Sequence key={id} from={from} durationInFrames={seconds*30}><CourseVisualFrame visualId={id} seconds={seconds}/></Sequence>;})}</>;
};
