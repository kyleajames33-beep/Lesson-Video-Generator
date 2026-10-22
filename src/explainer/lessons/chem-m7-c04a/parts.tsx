// M7 C04a board pieces on top of the C01 molecule kit. README for Claude (C04b imports these; keep them backward
// compatible):
// - cmol / Mol2D: full structural formulas from a carbon row spec (substituents by direction, '*' marks an atom that
//   came from the reagent). Mol2D draws them with per-atom docking (fly: a copy flies in from the reagent), lifting
//   (lift: an atom leaves its carbon, the substitution swap), glows, and a double bond that relaxes to a single bond.
// - diat / water2: the reagent molecules for the equation stage strip ("H–H", "Br–Br", "H–Br", "H–O–H").
// - CT: formula text with subscripts (_2) and the halogens coloured (Br orange-brown, Cl green).
// - RxArrow: the reaction arrow with condition chips written on and under it; it can turn into ⇌.
// - CondEq: a condensed equation line (left, arrow with chips, right), for checks, two-step strips and answers.
// - CondCard: the conditions card (one row per reagent), small at the right or large in the memory aid.
// - Opener: the bond opener (teal cloud above and below a C=C splits into one glowing spare bond on each carbon).
// - MorphStick / AddModel: an ink ball-and-stick whose atoms move between keyed 3D layouts (the addition model:
//   flat ethene adds Br₂ and turns tetrahedral).
// - PlateC (a plate centred on x), Gauge (pressure doodle), Halo (a soft glow ring).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {DrawPath, INK, INK_SOFT, PicH, Sx, mw, picW, smooth} from '../chem-m6-c01/parts';
import type {PDef} from '../chem-m6-c01/assets';
import {BallStick, CARDC, Edges, HGREY, MULTI, NAVY, OXY_INK, VIOLET, ethane3d, ethene3d, lerp3, lerpV, proj} from '../chem-m7-c01/molecules';
import type {Atom3, V2, Vec3} from '../chem-m7-c01/molecules';

export const vis = (f: number, at: number, out?: number, d = 12) => prog(f, at, d) * (out === undefined ? 1 : 1 - prog(f, out, d));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
/** Dim to `to` from frame `at` (1 before). */
export const dimAt = (f: number, at: number, to = 0.4, d = 12) => 1 - (1 - to) * prog(f, at, d);
export const pulseAt = (f: number, at: number, d = 26, k = 1) => k * Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - at) / d)) * Math.PI));

// ---------- colours ----------
export const BROM = '#9a4a1c', BROM_SOFT = '#f6e2d3';
export const CHLOR = '#2f7f3a', CHLOR_SOFT = '#dcefdc';
export const COND = NAVY, COND_SOFT = '#e7edf8';
export type El = 'C' | 'H' | 'Br' | 'Cl' | 'O';
export const elCol = (el: El) => (el === 'Br' ? BROM : el === 'Cl' ? CHLOR : el === 'O' ? OXY_INK : el === 'H' ? HGREY : INK);
export const elSoft = (el: El) => (el === 'Br' ? BROM_SOFT : el === 'Cl' ? CHLOR_SOFT : el === 'O' ? '#f5ddd3' : el === 'H' ? '#ece8e0' : '#e7edf8');

// ---------- full structural formulas ----------
export type SAtom = {el: El; p: V2; nw?: boolean};
export type SBond = {a: number; b: number; order?: 1 | 2 | 3; color?: string};
export type SMol = {atoms: SAtom[]; bonds: SBond[]; C: number[]; k: Record<string, number>};
export type Dir = 'u' | 'd' | 'l' | 'r' | 'ul' | 'ur' | 'dl' | 'dr';
const DV: Record<Dir, V2> = {u: [0, -1], d: [0, 1], l: [-1, 0], r: [1, 0], ul: [-0.5, -0.866], ur: [0.5, -0.866], dl: [-0.5, 0.866], dr: [0.5, 0.866]};
/** Substituents per carbon: 'H', 'Br', 'Cl', 'OH'; a trailing '*' marks an atom from the reagent. */
export type CSpec = Partial<Record<Dir, string>>;
/**
 * A carbon row centred on the origin (spacing sp), carbon i bonded to i + 1 with orders[i] (multiple bonds teal).
 * Keys: k['c0'] is carbon 0; k['0u'] the atom above carbon 0; for OH, k['1u'] is the O and k['1uH'] its H.
 */
