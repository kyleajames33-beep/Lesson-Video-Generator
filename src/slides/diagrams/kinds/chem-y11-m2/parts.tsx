// Shared props for the chem-y11-m2 lane's diorama kinds: painted-style lab
// objects (balance, balloon, beaker, atom pile, mole blocks) and small UI bits
// (op chips, warning line). Everything is coded SVG, deterministic, and meant
// to sit on a DioramaPlinth from ../../diorama. These could be promoted to the
// shared diorama.tsx later; they live here so the lane never edits shared files.

import type {ReactNode} from 'react';
import {TOK} from '../../../../styles/tokens';

export const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const shade = (hex: string, amt: number) => {
	const n = parseInt(hex.slice(1), 16);
	const ch = (v: number) => Math.max(0, Math.min(255, Math.round(v + amt * 255)));
	return `#${((1 << 24) | (ch((n >> 16) & 255) << 16) | (ch((n >> 8) & 255) << 8) | ch(n & 255)).toString(16).slice(1)}`;
};

// Colours of meaning shared by the lane: what you are GIVEN, the MOLES hub,
// and what you WANT. Amber stays reserved for the one trap / answer per scene.
export const LANE = {
	given: '#0d6b52',
	moles: '#3f6fd8',
	wanted: '#8e5bd6',
	liquid: '#5aa9e6',
	glass: 'rgba(210,232,245,0.35)',
	glassEdge: '#9fb8c8',
	wood: '#a8743f',
	woodDark: '#6e4721',
	metal: '#c9ccd1',
	metalDark: '#8b9098',
} as const;

/** Rough text width for Inter Tight at a given size (good enough to size pills). */
export const textW = (s: string, fontSize: number) => {
	let w = 0;
	for (const ch of s) {
		if ('ilI.,:;|!\'’ '.includes(ch)) w += 0.3;
		else if ('mwMW'.includes(ch)) w += 0.85;
		else if ('₀₁₂₃₄₅₆₇₈₉⁻¹²³'.includes(ch)) w += 0.42;
		else if (ch >= 'A' && ch <= 'Z') w += 0.66;
		else w += 0.56;
	}
	return w * fontSize;
};

/** A rounded pill with centred text. `on` fills it; otherwise outlined. */
export const Chip = ({
	x, y, text, color, on = false, fontSize = 19, opacity = 1, strokeWidth = 2.5, minW = 0,
}: {x: number; y: number; text: string; color: string; on?: boolean; fontSize?: number; opacity?: number; strokeWidth?: number; minW?: number}) => {
	const w = Math.max(minW, textW(text, fontSize) + fontSize * 1.3);
	const h = fontSize * 1.75;
	return (
		<g opacity={opacity}>
			<rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={h / 2} fill={on ? color : TOK.bgLift} stroke={color} strokeWidth={strokeWidth} />
			<text x={x} y={y + fontSize * 0.36} textAnchor="middle" fill={on ? '#ffffff' : color} fontSize={fontSize} fontWeight={800}>
				{text}
			</text>
		</g>
	);
};

/** Small warning triangle + amber text, for the one trap each scene flags. */
export const TrapLine = ({x, y, text, opacity, pulse = 0, fontSize = 20}: {x: number; y: number; text: string; opacity: number; pulse?: number; fontSize?: number}) => {
	const w = textW(text, fontSize) + 44;
	return (
		<g opacity={opacity}>
			<rect x={x - w / 2 - 12} y={y - fontSize * 1.1} width={w + 24} height={fontSize * 1.9} rx={fontSize * 0.95} fill="#fff6e3" stroke={TOK.amber} strokeWidth={2 + pulse * 1.5} />
			<g transform={`translate(${x - w / 2 + 8}, ${y - fontSize * 0.2})`}>
				<path d="M 0 -11 L 11 9 L -11 9 Z" fill={TOK.amber} stroke="#b07a10" strokeWidth={1.5} strokeLinejoin="round" />
				<text x={0} y={6} textAnchor="middle" fill="#ffffff" fontSize={13} fontWeight={900}>!</text>
			</g>
			<text x={x + 16} y={y + fontSize * 0.34} textAnchor="middle" fill={TOK.amberInk} fontSize={fontSize} fontWeight={800}>
				{text}
			</text>
		</g>
	);
};

