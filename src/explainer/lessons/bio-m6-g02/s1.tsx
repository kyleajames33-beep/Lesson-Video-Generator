// M6 G02 scenes 1 to 6: the hook (NESA's biodiversity feedback quoted word for word, the judgement routine as s04's
// verdict strip, three question thumbnails) and question 1 (insect-resistant maize with a data table, assess): the
// protected attempt, the plan (verb, levels, baseline, sorting the evidence), the build (species up, crop genetic
// diversity down, resistance rising), the weighing (refuges, a conditional verdict, no ecosystem judgement) and the
// weak answer against the strong one.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {MistakeChip} from '../bio-m5-b13/shared';
import {MiniLevels} from '../bio-m6-b13/parts';
import {
	AMBER, AMBER_INK, AnswerBox, Chip, DrillCountdown, GREY, GREY_INK, GreyTag, HandLine, Heading, LostMarksTag, Overlay, PenArrow, Plate, QuestionCard, T, TEAL, WeakStrongPanel, ZONE,
	answerGeom, cardGeom, lerp, phraseAt, plateW, prog, smooth, vis,
} from '../skills-shared';
import type {Ann, ARow, AnsSpec} from '../skills-shared';
import {VerdictStrip} from '../skills-s04/pieces';
import {PL, Q1, STRIP, SX, Strip, Tags, boxUnder, done, hold, q1Spec, sc, tagY} from './common';
import {CardThumb, InsectCluster, RefugeSquares} from './parts';

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {some: 'Some of the biggest', bio: 'biodiversity,', ethics: 'ethics answers', routine: 'You have the routine', verdict: 'verdict,', criteria: 'criteria you judge', evidence: 'evidence from the', three: 'three HSC-style', plan: 'Plan each one'});
const QUOTE = '“linking the biotechnology to its effect on biodiversity, rather than its effect on the organism”';
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const shrink = K1.plan + 10;
	return (
		<>
			<Heading text="Verdict, criteria, evidence: biotechnology" at={4} size={60} out={shrink} />
			<Overlay>
				<Chip x={96} y={190} text={QUOTE} at={K1.bio} out={K1.three - 16} size={34} color={INK_Q} fill="#fffdf8" maxW={1500} />
				<GreyTag x={96} y={300} text="NESA marking feedback, Biology 2023 Q34" at={K1.bio + 12} out={K1.three - 16} size={22} />
				<GreyTag x={600} y={300} text="HSCScience advice for ethics items" at={K1.ethics} out={K1.three - 16} size={22} />
				<VerdictStrip o={prog(f, K1.verdict - 8, 10)} rows={[K1.verdict - 4, K1.criteria - 4, K1.evidence - 4, shrink + 20]} full={fr => 1 - prog(fr, shrink, 26)} fullBox={{x: 96, y: 380, w: 720}} miniBox={STRIP}
					lit={[{row: 0, from: K1.verdict, to: K1.criteria}, {row: 1, from: K1.criteria, to: K1.evidence}, {row: 2, from: K1.evidence, to: K1.three}]} />
				<GreyTag x={600} y={400} text="skills-s04" at={K1.verdict + 10} out={shrink} size={22} />
				<HandLine x={96} y={860} text="No verdict without a reason, no reason without evidence." at={K1.evidence + 20} out={shrink + 10} size={36} color={TEAL} />
				<CardThumb x={980} y={420} n={1} p={PL.maize} at={K1.three} h={140} />
				<CardThumb x={1260} y={420} n={2} p={PL.wild} at={K1.three + 8} h={140} />
				<CardThumb x={1540} y={420} n={3} p={PL.pig} at={K1.three + 16} h={120} />
				<GreyTag x={980} y={680} text="HSC-style questions, written for HSCScience" at={K1.three + 20} size={24} />
				{void K1.some}{void K1.routine}
			</Overlay>
		</>
	);
};
const INK_Q = '#2b2a28';

