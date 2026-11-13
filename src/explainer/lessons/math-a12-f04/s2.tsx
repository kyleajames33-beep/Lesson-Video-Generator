// Scenes 5 to 9: a theme park's visitors (aₙ = 3500n + 58 500; S₁₀ = 777 500), the first year over 100,000 (n > 83/7,
// so year 12; year 11 is 97,000 and year 12 is 100,500; eleven increases, not twelve), a machine's falling output (the
// model stops at week 61; S₆₀ = 27 450 parts), a young tree after six years (120 + 6 × 45 = 390 cm, the seventh term) and
// the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, GrowingPlate, LiveReadoutBoard, PeriodTimeline, StepCounter, SvgPlate, TermPlot, smooth, usePlatePreload, vis} from '../../math/studio';
import type {PlotMap} from '../../math/studio';
import {K5, K6, K7, K8, K9} from './cuemap';
import {AMBER, AMBER_SOFT, AMBER_STROKE, AnswerBox, Arcs, BLUE, BLUE_SOFT, BoxCard, CheckBars, FramedCard, GREEN, GUM, HILL, Hand, Ladder, POS, RED, Row, SEED, SlipLine, TEAL, TEAL_SOFT, Task, fmt, hillFileY, machine, park, treeH} from './parts';

// ---------- 5. worked example: a theme park ----------
const ParkGivens: React.FC<{out?: number}> = ({out}) => (
	<BoxCard x={96} y={320} w={900} at={6} out={out} size={44} title="givens">
		<div style={{whiteSpace: 'pre'}}>first year: <span style={{color: BLUE, fontWeight: 800}}>62,000 visitors</span></div>
		<div style={{whiteSpace: 'pre'}}>increase: <span style={{color: AMBER, fontWeight: 800}}>3,500 visitors each year</span></div>
	</BoxCard>
);
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	return (
		<>
			<Task x={96} y={150} w={1728} at={0} size={40}>
				<div>(a) Write an expression for the visitors in year n.</div>
				<div>(b) Find the total number of visitors over the first 10 years.</div>
			</Task>
			<ParkGivens />
			<PeriodTimeline x={1130} y={880} tabW={150} gap={30} unit={0.0032} periods={[1, 2, 3, 4].map(n => ({label: `year ${n}`, value: park(n), valueText: fmt(park(n)), at: -30}))}
				arcs={[0, 1, 2].map(i => ({from: i, to: i + 1, label: '+3,500', at: k.more + i * 16}))} />
			<Hand x={690} y={598} at={k.because} out={k.over - 6} size={40} color={AMBER}>year 1: no increase yet →</Hand>
			<Row x={96} y={668} at={k.simp + 110} out={k.over - 6} size={40} color={POS}>check n = 1:  3500 + 58 500 = 62 000  ✓</Row>
			<Row x={96} y={722} at={k.simp + 150} out={k.over - 6} size={40} color={POS}>check n = 2:  7000 + 58 500 = 65 500  ✓</Row>
			<BoxCard x={1040} y={320} w={800} at={10} out={k.t777 + 40} size={40} title="plan">
				<div>(a) Year n comes after n − 1 increases.</div>
				<div>(b) A total over ten years: <span style={{color: TEAL, fontWeight: 800}}>S₁₀</span>.</div>
			</BoxCard>
			<Row x={96} y={510} at={k.its} out={k.over - 6} size={52}><span style={{color: BLUE}}>aₙ</span> = 62 000 + 3500<span style={{opacity: prog(fr, k.plus, 10)}}>(n − 1)</span></Row>
			<Row x={96} y={584} at={k.simp + 30} out={k.over - 6} size={52}>{'    '}= 3500n + 58 500</Row>
			<Row x={96} y={510} at={k.over} size={42}>(a)  <span style={{color: BLUE}}>aₙ</span> = 3500n + 58 500</Row>
			<Row x={96} y={580} at={k.s10} size={52} dim={prog(fr, k.so, 12)} small={44}><span style={{color: TEAL}}>S₁₀</span> = (10/2)[2 × 62 000 + 9 × 3500]</Row>
			<Row x={96} y={652} at={k.nine + 40} size={52} dim={prog(fr, k.which, 12)} small={44}>{'      '}= 5(124 000 + 31 500)</Row>
			<Row x={96} y={724} at={k.so + 30} size={52}>{'      '}= 5 × 155 500</Row>
			<AnswerBox x={96} y={806} at={k.t777 + 40} size={54}>777 500 visitors</AnswerBox>
		</>
	);
};

