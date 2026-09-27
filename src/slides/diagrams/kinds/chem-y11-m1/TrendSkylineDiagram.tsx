// TrendSkylineDiagram — a periodic trend as a "skyline" over the main-group block.
//
// The main-group block (groups 1, 2, 13–18 by default) is a slab of low tiles on
// a stone base, seen from a 3/4 camera (back rows recede up and to the
// left). A glossy column rises on the tile of each element the scene gives a
// value for, at its true period/group position, with height ∝ value and the
// value on top. Arrows name the direction of the trend across and down; the
// highlighted element (the peak) turns amber and gets a crown. Groups listed in
// `noValue` are hatched with a note (e.g. noble gases get no electronegativity).
//
// Config-driven: any elements, any trend label/unit, any arrows and beats.
// Beats (`at`) are frames after `delay`.
//
// Layout note: rows are sheared by SK per row so a column never sits directly
// behind another column or label (same-group neighbours are offset by SK, more
// than a column's width), which keeps every value label clear.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {idleBob, idlePulse, STONE} from '../../diorama';
import {Arrow, Chip, clamp, fadeAt, popAt, shade} from './shared';

export type SkylineElement = {symbol: string; period: number; group: number; value: number; at?: number};
export type SkylineArrow = {text: string; at?: number};
export type TrendSkylineProps = {
	elements?: SkylineElement[];
	/** Trend name (title). */
	label?: string;
	/** Scale / unit line under the title. */
	unit?: string;
	unitAt?: number;
	/** Symbol of the element to crown in amber (the peak). */
	highlight?: string;
	highlightAt?: number;
	arrows?: {across?: SkylineArrow; down?: SkylineArrow};
	/** Groups shown as tile columns, left to right. */
	groups?: number[];
	/** Number of periods (rows) shown, from period 1. */
	periods?: number;
	/** Groups that get no value (hatched tiles + note). */
	noValue?: {groups: number[]; text: string; at?: number};
	/** Decimal places for the value labels. */
	decimals?: number;
	delay?: number;
};

// Defaults = Chem Y11 M1 L18 concept-trend: the scene's memorised values.
const DEFAULT_ELEMENTS: SkylineElement[] = [
	{symbol: 'C', period: 2, group: 14, value: 2.6, at: 306},
	{symbol: 'N', period: 2, group: 15, value: 3.0, at: 326},
	{symbol: 'O', period: 2, group: 16, value: 3.4, at: 346},
	{symbol: 'F', period: 2, group: 17, value: 4.0, at: 366},
	{symbol: 'Cl', period: 3, group: 17, value: 3.2, at: 512},
	{symbol: 'H', period: 1, group: 1, value: 2.2, at: 916},
	{symbol: 'Na', period: 3, group: 1, value: 0.9, at: 942},
];

const ID = 'c11sky';
const W = 760;
const H = 530;
const TD = 54; // screen depth of one tile row
const SK = -44; // x shift per row towards the back (back rows sit further left)
const YA = 262; // back edge of the slab
const SLAB_W = 512; // screen width of the tile grid
const THICK = 22; // slab thickness
const CR = 19; // column radius
const CAP = 7; // column cap ellipse ry
const MAX_COL_H = 192;

