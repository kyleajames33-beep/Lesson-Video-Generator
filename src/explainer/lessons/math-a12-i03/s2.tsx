// Scenes 5 to 9: the matched exponent (gradient dots of e^(x²) landing on 2xe^(x²)), another base (2ˣ riding
// with "gradient ÷ height" fixed at ln 2, the inner rate), base one (a blue slider runs a from 2 towards 1; the
// curve flattens and the primitive through the origin straightens onto y = x), the drug (g01 board with the
// family slid onto (0, 2)), the phone's answer (C = 100, the battery creeping under 100%), and algebra first.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {Card, FrameSvg, FunctionSimulator, HandTag, InnerSlot, LiveReadoutBoard, MarkSpan, MistakeCard, ParameterSlider, SceneHeading, StudioPrimitiveFamily, kf} from '../../math/studio';
import {K5, K6, K7, K8, K8A, K9} from './cuemap';
import {AMB, AnswerBox, BLUE, Bl, BoxCard, Cc, ChargeBoard, ChargeGraph, Chip, Ex, Frac, GREEN, GREY, Line, MiniPlot, PLabel, PhoneRig, RED, Tick, V, VIOLET} from './parts';

const Plan: React.FC<{x: number; y: number; w: number; out: number; lines: React.ReactNode}> = ({x, y, w, out, lines}) => (
	<Card x={x} y={y} w={w} at={-30} out={out} pad="16px 28px 18px">
		<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: INK}}>the plan</div>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 42, color: INK, lineHeight: 1.45}}>{lines}</div>
	</Card>
);

// ---------- 5. when the exponent isn't linear ----------
const EX2 = {f: (u: number) => Math.exp(u * u), df: (u: number) => 2 * u * Math.exp(u * u)};
const RX = 940;
export const S05: React.FC = () => {
	const f = useCurrentFrame();
	const k = K5;
	const x = kf(f, [[k.diff, -1.15], [k.integral + 20, 1.15]]);
	return (
		<>
			<SceneHeading text="When the exponent isn't linear" at={4} size={56} />
			<FunctionSimulator x={30} y={150} width={880} height={820} window={{x: [-1.25, 1.25], y: [-8, 8]}} family={EX2} timeline={[{frame: 0, x}]} color={INK} at={-30}
				xTicks={[-1, -0.5, 0.5, 1]} yTicks={[-6, -3, 3, 6]} point={{at: k.diff}} tangent={{at: k.diff, halfLength: 80}}
				gradientDots={{at: k.diff, every: 4, target: {fn: X => 2 * X * Math.exp(X * X), at: -30, solidAt: k.integral + 20}}}
				overlay={g => <FrameSvg>
					<PLabel p={g.toFrame(-1.2, 4.6)} text={<>y = e<tspan dy={-16} fontSize={28}>x²</tspan></>} size={38} />
					<PLabel p={g.toFrame(0.05, -5.6)} text={<>integrand 2xe<tspan dy={-16} fontSize={28}>x²</tspan></>} color={VIOLET} size={38} />
				</FrameSvg>} />
			<Line x={RX} y={160} at={-30} size={60}>∫<V><MarkSpan kind="circle" at={k.there} color={BLUE} width={5}>2x</MarkSpan><Ex><InnerSlot>x²</InnerSlot></Ex></V> dx</Line>
			<HandTag x={RX + 370} y={180} text="exponent" at={k.exp} size={40} color={GREY} />
			<Line x={RX} y={290} at={k.there} size={42}><V>d/dx</V> (x²) = <Bl>2x</Bl>: right there</Line>
			<Line x={RX} y={370} at={k.diff} size={52}><V>d/dx</V> <Ex>x²</Ex> = <Ex>x²</Ex> · <Bl>2x</Bl></Line>
			<AnswerBox x={RX} y={460} at={k.integral} size={52}>∫2x<Ex>x²</Ex> dx = <Ex>x²</Ex> <Cc>+ C</Cc></AnswerBox>
			<BoxCard x={RX} y={580} at={k.general} size={46} border={INK} bw={5}>∫<Bl>f′(x)</Bl><Ex>f(x)</Ex> dx = <Ex>f(x)</Ex> <Cc>+ C</Cc></BoxCard>
			<Chip x={RX} y={710} at={k.remember} size={38} color={GREEN}>i02: fix a missing number, never a missing x</Chip>
			<Line x={RX} y={800} at={k.half} size={40}>∫x<Ex>x²</Ex> dx = ½∫<Bl>2x</Bl><Ex>x²</Ex> dx = ½<Ex>x²</Ex> <Cc>+ C</Cc>  <Tick size={40} o={prog(f, k.half + 20, 10)} /></Line>
			<Line x={RX} y={880} at={k.but} size={40} color="#4f4840">∫<Ex>x²</Ex> dx: no 2x, not with these rules</Line>
		</>
	);
};

