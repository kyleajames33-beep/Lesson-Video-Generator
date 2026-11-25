// Lesson parts for phys-y12-m8-v05: the colour roles (design "Colour key (Revision 2)" with root rule R1), the nuclear
// equations of the pp chain and the CNO cycle (terms for the kit's NucEq), the core inset, mass bars with a drawn gap,
// the CNO ring geometry and v04's parts re-exported.
// Colour key: protons rose discs; neutrons grey discs; positrons hollow rose rings; electrons navy; neutrinos small grey
// dots; gamma photons amber packets; mass and Δm teal; energy amber; core temperature red; A and Z tallies ink with
// green ticks; repulsion red; gravity navy, pressure amber; answers in dark-ink frames; mistakes slate (R1).
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {TONES} from '../../shared/tokens';
import {Nucleus, Particle} from '../../physics/light/massenergy';
import type {NucTerm} from '../../physics/atom/nuclear';
import {AMBER, BLUE, GREY, Givens, HRDiagram, INK, Lbl, NAVY, NEUTRON, PURPLE, RED, ROSE, Shrunk, Strip, TEAL, V04_PLATES, VIOLET, fx, sci} from '../phys-y12-m8-v04/parts';

export {AMBER, BLUE, GREY, Givens, HRDiagram, INK, Lbl, NAVY, NEUTRON, PURPLE, RED, ROSE, Shrunk, Strip, TEAL, VIOLET, fx, sci};
export const GREEN = TONES.green;
export const V05_PLATES = [...V04_PLATES];
const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color});

// ---------------------------------------------------------------- nuclides and equations
export const H1 = {A: 1, Z: 1, s: 'H'}, H2 = {A: 2, Z: 1, s: 'H'}, HE3 = {A: 3, Z: 2, s: 'He'}, HE4 = {A: 4, Z: 2, s: 'He'}, POS = {A: 0, Z: '+1', s: 'e'};
export const C12 = {A: 12, Z: 6, s: 'C'}, N13 = {A: 13, Z: 7, s: 'N'}, C13 = {A: 13, Z: 6, s: 'C'}, N14 = {A: 14, Z: 7, s: 'N'}, O15 = {A: 15, Z: 8, s: 'O'}, N15 = {A: 15, Z: 7, s: 'N'};
export const PP1: NucTerm[] = [H1, '+', H1, '→', H2, '+', POS, '+', 'ν'];
export const PP2: NucTerm[] = [H2, '+', H1, '→', HE3, '+', 'γ'];
export const PP3: NucTerm[] = [HE3, '+', HE3, '→', HE4, '+', {...H1, k: 2}];
export const NET: NucTerm[] = [{...H1, k: 4}, '→', HE4, '+', {...POS, k: 2}, '+', '2ν', '+', 'energy'];
export const CNO: NucTerm[][] = [
	[C12, '+', H1, '→', N13, '+', 'γ'],
	[N13, '→', C13, '+', POS, '+', 'ν'],
	[C13, '+', H1, '→', N14, '+', 'γ'],
	[N14, '+', H1, '→', O15, '+', 'γ'],
	[O15, '→', N15, '+', POS, '+', 'ν'],
	[N15, '+', H1, '→', C12, '+', HE4],
];
/** The nucleus at each CNO station (the carbon that comes back is station 0 again). */
export const CNO_NUC = [{t: '¹²C', p: 6, n: 6}, {t: '¹³N', p: 7, n: 6}, {t: '¹³C', p: 6, n: 7}, {t: '¹⁴N', p: 7, n: 7}, {t: '¹⁵O', p: 8, n: 7}, {t: '¹⁵N', p: 7, n: 8}] as const;

