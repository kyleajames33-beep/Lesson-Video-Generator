// M7 C04b board pieces on top of the C01 molecule kit and C04a's parts (equation strip, Mol2D docking, conditions card,
// bond opener, morphing ball-and-stick are imported, not copied). New here:
// - withSwap: a structure with an extra atom sitting in the same place as one of its H atoms (the swap docker: the H
//   lifts away, the halogen docks into the empty place).
// - FreeAtom: one atom letter that travels between keyed points (the swapped-out H drifting to join the other Br).
// - UVWaves / UVGlow: violet wave strokes running from a source to a target (energy arriving, optionally absorbed),
//   and the soft violet glow at the arrow.
// - AidCards: the three "swap, add, add twice" cards of the memory aid.
// - CARD5: the C04a conditions card plus the alkane substitution row.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {INK, INK_SOFT, Sx, mw, smooth} from '../chem-m6-c01/parts';
import {CARDC, VIOLET, lerpV} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {CARD_ROWS, CT, elCol, vis} from '../chem-m7-c04a/parts';
import type {El, SMol} from '../chem-m7-c04a/parts';

export const UV = VIOLET, UV_SOFT = '#ece4f7';
export const CARD5 = [...CARD_ROWS, 'alkane + X_2: UV light → haloalkane + HX'];

/** Copy of m with a new atom `el` placed exactly where atom key sits (bonded to the same carbon). Returns the index. */
export const withSwap = (m: SMol, key: string, el: El): {m: SMol; i: number; h: number} => {
	const h = m.k[key];
	const b = m.bonds.find(q => q.a === h || q.b === h);
	if (!b) throw new Error('withSwap: no bond for ' + key);
	const c = b.a === h ? b.b : b.a;
	const atoms = [...m.atoms, {el, p: m.atoms[h].p, nw: true}];
	return {m: {...m, atoms, bonds: [...m.bonds, {a: c, b: atoms.length - 1}]}, i: atoms.length - 1, h};
};

export type FKey = {at: number; p: V2; dur?: number};
/** One atom letter moving between absolute keyed points; visible between at and out; optional glow. */
export const FreeAtom: React.FC<{el: El; keys: FKey[]; at: number; out?: number; size?: number; glow?: boolean; color?: string}> = ({el, keys, at, out, size = 40, glow = false, color}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 8);
	if (v <= 0.01) return null;
	let p = keys[0].p;
	for (let i = 1; i < keys.length; i++) { const t = smooth(prog(f, keys[i].at, keys[i].dur ?? 24)); if (t <= 0) break; p = lerpV(p, keys[i].p, t); }
	const sz = el === 'H' ? size * 0.82 : size;
	return (
		<g opacity={v}>
			{glow ? <circle cx={p[0]} cy={p[1]} r={size * 0.8} fill="#f1efea" stroke={INK_SOFT} strokeWidth={2.5} /> : null}
			<Sx x={p[0]} y={p[1] + sz * 0.36} text={el} size={sz} color={color ?? (el === 'H' ? '#6f6a63' : elCol(el))} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};

/** Three violet wave strokes running from a to b (from `at`); absorb: they shrink and fade as they arrive. */
export const UVWaves: React.FC<{a: V2; b: V2; at: number; out?: number; o?: number; absorb?: boolean; n?: number}> = ({a, b, at, out, o = 1, absorb = false, n = 3}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
	const ang = (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180) / Math.PI;
	return (
		<g opacity={v} transform={`translate(${a[0]},${a[1]}) rotate(${ang})`}>
			{Array.from({length: n}, (_, k) => {
				const ph = (((f - at) * 6 + k * (L / n)) % L) / L;
				const x = ph * L;
				const fade = absorb ? 1 - ph : Math.min(1, ph * 4) * (1 - Math.max(0, ph - 0.85) / 0.15);
				const wl = 70 * (absorb ? 1 - ph * 0.6 : 1);
				let d = `M${x - wl},0`;
				for (let j = 0; j <= 12; j++) { const xx = x - wl + (j / 12) * wl; d += ` L${xx},${Math.sin((j / 12) * Math.PI * 3) * 9}`; }
				return <path key={k} d={d} fill="none" stroke={UV} strokeWidth={4} strokeLinecap="round" opacity={Math.max(0, fade)} />;
			})}
		</g>
	);
};
/** Soft violet glow ellipse (UV energy at the arrow); pulse at a frame. */
export const UVGlow: React.FC<{x: number; y: number; rx?: number; ry?: number; at: number; out?: number; pulse?: number; o?: number}> = ({x, y, rx = 110, ry = 50, at, out, pulse, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const pl = pulse === undefined ? 0 : Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - pulse) / 30)) * Math.PI));
	return <ellipse cx={x} cy={y} rx={rx * (1 + 0.15 * pl)} ry={ry * (1 + 0.15 * pl)} fill={UV} opacity={(0.1 + 0.18 * pl) * v} />;
};

/** The memory aid's three cards; lit[i] lights card i (dim before). */
const AIDS: {head: string; c: string; lines: string[]}[] = [
	{head: 'Alkanes swap', c: UV, lines: ['alkane + X_2, UV light', '→ haloalkane + HX', '(2 products)']},
	{head: 'Alkenes add', c: '#0d6b52', lines: ['alkene + H_2, X_2, HX, H_2O', '→ 1 product']},
	{head: 'Alkynes add twice', c: '#24407a', lines: ['alkyne + 2 of the reagent', '→ 1 product (2 steps)']},
];
export const AidCards: React.FC<{lit: number[]; x?: number; y?: number; w?: number; gap?: number; size?: number; o?: number}> = ({lit, x = 96, y = 290, w = 548, gap = 36, size = 32, o = 1}) => {
	const f = useCurrentFrame();
	const h = size * 1.6 + 3 * size * 1.35 + 20;
	return (
		<g opacity={o}>
			{AIDS.map((a, i) => {
				const v = prog(f, lit[i] - 30, 12);
				if (v <= 0.01) return null;
				const lt = prog(f, lit[i], 12);
				const X = x + i * (w + gap);
				return (
					<g key={i} opacity={v * (0.4 + 0.6 * lt)}>
						<rect x={X} y={y} width={w} height={h} rx={18} fill={CARDC} stroke={a.c} strokeWidth={3 + 2 * lt} />
						<Sx x={X + 24} y={y + size * 1.3} text={a.head} size={size * 1.15} color={a.c} hand weight={700} at={-1000} />
						{a.lines.map((t, j) => <CT key={j} x={X + 24} y={y + size * 1.4 + (j + 1) * size * 1.35} text={t} size={size * 0.9} color={INK} weight={600} plain />)}
					</g>
				);
			})}
		</g>
	);
};
export {INK, INK_SOFT, mw};
