// Scenes 1 to 3: g02's final frame (two investment strips and coin jars) opens into the two series (same amount
// against same percentage, the jars level after year 1 and then pulling apart), the finance decision rows, and the
// maximum loan (the P dial sweeps until the balance after 300 months is zero; round down).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, prog} from '../../kit';
import {FrameSvg, HandTag, LiveReadoutBoard, ParameterSlider, SceneHeading, StudioPlot, SvgPlate, kf, smooth} from '../../math/studio';
import {K1, K2, K3} from './cuemap';
import {AnswerBox, BAL, BROWN, BoxCard, CARD, Chip, DEP, DESK, FONT_DISPLAY, G02FinalFrame, G300, GREY, HOUSE, Hand, INK, INT, INVEST_FULL, INVEST_TOP, IconAnnuity, IconBend, IconLine, IconLoan, InvestStage, KR, LOAN, ModelRows, P_STAR, QCard, REP, Row, Slip, Task, TreeChip, UL, UNK, balanceAt, compB, money, simpleB} from './parts';
import type {InvestLayout} from './parts';

const lerpL = (a: InvestLayout, b: InvestLayout, u: number): InvestLayout => {
	const o = {} as InvestLayout;
	for (const key of Object.keys(a) as (keyof InvestLayout)[]) o[key] = a[key] + (b[key] - a[key]) * u;
	return o;
};

// ---------- 1. hook (one phrase, two answers) ----------
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const u = smooth(prog(fr, k.phrase + 20, 36));
	const yA = kf(fr, [[k.simple + 20, 0], [k.dollars - 10, 10]]);
	const yB = kf(fr, [[k.comp + 16, 0], [k.eight - 14, 10]]);
	const phaseB = fr >= k.comp + 16;
	const year = phaseB ? yB : yA;
	const pulse = prog(fr, k.phrase, 8) * (1 - prog(fr, k.phrase + 24, 10));
	return (
		<>
			{fr < 1 ? <G02FinalFrame /> : <>
				<Chip x={96} y={96} at={-300} out={4} size={34} color={BROWN}>Next: finance and probability practice</Chip>
				<Chip x={340} y={800} at={-300} out={k.phrase} size={48} color={KR.ink}>Which model?</Chip>
				<SceneHeading text="Which model do the givens justify?" at={10} size={44} />
				<div style={{position: 'absolute', inset: 0, transform: `scale(${1 + 0.01 * pulse})`}}>
					<InvestStage L={lerpL(INVEST_FULL, INVEST_TOP, u)} ul1={-300} ul2={-300} balances={[simpleB(phaseB ? 10 : yA), compB(phaseB ? yB : 0)]}
						chip1={{text: 'same amount: arithmetic', at: k.dollars}} chip2={{text: 'same percentage: geometric', at: k.eight}} />
				</div>
				<LiveReadoutBoard x={1170} y={165} width={700} at={k.simple} inline rows={[
					{label: 'year', value: year, digits: 0, text: String(Math.floor(year + 1e-6))},
					{label: 'simple', value: simpleB(Math.floor(year + 1e-6)), format: v => money(v)},
					{label: 'compound', value: compB(Math.floor(year + 1e-6)), format: v => (phaseB ? money(v) : '–'), role: 'deposit'},
					{label: 'gap', value: 0, text: phaseB ? money(compB(Math.floor(yB + 1e-6)) - simpleB(Math.floor(yB + 1e-6))) : '–', role: 'interest'},
				]} />
				<StudioPlot x={96} y={565} width={1720} height={330} window={{x: [-0.4, 10.4], y: [9000, 19000]}} xTicks={[2, 4, 6, 8, 10]} yTicks={[{value: 10000, label: '$10,000'}, {value: 14000, label: '$14,000'}, {value: 18000, label: '$18,000'}]} xLabel="years" yLabel="balance" at={k.simple - 30}>
					{m => <>
						{Array.from({length: 11}, (_, n) => n).map(n => {
							const oS = prog(fr, k.simple + 20 + (n / 10) * (k.dollars - 30 - k.simple), 8), oC = prog(fr, k.comp + 16 + (n / 10) * (k.eight - 28 - k.comp), 8);
							const [sx, sy] = m.p(n, simpleB(n)), [, cy] = m.p(n, compB(n));
							return <g key={n}>
								{n >= 2 && oC > 0.01 ? <line x1={sx} x2={sx} y1={sy} y2={cy} stroke={INT.stroke} strokeWidth={9} strokeLinecap="round" opacity={oC} /> : null}
								{oS > 0.01 ? <circle cx={sx} cy={sy} r={12} fill={INK} stroke={CARD} strokeWidth={4} opacity={oS} /> : null}
								{oC > 0.01 && n > 0 ? <circle cx={sx} cy={cy} r={12} fill={DEP.stroke} stroke={CARD} strokeWidth={4} opacity={oC} /> : null}
							</g>;
						})}
						<text x={m.p(10, 0)[0] - 24} y={m.p(0, 16000)[1] + 44} textAnchor="end" opacity={prog(fr, k.dollars, 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: INK}} stroke={CARD} strokeWidth={8} paintOrder="stroke">$16,000</text>
						<text x={m.p(10, 0)[0] - 24} y={m.p(0, 17908)[1] - 16} textAnchor="end" opacity={prog(fr, k.eight, 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: DEP.ink}} stroke={CARD} strokeWidth={8} paintOrder="stroke">$17,908.48</text>
					</>}
				</StudioPlot>
				<HandTag x={560} y={700} text="+ $600 each year" at={k.same} size={38} color={INK} />
				<HandTag x={560} y={640} text="× 1.06 each year" at={k.mult} size={38} color={DEP.ink} />
				<HandTag x={220} y={760} text="same after year 1" at={k.comp + 60} out={k.geo + 40} size={36} color={GREY} />
				<Chip x={1330} y={500} at={k.so} size={36} color={KR.ink}>Which words, which model?</Chip>
			</>}
		</>
	);
};

