// Scenes 7 to 12: endpoints carry nothing (continuous) against the die's endpoints (discrete); the CDF as a running
// total traced live from the histogram, F(0.4) − F(0.2) = 0.6; why F never goes down; F(x) = x²/9 checked and
// sketched (and plotted by an app), with a crossed straight chord; probabilities from it (1/3, 5/9, 0); the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {CdfSubtraction, CdfTracer, FrameSvg, ProbabilityBars, SceneHeading, kf, makePlot, smooth} from '../../math/studio';
import {K7, K8, K9, K10, K11, K12} from './cuemap';
import {AREA, AnswerBox, AppPanel, Blocks, BoxCard, CDF, Chip, DATA_R, Display, F9, F9Plot, F9_WIN, FDATA, Framed, FramedCard, GOOD, GREY, Hand, INK, MODEL, RedDie, Row, Slip, Task, ZoomWindow, f9Ticks, timeTicks} from './parts';

// ---------- 7. endpoints don't matter ----------
const PB = {x: 40, y: 200, w: 900, h: 600} as const;
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const sw = prog(fr, k.discrete - 6, 18);
	const sel = fr >= k.strictly ? [2, 3] : fr >= k.both ? [1, 2, 3, 4] : [];
	const glow = (i: number) => (fr >= k.diff + i * 10 && fr < k.diff + i * 10 + 22 ? AREA.ink : INK);
	const forms = ['P(a < X < b)', '= P(a ≤ X < b)', '= P(a < X ≤ b)', '= P(a ≤ X ≤ b)'];
	const g = {L: 30, slot: (PB.w - 50) / 6, T: 56, B: 96};
	const pulse = fr >= k.each ? 0.5 + 0.5 * Math.cos((fr - k.each) / 3) : 0;
	return (
		<>
			<SceneHeading text="Endpoints don't matter (for continuous X)" at={4} size={52} />
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<ZoomWindow x={PB.x} y={PB.y} w={PB.w} h={PB.h} width={0.02} ab={1} />
				<Hand x={96} y={830} at={k.ends} size={42} color={AREA.ink} w={860}>ends a and b: single values, width 0</Hand>
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<ProbabilityBars x={PB.x} y={PB.y} width={PB.w} height={PB.h} labels={['1', '2', '3', '4', '5', '6']} values={Array(6).fill(1 / 6)} max={0.3} role="b"
					roles={[0, 1, 2, 3, 4, 5].map(i => (sel.includes(i) ? 'k' : undefined))} valueText={() => '1/6'} xLabel="X: a fair die's score" />
				{pulse > 0 ? <FrameSvg>{[1, 4].map(i => {const cx = PB.x + g.L + (i + 0.5) * g.slot, bw = g.slot * 0.66, ph = PB.h - g.T - g.B, top = PB.y + g.T + ph - (1 / 6 / 0.3) * ph; return <rect key={i} x={cx - bw / 2 - 10} y={top - 60} width={bw + 20} height={PB.y + g.T + ph - top + 70} rx={12} fill="none" stroke={AREA.stroke} strokeWidth={7} opacity={pulse} />;})}</FrameSvg> : null}
				<RedDie x={700} y={150} w={230} />
				<Hand x={130} y={250} at={k.discrete} size={40} color={MODEL.ink}>discrete: a fair die</Hand>
			</div> : null}
			{forms.map((t, i) => <Row key={i} x={1000} y={170 + i * 76} at={-30 + i * 4} size={46} color={glow(i)}>{t}</Row>)}
			<Chip x={1490} y={170} at={-30} size={36} color={INK}>X continuous</Chip>
			<Row x={1000} y={490} at={k.ends} size={38} color={GREY}>P(X = a) = P(X = b) = 0</Row>
			<Hand x={1000} y={556} at={k.diff} size={46} color={AREA.ink}>ends carry nothing</Hand>
			<Row x={1000} y={680} at={k.four} size={46}>P(2 ≤ X ≤ 5) = <span style={{color: AREA.ink}}>4/6</span></Row>
			<Row x={1000} y={760} at={k.two} size={46}>P(2 &lt; X &lt; 5) = <span style={{color: AREA.ink}}>2/6</span></Row>
			<Hand x={1000} y={846} at={k.each} size={42} color={MODEL.ink} w={860}>1/6 each: discrete ends carry probability</Hand>
		</>
	);
};

