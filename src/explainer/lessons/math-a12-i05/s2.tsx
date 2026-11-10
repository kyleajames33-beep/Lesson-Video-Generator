// Scenes 5 to 8: a linear inside (sin x squashed by 5; the gradient readout goes 1 to 5), the panels' answer
// (÷ π/12, C from sunrise, 19.1 kWh by noon and 38.2 by sunset, the forgot-÷ slip reaching only 10), tan with a
// linear inside and its asymptotes, and matched insides (−2x sin(x² + 1), 3x² cos(x³), cos x sec²(sin x)).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, prog} from '../../kit';
import {Card, HandTag, InnerSlot, LiveReadoutBoard, MATH_AMBER, MATH_EXCLUDED, SceneHeading, StudioPlot, fnPath, kf} from '../../math/studio';
import {K5, K5A, K6, K7, K8} from './cuemap';
import {AnswerBox, BLUE, Bl, BoxCard, Cc, Chip, Frac, GREY, GapLine, Line, MiniPlot, PLabel, RED, SolarBoard, SolarGraph, SolarRig, Stub, Tick, V, VIOLET, energy, slipEnergy} from './parts';

const PI = Math.PI;
const Slot = InnerSlot;

// ---------- 5. a linear inside ----------
const RX5 = 1040;
export const S05: React.FC = () => {
	const f = useCurrentFrame();
	const k = K5;
	const kk = kf(f, [[k.squashed, 1], [k.squashed + 60, 5]]);
	return (
		<>
			<SceneHeading text="A linear inside: 15 cos 5x" at={4} size={56} />
			<StudioPlot x={30} y={150} width={960} height={810} window={{x: [-0.6, 3.4], y: [-1.5, 1.8]}} xTicks={[{value: PI / 2, label: 'π/2'}, {value: PI, label: 'π'}]} yTicks={[-1, 1]} at={-30}>
				{m => {const p = m.p(0, 0), q = m.p(1 / kk, 0), r = m.p(1 / kk, 1); return <>
					<g clipPath={m.clip}>
						<path d={fnPath(m, Math.sin, -0.6, 3.4)} stroke="#9b9387" strokeWidth={4} strokeDasharray="12 10" fill="none" opacity={prog(f, k.squashed, 10)} />
						<path d={fnPath(m, x => Math.sin(kk * x), -0.6, 3.4, 520)} stroke={INK} strokeWidth={6.5} fill="none" />
						<path d={`M${p[0]},${p[1]} H${q[0]} V${r[1]}`} stroke={BLUE} strokeWidth={5} fill="none" />
					</g>
					<Stub m={m} X={0} Y={0} s={kk} hl={150} />
					<PLabel p={[(p[0] + q[0]) / 2, p[1]]} dy={42} text={kk > 4.5 ? 'run 1/5' : 'run 1'} color={BLUE} size={32} anchor="middle" />
					<PLabel p={[r[0], (q[1] + r[1]) / 2]} dx={12} dy={10} text="rise 1" color={BLUE} size={32} />
					<PLabel p={m.p(1.5, -1.3)} text={kk > 4.5 ? 'y = sin 5x' : 'y = sin x'} size={40} />
					<PLabel p={m.p(-0.5, -1.25)} text="squash by 5: slopes × 5" color={BLUE} size={40} hand o={prog(f, k.every, 12)} />
				</>;}}
			</StudioPlot>
			<LiveReadoutBoard x={140} y={168} width={560} at={-30} inline size={52} labelSize={30} rows={[{label: 'gradient at 0', value: kk, digits: 1, role: 'gradient', glow: [k.every, k.every + 60]}]} />
			<BoxCard x={RX5} y={150} w={850} at={-30} size={50} title="task">Find ∫<V>15 cos 5x</V> dx</BoxCard>
			<BoxCard x={RX5} y={320} w={850} at={-30} out={k.tryit - 4} size={42} title="the plan">1. try sin(inside)<br />2. differentiate and compare<br />3. fix the number in front</BoxCard>
			<Line x={RX5 + 10} y={310} at={k.tryit} size={46}>try sin <Slot>5x</Slot></Line>
			<Line x={RX5 + 10} y={400} at={k.its} size={46}><V>d/dx</V> sin 5x = <Bl>5</Bl> cos 5x</Line>
			<Line x={RX5 + 10} y={490} at={k.need} size={46}><V>15 cos 5x</V> = 3 × <Bl>5</Bl> cos 5x</Line>
			<AnswerBox x={RX5} y={590} at={k.answer} size={46}>∫<V>15 cos 5x</V> dx = 3 sin 5x <Cc>+ C</Cc></AnswerBox>
			<Line x={RX5 + 10} y={700} at={k.diff} size={40}><V>d/dx</V> (3 sin 5x) = 3 × <Bl>5</Bl> cos 5x = <V>15 cos 5x</V> <Tick size={40} o={prog(f, k.diff + 40, 10)} /></Line>
			<BoxCard x={RX5} y={780} w={850} at={k.linear} size={32} title="any linear inside, a ≠ 0">
				∫cos(ax + b) dx = (<Bl>1/a</Bl>) sin(ax + b) <Cc>+ C</Cc><br />∫sin(ax + b) dx = −(<Bl>1/a</Bl>) cos(ax + b) <Cc>+ C</Cc><br />∫sec²(ax + b) dx = (<Bl>1/a</Bl>) tan(ax + b) <Cc>+ C</Cc>
			</BoxCard>
		</>
	);
};

