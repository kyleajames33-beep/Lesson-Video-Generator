// ChromosomeMutationDiagram — a reference chromosome (coloured segment bands
// A B C D E) shown four ways: deletion, duplication, inversion, translocation.
// Each variant is labelled and sits in its own quadrant under a reference row.
//
// Beat plan (frames @ 30fps):
//   0    reference chromosome (A B C D E) draws in
//   18+  the four mutated chromosomes reveal, staggered, each labelled

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';

const clampOpts = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

const REF = ['A', 'B', 'C', 'D', 'E'] as const;

export const ChromosomeMutationDiagram = () => {
	const frame = useCurrentFrame();
	const theme = useAccent();

	// Palette for the five bands. Accent hues for the home chromosome; a muted
	// grey for any band that originates from a *different* chromosome.
	const bandColor: Record<string, string> = {
		A: theme.accent,
		B: theme.accent2,
		C: theme.accent,
		D: theme.accent2,
		E: theme.accent,
		// translocation foreign segment from "another chromosome"
		X: TOK.inkMute,
		Y: TOK.inkMute,
	};

	const SEG = 52, H = 40;

	// Render a horizontal chromosome of bands starting at (x,y).
	const chromosome = (bands: string[], x: number, y: number, op: number, dim?: boolean) => (
		<g opacity={op}>
			<rect x={x - 6} y={y - 6} width={bands.length * SEG + 12} height={H + 12} rx={10} fill="none"
				stroke={TOK.inkDim} strokeWidth={2.5} opacity={0.5} />
			{bands.map((b, i) => {
				const c = bandColor[b] ?? TOK.inkMute;
				const label = b === 'X' ? 'M' : b === 'Y' ? 'N' : b;
				return (
					<g key={i}>
						<rect x={x + i * SEG} y={y} width={SEG - 4} height={H} rx={6} fill={dim ? `${c}55` : c} />
						<text x={x + i * SEG + (SEG - 4) / 2} y={y + H / 2 + 7} textAnchor="middle" fill={TOK.bgLift}
							fontSize={22} fontWeight={800}>{label}</text>
					</g>
				);
			})}
		</g>
	);

	const refOp = interpolate(frame, [0, 16], [0, 1], clampOpts);
	const vOp = (d: number) => interpolate(frame, [d, d + 14], [0, 1], clampOpts);
	const lblOp = (d: number) => interpolate(frame, [d, d + 12], [0, 1], clampOpts);

	// reference centred at top
	const refX = (720 - REF.length * SEG) / 2;

	// quadrant geometry
	const colL = 70, colR = 400, row1 = 220, row2 = 360;

	return (
		<svg viewBox="0 0 720 470" role="img" aria-label="Chromosomal mutations: deletion, duplication, inversion, translocation" style={{width: '100%'}}>
			{/* reference chromosome */}
			<text x={360} y={40} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800} opacity={refOp}>
				normal chromosome
			</text>
			{chromosome([...REF], refX, 58, refOp)}

			{/* divider */}
			<line x1={60} y1={150} x2={660} y2={150} stroke={TOK.rule} strokeWidth={2} opacity={refOp} />

			{/* Deletion — C removed (A B D E) */}
			<text x={colL} y={row1 - 18} fill={TOK.inkDim} fontSize={19} fontWeight={800} opacity={lblOp(18)}>deletion</text>
			{chromosome(['A', 'B', 'D', 'E'], colL, row1, vOp(18))}
			<text x={colL} y={row1 + H + 28} fill={TOK.inkMute} fontSize={15} fontWeight={600} opacity={lblOp(24)}>segment C lost</text>

			{/* Duplication — C repeated (A B C C D E) */}
			<text x={colR} y={row1 - 18} fill={TOK.inkDim} fontSize={19} fontWeight={800} opacity={lblOp(28)}>duplication</text>
			{chromosome(['A', 'B', 'C', 'C', 'D', 'E'], colR, row1, vOp(28))}
			<text x={colR} y={row1 + H + 28} fill={TOK.inkMute} fontSize={15} fontWeight={600} opacity={lblOp(34)}>segment C copied</text>

			{/* Inversion — B C D reversed (A D C B E) */}
			<text x={colL} y={row2 - 18} fill={TOK.inkDim} fontSize={19} fontWeight={800} opacity={lblOp(38)}>inversion</text>
			{chromosome(['A', 'D', 'C', 'B', 'E'], colL, row2, vOp(38))}
			<text x={colL} y={row2 + H + 28} fill={TOK.inkMute} fontSize={15} fontWeight={600} opacity={lblOp(44)}>B–D order flipped</text>

			{/* Translocation — D E swapped for a segment from another chromosome (A B C M N) */}
			<text x={colR} y={row2 - 18} fill={TOK.inkDim} fontSize={19} fontWeight={800} opacity={lblOp(48)}>translocation</text>
			{chromosome(['A', 'B', 'C', 'X', 'Y'], colR, row2, vOp(48))}
			<text x={colR} y={row2 + H + 28} fill={TOK.inkMute} fontSize={15} fontWeight={600} opacity={lblOp(54)}>D–E replaced by M–N from another chromosome</text>
		</svg>
	);
};
