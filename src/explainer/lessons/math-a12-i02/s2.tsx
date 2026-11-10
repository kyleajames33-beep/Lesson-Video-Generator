// Scenes 5 to 8: the linear-inside rule (proved by differentiating), the starter's answer (g01 board beside the
// jar, the clock running to 6 h, then the silent forgot-÷4 slip whose ghost level shoots over the rim), the
// matched pattern (gradient dots of the guess landing on the integrand), a missing number against a missing x
// (the failed guess's gradient peeling away), and the worked root example.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {CARD, Card, FrameSvg, FunctionSimulator, HandTag, InnerSlot, MarkSpan, MistakeCard, Pow, SceneHeading, WorkingRows, kf, vis} from '../../math/studio';
import {K5, K5A, K6, K7, K8} from './cuemap';
import {AMB, AnswerBox, BLUE, Bl, BoxCard, Cc, Chip, Frac, GREEN, GREY, Line, MiniPlot, PLabel, RED, Rt, StarterBoard, StarterGraph, StarterRise, Tick, V, VIOLET, dW7, slipRise} from './parts';

// ---------- 5. the rule for a linear inside ----------
export const S05: React.FC = () => {
	const f = useCurrentFrame();
	const k = K5;
	const AXB = () => <InnerSlot>ax + b</InnerSlot>;
	return (
		<>
			<SceneHeading text="The rule for a linear inside" at={4} size={56} />
			<Chip x={96} y={150} at={k.any} size={44}>any bracket (<AXB />), a and b constants</Chip>
			<Line x={96} y={280} at={k.diffing} size={56}><V>d/dx</V> (<AXB />)<Pow>n + 1</Pow> = (n + 1)(<AXB />)<Pow>n</Pow> · <Bl g={vis(f, k.a, k.integral)}>a</Bl></Line>
			<HandTag x={1290} y={300} text="inner rate" at={k.a} size={46} color={BLUE} />
			<HandTag x={1290} y={360} text="so divide by both" at={k.so} size={46} color={INK} />
			<BoxCard x={96} y={420} at={k.integral} size={64} border={INK} bw={5}>∫(<AXB />)<Pow>n</Pow> dx = <Frac n={<>(ax + b)<Pow>n + 1</Pow></>} d={<><Bl>a</Bl>(n + 1)</>} scale={0.82} /> <Cc>+ C</Cc></BoxCard>
			<Chip x={1220} y={470} at={k.one} size={40} color={GREY}>a ≠ 0, n ≠ −1, where the power is defined</Chip>
			<Line x={96} y={640} at={k.one + 20} size={40}>check: <V>d/dx</V> gives <Frac n={<>(n + 1)(ax + b)<Pow>n</Pow> · <Bl>a</Bl></>} d={<><Bl>a</Bl>(n + 1)</>} /> = (ax + b)<Pow>n</Pow>  <Tick size={40} o={prog(f, k.one + 50, 10)} /></Line>
			<BoxCard x={96} y={800} at={-30} size={44} title="scene 3">(2x + 1)²:  ÷ 3 (new power) and ÷ <Bl>2</Bl> (inner rate)</BoxCard>
			<BoxCard x={1080} y={800} at={k.integral} size={44} title="next">the starter: 3(4t + 1)<Pow>−½</Pow></BoxCard>
		</>
	);
};

