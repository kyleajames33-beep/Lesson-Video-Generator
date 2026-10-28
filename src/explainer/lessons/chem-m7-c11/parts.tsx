// M7 C11 board pieces on the C01 molecule kit, C04a's Mol2D, C05's skeletal alcohols and the C09 parts (charge
// share, proton hop). README for Claude (C12 and later lessons may import these):
// - fm(): a full structural formula from named atoms ([name, el, x, y]) and bonds; NMol draws one with N in indigo.
// - ETA_F (ethanamine), AMD_F (ethanamide), NH3_F (ammonia), with keys for the N, its H atoms and the C=O.
// - SkN: a skeletal drawer whose labels carry their own colour and an optional H above or below (N inside a chain).
//   amineOf(alc(...)) swaps an alcohol's OH label for NH₂; amideOf(acidK(...)) swaps the acid OH for NH₂.
// - LP: an indigo lone pair (two dots) beside a point, in a direction. NCount: indigo ring on N, amber numbered dots on
//   the carbons bonded to it (the carbon-group counter for classifying amines).
// - Lens15: 15 small icons (14 whole amine molecules, 1 ion pair) for "most stay unchanged".
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {INK, INK_SOFT, Sx, mw} from '../chem-m6-c01/parts';
import {PROTON, PROTON_INK} from '../chem-m6-c01/parts';
import {CARDC, NAVY, OXY_INK, Skel} from '../chem-m7-c01/molecules';
import {AMBER, AMBER_INK} from '../chem-m6-c01/parts';
import type {Bond, V2} from '../chem-m7-c01/molecules';
import {Mol2D, vis} from '../chem-m7-c04a/parts';
import type {El, SMol} from '../chem-m7-c04a/parts';
import type {Carb} from '../chem-m7-c08a/parts';
import {RED} from '../chem-m7-c08a/parts';
import {CHG, CHG_SOFT, GREY} from '../chem-m7-c09/parts';

export const INDIGO = '#3f4aa8', INDIGO_SOFT = '#e2e5f7', OH_ANION = '#7a5bb5';
export {AMBER, AMBER_INK, CHG, CHG_SOFT, GREY, INK, INK_SOFT, NAVY, RED};

// ---------- full structural formulas ----------
type A = [string, string, number, number];
export const fm = (atoms: A[], bonds: [string, string, number?][]): SMol => {
	const k: Record<string, number> = {};
	atoms.forEach((a, i) => { k[a[0]] = i; });
	return {atoms: atoms.map(a => ({el: a[1] as El, p: [a[2], a[3]] as V2})), bonds: bonds.map(([a, b, o]) => ({a: k[a], b: k[b], order: (o ?? 1) as 1 | 2, color: o === 2 ? RED : undefined})), C: atoms.map((a, i) => (a[1] === 'C' ? i : -1)).filter(i => i >= 0), k};
};
const S = 130, L = 76;
export const ETA_F = fm([['c0', 'C', -S, 0], ['c1', 'C', 0, 0], ['n', 'N', S, 0], ['h0l', 'H', -S - L, 0], ['h0u', 'H', -S, -L], ['h0d', 'H', -S, L], ['h1u', 'H', 0, -L], ['h1d', 'H', 0, L], ['hnu', 'H', S, -L], ['hnd', 'H', S, L]], [['c0', 'c1'], ['c1', 'n'], ['c0', 'h0l'], ['c0', 'h0u'], ['c0', 'h0d'], ['c1', 'h1u'], ['c1', 'h1d'], ['n', 'hnu'], ['n', 'hnd']]);
export const AMD_F = fm([['c0', 'C', -S, 0], ['c1', 'C', 0, 0], ['n', 'N', S, 0], ['h0l', 'H', -S - L, 0], ['h0u', 'H', -S, -L], ['h0d', 'H', -S, L], ['o', 'O', 0, -L], ['hnu', 'H', S, -L], ['hnd', 'H', S, L]], [['c0', 'c1'], ['c1', 'n'], ['c0', 'h0l'], ['c0', 'h0u'], ['c0', 'h0d'], ['c1', 'o', 2], ['n', 'hnu'], ['n', 'hnd']]);
export const NH3_F = fm([['n', 'N', 0, 0], ['h1', 'H', -L, 0], ['hu', 'H', 0, -L], ['hd', 'H', 0, L]], [['n', 'h1'], ['n', 'hu'], ['n', 'hd']]);
export const NMol: React.FC<React.ComponentProps<typeof Mol2D>> = p => {
	const col: Record<number, string> = {...(p.col ?? {})};
	p.m.atoms.forEach((a, i) => { if ((a.el as string) === 'N') col[i] = INDIGO; });
	return <Mol2D {...p} col={col} />;
};

