// M6 G02 scenes 7 to 10: question 2 (cloning a rare wild sheep from frozen cells, evaluate with three given
// criteria): the protected attempt; the mechanism and genetic diversity (clones of ten donors return lost alleles to
// the gene pool; count the donors, not the clones; mitochondria mainly from the domestic egg); welfare (2 in 100), the
// alternative (habitat protection cannot restore lost alleles) and the conditional verdict; the crossed classic
// mistake. Quality fix (6 Nov): full-width 32 px card (only the items each step needs), no side rail, the answer
// staged one part at a time (big.tsx), side visuals at x 1320 with 26 to 34 px labels.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AMBER_INK, AnswerBox, Chip, DrillCountdown, GREY_INK, GreyTag, Overlay, Plate, QuestionCard, T, TEAL, cardGeom, lerp, plateW, prog, smooth, vis} from '../skills-shared';
import type {Ann, AnsSpec, CardSpec} from '../skills-shared';
import {PL, Q2, hold, q2Spec, sc} from './common';
import {BadgeIn, prior} from './s1';
import {CrossedGrey, EggG, EmbryoGrid, POOL_C, Pool} from './parts';
import {CX, PANEL_W, SX2, StagedAnswer, cardBottom, sub} from './big';
import type {SRow} from './big';

/** Plates in the card's right slot (card coordinates): the wild sheep and the cell store for item 0, the domestic
 * sheep for item 1. */
const SheepSlot: React.FC<{spec: CardSpec; wild?: number; store?: number; white?: number}> = ({spec, wild, store, white}) => {
	const f = useCurrentFrame();
	const g = cardGeom(spec);
	const x0 = g.slot.x, y0 = g.slot.y, sw = g.slot.w;
	const wh = 112, ww = plateW(PL.wild, wh);
	const sh = 92, stw = plateW(PL.store, sh);
	const dh = white !== undefined && wild === undefined ? 140 : 100, dw = plateW(PL.white, dh);
	const lowY = wild === undefined ? y0 + 6 : y0 + wh + 22;
	return (
		<g>
			{wild !== undefined ? <g opacity={prog(f, wild, 14)}><Plate p={PL.wild} x={x0 + (sw - ww) / 2} y={y0 + 4} h={wh} /></g> : null}
			{store !== undefined ? (
				<g opacity={prog(f, store, 14)}>
					<Plate p={PL.store} x={x0 + sw - stw - 30} y={lowY} h={sh} />
					<T x={x0 + sw - stw / 2 - 30} y={lowY + sh + 28} text="cell store" size={24} color={GREY_INK} weight={700} anchor="middle" />
				</g>
			) : null}
			{white !== undefined ? (
				<g opacity={prog(f, white, 14)}>
					<Plate p={PL.white} x={wild === undefined ? x0 + (sw - dw) / 2 : x0 + sw - dw - 6} y={lowY} h={dh} />
					<T x={wild === undefined ? x0 + sw / 2 : x0 + sw - dw / 2 - 6} y={lowY + dh + 28} text="domestic sheep" size={24} color={GREY_INK} weight={700} anchor="middle" />
				</g>
			) : null}
		</g>
	);
};

// ---------- 3a. Question 2 ----------
const KQ = cues(sc('q2-question'), {q: 'Question two', rare: 'A rare wild', cell: 'A cell bank', frozen: 'frozen skin cells', scientists: 'Scientists plan', domestic: 'domestic sheep', evaluate: 'Evaluate this plan', refer: 'Refer to genetic', pause: 'Pause here to answer'});
export const SceneQ2Question: React.FC = () => {
	const h = hold('q2-question');
	const spec = q2Spec([KQ.rare, KQ.scientists, KQ.evaluate], KQ.evaluate + 10);
	const by = cardBottom(Q2) + 20;
	const box: AnsSpec = {x: CX, y: by, w: PANEL_W, lines: Math.max(3, Math.floor((1050 - by - 66) / 50)), lh: 50, size: 30};
	return (
		<Overlay>
			<QuestionCard spec={spec} at={KQ.q}><SheepSlot spec={spec} wild={KQ.rare} store={KQ.frozen} white={KQ.domestic} /></QuestionCard>
			<AnswerBox spec={box} at={KQ.evaluate + 20} counter={{total: 7}} />
			<DrillCountdown hold={h} at={KQ.pause} x={SX2} y={by + 60} cx={SX2 + 270} cy={by + 170} r={52} />
			{void KQ.cell}{void KQ.refer}
		</Overlay>
	);
};