// ---------- 5a. the starter's answer ----------
const JAR5 = {x: 40, y: 340, w: 330};
const MX = 490;
export const S05A: React.FC = () => {
	const f = useCurrentFrame();
	const k = K5A;
	const t = kf(f, [[k.after, 0], [k.cm + 10, 6]]);
	const slipAt = k.cm + 34;
	const gT = kf(f, [[slipAt + 10, 6 * 0.0], [slipAt + 70, 6]]);
	const R41 = () => <InnerSlot>4t + 1</InnerSlot>;
	return (
		<>
			<SceneHeading text="How far does the starter rise in 6 hours?" at={4} size={56} />
			<StarterRise x={JAR5.x} y={JAR5.y} w={JAR5.w} t={t} ghost={{cm: 5 + slipRise(gT), o: vis(f, slipAt + 6, undefined, 10), label: '24 cm: over the top!'}} />
			<Line x={MX} y={150} at={-30} size={44}><V>rate = <Frac n="3" d={<Rt>4t + 1</Rt>} /></V> cm per hour</Line>
			<Card x={MX} y={232} w={800} at={-30} pad="10px 26px 12px">
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: '#4f4840'}}>GIVEN</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, whiteSpace: 'pre'}}>
					<MarkSpan kind="underline" at={k.at0} color={AMB}>risen <Cc>0</Cc> cm at t = 0</MarkSpan>      <MarkSpan kind="underline" at={k.after} color={INK}>t = 6 h</MarkSpan>
				</div>
			</Card>
			<Line x={MX} y={400} at={-30} out={k.half1 - 4} size={52}>risen = ∫ <V><Frac n="3" d={<Rt>4t + 1</Rt>} /></V> dt = ?</Line>
			<Card x={MX} y={530} w={830} at={-30} out={k.half1 - 4} pad="16px 28px 18px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: INK}}>the plan</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 42, color: INK, lineHeight: 1.45}}>1. rewrite the root as a power<br />2. ÷ the new power and ÷ the <Bl>inner rate</Bl><br />3. use risen <Cc>0</Cc> at t = 0 to find <Cc>C</Cc></div>
			</Card>
			<WorkingRows x={MX} y={390} w={830} size={46} oldSize={34} gap={6} rows={[
				{left: <V><Frac n="3" d={<Rt><R41 /></Rt>} /></V>, right: <V>3(<R41 />)<Pow>−½</Pow></V>, at: k.half1},
				{left: 'risen', right: <><Frac n={<>3(4t + 1)<Pow>½</Pow></>} d={<>½ · <Bl>4</Bl></>} /> <Cc>+ C</Cc></>, at: k.then},
				{right: <><Frac n="3" d="2" /><Rt>4t + 1</Rt> <Cc>+ C</Cc></>, at: k.three, keep: true},
				{left: <Cc>0</Cc>, right: <><Frac n="3" d="2" /><Rt>1</Rt> <Cc>+ C</Cc>, so <Cc>C = −<Frac n="3" d="2" /></Cc></>, at: k.at0 + 30},
				{left: 'H(6)', right: <><Frac n="3" d="2" />(5) − <Frac n="3" d="2" /> = 6</>, at: k.so},
			]} />
			<HandTag x={1150} y={430} text="rewrite as a power" at={k.half1 + 10} out={k.then} size={38} color={INK} />
			<HandTag x={1150} y={500} text="÷ new power, ÷ inner rate" at={k.then + 6} out={k.at0} size={38} color={BLUE} />
			<AnswerBox x={MX} y={760} at={k.cm} size={44}>risen 6 cm after 6 hours</AnswerBox>
			<Line x={MX} y={850} at={k.cm + 14} out={slipAt - 4} size={36}><V>d/dx</V>: <Frac n="3" d="2" /> · ½ · <Bl>4</Bl>(4t + 1)<Pow>−½</Pow> = <V><Frac n="3" d={<Rt>4t + 1</Rt>} /></V>  <Tick size={38} o={prog(f, k.cm + 26, 8)} /></Line>
			<MistakeCard x={MX} y={840} w={830} at={slipAt} size={38} wrong={<>forgot ÷ <Bl>4</Bl>: 6<Rt>4t + 1</Rt> − 6 = 24 cm</>} caption="over the top of the jar" />
			<StarterBoard x={1350} y={140} width={530} t={t} size={48} />
			<StarterGraph x={1330} y={430} w={560} h={520} t={t} kind="rise" ringEnd={prog(f, k.cm, 12)} />
		</>
	);
};