// ---------- 6. another base: the inner rate is ln a ----------
const TWO = {f: (u: number) => 2 ** u, df: (u: number) => Math.LN2 * 2 ** u};
export const S06: React.FC = () => {
	const f = useCurrentFrame();
	const k = K6;
	const x = kf(f, [[k.diff, -1.6], [k.linear, 2.6]]);
	return (
		<>
			<SceneHeading text="Another base: the inner rate is ln a" at={4} size={56} />
			<FunctionSimulator x={30} y={150} width={860} height={820} window={{x: [-2, 3.1], y: [-1, 8.6]}} family={TWO} timeline={[{frame: 0, x}]} color={INK} at={-30}
				xTicks={[-2, -1, 1, 2, 3]} yTicks={[2, 4, 6, 8]} point={{at: -30}} tangent={{at: k.diff, halfLength: 110}}
				readout={{x: RX, y: 230, width: 900, at: -30, inline: true, rows: [{label: 'height 2ˣ', value: s => s.Y, digits: 2}, {label: 'gradient', value: s => s.slope, digits: 2, role: 'gradient'}, {label: 'gradient ÷ height', value: s => s.slope / s.Y, digits: 3, role: 'a'}]}}
				overlay={g => <FrameSvg><PLabel p={g.toFrame(-1.9, 6.4)} text="y = 2ˣ" size={44} /></FrameSvg>} />
			<Chip x={RX} y={150} at={-30} size={36} color={GREY}>d02: <V>d/dx</V> aˣ = aˣ ln a,  ln 2 ≈ 0.693</Chip>
			<Line x={RX} y={505} at={k.is} size={54}>aˣ = <Ex><InnerSlot>x <Bl>ln a</Bl></InnerSlot></Ex></Line>
			<HandTag x={RX + 450} y={555} text="linear: inner rate ln a" at={k.linear} size={42} color={BLUE} />
			<BoxCard x={RX} y={600} at={k.divide} size={56} border={INK} bw={5}>∫aˣ dx = <Frac n="aˣ" d={<Bl>ln a</Bl>} /> <Cc>+ C</Cc></BoxCard>
			<Chip x={RX + 560} y={620} at={k.positive} size={40} color={GREY}>a &gt; 0  (a = 1?)</Chip>
			<Line x={RX} y={790} at={k.two} size={46}>∫2ˣ dx = <Frac n="2ˣ" d={<Bl>ln 2</Bl>} /> <Cc>+ C</Cc>  <Tick size={44} o={prog(f, k.two + 40, 10)} /></Line>
			<Line x={RX} y={890} at={k.e} size={38} color="#4f4840">a = e: ln e = 1, so ∫eˣ dx = eˣ + C</Line>
		</>
	);
};

