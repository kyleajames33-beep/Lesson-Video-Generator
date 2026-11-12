// Scenes 5 to 8: reversing the power rule (guess x³, three times too big, divide by three; the kit paired panel
// then traces the gradient of x³/3 onto x²; the general proof with the n + 1 cancelled), sums, multiples and the
// integral sign (a live sum of gradients, then the labelled notation), worked example 1 (term by term, one C, the
// derivative check) and worked example 2 (the family slides onto the point (1, 5) as C reaches 4).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, Card, CardTitle, EquationStrip, FrameSvg, HandTag, LiveReadoutBoard, MarkSpan, PairedDerivativePanel, ParameterSlider, PlusC, Pow, SceneHeading, StudioCancellation, StudioDerivativeCheck, StudioIntegralNotation, StudioPlot, TaskStrip, fnPath, kf, smooth, vis} from '../../math/studio';
import {K5, K6, K7, K8} from './cuemap';
import {AMB, AMB_INK, BoxCard, LabelArrow, Cc, Chip, Frac, GREEN, GREY, GREY_INK, Line, MiniPlot, Note, PLabel, Ring, SegRow, Tick, V, VIOLET, W1, W2, w1, w2} from './parts';

// ---------- 5. reversing the power rule ----------
const P5 = {x: 30, y: 150, w: 1000, top: 390, bottom: 380};
const WX5: [number, number] = [-2.2, 2.2];
const CUBE3 = {f: (u: number) => u ** 3 / 3, df: (u: number) => u * u};
const RX5 = 1080;
export const S05: React.FC = () => {
	const f = useCurrentFrame();
	const k = K5;
	const panelAt = k.raising + 26;
	const sweep0 = k.watch + 16, sweep1 = k.watch + 150;
	const tl = [{frame: 0, x: 1, yScale: 3}, {frame: k.divide, yScale: 3}, {frame: k.divide + 50, yScale: 1}, {frame: k.watch, x: 1}, {frame: sweep0, x: -2}, {frame: sweep1, x: 2}];
	const X = kf(f, [[k.watch, 1], [sweep0, -2], [sweep1, 2]]);
	const traceFrom = f < sweep0 ? X : -2;
	const bars = vis(f, k.big, k.watch - 6, 12);
	const yS = kf(f, [[k.divide, 3], [k.divide + 50, 1]]);
	const genOut = k.general - 6;
	return (
		<>
			<SceneHeading text="Reversing the power rule" at={4} size={56} />
			{/* before the guess: the target alone, and an empty top plot */}
			<MiniPlot x={P5.x} y={P5.y} w={P5.w} h={P5.top} win={{x: WX5, y: [-3, 3]}} xTicks={[-2, -1, 1, 2]} yTicks={[-2, 2]} yLabel="the guess" curves={[]} out={panelAt - 14}>
				{m => <PLabel p={m.p(0.25, 1.4)} text="?" size={110} hand />}
			</MiniPlot>
			<MiniPlot x={P5.x} y={P5.y + P5.top + 10} w={P5.w} h={P5.bottom} win={{x: WX5, y: [-0.5, 4.2]}} xTicks={[-2, -1, 1, 2]} yTicks={[1, 2, 3, 4]} yLabel="its gradient" curves={[{fn: x => x * x, from: -2.2, to: 2.2, color: INK, dash: '6 14', width: 5}]} out={panelAt - 14}>
				{m => <PLabel p={m.p(0.12, 3.55)} text="want: x²" size={36} />}
			</MiniPlot>
			{f >= panelAt - 14 ? <PairedDerivativePanel x={P5.x} y={P5.y} width={P5.w} heightTop={P5.top} heightBottom={P5.bottom} windowX={WX5} yTop={[-3, 3]} yBottom={[-0.5, 4.2]}
				family={CUBE3} timeline={tl} traceFrom={traceFrom} at={panelAt - 14} pointAt={k.but} tangentAt={k.but} topLabel="the guess" bottomLabel="its gradient"
				xTicks={[-2, -1, 1, 2]} yTopTicks={[-2, 2]} yBottomTicks={[1, 2, 3, 4]}
				overlay={(s, top, bottom) => {const a = bottom(1, 0), b = bottom(1, yS), c = bottom(1, 1); const tgt = Array.from({length: 89}, (_, i) => {const u = -2.2 + (4.4 * i) / 88; const p = bottom(u, Math.min(4.2, u * u)); return `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`;}).join(' '); const wl = bottom(0.12, 3.55); return <FrameSvg>
					<path d={tgt} stroke={INK} strokeWidth={5} strokeDasharray="6 14" fill="none" strokeLinecap="round" />
					<text x={wl[0]} y={wl[1]} opacity={1 - prog(f, sweep1 - 10, 10)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">want: x²</text>
					<g opacity={bars}>
						<line x1={a[0] + 18} x2={a[0] + 18} y1={a[1]} y2={b[1]} stroke={VIOLET} strokeWidth={7} />
						<line x1={a[0] - 18} x2={a[0] - 18} y1={a[1]} y2={c[1]} stroke="#4f4840" strokeWidth={7} />
						<text x={a[0] + 36} y={b[1] + 12} opacity={vis(f, k.big, k.divide - 2, 10)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: VIOLET}} stroke={CARD} strokeWidth={7} paintOrder="stroke">3 vs 1</text>
						<text x={a[0] + 36} y={c[1] - 14} opacity={prog(f, k.divide + 52, 10)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: VIOLET}} stroke={CARD} strokeWidth={7} paintOrder="stroke">1 = 1</text>
					</g>
					{(() => {const p = top(-1.9, ((-1.9) ** 3 / 3) * yS); return <text x={p[0] + 20} y={Math.min(p[1], top(0, -2.4)[1]) - 6} opacity={vis(f, k.raising + 30, k.watch - 10, 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{yS > 1.5 ? 'x³' : 'x³/3'}</text>;})()}
				</FrameSvg>;}} /> : null}
			<LiveReadoutBoard x={RX5} y={650} width={700} at={k.but + 20} out={genOut} inline size={48} labelSize={32} rows={[
				{label: 'x', value: X, digits: 1},
				{label: yS > 2 ? 'gradient of the guess x³' : 'gradient of x³/3', value: yS * X * X, digits: 2, role: 'gradient'},
				{label: 'height of x²', value: X * X, digits: 2},
			]} />
			<HandTag x={590} y={650} text="gradient of x³/3 = x²" at={sweep1} size={46} color={VIOLET} />
			{/* right column */}
			<Card x={RX5} y={140} w={800} at={k.diff} pad="10px 26px 12px">
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: GREY_INK, whiteSpace: 'pre'}}>differentiate: xⁿ → nxⁿ⁻¹</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 36, color: GREY_INK}}>multiply by the power, lower it by one</div>
			</Card>
			<BoxCard x={RX5} y={300} w={800} at={k.undo} size={42} border={INK} bw={3}>reverse: raise the power by one,<br />divide by the new power</BoxCard>
			{/* an example of the two directions, before the x² case */}
			{(() => {const o = vis(f, k.diff + 20, k.try - 6, 12); if (o <= 0.001) return null; const box = (x: number, c: string, txt: string) => <div style={{position: 'absolute', left: x, top: 560, width: 190, textAlign: 'center', background: CARD, border: `4px solid ${c}`, borderRadius: 18, boxShadow: CARD_SHADOW, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 60, color: c, padding: '4px 0'}}>{txt}</div>; return <div style={{position: 'absolute', inset: 0, opacity: o}}>
				{box(RX5, INK, 'x⁴')}{box(RX5 + 600, VIOLET, '4x³')}
			</div>;})()}
			{f < k.try + 6 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, k.try - 6, 12)}}>
				<LabelArrow x0={RX5 + 220} x1={RX5 + 580} y={585} label="× 4, power down 1" color={VIOLET} at={k.diff + 30} size={36} />
				<LabelArrow x0={RX5 + 580} x1={RX5 + 220} y={690} label="power up 1, ÷ 4" color={INK} at={k.undo + 40} size={36} />
			</div> : null}
			<Line x={RX5} y={460} at={k.but} out={genOut} size={52}><V>d/dx</V> (x³) = 3x²</Line>
			<HandTag x={RX5 + 460} y={500} text="3 times too big" at={k.big} out={k.divide + 40} size={44} color={VIOLET} />
			<Line x={RX5} y={560} at={k.over} out={genOut} size={52}><V>d/dx</V> <Frac n="x³" d="3" /> = <Frac n="3x²" d="3" /> = <MarkSpan kind="circle" at={k.sq1} color={GREEN}>x²</MarkSpan></Line>
			<HandTag x={RX5 + 590} y={490} text="÷ 3" at={k.divide + 44} out={k.watch - 6} size={56} color={INK} />
			{/* the general proof */}
			<Line x={RX5} y={450} at={k.general} size={50}><V>d/dx</V> <Frac n={<>xⁿ⁺¹</>} d="n + 1" /></Line>
			<StudioCancellation x={RX5 + 30} y={560} prefix="=" top={[{content: '(n + 1)', cancel: true}, {content: 'xⁿ'}]} bottom={[{content: 'n + 1', cancel: true}]} strikeAt={k.cancels} result={{content: <V>xⁿ</V>, at: k.general + 140}} size={52} at={k.general + 60} />
			<HandTag x={RX5 + 470} y={640} text="needs n + 1 ≠ 0" at={k.zero} size={44} color={AMB} />
			<Note x={RX5} y={770} at={k.above} size={32}>x &gt; 0 in general; whole polynomials: every real x</Note>
			<Chip x={RX5} y={840} at={k.except} size={44} color={AMB}>n ≠ −1</Chip>
			<Note x={RX5 + 260} y={856} at={k.except + 8} size={34}>1/x has its own video</Note>
		</>
	);
};