// ---------- 8 and 9. the CDF as a running total ----------
const TR = {x: 40, y: 150, width: 1180, heightTop: 400, heightBottom: 370, gap: 16} as const;
const TOP = makePlot(TR.x, TR.y, TR.width, TR.heightTop, {x: [0, 0.7], y: [0, 1.1]});
const BOT = makePlot(TR.x, TR.y + TR.heightTop + TR.gap, TR.width, TR.heightBottom, {x: [0, 0.7], y: [0, 4]});
const Tracer: React.FC<{marker: number}> = ({marker}) => (<>
	<CdfTracer x={TR.x} y={TR.y} width={TR.width} heightTop={TR.heightTop} heightBottom={TR.heightBottom} gap={TR.gap} windowX={[0, 0.7]} yTop={[0, 1.1]} yBottom={[0, 4]}
		density={() => 0} bars={{edges: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6], counts: [20, 50, 70, 40, 20]}} marker={marker} xTicks={timeTicks} yTopTicks={[0.5, 1]} yBottomTicks={[]}
		xLabel="reaction time x (s)" bottomLabel="" topLabel="F(x) = P(X ≤ x)" at={-30} />
	<Hand x={BOT.pf(0.6, 0)[0] + 4} y={BOT.pf(0, 3.3)[1]} at={-30} size={30} color={DATA_R.ink}>histogram</Hand>
</>);
const Lbl: React.FC<{x: number; y: number; o: number; size?: number; color?: string; hand?: boolean; anchor?: 'start' | 'middle' | 'end'; children: React.ReactNode}> = ({x, y, o, size = 34, color = CDF, hand = false, anchor = 'end', children}) => (o <= 0.01 ? null :
	<text x={x} y={y} textAnchor={anchor} opacity={o} style={{fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size, fill: color}} stroke="#fffdf8" strokeWidth={8} paintOrder="stroke">{children}</text>);
