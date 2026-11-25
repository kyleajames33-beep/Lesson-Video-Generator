// Lesson parts for phys-y12-m7-v04: the three-column feature board (where, how wide, how strong) that fills as each
// property is taught, the four property chips, a coded slider with a knob, the class strip (O to M), the hydrogen
// line-strength hump, the dense and thin gas runs (particle-box engine, every collision recorded as an event), and v03's
// parts re-exported.
// Colour key (design, Revision 2): spectra in true wavelength colours on a 380 to 750 nm axis; rest positions grey
// dashed; shifts and Δλ rose; velocities navy arrows; line profiles ink; approaching edge blue tint, receding edge red
// tint (role colours, tagged once); answers in dark-ink frames; mistakes slate (root rule R1).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {CARD, INK} from '../../shared/tokens';
import {runBox} from '../../sims/particle-box';
import type {BoxRun} from '../../sims/particle-box';
import {lazy} from '../../sims';
import {STAR_PLATES} from '../../physics/light/stars';
import {wlColor} from '../../physics/light/spectrum';
import {AMBER, BLUE, CardRect, Connectors, FLUX, GREY, LIGHT, LIGHT_INK, Lbl, NAVY, ORANGE, ROSE, Shrunk, Strip, StripRow, V03_PLATES, fx, sci} from '../phys-y12-m7-v03/parts';

export {AMBER, BLUE, CardRect, Connectors, FLUX, GREY, LIGHT, LIGHT_INK, Lbl, NAVY, ORANGE, ROSE, Shrunk, Strip, StripRow, fx, sci};
export const V04_PLATES = [...V03_PLATES, ...STAR_PLATES];
/** Role tints for the approaching (blue) and receding (red) edges of a spinning star. */
export const APPROACH = '#2f7fc4', RECEDE = '#c8443a';
/** Signed fixed decimals with a plus sign on positives. */
export const sgn = (v: number, d: number) => (v > 0 ? '+' : '') + fx(v, d);

// ---------------------------------------------------------------- the feature board
export type BoardEntries = {comp?: number; vel?: number; temp?: number; rot?: number; dens?: number};
const COLS = [
	{head: 'where', sub: '(position)', keys: ['comp', 'vel'] as const, color: ROSE.ink},
	{head: 'how wide', sub: '(width)', keys: ['rot', 'dens'] as const, color: NAVY.ink},
	{head: 'how strong', sub: '(strength, colour)', keys: ['temp'] as const, color: ORANGE.ink},
];
const ENTRY: Record<string, [string, string]> = {comp: ['composition', '(which wavelengths)'], vel: ['radial velocity', '(uniform shift)'], temp: ['temperature', '(continuum colour, which lines are strong)'], rot: ['rotation', '(along our line of sight)'], dens: ['density', '(pressure broadening)']};
/** The board at (x, y), drawn at `scale` (1: 600 px wide). An entry shows from its frame; `pulse` lights a column. */
export const FeatureBoard: React.FC<{x: number; y: number; scale?: number; e: BoardEntries; pulse?: number; at?: number; opacity?: number; full?: boolean}> = ({x, y, scale = 1, e, pulse = -1, at = -30, opacity = 1, full = false}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14) * opacity;
	if (o <= 0.001) return null;
	return (
		<div style={{position: 'absolute', left: x, top: y, width: 600, transform: `scale(${scale})`, transformOrigin: 'left top', opacity: o, background: CARD, border: `3px solid rgba(60,45,20,0.2)`, borderRadius: 16, padding: '10px 12px 14px', display: 'flex', gap: 8, boxSizing: 'border-box'}}>
			{COLS.map((c, i) => (
				<div key={c.head} style={{flex: 1, borderRadius: 10, padding: '4px 6px', background: pulse === i ? '#f6ead2' : 'transparent', boxShadow: pulse === i ? `inset 0 0 0 3px ${c.color}` : undefined}}>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, color: c.color, lineHeight: 1.1}}>{c.head}</div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 26, color: GREY.ink, lineHeight: 1.1, marginBottom: 6}}>{c.sub}</div>
					{c.keys.map(k => {
						const t = e[k];
						if (t === undefined) return null;
						const p = prog(f, t, 14);
						return p <= 0.001 ? null : <div key={k} style={{opacity: p, marginTop: 6, fontFamily: FONT_DISPLAY, lineHeight: 1.12}}>
							<div style={{fontWeight: 800, fontSize: 28, color: INK}}>{ENTRY[k][0]}</div>
							{full || k !== 'temp' ? <div style={{fontWeight: 700, fontSize: 26, color: GREY.ink}}>{ENTRY[k][1]}</div> : <div style={{fontWeight: 700, fontSize: 26, color: GREY.ink}}>(colour, strong lines)</div>}
						</div>;
					})}
				</div>
			))}
		</div>
	);
};
/** The four property chips (grey), each ticked from its frame. */
export const PropChips: React.FC<{x: number; y: number; at: number; ticks?: readonly number[]; cols?: number; size?: number; opacity?: number}> = ({x, y, at, ticks = [], cols = 2, size = 28, opacity = 1}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14) * opacity;
	if (o <= 0.001) return null;
	return (
		<div style={{position: 'absolute', left: x, top: y, opacity: o, display: 'grid', gridTemplateColumns: `repeat(${cols}, auto)`, gap: 10, justifyContent: 'start'}}>
			{['temperature', 'velocity', 'spin', 'density'].map((t, i) => {
				const tk = ticks[i] !== undefined && f >= ticks[i];
				return <div key={t} style={{background: '#f1ebdf', border: `2.5px solid ${tk ? INK : GREY.stroke}`, borderRadius: 12, padding: '4px 14px 6px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: tk ? INK : GREY.ink}}>{tk ? '✓ ' : ''}{t}</div>;
			})}
		</div>
	);
};

// ---------------------------------------------------------------- a coded slider
/** A horizontal slider from v0 to v1 with labelled ticks and a knob at value v. */
export const Slider: React.FC<{x: number; y: number; w: number; v0: number; v1: number; v: number; ticks?: readonly number[]; fmt?: (t: number) => string; color?: string; label?: string; opacity?: number}> = ({x, y, w, v0, v1, v, ticks = [], fmt = t => `${t}`, color = NAVY.stroke, label, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const X = (t: number) => x + ((t - v0) / (v1 - v0)) * w;
	return (
		<g opacity={opacity}>
			<line x1={x} y1={y} x2={x + w} y2={y} stroke="#cfc6b6" strokeWidth={10} strokeLinecap="round" />
			{ticks.map(t => <g key={t}><line x1={X(t)} y1={y + 10} x2={X(t)} y2={y + 20} stroke={INK} strokeWidth={3} /><text x={X(t)} y={y + 48} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 26, fill: INK}}>{fmt(t)}</text></g>)}
			<circle cx={X(v)} cy={y} r={17} fill={color} stroke={CARD} strokeWidth={4} />
			{label ? <text x={x} y={y - 22} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, fill: color}}>{label}</text> : null}
		</g>
	);
};

