// M6 C13 scenes 13 to 18: two worded attempts (full question on screen through the countdown), brief feedback with the
// givens underlined as they are used and one crossed mistake each, the decision rule and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, kf, sc} from './common';
import {AMMONIA, BTB_SET, CABBAGE, MR_SET, SET_U} from './assets';
import {
	ACID_INK, AChip, DimG, BTB_BLUE, BTB_YEL, CLEAR, EqLine, ITable, INK, INK_SOFT, KeyNotesBoard, MO_YEL, MR_RED, MistakeX, Note, OpGlow, Overlay, PHRuler, PINK, PairAt, PauseHold, PicH, QText,
	RBand, RuleCard, SetRing, SpanBracket, Sx, TEAL, eSpan, eq, fitSize, picW, qCheck, rx,
} from './parts';
import type {PR, QBlock, QMark} from './parts';
import {CardBox, Shrink} from '../chem-m6-c07/s4';
import {IND_STRIP} from './s1';

const QX = 140, QW = 1640;

// ---------- 13/14. Question 1 ----------
const A1 = 'attempt-1';
const K13 = cues(sc(A1), {turn: 'Your turn', btb: 'Bromothymol blue is', yellow: 'H In is', range: 'Its colour changes', few: 'A few drops', sodium: 'Sodium hydroxide is', describe: 'Describe the colours', pause: 'Pause here'});
const Q1 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'Bromothymol blue is a weak acid, HIn.', at: t[0]},
	{text: 'HIn is yellow and In⁻ is blue.', at: t[1]},
	{text: 'Its transition range is pH 6.0 to 7.6.', at: t[2]},
	{text: 'A few drops of bromothymol blue are added to a solution at pH 4.', at: t[3]},
	{text: 'Sodium hydroxide solution is added until the pH reaches 10, then hydrochloric acid is added until the pH returns to 4.', at: t[4]},
	{text: "Describe the colours observed, and explain them using Le Chatelier's principle.", at: t[5], para: true},
] as QBlock[], marks);
const M1 = ['HIn is yellow', 'pH 6.0 to 7.6', 'pH 4', 'Sodium hydroxide', 'pH reaches 10', 'hydrochloric acid', 'returns to 4'];
qCheck(Q1([0, 0, 0, 0, 0, 0]).blocks, M1.map(phrase => ({phrase, at: 0})));
const Question1: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={360} at={t[0] - 6} />
		<QText q={Q1(t, marks)} x={QX} y={272} w={QW} size={42} card={false} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={150} text="Your turn" size={58} color={INK} hand at={K13.turn} />
		<Question1 t={[K13.btb, K13.yellow, K13.range, K13.few, K13.sodium, K13.describe]} />
		<PauseHold h={hold(A1)} at={K13.pause} x={140} y={760} cx={1560} cy={740} />
	</Overlay>
);

const F1 = 'feedback-1';
const K14 = cues(sc(F1), {below: 'below the range', yellow: 'dominates: yellow', hyd: 'Hydroxide removes', right: 'shifts right', blue: 'up: blue', adding: 'Adding acid', left: 'shifts left', back: 'back to yellow', saying: 'Saying the', used: 'used up', misses: 'misses that'});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const strip = IND_STRIP(K14.below - 20);
	const X = 140, SY = 560;
	const ss = fitSize(strip, 1000, 42);
	const pos = (fr: number) => kf(fr, [[K14.hyd, 0], [K14.blue, 2], [K14.left, 2], [K14.back + 10, 0]]);
	const bh = 200, bx = 1260;
	return (
		<Overlay>
			<Shrink k={0.6}>
				<Question1 t={[-100, -100, -100, -100, -100, -100]} marks={[
					{phrase: 'HIn is yellow', at: K14.yellow - 30, color: '#c9a20e'}, {phrase: 'pH 6.0 to 7.6', at: K14.below, color: TEAL}, {phrase: 'pH 4', at: K14.below - 30, color: TEAL},
					{phrase: 'Sodium hydroxide', at: K14.hyd, color: BTB_BLUE}, {phrase: 'pH reaches 10', at: K14.hyd + 20, color: BTB_BLUE},
					{phrase: 'hydrochloric acid', at: K14.adding, color: ACID_INK}, {phrase: 'returns to 4', at: K14.left, color: ACID_INK},
				]} />
			</Shrink>
			<EqLine items={strip} x={X} y={SY} size={ss} />
			<Sx x={eSpan(strip, 0, ss, X).cx} y={SY + 60} text="yellow" size={32} color="#b8930a" anchor="middle" hand at={K14.below} />
			<Sx x={eSpan(strip, 6, ss, X).cx} y={SY + 60} text="blue" size={32} color={BTB_BLUE} anchor="middle" hand at={K14.below + 8} />
			<OpGlow items={strip} i={3} size={ss} x={X} y={SY} at={K14.right} len={60} color={TEAL} />
			<OpGlow items={strip} i={3} size={ss} x={X} y={SY} at={K14.left} len={60} color={'#e07b2e'} />
			<SetRing p={BTB_SET} u={SET_U.btb} x={bx} y={470} h={bh} at={K14.below - 20} pos={pos} ringAt={K14.yellow} />
			<AChip x={X} y={680} text="yellow → blue → yellow" size={40} color={TEAL} hand={false} at={K14.back + 10} />
			<MistakeX x={X} y={800} text="indicator used up: stays blue" at={K14.used - 10} cross={K14.misses} note="an equilibrium: it shifts back" size={36} />
			{void f}{void K14.saying}{void picW}
		</Overlay>
	);
};

