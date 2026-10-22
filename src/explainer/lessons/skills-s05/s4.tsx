// S05 scenes 11 to 16: the Chemistry drill (pH of 0.200 g NaOH in 250.0 mL), its brief feedback (decimal places from
// significant figures; 12.3 crossed), the Biology drill (T allele frequency in 250 bearded dragons), its brief feedback
// (count alleles; counts are exact; C + T = 1; 50 ÷ 250 crossed), the decision board and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, CARD, CardSpec, Chip, CrossedHabit, DrawPath, DrillCountdown, GREY_INK, GreyTag, HandLine, INK, INK_SOFT, KeyNotes, Overlay, Plate, QuestionCard,
	RoutineStrip, T, TEAL, ZONE, ansSpans, answerGeom, cardGeom, lerp, measure, phraseAt, plateW, prog, smooth, vis,
} from './kit';
import type {ARow, AnsSpec} from './kit';
import {DRAGON, FLASK5, hold, sc} from './common';
import {ClipPlate, StepLetter, StepRail, UnitChip} from './pieces';

const SXD = ZONE.side.x, SWD = ZONE.side.w;
const ALL4 = [-100, -100, -100, -100];
const boxUnder = (spec: CardSpec, lines: number, s = 1): AnsSpec => ({x: ZONE.box.x, y: spec.y + cardGeom(spec).h * s + 26, w: ZONE.box.w, lines, lh: 46, size: 28});
const Letters: React.FC<{g: ReturnType<typeof answerGeom>; spec: AnsSpec; items: {row: number; l: string; at: number}[]}> = ({g, spec, items}) => (
	<g>{items.map((it, i) => <StepLetter key={i} x={spec.x - 18} y={g.base(g.rows[it.row].first) - 10} l={it.l} at={it.at} />)}</g>
);

