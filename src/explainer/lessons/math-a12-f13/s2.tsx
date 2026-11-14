// Scenes 6 to 9: the formula FV = M[(1 + r)ⁿ − 1]/r with its conditions (a cash-flow strip: payments at the end of
// each period, read at the end of period n), the worked example ($300 a month at 4.8% p.a. for 5 years: $20,298.05),
// the long run (30 years: the earnings gap widens and overtakes what was put in) and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {DepositTower, FrameSvg, LiveReadoutBoard, Pow, SceneHeading, StudioPlot, annuityFV} from '../../math/studio';
import {K6, K7, K8, K9} from './cuemap';
import {AnswerBox, BoxCard, CARD, Chip, DEP, Frac, Framed, FramedCard, Hand, INT, POS, Row, Slip, SuperSheet, Task, m0, m2, smooth} from './parts';
import {StairIcon} from './s3';

const lin = (fr: number, a: number, b: number) => Math.max(0, Math.min(1, (fr - a) / (b - a)));
const B = (s: React.ReactNode) => <span style={{color: DEP.ink}}>{s}</span>;
const A = (s: React.ReactNode) => <span style={{color: INT.ink}}>{s}</span>;
export const FV_BOX = <>FV = {B('M')} × <Frac n={<>{A('(1 + r)')}<Pow>n</Pow> − 1</>} d="r" /></>;

