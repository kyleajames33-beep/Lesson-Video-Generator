// Scenes 5 to 8: a different period (fortnights: r = 0.064/26 kept exact, n = 650, $720,885.32), solving for the
// time ((1.005)ⁿ = 1.15, n ≈ 28.02; 28 deposits fall $5.10 short, so 29), payments that stop (two stages: the
// annuity, then compound interest: $6,750.14; crossed: a 3-year annuity) and the memory aid (match, model, finish).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, GivensStrip, GoalMeter, MistakeCard, Pow, SceneHeading} from '../../math/studio';
import {K5, K6, K7, K8} from './cuemap';
import {ValueSplit} from './s1';
import {AnswerBox, BoxCard, CARD, Chip, DEP, Frac, FramedCard, Hand, INT, POS, Row, Suitcase, Task} from './parts';

const lin = (fr: number, a: number, b: number) => Math.max(0, Math.min(1, (fr - a) / (b - a)));
const A = (s: React.ReactNode) => <span style={{color: INT.ink}}>{s}</span>;
const T = (s: number, c: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: s, fill: c} as React.CSSProperties);

// ---------- 5. a different period: fortnights ----------
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const X = (i: number) => 140 + (i / 26) * 1640;
	return (
		<>
			<Task x={96} y={150} w={1728} at={-30} size={44}>$450 is deposited at the end of every fortnight for 25 years at 6.4% p.a., compounded fortnightly. Find the future value.</Task>
			<FrameSvg>
				<line x1={X(0) - 20} x2={X(26) + 20} y1={420} y2={420} stroke={INK} strokeWidth={4} />
				{Array.from({length: 26}, (_, i) => <path key={i} d={`M${X(i + 1)},${362} V${412} M${X(i + 1) - 9},${400} L${X(i + 1)},${414} L${X(i + 1) + 9},${400}`} fill="none" stroke={DEP.stroke} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />)}
				<text x={X(0)} y={462} textAnchor="middle" style={T(30, INK)}>0</text>
				<text x={X(26)} y={462} textAnchor="middle" style={T(30, INK)}>1 year</text>
				<text x={X(1)} y={350} textAnchor="middle" style={T(28, DEP.ink)}>$450</text>
				<g opacity={prog(fr, k.there, 12)}><path d={`M${X(1)},${480} v14 H${X(26)} v-14`} fill="none" stroke={INK} strokeWidth={4} /><text x={(X(1) + X(26)) / 2} y={530} textAnchor="middle" style={T(38, INK, true)}>26 fortnights = 1 year</text></g>
			</FrameSvg>
			<BoxCard x={96} y={570} w={560} at={-30} size={38} title="givens">
				<div style={{color: DEP.ink}}>M = $450 per fortnight</div>
				<div style={{color: INT.ink}}>6.4% p.a., compounded fortnightly</div>
				<div>25 years</div>
			</BoxCard>
			<BoxCard x={720} y={570} w={1100} at={8} out={k.r - 8} size={42} title="plan">
				<div>Match the period: a rate per fortnight, and n in fortnights.</div>
				<div style={{marginTop: 10}}>Then use FV = M[(1 + r)ⁿ − 1] ÷ r.</div>
			</BoxCard>
			<Row x={720} y={570} at={k.r} size={46}><span style={{color: INT.ink}}>r = 0.064 ÷ 26</span><span style={{color: POS, fontSize: 32, opacity: prog(fr, k.n - 20, 10)}}>  (≈ 0.0024615)</span></Row>
			<Row x={720} y={640} at={k.n} size={46}>n = 26 × 25 = 650</Row>
			<Hand x={1380} y={650} at={k.keep} size={40} color={INT.ink}>keep r exact</Hand>
			<Chip x={720} y={710} at={k.rounded} size={30} color={INK_SOFT}>r rounded to 0.002462: $721,020.61 (≈ $135 too high)</Chip>
			<Row x={720} y={780} at={k.future} size={44} dim={prog(fr, k.cents, 12) * 0.3}>FV = 450 × <Frac n={<>{A('(1 + 0.064/26)')}<Pow>650</Pow> − 1</>} d={A('0.064/26')} /></Row>
			<AnswerBox x={1420} y={800} at={k.cents} size={50}>$720,885.32</AnswerBox>
			<ValueSplit x={96} y={790} w={560} dep={292500} int={428385.32} at={k.cents + 6} depText="put in $292,500" intText="interest $428,385" h={40} />
		</>
	);
};