// ---------- 11/12. Drill 1 (Chemistry, pH) ----------
const phSpec = (t: number[] = [-100, -100], marksAt?: number): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Chemistry', slotW: 220,
	items: [
		{text: '0.200 g of sodium hydroxide is dissolved in water and the solution is made up to 250.0 mL in a volumetric flask at 25 °C.', at: t[0]},
		{text: 'Calculate the pH of this solution.', marks: '3 marks', at: t[1], marksAt},
	],
});
const PH_CARD = phSpec();
const FlaskSlot: React.FC<{spec: CardSpec; at: number}> = ({spec, at}) => {
	const f = useCurrentFrame();
	const g = cardGeom(spec);
	const h = Math.min(170, g.slot.h - 10), w = plateW(FLASK5, h);
	const x = g.slot.x + g.slot.w - w - 20, y = g.slot.y + 4;
	return (
		<g opacity={prog(f, at, 14)}>
			<Plate p={FLASK5} x={x} y={y} h={h} />
			<rect x={x - 96} y={y + h * 0.3} width={90} height={30} rx={8} fill={CARD} stroke={INK_SOFT} strokeWidth={2} />
			<T x={x - 51} y={y + h * 0.3 + 22} text="250.0 mL" size={18} weight={700} color={INK} anchor="middle" />
		</g>
	);
};
const D1 = 'drill-1';
const K11 = cues(sc(D1), {turn: 'Your turn', chem: 'Chemistry first', zero: 'Zero point two', made: 'made up', calc: 'Calculate', three: 'Three marks', pause: 'Pause here'});
export const SceneDrill1: React.FC = () => {
	const h = hold(D1);
	const spec = phSpec([K11.zero, K11.calc], K11.three);
	const box = boxUnder(PH_CARD, 7);
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} dim={[h.startFrame - 20, 1e9]} o={0.6} />
			<QuestionCard spec={spec} at={K11.chem - 6}><FlaskSlot spec={spec} at={K11.made} /></QuestionCard>
			<AnswerBox spec={box} at={K11.calc} counter={{total: 3, label: true}} />
			<StepRail rows={[K11.calc, K11.calc + 4, K11.calc + 8, K11.calc + 12]} miniBox={{x: SXD, y: box.y + 40, w: SWD}} />
			<DrillCountdown hold={h} at={K11.pause} x={SXD} y={box.y + 300} cx={SXD + 245} cy={box.y + 440} />
			{void K11.turn}
		</Overlay>
	);
};
const F1 = 'feedback-1';
const K12 = cues(sc(F1), {moles: 'Moles:', divide: 'Divide by', litres: 'litres:', poh: 'pOH is', so: 'so pH', twelve: 'twelve point three zero', three: 'Three significant', dp: 'three decimal places', base: "It's a base", seven: 'above seven', habit: 'The habit', t3: ['twelve point three', 2]});
const PH_ROWS = [
	'n(NaOH) = m ÷ M = 0.200 g ÷ 40.00 g mol^{−1} = 5.00 × 10^{−3} mol',
	'[OH^{−}] = n ÷ V = 5.00 × 10^{−3} mol ÷ 0.2500 L = 0.0200 mol L^{−1}',
	'pOH = −log(0.0200) = 1.699; pH = 14.00 − 1.699 = 12.301',
];
/** Lens frame round a word in an answer row, with chosen digits underlined amber. */
const DigitLens: React.FC<{x: number; y: number; word: string; from: number; to: number; size: number; at: number}> = ({x, y, word, from, to, size, at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 10);
	if (o <= 0.01) return null;
	const W = measure(word, size, true, 700);
	const a = x + measure(word.slice(0, from), size, true, 700), b = x + measure(word.slice(0, to), size, true, 700);
	return (
		<g opacity={o}>
			<rect x={x - 10} y={y - size * 0.95} width={W + 20} height={size * 1.35} rx={12} fill="none" stroke={INK} strokeWidth={3.5} />
			<path d={`M${x + W + 6},${y + size * 0.36} L${x + W + 24},${y + size * 0.8}`} stroke={INK} strokeWidth={6} strokeLinecap="round" />
			<DrawPath d={`M${a},${y + 7} L${b},${y + 7}`} at={at + 6} dur={10} color={AMBER} width={6} />
		</g>
	);
};
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const box = boxUnder(PH_CARD, 7);
	const rows: ARow[] = [
		{text: PH_ROWS[0], at: K12.moles + 4, dur: K12.divide - 16 - K12.moles, tick: K12.divide - 6},
		{text: PH_ROWS[1], at: K12.divide, dur: K12.poh - 16 - K12.divide, tick: K12.poh - 6, gapLines: 1},
		{text: PH_ROWS[2], at: K12.poh, dur: K12.twelve + 50 - K12.poh, tick: K12.three - 4, gapLines: 1},
	];
	const g = answerGeom(box, rows);
	const w1 = ansSpans(g, 1, '0.0200')[0], w2 = ansSpans(g, 2, '12.301')[0], w14 = ansSpans(g, 2, '14.00')[0];
	const v = phraseAt(PH_CARD, '250.0 mL');
	const X = (p: number) => SXD + 20 + (p / 14) * 440;
	const TY = box.y + 70;
	return (
		<Overlay>
			<QuestionCard spec={PH_CARD} at={-100} ann={[{kind: 'verb', phrase: 'Calculate', at: 4}, {kind: 'marks', at: 10}, {kind: 'given', phrase: '0.200 g', at: K12.moles + 4}, {kind: 'given', phrase: '250.0 mL', at: K12.litres}, {kind: 'given', phrase: '25 °C.', at: K12.so}]}>
				<FlaskSlot spec={PH_CARD} at={-100} />
			</QuestionCard>
			<AnswerBox spec={box} at={-100} counter={{total: 3, label: true}} rows={rows} dimRows={[{rows: [0], at: K12.divide + 20}, {rows: [1], at: K12.poh + 20, out: K12.dp - 10}]}>
				<GreyTag x={w14.x1 - 10} y={w14.y + 16} text="14.00 at 25 °C: treated as exact here (C07)" at={K12.so + 10} size={20} />
				<DigitLens x={w1.x1} y={w1.y} word="0.0200" from={3} to={6} size={g.size} at={K12.dp} />
				<DigitLens x={w2.x1} y={w2.y} word="12.301" from={3} to={6} size={g.size} at={K12.dp + 8} />
				<g opacity={vis(f, K12.dp + 14)}>
					<DrawPath d={`M${w1.x2 + 30},${w1.y - 10} Q${Math.max(w1.x2, w2.x2) + 90},${(w1.y + w2.y) / 2 - 10} ${w2.x2 + 30},${w2.y - 10}`} at={K12.dp + 14} dur={14} color={AMBER} width={4} />
				</g>
				<GreyTag x={g.tx} y={g.ruleY(5) + 12} text="pH: decimal places = sig figs in [OH^{−}] or [H_3O^{+}] (C07)" at={K12.dp + 20} size={22} />
			</AnswerBox>
			<Letters g={g} spec={box} items={[{row: 0, l: 'E', at: K12.moles + 4}, {row: 1, l: 'S', at: K12.divide}, {row: 2, l: 'S', at: K12.poh}]} />
			<UnitChip text="250.0 mL → 0.2500 L" from={[v.x1, v.bottom + 4]} to={[box.x + box.w - 230, g.base(g.rows[1].first) - 80]} at={K12.litres - 14} out={K12.poh} color={TEAL} />
			{/* pH track */}
			<g opacity={vis(f, K12.seven - 6)}>
				<T x={SXD + 20} y={TY - 30} text="pH" size={26} hand weight={700} color={GREY_INK} />
				<line x1={X(0)} x2={X(0) + 440 * prog(f, K12.seven - 6, 16)} y1={TY} y2={TY} stroke={INK} strokeWidth={3} />
				{[0, 7, 14].map(p => <g key={p}><line x1={X(p)} x2={X(p)} y1={TY - 8} y2={TY + 8} stroke={INK} strokeWidth={2.5} /><T x={X(p)} y={TY + 32} text={String(p)} size={20} weight={600} color={GREY_INK} anchor="middle" /></g>)}
				<T x={X(10.5)} y={TY - 14} text="basic" size={22} hand weight={700} color={TEAL} anchor="middle" o={prog(f, K12.seven + 6, 10)} />
				<circle cx={X(lerp(7, 12.301, smooth(prog(f, K12.seven, 20))))} cy={TY} r={10} fill={AMBER} stroke={INK} strokeWidth={2} />
				<T x={X(12.301)} y={TY + 60} text="12.301" size={22} weight={800} color={AMBER_INK} anchor="middle" o={prog(f, K12.seven + 20, 10)} />
			</g>
			<CrossedHabit x={SXD} y={box.y + 170} text="pH = 12.3" at={K12.habit} cross={K12.t3} caption="three sig figs in [OH^{−}] → three decimal places" size={30} maxW={SWD} />
			{void K12.base}
		</Overlay>
	);
};

