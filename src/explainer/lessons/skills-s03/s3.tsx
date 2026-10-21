// S03 scenes 10 to 15: the Chemistry compare drill (HCl against ethanoic acid), its brief feedback, the Biology
// distinguish drill (the B5 chromosome pair), its feedback, the decision board and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, CARD, CardSpec, Chip, CrossedHabit, DrawPath, DrawSquiggle, DrillCountdown, GREY_INK, INK, INK_SOFT, KeyNotes, Overlay, PenArrow, Plate, QuestionCard,
	RoutineStrip, T, TEAL, ZONE, ansSpans, measure, answerGeom, cardGeom, phraseAt, plateW, prog, pulse, vis,
} from './kit';
import type {AnsSpec, ARow, Span} from './kit';
import {scribbleEllipse} from '../../kit';
import {BEAKER, CHROM, CHROM_G, PT_COLW, PT_HEAD, PT_ROWS, hold, sc} from './common';
import {PairLines, PairTable, VerbCard} from './pieces';

const SX = ZONE.side.x;
const ALL4 = [-100, -100, -100, -100];
/** Pair link from under clause a to clause b: under both on one line, or down to the top of b on a later line. */
const pl = (a: Span[], b: Span[], at: number) => {
	const A = a[0], B = b[0];
	return Math.abs(A.y - B.y) < 2
		? {a: [(A.x1 + A.x2) / 2, A.y + 11] as [number, number], b: [(B.x1 + B.x2) / 2, B.y + 11] as [number, number], at, bow: 10}
		: {a: [A.x1 + 4, A.y + 11] as [number, number], b: [B.x1 + 6, B.y - 30] as [number, number], at, bow: 0};
};
const boxUnder = (spec: CardSpec, lines: number, lh: number, size: number): AnsSpec => ({x: ZONE.box.x, y: spec.y + cardGeom(spec).h + 26, w: ZONE.box.w, lines, lh, size});

/** Veil over used table rows (card coordinates): data row r = 1 is the first row under the header. */
const TableVeil: React.FC<{spec: CardSpec; item: number; rows: number[]; at: number}> = ({spec, item, rows, at}) => {
	const f = useCurrentFrame();
	const g = cardGeom(spec);
	const it = g.items[item];
	const o = prog(f, at, 14);
	if (o <= 0.01 || !it.colX || !it.rowH) return null;
	const x0 = it.colX[0], x1 = it.colX[it.colX.length - 1], rh = it.rowH;
	return <g>{rows.map(r => <rect key={r} x={x0 + 1} y={it.y0 + r * rh + 1} width={x1 - x0 - 2} height={rh - 2} fill={CARD} opacity={0.62 * o} />)}</g>;
};

