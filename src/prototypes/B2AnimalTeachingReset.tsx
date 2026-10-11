import React, {useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Player, type PlayerRef} from '@remotion/player';
import {AbsoluteFill, interpolate, Sequence, staticFile, useCurrentFrame} from 'remotion';
import draft from '../../docs/production/module5-seconds-notes-2026-10-10/biology/teaching-reset/lesson.json';
import type {LessonData, SceneData} from '../lesson/types';
import {AssetImg} from '../slides/shared/AssetImg';
import {FONT_DISPLAY, FONT_MONO, TOK} from '../styles/tokens';
import '../styles/fonts';
const BLUE = '#1f6fb2';
const AMBER = '#b86e0a';
const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
const FROG = 'assets/biology/common-frog-pond-b2-v1.png';
const HEN = 'assets/biology/hen-nest-b2-v1.png';
const TRACT = 'assets/biology/hen-reproductive-location-b2-v1.png';
type Beat = {at: number; line: string; view: string; spokenCue: string};
type Reset = {previewBeats: Beat[]; quietHoldStartFrame?: number; attempt?: {shared: string; groupA: string; groupB: string; demands: string}};
type B2Scene = SceneData & {heading?: string; teachingReset?: Reset; points?: string[]};
const readReset = (scene: SceneData): Reset => {
  const value = (scene as B2Scene).teachingReset;
  if (!value?.previewBeats?.length || value.previewBeats.some(beat => !Number.isFinite(beat.at) || typeof beat.line !== 'string' || typeof beat.view !== 'string')) throw Error(`B2 scene ${scene.id} needs valid selected teaching cues.`);
  return value;
};
export const B2_RESET_SCENES = draft.scenes.map((scene, index, scenes) => ({...scene, from: scenes.slice(0,index).reduce((sum,item)=>sum+item.durationInFrames,0)}));
export const B2_RESET_FRAMES = B2_RESET_SCENES.reduce((sum,item)=>sum+item.durationInFrames,0);
const Text = ({x,y,width=1700,size=48,color=TOK.ink,children}: {x:number;y:number;width?:number;size?:number;color?:string;children:React.ReactNode}) => <div style={{position:'absolute',left:x,top:y,width,fontSize:size,fontWeight:650,lineHeight:1.16,color}}>{children}</div>;
const Art = ({src,x,y,width,height}: {src:string;x:number;y:number;width:number;height:number}) => <AssetImg src={staticFile(src)} style={{position:'absolute',left:x,top:y,width,height,objectFit:'contain',mixBlendMode:'multiply'}}/>;
/** Magnified possible event. No success counts, scale claims or chromosome inventory. */
const Cells = ({x,y,width=580,height=340,mode='cells',age=0,label=true}: {x:number;y:number;width?:number;height?:number;mode?:string;age?:number;label?:boolean}) => {
  const joined = mode==='joined';
  const away = mode==='current';
  const absent = mode==='timing';
  const progress = interpolate(age,[0,60],[0,1],clamp);
  const spermX = joined ? 85+progress*260 : away ? 180-progress*135 : 85;
  return <div style={{position:'absolute',left:x,top:y,width,height}}>
    <svg width="100%" height="100%" viewBox="0 0 580 340" role="img" aria-label={absent?'Egg present before sperm release':joined?'One possible sperm and egg joining':away?'Current carries sperm away from egg':'Magnified egg and sperm'}>
      <rect x={4} y={4} width={572} height={280} rx={25} fill="#edf6f9" stroke={BLUE} strokeWidth={3}/>
      <circle cx={385} cy={143} r={76} fill="#fff8e8" stroke="#a58649" strokeWidth={5}/>
      <circle cx={385} cy={143} r={20} fill="#c8b783"/>
      {!absent ? <g opacity={joined?1-progress:1} transform={`translate(${spermX} 143)`}><ellipse rx={16} ry={10} fill={BLUE}/><path d="M-15 0 C-38 -22 -48 23 -75 0" stroke={BLUE} strokeWidth={5} fill="none"/></g>:null}
      {away ? <><path d="M270 240 H70 l22 -14 M70 240 l22 14" fill="none" stroke={BLUE} strokeWidth={4}/><text x={92} y={272} fontSize={24} fill={BLUE}>current</text></>:null}
      {label?<><text x={joined?278:352} y={253} fontSize={28} fill={TOK.ink}>{joined?'fertilised egg':'egg'}</text>{!absent&&!joined?<text x={46} y={82} fontSize={28} fill={BLUE}>sperm</text>:null}</>:null}
      <text x={5} y={326} fontSize={25} fill={TOK.inkDim}>Magnified model, not to scale</text>
    </svg>
  </div>;
};
const Leader = ({hen=false,age=0}: {hen?:boolean;age?:number}) => <svg width={1920} height={960} style={{position:'absolute',inset:0}} aria-hidden><path d={hen?'M532 567 L1070 567 L1210 525':'M787 650 L1070 650 L1210 525'} fill="none" stroke={BLUE} strokeWidth={4} pathLength={1} strokeDasharray={1} strokeDashoffset={1-interpolate(age,[0,24],[0,1],clamp)}/><circle cx={hen?532:787} cy={hen?567:650} r={15} fill="none" stroke={BLUE} strokeWidth={4}/></svg>;
const Located = ({hen=false,mode,age}: {hen?:boolean;mode:string;age:number}) => <>
  <Art src={hen?TRACT:FROG} x={60} y={350} width={1060} height={570}/>
  <Leader hen={hen} age={age}/>
  <Cells x={1210} y={405} mode={mode} age={age}/>
  <Text x={hen?105:95} y={885} width={1000} size={34} color={BLUE}>{hen?'Hen: upper oviduct inside the body':'Common frog: egg patch in pond water'}</Text>
  {mode==='timing'?<Text x={1220} y={780} width={570} size={40}>Eggs now. Sperm released later.</Text>:null}
