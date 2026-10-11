import React, {useMemo} from 'react';
import type {LessonData, SceneData} from '../lesson/types';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {GasMolecule, type GasKind} from '../slides/diagrams/kinds/chem-y12-m5/lcMolecules';
import {AtomDefs} from '../slides/diagrams/kinds/chem-y12-m5/shared';
import {FONT_DISPLAY, FONT_MONO, FONT_HAND} from '../styles/tokens';
import {lessonTimeline} from '../lesson/timeline.mjs';
import '../styles/fonts';

export const PRESSURE_PILOT_FRAMES = 1980;
export const PRESSURE_BEATS = [
  {at:0,label:'The reacting mixture'}, {at:240,label:'Push the piston'},
  {at:480,label:'Why pressure rises'}, {at:750,label:'Read the reaction'},
  {at:1020,label:'Four become two'}, {at:1350,label:'The pressure response'},
  {at:1620,label:'Book notes'},
];
const C = {ink:'#243731',dim:'#596b64',green:'#0d6b52',amber:'#b86e0a',paper:'#f8f7f2'};
const clamp = {extrapolateLeft:'clamp',extrapolateRight:'clamp'} as const;
const ramp = (f:number,a:number,b:number) => interpolate(f,[a,b],[0,1],clamp);
const smooth = (x:number) => x*x*(3-2*x);
const volume = (f:number) => 1-0.616*smooth(ramp(f,285,390));
const tri = (x:number) => 1-Math.abs(((x%2)+2)%2-1);
// Integrated normalised travel keeps trajectories continuous as the piston moves.
// Once the piston stops, shorter travel distances mean more frequent impacts,
// without raising particle speed. This is an illustrative isothermal model.
const travel:number[]=[0];
for(let f=1;f<=PRESSURE_PILOT_FRAMES;f++) travel[f]=travel[f-1]+1/(400*volume(f)-54);
const kinds:GasKind[]=[...Array(4).fill('N2'),...Array(11).fill('H2'),...Array(5).fill('NH3')];

const Legend=()=> <g fontSize={32} fill={C.ink}>
  <GasMolecule id="pressure-pilot" kind="N2" x={200} y={300} s={1.6}/><text x={245} y={311}>N₂ nitrogen</text>
  <GasMolecule id="pressure-pilot" kind="H2" x={640} y={300} s={1.8}/><text x={685} y={311}>H₂ hydrogen</text>
  <GasMolecule id="pressure-pilot" kind="NH3" x={1080} y={300} s={1.6}/><text x={1125} y={311}>NH₃ ammonia</text>
  <text x={1530} y={310} fontSize={23} fill={C.dim}>Illustrative particle model</text>
</g>;

