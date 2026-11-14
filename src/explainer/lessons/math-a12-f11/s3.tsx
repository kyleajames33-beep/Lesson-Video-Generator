// Scenes 9 to 14: attempt 1 ($250,000 at 6% p.a. monthly over 20 years: the repayment and the total) and its brief
// feedback ($1,791.08, $429,859.20; crossed: 250 000 ÷ 240), attempt 2 ($18,000 at 6% p.a. monthly, $500 a month:
// how many repayments) and its brief feedback (40; crossed: 39), the handoff (saving towards a first apartment:
// f12's opening frame, exported as F11FinalFrame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, GivensStrip, KeyNotesBullets, MATH_ROLES, MistakeCard, Pow, QuestionCard, SceneHeading, StudioPlot, SvgPlate, loanBalance, usePlatePreload} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';
import {K9, K10, K11, K12, K13, K14} from './cuemap';
import {dur, hold} from './common';
import {AnswerBox, BROWN, Bike, BoxCard, CARD, Chip, SplitBar, Frac, FramedCard, Hand, INT, POS, QStrip, REP, Row, Sb, Tag, m0} from './parts';

const DEP = MATH_ROLES.deposit;

// ---------- 9. attempt 1 ----------
const Attempt: React.FC<{id: string; pauseAt: number; heading?: string; given: React.ReactNode[]; picture: React.ReactNode; children: React.ReactNode}> = ({id, pauseAt, heading, given, picture, children}) => (
	<>
		<BoxCard x={96} y={520} w={660} at={6} size={40} title="given">{given.map((g, i) => <div key={i} style={{fontWeight: 800, whiteSpace: 'pre'}}>{g}</div>)}</BoxCard>
		{picture}
		<QuestionCard at={0} size={44} w={1700} y={170} hold={{...hold(id), ringFrom: pauseAt}} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
	</>
);
/** A coded sketch of a 20-year balance curve from $250,000 to $0, with "M = ?" (or the found repayment). */
const A1Sketch: React.FC<{x: number; y: number; w: number; h: number; mText?: string}> = ({x, y, w, h, mText}) => {
	const M = (1250 * 1.005 ** 240) / (1.005 ** 240 - 1);
	return <StudioPlot x={x} y={y} width={w} height={h} window={{x: [0, 22], y: [0, 280000]}} xTicks={[{value: 20, label: '20 years'}]} yTicks={[{value: 250000, label: '$250,000'}]} xLabel="" yLabel="balance owed" grid={false}>
		{m => {
			let d = '';
			for (let i = 0; i <= 120; i++) {const t = (20 * i) / 120, [a, b] = m.p(t, Math.max(0, loanBalance(250000, 0.005, M, t * 12))); d += `${i ? 'L' : 'M'}${a.toFixed(1)},${b.toFixed(1)} `;}
			const [ex, ey] = m.p(20, 0), [tx, ty] = m.p(6, 225000);
			return <g>
				<path d={d} fill="none" stroke={INK} strokeWidth={6} strokeLinejoin="round" />
				<circle cx={ex} cy={ey} r={12} fill={CARD} stroke={INK} strokeWidth={5} />
				<text x={ex + 22} y={ey + 12} textAnchor="start" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">$0</text>
				<text x={tx} y={ty} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: REP.ink}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{mText ?? 'M = ?'}</text>
			</g>;
		}}
	</StudioPlot>;
};
export const S09: React.FC = () => (
	<Attempt id="scene-09" pauseAt={K9.pause} given={['loan: $250,000', '6% p.a., compounded monthly', 'equal monthly repayments, 20 years', '(a) repayment, nearest cent', '(b) total amount paid']} picture={<A1Sketch x={860} y={560} w={620} h={330} />}>
		<div>A loan of $250,000 has interest at 6% p.a., compounded monthly. It is repaid in equal monthly repayments over 20 years. (a) Find the monthly repayment, to the nearest cent. (b) Find the total amount paid.</div>
	</Attempt>
);

