import React from 'react';

import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

import {TransitionSeries, springTiming} from '@remotion/transitions';

import {ConceptSlide} from '../../../../src/slides/ConceptSlide';

import {WorkedExampleSlide} from '../../../../src/slides/WorkedExampleSlide';

import {SummarySlide} from '../../../../src/slides/SummarySlide';

import {SlideChrome} from '../../../../src/slides/shared/SlideChrome';

import {AccentContext, themeFor} from '../../../../src/styles/theme';

import {GasMolecule} from '../../../../src/slides/diagrams/kinds/chem-y12-m5/lcMolecules';

import {AtomDefs} from '../../../../src/slides/diagrams/kinds/chem-y12-m5/shared';

import {cinematicTransition} from '../../../../src/transitions/cinematicTransitions';

import '../../../../src/styles.css';

import '../../../../src/styles/fonts';

import lesson from './lesson.json';

const clamp={extrapolateLeft:'clamp',extrapolateRight:'clamp'} as const;

export const PressureScene=({scene,index}:{scene:any,index:number})=>{

 const f=useCurrentFrame(); const inert=scene.id==='c4a-inert';

 const squeeze=scene.id==='c4a-compress'?interpolate(f,[75,115],[0,1],clamp):0;

 const top=180+squeeze*130; const added=inert&&f>=150;

 const opening=scene.id==='c4a-opening';

 const stage=opening?'Initially at equilibrium':inert?(f<150?'Same reacting mixture':f<390?'Add argon at fixed volume':f<690?'Same reacting amounts and volume':'Same reacting partial pressures'):f<75?'Initially at equilibrium':f<300?'Same particles in less space':'Compression itself creates no ammonia';

 const message=opening?'Compress at fixed temperature':inert?(f<150?'Temperature and volume fixed':f<390?'Total pressure rises':f<690?'Reacting gases are not compressed':'No equilibrium shift'):f<75?'Temperature fixed':f<300?'More frequent wall impacts raise pressure':'Reaction responds afterwards';

 return <AbsoluteFill style={{background:'#f7f7f5',color:'#1a1a1a',fontFamily:'Inter Tight'}}>

 <SlideChrome lesson={lesson as any} sceneIndex={index+1} totalScenes={8}/>

 <div style={{position:'absolute',left:100,top:125,fontSize:70,fontWeight:750}}>{scene.heading}</div>

 <svg style={{position:'absolute',left:100,top:240,width:900,height:600}} viewBox="0 0 900 600" aria-label={inert?'Schematic fixed-volume mixture. Added argon does not change reacting gas amounts or their available volume.':'Schematic piston compression. All depicted gas molecules remain the same during the squeeze.'}>

 <AtomDefs id={scene.id} elements={['N','H']}/>

 <rect x="110" y="150" width="550" height="380" fill="#fff" stroke="#555" strokeWidth="6"/>

 {!inert&&<line x1="90" y1="180" x2="700" y2="180" stroke="#777" strokeWidth="3" strokeDasharray="12 10"/>}

 <rect x="112" y={top} width="546" height="24" fill="#bdb8ae" stroke="#555" strokeWidth="3"/>

 <line x1="385" y1="65" x2="385" y2={top} stroke="#555" strokeWidth="16"/>

 {[0,1,2,3,4,5,6,7,8,9,10,11].map(i=><GasMolecule key={i} id={scene.id} kind={i%3===0?'N2':i%3===1?'H2':'NH3'} x={160+(i%4)*140} y={top+65+Math.floor(i/4)*(450-top)/3} s={1.6}/>)}

 {added&&[0,1,2,3].map(i=><circle key={i} cx={225+i*115} cy={top+100+(i%2)*95} r="14" fill="#9b65a5" stroke="#633f6c" strokeWidth="2"/>)}

 <text x="110" y="580" fontSize="34" fill="#555">Schematic: particle counts are illustrative</text>

 </svg>

 <div style={{position:'absolute',left:1060,top:320,width:740}}>

 <div style={{fontSize:52,fontWeight:700,color:'#0d6b52',lineHeight:1.15}}>{stage}</div>

 <div style={{fontSize:48,lineHeight:1.3,marginTop:45}}>{message}</div>

 <div style={{fontSize:36,marginTop:60,color:'#555'}}>{inert?'N₂, H₂, NH₃ amounts unchanged':'N₂, H₂, NH₃ counts unchanged'}</div>

 {inert&&added&&<div style={{fontSize:36,marginTop:24,color:'#633f6c'}}>Purple circles: inert argon</div>}

 </div>

 </AbsoluteFill>;

};

export const StableBoard=({scene,index}:{scene:any,index:number})=><AbsoluteFill style={{background:'#f7f7f5',color:'#1a1a1a',fontFamily:'Inter Tight'}}><SlideChrome lesson={lesson as any} sceneIndex={index+1} totalScenes={8}/><div style={{position:'absolute',left:100,top:150,width:1720}}><h1 style={{fontSize:70,lineHeight:1.12,margin:'0 0 65px'}}>{scene.heading}</h1>{scene.id==='c4a-response'?<><div style={{fontSize:64,color:'#0d6b52',fontWeight:700,marginBottom:55}}>2SO₂(g) + O₂(g) ⇌ 2SO₃(g)</div><div style={{fontSize:50,marginBottom:40}}>Volume increases. Temperature stays constant.</div><div style={{fontSize:50,fontWeight:650}}>Predict the shift. Explain using gas coefficients.</div><div style={{fontSize:38,color:'#555',marginTop:50}}>Take a moment to decide. Pause if you need longer.</div></>:scene.points.map((point:string,i:number)=><div key={i} style={{fontSize:48,lineHeight:1.25,padding:'26px 0',borderBottom:'2px solid #ddd'}}>{point}</div>)}</div></AbsoluteFill>;
export const Candidate=()=> <AccentContext.Provider value={themeFor('Chemistry')}><TransitionSeries>{lesson.scenes.flatMap((scene,index)=>{

 const slide=['c4a-response','c4a-key-notes'].includes(scene.id)?<StableBoard scene={scene} index={index}/>:['c4a-opening','c4a-compress','c4a-inert'].includes(scene.id)?<PressureScene scene={scene} index={index}/>:scene.type==='workedExample'?<WorkedExampleSlide scene={scene as any} lesson={lesson as any} sceneIndex={index+1} totalScenes={8}/>:scene.type==='summary'?<SummarySlide scene={scene as any} lesson={lesson as any} sceneIndex={index+1} totalScenes={8}/>:<ConceptSlide scene={scene as any} lesson={lesson as any} sceneIndex={index+1} totalScenes={8}/>;

 return [...(index?[<TransitionSeries.Transition key={'t'+scene.id} presentation={cinematicTransition({accent:'#148a6f',kind:'shapeWipe'})} timing={springTiming({config:{damping:15,stiffness:180,mass:.55},durationInFrames:24})}/>]:[]),<TransitionSeries.Sequence key={scene.id} durationInFrames={scene.durationInFrames}>{slide}</TransitionSeries.Sequence>];})}</TransitionSeries></AccentContext.Provider>;



