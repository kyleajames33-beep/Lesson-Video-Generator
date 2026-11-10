// Scenes 1 to 5: the hook (i03's 1/x frame, then the fundraiser board filling beside live rate and total graphs,
// then the exam term waiting), ln x as the right-hand piece (paired panels: gradient = height of 1/x), the mirror
// (ln(−x) drawn by reflecting ln x; its tangents land on the negative piece), ln|x| traced on both pieces (kit
// TwoPieceTracer), and the two pieces sliding apart with a constant each.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, prog} from '../../kit';
import {CARD, FrameSvg, HandTag, InnerSlot, LiveReadoutBoard, MATH_BLUE, MATH_EXCLUDED, MistakeCard, ParameterSlider, SceneHeading, TwoPieceTracer, kf, smooth, vis} from '../../math/studio';
import type {PlotMap} from '../../math/studio';
import {I03FinalFrame} from '../math-a12-i03/s3';
import {K1, K2, K3, K4, K5} from './cuemap';
import {AMB, BLUE, Bl, BoxCard, Cc, Chip, Frac, FundBoard, FundGraph, FundRig, GREY, GapLine, Line, PAIR, PLabel, PX_TICKS, PairPlots, RED, Tick, V, VIOLET, WX, YBOT, YTOP, botMap, lnPath, recipPath, tangentSeg, topMap, total} from './parts';

const ln = Math.log;
const RX = 1090;

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const f = useCurrentFrame();
	const k = K1;
	const sw = prog(f, k.fund - 12, 16);
	if (sw <= 0) return <I03FinalFrame />;
	const t = kf(f, [[k.day, 1], [k.day + 96, 32]]);
	const q = smooth(prog(f, k.waiting, 10)) * (1 - smooth(prog(f, k.waiting + 12, 10)));
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}><I03FinalFrame /></div> : null}
			<div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<SceneHeading text="A fundraiser that slows down" at={k.fund - 12} out={k.question} size={56} />
				<SceneHeading text="Why does ∫ 1/x dx need ln|x|?" at={k.question + 6} size={56} />
				<FundRig x={70} y={170} h={780} value={total(t)} />
				<FundBoard x={380} y={165} width={610} t={t} />
				<Line x={380} y={470} at={k.onday} size={46}>rate = <V><Frac n="1000" d="t" /></V> dollars a day</Line>
				<Line x={380} y={590} at={k.so} size={46}>total: gradient <V><Frac n="1000" d="t" /></V></Line>
				<HandTag x={390} y={760} text="1/t = t⁻¹: the power rule fails" at={k.gradient + 30} size={42} color={RED} />
				<HandTag x={390} y={850} text="the total keeps rising, more slowly" at={k.day + 100} out={k.question} size={40} color={INK} />
				<FundGraph x={1030} y={150} w={860} h={390} t={t} kind="rate" out={k.question} />
				<FundGraph x={1030} y={560} w={860} h={400} t={t} kind="total" out={k.question} />
				<BoxCard x={1040} y={160} w={850} at={k.question} size={52} title="the same term in a question">Find ∫(2e³ˣ + <V><Frac n="4" d="x" /></V>) dx</BoxCard>
				<BoxCard x={1040} y={330} w={850} at={k.question + 16} out={k.first - 4} size={44} title="two terms">term 1: 2e³ˣ (last video)<br />term 2: <V><Frac n="4" d="x" /></V> = 4x⁻¹</BoxCard>
				<Line x={1050} y={330} at={k.first} size={44} dim={1}>∫2e³ˣ dx = ⅔e³ˣ</Line>
				<HandTag x={1500} y={372} text="last video" at={k.first + 10} size={38} color={GREY} />
				<Line x={1050} y={420} at={k.second} size={56}>∫<V><Frac n="4" d="x" /></V> dx = <span style={{display: 'inline-block', color: RED, transform: `scale(${1 + 0.35 * q})`}}>?</span></Line>
				<MistakeCard x={1040} y={560} w={850} at={k.second + 12} size={44} wrong={<>power rule: 4 · <Frac n="x⁰" d="0" /> + C</>} caption="n = −1: it divides by 0" />
				<Chip x={1040} y={790} at={k.which} size={46} color={AMB}>Which curve has gradient <V>1/x</V>?</Chip>
				<HandTag x={1050} y={930} text="|x|: the absolute value, read “mod x”" at={k.abs} size={40} color={INK} />
			</div>
		</>
	);
};

