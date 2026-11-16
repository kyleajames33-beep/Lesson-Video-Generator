// C8-10 coded parts (infrared). Spectra are coded only, drawn from measured point files (irdata.ts, generated from
// docs/production/claude-pm/assets/brief246-ir and brief120-nist). Exported for c12 and g03:
// - IG / wx / ty / IRAxes / IRTrace: a linear wavenumber axis 4000 (left) to 500 (right), ticks every 500, and a
//   transmittance axis 0 to 100%; the measured trace draws left to right on cue.
// - RangeShade (a data-sheet range behind the trace, optional hatched "none" style and chip), BandMark (rings one band
//   and writes its value), Bracket (a thin bracket with a label above a span).
// - Spring (the vibrating bond: two coded balls on a coded spring that stretch or bend; rate and ball sizes set the
//   speed), DataSheet (the NESA infrared table as a plain card, rows light on cue).
// - MOL10: the lesson's skeletal structures for MolAt (c09's renderer).
// Board, chips and plates come through c09's parts (bio-m8-g01's practice board). Nothing here draws people.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {outward, zig} from '../chem-m7-c01/molecules';
import type {Bond} from '../chem-m7-c01/molecules';
import {AMBER, CARD, Chip, DrawPath, EDGE, GREYT, INK, INK_SOFT, NAVY, Sx, mw, prog, pulse, smooth, vis} from '../chem-m8-c09/parts';
import type {Mol2, V2} from '../chem-m8-c09/parts';
import type {IRPts} from './irdata';

export * from '../chem-m8-c09/parts';
export type {IRPts};
/** Colour key (c08 group colours): O–H violet, C=O red, C–H grey, N–H blue, C–O amber. */
export const OHC = '#7a4fb0', COC = '#c4432f', CHC = '#7d776d', NHC = '#2f6fd0', CO1 = '#c9781a', TRACE = '#24324a';