// ---------- 10. feedback 1 ----------
export const S10: React.FC = () => {
	const k = K10;
	const fr = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['A loan of ', {u: '$250,000', at: k.pr}, ' has interest at ', {u: '6% p.a., compounded monthly', at: k.here}, '. It is repaid in equal monthly repayments ', {u: 'over 20 years', at: k.n}, '. (a) Find the monthly repayment, ', {u: 'to the nearest cent', at: k.cents}, '. (b) Find the ', {u: 'total amount paid', at: k.total}, '.']} />
			<GivensStrip x={96} y={300} size={36} maxW={1700} items={[{content: 'P = $250,000', role: 'balance', at: k.here}, {content: 'r = 0.06 ÷ 12 = 0.005', role: 'interest', at: k.here + 10}, {content: 'n = 20 × 12 = 240', at: k.n}, {content: 'Pr = 1250', role: 'interest', at: k.pr}]} />
			<BoxCard x={96} y={390} w={1100} at={8} out={k.so - 8} size={42} title="plan">
				<div>Repaid in 20 years: set A<sub>240</sub> = 0 and solve for M.</div>
				<div style={{marginTop: 10}}>Then the total is 240 equal repayments.</div>
			</BoxCard>
			<Row x={96} y={380} at={k.so} size={50} dim={prog(fr, k.total, 12)} small={40}>M = <Frac n={<>1250 × 1.005<Pow>240</Pow></>} d={<>1.005<Pow>240</Pow> − 1</>} /></Row>
			<Hand x={760} y={420} at={k.times + 40} size={38} color={POS}>1.005²⁴⁰ ≈ 3.3102</Hand>
			<AnswerBox x={96} y={530} at={k.cents} size={50}>(a)  M = $1,791.08</AnswerBox>
			<div style={{opacity: 1 - prog(fr, k.twenty, 12)}}>
				<SplitBar x={330} y={760} w={760} M={1791.08} interest={1250} label="" at={k.pr + 20} />
				<Hand x={96} y={830} at={k.pr + 30} size={38} color={INT.ink} w={1000}>month 1: $1,250.00 is interest, so only $541.08 pays off the loan</Hand>
			</div>
			<AnswerBox x={96} y={636} at={k.twenty} size={46}>(b)  240 × $1,791.08 = $429,859.20</AnswerBox>
			<Hand x={96} y={724} at={k.twenty + 40} size={30} color={POS} w={1000}>the usual answer; strictly, the last repayment is $1,789.99, so the loan is cleared for $429,858.11</Hand>
			<MistakeCard x={96} y={800} w={1000} at={k.two} size={44} wrong={<>250 000 ÷ 240 ≈ $1,041.67</>} caption="less than the first month's interest, $1,250" />
			<A1Sketch x={1260} y={430} w={600} h={360} mText={fr >= k.cents ? 'M = $1,791.08' : 'M = ?'} />
		</>
	);
};

// ---------- 11. attempt 2 ----------
export const S11: React.FC = () => (
	<Attempt id="scene-11" pauseAt={K11.pause} heading="Last one" given={['loan: $18,000', '6% p.a., compounded monthly', 'repaid at $500 per month', 'how many monthly repayments?']}
		picture={<>
			<Tag x={880} y={400} h={600} size={36} lines={[{text: 'Loan $18,000'}, {text: '6% p.a.'}, {text: '$500 a month'}, {text: 'Paid off: ?', color: INK_SOFT}]} />
			<Hand x={1220} y={640} at={-30} size={38} color={POS} w={300}>compounded monthly</Hand>
		</>}>
		<div>A loan of $18,000 has interest at 6% p.a., compounded monthly. It is repaid at $500 per month. How many monthly repayments are needed to repay the loan?</div>
	</Attempt>
);

