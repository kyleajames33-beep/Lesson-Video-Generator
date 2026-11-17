// Year 11 Advanced kit, wave 2 (brief 245, maths-a11-kit-needs.md trigonometry item 2): StudioTriangle and its
// companions for t01, t02a, t02b, t05, t06, t07, t10 to t14a. One labelled triangle built from side and angle data
// (SAS, SSS, right-angled, the two special-triangle presets, or a frame function for hinge, limit and scale modes),
// with side colours relative to a focus angle (opposite amber, adjacent violet, hypotenuse ink) and the words
// "opposite" and "adjacent" sliding across when the focus swaps, sine-rule pair colours, a perpendicular drop with
// its foot, the split base x and b − x and each half lit in turn, squares on the sides, and short sides greying
// out. Companions: SSAConstruction (t07's arc from C crossing the ray from A twice, once or not at all), HingeBars
// (t06's c² bar against a² + b²), MinutesDial and fmtDMS (t05's degrees and minutes), fmtLimit (t11's readouts).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, fmtNum, niceNum, smooth, vis} from './primitives';
import {MATH_EXCLUDED, MATH_ROLES, RoleColours, RoleKey} from './roles';
import {TXT} from './plot-core';
import {Keyed, fmtDeg, keyedAt} from './a11-trig-circle';

const D2R = Math.PI / 180;
const MINUS = '−';
const haloText = (size: number, color: string, weight = 800): React.SVGProps<SVGTextElement> => ({style: TXT(size, color, weight), stroke: CARD, strokeWidth: 8, paintOrder: 'stroke'} as React.SVGProps<SVGTextElement>);
type Pt = readonly [number, number];
const sub = (p: Pt, q: Pt): [number, number] => [p[0] - q[0], p[1] - q[1]];
const len = (p: Pt) => Math.hypot(p[0], p[1]);
const lerp2 = (p: Pt, q: Pt, u: number): [number, number] => [p[0] + (q[0] - p[0]) * u, p[1] + (q[1] - p[1]) * u];

// =====================================================================================================
// Shapes and measures
// =====================================================================================================
export type Vtx = 'A' | 'B' | 'C';
export type SideName = 'a' | 'b' | 'c';
/** Vertices in maths units (y up). Side a = BC faces A, b = CA faces B, c = AB faces C. */
export type TriShape = {A: Pt; B: Pt; C: Pt};
/** A at the origin, C along the x-axis at distance b, B at distance c with angle A between them. */
export const triSAS = (b: number, c: number, Adeg: number): TriShape => ({A: [0, 0], C: [b, 0], B: [c * Math.cos(Adeg * D2R), c * Math.sin(Adeg * D2R)]});
/** From three sides (A at the origin, C along the x-axis). */
export const triSSS = (a: number, b: number, c: number): TriShape => {
	const x = (b * b + c * c - a * a) / (2 * b), y = Math.sqrt(Math.max(0, c * c - x * x));
	if (!(a + b > c && b + c > a && a + c > b)) throw new RangeError(`triSSS: ${a}, ${b}, ${c} is not a triangle`);
	return {A: [0, 0], C: [b, 0], B: [x, y]};
};
/** Right angle at C: the focus angle at A, adjacent AC along the x-axis, opposite CB vertical. */
export const triRight = (adj: number, opp: number): TriShape => ({A: [0, 0], C: [adj, 0], B: [adj, opp]});
/** Hinge at C: sides a (CB) and b (CA) fixed, the angle C between them (t06). */
export const triHinge = (a: number, b: number, Cdeg: number): TriShape => ({A: [0, 0], C: [b, 0], B: [b - a * Math.cos(Cdeg * D2R), a * Math.sin(Cdeg * D2R)]});
/** Hypotenuse fixed at `hyp`, the focus angle θ at A (t01 and t11 limit modes). */
export const triLimit = (thetaDeg: number, hyp = 1): TriShape => triRight(hyp * Math.cos(thetaDeg * D2R), hyp * Math.sin(thetaDeg * D2R));
/** Every side × k about A (t14a scale modes: divide t03's (cos θ, sin θ, 1) by cos θ or sin θ). */
export const triScale = (s: TriShape, k: number): TriShape => ({A: [s.A[0] * k, s.A[1] * k], B: [s.B[0] * k, s.B[1] * k], C: [s.C[0] * k, s.C[1] * k]});
/** t01's special triangles: the half-square (1, 1, √2; 45° at A) and the half-equilateral (1, √3, 2; 60° at A, 30° at B). */
export const TRI_PRESETS = {'half-square': triRight(1, 1), 'half-equilateral': triRight(1, Math.sqrt(3))} as const;
/** Side lengths (a, b, c) and angles (A, B, C in degrees). */
export const triMeasure = (s: TriShape) => {
	const a = len(sub(s.B, s.C)), b = len(sub(s.C, s.A)), c = len(sub(s.A, s.B));
	const ang = (p: Pt, q: Pt, r: Pt) => {const u = sub(q, p), v = sub(r, p); return Math.acos(Math.max(-1, Math.min(1, (u[0] * v[0] + u[1] * v[1]) / (len(u) * len(v))))) / D2R;};
	return {a, b, c, A: ang(s.A, s.B, s.C), B: ang(s.B, s.C, s.A), C: ang(s.C, s.A, s.B)};
};
const OPP: Record<Vtx, SideName> = {A: 'a', B: 'b', C: 'c'};
const ENDS: Record<SideName, [Vtx, Vtx]> = {a: ['B', 'C'], b: ['C', 'A'], c: ['A', 'B']};
/** Sides relative to a focus angle: opposite, adjacent and hypotenuse (null when there is no right angle). */
export const focusSides = (s: TriShape, focus: Vtx) => {
	const m = triMeasure(s), right = (['A', 'B', 'C'] as Vtx[]).find(v => Math.abs(m[v] - 90) < 0.5) ?? null;
	const opp = OPP[focus], hyp = right ? OPP[right] : null;
	const adj = (['a', 'b', 'c'] as SideName[]).find(n => n !== opp && n !== hyp) ?? null;
	return {opp, adj: hyp ? adj : null, hyp};
};
/** Foot of the perpendicular from vertex V to the line through the other two (t05, t06). */
export const dropFoot = (s: TriShape, V: Vtx) => {
	const [p, q] = ENDS[OPP[V]], P = s[p], Q = s[q], d = sub(Q, P), w = sub(s[V], P);
	const t = (w[0] * d[0] + w[1] * d[1]) / (d[0] * d[0] + d[1] * d[1]);
	return {t, foot: lerp2(P, Q, t), h: len(sub(s[V], lerp2(P, Q, t))), from: p, to: q};
};