// ---------- the paired panels: shared overlays ----------
const Connector: React.FC<{x: number; yTop: number; yBot: number; o: number; color?: string}> = ({x, yTop, yBot, o, color = VIOLET}) => {
	if (o <= 0.001) return null;
	const a = topMap().pf(x, yTop), b = botMap().pf(x, yBot);
	return <FrameSvg style={{opacity: o}}>
		<line x1={a[0]} x2={b[0]} y1={a[1] + 16} y2={b[1] - 16} stroke={color} strokeWidth={4} strokeDasharray="10 9" />
		<circle cx={b[0]} cy={b[1]} r={22} fill="none" stroke={color} strokeWidth={5} />
	</FrameSvg>;
};
const TanTri: React.FC<{m: PlotMap; X: number; C?: number; o: number; run?: number; labels?: boolean}> = ({m, X, C = 0, o, run = 1, labels = true}) => {
	if (o <= 0.001) return null;
	const Y = ln(Math.abs(X)) + C, s = 1 / X;
	const sg = tangentSeg(m, X, Y, s, 150);
	const a = m.p(X, Y), b = m.p(X + run, Y), c = m.p(X + run, Y + s * run);
	return <g opacity={o}>
		<path d={`M${a[0]},${a[1]} H${b[0]} V${c[1]}`} stroke={BLUE} strokeWidth={5} fill="none" />
		<line {...sg} stroke={VIOLET} strokeWidth={6} strokeLinecap="round" />
		<circle cx={a[0]} cy={a[1]} r={12} fill={VIOLET} stroke={CARD} strokeWidth={4} />
		{labels ? <>
			<PLabel p={[(a[0] + b[0]) / 2, a[1]]} dy={s > 0 ? 40 : -16} text="run 1" color={BLUE} size={32} anchor="middle" />
			<PLabel p={[c[0], (b[1] + c[1]) / 2]} dx={14} dy={12} text={s > 0 ? 'rise ½' : 'drop ½'} color={BLUE} size={32} />
		</> : null}
	</g>;
};

// ---------- 2. the right-hand piece ----------
export const S02: React.FC = () => {
	const f = useCurrentFrame();
	const k = K2;
	const draw = kf(f, [[k.positive, 0], [k.deriv + 40, 1]]);
	const neg = prog(f, k.negative, 14);
	const t2 = prog(f, k.half, 12);
	return (
		<>
			<SceneHeading text="A curve whose gradient is 1/x: the right-hand piece" at={4} size={52} />
			<PairPlots topLabel="y: primitive, gradient = 1/x"
				top={m => {const l = m.p(WX[0], YTOP[1]), o = m.p(0, YTOP[0]); return <>
					<rect x={l[0]} y={l[1]} width={o[0] - l[0]} height={o[1] - l[1]} fill="#e9e3d6" opacity={0.7 * neg} />
					<text x={m.p(-2.25, 0)[0]} y={m.p(0, -0.35)[1]} textAnchor="middle" opacity={neg} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 110, fill: '#8a8378'}}>?</text>
					<g clipPath={m.clip}>{draw > 0.01 ? <path d={lnPath(m, 0.04, 0.04 + 4.46 * draw)} stroke={INK} strokeWidth={6.5} fill="none" strokeLinecap="round" /> : null}</g>
					<PLabel p={m.p(1.25, -1.55)} text="y = ln x  (x > 0)" size={38} o={prog(f, k.positive + 30, 12)} />
					<TanTri m={m} X={2} o={t2} />
				</>;}}
				bottom={m => <>
					<g clipPath={m.clip}>
						<path d={recipPath(m, 0.3, 4.5)} stroke={VIOLET} strokeWidth={6} fill="none" strokeLinecap="round" />
						<path d={recipPath(m, -4.5, -0.3)} stroke={VIOLET} strokeWidth={6} fill="none" strokeLinecap="round" opacity={0.3 + 0.7 * neg} />
					</g>
					<PLabel p={m.p(-4.35, 2.25)} text="height of 1/x = the gradient we need" color={VIOLET} size={34} o={prog(f, k.height, 12)} />
					{(() => {const p = m.p(2, 0.5); return <circle cx={p[0]} cy={p[1]} r={12} fill={VIOLET} stroke={CARD} strokeWidth={4} opacity={t2} />;})()}
				</>} />
			<Connector x={2} yTop={ln(2)} yBot={0.5} o={prog(f, k.same, 12)} />
			<Line x={RX} y={150} at={-30} size={40} dim={1}>∫<Frac n="4" d="x" /> dx = 4 ∫<V><Frac n="1" d="x" /></V> dx</Line>
			<BoxCard x={RX} y={250} w={800} at={-30} size={44} title="a primitive of 1/x">a curve whose gradient at each x equals the height of <V>1/x</V></BoxCard>
			<Chip x={RX} y={470} at={k.deriv} size={44} color={GREY}><V>d/dx</V> ln x = <V><Frac n="1" d="x" /></V>  (x &gt; 0)</Chip>
			<HandTag x={RX + 560} y={600} text="earlier video" at={k.deriv + 10} size={36} color={GREY} />
			<BoxCard x={RX} y={640} w={800} at={-30} out={k.at2 - 4} size={42} title="test it at one point">pick x = 2: compare the gradient of ln x with the height of <V>1/x</V></BoxCard>
			<LiveReadoutBoard x={RX} y={640} width={790} at={k.at2} inline size={52} labelSize={30} rows={[
				{label: 'x', value: 2, digits: 0},
				{label: 'gradient of ln x', value: 0.5, digits: 1, role: 'gradient', at: k.half},
				{label: 'height of 1/x', value: 0.5, digits: 1, role: 'gradient', at: k.same, glow: [k.same, k.same + 60]},
			]} />
			<HandTag x={RX} y={930} text="ln x: not defined for x ≤ 0" at={k.negative + 10} size={44} color={RED} />
		</>
	);
};

