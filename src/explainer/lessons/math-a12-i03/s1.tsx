// Scenes 1 to 4a: the hook (i02's ∫e^(3x) frame, then the phone charging beside live rate and battery graphs),
// eˣ as its own primitive (gradient dots landing on the curve itself, then a slide by C), e^(3x) (the tangent
// triangle: gradient three times the height; then ⅓e^(3x) whose gradient dots land on e^(3x)), any linear
// exponent (with the sign check on e^(−x)), and the phone's primitive with its minus sign.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {INK, prog} from '../../kit';
import {FrameSvg, FunctionSimulator, HandTag, InnerSlot, MarkSpan, SceneHeading, kf, smooth, vis} from '../../math/studio';
import {I02FinalFrame} from '../math-a12-i02/s3';
import {K1, K2, K3, K4, K4A} from './cuemap';
import {AMB, AnswerBox, BLUE, Bl, BoxCard, Cc, ChargeBoard, ChargeGraph, Chip, Ex, Frac, GREY, Line, MiniPlot, PLabel, PhoneRig, Tick, V, VIOLET} from './parts';

const HEAD1 = 'Exponential primitives: divide by the inner rate';
const CUT = 12;
const R05 = () => <Ex><InnerSlot>−0.5t</InnerSlot></Ex>;

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const f = useCurrentFrame();
	const k = K1;
	if (f < CUT) return <I02FinalFrame />;
	const t = kf(f, [[k.hour, 0], [k.hour + 96, 8]]);
	const sw = prog(f, k.phone - 10, 16);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}><I02FinalFrame /></div> : null}
			{f >= 30 ? <div style={{position: 'absolute', inset: 0, background: 'transparent'}}><SceneHeading text={HEAD1} at={30} size={56} /></div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<PhoneRig x={50} y={300} w={340} t={t} />
				<Line x={430} y={170} at={k.phone} size={44}>∫<V><Ex><InnerSlot>3x</InnerSlot></Ex></V> dx</Line>
				<ChargeBoard x={430} y={240} width={570} t={t} ratioGlow={[k.hour + 100, 99999]} />
				<HandTag x={980} y={640} text="half of what's left" at={k.hour + 100} size={38} color={BLUE} anchor="end" />
				<Line x={430} y={680} at={k.rate} size={44}><V>rate = 30<R05 /></V></Line>
				<HandTag x={430} y={790} text="x is in the exponent" at={k.exponent} size={42} color={INK} />
				<Line x={430} y={830} at={k.guess} size={42}>guess <V><Ex>3x</Ex></V>:  <V>d/dx</V> = <Bl>3</Bl><V><Ex>3x</Ex></V></Line>
				<HandTag x={430} y={940} text="3 times too big" at={k.big} size={44} color={BLUE} />
				<Chip x={1260} y={150} at={k.base} size={44} color={AMB}>and 2<span style={{fontSize: '0.64em', position: 'relative', top: '-0.8em'}}>x</span>?</Chip>
				<ChargeGraph x={1030} y={150} w={860} h={390} t={t} kind="rate" />
				<ChargeGraph x={1030} y={560} w={860} h={400} t={t} kind="batt" />
			</div> : null}
		</>
	);
};

