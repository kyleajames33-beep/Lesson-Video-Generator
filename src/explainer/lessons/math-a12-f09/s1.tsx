// Scenes 1 to 5: f08's loan strip and a first car loan (the statement and the car), one month of the loan (interest
// on what is still owed, r = 0.072 ÷ 12 = 0.006; × 1.006, then − $600), the recurrence Aₙ₊₁ = (1 + r)Aₙ − M (interest
// first), the three-month balance table, and why each repayment pays off more (the split bars, then all 60 months).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, LoanBalanceBar, MarkSpan, Pow, SceneHeading, fmtMoney} from '../../math/studio';
import {F08FinalFrame} from '../math-a12-f08/s3';
import {K1, K2, K3, K4, K5} from './cuemap';
import {AMBER, AnswerBox, BROWN, BoxCard, CAR, CAR_ROWS, CARD, Car, Chip, Framed, Hand, INT, LoanStrip, MoneyTable, POS, REP, Row, Slip, SplitBar, Statement, ZoomBar, m2, stMap, ST_TABLE} from './parts';

const lin = (fr: number, a: number, b: number) => Math.max(0, Math.min(1, (fr - a) / (b - a)));

// ---------- the opening: f08's last frame (imported read-only) ----------

// ---------- 1. hook: what goes under the question mark? ----------
const ST1 = {x: 1262, y: 168, h: 830};
const ST2 = {x: 40, y: 200, h: 700};
const stFields = (fr: number, o: {loan?: number; rate?: number; rateText?: React.ReactNode; repay?: number; owing?: number; owingText?: React.ReactNode; rateGlow?: [number, number]; repGlow?: [number, number]; owGlow?: [number, number]; size?: number}) => [
	{label: 'Loan', value: '$30,000', at: o.loan ?? -30, size: o.size},
	{label: 'Rate', value: o.rateText ?? '0.6%/month', at: o.rate ?? -30, size: o.size === undefined ? 34 : o.size - 2, glow: o.rateGlow ? {from: o.rateGlow[0], to: o.rateGlow[1], color: INT.soft} : undefined},
	{label: 'Repay', value: '$600/month', at: o.repay ?? -30, size: o.size === undefined ? 34 : o.size - 2, glow: o.repGlow ? {from: o.repGlow[0], to: o.repGlow[1], color: REP.soft} : undefined},
	{label: 'Owing', value: o.owingText ?? '?', at: o.owing ?? -30, size: o.size, color: o.owingText ? INK : INK_SOFT, glow: o.owGlow ? {from: o.owGlow[0], to: o.owGlow[1], color: '#dcefe2'} : undefined},
];
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const open = 1 - prog(fr, 14, 14);
	const teal = prog(fr, k.rep, 16);
	const pulse = (a: number) => Math.max(0, 1 - Math.abs(fr - a - 12) / 14);
	return (
		<>
			<SceneHeading text="How does a reducing-balance loan evolve period by period?" at={30} size={46} />
			<LoanStrip show={{tab2: 1}} teal={teal} pulse1={pulse(k.mult)} pulse2={pulse(k.rep)} />
			<Hand x={690} y={196} at={k.rep} size={40} color={REP.ink}>repayment</Hand>
			<Statement x={ST1.x} y={ST1.y} h={ST1.h} header="Car loan statement" fields={stFields(fr, {loan: k.borrow + 20, rate: k.each, repay: k.then, owing: k.sowhat, rateGlow: [k.mult, k.rep], repGlow: [k.rep, k.next], size: 36})} at={22} />
			<Car x={80} y={662} w={620} at={k.first} />
			<Hand x={300} y={630} at={k.borrow + 30} size={38} color={POS}>a used car</Hand>
			<Chip x={744} y={712} at={k.next} size={40} color={INK}>more, less or the same?</Chip>
			<Hand x={760} y={800} at={k.more} size={36} color={POS} w={470}>of the next $600, how much goes to the debt?</Hand>
			{fr >= k.guess ? <FrameSvg><DrawPath d="M736,700 C 720,660 1180,650 1236,700 C 1290,760 1210,800 980,800 C 780,800 700,770 736,706" at={k.guess} dur={18} color={INT.stroke} width={6} /></FrameSvg> : null}
			{open > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: open}}><F08FinalFrame /></div> : null}
		</>
	);
};

