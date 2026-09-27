// Shared pieces for the chem-y12-m6 lane (Acid/Base Reactions). Lane-local on
// purpose (docs/diorama-system.md): `Species`, `Proton`, `solvePH` and
// `phColor` could be promoted into diorama.tsx if other lanes want them.

import type {ReactNode} from 'react';
import {interpolate, spring} from 'remotion';
import {TOK} from '../../../../styles/tokens';
import {ELEMENT_COLORS} from '../../diorama';

export const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

/** 0→1 over `len` frames starting at `d`. */
export const fadeAt = (frame: number, d: number, len = 12) => interpolate(frame, [d, d + len], [0, 1], clamp);

/** Springy 0→1 (slight overshoot) starting at `d`. */
export const popAt = (frame: number, fps: number, d: number) =>
	Math.max(0, spring({frame: frame - d, fps, config: {damping: 12, stiffness: 180, mass: 0.7}}));

/** Smooth 0→1 between frames a and b (ease in-out). */
export const ease = (frame: number, a: number, b: number) => {
	const t = interpolate(frame, [a, b], [0, 1], clamp);
	return t * t * (3 - 2 * t);
};

export const shade = (hex: string, amt: number) => {
	const n = parseInt(hex.slice(1), 16);
	const ch = (v: number) => Math.max(0, Math.min(255, Math.round(v + amt * 255)));
	return `#${((1 << 24) | (ch((n >> 16) & 255) << 16) | (ch((n >> 8) & 255) << 8) | ch(n & 255)).toString(16).slice(1)}`;
};

export const mix = (a: string, b: string, t: number) => {
	const pa = parseInt(a.slice(1), 16), pb = parseInt(b.slice(1), 16);
	const c = (s: number) => Math.round(((pa >> s) & 255) * (1 - t) + ((pb >> s) & 255) * t);
	return `#${((1 << 24) | (c(16) << 16) | (c(8) << 8) | c(0)).toString(16).slice(1)}`;
};

// Species colours. Cores are CPK where a real element names them (O red, N
// blue, C dark grey, S yellow, Cl green, P orange); ions and "the rest of the
// acid" (A⁻) get a neutral slate so they never read as an element.
export const CORE: Record<string, string> = {
	...ELEMENT_COLORS,
	P: '#e08a2c',
	A: '#6b7a8f',
	Ca: '#9aa3a8',
	Mg: '#b9c2bd',
	Al: '#c4c9d0',
	K: '#8e5bd6',
	Ba: '#7fb069',
};
export const coreColor = (el: string) => CORE[el] ?? '#8a8f99';
export const PROTON = '#f7f5ee';
export const BLUE = '#3f6fd8';

/** Glossy radial fills for named colours: fill={`url(#${id}-g-${name})`}. */
export const GlossDefs = ({id, colors}: {id: string; colors: Record<string, string>}) => (
	<defs>
		{Object.entries(colors).map(([name, base]) => (
			<radialGradient key={name} id={`${id}-g-${name}`} cx="38%" cy="32%" r="70%" fx="32%" fy="26%">
				<stop offset="0%" stopColor="#ffffff" />
				<stop offset="22%" stopColor={shade(base, 0.08)} />
				<stop offset="75%" stopColor={base} />
				<stop offset="100%" stopColor={shade(base, -0.28)} />
			</radialGradient>
		))}
	</defs>
);

/** One glossy ball (GlossDefs colour `name`), optional centred label. */
export const Ball = ({
	id, name, x, y, r, label, labelColor = '#ffffff', labelSize, opacity = 1, scale = 1, stroke, strokeWidth,
}: {
	id: string; name: string; x: number; y: number; r: number; label?: string; labelColor?: string; labelSize?: number;
	opacity?: number; scale?: number; stroke?: string; strokeWidth?: number;
}) => (
	<g opacity={opacity} transform={`translate(${x},${y}) scale(${scale})`}>
		<circle r={r} fill={`url(#${id}-g-${name})`} stroke={stroke ?? 'rgba(0,0,0,0.28)'} strokeWidth={strokeWidth ?? 1} />
		{label && (
			<text y={(labelSize ?? r * 0.9) * 0.36} textAnchor="middle" fill={labelColor} fontSize={labelSize ?? r * 0.9} fontWeight={800}>
				{label}
			</text>
		)}
	</g>
);