const ENDS: [number, number, string][] = [[0.2, 0.1, '0.1'], [0.3, 0.35, '0.35'], [0.4, 0.7, '0.7'], [0.5, 0.9, '0.9'], [0.6, 1, '1']];
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const marker = kf(fr, [[0, 0.1], [k.add, 0.1], [k.p1, 0.2], [k.p35, 0.3], [k.p7, 0.4], [k.p9, 0.5], [k.one1, 0.6], [k.one1 + 26, 0.7]]);
	const br = prog(fr, k.minus, 16);
	return (
		<>
			<SceneHeading text="One function holds every interval" at={4} size={48} />
			<Tracer marker={marker} />
			<Blocks x={150} y={206} w={300} />
			<ManyIntervals at={k.there} out={k.is} />
			<Hand x={TOP.pf(0.3, 0)[0]} y={TOP.pf(0, 0.95)[1]} at={k.one} out={k.p1} size={44} color={CDF}>one function holds them all</Hand>
			<FrameSvg>
				{ENDS.map(([x, v, t]) => {const o = prog(fr, [k.p1, k.p35, k.p7, k.p9, k.one1][ENDS.findIndex(e => e[0] === x)], 10); const [px, py] = TOP.pf(x, v); return o > 0 ? <g key={x} opacity={o}><circle cx={px} cy={py} r={12} fill={CDF} stroke="#fffdf8" strokeWidth={4} /><Lbl x={px - 16} y={py - 18} o={1}>{t}</Lbl></g> : null;})}
				{br > 0 ? (() => {const [x2, y2] = TOP.pf(0.2, 0.1), [x4, y4] = TOP.pf(0.4, 0.7), bx = x4 + 60; return <g opacity={br}>
					<line x1={x2} x2={bx} y1={y2} y2={y2} stroke={AREA.stroke} strokeWidth={4} strokeDasharray="10 8" />
					<line x1={x4} x2={bx} y1={y4} y2={y4} stroke={AREA.stroke} strokeWidth={4} strokeDasharray="10 8" />
					<path d={`M${bx - 12},${y4} H${bx} V${y2} H${bx - 12}`} fill="none" stroke={AREA.stroke} strokeWidth={6} />
					<Lbl x={bx + 14} y={(y2 + y4) / 2 + 14} o={1} color={AREA.ink} size={44} anchor="start">0.6</Lbl>
				</g>;})() : null}
			</FrameSvg>
			<Hand x={TOP.pf(0.5, 0)[0]} y={TOP.pf(0, 0.3)[1]} at={k.one1 + 30} size={36} color={GREY}>joins assume even spread</Hand>
			<Framed x={1260} y={150} at={k.cdf} size={46}>F(x) = P(X ≤ x)</Framed>
			<Hand x={1260} y={252} at={k.cum} size={42} color={CDF}>cumulative: a running total</Hand>
			<RunBoard marker={marker} />
			<Hand x={1260} y={552} at={k.for} size={34} color={GREY} w={600}>from 200 times: an estimate of F</Hand>
			<AnswerBox x={1260} y={626} at={k.now} size={38}>P(a &lt; X ≤ b) = F(b) − F(a)</AnswerBox>
			<Row x={1270} y={712} at={k.now + 24} size={36} color={GREY}>P(X &gt; a) = 1 − F(a)</Row>
			<Row x={1260} y={790} at={k.f4} size={44}>F(0.4) − F(0.2)</Row>
			<Row x={1260} y={856} at={k.thats} size={46} color={GOOD.ink}>= 0.7 − 0.1 = 0.6</Row>
			<Chip x={1660} y={858} at={k.same} size={30} color={GREY}>as before ✓</Chip>
		</>
	);
};
/** Scene 8's opening: many amber intervals on the histogram's time axis (there are infinitely many). */
const ManyIntervals: React.FC<{at: number; out: number}> = ({at, out}) => {
	const f = useCurrentFrame();
	const iv: [number, number][] = [[0.2, 0.4], [0.15, 0.25], [0.3, 0.55], [0.12, 0.33], [0.42, 0.6], [0.25, 0.38], [0.33, 0.47]];
	return <FrameSvg>{iv.map(([a, b], i) => {const o = prog(f, at + i * 6, 10) * (1 - prog(f, out, 14)); const [xa, y] = BOT.pf(a, 3.7 - i * 0.3), [xb] = BOT.pf(b, 0); return o > 0 ? <path key={i} d={`M${xa},${y + 12} V${y} H${xb} V${y + 12}`} fill="none" stroke={AREA.stroke} strokeWidth={5} opacity={o} /> : null;})}</FrameSvg>;
};
const RunBoard: React.FC<{marker: number}> = ({marker}) => {
	const F = FDATA(marker);
	return <div style={{position: 'absolute', left: 1260, top: 320, width: 600, background: '#fffdf8', borderRadius: 18, boxShadow: '0 14px 32px rgba(60,45,20,0.10)', border: '2.5px solid rgba(60,45,20,0.10)', padding: '12px 26px', boxSizing: 'border-box', display: 'flex', gap: 30}}>
		<div><div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: AREA.ink}}>x (s)</div><div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: AREA.ink, fontVariantNumeric: 'tabular-nums'}}>{marker.toFixed(2)}</div></div>
		<div><div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: CDF}}>F(x) = P(X ≤ x)</div><div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: CDF, fontVariantNumeric: 'tabular-nums'}}>{F.toFixed(3)}</div></div>
	</div>;
};

