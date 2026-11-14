// Scenes 6 to 9: the second kind (a $100,000 fund: interest first, then a $1,050.91 withdrawal; the loan rule seen from
// the lender), why the fund runs down (the withdrawal is bigger than the interest; 120 withdrawals), matching the period
// (r = 0.005, n = 24; crossed n = 2) and the memory aid (same size, same gap, interest every gap).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {FrameSvg, LiveReadoutBoard, SceneHeading, StudioPlot, smooth} from '../../math/studio';
import {K6, K7, K8, K9} from './cuemap';
import {lin, MiniFlow} from './s1';
import {ANSR, AnswerBox, BoxCard, CARD, Calendar, Chip, FUND, FramedCard, FundBar, GREY, Hand, IN, INTR, OUT, Row, Slip, c2, fundAt, fundRows} from './parts';

const TXT = (size: number, fill: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size, fill} as React.CSSProperties);

// ---------- 6. the second kind: the fund ----------
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const m1c = smooth(lin(fr, k.first, k.first + 40)), m1o = smooth(lin(fr, k.then, k.then + 50));
	const m2 = smooth(lin(fr, k.rule - 10, k.rule + 40));
	const bal = m2 > 0 ? fundRows[0].close + (fundRows[1].close - fundRows[0].close) * m2 : m1o >= 1 ? fundRows[0].close : 100000;
	return (
		<>
			<SceneHeading text="The second kind: the fund" at={4} size={52} />
			<BoxCard x={96} y={170} w={1000} at={-30} size={40} title="givens">
				<div style={{fontWeight: 800}}>start A₀ = $100,000</div>
				<div style={{fontWeight: 800, color: INTR.ink}}>4.8% p.a., monthly: r = 0.048 ÷ 12 = 0.004</div>
				<div style={{fontWeight: 800, color: OUT.ink}}>withdrawal M = $1,050.91 at the end of each month</div>
				<div style={{fontWeight: 700, fontSize: 30, color: GREY}}>(exact 1,050.906…, rounded up to the cent)</div>
			</BoxCard>
			<FundBar x={1300} y={200} w={170} h={640} lo={97000} hi={101000} bal={m2 > 0 ? bal : 100000} cap={m2 > 0 ? 0 : m1c} out={m2 > 0 ? 0 : m1o} capText="+$400.00" outText="−$1,050.91" />
			<LiveReadoutBoard x={1520} y={560} width={360} at={-30} size={48} labelSize={30} rows={[{label: m2 > 0 ? 'after month 2' : 'balance', value: m1o >= 1 || m2 > 0 ? bal : 100000 + 400 * m1c, format: v => c2(v)}]} />
			<AnswerBox x={96} y={470} at={k.cents} size={52}>A₁ = $99,349.09</AnswerBox>
			<Row x={96} y={600} at={k.rule} size={52}>A<sub>n+1</sub> = <span style={{color: INTR.ink}}>(1 + r)</span>A<sub>n</sub> <span style={{color: OUT.ink}}>− M</span>,  A<sub>0</sub> = $100,000</Row>
			<Chip x={96} y={700} at={k.loan} size={34} color={GREY}>loan (two videos ago): Aₙ₊₁ = (1 + r)Aₙ − M</Chip>
			<Hand x={830} y={706} at={k.loan + 10} size={40} color={INK}>same rule as a loan</Hand>
			{(() => {const u = smooth(lin(fr, k.cents - 30, k.cents)), sc = 1.5 - 0.5 * u; return <div style={{position: 'absolute', inset: 0, transform: `translate(96px, ${470 + (780 - 470) * u}px) scale(${sc})`, transformOrigin: '0 0'}}>
				<MiniFlow x={0} y={0} w={700} h={180} title="the fund: one sum in, equal withdrawals out" lump="$100,000" outs={[1, 2, 3, 4]} arcs ticks={4} />
			</div>;})()}
			<MiniFlow x={840} y={780} w={420} h={180} title="a loan, seen by the lender" outs={[0]} arrows={[1, 2, 3, 4].map(t => ({t, size: 54 + 10 * Math.max(0, 1 - Math.abs(fr - k.back - 15) / 20)}))} o={prog(fr, k.a, 14)} />
		</>
	);
};