// ---------- 10/11. Drill 1 (Chemistry, compare) ----------
const acidSpec = (t: number[] = [-100, -100, -100], marksAt?: number): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Chemistry', slotW: 200, size: 28,
	items: [
		{text: 'Two acid solutions, each with a concentration of 0.10 mol L^{−1}, were tested at 25 °C. The last row gives the volume of 0.10 mol L^{−1} NaOH(aq) needed to neutralise 20.0 mL of each acid.', at: t[0]},
		{table: {head: ['Test', 'Hydrochloric acid, HCl(aq)', 'Ethanoic acid, CH_3COOH(aq)'], rows: [['Electrical conductivity', 'high', 'low'], ['Reaction with magnesium ribbon', 'rapid bubbling', 'slow bubbling'], ['Volume of NaOH(aq) needed', '20.0 mL', '20.0 mL']], colW: [420, 360, 400]}, at: t[1]},
		{text: 'Using the data, compare the two acid solutions in terms of acid strength.', marks: '3 marks', at: t[2], marksAt},
	],
});
const ACID_CARD = acidSpec();
const acidBox = () => boxUnder(ACID_CARD, 7, 46, 30);
const BeakerSlot: React.FC<{spec: CardSpec; at: number}> = ({spec, at}) => {
	const f = useCurrentFrame();
	const g = cardGeom(spec);
	const h = 104, w = plateW(BEAKER, h);
	const x1 = g.slot.x + 6, x2 = g.slot.x + 16 + w, y = g.slot.y + 14;
	return (
		<g opacity={prog(f, at, 14)}>
			<Plate p={BEAKER} x={x1} y={y} h={h} />
			<Plate p={BEAKER} x={x2} y={y} h={h} />
			<T x={x1 + w / 2} y={y + h + 26} text="HCl" size={20} weight={700} color={GREY_INK} anchor="middle" />
			<T x={x2 + w / 2} y={y + h + 26} text="CH_3COOH" size={18} weight={700} color={GREY_INK} anchor="middle" />
			<T x={(x1 + x2 + w) / 2} y={y + h + 54} text="each 0.10 mol L^{−1}" size={18} weight={600} color={GREY_INK} anchor="middle" />
		</g>
	);
};
const D1 = 'drill-1';
const K10 = cues(sc(D1), {turn: 'Your turn', chem: 'Chemistry first', two: 'Two solutions', table: 'The table shows', neut: 'neutralised', using: 'Using the data', compare: 'compare', three: 'Three marks', pause: 'Pause here'});
export const SceneDrill1: React.FC = () => {
	const h = hold(D1);
	const spec = acidSpec([K10.two, K10.table, K10.using], K10.three);
	const box = acidBox();
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} dim={[h.startFrame - 20, 1e9]} />
			<QuestionCard spec={spec} at={K10.chem - 6}><BeakerSlot spec={spec} at={K10.two} /></QuestionCard>
			<AnswerBox spec={box} at={K10.compare} counter={{total: 3, label: true}} />
			<DrillCountdown hold={h} at={K10.pause} x={SX} y={box.y + 70} cx={SX + 245} cy={box.y + 210} />
		</Overlay>
	);
};
const F1 = 'feedback-1';
const K11 = cues(sc(F1), {two: 'Two constraints', sim: 'Similarity', both: 'both need', twenty: 'twenty millilitres', diff: 'Difference', fully: 'fully', whereas: 'whereas', so: 'So hydrochloric', conducts: 'conducts', habit: 'The habit to drop', one: 'one acid'});
const ACID_ROWS = [
	'Similarity: both need 20.0 mL of NaOH: same concentration, both monoprotic, so the same moles of acid. The weak acid keeps ionising as OH^{−} reacts.',
	'Difference: HCl is strong, fully ionised, whereas CH_3COOH is weak, about 1% ionised, so [H_3O^{+}] is much higher in HCl.',
	'So HCl conducts better and bubbles faster with Mg, whereas CH_3COOH conducts poorly and bubbles slowly.',
];
export const SceneFeedback1: React.FC = () => {
	const box = acidBox();
	const tk = [K11.diff - 12, K11.so - 10, K11.habit - 8];
	const rows: ARow[] = ACID_ROWS.map((text, i) => ({text, at: [K11.both, K11.diff + 36, K11.so + 10][i], dur: tk[i] - [K11.both, K11.diff + 36, K11.so + 10][i] - 12, tick: tk[i]}));
	const g = answerGeom(box, rows);
	const vol = phraseAt(ACID_CARD, 'Volume of NaOH(aq) needed'), cond = phraseAt(ACID_CARD, 'Electrical conductivity');
	const r1a = ansSpans(g, 1, 'HCl'), r1b = ansSpans(g, 1, 'CH_3COOH'), r2a = ansSpans(g, 2, 'HCl'), r2b = ansSpans(g, 2, 'CH_3COOH');
	return (
		<Overlay>
			<QuestionCard spec={ACID_CARD} at={-100} ann={[
				{kind: 'verb', phrase: 'compare', at: 4}, {kind: 'marks', at: 12}, {kind: 'constraint', phrase: 'Using the data,', at: K11.two + 30}, {kind: 'constraint', phrase: 'in terms of acid strength.', at: K11.two + 70},
				{kind: 'given', phrase: 'Electrical conductivity', at: 20}, {kind: 'given', phrase: 'Reaction with magnesium ribbon', at: 26}, {kind: 'given', phrase: 'Volume of NaOH(aq) needed', at: 32},
			]}>
				<BeakerSlot spec={ACID_CARD} at={-100} />
				<TableVeil spec={ACID_CARD} item={1} rows={[3]} at={tk[0] + 6} />
				<TableVeil spec={ACID_CARD} item={1} rows={[1, 2]} at={tk[2] + 6} />
			</QuestionCard>
			<AnswerBox spec={box} at={-100} counter={{total: 3, label: true}} rows={rows} ann={[{kind: 'ring', row: 0, phrase: 'both', at: K11.both + 10}, {kind: 'ring', row: 1, phrase: 'whereas', at: K11.whereas + 4}, {kind: 'ring', row: 2, phrase: 'whereas', at: K11.so + 60}]} />
			<PenArrow a={[vol.endX + 14, vol.y - 10]} b={[g.x + g.w - 40, g.base(g.rows[0].first) - 14]} at={K11.twenty} out={tk[0] + 6} color={AMBER_INK} bow={-30} />
			<PenArrow a={[cond.endX + 14, cond.y - 10]} b={[g.x + g.w - 40, g.base(g.rows[2].first) - 14]} at={K11.conducts} out={tk[2] + 6} color={AMBER_INK} bow={-60} />
			<PairLines links={[pl(r1a, r1b, K11.whereas + 20), pl(r2a, r2b, K11.so + 70)]} />
			<CrossedHabit x={SX} y={box.y + 20} text="HCl is a strong acid that reacts quickly. Ethanoic acid is a weak acid that reacts slowly." at={K11.habit} cross={K11.one} caption="two descriptions: where's the similarity?" size={28} maxW={470} />
			{void K11.fully}
		</Overlay>
	);
};