export const S09: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K9;
	const marker = kf(fr, [[0, 0], [30, 0], [k.range, 0.62], [k.range + 40, 0.7]], false);
	const [bx0, by] = BOT.pf(0, 3.85), [bx1] = BOT.pf(Math.max(0.005, marker), 0);
	const st = prog(fr, k.no, 16);
	return (
		<>
			<SceneHeading text="Why F never goes down" at={4} size={48} />
			<Tracer marker={marker} />
			<FrameSvg>
				{ENDS.map(([x, v, t]) => {const [px, py] = TOP.pf(x, v); return <g key={x}><circle cx={px} cy={py} r={12} fill={CDF} stroke="#fffdf8" strokeWidth={4} /><Lbl x={px - 16} y={py - 18} o={1}>{t}</Lbl></g>;})}
				<path d={`M${bx0},${by + 14} V${by} H${bx1} V${by + 14}`} fill="none" stroke={AREA.stroke} strokeWidth={6} />
				<Lbl x={Math.max(bx0 + 130, bx1 + 14)} y={by + 12} o={1} color={AREA.ink} size={36} anchor="start">X ≤ x</Lbl>
				<Lbl x={TOP.pf(0.02, 0)[0]} y={TOP.pf(0, 0.12)[1]} o={prog(fr, k.starts, 12)} hand size={36} anchor="start">F = 0 at the left</Lbl>
				<Lbl x={TOP.pf(0.69, 0)[0]} y={TOP.pf(0, 0.88)[1]} o={prog(fr, k.range, 12)} hand size={36}>F = 1 beyond the range</Lbl>
				<Lbl x={TOP.pf(0.44, 0)[0]} y={TOP.pf(0, 0.5)[1]} o={st} hand size={36} anchor="start">unbroken: continuous</Lbl>
			</FrameSvg>
			<Framed x={1260} y={150} at={-30} size={46}>F(x) = P(X ≤ x)</Framed>
			<RunBoard marker={marker} />
			<Hand x={1260} y={252} at={k.gain} size={40} color={AREA.ink} w={600}>X ≤ x only gains values</Hand>
			<Hand x={1270} y={552} at={k.so} size={46} color={CDF}>only climbs</Hand>
			<Chip x={1260} y={620} at={k.we} size={38} color={CDF}>non-decreasing: never goes down</Chip>
			{st > 0 ? <Staircase x={1260} y={720} o={st} /> : null}
		</>
	);
};
/** The die's CDF as a grey dashed staircase (jumps of 1/6), small. */
const Staircase: React.FC<{x: number; y: number; o: number}> = ({x, y, o}) => {
	const W = 340, Hh = 200, X = (v: number) => x + 20 + ((v - 0.5) / 6.5) * W, Y = (v: number) => y + Hh - v * (Hh - 20);
	let d = `M${X(0.5)},${Y(0)}`;
	for (let i = 1; i <= 6; i++) d += ` H${X(i)} M${X(i)},${Y(i / 6)}`;
	d += ` H${X(7)}`;
	return <>
		<FrameSvg style={{opacity: o}}>
			<rect x={x} y={y - 16} width={600} height={Hh + 64} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.12)" strokeWidth={2.5} />
			<line x1={X(0.5)} x2={X(7)} y1={y + Hh} y2={y + Hh} stroke={INK} strokeWidth={3} />
			<path d={d} stroke={GREY} strokeWidth={5} strokeDasharray="12 8" fill="none" />
			{[1, 2, 3, 4, 5, 6].map(i => <circle key={i} cx={X(i)} cy={Y(i / 6)} r={7} fill={GREY} />)}
		</FrameSvg>
		<Hand x={x + 380} y={y + 30} at={-30} size={40} color={GREY} w={210}>die's F: jumps (discrete)</Hand>
	</>;
};