// ---------- the IR trace ----------
export type IG = {x: number; y: number; w: number; h: number; w0?: number; w1?: number};
export const wx = (g: IG, wn: number) => g.x + ((g.w0 ?? 4000) - wn) / ((g.w0 ?? 4000) - (g.w1 ?? 500)) * g.w;
export const ty = (g: IG, t: number) => g.y + g.h - (t / 100) * g.h;
export const IRAxes: React.FC<{g: IG; at?: number; xLabelAt?: number; yLabelAt?: number; ticksAt?: number; size?: number; o?: number; ticks?: number[]; yTicks?: number[]; xTitle?: string; yTitle?: string; grid?: boolean}> = ({g, at = -1000, xLabelAt = -1000, yLabelAt = -1000, ticksAt = -1000, size = 28, o = 1, ticks = [4000, 3500, 3000, 2500, 2000, 1500, 1000, 500], yTicks = [0, 50, 100], xTitle = 'wavenumber (cm⁻¹)', yTitle = 'transmittance (%)', grid = true}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const tv = prog(f, ticksAt, 12);
	const tk = ticks.filter(t => t <= (g.w0 ?? 4000) && t >= (g.w1 ?? 500));
	return (
		<g opacity={v}>
			<rect x={g.x} y={g.y} width={g.w} height={g.h} fill={CARD} opacity={0.75} />
			{grid ? tk.map(t => <line key={'g' + t} x1={wx(g, t)} x2={wx(g, t)} y1={g.y} y2={g.y + g.h} stroke="#ece4d4" strokeWidth={1.5} />) : null}
			<path d={`M${g.x},${g.y - 6} L${g.x},${g.y + g.h} L${g.x + g.w + 6},${g.y + g.h}`} fill="none" stroke={INK} strokeWidth={3.5} />
			{tk.map(t => <g key={t}><line x1={wx(g, t)} x2={wx(g, t)} y1={g.y + g.h} y2={g.y + g.h + 10} stroke={INK} strokeWidth={3} />{tv > 0.01 ? <Sx x={wx(g, t)} y={g.y + g.h + 14 + size} text={`${t}`} size={size} color={INK} anchor="middle" weight={600} at={ticksAt} /> : null}</g>)}
			{yTicks.map(t => <g key={'y' + t}><line x1={g.x - 10} x2={g.x} y1={ty(g, t)} y2={ty(g, t)} stroke={INK} strokeWidth={3} /><Sx x={g.x - 16} y={ty(g, t) + size * 0.35} text={`${t}`} size={size} color={INK} anchor="end" weight={600} at={-1000} /></g>)}
			{xTitle ? <Sx x={g.x + g.w / 2} y={g.y + g.h + 24 + size * 2.1} text={xTitle} size={size + 2} color={INK} anchor="middle" weight={800} at={xLabelAt} /> : null}
			{yTitle ? <Sx x={g.x - 50} y={g.y - 18} text={yTitle} size={size + 2} color={INK} weight={800} at={yLabelAt} /> : null}
		</g>
	);
};
/** The measured trace, drawn left (4000) to right over `dur` frames from `at`. */
export const IRTrace: React.FC<{g: IG; pts: IRPts; at?: number; dur?: number; color?: string; width?: number; o?: number; out?: number}> = ({g, pts, at = -1000, dur = 45, color = TRACE, width = 3.2, o = 1, out}) => {
	const f = useCurrentFrame();
	const v = (out === undefined ? 1 : 1 - prog(f, out, 12)) * o;
	if (v <= 0.01 || f < at) return null;
	const k = at < -100 ? 1 : smooth(prog(f, at, dur));
	const w0 = g.w0 ?? 4000, w1 = g.w1 ?? 500;
	const cut = w0 - (w0 - w1) * k;
	let d = '';
	for (const [wn, t] of pts) {
		if (wn > w0 || wn < w1 || wn < cut) continue;
		d += (d ? 'L' : 'M') + wx(g, wn).toFixed(1) + ',' + ty(g, Math.max(0, Math.min(100, t))).toFixed(1);
	}
	return <path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinejoin="round" opacity={v} />;
};
/** Lowest %T of a trace inside [a, b] (for marker placement): returns [wn, %T]. */
export const dipIn = (pts: IRPts, a: number, b: number): [number, number] => pts.filter(p => p[0] >= Math.min(a, b) && p[0] <= Math.max(a, b)).reduce((m, p) => (p[1] < m[1] ? p : m), [a, 101] as [number, number]);
/** A data-sheet range shaded behind the trace; `none` gives the pale cross-hatch of an empty range. */
export const RangeShade: React.FC<{g: IG; a: number; b: number; at: number; out?: number; color?: string; none?: boolean; op?: number; dim?: number}> = ({g, a, b, at, out, color = OHC, none = false, op = 0.16, dim}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * (dim === undefined ? 1 : 1 - 0.6 * prog(f, dim, 14));
	if (v <= 0.01) return null;
	const x0 = wx(g, Math.max(a, b)), x1 = wx(g, Math.min(a, b));
	return (
		<g opacity={v}>
			<rect x={x0} y={g.y} width={x1 - x0} height={g.h} fill={none ? '#e9e4da' : color} opacity={none ? 0.7 : op} />
			{none ? Array.from({length: Math.ceil((x1 - x0 + g.h) / 22)}, (_, i) => {
				const s = x0 + i * 22;
				return <line key={i} x1={Math.max(x0, s - g.h)} y1={g.y + g.h - Math.max(0, x0 - (s - g.h))} x2={Math.min(x1, s)} y2={g.y + g.h - (Math.min(x1, s) - (s - g.h))} stroke="#b9b1a3" strokeWidth={1.6} />;
			}) : null}
			<line x1={x0} x2={x0} y1={g.y} y2={g.y + g.h} stroke={none ? '#b9b1a3' : color} strokeWidth={2} strokeDasharray="6 6" opacity={0.7} />
			<line x1={x1} x2={x1} y1={g.y} y2={g.y + g.h} stroke={none ? '#b9b1a3' : color} strokeWidth={2} strokeDasharray="6 6" opacity={0.7} />
		</g>
	);
};
/** Rings one band (centre wn, depth t) and writes a label at (dx, dy) from the ring's foot or top. */
export const BandMark: React.FC<{g: IG; wn: number; t: number; text?: string; at: number; out?: number; color?: string; rx?: number; ry?: number; dx?: number; dy?: number; size?: number; anchor?: 'start' | 'middle' | 'end'; dim?: number; top?: number}> = ({g, wn, t, text, at, out, color = OHC, rx = 26, ry, dx = 0, dy = 46, size = 32, anchor = 'middle', dim, top}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * (dim === undefined ? 1 : 1 - 0.55 * prog(f, dim, 14));
	if (v <= 0.01) return null;
	const cx = wx(g, wn), yb = ty(g, t);
	const yt = top === undefined ? yb - 50 : ty(g, top);
	const RY = ry ?? Math.max(30, (yb - yt) / 2 + 16);
	const cy = (yb + yt) / 2 + 8;
	return (
		<g opacity={v}>
			<DrawPath d={`M${cx + rx},${cy} A${rx},${RY} 0 1,1 ${cx + rx - 0.1},${cy - 1}`} at={at} dur={14} color={color} width={4} />
			{text ? <Sx x={cx + dx} y={cy + RY + dy - 10} text={text} size={size} color={color} anchor={anchor} hand weight={800} at={-1000} /> : null}
		</g>
	);
};
/** A thin square bracket over a wavenumber span at screen y, with a label above. */
export const SpanBracket: React.FC<{g: IG; a: number; b: number; y: number; text: string; at: number; out?: number; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end'; dx?: number}> = ({g, a, b, y, text, at, out, color = INK_SOFT, size = 30, anchor = 'middle', dx = 0}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const x0 = wx(g, Math.max(a, b)), x1 = wx(g, Math.min(a, b));
	const lx = anchor === 'start' ? x0 : anchor === 'end' ? x1 : (x0 + x1) / 2;
	return (
		<g opacity={v}>
			<path d={`M${x0},${y + 14} L${x0},${y} L${x1},${y} L${x1},${y + 14}`} fill="none" stroke={color} strokeWidth={3} />
			<Sx x={lx + dx} y={y - 12} text={text} size={size} color={color} anchor={anchor} hand weight={800} at={-1000} />
		</g>
	);
};

