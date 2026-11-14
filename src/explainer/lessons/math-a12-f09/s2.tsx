// Scenes 6 to 10: unfolding the recurrence (A₁, A₂, A₃: each repayment carries its own power of 1.006, shown on a
// month timeline), the geometric series inside the balance (first term 1, ratio 1.006, n terms), what the closed
// form says (the loan grown minus the repayments grown, live over n; A₃ = $28,732.42 as in the table), a whole home
// loan (balance against years with a riding marker) and the memory aid (grow, then pay).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, LiveReadoutBoard, MarkSpan, Pow, SceneHeading, loanBalance} from '../../math/studio';
import {K6, K7, K8, K9, K10} from './cuemap';
import {AidBar} from './s3';
import {AMBER, AnswerBox, Sb, BoxCard, CAR, CAR_ROWS, CARD, MoneyTable, Car, Chip, Frac, Framed, FramedCard, HOME, HOME_ROWS, Hand, INT, LoanGraph, POS, REP, Row, SplitBar, m2, smooth} from './parts';

const lin = (fr: number, a: number, b: number) => Math.max(0, Math.min(1, (fr - a) / (b - a)));
const A = (s: React.ReactNode) => <span style={{color: INT.ink}}>{s}</span>;
const Tq = (s: React.ReactNode) => <span style={{color: REP.ink}}>{s}</span>;

// ---------- the givens card of scenes 6 to 8 ----------
const Givens: React.FC<{y?: number}> = ({y = 170}) => (
	<BoxCard x={96} y={y} w={520} at={-30} size={44} title="givens">
		<div style={{fontWeight: 800}}>P = $30,000</div>
		<div style={{fontWeight: 800, color: INT.ink}}>r = 0.006 a month</div>
		<div style={{fontWeight: 800, color: REP.ink}}>M = $600</div>
	</BoxCard>
);