// ---------- 3. the mirror ----------
const STUBS = [-0.5, -2, -4];
export const S03: React.FC = () => {
	const f = useCurrentFrame();
	const k = K3;
	const mp = kf(f, [[k.axis, 0], [k.axis + 70, 1]]);
	const stubO = vis(f, k.downhill, k.axis + 70, 12);
	const mirO = vis(f, k.axis, k.this, 12);
	const t2 = prog(f, k.slope, 12);
	return (
		<>
			<SceneHeading text="The left-hand piece: mirror the log curve" at={4} size={52} />
			<PairPlots topLabel="y: primitive, gradient = 1/x"
				top={m => {const ax = m.p(0, 0)[0]; return <>
					<line x1={ax} x2={ax} y1={m.box.top} y2={m.box.top + m.box.height} stroke={MATH_BLUE} strokeWidth={9} opacity={0.55 * mirO} />
					<g clipPath={m.clip}>
						<path d={lnPath(m, 0.04, 4.5)} stroke={INK} strokeWidth={6.5} fill="none" strokeLinecap="round" />
						{mp > 0.01 ? <path d={lnPath(m, -(0.04 + 4.46 * mp), -0.04)} stroke={INK} strokeWidth={6.5} fill="none" strokeLinecap="round" /> : null}
						{[0.5, 1, 2, 3, 4].map(X => {const on = prog(f, k.axis + (X / 4.5) * 70 - 4, 6) * mirO; if (on <= 0.01) return null; const a = m.p(X, ln(X)), b = m.p(-X, ln(X)); return <g key={X} opacity={on * 0.75}>
							<line x1={a[0]} x2={b[0]} y1={a[1]} y2={b[1]} stroke={MATH_BLUE} strokeWidth={3} strokeDasharray="8 8" />
							<circle cx={b[0]} cy={b[1]} r={8} fill={MATH_BLUE} />
						</g>;})}
						{STUBS.map(X => {const sg = tangentSeg(m, X, ln(-X), 1 / X, 52); return <line key={X} {...sg} stroke={VIOLET} strokeWidth={7} strokeLinecap="round" opacity={stubO} />;})}
					</g>
					<TanTri m={m} X={2} o={1} labels={false} />
					<TanTri m={m} X={-2} o={t2} />
					<PLabel p={m.p(-4.35, -1.95)} text="downhill, steep near 0" color={VIOLET} size={36} hand o={vis(f, k.downhill + 10, k.this - 10, 12)} />
					<PLabel p={m.p(0.18, 1.62)} text="mirror" color={MATH_BLUE} size={40} hand o={mirO} />
					<PLabel p={m.p(-4.35, -2.05)} text="y = ln(−x), x < 0" size={38} o={prog(f, k.this, 12)} />
					<PLabel p={m.p(1.4, -1.55)} text="y = ln x" size={38} />
				</>;}}
				bottom={m => <>
					<g clipPath={m.clip}>
						<path d={recipPath(m, 0.3, 4.5)} stroke={VIOLET} strokeWidth={6} fill="none" strokeLinecap="round" />
						<path d={recipPath(m, -4.5, -0.3)} stroke={VIOLET} strokeWidth={6} fill="none" strokeLinecap="round" />
					</g>
					{STUBS.map(X => {const p = m.p(X, 1 / X); return <circle key={X} cx={p[0]} cy={p[1]} r={13} fill={VIOLET} stroke={CARD} strokeWidth={4} opacity={stubO} />;})}
					{(() => {const p = m.p(2, 0.5); return <circle cx={p[0]} cy={p[1]} r={12} fill={VIOLET} stroke={CARD} strokeWidth={4} />;})()}
					{(() => {const p = m.p(-2, -0.5); return <circle cx={p[0]} cy={p[1]} r={12} fill={VIOLET} stroke={CARD} strokeWidth={4} opacity={prog(f, k.half, 12)} />;})()}
					<PLabel p={m.p(0.5, 2.3)} text="1/x < 0 on the left" color={VIOLET} size={34} hand o={prog(f, k.left + 20, 12)} />
				</>} />
			<Connector x={-2} yTop={ln(2)} yBot={-0.5} o={prog(f, k.minushalf, 12)} />
			<BoxCard x={RX} y={150} w={800} at={-30} size={42} title="needed on the left">1/x &lt; 0, so the curve must go <V>downhill</V>: steep near 0, flatter further left</BoxCard>
			<LiveReadoutBoard x={RX} y={380} width={790} at={-30} inline size={52} labelSize={30} rows={[
				{label: 'gradient at x = 2', value: 0.5, digits: 1, role: 'gradient'},
			]} />
			<BoxCard x={RX} y={480} w={800} at={k.downhill} out={k.half - 4} size={40} title="downhill stubs" border={VIOLET}>slopes −2, −½, −¼ at x = −0.5, −2, −4: the heights of <V>1/x</V> there</BoxCard>
			<LiveReadoutBoard x={RX} y={480} width={790} at={k.half} inline size={52} labelSize={30} rows={[
				{label: 'gradient at x = −2', value: -0.5, digits: 1, role: 'gradient', glow: [k.half, k.half + 70]},
				{label: '1/x at x = −2', value: -0.5, digits: 1, role: 'gradient', at: k.minushalf},
			]} />
			<BoxCard x={RX} y={680} w={800} at={k.mirroring} out={k.chain - 4} size={44} border={MATH_BLUE} title="mirror in the y-axis">every slope reverses:<br />slope s at x becomes −s at −x</BoxCard>
			<Line x={RX} y={680} at={k.chain} size={46}><V>d/dx</V> ln(<InnerSlot>−x</InnerSlot>) = <Frac n="1" d="−x" /> × <Bl>(−1)</Bl></Line>
			<HandTag x={RX + 540} y={820} text="inner derivative" at={k.inner} size={40} color={BLUE} />
			<Line x={RX} y={840} at={k.thats1} size={52}>= <V><Frac n="1" d="x" /></V>  (x &lt; 0) <Tick size={50} o={prog(f, k.thats1 + 10, 10)} /></Line>
		</>
	);
};

