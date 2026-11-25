// Module 8 kit, part 4: where the elements come from (additive kit file, 26 November 2026; first used by
// phys-y12-m8-v06). Course-neutral: every label, number and colour of meaning comes from the lesson.
// Plates (visible boxes measured from the alpha channel, threshold 20, on 26 November 2026):
//   painted gold ring (1402 x 1122, a plain band, alone); painted planetary nebula (1254 x 1254, illustrative);
//   painted core-collapse supernova remnant (1341 x 1173, illustrative).
// - TempLadder: a vertical log temperature scale with ignition marks and an optional reach bar (log scale, labelled
//   by the lesson).
// - Onion: concentric shells drawn from the centre (each shell a fill colour and a label).
// - NZ chart helpers: a neutron-number (across) by proton-number (up) grid with nuclide points and steps.
// - Periodic table: element symbols 1 to 92 in the standard 18-column layout (lanthanides and actinides in two rows
//   below), each cell coloured by a lesson-supplied source; and ElementStrip, all 92 cells in one row.
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {INK} from '../../shared/tokens';
import type {LightSpec} from '../light/plates';

const P = (name: string) => `assets/physics/${name}.png`;
export const GOLD_RING: LightSpec = {src: P('y12p-gold-ring-v1'), W: 1402, H: 1122, box: [306, 300, 1093, 872]};
export const NEBULA: LightSpec = {src: P('y12p-planetary-nebula-v1'), W: 1254, H: 1254, box: [42, 62, 1214, 1180]};
export const REMNANT: LightSpec = {src: P('y12p-supernova-remnant-v1'), W: 1341, H: 1173, box: [92, 26, 1256, 1123]};
export const ELEMENT_PLATES = [GOLD_RING, NEBULA, REMNANT].map(s => s.src);
const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color});

// ---------------------------------------------------------------- the temperature ladder
export type Ladder = {x: number; y0: number; y1: number; lo: number; hi: number};
/** Screen y of temperature T (K) on a log ladder from 10^lo (bottom, y0) to 10^hi (top, y1). */
export const ladderY = (g: Ladder, T: number) => g.y0 - ((Math.log10(T) - g.lo) / (g.hi - g.lo)) * (g.y0 - g.y1);
export type LadderMark = {T: number; label: string; side?: 'left' | 'right'; o?: number; color?: string; extra?: string; dy?: number};
export const TempLadder: React.FC<{g: Ladder; marks: readonly LadderMark[]; color: string; size?: number; opacity?: number; w?: number}> = ({g, marks, color, size = 28, opacity = 1, w = 26}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<rect x={g.x - w / 2} y={g.y1 - 10} width={w} height={g.y0 - g.y1 + 20} rx={w / 2} fill="#fffdf8" stroke={color} strokeWidth={4} />
		{marks.map((m, i) => {
			const y = ladderY(g, m.T), o = m.o ?? 1, left = m.side === 'left';
			return o > 0.001 ? <g key={i} opacity={o}>
				<line x1={g.x - w / 2 - 12} y1={y} x2={g.x + w / 2 + 12} y2={y} stroke={m.color ?? color} strokeWidth={4} />
				<text x={left ? g.x - w / 2 - 20 : g.x + w / 2 + 20} y={y + (m.dy ?? 0) + size * 0.35} textAnchor={left ? 'end' : 'start'} style={T(size, m.color ?? color)}>{m.label}</text>
				{m.extra ? <text x={left ? g.x + w / 2 + 20 : g.x - w / 2 - 20} y={y + size * 0.35} textAnchor={left ? 'start' : 'end'} style={T(size, m.color ?? color)}>{m.extra}</text> : null}
			</g> : null;
		})}
	</g>
));
/** A reach bar beside the ladder, from the bottom up to temperature T. */
export const ReachBar: React.FC<{g: Ladder; T: number; dx: number; color: string; w?: number; opacity?: number}> = ({g, T, dx, color, w = 22, opacity = 1}) => (opacity <= 0.001 ? null : (
	<rect x={g.x + dx - w / 2} y={ladderY(g, T)} width={w} height={Math.max(0, g.y0 - ladderY(g, T))} rx={6} fill={color} opacity={opacity} />
));

// ---------------------------------------------------------------- onion layers
export type Shell = {r: number; fill: string; label?: string; o?: number};
/** Concentric shells about (cx, cy), drawn outermost first. */
export const Onion: React.FC<{cx: number; cy: number; shells: readonly Shell[]; stroke?: string; opacity?: number}> = ({cx, cy, shells, stroke = INK, opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		{[...shells].sort((a, b) => b.r - a.r).map((s, i) => (s.o ?? 1) > 0.001 ? <circle key={i} cx={cx} cy={cy} r={s.r} fill={s.fill} stroke={stroke} strokeWidth={3} opacity={s.o ?? 1} /> : null)}
	</g>
));

