// M6 C03 scenes 13 to 18: two worded attempts (full question on screen through the countdown), brief feedback with
// the givens underlined as they are used and one crossed mistake each, the decision rule and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {CAL_G} from './assets';
import {
	AChip, BASE, BASE_INK, CalCup, CupOutline, Fade, HEAT_INK, HeatOut, INK, INK_SOFT, KeyNotesBoard, LimitBars, Mistake, Note, Overlay, P, PROTON, PROTON_INK, PauseHold, QText, Ripples,
	RuleCard, Sx, TEAL, TaskLine, VBracket, WLine, WTok, calPt, calW, qCheck, smooth,
} from './parts';
import type {BarSpec, QBlock, QMark} from './parts';

const QX = 140, QW = 1640;
const CardBox: React.FC<{y: number; h: number; at: number}> = ({y, h, at}) => (
	<Fade at={at}><rect x={100} y={y} width={1720} height={h} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} /></Fade>
);
/** The question group shrinks towards the top-left during feedback. */
const Shrink: React.FC<{k: number; children: React.ReactNode}> = ({k, children}) => {
	const f = useCurrentFrame();
	const s = 1 - (1 - k) * smooth(prog(f, 0, 20));
	return <g transform={`translate(100,${178}) scale(${s}) translate(-100,-178)`}>{children}</g>;
};

// ---------- 13/14. Question 1 ----------
const A1 = 'attempt-1';
const K13 = cues(sc(A1), {turn: 'Your turn', forty: 'Forty point zero', temp: 'The temperature rises', use: 'Use the density', calc: 'calculate the molar', pause: 'Pause here'});
const Q1 = (t: [number, number, number, number], marks: QMark[] = []) => qCheck([
	{text: '40.0 mL of 1.50 mol/L nitric acid is mixed with 50.0 mL of 1.00 mol/L potassium hydroxide solution in a polystyrene cup.', at: t[0]},
	{text: 'The temperature rises from 21.0 °C to 28.4 °C.', at: t[1]},
	{text: 'Assume the density of the mixture is 1.00 g/mL and its specific heat capacity is 4.18 J g⁻¹ °C⁻¹.', at: t[2]},
	{text: 'Calculate the molar enthalpy of neutralisation.', at: t[3], para: true},
] as QBlock[], marks);
qCheck(Q1([0, 0, 0, 0]).blocks, [{phrase: '40.0 mL of 1.50 mol/L nitric acid', at: 0}, {phrase: '50.0 mL of 1.00 mol/L potassium hydroxide', at: 0}, {phrase: 'density of the mixture is 1.00 g/mL', at: 0}, {phrase: '21.0 °C to 28.4 °C', at: 0}, {phrase: 'specific heat capacity is 4.18 J g⁻¹ °C⁻¹', at: 0}]);
const Question1: React.FC<{t: [number, number, number, number]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={300} at={t[0] - 6} />
		<QText q={Q1(t, marks)} x={QX} y={272} w={QW} size={42} card={false} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<TaskLine text="Your turn" at={K13.turn} />
		<Question1 t={[K13.forty, K13.temp, K13.use, K13.calc]} />
		<PauseHold h={hold(A1)} at={K13.pause} x={140} y={690} cx={1560} cy={680} />
	</Overlay>
);

const F1 = 'feedback-1';
const K14 = cues(sc(F1), {moles: 'Moles first', z6: 'zero point zero six', z5: 'and zero point zero five', runs: 'runs out first', ninety: 'ninety grams', dT: 'delta T is seven', q: 'so q is about', res: 'two thousand seven hundred and eighty four', divide: 'Divide by the moles', minus: 'minus fifty six', excess: 'in excess'});
const FA: BarSpec = {label: 'H^{+} 0.0600 mol', n: 0.06, color: PROTON, ink: PROTON_INK};
const FB: BarSpec = {label: 'OH^{-} 0.0500 mol', n: 0.05, color: BASE, ink: BASE_INK};
export const SceneFeedback1: React.FC = () => {
	const X = 140, S = 38, RX = 1110;
	return (
		<Overlay>
			<Shrink k={0.66}>
				<Question1 t={[-100, -100, -100, -100]} marks={[{phrase: '40.0 mL of 1.50 mol/L nitric acid', at: K14.z6 - 10}, {phrase: '50.0 mL of 1.00 mol/L potassium hydroxide', at: K14.z5}, {phrase: 'density of the mixture is 1.00 g/mL', at: K14.ninety - 10}, {phrase: '21.0 °C to 28.4 °C', at: K14.dT}, {phrase: 'specific heat capacity is 4.18 J g⁻¹ °C⁻¹', at: K14.q}]} />
			</Shrink>
			<WLine x={X} y={560} size={S} dim={K14.ninety} items={P('n(H^{+}) = 1.50 × 0.0400', K14.z6 - 6, {t: '= 0.0600 mol', color: PROTON_INK}, K14.z6 + 40)} />
			<WLine x={X} y={630} size={S} dim={K14.ninety} items={P('n(OH^{-}) = 1.00 × 0.0500', K14.z5, {t: '= 0.0500 mol', color: BASE_INK}, K14.z5 + 40)} />
			<LimitBars x={RX} y={520} k={4000} a={FA} b={FB} at={K14.runs - 30} use={K14.runs} useDur={40} out={K14.ninety - 10} size={30} />
			<AChip x={RX} y={690} text="n(H_2O) = 0.0500 mol" size={36} color={TEAL} hand={false} at={K14.runs + 30} />
			<WLine x={X} y={730} size={S} dim={K14.divide} items={P('m = 40.0 + 50.0 = 90.0 g', K14.ninety)} />
			<WLine x={X} y={800} size={S} dim={K14.divide} items={P('ΔT = 28.4 − 21.0 = 7.4 °C', K14.dT)} />
			<WLine x={X} y={870} size={S} dim={K14.minus} items={P('q = 90.0 × 4.18 × 7.4', K14.q, '= 2783.9 J', K14.res)} />
			<WLine x={X} y={950} size={S} items={P('ΔH = −2.784 kJ ÷ 0.0500 mol', K14.divide, '= −55.68 kJ/mol', K14.minus - 24)} />
			<AChip x={RX} y={800} text="ΔH = −56 kJ/mol" size={46} color={TEAL} hand={false} at={K14.minus} />
			<Note x={RX + 8} y={910} text="2 s.f., as ΔT = 7.4 °C" size={32} color={INK_SOFT} hand={false} at={K14.minus + 12} />
			<Mistake x={RX} y={530} text="÷ 0.0600 mol: −46 kJ/mol" at={K14.excess} note="use the reactant that runs out" size={34} />
			{void K14.moles}
		</Overlay>
	);
};