// ---------- shared walkthrough geometry ----------
const Q2_TEXT = [
	"Mechanism: each clone's nuclear DNA matches its donor, so it carries that donor's alleles.",
	'Genetic diversity: clones of 10 donors carry alleles lost from the herd; bred into the herd, they widen the gene pool.',
	'Limit: diversity gained depends on the number of donors; mitochondrial DNA comes mainly from domestic sheep.',
	'Welfare: only about 2 in 100 embryos give a lamb, so many surrogate ewes undergo embryo transfer and failed pregnancies.',
	'Alternative: managed breeding and habitat protection remove threats, but cannot restore lost alleles.',
	'Overall, worthwhile to a moderate extent as a small trial alongside habitat protection,',
	'provided the clones survive and breed into the herd.',
];
const Q2_SHORT = [
	"Mechanism: clone has its donor's nuclear DNA",
	'Diversity: 10 donors return lost alleles',
	'Limit: count donors; mtDNA from the egg',
	'Welfare: 2 in 100 embryos give a lamb',
	"Alternative: habitat can't restore alleles",
	'Overall: worthwhile, moderate, small trial',
	'Condition: clones survive and breed in',
];
const CONSTRAINTS: Ann[] = [{kind: 'verb', phrase: 'Evaluate', at: -100}, {kind: 'constraint', phrase: 'genetic diversity,', at: -100}, {kind: 'constraint', phrase: 'animal welfare', at: -100}, {kind: 'constraint', phrase: 'one alternative.', at: -100}];
const Q2G = sub(Q2, [0, 2]);
const Q2W = sub(Q2, [1, 2]);
const FOUNDERS = [0, 1, 2, 3, 4, 5, 6, 7];
const RETURNING = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

/** Frozen cell, then its nucleus into an emptied domestic egg, then the clone; `t` 0..1 (large labels). */
const NTStripL: React.FC<{x: number; y: number; t: number; o?: number}> = ({x, y, t, o = 1}) => {
	if (o <= 0.01) return null;
	const mv = smooth(Math.min(1, t * 1.6));
	const nx = lerp(x + 44, x + 250, mv);
	return (
		<g opacity={o}>
			<T x={x + 44} y={y - 62} text="frozen cell" size={26} color={GREY_INK} weight={700} anchor="middle" />
			<circle cx={x + 44} cy={y} r={44} fill="#e8f1f7" stroke="#7d93a6" strokeWidth={3} />
			<circle cx={x + 250} cy={y} r={62} fill="#fbf1e2" stroke="#b38a5a" strokeWidth={3} />
			<T x={x + 250} y={y + 94} text="domestic egg, nucleus out" size={26} color={GREY_INK} weight={700} anchor="middle" />
			<circle cx={nx} cy={y} r={18} fill="#8e6bb3" stroke="#5b3f7a" strokeWidth={2} />
			{t > 0.7 ? <g opacity={prog(t * 100, 70, 20)}>
				<path d={`M${x + 326},${y} l44,0 m-11,-9 l11,9 l-11,9`} fill="none" stroke={GREY_INK} strokeWidth={3.5} />
				<circle cx={x + 430} cy={y} r={34} fill="#fbf1e2" stroke="#b38a5a" strokeWidth={3} />
				<circle cx={x + 430} cy={y} r={12} fill="#8e6bb3" />
				<T x={x + 430} y={y - 50} text="clone" size={26} color={GREY_INK} weight={700} anchor="middle" />
			</g> : null}
		</g>
	);
};

