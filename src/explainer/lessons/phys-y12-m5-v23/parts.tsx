// Lesson parts for phys-y12-m5-v23: the vertical launch stage (the painted Earth with a metre-to-pixel map for
// radial field motion runs and the satellite plate as the probe), the painted rocket stood upright, the
// per-kilogram energy bars (from the v22 bars), and the shared v17 to v22 parts.
// Colour key (design, root decisions 2 and 10; Revision 2): velocity teal (launch arrows, speed readouts),
// kinetic energy orange, potential energy violet, total energy navy, thrust and extra speed green, answers in
// dark-ink frames, mistakes slate (root rule R1).
import React from 'react';
import {staticFile} from 'remotion';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import {EARTH_SRC} from '../phys-y12-m5-v16/parts';
import {MARS_SRC, Mars, SAT_SRC} from '../phys-y12-m5-v17/parts';
import {AMBER, Bars, Earth, GREEN, GREY, Lbl, NAVY, ORANGE, Ring, SLATE, Satellite, SpeedBar, T, TEAL, VIOLET, VecArrow, Zero, comma, fx, sci} from '../phys-y12-m5-v22/parts';
import {V22_PLATES} from '../phys-y12-m5-v22/parts';
import {RE} from './common';

export {AMBER, Bars, Earth, GREEN, GREY, Lbl, Mars, NAVY, ORANGE, Ring, SLATE, Satellite, SpeedBar, T, TEAL, VIOLET, VecArrow, Zero, comma, fx, sci};
export const ROCKET_SRC = 'assets/physics/phys-y11-rocket-v1.png';
/** Plates: Earth, the satellite as the probe, the rocket (scene 8), Mars (attempt 1), and last time's plates. */
export const V23_PLATES = [...new Set([EARTH_SRC, SAT_SRC, ROCKET_SRC, MARS_SRC, ...V22_PLATES])];

/** The painted rocket (2400 x 800, horizontal, nozzle exit at (216, 400), nose at (2184, 400)) stood upright:
 * nozzle at (nx, ny), nose `len` px above it. Uniform scale only. */
export const Rocket: React.FC<{nx: number; ny: number; len: number; opacity?: number}> = ({nx, ny, len, opacity = 1}) => {
	const s = len / (2184 - 216);
	return <g transform={`translate(${nx} ${ny}) rotate(-90)`} opacity={opacity}><image href={staticFile(ROCKET_SRC)} x={-216 * s} y={-400 * s} width={2400 * s} height={800 * s} /></g>;
};

// ---------------------------------------------------------------- the launch stage
/** Earth centred at (cx, cy) with radius R px (metres map uniformly; y up in metres). */
export type LS = {cx: number; cy: number; R: number};
export const toS = (st: LS, x: number, y: number): [number, number] => [st.cx + (x / RE) * st.R, st.cy - (y / RE) * st.R];
/** The probe (the satellite plate) at a screen point. */
export const Probe: React.FC<{x: number; y: number; w?: number; rotate?: number; opacity?: number}> = ({x, y, w = 56, rotate = 0, opacity = 1}) => <Satellite cx={x} cy={y} w={w} rotate={rotate} opacity={opacity} />;
export {INK, INK_SOFT, CARD};
