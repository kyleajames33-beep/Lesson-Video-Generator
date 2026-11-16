// B8-13 coded parts (lesson-local). Abstract diagrams only; behaviour is shown by painted objects, never people.
// - Ladder: the evidence ladder (process at the bottom, impact, outcome at the top). Each rung lights on its cue and
//   carries a time bar (months, years, decades); a compact mode keeps only the short heads.
// - LineG: a small coded line graph (years on x, a hand y title); each series draws on its cue. Shape only.
// - UVScale: a green-to-violet UV index scale with a pointer at "extreme".
// - ShareRow: a row of ten dots, the first n tinted (a share of a group), with a group label.
// - CampaignFrame: b12's SlotStrip with the four campaign heads (exposure, audience, action, measure).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, BLUE, CARD, DrawPath, EDGE, GREYT, INK, INK_SOFT, MECH, MECH_WS, SlotStrip, Sx, TEAL, prog, pulse, vis, wrapM} from '../bio-m8-b12/parts';
import type {P2, SSlot} from '../bio-m8-b12/parts';

export * from '../bio-m8-b12/parts';

// ---------- campaign frame ----------
export const CF_HEADS = ['exposure', 'audience', 'action', 'measure'];
export type CFItem = {t: string; at: number; out?: number; chip?: string; from?: P2};
export const CampaignFrame: React.FC<{lit?: (number | undefined)[]; items?: CFItem[][]; o?: number; dy?: number; x?: number; y?: number; ws?: number[]; h?: number; gap?: number; size?: number}> = ({lit = [], items = [], o = 1, dy = 0, x = MECH.x, y = MECH.y, ws = MECH_WS, h = MECH.h, gap = MECH.gap, size = 30}) => {
	const slots: SSlot[] = CF_HEADS.map((hd, i) => ({head: hd, lit: lit[i], items: items[i] ?? []}));
	return <SlotStrip x={x} y={y} ws={ws} h={h} gap={gap} slots={slots} size={size} headSize={32} o={o} dy={dy} />;
};

