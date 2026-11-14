// Scenes 1 to 4: f14's last frame (the phone in goal mode and the suitcase) and the holiday question (more or less than
// $250?), the model and its conditions (a checklist), solving for the deposit ($235.92 falls 9 cents short: round up
// to $235.93) and a bigger goal over 30 years ($597.31; interest does most of the work).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, GivensStrip, GoalMeter, MarkSpan, Pow, SceneHeading, annuityFV} from '../../math/studio';
import {F14FinalFrame} from '../math-a12-f14/s2';
import {K1, K2, K3, K4} from './cuemap';
import {AnswerBox, BoxCard, Chip, DEP, Frac, Framed, GoalPhone, Hand, INT, POS, Row, Suitcase, Task, m0} from './parts';

const lin = (fr: number, a: number, b: number) => Math.max(0, Math.min(1, (fr - a) / (b - a)));
const B = (s: React.ReactNode) => <span style={{color: DEP.ink}}>{s}</span>;
const A = (s: React.ReactNode) => <span style={{color: INT.ink}}>{s}</span>;
export const FV_MODEL = <>FV = {B('M')} × <Frac n={<>{A('(1 + r)')}<Pow>n</Pow> − 1</>} d="r" /></>;

/** A two-part bar: blue deposits, amber interest, labelled (w px for the total). */
export const ValueSplit: React.FC<{x: number; y: number; w: number; dep: number; int: number; at: number; depText: string; intText: string; h?: number}> = ({x, y, w, dep, int, at, depText, intText, h = 56}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12), g = Math.min(1, lin(f, at, at + 24));
	if (o <= 0.01) return null;
	const wd = (dep / (dep + int)) * w * g, wi = (int / (dep + int)) * w * g;
	const T = (s: number, c: string): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: s, fill: c} as React.CSSProperties);
	return <FrameSvg style={{opacity: o}}>
		<rect x={x} y={y} width={wd} height={h} fill={DEP.stroke} />
		<rect x={x + wd} y={y} width={wi} height={h} fill={INT.stroke} />
		<rect x={x} y={y} width={wd + wi} height={h} fill="none" stroke={INK} strokeWidth={2.5} />
		<text x={x} y={y + h + 40} style={T(32, DEP.ink)}>{depText}</text>
		<text x={x + w} y={y + h + 40} textAnchor="end" style={T(32, INT.ink)}>{intText}</text>
	</FrameSvg>;
};

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const open = 1 - prog(fr, 14, 14);
	const slide = lin(fr, k.holiday, k.holiday + 30);
	const s = slide * slide * (3 - 2 * slide);
	const ph = {x: 640 + (120 - 640) * s, y: 150 + (200 - 150) * s, h: 810 + (720 - 810) * s};
	return (
		<>
			<SceneHeading text="How do annuity problems combine the model and its conditions?" at={30} size={44} />
			<GoalPhone x={ph.x} y={ph.y} h={ph.h} />
			<Suitcase x={1240 + (1440 - 1240) * s} y={380 + (420 - 380) * s} h={540 - 40 * s} />
			<GoalMeter x={760} y={240} width={160} height={640} goal={6000} M={0} r={0.005} t={0} max={6600} readout={{x: 1000, y: 420, width: 400}} at={k.holiday + 10} />
			<Chip x={120} y={900} at={k.quick} size={36} color={INK_SOFT}>6000 ÷ 24 = $250?</Chip>
			<Chip x={1000} y={760} at={k.guess} size={44} color={INK}>more</Chip>
			<Chip x={1200} y={760} at={k.guess + 6} size={44} color={INK}>less</Chip>
			{fr >= k.guess ? <FrameSvg><DrawPath d="M990,760 C 1080,730 1330,730 1370,780 C 1400,840 1260,860 1120,856 C 1010,852 960,820 996,766" at={k.guess} dur={18} color={INT.stroke} width={6} /></FrameSvg> : null}
			{open > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: open}}><F14FinalFrame /></div> : null}
		</>
	);
};

// ---------- 2. the model and its conditions ----------
export const CHECKS = ['0.  starts at $0; r > 0 (if r = 0: FV = nM)', '1.  equal payments at the end of each period', '2.  r and n per payment period', '3.  FV read straight after a payment', '4.  finish as asked: round the right way, whole periods, or growth after payments stop'];
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const at = [k.start, k.equal, k.match, k.read, k.want];
	return (
		<>
			<SceneHeading text="The model and its conditions" at={4} size={52} />
			<GoalPhone x={96} y={170} h={320} bare />
			<GoalMeter x={330} y={190} width={70} height={290} goal={6000} M={0} r={0.005} t={0} max={6600} goalLabel="goal" />
			<Suitcase x={560} y={230} h={250} />
			<Framed x={96} y={560} at={-30} size={60}>{FV_MODEL}</Framed>
			<FrameSvg>
				<line x1={110} x2={830} y1={860} y2={860} stroke={INK} strokeWidth={4} />
				{[1, 2, 3, 4, 5].map(i => <path key={i} d={`M${110 + i * 120},${800} V${852} M${100 + i * 120},${838} L${110 + i * 120},${854} L${120 + i * 120},${838}`} fill="none" stroke={DEP.stroke} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />)}
				<line x1={830} x2={830} y1={860} y2={770} stroke={INK} strokeWidth={4} /><path d="M830,770 l40 12 l-40 12 z" fill={INK} />
				<text x={110} y={900} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: INK}}>0</text>
				<text x={830} y={900} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: INK}}>n</text>
			</FrameSvg>
			<Hand x={960} y={180} at={k.every} size={48} color={INK} w={900}>every problem uses the same model</Hand>
			<BoxCard x={960} y={270} w={900} at={k.check} size={38} title="check the conditions">
				{CHECKS.map((c, i) => <div key={i} style={{opacity: prog(fr, at[i], 12), marginBottom: 8}}>{c}</div>)}
			</BoxCard>
			<Hand x={960} y={740} at={k.rounding} size={38} color={POS}>round to the cent</Hand>
			<Hand x={960} y={796} at={k.whole} size={38} color={POS}>a whole number of periods</Hand>
			<Hand x={960} y={852} at={k.growth} size={38} color={POS}>growth after the payments stop</Hand>
			<Chip x={1500} y={796} at={k.conditions} size={36} color={INK}>one problem for each</Chip>
		</>
	);
};

