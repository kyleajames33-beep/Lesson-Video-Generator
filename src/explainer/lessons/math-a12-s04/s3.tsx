// Scenes 13 to 18: attempt 1 (tomato masses; P(M ≥ 225)) and its brief feedback (0.3; crossed 0.5), attempt 2
// (F(x) = (x² + 2x)/8; P(0.5 ≤ X < 1.5)) and its brief feedback (1/2; crossed −1/2), the handoff (F(x) = x²/9 with a
// gentle and a steep tangent: exported as S04FinalFrame, s05's opening frame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {CdfSubtraction, ClassHistogram, GivensStrip, KeyNotesBullets, QuestionCard, SceneHeading, makePlot} from '../../math/studio';
import {K13, K14, K15, K16, K17, K18} from './cuemap';
import {dur, hold} from './common';
import {AREA, AnswerBox, BROWN, BoxCard, CDF, Chip, DATA_R, Display, F9Plot, F9_WIN, FramedCard, G8, GOOD, GREY, Hand, INK, QStrip, Row, Slip, Table, amberRect} from './parts';

const MASS = [100, 150, 200, 250, 300] as const;
const Q1 = 'The masses of 400 tomatoes are grouped below. Estimate P(M ≥ 225), stating any assumption you make.';
const massTicks = MASS.map(v => ({value: v, label: String(v)}));

// ---------- 13. attempt 1 ----------
export const S13: React.FC = () => (
	<>
		<QuestionCard at={0} size={42} w={1700} y={170} hold={{...hold('scene-13'), ringFrom: K13.pause}} pauseAt={K13.pause}><div>{Q1}</div></QuestionCard>
		<Table x={96} y={380} size={34} headW={250} colW={250} at={6} rows={[
			{head: 'mass (g)', cells: ['100 ≤ m < 150', '150 ≤ m < 200', '200 ≤ m < 250', '250 ≤ m < 300']},
			{head: 'frequency', cells: ['60', '140', '160', '40']},
		]} />
		<BoxCard x={96} y={540} w={560} at={6} size={36} title="given"><div style={{fontWeight: 800}}>400 tomatoes, four classes</div><div style={{fontWeight: 800}}>find P(M ≥ 225)</div><div style={{fontWeight: 800}}>state any assumption</div></BoxCard>
		<ClassHistogram x={700} y={540} width={860} height={420} edges={MASS} counts={[0, 0, 0, 0]} yMax={180} xTicks={massTicks} yTicks={[]} xLabel="mass (g)" yLabel="frequency" at={6} />
	</>
);

// ---------- 14. feedback 1 ----------
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K14;
	const g = prog(fr, 0, 24);
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['The masses of 400 tomatoes are grouped below. Estimate P(M ≥ ', {u: '225', at: k.half}, '), stating any assumption you make. (', {u: '200 ≤ m < 250: 160', at: k.assume}, '; ', {u: '250 ≤ m < 300: 40', at: k.add}, ')']} />
			<GivensStrip x={96} y={290} size={36} items={[{content: '400 tomatoes', at: k.half}, {content: '200 to 250 g: 160', role: 'a', at: k.assume}, {content: '250 to 300 g: 40', role: 'a', at: k.add}]} />
			<ClassHistogram x={40} y={370} width={900} height={600} edges={MASS} counts={[60, 140, 160, 40]} grow={g} yMax={180} xTicks={massTicks} yTicks={[40, 80, 120, 160]} xLabel="mass (g)" yLabel="frequency" at={-30}>
				{m => <>
					{amberRect(m, 225, 250, 160 * g, prog(fr, k.half + 14, 14), false)}
					{amberRect(m, 250, 300, 40 * g, prog(fr, k.add, 14))}
					{(() => {const [px, ty] = m.p(225, 175), [, by] = m.p(225, 0); return <line x1={px} x2={px} y1={ty} y2={by} stroke={GREY} strokeWidth={5} strokeDasharray="12 9" opacity={prog(fr, k.half, 12)} />;})()}
					{(() => {const [px, py] = m.p(237.5, 80); return <text x={px} y={py + 14} textAnchor="middle" opacity={prog(fr, k.eighty, 10)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: AREA.ink}}>80</text>;})()}
				</>}
			</ClassHistogram>
			<Hand x={136} y={436} at={k.assume} size={34} color={GREY} w={170}>assume: spread evenly</Hand>
			<Row x={980} y={400} at={k.eighty} size={46}>½ × 160 = 80</Row>
			<Row x={980} y={476} at={k.thats} size={40}>P(M ≥ 225) ≈ (80 + 40) ÷ 400 = 120 ÷ 400</Row>
			<AnswerBox x={980} y={556} at={k.three} size={52}>≈ 0.3</AnswerBox>
			<Hand x={1220} y={572} at={k.three + 10} size={36} color={GREY}>(spread evenly in 200 to 250 g)</Hand>
			<Slip x={980} y={690} at={k.wrong} strikeAt={k.counts} size={42} caption="counts masses below 225">(160 + 40) ÷ 400 = 0.5</Slip>
		</>
	);
};