// ---------- 6. the first year over a target ----------
const NumberLine: React.FC<{at: number; markAt: number; pickAt: number}> = ({at, markAt, pickAt}) => {
	const f = useCurrentFrame();
	const y = 420, X = (v: number) => 1260 + (v - 11) * 420;
	return <FrameSvg style={{opacity: prog(f, at, 12)}}>
		<line x1={1120} x2={1830} y1={y} y2={y} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		{f >= pickAt ? <rect x={X(12) - 44} y={y + 22} width={88} height={54} rx={14} fill="#dcefe2" opacity={prog(f, pickAt, 12)} /> : null}
		{[11, 12].map(v => <g key={v}><line x1={X(v)} x2={X(v)} y1={y - 16} y2={y + 16} stroke={INK} strokeWidth={4} /><text x={X(v)} y={y + 62} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, fill: v === 12 && f >= pickAt ? GREEN : INK}}>{v}</text></g>)}
		<g opacity={prog(f, markAt, 12)}>
			<line x1={X(83 / 7)} x2={1826} y1={y} y2={y} stroke={AMBER_STROKE} strokeWidth={10} strokeLinecap="round" opacity={0.75} />
			<circle cx={X(83 / 7)} cy={y} r={11} fill={CARD} stroke={AMBER_STROKE} strokeWidth={5} />
			<text x={X(83 / 7)} y={y - 30} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: POS}}>11.86</text>
		</g>
		<text x={1120} y={y - 60} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: POS}}>year n</text>
	</FrameSvg>;
};
const YX = (i: number) => 236 + i * 68;
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	return (
		<>
			<Task x={96} y={150} w={1728} at={0} size={44}>(c) In which year do the visitors first exceed 100,000?</Task>
			<Row x={96} y={300} at={-30} size={44}><span style={{color: POS}}>from (a):</span>  <span style={{color: BLUE}}>aₙ</span> = 3500n + 58 500</Row>
			<Row x={96} y={380} at={k.set} size={52} dim={prog(fr, k.so, 12)} small={44}>3500n + 58 500 &gt; 100 000</Row>
			<Row x={96} y={452} at={k.then} size={52} dim={prog(fr, k.years, 12)} small={44}>3500n &gt; 41 500</Row>
			<Row x={96} y={524} at={k.so} size={52}>n &gt; 83/7 <span style={{color: POS, opacity: prog(fr, k.e1186, 10)}}>≈ 11.86</span></Row>
			<AnswerBox x={560} y={516} at={k.y12} size={54}>year 12</AnswerBox>
			<BoxCard x={96} y={620} w={860} at={10} out={k.notice - 8} size={40} title="plan">
				<div>Set the year-n formula above 100,000.</div>
				<div>n counts years: take the first whole year, then check both sides.</div>
			</BoxCard>
			<NumberLine at={-30} markAt={k.e1186} pickAt={k.y12} />
			<CheckBars x={1090} base={770} from={90000} unit={0.021} line={{v: 100000, label: '100,000', at: k.check}} bars={[
				{label: 'year 11', v: 97000, text: '97,000', at: k.y11},
				{label: 'year 12', v: 100500, text: '100,500', at: k.and12},
			]} at={k.check - 6} />
			<PeriodTimeline x={1130} y={880} tabW={150} gap={30} unit={0.0032} out={k.check - 16} periods={[1, 2, 3, 4].map(n => ({label: `year ${n}`, value: park(n), valueText: fmt(park(n)), at: -30}))}
				arcs={[0, 1, 2].map(i => ({from: i, to: i + 1, label: '+3,500', at: -30}))} />
			{fr >= k.notice - 6 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, k.notice - 6, 12)}}>
				<div style={{position: 'absolute', left: 96, top: 884, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, color: POS}}>year</div>
				{Array.from({length: 12}, (_, i) => <div key={i} style={{position: 'absolute', left: YX(i) - 27, top: 872, width: 54, height: 54, boxSizing: 'border-box', borderRadius: 12, border: `3.5px solid ${i === 11 ? BLUE : INK_SOFT}`, background: i === 11 ? BLUE_SOFT : CARD, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, color: i === 11 ? BLUE : INK}}>{i + 1}</div>)}
			</div> : null}
			<StepCounter xs={Array.from({length: 12}, (_, i) => YX(i))} y={870} at={k.notice} stagger={5} mode="numbers" bracket={{label: 'year 12: 11 increases', at: k.after}} />
			<SlipLine x={1090} y={872} at={k.not} size={42} caption="year 1 has no increase">12 increases</SlipLine>
		</>
	);
};

