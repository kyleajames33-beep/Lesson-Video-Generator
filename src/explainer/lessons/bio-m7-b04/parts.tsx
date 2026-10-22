// M7 B04 drawing parts: the farm gate ledger (a dashed vertical gate line in the right third, "on the farm" and
// "past the farm gate" side labels), the cause strip (three linked slots: pathogen, host, conditions), a coded
// Australia outline with dated spread dots and a dotted spread path, a coded water film with droplets, hop paths
// (plant to plant), the xylem line through a gall, plain dot grids for culled animals, cost bars, the export split
// bar, a loop arrow, and a plate drawn through any natural-pixel clip shape. B03 (M7), B01 (M7), M6 and M5 parts are
// imported, never edited. B05 imports PlateClip, clip shapes and the clock mark.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, CARD, CTag, CrossChip, DROP, DrawPath, Drift, EDGE, Fit, GREYT, GREY_INK, GTag, INK, INK_SOFT, Pl, PlateB, Ring, Sx,
	TEAL, TERRA, Tg, WText, clamp01, fitW, kOf, lerp, plH, prog, ptOf, pulse, rng, smooth, tw, vis,
} from '../bio-m7-b03/parts';
import {FEAT, PLATES} from './assets';
import type {PB} from '../bio-m7-b03/parts';
import {GREEN} from '../bio-m6-p01/parts';
import {CardBox, CurveArrow} from '../bio-m6-b01/parts';

export {
	AMBER, AMBER_INK, CARD, CTag, CrossChip, DROP, DrawPath, Drift, EDGE, FEAT, Fit, GREYT, GREY_INK, GTag, INK, INK_SOFT, PLATES, Pl, PlateB, Ring, Sx,
	TEAL, TERRA, Tg, WText, clamp01, fitW, kOf, lerp, plH, prog, ptOf, pulse, rng, smooth, tw, vis, GREEN, CardBox, CurveArrow,
};
export type {PB};
export type Pt = [number, number];

// ---------- clipped plates ----------
/** Natural-pixel clip shapes. */
export const rectD = (x0: number, y0: number, x1: number, y1: number) => `M${x0},${y0} L${x1},${y0} L${x1},${y1} L${x0},${y1} Z`;
export const ellD = (cx: number, cy: number, rx: number, ry: number) => `M${cx - rx},${cy} A${rx},${ry} 0 1 0 ${cx + rx},${cy} A${rx},${ry} 0 1 0 ${cx - rx},${cy} Z`;
/**
 * A plate drawn by its alpha box (uniform scale, never stretched), shown only inside `clip` (a path in the plate's
 * natural pixels; even-odd, so a rectangle plus an ellipse gives a rectangle with a hole). `id` must be unique.
 */
export const PlateClip: React.FC<{p: PB; cx: number; cy: number; w: number; id: string; clip: string; o?: number; filter?: string}> = ({p, cx, cy, w, id, clip, o = 1, filter}) => {
	if (o <= 0.01) return null;
	const k = w / (p.box[2] - p.box[0]);
	const bx = (p.box[0] + p.box[2]) / 2, by = (p.box[1] + p.box[3]) / 2;
	return (
		<g opacity={o} transform={`translate(${cx},${cy}) scale(${k}) translate(${-bx},${-by})`} style={filter ? {filter} : undefined}>
			<defs><clipPath id={id} clipPathUnits="userSpaceOnUse"><path d={clip} clipRule="evenodd" /></clipPath></defs>
			<image href={staticFile(p.src)} x={0} y={0} width={p.nat[0]} height={p.nat[1]} clipPath={`url(#${id})`} />
		</g>
	);
};
/** A clipped plate (PlateB with a crop box) that dims to grey. */
export const Crop: React.FC<{p: PB; cx: number; cy: number; w: number; id: string; o?: number; dim?: number; rot?: number}> = ({p, cx, cy, w, id, o = 1, dim = 0, rot = 0}) => (o <= 0.01 ? null : (
	<g opacity={1 - 0.55 * clamp01(dim)}><PlateB p={p} cx={cx} cy={cy} w={w} o={o} id={id} rot={rot} filter={dim > 0.01 ? `grayscale(${clamp01(dim)})` : undefined} /></g>
));
/** Two aligned plates (same box) crossfading in place: t = 0 shows a, t = 1 shows b. */
export const XFade: React.FC<{a: PB; b: PB; cx: number; cy: number; w: number; t: number; o?: number; dim?: number}> = ({a, b, cx, cy, w, t, o = 1, dim = 0}) => {
	if (o <= 0.01) return null;
	const u = clamp01(t);
	return (
		<g>
			<Pl p={a} cx={cx} cy={cy} w={w} o={o * (u < 1 ? 1 : 0)} dim={dim} />
			<Pl p={b} cx={cx} cy={cy} w={w} o={o * u} dim={dim} />
		</g>
	);
};

