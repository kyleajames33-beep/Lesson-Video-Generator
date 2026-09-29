// Shared pieces for the bio-y11-m1a lane (Cells as the basis of life: cell
// structure, microscopy, membranes and transport). Lane-local on purpose
// (docs/diorama-system.md). Timing and paint helpers are reused read-only from
// the merged bio-y12-m7 lane (which itself re-exports the chem-y11-m1 ones).
//
// Lane additions: `CELLPAL` (the lane's colours of meaning), `Callouts` (label
// columns with leader lines that never overlap), `Stat` (a boxed line of
// working) and `beatOn` (on from one beat until the next).

import type {ReactNode} from 'react';
import {TOK} from '../../../../styles/tokens';
import {fadeAt, popAt, textWidth, wrap} from '../bio-y12-m7/shared';

export {Arrow, Ball, Chip, GlossDefs, Lines, Mark, Title, bioBeats, clamp, fadeAt, popAt, shade, textWidth, wrap, H, W} from '../bio-y12-m7/shared';

/** Colours of meaning for cells, membranes and particles. */
export const CELLPAL = {
	cyto: '#f6dcc4',
	cytoPlant: '#e4efcf',
	cytoProk: '#e8e0f2',
	membrane: '#c97b4a',
	wall: '#8c9a3c',
	wallProk: '#7d6aa8',
	capsule: '#c9b8e6',
	nucleus: '#8e5bd6',
	nucleolus: '#5b3596',
	dna: '#7a3fb0',
	mito: '#e0784a',
	chloro: '#4f9e3a',
	grana: '#2f6e25',
	er: '#d98fae',
	golgi: '#e3a94b',
	ribo: '#5a4a8a',
	lyso: '#6f8fcf',
	vacuole: '#bfe3f2',
	vesicle: '#f0c05a',
	centriole: '#8a8a8a',
	flag: '#9a7a5a',
	head: '#e7a36a',
	tail: '#b08a5a',
	protein: '#4f86c6',
	glyco: '#5fa34a',
	chol: '#e8c840',
	water: '#4aa3d8',
	solute: '#d0613a',
	o2: '#e0433a',
	co2: '#6b6b6b',
	glucose: '#e3a94b',
	ion: '#8e5bd6',
	urea: '#3fa58e',
	amino: '#c2527a',
	atp: '#f0a830',
	rbc: '#d2453a',
	glass: '#d8eef7',
} as const;

/** 1 while `at ≤ frame < next`, fading in and out over `len` frames. */
export const beatOn = (frame: number, at: number, next?: number, len = 10) =>
	fadeAt(frame, at, len) * (next === undefined ? 1 : 1 - fadeAt(frame, next, len));

/** A callout: a label in a side column joined to an anchor point by a leader. */
export type Callout = {
	text: string;
	note?: string;
	/** Anchor point the leader ends on (global viewBox coordinates). */
	ax: number;
	ay: number;
	at: number;
	side: 'left' | 'right';
	amber?: boolean;
};

/**
 * Lays callouts out in a left and a right column. Each column is sorted by
 * anchor height and pushed apart so blocks never overlap, then kept inside
 * [top, bottom]. Labels pop in on their beat; the newest one is drawn in the
 * accent colour, older ones settle to ink.
 */
