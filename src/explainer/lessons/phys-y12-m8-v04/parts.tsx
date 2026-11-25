// Lesson parts for phys-y12-m8-v04: the colour roles (design "Colour key (Revision 2)" with root rule R1), the HR
// diagram layers drawn on the Module 8 kit's HR geometry (the main-sequence band, the giant, supergiant and white-dwarf
// regions, the illustrative star sample with named stars at catalogue values, lines of equal radius) and v03's parts.
// Colour key: luminosity L navy; temperature T red; radius R teal; apparent brightness grey (glow rings); mass purple;
// HR points coloured by temperature; the main-sequence band pale amber; answers in dark-ink frames; mistakes slate (R1).
import React from 'react';
import {FONT_DISPLAY, prog} from '../../kit';
import {TONES} from '../../shared/tokens';
import {EARTH} from '../../physics/light/plates';
import {STAR_BLUE, STAR_RED, STAR_WHITE} from '../../physics/light/stars';
import {SUN} from '../../physics/light/plates';
import {HRAxes, hrX, hrY, msLum, radiusLineL, starColour} from '../../physics/atom/stellar';
import type {HRBox} from '../../physics/atom/stellar';
import {AMBER, BLUE, GREY, Givens, INK, Lbl, NAVY, NEUTRON, RED, ROSE, Shrunk, Strip, TEAL, V03_PLATES, VIOLET, fx, sci} from '../phys-y12-m8-v03/parts';

export {AMBER, BLUE, GREY, Givens, INK, Lbl, NAVY, NEUTRON, RED, ROSE, Shrunk, Strip, TEAL, VIOLET, fx, sci};
export const PURPLE = TONES.violet;
export const V04_PLATES = [...new Set([...V03_PLATES, EARTH.src])];
/** The painted star for a temperature (schematic colour cue). */
export const plateFor = (T: number) => (T < 5200 ? STAR_RED : T < 7500 ? SUN : T < 20000 ? STAR_WHITE : STAR_BLUE);
const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color});

/** Illustrative main-sequence sample (temperature K, offset from the band centre in dex). */
const MS_SAMPLE: readonly (readonly [number, number])[] = [[34000, 0.1], [26000, -0.2], [20000, 0.15], [15500, -0.1], [12500, 0.2], [10500, -0.15], [9000, 0.1], [8000, -0.25], [7200, 0.2], [6600, -0.1], [6200, 0.15], [5600, -0.2], [5200, 0.1], [4800, -0.15], [4500, 0.2], [4200, -0.1], [3900, 0.15], [3700, -0.2], [3500, 0.1], [3350, -0.15], [3200, 0.2], [3100, -0.1], [2900, 0.05], [7600, 0.05], [5900, 0.25], [4000, -0.25], [11000, 0.25], [16500, 0.25], [3600, 0.25], [6900, -0.25]];
export const MS_POINTS = MS_SAMPLE.map(([t, d]) => [t, msLum(t) * 10 ** d] as const);
/** Illustrative giants and supergiants, with the named stars at catalogue values. */
export const GIANTS: readonly (readonly [number, number])[] = [[4800, 60], [4500, 110], [4300, 200], [4100, 300], [3900, 440], [3800, 900], [4600, 150]];
export const SUPERGIANTS: readonly (readonly [number, number])[] = [[3600, 1e5], [3500, 1e4], [4000, 5e4], [12100, 1e5], [20000, 2e5], [7000, 6e4]];
export const DWARFS: readonly (readonly [number, number])[] = [[25000, 0.025], [20000, 0.01], [15000, 0.004], [12000, 0.002], [9000, 0.0007], [7000, 0.0003]];