/** Glossy sphere (no gradient defs needed: highlight is a second circle). */
export const Ball = ({x, y, r, color, opacity = 1}: {x: number; y: number; r: number; color: string; opacity?: number}) => (
	<g opacity={opacity}>
		<circle cx={x} cy={y} r={r} fill={color} stroke={shade(color, -0.3)} strokeWidth={1} />
		<circle cx={x - r * 0.3} cy={y - r * 0.32} r={r * 0.38} fill="#ffffff" opacity={0.55} />
	</g>
);

/** Triangular stack of balls standing on (x, baseY): 1,2,3… from the top. */
export const pileSlots = (x: number, baseY: number, n: number, r: number) => {
	const out: {x: number; y: number}[] = [];
	let rows = 1;
	while ((rows * (rows + 1)) / 2 < n) rows++;
	let placed = 0;
	for (let row = rows - 1; row >= 0 && placed < n; row--) {
		const inRow = Math.min(row + 1, n - placed);
		for (let c = 0; c < inRow; c++) {
			out.push({x: x + (c - (inRow - 1) / 2) * r * 2.02, y: baseY - r - (rows - 1 - row) * r * 1.72});
			placed++;
		}
	}
	return out;
};

/** Digital lab balance with a heap on its pan and an LCD readout. */
export const Balance = ({x, y, readout, heap = '#f4f1ea', heapScale = 1, scale = 1}: {x: number; y: number; readout: string; heap?: string; heapScale?: number; scale?: number}) => (
	<g transform={`translate(${x}, ${y}) scale(${scale})`}>
		{/* body */}
		<path d="M -58 0 L -50 -34 L 50 -34 L 58 0 Z" fill="#e9ecef" stroke={LANE.metalDark} strokeWidth={1.5} />
		<rect x={-58} y={-4} width={116} height={10} rx={3} fill={LANE.metalDark} />
		{/* LCD */}
		<rect x={-34} y={-28} width={68} height={20} rx={3} fill="#23302b" />
		<text x={0} y={-13} textAnchor="middle" fill="#9ff5c7" fontSize={14} fontWeight={700} fontFamily='"JetBrains Mono", monospace'>{readout}</text>
		{/* pan */}
		<rect x={-4} y={-46} width={8} height={12} fill={LANE.metalDark} />
		<ellipse cx={0} cy={-46} rx={46} ry={10} fill={LANE.metal} stroke={LANE.metalDark} strokeWidth={1.5} />
		{/* heap */}
		<g transform={`translate(0, -48) scale(${heapScale})`}>
			<path d="M -30 0 Q -18 -30 0 -32 Q 18 -30 30 0 Z" fill={heap} stroke={shade(heap, -0.25)} strokeWidth={1.2} />
			<ellipse cx={-7} cy={-20} rx={8} ry={4} fill="#ffffff" opacity={0.5} />
		</g>
	</g>
);

/** A party balloon tied to (x, y) on the plinth, floating up to height h. */
export const Balloon = ({x, y, h = 96, color = '#e5484d', label, sway = 0}: {x: number; y: number; h?: number; color?: string; label?: string; sway?: number}) => {
	const bx = x + sway, by = y - h;
	return (
		<g>
			<path d={`M ${x} ${y} Q ${x - 10 + sway * 0.4} ${y - h * 0.35} ${bx} ${by + 34}`} stroke={TOK.inkDim} strokeWidth={1.5} fill="none" />
			<path d={`M ${bx - 5} ${by + 38} L ${bx + 5} ${by + 38} L ${bx} ${by + 31} Z`} fill={shade(color, -0.2)} />
			<ellipse cx={bx} cy={by} rx={28} ry={33} fill={color} stroke={shade(color, -0.3)} strokeWidth={1.2} />
			<ellipse cx={bx - 9} cy={by - 12} rx={8} ry={11} fill="#ffffff" opacity={0.45} />
			{label && (
				<text x={bx} y={by + 7} textAnchor="middle" fill="#ffffff" fontSize={18} fontWeight={800}>{label}</text>
			)}
		</g>
	);
};

