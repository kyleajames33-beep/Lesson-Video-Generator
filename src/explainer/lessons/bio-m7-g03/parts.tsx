// M7 G03 drawing parts: the Q1 event rows (a lettered badge and one exam line each, set with the question font so
// each underline sits under its words), letter badges that lift from a row and settle on a strip rung, the answer
// pieces (eight letter boxes, a filled answer box), the coded log-scale antibody graph (four decades, gridlines, a
// dashed protective line, dose arrows, day brackets, dotted reading guides), a small cell field of bare B cell plates
// and the two-curve sketch for Q3. B09, B08, B07 and B06 (M7) parts and b06's response strip are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, CARD, CTag, DrawPath, EDGE, GREYT, GREY_INK, GTag, Gloss, INK, INK_SOFT, MistakeChip, Pl, PlainArrow, PlateB, Ring, Sx, TEAL, TEAL_SOFT,
	clamp01, fitW, lerp, prog, pulse, smooth, tw, vis, CardBox, Yg, interp,
} from '../bio-m7-b09/parts';
import type {PB, Pt, Pts} from '../bio-m7-b09/parts';
import {QText, qCheck} from '../bio-m5-g01/board';
import type {QMark} from '../bio-m5-g01/board';
import {WText} from '../bio-m6-p01/parts';
import {PLATES, plasmaW} from './assets';

export {
	AMBER, AMBER_INK, CARD, CTag, DrawPath, EDGE, GREYT, GREY_INK, GTag, Gloss, INK, INK_SOFT, MistakeChip, Pl, PlainArrow, PlateB, Ring, Sx, TEAL, TEAL_SOFT,
	clamp01, fitW, lerp, prog, pulse, smooth, tw, vis, CardBox, Yg, interp, WText,
};
export type {PB, Pt, Pts};