// ---------- the bar rig of scenes 2 and 3 ----------
const BAR = {x: 730, base: 860, width: 140, lo: 28700, pxPer: 0.4};
const barY = (v: number) => BAR.base - (v - BAR.lo) * BAR.pxPer;
const COLX = 1130;

// ---------- 2. one month of a loan ----------
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const t = fr < k.then ? 0.45 * lin(fr, k.first, k.first + 70) : 0.5 + 0.5 * lin(fr, k.then, k.then + 56);
	return (
		<>
			<SceneHeading text="One month of a loan" at={4} size={52} />
			<Statement x={ST2.x} y={ST2.y} h={ST2.h} header="Car loan statement" labelSize={26} fields={stFields(fr, {rate: k.rate, rateText: fr < k.zero ? '7.2% p.a.' : '0.6%/month', rateGlow: [k.charged, k.over + 40], repGlow: [k.then, k.so], owingText: fr >= k.dollars - 10 ? '$29,580.00' : undefined, owGlow: [k.dollars - 10, k.dollars + 60], size: 30})} />
			<Hand x={60} y={150} at={k.principal} out={k.reducing - 10} size={38} color={POS} w={480}>Loan: the principal</Hand>
			<Hand x={60} y={906} at={k.balance} size={38} color={POS} w={480}>Owing: the balance</Hand>
			<ZoomBar x={BAR.x} base={BAR.base} width={BAR.width} lo={BAR.lo} pxPer={BAR.pxPer} P={CAR.P} r={CAR.r} M={CAR.M} t={t} readout={{x: 660, y: 168}} capText={v => `+${m2(v)}`} />
			<Hand x={COLX} y={170} at={k.principal} size={42} color={INK} w={740}>principal: the amount you borrow</Hand>
			<Hand x={COLX} y={226} at={k.balance} size={42} color={INK} w={740}>balance: the amount you still owe</Hand>
			<Hand x={COLX} y={296} at={k.charged} size={42} color={AMBER} w={740}>interest is charged on what is still owed</Hand>
			{fr >= k.not ? <FrameSvg><DrawPath d={`M${COLX - 10},${330} C ${COLX - 70},${410} ${BAR.x + BAR.width + 80},${barY(30000) + 60} ${BAR.x + BAR.width + 10},${barY(30000) + 26}`} at={k.not} dur={16} color={INT.stroke} width={5} /></FrameSvg> : null}
			<BoxCard x={COLX} y={372} w={740} at={k.rate} size={38} title="givens">
				<div>7.2% p.a., compounded monthly</div>
				<div style={{color: REP.ink, opacity: prog(fr, k.then, 10)}}>repayment M = $600 a month</div>
			</BoxCard>
			<Row x={COLX} y={560} at={k.r} size={48}><span style={{color: INT.ink}}>r</span> = <span style={{opacity: prog(fr, k.over - 30, 10)}}>0.072 ÷ 12</span><span style={{opacity: prog(fr, k.zero, 10)}}> = 0.006</span></Row>
			<Hand x={COLX} y={630} at={k.zero + 20} size={38} color={POS}>0.6% each month</Hand>
			<Row x={COLX} y={690} at={k.first} size={44} color={INT.ink}>1.  × 1.006:  + $180.00</Row>
			<Row x={COLX} y={770} at={k.then} size={44} color={REP.ink}>2.  − $600.00</Row>
			<AnswerBox x={COLX} y={850} at={k.dollars - 10} size={48}>owed: $29,580.00</AnswerBox>
		</>
	);
};

