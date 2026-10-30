// S08 scenes 6 to 10: build a paragraph with PEEL (paragraph 3, one sentence per rail label, margin letters, the cells
// pulse as the evidence writes), the individual and the population (paragraph 3 folds to a grey block, paragraphs 1
// and 2 write above it), use the stimulus (a copied trend crossed; three values lift off the table and are interpreted),
// the judgement first and last (bookends and the condition) and the weak answer beside the strong one on the band meter.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, Chip, CrossedHabit, DrawPath, GREEN, GREY_INK, GreyTag, HandLine, INK, INK_SOFT, Overlay, PEN, PenArrow, QuestionCard, T, TEAL, answerGeom, clamp01, lerp, phraseAt, prog,
	smooth, vis,
} from './kit';
import type {AnsGeom, AnsSpec, Ann} from './kit';
import {ABOX, CARD_S, CLOSING, DEMANDS, OPENING, P1, P2, P3, P4, RW, RX, WEAK, WORK, sc} from './common';
import {BandMeter, Block, Demands, LiftChip, PENCIL, PEEL, Para, PeelDot, PeelRail, PlanCard, Slot, TERRA, VBrace, VIOLET, paraLayout, paraLines, planLayout} from './pieces';
import {PLAN_ROWS, PLAN_SIZE, VERDICT} from './s1';

const ALL4 = [-100, -100, -100, -100];
const G = answerGeom(ABOX, []);
const VERBS: Ann[] = [{kind: 'verb', phrase: 'Analyse', at: -100}, {kind: 'verb', phrase: 'Assess', at: -100}];
const PULSE = '#bfe6df', PULSE_A = '#f8d9a0';
const SmallCard: React.FC<{ann?: Ann[]}> = ({ann = []}) => <QuestionCard spec={WORK} at={-100} s={CARD_S} ann={[...VERBS, ...ann]} />;
/** The plan card from scene 5, kept small and dim at the top of the right column. */
const PLAN_K = 0.5;
const PlanSmall: React.FC<{o?: number}> = ({o = 0.55}) => <PlanCard x={RX} y={96} w={RW} at={-100} s={PLAN_K} o={o} size={PLAN_SIZE} verdict={{t: VERDICT, at: -100}} rows={PLAN_ROWS(ALL4, ALL4)} />;
const planBottom = () => 96 + planLayout(RW, PLAN_ROWS(ALL4, ALL4), VERDICT, PLAN_SIZE).h * PLAN_K;
/** Line of the first word of each part of a paragraph. */
const partLines = (g: AnsGeom, parts: string[]) => {
	const {L, partOf} = paraLayout(g, parts);
	return parts.map((_, p) => L.words[partOf.indexOf(p)].line);
};
/** A mini PEEL rail in the margin beside a paragraph: four dots that light in turn from `at`. */
const MiniPeel: React.FC<{g: AnsGeom; line: number; at: number; step?: number; dy?: number; o?: number}> = ({g, line, at, step = 18, dy = 0, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01 || f < at - 10) return null;
	const x = g.x + g.margin / 2, y0 = g.base(line) - g.size * 0.75 + dy;
	return (
		<g opacity={o * prog(f, at - 10, 10)}>
			{PEEL.map((p, k) => {
				const on = prog(f, at + k * step, 8);
				return (
					<g key={k}>
						<circle cx={x} cy={y0 + k * 23} r={10} fill={on > 0.5 ? p.c : '#fffdf8'} stroke={p.c} strokeWidth={2.5} />
						<T x={x} y={y0 + k * 23 + 5} text={p.l} size={13} weight={800} color={on > 0.5 ? '#fffdf8' : p.c} anchor="middle" />
					</g>
				);
			})}
		</g>
	);
};

