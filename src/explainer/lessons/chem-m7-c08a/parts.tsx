// M7 C08a board pieces on the C01 molecule kit, C04a's strips (Mol2D, cmol, CT, RxArrow), C05's skeletal alcohols
// (alc, AlcAt) and the C06 parts (EqRow, Plate, RingAt, Arrow2, Reflux, Drips). README for Claude (C08b imports these):
// - carb(n, pos, br): a skeletal carbonyl compound (zigzag chain; O double-bonded in red at carbon pos; at an end
//   carbon an explicit aldehyde H). acid(n): a carboxylic acid (C=O and OH on the end carbon). CarbAt draws one with an
//   optional red ring on the C=O and a glow on the aldehyde H.
// - Ghosts: implied-H ghosts on one carbon of a skeletal molecule (the H counter's hydrogens); HChip: "1°: 2 H".
// - Bond2: a second bond (red) drawn between two points, offset sideways (the new C=C or C=O).
// - Tube: the aligned dichromate (or Tollens', Fehling's) pair cross-fading in place, with a coded label under it.
// - Seesaw: a small tilting beam with a label on each pan (the equilibrium see-saw).
// - Hub: the alcohol hub map (incoming dashed arrows; outgoing arrows with conditions).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {INK, INK_SOFT, Sx, smooth} from '../chem-m6-c01/parts';
import type {PDef} from '../chem-m6-c01/assets';
import {CARDC, HGhosts, NAVY, Tag, ghostDirs, hCount, nbrsOf, outward, zig} from '../chem-m7-c01/molecules';
import type {Bond, V2} from '../chem-m7-c01/molecules';
import {SkelAt} from '../chem-m7-c02/parts';
import type {Mol2} from '../chem-m7-c02/parts';
import {vis} from '../chem-m7-c04a/parts';
import {Arrow2, Plate, RingAt} from '../chem-m7-c06/parts';

export const RED = '#c4432f', CO_RED = '#c4432f', GREY = '#8a847a', HB = '#8f897f';
export const P2 = (m: Mol2, x: number, y: number, s: number, i: number): V2 => [x + m.pts[i][0] * s, y + m.pts[i][1] * s];

// ---------- skeletal carbonyls ----------
export type Carb = {m: Mol2; o: number; c: number; h?: number; oh?: number};
export const carb = (n: number, pos: number, br: number[] = [], dx = 100, dy = 58): Carb => {
	const ch = zig(n, (-(n - 1) * dx) / 2, 0, dx, dy);
	const pts: V2[] = [...ch];
	const bonds: Bond[] = Array.from({length: n - 1}, (_, i) => ({a: i, b: i + 1}));
	br.forEach(b => { pts.push(outward(ch, b, dx)); bonds.push({a: b, b: pts.length - 1, color: '#c98a1b'}); });
	const end = pos === 0 || pos === n - 1;
	let oP: V2 = n === 1 ? [0, -dx] : outward(ch, pos, dx * 0.95);
	let hP: V2 | undefined;
	if (end && n > 1) {
		const nb = ch[pos === 0 ? 1 : n - 2], c = ch[pos];
		const L = Math.hypot(c[0] - nb[0], c[1] - nb[1]) || 1;
		const vx = (c[0] - nb[0]) / L, vy = (c[1] - nb[1]) / L;
		const rot = (a: number): V2 => [vx * Math.cos(a) - vy * Math.sin(a), vx * Math.sin(a) + vy * Math.cos(a)];
		const d1 = rot(Math.PI / 3), d2 = rot(-Math.PI / 3);
		const [up, dn] = d1[1] < d2[1] ? [d1, d2] : [d2, d1];
		oP = [c[0] + up[0] * dx * 0.95, c[1] + up[1] * dx * 0.95];
		hP = [c[0] + dn[0] * dx * 0.8, c[1] + dn[1] * dx * 0.8];
	}
	pts.push(oP);
	const o = pts.length - 1;
	bonds.push({a: pos, b: o, order: 2, color: CO_RED});
	let h: number | undefined;
	if (hP) {
		pts.push(hP);
		h = pts.length - 1;
		bonds.push({a: pos, b: h, color: HB});
	}
	return {m: {pts, bonds, labels: [{i: o, text: 'O'}]}, o, c: pos, h};
};
export const acid = (n: number, dx = 100, dy = 58): Carb => {
	const C = carb(n, n - 1, [], dx, dy);
	const ch = C.m.pts.slice(0, n);
	const pts = [...C.m.pts];
	const hIdx = C.h as number;
	void ch; void dy;
	const bonds = C.m.bonds.map(b => (b.b === hIdx ? {a: b.a, b: b.b} : b));
	return {m: {pts, bonds, labels: [{i: C.o, text: 'O'}, {i: hIdx, text: 'OH'}]}, o: C.o, c: n - 1, oh: hIdx};
};
export const CarbAt: React.FC<{k: Carb; x: number; y: number; s?: number; at: number; out?: number; o?: number; ring?: number; hGlow?: number; hLabel?: boolean}> = ({k, x, y, s = 1, at, out, o = 1, ring, hGlow, hLabel = true}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const op = P2(k.m, x, y, s, k.o), cp = P2(k.m, x, y, s, k.c);
	const hp = k.h !== undefined ? P2(k.m, x, y, s, k.h) : undefined;
	const g = hGlow === undefined ? 0 : vis(f, hGlow) * (0.7 + 0.3 * Math.sin((f - hGlow) * 0.2));
	return (
		<g opacity={v}>
			<SkelAt m={k.m} x={x} y={y} s={s} at={at} />
			{hp && hLabel ? <g opacity={prog(f, at + 10, 10)}>{g > 0.01 ? <circle cx={hp[0]} cy={hp[1]} r={28 * Math.max(0.7, s)} fill="#f1efea" stroke={INK_SOFT} strokeWidth={2.5} opacity={g} /> : null}<rect x={hp[0] - 16 * s} y={hp[1] - 22 * s} width={32 * s} height={44 * s} fill={CARDC} /><Sx x={hp[0]} y={hp[1] + 13 * Math.max(0.7, s)} text="H" size={36 * Math.max(0.7, s)} color={HB} anchor="middle" weight={800} at={-1000} /></g> : null}
			{ring !== undefined ? <RingAt c={[(op[0] + cp[0]) / 2, (op[1] + cp[1]) / 2]} rx={Math.abs(op[0] - cp[0]) / 2 + 40 * s} ry={Math.abs(op[1] - cp[1]) / 2 + 30 * s} at={ring} /> : null}
		</g>
	);
};

