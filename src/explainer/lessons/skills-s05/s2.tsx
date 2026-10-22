// S05 scenes 5 to 7: the worked answer, one stage per row. Step 1 the heat (q = mcΔT, m from the two volumes, ΔT from a
// subtraction, units cancelling, q kept unrounded); step 2 the moles of water (the reactant that runs out, with the
// choice stated); step 3 divide, add the sign, round once, then the sense check against about −57 with heat loss.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AMBER, AnswerBox, GREY_INK, GreyTag, INK, Overlay, RoutineStrip, TEAL, answerGeom, ansSpans, measure, phraseAt, prog} from './kit';
import type {ARow, AnsSpec} from './kit';
import {BOX, CARD_S, CupSlot, RAIL_MINI, SX, SW, WORK, WorkCardSmall, given, sc} from './common';
import {KeptChip, PenBox, SenseGauge, StepLetter, StepRail, Strike, UnitChip} from './pieces';
import {Target} from './s1';
import {BASE, BASE_INK, LimitBars, PROTON, PROTON_INK} from '../chem-m6-c03/parts';

const ALL4 = [-100, -100, -100, -100];
type G = ReturnType<typeof answerGeom>;
/** Left end and baseline of row r. */
export const rowPt = (g: G, r: number): [number, number] => [g.tx, g.base(g.rows[r].first)];
/** Right end of the last line of row r. */
export const rowEnd = (g: G, r: number): [number, number] => {
	const info = g.rows[r];
	const last = info.lineText[info.lineText.length - 1];
	return [g.tx + measure(last, g.size, true, 700), g.base(info.first + info.n - 1)];
};
const cardPt = (phrase: string, occ = 1): [number, number] => {
	const p = phraseAt(WORK, phrase, occ, CARD_S);
	return [p.x1, p.bottom + 4];
};
/** Margin step letters left of the box. */
const Letters: React.FC<{g: G; spec: AnsSpec; items: {row: number; l: string; at: number}[]}> = ({g, spec, items}) => (
	<g>{items.map((it, i) => <StepLetter key={i} x={spec.x + 17} y={g.base(g.rows[it.row].first) - 10} l={it.l} at={it.at} />)}</g>
);

// ---------- the step-1 rows (reused, done, in step 2's fade) ----------
export const S1_TEXT = [
	'q = mcΔT',
	'm = (60.0 + 40.0) mL × 1.00 g mL^{−1} = 100 g',
	'ΔT = 25.8 − 20.6 = 5.2 °C',
	'q = 100 g × 4.18 J g^{−1} °C^{−1} × 5.2 °C',
	'= 2173.6 J = 2.1736 kJ',
];
export const S2_TEXT = [
	'n(HCl) = cV = 0.800 mol L^{−1} × 0.0600 L = 0.0480 mol',
	'n(NaOH) = cV = 1.00 mol L^{−1} × 0.0400 L = 0.0400 mol',
	'NaOH runs out first, so n(H_2O) = 0.0400 mol',
];
export const S3_TEXT = ['ΔH = −q ÷ n', '= −2.1736 kJ ÷ 0.0400 mol = −54.34 kJ mol^{−1}', 'ΔH = −54 kJ mol^{−1}'];
const done = (texts: string[], tickRows: number[] = []): ARow[] => texts.map((text, i) => ({text, at: -1000, tick: tickRows.includes(i) ? -1000 : undefined}));
export const KEPT_Q: [number, number] = [SX, 380], KEPT_N: [number, number] = [SX, 444];