// ---------- 6. when the inside's derivative is already there ----------
const RX6 = 920;
const M6 = {f: (u: number) => (u * u + 1) ** 4 / 4, df: (u: number) => 2 * u * (u * u + 1) ** 3};
export const S06: React.FC = () => {
	const f = useCurrentFrame();
	const k = K6;
	const x = kf(f, [[k.diff, -0.7], [k.integrand - 10, 0.7]]);
	return (
		<>
			<SceneHeading text="When the inside's derivative is there" at={4} size={56} />
			<FunctionSimulator x={30} y={150} width={850} height={820} window={{x: [-0.78, 0.78], y: [-5, 5.4]}} family={M6} timeline={[{frame: 0, x}]} color={INK} at={-30}
				xTicks={[-0.5, 0.5]} yTicks={[-4, -2, 2, 4]} point={{at: k.diff}} tangent={{at: k.diff, halfLength: 90}}
				gradientDots={{at: k.diff, every: 4, target: {fn: X => 2 * X * (X * X + 1) ** 3, at: -30, solidAt: k.integrand}}}
				overlay={g => <FrameSvg>
					<PLabel p={g.toFrame(-0.74, 2.3)} text="guess (x² + 1)⁴/4" size={38} />
					<PLabel p={g.toFrame(0.05, -3.4)} text="integrand 2x(x² + 1)³" color={VIOLET} size={38} />
				</FrameSvg>} />
			<HandTag x={140} y={330} text="its gradient lands on the integrand" at={k.integrand} size={40} color={VIOLET} />
			<Line x={RX6} y={140} at={-30} size={60}>∫ <V><MarkSpan kind="circle" at={k.outside} color={BLUE} width={5}>2x</MarkSpan>(<InnerSlot>x² + 1</InnerSlot>)³</V> dx</Line>
			<HandTag x={RX6 + 420} y={290} text="inside" at={k.inside} size={40} color={GREY} />
			<Line x={RX6} y={300} at={k.inside + 30} size={40}><V>d/dx</V> (x² + 1) = <Bl>2x</Bl>: already outside</Line>
			<WorkingRows x={RX6} y={390} w={960} size={58} oldSize={44} gap={8} rows={[
				{left: 'guess', right: <Frac n="(x² + 1)⁴" d="4" />, at: k.guess},
				{left: <V>d/dx</V>, right: <Frac n={<>4(x² + 1)³ · <Bl>2x</Bl></>} d="4" />, at: k.diff},
				{right: <>2x(x² + 1)³  <Tick size={48} o={prog(f, k.integrand, 10)} /></>, at: k.that, keep: true},
			]} />
			<BoxCard x={RX6} y={720} at={k.general} size={46} border={INK} bw={5}>∫u<Pow>n</Pow> <Bl><Frac n="du" d="dx" /></Bl> dx = <Frac n={<>u<Pow>n + 1</Pow></>} d="n + 1" /> <Cc>+ C</Cc>,  n ≠ −1</BoxCard>
			<Line x={RX6} y={880} at={k.one} size={40}>∫<Bl>f′(x)</Bl>[f(x)]<Pow>n</Pow> dx = <Frac n={<>[f(x)]<Pow>n + 1</Pow></>} d="n + 1" /> <Cc>+ C</Cc></Line>
		</>
	);
};

