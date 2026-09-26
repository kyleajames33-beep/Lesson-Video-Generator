// Shared helpers for the restyled chemistry specials (lane: restyle-chem-specials).
//
// These sit on top of the shared diorama primitives in ../../diorama.tsx and
// only add what those don't cover: glossy balls of any colour (for particles
// that aren't CPK atoms: protons, electrons, dye, metal ions), a linear
// three-atom molecule (CO₂), glassware shading, self-drawing strokes and a
// triangle-wave clock for loops. Candidates for promotion into diorama.tsx.

import type {ReactNode} from 'react';
import {interpolate} from 'remotion';

export const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

/** 0→1 fade over `len` frames starting at `d` (frames relative to the build start). */
export const fadeAt = (frame: number, d: number, len = 12) => interpolate(frame, [d, d + len], [0, 1], clamp);

export const shade = (hex: string, amt: number) => {
	const n = parseInt(hex.slice(1), 16);
	const ch = (v: number) => Math.max(0, Math.min(255, Math.round(v + amt * 255)));
	return `#${((1 << 24) | (ch((n >> 16) & 255) << 16) | (ch((n >> 8) & 255) << 8) | ch(n & 255)).toString(16).slice(1)}`;
};

/** Glossy-ball gradients for arbitrary named colours: <BallDefs id="x" colors={{proton: '#d65a4a'}} />. */
export const BallDefs = ({id, colors}: {id: string; colors: Record<string, string>}) => (
	<defs>
		{Object.entries(colors).map(([name, base]) => (
			<radialGradient key={name} id={`${id}-ball-${name}`} cx="38%" cy="32%" r="70%" fx="32%" fy="26%">
				<stop offset="0%" stopColor="#ffffff" />
				<stop offset="22%" stopColor={shade(base, 0.08)} />
				<stop offset="75%" stopColor={base} />
				<stop offset="100%" stopColor={shade(base, -0.28)} />
			</radialGradient>
		))}
	</defs>
);

/** One glossy ball. `fill` is the gradient name given to BallDefs; `edge` the base colour (for the rim). */
export const Ball = ({id, fill, edge, x, y, r, opacity = 1, scale = 1, shadow = false, children}: {
	id: string; fill: string; edge: string; x: number; y: number; r: number; opacity?: number; scale?: number; shadow?: boolean; children?: ReactNode;
}) => (
	<g opacity={opacity} transform={`translate(${x},${y}) scale(${scale})`}>
		{shadow ? <ellipse cx={0} cy={r * 0.95} rx={r * 1.15} ry={r * 0.26} fill="rgba(40,60,20,0.22)" /> : null}
		<circle r={r} fill={`url(#${id}-ball-${fill})`} stroke={shade(edge, -0.35)} strokeWidth={1} />
		{children}
	</g>
);

/**
 * Linear triatomic molecule (O=C=O), centred on (x, y), rotated by `angle`
 * degrees. Uses the CPK gradients from DioramaDefs (`${id}-atom-${el}`).
 */
export const LinearMolecule = ({id, atoms, x, y, r, angle = 0, opacity = 1, scale = 1, edge}: {
	id: string; atoms: [string, string, string]; x: number; y: number; r: number; angle?: number; opacity?: number; scale?: number; edge: (el: string) => string;
}) => {
	const d = r * 1.45;
	const rad = (angle * Math.PI) / 180;
	const pts = [-d, 0, d].map((o, i) => ({el: atoms[i], dx: Math.cos(rad) * o, dy: Math.sin(rad) * o, i}));
	// middle atom drawn last so it sits in front of both ends
	const order = [pts[0], pts[2], pts[1]];
	return (
		<g opacity={opacity} transform={`translate(${x},${y}) scale(${scale})`}>
			{order.map((p) => (
				<circle key={p.i} cx={p.dx} cy={p.dy} r={p.i === 1 ? r * 0.92 : r} fill={`url(#${id}-atom-${p.el})`} stroke={edge(p.el)} strokeWidth={1} />
			))}
		</g>
	);
};

/** Glass defs: a pale vertical body tint plus a soft highlight streak. */
export const GlassDefs = ({id}: {id: string}) => (
	<defs>
		<linearGradient id={`${id}-glass`} x1="0" x2="1" y1="0" y2="0">
			<stop offset="0%" stopColor="#ffffff" stopOpacity={0.55} />
			<stop offset="18%" stopColor="#eef6f7" stopOpacity={0.35} />
			<stop offset="70%" stopColor="#dfeef0" stopOpacity={0.25} />
			<stop offset="100%" stopColor="#c9dfe2" stopOpacity={0.5} />
		</linearGradient>
		<linearGradient id={`${id}-shine`} x1="0" x2="1" y1="0" y2="0">
			<stop offset="0%" stopColor="#ffffff" stopOpacity={0} />
			<stop offset="50%" stopColor="#ffffff" stopOpacity={0.85} />
			<stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
		</linearGradient>
	</defs>
);

export const GLASS_EDGE = '#7f9ea3';

/** A stroke that draws itself: pass progress 0..1. Uses pathLength so no measuring is needed. */
export const drawProps = (progress: number) => ({
	pathLength: 1,
	strokeDasharray: 1,
	strokeDashoffset: 1 - Math.max(0, Math.min(1, progress)),
});

/** Arrow head (filled triangle) at (x, y) pointing along `angleDeg`. */
export const ArrowHead = ({x, y, angleDeg, size = 12, fill, opacity = 1}: {x: number; y: number; angleDeg: number; size?: number; fill: string; opacity?: number}) => (
	<path d={`M 0 0 L ${-size} ${-size * 0.6} L ${-size * 0.72} 0 L ${-size} ${size * 0.6} Z`} fill={fill} opacity={opacity} transform={`translate(${x},${y}) rotate(${angleDeg})`} />
);

/** Triangle wave 0→1→0 with the given period (frames): for bounces and loops. */
export const pingPong = (frame: number, period: number) => {
	const p = (((frame % period) + period) % period) / period;
	return p < 0.5 ? p * 2 : 2 - p * 2;
};
