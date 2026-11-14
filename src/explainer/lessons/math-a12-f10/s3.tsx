// Scenes 9 to 14: attempt 1 ($200,000 at 6% p.a. monthly, $1,000 a month: why it is never repaid) and its brief
// feedback (interest $1,000 = M; crossed: 200 months), attempt 2 (read a given term graph: the repayment for 15 years)
// and its brief feedback (≈ $3,160; crossed: about $4,300), the handoff (a $20,000 motorbike loan: f11's opening frame,
// exported as F10FinalFrame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {GivensStrip, KeyNotesBullets, MistakeCard, QuestionCard, SceneHeading, StudioPlot} from '../../math/studio';
import {K9, K10, K11, K12, K13, K14} from './cuemap';
import {dur, hold} from './common';
import {AidBar, AidCard} from './s2';
import {BikeBoard} from '../math-a12-f11/parts';
import {ANSR, AnswerBox, BoxCard, BROWN, CARD, Chip, FramedCard, GREY, HL, Hand, INTR, M30, QStrip, REPY, Row, Split, TermCurve, termAt} from './parts';

const TXT = (size: number, fill: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size, fill} as React.CSSProperties);
const Attempt: React.FC<{id: string; pauseAt: number; heading?: string; given: React.ReactNode[]; picture: React.ReactNode; children: React.ReactNode}> = ({id, pauseAt, heading, given, picture, children}) => (
	<>
		<BoxCard x={96} y={500} w={640} at={6} size={40} title="given">{given.map((g, i) => <div key={i} style={{fontWeight: 800, whiteSpace: 'pre'}}>{g}</div>)}</BoxCard>
		{picture}
		<QuestionCard at={0} size={44} w={1700} y={170} hold={{...hold(id), ringFrom: pauseAt}} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
	</>
);

// ---------- 9. attempt 1 ----------
/** An empty balance outline (months against balance) with "?" or a flat line at $200,000. */
const FlatPlot: React.FC<{x: number; y: number; w: number; h: number; flat?: number}> = ({x, y, w, h, flat = 0}) => {
	const fr = useCurrentFrame();
	return <StudioPlot x={x} y={y} width={w} height={h} window={{x: [0, 24], y: [0, 240000]}} xTicks={[6, 12, 18, 24]} yTicks={[{value: 200000, label: '$200k'}]} xLabel="months" yLabel="balance owed" at={-30}>{m => {
		const [a, b] = m.p(0, 200000), [c] = m.p(24, 200000), [qx, qy] = m.p(12, 110000), fo = flat ? prog(fr, flat, 14) : 0;
		return <g>
			{fo < 1 ? <text x={qx} y={qy} textAnchor="middle" opacity={1 - fo} style={TXT(72, INK_SOFT)}>?</text> : null}
			{fo > 0 ? <line x1={a} x2={a + (c - a) * fo} y1={b} y2={b} stroke={INK} strokeWidth={7} /> : null}
		</g>;
	}}</StudioPlot>;
};
export const S09: React.FC = () => (
	<Attempt id="scene-09" pauseAt={K9.pause} given={['loan: $200,000', '6% p.a., compounded monthly', 'repays $1,000 per month', 'explain: never repaid']} picture={<FlatPlot x={790} y={470} w={780} h={440} />}>
		<div>A loan of $200,000 has interest at 6% p.a., compounded monthly. The borrower repays $1,000 per month. Explain why the loan is never repaid.</div>
	</Attempt>
);

// ---------- 10. feedback 1 ----------
export const S10: React.FC = () => {
	const k = K10;
	const fr = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['A loan of ', {u: '$200,000', at: k.so + 20}, ' has interest at ', {u: '6% p.a., compounded monthly', at: k.monthly}, '. The borrower repays ', {u: '$1,000 per month', at: k.whole}, '. Explain why the loan is never repaid.']} />
			<GivensStrip x={96} y={290} size={40} maxW={1728} items={[{content: 'P = $200,000', at: k.so + 20}, {content: 'r = 0.06 ÷ 12 = 0.005', role: 'interest', at: k.monthly}, {content: 'M = $1,000', role: 'repay', at: k.whole}]} />
			<BoxCard x={96} y={380} w={900} at={-30} out={k.so - 8} size={40} title="plan"><div>Find the monthly rate, then the first month's interest, and compare it with M.</div></BoxCard>
			<Row x={96} y={380} at={k.so} size={52}>interest = 200 000 × 0.005<span style={{opacity: prog(fr, k.which, 10)}}> = $1,000 = M</span></Row>
			<Split x={340} y={500} k={0.55} M={1000} interest={1000} label="M = $1,000" o={prog(fr, k.whole, 12)} tealLabel="$0 to the debt" tealSize={44} />
			<AnswerBox x={96} y={620} at={k.every} size={50}>A₁ = A₂ = … = $200,000</AnswerBox>
			<MistakeCard x={96} y={750} w={880} at={k.wrong} size={46} wrong={<>200 000 ÷ 1000 = 200 months</>} caption="interest ignored: P ÷ M" />
			<FlatPlot x={1100} y={470} w={780} h={440} flat={k.still} />
			<Hand x={1120} y={920} at={k.still + 10} size={38} color={GREY}>none of the repayment reduces the debt</Hand>
		</>
	);
};

