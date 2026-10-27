// M7 B10 drawing parts: the control board (b03's route chain with a fourth station, "can it be infected?", plates at
// the stations and break marks; placed by a uniform scale), the case timeline (a day strip with bracketed windows),
// the contact network (abstract host circles joined by contact lines: grey can be infected, a teal ring is immune,
// amber is infected; pulses run along lines and stop at immune circles), a dashed break, a chip row and the sign face
// text. B03 (M7) parts are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, BreakMark, CARD, CTag, Chain, DrawPath, Drift, EDGE, GREYT, GREY_INK, GTag, INK, INK_SOFT, Pl, PlateB, Sx, TEAL, TERRA, WText, clamp01, fitW, lerp, prog,
	pulse, rng, smooth, stX, tw, vis,
} from '../bio-m7-b03/parts';
import type {PB} from '../bio-m7-b03/parts';
import {MistakeChip, PlainArrow, Ring} from '../bio-m5-b06b/shared';
import {CardBox} from '../bio-m6-b01/parts';
import {PLATES, SIGN_FACE} from './assets';

export {
	AMBER, AMBER_INK, BreakMark, CARD, CTag, Chain, DrawPath, Drift, EDGE, GREYT, GREY_INK, GTag, INK, INK_SOFT, Pl, PlateB, Sx, TEAL, TERRA, WText, clamp01, fitW, lerp, prog,
	pulse, rng, smooth, stX, tw, vis, MistakeChip, PlainArrow, Ring, CardBox,
};
export type {PB};
export type Pt = [number, number];
export const TEAL_SOFT = '#d6ecee';
export const HEAD = 'How can hygiene and quarantine interrupt spread?';

// ---------- the control board ----------
export const CH = {lx: 300, rx: 1380, y: 470, r: 80};
export const SX = stX(CH.lx, CH.rx, CH.r);
export const SY = CH.y + CH.r + 74;
export const ST4: Pt = [1620, CH.y];
/** Plate anchor above each station (leave, travel, enter, can it be infected?). */
export const ST_PLATE: Pt[] = [[SX[0], 335], [SX[1], 335], [SX[2], 335], [ST4[0], 352]];
export type BoardPlate = {p: PB; at: Pt; w: number; h?: number; o?: number; dim?: number};
export type BoardP = {
	s?: number; ox?: number; oy?: number; o?: number;
	leftO?: number; laneP?: number; rightO?: number; leftGone?: number; glyphO?: number;
	st?: [number, number, number]; stLit?: [number, number, number];
	st4?: number; st4Lit?: number; st4Glow?: number;
	plates?: BoardPlate[];
	children?: React.ReactNode;
};
export const boardPt = (b: BoardP, p: Pt): Pt => [(b.ox ?? 0) + p[0] * (b.s ?? 1), (b.oy ?? 0) + p[1] * (b.s ?? 1)];
export const Board: React.FC<BoardP> = ({s = 1, ox = 0, oy = 0, o = 1, leftO = 1, laneP = 1, rightO = 1, leftGone = 0, glyphO = 1, st = [1, 1, 1], stLit = [0, 0, 0], st4 = 1, st4Lit = 0, st4Glow = 0, plates = [], children}) => {
	if (o <= 0.01) return null;
	const lit4 = clamp01(st4Lit) > 0.5;
	const w4 = tw('can it be infected?', 26, true) + 40;
	return (
		<g opacity={o} transform={`translate(${ox},${oy}) scale(${s})`}>
			<Chain {...CH} leftO={leftO} laneP={laneP} rightO={rightO} leftGone={leftGone} glyphO={glyphO} st={st} stLit={stLit} stColor={[AMBER, AMBER, TEAL]} />
			{st4 > 0.01 ? (
				<g opacity={st4}>
					<line x1={CH.rx + CH.r + 6} x2={ST4[0] - w4 / 2 - 6} y1={CH.y} y2={CH.y} stroke={GREYT} strokeWidth={3} strokeDasharray="6 6" />
					{st4Glow > 0.01 ? <rect x={ST4[0] - w4 / 2 - 10} y={CH.y - 32} width={w4 + 20} height={64} rx={32} fill={GREYT} opacity={0.35 * st4Glow} /> : null}
					<rect x={ST4[0] - w4 / 2} y={CH.y - 22} width={w4} height={44} rx={22} fill={lit4 ? '#eef7f7' : '#f3f2ee'} stroke={lit4 ? TEAL : GREYT} strokeWidth={lit4 ? 3.5 : 2} />
					<Sx x={ST4[0]} y={CH.y + 9} text="can it be infected?" size={26} color={lit4 ? INK : GREY_INK} hand weight={700} anchor="middle" at={-100} />
				</g>
			) : null}
			{plates.map((pl, i) => (pl.o ?? 1) > 0.01 ? <Pl key={i} p={pl.p} cx={pl.at[0]} cy={pl.at[1]} w={fitW(pl.p, pl.w, pl.h ?? pl.w)} o={pl.o ?? 1} dim={pl.dim ?? 0} /> : null)}
			{children}
		</g>
	);
};
/** A dashed zigzag break (quarantine: the people may not be infected). */
export const DashBreak: React.FC<{x: number; y: number; h?: number; at: number; color?: string; out?: number}> = ({x, y, h = 90, at, color = TERRA, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 8);
	if (f < at || o <= 0.01) return null;
	const d = [-0.5, -0.3, -0.1, 0.1, 0.3, 0.5].map((t, i) => `${i ? 'L' : 'M'}${x + (i % 2 ? 16 : -16)},${y + t * h}`).join(' ');
	return <g opacity={o}><DrawPath d={d} at={at} dur={12} color={color} width={7} dash="12 9" /></g>;
};
/** Coded text set on the quarantine sign's blank face (the plate drawn at cx, cy, w). */
export const SignText: React.FC<{cx: number; cy: number; w: number; text: string; o?: number}> = ({cx, cy, w, text, o = 1}) => {
	if (o <= 0.01) return null;
	const k = w / (PLATES.sign.box[2] - PLATES.sign.box[0]);
	const bx = (PLATES.sign.box[0] + PLATES.sign.box[2]) / 2, by = (PLATES.sign.box[1] + PLATES.sign.box[3]) / 2;
	const x = cx + (SIGN_FACE.c[0] - bx) * k, y = cy + (SIGN_FACE.c[1] - by) * k;
	const size = Math.min((SIGN_FACE.w * k) / (text.length * 0.62), w * 0.2);
	return <Sx x={x} y={y + size * 0.36} text={text} size={size} color="#2b2620" weight={800} anchor="middle" at={-100} opacity={o} />;
};

