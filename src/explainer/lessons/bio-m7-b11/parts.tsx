// M7 B11 drawing parts: the drug-target bench (two labelled lanes), amber target rings placed on a plate by natural
// pixel, drug chips that slide to a target and take a tick or a grey cross, the virus step strip ("enter", "copy",
// "build", "release") with teal drug blocks, a short wall-mesh inset whose cross-links fade, inward osmosis arrows, a
// stopping protein chain, a generic criteria table (B12 reuses it), and a population board of b6a's small bacteria
// (bio-m6-b01's Bact). B10 (M7), G03 (M7) and bio-m6-b01 parts are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, BreakMark, CARD, CTag, CardBox, DrawPath, EDGE, GREYT, GREY_INK, GTag, INK, INK_SOFT, MistakeChip, Pl, PlainArrow, PlateB, Ring, StepChip, Sx, TEAL, TEAL_SOFT,
	TERRA, TickMark, WText, clamp01, fitW, lerp, prog, pulse, rng, smooth, tw, vis,
} from '../bio-m7-b10/parts';
import type {PB, Pt} from '../bio-m7-b10/parts';
import {AnsFill} from '../bio-m7-g03/parts';
import {Bact, popGrid} from '../bio-m6-b01/parts';

export {
	AMBER, AMBER_INK, BreakMark, CARD, CTag, CardBox, DrawPath, EDGE, GREYT, GREY_INK, GTag, INK, INK_SOFT, MistakeChip, Pl, PlainArrow, PlateB, Ring, StepChip, Sx, TEAL, TEAL_SOFT,
	TERRA, TickMark, WText, clamp01, fitW, lerp, prog, pulse, rng, smooth, tw, vis, AnsFill, Bact, popGrid,
};
export type {PB, Pt};
export const BLUE_W = '#4f86b8';

/** Screen point of natural pixel uv on plate p drawn with its box centred at (cx, cy), box width w. */
export const pp = (p: PB, cx: number, cy: number, w: number, uv: Pt): Pt => {
	const k = w / (p.box[2] - p.box[0]);
	return [cx + (uv[0] - (p.box[0] + p.box[2]) / 2) * k, cy + (uv[1] - (p.box[1] + p.box[3]) / 2) * k];
};
/** Box width that gives a plate a painted box height h. */
export const wOfH = (p: PB, h: number) => (h * (p.box[2] - p.box[0])) / (p.box[3] - p.box[1]);

// ---------- the bench ----------
export const LB = {x: 80, y: 180, w: 1180, h: 390};
export const LV = {x: 80, y: 600, w: 1180, h: 420};
export const Lane: React.FC<{r: {x: number; y: number; w: number; h: number}; label: string; at: number; lit?: number; color?: string; o?: number}> = ({r, label, at, lit = 0, color = AMBER, o = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14) * o;
	if (p <= 0.01) return null;
	const on = clamp01(lit) > 0.5;
	return (
		<g opacity={p}>
			<rect x={r.x} y={r.y} width={r.w} height={r.h} rx={22} fill={on ? '#fffaf0' : '#f6f4ef'} stroke={on ? color : GREYT} strokeWidth={on ? 3 : 2} strokeDasharray={on ? undefined : '10 8'} />
			<Sx x={r.x + 24} y={r.y + 40} text={label} size={30} color={on ? (color === TEAL ? TEAL : AMBER_INK) : GREY_INK} hand weight={700} at={-100} />
		</g>
	);
};

