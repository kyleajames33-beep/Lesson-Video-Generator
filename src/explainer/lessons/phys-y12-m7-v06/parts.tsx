// Lesson parts for phys-y12-m7-v06: the slit colours (slit 1 teal, slit 2 plum: role colours, never light colours),
// waves along a line from the waves engine (superposition), the path-difference meter, the probe point solver, a
// vertical band screen for the top views, white-light bands, and v05's parts re-exported.
// Colour key (design, Revision 2): waves from slit 1 teal, from slit 2 plum; crests solid, troughs dashed; path lengths
// orange; path difference rose; angles navy; light in its true colour (632.8 nm and 650 nm red, 532 nm green, 450 nm
// blue, 396 nm violet); answers in dark-ink frames; mistakes slate (root rule R1).
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD, INK, TONES} from '../../shared/tokens';
import {wlColor} from '../../physics/light/spectrum';
import {LAMP, LIGHT_PLATES} from '../../physics/light/plates';
import {displacement, doubleSlitBrightness, sumAt} from '../../sims/waves';
import type {Wave} from '../../sims/waves';
import {GREY, Lbl, NAVY, ORANGE, ROSE, Shrunk, Strip, TEAL, V05_PLATES, fx, sci} from '../phys-y12-m7-v05/parts';

export {GREY, Lbl, NAVY, ORANGE, ROSE, Shrunk, Strip, TEAL, fx, sci};
export const V06_PLATES = [...new Set([...V05_PLATES, LAMP.src, ...LIGHT_PLATES.filter(s => s.includes('laser'))])];
export const PLUM = {ink: '#7a2f66', stroke: '#8e3b78', soft: '#f1dfeb'};
export const RED_INK = '#b8322a';
/** True colours of the light (nm). */
export const col = (nm: number) => wlColor(nm);
export const VIOLET_396 = '#7a3cc8';
type Pt = [number, number];

