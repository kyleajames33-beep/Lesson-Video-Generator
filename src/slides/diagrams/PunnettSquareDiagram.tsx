// PunnettSquareDiagram — a monohybrid 2×2 Punnett grid in the diorama family.
// Two parent gamete alleles run across the top, two down the left; the four
// offspring genotypes are computed from top[col]+left[row] (ordered
// dominant-first) and tinted by genotype (homozygous dominant / heterozygous /
// homozygous recessive).
//
// The grid is a stone tray. Each gamete allele is a glossy marble; for every
// cell, a copy of its column's marble and its row's marble travel in and
// pair up, which is exactly what the square models (one allele from each
// parent). Then the genotype is written. In the hold the paired marbles
// breathe gently.
//
// Data-driven: {type:'punnettSquare', top:[a,b], left:[a,b]}.
//
// Beat plan (frames after the card appears):
//   0    tray, labels and gamete marbles
//   24+  each cell: marbles travel in, pair, genotype appears (staggered)
//   ~120 legend

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY, TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';
import {DioramaDefs, STONE, idleBob, idlePulse} from './diorama';
import {PaintDefs, clamp, idHash, shade} from './kinds/restyle-generic/paint';
import {buildStart, sceneTimingFor} from './kinds/restyle-generic/sceneSync';