// ---------- 6. Build a paragraph: PEEL ----------
const K6 = cues(sc('peel-paragraph'), {now: 'Now build', point: 'the point', evidence: 'Give the evidence', explain: 'Explain the biology', link: 'Then link', take: 'Take paragraph three', coverage: 'Coverage fell from', fewer: 'With fewer people', rose: 'cases rose', so: 'So the fall', outbreak: 'the outbreak'});
export const P3_LINE = 2;
export const p3Parts = (t: number[], d: number[] = [40, 70, 150, 50]) => P3.map((text, i) => ({text, at: t[i], dur: d[i]}));
const p3L = () => partLines(G, P3);
export const ScenePeel: React.FC = () => {
	const f = useCurrentFrame();
	const t = [K6.take + 14, K6.coverage, K6.fewer, K6.so];
	const RY = planBottom() + 30;
	return (
		<Overlay>
			<AnswerBox spec={ABOX} at={-100} />
			<Demands at={-100} texts={DEMANDS} labels={ALL4} half={[K6.outbreak, undefined, undefined, undefined]} />
			<SmallCard ann={[
				{kind: 'pulse', phrase: '95', item: 1, at: K6.coverage + 14, color: PULSE}, {kind: 'pulse', phrase: '87', item: 1, at: K6.coverage + 24, color: PULSE},
				{kind: 'pulse', phrase: '8', item: 1, at: K6.rose + 8, color: PULSE}, {kind: 'pulse', phrase: '310', item: 1, at: K6.rose + 18, color: PULSE},
			]} />
			<g opacity={1 - 0.45 * prog(f, 0, 20)}><PlanSmall o={1} /></g>
			<Slot g={G} line={0} label="P1: the individual" at={K6.take} />
			<Slot g={G} line={1} label="P2: the population" at={K6.take + 6} />
			<T x={G.tx + G.tw} y={G.base(1) - 2} text="paragraph 3 first: the clearest data link" size={20} weight={600} color={GREY_INK} anchor="end" o={vis(f, K6.take + 10, K6.coverage + 60, 10)} />
			<Para g={G} line={P3_LINE} parts={p3Parts(t)} marks={[
				{phrase: P3[0], at: t[0] + 40, color: PEN}, {phrase: P3[1], at: t[1] + 70, color: TEAL},
				{phrase: P3[2], at: t[2] + 150, color: VIOLET}, {phrase: P3[3], at: t[3] + 50, color: GREEN},
			]} />
			{p3L().map((l, k) => <PeelDot key={k} g={G} line={P3_LINE + l} k={k} at={t[k]} />)}
			<PeelRail x={RX} y={RY} w={RW} at={K6.now} rows={[K6.point - 6, K6.evidence - 6, K6.explain - 6, K6.link - 6]} lit={[
				{row: 0, from: K6.point, to: K6.evidence}, {row: 1, from: K6.evidence, to: K6.explain}, {row: 2, from: K6.explain, to: K6.link}, {row: 3, from: K6.link, to: K6.take},
				{row: 0, from: t[0], to: t[1]}, {row: 1, from: t[1], to: t[2]}, {row: 2, from: t[2], to: t[3]}, {row: 3, from: t[3], to: 1e9},
			]} />
			<GreyTag x={RX} y={RY + 52 + 4 * 88 + 20} text="s02: explain = cause → effect" at={K6.fewer} size={22} maxW={RW} />
		</Overlay>
	);
};

