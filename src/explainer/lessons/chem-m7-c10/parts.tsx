// M7 C10 board pieces on the C01 molecule kit, C04a's full structural formulas and the C09 parts. README for Claude:
// - esterK(a, b): a skeletal ester (zigzag of a acid-side carbons, the single-bonded O, then b alcohol-side carbons; the
//   C=O in red on the carbonyl carbon). EsterAt draws one with an optional red ring on the ester group and the cut
//   (dashed line through the C–O single bond, acid side tinted amber, alcohol side pale blue).
// - ESTER_F: ethyl ethanoate in full structural form (built by hand: cmol cannot put an O inside the chain).
// - EsterName: the two-slot name builder ("alcohol part (-yl)", "acid part (-oate)").
// - YieldBar: a horizontal bar whose fill moves between keyed fractions, with a grey ghost marker.
// - FlaskIcons: a coded flask with four amount bars (acid, alcohol, ester, water) that change on cue.
// - Box: a flow chart box (two lines). HazCard: a navy card with up to three lines.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {INK, INK_SOFT, Sx, mw, smooth} from '../chem-m6-c01/parts';
import {CARDC, NAVY, outward, zig} from '../chem-m7-c01/molecules';
import type {Bond, V2} from '../chem-m7-c01/molecules';
import {SkelAt} from '../chem-m7-c02/parts';
import type {Mol2} from '../chem-m7-c02/parts';
import {vis} from '../chem-m7-c04a/parts';
import type {SMol} from '../chem-m7-c04a/parts';
import {RingAt} from '../chem-m7-c06/parts';
import {P2, RED} from '../chem-m7-c08a/parts';

export const GREY = '#8a847a', AMB = '#c98a1b', AMB_SOFT = '#fbedd0', BLUE = '#2d6f9e', BLUE_SOFT = '#e3f0fa', WATER = '#4f86ad';

// ---------- skeletal esters ----------
export type Est = {m: Mol2; c: number; o: number; os: number; a: number; b: number};
export const esterK = (a: number, b: number, dx = 100, dy = 58): Est => {
	const N = a + 1 + b;
	const ch = zig(N, (-(N - 1) * dx) / 2, 0, dx, dy);
	const pts: V2[] = [...ch];
	const bonds: Bond[] = Array.from({length: N - 1}, (_, i) => ({a: i, b: i + 1}));
	const ci = a - 1, os = a;
	pts.push(outward(ch, ci, dx * 0.95));
	const o = pts.length - 1;
	bonds.push({a: ci, b: o, order: 2, color: RED});
	return {m: {pts, bonds, labels: [{i: os, text: 'O'}, {i: o, text: 'O'}]}, c: ci, o, os, a, b};
};
const ink = (m: Mol2): Mol2 => ({...m, bonds: m.bonds.map(q => ({...q, color: undefined}))});
/** The two sides' boxes for an ester drawn at (x, y) scale s. */
export const sides = (e: Est, x: number, y: number, s: number) => {
	const P = (i: number) => P2(e.m, x, y, s, i);
	const cut = [(P(e.c)[0] + P(e.os)[0]) / 2, (P(e.c)[1] + P(e.os)[1]) / 2] as V2;
	const acidPts = [...Array.from({length: e.a}, (_, i) => P(i)), P(e.o)];
	const alcPts = Array.from({length: e.b + 1}, (_, i) => P(e.a + i));
	const box = (ps: V2[]) => { const xs = ps.map(p => p[0]), ys = ps.map(p => p[1]); return {x0: Math.min(...xs) - 50 * s, x1: Math.max(...xs) + 50 * s, y0: Math.min(...ys) - 50 * s, y1: Math.max(...ys) + 50 * s}; };
	return {P, cut, acid: box(acidPts), alc: box(alcPts)};
};
export const EsterAt: React.FC<{e: Est; x: number; y: number; s?: number; at: number; out?: number; o?: number; ring?: number; ringOut?: number; cut?: number; acidT?: number; alcT?: number; plain?: boolean}> = ({e, x, y, s = 1, at, out, o = 1, ring, ringOut, cut, acidT, alcT, plain = false}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const S = sides(e, x, y, s);
	const ct = cut === undefined ? 0 : prog(f, cut, 14);
	const c = S.P(e.c), oo = S.P(e.o), os = S.P(e.os);
	const L = Math.hypot(os[0] - c[0], os[1] - c[1]) || 1;
	const nx = -(os[1] - c[1]) / L, ny = (os[0] - c[0]) / L;
	const tint = (b: {x0: number; x1: number; y0: number; y1: number}, col: string, t?: number) => (t === undefined ? null : <rect x={b.x0} y={b.y0} width={b.x1 - b.x0} height={b.y1 - b.y0} rx={30} fill={col} opacity={0.85 * prog(f, t, 12)} />);
	return (
		<g opacity={v}>
			{tint({...S.acid, x1: S.cut[0] - 6}, AMB_SOFT, acidT)}
			{tint({...S.alc, x0: S.cut[0] + 6}, BLUE_SOFT, alcT)}
			<SkelAt m={plain ? ink(e.m) : e.m} x={x} y={y} s={s} at={at} />
			{ring !== undefined ? <RingAt c={[(c[0] + oo[0] + os[0]) / 3 + 6 * s, (c[1] + oo[1] + os[1]) / 3]} rx={100 * s} ry={86 * s} at={ring} out={ringOut} /> : null}
			{ct > 0 ? <line x1={S.cut[0] + nx * 110 * s * ct} y1={S.cut[1] + ny * 110 * s * ct} x2={S.cut[0] - nx * 110 * s * ct} y2={S.cut[1] - ny * 110 * s * ct} stroke={RED} strokeWidth={5} strokeDasharray="12 8" strokeLinecap="round" /> : null}
		</g>
	);
};

