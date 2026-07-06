// TranscriptionStrandDiagram — a horizontal DNA template strand with the
// complementary mRNA building base-by-base beneath it. Transcription pairing:
// template T→A, A→U, C→G, G→C (note A pairs with U in RNA, not T).
//
// Fixed example: template TAC GAA  →  mRNA  AUG CUU.
//
// Beat plan (frames @ 30fps):
//   0    template strand + labels fade in
//   24+  mRNA bases drop in one at a time with a pairing tick
//   ~70  arrow + caption settle

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';

const clampOpts = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

const TEMPLATE = ['T', 'A', 'C', 'G', 'A', 'A'] as const;
const PAIR: Record<string, string> = {T: 'A', A: 'U', C: 'G', G: 'C'};

export const TranscriptionStrandDiagram = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const theme = useAccent();

	const n = TEMPLATE.length;
	const boxW = 78, gap = 14;
	const totalW = n * boxW + (n - 1) * gap;
	const startX = (720 - totalW) / 2;
	const tplY = 130, rnaY = 290;

	const headerOp = interpolate(frame, [0, 14], [0, 1], clampOpts);

	const cellX = (i: number) => startX + i * (boxW + gap);

	return (
		<svg viewBox="0 0 720 470" role="img" aria-label="Transcription: DNA template to mRNA" style={{width: '100%'}}>
			{/* row labels */}
			<text x={startX} y={tplY - 26} textAnchor="start" fill={TOK.inkDim} fontSize={20} fontWeight={700} opacity={headerOp}>
				DNA template strand (3′→5′)
			</text>
			<text x={startX} y={rnaY + boxW + 40} textAnchor="start" fill={theme.accent} fontSize={20} fontWeight={700}
				opacity={interpolate(frame, [60, 74], [0, 1], clampOpts)}>
				mRNA transcript (5′→3′)
			</text>

			{/* template strand */}
			{TEMPLATE.map((b, i) => {
				const op = interpolate(frame, [4 + i * 3, 16 + i * 3], [0, 1], clampOpts);
				return (
					<g key={`t${i}`} opacity={op}>
						<rect x={cellX(i)} y={tplY} width={boxW} height={boxW} rx={12} fill={TOK.bgLift} stroke={TOK.inkDim} strokeWidth={3} />
						<text x={cellX(i) + boxW / 2} y={tplY + boxW / 2 + 18} textAnchor="middle" fill={TOK.ink} fontSize={48} fontWeight={800}>
							{b}
						</text>
					</g>
				);
			})}

			{/* mRNA bases building in beneath, with a pairing tick */}
			{TEMPLATE.map((b, i) => {
				const start = 24 + i * 8;
				const pop = Math.max(0, spring({frame: frame - start, fps, config: {damping: 14, stiffness: 220, mass: 0.7}}));
				const op = interpolate(pop, [0, 0.3], [0, 1], {extrapolateRight: 'clamp'});
				const cx = cellX(i) + boxW / 2;
				const rna = PAIR[b];
				return (
					<g key={`r${i}`}>
						{/* pairing connector */}
						<line x1={cx} y1={tplY + boxW} x2={cx} y2={rnaY} stroke={theme.accent2} strokeWidth={2.5} strokeDasharray="5 6"
							opacity={op * 0.8} />
						<g transform={`translate(${cx} ${rnaY + boxW / 2}) scale(${pop}) translate(${-cx} ${-(rnaY + boxW / 2)})`} opacity={op}>
							<rect x={cellX(i)} y={rnaY} width={boxW} height={boxW} rx={12} fill={`${theme.accent}1f`} stroke={theme.accent} strokeWidth={3} />
							<text x={cx} y={rnaY + boxW / 2 + 18} textAnchor="middle" fill={theme.accent} fontSize={48} fontWeight={800}>
								{rna}
							</text>
						</g>
					</g>
				);
			})}

			{/* pairing-rule caption */}
			<text x={360} y={446} textAnchor="middle" fill={TOK.inkDim} fontSize={20} fontWeight={600}
				opacity={interpolate(frame, [78, 92], [0, 1], clampOpts)}>
				A→U · T→A · C→G · G→C  (RNA uses uracil, not thymine)
			</text>
		</svg>
	);
};
