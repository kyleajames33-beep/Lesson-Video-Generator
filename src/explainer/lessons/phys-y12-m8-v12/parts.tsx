// Lesson parts for phys-y12-m8-v12: the colour roles (design "Colour key (Revision 2)" with root rule R1), a vertical
// log size ladder, a navy matter wave behind a moving dot, the Davisson and Germer schematic (gun, crystal, detector
// arm), the painted electron diffraction tube and v11's parts re-exported.
// Colour key: electrons navy dots and navy waves; light and photons amber; crystal atoms grey; diffraction peaks and
// bright rings teal; momentum arrows teal; the orbit dashed ink with the navy standing wave; voltage slate; the steel
// ball grey; answers in dark-ink frames; mistakes slate (R1); agreement tick green.
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD} from '../../shared/tokens';
import {STEEL_BALL} from '../../physics/light/frames';
import {LPlate, placeOf} from '../../physics/light/plates';
import type {Place} from '../../physics/light/plates';
import {DIFF_AT, DIFF_TUBE, MATTER_PLATES} from '../../physics/atom/matterwave';
import {WaveLine} from '../../physics/atom/universe';
import {AMBER, Elec, GREY, Givens, INK, Lbl, NAVY, Nucleus, ORANGE, RED, ROSE, Shrunk, Strip, Supply, TEAL, V11_PLATES, fx, sci} from '../phys-y12-m8-v11/parts';

export {AMBER, Elec, GREY, Givens, INK, LPlate, Lbl, NAVY, Nucleus, ORANGE, RED, ROSE, STEEL_BALL, Shrunk, Strip, Supply, TEAL, fx, sci};
export const V12_PLATES = [...new Set([...V11_PLATES, ...MATTER_PLATES, STEEL_BALL.src])];
export const GREEN_C = {ink: '#287347', stroke: '#2e7d4f'};
const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color, paintOrder: 'stroke', stroke: CARD, strokeWidth: 6, strokeLinejoin: 'round'} as React.CSSProperties);

/** The painted diffraction tube and its anchors at a placement. */
export const Tube: React.FC<{p: Place; opacity?: number}> = ({p, opacity = 1}) => <LPlate spec={DIFF_TUBE} p={p} opacity={opacity} />;
export const tubeAt = (p: Place, k: keyof typeof DIFF_AT) => placeOf(DIFF_TUBE, p).at(DIFF_AT[k][0], DIFF_AT[k][1]);
export const tubeH = (w: number) => (w * (DIFF_TUBE.box[3] - DIFF_TUBE.box[1])) / (DIFF_TUBE.box[2] - DIFF_TUBE.box[0]);

/** A vertical log size ladder (metres) from 10^hi at the top to 10^lo at the bottom, with labelled marks. */
export type SizeMark = {v: number; label: string; color?: string; o?: number; side?: 'left' | 'right'};
export const sizeY = (y0: number, y1: number, lo: number, hi: number, v: number) => y0 + ((hi - Math.log10(v)) / (hi - lo)) * (y1 - y0);
export const SizeLadder: React.FC<{x: number; y0: number; y1: number; lo: number; hi: number; marks: readonly SizeMark[]; opacity?: number; size?: number}> = ({x, y0, y1, lo, hi, marks, opacity = 1, size = 26}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<line x1={x} y1={y0} x2={x} y2={y1} stroke={INK} strokeWidth={4} />
		{marks.map((m, i) => { const o = m.o ?? 1; if (o <= 0.001) return null; const y = sizeY(y0, y1, lo, hi, m.v), right = m.side !== 'left'; return <g key={i} opacity={o}>
			<line x1={x - 14} y1={y} x2={x + 14} y2={y} stroke={m.color ?? INK} strokeWidth={4} />
			<text x={right ? x + 24 : x - 24} y={y + size * 0.35} textAnchor={right ? 'start' : 'end'} style={T(size, m.color ?? INK)}>{m.label}</text>
		</g>; })}
	</g>
));

