// Thermal radiation kit for Module 7 (additive kit file, 25 November 2026; first used by phys-y12-m7-v09). Course
// neutral: temperatures, colours and labels come from the lesson.
// Plates (visible boxes measured from the alpha channel, threshold 20, on 25 November 2026; anchors read on a 100 px
// grid the same day):
//   bar heater (1586 x 992): coiled element on its ceramic rod from about x 335 to 1285, y 462 to 498 (end caps at
//   about x 290 to 335 and 1285 to 1330);
//   bench lamp (1484 x 1060): round aperture centre about (1135, 345), radius about 65, facing right;
//   metal plate (1536 x 1024): a flat plate seen from above at an angle; top surface centre about (720, 520).
// - HeaterGlow: a coded warm overlay clipped to the painted element rod (the registered glow plate was held in brief
//   191), with a soft bloom inside the guard only.
// - BBPlot: Planck curves (exact formula from the black-body engine) on wavelength axes with an optional compressed
//   (power) intensity scale, a break mark where a curve leaves the top, ultraviolet and infrared shading, a visible
//   band strip and the dashed classical (Rayleigh-Jeans) curve drawn from long wavelengths towards short ones.
// - Cavity: a hollow box with a small hole, a ray bouncing inside, and standing-wave patterns from the waves engine.
// - PacketBar / ThermalBand / Ladder: energy packets (amber), the typical thermal energy band (grey) and an
//   oscillator's energy ladder with equal steps.
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {INK} from '../../shared/tokens';
import {classicalRadiance, planck, wienPeak} from '../../sims/blackbody';
import {standingAt, standingMode} from '../../sims/waves';
import {LPlate} from './plates';
import type {LightSpec, Place} from './plates';
import {wlColor} from './spectrum';

type Pt = [number, number];
const P = (name: string) => `assets/physics/${name}.png`;
export const HEATER: LightSpec = {src: P('y12p-bar-heater-v1'), W: 1586, H: 992, box: [140, 233, 1440, 859]};
export const BENCH_LAMP: LightSpec = {src: P('y12p-bench-lamp-v1'), W: 1484, H: 1060, box: [103, 127, 1224, 959]};
export const METAL_PLATE: LightSpec = {src: P('phys-y11-metal-plate-v1'), W: 1536, H: 1024, box: [74, 95, 1442, 944]};
export const THERMAL_PLATES = [HEATER, BENCH_LAMP, METAL_PLATE].map(s => s.src);
export const THERMAL_ANCHOR = {rod: [335, 462, 1285, 498], lampAp: [1135, 345], lampApR: 65, plateTop: [720, 520]} as const;

