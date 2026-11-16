// C8-11b coded parts (proton NMR). Builds on c11a's NmrSpec (proton mode: multiplets with Pascal heights, line spacing
// exaggerated for reading and carrying no ppm claim). New here (c12 may import them):
// - fullRow: a straight-row full structural formula (every H drawn) from a heavy-atom list, through the M7 kit
//   FullMol, returning the H indices of each heavy atom so equivalent hydrogens can be ringed together (HRing).
// - Integ: the integration line that steps up at each signal (right to left), step heights in the stated ratio, with
//   number tags.
// - SignalArea: a shaded area under a multiplet (area, not height).
// Nothing here draws people.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FullMol} from '../chem-m7-c01/molecules';
import type {FAtom, FBond} from '../chem-m7-c01/molecules';
import {INK, Sx, dx, prog, smooth, vis} from '../chem-m8-c11a/parts';
import type {NG, V2} from '../chem-m8-c11a/parts';

export * from '../chem-m8-c11a/parts';
export {FullMol};

// ---------- full structures ----------
export type Heavy = {el: 'C' | 'O' | 'Br'; h?: number; dblO?: boolean; hOut?: boolean};
export type FullRow = {atoms: FAtom[]; bonds: FBond[]; hs: number[][]; heavy: V2[]; dblO: Record<number, number>};
/** Heavy atoms in a row from (x, y), spacing sp; H above and below (and outward at the ends); =O hangs below. */
export const fullRow = (list: Heavy[], x: number, y: number, sp = 120): FullRow => {
	const atoms: FAtom[] = [], bonds: FBond[] = [], hs: number[][] = [], heavy: V2[] = [];
	const dblO: Record<number, number> = {};
	list.forEach((a, i) => { heavy.push([x + i * sp, y]); atoms.push({el: a.el === 'Br' ? 'O' : a.el, label: a.el === 'Br' ? 'Br' : undefined, color: a.el === 'Br' ? '#8a4a1f' : undefined, p: [x + i * sp, y], at: -1000}); });
	for (let i = 1; i < list.length; i++) bonds.push({a: i - 1, b: i});
	list.forEach((a, i) => {
		const mine: number[] = [];
		const n = a.h ?? 0;
		const [cx, cy] = heavy[i];
		const spots: V2[] = [];
		const end = i === 0 ? -1 : i === list.length - 1 ? 1 : 0;
		if (a.el === 'O') { if (n) spots.push([cx + (end || 1) * 76, cy]); }
		else {
			if (n >= 1) spots.push([cx, cy - 76]);
			if (n >= 2) spots.push([cx, cy + 76]);
			if (n >= 3) spots.push([cx + (end || -1) * 76, cy]);
		}
		spots.forEach(p => { atoms.push({el: 'H', p, at: -1000}); mine.push(atoms.length - 1); bonds.push({a: i, b: atoms.length - 1}); });
		if (a.dblO) { atoms.push({el: 'O', p: [cx, cy + 92], at: -1000}); bonds.push({a: i, b: atoms.length - 1, order: 2}); dblO[i] = atoms.length - 1; }
		hs.push(mine);
	});
	return {atoms, bonds, hs, heavy, dblO};
};
/** Rings a set of atoms (by index in a FullRow) in one colour from a frame; optional pulse. */
export const HRing: React.FC<{row: FullRow; idx: number[]; at: number; color: string; out?: number; r?: number; pulseAt?: number}> = ({row, idx, at, color, out, r = 24, pulseAt}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const pu = pulseAt === undefined ? 0 : Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - pulseAt) / 30)) * Math.PI));
	return <g opacity={v}>{idx.map(i => <circle key={i} cx={row.atoms[i].p[0]} cy={row.atoms[i].p[1]} r={r + 8 * pu} fill={color} fillOpacity={0.25} stroke={color} strokeWidth={4} />)}</g>;
};
export const Full: React.FC<{row: FullRow; at?: number; o?: number; size?: number}> = ({row, at = -1000, o = 1, size = 40}) => <FullMol atoms={row.atoms} bonds={row.bonds} at={at} o={o} size={size} />;

// ---------- integration ----------
export type Step = {d: number; n: number; color: string; at?: number; w?: number; tx?: number};
/** The integration line over a spectrum: flat, then a smooth step up at each signal (right to left). unit = px per H. */
export const Integ: React.FC<{g: NG; steps: Step[]; at: number; unit?: number; base?: number; dur?: number; tags?: boolean; o?: number}> = ({g, steps, at, unit = 30, base, dur = 50, tags = true, o = 1}) => {
	const f = useCurrentFrame();
	const k = smooth(prog(f, at, dur));
	if (k <= 0.001 || o <= 0.01) return null;
	const y0 = base ?? g.y + g.h - 20;
	const sorted = [...steps].sort((a, b) => a.d - b.d);
	const xr = g.x + g.w, xl = g.x;
	const xCut = xr - (xr - xl) * k;
	let d = '';
	for (let x = xr; x >= xCut; x -= 4) {
		let lift = 0;
		for (const s of sorted) { const xs = dx(g, s.d); const w = s.w ?? 26; lift += s.n * unit * (1 / (1 + Math.exp(-(x - xs) / -(w / 4)))); }
		d += (d ? 'L' : 'M') + x + ',' + (y0 - lift);
	}
	let acc = 0;
	return (
		<g opacity={o}>
			<path d={d} fill="none" stroke="#5b6576" strokeWidth={3.5} strokeDasharray="0" />
			{tags ? sorted.map((s, i) => {
				const xs = dx(g, s.d);
				const before = acc; acc += s.n;
				const tv = prog(f, s.at ?? at + dur * ((xr - xs) / (xr - xl)), 12);
				if (tv <= 0.01 || xs < xCut) return null;
				return <g key={i} opacity={tv}>
					<line x1={xs + (s.tx ?? 34)} x2={xs + (s.tx ?? 34)} y1={y0 - before * unit} y2={y0 - acc * unit} stroke={s.color} strokeWidth={5} />
					<Sx x={xs + (s.tx ?? 34) + ((s.tx ?? 34) < 0 ? -12 : 12)} anchor={(s.tx ?? 34) < 0 ? 'end' : 'start'} y={y0 - (before + s.n / 2) * unit + 12} text={`${s.n}`} size={36} color={s.color} weight={800} at={-1000} />
				</g>;
			}) : null}
		</g>
	);
};
/** A shaded band under a multiplet (its area). */
export const SignalArea: React.FC<{g: NG; d: number; w: number; h: number; color: string; at: number; out?: number}> = ({g, d, w, h, color, at, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const x0 = dx(g, d + w / 2), x1 = dx(g, d - w / 2);
	return <rect opacity={0.22 * v} x={x0} y={g.y + g.h - g.h * h} width={x1 - x0} height={g.h * h} fill={color} rx={8} />;
};
export {INK};