// ---------- the farm gate ledger ----------
export const GX = 1300;
/** The dashed gate line; `labelAt` writes "farm gate" over it, `sidesAt` the two side labels along the bottom. */
export const Gate: React.FC<{at: number; o?: number; x?: number; y0?: number; y1?: number; labelAt?: number; sidesAt?: number; bright?: number; sideY?: number}> = ({at, o = 1, x = GX, y0 = 200, y1 = 1000, labelAt, sidesAt, bright = 0, sideY}) => {
	const f = useCurrentFrame();
	if (o <= 0.01 || f < at) return null;
	const b = clamp01(bright);
	const sy = sideY ?? y1 + 40;
	return (
		<g opacity={o}>
			<DrawPath d={`M${x},${y0} L${x},${y1}`} at={at} dur={22} color={b > 0.5 ? INK_SOFT : GREYT} width={4 + 2 * b} dash="16 12" />
			{labelAt !== undefined ? <Sx x={x} y={y0 - 16} text="farm gate" size={26} color={GREY_INK} weight={600} anchor="middle" at={labelAt} /> : null}
			{sidesAt !== undefined ? (
				<>
					<Sx x={x - 26} y={sy} text="on the farm" size={26} color={GREY_INK} weight={600} anchor="end" at={sidesAt} />
					<Sx x={x + 26} y={sy} text="past the farm gate" size={26} color={GREY_INK} weight={600} at={sidesAt + 6} />
				</>
			) : null}
		</g>
	);
};
/** A soft wash behind one side of the ledger ("brightens"). */
export const SideWash: React.FC<{x0: number; x1: number; y0?: number; y1?: number; o: number; color?: string}> = ({x0, x1, y0 = 170, y1 = 1010, o, color = '#fff3d9'}) => (o <= 0.01 ? null : <rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} rx={26} fill={color} opacity={0.75 * o} />);

