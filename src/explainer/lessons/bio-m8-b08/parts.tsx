// B8-08 coded parts. The nutrient chain is b07's PathwayStrip in four-slot mode with a balance beam at its left end;
// b07's RiskDial returns in scene 8. Lesson-local: BalanceBeam, YearsStrip, Gear, Hex (glucose), the attempt bar chart.
// Abstract diagrams only; organs, cells and objects stay painted plates. Nothing here draws people.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, BLUE, CARD, EDGE, GREEN, GREYT, INK, INK_SOFT, PathwayStrip, RED, Sx, TEAL, clamp01, lerp, prog, smooth, vis, wrapM} from '../bio-m8-b07/parts';
import type {SBox, SRow} from '../bio-m8-b07/parts';
import {BARS} from './common';

export * from '../bio-m8-b07/parts';

// ---------- balance beam ----------
/** A small beam that tips: tilt -1 = "too little" (left end down), +1 = "too much" (right end down). */
export const BalanceBeam: React.FC<{x: number; y: number; tilt: (f: number) => number; L?: number; size?: number; o?: number; single?: boolean}> = ({x, y, tilt, L = 84, size = 28, o = 1, single = false}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const t = Math.max(-1, Math.min(1, tilt(f)));
	const a = (t * 16 * Math.PI) / 180;
	const lx = x - L * Math.cos(a), ly = y - L * Math.sin(a), rx = x + L * Math.cos(a), ry = y + L * Math.sin(a);
	const left = clamp01(-t), right = clamp01(t);
	return (
		<g opacity={o}>
			<path d={`M${x - 18},${y + 46} L${x},${y + 4} L${x + 18},${y + 46} Z`} fill="#e9e2d3" stroke={INK_SOFT} strokeWidth={3} />
			<line x1={lx} y1={ly} x2={rx} y2={ry} stroke={INK} strokeWidth={6} strokeLinecap="round" />
			<circle cx={x} cy={y} r={7} fill={INK} />
			<circle cx={lx} cy={ly + 14} r={14} fill={left > 0.5 ? '#f6d48c' : CARD} stroke={left > 0.5 ? AMBER_INK : INK_SOFT} strokeWidth={3} />
			<circle cx={rx} cy={ry + 14} r={14} fill={right > 0.5 ? '#f6d48c' : CARD} stroke={right > 0.5 ? AMBER_INK : INK_SOFT} strokeWidth={3} />
			{single ? (left > 0.5 || right > 0.5 ? <Sx x={x} y={y + 82} text={left > 0.5 ? 'too little' : 'too much'} size={size} color={AMBER_INK} anchor="middle" hand weight={700} at={-1000} /> : null) : <>
				<Sx x={lx} y={y + 82} text="too little" size={size} color={left > 0.5 ? AMBER_INK : GREYT} anchor="middle" hand weight={700} at={-1000} />
				<Sx x={rx} y={y + 82} text="too much" size={size} color={right > 0.5 ? AMBER_INK : GREYT} anchor="middle" hand weight={700} at={-1000} />
			</>}
		</g>
	);
};
/** A tilt function that steps to each value from its frame (eased over 18 frames). */
export const tiltSteps = (steps: [number, number][], start = 0) => (f: number) => {
	let v = start;
	for (const [at, to] of steps) v = lerp(v, to, smooth(prog(f, at, 18)));
	return v;
};

// ---------- the nutrient chain ----------
export const CHAIN_Y = 862;
export const CW = [336, 336, 336, 336];
export const ChainRows = (rows: Partial<Record<'n' | 'j' | 'c' | 'e', SRow[]>>, hot?: Partial<Record<'n' | 'j' | 'c' | 'e', SBox['hot']>>): SBox[] => [
	{head: 'nutrient', w: CW[0], rows: rows.n ?? [], hot: hot?.n},
	{head: 'normal job', w: CW[1], rows: rows.j ?? [], hot: hot?.j},
	{head: 'change', w: CW[2], rows: rows.c ?? [], hot: hot?.c},
	{head: 'effect', w: CW[3], rows: rows.e ?? [], hot: hot?.e},
];
/** The chain along the bottom with the beam at its left end. */
export const Chain: React.FC<{boxes: SBox[]; tilt: (f: number) => number; o?: number; y?: number; h?: number}> = ({boxes, tilt, o = 1, y = CHAIN_Y, h = 180}) => (
	<g opacity={o}>
		<rect x={96} y={y} width={196} height={h} rx={18} fill={CARD} stroke={EDGE} strokeWidth={3} />
		<BalanceBeam x={194} y={y + 66} tilt={tilt} L={70} size={34} single />
		<PathwayStrip x={310} y={y} h={h} boxes={boxes} gap={56} size={32} headSize={30} />
	</g>
);

