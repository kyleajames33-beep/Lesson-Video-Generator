// Scenes 1 to 4: f10's last frame (the motorbike, its tag and a dashed curve to "?"), the guess 20 000 ÷ 400 = 50 and
// the race (an interest-free ghost empties at 50, the real loan at 60), paid off means Aₙ = 0, solving for the term
// ((1.006)ⁿ = 10/7, n ≈ 59.62, needs M > Pr), and rounding up with the total paid and the interest.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, GivensStrip, LiveReadoutBoard, LoanBalanceBar, MarkSpan, Pow, SceneHeading} from '../../math/studio';
import {F10FinalFrame} from '../math-a12-f10/s3';
import {K1, K2, K3, K4} from './cuemap';
import {ANS, AnswerBox, BIKE_LOAN, BIKE_ROWS, Bike, BikeBoard, BoxCard, Chip, Frac, Framed, Hand, INT, MonthGraph, MoneyTable, POS, REP, Row, Sb, SplitBar, Tag, Task, m2} from './parts';
import {NumLine} from './s3';

const lin = (fr: number, a: number, b: number) => Math.max(0, Math.min(1, (fr - a) / (b - a)));
const A = (s: React.ReactNode) => <span style={{color: INT.ink}}>{s}</span>;
const Tq = (s: React.ReactNode) => <span style={{color: REP.ink}}>{s}</span>;
const TAG_LINES = (paid?: React.ReactNode) => [{text: 'Loan $20,000'}, {text: '7.2% p.a., monthly', size: 26}, {text: '$400 a month'}, paid ? {text: paid, size: 26, color: ANS.ink} : null];

// ---------- 1. hook: fifty repayments? ----------
const raceT = (fr: number) => {
	const k = K1;
	if (fr < k.race) return 0;
	if (fr < k.gone + 20) return 50 * lin(fr, k.race + 4, k.gone + 20);
	return 50 + 10 * lin(fr, k.with, k.sixty + 4);
};
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const open = 1 - prog(fr, 14, 14);
	const g = 1 - prog(fr, k.race - 4, 18);
	const t = raceT(fr), n = Math.floor(t + 1e-9);
	const owed = n >= 60 ? 0 : n === 0 ? 20000 : BIKE_ROWS[n - 1].closing;
	const paidInt = BIKE_ROWS.slice(0, n).reduce((s, x) => s + x.interest, 0);
	const race = prog(fr, k.race, 14);
	return (
		<>
			<SceneHeading text="How do we find the term, repayment, balance and total paid?" at={30} size={44} />
			<BikeBoard graph={g} />
			<Chip x={1120} y={800} at={-30} out={k.race - 4} size={52} color={INK}>n = ?</Chip>
			<Chip x={96} y={190} at={k.quick} size={40} color={INK_SOFT}><MarkSpan kind="strike" at={k.sixty} role="mistake" width={6}>20 000 ÷ 400 = 50 repayments?</MarkSpan></Chip>
			<SplitBar x={300} y={300} w={360} M={400} interest={120} label="" at={k.hundred} />
			<Hand x={300} y={256} at={k.hundred} size={34} color={INK}>month 1</Hand>
			<Hand x={300} y={356} at={k.only} size={40} color={REP.ink} w={400}>only $280 pays off the bike</Hand>
			<Chip x={96} y={460} at={k.guess} size={34} color={INK}>50  /  <MarkSpan kind="circle" at={k.sixty + 6} role="answer" width={5}>about 60</MarkSpan>  /  more than 70</Chip>
			<div style={{position: 'absolute', inset: 0, opacity: race}}>
				<LoanBalanceBar x={1160} y={380} width={150} height={460} max={20000} P={BIKE_LOAN.P} r={BIKE_LOAN.r} M={BIKE_LOAN.M} t={n} ghost={{label: 'no interest', at: k.race}} label="with interest" at={k.race} />
				<LiveReadoutBoard x={1120} y={168} width={740} at={k.race} inline size={46} labelSize={30} rows={[
					{label: 'repayments', value: n, digits: 0},
					{label: 'still owed (with interest)', value: owed, format: m2},
					{label: 'interest so far', value: paidInt, format: m2, role: 'interest'},
				]} />
				<Hand x={1490} y={904} at={k.gone} size={40} color={INK_SOFT}>interest-free: 50</Hand>
				<Hand x={1140} y={904} at={k.sixty} size={40} color={ANS.ink}>real: 60</Hand>
			</div>
			{open > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: open}}><F10FinalFrame /></div> : null}
		</>
	);
};

// ---------- 2. paid off means zero ----------
const RX = 700;
const slot = (v: React.ReactNode, o: number, color?: string) => <span style={{position: 'relative', display: 'inline-block'}}>
	<span style={{opacity: o, color}}>{v}</span>
	<span style={{position: 'absolute', inset: '-2px -6px', border: `3px dashed ${INK_SOFT}`, borderRadius: 10, opacity: 1 - o}} />