// ---------- 15/16. Question 2 ----------
const A2 = 'attempt-2';
const K15 = cues(sc(A2), {last: 'Last one', zero: 'Zero point one', near: 'Near equivalence', explain: 'Explain why', choose: 'then choose', table: 'the table', pause: 'Pause here'});
const Q2 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'A solution of 0.100 mol/L hydrochloric acid is added from a burette to 25.00 mL of 0.100 mol/L ammonia solution.', at: t[0]},
	{text: 'Near the equivalence point, the pH falls sharply from about 6.6 to about 4.0.', at: t[1]},
	{text: '(a) Explain why the solution at the equivalence point is acidic. Include an equation.', at: t[2], para: true},
	{text: '(b) Select the most suitable indicator from the table, and justify your choice.', at: t[3], para: true},
] as QBlock[], marks);
qCheck(Q2([0, 0, 0, 0]).blocks, [{phrase: 'hydrochloric acid', at: 0}, {phrase: 'ammonia solution', at: 0}, {phrase: 'from about 6.6 to about 4.0', at: 0}]);
const TY = 590;
const Question2: React.FC<{t: number[]; marks?: QMark[]; tMarks?: {row: number; at: number; color?: string}[]}> = ({t, marks, tMarks}) => (
	<>
		<CardBox y={200} h={650} at={t[0] - 6} />
		<QText q={Q2(t, marks)} x={QX} y={262} w={1480} size={36} card={false} />
		<ITable x={QX + 20} y={TY} at={t[4]} marks={tMarks} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={150} text="Last one" size={58} color={INK} hand at={K15.last} />
		<Question2 t={[K15.zero, K15.near, K15.explain, K15.choose, K15.table]} />
		<PicH p={AMMONIA} x={1680} y={220} h={190} o={prog(useCurrentFrame(), K15.zero + 300, 14)} />
		<PauseHold h={hold(A2)} at={K15.pause} x={1180} y={680} cx={1500} cy={770} />
	</Overlay>
);