// ---------- implied H ghosts and the H chip ----------
export const Ghosts: React.FC<{m: Mol2; x: number; y: number; s?: number; i: number; at: number; out?: number; o?: number}> = ({m, x, y, s = 1, i, at, out, o = 1}) => {
	const pts = m.pts.map((_, j) => P2(m, x, y, s, j));
	const k = hCount(m.bonds, i);
	if (k <= 0) return null;
	const nb = nbrsOf(pts, m.bonds, i);
	let dirs = ghostDirs(pts[i], nb, k);
	const sum = nb.reduce((a, q) => { const L = Math.hypot(q[0] - pts[i][0], q[1] - pts[i][1]) || 1; return [a[0] + (q[0] - pts[i][0]) / L, a[1] + (q[1] - pts[i][1]) / L]; }, [0, 0]);
	const oi = (m.labels ?? [])[0]?.i;
	if (Math.hypot(sum[0], sum[1]) < 0.4 && oi !== undefined) { const op = pts[oi]; const base = Math.atan2(pts[i][1] - op[1], pts[i][0] - op[0]); dirs = k === 1 ? [base] : [base - 0.62, base + 0.62]; }
	return <HGhosts p={pts[i]} dirs={dirs} at={at} out={out} len={56 * s} size={30 * s} o={o} />;
};
export const HChip: React.FC<{x: number; y: number; t: string; at: number; o?: number; anchor?: 'start' | 'middle'}> = ({x, y, t, at, o, anchor = 'middle'}) => <Tag x={x} y={y} text={t} at={at} size={30} color={NAVY} fill="#e7edf8" anchor={anchor} o={o} />;

// ---------- a second bond ----------
export const Bond2: React.FC<{a: V2; b: V2; at: number; off?: number; color?: string; width?: number; o?: number}> = ({a, b, at, off = 9, color = RED, width = 5, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
	const nx = (-(b[1] - a[1]) / L) * off, ny = ((b[0] - a[0]) / L) * off;
	const sh = 0.22;
	const A: V2 = [a[0] + (b[0] - a[0]) * sh + nx, a[1] + (b[1] - a[1]) * sh + ny], B: V2 = [b[0] - (b[0] - a[0]) * sh + nx, b[1] - (b[1] - a[1]) * sh + ny];
	return <g opacity={o}><DrawPath d={`M${A[0]},${A[1]} L${B[0]},${B[1]}`} at={at} dur={14} color={color} width={width} /></g>;
};

// ---------- tube pair ----------
export const Tube: React.FC<{p: PDef; to?: PDef; swap?: number; cx: number; top: number; h: number; at?: number; out?: number; o?: number; label?: string; labelAt?: number; labelColor?: string; size?: number}> = ({p, to, swap, cx, top, h, at = -1000, out, o = 1, label, labelAt, labelColor = INK, size = 26}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<Plate p={p} to={to} swap={swap} cx={cx} top={top} h={h} swapDur={30} />
			{label ? <Sx x={cx} y={top + h + size * 1.3} text={label} size={size} color={labelColor} anchor="middle" weight={700} at={labelAt ?? at} /> : null}
		</g>
	);
};
export const tubeW = (h: number) => (1222 / 1560) * h;