// ---------- letter badges ----------
/** A round letter badge. `placed` turns it amber (the event is placed); `o` fades it. */
export const LBadge: React.FC<{x: number; y: number; ch: string; r?: number; placed?: number; o?: number; glow?: number}> = ({x, y, ch, r = 19, placed = 0, o = 1, glow = 0}) => {
	if (o <= 0.01) return null;
	const on = clamp01(placed) > 0.5;
	return (
		<g opacity={o}>
			{glow > 0.01 ? <circle cx={x} cy={y} r={r * 1.7} fill={AMBER} opacity={0.25 * glow} /> : null}
			<circle cx={x} cy={y} r={r} fill={on ? '#fff3d9' : CARD} stroke={on ? AMBER : INK_SOFT} strokeWidth={on ? 3.5 : 2.5} />
			<Sx x={x} y={y + r * 0.42} text={ch} size={r * 1.15} color={on ? AMBER_INK : INK} weight={800} anchor="middle" at={-100} />
		</g>
	);
};
/** A badge that flies from `a` to `b` over [at, at + d] and then stays at `b` (amber). */
export const FlyBadge: React.FC<{a: Pt; b: Pt; at: number; ch: string; d?: number; r0?: number; r1?: number; glow?: number; o?: number}> = ({a, b, at, ch, d = 18, r0 = 16, r1 = 17, glow = 0, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const u = smooth(prog(f, at, d));
	const lift = Math.sin(u * Math.PI) * 40;
	return <LBadge x={lerp(a[0], b[0], u)} y={lerp(a[1], b[1], u) - lift} ch={ch} r={lerp(r0, r1, u)} placed={1} glow={glow + (1 - u) * 0.6 * (u > 0 ? 1 : 0)} o={o} />;
};

// ---------- the Q1 event rows ----------
export type Ev = {k: string; text: string};
export const EVENTS: Ev[] = [
	{k: 'A', text: 'B cells whose receptors fit an antigen on the bacteria bind to it.'},
	{k: 'B', text: 'Plasma cells release antibodies, which bind to the bacteria.'},
	{k: 'C', text: 'Bacteria get past the skin through the cut.'},
	{k: 'D', text: 'A helper T cell that fits the same antigen gives these B cells the go-ahead to divide.'},
	{k: 'E', text: 'Damaged cells and mast cells release chemicals such as histamine, and nearby small blood vessels widen and leak.'},
	{k: 'F', text: 'A dendritic cell takes up pieces of the bacteria and carries them to a lymph node.'},
	{k: 'G', text: 'Neutrophils leave the blood and engulf bacteria.'},
	{k: 'H', text: 'The selected B cells divide into a clone of plasma cells and memory B cells.'},
];
export const evIdx = (k: string) => EVENTS.findIndex(e => e.k === k);
/** Card-space geometry of the Q1 attempt card (the walkthrough scales the left part about ROWS_O). */
export const Q1G = {x: 130, stemY: 215, rowY0: 338, pitch: 78, textX: 186, w: 900, size: 25, badgeX: 152};
export const rowY = (i: number) => Q1G.rowY0 + i * Q1G.pitch;
export const ROWS_O: Pt = [130, 190];
export const ROW_S = 0.8;
/** Screen point of a card-space point after the walkthrough scale `s` about ROWS_O. */
export const sPt = (p: Pt, s: number): Pt => [ROWS_O[0] + (p[0] - ROWS_O[0]) * s, ROWS_O[1] + (p[1] - ROWS_O[1]) * s];
export const badgeAt = (i: number, s: number) => sPt([Q1G.badgeX, rowY(i) - 9], s);
/** One event row: letter badge and the exam line; `mark` underlines a phrase of it at `markAt`. */
export const EventRow: React.FC<{i: number; at: number; mark?: string; markAt?: number; placed?: number; dim?: number}> = ({i, at, mark, markAt = 1e9, placed = 0, dim = 0}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const e = EVENTS[i];
	const y = rowY(i);
	const marks: QMark[] = mark ? [{phrase: mark, at: markAt, color: AMBER}] : [];
	return (
		<g opacity={o * (1 - 0.45 * clamp01(dim))}>
			<LBadge x={Q1G.badgeX} y={y - 9} ch={e.k} placed={placed} />
			<QText q={qCheck([{text: e.text, at: -100}], marks)} x={Q1G.textX} y={y} w={Q1G.w} size={Q1G.size} card={false} />
		</g>
	);
};

// ---------- answer pieces ----------
/** Eight letter boxes; `fill[i]` gives {ch, at}; `glow[i]` brightens box i. */
export const LetterBoxes: React.FC<{x: number; y: number; at: number; fill?: ({ch: string; at: number} | null)[]; glow?: number[]; bw?: number; gap?: number; label?: string}> = ({x, y, at, fill = [], glow = [], bw = 50, gap = 8, label = '(a)'}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<Sx x={x - 12} y={y + bw * 0.66} text={label} size={24} color={INK_SOFT} weight={700} anchor="end" at={-100} />
			{Array.from({length: 8}, (_, i) => {
				const bx = x + i * (bw + gap);
				const fl = fill[i];
				const fo = fl ? prog(f, fl.at, 10) : 0;
				const g = clamp01(glow[i] ?? 0);
				return (
					<g key={i}>
						{g > 0.01 ? <rect x={bx - 6} y={y - 6} width={bw + 12} height={bw + 12} rx={12} fill={AMBER} opacity={0.25 * g} /> : null}
						<rect x={bx} y={y} width={bw} height={bw} rx={8} fill={fo > 0.5 ? '#fff8ea' : CARD} stroke={fo > 0.5 ? AMBER : EDGE} strokeWidth={fo > 0.5 ? 3 : 2.5} strokeDasharray={fo > 0.5 ? undefined : '6 5'} />
						{fl && fo > 0.01 ? <Sx x={bx + bw / 2} y={y + bw * 0.7} text={fl.ch} size={bw * 0.62} color={AMBER_INK} hand weight={700} anchor="middle" at={-100} opacity={fo} /> : null}
					</g>
				);
			})}
		</g>
	);
};
/** A filled answer box: a small grey label and hand text written at `at`; `lit` outlines it amber. */
export const AnsFill: React.FC<{x: number; y: number; w: number; h: number; label: string; text: string; at: number; boxAt?: number; size?: number; out?: number; dim?: number}> = ({x, y, w, h, label, text, at, boxAt, size = 24, out, dim = 0}) => {
	const f = useCurrentFrame();
	const o = vis(f, boxAt ?? at - 10, out, 12);
	if (o <= 0.01) return null;
	const to = prog(f, at, 14);
	const d = clamp01(dim);
	return (
		<g opacity={o * (1 - 0.35 * d)}>
			<rect x={x} y={y} width={w} height={h} rx={16} fill={CARD} stroke={to > 0.5 && d < 0.5 ? AMBER : EDGE} strokeWidth={to > 0.5 && d < 0.5 ? 3 : 2.5} strokeDasharray={to > 0.5 ? undefined : '10 7'} />
			<Sx x={x + 20} y={y + 32} text={label} size={22} color={INK_SOFT} weight={700} at={-100} />
			<g opacity={to}><WText x={x + 20} y={y + 64} text={text} size={size} maxW={w - 40} color={d > 0.5 ? GREY_INK : INK} hand weight={700} at={-100} /></g>
		</g>
	);
};