// ---------------------------------------------------------------- superposition along a line (waves engine)
/** A wave along a line from x0 to x1 (px), amplitude a (px), wavelength (px), phase (rad), drawn from the engine. */
export const LineWave: React.FC<{x0: number; x1: number; y: number; waves: readonly Wave[]; t: number; color: string; width?: number; dash?: string; opacity?: number}> = ({x0, x1, y, waves, t, color, width = 5, dash, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const n = 160;
	const d = Array.from({length: n + 1}, (_, i) => { const x = x0 + ((x1 - x0) * i) / n; return `${i ? 'L' : 'M'}${x.toFixed(1)},${(y - sumAt(waves, x - x0, t)).toFixed(1)}`; }).join(' ');
	return <g opacity={opacity}><line x1={x0} y1={y} x2={x1} y2={y} stroke="#cfc6b6" strokeWidth={2} /><path d={d} fill="none" stroke={color} strokeWidth={width} strokeDasharray={dash} /></g>;
};
export {displacement};

// ---------------------------------------------------------------- the two-source stage
/** Path difference |S2P| - |S1P| for slits at (bx, ya) and (bx, yb) and a point (px, py). */
export const pdAt = (bx: number, ya: number, yb: number, px: number, py: number) => Math.hypot(px - bx, py - yb) - Math.hypot(px - bx, py - ya);
/** Height on a screen at x = sx where the path difference is `target` (px), by bisection (target >= 0, P above centre). */
export const yForPd = (bx: number, ya: number, yb: number, sx: number, target: number) => {
	const cy = (ya + yb) / 2;
	let lo = cy, hi = cy - 2000;
	for (let i = 0; i < 60; i++) { const mid = (lo + hi) / 2; if (pdAt(bx, ya, yb, sx, mid) < target) lo = mid; else hi = mid; }
	return (lo + hi) / 2;
};
/** A vertical screen strip of bands (top view) from a brightness function of height. */
export const VBands: React.FC<{x: number; y: number; w: number; h: number; bright: (y: number) => number; color: string; opacity?: number; n?: number}> = ({x, y, w, h, bright, color, opacity = 1, n = 160}) => {
	if (opacity <= 0.001) return null;
	return (
		<g opacity={opacity}>
			<rect x={x} y={y} width={w} height={h} rx={8} fill="#171412" />
			{Array.from({length: n}, (_, i) => { const yy = y + ((i + 0.5) * h) / n; const v = Math.max(0, Math.min(1, bright(yy))); return v < 0.02 ? null : <rect key={i} x={x + 4} y={y + (i * h) / n} width={w - 8} height={h / n + 0.8} fill={color} opacity={Math.pow(v, 0.7)} />; })}
			<rect x={x} y={y} width={w} height={h} rx={8} fill="none" stroke={INK} strokeWidth={3} />
		</g>
	);
};
/** Two-slit brightness from the engine at a screen position x (m) for d, λ and L (m). */
export const twoSlit = (xM: number, d: number, lambda: number, L: number) => doubleSlitBrightness(d, lambda, Math.atan(xM / L));

// ---------------------------------------------------------------- the path-difference meter
/** A rose bar from 0 to `pd` wavelengths on a scale 0 to 2 λ, with ticks at halves; bright (ink) at whole numbers. */
export const PdMeter: React.FC<{x: number; y: number; w: number; pd: number; opacity?: number; lit?: readonly number[]}> = ({x, y, w, pd, opacity = 1, lit = []}) => {
	if (opacity <= 0.001) return null;
	const X = (v: number) => x + (v / 2) * w;
	return (
		<g opacity={opacity}>
			<rect x={x} y={y} width={w} height={34} rx={8} fill={CARD} stroke={INK} strokeWidth={3} />
			<rect x={x} y={y} width={Math.max(0, X(Math.min(2, pd)) - x)} height={34} rx={8} fill={ROSE.stroke} opacity={0.85} />
			{[0, 0.5, 1, 1.5, 2].map(v => <g key={v}>
				<line x1={X(v)} y1={y + 34} x2={X(v)} y2={y + 48} stroke={INK} strokeWidth={3} />
				<text x={X(v)} y={y + 78} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, fill: v % 1 ? GREY.ink : INK}}>{v === 0 ? '0' : v === 0.5 ? '½λ' : v === 1 ? '1λ' : v === 1.5 ? '1½λ' : '2λ'}</text>
				{lit.includes(v) ? <circle cx={X(v)} cy={y - 18} r={11} fill={v % 1 ? '#171412' : '#d8312c'} stroke={INK} strokeWidth={2} /> : null}
			</g>)}
		</g>
	);
};
/** Format a path difference in wavelengths as 0, ½λ, 1λ, 1½λ. */
export const pdText = (k: number) => (Math.abs(k) < 0.02 ? '0' : Math.abs(k - 0.5) < 0.02 ? '½λ' : Math.abs(k - 1) < 0.02 ? '1λ' : Math.abs(k - 1.5) < 0.02 ? '1½λ' : `${fx(k, 2)}λ`);
/** Two small waves at a point, shifted by the path difference (in wavelengths), and their sum. */
export const CycleAt: React.FC<{x: number; y: number; w: number; k: number; t: number; opacity?: number}> = ({x, y, w, k, t, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const a: Wave = {amplitude: 18, wavelength: w / 2, period: 1};
	const b: Wave = {amplitude: 18, wavelength: w / 2, period: 1, phase: -2 * Math.PI * k};
	return (
		<g opacity={opacity}>
			<rect x={x - 10} y={y - 40} width={w + 20} height={210} rx={10} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2} />
			<LineWave x0={x} x1={x + w} y={y} waves={[a]} t={t} color={TEAL.stroke} width={4} />
			<LineWave x0={x} x1={x + w} y={y + 50} waves={[b]} t={t} color={PLUM.stroke} width={4} />
			<LineWave x0={x} x1={x + w} y={y + 120} waves={[a, b]} t={t} color={INK} width={5} />
		</g>
	);
};
export const WhiteBands: React.FC<{x: number; y: number; w: number; h: number; mm: number; d: number; L: number; opacity?: number}> = ({x, y, w, h, mm, d, L, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const n = 220, lams = [440e-9, 490e-9, 540e-9, 590e-9, 650e-9];
	return (
		<g opacity={opacity}>
			<rect x={x} y={y} width={w} height={h} rx={8} fill="#171412" />
			<g style={{mixBlendMode: 'screen'}}>
				{lams.map(l => <g key={l}>{Array.from({length: n}, (_, i) => { const u = -1 + (2 * (i + 0.5)) / n; const v = twoSlit(u * mm * 1e-3, d, l, L); return v < 0.03 ? null : <rect key={i} x={x + (w * i) / n} y={y + 4} width={w / n + 0.8} height={h - 8} fill={wlColor(l * 1e9)} opacity={0.55 * v} />; })}</g>)}
			</g>
			<rect x={x} y={y} width={w} height={h} rx={8} fill="none" stroke={INK} strokeWidth={3} />
		</g>
	);
};
export type {Pt};
export const ORANGE_STROKE = TONES.amber.stroke;
