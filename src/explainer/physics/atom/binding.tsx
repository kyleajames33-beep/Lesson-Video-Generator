// Module 8 kit, part 9: binding energy inside the nucleus (additive kit file, 26 November 2026; first used by
// phys-y12-m8-v16). Course-neutral: every label, number and colour of meaning comes from the lesson.
// - Neighbour links: for a packed cluster (decay.tsx `clusterLayout`, unit = one disc diameter) the touching pairs are
//   the pairs one unit apart; `neighbours` lists them, `neighbourCount` counts each disc's touching neighbours (six for a
//   disc surrounded on all sides, fewer on the surface) and `NeighbourLinks` draws short links between touching discs
//   only (the strong force's short range).
// - Repulsion web: `RepulsionWeb` joins every pair of proton discs (the electric repulsion's long range), so the number
//   of lines grows as Z(Z − 1)/2.
// - Curve marks: a point on the binding-energy curve at a lesson value (not interpolated), for the named nuclides.
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD} from '../../shared/tokens';
import type {ClusterDisc} from './decay';
import {bcX, bcY} from './nuclear';
import type {BCBox} from './nuclear';

const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color, paintOrder: 'stroke', stroke: CARD, strokeWidth: 6, strokeLinejoin: 'round'} as React.CSSProperties);

/** Pairs of discs that touch (one unit apart). */
export const neighbours = (discs: readonly ClusterDisc[]) => {
	const out: [number, number][] = [];
	for (let i = 0; i < discs.length; i++) for (let j = i + 1; j < discs.length; j++) if (Math.abs(Math.hypot(discs[i].x - discs[j].x, discs[i].y - discs[j].y) - 1) < 0.05) out.push([i, j]);
	return out;
};
/** Touching neighbours of each disc. */
export const neighbourCount = (discs: readonly ClusterDisc[]) => {
	const n = discs.map(() => 0);
	for (const [i, j] of neighbours(discs)) { n[i]++; n[j]++; }
	return n;
};
/** Short links between touching discs; `only` limits them to the links of one disc; `spread` scales the cluster. */
export const NeighbourLinks: React.FC<{cx: number; cy: number; r: number; discs: readonly ClusterDisc[]; color: string; only?: number; spread?: number; width?: number; opacity?: number}> = ({cx, cy, r, discs, color, only, spread = 1, width = 4, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const pairs = neighbours(discs).filter(([i, j]) => only === undefined || i === only || j === only);
	const P = (d: ClusterDisc): [number, number] => [cx + d.x * 2 * r * spread, cy + d.y * 2 * r * spread];
	return <g opacity={opacity}>{pairs.map(([i, j]) => { const a = P(discs[i]), b = P(discs[j]); return <line key={`${i}-${j}`} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={color} strokeWidth={width} strokeLinecap="round" />; })}</g>;
};
/** Lines between every pair of proton discs. */
export const RepulsionWeb: React.FC<{cx: number; cy: number; r: number; discs: readonly ClusterDisc[]; color: string; opacity?: number; width?: number}> = ({cx, cy, r, discs, color, opacity = 1, width = 1.6}) => {
	if (opacity <= 0.001) return null;
	const ps = discs.filter(d => d.kind === 'p').map(d => [cx + d.x * 2 * r, cy + d.y * 2 * r] as const);
	const lines: React.ReactNode[] = [];
	for (let i = 0; i < ps.length; i++) for (let j = i + 1; j < ps.length; j++) lines.push(<line key={`${i}-${j}`} x1={ps[i][0]} y1={ps[i][1]} x2={ps[j][0]} y2={ps[j][1]} />);
	return <g opacity={opacity} stroke={color} strokeWidth={width}>{lines}</g>;
};
/** A named point on the binding-energy curve at the lesson's value. */
export const CurveMark: React.FC<{b: BCBox; A: number; B: number; text: string; color: string; size?: number; dx?: number; dy?: number; anchor?: 'start' | 'middle' | 'end'; opacity?: number; r?: number}> = ({b, A, B, text, color, size = 28, dx = 0, dy = -22, anchor = 'middle', opacity = 1, r = 10}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<circle cx={bcX(b, A)} cy={bcY(b, B)} r={r} fill={color} stroke="#fffdf8" strokeWidth={2.5} />
		<text x={bcX(b, A) + dx} y={bcY(b, B) + dy} textAnchor={anchor} style={T(size, color)}>{text}</text>
	</g>
));