// ---------- 5a. the panels' day ----------
const RX5A = 820;
export const S05A: React.FC = () => {
	const f = useCurrentFrame();
	const k = K5A;
	const t = kf(f, [[k.noon, 0], [k.noon + 40, 6], [k.sunset, 6], [k.sunset + 40, 12]]);
	const C = kf(f, [[k.sunrise + 20, 0], [k.cIs + 10, 60 / PI]]);
	const ghost = prog(f, k.sunrise + 20, 10) * (1 - prog(f, k.noon, 12));
	const slip = prog(f, k.half + 40, 14);
	return (
		<>
			<SceneHeading text="How much energy by noon, and by sunset?" at={4} size={56} />
			<SolarRig x={20} bottom={950} w={740} t={t} R={320} sunW={120} />
			<SolarBoard x={RX5A} y={150} width={1070} t={t} size={40} glow={[k.noon, 99999]} />
			<Card x={RX5A} y={355} w={1070} at={-30} out={k.inner - 4} pad="10px 24px 12px">
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: '#4f4840'}}>GIVEN</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, lineHeight: 1.3}}>power <V>p = 5 sin(πt/12)</V> kW<br />t hours after a 6 am sunrise; <span style={{color: '#7a4600'}}>energy 0 at t = 0</span></div>
			</Card>
			<Line x={RX5A + 10} y={360} at={k.inner} size={36}>E = ∫<V>5 sin(<Slot>πt/12</Slot>)</V> dt = −5 · <Frac n="12" d={<Bl>π</Bl>} /> cos(πt/12) <Cc>+ C</Cc></Line>
			<Line x={RX5A + 10} y={430} at={k.energy} size={42}>E = −<Frac n="60" d="π" /> cos(πt/12) <Cc>+ C</Cc></Line>
			<HandTag x={RX5A + 640} y={470} text="÷ π/12 = × 12/π" at={k.inner + 30} size={40} color={BLUE} />
			<Line x={RX5A + 10} y={510} at={k.sunrise} size={36}>E(0) = 0:  0 = −<Frac n="60" d="π" /> + <Cc>C</Cc>,  so <Cc>C = 60/π</Cc></Line>
			<AnswerBox x={RX5A} y={582} at={k.cIs} size={40}>E = <Frac n="60" d="π" />(1 − cos(πt/12))</AnswerBox>
			<SolarGraph x={RX5A} y={682} w={1070} h={278} t={t} kind="energy" C={C} full yWin={[-21, 42]}>
				{m => {const p6 = m.p(6, energy(6)), p12 = m.p(12, energy(12)), a = m.p(6, 0); return <>
					<g clipPath={m.clip} opacity={ghost}><path d={fnPath(m, u => energy(u, 0), 0, 12)} stroke={MATH_EXCLUDED} strokeWidth={4} strokeDasharray="12 10" fill="none" /></g>
					<g clipPath={m.clip} opacity={slip}><path d={fnPath(m, slipEnergy, 0, 12)} stroke={RED} strokeWidth={5} strokeDasharray="14 10" fill="none" /></g>
					<PLabel p={m.p(9.6, 14)} text="slip: only 10" color={RED} size={32} o={slip} />
					<circle cx={p6[0]} cy={p6[1]} r={16} fill="none" stroke={MATH_AMBER} strokeWidth={5} opacity={prog(f, k.noon + 40, 10)} />
					<circle cx={p12[0]} cy={p12[1]} r={16} fill="none" stroke={MATH_AMBER} strokeWidth={5} opacity={prog(f, k.sunset + 40, 10)} />
					<PLabel p={m.p(0.3, -7)} text="E(6) = 60/π ≈ 19.1" size={34} o={prog(f, k.noon + 40, 12)} />
					<PLabel p={m.p(6.3, -7)} text="E(12) = 120/π ≈ 38.2" size={34} o={prog(f, k.sunset + 40, 12)} />
					<line x1={a[0]} x2={a[0]} y1={p6[1]} y2={a[1]} stroke={MATH_AMBER} strokeWidth={4} strokeDasharray="8 7" opacity={prog(f, k.half, 12)} />
					<PLabel p={m.p(0.6, 30)} text="half by noon" color="#7a4600" size={40} hand o={prog(f, k.half, 12)} />
				</>;}}
			</SolarGraph>
		</>
	);
};

