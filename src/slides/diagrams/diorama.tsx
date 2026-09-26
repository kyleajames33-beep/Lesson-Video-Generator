// Diorama primitives — the coded half of the "painted diorama" look.
//
// The painted props (docs/diorama-asset-brief-*.md) sit on a round soil-and-grass
// plinth, lit from the top-left, seen from a 3/4 top-down camera. These SVG
// pieces draw the same plinth and glossy "painted" atoms so coded diagrams
// (which carry every label, number and moving part) read as one family with the
// painted art. Everything is deterministic: no randomness, no external files.
//
// Gradient ids are namespaced with an `id` prefix so two diagrams on screen at
// once (e.g. during a transition) never share or clobber each other's <defs>.

import type {ReactNode} from 'react';

// Plinth palette, matched to the painted garden/tree tiles.
export const DIO = {
	grassLight: '#b5d86a',
	grass: '#8dbb45',
	grassDark: '#5f8f2c',
	soilLight: '#9a6d3f',
	soil: '#7a5230',
	soilDark: '#553620',
	pebble: '#b89a74',
	shadow: 'rgba(58,40,18,0.22)',
} as const;

// CPK-style element colours (H white, O red, Cl green, Na violet, …): the
// convention students meet in molecular-model kits and textbooks.
export const ELEMENT_COLORS: Record<string, string> = {
	H: '#f2f2ef',
	O: '#e0433a',
	N: '#3f6fd8',
	C: '#3b3b3b',
	Cl: '#4fbf4a',
	Na: '#8e5bd6',
	S: '#f0c93a',
};

const shade = (hex: string, amt: number) => {
	const n = parseInt(hex.slice(1), 16);
	const ch = (v: number) => Math.max(0, Math.min(255, Math.round(v + amt * 255)));
	const r = ch((n >> 16) & 255), g = ch((n >> 8) & 255), b = ch(n & 255);
	return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
};

/** <defs> every diorama diagram needs: plinth gradients, glossy atom fills, soft blur. */
export const DioramaDefs = ({id, elements = []}: {id: string; elements?: string[]}) => (
	<defs>
		<radialGradient id={`${id}-grass`} cx="40%" cy="35%" r="75%">
			<stop offset="0%" stopColor={DIO.grassLight} />
			<stop offset="65%" stopColor={DIO.grass} />
			<stop offset="100%" stopColor={DIO.grassDark} />
		</radialGradient>
		<linearGradient id={`${id}-soil`} x1="0" x2="1" y1="0" y2="0">
			<stop offset="0%" stopColor={DIO.soilLight} />
			<stop offset="45%" stopColor={DIO.soil} />
			<stop offset="100%" stopColor={DIO.soilDark} />
		</linearGradient>
		<filter id={`${id}-blur`} x="-30%" y="-30%" width="160%" height="160%">
			<feGaussianBlur stdDeviation="6" />
		</filter>
		{elements.map((el) => {
			const base = ELEMENT_COLORS[el] ?? '#9a9a9a';
			return (
				<radialGradient key={el} id={`${id}-atom-${el}`} cx="38%" cy="32%" r="70%" fx="32%" fy="26%">
					<stop offset="0%" stopColor="#ffffff" />
					<stop offset="22%" stopColor={shade(base, 0.08)} />
					<stop offset="75%" stopColor={base} />
					<stop offset="100%" stopColor={shade(base, -0.28)} />
				</radialGradient>
			);
		})}
	</defs>
);

/**
 * A round soil-and-grass plinth. (cx, cy) is the centre of the grass top;
 * children are drawn on top of it (so particles/bars "stand" on the grass).
 */
export const DioramaPlinth = ({
	id, cx, cy, rx, children,
}: {id: string; cx: number; cy: number; rx: number; children?: ReactNode}) => {
	const ry = rx * 0.34;
	const depth = rx * 0.2;
	// Deterministic grass tufts and pebbles around the rim.
	const tufts = [-0.86, -0.55, -0.18, 0.24, 0.6, 0.9];
	const pebbles = [-0.7, -0.35, 0.05, 0.42, 0.78];
	return (
		<g>
			<ellipse cx={cx + rx * 0.06} cy={cy + depth + ry * 0.55} rx={rx * 1.04} ry={ry * 0.9} fill={DIO.shadow} filter={`url(#${id}-blur)`} />
			<path
				d={`M ${cx - rx} ${cy} L ${cx - rx} ${cy + depth} A ${rx} ${ry} 0 0 0 ${cx + rx} ${cy + depth} L ${cx + rx} ${cy} Z`}
				fill={`url(#${id}-soil)`}
			/>
			{pebbles.map((p, i) => (
				<ellipse
					key={i}
					cx={cx + p * rx}
					cy={cy + depth * 0.55 + ry * Math.sqrt(1 - p * p)}
					rx={rx * 0.028}
					ry={rx * 0.016}
					fill={DIO.pebble}
					opacity={0.8}
				/>
			))}
			<ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={`url(#${id}-grass)`} />
			<ellipse cx={cx - rx * 0.12} cy={cy - ry * 0.18} rx={rx * 0.62} ry={ry * 0.48} fill="#ffffff" opacity={0.12} />
			{tufts.map((t, i) => {
				const x = cx + t * rx * 0.97;
				const y = cy + ry * Math.sqrt(1 - t * t) * 0.97;
				const h = rx * 0.07;
				return (
					<path
						key={i}
						d={`M ${x - h * 0.5} ${y} q ${h * 0.1} ${-h} ${-h * 0.2} ${-h * 1.2} M ${x} ${y} q 0 ${-h} ${h * 0.15} ${-h * 1.4} M ${x + h * 0.5} ${y} q ${h * 0.05} ${-h * 0.8} ${h * 0.4} ${-h}`}
						stroke={DIO.grassDark}
						strokeWidth={2}
						strokeLinecap="round"
						fill="none"
					/>
				);
			})}
			{children}
		</g>
	);
};