// ---------- 11. attempt 2 ----------
export const S11: React.FC = () => (
	<Attempt id="scene-11" pauseAt={K11.pause} heading="Last one" given={['$400,000 loan', '5% p.a., compounded monthly', 'the graph: term against repayment', 'find: M for 15 years']}
		picture={<TermCurve x={760} y={440} width={830} height={520} grid xLabel="monthly repayment ($)" yLabel="term (years)" />}>
		<div>The graph shows the time taken to repay a $400,000 loan at 5% p.a., compounded monthly, for different monthly repayments. Use the graph to estimate the monthly repayment needed to repay the loan in 15 years.</div>
	</Attempt>
);

// ---------- 12. feedback 2 ----------
export const S12: React.FC = () => {
	const k = K12;
	const fr = useCurrentFrame();
	const M15 = 3163.17;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['The graph shows the time taken to repay a $400,000 loan at 5% p.a., compounded monthly, for different monthly repayments. Use the graph to ', {u: 'estimate the monthly repayment', at: k.its}, ' needed to repay the loan in ', {u: '15 years', at: k.find}, '.']} />
			<GivensStrip x={96} y={310} size={38} maxW={760} items={[{content: '$400,000', at: k.find}, {content: '5% p.a., monthly', role: 'interest', at: k.find}, {content: 'term 15 years', at: k.find + 10}]} />
			<TermCurve x={840} y={290} width={1040} height={660} grid yLabel="term (years)">{m => {
				const [x0, y15] = m.p(1500, 15), [xc] = m.p(M15, 15), [, zy] = m.p(M15, 0), [x43, y43] = m.p(4294.58, termAt(4294.58));
				const ac = prog(fr, k.find + 6, 20), dn = prog(fr, k.down, 16);
				return <g>
					<line x1={x0} x2={x0 + (xc - x0) * ac} y1={y15} y2={y15} stroke={INK} strokeWidth={5} strokeDasharray="12 8" />
					{dn > 0 ? <line x1={xc} x2={xc} y1={y15} y2={y15 + (zy - y15) * dn} stroke={INK} strokeWidth={5} strokeDasharray="12 8" /> : null}
					{dn > 0.9 ? <circle cx={xc} cy={y15} r={12} fill={ANSR.stroke} stroke={CARD} strokeWidth={4} /> : null}
					<g opacity={prog(fr, k.halving, 12)}><circle cx={x43} cy={y43} r={11} fill={INTR.stroke} stroke={CARD} strokeWidth={4} /><text x={x43 - 10} y={y43 - 22} textAnchor="end" style={TXT(32, GREY)} stroke={CARD} strokeWidth={7} paintOrder="stroke">$4,300: ≈ 9.8 years</text></g>
				</g>;
			}}</TermCurve>
			<AnswerBox x={96} y={460} at={k.its} size={52}>≈ $3,160 a month</AnswerBox>
			<Hand x={96} y={566} at={k.its + 20} size={36} color={GREY}>(exact: $3,163.17)</Hand>
			<MistakeCard x={96} y={650} w={720} at={k.doubling} size={46} wrong={<>2 × $2,147.29 ≈ $4,300</>} caption="half the term ≠ double the repayment" />
			<Hand x={96} y={880} at={k.halving} size={38} color={GREY} w={700}>the shorter loan pays much less interest</Hand>
		</>
	);
};

// ---------- 13. handoff: a motorbike loan (f11's opening frame, drawn with f11's own BikeBoard) ----------
/** f10's final frame, and f11's opening frame: the motorbike, the swing tag and a dashed curve from $20,000 to "?". */
export const F10FinalFrame: React.FC = () => <BikeBoard chips={{n: -300, next: -300, q: -300}} />;
export const S13: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K13;
	const sw = prog(fr, k.calc - 6, 16);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}><AidCard x={260} y={170} /></div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<BikeBoard lines={[{text: 'Loan $20,000', at: k.loan}, {text: '7.2% p.a., monthly', size: 26, at: k.seven}, {text: '$400 a month', at: k.reps}, null]} graph={prog(fr, k.calc, 16)} chips={{n: k.how, next: k.how + 8, q: k.how + 20}} />
				<SceneHeading text="Finding a term exactly, by hand" at={k.calc} size={52} />
			</div> : null}
		</>
	);
};

// ---------- 14. key notes ----------
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>An extra repayment goes straight to the debt.</>, at: 2},
		{content: <>Only M above this month's interest pays the loan down.</>, at: 6},
		{content: <>If M ≤ Pr, the loan is never repaid.</>, at: 10},
		{content: <>Each extra $500 shortens the term by less (smooth estimate).</>, at: 14},
		{content: <>Here a 1-point rate rise added more time than a fall saved.</>, at: 18},
	];
	const back = prog(fr, Math.max(1350, dur('scene-14')) - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K14.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1040} items={items} size={44} gap={60} />
				<FramedCard x={1180} y={196} w={700} h={660} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1220, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GREY}}>Memory aid</div>
					<div style={{position: 'absolute', left: 1220, top: 280, width: 630, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, lineHeight: 1.1, color: INK}}>Only what's left after the interest pays the loan down.</div>
					<AidBar x={1240} y={600} k={0.22} M={2500} I={1666.67} size={36} />
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><F10FinalFrame /></div> : null}
		</>
	);
};
export {HL, M30, REPY};