export type SideSpec = {text?: string | ((length: number) => string); role?: RoleKey; color?: string; at?: number; out?: number; size?: number; glow?: readonly [number, number]};
export type AngleSpec = {text?: string | ((deg: number) => string); role?: RoleKey; color?: string; at?: number; out?: number; size?: number; radius?: number; fill?: boolean; ring?: {at: number; out?: number}};

/**
 * A labelled triangle drawn from computed vertices. (x, y) is the frame position of the maths origin, `unit` px
 * per unit, y up. `shape` may be a function of the frame (hinge, limit and scale modes: use triHinge, triLimit or
 * scale a shape). `focus` is a sequence of focus vertices: the opposite side turns amber, the adjacent violet and
 * the hypotenuse ink, and with `focusWords` the words slide from side to side when the focus moves (20 frames).
 * `pairs` colours each side with its opposite angle (a and A amber, b and B violet, c and C blue). `drop` draws
 * the perpendicular from a vertex (dashed ink, right-angle mark, h and foot labels; the base extended dashed when
 * the foot falls outside), `split` labels the two base pieces (x and b − x, violet) and `light` tints each half in
 * turn. `squares` draws a square on each side. Sides shorter than `fadeShort` units grey out (t11's vanishing
 * side). Right angles get a square mark automatically.
 */
