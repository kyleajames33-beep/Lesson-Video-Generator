// M7 C09 board pieces on the C01 molecule kit, C04a's full structural formulas (cmol, Mol2D), C08a's skeletal
// carbonyls (carb, CarbAt) and the C06 parts. README for Claude (C10 imports these):
// - acidK(n, br): a skeletal carboxylic acid (zigzag; the COOH on the right end carbon, C=O red, "OH" label). AcidAt
//   draws one with an optional red ring round the whole carboxyl group (C, O and OH together).
// - FULL: full structural formulas (ethanoic acid, propan-1-ol, ethanoate, the propoxide ion), built with cmol.
// - Dimer: two skeletal ethanoic acid molecules; the second slides in mirrored and two violet hydrogen bonds draw at once.
// - Charge: the grey-violet charge glow on one or two oxygens, with "−" or "½−" chips; HalfBond: a dashed partial bond.
// - Drop: a coded liquid drop falling to a point. PKaLadder: a vertical pKa scale (low numbers at the top).
// - Lens: the particle lens (an 8 × 10 grid of whole molecules, one ionised pair) with its counter.
// - OkChip / NoChip: a small green tick chip and a grey crossed chip (results under a structure).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {INK, INK_SOFT, Sx, smooth} from '../chem-m6-c01/parts';
import {PROTON, PROTON_INK} from '../chem-m6-c01/parts';
import {CARDC, Dots, NAVY, Tag, VIOLET} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {SkelAt} from '../chem-m7-c02/parts';
import type {Mol2} from '../chem-m7-c02/parts';
import {cmol, vis} from '../chem-m7-c04a/parts';
import type {SMol} from '../chem-m7-c04a/parts';
import {RingAt} from '../chem-m7-c06/parts';
import {P2, RED, carb} from '../chem-m7-c08a/parts';
import type {Carb} from '../chem-m7-c08a/parts';
import {dblO} from '../chem-m7-c08b/s1';

export const GREY = '#8a847a', OK = '#2f8a5b', CHG = '#8c7bb0', CHG_SOFT = '#e4ddf0';

// ---------- skeletal acids ----------
export const acidK = (n: number, br: number[] = [], dx = 100, dy = 58): Carb => {
	if (n === 1) {
		const pts: V2[] = [[-dx * 0.3, 0], [dx * 0.2, -dx * 0.82], [dx * 0.2, dx * 0.82]];
		return {m: {pts, bonds: [{a: 0, b: 1, order: 2, color: RED}, {a: 0, b: 2}], labels: [{i: 1, text: 'O'}, {i: 2, text: 'OH'}]}, o: 1, c: 0, oh: 2};
	}
	const C = carb(n, n - 1, br, dx, dy);
	const h = C.h as number;
	const bonds = C.m.bonds.map(b => (b.b === h ? {a: b.a, b: b.b} : b));
	return {m: {pts: C.m.pts, bonds, labels: [{i: C.o, text: 'O'}, {i: h, text: 'OH'}]}, o: C.o, c: n - 1, oh: h};
};
/** The carboxyl ring centre and radii for an acid drawn at (x, y) scale s. */
export const coohRing = (k: Carb, x: number, y: number, s: number) => {
	const c = P2(k.m, x, y, s, k.c), o = P2(k.m, x, y, s, k.o), h = P2(k.m, x, y, s, k.oh as number);
	const cx = (c[0] + o[0] + h[0] + 20 * s) / 3, cy = (o[1] + h[1]) / 2;
	return {c: [cx + 14 * s, cy] as V2, rx: 92 * s, ry: (Math.abs(h[1] - o[1]) / 2 + 40 * s)};
};
export const AcidAt: React.FC<{k: Carb; x: number; y: number; s?: number; at: number; out?: number; o?: number; ring?: number; ringOut?: number; ink?: boolean; pts?: V2[]}> = ({k, x, y, s = 1, at, out, o = 1, ring, ringOut, ink = false}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const m = ink ? {...k.m, bonds: k.m.bonds.map(b => ({...b, color: undefined}))} : k.m;
	const r = coohRing(k, x, y, s);
	return (
		<g opacity={v}>
			<SkelAt m={m} x={x} y={y} s={s} at={at} />
			{ring !== undefined ? <RingAt c={r.c} rx={r.rx} ry={r.ry} at={ring} out={ringOut} /> : null}
		</g>
	);
};

