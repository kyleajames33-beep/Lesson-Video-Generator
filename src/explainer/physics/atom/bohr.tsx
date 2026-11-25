// Hydrogen atom kit for Module 8 (additive kit file, 26 November 2026; first used by phys-y12-m8-v10 to v12).
// Course-neutral: labels, colours of meaning and numbers shown are passed in by the lesson.
// - Hydrogen numbers: hE(n) = -13.6 / n² eV; rydbergNm(nf, ni) from 1/λ = R(1/nf² - 1/ni²) with the data-sheet R.
// - HLevels: energy levels drawn to scale in energy (level n at levelY(n), the ionisation limit E = 0 at `top`), with
//   labels, a dashed "n = ∞" line and an optional highlighted level; `DropArrow`: an arrow between two levels.
// - OrbitWave: a wave wrapped round a circular orbit, `waves` wavelengths per lap; a whole number closes on itself,
//   any other number fails to join (and can be drawn over several laps, fading).
// - spiralRun: the classical prediction for an orbiting electron (field motion engine, `custom` field: an attractive
//   1/r² pull plus a small drag standing for the energy radiated). The run spirals inward; times are model units.
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD, INK} from '../../shared/tokens';
import {levelY} from '../light/spectrum';
import {runMotion} from '../../sims/field-motion';
import type {MotionPath} from '../../sims/field-motion';

export const R_H = 1.097e7, H_PLANCK = 6.626e-34, C_LIGHT = 3.0e8, E_CHARGE = 1.602e-19;
/** Hydrogen level energy (eV), Bohr: −13.6/n². */
export const hE = (n: number) => (Number.isFinite(n) ? -13.6 / (n * n) : 0);
/** 1/λ (m⁻¹) for a drop from ni to nf with the data-sheet R. */
export const invLambda = (nf: number, ni: number) => R_H * (1 / (nf * nf) - (Number.isFinite(ni) ? 1 / (ni * ni) : 0));
/** Wavelength (nm) of a drop from ni to nf. */
export const rydbergNm = (nf: number, ni: number) => 1e9 / invLambda(nf, ni);
/** Photon energy (eV) for a wavelength in nm, E = hc/λ. */
export const eVofNm = (nm: number) => (H_PLANCK * C_LIGHT) / (nm * 1e-9) / E_CHARGE;

const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color, paintOrder: 'stroke', stroke: CARD, strokeWidth: 6, strokeLinejoin: 'round'} as React.CSSProperties);

export type LevelsGeom = {x: number; w: number; top: number; bot: number};
export const yOf = (g: LevelsGeom, n: number) => (Number.isFinite(n) ? levelY(n, g.top, g.bot) : g.top);
/** Levels to scale in energy, labelled at the left (and optionally at the right). */
export const HLevels: React.FC<{g: LevelsGeom; levels: readonly number[]; color: string; label?: (n: number) => string; right?: (n: number) => string; size?: number; hi?: number; hiColor?: string; inf?: boolean; infLabel?: string; opacity?: number; grey?: readonly number[]; draw?: number}> = ({g, levels, color, label, right, size = 26, hi, hiColor, inf = true, infLabel = 'n = ∞, E = 0', opacity = 1, grey = [], draw = 1}) => {
	if (opacity <= 0.001) return null;
	const w = g.w * Math.max(0, Math.min(1, draw));
	return (
		<g opacity={opacity}>
			{inf ? <g><line x1={g.x} y1={g.top} x2={g.x + w} y2={g.top} stroke={color} strokeWidth={3} strokeDasharray="12 8" />{infLabel ? <text x={g.x + g.w + 14} y={g.top + size * 0.35} style={T(size, color)}>{infLabel}</text> : null}</g> : null}
			{levels.map(n => { const y = yOf(g, n), c = grey.includes(n) ? '#b9b2a6' : hi === n ? (hiColor ?? color) : color; return <g key={n}>
				<line x1={g.x} y1={y} x2={g.x + w} y2={y} stroke={c} strokeWidth={hi === n ? 8 : 4} />
				{label ? <text x={g.x - 14} y={y + size * 0.35} textAnchor="end" style={T(size, c)}>{label(n)}</text> : null}
				{right ? <text x={g.x + g.w + 14} y={y + size * 0.35} style={T(size, c)}>{right(n)}</text> : null}
			</g>; })}
		</g>
	);
};
/** A downward (or upward) arrow at x from level `from` to level `to`; `u` (0 to 1) draws it. */
export const DropArrow: React.FC<{g: LevelsGeom; x: number; from: number; to: number; color: string; u?: number; width?: number; opacity?: number; dash?: string}> = ({g, x, from, to, color, u = 1, width = 6, opacity = 1, dash}) => {
	if (opacity <= 0.001 || u <= 0.001) return null;
	const y0 = yOf(g, from), y1 = yOf(g, to), ye = y0 + (y1 - y0) * Math.min(1, u), dir = y1 > y0 ? 1 : -1;
	return (
		<g opacity={opacity}>
			<line x1={x} y1={y0} x2={x} y2={ye - dir * (u >= 1 ? 16 : 0)} stroke={color} strokeWidth={width} strokeDasharray={dash} />
			{u >= 0.98 ? <path d={`M${x},${y1} l-12,${-dir * 22} l24,0 Z`} fill={color} /> : null}
		</g>
	);
};

