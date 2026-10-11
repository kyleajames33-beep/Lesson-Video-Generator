import React from 'react';
import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import type {LessonData, SceneData} from '../lesson/types';
import {FONT_DISPLAY, FONT_MONO} from '../styles/tokens';
const INK='#27342b',GREEN='#3f6149';
const COLONY='assets/biology/rhizopus-bread-mould-botanical-v1.png';
const GROWTH='assets/biology/rhizopus-germination-botanical-v1.png';
const BREAD='assets/biology/clean-bread-mould-question-v1.png';
type Beat={at:number;line:string;view:string;spokenCue:string};
type ResetScene=SceneData & {heading:string;teachingReset:{previewBeats:Beat[]}};
const Plate=({view}:{view:string})=>view==='whole'?<Img src={staticFile(COLONY)} style={{position:'absolute',left:90,top:300,width:1740,height:610,objectFit:'contain'}}/>:
 <div style={{position:'absolute',left:868,top:255,width:814,height:630,overflow:'hidden'}}><Img alt="Magnified mould threads, upright stalks and rounded spore cases" src={staticFile(COLONY)} style={{position:'absolute',left:-455,top:-46,width:1269,height:714}}/></div>;
const Text=({x=95,y=320,w=570,size=51,children}:{x?:number;y?:number;w?:number;size?:number;children:React.ReactNode})=><div style={{position:'absolute',left:x,top:y,width:w,fontSize:size,lineHeight:1.23}}>{children}</div>;
export const FungiMouldTeachingSlide=({lesson,scene}:{lesson:LessonData;scene:SceneData})=>{
 const f=useCurrentFrame(),selected=scene as ResetScene,beats=selected.teachingReset.previewBeats;
 const beat=beats.reduce((current,item)=>f>=item.at?item:current,beats[0]),attempt=scene.responseRole==='attempt',feedback=scene.responseRole==='feedback',notes=scene.id==='key-notes';
 const current=beat.view;
 return <AbsoluteFill style={{background:'#faf9f5',color:INK,fontFamily:FONT_DISPLAY}}>
  <div style={{position:'absolute',left:95,top:48,fontFamily:FONT_MONO,fontSize:25,letterSpacing:'.07em',color:GREEN}}>BIOLOGY · BREAD MOULD</div>
  <div style={{position:'absolute',left:95,top:120,width:1730,fontSize:66,lineHeight:1.13,fontWeight:680}}>{selected.heading}</div>
  {notes?<>
   <div style={{position:'absolute',left:110,top:330,width:1630,display:'grid',gap:48,fontSize:52,lineHeight:1.25}}>{lesson.teachingNotes?.map(line=><div key={line}>{line}</div>)}</div>
   <Text y={850} w={1600} size={35}>Pause if you would like more time to write.</Text>
  </>:attempt||feedback?<>
   <div style={{position:'absolute',left:110,top:360,width:520,height:357,overflow:'hidden'}}><Img alt="Bread A with an enlarged detail of intact mature spore cases" src={staticFile(COLONY)} style={{position:'absolute',left:0,top:-26,width:718,height:405}}/></div>
   {current!=='grow'?<Img src={staticFile(BREAD)} style={{position:'absolute',left:1230,top:315,width:520,height:480,objectFit:'contain'}}/>:null}
   <Text x={110} y={255} w={560} size={39}>A: mould with mature spore cases</Text>
   <Text x={1230} y={255} w={550} size={39}>B: no mould initially</Text>
   {attempt?<>
    <Text x={690} y={335} w={475} size={43}>Separate bread pieces. They share moving air.</Text>
    <Text x={690} y={510} w={475} size={43}>B is moist, supplies nutrients and is at a suitable temperature.</Text>
    <Text x={110} y={805} w={1640} size={44}>How could mould reach B? What would begin growing there?</Text>
   </>:<>
    {current==='travel'?<svg width={1920} height={930} style={{position:'absolute',inset:0}} aria-label="Moving air can carry released spores from A towards B"><path d="M640 520H1230" stroke={GREEN} strokeWidth={4}/><path d="M1205 500L1230 520L1205 540" fill="none" stroke={GREEN} strokeWidth={4}/>{[0,1,2].map(i=>{const u=interpolate(f-beat.at-i*12,[0,150],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});return <circle key={i} cx={650+u*550} cy={480+i*40} r={9} fill="#73503b"/>;})}</svg>:null}
    <Text x={690} y={current==='travel'?680:405} w={475} size={46}>{beat.line}</Text>
    {current==='arrive'?<svg width={1920} height={930} style={{position:'absolute',inset:0}} aria-label="One representative landed spore on B"><circle cx={1500} cy={550} r={12} fill="#73503b"/></svg>:null}
    {current==='grow'?<Img src={staticFile(GROWTH)} style={{position:'absolute',left:1200,top:395,width:560,height:330,objectFit:'contain'}}/>:null}
   </>}
  </>:scene.id==='mould-hook'?<>
   <Plate view="whole"/>
   <Text x={1150} y={865} w={660} size={32}>Rhizopus: an illustrated bread mould</Text>
  </>:current==='germinate'?<>
   <Img src={staticFile(GROWTH)} style={{position:'absolute',left:710,top:300,width:1120,height:580,objectFit:'contain'}}/>
   <Text>{beat.line}</Text>
   <Text x={1030} y={800} w={280} size={37}>Spore</Text><Text x={1390} y={270} w={440} size={37}>New fungal thread</Text><svg width={1920} height={930} style={{position:'absolute',inset:0}} aria-hidden><path d="M1160 790L1230 700 M1540 325L1590 490" stroke={GREEN} strokeWidth={3} fill="none"/></svg>
  </>:<>
   <Plate view="detail"/><Text>{beat.line}</Text>
   {current==='threads'?<>
    <Text x={900} y={820} w={800} size={37}>Hyphae: fungal threads</Text><svg width={1920} height={900} style={{position:'absolute',inset:0}}><path d="M1160 805V770L1250 700" fill="none" stroke={GREEN} strokeWidth={3}/></svg>
   </>:current==='head'?<>
    <Text x={1080} y={255} w={730} size={37}>Sporangium: the rounded spore case</Text><svg width={1920} height={900} style={{position:'absolute',inset:0}}><path d="M1285 312L1240 372" fill="none" stroke={GREEN} strokeWidth={3}/></svg>
   </>:current==='spores'?<>
    <Text x={1390} y={240} w={440} size={37}>Spores inside the opened case</Text><svg width={1920} height={900} style={{position:'absolute',inset:0}} aria-hidden><path d="M1570 335L1475 450" fill="none" stroke={GREEN} strokeWidth={3}/></svg>
   </>:current==='release'?<>
    <Text x={1400} y={240} w={430} size={37}>Released spores</Text><svg width={1920} height={900} style={{position:'absolute',inset:0}}><path d="M1610 295V335" fill="none" stroke={GREEN} strokeWidth={3}/></svg>
   </>:null}
  </>}
  {!notes&&!attempt&&!feedback?<div style={{position:'absolute',right:95,top:920,fontSize:26,color:GREEN}}>Magnified teaching illustration</div>:null}
 </AbsoluteFill>;
};