// ---------- 2a. Question 1 ----------
const KQ = cues(sc('q1-question'), {q: 'Question one', farming: 'A farming district', table: 'The table shows', assess: 'Assess the effect', pause: 'Pause here to answer'});
const box1 = (): AnsSpec => boxUnder(Q1, 1, 6, 44, 28);
export const SceneQ1Question: React.FC = () => {
	const h = hold('q1-question');
	const spec = q1Spec([KQ.farming, KQ.table, KQ.assess], KQ.assess + 10);
	const box = box1();
	const f = useCurrentFrame();
	const mh = 150, mw = plateW(PL.maize, mh);
	return (
		<Overlay>
			<Strip hold={h} />
			<QuestionCard spec={spec} at={KQ.q} />
			<AnswerBox spec={box} at={KQ.assess + 20} counter={{total: 6, label: true}} />
			<g opacity={prog(f, KQ.farming, 14)}><Plate p={PL.maize} x={SX + 245 - mw / 2} y={box.y + 4} h={mh} /></g>
			<DrillCountdown hold={h} at={KQ.pause} x={SX} y={box.y + 210} cx={SX + 245} cy={box.y + 300} />
		</Overlay>
	);
};

// ---------- shared Q1 walkthrough geometry ----------
const S1 = 0.75;
const box1w = (): AnsSpec => boxUnder(Q1, S1, 12, 38, 25);
const Q1_ROWS_TEXT = [
	"Species diversity increased but the crop's genetic diversity decreased, so the effect is mixed.",
	'Species level: sprays fell from 6 to 1, so fewer non-target insects were killed; insect species rose from 17 to 25.',
	"Genetic level (crop): varieties fell from 15 to 4, so the crop's gene pool narrowed and one disease could affect most of it.",
	'Pest: surviving caterpillars rising: resistance alleles becoming more common; a threat to the species gain.',
	'Limitation: refuges on only 3 in 10 farms, so resistance may spread, sprays may return and the species gain may be lost.',
	'Overall, mixed: species diversity up to a moderate extent, crop genetic diversity down;',
	'the gain lasts provided refuges are planted; more varieties with the trait would reduce the loss.',
];
/** Screen y of a table row of the shrunk Q1 card (r = 1 is the first data row). */
const q1RowY = (r: number) => {
	const g = cardGeom(Q1);
	const it = g.items[1];
	return ZONE.card.y + (it.y0 + (r + 0.5) * (it.rowH ?? 34) - ZONE.card.y) * S1;
};
const q1TableRight = () => {
	const g = cardGeom(Q1);
	const cx = g.items[1].colX ?? [0];
	return ZONE.card.x + (cx[cx.length - 1] - ZONE.card.x) * S1;
};
const LEV = {x: SX + 40, y: 575, w: 330, h: 165};
const CLUSTER = {x: SX + 250, y: 905};
const Q1Card: React.FC<{ann?: Ann[]; badgeAt?: number; s?: number | ((f: number) => number)}> = ({ann = [], badgeAt = -100, s = S1}) => (
	<QuestionCard spec={Q1} at={-100} s={s} ann={[{kind: 'verb', phrase: 'Assess', at: -100}, ...ann]}>
		<BadgeIn spec={Q1} text="Biodiversity" at={badgeAt} />
	</QuestionCard>
);
/** The question-type badge (hidden during the attempt; shown once the walkthrough starts), in card coordinates. */
export const BadgeIn: React.FC<{spec: typeof Q1; text: string; at: number}> = ({spec, text, at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const g = cardGeom(spec);
	const w = text.length * 13 + 40;
	return (
		<g opacity={o}>
			<rect x={g.x + g.w - w - 28} y={g.y + g.h - 52} width={w} height={36} rx={18} fill="#1f6fb2" />
			<T x={g.x + g.w - w / 2 - 28} y={g.y + g.h - 27} text={text} size={22} color="#fffdf8" weight={700} anchor="middle" />
		</g>
	);
};
const RowTag: React.FC<{r: number; text: string; at: number; color: string; fill: string; dashed?: boolean}> = ({r, text, at, color, fill, dashed}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 10);
	if (o <= 0.01) return null;
	const x = q1TableRight() + 12, y = q1RowY(r);
	const w = text.length * 9 + 24;
	return (
		<g opacity={o}>
			<rect x={x} y={y - 12} width={w} height={24} rx={12} fill={fill} stroke={color} strokeWidth={2} strokeDasharray={dashed ? '5 4' : undefined} />
			<T x={x + w / 2} y={y + 6} text={text} size={16} color={color} weight={700} anchor="middle" />
		</g>
	);
};

