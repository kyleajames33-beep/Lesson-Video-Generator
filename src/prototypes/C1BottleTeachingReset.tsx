import React, {useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Player, type PlayerRef} from '@remotion/player';
import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';
import type {LessonData, SceneData} from '../lesson/types';
import lesson from '../../docs/production/module5-starters-2026-10-10/chemistry/teaching-reset/lesson.json';
import {FONT_DISPLAY, FONT_MONO} from '../styles/tokens';
import '../styles/fonts';

export const C1_BEATS = lesson.scenes.map((scene, index) => ({...scene, at: lesson.scenes.slice(0,index).reduce((n,s)=>n+s.durationInFrames,0)}));
export const C1_FRAMES = lesson.scenes.reduce((n,s)=>n+s.durationInFrames,0);
const INK='#24382f', GREEN='#386c59', BLUE='#426b8b', PAPER='#faf9f5';
const Text = ({x,y,w=620,size=52,children}: {x:number;y:number;w?:number;size?:number;children:React.ReactNode}) => <div style={{position:'absolute',left:x,top:y,width:w,fontSize:size,lineHeight:1.22}}>{children}</div>;
const co2 = (x:number,y:number,key:string,opacity=1) => <g key={key} transform={`translate(${x} ${y})`} opacity={opacity}><path d="M-13 0H13" stroke="#837e76" strokeWidth="5"/><circle cx="-17" r="9" fill="#b26355"/><circle r="10" fill="#454945"/><circle cx="17" r="9" fill="#b26355"/></g>;

/** Separate molecule tracks cross a real liquid surface. Opening reduces inward traffic; it never disables it. */
const Bottle = ({frame,opened=false,moving=true,labels=true,demonstrate=false}: {frame:number;opened?:boolean;moving?:boolean;labels?:boolean;demonstrate?:boolean}) => {
  const f=moving?frame:0;
  const molecules: React.ReactNode[]=[];
  const liquidCount=opened?11-Math.min(4,Math.floor(Math.max(0,f-320)/170)):11;
  for(let i=0;i<(demonstrate&&f<360?2:liquidCount);i++) {
    // The two representative residents stay completely visible while students count.
    const x=demonstrate&&f<360?1110+i*280:1085+((i*97+Math.sin(f/51+i)*22+410)%350);
    const y=demonstrate&&f<360?750:610+((i*53+Math.cos(f/65+i)*20+190)%190);
    molecules.push(co2(x,y,`l${i}`));
  }
  for(let i=0;i<(demonstrate&&f<360?0:opened?3:6);i++) molecules.push(co2(1070+i*60+Math.sin(f/43+i)*15,370+(i%3)*47+Math.cos(f/61+i)*13,`g${i}`));
  if(moving&&demonstrate&&f<360){
    const u=Math.min(1,Math.max(0,(f-60)/120)); const v=Math.min(1,Math.max(0,(f-180)/120));
    molecules.push(co2(1170,640-u*200,'sample-out')); molecules.push(co2(1330,430+v*210,'sample-in'));
  }
  if(moving&&(!demonstrate||f>=360)){
    // Outward and inward events overlap; schedules are staggered rather than paired swaps.
    for(let i=0;i<3;i++){
      const u=((f+i*71)%180)/180;
      molecules.push(co2(1120+i*90,640-u*200,`out${i}`));
    }
    const inward=opened?1:3,period=opened?260:180;
    for(let i=0;i<inward;i++){
      const u=((f+39+i*61)%period)/period;
      molecules.push(co2(1160+i*90,430+u*210,`in${i}`));
    }
    if(opened) for(let i=0;i<3;i++) {const u=((f+i*67)%220)/220;molecules.push(co2(1250+u*420,270-u*135,`room${i}`,1-u*.6));}
  }
  return <svg width="1920" height="900" style={{position:'absolute',top:0,left:0}}>
    <defs><linearGradient id="glass" x1="0" x2="1"><stop stopColor="#fff" stopOpacity=".95"/><stop offset=".45" stopColor="#dce9e5" stopOpacity=".25"/><stop offset="1" stopColor="#b4cbc3" stopOpacity=".65"/></linearGradient><linearGradient id="water" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#d5e8ea"/><stop offset="1" stopColor="#b2d4d4"/></linearGradient><filter id="shadow"><feGaussianBlur stdDeviation="13"/></filter><clipPath id="bottleClip"><path d="M1195 260V300 Q1195 335 1030 365 V800 Q1030 830 1070 830H1450Q1490 830 1490 800V365Q1325 335 1325 300V260Z"/></clipPath></defs>
    <ellipse cx="1260" cy="840" rx="290" ry="20" fill="#9da99d" opacity=".2" filter="url(#shadow)"/>
    <g clipPath="url(#bottleClip)"><rect x="1025" y="555" width="470" height="280" fill="url(#water)"/><ellipse cx="1260" cy="555" rx="230" ry="12" fill="#c0dfe1"/>{molecules}</g>
    <path d="M1195 260V300 Q1195 335 1030 365 V800 Q1030 830 1070 830H1450Q1490 830 1490 800V365Q1325 335 1325 300V260" fill="url(#glass)" stroke="#758f87" strokeWidth="4"/>
    <path d="M1050 389V778" stroke="white" strokeWidth="12" opacity=".75"/>
    {!opened?<g><rect x="1180" y="232" width="160" height="34" rx="6" fill={GREEN}/>{[0,1,2,3,4,5,6,7].map(i=><path key={i} d={`M${1190+i*20} 239V257`} stroke="#a8c2b5" strokeWidth="2"/>)}</g>:<g transform="translate(145  -40) rotate(20 1260 245)"><rect x="1180" y="232" width="160" height="34" rx="6" fill={GREEN}/></g>}
    {opened&&moving&&[0,1,2].map(i=>{const u=((f+i*67)%220)/220;return co2(1250+u*420,270-u*135,`outside${i}`,1-u*.6);})}
    {labels&&<><text x="1540" y="428" fontSize="39" fill={INK}>Gas above the drink</text><path d="M1520 432H1458" stroke={GREEN} strokeWidth="2"/><text x="1540" y="730" fontSize="39" fill={INK}>Dissolved CO₂</text><path d="M1520 720H1440" stroke={GREEN} strokeWidth="2"/></>}
  </svg>;
};

