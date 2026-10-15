import React from 'react';
import {Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {FadeUp} from '../../../../animations/FadeUp';
import {ScribbleAnnotation, ScribbleCircle, ScribbleUnderline} from '../../../../animations/DoodlePrimitives';
import {PauseCountdown} from '../../../QuickCheckSlide';
import {FONT_DISPLAY, FONT_HAND, FONT_MONO, TOK} from '../../../../styles/tokens';

// A diagram in the standard ConceptSlide, not a lesson-level renderer.
// Camera and annotation coordinates share the original botanical plate space.
type Beat = {at:number;view:string;line:string};
type Props = {mode:string;beats:Beat[];art:string;earlyArt?:string;hold?:{startFrame:number;endFrame:number};notes?:string[]};
const clamp = {extrapolateLeft:'clamp' as const,extrapolateRight:'clamp' as const};
const smooth = (f:number,a:number,b:number) => {const u=interpolate(f,[a,b],[0,1],clamp);return u*u*(3-2*u);};
const BLUE='#1f6fb2', GREEN='#386348';
const CAPTURE={x:910,y:416};

export const RunnerMotionDiagram = ({mode,beats,art,earlyArt,hold,notes=[]}:Props) => {
 const f=useCurrentFrame();
 const current=beats.reduce((a,b)=>f>=b.at?b:a,beats[0]);
 const isTask=mode==='runner-attempt'||mode==='runner-feedback';
 const node=mode==='runner-node',resource=mode==='runner-resources',memory=mode==='runner-memory';
 const close=node||resource||isTask;
 const p=resource?1:smooth(f,15,105),z=close?1+.75*p:1;
 const tx=close?(540-CAPTURE.x*1.75)*p:0,ty=close?(365-CAPTURE.y*1.75)*p:0;
 const at=(view:string,fallback:number)=>beats.find(b=>b.view===view)?.at??fallback;
 const point=(x:number,y:number)=>({x:tx+x*z,y:ty+y*z});
 const crown=point(910,416),root=point(919,509),leaf=point(918,isTask?365:284);
 const whole=mode==='runner-question'||mode==='runner-asexual';
 const cut=mode==='runner-independent';
 const rightStyle:React.CSSProperties={position:'absolute',left:1190,top:50,width:495};
 const underline=(width=400)=><ScribbleUnderline width={width} delay={24} color={TOK.amber}/>;
 if(mode==='key-notes')return <div style={{position:'relative',height:620,fontFamily:FONT_DISPLAY}}>
   <div style={{fontFamily:FONT_HAND,color:BLUE,fontSize:62,marginBottom:34}}>Keep the reason with the rule.</div>
   {notes.map((text,i)=><div key={text} style={{fontSize:43,lineHeight:1.3,marginBottom:28,maxWidth:1500}}><span style={{color:BLUE,marginRight:22,fontFamily:FONT_MONO,fontSize:26}}>{String(i+1).padStart(2,'0')}</span>{text}</div>)}
   <div style={{fontSize:29,color:TOK.inkDim,marginTop:30}}>Pause here to copy.</div>
 </div>;
 return <div style={{position:'relative',height:620,fontFamily:FONT_DISPLAY}}>
  <div style={{position:'absolute',left:0,top:0,width:1135,height:620,overflow:'hidden',borderRadius:16}}>
   <div style={{position:'absolute',left:0,top:0,width:1120,height:630,transformOrigin:'0 0',transform:`translate(${tx}px,${ty}px) scale(${z})`}}>
    <Img src={staticFile((isTask||node)&&earlyArt?earlyArt:art)} alt={isTask?'Illustrative earlier runner stage. Leaves above soil; roots not yet developed.':'Painted strawberry parent connected by a runner to a developing daughter plant'} style={{width:1120,height:630,mixBlendMode:'multiply'}}/>
    {node&&<svg width={1120} height={630} style={{position:'absolute',inset:0}} aria-label="Illustrated development: leaves enlarge above the node as roots extend into the soil">
      <defs><clipPath id="runner-leaf-growth"><rect x={770} y={160} width={350} height={262}/></clipPath><linearGradient id="runner-root-front" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="white"/><stop offset="88%" stopColor="white"/><stop offset="100%" stopColor="black"/></linearGradient><mask id="runner-root-growth"><rect x={0} y={416} width={1120} height={230*smooth(f,150,340)} fill="url(#runner-root-front)"/></mask></defs>
      <g clipPath="url(#runner-leaf-growth)" opacity={smooth(f,116,180)}><image href={staticFile(art)} width={1120} height={630} transform={`translate(910 416) scale(${.45+.55*smooth(f,116,340)}) translate(-910 -416)`}/></g>
      <g mask="url(#runner-root-growth)"><image href={staticFile(art)} width={1120} height={630}/></g>
      <image href={staticFile(art)} width={1120} height={630} opacity={smooth(f,340,390)}/>
    </svg>}
    {mode==='runner-stem'&&<svg width={1120} height={630} style={{position:'absolute',inset:0}}><path d="M258 397C423 342 515 380 641 391S795 405 909 413" pathLength={1} stroke={TOK.amber} strokeWidth={5} strokeLinecap="round" fill="none" strokeDasharray={1} strokeDashoffset={1-smooth(f,0,180)}/></svg>}
    {cut&&f>45&&<svg width={1120} height={630} style={{position:'absolute',inset:0}}><path d="M703 390L725 410" stroke={TOK.bg} strokeWidth={14}/><path d="M700 381l30 38M730 381l-30 38" pathLength={1} stroke={TOK.amberInk} strokeWidth={3} fill="none" strokeDasharray={1} strokeDashoffset={1-smooth(f,45,75)}/></svg>}
   </div>
   {node&&f>=110&&<div style={{position:'absolute',left:crown.x-40,top:crown.y-26}}><ScribbleCircle width={80} height={55} strokeWidth={2} delay={110} color={TOK.amber} /></div>}
   {node&&<ScribbleAnnotation x={crown.x} y={crown.y} dx={120} dy={-40} label="node" fontSize={42} delay={112} color={TOK.amberInk}/>}
   {resource&&current.view==='roots'&&f>105&&<>
    <ScribbleAnnotation x={root.x} y={root.y} dx={180} dy={-15} label="water in" fontSize={40} delay={110} color={BLUE}/>
    <svg width={1135} height={620} style={{position:'absolute',inset:0}}>{[0,1,2].map(i=>{const u=((f-105+i*31)%110)/110;return <circle key={i} cx={root.x-45+i*36} cy={root.y+25-u*95} r={5} fill={BLUE} opacity={Math.sin(u*Math.PI)}/>;})}</svg>
   </>}
   {resource&&current.view==='leaves'&&<>
    <ScribbleAnnotation x={leaf.x} y={leaf.y} dx={200} dy={-25} label="light in" fontSize={40} delay={at('leaves',147)} color={TOK.amberInk}/>
    <svg width={1135} height={620} style={{position:'absolute',inset:0}}>{[0,1,2].map(i=><path key={i} d={`M${leaf.x-110+i*70} 20L${leaf.x-80+i*45} ${leaf.y-20}`} stroke={TOK.amber} strokeWidth={3} pathLength={1} strokeDasharray={1} strokeDashoffset={1-smooth(f,at('leaves',147)+i*12,at('leaves',147)+55+i*12)}/>)}</svg>
   </>}
   {whole&&<><ScribbleAnnotation x={250} y={400} dx={-110} dy={-60} label="parent" fontSize={38} delay={35} color={GREEN}/><ScribbleAnnotation x={910} y={415} dx={60} dy={-100} label="new plant" fontSize={38} delay={90} color={GREEN}/></>}
   {mode==='runner-stem'&&<ScribbleAnnotation x={605} y={387} dx={30} dy={-100} label="a stem, not a root" fontSize={38} delay={212} color={TOK.amberInk}/>}
   {isTask&&f>=105&&<ScribbleAnnotation x={leaf.x} y={leaf.y} dx={155} dy={-30} label="leaves started" fontSize={36} delay={110} color={GREEN}/>}
  </div>
  <div style={rightStyle}>
   {mode==='runner-question'?<FadeUp delay={35}><div style={{fontFamily:FONT_HAND,fontSize:72,lineHeight:1.08,color:BLUE}}>A new plant.<br/>Without a seed.</div>{underline()}<p style={{fontSize:37,lineHeight:1.3,marginTop:40}}>How does it become independent?</p></FadeUp>:
    isTask?<><div style={{fontFamily:FONT_HAND,fontSize:62,color:BLUE}}>{mode==='runner-attempt'?'Your turn':'The missing piece'}</div><p style={{fontSize:37,lineHeight:1.25}}>{mode==='runner-attempt'?'Attached to the parent. Leaves started. No roots.':'Without roots, it cannot take up its own water from the soil.'}</p><div style={{height:3,width:420,background:TOK.rule,margin:'22px 0'}}/><p style={{fontSize:35,lineHeight:1.25}}>{mode==='runner-attempt'?'Could it grow separately if the runner were cut? Explain which resource it cannot yet take up for itself.':'It still depends on the connection while it develops.'}</p></>:
    memory?<><div style={{fontFamily:FONT_HAND,fontSize:68,lineHeight:1.08,color:BLUE}}>Roots and leaves first.</div>{underline()}<FadeUp delay={130}><div style={{fontFamily:FONT_HAND,fontSize:64,lineHeight:1.08,marginTop:32}}>Separation later.</div></FadeUp><p style={{fontSize:32,color:TOK.inkDim,marginTop:35}}>The structures explain the order.</p></>:
    <FadeUp key={current.at} delay={current.at} dy={12}><div style={{fontFamily:FONT_HAND,fontSize:65,lineHeight:1.08,color:BLUE}}>{mode==='runner-stem'?'Follow the stem.':node?'A growing point.':resource?(current.view==='roots'?'Roots take up water.':current.view==='leaves'?'Leaves make food.':'Now it can support itself.'):cut?'Ready before the cut.':'Asexual reproduction.'}</div>{underline()}<p style={{fontSize:36,lineHeight:1.3,marginTop:32}}>{mode==='runner-stem'?'The parent stays connected while the young plant develops.':node?(f<392?'Leaves above. Roots below.':'This illustration shows the established stage.'):resource?(current.view==='roots'?'Water comes from the soil.':current.view==='leaves'?'Photosynthesis uses light to make food.':'Its own roots and leaves support growth.'):cut?'Its roots and leaves are already working.':f<284?'A new plant grew from the parent stem.':'Vegetative propagation: a new plant from a parent part.'}</p></FadeUp>}
  </div>
  {hold&&<div style={{position:'absolute',left:1500,top:520,width:168,height:168,transform:'scale(.62)',transformOrigin:'top left'}}><PauseCountdown startFrame={hold.startFrame} endFrame={hold.endFrame} fps={30} durationSeconds={(hold.endFrame-hold.startFrame)/30} opacity={1} position={{left:0,right:'auto',top:0,bottom:'auto'}}/></div>}
  <div style={{position:'absolute',left:18,top:638,fontSize:24,color:TOK.inkDim}}>{isTask?'Illustrative early stage.':'Botanical illustration.'}{hold&&f>=hold.startFrame?' Pause if you would like longer.':''}</div>
 </div>;
};
