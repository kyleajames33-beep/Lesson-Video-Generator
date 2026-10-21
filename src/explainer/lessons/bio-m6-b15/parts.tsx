// M6 B15 drawing parts: the comparison board (two plate-headed columns, a rail of feature rows added one per scene, the
// active row drawn large in the columns below), clipped plates (the wheat ear and floret halves of one plate), sperm
// glyphs with an X or Y, the sorting gate, coded straws, the clock ring, pollen dots and wind wisps, the isolation
// outline, flower glyphs, the reach map (farm dots and dotted paths on the world map plate), the sire fan pieces and
// male and female symbols. B01, B07, B08, B09, B10, B11, B12 and B13 parts are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {Sx} from '../bio-m5-b13/shared';
import {PlateB} from '../bio-m5-b07/shared';
import type {PB} from '../bio-m5-b07/shared';
import {BIO_INK, CARD, EDGE, GREYT, GREY_INK, FillBar, SlimStrand, Vial, clamp01, lerp, smooth, vis} from '../bio-m6-b01/parts';
import {platePt, tw} from '../bio-m6-b07/parts';
import {Rg} from '../bio-m6-b08/parts';
import type {RK} from '../bio-m6-b08/parts';
import {GreyTick, Pl, plH} from '../bio-m6-b09/parts';
import {Embryos} from '../bio-m6-b10/parts';
import {MarkText, Pill} from '../bio-m6-b11/parts';
import {FemaleSym} from '../bio-m6-b12/parts';
import {RingCluster, clusterPt} from '../bio-m6-b13/parts';
import {FARMS, ORIGIN, PLATES} from './assets';

export {AMBER, AMBER_INK, INK, INK_SOFT, BIO_INK, CARD, EDGE, GREYT, GREY_INK, FillBar, SlimStrand, Vial, clamp01, lerp, smooth, vis, prog, DrawPath, Pl, plH, platePt, tw, Rg, GreyTick, Embryos, MarkText, Pill, FemaleSym, RingCluster, clusterPt, PLATES};
export type {RK};
export const GREEN = '#2f8a5b', POLLEN = '#f3d27a';

/** A plate drawn clipped to its alpha box (for the two halves of the wheat plate). */
export const PlC: React.FC<{p: PB; cx: number; cy: number; w: number; o?: number; id: string; dim?: number; filter?: string}> = ({p, cx, cy, w, o = 1, id, dim = 0, filter}) => (o <= 0.01 ? null : (
	<g opacity={o * (1 - 0.5 * clamp01(dim))}><PlateB p={p} cx={cx} cy={cy} w={w} id={id} filter={dim > 0.01 ? `grayscale(${dim})` : filter} /></g>
));

// ---------- board geometry ----------
export const RAIL = {x0: 90, x1: 380};
export type ColG = {x0: number; x1: number; w: number; cx: number};
/** Column geometry: `t` 0 = equal, 1 = insemination wide (pollination narrow). */
export const colsAt = (t: number): [ColG, ColG] => {
	const split = lerp(1125, 1475, smooth(t));
	const mk = (x0: number, x1: number): ColG => ({x0, x1, w: x1 - x0, cx: (x0 + x1) / 2});
	return [mk(410, split - 12), mk(split + 12, 1830)];
};
export const HEAD_Y = 232;
export const TOP = 300, BOT = 1010;
export const ROWS = ['what both do', 'collect and store', 'deliver, keep others out', 'reach', 'effect on the gene pool'];
export const railY = (i: number) => 330 + i * 84;
/** The feature rail: rows up to `n` shown (the last may be fading in via `last`), `active` bright. */
export const Rail: React.FC<{n: number; last?: number; active?: number; o?: number}> = ({n, last = 1, active = -1, o = 1}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{ROWS.slice(0, n).map((t, i) => {
				const a = i === n - 1 ? last : 1;
				const on = i === active;
				const y = railY(i);
				const size = 24;
				return (
					<g key={i} opacity={a}>
						<rect x={RAIL.x0} y={y} width={RAIL.x1 - RAIL.x0} height={64} rx={16} fill={on ? '#fff3d9' : CARD} stroke={on ? AMBER : EDGE} strokeWidth={on ? 3.5 : 2.5} />
						<Sx x={RAIL.x0 + 18} y={y + 41} text={t} size={size} color={on ? INK : GREY_INK} weight={on ? 800 : 700} />
					</g>
				);
			})}
		</g>
	);
};
/** A column head: plate and title; `lit` 0 greys it. */
export const ColHead: React.FC<{c: ColG; kind: 'ai' | 'ap'; o?: number; lit?: number}> = ({c, kind, o = 1, lit = 1}) => {
	if (o <= 0.01) return null;
	const L = clamp01(lit);
	const title = kind === 'ai' ? 'artificial insemination' : 'artificial pollination';
	const narrow = c.w < 500;
	const size = narrow ? 26 : 34;
	const pw = kind === 'ai' ? (narrow ? 90 : 150) : (narrow ? 40 : 56);
	const tW = tw(title, size) + pw + 18;
	const x = narrow ? c.x0 + 8 : c.cx - tW / 2;
	return (
		<g opacity={o}>
			{kind === 'ai' ? <Pl p={PLATES.bull} cx={x + pw / 2} cy={HEAD_Y - 4} w={pw} dim={1 - L} /> : <PlC p={PLATES.ear} cx={x + pw / 2} cy={HEAD_Y - 4} w={pw} id={`b15-head-ear-${Math.round(c.x0)}`} dim={1 - L} />}
			{narrow ? (
				<>
					<Sx x={x + pw + 14} y={HEAD_Y - 6} text={kind === 'ai' ? 'artificial' : 'artificial'} size={size} color={L > 0.5 ? INK : GREY_INK} weight={800} />
					<Sx x={x + pw + 14} y={HEAD_Y + 24} text={kind === 'ai' ? 'insemination' : 'pollination'} size={size} color={L > 0.5 ? INK : GREY_INK} weight={800} />
				</>
			) : <Sx x={x + pw + 18} y={HEAD_Y + 12} text={title} size={size} color={L > 0.5 ? INK : GREY_INK} weight={800} />}
		</g>
	);
};
/** The column divider under the heads. */
export const Divider: React.FC<{cols: [ColG, ColG]; o?: number}> = ({cols, o = 1}) => (
	<line x1={(cols[0].x1 + cols[1].x0) / 2} y1={190} x2={(cols[0].x1 + cols[1].x0) / 2} y2={BOT} stroke={EDGE} strokeWidth={3} strokeDasharray="10 10" opacity={o} />
);