// ---------- 15/16. Question 2 ----------
const A2 = 'attempt-2';
const K15 = cues(sc(A2), {last: 'Last one', student: 'A student repeats', predict: 'Predict how', just: 'Justify your answer', pause: 'Pause here'});
const Q2 = (t: [number, number, number], marks: QMark[] = []) => qCheck([
	{text: 'A student repeats the experiment in which 50.0 mL of 1.00 mol/L HCl was mixed with 50.0 mL of 1.00 mol/L NaOH, this time using 100.0 mL of each solution at the same concentrations.', at: t[0]},
	{text: 'Predict how the temperature rise and the calculated enthalpy of neutralisation would compare with the first experiment.', at: t[1], para: true},
	{text: 'Justify your answer.', at: t[2]},
] as QBlock[], marks);
qCheck(Q2([0, 0, 0]).blocks, [{phrase: '100.0 mL of each solution', at: 0}, {phrase: 'temperature rise', at: 0}, {phrase: 'calculated enthalpy of neutralisation', at: 0}]);
const Question2: React.FC<{t: [number, number, number]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={300} at={t[0] - 6} />
		<QText q={Q2(t, marks)} x={QX} y={272} w={QW} size={42} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<TaskLine text="Last one" at={K15.last} />
		<Question2 t={[K15.student, K15.predict, K15.just]} />
		<PauseHold h={hold(A2)} at={K15.pause} x={140} y={690} cx={1560} cy={680} />
	</Overlay>
);

const F2 = 'feedback-2';
const K16 = cues(sc(F2), {same: 'about the same', heat: 'twice the heat', mass: 'twice the mass', still: 'still about six', per: 'per mole of water', slip: 'classic slip'});
const TwoCups: React.FC<{at: number; massAt: number}> = ({at, massAt}) => {
	const f = useCurrentFrame();
	const c1 = {x: 150, y: 760, w: 180, h: 200}, c2 = {x: 420, y: 640, w: 280, h: 320};
	const pts1: [number, number][] = [[c1.x + 62, c1.y + 140], [c1.x + 118, c1.y + 140]];
	const pts2: [number, number][] = [[c2.x + 90, c2.y + 170], [c2.x + 190, c2.y + 170], [c2.x + 90, c2.y + 250], [c2.x + 190, c2.y + 250]];
	return (
		<g>
			<CupOutline x={c1.x} y={c1.y} w={c1.w} h={c1.h} fill={0.5} at={at}>
				{pts1.map(([x, y], i) => <WTok key={i} x={x} y={y} s={0.85} o={prog(f, at + 8, 10)} />)}
				{pts1.map(([x, y], i) => <Ripples key={'r' + i} x={x} y={y} at={at + 14 + i * 6} r={56} />)}
			</CupOutline>
			<CupOutline x={c2.x} y={c2.y} w={c2.w} h={c2.h} fill={0.62} at={at + 6}>
				{pts2.map(([x, y], i) => <WTok key={i} x={x} y={y} s={0.85} o={prog(f, at + 14 + i * 3, 10)} />)}
				{pts2.map(([x, y], i) => <Ripples key={'r' + i} x={x} y={y} at={at + 20 + i * 6} r={56} />)}
			</CupOutline>
			<Note x={c1.x + c1.w / 2} y={c1.y - 24} text="q" size={40} color={HEAT_INK} anchor="middle" at={at + 10} />
			<Note x={c2.x + c2.w / 2} y={c2.y - 24} text="2 × q" size={40} color={HEAT_INK} anchor="middle" at={at + 16} />
			<VBracket x={c2.x + c2.w + 10} y1={c2.y + c2.h * 0.38} y2={c2.y + c2.h} at={massAt} color={TEAL} d={24} />
			<Note x={c2.x + c2.w + 50} y={c2.y + c2.h * 0.72} text="2 × m" size={40} color={TEAL} at={massAt + 6} />
		</g>
	);
};
export const SceneFeedback2: React.FC = () => {
	const FX = 940;
	return (
		<Overlay>
			<Shrink k={0.66}>
				<Question2 t={[-100, -100, -100]} marks={[{phrase: '100.0 mL of each solution', at: K16.same}]} />
			</Shrink>
			<AChip x={140} y={500} text="ΔT ≈ same (6.5 °C);  ΔH ≈ same (−54 kJ/mol)" size={40} color={TEAL} hand={false} at={K16.same + 10} />
			<TwoCups at={K16.heat - 10} massAt={K16.mass} />
			<Sx x={FX} y={700} text="ΔT = q ÷ (m c)" size={44} color={INK} weight={700} at={K16.mass + 16} />
			<Sx x={FX} y={770} text="2q ÷ 2m = same ΔT" size={44} color={TEAL} weight={700} at={K16.still} />
			<Sx x={FX} y={860} text="ΔH: 2q ÷ 2n = same" size={44} color={TEAL} weight={700} at={K16.per} />
			<Mistake x={FX} y={900} text="ΔT doubles to 13 °C" at={K16.slip} note="twice the mass to warm" size={34} />
		</Overlay>
	);
};