// ---------- 6. the formula and its conditions ----------
const CF = {x0: 160, x1: 1760, base: 300};
const CashFlow: React.FC<{arrows: number; flag: number}> = ({arrows, flag}) => {
	const marks = [0, 1, 2, 3, -1, 5];
	const X = (i: number) => CF.x0 + (i / 5) * (CF.x1 - CF.x0);
	const T = (s: number, c: string): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: s, fill: c} as React.CSSProperties);
	return <FrameSvg>
		<line x1={CF.x0 - 30} x2={CF.x1 + 40} y1={CF.base} y2={CF.base} stroke={INK} strokeWidth={4} />
		{marks.map((m, i) => <g key={i}>
			{m >= 0 ? <line x1={X(i)} x2={X(i)} y1={CF.base - 12} y2={CF.base + 12} stroke={INK} strokeWidth={4} /> : null}
			<text x={X(i)} y={CF.base + 48} textAnchor="middle" style={T(32, INK)}>{m === -1 ? '…' : i === 5 ? 'n' : String(m)}</text>
			{i > 0 && m !== -1 ? <g>
				{arrows > 0.01 ? <rect x={X(i) - 26} y={CF.base - 92} width={52} height={86} rx={10} fill={DEP.soft} opacity={arrows} /> : null}
				<path d={`M${X(i)},${CF.base - 84} V${CF.base - 14} M${X(i) - 14},${CF.base - 30} L${X(i)},${CF.base - 12} L${X(i) + 14},${CF.base - 30}`} fill="none" stroke={DEP.stroke} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
				<text x={X(i) - 22} y={CF.base - 60} textAnchor="end" style={T(34, DEP.ink)}>M</text>
			</g> : null}
		</g>)}
		<g><line x1={X(5) + 34} x2={X(5) + 34} y1={CF.base} y2={CF.base - 120} stroke={INK} strokeWidth={4} /><path d={`M${X(5) + 34},${CF.base - 120} l 56 16 l -56 16 z`} fill={INK} />
			{flag > 0.01 ? <circle cx={X(5) + 34} cy={CF.base - 120} r={26} fill="none" stroke={INT.stroke} strokeWidth={5} opacity={flag} /> : null}
			<text x={X(5) + 34} y={CF.base - 136} textAnchor="middle" style={T(34, INK)}>FV</text></g>
		<text x={X(0)} y={CF.base - 40} textAnchor="middle" style={T(30, INK_SOFT)}>$0</text>
	</FrameSvg>;
};
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const d = (a: number) => prog(fr, a, 12);
	const X = (i: number) => CF.x0 + (i / 5) * (CF.x1 - CF.x0);
	const T = (sz: number, c: string): React.CSSProperties => ({fontFamily: FONT_HAND, fontWeight: 700, fontSize: sz, fill: c} as React.CSSProperties);
	const tick = (o: number, x: number, y: number, text: string, c: string, anchor: 'start' | 'middle' | 'end' = 'middle') => o > 0.01 ? <text x={x} y={y} textAnchor={anchor} opacity={o} style={T(40, c)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{text}</text> : null;
	return (
		<>
			<SceneHeading text="The formula and its conditions" at={4} size={52} />
			<CashFlow arrows={Math.max(0, Math.min(d(k.pay), 1 - d(k.read)))} flag={Math.max(0, Math.min(d(k.read), 1 - d(k.starts)))} />
			<FrameSvg>
				{d(k.pay) > 0.01 ? <path d={`M${X(1) - 30},378 v14 H${X(3) + 30} v-14`} fill="none" stroke={DEP.stroke} strokeWidth={4} opacity={d(k.pay)} /> : null}
				{tick(d(k.pay), X(2), 430, '✓ equal M at the end of each period', DEP.ink)}
				{tick(d(k.read), X(5) + 40, 430, '✓ read just after payment n', INK, 'end')}
				{tick(d(k.starts), X(0) - 30, 490, '✓ starts at $0', INK, 'start')}
				{d(k.rate) > 0.01 ? <path d={`M${X(1)},458 v-12 H${X(2)} v12`} fill="none" stroke={INT.stroke} strokeWidth={4} opacity={d(k.rate)} /> : null}
				{tick(d(k.rate), (X(1) + X(2)) / 2, 495, '✓ r per period', INT.ink)}
				{tick(d(k.periods), X(4), 495, '✓ n = number of periods', INK)}
			</FrameSvg>
			<Row x={96} y={560} at={k.gen + 20} size={46} dim={d(k.over) * 0.5} small={38}>FV = {B('M')} + {B('M')}{A('(1 + r)')} + … + {B('M')}{A(<>(1 + r)<Pow>n−1</Pow></>)}</Row>
			<Hand x={1000} y={570} at={k.future + 30} size={36} color={POS} w={460}>first term M, ratio 1 + r, n terms</Hand>
			<Framed x={96} y={660} at={k.over} size={60}>{FV_BOX}</Framed>
			<Hand x={760} y={680} at={k.bottom} size={38} color={INT.ink}>(1 + r) − 1 = r</Hand>
			<Hand x={760} y={740} at={k.not} size={44} color={INT.ink}>ratio 1 + r, not r</Hand>
			<Hand x={760} y={810} at={k.future + 60} size={32} color={POS} w={700}>M: the payment each period (some books write a)</Hand>
			<SuperSheet x={1500} y={560} h={400} header="Super" panel={<div style={{fontSize: 26, lineHeight: 1.25}}><div style={{color: DEP.ink}}>M = $200</div><div style={{color: INT.ink}}>r = 0.005</div><div>FV = $13,954.01</div></div>} />
			<Chip x={96} y={890} at={k.periods + 10} size={30} color={INK_SOFT}>r ≠ 0 (if r = 0: FV = nM); a starting balance grows separately</Chip>
		</>
	);
};

