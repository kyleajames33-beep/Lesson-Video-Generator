// Scenes 5 to 8: turning it around for the repayment (a dial on the tag sweeps M while the curve's end moves in;
// M = Pr(1 + r)ⁿ ÷ [(1 + r)ⁿ − 1]), the 4-year repayment and the two totals ($480.78; less time, less interest), the
// amount still owing after 2 years (a marker rides the curve; A₂₄ = $12,795.26) and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, LiveReadoutBoard, ParameterSlider, Pow, SceneHeading, loanBalance, loanSchedule, loanTerm} from '../../math/studio';
import {K5, K6, K7, K8} from './cuemap';
import {ANS, AnswerBox, BIKE_LOAN, Bike, BoxCard, Chip, Frac, Framed, FramedCard, Hand, INT, M48, MonthGraph, POS, REP, Row, Sb, Tag, Task, m2, smooth} from './parts';

const lin = (fr: number, a: number, b: number) => Math.max(0, Math.min(1, (fr - a) / (b - a)));
const A = (s: React.ReactNode) => <span style={{color: INT.ink}}>{s}</span>;
const Tq = (s: React.ReactNode) => <span style={{color: REP.ink}}>{s}</span>;
const totalPaid = (M: number) => loanSchedule(20000, 0.006, M).reduce((s, x) => s + x.repayment, 0);

// ---------- the dial board of scenes 5 and 6 ----------
const Dial: React.FC<{M: number; settled: boolean; q?: number}> = ({M, settled, q = 0}) => {
	const n = Math.ceil(loanTerm(20000, 0.006, M) - 0.01);
	return <>
		<Tag x={96} y={190} h={520} size={30} lines={[{text: 'Loan $20,000'}, {text: '7.2% p.a., monthly', size: 26}, {text: settled ? `M = ${m2(M)}` : q > 0.5 ? 'M = ?' : `M = ${m2(M)}`, color: REP.ink}, {text: 'Paid off: 48?', size: 28, color: INK_SOFT}]} />
		<ParameterSlider x={110} y={800} width={260} symbol="M" role="repay" value={M} min={380} max={500} ticks={[{value: 400, label: '400'}, {value: 480, label: '480'}]} digits={2} format={v => '$' + v.toFixed(0)} />
		<MonthGraph x={470} y={190} width={680} height={430} curves={[{...BIKE_LOAN, color: INK_SOFT, dash: '14 10', width: 5}, {P: 20000, r: 0.006, M}]} extra={m => {
			const [tx, ty] = m.p(48, 0), [, top] = m.p(48, 20000);
			return <g><line x1={tx} x2={tx} y1={ty} y2={top} stroke={INK} strokeWidth={4} strokeDasharray="14 10" /><text x={tx - 10} y={top + 6} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: INK}}>$0 at 48 months</text></g>;
		}} />
		<LiveReadoutBoard x={470} y={700} width={680} at={-30} inline size={46} labelSize={30} rows={[
			{label: 'repayment', value: M, format: m2, role: 'repay'},
			{label: 'paid off after', value: n, format: v => `${v} repayments`},
			{label: 'total paid', value: totalPaid(M), format: m2},
		]} />
	</>;
};
const RX = 1210;

// ---------- 5. turning it around: the repayment ----------
const M5 = (fr: number) => 400 + 72 * smooth(lin(fr, K5.what, K5.set - 10));
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const d = (a: number) => prog(fr, a, 12);
	return (
		<>
			<SceneHeading text="Turn it around: the repayment" at={4} size={52} />
			<Dial M={M5(fr)} settled={false} q={d(k.set)} />
			<Hand x={RX} y={880} at={k.four} size={40} color={INK}>goal: paid off in 4 years, 48 repayments</Hand>
			<Row x={RX} y={200} at={k.set} size={40} dim={d(k.add) * 0.6} small={34}>0 = P{A(<>(1 + r)<Pow>n</Pow></>)} − {Tq('M')} × <Frac n={<>(1 + r)<Pow>n</Pow> − 1</>} d="r" /></Row>
			<Hand x={RX} y={318} at={k.now2} out={k.add} size={38} color={INK_SOFT}>the unknown is M</Hand>
			<Row x={RX} y={330} at={k.add} size={44} dim={d(k.then) * 0.6} small={34}>P{A(<>(1 + r)<Pow>n</Pow></>)} = {Tq('M')} × <Frac n={<>(1 + r)<Pow>n</Pow> − 1</>} d="r" /></Row>
			<Hand x={RX} y={450} at={k.so} out={k.then} size={36} color={POS} w={660}>the loan's growth = the repayments' growth</Hand>
			<Row x={RX} y={470} at={k.then} size={44} dim={d(k.gives) * 0.6} small={34}>P<span style={{color: INT.ink}}>r</span>{A(<>(1 + r)<Pow>n</Pow></>)} = {Tq('M')}[(1 + r)<Pow>n</Pow> − 1]</Row>
			<Hand x={RX} y={548} at={k.divide} size={36} color={POS}>divide by the bracket</Hand>
			<Framed x={RX} y={610} at={k.gives} size={52}>{Tq('M')} = <Frac n={<>P<span style={{color: INT.ink}}>r</span>{A(<>(1 + r)<Pow>n</Pow></>)}</>} d={<>(1 + r)<Pow>n</Pow> − 1</>} /></Framed>
			<Hand x={RX} y={810} at={k.one + 6} size={32} color={POS} w={660}>same as M = Pr ÷ [1 − (1 + r)⁻ⁿ]</Hand>
		</>
	);
};

