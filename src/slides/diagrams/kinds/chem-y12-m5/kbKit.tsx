// Private helpers for helper-lane "kb" (Keq algebra & acids) in chem-y12-m5.
// Rich one-line maths text (tspans with subscripts and raised powers), a
// stacked fraction, a strike-out line and a species colour map. Widths are
// estimated with shared.textW, so strikes and arrows line up with the text.

import type {ReactNode} from 'react';
import {TOK} from '../../../../styles/tokens';
import {shade} from './shared';

/** Width estimate for bold display type (tuned for Inter Tight 800). */
export const kbW = (t: string, size: number) =>
	[...t].reduce((a, ch) => {
		let w = 0.58;
		if (/[₀-₉⁰-⁹⁺⁻₊₋]/.test(ch)) w = 0.44;
		else if (ch === ' ') w = 0.27;
		else if (/[MW]/.test(ch)) w = 0.9;
		else if (/[I]/.test(ch)) w = 0.3;
		else if (/[A-Z]/.test(ch)) w = 0.7;
		else if (/[mw]/.test(ch)) w = 0.86;
		else if (/[ijl]/.test(ch)) w = 0.27;
		else if (/[frt]/.test(ch)) w = 0.38;
		else if (/[a-z]/.test(ch)) w = 0.57;
		else if (/[0-9]/.test(ch)) w = ch === '1' ? 0.45 : 0.6;
		else if (/[()[\]]/.test(ch)) w = 0.34;
		else if (/[.,:;]/.test(ch)) w = 0.28;
		else if (/[×+=−<>±÷]/.test(ch)) w = 0.62;
		else if (/[⇌→⟶≈]/.test(ch)) w = 1.0;
		else if (ch === '√' || ch === '∛') w = 0.62;
		return a + w;
	}, 0) * size;
const textW = kbW;

export const RED = '#d8453b';
export const VIOLET = '#8a5cc9';

/** One run of text. `sub` = subscript (e.g. "eq" in Keq), `pow` = raised power digit. */
export type Part = {t: string; c?: string; sub?: boolean; pow?: boolean; o?: number; wt?: number};

const SUB_K = 0.62;
const POW_K = 0.6;
export const partW = (p: Part, size: number) => textW(p.t, p.sub ? size * SUB_K : p.pow ? size * POW_K : size) + (p.pow ? size * 0.04 : 0);
export const partsW = (parts: Part[], size: number) => parts.reduce((a, p) => a + partW(p, size), 0);
/** Left offset of part i (and its width) inside a run. */
export const partBox = (parts: Part[], size: number, i: number) => {
	let x = 0;
	for (let k = 0; k < i; k++) x += partW(parts[k], size);
	return {x, w: partW(parts[i], size)};
};

/** Parse a compact string: `_{eq}` = subscript, `^{2}` = raised power. */
export const P = (s: string, c?: string): Part[] => {
	const out: Part[] = [];
	const re = /(_\{[^}]*\}|\^\{[^}]*\})/g;
	let last = 0;
	let m: RegExpExecArray | null;
	while ((m = re.exec(s))) {
		if (m.index > last) out.push({t: s.slice(last, m.index), c});
		const body = m[0].slice(2, -1);
		out.push(m[0][0] === '_' ? {t: body, sub: true, c} : {t: body, pow: true, c});
		last = m.index + m[0].length;
	}
	if (last < s.length) out.push({t: s.slice(last), c});
	return out;
};

/** A run of rich text. Anchor 'middle' centres on x; returns nothing fancy, just SVG. */
export const Rich = ({
	x, y, size, parts, anchor = 'middle', fill = TOK.ink, opacity = 1, weight = 800,
}: {x: number; y: number; size: number; parts: Part[]; anchor?: 'start' | 'middle' | 'end'; fill?: string; opacity?: number; weight?: number}) => {
	const W = partsW(parts, size);
	const x0 = anchor === 'middle' ? x - W / 2 : anchor === 'end' ? x - W : x;
	let cx = x0;
	return (
		<g opacity={opacity}>
			{parts.map((p, i) => {
				const w = partW(p, size);
				const px = cx;
				cx += w;
				const fs = p.sub ? size * SUB_K : p.pow ? size * POW_K : size;
				const dy = p.sub ? size * 0.24 : p.pow ? -size * 0.42 : 0;
				return (
					<text key={i} x={px} y={y + dy} fill={p.c ?? fill} fontSize={fs} fontWeight={p.wt ?? weight} opacity={p.o ?? 1} style={{whiteSpace: 'pre'}}>
						{p.t}
					</text>
				);
			})}
		</g>
	);
};

