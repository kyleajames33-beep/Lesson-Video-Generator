// M6 C01 scenes 15 to 20: two worded attempts (full question kept on screen through the countdown), brief feedback
// with the givens underlined as they are used and one crossed mistake each, the decision rule and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {MG_ACID, SODA_BOX} from './assets';
import {
	ACID, ACID_INK, AChip, BASE, BASE_INK, DrawPath, EqBox, EqLine, EqUnder, Fade, HopArrow, INK, INK_SOFT, KeyNotesBoard, Mistake, Note, Overlay, PROTON_INK, PauseHold, PlateAt, Proton,
	ProtonHop, QText, RuleCard, Sx, TEAL, TaskLine, Tick, eAnchor, eq, eSpan, qCheck, vis,
} from './parts';
import type {EItem, QBlock, QMark} from './parts';

const CardBox: React.FC<{y: number; h: number; at: number}> = ({y, h, at}) => (
	<Fade at={at}><rect x={100} y={y} width={1720} height={h} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} /></Fade>
);

// ---------- question 1 ----------
const A1 = 'attempt-1';
const K15 = cues(sc(A1), {turn: 'Your turn', eqs: 'The equation shows', ident: 'Identify the', just: 'Justify your answer', pause: 'Pause here'});
type Q1At = {a: number; b: number; c: number};
const Q1_TOP = (t: Q1At, marks: QMark[] = []) => qCheck([{text: 'The equation shows the reaction of the hydrogen carbonate ion with water.', at: t.a}], marks);
const Q1_BOT = (t: Q1At, marks: QMark[] = []) => qCheck([{text: 'Identify the Brønsted-Lowry acid and the Brønsted-Lowry base in the forward reaction.', at: t.b}, {text: 'Justify your answer in terms of proton transfer.', at: t.c}] as QBlock[], marks);
const Q1EQ = (at: number): EItem[] => eq(['HCO_3^{-}(aq)', '+', 'H_2O(l)', '<=>', 'H_2CO_3(aq)', '+', 'OH^{-}(aq)'], at);
const QX = 140, QW = 1640, QS = 40, EQS = 56, EQY = 440;
const Question1: React.FC<{t: Q1At; eqAt: number; marks?: QMark[]}> = ({t, eqAt, marks = []}) => (
	<>
		<CardBox y={210} h={450} at={t.a - 4} />
		<QText q={Q1_TOP(t)} x={QX} y={280} w={QW} size={QS} card={false} />
		<EqLine items={Q1EQ(eqAt)} x={960} y={EQY} size={EQS} anchor="middle" />
		<QText q={Q1_BOT(t, marks)} x={QX} y={570} w={QW} size={QS} card={false} />
	</>
);
qCheck(Q1_BOT({a: 0, b: 0, c: 0}).blocks, [{phrase: 'forward reaction', at: 0}]);
export const SceneAttempt1: React.FC = () => {
	const h = hold(A1);
	return (
		<>
			<Overlay>
				<TaskLine text="Your turn" at={K15.turn} />
				<Question1 t={{a: K15.eqs, b: K15.ident, c: K15.just}} eqAt={K15.eqs + 20} />
				<PauseHold h={h} at={K15.pause} x={140} y={800} cx={1560} cy={800} />
			</Overlay>
		</>
	);
};

