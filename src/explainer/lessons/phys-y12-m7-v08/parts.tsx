// Lesson parts for phys-y12-m7-v08: the colour roles, the filter stage (the painted bench with the lamp or laser,
// painted slide holders holding coded filter discs, the painted light sensor, orange intensity bars standing on the
// rail between the components and face-on filter insets above the holders), the end-on E-arrow view, and v07's parts
// re-exported.
// Colour key (design, Revision 2): E field blue (passed component solid, absorbed component dashed and fading);
// transmission axes navy lines on grey discs; intensity bars orange; angles navy arcs; the laser beam red and the lamp's
// light warm white; answers in dark-ink frames; mistakes slate (root rule R1).
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {INK, TONES} from '../../shared/tokens';
import {LAMP, LIGHT_PLATES} from '../../physics/light/plates';
import {EArrow, FilterFace, IBar, PolarBench, polarGeom} from '../../physics/light/polar';
import type {PolarAt} from '../../physics/light/polar';
import {hash01} from '../../physics/light/em';
import {Arc, GREY, Lbl, NAVY, ORANGE, RED, RED_INK, ROSE, SLATE, Shrunk, Strip, V07_PLATES, fx, sci} from '../phys-y12-m7-v07/parts';
import type {Pt} from '../phys-y12-m7-v07/parts';

export {Arc, EArrow, FilterFace, GREY, IBar, Lbl, NAVY, ORANGE, RED, RED_INK, ROSE, SLATE, Shrunk, Strip, fx, sci};
export type {Pt};
export const V08_PLATES = [...new Set([...V07_PLATES, LAMP.src, ...LIGHT_PLATES.filter(s => s.includes('sensor')), 'assets/physics/phys-y11-protractor-v1.png', 'assets/physics/phys-y11-data-logger-v1.png'])];
export const EBLUE = TONES.blue;
export const LAMP_LIGHT = '#f2d48e';

/** One stage: bench, source, holders with discs, sensor; bars standing on the rail; face-on insets above holders. */
export type Bar = {x: number; v: number; label?: string; o?: number};
export const Stage: React.FC<{b: PolarAt; axes: readonly number[]; holdersO?: readonly number[]; bars?: readonly Bar[]; barH?: number; insets?: number; insetR?: number; insetY?: number; opacity?: number; beamColor?: string; sensor?: boolean; srcO?: number}> = ({b, axes, holdersO, bars = [], barH = 110, insets = 1, insetR = 56, insetY = 230, opacity = 1, beamColor, sensor = true, srcO = 1}) => {
	if (opacity <= 0.001) return null;
	const g = polarGeom(b);
	return (
		<g opacity={opacity}>
			<PolarBench b={b} axes={axes} axisColor={NAVY.stroke} beamColor={beamColor ?? (b.source === 'laser' ? RED : LAMP_LIGHT)} holdersO={holdersO} sensor={sensor} srcO={srcO} />
			{bars.map((r, i) => <IBar key={i} x={r.x} base={g.railY - 4} h={barH * r.v} w={30} color={ORANGE.stroke} opacity={r.o ?? 1} />)}
			{insets > 0.001 ? b.holders.map((hx, i) => (holdersO?.[i] ?? 1) <= 0.001 ? null : <g key={i} opacity={insets * (holdersO?.[i] ?? 1)}>
				<line x1={g.windows[i].x} y1={g.windows[i].y} x2={hx - insetR * 0.7} y2={insetY + insetR * 0.7} stroke={INK} strokeWidth={2} strokeDasharray="5 6" />
				<line x1={g.windows[i].x + g.windows[i].w} y1={g.windows[i].y} x2={hx + insetR * 0.7} y2={insetY + insetR * 0.7} stroke={INK} strokeWidth={2} strokeDasharray="5 6" />
				<FilterFace cx={hx} cy={insetY} r={insetR} axis={axes[i] ?? 0} axisColor={NAVY.stroke} />
			</g>) : null}
		</g>
	);
};
/** Bar value labels (HTML, so they stay sharp), placed over each bar's top. */
export const BarLabels: React.FC<{b: PolarAt; bars: readonly Bar[]; barH?: number; at?: number; size?: number}> = ({b, bars, barH = 110, at = -30, size = 28}) => {
	const g = polarGeom(b);
	return <>{bars.map((r, i) => r.label && (r.o ?? 1) > 0.5 ? <Lbl key={i} x={r.x} y={g.railY - 16 - barH * r.v - 14} at={at} color={ORANGE.ink} size={size} anchor="middle">{r.label}</Lbl> : null)}</>;
};

/** The end-on view: a ring for the beam's cross-section, a dot for travel towards the viewer, and a blue E arrow. */
export const EndOn: React.FC<{c: Pt; r: number; deg: number; len: number; opacity?: number; ring?: boolean; filter?: {axis: number; o?: number}; comps?: {axis: number; across: number; along?: number}}> = ({c, r, deg, len, opacity = 1, ring = true, filter, comps}) => {
	if (opacity <= 0.001) return null;
	const a = ((deg - (comps?.axis ?? 0)) * Math.PI) / 180;
	const al = len * Math.cos(a), ac = len * Math.sin(a);
	return (
		<g opacity={opacity}>
			{ring ? <circle cx={c[0]} cy={c[1]} r={r} fill="#cfe1f3" stroke="rgba(60,45,20,0.25)" strokeWidth={3} /> : null}
			{filter ? <FilterFace cx={c[0]} cy={c[1]} r={r * 0.94} axis={filter.axis} axisColor={NAVY.stroke} opacity={filter.o ?? 1} width={8} /> : null}
			{comps ? <>
				<EArrow cx={c[0]} cy={c[1]} len={len} deg={deg} color={EBLUE.stroke} width={4} opacity={0.45} />
				<EArrow cx={c[0]} cy={c[1]} len={al} deg={comps.axis} color={EBLUE.stroke} width={8} opacity={comps.along ?? 1} />
				<EArrow cx={c[0]} cy={c[1]} len={ac} deg={comps.axis + 90} color={EBLUE.stroke} width={6} dash="12 9" opacity={comps.across} />
			</> : <EArrow cx={c[0]} cy={c[1]} len={len} deg={deg} color={EBLUE.stroke} width={8} />}
			<circle cx={c[0]} cy={c[1]} r={9} fill={NAVY.stroke} stroke="#fff" strokeWidth={2} />
		</g>
	);
};
/** Unpolarised light: the E direction jumps at random every few frames (deterministic). */
export const randDeg = (f: number, every = 5, seed = 3) => hash01(Math.floor(f / every) + seed) * 180;

/** A small readout box (coded) with a bar and a label. */
export const Readout: React.FC<{x: number; y: number; v: number; label?: string; w?: number; opacity?: number}> = ({x, y, v, label = 'I', w = 220, opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<rect x={x} y={y} width={w} height={120} rx={14} fill="#1d2a24" stroke={INK} strokeWidth={4} />
		<rect x={x + 20} y={y + 78} width={(w - 40) * Math.max(0, Math.min(1, v))} height={20} rx={5} fill="#9fe3b5" />
		<text x={x + w / 2} y={y + 56} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: '#9fe3b5'}}>{label}</text>
	</g>
));
export const SLATE_INK = SLATE.ink;
export {GREY as GREY_ROLE};
export const ROSE_ROLE = ROSE;
export const RED_ROLE = RED_INK;
export const fmtW = (v: number, d = 0) => `${fx(v, d)} W m⁻²`;
