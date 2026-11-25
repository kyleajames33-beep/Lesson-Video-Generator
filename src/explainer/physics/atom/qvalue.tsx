// Module 8 kit, part 9: energy bookkeeping for nuclear reactions (additive kit file, 26 November 2026; first used by
// phys-y12-m8-v17, offered to v19's fusion ledger). Course-neutral: every label, number and colour of meaning comes
// from the lesson.
// - StackColumn: one stacked bar (segments from the base upwards), each segment with its own fill, an optional label
//   beside it and an optional zigzag break (for a rest-energy bar far too tall to draw: the lesson tags it
//   "not to scale"). Used for the energy ledger (rest energy under kinetic energy, before and after) and for binding
//   bars (one segment per nuclide).
// - Ledger: two StackColumns ("before" and "after") on one base line with a dashed total line across both when their
//   totals match, so equal heights read as "energy is conserved".
// - ArrowFlow: a short thick arrow pointing out of (or into) a box edge, for energy released or absorbed.
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD, INK} from '../../shared/tokens';

const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color, paintOrder: 'stroke', stroke: CARD, strokeWidth: 6, strokeLinejoin: 'round'} as React.CSSProperties);

export type StackSeg = {h: number; fill: string; stroke: string; label?: string; labelColor?: string; dashed?: boolean; glow?: number; brk?: boolean; labelSide?: 'left' | 'right' | 'in'};
/** A zigzag break across a bar of width w at height y (a bar drawn shorter than its true size). */
export const BreakMark: React.FC<{x: number; y: number; w: number; color?: string}> = ({x, y, w, color = INK}) => {
	const n = 6, a = 9;
	const zig = (dy: number) => Array.from({length: n + 1}, (_, i) => `${i ? 'L' : 'M'}${(x - 6 + ((w + 12) * i) / n).toFixed(1)},${(y + dy + (i % 2 ? -a : a)).toFixed(1)}`).join(' ');
	return (
		<g>
			<rect x={x - 6} y={y - 7} width={w + 12} height={14} fill={CARD} />
			<path d={zig(-7)} fill="none" stroke={color} strokeWidth={3} />
			<path d={zig(7)} fill="none" stroke={color} strokeWidth={3} />
		</g>
	);
};
/** One stacked bar standing on `base`; segments are drawn from the bottom up. Returns nothing when hidden. */
export const StackColumn: React.FC<{x: number; base: number; w: number; segs: readonly StackSeg[]; title?: string; titleColor?: string; size?: number; opacity?: number}> = ({x, base, w, segs, title, titleColor = INK, size = 30, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	let y = base;
	const parts = segs.map((s, i) => {
		const top = y - Math.max(0, s.h);
		const out = (
			<g key={i}>
				{s.glow && s.glow > 0.001 ? <rect x={x - 8} y={top - 8} width={w + 16} height={Math.max(0, s.h) + 16} rx={10} fill={s.stroke} opacity={0.25 * s.glow} /> : null}
				{s.h > 0.5 ? <rect x={x} y={top} width={w} height={s.h} fill={s.fill} stroke={s.stroke} strokeWidth={3} strokeDasharray={s.dashed ? '10 7' : undefined} /> : null}
				{s.brk && s.h > 60 ? <BreakMark x={x} y={top + s.h * 0.5} w={w} color={s.stroke} /> : null}
				{s.label ? <text x={s.labelSide === 'left' ? x - 14 : s.labelSide === 'in' ? x + w / 2 : x + w + 14} y={top + Math.max(0, s.h) / 2 + size * 0.35} textAnchor={s.labelSide === 'left' ? 'end' : s.labelSide === 'in' ? 'middle' : 'start'} style={T(size, s.labelColor ?? s.stroke)}>{s.label}</text> : null}
			</g>
		);
		y = top;
		return out;
	});
	return (
		<g opacity={opacity}>
			{parts}
			<line x1={x - 20} y1={base} x2={x + w + 20} y2={base} stroke={INK} strokeWidth={4} />
			{title ? <text x={x + w / 2} y={base + 16 + size} textAnchor="middle" style={T(size, titleColor)}>{title}</text> : null}
		</g>
	);
};
/** Total height of a stack. */
export const stackH = (segs: readonly StackSeg[]) => segs.reduce((n, s) => n + Math.max(0, s.h), 0);
/** Two columns on one base with a dashed line at the "before" total when `totals` is on. */
export const Ledger: React.FC<{x: number; base: number; w: number; gap: number; before: readonly StackSeg[]; after: readonly StackSeg[]; titles?: readonly [string, string]; totals?: number; size?: number; opacity?: number; lineColor?: string}> = ({x, base, w, gap, before, after, titles = ['before', 'after'], totals = 0, size = 30, opacity = 1, lineColor = INK}) => {
	if (opacity <= 0.001) return null;
	const hb = stackH(before);
	return (
		<g opacity={opacity}>
			<StackColumn x={x} base={base} w={w} segs={before} title={titles[0]} size={size} />
			<StackColumn x={x + w + gap} base={base} w={w} segs={after} title={titles[1]} size={size} />
			{totals > 0.001 ? <line x1={x - 24} y1={base - hb} x2={x + 2 * w + gap + 24} y2={base - hb} stroke={lineColor} strokeWidth={3} strokeDasharray="12 8" opacity={totals} /> : null}
		</g>
	);
};
/** A thick block arrow of length len pointing at angle deg (0 = right), drawn from (x, y). */
export const ArrowFlow: React.FC<{x: number; y: number; len: number; deg?: number; color: string; w?: number; opacity?: number}> = ({x, y, len, deg = 0, color, w = 18, opacity = 1}) => {
	if (opacity <= 0.001 || len < 2) return null;
	const head = Math.min(len * 0.45, w * 1.6);
	const d = `M0,${-w / 2} L${len - head},${-w / 2} L${len - head},${-w} L${len},0 L${len - head},${w} L${len - head},${w / 2} L0,${w / 2} Z`;
	return <path d={d} transform={`translate(${x} ${y}) rotate(${deg})`} fill={color} stroke={INK} strokeWidth={2} opacity={opacity} />;
};
