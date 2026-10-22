// M6 G02 scenes 7 to 10: question 2 (cloning a rare wild sheep from frozen cells, evaluate with three given
// criteria): the protected attempt; the mechanism and genetic diversity (clones of ten donors return lost alleles to
// the gene pool; count the donors, not the clones; mitochondria mainly from the domestic egg); welfare (2 in 100), the
// alternative (habitat protection cannot restore lost alleles) and the conditional verdict; the crossed classic
// mistake.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AMBER_INK, AnswerBox, Chip, DrillCountdown, GREY, GREY_INK, GreyTag, Overlay, PenArrow, Plate, QuestionCard, T, TEAL, answerGeom, cardGeom, lerp, plateW, prog, smooth, vis} from '../skills-shared';
import type {Ann, ARow, AnsSpec, CardSpec} from '../skills-shared';
import {miniRowY} from '../skills-s04/pieces';
import {PL, Q2, STRIP, SX, Strip, Tags, boxUnder, done, hold, q2Spec, sc} from './common';
import {BadgeIn} from './s1';
import {CrossedGrey, EggG, EmbryoGrid, NTStrip, POOL_C, Pool} from './parts';

/** The three plates in the card's right slot (card coordinates). */
const SheepSlot: React.FC<{spec: CardSpec; t: [number, number, number]}> = ({spec, t}) => {
	const f = useCurrentFrame();
	const g = cardGeom(spec);
	const x0 = g.slot.x, y0 = g.slot.y;
	const wh = 100, ww = plateW(PL.wild, wh);
	const sh = 84, sw = plateW(PL.store, sh);
	const dh = 84, dw = plateW(PL.white, dh);
	return (
		<g>
			<g opacity={prog(f, t[0], 14)}><Plate p={PL.wild} x={x0 + (g.slot.w - ww) / 2} y={y0 + 6} h={wh} /></g>
			<g opacity={prog(f, t[1], 14)}>
				<Plate p={PL.store} x={x0 + 4} y={y0 + 140} h={sh} />
				<T x={x0 + 4 + sw / 2} y={y0 + 246} text="cell store" size={18} color={GREY_INK} weight={700} anchor="middle" />
			</g>
			<g opacity={prog(f, t[2], 14)}>
				<Plate p={PL.white} x={x0 + g.slot.w - dw - 4} y={y0 + 140} h={dh} />
				<T x={x0 + g.slot.w - dw / 2 - 4} y={y0 + 246} text="domestic sheep" size={18} color={GREY_INK} weight={700} anchor="middle" />
			</g>
		</g>
	);
};

// ---------- 3a. Question 2 ----------
const KQ = cues(sc('q2-question'), {q: 'Question two', rare: 'A rare wild', cell: 'A cell bank', frozen: 'frozen skin cells', scientists: 'Scientists plan', domestic: 'domestic sheep', evaluate: 'Evaluate this plan', refer: 'Refer to genetic', pause: 'Pause here to answer'});
export const SceneQ2Question: React.FC = () => {
	const h = hold('q2-question');
	const spec = q2Spec([KQ.rare, KQ.scientists, KQ.evaluate], KQ.evaluate + 10);
	const box: AnsSpec = boxUnder(Q2, 1, 6, 44, 28);
	return (
		<Overlay>
			<Strip hold={h} />
			<QuestionCard spec={spec} at={KQ.q}><SheepSlot spec={spec} t={[KQ.rare, KQ.frozen, KQ.domestic]} /></QuestionCard>
			<AnswerBox spec={box} at={KQ.evaluate + 20} counter={{total: 7, label: true}} />
			<DrillCountdown hold={h} at={KQ.pause} x={SX} y={box.y + 70} cx={SX + 245} cy={box.y + 200} />
			{void KQ.cell}{void KQ.refer}
		</Overlay>
	);
};

