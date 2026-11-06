import {QuestionCard} from '../../math/lesson-parts';
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {BLUE, FONT_DISPLAY, INK, INK_SOFT, Countdown} from '../../kit';
import {FunctionGraph, TangentTriangle, graphTransform, SecantToTangent, type GraphSpec, type AttachedTransform} from '../../math/graphs';
import {CurveLayer, HeightSlopeReadout} from '../../math/curve-layers';
import {MATH_ACCENT} from '../../math/kit';
import {at, scene, Exp, Title, Right, Chip} from './common';
export const TEAL = '#178079';
export const graph: GraphSpec = {x: [-2, 2], y: [0, 8], width: 1000, height: 650, fn: Math.exp, color: INK};
export const ExponentialBoard: React.FC<{a?: number; b?: number; k?: number; x?: number; triangle?: boolean; run?: number; runLabel?: string; riseLabel?: string; runCircle?: boolean; riseTag?: string; highlightHeight?: boolean; circleSlopeSign?: boolean; ghost?: boolean; color?: string; dots?: number[]; second?: {a: number; b: number; color: string}; readout?: boolean; tangent?: boolean; ratio?: boolean; children?: React.ReactNode; small?: boolean; spec?: GraphSpec; draw?: number; transform?: AttachedTransform; derivativeDraw?: number}> = ({a = 1, b = 0, k = 1, x, triangle, run = 1, runLabel, riseLabel, runCircle, riseTag, highlightHeight, circleSlopeSign, ghost, color = BLUE, dots, second, readout = true, tangent = true, ratio = true, children, small, spec = graph, draw = 1, transform, derivativeDraw}) => {
 const g = {...spec, fn: (v: number) => k * Math.exp(a * v + b), color}, p = graphTransform(g);
 return <><div style={{position: 'absolute', left: 90, top: 265, transformOrigin: 'top left', transform: small ? 'scale(.74)' : undefined}}><FunctionGraph {...g} transform={transform} draw={draw} movingX={x} tangent={!tangent || x === undefined ? undefined : {x, slope: a * g.fn(x), span: .65}}>
  {derivativeDraw !== undefined && <CurveLayer graph={g} fn={v => a * g.fn(v)} color="#8a5a12" opacity={.35} draw={derivativeDraw}/>}{ghost && <CurveLayer graph={g} fn={Math.exp} color={INK_SOFT} dashed opacity={.45}/>}
  {second && <><CurveLayer graph={g} fn={v => Math.exp(second.a * v + second.b)} color={second.color}/><line x1={p.point(-.55,Math.exp(second.b)*(1-second.a*.55)).x} y1={p.point(-.55,Math.exp(second.b)*(1-second.a*.55)).y} x2={p.point(.55,Math.exp(second.b)*(1+second.a*.55)).x} y2={p.point(.55,Math.exp(second.b)*(1+second.a*.55)).y} stroke={second.color} strokeWidth={4}/></>}
  {triangle && x !== undefined && <TangentTriangle graph={g} x={x} slope={a * g.fn(x)} run={run} transform={transform} runLabel={runLabel} riseLabel={riseLabel} runCircle={runCircle} riseTag={riseTag} readouts={false}/>}
  {dots?.map((v, i) => {const q = p.point(v, a * g.fn(v)); return <circle key={i} cx={q.x} cy={q.y} r={5} fill={MATH_ACCENT}/>;})}
  {children}
 </FunctionGraph></div>{x !== undefined && readout && <Right top={700}><HeightSlopeReadout highlightHeight={highlightHeight} circleSlopeSign={circleSlopeSign} height={g.fn(x)} slope={a * g.fn(x) / (transform?.xScale ?? 1)} ratio={ratio ? a / (transform?.xScale ?? 1) : undefined}/></Right>}</>;
};
export const RingAt: React.FC<{x: number; y: number; label?: string; color?: string}> = ({x, y, label, color = MATH_ACCENT}) => {const p = graphTransform(graph).point(x, y); return <g><circle cx={p.x} cy={p.y} r={15} fill="none" stroke={color} strokeWidth={4}/>{label && <text x={p.x + 25} y={p.y - 12} fontFamily={FONT_DISPLAY} fontSize={30} fill={color}>{label}</text>}</g>;};
export const XZero: React.FC = () => {const t = graphTransform(graph), p = t.point(0, 0); return <line x1={p.x} x2={p.x} y1={t.box.top} y2={t.box.top + t.box.height} stroke={INK_SOFT} strokeDasharray="7 7" strokeWidth={2}/>;};
export const RecallSecant: React.FC = () => <div style={{position: 'absolute', left: 90, top: 265}}><SecantToTangent graph={graph} derivative={Math.exp} a={1} fromX={2} at={at(2, 'in')} duration={Math.max(1, at(2, 'And e') - at(2, 'in') - 1)}/></div>;
export const Question: React.FC<{n: 11 | 13}> = ({n}) => <QuestionCard hold={scene(n).responseHold}>{n === 11 ? <>Consider the function f(x) = <Exp k="4" power="2x − 1"/>.<br/>(a) Find f′(x).<br/>(b) Hence find the exact value of f′(½).</> : <>A curve has equation y = <Exp k="3" power="−2x"/>.<br/>(a) Find the gradient of the curve at x = 0.<br/>(b) Explain why the curve is decreasing for all real values of x.</>}</QuestionCard>;
export const Handoff: React.FC<{ready?: boolean}> = ({ready}) => {const f = useCurrentFrame(), start = ready ? 0 : at(15, 'Next'); return <><Title>Copy the exponential, then multiply by k and a.</Title><ExponentialBoard color={BLUE} a={Math.log(2)} ghost draw={ready ? 1 : Math.max(0, Math.min(1, (f - start) / 45))}/><Right><Chip>2ˣ = e<sup><span style={{border: `2px solid ${MATH_ACCENT}`, padding: '0 8px'}}>?</span> · x</sup></Chip><Chip>Next: differentiating aˣ</Chip></Right></>;};

export const FeedbackQuestion: React.FC<{n:11|13}> = ({n}) => {
 const f=useCurrentFrame();const under=(active:boolean):React.CSSProperties=>({borderBottom:active?'3px solid #8a5a12':'3px solid transparent'});
 return <QuestionCard compact>{n===11 ? <>Consider the function f(x) = <span style={under(f>=at(12,'one',3))}>4e</span><sup style={under(f>=at(12,'two',2))}>2x − 1</sup>. (a) Find f′(x).<br/>(b) Hence find the exact value of f′(<span style={under(f>=at(12,'eight',2))}>½</span>).</> : <>A curve has equation y = 3e<sup>−2x</sup>. (a) Find the gradient of the curve at x = 0.<br/>(b) Explain why the curve is decreasing for all real values of x.</>}</QuestionCard>;
};