// ---------- 6. sums, multiples and the integral sign ----------
const sqf = (x: number) => x * x;
const cb3 = (x: number) => x ** 3 / 3;
export const S06: React.FC = () => {
	const f = useCurrentFrame();
	const k = K6;
	const aOut = k.notation;
	const X = kf(f, [[60, -1.5], [k.k - 10, 1.4]]);
	const famO = prog(f, k.notation + 10, 14);
	return (
		<>
			<SceneHeading text={f < aOut ? 'Sums and multiples' : 'The integral sign'} at={f < aOut ? 4 : aOut + 4} size={56} />
			{/* A: gradients add */}
			<MiniPlot x={30} y={150} w={1000} h={790} win={{x: [-2, 2], y: [-3, 6]}} xTicks={[-2, -1, 1, 2]} yTicks={[-2, 2, 4, 6]} curves={[
				{fn: sqf, from: -2, to: 2, color: INK, width: 4},
				{fn: cb3, from: -2, to: 2, color: INK, width: 4, dash: '12 10'},
				{fn: x => sqf(x) + cb3(x), from: -2, to: 2, color: INK, width: 8},
			]} out={aOut}>
				{m => {const so = vis(f, 60, undefined, 12); const st = (Fn: (x: number) => number, s: number) => {const [px, py] = m.p(X, Fn(X)), vx = m.sx, vy = -s * m.sy, l = Math.hypot(vx, vy); return <line x1={px - (vx / l) * 56} y1={py - (vy / l) * 56} x2={px + (vx / l) * 56} y2={py + (vy / l) * 56} stroke={VIOLET} strokeWidth={6} strokeLinecap="round" opacity={so} />;}; return <>
					{st(sqf, 2 * X)}{st(cb3, X * X)}{st(x => sqf(x) + cb3(x), 2 * X + X * X)}
					<PLabel p={m.p(-1.9, 4.6)} text="F = x²" size={38} />
					<PLabel p={m.p(-1.95, -2.4)} text="G = x³/3 (dashed)" size={38} />
					<PLabel p={m.p(1.05, 5.4)} text="F + G" size={42} anchor="end" />
				</>;}}
			</MiniPlot>
			<Chip x={1080} y={150} at={-30} out={aOut} size={34} color={GREY}>power rule: n ≠ −1</Chip>
			<BoxCard x={1080} y={250} w={800} at={30} out={aOut} size={38} title="Year 11 recall">derivative of a sum = sum of the derivatives</BoxCard>
			<LiveReadoutBoard x={1080} y={430} width={600} at={60} out={aOut} inline size={46} labelSize={30} rows={[
				{label: 'gradient of F: f = 2x', value: 2 * X, digits: 2, role: 'gradient'},
				{label: 'gradient of G: g = x²', value: X * X, digits: 2, role: 'gradient'},
				{label: 'gradient of F + G', value: 2 * X + X * X, digits: 2, role: 'gradient'},
			]} />
			<Line x={1080} y={720} at={k.g} out={aOut} size={50}>(F + G)′ = F′ + G′ = <V>f + g</V></Line>
			<Line x={1080} y={820} at={k.f} out={aOut} size={50}>(kF)′ = kF′ = <V>kf</V></Line>
			{/* B: the notation */}
			<Note x={96} y={160} at={aOut + 6} size={34}>(F + G)′ = f + g      (kF)′ = kf      power rule: n ≠ −1</Note>
			<div style={{position: 'absolute', left: 110, top: 250, opacity: prog(f, k.integral - 10, 14), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 120, color: INK, whiteSpace: 'pre'}}>
				<MarkSpan kind="circle" at={k.integral + 20} color={INK_SOFT}>∫</MarkSpan> <MarkSpan kind="underline" at={k.integrand} color={VIOLET}><V>f(x)</V></MarkSpan> <MarkSpan kind="underline" at={k.dx} color={INK_SOFT}>dx</MarkSpan> = F(x) <PlusC at={k.C} />
			</div>
			<MiniPlot x={1180} y={200} w={700} h={400} win={{x: [-2, 2], y: [-2, 6]}} xTicks={[-1, 1]} yTicks={[2, 4]} at={k.notation + 10} curves={[-1, 0, 1, 2, 3].map(c => ({fn: (x: number) => x * x + c, from: -2, to: 2, color: c === 0 ? INK : '#8a8378', width: c === 0 ? 6 : 3.5, o: famO}))}>
				{m => <PLabel p={m.p(-1.9, 5.4)} text="x² + C: one family" size={32} color={AMB_INK} o={famO} />}
			</MiniPlot>
			<Note x={96} y={480} at={k.integral + 24} size={38}>∫: the integral sign</Note>
			<Note x={560} y={480} at={k.integrand} size={38}><V>integrand</V>: the function inside</Note>
			<Note x={96} y={545} at={k.dx} size={38}>dx: x is the variable</Note>
			<Line x={96} y={640} at={k.integral + 50} size={44}>∫(<V>f + g</V>) dx = ∫<V>f</V> dx + ∫<V>g</V> dx</Line>
			<Line x={96} y={725} at={k.integral + 64} size={44}>∫<V>kf</V> dx = k∫<V>f</V> dx</Line>
			<Chip x={1080} y={630} at={k.indefinite} size={38}>indefinite integral: the general primitive</Chip>
			<Chip x={1080} y={720} at={k.integration} size={38}>integration: finding the indefinite integral</Chip>
			<BoxCard x={96} y={820} at={k.so} size={50} border={INK} bw={4}>∫xⁿ dx = <Frac n={<>xⁿ⁺¹</>} d="n + 1" /> <Cc>+ C</Cc>,   n ≠ −1</BoxCard>
			<Note x={760} y={862} at={k.so + 14} size={34}>x &gt; 0 in general</Note>
		</>
	);
};