</span>;
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	return (
		<>
			<SceneHeading text="Paid off means zero" at={4} size={52} />
			<Task x={96} y={160} w={1728} at={-30} size={44}>How many monthly repayments are needed to repay the loan?</Task>
			<BoxCard x={96} y={300} w={580} at={-30} size={40} title="givens">
				<div style={{fontWeight: 800}}>P = $20,000</div>
				<div style={{fontWeight: 800, color: INT.ink}}>7.2% p.a., monthly: r = 0.006</div>
				<div style={{fontWeight: 800, color: REP.ink}}>M = $400</div>
			</BoxCard>
			<Bike x={96} y={570} w={540} />
			<BoxCard x={RX} y={420} w={1000} at={8} out={k.an - 8} size={42} title="plan">
				<div>Repaid means the balance is zero.</div>
				<div style={{marginTop: 10}}>Write the balance formula, put in P, r and M, set it to 0, and find n.</div>
			</BoxCard>
			<Chip x={RX} y={300} at={k.after} size={44} color={ANS.ink}>repaid: A<Sb>n</Sb> = 0</Chip>
			<Row x={RX} y={400} at={k.an} size={50} dim={prog(fr, k.set, 12) * 0.5} small={44}>A<sub>n</sub> = P{A(<>(1 + r)<Pow>n</Pow></>)} {Tq('− M')} × <Frac n={<>(1 + r)<Pow>n</Pow> − 1</>} d="r" /></Row>
			<Hand x={RX + 820} y={430} at={k.formula} size={36} color={POS} w={300}>the balance formula, two videos ago</Hand>
			<Row x={RX} y={560} at={k.here} size={50}>A<sub>n</sub> = {slot('20 000', prog(fr, k.here + 18, 10))}{A(<>({slot('1.006', prog(fr, k.r, 10))})<Pow>{slot('n', 0)}</Pow></>)} − {slot(Tq('400'), prog(fr, k.m, 10))} × <Frac n={<>1.006<Pow>n</Pow> − 1</>} d="0.006" /></Row>
			<Row x={RX} y={730} at={k.zero} size={54}><span style={{color: ANS.ink}}>0</span> = 20 000{A(<>(1.006)<Pow>n</Pow></>)} {Tq('− 400')} × <Frac n={<>1.006<Pow>n</Pow> − 1</>} d="0.006" /></Row>
			<Hand x={RX} y={880} at={k.unknown} size={42} color={INK}>this time the unknown is n</Hand>
		</>
	);
};

// ---------- 3. solving for the term ----------
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const d = (a: number) => prog(fr, a, 12);
	return (
		<>
			<SceneHeading text="Solving for the term" at={4} size={52} />
			<Row x={96} y={160} at={-30} size={40} dim={1} small={34}>0 = 20 000(1.006)<Pow>n</Pow> − 400 × <Frac n={<>1.006<Pow>n</Pow> − 1</>} d="0.006" /></Row>
			<BoxCard x={96} y={600} w={1080} at={-30} out={k.take - 8} size={48} title="plan">
				<div>Multiply by r, so the first month's interest appears.</div>
				<div style={{marginTop: 10}}>Gather the powers, then take logs to bring n down.</div>
			</BoxCard>
			<Row x={96} y={270} at={k.mult} size={50} dim={d(k.gather) * 0.7} small={40}>{A('120')}(1.006)<Pow>n</Pow> = 400(1.006)<Pow>n</Pow> − 400</Row>
			<Hand x={880} y={282} at={k.first} out={k.gather + 30} size={40} color={INT.ink} w={460}>120 = Pr: the first month's interest</Hand>
			<Row x={96} y={370} at={k.gather} size={50} dim={d(k.so) * 0.7} small={40}>{Tq('280')}(1.006)<Pow>n</Pow> = 400</Row>
			<Hand x={560} y={384} at={k.two80} out={k.take} size={38} color={REP.ink} w={440}>280: the part of M that pays the debt in month 1</Hand>
			<Row x={96} y={460} at={k.so} size={52} dim={d(k.take) * 0.7} small={40}>(1.006)<Pow>n</Pow> = <Frac n="10" d="7" /></Row>
			<Row x={96} y={590} at={k.take} size={52} dim={d(k.nis) * 0.7} small={40}>n log 1.006 = log<Frac n="10" d="7" /></Row>
			<Hand x={760} y={604} at={k.comes} size={40} color={POS} w={460}>n comes down from the power</Hand>
			<Row x={96} y={720} at={k.nis} size={54}>n = log<Frac n="10" d="7" /> ÷ log 1.006<span style={{color: POS, opacity: d(k.about)}}>  ≈ 59.62</span></Row>
			<MonthGraph x={1250} y={190} width={620} height={360} curves={[{...BIKE_LOAN}]} extra={m => {
				const [x0, y0] = m.p(59.62, 0);
				return <g opacity={d(k.about)}><line x1={x0} x2={x0} y1={y0} y2={y0 - 70} stroke={INK} strokeWidth={4} strokeDasharray="8 7" /><text x={x0 - 8} y={y0 - 80} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: INK}}>59.62</text></g>;
			}} />
			<GivensStrip x={1180} y={600} size={32} maxW={720} items={[{content: 'P = $20,000', role: 'balance', at: -30}, {content: 'r = 0.006', role: 'interest', at: -30}, {content: 'M = $400', role: 'repay', at: -30}]} />
			<BoxCard x={1180} y={720} w={690} at={k.this} size={40} title="in general" edge={INT.stroke}>
				<div style={{fontWeight: 800}}>(1 + r)<Pow>n</Pow> = <Frac n="M" d="M − Pr" />   needs M &gt; Pr</div>
				<div style={{fontSize: 30, color: POS, opacity: d(k.matched)}}>M = Pr: divide by 0, the balance stays put</div>
				<div style={{fontSize: 30, color: POS, opacity: d(k.less)}}>M &lt; Pr: no power can equal a negative</div>
			</BoxCard>
		</>
	);
};