// ---------- 6. the repayment and the total ----------
const M6 = (fr: number) => 472 + (M48 - 472) * smooth(lin(fr, K6.which, K6.cents + 6));
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const d = (a: number) => prog(fr, a, 12);
	const M = fr >= k.cents + 6 ? 480.78 : M6(fr);
	const sc = 0.02, t1 = 23849.87, t2 = totalPaid(480.78), i1 = 3849.87, i2 = t2 - 20000;
	const bar = (y: number, t: number, i: number, label: string, at: number) => {const o = d(at); return o <= 0.01 ? null : <g opacity={o}>
		<text x={RX} y={y - 12} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: INK}}>{label}</text>
		<rect x={RX} y={y} width={(t - i) * sc} height={44} fill="#ebe4d6" stroke={INK} strokeWidth={3} />
		<rect x={RX + (t - i) * sc} y={y} width={i * sc} height={44} fill={INT.soft} stroke={INT.stroke} strokeWidth={3} />
		<text x={RX + (t - i) * sc - 10} y={y + 32} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, fill: INK}}>$20,000</text>
		<text x={RX + t * sc + 10} y={y + 32} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, fill: INT.ink}}>{m2(i)}</text>
	</g>;};
	return (
		<>
			<SceneHeading text="The repayment and the total" at={4} size={52} />
			<Dial M={M} settled={fr >= k.which} />
			<Row x={RX} y={180} at={k.here} size={44} dim={d(k.so) * 0.6} small={36}>P<span style={{color: INT.ink}}>r</span> = 20 000 × 0.006 = {A('120')}</Row>
			<Hand x={RX} y={250} at={k.and} size={36} color={POS}>1.006⁴⁸ ≈ 1.3326</Hand>
			<Row x={RX} y={300} at={k.so} size={46} dim={d(k.cents) * 0.5} small={38}>{Tq('M')} = <Frac n={<>{A('120')} × 1.006<Pow>48</Pow></>} d={<>1.006<Pow>48</Pow> − 1</>} /></Row>
			<AnswerBox x={RX} y={440} at={k.cents} size={50}>M = $480.78</AnswerBox>
			<Hand x={RX + 420} y={458} at={k.cents + 10} size={34} color={POS}>to the nearest cent</Hand>
			<Chip x={RX} y={540} at={k.more} size={36} color={REP.ink}>+$80.78 a month</Chip>
			<Chip x={RX + 350} y={540} at={k.less} size={32} color={ANS.ink}>≈ $772 less in total</Chip>
			<FrameSvg>
				{bar(680, t1, i1, '$400 a month: $23,849.87', k.but)}
				{bar(800, t2, i2, `$480.78 a month: ${m2(t2)}`, k.add)}
			</FrameSvg>
			<Hand x={RX} y={862} at={k.add + 20} size={28} color={POS} w={660}>48 × $480.78 = $23,077.44; the last repayment is $480.94</Hand>
			<Hand x={RX} y={906} at={k.altogether} size={40} color={INT.ink}>less time, less interest</Hand>
		</>
	);
};

