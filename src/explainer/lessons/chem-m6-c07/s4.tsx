// M6 C07 scenes 14 to 19: two worded attempts (full question on screen through the countdown), brief feedback with
// the givens underlined as they are used and one crossed mistake each, the decision rule and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {PHMETER} from './assets';
import {
	AChip, BASE, BASE_INK, Fade, GREY_INK, GateIcon, INK, INK_SOFT, KeyNotesBoard, LimitBars, MistakeX, Note, Overlay, P, PROTON, PROTON_INK, PauseHold, PlateAt, QText, RuleCard, Sx, TEAL, TaskLine,
	WLine, qCheck, smooth,
} from './parts';
import type {BarSpec, QBlock, QMark} from './parts';

const QX = 140, QW = 1640;
export const CardBox: React.FC<{y: number; h: number; at: number}> = ({y, h, at}) => (
	<Fade at={at}><rect x={100} y={y} width={1720} height={h} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} /></Fade>
);
/** The question group shrinks towards the top during feedback. */
export const Shrink: React.FC<{k: number; children: React.ReactNode}> = ({k, children}) => {
	const f = useCurrentFrame();
	const s = 1 - (1 - k) * smooth(prog(f, 0, 20));
	return <g transform={`translate(100,${178}) scale(${s}) translate(-100,-178)`}>{children}</g>;
};

// ---------- 14/15. Question 1 ----------
const A1 = 'attempt-1';
const K14 = cues(sc(A1), {turn: 'Your turn', tf: 'Twenty five millilitres', calc: 'Calculate the pH', pause: 'Pause here'});
const Q1 = (t: [number, number], marks: QMark[] = []) => qCheck([
	{text: '25.0 mL of 0.120 mol/L nitric acid is mixed with 35.0 mL of 0.0500 mol/L potassium hydroxide solution at 25 °C.', at: t[0]},
	{text: 'Calculate the pH of the resulting mixture.', at: t[1], para: true},
] as QBlock[], marks);
qCheck(Q1([0, 0]).blocks, [{phrase: '25.0 mL of 0.120 mol/L nitric acid', at: 0}, {phrase: '35.0 mL of 0.0500 mol/L potassium hydroxide', at: 0}, {phrase: '25.0 mL', at: 0}, {phrase: '35.0 mL', at: 0}]);
const Question1: React.FC<{t: [number, number]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={270} at={t[0] - 6} />
		<QText q={Q1(t, marks)} x={QX} y={272} w={QW} size={44} card={false} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<TaskLine text="Your turn" at={K14.turn} />
		<Question1 t={[K14.tf, K14.calc]} />
		<PauseHold h={hold(A1)} at={K14.pause} x={140} y={680} cx={1560} cy={680} />
	</Overlay>
);