// ---------- 4. rounding up and the total ----------
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const R = BIKE_ROWS;
	const cols = [{head: 'month', w: 120, align: 'center' as const}, {head: 'owed at start', w: 250}, {head: 'interest', w: 200, color: INT.ink}, {head: 'repayment', w: 230, color: REP.ink}, {head: 'owed at end', w: 240}];
	const sc = 0.04;
	const tw = 23849.87 * sc, iw = 3849.87 * sc;
	return (
		<>
			<SceneHeading text="Round the term up" at={4} size={52} />
			<NumLine x={180} y={250} w={900} lo={57} hi={61} mark={{v: 59.62, label: '59.62', at: -30}} ringAt={k.always} ring={60} crossAt={k.owing} cross={59} />
			<MoneyTable x={96} y={350} cols={cols} size={36} rowH={58} rows={[
				[{text: '1', at: -30}, {text: m2(R[0].opening), at: -30}, {text: m2(R[0].interest), at: -30}, {text: '$400.00', at: -30}, {text: m2(R[0].closing), at: -30}],
				[{text: '⋮', at: -30}, {text: '⋮', at: -30}, {text: '⋮', at: -30}, {text: '⋮', at: -30}, {text: '⋮', at: -30}],
				[{text: '59', at: k.after}, {text: m2(R[58].opening), at: k.after}, {text: m2(R[58].interest), at: k.after}, {text: '$400.00', at: k.after}, {text: m2(R[58].closing), at: k.owing - 20, frame: k.owing - 20}],
				[{text: '60', at: k.needs}, {text: m2(R[59].opening), at: k.needs}, {text: m2(R[59].interest), at: k.just - 30}, {text: m2(R[59].repayment), at: k.just, color: REP.ink}, {text: '$0.00', at: k.just + 20}],
			]} />
			<Hand x={1196} y={530} at={k.owing} size={40} color={INK}>59 leaves $248.38</Hand>
			<Hand x={1196} y={590} at={k.just} size={40} color={REP.ink}>the last one is smaller</Hand>
			<AnswerBox x={96} y={700} at={k.always} size={50}>60 repayments</AnswerBox>
			<Hand x={560} y={716} at={k.always + 10} size={44} color={ANS.ink}>round up</Hand>
			<Row x={96} y={800} at={k.lots} size={44}>59 × 400 + 249.87 <span style={{opacity: prog(fr, k.which, 10)}}>= </span></Row>
			<AnswerBox x={530} y={792} at={k.cents} size={46}>$23,849.87 paid</AnswerBox>
			{fr >= k.take ? <FrameSvg style={{opacity: prog(fr, k.take, 14)}}>
				<rect x={96} y={890} width={tw - iw} height={50} fill="#ebe4d6" stroke={INK} strokeWidth={3} />
				<rect x={96 + tw - iw} y={890} width={iw} height={50} fill={INT.soft} stroke={INT.stroke} strokeWidth={3} />
				<text x={112} y={926} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: INK}}>borrowed $20,000.00</text>
				<text x={96 + tw + 16} y={926} opacity={prog(fr, k.interest - 10, 10)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: INT.ink}}>interest $3,849.87</text>
			</FrameSvg> : null}
			<Tag x={1580} y={250} h={560} size={30} lines={TAG_LINES(fr >= k.always ? 'Paid off: 60' : undefined)} />
			<Bike x={1160} y={690} w={420} />
		</>
	);
};
export {Framed};