</>;
const Comparison = ({label=false}: {label?:boolean}) => <>
  <Art src={FROG} x={60} y={365} width={880} height={520}/><Art src={HEN} x={980} y={365} width={840} height={520}/>
  <Text x={95} y={850} width={800} size={38} color={BLUE}>{label?'Common frog: joining outside':'Common frogs in pond water'}</Text>
  <Text x={1030} y={850} width={780} size={38} color={BLUE}>{label?'Hen: joining inside before laying':'Hen: the supplied egg is fertilised'}</Text>
</>;
const HenSequence = ({stage}: {stage:number}) => <>
  <Art src={TRACT} x={65} y={375} width={670} height={450}/>
  <Text x={95} y={815} width={580} size={39} color={BLUE}>1. Join inside</Text>
  <Cells x={540} y={380} width={350} height={220} mode="joined" age={100}/>
  {stage>=1?<><svg width={1920} height={950} style={{position:'absolute',inset:0}} aria-hidden><path d="M870 620 H1100 l-30 -18 M1100 620 l-30 18" fill="none" stroke={BLUE} strokeWidth={4}/></svg><Text x={875} y={690} width={300} size={39} color={BLUE}>2. Add shell</Text></>:null}
  {stage>=2?<><Art src={HEN} x={1150} y={385} width={670} height={450}/><Text x={1210} y={815} width={600} size={39} color={BLUE}>3. Lay outside</Text></>:null}