// ---------- skeletal with coloured labels ----------
export type NLabel = {i: number; text: string; color?: string; h?: 'u' | 'd'};
export type MolN = {pts: V2[]; bonds: Bond[]; labels: NLabel[]};
export const SkN: React.FC<{m: MolN; x: number; y: number; s?: number; at: number; out?: number; o?: number; ink?: boolean}> = ({m, x, y, s = 1, at, out, o = 1, ink = false}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const P = m.pts.map(p => [x + p[0] * s, y + p[1] * s] as V2);
	const ls = 40 * Math.max(0.7, s);
	const bonds = ink ? m.bonds.map(b => ({...b, color: undefined})) : m.bonds;
	return (
		<g opacity={v}>
			<Skel pts={P} bonds={bonds} at={at} stagger={4} width={6} />
			{m.labels.map((l, k) => {
				const p = P[l.i];
				const w0 = mw(l.text[0], ls, false, 800), w = mw(l.text, ls, false, 800);
				const c = ink ? INK : l.color ?? OXY_INK;
				const hy = l.h === 'u' ? -ls * 0.95 : ls * 1.0;
				return (
					<g key={k} opacity={prog(f, at + m.bonds.length * 4, 10)}>
						<rect x={p[0] - w0 / 2 - 6} y={p[1] - ls * 0.6} width={w + 12} height={ls * 1.2} rx={ls * 0.4} fill={CARDC} />
						<Sx x={p[0] - w0 / 2} y={p[1] + ls * 0.36} text={l.text} size={ls} color={c} weight={800} at={-1000} />
						{l.h ? <><line x1={p[0]} y1={p[1] + (l.h === 'u' ? -ls * 0.5 : ls * 0.5)} x2={p[0]} y2={p[1] + hy * 0.62} stroke={INK} strokeWidth={4} /><Sx x={p[0]} y={p[1] + hy + ls * 0.3} text="H" size={ls * 0.9} color={ink ? INK : '#9a948a'} anchor="middle" weight={800} at={-1000} /></> : null}
					</g>
				);
			})}
		</g>
	);
};
export const amineOf = (a: {m: {pts: V2[]; bonds: Bond[]}; o: number}): MolN & {n: number} => ({pts: a.m.pts, bonds: a.m.bonds, labels: [{i: a.o, text: 'NH₂', color: INDIGO}], n: a.o});
export const amideOf = (k: Carb): MolN & {n: number; o: number; c: number} => ({pts: k.m.pts, bonds: k.m.bonds, labels: [{i: k.o, text: 'O'}, {i: k.oh as number, text: 'NH₂', color: INDIGO}], n: k.oh as number, o: k.o, c: k.c});
/** A zigzag of n points with N at index ni (label N + H unless hOnN is false) and extra carbons on N in `extra` directions. */
export const chainN = (n: number, ni: number, extra: V2[] = [], hOnN = true, dx = 100, dy = 58): MolN & {n: number} => {
	const pts: V2[] = Array.from({length: n}, (_, i) => [(-(n - 1) * dx) / 2 + i * dx, i % 2 ? -dy / 2 : dy / 2]);
	const bonds: Bond[] = Array.from({length: n - 1}, (_, i) => ({a: i, b: i + 1}));
	extra.forEach(d => { pts.push([pts[ni][0] + d[0] * dx, pts[ni][1] + d[1] * dx]); bonds.push({a: ni, b: pts.length - 1}); });
	const up = ni % 2 === 1;
	return {pts, bonds, labels: [{i: ni, text: 'N', color: INDIGO, h: hOnN ? (up ? 'u' : 'd') : undefined}], n: ni};
};
export const TMA: MolN & {n: number} = {pts: [[0, 0], [0, -100], [87, 50], [-87, 50]], bonds: [{a: 0, b: 1}, {a: 0, b: 2}, {a: 0, b: 3}], labels: [{i: 0, text: 'N', color: INDIGO}], n: 0};
export const nbrPts = (m: MolN, i: number, x: number, y: number, s: number): V2[] => m.bonds.filter(b => b.a === i || b.b === i).map(b => { const j = b.a === i ? b.b : b.a; return [x + m.pts[j][0] * s, y + m.pts[j][1] * s] as V2; });