// ---------- 2b. Plan ----------
const KP = cues(sc('q1-plan'), {assess: 'Assess means', verdict: 'your verdict says', criteria: 'Your criteria', levels: 'levels:', baseline: 'The baseline', sprayed: 'sprayed maize,', sort: 'Now sort', sprays: 'Sprays and insect', varieties: 'Varieties are', genetic: "the crop's genetic level", surviving: 'Surviving caterpillars', pest: 'genetic change in the pest'});
export const SceneQ1Plan: React.FC = () => {
	const f = useCurrentFrame();
	const box = box1w();
	return (
		<>
			<Overlay>
				<Strip lit={[{row: 0, from: 0, to: KP.criteria}, {row: 1, from: KP.criteria, to: KP.sort}, {row: 2, from: KP.sort}]} />
				<Q1Card s={fr => lerp(1, S1, smooth(prog(fr, 0, 24)))} badgeAt={10}
					ann={[{kind: 'verb', phrase: 'Assess', at: 4}, {kind: 'marks', at: 14}, {kind: 'given', phrase: 'sprayed with insecticide', at: KP.sprayed}]} />
				<AnswerBox spec={box} at={20} counter={{total: 6, label: true}} />
				<Chip x={SX} y={470} text="assess: how far, which way" at={KP.assess + 10} out={KP.sort} size={30} color={AMBER_INK} fill="#fff8e6" />
				<GreyTag x={SX + 380} y={476} text="s04" at={KP.assess + 20} out={KP.sort} size={20} />
				<MiniLevels x={LEV.x} y={LEV.y} w={LEV.w} h={LEV.h} labels o={prog(f, KP.levels, 14)} marks={[{r: 0, kind: 'q', o: prog(f, KP.levels + 20, 10)}]} />
				<GreyTag x={SX} y={LEV.y + LEV.h + 16} text="b12: which level? compared with what?" at={KP.levels + 10} out={KP.sort + 40} size={20} />
				<Chip x={SX} y={LEV.y + LEV.h + 70} text="baseline: sprayed maize" at={KP.sprayed + 10} size={30} color={TEAL} fill="#d5eeea" />
				<RowTag r={1} text="species" at={KP.sprays + 4} color={TEAL} fill="#d5eeea" />
				<RowTag r={2} text="species" at={KP.sprays + 14} color={TEAL} fill="#d5eeea" />
				<RowTag r={3} text="genetic (crop)" at={KP.genetic} color="#7a4a8c" fill="#e7dcef" />
				<RowTag r={5} text="allele change (pest)" at={KP.pest} color={GREY_INK} fill="#fffdf8" dashed />
				{void KP.verdict}{void KP.baseline}{void KP.varieties}{void KP.surviving}
			</Overlay>
		</>
	);
};