// ---------- 7. worked example: term by term ----------
const RX7 = 990;
export const S07: React.FC = () => {
	const f = useCurrentFrame();
	const k = K7;
	const planOut = k.three - 4;
	return (
		<>
			<TaskStrip text="Worked example: term by term" at={4} size={56} />
			<EquationStrip at={k.find} y={160} size={64}>Find ∫<MarkSpan kind="circle" at={k.exactly} color={GREEN}>(<V><MarkSpan kind="underline" at={k.three} color={VIOLET}>3x²</MarkSpan> + <MarkSpan kind="underline" at={k.four} color={VIOLET}>4x</MarkSpan> − <MarkSpan kind="underline" at={k.minus} color={VIOLET}>5</MarkSpan></V>)</MarkSpan> dx</EquationStrip>
			<Card x={1330} y={150} w={550} at={-30} pad="8px 22px 10px">
				<CardTitle>from step 6</CardTitle>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, color: INK, whiteSpace: 'pre'}}>∫xⁿ dx = <Frac n={<>xⁿ⁺¹</>} d="n + 1" /> <Cc>+ C</Cc></div>
			</Card>
			<MiniPlot x={30} y={300} w={820} h={650} win={{x: [-3, 2], y: [-8, 17]}} xTicks={[-3, -2, -1, 1, 2]} yTicks={[-5, 5, 10, 15]} curves={[{fn: w1, from: -3, to: 2, color: VIOLET}]} at={-30}>
				{m => <>
					<PLabel p={m.p(-2.9, 14.6)} text="the gradient" color={VIOLET} size={40} hand />
					<PLabel p={m.p(-2.9, 12.2)} text="y = 3x² + 4x − 5" color={VIOLET} size={34} />
				</>}
			</MiniPlot>
			<div style={{position: 'absolute', inset: 0, transform: `translateY(${350 * smooth(prog(f, planOut - 6, 18))}px)`}}><Card x={RX7} y={300} w={890} at={20} out={k.add - 8} pad="14px 28px 16px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK}}>the plan</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, lineHeight: 1.4}}>1. one term at a time<br />2. raise the power, divide by the new power<br />3. one <Cc>+ C</Cc> for the whole answer<br />4. check by differentiating</div>
			</Card></div>
			<SegRow x={RX7} y={310} size={50} segs={[{c: <>∫<V>3x²</V> dx = 3 · <Frac n="x³" d="3" /></>, at: k.three + 30}, {c: <>= x³</>, at: k.cubed + 14}]} />
			<SegRow x={RX7} y={420} size={50} segs={[{c: <>∫<V>4x</V> dx = 4 · <Frac n="x²" d="2" /></>, at: k.four + 80}, {c: <>= 2x²</>, at: k.squared + 14}]} />
			<HandTag x={RX7 + 640} y={455} text="x = x¹" at={k.four + 30} out={k.minus - 10} size={50} color={GREY_INK} />
			<SegRow x={RX7} y={530} size={50} segs={[{c: <>∫(<V>−5</V>) dx = −5x</>, at: k.x + 4}]} />
			<HandTag x={RX7 + 520} y={565} text="−5 = −5x⁰" at={k.minus + 30} out={k.add - 6} size={50} color={GREY_INK} />
			<SegRow x={RX7} y={640} size={52} segs={[{c: <>= x³ + 2x² − 5x <Cc>+ C</Cc></>, at: k.add + 10}]} answerAt={k.exactly + 6} />
			<HandTag x={RX7 + 640} y={680} text="one C" at={k.add + 40} out={k.check - 4} size={48} color={AMB} />
			<StudioDerivativeCheck x={RX7} y={640} gap={150} size={52} answer="" result={<span>3x² + 4x − 5</span>} at={k.check} tickAt={k.exactly + 4} answerFn={W1} targetFn={w1} />
			<div style={{position: 'absolute', left: RX7 - 30, top: 772, opacity: prog(f, k.exactly, 12)}}><svg width={540} height={100}><ellipse cx={270} cy={50} rx={262} ry={44} fill="none" stroke={GREEN} strokeWidth={5} /></svg></div>
		</>
	);
};

