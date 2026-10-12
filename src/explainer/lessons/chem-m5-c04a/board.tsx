import React from 'react';
import {useCurrentFrame} from 'remotion';
import {INK, INK_SOFT, prog} from '../../kit';
import {Heading, N2O4C, N2O4_INK, NO2C, NO2_INK, PALE, DEEP, hexMix} from './common';
import type {Burst, Group, Piece} from './parts';
import {Overlay, Pill} from './parts';

export const CHIP_L: Piece[] = [{t: '2NO_2(g)', color: NO2_INK, dot: NO2C}];
export const CHIP_R: Piece[] = [{t: 'N_2O_4(g)', color: N2O4_INK, dot: N2O4C}];
export const NO2G = (n: number): Group => ({n, kind: 'dot', r: 12, fill: NO2C, stroke: NO2_INK, seed: 1});
export const N2O4G = (n: number): Group => ({n, kind: 'pair', r: 8, fill: N2O4C, stroke: N2O4_INK, seed: 2});
/** Gas shade from a 0..1 value. */
export const shade = (t: number) => hexMix(PALE, DEEP, Math.max(0, Math.min(1, t)));
export const SYX = {x: 96, y: 240, w: 1000};
export const BAR_SCALE = 2.5;
export const train = (from: number, to: number, period: number, kind: 'join' | 'split'): Burst[] => {
	const out: Burst[] = [];
	for (let t = from; t < to; t += period) out.push({f0: Math.round(t), kind});
	return out;
};
/** Label pill for the two beats: "the moment of the change" or "the response". */
export const BeatLabel: React.FC<{text: string; at: number; color?: string; w?: number}> = ({text, at, color = INK, w = 560}) => <Overlay><Pill x={96} y={172} w={w} text={text} at={at} color={color} size={40} h={58} /></Overlay>;
export const BX = 1200;
export const Title: React.FC<{text: string; size?: number}> = ({text, size = 66}) => <Heading text={text} at={4} size={size} />;
void INK_SOFT; void prog; void useCurrentFrame;