export const TrendSkylineDiagram = ({
	elements = DEFAULT_ELEMENTS,
	label = 'Electronegativity',
	unit = 'Pauling scale: about 0.7 to 4',
	unitAt = 144,
	highlight = 'F',
	highlightAt = 700,
	arrows = {across: {text: 'increases across', at: 384}, down: {text: 'decreases down', at: 532}},
	groups = [1, 2, 13, 14, 15, 16, 17, 18],
	periods = 3,
	noValue = {groups: [18], text: 'noble gases:\nno value', at: 960},
	decimals = 1,
	delay = 62,
}: TrendSkylineProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();

	const nC = groups.length;
	const nR = periods;
	const TW = SLAB_W / nC;
	const XA = 16 - nR * SK; // leftmost slab point sits at x = 16
	// Grid → screen. u: 0..nC across, v: 0..nR from the back edge to the front edge.
	const P = (u: number, v: number) => ({x: XA + u * TW + (nR - v) * SK, y: YA + v * TD});
	const tileCentre = (c: number, r: number) => P(c + 0.5, r + 0.5);
	const poly = (pts: {x: number; y: number}[]) => pts.map((p) => `${p.x},${p.y}`).join(' ');

	const vMax = Math.max(...elements.map((e) => e.value));
	const hPer = MAX_COL_H / vMax;
	const colOf = (g: number) => groups.indexOf(g);

	const placed = elements
		.map((e, i) => ({...e, c: colOf(e.group), r: e.period - 1, at: e.at ?? 20 + i * 30}))
		.filter((e) => e.c >= 0 && e.r >= 0 && e.r < nR)
		.sort((a, b) => a.r - b.r || a.c - b.c); // paint back rows first

	const hiOn = interpolate(frame, [highlightAt, highlightAt + 16], [0, 1], clamp);
	const pulse = frame > highlightAt + 16 ? idlePulse(frame) : 0;

	const front = P(0, nR);
	const frontR = P(nC, nR);
	const backR = P(nC, 0);
	const pad = 10;

	// Across arrow under the slab's front edge; down arrow parallel to the right edge.
	const acrossY = front.y + THICK + 40;
	const across = arrows.across;
	const down = arrows.down;
	const dx = frontR.x - backR.x;
	const dy = frontR.y - backR.y;
	const dLen = Math.hypot(dx, dy);
	const off = 44; // perpendicular offset from the edge
	const nx = dy / dLen;
	const ny = -dx / dLen;
	const dA = {x: backR.x + nx * off + (dx / dLen) * 34, y: backR.y + ny * off + (dy / dLen) * 34};
	const dB = {x: frontR.x + nx * off - (dx / dLen) * 8, y: frontR.y + ny * off - (dy / dLen) * 8};
	const acrossT = across ? interpolate(frame, [across.at ?? 0, (across.at ?? 0) + 18], [0, 1], clamp) : 0;
	const downT = down ? interpolate(frame, [down.at ?? 0, (down.at ?? 0) + 18], [0, 1], clamp) : 0;
	const acrossX0 = P(0.3, nR).x;
	const acrossX1 = P(nC - 1.2, nR).x;

	const nvOn = noValue ? fadeAt(frame, noValue.at ?? 0, 16) : 0;
	const nvCols = noValue ? noValue.groups.map(colOf).filter((c) => c >= 0) : [];

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${label}: values as columns on the periodic table`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<defs>
				<linearGradient id={`${ID}-top`} x1="0" x2="1" y1="0" y2="1">
					<stop offset="0%" stopColor={STONE.topLight} />
					<stop offset="60%" stopColor={STONE.top} />
					<stop offset="100%" stopColor={STONE.topEdge} />
				</linearGradient>
				<linearGradient id={`${ID}-side`} x1="0" x2="1" y1="0" y2="0">
					<stop offset="0%" stopColor={STONE.sideLight} />
					<stop offset="55%" stopColor={STONE.side} />
					<stop offset="100%" stopColor={STONE.sideDark} />
				</linearGradient>
				<filter id={`${ID}-blur`} x="-30%" y="-30%" width="160%" height="160%">
					<feGaussianBlur stdDeviation="7" />
				</filter>
				{[
					['col', theme.accent],
					['hi', TOK.amber],
				].map(([k, c]) => (
					<linearGradient key={k} id={`${ID}-${k}`} x1="0" x2="1" y1="0" y2="0">
						<stop offset="0%" stopColor={shade(c, 0.1)} />
						<stop offset="35%" stopColor={shade(c, 0.22)} />
						<stop offset="100%" stopColor={shade(c, -0.2)} />
					</linearGradient>
				))}
				<pattern id={`${ID}-hatch`} width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
					<line x1="0" y1="0" x2="0" y2="8" stroke={TOK.inkMute} strokeWidth="2" opacity="0.5" />
				</pattern>
			</defs>

			{/* Title + scale */}
			<text x={24} y={40} fill={TOK.ink} fontSize={28} fontWeight={800} opacity={fadeAt(frame, 0)}>
				{label}
			</text>
			<text x={24} y={68} fill={TOK.inkDim} fontSize={19} fontWeight={700} opacity={fadeAt(frame, unitAt)}>
				{unit}
			</text>

			{/* Slab: soft shadow, stone faces, stone top */}
			<g opacity={fadeAt(frame, 0, 14)}>
				<ellipse cx={(front.x + backR.x) / 2 + 20} cy={front.y + THICK + 6} rx={SLAB_W * 0.58} ry={26} fill={STONE.shadow} filter={`url(#${ID}-blur)`} />
				<polygon
					points={poly([
						{x: front.x - pad, y: front.y + pad * 0.6},
						{x: frontR.x + pad, y: frontR.y + pad * 0.6},
						{x: frontR.x + pad, y: frontR.y + pad * 0.6 + THICK},
						{x: front.x - pad, y: front.y + pad * 0.6 + THICK},
					])}
					fill={`url(#${ID}-side)`}
				/>
				<polygon
					points={poly([
						{x: backR.x + pad, y: backR.y - pad * 0.6},
						{x: frontR.x + pad, y: frontR.y + pad * 0.6},
						{x: frontR.x + pad, y: frontR.y + pad * 0.6 + THICK},
						{x: backR.x + pad, y: backR.y - pad * 0.6 + THICK},
					])}
					fill={STONE.sideDark}
				/>
				<polygon
					points={poly([
						{x: P(0, 0).x - pad, y: P(0, 0).y - pad * 0.6},
						{x: backR.x + pad, y: backR.y - pad * 0.6},
						{x: frontR.x + pad, y: frontR.y + pad * 0.6},
						{x: front.x - pad, y: front.y + pad * 0.6},
					])}
					fill={`url(#${ID}-top)`}
				/>

				{/* Tiles */}
				{Array.from({length: nR}, (_, r) =>
					Array.from({length: nC}, (_, c) => {
						const ins = 0.07;
						const pts = [P(c + ins, r + ins), P(c + 1 - ins, r + ins), P(c + 1 - ins, r + 1 - ins), P(c + ins, r + 1 - ins)];
						const nv = nvCols.includes(c);
						return (
							<g key={`t${r}-${c}`}>
								<polygon points={poly([pts[3], pts[2], {x: pts[2].x, y: pts[2].y + 5}, {x: pts[3].x, y: pts[3].y + 5}])} fill="#cfc8b6" />
								<polygon points={poly(pts)} fill="#fbfaf5" stroke="rgba(60,50,30,0.18)" strokeWidth={1.2} />
								{nv && <polygon points={poly(pts)} fill={`url(#${ID}-hatch)`} opacity={nvOn} />}
							</g>
						);
					}),
				)}
			</g>

			{/* Symbols printed on the featured tiles (covered once the column rises) */}
			{placed.map((e) => {
				const t = tileCentre(e.c, e.r);
				return (
					<text key={`s${e.symbol}`} x={t.x} y={t.y + 6} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800} opacity={fadeAt(frame, 6) * (1 - fadeAt(frame, e.at, 6))}>
						{e.symbol}
					</text>
				);
			})}

			{/* Columns */}
			{placed.map((e) => {
				const t = tileCentre(e.c, e.r);
				const bx = t.x;
				const by = t.y - 2;
				const grow = Math.max(0, spring({frame: frame - e.at, fps, config: {damping: 15, stiffness: 110}}));
				const h = e.value * hPer * grow;
				if (h < 1) return null;
				const top = by - h;
				const isHi = e.symbol === highlight;
				const fillId = isHi && hiOn > 0.5 ? 'hi' : 'col';
				const base = isHi && hiOn > 0.5 ? TOK.amber : theme.accent;
				return (
					<g key={`c${e.symbol}`}>
						{isHi && hiOn > 0 && (
							<ellipse cx={bx} cy={top} rx={CR * (1.9 + pulse * 0.4)} ry={CAP * (2.6 + pulse * 0.5)} fill={TOK.amber} opacity={0.22 * hiOn} filter={`url(#${ID}-blur)`} />
						)}
						<ellipse cx={bx + 4} cy={by + 3} rx={CR + 4} ry={CAP + 2} fill="rgba(40,40,30,0.22)" />
						<rect x={bx - CR} y={top} width={CR * 2} height={h} fill={`url(#${ID}-${fillId})`} />
						<ellipse cx={bx} cy={by} rx={CR} ry={CAP} fill={shade(base, -0.22)} />
						<rect x={bx - CR} y={by - 1} width={CR * 2} height={1} fill={shade(base, -0.22)} />
						<ellipse cx={bx} cy={top} rx={CR} ry={CAP} fill={shade(base, 0.3)} />
						<rect x={bx - CR + 6} y={top + 6} width={5} height={Math.max(0, h - 12)} rx={2.5} fill="#ffffff" opacity={0.3} />
						{h > 32 && (
							<text x={bx} y={by - 10} textAnchor="middle" fill="#ffffff" fontSize={18} fontWeight={800} opacity={interpolate(h, [32, 44], [0, 1], clamp)}>
								{e.symbol}
							</text>
						)}
					</g>
				);
			})}

			{/* Value labels (drawn above every column) */}
			{placed.map((e) => {
				const t = tileCentre(e.c, e.r);
				const grow = Math.max(0, spring({frame: frame - e.at, fps, config: {damping: 15, stiffness: 110}}));
				const top = t.y - 2 - e.value * hPer * grow;
				const isHi = e.symbol === highlight;
				return (
					<text
						key={`v${e.symbol}`}
						x={t.x}
						y={top - CAP - 9}
						textAnchor="middle"
						fill={isHi && hiOn > 0.5 ? TOK.amberInk : TOK.ink}
						fontSize={isHi ? 22 + 3 * hiOn : 22}
						fontWeight={800}
						opacity={fadeAt(frame, e.at + 8, 10)}
					>
						{e.value.toFixed(decimals)}
					</text>
				);
			})}

			{/* Crown on the peak */}
			{placed
				.filter((e) => e.symbol === highlight)
				.map((e) => {
					const t = tileCentre(e.c, e.r);
					const crown = popAt(frame, fps, highlightAt);
					const top = t.y - 2 - e.value * hPer;
					const cy = top - 58 - (1 - Math.min(1, crown)) * 40 + (frame > highlightAt + 30 ? idleBob(frame, 3, 1.5) : 0);
					return (
						<g key="crown" transform={`translate(${t.x}, ${cy})`} opacity={Math.min(1, crown * 2)}>
							<path d="M -22 14 L -25 -8 L -12 3 L 0 -15 L 12 3 L 25 -8 L 22 14 Z" fill="#f2b632" stroke="#b07a10" strokeWidth={2} strokeLinejoin="round" />
							<rect x={-22} y={12} width={44} height={8} rx={3} fill="#e0a21f" stroke="#b07a10" strokeWidth={2} />
							<circle cx={0} cy={-15} r={3.5} fill="#fff4cc" />
							<circle cx={-25} cy={-8} r={3} fill="#fff4cc" />
							<circle cx={25} cy={-8} r={3} fill="#fff4cc" />
						</g>
					);
				})}

			{/* Across arrow */}
			{across && acrossT > 0 && (
				<g>
					<Arrow x1={acrossX0} y1={acrossY} x2={acrossX0 + (acrossX1 - acrossX0) * acrossT} y2={acrossY} color={theme.accent} width={4} head={14} />
					<Chip x={(acrossX0 + acrossX1) / 2} y={acrossY} text={across.text} color={theme.accent} size={20} opacity={fadeAt(frame, (across.at ?? 0) + 8, 10)} />
				</g>
			)}

			{/* Down arrow */}
			{down && downT > 0 && (
				<g>
					<Arrow x1={dA.x} y1={dA.y} x2={dA.x + (dB.x - dA.x) * downT} y2={dA.y + (dB.y - dA.y) * downT} color={theme.accent} width={4} head={14} />
					<g opacity={fadeAt(frame, (down.at ?? 0) + 8, 10)}>
						{down.text.split(' ').map((w, k, arr) => (
							<text
								key={k}
								x={(dA.x + dB.x) / 2 + 24}
								y={(dA.y + dB.y) / 2 - (arr.length - 1) * 12 + k * 24 + 6}
								fill={theme.accent}
								fontSize={20}
								fontWeight={800}
							>
								{w}
							</text>
						))}
					</g>
				</g>
			)}

			{/* No-value note */}
			{noValue && nvOn > 0 && nvCols.length > 0 && (
				<g opacity={nvOn}>
					{noValue.text.split('\n').map((l, k) => (
						<text key={k} x={P(nvCols[0] + 0.5, nR).x + 34} y={acrossY - 6 + k * 22} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>
							{l}
						</text>
					))}
				</g>
			)}
		</svg>
	);
};