// ---------- the cause strip ----------
export const SLOT_W = 300, SLOT_H = 210, SLOT_GAP = 70;
export const slotX = (x: number, i: number) => x + i * (SLOT_W + SLOT_GAP);
/** Three linked slot frames with labels under them (contents are drawn by the scene). */
export const CauseStrip: React.FC<{x: number; y: number; at: number[]; labels: string[]; o?: number; s?: number; grey?: number; labelO?: number}> = ({x, y, at, labels, o = 1, s = 1, grey = 0, labelO = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const g = clamp01(grey);
	return (
		<g opacity={o * (1 - 0.45 * g)} transform={s !== 1 ? `translate(${x},${y}) scale(${s}) translate(${-x},${-y})` : undefined}>
			{[0, 1, 2].map(i => {
				const p = prog(f, at[i], 12);
				if (p <= 0.01) return null;
				const sx = slotX(x, i);
				return (
					<g key={i} opacity={p}>
						{i > 0 ? <DrawPath d={`M${sx - SLOT_GAP + 8},${y + SLOT_H / 2} L${sx - 8},${y + SLOT_H / 2}`} at={at[i]} dur={10} color={g > 0.5 ? GREYT : INK_SOFT} width={4} /> : null}
						<rect x={sx} y={y} width={SLOT_W} height={SLOT_H} rx={20} fill="#fffdf8" stroke={g > 0.5 ? GREYT : INK_SOFT} strokeWidth={3} />
						<Sx x={sx + SLOT_W / 2} y={y + SLOT_H + 40} text={labels[i]} size={32} color={g > 0.5 ? GREY_INK : INK} hand weight={700} anchor="middle" at={at[i]} opacity={labelO} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- a coded water film with droplets ----------
export const WaterFilm: React.FC<{x0: number; x1: number; y: number; at: number; o?: number; pulseAt?: number; drops?: number}> = ({x0, x1, y, at, o = 1, pulseAt, drops = 3}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const pu = pulseAt === undefined ? 0 : pulse(f, pulseAt, 40);
	return (
		<g opacity={o}>
			<DrawPath d={`M${x0},${y} Q${(x0 + x1) / 2},${y + 8} ${x1},${y}`} at={at} dur={14} color={DROP} width={4} />
			{Array.from({length: drops}, (_, i) => {
				const x = lerp(x0, x1, (i + 0.5) / drops);
				const p = prog(f, at + 8 + i * 5, 10);
				const r = 13 * (1 + 0.35 * pu);
				return p > 0.01 ? <path key={i} d={`M${x},${y - r * 2.1} C${x + r * 0.9},${y - r * 0.9} ${x + r},${y} ${x},${y} C${x - r},${y} ${x - r * 0.9},${y - r * 0.9} ${x},${y - r * 2.1} Z`} fill={DROP} stroke="#2c5b85" strokeWidth={1.5} opacity={p * 0.9} /> : null;
			})}
		</g>
	);
};

// ---------- hop path: a dotted path that hops point to point ----------
export const HopPath: React.FC<{pts: Pt[]; at: number; step?: number; color?: string; o?: number; hop?: number; stopX?: boolean}> = ({pts, at, step = 12, color = AMBER, o = 1, hop = 34, stopX = false}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	return (
		<g opacity={o}>
			{pts.slice(0, -1).map((p, i) => {
				const q = pts[i + 1];
				return f >= at + i * step ? <DrawPath key={i} d={`M${p[0]},${p[1]} Q${(p[0] + q[0]) / 2},${Math.min(p[1], q[1]) - hop} ${q[0]},${q[1]}`} at={at + i * step} dur={step} color={color} width={5} dash="3 9" /> : null;
			})}
			{pts.map((p, i) => (f >= at + i * step ? <circle key={'d' + i} cx={p[0]} cy={p[1]} r={8} fill={color} opacity={prog(f, at + i * step, 6)} /> : null))}
			{stopX && f >= at + (pts.length - 1) * step ? (() => {
				const p = pts[pts.length - 1], q = [p[0] + 46, p[1]] as Pt;
				return (
					<g>
						<DrawPath d={`M${q[0] - 14},${q[1] - 14} L${q[0] + 14},${q[1] + 14}`} at={at + (pts.length - 1) * step + 4} dur={6} color={GREY_INK} width={5} />
						<DrawPath d={`M${q[0] + 14},${q[1] - 14} L${q[0] - 14},${q[1] + 14}`} at={at + (pts.length - 1) * step + 8} dur={6} color={GREY_INK} width={5} />
					</g>
				);
			})() : null}
		</g>
	);
};

// ---------- a coded outline of Australia ----------
const AUS_LL: Pt[] = [
	[113.2, -26.2], [114.0, -21.8], [116.7, -20.6], [118.6, -20.3], [121.0, -19.5], [122.2, -18.0], [122.9, -16.4], [124.4, -16.3], [125.0, -14.5], [126.9, -13.8],
	[128.1, -15.0], [129.5, -14.9], [130.3, -12.9], [130.8, -12.4], [132.3, -11.3], [133.8, -11.8], [136.0, -12.0], [136.8, -12.3], [135.9, -13.5], [135.5, -15.0],
	[137.5, -16.2], [139.5, -17.5], [140.8, -17.5], [141.6, -15.0], [141.5, -12.5], [142.5, -10.7], [143.5, -12.5], [143.8, -14.4], [145.3, -15.5], [145.8, -16.9],
	[146.8, -19.3], [149.2, -21.1], [150.7, -23.4], [152.4, -24.6], [153.2, -25.0], [153.5, -27.5], [153.6, -28.6], [153.1, -30.3], [152.5, -32.0], [151.8, -32.9],
	[151.3, -33.9], [150.7, -35.1], [150.0, -37.1], [149.9, -37.5], [148.2, -37.8], [146.4, -39.1], [145.4, -38.5], [144.9, -38.3], [143.5, -38.8], [141.6, -38.4],
	[139.8, -37.2], [138.9, -35.6], [138.5, -34.9], [137.8, -35.6], [137.5, -35.2], [137.9, -33.5], [137.8, -32.5], [136.0, -34.8], [135.9, -34.7], [134.2, -32.9],
	[133.7, -32.1], [131.0, -31.5], [128.9, -31.7], [126.0, -32.3], [123.6, -33.9], [121.9, -33.9], [119.8, -34.3], [117.9, -35.0], [115.1, -34.4], [115.7, -32.0],
	[115.0, -30.0], [114.6, -28.8],
];
const TAS_LL: Pt[] = [[144.6, -40.7], [146.0, -41.1], [148.3, -40.9], [148.3, -42.2], [147.9, -43.2], [146.8, -43.6], [145.6, -42.9], [145.2, -42.2]];
const llXY = (lon: number, lat: number): Pt => [(lon - 112) * 17.6, (-lat - 10) * 20];
const MAP_C: Pt = [372, 342];
/** Screen point of a lon/lat on a map centred at (cx, cy) at scale s (s = 1 is about 720 by 660 px). */
export const ausPt = (lon: number, lat: number, cx: number, cy: number, s: number): Pt => {
	const [x, y] = llXY(lon, lat);
	return [cx + (x - MAP_C[0]) * s, cy + (y - MAP_C[1]) * s];
};
const poly = (ll: Pt[], cx: number, cy: number, s: number) => ll.map(([a, b], i) => {
	const [x, y] = ausPt(a, b, cx, cy, s);
	return `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`;
}).join(' ') + ' Z';
export const AusMap: React.FC<{cx: number; cy: number; s: number; at: number; o?: number; grey?: number}> = ({cx, cy, s, at, o = 1, grey = 0}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 18) * o;
	if (p <= 0.01) return null;
	const g = clamp01(grey);
	return (
		<g opacity={p * (1 - 0.35 * g)}>
			<path d={poly(AUS_LL, cx, cy, s)} fill="#f1ead9" stroke={INK_SOFT} strokeWidth={Math.max(2, 3.5 * s)} strokeLinejoin="round" />
			<path d={poly(TAS_LL, cx, cy, s)} fill="#f1ead9" stroke={INK_SOFT} strokeWidth={Math.max(2, 3.5 * s)} strokeLinejoin="round" />
		</g>
	);
};
/** A dot at a lon/lat on the map, with an optional pulse ring. */
export const MapDot: React.FC<{ll: Pt; cx: number; cy: number; s: number; at: number; color?: string; r?: number; pulseAt?: number; o?: number}> = ({ll, cx, cy, s, at, color = AMBER, r = 11, pulseAt, o = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 8) * o;
	if (p <= 0.01) return null;
	const [x, y] = ausPt(ll[0], ll[1], cx, cy, s);
	const pu = pulseAt === undefined ? 0 : (((f - pulseAt) % 40) + 40) % 40 / 40;
	const live = pulseAt !== undefined && f >= pulseAt;
	return (
		<g opacity={p}>
			{live ? <circle cx={x} cy={y} r={r * (1 + 2.2 * pu)} fill="none" stroke={color} strokeWidth={3} opacity={1 - pu} /> : null}
			<circle cx={x} cy={y} r={r} fill={color} stroke="#7a4a10" strokeWidth={1.5} />
		</g>
	);
};
/** A dotted spread path along lon/lat points, with dots appearing along it. */
export const SpreadPath: React.FC<{ll: Pt[]; cx: number; cy: number; s: number; at: number; dur?: number; o?: number}> = ({ll, cx, cy, s, at, dur = 40, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const pts = ll.map(([a, b]) => ausPt(a, b, cx, cy, s));
	const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
	return (
		<g opacity={o}>
			<DrawPath d={d} at={at} dur={dur} color={AMBER} width={Math.max(2.5, 5 * s)} dash="2 10" />
			{pts.slice(1).map((p, i) => {
				const t = at + ((i + 1) / (pts.length - 1)) * dur;
				return f >= t ? <circle key={i} cx={p[0]} cy={p[1]} r={Math.max(5, 9 * s)} fill={AMBER} opacity={prog(f, t, 6)} /> : null;
			})}
		</g>
	);
};
export const LL = {
	centralCoast: [151.35, -33.4] as Pt,
	north: [[151.35, -33.4], [152.9, -31.0], [153.4, -28.3], [153.0, -26.0], [151.4, -24.0], [149.6, -21.6], [147.6, -19.8], [146.0, -17.6], [145.4, -16.4]] as Pt[],
	south: [[151.35, -33.4], [150.7, -35.0], [150.0, -36.8], [148.4, -37.7], [146.6, -38.4], [145.0, -37.9]] as Pt[],
	tas: [146.9, -41.9] as Pt,
	nt: [130.9, -12.6] as Pt,
	kimberley: [128.7, -15.8] as Pt,
};

// ---------- small coded marks ----------
/** A clock-like loop arrow running round a rounded frame (clockwise from the top centre), arrowhead at its end. */
export const LoopArrow: React.FC<{x0: number; y0: number; x1: number; y1: number; r?: number; at: number; color?: string; width?: number; o?: number}> = ({x0, y0, x1, y1, r = 60, at, color = AMBER, width = 6, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const cx = (x0 + x1) / 2, gap = 90;
	const d = `M${cx + gap},${y0} L${x1 - r},${y0} Q${x1},${y0} ${x1},${y0 + r} L${x1},${y1 - r} Q${x1},${y1} ${x1 - r},${y1} L${x0 + r},${y1} Q${x0},${y1} ${x0},${y1 - r} L${x0},${y0 + r} Q${x0},${y0} ${x0 + r},${y0} L${cx - gap},${y0}`;
	const e: Pt = [cx - gap, y0], hl = 24;
	return (
		<g opacity={o}>
			<DrawPath d={d} at={at} dur={44} color={color} width={width} />
			<path d={`M${e[0] - hl},${e[1] - hl * 0.6} L${e[0]},${e[1]} L${e[0] - hl},${e[1] + hl * 0.6}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" opacity={prog(f, at + 40, 6)} />
		</g>
	);
};
/** A small coded clock mark (face and two hands). */
export const ClockMark: React.FC<{x: number; y: number; r?: number; at: number; color?: string; o?: number}> = ({x, y, r = 34, at, color = AMBER_INK, o = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12) * o;
	if (p <= 0.01) return null;
	const sweep = clamp01((f - at) / 40) * Math.PI * 2;
	return (
		<g opacity={p}>
			<circle cx={x} cy={y} r={r} fill="#fffdf8" stroke={color} strokeWidth={4} />
			<line x1={x} y1={y} x2={x} y2={y - r * 0.62} stroke={color} strokeWidth={4} strokeLinecap="round" />
			<line x1={x} y1={y} x2={x + Math.sin(sweep) * r * 0.78} y2={y - Math.cos(sweep) * r * 0.78} stroke={color} strokeWidth={3} strokeLinecap="round" />
		</g>
	);
};
/** A short closed bar across the container doors (screen points a and b). */
export const DoorBar: React.FC<{a: Pt; b: Pt; at: number; out?: number}> = ({a, b, at, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 8);
	if (f < at || o <= 0.01) return null;
	return <g opacity={o}><DrawPath d={`M${a[0]},${a[1]} L${b[0]},${b[1]}`} at={at} dur={10} color={GREY_INK} width={12} /></g>;
};
/** A grid of plain dots (culled animals): rows x cols from (x, y) with spacing sp; `amber` lists amber dot indices. */
export const DotGrid: React.FC<{x: number; y: number; cols: number; rows: number; sp?: number; r?: number; at: number; amber?: number[]; amberAt?: number; o?: number; step?: number}> = ({x, y, cols, rows, sp = 32, r = 10, at, amber = [], amberAt = 1e9, o = 1, step = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const n = cols * rows;
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => {
				const p = prog(f, at + i * step, 6);
				if (p <= 0.01) return null;
				const am = amber.includes(i) ? prog(f, amberAt + amber.indexOf(i) * 3, 8) : 0;
				return <circle key={i} cx={x + (i % cols) * sp} cy={y + Math.floor(i / cols) * sp} r={r} fill={am > 0.5 ? AMBER : '#a9aeb3'} stroke={am > 0.5 ? '#7a4a10' : '#80868c'} strokeWidth={1.5} opacity={p} />;
			})}
		</g>
	);
};
/** A horizontal bar that grows from x to x + w. */
export const GrowBar: React.FC<{x: number; y: number; w: number; h?: number; at: number; color?: string; dur?: number; o?: number}> = ({x, y, w, h = 26, at, color = AMBER, dur = 20, o = 1}) => {
	const f = useCurrentFrame();
	const p = smooth(prog(f, at, dur));
	if (p <= 0.01 || o <= 0.01) return null;
	return <rect x={x} y={y} width={w * p} height={h} rx={h / 2} fill={color} opacity={o} />;
};
/** A soft glow ring at a point (draws attention to a plate feature). */
export const Glow: React.FC<{x: number; y: number; r: number; o: number; color?: string}> = ({x, y, r, o, color = AMBER}) => (o <= 0.01 ? null : <circle cx={x} cy={y} r={r} fill={color} opacity={0.2 * o} />);
/** Amber spores drifting from (sx, sy) towards x1 on the wind (they keep coming while visible). */
export const SporeDrift: React.FC<{sx: number; sy: number; x1: number; band?: number; at: number; out?: number; n?: number; period?: number; color?: string}> = ({sx, sy, x1, band = 60, at, out, n = 18, period = 110, color = AMBER}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (f < at || o <= 0.01) return null;
	const r = rng(77);
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => {
				const off = r(), yo = (r() - 0.5) * band * 2, wob = 5 + r() * 10;
				const born = at + i * 4;
				if (f < born) return null;
				const ph = ((f - at) / period + off) % 1;
				const x = lerp(sx, x1, ph), y = sy + yo * (0.3 + ph) + Math.sin((f - at) / 14 + i) * wob;
				const fade = Math.min(1, ph * 6, (1 - ph) * 6) * prog(f, born, 8);
				return <circle key={i} cx={x} cy={y} r={5.5} fill={color} stroke="#7a4a10" strokeWidth={1} opacity={fade} />;
			})}
		</g>
	);
};
export const useF = () => useCurrentFrame();
void CARD; void EDGE; void Fit; void fitW; void kOf; void plH; void rng; void tw; void TERRA; void Tg; void WText; void CrossChip; void GTag; void CTag; void FEAT; void PLATES; void Ring; void Drift; void TEAL; void GREEN; void CardBox; void CurveArrow; void ptOf; void INK;