// ---------- 4 and 5: the kit two-piece tracer ----------
const PIECES = [
	{from: -4.5, to: 0, F: (x: number) => ln(-x), f: (x: number) => 1 / x},
	{from: 0, to: 4.5, F: (x: number) => ln(x), f: (x: number) => 1 / x},
];
const lowerClip = () => {const b = botMap(); return {x: b.x + b.box.left, y: b.y + b.box.top, w: b.box.width, h: b.box.height};};
const FullRecip: React.FC<{o: number}> = ({o}) => {
	const b = botMap(), c = lowerClip();
	return <FrameSvg style={{opacity: o}}>
		<defs><clipPath id="i04-lower"><rect x={c.x} y={c.y} width={c.w} height={c.h} /></clipPath></defs>
		<g clipPath="url(#i04-lower)"><g transform={`translate(${b.x},${b.y})`}>
			<path d={recipPath(b, 0.3, 4.5)} stroke={VIOLET} strokeWidth={6} fill="none" strokeLinecap="round" />
			<path d={recipPath(b, -4.5, -0.3)} stroke={VIOLET} strokeWidth={6} fill="none" strokeLinecap="round" />
		</g></g>
	</FrameSvg>;
};
const SW = (k: {piece: number}) => [
	{piece: 0, from: -4.5, to: -0.35, start: k.piece, end: k.piece + 50},
	{piece: 1, from: 0.35, to: 4.5, start: k.piece + 56, end: k.piece + 110},
];
export const S04: React.FC = () => {
	const f = useCurrentFrame();
	const k = K4;
	const sweeps = SW(k);
	const act = sweeps.find(s => f >= s.start && f <= s.end);
	const last = [...sweeps].reverse().find(s => f > s.end);
	const rx = act ? act.from + (act.to - act.from) * smooth((f - act.start) / (act.end - act.start)) : last ? last.to : -4.5;
	const tm = topMap();
	return (
		<>
			<SceneHeading text="Both pieces: ln|x|" at={4} size={56} />
			<TwoPieceTracer x={PAIR.x} y={PAIR.y} width={PAIR.w} heightTop={PAIR.hTop} heightBottom={PAIR.hBottom} gap={PAIR.gap} windowX={WX} yTop={YTOP} yBottom={YBOT}
				pieces={PIECES} cs={[0, 0]} sweeps={sweeps} excluded={[0]} xTicks={PX_TICKS} yTopTicks={[-2, -1, 1]} yBottomTicks={[-2, 2]} topLabel="y = ln|x|" bottomLabel="f(x) = 1/x" at={-30} />
			<FullRecip o={0.35} />
			<FrameSvg>
				{(() => {const p = tm.pf(-3.3, 0.45); return <text x={p[0]} y={p[1]} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">ln(−x)</text>;})()}
				{(() => {const p = tm.pf(3.0, 0.75); return <text x={p[0]} y={p[1]} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">ln x</text>;})()}
				{(() => {const p = tm.pf(0.15, -2.1); return <text x={p[0]} y={p[1]} opacity={prog(f, k.both, 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, fill: '#4f4840'}} stroke={CARD} strokeWidth={7} paintOrder="stroke">gap at 0</text>;})()}
			</FrameSvg>
			<Line x={RX} y={150} at={k.put} size={46}>x &gt; 0:  ln x = ln|x|</Line>
			<Line x={RX} y={240} at={k.negative} size={46}>x &lt; 0:  ln(−x) = ln|x|</Line>
			<BoxCard x={RX} y={350} w={800} at={k.mod} size={40} border={GREY}>|x| = the size of x, no sign:  |−2| = 2</BoxCard>
			<LiveReadoutBoard x={RX} y={490} width={790} at={k.put} out={k.so - 4} inline size={52} labelSize={30} rows={[
				{label: 'point at x', value: rx, digits: 2},
				{label: 'gradient of ln|x|', value: 1 / rx, digits: 2, role: 'gradient'},
				{label: '1/x', value: 1 / rx, digits: 2, role: 'gradient'},
			]} />
			<Chip x={RX} y={820} at={k.exactly} size={44} color={VIOLET}>gradients of ln|x| = <V>1/x</V>, both sides <Tick size={40} /></Chip>
			<BoxCard x={RX} y={480} w={800} at={k.so} size={56} border={INK} bw={5}>∫<V><Frac n="1" d="x" /></V> dx = ln|x| <Cc>+ C</Cc>,  x ≠ 0</BoxCard>
			<GapLine x={RX} y={630} w={800} range={[-4.5, 4.5]} excluded={[0]} ticks={[-4, -2, 0, 2, 4].map(v => ({value: v, label: v < 0 ? `−${-v}` : String(v)}))} label="valid either side of 0" at={k.so + 30} />
		</>
	);
};

// ---------- 5. two pieces, a constant each ----------
export const S05: React.FC = () => {
	const f = useCurrentFrame();
	const k = K5;
	const C1 = kf(f, [[k.right + 20, 0], [k.change, 1]]);
	const C2 = kf(f, [[k.left + 10, 0], [k.true, -0.5]]);
	const tm = topMap();
	const gapO = prog(f, k.notice, 12);
	const tan = (X: number, C: number) => {const sg = tangentSeg(tm, X, ln(Math.abs(X)) + C, 1 / X, 140); const p = tm.p(X, ln(Math.abs(X)) + C); return <g transform={`translate(${tm.x},${tm.y})`}><line {...sg} stroke={VIOLET} strokeWidth={6} strokeLinecap="round" /><circle cx={p[0]} cy={p[1]} r={12} fill={VIOLET} stroke={CARD} strokeWidth={4} /></g>;};
	const ghost = (a: number, b: number, o: number) => o > 0.01 ? <path transform={`translate(${tm.x},${tm.y})`} d={lnPath(tm, a, b)} stroke={MATH_EXCLUDED} strokeWidth={4} strokeDasharray="12 10" fill="none" opacity={o} /> : null;
	const tc = {x: tm.x + tm.box.left, y: tm.y + tm.box.top, w: tm.box.width, h: tm.box.height};
	const g0 = tm.pf(0, YTOP[1]), g1 = tm.pf(0, YTOP[0]);
	return (
		<>
			<SceneHeading text="Two pieces, a constant each" at={4} size={56} />
			<TwoPieceTracer x={PAIR.x} y={PAIR.y} width={PAIR.w} heightTop={PAIR.hTop} heightBottom={PAIR.hBottom} gap={PAIR.gap} windowX={WX} yTop={YTOP} yBottom={YBOT}
				pieces={PIECES} cs={[C2, C1]} sweeps={[]} excluded={[0]} xTicks={PX_TICKS} yTopTicks={[-2, -1, 1]} yBottomTicks={[-2, 2]} topLabel="y = ln|x| + C" bottomLabel="f(x) = 1/x" at={-30} />
			<FullRecip o={1} />
			<FrameSvg>
				<defs><clipPath id="i04-upper"><rect x={tc.x} y={tc.y} width={tc.w} height={tc.h} /></clipPath></defs>
				<g clipPath="url(#i04-upper)">
					{ghost(0.04, 4.5, prog(f, k.right + 20, 10))}
					{ghost(-4.5, -0.04, prog(f, k.left + 10, 10))}
					{tan(2, C1)}
					{tan(-2, C2)}
				</g>
				<rect x={g0[0] - 34} y={g0[1] + 6} width={68} height={g1[1] - g0[1] - 12} rx={30} fill="none" stroke={RED} strokeWidth={5} strokeDasharray="14 10" opacity={gapO} />
				<text x={g0[0] + 44} y={g0[1] + 44} opacity={gapO} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 36, fill: RED}} stroke={CARD} strokeWidth={7} paintOrder="stroke">gap: not crossed</text>
			</FrameSvg>
			<LiveReadoutBoard x={RX} y={150} width={790} at={-30} inline size={52} labelSize={30} rows={[
				{label: 'right piece: gradient at x = 2', value: 0.5, digits: 1, role: 'gradient', glow: [k.change - 10, k.change + 50]},
				{label: 'left piece: gradient at x = −2', value: -0.5, digits: 1, role: 'gradient', glow: [k.true - 10, k.true + 50]},
			]} />
			<ParameterSlider x={RX} y={320} width={420} symbol="C₁" role="k" value={C1} min={-1} max={1.5} ticks={[{value: -1, label: '−1'}, {value: 0, label: '0'}, {value: 1, label: '1'}]} digits={1} at={-30} />
			<ParameterSlider x={RX} y={450} width={420} symbol="C₂" role="k" value={C2} min={-1} max={1.5} ticks={[{value: -1, label: '−1'}, {value: 0, label: '0'}, {value: 1, label: '1'}]} digits={1} at={-30} />
			<HandTag x={RX + 10} y={612} text="C₁ slides the right piece, C₂ the left" at={k.left + 20} size={38} color={AMB} />
			<BoxCard x={RX} y={640} w={800} at={-30} out={k.own - 4} size={42} title="test">slide one piece: does its gradient change?</BoxCard>
			<Chip x={RX} y={650} at={k.own} size={44} color={AMB}>each piece: its own <Cc>constant</Cc></Chip>
			<Line x={RX} y={750} at={k.diff} size={42}><V>d/dx</V> (ln|x| <Cc>+ C</Cc>) = <V>1/x</V> on each piece <Tick size={40} o={prog(f, k.diff + 30, 10)} /></Line>
			<BoxCard x={RX} y={830} at={k.question} size={46} border={INK} bw={4}>in a question: ∫<V><Frac n="1" d="x" /></V> dx = ln|x| <Cc>+ C</Cc></BoxCard>
		</>
	);
};
