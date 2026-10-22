// M6 B16 drawing parts: the "What is being copied?" board (two columns headed by the lamb and the plasmid bacterium,
// with how, what-is-copied and how-well bays), the mini board tab used while one column is expanded, criteria meters,
// coded nucleus and gene icons, the plasmid ring, soft cytoplasm patches (to hide a painted nucleus or the ICSI plate's
// sperm), switch glyphs, mitochondria glyphs, the thermometer and tube, colonies on a dish, the division tree, the
// genes plus environment balance and the histone thumbnail. B01, B07, B09, B10, B11, B13 and B15 parts are imported,
// never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog, rng} from '../../kit';
import {QMark, Sx, tw} from '../bio-m5-b13/shared';
import {AlleleRing, BIO_INK, Bact, CARD, EDGE, GREYT, GREY_INK, SlimStrand, Vial, clamp01, lerp, rungX, smooth, vis} from '../bio-m6-b01/parts';
import {platePt} from '../bio-m6-b07/parts';
import {Enzyme, Pl, plH} from '../bio-m6-b09/parts';
import {Embryos} from '../bio-m6-b10/parts';
import {Arr, MarkText, Pill} from '../bio-m6-b11/parts';
import {RingCluster} from '../bio-m6-b13/parts';
import {ClockRing} from '../bio-m6-b15/parts';
import {PLATES} from './assets';

export {AMBER, AMBER_INK, INK, INK_SOFT, BIO_INK, CARD, EDGE, GREYT, GREY_INK, AlleleRing, Bact, SlimStrand, Vial, clamp01, lerp, rungX, smooth, vis, prog, rng, DrawPath, platePt, Pl, plH, Enzyme, Embryos, Arr, MarkText, Pill, RingCluster, ClockRing, QMark, Sx, tw, PLATES};
export const TEAL = '#2f7f86', TEAL_SOFT = '#d6ecee', RED_BROWN = '#a5523a', GREEN = '#2f8a5b', PLUM = '#7a4a8c', MITO = '#d9714a';

// ---------- the board ----------
export type Side = 'L' | 'R';
export const COLS = {L: {x0: 110, x1: 930}, R: {x0: 990, x1: 1810}};
export const colCx = (s: Side) => (COLS[s].x0 + COLS[s].x1) / 2;
export const TITLE = {L: 'whole organism', R: 'one gene'};
export const GLOSS = {L: 'a new individual, same DNA', R: 'many copies of one piece of DNA'};
export const BAYS = ['how', 'what is copied', 'how well'];
/** A column head: plate at the left of the title; `lit` 0 greys it. */
export const ColHead: React.FC<{side: Side; x: number; y: number; o?: number; lit?: number; size?: number; pw?: number}> = ({side, x, y, o = 1, lit = 1, size = 38, pw = 150}) => {
	if (o <= 0.01) return null;
	const p = side === 'L' ? PLATES.lamb : PLATES.bactP;
	return (
		<g opacity={o}>
			<Pl p={p} cx={x + pw / 2} cy={y - size * 0.3} w={pw} dim={1 - lit} />
			<Sx x={x + pw + 18} y={y} text={TITLE[side]} size={size} color={lit > 0.5 ? INK : GREY_INK} weight={800} />
		</g>
	);
};
/** One bay of a full column: a rounded frame with a small grey label. */
export const Bay: React.FC<{side: Side; y: number; h: number; label: string; o?: number; lit?: number}> = ({side, y, h, label, o = 1, lit = 0}) => {
	if (o <= 0.01) return null;
	const c = COLS[side];
	return (
		<g opacity={o}>
			<rect x={c.x0} y={y} width={c.x1 - c.x0} height={h} rx={18} fill={lit > 0.5 ? '#fff8ea' : CARD} stroke={lit > 0.5 ? AMBER : EDGE} strokeWidth={lit > 0.5 ? 3.5 : 2.5} />
			<Sx x={c.x0 + 18} y={y + 34} text={label} size={22} color={GREY_INK} weight={700} />
		</g>
	);
};
/** The mini board tab at the top right while one column is expanded: two tabs, the active one lit, its bays as dots,
 * and the active column's current "what is copied" line in small grey. */
