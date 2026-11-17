// Drawing parts for Y11 Chem M1 (classifying matter; reused by M1 V02). Text, chips, framed answers, readouts, pen
// marks, plates and the question card reuse the Y11 M2 V06 pilot parts. New here: HSC particle glyphs in the run's
// colour key, the circular particle view (a live particle-box run drawn as bonded-atom glyphs inside a circle, with a
// cone to its source), a vibrating lattice view, rings that follow one particle of the run, the classification tree
// (a side list that grows branch by branch, and the full tree for the memory aid) and a pen bracket.
import React, {useMemo} from 'react';
import {useCurrentFrame} from 'remotion';
import {runBox} from '../../sims/particle-box';
import type {BoxConfig, BoxRun} from '../../sims/particle-box';
import {
	AMB, AMB_INK, Card, Chip, Countdown, DrawPath, FONT_DISPLAY, FONT_HAND, Fade, Framed, GREEN, INK, INK_SOFT, Move, NAVY, PauseHold, PenArrow, PenRing, Plate, RED,
	Readout, Rich, StrikeLine, Sx, TickMark, Write, chipW, clamp01, kf, lerp, plateMap, prog, richW, smooth, tw, vis,
} from '../chem-y11-m2-v06/parts';
import type {Seg} from '../chem-y11-m2-v06/parts';
import type {PDef} from './common';

export {
	AMB, AMB_INK, Card, Chip, Countdown, DrawPath, FONT_DISPLAY, FONT_HAND, Fade, Framed, GREEN, INK, INK_SOFT, Move, NAVY, PauseHold, PenArrow, PenRing, Plate, RED,
	Readout, Rich, StrikeLine, Sx, TickMark, Write, chipW, clamp01, kf, lerp, plateMap, prog, richW, smooth, tw, vis,
};
export type {Seg, BoxRun};

// ---------- colour roles (design colour key, fixed for Module 1) ----------
export const PURE = NAVY; // pure substance, element, compound, plateau, "physical: same particles"
export const MIX = AMB_INK; // mixture, homogeneous, heterogeneous, slope, range (text); AMB for strokes
export const PLUM = '#7a2f6b'; // a new substance (chemical change)
export const SLATE = '#5a6470'; // "not present" crosses
export const GREEN_INK = '#23704a';
export const P = {O: '#d8483b', C: '#3b3a38', H: '#ffffff', N: '#3f6fb5', Ar: '#b49ad6', S: '#e8c547', Fe: '#c46a2f', Cu: '#b0643a', Al: '#c9ccd1', Ni: '#8fa08a', Na: '#8a5bb5', Cl: '#4f9a5a', Mg: '#9aa0a8'};
export const SVG: React.FC<{children: React.ReactNode}> = ({children}) => <svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>{children}</svg>;
export const Heading: React.FC<{text: string; at?: number; out?: number}> = ({text, at = 0, out}) => <Write x={96} y={150} text={text} at={at} out={out} size={60} color={INK} cps={40} />;
/** A bench line under a row of plates. */
export const Bench: React.FC<{x0: number; x1: number; y: number}> = ({x0, x1, y}) => <line x1={x0} x2={x1} y1={y} y2={y} stroke={INK} strokeWidth={5} strokeLinecap="round" />;

