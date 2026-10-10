import React, {useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Player, type PlayerRef} from '@remotion/player';
import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_MONO} from '../styles/tokens';
import '../styles/fonts';

export const FUNGI_PILOT_FRAMES = 2700;
export const FUNGI_BEATS = [
  {at:0,label:'Mould on bread'}, {at:330,label:'The fungal threads'},
  {at:660,label:'Where spores form'}, {at:1050,label:'Spores can leave'},
  {at:1410,label:'Beginning new growth'}, {at:1830,label:'This reproductive route'},
  {at:2220,label:'Key notes'},
];
const COLONY='assets/biology/rhizopus-bread-mould-botanical-v1.png';
const GROWTH='assets/biology/rhizopus-germination-botanical-v1.png';
const INK='#27342b', GREEN='#3f6149';
const Picture=({detail=false}:{detail?:boolean})=>detail?
  <svg viewBox="600 60 1072 830" style={{position:'absolute',left:720,top:240,width:1110,height:640}} role="img" aria-label="Magnified illustrated Rhizopus mould: fungal threads, stalks, sporangia and released spores."><image href={staticFile(COLONY)} width={1672} height={941}/></svg>:
  <Img src={staticFile(COLONY)} style={{position:'absolute',left:65,top:260,width:1770,height:640,objectFit:'contain'}}/>;
const Label=({x,y,children}:{x:number;y:number;children:React.ReactNode})=><div style={{position:'absolute',left:x,top:y,fontSize:45,fontWeight:600,color:GREEN}}>{children}</div>;