const F2 = 'feedback-2';
const K16 = cues(sc(F2), {holds: 'flask holds', ammonium: 'Ammonium gives', hyd: 'making hydronium', acidic: "it's acidic", mr: 'Methyl red changes', inside: 'all inside', best: 'best fit', trap: 'the trap', above: 'above the jump', colourless: 'goes colourless'});
export const SceneFeedback2: React.FC = () => {
	const e = eq(['NH_4^{+}(aq)', '+', 'H_2O(l)', '<=>', 'NH_3(aq)', '+', 'H_3O^{+}(aq)'], [K16.ammonium, K16.ammonium + 30, K16.ammonium + 40, K16.hyd - 6, K16.hyd, K16.hyd + 4, K16.hyd + 8]);
	const es = fitSize(e, 980, 40);
	const R: PR = {x: 140, w: 860, lo: 2, hi: 12};
	const RY = 880;
	return (
		<Overlay>
			<Shrink k={0.55}>
				<Question2 t={[-100, -100, -100, -100, -100]} marks={[
					{phrase: 'hydrochloric acid', at: K16.hyd, color: ACID_INK}, {phrase: 'ammonia solution', at: K16.hyd + 8, color: '#5b7fd1'},
					{phrase: 'from about 6.6 to about 4.0', at: K16.inside, color: TEAL},
				]} tMarks={[{row: 1, at: K16.inside + 6, color: MR_RED}, {row: 3, at: K16.trap, color: PINK}]} />
			</Shrink>
			<DimG at={K16.inside} to={0.4}>
				<EqLine items={e} x={140} y={650} size={es} />
				<AChip x={1200} y={610} text="NH_4Cl: acidic" size={38} color={ACID_INK} hand={false} at={K16.acidic} />
			</DimG>
			<PHRuler R={R} y={RY} at={K16.mr} size={22} />
			<SpanBracket x1={rx(R, 4.0)} x2={rx(R, 6.6)} y={RY - 80} text="jump 6.6 → 4.0" at={K16.inside} up color={TEAL} size={28} />
			<RBand R={R} y={RY - 36} a={4.4} b={6.2} cA={MR_RED} cB={MO_YEL} at={K16.mr + 10} h={30} />
			<RBand R={R} y={RY - 36} a={8.3} b={10.0} cA={CLEAR} cB={PINK} at={K16.trap + 10} h={30} />
			<Sx x={rx(R, 9.15)} y={RY - 66} text="phenolphthalein" size={24} color={PINK} anchor="middle" weight={800} at={K16.trap + 14} />
			<SetRing p={MR_SET} u={SET_U.mr} x={1080} y={720} h={130} at={K16.mr} />
			<AChip x={1460} y={760} text="methyl red" size={40} color={MR_RED} hand={false} at={K16.best - 10} />
			<Note x={140} y={1000} text="methyl orange: also used; changes at the foot of the jump" size={28} color={INK_SOFT} at={K16.best} out={K16.trap} />
			<MistakeX x={1080} y={880} text="phenolphthalein: the usual indicator" at={K16.trap} cross={K16.colourless} note="changes above the jump: colourless by about 22.5 mL" size={32} />
			{void K16.holds}{void K16.above}{void BTB_YEL}
		</Overlay>
	);
};

// ---------- 17. Decision rule and handoff ----------
const DR = 'decision-rule';
const K17 = cues(sc(DR), {any: 'For any', name: 'name the salt', predict: 'predict acidic', find: 'find the steep', pick: 'and pick', next: 'Next', testing: 'testing it'});
export const SceneDecision: React.FC = () => (
	<>
		<Heading text="For any titration" at={4} size={58} />
		<Overlay>
			<RuleCard x={96} y={210} w={1728} at={K17.any} lh={88} lines={[
				{t: '1  Name the salt formed at equivalence.', at: K17.name, lit: [K17.name, K17.predict], size: 40, hand: false},
				{t: '2  Stronger parent → acidic, neutral or basic.', at: K17.predict, lit: [K17.predict, K17.find], size: 40, hand: false},
				{t: '3  Find the steep jump.', at: K17.find, lit: [K17.find, K17.pick], size: 40, hand: false},
				{t: '4  Pick the indicator whose change falls inside it.', at: K17.pick, lit: [K17.pick, K17.next], size: 40, hand: false},
			]} />
			<AChip x={96} y={700} text="Next: make and test an indicator" size={42} color={TEAL} hand={false} at={K17.next} />
			<PairAt a={CABBAGE.purple} b={CABBAGE.green} x={1300} y={650} h={300} at={K17.next + 6} swap={K17.testing} />
		</Overlay>
	</>
);

// ---------- 18. Key notes ----------
const NOTES = [
	'An indicator is a weak acid, HIn, whose two forms have different colours: HIn(aq) + H_2O(l) ⇌ H_3O^{+}(aq) + In^{−}(aq). Added acid shifts it left; added base shifts it right. The change is reversible.',
	'The colour changes over a transition range of roughly 2 pH units around the indicator\'s pKa. Methyl orange 3.1–4.4 (red to yellow); methyl red 4.4–6.2 (red to yellow); bromothymol blue 6.0–7.6 (yellow to blue); phenolphthalein 8.3–10.0 (colourless to pink).',
	'The salt at equivalence takes after its stronger parent. Weak acid + strong base: basic (CH_3COO^{−}(aq) + H_2O(l) ⇌ CH_3COOH(aq) + OH^{−}(aq)). Strong acid + weak base: acidic (NH_4^{+}(aq) + H_2O(l) ⇌ NH_3(aq) + H_3O^{+}(aq)). Strong + strong: neutral (pH 7.00 at 25 °C).',
	'Endpoint: the colour change. Equivalence point: the amounts match the equation. Choose an indicator whose colour change falls inside the steep pH jump around equivalence.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={30} aidTop={700} aids={['The salt takes after its stronger parent.', 'Pick the indicator that changes inside the jump.']} tag="one parent strong, one weak; two strong parents: neutral" />
);
void INK_SOFT; void MO_YEL;
