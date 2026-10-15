import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, DrawPath, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Chip, Fade, MiniIce, Overlay, Sx, TEAL} from '../chem-m5-c06/parts';
import {CurveArrow} from '../chem-m5-c06a/types';
import {KeyNotesBoard} from '../chem-m5-c06a/s4';
import {sc} from './common';
import {DecisionRows, QCard, TaskLine, Thermo, TrapList, TrapStrip} from '../chem-m5-g03c/board';

/** Part 2 trap rows (short labels for the strip). */
export const TRAPS_D = ['moles: ÷ volume', 'K for another equation', 'tiny K: 5% check', 'convert back', 'hidden perfect square', 'two parts, one K'];

/** A tiny equation icon "A, arrows, B" that flips left to right from `at`. */
const FlipIcon: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => {
	const f = useCurrentFrame();
	const u = Math.min(1, Math.max(0, (f - at - 8) / 22));
	const sw = u * u * (3 - 2 * u), lift = Math.sin(sw * Math.PI) * 14;
	return (
		<Fade at={at}>
			<g transform={`translate(${x},${y})`}>
				<text x={-38 + 76 * sw} y={12 - lift} textAnchor="middle" fill={INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36}}>A</text>
				<path d="M-20,-4 L20,-4 M12,-10 L20,-4 M20,6 L-20,6 M-12,12 L-20,6" fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />
				<text x={38 - 76 * sw} y={12 + lift} textAnchor="middle" fill={INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36}}>B</text>
			</g>
			<CurveArrow d={[[x + 50, y - 30], [x + 30, y - 66], [x - 30, y - 66], [x - 50, y - 32]]} at={at + 4} dur={16} />
		</Fade>
	);
};
/** A small power-of-ten mark with K near 10^-5. */
const LogMark: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => (
	<Fade at={at}>
		<DrawPath d={`M${x},${y} L${x + 170},${y}`} at={at} dur={12} color={INK} width={3} />
		{[0, 1, 2, 3, 4, 5].map(k => <path key={k} d={`M${x + 170 - k * 32},${y - 8} L${x + 170 - k * 32},${y + 8}`} stroke={INK} strokeWidth={3} />)}
		<circle cx={x + 10} cy={y} r={8} fill={TEAL} />
		<Sx x={x + 10} y={y + 34} text="10^{−5}" size={24} color={TEAL} anchor="middle" at={at + 6} />
		<Sx x={x + 170} y={y + 34} text="1" size={24} anchor="middle" at={at + 6} />
	</Fade>
);

// ---------- 1. Hook: part two, the harder traps ----------
const H = 'hook-traps';
const KH = cues(sc(H), {part: 'This is part two', method: 'The method is the same', div: 'divide by the volume first', ice: 'I C E table', ini: 'I for initial', chg: 'C for change', eqq: 'E for equilibrium', q3: 'Question three gives', other: 'other equation', flip: 'flip it', tiny: ['tiny', 1], five: '5 per cent check', twox: 'here is two x', q4: 'Question four has', two: 'two parts', pa: 'part a finds', ps: 'perfect square', pause: 'Pause and try'});
export const SceneHookD: React.FC = () => {
	const f = useCurrentFrame();
	const shrink = 1118;
	const Y0 = 300, LH = 86;
	const rows = [
		{text: 'moles given: divide by the volume', at: KH.div},
		{text: 'K for a different equation', at: KH.other},
		{text: 'tiny K and the 5% check', at: KH.tiny},
		{text: 'convert back to moles', at: KH.tiny + 40},
		{text: 'a hidden perfect square', at: KH.ps},
		{text: 'two parts, one K', at: KH.two},
	];
	const right = prog(f, shrink, 22);
	const ix = 1180, iy = 300;
	return (
		<>
			<Overlay>
				<TaskLine text="Part 2: the harder traps" at={4} size={60} />
				{/* part 1 checklist, faded, as a reminder */}
				<Fade at={10}>
					<g opacity={0.65}>
						<rect x={1290} y={92} width={534} height={96} rx={18} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 6" />
						<Sx x={1314} y={130} text="part 1:" size={30} color={INK_SOFT} hand at={10} />
						<Sx x={1314} y={170} text="divide first, E row first, convert back" size={30} color={INK_SOFT} hand at={14} />
					</g>
				</Fade>
				<TrapList rows={rows} shrink={shrink} y={Y0} lh={LH} size={40} titleAt={KH.q3 - 10} title="part 2 traps:" />
				<g opacity={1 - right}>
					<FlipIcon x={700} y={Y0 + LH + 22} at={KH.other} />
					<LogMark x={610} y={Y0 + 2 * LH + 22} at={KH.tiny} />
					<Sx x={800} y={Y0 + 2 * LH + 34} text="check the amount taken off: 2x" size={32} color={AMBER_INK} hand at={KH.twox} />
					{/* the method: divide first, then the ICE table */}
					<Sx x={ix} y={iy - 14} text="divide by the volume first, then" size={34} color={TEAL} hand at={KH.div} />
					<MiniIce x={ix} y={iy + 10} w={170} at={KH.ice} />
					{['Initial', 'Change', 'Equilibrium'].map((w, i) => <Sx key={w} x={ix + 196} y={iy + 10 + i * 34 + 27} text={w} size={30} hand at={[KH.ini, KH.chg, KH.eqq][i]} />)}
					{/* two question cards, the second with parts a and b */}
					<QCard x={1150} y={560} rot={-4} label="Question 3" at={KH.q3} />
					<QCard x={1450} y={600} rot={4} label="Question 4" at={KH.q4} tabs={['a', 'b']} />
					<Chip x={1200} y={880} w={420} text="pause, try, then check" size={36} at={KH.pause} color={TEAL} />
				</g>
				<TrapStrip labels={TRAPS_D} at={shrink + 8} />
			</Overlay>
		</>
	);
};