// ---------- the month timeline: when each repayment was made, and how long it has stopped interest ----------
const TL = {x0: 800, dx: 300, base: 380};
const Timeline: React.FC<{last: string; general?: boolean; loanAt: number; b2: {at: number; label: string}; b1: {at: number; label: string}; b0: {at: number; label: string}; tag?: {at: number; text: string}}> = ({last, general = false, loanAt, b2, b1, b0, tag}) => {
	const f = useCurrentFrame();
	const X = (m: number) => TL.x0 + m * TL.dx;
	const T = (size: number, fill: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size, fill} as React.CSSProperties);
	const br = (a: number, b: number, y: number, label: string, color: string, at: number) => {const o = prog(f, at, 12); return o <= 0.01 ? null : <g opacity={o}>
		<path d={`M${X(a)},${y + 16} V${y} H${X(b)} V${y + 16}`} fill="none" stroke={color} strokeWidth={5} strokeLinejoin="round" />
		<text x={(X(a) + X(b)) / 2} y={y - 12} textAnchor="middle" style={T(38, color)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{label}</text>
	</g>;};
	return <FrameSvg>
		<line x1={X(0) - 30} x2={X(3) + 40} y1={TL.base} y2={TL.base} stroke={INK} strokeWidth={4} />
		{[0, 1, 2, 3].map(m => <g key={m}>
			<line x1={X(m)} x2={X(m)} y1={TL.base - 12} y2={TL.base + 12} stroke={INK} strokeWidth={4} />
			<text x={X(m)} y={TL.base + 50} textAnchor="middle" style={T(32, INK)}>{m === 3 ? last : general && m === 2 ? '…' : `month ${m}`}</text>
		</g>)}
		<circle cx={X(0)} cy={TL.base} r={12} fill={INK} />
		<text x={X(0) - 14} y={TL.base - 26} textAnchor="end" style={T(34, INK)}>30 000</text>
		{[1, 2, 3].map(m => <g key={m}><rect x={X(m) - 10} y={TL.base - 50} width={20} height={50} fill={REP.stroke} /><text x={X(m) - 18} y={TL.base - 18} textAnchor="end" style={T(32, REP.ink)}>−600</text></g>)}
		{br(0, 3, 200, general ? '(1.006)ⁿ' : '(1.006)³', INK, loanAt)}
		{br(1, 3, 266, b2.label, INT.ink, b2.at)}
		{br(2, 3, 318, b1.label, INT.ink, b1.at)}
		{prog(f, b0.at, 12) > 0.01 ? <text x={X(3)} y={TL.base + 96} textAnchor="middle" opacity={prog(f, b0.at, 12)} style={T(36, INT.ink)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{b0.label}</text> : null}
		{tag && prog(f, tag.at, 12) > 0.01 ? <text x={X(1) - 60} y={TL.base + 100} opacity={prog(f, tag.at, 12)} style={T(40, INT.ink, true)}>{tag.text}</text> : null}
	</FrameSvg>;
};

// ---------- 6. unfolding the rule ----------
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	return (
		<>
			<SceneHeading text="Unfolding the rule" at={4} size={52} />
			<Givens />
			<Timeline last="month 3" loanAt={k.grown} b2={{at: k.two, label: '(1.006)²'}} b1={{at: k.last - 20, label: '(1.006)¹'}} b0={{at: k.last, label: '(1.006)⁰ = 1'}} tag={{at: k.stopped, text: 'stopped 2 months of interest'}} />
			<BoxCard x={96} y={570} w={1100} at={8} out={k.a1 - 8} size={42} title="plan">
				<div>Write A<sub>1</sub>, A<sub>2</sub> and A<sub>3</sub> out in full, without working them out.</div>
				<div style={{marginTop: 10}}>Watch which power of 1.006 each repayment carries.</div>
			</BoxCard>
			<Row x={96} y={560} at={k.a1} size={48} dim={prog(fr, k.a2, 12)} small={36}>A<sub>1</sub> = 30 000{A('(1.006)')} {Tq('− 600')}</Row>
			<Row x={96} y={630} at={k.a2} size={48} dim={prog(fr, k.thats, 12)} small={36}>A<sub>2</sub> = [30 000{A('(1.006)')} {Tq('− 600')}]{A('(1.006)')} {Tq('− 600')}</Row>
			<Row x={96} y={700} at={k.thats} size={48} dim={prog(fr, k.a3, 12)} small={36}>A<sub>2</sub> = 30 000{A(<>(1.006)<Pow>2</Pow></>)} {Tq('− 600')}{A('(1.006)')} {Tq('− 600')}</Row>
			<Row x={96} y={790} at={k.a3} size={54}>A<sub>3</sub> = 30 000{A(<>(1.006)<Pow>3</Pow></>)} {Tq('− 600')}{A(<MarkSpan kind="underline" at={k.two} role="interest" width={5}><>(1.006)<Pow>2</Pow></></MarkSpan>)} {Tq('− 600')}{A('(1.006)')} {Tq('− 600')}</Row>
			<MoneyTable x={1470} y={470} size={34} rowH={58} cols={[{head: 'month', w: 110, align: 'center'}, {head: 'owed at end', w: 250}]} rows={[1, 2, 3].map(m => [{text: String(m), at: -30}, {text: m2(CAR_ROWS[m - 1].closing), at: -30, frame: m === 3 ? -30 : undefined}])} note={{text: 'from the table', at: -30}} />
			<Hand x={96} y={900} at={k.first} size={38} color={POS} w={1500}>the first repayment came off at month 1, so 2 months of interest never grew on it</Hand>
		</>
	);
};