export const C1BottleTeachingScene = ({scene,lesson:lessonData}: {scene:SceneData;lesson:LessonData}) => {
 const f=useCurrentFrame();
 const index=C1_BEATS.findIndex(item=>item.id===scene.id);
 if(index<0) throw Error('Unknown C1 teaching scene: '+scene.id);
 const cue=(key:string,fallback:number)=>scene.revealDelays?.[key]??fallback;
 const heading='heading' in scene?scene.heading:scene.caption;
 const attempt=index===6, feedback=index===7,notes=index===9;
 // Counts change at the same liquid-surface crossing times as the visible tracks.
 const countCrossings=(offsets:number[])=>offsets.reduce((n,t)=>n+Math.floor((f-t)/180)-Math.floor(-t/180),0);
 const left=countCrossings([76.5,5.5,-65.5]);
 const entered=countCrossings([68.14,7.14,-53.86]);
 const demoFrame=index===2?interpolate(f,[0,cue('leaving',60),cue('entering',180),cue('balanced',360)],[0,60,180,360],{extrapolateLeft:'clamp',extrapolateRight:'extend'}):f;
 const trackedLiquid=demoFrame<111?3:demoFrame<252?2:3;
 const stages=[
  ['Liquid below. Gas above.','Look inside the same sealed bottle.'],
  f<cue('entering',300)?['Dissolved means mixed through the liquid.','CO₂ can leave the liquid.']:['CO₂ can also enter the liquid.','Same molecule, different location.'],
  f<cue('balanced',350)?['Leaving removes CO₂ from the liquid.','Entering replaces it.']:['Equal average traffic keeps amounts steady.','Molecules keep crossing the surface.'],
  ['The opposing processes continue.','Same rate, possibly different amounts.'],
  f<cue('chemicalBridge',480)?['The whole book stays at rest.','Its forces balance.']:['Here, molecules change location.','Next: substances change in a reversible reaction.'],
  f<cue('openCap',320)?['The cap keeps matter inside.','Heat can still pass through the bottle.']:f<cue('netLoss',650)?['CO₂ escapes into a much larger room.','Less remains above the drink to return.']:['Less returns than leaves.','The drink loses dissolved CO₂ overall.'],
  [],[],
  ['Steady amounts, continuing exchange.','Next: how opposing reaction rates come to match.'],[]
 ];
 return <AbsoluteFill style={{background:PAPER,color:INK,fontFamily:FONT_DISPLAY}}>
  <Text x={90} y={45} w={1650} size={24}><span style={{fontFamily:FONT_MONO,letterSpacing:2}}>CHEMISTRY · A SEALED SPARKLING DRINK</span></Text>
  <Text x={90} y={112} w={1720} size={67}><strong>{feedback&&f<cue('replacement',330)?'What left was replaced':heading}</strong></Text>
  {!notes&&!attempt&&!feedback&&<>
   {index===4&&f<cue('chemicalBridge',480)?<svg width="1920" height="900" style={{position:'absolute'}}><rect x="1030" y="540" width="510" height="85" rx="7" fill="#ba8e61"/><path d="M1000 626H1640M1060 630V825M1580 630V825" stroke="#94775e" strokeWidth="16"/><path d="M1340 430V530M1320 510L1340 530L1360 510" stroke={BLUE} strokeWidth="5"/><path d="M1340 730V630M1320 650L1340 630L1360 650" stroke={GREEN} strokeWidth="5"/><text x="1130" y="443" fontSize="35" fill={INK}>Weight</text><text x="1430" y="740" fontSize="35" fill={INK}>Support</text></svg>:<Bottle frame={index===2?demoFrame:index===5&&f>=cue('openCap',320)?f-cue('openCap',320)+320:f} opened={index===5&&f>=cue('openCap',320)} demonstrate={index===2}/>}
   <Text x={95} y={300} w={730} size={57}>{stages[index][0]}</Text>
   <Text x={95} y={560} w={720} size={45}>{stages[index][1]}</Text>
   {index===2&&demoFrame<360&&<div style={{position:'absolute',left:95,top:650,width:740,color:GREEN}}><div style={{fontSize:29,fontFamily:FONT_MONO}}>REPRESENTATIVE LIQUID POOL</div><div style={{display:'flex',gap:100,alignItems:'end',height:125,marginTop:15}}>{[3,trackedLiquid].map((count,i)=><div key={i}><div style={{display:'flex',flexDirection:'column-reverse',gap:3,height:78,justifyContent:'start'}}>{Array.from({length:count},(_,n)=><div key={n} style={{width:95,height:24,background:i?GREEN:BLUE}}/>)}</div><div style={{fontSize:32,marginTop:10}}>{i?'Now':'Before'}: {count}</div></div>)}</div></div>}
   {index===3&&f>=cue('memory',780)&&<Text x={95} y={750} w={700} size={37}>Two-way traffic: same rate, different amounts.</Text>}
   {index===5&&f>=cue('netLoss',650)&&<Text x={95} y={760} w={680} size={37}>Some CO₂ still dissolves back in.</Text>}
  </>}
  {(attempt||feedback)&&<>
   <div style={{position:'absolute',left:95,top:250,width:720,borderTop:`3px solid ${GREEN}`,paddingTop:22}}>
    <div style={{fontSize:31,fontFamily:FONT_MONO,color:GREEN}}>MOLECULE-TRACKING MODEL</div>
    {(!feedback||f<cue('replacement',330))&&<div style={{fontSize:41,lineHeight:1.35,marginTop:24}}>Sealed bottle. Only liquid ↔ gas transfer.</div>}
    {(!feedback||f<cue('replacement',330))&&<div style={{fontSize:37,lineHeight:1.35,marginTop:18}}>Constant temperature and both region volumes.</div>}
    {(feedback||f>=cue('interval',210))&&<div style={{fontSize:43,marginTop:36}}>Each interval: <strong>10 seconds</strong></div>}
    {(feedback||f>=cue('departures',360))&&<div style={{fontSize:46,marginTop:22}}><strong>60</strong> leave the liquid.</div>}
    {(feedback||f>=cue('unchangedAmount',510))&&<div style={{fontSize:44,marginTop:28}}>Liquid: <strong>120 before → 120 after</strong><div style={{fontSize:34,marginTop:16}}>Same record in several consecutive intervals.</div></div>}
   </div>
   <div style={{position:'absolute',left:945,top:265,width:830}}>
    {attempt&&f>=cue('question',660)&&<><div style={{fontSize:53,lineHeight:1.25}}>How many entered in each interval? Explain.</div><div style={{fontSize:47,lineHeight:1.25,marginTop:55}}>Has exchange stopped, or is it continuing in balance? Explain.</div><div style={{fontSize:35,marginTop:65,color:GREEN}}>Think, or pause for longer.</div></>}
    {feedback&&<><div style={{fontSize:58,lineHeight:1.2}}>{f<cue('replacement',330)?'The liquid amount did not change.':f<cue('balancedExchange',660)?'60 returned, replacing 60 that left.':'Both directions continue at matching average rates.'}</div><div style={{fontSize:43,lineHeight:1.3,marginTop:55}}>{f<cue('replacement',330)?'What left must have been replaced.':f<cue('balancedExchange',660)?'Same interval: 10 seconds.':'Balanced exchange, not stopped exchange.'}</div>{f>=cue('replacement',330)&&<div style={{fontSize:45,marginTop:55,color:GREEN}}>60 out · 60 in · 10 seconds</div>}</>}
   </div>
  </>}
  {notes&&<div style={{position:'absolute',left:100,top:285,width:1700,display:'grid',gap:38,fontSize:45,lineHeight:1.25}}>{(lessonData.teachingNotes??lesson.notes).map(n=><div key={n}>{n}</div>)}<div style={{fontSize:31,color:GREEN,marginTop:16}}>Pause if you would like more time to write.</div></div>}
 </AbsoluteFill>;
};