// ---------- 7. decay: where the model stops ----------
const W7 = {x: [0, 70] as const, y: [-220, 960] as const};
const weekAt = (fr: number) => 1 + 60 * smooth(Math.max(0, Math.min(1, (fr - K7.output) / (K7.w61 - K7.output))));
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const wk = weekAt(fr), wkN = Math.round(wk);
	const extra = (m: PlotMap) => {
		const [mx, my] = m.p(wk, machine(wk));
		const [x61, y61] = m.p(61, 0), [x66, y66] = m.p(70, machine(70)), [x65, y65] = m.p(65, machine(65));
		const [x1, y1] = m.p(1, 900), [x60, y60] = m.p(60, 15), [, y0] = m.p(0, 0);
		const sum = prog(fr, k.first60, 16), neg = prog(fr, k.after + 10, 14);
		return <>
			<path d={`M${x1},${y1} L${x61},${y61}`} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="12 10" fill="none" />
			{sum > 0.01 ? <path d={`M${x1},${y0} L${x1},${y1} L${x60},${y60} L${x60},${y0} Z`} fill={TEAL_SOFT} stroke={TEAL} strokeWidth={3} opacity={0.6 * sum} /> : null}
			{neg > 0.01 ? <g opacity={neg}>
				<path d={`M${x61},${y61} L${x66},${y66}`} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 8" fill="none" />
				<circle cx={x65} cy={y65} r={13} fill={CARD} stroke={INK_SOFT} strokeWidth={5} />
				<g opacity={prog(fr, k.cant, 10)}><path d={`M${x65 - 20},${y65 - 20} L${x65 + 20},${y65 + 20} M${x65 + 20},${y65 - 20} L${x65 - 20},${y65 + 20}`} stroke={RED} strokeWidth={7} strokeLinecap="round" /></g>
				<text x={x65 - 34} y={y65 + 40} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: POS}}>week 65: −60 parts?</text>
			</g> : null}
			{fr >= k.output - 10 && fr < k.first60 ? <circle cx={mx} cy={my} r={22} fill="none" stroke={AMBER_STROKE} strokeWidth={6} opacity={vis(fr, k.output - 10, k.w61 + 24, 10)} /> : null}
			{fr >= k.w61 ? <circle cx={x61} cy={y61} r={30} fill="none" stroke={RED} strokeWidth={5} opacity={prog(fr, k.w61, 12)} /> : null}
			{sum > 0.01 ? <text x={(x1 + x60) / 2 - 70} y={y0 - 60} textAnchor="middle" opacity={sum} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: TEAL}}>weeks 1 to 60</text> : null}
		</>;
	};
	return (
		<>
			<Task x={96} y={150} w={1728} at={0} size={40}>How many parts does the machine make before its weekly output reaches zero?</Task>
			<BoxCard x={96} y={270} w={700} at={6} size={44} title="givens">
				<div style={{whiteSpace: 'pre'}}>week 1: <span style={{color: BLUE, fontWeight: 800}}>900 parts</span></div>
				<div style={{whiteSpace: 'pre'}}><span style={{color: AMBER, fontWeight: 800}}>15 fewer</span> each week <span style={{color: AMBER, opacity: prog(fr, k.here, 10)}}>(d = −15)</span></div>
			</BoxCard>
			<TermPlot x={850} y={250} width={1030} height={720} window={{x: [...W7.x], y: [...W7.y]}} nRange={[1, 61]} at={-30} xLabel="" yLabel="parts made in week n"
				xTicks={[{value: 0, label: 'week'}, 10, 20, 30, 40, 50, 60]} yTicks={[200, 400, 600, 800]}
				series={[{term: n => (n === 1 || n % 5 === 0 || n === 61 ? machine(n) : NaN), color: BLUE, at: 0, stagger: 0.6}]}>{extra}</TermPlot>
			<LiveReadoutBoard x={1420} y={300} width={420} at={k.output - 10} out={k.first60 - 6} inline size={52} labelSize={30} rows={[
				{label: 'week n', value: wkN, digits: 0, role: 'inner'},
				{label: 'output aₙ', value: machine(wkN), digits: 0, role: 'a', unit: 'parts'},
			]} />
			<Hand x={1500} y={520} at={k.only} out={k.first60 - 6} size={42} color={RED}>{'model stops\nat week 61'}</Hand>
			<Row x={96} y={470} at={k.output} out={k.how - 6} size={50}><span style={{color: BLUE}}>aₙ</span> = 900 − 15(n − 1)</Row>
			<Row x={96} y={540} at={k.is915} out={k.how - 6} size={50}>{'    '}= 915 − 15n</Row>
			<Row x={96} y={620} at={k.zero} out={k.how - 6} size={50}>915 − 15n = 0<span style={{opacity: prog(fr, k.w61, 10)}}>  at  n = 61</span></Row>
			<BoxCard x={96} y={720} w={700} at={10} out={k.output - 8} size={40} title="plan">
				<div>Write the output in week n.</div>
				<div>Find the week it reaches zero.</div>
				<div>Add the weeks before that.</div>
			</BoxCard>
			<Hand x={96} y={710} at={k.neg} out={k.how - 6} size={42} color={RED} w={700}>after week 61 the formula gives negative parts: impossible</Hand>
			<Row x={96} y={460} at={k.how} size={40}><span style={{color: BLUE}}>aₙ</span> = 915 − 15n,  zero at n = 61</Row>
			<Row x={96} y={520} at={k.first60} size={40} color={TEAL}>weeks 1 to 60:  a₁ = 900,  a₆₀ = 15</Row>
			<Row x={96} y={600} at={k.thirty} size={52} dim={prog(fr, k.which, 12)} small={44}><span style={{color: TEAL}}>S₆₀</span> = (60/2)(900 + 15)</Row>
			<Row x={96} y={672} at={k.thirty + 60} size={52}>{'      '}= 30 × 915</Row>
			<AnswerBox x={96} y={760} at={k.t450 - 30} size={54}>27 450 parts</AnswerBox>
		</>
	);
};