// ---------------------------------------------------------------- N-Z chart
export type NZBox = {x: number; y: number; cell: number; n0: number; z0: number; nN: number; nZ: number};
/** Screen point of a nuclide (N neutrons across, Z protons up). */
export const nzPt = (b: NZBox, N: number, Z: number): [number, number] => [b.x + (N - b.n0 + 0.5) * b.cell, b.y + (b.nZ - (Z - b.z0) - 0.5) * b.cell];
export const NZGrid: React.FC<{b: NZBox; size?: number; opacity?: number}> = ({b, size = 26, opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		{Array.from({length: b.nN + 1}, (_, i) => <line key={`v${i}`} x1={b.x + i * b.cell} y1={b.y} x2={b.x + i * b.cell} y2={b.y + b.nZ * b.cell} stroke="#d8cfbd" strokeWidth={2} />)}
		{Array.from({length: b.nZ + 1}, (_, i) => <line key={`h${i}`} x1={b.x} y1={b.y + i * b.cell} x2={b.x + b.nN * b.cell} y2={b.y + i * b.cell} stroke="#d8cfbd" strokeWidth={2} />)}
		{Array.from({length: b.nN}, (_, i) => <text key={`n${i}`} x={b.x + (i + 0.5) * b.cell} y={b.y + b.nZ * b.cell + size + 6} textAnchor="middle" style={T(size, INK, 700)}>{b.n0 + i}</text>)}
		{Array.from({length: b.nZ}, (_, i) => <text key={`z${i}`} x={b.x - 12} y={b.y + (b.nZ - i - 0.5) * b.cell + size * 0.35} textAnchor="end" style={T(size, INK, 700)}>{b.z0 + i}</text>)}
	</g>
));

// ---------------------------------------------------------------- the periodic table
export const SYMBOLS = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U'] as const;
/** Row (0 to 6 main; 7 and 8 the lanthanide and actinide rows) and column (0 to 17) of element Z (1 to 92). */
export const cellOf = (Z: number): [number, number] => {
	if (Z === 1) return [0, 0];
	if (Z === 2) return [0, 17];
	const period = (start: number, row: number): [number, number] | null => {
		const k = Z - start;
		if (k < 0 || k > 7) return null;
		return [row, k < 2 ? k : k + 10];
	};
	if (Z <= 10) return period(3, 1)!;
	if (Z <= 18) return period(11, 2)!;
	if (Z <= 36) return [3, Z - 19];
	if (Z <= 54) return [4, Z - 37];
	if (Z <= 56) return [5, Z - 55];
	if (Z <= 71) return [7, Z - 57 + 2];
	if (Z <= 86) return [5, Z - 72 + 3];
	if (Z <= 88) return [6, Z - 87];
	return [8, Z - 89 + 2];
};
export type PTBox = {x: number; y: number; cw: number; ch: number; gap?: number};
export const ptCell = (b: PTBox, Z: number) => { const [r, c] = cellOf(Z), g = b.gap ?? 4, fy = r >= 7 ? 14 : 0; return {x: b.x + c * (b.cw + g), y: b.y + r * (b.ch + g) + fy, w: b.cw, h: b.ch}; };
/** The table: `fill(Z)` gives each cell's colour (and an optional stripe colour for a second source). */
export const PeriodicTable: React.FC<{b: PTBox; fill: (Z: number) => {color: string; stripe?: string}; size?: number; opacity?: number; upTo?: number; symbols?: boolean}> = ({b, fill, size = 26, opacity = 1, upTo = 92, symbols = true}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<defs><pattern id="pt-stripe" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="12" fill="#ffffff" opacity={0.55} /></pattern></defs>
		{SYMBOLS.slice(0, upTo).map((s, i) => {
			const Z = i + 1, c = ptCell(b, Z), fl = fill(Z);
			return <g key={Z}>
				<rect x={c.x} y={c.y} width={c.w} height={c.h} rx={6} fill={fl.color} stroke="rgba(60,45,20,0.35)" strokeWidth={2} />
				{fl.stripe ? <rect x={c.x} y={c.y} width={c.w} height={c.h} rx={6} fill="url(#pt-stripe)" /> : null}
				{symbols ? <text x={c.x + c.w / 2} y={c.y + c.h / 2 + size * 0.36} textAnchor="middle" style={T(size, INK)}>{s}</text> : null}
			</g>;
		})}
	</g>
));
/** All 92 elements in one row (a strip), x0 to x0 + 92 w, coloured by `fill`. */
export const ElementStrip: React.FC<{x0: number; y: number; w: number; h: number; fill: (Z: number) => string; opacity?: number; pulse?: number; hideZ?: number}> = ({x0, y, w, h, fill, opacity = 1, pulse = 0, hideZ}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		{SYMBOLS.map((_, i) => (i + 1 === hideZ ? null : <rect key={i} x={x0 + i * w} y={y - pulse * 6} width={w - 1.5} height={h + pulse * 12} fill={fill(i + 1)} stroke="rgba(60,45,20,0.3)" strokeWidth={1} />))}
	</g>
));
