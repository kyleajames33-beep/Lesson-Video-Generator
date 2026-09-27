// Private helpers for helper-lane C (Le Chatelier, industry, temperature).
// Small drawing pieces shared by CatalystBoth, Pressure, RateYield, HaberLoop,
// Signatures, HeatShift, KeqTrend and Colourimetry.

import type {ReactNode} from 'react';
import {TOK} from '../../../../styles/tokens';
import {textW} from './shared';

export const PRODUCT = '#8a5cc9';

/** A straight arrow from (x1,y1) to (x2,y2) drawn to fraction g of its length. */
export const Arrow = ({
	x1, y1, x2, y2, g = 1, color, w = 4, head = 12, opacity = 1, dash,
}: {x1: number; y1: number; x2: number; y2: number; g?: number; color: string; w?: number; head?: number; opacity?: number; dash?: string}) => {
	const len = Math.hypot(x2 - x1, y2 - y1);
	if (len < 1 || g <= 0) return null;
	const ux = (x2 - x1) / len, uy = (y2 - y1) / len;
	const ex = x1 + (x2 - x1) * g, ey = y1 + (y2 - y1) * g;
	const bx = ex - ux * head, by = ey - uy * head;
	const px = -uy * head * 0.62, py = ux * head * 0.62;
	return (
		<g opacity={opacity}>
			<line x1={x1} y1={y1} x2={bx + ux * 2} y2={by + uy * 2} stroke={color} strokeWidth={w} strokeLinecap="round" strokeDasharray={dash} />
			<path d={`M ${ex} ${ey} L ${bx + px} ${by + py} L ${bx - px} ${by - py} Z`} fill={color} />
		</g>
	);
};

/** A double-headed vertical arrow (an energy gap), drawn at full length. */
export const Gap = ({x, y1, y2, color, w = 3.5, head = 11}: {x: number; y1: number; y2: number; color: string; w?: number; head?: number}) => {
	if (Math.abs(y2 - y1) < head * 2 + 2) return null;
	const d = y2 > y1 ? 1 : -1;
	return (
		<g>
			<line x1={x} y1={y1 + d * head} x2={x} y2={y2 - d * head} stroke={color} strokeWidth={w} />
			<path d={`M ${x} ${y1} l ${-head * 0.62} ${d * head} l ${head * 1.24} 0 Z`} fill={color} />
			<path d={`M ${x} ${y2} l ${-head * 0.62} ${-d * head} l ${head * 1.24} 0 Z`} fill={color} />
		</g>
	);
};

/** Polyline path through points, revealed up to fraction `upto` of the points. */
export const polyPath = (pts: [number, number][], upto = 1) => {
	const n = Math.max(1, Math.min(pts.length - 1, Math.floor((pts.length - 1) * upto)));
	const out: string[] = [];
	for (let i = 0; i <= n; i++) out.push(`${i === 0 ? 'M' : 'L'} ${pts[i][0].toFixed(1)} ${pts[i][1].toFixed(1)}`);
	// fractional tail
	const exact = (pts.length - 1) * Math.max(0, Math.min(1, upto));
	if (n < pts.length - 1 && exact > n) {
		const f = exact - n;
		const [ax, ay] = pts[n], [bx, by] = pts[n + 1];
		out.push(`L ${(ax + (bx - ax) * f).toFixed(1)} ${(ay + (by - ay) * f).toFixed(1)}`);
	}
	return out.join(' ');
};

/** Point at fraction `t` along a polyline (by index). */
export const polyAt = (pts: [number, number][], t: number): [number, number] => {
	const exact = (pts.length - 1) * Math.max(0, Math.min(1, t));
	const n = Math.min(pts.length - 2, Math.floor(exact));
	const f = exact - n;
	return [pts[n][0] + (pts[n + 1][0] - pts[n][0]) * f, pts[n][1] + (pts[n + 1][1] - pts[n][1]) * f];
};

/** Simple L-shaped axes with an arrowhead on each and optional labels. */
export const Axes = ({
	x0, y0, x1, y1, xLabel, yLabel, size = 16, color = TOK.inkMute, opacity = 1,
}: {x0: number; y0: number; x1: number; y1: number; xLabel?: string; yLabel?: string; size?: number; color?: string; opacity?: number}) => (
	<g opacity={opacity}>
		<line x1={x0} y1={y1} x2={x1} y2={y1} stroke={color} strokeWidth={2.2} />
		<path d={`M ${x1 + 8} ${y1} l -11 -6 l 0 12 Z`} fill={color} />
		<line x1={x0} y1={y1} x2={x0} y2={y0} stroke={color} strokeWidth={2.2} />
		<path d={`M ${x0} ${y0 - 8} l -6 11 l 12 0 Z`} fill={color} />
		{xLabel && (
			<text x={x1} y={y1 + size + 8} textAnchor="end" fill={TOK.inkDim} fontSize={size} fontWeight={700}>{xLabel}</text>
		)}
		{yLabel && (
			<text x={x0 - 10} y={(y0 + y1) / 2} textAnchor="middle" fill={TOK.inkDim} fontSize={size} fontWeight={700} transform={`rotate(-90 ${x0 - 10} ${(y0 + y1) / 2})`}>{yLabel}</text>
		)}
	</g>
);

/** Multi-line text block; lines are given explicitly. */
export const Lines = ({
	x, y, lines, size = 17, gap = 1.3, color = TOK.ink, weight = 700, anchor = 'start', opacity = 1,
}: {x: number; y: number; lines: ReactNode[]; size?: number; gap?: number; color?: string; weight?: number; anchor?: 'start' | 'middle' | 'end'; opacity?: number}) => (
	<g opacity={opacity}>
		{lines.map((l, i) => (
			<text key={i} x={x} y={y + i * size * gap} textAnchor={anchor} fill={color} fontSize={size} fontWeight={weight}>{l}</text>
		))}
	</g>
);

/** Greedy word-wrap using the lane's textW estimate. */
export const wrap = (t: string, size: number, maxW: number): string[] => {
	const words = t.split(' ');
	const out: string[] = [];
	let cur = '';
	for (const w of words) {
		const trial = cur ? `${cur} ${w}` : w;
		if (textW(trial, size) > maxW && cur) {
			out.push(cur);
			cur = w;
		} else cur = trial;
	}
	if (cur) out.push(cur);
	return out;
};

/** A tag with a coloured dot/border, left-aligned at x. Returns width via textW. */
export const Tag = ({
	x, y, text, color, fill = '#ffffff', ink, size = 17, opacity = 1, strokeWidth = 2, anchor = 'start',
}: {x: number; y: number; text: string; color: string; fill?: string; ink?: string; size?: number; opacity?: number; strokeWidth?: number; anchor?: 'start' | 'middle' | 'end'}) => {
	const w = textW(text, size) + 24;
	const h = size + 14;
	const left = anchor === 'start' ? x : anchor === 'middle' ? x - w / 2 : x - w;
	return (
		<g opacity={opacity}>
			<rect x={left} y={y - h / 2} width={w} height={h} rx={h / 2} fill={fill} stroke={color} strokeWidth={strokeWidth} />
			<text x={left + w / 2} y={y + size * 0.36} textAnchor="middle" fill={ink ?? color} fontSize={size} fontWeight={800}>{text}</text>
		</g>
	);
};