// ---------- 7. worked example: $300 a month ----------
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const d = (a: number) => prog(fr, a, 12);
	return (
		<>
			<Task x={96} y={150} w={1728} at={-30} size={44}>$300 is deposited at the end of each month at 4.8% p.a., compounded monthly. Find the balance after 5 years.</Task>
			<BoxCard x={96} y={330} w={600} at={-30} size={44} title="givens">
				<div style={{fontWeight: 800, color: DEP.ink}}>M = $300 per month</div>
				<div style={{fontWeight: 800, color: INT.ink}}>4.8% p.a., compounded monthly</div>
				<div style={{fontWeight: 800}}>5 years</div>
			</BoxCard>
			<DepositTower x={96} y={690} width={560} height={210} M={300} r={0.004} t={60} maxMonths={60} max={400} />
			<Hand x={96} y={912} at={k.put} size={34} color={POS}><span style={{color: DEP.ink}}>blue: $18,000 put in</span>   <span style={{color: INT.ink, opacity: d(k.interest)}}>amber: $2,298.05 interest</span></Hand>
			<BoxCard x={720} y={330} w={1100} at={8} out={k.rate - 8} size={44} title="plan">
				<div>First match the period: monthly deposits need a rate per month and n in months.</div>
				<div style={{marginTop: 12}}>Then put M, r and n into the formula for FV.</div>
			</BoxCard>
			<Row x={720} y={330} at={k.rate} size={46} dim={d(k.so) * 0.5} small={38}>r = 0.048 ÷ 12 = <span style={{color: INT.ink}}>0.004</span> per month</Row>
			<Row x={720} y={410} at={k.five} size={46} dim={d(k.so) * 0.5} small={38}>n = 5 × 12 = 60 months</Row>
			<Slip x={1440} y={330} at={k.months + 20} size={40} caption="per month, not per year">r = 0.048, n = 5</Slip>
			<Row x={720} y={500} at={k.so} size={54} dim={d(k.cents) * 0.4} small={42}>FV = {B('300')} × <Frac n={<>{A('1.004')}<Pow>60</Pow> − 1</>} d="0.004" /></Row>
			<Hand x={1300} y={540} at={k.so + 60} size={34} color={POS}>1.004⁶⁰ ≈ 1.27064, factor ≈ 67.660</Hand>
			<Hand x={1300} y={590} at={k.so + 90} size={36} color={INT.ink}>keep full precision</Hand>
			<AnswerBox x={720} y={650} at={k.cents} size={52}>FV = $20,298.05</AnswerBox>
			<Row x={720} y={770} at={k.put} size={42} color={DEP.ink}>put in: 300 × 60 = $18,000</Row>
			<Row x={720} y={840} at={k.interest} size={42} color={INT.ink}>interest: $20,298.05 − $18,000 = $2,298.05</Row>
			<Chip x={1440} y={620} at={-30} out={k.so - 10} size={30} color={INK_SOFT}>FV = M[(1 + r)<Pow>n</Pow> − 1] ÷ r</Chip>
		</>
	);
};

