// Lesson parts for phys-y12-m8-v11: the colour roles (design "Colour key (Revision 2)" with root rule R1), the energy
// ladder with right-hand level labels on leader lines (levels crowd near zero), a wavelength strip with a grey UV band
// below 380 nm, a photon flight from a drop to its line, and v10's parts re-exported.
// Colour key: levels navy; drops and photons in the colour of their line (656 red, 486 cyan, 434 blue-violet, 410 violet,
// 397 and shorter deep violet and faint), UV and IR grey; the series limit a dashed slate edge; ΔE orange; n_i and the
// slider teal; 1/λ and λ ink; answers in dark-ink frames; mistakes slate (R1).
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD} from '../../shared/tokens';
import {wlColor} from '../../physics/light/spectrum';
import {yOf} from '../../physics/atom/bohr';
import type {LevelsGeom} from '../../physics/atom/bohr';
import {AMBER, Elec, GREY, GlowTube, Givens, INK, LPlate, Lbl, LineStrip, NAVY, Nucleus, ORANGE, RED, ROSE, SPECTRO, Shrunk, Strip, Supply, TEAL, V10_PLATES, fx, sci, stripX, tubeW} from '../phys-y12-m8-v10/parts';

export {AMBER, Elec, GREY, GlowTube, Givens, INK, LPlate, Lbl, LineStrip, NAVY, Nucleus, ORANGE, RED, ROSE, SPECTRO, Shrunk, Strip, Supply, TEAL, fx, sci, stripX, tubeW};
export const V11_PLATES = V10_PLATES;
const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color, paintOrder: 'stroke', stroke: CARD, strokeWidth: 6, strokeLinejoin: 'round'} as React.CSSProperties);
/** Colour of a line (true colour inside 380 to 750 nm; grey outside, faint deep violet below 400 nm). */
export const lineColor = (nm: number) => (nm < 380 || nm > 750 ? '#8a8378' : wlColor(nm));

/** Right-hand level labels on leader lines: each label sits at its slot y, joined to its level's line end. */
export const LevelTags: React.FC<{g: LevelsGeom; tags: readonly {n: number; text: string; y: number; o?: number; color?: string}[]; size?: number; gap?: number}> = ({g, tags, size = 28, gap = 70}) => (
	<g>
		{tags.map(t => { const o = t.o ?? 1; if (o <= 0.001) return null; const yl = yOf(g, t.n), x0 = g.x + g.w; return <g key={t.n} opacity={o}>
			<polyline points={`${x0 + 6},${yl} ${x0 + gap * 0.5},${yl} ${x0 + gap - 8},${t.y}`} fill="none" stroke={t.color ?? NAVY.stroke} strokeWidth={2} />
			<text x={x0 + gap} y={t.y + size * 0.35} style={T(size, t.color ?? NAVY.ink)}>{t.text}</text>
		</g>; })}
	</g>
);

/** A wavelength strip from nm0 to nm1 (black, lines bright) with a grey UV band below 380 nm. */
export const UvStrip: React.FC<{x: number; y: number; w: number; h: number; nm0: number; nm1: number; lines: readonly number[]; strengths?: readonly number[]; opacity?: number; lineW?: number}> = ({x, y, w, h, nm0, nm1, lines, strengths, opacity = 1, lineW = 7}) => {
	if (opacity <= 0.001) return null;
	const X = (nm: number) => x + ((nm - nm0) / (nm1 - nm0)) * w;
	return (
		<g opacity={opacity}>
			<rect x={x} y={y} width={w} height={h} fill="#14110f" stroke={INK} strokeWidth={3} />
			{nm0 < 380 ? <rect x={x} y={y} width={X(380) - x} height={h} fill="#5d5850" /> : null}
			{lines.map((nm, i) => <rect key={i} x={X(nm) - lineW / 2} y={y + 3} width={lineW} height={h - 6} fill={nm < 380 ? '#d8d2c6' : wlColor(nm)} opacity={strengths?.[i] ?? 1} />)}
			{nm0 < 380 ? <text x={x + 8} y={y + h + 30} style={T(26, GREY.ink)}>UV</text> : null}
		</g>
	);
};
export const uvX = (x: number, w: number, nm0: number, nm1: number, nm: number) => x + ((nm - nm0) / (nm1 - nm0)) * w;