/**
 * A glass beaker whose base sits on (x, y). `level` 0..1 is the liquid height
 * as a fraction of the beaker; `children` draw inside (clipped to the liquid).
 */
export const Beaker = ({
	id, x, y, w = 96, h = 110, level = 0.6, liquid = LANE.liquid, children, marks = 4, tag,
}: {id: string; x: number; y: number; w?: number; h?: number; level?: number; liquid?: string; children?: ReactNode; marks?: number; tag?: string}) => {
	const l = x - w / 2, r = x + w / 2, top = y - h;
	const ly = y - h * Math.max(0, Math.min(1, level));
	const clipId = `${id}-liq`;
	return (
		<g>
			<defs>
				<clipPath id={clipId}>
					<rect x={l + 3} y={ly} width={w - 6} height={Math.max(0, y - ly - 3)} />
				</clipPath>
			</defs>
			<ellipse cx={x} cy={y + 2} rx={w * 0.55} ry={7} fill="rgba(30,30,30,0.18)" />
			{/* liquid */}
			{level > 0.005 && (
				<g>
					<rect x={l + 3} y={ly} width={w - 6} height={Math.max(0, y - ly - 3)} fill={liquid} opacity={0.55} />
					<ellipse cx={x} cy={ly} rx={w / 2 - 3} ry={5} fill={shade(liquid, 0.15)} opacity={0.8} />
					<g clipPath={`url(#${clipId})`}>{children}</g>
				</g>
			)}
			{/* glass */}
			<path d={`M ${l - 6} ${top} L ${l} ${top + 6} L ${l} ${y - 6} Q ${l} ${y} ${l + 6} ${y} L ${r - 6} ${y} Q ${r} ${y} ${r} ${y - 6} L ${r} ${top}`} fill={LANE.glass} stroke={LANE.glassEdge} strokeWidth={2.5} strokeLinejoin="round" />
			<rect x={l + 7} y={top + 12} width={6} height={h - 24} rx={3} fill="#ffffff" opacity={0.5} />
			{Array.from({length: marks}, (_, i) => {
				const my = y - (h * (i + 1)) / (marks + 1);
				return <line key={i} x1={r - 18} x2={r - 4} y1={my} y2={my} stroke={LANE.glassEdge} strokeWidth={1.5} />;
			})}
			{tag && (
				<text x={x} y={top - 10} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>{tag}</text>
			)}
		</g>
	);
};

/** Deterministic, evenly spread particle positions inside a box. */
export const scatter = (n: number, x0: number, y0: number, w: number, h: number, seed = 1) => {
	const out: {x: number; y: number}[] = [];
	const cols = Math.max(1, Math.round(Math.sqrt((n * w) / Math.max(1, h))));
	const rows = Math.ceil(n / cols);
	for (let i = 0; i < n; i++) {
		const c = i % cols, r = Math.floor(i / cols);
		const jx = Math.sin(i * 12.9898 * seed) * 0.28, jy = Math.cos(i * 78.233 * seed) * 0.28;
		out.push({x: x0 + ((c + 0.5 + jx) / cols) * w, y: y0 + ((r + 0.5 + jy) / rows) * h});
	}
	return out;
};

/** Point on an arch from (x1, y1) to (x2, y2) that rises by `rise` mid-span (t 0..1). */
export const archPoint = (x1: number, y1: number, x2: number, y2: number, rise: number, t: number, lift = 0) => ({
	x: x1 + (x2 - x1) * t,
	y: y1 + (y2 - y1) * t - 4 * rise * t * (1 - t) - lift,
});