// ---------------------------------------------------------------- the core inset
/** A round core inset at (cx, cy) radius r: four ¹H discs, a dashed arrow, "?" and a ⁴He nucleus (v04's join). */
export const CoreInset: React.FC<{cx: number; cy: number; r: number; pulseH?: number; pulseHe?: number; q?: number}> = ({cx, cy, r, pulseH = 0, pulseHe = 0, q = 1}) => {
	const k = r / 150;
	return (
		<g>
			<circle cx={cx} cy={cy} r={r} fill="#fff1d0" stroke={AMBER.stroke} strokeWidth={4} />
			{[[-80, -40], [-40, -70], [-80, 30], [-40, 60]].map(([dx, dy], i) => <Particle key={i} x={cx + dx * k} y={cy + dy * k} r={22 * k * (1 + 0.25 * pulseH)} color={ROSE.stroke} text="¹H" size={18 * k} />)}
			<path d={`M${cx - 10 * k},${cy} H${cx + 40 * k}`} stroke={INK} strokeWidth={4} strokeDasharray="8 6" /><path d={`M${cx + 54 * k},${cy} l-16,-9 v18 z`} fill={INK} />
			<Nucleus cx={cx + 94 * k} cy={cy} p={2} n={2} r={14 * k * (1 + 0.25 * pulseHe)} proton={ROSE.stroke} neutron={NEUTRON} />
			<text x={cx + 20 * k} y={cy - 22 * k} textAnchor="middle" opacity={q} style={T(40 * k, INK)}>?</text>
		</g>
	);
};

// ---------------------------------------------------------------- mass bars
/** Two vertical mass bars (teal) standing on `base`: the left full height h, the right shorter by `gap` px (a drawn gap). */
export const MassBars: React.FC<{x: number; base: number; h: number; gap: number; w?: number; sep?: number; grow?: number; opacity?: number}> = ({x, base, h, gap, w = 110, sep = 70, grow = 1, opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<rect x={x} y={base - h * grow} width={w} height={h * grow} rx={6} fill={TEAL.soft} stroke={TEAL.stroke} strokeWidth={3.5} />
		<rect x={x + w + sep} y={base - (h - gap) * grow} width={w} height={(h - gap) * grow} rx={6} fill={TEAL.soft} stroke={TEAL.stroke} strokeWidth={3.5} />
		<rect x={x + w + sep} y={base - h * grow} width={w} height={gap * grow} rx={3} fill="none" stroke={TEAL.stroke} strokeWidth={2.5} strokeDasharray="6 5" />
		<line x1={x - 20} y1={base} x2={x + 2 * w + sep + 20} y2={base} stroke={INK} strokeWidth={3} />
	</g>
));

// ---------------------------------------------------------------- the CNO ring
export type Ring = {cx: number; cy: number; r: number};
/** Station k (0 to 5) on the ring, starting at the top and going clockwise. */
export const station = (g: Ring, k: number): [number, number] => { const a = (-90 + 60 * k) * (Math.PI / 180); return [g.cx + g.r * Math.cos(a), g.cy + g.r * Math.sin(a)]; };
/** A point a fraction u (0 to 6) of the way round the ring from station 0. */
export const ringAt = (g: Ring, u: number): [number, number] => { const a = (-90 + 60 * u) * (Math.PI / 180); return [g.cx + g.r * Math.cos(a), g.cy + g.r * Math.sin(a)]; };
/** The ring with arrowheads between stations and a dot at each station. */
export const RingTrack: React.FC<{g: Ring; color?: string; opacity?: number; lit?: number}> = ({g, color = INK, opacity = 1, lit = 6}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<circle cx={g.cx} cy={g.cy} r={g.r} fill="none" stroke={GREY.stroke} strokeWidth={4} strokeDasharray="12 9" />
		{Array.from({length: 6}, (_, k) => {
			const [mx, my] = ringAt(g, k + 0.5), a = -90 + 60 * (k + 0.5) + 90;
			return <path key={k} d="M-12,-10 L8,0 L-12,10 z" transform={`translate(${mx} ${my}) rotate(${a})`} fill={k < lit ? color : GREY.stroke} />;
		})}
	</g>
));
/** A labelled nucleus disc (CNO ring and later stages): ink outline, symbol inside. */
export const NucDisc: React.FC<{x: number; y: number; r?: number; text: string; fill?: string; size?: number; opacity?: number}> = ({x, y, r = 38, text, fill = '#efe6d2', size, opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<circle cx={x} cy={y} r={r} fill={fill} stroke={INK} strokeWidth={4} />
		<text x={x} y={y + (size ?? Math.max(20, r * 0.62)) * 0.36} textAnchor="middle" style={T(size ?? Math.max(20, r * 0.62), INK)}>{text}</text>
	</g>
));
