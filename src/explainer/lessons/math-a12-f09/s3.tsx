// Scenes 11 to 16: attempt 1 (a $12,000 loan at 6% p.a. monthly, $250 a month: owed after 2 months) and its brief
// feedback ($11,619.05; crossed: $11,500), attempt 2 (show Aₙ = 50 000(1.004)ⁿ − 225 000(1.004ⁿ − 1)) and its brief
// feedback (ratio 1.004; crossed: ratio 0.004), the handoff (the home loan cleared in 30 years and a dashed
// "$2,500 a month?" ghost: f10's opening frame, exported as F09FinalFrame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, GivensStrip, KeyNotesBullets, MistakeCard, Pow, QuestionCard, SceneHeading, StudioPlot, SvgPlate, loanBalance, usePlatePreload} from '../../math/studio';
import {K11, K12, K13, K14, K15, K16} from './cuemap';
import {dur, hold} from './common';
import {AMBER, AnswerBox, Sb, BROWN, BoxCard, CARD, Chip, Frac, FramedCard, HOME, HOUSE, Hand, INT, LoanGraph, MoneyTable, POS, QStrip, REP, Row, Statement, TEAL, ZoomBar, m2} from './parts';

const lin = (fr: number, a: number, b: number) => Math.max(0, Math.min(1, (fr - a) / (b - a)));

// ---------- the "grow, then pay" icon: a mini bar, an amber cap on, a teal bite off ----------
export const AidBar: React.FC<{x: number; y: number; s?: number; t?: number}> = ({x, y, s = 1, t = 1}) => {
	const cap = Math.min(1, t / 0.45), bite = Math.max(0, (t - 0.5) / 0.45);
	return <g transform={`translate(${x},${y}) scale(${s})`}>
		<rect x={0} y={60} width={90} height={180} fill={INK} />
		<rect x={0} y={60 - 34 * cap} width={90} height={34 * cap} fill={INT.stroke} />
		<g opacity={bite > 0 ? 1 - Math.max(0, bite - 0.7) / 0.3 : 0}><rect x={bite * 26} y={60 - 34 * cap + bite * 40} width={90} height={70} fill={REP.stroke} stroke={CARD} strokeWidth={3} /></g>
		<text x={104} y={52} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: INT.ink}}>× (1 + r)</text>
		<text x={104} y={150} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: REP.ink}}>− M</text>
	</g>;
};

