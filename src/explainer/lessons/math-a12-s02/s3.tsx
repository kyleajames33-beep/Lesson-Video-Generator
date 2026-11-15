// Scenes 9 to 14: attempt 1 (uniform on the even numbers 2 to 20; P(X > 15)) and its brief feedback (3/10; crossed
// 3/20), attempt 2 (an eight-sector spinner's remainder on division by 3) and its brief feedback (2/8, 3/8, 3/8;
// crossed: "uniform because the spinner is fair"), the handoff (the fair die's equal bars with a balance triangle:
// exported as S02FinalFrame, s03's opening frame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {FrameSvg, GivensStrip, KeyNotesBullets, OutcomeSort, ProbabilityBars, QuestionCard, SceneHeading} from '../../math/studio';
import {K9, K10, K11, K12, K13, K14} from './cuemap';
import {dur, hold} from './common';
import {ASK, AnswerBox, BROWN, BalanceTriangle, BoxCard, Chip, DeskCalendar, FramedCard, GOOD, Hand, MODEL, NumberLine, POS, QStrip, RedDie, Row, Slip, Spinner, YAxis, barGeom} from './parts';

const EVENS = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const Q1 = 'X is uniformly distributed on the even numbers 2, 4, 6, …, 20. Find P(X > 15).';
const Q2 = 'A fair spinner has eight equal sectors numbered 1 to 8. It is spun once. Let X be the remainder when the number shown is divided by 3. Is X uniformly distributed? Justify your answer.';
const EIGHT = [1, 2, 3, 4, 5, 6, 7, 8];

// ---------- 9. attempt 1 ----------
export const S09: React.FC = () => (
	<>
		<QuestionCard at={0} size={42} w={1700} y={170} hold={{...hold('scene-09'), ringFrom: K9.pause}} pauseAt={K9.pause}><div>{Q1}</div></QuestionCard>
		<BoxCard x={96} y={360} w={640} at={6} size={40} title="given"><div style={{fontWeight: 800}}>X uniform on 2, 4, 6, …, 20</div><div style={{fontWeight: 800}}>find P(X &gt; 15)</div></BoxCard>
		<NumberLine x={96} y={720} w={1440} from={0} to={22} labels={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]} at={6} />
		<QPicture />
	</>
);

/** Attempt 1's picture: hollow rings at the listed values and the event X > 15 bracketed (no count, no answer). */
const QPicture: React.FC = () => {
	const f = useCurrentFrame();
	const X = (v: number) => 96 + 30 + (v / 22) * (1440 - 60);
	return <FrameSvg style={{opacity: prog(f, 6, 14)}}>
		{EVENS.map(v => <circle key={v} cx={X(v)} cy={720} r={15} fill="#fffdf8" stroke={MODEL.stroke} strokeWidth={4} />)}
		<path d={`M${X(15)},${640} v-16 H${X(22)} v16`} fill="none" stroke={ASK.stroke} strokeWidth={5} />
		<text x={(X(15) + X(22)) / 2} y={600} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: ASK.ink}}>X &gt; 15</text>
		<text x={X(9)} y={600} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: MODEL.ink}}>values of X</text>
	</FrameSvg>;
};