// ---------- see-saw ----------
export const Seesaw: React.FC<{x: number; y: number; at: number; left: string; right: string; leftAt: number; rightAt: number; o?: number}> = ({x, y, at, left, right, leftAt, rightAt, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const a = (-8 * smooth(prog(f, leftAt, 20)) + 16 * smooth(prog(f, rightAt, 24))) * Math.PI / 180;
	const R = 300;
	const e1: V2 = [x - Math.cos(a) * R, y - Math.sin(a) * R], e2: V2 = [x + Math.cos(a) * R, y + Math.sin(a) * R];
	const lo = vis(f, leftAt) * (1 - 0.55 * prog(f, rightAt, 12));
	return (
		<g opacity={v}>
			<path d={`M${x - 26},${y + 46} L${x},${y} L${x + 26},${y + 46} Z`} fill="#e9e3d6" stroke={INK} strokeWidth={3.5} strokeLinejoin="round" />
			<line x1={e1[0]} y1={e1[1]} x2={e2[0]} y2={e2[1]} stroke={INK} strokeWidth={6} strokeLinecap="round" />
			<g opacity={lo}><Tag x={e1[0]} y={e1[1] - 64} text={left} at={leftAt} size={28} color="#2d6f9e" fill="#e3f0fa" anchor="middle" /></g>
			<Tag x={e2[0]} y={e2[1] - 64} text={right} at={rightAt} size={28} color={RED} fill="#f9e1dc" anchor="middle" />
		</g>
	);
};

// ---------- the hub ----------
export type HubT = {at: number; inAt: number; inDim?: number; out: [number, number, number]};
const OUT = [
	{to: [1270, 300] as V2, lines: ['conc. H_2SO_4, about 170 °C', '→ alkene']},
	{to: [1270, 560] as V2, lines: ['HX, heat under reflux', '→ haloalkane']},
	{to: [1270, 800] as V2, lines: ['K_2Cr_2O_7 / H^{+}:  1° → aldehyde (distil)', 'or acid (reflux);  2° → ketone;  3° → none']},
];
export const Hub: React.FC<{T: HubT; s?: number; x?: number; y?: number; o?: number}> = ({T, s = 1, x = 0, y = 0, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, T.at) * o;
	if (v <= 0.01) return null;
	const C: V2 = [900, 560];
	const inO = vis(f, T.inAt) * (T.inDim === undefined ? 1 : 1 - 0.6 * prog(f, T.inDim, 12));
	return (
		<g opacity={v} transform={`translate(${x},${y}) scale(${s})`}>
			<circle cx={C[0]} cy={C[1]} r={92} fill={CARDC} stroke={RED} strokeWidth={5} />
			<Sx x={C[0]} y={C[1] + 12} text="alcohol" size={38} color={RED} anchor="middle" weight={800} at={-1000} />
			<g opacity={inO}>
				{[[180, 380], [180, 740]].map(([ax, ay], i) => (
					<g key={i}>
						<path d={`M${ax + 380},${ay} L${C[0] - 100},${C[1] + (i ? 40 : -40)}`} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 8" fill="none" />
						<Sx x={ax} y={ay - 14} text={i ? 'haloalkane + OH⁻(aq)' : 'alkene + steam'} size={28} color={INK_SOFT} weight={700} at={-1000} />
						<Sx x={ax} y={ay + 20} text={i ? '(ethanol video)' : '(addition video)'} size={22} color={INK_SOFT} weight={600} at={-1000} />
					</g>
				))}
			</g>
			{OUT.map((r, i) => (
				<g key={i}>
					<Arrow2 a={[C[0] + 96, C[1] + (i - 1) * 60]} b={[r.to[0] - 20, r.to[1]]} at={T.out[i]} color={INK} width={5} />
					{r.lines.map((l, k) => <Sx key={k} x={r.to[0]} y={r.to[1] - 6 + k * 36} text={l} size={i === 2 ? 26 : 28} color={k === 1 && i < 2 ? RED : NAVY} weight={700} at={T.out[i] + 8} />)}
				</g>
			))}
		</g>
	);
};
export {INK, INK_SOFT, NAVY};