// ---------- 6. solving for the time ----------
const t6 = (fr: number) => {
	const k = K6;
	if (fr < k.but) return 0;
	if (fr < k.deposits - 10) return 28 * lin(fr, k.but + 10, k.after);
	return 28 + lin(fr, k.deposits - 10, k.deposits + 10);
};
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	return (
		<>
			<Task x={96} y={150} w={1728} at={-30} size={40}>$200 is deposited at the end of each month at 6% p.a., compounded monthly. How many deposits are needed to reach $6,000?</Task>
			<GoalMeter x={300} y={300} width={140} height={600} goal={6000} M={200} r={0.005} t={t6(fr)} max={6600} readout={{x: 500, y: 430, width: 380}} magnifier={{cx: 700, cy: 790, R: 70, at: k.after + 10, text: g => (g > 20 ? '' : g > 0 ? `${'$' + g.toFixed(2)} to go` : 'goal reached')}} />
			<Suitcase x={96} y={620} h={280} />
			<Hand x={500} y={680} at={k.but} size={36} color={POS} w={360}>the balance changes only at month ends</Hand>
			<GivensStrip x={960} y={300} size={32} maxW={960} items={[{content: 'M = $200', role: 'deposit', at: -30}, {content: 'r = 0.005', role: 'interest', at: -30}, {content: 'FV = $6,000', role: 'balance', at: -30}, {content: 'n = ?', at: -30}]} />
			<Row x={960} y={380} at={k.set} size={44} dim={prog(fr, k.rearr, 12) * 0.5} small={38}>6000 = 200 × <Frac n={<>{A('1.005')}<Pow>n</Pow> − 1</>} d="0.005" /></Row>
			<Row x={960} y={510} at={k.rearr} size={44} dim={prog(fr, k.take, 12) * 0.5} small={38}>(1.005)<Pow>n</Pow> − 1 = 0.15<span style={{opacity: prog(fr, k.five, 10)}}>,   (1.005)<Pow>n</Pow> = 1.15</span></Row>
			<Row x={960} y={590} at={k.take} size={44} dim={prog(fr, k.nis, 12) * 0.5} small={38}>n log 1.005 = log 1.15</Row>
			<Hand x={1450} y={600} at={k.power} size={36} color={INT.ink}>a power: take logs</Hand>
			<Row x={960} y={670} at={k.nis} size={48}>n = log 1.15 ÷ log 1.005<span style={{color: POS, opacity: prog(fr, k.about, 10)}}>  ≈ 28.02</span></Row>
			<Hand x={960} y={760} at={k.after} size={38} color={POS} w={880}>after 28 deposits: $5,994.90, still $5.10 short, so round up</Hand>
			<AnswerBox x={960} y={830} at={k.deposits} size={52}>n = 29 deposits</AnswerBox>
		</>
	);
};