// ---------- 10. feedback 1 ----------
export const S10: React.FC = () => {
	const k = K10;
	const fr = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['X is uniformly distributed on ', {u: 'the even numbers 2, 4, 6, …, 20', at: k.values}, '. Find ', {u: 'P(X > 15)', at: k.greater}, '.']} />
			<GivensStrip x={96} y={250} size={38} items={[{content: 'even numbers 2 to 20', at: k.values}, {content: 'X > 15', role: 'k', at: k.greater}]} />
			<Row x={96} y={340} at={k.tenth} size={52}>n = 10, so P(x) = 1/10</Row>
			<Hand x={96} y={420} at={k.sixteen} size={42} color={ASK.ink}>16, 18 and 20: 3 values</Hand>
			<AnswerBox x={96} y={470} at={k.tenths} size={52}>P(X &gt; 15) = 3/10</AnswerBox>
			<YAxis x={1040} y={240} w={820} h={480} n={10} max={0.15} ticks={[0.05, 0.1].map(v => ({value: v, label: String(v)}))} at={k.values} />
			<ProbabilityBars x={1040} y={240} width={820} height={480} labels={EVENS.map(String)} values={Array(10).fill(0.1)} max={0.15} xLabel="x" yLabel="P(x)" valueText={() => '1/10'} valueSize={26}
				roles={EVENS.map(v => (v > 15 && fr >= k.sixteen ? 'k' : 'b'))} at={k.values} grow={{at: k.values, stagger: 8}} />
			<Slip x={96} y={590} at={k.wrong} strikeAt={k.values2 - 10} size={44} caption="20 is the largest value; n = 10">P(X &gt; 15) = 3/20</Slip>
			<NumberLine x={96} y={840} w={1728} from={0} to={22} labels={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]} dots={EVENS} dotAt={v => (v <= 6 ? [k.values + 20, k.four, k.six][v / 2 - 1] : k.six + 6 + (v - 6) * 2)} counts={{at: k.tenth - 30, every: 3}} amber={{values: [16, 18, 20], at: k.sixteen}} />
		</>
	);
};

// ---------- 11. attempt 2 ----------
export const S11: React.FC = () => (
	<>
		<QuestionCard at={0} size={40} w={1700} y={170} heading="Last one" hold={{...hold('scene-11'), ringFrom: K11.pause}} pauseAt={K11.pause}><div>{Q2}</div></QuestionCard>
		<BoxCard x={96} y={470} w={600} at={6} size={40} title="given"><div style={{fontWeight: 800}}>8 equal sectors, 1 to 8</div><div style={{fontWeight: 800}}>spun once</div><div style={{fontWeight: 800}}>X = remainder on ÷ 3</div></BoxCard>
		<Spinner x={900} y={440} w={380} sectors={EIGHT.map(n => ({label: String(n), color: '#dceaf7'}))} at={6} labelSize={36} pointer={225} />
	</>
);

// ---------- 12. feedback 2 ----------
const ITEMS = EIGHT.map(n => ({label: String(n), value: n % 3}));
const COLS = [0, 1, 2].map((v, i) => ({value: v, x: 1100 + i * 220, label: `r = ${v}`}));
const REM = ['#ebe4d6', '#f8e8c8', '#d6eeee'];
export const S12: React.FC = () => {
	const k = K12;
	const fr = useCurrentFrame();
	const tint = fr >= k.count;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['A fair spinner has ', {u: 'eight equal sectors', at: k.count}, ' numbered 1 to 8. It is spun once. Let X be the remainder when the number shown is ', {u: 'divided by 3', at: k.two}, '. Is X uniformly distributed? Justify your answer.']} />
			<GivensStrip x={96} y={290} size={38} items={[{content: '8 equal sectors', at: k.count}, {content: 'remainder on dividing by 3', at: k.two}]} />
			<Row x={96} y={370} at={k.two} size={52}>X = 0, 1 or 2</Row>
			<Spinner x={96} y={470} w={360} sectors={EIGHT.map(n => ({label: String(n), color: tint ? REM[n % 3] : '#dceaf7'}))} labelSize={34} pointer={225} />
			<OutcomeSort x={520} y={470} items={ITEMS} gridCols={4} chipW={100} chipH={64} columns={COLS} baseY={880} sortAt={k.rem0} stagger={6} dur={26} toBars={{at: k.so, barW: 130, role: 'b', countText: false}} at={k.count} size={38} />
			{fr >= k.so + 16 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, k.so + 16, 12)}}>
				{COLS.map(c => {const n = ITEMS.filter(p => p.value === c.value).length; return <div key={c.value} style={{position: 'absolute', left: c.x - 60, width: 120, top: 880 - n * 70 - 62, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: MODEL.ink}}>{n}/8</div>;})}
			</div> : null}
			<AnswerBox x={560} y={366} at={k.isnt} size={40}>P(0) = 2/8, P(1) = 3/8, P(2) = 3/8: not uniform</AnswerBox>
			<Slip x={520} y={470} at={k.saying} strikeAt={k.variable - 10} size={38} caption="equal sectors, unequal counts">uniform, because the spinner is fair</Slip>
		</>
	);
};

