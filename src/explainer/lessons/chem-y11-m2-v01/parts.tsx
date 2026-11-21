// Drawing parts for Y11 Chem M2 V01 (conservation of mass and balancing equations). Reuses the M1 V07 parts (and
// through them V06's top-pan balance with its coded display and V01's text, chips, framed answers, pen marks and
// plates) read-only. New here:
// - Boundary: the dashed teal system boundary that draws round what is weighed;
// - Wisps: solid slate gas wisps that cross a boundary (out or in) with small arrows;
// - Ball and Mol: atoms in element colours with an ink outline, molecules as touching atoms with stick bonds;
// - EqLine: an equation with amber coefficient slots (the dial steps) and locked ink subscripts;
// - Tally: one live row per element ("left | right"), teal when equal, rose when not;
// - Lens: the magnifier with a dense field of magnesium atoms.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {INK, Rich, Sx, clamp01, lerp, prog, richW, smooth} from '../chem-y11-m1-v07/parts';
import {CRU_N} from './common';
import type {Eq, Formula, PDef} from './common';

export * from '../chem-y11-m1-v07/parts';

export const TEAL_C = '#12827b', AMB_C = '#d18f1f', AMB_CT = '#9c5a00', ROSE_C = '#b8325f', RED_C = '#c4362f', GREEN_C = '#2f8a5b', NAVY_C = '#24407a', SLATE_C = '#4f5862';
export const PAPER = '#fffdf8';
export const ATOM: Record<string, string> = {H: '#ffffff', O: '#d8483b', Mg: '#a9d39a', Cu: '#b0643a', C: '#3b3a38', Al: '#b8bec6', Ca: '#e8e2d0'};

// ---------- the system boundary ----------
export const Boundary: React.FC<{x: number; y: number; w: number; h: number; at: number; out?: number; o?: number; dur?: number}> = ({x, y, w, h, at, out, o = 1, dur = 24}) => {
	const f = useCurrentFrame();
	const p = smooth(prog(f, at, dur));
	const v = (out === undefined ? 1 : 1 - prog(f, out, 12)) * o;
	if (p <= 0.005 || v <= 0.005) return null;
	const per = 2 * (w + h);
	return <rect x={x} y={y} width={w} height={h} rx={26} fill="none" stroke={TEAL_C} strokeWidth={6} strokeDasharray={`18 12`} opacity={v} style={{clipPath: `inset(0 ${100 - p * 100}% 0 0)`}} pathLength={per} />;
};

// ---------- gas wisps ----------
/** Solid slate wisps flowing from a to b (repeating), each with a small arrowhead. */
export const Wisps: React.FC<{a: [number, number]; b: [number, number]; at: number; out?: number; n?: number; spread?: number; color?: string; speed?: number}> = ({a, b, at, out, n = 4, spread = 60, color = SLATE_C, speed = 70}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * (out === undefined ? 1 : 1 - prog(f, out, 12));
	if (v <= 0.005) return null;
	const L = Math.hypot(b[0] - a[0], b[1] - a[1]), ux = (b[0] - a[0]) / L, uy = (b[1] - a[1]) / L, nx = -uy, ny = ux;
	return (
		<g opacity={v}>
			{Array.from({length: n}, (_, i) => {
				const off = (i - (n - 1) / 2) * (spread / Math.max(1, n - 1)) * 2;
				const t = (((f - at) / speed + i / n) % 1 + 1) % 1;
				const len = 0.38;
				const t0 = Math.max(0, t - len), t1 = t;
				const pts: string[] = [];
				for (let k = 0; k <= 12; k++) {
					const s = lerp(t0, t1, k / 12);
					const w = Math.sin(s * 14 + i) * 10;
					pts.push(`${(a[0] + ux * L * s + nx * (off + w)).toFixed(1)},${(a[1] + uy * L * s + ny * (off + w)).toFixed(1)}`);
				}
				const o = Math.sin(Math.PI * t);
				const tip = pts[pts.length - 1].split(',').map(Number), pre = pts[pts.length - 3].split(',').map(Number);
				const ang = Math.atan2(tip[1] - pre[1], tip[0] - pre[0]);
				return (
					<g key={i} opacity={o}>
						<polyline points={pts.join(' ')} fill="none" stroke={color} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
						<path d={`M${tip[0] - 14 * Math.cos(ang - 0.5)},${tip[1] - 14 * Math.sin(ang - 0.5)} L${tip[0]},${tip[1]} L${tip[0] - 14 * Math.cos(ang + 0.5)},${tip[1] - 14 * Math.sin(ang + 0.5)}`} fill="none" stroke={color} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
					</g>
				);
			})}
		</g>
	);
};