export const StudioTriangle: React.FC<{
	x: number; y: number; unit: number; shape: TriShape | ((f: number) => TriShape); at?: number; out?: number;
	vertices?: false | {names?: readonly [string, string, string]; at?: number; size?: number};
	sides?: Partial<Record<SideName, SideSpec>>; angles?: Partial<Record<Vtx, AngleSpec>>;
	focus?: readonly {vertex: Vtx; at: number}[]; focusWords?: boolean | {at: number};
	pairs?: {at: number; out?: number};
	drop?: {from: Vtx; at: number; out?: number; h?: string; foot?: string; split?: {at: number; labels?: readonly [string, string]}; light?: readonly {half: 'left' | 'right'; at: number; out?: number}[]};
	squares?: {at: number; out?: number}; fadeShort?: number; fill?: {at: number; out?: number; color?: string}; strokeWidth?: number;
}> = ({x, y, unit, shape, at = 0, out, vertices = {}, sides = {}, angles = {}, focus, focusWords = false, pairs, drop, squares, fadeShort = 0, fill, strokeWidth = 6}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const s = typeof shape === 'function' ? shape(f) : shape, m = triMeasure(s);
	const F = (p: Pt): [number, number] => [x + p[0] * unit, y - p[1] * unit];
	const V: Record<Vtx, [number, number]> = {A: F(s.A), B: F(s.B), C: F(s.C)};
	const G: [number, number] = [(V.A[0] + V.B[0] + V.C[0]) / 3, (V.A[1] + V.B[1] + V.C[1]) / 3];
	const outward = (p: Pt, q: Pt, d: number): [number, number] => {
		const mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2, dx = q[0] - p[0], dy = q[1] - p[1], L = Math.hypot(dx, dy) || 1;
		let nx = -dy / L, ny = dx / L;
		if ((mx + nx - G[0]) ** 2 + (my + ny - G[1]) ** 2 < (mx - nx - G[0]) ** 2 + (my - ny - G[1]) ** 2) {nx = -nx; ny = -ny;}
		return [mx + nx * d, my + ny * d];
	};
	// focus state with a slide between the previous and current assignment
	let cur: ReturnType<typeof focusSides> | null = null, prev: ReturnType<typeof focusSides> | null = null, swapU = 1;
	if (focus?.length) {
		const live = focus.filter(q => f >= q.at);
		if (live.length) {
			cur = focusSides(s, live[live.length - 1].vertex);
			if (live.length > 1) {prev = focusSides(s, live[live.length - 2].vertex); swapU = smooth((f - live[live.length - 1].at) / 20);}
		}
	}
	const pairRole: Record<SideName, RoleColours> = {a: MATH_ROLES.k, b: MATH_ROLES.gradient, c: MATH_ROLES.a};
	const po = pairs ? vis(f, pairs.at, pairs.out, 12) : 0;
	const sideColour = (n: SideName): string => {
		const sp = sides[n];
		if (sp?.color) return sp.color;
		if (sp?.role) return MATH_ROLES[sp.role].stroke;
		if (cur) return n === cur.opp ? MATH_ROLES.k.stroke : n === cur.adj ? MATH_ROLES.gradient.stroke : INK;
		if (po > 0.5) return pairRole[n].stroke;
		return INK;
	};
	const sideInk = (n: SideName): string => {
		const sp = sides[n];
		if (sp?.color) return sp.color;
		if (sp?.role) return MATH_ROLES[sp.role].ink;
		if (cur) return n === cur.opp ? MATH_ROLES.k.ink : n === cur.adj ? MATH_ROLES.gradient.ink : INK;
		if (po > 0.5) return pairRole[n].ink;
		return INK;
	};
	const els: React.ReactNode[] = [];
	if (fill) {const fo = vis(f, fill.at, fill.out, 12); if (fo > 0) els.push(<path key="fill" d={`M${V.A[0]},${V.A[1]} L${V.B[0]},${V.B[1]} L${V.C[0]},${V.C[1]} Z`} fill={fill.color ?? MATH_ROLES.answer.soft} opacity={fo} />);}
	if (squares) {
		const so = vis(f, squares.at, squares.out, 14);
		if (so > 0) (['a', 'b', 'c'] as SideName[]).forEach(n => {
			const [p, q] = ENDS[n], P = V[p], Q = V[q], dx = Q[0] - P[0], dy = Q[1] - P[1];
			let nx = -dy, ny = dx;
			const mx = (P[0] + Q[0]) / 2, my = (P[1] + Q[1]) / 2;
			if ((mx + nx * 0.01 - G[0]) ** 2 + (my + ny * 0.01 - G[1]) ** 2 < (mx - G[0]) ** 2 + (my - G[1]) ** 2) {nx = -nx; ny = -ny;}
			els.push(<path key={'sq' + n} d={`M${P[0]},${P[1]} L${Q[0]},${Q[1]} L${Q[0] + nx},${Q[1] + ny} L${P[0] + nx},${P[1] + ny} Z`} fill={MATH_ROLES[cur && n === cur.opp ? 'k' : cur && n === cur.adj ? 'gradient' : 'height'].soft} stroke={sideColour(n)} strokeWidth={3} opacity={0.75 * so} />);
		});
	}
	// drop: halves first (under the edges)
	let dropEls: React.ReactNode = null;
	if (drop) {
		const dO = vis(f, drop.at, drop.out, 12);
		if (dO > 0) {
			const ft = dropFoot(s, drop.from), Fp = F(ft.foot), Vp = V[drop.from], P = V[ft.from], Q = V[ft.to];
			const leftEnd = P[0] <= Q[0] ? ft.from : ft.to, rightEnd = leftEnd === ft.from ? ft.to : ft.from;
			const halves = (drop.light ?? []).map((l, i) => {
				const lo = vis(f, l.at, l.out, 10), E = V[l.half === 'left' ? leftEnd : rightEnd];
				return lo > 0 ? <path key={'h' + i} d={`M${Vp[0]},${Vp[1]} L${Fp[0]},${Fp[1]} L${E[0]},${E[1]} Z`} fill={l.half === 'left' ? MATH_ROLES.a.soft : MATH_ROLES.k.soft} opacity={lo} /> : null;
			});
			const outside = ft.t < 0 || ft.t > 1, near = ft.t < 0 ? P : Q;
			const ux = (Vp[0] - Fp[0]) / (Math.hypot(Vp[0] - Fp[0], Vp[1] - Fp[1]) || 1), uy = (Vp[1] - Fp[1]) / (Math.hypot(Vp[0] - Fp[0], Vp[1] - Fp[1]) || 1);
			const bx = (Q[0] - P[0]) / (Math.hypot(Q[0] - P[0], Q[1] - P[1]) || 1), by = (Q[1] - P[1]) / (Math.hypot(Q[0] - P[0], Q[1] - P[1]) || 1);
			const sgn = ft.t > 0.5 ? -1 : 1, mk = 20;
			const split = drop.split ? vis(f, drop.split.at, undefined, 12) : 0;
			const labs = drop.split?.labels ?? ['x', `${'b'} ${MINUS} x`];
			const lp = outward(P, Fp, 40), rp = outward(Fp, Q, 40);
			dropEls = <g key="drop" opacity={dO}>
				{halves}
				{outside ? <line x1={near[0]} y1={near[1]} x2={Fp[0]} y2={Fp[1]} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 8" /> : null}
				<line x1={Vp[0]} y1={Vp[1]} x2={Fp[0]} y2={Fp[1]} stroke={INK} strokeWidth={4} strokeDasharray="14 9" />
				<path d={`M${Fp[0] + bx * mk * sgn},${Fp[1] + by * mk * sgn} L${Fp[0] + bx * mk * sgn + ux * mk},${Fp[1] + by * mk * sgn + uy * mk} L${Fp[0] + ux * mk},${Fp[1] + uy * mk}`} fill="none" stroke={INK} strokeWidth={3} />
				{drop.h ? <text x={(Vp[0] + Fp[0]) / 2 + 16} y={(Vp[1] + Fp[1]) / 2 + 12} {...haloText(38, INK)}>{drop.h}</text> : null}
				{drop.foot ? <text x={Fp[0]} y={Fp[1] + 46} textAnchor="middle" {...haloText(34, INK)}>{drop.foot}</text> : null}
				{split > 0 ? <g opacity={split}>
					<line x1={P[0]} y1={P[1]} x2={Fp[0]} y2={Fp[1]} stroke={MATH_ROLES.gradient.stroke} strokeWidth={10} opacity={0.45} />
					<line x1={Fp[0]} y1={Fp[1]} x2={Q[0]} y2={Q[1]} stroke={MATH_ROLES.gradient.stroke} strokeWidth={10} opacity={0.25} />
					<text x={lp[0]} y={lp[1] + 26} textAnchor="middle" {...haloText(36, MATH_ROLES.gradient.ink)}>{ft.from === leftEnd ? labs[0] : labs[1]}</text>
					<text x={rp[0]} y={rp[1] + 26} textAnchor="middle" {...haloText(36, MATH_ROLES.gradient.ink)}>{ft.from === leftEnd ? labs[1] : labs[0]}</text>
				</g> : null}
			</g>;
		}
	}
	els.push(dropEls);
	// edges
	(['a', 'b', 'c'] as SideName[]).forEach(n => {
		const [p, q] = ENDS[n], P = V[p], Q = V[q], short = fadeShort > 0 ? Math.max(0, Math.min(1, m[n] / fadeShort)) : 1;
		const sp = sides[n], glow = sp?.glow ? vis(f, sp.glow[0], sp.glow[1], 10) : 0;
		els.push(<g key={'e' + n}>
			{glow > 0 ? <line x1={P[0]} y1={P[1]} x2={Q[0]} y2={Q[1]} stroke={MATH_ROLES.k.soft} strokeWidth={26} strokeLinecap="round" opacity={glow} /> : null}
			<line x1={P[0]} y1={P[1]} x2={Q[0]} y2={Q[1]} stroke={short < 1 ? MATH_EXCLUDED : sideColour(n)} strokeWidth={strokeWidth * (0.4 + 0.6 * short)} strokeLinecap="round" opacity={0.35 + 0.65 * short} />
		</g>);
	});
	// angles
	(['A', 'B', 'C'] as Vtx[]).forEach(v => {
		const sp = angles[v], isRight = Math.abs(m[v] - 90) < 0.5;
		const others = (['A', 'B', 'C'] as Vtx[]).filter(w => w !== v), P = V[v];
		const u1 = sub(V[others[0]], P), u2 = sub(V[others[1]], P), l1 = len(u1) || 1, l2 = len(u2) || 1;
		if (isRight && (sp === undefined || sp.text === undefined)) {
			const k = 26, a1: [number, number] = [P[0] + (u1[0] / l1) * k, P[1] + (u1[1] / l1) * k], a2: [number, number] = [P[0] + (u2[0] / l2) * k, P[1] + (u2[1] / l2) * k];
			els.push(<path key={'rt' + v} d={`M${a1[0]},${a1[1]} L${a1[0] + a2[0] - P[0]},${a1[1] + a2[1] - P[1]} L${a2[0]},${a2[1]}`} fill="none" stroke={INK} strokeWidth={3} />);
		}
		if (!sp) return;
		const ao = vis(f, sp.at ?? at, sp.out, 12);
		if (ao <= 0) return;
		const C = sp.color ? {ink: sp.color, stroke: sp.color, soft: 'none'} : sp.role ? MATH_ROLES[sp.role] : po > 0.5 ? pairRole[OPP[v]] : MATH_ROLES.a;
		const rr = sp.radius ?? 54, t1 = Math.atan2(-u1[1], u1[0]), t2 = Math.atan2(-u2[1], u2[0]);
		let d0 = t1, d1 = t2;
		let diff = d1 - d0; while (diff > Math.PI) diff -= 2 * Math.PI; while (diff < -Math.PI) diff += 2 * Math.PI;
		d1 = d0 + diff;
		const n = 20; let dpath = '';
		for (let i = 0; i <= n; i++) {const a = d0 + (diff * i) / n; dpath += `${i ? 'L' : 'M'}${(P[0] + rr * Math.cos(a)).toFixed(1)},${(P[1] - rr * Math.sin(a)).toFixed(1)} `;}
		const bis = d0 + diff / 2, tr = rr + 36 + (m[v] < 40 ? 30 : 0);
		const txt = typeof sp.text === 'function' ? sp.text(m[v]) : sp.text ?? fmtDeg(m[v]);
		const ring = sp.ring ? vis(f, sp.ring.at, sp.ring.out, 10) : 0;
		els.push(<g key={'an' + v} opacity={ao}>
			{sp.fill !== false && !isRight ? <path d={`M${P[0]},${P[1]} ${dpath.replace(/^M/, 'L')} Z`} fill={C.soft === 'none' ? 'none' : C.soft} opacity={0.8} /> : null}
			{!isRight || sp.text !== undefined ? <path d={dpath} fill="none" stroke={C.stroke} strokeWidth={5} /> : null}
			<text x={P[0] + tr * Math.cos(bis)} y={P[1] - tr * Math.sin(bis) + 12} textAnchor="middle" {...haloText(sp.size ?? 38, C.ink)}>{txt}</text>
			{ring > 0 ? <circle cx={P[0] + tr * Math.cos(bis)} cy={P[1] - tr * Math.sin(bis)} r={40} fill="none" stroke={C.stroke} strokeWidth={4} opacity={ring} /> : null}
		</g>);
	});
	// side labels and focus words
	(['a', 'b', 'c'] as SideName[]).forEach(n => {
		const sp = sides[n];
		if (!sp) return;
		const so = vis(f, sp.at ?? at, sp.out, 12);
		if (so <= 0) return;
		const [p, q] = ENDS[n], pos = outward(V[p], V[q], 40), short = fadeShort > 0 ? Math.max(0, Math.min(1, m[n] / fadeShort)) : 1;
		const txt = typeof sp.text === 'function' ? sp.text(m[n]) : sp.text ?? niceNum(m[n]);
		els.push(<text key={'sl' + n} x={pos[0]} y={pos[1] + 14} opacity={so} textAnchor="middle" {...haloText(sp.size ?? 42, short < 0.6 ? MATH_EXCLUDED : sideInk(n))}>{txt}</text>);
	});
	const fw = typeof focusWords === 'object' ? vis(f, focusWords.at, undefined, 12) : focusWords ? 1 : 0;
	if (cur && fw > 0) {
		const wordPos = (st: ReturnType<typeof focusSides>, which: 'opp' | 'adj' | 'hyp') => {
			const n = st[which]; if (!n) return null;
			const [p, q] = ENDS[n], m0 = outward(V[p], V[q], 0), m1 = outward(V[p], V[q], 1), nx = m1[0] - m0[0], ny = m1[1] - m0[1];
			return Math.abs(nx) >= 0.5 ? [m0[0] + nx * 40 + Math.sign(nx) * 40, m0[1] + ny * 40] as [number, number] : [m0[0] + nx * 86, m0[1] + ny * 86] as [number, number];
		};
		const anchorOf = (st: ReturnType<typeof focusSides>, which: 'opp' | 'adj' | 'hyp'): 'start' | 'middle' | 'end' => {
			const n = st[which]; if (!n) return 'middle';
			const [p, q] = ENDS[n], m0 = outward(V[p], V[q], 0), m1 = outward(V[p], V[q], 1), nx = m1[0] - m0[0];
			return Math.abs(nx) >= 0.5 ? (nx > 0 ? 'start' : 'end') : 'middle';
		};
		(['opp', 'adj', 'hyp'] as const).forEach(w => {
			const p1 = wordPos(cur!, w);
			if (!p1) return;
			const p0 = prev ? wordPos(prev, w) ?? p1 : p1, p = lerp2(p0, p1, swapU);
			const C = w === 'opp' ? MATH_ROLES.k.ink : w === 'adj' ? MATH_ROLES.gradient.ink : INK;
			els.push(<text key={'fw' + w} x={p[0]} y={p[1] + 12} opacity={fw} textAnchor={anchorOf(cur!, w)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, fill: C} as React.CSSProperties} stroke={CARD} strokeWidth={7} paintOrder="stroke">{w === 'opp' ? 'opposite' : w === 'adj' ? 'adjacent' : 'hypotenuse'}</text>);
		});
	}
	if (vertices !== false) {
		const vo = vis(f, vertices.at ?? at, undefined, 12), names = vertices.names ?? ['A', 'B', 'C'];
		(['A', 'B', 'C'] as Vtx[]).forEach((v, i) => {
			if (!names[i]) return;
			const P = V[v], dx = P[0] - G[0], dy = P[1] - G[1], L = Math.hypot(dx, dy) || 1;
			els.push(<text key={'vn' + v} x={P[0] + (dx / L) * 34} y={P[1] + (dy / L) * 34 + 14} opacity={vo} textAnchor="middle" {...haloText(vertices.size ?? 40, INK)}>{names[i]}</text>);
		});
	}
	return <FrameSvg style={{opacity: o}}>{els}</FrameSvg>;
};

