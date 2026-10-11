import React from 'react';
import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import type {LessonData,SceneData} from '../lesson/types';
import {FONT_DISPLAY,FONT_MONO} from '../styles/tokens';
import {Axes,Gap,polyPath} from '../slides/diagrams/kinds/chem-y12-m5/lcKit';
import {STONE} from '../slides/diagrams/diorama';
import '../styles/fonts';
const C={green:'#0d6b52',purple:'#7650ab',ink:'#243731',dim:'#596b64',paper:'#f8f7f2'};
const clamp={extrapolateLeft:'clamp',extrapolateRight:'clamp'} as const;
const profile=(peak:number)=>Array.from({length:101},(_,i)=>{const u=i/100;const y=u<.15?340:u<.5?340+(peak-340)*(1-Math.cos(Math.PI*(u-.15)/.35))/2:u<.85?410+(peak-410)*(1+Math.cos(Math.PI*(u-.5)/.35))/2:410;return [250+u*1170,y] as [number,number];});
const curve=(tau:number)=>Array.from({length:101},(_,i)=>{const u=i/100;return [240+u*1200,490-350*(1-Math.exp(-u/tau))] as [number,number];});
const Profile=({f,lowerAt,reverseAt}:{f:number;lowerAt:number;reverseAt:number})=>{
 const lower=interpolate(f,[lowerAt,lowerAt+90],[0,1],clamp),reverse=f>=reverseAt,main=polyPath(profile(100));
 return <svg viewBox="0 0 1600 620" width="100%" height="100%" role="img" aria-label="Schematic energy profile, not time. The catalysed pathway has lower activation barriers measured from both unchanged endpoint levels.">
 <Axes x0={160} y0={50} x1={1510} y1={520} xLabel="Reaction progress, not time" yLabel="Energy" size={40}/>
 <path d={main+' L1420 480 L250 480 Z'} fill={STONE.topLight}/><path d={main} fill="none" stroke="#555" strokeWidth={7}/>
 {lower>0&&<path d={polyPath(profile(235),lower)} fill="none" stroke={C.green} strokeWidth={9}/>}
 <text x={760} y={65} fontSize={40} fontWeight={700} textAnchor="middle" fill={C.ink}>Without catalyst</text>
 <text x={270} y={402} fontSize={40} fill={C.ink}>Reactants</text><text x={1320} y={465} fontSize={40} textAnchor="middle" fill={C.ink}>Products</text>
 <Gap x={520} y1={340} y2={100} color="#555" w={4}/>{lower>0&&<Gap x={590} y1={340} y2={235} color={C.green} w={4}/>}
 <text x={400} y={476} fontSize={34} fill={C.ink}>Forward barrier</text>
 {reverse&&<><Gap x={1110} y1={410} y2={100} color="#555" w={4}/><Gap x={1180} y1={410} y2={235} color={C.green} w={4}/><text x={1080} y={505} fontSize={34} fill={C.ink}>Reverse barrier</text></>}
 <text x={300} y={600} fontSize={36} fill={lower>0?C.green:C.dim}>{lower>0?'Green: alternative pathway. Same endpoint energies.':'Illustrative exothermic pathway; no numerical scale.'}</text>
 </svg>;
};
const Graph=({f,drawAt,earlyAt,showEarly}:{f:number;drawAt:number;earlyAt:number;showEarly:boolean})=>{
 const draw=interpolate(f,[drawAt,drawAt+240],[0,1],clamp),early=showEarly&&f>=earlyAt;
 return <svg viewBox="0 0 1600 620" width="100%" height="100%" role="img" aria-label="Matching product-forming mixtures at fixed temperature and volume. The catalysed curve approaches the same equilibrium concentration faster. Curves are schematic, not measured times.">
 <Axes x0={160} y0={70} x1={1510} y1={520} xLabel="Time" yLabel="Product concentration" size={40}/>
 <line x1={220} x2={1480} y1={140} y2={140} stroke="#555" strokeWidth={3} strokeDasharray="16 12"/>
 <text x={920} y={96} fontSize={38} textAnchor="middle" fill={C.ink}>Same equilibrium level</text>
 <path d={polyPath(curve(.31),draw)} fill="none" stroke={C.purple} strokeWidth={7} strokeDasharray="15 10"/><path d={polyPath(curve(.12),draw)} fill="none" stroke={C.green} strokeWidth={8}/>
 <text x={630} y={225} fontSize={40} fill={C.green}>With catalyst</text><text x={900} y={380} fontSize={40} fill={C.purple}>Without catalyst</text>
 {early&&<><line x1={480} x2={480} y1={150} y2={510} stroke="#b86e0a" strokeWidth={4}/><text x={330} y={603} fontSize={35} fill="#b86e0a">At the same earlier time: different product amounts</text></>}
 {!early&&<text x={300} y={603} fontSize={35} fill={C.dim}>Schematic approach. No exact finishing time.</text>}
 </svg>;
};
const Balance=({f}:{f:number})=>{
 const phase=(f%150)/150;
 return <svg viewBox="0 0 1600 620" width="100%" height="100%" role="img" aria-label="A mixture already at equilibrium has continuing equal opposing rates. Adding the catalyst speeds the opposing processes without a net composition change.">
 <text x={340} y={230} fontSize={120} textAnchor="middle" fill={C.ink}>A</text><text x={1250} y={230} fontSize={120} textAnchor="middle" fill={C.ink}>B</text>
 <path d="M500 145 H1050 l-22 -16 m22 16 l-22 16 M1050 285 H500 l22 -16 m-22 16 l22 16" fill="none" stroke={C.green} strokeWidth={7}/>
 <circle cx={530+phase*490} cy={145} r={15} fill={C.green}/><circle cx={1020-phase*490} cy={285} r={15} fill={C.green}/>
 <text x={800} y={390} fontSize={48} textAnchor="middle" fill={C.green}>Both directions continue.</text><text x={800} y={480} fontSize={48} textAnchor="middle" fill={C.ink}>No overall change in amounts.</text>
 <text x={800} y={585} fontSize={34} textAnchor="middle" fill={C.dim}>The opposing average rates still match at equilibrium.</text>
 </svg>;
};
export const C4CatalystTeachingResetScene=({lesson,scene}:{lesson:LessonData;scene:SceneData})=>{
 const f=useCurrentFrame(),s=scene as SceneData&{metadata?:{mode?:string;lowerAt?:number;reverseAt?:number;drawAt?:number;earlyAt?:number;condition?:string}};
 const m=s.metadata??{};
 return <AbsoluteFill style={{background:C.paper,fontFamily:FONT_DISPLAY,color:C.ink}}>
 <div style={{position:'absolute',left:95,right:95,top:47,display:'flex',justifyContent:'space-between',fontFamily:FONT_MONO,fontSize:23,color:C.dim}}><span>HSC SCIENCE / CHEMISTRY</span><span>CATALYSTS · MODULE 5</span></div>
 <div style={{position:'absolute',left:95,right:95,top:123,fontSize:66,fontWeight:680,lineHeight:1.08}}>{'heading'in scene?scene.heading:lesson.title}</div>
 <div style={{position:'absolute',left:100,right:100,top:223,fontSize:30,color:C.dim}}>{m.condition??'Same temperature and reacting amounts'}</div>
 <div style={{position:'absolute',left:100,right:100,top:285,height:585}}>{m.mode==='profile'?<Profile f={f} lowerAt={m.lowerAt??360} reverseAt={m.reverseAt??650}/>:m.mode==='balance'?<Balance f={f}/>:<Graph f={f} drawAt={m.drawAt??60} earlyAt={m.earlyAt??300} showEarly={m.mode==='earlier'}/>}</div>
 </AbsoluteFill>;
};
