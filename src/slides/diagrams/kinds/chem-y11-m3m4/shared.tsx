// Shared pieces for the chem-y11-m3m4 lane's diorama kinds (Reactive
// Chemistry and Drivers of Reactions). Lane-local on purpose: anything here
// that proves generally useful could be promoted into diorama.tsx later.

import type {ReactNode} from 'react';
import {interpolate} from 'remotion';
import {ELEMENT_COLORS} from '../../diorama';

export const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

/** 0→1 over `len` frames starting at `start`. */
export const ramp = (frame: number, start: number, len = 12) => interpolate(frame, [start, start + len], [0, 1], clamp);

export const shade = (hex: string, amt: number) => {
	const n = parseInt(hex.slice(1), 16);
	const ch = (v: number) => Math.max(0, Math.min(255, Math.round(v + amt * 255)));
	return `#${((1 << 24) | (ch((n >> 16) & 255) << 16) | (ch((n >> 8) & 255) << 8) | ch(n & 255)).toString(16).slice(1)}`;
};

// Elements and ions this lane needs beyond diorama.tsx's CPK set. Metals use
// their real-world colour (iron grey, copper orange, zinc blue-grey, silver).
export const EXTRA_COLORS: Record<string, string> = {
	Fe: '#8a8f99',
	Cu: '#d0773a',
	Zn: '#9fb3c8',
	Ag: '#c9ccd2',
	Mg: '#b9c2bd',
	Pt: '#b8bcc4',
	Rust: '#b5532b',
	// Hydrated Cu²⁺ is blue in solution; Fe³⁺ yellow-brown, Fe²⁺ pale green.
	CuIon: '#3f86d6',
	Fe3: '#c98a2e',
	Fe2: '#8cc37a',
	A: '#3f8fd8',
	B: '#e0563a',
	e: '#f0a830',
};

export const colorOf = (el: string) => ELEMENT_COLORS[el] ?? EXTRA_COLORS[el] ?? '#9a9a9a';

/**
 * Glossy-ball gradients for elements not in DioramaDefs' CPK set, using the
 * same `${id}-atom-${el}` ids so the shared <Molecule> can draw them.
 */
export const ExtraAtomDefs = ({id, elements}: {id: string; elements: string[]}) => (
	<defs>
		{elements.map((el) => {
			const base = colorOf(el);
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

/** One glossy ball with an optional label or charge sign centred on it. */
export const Ball = ({
	id, el, x, y, r, label, labelColor = '#ffffff', labelSize, opacity = 1, scale = 1, stroke,
}: {
	id: string; el: string; x: number; y: number; r: number; label?: string; labelColor?: string;
	labelSize?: number; opacity?: number; scale?: number; stroke?: string;
}) => (
	<g opacity={opacity} transform={`translate(${x},${y}) scale(${scale})`}>
		<circle r={r} fill={`url(#${id}-atom-${el})`} stroke={stroke ?? shade(colorOf(el), -0.35)} strokeWidth={stroke ? 3 : 1} />
		{label && (
			<text y={(labelSize ?? r * 0.95) * 0.36} textAnchor="middle" fill={labelColor} fontSize={labelSize ?? r * 0.95} fontWeight={800}>
				{label}
			</text>
		)}
	</g>
);

/**
 * A glass beaker standing on its base at (cx, baseY). `level` is the liquid
 * height as a fraction of the beaker. Children draw inside the liquid layer.
 */
export const Beaker = ({
	cx, baseY, w, h, level = 0.72, liquid = 'rgba(120,190,235,0.28)', children,
}: {cx: number; baseY: number; w: number; h: number; level?: number; liquid?: string; children?: ReactNode}) => {
	const x0 = cx - w / 2, x1 = cx + w / 2, top = baseY - h;
	const lip = 8;
	const ly = baseY - h * level;
	return (
		<g>
			<ellipse cx={cx + 6} cy={baseY + 4} rx={w * 0.55} ry={9} fill="rgba(40,60,20,0.22)" />
			<path d={`M ${x0} ${ly} L ${x0} ${baseY - 10} Q ${x0} ${baseY} ${x0 + 10} ${baseY} L ${x1 - 10} ${baseY} Q ${x1} ${baseY} ${x1} ${baseY - 10} L ${x1} ${ly} Z`} fill={liquid} />
			<ellipse cx={cx} cy={ly} rx={w / 2} ry={6} fill={liquid} opacity={0.9} />
			{children}
			<path
				d={`M ${x0 - lip} ${top} Q ${x0} ${top} ${x0} ${top + lip} L ${x0} ${baseY - 10} Q ${x0} ${baseY} ${x0 + 10} ${baseY} L ${x1 - 10} ${baseY} Q ${x1} ${baseY} ${x1} ${baseY - 10} L ${x1} ${top + lip} Q ${x1} ${top} ${x1 + lip} ${top}`}
				fill="none"
				stroke="rgba(70,90,110,0.55)"
				strokeWidth={3}
				strokeLinejoin="round"
			/>
			<rect x={x0 + 8} y={top + 16} width={7} height={h - 34} rx={3.5} fill="#ffffff" opacity={0.45} />
		</g>
	);
};

/** A rounded tag (pill) with centred text. */
export const Pill = ({
	x, y, text, color, fill = '#ffffff', size = 17, padX = 12, opacity = 1, strokeWidth = 2,
}: {x: number; y: number; text: string; color: string; fill?: string; size?: number; padX?: number; opacity?: number; strokeWidth?: number}) => {
	const w = text.length * size * 0.56 + padX * 2;
	const h = size + 14;
	return (
		<g opacity={opacity}>
			<rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={h / 2} fill={fill} stroke={color} strokeWidth={strokeWidth} />
			<text x={x} y={y + size * 0.36} textAnchor="middle" fill={color} fontSize={size} fontWeight={800} letterSpacing="0.02em">
				{text}
			</text>
		</g>
	);
};

/** Deterministic pseudo-random in [0, 1) from an integer seed. */
export const hash01 = (n: number) => {
	const s = Math.sin(n * 127.1 + 311.7) * 43758.5453;
	return s - Math.floor(s);
};

/** Triangle-wave bounce: position inside [lo, hi] for a point moving at v from p0. */
export const bounce = (p0: number, v: number, t: number, lo: number, hi: number) => {
	const span = hi - lo;
	if (span <= 0) return lo;
	let u = (p0 - lo + v * t) % (2 * span);
	if (u < 0) u += 2 * span;
	return lo + (u <= span ? u : 2 * span - u);
};