// ---------- full structural formulas ----------
export const ACID_F: SMol = dblO(cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'O', r: 'OH'}]), '1u');
export const ION_F: SMol = dblO(cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'O', r: 'O'}]), '1u');
export const PROP_F: SMol = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'OH'}]);
export const PROPO_F: SMol = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'O'}]);

// ---------- the dimer ----------
/** Rotate an acid so its COOH points right (O up-right, OH down-right), the facing pose for a dimer. */
export const faceRight = (k: Carb): Carb => {
	const P = k.m.pts, c = P[k.c], o = P[k.o], h = P[k.oh as number];
	const u = (p: V2) => { const L = Math.hypot(p[0] - c[0], p[1] - c[1]) || 1; return [(p[0] - c[0]) / L, (p[1] - c[1]) / L]; };
	const bx = u(o)[0] + u(h)[0], by = u(o)[1] + u(h)[1];
	let th = -Math.atan2(by, bx);
	const rot = (p: V2): V2 => [p[0] * Math.cos(th) - p[1] * Math.sin(th), p[0] * Math.sin(th) + p[1] * Math.cos(th)];
	let pts = P.map(rot);
	if (pts[k.o][1] > pts[k.oh as number][1]) pts = pts.map(p => [p[0], -p[1]] as V2);
	void th;
	return {...k, m: {...k.m, pts}};
};
export const ETA = acidK(2);
/** Two acid molecules (default ethanoic acid) facing as a dimer: A at (x, y); B point-reflected, centred to the right. */
export const dimerPts = (x: number, y: number, s: number, k0: Carb = ETA) => {
	const k = faceRight(k0);
	const gap = 2 * Math.max(...k.m.pts.map(p => p[0])) + 150;
	const a = (i: number) => P2(k.m, x, y, s, i);
	const bx = x + gap * s;
	const b = (i: number) => [bx - k.m.pts[i][0] * s, y - k.m.pts[i][1] * s] as V2;
	return {a, b, bx, k};
};
export const Dimer: React.FC<{x: number; y: number; s?: number; at: number; slide: number; bonds: number; out?: number; o?: number; ring?: number; k?: Carb; ink?: boolean}> = ({x, y, s = 1, at, slide, bonds, out, o = 1, ring, k: k0 = ETA, ink = false}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const {a, b, bx, k} = dimerPts(x, y, s, k0);
	const t = smooth(prog(f, slide, 26));
	const dx = (1 - t) * 260 * s;
	const oh = k.oh as number;
	const B: Mol2 = {...k.m, pts: k.m.pts.map(p => [-p[0], -p[1]] as V2), labels: (k.m.labels ?? []).map(l => ({...l, text: 'O'}))};
	const Bm = ink ? {...B, bonds: B.bonds.map(q => ({...q, color: undefined}))} : B;
	const ls = 40 * Math.max(0.7, s);
	const hA: V2 = [a(oh)[0] + ls * 0.62 + 12 * s, a(oh)[1]], hB: V2 = [b(oh)[0] - ls * 0.62, b(oh)[1]];
	return (
		<g opacity={v}>
			<AcidAt k={k} x={x} y={y} s={s} at={at} ring={ring} ink={ink} />
			<g opacity={prog(f, slide, 10)} transform={`translate(${dx},0)`}>
				<SkelAt m={Bm} x={bx} y={y} s={s} at={slide} />
				<Sx x={hB[0]} y={hB[1] + ls * 0.36} text="H" size={ls} color="#8f3f26" anchor="middle" weight={800} at={slide} />
			</g>
			<Dots a={[hA[0] + 16 * s, hA[1]]} b={[b(k.o)[0] - 24 * s, b(k.o)[1]]} at={bonds} color={VIOLET} width={6} />
			<Dots a={[hB[0] - 16 * s, hB[1]]} b={[a(k.o)[0] + 24 * s, a(k.o)[1]]} at={bonds} color={VIOLET} width={6} />
		</g>
	);
};
/** A skeletal carboxylate ion (the acid's OH label becomes O). */
export const ionK = (k: Carb): Carb => ({...k, m: {...k.m, labels: (k.m.labels ?? []).map(l => ({...l, text: 'O'}))}});

