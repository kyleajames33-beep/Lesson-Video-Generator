// Shared pieces for the chem-y12-m5 lane (Equilibrium and Acid Reactions).
// Lane-local on purpose; anything here that proves generally useful could be
// promoted into diorama.tsx later.

import type {ReactNode} from 'react';
import {interpolate} from 'remotion';
import {TOK} from '../../../../styles/tokens';
import {ELEMENT_COLORS} from '../../diorama';

export const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

/** 0→1 over `len` frames starting at `start`. */
export const ramp = (frame: number, start: number, len = 12) => interpolate(frame, [start, start + len], [0, 1], clamp);
export const ease = (t: number) => t * t * (3 - 2 * t);
export const eramp = (frame: number, start: number, len = 12) => ease(ramp(frame, start, len));

export const shade = (hex: string, amt: number) => {
	const n = parseInt(hex.slice(1), 16);
	const ch = (v: number) => Math.max(0, Math.min(255, Math.round(v + amt * 255)));
	return `#${((1 << 24) | (ch((n >> 16) & 255) << 16) | (ch((n >> 8) & 255) << 8) | ch(n & 255)).toString(16).slice(1)}`;
};

// Colours beyond diorama.tsx's CPK set. Generic species A (reactant) and B
// (product) are teal and violet so they never read as a real element.
export const EXTRA_COLORS: Record<string, string> = {
	A: '#2f9e8f',
	B: '#8a5cc9',
	Ag: '#c9ccd2',
	Ca: '#8fd16a',
	F: '#b8e070',
	Fe: '#d9892e',
	I: '#8a3fb0',
	Pb: '#5d6470',
	K: '#8e5bd6',
	Mg: '#9ad08a',
	Toxin: '#c0503a',
	Heat: '#e0563a',
};
export const colorOf = (el: string) => ELEMENT_COLORS[el] ?? EXTRA_COLORS[el] ?? '#9a9a9a';

/** Glossy-ball gradients for any element or species name, as `${id}-atom-${el}`. */
export const AtomDefs = ({id, elements}: {id: string; elements: string[]}) => (
	<defs>
		<filter id={`${id}-blur`} x="-30%" y="-30%" width="160%" height="160%">
			<feGaussianBlur stdDeviation="6" />
		</filter>
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

/** One glossy ball with an optional label (charge sign, letter) centred on it. */
export const Ball = ({
	id, el, x, y, r, label, labelColor = '#ffffff', labelSize, opacity = 1, scale = 1, stroke, shadow = false,
}: {
	id: string; el: string; x: number; y: number; r: number; label?: string; labelColor?: string;
	labelSize?: number; opacity?: number; scale?: number; stroke?: string; shadow?: boolean;
}) => (
	<g opacity={opacity} transform={`translate(${x},${y}) scale(${scale})`}>
		{shadow && <ellipse cx={0} cy={r * 0.95} rx={r * 1.1} ry={r * 0.26} fill="rgba(40,36,30,0.22)" />}
		<circle r={r} fill={`url(#${id}-atom-${el})`} stroke={stroke ?? shade(colorOf(el), -0.35)} strokeWidth={stroke ? 3 : 1} />
		{label && (
			<text y={(labelSize ?? r * 0.95) * 0.36} textAnchor="middle" fill={labelColor} fontSize={labelSize ?? r * 0.95} fontWeight={800}>
				{label}
			</text>
		)}
	</g>
);

/** Rough text width for bold display type (Unicode sub/superscripts count narrow). */
export const textW = (t: string, size: number) =>
	[...t].reduce((a, ch) => a + (/[₀-₉⁰-⁹⁺⁻]/.test(ch) ? 0.55 : ch === ' ' ? 0.3 : /[il.,:;|()[\]]/.test(ch) ? 0.34 : /[MWmw]/.test(ch) ? 0.9 : 0.6), 0) * size;

/** A rounded tag (pill) with centred text. */
export const Pill = ({
	x, y, text, color, fill = '#ffffff', size = 17, padX = 12, opacity = 1, strokeWidth = 2, ink,
}: {x: number; y: number; text: string; color: string; fill?: string; size?: number; padX?: number; opacity?: number; strokeWidth?: number; ink?: string}) => {
	const w = textW(text, size) + padX * 2;
	const h = size + 14;
	return (
		<g opacity={opacity}>
			<rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={h / 2} fill={fill} stroke={color} strokeWidth={strokeWidth} />
			<text x={x} y={y + size * 0.36} textAnchor="middle" fill={ink ?? color} fontSize={size} fontWeight={800} letterSpacing="0.01em">
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
			<ellipse cx={cx + 6} cy={baseY + 4} rx={w * 0.55} ry={9} fill="rgba(40,36,30,0.2)" />
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

/** A white rounded card (the "paper" panel inside a diagram). */
export const Card = ({x, y, w, h, stroke = TOK.rule, strokeWidth = 2, opacity = 1, children}: {x: number; y: number; w: number; h: number; stroke?: string; strokeWidth?: number; opacity?: number; children?: ReactNode}) => (
	<g opacity={opacity}>
		<rect x={x} y={y} width={w} height={h} rx={14} fill="#ffffff" stroke={stroke} strokeWidth={strokeWidth} />
		{children}
	</g>
);

/** Caption that swaps with each beat: returns the active entry's text and its fade-in. */
export const beatCaption = (frame: number, caps: {at: number; text: string}[]) => {
	let cur = -1;
	caps.forEach((c, i) => {
		if (frame >= c.at) cur = i;
	});
	if (cur < 0) return {text: '', opacity: 0, index: -1};
	return {text: caps[cur].text, opacity: ramp(frame, caps[cur].at, 12), index: cur};
};

/** Format a number in scientific notation with Unicode superscripts: 1.8 × 10⁻¹⁰. */
const SUP: Record<string, string> = {'-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'};
export const sup = (n: number | string) => String(n).split('').map((c) => SUP[c] ?? c).join('');
export const sci = (v: number, sig = 2) => {
	if (v === 0) return '0';
	const e = Math.floor(Math.log10(Math.abs(v)));
	let m = v / 10 ** e;
	let ee = e;
	if (Number(m.toFixed(sig - 1)) >= 10) {
		m /= 10;
		ee += 1;
	}
	return `${m.toFixed(sig - 1)} × 10${sup(ee)}`;
};
/** Plain minus sign for display (U+2212). */
export const fmt = (v: number, dp: number) => (v < 0 ? '−' : '') + Math.abs(v).toFixed(dp);

/**
 * Evenly scattered slots on a plinth top (a staggered grid clipped to the
 * ellipse, centre-first), sorted back-to-front for drawing. Looks less like
 * columns than plinthSlots for 8–20 particles.
 */
export const scatterSlots = (cx: number, cy: number, rx: number, n: number, spacing = 30): {x: number; y: number}[] => {
	const ry = rx * 0.34;
	const dy = spacing * 0.42;
	const pts: {x: number; y: number; d: number}[] = [];
	for (let row = -6; row <= 6; row++) {
		for (let col = -8; col <= 8; col++) {
			const x = col * spacing + (row % 2 ? spacing / 2 : 0);
			const y = row * dy;
			const e = (x / (rx * 0.8)) ** 2 + (y / (ry * 0.78)) ** 2;
			if (e <= 1) pts.push({x: cx + x, y: cy + y - rx * 0.05, d: e + hash01(row * 31 + col) * 0.05});
		}
	}
	pts.sort((a, b) => a.d - b.d);
	return pts.slice(0, n).sort((a, b) => a.y - b.y || a.x - b.x).map(({x, y}) => ({x, y}));
};