// ---------- 11. attempt 1 ----------
const Attempt: React.FC<{id: string; pauseAt: number; heading?: string; given: React.ReactNode[]; picture: React.ReactNode; children: React.ReactNode}> = ({id, pauseAt, heading, given, picture, children}) => (
	<>
		<BoxCard x={96} y={500} w={640} at={6} size={40} title="given">{given.map((g, i) => <div key={i} style={{fontWeight: 800, whiteSpace: 'pre'}}>{g}</div>)}</BoxCard>
		{picture}
		<QuestionCard at={0} size={44} w={1700} y={170} hold={{...hold(id), ringFrom: pauseAt}} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
	</>
);
export const S11: React.FC = () => (
	<Attempt id="scene-11" pauseAt={K11.pause} given={['loan: $12,000', '6% p.a., compounded monthly', 'repaid at $250 per month', 'owed after 2 months?']}
		picture={<>
			<Statement x={830} y={390} h={640} fields={[{label: 'Loan', value: '$12,000', size: 34}, {label: 'Rate', value: '6% p.a.', size: 34}, {label: 'Pay', value: '$250', size: 34}, {label: 'Owed', value: '?', size: 38, color: INK_SOFT}]} labelSize={26} />
			<Hand x={1340} y={560} at={-30} size={38} color={POS} w={230}>owed after 2 months?</Hand>
		</>}>
		<div>A loan of $12,000 has interest at 6% p.a., compounded monthly. It is repaid at $250 per month. How much is owed after 2 months?</div>
	</Attempt>
);

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const k = K12;
	const fr = useCurrentFrame();
	const t = lin(fr, k.after1, k.which + 10) + lin(fr, k.after2, k.cents);
	const a2 = k.after2;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['A loan of $12,000 has interest at ', {u: '6% p.a., compounded monthly', at: k.monthly}, '. It is repaid at ', {u: '$250 per month', at: k.minus}, '. How much is owed ', {u: 'after 2 months', at: a2}, '?']} />
			<GivensStrip x={96} y={292} size={38} maxW={1200} items={[{content: 'P = $12,000', role: 'balance', at: k.monthly}, {content: 'r = 0.06 ÷ 12 = 0.005', role: 'interest', at: k.half}, {content: 'M = $250', role: 'repay', at: k.minus}, {content: 'n = 2', at: a2}]} />
			<MoneyTable x={96} y={384} size={40} rowH={58} cols={[{head: 'month', w: 120, align: 'center'}, {head: 'owed at start', w: 260}, {head: 'interest', w: 200, color: INT.ink}, {head: 'repayment', w: 220, color: REP.ink}, {head: 'owed at end', w: 270}]}
				rows={[
					[{text: '1', at: k.after1}, {text: '$12,000.00', at: k.after1}, {text: '$60.00', at: k.twelve}, {text: '$250.00', at: k.minus}, {text: '$11,810.00', at: k.which}],
					[{text: '2', at: a2}, {text: '$11,810.00', at: a2}, {text: '$59.05', at: a2 + 30}, {text: '$250.00', at: a2 + 60}, {text: '$11,619.05', at: k.cents, frame: k.cents}],
				]} />
			<Row x={96} y={590} at={k.twelve} size={40} color={POS}>A<sub>1</sub> = 12 000 × 1.005 − 250 = 11 810</Row>
			<Row x={96} y={648} at={k.after2} size={40} color={POS}>A<sub>2</sub> = 11 810 × 1.005 − 250 = 11 619.05</Row>
			<AnswerBox x={96} y={720} at={k.cents} size={52}>owed after 2 months: $11,619.05</AnswerBox>
			<MistakeCard x={96} y={820} w={1040} at={k.wrong} size={42} wrong={<>12 000 − 2 × 250 = $11,500</>} caption="interest forgotten: it is added each month" />
			<ZoomBar x={1480} base={900} width={150} lo={11400} pxPer={0.9} P={12000} r={0.005} M={250} t={t} scale={[11500, 12000]}
				ticks={[{k: 1, label: 'A₁ = $11,810.00'}, {k: 2, label: 'A₂ = $11,619.05'}]} label="owed" capText={v => `+${m2(v)}`} />
		</>
	);
};