const F1 = 'feedback-1';
const K15 = cues(sc(F1), {acid: 'The acid gives', z300: 'zero point zero zero three', base: 'and the base', z175: 'zero point zero zero one seven', left: 'left over', z125: 'zero point zero zero one two', sixty: 'sixty millilitres', so: 'So the pH', r1681: 'one point six eight', using: 'Using only the'});
const FA: BarSpec = {label: 'H^{+} 0.00300 mol', n: 0.003, color: PROTON, ink: PROTON_INK};
const FB: BarSpec = {label: 'OH^{-} 0.00175 mol', n: 0.00175, color: BASE, ink: BASE_INK};
export const SceneFeedback1: React.FC = () => {
	const X = 140, S = 38, RX = 1110;
	return (
		<Overlay>
			<Shrink k={0.66}>
				<Question1 t={[-100, -100]} marks={[{phrase: '25.0 mL of 0.120 mol/L nitric acid', at: K15.z300 - 10}, {phrase: '35.0 mL of 0.0500 mol/L potassium hydroxide', at: K15.z175 - 10}, {phrase: '25.0 mL', at: K15.sixty, color: TEAL}, {phrase: '35.0 mL', at: K15.sixty + 8, color: TEAL}]} />
			</Shrink>
			<WLine x={X} y={470} size={S} dim={K15.left} items={P('n(H^{+}) = 0.120 × 0.0250', K15.z300 - 6, {t: '= 0.00300 mol', color: PROTON_INK}, K15.z300 + 40)} />
			<WLine x={X} y={540} size={S} dim={K15.left} items={P('n(OH^{-}) = 0.0500 × 0.0350', K15.z175 - 10, {t: '= 0.00175 mol', color: BASE_INK}, K15.z175 + 40)} />
			<LimitBars x={RX} y={440} k={200000} a={FA} b={FB} at={K15.left - 24} use={K15.left} useDur={36} out={K15.sixty + 30} size={30} />
			<g opacity={1 - 0.6 * prog(useCurrentFrame(), K15.r1681, 14)}><AChip x={RX} y={600} text="excess H^{+} = 0.00125 mol" size={36} color={PROTON_INK} hand={false} at={K15.z125 + 20} /></g>
			<WLine x={X} y={630} size={S} dim={K15.r1681} items={P('V(total) = 0.0250 + 0.0350 = 0.0600 L', K15.sixty)} />
			<WLine x={X} y={710} size={S} dim={K15.r1681} items={P('[H_3O^{+}] = 0.00125 ÷ 0.0600', K15.sixty + 24, '= 0.02083 mol/L', K15.so)} />
			<WLine x={X} y={790} size={S} items={P('pH = −log(0.02083)', K15.so + 14, {t: '= 1.681', color: TEAL}, K15.r1681)} />
			<AChip x={RX} y={700} text="pH = 1.681 (3 s.f. → 3 d.p.)" size={40} color={TEAL} hand={false} at={K15.r1681 + 20} />
			<MistakeX x={RX} y={820} text="÷ 0.0250 L: pH 1.301" at={K15.using} cross={K15.using + 40} note="use the total volume" size={34} />
			{void K15.acid}{void K15.base}
		</Overlay>
	);
};

// ---------- 16/17. Question 2 ----------
const A2 = 'attempt-2';
const K16 = cues(sc(A2), {last: 'Last one', a: 'A potassium hydroxide', calc: 'Calculate the hydroxide', pause: 'Pause here'});
const Q2 = (t: [number, number], marks: QMark[] = []) => qCheck([
	{text: 'A potassium hydroxide solution has a pH of 12.30 at 25 °C.', at: t[0]},
	{text: 'Calculate the hydroxide ion concentration in this solution.', at: t[1], para: true},
] as QBlock[], marks);
qCheck(Q2([0, 0]).blocks, [{phrase: 'pH of 12.30 at 25 °C', at: 0}, {phrase: 'hydroxide ion concentration', at: 0}]);
const Question2: React.FC<{t: [number, number]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={220} at={t[0] - 6} />
		<QText q={Q2(t, marks)} x={QX} y={272} w={QW} size={44} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<TaskLine text="Last one" at={K16.last} />
		<Question2 t={[K16.a, K16.calc]} />
		<PauseHold h={hold(A2)} at={K16.pause} x={140} y={640} cx={1560} cy={660} />
	</Overlay>
);

const F2 = 'feedback-2';
const K17 = cues(sc(F2), {first: 'First the pOH', fourteen: 'fourteen minus twelve', r170: 'one point seven zero', then: 'Then the hydroxide', z020: 'zero point zero two zero', two: 'two significant figures', ten: 'Ten to the minus twelve', hyd: 'the hydronium concentration'});
export const SceneFeedback2: React.FC = () => {
	const X = 140, S = 42;
	return (
		<Overlay>
			<Shrink k={0.72}>
				<Question2 t={[-100, -100]} marks={[{phrase: 'pH of 12.30 at 25 °C', at: K17.fourteen - 10}, {phrase: 'hydroxide ion concentration', at: K17.then, color: TEAL}]} />
			</Shrink>
			<WLine x={X} y={470} size={S} dim={K17.z020} items={P('pOH = 14.00 − 12.30', K17.fourteen, {t: '= 1.70', color: BASE_INK}, K17.r170)} />
			<WLine x={X} y={560} size={S} items={P('[OH^{-}] = 10^{−1.70}', K17.then + 20, {t: '= 0.020 mol/L', color: TEAL}, K17.z020)} />
			<AChip x={1080} y={500} text="[OH^{-}] = 0.020 mol/L (2 s.f.)" size={42} color={TEAL} hand={false} at={K17.z020 + 24} />
			<MistakeX x={X} y={680} text="[OH^{-}] = 10^{−12.30} = 5.0 × 10^{−13} mol/L" at={K17.ten} cross={K17.hyd + 10} note="10^{−pH} gives H_3O^{+}" size={36} />
			{void K17.first}{void K17.two}
		</Overlay>
	);
};