// ---------- 5. Step 1, the heat ----------
const K5 = cues(sc('step-1'), {step: 'Step one', q: 'q equals', mass: 'The mass', hml: 'a hundred millilitres', grams: 'one hundred grams', dT: 'Delta T is', tf: 'twenty five point eight minus', five: 'five point two degrees', sub: 'Substitute,', four18: 'four point one eight', thats: "That's two", kj: 'kilojoules', keep: 'Keep every digit'});
export const SceneStep1: React.FC = () => {
	const box = BOX();
	const rows: ARow[] = [
		{text: S1_TEXT[0], at: K5.q, dur: 40},
		{text: S1_TEXT[1], at: K5.hml + 10, dur: K5.grams + 16 - K5.hml},
		{text: S1_TEXT[2], at: K5.dT + 4, dur: K5.five + 16 - K5.dT},
		{text: S1_TEXT[3], at: K5.sub + 16, dur: 140},
		{text: S1_TEXT[4], at: K5.thats + 4, dur: K5.kj + 10 - K5.thats, tick: K5.kj + 12},
	];
	const g = answerGeom(box, rows);
	const r1 = rowPt(g, 1), r3y = g.base(g.rows[3].first);
	const sp = (w: string, occ = 1) => ansSpans(g, 3, w, occ)[0];
	const strikes = [sp('g'), sp('g^{−1}'), sp('°C^{−1}'), sp('°C')];
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} o={0.55} />
			<WorkCardSmall ann={[...given(['v1', 'v2'], K5.hml), ...given(['d'], K5.grams), ...given(['t2', 't1'], K5.tf), ...given(['cp'], K5.four18)]}>
				<CupSlot spec={WORK} at={-100} read={{at: -100, rise: -100}} />
			</WorkCardSmall>
			<StepRail rows={ALL4} miniBox={RAIL_MINI} lit={[{row: 0, from: K5.step, to: K5.mass}, {row: 1, from: K5.sub, to: K5.thats}, {row: 2, from: K5.thats, to: 1e9}]} />
			<AnswerBox spec={box} rows={rows} at={-100} counter={{total: 4, label: true}} dimRows={[{rows: [0], at: K5.hml}, {rows: [1], at: K5.dT}, {rows: [2], at: K5.sub + 10}, {rows: [3], at: K5.kj + 20}]}>
				<Target g={g} at={-100} sign={-100} o={0.45} />
				<GreyTag x={rowEnd(g, 1)[0] + 20} y={r1[1] - 32} text="3 sig figs (from 1.00 g mL^{−1})" at={K5.grams + 24} out={K5.dT} size={20} />
				{strikes.map((s, i) => <Strike key={i} x1={s.x1} x2={s.x2} y={r3y - 8} at={K5.thats - 30 + i * 6} />)}
				<GreyTag x={rowEnd(g, 4)[0] + 24} y={g.base(g.rows[4].first) - 32} text="not rounded yet" at={K5.keep} size={22} />
			</AnswerBox>
			<Letters g={g} spec={box} items={[{row: 0, l: 'E', at: K5.q}, {row: 3, l: 'S', at: K5.sub + 16}, {row: 4, l: 'S', at: K5.thats + 4}]} />
			<UnitChip text="60.0 mL" from={cardPt('60.0 mL')} to={[r1[0] + 70, r1[1] - 60]} at={K5.hml - 20} out={K5.hml + 50} />
			<UnitChip text="40.0 mL" from={cardPt('40.0 mL')} to={[r1[0] + 210, r1[1] - 60]} at={K5.hml - 14} out={K5.hml + 50} />
			<UnitChip text="1.00 g mL^{−1}" from={cardPt('1.00 g mL^{−1}')} to={[r1[0] + 330, r1[1] - 60]} at={K5.grams - 30} out={K5.grams + 30} />
			<KeptChip text="q = 2.1736 kJ" from={[rowEnd(g, 4)[0] - 150, rowEnd(g, 4)[1] - 30]} to={KEPT_Q} at={K5.kj + 20} />
			{void SW}{void GREY_INK}
		</Overlay>
	);
};

