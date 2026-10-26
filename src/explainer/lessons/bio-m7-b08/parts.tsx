// M7 B08 drawing parts: the coded display model (a small cup on a cell rim holding a notched piece, grey for the
// cell's own proteins and red for virus proteins; a T cell receptor drawn as a two-pronged fork whose prongs straddle
// one cup and piece), the airway cell with its cups (healthy and infected crossfade in place; the apoptotic partner
// comes in on top, then the old outline fades), the T cell (helper plate or its aligned cytotoxic partner, with a teal
// or amber ring and receptor forks), a small T clone tree, a coded neighbour-cell outline and a stress flag. B07 and
// B06 (M7) parts and b06's response strip are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, CARD, CTag, DrawPath, EDGE, GREYT, GREY_INK, GTag, Gloss, INK, INK_SOFT, MistakeChip, Pl, PlainArrow, PlateB, Ring, Sx, TEAL, TEAL_SOFT, TERRA,
	Travel, ZoomBox, clamp01, fitW, lerp, plH, prog, ptOf, pulse, rng, smooth, tw, vis, CardBox, Flow, Yg,
} from '../bio-m7-b07/parts';
import type {PB, Pt} from '../bio-m7-b07/parts';
import {Channel} from '../bio-m7-b06/parts';
import {FEAT, PLATES} from './assets';

export {
	AMBER, AMBER_INK, CARD, CTag, DrawPath, EDGE, GREYT, GREY_INK, GTag, Gloss, INK, INK_SOFT, MistakeChip, Pl, PlainArrow, PlateB, Ring, Sx, TEAL, TEAL_SOFT, TERRA,
	Travel, ZoomBox, clamp01, fitW, lerp, plH, prog, ptOf, pulse, rng, smooth, tw, vis, CardBox, Flow, Yg, Channel,
};
export type {PB, Pt};
export const VRED = '#c8323a';
const DEG = Math.PI / 180;