// ---------- 3. the recurrence ----------
const RN = <>A<sub>n+1</sub></>;
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const noM = Math.max(0, Math.min(prog(fr, k.without, 12), 1 - prog(fr, k.so, 12)));
	const gh = noM;
	const g0 = barY(29580 * 1.006), g1 = barY(29580);
	return (
		<>
			<SceneHeading text="The recurrence" at={4} size={52} />
			<Statement x={ST2.x} y={ST2.y} h={ST2.h} header="Car loan statement" labelSize={26} fields={stFields(fr, {owingText: '$29,580.00', size: 30})} />
			<ZoomBar x={BAR.x} base={BAR.base} width={BAR.width} lo={BAR.lo} pxPer={BAR.pxPer} P={CAR.P} r={CAR.r} M={CAR.M} t={1} readout={{x: 660, y: 168}}
				ticks={[{k: 0, label: 'A₀', at: k.a0}, {k: 1, label: 'A₁', at: k.a0 + 20}]} />
			{gh > 0.01 ? <FrameSvg style={{opacity: gh}}><rect x={BAR.x} y={g0} width={BAR.width} height={g1 - g0} fill={INT.soft} stroke={INT.stroke} strokeWidth={4} strokeDasharray="10 7" /><text x={BAR.x + BAR.width + 16} y={(g0 + g1) / 2 + 14} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, fill: INT.ink}}>× 1.006, no repayment</text></FrameSvg> : null}
			<Row x={COLX} y={170} at={-30} size={40} dim={prog(fr, k.call, 12)} small={34}>30 000 × 1.006 − 600 = 29 580</Row>
			<Hand x={COLX} y={240} at={k.call} size={42} color={INK} w={740}>A<sub>n</sub>: the balance after n months</Hand>
			<Row x={COLX} y={300} at={k.a0} size={40}>A<sub>0</sub> = 30 000,  A<sub>1</sub> = 29 580</Row>
			<Hand x={COLX} y={380} at={k.rule} size={40} color={POS} w={740}>recurrence: a rule that gives the next value from the one before</Hand>
			<Row x={COLX} y={486} at={k.here} size={44} dim={prog(fr, k.eq, 12)} small={36}>{RN} = 1.006A<sub>n</sub> − 600</Row>
			<Framed x={COLX} y={570} at={k.eq} size={58}>{RN} = <span style={{color: INT.ink}}>(1 + r)</span>A<sub>n</sub><span style={{color: REP.ink, opacity: 1 - 0.8 * noM}}> − M</span></Framed>
			<Hand x={COLX} y={700} at={k.times - 10} size={38} color={INT.ink}>r: rate per period</Hand>
			<Hand x={COLX + 380} y={700} at={k.rep} size={38} color={REP.ink}>M: repayment</Hand>
			<Hand x={COLX} y={760} at={k.comp - 10} out={k.so} size={40} color={POS} w={740}>compound interest only</Hand>
			<Hand x={COLX} y={760} at={k.so + 6} out={k.and - 4} size={40} color={POS} w={740}>compound interest + a repayment every period</Hand>
			<Slip x={COLX} y={770} at={k.and + 8} size={40} caption="interest first, then the repayment">A<sub>1</sub> = 1.006 × (30 000 − 600)</Slip>
		</>
	);
};