export const cmol = (cs: CSpec[], orders: number[] = [], sp = 130, len = 76): SMol => {
	const atoms: SAtom[] = [], bonds: SBond[] = [], C: number[] = [], k: Record<string, number> = {};
	const n = cs.length;
	cs.forEach((_, i) => { k['c' + i] = atoms.length; C.push(atoms.length); atoms.push({el: 'C', p: [(i - (n - 1) / 2) * sp, 0]}); });
	for (let i = 0; i < n - 1; i++) { const o = (orders[i] ?? 1) as 1 | 2 | 3; bonds.push({a: C[i], b: C[i + 1], order: o, color: o > 1 ? MULTI : undefined}); }
	cs.forEach((spec, i) => {
		(Object.keys(spec) as Dir[]).forEach(d => {
			const raw = spec[d] as string;
			const nw = raw.endsWith('*');
			const lab = raw.replace('*', '');
			const v = DV[d];
			const c = atoms[C[i]].p;
			const L = lab === 'Br' || lab === 'Cl' ? len * 1.08 : len;
			if (lab === 'OH') {
				const o: V2 = [c[0] + v[0] * len, c[1] + v[1] * len];
				const hv: V2 = d === 'u' || d === 'd' ? [1, 0] : v;
				k[i + d] = atoms.length; atoms.push({el: 'O', p: o, nw});
				bonds.push({a: C[i], b: atoms.length - 1});
				k[i + d + 'H'] = atoms.length; atoms.push({el: 'H', p: [o[0] + hv[0] * len * 0.8, o[1] + hv[1] * len * 0.8], nw});
				bonds.push({a: atoms.length - 2, b: atoms.length - 1});
				return;
			}
			k[i + d] = atoms.length;
			atoms.push({el: lab as El, p: [c[0] + v[0] * L, c[1] + v[1] * L], nw});
			bonds.push({a: C[i], b: atoms.length - 1});
		});
	});
	return {atoms, bonds, C, k};
};
/** Two-atom reagent, "A–B" (centred). */
export const diat = (a: El, b: El, len = 92): SMol => ({atoms: [{el: a, p: [-len / 2, 0]}, {el: b, p: [len / 2, 0]}], bonds: [{a: 0, b: 1}], C: [], k: {a: 0, b: 1}});
/** Water written H–O–H in a row, so its two pieces (H and OH) read clearly. */
export const water2 = (len = 74): SMol => ({atoms: [{el: 'H', p: [-len, 0]}, {el: 'O', p: [0, 0]}, {el: 'H', p: [len, 0]}], bonds: [{a: 0, b: 1}, {a: 1, b: 2}], C: [], k: {h: 0, o: 1, oh: 2}});
/** Absolute point of atom i of a molecule drawn at (x, y) scale s. */
export const apt = (m: SMol, i: number, x: number, y: number, s = 1): V2 => [x + m.atoms[i].p[0] * s, y + m.atoms[i].p[1] * s];
/** Local coordinates (for Mol2D fly/lift) of an absolute point, for a molecule drawn at (x, y) scale s. */
export const loc = (p: V2, x: number, y: number, s = 1): V2 => [(p[0] - x) / s, (p[1] - y) / s];
/** Width of a molecule's atom spread (for layout). */
export const molW = (m: SMol) => { const xs = m.atoms.map(a => a.p[0]); return Math.max(...xs) - Math.min(...xs); };

const unit = (a: V2, b: V2): V2 => { const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1; return [(b[0] - a[0]) / L, (b[1] - a[1]) / L]; };
export type Fly = {from: V2; at: number; dur?: number};
export type Lift = {to: V2; at: number; dur?: number; fade?: number};
/**
 * Full structural formula with motion. Atoms draw on from `at` (stagger frames apart). fly[i]: atom i is hidden, then a
 * copy flies in from `from` (local coordinates) and its bond appears on arrival. lift[i]: atom i leaves for `to`, its
 * bond breaking at once, and fades at `fade`. glow[i]: soft halo between frames. relax[k]: double bond k loses its
 * second stroke (and its teal) from that frame. hideAt[i]: atom i (and its bonds) fade out.
 */
