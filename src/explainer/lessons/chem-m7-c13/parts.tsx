// M7 C13 board pieces. README for Claude (chem-m7-g03 imports MAP_BOXES and MAP_EDGES for its own map):
// - MAP_BOXES / MAP_EDGES: the reaction map data. Each edge has a short name (shown on this video's map) and the full
//   conditions (`cond`, not drawn here) for later lessons.
// - RMap: the map, drawn at board size or as a small card (x, y, s). `boxAt` places the boxes, `edgeAt` draws each
//   edge; edges sit at 40% except inside their `lit` window; `amber` glows an edge (the chosen path) from a frame;
//   `ring` rings a box.
// - FBox: a flow-chart box (name, formula), optional red (target) or amber (chosen) outline.
// - FArrow: a flow-chart arrow (→ or ⇌) with condition chips stacked above it; chips dim after `dim`.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {INK, INK_SOFT, Sx, mw} from '../chem-m6-c01/parts';
import {CARDC, NAVY} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {vis} from '../chem-m7-c04a/parts';
import {RED} from '../chem-m7-c08a/parts';

export const AMB = '#c98a1b', AMB_SOFT = '#fbedd0', GREY = '#8a847a', TEALC = '#0f8b7d', BROWN = '#9a4a1c';
export {INK, INK_SOFT, NAVY, RED};

