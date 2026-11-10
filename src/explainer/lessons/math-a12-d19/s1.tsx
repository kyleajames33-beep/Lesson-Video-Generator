// Scenes 1, 2, 3 and 3a: the hook (d18's car frame, then half the value, half the rate, with "rate ÷ value"
// fixed at −0.15), the rule dQ/dt = kQ (DepreciationSim: the point glides while its tangent stays −0.15 × its
// height), the substitution check and the car's answer, and the site's savings example with k positive.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, Card, CardTitle, FrameSvg, FunctionSimulator, HandTag, LiveReadoutBoard, InnerSlot, MATH_STRAND_ACCENT, Pow, SceneHeading, WorkingRows, kf, vis} from '../../math/studio';
import {D18FinalFrame} from '../math-a12-d18/s3';
import {AID18} from '../math-a12-d18/s2';
import {K1, K2, K3, K3A} from './cuemap';
import {AMB, AXES_D18, Aa, AnswerBox, Approx, BLUE, BoxCard, CAR_D18, CarGraph, CarPoint, CarRig, Chip, DQ, DepreciationSim, Ex, GREEN, GREY_INK, Kb, Line, Ring, StubInset, T_HALF, Tick, V, VIOLET, carRate, carV, money, sav} from './parts';

const HEAD18 = 'Next: when the rate depends on the amount';
const HEAD1 = 'Growth and decay: when the rate depends on the amount';
/** d19's opening is d18's final frame; from this frame the replica (identical until the heading swap) runs. */
const CUT = 12;

// ---------- 1. hook: half the value, half the rate ----------
const CompareBoard: React.FC<{x: number; y: number; t2: number; col2At: number; glow: number; at: number}> = ({x, y, t2, col2At, glow, at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14), o2 = prog(f, col2At, 12);
	if (o <= 0.001) return null;
	const cols = '214px 196px 196px';
	const cell = (s: string, color: string, op = 1) => <div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 42, color, fontVariantNumeric: 'tabular-nums', textAlign: 'right', opacity: op, whiteSpace: 'pre'}}>{s}</div>;
	const lab = (s: string, color: string) => <div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color, lineHeight: 1.1, whiteSpace: 'pre-line'}}>{s}</div>;
	const row = (k: number, children: React.ReactNode, bg?: string) => <div key={k} style={{display: 'grid', gridTemplateColumns: cols, alignItems: 'center', padding: '6px 10px', margin: '0 -10px', borderTop: k ? '2px solid #ede4d3' : undefined, borderRadius: 12, background: bg}}>{children}</div>;
	return (
		<div style={{position: 'absolute', left: x, top: y, opacity: o, background: CARD, borderRadius: 20, padding: '10px 26px 10px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)'}}>
			{row(0, <>{lab('', INK)}<div style={{textAlign: 'right'}}>{lab('new', INK_SOFT)}</div><div style={{textAlign: 'right', opacity: o2}}>{lab(`after ${t2.toFixed(1)} yr`, INK_SOFT)}</div></>)}
			{row(1, <>{lab('value', INK)}{cell('$30,000', INK)}{cell(money(carV(t2)), INK, o2)}</>)}
			{row(2, <>{lab('rate of change\n($ per year)', VIOLET)}{cell('−$4,500', VIOLET)}{cell(money(carRate(t2)), VIOLET, o2)}</>)}
			{row(3, <>{lab('rate ÷ value\n(per year)', BLUE)}{cell('−0.15', BLUE)}{cell('−0.15', BLUE, o2)}</>, glow > 0.001 ? `rgba(220,234,247,${0.95 * glow})` : undefined)}
		</div>
	);
};
export const S01: React.FC = () => {
	const f = useCurrentFrame();
	const k = K1;
	if (f < CUT) return <D18FinalFrame />;
	const t2 = kf(f, [[k.when, 0], [k.worth15 + 40, T_HALF]]);
	const moving = f >= k.when;
	const ringO = prog(f, k.and, 16);
	return (
		<>
			<SceneHeading text={HEAD18} at={-300} size={56} out={26} />
			{f < 40 ? <div style={{position: 'absolute', right: 40, top: 70, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, color: INK, opacity: 1 - prog(f, 26, 12)}}>{AID18}</div> : null}
			{f >= 36 ? <SceneHeading text={HEAD1} at={38} size={56} /> : null}
			<CarRig x={CAR_D18.x} y={CAR_D18.y} w={CAR_D18.w} value={moving ? carV(t2) : 30000} at={-60} />
			<CarGraph g={AXES_D18} at={-60} readout={1 - prog(f, k.year + 8, 12)} ghost={0.85 * prog(f, k.so, 20)}>
				{M => <>
					{moving ? <CarPoint M={M} t={t2} half={150} /> : null}
					{f >= k.so ? (() => {const p = M.pf(12, carV(12)); return <text x={p[0] + 10} y={p[1] - 40} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 80, fill: INK_SOFT}} opacity={prog(f, k.so + 10, 14)}>?</text>;})() : null}
				</>}
			</CarGraph>
			<CompareBoard x={1226} y={196} t2={t2} col2At={k.when} glow={vis(f, k.half, undefined, 12)} at={k.year + 6} />
			<HandTag x={1450} y={524} text="same −0.15" at={k.half} size={46} color={BLUE} anchor="middle" />
			<HandTag x={1210} y={600} text="half the value, half the rate" at={k.fast + 4} out={k.so} size={40} color={VIOLET} anchor="middle" />
			<Chip x={50} y={196} at={-60} size={46} color={BLUE}>rate = <span style={{color: BLUE}}>15%</span> of the current value</Chip>
			<Chip x={50} y={800} at={-60} size={50} color={MATH_STRAND_ACCENT}>worth after 8 years?</Chip>
			{ringO > 0.001 ? <FrameSvg><ellipse cx={300} cy={842} rx={290} ry={64} fill="none" stroke={MATH_STRAND_ACCENT} strokeWidth={5} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - ringO} /></FrameSvg> : null}
		</>
	);
};