// ---------- 2c. Build ----------
const KB = cues(sc('q1-build'), {bio: 'Biodiversity rose', mixed: 'is mixed.', species: 'Species:', six: 'six to one', killed: 'were killed,', seventeen: 'seventeen to', twenty: 'twenty-five.', genetic: 'Genetic:', fifteen: 'fifteen to four', disease: 'one new disease', crop: "district's crop.", surviving: 'And surviving', rising: 'rising:', threatens: 'which threatens', gain: 'species gain.'});
export const Q1_ROWS_A = (): ARow[] => [
	{text: Q1_ROWS_TEXT[0], at: KB.bio + 4, dur: KB.mixed - KB.bio + 10},
	{text: Q1_ROWS_TEXT[1], at: KB.six - 20, dur: KB.twenty - KB.six + 30, tick: KB.killed + 10},
	{text: Q1_ROWS_TEXT[2], at: KB.fifteen - 20, dur: KB.crop - KB.fifteen + 20, tick: KB.crop + 4},
	{text: Q1_ROWS_TEXT[3], at: KB.rising - 10, dur: KB.gain - KB.rising, tick: KB.gain + 6},
];
const BUILD_EXTRA = (): number[] => [KB.twenty + 20];
const RISK_TAGS = (at: number): {row: number; role: 'verdict' | 'criterion + evidence' | 'evidence'; at: number}[] => [
	{row: 0, role: 'verdict', at: at < 0 ? -100 : KB.bio + 20},
	{row: 1, role: 'criterion + evidence', at: at < 0 ? -100 : KB.species},
	{row: 2, role: 'criterion + evidence', at: at < 0 ? -100 : KB.genetic},
	{row: 3, role: 'evidence', at: at < 0 ? -100 : KB.rising},
];
export const SceneQ1Build: React.FC = () => {
	const f = useCurrentFrame();
	const box = box1w();
	const rows = Q1_ROWS_A();
	const g = answerGeom(box, rows);
	const nIns = lerp(3, 10, smooth(prog(f, KB.killed, 60)));
	return (
		<Overlay>
			<Strip lit={[{row: 0, from: 0, to: KB.species}, {row: 1, from: KB.species, to: KB.six}, {row: 2, from: KB.six, to: KB.genetic}, {row: 1, from: KB.genetic, to: KB.fifteen}, {row: 2, from: KB.fifteen}]} />
			<Q1Card ann={[{kind: 'given', phrase: 'sprayed with insecticide', at: -100},
				{kind: 'given', phrase: '6', at: KB.six, color: AMBER}, {kind: 'given', phrase: '1', occ: 1, at: KB.six + 8, color: AMBER},
				{kind: 'given', phrase: '17', at: KB.seventeen, color: AMBER}, {kind: 'given', phrase: '25', at: KB.twenty, color: AMBER},
				{kind: 'given', phrase: '15', at: KB.fifteen, color: AMBER}, {kind: 'given', phrase: '4', at: KB.fifteen + 10, color: AMBER},
				{kind: 'given', phrase: 'rising since year 8', at: KB.rising, color: AMBER}]} />
			<AnswerBox spec={box} at={-100} counter={{total: 6, label: true, extra: BUILD_EXTRA()}} rows={rows}
				dimRows={[{rows: [0], at: KB.six - 20}, {rows: [1], at: KB.fifteen - 20}, {rows: [2], at: KB.rising - 10}]} />
			<Tags g={g} tags={RISK_TAGS(0)} />
			<Chip x={TAG_X0} y={tagY(g, 0, -1)} text="condition to come" at={KB.mixed + 6} size={18} color={GREY} fill="#fffdf8" hand={false} anchor="end" textColor={GREY_INK} />
			<MiniLevels x={LEV.x} y={LEV.y} w={LEV.w} h={LEV.h} labels marks={[{r: 0, kind: 'q'}, {r: 2, kind: 'down', o: prog(f, KB.fifteen + 20, 10)}]} lit={[0, 0, vis(f, KB.fifteen, KB.surviving, 8)]} />
			<GreyTag x={SX} y={LEV.y + LEV.h + 16} text="b12: the banana problem returns" at={KB.fifteen + 24} out={KB.surviving} size={20} />
			<InsectCluster x={CLUSTER.x} y={CLUSTER.y} n={nIns} o={prog(f, KB.species, 14)} />
			<GreyTag x={SX} y={CLUSTER.y + 118} text="fewer sprays: more species" at={KB.killed + 10} out={KB.genetic} size={20} />
			<GreyTag x={SX} y={LEV.y + LEV.h + 16} text="allele frequency, not lost diversity" at={KB.rising + 20} out={KB.threatens} size={20} />
			<PenArrow a={[box.x + box.w + 8, g.base(g.rows[3].first) - 10]} b={[CLUSTER.x - 150, CLUSTER.y - 40]} at={KB.threatens} color={GREY_INK} dash bow={-30} />
			<GreyTag x={SX} y={CLUSTER.y + 118} text="threatens the species gain" at={KB.threatens + 10} size={20} />
			{void KB.disease}{void KB.surviving}
		</Overlay>
	);
};
const TAG_X0 = 318;

