// Lesson parts for phys-y12-m7-v03: labelled spectrum rows, a reference card of four elements, the hot-filament
// lattice inset (a lesson animation: the particle box has no attraction, so it cannot hold a solid together), the two
// thin-gas particle-box runs (hot discharge gas, cool sodium vapour), the painted EHT supply, a brightness profile for
// the temperature slider, and v02's parts re-exported.
// Colour key (design, Revision 2): spectrum strips in true wavelength colours on a 380 to 750 nm axis; dark lines black;
// emission lines bright on black; energy levels navy; electron drops rose; reference cards grey; answers in dark-ink
// frames; mistakes slate (root rule R1).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY} from '../../kit';
import {CARD, INK} from '../../shared/tokens';
import {SpectrumStrip, nmX} from '../../physics/light/spectrum';
import type {StripGeom, StripKind} from '../../physics/light/spectrum';
import {Supply} from '../../physics/electromagnetism/plates';
import {planck} from '../../sims/blackbody';
import {runBox} from '../../sims/particle-box';
import type {BoxRun} from '../../sims/particle-box';
import {lazy} from '../../sims';
import {AMBER, BLUE, CardRect, FLUX, GREY, LIGHT, LIGHT_INK, Lbl, NAVY, ORANGE, ROSE, Shrunk, Strip, V02_PLATES, fx, sci} from '../phys-y12-m7-v02/parts';

export {AMBER, BLUE, CardRect, FLUX, GREY, LIGHT, LIGHT_INK, Lbl, NAVY, ORANGE, ROSE, Shrunk, Strip, fx, sci};
export const V03_PLATES = [...V02_PLATES];

/** A labelled strip: name at the left, the strip, optional printed line values under it. */
export const StripRow: React.FC<{s: StripGeom; kind: StripKind; lines?: readonly number[]; name?: string; values?: string; nameW?: number; opacity?: number; shift?: number; broaden?: number; reveal?: number; glow?: readonly number[]; grey?: boolean; axis?: boolean; ticks?: readonly number[]; strengths?: readonly number[]; size?: number; profile?: (nm: number) => number; lineW?: number}> = ({s, name, values, nameW = 200, opacity = 1, size = 28, ...rest}) => (
	opacity <= 0.001 ? null : <g opacity={opacity}>
		<SpectrumStrip s={s} {...rest} />
		{name ? <text x={s.x - 16} y={s.y + s.h / 2 + size * 0.36} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fill: INK}}>{name}</text> : null}
		{values ? <text x={s.x} y={s.y + s.h + size + 4} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 26, fill: GREY.ink}}>{values}</text> : null}
		{nameW ? null : null}
	</g>
);
/** Dashed connectors from lines on one strip to the same wavelengths on another. */
export const Connectors: React.FC<{a: StripGeom; b: StripGeom; lines: readonly number[]; opacity?: number; color?: string; marks?: readonly ('tick' | 'none' | 'miss')[]; lean?: number}> = ({a, b, lines, opacity = 1, color = INK, marks = [], lean = 1}) => {
	if (opacity <= 0.001) return null;
	const down = b.y > a.y;
	return (
		<g opacity={opacity}>
			{lines.map((l, i) => {
				const xa = nmX(a, l), xb = nmX(b, l * lean), ya = down ? a.y + a.h : a.y, yb = down ? b.y : b.y + b.h;
				const m = marks[i] ?? 'none';
				return <g key={i}>
					<line x1={xa} y1={ya} x2={xb} y2={yb} stroke={m === 'miss' ? GREY.stroke : color} strokeWidth={3} strokeDasharray="7 6" />
					{m === 'tick' ? <path d={`M${(xa + xb) / 2 - 10},${(ya + yb) / 2} l7,8 l14,-16`} fill="none" stroke="#2e7d4f" strokeWidth={4} strokeLinecap="round" /> : null}
				</g>;
			})}
		</g>
	);
};
/** "No partner" slate marks above observed lines. */
export const NoPartner: React.FC<{s: StripGeom; lines: readonly number[]; opacity?: number}> = ({s, lines, opacity = 1}) => (
	opacity <= 0.001 ? null : <g opacity={opacity}>{lines.map((l, i) => { const x = nmX(s, l), y = s.y + s.h + 22; return <g key={i} stroke={GREY.ink} strokeWidth={4}><line x1={x - 9} y1={y - 9} x2={x + 9} y2={y + 9} /><line x1={x + 9} y1={y - 9} x2={x - 9} y2={y + 9} /></g>; })}</g>
);