// ---------- 6. tan with a linear inside ----------
const RX6 = 980;
const ASY6 = [-PI / 12, (5 * PI) / 12, (11 * PI) / 12];
const W6: [number, number] = [-0.5, 3.0];
export const S06: React.FC = () => {
	const f = useCurrentFrame();
	const k = K6;
	const g = (x: number) => Math.tan(2 * x - PI / 3);
	const ring = prog(f, k.thats, 12);
	const pieces: [number, number][] = [[W6[0], ASY6[0]], [ASY6[0], ASY6[1]], [ASY6[1], ASY6[2]], [ASY6[2], W6[1]]];
	return (
		<>
			<SceneHeading text="tan with a linear inside" at={4} size={56} />
			<StudioPlot x={30} y={150} width={910} height={810} window={{x: W6, y: [-4, 4]}} xTicks={[{value: -PI / 12, label: '−π/12'}, {value: (5 * PI) / 12, label: '5π/12'}, {value: (11 * PI) / 12, label: '11π/12'}]} yTicks={[-2, 2]} at={-30}>
				{m => <>
					{ASY6.map(a => {const p = m.p(a, 0); return <line key={a} x1={p[0]} x2={p[0]} y1={m.box.top} y2={m.box.top + m.box.height} stroke={MATH_EXCLUDED} strokeWidth={prog(f, k.keep, 10) > 0.5 ? 5 : 3.5} strokeDasharray="12 10" />;})}
					<g clipPath={m.clip}>{pieces.map((pr, i) => <path key={i} d={fnPath(m, g, pr[0] + 0.003, pr[1] - 0.003)} stroke={INK} strokeWidth={6.5} fill="none" />)}</g>
					{ASY6.map(a => {const p = m.p(a, 0); return <circle key={'r' + a} cx={p[0]} cy={p[1]} r={16} fill="#fffdf8" stroke={MATH_EXCLUDED} strokeWidth={5} opacity={ring} />;})}
					<PLabel p={m.p(0.15, 3.5)} text="y = tan(2x − π/3)" size={40} />
					<PLabel p={m.p(1.4, -3.4)} text="asymptotes: dashed" size={34} color="#4f4840" o={prog(f, k.keep, 12)} />
				</>}
			</StudioPlot>
			<BoxCard x={RX6} y={150} w={910} at={-30} size={46} title="task">Find ∫<V>2 sec²(<Slot>2x − π/3</Slot>)</V> dx</BoxCard>
			<BoxCard x={RX6} y={310} w={910} at={-30} out={k.inside - 4} size={42} title="the plan">1. the inside&apos;s rate<br />2. compare it with the number in front<br />3. keep the asymptotes</BoxCard>
			<Line x={RX6 + 10} y={300} at={k.inside} size={44}>inner rate: <V>d/dx</V> (2x − π/3) = <Bl>2</Bl></Line>
			<HandTag x={RX6 + 20} y={410} text="matches the 2 in front" at={k.matches} size={42} color={BLUE} />
			<AnswerBox x={RX6} y={440} at={k.answer} size={40}>∫<V>2 sec²(2x − π/3)</V> dx = tan(2x − π/3) <Cc>+ C</Cc></AnswerBox>
			<Line x={RX6 + 10} y={540} at={k.check} size={40}><V>d/dx</V> tan(2x − π/3) = <V>2 sec²(2x − π/3)</V> <Tick size={40} o={prog(f, k.check + 40, 10)} /></Line>
			<HandTag x={RX6 + 20} y={640} text="− π/3 is a slide: no new factor" at={k.slide} size={40} color={INK} />
			<Line x={RX6 + 10} y={660} at={k.where} size={40}>2x − π/3 = π/2 + kπ</Line>
			<Line x={RX6 + 10} y={730} at={k.thats} size={44}>x = 5π/12 + kπ/2</Line>
			<GapLine x={RX6} y={810} w={910} range={[-0.5, 3.0]} excluded={ASY6} ticks={[{value: -PI / 12, label: '−π/12'}, {value: (5 * PI) / 12, label: '5π/12'}, {value: (11 * PI) / 12, label: '11π/12'}]} at={k.there - 30} />
		</>
	);
};

