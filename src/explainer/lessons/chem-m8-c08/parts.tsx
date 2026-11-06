// Drawing parts for M8 C08 (simple tests for organic groups). Reuses M8 C04 (and through it C03b to M5: chips, notes,
// crossed chips, plates, question text, countdown, key notes, shimmer, bubbles, droppers, falling drops, the framed answer,
// row cards), the M7 molecule kit (SkelAt skeletal molecules, acid), M6 C01's ProtonHop and M8 shared SignalPulse.
// New here (exported so P05 can import them):
// - MOL: the skeletal molecules of this lesson; MolAt draws one with group rings (C=C teal, -COOH red, -OH violet);
// - CandStrip: the candidate strip (five or four cards: structure and name; write on, glow, strike, docked plate thumbs);
// - TubeAt: one rack plate pair cross-fading in place, with an optional shake; Thumb: a small plate thumbnail;
// - FlowChart: the three-question decision chart where both branches of every box continue (no early exit);
// - GasPath: grey bubbles travelling along a dashed arrow (gas to the limewater); Spatula: a coded spatula outline.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {INK, INK_SOFT, NAVY, PicF, Sx, clamp01, lerp, mw, natPt, smooth, vis} from '../chem-m8-c04/parts';
import {SkelAt, at2} from '../chem-m7-c02/parts';
import type {Mol2} from '../chem-m7-c02/parts';
import {outward, ringBonds, ringPts, zig} from '../chem-m7-c01/molecules';
import type {Bond, V2} from '../chem-m7-c01/molecules';
import {acid} from '../chem-m7-c08a/parts';
import type {PDef} from './common';
import {RK_A} from './common';

export * from '../chem-m8-c04/parts';
export {SignalPulse} from '../m8-shared/parts';
export {SkelAt};
export type {Mol2};

// ---------- colour key (design) ----------
export const CC = '#1f8f86', COOH = '#c4432f', OHV = '#7a4fb0', GREYS = '#9a948a', AMB = '#c9781a', ANS8 = '#1f7a55';