// ---------- 18. Decision rule and handoff ----------
const DR = 'decision-rule';
const K18 = cues(sc(DR), {any: 'for any strong', work: 'work in moles', divide: 'divide by the', take: 'then take the', check: "check it's strong", weak: 'a weak acid', next: 'Next'});
export const SceneDecision: React.FC = () => (
	<>
		<Heading text="For any strong acid or base" at={4} size={58} />
		<Overlay>
			<GateIcon cx={140} cy={262} r={36} text="strong or weak?" at={K18.check} size={40} />
			<Fade at={K18.weak}>
				<path d={`M520,262 L640,262`} stroke={GREY_INK} strokeWidth={4} strokeDasharray="8 6" />
				<Sx x={660} y={274} text="weak: [H_3O^{+}] ≠ c, later video" size={34} color={GREY_INK} weight={600} at={K18.weak} />
			</Fade>
			<RuleCard x={96} y={330} w={1728} at={K18.any - 6} lh={88} lines={[
				{t: '1  Strong? Then [H_3O^{+}] = c (HCl, HNO_3), or count OH^{-} per formula unit.', at: K18.any, lit: [K18.any, K18.work], size: 38, hand: false},
				{t: '2  Diluted or mixed? Work in moles; neutralise first; ÷ total volume.', at: K18.work, lit: [K18.work, K18.take], size: 38, hand: false},
				{t: '3  pH = −log[H_3O^{+}]; for a base pOH first, pH = 14.00 − pOH (25 °C).', at: K18.take, lit: [K18.take, K18.check], size: 38, hand: false},
			]} />
			<AChip x={96} y={720} text="Next: strong acid and base pH practice, then weak acids and ICE tables" size={36} color={TEAL} hand={false} at={K18.next} />
			<PlateAt p={PHMETER} x={1500} y={690} h={300} at={K18.next + 6} />
			{void K18.divide}{void INK}{void INK_SOFT}{void Note}
		</Overlay>
	</>
);

// ---------- 19. Key notes ----------
const NOTES = [
	'pH = −log_10[H_3O^{+}] and [H_3O^{+}] = 10^{−pH}. One pH unit is a factor of 10. Decimal places in pH = significant figures in [H_3O^{+}].',
	'Kw = [H_3O^{+}][OH^{-}] = 1.0 × 10^{−14} at 25 °C, in every aqueous solution. Kw rises with temperature, so neutral (equal H_3O^{+} and OH^{-}) is pH 7.00 only at 25 °C.',
	'Strong acid: [H_3O^{+}] = c (HCl, HNO_3). Strong base: [OH^{-}] = c × number of OH^{-} per formula unit (2 for Ca(OH)_2, Ba(OH)_2). pOH = −log_10[OH^{-}]; pH = 14.00 − pOH at 25 °C. H_2SO_4: [H^{+}] = 2c only if told to assume both H^{+} are released completely.',
	'Dilution: moles stay the same, c = n ÷ new volume; pH moves toward 7 but never past it.',
	'Mixing a strong acid and strong base: n(H^{+}) and n(OH^{-}), subtract to find the excess, divide by the total volume, then pH (or pOH). Example: 40.0 mL of 0.150 mol/L HCl + 60.0 mL of 0.0800 mol/L Ba(OH)_2 → excess OH^{-} 0.00360 mol in 0.1000 L → pH 12.556.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={31} aidTop={800} aids={['Mixtures: neutralise first, then dilute.', 'One pH unit is ten times.']} tag="pH + pOH = 14 only at 25 °C" />
);