// ---------- 10. a CDF from a formula: x²/9 ----------
const GP = {x: 40, y: 300, w: 1000, h: 660} as const;
const GIVEN = <><div style={{color: CDF, fontWeight: 800}}>F(x) = 0 for x &lt; 0</div><div style={{color: CDF, fontWeight: 800}}>F(x) = x²/9 for 0 ≤ x ≤ 3</div><div style={{color: CDF, fontWeight: 800}}>F(x) = 1 for x &gt; 3</div></>;
export const S10: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K10;
	const appAt = k.point + 37;
	const draw = fr < k.graph ? -1.0001 : kf(fr, [[k.graph, -1], [k.flat + 12, 0], [k.leaves, 0], [k.point + 10, 3], [k.stays, 3], [k.stays + 26, 4]]);
	const ch = prog(fr, k.not, 12);
	const [mx, my] = makePlot(GP.x, GP.y, GP.w, GP.h, F9_WIN).pf(1.5, 0.5);
	return (
		<>
			<Task x={96} y={150} w={900} at={-30} size={44}>Is this a valid CDF? Graph it.</Task>
			<BoxCard x={1080} y={150} w={780} at={-30} size={38} title="given">{GIVEN}</BoxCard>
			<F9Plot {...GP} guides={1} draw={draw} stub0={prog(fr, k.leaves, 12)} chord={{o: ch, cross: prog(fr, k.not + 18, 10)}} />
			<Hand x={GP.x + 284} y={GP.y + 320} at={k.leaves} out={k.not - 6} size={36} color={AREA.ink}>F′(0) = 0: leaves flat</Hand>
			<Hand x={mx - 260} y={my - 90} at={k.not + 18} size={44} color={MATH_RED}>not straight</Hand>
			<CheckCard x={1080} y={360} w={780} />
			<Row x={1110} y={444} at={k.at0} size={46} dim={prog(fr, k.graph, 14) * 0.3}>F(0) = 0,  F(3) = 9/9 = 1</Row>
			<Hand x={1740} y={448} at={k.join} size={52} color={GOOD.ink}>✓</Hand>
			<Row x={1110} y={574} at={k.deriv} size={46} dim={prog(fr, k.graph, 14) * 0.3}>F′(x) = 2x/9 ≥ 0 on [0, 3]</Row>
			<Hand x={1740} y={578} at={k.never} size={52} color={GOOD.ink}>✓</Hand>
			<Row x={1110} y={704} at={k.never + 30} size={44} color={GOOD.ink}>F runs from 0 up to 1: valid ✓</Row>
			<AppPanel x={1080} y={790} w={520} h={220} at={appAt} draw={smooth(prog(fr, appAt + 10, 30))} />
			<Hand x={1620} y={830} at={appAt + 40} size={38} color={CDF} w={260}>graphing app: same curve</Hand>
		</>
	);
};
const MATH_RED = '#b8322a';
/** Scene 10's checklist: what makes a valid CDF (the rows fill it on their cues). */
const CheckCard: React.FC<{x: number; y: number; w: number}> = ({x, y, w}) => (
	<div style={{position: 'absolute', left: x, top: y, width: w, height: 410, boxSizing: 'border-box', background: '#fffdf8', borderRadius: 18, border: '2.5px solid rgba(60,45,20,0.12)', boxShadow: '0 14px 32px rgba(60,45,20,0.10)', padding: '10px 26px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, color: INK}}>
		<div>1. Do the pieces join (no jump)?</div>
		<div style={{marginTop: 92}}>2. Does F never decrease?</div>
		<div style={{marginTop: 92}}>3. Does F run from 0 to 1?</div>
	</div>
);

// ---------- 11. probabilities from that CDF ----------
export const S11: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K11;
	const m = makePlot(GP.x, GP.y, GP.w, GP.h, F9_WIN);
	const co = prog(fr, k.prob2, 14);
	const [cx, c1] = m.pf(2.6, F9(2)), [, c2] = m.pf(2.6, 1);
	return (
		<>
			<Task x={96} y={150} w={960} at={-30} size={44}>Find P(1 &lt; X ≤ 2), P(X &gt; 2), P(X = 2).</Task>
			<BoxCard x={1080} y={150} w={780} at={-30} size={38} title="given">{GIVEN}</BoxCard>
			<CdfSubtraction x={GP.x} y={GP.y} width={GP.w} height={GP.h} window={F9_WIN} F={F9} a={1} b={2} bracketAt={k.third} xTicks={f9Ticks} yTicks={[{value: 1, label: '1'}]} label={() => '1/3'} at={-30} />
			<FrameSvg>
				<g opacity={co}>
					<line x1={m.pf(2, 0)[0]} x2={cx} y1={c1} y2={c1} stroke={AREA.stroke} strokeWidth={4} strokeDasharray="8 7" />
					<path d={`M${cx - 12},${c2} H${cx} V${c1} H${cx - 12}`} fill="none" stroke={AREA.stroke} strokeWidth={6} />
				</g>
				<Lbl x={cx + 14} y={(c1 + c2) / 2 + 14} o={prog(fr, k.five, 12)} color={AREA.ink} size={42} anchor="start">5/9</Lbl>
				<Lbl x={m.pf(-0.9, 0)[0]} y={m.pf(0, 4 / 9)[1] - 12} o={1} color={CDF} size={32} anchor="start">4/9</Lbl>
				<Lbl x={m.pf(-0.9, 0)[0]} y={m.pf(0, 1 / 9)[1] + 36} o={1} color={CDF} size={32} anchor="start">1/9</Lbl>
			</FrameSvg>
			<Row x={1080} y={410} at={-30} size={44}>P(1 &lt; X ≤ 2) = <span style={{opacity: prog(fr, k.thats, 12)}}>F(2) − F(1)</span></Row>
			<Row x={1080} y={480} at={k.four} size={46}>= 4/9 − 1/9</Row>
			<AnswerBox x={1400} y={470} at={k.third} size={48}>= 1/3</AnswerBox>
			<Row x={1080} y={590} at={-30} size={44}>P(X &gt; 2) = <span style={{opacity: prog(fr, k.prob2, 12)}}>1 − F(2)</span></Row>
			<Row x={1080} y={660} at={k.prob2 + 40} size={46}>= 1 − 4/9</Row>
			<AnswerBox x={1400} y={650} at={k.five} size={48}>= 5/9</AnswerBox>
			<Row x={1080} y={790} at={-30} out={k.zero} size={44}>P(X = 2) = ?</Row>
			<AnswerBox x={1080} y={780} at={k.zero} size={46}>P(X = 2) = 0</AnswerBox>
			<Hand x={1480} y={796} at={k.cont} size={40} color={INK}>X is continuous</Hand>
		</>
	);
};

// ---------- 12. memory aid ----------
export const S12: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K12;
	return (
		<>
			<SceneHeading text="Two lines to remember" at={4} size={48} />
			<FramedCard x={200} y={170} w={1520} h={640} at={-30} />
			<div style={{position: 'absolute', left: 250, top: 196, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GOOD.ink}}>Memory aid</div>
			<Display x={250} y={270} w={360} text="0.3517…" size={56} />
			<IntervalBadge x={250} y={600} />
			<Hand x={680} y={250} at={k.points} size={62} color={INK} w={980}>Points carry nothing; intervals carry the probability.</Hand>
			<Row x={680} y={470} at={k.second} size={44}>Between a and b: <span style={{color: CDF}}>F(bigger) − F(smaller)</span></Row>
			<F9Plot x={680} y={540} w={560} h={260} yTicks={[]} xTicks={[]}>
				{m => {const o = prog(fr, k.smaller, 14), [a1, y1] = m.p(1, F9(1)), [, y2] = m.p(2, F9(2)), bx = m.p(2.4, 0)[0]; return <g opacity={o}>
					<line x1={a1} x2={bx} y1={y1} y2={y1} stroke={AREA.stroke} strokeWidth={3} strokeDasharray="8 6" />
					<path d={`M${bx - 10},${y2} H${bx} V${y1} H${bx - 10}`} fill="none" stroke={AREA.stroke} strokeWidth={5} />
				</g>;}}
			</F9Plot>
			<Hand x={1260} y={640} at={k.smaller} size={38} color={AREA.ink} w={420}>upper minus lower: never negative</Hand>
			<Slip x={200} y={850} at={k.negative} strikeAt={k.wrong} size={42} caption="wrong way round">F(1) − F(2) = −1/3</Slip>
		</>
	);
};
const IntervalBadge: React.FC<{x: number; y: number}> = ({x, y}) => (
	<>
		<FrameSvg>
			<line x1={x} x2={x + 360} y1={y + 40} y2={y + 40} stroke={INK} strokeWidth={4} />
			<rect x={x + 130} y={y + 10} width={100} height={30} fill={AREA.soft} stroke={AREA.stroke} strokeWidth={4} />
			<line x1={x + 60} x2={x + 60} y1={y + 6} y2={y + 40} stroke={GREY} strokeWidth={5} />
		</FrameSvg>
		<Hand x={x} y={y + 60} at={-30} size={34} color={AREA.ink} w={360}>a point: 0; an interval: some</Hand>
	</>
);
export {DATA_R};
