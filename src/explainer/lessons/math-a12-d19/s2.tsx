// Scenes 4 to 7: the k slider through zero (growth, the k = 0 constant, decay), the asymptote Q = 0 for k ≠ 0,
// the A fold (reflection in the t-axis) and the model domain; the town fitted from data (k, then the time);
// decay from a half-life.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, Card, CardTitle, FrameSvg, FunctionSimulator, HandTag, MarkSpan, MistakeCard, ParameterSlider, SceneHeading, WorkingRows, fnStateAt, vis} from '../../math/studio';
import type {FnGeometry, FnKey} from '../../math/studio';
import {K4, K5, K6, K7} from './cuemap';
import {AMB, Aa, AnswerBox, Approx, BLUE, BoxCard, CarGraph, DQ, Ex, Frac, GREEN, GREY, GREY_INK, Kb, Line, Ring, V, VIOLET, K_SUB, K_TOWN, T_TOWN, sub, town} from './parts';

/** A segment through displayed (X, Y) with displayed gradient m, `half` px each way (any FunctionSimulator). */
const segG = (g: FnGeometry, X: number, Y: number, m: number, half: number) => {
	const P = g.toFrame(X, Y), Q = g.toFrame(X + 1, Y + m);
	const vx = Q[0] - P[0], vy = Q[1] - P[1], l = Math.hypot(vx, vy);
	return {x1: P[0] - (vx / l) * half, y1: P[1] - (vy / l) * half, x2: P[0] + (vx / l) * half, y2: P[1] + (vy / l) * half};
};
const pathG = (g: FnGeometry, fn: (X: number) => number, a: number, b: number, n = 80) => Array.from({length: n + 1}, (_, i) => {const X = a + ((b - a) * i) / n; const p = g.toFrame(X, fn(X)); return `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`;}).join(' ');

