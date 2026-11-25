// Lesson parts for phys-y12-m8-v10: the colour roles (design "Colour key (Revision 2)" with root rule R1), the painted
// discharge tube with its coded glow, spectrum strips (a hydrogen line strip in true colours; the predicted smear with
// grey UV and IR bands), a coded atom (nucleus and electron), rose wavelets, the classical spiral (field motion
// engine, kit `spiralRun`) and v09's parts re-exported.
// Colour key: electrons navy; nucleus red; accelerating charges rose (arrows and wavelets); photons and lines in true
// colours (656 red, 486 cyan, 434 blue-violet, 410 violet, 397 deep violet), infrared and ultraviolet grey bands; time
// and the collapse clock grey; radius and orbit-frequency readouts rose; energy navy; the classical side navy and the
// quantum side amber; answers in dark-ink frames; mistakes slate (R1).
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD} from '../../shared/tokens';
import {ANCHOR, LPlate, SPECTRO, TUBE, VCELL, anchorAt} from '../../physics/light/plates';
import type {Place} from '../../physics/light/plates';
import {wlColor} from '../../physics/light/spectrum';
import {Supply, SUPPLY_SRC} from '../../physics/electromagnetism/plates';
import {lazy} from '../../sims';
import {spiralRun} from '../../physics/atom/bohr';
import {AMBER, BLUE, GREEN, GREY, Givens, INK, Lbl, N, NAVY, NEUTRON, NUC_RED, ORANGE, P, PURPLE, RED, ROSE, Shrunk, Strip, TEAL, V09_PLATES, fx, sci} from '../phys-y12-m8-v09/parts';

export {AMBER, BLUE, GREEN, GREY, Givens, INK, Lbl, N, NAVY, NEUTRON, NUC_RED, ORANGE, P, PURPLE, RED, ROSE, Shrunk, Strip, TEAL, fx, sci};
export const V10_PLATES = [...new Set([...V09_PLATES, TUBE.src, SPECTRO.src, VCELL.src, SUPPLY_SRC])];
const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color, paintOrder: 'stroke', stroke: CARD, strokeWidth: 6, strokeLinejoin: 'round'} as React.CSSProperties);
export const GLOW_PINK = '#ff7fb0';