// ---------- 3. solving for the deposit ----------
const meterT3 = (fr: number) => {
	const k = K3;
	if (fr < k.watch) return 0;
	if (fr < k.three) return 24 * lin(fr, k.watch + 6, k.reaches + 10);
	return 24 * lin(fr, k.three, k.three + 24);
};
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const t = meterT3(fr), M = fr >= k.three ? 235.93 : 235.92;
	return (
		<>
			<Task x={96} y={150} w={1728} at={-30} size={40}>Find the monthly deposit that reaches $6,000 after 2 years at 6% p.a., compounded monthly.</Task>
			<GoalMeter x={120} y={300} width={140} height={600} goal={6000} M={M} r={0.005} t={t} max={6400} readout={{x: 300, y: 420, width: 400}} magnifier={{cx: 500, cy: 780, R: 80, at: k.short, text: g => (g > 1 ? '' : g > 0 ? `${Math.round(g * 100)} cents short` : 'goal reached')}} />
			<BoxCard x={760} y={300} w={600} at={-30} size={34} title="givens">
				<div>FV = $6,000 (goal)</div>
				<div style={{color: INT.ink}}>6% p.a., compounded monthly</div>
				<div>2 years, end of each month</div>
			</BoxCard>
			<Row x={1380} y={310} at={k.r} size={44} color={INT.ink}>r = 0.06 ÷ 12 = 0.005</Row>
			<Row x={1380} y={380} at={k.n} size={44}>n = 2 × 12 = 24</Row>
			<Row x={760} y={570} at={k.six} size={48} dim={prog(fr, k.it, 12) * 0.5} small={40}>6000 = <span style={{display: 'inline-block', border: `3px dashed ${INK_SOFT}`, borderRadius: 10, padding: '0 8px', color: DEP.ink}}>M</span> × <Frac n={<>{A('1.005')}<Pow>24</Pow> − 1</>} d="0.005" /></Row>
			<Hand x={1420} y={610} at={k.fraction} size={36} color={POS}>factor ≈ 25.432</Hand>
			<Row x={760} y={700} at={k.it} size={48}>M = 6000 ÷ 25.4320… <span style={{opacity: prog(fr, k.cents, 10)}}>= $235.92</span></Row>
			<ValueSplit x={760} y={800} w={600} dep={5662.08} int={337.92} at={k.less} depText="deposits ≈ $5,662" intText="interest ≈ $338" h={44} />
			<AnswerBox x={1440} y={760} at={k.three} size={50}>M = $235.93</AnswerBox>
			<Hand x={1440} y={860} at={k.round} size={40} color="#287347">to reach a goal, round up</Hand>
		</>
	);
};

// ---------- 4. a bigger goal, a longer time ----------
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const t = 360 * lin(fr, k.but, k.one + 10);
	const fv = annuityFV(597.31, 0.005, 360), dep = 360 * 597.31;
	return (
		<>
			<Task x={96} y={150} w={1728} at={-30} size={40}>Find the monthly deposit that reaches $600,000 after 30 years at 6% p.a., compounded monthly.</Task>
			<GivensStrip x={96} y={316} size={36} maxW={1060} items={[{content: 'FV = $600,000', role: 'balance', at: -30}, {content: 'r = 0.005', role: 'interest', at: -30}, {content: 'n = 30 × 12 = 360', at: -30}]} />
			<GoalMeter x={120} y={400} width={150} height={500} goal={600000} M={597.31} r={0.005} t={t} max={660000} goalLabel="goal" readout={{x: 290, y: 540, width: 530}} />
			<Chip x={1220} y={316} at={k.dividing} size={36} color={INK_SOFT}><MarkSpan kind="circle" at={k.one} role="mistake" width={5}>600 000 ÷ 360 = $1,666.67?</MarkSpan></Chip>
			<BoxCard x={850} y={400} w={980} at={8} out={k.but - 8} size={44} title="plan">
				<div>Same steps, now with n = 360.</div>
				<div style={{marginTop: 10}}>M = goal ÷ the series factor, then round up.</div>
			</BoxCard>
			<Row x={850} y={400} at={k.but} size={46}>M = 600 000 ÷ 1004.515… = $597.30</Row>
			<Row x={850} y={480} at={k.but + 50} size={40} color={POS}>$597.30 → $599,996.83 (short $3.17)</Row>
			<AnswerBox x={850} y={560} at={k.one} size={52}>M = $597.31</AnswerBox>
			<ValueSplit x={850} y={740} w={970} dep={dep} int={fv - dep} at={k.you} depText={`deposits ≈ ${m0(dep)}`} intText={`interest ≈ ${m0(fv - dep)}`} />
			<Hand x={850} y={880} at={k.thousand} size={44} color={INT.ink}>interest does most of the work</Hand>
		</>
	);
};
