// Scenes 1 to 5: f12's last frame (the super statement and the month strip) and the question (exactly $12,000, a
// little more or a lot more?), following each deposit (the deposit tower: last in earns nothing, first in 59 months),
// every deposit with its interest written newest first, the geometric series and its sum ($13,954.01), and the
// same balance two ways (the month-by-month rule and the sum agree at n = 3).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {DepositTower, FrameSvg, MarkSpan, Pow, SceneHeading, annuityFV, smooth} from '../../math/studio';
import {F12FinalFrame} from '../math-a12-f12/s3';
import {K1, K2, K3, K4, K5} from './cuemap';
import {AnswerBox, BoxCard, Chip, DEP, Frac, Hand, INT, MoneyTable, POS, Row, SaveStrip, SuperSheet, m2} from './parts';
import {StairIcon} from './s3';

const lin = (fr: number, a: number, b: number) => Math.max(0, Math.min(1, (fr - a) / (b - a)));
const B = (s: React.ReactNode) => <span style={{color: DEP.ink}}>{s}</span>;
const A = (s: React.ReactNode) => <span style={{color: INT.ink}}>{s}</span>;
const SH = {x: 60, y: 190, h: 760};
const sheetLines = (o: {rateGlow?: [number, number]; balance?: React.ReactNode; contrib?: boolean} = {}) => [
	{text: B('$200 at each month end')},
	{text: '6% p.a., monthly', glow: o.rateGlow ? {from: o.rateGlow[0], to: o.rateGlow[1], color: INT.soft} : undefined},
	{text: o.contrib ? B('Put in: $12,000.00') : '60 × $200 = $12,000'},
	{text: o.balance ?? 'Balance after 5 years: ?', color: o.balance ? INK : INK_SOFT},
];
const CHOICES = ['exactly $12,000', 'a little more', 'a lot more'];

// ---------- the opening: f12's last frame (imported read-only) ----------

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const open = 1 - prog(fr, 14, 14);
	const n = fr < k.run ? 0 : Math.min(3, 1 + Math.floor((fr - k.run) / 20));
	return (
		<>
			<SceneHeading text="Why is annuity future value a geometric sum?" at={30} size={48} />
			<SuperSheet x={SH.x} y={SH.y} h={SH.h} header="Super statement" lines={sheetLines({rateGlow: [k.steady, k.sixty]})} />
			<SaveStrip bars={1 - prog(fr, k.follow, 20)} />
			{CHOICES.map((c, i) => <Chip key={c} x={760 + i * 330} y={800} at={-30} size={38} color={INK}>{c}</Chip>)}
			{fr >= k.guess ? <FrameSvg><DrawPath d="M740,790 C 900,760 1600,760 1780,800 C 1830,850 1700,885 1300,885 C 900,885 700,870 742,796" at={k.guess} dur={20} color={INT.stroke} width={6} /></FrameSvg> : null}
			<Hand x={1150} y={250} at={k.run + 20} out={k.follow - 10} size={42} color={POS}>{`rule used: ${n} of 60`}</Hand>
			<Hand x={1100} y={250} at={k.follow + 10} size={42} color={DEP.ink} w={700}>follow each deposit on its own</Hand>
			{open > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: open}}><F12FinalFrame /></div> : null}
		</>
	);
};

// ---------- the deposit tower of scenes 2 and 3 ----------
const TW = {x: 300, y: 300, w: 1400, h: 560, max: 300};
const slotW = TW.w / 63;
const blockTop = (j: number) => TW.y + TW.h - 200 * 1.005 ** (60 - j) * (TW.h / TW.max);
const blockX = (j: number) => TW.x + (j - 1) * slotW;
const Glow: React.FC<{j: number; at: number; out?: number}> = ({j, at, out}) => {
	const f = useCurrentFrame();
	const o = Math.max(0, Math.min(prog(f, at, 10), out === undefined ? 1 : 1 - prog(f, out, 10)));
	return o > 0.01 ? <FrameSvg><rect x={blockX(j) - 7} y={blockTop(j) - 7} width={slotW * 0.8 + 14} height={TW.y + TW.h - blockTop(j) + 14} rx={6} fill="none" stroke={INT.stroke} strokeWidth={5} opacity={o} /></FrameSvg> : null;
};