// ---------- 2. eˣ is its own primitive ----------
const EXP = {f: (u: number) => Math.exp(u), df: (u: number) => Math.exp(u)};
const RX = 1080;
export const S02: React.FC = () => {
	const f = useCurrentFrame();
	const k = K2;
	const x = kf(f, [[k.height, -1.6], [k.C - 30, 1.6]]);
	const sl = smooth(prog(f, k.slide, 40)) * 3;
	return (
		<>
			<SceneHeading text="eˣ is its own primitive" at={4} size={56} />
			<FunctionSimulator x={30} y={150} width={1000} height={820} window={{x: [-2, 2], y: [-1, 9]}} family={EXP} timeline={[{frame: 0, x}]} color={INK} at={-30}
				xTicks={[-2, -1, 1, 2]} yTicks={[2, 4, 6, 8]} point={{at: k.height}} tangent={{at: k.height, halfLength: 110}}
				gradientDots={{at: k.height, xs: [-1.5, -1, -0.5, 0, 0.5, 1, 1.5]}}
				readout={{x: RX, y: 260, width: 780, at: k.height, inline: true, rows: [{label: 'height', value: s => s.Y, digits: 3}, {label: 'gradient', value: s => s.slope, digits: 3, role: 'gradient'}]}}
				curves={[...[-1, 1, 2].map(c => ({fn: (X: number) => Math.exp(X) + c, at: k.there, color: '#b9b0a2', dash: '10 10', width: 4})), {fn: (X: number) => Math.exp(X) + sl, at: k.slide, color: INK, width: 5}]}
				overlay={g => {
					const so = prog(f, k.slide + 40, 12);
					const stub = (c: number) => {const p = g.toFrame(0, 1 + c); const hl = 70, vx = 1, vy = -1 * (g.toFrame(0, 1)[1] - g.toFrame(0, 2)[1]) / (g.toFrame(1, 0)[0] - g.toFrame(0, 0)[0]); const l = Math.hypot(vx, vy); return <line key={c} x1={p[0] - (vx / l) * hl} y1={p[1] - (vy / l) * hl} x2={p[0] + (vx / l) * hl} y2={p[1] + (vy / l) * hl} stroke={VIOLET} strokeWidth={7} strokeLinecap="round" opacity={so} />;};
					return <FrameSvg>
						{stub(0)}{stub(sl)}
						<PLabel p={g.toFrame(0.15, 1 + sl)} dx={30} dy={-20} text="eˣ + 3" size={40} o={prog(f, k.slide + 30, 12)} />
						<PLabel p={g.toFrame(-1.9, 7.6)} text="dots: the gradient of eˣ" color={VIOLET} size={36} o={prog(f, k.height + 20, 12)} />
					</FrameSvg>;
				}} />
			<Line x={RX} y={150} at={-30} size={52}><V>d/dx</V> eˣ = eˣ</Line>
			<BoxCard x={RX} y={600} w={780} at={k.start} out={k.C - 6} size={52}>so ∫eˣ dx = ?</BoxCard>
			<HandTag x={RX + 20} y={500} text="gradient = height" at={k.height + 30} size={50} color={VIOLET} />
			<AnswerBox x={RX} y={560} at={k.C} size={56}>∫eˣ dx = eˣ <Cc>+ C</Cc></AnswerBox>
			<BoxCard x={RX} y={700} w={780} at={k.slide} size={42}>slide up by 3: gradient still eˣ at every x</BoxCard>
			<HandTag x={RX + 20} y={890} text="so the + C stays" at={k.there - 20} size={46} color={AMB} />
		</>
	);
};

