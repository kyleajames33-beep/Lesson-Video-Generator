// S07 scenes 5 to 7: the worked question, one part per scene. (a) reliability: the trials agree within about 1.5% and
// the gap between the alcohols dwarfs the spread (spread brackets over the table). (b) accuracy against a repeats
// claim: heat escapes in every trial (arrows on the set), so more trials only give a better mean of the same low
// values; the claim is crossed; the shield cross-fades in. (c) validity: the can was raised for propan-1-ol only; the
// variables strip turns the distance terracotta; the percentage bars; the fix (same 2 cm, trimmed wick) turns it green.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AMBER_INK, AnswerBox, Overlay, Chip, CrossedHabit, DrawPath, GREY, GREY_INK, GreyTag, INK, RoutineStrip, TEAL, answerGeom, phraseAt, prog, smooth, vis} from './kit';
import type {Ann, ARow} from './kit';
import {BOX, CARD_S, RAIL_MINI, SX, SW, SetSlot, WORK, WorkSmall, sc} from './common';
import {FixRail, MarginMark, PercentBars, SpreadBr, TERRA, VarStrip} from './pieces';

const ALL4 = [-100, -100, -100, -100];
const Rail: React.FC<{lit: {row: number; from: number; to?: number}[]}> = ({lit}) => (
	<FixRail box={{x: RAIL_MINI.x, y: RAIL_MINI.y, w: 1000}} s={RAIL_MINI.w / 1000} rowH={120} rows={[-100, -100, -100]} lit={lit} initials={-100} />
);
const Marks: React.FC<{rows: ARow[]; marks: {row: number; l: 'W' | 'F' | 'fix'; at: number}[]}> = ({rows, marks}) => {
	const b = BOX();
	const g = answerGeom(b, rows);
	return <g>{marks.map((m, i) => <MarginMark key={i} x={b.x + 46} y={g.base(g.rows[m.row].first) - 10} l={m.l} at={m.at} />)}</g>;
};
const LABEL = 'HSCScience marking guide (illustrative)';
void LABEL;

// ---------- 5. Part (a): reliability ----------
const K5 = cues(sc('part-a'), {parta: 'Part a:', repeats: 'about repeats', one: 'one percent', half: 'one and a half', reliable: 'are reliable', table: 'use the table', hundred: 'a hundred', spread: 'the spread', judge: 'A judgement'});
export const ScenePartA: React.FC = () => {
	const f = useCurrentFrame();
	const e = phraseAt(WORK, '−592 −585 −598', 1, CARD_S, 1), p = phraseAt(WORK, '−693 −705 −687', 1, CARD_S, 1);
	const m1 = phraseAt(WORK, '−592', 2, CARD_S, 1), m2 = phraseAt(WORK, '−695', 1, CARD_S, 1);
	const gx = Math.max(m1.x2, m2.x2) + 10;
	const ann: Ann[] = [
		{kind: 'verb', phrase: 'Assess', item: 2, at: 6}, {kind: 'given', phrase: 'reliability', item: 2, at: K5.parta + 10},
		{kind: 'given', phrase: '−592 −585 −598', item: 1, at: K5.repeats}, {kind: 'given', phrase: '−693 −705 −687', item: 1, at: K5.repeats + 10},
		{kind: 'given', phrase: '−592', occ: 2, item: 1, at: K5.hundred}, {kind: 'given', phrase: '−695', item: 1, at: K5.hundred + 6},
	];
	const rows: ARow[] = [
		{text: "Reliable: each alcohol's trials agree within about 1.5% of the mean", at: K5.reliable, dur: 50, tick: K5.reliable + 50},
		{text: 'the gap between alcohols (about 100 kJ mol^{−1}) is much bigger than the spread (13, 18)', at: K5.hundred + 30, dur: 70, tick: K5.judge},
	];
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} o={0.4} />
			<WorkSmall ann={ann} dims={[{items: [3, 4], at: 0, to: 0.4}]} />
			<SpreadBr x1={e.x1} x2={e.endX} y={e.top - 2} at={K5.one} label="" color={TEAL} />
			<SpreadBr x1={p.x1} x2={p.endX} y={p.bottom + 14} at={K5.half} label="" color={TEAL} />
			<Chip x={SX} y={540} text="spread: 13 (ethanol), 18 (propan-1-ol)" at={K5.one + 6} size={24} color={TEAL} fill="#e3f3f0" maxW={SW} />
			{f >= K5.hundred ? <DrawPath d={`M${gx},${m1.top} L${gx + 10},${m1.top} L${gx + 10},${m2.bottom} L${gx},${m2.bottom}`} at={K5.hundred} dur={12} color={AMBER_INK} width={3.5} /> : null}
			<Rail lit={[{row: 0, from: 4, to: 1e9}]} />
			<Chip x={SX} y={310} text="W: reliability = do repeats agree?" at={K5.parta + 20} size={26} color={AMBER_INK} fill="#fff8e6" maxW={SW} />
			<Chip x={SX} y={410} text="assess: a judgement, with evidence (s04)" at={10} size={22} color={GREY} textColor={GREY_INK} maxW={SW} />
			<GreyTag x={SX} y={720} text="largest difference from the mean: about 1.1% (ethanol), 1.4% (propan-1-ol)" at={K5.half + 10} size={20} maxW={SW} />
			<Chip x={SX} y={820} text="gap about 100 kJ mol^{−1}" at={K5.hundred + 10} size={28} color={AMBER_INK} fill="#fff8e6" maxW={SW} />
			<AnswerBox spec={BOX()} rows={rows} at={4} counter={{total: 7, label: true}} />
			<Marks rows={rows} marks={[{row: 0, l: 'F', at: K5.reliable}, {row: 1, l: 'F', at: K5.hundred + 30}]} />
			{void K5.table}{void smooth}{void INK}
		</Overlay>
	);
};