const Apparatus=({f,after=false,motionFrame=f,verticalTravel}:{f:number;after?:boolean;motionFrame?:number;verticalTravel?:number})=>{
  const v=volume(f), top=830-400*v, bottom=830;
  const pressure=(after?18:20)/20/v;
  const theta=(-215+pressure/3*250)*Math.PI/180;
  const particles=kinds.map((kind,i)=>({kind,i})).filter(p=>!after||![0,4,5,6].includes(p.i));
  if(after) particles.push({kind:'NH3',i:20},{kind:'NH3',i:21});
  return <g>
    <defs>
      <linearGradient id="steel" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#ebefeb"/><stop offset=".28" stopColor="#9caaa4"/><stop offset=".5" stopColor="#eef2ed"/><stop offset=".7" stopColor="#b1bdb6"/><stop offset="1" stopColor="#758980"/></linearGradient>
      <linearGradient id="shaft"><stop stopColor="#859890"/><stop offset=".4" stopColor="#fff"/><stop offset=".64" stopColor="#c4cfc8"/><stop offset="1" stopColor="#7d9187"/></linearGradient>
      <linearGradient id="glass"><stop stopColor="#a6cdc1" stopOpacity=".45"/><stop offset=".15" stopColor="#fff" stopOpacity=".2"/><stop offset=".65" stopColor="#d6e6df" stopOpacity=".15"/><stop offset="1" stopColor="#8bb6a6" stopOpacity=".5"/></linearGradient>
      <radialGradient id="floor"><stop stopColor="#1e3b2d" stopOpacity=".18"/><stop offset="1" stopColor="#1e3b2d" stopOpacity="0"/></radialGradient>
      <clipPath id="gas-space"><rect x={238} y={top+3} width={674} height={bottom-top-6}/></clipPath>
    </defs>
    <ellipse cx={700} cy={873} rx={580} ry={34} fill="url(#floor)"/>
    {/* A pressure line connects the gauge to the gas chamber. */}
    <path d="M900 800 H1035 Q1060 800 1060 775 V708 Q1060 685 1084 685 H1243" fill="none" stroke="#7c9187" strokeWidth={16}/>
    <path d="M900 797 H1035 Q1057 797 1057 775 V708 Q1057 682 1084 682 H1243" fill="none" stroke="#d5ddd5" strokeWidth={7}/>
    <rect x={232} y={380} width={686} height={452} rx={13} fill="url(#glass)" stroke="#849e90" strokeWidth={3}/>
    <rect x={240} y={top} width={670} height={bottom-top} fill="#cee4da" opacity={.42}/>
    <path d="M260 399 V807 M272 399 V807" stroke="white" strokeWidth={8} opacity={.58}/>
    <path d="M892 399 V809" stroke="#799b89" strokeWidth={5} opacity={.3}/>
    <g clipPath="url(#gas-space)">
      {particles.map(({kind,i})=>{
        const u=tri(i*.381+motionFrame*(.0018+i%3*.00015));
        const w=tri(i*.713+(verticalTravel??travel[Math.min(f,PRESSURE_PILOT_FRAMES)])*(1.2+i%4*.16));
        const x=270+u*610,y=top+27+w*(400*v-54);
        const near=w<.034||w>.966;
        return <g key={i}>
          {near&&f>=480&&f<750?<ellipse cx={x} cy={w<.5?top+7:bottom-6} rx={27} ry={5} fill="#ddad4e" opacity={.8}/>:null}
          <GasMolecule id="pressure-pilot" kind={kind} x={x} y={y} s={1.35} rot={i*39+motionFrame*.14}/>
        </g>;
      })}
    </g>
    {/* Physical hardware, not a display plinth. */}
    <rect x={217} y={824} width={716} height={26} rx={8} fill="url(#steel)" stroke="#728d7c" strokeWidth={2}/>
    <rect x={234} y={top-28} width={683} height={29} rx={5} fill="url(#steel)" stroke="#5c7769" strokeWidth={2}/>
    <path d={`M239 ${top-3} H911`} stroke="#405a4d" strokeWidth={5}/>
    <rect x={558} y={top-83} width={34} height={55} fill="url(#shaft)" stroke="#8b9e91"/>
    <rect x={464} y={top-98} width={222} height={24} rx={12} fill="url(#steel)" stroke="#728d7c" strokeWidth={2}/>
    {f>=240&&f<480?<g opacity={ramp(f,240,260)}>
      <path d={`M745 ${top-94} V${top-42} l-15 -18 m15 18 l15 -18`} stroke={C.amber} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <text x={792} y={top-62} fontSize={36} fill={C.amber} fontFamily={FONT_HAND}>smaller volume</text>
    </g>:null}
    {f>=480&&f<750?<g>
      <path d={`M216 435 H167 V${top-1} H216`} fill="none" stroke={C.green} strokeWidth={2}/>
      <text x={148} y={565} fontSize={28} fill={C.dim} textAnchor="middle" transform="rotate(-90 148 565)">piston moved down</text>
    </g>:null}
    <circle cx={1370} cy={625} r={138} fill="url(#steel)" stroke="#748b7d" strokeWidth={2}/>
    <circle cx={1370} cy={625} r={121} fill="#fffefa" stroke="#9dad9f" strokeWidth={2}/>
    {Array.from({length:17},(_,i)=>{const a=(-215+i*15.625)*Math.PI/180;return <line key={i} x1={1370+Math.cos(a)*(i%4===0?87:96)} y1={625+Math.sin(a)*(i%4===0?87:96)} x2={1370+Math.cos(a)*108} y2={625+Math.sin(a)*108} stroke={C.dim} strokeWidth={i%4===0?4:2}/>;})}
    <path d={`M1370 625 L${1370+Math.cos(theta)*91} ${625+Math.sin(theta)*91}`} stroke={C.green} strokeWidth={6} strokeLinecap="round"/>
    <circle cx={1370} cy={625} r={11} fill={C.green}/>
    <text x={1370} y={689} textAnchor="middle" fontSize={27} fill={C.dim}>pressure</text>
    <text x={1370} y={800} textAnchor="middle" fontSize={40} fontWeight={650} fill={C.green}>{f<285?'initial pressure':after?'partly reduced':'higher pressure'}</text>
  </g>;
};