// ---------- 2. finance words and their models ----------
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	return (
		<>
			<SceneHeading text="Finance: which words, which model?" at={4} size={44} />
			<FrameSvg><SvgPlate plate={DESK} x={30} y={190} w={540} /></FrameSvg>
			<div style={{opacity: prog(fr, k.which, 12)}}><QCard x={40} y={520} w={520} size={38} lit={fr < k.its}>The buyer <UL at={k.which + 20}>can afford $2,800 a month</UL>.</QCard></div>
			{fr >= k.seconds - 12 ? <FrameSvg><Countdown start={k.seconds} end={k.seconds + 90} x={500} y={710} r={44} /></FrameSvg> : null}
			<Chip x={40} y={680} at={k.its} size={34} color={KR.ink}>equal repayments: loan</Chip>
			<Hand x={44} y={800} at={k.period} size={34} color={GREY} w={520}>r and n per period (month, quarter, year)</Hand>
			<ModelRows x={620} y={170} w={1250} question="Finance?" size={34} rowH={154} rows={[
				{at: k.same, icon: <IconLine />, text: 'same amount each period → arithmetic', sub: 'aₙ = a + (n − 1)d: a straight line', subAt: k.same + 70},
				{at: k.pct, icon: <IconBend />, text: 'same percentage of the current amount → geometric', sub: 'multiply by (1 + r) each period', subAt: k.pct + 100},
				{at: k.dep, icon: <IconAnnuity />, text: 'equal deposits, compound interest → annuity', sub: <>FV = <span style={{color: DEP.ink}}>M</span>[(1 + r)ⁿ − 1]/r</>, subAt: k.fv},
				{at: k.loan, litAt: k.its, icon: <IconLoan />, text: 'equal repayments on a loan → reducing balance', sub: <>Aₙ = P(1 + r)ⁿ − <span style={{color: REP.ink}}>M</span>[(1 + r)ⁿ − 1]/r; repaid when Aₙ = 0</>, subAt: k.zero},
			]} />
		</>
	);
};