// ---------- 3b. Mechanism, then genetic diversity ----------
const KG = cues(sc('q2-genetic'), {evaluate: 'Evaluate,', hands: 'hands you three criteria', first: 'First, the mechanism', each: "each clone's nuclear", donor: 'cell donor,', now: 'Now genetic diversity', clones: 'Clones of ten', lost: 'has lost,', breed: 'breed with living', pool: 'gene pool', count: 'count the donors', ten: 'Ten clones of one', nomore: 'no more alleles'});
export const Q2_ROWS_A = (): SRow[] => [
	{text: Q2_TEXT[0], short: Q2_SHORT[0], at: KG.each, dur: KG.now - KG.each - 30, tick: KG.now - 10, role: 'evidence'},
	{text: Q2_TEXT[1], short: Q2_SHORT[1], at: KG.clones, dur: KG.pool - KG.clones + 10, tick: KG.pool + 20, role: 'criterion + evidence'},
	{text: Q2_TEXT[2], short: Q2_SHORT[2], at: KG.nomore - 10, dur: 70, tick: KG.nomore + 64, role: 'limitation'},
];
export const SceneQ2Genetic: React.FC = () => {
	const f = useCurrentFrame();
	const py = cardBottom(Q2G) + 20;
	const ntO = vis(f, KG.first, KG.pool + 40, 14);
	const sideO = vis(f, KG.count, KG.nomore, 12);
	const mito = vis(f, KG.nomore + 4, undefined, 12);
	const PO = {x: SX2 + 30, y: py + 384};
	return (
		<Overlay>
			<QuestionCard spec={Q2G} at={-100}
				ann={[{kind: 'verb', phrase: 'Evaluate', at: 4}, {kind: 'marks', at: 14}, {kind: 'constraint', phrase: 'genetic diversity,', at: KG.hands}, {kind: 'constraint', phrase: 'animal welfare', at: KG.hands + 8}, {kind: 'constraint', phrase: 'one alternative.', at: KG.hands + 16},
					{kind: 'given', phrase: '8 founders.', at: KG.first + 20}, {kind: 'given', phrase: 'no longer found in the living population.', at: KG.lost - 10}, {kind: 'given', phrase: '10 wild sheep', at: KG.lost}]}>
				<SheepSlot spec={Q2G} wild={-100} store={-100} />
				<BadgeIn spec={Q2G} text="Cloning" at={10} />
			</QuestionCard>
			<StagedAnswer y={py} rows={Q2_ROWS_A()} total={7} />
			<Chip x={SX2} y={py + 6} text="evaluate: against criteria" at={10} out={KG.first} size={34} color={AMBER_INK} fill="#fff8e6" />
			<NTStripL x={SX2 + 10} y={py + 120} t={prog(f, KG.first + 10, 60)} o={ntO} />
			<GreyTag x={SX2} y={py + 240} text="the clone matches the nucleus donor" at={KG.donor} out={KG.pool + 40} size={26} />
			<T x={SX2} y={PO.y - 40} text="herd gene pool" size={32} color={INK_E} hand weight={700} o={prog(f, KG.first + 20, 12)} />
			<Pool x={PO.x} y={PO.y} cols={[...FOUNDERS, ...RETURNING]} per={9} r={15} at={[...FOUNDERS.map((_, i) => KG.first + 20 + i * 3), ...RETURNING.map((_, i) => KG.lost + 6 + i * 6)]} />
			<GreyTag x={SX2} y={PO.y + 84} text="lost alleles return" at={KG.lost + 40} out={KG.count} size={28} />
			{/* count the donors: ten clones of one donor add one colour */}
			<g opacity={sideO}>
				<T x={SX2} y={py + 40} text="10 clones of 1 donor:" size={30} color={INK_E} hand weight={700} />
				{Array.from({length: 10}, (_, i) => <circle key={i} cx={SX2 + 22 + i * 40} cy={py + 82} r={14} fill="none" stroke={POOL_C[9]} strokeWidth={7} />)}
				<path d={`M${SX2 + 200},${py + 104} l0,26 m-9,-9 l9,9 l9,-9`} fill="none" stroke={GREY_INK} strokeWidth={3} />
				<Pool x={SX2 + 30} y={py + 160} cols={[...FOUNDERS, 9]} per={9} r={14} />
				<T x={SX2} y={py + 214} text="one new colour only" size={28} color={GREY_INK} hand weight={700} />
			</g>
			<Chip x={SX2} y={py + 232} text="count the donors, not the clones" at={KG.count + 10} out={KG.nomore} size={32} color={TEAL} fill="#d5eeea" />
			{/* mitochondria from the domestic egg */}
			<g opacity={mito}>
				<EggG x={SX2 + 70} y={py + 90} r={42} />
				<T x={SX2 + 70} y={py + 30} text="domestic egg" size={26} color={GREY_INK} weight={700} anchor="middle" />
				<circle cx={lerp(SX2 + 80, SX2 + 330, smooth(prog(f, KG.nomore + 14, 30)))} cy={py + 90} r={8} fill="#c4632e" />
				<EggG x={SX2 + 340} y={py + 90} r={36} nucleus="#8e6bb3" />
				<T x={SX2 + 340} y={py + 30} text="clone" size={26} color={GREY_INK} weight={700} anchor="middle" />
			</g>
			<GreyTag x={SX2} y={py + 160} text="mtDNA: mainly domestic sheep" at={KG.nomore + 20} size={28} />
			{void KG.evaluate}{void KG.breed}{void KG.ten}
		</Overlay>
	);
};