// ---------- the vibrating bond ----------
/** Two balls on a spring centred at (x, y). mode 'stretch' oscillates the length; 'bend' swings the right ball.
 *  rate = cycles per second; r1, r2 = ball radii; coils thick (stiff) or thin. */
export const Spring: React.FC<{x: number; y: number; len?: number; r1?: number; r2?: number; c1?: string; c2?: string; l1?: string; l2?: string; rate?: number; mode?: 'stretch' | 'bend' | 'both'; at?: number; out?: number; thick?: boolean; amp?: number; o?: number; still?: boolean; bendAt?: number}> = ({x, y, len = 220, r1 = 46, r2 = 34, c1 = '#5d5d66', c2 = '#c4432f', l1, l2, rate = 1.2, mode = 'stretch', at = -1000, out, thick = false, amp = 0.16, o = 1, still = false, bendAt}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const t = still ? 0 : (f - Math.max(0, at)) / 30;
	const bending = mode === 'bend' || (mode === 'both' && bendAt !== undefined && f >= bendAt);
	const s = bending ? 0 : Math.sin(t * rate * 2 * Math.PI) * amp;
	const ang = bending ? Math.sin(t * rate * 2 * Math.PI) * 0.35 : 0;
	const L = len * (1 + s);
	const ax = x - L / 2, bx0 = x + L / 2;
	const bx = ax + (bx0 - ax) * Math.cos(ang), by = y - (bx0 - ax) * Math.sin(ang);
	const n = 9, dx = bx - ax - r1 - r2, dy = by - y;
	const ux = dx / Math.hypot(dx, dy || 0.0001), uy = dy / Math.hypot(dx, dy || 0.0001);
	const px = -uy, py = ux;
	let d = `M${ax + r1 * ux},${y + r1 * uy}`;
	for (let i = 1; i <= n * 2; i++) {
		const k = i / (n * 2);
		const off = i === n * 2 ? 0 : (i % 2 ? 1 : -1) * (thick ? 20 : 15);
		d += ` L${ax + r1 * ux + dx * k + px * off},${y + r1 * uy + dy * k + py * off}`;
	}
	return (
		<g opacity={v}>
			<path d={d} fill="none" stroke={INK_SOFT} strokeWidth={thick ? 7 : 3.5} strokeLinejoin="round" />
			<circle cx={ax} cy={y} r={r1} fill={c1} stroke={INK} strokeWidth={3} />
			<circle cx={bx} cy={by} r={r2} fill={c2} stroke={INK} strokeWidth={3} />
			{l1 ? <Sx x={ax} y={y + r1 * 0.36} text={l1} size={r1 * 0.9} color={CARD} anchor="middle" weight={800} at={-1000} /> : null}
			{l2 ? <Sx x={bx} y={by + r2 * 0.36} text={l2} size={Math.max(24, r2 * 0.9)} color={CARD} anchor="middle" weight={800} at={-1000} /> : null}
		</g>
	);
};