/** A navy dot moving right with a teal momentum arrow (length ∝ p) and its matter wave (wavelength ∝ 1/p) behind it. */
export const MatterDot: React.FC<{x: number; y: number; p: number; phase?: number; opacity?: number; wave?: number; len?: number}> = ({x, y, p, phase = 0, opacity = 1, wave = 1, len = 360}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<WaveLine x0={x - len} x1={x - 20} y={y} lambda={130 / p} amp={22} color={NAVY.stroke} width={4} phase={phase} opacity={wave} />
		<circle cx={x} cy={y} r={16} fill={NAVY.stroke} stroke="#ffffff" strokeWidth={3} />
		<line x1={x + 20} y1={y} x2={x + 20 + 60 * p} y2={y} stroke={TEAL.stroke} strokeWidth={7} />
		<path d={`M${x + 34 + 60 * p},${y} l-18,-11 l0,22 Z`} fill={TEAL.stroke} />
	</g>
));

/** The Davisson and Germer schematic: gun above the crystal (normal incidence), the detector on an arm about O. */
export type DG = {ox: number; oy: number; arm: number; s: number};
export const DGSchematic: React.FC<{g: DG; theta: number; beam?: number; t?: number; opacity?: number; labels?: boolean}> = ({g, theta, beam = 1, t = 0, opacity = 1, labels = true}) => {
	if (opacity <= 0.001) return null;
	const s = g.s, gy = g.oy - g.arm - 40 * s, th = (theta * Math.PI) / 180;
	const dx = g.ox + g.arm * Math.sin(th), dy = g.oy - g.arm * Math.cos(th);
	return (
		<g opacity={opacity}>
			<rect x={g.ox - g.arm - 80 * s} y={gy - 90 * s} width={2 * g.arm + 160 * s} height={g.oy - gy + 200 * s} rx={20} fill="none" stroke={GREY.stroke} strokeWidth={3} strokeDasharray="12 8" />
			<rect x={g.ox - 34 * s} y={gy - 70 * s} width={68 * s} height={90 * s} rx={8} fill="#cfcac2" stroke={INK} strokeWidth={3} />
			<rect x={g.ox - 150 * s} y={g.oy} width={300 * s} height={70 * s} rx={6} fill="#bdb6aa" stroke={INK} strokeWidth={3} />
			<path d={`M${g.ox + g.arm * Math.sin(-0.1)},${g.oy - g.arm * Math.cos(-0.1)} A${g.arm},${g.arm} 0 0 1 ${g.ox + g.arm},${g.oy}`} fill="none" stroke="rgba(60,45,20,0.35)" strokeWidth={3} strokeDasharray="8 8" />
			<line x1={g.ox} y1={g.oy} x2={dx} y2={dy} stroke={INK} strokeWidth={4} />
			<rect x={dx - 26 * s} y={dy - 18 * s} width={52 * s} height={36 * s} rx={6} fill="#8a8378" stroke={INK} strokeWidth={3} transform={`rotate(${theta} ${dx} ${dy})`} />
			{beam > 0.001 ? Array.from({length: 4}, (_, i) => { const u = ((t / 30 + i / 4) % 1); return <circle key={i} cx={g.ox} cy={gy + 20 * s + (g.oy - gy - 20 * s) * u} r={6 * Math.max(0.7, s)} fill={NAVY.stroke} opacity={beam} />; }) : null}
			{labels ? <>
				<text x={g.ox - 50 * s} y={gy - 30 * s} textAnchor="end" style={T(Math.max(26, 28 * s), INK)}>electron gun</text>
				<text x={g.ox} y={g.oy + 70 * s + 34} textAnchor="middle" style={T(Math.max(26, 28 * s), INK)}>nickel crystal</text>
				<text x={dx + 40 * s} y={dy - 10} style={T(Math.max(26, 28 * s), INK)}>detector</text>
				<text x={g.ox - g.arm - 70 * s} y={g.oy + 180 * s} style={T(26, GREY.ink)}>vacuum</text>
			</> : null}
		</g>
	);
};