// ---------- 12. feedback 2 ----------
const NumLine: React.FC<{x: number; y: number; w: number; lo: number; hi: number; mark: {v: number; label: string; at: number}; ringAt?: number; ring?: number; crossAt?: number; cross?: number}> = ({x, y, w, lo, hi, mark, ringAt, ring, crossAt, cross}) => {
	const f = useCurrentFrame();
	const X = (v: number) => x + ((v - lo) / (hi - lo)) * w;
	const T = (s: number, c: string): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: s, fill: c} as React.CSSProperties);
	return <FrameSvg>
		<line x1={x - 20} x2={x + w + 20} y1={y} y2={y} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		{Array.from({length: hi - lo + 1}, (_, i) => lo + i).map(v => <g key={v}><line x1={X(v)} x2={X(v)} y1={y - 14} y2={y + 14} stroke={INK} strokeWidth={4} /><text x={X(v)} y={y + 56} textAnchor="middle" style={T(36, INK)}>{v}</text></g>)}
		<g opacity={prog(f, mark.at, 12)}><line x1={X(mark.v)} x2={X(mark.v)} y1={y - 70} y2={y} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="8 7" /><text x={X(mark.v)} y={y - 82} textAnchor="middle" style={T(36, INK_SOFT)}>{mark.label}</text></g>
		{ringAt !== undefined && ring !== undefined ? <g opacity={prog(f, ringAt, 12)}><ellipse cx={X(ring)} cy={y + 44} rx={44} ry={36} fill="none" stroke={MATH_ROLES.answer.stroke} strokeWidth={5} /></g> : null}
		{crossAt !== undefined && cross !== undefined ? <g opacity={prog(f, crossAt, 12)}><path d={`M${X(cross) - 26},${y + 20} L${X(cross) + 26},${y + 66} M${X(cross) + 26},${y + 20} L${X(cross) - 26},${y + 66}`} stroke={MATH_ROLES.mistake.stroke} strokeWidth={6} strokeLinecap="round" /></g> : null}
	</FrameSvg>;
};
export {NumLine};
export const S12: React.FC = () => {
	const k = K12;
	const fr = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['A loan of ', {u: '$18,000', at: k.first}, ' has interest at ', {u: '6% p.a., compounded monthly', at: k.first + 10}, '. It is repaid at ', {u: '$500 per month', at: k.five}, '. ', {u: 'How many monthly repayments', at: k.round}, ' are needed to repay the loan?']} />
			<GivensStrip x={96} y={300} size={38} maxW={1400} items={[{content: 'P = $18,000', role: 'balance', at: k.first}, {content: 'r = 0.005', role: 'interest', at: k.first + 10}, {content: 'M = $500', role: 'repay', at: k.five}]} />
			<Row x={96} y={386} at={k.first} size={48} dim={prog(fr, k.so, 12)} small={40}>Pr = 18 000 × 0.005 = <span style={{color: INT.ink}}>90</span></Row>
			<Row x={96} y={466} at={k.so} size={48} dim={prog(fr, k.taking, 12)} small={40}>(1.005)<Pow>n</Pow> = <Frac n="500" d="500 − 90" /><span style={{opacity: prog(fr, k.which, 10)}}> = <Frac n="50" d="41" /></span></Row>
			<Row x={96} y={610} at={k.taking} size={50}>n = log<Frac n="50" d="41" /> ÷ log 1.005<span style={{color: POS, opacity: prog(fr, k.nine, 10)}}>  ≈ 39.79</span></Row>
			<AnswerBox x={96} y={740} at={k.round} size={52}>40 repayments</AnswerBox>
			<MistakeCard x={560} y={730} w={760} at={k.thirty} size={44} wrong={<>39 repayments</>} caption="A₃₉ ≈ $392.91 is still owed" />
			<NumLine x={1300} y={500} w={480} lo={38} hi={41} mark={{v: 39.79, label: '39.79', at: k.nine}} ringAt={k.forty} ring={40} crossAt={k.thirty} cross={39} />
			<Hand x={1300} y={600} at={k.round} size={42} color={MATH_ROLES.answer.ink}>round up</Hand>
			<Tag x={1580} y={640} h={300} size={26} lines={[{text: 'Loan $18,000'}, {text: '6% p.a.'}, {text: '$500/month'}, {text: fr >= k.forty ? 'Paid off: 40' : 'Paid off: ?', color: fr >= k.forty ? MATH_ROLES.answer.ink : INK_SOFT}]} />
		</>
	);
};