// ---------- the data sheet card ----------
export const DS_ROWS: [string, string, string, string][] = [
	['N–H', '3300–3500', '', NHC],
	['O–H (alcohols)', '3230–3550', 'broad', OHC],
	['C–H', '2850–3300', '', CHC],
	['O–H (acids)', '2500–3000', 'very broad', OHC],
	['C≡N', '2220–2260', '', GREYT],
	['C=O', '1680–1750', '', COC],
	['C=C', '1620–1680', '', GREYT],
	['C–O', '1000–1300', '', CO1],
	['C–C', '750–1100', '', GREYT],
];
/** The NESA infrared table (bond, wavenumber range in cm⁻¹). `lit` maps row index to a frame. */
export const DataSheet: React.FC<{x: number; y: number; w?: number; rowH?: number; size?: number; lit?: Record<number, number>; at?: number; o?: number; dimRest?: number; title?: boolean}> = ({x, y, w = 560, rowH = 52, size = 30, lit = {}, at = -1000, o = 1, dimRest, title = true}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const hy = title ? 46 : 0;
	const dr = dimRest === undefined ? 0 : prog(f, dimRest, 14);
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={hy + rowH * DS_ROWS.length + 14} rx={16} fill={CARD} stroke={EDGE} strokeWidth={2.5} />
			{title ? <Sx x={x + 18} y={y + 34} text="HSC data sheet: infrared (cm⁻¹)" size={Math.max(26, Math.round(size * 0.9))} color={GREYT} weight={700} at={-1000} /> : null}
			{DS_ROWS.map(([b, r, n, c], i) => {
				const L = lit[i] === undefined ? 0 : prog(f, lit[i], 12);
				const yy = y + hy + 8 + i * rowH;
				const dim = L > 0.5 ? 0 : dr;
				return (
					<g key={i} opacity={1 - 0.55 * dim}>
						{L > 0.01 ? <rect x={x + 6} y={yy} width={w - 12} height={rowH - 6} rx={10} fill={c} opacity={0.16 * L} /> : null}
						<Sx x={x + 18} y={yy + rowH * 0.66} text={b} size={size} color={L > 0.5 ? c : INK} weight={800} at={-1000} />
						<Sx x={x + w * 0.45} y={yy + rowH * 0.66} text={r} size={size} color={INK} weight={600} at={-1000} />
						{n ? <Sx x={x + w - 14} y={yy + rowH * 0.66} text={n} size={Math.max(26, Math.round(size * 0.82))} color={GREYT} anchor="end" hand weight={700} at={-1000} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- molecules ----------
const DX = 92, DY = 54;
const chain = (n: number, extra: Bond[] = []): Bond[] => [...Array.from({length: n - 1}, (_, i) => ({a: i, b: i + 1})), ...extra];
const zz = (n: number) => zig(n, (-(n - 1) * DX) / 2, 0, DX, DY);
const ring6: V2[] = Array.from({length: 6}, (_, i) => [Math.cos(((i * 60 - 90) * Math.PI) / 180) * 78, Math.sin(((i * 60 - 90) * Math.PI) / 180) * 78]);
/** chain of n with a terminal label (OH, NH_2) on the last point. */
const term = (n: number, lab: string): Mol2 => ({pts: zz(n), bonds: chain(n), labels: [{i: n - 1, text: lab}]});
/** acid / ester / ketone builders on a zigzag: =O on point i (outward). */
const withO = (n: number, i: number, extra: Bond[] = [], labels: {i: number; text: string}[] = []): Mol2 => { const Z = zz(n); return {pts: [...Z, outward(Z, i, 84)], bonds: chain(n, [{a: i, b: n, order: 2}, ...extra]), labels: [{i: n, text: 'O'}, ...labels]}; };
const tBu: Mol2 = {pts: [[0, 10], [-92, 40], [92, 40], [0, 104], [0, -84]], bonds: [{a: 0, b: 1}, {a: 0, b: 2}, {a: 0, b: 3}, {a: 0, b: 4}], labels: [{i: 4, text: 'OH'}]};
export const MOL10 = {
	cyclohexane: {pts: ring6, bonds: Array.from({length: 6}, (_, i) => ({a: i, b: (i + 1) % 6}))} as Mol2,
	tBuOH: tBu,
	ethanol: term(3, 'OH'),
	propan1ol: term(4, 'OH'),
	propan2ol: (() => { const Z = zz(3); return {pts: [...Z, outward(Z, 1, 84)], bonds: chain(3, [{a: 1, b: 3}]), labels: [{i: 3, text: 'OH'}]} as Mol2; })(),
	butan1ol: term(5, 'OH'),
	propylamine: term(4, 'NH_2'),
	/** ethanoic acid: C–C(=O)–OH */
	ethanoic: withO(3, 1, [], [{i: 2, text: 'OH'}]),
	butanoic: withO(5, 3, [], [{i: 4, text: 'OH'}]),
	propanone: withO(3, 1),
	propanal: withO(4, 2, [], []),
	/** methyl ethanoate C–C(=O)–O–C: O on point 2 */
	meEthanoate: withO(4, 1, [], [{i: 2, text: 'O'}]),
	/** ethyl ethanoate C–C(=O)–O–C–C */
	etEthanoate: withO(5, 1, [], [{i: 2, text: 'O'}]),
};
// propanal is C–C–C=O: the =O must be on the chain end, not outward
MOL10.propanal = {pts: zz(4), bonds: chain(3, [{a: 2, b: 3, order: 2}]), labels: [{i: 3, text: 'O'}]};
export type M10 = keyof typeof MOL10;
/** Bond index pairs for rings: OH on the last point, C=O on (i, n). */
export const RING10: Partial<Record<M10, {oh?: [number, number]; co?: [number, number]; nh?: [number, number]; c1?: [number, number]}>> = {
	tBuOH: {oh: [0, 4]}, ethanol: {oh: [1, 2]}, propan1ol: {oh: [2, 3]}, propan2ol: {oh: [1, 3]}, butan1ol: {oh: [3, 4]}, propylamine: {nh: [2, 3]},
	ethanoic: {co: [1, 3], oh: [1, 2]}, butanoic: {co: [3, 5], oh: [3, 4]}, propanone: {co: [1, 3]}, propanal: {co: [2, 3]}, meEthanoate: {co: [1, 4], c1: [1, 2]}, etEthanoate: {co: [1, 5], c1: [1, 2]},
};
/** A coded IR beam: a wavy line from x0 to x1 at y; a gap in the band from `gapAt` after the cell at xc. */
export const Beam: React.FC<{x0: number; x1: number; y: number; xc: number; at: number; gapAt?: number; out?: number}> = ({x0, x1, y, xc, at, gapAt, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const ph = (f - at) * 6;
	const wave = (a: number, b: number, yy: number, col: string, w = 3) => {
		let d = '';
		for (let x = a; x <= b; x += 6) d += (d ? 'L' : 'M') + x + ',' + (yy + Math.sin((x - ph) / 14) * 8);
		return <path d={d} fill="none" stroke={col} strokeWidth={w} />;
	};
	const gap = gapAt === undefined ? 0 : prog(f, gapAt, 12);
	return (
		<g opacity={v}>
			{wave(x0, x1, y - 24, '#c4432f')}
			{wave(x0, gap > 0.5 ? xc : x1, y, '#1f8f86', 5)}
			{wave(x0, x1, y + 24, '#d39b2a')}
			<rect x={xc - 40} y={y - 70} width={80} height={140} rx={10} fill="#e8f1f6" stroke={INK} strokeWidth={3} opacity={0.9} />
			{gap > 0.01 ? <g opacity={gap}><rect x={xc + 50} y={y - 12} width={x1 - xc - 50} height={24} fill="none" stroke={AMBER} strokeWidth={2} strokeDasharray="6 5" /></g> : null}
		</g>
	);
};
export {Chip, NAVY, mw, pulse};

/** Fills between the trace and the straight line joining its ends over [a, b] (a band "shape" shade). */
export const TraceFill: React.FC<{g: IG; pts: IRPts; a: number; b: number; at: number; out?: number; color?: string; op?: number}> = ({g, pts, a, b, at, out, color = OHC, op = 0.3}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14);
	if (v <= 0.01) return null;
	const sel = pts.filter(p => p[0] <= Math.max(a, b) && p[0] >= Math.min(a, b));
	if (sel.length < 2) return null;
	const s0 = sel[0], s1 = sel[sel.length - 1];
	const top = Math.max(s0[1], s1[1]);
	let d = `M${wx(g, s0[0])},${ty(g, top)}`;
	for (const [wn, t] of sel) d += `L${wx(g, wn).toFixed(1)},${ty(g, t).toFixed(1)}`;
	d += `L${wx(g, s1[0])},${ty(g, top)}Z`;
	return <path d={d} fill={color} opacity={op * v} />;
};
/** Mirror a structure left to right (for facing pairs). */
export const mirror = (m: Mol2): Mol2 => ({...m, pts: m.pts.map(p => [-p[0], p[1]] as V2)});