// ---------- 4. a balance table ----------
const TCOLS = [{head: 'month', w: 112, align: 'center' as const}, {head: 'owed at start', w: 246}, {head: 'interest', w: 190, color: INT.ink}, {head: 'repayment', w: 210, color: REP.ink}, {head: 'debt paid off', w: 228, color: REP.ink}, {head: 'owed at end', w: 246}];
const ROW = (i: number) => CAR_ROWS[i];
export const tableRows = (c: {m: number[]; s: number[]; i: number[]; r: number[]; d: number[]; e: number[]; frame?: number}) => [0, 1, 2].map(j => [
	{text: String(j + 1), at: c.m[j]}, {text: m2(ROW(j).opening), at: c.s[j]}, {text: m2(ROW(j).interest), at: c.i[j]}, {text: '$600.00', at: c.r[j]},
	{text: m2(ROW(j).repayment - ROW(j).interest), at: c.d[j]}, {text: m2(ROW(j).closing), at: c.e[j], frame: j === 2 ? c.frame : undefined},
]);
const SPLIT = {x: 900, w: 900};
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const owing = fr >= k.ans ? '$28,732.42' : fr >= k.debt2 ? '$29,157.48' : '$29,580.00';
	const m = stMap(ST2.x, ST2.y, ST2.h);
	const [tx0, ty0] = m.at(ST_TABLE[0], ST_TABLE[1]), [tx1, ty1] = m.at(ST_TABLE[2], ST_TABLE[3]);
	const lo = prog(fr, k.here, 14);
	return (
		<>
			<SceneHeading text="Three months in a table" at={4} size={52} />
			<Statement x={ST2.x} y={ST2.y} h={ST2.h} header="Car loan statement" labelSize={26} fields={stFields(fr, {owingText: owing, owGlow: [k.ans, k.ans + 90], size: 30})} />
			{lo > 0.01 ? <FrameSvg style={{opacity: lo}}>
				<rect x={tx0 - 4} y={ty0 - 4} width={tx1 - tx0 + 8} height={ty1 - ty0 + 8} rx={6} fill="none" stroke={BROWN} strokeWidth={4} strokeDasharray="10 8" />
				<line x1={tx1 + 4} y1={ty0} x2={590} y2={176} stroke={BROWN} strokeWidth={3} strokeDasharray="8 8" />
				<line x1={tx1 + 4} y1={ty1} x2={590} y2={470} stroke={BROWN} strokeWidth={3} strokeDasharray="8 8" />
			</FrameSvg> : null}
			<MoneyTable x={590} y={170} cols={TCOLS} size={38} rowH={64} glowCol={{col: 2, from: k.each, to: k.m1 - 10}}
				rows={tableRows({m: [k.here, k.here, k.here], s: [k.here, k.m2, k.m3], i: [k.i1, k.i2, k.i3], r: [k.here + 10, k.here + 10, k.here + 10], d: [k.d1, k.d2, k.falls + 6], e: [k.d1 + 30, k.debt2, k.end], frame: k.ans})}
				note={{text: 'shown to the cent; full values carried to the next row', at: k.rounded}} />
			<Hand x={704} y={484} at={k.each} size={40} color={INT.ink} w={1150}>interest = 0.6% of what is owed at the start of the month</Hand>
			<Hand x={704} y={580} at={k.here + 20} out={k.i1 + 4} size={44} color={POS} w={1150}>each month: the interest is added, then the $600 repayment comes off</Hand>
			<SplitBar x={SPLIT.x} y={566} w={SPLIT.w} M={600} interest={ROW(0).interest} label="month 1" at={k.i1 + 10} />
			<SplitBar x={SPLIT.x} y={634} w={SPLIT.w} M={600} interest={ROW(1).interest} label="month 2" at={k.d2} />
			<SplitBar x={SPLIT.x} y={702} w={SPLIT.w} M={600} interest={ROW(2).interest} label="month 3" at={k.falls + 6} />
			<Hand x={SPLIT.x} y={770} at={k.i1 + 20} size={36} color={POS} w={900}>each $600 repayment: <span style={{color: INT.ink}}>interest</span> first, the rest <span style={{color: REP.ink}}>pays off debt</span></Hand>
			<Hand x={704} y={850} at={k.lower} size={42} color={AMBER} w={1150}>month 2 starts lower, so its interest is smaller</Hand>
		</>
	);
};