// ---------- full structural ethyl ethanoate ----------
const fullEster = (): SMol => {
	const sp = 130, len = 76;
	const atoms: SMol['atoms'] = [];
	const bonds: SMol['bonds'] = [];
	const k: Record<string, number> = {};
	const add = (key: string, el: SMol['atoms'][number]['el'], p: V2) => { k[key] = atoms.length; atoms.push({el, p}); return atoms.length - 1; };
	const c0 = add('c0', 'C', [-2 * sp, 0]), c1 = add('c1', 'C', [-sp, 0]), o2 = add('os', 'O', [0, 0]), c3 = add('c3', 'C', [sp, 0]), c4 = add('c4', 'C', [2 * sp, 0]);
	bonds.push({a: c0, b: c1}, {a: c1, b: o2}, {a: o2, b: c3}, {a: c3, b: c4});
	const h = (key: string, c: number, d: V2) => { const i = add(key, 'H', [atoms[c].p[0] + d[0] * len, atoms[c].p[1] + d[1] * len]); bonds.push({a: c, b: i}); };
	h('0l', c0, [-1, 0]); h('0u', c0, [0, -1]); h('0d', c0, [0, 1]);
	const od = add('od', 'O', [-sp, -len]); bonds.push({a: c1, b: od, order: 2, color: RED});
	h('3u', c3, [0, -1]); h('3d', c3, [0, 1]); h('4u', c4, [0, -1]); h('4d', c4, [0, 1]); h('4r', c4, [1, 0]);
	return {atoms, bonds, C: [c0, c1, c3, c4], k};
};
export const ESTER_F = fullEster();

// ---------- the ester name builder ----------
export const EsterName: React.FC<{x: number; y: number; at: number; out?: number; o?: number; a?: {text: string; at: number}[]; b?: {text: string; at: number}[]; size?: number; w?: [number, number]; glow?: number}> = ({x, y, at, out, o = 1, a = [], b = [], size = 40, w = [260, 360], glow}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const H = size * 1.9, gap = 18;
	const slots = [{x, w: w[0], ink: BLUE, fill: BLUE_SOFT, lab: 'alcohol part (-yl)', fills: a}, {x: x + w[0] + gap, w: w[1], ink: RED, fill: '#f9e1dc', lab: 'acid part (-oate)', fills: b}];
	const g = glow === undefined ? 0 : prog(f, glow, 12);
	return (
		<g opacity={v}>
			{g > 0 ? <rect x={x - 10} y={y - 10} width={w[0] + w[1] + gap + 20} height={H + 20} rx={20} fill="#e3f3e9" stroke="#2f8a5b" strokeWidth={3} opacity={g} /> : null}
			{slots.map((s, i) => (
				<g key={i}>
					<rect x={s.x} y={y} width={s.w} height={H} rx={14} fill={s.fill} stroke={s.ink} strokeWidth={3} />
					<Sx x={s.x + s.w / 2} y={y + H + 30} text={s.lab} size={22} color={s.ink} anchor="middle" weight={700} at={-1000} />
					{s.fills.map((q, k) => {
						const next = s.fills[k + 1];
						const qo = prog(f, q.at, 10) * (next ? 1 - prog(f, next.at, 8) : 1);
						if (qo <= 0.01) return null;
						const drop = (1 - smooth(prog(f, q.at, 12))) * -26;
						return <g key={k} opacity={qo} transform={`translate(0,${drop})`}><Sx x={s.x + s.w / 2} y={y + H / 2 + size * 0.36} text={q.text} size={size} color={s.ink} anchor="middle" weight={800} at={-1000} /></g>;
					})}
				</g>
			))}
		</g>
	);
};

