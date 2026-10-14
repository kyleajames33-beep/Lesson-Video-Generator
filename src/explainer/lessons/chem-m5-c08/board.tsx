// Left-board helpers shared by the C8 scenes: the givens card for an H2 + I2 mixture and a key for a tube.
import React from 'react';
import {INK_SOFT} from '../../kit';
import {CARD8, Fade, GivensCard, KEY8, Sx, SvgText, TubeScale, cardH} from './parts';
import type {Kind} from './parts';

/** The givens card for an H2 + I2 mixture (values in mol/L), all lines already on screen unless `ats` is given. */
export const HiCard: React.FC<{h: string; i: string; hi: string; ats?: number[]; rings?: (number | undefined)[]; at?: number; skipH?: boolean}> = ({h, i, hi, ats, rings = [], at = -100, skipH = false}) => (
	<GivensCard x={CARD8.x} y={CARD8.y} w={CARD8.w} h={cardH(4)} at={at} lh={CARD8.lh} lines={[
		{text: 'K = 49 (about 450 °C)', at: ats ? ats[0] : -100, ring: rings[0]},
		{text: skipH ? '' : `now: [H_2] = ${h} mol/L`, at: ats ? ats[1] : -100, ring: rings[1]},
		{text: `now: [I_2] = ${i} mol/L`, at: ats ? ats[2] : -100, ring: rings[2]},
		{text: `now: [HI] = ${hi} mol/L`, at: ats ? ats[3] : -100, ring: rings[3]},
	]} />
);

/** Key for a tube with several kinds of dot. */
export const KindKey: React.FC<{x: number; y: number; at: number; items: {kind: Kind; label: string}[]; scale?: string; gap?: number}> = ({x, y, at, items, scale = '1 dot = 0.05 mol/L', gap = 92}) => (
	<Fade at={at}>
		{items.map((it, k) => (
			<g key={k}>
				<circle cx={x + k * gap} cy={y} r={it.kind.r + 1.5} fill={it.kind.c} stroke={it.kind.ink} strokeWidth={2.5} />
				<SvgText x={x + k * gap + 16} y={y + 10} text={it.label} size={30} hand={false} weight={600} at={at} />
			</g>
		))}
		<Sx x={x - 10} y={y + 50} text={scale} size={36} color={INK_SOFT} hand at={at + 4} />
	</Fade>
);

/** The H2 + I2 colour key with the dot scale on the same row (so a label can sit above the tube). */
export const Key8: React.FC<{at: number; x?: number; y?: number; out?: number}> = ({at, x = KEY8.x, y = KEY8.y, out}) => (
	<Fade at={-100} out={out}>
		<TubeScale x={x} y={y} at={at} text="" />
		<Sx x={x + 270} y={y + 10} text="1 dot = 0.05 mol/L" size={32} color={INK_SOFT} hand at={at + 4} />
	</Fade>
);
