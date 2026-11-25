// Module 8 kit, part 2: stellar spectra and the HR diagram (additive kit file, 25 November 2026; first used by
// phys-y12-m8-v02 to v04). Course-neutral: every label, number and colour of meaning comes from the lesson.
// - StarCurve: a black-body intensity curve (exact Planck shape) on a linear wavelength axis aligned with a spectrum
//   strip, with narrow absorption dips (gaussian) at given wavelengths.
// - classOf / CLASS_RANGES / CLASS_SWATCH: the spectral classes O to M with approximate temperature ranges (M below about
//   3500 K, the course's root decision) and their star colours.
// - HR geometry: a log-luminosity, reversed log-temperature box (hrX, hrY), the main-sequence relation used for the band,
//   lines of equal radius from L ∝ R²T⁴ (radiusOf, radiusLineL) and HRAxes with ticks, the class letters and a colour band.
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {INK} from '../../shared/tokens';
import {planck} from '../../sims/blackbody';

const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color});

export type CurveGeom = {x: number; y: number; w: number; h: number; nm0: number; nm1: number};
export type Dip = {nm: number; depth: number; width?: number};
const nmToX = (g: CurveGeom, nm: number) => g.x + ((nm - g.nm0) / (g.nm1 - g.nm0)) * g.w;
/** Path of the intensity curve at temperature T (normalised so its largest value in [nm0, nm1] or `ref` fills h) with dips. */
export const starCurvePath = (g: CurveGeom, temp: number, dips: readonly Dip[] = [], ref?: number, draw = 1) => {
	const n = 240, top = ref ?? Math.max(...Array.from({length: 61}, (_, i) => planck((g.nm0 + ((g.nm1 - g.nm0) * i) / 60) * 1e-9, temp)));
	const pts: string[] = [];
	for (let i = 0; i <= n * Math.max(0, Math.min(1, draw)); i++) {
		const nm = g.nm0 + ((g.nm1 - g.nm0) * i) / n;
		let v = planck(nm * 1e-9, temp) / top;
		for (const d of dips) v *= 1 - d.depth * Math.exp(-0.5 * ((nm - d.nm) / (d.width ?? 2.2)) ** 2);
		pts.push(`${i ? 'L' : 'M'}${nmToX(g, nm).toFixed(1)},${(g.y + g.h - Math.min(1.05, v) * g.h).toFixed(1)}`);
	}
	return pts.join(' ');
};
export const StarCurve: React.FC<{g: CurveGeom; temp: number; dips?: readonly Dip[]; color?: string; width?: number; draw?: number; ref?: number; opacity?: number; dash?: string}> = ({g, temp, dips = [], color = INK, width = 5, draw = 1, ref, opacity = 1, dash}) => (opacity <= 0.001 ? null : <path d={starCurvePath(g, temp, dips, ref, draw)} fill="none" stroke={color} strokeWidth={width} strokeLinejoin="round" opacity={opacity} strokeDasharray={dash} />);

// ---------------------------------------------------------------- spectral classes
export const CLASSES = ['O', 'B', 'A', 'F', 'G', 'K', 'M'] as const;
/** Approximate class ranges in kelvin (learner copy says "approximate"; M below about 3500 K). */
export const CLASS_RANGES: Record<(typeof CLASSES)[number], readonly [number, number]> = {O: [30000, 60000], B: [10000, 30000], A: [7500, 10000], F: [6000, 7500], G: [5200, 6000], K: [3500, 5200], M: [2000, 3500]};
export const CLASS_RANGE_TEXT: Record<(typeof CLASSES)[number], string> = {O: '> 30 000 K', B: '10 000 to 30 000 K', A: '7500 to 10 000 K', F: '6000 to 7500 K', G: '5200 to 6000 K', K: 'about 3500 to 5200 K', M: 'below about 3500 K'};
/** Star colours by class (blue to orange-red). */
export const CLASS_SWATCH: Record<(typeof CLASSES)[number], string> = {O: '#6f93e8', B: '#a9c2f2', A: '#f4f6fb', F: '#fbf3d6', G: '#fbe7a1', K: '#f6b36a', M: '#e9774a'};
export const classOf = (temp: number) => CLASSES.find(c => temp >= CLASS_RANGES[c][0]) ?? 'M';
/** Star colour for a temperature (by class). */
export const starColour = (temp: number) => CLASS_SWATCH[classOf(temp)];