// ---------- 13/14. Drill 2 (Biology, allele frequency) ----------
const snpSpec = (t: number[] = [-100, -100, -100], marksAt?: number): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Biology', slotW: 300, note: 'example data',
	items: [
		{text: 'A sample of 250 central bearded dragons was genotyped at one single nucleotide polymorphism (SNP) with two alleles, C and T.', at: t[0]},
		{table: {head: ['Genotype', 'Number of dragons'], rows: [['CC', '90'], ['CT', '110'], ['TT', '50']], colW: [220, 300]}, at: t[1]},
		{text: 'Calculate the frequency of the T allele in this sample.', marks: '2 marks', at: t[2], marksAt},
	],
});
const SNP_CARD = snpSpec();
const MS = 0.72;
const DragonSlot: React.FC<{spec: CardSpec; at: number}> = ({spec, at}) => {
	const f = useCurrentFrame();
	const g = cardGeom(spec);
	const w = g.slot.w - 10, h = (DRAGON.box[3] / DRAGON.box[2]) * w;
	const x = g.slot.x + 5, y = g.slot.y + 30;
	return (
		<g opacity={prog(f, at, 14)}>
			<ClipPlate p={DRAGON} x={x} y={y} h={h} />
			<T x={x + w / 2} y={y + h + 30} text="central bearded dragon" size={20} weight={600} color={GREY_INK} anchor="middle" />
		</g>
	);
};
const D2 = 'drill-2';
const K13 = cues(sc(D2), {bio: 'Now Biology', two: 'Two hundred', ninety: 'Ninety', calc: 'Calculate', marks: 'Two marks', pause: 'Pause here'});
export const SceneDrill2: React.FC = () => {
	const h = hold(D2);
	const spec = snpSpec([K13.two, K13.ninety, K13.calc], K13.marks);
	const box = boxUnder(SNP_CARD, 5);
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} dim={[h.startFrame - 20, 1e9]} o={0.6} />
			<QuestionCard spec={spec} at={K13.bio - 6}><DragonSlot spec={spec} at={K13.two} /></QuestionCard>
			<AnswerBox spec={box} at={K13.calc} counter={{total: 2, label: true}} />
			<DrillCountdown hold={h} at={K13.pause} x={SXD} y={box.y + 60} cx={SXD + 245} cy={box.y + 200} />
		</Overlay>
	);
};
const F2 = 'feedback-2';
const K14 = cues(sc(F2), {count: 'Count alleles', five: 'five hundred copies', tall: 'T alleles:', ct: 'from C T', tt: 'from T T', makes: 'makes two hundred', over: 'Over five hundred', zero42: 'zero point four two', exact: 'exact,', check: 'Check:', c: 'C is zero', one: 'make one', habit: 'The habit', fifty: 'fifty over', dragons: 'counts dragons'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const box = boxUnder(SNP_CARD, 7, MS);
	const rows: ARow[] = [
		{text: 'frequency of T = T alleles ÷ all alleles', at: K14.count + 4, dur: 40},
		{text: 'all alleles = 2 × 250 = 500', at: K14.five - 16, dur: 30},
		{text: 'T alleles = 110 + (2 × 50) = 210', at: K14.tall, dur: K14.makes + 26 - K14.tall, tick: K14.over - 6},
		{text: 'f(T) = 210 ÷ 500 = 0.42 (42%)', at: K14.over, dur: K14.zero42 + 24 - K14.over, tick: K14.zero42 + 26},
		{text: 'check: f(C) = (2 × 90 + 110) ÷ 500 = 0.58', at: K14.check, dur: K14.c + 50 - K14.check, color: TEAL},
	];
	const g = answerGeom(box, rows);
	const by = box.y + 230;
	const bw = 440;
	const bp = smooth(prog(f, K14.one - 6, 24));
	return (
		<Overlay>
			<QuestionCard spec={SNP_CARD} at={-100} s={(fr: number) => lerp(1, MS, smooth(prog(fr, 0, 20)))}
				ann={[{kind: 'verb', phrase: 'Calculate', at: 4}, {kind: 'marks', at: 10}, {kind: 'given', phrase: '250', at: K14.five - 10}, {kind: 'given', phrase: '110', at: K14.ct}, {kind: 'given', phrase: '50', at: K14.tt}]}>
				<DragonSlot spec={SNP_CARD} at={-100} />
			</QuestionCard>
			<AnswerBox spec={box} at={10} counter={{total: 2, label: true}} rows={rows} dimRows={[{rows: [0], at: K14.five}, {rows: [1, 2], at: K14.over}, {rows: [3], at: K14.check + 10, out: K14.one}]} />
			<Letters g={g} spec={box} items={[{row: 0, l: 'E', at: K14.count + 4}, {row: 1, l: 'S', at: K14.five - 16}, {row: 3, l: 'S', at: K14.over}, {row: 4, l: 'S', at: K14.check}]} />
			<g opacity={1 - 0.6 * vis(f, K14.check, undefined, 12)}>
				<Chip x={SXD} y={box.y} text="counts are exact: they don't limit the figures; 210 ÷ 500 = 0.42 exactly" at={K14.exact} size={24} color={GREY_INK} fill="#eceae4" hand={false} maxW={SWD} />
			</g>
			<g opacity={vis(f, K14.one - 6)}>
				<rect x={SXD} y={by} width={bw * 0.58 * bp} height={56} rx={8} fill="#cfe3f5" stroke={INK} strokeWidth={2} />
				<rect x={SXD + bw * 0.58 * bp} y={by} width={bw * 0.42 * bp} height={56} rx={8} fill="#f8dc95" stroke={INK} strokeWidth={2} />
				<T x={SXD + 16} y={by + 38} text="C 0.58" size={24} weight={800} color={INK} o={prog(f, K14.one + 10, 10)} />
				<T x={SXD + bw * 0.58 + 16} y={by + 38} text="T 0.42" size={24} weight={800} color={AMBER_INK} o={prog(f, K14.one + 14, 10)} />
				<T x={SXD + bw / 2} y={by + 96} text="together: 1.00" size={28} hand weight={700} color={TEAL} anchor="middle" o={prog(f, K14.one + 20, 10)} />
			</g>
			<CrossedHabit x={SXD} y={by + 140} text="50 ÷ 250 = 0.20" at={K14.fifty - 6} cross={K14.dragons} caption="count alleles, not individuals (B11)" size={30} maxW={SWD} />
			{void K14.habit}{void AMBER}
		</Overlay>
	);
};

// ---------- 15. Decision board ----------
const K15 = cues(sc('decision-rule'), {so: 'So, every time', eq: 'equation.', sub: 'Substitute', why: 'and why', solve: 'Solve,', round: 'round once', sense: 'sense check', next: 'Next'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const FB = {x: 200, y: 110, w: 1520};
	return (
		<Overlay>
			<StepRail rows={ALL4} miniBox={FB} fullBox={FB} full={() => 1} initials={-100} fullRowH={132} title="Every time you see calculate"
				lit={[{row: 0, from: K15.eq, to: K15.sub}, {row: 1, from: K15.sub, to: K15.solve}, {row: 2, from: K15.solve, to: K15.sense}, {row: 3, from: K15.sense, to: K15.next}]}
				ex={[
					{text: 'q = mcΔT', at: K15.eq + 6},
					{text: '100 g × 4.18 J g^{−1} °C^{−1} × 5.2 °C; NaOH runs out first', at: K15.sub + 10},
					{text: '−54.34 → −54 kJ mol^{−1} (ΔT: 2 sig figs)', at: K15.round},
					{text: 'about −57: a little less negative, heat loss', at: K15.sense + 6},
				]} />
			<HandLine x={FB.x + 30} y={812} text="One E and three S's" at={K15.so + 10} size={48} color={TEAL} />
			<Chip x={FB.x} y={880} text="Next: graphs and data questions" at={K15.next} size={44} color={TEAL} />
			<g opacity={prog(f, K15.next + 14, 12)}>
				<DrawPath d="M820,880 L820,990 L980,990" at={K15.next + 14} dur={14} color={INK} width={4} />
				<DrawPath d="M830,975 Q890,930 970,900" at={K15.next + 24} dur={14} color={TEAL} width={4} />
				{[[850, 962], [890, 940], [930, 922], [965, 905]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={6} fill={AMBER} opacity={prog(f, K15.next + 30 + i * 4, 6)} />)}
			</g>
			{void K15.why}
		</Overlay>
	);
};

// ---------- 16. Key notes ----------
const NOTES = [
	'Calculate: work out an answer from given information (NESA glossary, paraphrased). Lay it out as equation, substitute (values with units), solve (answer with unit and sign), sense check.',
	'Significant figures: × or ÷ keeps the fewest significant figures; + or − keeps the fewest decimal places (so ΔT can have fewer figures than the readings). Exact numbers never limit.',
	'pH: decimal places = significant figures in the concentration.',
	'Carry every digit and round once, at the end.',
	'Show every step and say which value you chose and why. Working can earn marks when the answer is wrong, but there is no automatic carried-forward mark.',
];
export const SceneNotes: React.FC = () => <KeyNotes notes={NOTES} aid="One E and three S's: Equation, Substitute, Solve, Sense check." tag="for every calculate question" size={28} aidTop={640} />;