// ---------- atoms and glyphs ----------
export const At: React.FC<{x: number; y: number; r: number; fill: string; sign?: '+' | '−' | '2+' | '2−'; o?: number}> = ({x, y, r, fill, sign, o = 1}) => (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill={fill} stroke={fill === P.H ? '#7d766b' : 'rgba(35,28,20,0.7)'} strokeWidth={Math.max(1.6, r * 0.13)} />
		{sign ? <text x={x} y={y + r * 0.36} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: r * (sign.length > 1 ? 0.95 : 1.15)}} fill="#fff">{sign}</text> : null}
	</g>
);
export type GKind = 'O2' | 'N2' | 'CO2' | 'Ar' | 'H2O' | 'S8' | 'Na' | 'Cl' | 'sugar' | 'Fe' | 'Cu' | 'Al' | 'Ni' | 'Mg' | 'Ox' | 'MgI';
/** Collision radius of a glyph in units of its atom radius u. */
export const GR: Record<GKind, number> = {O2: 1.7, N2: 1.7, CO2: 2.35, Ar: 1.15, H2O: 1.55, S8: 2.3, Na: 0.85, Cl: 1.2, sugar: 2.6, Fe: 1, Cu: 1, Al: 1, Ni: 1, Mg: 1, Ox: 1.1, MgI: 0.8};
/** One particle drawn in HSC style: bonded atoms touch, one colour and size per element. */
export const Glyph: React.FC<{k: GKind; x: number; y: number; u: number; rot?: number; o?: number}> = ({k, x, y, u, rot = 0, o = 1}) => {
	let body: React.ReactNode;
	switch (k) {
		case 'O2': case 'N2': {
			const fill = k === 'O2' ? P.O : P.N;
			body = <><At x={-0.72 * u} y={0} r={u} fill={fill} /><At x={0.72 * u} y={0} r={u} fill={fill} /></>;
			break;
		}
		case 'CO2': body = <><At x={-1.42 * u} y={0} r={0.92 * u} fill={P.O} /><At x={1.42 * u} y={0} r={0.92 * u} fill={P.O} /><At x={0} y={0} r={u} fill={P.C} /></>; break;
		case 'Ar': body = <At x={0} y={0} r={1.15 * u} fill={P.Ar} />; break;
		case 'H2O': body = <><At x={-0.86 * u} y={0.62 * u} r={0.62 * u} fill={P.H} /><At x={0.86 * u} y={0.62 * u} r={0.62 * u} fill={P.H} /><At x={0} y={-0.1 * u} r={u} fill={P.O} /></>; break;
		case 'S8': body = <>{Array.from({length: 8}, (_, i) => { const a = (i / 8) * Math.PI * 2; return <At key={i} x={Math.cos(a) * 1.45 * u} y={Math.sin(a) * 1.0 * u + (i % 2 ? 0.25 * u : -0.25 * u)} r={0.62 * u} fill={P.S} />; })}</>; break;
		case 'Na': body = <At x={0} y={0} r={0.85 * u} fill={P.Na} sign="+" />; break;
		case 'Cl': body = <At x={0} y={0} r={1.2 * u} fill={P.Cl} sign="−" />; break;
		case 'Mg': body = <At x={0} y={0} r={u} fill={P.Mg} />; break;
		case 'MgI': body = <At x={0} y={0} r={0.8 * u} fill={P.Mg} sign="2+" />; break;
		case 'Ox': body = <At x={0} y={0} r={1.1 * u} fill={P.O} sign="2−" />; break;
		case 'sugar': body = <>{[[-1.1, -0.4], [0, -0.75], [1.1, -0.4], [-0.55, 0.55], [0.55, 0.55]].map(([a, b], i) => <At key={i} x={a * u} y={b * u} r={0.72 * u} fill={i % 2 ? P.O : P.C} />)}<At x={-1.9 * u} y={-0.55 * u} r={0.45 * u} fill={P.H} /><At x={1.9 * u} y={-0.55 * u} r={0.45 * u} fill={P.H} /><At x={0} y={1.35 * u} r={0.45 * u} fill={P.H} /></>; break;
		default: body = <At x={0} y={0} r={u} fill={P[k as 'Fe' | 'Cu' | 'Al' | 'Ni']} />;
	}
	return <g transform={`translate(${x},${y}) rotate(${rot})`} opacity={o}>{body}</g>;
};