const Reaction=({f}:{f:number})=>{
  const advance=smooth(ramp(f,1090,1210));
  const refs=[{kind:'N2' as GasKind,x:300,y:525},{kind:'H2' as GasKind,x:530,y:525},{kind:'H2' as GasKind,x:725,y:525},{kind:'H2' as GasKind,x:920,y:525}];
  const atoms=[
    {el:'N',x:277.9,y:525,tx:1360,ty:525},{el:'N',x:322.1,y:525,tx:1620,ty:525},
    {el:'H',x:514.36,y:525,tx:1360,ty:491},{el:'H',x:545.64,y:525,tx:1327.7,ty:547.1},
    {el:'H',x:709.36,y:525,tx:1392.3,ty:547.1},{el:'H',x:740.64,y:525,tx:1620,ty:491},
    {el:'H',x:904.36,y:525,tx:1587.7,ty:547.1},{el:'H',x:935.64,y:525,tx:1652.3,ty:547.1},
  ];
  return <g>
    <text x={960} y={310} textAnchor="middle" fontSize={62} fontWeight={650} fill={C.ink}>N₂(g) + 3H₂(g) ⇌ 2NH₃(g)</text>
    <text x={960} y={363} textAnchor="middle" fontSize={30} fill={C.dim}>(g) means gas</text>
    <path d="M210 615 Q210 637 232 637 H987 Q1008 637 1008 615 M1268 615 Q1268 637 1290 637 H1690 Q1712 637 1712 615" fill="none" stroke={C.green} strokeWidth={3}/>
    {f<1090||f>=1210?refs.map((p,i)=><GasMolecule key={i} id="pressure-pilot" kind={p.kind} x={p.x} y={p.y} s={3.4} opacity={f>=1210?.2:1}/>):null}
    {f>=1090&&f<1210?atoms.map((a,i)=><circle key={i} cx={a.x+(a.tx-a.x)*advance} cy={a.y+(a.ty-a.y)*advance-Math.sin(advance*Math.PI)*(100+i%3*40)} r={(a.el==='N'?9:6.4)*3.4} fill={`url(#pressure-pilot-atom-${a.el})`} stroke={a.el==='N'?'#193f9b':'#89917e'} strokeWidth={2}/>):null}
    <GasMolecule id="pressure-pilot" kind="NH3" x={1360} y={525} s={3.4} opacity={f<1210?.18:1}/>
    <GasMolecule id="pressure-pilot" kind="NH3" x={1620} y={525} s={3.4} opacity={f<1210?.18:1}/>
    <text x={610} y={701} textAnchor="middle" fill={C.green} fontSize={44} fontWeight={650}>{f>=1210?'4 molecules before':'4 gas molecules'}</text>
    <text x={1490} y={701} textAnchor="middle" fill={C.green} fontSize={44} fontWeight={650}>{f>=1210?'2 molecules after':'2 gas molecules'}</text>
    <path d="M1050 525 H1192 l-22 -15 m22 15 l-22 15" fill="none" stroke={f>=1020?C.amber:C.dim} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1-ramp(f,780,810)}/>
    {f>=1020?<g opacity={ramp(f,1020,1040)}>
      <text x={960} y={812} textAnchor="middle" fontSize={44} fontWeight={550} fill={C.ink}>Making more ammonia reduces the total amount of gas.</text>
      <text x={960} y={865} textAnchor="middle" fontSize={29} fill={C.dim}>Overall change shown. The reaction takes several steps.</text>
    </g>:<text x={960} y={812} textAnchor="middle" fontSize={42} fill={C.ink}>The same atoms can make fewer molecules.</text>}
  </g>;
};

