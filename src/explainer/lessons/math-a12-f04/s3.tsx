// Scenes 10 to 15: attempt 1 (a café's coffees: the total over 15 days) and its brief feedback (S₁₅ = 1830; crossed:
// 164, day 15 only), attempt 2 (a woodpile: the first day below 100 logs) and its brief feedback (day 22; crossed:
// day 21, exactly 100), the handoff (2, 4, 8, 16: unequal differences, "×2" steps; f05's opening frame, exported as
// F04FinalFrame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {GivensStrip, KeyNotesBullets, MistakeCard, PeriodTimeline, QuestionCard, SceneHeading} from '../../math/studio';
import {K10, K11, K12, K13, K14, K15} from './cuemap';
import {dur, hold} from './common';
import {AID_LINES, AidIcons} from './s2';
import {AMBER, AnswerBox, Arcs, BLUE, BROWN, BoxCard, CheckBars, Chip, FramedCard, Hand, Ladder, MiniBars, POS, QStrip, Row, TEAL, cafe} from './parts';

const Attempt: React.FC<{id: string; pauseAt: number; heading?: string; given: React.ReactNode[]; picture: React.ReactNode; children: React.ReactNode}> = ({id, pauseAt, heading, given, picture, children}) => (
	<>
		<BoxCard x={96} y={480} w={620} at={6} size={44} title="given">{given.map((g, i) => <div key={i} style={{fontWeight: 800, whiteSpace: 'pre'}}>{g}</div>)}</BoxCard>
		{picture}
		<QuestionCard at={0} size={44} w={1700} y={170} hold={{...hold(id), ringFrom: pauseAt}} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
	</>
);

// ---------- 10. attempt 1 ----------
const Q1 = 'A café sells 80 coffees on its first day, and 6 more coffees each day after that. How many coffees does it sell in total over its first 15 days?';
export const S10: React.FC = () => (
	<Attempt id="scene-10" pauseAt={K10.pause} given={['day 1: 80 coffees', '6 more each day', 'total: first 15 days']}
		picture={<MiniBars x={790} base={770} n={15} pitch={44} barW={32} unit={1.5} bars={[{d: 1, v: 80, label: true}]} labels={[1, 15]} column={{x: 1480, w: 84, h: 280, label: 'total?'}} />}>
		<div>{Q1}</div>
	</Attempt>
);

// ---------- 11. feedback 1 ----------
export const S11: React.FC = () => {
	const k = K11;
	const fr = useCurrentFrame();
	const bars = Array.from({length: 15}, (_, i) => ({d: i + 1, v: cafe(i + 1), at: i === 0 ? -30 : i === 14 ? k.t164 - 20 : k.day15 + i * 4, label: i === 0 || i === 14}));
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['A café sells ', {u: '80 coffees', at: k.here + 20}, ' on its first day, and ', {u: '6 more', at: k.d}, ' coffees each day after that. How many coffees does it sell ', {u: 'in total', at: k.total + 10}, ' over its ', {u: 'first 15 days', at: k.n}, '?']} />
			<GivensStrip x={96} y={296} size={36} maxW={900} items={[{content: 'a = 80', role: 'a', at: k.here}, {content: 'd = 6', role: 'k', at: k.d}, {content: 'n = 15', role: 'inner', at: k.n}]} />
			<BoxCard x={96} y={380} w={900} at={10} out={k.day15 - 6} size={42} title="plan">
				<div>"In total" asks for a partial sum: <span style={{color: TEAL, fontWeight: 800}}>S₁₅</span>.</div>
				<div>Find day 15's sales first, then add the 15 days.</div>
			</BoxCard>
			<Row x={96} y={384} at={k.day15} size={52} dim={prog(fr, k.so, 12)} small={44}><span style={{color: BLUE}}>a₁₅</span> = 80 + 14 × 6<span style={{opacity: prog(fr, k.t164, 10)}}> = 164</span></Row>
			<Row x={96} y={460} at={k.so} size={52}><span style={{color: TEAL}}>S₁₅</span> = (15/2)(80 + 164) = 7.5 × 244</Row>
			<AnswerBox x={96} y={548} at={k.t1830 + 40} size={54}>1830 coffees</AnswerBox>
			<MistakeCard x={96} y={690} w={880} at={k.wrong} size={46} wrong={<>164 coffees</>} caption="day 15 only, not the total" />
			<MiniBars x={1050} base={800} n={15} pitch={44} barW={32} unit={1.5} bars={bars} labels={[1, 15]} q={false}
				column={{x: 1740, w: 84, h: 400, label: 'total?', fill: {v: 1830, unit: 0.2, at: k.t1830 + 30, text: '1830'}}} />
		</>
	);
};