/** Screen point of a native plate pixel for a plate drawn at p (visible box left/top, visible width). */
export const nat = (spec: LightSpec, p: Place, nx: number, ny: number): Pt => {
	const s = p.w / (spec.box[2] - spec.box[0]);
	return [p.x + (nx - spec.box[0]) * s, p.y + (ny - spec.box[1]) * s];
};
/** The heater with an optional glow on its element (colour and amount 0 to 1). */
export const Heater: React.FC<{p: Place; glow?: number; color?: string; opacity?: number}> = ({p, glow = 0, color = '#c0392b', opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const R = THERMAL_ANCHOR.rod;
	const a = nat(HEATER, p, R[0], R[1]), b = nat(HEATER, p, R[2], R[3]);
	const s = p.w / (HEATER.box[2] - HEATER.box[0]);
	return (
		<g opacity={opacity}>
			<LPlate spec={HEATER} p={p} />
			{glow > 0.001 ? <g>
				<rect x={a[0] - 8 * s} y={a[1] - 10 * s} width={b[0] - a[0] + 16 * s} height={b[1] - a[1] + 20 * s} rx={14 * s} fill={color} opacity={0.3 * glow} />
				<rect x={a[0]} y={a[1]} width={b[0] - a[0]} height={b[1] - a[1]} rx={8 * s} fill={color} opacity={0.85 * glow} />
				<rect x={a[0]} y={a[1] + (b[1] - a[1]) * 0.35} width={b[0] - a[0]} height={(b[1] - a[1]) * 0.3} rx={4 * s} fill="#ffe2a8" opacity={0.6 * glow * glow} />
			</g> : null}
		</g>
	);
};

/** Planck radiance on a display scale: (B / ref)^pow. */
export const bbVal = (T: number, nm: number, ref: number, pow = 1) => Math.pow(planck(nm * 1e-9, T) / ref, pow);
export const peakNm = (T: number) => wienPeak(T) * 1e9;
export type BBCurve = {T: number; color: string; draw?: number; width?: number; dash?: string; opacity?: number};
export type BBGeom = {x: number; y: number; w: number; h: number; nm0: number; nm1: number; ref: number; pow?: number};
export const bbX = (g: BBGeom, nm: number) => g.x + ((nm - g.nm0) / (g.nm1 - g.nm0)) * g.w;
export const bbY = (g: BBGeom, v: number) => g.y + g.h - Math.min(1.08, v) * g.h;
/** Cut a polyline where it reaches the clamped top, then send it up out of the plot (a curve leaving the frame). */
const leaveTop = (p: Pt[], g: BBGeom): Pt[] => {
	const top = bbY(g, 1.08);
	const i = p.findIndex(q => q[1] <= top + 0.01);
	return i < 0 ? p : [...p.slice(0, i + 1), [p[i][0] - 6, g.y - 0.16 * g.h]];
};
/** The axes, shading, band strip, curves and classical curve. `ticks` are wavelengths (nm) to label. */
export const BBPlot: React.FC<{g: BBGeom; curves: readonly BBCurve[]; ticks?: readonly number[]; shade?: number; band?: number; classical?: {T: number; draw: number; color: string; opacity?: number}; axes?: number; fill?: {T: number; color: string; opacity: number}; tick?: number}> = ({g, curves, ticks = [], shade = 0, band = 0, classical, axes = 1, fill, tick = 26}) => {
	const N = 240;
	const pts = (fn: (nm: number) => number, u = 1, fromRight = false) => {
		const k = Math.max(2, Math.round(N * Math.max(0, Math.min(1, u))));
		return Array.from({length: k}, (_, i) => { const t = fromRight ? 1 - i / (N - 1) : i / (N - 1); const nm = g.nm0 + t * (g.nm1 - g.nm0); return [bbX(g, nm), bbY(g, fn(nm))] as Pt; });
	};
	const path = (p: Pt[]) => p.map((q, i) => `${i ? 'L' : 'M'}${q[0].toFixed(1)},${q[1].toFixed(1)}`).join(' ');
	const pw = g.pow ?? 1;
	const x400 = Math.max(g.x, bbX(g, 400)), x700 = Math.min(g.x + g.w, bbX(g, 700));
	return (
		<g>
			{shade > 0.001 ? <g opacity={shade}>
				{x400 > g.x ? <rect x={g.x} y={g.y} width={x400 - g.x} height={g.h} fill="#d3c9b6" /> : null}
				{x700 < g.x + g.w ? <rect x={x700} y={g.y} width={g.x + g.w - x700} height={g.h} fill="#ddd4c2" /> : null}
			</g> : null}
			{band > 0.001 && x700 > x400 ? <g opacity={band}>{Array.from({length: 30}, (_, i) => { const nm = 400 + (300 * (i + 0.5)) / 30; return <rect key={i} x={bbX(g, 400 + (300 * i) / 30)} y={g.y + g.h + 4} width={(x700 - x400) / 30 + 0.8} height={18} fill={wlColor(nm)} />; })}</g> : null}
			{fill ? <path d={`${path(pts(nm => bbVal(fill.T, nm, g.ref, pw)))} L${g.x + g.w},${g.y + g.h} L${g.x},${g.y + g.h} Z`} fill={fill.color} opacity={fill.opacity} /> : null}
			{axes > 0.001 ? <g opacity={axes}>
				<line x1={g.x} y1={g.y + g.h} x2={g.x + g.w} y2={g.y + g.h} stroke={INK} strokeWidth={3.5} />
				<line x1={g.x} y1={g.y - 10} x2={g.x} y2={g.y + g.h} stroke={INK} strokeWidth={3.5} />
				{ticks.map(t => <g key={t}><line x1={bbX(g, t)} y1={g.y + g.h} x2={bbX(g, t)} y2={g.y + g.h + 10} stroke={INK} strokeWidth={3} /><text x={bbX(g, t)} y={g.y + g.h + 26 + tick} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: tick, fill: INK}}>{t}</text></g>)}
			</g> : null}
			{classical && classical.draw > 0.001 ? <path d={path(leaveTop(pts(nm => Math.pow(classicalRadiance(nm * 1e-9, classical.T) / g.ref, pw), classical.draw, true), g))} fill="none" stroke={classical.color} strokeWidth={5} strokeDasharray="14 10" opacity={classical.opacity ?? 1} /> : null}
			{curves.map((c, i) => (c.opacity ?? 1) <= 0.001 || (c.draw ?? 1) <= 0.001 ? null : <path key={i} d={path(pts(nm => bbVal(c.T, nm, g.ref, pw), c.draw ?? 1))} fill="none" stroke={c.color} strokeWidth={c.width ?? 5} strokeDasharray={c.dash} opacity={c.opacity ?? 1} strokeLinejoin="round" />)}
			{curves.map((c, i) => { const pk = peakNm(c.T); const v = bbVal(c.T, pk, g.ref, pw); return v > 1.08 && (c.draw ?? 1) > 0.5 && (c.opacity ?? 1) > 0.001 && pk > g.nm0 && pk < g.nm1 ? <g key={`b${i}`} opacity={c.opacity ?? 1}><path d={`M${bbX(g, pk) - 22},${g.y - 10} l16,-10 M${bbX(g, pk) - 6},${g.y - 6} l16,-10`} stroke={c.color} strokeWidth={4} /></g> : null; })}
		</g>
	);
};

