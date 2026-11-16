// Scenes 1 to 5: s05's hump (mode and median both 1), then the cookie (60 chips; f = x/8 climbs to the edge; half the
// chips inside 2.83 cm); the mode as the peak of f (a sliding window); the mode by calculus; a mode at an endpoint; the
// median from F(m) = ½ (the half-cookie circle), with the negative root rejected.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {ClassHistogram, FrameSvg, QuantileReader, SceneHeading, SlidingWindow, kf, makePlot, regionPath, smooth} from '../../math/studio';
import {S05Handoff} from '../math-a12-s05/s3';
import {K1, K2, K3, K4, K5} from './cuemap';
import {AREA, AnswerBox, BoxCard, CDF, Chip, Cookie, DENS, F9Plot, FH, FK, Framed, GOOD, GREY, Hand, INK, MODE, R2, Row, Slip, Table, Task, Tri, fH, fK, xTicksN} from './parts';

const HM = makePlot(96, 170, 1300, 800, {x: [-0.5, 2.5], y: [-0.05, 0.95]});

// ---------- 1. hook ----------
const KH = {x: 980, y: 230, w: 880, h: 560} as const;
const KM = makePlot(KH.x, KH.y, KH.w, KH.h, {x: [0, 4], y: [0, 0.6]});
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const b = prog(fr, k.now - 10, 22);
	const slide = 1 + 0.2727 * smooth(prog(fr, k.both, 30));
	const half = prog(fr, k.both + 20, 14);
	const circ = (R2 * smooth(prog(fr, k.yet, 60)));
	const ar = prog(fr, k.yet + 40, 16);
	return (
		<>
			{b < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - b}}>
				<S05Handoff chip={-300} q1={-300} q2={-300} slide={slide} />
				<FrameSvg style={{opacity: half}}>
					<path d={(() => {const m = {...HM, p: (X: number, Y: number) => HM.pf(X, Y)}; return regionPath(m as typeof HM, fH, 0, 1);})()} fill="rgba(209,143,31,0.28)" />
					<path d={(() => {const m = {...HM, p: (X: number, Y: number) => HM.pf(X, Y)}; return regionPath(m as typeof HM, fH, 1, 2);})()} fill="rgba(31,138,143,0.22)" />
					<text x={HM.pf(1, 0)[0]} y={HM.pf(0, 0.3)[1]} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, fill: INK}} stroke="#fffdf8" strokeWidth={8} paintOrder="stroke">½ | ½</text>
				</FrameSvg>
				<Tri m={HM} x={1} o={half} label="mode 1" />
				<Hand x={HM.pf(1.15, 0)[0]} y={HM.pf(0, 0.86)[1]} at={k.both} size={42} color={INK}>both answers: 1</Hand>
			</div> : null}
			{b > 0 ? <div style={{position: 'absolute', inset: 0, opacity: b}}>
				<SceneHeading text="Mode, median and quartiles of a density" at={k.now} size={50} />
				<Cookie cx={390} cy={580} w={560} pace={{at: k.now + 20, slow: 0, until: k.now + 110}} circle={circ > 0.01 ? {cm: circ} : undefined} readout={{x: 690, y: 640, width: 280}}
					ringGlow={[{a: 0.3, b: 0.6, o: prog(fr, k.outer, 14)}, {a: 3.4, b: 3.7, o: prog(fr, k.outer, 14)}]} ruler={prog(fr, k.dist, 12) * (1 - prog(fr, k.yet, 12))} />
				<Hand x={96} y={240} at={k.now + 30} size={38} color={GREY}>chips spread evenly</Hand>
				<Hand x={690} y={330} at={k.outer} size={38} color={MODE} w={270}>outer rings hold more cookie</Hand>
				<Hand x={690} y={500} at={k.yet + 50} size={44} color={AREA.ink} w={270}>half the cookie</Hand>
				<ClassHistogram x={KH.x} y={KH.y} width={KH.w} height={KH.h} edges={[0, 1, 2, 3, 4]} counts={[4, 11, 21, 24]} density total={60} yMax={0.6} xTicks={[0, 1, 2, 3, 4]} yTicks={[0.2, 0.4]} xLabel="distance from centre, x (cm)" yLabel="density" countLabels={false}
					model={{value: fK, label: 'f(x) = x/8', at: k.dens}} grow={smooth(prog(fr, k.now + 110, 40))} at={k.now + 20}>
					{m => <>
						{[4, 11, 21, 24].map((c, i) => {const [px, py] = m.p(i + 0.5, c / 120); return <text key={i} opacity={prog(fr, k.now + 150, 12)} x={px} y={py + 12} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: '#1f6fb2'}}>{c}</text>;})}
						<path d={regionPath(m, fK, 0, R2)} fill="#f3d9a6" stroke={AREA.stroke} strokeWidth={3} opacity={ar * 0.85} />
					</>}
				</ClassHistogram>
				<Tri m={KM} x={4} o={prog(fr, k.four, 12)} />
				<Hand x={KM.pf(0.15, 0)[0]} y={KM.pf(0, 0.58)[1]} at={k.four} size={40} color={MODE}>highest density: the edge</Hand>
				<Hand x={KH.x + 100} y={KH.y + KH.h + 24} at={k.now + 110} size={32} color={GREY}>illustrative sample: 60 chips</Hand>
				<Row x={KM.pf(0.15, 0)[0]} y={KM.pf(0, 0.47)[1]} at={k.yet + 50} size={36} color={AREA.ink}>½ of the area: 0 to 2.83</Row>
				<Chip x={1080} y={890} at={k.apart} size={30} color={GREY}>the mean is a third kind of middle: a later video</Chip>
			</div> : null}
		</>
	);
};