export type MBox = {id: string; t: string; p: V2};
export const MAP_BOXES: MBox[] = [
	{id: 'alkane', t: 'alkane', p: [260, 300]}, {id: 'alkene', t: 'alkene', p: [260, 540]}, {id: 'halo', t: 'haloalkane', p: [260, 780]},
	{id: 'alcohol', t: 'alcohol', p: [760, 540]}, {id: 'aldehyde', t: 'aldehyde', p: [1220, 330]}, {id: 'ketone', t: 'ketone', p: [1220, 540]},
	{id: 'acid', t: 'carboxylic acid', p: [1220, 760]}, {id: 'ester', t: 'ester', p: [1680, 640]}, {id: 'amide', t: 'amide', p: [1680, 860]},
];
export type MEdge = {id: string; a: string; b: string; name: string; cond: string; off?: number; grey?: boolean; chip?: string};
export const MAP_EDGES: MEdge[] = [
	{id: 'hyd', a: 'alkene', b: 'alcohol', name: 'hydration', cond: 'H₂O (steam), H₃PO₄, about 300 °C, high pressure', off: -16},
	{id: 'deh', a: 'alcohol', b: 'alkene', name: 'dehydration', cond: 'conc. H₂SO₄, heat (about 170 °C for ethanol)', off: -16},
	{id: 'sub', a: 'halo', b: 'alcohol', name: 'substitution', cond: 'NaOH(aq), heat under reflux', off: -16},
	{id: 'hx', a: 'alcohol', b: 'halo', name: 'substitution', cond: 'HX, heat under reflux', off: -16},
	{id: 'oxald', a: 'alcohol', b: 'aldehyde', name: 'oxidation', cond: '1°: K₂Cr₂O₇ / H⁺, distil'},
	{id: 'oxket', a: 'alcohol', b: 'ketone', name: 'oxidation', cond: '2°: K₂Cr₂O₇ / H⁺'},
	{id: 'oxacid', a: 'aldehyde', b: 'acid', name: 'oxidation', cond: 'K₂Cr₂O₇ / H⁺, reflux'},
	{id: 'alacid', a: 'alcohol', b: 'acid', name: 'oxidation', cond: '1°: excess K₂Cr₂O₇ / H⁺, reflux'},
	{id: 'est', a: 'acid', b: 'ester', name: 'esterification', cond: '+ alcohol, conc. H₂SO₄, reflux, ⇌', chip: '+ alcohol'},
	{id: 'amd', a: 'acid', b: 'amide', name: 'amide formation', cond: '+ amine, strong heat', chip: '+ amine'},
	{id: 'uv', a: 'alkane', b: 'halo', name: 'substitution', cond: 'X₂, UV light (a mixture)'},
	{id: 'h2', a: 'alkene', b: 'alkane', name: 'addition of H₂', cond: 'H₂, Ni, about 150 °C', grey: true},
	{id: 'addhx', a: 'alkene', b: 'halo', name: 'addition of HX', cond: 'HX, room temperature', grey: true, off: 16},
	{id: 'hydro', a: 'ester', b: 'acid', name: 'hydrolysis', cond: 'NaOH(aq), heat (c12)', grey: true, off: 18},
];
const BW = 250, BH = 74;
const bx = (id: string) => MAP_BOXES.find(b => b.id === id) as MBox;
const edgePts = (e: MEdge): [V2, V2] => {
	const A = bx(e.a).p, B = bx(e.b).p;
	const dx = B[0] - A[0], dy = B[1] - A[1], L = Math.hypot(dx, dy) || 1;
	const ux = dx / L, uy = dy / L, nx = -uy * (e.off ?? 0), ny = ux * (e.off ?? 0);
	const cut = (u: number, v: number) => Math.min(Math.abs(BW / 2 / (u || 1e-6)), Math.abs(BH / 2 / (v || 1e-6))) + 8;
	const ca = cut(ux, uy);
	return [[A[0] + ux * ca + nx, A[1] + uy * ca + ny], [B[0] - ux * ca + nx, B[1] - uy * ca + ny]];
};
export type MapT = {boxAt: number; edgeAt: Record<string, number>; lit?: Record<string, [number, number]>; amber?: Record<string, number>; ring?: Record<string, number>; hub?: number};
export const RMap: React.FC<{T: MapT; x?: number; y?: number; s?: number; o?: number; labels?: boolean}> = ({T, x = 0, y = 0, s = 1, o = 1, labels = true}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
			{MAP_EDGES.map(e => {
				const at = T.edgeAt[e.id];
				if (at === undefined || f < at) return null;
				const [a, b] = edgePts(e);
				const lw = T.lit?.[e.id];
				const lit = lw ? vis(f, lw[0], lw[1]) : 0;
				const am = T.amber?.[e.id] !== undefined ? prog(f, T.amber[e.id], 12) : 0;
				const col = am > 0.5 ? AMB : e.grey ? GREY : INK;
				const op = Math.max(0.4, lit, am);
				const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
				const h = (k: number): V2 => [b[0] - Math.cos(ang + k) * 18, b[1] - Math.sin(ang + k) * 18];
				const m: V2 = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
				return (
					<g key={e.id} opacity={op}>
						<DrawPath d={`M${a[0]},${a[1]} L${b[0]},${b[1]}`} at={at} dur={16} color={col} width={am > 0.5 ? 7 : 4} />
						<path d={`M${h(0.45)[0]},${h(0.45)[1]} L${b[0]},${b[1]} L${h(-0.45)[0]},${h(-0.45)[1]}`} fill="none" stroke={col} strokeWidth={am > 0.5 ? 7 : 4} strokeLinecap="round" opacity={prog(f, at + 12, 6)} />
						{labels ? <Sx x={m[0] + (e.off ?? 0) * 0.9} y={m[1] - 12 + (e.off ?? 0) * 1.6} text={e.name + (e.chip ? '  ' + e.chip : '')} size={20} color={e.grey ? GREY : NAVY} anchor="middle" weight={700} at={at + 8} /> : null}
					</g>
				);
			})}
			{MAP_BOXES.map((b, i) => {
				const q = prog(f, T.boxAt + i * 8, 10);
				if (q <= 0.01) return null;
				const hub = b.id === 'alcohol' && T.hub !== undefined ? 1 + 0.12 * Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - T.hub) / 24)) * Math.PI)) : 1;
				const r = T.ring?.[b.id];
				return (
					<g key={b.id} opacity={q} transform={`translate(${b.p[0]},${b.p[1]}) scale(${hub}) translate(${-b.p[0]},${-b.p[1]})`}>
						<rect x={b.p[0] - BW / 2} y={b.p[1] - BH / 2} width={BW} height={BH} rx={16} fill={CARDC} stroke={b.id === 'alcohol' ? RED : NAVY} strokeWidth={b.id === 'alcohol' ? 5 : 3} />
						<Sx x={b.p[0]} y={b.p[1] + 11} text={b.t} size={30} color={INK} anchor="middle" weight={800} at={-1000} />
						{r !== undefined ? <rect x={b.p[0] - BW / 2 - 12} y={b.p[1] - BH / 2 - 12} width={BW + 24} height={BH + 24} rx={22} fill="none" stroke={RED} strokeWidth={6} opacity={vis(f, r, r + 60)} /> : null}
					</g>
				);
			})}
		</g>
	);
};
export const ALL_EDGES = (at: number): Record<string, number> => Object.fromEntries(MAP_EDGES.map(e => [e.id, at]));
/** The small grey reference card at the bottom right. */
export const MapCard: React.FC<{amber?: Record<string, number>; ring?: Record<string, number>; o?: number; at?: number}> = ({amber, ring, o = 1, at = -1000}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<rect x={1440} y={830} width={440} height={200} rx={16} fill="#f6f3ec" stroke={GREY} strokeWidth={2} />
			<RMap T={{boxAt: -1000, edgeAt: ALL_EDGES(-1000), amber, ring}} x={1415} y={790} s={0.25} o={0.85} labels={false} />
		</g>
	);
};