// ---------------------------------------------------------------- hot dense filament (lesson animation)
/** A tightly packed lattice of dots jiggling in all directions inside a circle (cx, cy, r). */
export const Lattice: React.FC<{cx: number; cy: number; r: number; jiggle?: number; color?: string; opacity?: number}> = ({cx, cy, r, jiggle = 1, color = ROSE.stroke, opacity = 1}) => {
	const f = useCurrentFrame();
	if (opacity <= 0.001) return null;
	const dots: React.ReactNode[] = [];
	const step = 30;
	for (let i = -6; i <= 6; i++) for (let j = -6; j <= 6; j++) {
		const x = cx + i * step + (j % 2 ? step / 2 : 0), y = cy + j * step * 0.87;
		if (Math.hypot(x - cx, y - cy) > r - 14) continue;
		const k = i * 31 + j * 17;
		const dx = jiggle * 6 * Math.sin(f * 0.9 + k * 1.7), dy = jiggle * 6 * Math.cos(f * 1.13 + k * 2.3);
		dots.push(<circle key={`${i},${j}`} cx={x + dx} cy={y + dy} r={9} fill={color} stroke={CARD} strokeWidth={2} />);
	}
	return <g opacity={opacity}>{dots}</g>;
};
/** Relative brightness of a hot source at wavelength nm and temperature T (Planck, scaled to 3500 K at 750 nm). */
export const hotProfile = (T: number) => { const norm = planck(750e-9, 3500); return (nm: number) => Math.min(1, Math.pow(planck(nm * 1e-9, T) / norm, 0.55)); };

// ---------------------------------------------------------------- thin gases (particle box engine)
/** Hot thin gas in the discharge tube: a few atoms far apart and fast electrons. */
export const hotGas = lazy((): BoxRun => runBox({seed: 7, frames: 1500, w: 420, h: 250, species: [{id: 'atom', r: 13, mass: 4}, {id: 'e', r: 5, mass: 0.2}], initial: [{species: 'atom', count: 6}, {species: 'e', count: 10}], temperature: 1.4, speed: 4}));
/** Cool sodium vapour in the cell: a few slow atoms far apart. */
export const coolGas = lazy((): BoxRun => runBox({seed: 11, frames: 1500, w: 300, h: 80, species: [{id: 'na', r: 8, mass: 4}], initial: [{species: 'na', count: 7}], temperature: 0.4, speed: 3}));

/** The particles of a box run drawn without the box (for a gas seen through a painted window), from the engine's frame. */
export const BoxDots: React.FC<{run: BoxRun; x: number; y: number; scale?: number; color: string; opacity?: number}> = ({run, x, y, scale = 1, color, opacity = 1}) => {
	const f = useCurrentFrame();
	if (opacity <= 0.001) return null;
	const sf = Math.min(run.frames - 1, Math.max(0, Math.round(f))), base = sf * run.slots;
	const out: React.ReactNode[] = [];
	for (let i = 0; i < run.slots; i++) { const s = run.sp[base + i]; if (s < 0) continue; const r = (run.config.species[s].r ?? 12) * scale; out.push(<circle key={i} cx={x + run.x[base + i] * scale} cy={y + run.y[base + i] * scale} r={r} fill={color} stroke={CARD} strokeWidth={1.5} />); }
	return <g opacity={opacity}>{out}</g>;
};
/** The painted EHT supply (bench kit) with a display reading. */
export const EHT: React.FC<{x: number; y: number; w: number; reading?: string; opacity?: number}> = ({x, y, w, reading = 'HV', opacity = 1}) => <Supply at={{x, y, w}} reading={reading} opacity={opacity} />;
/** Where the supply's on/off switch sits for a supply at (x, y, w) (read from the plate: left of the knob). */
export const ehtSwitch = (x: number, y: number, w: number): [number, number] => [x + (240 - 108) * (w / 1320), y + (552 - 158) * (w / 1320)];
export const Frame: React.FC<{x: number; y: number; w: number; h: number}> = p => <CardRect {...p} />;
export const sciNm = (nm: number) => `${fx(nm, 1)} nm`;