// ---------- 7. a missing number, or a missing x ----------
const RX7 = 920;
const G7 = {x: 30, y: 270, w: 850, h: 700};
export const S07: React.FC = () => {
	const f = useCurrentFrame();
	const k = K7;
	const c2 = f >= k.but;
	const sw = prog(f, k.but, 14);
	const fo = prog(f, k.check, 14);
	return (
		<>
			<SceneHeading text="A missing number, or a missing x?" at={4} size={56} />
			<div style={{opacity: 1 - sw}}>{!c2 || sw < 1 ? <MiniPlot x={G7.x} y={G7.y} w={G7.w} h={G7.h} win={{x: [0.15, 1.28], y: [-4, 23]}} xTicks={[0.5, 1]} yTicks={[5, 10, 15, 20]}
				curves={[{fn: x => x * (x * x + 1) ** 3, from: 0.15, to: 1.28, color: VIOLET}, {fn: x => x * (x * x + 1) ** 3, from: 0.15, to: 1.28, color: INK, dash: '6 16', width: 6, o: prog(f, k.eight1, 14)}]}>
				{m => <>
					<PLabel p={m.p(0.2, 19)} text="integrand x(x² + 1)³" color={VIOLET} size={38} />
					<PLabel p={m.p(0.2, 15.5)} text="gradient of (x² + 1)⁴/8: the same" size={36} o={prog(f, k.eight1, 14)} />
				</>}
			</MiniPlot> : null}</div>
			{c2 ? <div style={{opacity: sw}}><MiniPlot x={G7.x} y={G7.y} w={G7.w} h={G7.h} win={{x: [0.15, 1.28], y: [-4, 23]}} xTicks={[0.5, 1]} yTicks={[5, 10, 15, 20]}
				curves={[{fn: x => (x * x + 1) ** 3, from: 0.15, to: 1.28, color: VIOLET}, {fn: dW7, from: 0.15, to: 1.28, color: RED, dash: '14 10', o: fo}]}>
				{m => {const a = m.p(1, 8), b = m.p(1, 6), z = m.p(1, -4); return <>
					<line x1={a[0]} x2={a[0]} y1={z[1]} y2={a[1]} stroke={GREY} strokeWidth={3} strokeDasharray="8 8" opacity={fo} />
					<circle cx={a[0]} cy={a[1]} r={12} fill={VIOLET} stroke={CARD} strokeWidth={4} opacity={fo} />
					<circle cx={b[0]} cy={b[1]} r={12} fill={RED} stroke={CARD} strokeWidth={4} opacity={fo} />
					<PLabel p={a} dx={-20} dy={-14} anchor="end" text="8" color={VIOLET} size={40} o={fo} />
					<PLabel p={b} dx={22} dy={30} text="6" color={RED} size={40} o={fo} />
					<PLabel p={m.p(0.2, 19)} text="integrand (x² + 1)³" color={VIOLET} size={38} />
					<PLabel p={m.p(0.2, 15.5)} text="gradient of (x² + 1)⁴/(8x)" color={RED} size={36} o={fo} />
				</>;}}
			</MiniPlot></div> : null}
			<HandTag x={480} y={720} text="peels away" at={k.check + 20} size={44} color={RED} />
			<BoxCard x={30} y={150} at={-30} size={40}>∫u<Pow>n</Pow> <Bl>u′</Bl> dx = u<Pow>n + 1</Pow>/(n + 1) <Cc>+ C</Cc>, n ≠ −1</BoxCard>
			{/* case 1: a missing number */}
			{f < k.but + 14 ? <div style={{opacity: 1 - prog(f, k.but, 14)}}>
				<Line x={RX7} y={170} at={k.integral} size={56}>∫ <V><MarkSpan kind="circle" at={k.here} color={BLUE}>x</MarkSpan>(<InnerSlot>x² + 1</InnerSlot>)³</V> dx</Line>
				<Line x={RX7} y={280} at={k.here} size={56}>= ½∫<V><Bl>2x</Bl>(x² + 1)³</V> dx</Line>
				<HandTag x={RX7 + 600} y={320} text="x = ½ · 2x" at={k.here + 10} size={46} color={BLUE} />
				<Line x={RX7} y={400} at={k.eight1} size={60}>= <Frac n="(x² + 1)⁴" d="8" /> <Cc>+ C</Cc></Line>
				<Line x={RX7} y={540} at={k.eight1 + 12} size={44}>check: <V>d/dx</V> <Frac n="(x² + 1)⁴" d="8" /> = <V>x(x² + 1)³</V>  <Tick size={44} o={prog(f, k.eight1 + 26, 10)} /></Line>
				<Chip x={RX7} y={680} at={k.missing - 14} size={42} color={GREEN}>missing number: fix it (∫kf dx = k∫f dx)</Chip>
				<HandTag x={RX7 + 20} y={840} text="a constant moves through the integral sign" at={k.missing + 30} size={42} color={INK} />
			</div> : null}
			{/* case 2: a missing x */}
			<Line x={RX7} y={160} at={k.but} size={36}>∫x(x² + 1)³ dx = (x² + 1)⁴/8 + C  <Tick size={36} /></Line>
			<Line x={RX7} y={250} at={k.but} size={60}>∫ <V><span style={{display: 'inline-block', width: 60, height: 60, verticalAlign: 'middle', border: `4px dashed ${GREY}`, borderRadius: 999}} />(<InnerSlot>x² + 1</InnerSlot>)³</V> dx</Line>
			<HandTag x={RX7 + 460} y={300} text="no 2x here" at={k.but + 20} size={46} color={GREY} />
			<Line x={RX7} y={390} at={k.two} size={50} color="#4f4840">guess  <Frac n="(x² + 1)⁴" d="8x" />  ?</Line>
			<HandTag x={RX7 + 450} y={440} text="2x isn't a constant" at={k.two + 20} size={44} color={RED} />
			<div style={{position: 'absolute', left: RX7, top: 540, opacity: prog(f, k.check, 12), display: 'flex', alignItems: 'center', gap: 16, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 42, color: INK}}>
				<svg width={52} height={52} viewBox="0 0 60 60"><DrawPath d="M10,10 L50,50 M50,10 L10,50" at={k.eight2} dur={10} color={RED} width={8} /></svg>
				at x = 1: <V>d/dx</V> guess = <span style={{color: RED}}>6</span>, but (x² + 1)³ = <V>8</V>
			</div>
			<Line x={RX7} y={650} at={k.instead} size={40} color="#4f4840" weight={700}>expand: ∫(x⁶ + 3x⁴ + 3x² + 1) dx</Line>
			<Line x={RX7} y={710} at={k.instead} size={40} color="#4f4840" weight={700}>= x⁷/7 + 3x⁵/5 + x³ + x + C</Line>
			<Chip x={RX7} y={800} at={k.instead + 10} size={44} color={RED}>missing x: use algebra</Chip>
		</>
	);
};