// ---------- 13. handoff: saving towards a first apartment (f12's opening frame) ----------
export const CAL: PlateSpec = {src: 'assets/maths/ma12-wall-calendar-v1.png', nat: [1122, 1402], box: [183, 214, 940, 1193]};
export const APT: PlateSpec = {src: 'assets/maths/ma12-apartment-building-v1.png', nat: [1182, 1330], box: [236, 285, 947, 1063]};
const SV = {x: 520, base: 780, slot: 130, unit: 0.34};
const svX = (i: number) => SV.x + i * SV.slot + SV.slot / 2;
const SAVED = [0, 200, 401, 603.01, 806.02];
const SaveBoard: React.FC<{head: number; plates: number; t0: number; dep: number; arcs: number; rest: number; goal: number; chips: number}> = ({head, plates, t0, dep, arcs, rest, goal, chips}) => {
	const f = useCurrentFrame();
	usePlatePreload([CAL.src, APT.src]);
	const T = (s: number, c: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: s, fill: c} as React.CSSProperties);
	const top = (i: number) => SV.base - SAVED[i] * SV.unit;
	const labels = ['t = 0', 'month 1', 'month 2', 'month 3', 'month 4'];
	return <>
		<SceneHeading text="Saving instead of borrowing" at={head} size={52} />
		<FrameSvg style={{opacity: prog(f, plates, 14)}}>
			<SvgPlate plate={CAL} x={60} y={300} w={(520 * (CAL.box[2] - CAL.box[0])) / (CAL.box[3] - CAL.box[1])} />
			<SvgPlate plate={APT} x={1490} y={380} w={(440 * (APT.box[2] - APT.box[0])) / (APT.box[3] - APT.box[1])} />
			<rect x={1590} y={300} width={210} height={62} rx={14} fill={CARD} stroke={INK} strokeWidth={4} strokeDasharray="12 9" opacity={prog(f, goal, 12)} />
			<text x={1695} y={344} textAnchor="middle" opacity={prog(f, goal, 12)} style={T(36, INK)}>goal</text>
		</FrameSvg>
		<FrameSvg>
			<line x1={SV.x - 10} x2={svX(6) + SV.slot / 2} y1={SV.base} y2={SV.base} stroke={INK} strokeWidth={4} />
			{labels.map((l, i) => <g key={i} opacity={prog(f, i === 0 ? t0 : dep + (i - 1) * 8, 12)}>
				<text x={svX(i)} y={SV.base + 46} textAnchor="middle" style={T(30, INK)}>{l}</text>
				{i > 0 ? <g>
					<rect x={svX(i) - 50} y={top(i)} width={100} height={SV.base - top(i)} fill={DEP.soft} stroke={DEP.stroke} strokeWidth={4} />
					<path d={`M${svX(i)},${top(i) - 92} V${top(i) - 16} M${svX(i) - 16},${top(i) - 32} L${svX(i)},${top(i) - 14} L${svX(i) + 16},${top(i) - 32}`} fill="none" stroke={DEP.stroke} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
					<text x={svX(i)} y={top(i) - 102} textAnchor="middle" style={T(34, DEP.ink)} stroke={CARD} strokeWidth={6} paintOrder="stroke">+$200</text>
				</g> : <text x={svX(0)} y={SV.base - 20} textAnchor="middle" style={T(34, INK)}>$0</text>}
			</g>)}
			<text x={svX(0)} y={SV.base + 86} textAnchor="middle" opacity={prog(f, t0, 12)} style={T(32, INK_SOFT, true)}>saved</text>
			{[2, 3, 4].map((i, j) => {const o = prog(f, arcs + j * 8, 12), x0 = svX(i - 1) + 30, x1 = svX(i) - 30, y0 = top(i - 1) - 130, y1 = top(i) - 130; return o > 0.01 ? <g key={i} opacity={o}>
				<path d={`M${x0},${y0} Q ${(x0 + x1) / 2},${Math.min(y0, y1) - 46} ${x1},${y1}`} fill="none" stroke={INT.stroke} strokeWidth={4} />
				<text x={(x0 + x1) / 2} y={Math.min(y0, y1) - 50} textAnchor="middle" style={T(28, INT.ink)} stroke={CARD} strokeWidth={6} paintOrder="stroke">×(1 + r)</text>
			</g> : null;})}
			<g opacity={prog(f, rest, 12)}>
				<text x={svX(5)} y={SV.base - 40} textAnchor="middle" style={T(44, INK_SOFT)}>…</text>
				<rect x={svX(6) - 60} y={SV.base - 110} width={120} height={100} rx={14} fill={CARD} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 8" />
				<text x={svX(6)} y={SV.base - 42} textAnchor="middle" style={T(56, INK_SOFT)}>?</text>
				<text x={svX(6)} y={SV.base + 46} textAnchor="middle" style={T(30, INK)}>after 5 years</text>
			</g>
		</FrameSvg>
		<Chip x={900} y={80} at={chips} size={42} color={BROWN}>Next: saving with regular deposits</Chip>
		<Chip x={1760} y={76} at={chips + 14} size={80} color={BROWN}>?</Chip>
	</>;
};
/** f11's final frame, and f12's opening frame: the calendar, the apartment with its goal, and the deposit strip. */
export const F11FinalFrame: React.FC = () => <SaveBoard head={-300} plates={-300} t0={-300} dep={-300} arcs={-300} rest={-300} goal={-300} chips={-300} />;
export const S13: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K13;
	const sw = prog(fr, k.now - 6, 18);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="One formula, four questions" at={4} size={52} />
				<FramedCard x={96} y={190} w={1000} h={600} at={-30} />
				<div style={{position: 'absolute', left: 140, top: 210, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: POS}}>Memory aid</div>
				<div style={{position: 'absolute', left: 140, top: 270, width: 920, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, lineHeight: 1.1, color: INK}}>Paid off means A<Sb>n</Sb> = 0. Set it to zero, then solve for what's missing.</div>
				<div style={{position: 'absolute', left: 140, top: 520, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, lineHeight: 1.3, color: POS}}>term n, repayment M, total paid: set A<Sb>n</Sb> = 0<br />still owing: just work out A<Sb>k</Sb></div>
				<Bike x={1160} y={420} w={680} />
			</div> : null}
			<SaveBoard head={k.instead - 10} plates={k.now} t0={k.save} dep={k.two} arcs={k.earns} rest={k.how} goal={k.save + 20} chips={k.years} />
		</>
	);
};

// ---------- 14. key notes ----------
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>Repaid means A<Sb>n</Sb> = 0.</>, at: 2},
		{content: <>Term: (1 + r)<Pow>n</Pow> = M ÷ (M − Pr); round n up.</>, at: 6},
		{content: <>Repayment: M = Pr(1 + r)<Pow>n</Pow> ÷ [(1 + r)<Pow>n</Pow> − 1].</>, at: 10},
		{content: <>Still owing after k repayments: A<Sb>k</Sb> with the real M.</>, at: 14},
		{content: <>Total paid = all repayments; interest = total − P.</>, at: 18},
	];
	const end = Math.max(1350, dur('scene-14'));
	const back = prog(fr, end - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K14.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1080} items={items} size={42} gap={62} />
				<FramedCard x={1220} y={196} w={660} h={680} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1260, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: POS}}>Memory aid</div>
					<div style={{position: 'absolute', left: 1260, top: 276, width: 590, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, lineHeight: 1.1, color: INK}}>Paid off means A<Sb>n</Sb> = 0. Set it to zero, then solve for what's missing.</div>
					<Bike x={1300} y={590} w={500} />
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><F11FinalFrame /></div> : null}
		</>
	);
};
export {REP, m0, BoxCard};
