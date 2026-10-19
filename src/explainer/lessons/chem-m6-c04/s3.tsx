// M6 C04 scenes 11 to 16: two worded attempts (full question on screen through the countdown), brief feedback with
// the question's words underlined as they are used and one crossed mistake each, the decision rule and key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {PHMETER, SCRUB} from './assets';
import {
	AChip, AMBER, CO2C, CO2_INK, ChoiceCard, EqLine, Fade, INK, INK_SOFT, KeyNotesBoard, LensFrame, Mistake, Mol, Note, Overlay, PHBar, PauseHold, PicH, PlateAt, ProtonHop, QText, Ring, RuleCard,
	Sx, TEAL, TTile, TaskLine, eSpan, eq, fitSize, keys, natPt, picW, qCheck, slotAt, smooth,
} from './parts';
import type {QBlock, QMark} from './parts';

const QX = 140, QW = 1640;
const CardBox: React.FC<{y: number; h: number; at: number}> = ({y, h, at}) => (
	<Fade at={at}><rect x={100} y={y} width={1720} height={h} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} /></Fade>
);
const Shrink: React.FC<{k: number; children: React.ReactNode}> = ({k, children}) => {
	const f = useCurrentFrame();
	const s = 1 - (1 - k) * smooth(prog(f, 0, 20));
	return <g transform={`translate(100,178) scale(${s}) translate(-100,-178)`}>{children}</g>;
};

// ---------- 11/12. Question 1 ----------
const A1 = 'attempt-1';
const K11 = cues(sc(A1), {turn: 'Your turn', lake: 'A lake has', powdered: 'Powdered limestone', explain: 'Explain how', include: 'Include a balanced', pause: 'Pause here'});
const Q1 = (t: [number, number, number, number], marks: QMark[] = []) => qCheck([
	{text: 'A lake has become acidic as a result of acid rain, and its fish population is declining.', at: t[0]},
	{text: 'Powdered limestone is added to the lake.', at: t[1]},
	{text: 'Explain how the limestone raises the pH of the lake water.', at: t[2], para: true},
	{text: 'Include a balanced equation in your answer.', at: t[3]},
] as QBlock[], marks);
qCheck(Q1([0, 0, 0, 0]).blocks, [{phrase: 'Powdered limestone', at: 0}, {phrase: 'Include a balanced equation', at: 0}, {phrase: 'raises the pH', at: 0}]);
const Question1: React.FC<{t: [number, number, number, number]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={330} at={t[0] - 6} />
		<QText q={Q1(t, marks)} x={QX} y={272} w={QW} size={44} card={false} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<TaskLine text="Your turn" at={K11.turn} />
		<Question1 t={[K11.lake, K11.powdered, K11.explain, K11.include]} />
		<PauseHold h={hold(A1)} at={K11.pause} x={140} y={720} cx={1560} cy={720} />
	</Overlay>
);

const F1 = 'feedback-1';
const K12 = cues(sc(F1), {carb: 'carbonate ion in', accepts: 'accepts two hydrogen', breaks: 'breaks into water', co2: 'carbon dioxide', eq: 'C a C O three', gives: 'gives C a two', used: 'used up', rises: 'pH rises', saying: 'Saying that calcium', trap: 'the trap', dont: "don't react", does: 'does the work'});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const L = {cx: 1540, cy: 640, r: 180};
	const cx = L.cx - 10, cy = L.cy + 20;
	const hop1 = K12.accepts, hop2 = K12.accepts + 30;
	const split = smooth(prog(f, K12.breaks, 26));
	const rise = smooth(prog(f, K12.breaks + 20, 80));
	const items = eq(['CaCO_3(s)', '+', '2H^{+}(aq)', '->', 'Ca^{2+}(aq)', '+', 'H_2O(l)', '+', 'CO_2(g)'], [K12.eq, K12.eq + 30, K12.eq + 44, K12.gives - 6, K12.gives + 10, K12.gives + 50, K12.gives + 58, K12.gives + 80, K12.gives + 88]);
	const ES = fitSize(items, 1150, 46);
	const ph = keys([[K12.used, 4.5], [K12.rises + 20, 6.8]]);
	return (
		<Overlay>
			<Shrink k={0.66}>
				<Question1 t={[-100, -100, -100, -100]} marks={[{phrase: 'Powdered limestone', at: K12.carb}, {phrase: 'Include a balanced equation', at: K12.eq + 10}, {phrase: 'raises the pH', at: K12.used}]} />
			</Shrink>
			<TTile x={140} y={520} text="CaCO_3(s)" at={K12.carb + 6} />
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K12.accepts - 16}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#eef6fb" />
				<g opacity={1 - split}><Mol x={cx} y={cy} m={f >= hop1 + 26 ? 'HCO3' : 'CO3'} s={0.95} take={f >= hop2 + 26 ? 1 : 0} /></g>
				<ProtonHop a={[L.cx - L.r + 30, L.cy - 90]} b={slotAt('CO3', cx, cy, 0.95)} at={hop1} s={0.8} bow={-30} />
				<ProtonHop a={[L.cx - L.r + 30, L.cy + 100]} b={slotAt('HCO3', cx, cy, 0.95)} at={hop2} s={0.8} bow={40} />
				{split > 0.01 ? <>
					<Mol x={cx - 60} y={cy + 56} m="H2O" s={0.9} o={split} />
					<g transform={`translate(0,${-rise * 100})`} opacity={split}>
						<circle cx={cx + 80} cy={cy - 10} r={56} fill={CO2C} opacity={0.35} stroke={CO2_INK} strokeWidth={3} />
						<Mol x={cx + 80} y={cy - 10} m="CO2" s={0.66} />
					</g>
				</> : null}
			</LensFrame>
			<EqLine items={items} x={140} y={660} size={ES} />
			<PHBar x={200} y={760} w={620} at={K12.used - 10} marks={[{v: ph, at: K12.used - 10}]} />
			<AChip x={140} y={850} text="H^{+} used up, so pH rises" size={38} color={TEAL} hand={false} at={K12.rises} />
			<Mistake x={900} y={860} text="Ca^{2+} ions neutralise H^{+}" at={K12.trap} note="the carbonate accepts H^{+}" size={34} />
			{void K12.co2}{void K12.saying}{void K12.dont}{void K12.does}{void INK}
		</Overlay>
	);
};