export type PunnettSquareProps = {
	top: [string, string];
	left: [string, string];
	delay?: number;
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

const isDominant = (a: string) => a === a.toUpperCase() && a !== a.toLowerCase();

export const PunnettSquareDiagram = ({top, left, delay}: PunnettSquareProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const ID = `punnett-${idHash(top.join('') + left.join(''))}`;

	const start = buildStart(delay, sceneTimingFor('punnettSquare', [top, left]));
	const f = frame - start;
	const fade = (d: number, len = 14) => interpolate(f, [d, d + len], [0, 1], clamp);

	// Grid geometry: a 2×2 square offset to leave room for headers.
	const GX = 250, GY = 150, CELL = 140;
	const X = [GX, GX + CELL, GX + 2 * CELL];
	const Y = [GY, GY + CELL, GY + 2 * CELL];
	const MR = 21; // marble radius

	const tint: Record<string, string> = {
		homDom: theme.accent,
		het: theme.accent2,
		homRec: '#7d8b96',
	};
	// Dominant alleles are the deep accent marble, recessive a pale one.
	const marbleKey = (a: string) => (isDominant(a) ? 'dom' : 'rec');

	const headerTop = (c: number) => ({x: X[c] + CELL / 2, y: GY - 40});
	const headerLeft = (r: number) => ({x: GX - 44, y: Y[r] + CELL / 2});
	const cellDone = 24 + 3 * 22 + 30;
	const hold = interpolate(f, [cellDone + 20, cellDone + 50], [0, 1], clamp);

	const marble = (allele: string, x: number, y: number, key: string, scale = 1) => (
		<g key={key} transform={`translate(${x} ${y}) scale(${scale})`}>
			<circle r={MR} fill={`url(#${ID}-${marbleKey(allele)}-ball)`} stroke={shade(isDominant(allele) ? theme.accent : theme.accent2, -0.3)} strokeWidth={1} />
			<text y={8} textAnchor="middle" fill="#ffffff" fontSize={24} fontWeight={800} fontStyle="italic" style={{textShadow: '0 1px 2px rgba(0,0,0,0.35)'}}>
				{allele}
			</text>
		</g>
	);

	return (
		<svg viewBox="0 0 720 500" role="img" aria-label={`Punnett square: ${top.join('')} × ${left.join('')} cross`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<defs>
				<PaintDefs id={ID} colors={{dom: theme.accent, rec: shade(theme.accent2, 0.12)}} />
				<linearGradient id={`${ID}-tray`} x1="0" x2="0.4" y1="0" y2="1">
					<stop offset="0%" stopColor={STONE.topLight} />
					<stop offset="100%" stopColor={STONE.top} />
				</linearGradient>
			</defs>

			{/* parent labels */}
			<text x={GX + CELL} y={52} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800} opacity={fade(0)}>
				parent 1 gametes
			</text>
			<text x={120} y={GY + CELL} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800} opacity={fade(0)} transform={`rotate(-90 120 ${GY + CELL})`}>
				parent 2 gametes
			</text>

			{/* stone tray under the grid */}
			<g opacity={fade(2)}>
				<rect x={GX - 14 + 6} y={GY - 14 + 12} width={2 * CELL + 28} height={2 * CELL + 28} rx={18} fill={STONE.shadow} filter={`url(#${ID}-blur)`} />
				<rect x={GX - 14} y={GY - 14 + 8} width={2 * CELL + 28} height={2 * CELL + 28} rx={18} fill={STONE.sideDark} />
				<rect x={GX - 14} y={GY - 14} width={2 * CELL + 28} height={2 * CELL + 28} rx={18} fill={`url(#${ID}-tray)`} stroke={STONE.topEdge} strokeWidth={2} />
				{[0, 1].map((r) =>
					[0, 1].map((c) => (
						<rect key={`w${r}${c}`} x={X[c] + 6} y={Y[r] + 6} width={CELL - 12} height={CELL - 12} rx={12} fill="#ffffff" fillOpacity={0.55} stroke={STONE.topEdge} strokeWidth={1.5} />
					)),
				)}
			</g>

			{/* gamete marbles */}
			{top.map((al, c) => {
				const s = Math.max(0, spring({frame: f - 6 - c * 5, fps, config: {damping: 12, stiffness: 200, mass: 0.6}}));
				const p = headerTop(c);
				return marble(al, p.x, p.y + idleBob(frame, c, 1.2) * hold, `t${c}`, s * 1.25);
			})}
			{left.map((al, r) => {
				const s = Math.max(0, spring({frame: f - 12 - r * 5, fps, config: {damping: 12, stiffness: 200, mass: 0.6}}));
				const p = headerLeft(r);
				return marble(al, p.x + idleBob(frame, r + 4, 1.2) * hold, p.y, `l${r}`, s * 1.25);
			})}

			{/* offspring cells: one allele from each parent travels in and pairs up */}
			{[0, 1].map((r) =>
				[0, 1].map((c) => {
					const g = orderGenotype(top[c], left[r]);
					const kind = classify(g);
					const t0 = 24 + (r * 2 + c) * 22;
					const travel = interpolate(f, [t0, t0 + 18], [0, 1], {...clamp, easing: (x) => 1 - Math.pow(1 - x, 3)});
					const cx = X[c] + CELL / 2, cy = Y[r] + CELL / 2;
					const a = headerTop(c), b = headerLeft(r);
					// Final marble slots inside the cell, dominant-first to match the genotype.
					const [first] = g;
					const topFirst = top[c] === first;
					const slotTop = {x: cx + (topFirst ? -24 : 24), y: cy - 22};
					const slotLeft = {x: cx + (topFirst ? 24 : -24), y: cy - 22};
					const pT = {x: a.x + (slotTop.x - a.x) * travel, y: a.y + (slotTop.y - a.y) * travel};
					const pL = {x: b.x + (slotLeft.x - b.x) * travel, y: b.y + (slotLeft.y - b.y) * travel};
					const txt = fade(t0 + 16, 10);
					const glow = interpolate(f, [t0 + 14, t0 + 22, t0 + 40], [0, 1, 0.35], clamp);
					const breathe = 1 + 0.05 * idlePulse(frame + (r * 2 + c) * 13, 70) * hold;
					return (
						<g key={`${r}-${c}`} opacity={travel > 0 ? 1 : 0}>
							<rect x={X[c] + 6} y={Y[r] + 6} width={CELL - 12} height={CELL - 12} rx={12} fill={tint[kind]} fillOpacity={0.16 * txt} stroke={tint[kind]} strokeWidth={3} strokeOpacity={txt} />
							<rect x={X[c] + 6} y={Y[r] + 6} width={CELL - 12} height={CELL - 12} rx={12} fill="none" stroke={tint[kind]} strokeWidth={6} strokeOpacity={0.3 * glow} />
							{marble(top[c], pT.x, pT.y, 'mt', 0.8 * breathe)}
							{marble(left[r], pL.x, pL.y, 'ml', 0.8 * breathe)}
							<text x={cx} y={cy + 44} textAnchor="middle" fill={TOK.ink} fontSize={40} fontWeight={800} fontStyle="italic" opacity={txt}>
								{g}
							</text>
						</g>
					);
				}),
			)}

			{/* legend */}
			<g opacity={fade(cellDone)} fontSize={16} fontWeight={650} fill={TOK.inkDim}>
				{[
					['homDom', 'homozygous dominant', 40],
					['het', 'heterozygous (carrier)', 250],
					['homRec', 'homozygous recessive', 488],
				].map(([k, label, x]) => (
					<g key={k as string}>
						<rect x={x as number} y={458} width={18} height={18} rx={5} fill={`${tint[k as string]}29`} stroke={tint[k as string]} strokeWidth={2.5} />
						<text x={(x as number) + 26} y={473}>{label}</text>
					</g>
				))}
			</g>
		</svg>
	);
};