// ---------- 8. in year n, or after n years? ----------
const T8 = {baseX: 400, baseY: 930, px: 1.85, scaleX: 190};
const G8 = {x: 170, w: 420};
const L8 = {x: 620, y: 680, cardW: 130, gap: 44, h: 90};
const STEP8 = 18;
const yearsAt = (fr: number) => {
	const k = K8;
	let t = smooth(prog(fr, k.one, 36));
	for (let i = 0; i < 5; i++) t += smooth(prog(fr, k.six + i * STEP8, 16));
	return t;
};
const ORD = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th'];
export const S08: React.FC = () => {
	usePlatePreload([HILL.src]);
	const fr = useCurrentFrame();
	const k = K8;
	const t = yearsAt(fr), h = treeH(t);
	// The readout shows t to one decimal place, and the height worked out from that shown t, so the two always agree.
	const tShown = Math.round(t * 10) / 10, hShown = treeH(tShown);
	const gs = G8.w / HILL.nat[0];
	// The ground strip is placed so its measured top surface meets the tree's base point.
	const groundTop = T8.baseY - (hillFileY((T8.baseX - G8.x) / gs) - HILL.box[1]) * gs;
	const cardAt = (i: number) => (i === 0 ? k.here : i === 1 ? k.one + 10 : k.six + (i - 2) * STEP8 + 6);
	const end = prog(fr, k.when1 - 10, 12);
	return (
		<>
			<Task x={600} y={150} w={1224} at={0} size={38}>A young tree is 120 cm tall when planted and grows 45 cm each year. How tall is it after 6 years?</Task>
			<FrameSvg><SvgPlate plate={HILL} x={G8.x} y={groundTop} w={G8.w} /></FrameSvg>
			<GrowingPlate plate={GUM} baseX={T8.baseX} baseY={T8.baseY} height={h * T8.px} at={-30} scale={{x: T8.scaleX, unitPx: T8.px, max: 400, step: 100, value: h}} />
			<Hand x={T8.scaleX + 16} y={150} at={-30} size={36} color={POS}>cm</Hand>
			{end < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - end}}>
				<BoxCard x={600} y={316} w={540} at={6} size={44} title="givens">
					<div style={{whiteSpace: 'pre'}}>planted (t = 0): <span style={{color: BLUE, fontWeight: 800}}>120 cm</span></div>
					<div style={{whiteSpace: 'pre'}}><span style={{color: AMBER, fontWeight: 800}}>+45 cm</span> each year</div>
				</BoxCard>
				<LiveReadoutBoard x={1180} y={316} width={420} at={-30} inline size={52} labelSize={30} rows={[
					{label: 'years t', value: tShown, text: tShown.toFixed(1), role: 'inner'},
					{label: 'height', value: hShown, text: String(Number(hShown.toFixed(1))), role: 'a', unit: 'cm'},
				]} />
			</div> : null}
			<BoxCard x={600} y={316} w={1224} at={k.when1} size={42} title="what n counts">
				<div style={{whiteSpace: 'pre'}}>first value in year 1:  year n has <span style={{color: AMBER, fontWeight: 800}}>n − 1</span> changes</div>
				{fr < k.when0 ? null : <div style={{whiteSpace: 'pre', opacity: prog(fr, k.when0, 10), background: `rgba(248,232,200,${vis(fr, k.changes, undefined, 12)})`, borderRadius: 10, margin: '0 -10px', padding: '0 10px'}}>start at t = 0:  after n years, <span style={{color: AMBER, fontWeight: 800}}>n</span> changes</div>}
			</BoxCard>
			<Row x={600} y={500} at={k.so} size={52}>120 + 6 × 45</Row>
			<AnswerBox x={950} y={492} at={k.t390} size={52}>390 cm</AnswerBox>
			<Row x={1230} y={512} at={k.t390 + 30} size={36} color={POS}>h = 120 + 45t  (t in years)</Row>
			<Ladder x={L8.x} y={L8.y} cardW={L8.cardW} h={L8.h} gap={L8.gap} size={46} values={[0, 1, 2, 3, 4, 5, 6].map(i => String(treeH(i)))} dropAt={[0, 1, 2, 3, 4, 5, 6].map(cardAt)} slots={7} slotsAt={20} labels={i => `t = ${i}`} labelsAt={20} glows={[{i: 0, at: k.zero, out: k.one}, {i: 6, at: k.seventh}]} />
			<Arcs x={L8.x} y={L8.y} cardW={L8.cardW} gap={L8.gap} h={L8.h} size={40} arcs={[0, 1, 2, 3, 4, 5].map(i => ({from: i, to: i + 1, label: '+45', at: cardAt(i + 1) - 8}))} />
			{ORD.map((s, i) => <div key={s} style={{position: 'absolute', left: L8.x + i * (L8.cardW + L8.gap) - 20, width: L8.cardW + 40, top: L8.y + L8.h + 46, textAlign: 'center', opacity: prog(fr, k.seq + i * 5, 10), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, color: i === 6 ? AMBER : INK}}>{s} term</div>)}
			<SlipLine x={620} y={868} at={k.sixth} size={40} caption="only 5 steps">6th term: 345 cm</SlipLine>
			<Hand x={1420} y={872} at={k.seventh + 20} size={44} color={AMBER}>7th term: 6 steps</Hand>
		</>
	);
};