// ---------- the case timeline ----------
export type TL = {x0: number; x1: number; y: number; days: number};
export const tlx = (t: TL, d: number) => t.x0 + (d / t.days) * (t.x1 - t.x0);
export const Timeline: React.FC<{t: TL; at: number; o?: number; label?: string; step?: number}> = ({t, at, o = 1, label = 'days after infection', step = 2}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16) * o;
	if (p <= 0.01) return null;
	const ticks = Array.from({length: Math.floor(t.days / step) + 1}, (_, i) => i * step);
	return (
		<g opacity={p}>
			<DrawPath d={`M${t.x0},${t.y} L${t.x1},${t.y}`} at={at} dur={18} color={INK_SOFT} width={3.5} />
			{ticks.map(d => <g key={d}><line x1={tlx(t, d)} x2={tlx(t, d)} y1={t.y} y2={t.y + 9} stroke={INK_SOFT} strokeWidth={3} /><Sx x={tlx(t, d)} y={t.y + 32} text={`${d}`} size={20} color={GREY_INK} weight={600} anchor="middle" at={-100} /></g>)}
			<Sx x={t.x1} y={t.y + 60} text={label} size={22} color={GREY_INK} weight={600} anchor="end" at={-100} />
		</g>
	);
};
/** A window [d0, d1] on the timeline at screen y (above the axis), labelled; `dash` for a planned window. */
export const TLBr: React.FC<{t: TL; d0: number; d1: number; y: number; label?: string; at: number; color?: string; dim?: number; dash?: boolean; out?: number; size?: number; labelX?: number; fill?: number}> = ({t, d0, d1, y, label, at, color = AMBER_INK, dim = 0, dash = false, out, size = 22, labelX, fill = 0}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (f < at || o <= 0.01) return null;
	const a = tlx(t, d0), b = tlx(t, d1);
	const col = clamp01(dim) > 0.5 ? GREY_INK : color;
	return (
		<g opacity={o}>
			{fill > 0.01 ? <rect x={a} y={y - 4} width={b - a} height={t.y - y + 4} fill={col} opacity={0.12 * fill} /> : null}
			<DrawPath d={`M${a},${y + 12} L${a},${y} L${b},${y} L${b},${y + 12}`} at={at} dur={14} color={col} width={4} dash={dash ? '10 8' : undefined} />
			{label ? <Sx x={labelX ?? (a + b) / 2} y={y - 10} text={label} size={size} color={col} weight={700} anchor={labelX === undefined ? 'middle' : 'start'} at={at + 6} /> : null}
		</g>
	);
};