const PressureResponse=({f,motionFrame,verticalTravel,annotationOpacity}:{f:number;motionFrame?:number;verticalTravel?:number;annotationOpacity?:number})=>{
  const t=ramp(f,1380,1510);
  const points=[{x:940,y:692},{x:1050,y:692},{x:1100,y:435},{x:1150,y:435},{x:1230,y:465},{x:1340,y:483},{x:1470,y:485},{x:1690,y:485}];
  const p=points.map((q,i)=>`${i?'L':'M'}${q.x},${q.y}`).join(' ');
  return <g>
    <g transform="translate(-60,125) scale(.57)"><Apparatus f={1500} after motionFrame={motionFrame} verticalTravel={verticalTravel}/></g>
    <text x={205} y={665} fontSize={42} fontWeight={650} fill={C.green}>More ammonia.</text>
    <text x={205} y={717} fontSize={42} fill={C.ink}>Fewer gas molecules.</text>
    <text x={205} y={772} fontSize={30} fill={C.dim}>The piston stays in its new position.</text>
    <path d="M900 367 V764 H1750" fill="none" stroke={C.dim} strokeWidth={3}/>
    <text x={896} y={336} fontSize={34} fill={C.dim}>pressure</text>
    <text x={1690} y={812} fontSize={32} fill={C.dim}>time</text>
    <path d="M920 692 H1720" stroke="#adb8ad" strokeWidth={1.5}/>
    <text x={1410} y={735} fontSize={28} fill={C.dim}>original pressure</text>
    <path d={p} pathLength={1} strokeDasharray={1} strokeDashoffset={1-t} fill="none" stroke={C.green} strokeWidth={7} strokeLinejoin="round" strokeLinecap="round"/>
    <text x={990} y={857} fontSize={32} fill={C.dim}>squeeze</text>
    <path d="M1098 822 V785" stroke={C.dim} strokeWidth={2}/>
    <text x={1350} y={416} fontSize={38} fontFamily={FONT_HAND} fill={C.amber} opacity={annotationOpacity??ramp(f,1460,1480)}>reaction partly offsets the rise</text>
    <text x={205} y={830} fontSize={27} fill={C.dim}>Graph: schematic trend, not measured data.</text>
  </g>;
};