// ---------- 3. worked problem 1: the most you can borrow ----------
const P_DOWN = Math.floor(P_STAR * 100) / 100;
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const P = kf(fr, [[0, 530000], [k.paid, 530000], [k.paid + 80, 445000], [k.zero + 10, 470000], [k.move, 470000], [k.nine, Math.round(P_STAR * 100) / 100], [k.round + 6, Math.round(P_STAR * 100) / 100], [k.round + 30, P_DOWN]]);
	const A300 = balanceAt(P, 300);
	const RC = 1100, RW = 770;
	return (
		<>
			<SceneHeading text="1. The most you can borrow" at={4} size={44} />
			<TreeChip q="finance:" label="equal repayments: loan" at={-30} x={760} />
			<FrameSvg><SvgPlate plate={HOUSE} x={40} y={190} w={340} /></FrameSvg>
			<LiveReadoutBoard x={40} y={380} width={360} at={-300} rows={[
				{label: 'P borrowed', value: P, format: v => money(v), role: 'gradient'},
				{label: 'balance after 300 months', value: A300, format: v => money(v), unit: A300 > 0.005 ? 'owing' : 'in credit'},
			]} />
			<ParameterSlider x={40} y={640} width={350} symbol="P" role="gradient" value={P} min={430000} max={540000} ticks={[{value: 450000, label: '450k'}, {value: 500000, label: '500k'}]} format={v => `${Math.round(v / 1000)}k`} at={-300} />
			<StudioPlot x={430} y={170} width={640} height={560} window={{x: [-10, 315], y: [-30000, 560000]}} xTicks={[100, 200, 300]} yTicks={[{value: 100000, label: '$100k'}, {value: 300000, label: '$300k'}, {value: 500000, label: '$500k'}]} xLabel="month n" yLabel="balance" at={-300}>
				{m => {
					let d = '', end = 300;
					for (let n = 0; n <= 300; n += 2) {const b = balanceAt(P, n); if (b < 0) {end = n; break;} const [px, py] = m.p(n, b); d += `${n ? 'L' : 'M'}${px.toFixed(1)},${py.toFixed(1)}`;}
					const [ex, ey] = m.p(end, Math.max(0, balanceAt(P, end)));
					return <>
						<line x1={m.p(300, 0)[0]} x2={m.p(300, 0)[0]} y1={m.box.top} y2={m.box.top + m.box.height} stroke={GREY} strokeWidth={3} strokeDasharray="10 8" />
						<g clipPath={m.clip}><path d={d} stroke={BAL.stroke} strokeWidth={7} fill="none" /></g>
						<circle cx={ex} cy={ey} r={13} fill={Math.abs(A300) < 1 ? '#287347' : A300 > 0 ? '#b8322a' : REP.stroke} stroke={CARD} strokeWidth={4} />
					</>;
				}}
			</StudioPlot>
			<HandTag x={760} y={300} text="too big: still owing" at={k.paid + 10} out={k.paid + 90} size={36} color={'#b8322a'} />
			<HandTag x={600} y={560} text="too small: paid off early" at={k.paid + 90} out={k.move} size={36} color={REP.ink} />
			<HandTag x={760} y={500} text="round down" at={k.round} size={40} color={'#287347'} />
			<Task x={RC} y={165} w={RW} at={-30} size={38}>Find the maximum amount that can be borrowed.</Task>
			<BoxCard x={RC} y={322} w={RW} at={-30} size={34} title="given"><UL at={k.buyer + 14}>can afford</UL> <span style={{color: REP.ink}}>M = $2,800</span> per month<br />4.8% p.a., compounded monthly, 25 years</BoxCard>
			<Hand x={RC + 300} y={332} at={k.unknown} size={32} color={UNK.ink}>can afford: M given, P unknown</Hand>
			<Row x={RC} y={480} at={k.hundred} size={44} small={30} dim={prog(fr, k.move, 12)}>r = 0.048 ÷ 12 = 0.004, n = 300</Row>
			<Row x={RC} y={540} at={k.zero} size={38} small={30} dim={prog(fr, k.move, 12)}>{'A₃₀₀ = '}<span style={{color: UNK.ink, outline: fr >= k.unknown ? `3px solid ${UNK.stroke}` : undefined, borderRadius: 8}}>P</span>{'(1.004)³⁰⁰\n     − 2800[(1.004)³⁰⁰ − 1]/0.004 = 0'}</Row>
			<Row x={RC} y={645} at={k.move} size={38} small={30} dim={prog(fr, k.nine, 12)}>{'P = 2800[(1.004)³⁰⁰ − 1]\n     ÷ [0.004 × (1.004)³⁰⁰]'}</Row>
			<Hand x={RC + 510} y={488} at={k.move + 20} size={28} color={GREY}>(1.004)³⁰⁰ ≈ {G300.toFixed(4)}</Hand>
			<Row x={RC} y={752} at={k.nine} out={k.round} size={44}>P ≈ $488,658.79</Row>
			<AnswerBox x={RC} y={748} at={k.round} size={38}>maximum: $488,658.78 (rounded down)</AnswerBox>
			<Hand x={RC + 6} y={845} at={k.sure} size={28} color={GREY}>another form you may see: P = M[1 − (1 + r)^(−n)]/r</Hand>
			<Slip x={40} y={790} at={k.mult} strikeAt={k.total} w={600} size={32} caption="that's the total repaid">P = 2,800 × 300 = $840,000</Slip>
		</>
	);
};