// ---------- the particle view (a live particle-box run inside a circle) ----------
/** Cached run (computed once per config object). Keep configs as module constants. */
const RUNS = new WeakMap<BoxConfig, BoxRun>();
export const useRun = (cfg: BoxConfig) => {
	let r = RUNS.get(cfg);
	if (!r) { r = runBox(cfg); RUNS.set(cfg, r); }
	return r;
};
/** Species list for a set of glyph kinds at atom radius u. */
export const spec = (u: number, kinds: Record<string, GKind>, mass: Record<string, number> = {}) => Object.entries(kinds).map(([id, k]) => ({id, r: GR[k] * u, mass: mass[id] ?? 1}));
export const simF = (run: BoxRun, f: number) => Math.min(run.frames - 1, Math.max(0, Math.round(f)));
/** Slots of one species present at sim frame sf. */
export const slotsOf = (run: BoxRun, id: string, sf: number) => {
	const s = run.config.species.findIndex(x => x.id === id);
	const out: number[] = [];
	for (let i = 0; i < run.slots; i++) if (run.sp[sf * run.slots + i] === s) out.push(i);
	return out;
};
export const countOf = (run: BoxRun, id: string, sf: number) => run.counts[run.config.species.findIndex(x => x.id === id)][simF(run, sf)];
/** Kinds of particle present at sim frame sf. */
export const kindsOf = (run: BoxRun, sf: number) => run.config.species.filter((_, i) => run.counts[i][simF(run, sf)] > 0).length;
/** Frame position of a slot (box centred on cx, cy). */
export const slotXY = (run: BoxRun, slot: number, sf: number, cx: number, cy: number): [number, number] => {
	const k = simF(run, sf) * run.slots + slot;
	return [cx - run.config.w / 2 + run.x[k], cy - run.config.h / 2 + run.y[k]];
};
const cone = (sx: number, sy: number, cx: number, cy: number, r: number) => {
	const d = Math.hypot(cx - sx, cy - sy);
	if (d <= r + 4) return '';
	const base = Math.atan2(sy - cy, sx - cx), a = Math.acos(r / d);
	const p1 = [cx + r * Math.cos(base + a), cy + r * Math.sin(base + a)], p2 = [cx + r * Math.cos(base - a), cy + r * Math.sin(base - a)];
	return `M${sx},${sy} L${p1[0]},${p1[1]} L${p2[0]},${p2[1]} Z`;
};
/** Circular frame with an optional cone to the spot it magnifies; children are clipped to the circle. */
export const ViewFrame: React.FC<{id: string; cx: number; cy: number; r: number; at?: number; out?: number; src?: [number, number]; fill?: string; stroke?: string; children: React.ReactNode}> = ({id, cx, cy, r, at = -1000, out, src, fill = '#fffdf8', stroke = INK, children}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14);
	if (v <= 0.005) return null;
	const s = 0.35 + 0.65 * smooth(prog(f, at, 16));
	return (
		<g opacity={v}>
			{src ? <path d={cone(src[0], src[1], cx, cy, r)} fill="rgba(60,45,20,0.07)" stroke="rgba(60,45,20,0.35)" strokeWidth={2} strokeDasharray="8 7" /> : null}
			<g transform={`translate(${cx},${cy}) scale(${s}) translate(${-cx},${-cy})`}>
				<defs><clipPath id={id}><circle cx={cx} cy={cy} r={r - 3} /></clipPath></defs>
				<circle cx={cx} cy={cy} r={r} fill={fill} />
				<g clipPath={`url(#${id})`}>{children}</g>
				<circle cx={cx} cy={cy} r={r} fill="none" stroke={stroke} strokeWidth={5} />
			</g>
		</g>
	);
};
/** The particles of a run at the current scene frame (sim frame = scene frame + f0, scaled by rate). */
export const Particles: React.FC<{run: BoxRun; cx: number; cy: number; kinds: Record<string, GKind>; u: number; f0?: number; rate?: number; spin?: number; dim?: (id: string, slot: number) => number}> = ({run, cx, cy, kinds, u, f0 = 0, rate = 1, spin = 0.6, dim}) => {
	const f = useCurrentFrame();
	const sf = simF(run, (f + f0) * rate);
	const out: React.ReactNode[] = [];
	for (let i = 0; i < run.slots; i++) {
		const s = run.sp[sf * run.slots + i];
		if (s < 0) continue;
		const id = run.config.species[s].id;
		const [x, y] = slotXY(run, i, sf, cx, cy);
		const o = dim ? dim(id, i) : 1;
		out.push(<Glyph key={i} k={kinds[id]} x={x} y={y} u={u} rot={(i * 47 + sf * spin) % 360} o={o} />);
	}
	return <>{out}</>;
};
/** A ring that follows one particle of the run. */
export const TrackRing: React.FC<{run: BoxRun; slot: number; cx: number; cy: number; f0?: number; rate?: number; rad: number; at: number; out?: number; color?: string; label?: string; lsize?: number; ldx?: number; ldy?: number}> = ({run, slot, cx, cy, f0 = 0, rate = 1, rad, at, out, color = NAVY, label, lsize = 34, ldx = 0, ldy = -1}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (o <= 0.005) return null;
	const [x, y] = slotXY(run, slot, (f + f0) * rate, cx, cy);
	const c = 2 * Math.PI * rad, p = prog(f, at, 14);
	return (
		<g opacity={o}>
			<circle cx={x} cy={y} r={rad} fill="none" stroke={color} strokeWidth={5} strokeDasharray={c} strokeDashoffset={c * (1 - p)} transform={`rotate(-90,${x},${y})`} />
			{label ? <Sx x={x + ldx} y={ldy < 0 ? y - rad - 10 : y + rad + lsize} text={label} size={lsize} color={color} anchor="middle" weight={800} at={at + 6} /> : null}
		</g>
	);
};