// ---------------------------------------------------------------- the discharge tube
/** The painted tube (placed by height) with a coded pink glow on its capillary (`glow` 0 to 1). */
export const GlowTube: React.FC<{x: number; y: number; h: number; glow?: number; opacity?: number}> = ({x, y, h, glow = 1, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const w = (h * (TUBE.box[2] - TUBE.box[0])) / (TUBE.box[3] - TUBE.box[1]);
	const p: Place = {x, y, w};
	const c0 = anchorAt(TUBE, p, ANCHOR.tubeCap[0], ANCHOR.tubeCap[1]), c1 = anchorAt(TUBE, p, ANCHOR.tubeCap[0], ANCHOR.tubeCap[2]);
	return (
		<g opacity={opacity}>
			<LPlate spec={TUBE} p={p} />
			{glow > 0.001 ? <rect x={c0[0] - Math.max(5, w * 0.03)} y={c0[1]} width={2 * Math.max(5, w * 0.03)} height={c1[1] - c0[1]} rx={6} fill={GLOW_PINK} opacity={0.5 * glow} /> : null}
		</g>
	);
};
export const tubeW = (h: number) => (h * (TUBE.box[2] - TUBE.box[0])) / (TUBE.box[3] - TUBE.box[1]);
export {LPlate, SPECTRO, Supply, VCELL};

// ---------------------------------------------------------------- spectrum strips
/** A black strip (wavelength-linear from nm0 to nm1) with bright lines in true colours. */
export const LineStrip: React.FC<{x: number; y: number; w: number; h: number; lines: readonly number[]; strengths?: readonly number[]; nm0?: number; nm1?: number; lineW?: number; opacity?: number; labels?: readonly string[]; size?: number; reveal?: number}> = ({x, y, w, h, lines, strengths, nm0 = 380, nm1 = 750, lineW = 7, opacity = 1, labels, size = 26, reveal = 1}) => {
	if (opacity <= 0.001) return null;
	const X = (nm: number) => x + ((nm - nm0) / (nm1 - nm0)) * w;
	return (
		<g opacity={opacity}>
			<rect x={x} y={y} width={w} height={h} fill="#14110f" stroke={INK} strokeWidth={3} />
			{lines.map((nm, i) => i < Math.ceil(lines.length * reveal) ? <rect key={i} x={X(nm) - lineW / 2} y={y + 3} width={lineW} height={h - 6} fill={wlColor(nm)} opacity={strengths?.[i] ?? 1} /> : null)}
			{labels ? lines.map((nm, i) => labels[i] ? <text key={`t${i}`} x={X(nm)} y={y + h + size + 6} textAnchor="middle" style={T(size, INK)}>{labels[i]}</text> : null) : null}
		</g>
	);
};
export const stripX = (x: number, w: number, nm: number, nm0 = 380, nm1 = 750) => x + ((nm - nm0) / (nm1 - nm0)) * w;
/** The predicted classical smear: visible 380 to 750 nm in true colours from `fromNm` up to 750 nm, with grey UV (left)
 *  and IR (right) bands; `uv` and `ir` (0 to 1) fill the bands as the sweep runs on. */
export const SmearStrip: React.FC<{x: number; y: number; w: number; h: number; band: number; fromNm: number; uv?: number; ir?: number; opacity?: number; size?: number}> = ({x, y, w, h, band, fromNm, uv = 0, ir = 0, opacity = 1, size = 26}) => {
	if (opacity <= 0.001) return null;
	const N = 60, from = Math.max(380, Math.min(750, fromNm));
	return (
		<g opacity={opacity}>
			<rect x={x - band} y={y} width={band} height={h} fill={CARD} stroke={GREY.stroke} strokeWidth={2.5} />
			<rect x={x + w} y={y} width={band} height={h} fill={CARD} stroke={GREY.stroke} strokeWidth={2.5} />
			<rect x={x - band * uv} y={y} width={band * uv} height={h} fill="#b9b2a6" />
			<rect x={x + w} y={y} width={band * ir} height={h} fill="#b9b2a6" />
			<rect x={x} y={y} width={w} height={h} fill={CARD} />
			{Array.from({length: N}, (_, i) => { const nm = 380 + ((370 * (i + 0.5)) / N); return nm >= from ? <rect key={i} x={x + (w * i) / N} y={y} width={w / N + 1} height={h} fill={wlColor(nm)} /> : null; })}
			<rect x={x} y={y} width={w} height={h} fill="none" stroke={INK} strokeWidth={3} />
			<text x={x - band / 2} y={y + h / 2 + size * 0.35} textAnchor="middle" style={T(size, GREY.ink)}>UV</text>
			<text x={x + w + band / 2} y={y + h / 2 + size * 0.35} textAnchor="middle" style={T(size, GREY.ink)}>IR</text>
		</g>
	);
};

// ---------------------------------------------------------------- the atom and its radiation
/** A red nucleus with "+" (enlarged). */
export const Nucleus: React.FC<{x: number; y: number; r?: number; opacity?: number}> = ({x, y, r = 22, opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}><circle cx={x} cy={y} r={r} fill={NUC_RED} stroke={INK} strokeWidth={2.5} /><text x={x} y={y + r * 0.42} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: Math.max(20, r * 1.2), fill: '#ffffff'}}>+</text></g>
));
export const Elec: React.FC<{x: number; y: number; r?: number; opacity?: number}> = ({x, y, r = 16, opacity = 1}) => (opacity <= 0.001 ? null : <circle cx={x} cy={y} r={r} fill={NAVY.stroke} stroke="#ffffff" strokeWidth={3} opacity={opacity} />);
/** Rose wavelets spreading from (x, y): `n` rings, phase u (0 to 1 repeating). */
export const Wavelets: React.FC<{x: number; y: number; u: number; n?: number; r0?: number; r1?: number; opacity?: number}> = ({x, y, u, n = 3, r0 = 24, r1 = 110, opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>{Array.from({length: n}, (_, i) => { const p = (u + i / n) % 1; return <circle key={i} cx={x} cy={y} r={r0 + (r1 - r0) * p} fill="none" stroke={ROSE.stroke} strokeWidth={3.5} opacity={0.95 * (1 - p)} />; })}</g>
));

// ---------------------------------------------------------------- the classical spiral (model units: r0 4 = 8 a₀; 0.5 = a₀)
export const SPIRAL = lazy(() => spiralRun({r0: 4, rEnd: 0.5, gamma: 0.02}));
/** Radius in Bohr radii at run sample i. */
export const rA0At = (i: number) => { const s = SPIRAL(); return 2 * Math.hypot(s.x[i], s.y[i]); };
