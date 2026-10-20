// M6 C06 scenes 11 to 16: two worded attempts (full question on screen through the countdown), brief feedback with the
// givens underlined as they are used and one crossed mistake each, the decision rule and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {
	AChip, ACID, ACID_INK, BASE, BASE_INK, Chain, Dim, EqBox, EqLine, EqUnder, Fade, KeyNotesBoard, MistakeX, Overlay, PairBracket, PauseHold, ProtonHop, QText, RuleCard, TEAL, TaskLine, eSpan, eq,
	qCheck, smooth,
} from './parts';
import type {ChainItem, EItem, QBlock, QMark} from './parts';

const QX = 140, QW = 1640;
const CardBox: React.FC<{y: number; h: number; at: number}> = ({y, h, at}) => (
	<Fade at={at}><rect x={100} y={y} width={1720} height={h} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} /></Fade>
);
const Shrink: React.FC<{k: number; children: React.ReactNode}> = ({k, children}) => {
	const f = useCurrentFrame();
	const s = 1 - (1 - k) * smooth(prog(f, 0, 20));
	return <g transform={`translate(100,${178}) scale(${s}) translate(-100,-178)`}>{children}</g>;
};

// ---------- 11/12. Question 1 ----------
const A1 = 'attempt-1';
const K11 = cues(sc(A1), {turn: 'Your turn', pot: 'Potassium dihydrogen', write: 'Write an equation', then: 'Then write two', pause: 'Pause here'});
const Q1 = (t: [number, number, number], marks: QMark[] = []) => qCheck([
	{text: 'Potassium dihydrogen phosphate, KH₂PO₄, is used in foods as an acidity regulator.', at: t[0]},
	{text: 'Write an equation for KH₂PO₄ dissolving in water.', at: t[1], para: true},
	{text: 'Then write two equations, each with water as the reaction partner, to show that the dihydrogen phosphate ion is amphiprotic.', at: t[2]},
] as QBlock[], marks);
qCheck(Q1([0, 0, 0]).blocks, [{phrase: 'KH₂PO₄ dissolving', at: 0}, {phrase: 'amphiprotic', at: 0}, {phrase: 'water as the reaction partner', at: 0}]);
const Question1: React.FC<{t: [number, number, number]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={270} at={t[0] - 6} />
		<QText q={Q1(t, marks)} x={QX} y={272} w={QW} size={42} card={false} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<TaskLine text="Your turn" at={K11.turn} />
		<Question1 t={[K11.pot, K11.write, K11.then]} />
		<PauseHold h={hold(A1)} at={K11.pause} x={140} y={720} cx={1560} cy={700} />
	</Overlay>
);

const F1 = 'feedback-1';
const K12 = cues(sc(F1), {k: 'potassium ions', acid: 'As an acid', hp: 'making hydrogen phosphate', base: 'As a base', pa: 'making phosphoric acid', wrote: 'If you wrote', moved: 'you moved two', move: 'Move just one'});
export const SceneFeedback1: React.FC = () => {
	const S = 44, X = 140, Y1 = 590, Y2 = 690, Y3 = 790;
	const l1 = eq(['KH_2PO_4(s)', '->', {t: 'K^{+}(aq)', color: '#a39c91'}, '+', 'H_2PO_4^{-}(aq)'], [0, 1, 2, 3, 4].map(i => K12.k + i * 5));
	const l2 = eq(['H_2PO_4^{-}(aq)', '+', 'H_2O(l)', '<=>', 'HPO_4^{2-}(aq)', '+', 'H_3O^{+}(aq)'], [0, 1, 2, 3, 4, 5, 6].map(i => K12.hp - 10 + i * 5));
	const l3 = eq(['H_2PO_4^{-}(aq)', '+', 'H_2O(l)', '<=>', 'H_3PO_4(aq)', '+', 'OH^{-}(aq)'], [0, 1, 2, 3, 4, 5, 6].map(i => K12.pa - 10 + i * 5));
	const chain: ChainItem[] = [{t: 'H_3PO_4', at: K12.hp}, {t: 'H_2PO_4^{-}', at: K12.hp, role: {both: [K12.hp]}}, {t: 'HPO_4^{2-}', at: K12.hp}, {t: 'PO_4^{3-}', at: K12.hp}];
	return (
		<Overlay>
			<Shrink k={0.72}>
				<Question1 t={[-100, -100, -100]} marks={[{phrase: 'KH₂PO₄ dissolving', at: K12.k}, {phrase: 'amphiprotic', at: K12.hp}]} />
			</Shrink>
			<Dim at={K12.hp} to={0.35}><EqLine items={l1} x={X} y={Y1} size={S} /></Dim>
			<EqBox items={l2} i={0} size={S} x={X} y={Y2} at={K12.hp} color={ACID} />
			<EqLine items={l2} x={X} y={Y2} size={S} />
			<EqBox items={l3} i={0} size={S} x={X} y={Y3} at={K12.pa} color={BASE} />
			<EqLine items={l3} x={X} y={Y3} size={S} />
			<Chain items={chain} x={1260} y={Y1 + 10} size={28} gap={46} lit={[{step: 1, dir: 'r', at: K12.hp}, {step: 0, dir: 'l', at: K12.pa}]} />
			<MistakeX x={X} y={850} text="H_2PO_4^{-} + H_2O ⇌ PO_4^{3-} + ..." at={K12.wrote} cross={K12.move} note="one H^{+} per step" size={36} />
			{void K12.acid}{void K12.base}{void K12.moved}
		</Overlay>
	);
};