// ---------- 7. The individual and the population ----------
const K7 = cues(sc('individual-population'), {first: 'The first two', constraint: 'cover the constraint', one: 'One for the individual', vaccine: 'the vaccine presents', memory: 'makes memory cells', later: 'a later infection', pop: 'One for the population', when: 'when coverage is', most: 'most people are', rarely: 'rarely finds', fits: 'which fits', ten: 'twenty ten', idea: 'One idea per', link: 'each link'});
// Measured at render time (fonts loaded), not at import.
const p2Line = () => paraLines(G, P1) + 1, p3bLine = () => p2Line() + paraLines(G, P2) + 1;
const P2_MARKS = (at: number) => [{phrase: '95 to 96%', at, color: TEAL}, {phrase: '12', at: at + 10, color: TEAL}, {phrase: '8)', at: at + 18, color: TEAL}];
/** The answer as it stands after scene 7 (P1, P2 written, P3 folded). */
export const AnswerSoFar: React.FC<{o?: number}> = ({o = 1}) => (
	<g opacity={o}>
		<AnswerBox spec={ABOX} at={-100} />
		<Para g={G} line={0} parts={P1.map(text => ({text, at: -1000}))} />
		<Para g={G} line={p2Line()} parts={P2.map(text => ({text, at: -1000}))} marks={P2_MARKS(-1000)} />
		<Block g={G} line={p3bLine()} label="P3: coverage fell → outbreak (PEEL, built)" at={-100} />
	</g>
);
export const SceneIndPop: React.FC = () => {
	const f = useCurrentFrame();
	const fold = smooth(prog(f, 8, 26));
	const p3dy = (p3bLine() - P3_LINE) * G.lh * smooth(prog(f, 24, 30));
	const t1 = [K7.one + 24, K7.later], t2 = [K7.when, K7.fits];
	return (
		<Overlay>
			<AnswerBox spec={ABOX} at={-100} />
			<Demands at={-100} texts={DEMANDS} labels={ALL4} half={[-100, undefined, undefined, undefined]} full={[K7.link + 10, K7.link, undefined, undefined]} />
			<SmallCard ann={[
				{kind: 'pulse', phrase: '96', item: 1, at: K7.fits + 10, color: PULSE}, {kind: 'pulse', phrase: '95', item: 1, at: K7.fits + 14, color: PULSE},
				{kind: 'pulse', phrase: '12', item: 1, at: K7.fits + 22, color: PULSE}, {kind: 'pulse', phrase: '8', item: 1, at: K7.fits + 30, color: PULSE},
			]} />
			<PlanSmall />
			<g opacity={1 - prog(f, 0, 16)}><PeelRail x={RX} y={planBottom() + 30} w={RW} at={-100} /></g>
			<Para g={G} line={P3_LINE} parts={p3Parts([-1000, -1000, -1000, -1000])} o={1 - fold} />
			{p3L().map((l, k) => <PeelDot key={k} g={G} line={P3_LINE + l} k={k} at={-100} out={4} />)}
			<Block g={G} line={P3_LINE} dy={p3dy} label="P3: coverage fell → outbreak (PEEL, built)" at={14} />
			<Slot g={G} line={0} label="P1: the individual" at={-100} out={K7.one} />
			<Slot g={G} line={1} label="P2: the population" at={-100} out={K7.one} />
			<Para g={G} line={0} parts={[{text: P1[0], at: t1[0], dur: 150}, {text: P1[1], at: t1[1], dur: 100}]} />
			<MiniPeel g={G} line={0} at={t1[0] + 20} step={60} />
			<Para g={G} line={p2Line()} parts={[{text: P2[0], at: t2[0], dur: 190}, {text: P2[1], at: t2[1], dur: 70}]} marks={P2_MARKS(K7.fits + 40)} />
			<MiniPeel g={G} line={p2Line()} at={t2[0] + 20} step={60} />
			<GreyTag x={RX} y={planBottom() + 40} text="b09: memory cells, secondary response" at={K7.memory} size={22} maxW={RW} />
			<GreyTag x={RX} y={planBottom() + 120} text="b10: herd immunity" at={K7.most} size={22} maxW={RW} />
			<Chip x={RX} y={planBottom() + 200} text="one idea per paragraph: each link easy to see" at={K7.idea} size={28} color={INK} maxW={RW} />
			{void K7.first}{void K7.constraint}{void K7.pop}{void K7.rarely}{void K7.ten}{void lerp}
		</Overlay>
	);
};

