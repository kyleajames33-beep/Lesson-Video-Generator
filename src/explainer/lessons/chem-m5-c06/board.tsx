// Shared board pieces for the C6 worked examples: the same three zones (task and equation, givens, table) every time.
import React from 'react';
import {INK_SOFT} from '../../kit';
import {ParticleLens} from '../chem-m5-c02/parts';
import type {Counts, Ghost} from '../chem-m5-c02/parts';
import {eqLayout} from '../chem-m5-c05/parts';
import type {EqItem} from '../chem-m5-c05/parts';
import {GREEN_INK, NAVY, VIOLET} from './common';
import type {IceCol} from './ice';

// zone positions for the PCl5 board (and, with other species, the H2 + I2 board)
export const TB = {x: 620, y: 330};
export const EQ = {x: 96, y: 250, s: 46};
export const LENS = {cx: 1700, cy: 560, r: 150};
export const CARD = {x: 96, y: 330, w: 520};

export const PCL_EQ: EqItem[] = [
	{k: 'sp', t: 'PCl_5(g)', color: NAVY}, {k: 'arrow'}, {k: 'sp', t: 'PCl_3(g)', color: VIOLET}, {k: 'plus'}, {k: 'sp', t: 'Cl_2(g)', color: GREEN_INK},
];
export const pclPos = eqLayout(PCL_EQ, EQ.s, EQ.x).pos;
export const pclCols = (a: [number, number, number]): IceCol[] => [
	{name: 'PCl_5', at: a[0], color: NAVY}, {name: 'PCl_3', at: a[1], color: VIOLET}, {name: 'Cl_2', at: a[2], color: GREEN_INK},
];

export const H2I2_EQ: EqItem[] = [
	{k: 'sp', t: 'H_2(g)', color: '#6b6358'}, {k: 'plus'}, {k: 'sp', t: 'I_2(g)', color: '#5f2f94'}, {k: 'arrow'}, {k: 'sp', coef: '2', t: 'HI(g)', color: '#4a4f57'},
];
export const hiPos = eqLayout(H2I2_EQ, EQ.s, EQ.x).pos;
export const hiCols = (a: [number, number, number]): IceCol[] => [
	{name: 'H_2', at: a[0], color: '#6b6358'}, {name: 'I_2', at: a[1], color: '#5f2f94'}, {name: 'HI', at: a[2], color: '#4a4f57'},
];

/** PCl5 particle view (20 particles = 0.20 mol/L at 0.01 mol/L each). */
export const PclLens: React.FC<{counts: Counts; ghosts?: Ghost[]; reveal?: number; cx?: number; cy?: number; r?: number}> = ({counts, ghosts = [], reveal = 1, cx = LENS.cx, cy = LENS.cy, r = LENS.r}) => (
	<ParticleLens cx={cx} cy={cy} r={r} counts={counts} seed={4} ghosts={ghosts} reveal={reveal} rScale={0.62 * (r / 150)} />
);
void INK_SOFT;