// ---------- 13. attempt 2 ----------
const A2Sketch: React.FC<{x: number; y: number; w: number; h: number; dot?: boolean; check?: number}> = ({x, y, w, h, dot = true, check}) => (
	<StudioPlot x={x} y={y} width={w} height={h} window={{x: [0, 66], y: [0, 56000]}} xTicks={[]} yTicks={[{value: 50000, label: '$50,000'}]} xLabel="months n" yLabel="amount owing" grid={false}>
		{m => {
			let d = '';
			for (let i = 0; i <= 120; i++) {const n = (63 * i) / 120, [a, b] = m.p(n, Math.max(0, loanBalance(50000, 0.004, 900, n))); d += `${i ? 'L' : 'M'}${a.toFixed(1)},${b.toFixed(1)} `;}
			const nd = check ?? 30, [px, py] = m.p(nd, loanBalance(50000, 0.004, 900, nd));
			return <g>
				<path d={d} fill="none" stroke={INK} strokeWidth={6} strokeLinejoin="round" />
				{dot ? <g><circle cx={px} cy={py} r={14} fill={CARD} stroke={INK} strokeWidth={5} /><text x={px + 24} y={py - 20} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{check === undefined ? 'Aₙ = ?' : 'A₁₂'}</text></g> : null}
			</g>;
		}}
	</StudioPlot>
);
const Q2 = <>A loan of $50,000 has interest at 4.8% p.a., compounded monthly, with repayments of $900 per month. Show that the amount owing after n months is A<sub>n</sub> = 50 000(1.004)<Pow>n</Pow> − 225 000(1.004<Pow>n</Pow> − 1).</>;
export const S13: React.FC = () => (
	<Attempt id="scene-13" pauseAt={K13.pause} heading="Last one" given={['loan: $50,000', '4.8% p.a., compounded monthly', 'repayments of $900 per month', 'show the form of Aₙ']}
		picture={<A2Sketch x={850} y={540} w={640} h={330} />}>
		<div>{Q2}</div>
	</Attempt>
);

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const k = K14;
	const fr = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['A loan of $50,000 has interest at ', {u: '4.8% p.a., compounded monthly', at: k.reps}, ', with repayments of ', {u: '$900 per month', at: k.reps + 20}, '. Show that the amount owing ', {u: 'after n months', at: k.terms}, ' is Aₙ = 50 000(1.004)ⁿ − 225 000(1.004ⁿ − 1).']} />
			<GivensStrip x={96} y={338} size={38} maxW={1300} items={[{content: 'P = $50,000', role: 'balance', at: k.reps}, {content: 'r = 0.048 ÷ 12 = 0.004', role: 'interest', at: k.reps + 10}, {content: 'M = $900', role: 'repay', at: k.reps + 20}]} />
			<Row x={96} y={420} at={k.reps} size={46} dim={prog(fr, k.its, 12)} small={38}>A<sub>n</sub> = 50 000(1.004)<Pow>n</Pow> − 900<span style={{color: TEAL}}>(1 + 1.004 + … + 1.004<Pow>n−1</Pow>)</span></Row>
			<Hand x={760} y={490} at={k.ratio} out={k.its - 6} size={40} color={AMBER}>GP: first term 1, ratio 1.004, n terms</Hand>
			<Row x={96} y={520} at={k.its} size={48} dim={prog(fr, k.thousand, 12)} small={40}>{'     '}= 50 000(1.004)<Pow>n</Pow> − 900 × <Frac n={<>1.004<Pow>n</Pow> − 1</>} d="0.004" /></Row>
			<Hand x={1000} y={590} at={k.nine} out={k.using - 8} size={40} color={POS}>900 ÷ 0.004 = 225 000</Hand>
			<AnswerBox x={96} y={680} at={k.thousand} size={50}>A<Sb>n</Sb> = 50 000(1.004)<Pow>n</Pow> − 225 000(1.004<Pow>n</Pow> − 1)  ✓</AnswerBox>
			<MistakeCard x={96} y={800} w={900} at={k.using} size={44} wrong={<><Frac n={<>0.004<Pow>n</Pow> − 1</>} d="0.004 − 1" /></>} caption="the ratio is 1 + r, not r" />
			<A2Sketch x={1430} y={520} w={440} h={290} check={12} />
			<Hand x={1400} y={870} at={-30} size={36} color={POS} w={470}>check, n = 12: both forms give $41,412.71</Hand>
		</>
	);
};