// ---------- 15. attempt 2 ----------
const Q2 = 'A continuous random variable X has cumulative distribution function F(x) = 0 for x < 0, F(x) = (x² + 2x)/8 for 0 ≤ x ≤ 2, F(x) = 1 for x > 2. Find P(0.5 ≤ X < 1.5).';
const W2 = {x: [-0.5, 2.5] as [number, number], y: [-0.1, 1.2] as [number, number]};
const t2 = [0.5, 1, 1.5, 2].map(v => ({value: v, label: String(v)}));
export const S15: React.FC = () => (
	<>
		<QuestionCard at={0} size={40} w={1700} y={170} heading="Last one" hold={{...hold('scene-15'), ringFrom: K15.pause}} pauseAt={K15.pause}><div>{Q2}</div></QuestionCard>
		<BoxCard x={96} y={430} w={600} at={6} size={36} title="given"><div style={{fontWeight: 800}}>F(x) = (x² + 2x)/8, 0 ≤ x ≤ 2</div><div style={{fontWeight: 800}}>0 below 0, 1 above 2</div><div style={{fontWeight: 800}}>find P(0.5 ≤ X &lt; 1.5)</div></BoxCard>
		<F9Plot x={720} y={420} w={860} h={560} draw={-1} win={W2} xTicks={t2} yTicks={[{value: 1, label: '1'}]} at={6} />
	</>
);

// ---------- 16. feedback 2 ----------
export const S16: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K16;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['X has CDF F(x) = 0 for x < 0, ', {u: 'F(x) = (x² + 2x)/8 for 0 ≤ x ≤ 2', at: k.f15}, ', F(x) = 1 for x > 2. Find ', {u: 'P(0.5 ≤ X < 1.5)', at: k.five}, '.']} />
			<GivensStrip x={96} y={250} size={36} items={[{content: 'F(x) = (x² + 2x)/8, 0 ≤ x ≤ 2', role: 'gradient', at: k.its}, {content: '0.5 ≤ X < 1.5', role: 'k', at: k.five}]} />
			<CdfSubtraction x={40} y={340} width={900} height={620} window={W2} F={G8} a={0.5} b={1.5} bracketAt={k.half} xTicks={t2} yTicks={[{value: 1, label: '1'}]} label={() => '1/2'} at={-30} />
			<Row x={980} y={360} at={k.its} size={40}>P(0.5 ≤ X &lt; 1.5) = F(1.5) − F(0.5)</Row>
			<Hand x={990} y={424} at={k.ends} size={38} color={GREY}>endpoints carry 0: the mixed signs don't matter</Hand>
			<Row x={980} y={494} at={k.f15} size={44}>F(1.5) = (2.25 + 3)/8 = 21/32</Row>
			<Row x={980} y={566} at={k.f05} size={44}>F(0.5) = (0.25 + 1)/8 = 5/32</Row>
			<AnswerBox x={980} y={650} at={k.half} size={46}>21/32 − 5/32 = 16/32 = 1/2</AnswerBox>
			<Slip x={980} y={780} at={k.wrong} strikeAt={k.subtracts} size={42} caption="probabilities are never negative">5/32 − 21/32 = −1/2</Slip>
		</>
	);
};