// ---------- 7. payments that stop ----------
const t7 = (fr: number) => {
	const k = K7;
	if (fr < k.twelve - 10) return 24 * lin(fr, k.grows, k.grows + 80);
	return 24 + 12 * lin(fr, k.twelve - 10, k.final);
};
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const X = (m: number) => 740 + (m / 36) * 1080;
	return (
		<>
			<Task x={96} y={150} w={1728} at={-30} size={36}>$250 is deposited at the end of each month for 2 years at 6% p.a., compounded monthly. The deposits then stop, and the balance stays in the account for 1 more year. Find the final balance.</Task>
			<GoalMeter x={120} y={380} width={140} height={520} goal={6357.99} goalLabel="2 years" M={250} r={0.005} t={t7(fr)} depositMonths={24} max={7200} readout={{x: 300, y: 560, width: 420}} />
			<Suitcase x={330} y={865} h={180} />
			<Chip x={450} y={935} at={k.then + 10} size={32} color={INK_SOFT}>+1 year</Chip>
			<FrameSvg>
				<line x1={X(0)} x2={X(36) + 10} y1={420} y2={420} stroke={INK} strokeWidth={4} />
				{Array.from({length: 24}, (_, i) => <line key={i} x1={X(i + 1)} x2={X(i + 1)} y1={380} y2={418} stroke={DEP.stroke} strokeWidth={4} />)}
				{Array.from({length: 12}, (_, i) => <g key={i}><path d={`M${X(24 + i) + 4},${414} Q${X(24.5 + i)},${384} ${X(25 + i) - 4},${414}`} fill="none" stroke={INT.stroke} strokeWidth={3} />{prog(fr, k.made, 10) > 0.01 ? <rect x={X(25 + i) - 7} y={378} width={14} height={38} fill="none" stroke={INK_SOFT} strokeWidth={2} strokeDasharray="4 4" opacity={prog(fr, k.made, 10)} /> : null}</g>)}
				{[0, 12, 24, 36].map(m => <text key={m} x={X(m)} y={458} textAnchor="middle" style={T(28, INK)}>{m === 0 ? '0' : `${m} months`}</text>)}
				<text x={X(12)} y={366} textAnchor="middle" opacity={prog(fr, k.covers, 12)} style={T(34, DEP.ink, true)}>stage 1: deposits</text>
				<text x={X(30)} y={366} textAnchor="middle" opacity={prog(fr, k.after, 12)} style={T(34, INT.ink, true)}>stage 2: interest only</text>
			</FrameSvg>
			<Row x={740} y={500} at={k.grows} size={42} dim={prog(fr, k.twelve, 12) * 0.4}>stage 1:  250 × <Frac n={<>1.005<Pow>24</Pow> − 1</>} d="0.005" /> = $6,357.99</Row>
			<Row x={740} y={630} at={k.twelve} size={44}>stage 2:  6357.99 × 1.005<Pow>12</Pow><span style={{color: POS, fontSize: 30}}>   (1.005¹² ≈ 1.06168)</span></Row>
			<div style={{opacity: 1 - prog(fr, k.using - 10, 12)}}>
				<Hand x={740} y={800} at={k.two} size={40} color={DEP.ink} w={1100}>stage 1: the annuity formula covers the 24 deposits</Hand>
				<Hand x={740} y={860} at={k.after} size={40} color={INT.ink} w={1100}>stage 2: no deposits, so plain compound interest: × 1.005 each month</Hand>
			</div>
			<AnswerBox x={740} y={700} at={k.final} size={50}>final balance: $6,750.14</AnswerBox>
			<MistakeCard x={740} y={800} w={1080} at={k.using} size={36} wrong={<>3-year annuity: 250 × [(1.005)<Pow>36</Pow> − 1] ÷ 0.005 = $9,834.03</>} caption="counts 12 deposits never made" />
		</>
	);
};

// ---------- 8. memory aid ----------
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const hand = (size: number, color = INK): React.CSSProperties => ({position: 'absolute', fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color, lineHeight: 1.1});
	const lines = [{t: 'Match: r and n per payment period', at: k.match2, c: INT.ink}, {t: 'Model: FV = M[(1 + r)ⁿ − 1] ÷ r, goal or unknown in place', at: k.write, c: DEP.ink}, {t: "Finish: round the right way, whole periods, or grow what's left", at: k.then, c: '#287347'}];
	return (
		<>
			<FramedCard x={200} y={150} w={1520} h={790} at={-30} />
			<div style={{...hand(46, POS), left: 260, top: 172}}>Memory aid</div>
			<Suitcase x={270} y={420} h={440} />
			<div style={{...hand(110), left: 640, top: 240}}>
				<span style={{opacity: prog(fr, k.match, 10)}}>Match, </span><span style={{opacity: prog(fr, k.model, 10)}}>model, </span><span style={{opacity: prog(fr, k.finish, 10)}}>finish.</span>
			</div>
			{lines.map((l, i) => <div key={i} style={{...hand(46, l.c), left: 640, top: 450 + i * 120, width: 1020, opacity: prog(fr, l.at, 12)}}>{l.t}</div>)}
		</>
	);
};
export {CARD, SceneHeading};