// ---------- 2. follow each deposit ----------
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const replay = fr >= k.every;
	const t = replay ? 60 * lin(fr, k.every + 4, k.every + 84) : 60;
	const T = (s: number, c: string): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: s, fill: c} as React.CSSProperties);
	return (
		<>
			<SceneHeading text="Follow each deposit" at={4} size={52} />
			<SuperSheet x={60} y={150} h={300} lines={[]} header="Super" />
			<DepositTower x={TW.x} y={TW.y} width={TW.w} height={TW.h} M={200} r={0.005} t={t} maxMonths={60} max={TW.max} readout={replay ? {x: 320, y: 160, width: 560} : undefined} />
			<FrameSvg>
				<text x={TW.x} y={TW.y + TW.h + 44} style={T(30, INK)}>0</text>
				<text x={blockX(60) + 10} y={TW.y + TW.h + 44} textAnchor="middle" style={T(30, INK)}>60 months</text>
				<line x1={blockX(60) + slotW * 1.4} x2={blockX(60) + slotW * 1.4} y1={TW.y + TW.h} y2={TW.y + 40} stroke={INK} strokeWidth={4} />
				<path d={`M${blockX(60) + slotW * 1.4},${TW.y + 40} l 60 18 l -60 18 z`} fill={INK} />
				<text x={blockX(60) + slotW * 1.4 - 10} y={TW.y + 20} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, fill: INK}}>balance read here</text>
			</FrameSvg>
			<Glow j={60} at={k.all} out={k.before} />
			<Glow j={59} at={k.one} out={k.first} />
			<Glow j={1} at={k.fifty} out={k.every} />
			{!replay ? <>
				<Chip x={1080} y={180} at={k.all} out={k.before} size={40} color={INK}>last in: 0 months, worth $200.00</Chip>
				<Chip x={1060} y={180} at={k.one} out={k.first} size={40} color={INK}>200 × 1.005 = $201.00</Chip>
				<Chip x={330} y={180} at={k.fifty} size={40} color={INK}>first in: 59 months{fr >= k.three ? <>,  200 × 1.005<Pow>59</Pow> ≈ $268.43</> : null}</Chip>
			</> : null}
			<Hand x={TW.x + 20} y={TW.y + TW.h + 70} at={k.take} size={36} color={POS} w={1300}>each blue block is a $200 deposit; its amber layer is the interest it has earned by month 60</Hand>
		</>
	);
};