// ---------- 17. Decision rule and handoff ----------
const DR = 'decision-rule';
const K17 = cues(sc(DR), {any: 'for any neutralisation', smaller: 'the smaller of', use: 'Use the mass', divide: 'divide by the moles', make: 'make delta H negative', next: 'Next', lab: 'in the lab', cut: 'cutting down'});
export const SceneDecision: React.FC = () => {
	const C = {x: 1420, y: 660, h: 340};
	const lidR = calPt(C.x, C.y, C.h, CAL_G.lidR), lidL = calPt(C.x, C.y, C.h, CAL_G.lidL), wl = calPt(C.x, C.y, C.h, CAL_G.wallL), wr = calPt(C.x, C.y, C.h, CAL_G.wallR);
	return (
		<>
			<Heading text="For any neutralisation heat question" at={4} size={58} />
			<Overlay>
				<RuleCard x={96} y={190} w={1728} at={K17.any} lh={84} lines={[
					{t: '1  Moles of H^{+} and OH^{-}: the smaller sets n(H_2O).', at: K17.smaller, lit: [K17.smaller, K17.use], size: 42},
					{t: '2  q = mcΔT with the mass of all the solution.', at: K17.use, lit: [K17.use, K17.divide], size: 42},
					{t: '3  ΔH = −q ÷ n(H_2O), in kJ/mol, rounded.', at: K17.divide, lit: [K17.divide, K17.make], size: 42},
					{t: '4  Temperature up: ΔH negative.', at: K17.make, lit: [K17.make, K17.next], size: 42},
				]} />
				<AChip x={96} y={680} text="Next: measuring the enthalpy of neutralisation in the lab" size={40} color={TEAL} at={K17.next} />
				<Fade at={K17.lab - 10}><CalCup x={C.x} y={C.y} h={C.h} /></Fade>
				<HeatOut pts={[[lidR[0] + 6, lidR[1], -0.5], [lidL[0] - 6, lidL[1], -2.64], [wl[0] - 6, wl[1], Math.PI], [wr[0] + 6, wr[1], 0]]} at={K17.cut} />
				<Note x={C.x - 60} y={C.y + 200} anchor="end" text="cut the heat loss" size={34} color={HEAT_INK} at={K17.cut + 10} />
				{void INK}
			</Overlay>
		</>
	);
};

// ---------- 18. Key notes ----------
const NOTES = [
	'Enthalpy of neutralisation: the enthalpy change per mole of water formed. Exothermic, so ΔH is negative: about −57 kJ/mol for a strong acid with a base fully split into ions (only H^{+}(aq) + OH^{-}(aq) → H_2O(l) happens; the other ions are spectators).',
	'q = mcΔT: m = mass of all the solution (1 mL ≈ 1 g), c = 4.18 J g^{-1} °C^{-1}, ΔT = T(final) − T(initial).',
	'n = cV for H^{+} and OH^{-} (H_2SO_4 gives 2 H^{+}). The one that runs out first sets n(H_2O). ΔH = −q ÷ n(H_2O), in kJ/mol, rounded to the data’s significant figures.',
	'Example: 50.0 mL each of 1.00 mol/L HCl and NaOH, 21.5 → 28.0 °C: q = 2717 J, n(H_2O) = 0.0500 mol, ΔH = −54 kJ/mol (less negative than −57, mainly heat loss).',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={33} aidTop={760} aids={['Per mole of water, not per mole of acid.', 'Temperature up, ΔH negative.']} tag="use the mass of everything in the cup" />
);