// ---------- 7. why the fund runs down ----------
const ride = (fr: number) => {const k = K7; return fr < k.so ? 1 : fr < k.years ? 1 + 119 * smooth(lin(fr, k.so, k.years)) : 120;};
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const n = Math.max(1, Math.min(120, Math.round(ride(fr))));
	const row = fundRows[n - 1];
	const kx = 0.5;
	return (
		<>
			<SceneHeading text="Why the fund runs down" at={4} size={52} />
			<StudioPlot x={96} y={160} width={1150} height={780} window={{x: [0, 130], y: [0, 108000]}} xTicks={[24, 48, 72, 96, 120]} yTicks={[{value: 25000, label: '$25k'}, {value: 50000, label: '$50k'}, {value: 75000, label: '$75k'}, {value: 100000, label: '$100k'}]} xLabel="months" yLabel="fund balance" at={-30}>{m => {
				let d = ''; for (let i = 0; i <= 240; i++) {const t = (120 * i) / 240, [a, b] = m.p(t, fundAt(t)); d += `${i ? 'L' : 'M'}${a.toFixed(1)},${b.toFixed(1)} `;}
				const [px, py] = m.p(n, fundAt(n)), [ex, ey] = m.p(120, 0), [g0, gy] = m.p(0, 100000), [g1] = m.p(130, 100000);
				const go = prog(fr, k.if, 12);
				return <g>
					<path d={d} fill="none" stroke={INK} strokeWidth={6} />
					<circle cx={px} cy={py} r={16} fill={CARD} stroke={INK} strokeWidth={6} /><circle cx={px} cy={py} r={6} fill={INK} />
					<g opacity={prog(fr, k.years, 12)}><circle cx={ex} cy={ey} r={13} fill={ANSR.stroke} stroke={CARD} strokeWidth={4} /></g>
					{go > 0.01 ? <g opacity={go}><line x1={g0} x2={g1 - 30} y1={gy - 10} y2={gy - 10} stroke={INTR.stroke} strokeWidth={5} strokeDasharray="14 9" /><path d={`M${g1 - 46},${gy - 24} L${g1 - 26},${gy - 10} L${g1 - 46},${gy + 4}`} fill="none" stroke={INTR.stroke} strokeWidth={5} opacity={prog(fr, k.forever, 10)} /></g> : null}
				</g>;
			}}</StudioPlot>
			<Hand x={420} y={176} at={k.if} size={36} color={INTR.ink} w={760}>withdraw $400 = the interest: no change</Hand>
			<LiveReadoutBoard x={1290} y={170} width={590} at={-30} inline size={48} labelSize={30} rows={[
				{label: 'withdrawal', value: n, text: `${n}`},
				{label: 'interest', value: row.interest, role: 'interest', format: v => c2(v)},
				{label: 'from the balance', value: row.pay - row.interest, role: 'repay', format: v => c2(v)},
			]} />
			<FrameSvg>
				<rect x={1300} y={470} width={row.interest * kx} height={64} rx={8} fill={INTR.soft} stroke={INTR.stroke} strokeWidth={4} />
				<rect x={1300 + row.interest * kx} y={470} width={Math.max(0, row.pay - row.interest) * kx} height={64} rx={8} fill={OUT.soft} stroke={OUT.stroke} strokeWidth={4} />
				<text x={1300} y={570} style={TXT(32, INK)}>the {c2(FUND.M)} withdrawal</text>
			</FrameSvg>
			<Hand x={1300} y={600} at={k.each} size={42} color={OUT.ink}>withdrawal &gt; interest</Hand>
			<Hand x={1300} y={660} at={k.so} size={36} color={GREY} w={580}>less to earn interest on, so it falls faster</Hand>
			<MiniFlow x={1290} y={760} w={590} h={190} title="the fund: one sum, equal withdrawals" lump="$100,000" outs={[1, 2, 3, 4]} arcs ticks={4} o={1 - prog(fr, k.years - 14, 12)} />
			<BoxCard x={1290} y={760} w={590} at={k.years} size={36} title="end of the fund">
				<div style={{fontWeight: 800, color: ANSR.ink}}>$0 after 120 withdrawals</div>
				<div style={{fontWeight: 700, fontSize: 30, color: GREY}}>(10 years; last one $1,050.33)</div>
			</BoxCard>
			<Chip x={700} y={330} at={k.set} size={34} color={GREY}>set like a loan repayment</Chip>
		</>
	);
};