// ---------- 13. handoff ----------
const HB = {x: 520, y: 200, width: 1100, height: 580} as const;
const HG = barGeom(HB.x, HB.y, HB.width, HB.height, 6, false);
const SIXTH = 1 / 6;
/** Triangle position along the face axis (1 to 6) in frame x. */
const faceX = (v: number) => HG.left + (v - 0.5) * HG.slot;
const REST = 2.5;
const Handoff: React.FC<{chip: number; head: number; tri: number; slideAt: number; q: number}> = ({chip, head, tri, slideAt, q}) => {
	const f = useCurrentFrame();
	const u = Math.max(0, Math.min(1, (f - slideAt) / 100));
	const pos = slideAt < -100 ? REST : u < 0.4 ? 1 + 5 * (u / 0.4) : u < 0.75 ? 6 - 4.2 * ((u - 0.4) / 0.35) : 1.8 + (REST - 1.8) * ((u - 0.75) / 0.25);
	return <>
		<Chip x={96} y={88} at={chip} size={40} color={BROWN}>Next: where does a distribution balance?</Chip>
		<SceneHeading text="Uniform: each value 1/n" at={head} out={chip} size={52} />
		<RedDie x={130} y={260} w={220} />
		<Hand x={130} y={520} at={-30} size={44} color={MODEL.ink}>one fair die</Hand>
		<YAxis x={HB.x} y={HB.y} w={HB.width} h={HB.height} n={6} max={0.25} ticks={[0.05, 0.1, 0.15, 0.2, 0.25].map(v => ({value: v, label: String(v)}))} xLabel={false} />
		<ProbabilityBars {...HB} labels={['1', '2', '3', '4', '5', '6']} values={Array(6).fill(SIXTH)} max={0.25} role="b" yLabel="P(x)" valueText={() => '1/6'} at={-30} />
		<BalanceTriangle cx={faceX(pos)} y={HG.base + 50} o={prog(f, tri, 12)} />
		<Chip x={faceX(REST) - 36} y={HG.base + 124} at={q} size={44} color={ASK.ink}>?</Chip>
		<Hand x={1660} y={600} at={tri} size={38} color={ASK.ink} w={240}>bars as weights on a beam</Hand>
	</>;
};
/** s02's final frame, and s03's opening frame. */
export const S02FinalFrame: React.FC = () => <Handoff chip={-300} head={-400} tri={-300} slideAt={-300} q={-300} />;
export const S13: React.FC = () => {
	const k = K13;
	return <>
		<Handoff chip={k.next} head={4} tri={k.if} slideAt={k.balance} q={k.balance + 100} />
		<Hand x={1660} y={300} at={k.so} out={k.next} size={38} color={POS} w={240}>same count behind every bar</Hand>
	</>;
};

// ---------- 14. key notes ----------
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>Uniform: finitely many values, all with the same probability.</>, at: 2},
		{content: <>n values: nc = 1, so P(x) = 1/n.</>, at: 6},
		{content: <>Test: the same count of equally likely outcomes behind every value.</>, at: 10},
		{content: <>Fair equipment can still give a non-uniform X (dates, dice sums).</>, at: 14},
		{content: <>If uniform: P(event) = values counted ÷ n. 5 to 20 has 16 values.</>, at: 18},
	];
	const end = Math.max(1350, dur('scene-14'));
	const back = prog(fr, end - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K14.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1080} items={items} size={40} gap={46} />
				<FramedCard x={1220} y={196} w={660} h={700} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1260, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: POS}}>Memory aid</div>
					<div style={{position: 'absolute', left: 1260, top: 276, width: 580, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, lineHeight: 1.1, color: INK}}>Same count behind every bar.</div>
					<div style={{position: 'absolute', left: 1260, top: 440, width: 580, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, lineHeight: 1.3, color: GOOD.ink}}>Count the equally likely outcomes behind each value.</div>
					<DeskCalendar x={1500} y={600} w={260} date="31" />
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><S02FinalFrame /></div> : null}
		</>
	);
};
