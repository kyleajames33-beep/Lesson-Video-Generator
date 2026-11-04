import React from 'react';
import {AbsoluteFill,Composition,registerRoot,useCurrentFrame,staticFile} from 'remotion';
import {MotionTrack,VectorTriangle,MotionGraphStack,FreeBodyDiagram,ArrowSlideFlip,ProjectionShadows,SignedNumberLine,AxisTally,SignedAreaFill,RepeatResults,FrameLock,TimeStepPath,DialOverlay} from './y11-kit';
const model={position:(t:number)=>t*t,velocity:(t:number)=>2*t,acceleration:()=>2};
const path=[{x:120,y:350,t:0},{x:820,y:350,t:7},{x:500,y:350,t:10}];
const sections=['Motion track','Vector triangle','Linked motion graphs','Free-body diagram','Slides and steps','Projection and tally','Signed area and repeat results','Reference frame and dial'];
const Demo:React.FC=()=>{const f=useCurrentFrame(),scene=Math.min(7,Math.floor(f/120)),u=(f%120)/119;return <AbsoluteFill style={{background:'#f7f2e8'}}><svg viewBox="0 0 1200 675" width="100%" height="100%"><text x="75" y="75" fontFamily="sans-serif" fontSize="40" fontWeight="700" fill="#252a2d">Year 11 Physics kit: {sections[scene]}</text>
{scene===0&&<g transform="translate(80 90)"><MotionTrack path={path} time={u*10} plate={staticFile('assets/physics/phys-y11-car-top-v1.png')}/></g>}
{scene===1&&<g transform="translate(200 500)"><VectorTriangle a={{x:400,y:0}} b={{x:0,y:-300}} scale={.4+.6*u}/></g>}
{scene===2&&<g transform="translate(200 100)"><MotionGraphStack model={model} time={4*u} domain={[0,4]} ranges={[[0,16],[0,8],[0,4]]} width={800} height={480}/></g>}
{scene===3&&<g transform="translate(550 355)"><FreeBodyDiagram progress={u} scale={1.4} forces={[{name:'pull',vector:{x:140.95,y:51.3}},{name:'friction',vector:{x:-95,y:0}},{name:'normal',vector:{x:0,y:144.7}},{name:'weight',vector:{x:0,y:-196}}]}/></g>}
{scene===4&&<g transform="translate(200 230)"><ArrowSlideFlip v={{x:200,y:0}} from={{x:0,y:0}} to={{x:250,y:0}} slide={u} flip={u} ghost/><g transform="translate(0 280)"><TimeStepPath a={{x:70,y:0}} b={{x:0,y:-50}} steps={Math.floor(u*3)} /></g></g>}
{scene===5&&<g transform="translate(320 340)"><ProjectionShadows vector={{x:260,y:-150}} axisAngle={u*.4}/><g transform="translate(410 -100)"><AxisTally legs={[{x:6,y:0},{x:0,y:3},{x:-2,y:0},{x:0,y:-5}]} revealed={Math.floor(4*u)}/></g></g>}
{scene===6&&<g transform="translate(140 320)"><SignedAreaFill points={[{x:0,y:-2,t:0},{x:0,y:6,t:4}]} time={u*4} xScale={100} yScale={35}/><g transform="translate(600 0)"><RepeatResults values={[9.61,9.62,9.63]} domain={[9.5,10.1]} accepted={9.8} width={360}/></g></g>}
{scene===7&&<g transform="translate(250 250)"><SignedNumberLine path={[{x:0,y:0,t:0},{x:12,y:0,t:2},{x:7,y:0,t:3}]} time={u*3} scale={30}/><g transform="translate(600 100)"><FrameLock origin={{x:80*u,y:0}}><circle cx={100} cy={0} r={15} fill="#176fbb"/><circle cx={300} cy={0} r={15} fill="#12867e"/></FrameLock></g><g transform="translate(700 230)"><circle r="90" fill="none" stroke="#252a2d"/><DialOverlay cx={0} cy={0} radius={70} angle={Math.PI*(.8+1.4*u)} odometer={{x:-55,y:120,text:'120 m'}} clock={{x:100,y:120,text:'10 s'}}/></g></g>}
</svg></AbsoluteFill>};
registerRoot(()=> <Composition id="Physics-Y11-Kit-Pilot" component={Demo} durationInFrames={960} fps={30} width={1920} height={1080}/>);