// ---------- 7. a geometric series inside the balance ----------
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	return (
		<>
			<SceneHeading text="A geometric series inside the balance" at={4} size={52} />
			<Givens />
			<Timeline general last="month n" loanAt={-30} b2={{at: -30, label: '(1.006)ⁿ⁻¹'}} b1={{at: -30, label: '(1.006)¹'}} b0={{at: -30, label: '(1.006)⁰'}} />
			<Row x={96} y={600} at={-30} out={k.sum} size={36} color={POS}>A<sub>3</sub> = 30 000(1.006)<Pow>3</Pow> − 600(1.006)<Pow>2</Pow> − 600(1.006) − 600   (last scene)</Row>
			<Row x={96} y={500} at={k.so} size={50} dim={prog(fr, k.its, 12) * 0.6} small={42}>A<sub>n</sub> = 30 000{A(<>(1.006)<Pow>n</Pow></>)} {Tq('− 600')}<MarkSpan kind="underline" at={k.sum + 10} role="repay" width={5}>{Tq(<>(1 + 1.006 + 1.006<Pow>2</Pow> + … + 1.006<Pow>n−1</Pow>)</>)}</MarkSpan></Row>
			<div style={{position: 'absolute', left: 96, top: 590, display: 'flex', gap: 40, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: REP.ink}}>
				{[<>1</>, <>1.006</>, <>1.006<Pow>2</Pow></>, <>…</>, <>1.006<Pow>n−1</Pow></>].map((t, i) => <div key={i} style={{opacity: prog(fr, [k.one, k.one + 50, k.sq - 30, k.up, k.up + 40][i], 10), background: CARD, border: `3px solid ${REP.stroke}`, borderRadius: 14, padding: '2px 0', width: 170, boxSizing: 'border-box', textAlign: 'center'}}>{t}</div>)}
			</div>
			{fr >= k.one + 50 ? <FrameSvg>{[0, 1, 2].map(i => <DrawPath key={i} d={`M${196 + i * 210},584 Q${286 + i * 210},540 ${376 + i * 210},584`} at={k.one + 50 + i * 30} dur={12} color={INT.stroke} width={4} />)}</FrameSvg> : null}
			<Hand x={1150} y={600} at={k.one + 60} size={40} color={INT.ink}>each term is 1.006 × the one before</Hand>
			<Chip x={96} y={700} at={k.first} size={40} color={INT.ink}>GP: first term 1, ratio 1.006, <span style={{opacity: prog(fr, k.terms, 10)}}>n terms</span></Chip>
			<Chip x={1060} y={704} at={k.terms + 20} size={32} color={INK_SOFT}>S<sub>n</sub> = a(r<Pow>n</Pow> − 1) ÷ (r − 1)   from the sequences videos</Chip>
			<Row x={96} y={800} at={k.its} size={46} dim={prog(fr, k.which, 12) * 0.5} small={42}>{Tq(<>1 + 1.006 + … + 1.006<Pow>n−1</Pow></>)} = <Frac n={<>1.006<Pow>n</Pow> − 1</>} d="1.006 − 1" /></Row>
			<Row x={940} y={800} at={k.which} size={52}>= <Frac n={<>1.006<Pow>n</Pow> − 1</>} d={<span style={{opacity: prog(fr, k.six, 10)}}>0.006</span>} /></Row>
			<Hand x={1390} y={812} at={k.notice} size={46} color={INT.ink}>ratio 1 + r, not r</Hand>
			<Hand x={1390} y={880} at={k.not} size={36} color={POS}>r = 0.006 is the interest rate</Hand>
		</>
	);
};

