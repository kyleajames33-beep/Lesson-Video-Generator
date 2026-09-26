// TranscriptionStrandDiagram — a horizontal DNA template strand with the
// complementary mRNA building base-by-base beneath it, in the diorama family.
// Transcription pairing: template T→A, A→U, C→G, G→C (A pairs with U in RNA,
// not T).
//
// Fixed example: template TAC GAA  →  mRNA  AUG CUU.
//
// The template bases are glossy tiles resting on a stone rail (the DNA
// backbone); each mRNA nucleotide drops in beneath its partner and docks with
// a pairing link. The narration's key point is that RNA uses uracil, not
// thymine, so the U tiles are the one amber thing and breathe in the hold.
//
// Beat plan (frames after the card appears):
//   0    template strand + labels
//   24+  mRNA bases dock one at a time
//   ~90  mRNA label + pairing-rule caption

import type {ReactNode} from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY, TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';
import {DioramaDefs, STONE, idlePulse} from './diorama';
import {clamp, shade} from './kinds/restyle-generic/paint';
import {buildStart, sceneTimingFor} from './kinds/restyle-generic/sceneSync';

const TEMPLATE = ['T', 'A', 'C', 'G', 'A', 'A'] as const;
const PAIR: Record<string, string> = {T: 'A', A: 'U', C: 'G', G: 'C'};

const ID = 'transcr';

export const TranscriptionStrandDiagram = ({delay}: {delay?: number}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const start = buildStart(delay, sceneTimingFor('transcriptionStrand', 'transcriptionStrand'));
	const f = frame - start;

	const n = TEMPLATE.length;
	const boxW = 78, gap = 14;
	const totalW = n * boxW + (n - 1) * gap;
	const startX = (720 - totalW) / 2;
	const tplY = 120, rnaY = 290;
	const cellX = (i: number) => startX + i * (boxW + gap);
	const dockAt = (i: number) => 24 + i * 12;
	const done = dockAt(n - 1) + 24;
	const hold = interpolate(f, [done + 20, done + 50], [0, 1], clamp);

	const tile = (x: number, y: number, fillId: string, stroke: string, letter: string, letterColor: string, key: string, extra?: ReactNode) => (
		<g key={key}>
			<rect x={x + 3} y={y + 6} width={boxW} height={boxW} rx={14} fill={STONE.shadow} />
			<rect x={x} y={y} width={boxW} height={boxW} rx={14} fill={`url(#${fillId})`} stroke={stroke} strokeWidth={2.5} />
			<ellipse cx={x + boxW * 0.32} cy={y + boxW * 0.2} rx={boxW * 0.22} ry={boxW * 0.08} fill="#ffffff" opacity={0.55} />
			{extra}
			<text x={x + boxW / 2} y={y + boxW / 2 + 17} textAnchor="middle" fill={letterColor} fontSize={46} fontWeight={800}>
				{letter}
			</text>
		</g>
	);

	return (
		<svg viewBox="0 0 720 480" role="img" aria-label="Transcription: DNA template TACGAA gives mRNA AUGCUU" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<defs>
				<linearGradient id={`${ID}-dna`} x1="0" x2="0.3" y1="0" y2="1">
					<stop offset="0%" stopColor="#ffffff" />
					<stop offset="100%" stopColor="#e7e5e0" />
				</linearGradient>
				<linearGradient id={`${ID}-rna`} x1="0" x2="0.3" y1="0" y2="1">
					<stop offset="0%" stopColor={shade(theme.soft, 0.02)} />
					<stop offset="100%" stopColor={shade(theme.soft, -0.06)} />
				</linearGradient>
				<linearGradient id={`${ID}-u`} x1="0" x2="0.3" y1="0" y2="1">
					<stop offset="0%" stopColor="#fff6e2" />
					<stop offset="100%" stopColor="#fbe6b8" />
				</linearGradient>
			</defs>

			{/* row label */}
			<text x={startX} y={tplY - 30} fill={TOK.inkDim} fontSize={20} fontWeight={700} opacity={interpolate(f, [0, 14], [0, 1], clamp)}>
				DNA template strand (3′→5′)
			</text>

			{/* stone rail: the template's backbone */}
			<g opacity={interpolate(f, [0, 12], [0, 1], clamp)}>
				<rect x={startX - 16} y={tplY - 16} width={totalW + 32} height={14} rx={7} fill={STONE.top} stroke={STONE.topEdge} strokeWidth={1.5} />
			</g>

			{/* template strand */}
			{TEMPLATE.map((b, i) => (
				<g key={`t${i}`} opacity={interpolate(f, [4 + i * 3, 16 + i * 3], [0, 1], clamp)}>
					{tile(cellX(i), tplY, `${ID}-dna`, TOK.inkDim, b, TOK.ink, 'tile')}
				</g>
			))}

			{/* mRNA nucleotides dock beneath, one at a time */}
			{TEMPLATE.map((b, i) => {
				const s = dockAt(i);
				const drop = Math.max(0, spring({frame: f - s, fps, config: {damping: 13, stiffness: 170, mass: 0.8}}));
				const op = interpolate(f, [s, s + 6], [0, 1], clamp);
				const cx = cellX(i) + boxW / 2;
				const rna = PAIR[b];
				const isU = rna === 'U';
				const y = rnaY + (1 - drop) * 70;
				const pulse = isU ? idlePulse(frame + i * 9, 60) * hold : 0;
				return (
					<g key={`r${i}`} opacity={op}>
						{/* pairing link */}
						<line x1={cx} y1={tplY + boxW + 4} x2={cx} y2={y - 4} stroke={theme.accent2} strokeWidth={3} strokeDasharray="4 6" strokeLinecap="round" opacity={0.8 * interpolate(drop, [0.6, 1], [0, 1], clamp)} />
						{tile(
							cellX(i),
							y,
							isU ? `${ID}-u` : `${ID}-rna`,
							isU ? TOK.amber : theme.accent,
							rna,
							isU ? TOK.amberInk : theme.accent,
							'tile',
							isU ? <rect x={cellX(i) - 4} y={y - 4} width={boxW + 8} height={boxW + 8} rx={17} fill="none" stroke={TOK.amber} strokeWidth={2 + 2 * pulse} strokeOpacity={0.35 + 0.35 * pulse} /> : undefined,
						)}
					</g>
				);
			})}

			<text x={startX} y={rnaY + boxW + 44} fill={theme.accent} fontSize={20} fontWeight={700} opacity={interpolate(f, [done - 10, done + 4], [0, 1], clamp)}>
				mRNA transcript (5′→3′)
			</text>

			{/* pairing-rule caption: the U rule in amber */}
			<text x={360} y={458} textAnchor="middle" fill={TOK.inkDim} fontSize={20} fontWeight={650} opacity={interpolate(f, [done + 4, done + 18], [0, 1], clamp)}>
				<tspan fill={TOK.amberInk} fontWeight={800}>A→U</tspan> · T→A · C→G · G→C  (RNA uses uracil, not thymine)
			</text>
		</svg>
	);
};
