// EmpiricalBlocksDiagram (kind: chem11m2Empirical): empirical vs molecular.
//
// Left plinth: one molecule of the "big" compound as a jumble of CPK atoms
// (glucose, C₆H₁₂O₆: 24 atoms). On the empirical-formula beat the atoms sort
// themselves into identical ratio blocks, one tile per empirical unit (six
// CH₂O tiles), and the atom ratio reduces (6 : 12 : 6 → 1 : 2 : 1). Right
// plinth: a compound that IS one block (formaldehyde, CH₂O). Then the
// multiplier appears on each: n = 6 and n = 1. Counts come from the props, so
// the tiles always match the formula.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth, ELEMENT_COLORS, idleBob, idlePulse} from '../../diorama';
import {Ball, Chip, LANE, clamp, textW} from './parts';

type Compound = {name: string; formula: string; n: number};

export type EmpiricalBlocksProps = {
	/** The empirical unit as element counts, e.g. {C: 1, H: 2, O: 1}. */
	unit?: Record<string, number>;
	unitFormula?: string;
	big?: Compound;
	small?: Compound;
	beats?: {big?: number; sort?: number; small?: number; same?: number; times?: number; nBig?: number; nSmall?: number};
	delay?: number;
};

const ID = 'c11m2emp';
const W = 760;
const VB_H = 520;
const L = {x: 250, y: 296, rx: 196};
const R = {x: 642, y: 296, rx: 100};

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