// ---------- 13/14. Question 2 ----------
const A2 = 'attempt-2';
const K13 = cues(sc(A2), {last: 'Last one', eqs: 'The equation shows', ident: 'Identify the two', state: 'state which species', pause: 'Pause here'});
const Q2 = (t: [number, number], marks: QMark[] = []) => qCheck([
	{text: 'Identify the two conjugate acid-base pairs in this reaction,', at: t[0]},
	{text: 'and state which species is the Brønsted-Lowry acid.', at: t[1]},
] as QBlock[], marks);
const Q2EQ = (at: number): EItem[] => eq(['NH_4^{+}(aq)', '+', 'CO_3^{2-}(aq)', '<=>', 'NH_3(aq)', '+', 'HCO_3^{-}(aq)'], at);
const EQS = 60, EQY = 350;
const eqX = (items: EItem[]) => 960 - eSpan(items, items.length - 1, EQS, 0).x2 / 2;
const Question2: React.FC<{t: [number, number]; eqAt: number; marks?: QMark[]}> = ({t, eqAt, marks}) => {
	const items = Q2EQ(eqAt);
	return (
		<>
			<CardBox y={200} h={420} at={eqAt - 6} />
			<EqLine items={items} x={eqX(items)} y={EQY} size={EQS} />
			<QText q={Q2(t, marks)} x={QX} y={530} w={QW} size={42} card={false} />
		</>
	);
};
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<TaskLine text="Last one" at={K13.last} />
		<Question2 t={[K13.ident, K13.state]} eqAt={K13.eqs} />
		<PauseHold h={hold(A2)} at={K13.pause} x={140} y={790} cx={1560} cy={780} />
	</Overlay>
);

const F2 = 'feedback-2';
const K14 = cues(sc(F2), {follow: 'Follow the proton', loses: 'Ammonium loses one', acid: 'ammonium is the acid', gains: 'Carbonate gains one', other: 'the other pair', pairing: 'Pairing ammonium', slip: 'classic slip', same: 'same side'});
export const SceneFeedback2: React.FC = () => {
	const items = Q2EQ(-100);
	const x = eqX(items);
	const sp = (i: number) => eSpan(items, i, EQS, x);
	return (
		<Overlay>
			<TaskLine text="Follow the proton" at={K14.follow} size={52} />
			<Question2 t={[-100, -100]} eqAt={-100} marks={[{phrase: 'Brønsted-Lowry acid', at: K14.acid}]} />
			<EqUnder items={items} i={0} size={EQS} x={x} y={EQY} at={K14.loses} color={ACID} />
			<EqUnder items={items} i={4} size={EQS} x={x} y={EQY} at={K14.loses + 10} color={ACID} />
			<PairBracket items={items} i={0} j={4} size={EQS} x={x} y={EQY} at={K14.loses + 14} above gap={18} label="pair: NH_4^{+} / NH_3" lsize={32} />
			<EqUnder items={items} i={2} size={EQS} x={x} y={EQY} at={K14.gains} color={BASE} />
			<EqUnder items={items} i={6} size={EQS} x={x} y={EQY} at={K14.gains + 10} color={BASE} />
			<PairBracket items={items} i={2} j={6} size={EQS} x={x} y={EQY} at={K14.gains + 14} above={false} gap={28} label="pair: CO_3^{2-} / HCO_3^{-}" lsize={32} />
			<ProtonHop a={[sp(0).cx, EQY - EQS - 6]} b={[sp(2).cx, EQY - EQS - 6]} at={K14.gains + 20} dur={28} bow={-40} />
			<AChip x={140} y={680} text="Acid: NH_4^{+} (donates H^{+})" size={40} color={ACID_INK} hand={false} at={K14.acid} />
			<MistakeX x={140} y={800} text="NH_4^{+} / CO_3^{2-}" at={K14.pairing} cross={K14.same} note="partners are on opposite sides, one H^{+} apart" size={38} />
			{void K14.other}{void K14.slip}{void BASE_INK}{void TEAL}
		</Overlay>
	);
};

