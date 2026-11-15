// Scenes 9 to 14: attempt 1 (the spinner spun 250 times) and its brief feedback (0.28; one spin, one number; crossed:
// adding the estimates), attempt 2 (two counters from a bag) and its brief feedback (1/6, 4/6, 1/6; crossed: 1/3
// each), the handoff (one fair die's equal bars beside a desk calendar and empty date axes: exported as
// S01FinalFrame, s02's opening frame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {GivensStrip, KeyNotesBullets, OutcomeSort, ProbabilityBars, QuestionCard, SceneHeading} from '../../math/studio';
import {K9, K10, K11, K12, K13, K14} from './cuemap';
import {dur, hold} from './common';
import {ASK, AnswerBox, BROWN, BoxCard, Chip, CounterBag, DATA, DateAxes, DeskCalendar, EST, EST_TEXT, FramedCard, GOOD, Hand, MODEL, POS, QStrip, RedDie, Row, Slip, Spinner, Table, YAxis} from './parts';

const pTicks = [0.05, 0.1, 0.15, 0.2, 0.25].map(v => ({value: v, label: String(v)}));
const SIXTH = 1 / 6;
const Q1 = 'A spinner with four sections, numbered 1 to 4, is spun 250 times. X is the number it lands on. The results are shown in the table. (a) Estimate P(X = 2). (b) Explain why the four estimated probabilities add to 1.';
const Q2 = 'A bag holds 2 red counters and 2 yellow counters. Two counters are drawn together at random. Let X be the number of red counters drawn. Find the probability distribution of X and show it in a table.';
const SECT = ['1', '2', '3', '4'].map(l => ({label: l}));

// ---------- 9. attempt 1 ----------
export const S09: React.FC = () => (
	<>
		<QuestionCard at={0} size={40} w={1700} y={170} hold={{...hold('scene-09'), ringFrom: K9.pause}} pauseAt={K9.pause}><div>{Q1}</div></QuestionCard>
		<Table x={96} y={480} size={44} colW={130} headW={190} at={6} rows={[{head: 'x', cells: ['1', '2', '3', '4']}, {head: 'count', cells: ['55', '70', '60', '65']}]} />
		<Spinner x={960} y={440} w={380} sectors={SECT} at={6} />
	</>
);

// ---------- 10. feedback 1 ----------
export const S10: React.FC = () => {
	const k = K10;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['A spinner with four sections, numbered 1 to 4, is ', {u: 'spun 250 times', at: k.fifty}, '. X is the number it lands on. The results are shown in the table (55, ', {u: '70', at: k.seventy}, ', 60, 65). ', {u: '(a) Estimate P(X = 2).', at: k.two}, ' ', {u: '(b) Explain why the four estimated probabilities add to 1.', at: k.reason}]} />
			<GivensStrip x={96} y={300} size={38} items={[{content: '250 spins', at: k.fifty}, {content: 'count of 2: 70', role: 'a', at: k.seventy}]} />
			<AnswerBox x={96} y={392} at={k.eight} size={52}>P(X = 2) ≈ 70/250 = 0.28</AnswerBox>
			<Hand x={96} y={512} at={k.each} size={40} color={ASK.ink}>each spin lands on exactly one number</Hand>
			<Row x={96} y={590} at={k.counts} out={k.one} size={48}>55 + 70 + 60 + 65 = 250</Row>
			<AnswerBox x={96} y={584} at={k.one} size={46}>55 + 70 + 60 + 65 = 250, so ΣP(x) ≈ 250 ÷ 250 = 1</AnswerBox>
			<Slip x={96} y={718} at={k.adding} strikeAt={k.it - 14} size={40} caption="shows it; doesn't explain why">0.22 + 0.28 + 0.24 + 0.26 = 1, so they add to 1</Slip>
			<Spinner x={1470} y={400} w={360} sectors={SECT.map((s, i) => (i === 1 ? {...s, role: 'k' as const} : s))} at={-30} />
		</>
	);
};