// ---------- shared walkthrough geometry ----------
const S2 = 0.66;
const box2 = (): AnsSpec => boxUnder(Q2, S2, 12, 40, 26);
const Q2_TEXT = [
	"Mechanism: each clone's nuclear DNA matches its donor, so it carries that donor's alleles.",
	'Genetic diversity: clones of 10 donors carry alleles lost from the herd; bred into the herd, they widen the gene pool.',
	'Limit: diversity gained depends on the number of donors; mitochondrial DNA comes mainly from domestic sheep.',
	'Welfare: only about 2 in 100 embryos give a lamb, so many surrogate ewes undergo embryo transfer and failed pregnancies.',
	'Alternative: managed breeding and habitat protection remove threats, but cannot restore lost alleles.',
	'Overall, worthwhile to a moderate extent as a small trial alongside habitat protection,',
	'provided the clones survive and breed into the herd.',
];
const Q2Card: React.FC<{ann?: Ann[]; s?: number | ((f: number) => number); badgeAt?: number}> = ({ann = [], s = S2, badgeAt = -100}) => (
	<QuestionCard spec={Q2} at={-100} s={s} ann={[{kind: 'verb', phrase: 'Evaluate', at: -100}, {kind: 'constraint', phrase: 'genetic diversity,', at: -100}, {kind: 'constraint', phrase: 'animal welfare', at: -100}, {kind: 'constraint', phrase: 'one alternative.', at: -100}, ...ann]}>
		<SheepSlot spec={Q2} t={[-100, -100, -100]} />
		<BadgeIn spec={Q2} text="Cloning" at={badgeAt} />
	</QuestionCard>
);
const FOUNDERS = [0, 1, 2, 3, 4, 5, 6, 7];
const RETURNING = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const POOL = {x: SX + 50, y: 720};

// ---------- 3b. Mechanism, then genetic diversity ----------
const KG = cues(sc('q2-genetic'), {evaluate: 'Evaluate,', hands: 'hands you three criteria', first: 'First, the mechanism', each: "each clone's nuclear", donor: 'cell donor,', now: 'Now genetic diversity', clones: 'Clones of ten', lost: 'has lost,', breed: 'breed with living', pool: 'gene pool', count: 'count the donors', ten: 'Ten clones of one', nomore: 'no more alleles'});
export const Q2_ROWS_A = (): ARow[] => [
	{text: Q2_TEXT[0], at: KG.each, dur: KG.now - KG.each - 30, tick: KG.now - 10},
	{text: Q2_TEXT[1], at: KG.clones, dur: KG.pool - KG.clones + 10, tick: KG.pool + 20},
	{text: Q2_TEXT[2], at: KG.nomore - 10, dur: 70, tick: KG.nomore + 64},
];
const TAGS_A = (live: boolean): {row: number; role: 'evidence' | 'criterion + evidence' | 'limitation'; at: number}[] => [
	{row: 0, role: 'evidence', at: live ? KG.each : -100},
	{row: 1, role: 'criterion + evidence', at: live ? KG.clones : -100},
	{row: 2, role: 'limitation', at: live ? KG.nomore : -100},
];
export const SceneQ2Genetic: React.FC = () => {
	const f = useCurrentFrame();
	const box = box2();
	const rows = Q2_ROWS_A();
	const g = answerGeom(box, rows);
	const ntO = vis(f, KG.first, KG.pool + 40, 14);
	const sideO = vis(f, KG.count, KG.nomore, 12);
	const mito = vis(f, KG.nomore + 4, undefined, 12);
	return (
		<Overlay>
			<Strip lit={[{row: 1, from: 0, to: KG.first}, {row: 2, from: KG.first}]} />
			<Q2Card s={fr => lerp(1, S2, smooth(prog(fr, 0, 24)))} badgeAt={10}
				ann={[{kind: 'verb', phrase: 'Evaluate', at: 4}, {kind: 'marks', at: 14}, {kind: 'constraint', phrase: 'genetic diversity,', at: KG.hands}, {kind: 'constraint', phrase: 'animal welfare', at: KG.hands + 8}, {kind: 'constraint', phrase: 'one alternative.', at: KG.hands + 16},
					{kind: 'given', phrase: '8 founders.', at: KG.first + 20}, {kind: 'given', phrase: 'no longer found in the living population.', at: KG.lost - 10}, {kind: 'given', phrase: '10 wild sheep', at: KG.lost}]} />
			<AnswerBox spec={box} at={20} counter={{total: 7, label: true}} rows={rows} dimRows={[{rows: [0], at: KG.clones}, {rows: [1], at: KG.nomore}]} />
			<Tags g={g} tags={TAGS_A(true)} />
			<Chip x={SX} y={380} text="evaluate: against criteria" at={10} out={KG.first} size={30} color={AMBER_INK} fill="#fff8e6" />
			<GreyTag x={SX + 370} y={386} text="s04" at={20} out={KG.first} size={20} />
			<NTStrip x={SX + 10} y={470} t={prog(f, KG.first + 10, 60)} o={ntO} />
			<GreyTag x={SX} y={570} text="b16: the clone matches the nucleus donor" at={KG.donor} out={KG.pool + 40} size={20} />
			<T x={POOL.x - 20} y={POOL.y - 40} text="herd gene pool" size={22} color={GREY_INK} weight={700} o={prog(f, KG.first + 20, 12)} />
			<Pool x={POOL.x} y={POOL.y} cols={[...FOUNDERS, ...RETURNING]} per={9} at={[...FOUNDERS.map((_, i) => KG.first + 20 + i * 3), ...RETURNING.map((_, i) => KG.lost + 6 + i * 6)]} />
			<GreyTag x={SX} y={POOL.y + 90} text="lost alleles return" at={KG.lost + 40} out={KG.count} size={20} />
			{/* count the donors: ten clones of one donor add one colour */}
			<g opacity={sideO}>
				<T x={SX} y={440} text="if all 10 clones came from 1 donor" size={22} color={GREY_INK} weight={700} />
				{Array.from({length: 10}, (_, i) => <circle key={i} cx={SX + 20 + i * 34} cy={480} r={11} fill="none" stroke={POOL_C[9]} strokeWidth={6} />)}
				<path d={`M${SX + 180},${500} l0,24 m-8,-8 l8,8 l8,-8`} fill="none" stroke={GREY} strokeWidth={3} />
				<Pool x={SX + 40} y={550} cols={[...FOUNDERS, 9]} per={9} r={10} grey={0} />
			</g>
			<Chip x={SX} y={590} text="count the donors, not the clones" at={KG.count + 10} out={KG.nomore} size={28} color={TEAL} fill="#d5eeea" />
			<GreyTag x={SX} y={650} text="like b15: count the fathers" at={KG.count + 20} out={KG.nomore} size={20} />
			{/* mitochondria from the domestic egg */}
			<g opacity={mito}>
				<EggG x={SX + 60} y={480} r={36} />
				<T x={SX + 60} y={540} text="domestic egg" size={20} color={GREY_INK} weight={700} anchor="middle" />
				<circle cx={lerp(SX + 70, SX + 260, smooth(prog(f, KG.nomore + 14, 30)))} cy={480} r={6} fill="#c4632e" />
				<EggG x={SX + 270} y={480} r={30} nucleus="#8e6bb3" />
				<T x={SX + 270} y={540} text="clone" size={20} color={GREY_INK} weight={700} anchor="middle" />
			</g>
			<GreyTag x={SX} y={570} text="mtDNA: mainly domestic sheep" at={KG.nomore + 20} size={20} />
			{void KG.evaluate}{void KG.breed}{void KG.ten}{void STRIP}
		</Overlay>
	);
};