// ---------- 8. matching the period ----------
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	return (
		<>
			<SceneHeading text="Matching the period" at={4} size={52} />
			<Calendar x={60} y={170} h={520} month="24 months" />
			<FrameSvg>
				<line x1={70} x2={880} y1={820} y2={820} stroke={INK} strokeWidth={4} />
				{Array.from({length: 24}, (_, i) => {const x = 90 + i * 33; return <g key={i}><line x1={x} x2={x} y1={770} y2={814} stroke={IN.stroke} strokeWidth={5} /><path d={`M${x - 7},${804} L${x},${814} L${x + 7},${804}`} fill="none" stroke={IN.stroke} strokeWidth={4} /></g>;})}
				<g opacity={prog(fr, k.n24, 12)}><path d={`M90,850 v14 H849 v-14`} stroke={GREY} strokeWidth={4} fill="none" /><text x={470} y={906} textAnchor="middle" style={TXT(36, GREY)}>2 years = 24 months</text></g>
			</FrameSvg>
			<BoxCard x={960} y={170} w={920} at={-30} size={40} title="task" edge="#8a5a12">$500 a month for 2 years at 6% p.a., compounded monthly: find r and n.</BoxCard>
			<Chip x={520} y={330} at={k.in} size={30} color={GREY}>course model: a yearly rate, compounded once per payment period</Chip>
			<BoxCard x={960} y={410} w={920} at={-30} out={k.r - 8} size={40} title="plan"><div>Match the rate and the count to the payment period: months.</div></BoxCard>
			<Row x={960} y={410} at={k.r} size={52} dim={prog(fr, k.q, 12)} small={42}><span style={{color: INTR.ink}}>r = 0.06 ÷ 12 = 0.005</span><span style={{fontSize: 34, color: GREY}}>  per month</span></Row>
			<AnswerBox x={960} y={500} at={k.n24} size={50}>n = 2 × 12 = 24 months</AnswerBox>
			<Slip x={1520} y={490} at={k.not} size={44} caption="per month, not per year">n = 2</Slip>
			<BoxCard x={960} y={650} w={620} at={k.q} size={38} title="match the period">
				<div style={{fontWeight: 800}}>monthly: ÷ 12, × 12</div>
				<div style={{fontWeight: 800}}>quarterly: ÷ 4, × 4</div>
				<div style={{fontWeight: 800, opacity: prog(fr, k.fort, 10)}}>fortnightly: ÷ 26, × 26</div>
			</BoxCard>
			<Hand x={1600} y={680} at={k.end} size={38} color={IN.ink} w={280}>payments at the end of each period</Hand>
		</>
	);
};

// ---------- 9. memory aid ----------
export const AidCard: React.FC<{x: number; y: number; glow?: {size: number; gap: number; int: number}; lineAt?: number}> = ({x, y, glow, lineAt = -30}) => {
	const fr = useCurrentFrame();
	const g = (a?: number) => (a === undefined ? 0 : prog(fr, a, 10) * (1 - prog(fr, a + 40, 12)));
	return <>
		<FramedCard x={x} y={y} w={1400} h={720} at={-30} />
		<div style={{position: 'absolute', left: x + 60, top: y + 28, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: GREY}}>Memory aid</div>
		<Calendar x={x + 70} y={y + 110} h={330} month="every month" />
		<div style={{position: 'absolute', left: x + 420, top: y + 120, width: 940, opacity: prog(fr, lineAt, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 76, lineHeight: 1.1, color: INK}}>Same size, same gap, interest every gap.</div>
		<div style={{position: 'absolute', left: x + 420, top: y + 330, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, lineHeight: 1.4}}>
			<div style={{color: IN.ink}}>In: deposits</div>
			<div style={{color: OUT.ink}}>Out: withdrawals from one sum</div>
		</div>
		<MiniFlow x={x + 70} y={y + 480} w={600} h={190} title="" arrows={[1, 2, 3, 4].map(t => ({t, size: 50 + 16 * g(glow?.size)}))} arcs />
		<MiniFlow x={x + 720} y={y + 480} w={600} h={190} title="" lump="sum" outs={[1, 2, 3, 4]} arcs />
		{glow ? <FrameSvg>{[0, 1].map(j => [1, 2, 3, 4].map(t => {const X = x + 70 + j * 650 + 40 + (t / 4) * 520, Y = y + 480 + 150; return <line key={`${j}-${t}`} x1={X} x2={X} y1={Y - 14} y2={Y + 14} stroke={IN.stroke} strokeWidth={6} opacity={g(glow.gap)} />;}))}
			<rect x={x + 60} y={y + 470} width={1280} height={210} rx={20} fill="none" stroke={INTR.stroke} strokeWidth={5} opacity={g(glow.int)} /></FrameSvg> : null}
	</>;
};
export const S09: React.FC = () => {
	const k = K9;
	return <AidCard x={260} y={170} glow={{size: k.size, gap: k.gap, int: k.int}} />;
};
export {SceneHeading};