const F1 = 'feedback-1';
const K16 = cues(sc(F1), {follow: 'Follow the proton', water: 'Water becomes hydroxide', lost: 'lost a proton', isacid: 'Water is the acid', hco3: 'The hydrogen carbonate ion', gained: 'gained a proton', base: "It's the base", picked: 'If you picked', slip: 'classic slip', having: 'Having a hydrogen', giving: 'Giving one away'});
export const SceneFeedback1: React.FC = () => {
	const items = Q1EQ(-100);
	const sp = (i: number) => eSpan(items, i, EQS, 960, 'middle');
	const top = EQY - EQS - 8, bot = EQY + 26;
	const w0 = sp(2), oh = sp(6), hc = sp(0), h2 = sp(4);
	const hop = K16.gained + 4;
	return (
		<>
			<Overlay>
				<TaskLine text="Follow the proton" at={K16.follow} size={52} />
				<Question1 t={{a: -100, b: -100, c: -100}} eqAt={-100} marks={[{phrase: 'forward reaction', at: K16.follow + 10}]} />
				{/* water to hydroxide: lost H+ (above the line) */}
				<EqUnder items={items} i={2} size={EQS} x={960} y={EQY} at={K16.water} color={ACID} anchor="middle" />
				<EqUnder items={items} i={6} size={EQS} x={960} y={EQY} at={K16.water + 10} color={ACID} anchor="middle" />
				<DrawPath d={`M${w0.cx},${top} C${w0.cx + 80},${top - 46} ${oh.cx - 80},${top - 46} ${oh.cx},${top}`} at={K16.lost - 6} dur={18} color={ACID_INK} width={4} />
				<Sx x={(w0.cx + oh.cx) / 2} y={top - 40} text="−H^{+}" size={30} color={ACID_INK} anchor="middle" at={K16.lost} />
				<EqBox items={items} i={2} size={EQS} x={960} y={EQY} at={K16.isacid} color={ACID} anchor="middle" />
				{/* hydrogen carbonate to carbonic acid: gained H+ (below the line) */}
				<EqUnder items={items} i={0} size={EQS} x={960} y={EQY} at={K16.hco3} color={BASE} anchor="middle" />
				<EqUnder items={items} i={4} size={EQS} x={960} y={EQY} at={K16.hco3 + 10} color={BASE} anchor="middle" />
				<DrawPath d={`M${hc.cx},${bot + 6} C${hc.cx + 120},${bot + 44} ${h2.cx - 120},${bot + 44} ${h2.cx},${bot + 6}`} at={K16.gained - 6} dur={18} color={BASE_INK} width={4} />
				<Sx x={hc.cx - 30} y={bot + 44} text="+H^{+}" size={30} color={BASE_INK} anchor="end" at={K16.gained} />
				<EqBox items={items} i={0} size={EQS} x={960} y={EQY} at={K16.base} color={BASE} anchor="middle" />
				<ProtonHop a={[w0.cx, top - 10]} b={[hc.cx, top - 10]} at={hop} bow={-60} s={1} />
				<AChip x={140} y={700} text="Acid: H_2O (donates H^{+}, becomes OH^{-})" size={38} color={ACID_INK} at={K16.isacid} hand={false} />
				<AChip x={140} y={786} text="Base: HCO_3^{-} (accepts H^{+}, becomes H_2CO_3)" size={38} color={BASE_INK} at={K16.base} hand={false} />
				<Mistake x={140} y={890} text="HCO_3^{-} is the acid: it contains H" at={K16.slip} note="giving H^{+} away makes an acid" size={34} />
				{void K16.picked}{void K16.having}{void K16.giving}{void HopArrow}{void Proton}{void eAnchor}{void vis}
			</Overlay>
		</>
	);
};