// ---------- 8. Use the stimulus, don't copy it ----------
const K8 = cues(sc('use-stimulus'), {using: 'Using the stimulus', weak: 'A weak answer', went: 'went up', strong: 'A strong one', picks: 'picks the values', compares: 'compares them', mean: 'they mean', coverage: 'coverage dropped', climbed: 'cases climbed', quote: 'Quote the number', interpret: 'then interpret'});
const cellPt = (phrase: string, occ = 1): [number, number] => {
	const p = phraseAt(WORK, phrase, occ, CARD_S, 1);
	return [p.cx, p.y - 8];
};
export const SceneStimulus: React.FC = () => {
	const f = useCurrentFrame();
	const LY = 720;
	return (
		<Overlay>
			<AnswerSoFar o={1 - 0.8 * prog(f, 0, 20)} />
			<rect x={ABOX.x + 4} y={ABOX.y + 44} width={ABOX.w - 8} height={G.h - 50} rx={8} fill="#fffdf8" opacity={0.85 * prog(f, 0, 20)} />
			<Demands at={-100} texts={DEMANDS} labels={ALL4} full={[-100, -100, undefined, K8.quote]} />
			<SmallCard ann={[{kind: 'given', phrase: 'aim for at least 95% two-dose coverage', item: 0, at: K8.coverage, color: TEAL}, {kind: 'pulse', phrase: '95', item: 1, at: K8.picks, color: PULSE}, {kind: 'pulse', phrase: '87', item: 1, at: K8.picks + 10, color: PULSE}, {kind: 'pulse', phrase: '8', item: 1, at: K8.picks + 20, color: PULSE}, {kind: 'pulse', phrase: '310', item: 1, at: K8.picks + 24, color: PULSE}]} />
			<PlanSmall />
			<CrossedHabit x={420} y={490} text="cases went up, then down" at={K8.went - 16} cross={K8.strong - 8} caption="copied trend, no values, no meaning" size={34} maxW={700} />
			<T x={420} y={LY - 70} text="A strong answer picks, compares, interprets:" size={34} hand weight={700} color={INK} o={prog(f, K8.picks - 10, 10)} />
			<LiftChip from={cellPt('95')} to={[520, LY]} text="95%" at={K8.picks} />
			<LiftChip from={cellPt('87')} to={[720, LY]} text="87%" at={K8.picks + 10} />
			<LiftChip from={cellPt('310')} to={[1000, LY]} text="cases 8 → 310" at={K8.picks + 20} />
			{f >= K8.compares ? <PenArrow a={[566, LY]} b={[668, LY]} at={K8.compares} color={TEAL} /> : null}
			<T x={617} y={LY - 36} text="fell" size={26} hand weight={700} color={TEAL} anchor="middle" o={prog(f, K8.compares + 8, 10)} />
			<HandLine x={420} y={LY + 100} text="coverage fell below the 95% target → more people susceptible" at={K8.mean + 6} size={40} color={TEAL} dur={40} />
			<HandLine x={420} y={LY + 156} text="→ transmission continued → cases rose" at={K8.mean + 50} size={40} color={TEAL} dur={30} />
			<HandLine x={420} y={LY + 250} text="Quote the number, then interpret it." at={K8.quote} size={46} color={INK} />
			<GreyTag x={RX} y={planBottom() + 40} text="s06: describe with numbers" at={K8.quote} size={22} maxW={RW} />
			{void K8.using}{void K8.weak}{void K8.climbed}{void K8.interpret}{void AMBER}
		</Overlay>
	);
};

