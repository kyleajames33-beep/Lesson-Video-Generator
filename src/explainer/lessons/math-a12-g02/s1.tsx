// Scenes 2 to 4: the decision tree (what does the question ask for?), worked problem 1 (the water added in the first
// second: a matched inside, the area sweeping while the tank fills) and worked problem 2 (the volume function: the
// primitive family locks through (0, 5) and the tank follows V(t); the C cancels).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, prog} from '../../kit';
import {FrameSvg, HandTag, ParameterSlider, SceneHeading, StudioPrimitiveFamily, kf} from '../../math/studio';
import {ReadStrip} from '../math-a12-d05/parts';
import {K2, K3, K4} from './cuemap';
import {AnswerBox, BoxCard, CARD, Chip, DERIV, Dc, FONT_DISPLAY, BROWN, GREY, Hand, INK, IconChange, IconFamily, IconSplit, IconTrap, KR, ModelRows, Row, Slip, Slot, Tank, Task, TreeChip, UP, Vc, rate, RateGraph, tankH} from './parts';

export const RC = 1230, RW = 640;
/** The worked-board layout of scenes 3 and 4: tank left, graph centre, working right. */
export const WB = {tx: 50, ty: 220, tw: 300, gx: 390, gy: 170, gw: 800, gh: 580};

/** A question strip card (40 px), outlined amber while it is the one being sorted. */
export const QCard: React.FC<{x: number; y: number; w: number; lit?: boolean; size?: number; children: React.ReactNode}> = ({x, y, w, lit = false, size = 38, children}) => (
	<div style={{position: 'absolute', left: x, top: y, width: w, boxSizing: 'border-box', background: CARD, borderRadius: 18, borderLeft: `10px solid ${BROWN}`, boxShadow: '0 14px 32px rgba(60,45,20,0.10)', outline: lit ? `4px solid ${KR.stroke}` : undefined, padding: '12px 24px 16px', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, lineHeight: 1.3, color: INK}}>{children}</div>
);

// ---------- 2. what the question asks for picks the model ----------
export const Q_AMOUNT = 'How much flows in from t = 0 to t = 1?';
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	return (
		<>
			<SceneHeading text="What does it ask for?" at={4} size={44} />
			<QCard x={60} y={190} w={520} lit={fr >= k.which && fr < k.integral + 30}>{Q_AMOUNT}</QCard>
			<Chip x={60} y={380} at={k.integral + 6} size={34} color={KR.ink}>change: definite integral</Chip>
			{fr >= k.seconds - 12 ? <FrameSvg><Countdown start={k.seconds} end={k.seconds + 90} x={520} y={480} r={46} /></FrameSvg> : null}
			<Tank x={110} y={470} w={300} level={0} max={8} water={0} />
			<ModelRows x={640} y={170} w={1220} question="What does the question ask for?" size={36} rowH={152} rows={[
				{at: k.fn, icon: <IconFamily />, text: 'a function → indefinite ∫, then + C', sub: 'a known value fixes C (or start + a definite ∫)', subAt: k.start},
				{at: k.change, litAt: k.integral, icon: <IconChange />, text: 'a change from a to b → ∫ₐᵇ f dt = F(b) − F(a)', sub: 'adds rate × small time; below the axis counts as negative', subAt: k.adds},
				{at: k.area, icon: <IconSplit />, text: 'an area or a distance → split at the zeros', sub: 'add the parts as positive amounts', subAt: k.split},
				{at: k.readings, icon: <IconTrap />, text: 'readings only → trapezoidal rule', sub: 'no formula to integrate: an estimate', subAt: k.trap},
			]} />
		</>
	);
};