// ---------- 15. handoff: the home loan, and a dashed "$2,500 a month?" ghost (f10's opening frame) ----------
const GX = {x: 600, y: 210, w: 1260, h: 700};
const GHOST_YEARS = 12;
const HomeBoard: React.FC<{head: number; label: number; ghost: number; glabel: number; q: number; chips: number; house: number}> = ({head, label, ghost, glabel, q, chips, house}) => {
	const f = useCurrentFrame();
	usePlatePreload([HOUSE.src]);
	const gUp = GHOST_YEARS * Math.max(0, Math.min(1, (f - ghost) / 40));
	return (
		<>
			<SceneHeading text="Pay more each month?" at={head} size={52} />
			<LoanGraph x={GX.x} y={GX.y} width={GX.w} height={GX.h} curves={[
				{...HOME, label: prog(f, label, 12) > 0.5 ? {text: '$2,147.29 a month: about 30 years', atYears: 13.2, dy: -40} : undefined},
				{P: 400000, r: 1 / 240, M: 2500, color: INK_SOFT, dash: '16 12', width: 6, upTo: gUp, label: prog(f, glabel, 12) > 0.5 ? {text: '$2,500 a month?', atYears: 2.6, dy: 150, color: INK_SOFT} : undefined},
			]} extra={m => {
				const [qx, qy] = m.p(GHOST_YEARS, loanBalance(400000, 1 / 240, 2500, GHOST_YEARS * 12));
				const qo = prog(f, q, 12);
				return qo > 0.01 ? <g opacity={qo}><path d={`M${qx + 8},${qy + 10} q 26 30 40 74`} fill="none" stroke={INK_SOFT} strokeWidth={5} strokeDasharray="4 10" strokeLinecap="round" /><rect x={qx + 18} y={qy + 92} width={84} height={84} rx={16} fill={CARD} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 8" /><text x={qx + 60} y={qy + 152} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 56, fill: INK_SOFT}}>?</text></g> : null;
			}} />
			<div style={{opacity: prog(f, house, 14)}}>
				<FrameSvg><SvgPlate plate={HOUSE} x={70} y={600} w={480} /></FrameSvg>
				<Hand x={80} y={520} at={house} size={40} color={INK}>home loan: $400,000</Hand>
				<Hand x={80} y={860} at={house} size={36} color={POS} w={470}>5% p.a., compounded monthly</Hand>
			</div>
			<Chip x={960} y={80} at={chips} size={42} color={BROWN}>Next: pay more, or pay a higher rate?</Chip>
			<Chip x={1760} y={76} at={chips + 14} size={80} color={BROWN}>?</Chip>
		</>
	);
};
/** f09's final frame, and f10's opening frame: the home loan cleared in 30 years and the "$2,500 a month?" ghost. */
export const F09FinalFrame: React.FC = () => <HomeBoard head={-300} label={-300} ghost={-300} glabel={-300} q={-300} chips={-300} house={-300} />;
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K15;
	const sw = prog(fr, k.heres - 6, 18);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Slowly at first, then faster" at={4} size={52} />
				<FramedCard x={60} y={190} w={450} h={560} at={-30} />
				<div style={{position: 'absolute', left: 110, top: 210, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: POS}}>Memory aid</div>
				<div style={{position: 'absolute', left: 110, top: 270, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, color: INK}}>Grow, then pay.</div>
				<FrameSvg><AidBar x={130} y={380} s={1.1} /></FrameSvg>
				<Hand x={70} y={790} at={k.so + 10} size={38} color={POS} w={440}>compound interest, with a repayment taken off every period</Hand>
			</div> : null}
			<HomeBoard head={k.what - 10} label={k.cleared} ghost={k.two} glabel={k.two + 20} q={k.gone} chips={k.gone + 10} house={k.heres} />
		</>
	);
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>Interest is charged on the balance still owed.</>, at: 2},
		{content: <>Monthly: r = annual rate ÷ 12.</>, at: 6},
		{content: <>A<sub>n+1</sub> = <span style={{color: INT.ink}}>(1 + r)</span>A<sub>n</sub> <span style={{color: REP.ink}}>− M</span>, A<sub>0</sub> = P: interest first.</>, at: 10},
		{content: <>Less owed, less interest, so more of M pays the debt.</>, at: 14},
		{content: <>A<sub>n</sub> = P(1 + r)<Pow>n</Pow> − M[(1 + r)<Pow>n</Pow> − 1] ÷ r (ratio 1 + r).</>, at: 18},
	];
	const end = Math.max(1350, dur('scene-16'));
	const back = prog(fr, end - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K16.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1080} items={items} size={42} gap={62} />
				<FramedCard x={1220} y={196} w={660} h={660} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1260, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: POS}}>Memory aid</div>
					<div style={{position: 'absolute', left: 1260, top: 280, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 76, color: INK}}>Grow, then pay.</div>
					<FrameSvg><AidBar x={1290} y={420} s={1.15} /></FrameSvg>
					<div style={{position: 'absolute', left: 1260, top: 740, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK, whiteSpace: 'pre'}}><span style={{color: INT.ink}}>× (1 + r)</span>, then <span style={{color: REP.ink}}>− M</span></div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><F09FinalFrame /></div> : null}
		</>
	);
};
export {m2};