// ---------- lone pair ----------
export const LP: React.FC<{p: V2; at: number; out?: number; o?: number; dir?: number; r?: number; pulse?: number}> = ({p, at, out, o = 1, dir = 0, r = 34, pulse}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const pl = pulse === undefined ? 1 : 1 + 0.5 * Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - pulse) / 30)) * Math.PI));
	const c: V2 = [p[0] + Math.cos(dir) * r, p[1] + Math.sin(dir) * r];
	const t: V2 = [-Math.sin(dir) * 8, Math.cos(dir) * 8];
	return <g opacity={v}><circle cx={c[0] + t[0]} cy={c[1] + t[1]} r={6 * pl} fill={INDIGO} /><circle cx={c[0] - t[0]} cy={c[1] - t[1]} r={6 * pl} fill={INDIGO} /></g>;
};

// ---------- carbon-group counter on N ----------
export const NCount: React.FC<{n: V2; nb: V2[]; at: number; out?: number; o?: number}> = ({n, nb, at, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at - 8, out) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<circle cx={n[0]} cy={n[1]} r={32} fill="none" stroke={INDIGO} strokeWidth={4} />
			{nb.map((p, i) => {
				const q = prog(f, at + i * 12, 8);
				if (q <= 0.01) return null;
				return <g key={i} opacity={q}><circle cx={p[0]} cy={p[1]} r={20} fill="#fff3d6" stroke={AMBER_INK} strokeWidth={3} /><Sx x={p[0]} y={p[1] + 9} text={String(i + 1)} size={24} color={AMBER_INK} anchor="middle" weight={800} at={-1000} /></g>;
			})}
		</g>
	);
};

// ---------- 15-icon lens ----------
export const Lens15: React.FC<{x: number; y: number; at: number; o?: number}> = ({x, y, at, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const c = 46;
	return (
		<g opacity={v}>
			<rect x={x - 16} y={y - 16} width={5 * c + 32} height={3 * c + 32} rx={20} fill={CARDC} stroke={INK_SOFT} strokeWidth={3} />
			{Array.from({length: 15}, (_, i) => {
				const cx = x + (i % 5) * c + c / 2, cy = y + Math.floor(i / 5) * c + c / 2;
				const q = prog(f, at + 4 + i, 6);
				if (i === 7) return <g key={i} opacity={prog(f, at + 22, 8)}><circle cx={cx - 8} cy={cy} r={10} fill={INDIGO_SOFT} stroke={INDIGO} strokeWidth={2.5} /><circle cx={cx + 9} cy={cy - 8} r={7} fill={PROTON} stroke={PROTON_INK} strokeWidth={2} /></g>;
				return <circle key={i} cx={cx} cy={cy} r={11} fill="#ece8e0" stroke={GREY} strokeWidth={2} opacity={q} />;
			})}
		</g>
	);
};