/** A wooden arched footbridge from (x1, y1) to (x2, y2). `progress` lays planks left to right. */
export const Footbridge = ({x1, y1, x2, y2, rise = 26, progress = 1}: {x1: number; y1: number; x2: number; y2: number; rise?: number; progress?: number}) => {
	const planks = 9;
	const shown = Math.round(planks * Math.max(0, Math.min(1, progress)));
	const cx = (x1 + x2) / 2, cy = (y1 + y2) / 2 - 2 * rise;
	const len = Math.hypot(x2 - x1, y2 - y1);
	return (
		<g opacity={progress > 0 ? 1 : 0}>
			<path d={`M ${x1} ${y1 + 7} Q ${cx} ${cy + 7} ${x2} ${y2 + 7}`} stroke={LANE.woodDark} strokeWidth={7} fill="none" strokeLinecap="round" />
			{Array.from({length: shown}, (_, i) => {
				const t = (i + 0.5) / planks;
				const p = archPoint(x1, y1, x2, y2, rise, t);
				const dx = x2 - x1, dy = y2 - y1 - 4 * rise * (1 - 2 * t);
				const ang = (Math.atan2(dy, dx) * 180) / Math.PI;
				const pw = len / planks - 2;
				return (
					<rect key={i} x={-pw / 2} y={-4.5} width={pw} height={9} rx={2} transform={`translate(${p.x}, ${p.y}) rotate(${ang})`} fill={i % 2 ? LANE.wood : shade(LANE.wood, 0.07)} stroke={LANE.woodDark} strokeWidth={1} />
				);
			})}
			{progress >= 1 && (
				<path d={`M ${x1} ${y1 - 16} Q ${cx} ${cy - 16} ${x2} ${y2 - 16}`} stroke={LANE.woodDark} strokeWidth={3} fill="none" strokeLinecap="round" />
			)}
		</g>
	);
};

export type StationIconKind = 'mass' | 'precipitate' | 'gas' | 'solution' | 'particles';

/**
 * The painted object that stands for a measurable quantity, standing on
 * (x, baseY): a balance for mass, a balloon for gas volume, a beaker for a
 * solution, a heap of atoms for a particle count. `value` is its readout.
 */
export const StationIcon = ({
	id, icon, x, baseY, value, frame, scale = 1, color = LANE.given,
}: {id: string; icon: StationIconKind; x: number; baseY: number; value?: string; frame: number; scale?: number; color?: string}) => {
	const bob = Math.sin(frame / 22) * 3;
	if (icon === 'mass' || icon === 'precipitate') {
		return <Balance x={x} y={baseY} readout={value ?? 'g'} heap={icon === 'precipitate' ? '#fbfbf6' : '#efe6d2'} scale={scale} />;
	}
	if (icon === 'gas') {
		return (
			<g transform={`translate(${x}, ${baseY}) scale(${scale})`}>
				<Balloon x={0} y={0} h={92} color="#e5484d" label={value ?? 'V'} sway={bob} />
			</g>
		);
	}
	if (icon === 'solution') {
		const pts = scatter(9, -34, -62, 68, 50, 1.3);
		return (
			<g transform={`translate(${x}, ${baseY}) scale(${scale})`}>
				<Beaker id={`${id}-bk-${Math.round(x)}-${Math.round(baseY)}`} x={0} y={0} w={86} h={100} level={0.7}>
					{pts.map((p, i) => (
						<Ball key={i} x={p.x + Math.sin(frame / 15 + i) * 2} y={p.y + Math.cos(frame / 19 + i * 1.3) * 2} r={5.5} color={color} />
					))}
				</Beaker>
				{value && (
					<text x={0} y={-112} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>{value}</text>
				)}
			</g>
		);
	}
	// particles
	const slots = pileSlots(0, 0, 10, 10);
	return (
		<g transform={`translate(${x}, ${baseY}) scale(${scale})`}>
			{slots.map((p, i) => (
				<Ball key={i} x={p.x} y={p.y} r={10} color={color} />
			))}
			{value && (
				<text x={0} y={-82} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>{value}</text>
			)}
		</g>
	);
};
