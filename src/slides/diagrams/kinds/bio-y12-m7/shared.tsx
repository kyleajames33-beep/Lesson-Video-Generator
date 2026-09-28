// Shared pieces for the bio-y12-m7 (Infectious Disease) diorama kinds.
//
// Timing and drawing helpers are reused read-only from the merged chem-y11-m1
// lane (fadeAt, popAt, Chip, Arrow, GlossDefs, Ball). `textWidth` comes from
// chem-y12-m6. Lane-local additions: `Title`, `Mark` (tick / cross), `PAL`
// (the lane's colours of meaning) and `bioBeats` (merge JSON beats over
// defaults). Icons live in icons.tsx.

import {TOK} from '../../../../styles/tokens';

export {clamp, fadeAt, popAt, shade, Chip, Arrow, GlossDefs, Ball} from '../chem-y11-m1/shared';
export {textWidth} from '../chem-y12-m6/shared';

export const W = 760;
export const H = 530;

/** Lane palette. Glossy fills are built from these by `GlossDefs`. */
export const PAL = {
	virus: '#c2527a',
	bacterium: '#5fa34a',
	fungus: '#c99a3a',
	protozoan: '#8e6bd6',
	worm: '#e39a9a',
	prion: '#7d86a8',
	rna: '#e07a2a',
	protein: '#4f86c6',
	cell: '#f0c6a4',
	nucleus: '#8e5bd6',
	person: '#6f93b8',
	sick: '#d9644a',
	immune: '#5b8fd6',
	antibody: '#3f6fd8',
	plant: '#5f9e3a',
	leafSick: '#c9b23a',
	dead: '#8a6a4a',
	water: '#4aa3d8',
	blood: '#c8433a',
	mosquito: '#4a4a52',
	glass: '#d8eef7',
	agar: '#f2dfa0',
	grey: '#a4a4a4',
	stop: '#b3261e',
} as const;

/** Names every kind asks GlossDefs for (so icons can use any of them). */
export const GLOSS: Record<string, string> = {...PAL};

export const Title = ({text, opacity = 1, y = 32}: {text: string; opacity?: number; y?: number}) => (
	<text x={W / 2} y={y} textAnchor="middle" fill={TOK.ink} fontSize={25} fontWeight={800} opacity={opacity}>
		{text}
	</text>
);

/** A round tick or cross badge. */
export const Mark = ({x, y, ok, r = 12, opacity = 1}: {x: number; y: number; ok: boolean; r?: number; opacity?: number}) => (
	<g opacity={opacity} transform={`translate(${x},${y})`}>
		<circle r={r} fill={ok ? '#2e8b57' : PAL.stop} />
		{ok ? (
			<path d={`M ${-r * 0.45} 0 L ${-r * 0.1} ${r * 0.38} L ${r * 0.5} ${-r * 0.4}`} fill="none" stroke="#fff" strokeWidth={r * 0.28} strokeLinecap="round" strokeLinejoin="round" />
		) : (
			<path d={`M ${-r * 0.4} ${-r * 0.4} L ${r * 0.4} ${r * 0.4} M ${r * 0.4} ${-r * 0.4} L ${-r * 0.4} ${r * 0.4}`} stroke="#fff" strokeWidth={r * 0.28} strokeLinecap="round" />
		)}
	</g>
);

/** Merge JSON beats over a kind's defaults. */
export const bioBeats = <T extends Record<string, number>>(defaults: T, beats?: Partial<T>): T => ({...defaults, ...(beats ?? {})});

/** Word-wrap a label into lines of at most `max` characters. */
export const wrap = (text: string, max: number): string[] => {
	const out: string[] = [];
	let line = '';
	for (const w of text.split(' ')) {
		if (line && (line + ' ' + w).length > max) {
			out.push(line);
			line = w;
		} else line = line ? line + ' ' + w : w;
	}
	if (line) out.push(line);
	return out;
};

/** Multi-line centred text. */
export const Lines = ({x, y, lines, size = 16, color = TOK.ink, weight = 800, lh = 1.2, opacity = 1, anchor = 'middle'}: {
	x: number; y: number; lines: string[]; size?: number; color?: string; weight?: number; lh?: number; opacity?: number; anchor?: 'middle' | 'start' | 'end';
}) => (
	<text x={x} y={y} textAnchor={anchor} fill={color} fontSize={size} fontWeight={weight} opacity={opacity}>
		{lines.map((l, i) => (
			<tspan key={i} x={x} dy={i === 0 ? 0 : size * lh}>{l}</tspan>
		))}
	</text>
);