export const Mol2D: React.FC<{m: SMol; x: number; y: number; s?: number; at: number; out?: number; o?: number; size?: number; stagger?: number; fly?: Record<number, Fly>; lift?: Record<number, Lift>; glow?: Record<number, [number, number?]>; relax?: Record<number, number>; hideAt?: Record<number, number>; col?: Record<number, string>; atomO?: (i: number) => number}> = ({m, x, y, s = 1, at, out, o = 1, size = 40, stagger = 2, fly = {}, lift = {}, glow = {}, relax = {}, hideAt = {}, col = {}, atomO}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const pos = (i: number): V2 => {
		const p = m.atoms[i].p;
		const fl = fly[i], li = lift[i];
		if (fl) return lerpV(fl.from, p, smooth(prog(f, fl.at, fl.dur ?? 22)));
		if (li) return lerpV(p, li.to, smooth(prog(f, li.at, li.dur ?? 22)));
		return p;
	};
	const aO = (i: number) => {
		const fl = fly[i], li = lift[i], h = hideAt[i];
		let q = fl ? prog(f, fl.at, 6) : prog(f, at + i * stagger, 8);
		if (li && li.fade !== undefined) q *= 1 - prog(f, li.fade, 10);
		if (h !== undefined) q *= 1 - prog(f, h, 10);
		return q * (atomO ? atomO(i) : 1);
	};
	const linkO = (i: number) => {
		const fl = fly[i], li = lift[i];
		let q = 1;
		if (fl) q *= prog(f, fl.at + (fl.dur ?? 22) - 4, 8);
		if (li) q *= 1 - prog(f, li.at, 6);
		return q;
	};
	const R = (el: El) => (el === 'H' ? size * 0.36 : el === 'Br' || el === 'Cl' ? size * 0.66 : size * 0.44);
	return (
		<g opacity={v} transform={`translate(${x},${y}) scale(${s})`}>
			{Object.entries(glow).map(([k, w]) => {
				const i = Number(k);
				const g = vis(f, w[0], w[1], 10) * aO(i);
				if (g <= 0.01) return null;
				const p = pos(i);
				return <circle key={'g' + k} cx={p[0]} cy={p[1]} r={size * 0.78} fill={elSoft(m.atoms[i].el)} stroke={elCol(m.atoms[i].el)} strokeWidth={2.5} opacity={0.9 * g} />;
			})}
			{m.bonds.map((b, k) => {
				const bo = Math.min(aO(b.a), aO(b.b)) * linkO(b.a) * linkO(b.b);
				if (bo <= 0.01) return null;
				const A = pos(b.a), B = pos(b.b);
				const [ux, uy] = unit(A, B);
				const a1: V2 = [A[0] + ux * R(m.atoms[b.a].el), A[1] + uy * R(m.atoms[b.a].el)], b1: V2 = [B[0] - ux * R(m.atoms[b.b].el), B[1] - uy * R(m.atoms[b.b].el)];
				const rl = relax[k] !== undefined ? prog(f, relax[k], 14) : 0;
				const order = b.order ?? 1;
				const c = rl > 0.5 ? INK : b.color ?? INK;
				const nx = -uy * 7, ny = ux * 7;
				return (
					<g key={k} opacity={bo} stroke={c} strokeWidth={4} strokeLinecap="round">
						{order === 1 ? <line x1={a1[0]} y1={a1[1]} x2={b1[0]} y2={b1[1]} /> : null}
						{order === 2 ? <><line x1={a1[0] + nx * (1 - rl)} y1={a1[1] + ny * (1 - rl)} x2={b1[0] + nx * (1 - rl)} y2={b1[1] + ny * (1 - rl)} /><line x1={a1[0] - nx} y1={a1[1] - ny} x2={b1[0] - nx} y2={b1[1] - ny} opacity={1 - rl} /></> : null}
						{order === 3 ? <><line x1={a1[0]} y1={a1[1]} x2={b1[0]} y2={b1[1]} /><line x1={a1[0] + nx * 1.4} y1={a1[1] + ny * 1.4} x2={b1[0] + nx * 1.4} y2={b1[1] + ny * 1.4} opacity={1 - rl} /><line x1={a1[0] - nx * 1.4} y1={a1[1] - ny * 1.4} x2={b1[0] - nx * 1.4} y2={b1[1] - ny * 1.4} opacity={1 - rl} /></> : null}
					</g>
				);
			})}
			{m.atoms.map((a, i) => {
				const q = aO(i);
				if (q <= 0.01) return null;
				const p = pos(i);
				const isH = a.el === 'H';
				const sz = isH ? size * 0.82 : size;
				return <g key={i} opacity={q}><Sx x={p[0]} y={p[1] + sz * 0.36} text={a.el} size={sz} color={col[i] ?? elCol(a.el)} anchor="middle" weight={isH ? 700 : 800} at={-1000} /></g>;
			})}
		</g>
	);
};