// ---------- yield bar ----------
export const YieldBar: React.FC<{x: number; y: number; w: number; at: number; keys: {at: number; v: number}[]; ghost?: {v: number; at: number; label?: string}; label?: string; o?: number; h?: number; pct?: boolean}> = ({x, y, w, at, keys, ghost, label, o = 1, h = 44, pct = false}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	let val = 0;
	keys.forEach(k => { val += (k.v - val) * smooth(prog(f, k.at, 30)); });
	return (
		<g opacity={v}>
			{label ? <Sx x={x} y={y - 16} text={label} size={24} color={INK_SOFT} weight={700} at={-1000} /> : null}
			<rect x={x} y={y} width={w} height={h} rx={h / 2} fill="#f1efea" stroke={INK_SOFT} strokeWidth={3} />
			{val > 0.005 ? <rect x={x + 3} y={y + 3} width={Math.max(0, (w - 6) * val)} height={h - 6} rx={(h - 6) / 2} fill="#e2b04a" /> : null}
			{ghost ? <g opacity={prog(f, ghost.at, 10)}><line x1={x + w * ghost.v} x2={x + w * ghost.v} y1={y - 10} y2={y + h + 10} stroke={GREY} strokeWidth={4} strokeDasharray="6 6" />{ghost.label ? <Sx x={x + w * ghost.v} y={y + h + 36} text={ghost.label} size={22} color={GREY} anchor="middle" weight={700} at={-1000} /> : null}</g> : null}
			{pct ? <Sx x={x + w + 20} y={y + h * 0.72} text={`${Math.round(val * 100)}%`} size={28} color={INK} weight={800} at={-1000} /> : null}
		</g>
	);
};

// ---------- flask with amount bars ----------
export type Amt = {at: number; v: number[]};
const LABS = ['acid', 'alcohol', 'ester', 'water'];
const COLS = [AMB, BLUE, RED, WATER];
export const FlaskIcons: React.FC<{x: number; y: number; at: number; keys: Amt[]; o?: number; unit?: number}> = ({x, y, at, keys, o = 1, unit = 70}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const cur = [0, 0, 0, 0];
	keys.forEach(k => { const t = smooth(prog(f, k.at, 30)); k.v.forEach((q, i) => { cur[i] += (q - cur[i]) * t; }); });
	const W = 560, base = y + 300;
	return (
		<g opacity={v}>
			<path d={`M${x - 70},${y} L${x - 70},${y + 70} L${x - W / 2},${base} Q${x - W / 2 - 10},${base + 40} ${x - W / 2 + 40},${base + 40} L${x + W / 2 - 40},${base + 40} Q${x + W / 2 + 10},${base + 40} ${x + W / 2},${base} L${x + 70},${y + 70} L${x + 70},${y}`} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={4} strokeLinejoin="round" />
			{cur.map((q, i) => {
				const bx = x - 195 + i * 130, bh = q * unit;
				return (
					<g key={i}>
						<rect x={bx - 26} y={base + 24 - bh} width={52} height={bh} rx={8} fill={COLS[i]} opacity={0.85} />
						<Sx x={bx} y={base + 80} text={LABS[i]} size={24} color={COLS[i]} anchor="middle" weight={800} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- flow chart box ----------
export const Box: React.FC<{x: number; y: number; w: number; lines: string[]; at: number; out?: number; o?: number; grey?: boolean; size?: number}> = ({x, y, w, lines, at, out, o = 1, grey = false, size = 26}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const h = 30 + lines.length * size * 1.35;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={16} fill={grey ? '#f1efea' : CARDC} stroke={grey ? GREY : NAVY} strokeWidth={3} strokeDasharray={grey ? '9 7' : undefined} />
			{lines.map((t, i) => <Sx key={i} x={x + w / 2} y={y + 18 + size + i * size * 1.35} text={t} size={size} color={grey ? GREY : i === 0 ? INK : INK_SOFT} anchor="middle" weight={i === 0 ? 800 : 700} at={-1000} />)}
		</g>
	);
};

// ---------- hazard card ----------
export const HazCard: React.FC<{x: number; y: number; lines: {t: string; at: number}[]; size?: number; o?: number}> = ({x, y, lines, size = 26, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, lines[0].at) * o;
	if (v <= 0.01) return null;
	const w = Math.max(...lines.map(l => mw(l.t, size, false, 700))) + 48;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={24 + lines.length * size * 1.5} rx={16} fill="#e7edf8" stroke={NAVY} strokeWidth={3} />
			{lines.map((l, i) => <g key={i} opacity={prog(f, l.at, 10)}><Sx x={x + 24} y={y + 14 + size * 1.1 + i * size * 1.5} text={l.t} size={size} color={NAVY} weight={700} at={-1000} /></g>)}
		</g>
	);
};

export {INK, INK_SOFT, NAVY, RED};