// ---------- gear ----------
export const Gear: React.FC<{x: number; y: number; r?: number; spin?: number; grey?: number; hot?: number; o?: number}> = ({x, y, r = 34, spin = 0, grey = 0, hot = 0, o = 1}) => {
	if (o <= 0.01) return null;
	const teeth = 8;
	const d = Array.from({length: teeth * 2}, (_, i) => {
		const a = (i / (teeth * 2)) * Math.PI * 2 + spin;
		const rr = i % 2 ? r : r * 1.28;
		const a2 = a + Math.PI / (teeth * 2);
		const rr2 = i % 2 ? r * 1.28 : r;
		return `${i ? 'L' : 'M'}${x + rr * Math.cos(a)},${y + rr * Math.sin(a)} L${x + rr * Math.cos(a2 - 0.05)},${y + rr * Math.sin(a2 - 0.05)} L${x + rr2 * Math.cos(a2 + 0.05)},${y + rr2 * Math.sin(a2 + 0.05)}`;
	}).join(' ') + ' Z';
	const fill = hot > 0.5 ? '#f6d48c' : grey > 0.5 ? '#e4e0d8' : '#d9e8f6';
	const stroke = hot > 0.5 ? AMBER_INK : grey > 0.5 ? '#aaa296' : BLUE;
	return (
		<g opacity={o}>
			{hot > 0.5 ? <circle cx={x} cy={y} r={r * 1.7} fill={AMBER} opacity={0.25} /> : null}
			<path d={d} fill={fill} stroke={stroke} strokeWidth={3} strokeLinejoin="round" />
			<circle cx={x} cy={y} r={r * 0.36} fill={CARD} stroke={stroke} strokeWidth={3} />
		</g>
	);
};

// ---------- glucose hexagon ----------
export const Hex: React.FC<{x: number; y: number; r?: number; o?: number}> = ({x, y, r = 11, o = 1}) => (o <= 0.01 ? null : (
	<path opacity={o} d={Array.from({length: 6}, (_, i) => `${i ? 'L' : 'M'}${x + r * Math.cos((i * Math.PI) / 3)},${y + r * Math.sin((i * Math.PI) / 3)}`).join(' ') + 'Z'} fill="#f3c86b" stroke={AMBER_INK} strokeWidth={2.5} />
));

// ---------- years strip ----------
export type YS = {x: number; y: number; w: number; h: number};
/** 0 to 15 years: insulin (teal) climbs to year 8 then falls; blood glucose (amber) stays in the usual band, then rises.
 *  Lines draw up to year `yr(f)`. */
export const insulinAt = (t: number) => (t <= 8 ? 0.25 + 0.6 * smooth(t / 8) : 0.85 - 0.45 * smooth((t - 8) / 7));
export const glucoseAt = (t: number) => (t <= 8 ? 0.3 + 0.03 * Math.sin(t) : 0.3 + 0.55 * smooth((t - 8) / 7));
export const YearsStrip: React.FC<{g: YS; yr: (f: number) => number; at?: number; o?: number; size?: number}> = ({g, yr, at = -1000, o = 1, size = 28}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const T = Math.max(0, Math.min(15, yr(f)));
	const X = (t: number) => g.x + (t / 15) * g.w;
	const Y = (u: number) => g.y + g.h - u * g.h;
	const line = (fn: (t: number) => number) => { const pts: string[] = []; for (let t = 0; t <= T + 0.001; t += 0.25) pts.push(`${X(t)},${Y(fn(t))}`); return pts.length > 1 ? 'M' + pts.join(' L') : ''; };
	return (
		<g opacity={v}>
			<rect x={g.x} y={g.y} width={g.w} height={g.h} fill={CARD} opacity={0.9} />
			<rect x={g.x} y={Y(0.38)} width={g.w} height={Y(0.22) - Y(0.38)} fill={TEAL} opacity={0.14} />
			<Sx x={g.x + g.w - 8} y={Y(0.22) - 10} text="usual glucose range" size={size - 2} color={TEAL} anchor="end" hand at={-1000} />
			<path d={`M${g.x},${g.y} L${g.x},${g.y + g.h} L${g.x + g.w},${g.y + g.h}`} fill="none" stroke={INK} strokeWidth={3.5} />
			{[0, 5, 10, 15].map(t => <g key={t}><line x1={X(t)} x2={X(t)} y1={g.y + g.h} y2={g.y + g.h + 10} stroke={INK} strokeWidth={3} /><Sx x={X(t)} y={g.y + g.h + size * 1.3} text={`${t}`} size={size} color={INK} anchor="middle" weight={700} at={-1000} /></g>)}
			<Sx x={g.x + g.w / 2} y={g.y + g.h + size * 2.5} text="years" size={size} color={INK} anchor="middle" weight={700} at={-1000} />
			<path d={line(insulinAt)} fill="none" stroke="#2f5f8f" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
			<path d={line(glucoseAt)} fill="none" stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="14 8" />
			<line x1={X(T)} x2={X(T)} y1={g.y} y2={g.y + g.h} stroke={INK_SOFT} strokeWidth={2} strokeDasharray="6 6" />
			<circle cx={X(T)} cy={Y(insulinAt(T))} r={9} fill="#2f5f8f" />
			<circle cx={X(T)} cy={Y(glucoseAt(T))} r={9} fill={AMBER_INK} />
			<line x1={g.x + 14} x2={g.x + 56} y1={g.y - 22} y2={g.y - 22} stroke="#2f5f8f" strokeWidth={6} />
			<Sx x={g.x + 64} y={g.y - 12} text="insulin" size={size} color={INK} weight={700} at={-1000} />
			<line x1={g.x + 190} x2={g.x + 232} y1={g.y - 22} y2={g.y - 22} stroke={AMBER_INK} strokeWidth={6} strokeDasharray="12 6" />
			<Sx x={g.x + 240} y={g.y - 12} text="blood glucose" size={size} color={INK} weight={700} at={-1000} />
		</g>
	);
};