/** Stacked fraction centred on x with its bar at y. */
export const fracW = (num: Part[], den: Part[], size: number) => Math.max(partsW(num, size), partsW(den, size)) + size * 0.5;
export const Frac = ({
	x, y, size, num, den, barColor = TOK.ink, opacity = 1, numOpacity = 1, denOpacity = 1,
}: {x: number; y: number; size: number; num: Part[]; den: Part[]; barColor?: string; opacity?: number; numOpacity?: number; denOpacity?: number}) => {
	const w = fracW(num, den, size);
	return (
		<g opacity={opacity}>
			<Rich x={x} y={y - size * 0.36} size={size} parts={num} opacity={numOpacity} />
			<line x1={x - w / 2} y1={y} x2={x + w / 2} y2={y} stroke={barColor} strokeWidth={Math.max(2.5, size * 0.09)} strokeLinecap="round" />
			<Rich x={x} y={y + size * 1.02} size={size} parts={den} opacity={denOpacity} />
		</g>
	);
};

/** A red strike-out line that draws itself (p: 0→1). */
export const Strike = ({x1, x2, y, p, color = RED, width = 4}: {x1: number; x2: number; y: number; p: number; color?: string; width?: number}) =>
	p <= 0 ? null : <line x1={x1 - 4} y1={y + 3} x2={x1 - 4 + (x2 - x1 + 8) * p} y2={y - 3} stroke={color} strokeWidth={width} strokeLinecap="round" />;

/** Rounded panel with an optional small-caps title. */
export const Panel = ({
	x, y, w, h, title, stroke = TOK.rule, fill = '#ffffff', titleColor = TOK.inkDim, dashed = false, opacity = 1, children,
}: {x: number; y: number; w: number; h: number; title?: string; stroke?: string; fill?: string; titleColor?: string; dashed?: boolean; opacity?: number; children?: ReactNode}) => (
	<g opacity={opacity}>
		<rect x={x} y={y} width={w} height={h} rx={14} fill={fill} stroke={stroke} strokeWidth={2} strokeDasharray={dashed ? '7 6' : undefined} />
		{title && (
			<text x={x + 16} y={y + 27} fill={titleColor} fontSize={17} fontWeight={800} letterSpacing="0.08em">
				{title}
			</text>
		)}
		{children}
	</g>
);

/** Glossy-ball gradients for arbitrary named colours (ids `${id}-atom-${name}`). */
export const ColorBallDefs = ({id, colors}: {id: string; colors: Record<string, string>}) => (
	<defs>
		{Object.entries(colors).map(([name, base]) => (
			<radialGradient key={name} id={`${id}-atom-${name}`} cx="38%" cy="32%" r="70%" fx="32%" fy="26%">
				<stop offset="0%" stopColor="#ffffff" />
				<stop offset="22%" stopColor={shade(base, 0.08)} />
				<stop offset="75%" stopColor={base} />
				<stop offset="100%" stopColor={shade(base, -0.28)} />
			</radialGradient>
		))}
	</defs>
);

/** Glossy ball using a ColorBallDefs gradient. */
export const CBall = ({
	id, name, color, x, y, r, label, labelColor = '#ffffff', labelSize, opacity = 1, shadow = false,
}: {id: string; name: string; color: string; x: number; y: number; r: number; label?: string; labelColor?: string; labelSize?: number; opacity?: number; shadow?: boolean}) => (
	<g opacity={opacity} transform={`translate(${x},${y})`}>
		{shadow && <ellipse cx={0} cy={r * 0.95} rx={r * 1.1} ry={r * 0.26} fill="rgba(40,36,30,0.22)" />}
		<circle r={r} fill={`url(#${id}-atom-${name})`} stroke={shade(color, -0.35)} strokeWidth={1} />
		{label && (
			<text y={(labelSize ?? r) * 0.36} textAnchor="middle" fill={labelColor} fontSize={labelSize ?? r} fontWeight={800}>
				{label}
			</text>
		)}
	</g>
);

/** Number to n significant figures, keeping trailing zeros (0.0400, 30.6). */
export const sig = (v: number, n: number) => {
	if (v === 0) return '0';
	const s = Number(v).toPrecision(n);
	if (s.includes('e')) return s;
	return s;
};
/** Intermediate value: n+1 sig figs, trailing zeros trimmed but never below n sig figs. */
export const sigMid = (v: number, n: number) => {
	const long = sig(v, n + 1);
	const short = sig(v, n);
	return Number(long) === Number(short) ? short : long;
};