// ---------- 2. a rate proportional to the amount ----------
const G2 = {x: 20, y: 140, w: 1010, h: 640};
const CAR2 = {x: 60, y: 800, w: 400, tag: {dx: 190, dy: -24, sx: 186, sy: 8, size: 52}};
const RX = 1070;
export const S02: React.FC = () => {
	const f = useCurrentFrame();
	const k = K2;
	const t = kf(f, [[k.watch, 0], [k.falls + 40, 14]]);
	return (
		<>
			<SceneHeading text="A rate proportional to the amount" at={4} size={56} />
			<DepreciationSim t={Math.max(0.0001, t)} half={95} graph={G2} car={CAR2} board={{x: RX, y: 140, width: 810}} ratioGlow={[k.watch, k.rule]}>
				{M => {
					const lo = prog(f, k.lower, 12);
					const p = M.pf(9, carV(9));
					return lo > 0.001 && f < k.rule + 120 ? <text x={p[0] + 40} y={p[1] - 110} textAnchor="middle" opacity={lo * (1 - prog(f, k.rule + 100, 14))} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: VIOLET}} stroke={CARD} strokeWidth={8} paintOrder="stroke">lower point, gentler tangent</text> : null;
				}}
			</DepreciationSim>
			<Line x={RX} y={410} at={k.same} size={48}><V>rate</V> = <Kb>−0.15</Kb> × value</Line>
			<BoxCard x={RX} y={490} w={810} at={k.prop} out={k.rule - 8} size={38} border={BLUE}><b>proportional:</b> the rate is always the same multiple of the amount</BoxCard>
			<Line x={RX} y={482} at={k.rule} size={64}><V><DQ /></V> = <Kb>k</Kb>Q</Line>
			<HandTag x={RX + 400} y={540} text="any quantity Q" at={k.rule + 30} out={k.car} size={40} color={INK} />
			<Line x={RX} y={618} at={k.number} size={40}><Kb>k</Kb> = the constant of proportionality</Line>
			<BoxCard x={RX} y={676} at={k.k} size={46} border={BLUE} bw={4}>the car: <Kb>k = −0.15 per year</Kb></BoxCard>
			<Line x={RX} y={756} at={k.because} size={34} color={GREY_INK} weight={700}>($ per year) ÷ $ = per year</Line>
			<StubInset x={RX} y={812} w={400} h={170} grow={false} at={k.falls} caption={<><Kb>k &lt; 0</Kb>: shrinks, slowing</>} />
			<StubInset x={RX + 410} y={812} w={400} h={170} grow at={k.pos} caption={<><Kb>k &gt; 0</Kb>: grows, speeding up</>} />
		</>
	);
};