// ---------- the log-scale antibody graph ----------
export type LG = {x0: number; y0: number; w: number; h: number; xMax: number; dec: number};
export const lgLerp = (a: LG, b: LG, t: number): LG => ({...a, x0: lerp(a.x0, b.x0, t), y0: lerp(a.y0, b.y0, t), w: lerp(a.w, b.w, t), h: lerp(a.h, b.h, t)});
export const lx = (g: LG, t: number) => g.x0 + (t / g.xMax) * g.w;
export const ly = (g: LG, L: number) => g.y0 + g.h - (Math.log10(Math.max(1, L)) / g.dec) * g.h;
const TICK = (v: number) => (v >= 10000 ? '10 000' : `${v}`);
export const Y_LABEL = 'antibody concentration (arbitrary units, log scale)';
/**
 * Axes with gridlines at each power of ten, tick labels, day ticks, axis labels. `pulseAt` pulses the y tick labels
 * one by one; `logMark` underlines "log scale" in the y label (amber) from that frame.
 */
export const LogAxes: React.FC<{g: LG; at: number; size?: number; xTicks: number[]; xLabel?: string; yLabel?: string; pulseAt?: number; logMark?: number; o?: number; grid?: boolean}> = ({g, at, size = 22, xTicks, xLabel = 'time (days)', yLabel = Y_LABEL, pulseAt, logMark, o = 1, grid = true}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const p = prog(f, at, 16) * o;
	const vals = Array.from({length: g.dec + 1}, (_, i) => 10 ** i);
	const lw = tw(yLabel, size);
	const pre = yLabel.indexOf('log scale');
	const lxPos = g.x0 - size * 4.3;
	return (
		<g opacity={p}>
			{grid ? vals.slice(1).map(v => <line key={'g' + v} x1={g.x0} x2={g.x0 + g.w} y1={ly(g, v)} y2={ly(g, v)} stroke="#e3dccd" strokeWidth={2} />) : null}
			<path d={`M${g.x0},${g.y0 - 10} L${g.x0},${g.y0 + g.h} L${g.x0 + g.w + 16},${g.y0 + g.h}`} fill="none" stroke={INK_SOFT} strokeWidth={3.5} />
			{vals.map((v, i) => {
				const pu = pulseAt === undefined ? 0 : pulse(f, pulseAt + i * 7, 22);
				return (
					<g key={v}>
						<line x1={g.x0 - 9} x2={g.x0} y1={ly(g, v)} y2={ly(g, v)} stroke={INK_SOFT} strokeWidth={3} />
						{pu > 0.01 ? <circle cx={g.x0 - 14 - tw(TICK(v), size * 0.9) / 2} cy={ly(g, v) - size * 0.3} r={size * 0.95} fill={AMBER} opacity={0.3 * pu} /> : null}
						<Sx x={g.x0 - 14} y={ly(g, v) + size * 0.32} text={TICK(v)} size={size * 0.9} color={pu > 0.3 ? AMBER_INK : GREY_INK} weight={600} anchor="end" at={-100} />
					</g>
				);
			})}
			{xTicks.map(t => (
				<g key={'x' + t}>
					<line x1={lx(g, t)} x2={lx(g, t)} y1={g.y0 + g.h} y2={g.y0 + g.h + 9} stroke={INK_SOFT} strokeWidth={3} />
					<Sx x={lx(g, t)} y={g.y0 + g.h + size + 10} text={`${t}`} size={size * 0.85} color={GREY_INK} weight={600} anchor="middle" at={-100} />
				</g>
			))}
			<Sx x={g.x0 + g.w} y={g.y0 + g.h + size * 2.6} text={xLabel} size={size} color={GREY_INK} weight={600} anchor="end" at={-100} />
			<g transform={`translate(${lxPos},${g.y0 + g.h / 2}) rotate(-90)`}>
				{pre >= 0 ? (
					<>
						<Sx x={lw / 2 - tw(yLabel.slice(pre), size) - 4} y={0} text={yLabel.slice(0, pre).trimEnd()} size={size} color={GREY_INK} weight={600} anchor="end" at={-100} />
						<Sx x={lw / 2 - tw(yLabel.slice(pre), size) + 4} y={0} text={yLabel.slice(pre)} size={size} color={GREY_INK} weight={600} at={-100} />
						{logMark !== undefined && f >= logMark ? <DrawPath d={`M${lw / 2 - tw(yLabel.slice(pre), size) + 2},${size * 0.28} L${lw / 2 - tw(yLabel.slice(pre), size) + 6 + tw('log scale', size)},${size * 0.28}`} at={logMark} dur={12} color={AMBER} width={4.5} /> : null}
					</>
				) : <Sx x={-lw / 2} y={0} text={yLabel} size={size} color={GREY_INK} weight={600} at={-100} />}
			</g>
		</g>
	);
};
/** A log-linear curve through `pts` for t in [t0, t1]. */
export const LCurve: React.FC<{g: LG; pts: Pts; t0: number; t1: number; color?: string; width?: number; dash?: string; o?: number; glow?: number}> = ({g, pts, t0, t1, color = INK_SOFT, width = 5, dash, o = 1, glow = 0}) => {
	if (t1 <= t0 || o <= 0.01) return null;
	const n = Math.max(2, Math.ceil((t1 - t0) * 3));
	const d = Array.from({length: n + 1}, (_, i) => {
		const t = t0 + ((t1 - t0) * i) / n;
		return `${i ? 'L' : 'M'}${lx(g, t).toFixed(1)},${ly(g, interp(pts, t)).toFixed(1)}`;
	}).join(' ');
	return (
		<g opacity={o}>
			{glow > 0.01 ? <path d={d} fill="none" stroke={color} strokeWidth={width + 14} strokeLinecap="round" strokeLinejoin="round" opacity={0.2 * glow} /> : null}
			<path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={dash} />
		</g>
	);
};
/** The dashed protective level with its label; `flash` brightens it. */
export const ProtLine: React.FC<{g: LG; L: number; at: number; flash?: number; size?: number; label?: string}> = ({g, L, at, flash = 0, size = 22, label = 'protective level'}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const y = ly(g, L);
	const fl = clamp01(flash);
	return (
		<g opacity={o}>
			{fl > 0.01 ? <line x1={g.x0} x2={g.x0 + g.w} y1={y} y2={y} stroke={AMBER} strokeWidth={14} opacity={0.25 * fl} /> : null}
			<line x1={g.x0} x2={g.x0 + g.w} y1={y} y2={y} stroke={fl > 0.5 ? AMBER_INK : INK} strokeWidth={3} strokeDasharray="14 10" />
			<Sx x={g.x0 + g.w - 6} y={y - 10} text={label} size={size} color={fl > 0.5 ? AMBER_INK : INK} weight={700} anchor="end" at={-100} />
		</g>
	);
};
/** A dose arrow under the x axis at day t. */
export const DoseArrow: React.FC<{g: LG; t: number; label: string; at: number; size?: number; lit?: number; dy?: number}> = ({g, t, label, at, size = 22, lit = 0, dy = 0}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12);
	if (p <= 0.01) return null;
	const x = lx(g, t), y = g.y0 + g.h + size * 3.2 + dy;
	const col = clamp01(lit) > 0.5 ? AMBER_INK : INK_SOFT;
	return (
		<g opacity={p}>
			{lit > 0.01 ? <circle cx={x} cy={y + 10} r={34} fill={AMBER} opacity={0.22 * clamp01(lit)} /> : null}
			<path d={`M${x},${y + 30} L${x},${y - 14} M${x - 10},${y} L${x},${y - 16} L${x + 10},${y}`} fill="none" stroke={col} strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" />
			<Sx x={x + 14} y={y + 26} text={label} size={size} color={col} hand weight={700} at={-100} />
		</g>
	);
};
/** A day bracket over [t0, t1] at screen y with a label. */
export const DayBr: React.FC<{g: LG; t0: number; t1: number; y: number; label?: string; at: number; out?: number; color?: string; dim?: number; size?: number; pulseAt?: number; above?: boolean; labelDx?: number}> = ({g, t0, t1, y, label, at, out, color = AMBER_INK, dim = 0, size = 22, pulseAt, above = true, labelDx = 0}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (f < at || o <= 0.01) return null;
	const a = lx(g, t0), b = lx(g, t1);
	const d = clamp01(dim) > 0.5;
	const col = d ? GREY_INK : color;
	const pu = pulseAt === undefined ? 0 : pulse(f, pulseAt, 36);
	const s = above ? 1 : -1;
	return (
		<g opacity={o}>
			{pu > 0.01 ? <rect x={a - 10} y={y - 24} width={b - a + 20} height={40} rx={14} fill={AMBER} opacity={0.25 * pu} /> : null}
			<DrawPath d={`M${a},${y + 12 * s} L${a},${y} L${b},${y} L${b},${y + 12 * s}`} at={at} dur={12} color={col} width={3.5} />
			{label ? <Sx x={(a + b) / 2 + labelDx} y={above ? y - 12 : y + size + 8} text={label} size={size} color={col} weight={700} anchor="middle" at={at + 4} /> : null}
		</g>
	);
};
/** A dotted reading guide from the point (t, L) to both axes, with its value label at the point. */
export const ReadGuide: React.FC<{g: LG; t: number; L: number; at: number; label: string; dx?: number; dy?: number; pulseAt?: number; size?: number; dim?: number}> = ({g, t, L, at, label, dx = 16, dy = -14, pulseAt, size = 24, dim = 0}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const x = lx(g, t), y = ly(g, L);
	const pu = pulseAt === undefined ? 0 : pulse(f, pulseAt, 40);
	const d = clamp01(dim) > 0.5;
	return (
		<g>
			<DrawPath d={`M${x},${y} L${g.x0},${y}`} at={at} dur={14} color={d ? GREYT : AMBER_INK} width={3 + 2 * pu} dash="4 8" />
			<DrawPath d={`M${x},${y} L${x},${g.y0 + g.h}`} at={at + 6} dur={14} color={d ? GREYT : AMBER_INK} width={3 + 2 * pu} dash="4 8" />
			<circle cx={x} cy={y} r={7 + 3 * pu} fill={d ? GREYT : AMBER} opacity={prog(f, at, 8)} />
			<Sx x={x + dx} y={y + dy} text={label} size={size} color={d ? GREY_INK : AMBER_INK} hand weight={700} at={at + 10} />
		</g>
	);
};