// ---------- 3c. Welfare, alternative, verdict ----------
const KW = cues(sc('q2-welfare'), {welfare: 'Next, welfare', two: 'two in a hundred', many: 'many domestic ewes', lost: 'are lost,', high: 'is high', alt: 'Then the alternative', habitat: 'habitat.', removes: 'That removes', cant: "can't bring back", verdict: 'the verdict', worth: 'is worth it', provided: 'provided the clones', herd: 'into the herd'});
export const Q2_ROWS_B = (): ARow[] => [
	{text: Q2_TEXT[3], at: KW.many - 10, dur: KW.high - KW.many + 20, tick: KW.high + 20},
	{text: Q2_TEXT[4], at: KW.removes, dur: KW.cant - KW.removes + 40, tick: KW.cant + 60},
	{text: Q2_TEXT[5], at: KW.worth - 10, dur: KW.provided - KW.worth - 10, tick: KW.provided - 10},
	{text: Q2_TEXT[6], at: KW.provided, dur: 60, tick: KW.herd + 14},
];
export const Q2_ALL = (): ARow[] => [...done(Q2_ROWS_A()), ...Q2_ROWS_B()];
export const SceneQ2Welfare: React.FC = () => {
	const f = useCurrentFrame();
	const box = box2();
	const rows = Q2_ALL();
	const g = answerGeom(box, rows);
	const glowNew = (i: number) => (i >= 8 ? vis(f, KW.cant, KW.verdict + 30, 10) : 0);
	const wh = 90, ww = plateW(PL.white, wh);
	return (
		<Overlay>
			<Strip lit={[{row: 1, from: 0, to: KW.two}, {row: 2, from: KW.two, to: KW.verdict}, {row: 3, from: KW.verdict, to: KW.herd + 60}]} />
			<Q2Card ann={[{kind: 'given', phrase: '8 founders.', at: -100}, {kind: 'given', phrase: 'no longer found in the living population.', at: -100}, {kind: 'given', phrase: '10 wild sheep', at: -100},
				{kind: 'given', phrase: 'about 2 of every 100 embryos', at: KW.two}, {kind: 'ring', phrase: 'one alternative.', at: KW.habitat}]} />
			<AnswerBox spec={box} at={-100} counter={{total: 7, label: true}} rows={rows} dimRows={[{rows: [0, 1, 2], at: -100}, {rows: [3], at: KW.removes}, {rows: [4], at: KW.worth}]} />
			<Tags g={g} tags={[...TAGS_A(false), {row: 3, role: 'criterion + evidence', at: KW.many}, {row: 4, role: 'criterion + evidence', at: KW.removes}, {row: 5, role: 'verdict', at: KW.worth}, {row: 6, role: 'condition', at: KW.provided + 6}]} />
			<EmbryoGrid x={SX + 20} y={400} p={prog(f, KW.two, 30)} amber={prog(f, KW.two + 30, 10)} o={1 - 0.5 * prog(f, KW.alt, 14)} />
			<GreyTag x={SX + 270} y={400} text="98 fail" at={KW.two + 34} size={22} />
			<g opacity={prog(f, KW.many - 6, 14) * (1 - 0.5 * prog(f, KW.alt, 14))}><Plate p={PL.white} x={SX + 270} y={450} h={wh} /></g>
			<GreyTag x={SX + 262} y={552} text="domestic surrogates" at={KW.many} size={20} />
			{/* the alternative: a breeding-plan doodle and a landscape outline */}
			<g opacity={vis(f, KW.habitat - 6)}>
				{[0, 1, 2].map(i => <circle key={i} cx={SX + 40 + i * 30} cy={680} r={13} fill="none" stroke={TEAL} strokeWidth={4} />)}
				<path d={`M${SX + 160},${700} L${SX + 210},${650} L${SX + 240},${680} L${SX + 280},${640} L${SX + 340},${700} Z`} fill="#eef3e2" stroke="#7c9a5a" strokeWidth={3} />
				<T x={SX + 20} y={730} text="breeding plan + habitat" size={20} color={GREY_INK} weight={700} />
			</g>
			<Pool x={SX + 50} y={820} cols={[...FOUNDERS, ...RETURNING]} per={9} glow={glowNew} o={0.55 + 0.45 * vis(f, KW.cant - 6, KW.verdict + 30, 10)} />
			<GreyTag x={SX} y={900} text="only the frozen cells hold these" at={KW.cant + 10} out={KW.verdict + 30} size={20} />
			<PenArrow a={[box.x - 6, g.base(g.rows[5].first) - 16]} b={[STRIP.x + STRIP.w + 4, miniRowY(STRIP, 3)]} at={KW.herd + 20} color={AMBER_INK} bow={40} />
			{void KW.welfare}{void KW.lost}{void KW.alt}{void cardGeom}
		</Overlay>
	);
};