// ---------- 4. growth, decay and the asymptote ----------
const G4 = {x: 20, y: 160, w: 1120, h: 800};
const WIN4 = {x: [-4.3, 4.3] as [number, number], y: [-16.5, 16.5] as [number, number]};
const EXPF = {f: (u: number, p: Record<string, number>) => 2 * Math.exp(p.k * u), df: (u: number, p: Record<string, number>) => 2 * p.k * Math.exp(p.k * u)};
const RX4 = 1170;
export const S04: React.FC = () => {
	const f = useCurrentFrame();
	const k = K4;
	const TL: FnKey[] = [
		{frame: 0, x: 0, p: {k: 0.5}, yScale: 1},
		{frame: k.turn, p: {k: 0.5}}, {frame: k.flat, p: {k: 0}}, {frame: k.flat + 24, p: {k: 0}}, {frame: k.drops, p: {k: -0.5}},
		{frame: k.growth, p: {k: -0.5}}, {frame: k.back, p: {k: 0.5}},
		{frame: k.every, yScale: 1}, {frame: k.every + 44, yScale: -1}, {frame: k.but + 6, yScale: -1}, {frame: k.models, yScale: 1},
	];
	const st = fnStateAt(EXPF, TL, f);
	const kv = st.params.k;
	const neg = st.yScale < 0;
	const flatTag = vis(f, k.flat, k.drops, 10);
	return (
		<>
			<SceneHeading text="Growth, decay and the asymptote" at={4} size={56} />
			<FunctionSimulator x={G4.x} y={G4.y} width={G4.w} height={G4.h} window={WIN4} family={EXPF} timeline={TL} color={INK} at={-30}
				xTicks={[-4, -2, 2, 4].map(v => ({value: v, label: v < 0 ? `−${-v}` : String(v)}))} yTicks={[-15, -10, -5, 5, 10, 15].map(v => ({value: v, label: v < 0 ? `−${-v}` : String(v)}))} xLabel="t" yLabel="Q"
				point={{at: -30}}
				curves={[{fn: X => 2 * Math.exp(-0.5 * X), at: k.models + 10, color: INK, dash: 'none', width: 6}]}
				regions={[{x: [0, 4.3], y: [0, 16.5], color: '#f8e8c8', opacity: 0.75, at: k.posA}]}
				overlay={g => {
					const set = st.settled;
					const P = g.toFrame(0, st.Y);
					const so = vis(f, k.drops + 8, k.growth, 12);
					const asym = prog(f, k.so, 14);
					const tail = vis(f, k.back, k.neg, 14);
					const L0 = g.toFrame(WIN4.x[0], 0), L1 = g.toFrame(WIN4.x[1], 0);
					return <FrameSvg>
						{tail > 0.001 ? <path d={pathG(g, X => 2 * Math.exp(0.5 * X), -4.2, -1.2)} stroke="#c9b8e6" strokeWidth={22} strokeLinecap="round" fill="none" opacity={0.75 * tail} /> : null}
						{asym > 0.001 ? <line x1={L0[0]} x2={L1[0]} y1={L0[1]} y2={L1[1]} stroke={GREY} strokeWidth={7} strokeDasharray="18 12" opacity={asym} /> : null}
						{so > 0.001 ? [0, 2, 4].map(X => <line key={X} {...segG(g, X, 2 * Math.exp(-0.5 * X), -Math.exp(-0.5 * X), 70)} stroke={VIOLET} strokeWidth={7} strokeLinecap="round" opacity={so} />) : null}
						<Ring p={P} r={30} o={set} color={AMB} />
						<text x={P[0] + 40} y={P[1] + (neg ? 44 : -22)} opacity={set} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: '#7a4600'}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{neg ? 'A = −2' : 'A = 2'}</text>
						{flatTag > 0.001 ? <text x={g.toFrame(1.4, 2)[0]} y={g.toFrame(1.4, 2)[1] - 26} opacity={flatTag} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: INK}} stroke={CARD} strokeWidth={8} paintOrder="stroke">k = 0: Q = 2, constant</text> : null}
						{asym > 0.001 ? <text x={L1[0] - 10} y={L1[1] + 50} textAnchor="end" opacity={prog(f, k.asym, 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: INK_SOFT}} stroke={CARD} strokeWidth={8} paintOrder="stroke">asymptote Q = 0</text> : null}
					</FrameSvg>;
				}} />
			<HandTag x={500} y={300} text="reflection in the t-axis" at={k.reflects} out={k.but} size={44} color={INK} />
			<HandTag x={760} y={200} text="models: A > 0, t ≥ 0" at={k.posA} size={44} color={AMB} />
			{/* right column */}
			<ParameterSlider x={RX4} y={150} width={330} symbol="k" role="a" value={kv} min={-0.5} max={0.5} ticks={[{value: -0.5, label: '−½'}, {value: 0, label: '0'}, {value: 0.5, label: '½'}]} at={-30} digits={2} />
			<Line x={RX4} y={300} at={-30} size={52}>Q = <Aa>{neg ? '−2' : '2'}</Aa><Ex><Kb>k</Kb>t</Ex></Line>
			<Line x={RX4} y={384} at={k.flat} size={36} color={GREY_INK} weight={700}><Kb>k = 0</Kb>: a flat line, Q = 2 for every t</Line>
			<Line x={RX4} y={444} at={k.positive} size={38}><Ex><Kb>k</Kb>t</Ex> &gt; 0 for every t, so</Line>
			<Line x={RX4} y={500} at={k.asym} size={44}>Q = 0 is an asymptote <span style={{fontSize: 34, color: INK_SOFT}}>(k ≠ 0)</span></Line>
			{/* the car: never quite $0 */}
			{f < k.still ? <div style={{position: 'absolute', inset: 0, opacity: vis(f, k.never, k.still - 14, 14)}}>
				<div style={{position: 'absolute', left: RX4, top: 580, width: 720, height: 380, background: CARD, borderRadius: 18, border: '2.5px solid rgba(60,45,20,0.10)'}} />
				<CarGraph g={{x: RX4 + 10, y: 610, w: 700, h: 350}} stub0={0} newLabel={0} readout={0} point0={0} curve={{upTo: 14}} tickSize={28} />
				<HandTag x={RX4 + 330} y={650} text="the car: never quite $0" at={k.never} size={42} color={INK} />
			</div> : null}
			<Line x={RX4} y={610} at={k.still} size={42}><V><DQ /></V> = <Kb>k</Kb>(<Aa>−2</Aa><Ex><Kb>k</Kb>t</Ex>) = <Kb>k</Kb>Q</Line>
			<Line x={RX4} y={720} at={k.same} size={38} color={GREY_INK} weight={700}>same asymptote, Q = 0</Line>
			<BoxCard x={RX4} y={800} at={k.but} size={40} border={AMB} bw={4}>money or mass can't be negative:<br /><Aa>A &gt; 0</Aa> and t ≥ 0</BoxCard>
		</>
	);
};