// ---------- 12/13. Drill 2 (Biology, distinguish) ----------
const chromSpec = (t: number[] = [-100, -100], marksAt?: number): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Biology',
	items: [
		{text: 'The diagram shows one pair of chromosomes in a body cell after DNA replication.', at: t[0]},
		{text: 'Distinguish between homologous chromosomes and sister chromatids.', marks: '2 marks', at: t[1], marksAt, gap: 8},
	],
});
const CHROM_CARD = chromSpec();
const chromBox = () => boxUnder(CHROM_CARD, 6, 44, 29);
const plateGeom = () => {
	const g = cardGeom(CHROM_CARD);
	const h = 210, w = plateW(CHROM, h);
	const x = g.x + g.w / 2 - w / 2, y = g.items[0].y1 + 50;
	return {x, y, w, h, P: (u: number, v: number): [number, number] => [x + u * w, y + v * h]};
};
/** The chromosome pair in the card's diagram slot with two coded label brackets (nothing answer-bearing). */
const ChromDiagram: React.FC<{at: number; parents?: number; one?: number; alleles?: number}> = ({at, parents, one, alleles}) => {
	const f = useCurrentFrame();
	const p = plateGeom();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const sx0 = p.x + p.w * 0.02, sx1 = p.x + p.w * 0.49, ty = p.y - 10;
	const by = p.y + p.h + 10;
	const pu = one === undefined ? 0 : pulse(f, one, 40);
	return (
		<g opacity={o}>
			{pu > 0.01 ? <ellipse cx={p.P(CHROM_G.pinkU, 0.5)[0]} cy={p.y + p.h / 2} rx={p.w * 0.3} ry={p.h * 0.56} fill={AMBER} opacity={0.3 * pu} /> : null}
			<Plate p={CHROM} x={p.x} y={p.y} h={p.h} />
			<path d={`M${sx0},${ty + 8} L${sx0},${ty} L${sx1},${ty} L${sx1},${ty + 8}`} fill="none" stroke={INK} strokeWidth={2.5} />
			<T x={(sx0 + sx1) / 2} y={ty - 10} text="sister chromatids" size={22} weight={600} color={INK} anchor="middle" />
			<path d={`M${p.x},${by - 8} L${p.x},${by} L${p.x + p.w},${by} L${p.x + p.w},${by - 8}`} fill="none" stroke={INK} strokeWidth={2.5} />
			<T x={p.x + p.w / 2} y={by + 26} text="homologous chromosomes" size={22} weight={600} color={INK} anchor="middle" />
			{parents !== undefined ? (
				<g opacity={prog(f, parents, 12)}>
					<T x={p.x - 18} y={p.y + p.h / 2} text="from one parent" size={24} hand weight={700} color={TEAL} anchor="end" />
					<T x={p.x + p.w + 18} y={p.y + p.h / 2} text="from the other parent" size={24} hand weight={700} color={TEAL} />
				</g>
			) : null}
			{alleles !== undefined ? CHROM_G.chromatidU.map((u, k) => {
				const [x, y] = p.P(u, CHROM_G.bandV);
				const ao = prog(f, alleles + (k < 2 ? 0 : 12), 10);
				return (
					<g key={k} opacity={ao}>
						<circle cx={x} cy={y} r={13} fill="#fffdf8" stroke={INK} strokeWidth={2} />
						<T x={x} y={y + 8} text={k < 2 ? 'A' : 'a'} size={22} weight={800} color={INK} anchor="middle" />
					</g>
				);
			}) : null}
		</g>
	);
};
const D2 = 'drill-2';
const K12 = cues(sc(D2), {bio: 'Now Biology', diagram: 'The diagram shows', dist: 'Distinguish', two: 'Two marks', pause: 'Pause here'});
export const SceneDrill2: React.FC = () => {
	const h = hold(D2);
	const box = chromBox();
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} dim={[h.startFrame - 20, 1e9]} />
			<QuestionCard spec={chromSpec([K12.diagram, K12.dist], K12.two)} at={K12.bio - 6}><ChromDiagram at={K12.diagram + 10} /></QuestionCard>
			<AnswerBox spec={box} at={K12.dist} counter={{total: 2, label: true}} />
			<DrillCountdown hold={h} at={K12.pause} x={SX} y={box.y + 70} cx={SX + 245} cy={box.y + 210} />
		</Overlay>
	);
};
const F2 = 'feedback-2';
const K13 = cues(sc(F2), {dist: 'Distinguish means', origin: 'Origin', homol: 'homologous chromosomes come', parent: 'parent', whereas: 'whereas', one: 'one chromosome', alleles: 'Alleles', homol2: 'homologous chromosomes carry', diff: 'different alleles', identical: 'identical', habit: 'The habit to drop', two: 'two quick definitions'});
const CHROM_ROWS = [
	'Homologous chromosomes are a pair, one inherited from each parent, whereas sister chromatids are two identical copies of one chromosome, made by DNA replication and joined at the centromere.',
	'Homologous chromosomes carry the same genes at the same loci but may carry different alleles, whereas sister chromatids carry the same alleles.',
];
export const SceneFeedback2: React.FC = () => {
	const box = chromBox();
	const rows: ARow[] = [
		{text: CHROM_ROWS[0], at: K13.homol, dur: K13.alleles - K13.homol - 30, tick: K13.alleles - 14},
		{text: CHROM_ROWS[1], at: K13.homol2, dur: K13.habit - K13.homol2 - 24, tick: K13.habit - 10},
	];
	const g = answerGeom(box, rows);
	const a0 = ansSpans(g, 0, 'Homologous chromosomes'), b0 = ansSpans(g, 0, 'sister chromatids'), a1 = ansSpans(g, 1, 'Homologous chromosomes'), b1 = ansSpans(g, 1, 'sister chromatids');
	return (
		<Overlay>
			<QuestionCard spec={CHROM_CARD} at={-100} ann={[{kind: 'verb', phrase: 'Distinguish', at: 4}, {kind: 'marks', at: 12}, {kind: 'given', phrase: 'after DNA replication.', at: 20}]}>
				<ChromDiagram at={-100} parents={K13.parent} one={K13.one} alleles={K13.diff} />
			</QuestionCard>
			<AnswerBox spec={box} at={-100} counter={{total: 2, label: true}} rows={rows} ann={[{kind: 'ring', row: 0, phrase: 'whereas', at: K13.whereas + 4}, {kind: 'ring', row: 1, phrase: 'whereas', at: K13.identical - 30}]} />
			<PairLines links={[pl(a0, b0, K13.one + 10), pl(a1, b1, K13.identical)]} />
			<CrossedHabit x={SX} y={box.y + 20} text="Homologous chromosomes are a pair of chromosomes. Sister chromatids are copies of a chromosome." at={K13.habit} cross={K13.two} caption="two definitions: differ in what?" size={28} maxW={470} />
			{void K13.dist}{void K13.origin}
		</Overlay>
	);
};