// ---------- 6. Step 2, the moles of water ----------
const K6 = cues(sc('step-2'), {step: 'Step two', acid: 'Acid:', zero6: 'zero point zero six', times8: 'times zero point eight', base: 'Base:', zero4: 'zero point zero four zero zero litres', times1: 'times one point', runs: 'runs out first', sets: 'sets the water', write: 'Write that sentence', why: 'why'});
export const SceneStep2: React.FC = () => {
	const f = useCurrentFrame();
	const box = BOX();
	const rows: ARow[] = [
		{text: S2_TEXT[0], at: K6.acid + 6, dur: 250},
		{text: S2_TEXT[1], at: K6.base + 6, dur: 240},
		{text: S2_TEXT[2], at: K6.runs, dur: K6.sets + 90 - K6.runs, tick: K6.sets + 96},
	];
	const g = answerGeom(box, rows);
	const r2 = rowEnd(g, 2);
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} o={0.55} />
			<WorkCardSmall ann={[...given(['v1', 'v2', 'd', 't2', 't1', 'cp']), ...given(['v1'], K6.zero6), ...given(['c1'], K6.times8), ...given(['v2'], K6.zero4), ...given(['c2'], K6.times1)]}>
				<CupSlot spec={WORK} at={-100} read={{at: -100, rise: -100}} />
			</WorkCardSmall>
			<StepRail rows={ALL4} miniBox={RAIL_MINI} lit={[{row: 1, from: K6.step, to: K6.sets + 90}]} />
			<AnswerBox spec={box} rows={done(S1_TEXT, [4])} at={-100} o={1 - prog(f, 2, 16)} />
			<AnswerBox spec={box} rows={rows} at={-100} counter={{total: 4, label: true, extra: [-1000]}} dimRows={[{rows: [0], at: K6.base}, {rows: [1], at: K6.runs}]}
				ann={[{kind: 'under', row: 2, phrase: 'NaOH runs out first,', at: K6.why}]}>
				<Target g={g} at={-100} sign={-100} o={0.45} />
				<GreyTag x={r2[0] + 24} y={r2[1] - 32} text="choice stated" at={K6.why + 6} size={22} />
			</AnswerBox>
			<Letters g={g} spec={box} items={[{row: 0, l: 'S', at: K6.acid + 6}, {row: 1, l: 'S', at: K6.base + 6}, {row: 2, l: 'S', at: K6.runs}]} />
			<UnitChip text="60.0 mL → 0.0600 L" from={cardPt('60.0 mL')} to={[box.x + box.w - 250, rowPt(g, 0)[1] - 78]} at={K6.zero6 - 10} out={K6.base} color={TEAL} />
			<UnitChip text="40.0 mL → 0.0400 L" from={cardPt('40.0 mL')} to={[box.x + box.w - 250, rowPt(g, 1)[1] - 78]} at={K6.zero4 - 10} out={K6.runs} color={TEAL} />
			<KeptChip text="q = 2.1736 kJ" to={KEPT_Q} at={-100} />
			<LimitBars x={SX} y={560} k={4000} a={{label: 'H^{+} 0.0480 mol', n: 0.048, color: PROTON, ink: PROTON_INK}} b={{label: 'OH^{−} 0.0400 mol', n: 0.04, color: BASE, ink: BASE_INK}}
				at={K6.runs - 8} use={K6.runs + 24} useDur={46} size={24} stub={{text: 'H^{+} left over: the acid is in excess', at: K6.runs + 70}} />
			<KeptChip text="n(H_2O) = 0.0400 mol" from={[r2[0] - 200, r2[1] - 30]} to={KEPT_N} at={K6.sets + 100} />
			{void INK}{void AMBER}
		</Overlay>
	);
};