// ---------- 9. memory aid ----------
export const AID_LINES = ['Find a, d and n.', 'Say what n counts.', 'One period: aₙ.', 'Running total: Sₙ.'];
/** The two icons: one day's bar with three seedlings (aₙ) and the total column (Sₙ). */
export const AidIcons: React.FC<{x: number; y: number; S?: number; a?: number; b?: number; pulse?: number}> = ({x, y, S = 1, a = 1, b = 1, pulse = 0}) => {
	usePlatePreload([SEED.src]);
	const sh = 96 * S, sw = (sh * (SEED.box[2] - SEED.box[0])) / (SEED.box[3] - SEED.box[1]);
	const gap = 200 * S;
	return <FrameSvg>
		<g opacity={a}>
			<rect x={x} y={y + 40 * S} width={64 * S} height={110 * S} rx={6} fill={BLUE_SOFT} stroke={BLUE} strokeWidth={4 + 3 * pulse} />
			{[0, 1, 2].map(i => <SvgPlate key={i} plate={SEED} x={x + 84 * S + i * sw * 0.8} y={y + 150 * S - sh} w={sw} />)}
			<line x1={x - 12 * S} x2={x + 84 * S + 3 * sw * 0.8 + 12 * S} y1={y + 150 * S} y2={y + 150 * S} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		</g>
		<g opacity={b}>
			<rect x={x + 20 * S} y={y + gap} width={84 * S} height={150 * S} rx={8} fill={TEAL_SOFT} stroke={TEAL} strokeWidth={4 + 3 * pulse} />
			{[1, 2, 3].map(i => <line key={i} x1={x + 20 * S} x2={x + 104 * S} y1={y + gap + i * 37.5 * S} y2={y + gap + i * 37.5 * S} stroke={TEAL} strokeWidth={3} opacity={0.6} />)}
			<line x1={x - 12 * S} x2={x + 140 * S} y1={y + gap + 150 * S} y2={y + gap + 150 * S} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		</g>
	</FrameSvg>;
};
export const S09: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K9;
	const hand = (size: number, color = INK): React.CSSProperties => ({position: 'absolute', fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color, whiteSpace: 'pre', lineHeight: 1.1});
	const pulse = Math.sin(Math.PI * Math.max(0, Math.min(1, (fr - k.sn - 30) / 40)));
	return (
		<>
			<FramedCard x={260} y={150} w={1400} h={780} at={-30} />
			<div style={{...hand(46, POS), left: 320, top: 176}}>Memory aid</div>
			<div style={{...hand(88), left: 320, top: 236, display: 'flex'}}><span style={{display: 'inline-block', clipPath: `inset(0 ${100 - 100 * prog(fr, 4, 20)}% 0 0)`}}>Find a, d and n.</span>{fr >= k.say ? <span style={{opacity: prog(fr, k.say, 12)}}>  Say what n counts.</span> : null}</div>
			<div style={{...hand(52, POS), left: 320, top: 356, opacity: prog(fr, k.then, 12)}}>Then ask one question:</div>
			<AidIcons x={360} y={420} S={1.2} a={0.5 + 0.5 * prog(fr, k.one, 12)} b={0.5 + 0.5 * prog(fr, k.run, 12)} pulse={pulse} />
			<div style={{...hand(88), left: 740, top: 478, opacity: prog(fr, k.one, 12)}}>One period?<span style={{opacity: prog(fr, k.an, 12), color: BLUE}}>   Use aₙ.</span></div>
			<div style={{...hand(88), left: 740, top: 708, opacity: prog(fr, k.run, 12)}}>A running total?<span style={{opacity: prog(fr, k.sn, 12), color: TEAL}}>   Use Sₙ.</span></div>
		</>
	);
};
export {AMBER_SOFT, CARD_SHADOW};