// ---------- 8. worked example: one point picks the curve ----------
const G8 = {x: 30, y: 270, w: 1000, h: 690};
const WIN8 = {x: [-1, 2.5] as [number, number], y: [-6, 15] as [number, number]};
const RX8 = 1080;
export const S08: React.FC = () => {
	const f = useCurrentFrame();
	const k = K8;
	const famAt = k.C - 6;
	const C = kf(f, [[k.eq, 0], [k.four + 10, 4]]);
	const memO = 0.55 * prog(f, famAt, 14) * (1 - 0.8 * prog(f, k.curve, 20));
	const done = f >= k.four + 10;
	const rowUp = smooth(prog(f, k.five - 4, 16));
	return (
		<>
			<TaskStrip text="Worked example: one point picks the curve" at={4} size={56} />
			<EquationStrip at={8} y={160} size={56}>Find the curve: <V>dy/dx = 3x² − 4x + 2</V></EquationStrip>
			<Card x={1330} y={150} w={550} at={k.point} pad="10px 26px 12px">
				<CardTitle>Given</CardTitle>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK, whiteSpace: 'pre'}}>passes through <MarkSpan kind="underline" at={k.five} color={AMB}>(1, 5)</MarkSpan></div>
			</Card>
			<StudioPlot x={G8.x} y={G8.y} width={G8.w} height={G8.h} window={WIN8} xTicks={[-1, 1, 2]} yTicks={[-5, 5, 10]} at={-30}>
				{m => <>
					<g clipPath={m.clip} opacity={0.75 - 0.45 * prog(f, famAt, 20)}>
						{[-0.75, -0.25, 0.25, 0.75, 1.25, 1.75, 2.25].flatMap(X => [-4, -1, 2, 5, 8, 11, 14].map(Y => {const [px, py] = m.p(X, Y), s = w2(X), vx = m.sx, vy = -s * m.sy, l = Math.hypot(vx, vy); return <line key={X + ',' + Y} x1={px - (vx / l) * 26} y1={py - (vy / l) * 26} x2={px + (vx / l) * 26} y2={py + (vy / l) * 26} stroke={VIOLET} strokeWidth={4} strokeLinecap="round" opacity={prog(f, k.gradient + 10 + Math.round((X + 0.75) * 8), 10)} />;}))}
					</g>
					<g clipPath={m.clip}>
						{[-2, 0, 2, 4, 6].map(c => <path key={c} d={fnPath(m, x => W2(x) + c, -1, 2.5)} stroke="#8a8378" strokeWidth={3.5} fill="none" opacity={c === 0 && f < k.curve ? 0 : memO} />)}
						{f >= famAt ? <path d={fnPath(m, x => W2(x) + C, -1, 2.5)} stroke={done ? GREEN : INK} strokeWidth={7} fill="none" strokeLinecap="round" opacity={prog(f, famAt, 14)} /> : null}
					</g>
					{(() => {const a = m.p(1, 1), b = m.p(1, 5); const so = vis(f, k.five + 6, k.curve, 12); return <g opacity={so}>
						<line x1={a[0] - 34} x2={a[0] - 34} y1={a[1]} y2={b[1] + 14} stroke={AMB} strokeWidth={6} strokeLinecap="round" />
						<path d={`M${a[0] - 46},${b[1] + 30} L${a[0] - 34},${b[1] + 10} L${a[0] - 22},${b[1] + 30}`} stroke={AMB} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" />
						<text x={a[0] - 50} y={(a[1] + b[1]) / 2 + 14} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, fill: AMB_INK}} stroke={CARD} strokeWidth={8} paintOrder="stroke">the slide</text>
					</g>;})()}
					{(() => {const p = m.p(1, 1); return <circle cx={p[0]} cy={p[1]} r={9} fill={INK} opacity={vis(f, k.five + 6, k.curve, 12)} />;})()}
					{(() => {const p = m.p(1, 5); return <g opacity={prog(f, k.point, 12)}>
						<circle cx={p[0]} cy={p[1]} r={16} fill={CARD} stroke={INK} strokeWidth={5} />
						<text x={p[0] + 26} y={p[1] + 50} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: AMB_INK}} stroke={CARD} strokeWidth={8} paintOrder="stroke">(1, 5)</text>
					</g>;})()}
					<Ring p={m.p(1, 5)} r={34} o={prog(f, k.four + 10, 12)} color={GREEN} />
					{f >= famAt && f < k.eq ? <PLabel p={m.p(1.75, W2(1.75) - 1.6)} text="C = 0" size={40} /> : null}
					{done ? <PLabel p={m.p(1.7, W2(1.7) + 4.6)} text="C = 4" size={40} color={GREEN} anchor="end" dx={-20} /> : null}
					<PLabel p={m.p(-0.95, 13.6)} text="the family: same shape" size={36} color={GREY_INK} o={vis(f, k.family, k.sub, 12)} hand />
				</>}
			</StudioPlot>
			<HandTag x={1090} y={350} text="violet: the gradient at every point" at={k.gradient + 30} out={k.integrate - 12} size={44} color={VIOLET} />
			<Card x={RX8} y={500} w={800} at={20} out={k.five - 8} pad="14px 28px 16px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK}}>the plan</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, lineHeight: 1.4}}>1. integrate: a family, one <Cc>C</Cc><br />2. substitute the point (1, 5)<br />3. solve for <Cc>C</Cc></div>
			</Card>
			<Line x={RX8} y={290} at={k.integrate} out={k.five - 6} size={46}>y = ∫(<V>3x² − 4x + 2</V>) dx</Line>
			<div style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', transform: `translateY(${-90 * rowUp}px)`}}>
				<Line x={RX8} y={380} at={k.C} size={52}>y = x³ − 2x² + 2x <Cc>+ C</Cc></Line>
			</div>
			<Line x={RX8} y={380} at={k.five + 8} size={46}>5 = 1³ − 2(1)² + 2(1) <Cc>+ C</Cc></Line>
			<SegRow x={RX8} y={470} size={46} weight={800} segs={[{c: <>= 1 − 2 + 2 <Cc>+ C</Cc></>, at: k.eq + 30}, {c: <>= 1 <Cc>+ C</Cc></>, at: k.one}]} />
			<Line x={RX8} y={560} at={k.four} size={52}><Cc>C = 4</Cc></Line>
			<SegRow x={RX8} y={650} size={52} segs={[{c: <>y = x³ − 2x² + 2x + 4</>, at: k.curve}]} answerAt={k.curve + 10} />
			<Note x={RX8} y={750} at={k.curve + 60} size={36} color={VIOLET}>d/dx: 3x² − 4x + 2  ✓</Note>
			<ParameterSlider x={RX8} y={820} width={300} symbol="C" role="k" value={C} min={-2} max={6} ticks={[0, 2, 4, 6].map(v => ({value: v, label: String(v)}))} at={k.eq - 20} out={k.fact - 10} digits={1} />
			<Chip x={RX8} y={840} at={k.fact} size={42} color={AMB}>initial condition: y = 5 when x = 1</Chip>
		</>
	);
};