// ---------- formula text ----------
const ctoks = (t: string) => {
	const out: {s: string; sub: boolean; c?: string}[] = [];
	const re = /(_\d+|Br|Cl)/g;
	let last = 0, mm: RegExpExecArray | null;
	while ((mm = re.exec(t))) {
		if (mm.index > last) out.push({s: t.slice(last, mm.index), sub: false});
		if (mm[0][0] === '_') out.push({s: mm[0].slice(1), sub: true, c: out.length ? out[out.length - 1].c : undefined});
		else out.push({s: mm[0], sub: false, c: mm[0] === 'Br' ? BROM : CHLOR});
		last = mm.index + mm[0].length;
	}
	if (last < t.length) out.push({s: t.slice(last), sub: false});
	return out;
};
/** Formula text: subscripts written _2, halogens coloured (off with plain). */
export const CT: React.FC<{x: number; y: number; text: string; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'; at?: number; out?: number; o?: number; weight?: number; hand?: boolean; plain?: boolean}> = ({x, y, text, size = 40, color = INK, anchor = 'start', at = -1000, out, o = 1, weight = 700, hand = false, plain = false}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	let shift = 0;
	return (
		<text x={x} y={y} textAnchor={anchor} fill={color} opacity={v} style={{fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: weight, fontSize: size, whiteSpace: 'pre'}}>
			{ctoks(text).map((k, i) => { const want = k.sub ? size * 0.2 : 0; const dy = want - shift; shift = want; return <tspan key={i} dy={dy || undefined} fill={plain ? undefined : k.c} style={k.sub ? {fontSize: size * 0.64} : undefined}>{k.s}</tspan>; })}
		</text>
	);
};
export const ctW = (t: string, size: number, weight = 700, hand = false) => mw(t, size, hand, weight);