// ---------- 5. why each month pays off more; then all 60 months ----------
const S5 = {x: 1150, w: 710};
const runT = (fr: number) => {
	const k = K5;
	if (fr < k.run) return 3;
	if (fr < k.sixtieth) return 3 + 56 * lin(fr, k.run + 4, k.few - 6) ** 1.15;
	return 59 + lin(fr, k.sixtieth + 10, k.sixtieth + 50);
};
const LATE = [12, 24, 36, 48, 59];
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const t = runT(fr);
	const done = t >= 60;
	const mk = Math.min(60, Math.max(3, Math.floor(t + 1e-9)));
	const row = CAR_ROWS[mk - 1];
	const pre = 1 - prog(fr, k.run - 14, 14);
	const passAt = (n: number) => {const a = k.run + 4, b = k.few - 6; const u = ((n - 3) / 56) ** (1 / 1.15); return Math.round(a + u * (b - a));};
	return (
		<>
			<SceneHeading text="Why each month pays off more" at={4} size={52} />
			<Chip x={1000} y={84} at={-30} size={40} color={INK}><MarkSpan kind="circle" at={k.so + 30} role="answer" width={5}>more</MarkSpan>, less or the same?</Chip>
			<LoanBalanceBar x={110} y={300} width={130} height={540} max={30000} P={CAR.P} r={CAR.r} M={CAR.M} t={done ? 60 : Math.floor(t + 1e-9)} label="balance owed" />
			<div style={{position: 'absolute', left: 290, top: 168, width: 440, background: CARD, borderRadius: 18, boxShadow: '0 14px 32px rgba(60,45,20,0.10)', padding: '8px 26px 10px', fontFamily: FONT_DISPLAY}}>
				{[['month', String(mk), INK], ['interest this month', done ? m2(CAR_ROWS[59].interest) : m2(row.interest), INT.ink], ['balance owing', done ? '$0.00' : m2(row.closing), INK]].map(([l, v, c], i) => (
					<div key={i} style={{borderTop: i ? '2px solid #ebe4d6' : undefined, padding: '2px 0 4px'}}>
						<div style={{fontWeight: 700, fontSize: 30, color: c, lineHeight: 1.1}}>{l}</div>
						<div style={{fontWeight: 800, fontSize: 52, color: c, fontVariantNumeric: 'tabular-nums', lineHeight: 1.1}}>{v}</div>
					</div>))}
			</div>
			<Car x={290} y={668} w={440} />
			{done ? <AnswerBox x={290} y={590} at={k.off} size={34}>paid off: 60 repayments</AnswerBox> : null}
			<Hand x={300} y={890} at={k.off + 10} size={36} color={POS}>total paid: $35,774.81</Hand>
			<SplitBar x={S5.x} y={190} w={S5.w} M={600} interest={CAR_ROWS[0].interest} label="month 1" at={-30} />
			<SplitBar x={S5.x} y={250} w={S5.w} M={600} interest={CAR_ROWS[1].interest} label="month 2" at={-30} />
			<SplitBar x={S5.x} y={310} w={S5.w} M={600} interest={CAR_ROWS[2].interest} label="month 3" at={-30} />
			<div style={{position: 'absolute', inset: 0, opacity: pre}}>
				<Hand x={S5.x - 350} y={390} at={k.so} size={42} color={REP.ink}>each month, a little more of the repayment goes to the debt</Hand>
				<Hand x={S5.x - 350} y={450} at={k.stays} size={42} color={REP.ink}>the repayment stays the same: $600</Hand>
				<Hand x={S5.x - 350} y={510} at={k.smaller} size={42} color={INT.ink}>less owed, less interest</Hand>
				<Hand x={S5.x - 350} y={570} at={k.more} size={42} color={REP.ink}>so more of the $600 pays the debt</Hand>
				<Row x={S5.x - 350} y={640} at={k.again} size={40}>less owed → less interest → more to the debt</Row>
				<Hand x={S5.x - 350} y={712} at={k.works} size={38} color={POS} w={1060}>this works because $600 is more than the interest ($180.00 in month 1)</Hand>
				<Hand x={S5.x - 350} y={806} at={k.weren} size={38} color={POS} w={1060}>if the repayment were not more than the interest, the balance would not fall</Hand>
			</div>
			{LATE.map((n, i) => <SplitBar key={n} x={S5.x} y={400 + i * 62} w={S5.w} M={600} interest={CAR_ROWS[n - 1].interest} label={`month ${n}`} at={passAt(n)} ring={n === 59 ? k.few : undefined} />)}
			<SplitBar x={S5.x} y={400 + 5 * 62} w={S5.w} M={600} pay={CAR_ROWS[59].repayment} interest={CAR_ROWS[59].interest} label="month 60" at={k.sixtieth} />
			<Hand x={S5.x - 350} y={786} at={k.sixtieth + 30} size={30} color={POS} w={1060}>last repayment {fmtMoney(CAR_ROWS[59].repayment, 2)}: parts rounded separately, 2.2355 + 372.5757 = 374.8112</Hand>
			<Hand x={S5.x - 350} y={850} at={k.run + 10} size={40} color={INT.ink} w={1060}>the amber interest part shrinks every month</Hand>
		</>
	);
};
export {Pow};
