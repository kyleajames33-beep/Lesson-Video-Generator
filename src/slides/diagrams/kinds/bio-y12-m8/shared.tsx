// Shared pieces for the bio-y12-m8 lane (Non-infectious Disease and Disorders).
// Lane-local on purpose (docs/diorama-system.md). `Pill`, `Arrow`, `Gloss`,
// `drawPath` and `Caption` are generic and could be promoted into diorama.tsx.

import {interpolate, spring} from 'remotion';
import {TOK} from '../../../../styles/tokens';

export const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

/** 0→1 over `len` frames starting at `d`. */
export const fadeAt = (frame: number, d: number, len = 12) => interpolate(frame, [d, d + len], [0, 1], clamp);

/** Smooth 0→1 between frames a and b (ease in-out). */
export const ease = (frame: number, a: number, b: number) => {
	const t = interpolate(frame, [a, b], [0, 1], clamp);
	return t * t * (3 - 2 * t);
};

/** Springy 0→1 (slight overshoot) starting at `d`. */
export const popAt = (frame: number, fps: number, d: number) =>
	Math.max(0, spring({frame: frame - d, fps, config: {damping: 12, stiffness: 180, mass: 0.7}}));

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

/** Deterministic 0..1 hash (no Math.random). */
export const hash01 = (n: number) => {
	const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
	return x - Math.floor(x);
};

// Palette of meaning shared across the lane's kinds (at most 3 per diagram).
export const COL = {
	red: '#d9483b',
	pink: '#e87a8a',
	green: '#3f9a52',
	blue: '#3f6fd8',
	violet: '#8e5bd6',
	teal: '#2a9d8f',
	bone: '#efe6d2',
	flesh: '#f0c9b0',
	nerve: '#e8c547',
	slate: '#6b7a8f',
	grey: '#9aa0a6',
} as const;

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

/** Rough rendered width of bold Inter Tight text. */
export const textWidth = (text: string, size: number) => {
	let w = 0;
	for (const ch of text) {
		if (/[₀-₉⁰-⁹⁺⁻]/.test(ch)) w += 0.42;
		else if (/[ il.,:;|'!()[\]]/.test(ch)) w += 0.3;
		else if (/[A-Z]/.test(ch)) w += 0.66;
		else if (/[mwMW]/.test(ch)) w += 0.8;
		else if (/[→⇌×−+=≈%]/.test(ch)) w += 0.62;
		else w += 0.55;
	}
	return w * size;
};

/** A rounded tag (pill) with centred text. */
export const Pill = ({
	x, y, text, color, fill = '#ffffff', size = 16, padX = 11, opacity = 1, strokeWidth = 2, textColor, anchor = 'middle',
}: {
	x: number; y: number; text: string; color: string; fill?: string; size?: number; padX?: number; opacity?: number;
	strokeWidth?: number; textColor?: string; anchor?: 'start' | 'middle' | 'end';
}) => {
	const w = textWidth(text, size) + padX * 2;
	const h = size + 13;
	const cx = anchor === 'middle' ? x : anchor === 'start' ? x + w / 2 : x - w / 2;
	return (
		<g opacity={opacity}>
			<rect x={cx - w / 2} y={y - h / 2} width={w} height={h} rx={h / 2} fill={fill} stroke={color} strokeWidth={strokeWidth} />
			<text x={cx} y={y + size * 0.36} textAnchor="middle" fill={textColor ?? color} fontSize={size} fontWeight={800} letterSpacing="0.01em">
				{text}
			</text>
		</g>
	);
};

/** Straight arrow with a filled head from (x1,y1) to (x2,y2); `t` draws it in. */
export const Arrow = ({
	x1, y1, x2, y2, color, width = 3, t = 1, head = 10, dash,
}: {x1: number; y1: number; x2: number; y2: number; color: string; width?: number; t?: number; head?: number; dash?: string}) => {
	if (t <= 0) return null;
	const ex = x1 + (x2 - x1) * t, ey = y1 + (y2 - y1) * t;
	const a = Math.atan2(y2 - y1, x2 - x1);
	const hx = ex - Math.cos(a) * head, hy = ey - Math.sin(a) * head;
	return (
		<g>
			<line x1={x1} y1={y1} x2={hx} y2={hy} stroke={color} strokeWidth={width} strokeLinecap="round" strokeDasharray={dash} />
			<path d={`M ${ex} ${ey} L ${hx + Math.sin(a) * head * 0.6} ${hy - Math.cos(a) * head * 0.6} L ${hx - Math.sin(a) * head * 0.6} ${hy + Math.cos(a) * head * 0.6} Z`} fill={color} />
		</g>
	);
};

/** Polyline → path "d". */
export const polyD = (pts: {x: number; y: number}[]) => pts.map((p, i) => `${i ? 'L' : 'M'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');

/** Props that make an SVG path draw itself in (0 → 1). */
export const drawPath = (t: number) => ({pathLength: 1, strokeDasharray: '1 1', strokeDashoffset: 1 - Math.max(0, Math.min(1, t))});

/** Point a fraction `t` along a polyline. */
export const alongPoly = (pts: {x: number; y: number}[], t: number) => {
	const seg: number[] = [];
	let total = 0;
	for (let i = 1; i < pts.length; i++) {
		const d = Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
		seg.push(d);
		total += d;
	}
	let want = Math.max(0, Math.min(1, t)) * total;
	for (let i = 0; i < seg.length; i++) {
		if (want <= seg[i] || i === seg.length - 1) {
			const u = seg[i] ? Math.min(1, want / seg[i]) : 0;
			return {x: pts[i].x + (pts[i + 1].x - pts[i].x) * u, y: pts[i].y + (pts[i + 1].y - pts[i].y) * u};
		}
		want -= seg[i];
	}
	return pts[pts.length - 1];
};

/** Beat notes along the bottom of a diagram: each fades in at `at`. */
export type Note = {text: string; at: number; amber?: boolean};

export const NoteLine = ({note, x, y, frame, size = 19}: {note: Note; x: number; y: number; frame: number; size?: number}) => (
	<text
		x={x}
		y={y}
		textAnchor="middle"
		fill={note.amber ? TOK.amberInk : TOK.inkDim}
		fontSize={size}
		fontWeight={800}
		opacity={fadeAt(frame, note.at, 14)}
	>
		{note.text}
	</text>
);