// ---------- 3. checking Q = Ae^(kt) ----------
const G3 = {x: 20, y: 140, w: 960, h: 620};
const RX3 = 1010;
const QAE = () => <><Aa>A</Aa><Ex><Kb>k</Kb>t</Ex></>;
export const S03: React.FC = () => {
	const f = useCurrentFrame();
	const k = K3;
	const t3 = kf(f, [[k.after, 0], [k.about, 8]]);
	const stage2 = f >= k.car - 6;
	return (
		<>
			<SceneHeading text="Checking the curve by substitution" at={4} size={56} />
			<CarGraph g={G3} stub0={0} newLabel={0} readout={0} point0={0} curve={{upTo: 14}}>
				{M => {
					const P0 = M.pf(0, 30000);
					const ao = prog(f, k.start, 12);
					const P8 = M.pf(8, carV(8));
					return <>
						{f >= k.after ? <CarPoint M={M} t={t3} half={120} /> : <circle cx={P0[0]} cy={P0[1]} r={13} fill={INK} stroke={CARD} strokeWidth={4} />}
						<Ring p={P0} r={30} o={ao} color={AMB} />
						{f >= k.about ? <>
							<line x1={P8[0]} x2={P8[0]} y1={P8[1]} y2={M.pf(8, 0)[1]} stroke="#8a8378" strokeWidth={4} strokeDasharray="10 8" opacity={prog(f, k.about, 12)} />
							<Ring p={P8} r={30} o={prog(f, k.about + 6, 12)} color={GREEN} />
						</> : null}
						{(() => {const p = M.pf(7.5, carV(7.5)); return <text x={p[0] + 30} y={p[1] - 70} opacity={prog(f, k.k + 30, 14)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: INK}} stroke={CARD} strokeWidth={8} paintOrder="stroke">V = 30,000e<tspan dy={-16} fontSize={28}>−0.15t</tspan></text>;})()}
					</>;
				}}
			</CarGraph>
			<HandTag x={150} y={480} text="A = initial value" at={k.start} out={k.after} size={44} color={AMB} />
			<CarRig x={60} y={800} w={400} value={f >= k.after ? carV(t3) : 30000} tag={{dx: 190, dy: -24, sx: 186, sy: 8}} ring={prog(f, k.about, 10)} />
			<Chip x={400} y={186} at={k.earlier} out={k.car - 10} size={36} color="rgba(60,45,20,0.18)">from earlier:  d/dt <Ex><Kb>k</Kb>t</Ex> = <Kb>k</Kb><Ex><Kb>k</Kb>t</Ex></Chip>
			{/* stage 1: the check */}
			<BoxCard x={RX3} y={150} at={-30} out={k.car - 10} size={48}>
				<span style={{display: 'inline-flex', alignItems: 'center', gap: 18}}>the rule:  <DQ /> = <Kb>k</Kb>Q<Tick size={46} o={prog(f, k.eq + 30, 10)} /></span>
			</BoxCard>
			<HandTag x={1290} y={352} text="any A works" at={k.any} out={k.car - 10} size={42} color={AMB} />
			<Card x={RX3} y={430} w={860} at={-30} out={k.so - 8} pad="12px 28px 14px">
				<CardTitle>The check</CardTitle>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, lineHeight: 1.35, color: INK}}>1. differentiate Q = <QAE /></div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, lineHeight: 1.35, color: INK}}>2. is the result <Kb>k</Kb> × Q?</div>
			</Card>
			<WorkingRows x={RX3 - 20} y={320} w={880} size={52} oldSize={40} gap={6} rows={[
				{left: 'Q', right: <QAE />, at: k.q, keep: true, out: k.car - 10},
				{left: <DQ />, right: <><Aa>A</Aa> × <Kb>k</Kb><Ex><Kb>k</Kb>t</Ex></>, at: k.so, out: k.car - 10},
				{right: <><Kb>k</Kb> × <InnerSlot><QAE /></InnerSlot></>, at: k.which, out: k.car - 10},
				{right: <><Kb>k</Kb><span style={{border: '0.07em dashed #8a8378', borderRadius: '0.25em', padding: '0 0.12em'}}>Q</span></>, at: k.eq + 12, answer: true, out: k.car - 10},
				{left: 'Q(0)', right: <><Aa>A</Aa>e<Pow>0</Pow> = <Aa>A</Aa></>, at: k.zero, keep: true, out: k.car - 10},
			]} />
			{/* stage 2: the car's answer */}
			{stage2 ? <>
				<BoxCard x={RX3} y={150} at={k.car} size={40} border={GREEN} bw={4}>Q = <QAE /> obeys <DQ /> = <Kb>k</Kb>Q, and <Aa>A</Aa> = Q(0)</BoxCard>
				<Card x={RX3} y={300} w={860} at={k.car + 4} pad="12px 28px 14px">
					<CardTitle>The car</CardTitle>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, opacity: prog(f, k.a, 12)}}><Aa>A = 30,000</Aa> <span style={{fontSize: 34, color: INK_SOFT}}>dollars</span></div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, opacity: prog(f, k.k, 12)}}><Kb>k = −0.15</Kb> <span style={{fontSize: 34, color: INK_SOFT}}>per year</span></div>
				</Card>
				<Line x={RX3} y={520} at={k.k + 40} size={52} dim={prog(f, k.after, 14)}>V(t) = <Aa>30,000</Aa><Ex><Kb>−0.15</Kb>t</Ex></Line>
				<Line x={RX3} y={610} at={k.after} size={52}>V(8) = <Aa>30,000</Aa><Ex><Kb>−1.2</Kb></Ex>  <Approx>≈ 9035.83</Approx></Line>
				<AnswerBox x={RX3} y={720} at={k.about} size={46}>worth about $9036 after 8 years</AnswerBox>
			</> : null}
		</>
	);
};