// ---------- 8. what the formula says ----------
const BARS = {x: 1060, base: 860, w: 190, gap: 120, pxPer: 0.0145};
const nSweep = (fr: number) => {
	const k = K8;
	if (fr < k.read) return 3;
	if (fr < k.three) return Math.round(3 + 54 * smooth(lin(fr, k.read + 10, k.diff - 10)));
	return Math.round(57 - 54 * smooth(lin(fr, k.three - 26, k.three + 4)));
};
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const n = nSweep(fr);
	const grown = 30000 * 1.006 ** n, reps = 100000 * (1.006 ** n - 1), owed = grown - reps;
	const Y = (v: number) => BARS.base - v * BARS.pxPer;
	const x1 = BARS.x, x2 = BARS.x + BARS.w + BARS.gap;
	const hand = (x: number, y: number, t: string, c: string, o: number) => <text x={x} y={y} textAnchor="middle" opacity={o} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, fill: c}}>{t}</text>;
	return (
		<>
			<SceneHeading text="What the formula says" at={4} size={52} />
			<Row x={96} y={170} at={-30} size={44} dim={prog(fr, k.gen + 20, 12) * 0.5} small={40}>A<sub>n</sub> = 30 000{A(<>(1.006)<Pow>n</Pow></>)} {Tq('− 100 000')}{Tq(<>(1.006<Pow>n</Pow> − 1)</>)}</Row>
			<Hand x={96} y={236} at={-30} size={36} color={POS}>600 ÷ 0.006 = 100 000</Hand>
			<Framed x={96} y={300} at={k.gen} size={56}>A<sub>n</sub> = P{A(<>(1 + r)<Pow>n</Pow></>)} {Tq('− M')} × <Frac n={<>{A(<>(1 + r)<Pow>n</Pow></>)} − 1</>} d="r" /></Framed>
			<Chip x={96} y={476} at={k.gen + 40} size={30} color={INK_SOFT}>r ≠ 0 (if r = 0: A<sub>n</sub> = P − nM)</Chip>
			<Chip x={96} y={530} at={k.gen + 50} size={30} color={INK_SOFT}>rate: nominal annual ÷ 12, compounded monthly</Chip>
			<FrameSvg>
				<line x1={x1 - 40} x2={x2 + BARS.w + 40} y1={BARS.base} y2={BARS.base} stroke={INK} strokeWidth={4} />
				<rect x={x1} y={Y(grown)} width={BARS.w} height={grown * BARS.pxPer} fill="#ebe4d6" stroke={INK} strokeWidth={4} />
				<rect x={x2} y={Y(reps)} width={BARS.w} height={Math.max(3, reps * BARS.pxPer)} fill={REP.soft} stroke={REP.stroke} strokeWidth={4} />
				<line x1={x1 + BARS.w} x2={x2 + BARS.w + 20} y1={Y(grown)} y2={Y(grown)} stroke={INK} strokeWidth={2.5} strokeDasharray="8 7" />
				{owed > 50 ? <g opacity={prog(fr, k.what, 12)}><path d={`M${x2 + BARS.w + 22},${Y(grown)} h14 V${Y(reps)} h-14`} fill="none" stroke="#2e7d4f" strokeWidth={5} /><text x={x2 + BARS.w + 46} y={(Y(grown) + Y(reps)) / 2 + 14} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, fill: '#287347'}}>owed</text></g> : null}
				{hand(x1 + BARS.w / 2, BARS.base + 44, 'the loan,', INK, 1)}
				{hand(x1 + BARS.w / 2, BARS.base + 84, 'grown', INK, 1)}
				{hand(x2 + BARS.w / 2, BARS.base + 44, 'the repayments,', REP.ink, 1)}
				{hand(x2 + BARS.w / 2, BARS.base + 84, 'grown', REP.ink, 1)}
			</FrameSvg>
			<LiveReadoutBoard x={96} y={600} width={800} at={-30} out={k.three - 16} inline size={48} labelSize={30} rows={[
				{label: 'months n', value: n, digits: 0},
				{label: 'the loan, grown', value: grown, format: m2, glow: [k.first, k.second]},
				{label: 'the repayments, grown', value: reps, format: m2, role: 'repay', glow: [k.second, k.what]},
				{label: 'owed: the difference', value: Math.max(0, owed), format: m2, role: 'answer', glow: [k.what, k.three - 16]},
			]} />
			<Row x={96} y={600} at={k.three} size={42} dim={prog(fr, k.table, 12) * 0.4}>A<sub>3</sub> = 30 000{A('(1.018108216)')}</Row>
			<Row x={96} y={660} at={k.three + 10} size={42} dim={prog(fr, k.table, 12) * 0.4}>{'       '}{Tq('− 100 000(0.018108216)')}</Row>
			<Row x={96} y={730} at={k.gives} size={42} color={POS}>{'     '}= 30 543.2465 − 1 810.8216</Row>
			<AnswerBox x={96} y={822} at={k.table} size={52}>A<Sb>3</Sb> = $28,732.42</AnswerBox>
			<Hand x={620} y={846} at={k.table + 10} size={42} color={POS}>the same as the table  ✓</Hand>
		</>
	);
};