// ---------- 5 and 6. the town: k from data, then the time ----------
const G5 = {x: 60, y: 200, w: 930, h: 720};
const WIN5 = {x: [-1, 23] as [number, number], y: [-1200, 23500] as [number, number]};
const TOWN = {f: (t: number) => town(t), df: (t: number) => K_TOWN * town(t)};
const YEARS = [0, 5, 10, 15, 20].map(v => ({value: v, label: String(v), sub: String(2010 + v)}));
const POP_Y = [5000, 10000, 15000, 20000].map(v => ({value: v, label: `${v / 1000},000`}));
const TownGraph: React.FC<{drawAt?: number; overlay?: (g: FnGeometry) => React.ReactNode}> = ({drawAt, overlay}) => (
	<FunctionSimulator x={G5.x} y={G5.y} width={G5.w} height={G5.h} window={WIN5} family={TOWN} timeline={[{frame: 0, x: 0}]} color={INK} at={-30}
		draw={drawAt !== undefined ? {at: drawAt, dur: 30} : undefined} xTicks={YEARS} yTicks={POP_Y} xLabel="t (years after 2010)" yLabel="P (people)"
		overlay={g => <FrameSvg>
			{[[0, 10000], [5, 12000]].map(([t, v]) => {const p = g.toFrame(t, v); return <circle key={t} cx={p[0]} cy={p[1]} r={13} fill={INK} stroke={CARD} strokeWidth={4} />;})}
			{overlay ? overlay(g) : null}
		</FrameSvg>} />
);
const RX5 = 1020;
export const S05: React.FC = () => {
	const f = useCurrentFrame();
	const k = K5;
	return (
		<>
			<SceneHeading text="When will the population reach 20,000?" at={4} size={56} />
			<TownGraph drawAt={k.year} overlay={g => <>
				<Ring p={g.toFrame(0, 10000)} r={30} o={prog(f, k.a, 12)} color={AMB} />
				<Ring p={g.toFrame(5, 12000)} r={30} o={prog(f, k.at5, 12)} color={INK} />
				<line x1={g.toFrame(0, 20000)[0]} x2={g.toFrame(23, 20000)[0]} y1={g.toFrame(0, 20000)[1]} y2={g.toFrame(0, 20000)[1]} stroke={GREY} strokeWidth={5} strokeDasharray="16 10" opacity={prog(f, k.when, 14)} />
				<text x={g.toFrame(0, 20000)[0] + 20} y={g.toFrame(0, 20000)[1] - 16} opacity={prog(f, k.when, 14)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: INK}} stroke={CARD} strokeWidth={8} paintOrder="stroke">P = 20,000: when?</text>
				<text x={g.toFrame(0, 10000)[0] + 44} y={g.toFrame(0, 10000)[1] + 56} opacity={prog(f, k.a, 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: '#7a4600'}} stroke={CARD} strokeWidth={8} paintOrder="stroke">A = 10,000</text>
				<text x={g.toFrame(5, 12000)[0] + 30} y={g.toFrame(5, 12000)[1] - 30} opacity={prog(f, k.twelve, 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: INK}} stroke={CARD} strokeWidth={8} paintOrder="stroke">12,000 at t = 5</text>
				<text x={g.toFrame(15, 15500)[0]} y={g.toFrame(15, 15500)[1]} textAnchor="middle" opacity={1 - prog(f, k.year, 12)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: INK_SOFT}} stroke={CARD} strokeWidth={8} paintOrder="stroke">curve: once k is known</text>
			</>} />
			<Line x={RX5} y={150} at={-30} size={44}><V><DQ q="P" /></V> = <Kb>k</Kb>P, so P = <Aa>A</Aa><Ex><Kb>k</Kb>t</Ex></Line>
			<Card x={RX5} y={250} w={870} at={-30} pad="10px 28px 12px">
				<CardTitle>Given</CardTitle>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, lineHeight: 1.3}}>10,000 people in 2010</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, lineHeight: 1.3}}>12,000 people in 2015</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 36, lineHeight: 1.3, opacity: prog(f, k.let, 12)}}>t = years after 2010, so <Aa>A = 10,000</Aa></div>
			</Card>
			<WorkingRows x={RX5 - 20} y={500} w={890} size={52} oldSize={40} gap={6} rows={[
				{left: 'P', right: <><Aa>10000</Aa><Ex><Kb>k</Kb>t</Ex></>, at: k.a, keep: true},
				{left: '12000', right: <><Aa>10000</Aa><Ex>5<Kb>k</Kb></Ex></>, at: k.at5},
				{left: <Ex>5<Kb>k</Kb></Ex>, right: '1.2', at: k.e5k},
				{left: <>5<Kb>k</Kb></>, right: 'ln 1.2', at: k.fivek},
				{left: <Kb>k</Kb>, right: <><Kb><Frac n="ln 1.2" d="5" /></Kb>  <Approx>≈ 0.0365 per year</Approx></>, at: k.so, keep: true},
			]} />
			<BoxCard x={RX5} y={770} w={860} at={k.let} out={k.e5k - 6} size={38} border={BLUE}>2010 gives <Aa>A</Aa>; the 2015 value is the data point that fixes <Kb>k</Kb></BoxCard>
		</>
	);
};

