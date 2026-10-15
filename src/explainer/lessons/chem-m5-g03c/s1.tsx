import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, DrawPath, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Chip, Fade, Overlay, Sx, TEAL} from '../chem-m5-c06/parts';
import {MiniIce} from '../chem-m5-c06/parts';
import {KeyNotesBoard} from '../chem-m5-c06a/s4';
import {sc} from './common';
import {DecisionRows, MistakeChip, QCard, TaskLine, TrapList, TrapStrip} from './board';

/** Part 1 trap rows (full list in the hook and the decision board; short labels in the strip). */
export const TRAPS_C = ['moles: ÷ volume', 'coefficient in the change row', 'not from zero: E − I', 'solid: out of K', 'convert back'];

// ---------- 1. Hook: where equilibrium calculations go wrong ----------
const H = 'hook-traps';
const KH = cues(sc(H), {rarely: 'rarely the algebra', trap: 'small trap', moles: 'moles where K', coef: 'a coefficient missed', zero: 'start at zero', solid: 'a solid left', two: 'two HSC-style questions', part2: 'part two has', hides: 'Each hides', pause: 'Pause and try', step: 'one step at a time', classic: 'the classic mistake'});
export const SceneHookC: React.FC = () => {
	const f = useCurrentFrame();
	const shrink = 958;
	const rows = [
		{text: 'moles given: divide by the volume', at: KH.moles},
		{text: 'a coefficient in the change row', at: KH.coef},
		{text: 'a value that does not start at zero: E − I', at: KH.zero},
		{text: 'a solid: leave it out of K', at: KH.solid},
		{text: 'convert back to moles or grams', at: KH.solid + 34},
	];
	const right = prog(f, shrink, 22);
	return (
		<>
			<Overlay>
				<TaskLine text="Where equilibrium calculations go wrong" at={4} size={60} />
				{/* it is rarely the algebra */}
				<Fade at={KH.rarely - 6} out={KH.moles - 10}>
					<Sx x={1150} y={330} text="x = 0.150 − 0.50x" size={46} color={INK_SOFT} at={KH.rarely - 6} />
					<Sx x={1150} y={390} text="rarely the problem" size={38} color={TEAL} hand at={KH.rarely + 6} />
				</Fade>
				<TrapList rows={rows} shrink={shrink} y={300} titleAt={KH.trap} title="a small trap, early on:" />
				{/* two question cards, two more in part 2 behind them */}
				<g opacity={1 - right}>
					<QCard x={1420} y={320} rot={6} label="part 2" at={KH.part2} faint />
					<QCard x={1470} y={420} rot={9} label="part 2" at={KH.part2 + 6} faint />
					<QCard x={1060} y={330} rot={-4} label="Question 1" at={KH.two} />
					<QCard x={1300} y={380} rot={3} label="Question 2" at={KH.two + 8} />
					<Sx x={1250} y={680} text="each hides at least one trap" size={36} color={AMBER_INK} hand at={KH.hides} />
					<MistakeChip x={1180} y={712} text="the classic mistake" at={KH.classic} size={32} />
				</g>
				{/* the method, one step at a time */}
				<Fade at={KH.step} out={shrink}>
					<MiniIce x={96} y={790} w={170} at={KH.step} litRows={[[2, KH.step + 10], [1, KH.step + 30]]} />
					<Sx x={300} y={830} text="I C E: equilibrium value into E first," size={38} color={TEAL} hand at={KH.step + 4} />
					<Sx x={300} y={880} text="then Change = E − I, then the coefficients" size={38} color={TEAL} hand at={KH.step + 14} />
				</Fade>
				<TrapStrip labels={TRAPS_C} at={shrink + 8} />
				<Chip x={1320} y={880} w={420} text="pause, try, then check" size={36} at={KH.pause} out={shrink} color={TEAL} />
			</Overlay>
		</>
	);
};