// ---------- 13/14. Question 2 ----------
const A2 = 'attempt-2';
const K13 = cues(sc(A2), {last: 'Last one', some: 'Some power stations', products: 'The products are', write: 'Write a balanced', pause: 'Pause here'});
const Q2 = (t: [number, number, number], marks: QMark[] = []) => qCheck([
	{text: 'Some power stations remove sulfur dioxide from flue gas using powdered limestone, CaCO₃, instead of calcium hydroxide.', at: t[0]},
	{text: 'The products are calcium sulfite and one gas.', at: t[1]},
	{text: 'Write a balanced equation for this reaction, and identify one disadvantage of using limestone.', at: t[2], para: true},
] as QBlock[], marks);
qCheck(Q2([0, 0, 0]).blocks, [{phrase: 'powdered limestone, CaCO₃', at: 0}, {phrase: 'calcium sulfite and one gas', at: 0}, {phrase: 'one disadvantage', at: 0}]);
const Question2: React.FC<{t: [number, number, number]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={330} at={t[0] - 6} />
		<QText q={Q2(t, marks)} x={QX} y={272} w={QW} size={44} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<TaskLine text="Last one" at={K13.last} />
		<Question2 t={[K13.some, K13.products, K13.write]} />
		<PauseHold h={hold(A2)} at={K13.pause} x={140} y={720} cx={1560} cy={720} />
	</Overlay>
);

