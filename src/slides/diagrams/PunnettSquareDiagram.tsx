// PunnettSquareDiagram — a monohybrid 2×2 Punnett grid. Two parent gamete
// alleles run across the top, two down the left; the four offspring genotypes
// are computed from top[col]+left[row] (ordered dominant-first) and tinted by
// genotype (homozygous dominant / heterozygous / homozygous recessive).
//
// Data-driven: {type:'punnettSquare', top:[a,b], left:[a,b]}.
//
// Beat plan (frames @ 30fps):
//   0    axis labels + gamete headers fade in
//   16   grid lines draw in
//   28+  offspring cells pop in, staggered

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';

const clampOpts = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export type PunnettSquareProps = {
	top: [string, string];
	left: [string, string];
};

// Order a two-allele genotype dominant-first: uppercase before lowercase, and
// for same-case keep alphabetical so "tT" reads as "Tt".
const orderGenotype = (a: string, b: string): string => {
	const isUpper = (s: string) => s === s.toUpperCase() && s !== s.toLowerCase();
	if (isUpper(a) && !isUpper(b)) return a + b;
	if (!isUpper(a) && isUpper(b)) return b + a;
	return [a, b].sort().join('');
};

const classify = (g: string): 'homDom' | 'het' | 'homRec' => {
	const upper = [...g].filter((c) => c === c.toUpperCase() && c !== c.toLowerCase()).length;
	if (upper === g.length) return 'homDom';
	if (upper === 0) return 'homRec';
	return 'het';
};

export const PunnettSquareDiagram = ({top, left}: PunnettSquareProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const theme = useAccent();

	const headerOpacity = interpolate(frame, [0, 14], [0, 1], clampOpts);
	const gridDraw = interpolate(frame, [16, 34], [0, 1], clampOpts);

	// Grid geometry — a 2×2 square offset to leave room for headers.
	const GX = 230, GY = 150, CELL = 150;
	const X = [GX, GX + CELL, GX + 2 * CELL];
	const Y = [GY, GY + CELL, GY + 2 * CELL];

	const tint: Record<string, string> = {
		homDom: theme.accent,
		het: theme.accent2,
		homRec: TOK.inkMute,
	};

	return (
		<svg viewBox="0 0 720 470" role="img" aria-label="Punnett square: monohybrid cross" style={{width: '100%'}}>
			{/* parent gamete labels */}
			<text x={GX + CELL} y={64} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800} opacity={headerOpacity}>
				parent 1 gametes
			</text>
			<text x={96} y={GY + CELL} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800} opacity={headerOpacity}
				transform={`rotate(-90 96 ${GY + CELL})`}>
				parent 2 gametes
			</text>

			{/* gamete allele headers across the top */}
			{top.map((al, c) => (
				<text key={`t${c}`} x={X[c] + CELL / 2} y={GY - 22} textAnchor="middle" fill={theme.accent} fontSize={40} fontWeight={800}
					fontStyle="italic" opacity={interpolate(frame, [4 + c * 4, 16 + c * 4], [0, 1], clampOpts)}>
					{al}
				</text>
			))}
			{/* gamete allele headers down the left */}
			{left.map((al, r) => (
				<text key={`l${r}`} x={GX - 30} y={Y[r] + CELL / 2 + 14} textAnchor="middle" fill={theme.accent} fontSize={40} fontWeight={800}
					fontStyle="italic" opacity={interpolate(frame, [8 + r * 4, 20 + r * 4], [0, 1], clampOpts)}>
					{al}
				</text>
			))}

			{/* offspring cells */}
			{[0, 1].map((r) =>
				[0, 1].map((c) => {
					const g = orderGenotype(top[c], left[r]);
					const kind = classify(g);
					const start = 28 + (r * 2 + c) * 6;
					const pop = Math.max(0, spring({frame: frame - start, fps, config: {damping: 14, stiffness: 220, mass: 0.7}}));
					const cx = X[c] + CELL / 2, cy = Y[r] + CELL / 2;
					return (
						<g key={`${r}-${c}`} transform={`translate(${cx} ${cy}) scale(${pop}) translate(${-cx} ${-cy})`}
							opacity={interpolate(pop, [0, 0.3], [0, 1], {extrapolateRight: 'clamp'})}>
							<rect x={X[c] + 6} y={Y[r] + 6} width={CELL - 12} height={CELL - 12} rx={12}
								fill={`${tint[kind]}24`} stroke={tint[kind]} strokeWidth={3} />
							<text x={cx} y={cy + 18} textAnchor="middle" fill={TOK.ink} fontSize={52} fontWeight={800} fontStyle="italic">
								{g}
							</text>
						</g>
					);
				}),
			)}

			{/* grid outline (drawn over so the strokes read crisply) */}
			<g opacity={gridDraw}>
				<rect x={GX} y={GY} width={2 * CELL} height={2 * CELL} rx={6} fill="none" stroke={TOK.inkDim} strokeWidth={3.5} />
				<line x1={X[1]} y1={GY} x2={X[1]} y2={Y[2]} stroke={TOK.inkDim} strokeWidth={3.5} />
				<line x1={GX} y1={Y[1]} x2={X[2]} y2={Y[1]} stroke={TOK.inkDim} strokeWidth={3.5} />
			</g>

			{/* legend */}
			<g opacity={interpolate(frame, [56, 70], [0, 1], clampOpts)}>
				<rect x={170} y={448 - 18} width={18} height={18} rx={5} fill={`${theme.accent}24`} stroke={theme.accent} strokeWidth={2.5} />
				<text x={196} y={444} fill={TOK.inkDim} fontSize={17} fontWeight={600}>dominant</text>
				<rect x={330} y={448 - 18} width={18} height={18} rx={5} fill={`${theme.accent2}24`} stroke={theme.accent2} strokeWidth={2.5} />
				<text x={356} y={444} fill={TOK.inkDim} fontSize={17} fontWeight={600}>carrier</text>
				<rect x={470} y={448 - 18} width={18} height={18} rx={5} fill={`${TOK.inkMute}24`} stroke={TOK.inkMute} strokeWidth={2.5} />
				<text x={496} y={444} fill={TOK.inkDim} fontSize={17} fontWeight={600}>recessive</text>
			</g>
		</svg>
	);
};