/**
 * A glossy ball model of a small molecule, centred on (x, y).
 * 1 atom: a sphere. 2 atoms: a diatomic pair. 3 atoms: bent, first atom
 * central (H₂O-style, 104.5° drawn as ±52° from straight down).
 */
export const Molecule = ({
	id, atoms, x, y, r, opacity = 1, scale = 1,
}: {id: string; atoms: string[]; x: number; y: number; r: number; opacity?: number; scale?: number}) => {
	const radius = (el: string) => (el === 'H' ? r * 0.72 : r);
	let placed: {el: string; dx: number; dy: number}[];
	if (atoms.length === 1) {
		placed = [{el: atoms[0], dx: 0, dy: 0}];
	} else if (atoms.length === 2) {
		const d = (radius(atoms[0]) + radius(atoms[1])) * 0.42;
		placed = [{el: atoms[0], dx: -d, dy: 0}, {el: atoms[1], dx: d, dy: 0}];
	} else {
		const d = (radius(atoms[0]) + radius(atoms[1])) * 0.62;
		const a = (52 * Math.PI) / 180;
		placed = [
			{el: atoms[0], dx: 0, dy: -r * 0.2},
			...atoms.slice(1).map((el, i) => ({el, dx: (i === 0 ? -1 : 1) * d * Math.sin(a), dy: -r * 0.2 + d * Math.cos(a)})),
		];
	}
	// Paint back-to-front: lower atoms (larger dy) last so they overlap correctly.
	const order = [...placed].sort((p, q) => p.dy - q.dy);
	return (
		<g opacity={opacity} transform={`translate(${x},${y}) scale(${scale})`}>
			<ellipse cx={0} cy={r * 0.95} rx={r * 1.25} ry={r * 0.28} fill="rgba(40,60,20,0.25)" />
			{order.map((p, i) => (
				<circle
					key={i}
					cx={p.dx}
					cy={p.dy}
					r={radius(p.el)}
					fill={`url(#${id}-atom-${p.el})`}
					stroke={shade(ELEMENT_COLORS[p.el] ?? '#9a9a9a', -0.35)}
					strokeWidth={1}
				/>
			))}
		</g>
	);
};

/**
 * Hold-state life. Once a diagram's main animation has played, it must not sit
 * frozen while the narration carries on (docs/diorama-system.md, rule 6).
 * `idleBob` is a small deterministic per-item drift: particles jostle gently
 * (which also reads as thermal motion); `idlePulse` is a 0..1 breathing value
 * for the single highlight that matters.
 */
export const idleBob = (frame: number, i: number, amp = 2.2) =>
	Math.sin(frame / 17 + i * 1.7) * amp + Math.sin(frame / 29 + i * 0.9) * amp * 0.45;
export const idlePulse = (frame: number, periodFrames = 54) =>
	0.5 + 0.5 * Math.sin((frame / periodFrames) * Math.PI * 2);

/** Slot positions for up to ~14 molecules on a plinth top, packed front-to-back. */
export const plinthSlots = (cx: number, cy: number, rx: number, n: number): {x: number; y: number}[] => {
	const ry = rx * 0.34;
	const rows = n <= 4 ? 2 : n <= 9 ? 3 : 4;
	const perRow = Math.ceil(n / rows);
	const out: {x: number; y: number}[] = [];
	for (let row = 0; row < rows && out.length < n; row++) {
		const fy = -0.55 + (1.1 * row) / (rows - 1);
		const halfW = rx * 0.78 * Math.sqrt(Math.max(0.15, 1 - fy * fy));
		const count = Math.min(perRow, n - out.length);
		for (let c = 0; c < count; c++) {
			const fx = count === 1 ? 0 : -1 + (2 * c) / (count - 1);
			out.push({x: cx + fx * halfW * 0.85, y: cy + fy * ry * 0.85 - rx * 0.06});
		}
	}
	return out;
};