// ---------- 7. a matched inside ----------
const RX7 = 960;
export const S07: React.FC = () => {
	const f = useCurrentFrame();
	const k = K7;
	const ans = prog(f, k.C, 12);
	return (
		<>
			<SceneHeading text="A matched inside" at={4} size={56} />
			<MiniPlot x={30} y={150} w={880} h={810} win={{x: [-2.2, 2.2], y: [-4.6, 4.6]}} xTicks={[-2, -1, 1, 2]} yTicks={[-4, -2, 2, 4]}
				curves={[{fn: x => -2 * x * Math.sin(x * x + 1), from: -2.2, to: 2.2, color: VIOLET}, {fn: x => Math.cos(x * x + 1), from: -2.2, to: 2.2, color: INK, o: ans}]}>
				{m => <>
					<PLabel p={m.p(-2.1, 4.2)} text="integrand −2x sin(x² + 1)" color={VIOLET} size={36} />
					<PLabel p={m.p(-2.1, -3.9)} text="cos(x² + 1): its gradient is the integrand" size={34} o={ans} />
				</>}
			</MiniPlot>
			<BoxCard x={RX7} y={150} w={930} at={-30} size={48} title="task">Find ∫<V>−<Bl>2x</Bl> sin(<Slot>x² + 1</Slot>)</V> dx</BoxCard>
			<BoxCard x={RX7} y={310} w={930} at={-30} out={k.inside - 4} size={42} title="look for">the inside, and its derivative out the front</BoxCard>
			<Line x={RX7 + 10} y={300} at={k.inside} size={44}>inside <Slot>x² + 1</Slot>:  <V>d/dx</V> = <Bl>2x</Bl></Line>
			<HandTag x={RX7 + 560} y={400} text="out the front" at={k.front} size={40} color={BLUE} />
			<BoxCard x={RX7} y={420} w={930} at={-30} out={k.minus - 4} size={40} title="the chain rule in reverse">(inside)′ × f(inside)  integrates to  F(inside) <Cc>+ C</Cc></BoxCard>
			<Chip x={RX7} y={800} at={-30} out={k.cos - 4} size={38} color={GREY}>from d06: <V>d/dx</V> cos u = −sin u × u′</Chip>
			<Line x={RX7 + 10} y={420} at={k.minus} size={40}>−2x sin(x² + 1) = <Bl>2x</Bl> × (−sin(x² + 1))</Line>
			<HandTag x={RX7 + 20} y={530} text="−sin u is the derivative of cos u" at={k.minus + 30} size={36} color={GREY} />
			<AnswerBox x={RX7} y={560} at={k.answer + 30} size={40}>∫<V>−2x sin(x² + 1)</V> dx = cos(x² + 1) <Cc>+ C</Cc></AnswerBox>
			<Line x={RX7 + 10} y={670} at={k.diff} size={40}><V>d/dx</V> cos(x² + 1) = −sin(x² + 1) × <Bl>2x</Bl> <Tick size={40} o={prog(f, k.diff + 60, 10)} /></Line>
			<HandTag x={RX7 + 20} y={770} text="the inner derivative has to be there" at={k.inner} size={40} color={BLUE} />
			<Chip x={RX7} y={800} at={k.cos} size={40} color={GREY}>∫cos(x²) dx:  no <Bl>2x</Bl> out the front</Chip>
			<HandTag x={RX7 + 20} y={920} text="not by these rules" at={k.cos + 40} size={40} color={INK} />
		</>
	);
};