// ---------- the contact network ----------
export type Net = {pts: Pt[]; edges: [number, number][]};
/** A jittered grid of host circles with contact lines to grid neighbours (and some diagonals). */
export const makeNet = (cols: number, rows: number, x0: number, y0: number, dx: number, dy: number, seed: number, diag = 0.35): Net => {
	const r = rng(seed);
	const pts: Pt[] = Array.from({length: cols * rows}, (_, i) => [x0 + (i % cols) * dx + (r() - 0.5) * dx * 0.42, y0 + Math.floor(i / cols) * dy + (r() - 0.5) * dy * 0.42]);
	const edges: [number, number][] = [];
	for (let i = 0; i < cols * rows; i++) {
		const c = i % cols, rr = Math.floor(i / cols);
		if (c + 1 < cols) edges.push([i, i + 1]);
		if (rr + 1 < rows) edges.push([i, i + cols]);
		if (c + 1 < cols && rr + 1 < rows && r() < diag) edges.push([i, i + cols + 1]);
	}
	return {pts, edges};
};
export const nbrs = (n: Net, i: number) => n.edges.filter(e => e[0] === i || e[1] === i).map(e => (e[0] === i ? e[1] : e[0]));
/** A pulse travelling a -> b from `at` (stops short and fades at an immune circle when `stop`). */
export type Pulse = {a: number; b: number; at: number; stop?: boolean};
export const Network: React.FC<{n: Net; r?: number; immune: (i: number) => number; infected: (i: number) => number; o?: number; pulses?: Pulse[]; lineO?: number; grow?: number; hide?: number[]; litEdges?: [number, number][]}> = ({n, r = 22, immune, infected, o = 1, pulses = [], lineO = 1, grow = 1, hide = [], litEdges = []}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const D = 22;
	return (
		<g opacity={o}>
			{n.edges.map(([a, b], k) => {
				if (hide.includes(a) || hide.includes(b)) return null;
				const lit = litEdges.some(e => (e[0] === a && e[1] === b) || (e[0] === b && e[1] === a));
				return <line key={k} x1={n.pts[a][0]} y1={n.pts[a][1]} x2={n.pts[b][0]} y2={n.pts[b][1]} stroke={lit ? AMBER : '#cfc8b8'} strokeWidth={lit ? 3.5 : 2.5} opacity={lineO * clamp01(grow * 1.4 - (k % 7) * 0.05)} />;
			})}
			{pulses.map((p, k) => {
				const u = (f - p.at) / D;
				if (u < 0 || u > (p.stop ? 1.3 : 1.15)) return null;
				const uu = Math.min(u, p.stop ? 0.62 : 1);
				const fade = p.stop ? 1 - clamp01((u - 0.62) / 0.6) : 1 - clamp01((u - 1) / 0.15);
				const A = n.pts[p.a], B = n.pts[p.b];
				return <circle key={'p' + k} cx={lerp(A[0], B[0], uu)} cy={lerp(A[1], B[1], uu)} r={8} fill={AMBER} stroke={AMBER_INK} strokeWidth={2} opacity={fade} />;
			})}
			{n.pts.map((q, i) => {
				if (hide.includes(i)) return null;
				const im = clamp01(immune(i)), inf = clamp01(infected(i));
				const s = clamp01(grow * 1.4 - (i % 9) * 0.04);
				if (s <= 0.01) return null;
				return (
					<g key={i} opacity={s}>
						{inf > 0.01 ? <circle cx={q[0]} cy={q[1]} r={r * 1.5} fill={AMBER} opacity={0.22 * inf} /> : null}
						<circle cx={q[0]} cy={q[1]} r={r} fill={inf > 0.5 ? '#f6c35a' : '#f1eee6'} stroke={inf > 0.5 ? AMBER_INK : '#9a9890'} strokeWidth={3} />
						{im > 0.01 ? <circle cx={q[0]} cy={q[1]} r={r + 6} fill="none" stroke={TEAL} strokeWidth={5} opacity={im} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- small pieces ----------
/** A small numbered step chip (decision rule). */
export const StepChip: React.FC<{x: number; y: number; w: number; n: number; text: string; at: number; lit?: number}> = ({x, y, w, n, text, at, lit = 0}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const on = clamp01(lit) > 0.5;
	return (
		<g opacity={o} transform={`translate(${(1 - o) * 18},0)`}>
			<rect x={x} y={y} width={w} height={100} rx={28} fill={on ? '#fff3d9' : CARD} stroke={AMBER} strokeWidth={on ? 5 : 3.5} />
			<Sx x={x + 40} y={y + 66} text={`${n}`} size={46} color={AMBER_INK} weight={800} at={-100} />
			<Sx x={x + 110} y={y + 66} text={text} size={42} color={INK} hand at={-100} />
		</g>
	);
};
/** A tick or a grey cross beside a label. */
export const TickMark: React.FC<{x: number; y: number; at: number; ok?: boolean; s?: number}> = ({x, y, at, ok = true, s = 14}) => (ok
	? <DrawPath d={`M${x - s * 0.6},${y} L${x - s * 0.15},${y + s * 0.5} L${x + s * 0.7},${y - s * 0.6}`} at={at} dur={10} color="#2f8a5b" width={5} />
	: <g><DrawPath d={`M${x - s * 0.6},${y - s * 0.6} L${x + s * 0.6},${y + s * 0.6}`} at={at} dur={8} color={GREYT} width={5} /><DrawPath d={`M${x + s * 0.6},${y - s * 0.6} L${x - s * 0.6},${y + s * 0.6}`} at={at + 4} dur={8} color={GREYT} width={5} /></g>);
export const useF = () => useCurrentFrame();
void BreakMark; void CTag; void Drift; void EDGE; void GTag; void PlateB; void WText; void smooth; void pulse; void MistakeChip; void PlainArrow; void Ring; void CardBox; void INK;