// ---------------------------------------------------------------- classes and line strength
export const CLASSES = ['O', 'B', 'A', 'F', 'G', 'K', 'M'];
/** Schematic line strengths for the class strip (0 to 1): ionised helium, hydrogen, molecular bands. */
export const CLASS_STR = {heII: [0.9, 0.3, 0, 0, 0, 0, 0], h: [0.35, 0.65, 1, 0.75, 0.45, 0.25, 0.12], mol: [0, 0, 0, 0, 0.1, 0.45, 0.9]};
/** Hydrogen line strength against temperature (schematic hump peaking near 10 000 K on a log axis). */
export const hStrength = (T: number) => Math.exp(-0.5 * ((Math.log10(T) - 4) / 0.2) ** 2);
/** A small class strip for class i: continuum fading from blue (O) to red (M) with schematic lines and bands. */
export const ClassStrip: React.FC<{x: number; y: number; w: number; h: number; i: number}> = ({x, y, w, h, i}) => {
	const u = i / 6;
	const prof = (nm: number) => { const b = (nm - 380) / 370; return 0.35 + 0.65 * (u < 0.5 ? 1 - (b * (0.5 - u)) : 1 - ((1 - b) * (u - 0.5))); };
	const lines = [656.3, 486.1, 434.0, 410.2];
	const nmX = (nm: number) => x + ((nm - 380) / 370) * w;
	return (
		<g>
			{Array.from({length: 30}, (_, k) => { const nm = 380 + (k + 0.5) * (370 / 30); return <rect key={k} x={x + (w * k) / 30} y={y} width={w / 30 + 0.6} height={h} fill={wlColor(nm)} opacity={0.15 + 0.85 * prof(nm)} />; })}
			{lines.map(l => <rect key={l} x={nmX(l) - 2} y={y} width={4} height={h} fill="#14110f" opacity={CLASS_STR.h[i]} />)}
			{CLASS_STR.heII[i] > 0 ? <rect x={nmX(468.6) - 2} y={y} width={4} height={h} fill="#14110f" opacity={CLASS_STR.heII[i]} /> : null}
			{CLASS_STR.mol[i] > 0 ? [476, 517, 545, 590, 616, 662, 705].map(b => <rect key={b} x={nmX(b) - 6} y={y} width={12} height={h} fill="#14110f" opacity={0.6 * CLASS_STR.mol[i]} />) : null}
			<rect x={x} y={y} width={w} height={h} fill="none" stroke={INK} strokeWidth={2.5} />
		</g>
	);
};
// ---------------------------------------------------------------- dense and thin gases (particle box engine)
/** Every collision is recorded as an event (a "reaction" that changes nothing), so the view can flash it. */
const BUMP = [{from: ['a', 'a'] as const, to: ['a', 'a'] as const, ea: 0, p: 1}];
export const denseGas = lazy((): BoxRun => runBox({seed: 21, frames: 1200, w: 380, h: 220, species: [{id: 'a', r: 11}], initial: [{species: 'a', count: 46}], speed: 3, reactions: BUMP}));
export const thinGas = lazy((): BoxRun => runBox({seed: 23, frames: 1200, w: 380, h: 220, species: [{id: 'a', r: 11}], initial: [{species: 'a', count: 6}], speed: 3, reactions: BUMP}));
