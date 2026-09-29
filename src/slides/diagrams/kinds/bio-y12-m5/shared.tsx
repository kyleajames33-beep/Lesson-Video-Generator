// Shared pieces for the bio-y12-m5 lane (Heredity). Lane-local on purpose
// (docs/diorama-system.md). `Chromosome`, `CellBody`, `BaseTile` and
// `GlossDefs` are general enough to be promoted into diorama.tsx if other
// biology lanes want them.
//
// Colour conventions used across the lane's kinds:
//   • the subject accent (biology blue) = "paternal" / the main thing;
//   • CORAL = "maternal" / the second thing;
//   • amber (TOK.amber) = the single most important thing on screen only.
// Bases are coloured by pair type (A–T/U one tone, C–G another), never four
// colours, so a strand stays inside the 3-colours-of-meaning rule.

import type {ReactNode} from 'react';
import {interpolate, spring} from 'remotion';
import {TOK} from '../../../../styles/tokens';

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

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

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

/** Deterministic pseudo-random in [0, 1) from an integer seed. */
export const hash01 = (n: number) => {
	const s = Math.sin(n * 127.1 + 311.7) * 43758.5453;
	return s - Math.floor(s);
};

export const CORAL = '#d9644a';
export const GREEN = '#4f9d57';
export const PURPLE = '#8e5bd6';
export const SLATE = '#7d8794';
export const CYTO = '#f4efe6';

/** Glossy radial fills for named colours: fill={`url(#${id}-g-${name})`}. */
export const GlossDefs = ({id, colors}: {id: string; colors: Record<string, string>}) => (
	<defs>
		{Object.entries(colors).map(([name, base]) => (
			<g key={name}>
				<radialGradient id={`${id}-g-${name}`} cx="38%" cy="32%" r="70%" fx="32%" fy="26%">
					<stop offset="0%" stopColor="#ffffff" />
					<stop offset="22%" stopColor={shade(base, 0.08)} />
					<stop offset="75%" stopColor={base} />
					<stop offset="100%" stopColor={shade(base, -0.28)} />
				</radialGradient>
				{/* across-the-rod shading for chromosomes / tubes drawn along local y */}
				<linearGradient id={`${id}-r-${name}`} x1="0" x2="1" y1="0" y2="0">
					<stop offset="0%" stopColor={shade(base, -0.12)} />
					<stop offset="30%" stopColor={shade(base, 0.22)} />
					<stop offset="55%" stopColor={base} />
					<stop offset="100%" stopColor={shade(base, -0.3)} />
				</linearGradient>
			</g>
		))}
		<radialGradient id={`${id}-cyto`} cx="40%" cy="34%" r="75%">
			<stop offset="0%" stopColor="#ffffff" />
			<stop offset="60%" stopColor={CYTO} />
			<stop offset="100%" stopColor="#e3dccf" />
		</radialGradient>
		<radialGradient id={`${id}-nuc`} cx="40%" cy="34%" r="75%">
			<stop offset="0%" stopColor="#ffffff" stopOpacity={0.9} />
			<stop offset="100%" stopColor="#dfe7f0" stopOpacity={0.9} />
		</radialGradient>
	</defs>
);

/** One glossy ball (GlossDefs colour `name`), optional centred label. */
export const Ball = ({
	id, name, x, y, r, label, labelColor = '#ffffff', labelSize, opacity = 1, scale = 1, stroke,
}: {
	id: string; name: string; x: number; y: number; r: number; label?: string; labelColor?: string; labelSize?: number;
	opacity?: number; scale?: number; stroke?: string;
}) => (
	<g opacity={opacity} transform={`translate(${x},${y}) scale(${scale})`}>
		<circle r={r} fill={`url(#${id}-g-${name})`} stroke={stroke ?? 'rgba(0,0,0,0.28)'} strokeWidth={stroke ? 3 : 1} />
		{label && (
			<text y={(labelSize ?? r * 0.9) * 0.36} textAnchor="middle" fill={labelColor} fontSize={labelSize ?? r * 0.9} fontWeight={800}>
				{label}
			</text>
		)}
	</g>
);