// ---------- arrow with condition chips ----------
export type Cond = {t: string; at: number; out?: number; o?: number; color?: string; fill?: string};
export const CondChip: React.FC<{x: number; y: number; c: Cond; size?: number; anchor?: 'start' | 'middle'}> = ({x, y, c, size = 26, anchor = 'middle'}) => {
	const f = useCurrentFrame();
	const v = vis(f, c.at, c.out, 10) * (c.o ?? 1);
	if (v <= 0.01) return null;
	const w = mw(c.t, size, false, 700) + 28;
	const x0 = anchor === 'middle' ? x - w / 2 : x;
	const col = c.color ?? COND;
	return (
		<g opacity={v} transform={`translate(0,${(1 - prog(f, c.at, 10)) * 8})`}>
			<rect x={x0} y={y - size * 0.8} width={w} height={size * 1.5} rx={size * 0.5} fill={c.fill ?? COND_SOFT} stroke={col} strokeWidth={2} />
			<CT x={x0 + 14} y={y + size * 0.3} text={c.t} size={size} color={col} weight={700} plain />
		</g>
	);
};
/** The reaction arrow (draws on at `at`); chips stack above and below its middle. eqAt: becomes ⇌. */
export const RxArrow: React.FC<{x1: number; x2: number; y: number; at: number; out?: number; o?: number; eqAt?: number; above?: Cond[]; below?: Cond[]; color?: string; size?: number; nudge?: number}> = ({x1, x2, y, at, out, o = 1, eqAt, above = [], below = [], color = INK, size = 26, nudge}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const p = smooth(prog(f, at, 16));
	const e = eqAt === undefined ? 0 : smooth(prog(f, eqAt, 16));
	const xe = x1 + (x2 - x1) * p;
	const mx = (x1 + x2) / 2;
	const nd = nudge === undefined ? 0 : pulseAt(f, nudge, 40);
	return (
		<g opacity={v}>
			<g opacity={1 - e}>
				<line x1={x1} y1={y} x2={xe} y2={y} stroke={color} strokeWidth={5} strokeLinecap="round" />
				<path d={`M${xe - 20},${y - 13} L${xe},${y} L${xe - 20},${y + 13}`} fill="none" stroke={color} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" opacity={prog(f, at + 10, 6)} />
			</g>
			{e > 0.01 ? (
				<g opacity={e} stroke={color} strokeWidth={5} strokeLinecap="round" fill="none">
					<path d={`M${x1},${y - 8} L${x2},${y - 8} l-20,-13`} />
					<path d={`M${x2},${y + 8} L${x1},${y + 8} l20,13`} />
				</g>
			) : null}
			{nd > 0.01 ? <path d={`M${mx - 50 + nd * 40},${y - 34} l60,0 m-14,-10 l14,10 l-14,10`} fill="none" stroke={VIOLET} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" opacity={Math.min(1, nd * 2)} /> : null}
			{above.map((c, j) => <CondChip key={'a' + j} x={mx} y={y - 40 - (above.length - 1 - j) * (size * 1.7)} c={c} size={size} />)}
			{below.map((c, j) => <CondChip key={'b' + j} x={mx} y={y + 44 + j * (size * 1.7)} c={c} size={size} />)}
		</g>
	);
};
/** A condensed equation line: left text ends at the arrow, right text starts after it. */
export const CondEq: React.FC<{x: number; y: number; left: string; right: string; at: number; out?: number; o?: number; rightAt?: number; len?: number; size?: number; above?: Cond[]; below?: Cond[]; eqAt?: number; color?: string; weight?: number}> = ({x, y, left, right, at, out, o = 1, rightAt, len = 150, size = 44, above, below, eqAt, color = INK, weight = 700}) => (
	<g>
		<CT x={x - 20} y={y + size * 0.35} text={left} size={size} anchor="end" at={at} out={out} o={o} color={color} weight={weight} />
		<RxArrow x1={x} x2={x + len} y={y} at={at + 6} out={out} o={o} above={above} below={below} eqAt={eqAt} size={Math.round(size * 0.58)} />
		<CT x={x + len + 22} y={y + size * 0.35} text={right} size={size} at={rightAt ?? at + 14} out={out} o={o} color={color} weight={weight} />
	</g>
);

/** Big "+" between equation terms. */
export const Plus: React.FC<{x: number; y: number; at: number; out?: number; o?: number; size?: number}> = ({x, y, at, out, o = 1, size = 54}) => <Sx x={x} y={y + size * 0.36} text="+" size={size} color={INK} anchor="middle" weight={700} at={at} out={out} opacity={o} />;

// ---------- conditions card ----------
export type CRow = {t: string; at?: number; o?: number; fill?: number};
/** Conditions card: rows (label first), each writing on at `at`; o dims a row; ring circles a phrase in a row. */
export const CondCard: React.FC<{x: number; y: number; rows: CRow[]; at: number; out?: number; o?: number; size?: number; w?: number; title?: string; ring?: {row: number; phrase: string; at: number}}> = ({x, y, rows, at, out, o = 1, size = 24, w, title = 'Addition conditions', ring}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const lh = size * 1.62;
	const W = w ?? Math.max(...rows.map(r => mw(r.t, size, false, 600))) + 48;
	const H = size * 2.1 + rows.length * lh + 10;
	return (
		<g opacity={v} transform={`translate(0,${(1 - smooth(prog(f, at, 14))) * 20})`}>
			<rect x={x + 4} y={y + 6} width={W} height={H} rx={16} fill="rgba(60,45,20,0.07)" />
			<rect x={x} y={y} width={W} height={H} rx={16} fill={CARDC} stroke={COND} strokeWidth={3} />
			<Sx x={x + 22} y={y + size * 1.45} text={title} size={size * 0.95} color={COND} hand weight={700} at={-1000} />
			{rows.map((r, i) => {
				const yy = y + size * 2.1 + i * lh + size;
				const ro = (r.at === undefined ? 1 : prog(f, r.at, 12)) * (r.o ?? 1);
				if (ro <= 0.01) return null;
				const fl = r.fill === undefined ? 0 : vis(f, r.fill, r.fill + 40, 10);
				return (
					<g key={i} opacity={ro}>
						{fl > 0.01 ? <rect x={x + 10} y={yy - size * 1.05} width={W - 20} height={lh} rx={10} fill="#f6d77a" opacity={0.5 * fl} /> : null}
						<CT x={x + 24} y={yy} text={r.t} size={size} color={INK} weight={600} plain />
					</g>
				);
			})}
			{ring ? (() => {
				const t = rows[ring.row].t, s0 = t.indexOf(ring.phrase);
				if (s0 < 0) throw new Error('CondCard ring phrase not found: ' + ring.phrase);
				const x1 = x + 24 + mw(t.slice(0, s0), size, false, 600), x2 = x1 + mw(ring.phrase, size, false, 600);
				const cy = y + size * 2.1 + ring.row * lh + size * 0.66;
				const rx = (x2 - x1) / 2 + 22, ry = size * 0.82, cx = (x1 + x2) / 2;
				return <DrawPath d={`M${cx},${cy - ry} A${rx},${ry} 0 1 1 ${cx - 1},${cy - ry} `} at={ring.at} dur={18} color="#c98a1b" width={5} />;
			})() : null}
		</g>
	);
};
/** The four C04a rows (C04b adds a fifth). */
export const CARD_ROWS = ['+ H_2: Ni, about 150 °C → alkane', '+ X_2: room temperature → dihaloalkane', '+ HX: room temperature → haloalkane', '+ H_2O: steam, H_3PO_4, about 300 °C, high pressure → alcohol'];
export const CARD_LABELS = ['+ H_2', '+ X_2', '+ HX', '+ H_2O'];

// ---------- bond opener ----------
/** The second bond as a teal cloud above and below the c1–c2 axis (from `at`); at `split` it becomes one glowing spare
 *  bond (stub) on each carbon, pointing along dirs. */
export const Opener: React.FC<{c1: V2; c2: V2; at: number; split?: number; out?: number; o?: number; dirs?: [V2, V2]; stub?: number; pulse?: number; double?: boolean}> = ({c1, c2, at, split, out, o = 1, dirs = [[0, -1], [0, -1]], stub = 50, pulse, double = false}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const sp = split === undefined ? 0 : smooth(prog(f, split, 20));
	const mx = (c1[0] + c2[0]) / 2, my = (c1[1] + c2[1]) / 2;
	const ang = (Math.atan2(c2[1] - c1[1], c2[0] - c1[0]) * 180) / Math.PI;
	const rx = Math.hypot(c2[0] - c1[0], c2[1] - c1[1]) / 2 + 6;
	const pl = pulse === undefined ? 0 : pulseAt(f, pulse, 30);
	const glow = 0.6 + 0.4 * Math.sin(f * 0.18);
	const cloud = (off: number, k: number) => (
		<g key={k} transform={`translate(${mx},${my}) rotate(${ang})`}>
			{[1, -1].map(sg => <ellipse key={sg} cx={0} cy={sg * off} rx={rx * (1 - sp * 0.6) * (1 + 0.05 * pl)} ry={17 * (1 + 0.15 * pl)} fill={MULTI} opacity={0.3} stroke={MULTI} strokeWidth={2.5} />)}
		</g>
	);
	return (
		<g opacity={v}>
			<g opacity={1 - sp}>{cloud(30, 0)}{double ? cloud(52, 1) : null}</g>
			{sp > 0.01 ? [c1, c2].map((c, i) => {
				const d = dirs[i];
				const a: V2 = [c[0] + d[0] * 24, c[1] + d[1] * 24], b: V2 = [c[0] + d[0] * (24 + stub * sp), c[1] + d[1] * (24 + stub * sp)];
				return (
					<g key={i}>
						<line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={MULTI} strokeWidth={6} strokeLinecap="round" />
						<circle cx={b[0]} cy={b[1]} r={13} fill={MULTI} opacity={0.35 * glow * sp} />
						<circle cx={b[0]} cy={b[1]} r={6} fill={MULTI} opacity={sp} />
					</g>
				);
			}) : null}
		</g>
	);
};

// ---------- plates and doodles ----------
/** Plate centred on cx with its top at `top` (uniform scale only). */
export const PlateC: React.FC<{p: PDef; cx: number; top: number; h: number; o?: number}> = ({p, cx, top, h, o = 1}) => (o <= 0.01 ? null : <PicH p={p} x={cx - picW(p, h) / 2} y={top} h={h} o={o} />);
/** Pressure gauge doodle: the needle rises from `at`. */
export const Gauge: React.FC<{x: number; y: number; r?: number; at: number; out?: number; o?: number}> = ({x, y, r = 54, at, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const a = ((-210 + 170 * smooth(prog(f, at + 8, 30))) * Math.PI) / 180;
	return (
		<g opacity={v}>
			<circle cx={x} cy={y} r={r} fill={CARDC} stroke={INK} strokeWidth={4} />
			{Array.from({length: 7}, (_, i) => { const t = ((-210 + i * 40) * Math.PI) / 180; return <line key={i} x1={x + Math.cos(t) * r * 0.72} y1={y + Math.sin(t) * r * 0.72} x2={x + Math.cos(t) * r * 0.88} y2={y + Math.sin(t) * r * 0.88} stroke={INK_SOFT} strokeWidth={3} />; })}
			<line x1={x} y1={y} x2={x + Math.cos(a) * r * 0.7} y2={y + Math.sin(a) * r * 0.7} stroke="#c4432f" strokeWidth={5} strokeLinecap="round" />
			<circle cx={x} cy={y} r={6} fill={INK} />
			<rect x={x - 12} y={y + r} width={24} height={16} fill={INK_SOFT} />
		</g>
	);
};
/** Soft glow ring at a point. */
export const Halo: React.FC<{x: number; y: number; r?: number; at: number; out?: number; o?: number; color?: string}> = ({x, y, r = 46, at, out, o = 1, color = '#f6d77a'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	return <circle cx={x} cy={y} r={r * (1 + 0.06 * Math.sin(f * 0.2))} fill={color} opacity={0.55 * v} />;
};
/** A small boxed product (thin outline, optional violet for the HX second product). */
export const Box: React.FC<{x: number; y: number; w: number; h: number; at: number; out?: number; o?: number; color?: string; pulse?: number}> = ({x, y, w, h, at, out, o = 1, color = INK_SOFT, pulse}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const pl = pulse === undefined ? 0 : pulseAt(f, pulse, 30);
	return <rect x={x - pl * 6} y={y - pl * 6} width={w + pl * 12} height={h + pl * 12} rx={16} fill="none" stroke={color} strokeWidth={3 + pl * 3} strokeDasharray={undefined} />;
};

// ---------- ink ball-and-stick with keyed atom motion ----------
export type MKey = {at: number; pos: Vec3[]; dur?: number};
export const morphPos = (f: number, keys: MKey[]): Vec3[] => {
	let cur = keys[0].pos;
	for (let i = 1; i < keys.length; i++) { const t = smooth(prog(f, keys[i].at, keys[i].dur ?? 30)); if (t <= 0) break; cur = cur.map((p, j) => lerp3(p, keys[i].pos[j], t)); }
	return cur;
};
export const MorphStick: React.FC<{els: Atom3['el'][]; bonds: [number, number][]; keys: MKey[]; orders: number[]; cx: number; cy: number; u: number; yaw: number; pitch: number; o?: number; bondO?: (k: number) => number; atomO?: (i: number) => number; bondColors?: (string | undefined)[]; glowAtoms?: (i: number) => string | undefined}> = ({els, bonds, keys, orders, cx, cy, u, yaw, pitch, o = 1, bondO, atomO, bondColors, glowAtoms}) => {
	const f = useCurrentFrame();
	const P = morphPos(f, keys);
	return <BallStick atoms={els.map((el, i) => ({el, p: P[i]}))} bonds={bonds} orders={orders} cx={cx} cy={cy} unitPx={u} yaw={yaw} pitch={pitch} o={o} bondO={bondO} atomO={atomO} bondColors={bondColors ?? orders.map(q => (q > 1 ? MULTI : undefined))} glowAtoms={glowAtoms} />;
};
const sub3 = (a: Vec3, b: Vec3): Vec3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add3 = (a: Vec3, b: Vec3): Vec3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const mul3 = (a: Vec3, k: number): Vec3 => [a[0] * k, a[1] * k, a[2] * k];
const nrm3 = (a: Vec3): Vec3 => mul3(a, 1 / (Math.hypot(a[0], a[1], a[2]) || 1));
const d2 = (a: Vec3, b: Vec3) => (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2;
/** Tetrahedral (ethane-like) layout: for each carbon, its three outer directions, the most upward first. */
export const ethaneDirs = (): {C: [Vec3, Vec3]; dirs: [Vec3[], Vec3[]]} => {
	const E = ethane3d();
	const C: [Vec3, Vec3] = [E.atoms[0].p, E.atoms[1].p];
	const dirs = [0, 1].map(ci => E.bonds.filter(([a, b]) => (a === ci || b === ci) && !(a <= 1 && b <= 1)).map(([a, b]) => nrm3(sub3(E.atoms[a === ci ? b : a].p, C[ci]))).sort((p, q) => q[1] - p[1])) as [Vec3[], Vec3[]];
	return {C, dirs};
};
/** Greedy pairing: for each start point, the index of the nearest unused end point. */
export const pairUp = (starts: Vec3[], ends: Vec3[]): number[] => { const used = new Set<number>(); return starts.map(s => { let best = -1, bd = 1e9; ends.forEach((e, j) => { if (!used.has(j) && d2(s, e) < bd) { bd = d2(s, e); best = j; } }); used.add(best); return best; }); };

/** The addition model: atoms C0, C1, H×4, X0, X1. Timings: drift (X₂ drifts in), dock (X–X breaks, one X on each
 *  carbon; the C=C becomes single), tet (the carbons turn tetrahedral, the model turns to show 3D). */
export const ADD_BONDS: [number, number][] = [[0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [6, 7], [0, 6], [1, 7]];
export const addKeys = (T: {drift: number; dock: number; tet: number}): MKey[] => {
	const E = ethene3d();
	const s: Vec3[] = [E.atoms[0].p, E.atoms[1].p, E.atoms[2].p, E.atoms[3].p, E.atoms[4].p, E.atoms[5].p, [-0.46, 2.3, 0], [0.46, 2.3, 0]];
	const drift: Vec3[] = s.map((p, i) => (i >= 6 ? [p[0], 1.55, 0.05] : p));
	const dock: Vec3[] = s.map((p, i) => (i === 6 ? [s[0][0], 1.0, 0] : i === 7 ? [s[1][0], 1.0, 0] : p));
	const {C, dirs} = ethaneDirs();
	const fin: Vec3[] = [C[0], C[1]];
	// carbon 0: top direction takes X0; carbon 1 likewise
	const rest0 = dirs[0].slice(1).map(d => add3(C[0], mul3(d, 0.62))), rest1 = dirs[1].slice(1).map(d => add3(C[1], mul3(d, 0.62)));
	const p0 = pairUp([s[2], s[3]], rest0), p1 = pairUp([s[4], s[5]], rest1);
	fin.push(rest0[p0[0]], rest0[p0[1]], rest1[p1[0]], rest1[p1[1]], add3(C[0], mul3(dirs[0][0], 0.95)), add3(C[1], mul3(dirs[1][0], 0.95)));
	return [{at: -1000, pos: s}, {at: T.drift, pos: drift, dur: 50}, {at: T.dock, pos: dock, dur: 26}, {at: T.tet, pos: fin, dur: 40}];
};
export const AddModel: React.FC<{T: {drift: number; dock: number; tet: number}; cx: number; cy: number; u: number; o?: number; x?: 'Br' | 'Cl'; outlines?: boolean; turn?: number}> = ({T, cx, cy, u, o = 1, x = 'Br', outlines = false, turn = 0.75}) => {
	const f = useCurrentFrame();
	const keys = addKeys(T);
	const yaw = turn * smooth(prog(f, T.tet, 60)), pitch = 0.32 * smooth(prog(f, T.tet, 60));
	const els: Atom3['el'][] = ['C', 'C', 'H', 'H', 'H', 'H', x, x];
	const single = f >= T.dock + 12;
	const orders = ADD_BONDS.map((_, k) => (k === 0 && !single ? 2 : 1));
	const bondO = (k: number) => (k === 5 ? 1 - prog(f, T.dock, 8) : k >= 6 ? prog(f, T.dock + 16, 8) : 1);
	const atomO = (i: number) => (i >= 6 ? prog(f, T.drift - 20, 14) : 1);
	const P = proj({atoms: morphPos(f, keys).map(p => ({el: 'C' as const, p}))}, cx, cy, u, yaw, pitch);
	return (
		<g opacity={o}>
			{outlines ? <Edges pts={[P[1], P[2], P[3]]} at={T.drift} out={T.tet} color={MULTI} fill="#bfe6df" /> : null}
			{outlines ? <Edges pts={[P[1], P[2], P[3], P[6]]} at={T.tet + 30} color={VIOLET} /> : null}
			<MorphStick els={els} bonds={ADD_BONDS} keys={keys} orders={orders} cx={cx} cy={cy} u={u} yaw={yaw} pitch={pitch} bondO={bondO} atomO={atomO} />
		</g>
	);
};
export {DrawPath, INK, INK_SOFT};
