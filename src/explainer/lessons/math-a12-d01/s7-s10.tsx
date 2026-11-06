import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY} from '../../kit';
import {AlignedAlgebra, DerivativeFactor, ExpressionSlot} from '../../math/algebra';
import {at, move, lerp, Title, Right, Chip, Exp, Line} from './common';
import {ExponentialBoard} from './parts';
import {CueMathMark} from '../../math/lesson-parts';
import {HeightSlopeReadout} from '../../math/curve-layers';
const E: React.FC<{children: React.ReactNode}> = ({children}) => <Exp power={children}/>;
export const S7: React.FC = () => {
 const f = useCurrentFrame(), final = at(7, 'along');
 const steps = [
  {id: 'y', left: 'y', right: <E><ExpressionSlot role="inner" accent="#8a5a12">ax+b</ExpressionSlot></E>, at: at(7, 'Take')},
  {id: 'u', left: 'let u', right: 'ax + b', at: at(7, 'b', 2)},
  {id: 'outer', left: 'y = eᵘ, so dy/du', right: 'eᵘ', at: at(7, 'u', 5)},
  {id: 'inner', left: 'du/dx', right: <DerivativeFactor>a</DerivativeFactor>, at: at(7, 'a', 3)},
  {id: 'chain', left: 'dy/dx', right: 'dy/du × du/dx = eᵘ × a', at: at(7, 'multiplies')},
  {id: 'answer', left: '', right: <><DerivativeFactor>a</DerivativeFactor><E><ExpressionSlot role="inner" accent="#8a5a12">ax+b</ExpressionSlot></E></>, at: at(7, 'b', 4)},
 ];
 return <><Title>Prove: d/dx(e<sup>ax+b</sup>) = ae<sup>ax+b</sup></Title><ExponentialBoard a={2} x={.5} triangle run={.5} small readout={false}/><div style={{position: 'absolute', left: 1010, top: 240, width: 810}}><Chip dim>Year 11: dy/dx = dy/du × du/dx</Chip><AlignedAlgebra steps={steps} fontSize={32} dimBefore={f >= final ? at(7, 'b', 4) : undefined}/>{f >= at(7, 'because') && <Chip dim>constant b → 0</Chip>}{f >= final && <Chip>d/dx(k e<sup>ax+b</sup>) = k·a·e<sup>ax+b</sup></Chip>}</div></>;
};
export const S8: React.FC = () => {
 const f = useCurrentFrame();
 return <><Title>Differentiate</Title><div style={{position: 'absolute', left: 120, top: 220, fontSize: 47}}>y = <E>3x</E></div><div style={{position: 'absolute', left: 1050, top: 270, width: 770}}><AlignedAlgebra fontSize={38} steps={[{id: 'u', left: 'u', right: <ExpressionSlot role="inner" accent="#8a5a12">3x</ExpressionSlot>, at: 0}, {id: 'du', left: 'du/dx', right: <DerivativeFactor>3</DerivativeFactor>, at: at(8, 'three', 3)}, {id: 'answer', left: 'dy/dx', right: <><E>3x</E> × 3 = 3<CueMathMark active={f>=at(8,'whole')}><E>3x</E></CueMathMark></>, at: at(8, 'x', 4)}]}/>{f >= at(8, 'trap') && <><Chip cross>dy/dx = 3x · e<sup>3x − 1</sup></Chip><Chip dim>power rule needs x in the base<br/>x³ → 3x²</Chip></>}</div>{f >= at(8, 'graph') && <ExponentialBoard a={3} x={0} triangle run={1/3} runLabel="run ⅓" riseLabel="rise 1" spec={{x: [-1.5,.8], y: [0,8], fn: Math.exp, width: 1000, height: 650}} readout={false}/>} {f >= at(8, 'graph') && <div style={{position:'absolute',left:1120,top:800,width:650}}><HeightSlopeReadout height={1} slope={3} ratio={3}/></div>}</>;
};
export const S9: React.FC = () => {
 const f = useCurrentFrame();
 return <><Title>Find f′(−3)</Title><svg width={900} height={160} style={{position:'absolute',left:120,top:200,overflow:'visible',fontFamily:FONT_DISPLAY}}><text x={0} y={60} fontSize={45}>f(x) =</text><text x={145} y={60} fontSize={45}>5e</text><text x={198} y={40} fontSize={28}>2x+6</text>{[{x:155,y:70,label:'k = 5',cue:at(9,'five',2)},{x:205,y:48,label:'a = 2',cue:at(9,'two',2)},{x:257,y:48,label:'b = 6',cue:at(9,'six',2)}].map((v,i)=>f>=v.cue&&<g key={v.label} fill="#283c58" stroke="#283c58"><line x1={v.x} y1={v.y} x2={v.x+(i===0?-30:i===1?0:30)} y2={108} strokeWidth={2}/><text x={v.x+(i===0?-30:i===1?0:30)} y={140} textAnchor="middle" fontSize={24} stroke="none" fontWeight={(i===0||i===1)&&f>=at(9,'a',2)?700:400}>{v.label}</text></g>)}</svg><div style={{position: 'absolute', left: 1020, top: 260, width: 800}}><AlignedAlgebra fontSize={34} dimBefore={Math.max(0,...[at(9,'a',2),at(9,'six',3),at(9,'Now substitute'),at(9,'one'),at(9,'ten',3)].filter(v=>v<=f))} steps={[
 {id: 'first', left: 'f′(x)', right: <>5 × 2 × <E>2x+6</E></>, at: at(9, 'a', 2)},
 {id: 'simplify', left: '', right: <>10<E>2x+6</E></>, at: at(9, 'six', 3)},
 {id: 'sub', left: 'f′(−3)', right: <>10<E>2(−3)+6</E></>, at: at(9, 'Now substitute')},
 {id: 'power', left: '', right: '10e⁰ = 10 × 1', at: at(9, 'one')},
 {id: 'answer', left: '', right: '10', at: at(9, 'ten', 3)}
 ]}/>{f >= at(9, 'predicts') && <Chip>gradient = 2 × height</Chip>}</div>{f >= at(9, 'graph') && <div style={{transform:'translateY(90px)'}}><ExponentialBoard a={2} b={6} k={5} x={-3} triangle run={.5} runLabel="run ½" riseLabel="rise 5" small readout={false} spec={{x:[-4.5,-2],y:[0,12],fn:Math.exp,width:1000,height:650}}/></div>}{f>=at(9,'graph')&&<div style={{position:'absolute',left:1120,top:830,width:650}}><HeightSlopeReadout height={5} slope={10} ratio={2}/></div>}</>;
};
export const S10: React.FC = () => {
 const f = useCurrentFrame(), twice = at(10, 'twice'), backwards = at(10, 'backwards'), slide = at(10, 'different point'), stretch = at(10, 'together');
 const a = lerp(1,2,move(f,twice,30)), fold = f < backwards ? 1 : lerp(1,-2,move(f,backwards,30)), sx = Math.abs(fold)<.02 ? (fold<0?-.02:.02) : fold;
 return <><ExponentialBoard a={a} transform={{xScale:sx}} b={f >= slide ? -move(f,slide,30) : 0} k={f >= stretch ? lerp(1,3,move(f,stretch,30)) : 1} ghost/><Right><Chip>{f < twice ? '×1' : f < backwards ? '×2' : '×(−1)'}</Chip>{f >= at(10, 'a', 4) && <><Line>Copy the exponential,<br/>then multiply by k and a.</Line><Line>d/dx(k e<sup>ax+b</sup>) = k·a·e<sup>ax+b</sup></Line></>}</Right></>;
};