// ---------- 4. Decision board ----------
const D = 'decision-board';
const KD = cues(sc(D), {look: 'what to look for', moles: 'Moles and a volume', one: 'One equilibrium value', coef: 'A coefficient', solid: 'A solid or water', grams: 'Asked for grams', next: 'Next part two'});
/** Three small coded icons for part 2: a flipping equation strip, a tiny-K log mark and a square bracket. */
const Part2Icons: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => {
	const f = useCurrentFrame();
	const u = Math.min(1, Math.max(0, (f - at - 10) / 24));
	const sw = u * u * (3 - 2 * u), lift = Math.sin(sw * Math.PI) * 14;
	return (
		<Fade at={at}>
			<g transform={`translate(${x + 40},${y})`}>
				<text x={-34 + 68 * sw} y={10 - lift} textAnchor="middle" fill={INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}}>A</text>
				<path d="M-18,-4 L18,-4 M10,-10 L18,-4 M18,6 L-18,6 M-10,12 L-18,6" fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />
				<text x={34 - 68 * sw} y={10 + lift} textAnchor="middle" fill={INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}}>B</text>
			</g>
			<g>
				<path d={`M${x + 110},${y} L${x + 210},${y}`} stroke={INK} strokeWidth={3} />
				{[0, 1, 2, 3].map(k => <path key={k} d={`M${x + 110 + k * 33},${y - 8} L${x + 110 + k * 33},${y + 8}`} stroke={INK} strokeWidth={3} />)}
				<circle cx={x + 118} cy={y} r={8} fill={TEAL} />
			</g>
			<Sx x={x + 240} y={y + 12} text="( )^{2}" size={36} color={AMBER_INK} hand at={at} />
		</Fade>
	);
};
export const SceneDecisionC: React.FC = () => (
	<>
		<Overlay>
			<TaskLine text="What you see, and what you do first" at={4} size={58} />
			<DecisionRows rows={[
				{see: 'Moles and a volume', doo: ['divide by the volume first'], badge: 'Q1, Q2', at: KD.moles, lit: [KD.moles, KD.one]},
				{see: 'One equilibrium value', doo: ['into the E row; Change = E − I gives the sign'], badge: 'Q2', at: KD.one, lit: [KD.one, KD.coef]},
				{see: 'A coefficient other than 1', doo: ['the change row follows it'], badge: 'Q2', at: KD.coef, lit: [KD.coef, KD.solid]},
				{see: 'A solid, or water as the solvent', doo: ['leave it out of K'], badge: 'Q1', at: KD.solid, lit: [KD.solid, KD.grams]},
				{see: 'Asked for mol or g', doo: ['× volume, × molar mass, at the end'], badge: 'Q1', at: KD.grams, lit: [KD.grams, KD.next]},
			]} />
			<Fade at={KD.grams + 40}>
				<rect x={1150} y={896} width={674} height={56} rx={28} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 6" />
				<Sx x={1487} y={934} text="K not tiny (like 0.50): keep x (Q1)" size={30} color={INK_SOFT} anchor="middle" hand at={KD.grams + 40} />
			</Fade>
			<Fade at={KD.next}>
				<rect x={96} y={890} width={1010} height={70} rx={35} fill="#fffdf8" stroke={TEAL} strokeWidth={3} />
				<Sx x={126} y={938} text="Next: part 2, questions 3 and 4" size={40} color={TEAL} hand at={KD.next} />
				<Part2Icons x={700} y={924} at={KD.next + 10} />
			</Fade>
		</Overlay>
	</>
);

// ---------- 5. Key notes ----------
const NOTES = [
	'Moles in a vessel: divide by the volume before anything goes into the table or into K, including a measured equilibrium amount. Convert back at the end: mol/L × volume gives mol; mol × molar mass gives grams.',
	'ICE: the measured equilibrium value goes in the Equilibrium row first. Change = equilibrium minus initial, and its sign shows which way the mixture ran. Only the change row follows the coefficients. Equilibrium = initial + change.',
	'Leave pure solids, pure liquids and water as the solvent out of K. No unit is written for K.',
	'Drop x only when K is tiny. When K is not tiny (like 0.50), keep x: multiply both sides by the bottom, then divide.',
];
export const SceneNotesC: React.FC = () => (
	<KeyNotesBoard notes={NOTES} aids={['Divide first. E row first. Convert back last.']} tag="a vessel of known volume; E row first when a value at equilibrium is measured" aidTop={740} size={36} />
);
void DrawPath; void INK;