// ---------- question 2 ----------
const A2 = 'attempt-2';
const K17 = cues(sc(A2), {last: 'Last one', student: 'A student states', assess: 'Assess the validity', refer: 'Refer to ammonia', pause: 'Pause here'});
const Q2 = (a: number, b: number, c: number, marks: QMark[] = []) => qCheck([
	{text: 'A student states: ‘The Arrhenius model has been proved wrong, so it should no longer be used.’', at: a},
	{text: 'Assess the validity of this statement.', at: b, para: true},
	{text: 'Refer to ammonia in your answer.', at: c},
], marks);
qCheck(Q2(0, 0, 0).blocks, [{phrase: 'proved wrong', at: 0}, {phrase: 'ammonia', at: 0}]);
const Question2: React.FC<{a: number; b: number; c: number; marks?: QMark[]; y?: number}> = ({a, b, c, marks, y = 210}) => (
	<>
		<CardBox y={y} h={290} at={a - 4} />
		<QText q={Q2(a, b, c, marks)} x={QX} y={y + 74} w={QW} size={44} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => {
	const h = hold(A2);
	return (
		<>
			<Overlay>
				<TaskLine text="Last one" at={K17.last} />
				<Question2 a={K17.student} b={K17.assess} c={K17.refer} />
				<PauseHold h={h} at={K17.pause} x={140} y={720} cx={1560} cy={760} />
			</Overlay>
		</>
	);
};

const F2 = 'feedback-2';
const K18 = cues(sc(F2), {notvalid: 'not valid', isnt: "Arrhenius isn't wrong", correctly: 'correctly describes', inwater: 'in water, and', useful: 'still useful there', limitation: 'Its limitation', ammonia: 'why ammonia is a base', accepts: 'ammonia accepts a proton', mistake: 'is the mistake', limited: 'Write limited'});
export const SceneFeedback2: React.FC = () => {
	const S = 44, EX = 140, EY = 960;
	const items = eq(['NH_3', '+', 'H_2O', '<=>', 'NH_4^{+}', '+', 'OH^{-}'], [K18.accepts, K18.accepts + 3, K18.accepts + 6, K18.accepts + 9, K18.accepts + 30, K18.accepts + 33, K18.accepts + 36]);
	const wTop = eAnchor(items, 2, S, EX, EY, -S - 10), nTop = eAnchor(items, 0, S, EX, EY, -S - 10);
	return (
		<>
			<Overlay>
				<TaskLine text="Not valid" at={K18.notvalid} size={52} />
				<Question2 a={-100} b={-100} c={-100} marks={[{phrase: 'proved wrong', at: K18.notvalid}, {phrase: 'ammonia', at: K18.ammonia}]} />
				<AChip x={140} y={548} text="Not valid: limited, not wrong" size={42} color={TEAL} at={K18.notvalid + 10} />
				<Tick x={168} y={680} at={K18.inwater} s={34} />
				<Note x={200} y={692} text="explains: acids and OH^{-} bases in water (HCl, NaOH)" size={36} color={INK} at={K18.inwater} />
				<Note x={200} y={738} text="still useful there" size={32} color={INK_SOFT} at={K18.useful} />
				<Note x={140} y={820} text="limitation: NH_3 has no OH^{-} of its own" size={38} color={ACID_INK} at={K18.ammonia} />
				<EqLine items={items} x={EX} y={EY} size={S} />
				<ProtonHop a={wTop} b={nTop} at={K18.accepts + 12} bow={-50} s={0.9} />
				<Note x={EX + 620} y={EY} text="NH_3 accepts H^{+}" size={36} color={BASE_INK} at={K18.accepts + 30} />
				<Mistake x={1150} y={840} text="Arrhenius was proved wrong" at={K18.mistake} note="write: limited" size={36} />
				{void K18.isnt}{void K18.correctly}{void K18.limitation}{void K18.limited}{void PROTON_INK}{void INK_SOFT}
			</Overlay>
		</>
	);
};

// ---------- 19. Decision rule and handoff ----------
const DR = 'decision-rule';
const K19 = cues(sc(DR), {whenever: 'whenever you meet', follow: 'follow the proton', loses: 'loses one', gains: 'gains it', water: 'in water or not', judge: 'to judge any model', explained: 'what it explained', broke: 'what broke it', next: 'Next', naming: 'naming acids and bases', predicting: 'predicting what they make'});
export const SceneDecision: React.FC = () => (
	<>
		<Heading text="Whenever you meet a reaction" at={4} size={58} />
		<Overlay>
			<RuleCard x={96} y={210} w={1500} at={K19.whenever} lh={84} lines={[
				{t: 'Follow the proton: loses H^{+} = acid; gains H^{+} = base.', at: K19.follow, lit: [K19.follow, K19.water], size: 44},
				{t: 'Any medium, water or not.', at: K19.water, lit: [K19.water, K19.judge], size: 44},
				{t: 'Judge a model: what it explained, then what broke it.', at: K19.judge, lit: [K19.judge, K19.next], size: 44},
			]} />
			<AChip x={96} y={600} text="Next: naming acids and bases, and predicting acid reaction products" size={38} color={TEAL} at={K19.next} />
			<PlateAt p={MG_ACID} x={200} y={700} h={300} at={K19.naming} />
			<PlateAt p={SODA_BOX} x={520} y={720} h={280} at={K19.predicting} />
			{void K19.loses}{void K19.gains}{void K19.explained}{void K19.broke}{void INK}
		</Overlay>
	</>
);

// ---------- 20. Key notes ----------
const NOTES = [
	'Lavoisier (1770s): acids contain oxygen. Broken by HCl, an acid with no oxygen.',
	'Davy (1810s): acids contain hydrogen. Limit: hydrogen alone does not identify an acid (methane has H, not acidic); no definition of a base.',
	'Arrhenius (1880s): an acid releases H^{+} in water; a base releases its own OH^{-} in water. Works for acids and hydroxide bases in water. Limitation: needs an aqueous solution and a base with its own OH^{-}, so it can’t explain NH_3, carbonates, or HCl(g) + NH_3(g) → NH_4Cl(s) (a gas reaction).',
	'Brønsted-Lowry (1923): an acid is a proton (H^{+}) donor; a base is a proton acceptor; any medium. HCl + H_2O → H_3O^{+} + Cl^{-}. NH_3 + H_2O ⇌ NH_4^{+} + OH^{-} (the OH^{-} comes from water). Limitation: needs a proton to transfer (CaO + SO_3 → CaSO_4 has none).',
	'H^{+}(aq) means H_3O^{+}(aq), the hydronium ion. Acid and base are roles in a reaction: follow the proton.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={33} aidTop={800} aids={['Each model fixed a failure of the one before.', 'Acid gives, base takes (a proton).']} tag="assess a model: what it explained, then what it couldn't" />
);
