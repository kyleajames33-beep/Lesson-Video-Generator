// Lesson parts for phys-y12-m8-v14: the colour roles (design "Colour key (Revision 2)" with root rule R1), the painted
// sealed source, Geiger counter and absorbers placed on one beam line, nuclear equations with A and Z tallies, a
// small schematic N against Z chart with stepping markers, particle markers and v13's parts re-exported.
// Colour key: protons red "p"; neutrons grey "n"; alpha particles amber "α"; beta-minus electrons navy "e⁻"; positrons
// hollow rose "e⁺"; neutrinos and antineutrinos small grey; gamma photons amber packets; ionised atoms grey with "+";
// A tallies ink, Z tallies red; the count display slate; answers in dark-ink frames; mistakes slate (R1).
import React from 'react';
import {placeOf} from '../../physics/light/plates';
import type {Place} from '../../physics/light/plates';
import {Packet} from '../../physics/light/photo';
import {NucEq} from '../../physics/atom/nuclear';
import type {NucTerm} from '../../physics/atom/nuclear';
import {Anti} from '../../physics/atom/universe';
import {DECAY_AT, GEIGER, NZChart, SEALED, bandN, nzX, nzY} from '../../physics/atom/decay';
import type {NZBoxG} from '../../physics/atom/decay';
import type {LightSpec} from '../../physics/light/plates';
import {Alpha} from '../phys-y12-m8-v08/parts';
import {AMBER, GREEN_C, GREY, Givens, INK, LPlate, Lbl, NAVY, NEUTRON, NUC_RED, Nucleus, ORANGE, RED, ROSE, Shrunk, Strip, T, TEAL, V13_PLATES, fx, sci} from '../phys-y12-m8-v13/parts';
import type {Nuc} from './common';

export {Alpha, AMBER, GREEN_C, GREY, Givens, INK, LPlate, Lbl, NAVY, NEUTRON, NUC_RED, Nucleus, ORANGE, RED, ROSE, Shrunk, Strip, T, TEAL, fx, sci};
export const V14_PLATES = V13_PLATES;
/** Screen point of a native anchor on a plate placed at p. */
export const pt = (spec: LightSpec, p: Place, a: readonly [number, number] | readonly number[]): [number, number] => placeOf(spec, p).at(a[0], a[1]);
export const srcWin = (p: Place) => pt(SEALED, p, DECAY_AT.window);
export const tubeWin = (p: Place) => pt(GEIGER, p, DECAY_AT.tube);
export const dispRect = (p: Place): [number, number, number, number] => { const a = pt(GEIGER, p, [DECAY_AT.display[0], DECAY_AT.display[1]]), b = pt(GEIGER, p, [DECAY_AT.display[2], DECAY_AT.display[3]]); return [a[0], a[1], b[0], b[1]]; };
/** A plate placed by its visible width so that native anchor a lands on screen point (sx, sy). */
export const placeAt = (spec: LightSpec, a: readonly [number, number] | readonly number[], sx: number, sy: number, w: number): Place => {
	const s = w / (spec.box[2] - spec.box[0]);
	return {x: sx - (a[0] - spec.box[0]) * s, y: sy - (a[1] - spec.box[1]) * s, w};
};

/** A nuclide term for NucEq. */
export const term = (n: Nuc, color?: string): NucTerm => ({A: n.A, Z: n.Z, s: n.s, color});
export const E_MINUS: NucTerm = {A: 0, Z: '−1', s: 'e'}, E_PLUS: NucTerm = {A: 0, Z: '+1', s: 'e'}, HE: NucTerm = {A: 4, Z: 2, s: 'He'};
export {NucEq};
/** An equation chip (HTML) in a dark-ink frame once `framed`. */
export const EqBox: React.FC<{terms: readonly NucTerm[]; size?: number; framed?: boolean}> = ({terms, size = 52, framed = false}) => (
	<span style={{display: 'inline-block', padding: '4px 18px', background: '#fffdf8', border: `4.5px solid ${framed ? INK : 'transparent'}`, borderRadius: 12}}><NucEq terms={terms} size={size} /></span>
);