export const Callouts = ({items, frame, fps, accent, leftX = 14, rightX = 746, colW = 150, top = 20, bottom = 520, size = 17, noteSize = 15}: {
	items: Callout[]; frame: number; fps: number; accent: string; leftX?: number; rightX?: number; colW?: number; top?: number; bottom?: number; size?: number; noteSize?: number;
}) => {
	const noteChars = Math.max(10, Math.floor(colW / (noteSize * 0.5)));
	const nameChars = Math.max(8, Math.floor(colW / (size * 0.56)));
	const blocks = items.map((c) => {
		const name = wrap(c.text, nameChars);
		const note = c.note ? wrap(c.note, noteChars) : [];
		const h = name.length * size * 1.15 + note.length * noteSize * 1.2 + 6;
		return {c, name, note, h, y: 0};
	});
	const layout = (side: 'left' | 'right') => {
		const col = blocks.filter((b) => b.c.side === side).sort((a, b) => a.c.ay - b.c.ay);
		const gap = 10;
		let y = top;
		for (const b of col) {
			b.y = Math.max(y, b.c.ay - b.h / 2);
			y = b.y + b.h + gap;
		}
		// push back up if the column ran off the bottom
		let over = y - gap - bottom;
		for (let i = col.length - 1; i >= 0 && over > 0; i--) {
			const b = col[i];
			const minY = i === 0 ? top : col[i - 1].y + col[i - 1].h + gap;
			const shift = Math.min(over, b.y - minY);
			if (shift > 0) {
				for (let j = i; j < col.length; j++) col[j].y -= shift;
				over -= shift;
			}
		}
	};
	layout('left');
	layout('right');
	const newest = items.reduce((m, c) => (c.at <= frame && c.at > m ? c.at : m), -Infinity);
	return (
		<g>
			{blocks.map((b, i) => {
				const p = popAt(frame, fps, b.c.at);
				if (p <= 0) return null;
				const o = Math.min(1, p);
				const left = b.c.side === 'left';
				const x = left ? leftX : rightX;
				const anchor = left ? 'start' : 'end';
				const w = Math.max(...b.name.map((l) => textWidth(l, size)), ...b.note.map((l) => textWidth(l, noteSize)), 10);
				const lx = left ? x + w + 6 : x - w - 6;
				const ly = b.y + size * 0.7;
				const col = b.c.amber ? TOK.amberInk : b.c.at === newest ? accent : TOK.ink;
				const t = Math.min(1, fadeAt(frame, b.c.at, 14));
				return (
					<g key={i} opacity={o}>
						<line x1={lx} y1={ly} x2={lx + (b.c.ax - lx) * t} y2={ly + (b.c.ay - ly) * t} stroke={b.c.amber ? TOK.amber : col} strokeWidth={2} strokeOpacity={0.8} />
						<circle cx={b.c.ax} cy={b.c.ay} r={4.5 * t} fill={b.c.amber ? TOK.amber : col} stroke="#fff" strokeWidth={1.5} />
						<text x={x} y={b.y + size} textAnchor={anchor} fill={col} fontSize={size} fontWeight={800}>
							{b.name.map((l, k) => (
								<tspan key={k} x={x} dy={k === 0 ? 0 : size * 1.15}>{l}</tspan>
							))}
						</text>
						{b.note.length > 0 && (
							<text x={x} y={b.y + b.name.length * size * 1.15 + noteSize + 2} textAnchor={anchor} fill={TOK.inkDim} fontSize={noteSize} fontWeight={700}>
								{b.note.map((l, k) => (
									<tspan key={k} x={x} dy={k === 0 ? 0 : noteSize * 1.2}>{l}</tspan>
								))}
							</text>
						)}
					</g>
				);
			})}
		</g>
	);
};

/** A white card holding one line of working (centre x, top y). */
export const Stat = ({x, y, text, color = TOK.ink, border, size = 19, opacity = 1, pad = 14}: {x: number; y: number; text: string; color?: string; border?: string; size?: number; opacity?: number; pad?: number}) => {
	const w = textWidth(text, size) + pad * 2;
	const h = size + 16;
	return (
		<g opacity={opacity}>
			<rect x={x - w / 2} y={y} width={w} height={h} rx={10} fill="#ffffff" stroke={border ?? 'rgba(0,0,0,0.12)'} strokeWidth={border ? 2.5 : 1.5} />
			<text x={x} y={y + h / 2 + size * 0.36} textAnchor="middle" fill={color} fontSize={size} fontWeight={800}>{text}</text>
		</g>
	);
};

/** Footer lines at the bottom of a diagram, each fading in on its beat. */
export const Footer = ({lines, frame, y0, amberInk, dim}: {lines: {text: string; at: number; amber?: boolean}[]; frame: number; y0: number; amberInk: string; dim: string}): ReactNode =>
	lines.map((f, i) => (
		<text key={i} x={380} y={y0 - (lines.length - 1 - i) * 24} textAnchor="middle" fill={f.amber ? amberInk : dim} fontSize={17} fontWeight={800} opacity={fadeAt(frame, f.at)}>
			{f.text}
		</text>
	));

/** Deterministic pseudo-random in [0, 1) from an integer seed. */
export const hash = (n: number) => {
	const s = Math.sin(n * 127.1 + 311.7) * 43758.5453;
	return s - Math.floor(s);
};