// ---------- 9. The judgement, first and last ----------
const K9 = cues(sc('judgement-bookends'), {assess: 'Assess asks', first: 'your first line', end: 'at the end', before: 'Before the program', fallen: 'had already fallen', after: 'After it began', rose: 'coverage rose', fell: 'cases fell to', data: 'These data', fair: 'the fair judgement', contributed: 'probably contributed', condition: 'its condition', bare: 'a bare yes'});
const lo = () => paraLines(G, [OPENING]), lc = () => paraLines(G, [CLOSING]);
export const SceneBookends: React.FC = () => {
	const f = useCurrentFrame();
	const LO = lo(), LC = lc(), B9 = LO, P4_LINE = LO + 1, C_LINE = ABOX.lines - LC, P4L = partLines(G, P4);
	const t4 = [K9.before + 10, K9.after, K9.fell + 22, K9.data + 8];
	const yTop = G.base(0) - G.size * 0.9, yBot = G.base(C_LINE + LC - 1) + 10;
	const yHow = G.base(P4_LINE + P4L[3]) - 8;
	return (
		<Overlay>
			<AnswerBox spec={ABOX} at={-100} />
			<Demands at={-100} texts={DEMANDS} labels={ALL4} full={[-100, -100, K9.condition, -100]} />
			<SmallCard ann={[
				{kind: 'pulse', phrase: '310', item: 1, at: K9.before, color: PULSE_A}, {kind: 'pulse', phrase: '180', item: 1, at: K9.before + 8, color: PULSE_A},
				{kind: 'pulse', phrase: '89', item: 1, at: K9.rose + 10, color: PULSE}, {kind: 'pulse', phrase: '95', occ: 2, item: 1, at: K9.rose + 18, color: PULSE},
				{kind: 'pulse', phrase: '180', item: 1, at: K9.fell, color: PULSE}, {kind: 'pulse', phrase: '6', item: 1, at: K9.fell + 8, color: PULSE},
			]} />
			<PlanSmall />
			<Block g={G} line={B9} label="P1 to P3: individual, population, outbreak" at={4} />
			<Para g={G} line={0} parts={[{text: OPENING, at: K9.first, dur: 90}]} />
			<Para g={G} line={P4_LINE} parts={P4.map((text, i) => ({text, at: t4[i], dur: [80, 110, 34, 60][i]}))} dims={[{parts: [0, 1, 2, 3], at: K9.contributed, to: 0.4}]} marks={[
				{phrase: '310 to 180', at: K9.fallen + 20, color: AMBER}, {phrase: '89% to 95%,', at: K9.rose + 24, color: TEAL}, {phrase: '180 to 6.', at: K9.fell + 12, color: TEAL}, {phrase: 'However,', at: K9.data + 14, color: AMBER},
			]} />
			<Para g={G} line={C_LINE} parts={[{text: CLOSING, at: K9.contributed - 6, dur: 80}]} />
			<VBrace x={G.x + 10} y1={yTop} y2={yBot} at={K9.contributed + 50} />
			<Chip x={RX} y={G.base(P4_LINE) - 34} text="already falling before the program" at={K9.fallen + 10} size={26} color={AMBER_INK} maxW={RW} />
			<Chip x={RX} y={yHow - 26} text="limit: association; earlier decline" at={K9.data + 22} size={26} color={AMBER_INK} maxW={RW} />
			<Chip x={RX} y={(yTop + yBot) / 2 + 60} text="verdict first and last" at={K9.contributed + 54} size={30} color={GREEN} maxW={RW} />
			<GreyTag x={RX} y={(yTop + yBot) / 2 + 140} text="s04: verdict, criteria, evidence" at={K9.fair} size={22} maxW={RW} />
			{void K9.assess}{void K9.end}{void K9.bare}
		</Overlay>
	);
};