/** The small schematic N against Z chart used in scenes 2 to 7 (marker steps drawn three times larger, tagged). */
export const MINI: NZBoxG = {x: 1470, y: 230, w: 360, h: 260, zMax: 100, nMax: 160};
export const MARKS = {big: {Z: 92, N: 146}, nRich: {Z: 30, N: 46}, pRich: {Z: 42, N: 40}, excited: {Z: 62, N: 87}} as const;
/** Marker position after a decay step (dz, dn) drawn three times larger than one unit (schematic). */
export const stepTo = (m: {Z: number; N: number}, dz: number, dn: number, u: number) => ({Z: m.Z + 3 * dz * u, N: m.N + 3 * dn * u});
export const MiniChart: React.FC<{b?: NZBoxG; marker?: {Z: number; N: number; color: string; o?: number}[]; size?: number; opacity?: number; arrow?: {from: {Z: number; N: number}; to: {Z: number; N: number}; color: string; o: number}}> = ({b = MINI, marker = [], size = 26, opacity = 1, arrow}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<NZChart b={b} color="#cfc8ba" ink={GREY.ink} size={size} />
		{arrow && arrow.o > 0.001 ? <line x1={nzX(b, arrow.from.Z)} y1={nzY(b, arrow.from.N)} x2={nzX(b, arrow.from.Z + (arrow.to.Z - arrow.from.Z) * arrow.o)} y2={nzY(b, arrow.from.N + (arrow.to.N - arrow.from.N) * arrow.o)} stroke={arrow.color} strokeWidth={4} /> : null}
		{marker.map((m, i) => <circle key={i} cx={nzX(b, m.Z)} cy={nzY(b, m.N)} r={9} fill={m.color} stroke="#ffffff" strokeWidth={2.5} opacity={m.o ?? 1} />)}
	</g>
));
export {bandN, nzX, nzY};
/** Graph paper behind a plot (light grid, HSC style). */
export const GraphPaper: React.FC<{x: number; y: number; w: number; h: number; step?: number; opacity?: number}> = ({x, y, w, h, step = 40, opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity} stroke="rgba(60,45,20,0.24)" strokeWidth={2}>
		{Array.from({length: Math.floor(w / step) + 1}, (_, i) => <line key={`v${i}`} x1={x + i * step} y1={y} x2={x + i * step} y2={y + h} />)}
		{Array.from({length: Math.floor(h / step) + 1}, (_, i) => <line key={`h${i}`} x1={x} y1={y + h - i * step} x2={x + w} y2={y + h - i * step} />)}
	</g>
));

/** Particle markers. */
export const Electron: React.FC<{x: number; y: number; r?: number; opacity?: number; label?: boolean}> = ({x, y, r = 16, opacity = 1, label = true}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}><circle cx={x} cy={y} r={r} fill={NAVY.stroke} stroke="#ffffff" strokeWidth={2.5} />{label ? <text x={x + r + 6} y={y + 10} style={T(30, NAVY.ink)}>e⁻</text> : null}</g>
));
export const Positron: React.FC<{x: number; y: number; r?: number; opacity?: number}> = ({x, y, r = 22, opacity = 1}) => <Anti x={x} y={y} r={r} color={ROSE.stroke} text="e⁺" size={24} opacity={opacity} />;
export const Nu: React.FC<{x: number; y: number; text?: string; opacity?: number}> = ({x, y, text = 'ν', opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}><circle cx={x} cy={y} r={10} fill={GREY.stroke} stroke="#fffdf8" strokeWidth={2} /><text x={x + 16} y={y + 10} style={T(32, GREY.ink)}>{text}</text></g>
));
export const Gamma: React.FC<{x: number; y: number; deg?: number; len?: number; opacity?: number; label?: string}> = ({x, y, deg = 0, len = 70, opacity = 1, label}) => <Packet x={x} y={y} deg={deg} len={len} color={AMBER.stroke} opacity={opacity} label={label} size={28} />;
/** An alpha particle drawn as two protons and two neutrons in an amber ring. */
export const AlphaGroup: React.FC<{x: number; y: number; r?: number; opacity?: number}> = ({x, y, r = 14, opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<circle cx={x} cy={y} r={r * 2.6} fill={AMBER.soft} stroke={AMBER.stroke} strokeWidth={3.5} />
		{[[-1, -1, NUC_RED], [1, 1, NUC_RED], [1, -1, NEUTRON], [-1, 1, NEUTRON]].map(([dx, dy, c], i) => <circle key={i} cx={x + (dx as number) * r * 0.95} cy={y + (dy as number) * r * 0.95} r={r} fill={c as string} stroke={INK} strokeWidth={1.5} />)}
	</g>
));