// ---------- molecules ----------
const chain = (n: number): Bond[] => Array.from({length: n - 1}, (_, i) => ({a: i, b: i + 1}));
const zz = (n: number, dx = 92, dy = 54) => zig(n, (-(n - 1) * dx) / 2, 0, dx, dy);
const dblAt = (bonds: Bond[], k: number): Bond[] => bonds.map((b, i) => (i === k ? {...b, order: 2 as const, color: CC} : b));
const withOH = (n: number, dbl?: number): Mol2 => ({pts: zz(n), bonds: dbl === undefined ? chain(n) : dblAt(chain(n), dbl), labels: [{i: n - 1, text: 'OH'}]});
const acidM = (n: number, dbl?: number): Mol2 => { const m = acid(n, 92, 54).m; return dbl === undefined ? m : {...m, bonds: dblAt(m.bonds, dbl)}; };
const p2ol = (() => { const Z = zz(3); const pts: V2[] = [...Z, outward(Z, 1, 92)]; return {pts, bonds: [...chain(3), {a: 1, b: 3}], labels: [{i: 3, text: 'OH'}]} as Mol2; })();
export const MOL = {
	cyclohexane: {pts: ringPts(6, 0, 0, 74), bonds: ringBonds(6)} as Mol2,
	cyclohexene: {pts: ringPts(6, 0, 0, 74), bonds: dblAt(ringBonds(6), 0)} as Mol2,
	ethanol: withOH(3),
	tBuOH: {pts: [[0, 18], [-92, 18], [92, 18], [0, 104], [0, -70]], bonds: [{a: 0, b: 1}, {a: 0, b: 2}, {a: 0, b: 3}, {a: 0, b: 4}], labels: [{i: 4, text: 'OH'}]} as Mol2,
	ethanoic: acidM(2),
	propenol: withOH(4, 0),
	butenoic: acidM(4, 0),
	hexane: {pts: zz(6), bonds: chain(6)} as Mol2,
	hexanol: withOH(7),
	hexenol: withOH(7, 0),
	hexanoic: acidM(6),
	propan1ol: withOH(4),
	propan2ol: p2ol,
	but1ene: {pts: zz(4), bonds: dblAt(chain(4), 0)} as Mol2,
	but2ene: {pts: zz(4), bonds: dblAt(chain(4), 1)} as Mol2,
};
export type MolKey = keyof typeof MOL;
/** The group to ring on each molecule: point indices (local) per group. */
const lastIdx = (m: Mol2) => m.pts.length - 1;
export const GROUPS: Partial<Record<MolKey, {cc?: number[]; oh?: number[]; cooh?: number[]}>> = {
	cyclohexene: {cc: [0, 1]},
	ethanol: {oh: [2]},
	tBuOH: {oh: [4]},
	ethanoic: {cooh: [1, 2, 3]},
	propenol: {cc: [0, 1], oh: [3]},
	butenoic: {cc: [0, 1], cooh: [3, 4, 5]},
	hexanol: {oh: [6]},
	hexenol: {cc: [0, 1], oh: [6]},
	hexanoic: {cooh: [5, 6, 7]},
	propan1ol: {oh: [3]},
	propan2ol: {oh: [3]},
	but1ene: {cc: [0, 1]},
	but2ene: {cc: [1, 2]},
};
void lastIdx;
/** Bounding ellipse (screen) round points idx of molecule m drawn at (x, y, s). */
export const ringOf = (m: Mol2, idx: number[], x: number, y: number, s: number, pad = 30) => {
	const P = at2(m, x, y, s);
	const xs = idx.map(i => P[i][0]), ys = idx.map(i => P[i][1]);
	const lab = (m.labels ?? []).some(l => idx.includes(l.i));
	const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
	const extra = lab ? 26 * Math.max(0.7, s) : 0;
	return {cx: (x0 + x1) / 2 + (lab && idx.length === 1 ? extra * 0.5 : 0), cy: (y0 + y1) / 2, rx: (x1 - x0) / 2 + pad * Math.max(0.6, s) + extra, ry: (y1 - y0) / 2 + pad * 0.8 * Math.max(0.6, s)};
};
const GroupRing: React.FC<{cx: number; cy: number; rx: number; ry: number; color: string; at: number; out?: number; pulse?: number; width?: number}> = ({cx, cy, rx, ry, color, at, out, pulse, width = 4}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const pl = pulse === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - pulse) / 36) * Math.PI));
	return (
		<g opacity={v}>
			{pl > 0.01 ? <ellipse cx={cx} cy={cy} rx={rx + 6} ry={ry + 6} fill={color} opacity={0.18 * pl} /> : null}
			<DrawPath d={`M${cx},${cy - ry} A${rx},${ry} 0 1 1 ${cx - 1},${cy - ry}`} at={at} dur={16} color={color} width={width + 2 * pl} />
		</g>
	);
};
/** A molecule with its group rings. ring: which groups to ring and when; pulse: frame at which the rings pulse. */
export const MolAt: React.FC<{k: MolKey; x: number; y: number; s?: number; at: number; out?: number; o?: number; ring?: {cc?: number; oh?: number; cooh?: number}; pulse?: number; plain?: boolean; width?: number}> = ({k, x, y, s = 1, at, out, o = 1, ring = {}, pulse, plain = false, width}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const m0 = MOL[k];
	const m = plain ? {...m0, bonds: m0.bonds.map(b => ({...b, color: undefined}))} : m0;
	const g = GROUPS[k] ?? {};
	return (
		<g opacity={v}>
			<SkelAt m={m} x={x} y={y} s={s} at={at} width={width ?? Math.max(3.5, 6 * Math.min(1, s * 1.4))} />
			{(['cc', 'oh', 'cooh'] as const).map(gk => {
				const idx = g[gk];
				const t = ring[gk];
				if (!idx || t === undefined) return null;
				const r = ringOf(m, idx, x, y, s, gk === 'cc' ? 26 : 22);
				return <GroupRing key={gk} {...r} color={gk === 'cc' ? CC : gk === 'oh' ? OHV : COOH} at={t} pulse={pulse} width={s < 0.7 ? 3 : 4} />;
			})}
		</g>
	);
};

