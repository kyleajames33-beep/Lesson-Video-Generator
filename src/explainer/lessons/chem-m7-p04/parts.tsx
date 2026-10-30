// M7 P04 board pieces on the M6 P02 practical kit (VCard, RTable, PenLink, IconPlate), C06 plates and strips (Plate,
// ptOn, Leader, RingAt, Reflux) and the C08a/C02 skeletal kit. README for Claude:
// - ALC: the three alcohols and the water control in fixed colours (propan-1-ol teal, propan-2-ol violet,
//   2-methylpropan-2-ol grey-blue, water grey), short class labels for the tube tops.
// - BathP: the water-bath pair placed by centre, top and height (cross-fades in place); bpt() gives a screen point.
// - Dropper: a coded dropper outline (no hands) that moves along tube positions and lets drops fall.
// - Ladder: the boiling-point ladder (40 to 100 °C) with ticks that write on and an optional bracket.
// - Vapour: moving dashes along a polyline (the vapour path through the condenser).
// - Thumb: a plate fitted into a box (uniform scale, never stretched) that can cross-fade to a second plate.
// - BigRow: one risk-table row, large (hazard, harm, control), for the spoken rows.
// - tertM: 2-methylpropan-2-ol or 2-methylbutan-2-ol, skeletal.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {INK, INK_SOFT, IconPlate, Sx, TEAL, smooth} from '../chem-m6-p02/parts';
import type {PDef} from '../chem-m6-c01/assets';
import {CARDC, VIOLET} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import type {Mol2} from '../chem-m7-c02/parts';
import {vis} from '../chem-m7-c04a/parts';
import {Plate, ptOn} from '../chem-m7-c06/parts';
import {BATH, BP} from './common';

export const NAVY = '#24407a', GREENC = '#2f8a5b', HAZ = '#b5502b', RED = '#c4432f', AMB = '#c98a1b', GREY = '#8a847a', TEALD = '#0d6b52';
export const ALC = [
	{n: 'propan-1-ol', s: '1°', c: TEAL, f: '#dff2ef'},
	{n: 'propan-2-ol', s: '2°', c: VIOLET, f: '#e6ddf5'},
	{n: '2-methylpropan-2-ol', s: '3°', c: '#4f6f8f', f: '#e3ebf3'},
	{n: 'water', s: 'H₂O', c: GREY, f: '#f1efea'},
];

// ---------- the water bath ----------
export type BPos = {cx: number; top: number; h: number};
export const bpt = (P: BPos, u: number, v: number): V2 => ptOn(BATH.before, P.cx, P.top, P.h, u, v);
export const BathP: React.FC<{P: BPos; swap?: number; at?: number; out?: number; o?: number; after?: boolean}> = ({P, swap, at, out, o = 1, after = false}) => (
	<Plate p={after ? BATH.after : BATH.before} to={after ? undefined : BATH.after} swap={swap} cx={P.cx} top={P.top} h={P.h} at={at} out={out} o={o} swapDur={30} />
);
export const tubeTop = (P: BPos, i: number) => bpt(P, BP.tubes[i], BP.rim);
export const tubeLiq = (P: BPos, i: number) => bpt(P, BP.tubes[i], BP.liquid);

// ---------- dropper (coded outline, no hands) ----------
/** A dropper outline that visits `stops` (tip points) from `at`, `gap` frames apart, releasing a drop at each. */
export const Dropper: React.FC<{stops: V2[]; at: number; gap?: number; out?: number; s?: number; drop?: number}> = ({stops, at, gap = 18, out, s = 1, drop = 60}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out ?? at + gap * stops.length + 20);
	if (v <= 0.01) return null;
	const t = Math.max(0, (f - at) / gap);
	const i = Math.min(stops.length - 1, Math.floor(t));
	const j = Math.min(stops.length - 1, i + 1);
	const e = smooth(Math.min(1, Math.max(0, (t - i) * 2 - 1)));
	const p: V2 = [stops[i][0] + (stops[j][0] - stops[i][0]) * e, stops[i][1] + (stops[j][1] - stops[i][1]) * e];
	const k = Math.max(0, Math.min(1, t - i)) * 2;
	const dropY = k < 1 ? k * drop : -1;
	return (
		<g opacity={v}>
			<g transform={`translate(${p[0]},${p[1]}) scale(${s})`}>
				<path d="M-6,-14 L-6,-110 L6,-110 L6,-14 L0,0 Z" fill="#eef4f7" stroke={INK} strokeWidth={3} strokeLinejoin="round" />
				<rect x={-13} y={-160} width={26} height={52} rx={12} fill="#c9d3da" stroke={INK} strokeWidth={3} />
			</g>
			{dropY >= 0 ? <circle cx={p[0]} cy={p[1] + 8 + dropY} r={6 * s} fill="#cfe3f0" stroke={INK_SOFT} strokeWidth={2} /> : null}
		</g>
	);
};

