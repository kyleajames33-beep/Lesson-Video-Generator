import React from 'react';
import {useCurrentFrame} from 'remotion';
import {BLUE, INK, INK_SOFT} from '../../kit';
import {HeightSlopeReadout, CurveLayer} from '../../math/curve-layers';
import {graphTransform} from '../../math/graphs';
import {at, move, lerp, Exp, Title, Right, Chip, Line} from './common';
import {ExponentialBoard, RecallSecant, RingAt, XZero, TEAL, graph} from './parts';

export const S1: React.FC = () => {
 const f = useCurrentFrame(), squash = at(1, 'Squash'), slide = at(1, 'slide'), q = at(1, 'steeper'), end = at(1, 'b'), a = lerp(1, 2, move(f, squash)), b = move(f, slide), p = graphTransform(graph);
 return <><Title>Squash it or slide it: what happens to the derivative?</Title><ExponentialBoard color={INK} draw={move(f, 0)}><g opacity={f >= end ? .2 : 1}>{f >= squash && <CurveLayer graph={graph} fn={x => Math.exp(a * x)} color={BLUE} opacity={f >= slide ? .55 : 1}/>} {f >= slide && <CurveLayer graph={graph} fn={x => Math.exp(x + b)} color={TEAL}/>} {f >= q && <><XZero/><RingAt x={0} y={1} label="?"/><RingAt x={0} y={Math.E} label="?" color={TEAL}/></>}</g></ExponentialBoard><Right><Chip dim>y = eˣ</Chip>{f >= squash && <Chip>y = e²ˣ</Chip>}{f >= slide && <Chip>y = e<sup>x+1</sup></Chip>}{f >= q && <><Chip dim>steeper at x = 0?</Chip><Chip dim>which gains a derivative factor?</Chip></>}{f >= end && <Chip dim>y = k e<sup>ax+b</sup></Chip>}</Right></>;
};
export const S2: React.FC = () => {
 const f = useCurrentFrame(), one = at(2, 'one', 2), seven = at(2, 'seven', 2), trace = at(2, 'Height and gradient'), secantEnd = at(2, 'And e'), x = f < one ? lerp(1, 0, move(f, one - 45)) : f < seven ? lerp(0, 1, move(f, seven - 45)) : lerp(1, -1, move(f, trace, 100));
 return <>{f < secantEnd ? <RecallSecant/> : <ExponentialBoard color={INK} x={x} dots={f >= trace ? Array.from({length: Math.ceil(move(f, trace, 100) * 20)}, (_, i) => 1 - i / 10) : undefined}/>}<Right><Chip dim>Year 11: gradient = slope of the tangent</Chip>{f >= secantEnd && <Chip dim>d/dx(eˣ) = eˣ</Chip>}{f >= one && <Chip>gradient = 1 × height</Chip>}{f >= trace && <Chip dim>gradient marks land on the curve itself</Chip>}</Right></>;
};
export const S3: React.FC = () => {
 const f = useCurrentFrame(), squash = at(3, 'Squash the curve'), halves = at(3, 'halves'), two = at(3, 'two', 3), result = at(3, 'x', 4), t = move(f, squash), a = lerp(1, 2, t), toZero = at(3, 'At height one'), trace = at(3, 'so the derivative'), sweep = move(f, trace, Math.max(1,result-trace)), x = f < toZero ? 1/a : f < two ? lerp(.5,0,move(f,toZero,two-toZero)) : f < trace ? lerp(0,.5,move(f,two,Math.max(1,trace-two))) : lerp(.5,-1,sweep);
 return <><ExponentialBoard a={a} color={f < squash ? INK : BLUE} ghost={f >= squash} x={x} derivativeDraw={f >= trace ? sweep : undefined} triangle={f < result} run={1 / a} runCircle={f>=halves} riseTag={f>=halves?'same':undefined} runLabel={t === 0 ? 'run 1' : t === 1 ? 'run ½' : 'run ' + (1/a).toFixed(2)} riseLabel={`rise ${Math.exp(a*x).toFixed(2)}`} dots={f >= trace ? Array.from({length: Math.floor(sweep * 16)}, (_, i) => .5 - i / 10) : undefined}/><Right><Chip>e²ˣ: x is doubled first</Chip>{f >= halves && <Chip>same rise, half the run → twice the slope</Chip>}{f >= two && <Chip>gradient = 2 × height</Chip>}{f >= result && <Line>d/dx(e²ˣ) = 2e²ˣ</Line>}</Right></>;
};
export const S4: React.FC = () => {
 const f = useCurrentFrame(), three = at(4, 'three'), flips = at(4, 'flips'), reset = at(4, 'What about'), a = f < reset ? lerp(2,3,move(f,three)) : lerp(3,2,move(f,reset,30)), flip = move(f,flips,30), projected = Math.cos(Math.PI*flip), sx = Math.abs(projected)<.02 ? (projected<0?-.02:.02) : projected;
 return <><ExponentialBoard a={a} x={1/a} transform={{xScale:sx}} highlightHeight={f>=at(4,'positive',1)} circleSlopeSign={f>=at(4,'negative',2)} triangle={flip===0 || flip===1} tangent={flip===0 || flip===1} readout={flip===0 || flip===1} run={1/a} runLabel={flip === 1 ? 'run ½ to the left' : a === 2 ? 'run ½' : a === 3 ? 'run ⅓' : 'run ' + (1/a).toFixed(2)} riseLabel="rise 2.72" ghost/><Right><Chip dim>d/dx(e²ˣ) = 2e²ˣ</Chip>{f >= at(4, 'x', 2) && <Chip>d/dx(e³ˣ) = 3e³ˣ</Chip>}{f >= flips && <Chip>gradient = −2 × height</Chip>}{f >= at(4, 'positive', 1) && <Chip>always above the x-axis (y &gt; 0)</Chip>}{f >= at(4, 'negative', 2) && <Chip>height stays positive; gradient is negative</Chip>}</Right></>;
};
export const S5: React.FC = () => {
 const f = useCurrentFrame(), slide = at(5, 'slide'), guess = at(5, 'guess'), b = move(f, slide), x = f < guess ? -b : lerp(-1, 0, move(f, guess)), two = at(5, 'two', 3);
 return <><ExponentialBoard a={1} b={b} x={x} readout={false} triangle run={1} runLabel="run 1" riseLabel={f < guess ? 'rise 1' : undefined} ghost color={TEAL} second={f >= guess ? {a: 2, b: 0, color: BLUE} : undefined}>{f >= guess && <><XZero/><RingAt x={0} y={1} label={f >= two ? '2.00' : '?'}/><RingAt x={0} y={Math.E} label={f >= two ? '2.72' : '?'} color={TEAL}/></>}</ExponentialBoard><Right>{f >= at(5, 'one', 4) && <Line>d/dx(<Exp power="x+1"/>) = <Exp power="x+1"/></Line>}<Chip>slide: slopes unchanged</Chip>{f >= two && <><Chip circle={f >= at(5, 'height', 2)}>e<sup>x+1</sup>: gradient 2.72; 1 × height</Chip><Chip circle={f >= at(5, 'height', 2)}>e²ˣ: gradient 2.00; 2 × height</Chip></>}{f >= at(5, 'height', 2) && <Chip>a sets gradient ÷ height</Chip>}</Right><Right top={f>=guess?680:700} width={f>=guess?330:700}>{f>=guess&&<div style={{fontSize:28,color:TEAL,marginBottom:8}}>e<sup>x+1</sup></div>}<HeightSlopeReadout height={Math.exp(x+b)} slope={Math.exp(x+b)} ratio={1}/></Right>{f>=guess&&<div style={{position:'absolute',left:1480,top:680,width:330}}><div style={{fontSize:28,color:BLUE,marginBottom:8}}>e<sup>2x</sup></div><HeightSlopeReadout height={1} slope={2} ratio={2}/></div>}</>;
};
export const S6: React.FC = () => {
 const f = useCurrentFrame(), k = lerp(1, 3, move(f, at(6, 'stretch')));
 return <><ExponentialBoard k={k} x={0} triangle run={1} runLabel="run 1: same" riseLabel={`rise ${k.toFixed(0)}`} ghost/><Right>{f >= at(6, 'ride') && <><Chip dim>Year 11: d/dx(k·f) = k·f′</Chip><Line>d/dx(3eˣ) = 3eˣ</Line></>}{f >= at(6, 'three', 6) && <Chip circle>gradient = 1 × height</Chip>}{f >= at(6, 'So k') && <><Chip>x → ax: slopes × a (a ≠ 0)</Chip><Chip>slide: no extra factor</Chip><Chip>stretch by k: heights and slopes × k</Chip></>}</Right></>;
};