// ---------- 12. attempt 2 ----------
const Q2 = 'On the first day of winter, a woodpile holds 180 logs. Each day after that, it holds 4 fewer logs than the day before. On which day does it first hold fewer than 100 logs?';
export const S12: React.FC = () => (
	<Attempt id="scene-12" pauseAt={K12.pause} heading="Last one" given={['day 1: 180 logs', '4 fewer each day', 'first: fewer than 100']}
		picture={<MiniBars x={800} base={790} n={7} pitch={84} barW={56} unit={1.1} bars={[{d: 1, v: 180, label: true}]} labels={[1]} dots level={{v: 100, label: '100'}} />}>
		<div>{Q2}</div>
	</Attempt>
);

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const k = K13;
	const fr = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['On the first day of winter, a woodpile holds ', {u: '180 logs', at: k.so}, '. Each day after that, it holds ', {u: '4 fewer', at: k.minus}, ' logs than the day before. On which day does it ', {u: 'first', at: k.first}, ' hold ', {u: 'fewer than 100', at: k.set}, ' logs?']} />
			<GivensStrip x={96} y={296} size={36} maxW={900} items={[{content: 'day 1: 180', role: 'a', at: k.so}, {content: '−4 each day', role: 'k', at: k.minus}, {content: 'below 100', at: k.set}]} />
			<BoxCard x={96} y={380} w={900} at={10} out={k.so - 6} size={42} title="plan">
				<div>Day 1 has no drop yet, so day n comes</div>
				<div>after <span style={{color: AMBER, fontWeight: 800}}>n − 1</span> drops. Write day n's logs first.</div>
			</BoxCard>
			<Row x={96} y={384} at={k.so} size={50} dim={prog(fr, k.set, 12)} small={42}>day n:  180 − 4(n − 1)   <span style={{color: POS, fontSize: 34}}>day 1: no drop yet</span></Row>
			<Row x={96} y={456} at={k.set} size={52} dim={prog(fr, k.first, 12)} small={44}>180 − 4(n − 1) &lt; 100</Row>
			<Row x={96} y={528} at={k.then} size={52}>n − 1 &gt; 20<span style={{opacity: prog(fr, k.son, 10)}}>,   n &gt; 21</span></Row>
			<AnswerBox x={96} y={612} at={k.t22} size={54}>day 22 (96 logs)</AnswerBox>
			<MistakeCard x={96} y={740} w={880} at={k.wrong} size={46} wrong={<>day 21</>} caption="exactly 100 logs: not fewer" />
			<CheckBars x={1060} base={800} from={80} unit={11} pitch={210} barW={110} line={{v: 100, label: '100', at: -30}} bars={[
				{label: 'day 20', v: 104, text: '104', at: k.then},
				{label: 'day 21', v: 100, text: '100', at: k.son},
				{label: 'day 22', v: 96, text: '96', at: k.t22},
			]} at={-30} />
			<Hand x={1230} y={430} at={k.exactly} size={42} color={AMBER}>day 21 only reaches the line</Hand>
		</>
	);
};