/** Rough rendered width of bold Inter Tight text. */
export const textWidth = (text: string, size: number) => {
	let w = 0;
	for (const ch of text) {
		if (/[₀-₉⁰-⁹⁺⁻′]/.test(ch)) w += 0.42;
		else if (/[ il.,:;|'!()[\]]/.test(ch)) w += 0.3;
		else if (/[A-Z]/.test(ch)) w += 0.66;
		else if (/[mwMW]/.test(ch)) w += 0.8;
		else if (/[→⇌×−+=]/.test(ch)) w += 0.62;
		else w += 0.55;
	}
	return w * size;
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

/** Straight arrow with a filled head from (x1,y1) to (x2,y2); `t` draws it in. */
export const Arrow = ({x1, y1, x2, y2, color, width = 3, t = 1, head = 10, dash}: {x1: number; y1: number; x2: number; y2: number; color: string; width?: number; t?: number; head?: number; dash?: string}) => {
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

/** A flat stone ledge (the plinth's rectangular cousin) under a row of items. */
export const Ledge = ({x, y, w, opacity = 1}: {x: number; y: number; w: number; opacity?: number}) => (
	<g opacity={opacity}>
		<ellipse cx={x + w / 2 + 6} cy={y + 22} rx={w * 0.5} ry={7} fill="rgba(40,36,30,0.16)" />
		<rect x={x} y={y} width={w} height={14} rx={6} fill="#cfccc5" />
		<rect x={x} y={y + 9} width={w} height={9} rx={4} fill="#8f8b83" />
		<rect x={x + 4} y={y + 2} width={w - 8} height={3} rx={1.5} fill="#ffffff" opacity={0.45} />
	</g>
);

// ── Cells and chromosomes ──────────────────────────────────────────────────

/**
 * A cell body. `split` 0→1 pinches it into two cells side by side (along x):
 * both halves are drawn stroke-first then fill-first, so the union outline has
 * no seam until the halves actually part.
 */
export const CellBody = ({
	id, cx, cy, rx, ry, split = 0, gap = 0, stroke = '#b9ab93', opacity = 1, fill,
}: {id: string; cx: number; cy: number; rx: number; ry: number; split?: number; gap?: number; stroke?: string; opacity?: number; fill?: string}) => {
	const f = fill ?? `url(#${id}-cyto)`;
	if (split <= 0) {
		return (
			<g opacity={opacity}>
				<ellipse cx={cx + 5} cy={cy + ry * 0.92} rx={rx * 0.9} ry={ry * 0.16} fill="rgba(40,36,30,0.12)" />
				<ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={f} stroke={stroke} strokeWidth={4} />
			</g>
		);
	}
	// Two daughters: each shrinks toward half the width and moves apart.
	const drx = lerp(rx, rx * 0.56, split);
	const dx = lerp(rx - drx, rx * 0.5, split) + gap;
	const dry = lerp(ry, ry * 0.86, split);
	return (
		<g opacity={opacity}>
			{[-1, 1].map((s) => <ellipse key={`sh${s}`} cx={cx + s * dx + 5} cy={cy + dry * 0.92} rx={drx * 0.9} ry={dry * 0.16} fill="rgba(40,36,30,0.12)" />)}
			{[-1, 1].map((s) => <ellipse key={`st${s}`} cx={cx + s * dx} cy={cy} rx={drx} ry={dry} fill="none" stroke={stroke} strokeWidth={8} />)}
			{[-1, 1].map((s) => <ellipse key={`f${s}`} cx={cx + s * dx} cy={cy} rx={drx - 2} ry={dry - 2} fill={f} />)}
			{split > 0.97 && [-1, 1].map((s) => <ellipse key={`e${s}`} cx={cx + s * dx} cy={cy} rx={drx} ry={dry} fill="none" stroke={stroke} strokeWidth={4} />)}
		</g>
	);
};

export type Seg = {from: number; to: number; color: string};

/**
 * A chromosome drawn along local y, centred at (x, y), rotated `angle` deg.
 * `chromatids` 2 = replicated (two sister chromatids joined at the centromere,
 * the classic X); 1 = unreplicated. `color` is a GlossDefs name; `segs`
 * repaint parts of a chromatid (0 = top end … 1 = bottom end) for crossing
 * over. `sisterGap` pulls the two chromatids apart (anaphase).
 */
export const Chromosome = ({
	id, x, y, len, w = 12, color, chromatids = 2, angle = 0, splay = 7, segs, segsB, opacity = 1, scale = 1, glow = 0, cen = 0.42, label,
}: {
	id: string; x: number; y: number; len: number; w?: number; color: string; chromatids?: 1 | 2; angle?: number; splay?: number;
	segs?: Seg[]; segsB?: Seg[]; opacity?: number; scale?: number; glow?: number; cen?: number; label?: string;
}) => {
	const top = -len / 2, cy = top + len * cen;
	const arm = (dx: number, s: Seg[] | undefined, k: number) => {
		// one chromatid: two limbs bowing out from the centromere by `dx`
		const bow = chromatids === 2 ? dx : 0;
		const d = `M ${-w / 2} ${top + w / 2} Q ${bow - w / 2} ${cy} ${-w / 2} ${top + len - w / 2} A ${w / 2} ${w / 2} 0 0 0 ${w / 2} ${top + len - w / 2} Q ${bow + w / 2} ${cy} ${w / 2} ${top + w / 2} A ${w / 2} ${w / 2} 0 0 0 ${-w / 2} ${top + w / 2} Z`;
		const shift = chromatids === 2 ? -bow : 0;
		return (
			<g key={k} transform={`translate(${shift},0)`}>
				<clipPath id={`${id}-cc-${k}-${Math.round(x)}-${Math.round(y)}`}>
					<path d={d} />
				</clipPath>
				<path d={d} fill={`url(#${id}-r-${color})`} stroke="rgba(0,0,0,0.3)" strokeWidth={1} />
				{s?.map((sg, i) => (
					<rect
						key={i}
						x={-w - Math.abs(bow)}
						y={top + len * sg.from}
						width={w * 2 + Math.abs(bow) * 2}
						height={len * (sg.to - sg.from)}
						fill={`url(#${id}-r-${sg.color})`}
						clipPath={`url(#${id}-cc-${k}-${Math.round(x)}-${Math.round(y)})`}
					/>
				))}
			</g>
		);
	};
	return (
		<g opacity={opacity} transform={`translate(${x},${y}) rotate(${angle}) scale(${scale})`}>
			{glow > 0 && <ellipse cx={0} cy={0} rx={w * 2.4} ry={len * 0.62} fill={TOK.amber} opacity={0.3 * glow} />}
			{chromatids === 2 ? (
				<>
					{arm(-splay, segs, 0)}
					{arm(splay, segsB ?? segs, 1)}
					<circle cx={0} cy={cy} r={w * 0.42} fill="rgba(40,36,30,0.55)" />
				</>
			) : (
				<>
					{arm(0, segs, 0)}
					<circle cx={0} cy={cy} r={w * 0.36} fill="rgba(40,36,30,0.5)" />
				</>
			)}
			{label && (
				<text x={0} y={top + len + 22} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800} transform={`rotate(${-angle} 0 ${top + len + 16})`}>
					{label}
				</text>
			)}
		</g>
	);
};

// ── Bases ──────────────────────────────────────────────────────────────────

export const PAIR_DNA: Record<string, string> = {A: 'T', T: 'A', C: 'G', G: 'C'};
export const PAIR_RNA: Record<string, string> = {A: 'U', T: 'A', C: 'G', G: 'C', U: 'A'};
/** GlossDefs colour name for a base: A/T/U share one tone, C/G another. */
export const baseTone = (b: string) => (b === 'C' || b === 'G' ? 'cg' : 'at');
export const BASE_TONES = (accent: string) => ({at: accent, cg: PURPLE});

/** A glossy base tile with its letter. */
export const BaseTile = ({
	id, x, y, b, size = 34, opacity = 1, scale = 1, highlight = 0, tone,
}: {id: string; x: number; y: number; b: string; size?: number; opacity?: number; scale?: number; highlight?: number; tone?: string}) => (
	<g opacity={opacity} transform={`translate(${x},${y}) scale(${scale})`}>
		{highlight > 0 && <rect x={-size / 2 - 7} y={-size / 2 - 7} width={size + 14} height={size + 14} rx={11} fill="none" stroke={TOK.amber} strokeWidth={3 + highlight * 2} />}
		<rect x={-size / 2} y={-size / 2} width={size} height={size} rx={8} fill={`url(#${id}-g-${tone ?? baseTone(b)})`} stroke="rgba(0,0,0,0.25)" />
		<text y={size * 0.2} textAnchor="middle" fill="#ffffff" fontSize={size * 0.56} fontWeight={800}>{b}</text>
	</g>
);

/** Caption line along the foot of a diagram. */
export const Caption = ({x, y, text, opacity, color = TOK.inkDim, size = 17}: {x: number; y: number; text: string; opacity: number; color?: string; size?: number}) => (
	<text x={x} y={y} textAnchor="middle" fill={color} fontSize={size} fontWeight={800} opacity={opacity}>{text}</text>
);

export const Group = ({children, opacity = 1}: {children: ReactNode; opacity?: number}) => <g opacity={opacity}>{children}</g>;