// ---------- 8. worked example: a root with its inside's derivative ----------
const RX8 = 920;
export const S08: React.FC = () => {
	const f = useCurrentFrame();
	const k = K8;
	const X24 = () => <InnerSlot>x² + 4</InnerSlot>;
	const ans = prog(f, k.C, 16);
	return (
		<>
			<SceneHeading text="Worked example: a root" at={4} size={56} />
			<Line x={30} y={170} at={-30} size={60}>Find ∫ <V><Frac n="x" d={<Rt>x² + 4</Rt>} /></V> dx</Line>
			<MiniPlot x={30} y={330} w={850} h={640} win={{x: [-4.2, 4.2], y: [-1.6, 5.2]}} xTicks={[-4, -2, 2, 4]} yTicks={[-1, 1, 2, 3, 4, 5]}
				curves={[{fn: x => x / Math.sqrt(x * x + 4), from: -4.2, to: 4.2, color: VIOLET}, {fn: x => Math.sqrt(x * x + 4), from: -4.2, to: 4.2, color: INK, o: ans}]}>
				{m => <>
					<PLabel p={m.p(1.2, -1.15)} text="integrand x/√(x² + 4)" color={VIOLET} size={36} />
					<PLabel p={m.p(-3.9, 4.75)} text="y = √(x² + 4)" size={38} o={ans} />
					<PLabel p={m.p(-1.8, 1.3)} text="its gradient is the violet curve" size={34} hand o={prog(f, k.exactly, 12)} />
				</>}
			</MiniPlot>
			<BoxCard x={RX8} y={150} at={-30} size={40}>∫u<Pow>n</Pow> <Bl>u′</Bl> dx = u<Pow>n + 1</Pow>/(n + 1) <Cc>+ C</Cc>, n ≠ −1</BoxCard>
			<Card x={RX8} y={260} w={960} at={-30} out={k.half1 - 4} pad="16px 28px 18px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: INK}}>the plan</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 42, color: INK, lineHeight: 1.45}}>1. rewrite the root as a power<br />2. find the inside and its derivative<br />3. a missing number? fix it</div>
			</Card>
			<WorkingRows x={RX8} y={250} w={960} size={56} oldSize={42} gap={10} rows={[
				{right: <>∫ <V>x(<X24 />)<Pow>−½</Pow></V> dx</>, at: k.half1},
				{right: <>½∫ <V><Bl>2x</Bl>(x² + 4)<Pow>−½</Pow></V> dx</>, at: k.number},
				{right: <>½ · <Frac n={<>(x² + 4)<Pow>½</Pow></>} d="½" /> <Cc>+ C</Cc></>, at: k.raising},
				{right: <><Rt>x² + 4</Rt> <Cc>+ C</Cc></>, at: k.C, answer: true},
			]} />
			<HandTag x={1560} y={300} text="1/√u = u^(−½)" at={k.half1 + 10} out={k.number} size={40} color="#4f4840" />
			<Line x={RX8} y={660} at={k.inside} size={42}>inside <InnerSlot>x² + 4</InnerSlot>:  <V>d/dx</V> = <Bl>2x</Bl></Line>
			<HandTag x={1560} y={400} text="x = ½ · 2x" at={k.number + 10} out={k.raising + 30} size={44} color={BLUE} />
			<HandTag x={1560} y={500} text="÷ ½ = × 2" at={k.raising + 30} out={k.C + 30} size={44} color="#4f4840" />
			<Chip x={RX8} y={750} at={k.x} size={40} color={GREY}>x² + 4 &gt; 0 for every real x</Chip>
			<Line x={RX8} y={860} at={k.diff} size={44}><V>d/dx</V> <Rt>x² + 4</Rt> = <V><Frac n="x" d={<Rt>x² + 4</Rt>} /></V>  <Tick size={44} o={prog(f, k.exactly, 10)} /></Line>
		</>
	);
};