// ---------- evidence ladder ----------
export type Rung = {head: string; short: string; time: string; tw: number; lit?: number; pulseAt?: number; body?: (x: number, y: number, w: number) => React.ReactNode; dimTime?: number};
export const RUNGS = (lit: (number | undefined)[], bodies: (((x: number, y: number, w: number) => React.ReactNode) | undefined)[] = [], pulses: (number | undefined)[] = [], dimTime?: number): Rung[] => [
	{head: 'outcome: what the disease did', short: 'outcome', time: 'decades', tw: 1, lit: lit[2], body: bodies[2], pulseAt: pulses[2], dimTime},
	{head: 'impact: what people did', short: 'impact', time: 'years', tw: 0.45, lit: lit[1], body: bodies[1], pulseAt: pulses[1]},
	{head: 'process: what we did', short: 'process', time: 'months', tw: 0.15, lit: lit[0], body: bodies[0], pulseAt: pulses[0]},
];
/** Rungs listed top (outcome) to bottom (process). */
export const Ladder: React.FC<{x: number; y: number; w: number; h: number; rungs: Rung[]; compact?: boolean; o?: number; size?: number}> = ({x, y, w, h, rungs, compact = false, o = 1, size = 32}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const gap = 16, rh = (h - gap * 2) / 3;
	return (
		<g opacity={o}>
			<line x1={x - 14} x2={x - 14} y1={y - 10} y2={y + h + 10} stroke={INK_SOFT} strokeWidth={6} strokeLinecap="round" />
			<line x1={x + w + 14} x2={x + w + 14} y1={y - 10} y2={y + h + 10} stroke={INK_SOFT} strokeWidth={6} strokeLinecap="round" />
			{rungs.map((r, i) => {
				const yy = y + i * (rh + gap);
				const L = r.lit === undefined ? 0 : prog(f, r.lit, 12);
				const pu = r.pulseAt === undefined ? 0 : pulse(f, r.pulseAt, 40);
				const tdim = r.dimTime === undefined ? 0 : prog(f, r.dimTime, 30);
				const tmax = w - 150;
				const tw = Math.max(30, tmax * r.tw);
				return (
					<g key={i}>
						{pu > 0.01 ? <rect x={x - 8} y={yy - 8} width={w + 16} height={rh + 16} rx={22} fill={AMBER} opacity={0.4 * pu} /> : null}
						<rect x={x} y={yy} width={w} height={rh} rx={16} fill={L > 0.5 ? '#fffaf0' : CARD} stroke={L > 0.5 ? BLUE : EDGE} strokeWidth={L > 0.5 ? 4 : 3} />
						<Sx x={x + 18} y={yy + size + 8} text={compact ? r.short : r.head} size={size} color={L > 0.5 ? BLUE : GREYT} hand weight={700} at={-1000} />
						{!compact && r.body && L > 0.01 ? <g opacity={L}>{r.body(x + 18, yy + size + 26, w - 36)}</g> : null}
						<rect x={x + 18} y={yy + rh - 34} width={tw} height={14} rx={7} fill={L > 0.5 ? TEAL : '#cfc8bb'} opacity={1 - 0.6 * tdim} />
						<Sx x={x + 30 + tw} y={yy + rh - 20} text={r.time} size={28} color={L > 0.5 ? TEAL : GREYT} hand weight={700} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};
export const LAD = {x: 1320, y: 160, w: 500, h: 690};
export const LADC = {x: 1500, y: 160, w: 320, h: 690};

// ---------- line graph ----------
export type LG = {x: number; y: number; w: number; h: number; x0: number; x1: number};
export const lgx = (g: LG, yr: number) => g.x + ((yr - g.x0) / (g.x1 - g.x0)) * g.w;
export const lgy = (g: LG, v: number) => g.y + g.h - v * g.h;
export type Series = {pts: [number, number][]; at: number; color: string; label?: string; labelAt?: [number, number]; dash?: string; out?: number; anchor?: 'start' | 'middle' | 'end'};
export const LineG: React.FC<{g: LG; ticks: number[]; yTitle: string; series: Series[]; size?: number; o?: number}> = ({g, ticks, yTitle, series, size = 28, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<rect x={g.x} y={g.y} width={g.w} height={g.h} fill={CARD} opacity={0.9} />
			<path d={`M${g.x},${g.y} L${g.x},${g.y + g.h} L${g.x + g.w},${g.y + g.h}`} fill="none" stroke={INK} strokeWidth={3.5} />
			{ticks.map(t => <g key={t}><line x1={lgx(g, t)} x2={lgx(g, t)} y1={g.y + g.h} y2={g.y + g.h + 10} stroke={INK} strokeWidth={3} /><Sx x={lgx(g, t)} y={g.y + g.h + size * 1.35} text={`${t}`} size={size} color={INK} anchor="middle" weight={700} at={-1000} /></g>)}
			{wrapM(yTitle, size, g.w, false, 700).reverse().map((ln, k) => <Sx key={k} x={g.x - 10} y={g.y - 16 - k * size * 1.15} text={ln} size={size} color={INK} weight={700} at={-1000} />)}
			{series.map((s, i) => {
				const v = vis(f, s.at, s.out, 12);
				if (v <= 0.01) return null;
				const d = 'M' + s.pts.map(([a, b]) => `${lgx(g, a)},${lgy(g, b)}`).join(' L');
				return <g key={i} opacity={v}>
					<DrawPath d={d} at={s.at} dur={30} color={s.color} width={6} dash={s.dash} />
					{s.label && s.labelAt ? <Sx x={s.labelAt[0]} y={s.labelAt[1]} text={s.label} size={size + 4} color={s.color} anchor={s.anchor} hand weight={700} at={s.at + 24} /> : null}
				</g>;
			})}
		</g>
	);
};

// ---------- UV index scale ----------
export const UVScale: React.FC<{x: number; y: number; w: number; at: number; o?: number}> = ({x, y, w, at, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const cols = ['#4f9a4f', '#e6c534', '#e88a2c', '#d0442f', '#7c4aa8'];
	const p = prog(f, at + 10, 30);
	return (
		<g opacity={v}>
			{cols.map((c, i) => <rect key={i} x={x + (i * w) / 5} y={y} width={w / 5 + 1} height={30} fill={c} />)}
			<rect x={x} y={y} width={w} height={30} fill="none" stroke={INK} strokeWidth={3} rx={4} />
			<path d={`M${x + w * (0.1 + 0.8 * p)},${y - 4} l-13,-24 l26,0 Z`} fill={INK} />
			<Sx x={x} y={y + 64} text="low" size={28} color={INK} weight={700} at={-1000} />
			<Sx x={x + w} y={y + 64} text="extreme" size={28} color={INK} anchor="end" weight={700} at={-1000} />
		</g>
	);
};

// ---------- share rows ----------
export const ShareRow: React.FC<{x: number; y: number; label: string; n: number; at?: number; d?: number; r?: number; color?: string; lw?: number; size?: number; pu?: number; o?: number}> = ({x, y, label, n, at = -1000, d = 44, r = 15, color = AMBER_INK, lw = 400, size = 34, pu, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const k = at < -100 ? 1 : prog(f, at, 14);
	const p = pu === undefined ? 0 : pulse(f, pu, 40);
	return (
		<g opacity={o}>
			{p > 0.01 ? <rect x={x - 12} y={y - 30} width={lw + 10 * d + 24} height={60} rx={30} fill={AMBER} opacity={0.35 * p} /> : null}
			<Sx x={x} y={y + size * 0.34} text={label} size={size} color={INK} hand weight={700} at={-1000} />
			{Array.from({length: 10}, (_, i) => <circle key={i} cx={x + lw + i * d} cy={y} r={r} fill={i < n && k > 0.5 ? color : '#e9e2d3'} stroke={i < n && k > 0.5 ? color : '#a8a092'} strokeWidth={2.5} />)}
		</g>
	);
};
/** A coded DNA strand (two twisting strands with rungs), used on the Next chip. */
export const DnaMini: React.FC<{x: number; y: number; w: number; h: number}> = ({x, y, w, h}) => {
	const n = 9;
	const pts = (ph: number) => Array.from({length: 25}, (_, i) => { const t = i / 24; return `${x + t * w},${y + h / 2 + Math.sin(t * Math.PI * 3 + ph) * h / 2}`; }).join(' L');
	return (
		<g>
			{Array.from({length: n}, (_, i) => { const t = (i + 0.5) / n; const a = y + h / 2 + Math.sin(t * Math.PI * 3) * h / 2, b = y + h / 2 + Math.sin(t * Math.PI * 3 + Math.PI) * h / 2; return <line key={i} x1={x + t * w} x2={x + t * w} y1={a} y2={b} stroke={i % 2 ? AMBER : TEAL} strokeWidth={4} />; })}
			<path d={'M' + pts(0)} fill="none" stroke={BLUE} strokeWidth={5} />
			<path d={'M' + pts(Math.PI)} fill="none" stroke={INK_SOFT} strokeWidth={5} />
		</g>
	);
};