// ---------- lattice view (solids: regular arrangement, slight vibration) ----------
export const Lattice: React.FC<{cx: number; cy: number; cols: number; rows: number; sp: number; u: number; kindAt: (i: number, j: number) => GKind | null; vib?: number; o?: number; leave?: (i: number, j: number) => number; melt?: (i: number, j: number) => number}> = ({cx, cy, cols, rows, sp, u, kindAt, vib = 1.6, o = 1, leave, melt}) => {
	const f = useCurrentFrame();
	const out: React.ReactNode[] = [];
	for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
		const k = kindAt(i, j);
		if (!k) continue;
		const n = i * 7 + j * 13;
		let x = cx + (i - (cols - 1) / 2) * sp + Math.sin(f * 0.5 + n) * vib, y = cy + (j - (rows - 1) / 2) * sp + Math.cos(f * 0.43 + n * 1.3) * vib;
		let a = 1;
		if (melt) { const m = melt(i, j); if (m > 0) { x += m * (Math.sin(f * 0.045 + n * 2.1) * 0.55 + Math.sin(n * 5.3) * 0.25) * sp; y += m * (Math.cos(f * 0.038 + n * 1.7) * 0.4 + 0.25) * sp; } }
		if (leave) { const t = leave(i, j); if (t > 0) { x += Math.sin(n) * 60 * t; y -= 260 * t; a = 1 - clamp01((t - 0.6) / 0.4); } }
		out.push(<Glyph key={i + '-' + j} k={k} x={x} y={y} u={u} o={a} />);
	}
	return <g opacity={o}>{out}</g>;
};

// ---------- pen bracket ----------
/** A curly pen bracket from a to b; the bump points to the right of travel (a to b) by `depth` px (negative flips). */
export const Bracket: React.FC<{a: [number, number]; b: [number, number]; at: number; out?: number; color?: string; depth?: number}> = ({a, b, at, out, color = AMB, depth = 18}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (o <= 0.005) return null;
	const L = Math.hypot(b[0] - a[0], b[1] - a[1]), tx = (b[0] - a[0]) / L, ty = (b[1] - a[1]) / L, nx = -ty * depth, ny = tx * depth;
	const P = (s: number, k: number) => `${a[0] + tx * s + nx * k},${a[1] + ty * s + ny * k}`;
	const m = L / 2;
	const d = `M${P(0, 0)} Q${P(0, 1)} ${P(24, 1)} L${P(m - 18, 1)} Q${P(m, 1)} ${P(m, 2)} Q${P(m, 1)} ${P(m + 18, 1)} L${P(L - 24, 1)} Q${P(L, 1)} ${P(L, 0)}`;
	return <g opacity={o}><DrawPath d={d} at={at} dur={18} color={color} width={5} /></g>;
};
/** Model-count label. */
export const ModelTag: React.FC<{x: number; y: number; at?: number; out?: number; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, at = -1000, out, anchor = 'start'}) => <Sx x={x} y={y} text="(model counts)" size={28} color={INK} anchor={anchor} weight={700} at={at} out={out} />;