// ---------- 3c. Welfare, alternative, verdict ----------
const KW = cues(sc('q2-welfare'), {welfare: 'Next, welfare', two: 'two in a hundred', many: 'many domestic ewes', lost: 'are lost,', high: 'is high', alt: 'Then the alternative', habitat: 'habitat.', removes: 'That removes', cant: "can't bring back", verdict: 'the verdict', worth: 'is worth it', provided: 'provided the clones', herd: 'into the herd'});
export const Q2_ROWS_B = (): SRow[] => [
	{text: Q2_TEXT[3], short: Q2_SHORT[3], at: KW.many - 10, dur: KW.high - KW.many + 20, tick: KW.high + 20, role: 'criterion + evidence'},
	{text: Q2_TEXT[4], short: Q2_SHORT[4], at: KW.removes, dur: KW.cant - KW.removes + 40, tick: KW.cant + 60, role: 'criterion + evidence'},
	{text: Q2_TEXT[5], short: Q2_SHORT[5], at: KW.worth - 10, dur: KW.provided - KW.worth - 10, tick: KW.provided - 10, role: 'verdict'},
	{text: Q2_TEXT[6], short: Q2_SHORT[6], at: KW.provided, dur: 60, tick: KW.herd + 14, role: 'condition'},
];
export const Q2_ALL = (): SRow[] => [...prior(Q2_ROWS_A()), ...Q2_ROWS_B()];
export const SceneQ2Welfare: React.FC = () => {
	const f = useCurrentFrame();
	const py = cardBottom(Q2W) + 20;
	const glowNew = (i: number) => (i >= 8 ? vis(f, KW.cant, KW.verdict + 30, 10) : 0);
	const wh = 100, ww = plateW(PL.white, wh);
	return (
		<Overlay>
			<QuestionCard spec={Q2W} at={-100} ann={[...CONSTRAINTS, {kind: 'given', phrase: 'about 2 of every 100 embryos', at: KW.two}, {kind: 'ring', phrase: 'one alternative.', at: KW.habitat}]}>
				<SheepSlot spec={Q2W} white={-100} />
				<BadgeIn spec={Q2W} text="Cloning" at={-100} />
			</QuestionCard>
			<StagedAnswer y={py} rows={Q2_ALL()} total={7} loop={{from: 6, to: 5, at: KW.herd + 20}} />
			<EmbryoGrid x={SX2 + 16} y={py + 24} p={1} amber={0} o={0.35 * prog(f, 0, 12) * (1 - prog(f, KW.two + 20, 10))} />
			<EmbryoGrid x={SX2 + 16} y={py + 24} p={prog(f, KW.two, 30)} amber={prog(f, KW.two + 30, 10)} o={1 - 0.5 * prog(f, KW.alt, 14)} />
			<T x={SX2 + 280} y={py + 160} text="100 embryos" size={30} color={GREY_INK} hand weight={700} o={vis(f, 6, KW.many - 6, 12)} />
			<T x={SX2 + 280} y={py + 40} text="2 lambs" size={34} color={AMBER_INK} hand weight={700} o={prog(f, KW.two + 34, 10)} />
			<T x={SX2 + 280} y={py + 80} text="98 fail" size={34} color={GREY_INK} hand weight={700} o={prog(f, KW.two + 40, 10)} />
			<g opacity={prog(f, KW.many - 6, 14) * (1 - 0.5 * prog(f, KW.alt, 14))}><Plate p={PL.white} x={SX2 + 280} y={py + 100} h={wh} /></g>
			<T x={SX2 + 280 + ww / 2} y={py + 232} text="surrogate ewes" size={26} color={GREY_INK} weight={700} anchor="middle" o={prog(f, KW.many, 12) * (1 - 0.5 * prog(f, KW.alt, 14))} />
			{/* the alternative: a breeding-plan doodle and a landscape outline */}
			<g opacity={vis(f, KW.habitat - 6)}>
				{[0, 1, 2].map(i => <circle key={i} cx={SX2 + 30 + i * 38} cy={py + 300} r={16} fill="none" stroke={TEAL} strokeWidth={5} />)}
				<path d={`M${SX2 + 170},${py + 326} L${SX2 + 230},${py + 266} L${SX2 + 268},${py + 302} L${SX2 + 318},${py + 254} L${SX2 + 400},${py + 326} Z`} fill="#eef3e2" stroke="#7c9a5a" strokeWidth={3} />
				<T x={SX2} y={py + 370} text="breeding plan + habitat" size={30} color={INK_E} hand weight={700} />
			</g>
			<Pool x={SX2 + 30} y={py + 420} cols={[...FOUNDERS, ...RETURNING]} per={9} r={14} glow={glowNew} o={0.55 + 0.45 * vis(f, KW.cant - 6, KW.verdict + 30, 10)} />
			<GreyTag x={SX2} y={py + 480} text="only the frozen cells hold these" at={KW.cant + 10} out={KW.verdict + 30} size={26} />
			{void KW.welfare}{void KW.lost}{void KW.alt}
		</Overlay>
	);
};