// ---------- target rings and drug chips ----------
export const TRing: React.FC<{x: number; y: number; r?: number; at: number; lit?: number; grey?: boolean; dash?: boolean; label?: string; labelAt?: number; o?: number}> = ({x, y, r = 22, at, lit = 0, grey = false, dash = false, label, labelAt, o = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 10) * o;
	if (p <= 0.01) return null;
	const col = grey ? GREYT : AMBER;
	const l = clamp01(lit);
	return (
		<g opacity={p}>
			{l > 0.01 ? <circle cx={x} cy={y} r={r * 1.7} fill={AMBER} opacity={0.25 * l} /> : null}
			<circle cx={x} cy={y} r={r} fill="none" stroke={col} strokeWidth={4 + 2 * l} strokeDasharray={dash ? '6 5' : undefined} />
			{label ? <Sx x={x + r + 8} y={y + 8} text={label} size={20} color={GREY_INK} weight={600} at={labelAt ?? at} /> : null}
		</g>
	);
};
/** A drug chip sliding from `a` to `b` over [at, at + 20]; `mark` adds a tick or a grey cross at `markAt`. */
export const DrugChip: React.FC<{a: Pt; b: Pt; at: number; text: string; color?: string; mark?: 'tick' | 'cross'; markAt?: number; dim?: number; size?: number; out?: number}> = ({a, b, at, text, color = AMBER, mark, markAt = 1e9, dim = 0, size = 26, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 10);
	if (o <= 0.01) return null;
	const u = smooth(prog(f, at, 22));
	const x = lerp(a[0], b[0], u), y = lerp(a[1], b[1], u);
	const w = tw(text, size, true) * 1.06 + 36;
	const d = clamp01(dim) > 0.5;
	const ink = color === TEAL ? TEAL : AMBER_INK;
	return (
		<g opacity={o * (d ? 0.55 : 1)}>
			<rect x={x - w / 2} y={y - size * 0.8} width={w} height={size * 1.6} rx={size * 0.8} fill={d ? '#f3f2ee' : color === TEAL ? TEAL_SOFT : '#fff3d9'} stroke={d ? GREYT : color} strokeWidth={3} />
			<Sx x={x} y={y + size * 0.34} text={text} size={size} color={d ? GREY_INK : ink} hand weight={700} anchor="middle" at={-100} />
			{mark && f >= markAt ? <TickMark x={x + w / 2 + 22} y={y} at={markAt} ok={mark === 'tick'} s={16} /> : null}
		</g>
	);
};

// ---------- the virus step strip ----------
export const STEPS = ['enter', 'copy', 'build', 'release'];
export type StepG = {x: number; y: number; w: number; h?: number};
export const stepBox = (g: StepG, i: number) => {
	const cw = g.w / 4;
	return {x: g.x + i * cw + 6, y: g.y, w: cw - 12, h: g.h ?? 56};
};
export const StepStrip: React.FC<{g: StepG; at: number; lit?: number[]; o?: number; size?: number}> = ({g, at, lit = [], o = 1, size = 28}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14) * o;
	if (p <= 0.01) return null;
	return (
		<g opacity={p}>
			{STEPS.map((s, i) => {
				const b = stepBox(g, i);
				const on = clamp01(lit[i] ?? 0) > 0.5;
				return (
					<g key={s} opacity={prog(f, at + i * 5, 10)}>
						<rect x={b.x} y={b.y} width={b.w} height={b.h} rx={b.h / 2} fill={on ? '#eef7f7' : '#f3f2ee'} stroke={on ? TEAL : GREYT} strokeWidth={on ? 3.5 : 2} />
						<Sx x={b.x + b.w / 2} y={b.y + b.h / 2 + size * 0.34} text={s} size={size} color={on ? TEAL : GREY_INK} hand weight={700} anchor="middle" at={-100} />
						{i < 3 ? <path d={`M${b.x + b.w + 1},${b.y + b.h / 2} l10,0`} stroke={GREYT} strokeWidth={3} /> : null}
					</g>
				);
			})}
		</g>
	);
};
/** A teal drug block dropping onto step i (k-th block on that step sits a little higher). */
export const StepBlock: React.FC<{g: StepG; i: number; at: number; k?: number; label?: string; pulseAt?: number[]; size?: number; o?: number}> = ({g, i, at, k = 0, label = 'drug', pulseAt = [], size = 22, o = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12) * o;
	if (p <= 0.01) return null;
	const b = stepBox(g, i);
	const drop = (1 - smooth(prog(f, at, 16))) * 50;
	const y = b.y - 40 - k * 44 - drop;
	const pu = pulseAt.reduce((m, t) => Math.max(m, pulse(f, t, 36)), 0);
	const w = Math.min(b.w - 20, tw(label, size, true) + 30);
	return (
		<g opacity={p}>
			{pu > 0.01 ? <rect x={b.x + b.w / 2 - w / 2 - 8} y={y - 8} width={w + 16} height={52} rx={14} fill={TEAL} opacity={0.25 * pu} /> : null}
			<rect x={b.x + b.w / 2 - w / 2} y={y} width={w} height={36} rx={10} fill={TEAL} />
			<Sx x={b.x + b.w / 2} y={y + 25} text={label} size={size} color="#fffdf8" hand weight={700} anchor="middle" at={-100} />
		</g>
	);
};