export const EmpiricalBlocksDiagram = ({
	unit = {C: 1, H: 2, O: 1},
	unitFormula = 'CH₂O',
	big = {name: 'glucose', formula: 'C₆H₁₂O₆', n: 6},
	small = {name: 'formaldehyde', formula: 'CH₂O', n: 1},
	beats = {},
	delay = 62,
}: EmpiricalBlocksProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const fade = (d: number | undefined, len = 12) => (d === undefined ? 0 : interpolate(frame, [d, d + len], [0, 1], clamp));
	const pulse = idlePulse(frame);
	const bBig = beats.big ?? 30;
	const bSort = beats.sort ?? bBig + 120;
	const bSmall = beats.small ?? bSort + 90;

	const els = Object.keys(unit);
	// One block's atom layout (relative to the block centre). Heavy atoms in a
	// row, hydrogens tucked above/below.
	const blockAtoms = (() => {
		const out: {el: string; dx: number; dy: number}[] = [];
		const heavy = els.filter((e) => e !== 'H');
		heavy.forEach((e, i) => {
			for (let k = 0; k < unit[e]; k++) out.push({el: e, dx: (i - (heavy.length - 1) / 2) * 32 + k * 4, dy: 0});
		});
		const nH = unit.H ?? 0;
		for (let k = 0; k < nH; k++) out.push({el: 'H', dx: -36, dy: k % 2 === 0 ? -18 : 18});
		return out;
	})();
	const rOf = (el: string) => (el === 'H' ? 10.5 : 15.5);

	// Big molecule: n blocks laid out in rows on the left plinth.
	const cols = Math.min(3, big.n);
	const rows = Math.ceil(big.n / cols);
	const blockPos = Array.from({length: big.n}, (_, i) => {
		const r = Math.floor(i / cols), c = i % cols;
		const inRow = Math.min(cols, big.n - r * cols);
		return {x: L.x + (c - (inRow - 1) / 2) * 122, y: L.y - 10 - (rows - 1 - r) * 76};
	});
	const atoms = blockPos.flatMap((b, bi) => blockAtoms.map((a, ai) => ({...a, bx: b.x, by: b.y, bi, ai})));
	// Jumbled start: a loose heap centred on the plinth (deterministic).
	const jumble = atoms.map((_, i) => {
		const ang = i * 2.39996;
		const rad = 14 * Math.sqrt(i + 1);
		return {x: L.x + Math.cos(ang) * rad * 1.6, y: L.y - 40 + Math.sin(ang) * rad * 0.75};
	});
	const sortT = (i: number) => spring({frame: frame - bSort - (i % 12) * 2, fps, config: {damping: 15, stiffness: 110}});

	// Atom-count ratio text, e.g. 6 : 12 : 6 → 1 : 2 : 1 (computed).
	const counts = els.map((e) => unit[e] * big.n);
	const g = counts.reduce((a, b) => gcd(a, b));
	const ratioText = `${els.join(' : ')} = ${counts.join(' : ')} → ${counts.map((c) => c / g).join(' : ')}`;

	const sameText = `Same empirical formula ${unitFormula}, different molecules`;
	const bandW = textW(sameText, 21) + 44;
	const tileOn = interpolate(frame, [bSort + 30, bSort + 50], [0, 1], clamp);

	return (
		<svg viewBox={`0 0 ${W} ${VB_H}`} role="img" aria-label={`${big.name} ${big.formula} is ${unitFormula} × ${big.n}; ${small.name} ${small.formula} is ${unitFormula} × ${small.n}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />

			{/* LEFT: the big molecule */}
			<g opacity={fade(bBig - 10, 16)}>
				<DioramaPlinth id={ID} cx={L.x} cy={L.y} rx={L.rx} />
			</g>
			{blockPos.map((b, i) => (
				<g key={i} opacity={tileOn}>
					<rect x={b.x - 56} y={b.y - 36} width={112} height={72} rx={16} fill="#ffffff" opacity={0.55} stroke={LANE.moles} strokeWidth={2} />
				</g>
			))}
			{atoms.map((a, i) => {
				const pop = spring({frame: frame - bBig - (i % 8) * 2, fps, config: {damping: 12, stiffness: 180, mass: 0.6}});
				const t = Math.max(0, Math.min(1.05, sortT(i)));
				const x = jumble[i].x + (a.bx + a.dx - jumble[i].x) * t + idleBob(frame, i, 1.1);
				const y = jumble[i].y + (a.by + a.dy - jumble[i].y) * t + idleBob(frame, i + 40, 1.1);
				return <Ball key={i} x={x} y={y} r={rOf(a.el) * Math.max(0, pop)} color={ELEMENT_COLORS[a.el] ?? '#999'} opacity={pop > 0.02 ? 1 : 0} />;
			})}
			<g opacity={fade(bBig + 10)}>
				<text x={L.x} y={L.y + 140} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800}>{big.name} <tspan fill={LANE.given} fontSize={28} fontWeight={900}>{big.formula}</tspan></text>
			</g>
			<text x={L.x} y={L.y - 218} textAnchor="middle" fill={TOK.inkDim} fontSize={22} fontWeight={800} opacity={fade(bSort + 40)}>{ratioText}</text>

			{/* RIGHT: the compound that is a single block */}
			<g opacity={fade(bSmall - 10, 16)}>
				<DioramaPlinth id={ID} cx={R.x} cy={R.y} rx={R.rx} />
			</g>
			{Array.from({length: small.n}, (_, bi) => (
				<g key={bi}>
					<g opacity={fade(bSmall + 20)}>
						<rect x={R.x - 56} y={R.y - 46 - 36 - bi * 76} width={112} height={72} rx={16} fill="#ffffff" opacity={0.55} stroke={LANE.moles} strokeWidth={2} />
					</g>
					{blockAtoms.map((a, ai) => {
						const pop = spring({frame: frame - bSmall - ai * 3, fps, config: {damping: 12, stiffness: 180, mass: 0.6}});
						return <Ball key={ai} x={R.x + a.dx + idleBob(frame, ai + 90, 1.1)} y={R.y - 46 - bi * 76 + a.dy + idleBob(frame, ai + 99, 1.1)} r={rOf(a.el) * Math.max(0, pop)} color={ELEMENT_COLORS[a.el] ?? '#999'} opacity={pop > 0.02 ? 1 : 0} />;
					})}
				</g>
			))}
			<g opacity={fade(bSmall + 10)}>
				<text x={R.x} y={R.y + 96} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>{small.name}</text>
				<text x={R.x} y={R.y + 128} textAnchor="middle" fill={LANE.given} fontSize={28} fontWeight={900}>{small.formula}</text>
			</g>

			{/* × n on each */}
			<Chip x={L.x} y={L.y - 176} text={frame >= (beats.nBig ?? Infinity) ? `(${unitFormula}) × ${big.n}` : `(${unitFormula}) × n`} color={LANE.moles} on={frame >= (beats.nBig ?? Infinity)} fontSize={22} opacity={fade(beats.times)} />
			<Chip x={R.x} y={R.y - 176} text={`(${unitFormula}) × ${small.n}`} color={LANE.moles} on fontSize={22} opacity={fade(beats.nSmall)} />

			{/* the one idea */}
			<g opacity={fade(beats.same)}>
				<rect x={W / 2 - bandW / 2} y={VB_H - 50} width={bandW} height={42} rx={21} fill="#fff6e3" stroke={TOK.amber} strokeWidth={2 + pulse * 1.5} />
				<text x={W / 2} y={VB_H - 22} textAnchor="middle" fill={TOK.amberInk} fontSize={21} fontWeight={800}>{sameText}</text>
			</g>
		</svg>
	);
};
