// Velocity against time graph for the Module 5 projectile lessons (additive kit file, 22 November 2026,
// first used by phys-y12-m5-v03). Course-neutral: the lesson passes the lines (as functions of time, read
// from the projectile maths or a field-motion run), the axis ranges and every label.
// Drawn in frame coordinates: place it inside a FrameSvg (or any 1920 x 1080 SVG).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {CARD, INK, INK_SOFT, TYPE, rgba} from '../../shared/tokens';

/** One line on the graph: v = fn(t), drawn from t0 to t1 (t1 is usually the live clock). */
export type VSeries = {fn: (t: number) => number; t1: number; t0?: number; color: string; width?: number; dash?: string; dot?: boolean};
/** A shaded area between a line and v = 0 (for example the area that equals a height). */
export type VShade = {fn: (t: number) => number; t0: number; t1: number; color: string; at?: number; opacity?: number};

/** Plot geometry of a graph whose card is (x, y, w, h). */
export const vgGeom = (x: number, y: number, w: number, h: number, tMax: number, vMin: number, vMax: number, tMin = 0) => {
	const left = x + 96, right = x + w - 34, top = y + 62, bottom = y + h - 70;
	const tx = (t: number) => left + ((t - tMin) / (tMax - tMin)) * (right - left);
	const vy = (v: number) => bottom - ((v - vMin) / (vMax - vMin)) * (bottom - top);
	return {left, right, top, bottom, tx, vy};
};

const lineD = (fn: (t: number) => number, t0: number, t1: number, tx: (t: number) => number, vy: (v: number) => number, n = 60) => {
	let d = '';
	for (let i = 0; i <= n; i++) {
		const t = t0 + ((t1 - t0) * i) / n;
		d += `${i ? 'L' : 'M'}${tx(t).toFixed(1)},${vy(fn(t)).toFixed(1)} `;
	}
	return d;
};

/**
 * A card with axes (t across, v up, a dashed v = 0 line), tick labels, axis titles and the given lines.
 * Every line ends in a dot at its current point (`dot`), so a graph coupled to a flight shows where the
 * ball is now. Text is solid ink at 28 px or more.
 */
export const VGraph: React.FC<{
	x: number; y: number; w: number; h: number; tMax: number; vMin: number; vMax: number; tMin?: number;
	tTicks: readonly number[]; vTicks: readonly number[]; series: readonly VSeries[]; shades?: readonly VShade[];
	title?: string; tLabel?: string; vLabel?: string; at?: number; tickFmt?: (v: number) => string; children?: React.ReactNode;
}> = ({x, y, w, h, tMax, vMin, vMax, tMin = 0, tTicks, vTicks, series, shades = [], title, tLabel = 't (s)', vLabel = 'v (m s⁻¹)', at = -30, tickFmt = v => (v < 0 ? '−' : '') + Math.abs(v).toString(), children}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.001) return null;
	const g = vgGeom(x, y, w, h, tMax, vMin, vMax, tMin);
	const tick = {fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: TYPE.label, fill: INK} as const;
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} rx={18} fill={CARD} stroke="rgba(60,45,20,0.16)" strokeWidth={2.5} />
			{title ? <text x={x + w - 22} y={y + 40} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: TYPE.support}} fill={INK}>{title}</text> : null}
			{shades.map((s, i) => {
				const p = s.at === undefined ? 1 : prog(f, s.at, 16);
				if (p <= 0) return null;
				const d = `${lineD(s.fn, s.t0, s.t1, g.tx, g.vy)} L${g.tx(s.t1).toFixed(1)},${g.vy(0).toFixed(1)} L${g.tx(s.t0).toFixed(1)},${g.vy(0).toFixed(1)} Z`;
				return <path key={i} d={d} fill={rgba(s.color, (s.opacity ?? 0.28) * p)} stroke="none" />;
			})}
			<line x1={g.left} x2={g.left} y1={g.top - 10} y2={g.bottom} stroke={INK} strokeWidth={3} />
			<line x1={g.left} x2={g.right + 10} y1={g.bottom} y2={g.bottom} stroke={INK} strokeWidth={3} />
			{tMin < 0 ? <line x1={g.tx(0)} x2={g.tx(0)} y1={g.top - 10} y2={g.bottom} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 7" /> : null}
			{vMin < 0 ? <line x1={g.left} x2={g.right} y1={g.vy(0)} y2={g.vy(0)} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 7" /> : null}
			{tTicks.map(t => (
				<g key={`t${t}`}>
					<line x1={g.tx(t)} x2={g.tx(t)} y1={g.bottom} y2={g.bottom + 9} stroke={INK} strokeWidth={2.5} />
					<text x={g.tx(t)} y={g.bottom + 38} textAnchor="middle" style={tick}>{tickFmt(t)}</text>
				</g>
			))}
			{vTicks.map(v => (
				<g key={`v${v}`}>
					<line x1={g.left - 9} x2={g.left} y1={g.vy(v)} y2={g.vy(v)} stroke={INK} strokeWidth={2.5} />
					<text x={g.left - 16} y={g.vy(v) + 10} textAnchor="end" style={tick}>{tickFmt(v)}</text>
				</g>
			))}
			<text x={g.right + 8} y={g.bottom + 62} textAnchor="end" style={{...tick, fill: INK_SOFT}}>{tLabel}</text>
			<text x={g.left + 12} y={g.top - 18} style={{...tick, fill: INK_SOFT}}>{vLabel}</text>
			{series.map((s, i) => {
				const t0 = s.t0 ?? Math.max(0, tMin);
				const t1 = Math.max(t0, Math.min(tMax, s.t1));
				return (
					<g key={i}>
						{t1 > t0 + 1e-6 ? <path d={lineD(s.fn, t0, t1, g.tx, g.vy)} fill="none" stroke={s.color} strokeWidth={s.width ?? 6} strokeDasharray={s.dash} strokeLinecap="round" strokeLinejoin="round" /> : null}
						{s.dot ? <circle cx={g.tx(t1)} cy={g.vy(s.fn(t1))} r={10} fill={s.color} stroke={CARD} strokeWidth={3} /> : null}
					</g>
				);
			})}
			{children}
		</g>
	);
};