// =====================================================================================================
// SSAConstruction (t07)
// =====================================================================================================
/** Where an arc of radius a from C = (b, 0) meets the ray from A at angle A: distances t along the ray. */
export const ssaCrossings = (Adeg: number, b: number, a: number, touchTol = 0.005) => {
	const h = b * Math.sin(Adeg * D2R), base = b * Math.cos(Adeg * D2R);
	if (a < h - touchTol) return {h, ts: [] as number[]};
	if (Math.abs(a - h) <= touchTol) return {h, ts: [base]};
	const r = Math.sqrt(a * a - h * h);
	return {h, ts: [base - r, base + r]};
};
/** Number of triangles with angle A, side b and side a (crossings behind A do not count). */
export const ssaCount = (Adeg: number, b: number, a: number) => ssaCrossings(Adeg, b, a).ts.filter(t => t > 1e-9).length;
/**
 * The ambiguous-case construction: angle A (amber) at the origin with its ray (the highway) and side b (violet)
 * from A to C fixed; the perpendicular from C to the ray dashed and labelled "b sin A ≈ …"; an amber arc of radius
 * `a` (keyed) swung from C, its crossings with the ray dotted (a crossing behind A greyed), each real triangle
 * shaded, a right-angle mark when it only touches, and a counter card of triangles.
 */