// ---------- classification tree, side list (right column) ----------
export type TreeShow = {pure?: number; mix?: number; el?: number; comp?: number; homo?: number; het?: number};
type TNode = {key: keyof TreeShow | 'root'; label: string; sub?: string; color: string; lvl: number; thumbs?: PDef[]};
export const SideTree: React.FC<{x?: number; y?: number; show: TreeShow; nodes?: Partial<Record<keyof TreeShow, PDef[]>>; hi?: keyof TreeShow; hiAt?: number}> = ({x = 1400, y = 200, show, nodes = {}, hi, hiAt = -1000}) => {
	const f = useCurrentFrame();
	const N: TNode[] = [
		{key: 'root', label: 'matter', color: INK, lvl: 0},
		{key: 'pure', label: 'pure substance', sub: 'one substance only', color: PURE, lvl: 1},
		{key: 'el', label: 'element', sub: 'one kind of atom', color: PURE, lvl: 2},
		{key: 'comp', label: 'compound', sub: 'bonded, fixed ratio', color: PURE, lvl: 2},
		{key: 'mix', label: 'mixture', sub: 'two or more substances', color: MIX, lvl: 1},
		{key: 'homo', label: 'homogeneous', sub: 'same throughout', color: MIX, lvl: 2},
		{key: 'het', label: 'heterogeneous', sub: 'differs by region', color: MIX, lvl: 2},
	];
	const vis0 = (n: TNode) => (n.key === 'root' ? (show.pure ?? 1e9) : show[n.key] ?? 1e9);
	let yy = y;
	const rows: React.ReactNode[] = [];
	let lastL1y = y;
	N.forEach((n, i) => {
		const at = vis0(n);
		if (f < at) return;
		const ty = yy;
		yy += n.sub ? 86 : 54;
		const lx = x + n.lvl * 34;
		const o = prog(f, at, 12);
		const parentY = n.lvl === 1 ? y : lastL1y + 40;
		if (n.lvl === 1) lastL1y = ty;
		const isHi = hi === n.key && f >= hiAt;
		const thumbs = nodes[n.key as keyof TreeShow] ?? [];
		rows.push(
			<g key={i} opacity={o}>
				{n.lvl > 0 ? <path d={`M${lx - 22},${parentY + 10} L${lx - 22},${ty - 12} L${lx - 6},${ty - 12}`} fill="none" stroke={n.color} strokeWidth={3} strokeLinecap="round" /> : null}
				{isHi ? <rect x={lx - 10} y={ty - 40} width={424 - n.lvl * 34 + 6} height={n.sub ? 86 : 54} rx={12} fill={n.color === PURE ? '#e7ecf6' : '#fbefd9'} opacity={prog(f, hiAt, 12)} /> : null}
				<Sx x={lx} y={ty} text={n.label} size={n.lvl === 0 ? 36 : 34} color={n.color} weight={800} at={-1000} />
				{n.sub ? <Sx x={lx} y={ty + 38} text={n.sub} size={30} color={n.color} weight={600} at={-1000} /> : null}
				{thumbs.map((p, k) => { const m = plateMap(p, 0, 0, 52); return <Plate key={k} p={p} x={x + 424 - (thumbs.length - k) * (m.w + 10)} y={ty - 42} h={52} />; })}
			</g>,
		);
	});
	return <g>{rows}</g>;
};
export {useMemo};
void FONT_HAND; void Countdown; void PauseHold; void Card; void Move; void kf; void lerp; void Framed; void Readout; void Rich; void StrikeLine; void TickMark; void PenArrow; void PenRing; void Chip; void Fade; void GREEN; void RED; void INK_SOFT; void AMB; void richW; void chipW; void tw;