/** A free proton: small pearly ball with a "+" (GlossDefs must include `proton`). */
export const Proton = ({id, x, y, r = 13, opacity = 1, glow = 0}: {id: string; x: number; y: number; r?: number; opacity?: number; glow?: number}) => (
	<g opacity={opacity}>
		{glow > 0 && <circle cx={x} cy={y} r={r * 1.9} fill={TOK.amber} opacity={0.28 * glow} />}
		<circle cx={x} cy={y} r={r} fill={`url(#${id}-g-proton)`} stroke="rgba(0,0,0,0.3)" strokeWidth={1} />
		<text x={x} y={y + r * 0.42} textAnchor="middle" fill="#333" fontSize={r * 1.2} fontWeight={800}>+</text>
	</g>
);

/** Satellite H positions around a core of radius R (fan across the top). */
export const hSlots = (n: number, R: number, r: number) => {
	const d = R + r * 0.55;
	const out: {dx: number; dy: number}[] = [];
	for (let i = 0; i < n; i++) {
		const a = n === 1 ? -90 : -150 + (120 * i) / (n - 1);
		const rad = (a * Math.PI) / 180;
		out.push({dx: Math.cos(rad) * d, dy: Math.sin(rad) * d});
	}
	return out;
};

/** A rounded tag (pill) with centred text. */
export const Pill = ({
	x, y, text, color, fill = '#ffffff', size = 16, padX = 11, opacity = 1, strokeWidth = 2, textColor,
}: {x: number; y: number; text: string; color: string; fill?: string; size?: number; padX?: number; opacity?: number; strokeWidth?: number; textColor?: string}) => {
	const w = textWidth(text, size) + padX * 2;
	const h = size + 13;
	return (
		<g opacity={opacity}>
			<rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={h / 2} fill={fill} stroke={color} strokeWidth={strokeWidth} />
			<text x={x} y={y + size * 0.36} textAnchor="middle" fill={textColor ?? color} fontSize={size} fontWeight={800} letterSpacing="0.02em">
				{text}
			</text>
		</g>
	);
};