// ---------- 7. base one ----------
export const S07: React.FC = () => {
	const f = useCurrentFrame();
	const k = K7;
	const a = kf(f, [[k.watch, 2], [k.watch + 100, 1.1]]);
	const sep = prog(f, k.integral, 14);
	const yx = prog(f, k.look, 14);
	const P = (X: number) => (a ** X - 1) / Math.log(a);
	return (
		<>
			<SceneHeading text="Base one" at={4} size={56} />
			<MiniPlot x={30} y={150} w={1000} h={700} win={{x: [-2, 2.6], y: [-1.6, 6]}} xTicks={[-2, -1, 1, 2]} yTicks={[-1, 1, 2, 3, 4, 5]}
				curves={[
					{fn: X => X, from: -2, to: 2.6, color: '#8a8378', dash: '12 10', width: 4, o: yx},
					{fn: () => 1, from: -2, to: 2.6, color: '#8a8378', dash: '12 10', width: 4, o: prog(f, k.flattens, 12) * (1 - sep)},
					{fn: X => a ** X, from: -2, to: 2.6, color: INK, o: 1 - 0.6 * sep},
					{fn: P, from: -2, to: 2.6, color: '#6b6358', width: 5, o: 1 - 0.3 * sep},
					{fn: () => 1, from: -2, to: 2.6, color: INK, width: 7, o: sep},
				]}>
				{m => <>
					<PLabel p={m.p(1.3, Math.min(5.6, a ** 1.3 + 0.4))} text={`y = ${a.toFixed(2)}ˣ`} size={40} o={1 - sep} />
					<PLabel p={m.p(0.25, -0.95)} text="primitive through (0, 0)" size={34} color="#4f4840" />
					<PLabel p={m.p(-1.9, 1.3)} text="a = 1: y = 1, a separate case" size={36} o={sep} />
					<PLabel p={m.p(-1.95, -1.25)} text="y = x" size={38} color="#4f4840" o={yx} />
				</>}
			</MiniPlot>
			<ParameterSlider x={120} y={880} width={820} symbol="a" role="a" value={a} min={0.5} max={2.5} ticks={[{value: 0.5, label: '0.5'}, {value: 1, label: '1'}, {value: 1.5, label: '1.5'}, {value: 2, label: '2'}, {value: 2.5, label: '2.5'}]} at={-30} />
			<LiveReadoutBoard x={1080} y={150} width={780} at={-30} inline size={52} rows={[{label: 'base a', value: a, digits: 2}, {label: 'inner rate ln a', value: Math.log(a), digits: 3, role: 'a'}]} />
			<Chip x={1080} y={360} at={-30} size={44}>∫aˣ dx = aˣ / <Bl>ln a</Bl> + C</Chip>
			<BoxCard x={1080} y={470} at={k.zero} size={44} border={RED}>a = 1: ln 1 = 0, can&apos;t divide by 0</BoxCard>
			<HandTag x={1100} y={640} text="1ˣ = 1 for every x" at={k.flattens} size={46} color={INK} />
			<AnswerBox x={1080} y={700} at={k.integral} size={56}>∫1 dx = x <Cc>+ C</Cc></AnswerBox>
			<HandTag x={1100} y={845} text="near a = 1 the primitive straightens onto y = x" at={k.straightens} size={40} color="#4f4840" />
		</>
	);
};

