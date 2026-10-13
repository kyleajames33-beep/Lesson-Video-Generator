import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
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

/** Painted plate inside an SVG. box = alpha bbox (alpha > 20) in the file; (x, y) = where that box's top left goes, w = its width on screen. */
export const SvgPaint: React.FC<{src: string; nat: [number, number]; box: [number, number, number, number]; x: number; y: number; w: number; opacity?: number; filter?: string}> = ({src, nat, box, x, y, w, opacity = 1, filter}) => {
	const s = w / (box[2] - box[0]);
	return <image href={staticFile(src)} x={x - box[0] * s} y={y - box[1] * s} width={nat[0] * s} height={nat[1] * s} opacity={opacity} style={filter ? {filter} : undefined} />;
};
const C = 'assets/chemistry/';
export const G1 = {
	tree: {src: C + 'g1-tree-v1.png', nat: [1800, 2200] as [number, number], box: [231, 264, 1568, 1935] as [number, number, number, number]},
	leaf: {src: C + 'g1-leaf-v1.png', nat: [2200, 1400] as [number, number], box: [331, 274, 1870, 1126] as [number, number, number, number]},
	bowl: {src: C + 'g1-sugar-bowl-v1.png', nat: [1600, 1400] as [number, number], box: [128, 126, 1470, 1273] as [number, number, number, number]},
	flame: {src: C + 'g1-flame-v1.png', nat: [1400, 1800] as [number, number], box: [406, 145, 993, 1656] as [number, number, number, number]},
};