// ---------- 15. Decision rule and handoff ----------
const DR = 'decision-rule';
const K15 = cues(sc(DR), {any: 'for any acid-base', follow: 'follow the proton', pair: 'then pair each', check: 'check the charge', amph: 'For an amphiprotic', write: 'write one equation', next: 'Next', tiny: "water's tiny equilibrium"});
export const SceneDecision: React.FC = () => {
	const s = eq(['H_2O', '+', 'H_2O', '<=>', 'H_3O^{+}', '+', 'OH^{-}'], K15.next + 10);
	return (
		<>
			<Heading text="For any acid-base equation" at={4} size={58} />
			<Overlay>
				<RuleCard x={96} y={200} w={1728} at={K15.any} lh={92} lines={[
					{t: '1  Follow the proton: loses H^{+} = acid; gains H^{+} = base.', at: K15.follow, lit: [K15.follow, K15.pair], size: 42},
					{t: '2  Pair across the arrow: one H^{+} apart, charge changes by 1.', at: K15.pair, lit: [K15.pair, K15.amph], size: 42},
					{t: '3  Amphiprotic ion: one equation giving H^{+} to water, one taking H^{+} from water.', at: K15.amph, lit: [K15.amph, K15.next], size: 40},
				]} />
				<AChip x={96} y={650} text="Next: calculating pH for strong acids and bases" size={42} color={TEAL} at={K15.next} />
				<EqLine items={s} x={140} y={860} size={52} />
				{void K15.check}{void K15.write}{void K15.tiny}
			</Overlay>
		</>
	);
};

// ---------- 16. Key notes ----------
const NOTES = [
	'Conjugate pair: two species on opposite sides of an equation that differ by exactly one H^{+}. Acid − H^{+} = conjugate base; base + H^{+} = conjugate acid (charge changes by 1). NH_3 + H_2O ⇌ NH_4^{+} + OH^{-}: pairs NH_4^{+}/NH_3 and H_2O/OH^{-}. One H^{+} at a time: H_2SO_4/HSO_4^{-}, not H_2SO_4/SO_4^{2-}.',
	'The stronger the acid, the weaker its conjugate base: Cl^{-} does not take H^{+} back (→); CH_3COO^{-} does (⇌).',
	'Amphiprotic: can donate or accept a proton, depending on its partner (the middle of a proton chain): H_2O, HCO_3^{-}, H_2PO_4^{-}, HPO_4^{2-}.',
	'NaHCO_3(s) → Na^{+}(aq) + HCO_3^{-}(aq). As an acid: HCO_3^{-} + H_2O ⇌ CO_3^{2-} + H_3O^{+}. As a base: HCO_3^{-} + H_2O ⇌ H_2CO_3 + OH^{-}.',
	'Water self-ionises to a tiny extent: H_2O + H_2O ⇌ H_3O^{+} + OH^{-}. Neutral means equal amounts of H_3O^{+} and OH^{-}.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={32} aidTop={790} aids={['A conjugate pair differs by exactly one proton.', 'Amphi means both: the middle of the chain goes either way.']} tag="one proton, one charge, opposite sides" />
);