// ---------- 7. Step 3, the answer and the sense check ----------
const K7 = cues(sc('step-3'), {step: 'Step three', divide: 'divide,', two: 'Two point one seven', over: 'over zero', is: 'is fifty four', rose: 'rose', neg: 'negative', round: 'Round once', minus: 'minus fifty four', mole: 'per mole', sense: 'the sense check', usual: 'usual value', ours: 'Ours is', loss: 'heat loss'});
export const SceneStep3: React.FC = () => {
	const f = useCurrentFrame();
	const box = BOX();
	const rows: ARow[] = [
		{text: S3_TEXT[0], at: K7.divide, dur: 40},
		{text: S3_TEXT[1], at: K7.two, dur: K7.is + 50 - K7.two, tick: K7.neg + 10},
		{text: S3_TEXT[2], at: K7.minus, dur: 46, tick: K7.mole + 8, gapLines: 6},
	];
	const g = answerGeom(box, rows);
	const kq = ansSpans(g, 1, '−2.1736')[0], kn = ansSpans(g, 1, '0.0400')[0];
	const fin = ansSpans(g, 2, 'ΔH = −54 kJ mol^{−1}');
	const fx1 = fin[0].x1 - 14, fx2 = fin[fin.length - 1].x2 + 14, fy = fin[0].y - 40;
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} o={0.55} />
			<WorkCardSmall ann={given(['v1', 'v2', 'd', 't2', 't1', 'cp', 'c1', 'c2'])}>
				<CupSlot spec={WORK} at={-100} read={{at: -100, rise: -100, up: K7.rose}} heat={{at: K7.loss}} />
			</WorkCardSmall>
			<StepRail rows={ALL4} miniBox={RAIL_MINI} lit={[{row: 2, from: K7.step, to: K7.sense}, {row: 3, from: K7.sense, to: 1e9}]} />
			<AnswerBox spec={box} rows={done(S2_TEXT, [2])} at={-100} o={1 - prog(f, 2, 16)} />
			<AnswerBox spec={box} rows={rows} at={-100} counter={{total: 4, label: true, extra: [-1000, -1000]}} dimRows={[{rows: [0], at: K7.two + 30}, {rows: [1], at: K7.minus}]}
				ann={[{kind: 'ring', row: 0, phrase: '−q', at: K7.rose, color: TEAL}, {kind: 'ring', row: 1, phrase: '−54.34', at: K7.rose + 8, color: TEAL}]}>
				<Target g={g} at={-100} sign={-100} o={0.45} out={K7.minus - 6} />
				<PenBox x={fx1} y={fy} w={fx2 - fx1} h={56} at={K7.mole} color={INK} />
				<GreyTag x={fx2 + 20} y={fy + 10} text="rounded once, at the end" at={K7.round + 10} size={20} />
			</AnswerBox>
			<StepLetter x={box.x + 17} y={g.base(0) - 10} l="E" at={K7.divide} />
			<StepLetter x={box.x + 17} y={g.base(g.rows[1].first) - 10} l="S" at={K7.two} />
			<StepLetter x={box.x + 17} y={g.base(g.rows[2].first) - 10} l="S" at={K7.minus} />
			<KeptChip text="q = 2.1736 kJ" to={KEPT_Q} from={KEPT_Q} at={-100} out={K7.two + 30} />
			<KeptChip text="n(H_2O) = 0.0400 mol" to={KEPT_N} at={-100} out={K7.over + 30} />
			{/* the kept values ride into the row */}
			<UnitChip text="2.1736 kJ" from={KEPT_Q} to={[kq.x1, kq.y - 50]} at={K7.two - 14} out={K7.two + 34} color={TEAL} fill="#eef8f6" size={24} />
			<UnitChip text="0.0400 mol" from={KEPT_N} to={[kn.x1, kn.y - 50]} at={K7.over - 14} out={K7.over + 34} color={TEAL} fill="#eef8f6" size={24} />
			<SenseGauge x={SX + 10} y={560} w={360} at={K7.sense} value={-54.34} settle={K7.ours - 10} />
			<GreyTag x={SX} y={700} text="heat lost, so ΔT a little low" at={K7.loss + 10} size={22} maxW={SW} />
			{void K7.usual}
		</Overlay>
	);
};