// ---------- 10. Weak beside strong ----------
const K10 = cues(sc('weak-strong'), {put: 'Put two answers', weak: 'The weak one', describes: 'describes the trend', explains: 'explains vaccination', ends: 'ends with', covers: 'It covers one', numbers: 'uses no numbers', judgement: 'its judgement has', strong: 'The strong one', both: 'covers both verbs', kinds: 'both kinds', values: "uses the table's", judges: 'judges the program', condition: 'a condition', same: 'Same science', band: 'different band'});
const WB: AnsSpec = {x: 60, y: 150, w: 760, lines: 8, lh: 42, size: 28, margin: 60, label: 'Answer A'};
const SB: AnsSpec = {x: 1100, y: 150, w: 780, lines: 11, lh: 40, size: 25, margin: 60, label: 'Answer B'};
const STRONG = [
	'Opening: the program probably contributed; these data can\'t show how much',
	'P1 individual: antigens → memory B and T cells → fast secondary response',
	'P2 population: near the 95% target, chains die out (95 to 96%; 12 and 8)',
	'P3 outbreak: coverage 95% → 87%, cases 8 → 310',
	'P4 program: 89% → 95%, cases 180 → 6; but already falling (310 → 180)',
	'Closing: probably contributed, as cases fell to 6 when coverage returned to the 95% target; the earlier decline limits the claim',
];
const SHORT = ['explain', 'immunity', 'assess', 'data'];
const MiniDemands: React.FC<{x: number; y: number; at: number; half?: (number | undefined)[]; full?: (number | undefined)[]}> = ({x, y, at, half = [], full = []}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{SHORT.map((s, i) => {
				const xx = x + i * 180;
				const done = full[i] !== undefined && f >= (full[i] as number);
				return (
					<g key={s}>
						<rect x={xx} y={y} width={34} height={34} rx={7} fill={done ? '#e3f3e9' : '#fffdf8'} stroke={done ? GREEN : INK_SOFT} strokeWidth={2.5} />
						{half[i] !== undefined || full[i] !== undefined ? <TickPart x={xx + 17} y={y + 18} half={half[i]} full={full[i]} /> : null}
						<T x={xx + 44} y={y + 26} text={s} size={24} hand weight={700} color={done ? GREEN : INK_SOFT} />
					</g>
				);
			})}
		</g>
	);
};
const TickPart: React.FC<{x: number; y: number; half?: number; full?: number}> = ({x, y, half, full}) => {
	const f = useCurrentFrame();
	const a = half ?? full;
	if (a === undefined || f < a) return null;
	const s = 28;
	return (
		<g>
			<DrawPath d={`M${x - s * 0.5},${y} L${x - s * 0.12},${y + s * 0.42}`} at={a} dur={6} color={GREEN} width={5} />
			{full !== undefined ? <DrawPath d={`M${x - s * 0.12},${y + s * 0.42} L${x + s * 0.55},${y - s * 0.5}`} at={Math.max(full, a + 6)} dur={8} color={GREEN} width={5} /> : null}
		</g>
	);
};
export const SceneWeakStrong: React.FC = () => {
	const f = useCurrentFrame();
	const gw = answerGeom(WB, []), gs = answerGeom(SB, []);
	const tw = [K10.describes, K10.explains, K10.explains + 36, K10.ends + 10];
	const lines: number[] = [];
	let acc = 0;
	STRONG.forEach(s => { lines.push(acc); acc += paraLines(gs, [s]); });
	const wl = partLines(gw, WEAK);
	const weakBottom = WB.y + gw.h;
	return (
		<Overlay>
			<AnswerBox spec={WB} at={K10.put} />
			<Para g={gw} line={0} color={PENCIL} parts={WEAK.map((text, i) => ({text, at: tw[i], dur: [26, 40, 34, 60][i]}))} marks={[{phrase: WEAK[3], at: K10.judgement, color: TERRA, kind: 'ring'}]} />
			<T x={WB.x + WB.w - 10} y={gw.base(wl[3] + 2) + 20} text="judgement, no evidence" size={30} hand weight={700} color={TERRA} anchor="end" o={prog(f, K10.judgement + 16, 10)} />
			<MiniDemands x={WB.x + 20} y={weakBottom + 24} at={K10.weak} half={[K10.covers, undefined, undefined, undefined]} />
			<T x={WB.x + 20} y={weakBottom + 110} text="one verb, no numbers, no reasons" size={30} hand weight={700} color={TERRA} o={prog(f, K10.numbers, 10) * (1 - 0.4 * prog(f, K10.strong, 12))} />
			<AnswerBox spec={SB} at={K10.strong - 10} />
			{STRONG.map((s, i) => (
				<Para key={i} g={gs} line={lines[i]} parts={[{text: s, at: K10.strong + 6 + i * 14, dur: 20}]} marks={[
					...(i === 2 ? [{phrase: '95 to 96%;', at: K10.values + 6, color: TEAL}, {phrase: '12 and 8)', at: K10.values + 12, color: TEAL}] : []),
					...(i === 3 ? [{phrase: '95% → 87%,', at: K10.values + 18, color: TEAL}, {phrase: '8 → 310', at: K10.values + 24, color: TEAL}] : []),
					...(i === 4 ? [{phrase: '89% → 95%,', at: K10.values + 30, color: TEAL}, {phrase: '180 → 6;', at: K10.values + 36, color: TEAL}] : []),
					...(i === 5 ? [{phrase: s, at: K10.condition, color: '#d7efe1', kind: 'hi' as const}] : []),
				]} />
			))}
			<MiniDemands x={SB.x + 20} y={SB.y + gs.h + 24} at={K10.strong} full={[K10.both, K10.kinds, K10.both + 10, K10.values]} />
			<BandMeter x={930} y={260} h={500} at={K10.same - 20} place={[
				{v: 2.5, at: K10.band, text: 'A', color: TERRA},
				{v: 6.5, at: K10.band + 8, text: 'B', color: GREEN},
			]} />
			<GreyTag x={960} y={800} text="HSCScience marking guide (illustrative)" at={K10.band} size={22} anchor="middle" />
			{void K10.judges}{void clamp01}{void GREY_INK}
		</Overlay>
	);
};