// ---------- 3d. The classic mistake ----------
const KM = cues(sc('q2-mistake'), {classic: 'The classic mistake', mistake: 'mistake is', identical: 'identical to its donor', herd: 'not to the herd', here: 'Here, the donors'});
export const SceneQ2Mistake: React.FC = () => {
	const f = useCurrentFrame();
	const box = box2();
	return (
		<Overlay>
			<Strip />
			<Q2Card />
			<AnswerBox spec={box} at={-100} counter={{total: 7, label: true}} rows={Q2_ALL().map(r => ({...r, at: -1000, tick: r.tick === undefined ? undefined : -1000}))} o={0.45} />
			<CrossedGrey x={SX} y={390} text="clones are identical, so cloning can't add diversity" at={2} cross={KM.mistake} size={30} maxW={470} />
			<g opacity={vis(f, KM.identical - 4)}>
				<circle cx={SX + 50} cy={640} r={26} fill="none" stroke={POOL_C[12]} strokeWidth={8} />
				<T x={SX + 50} y={700} text="donor" size={20} color={GREY_INK} weight={700} anchor="middle" />
				<T x={SX + 110} y={652} text="=" size={40} color={INK_E} weight={800} anchor="middle" />
				<circle cx={SX + 170} cy={640} r={26} fill="none" stroke={POOL_C[12]} strokeWidth={8} />
				<T x={SX + 170} y={700} text="clone" size={20} color={GREY_INK} weight={700} anchor="middle" />
			</g>
			<g opacity={vis(f, KM.herd - 4)}>
				<T x={SX + 250} y={600} text="herd" size={20} color={GREY_INK} weight={700} />
				<Pool x={SX + 260} y={630} cols={FOUNDERS} per={4} r={11} />
			</g>
			<GreyTag x={SX} y={760} text="same as donor, new to the herd" at={KM.herd + 10} size={22} />
			{void KM.classic}{void KM.here}
		</Overlay>
	);
};
const INK_E = '#2b2a28';