/** A finished illustration is selected and explained. No simulated growth is claimed. */
export const FungiDesignPilot=()=>{
  const f=useCurrentFrame(), beat=FUNGI_BEATS.reduce((a,b,i)=>f>=b.at?i:a,0);
  const local=f-FUNGI_BEATS[beat].at;
  const opacity=interpolate(local,[0,20],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
  const sentences=[
    'How can mould start growing on another piece of bread?',
    'The fungal threads take up nutrients from the bread.',
    'Spores form inside these rounded heads.',
    'Moving air can carry released spores to another place.',
    'A spore can begin a new fungal thread.',
    'This route is asexual reproduction.',
  ];
  return <AbsoluteFill style={{background:'#faf9f5',color:INK,fontFamily:FONT_DISPLAY}}>
    <div style={{position:'absolute',left:95,top:48,fontFamily:FONT_MONO,fontSize:25,letterSpacing:'.07em',color:GREEN}}>BIOLOGY · BREAD MOULD</div>
    {beat<6?<div style={{position:'absolute',right:95,top:48,fontSize:30,color:GREEN}}>Magnified illustration</div>:null}
    {beat===0?<>
      <div style={{position:'absolute',left:95,top:115,width:1630,fontSize:74,fontWeight:680,lineHeight:1.12,opacity}}>{sentences[beat]}</div>
      <Picture/>
      <div style={{position:'absolute',left:1120,top:845,fontSize:37,color:GREEN}}>Rhizopus: an illustrated bread mould</div>
    </>:beat<4?<>
      <Picture detail/>
      <div style={{position:'absolute',left:95,top:220,width:590,fontSize:70,fontWeight:650,lineHeight:1.12,opacity}}>{sentences[beat]}</div>
      <div style={{opacity}}>
        {beat===1?<><Label x={900} y={810}>Hyphae: fungal threads</Label><svg width={1920} height={900} style={{position:'absolute',inset:0}}><path d="M1160 805 V760 L1250 692" fill="none" stroke={GREEN} strokeWidth={3}/></svg></>:null}
        {beat===2?<><Label x={1085} y={240}>Sporangium</Label><svg width={1920} height={900} style={{position:'absolute',inset:0}}><path d="M1270 305 L1230 370" fill="none" stroke={GREEN} strokeWidth={3}/></svg><div style={{position:'absolute',left:95,top:665,width:570,fontSize:42,lineHeight:1.25,color:GREEN}}>A sporangium is the structure where these spores form.</div></>:null}
        {beat===3?<><Label x={1490} y={210}>Released spores</Label><svg width={1920} height={900} style={{position:'absolute',inset:0}}><path d="M1650 272 V310 L1610 359" fill="none" stroke={GREEN} strokeWidth={3}/></svg><div style={{position:'absolute',left:95,top:695,width:550,fontSize:42,lineHeight:1.25,color:GREEN}}>Spores are reproductive cells that can begin new growth.</div></>:null}
      </div>
    </>:beat===4?<>
      <Img src={staticFile(GROWTH)} style={{position:'absolute',left:675,top:255,width:1160,height:650,objectFit:'contain'}}/>
      <div style={{position:'absolute',left:95,top:160,width:570,fontSize:71,fontWeight:650,lineHeight:1.12,opacity}}>{sentences[beat]}</div>
      <div style={{position:'absolute',left:95,top:545,width:565,fontSize:45,lineHeight:1.3,color:GREEN}}>With moisture, food and a suitable temperature.</div>
      <div style={{position:'absolute',left:95,top:760,width:570,fontSize:42,lineHeight:1.2}}>Germination means beginning to grow.</div>
    </>:beat===5?<>
      <Picture detail/>
      <div style={{position:'absolute',left:95,top:175,width:580,fontSize:70,fontWeight:650,lineHeight:1.13,opacity}}>{sentences[beat]}</div>
      <div style={{position:'absolute',left:95,top:550,width:580,fontSize:46,lineHeight:1.23}}>The parent produces these spores without reproductive cells joining.</div>
      {local>160?<div style={{position:'absolute',left:95,top:760,width:580,fontSize:35,lineHeight:1.25,color:GREEN}}>Rhizopus also has a sexual route. A spore alone does not show how it was produced.</div>:null}
    </>:<>
      <div style={{position:'absolute',left:95,top:130,fontSize:61,fontWeight:650}}>Key notes: what to write in your book</div>
      <div style={{position:'absolute',left:105,top:305,width:1670,display:'grid',gap:65,fontSize:57,lineHeight:1.25}}>
        <div>Hyphae are fungal threads.</div>
        <div>Sporangia produce spores.</div>
        <div>A spore can begin new threads in suitable conditions.</div>
      </div>
      <div style={{position:'absolute',left:105,top:805,fontSize:38,color:GREEN}}>Pause if you would like more time to write.</div>
    </>}
    <div style={{position:'absolute',right:90,top:935,fontFamily:FONT_MONO,fontSize:23,color:GREEN}}>0{beat+1} / 07</div>
  </AbsoluteFill>;
};
const Review=()=>{
  const ref=useRef<PlayerRef>(null), [width,setWidth]=useState(960);
  return <main><h1>Bread mould: botanical teaching pilot</h1><p>A 90-second silent visual sample. New narration and a complete lesson remain pending.</p><p>One mould example, explained from its visible body to spores and new growth. The illustrations are magnified teaching artwork, not photographs or a time-lapse.</p><div className="controls">{FUNGI_BEATS.map(b=><button key={b.at} onClick={()=>{ref.current?.pause();ref.current?.seekTo(b.at+90);}}>{b.label}</button>)}</div><div className="controls"><button onClick={()=>setWidth(width===960?480:960)}>View at {width===960?480:960} pixels</button><button onClick={()=>{ref.current?.seekTo(0);ref.current?.play();}}>Play from start</button></div><Player ref={ref} component={FungiDesignPilot} durationInFrames={FUNGI_PILOT_FRAMES} fps={30} compositionWidth={1920} compositionHeight={1080} controls style={{width,maxWidth:'100%'}}/><p>Design and anatomy review are separate from pending human listening and publication approval.</p></main>;
};
if(typeof document!=='undefined'&&document.getElementById('pilot-review-root'))createRoot(document.getElementById('pilot-review-root')!).render(<Review/>);