const PressureVisual=({frame,heading,motionFrame,verticalTravel,annotationOpacity}:{frame:number;heading:string;motionFrame?:number;verticalTravel?:number;annotationOpacity?:number})=>{
  const f=frame;
  const beat=PRESSURE_BEATS.reduce((a,b,i)=>f>=b.at?i:a,0);
  const titles=['Squeeze the gas. What changes first?','The piston moves. The molecules stay.','Less space means more wall impacts.','Why does this reaction make more ammonia?','Four gas molecules can become two.','The reaction only partly offsets the squeeze.','Key notes: what to write in your book'];
  const opacity=ramp(f,PRESSURE_BEATS[beat].at,PRESSURE_BEATS[beat].at+15);
  return <AbsoluteFill style={{background:C.paper,color:C.ink,fontFamily:FONT_DISPLAY}}>
    <AbsoluteFill style={{background:'radial-gradient(ellipse at 38% 52%, #ffffffa0, transparent 64%)'}}/>
    <div style={{position:'absolute',left:95,right:95,top:47,display:'flex',justifyContent:'space-between',fontFamily:FONT_MONO,fontSize:23,letterSpacing:'.06em',color:C.dim}}><span>HSC SCIENCE / CHEMISTRY</span><span>GAS EQUILIBRIUM · MODULE 5</span></div>
    <div style={{position:'absolute',left:95,top:123,right:80,fontSize:66,fontWeight:680,letterSpacing:'-.025em',lineHeight:1.08,opacity}}>{heading}</div>
    {beat<6?<div style={{position:'absolute',left:100,top:216,fontSize:31,color:C.dim}}>Closed mixture · Temperature held constant</div>:null}
    <svg viewBox="0 0 1920 1080" style={{position:'absolute',inset:0,width:'100%',height:'100%',fontFamily:FONT_DISPLAY}} role="img" aria-label="A closed nitrogen, hydrogen and ammonia mixture is compressed at fixed temperature. The same gas molecules hit the walls more often. A subsequent net forward reaction makes ammonia and lowers total molecule number, partly reducing the pressure rise.">
      <AtomDefs id="pressure-pilot" elements={['N','H']}/>
      {beat<3?<>
        <Apparatus f={f} motionFrame={motionFrame} verticalTravel={verticalTravel}/>
        <g opacity={opacity}>
          <text x={1100} y={390} fontSize={40} fill={C.ink} fontWeight={550}>{beat===0?'Nitrogen + hydrogen ⇌ ammonia':beat===1?'Same molecules, less room.':'The walls feel more frequent hits.'}</text>
          <text x={1100} y={446} fontSize={31} fill={C.dim}>{beat===0?'Both reactions initially balance.':beat===1?'Compression itself creates no ammonia.':'Pressure rises before the reaction responds.'}</text>
        </g>
        <Legend/>
      </>:beat<5?<Reaction f={f}/>:beat===5?<><PressureResponse f={f} motionFrame={motionFrame} verticalTravel={verticalTravel} annotationOpacity={annotationOpacity}/><Legend/></>:<g fill={C.ink}>
        <path d="M105 313 H1815" stroke="#c7cfc5" strokeWidth={2}/>
        <text x={110} y={392} fontSize={38} fill={C.green} fontWeight={650}>At constant temperature:</text>
        <text x={110} y={481} fontSize={48}>Compression first raises pressure: the same gas occupies less space.</text>
        <text x={110} y={590} fontSize={48}>Equilibrium then shifts toward fewer gas moles.</text>
        <text x={110} y={699} fontSize={48}>For N₂ + 3H₂ ⇌ 2NH₃, more ammonia forms.</text>
        <text x={110} y={808} fontSize={41} fill={C.dim}>This partly offsets the pressure rise.</text>
        <text x={110} y={874} fontSize={33} fill={C.dim}>Pause if you would like more time to write.</text>
      </g>}
    </svg>
    <div style={{position:'absolute',right:95,top:860,fontFamily:FONT_MONO,fontSize:23,color:C.dim}}>0{beat+1} / 07</div>
    <div style={{position:'absolute',bottom:0,left:0,height:5,width:`${f/PRESSURE_PILOT_FRAMES*100}%`,background:C.green}}/>
  </AbsoluteFill>;
};

export const C4PressureTeachingResetScene=({lesson,scene}:{lesson:LessonData;scene:SceneData})=>{
  const local=useCurrentFrame();
  const data=scene as SceneData & {metadata?:{visualStart?:number;visualEnd?:number;teachingRenderer?:string;visualCuePoints?:{at:number;pilotFrame:number}[]}};
  const start=data.metadata?.visualStart??0,end=data.metadata?.visualEnd??239;
  const points=data.metadata?.visualCuePoints;
  const mappedFrame=(at:number)=>points?.length?interpolate(at,points.map(p=>p.at),points.map(p=>p.pilotFrame),clamp):Math.min(end,start+Math.max(0,at)/Math.max(1,scene.durationInFrames-1)*(end-start));
  const f=mappedFrame(local);
  const sceneStart=lessonTimeline(lesson).scenes.find(item=>item.scene.id===scene.id)?.startFrame??0;
  // Narration cues control the piston and gauge, never particle speed.
  // Integrate distance against the actual chamber size on each video frame.
  const motionTravel=useMemo(()=>{
    const chamberFrame=start>=1350?1500:mappedFrame(0);
    const result=[sceneStart/(400*volume(chamberFrame)-54)];
    for(let at=1;at<scene.durationInFrames;at++)result.push(result[at-1]+1/(400*volume(start>=1350?1500:mappedFrame(at))-54));
    return result;
  },[scene,sceneStart]);
  const heading='heading' in scene?scene.heading:lesson.title;
  const annotationAt=points?.find(point=>point.pilotFrame===1510)?.at;
  const annotationOpacity=annotationAt===undefined?undefined:ramp(local,annotationAt,annotationAt+12);
  return <PressureVisual frame={Math.floor(f)} heading={heading} motionFrame={sceneStart+local} verticalTravel={motionTravel[Math.min(local,motionTravel.length-1)]} annotationOpacity={annotationOpacity}/>;
};