// ---------- crucible plate geometry ----------
/** Screen point of a native crucible-set point for a crucible plate drawn with its box at (x, y) and height h. */
export const cruPt = (p: PDef, x: number, y: number, h: number, u: number, v: number): [number, number] => {
	const k = h / p.box[3];
	return [x + (u - p.box[0]) * k, y + (v - p.box[1]) * k];
};
/** The bowl's screen box for a crucible plate drawn at (x, y, h), padded. */
export const bowlBox = (p: PDef, x: number, y: number, h: number, pad = 22) => {
	const [x0, y0] = cruPt(p, x, y, h, CRU_N.bowl[0], CRU_N.bowl[1]);
	const [x1, y1] = cruPt(p, x, y, h, CRU_N.bowl[2], CRU_N.bowl[3]);
	return {x: x0 - pad, y: y0 - pad, w: x1 - x0 + 2 * pad, h: y1 - y0 + 2 * pad};
};

// ---------- atoms and molecules ----------
export const Ball: React.FC<{el: string; x: number; y: number; r: number; o?: number; label?: string}> = ({el, x, y, r, o = 1, label}) => (o <= 0.005 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill={ATOM[el] ?? '#ddd'} stroke={INK} strokeWidth={Math.max(2, r * 0.09)} />
		<Sx x={x} y={y + r * 0.34} text={label ?? el} size={Math.round(r * 0.95)} color={['O', 'C', 'Cu'].includes(el) ? '#ffffff' : INK} anchor="middle" weight={800} at={-1000} />
	</g>
));
export type AtomP = {el: string; x: number; y: number; label?: string};
/** A molecule: atoms at offsets from (x, y) and stick bonds between listed pairs. */
export const Mol: React.FC<{x: number; y: number; atoms: AtomP[]; bonds?: [number, number][]; r?: number; o?: number; bondO?: number}> = ({x, y, atoms, bonds = [], r = 30, o = 1, bondO = 1}) => (o <= 0.005 ? null : (
	<g opacity={o}>
		{bondO > 0.005 ? bonds.map(([i, j], k) => <line key={k} x1={x + atoms[i].x} y1={y + atoms[i].y} x2={x + atoms[j].x} y2={y + atoms[j].y} stroke={INK} strokeWidth={r * 0.32} strokeLinecap="round" opacity={bondO} />) : null}
		{atoms.map((a, i) => <Ball key={i} el={a.el} x={x + a.x} y={y + a.y} r={r} label={a.label} />)}
	</g>
));
/** Tile model of one particle of a formula (atoms in a row, touching). */
export const tileAtoms = (f: Formula, r: number): AtomP[] => {
	const out: AtomP[] = [];
	const order = Object.entries(f.atoms);
	let i = 0;
	const n = order.reduce((s, [, k]) => s + k, 0);
	for (const [el, k] of order) for (let j = 0; j < k; j++) { out.push({el, x: (i - (n - 1) / 2) * r * 1.7, y: 0}); i++; }
	return out;
};
export const Tile: React.FC<{f: Formula; x: number; y: number; r?: number; o?: number}> = ({f, x, y, r = 18, o = 1}) => {
	const a = tileAtoms(f, r);
	return <Mol x={x} y={y} atoms={a} bonds={a.slice(1).map((_, i) => [i, i + 1] as [number, number])} r={r} o={o} />;
};