// ---------- 3d. The classic mistake ----------
const KM = cues(sc('q2-mistake'), {classic: 'The classic mistake', mistake: 'mistake is', identical: 'identical to its donor', herd: 'not to the herd', here: 'Here, the donors'});
export const SceneQ2Mistake: React.FC = () => {
	const f = useCurrentFrame();
	const py = cardBottom(Q2G) + 20;
	return (
		<Overlay>
			<QuestionCard spec={Q2G} at={-100} ann={CONSTRAINTS}><SheepSlot spec={Q2G} wild={-100} store={-100} /><BadgeIn spec={Q2G} text="Cloning" at={-100} /></QuestionCard>
			<StagedAnswer y={py} rows={prior(Q2_ALL())} total={7} dimAll={1} />
			<CrossedGrey x={SX2} y={py + 6} text="clones are identical, so cloning can't add diversity" at={2} cross={KM.mistake} size={34} maxW={530} />
			<g opacity={vis(f, KM.identical - 4)}>
				<circle cx={SX2 + 50} cy={py + 230} r={30} fill="none" stroke={POOL_C[12]} strokeWidth={9} />
				<T x={SX2 + 50} y={py + 296} text="donor" size={28} color={GREY_INK} weight={700} anchor="middle" />
				<T x={SX2 + 120} y={py + 246} text="=" size={48} color={INK_E} weight={800} anchor="middle" />
				<circle cx={SX2 + 190} cy={py + 230} r={30} fill="none" stroke={POOL_C[12]} strokeWidth={9} />
				<T x={SX2 + 190} y={py + 296} text="clone" size={28} color={GREY_INK} weight={700} anchor="middle" />
			</g>
			<g opacity={vis(f, KM.herd - 4)}>
				<T x={SX2 + 300} y={py + 186} text="herd" size={28} color={GREY_INK} weight={700} />
				<Pool x={SX2 + 310} y={py + 220} cols={FOUNDERS} per={4} r={14} />
			</g>
			<Chip x={SX2} y={py + 330} text="same as donor, new to the herd" at={KM.herd + 10} size={32} color={TEAL} fill="#d5eeea" maxW={540} />
			{void KM.classic}{void KM.here}
		</Overlay>
	);
};
const INK_E = '#2b2a28';