// ---------- 3. every deposit, with its interest ----------
const LADDER = [
	<>200</>, <>+ 200{A('(1.005)')}</>, <>+ 200{A(<>(1.005)<Pow>2</Pow></>)}</>, <>+ ⋯</>, <>+ 200{A(<>(1.005)<Pow>59</Pow></>)}</>,
];
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const at = [k.two, k.two + 30, k.sq - 40, k.up - 10, k.up + 40];
	return (
		<>
			<SceneHeading text="Every deposit, with its interest" at={4} size={52} />
			<DepositTower x={980} y={240} width={880} height={420} M={200} r={0.005} t={60} maxMonths={60} max={300} label="60 deposits at month 60" />
			<Hand x={96} y={180} at={k.so} size={42} color={INK} w={1300}>future value = every deposit + the interest it has earned</Hand>
			<Hand x={130} y={240} at={k.write} size={40} color={POS}>newest first</Hand>
			<BoxCard x={96} y={300} w={840} at={8} out={k.two - 8} size={44} title="plan">
				<div>Add up every deposit with the interest it has earned.</div>
				<div style={{marginTop: 12}}>List them newest first: the last deposit, then the one before it, and so on.</div>
			</BoxCard>
			{LADDER.map((l, i) => <Row key={i} x={160} y={300 + i * 72} at={at[i]} size={44}>{l}</Row>)}
			{fr >= k.each ? <FrameSvg>{[0, 1, 2, 3].map(i => <DrawPath key={i} d={`M150,${330 + i * 72} C 96,${340 + i * 72} 96,${392 + i * 72} 150,${402 + i * 72}`} at={k.each + 10 + i * 8} dur={14} color={INT.stroke} width={5} />)}</FrameSvg> : null}
			<Hand x={600} y={420} at={k.five} size={42} color={INT.ink}>× 1.005 each step</Hand>
			<Hand x={96} y={800} at={k.write} size={38} color={POS} w={1500}>newest first: the last deposit (no interest) is the first term</Hand>
			{fr >= k.sixty ? <FrameSvg><DrawPath d="M560,300 h20 V650 h-20" at={k.sixty} dur={14} color={INK} width={4} /></FrameSvg> : null}
			<Hand x={600} y={500} at={k.sixty} size={42} color={INK} w={340}>60 terms, one for each deposit</Hand>
			<Row x={96} y={700} at={k.nine} size={46}>FV = {B('200')} + 200{A('(1.005)')} + 200{A(<>(1.005)<Pow>2</Pow></>)} + … + 200{A(<>(1.005)<Pow>59</Pow></>)}</Row>
		</>
	);
};

// ---------- 4. a geometric series ----------
const COL = {x: 110, base: 900, w: 150, sc: 600 / 14200};
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const d = (a: number) => prog(fr, a, 12);
	const big = d(k.on - 10);
	const bh = 12000 * COL.sc, ah = 1954.01 * COL.sc;
	return (
		<>
			<SceneHeading text="A geometric series" at={4} size={52} />
			<FrameSvg>
				<rect x={COL.x} y={COL.base - bh} width={COL.w} height={bh} fill={DEP.soft} stroke={DEP.stroke} strokeWidth={4} />
				<rect x={COL.x} y={COL.base - bh - ah} width={COL.w} height={ah} fill={INT.stroke} />
				<line x1={COL.x - 20} x2={COL.x + COL.w + 20} y1={COL.base} y2={COL.base} stroke={INK} strokeWidth={4} />
				<text x={COL.x + COL.w / 2} y={COL.base + 40} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, fill: INK}}>month 60</text>
				<g opacity={d(k.earnings - 30)}><text x={COL.x + COL.w / 2} y={COL.base - bh / 2} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: DEP.ink}}>$12,000</text></g>
			</FrameSvg>
			<BoxCard x={330} y={170} w={600} at={k.first - 10} size={42} title="givens">
				<div style={{fontWeight: 800, color: DEP.ink}}>first term a = 200</div>
				<div style={{fontWeight: 800, color: INT.ink, opacity: d(k.ratio)}}>ratio 1.005</div>
				<div style={{fontWeight: 800, opacity: d(k.sixty)}}>n = 60 terms</div>
			</BoxCard>
			<Chip x={330} y={420} at={k.you} size={30} color={INK_SOFT}>S<sub>n</sub> = a(r<Pow>n</Pow> − 1) ÷ (r − 1), r the ratio (sequences videos)</Chip>
			<Row x={330} y={500} at={-30} out={k.here - 6} size={40} color={POS}>FV = 200 + 200(1.005) + … + 200(1.005)<Pow>59</Pow></Row>
			<Row x={330} y={500} at={k.here} size={50} dim={d(k.over + 30) * 0.5} small={42}>FV = {B('200')} × <Frac n={<>{A('1.005')}<Pow>60</Pow> − 1</>} d={<>{A('1.005')} − 1</>} /></Row>
			<Row x={330} y={640} at={k.over} size={50}>{'     '}= {B('200')} × <Frac n={<>{A('1.005')}<Pow>60</Pow> − 1</>} d="0.005" /></Row>
			<Hand x={870} y={700} at={k.over + 20} size={34} color={POS}>1.005 − 1 = 0.005</Hand>
			<AnswerBox x={330} y={790} at={k.thats} size={52}>FV = $13,954.01</AnswerBox>
			<Hand x={790} y={810} at={k.thats + 20} size={34} color={POS}>1.005⁶⁰ ≈ 1.34885</Hand>
			<div style={{opacity: 1 - big}}>
				{CHOICES.map((c, i) => <Chip key={c} x={1320} y={200 + i * 100} at={-30} size={38} color={i === 1 ? '#287347' : INK}>{i === 1 ? <MarkSpan kind="circle" at={k.so} role="answer" width={5}>{c}</MarkSpan> : <span style={{opacity: 1 - 0.6 * d(k.so)}}>{c}</span>}</Chip>)}
				<StairIcon x={1330} base={720} n={8} w={52} />
				{fr >= k.average ? <FrameSvg><line x1={1320} x2={1820} y1={720 - 90 - 42} y2={720 - 90 - 42} stroke={INK} strokeWidth={4} strokeDasharray="12 9" opacity={d(k.average)} /></FrameSvg> : null}
				<Hand x={1320} y={760} at={k.half} size={36} color={POS} w={560}>average: 29.5 months of interest</Hand>
			</div>
			<SuperSheet x={1300} y={170} h={760} header="Super statement" at={k.on - 10} lines={sheetLines({contrib: true, balance: 'Balance: $13,954.01'})} size={28}
				panel={<div style={{opacity: d(k.earnings - 60), fontSize: 34, lineHeight: 1.35}}><div style={{color: DEP.ink}}>Put in  $12,000.00</div><div style={{color: INT.ink}}>Earnings  $1,954.01</div><div>Balance  $13,954.01</div></div>} />
		</>
	);
};

