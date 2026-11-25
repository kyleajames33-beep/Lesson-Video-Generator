// Lesson parts for phys-y12-m8-v02: the colour roles (design "Colour key (Revision 2)" with root rule R1), the evidence
// column that gains one tick per line of evidence, the evidence table, a linear plot box for the Hubble graph and the
// supernova light curves, and v01's parts re-exported.
// Colour key: spectra true to wavelength (dark absorption lines); redshift z, λobs and the slider teal; speed v navy;
// distance d and H₀ amber (the graph's line); temperature T red; the CMB curve amber; hydrogen rose, helium grey;
// supernova curves navy (nearby) and red (z = 1); answers in dark-ink frames; mistakes slate (R1).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {CARD, TONES} from '../../shared/tokens';
import {STAR_PLATES} from '../../physics/light/stars';
import {SUN} from '../../physics/light/plates';
import {AMBER, COOL, GLOW, GREY, Givens, INK, Lbl, NAVY, NEUTRON, ORANGE, RED, ROSE, SLATE, Shrunk, Strip, TEAL, V01_PLATES, eFmt, fx, sci} from '../phys-y12-m8-v01/parts';

export {AMBER, COOL, GLOW, GREY, Givens, INK, Lbl, NAVY, NEUTRON, ORANGE, RED, ROSE, SLATE, Shrunk, Strip, TEAL, eFmt, fx, sci};
export const BLUE = TONES.blue;
export const V02_PLATES = [...new Set([...V01_PLATES, ...STAR_PLATES, SUN.src])];

/** The four lines of evidence (short labels). */
export const EVIDENCE = ['redshift grows with distance', 'black-body glow at 2.7 K', 'about a quarter helium', 'distant clocks run slow'] as const;
/** The evidence column at the right: four rows that tick from the given frames (undefined: blank). */
export const EvidenceColumn: React.FC<{x?: number; y?: number; w?: number; ticks: readonly (number | undefined)[]; at?: number; opacity?: number}> = ({x = 1500, y = 180, w = 330, ticks, at = -30, opacity = 1}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14) * opacity;
	if (o <= 0.001) return null;
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, background: CARD, border: '3px solid rgba(60,45,20,0.22)', borderRadius: 16, padding: '8px 14px 10px', boxSizing: 'border-box', fontFamily: FONT_DISPLAY}}>
			<div style={{fontWeight: 800, fontSize: 28, color: INK, marginBottom: 4}}>four tests</div>
			{EVIDENCE.map((e, i) => {
				const t = ticks[i], on = t !== undefined && f >= t, p = t === undefined ? 0 : prog(f, t, 12);
				return <div key={e} style={{display: 'flex', gap: 10, alignItems: 'center', minHeight: 62, borderTop: '2px solid rgba(60,45,20,0.12)'}}>
					<div style={{flex: 'none', width: 34, height: 34, borderRadius: 8, border: `3px solid ${INK}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 28, color: INK}}>{on ? <span style={{opacity: p}}>✓</span> : null}</div>
					<div style={{fontWeight: 700, fontSize: 26, color: on ? INK : GREY.ink, lineHeight: 1.1, opacity: on ? 1 : 0.9}}>{on ? e : '?'}</div>
				</div>;
			})}
		</div>
	);
};

export type PlotBox = {x: number; y: number; w: number; h: number; x0: number; x1: number; y0: number; y1: number};
export const px = (b: PlotBox, v: number) => b.x + ((v - b.x0) / (b.x1 - b.x0)) * b.w;
export const py = (b: PlotBox, v: number) => b.y + b.h - ((v - b.y0) / (b.y1 - b.y0)) * b.h;
const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color});
/** Linear axes with labelled ticks (x below, y left) and axis titles. */
export const PlotAxes: React.FC<{b: PlotBox; xt: readonly number[]; yt: readonly number[]; fx?: (v: number) => string; fy?: (v: number) => string; xl: string; yl: string; size?: number; opacity?: number}> = ({b, xt, yt, fx: fX = v => `${v}`, fy: fY = v => `${v}`, xl, yl, size = 26, opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<line x1={b.x} y1={b.y0 < 0 && b.y1 > 0 ? py(b, 0) : b.y + b.h} x2={b.x + b.w + 14} y2={b.y0 < 0 && b.y1 > 0 ? py(b, 0) : b.y + b.h} stroke={INK} strokeWidth={4} />
		<line x1={b.x} y1={b.y + b.h} x2={b.x} y2={b.y - 14} stroke={INK} strokeWidth={4} />
		{xt.map(v => <g key={`x${v}`}><line x1={px(b, v)} y1={b.y + b.h} x2={px(b, v)} y2={b.y + b.h + 10} stroke={INK} strokeWidth={3} /><text x={px(b, v)} y={b.y + b.h + 16 + size} textAnchor="middle" style={T(size, INK, 700)}>{fX(v)}</text></g>)}
		{yt.map(v => <g key={`y${v}`}><line x1={b.x - 10} y1={py(b, v)} x2={b.x} y2={py(b, v)} stroke={INK} strokeWidth={3} /><text x={b.x - 16} y={py(b, v) + size * 0.35} textAnchor="end" style={T(size, INK, 700)}>{fY(v)}</text></g>)}
		<text x={b.x + b.w} y={b.y + b.h + 2 * size + 30} textAnchor="end" style={T(size + 2, INK)}>{xl}</text>
		<text x={b.x - 10} y={b.y - 30} style={T(size + 2, INK)}>{yl}</text>
	</g>
));
/** A schematic supernova light curve: brightness (0 to 1) at fraction u of its duration. */
export const snShape = (u: number) => (u <= 0 || u >= 1.25 ? 0 : u < 0.2 ? Math.exp(-(((u - 0.2) / 0.1) ** 2)) : Math.exp(-(u - 0.2) * 3.6));
/** Path of a light curve lasting `days` on plot box b, drawn on to `draw`. */
export const snPath = (b: PlotBox, days: number, peak = 1, draw = 1) => Array.from({length: 121}, (_, i) => { const d = (i / 120) * b.x1 * Math.max(0.01, Math.min(1, draw)); return `${i ? 'L' : 'M'}${px(b, d).toFixed(1)},${py(b, peak * snShape(d / days)).toFixed(1)}`; }).join(' ');