// ---------- 3a. the same rule for savings ----------
const GS = {x: 690, y: 150, w: 690, h: 800};
const WIN_S = {x: [-0.6, 14.6] as [number, number], y: [-500, 12800] as [number, number]};
const SAV = {f: (t: number) => sav(t), df: (t: number) => 0.06 * sav(t)};
export const S03A: React.FC = () => {
	const f = useCurrentFrame();
	const k = K3A;
	const x = kf(f, [[k.after, 0], [k.about, 8]]);
	return (
		<>
			<SceneHeading text="The same rule for savings, k positive" at={4} size={56} />
			<CarGraph g={{x: 30, y: 150, w: 640, h: 540}} stub0={0} newLabel={0} readout={0} point0={0} curve={{upTo: 14}} tickSize={28} />
			<HandTag x={330} y={250} text="the car: falls" at={-30} size={40} color={INK} />
			<Line x={60} y={720} at={-30} size={50}>V = <Aa>30,000</Aa><Ex><Kb>−0.15</Kb>t</Ex></Line>
			<Line x={60} y={800} at={k.is} size={50}>B = <Aa>5000</Aa><Ex><Kb>0.06</Kb>t</Ex></Line>
			<HandTag x={60} y={920} text="same rule: k < 0 falls, k > 0 climbs" at={k.pos} size={46} color={BLUE} />
			<FunctionSimulator x={GS.x} y={GS.y} width={GS.w} height={GS.h} window={WIN_S} family={SAV} timeline={[{frame: 0, x}]} color={INK} at={-30}
				draw={{at: k.is, dur: 40}} xTicks={[2, 4, 6, 8, 10, 12, 14]} yTicks={[2000, 4000, 6000, 8000, 10000, 12000].map(v => ({value: v, label: `${v / 1000},000`}))} xLabel="t (years)" yLabel="B (dollars)"
				point={{at: k.five}} tangent={{at: k.five, halfLength: 110}}
				overlay={g => {
					const P8 = g.toFrame(8, sav(8)), Z8 = g.toFrame(8, 0);
					return <FrameSvg>
						<Ring p={g.toFrame(0, 5000)} r={30} o={prog(f, k.five, 12)} color={AMB} />
						<line x1={P8[0]} x2={P8[0]} y1={P8[1]} y2={Z8[1]} stroke="#8a8378" strokeWidth={4} strokeDasharray="10 8" opacity={prog(f, k.about, 12)} />
						<Ring p={P8} r={30} o={prog(f, k.about + 6, 12)} color={GREEN} />
					</FrameSvg>;
				}} />
			<HandTag x={GS.x + 150} y={GS.y + 130} text="savings: climbs" at={k.is + 20} size={40} color={INK} />
			<Card x={1400} y={150} w={490} at={k.five} pad="12px 26px 14px">
				<CardTitle>Savings</CardTitle>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44}}><Aa>A = 5000</Aa> <span style={{fontSize: 32, color: INK_SOFT}}>dollars</span></div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, opacity: prog(f, k.six, 12)}}><Kb>k = 0.06</Kb> <span style={{fontSize: 32, color: INK_SOFT}}>per year</span></div>
			</Card>
			<Line x={1400} y={380} at={k.is} size={46}>B = <Aa>5000</Aa><Ex><Kb>0.06</Kb>t</Ex></Line>
			<Line x={1400} y={452} at={k.that} size={46}>B(8) = <Aa>5000</Aa><Ex><Kb>0.48</Kb></Ex></Line>
			<Line x={1400} y={524} at={k.about} size={36} color={GREY_INK}>≈ 8080.37</Line>
			<AnswerBox x={1400} y={584} at={k.about + 4} size={44}>{'about $8080.37\nafter 8 years'}</AnswerBox>
			<LiveReadoutBoard x={1400} y={750} width={490} at={k.six} inline size={46} labelSize={30} rows={[
				{label: 'rate', value: 0.06 * sav(x), role: 'gradient', format: money, unit: '/yr'},
				{label: 'rate ÷ value', value: 0.06, role: 'a', format: () => '0.06'},
			]} />
		</>
	);
};