// ---------- 8. over a longer time ----------
const fvAt = (yrs: number) => annuityFV(300, 0.004, Math.round(yrs * 12));
const yrs8 = (fr: number) => {
	const k = K8;
	if (fr < k.after) return 30 * smooth(lin(fr, k.thirty - 10, k.cents));
	return 30 - (30 - 316 / 12) * smooth(lin(fr, k.after, k.in));
};
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const d = (a: number) => prog(fr, a, 12);
	const t = yrs8(fr), n = Math.round(t * 12), bal = annuityFV(300, 0.004, n), put = 300 * n;
	const T = (s: number, c: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: s, fill: c} as React.CSSProperties);
	const sc = 0.005;
	return (
		<>
			<SceneHeading text="Over a longer time" at={4} size={52} />
			<LiveReadoutBoard x={96} y={190} width={540} at={-30} inline size={46} labelSize={30} rows={[
				{label: 'years', value: t, format: v => (n % 12 ? v.toFixed(1) : String(Math.round(v)))},
				{label: 'balance', value: bal, format: m2},
				{label: 'put in', value: put, format: m2, role: 'deposit'},
				{label: 'earnings', value: bal - put, format: m2, role: 'interest'},
			]} />
			<Hand x={96} y={540} at={k.early} size={38} color={INT.ink} w={560}>early deposits have decades to grow, and their interest earns interest too</Hand>
			<StudioPlot x={700} y={190} width={1160} height={680} window={{x: [0, 31], y: [0, 260000]}} xTicks={[5, 10, 15, 20, 25, 30]} yTicks={[50000, 100000, 150000, 200000, 250000].map(v => ({value: v, label: m0(v)}))} xLabel="years" yLabel="balance" at={-30}>
				{m => {
					let up = '', dn = '';
					for (let i = 0; i <= 120; i++) {const y = (30 * i) / 120, [a, b] = m.p(y, fvAt(y)); up += `${i ? 'L' : 'M'}${a.toFixed(1)},${b.toFixed(1)} `;}
					for (let i = 120; i >= 0; i--) {const y = (30 * i) / 120, [a, b] = m.p(y, 3600 * y); dn += `L${a.toFixed(1)},${b.toFixed(1)} `;}
					const [lx0, ly0] = m.p(0, 0), [lx1, ly1] = m.p(30, 108000), [mx, my] = m.p(t, bal);
					const [gx, gy] = m.p(25, 3600 * 25 + (fvAt(25) - 3600 * 25) / 2);
					return <g>
						<path d={up + dn + 'Z'} fill={INT.soft} opacity={0.9} />
						<line x1={lx0} y1={ly0} x2={lx1} y2={ly1} stroke={INK} strokeWidth={4} strokeDasharray="14 10" />
						<path d={up} fill="none" stroke={INK} strokeWidth={6} />
						<text x={lx1 - 10} y={ly1 + 140} textAnchor="end" style={T(32, INK)}>put in: $300 × months</text>
						<text x={gx} y={gy + 10} textAnchor="middle" style={T(36, INT.ink, true)}>earnings</text>
						{[10, 20, 30].map((y, i) => {const [bx, b0] = m.p(y, fvAt(y)), [, b1] = m.p(y, 3600 * y); const o = d(k.widens + i * 12); return o > 0.01 ? <path key={y} d={`M${bx - 14},${b0} h14 V${b1} h-14`} fill="none" stroke={INT.stroke} strokeWidth={5} opacity={o} /> : null;})}
						<circle cx={mx} cy={my} r={16} fill={CARD} stroke={INK} strokeWidth={6} /><circle cx={mx} cy={my} r={6} fill={INK} />
					</g>;
				}}
			</StudioPlot>
			{fr >= k.after ? <FrameSvg style={{opacity: d(k.overtaken)}}>
				<rect x={96} y={720} width={94997.88 * sc} height={44} fill={INT.stroke} />
				<text x={110} y={754} style={T(30, '#ffffff')}>earnings $94,997.88</text>
				<rect x={96} y={790} width={94800 * sc} height={44} fill={DEP.stroke} />
				<text x={110} y={824} style={T(30, '#ffffff')}>put in $94,800.00</text>
				<text x={96} y={880} style={T(42, INT.ink, true)}>earnings overtake (deposit 316)</text>
			</FrameSvg> : null}
		</>
	);
};

// ---------- 9. memory aid ----------
export const S09: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K9;
	const hand = (size: number, color = INK): React.CSSProperties => ({position: 'absolute', fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color, lineHeight: 1.1});
	const g = (a: number, b: number) => Math.max(0, Math.min(prog(fr, a, 10), 1 - prog(fr, b, 10)));
	return (
		<>
			<FramedCard x={200} y={150} w={1520} h={790} at={-30} />
			<div style={{...hand(46, POS), left: 260, top: 172}}>Memory aid</div>
			<StairIcon x={270} base={820} n={10} w={50} />
			<FrameSvg>
				{g(k.last, k.list) > 0.01 ? <rect x={270 + 9 * 58 - 8} y={820 - 90 - 8} width={66} height={106} rx={8} fill="none" stroke={DEP.stroke} strokeWidth={5} opacity={g(k.last, k.list)} /> : null}
				{g(k.first, k.list) > 0.01 ? <rect x={262} y={820 - 90 - 108 - 8} width={66} height={214} rx={8} fill="none" stroke={INT.stroke} strokeWidth={5} opacity={g(k.first, k.list)} /> : null}
			</FrameSvg>
			<div style={{...hand(80), left: 260, top: 250, opacity: prog(fr, k.heres + 6, 12)}}>Last in earns nothing.</div>
			<div style={{...hand(80), left: 260, top: 360, opacity: prog(fr, k.first, 12)}}>First in earns the most <span style={{fontSize: 52}}>(r &gt; 0)</span>.</div>
			<div style={{...hand(52, INT.ink), left: 940, top: 600, width: 740, opacity: prog(fr, k.thats, 12)}}>Newest first: n terms, first term <span style={{color: DEP.ink}}>M</span>, ratio 1 + r.</div>
		</>
	);
};