// ---------- 6. Part (b): accuracy and the repeats claim ----------
const K6 = cues(sc('part-b'), {ten: 'ten trials', closer: 'closer to the', accuracy: 'about accuracy', half: 'well under half', every: 'every trial', more: 'More trials just', wrong: 'claim is wrong', repeats: 'repeats improve', help: 'What would', shield: 'draught shield'});
export const ScenePartB: React.FC = () => {
	const f = useCurrentFrame();
	const ann: Ann[] = [
		{kind: 'verb', phrase: 'Evaluate', item: 3, at: 6}, {kind: 'given', phrase: 'ten trials', item: 3, at: K6.ten}, {kind: 'given', phrase: 'closer to the data values', item: 3, at: K6.closer},
		{kind: 'given', phrase: '−592', occ: 2, item: 1, at: K6.half}, {kind: 'given', phrase: '−1367', item: 1, at: K6.half + 6}, {kind: 'given', phrase: '−695', item: 1, at: K6.half + 12}, {kind: 'given', phrase: '−2021', item: 1, at: K6.half + 18},
	];
	const rows: ARow[] = [
		{text: 'Incorrect: heat is lost in every trial, so every value is less negative than the data value; ten trials give a better mean of the same low values', at: K6.more, dur: 110, tick: K6.wrong + 10},
		{text: 'Repeats improve reliability, not accuracy.', at: K6.repeats, dur: 40, tick: K6.repeats + 50},
		{text: 'To improve accuracy: draught shield and lid, which cut the heat that escapes', at: K6.shield + 20, dur: 60, color: GREY_INK},
	];
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} o={0.4} />
			<WorkSmall ann={ann} dims={[{items: [2, 4], at: 0, to: 0.4}]} set={<SetSlot spec={WORK} at={-100} dist={1} distAt={-100} heat={{at: K6.every, out: K6.shield + 10}} shield={K6.shield} bounce={K6.shield + 24} />} />
			<Rail lit={[{row: 0, from: 4, to: K6.shield}, {row: 2, from: K6.shield, to: 1e9}]} />
			<Chip x={SX} y={310} text="W: closer to the data value = accuracy" at={K6.accuracy} size={26} color={AMBER_INK} fill="#fff8e6" maxW={SW} />
			<g opacity={vis(f, K6.half, K6.every, 10)}>
				<Chip x={SX} y={420} text="−592 vs −1367" at={K6.half} size={26} color={INK} />
				<Chip x={SX} y={480} text="−695 vs −2021" at={K6.half + 10} size={26} color={INK} />
				<Chip x={SX} y={550} text="under half: no shield, no lid (the combustion practical)" at={K6.half + 20} size={22} color={GREY} textColor={GREY_INK} maxW={SW} />
			</g>
			<Chip x={SX} y={420} text="heat lost → q ↓ → ΔH less negative" at={K6.every + 20} out={K6.shield} size={24} color={INK} maxW={SW} />
			<GreyTag x={SX} y={490} text="same push in every trial: systematic" at={K6.every + 34} out={K6.shield} size={20} maxW={SW} />
			<CrossedHabit x={SX} y={600} text="ten trials → closer to the data values" at={K6.repeats - 10} cross={K6.repeats + 30} caption="repeats: reliability, not accuracy" size={26} maxW={SW} />
			<AnswerBox spec={BOX()} rows={rows} at={4} counter={{total: 7, label: true, extra: [-1000, -1000]}} dimRows={[{rows: [0], at: K6.repeats, to: 0.45}]} />
			<Marks rows={rows} marks={[{row: 0, l: 'F', at: K6.more}, {row: 2, l: 'fix', at: K6.shield + 20}]} />
			{void K6.help}{void prog}
		</Overlay>
	);
};