// ---------- 8. the matched cos and sec² forms ----------
const RX8 = 1060;
export const S08: React.FC = () => {
	const f = useCurrentFrame();
	const k = K8;
	return (
		<>
			<SceneHeading text="Matched insides for cos and sec²" at={4} size={56} />
			<BoxCard x={60} y={150} w={960} at={-30} size={46} title="task 1">Find ∫<V><Bl>3x²</Bl> cos(<Slot>x³</Slot>)</V> dx</BoxCard>
			<BoxCard x={60} y={290} w={960} at={-30} out={k.inside - 4} size={40} title="look for">the inside, and its derivative out the front</BoxCard>
			<Line x={70} y={300} at={k.inside} size={40}>inside <Slot>x³</Slot>: <V>d/dx</V> = <Bl>3x²</Bl>, out the front</Line>
			<AnswerBox x={60} y={390} at={k.answer} size={42}>∫<V>3x² cos(x³)</V> dx = sin(x³) <Cc>+ C</Cc></AnswerBox>
			<HandTag x={80} y={530} text="check: d/dx sin(x³) = cos(x³) × 3x²" at={k.C1 + 10} size={36} color={GREY} />
			<BoxCard x={60} y={720} w={960} at={-30} out={k.harder - 4} size={42} title="then">differentiate back: the answer&apos;s derivative must give the integrand</BoxCard>
			<BoxCard x={60} y={420} w={960} at={-30} out={k.answer - 4} size={42} title="the pattern">f(inside) × (inside)′  integrates to  F(inside) <Cc>+ C</Cc></BoxCard>
			<Chip x={60} y={600} at={-30} out={k.harder - 4} size={40} color={GREY}>from d06: <V>d/dx</V> sin u = cos u × u′,  <V>d/dx</V> tan u = sec² u × u′</Chip>
			<BoxCard x={60} y={570} w={960} at={k.harder} size={46} title="task 2">Find ∫<V><Bl>cos x</Bl> sec²(<Slot>sin x</Slot>)</V> dx</BoxCard>
			<Line x={70} y={710} at={k.inside2} size={40}>inside <Slot>sin x</Slot>: <V>d/dx</V> = <Bl>cos x</Bl>, out the front</Line>
			<AnswerBox x={60} y={790} at={k.answer2} size={42}>∫<V>cos x sec²(sin x)</V> dx = tan(sin x) <Cc>+ C</Cc></AnswerBox>
			<Chip x={60} y={895} at={k.never} size={38} color={GREY}>valid for all real x</Chip>
			<MiniPlot x={RX8} y={150} w={830} h={810} win={{x: [-1.35, 1.35], y: [-3.4, 2.6]}} xTicks={[-1, 1]} yTicks={[-2, 2]} out={k.harder - 4}
				curves={[{fn: x => 3 * x * x * Math.cos(x ** 3), from: -1.6, to: 1.6, color: VIOLET}, {fn: x => Math.sin(x ** 3), from: -1.6, to: 1.6, color: INK, o: prog(f, k.answer, 12)}]}>
				{m => <>
					<PLabel p={m.p(-1.3, 2.3)} text="integrand 3x² cos(x³)" color={VIOLET} size={36} />
					<PLabel p={m.p(-1.3, -2.9)} text="sin(x³)" size={38} o={prog(f, k.answer, 12)} />
				</>}
			</MiniPlot>
			<MiniPlot x={RX8} y={150} w={830} h={810} win={{x: [-PI, PI], y: [-2.5, 2.5]}} xTicks={[-2, -1, 1, 2]} yTicks={[-2, -1, 1, 2]} at={k.harder} out={k.what - 4}
				curves={[{fn: x => Math.cos(x) / Math.cos(Math.sin(x)) ** 2, from: -PI, to: PI, color: VIOLET}, {fn: x => Math.tan(Math.sin(x)), from: -PI, to: PI, color: INK, o: prog(f, k.C2, 12)}]}>
				{m => <>
					<PLabel p={m.p(-3.0, 2.25)} text="integrand cos x sec²(sin x)" color={VIOLET} size={34} />
					<PLabel p={m.p(0.3, -2.1)} text="tan(sin x)" size={38} o={prog(f, k.C2, 12)} />
				</>}
			</MiniPlot>
			<StudioPlot x={RX8} y={150} width={830} height={810} window={{x: [-0.3, 2 * PI + 0.3], y: [-2.2, 2.2]}} xTicks={[{value: PI, label: 'π'}, {value: 2 * PI, label: '2π'}]} yTicks={[{value: -1, label: '−1'}, {value: 1, label: '1'}, {value: PI / 2, label: 'π/2'}]} at={k.what}>
				{m => {const band = prog(f, k.but, 12); const a = m.p(-0.3, 1), b = m.p(2 * PI + 0.3, -1); const u1 = m.p(-0.3, PI / 2), u2 = m.p(2 * PI + 0.3, PI / 2), d1 = m.p(-0.3, -PI / 2); return <>
					<rect x={a[0]} y={a[1]} width={b[0] - a[0]} height={b[1] - a[1]} fill="#dceaf7" opacity={0.8 * band} />
					<line x1={a[0]} x2={b[0]} y1={a[1]} y2={a[1]} stroke="#8a8378" strokeWidth={3} strokeDasharray="10 9" />
					<line x1={a[0]} x2={b[0]} y1={b[1]} y2={b[1]} stroke="#8a8378" strokeWidth={3} strokeDasharray="10 9" />
					<line x1={u1[0]} x2={u2[0]} y1={u1[1]} y2={u1[1]} stroke={RED} strokeWidth={4} strokeDasharray="14 10" />
					<line x1={d1[0]} x2={u2[0]} y1={d1[1]} y2={d1[1]} stroke={RED} strokeWidth={4} strokeDasharray="14 10" />
					<g clipPath={m.clip}><path d={fnPath(m, Math.sin, -0.3, 2 * PI + 0.3)} stroke={INK} strokeWidth={6.5} fill="none" /></g>
					<PLabel p={m.p(0.2, PI / 2 + 0.12)} text="tan's inside must avoid π/2 ≈ 1.57" color={RED} size={34} />
					<PLabel p={m.p(2.4, 0.2)} text="inside stays in [−1, 1]" color={BLUE} size={40} hand o={band} />
					<PLabel p={m.p(3.6, -0.75)} text="sin x" size={38} />
				</>;}}
			</StudioPlot>
		</>
	);
};