export const S06: React.FC = () => {
	const f = useCurrentFrame();
	const k = K6;
	const lvl = 1;
	return (
		<>
			<SceneHeading text="Solving for the time" at={4} size={56} />
			<TownGraph overlay={g => {
				const L0 = g.toFrame(0, 20000), L1 = g.toFrame(23, 20000), M = g.toFrame(T_TOWN, 20000), Z = g.toFrame(T_TOWN, 0);
				const mo = prog(f, k.about, 12);
				return <>
					<line x1={L0[0]} x2={L0[0] + (L1[0] - L0[0]) * lvl} y1={L0[1]} y2={L1[1]} stroke={GREY} strokeWidth={5} strokeDasharray="16 10" />
					<text x={L0[0] + 20} y={L0[1] - 16} opacity={lvl} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: INK}} stroke={CARD} strokeWidth={8} paintOrder="stroke">P = 20,000: when?</text>
					<line x1={M[0]} x2={Z[0]} y1={M[1]} y2={Z[1]} stroke={GREEN} strokeWidth={4} strokeDasharray="10 8" opacity={mo} />
					<Ring p={M} r={30} o={mo} color={GREEN} />
					<text x={M[0] - 20} y={Z[1] - 20} textAnchor="end" opacity={mo} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: GREEN}} stroke={CARD} strokeWidth={8} paintOrder="stroke">t ≈ 19.0</text>
				</>;
			}} />
			<BoxCard x={RX5} y={150} at={-30} size={44} border={BLUE} bw={4}>P = <Aa>10000</Aa><Ex><Kb>k</Kb>t</Ex>,   <Kb>k = <Frac n="ln 1.2" d="5" /></Kb></BoxCard>
			<WorkingRows x={RX5 - 20} y={300} w={890} size={52} oldSize={40} gap={6} rows={[
				{left: '20000', right: <><Aa>10000</Aa><Ex><Kb>k</Kb>t</Ex></>, at: k.now},
				{left: <Ex><Kb>k</Kb>t</Ex>, right: '2', at: k.div + 20},
				{left: <><Kb>k</Kb>t</>, right: 'ln 2', at: k.kt},
				{left: 't', right: <Frac n="ln 2" d={<Kb>k</Kb>} />, at: k.t},
				{right: <><Frac n="5 ln 2" d="ln 1.2" />  <Approx>≈ 19.0 years</Approx></>, at: k.thats, keep: true},
			]} />
			<BoxCard x={RX5} y={690} w={860} at={-30} out={k.during - 8} size={40} border={BLUE}>same steps as for k: divide by 10000, then take ln of both sides</BoxCard>
			<AnswerBox x={RX5} y={690} at={k.during} size={38}>{'during 2029 (about 19.0 years after 2010),\nif the growth stays proportional'}</AnswerBox>
			<MistakeCard x={RX5} y={818} w={880} at={k.keep} size={38} wrong={<>rounded k = 0.0365: t ≈ 18.990</>} caption="keep k exact: 19.009" />
		</>
	);
};