const F2 = 'feedback-2';
const K14 = cues(sc(F2), {so2: 'plus sulfur dioxide', caso3: 'gives calcium sulfite', co2: 'plus carbon dioxide', balanced: 'already balanced', nowater: "there's no water", hyd: 'any hydrogen', dis: 'The disadvantage', releases: 'releases carbon dioxide', green: 'a greenhouse gas', cheaper: 'limestone is cheaper', slip: 'classic slip', check: 'Check the hydrogens'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const items = eq(['CaCO_3(s)', '+', 'SO_2(g)', '->', 'CaSO_3(s)', '+', 'CO_2(g)'], [0, K14.so2 - 4, K14.so2, K14.caso3 - 4, K14.caso3 + 6, K14.co2, K14.co2 + 8]);
	const ES = fitSize(items, 1150, 52), EX = 140, EY = 600;
	const a = eSpan(items, 0, ES, EX), b = eSpan(items, 2, ES, EX);
	const S = {x: 1480, y: 560, h: 400};
	const plume = natPt(SCRUB, S.x, S.y, S.h, 1255, 280);
	return (
		<Overlay>
			<Shrink k={0.66}>
				<Question2 t={[-100, -100, -100]} marks={[{phrase: 'powdered limestone, CaCO₃', at: K14.caso3 - 10}, {phrase: 'calcium sulfite and one gas', at: K14.caso3 + 6}, {phrase: 'one disadvantage', at: K14.releases}]} />
			</Shrink>
			<EqLine items={items} x={EX} y={EY} size={ES} />
			<Sx x={EX} y={EY + 58} text="Ca 1, S 1, C 1, O 5 = 5" size={30} color={INK_SOFT} weight={600} at={K14.balanced} />
			<Ring cx={(a.x1 + b.x2) / 2} cy={EY - ES * 0.32} rx={(b.x2 - a.x1) / 2 + 24} ry={ES * 0.78} at={K14.hyd - 10} out={K14.dis + 30} color={AMBER} seed={4} />
			<Note x={(a.x1 + b.x2) / 2} y={EY - ES - 34} text="no H" size={40} color={AMBER} anchor="middle" at={K14.hyd} out={K14.dis + 30} />
			<AChip x={EX} y={700} text="Disadvantage: releases CO_2, a greenhouse gas" size={40} color={TEAL} hand={false} at={K14.green} />
			<Note x={EX + 8} y={810} text="advantage: limestone is cheaper" size={32} color={INK_SOFT} hand={false} at={K14.cheaper} />
			<PlateAt p={SCRUB} x={S.x} y={S.y} h={S.h} at={K14.releases - 6} />
			<ellipse cx={plume[0]} cy={plume[1]} rx={48} ry={40} fill={CO2C} opacity={0.6 * prog(f, K14.releases + 6, 20)} />
			<Note x={S.x + picW(SCRUB, S.h) / 2} y={S.y + S.h + 44} text="CO_2 out" size={32} color={CO2_INK} anchor="middle" at={K14.releases + 10} />
			<Mistake x={EX} y={860} text="CaCO_3 + SO_2 → CaSO_3 + H_2O" at={K14.slip} note="no hydrogen, so no water" size={34} />
			{void K14.nowater}{void K14.check}{void PicH}
		</Overlay>
	);
};

// ---------- 15. Decision rule and handoff ----------
const DR = 'decision-rule';
const K15 = cues(sc(DR), {any: 'for any neutralisation', name: "name what's", choose: 'choose a treatment', write: 'write the equation', say: 'say what happens', next: 'Next', strong: 'are strong', conc: 'from concentration'});
export const SceneDecision: React.FC = () => (
	<>
		<Heading text="For any neutralisation application" at={4} size={58} />
		<Overlay>
			<ChoiceCard at={-100} />
			<RuleCard x={96} y={190} w={1728} at={K15.any} lh={84} lines={[
				{t: '1  Problem: what is too acidic (or too basic), and why?', at: K15.name, lit: [K15.name, K15.choose], size: 40},
				{t: '2  Treatment: safe, cheap, gentle.', at: K15.choose, lit: [K15.choose, K15.write], size: 40},
				{t: '3  Equation: hydroxide gives water; carbonate gives water and CO_2; oxide gives a salt.', at: K15.write, lit: [K15.write, K15.say], size: 38},
				{t: '4  Effect: pH moves towards 7; what is left behind.', at: K15.say, lit: [K15.say, K15.next], size: 40},
			]} />
			<AChip x={96} y={680} text="Next: strong and weak acids, and concentration" size={40} color={TEAL} at={K15.next} />
			<PlateAt p={PHMETER} x={1300} y={620} h={340} at={K15.strong} />
			{void K15.conc}
		</Overlay>
	</>
);

// ---------- 16. Key notes ----------
const NOTES = [
	'Neutralising uses up excess H^{+} (or OH^{-}), so pH moves towards 7. Choose a base that is safe, cheap and gentle, and check what it leaves behind.',
	'Antacids: Mg(OH)_2 + 2HCl → MgCl_2 + 2H_2O; CaCO_3 + 2HCl → CaCl_2 + H_2O + CO_2 (only carbonates give CO_2). NaOH is caustic.',
	'Acidic soil (below about pH 5.5, dissolved Al^{3+} harms roots): agricultural lime, CaCO_3 + 2H^{+} → Ca^{2+} + H_2O + CO_2. The carbonate accepts the H^{+}.',
	'Flue gas: SO_2 is an acidic oxide (no H of its own; in water it makes H_2SO_3). Scrubber: Ca(OH)_2 + SO_2 → CaSO_3 + H_2O; the solid is collected. With limestone: CaCO_3 + SO_2 → CaSO_3 + CO_2.',
	'Acid mine drainage: hydrated lime (faster, reaches a higher pH) neutralises H^{+} + OH^{-} → H_2O, and the higher pH precipitates metals: Fe^{3+} + 3OH^{-} → Fe(OH)_3(s).',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={30} aidTop={800} aids={['Every fix leaves something behind.', 'Problem, treatment, equation, effect on pH.']} tag="treatment: safe, cheap, gentle" />
);