// ---------- 3. worked problem 1: the change over an interval ----------
const added = (t: number) => Math.exp(t * t) - 1;
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const t = kf(fr, [[k.at1, 0], [k.litres + 10, 1]]);
	const A = added(t);
	return (
		<>
			<SceneHeading text="1. The water added" at={4} size={44} />
			<TreeChip label="a change: limits" at={-30} x={640} />
			<TreeChip q="matched inside?" label="f′e^f" at={k.look} x={1240} />
			<Tank x={WB.tx} y={WB.ty} w={WB.tw} level={2 + A} max={8} start={{v: 2, o: 1, label: 'start'}} gauge={{text: `added +${A.toFixed(2)} L`, o: prog(fr, k.at1, 12), color: fr >= k.gauge ? '#287347' : undefined}} />
			<RateGraph x={WB.gx} y={WB.gy} w={WB.gw} h={WB.gh} fillTo={t} cursor={{t, o: prog(fr, k.at1 - 10, 10)}} />
			<ReadStrip x={WB.gx} y={800} w={WB.gw} cells={[{label: 'time t', text: t.toFixed(2), unit: 's'}, {label: 'rate', text: rate(t).toFixed(2), unit: 'L/s'}, {label: 'water added', text: A.toFixed(2), unit: 'L', color: UP.ink}]} />
			<HandTag x={WB.gx + 140} y={WB.gy + 70} text="inside t², its derivative out the front" at={k.front} out={k.at1} size={36} color={DERIV.ink} />
			<HandTag x={WB.gx + 190} y={WB.gy + 330} text="r ≥ 0: amount = area" at={k.curve} size={38} color={UP.ink} />
			<Task x={RC} y={170} w={RW} at={-30} size={38}>Find the volume of water added from t = 0 to t = 1.</Task>
			<BoxCard x={RC} y={345} w={RW} at={-30} size={36} title="given">r(t) = 2t e^(t²) L/s, t in s</BoxCard>
			<Row x={RC} y={462} at={k.so} size={50} small={32} dim={prog(fr, k.prim, 12)}>∫₀¹ <Dc>2t</Dc> e^(<Slot>t²</Slot>) dt</Row>
			<Row x={RC} y={530} at={k.inside} size={46} small={30} dim={prog(fr, k.prim, 12)}>d/dt (<Slot>t²</Slot>) = <Dc>2t</Dc></Row>
			<Row x={RC} y={584} at={k.prim} size={48} small={32} dim={prog(fr, k.at1, 12)}>primitive: e^(t²)</Row>
			<Hand x={RC} y={642} at={k.prim + 24} size={30} color={GREY}>check: d/dt e^(t²) = 2t e^(t²)</Hand>
			<Row x={RC} y={680} at={k.at1} size={48} small={34} dim={prog(fr, k.litres, 12)}>[e^(t²)]₀¹ = e¹ − e⁰</Row>
			<AnswerBox x={RC} y={748} at={k.litres} size={48}>= e − 1 L <span style={{fontSize: 34, color: GREY, marginLeft: 18}}>≈ 1.72 L</span></AnswerBox>
			<Slip x={RC} y={840} at={k.prim + 40} strikeAt={k.prim + 54} w={RW} size={32} caption="its derivative is already out the front">∫ 2t e^(t²) dt = t² e^(t²)</Slip>
		</>
	);
};