// ---------- 7. decay from a half-life ----------
const G7 = {x: 20, y: 200, w: 960, h: 720};
const WIN7 = {x: [-2, 42] as [number, number], y: [-12, 232] as [number, number]};
const SUB = {f: (t: number) => sub(t), df: (t: number) => K_SUB * sub(t)};
export const S07: React.FC = () => {
	const f = useCurrentFrame();
	const k = K7;
	const out = k.after30 - 6;
	return (
		<>
			<SceneHeading text="Decay from a half-life" at={4} size={56} />
			<FunctionSimulator x={G7.x} y={G7.y} width={G7.w} height={G7.h} window={WIN7} family={SUB} timeline={[{frame: 0, x: 0}]} color={INK} at={-30}
				draw={{at: k.decay, dur: 36}} xTicks={[12, 24, 30, 36]} yTicks={[50, 100, 150, 200]} xLabel="t (years)" yLabel="Q (grams)"
				overlay={g => {
					const A0 = g.toFrame(0, 200), H = g.toFrame(12, 100), P30 = g.toFrame(30, sub(30)), Z30 = g.toFrame(30, 0);
					const ho = prog(f, k.halves, 12), ao = prog(f, k.about, 12);
					const L0 = g.toFrame(0, 0), L1 = g.toFrame(42, 0);
					return <FrameSvg>
						<line x1={L0[0]} x2={L1[0]} y1={L0[1]} y2={L1[1]} stroke={GREY} strokeWidth={7} strokeDasharray="18 12" opacity={prog(f, k.decay + 20, 14)} />
						<text x={L1[0] - 10} y={L1[1] - 18} textAnchor="end" opacity={prog(f, k.decay + 20, 14)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: INK_SOFT}} stroke={CARD} strokeWidth={8} paintOrder="stroke">asymptote Q = 0</text>
						<circle cx={A0[0]} cy={A0[1]} r={13} fill={INK} stroke={CARD} strokeWidth={4} />
						<Ring p={A0} r={30} o={prog(f, k.start, 12)} color={AMB} />
						<text x={A0[0] + 40} y={A0[1] - 14} opacity={prog(f, k.start, 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: '#7a4600'}} stroke={CARD} strokeWidth={8} paintOrder="stroke">A = 200 g</text>
						<line x1={Z30[0]} x2={Z30[0]} y1={Z30[1]} y2={g.toFrame(30, 205)[1]} stroke={GREY} strokeWidth={4} strokeDasharray="12 10" opacity={1 - ao} />
						<text x={Z30[0]} y={g.toFrame(30, 212)[1]} textAnchor="middle" opacity={1 - ao} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, fill: INK}} stroke={CARD} strokeWidth={8} paintOrder="stroke">after 30 years?</text>
						<g opacity={ho}>
							<line x1={A0[0]} x2={H[0]} y1={A0[1]} y2={A0[1]} stroke={GREY} strokeWidth={4} strokeDasharray="10 8" />
							<path d={`M${H[0]},${A0[1] + 8} V${H[1] - 26} M${H[0] - 14},${H[1] - 44} L${H[0]},${H[1] - 26} L${H[0] + 14},${H[1] - 44}`} stroke={BLUE} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" />
							<text x={H[0] + 26} y={(A0[1] + H[1]) / 2 + 14} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, fill: BLUE}} stroke={CARD} strokeWidth={8} paintOrder="stroke">× ½ in 12 years</text>
						</g>
						<g opacity={ho}>
							<line x1={H[0]} x2={H[0]} y1={H[1]} y2={g.toFrame(12, 0)[1]} stroke={GREY} strokeWidth={4} strokeDasharray="10 8" />
							<circle cx={H[0]} cy={H[1]} r={13} fill={INK} stroke={CARD} strokeWidth={4} />
							<Ring p={H} r={30} color={INK} />
						</g>
						<g opacity={ao}>
							<line x1={P30[0]} x2={Z30[0]} y1={P30[1]} y2={Z30[1]} stroke={GREEN} strokeWidth={4} strokeDasharray="10 8" />
							<circle cx={P30[0]} cy={P30[1]} r={13} fill={GREEN} stroke={CARD} strokeWidth={4} />
							<Ring p={P30} r={30} color={GREEN} />
							<text x={P30[0] + 30} y={P30[1] - 30} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: GREEN}} stroke={CARD} strokeWidth={8} paintOrder="stroke">≈ 35.4 g</text>
						</g>
					</FrameSvg>;
				}} />
			
			<HandTag x={480} y={420} text="k < 0: decay" at={k.decay} size={46} color={BLUE} />
			<Line x={RX5} y={150} at={-30} size={44}><V><DQ /></V> = <Kb>k</Kb>Q, so Q = <Aa>A</Aa><Ex><Kb>k</Kb>t</Ex></Line>
			<Card x={RX5} y={250} w={870} at={-30} pad="10px 28px 12px">
				<CardTitle>Given</CardTitle>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 42, lineHeight: 1.3}}><Aa>A = 200 g</Aa>,   half-life 12 years</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, lineHeight: 1.3, opacity: prog(f, k.means, 12)}}>every 12 years, the amount halves</div>
			</Card>
			<WorkingRows x={RX5 - 20} y={440} w={890} size={52} oldSize={40} gap={6} rows={[
				{left: 'Q', right: <><Aa>200</Aa><Ex><Kb>k</Kb>t</Ex></>, at: k.start, out},
				{left: '100', right: <><Aa>200</Aa><Ex>12<Kb>k</Kb></Ex></>, at: k.so, out},
				{left: <Ex>12<Kb>k</Kb></Ex>, right: '½', at: k.gives, out},
				{left: <>12<Kb>k</Kb></>, right: 'ln ½ = −ln 2', at: k.twelvek, out},
				{left: <Kb>k</Kb>, right: <><Kb><MarkSpan kind="circle" at={k.sign} color={BLUE} width={5}>−</MarkSpan><Frac n="ln 2" d="12" /></Kb>  <Approx>≈ −0.0578 per year</Approx></>, at: k.k, keep: true},
				{left: 'Q(30)', right: <><Aa>200</Aa><Ex>30<Kb>k</Kb></Ex></>, at: k.after30},
				{right: <><Aa>200</Aa> × 2<Ex>−5/2</Ex></>, at: k.which},
				{right: <>25√2  <Approx>≈ 35.4 g</Approx></>, at: k.about},
			]} />
			<BoxCard x={RX5} y={790} w={860} at={k.halves} out={k.k - 8} size={38} border={BLUE}>the half-life is a data point: Q(12) = 100</BoxCard>
			<AnswerBox x={RX5} y={830} at={k.grams} size={38}>{'k = −(ln 2)/12 per year;  about 35.4 g after 30 years'}</AnswerBox>
		</>
	);
};