// ---------------------------------------------------------------- the HR diagram
export type HRBox = {x: number; y: number; w: number; h: number; tHot: number; tCool: number; lLo: number; lHi: number};
/** Screen x of temperature T (log scale, hot on the left). */
export const hrX = (b: HRBox, temp: number) => b.x + ((Math.log10(b.tHot) - Math.log10(temp)) / (Math.log10(b.tHot) - Math.log10(b.tCool))) * b.w;
/** Screen y of luminosity L (in L☉, log scale). */
export const hrY = (b: HRBox, lum: number) => b.y + b.h - ((Math.log10(lum) - b.lLo) / (b.lHi - b.lLo)) * b.h;
/** Radius in R☉ from L ∝ R²T⁴ (T☉ = 5772 K). */
export const radiusOf = (temp: number, lum: number, tSun = 5772) => Math.sqrt(lum) * (tSun / temp) ** 2;
/** Luminosity on the line of radius R at temperature T. */
export const radiusLineL = (temp: number, R: number, tSun = 5772) => R * R * (temp / tSun) ** 4;
/** Schematic main-sequence luminosity at temperature T (L☉): through the Sun (5800 K, 1), 0.10 at 4000 K, about 0.002 at 3000 K and about 2 × 10⁵ at 40 000 K. */
export const msLum = (temp: number) => {
	const lt = Math.log10(temp / 5800);
	return 10 ** (lt >= 0 ? 6.3 * lt : 2.01 * lt - 25.9 * lt * lt);
};
/** The axes: ticks, labels, class letters and the colour band along the top. */
export const HRAxes: React.FC<{b: HRBox; tTicks: readonly number[]; lTicks: readonly number[]; lLabel?: (e: number) => string; tLabel?: (t: number) => string; letters?: number; band?: number; size?: number; xTitle?: string; yTitle?: string; opacity?: number}> = ({b, tTicks, lTicks, lLabel = e => (e === 0 ? '1' : `10${String(e).replace('-', '⁻').replace(/\d/g, d => '⁰¹²³⁴⁵⁶⁷⁸⁹'[+d])}`), tLabel = t => t.toLocaleString('en-AU').replace(/,/g, ' '), letters = 1, band = 1, size = 26, xTitle = 'surface temperature (K)', yTitle = 'luminosity (L☉)', opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<rect x={b.x} y={b.y} width={b.w} height={b.h} fill="none" stroke={INK} strokeWidth={3.5} />
		{tTicks.map(t => <g key={`t${t}`}><line x1={hrX(b, t)} y1={b.y + b.h} x2={hrX(b, t)} y2={b.y + b.h + 10} stroke={INK} strokeWidth={3} /><text x={hrX(b, t)} y={b.y + b.h + 14 + size} textAnchor="middle" style={T(size, INK, 700)}>{tLabel(t)}</text></g>)}
		{lTicks.map(e => <g key={`l${e}`}><line x1={b.x - 10} y1={hrY(b, 10 ** e)} x2={b.x} y2={hrY(b, 10 ** e)} stroke={INK} strokeWidth={3} /><text x={b.x - 16} y={hrY(b, 10 ** e) + size * 0.35} textAnchor="end" style={T(size, INK, 700)}>{lLabel(e)}</text></g>)}
		<text x={b.x + b.w} y={b.y + b.h + 2 * size + 26} textAnchor="end" style={T(size + 2, INK)}>{xTitle}</text>
		<text x={b.x - 14} y={b.y - 16} textAnchor="end" style={T(size + 2, INK)}>{yTitle}</text>
		{band > 0.001 ? <g opacity={band}>{Array.from({length: 40}, (_, i) => { const lt = Math.log10(b.tHot) - ((Math.log10(b.tHot) - Math.log10(b.tCool)) * (i + 0.5)) / 40; return <rect key={i} x={b.x + (b.w * i) / 40} y={b.y - 22} width={b.w / 40 + 0.8} height={18} fill={starColour(10 ** lt)} />; })}<rect x={b.x} y={b.y - 22} width={b.w} height={18} fill="none" stroke={INK} strokeWidth={2} /></g> : null}
		{letters > 0.001 ? <g opacity={letters}>{CLASSES.map(c => { const [lo, hi] = CLASS_RANGES[c]; const mid = Math.sqrt(Math.max(lo, b.tCool) * Math.min(hi, b.tHot)); return <text key={c} x={hrX(b, mid)} y={b.y - 32} textAnchor="middle" style={T(size + 4, INK)}>{c}</text>; })}</g> : null}
	</g>
));
