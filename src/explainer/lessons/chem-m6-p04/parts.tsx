// Drawing parts for M6 P04 (pH shows strong against weak). One visual system with P03 and P02 and, through them, C01 to
// C16 (re-exported): the C05 meter with a movable coded probe and the schematic particle lenses, the C07 full meter,
// volumetric pipette, flask fill and spreading volume box, chips, crossed chips, question card, countdown, key notes,
// the P02 risk table and cards, and the P03 bottles, scale and stable dot. New here:
// - Row4: the four matched beakers (HCl, ethanoic acid, NaOH, ammonia) with teal (acid) or violet (base) tabs;
// - Padlock: the lock that fixes the concentration dial;
// - VAxis, ChangeBar, VBracket2: a small vertical pH axis, a change bar from one reading to the next (solid for strong,
//   outlined for weak) and a vertical bracket with a label;
// - probeArc: the probe path through a list of beakers on a coded arc.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {BASE, BASE_INK, INK, INK_SOFT, LiquidBeaker, PHChip, PROTON_INK, Sx, TEAL, beakerW, clamp01, lerp, smooth, vis} from '../chem-m6-p03/parts';
import {ACID_TAB, BASE_TAB, PALE} from '../chem-m6-p03/parts';

export * from '../chem-m6-p03/parts';