export const SSAConstruction: React.FC<{
	x: number; y: number; unit: number; A: number; b: number; a: Keyed; at?: number; out?: number; rayLength?: number;
	perpendicular?: {at: number; out?: number; label?: string}; counter?: {x: number; y: number; at?: number; label?: string}; shade?: boolean; labels?: boolean;
}> = ({x, y, unit, A, b, a: aK, at = 0, out, rayLength, perpendicular, counter, shade = true, labels = true}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const a = keyedAt(aK, f), {h, ts} = ssaCrossings(A, b, a), n = ts.filter(t => t > 1e-9).length;
	const P = (X: number, Y: number): [number, number] => [x + X * unit, y - Y * unit];
	const ux = Math.cos(A * D2R), uy = Math.sin(A * D2R), RL = rayLength ?? b * 1.6;
	const [ax, ay] = P(0, 0), [cx, cy] = P(b, 0), [rx, ry] = P(RL * ux, RL * uy), [bx0, by0] = P(-0.35 * b * ux, -0.35 * b * uy);
	const Am = MATH_ROLES.k, V = MATH_ROLES.gradient, base = b * ux;
	const [fx, fy] = P(base * ux, base * uy);
	const pO = perpendicular ? vis(f, perpendicular.at, perpendicular.out, 12) : 0;
	const tri = ts.map(t => ({t, p: P(t * ux, t * uy), real: t > 1e-9}));
	const fills = [MATH_ROLES.gradient.soft, '#efe8f8'];
	return <>
		<FrameSvg style={{opacity: o}}>
			{shade ? tri.filter(q => q.real).map((q, i) => <path key={'s' + i} d={`M${ax},${ay} L${cx},${cy} L${q.p[0]},${q.p[1]} Z`} fill={fills[i % 2]} opacity={0.75} />) : null}
			<line x1={bx0} y1={by0} x2={ax} y2={ay} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 8" />
			<line x1={ax} y1={ay} x2={rx} y2={ry} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			<line x1={ax} y1={ay} x2={cx} y2={cy} stroke={V.stroke} strokeWidth={8} strokeLinecap="round" />
			<path d={(() => {let d = ''; for (let i = 0; i <= 16; i++) {const t = (A * D2R * i) / 16; d += `${i ? 'L' : 'M'}${ax + 70 * Math.cos(t)},${ay - 70 * Math.sin(t)} `;} return d;})()} fill="none" stroke={Am.stroke} strokeWidth={5} />
			{labels ? <>
				<text x={ax + 110 * Math.cos((A * D2R) / 2)} y={ay - 110 * Math.sin((A * D2R) / 2) + 12} textAnchor="middle" {...haloText(36, Am.ink)}>{fmtDeg(A)}</text>
				<text x={(ax + cx) / 2} y={ay + 48} textAnchor="middle" {...haloText(38, V.ink)}>{`b = ${niceNum(b)}`}</text>
				<text x={ax - 18} y={ay + 44} textAnchor="end" {...haloText(38, INK)}>A</text>
				<text x={cx + 16} y={cy + 44} {...haloText(38, INK)}>C</text>
			</> : null}
			{pO > 0 ? <g opacity={pO}>
				<line x1={cx} y1={cy} x2={fx} y2={fy} stroke={INK} strokeWidth={3.5} strokeDasharray="12 9" />
				<text x={(cx + fx) / 2 + 18} y={(cy + fy) / 2} {...haloText(34, INK)}>{perpendicular?.label ?? `b sin A ≈ ${fmtNum(h, 2)}`}</text>
			</g> : null}
			{(() => {
				// the arc: the part of the circle of radius a about C facing the ray
				const R = a * unit, mid = Math.atan2(-(fy - cy), fx - cx);
				const rel = tri.map(q => {let t = Math.atan2(-(q.p[1] - cy), q.p[0] - cx) - mid; while (t > Math.PI) t -= 2 * Math.PI; while (t < -Math.PI) t += 2 * Math.PI; return t;});
				const pad = Math.min(0.45, 140 / Math.max(R, 1)), lo = Math.min(0, ...rel) - pad, hi = Math.max(0, ...rel) + pad;
				let d = '';
				for (let i = 0; i <= 48; i++) {const t = mid + lo + ((hi - lo) * i) / 48; d += `${i ? 'L' : 'M'}${(cx + R * Math.cos(t)).toFixed(1)},${(cy - R * Math.sin(t)).toFixed(1)} `;}
				// label a along the radius to the farthest real crossing, or along a dashed radius towards the ray when it misses
				const far = tri.filter(q => q.real).sort((u, v) => v.t - u.t)[0], la = far ? Math.atan2(-(far.p[1] - cy), far.p[0] - cx) : mid + 0.4;
				const lx = cx + R * 0.55 * Math.cos(la) + 22 * Math.sin(la), ly = cy - R * 0.55 * Math.sin(la) + 22 * Math.cos(la) + 12;
				return <><path d={d} fill="none" stroke={Am.stroke} strokeWidth={5} />
					{far ? null : <line x1={cx} y1={cy} x2={cx + R * Math.cos(la)} y2={cy - R * Math.sin(la)} stroke={Am.stroke} strokeWidth={4} strokeDasharray="10 8" />}
					{labels ? <text x={lx} y={ly} {...haloText(36, Am.ink)}>{`a = ${fmtNum(a, a % 1 === 0 ? 0 : 2)}`}</text> : null}</>;
			})()}
			{tri.map((q, i) => <g key={'x' + i}>
				{q.real ? <line x1={cx} y1={cy} x2={q.p[0]} y2={q.p[1]} stroke={Am.stroke} strokeWidth={6} /> : null}
				<circle cx={q.p[0]} cy={q.p[1]} r={13} fill={q.real ? INK : CARD} stroke={q.real ? CARD : MATH_EXCLUDED} strokeWidth={5} />
			</g>)}
			{ts.length === 1 && n === 1 && Math.abs(a - h) <= 0.005 ? (() => {const k = 20, [px, py] = tri[0].p, ex = (cx - px) / (Math.hypot(cx - px, cy - py) || 1), ey = (cy - py) / (Math.hypot(cx - px, cy - py) || 1);
				return <path d={`M${px - ux * k},${py + uy * k} L${px - ux * k + ex * k},${py + uy * k + ey * k} L${px + ex * k},${py + ey * k}`} fill="none" stroke={INK} strokeWidth={3} />;})() : null}
		</FrameSvg>
		{counter ? <div style={{position: 'absolute', left: counter.x, top: counter.y, opacity: vis(f, counter.at ?? at, out, 12), background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, border: `4px solid ${Am.stroke}`, padding: '8px 24px', textAlign: 'center'}}>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: Am.ink}}>{counter.label ?? 'triangles'}</div>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 64, color: Am.ink, lineHeight: 1.05}}>{n}</div>
		</div> : null}
	</>;
};