export const C1BottleTeachingReset = () => {
 const frame=useCurrentFrame();
 const scene=C1_BEATS[C1_BEATS.reduce((n,item,i)=>frame>=item.at?i:n,0)];
 return <Sequence from={scene.at} durationInFrames={scene.durationInFrames}><C1BottleTeachingScene scene={scene as unknown as SceneData} lesson={lesson as unknown as LessonData}/></Sequence>;
};

const Review = () => {
 const ref=useRef<PlayerRef>(null),[width,setWidth]=useState(960),[active,setActive]=useState(0);
 return <main><h1>C1 bottle teaching reset</h1><p>Silent teaching preview. Draft narration is available below; new recorded narration, captions and production integration are pending. Molecules are magnified schematic representatives.</p><div className="controls"><button onClick={()=>setWidth(width===960?480:960)}>{width===960?'View at 480 px':'View at 960 px'}</button>{C1_BEATS.map((s,i)=><button key={s.id} onClick={()=>{ref.current?.seekTo(s.at+90);setActive(i);}}>{i+1}. {s.heading}</button>)}</div><div style={{width,maxWidth:'100%'}}><Player ref={ref} component={C1BottleTeachingReset} durationInFrames={C1_FRAMES} fps={30} compositionWidth={1920} compositionHeight={1080} controls style={{width:'100%'}}/></div><h2>Draft narration: {C1_BEATS[active].heading}</h2><p>{C1_BEATS[active].voiceover.text||'Quiet copying hold.'}</p><p>Pending: independent science and student learning review, motion and narrow-screen review, new audio/alignment, faithful captions, human listening and release gates.</p></main>;
};
if(typeof document!=='undefined'&&document.getElementById('c1-reset-root')) createRoot(document.getElementById('c1-reset-root')!).render(<Review/>);