// ---------- 2d. Weigh ----------
const KW = cues(sc('q1-weigh'), {three: 'three farms in ten', spreading: 'keep spreading', returns: 'spraying returns', lost: 'could be lost', loop: 'close the loop', overall: 'Overall,', mixed: 'mixed:', provided: 'provided refuges', more: 'more varieties', loss: 'reduce the loss', eco: 'Ecosystem effects', invent: 'invent them'});
export const Q1_ROWS_B = (): ARow[] => [
	{text: Q1_ROWS_TEXT[4], at: KW.three + 30, dur: KW.lost - KW.three, tick: KW.lost + 20},
	{text: Q1_ROWS_TEXT[5], at: KW.mixed, dur: KW.provided - KW.mixed - 20},
	{text: Q1_ROWS_TEXT[6], at: KW.provided, dur: KW.loss - KW.provided + 10, tick: KW.loss + 14},
];
export const Q1_ALL = (): ARow[] => [...done(Q1_ROWS_A()), ...Q1_ROWS_B()];
export const SceneQ1Weigh: React.FC = () => {
	const f = useCurrentFrame();
	const box = box1w();
	const rows = Q1_ALL();
	const g = answerGeom(box, rows);
	const nIns = 10 - 3 * smooth(prog(f, KW.returns, 24));
	const loopAt = KW.loss + 18;
	const mh = 100, mw = plateW(PL.maize, mh);
	return (
		<Overlay>
			<Strip lit={[{row: 2, from: 0, to: KW.loop}, {row: 3, from: KW.loop, to: loopAt + 60}]} />
			<Q1Card ann={[{kind: 'given', phrase: 'sprayed with insecticide', at: -100}, {kind: 'given', phrase: '3 in 10', at: KW.three, color: AMBER}]} />
			<AnswerBox spec={box} at={-100} counter={{total: 6, label: true, extra: BUILD_EXTRA().map(() => -1000)}} rows={rows}
				dimRows={[{rows: [0, 1, 2, 3], at: -100}, {rows: [4], at: KW.mixed}, {rows: [5], at: KW.provided}]} />
			<Tags g={g} tags={[...RISK_TAGS(-1), {row: 4, role: 'limitation', at: KW.three + 30}, {row: 5, role: 'verdict', at: KW.mixed + 6}, {row: 6, role: 'condition', at: KW.provided + 6}]} />
			<g opacity={1 - prog(f, loopAt, 10)}><Chip x={TAG_X0} y={tagY(g, 0, -1)} text="condition to come" at={-100} size={18} color={GREY} fill="#fffdf8" hand={false} anchor="end" textColor={GREY_INK} /></g>
			<Chip x={TAG_X0} y={tagY(g, 0, -1)} text="condition" at={loopAt + 8} size={18} color={AMBER} fill="#fffdf8" hand={false} anchor="end" textColor={AMBER_INK} />
			<PenArrow a={[box.x + box.w + 10, g.base(g.rows[5].first) - 10]} b={[box.x + box.w + 10, g.base(g.rows[0].first) - 10]} at={loopAt} color={AMBER_INK} bow={-60} />
			<MiniLevels x={LEV.x} y={LEV.y} w={LEV.w} h={LEV.h} labels marks={[{r: 0, kind: 'q', o: 1}, {r: 2, kind: 'down'}]} lit={[Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - KW.eco) / 40)) * Math.PI)), 0, 0]} />
			<GreyTag x={SX} y={LEV.y + LEV.h + 16} text="no data: not judged" at={KW.eco + 6} size={20} />
			<g opacity={prog(f, KW.three, 12)}>
				<Plate p={PL.maize} x={SX + 20} y={LEV.y - 118} h={mh} />
				<RefugeSquares x={SX + 30 + mw} y={LEV.y - 108} p={prog(f, KW.three + 10, 20)} />
			</g>
			<InsectCluster x={CLUSTER.x} y={CLUSTER.y} n={nIns} dashed={prog(f, KW.returns, 14)} />
			<GreyTag x={SX} y={CLUSTER.y + 118} text="gain reversible" at={KW.returns + 10} out={KW.overall} size={20} />
			{void KW.spreading}{void KW.more}{void KW.invent}
		</Overlay>
	);
};