// ---------- small coded pieces ----------
/** A short wall section as a cross-hatched mesh; `gaps` fades two cross-links. */
export const Mesh: React.FC<{x: number; y: number; w: number; h: number; at: number; gaps?: number; o?: number}> = ({x, y, w, h, at, gaps = 0, o = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14) * o;
	if (p <= 0.01) return null;
	const n = 8, m = 4;
	const g = clamp01(gaps);
	return (
		<g opacity={p}>
			<rect x={x} y={y} width={w} height={h} rx={12} fill="#fbf3e2" stroke={AMBER_INK} strokeWidth={2.5} />
			{Array.from({length: m}, (_, j) => <line key={'h' + j} x1={x + 10} x2={x + w - 10} y1={y + ((j + 0.5) * h) / m} y2={y + ((j + 0.5) * h) / m} stroke="#b9925a" strokeWidth={5} />)}
			{Array.from({length: n}, (_, i) => Array.from({length: m - 1}, (_, j) => {
				const gap = (i === 3 && j === 1) || (i === 5 && j === 0);
				const xx = x + ((i + 0.5) * w) / n, y0 = y + ((j + 0.5) * h) / m, y1 = y + ((j + 1.5) * h) / m;
				return <line key={`v${i}-${j}`} x1={xx} x2={xx} y1={y0} y2={y1} stroke={AMBER_INK} strokeWidth={3} opacity={gap ? 1 - g : 1} />;
			}))}
		</g>
	);
};
/** Inward blue arrows around an ellipse (water entering by osmosis). */
export const Osmosis: React.FC<{cx: number; cy: number; rx: number; ry: number; at: number; o?: number; n?: number}> = ({cx, cy, rx, ry, at, o = 1, n = 8}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12) * o;
	if (p <= 0.01) return null;
	return (
		<g opacity={p}>
			{Array.from({length: n}, (_, i) => {
				const a = (i / n) * Math.PI * 2 + 0.3;
				const ph = ((f - at) / 30 + i * 0.13) % 1;
				const r0 = 1.45 - 0.25 * ph;
				const x0 = cx + Math.cos(a) * rx * r0, y0 = cy + Math.sin(a) * ry * r0;
				const x1 = cx + Math.cos(a) * rx * (r0 - 0.22), y1 = cy + Math.sin(a) * ry * (r0 - 0.22);
				const ang = Math.atan2(y1 - y0, x1 - x0);
				return (
					<g key={i}>
						<line x1={x0} y1={y0} x2={x1} y2={y1} stroke={BLUE_W} strokeWidth={4} strokeLinecap="round" />
						<path d={`M${x1 - 10 * Math.cos(ang - 0.5)},${y1 - 10 * Math.sin(ang - 0.5)} L${x1},${y1} L${x1 - 10 * Math.cos(ang + 0.5)},${y1 - 10 * Math.sin(ang + 0.5)}`} fill="none" stroke={BLUE_W} strokeWidth={4} strokeLinecap="round" />
					</g>
				);
			})}
		</g>
	);
};
/** A protein chain of beads that grows from (x, y) and stops after `stop` beads. */
export const Chain: React.FC<{x: number; y: number; at: number; stopAt: number; o?: number}> = ({x, y, at, stopAt, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const n = Math.min(10, Math.floor((Math.min(f, stopAt) - at) / 6) + 1);
	const stopped = f >= stopAt;
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => <circle key={i} cx={x + i * 16} cy={y + Math.sin(i * 0.9) * 5} r={7} fill={stopped ? '#c9c4b8' : '#8e6bb3'} stroke="#4a3a5a" strokeWidth={1.5} />)}
			{stopped ? <Sx x={x + n * 16 + 10} y={y + 8} text="stops" size={22} color={GREY_INK} hand weight={700} at={-100} /> : null}
		</g>
	);
};