// ---------- 3. e^(3x): the gradient is three times the height ----------
const E3 = {f: (u: number) => Math.exp(3 * u), df: (u: number) => 3 * Math.exp(3 * u)};
const E3T = {f: (u: number) => Math.exp(3 * u) / 3, df: (u: number) => Math.exp(3 * u)};
const W3 = {x: [-1.2, 0.78] as [number, number], y: [-0.6, 9] as [number, number]};
export const S03: React.FC = () => {
	const f = useCurrentFrame();
	const k = K3;
	const st2 = f >= k.third;
	const x1 = kf(f, [[k.every, 0], [k.every + 40, -0.5], [k.every + 90, 0.4], [k.divide - 10, 0]]);
	const x2 = kf(f, [[k.third, 0], [k.watch, -1.1], [k.lands + 20, 0.72]]);
	const sw = prog(f, k.third, 14);
	return (
		<>
			<SceneHeading text="e³ˣ: the gradient is three times the height" at={4} size={56} />
			{!st2 || sw < 1 ? <div style={{opacity: 1 - sw}}>
				<FunctionSimulator x={30} y={150} width={1000} height={820} window={W3} family={E3} timeline={[{frame: 0, x: x1}]} color={INK} at={-30}
					xTicks={[-1, -0.5, 0.5]} yTicks={[2, 4, 6, 8]} point={{at: k.graph}} tangent={{at: k.graph, halfLength: 120}} triangle={{run: 1 / 3, at: k.graph + 10, out: k.every}}
					readout={{x: RX, y: 260, width: 780, at: k.graph, inline: true, rows: [{label: 'height', value: s => s.Y, digits: 2}, {label: 'gradient', value: s => s.slope, digits: 2, role: 'gradient'}, {label: 'gradient ÷ height', value: s => s.slope / s.Y, digits: 0, role: 'a'}]}} />
			</div> : null}
			{st2 ? <div style={{opacity: sw}}>
				<FunctionSimulator x={30} y={150} width={1000} height={820} window={W3} family={E3T} timeline={[{frame: 0, x: x2}]} color={INK} at={-30}
					xTicks={[-1, -0.5, 0.5]} yTicks={[2, 4, 6, 8]} point={{at: k.watch}} tangent={{at: k.watch, halfLength: 110}}
					gradientDots={{at: k.watch, every: 4, target: {fn: X => Math.exp(3 * X), at: -30, solidAt: k.lands + 20}}}
					readout={{x: RX, y: 260, width: 780, at: -30, inline: true, rows: [{label: 'gradient of ⅓e³ˣ', value: s => s.slope, digits: 2, role: 'gradient'}, {label: 'e³ˣ here', value: s => 3 * s.Y, digits: 2}]}}
					overlay={g => <FrameSvg>
						<PLabel p={g.toFrame(0.05, 7.6)} text="e³ˣ (dashed)" color={VIOLET} size={38} />
						<PLabel p={g.toFrame(0.15, 1.2)} text="⅓e³ˣ" size={40} />
					</FrameSvg>} />
			</div> : null}
			<HandTag x={260} y={300} text="run ⅓, rise 1: gradient 3" at={k.graph + 30} out={k.every} size={44} color={VIOLET} />
			<Chip x={RX} y={150} at={-30} size={44} color={GREY}>d01: <V>d/dx</V> e<span style={{fontSize: '0.64em', position: 'relative', top: '-0.8em'}}>ax + b</span> = <Bl>a</Bl>e<span style={{fontSize: '0.64em', position: 'relative', top: '-0.8em'}}>ax + b</span></Chip>
			<Line x={RX} y={520} at={k.chain} size={52}><V>d/dx</V> e³ˣ = <Bl>3</Bl>e³ˣ</Line>
			<HandTag x={RX + 20} y={640} text="everywhere: gradient = 3 × height" at={k.every} out={k.third} size={44} color={BLUE} />
			<AnswerBox x={RX} y={640} at={k.divide} size={56}>∫e³ˣ dx = <Frac n="1" d={<Bl>3</Bl>} />e³ˣ <Cc>+ C</Cc></AnswerBox>
			<Line x={RX} y={790} at={k.lands} size={44}><V>d/dx</V> <Frac n="1" d="3" />e³ˣ = e³ˣ  <Tick size={44} o={prog(f, k.lands + 20, 10)} /></Line>
			<HandTag x={RX + 20} y={920} text="its gradient lands on e³ˣ" at={k.lands + 10} size={44} color={VIOLET} />
		</>
	);
};