// ---------- 2e. Weak against strong ----------
const KK = cues(sc('q1-weak'), {weaker: 'a weaker answer', quote: 'The maize is good', kills: 'kills caterpillars', bigger: 'bigger harvests', pests: 'pests could become', organism: 'organism and the farm', names: 'never names', data: 'uses no data', verdict: 'no real verdict'});
const WEAK = 'The maize is good because it kills caterpillars and gives bigger harvests, but pests could become resistant.';
export const SceneQ1Weak: React.FC = () => {
	const f = useCurrentFrame();
	const strong = box1w();
	const weak: AnsSpec = {x: ZONE.box.x, y: strong.y, w: ZONE.box.w, lines: 3, lh: 52, size: 32};
	const wrows: ARow[] = [{text: WEAK, at: KK.quote, dur: KK.pests - KK.quote + 30}];
	const wg = answerGeom(weak, wrows);
	const slotY = wg.y + wg.h + 30;
	const slots: [string, number, number][] = [['which level?', weak.x, KK.names + 10], ['data?', weak.x + 300, KK.data], ['verdict?', weak.x + 520, KK.verdict]];
	return (
		<Overlay>
			<Strip />
			<Q1Card />
			<WeakStrongPanel
				strong={{spec: strong, rows: Q1_ALL().map((r, i) => (i === 0 ? {...r, tick: -1000} : r)), total: 6, to: {x: SX + 10, y: strong.y, s: 0.48}, moveAt: 2, dim: 0.7}}
				weak={{spec: weak, rows: wrows, total: 6, at: KK.weaker, ann: [
					{kind: 'ring', row: 0, phrase: 'kills caterpillars', at: KK.organism, color: GREY},
					{kind: 'ring', row: 0, phrase: 'bigger harvests,', at: KK.organism + 8, color: GREY},
					{kind: 'tick', row: 0, phrase: 'pests could become resistant.', at: KK.pests + 40},
				]}} />
			<GreyTag x={weak.x + 680} y={slotY + 10} text="organism, not biodiversity" at={KK.organism + 14} size={22} />
			{slots.map(([t, x, at]) => (
				<g key={t} opacity={vis(f, at)}>
					<rect x={x} y={slotY} width={t.length * 15 + 40} height={56} rx={12} fill="none" stroke={GREY} strokeWidth={2.5} strokeDasharray="6 7" />
					<T x={x + 20} y={slotY + 38} text={t} size={30} hand weight={700} color={GREY_INK} />
				</g>
			))}
			<LostMarksTag x={weak.x} y={slotY + 80} text="−5: no biodiversity level, no data, no judgement" at={KK.data + 10} maxW={960} />
			<MistakeChip x={weak.x} y={slotY + 170} text="bigger harvests = more biodiversity" at={KK.verdict + 14} cross={KK.verdict + 34} size={30} />
			<GreyTag x={weak.x} y={slotY + 248} text="b19: a gain in harvest isn't a gain in biodiversity" at={KK.verdict + 40} size={20} />
			{void KK.kills}{void KK.bigger}{void phraseAt}{void AMBER}
		</Overlay>
	);
};