// ---------- 11. attempt 2 ----------
export const S11: React.FC = () => (
	<>
		<QuestionCard at={0} size={40} w={1700} y={170} heading="Last one" hold={{...hold('scene-11'), ringFrom: K11.pause}} pauseAt={K11.pause}><div>{Q2}</div></QuestionCard>
		<BoxCard x={96} y={470} w={560} at={6} size={40} title="given"><div style={{fontWeight: 800}}>2 red, 2 yellow</div><div style={{fontWeight: 800}}>two drawn together</div><div style={{fontWeight: 800}}>X = number of red drawn</div></BoxCard>
		<CounterBag x={820} y={420} d={120} at={6} />
	</>
);

// ---------- 12. feedback 2 ----------
const PAIRS = ['R1R2', 'R1Y1', 'R1Y2', 'R2Y1', 'R2Y2', 'Y1Y2'].map(p => ({label: p, value: (p.match(/R/g) ?? []).length}));
const PCOLS = [0, 1, 2].map((v, i) => ({value: v, x: 860 + i * 200}));
export const S12: React.FC = () => {
	const k = K12;
	const fr = useCurrentFrame();
	const melt = k.so;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['A bag holds ', {u: '2 red counters and 2 yellow counters', at: k.call}, '. Two counters are ', {u: 'drawn together at random', at: k.six}, '. Let X be ', {u: 'the number of red counters drawn', at: k.two}, '. Find the probability distribution of X and show it in a table.']} />
			<GivensStrip x={96} y={300} size={38} items={[{content: '2 red, 2 yellow', at: k.call}, {content: 'drawn together', at: k.six}]} />
			<Row x={96} y={384} at={k.two} size={52}>X = 0, 1 or 2</Row>
			<OutcomeSort x={96} y={480} items={PAIRS} gridCols={3} chipW={170} chipH={64} columns={PCOLS} baseY={880} sortAt={k.one} stagger={8} dur={28} toBars={{at: melt, barW: 130, role: 'b', countText: false}} at={k.six} size={38} />
			<Hand x={96} y={640} at={k.likely} out={k.one + 30} size={38} color={INK}>6 pairs, all equally likely</Hand>
			{fr >= melt + 16 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, melt + 16, 12)}}>
				{PCOLS.map(c => {const n = PAIRS.filter(p => p.value === c.value).length; return <div key={c.value} style={{position: 'absolute', left: c.x - 60, width: 120, top: 880 - n * 70 - 62, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: MODEL.ink}}>{n}/6</div>;})}
			</div> : null}
			<Table x={96} y={490} at={melt} size={44} colW={130} headW={150} rows={[{head: 'x', cells: ['0', '1', '2']}, {head: 'P(x)', cells: ['1/6', '4/6', '1/6'], color: MODEL.ink}]} />
			<AnswerBox x={96} y={660} at={k.add} size={46}>sum: 1/6 + 4/6 + 1/6 = 1</AnswerBox>
			<Slip x={96} y={784} at={k.third} strikeAt={k.likely2 - 10} size={40} caption="three values, not equally likely">1/3, 1/3, 1/3</Slip>
			<CounterBag x={1480} y={380} d={100} labels at={k.call} />
		</>
	);
};