// ---------- charge ----------
export const Charge: React.FC<{p: V2; at: number; out?: number; o?: number; r?: number; label?: string; labelAt?: number; dx?: number; dy?: number}> = ({p, at, out, o = 1, r = 46, label, labelAt, dx = 40, dy = -40}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<circle cx={p[0]} cy={p[1]} r={r * (0.7 + 0.3 * smooth(prog(f, at, 18)))} fill={CHG_SOFT} stroke={CHG} strokeWidth={3} opacity={0.75} />
			{label ? <g opacity={prog(f, labelAt ?? at, 10)}><circle cx={p[0] + dx} cy={p[1] + dy} r={label.length > 1 ? 26 : 20} fill={CARDC} stroke={CHG} strokeWidth={3} /><Sx x={p[0] + dx} y={p[1] + dy + 9} text={label} size={label.length > 1 ? 24 : 32} color="#5e4a8c" anchor="middle" weight={800} at={-1000} /></g> : null}
		</g>
	);
};
/** The glow band across O–C–O (the shared charge), growing from one oxygen to cover both. */
export const Spread: React.FC<{a: V2; b: V2; at: number; out?: number; o?: number}> = ({a, b, at, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const t = smooth(prog(f, at, 30));
	const e: V2 = [b[0] + (a[0] - b[0]) * t, b[1] + (a[1] - b[1]) * t];
	return <line x1={b[0]} y1={b[1]} x2={e[0]} y2={e[1]} stroke={CHG} strokeWidth={70} strokeLinecap="round" opacity={0.22 * v} />;
};
/** A dashed partial bond beside a single bond (the delocalised half bond). */
export const HalfBond: React.FC<{a: V2; b: V2; at: number; off?: number; o?: number}> = ({a, b, at, off = 10, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
	const nx = (-(b[1] - a[1]) / L) * off, ny = ((b[0] - a[0]) / L) * off, sh = 0.3;
	return <line x1={a[0] + (b[0] - a[0]) * sh + nx} y1={a[1] + (b[1] - a[1]) * sh + ny} x2={b[0] - (b[0] - a[0]) * sh + nx} y2={b[1] - (b[1] - a[1]) * sh + ny} stroke={CHG} strokeWidth={4} strokeDasharray="7 6" opacity={v} />;
};

// ---------- drop ----------
export const Drop: React.FC<{x: number; y: number; at: number; fall?: number; color?: string}> = ({x, y, at, fall = 140, color = '#9fc3dc'}) => {
	const f = useCurrentFrame();
	if (f < at - 2) return null;
	const t = prog(f, at, 16);
	const splash = prog(f, at + 16, 10);
	const yy = y - fall * (1 - t * t);
	return (
		<g>
			{t < 1 ? <path d={`M${x},${yy - 22} C${x + 12},${yy - 6} ${x + 12},${yy + 8} ${x},${yy + 8} C${x - 12},${yy + 8} ${x - 12},${yy - 6} ${x},${yy - 22} Z`} fill={color} stroke="#5f8aa8" strokeWidth={2} /> : null}
			{splash > 0 ? <ellipse cx={x} cy={y + 4} rx={14 + 16 * splash} ry={5 + 4 * splash} fill={color} opacity={0.55} /> : null}
		</g>
	);
};

// ---------- pKa ladder ----------
export const PKaLadder: React.FC<{x: number; top: number; bot: number; at: number; marks: {v: number; label: string; at: number; color?: string}[]; o?: number; range?: [number, number]}> = ({x, top, bot, at, marks, o = 1, range = [0, 18]}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const yOf = (p: number) => top + ((p - range[0]) / (range[1] - range[0])) * (bot - top);
	return (
		<g opacity={v}>
			<Sx x={x} y={top - 26} text="pKa" size={28} color={INK_SOFT} anchor="middle" weight={800} at={-1000} />
			<DrawPath d={`M${x},${top} L${x},${bot}`} at={at} dur={16} color={INK} width={4} />
			{[0, 4, 8, 12, 16].map(t => <g key={t} opacity={prog(f, at + 10, 10)}><line x1={x - 8} x2={x + 8} y1={yOf(t)} y2={yOf(t)} stroke={INK} strokeWidth={2.5} /><Sx x={x - 16} y={yOf(t) + 8} text={String(t)} size={20} color={INK_SOFT} anchor="end" weight={600} at={-1000} /></g>)}
			{marks.map((m, i) => {
				const q = prog(f, m.at, 10);
				if (q <= 0.01) return null;
				return <g key={i} opacity={q}><circle cx={x} cy={yOf(m.v)} r={10} fill={m.color ?? NAVY} /><Sx x={x + 22} y={yOf(m.v) + 9} text={m.label} size={26} color={m.color ?? NAVY} weight={700} at={-1000} /></g>;
			})}
		</g>
	);
};
export const pkY = (top: number, bot: number, p: number, range: [number, number] = [0, 18]) => top + ((p - range[0]) / (range[1] - range[0])) * (bot - top);

// ---------- particle lens ----------
export const Lens: React.FC<{x: number; y: number; at: number; o?: number; cell?: number}> = ({x, y, at, o = 1, cell = 40}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const W = 10 * cell, H = 8 * cell;
	const ion = 36;
	return (
		<g opacity={v}>
			<rect x={x - 18} y={y - 18} width={W + 36} height={H + 36} rx={24} fill={CARDC} stroke={INK_SOFT} strokeWidth={3} />
			{Array.from({length: 80}, (_, i) => {
				const cx = x + (i % 10) * cell + cell / 2, cy = y + Math.floor(i / 10) * cell + cell / 2;
				const q = prog(f, at + 4 + (i % 10) + Math.floor(i / 10), 6);
				if (i === ion) return <g key={i} opacity={prog(f, at + 24, 10)}><circle cx={cx - 7} cy={cy} r={9} fill={CHG_SOFT} stroke={CHG} strokeWidth={2.5} /><circle cx={cx + 9} cy={cy - 6} r={7} fill={PROTON} stroke={PROTON_INK} strokeWidth={2} /></g>;
				return <circle key={i} cx={cx} cy={cy} r={10} fill="#ece8e0" stroke={GREY} strokeWidth={2} opacity={q} />;
			})}
		</g>
	);
};

// ---------- result chips ----------
export const OkChip: React.FC<{x: number; y: number; text: string; at: number; out?: number; o?: number; size?: number}> = ({x, y, text, at, out, o, size = 26}) => <Tag x={x} y={y} text={'✓ ' + text} at={at} out={out} o={o} size={size} color={OK} fill="#e3f3e9" />;
export const NoChip: React.FC<{x: number; y: number; text: string; at: number; out?: number; o?: number; size?: number}> = ({x, y, text, at, out, o, size = 26}) => <Tag x={x} y={y} text={'✗ ' + text} at={at} out={out} o={o} size={size} />;

export {INK, INK_SOFT, NAVY, RED, VIOLET};