// ---------- 5. Decision board ----------
const D = 'decision-board';
const KD = cues(sc(D), {look: 'what to look for', diff: 'K for a different equation', flip: 'flip it if', square: 'square it if', kstart: 'K and a start', ps: 'look for a perfect square', tiny: 'a tiny K', moles: 'Asked for moles', answer: 'answer what was asked', two: 'two parts at the same', samek: 'use the same K', next: 'Next how temperature'});
export const SceneDecisionD: React.FC = () => (
	<>
		<Overlay>
			<TaskLine text="What you see, and what you do first" at={4} size={58} />
			<DecisionRows rows={[
				{see: 'Moles and a volume', doo: ['divide first'], badge: 'Q3, Q4', at: 10, quiet: true},
				{see: 'K for a different equation', doo: ['reversed: 1 / K;  doubled: K^{2}'], badge: 'Q3', at: KD.diff, lit: [KD.diff, KD.kstart]},
				{see: 'K and a start', doo: ['x; perfect square: take the square root', 'tiny K: drop x, check the amount taken off < 5%'], badge: 'Q3, Q4b', at: KD.kstart, lit: [KD.kstart, KD.moles]},
				{see: 'Asked for mol, or one species', doo: ['× volume at the end;', 'x is the change, not always the answer'], badge: 'Q3, Q4b', at: KD.moles, lit: [KD.moles, KD.two]},
				{see: 'Two parts, same temperature', doo: ['same K'], badge: 'Q4', at: KD.two, lit: [KD.two, KD.next]},
			]} />
			<Fade at={KD.two + 30}>
				<rect x={96} y={886} width={1150} height={52} rx={26} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 6" />
				<Sx x={671} y={921} text="Quadratic formula: you can use it if you like, but HSC questions are written so you shouldn't need it" size={24} color={INK_SOFT} anchor="middle" hand at={KD.two + 30} />
			</Fade>
			<Thermo x={1298} y={884} h={160} at={KD.next} />
			<Chip x={1340} y={898} w={484} text="Next: temperature and K" size={38} at={KD.next + 4} color={TEAL} />
		</Overlay>
	</>
);

// ---------- 6. Key notes ----------
const NOTES = [
	'Moles in a vessel: divide by the volume before anything goes into the table or into K. A measured equilibrium value goes in the E row first. Convert back at the end: mol/L × volume gives mol.',
	'K belongs to the equation as written, at one temperature. Reversed: 1 / K. Doubled: K squared. Same temperature: same K, even in a new vessel.',
	'K and a start (HSC questions are written so you shouldn\'t need the quadratic formula): equal starts can give a perfect square, so take the square root and keep the positive root. A tiny K lets you drop x where it is taken from a start; check that the amount taken off is under about 5 per cent of the start.',
	'Answer what was asked: x is the change, not always the answer.',
];
export const SceneNotesD: React.FC = () => (
	<KeyNotesBoard notes={NOTES} aids={['Flip the equation, flip K.', 'Perfect square: square root. Tiny K: drop the x, then check it.']} tag="same temperature, equation as written; 5 per cent is a rule of thumb" aidTop={740} size={34} />
);