/** Rough rendered width of bold Inter Tight text (subscripts/superscripts count narrow). */
export const textWidth = (text: string, size: number) => {
	let w = 0;
	for (const ch of text) {
		if (/[₀-₉⁰-⁹⁺⁻]/.test(ch)) w += 0.42;
		else if (/[ il.,:;|'!()\[\]]/.test(ch)) w += 0.3;
		else if (/[A-Z]/.test(ch)) w += 0.66;
		else if (/[mwMW]/.test(ch)) w += 0.8;
		else if (/[→⇌×−+=]/.test(ch)) w += 0.62;
		else w += 0.55;
	}
	return w * size;
};

/** Straight arrow with a filled head from (x1,y1) to (x2,y2); `t` draws it in. */
export const Arrow = ({x1, y1, x2, y2, color, width = 3, t = 1, head = 10}: {x1: number; y1: number; x2: number; y2: number; color: string; width?: number; t?: number; head?: number}) => {
	if (t <= 0) return null;
	const ex = x1 + (x2 - x1) * t, ey = y1 + (y2 - y1) * t;
	const a = Math.atan2(y2 - y1, x2 - x1);
	const hx = ex - Math.cos(a) * head, hy = ey - Math.sin(a) * head;
	return (
		<g>
			<line x1={x1} y1={y1} x2={hx} y2={hy} stroke={color} strokeWidth={width} strokeLinecap="round" />
			<path d={`M ${ex} ${ey} L ${hx + Math.sin(a) * head * 0.6} ${hy - Math.cos(a) * head * 0.6} L ${hx - Math.sin(a) * head * 0.6} ${hy + Math.cos(a) * head * 0.6} Z`} fill={color} />
		</g>
	);
};

// ── Numbers ────────────────────────────────────────────────────────────────

const SUP: Record<string, string> = {'-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'};
export const sup = (s: string) => s.split('').map((c) => SUP[c] ?? c).join('');

/** 0.00134 → "1.3 × 10⁻³" (sig figs `sf`). Numbers in [0.01, 1000) print plainly. */
export const sci = (v: number, sf = 2, plainRange = true) => {
	if (v === 0) return '0';
	const e = Math.floor(Math.log10(Math.abs(v)));
	if (plainRange && e >= -2 && e < 3) return v.toPrecision(sf);
	const m = v / 10 ** e;
	return `${m.toFixed(sf - 1)} × 10${sup(String(e))}`;
};

export const KW = 1.0e-14;

/**
 * Exact [H⁺] of an aqueous mixture by charge balance (bisection on log[H⁺]):
 * [H⁺] + [M⁺ from strong base] + Σ[BH⁺] = [OH⁻] + [X⁻ from strong acid] + Σ[A⁻].
 * Concentrations in mol L⁻¹, already corrected for total volume.
 */
export const solvePH = ({
	strongAcid = 0, strongBase = 0, weakAcids = [], weakBases = [],
}: {strongAcid?: number; strongBase?: number; weakAcids?: {c: number; Ka: number}[]; weakBases?: {c: number; Kb: number}[]}) => {
	const f = (h: number) => {
		const oh = KW / h;
		const aMinus = weakAcids.reduce((s, a) => s + (a.c * a.Ka) / (a.Ka + h), 0);
		const bhPlus = weakBases.reduce((s, b) => s + (b.c * b.Kb * h) / (b.Kb * h + KW), 0);
		return h + strongBase + bhPlus - oh - strongAcid - aMinus;
	};
	let lo = -15.5, hi = 1.5; // log10[H⁺]
	for (let i = 0; i < 90; i++) {
		const mid = (lo + hi) / 2;
		if (f(10 ** mid) > 0) hi = mid; else lo = mid;
	}
	return -(lo + hi) / 2;
};

/** Universal-indicator-ish colour for a pH (red → orange → yellow → green → blue → purple). */
export const phColor = (pH: number) => {
	const stops: [number, string][] = [
		[0, '#d7263d'], [2, '#ee5a24'], [4, '#f5a623'], [6, '#e8d23a'], [7, '#6cbf4a'], [8, '#2fa37a'],
		[10, '#2d7fd1'], [12, '#4b4fb8'], [14, '#6a3d9a'],
	];
	const p = Math.max(0, Math.min(14, pH));
	for (let i = 1; i < stops.length; i++) {
		if (p <= stops[i][0]) {
			const [a, ca] = stops[i - 1], [b, cb] = stops[i];
			return mix(ca, cb, (p - a) / (b - a));
		}
	}
	return stops[stops.length - 1][1];
};

/** A labelled glass beaker standing at (cx, baseY); children draw inside the liquid. */
export const Beaker = ({
	cx, baseY, w, h, level = 0.72, liquid = 'rgba(120,190,235,0.28)', children,
}: {cx: number; baseY: number; w: number; h: number; level?: number; liquid?: string; children?: ReactNode}) => {
	const x0 = cx - w / 2, x1 = cx + w / 2, top = baseY - h;
	const lip = 8;
	const ly = baseY - h * level;
	return (
		<g>
			<ellipse cx={cx + 6} cy={baseY + 4} rx={w * 0.55} ry={9} fill="rgba(40,36,30,0.18)" />
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

/** Deterministic pseudo-random in [0, 1) from an integer seed. */
export const hash01 = (n: number) => {
	const s = Math.sin(n * 127.1 + 311.7) * 43758.5453;
	return s - Math.floor(s);
};