// ---------- 7. the amount still owing ----------
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const d = (a: number) => prog(fr, a, 12);
	const mk = 24 * smooth(lin(fr, k.that, k.twenty - 10));
	const kr = Math.round(mk), owed = loanBalance(20000, 0.006, 400, kr);
	const T = (s: number, c: string): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: s, fill: c} as React.CSSProperties);
	return (
		<>
			<SceneHeading text="The amount still owing" at={4} size={52} />
			<Task x={96} y={160} w={1728} at={-30} size={44}>How much is still owed on the bike after 2 years?</Task>
			<BoxCard x={96} y={300} w={500} at={-30} size={42} title="givens">
				<div style={{fontWeight: 800}}>P = $20,000</div>
				<div style={{fontWeight: 800, color: INT.ink}}>r = 0.006</div>
				<div style={{fontWeight: 800, color: REP.ink}}>M = $400</div>
				<div style={{fontWeight: 800, opacity: d(k.that)}}>n = 24 (2 years)</div>
			</BoxCard>
			<MonthGraph x={660} y={300} width={1200} height={400} curves={[{...BIKE_LOAN}]} marker={{k: mk, o: d(k.that)}} extra={m => {
				const [x0, y0] = m.p(0, 20000), [x1, y1] = m.p(24, owed);
				return <g opacity={d(k.that)}><line x1={x1} x2={x1} y1={y1} y2={m.p(24, 0)[1]} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 7" /><line x1={x0} x2={x1 + 20} y1={y0} y2={y0} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 7" />
					{kr >= 24 ? <path d={`M${x1 + 14},${y0} V${y1}`} stroke={REP.stroke} strokeWidth={6} /> : null}
					<text x={x1 + 26} y={(y0 + y1) / 2 + 12} opacity={kr >= 24 ? 1 : 0} style={T(30, REP.ink)}>paid off</text></g>;
			}} />
			<LiveReadoutBoard x={1300} y={330} width={540} at={k.that} inline size={46} labelSize={30} rows={[
				{label: 'repayments', value: kr, digits: 0},
				{label: 'balance owing', value: owed, format: m2},
				{label: 'paid off so far', value: 20000 - owed, format: m2, role: 'repay'},
			]} />
			<Hand x={760} y={450} at={k.because} size={36} color={INT.ink} w={300}>early repayments carried the most interest</Hand>
			<BoxCard x={96} y={740} w={1100} at={8} out={k.use - 8} size={42} title="plan">
				<div>Still owing: no zero this time.</div>
				<div style={{marginTop: 10}}>Work out A<sub>24</sub> with the real repayment, M = $400.</div>
			</BoxCard>
			<Row x={96} y={740} at={k.use} size={46} dim={d(k.gives) * 0.4} small={40}>A<sub>24</sub> = 20 000{A(<>(1.006)<Pow>24</Pow></>)} {Tq('− 400')} × <Frac n={<>1.006<Pow>24</Pow> − 1</>} d="0.006" /></Row>
			<Hand x={1180} y={760} at={k.twenty + 30} size={34} color={POS}>1.006²⁴ ≈ 1.1544</Hand>
			<Row x={96} y={866} at={k.gives} size={40} color={POS}>{'   '}= 23 087.75 − 10 292.49</Row>
			<AnswerBox x={640} y={856} at={k.cents} size={50}>A<Sb>24</Sb> = $12,795.26</AnswerBox>
			<FrameSvg>
				{[{y: 630, f: 0.4, c: INK_SOFT, l: 'time: 24 of 60 months = 40%', at: k.forty}, {y: 700, f: 0.36, c: REP.stroke, l: 'paid off: 36% of the loan', at: k.only}].map(b => <g key={b.y} opacity={d(b.at)}>
					<rect x={96} y={b.y} width={500} height={30} rx={6} fill="#ebe4d6" />
					<rect x={96} y={b.y} width={500 * b.f} height={30} rx={6} fill={b.c} />
					<text x={96} y={b.y - 8} style={T(28, INK)}>{b.l}</text>
				</g>)}
			</FrameSvg>
		</>
	);
};

// ---------- 8. memory aid ----------
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const hand = (size: number, color = INK): React.CSSProperties => ({position: 'absolute', fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color, lineHeight: 1.1});
	const slots = ['n: logs, then round up', 'M: solve Aₙ = 0 for M', 'still owing: work out Aₖ with the real M', 'total: add the repayments'];
	const pulse = (i: number) => Math.max(0, 1 - Math.abs(fr - (k.missing + 10 + i * 12)) / 12);
	return (
		<>
			<FramedCard x={200} y={150} w={1520} h={790} at={-30} />
			<div style={{...hand(46, POS), left: 260, top: 172}}>Memory aid</div>
			<Bike x={250} y={600} w={500} />
			<div style={{...hand(84), left: 260, top: 250, opacity: prog(fr, k.heres + 10, 12)}}>Paid off means A<Sb>n</Sb> = 0.</div>
			<div style={{...hand(62), left: 260, top: 370, opacity: prog(fr, k.set, 12)}}>Set it to zero, then solve for what's missing.</div>
			{slots.map((s, i) => <div key={i} style={{...hand(42, i === 2 ? REP.ink : INT.ink), left: 820, top: 520 + i * 92, width: 860, opacity: prog(fr, i === 2 ? k.for : k.missing, 12), transform: `scale(${1 + 0.06 * pulse(i)})`, transformOrigin: 'left center'}}>{s}</div>)}
		</>
	);
};
