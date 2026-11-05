// M6 B07 quality pass (6 Nov): the brief 88 painted cell-division plates placed on screen for scenes 3, 4 and 11.
// The chromosomes are painted in (never coded bars over a cell); code adds only allele beads BESIDE the painted
// chromosomes, leaders, rings and tags, placed from the brief 88 anchors copied into bio-m5-b05a/cd.tsx (AN).
// Imports B5a's plate helpers; nothing shared is edited.
import React from 'react';
import {AN, CD, PL, usePlates} from '../bio-m5-b05a/cd';
import {AMBER, AMBER_INK, INK} from '../../kit';
import {ABead} from './parts';

export {AN, CD};
/** A 2000 x 2000 painted canvas centred at (cx, cy), drawn `size` px wide on screen. */
export type Place = {cx: number; cy: number; size: number};
export const pt = (pl: Place, nx: number, ny: number): [number, number] => [pl.cx - pl.size / 2 + (nx * pl.size) / 2000, pl.cy - pl.size / 2 + (ny * pl.size) / 2000];
export const lerpPlace = (a: Place, b: Place, t: number): Place => ({cx: a.cx + (b.cx - a.cx) * t, cy: a.cy + (b.cy - a.cy) * t, size: a.size + (b.size - a.size) * t});

/** One or more stage plates on one canvas, each with its own opacity (crossfades between stages). */
export const CdStage: React.FC<{pl: Place; layers: {src: string; o: number; box?: [number, number, number, number]; mirror?: number; sx?: number; feather?: number}[]; preload: string[]}> = ({pl, layers, preload}) => {
	usePlates(preload);
	return (
		<g transform={`translate(${pl.cx - pl.size / 2},${pl.cy - pl.size / 2}) scale(${pl.size / 2000})`}>
			{layers.map((l, i) => (l.o > 0.004 ? <PL key={i} src={l.src} o={l.o} box={l.box} mirror={l.mirror} sx={l.sx} feather={l.feather} /> : null))}
		</g>
	);
};

/** An allele bead placed beside a painted chromosome at native (nx, ny), with a dotted leader to the painted point (tx, ty). */
export const SideBead: React.FC<{pl: Place; at: [number, number]; to?: [number, number]; l: string; amber?: boolean; o?: number; r?: number; glow?: number}> = ({pl, at, to, l, amber = false, o = 1, r = 26, glow = 0}) => {
	if (o <= 0.01) return null;
	const [x, y] = pt(pl, at[0], at[1]);
	const t = to ? pt(pl, to[0], to[1]) : null;
	return (
		<g opacity={o}>
			{t ? <line x1={x} y1={y} x2={t[0]} y2={t[1]} stroke={amber ? AMBER_INK : INK} strokeWidth={3} strokeDasharray="3 6" strokeLinecap="round" /> : null}
			{t ? <circle cx={t[0]} cy={t[1]} r={5} fill={amber ? AMBER : INK} /> : null}
			<ABead x={x} y={y} l={l} r={r} amber={amber} glow={glow} />
		</g>
	);
};

/** Stage plates used by this lesson (for the slim bundler). */
export const CD_USED = ['homologous-pair-loci', 'm1-metaphase', 'm1-metaphase-empty', 'm1-anaphase', 'm1-telophase', 'four-cells', 'crossing-over-a', 'crossing-over-b', 'crossing-over-c'].map(n => CD(n));