// ---------- 14. handoff: 2, 4, 8, 16 (f05's opening frame) ----------
const D = {x: 255, y: 400, cardW: 240, h: 160, gap: 150};
/** The doubling board. `bare` leaves out the heading and the two chips (f05 keeps the ladder while they change). */
export const DoubleBoard: React.FC<{head: number; cards: readonly number[]; diffs: number; tag: number; arcs: readonly number[]; chip: number; q: number; bare?: boolean}> = ({head, cards, diffs, tag, arcs, chip, q, bare = false}) => {
	const fr = useCurrentFrame();
	const gx = (i: number) => D.x + i * (D.cardW + D.gap) + D.cardW + D.gap / 2;
	return (
		<>
			{bare ? null : <SceneHeading text="What if each step multiplies?" at={head} size={52} />}
			<Ladder x={D.x} y={D.y} cardW={D.cardW} h={D.h} gap={D.gap} size={104} values={['2', '4', '8', '16']} dropAt={cards} labels={i => `n = ${i + 1}`} labelsAt={cards[0]} labelSize={38} />
			<Arcs x={D.x} y={D.y} cardW={D.cardW} gap={D.gap} h={D.h} size={44} arcs={[0, 1, 2].map(i => ({from: i, to: i + 1, label: '×2', at: arcs[i]}))} />
			{['+2', '+4', '+8'].map((s, i) => <div key={s} style={{position: 'absolute', left: gx(i) - 80, width: 160, top: D.y + D.h + 16, textAlign: 'center', opacity: prog(fr, diffs + i * 8, 10), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 56, color: POS}}>{s}</div>)}
			<Hand x={700} y={D.y + D.h + 110} at={tag} size={52} color={POS}>differences: not the same step</Hand>
			{bare ? null : <Chip x={480} y={810} at={chip} size={50} color={BROWN}>Next: the same ratio every time</Chip>}
			{bare ? null : <Chip x={1420} y={784} at={q} size={84} color={BROWN}>?</Chip>}
		</>
	);
};
/** f04's final frame: f05's opening frame. */
export const F04FinalFrame: React.FC = () => <DoubleBoard head={-300} cards={[-300, -300, -300, -300]} diffs={-300} tag={-300} arcs={[-300, -300, -300]} chip={-300} q={-300} />;
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K14;
	const sw = prog(fr, k.but - 8, 16);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Arithmetic: the same change each period" at={4} size={52} />
				<PeriodTimeline x={300} y={860} tabW={190} gap={50} unit={1.7} periods={[1, 2, 3, 4].map(d => ({label: `day ${d}`, value: 50 + 30 * (d - 1), at: -30}))}
					arcs={[0, 1, 2].map(i => ({from: i, to: i + 1, label: '+30', at: k.same - 20 + i * 12}))} total={{value: 380, text: 'S₄ = 380', label: 'total', at: k.sn}} />
				<BoxCard x={300} y={190} w={860} at={k.same - 36} size={46} title="an arithmetic model">
					<div><span style={{color: AMBER, fontWeight: 800}}>same change</span> each period</div>
					{fr >= k.line - 30 ? <div style={{opacity: prog(fr, k.line - 30, 10)}}><span style={{color: BLUE, fontWeight: 800}}>terms aₙ</span>: on a straight line</div> : null}
					{fr >= k.sn ? <div style={{opacity: prog(fr, k.sn, 10)}}><span style={{color: TEAL, fontWeight: 800}}>Sₙ</span>: the running total</div> : null}
				</BoxCard>
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<DoubleBoard head={k.but} cards={[k.two, k.four, k.eight, k.sixteen]} diffs={k.sixteen + 16} tag={k.sixteen + 40} arcs={[k.before - 20, k.before - 4, k.before + 12]} chip={k.before + 30} q={k.before + 44} />
			</div> : null}
		</>
	);
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>Same amount each period: an arithmetic model.</>, at: 2},
		{content: <><span style={{color: BLUE}}>a</span> = first value, <span style={{color: AMBER}}>d</span> = change, n = period.</>, at: 6},
		{content: <>One period: <span style={{color: BLUE}}>aₙ</span>. Running total: <span style={{color: TEAL}}>Sₙ</span>.</>, at: 10},
		{content: <>First value in year 1: year n has n − 1 changes.<br />Start at t = 0: after n years, n changes.</>, at: 14},
		{content: <>Say where the model stops (the machine: at 0 parts).</>, at: 18},
	];
	const back = prog(fr, Math.max(1350, dur('scene-15')) - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K15.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={230} w={1076} items={items} size={42} gap={60} />
				<FramedCard x={1190} y={196} w={690} h={700} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1230, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: POS}}>Memory aid</div>
					<div style={{position: 'absolute', left: 1240, top: 276, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, lineHeight: 1.2, color: INK}}>{AID_LINES.slice(0, 2).map(t => <div key={t}>{t}</div>)}</div>
					<AidIcons x={1260} y={440} S={1.05} />
					<div style={{position: 'absolute', left: 1530, top: 492, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, lineHeight: 1.1, color: BLUE, whiteSpace: 'pre'}}>{'One period:\naₙ.'}</div>
					<div style={{position: 'absolute', left: 1530, top: 690, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, lineHeight: 1.1, color: TEAL, whiteSpace: 'pre'}}>{'Running\ntotal: Sₙ.'}</div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><F04FinalFrame /></div> : null}
		</>
	);
};