// ---------- 13. handoff ----------
/** The handoff board (s02's opening frame): one fair die's equal model bars, the desk calendar, empty date axes. */
const Handoff: React.FC<{chip: number; die: number; cal: number; write: number; q: number}> = ({chip, die, cal, write, q}) => {
	const f = useCurrentFrame();
	return <>
		<Chip x={96} y={88} at={chip} size={40} color={BROWN}>Next: when are all values equally likely?</Chip>
		<RedDie x={130} y={190} w={200} at={die} />
		<Hand x={370} y={250} at={die} size={44} color={MODEL.ink}>one fair die</Hand>
		<YAxis x={110} y={420} w={790} h={520} n={6} max={0.25} ticks={pTicks} at={die} />
		<ProbabilityBars x={110} y={420} width={790} height={520} labels={['1', '2', '3', '4', '5', '6']} values={[SIXTH, SIXTH, SIXTH, SIXTH, SIXTH, SIXTH]} max={0.25} role="b" xLabel="face" yLabel="P(x)" valueText={() => '1/6'} at={die} />
		<DeskCalendar x={1210} y={160} w={290} date="15" at={cal} />
		<Hand x={1530} y={250} at={cal} size={38} color={INK} w={330}>a page torn at random</Hand>
		<DateAxes x={960} y={470} w={900} h={450} writeAt={write} at={cal} q={prog(f, q, 12)} />
	</>;
};
/** s01's final frame, and s02's opening frame. */
export const S01FinalFrame: React.FC = () => <Handoff chip={-300} die={-300} cal={-300} write={-300} q={-300} />;
export const S13: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K13;
	const sw = prog(fr, k.next - 4, 18);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Two ways to a distribution" at={4} size={52} />
				<Hand x={1300} y={100} at={4} size={40} color={POS}>one trial, one value</Hand>
				<YAxis x={110} y={240} w={790} h={600} n={6} max={0.25} ticks={pTicks} />
				<ProbabilityBars x={110} y={240} width={790} height={600} labels={['1', '2', '3', '4', '5', '6']} values={EST} max={0.25} role="a" xLabel="face" yLabel="P(x)" valueText={(_, i) => EST_TEXT[i]} valueSize={30} />
				<Hand x={180} y={860} at={k.so} size={42} color={DATA.ink}>data: relative frequencies (≈)</Hand>
				<YAxis x={1070} y={240} w={790} h={600} n={6} max={0.25} ticks={pTicks} at={k.model} />
				<ProbabilityBars x={1070} y={240} width={790} height={600} labels={['1', '2', '3', '4', '5', '6']} values={[SIXTH, SIXTH, SIXTH, SIXTH, SIXTH, SIXTH]} max={0.25} role="b" xLabel="face" yLabel="P(x)" valueText={() => '1/6'} at={k.model} grow={{at: k.model, stagger: 4}} />
				<Hand x={1140} y={860} at={k.model + 10} size={42} color={MODEL.ink}>model: reasoning (=)</Hand>
				<Hand x={1400} y={176} at={k.here} size={36} color={MODEL.ink}>here: equally likely faces</Hand>
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}><Handoff chip={k.next} die={k.next} cal={k.now} write={k.thirty} q={k.are} /></div> : null}
		</>
	);
};

// ---------- 14. key notes ----------
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>X: a number decided by a chance outcome. P(X = x) or P(x).</>, at: 2},
		{content: <>From data: P(x) ≈ count ÷ number of trials.</>, at: 6},
		{content: <>The estimates add to 1: each trial gives one value.</>, at: 10},
		{content: <>Distribution: the values of X with their probabilities.</>, at: 14},
		{content: <>Check: 0 ≤ P(x) ≤ 1 and ΣP(x) = 1. Bars stand apart.</>, at: 18},
	];
	const end = Math.max(1350, dur('scene-14'));
	const back = prog(fr, end - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K14.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1080} items={items} size={40} gap={56} />
				<FramedCard x={1220} y={196} w={660} h={700} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1260, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: POS}}>Memory aid</div>
					<div style={{position: 'absolute', left: 1260, top: 276, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 70, lineHeight: 1.1, color: INK}}>One trial, one value.</div>
					<div style={{position: 'absolute', left: 1260, top: 460, width: 580, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, lineHeight: 1.3, color: GOOD.ink}}>So the counts add to n, and ΣP(x) = 1.</div>
					<RedDie x={1560} y={620} w={230} />
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><S01FinalFrame /></div> : null}
		</>
	);
};