// ---------- 2. the mode is the peak of f ----------
const W2 = {x: [-0.3, 2.3] as [number, number], y: [0, 1] as [number, number]};
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const c = kf(fr, [[0, 0.2], [k.slide, 0.2], [k.catches, 1.8], [k.near1 - 10, 1], [k.near2 - 10, 0.2], [k.so, 1]]);
	const fo = prog(fr, k.F, 14);
	return (
		<>
			<SceneHeading text="The mode is the peak of f" at={4} size={48} />
			<F9Plot x={40} y={150} w={1100} h={330} win={{x: W2.x, y: [-0.05, 1.15]}} fn={FH} xTicks={xTicksN([1, 2])} yTicks={[{value: 1, label: '1'}]} yLabel="F(x)">
				{m => {const [px, py] = m.p(2, 1); return <circle cx={px} cy={py} r={16 + 6 * fo} fill="none" stroke={MATH_RED} strokeWidth={6} opacity={fo} />;}}
			</F9Plot>
			<SlidingWindow x={40} y={490} width={1100} height={470} window={{x: W2.x, y: [0, 1]}} f={fH} center={c} w={0.2} xTicks={xTicksN([0.5, 1, 1.5, 2])} yTicks={[0.5]} xLabel="x" yLabel="f(x)" readout={{x: 1180, y: 480, width: 520, widthLabel: 'window width', probLabel: 'area caught (probability)', digits: 3}} at={-30} />
			<Framed x={1180} y={160} at={k.mode} size={40}>mode: where f is highest</Framed>
			<Hand x={1180} y={262} at={k.here} size={38} color={INK} w={660}>a narrow window catches the most there</Hand>
			<Hand x={1180} y={360} at={k.near1} size={44} color={DENS.ink}>top of f</Hand>
			<Slip x={1180} y={780} at={k.F} strikeAt={k.only} size={38} caption="F only builds up">maximise F? always the right end</Slip>
		</>
	);
};
const MATH_RED = '#b8322a';

