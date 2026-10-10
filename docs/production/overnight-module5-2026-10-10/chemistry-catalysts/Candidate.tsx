import React from 'react';
import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';
import {TransitionSeries,springTiming} from '@remotion/transitions';
import {SlideChrome} from '../../../../src/slides/shared/SlideChrome';
import {AccentContext,themeFor} from '../../../../src/styles/theme';
import {cinematicTransition} from '../../../../src/transitions/cinematicTransitions';
import {Axes,Gap,polyPath} from '../../../../src/slides/diagrams/kinds/chem-y12-m5/lcKit';
import {STONE} from '../../../../src/slides/diagrams/diorama';
import '../../../../src/styles.css';
import '../../../../src/styles/fonts';
import lesson from './lesson.json';
const clamp={extrapolateLeft:'clamp',extrapolateRight:'clamp'} as const;
const GREEN='#0d6b52',PURPLE='#7650ab';
const progress=(f:number,start:number,end:number)=>interpolate(f,[start,end],[0,1],clamp);
// Adapt the library's stone-profile vocabulary, with exact shared endpoints.
// This single-hump example is schematic and does not claim a universal mechanism.
const profile=(peak:number)=>Array.from({length:101},(_,i)=>{
 const u=i/100;const y=u<.15?340:u<.5?340+(peak-340)*(1-Math.cos(Math.PI*(u-.15)/.35))/2:u<.85?410+(peak-410)*(1+Math.cos(Math.PI*(u-.5)/.35))/2:410;
 return [250+u*1170,y] as [number,number];
});
const Profile=()=>{const f=useCurrentFrame();const cat=progress(f,390,445);const main=polyPath(profile(100));return <svg viewBox="0 0 1600 620" style={{width:'100%'}} role="img" aria-label="Schematic exothermic energy profile. Energy is plotted against progress along a pathway, not time. The alternative catalysed pathway has a lower barrier and exactly the same reactant and product endpoint energy levels. No general rate multiplier is represented.">
 <Axes x0={160} y0={50} x1={1510} y1={520} xLabel="Reaction progress, not time" yLabel="Energy" size={42}/>
 <path d={main+' L1420 480 L250 480 Z'} fill={STONE.topLight}/>
 <path d={main} fill="none" stroke="#555" strokeWidth={7}/>
 <path d={polyPath(profile(235),cat)} fill="none" stroke={GREEN} strokeWidth={9} opacity={cat>0?1:0}/>
 <text x={760} y={70} fontSize={42} fontWeight={700} textAnchor="middle">Uncatalysed pathway</text>
 
 <text x={270} y={400} fontSize={42} fontWeight={700}>Reactants</text><text x={1320} y={465} fontSize={42} fontWeight={700} textAnchor="middle">Products</text>
 {f<390?<><Gap x={590} y1={340} y2={100} color="#555" w={4}/><text x={300} y={215} fontSize={40}>Energy hurdle</text></>:<><Gap x={740} y1={340} y2={235} color={GREEN} w={4}/></>}
 <text x={320} y={610} fontSize={40} fill={f>=700?GREEN:'#555'}>{f>=700?'Green: lower pathway. Endpoint energies stay fixed':cat>0?'Green: lower alternative pathway':'Schematic exothermic example; no numerical energy scale'}</text>
 </svg>};