// ---------- 5. the same balance, two ways ----------
const MB = {base: 820, sc: 0.8, w: 200, cx: [1080, 1380, 1680]};
/** Month m's balance as its deposits, newest at the bottom: each a blue $200 with its own amber interest layer. */
const MonthBars: React.FC<{at: readonly number[]; glowAt: number}> = ({at, glowAt}) => {
	const f = useCurrentFrame();
	const T = (sz: number, c: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: sz, fill: c} as React.CSSProperties);
	return <FrameSvg>
		<line x1={MB.cx[0] - 150} x2={MB.cx[2] + 150} y1={MB.base} y2={MB.base} stroke={INK} strokeWidth={4} />
		{[1, 2, 3].map(m => {
			const g = smooth(prog(f, at[m - 1], 20)), o = prog(f, at[m - 1], 10);
			if (o <= 0.01) return null;
			const x0 = MB.cx[m - 1] - MB.w / 2;
			let top = MB.base;
			const segs = Array.from({length: m}, (_, i) => {
				const j = m - i, v = 200 * 1.005 ** (m - j), hb = 200 * MB.sc * g, hi = Math.max(m - j > 0 ? 5 : 0, (v - 200) * MB.sc) * g;
				const yb = top - hb, yi = yb - hi; top = yi;
				const gl = m === 3 ? Math.max(0, 1 - Math.abs(f - (glowAt + i * 14)) / 14) : 0;
				return <g key={j}>
					<rect x={x0} y={yb} width={MB.w} height={hb} fill={DEP.soft} stroke={DEP.stroke} strokeWidth={4} />
					{hi > 0 ? <rect x={x0} y={yi} width={MB.w} height={hi} fill={INT.stroke} /> : null}
					<text x={x0 + MB.w / 2} y={yb + hb / 2 + 12} textAnchor="middle" opacity={g} style={T(32, DEP.ink)}>{`deposit ${j}`}</text>
					{m - j > 0 ? <text x={x0 + MB.w + 10} y={yi + 8} opacity={g} style={T(30, INT.ink, true)}>{`+${m2(v - 200)}`}</text> : null}
					{gl > 0.01 ? <rect x={x0 - 6} y={yi - 6} width={MB.w + 12} height={hb + hi + 12} rx={8} fill="none" stroke={INT.stroke} strokeWidth={5} opacity={gl} /> : null}
				</g>;
			});
			return <g key={m} opacity={o}>{segs}
				<text x={MB.cx[m - 1]} y={MB.base + 40} textAnchor="middle" style={T(32, INK)}>{`month ${m}`}</text>
				<text x={MB.cx[m - 1]} y={top - 14} textAnchor="middle" style={T(36, INK)}>{m2(annuityFV(200, 0.005, m))}</text>
			</g>;
		})}
	</FrameSvg>;
};
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const glow = (i: number) => Math.max(0, 1 - Math.abs(fr - (k.rule + 10 + i * 12)) / 14);
	return (
		<>
			<SceneHeading text="The same balance, two ways" at={4} size={52} />
			<Hand x={96} y={180} at={-30} size={38} color={INK}>rule: A<sub>n+1</sub> = 1.005A<sub>n</sub> + 200 (last video)</Hand>
			<MoneyTable x={96} y={240} size={32} rowH={54} headSize={26} cols={[{head: 'month', w: 100, align: 'center'}, {head: 'start', w: 170}, {head: 'interest', w: 150, color: INT.ink}, {head: 'deposit', w: 160, color: DEP.ink}, {head: 'end', w: 180}]}
				dim={i => 1 - Math.max(glow(i), prog(fr, k.use, 10) > 0 ? 1 : 0)}
				rows={[
					[{text: '1', at: -30}, {text: '$0.00', at: -30}, {text: '$0.00', at: -30}, {text: '$200.00', at: -30}, {text: '$200.00', at: -30}],
					[{text: '2', at: -30}, {text: '$200.00', at: -30}, {text: '$1.00', at: -30}, {text: '$200.00', at: -30}, {text: '$401.00', at: -30}],
					[{text: '3', at: -30}, {text: '$401.00', at: -30}, {text: '$2.01', at: -30}, {text: '$200.00', at: -30}, {text: '$603.01', at: -30, frame: k.months}],
				]} />
			<Hand x={96} y={480} at={k.rule} size={42} color={POS}>the rule adds month by month</Hand>
			<MonthBars at={[-30, k.use, k.use + 45]} glowAt={k.sumadds} />
			<Hand x={980} y={180} at={k.sumadds} size={42} color={POS}>the sum adds deposit by deposit</Hand>
			<Row x={1000} y={882} at={k.sum} size={38}>{B('200')} + 200{A('(1.005)')} + 200{A(<>(1.005)<Pow>2</Pow></>)}<span style={{opacity: prog(fr, k.thats, 10)}}> = $603.01</span></Row>
			<Row x={96} y={560} at={k.sum + 40} size={50}>{B('200')} × <Frac n={<>{A('1.005')}<Pow>3</Pow> − 1</>} d="0.005" /><span style={{opacity: prog(fr, k.thats, 10)}}> = </span></Row>
			<AnswerBox x={590} y={570} at={k.thats} size={50}>$603.01</AnswerBox>
			{fr >= k.months ? <FrameSvg><DrawPath d="M880,450 C 1150,440 1450,330 1560,300" at={k.months} dur={16} color="#2e7d4f" width={5} /></FrameSvg> : null}
			<Hand x={96} y={720} at={k.months + 10} size={48} color="#287347">same balance ✓</Hand>
			<Chip x={96} y={800} at={k.same} size={40} color={INK}>{m2(603.005)} both ways</Chip>
		</>
	);
};