// ---------- the attempt bar chart ----------
export type BC = {x: number; y: number; w: number; h: number};
/** New type 2 cases per 1 000 adults per year (0 to 35). `ob` brightens the obesity bars; `fh` outlines the family history
 *  bars; `pulse` pulses bar i from a frame. */
export const BarChart: React.FC<{g: BC; size?: number; lsize?: number; ob?: number; fh?: number; pulses?: [number, number][]; o?: number}> = ({g, size = 28, lsize = 26, ob, fh, pulses = [], o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const Y = (v: number) => g.y + g.h - (v / 35) * g.h;
	const slot = g.w / BARS.length, bw = slot * 0.5;
	const obv = ob === undefined ? 0 : prog(f, ob, 12);
	const fhv = fh === undefined ? 0 : prog(f, fh, 12);
	return (
		<g opacity={o}>
			<rect x={g.x} y={g.y} width={g.w} height={g.h} fill={CARD} opacity={0.9} />
			{[0, 5, 10, 15, 20, 25, 30, 35].map(v => <g key={v}><line x1={g.x} x2={g.x + g.w} y1={Y(v)} y2={Y(v)} stroke="#e6ddcc" strokeWidth={1.5} /><line x1={g.x - 10} x2={g.x} y1={Y(v)} y2={Y(v)} stroke={INK} strokeWidth={3} /><Sx x={g.x - 16} y={Y(v) + size * 0.35} text={`${v}`} size={size} color={INK} anchor="end" weight={600} at={-1000} /></g>)}
			<path d={`M${g.x},${g.y} L${g.x},${g.y + g.h} L${g.x + g.w},${g.y + g.h}`} fill="none" stroke={INK} strokeWidth={3.5} />
			{BARS.map((b, i) => {
				const bx = g.x + slot * i + (slot - bw) / 2;
				const pu = pulses.filter(p => p[0] === i).reduce((m, p) => Math.max(m, f >= p[1] && f <= p[1] + 40 ? Math.sin(((f - p[1]) / 40) * Math.PI) : 0), 0);
				const dim = obv > 0.01 && !b.ob ? 0.45 : 1;
				const lines = wrapM(b.lab, lsize, slot - 10, false, 600);
				return (
					<g key={i}>
						{pu > 0.01 ? <rect x={bx - 10} y={Y(b.v) - 10} width={bw + 20} height={g.y + g.h - Y(b.v) + 10} rx={10} fill={AMBER} opacity={0.35 * pu} /> : null}
						<rect x={bx} y={Y(b.v)} width={bw} height={g.y + g.h - Y(b.v)} fill={b.ob ? '#7f9cbd' : '#b9c6d4'} opacity={dim} />
						{b.fh && fhv > 0.01 ? <rect x={bx - 4} y={Y(b.v) - 4} width={bw + 8} height={g.y + g.h - Y(b.v) + 4} fill="none" stroke={AMBER_INK} strokeWidth={5} opacity={fhv} /> : null}
						<Sx x={bx + bw / 2} y={Y(b.v) - 10} text={`${b.v}`} size={size} color={INK} anchor="middle" weight={800} at={-1000} />
						{lines.map((ln, k) => <Sx key={k} x={bx + bw / 2} y={g.y + g.h + lsize * 1.25 + k * lsize * 1.15} text={ln} size={lsize} color={b.ob && obv > 0.5 ? BLUE : INK} anchor="middle" weight={600} at={-1000} />)}
					</g>
				);
			})}
			{wrapM('new cases of type 2 diabetes (per 1 000 adults per year)', size, g.w + size * 2, false, 700).reverse().map((ln, k) => <Sx key={k} x={g.x - size * 0.6} y={g.y - size * 0.9 - k * size * 1.15} text={ln} size={size} color={INK} weight={700} at={-1000} />)}
		</g>
	);
};
export {GREEN, RED, vis};