// ---------- 3. finding the mode by calculus ----------
const G3 = {x: 40, y: 300, w: 1000, h: 660} as const;
const W3 = {x: [-0.3, 2.3] as [number, number], y: [-0.05, 1] as [number, number]};
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const t = kf(fr, [[0, 0.3], [k.write, 0.3], [k.one, 1]]);
	const s = (6 - 6 * t) / 4;
	const halves = prog(fr, k.because, 14);
	return (
		<>
			<Task x={96} y={150} w={940} at={-30} size={44}>Find the mode.</Task>
			<BoxCard x={1080} y={150} w={780} at={-30} size={38} title="given"><div style={{color: DENS.ink, fontWeight: 800}}>f(x) = 3x(2 − x)/4 for 0 ≤ x ≤ 2</div><div style={{color: DENS.ink, fontWeight: 800}}>f(x) = 0 elsewhere</div></BoxCard>
			<F9Plot {...G3} win={W3} fn={fH} xTicks={xTicksN([0.5, 1, 1.5, 2])} yTicks={[{value: 0.5, label: '0.5'}]} yLabel="f(x)" color={DENS.stroke}>
				{m => {const [px, py] = m.p(t, fH(t)), d = 0.45, [ax, ay] = m.p(t - d, fH(t) - s * d), [bx, by] = m.p(t + d, fH(t) + s * d); return <>
					<path d={regionPath(m, fH, 0, 1)} fill="rgba(209,143,31,0.28)" opacity={halves} />
					<path d={regionPath(m, fH, 1, 2)} fill="rgba(31,138,143,0.22)" opacity={halves} />
					<line x1={ax} y1={ay} x2={bx} y2={by} stroke={AREA.stroke} strokeWidth={6} opacity={1 - prog(fr, k.because, 14)} />
					<circle cx={px} cy={py} r={11} fill={AREA.stroke} />
				</>;}}
			</F9Plot>
			<Hand x={G3.x + 520} y={G3.y + 40} at={k.one} size={40} color={AREA.ink}>gradient 0</Hand>
			<Tri m={makePlot(G3.x, G3.y, G3.w, G3.h, W3)} x={1} o={prog(fr, k.quarters, 12)} />
			<Row x={1080} y={340} at={k.write} size={44} dim={prog(fr, k.mode, 12) * 0.3}>f(x) = (6x − 3x²)/4</Row>
			<Row x={1080} y={420} at={k.deriv} size={44} dim={prog(fr, k.mode, 12) * 0.3}>f′(x) = (6 − 6x)/4 = 0 ⇒ x = 1</Row>
			<Row x={1080} y={500} at={k.second} size={44}>f″(x) = −3/2 &lt; 0: maximum</Row>
			<AnswerBox x={1080} y={590} at={k.quarters} size={48}>mode = 1, f(1) = 3/4</AnswerBox>
			<Row x={1080} y={700} at={k.median} size={40} color={GREY}>symmetric about 1: median 1</Row>
			<Row x={1080} y={770} at={k.f1} size={40} color={GOOD.ink}>F(1) = (3 − 1)/4 = ½ ✓</Row>
		</>
	);
};