// ---------- 4. any linear exponent ----------
const AXB = () => <InnerSlot>ax + b</InnerSlot>;
export const S04: React.FC = () => {
	const f = useCurrentFrame();
	const k = K4;
	const mo = prog(f, k.minus, 14);
	return (
		<>
			<SceneHeading text="Any linear exponent" at={4} size={56} />
			<Line x={96} y={160} at={k.diff} size={52}><V>d/dx</V> <Frac n="1" d={<Bl>a</Bl>} /><Ex><AXB /></Ex> = <Frac n="1" d={<Bl>a</Bl>} /> · <Bl g={vis(f, k.diff + 20, k.integral)}>a</Bl> · <Ex>ax + b</Ex> = <Ex>ax + b</Ex></Line>
			<HandTag x={1400} y={210} text="inner rate" at={k.diff + 20} size={44} color={BLUE} />
			<BoxCard x={96} y={300} at={k.integral} size={62} border={INK} bw={5}>∫<V><Ex><AXB /></Ex></V> dx = <Frac n="1" d={<Bl>a</Bl>} /><Ex>ax + b</Ex> <Cc>+ C</Cc></BoxCard>
			<Chip x={96} y={480} at={k.needs} size={42} color={GREY}>a ≠ 0</Chip>
			<HandTag x={300} y={510} text="a = 0: eᵇ is a constant, not exponential" at={k.constant} size={42} color={INK} />
			<BoxCard x={96} y={620} w={1040} at={k.needs} out={k.two - 4} size={46} title="examples">∫2e³ˣ dx   and   ∫e⁻ˣ dx: divide by 3, and by −1</BoxCard>
			<Line x={96} y={600} at={k.two} size={46}>∫2e³ˣ dx = 2 · <Frac n="1" d={<Bl>3</Bl>} />e³ˣ <Cc>+ C</Cc> = <Frac n="2" d="3" />e³ˣ <Cc>+ C</Cc></Line>
			<Line x={96} y={710} at={k.minus} size={46}>∫e<span style={{fontSize: '0.64em', position: 'relative', top: '-0.8em'}}>−x</span> dx = <Frac n="1" d={<Bl>−1</Bl>} />e<span style={{fontSize: '0.64em', position: 'relative', top: '-0.8em'}}>−x</span> <Cc>+ C</Cc> = −e<span style={{fontSize: '0.64em', position: 'relative', top: '-0.8em'}}>−x</span> <Cc>+ C</Cc></Line>
			<Line x={96} y={830} at={k.check} size={44}><V>d/dx</V> (<MarkSpan kind="circle" at={k.check + 10} color={RED_}>−</MarkSpan>e<span style={{fontSize: '0.64em', position: 'relative', top: '-0.8em'}}>−x</span>) = <MarkSpan kind="circle" at={k.check + 16} color={RED_}>−</MarkSpan>(−1)e<span style={{fontSize: '0.64em', position: 'relative', top: '-0.8em'}}>−x</span> = e<span style={{fontSize: '0.64em', position: 'relative', top: '-0.8em'}}>−x</span>  <Tick size={44} o={prog(f, k.back, 10)} /></Line>
			<MiniPlot x={1200} y={460} w={690} h={500} win={{x: [-1.6, 2.2], y: [-5.2, 5.2]}} xTicks={[-1, 1, 2]} yTicks={[-4, -2, 2, 4]}
				curves={[{fn: x => Math.exp(-x), from: -1.6, to: 2.2, color: VIOLET}, {fn: x => -Math.exp(-x), from: -1.6, to: 2.2, color: INK, o: mo}]}>
				{m => <>
					<PLabel p={m.p(-1.5, 4.4)} text="e⁻ˣ (integrand)" color={VIOLET} size={34} />
					<PLabel p={m.p(0.1, -3.6)} text="−e⁻ˣ: rising, gradient e⁻ˣ" size={34} o={mo} />
				</>}
			</MiniPlot>
		</>
	);
};
const RED_ = '#b8322a';

// ---------- 4a. the phone's primitive ----------
export const S04A: React.FC = () => {
	const f = useCurrentFrame();
	const k = K4A;
	const t = kf(f, [[k.rises, 0], [k.rises + 56, 8]]);
	const sweep = kf(f, [[k.minus, 0], [k.yes + 30, 8]]);
	return (
		<>
			<SceneHeading text="The phone's primitive" at={4} size={56} />
			<PhoneRig x={40} y={330} w={320} t={t} />
			<Line x={400} y={160} at={k.now} size={44}>∫<V>30<R05 /></V> dt = 30 · <Frac n="1" d={<Bl>−0.5</Bl>} /><Ex>−0.5t</Ex> <Cc>+ C</Cc></Line>
			<HandTag x={420} y={300} text="÷ (−½) = × (−2)" at={k.divide} size={48} color={BLUE} />
			<Line x={400} y={340} at={k.level} size={56}>B = −60<Ex>−0.5t</Ex> <Cc>+ C</Cc></Line>
			<MiniPlot x={380} y={460} w={780} h={500} win={{x: [-0.5, 8.6], y: [-66, 8]}} xTicks={[2, 4, 6, 8]} yTicks={[-60, -40, -20]} xLabel="t (h)" yLabel="the minus term"
				curves={[{fn: u => -60 * Math.exp(-0.5 * u), from: 0, to: Math.max(0.01, sweep), color: INK, o: sweep > 0.01 ? 1 : 0}]}>
				{m => <PLabel p={m.p(1.6, -48)} text="minus, but rising" size={44} hand o={prog(f, k.yes, 12)} />}
			</MiniPlot>
			<ChargeGraph x={1190} y={150} w={700} h={500} t={t} kind="batt" />
			<HandTag x={1300} y={620} text="battery = that term + C: rising" at={k.rises} size={40} color={AMB} />
			<ChargeBoard x={1190} y={690} width={700} t={t} rows={['time', 'rate', 'batt']} />
		</>
	);
};