// ---------- 7. Part (c): validity and the fix ----------
const K7 = cues(sc('part-c'), {validity: 'validity.', alcohol: 'only the alcohol', raised: 'she raised', ft: 'forty three', tf: 'thirty four', distance: 'from the distance', fix: 'The fix:', twocm: 'two centimetres above', trim: 'trim the'});
export const ScenePartC: React.FC = () => {
	const f = useCurrentFrame();
	const ann: Ann[] = [
		{kind: 'verb', phrase: 'Explain', item: 4, at: 6}, {kind: 'given', phrase: 'validity', item: 4, at: K7.validity}, {kind: 'given', phrase: 'comparison,', item: 4, at: K7.validity + 10},
		{kind: 'given', phrase: '2 cm', item: 0, at: K7.raised + 10}, {kind: 'given', phrase: 'raised it to 6 cm', item: 0, at: K7.raised + 24},
		{kind: 'given', phrase: '−592', occ: 2, item: 1, at: K7.ft}, {kind: 'given', phrase: '−1367', item: 1, at: K7.ft + 6}, {kind: 'given', phrase: '−695', item: 1, at: K7.tf}, {kind: 'given', phrase: '−2021', item: 1, at: K7.tf + 6},
	];
	const rows: ARow[] = [
		{text: 'The can was raised to 6 cm for propan-1-ol only, so it lost more heat (34% against 43% caught): the difference is not caused by the alcohol alone', at: K7.tf + 24, dur: 110, tick: K7.distance + 10},
		{text: 'Fix: keep the can 2 cm above the wick for both alcohols; trim the propan-1-ol wick so its flame does not touch the can', at: K7.twocm, dur: 120, tick: K7.trim + 40},
	];
	const dist = 1 - smooth(prog(f, K7.twocm + 10, 24));
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} o={0.4} />
			<WorkSmall ann={ann} dims={[{items: [2, 3], at: 0, to: 0.4}]} set={<SetSlot spec={WORK} at={-100} dist={dist} distAt={-100} heat={{at: K7.raised + 20, out: K7.twocm}} />} />
			<Rail lit={[{row: 0, from: 4, to: K7.alcohol}, {row: 1, from: K7.alcohol, to: K7.fix}, {row: 2, from: K7.fix, to: 1e9}]} />
			<Chip x={SX} y={310} text="W: validity = measures only the alcohol's effect?" at={K7.validity + 6} size={24} color={AMBER_INK} fill="#fff8e6" maxW={SW} o={1 - 0.5 * prog(f, K7.alcohol, 10)} />
			<VarStrip x={SX} y={420} indep="the alcohol" controlled={['water', 'can', 'rise', 'distance']} hot={3} bad={K7.raised + 10} good={K7.twocm + 20} at={K7.alcohol} />
			<PercentBars x={SX} y={640} w={330} at={K7.ft} out={K7.twocm} rows={[{label: 'ethanol: 592 ÷ 1367', pct: 43, color: '#b07a12'}, {label: 'propan-1-ol: 695 ÷ 2021', pct: 34, color: TERRA}]} />
			<GreyTag x={SX} y={860} text="normal drift between these two alcohols at the same distance: about 2 points (the combustion practical)" at={K7.tf + 30} out={K7.twocm} size={18} maxW={SW} />
			<AnswerBox spec={BOX()} rows={rows} at={4} counter={{total: 7, label: true, extra: [-1000, -1000, -1000, -1000, K7.distance + 40]}} dimRows={[{rows: [0], at: K7.twocm, to: 0.45}]} />
			<Marks rows={rows} marks={[{row: 0, l: 'F', at: K7.tf + 24}, {row: 1, l: 'fix', at: K7.twocm}]} />
		</Overlay>
	);
};