// ---------- 14. Decision board ----------
const K14 = cues(sc('decision-rule'), {compare: 'compare', contrast: 'Contrast', sketch: 'Sketch the table', next: 'Next', up: 'back it up'});
/** Small balance-scale doodle (an abstract diagram, no people). */
export const ScaleDoodle: React.FC<{x: number; y: number; s?: number; color?: string}> = ({x, y, s = 1, color = AMBER_INK}) => (
	<g transform={`translate(${x},${y}) scale(${s})`} fill="none" stroke={color} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round">
		<path d="M0,-30 L0,30 M-18,30 L18,30 M-36,-22 L36,-22" />
		<path d="M-36,-22 L-48,6 L-24,6 Z M36,-22 L24,6 L48,6 Z" />
	</g>
);
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const PX = 140, PY = 520;
	const rows = PT_ROWS([{link: {at: -100, mark: '='}}, {link: {at: -100, mark: '='}}, {link: {at: -100, mark: '≠'}}]);
	const lines: [string, number][] = [['In both', 0], ['Both', 1], ['whereas', 2]];
	return (
		<Overlay>
			<VerbCard x={140} y={180} w={780} h={180} verb="compare" body="similarities and differences, in pairs" kind="both" at={-100} lit={[K14.compare, K14.contrast]} size={36} />
			<VerbCard x={1000} y={180} w={780} h={180} verb="contrast, distinguish" body="differences only, still in pairs" kind="diff" at={-100} lit={[K14.contrast, K14.sketch]} size={36} />
			<g opacity={vis(f, K14.sketch)}>
				<PairTable x={PX} y={PY} colW={PT_COLW} rows={rows} head={{labels: PT_HEAD, at: K14.sketch}} size={22} headH={50} s={0.95} />
				<PenArrow a={[PX + 520, PY + 150]} b={[1000, PY + 150]} at={K14.sketch + 20} color={AMBER_INK} />
				{lines.map(([w, i]) => {
					const y = PY + 60 + i * 80;
					const ww = measure(w, 36, true, 700) + 8;
					return (
						<g key={w} opacity={prog(f, K14.sketch + 30 + i * 12, 10)}>
							<T x={1040} y={y} text={w} size={36} hand weight={700} color={INK} />
							<DrawSquiggle x={1040 + ww + 30} y={y - 12} w={480} at={K14.sketch + 34 + i * 12} seed={i + 3} color={INK_SOFT} />
							<DrawPath d={scribbleEllipse(1040 + ww / 2 - 6, y - 12, ww / 2 + 10, 26, 3 + i, 1.1)} at={K14.sketch + 44 + i * 12} dur={14} color={AMBER} width={4} />
						</g>
					);
				})}
			</g>
			<Chip x={140} y={900} text="Next: analyse, assess, evaluate, justify" at={K14.next} size={44} color={TEAL} />
			<g opacity={prog(f, K14.next + 14, 12)}><ScaleDoodle x={1060} y={935} s={1.1} /></g>
			{void K14.up}
		</Overlay>
	);
};

// ---------- 15. Key notes ----------
const NOTES = [
	'Compare: show similarities or differences. Contrast: show differences or opposites. Distinguish: show how things differ (NESA glossary, paraphrased). Tip: for compare, give at least one similarity and one difference unless the question narrows it.',
	'Write in pairs: the same feature for both cases, in one sentence. Two separate descriptions do not compare.',
	'Table-to-sentence: one row per feature, one column per case, then one sentence per row.',
	'Comparison words: both, in both, similarly; whereas, while, but, unlike, larger than.',
];
export const SceneNotes: React.FC = () => <KeyNotes notes={NOTES} aid="Same feature, both sides, one sentence." tag="check each sentence: one feature, both cases?" size={32} aidTop={600} />;
