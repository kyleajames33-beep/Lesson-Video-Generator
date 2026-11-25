// Lesson parts for phys-y12-m8-v08: the colour roles (design "Colour key (Revision 2)" with root rule R1), the
// plum-pudding atom, the Rutherford and Thomson scattering stages (paths on the field motion engine), the random-nudge
// zigzag, the cricket oval and v07's parts re-exported.
// Colour key: alpha particles amber circles "α" with amber paths; nuclei small red "+" discs (enlarged, tagged);
// electrons navy; Thomson's positive charge a pale red wash; Coulomb force arrows amber; scale bars and distance r navy;
// angle θ and the arm readout teal; counts ink; mass chips purple; scintillation flashes pale green; answers in dark-ink
// frames; mistakes slate (R1).
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {SCATTER_PLATES, pointRun, runPath, sphereRun} from '../../physics/atom/scattering';
import type {MotionPath} from '../../sims/field-motion';
import {lazy} from '../../sims';
import {ELECTRONS, PINK} from '../phys-y12-m8-v07/s3';
import {AMBER, BLUE, GREEN, GREY, Givens, INK, Lbl, NAVY, NEUTRON, PURPLE, RED, ROSE, Shrunk, Strip, TEAL, V07_PLATES, VIOLET, fx, sci} from '../phys-y12-m8-v07/parts';

export {AMBER, BLUE, GREEN, GREY, Givens, INK, Lbl, NAVY, NEUTRON, PINK, PURPLE, RED, ROSE, Shrunk, Strip, TEAL, VIOLET, fx, sci};
export const V08_PLATES = [...new Set([...V07_PLATES, ...SCATTER_PLATES])];
export const NUC_RED = '#c8443a';
const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color});

// ---------------------------------------------------------------- atoms
/** A plum-pudding atom: a pale red sphere with evenly scattered electrons; `wash` 0 to 1 fills the sphere. */
export const PlumAtom: React.FC<{cx: number; cy: number; r: number; wash?: number; opacity?: number; dots?: number; grey?: number}> = ({cx, cy, r, wash = 1, opacity = 1, dots = 1, grey = 0}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<circle cx={cx} cy={cy} r={r} fill={grey > 0.5 ? '#ddd7cc' : PINK} fillOpacity={wash} stroke={INK} strokeWidth={Math.max(2, r / 60)} />
		{ELECTRONS.map(([dx, dy], i) => <circle key={i} cx={cx + dx * r} cy={cy + dy * r} r={Math.max(3, r / 22)} fill={NAVY.stroke} opacity={dots} />)}
	</g>
));
/** A small enlarged nucleus: a red disc with "+". */
export const NucPlus: React.FC<{x: number; y: number; r?: number; opacity?: number; label?: string}> = ({x, y, r = 12, opacity = 1, label = '+'}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<circle cx={x} cy={y} r={r} fill={NUC_RED} stroke={INK} strokeWidth={2} />
		{r >= 10 ? <text x={x} y={y + r * 0.42} textAnchor="middle" style={T(Math.max(18, r * 1.2), '#ffffff')}>{label}</text> : null}
	</g>
));
/** An alpha particle: an amber circle with "α". */
export const Alpha: React.FC<{x: number; y: number; r?: number; opacity?: number}> = ({x, y, r = 18, opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}><circle cx={x} cy={y} r={r} fill={AMBER.soft} stroke={AMBER.stroke} strokeWidth={3} />{r >= 14 ? <text x={x} y={y + r * 0.4} textAnchor="middle" style={T(Math.max(18, r * 1.1), AMBER.ink)}>α</text> : null}</g>
));

// ---------------------------------------------------------------- scattering stages (model units, 60 px per unit)
export const KS = 60, KQ = 0.15;
/** Rutherford stage runs: aiming distances (model units) past one nucleus; deflections from 6° to about 165°. */
export const R_BS = [3.0, 2.2, 1.6, 0.85, 0.025] as const;
export const rRuns = lazy((): MotionPath[] => R_BS.map(b => pointRun({b, k: KQ, x0: -7, duration: 14})));
/** Thomson stage runs: the same charge spread through a sphere of radius 2.4 units (deflections exaggerated). */
export const T_BS = [-2.0, -1.2, -0.5, 0.3, 1.0, 1.8] as const;
export const tRuns = lazy((): MotionPath[] => T_BS.map(b => sphereRun({b, k: KQ, R: 2.4, x0: -7, duration: 14})));
/** Large-nucleus stage (the wrong idea): charge spread over radius 1.6 units with a stronger push (illustrative). */
export const bigRuns = lazy((): MotionPath[] => [-1.4, -0.8, -0.3, 0.3, 0.8, 1.4].map(b => sphereRun({b, k: 3.2, R: 1.6, x0: -7, duration: 16})));
export const RunPath: React.FC<{run: MotionPath; cx: number; cy: number; u?: number; color?: string; width?: number; k?: number; opacity?: number}> = ({run, cx, cy, u = 1, color = AMBER.stroke, width = 4, k = KS, opacity = 1}) => (opacity <= 0.001 ? null : <path d={runPath(run, cx, cy, k, u)} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" opacity={opacity} />);

/** A seeded zigzag of many tiny random nudges from (x0, y) to x1 (amplitude a px), the drift kept small. */
export const zigzag = (x0: number, x1: number, y: number, n = 16, a = 14, seed = 3) => {
	let s = seed, yy = y;
	const pts: string[] = [`M${x0},${y}`];
	for (let i = 1; i <= n; i++) { s = (s * 9301 + 49297) % 233280; const r = s / 233280 - 0.5; yy += r * 2 * a; yy = y + (yy - y) * 0.7; pts.push(`L${(x0 + ((x1 - x0) * i) / n).toFixed(1)},${yy.toFixed(1)}`); }
	return pts.join(' ');
};

// ---------------------------------------------------------------- the cricket oval
/** A coded top-down cricket oval (grass ellipse, boundary rope and pitch strip; no players). */
export const Oval: React.FC<{cx: number; cy: number; rx: number; ry: number; opacity?: number}> = ({cx, cy, rx, ry, opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="#bfe0a6" stroke="#5f8f4a" strokeWidth={4} />
		<ellipse cx={cx} cy={cy} rx={rx - 14} ry={ry - 14} fill="none" stroke="#ffffff" strokeWidth={3} strokeDasharray="10 8" />
		<rect x={cx - 10} y={cy - ry * 0.28} width={20} height={ry * 0.56} fill="#e3d2a4" stroke="#b79c62" strokeWidth={2} />
	</g>
));