// ---------- 4. a mode at an endpoint ----------
const G4 = {x: 40, y: 160, w: 1000, h: 760} as const;
const W4 = {x: [-0.3, 4.3] as [number, number], y: [-0.03, 0.6] as [number, number]};
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const glow = prog(fr, k.keeps, 14);
	return (
		<>
			<SceneHeading text="A mode at an endpoint" at={4} size={48} />
			<F9Plot {...G4} win={W4} fn={fK} xTicks={xTicksN([1, 2, 3, 4])} yTicks={[{value: 0.5, label: '½'}]} yLabel="f(x) = x/8" color={DENS.stroke} />
			<Tri m={makePlot(G4.x, G4.y, G4.w, G4.h, W4)} x={4} o={prog(fr, k.four, 12)} label="mode 4" />
			<Hand x={G4.x + 200} y={G4.y + 120} at={k.keeps} size={42} color={DENS.ink}>keeps climbing to the edge</Hand>
			<Cookie cx={1680} cy={330} w={340} rim={glow} />
			<Row x={1080} y={170} at={k.cookie} size={40} color={DENS.ink}>f(x) = x/8, 0 ≤ x ≤ 4</Row>
			<Row x={1080} y={240} at={k.deriv} size={44}>f′(x) = 1/8 ≠ 0</Row>
			<Hand x={1080} y={310} at={k.deriv + 30} size={38} color={GREY}>no stationary point</Hand>
			<Table x={1080} y={540} size={40} headW={180} colW={160} at={k.keeps} hl={{col: 1, at: k.four}} rows={[{head: 'x', cells: ['0', '4']}, {head: 'f(x)', cells: ['0', '½'], color: DENS.ink}]} />
			<AnswerBox x={1600} y={560} at={k.four} size={48}>mode = 4</AnswerBox>
			<Hand x={1080} y={700} at={k.check} size={46} color={AREA.ink}>check the ends</Hand>
			<Chip x={1080} y={770} at={k.check + 20} size={32} color={GREY}>like any global maximum</Chip>
			<FlatInset x={1080} y={850} at={k.flat} />
		</>
	);
};
const FlatInset: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	return <>
		<FrameSvg style={{opacity: o}}>
			<line x1={x} x2={x + 240} y1={y + 90} y2={y + 90} stroke={INK} strokeWidth={4} />
			<line x1={x + 40} x2={x + 200} y1={y + 30} y2={y + 30} stroke={DENS.stroke} strokeWidth={7} />
		</FrameSvg>
		<Hand x={x + 270} y={y + 20} at={at} size={38} color={GREY} w={520}>flat: no single mode (a later video)</Hand>
	</>;
};

// ---------- 5. the median: half the area, from F ----------
const Q5 = {x: 40, y: 150, width: 900, heightTop: 380, heightBottom: 360} as const;
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const reach = smooth(prog(fr, k.F, 60, t => t));
	const cm = R2 * reach;
	return (
		<>
			<QuantileReader {...Q5} windowX={[-0.3, 4.3]} F={FK} p={0.5} reach={reach} f={fK} yBottom={[0, 0.6]} xTicks={[1, 2, 3, 4]} yTopTicks={[0.5, 1]} yBottomTicks={[0.5]} xLabel="x (cm)" pLabel={() => '½'} qLabel={() => '2√2'} at={-30} />
			<Cookie cx={1130} cy={320} w={340} circle={cm > 0.01 ? {cm} : undefined} />
			<Row x={1330} y={190} at={k.cookie} size={34} color={AREA.ink}>fraction inside</Row>
			<Row x={1330} y={240} at={k.cookie} size={46} color={AREA.ink}>= x²/16</Row>
			<Hand x={1330} y={320} at={k.root} size={44} color={AREA.ink}>half the cookie</Hand>
			<Row x={960} y={510} at={k.solve} size={44}>median m: F(m) = ½</Row>
			<Row x={960} y={580} at={k.pi} size={40}>F(x) = πx²/(π × 4²) = x²/16</Row>
			<Row x={1520} y={640} at={k.integ} size={32} color={GREY}>(= ∫ t/8 dt, 0 to x)</Row>
			<Row x={960} y={690} at={k.so} size={40}>m²/16 = ½ ⇒ m² = 8 ⇒ m = ±2√2</Row>
			<AnswerBox x={960} y={770} at={k.three} size={46}>m = 2√2 (≈ 2.83 cm)</AnswerBox>
			<Hand x={960} y={876} at={k.neg} size={36} color={MATH_RED} w={420}>−2√2 is outside [0, 4]: rejected</Hand>
			<Slip x={1400} y={860} at={k.reject} strikeAt={k.reject + 14} size={38} caption="one root is outside [0, 4]">m = ±2√2</Slip>
		</>
	);
};
export {CDF, FH, smooth};