// ---------- plates ----------
/** A rack plate pair cross-fading in place: `a` then `b` from `swap`. `rock` shakes the tube (a few degrees) from rock[0] to rock[1]. */
export const TubeAt: React.FC<{a: PDef; b?: PDef; swap?: number; x: number; y: number; h: number; at?: number; out?: number; o?: number; rock?: [number, number]; dur?: number}> = ({a, b, swap, x, y, h, at = -1000, out, o = 1, rock, dur = 30}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const q = b && swap !== undefined ? prog(f, swap, dur) : 0;
	const [fx, fy] = natPt(a, x, y, h, 1000, RK_A.foot);
	const ang = rock && f >= rock[0] && f < rock[1] ? Math.sin((f - rock[0]) * 0.6) * 5 : 0;
	return (
		<g opacity={v} transform={ang ? `rotate(${ang},${fx},${fy})` : undefined}>
			{q < 0.999 ? <PicF p={a} x={x} y={y} h={h} /> : null}
			{b && q > 0.01 ? <PicF p={b} x={x} y={y} h={h} o={q} /> : null}
		</g>
	);
};
export const tubeW = (p: PDef, h: number) => (p.box[2] / p.box[3]) * h;
export const Thumb: React.FC<{p: PDef; x: number; y: number; h: number; at?: number; out?: number; o?: number}> = ({p, x, y, h, at = -1000, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const pop = 0.85 + 0.15 * smooth(prog(f, at, 14));
	const w = tubeW(p, h);
	return <g opacity={v} transform={`translate(${x + w / 2},${y + h}) scale(${pop}) translate(${-(x + w / 2)},${-(y + h)})`}><PicF p={p} x={x} y={y} h={h} /></g>;
};

// ---------- candidate strip ----------
export type Cand = {k: MolKey; name: string; at?: number; strike?: number; glow?: number; ring?: {cc?: number; oh?: number; cooh?: number}; pulse?: number; thumbs?: {p: PDef; at: number}[]; light?: [number, number]};
export const CAND5: {k: MolKey; name: string}[] = [
	{k: 'cyclohexane', name: 'cyclohexane'}, {k: 'cyclohexene', name: 'cyclohexene'}, {k: 'ethanol', name: 'ethanol'}, {k: 'tBuOH', name: '2-methylpropan-2-ol'}, {k: 'ethanoic', name: 'ethanoic acid'},
];
/** Cards across the top band (y 172 to 336). */
export const CandStrip: React.FC<{c: Cand[]; x?: number; y?: number; w?: number; gap?: number; h?: number; s?: number; size?: number; o?: number}> = ({c, x = 96, y = 174, w = 330, gap = 19.5, h = 170, s = 0.5, size = 28, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{c.map((cd, i) => {
				const at = cd.at ?? -1000;
				const v = prog(f, at, 12);
				if (v <= 0.01) return null;
				const cx = x + i * (w + gap);
				const st = cd.strike === undefined ? 0 : prog(f, cd.strike, 12);
				const gl = cd.glow === undefined ? 0 : prog(f, cd.glow, 12);
				const li = cd.light ? vis(f, cd.light[0], cd.light[1], 10) : 0;
				const thumbs = cd.thumbs ?? [];
				const mx = cx + (thumbs.length ? w * 0.42 : w / 2);
				return (
					<g key={i} opacity={v}>
						<rect x={cx} y={y} width={w} height={h} rx={18} fill={gl > 0.5 ? '#fff4d8' : li > 0.5 ? '#f3f0fa' : '#fffdf8'} stroke={gl > 0.01 ? AMB : li > 0.01 ? OHV : 'rgba(60,45,20,0.22)'} strokeWidth={gl > 0.01 ? 5 : li > 0.01 ? 4 : 3} />
						<g opacity={1 - 0.62 * st}>
							<MolAt k={cd.k} x={mx} y={y + h * 0.46} s={s} at={at} ring={cd.ring} pulse={cd.pulse} />
							<Sx x={cx + w / 2} y={y + h - 14} text={cd.name} size={size} color={INK} anchor="middle" weight={800} at={-1000} />
						</g>
						{thumbs.map((t, k) => <Thumb key={k} p={t.p} x={cx + w - 66 - k * 56} y={y + 10} h={84} at={t.at} />)}
						{st > 0.01 ? <DrawPath d={`M${cx + 14},${y + h - 18} L${cx + w - 14},${y + 18}`} at={cd.strike as number} dur={10} color={COOH} width={6} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- the decision chart ----------
export type FRow = {q: string; yes: string; no: string; at: number; lit?: 'yes' | 'no'; litAt?: number; note?: string; thumb?: PDef};
/** Rows centred on cx: a question box, then its yes and no pills side by side; both pills feed the next box (no early
 *  exit). `final` closes the chart. */
export const FlowChart: React.FC<{cx: number; y: number; rows: FRow[]; step?: number; qw?: number; pw?: number; size?: number; psize?: number; final?: {text: string; at: number}; o?: number}> = ({cx, y, rows, step = 200, qw = 640, pw = 340, size = 30, psize = 26, final, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const QH = 70, PH = 50, PG = 20;
	return (
		<g opacity={o}>
			{rows.map((r, i) => {
				const v = prog(f, r.at, 12);
				if (v <= 0.01) return null;
				const qy = y + i * step, py = qy + QH + 34;
				const L = r.litAt === undefined ? 0 : prog(f, r.litAt, 12);
				const pill = (side: 'yes' | 'no') => {
					const px = side === 'yes' ? cx - PG / 2 - pw : cx + PG / 2;
					const on = r.lit === side ? L : 0;
					const col = side === 'yes' ? ANS8 : GREYS;
					return (
						<g key={side}>
							<path d={`M${cx},${qy + QH} L${px + pw / 2},${py - 4}`} stroke={INK_SOFT} strokeWidth={3} fill="none" />
							<rect x={px} y={py} width={pw} height={PH} rx={PH / 2} fill={on > 0.5 ? '#fff1dd' : '#fffdf8'} stroke={on > 0.01 ? AMB : col} strokeWidth={on > 0.01 ? 5 : 3} />
							<Sx x={px + pw / 2} y={py + PH / 2 + psize * 0.35} text={side === 'yes' ? r.yes : r.no} size={psize} color={side === 'yes' ? ANS8 : INK_SOFT} anchor="middle" weight={700} at={-1000} />
							{i < rows.length - 1 || final ? <path d={`M${px + pw / 2},${py + PH} L${cx},${qy + step - 6}`} stroke={INK_SOFT} strokeWidth={3} fill="none" strokeDasharray="8 6" /> : null}
						</g>
					);
				};
				return (
					<g key={i} opacity={v}>
						<rect x={cx - qw / 2} y={qy} width={qw} height={QH} rx={16} fill="#fffdf8" stroke={NAVY} strokeWidth={4} />
						<Sx x={cx} y={qy + QH / 2 + size * 0.35} text={r.q} size={size} color={NAVY} anchor="middle" weight={800} at={-1000} />
						{pill('yes')}{pill('no')}
						{r.note ? <Sx x={cx - PG / 2 - pw - 14} y={py + PH / 2 + 9} text={r.note} size={26} color={INK_SOFT} anchor="end" weight={700} at={-1000} /> : null}
						{r.thumb ? <PicF p={r.thumb} x={cx - qw / 2 - 150} y={qy - 20} h={150} /> : null}
					</g>
				);
			})}
			{final ? (() => {
				const v = prog(f, final.at, 12);
				const fy = y + rows.length * step;
				return v > 0.01 ? (
					<g opacity={v}>
						<rect x={cx - qw / 2} y={fy} width={qw} height={QH} rx={16} fill="#eef6f1" stroke={ANS8} strokeWidth={4} />
						<Sx x={cx} y={fy + QH / 2 + size * 0.35} text={final.text} size={size} color={ANS8} anchor="middle" weight={800} at={-1000} />
					</g>
				) : null;
			})() : null}
		</g>
	);
};

// ---------- gas path and spatula ----------
export const GasPath: React.FC<{a: [number, number]; b: [number, number]; at: number; out?: number; bow?: number}> = ({a, b, at, out, bow = -60}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2 + bow;
	const ang = Math.atan2(b[1] - my, b[0] - mx);
	return (
		<g opacity={v}>
			<path d={`M${a[0]},${a[1]} Q${mx},${my} ${b[0]},${b[1]}`} fill="none" stroke="#9aa6b0" strokeWidth={4} strokeDasharray="12 9" />
			<path d={`M${b[0] - 20 * Math.cos(ang - 0.5)},${b[1] - 20 * Math.sin(ang - 0.5)} L${b[0]},${b[1]} L${b[0] - 20 * Math.cos(ang + 0.5)},${b[1] - 20 * Math.sin(ang + 0.5)}`} fill="none" stroke="#9aa6b0" strokeWidth={4} strokeLinecap="round" />
			{[0, 1, 2, 3, 4].map(i => {
				const u = (((f - at) / 55) + i / 5) % 1;
				const p = u;
				const x = (1 - p) * (1 - p) * a[0] + 2 * (1 - p) * p * mx + p * p * b[0];
				const y = (1 - p) * (1 - p) * a[1] + 2 * (1 - p) * p * my + p * p * b[1];
				return <circle key={i} cx={x} cy={y} r={8} fill="#f4f7f9" stroke="#6b7a86" strokeWidth={2} opacity={Math.sin(u * Math.PI)} />;
			})}
		</g>
	);
};
/** A coded spatula outline that tips a small white heap from `tip` (no hands). (x, y) is the blade tip. */
export const Spatula: React.FC<{x: number; y: number; at: number; tip: number; out?: number}> = ({x, y, at, tip, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const t = smooth(prog(f, tip, 16));
	const ang = -20 + 45 * t;
	return (
		<g opacity={v} transform={`rotate(${ang},${x},${y})`}>
			<path d={`M${x},${y} L${x + 70},${y - 14} L${x + 76},${y + 6} L${x + 4},${y + 14} Z`} fill="#dfe3e8" stroke="#6b7a86" strokeWidth={3} />
			<rect x={x + 74} y={y - 8} width={150} height={12} rx={5} fill="#c9ced5" stroke="#6b7a86" strokeWidth={2.5} />
			{t < 0.6 ? <ellipse cx={x + 36} cy={y - 4} rx={22} ry={9} fill="#ffffff" stroke="#b7bcc4" strokeWidth={2} /> : null}
		</g>
	);
};
export const TickAt: React.FC<{x: number; y: number; at: number; color?: string; s?: number}> = ({x, y, at, color = CC, s = 1}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	return <DrawPath d={`M${x - 18 * s},${y} L${x - 4 * s},${y + 16 * s} L${x + 22 * s},${y - 18 * s}`} at={at} dur={10} color={color} width={7 * s} />;
};
export {INK, INK_SOFT, NAVY, Sx, clamp01, lerp, mw, smooth, vis, prog};