// ---------- small coded pieces ----------
/** A slim sperm glyph with a small chromosome letter; `glow` brightens it. */
export const Sperm: React.FC<{x: number; y: number; l: 'X' | 'Y'; s?: number; o?: number; glow?: number; ang?: number}> = ({x, y, l, s = 1, o = 1, glow = 0, ang = 0}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) rotate(${ang}) scale(${s})`}>
		{glow > 0.01 ? <circle cx={0} cy={0} r={22} fill={AMBER} opacity={0.3 * glow} /> : null}
		<path d="M-12,0 C-22,-6 -30,6 -42,0 C-50,-5 -56,3 -62,0" fill="none" stroke={INK_SOFT} strokeWidth={2.5} strokeLinecap="round" />
		<ellipse cx={0} cy={0} rx={12} ry={8} fill={l === 'X' ? '#f6e3ee' : '#e3eef6'} stroke={INK_SOFT} strokeWidth={2.5} />
		<Sx x={0} y={6} text={l} size={15} color={INK} weight={800} anchor="middle" />
	</g>
));
/** A coded semen straw (thin tube with a plug); `fill` 0..1. */
export const StrawG: React.FC<{x: number; y: number; w?: number; o?: number; fill?: number; frost?: number}> = ({x, y, w = 150, o = 1, fill = 1, frost = 0}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={x} y={y - 7} width={w} height={14} rx={7} fill={frost > 0.5 ? '#e7f1f7' : '#f8f6ee'} stroke={INK_SOFT} strokeWidth={2.2} />
		<rect x={x + 2} y={y - 5} width={(w - 18) * clamp01(fill)} height={10} rx={5} fill="#f1e2a8" />
		<rect x={x + w - 14} y={y - 7} width={14} height={14} rx={4} fill="#3d7fb0" />
	</g>
));
/** A clock ring that sweeps once (`t` 0..1). */
export const ClockRing: React.FC<{x: number; y: number; r?: number; t: number; o?: number}> = ({x, y, r = 34, t, o = 1}) => {
	if (o <= 0.01) return null;
	const a = clamp01(t) * 2 * Math.PI;
	const ex = x + r * Math.sin(a), ey = y - r * Math.cos(a);
	const large = a > Math.PI ? 1 : 0;
	return (
		<g opacity={o}>
			<circle cx={x} cy={y} r={r} fill={CARD} stroke={INK_SOFT} strokeWidth={3} />
			{t > 0.01 && t < 0.999 ? <path d={`M${x},${y} L${x},${y - r} A${r},${r} 0 ${large} 1 ${ex},${ey} Z`} fill={AMBER} opacity={0.4} /> : t >= 0.999 ? <circle cx={x} cy={y} r={r - 2} fill={AMBER} opacity={0.4} /> : null}
			<line x1={x} y1={y} x2={ex} y2={ey} stroke={INK} strokeWidth={3} strokeLinecap="round" />
		</g>
	);
};
/** A pollen dot. */
export const PollenDot: React.FC<{x: number; y: number; r?: number; o?: number; grey?: boolean}> = ({x, y, r = 7, o = 1, grey = false}) => (o <= 0.01 ? null : (
	<circle cx={x} cy={y} r={r} fill={grey ? '#cfd2d4' : POLLEN} stroke={grey ? GREYT : AMBER_INK} strokeWidth={2} opacity={o} />
));
/** A wind wisp (three curved strokes) at (x, y). */
export const Wisp: React.FC<{x: number; y: number; o?: number; s?: number}> = ({x, y, o = 1, s = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`} fill="none" stroke="#8fa7b8" strokeWidth={3.5} strokeLinecap="round">
		<path d="M0,0 C20,-10 40,10 60,0 C70,-5 76,-12 72,-18" />
		<path d="M10,16 C30,8 50,24 76,14" />
		<path d="M-6,-16 C14,-24 30,-10 44,-16" />
	</g>
));
/** A simple flower glyph (five petals), `lit` amber centre. */
export const FlowerG: React.FC<{x: number; y: number; r?: number; o?: number; lit?: number}> = ({x, y, r = 22, o = 1, lit = 0}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{lit > 0.01 ? <circle cx={x} cy={y} r={r * 1.6} fill={AMBER} opacity={0.25 * lit} /> : null}
		{[0, 1, 2, 3, 4].map(k => {
			const a = (k * 72 - 90) * (Math.PI / 180);
			return <circle key={k} cx={x + Math.cos(a) * r * 0.6} cy={y + Math.sin(a) * r * 0.6} r={r * 0.42} fill="#fbf3cf" stroke="#b9a24a" strokeWidth={2} />;
		})}
		<circle cx={x} cy={y} r={r * 0.3} fill={lit > 0.5 ? AMBER : '#d9b84a'} />
		<line x1={x} y1={y + r} x2={x} y2={y + r * 2.4} stroke="#6f8a4a" strokeWidth={3} />
	</g>
));
/** A coded male symbol (circle and arrow). */
export const MaleSym: React.FC<{x: number; y: number; o?: number; s?: number}> = ({x, y, o = 1, s = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} fill="none" stroke={BIO_INK} strokeWidth={4} strokeLinecap="round">
		<circle cx={x - 3 * s} cy={y + 4 * s} r={10 * s} /><path d={`M${x + 4 * s},${y - 3 * s} L${x + 13 * s},${y - 12 * s} M${x + 5 * s},${y - 12 * s} L${x + 13 * s},${y - 12 * s} L${x + 13 * s},${y - 4 * s}`} />
	</g>
));