// =====================================================================================================
// HingeBars (t06), MinutesDial and formatters (t05, t11)
// =====================================================================================================
/** c² from the cosine rule for the hinge: a² + b² − 2ab cos C. */
export const hingeC2 = (a: number, b: number, Cdeg: number) => a * a + b * b - 2 * a * b * Math.cos(Cdeg * D2R);
/** A blue bar for c² against a grey line at a² + b² (the hinge's comparison), with live values. */
export const HingeBars: React.FC<{x: number; y: number; width?: number; height?: number; a: number; b: number; C: Keyed; max?: number; at?: number; out?: number}> = ({x, y, width = 240, height = 520, a, b, C: CK, max, at = 0, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const C = keyedAt(CK, f), c2 = hingeC2(a, b, C), ref = a * a + b * b, top = max ?? (a + b) ** 2 * 0.85;
	const h = (v: number) => (Math.max(0, v) / top) * (height - 70), base = y + height - 50;
	const cmp = Math.abs(c2 - ref) < 0.5 ? 'equal' : c2 < ref ? 'less' : 'more';
	const B = MATH_ROLES.a;
	return <FrameSvg style={{opacity: o}}>
		<line x1={x} x2={x + width} y1={base} y2={base} stroke={INK} strokeWidth={4} />
		<rect x={x + width * 0.25} y={base - h(c2)} width={width * 0.5} height={h(c2)} fill={B.soft} stroke={B.stroke} strokeWidth={4} />
		<line x1={x - 20} x2={x + width + 20} y1={base - h(ref)} y2={base - h(ref)} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="12 8" />
		<text x={x + width + 24} y={base - h(ref) + 10} {...haloText(30, INK_SOFT)}>{`a² + b² = ${niceNum(ref)}`}</text>
		<text x={x + width / 2} y={base - h(c2) - 16} textAnchor="middle" {...haloText(40, B.ink)}>{`c² = ${Math.round(c2)}`}</text>
		<text x={x + width / 2} y={base + 44} textAnchor="middle" {...haloText(32, INK)}>{cmp}</text>
	</FrameSvg>;
};
/** Decimal degrees as degrees and minutes, to the nearest minute: 43.8685 → "43°52′", 48.6 → "48°36′". */
export const fmtDMS = (deg: number) => {
	const sgn = deg < 0 ? MINUS : '', a = Math.abs(deg);
	let d = Math.floor(a), mm = Math.round((a - d) * 60);
	if (mm === 60) {d += 1; mm = 0;}
	return `${sgn}${d}°${String(mm).padStart(2, '0')}′`;
};
/** A readout that passes `cap` reads "→ no limit" (t11's overflow); otherwise `digits` decimals. */
export const fmtLimit = (v: number, cap = 1000, digits = 2) => (!Number.isFinite(v) || Math.abs(v) > cap ? '→ no limit' : fmtNum(v, digits));
/**
 * The minutes dial (t05 simulation 3): a ring of 60 ticks that fill (amber) to the minutes in the fractional part
 * of `deg` (keyed), with the readout "0.87° × 60 ≈ 52′" and the degrees-and-minutes value under it.
 */
export const MinutesDial: React.FC<{cx: number; cy: number; r?: number; deg: Keyed; at?: number; out?: number; fill?: Keyed}> = ({cx, cy, r = 150, deg: dK, at = 0, out, fill}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const deg = keyedAt(dK, f), frac = deg - Math.floor(deg), mins = frac * 60, shown = fill === undefined ? Math.round(mins) : Math.round(keyedAt(fill, f) * Math.round(mins));
	const Am = MATH_ROLES.k;
	return <FrameSvg style={{opacity: o}}>
		<circle cx={cx} cy={cy} r={r + 26} fill={CARD} stroke="rgba(60,45,20,0.12)" strokeWidth={3} />
		{Array.from({length: 60}, (_, i) => {const t = Math.PI / 2 - (i / 60) * 2 * Math.PI, on = i < shown, L = i % 5 === 0 ? 26 : 16;
			return <line key={i} x1={cx + (r - L) * Math.cos(t)} y1={cy - (r - L) * Math.sin(t)} x2={cx + r * Math.cos(t)} y2={cy - r * Math.sin(t)} stroke={on ? Am.stroke : '#d8d0c2'} strokeWidth={on ? 6 : 4} strokeLinecap="round" />;})}
		<text x={cx} y={cy - 6} textAnchor="middle" {...haloText(46, Am.ink)}>{`${shown}′`}</text>
		<text x={cx} y={cy + 40} textAnchor="middle" {...haloText(30, INK_SOFT, 700)}>{`${fmtNum(frac, 2)}° × 60`}</text>
	</FrameSvg>;
};

// =====================================================================================================
// Module-load self checks on the designs' numbers
// =====================================================================================================
{
	const near = (a: number, b: number, tol: number, what: string) => {if (!(Math.abs(a - b) <= tol)) throw new Error(`a11-trig-triangle self check (${what}): ${a} vs ${b}`);};
	// t01: the limit readout at 30°, 45°, 60° is 0.5000, 0.7071, 0.8660; the presets' angles.
	[[30, '0.5000'], [45, '0.7071'], [60, '0.8660']].forEach(([d, s]) => {const t = triLimit(d as number); if (fmtNum(t.B[1], 4) !== s) throw new Error(`a11-trig-triangle self check: sin ${d}`);});
	near(triMeasure(TRI_PRESETS['half-square']).A, 45, 1e-9, 'half-square'); near(triMeasure(TRI_PRESETS['half-equilateral']).B, 30, 1e-9, 'half-equilateral');
	near(triMeasure(TRI_PRESETS['half-equilateral']).c, 2, 1e-12, 'half-equilateral hypotenuse 2');
	near(triMeasure(TRI_PRESETS['half-square']).c, Math.SQRT2, 1e-12, 'half-square hypotenuse √2');
	// t05: BC = 8 sin 65° ÷ sin 45° ≈ 10.3, AC ≈ 10.6; B = sin⁻¹(7 sin 63° ÷ 9) ≈ 43°52′; DMS checks.
	near(Number(fmtNum((8 * Math.sin(65 * D2R)) / Math.sin(45 * D2R), 1)), 10.3, 0, 't05 BC'); near(Number(fmtNum((8 * Math.sin(70 * D2R)) / Math.sin(45 * D2R), 1)), 10.6, 0, 't05 AC');
	if (fmtDMS(Math.asin((7 * Math.sin(63 * D2R)) / 9) / D2R) !== '43°52′' || fmtDMS(48.6) !== '48°36′' || fmtDMS(38.4) !== '38°24′' || fmtDMS(130.54) !== '130°32′') throw new Error('a11-trig-triangle self check: fmtDMS');
	// t05 perpendicular mode: a ÷ sin A = b ÷ sin B = c ÷ sin C on an obtuse shape.
	{const s = triSAS(7, 4, 118), mm = triMeasure(s), r1 = mm.a / Math.sin(mm.A * D2R), r2 = mm.b / Math.sin(mm.B * D2R), r3 = mm.c / Math.sin(mm.C * D2R); near(r1, r2, 1e-9, 'sine rule'); near(r2, r3, 1e-9, 'sine rule');}
	// t06: the hinge reads 117, 225 and 333; c ≈ 9.9 for 11, 7, 62°; the 5, 6, 10 triangle's largest angle 130°32′.
	[[60, 117], [90, 225], [120, 333]].forEach(([C, v]) => near(Math.round(hingeC2(12, 9, C)), v, 0, 't06 hinge'));
	near(triMeasure(triHinge(12, 9, 120)).c, Math.sqrt(333), 1e-9, 't06 hinge shape');
	near(Number(fmtNum(Math.sqrt(hingeC2(11, 7, 62)), 1)), 9.9, 0, 't06 c');
	if (fmtDMS(triMeasure(triSSS(5, 6, 10)).C) !== '130°32′') throw new Error('a11-trig-triangle self check: t06 largest angle');
	// t07: A = 40°, b = 9: 0, 1, 2, 1 triangles at a = 5, 5.785, 7, 10, and two exactly when b sin A < a < b.
	[[5, 0], [5.785, 1], [7, 2], [10, 1]].forEach(([a, c]) => {if (ssaCount(40, 9, a) !== c) throw new Error(`a11-trig-triangle self check: SSA a = ${a}`);});
	{const h = 9 * Math.sin(40 * D2R); for (const a of [6, 7, 8, 8.9]) if ((h < a && a < 9) !== (ssaCount(40, 9, a) === 2)) throw new Error('a11-trig-triangle self check: b sin A < a < b');}
	// t13: the focus swap trades opposite and adjacent; t11: the overflow readout.
	{const s = triRight(Math.sqrt(3), 1), f1 = focusSides(s, 'A'), f2 = focusSides(s, 'B'); if (f1.opp !== f2.adj || f1.adj !== f2.opp || f1.hyp !== 'c') throw new Error('a11-trig-triangle self check: focus swap');}
	if (fmtLimit(1145.9) !== '→ no limit' || fmtLimit(572.96) !== '572.96') throw new Error('a11-trig-triangle self check: fmtLimit');
	// t14a: rescaling t03's triangle (cos θ, sin θ, 1) by 1/cos θ gives (1, tan θ, sec θ).
	{const th = 35, s = triLimit(th), k = 1 / Math.cos(th * D2R), mm = triMeasure(s); near(mm.b * k, 1, 1e-12, 't14a adj'); near(mm.a * k, Math.tan(th * D2R), 1e-12, 't14a tan'); near(mm.c * k, 1 / Math.cos(th * D2R), 1e-12, 't14a sec');}
}