// ---------- a small cell field (bare B cell plates) ----------
export const MiniField: React.FC<{x: number; y: number; cols?: number; rows?: number; dx?: number; dy?: number; cw?: number; lit?: number[]; litO?: number; mem?: number[]; memO?: number; o?: number; pulseAmt?: number}> = ({x, y, cols = 8, rows = 3, dx = 44, dy = 40, cw = 28, lit = [], litO = 1, mem = [], memO = 0, o = 1, pulseAmt = 0}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{Array.from({length: cols * rows}, (_, i) => {
				const cx = x + (i % cols) * dx, cy = y + Math.floor(i / cols) * dy;
				const on = lit.includes(i) ? clamp01(litO) : 0;
				const s = 1 + 0.15 * on * pulseAmt;
				return (
					<g key={i}>
						{on > 0.01 ? <circle cx={cx} cy={cy} r={cw * 0.66 * s} fill={TEAL} opacity={0.3 * on} /> : null}
						<PlateB p={PLATES.bare} cx={cx} cy={cy} w={cw * s} filter={on < 0.99 ? `grayscale(${0.85 * (1 - on)})` : undefined} />
						{mem.includes(i) && memO > 0.01 ? <Sx x={cx + cw * 0.45} y={cy - cw * 0.3} text="M" size={cw * 0.5} color={GREY_INK} weight={800} at={-100} opacity={memO} /> : null}
					</g>
				);
			})}
		</g>
	);
};
export const plasmaFor = (bareW: number) => plasmaW(bareW);
export const useF = () => useCurrentFrame();
void CTag; void GTag; void Gloss; void INK; void MistakeChip; void Pl; void PlainArrow; void Ring; void TEAL_SOFT; void fitW; void CardBox; void Yg;