// ---------- flow chart ----------
export const FBox: React.FC<{x: number; y: number; w: number; name: string; formula?: string; at: number; out?: number; o?: number; edge?: 'red' | 'amber' | 'grey'; size?: number; glow?: number}> = ({x, y, w, name, formula, at, out, o = 1, edge, size = 26, glow}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const h = formula ? size * 2.9 : size * 1.9;
	const col = edge === 'red' ? RED : edge === 'amber' ? AMB : edge === 'grey' ? GREY : NAVY;
	const g = glow === undefined ? 0 : vis(f, glow, glow + 50);
	return (
		<g opacity={v}>
			{g > 0 ? <rect x={x - 10} y={y - 10} width={w + 20} height={h + 20} rx={22} fill="#f6d77a" opacity={0.55 * g} /> : null}
			<rect x={x} y={y} width={w} height={h} rx={14} fill={edge === 'amber' ? AMB_SOFT : CARDC} stroke={col} strokeWidth={edge ? 5 : 3} strokeDasharray={edge === 'grey' ? '9 7' : undefined} />
			<Sx x={x + w / 2} y={y + size * 1.25} text={name} size={size} color={edge === 'grey' ? GREY : INK} anchor="middle" weight={800} at={-1000} />
			{formula ? <Sx x={x + w / 2} y={y + size * 2.45} text={formula} size={size * 0.85} color={edge === 'grey' ? GREY : INK_SOFT} anchor="middle" weight={700} at={-1000} /> : null}
		</g>
	);
};
export const boxH = (size = 26, formula = true) => (formula ? size * 2.9 : size * 1.9);
export const FArrow: React.FC<{a: V2; b: V2; at: number; chips?: string[]; eq?: boolean; dim?: number; o?: number; color?: string; below?: boolean; cross?: number; dashed?: boolean; size?: number}> = ({a, b, at, chips = [], eq = false, dim, o = 1, color = NAVY, below = false, cross, dashed = false, size = 20}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
	const p = prog(f, at, 14);
	const e: V2 = [a[0] + (b[0] - a[0]) * p, a[1] + (b[1] - a[1]) * p];
	const nx = -Math.sin(ang), ny = Math.cos(ang);
	const h = (k: number, q: V2): V2 => [q[0] - Math.cos(ang + k) * 16, q[1] - Math.sin(ang + k) * 16];
	const co = dim === undefined ? 1 : 1 - 0.55 * prog(f, dim, 12);
	const m: V2 = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
	const cx = cross === undefined ? 0 : prog(f, cross, 10);
	return (
		<g opacity={v}>
			{eq ? (
				<g stroke={color} strokeWidth={4} strokeLinecap="round" fill="none" opacity={p}>
					<path d={`M${a[0] - nx * 6},${a[1] - ny * 6} L${b[0] - nx * 6},${b[1] - ny * 6} L${h(0.5, [b[0] - nx * 6, b[1] - ny * 6])[0]},${h(0.5, [b[0] - nx * 6, b[1] - ny * 6])[1]}`} />
					<path d={`M${b[0] + nx * 6},${b[1] + ny * 6} L${a[0] + nx * 6},${a[1] + ny * 6} L${a[0] + nx * 6 + Math.cos(ang + 0.5) * 16},${a[1] + ny * 6 + Math.sin(ang + 0.5) * 16}`} />
				</g>
			) : (
				<g stroke={color} strokeWidth={4} strokeLinecap="round" fill="none">
					<line x1={a[0]} y1={a[1]} x2={e[0]} y2={e[1]} strokeDasharray={dashed ? '10 8' : undefined} />
					{p > 0.9 ? <path d={`M${h(0.45, b)[0]},${h(0.45, b)[1]} L${b[0]},${b[1]} L${h(-0.45, b)[0]},${h(-0.45, b)[1]}`} /> : null}
				</g>
			)}
			<g opacity={co}>
				{chips.map((c, i) => {
					const yy = below ? m[1] + 34 + i * size * 1.3 : m[1] - 14 - (chips.length - 1 - i) * size * 1.3;
					return <g key={i} opacity={prog(f, at + 8 + i * 8, 10)}><Sx x={m[0]} y={yy} text={c} size={size} color={color} anchor="middle" weight={700} at={-1000} /></g>;
				})}
			</g>
			{cx > 0 ? <g opacity={cx}><line x1={m[0] - 22} y1={m[1] - 22} x2={m[0] + 22} y2={m[1] + 22} stroke={RED} strokeWidth={7} strokeLinecap="round" /><line x1={m[0] + 22} y1={m[1] - 22} x2={m[0] - 22} y2={m[1] + 22} stroke={RED} strokeWidth={7} strokeLinecap="round" /></g> : null}
		</g>
	);
};
export const textW = (t: string, size: number) => mw(t, size, false, 800);