// ---------- 4. worked problem 2: the function, with a starting value ----------
const F = (t: number) => Math.exp(t * t), fF = (t: number) => 2 * t * Math.exp(t * t);
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const C = kf(fr, [[0, 1.2], [k.vt, 1.2], [k.at0, 2.4], [k.four - 14, 2.4], [k.four + 22, 4]]);
	const t = kf(fr, [[k.sovt + 20, 0], [k.sovt + 120, 1]]);
	const V = F(t) + 4;
	return (
		<>
			<SceneHeading text="2. The volume function" at={4} size={44} />
			<TreeChip label="a function: + C" at={k.t} x={640} />
			<AnswerBox x={1500} y={84} at={-30} size={32}>e − 1 L</AnswerBox>
			<Tank x={WB.tx} y={WB.ty} w={WB.tw} level={V} max={8} gauge={{text: `V = ${V.toFixed(2)} L`, o: prog(fr, k.held, 12)}} />
			<StudioPrimitiveFamily x={WB.gx} y={WB.gy} width={WB.gw} height={WB.gh} window={{x: [-0.1, 1.15], y: [0, 9.5]}} F={F} f={fF} constants={[0, 2, 3, 5.5, 7]} C={C}
				xTicks={[0.5, 1]} yTicks={[2, 4, 5, 6, 8]} xLabel="t (s)" yLabel="V (L)" at={-300} membersAt={-300}
				point={{x: 0, y: 5, label: '(0, 5)', at: k.at0}}>
				{m => <>
					{fr >= k.four + 10 ? <circle cx={m.p(0, 5)[0]} cy={m.p(0, 5)[1]} r={26} fill="none" stroke={'#287347'} strokeWidth={6} opacity={prog(fr, k.four + 10, 12)} /> : null}
					{t > 0.001 ? <g><line x1={m.p(t, 0)[0]} x2={m.p(t, 0)[0]} y1={m.p(t, 0)[1]} y2={m.p(t, V)[1]} stroke={GREY} strokeWidth={3} strokeDasharray="8 7" /><circle cx={m.p(t, V)[0]} cy={m.p(t, V)[1]} r={13} fill="#1f6fb2" stroke="#fffdf8" strokeWidth={4} /></g> : null}
					<text x={m.p(0.62, 0)[0]} y={m.p(0, F(0.62) + C)[1] - 26} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: '#6b4fa0'}} stroke="#fffdf8" strokeWidth={8} paintOrder="stroke">{`e^(t²) + ${fr >= k.four + 22 ? '4' : 'C'}`}</text>
				</>}
			</StudioPrimitiveFamily>
			<ParameterSlider x={WB.gx + 10} y={790} width={360} symbol="C" role="gradient" value={C} min={0} max={6} ticks={[{value: 0, label: '0'}, {value: 4, label: '4'}, {value: 6, label: '6'}]} at={-300} />
			<ReadStrip x={WB.gx + 420} y={790} w={380} cells={[{label: 'time t', text: t.toFixed(2), unit: 's'}, {label: 'volume V', text: V.toFixed(2), unit: 'L'}]} />
			<Task x={RC} y={170} w={360} at={-30} size={40}>Find V(t).</Task>
			<BoxCard x={RC} y={292} w={RW} at={-30} size={36} title="given">dV/dt = 2t e^(t²) L/s<br />V(0) = 5 L</BoxCard>
			<Row x={RC} y={452} at={k.vt} size={40} small={30} dim={prog(fr, k.at0, 12)}>V(t) = ∫ 2t e^(t²) dt = e^(t²) + <Vc>C</Vc></Row>
			<Row x={RC} y={512} at={k.at0} size={46} small={32} dim={prog(fr, k.four, 12)}>V(0) = e⁰ + <Vc>C</Vc> = 1 + <Vc>C</Vc> = 5</Row>
			<Row x={RC} y={576} at={k.four} size={50} small={34} dim={prog(fr, k.sovt, 12)}><Vc>C = 4</Vc></Row>
			<AnswerBox x={RC} y={640} at={k.sovt} size={46}>V(t) = e^(t²) + 4</AnswerBox>
			<Row x={RC} y={736} at={k.v1} size={34} small={34}>V(1) − V(0) = (e + 4) − 5 = e − 1 <span style={{color: '#287347', opacity: prog(fr, k.emo, 10)}}>✓</span></Row>
			<HandTag x={RC + 380} y={800} text="C cancels" at={k.cancels} size={40} color={'#6b4fa0'} />
			<Slip x={RC} y={840} at={k.sovt + 40} strikeAt={k.sovt + 54} w={RW} size={32} caption="+ C, fixed by V(0) = 5">V(t) = e^(t²)</Slip>
		</>
	);
};
export {tankH};