// ---------- 17. handoff ----------
const HP = {x: 96, y: 160, w: 1300, h: 820} as const;
const HM = makePlot(HP.x, HP.y, HP.w, HP.h, F9_WIN);
const Handoff: React.FC<{chip: number; t1: number; t2: number; q: number}> = ({chip, t1, t2, q}) => {
	const f = useCurrentFrame();
	const at = (v: number, y: number) => HM.pf(v, y);
	return <>
		<Chip x={96} y={88} at={chip} size={40} color={BROWN}>Next: how steeply F climbs</Chip>
		<F9Plot {...HP} tangents={[{x: 0.5, o: prog(f, t1, 14)}, {x: 2.5, o: prog(f, t2, 14)}]} />
		<Hand x={at(0.25, 0)[0]} y={at(0, 0.92)[1]} at={-300} size={44} color={CDF}>F(x) = P(X ≤ x)</Hand>
		<Hand x={at(0.2, 0)[0]} y={at(0, 0.3)[1]} at={t1} size={42} color={AREA.ink}>climbs slowly</Hand>
		<Hand x={at(1.45, 0)[0]} y={at(0, 0.82)[1]} at={t2} size={42} color={AREA.ink}>steeply</Hand>
		<BoxCard x={1450} y={480} w={410} at={-300} size={36} title="F(x)"><div style={{color: CDF, fontWeight: 800}}>0 for x &lt; 0</div><div style={{color: CDF, fontWeight: 800}}>x²/9 for 0 ≤ x ≤ 3</div><div style={{color: CDF, fontWeight: 800}}>1 for x &gt; 3</div></BoxCard>
		<Chip x={1600} y={300} at={q} size={80} color={BROWN}>?</Chip>
		<Hand x={1450} y={760} at={q} size={40} color={BROWN} w={410}>what does the steepness tell us?</Hand>
	</>;
};
/** s04's final frame, and s05's opening frame. */
export const S04FinalFrame: React.FC = () => <Handoff chip={-300} t1={-300} t2={-300} q={-300} />;
export const S17: React.FC = () => {
	const k = K17;
	return <Handoff chip={k.next} t1={k.slowly} t2={k.steeply} q={k.are} />;
};

// ---------- 18. key notes ----------
export const S18: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>Histogram estimate: relative frequency of the interval. State any even-spread assumption.</>, at: 2},
		{content: <>Continuous X: P(X = x) = 0, so ≤ and &lt; give the same answer.</>, at: 6},
		{content: <>Probability 0 is not impossible.</>, at: 10},
		{content: <>F(x) = P(X ≤ x). P(a &lt; X ≤ b) = F(b) − F(a); P(X &gt; a) = 1 − F(a).</>, at: 14},
		{content: <>F never decreases; F → 0 far left, F → 1 far right; no jumps.</>, at: 18},
	];
	const end = Math.max(1350, dur('scene-18'));
	const back = prog(fr, end - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K18.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1080} items={items} size={40} gap={44} />
				<FramedCard x={1220} y={196} w={660} h={720} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1260, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GOOD.ink}}>Memory aid</div>
					<div style={{position: 'absolute', left: 1260, top: 276, width: 590, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, lineHeight: 1.1, color: INK}}>Points carry nothing; intervals carry the probability.</div>
					<div style={{position: 'absolute', left: 1260, top: 500, width: 590, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, lineHeight: 1.3, color: CDF}}>Between a and b: F(bigger) − F(smaller)</div>
					<Display x={1350} y={640} w={400} text="0.3517…" size={60} />
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><S04FinalFrame /></div> : null}
		</>
	);
};
export {DATA_R};