// ---------- 9. a whole loan ----------
const marker9 = (fr: number) => 242 * smooth(lin(fr, K9.slowly, K9.years));
export const S09: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K9;
	const mo = marker9(fr);
	const km = Math.max(1, Math.ceil(mo - 1e-9)), row = HOME_ROWS[km - 1];
	const bal = mo < 1e-6 ? HOME.P : Math.max(0, loanBalance(HOME.P, HOME.r, HOME.M, Math.round(mo)));
	const up = 31 * smooth(lin(fr, k.home, k.at + 20));
	return (
		<>
			<SceneHeading text="A whole home loan" at={4} size={52} />
			<BoxCard x={96} y={170} w={600} at={-30} size={36} title="givens">
				<div>$400,000 loan</div>
				<div style={{color: INT.ink}}>5% p.a., compounded monthly</div>
				<div style={{color: REP.ink, opacity: prog(fr, k.at, 10)}}>$2,147.29 a month</div>
				<div style={{fontSize: 30, color: POS}}>r = 0.05 ÷ 12 = 1/240</div>
			</BoxCard>
			<Chip x={96} y={446} at={k.at + 20} size={28} color={INK_SOFT}>repayment found in a later video</Chip>
			<LiveReadoutBoard x={96} y={514} width={600} at={-30} inline size={44} labelSize={28} rows={[
				{label: 'years', value: mo / 12, format: v => v.toFixed(1)},
				{label: 'balance owed', value: bal, format: m2},
				{label: "this month's interest", value: row.interest, format: m2, role: 'interest', glow: [k.first, k.so]},
				{label: 'debt paid off', value: row.repayment - row.interest, format: m2, role: 'repay', glow: [k.first, k.so]},
			]} />
			<SplitBar x={290} y={852} w={400} M={HOME.M} interest={row.interest} label="" at={k.first} />
			<Hand x={290} y={902} at={k.more} out={k.slowly + 20} size={36} color={INT.ink}>≈ 78% of it is interest</Hand>
			<LoanGraph x={790} y={190} width={1070} height={660} curves={[{...HOME, upTo: up}]} half={{value: 200000, label: 'half: $200,000', o: 1}} chord={prog(fr, k.so, 16)} marker={{months: mo, o: prog(fr, k.first, 12)}}
				extra={m => {
					const [hx, hy] = m.p(15, Math.max(0, loanBalance(HOME.P, HOME.r, HOME.M, 180)));
					const [ex, ey] = m.p(20.2, 200000);
					return <g>
						{mo > 180 ? <text x={hx - 20} y={hy - 34} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">15 years: still above half</text> : null}
						<text x={ex - 16} y={ey + 64} textAnchor="end" opacity={prog(fr, k.years, 12)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: '#287347'}} stroke={CARD} strokeWidth={7} paintOrder="stroke">below half after repayment 242 (about 20 years)</text>
						{(() => {const [cx, cy] = m.p(21, 40000); return <text x={cx} y={cy} textAnchor="middle" opacity={prog(fr, k.at + 40, 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK_SOFT}} stroke={CARD} strokeWidth={6} paintOrder="stroke">last repayment ≈ $2,144.37</text>;})()}
					</g>;
				}} />
			<Hand x={930} y={650} at={k.slowly} size={42} color={POS}>slowly at first, then faster</Hand>
		</>
	);
};

// ---------- 10. memory aid ----------
export const S10: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K10;
	const t = fr < k.then ? 0.45 * lin(fr, k.balance + 10, k.times + 20) : 0.5 + 0.5 * lin(fr, k.then + 10, k.minus + 14);
	const hand = (size: number, color = INK): React.CSSProperties => ({position: 'absolute', fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color, whiteSpace: 'pre', lineHeight: 1.1});
	return (
		<>
			<FramedCard x={200} y={150} w={1520} h={790} at={-30} />
			<div style={{...hand(46, POS), left: 260, top: 172}}>Memory aid</div>
			<Car x={260} y={270} w={520} />
			<FrameSvg><AidBar x={330} y={560} s={1.25} t={t} /></FrameSvg>
			<div style={{...hand(104), left: 880, top: 250, opacity: prog(fr, k.grow, 12)}}>Grow, then pay.</div>
			<div style={{...hand(50, INT.ink), left: 880, top: 440, opacity: prog(fr, k.balance, 12)}}>× (1 + r): the interest goes on first</div>
			<div style={{...hand(50, REP.ink), left: 880, top: 530, opacity: prog(fr, k.then, 12)}}>− M: then the repayment comes off</div>
			<Framed x={880} y={680} at={k.minus} size={60}>A<sub>n+1</sub> = {A('(1 + r)')}A<sub>n</sub> {Tq('− M')}</Framed>
		</>
	);
};
export {AMBER, CAR, Car, INK};