export const MiniBoard: React.FC<{active: Side; bay: number; what?: string; o?: number}> = ({active, bay, what, o = 1}) => {
	if (o <= 0.01) return null;
	const x0 = 1300, y0 = 36;
	return (
		<g opacity={o}>
			{(['L', 'R'] as Side[]).map((s, i) => {
				const on = s === active;
				const x = x0 + i * 270;
				return (
					<g key={s}>
						<rect x={x} y={y0} width={256} height={58} rx={14} fill={on ? '#fff8ea' : '#f1f1ef'} stroke={on ? AMBER : EDGE} strokeWidth={on ? 3 : 2} />
						<Pl p={s === 'L' ? PLATES.lamb : PLATES.bactP} cx={x + 40} cy={y0 + 29} w={s === 'L' ? 52 : 62} dim={on ? 0 : 1} />
						<Sx x={x + 80} y={y0 + 38} text={TITLE[s]} size={22} color={on ? INK : GREY_INK} weight={700} />
						{on ? BAYS.map((b, k) => <circle key={k} cx={x + 108 + k * 26} cy={y0 + 76} r={7} fill={k === bay ? AMBER : CARD} stroke={k === bay ? AMBER_INK : GREYT} strokeWidth={2} />) : null}
					</g>
				);
			})}
			{what ? <Sx x={x0 + 526} y={y0 + 118} text={what} size={22} color={GREY_INK} weight={600} anchor="end" /> : null}
		</g>
	);
};
/** Three short criterion bars with small grey labels; fills 0..1 drawn in their colours. */
export const Meter: React.FC<{x: number; y: number; labels: string[]; fills: number[]; colors: string[]; o?: number; w?: number; size?: number; gap?: number}> = ({x, y, labels, fills, colors, o = 1, w = 260, size = 22, gap = 50}) => {
	if (o <= 0.01) return null;
	const lw = Math.max(...labels.map(l => tw(l, size))) + 18;
	return (
		<g opacity={o}>
			{labels.map((l, i) => {
				const yy = y + i * gap;
				const p = clamp01(fills[i]);
				return (
					<g key={i}>
						<Sx x={x} y={yy + size * 0.8} text={l} size={size} color={GREY_INK} weight={700} />
						<rect x={x + lw} y={yy} width={w} height={size + 4} rx={(size + 4) / 2} fill={CARD} stroke={INK_SOFT} strokeWidth={2} />
						{p > 0.005 ? <rect x={x + lw + 2} y={yy + 2} width={Math.max(size, (w - 4) * p)} height={size} rx={size / 2} fill={colors[i]} /> : null}
					</g>
				);
			})}
		</g>
	);
};
/** A coded whole-nucleus icon: a round outline with a few slim chromosome squiggles. */
export const NucIcon: React.FC<{x: number; y: number; r?: number; o?: number}> = ({x, y, r = 54, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill="#efe4f1" stroke={PLUM} strokeWidth={3} />
		{[[-0.45, -0.3, 0.2], [0.1, -0.45, -0.4], [0.35, 0.1, 0.5], [-0.3, 0.3, -0.2], [0.05, 0.05, 0.9]].map(([dx, dy, a], i) => (
			<path key={i} d={`M${x + dx * r - 12 * Math.cos(a)},${y + dy * r - 12 * Math.sin(a)} q${8},${-10} ${24 * Math.cos(a)},${24 * Math.sin(a)}`} fill="none" stroke={PLUM} strokeWidth={4} strokeLinecap="round" />
		))}
	</g>
));
/** A short amber gene segment (slim double strand with amber rungs). */
export const GeneSeg: React.FC<{x: number; y: number; n?: number; o?: number; pitch?: number; gap?: number; draw?: number; lineW?: number}> = ({x, y, n = 6, o = 1, pitch = 22, gap = 22, draw = 1, lineW = 3.5}) => (o <= 0.01 ? null : (
	<SlimStrand x={x} y={y} n={n} pitch={pitch} gap={gap} o={o} draw={draw} lineW={lineW} color={AMBER_INK}
		band={{i0: 0, i1: n - 1, fill: '#fff3d9', color: AMBER, o: 1}} rung={() => ({color: AMBER, w: 5, o: 1})} />
));
/** A coded plasmid ring with an opening at the top (`gap` 0..1 of a 50 degree slot) and an amber insert in it. */
export const PlasmidRing: React.FC<{cx: number; cy: number; r: number; gap?: number; insert?: number; o?: number; sw?: number; color?: string}> = ({cx, cy, r, gap = 0, insert = 0, o = 1, sw = 7, color = TEAL}) => {
	if (o <= 0.01) return null;
	const half = (gap * 25 * Math.PI) / 180;
	const a0 = -Math.PI / 2 + half, a1 = -Math.PI / 2 + 2 * Math.PI - half;
	const P = (a: number): [number, number] => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
	const [x0, y0] = P(a0), [x1, y1] = P(a1);
	const ins = clamp01(insert);
	return (
		<g opacity={o}>
			{half > 0.001 ? <path d={`M${x0},${y0} A${r},${r} 0 1 1 ${x1},${y1}`} fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" /> : <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth={sw} />}
			{ins > 0.01 ? <path d={`M${P(-Math.PI / 2 - 0.42)[0]},${P(-Math.PI / 2 - 0.42)[1]} A${r},${r} 0 0 1 ${P(-Math.PI / 2 + 0.42)[0]},${P(-Math.PI / 2 + 0.42)[1]}`} fill="none" stroke={AMBER} strokeWidth={sw + 3} strokeLinecap="round" opacity={ins} /> : null}
		</g>
	);
};
/** A soft cytoplasm patch (blurred ellipse) that hides a painted detail. */
export const Patch: React.FC<{cx: number; cy: number; rx: number; ry: number; fill: string; o?: number; id: string; blur?: number}> = ({cx, cy, rx, ry, fill, o = 1, id, blur = 4}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<defs><filter id={id} x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation={blur} /></filter></defs>
		<ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={fill} filter={`url(#${id})`} />
	</g>
));
/** A small switch glyph on a chromosome: `on` 0 knob left (grey), 1 knob right (amber). */
export const Switch: React.FC<{x: number; y: number; on: number; o?: number; s?: number; stuck?: number}> = ({x, y, on, o = 1, s = 1, stuck = 0}) => {
	if (o <= 0.01) return null;
	const t = smooth(on);
	const w = 34 * s, h = 18 * s;
	return (
		<g opacity={o * (1 - 0.45 * clamp01(stuck))}>
			<rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={h / 2} fill={t > 0.5 ? '#fde7c4' : '#e3e4e5'} stroke={t > 0.5 ? AMBER_INK : GREYT} strokeWidth={2} />
			<circle cx={lerp(x - w / 2 + h / 2, x + w / 2 - h / 2, t)} cy={y} r={h / 2 - 2} fill={t > 0.5 ? AMBER : '#9aa0a6'} />
		</g>
	);
};
/** A small coded mitochondrion glyph. */
export const MitoG: React.FC<{x: number; y: number; s?: number; o?: number; rot?: number; color?: string; fill?: string}> = ({x, y, s = 1, o = 1, rot = 0, color = MITO, fill = '#f6c9b0'}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) rotate(${rot}) scale(${s})`}>
		<ellipse cx={0} cy={0} rx={20} ry={10} fill={fill} stroke={color} strokeWidth={2.5} />
		<path d="M-12,0 l4,-6 l4,12 l4,-12 l4,12 l4,-6" fill="none" stroke={color} strokeWidth={1.8} />
	</g>
));
/** A coded thermometer: `hot` 0 cool blue, 1 hot red. */
export const Thermo: React.FC<{x: number; y: number; hot: number; o?: number; s?: number}> = ({x, y, hot, o = 1, s = 1}) => {
	if (o <= 0.01) return null;
	const h = clamp01(hot);
	const col = h > 0.5 ? '#c4432f' : '#4f8fc0';
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
			<rect x={-10} y={-70} width={20} height={80} rx={10} fill={CARD} stroke={INK_SOFT} strokeWidth={3} />
			<circle cx={0} cy={22} r={16} fill={col} stroke={INK_SOFT} strokeWidth={3} />
			<rect x={-4} y={lerp(-10, -62, h)} width={8} height={lerp(30, 82, h)} rx={4} fill={col} />
		</g>
	);
};
/** A coded small tube outline. */
export const Tube: React.FC<{x: number; y: number; s?: number; o?: number; fill?: number}> = ({x, y, s = 1, o = 1, fill = 0.5}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<path d="M-22,-70 L22,-70 L22,40 Q22,70 0,70 Q-22,70 -22,40 Z" fill="#eef5f8" stroke={INK_SOFT} strokeWidth={3} />
		<path d={`M-19,${lerp(66, -60, fill)} L19,${lerp(66, -60, fill)} L19,40 Q19,66 0,66 Q-19,66 -19,40 Z`} fill="#f3e9c6" opacity={0.85} />
		<rect x={-27} y={-84} width={54} height={16} rx={5} fill="#b7c3cc" stroke={INK_SOFT} strokeWidth={2.5} />
	</g>
));
/** Coded cream colonies on an agar dish of screen radius R; `t` 0..1 spreads them (count and size). */
export const Colonies: React.FC<{cx: number; cy: number; R: number; n?: number; t: number; seed?: number; o?: number; r?: number}> = ({cx, cy, R, n = 60, t, seed = 7, o = 1, r = 7}) => {
	if (o <= 0.01 || t <= 0.001) return null;
	const rr = rng(seed);
	const pts = Array.from({length: n}, () => {
		const a = rr() * Math.PI * 2, d = Math.sqrt(rr()) * R * 0.86;
		return [cx + Math.cos(a) * d, cy + Math.sin(a) * d, 0.6 + rr() * 0.8] as [number, number, number];
	});
	return (
		<g opacity={o}>
			{pts.map(([x, y, k], i) => {
				const a = clamp01(t * n - i * 0.7);
				return a > 0.01 ? <circle key={i} cx={x} cy={y} r={r * k * (0.4 + 0.6 * a)} fill="#f6efd8" stroke="#c8b98a" strokeWidth={1.5} opacity={a} /> : null;
			})}
		</g>
	);
};
/** One bacterium doubling: level k has 2^k glyphs in column x0 + k * dx; `t` 0..levels grows the tree. */
export const DivTree: React.FC<{x0: number; y: number; h: number; dx: number; t: number; levels?: number; o?: number; w0?: number}> = ({x0, y, h, dx, t, levels = 4, o = 1, w0 = 110}) => {
	if (o <= 0.01) return null;
	const pos = (k: number, i: number): [number, number] => {
		const n = 2 ** k;
		return [x0 + k * dx, n === 1 ? y : y - h / 2 + ((i + 0.5) * h) / n];
	};
	const out: React.ReactNode[] = [];
	for (let k = 0; k <= levels; k++) {
		const a = k === 0 ? 1 : clamp01(t - (k - 1));
		if (a <= 0.01) continue;
		const n = 2 ** k;
		const w = Math.max(30, w0 * Math.pow(0.78, k));
		for (let i = 0; i < n; i++) {
			const [x, yy] = pos(k, i);
			if (k > 0) {
				const [px, py] = pos(k - 1, Math.floor(i / 2));
				out.push(<line key={`l${k}-${i}`} x1={px + w0 * Math.pow(0.78, k - 1) * 0.4} y1={py} x2={lerp(px, x - w * 0.55, smooth(a))} y2={lerp(py, yy, smooth(a))} stroke={GREYT} strokeWidth={2} opacity={0.7} />);
			}
			out.push(<g key={`b${k}-${i}`} opacity={smooth(a)}><Bact cx={x} cy={yy} w={w} ring="new" r={Math.max(5, w * 0.12)} /></g>);
		}
	}
	return <g opacity={o}>{out}</g>;
};
/** A small coded balance with two pans labelled with words. */
export const BalanceG: React.FC<{x: number; y: number; left: string; right: string; o?: number; size?: number}> = ({x, y, left, right, o = 1, size = 26}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<path d={`M${x},${y - 46} L${x},${y + 14} M${x - 30},${y + 14} L${x + 30},${y + 14}`} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
		<line x1={x - 150} y1={y - 40} x2={x + 150} y2={y - 40} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
		{[-1, 1].map(s => (
			<g key={s}>
				<line x1={x + s * 150} y1={y - 40} x2={x + s * 150} y2={y - 12} stroke={INK_SOFT} strokeWidth={2.5} />
				<path d={`M${x + s * 150 - 70},${y - 12} Q${x + s * 150},${y + 20} ${x + s * 150 + 70},${y - 12} Z`} fill="#f1ead9" stroke={INK_SOFT} strokeWidth={2.5} />
				<Sx x={x + s * 150} y={y + 46} text={s < 0 ? left : right} size={size} color={GREY_INK} hand anchor="middle" />
			</g>
		))}
	</g>
));
/** A grey coded histone thumbnail: a thread wound on three discs, with small tag dots. */
export const Spool: React.FC<{x: number; y: number; o?: number; s?: number}> = ({x, y, o = 1, s = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<rect x={-120} y={-70} width={240} height={140} rx={16} fill="#f1f1ef" stroke={GREYT} strokeWidth={2} />
		<path d="M-110,10 C-80,-30 -60,40 -40,0 C-20,-40 0,40 20,0 C40,-40 60,40 80,0 C90,-20 100,-10 110,-14" fill="none" stroke={GREY_INK} strokeWidth={3} />
		{[-60, 0, 60].map((dx, i) => (
			<g key={i}>
				<ellipse cx={dx} cy={2} rx={22} ry={18} fill="#d8dadc" stroke={GREY_INK} strokeWidth={2} />
				<circle cx={dx - 6} cy={-22} r={5} fill="#9aa0a6" />
				<circle cx={dx + 10} cy={-20} r={4} fill="#9aa0a6" />
			</g>
		))}
	</g>
));
/** A gene stack: one amber segment over `n` identical copies (silent thumbnail). */
export const GeneStack: React.FC<{x: number; y: number; n?: number; o?: number; dy?: number; seg?: number}> = ({x, y, n = 4, o = 1, dy = 34, seg = 5}) => (o <= 0.01 ? null : (
	<g opacity={o}>{Array.from({length: n}, (_, k) => <GeneSeg key={k} x={x} y={y + k * dy} n={seg} pitch={18} gap={16} lineW={3} />)}</g>
));
/** A small coded vial for frozen cells. */
export const FrozenVial: React.FC<{x: number; y: number; o?: number; s?: number}> = ({x, y, o = 1, s = 0.6}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<Vial x={x} y={y} s={s} fill={0.5} />
		{[[-14, 10], [10, 30], [-4, 50]].map(([dx, dy], i) => <path key={i} d={`M${x + dx * s - 6},${y + dy * s} l12,0 M${x + dx * s},${y + dy * s - 6} l0,12`} stroke="#6fa3c8" strokeWidth={2} />)}
	</g>
));
/** A small magnifier outline over a strip. */
export const MagStrip: React.FC<{x: number; y: number; o?: number}> = ({x, y, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<GeneSeg x={x - 60} y={y - 10} n={6} pitch={20} gap={18} lineW={3} />
		<circle cx={x + 10} cy={y} r={44} fill="none" stroke={INK_SOFT} strokeWidth={5} />
		<line x1={x + 42} y1={y + 32} x2={x + 74} y2={y + 64} stroke={INK_SOFT} strokeWidth={8} strokeLinecap="round" />
	</g>
));
/** Grey chips line for a column's gloss under its title. */
export const Gloss: React.FC<{side: Side; y: number; o?: number; lit?: number}> = ({side, y, o = 1, lit = 1}) => (o <= 0.01 ? null : (
	<Sx x={COLS[side].x0 + 170} y={y} text={GLOSS[side]} size={30} color={lit > 0.5 ? INK : GREY_INK} hand opacity={o} />
));
/** Column frame for the full board. */
export const ColFrame: React.FC<{side: Side; y0: number; y1: number; o?: number; draw?: number}> = ({side, y0, y1, o = 1, draw = 1}) => {
	if (o <= 0.01) return null;
	const c = COLS[side];
	const d = `M${c.x0},${y0 + 20} Q${c.x0},${y0} ${c.x0 + 20},${y0} L${c.x1 - 20},${y0} Q${c.x1},${y0} ${c.x1},${y0 + 20} L${c.x1},${y1 - 20} Q${c.x1},${y1} ${c.x1 - 20},${y1} L${c.x0 + 20},${y1} Q${c.x0},${y1} ${c.x0},${y1 - 20} Z`;
	return <path d={d} fill="none" stroke={EDGE} strokeWidth={3} pathLength={1} strokeDasharray={`${clamp01(draw)} 1`} opacity={o} />;
};
export const useF = () => useCurrentFrame();
void AlleleRing; void rungX; void vis; void prog; void Enzyme; void Embryos; void Arr; void MarkText; void Pill; void RingCluster; void ClockRing; void QMark; void plH; void BIO_INK; void DrawPath;