// ---------- 8. worked example: an initial condition ----------
const RX8 = 980;
export const S08: React.FC = () => {
	const f = useCurrentFrame();
	const k = K8;
	const C = kf(f, [[k.use + 30, 0], [k.one, 1]]);
	return (
		<>
			<SceneHeading text="Worked example: find A(t)" at={4} size={56} />
			<Line x={30} y={160} at={-30} size={44}><V><Frac n="dA" d="dt" /> = −0.5<Ex>−0.5t</Ex></V> mg per hour</Line>
			<StudioPrimitiveFamily x={30} y={300} width={920} height={660} window={{x: [-0.4, 6.4], y: [-0.25, 3.3]}} F={t => Math.exp(-0.5 * t)} f={t => -0.5 * Math.exp(-0.5 * t)}
				constants={[0, 0.5, 1, 1.5]} membersAt={k.C} C={C} point={{x: 0, y: 2, label: 'A(0) = 2', at: -30}} xTicks={[1, 2, 3, 4, 5, 6]} yTicks={[1, 2, 3]} xLabel="t (hours)" yLabel="A (mg)" at={-30}>
				{m => {const a = m.p(-0.4, 1), b = m.p(6.4, 1); const o = prog(f, k.mg, 12); return <g opacity={o}><line x1={a[0]} x2={b[0]} y1={a[1]} y2={a[1]} stroke="#8a8378" strokeWidth={4} strokeDasharray="14 10" /><PLabel p={m.p(3.2, 0.72)} text="levels off at 1 mg" size={38} /></g>;}}
			</StudioPrimitiveFamily>
			<Card x={RX8} y={150} w={880} at={-30} pad="10px 26px 12px">
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: '#4f4840'}}>GIVEN</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK}}><MarkSpan kind="underline" at={k.use} color={AMB}>A(0) = 2 mg</MarkSpan>    find A(t)</div>
			</Card>
			<Plan x={RX8} y={300} w={880} out={k.integrate - 4} lines={<>1. integrate: ÷ the <Bl>inner rate</Bl><br />2. use A(0) = 2 to find <Cc>C</Cc><br />3. write A(t)</>} />
			<MiniPlot x={RX8} y={600} w={880} h={360} win={{x: [-0.4, 6.4], y: [-0.6, 0.1]}} xTicks={[2, 4, 6]} yTicks={[-0.5]} xLabel="t (h)" yLabel="dA/dt" out={k.integrate - 4}
				curves={[{fn: t => -0.5 * Math.exp(-0.5 * t), from: 0, to: 6.4, color: VIOLET}]}>
				{m => <PLabel p={m.p(1.6, -0.36)} text="the rate: always negative, so A falls" color={VIOLET} size={36} />}
			</MiniPlot>
			<Line x={RX8} y={320} at={k.integrate} size={44}>A = ∫−0.5<Ex>−0.5t</Ex> dt = <Frac n="−0.5" d={<Bl>−0.5</Bl>} /><Ex>−0.5t</Ex> <Cc>+ C</Cc></Line>
			<Line x={RX8} y={430} at={k.cancel} size={52}>A = <Ex>−0.5t</Ex> <Cc>+ C</Cc></Line>
			<Line x={RX8} y={530} at={k.use} size={48}>A(0) = <Ex>0</Ex> <Cc>+ C</Cc> = 1 <Cc>+ C</Cc> = 2</Line>
			<Chip x={RX8 + 600} y={610} at={k.use + 20} size={36} color={GREY}>e⁰ = 1</Chip>
			<Line x={RX8} y={630} at={k.one} size={52}><Cc>C = 1</Cc></Line>
			<AnswerBox x={RX8} y={740} at={k.so} size={56}>A = <Ex>−0.5t</Ex> + 1</AnswerBox>
			<HandTag x={RX8 + 20} y={900} text="as t grows, the e term shrinks to 0" at={k.grows} size={42} color={INK} />
		</>
	);
};