// ---------- the reach map ----------
/** The world map plate with farm dots fed by dotted paths from one straw; `t` 0..1 draws the paths in turn, `calves`
 * 0..1 pops calf glyphs at the dots, `pulse` pulses the dots together. */
export const ReachMap: React.FC<{cx: number; cy: number; w: number; t: number; calves?: number; pulse?: number; o?: number; n?: number}> = ({cx, cy, w, t, calves = 0, pulse = 0, o = 1, n = FARMS.length}) => {
	if (o <= 0.01) return null;
	const pt = (u: [number, number]) => platePt(PLATES.map, cx, cy, w, u[0], u[1]);
	const org = pt(ORIGIN);
	const k = w / 600;
	return (
		<g opacity={o}>
			<Pl p={PLATES.map} cx={cx} cy={cy} w={w} />
			{FARMS.slice(0, n).map((u, i) => {
				const p = pt(u);
				const local = clamp01(t * n - i * 0.6);
				const mx = (org[0] + p[0]) / 2, my = Math.min(org[1], p[1]) - 60 * k;
				const c = clamp01(calves * n * 1.2 - i);
				return (
					<g key={i}>
						{local > 0.01 ? <path d={`M${org[0]},${org[1]} Q${mx},${my} ${p[0]},${p[1]}`} fill="none" stroke={AMBER_INK} strokeWidth={2.5} strokeDasharray="5 6" pathLength={1} style={{clipPath: 'none'}} opacity={0.8 * local} /> : null}
						<circle cx={p[0]} cy={p[1]} r={(6 + 3 * pulse) * k + 2} fill="#fff3d9" stroke={AMBER_INK} strokeWidth={2.5} opacity={clamp01(local * 2)} />
						{c > 0.01 ? <Pl p={PLATES.calf} cx={p[0]} cy={p[1] - 18 * k - 6} w={40 * k + 8} o={c} /> : null}
					</g>
				);
			})}
			<StrawG x={org[0] - 30 * k - 10} y={org[1]} w={60 * k + 20} />
		</g>
	);
};
export const useF = () => useCurrentFrame();
void vis; void prog; void Vial; void FillBar; void SlimStrand; void GreyTick; void Embryos; void MarkText; void Pill; void FemaleSym; void Rg; void RingCluster; void clusterPt; void plH; void DrawPath;