</>;
const Attempt = ({lesson,feedback,line}: {lesson:LessonData;feedback:boolean;line:string}) => {
  const selected = lesson.scenes.find(scene=>scene.id==='pond-current-attempt');
  const task = selected ? readReset(selected).attempt : undefined;
  if (!task || ['shared','groupA','groupB','demands'].some(key=>typeof task[key as keyof typeof task]!=='string')) throw Error('B2 needs the complete selected current question.');
  return <>
    <Text x={90} y={245} width={1730} size={39}>{task.shared}</Text>
    <Art src={FROG} x={90} y={395} width={635} height={350}/><Art src={FROG} x={1020} y={395} width={635} height={350}/>
    <Cells x={570} y={475} width={320} height={195} mode="cells" label={false}/><Cells x={1490} y={475} width={320} height={195} mode="current" age={100} label={false}/>
    <Text x={90} y={725} width={810} size={36} color={BLUE}>{task.groupA}</Text><Text x={1020} y={725} width={810} size={36} color={BLUE}>{task.groupB}</Text>
    <Text x={90} y={810} width={1730} size={38}>{task.demands}</Text>
    {feedback?<Text x={90} y={903} width={1730} size={35} color={AMBER}>{line}</Text>:null}
  </>;
};
export const B2AnimalTeachingScene = ({lesson,scene}: {lesson:LessonData;scene:SceneData}) => {
  const local = useCurrentFrame();
  const reset = readReset(scene);
  const index = reset.previewBeats.reduce((active,item,i)=>local>=item.at?i:active,0);
  const beat = reset.previewBeats[index];
  let first = index;
  while(first>0&&reset.previewBeats[first-1].view===beat.view) first--;
  const age = local-reset.previewBeats[first].at;
  const notes=scene.id==='key-notes';
  const attempt=scene.id==='pond-current-attempt'||scene.id==='pond-current-feedback';
  const joined=beat.view.includes('joined');
  return <AbsoluteFill style={{background:'#fafaf8',color:TOK.ink,fontFamily:FONT_DISPLAY}}>
    <Text x={90} y={52} size={25} color={BLUE}><span style={{fontFamily:FONT_MONO,letterSpacing:'.07em'}}>BIOLOGY · FERTILISATION</span></Text>
    <Text x={90} y={138} width={1740} size={61}>{(scene as B2Scene).heading}</Text>
    {notes?<><div style={{position:'absolute',left:100,top:305,width:1690,display:'grid',gap:58,fontSize:48,fontWeight:550,lineHeight:1.25}}>{(lesson.teachingNotes??(scene as B2Scene).points??[]).map((point,i)=><div key={i}>{point}</div>)}</div><Text x={100} y={885} size={36} color={TOK.inkDim}>Pause if you would like more time to write.</Text></>:attempt?<Attempt lesson={lesson} feedback={scene.id==='pond-current-feedback'} line={beat.line}/>:<>
      <div style={{opacity:interpolate(local-beat.at,[0,12],[0,1],clamp)}}><Text x={90} y={245} width={1740} size={47}>{beat.line}</Text></div>
      {beat.view==='opening'||beat.view==='comparison'?<Comparison label={beat.view==='comparison'}/>:beat.view==='hen-sequence'?<HenSequence stage={index}/>:beat.view.startsWith('hen')?<Located hen mode={joined?'joined':'cells'} age={age}/>:<Located mode={joined?'joined':beat.view==='frog-current'?'current':beat.view==='frog-timing'?'timing':'cells'} age={age}/>}
    </>}
  </AbsoluteFill>;
};
export const B2AnimalTeachingReset = () => <AbsoluteFill>{B2_RESET_SCENES.map(scene=><Sequence key={scene.id} from={scene.from} durationInFrames={scene.durationInFrames}><B2AnimalTeachingScene lesson={draft as unknown as LessonData} scene={scene as unknown as SceneData}/></Sequence>)}</AbsoluteFill>;
export const B2AnimalTeachingResetReview = () => {
  const player=useRef<PlayerRef>(null);
  const [width,setWidth]=useState(960);
  return <main><h1>B2a: where does fertilisation happen?</h1><p>Silent source-driven teaching preview. Estimated cues, independent source review and measured voiced review are pending. The common-frog and hen examples locate joining in real organisms. Simplified magnified cells show possible events, without success counts or literal scale.</p><div className="controls">{B2_RESET_SCENES.map(scene=><button key={scene.id} onClick={()=>{player.current?.pause();player.current?.seekTo(scene.from+60);}}>{scene.heading}</button>)}</div><div className="controls"><button onClick={()=>setWidth(width===960?480:960)}>View at {width===960?480:960} pixels</button><button onClick={()=>{player.current?.seekTo(0);player.current?.play();}}>Play from start</button></div><Player ref={player} component={B2AnimalTeachingReset} durationInFrames={B2_RESET_FRAMES} fps={30} compositionWidth={1920} compositionHeight={1080} controls style={{width,maxWidth:'100%'}}/><details><summary>Complete new narration</summary>{B2_RESET_SCENES.map(scene=><section key={scene.id}><h3>{scene.heading}</h3><p>{scene.voiceover.text}</p></section>)}</details><p>The current question keeps all supplied conditions and demands visible. Native stills establish sampled layout only. No human listening, full voiced review, export or release approval is implied.</p></main>;
};
if(typeof document!=='undefined'&&document.getElementById('b2-reset-review-root')) createRoot(document.getElementById('b2-reset-review-root')!).render(<B2AnimalTeachingResetReview/>);