// ---------- a generic criteria table ----------
export type TRow = {label: string; p?: PB; cells: string[]; at: number; cellAt?: number[]; note?: string; noteAt?: number; noteCol?: number};
export type TGeom = {x: number; y: number; rhw: number; cw: number; hh: number; rh: number; gap: number; size?: number};
export const CritTable: React.FC<{g: TGeom; heads: string[]; headAt: number[]; rows: TRow[]; lit: (i: number) => number; at?: number; headColors?: string[]; cellSize?: number}> = ({g, heads, headAt, rows, lit, at = 0, headColors, cellSize = 28}) => {
	const f = useCurrentFrame();
	const rowY = (r: number) => g.y + g.hh + 10 + r * (g.rh + g.gap);
	const colX = (c: number) => g.x + g.rhw + c * g.cw;
	const W = g.rhw + heads.length * g.cw;
	return (
		<g>
			<rect x={g.x} y={g.y} width={W} height={g.hh} rx={16} fill={CARD} stroke={EDGE} strokeWidth={2.5} opacity={prog(f, at, 14)} />
			{heads.map((h, c) => {
				const cur = vis(f, headAt[c], headAt[c + 1] ?? rows[0].at, 10) > 0.5;
				return <Sx key={h} x={colX(c) + g.cw / 2} y={g.y + g.hh / 2 + 10} text={h} size={g.size ?? 28} color={headColors ? headColors[c] : cur ? AMBER_INK : INK_SOFT} hand weight={700} anchor="middle" at={headAt[c]} />;
			})}
			{rows.map((r, i) => {
				const o = prog(f, r.at, 14);
				if (o <= 0.01) return null;
				const on = clamp01(lit(i)) > 0.5;
				const y = rowY(i);
				return (
					<g key={i} opacity={o * (on ? 1 : 0.6)}>
						<rect x={g.x} y={y} width={W} height={g.rh} rx={16} fill={on ? '#fffaf0' : CARD} stroke={on ? AMBER : EDGE} strokeWidth={on ? 3.5 : 2.5} />
						{r.p ? <Pl p={r.p} cx={g.x + 62} cy={y + g.rh / 2} w={fitW(r.p, 100, g.rh - 30)} dim={on ? 0 : 0.6} /> : null}
						<WText x={g.x + (r.p ? 126 : 24)} y={y + 46} text={r.label} size={26} maxW={g.rhw - (r.p ? 140 : 40)} color={on ? INK : GREY_INK} hand weight={700} at={-100} />
						{r.cells.map((c, k) => <g key={k} opacity={prog(f, r.cellAt ? r.cellAt[k] : r.at + 8 + k * 8, 10)}><WText x={colX(k) + 16} y={y + 44} text={c} size={cellSize} maxW={g.cw - 30} color={on ? INK : GREY_INK} hand weight={700} at={-100} /></g>)}
						{r.note ? <Sx x={colX(r.noteCol ?? 0) + 16} y={y + g.rh - 14} text={r.note} size={20} color={GREY_INK} weight={600} at={r.noteAt ?? r.at + 30} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- a stack of blank chips ----------
export const ChipStack: React.FC<{x: number; y: number; n: number; color: string; at: number; label?: string}> = ({x, y, n, color, at, label}) => {
	const f = useCurrentFrame();
	return (
		<g>
			{Array.from({length: n}, (_, i) => <rect key={i} x={x} y={y - i * 22} width={90} height={18} rx={9} fill={color} opacity={0.85 * prog(f, at + i * 3, 8)} />)}
			{label ? <Sx x={x + 45} y={y + 46} text={label} size={22} color={color === TEAL ? TEAL : AMBER_INK} hand weight={700} anchor="middle" at={at} /> : null}
		</g>
	);
};
export const useF = () => useCurrentFrame();
void BreakMark; void CTag; void CardBox; void GTag; void MistakeChip; void PlainArrow; void PlateB; void Ring; void StepChip; void TERRA; void rng; void AnsFill; void Bact; void popGrid; void INK;