// ---------- equations with coefficient slots ----------
export type Term = {f: Formula; c: number; slot?: number; state?: boolean; ring?: boolean};
const op = (s: string) => ({t: s});
/** Layout of an equation: x of each term's coefficient slot and formula, and the total width. */
export const eqLayout = (terms: Term[], nl: number, size: number, compact = false) => {
	const slotW = size * 0.78, gap = size * 0.5;
	const xs: {sx: number; fx: number; fw: number; sw: number}[] = [];
	let x = 0;
	terms.forEach((t, i) => {
		if (i > 0) x += richW([op(i === nl ? '→' : '+')], size) + gap * 2;
		const sx = x;
		const sw = compact ? (t.c > 1 ? richW([{t: `${t.c}`}], size) : 0) : slotW;
		x += sw + (sw ? size * 0.08 : 0);
		const ft = t.f.t + (t.state && t.f.state ? `(${t.f.state})` : '');
		const fw = richW([{t: ft}], size);
		xs.push({sx, fx: x, fw, sw});
		x += fw;
	});
	return {xs, w: x, slotW, gap};
};
/** The equation. x is the centre; coefficients of 1 show as an amber dial "1" while slots are on, blank otherwise. */
export const EqLine: React.FC<{x: number; y: number; terms: Term[]; nl: number; size?: number; slots?: number; o?: number; color?: string; anchor?: 'middle' | 'start'}> = ({x, y, terms, nl, size = 72, slots = 0, o = 1, color = INK, anchor = 'middle'}) => {
	const f = useCurrentFrame();
	if (o <= 0.005) return null;
	const L = eqLayout(terms, nl, size, slots <= 0.005);
	const x0 = anchor === 'middle' ? x - L.w / 2 : x;
	return (
		<g opacity={o}>
			{terms.map((t, i) => {
				const {sx, fx} = L.xs[i];
				const showSlot = slots > 0.005;
				const pop = t.slot !== undefined ? 1 + 0.25 * Math.sin(Math.PI * clamp01((f - t.slot) / 10)) * (f >= t.slot ? 1 : 0) : 1;
				const cx = x0 + sx + L.xs[i].sw / 2, cy = y - size * 0.33;
				const ft = t.f.t + (t.state && t.f.state ? `(${t.f.state})` : '');
				return (
					<g key={i}>
						{i > 0 ? <Sx x={x0 + sx - L.gap - richW([op(i === nl ? '→' : '+')], size) / 2} y={y} text={i === nl ? '→' : '+'} size={size} color={color} anchor="middle" weight={800} at={-1000} /> : null}
						{showSlot ? <rect x={x0 + sx} y={y - size * 0.95} width={L.slotW} height={size * 1.15} rx={10} fill="#fff6e6" stroke={AMB_C} strokeWidth={4} strokeDasharray="10 7" opacity={slots} /> : null}
						{showSlot || t.c > 1 ? (
							<g transform={`translate(${cx},${cy}) scale(${pop}) translate(${-cx},${-cy})`}>
								<Sx x={cx} y={y} text={`${t.c}`} size={size} color={AMB_CT} anchor="middle" weight={800} at={-1000} opacity={t.c > 1 ? 1 : showSlot ? slots : 0} />
							</g>
						) : null}
						<Rich x={x0 + fx} y={y} segs={[{t: ft, c: color}]} size={size} weight={800} />
					</g>
				);
			})}
		</g>
	);
};
/** Screen centre of a term's formula in an EqLine. */
export const termX = (terms: Term[], nl: number, size: number, x: number, i: number, anchor: 'middle' | 'start' = 'middle', compact = false) => {
	const L = eqLayout(terms, nl, size, compact);
	const x0 = anchor === 'middle' ? x - L.w / 2 : x;
	return {slot: x0 + L.xs[i].sx + L.xs[i].sw / 2, f: x0 + L.xs[i].fx + L.xs[i].fw / 2, fx: x0 + L.xs[i].fx, fw: L.xs[i].fw, w: L.w, x0};
};
export const terms = (e: Eq, c: number[], slotAt: (number | undefined)[] = [], state = false): Term[] => [...e.l, ...e.r].map((f, i) => ({f, c: c[i], slot: slotAt[i], state}));