// ---------------------------------------------------------------- a wave wrapped round an orbit
/** Path of a wave of `waves` wavelengths per lap round a circle (cx, cy, r), amplitude amp, from lap 0 to `laps`. */
export const orbitWavePath = (cx: number, cy: number, r: number, waves: number, amp: number, laps = 1, phase = 0, draw = 1) => {
	const total = 2 * Math.PI * laps * Math.max(0, Math.min(1, draw)), n = Math.max(24, Math.round(160 * laps * draw));
	return Array.from({length: n + 1}, (_, i) => {
		const a = (total * i) / n, rr = r + amp * Math.sin(waves * a + phase);
		return `${i ? 'L' : 'M'}${(cx + rr * Math.cos(a - Math.PI / 2)).toFixed(1)},${(cy + rr * Math.sin(a - Math.PI / 2)).toFixed(1)}`;
	}).join(' ');
};
/** The orbit (dashed) with its wave; a non-whole `waves` is drawn over `laps` laps, each lap fainter (cancelling). */
export const OrbitWave: React.FC<{cx: number; cy: number; r: number; waves: number; amp?: number; color: string; orbit?: string; laps?: number; phase?: number; draw?: number; width?: number; opacity?: number; waveOpacity?: number}> = ({cx, cy, r, waves, amp = 16, color, orbit = INK, laps = 1, phase = 0, draw = 1, width = 4, opacity = 1, waveOpacity = 1}) => {
	if (opacity <= 0.001) return null;
	const whole = Math.abs(waves - Math.round(waves)) < 1e-6;
	return (
		<g opacity={opacity}>
			<circle cx={cx} cy={cy} r={r} fill="none" stroke={orbit} strokeWidth={2.5} strokeDasharray="10 8" />
			{whole ? <path d={orbitWavePath(cx, cy, r, waves, amp, 1, phase, draw)} fill="none" stroke={color} strokeWidth={width} strokeLinejoin="round" opacity={waveOpacity} />
				: Array.from({length: Math.max(1, Math.ceil(laps))}, (_, k) => {
					const d = Math.max(0, Math.min(1, draw * laps - k));
					if (d <= 0.001) return null;
					return <path key={k} d={orbitWavePath(cx, cy, r, waves, amp, 1, phase + waves * 2 * Math.PI * k, d)} fill="none" stroke={color} strokeWidth={width} opacity={waveOpacity * (1 - k / (laps + 0.5))} />;
				})}
		</g>
	);
};

// ---------------------------------------------------------------- the classical spiral (field motion engine)
/** Model units: k = 1 pull, start radius r0 on a circular orbit, drag gamma; stops when r < rEnd. */
export const spiralRun = (o: {r0: number; rEnd: number; gamma: number; steps?: number}): MotionPath => runMotion({
	field: {kind: 'custom', accel: (x, y, vx, vy) => { const r = Math.hypot(x, y), a = 1 / (r * r * r); return [-x * a - o.gamma * vx, -y * a - o.gamma * vy]; }},
	start: {x: o.r0, y: 0, vx: 0, vy: Math.sqrt(1 / o.r0)},
	duration: 4 * Math.log(o.r0 / o.rEnd) / (2 * o.gamma),
	steps: o.steps ?? 6000,
	stopWhen: s => Math.hypot(s.x, s.y) < o.rEnd,
});
/** Index of the run sample at fraction u (0 to 1) of the stored path. */
export const runIndex = (run: MotionPath, u: number) => Math.max(0, Math.min(run.n, Math.round(run.n * u)));
/** SVG path of the run up to fraction u, centred at (cx, cy), k px per model unit (y up on the page). */
export const spiralPath = (run: MotionPath, cx: number, cy: number, k: number, u = 1) => {
	const end = runIndex(run, u), stepN = Math.max(1, Math.floor(end / 900));
	const pts: string[] = [];
	for (let i = 0; i <= end; i += stepN) pts.push(`${pts.length ? 'L' : 'M'}${(cx + run.x[i] * k).toFixed(1)},${(cy - run.y[i] * k).toFixed(1)}`);
	return pts.join(' ');
};