// ---------- the four matched beakers ----------
export type Row4Item = {name: string; sub?: string; tab: string};
export const ROW4: Row4Item[] = [
	{name: 'HCl', tab: ACID_TAB}, {name: 'ethanoic acid', sub: '(acetic acid)', tab: ACID_TAB},
	{name: 'NaOH', tab: BASE_TAB}, {name: 'ammonia, NH_3', tab: BASE_TAB},
];
export const MEANS4 = ['1.08', '2.90', '12.91', '11.10'];
export const DIL4 = ['2.04', '3.39', '11.95', '10.60'];
export type R4G = {x0: number; dx: number; y: number; h: number};
export const r4Cx = (g: R4G, i: number) => g.x0 + i * g.dx + beakerW(g.h) / 2;
/** Beakers write on at at[i]; labels at lab[i]; whole labels dim from dimAt; chips (text chips[i]) at chip[i]. */
export const Row4: React.FC<{g: R4G; at: number[]; lab?: number[]; dimAt?: number; chip?: (number | undefined)[]; chips?: string[]; o?: number; size?: number; subOn?: boolean; tint?: string}> = ({g, at, lab, dimAt, chip = [], chips = MEANS4, o = 1, size = 28, subOn = true, tint = PALE}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const d = dimAt === undefined ? 0 : prog(f, dimAt, 14);
	return (
		<g opacity={o}>
			{ROW4.map((r, i) => {
				const x = g.x0 + i * g.dx, cx = r4Cx(g, i);
				const v = prog(f, at[i], 14);
				if (v <= 0.01) return null;
				const la = lab ? lab[i] : at[i];
				const ly = g.y + g.h + size + 14;
				const tw0 = Math.max(54, r.name.length * size * 0.5);
				return (
					<g key={i} opacity={v}>
						<LiquidBeaker x={x} y={g.y} h={g.h} tint={tint} />
						<g opacity={1 - 0.55 * d}>
							<rect x={cx - tw0 / 2 - 22} y={ly - size * 0.8} width={12} height={size * 0.95} rx={3} fill={r.tab} opacity={prog(f, la, 10)} />
							<Sx x={cx - tw0 / 2 - 2} y={ly} text={r.name} size={size} color={INK} weight={700} at={la} />
							{r.sub && subOn ? <Sx x={cx - tw0 / 2 - 2} y={ly + size * 1.05} text={r.sub} size={size * 0.78} color={INK_SOFT} weight={600} at={la + 6} /> : null}
						</g>
						{chip[i] !== undefined ? <PHChip x={cx} y={g.y - size * 2.2} text={chips[i]} at={chip[i] as number} size={size} anchor="middle" drop /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- padlock ----------
export const Padlock: React.FC<{x: number; y: number; s?: number; at: number; out?: number; color?: string}> = ({x, y, s = 1, at, out, color = TEAL}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (v <= 0.01) return null;
	const close = smooth(prog(f, at + 4, 12));
	const lift = (1 - close) * 12 * s;
	return (
		<g opacity={v} transform={`translate(${x},${y}) scale(${s})`}>
			<path d={`M-13,${-4 - lift} L-13,${-18 - lift} A13,13 0 0 1 13,${-18 - lift} L13,${-4 - lift}`} fill="none" stroke={color} strokeWidth={6} strokeLinecap="round" />
			<rect x={-20} y={-6} width={40} height={32} rx={7} fill={color} />
			<circle cx={0} cy={8} r={4.5} fill="#fffdf8" />
		</g>
	);
};

// ---------- small vertical pH axis, change bars, vertical brackets ----------
export type VA = {x: number; top: number; bottom: number; lo: number; hi: number};
export const vaY = (a: VA, p: number) => a.bottom - ((p - a.lo) / (a.hi - a.lo)) * (a.bottom - a.top);
export const VAxis: React.FC<{a: VA; ticks: number[]; at: number; out?: number; o?: number; label?: string; size?: number}> = ({a, ticks, at, out, o = 1, label = 'pH', size = 26}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const d = smooth(prog(f, at, 18));
	return (
		<g opacity={v}>
			<line x1={a.x} y1={a.bottom} x2={a.x} y2={lerp(a.bottom, a.top - 20, d)} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
			{ticks.map(t => (
				<g key={t}>
					<line x1={a.x - 10} y1={vaY(a, t)} x2={a.x} y2={vaY(a, t)} stroke={INK_SOFT} strokeWidth={3} />
					<Sx x={a.x - 18} y={vaY(a, t) + size * 0.34} text={String(t)} size={size} color={INK_SOFT} anchor="end" weight={600} at={-1000} />
				</g>
			))}
			<Sx x={a.x} y={a.top - 34} text={label} size={size + 2} color={INK_SOFT} anchor="middle" weight={700} at={-1000} />
		</g>
	);
};
/** A bar from y1 to y2 (drawn from y1 toward y2 over `dur`), solid or outlined, with an arrowhead at y2. */
export const ChangeBar: React.FC<{x: number; y1: number; y2: number; at: number; solid: boolean; color: string; ink?: string; w?: number; out?: number; o?: number; dur?: number; pulse?: number}> = ({x, y1, y2, at, solid, color, ink, w = 46, out, o = 1, dur = 22, pulse}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const g = smooth(prog(f, at, dur));
	const ye = lerp(y1, y2, g);
	const top = Math.min(y1, ye), h = Math.max(2, Math.abs(ye - y1));
	const dn = y2 > y1 ? 1 : -1;
	const pz = pulse === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - pulse) / 36) * Math.PI));
	const k = ink ?? color;
	return (
		<g opacity={v} transform={pz > 0 ? `translate(${x},${(y1 + y2) / 2}) scale(${1 + 0.18 * pz}) translate(${-x},${-(y1 + y2) / 2})` : undefined}>
			<circle cx={x} cy={y1} r={8} fill={k} />
			<rect x={x - w / 2} y={top} width={w} height={h} rx={6} fill={solid ? color : '#fffdf8'} fillOpacity={solid ? 0.85 : 1} stroke={k} strokeWidth={solid ? 2 : 5} />
			{g > 0.6 && Math.abs(y2 - y1) > 24 ? <path d={`M${x - w / 2 - 8},${y2 - dn * 16} L${x},${y2 + dn * 6} L${x + w / 2 + 8},${y2 - dn * 16}`} fill="none" stroke={k} strokeWidth={5} strokeLinejoin="round" opacity={(g - 0.6) / 0.4} /> : null}
		</g>
	);
};
/** Vertical bracket from y1 to y2 at x, ticks pointing left (side -1) or right (side 1), label beside it. */
export const VBracket2: React.FC<{x: number; y1: number; y2: number; text: string; at: number; out?: number; o?: number; color?: string; side?: 1 | -1; size?: number; dy?: number}> = ({x, y1, y2, text, at, out, o = 1, color = TEAL, side = 1, size = 30, dy = 0}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const t = -side * 12;
	return (
		<g opacity={v}>
			<DrawPath d={`M${x + t},${y1} L${x},${y1} L${x},${y2} L${x + t},${y2}`} at={at} dur={12} color={color} width={4} />
			<Sx x={x + side * 16} y={(y1 + y2) / 2 + size * 0.34 + dy} text={text} size={size} color={color} anchor={side === 1 ? 'start' : 'end'} weight={800} at={at + 6} />
		</g>
	);
};

// ---------- probe path on a coded arc ----------
export type Stop = {at: number; to: [number, number]};
/** Probe tip position: from `rest`, it travels on an arc to each stop (24 frames from stop.at), then back to rest at `back`. */
export const probeArc = (rest: [number, number], stops: Stop[], back?: number, lift = 200, d = 24) => (f: number): [number, number] => {
	const all: Stop[] = back === undefined ? stops : [...stops, {at: back, to: rest}];
	let pos = rest;
	for (const s of all) {
		const t = smooth(clamp01((f - s.at) / d));
		if (t <= 0) break;
		pos = [lerp(pos[0], s.to[0], t), lerp(pos[1], s.to[1], t) - Math.sin(t * Math.PI) * lift];
		if (t < 1) return pos;
	}
	return pos;
};

// ---------- misc ----------
export const STRONG_C = TEAL, BASE_C = BASE, BASE_K = BASE_INK, H_INK = PROTON_INK;
export const GREEN_BAND = '#cfe8d6';