/** A hollow box with a hole in its left wall (cy ± hole/2), a ray bouncing inside (draw 0 to 1). */
export const Cavity: React.FC<{x: number; y: number; w: number; h: number; hole?: number; wall?: number; ray?: number; rayColor?: string; opacity?: number; children?: React.ReactNode}> = ({x, y, w, h, hole = 40, wall = 22, ray = 0, rayColor = '#d18f1f', opacity = 1, children}) => {
	if (opacity <= 0.001) return null;
	const cy = y + h / 2;
	const path: Pt[] = [[x - 120, cy - 60], [x + wall, cy - 4], [x + w - wall, cy + h * 0.3], [x + w * 0.55, y + wall], [x + w * 0.2, y + h - wall], [x + w - wall, y + h * 0.35], [x + w * 0.62, y + h - wall], [x + w * 0.35, y + wall + 10]];
	const L = path.slice(1).reduce((s, p, i) => s + Math.hypot(p[0] - path[i][0], p[1] - path[i][1]), 0);
	let left = L * Math.max(0, Math.min(1, ray));
	const segs: Pt[] = [path[0]];
	for (let i = 1; i < path.length && left > 0; i++) { const d = Math.hypot(path[i][0] - path[i - 1][0], path[i][1] - path[i - 1][1]); const u = Math.min(1, left / d); segs.push([path[i - 1][0] + (path[i][0] - path[i - 1][0]) * u, path[i - 1][1] + (path[i][1] - path[i - 1][1]) * u]); left -= d; }
	return (
		<g opacity={opacity}>
			<rect x={x} y={y} width={w} height={h} fill="#fffdf8" />
			{children}
			<path d={`M${x},${cy - hole / 2} V${y} H${x + w} V${y + h} H${x} V${cy + hole / 2}`} fill="none" stroke="#7d776d" strokeWidth={wall} strokeLinejoin="miter" />
			{ray > 0.001 ? <path d={segs.map((p, i) => `${i ? 'L' : 'M'}${p[0]},${p[1]}`).join(' ')} fill="none" stroke={rayColor} strokeWidth={5} opacity={1 - 0.6 * Math.max(0, ray - 0.8) / 0.2} strokeLinejoin="round" /> : null}
		</g>
	);
};
/** Standing-wave pattern n between x0 and x1 at height y (fixed ends), from the waves engine. */
export const StandingPattern: React.FC<{x0: number; x1: number; y: number; n: number; amp: number; t: number; color: string; width?: number; opacity?: number}> = ({x0, x1, y, n, amp, t, color, width = 4, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const L = x1 - x0, mode = standingMode(L, n);
	const k = 120;
	const d = Array.from({length: k + 1}, (_, i) => { const x = (L * i) / k; return `${i ? 'L' : 'M'}${(x0 + x).toFixed(1)},${(y - standingAt(mode, amp, 1, x, t)).toFixed(1)}`; }).join(' ');
	return <path d={d} fill="none" stroke={color} strokeWidth={width} opacity={opacity} />;
};

/** A grey band for the typical thermal energy across a panel. */
export const ThermalBand: React.FC<{x: number; w: number; y: number; h: number; opacity?: number}> = ({x, w, y, h, opacity = 1}) => (opacity <= 0.001 ? null : <rect x={x} y={y} width={w} height={h} rx={8} fill="#b9b2a6" opacity={0.45 * opacity} />);
/** An amber packet bar of height h standing on base; `fill` 0 to 1 shows it filled; `locked` greys it with a padlock. */
export const PacketBar: React.FC<{x: number; base: number; h: number; w?: number; fill?: number; locked?: number; color: string; opacity?: number}> = ({x, base, h, w = 90, fill = 0, locked = 0, color, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	return (
		<g opacity={opacity}>
			<rect x={x - w / 2} y={base - h} width={w} height={h} rx={8} fill="#fffdf8" stroke={color} strokeWidth={4} />
			{fill > 0.001 ? <rect x={x - w / 2 + 4} y={base - h * fill + 4} width={w - 8} height={Math.max(0, h * fill - 8)} rx={5} fill={color} opacity={0.85} /> : null}
			{locked > 0.001 ? <g opacity={locked}>
				<rect x={x - w / 2} y={base - h} width={w} height={h} rx={8} fill="#8a8378" opacity={0.35} />
				<rect x={x - 22} y={base - h / 2 - 6} width={44} height={36} rx={6} fill={INK} />
				<path d={`M${x - 14},${base - h / 2 - 6} v-12 a14,14 0 0 1 28,0 v12`} fill="none" stroke={INK} strokeWidth={6} />
			</g> : null}
		</g>
	);
};
/** An oscillator's energy ladder: rungs n = 0 to top, equal spacing; a marker on rung `at` (may be fractional while hopping). */
export const Ladder: React.FC<{x: number; base: number; step: number; rungs: number; w?: number; at?: number; color: string; marker: string; opacity?: number}> = ({x, base, step, rungs, w = 220, at = 0, color, marker, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	return (
		<g opacity={opacity}>
			<line x1={x} y1={base} x2={x} y2={base - step * rungs} stroke={INK} strokeWidth={3} />
			<line x1={x + w} y1={base} x2={x + w} y2={base - step * rungs} stroke={INK} strokeWidth={3} />
			{Array.from({length: rungs + 1}, (_, n) => <line key={n} x1={x} y1={base - n * step} x2={x + w} y2={base - n * step} stroke={color} strokeWidth={n === 0 ? 6 : 5} />)}
			<circle cx={x + w / 2} cy={base - at * step - 14} r={14} fill={marker} stroke="#fff" strokeWidth={3} />
		</g>
	);
};
