// Lesson parts for phys-y12-m7-v09: the colour roles (Module 7 Part 3 key, root decision 1), the black-body plot
// geometry on a compressed scale, a glow colour for a temperature, the jiggling lattice from v03, and v08's parts
// re-exported.
// Colour key (design, Revision 2): curves by temperature (1000 K dull red, 3500 K red, 5800 K amber, 10 000 K blue);
// classical prediction dashed grey; energy packets amber; thermal energy band grey; charges and electrons navy;
// b and h ink in data-sheet chips; answers in dark-ink frames; mistakes slate (root rule R1).

import {INK, TONES} from '../../shared/tokens';
import {STAR_PLATES} from '../../physics/light/stars';
import {LIGHT_PLATES} from '../../physics/light/plates';
import {THERMAL_PLATES} from '../../physics/light/thermal';
import type {BBGeom} from '../../physics/light/thermal';
import {Lattice} from '../phys-y12-m7-v03/parts';
import {Arc, EArrow, GREY, Lbl, NAVY, ORANGE, SLATE, Shrunk, Strip, V08_PLATES, fx, sci} from '../phys-y12-m7-v08/parts';
import {REF5800} from './common';

export {Arc, EArrow, GREY, INK, Lattice, Lbl, NAVY, ORANGE, SLATE, Shrunk, Strip, fx, sci};
export const V09_PLATES = [...new Set([...V08_PLATES, ...THERMAL_PLATES, ...STAR_PLATES, ...LIGHT_PLATES.filter(s => s.includes('sun'))])];
export const AMBER = TONES.amber, BLUE = TONES.blue;
export const TCOL: Record<number, string> = {330: '#8a5a44', 1000: '#8f2a1c', 3500: '#c8443a', 5000: '#d9a33a', 5800: '#d18f1f', 6900: '#4f8fe0', 10000: '#2f7fc4'};
export const CLASSICAL = '#8a8378';
/** A glow colour for a temperature (illustrative: dull red, orange, yellow-white, white, blue-white). */
export const glowFor = (T: number) => {
	const stops: [number, [number, number, number]][] = [[1000, [143, 42, 28]], [2000, [227, 106, 31]], [3500, [245, 170, 80]], [5000, [255, 232, 190]], [5800, [255, 250, 240]], [10000, [200, 220, 255]]];
	const t = Math.max(1000, Math.min(10000, T));
	let i = 0;
	while (i < stops.length - 2 && t > stops[i + 1][0]) i++;
	const [t0, a] = stops[i], [t1, b] = stops[i + 1];
	const u = (t - t0) / (t1 - t0);
	return `rgb(${a.map((v, k) => Math.round(v + (b[k] - v) * u)).join(',')})`;
};
/** A compressed (square-root) display scale, referenced to the 5800 K peak. */
export const bbG = (x: number, y: number, w: number, h: number, nm0: number, nm1: number, ref = REF5800, pow = 0.5): BBGeom => ({x, y, w, h, nm0, nm1, ref, pow});