// ---------- 8a. the phone's answer ----------
export const S08A: React.FC = () => {
	const f = useCurrentFrame();
	const k = K8A;
	const C = kf(f, [[k.forty, 0], [k.hundred, 100]]);
	const t = kf(f, [[k.heads, 0], [k.slowly + 20, 8]]);
	return (
		<>
			<SceneHeading text="The phone's answer" at={4} size={56} />
			<PhoneRig x={40} y={330} w={320} t={t} />
			<Card x={400} y={150} w={740} at={-30} pad="10px 26px 12px">
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: '#4f4840'}}>GIVEN</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK}}><MarkSpan kind="underline" at={k.forty} color={AMB}>B(0) = 40%</MarkSpan></div>
			</Card>
			<Line x={400} y={310} at={-30} size={50}>B = −60<Ex>−0.5t</Ex> <Cc>+ C</Cc></Line>
			<Line x={400} y={410} at={k.forty} size={50}>40 = −60 <Cc>+ C</Cc></Line>
			<Line x={400} y={500} at={k.hundred} size={50}><Cc>C = 100</Cc></Line>
			<AnswerBox x={400} y={590} at={k.hundred + 16} size={52}>B = 100 − 60<Ex>−0.5t</Ex></AnswerBox>
			<MistakeCard x={400} y={720} w={740} at={k.heads + 20} size={42} wrong={<><Cc>C = 40</Cc></>} caption="40% is where it started, not C" />
			<ChargeGraph x={1180} y={150} w={710} h={480} t={f < k.heads ? 8 : t} kind="batt" C={C}>
				{m => {const p = m.p(0, 40); return <circle cx={p[0]} cy={p[1]} r={26} fill="none" stroke={AMB} strokeWidth={5} />;}}
			</ChargeGraph>
			<ChargeBoard x={1180} y={660} width={710} t={t} rows={['rate', 'left', 'ratio']} ratioGlow={[k.heads + 40, 99999]} />
			<HandTag x={1870} y={950} text="half of what's left" at={k.heads + 40} size={42} color={BLUE} anchor="end" />
		</>
	);
};

// ---------- 9. worked example: algebra first ----------
const RX9 = 940;
export const S09: React.FC = () => {
	const f = useCurrentFrame();
	const k = K9;
	const ans = prog(f, k.so, 14);
	return (
		<>
			<SceneHeading text="Algebra still comes first" at={4} size={56} />
			<MiniPlot x={30} y={150} w={880} h={820} win={{x: [-2.2, 1.1], y: [-1, 11]}} xTicks={[-2, -1, 1]} yTicks={[2, 4, 6, 8, 10]}
				curves={[{fn: x => (Math.exp(x) + 1) ** 2, from: -2.2, to: 1.1, color: VIOLET}, {fn: x => 0.5 * Math.exp(2 * x) + 2 * Math.exp(x) + x, from: -2.2, to: 1.1, color: INK, o: ans}]}>
				{m => <>
					<PLabel p={m.p(-2.1, 2.2)} text="integrand (eˣ + 1)²" color={VIOLET} size={38} />
					<PLabel p={m.p(-1.2, -0.6)} text="the answer, C = 0" size={38} o={ans} />
				</>}
			</MiniPlot>
			<Line x={RX9} y={160} at={-30} size={60}>Find ∫<V>(eˣ + 1)²</V> dx</Line>
			<Line x={RX9} y={290} at={k.expand} size={52}>(eˣ + 1)² = <Ex>2x</Ex> + 2eˣ + 1</Line>
			<Chip x={RX9} y={380} at={k.sq} size={38} color={GREY}>(eˣ)² = <Ex>2x</Ex>, not <Ex>x²</Ex></Chip>
			<Plan x={RX9} y={480} w={920} out={k.each - 4} lines={<>1. expand<br />2. each term ÷ its own <Bl>inner rate</Bl><br />3. one + C</>} />
			<Line x={RX9} y={480} at={k.e2} size={48}>∫<Ex>2x</Ex> dx = <Frac n="1" d={<Bl>2</Bl>} /><Ex>2x</Ex></Line>
			<Line x={RX9} y={580} at={k.two} size={48}>∫2eˣ dx = 2eˣ</Line>
			<HandTag x={RX9 + 380} y={610} text="inner rate 1" at={k.two + 10} size={40} color={BLUE} />
			<Line x={RX9} y={670} at={k.one} size={48}>∫1 dx = x</Line>
			<AnswerBox x={RX9} y={760} at={k.so} size={52}>½<Ex>2x</Ex> + 2eˣ + x <Cc>+ C</Cc></AnswerBox>
			<Line x={RX9} y={880} at={k.so + 50} size={40}><V>d/dx</V>: <Ex>2x</Ex> + 2eˣ + 1  <Tick size={40} o={prog(f, k.so + 70, 10)} /></Line>
		</>
	);
};