// ---------- the display model ----------
/** A display cup at (x, y) opening along `ang` (radians), size s, holding a grey (own) or red (virus) notched piece. */
export const Cup: React.FC<{x: number; y: number; ang: number; s: number; red?: boolean; o?: number; pieceO?: number; glow?: number; outline?: number}> = ({x, y, ang, s, red = false, o = 1, pieceO = 1, glow = 0, outline = 0}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) rotate(${ang / DEG + 90})`}>
		{glow > 0.01 ? <circle cx={0} cy={-0.7 * s} r={s * 1.2} fill={red ? VRED : TEAL} opacity={0.25 * glow} /> : null}
		{pieceO > 0.01 ? (
			<g opacity={pieceO}>
				<path d={`M${-0.42 * s},${-0.15 * s} L${-0.42 * s},${-1.15 * s} L${-0.12 * s},${-1.15 * s} L0,${-1.4 * s} L${0.12 * s},${-1.15 * s} L${0.42 * s},${-1.15 * s} L${0.42 * s},${-0.15 * s} Z`} fill={red ? VRED : '#a7a9ae'} stroke="#3a2a2a" strokeWidth={Math.max(1, s * 0.07)} strokeLinejoin="round" />
			</g>
		) : null}
		<path d={`M${-0.65 * s},${-0.95 * s} L${-0.65 * s},0 L${0.65 * s},0 L${0.65 * s},${-0.95 * s} L${0.5 * s},${-0.95 * s} L${0.5 * s},${-0.14 * s} L${-0.5 * s},${-0.14 * s} L${-0.5 * s},${-0.95 * s} Z`} fill="#e6d4a8" stroke="#6b5a32" strokeWidth={Math.max(1, s * 0.07)} strokeLinejoin="round" />
		{outline > 0.01 ? <rect x={-0.85 * s} y={-1.55 * s} width={1.7 * s} height={1.65 * s} rx={0.3 * s} fill="none" stroke={TEAL} strokeWidth={Math.max(2, s * 0.14)} opacity={outline} /> : null}
	</g>
));
/**
 * A T cell receptor: a stem from (x, y) along `ang` (radians), then a two-pronged fork opening outward. `notch` picks
 * the inner notch (0: a point that fits the virus piece's tip, 1: round, 2: square), so different T cells differ.
 */
export const Fork: React.FC<{x: number; y: number; ang: number; s: number; notch?: number; o?: number; lit?: number; grey?: number}> = ({x, y, ang, s, notch = 0, o = 1, lit = 0, grey = 0}) => {
	if (o <= 0.01) return null;
	const col = grey > 0.5 ? '#a0a2a8' : lit > 0.5 ? TEAL : '#3f5f8a';
	const sw = Math.max(1.5, s * 0.16);
	const q = (a: number, b: number) => `${(a * s).toFixed(2)},${(b * s).toFixed(2)}`;
	const notchD = notch === 0 ? `L${q(0, -0.75)} L${q(-0.2, -1.0)}` : notch === 1 ? `A${(0.2 * s).toFixed(2)},${(0.2 * s).toFixed(2)} 0 0 1 ${q(-0.2, -1.0)}` : notch === 2 ? `L${q(0.2, -0.8)} L${q(-0.2, -0.8)} L${q(-0.2, -1.0)}` : `L${q(0.1, -0.82)} L${q(0, -1.0)} L${q(-0.1, -0.82)} L${q(-0.2, -1.0)}`;
	const d = `M${q(-0.9, -2.2)} L${q(-0.9, -0.7)} L${q(0.9, -0.7)} L${q(0.9, -2.2)} L${q(0.72, -2.2)} L${q(0.72, -1.0)} L${q(0.2, -1.0)} ${notchD} L${q(-0.72, -1.0)} L${q(-0.72, -2.2)} Z`;
	return (
		<g opacity={o} transform={`translate(${x},${y}) rotate(${ang / DEG + 90})`}>
			<path d={`M0,0 L0,${-0.7 * s}`} stroke={col} strokeWidth={sw} strokeLinecap="round" />
			<path d={d} fill={grey > 0.5 ? '#d9dadd' : lit > 0.5 ? TEAL_SOFT : '#c9d6ea'} stroke={col} strokeWidth={Math.max(1.2, sw * 0.6)} strokeLinejoin="round" />
		</g>
	);
};
/** Where a fork stem must start so its prongs straddle a cup at (x, y) opening along `ang` (size s for both). */
export const seatFor = (x: number, y: number, ang: number, s: number): {p: Pt; a: number} => ({p: [x + Math.cos(ang) * 2.15 * s, y + Math.sin(ang) * 2.15 * s], a: ang + Math.PI});

// ---------- the airway cell ----------
export type CupSpec = {o?: number; red?: number[]; redO?: number; glowIdx?: number[]; glow?: number; outlineIdx?: number; outline?: number; only?: number[]; pieceO?: number};
/** Screen cup sites (point and outward angle) on an airway cell drawn at (cx, cy, w). */
export const cupSites = (cx: number, cy: number, w: number) => FEAT.cups.map(([u, v, a]) => ({p: ptOf(PLATES.cell, cx, cy, w, [u, v]), a: a * DEG}));
export const cupSize = (w: number) => 70 * (w / (PLATES.cell.box[2] - PLATES.cell.box[0]));
/**
 * The airway cell: `inf` crossfades healthy to infected in place; `apo` brings the apoptotic partner in on top
 * (first half), then fades the old outline (second half). `cups` draws the display model on its rim.
 */
export const AirCell: React.FC<{cx: number; cy: number; w: number; inf?: number; apo?: number; cups?: CupSpec; o?: number; grey?: number}> = ({cx, cy, w, inf = 0, apo = 0, cups, o = 1, grey = 0}) => {
	if (o <= 0.01) return null;
	const u = clamp01(inf), a = clamp01(apo);
	const aIn = clamp01(a * 2), oldOut = 1 - clamp01(a * 2 - 1);
	const flt = grey > 0.01 ? `grayscale(${grey})` : undefined;
	const s = cupSize(w);
	const sites = cupSites(cx, cy, w);
	return (
		<g opacity={o * (1 - 0.4 * clamp01(grey))}>
			<g opacity={oldOut}>
				<PlateB p={PLATES.cell} cx={cx} cy={cy} w={w} o={u < 1 ? 1 : 0} filter={flt} />
				<PlateB p={PLATES.infected} cx={cx} cy={cy} w={w} o={u} filter={flt} />
				{cups && (cups.o ?? 1) > 0.01 ? sites.map((st, i) => (cups.only && !cups.only.includes(i) ? null : (
					<Cup key={i} x={st.p[0]} y={st.p[1]} ang={st.a} s={s} red={(cups.red ?? []).includes(i) && (cups.redO ?? 1) > 0.5} o={cups.o ?? 1} pieceO={cups.pieceO ?? 1} glow={(cups.glowIdx ?? []).includes(i) ? cups.glow ?? 0 : 0} outline={cups.outlineIdx === i ? cups.outline ?? 0 : 0} />
				))) : null}
			</g>
			<PlateB p={PLATES.apoptotic} cx={cx} cy={cy} w={w} o={aIn} filter={flt} />
		</g>
	);
};

// ---------- the T cell ----------
export const forkSites = (cx: number, cy: number, w: number, angles = FEAT.forkAngles) => {
	const k = w / (PLATES.helper.box[2] - PLATES.helper.box[0]);
	const c = ptOf(PLATES.helper, cx, cy, w, FEAT.tC);
	return angles.map(d => ({p: [c[0] + Math.cos(d * DEG) * FEAT.tR * k, c[1] + Math.sin(d * DEG) * FEAT.tR * k] as Pt, a: d * DEG}));
};
/**
 * A T cell: `killer` crossfades the helper plate to its aligned cytotoxic partner; `ring` adds a teal (helper) or amber
 * (cytotoxic) ring; `forks` draws receptor forks (0 for none, as for the NK cell). `skip` hides one fork (the one a
 * scene draws seated).
 */
export const TCell: React.FC<{cx: number; cy: number; w: number; killer?: number; ring?: 'teal' | 'amber'; ringO?: number; forks?: number; notch?: number; lit?: number; grey?: number; glow?: number; o?: number; skip?: number; angles?: number[]}> = ({cx, cy, w, killer = 0, ring, ringO = 1, forks = 1, notch = 0, lit = 0, grey = 0, glow = 0, o = 1, skip = -1, angles}) => {
	if (o <= 0.01) return null;
	const kf = clamp01(killer), g = clamp01(grey);
	const flt = g > 0.01 ? `grayscale(${g})` : undefined;
	const s = w * 0.07;
	const col = ring === 'amber' ? AMBER : TEAL;
	return (
		<g opacity={o * (1 - 0.4 * g)}>
			{glow > 0.01 ? <circle cx={cx} cy={cy} r={w * 0.62} fill={lit > 0.5 ? TEAL : col} opacity={0.22 * glow} /> : null}
			{forks > 0.01 ? forkSites(cx, cy, w, angles).map((st, i) => (i === skip ? null : <Fork key={i} x={st.p[0]} y={st.p[1]} ang={st.a} s={s} notch={notch} o={forks} lit={lit} grey={g} />)) : null}
			<PlateB p={PLATES.helper} cx={cx} cy={cy} w={w} o={kf < 1 ? 1 : 0} filter={flt} />
			<PlateB p={PLATES.killer} cx={cx} cy={cy} w={w} o={kf} filter={flt} />
			{ring && ringO > 0.01 ? <circle cx={cx} cy={cy} r={w * 0.54} fill="none" stroke={g > 0.5 ? GREYT : col} strokeWidth={Math.max(3, w * 0.03)} opacity={ringO} /> : null}
		</g>
	);
};
/** A small T clone: root, 2, 4 copies to the right; `killer` and `ring` as TCell. */
export const TClone: React.FC<{x: number; y: number; at: number; dx?: number; h?: number; w?: number; killer?: number; ring?: 'teal' | 'amber'; ringO?: number; levels?: number; step?: number; o?: number}> = ({x, y, at, dx = 110, h = 220, w = 56, killer = 0, ring, ringO = 1, levels = 2, step = 14, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const lv: Pt[][] = [[[x, y]]];
	for (let l = 1; l <= levels; l++) {
		const n = 2 ** l;
		lv.push(Array.from({length: n}, (_, i) => [x + l * dx, y - h / 2 + (h * (i + 0.5)) / n] as Pt));
	}
	return (
		<g opacity={o}>
			{lv.slice(1).map((nodes, l) => nodes.map((p, i) => {
				const par = lv[l][Math.floor(i / 2)];
				const t = at + l * step;
				return f >= t ? <DrawPath key={`${l}-${i}`} d={`M${par[0] + w * 0.4},${par[1]} C${(par[0] + p[0]) / 2},${par[1]} ${(par[0] + p[0]) / 2},${p[1]} ${p[0] - w * 0.4},${p[1]}`} at={t} dur={step} color={INK_SOFT} width={3} /> : null;
			}))}
			{lv.slice(1).map((nodes, l) => nodes.map((p, i) => <TCell key={`n${l}-${i}`} cx={p[0]} cy={p[1]} w={w} killer={killer} ring={ring} ringO={ringO} forks={0} o={prog(f, at + l * step + step - 4, 8)} />))}
		</g>
	);
};

// ---------- small coded pieces ----------
/** A coded neighbour-cell outline (a tall rounded rectangle) with optional cups on its left rim. */
export const Outline: React.FC<{x: number; y: number; w: number; h: number; o?: number; dash?: boolean; color?: string}> = ({x, y, w, h, o = 1, dash = true, color = GREYT}) => (o <= 0.01 ? null : (
	<rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={w * 0.25} fill="#f7efe9" stroke={color} strokeWidth={3} strokeDasharray={dash ? '10 8' : undefined} opacity={o} />
));
/** A jagged grey flag on a rim point (a stress signal). */
export const StressFlag: React.FC<{x: number; y: number; ang: number; s: number; o?: number}> = ({x, y, ang, s, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) rotate(${ang / DEG + 90})`}>
		<path d={`M0,0 L0,${-1.6 * s}`} stroke="#6b6f73" strokeWidth={Math.max(2, s * 0.12)} />
		<path d={`M0,${-1.6 * s} L${0.9 * s},${-1.45 * s} L${0.55 * s},${-1.2 * s} L${1.0 * s},${-0.95 * s} L0,${-0.85 * s} Z`} fill="#8d9196" stroke="#4a4e52" strokeWidth={1.5} />
	</g>
));
/** Small dots streaming from a to b (cytokines, released proteins). */
export const Dots: React.FC<{a: Pt; b: Pt; at: number; out?: number; color?: string; n?: number; period?: number; r?: number}> = ({a, b, at, out, color = TEAL, n = 10, period = 40, r = 6}) => <Flow a={[a]} b={[b]} at={at} out={out} n={n} period={period} r={r} color={color} stroke={color === TEAL ? '#1f5a60' : '#7a4a10'} spread={14} />;
export const useF = () => useCurrentFrame();
void CARD; void CTag; void EDGE; void GTag; void Gloss; void INK; void MistakeChip; void Pl; void PlainArrow; void Ring; void Sx; void TERRA; void Travel; void ZoomBox; void fitW; void lerp; void plH; void pulse; void rng; void smooth; void tw; void vis; void CardBox; void Yg; void AMBER_INK; void GREY_INK; void Channel;