const curve=(tau:number)=>Array.from({length:101},(_,i)=>{const u=i/100;return [240+u*1200,490-350*(1-Math.exp(-u/tau))] as [number,number]});
const Graph=({feedback=false}:{feedback?:boolean})=>{const f=useCurrentFrame();const draw=progress(f,60,240);const early=feedback&&f<300;return <svg viewBox="0 0 1600 620" style={{width:'100%'}} role="img" aria-label="Schematic product concentration against time for identical product-forming initial mixtures at the same fixed volume and temperature. The catalysed curve rises faster. Both approach the same equilibrium concentration asymptotically. No exact experimental times or finite point of equilibrium are shown.">
 <Axes x0={160} y0={70} x1={1510} y1={520} xLabel="Time" yLabel="Product concentration" size={42}/>
 <line x1={220} x2={1480} y1={140} y2={140} stroke="#555" strokeWidth={3} strokeDasharray="16 12"/>
 <text x={900} y={100} fontSize={40} fontWeight={700} textAnchor="middle">Common equilibrium level</text>
 <path d={polyPath(curve(.31),draw)} fill="none" stroke={PURPLE} strokeWidth={7} strokeDasharray="15 10"/>
 <path d={polyPath(curve(.12),draw)} fill="none" stroke={GREEN} strokeWidth={8}/>
 <text x={610} y={225} fontSize={42} fontWeight={700} fill={GREEN}>With catalyst</text><text x={890} y={380} fontSize={42} fontWeight={700} fill={PURPLE}>Without catalyst</text>
 {early&&<><line x1={480} x2={480} y1={150} y2={510} stroke="#b86e0a" strokeWidth={4}/><text x={340} y={605} fontSize={40} fill="#b86e0a">At an earlier time: more product can be present</text></>}
 {!early&&<text x={300} y={605} fontSize={40} fill="#555">Schematic curves approach the same level, not an exact finishing time</text>}
 </svg>};
const Scene=({scene,index}:{scene:any,index:number})=>{const f=useCurrentFrame();const lines=scene.body.split('\n');const profileScene=scene.id==='c4b-path';const graphScene=['c4b-approach','c4b-feedback'].includes(scene.id);return <AbsoluteFill style={{background:'#f7f7f5',color:'#1a1a1a',fontFamily:'Inter Tight'}}><SlideChrome lesson={lesson as any} sceneIndex={index+1} totalScenes={lesson.scenes.length}/><div style={{position:'absolute',left:100,top:135,width:1720}}><h1 style={{fontSize:72,lineHeight:1.1,margin:'0 0 48px',fontWeight:750}}>{scene.heading}</h1>
 {profileScene?<Profile/>:graphScene?<><div style={{fontSize:36,color:'#555',marginBottom:16}}>Same reacting amounts, starting composition, fixed volume and temperature</div><Graph feedback={scene.id==='c4b-feedback'}/></>:scene.id==='c4b-opening'?<div style={{fontSize:78,fontWeight:700,lineHeight:1.4,color:GREEN}}>{f<210?lines[0]:lines[1]}</div>:scene.id==='c4b-constant'?<><div style={{fontSize:60,lineHeight:1.3,marginTop:50}}>{lines[0]}</div>{f>=180&&<div style={{fontSize:60,color:GREEN,fontWeight:700,marginTop:80}}>{lines[1]}</div>}</>:lines.map((line:string,i:number)=><div key={i} style={{fontSize:scene.id==='c4b-response'?46:50,lineHeight:1.22,padding:'22px 0',borderBottom:scene.id==='c4b-notes'?'2px solid #ddd':undefined,fontWeight:scene.id==='c4b-response'&&i>=3?700:500,color:scene.id==='c4b-equilibrium'&&i===2?GREEN:undefined}}>{line}</div>)}
 {scene.id==='c4b-response'&&<div style={{fontSize:36,color:'#555',marginTop:20}}>Take a moment to decide. Pause if you need longer.</div>}
 </div></AbsoluteFill>};
export const Candidate=()=> <AccentContext.Provider value={themeFor('Chemistry')}><TransitionSeries>{lesson.scenes.flatMap((scene,index)=>[...(index?[<TransitionSeries.Transition key={'t'+scene.id} presentation={cinematicTransition({accent:'#148a6f',kind:'shapeWipe'})} timing={springTiming({config:{damping:15,stiffness:180,mass:.55},durationInFrames:24})}/>]:[]),<TransitionSeries.Sequence key={scene.id} durationInFrames={scene.durationInFrames}><Scene scene={scene} index={index}/></TransitionSeries.Sequence>])}</TransitionSeries></AccentContext.Provider>;