// ---------- boiling-point ladder ----------
export type LTick = {v: number; t: string; at: number; color?: string; o?: number};
export const Ladder: React.FC<{x: number; y0: number; y1: number; at: number; ticks: LTick[]; bracket?: {a: number; b: number; t: string; at: number}; o?: number; size?: number; marker?: {v: number; t: string; at: number}}> = ({x, y0, y1, at, ticks, bracket, o = 1, size = 24, marker}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const Y = (T: number) => y1 - ((T - 40) / 60) * (y1 - y0);
	return (
		<g opacity={v}>
			<line x1={x} x2={x} y1={y0 - 10} y2={y1 + 10} stroke={INK} strokeWidth={4} />
			{[40, 60, 80, 100].map(T => <g key={T}><line x1={x - 10} x2={x} y1={Y(T)} y2={Y(T)} stroke={INK_SOFT} strokeWidth={3} /><Sx x={x - 16} y={Y(T) + 8} text={`${T} °C`} size={20} color={INK_SOFT} anchor="end" weight={700} at={-1000} /></g>)}
			{ticks.map((k, i) => {
				const q = prog(f, k.at, 10) * (k.o ?? 1);
				if (q <= 0.01) return null;
				return <g key={i} opacity={q}><line x1={x} x2={x + 34} y1={Y(k.v)} y2={Y(k.v)} stroke={k.color ?? INK} strokeWidth={5} /><Sx x={x + 44} y={Y(k.v) + 8} text={k.t} size={size} color={k.color ?? INK} weight={800} at={-1000} /></g>;
			})}
			{bracket ? (
				<g opacity={prog(f, bracket.at, 10)}>
					<DrawPath d={`M${x + 290},${Y(bracket.a)} L${x + 304},${Y(bracket.a)} L${x + 304},${Y(bracket.b)} L${x + 290},${Y(bracket.b)}`} at={bracket.at} dur={12} color={NAVY} width={4} />
					<Sx x={x + 316} y={(Y(bracket.a) + Y(bracket.b)) / 2 + 8} text={bracket.t} size={size} color={NAVY} weight={800} at={-1000} />
				</g>
			) : null}
			{marker ? <g opacity={prog(f, marker.at, 10)}><circle cx={x} cy={Y(marker.v)} r={10} fill={AMB} /><Sx x={x - 16} y={Y(marker.v) - 14} text={marker.t} size={20} color={AMB} anchor="end" weight={800} at={-1000} /></g> : null}
		</g>
	);
};

// ---------- vapour path ----------
export const Vapour: React.FC<{pts: V2[]; at: number; out?: number; color?: string; width?: number}> = ({pts, at, out, color = '#6b6358', width = 7}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out);
	if (v <= 0.01) return null;
	const d = 'M' + pts.map(p => `${p[0]},${p[1]}`).join(' L');
	const last = pts[pts.length - 1], prev = pts[pts.length - 2];
	const ang = Math.atan2(last[1] - prev[1], last[0] - prev[0]);
	const h = (k: number): V2 => [last[0] - Math.cos(ang + k) * 18, last[1] - Math.sin(ang + k) * 18];
	return (
		<g opacity={v}>
			<path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="14 16" strokeDashoffset={-(f - at) * 2.4} />
			<path d={`M${h(0.5)[0]},${h(0.5)[1]} L${last[0]},${last[1]} L${h(-0.5)[0]},${h(-0.5)[1]}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" />
		</g>
	);
};

// ---------- thumbnails ----------
export const Thumb: React.FC<{p: PDef; to?: PDef; swap?: number; x: number; y: number; w: number; h: number; at: number; out?: number; o?: number; tint?: number}> = ({p, to, swap, x, y, w, h, at, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const s = swap === undefined || !to ? 0 : prog(f, swap, 24);
	return <g opacity={v}>{s < 1 ? <IconPlate p={p} x={x} y={y} w={w} h={h} o={1 - s} /> : null}{to && s > 0 ? <IconPlate p={to} x={x} y={y} w={w} h={h} o={s} /> : null}</g>;
};

// ---------- one large risk row ----------
export const BigRow: React.FC<{y: number; cells: string[][]; at: number; out?: number}> = ({y, cells, at, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out);
	if (v <= 0.01) return null;
	const xs = [110, 720, 1200], ws = [590, 460, 620];
	const cols = [HAZ, INK, GREENC];
	return (
		<g opacity={v} transform={`translate(0,${(1 - prog(f, at, 14)) * 16})`}>
			<rect x={96} y={y} width={1728} height={60 + Math.max(...cells.map(c => c.length)) * 40} rx={18} fill={CARDC} stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			{cells.map((c, i) => c.map((l, k) => <Sx key={i + '-' + k} x={xs[i] + 14} y={y + 50 + k * 40} text={l} size={30} color={cols[i]} weight={i === 0 ? 800 : 600} at={-1000} />))}
			{ws.length ? null : null}
		</g>
	);
};

// ---------- tertiary alcohols (skeletal) ----------
/** 2-methylpropan-2-ol (n = 4) or 2-methylbutan-2-ol (n = 5): the C–OH carbon is index 0. */
export const tertM = (n: 4 | 5): Mol2 => {
	const pts: V2[] = [[0, 0], [-100, 0], [0, -100], [87, 50], [0, 100]];
	const bonds = [{a: 0, b: 1}, {a: 0, b: 2}, {a: 0, b: 3}, {a: 0, b: 4}];
	if (n === 5) { pts.push([187, 50]); bonds.push({a: 3, b: 5}); }
	return {pts, bonds, labels: [{i: 4, text: 'OH'}]};
};
export {INK, INK_SOFT, TEAL, VIOLET};