// ---------- the tally ----------
export type TRow = {el: string; l: number; r: number; at?: number};
export const Tally: React.FC<{x: number; y: number; rows: TRow[]; size?: number; o?: number; w?: number}> = ({x, y, rows, size = 52, o = 1, w = 470}) => {
	const f = useCurrentFrame();
	if (o <= 0.005) return null;
	const rh = size * 1.45;
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={rh * (rows.length + 1) + 16} rx={18} fill={PAPER} stroke={INK} strokeWidth={4} />
			<Sx x={x + w * 0.5} y={y + rh * 0.72} text="left" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={x + w * 0.8} y={y + rh * 0.72} text="right" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			{rows.map((r, i) => {
				const v = r.at === undefined ? 1 : prog(f, r.at, 10);
				const eq = r.l === r.r;
				const c = eq ? TEAL_C : ROSE_C;
				const yy = y + rh * (i + 1.75);
				return (
					<g key={r.el}>
						{v > 0.005 ? <rect x={x + 10} y={yy - size * 0.95} width={w - 20} height={size * 1.3} rx={12} fill={eq ? '#dff2ef' : '#f8e1e8'} opacity={v} /> : null}
						<Sx x={x + 30} y={yy} text={r.el} size={size} color={INK} weight={800} at={-1000} />
						<Sx x={x + w * 0.5} y={yy} text={v > 0.5 ? `${r.l}` : '–'} size={size} color={v > 0.5 ? c : INK} anchor="middle" weight={800} at={-1000} />
						<Sx x={x + w * 0.65} y={yy} text="|" size={size} color={INK} anchor="middle" weight={800} at={-1000} />
						<Sx x={x + w * 0.8} y={yy} text={v > 0.5 ? `${r.r}` : '–'} size={size} color={v > 0.5 ? c : INK} anchor="middle" weight={800} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- the magnifier ----------
export const Lens: React.FC<{cx: number; cy: number; r: number; at: number; from?: [number, number]}> = ({cx, cy, r, at, from}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14);
	if (v <= 0.005) return null;
	const fill = clamp01((f - at) / 30);
	const dots: React.ReactNode[] = [];
	const s = 15;
	for (let yy = -r; yy <= r; yy += s) for (let xx = -r; xx <= r; xx += s * 1.02) {
		const off = (Math.round((yy + r) / s) % 2) * s * 0.5;
		const X = xx + off, Y = yy;
		if (X * X + Y * Y > (r - 10) * (r - 10)) continue;
		const d = Math.hypot(X, Y) / r;
		if (d > fill) continue;
		dots.push(<circle key={`${xx}-${yy}`} cx={cx + X} cy={cy + Y} r={6.4} fill={ATOM.Mg} stroke="#5f8a52" strokeWidth={1.4} />);
	}
	return (
		<g opacity={v}>
			{from ? <>
				<line x1={from[0]} y1={from[1] - 20} x2={cx - r * 0.7} y2={cy - r * 0.7} stroke={INK} strokeWidth={3} strokeDasharray="8 8" />
				<line x1={from[0]} y1={from[1] + 20} x2={cx - r * 0.7} y2={cy + r * 0.7} stroke={INK} strokeWidth={3} strokeDasharray="8 8" />
			</> : null}
			<circle cx={cx} cy={cy} r={r} fill={PAPER} stroke={INK} strokeWidth={6} />
			{dots}
			<circle cx={cx} cy={cy} r={r} fill="none" stroke={INK} strokeWidth={6} />
		</g>
	);
};