/** The main-sequence band (±0.45 dex about msLum) as a path. */
export const bandPath = (b: HRBox) => {
	const ts = Array.from({length: 41}, (_, i) => 10 ** (Math.log10(38000) - ((Math.log10(38000) - Math.log10(2700)) * i) / 40));
	const up = ts.map(t => [hrX(b, t), hrY(b, msLum(t) * 10 ** 0.45)]), lo = ts.map(t => [hrX(b, t), hrY(b, msLum(t) * 10 ** -0.45)]).reverse();
	return [...up, ...lo].map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${Math.max(b.y, Math.min(b.y + b.h, p[1])).toFixed(1)}`).join(' ') + ' Z';
};
/** A region outline (ellipse) between two temperature-luminosity corners. */
const regionEllipse = (b: HRBox, t0: number, t1: number, l0: number, l1: number) => {
	const x0 = hrX(b, t0), x1 = hrX(b, t1), y0 = hrY(b, l0), y1 = hrY(b, l1);
	return {cx: (x0 + x1) / 2, cy: (y0 + y1) / 2, rx: Math.abs(x1 - x0) / 2, ry: Math.abs(y1 - y0) / 2};
};
export const REGIONS = (b: HRBox) => ({
	giants: regionEllipse(b, 5200, 3500, 30, 1500),
	supergiants: regionEllipse(b, 25000, 3300, 1e4, 4e5),
	dwarfs: regionEllipse(b, 30000, 6500, 1.5e-4, 0.06),
});
/** One line of equal radius R (R☉) across the box, clipped to it. */
export const radiusPath = (b: HRBox, R: number) => {
	const pts: string[] = [];
	for (let i = 0; i <= 60; i++) {
		const t = 10 ** (Math.log10(b.tHot) - ((Math.log10(b.tHot) - Math.log10(b.tCool)) * i) / 60), L = radiusLineL(t, R), y = hrY(b, L);
		if (y >= b.y && y <= b.y + b.h) pts.push(`${pts.length ? 'L' : 'M'}${hrX(b, t).toFixed(1)},${y.toFixed(1)}`);
	}
	return pts.join(' ');
};
export type HRLayers = {axes?: number; band?: number; ms?: number; msAt?: number; msEach?: number; giants?: number; dwarfs?: number; regions?: number; radius?: number; dim?: number; hiPt?: readonly (readonly [number, number])[]; labels?: number};
/** The HR diagram with its layers (each 0 to 1); `ms` points can arrive one by one from `msAt`. */
export const HRDiagram: React.FC<{b: HRBox; f: number; L: HRLayers; size?: number; ticksT?: readonly number[]; ticksL?: readonly number[]; letters?: number; colourBand?: number; xTitle?: string; yTitle?: string}> = ({b, f, L, size = 26, ticksT = [40000, 20000, 10000, 5000, 2500], ticksL = [-4, -2, 0, 2, 4, 6], letters = 1, colourBand = 1, xTitle, yTitle}) => {
	const R = REGIONS(b), dim = L.dim ?? 1;
	const each = L.msEach ?? 0;
	return (
		<g>
			<HRAxes b={b} tTicks={ticksT} lTicks={ticksL} letters={letters} band={colourBand} size={size} opacity={L.axes ?? 1} xTitle={xTitle} yTitle={yTitle} />
			{(L.band ?? 0) > 0.001 ? <path d={bandPath(b)} fill="#f3dca6" stroke={AMBER.stroke} strokeWidth={2} opacity={0.75 * (L.band ?? 0)} /> : null}
			{(L.regions ?? 0) > 0.001 ? <g opacity={(L.regions ?? 0) * dim} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="12 8">
				<ellipse {...R.giants} /><ellipse {...R.supergiants} /><ellipse {...R.dwarfs} />
			</g> : null}
			{(L.radius ?? 0) > 0.001 ? <g opacity={L.radius}>{[0.01, 1, 100, 1000].map(r => <path key={r} d={radiusPath(b, r)} fill="none" stroke={GREY.stroke} strokeWidth={3} strokeDasharray="10 8" />)}</g> : null}
			{MS_POINTS.map(([t, l], i) => { const o = (L.ms ?? 0) * (each ? prog(f, (L.msAt ?? 0) + i * each, 8) : 1); return o > 0.001 ? <circle key={`m${i}`} cx={hrX(b, t)} cy={hrY(b, l)} r={8} fill={starColour(t)} stroke={INK} strokeWidth={2} opacity={o} /> : null; })}
			{(L.giants ?? 0) > 0.001 ? <g opacity={(L.giants ?? 0) * dim}>{[...GIANTS, ...SUPERGIANTS].map(([t, l], i) => <circle key={`g${i}`} cx={hrX(b, t)} cy={hrY(b, l)} r={9} fill={starColour(t)} stroke={INK} strokeWidth={2} />)}</g> : null}
			{(L.dwarfs ?? 0) > 0.001 ? <g opacity={(L.dwarfs ?? 0) * dim}>{DWARFS.map(([t, l], i) => <circle key={`d${i}`} cx={hrX(b, t)} cy={hrY(b, l)} r={7} fill={starColour(t)} stroke={INK} strokeWidth={2} />)}</g> : null}
			{(L.hiPt ?? []).map(([t, l], i) => <circle key={`h${i}`} cx={hrX(b, t)} cy={hrY(b, l)} r={13} fill={starColour(t)} stroke={INK} strokeWidth={3.5} />)}
			{(L.labels ?? 0) > 0.001 ? <g opacity={L.labels}>
				<text x={R.giants.cx + R.giants.rx + 10} y={R.giants.cy + 8} style={T(size, INK)}>red giants</text>
				<text x={R.supergiants.cx} y={R.supergiants.cy - R.supergiants.ry - 12} textAnchor="middle" style={T(size, INK)}>supergiants</text>
				<text x={R.dwarfs.cx} y={R.dwarfs.cy + R.dwarfs.ry + size + 6} textAnchor="middle" style={T(size, INK)}>white dwarfs</text>
			</g> : null}
		</g>
	);
};
/** A glow ring (apparent brightness, grey) whose radius follows log brightness. */
export const glowR = (b: number) => Math.max(10, 18 + 14 * (Math.log10(b) + 5));
