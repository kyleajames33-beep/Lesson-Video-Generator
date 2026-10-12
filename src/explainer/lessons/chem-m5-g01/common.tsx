import React from 'react';
import {useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/g01/measured/lesson.json';
import {HandText, INK, prog} from '../../kit';
import type {CueScene} from '../../cues';

const L = lesson as unknown as {scenes: (CueScene & {durationInFrames: number})[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('scene not found ' + id);
	return s;
};

// Colour key for this video only: heat terracotta, spreading indigo, delta G dark ink.
export const HEAT = '#b3472c';
export const HEAT_SOFT = '#f6dcd2';
export const SPREAD = '#4a54b8';
export const SPREAD_SOFT = '#dfe2f6';
export const DG = '#26231f';
export const LIGHT = '#e0a800';
export const RESP = '#7a4a9c';
export const OXY = '#d9604a';
export const SURR = '#d6e0ea';
export const BAD = '#c4432f';

export const Heading: React.FC<{text: string; at?: number; size?: number; color?: string; out?: number}> = ({text, at = 4, size = 66, color = INK, out}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	return <div style={{position: 'absolute', left: 96, top: 92, opacity: o}}><HandText text={text} at={at} size={size} cps={30} color={color} /></div>;
};

/** Piecewise value over local frames. smooth = eased between keys, otherwise linear. */
export const kf = (f: number, pts: [number, number][], smooth = true): number => {
	if (f <= pts[0][0]) return pts[0][1];
	for (let i = 0; i + 1 < pts.length; i++) {
		const [a, va] = pts[i], [b, vb] = pts[i + 1];
		if (f < b) {
			const u = (f - a) / (b - a);
			const s = smooth ? u * u * (3 - 2 * u) : u;
			return va + (vb - va) * s;
		}
	}
	return pts[pts.length - 1][1];
};
export const smooth = (u: number) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));
