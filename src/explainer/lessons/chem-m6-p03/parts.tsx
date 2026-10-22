// Drawing parts for M6 P03 (measuring the pH of a range of acids and bases). One visual system with P02 and C01 to
// C16 (re-exported through P02): the C07 full meter, the C05 meter with a movable coded probe, the C16 glass-bulb
// close-up, chips, crossed chips, question card, countdown, key notes, the P02 risk table, cards and readouts. New here:
// - Row: the five sample beakers (coded labels with a teal, grey or violet tab, colourless fills, mean chips);
// - Bottle: the buffer bottle with a coded coloured label band and its pH;
// - Holder: the probe-in-holder plate with bulb and cable points; StableDot; Stream (wash-bottle rinse); FallDrop2;
// - ScaleP: the 0 to 14 pH scale with tinted halves; BarPair: schematic hydronium/hydroxide bars;
// - CalG: the calibration graph (signal against pH): buffer points, the line and its dashed ends, pivot lines.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {
	AMBER_INK, BASE, BASE_INK, Fade, INK, INK_SOFT, LiquidBeaker, PHChip, PROTON, PROTON_INK, PicH, Sx, TEAL, beakerW, clamp01, gx, gy, lerp, natPt, picW, smooth, vis,
} from '../chem-m6-p02/parts';
import type {GG} from '../chem-m6-p02/parts';
import {BUFFER, BUF_N, HOLDER, HOLD_N, METER_G, PHMETER} from './assets';

export * from '../chem-m6-p02/parts';

export const ACID_TAB = TEAL, BASE_TAB = BASE, WATER_TAB = '#9a948a';
export const PALE = '#e4eef5';

// ---------- the five-beaker row ----------
export type RowItem = {name: string; sub?: string; tab: string};
export const ROW: RowItem[] = [
	{name: 'HCl', tab: ACID_TAB}, {name: 'acetic acid', sub: '(ethanoic acid)', tab: ACID_TAB}, {name: 'distilled water', tab: WATER_TAB},
	{name: 'ammonia, NH_3', tab: BASE_TAB}, {name: 'NaOH', tab: BASE_TAB},
];
export const MEANS = ['2.03', '3.40', '5.96', '10.59', '11.96'];
export type RowG = {x0: number; dx: number; y: number; h: number};
export const rowCx = (g: RowG, i: number) => g.x0 + i * g.dx + beakerW(g.h) / 2;
/** Beakers write on at at[i]; labels at lab[i] then dim to grey at dimAt; mean chips at chip[i]; o[i] dims a beaker. */
export const Row: React.FC<{g: RowG; at: number[]; lab?: number[]; dimAt?: number; chip?: (number | undefined)[]; o?: number[]; size?: number; tick?: number; out?: number}> = ({g, at, lab, dimAt, chip = [], o = [], size = 28, tick, out}) => {
	const f = useCurrentFrame();
	const vo = out === undefined ? 1 : 1 - prog(f, out, 14);
	if (vo <= 0.01) return null;
	const d = dimAt === undefined ? 0 : prog(f, dimAt, 14);
	return (
		<g opacity={vo}>
			{ROW.map((r, i) => {
				const x = g.x0 + i * g.dx, cx = rowCx(g, i);
				const v = prog(f, at[i], 14) * (o[i] ?? 1);
				if (v <= 0.01) return null;
				const la = lab ? lab[i] : at[i];
				const ly = g.y + g.h + size + 16;
				const tw0 = Math.max(60, r.name.length * size * 0.5);
				return (
					<g key={i} opacity={v}>
						<LiquidBeaker x={x} y={g.y} h={g.h} tint={PALE} />
						<g opacity={1 - 0.55 * d}>
							<rect x={cx - tw0 / 2 - 22} y={ly - size * 0.8} width={12} height={size * 0.95} rx={3} fill={r.tab} opacity={prog(f, la, 10)} />
							<Sx x={cx - tw0 / 2 - 2} y={ly} text={r.name} size={size} color={INK} weight={700} at={la} />
							{r.sub ? <Sx x={cx - tw0 / 2 - 2} y={ly + size * 1.05} text={r.sub} size={size * 0.78} color={INK_SOFT} weight={600} at={la + 6} /> : null}
						</g>
						{tick !== undefined ? <DrawPath d={`M${cx + tw0 / 2 + 10},${ly - 10} l8,9 l15,-20`} at={tick + i * 5} dur={8} color={TEAL} width={4} /> : null}
						{chip[i] !== undefined ? <PHChip x={cx} y={g.y - 70} text={MEANS[i]} at={chip[i] as number} size={30} anchor="middle" drop /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- buffer bottle with a coded band ----------
export const bottleW = (h: number) => picW(BUFFER, h);
export const Bottle: React.FC<{x: number; y: number; h: number; ph: string; color: string; at: number; out?: number; o?: number; tick?: number}> = ({x, y, h, ph, color, at, out, o = 1, tick}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const a = natPt(BUFFER, x, y, h, BUF_N.x0, BUF_N.y0), b = natPt(BUFFER, x, y, h, BUF_N.x1, BUF_N.y1);
	const bh = b[1] - a[1];
	return (
		<g opacity={v}>
			<PicH p={BUFFER} x={x} y={y} h={h} />
			<rect x={a[0] + 4} y={a[1] + bh * 0.08} width={b[0] - a[0] - 8} height={bh * 0.32} fill={color} opacity={0.85} />
			<Sx x={(a[0] + b[0]) / 2} y={a[1] + bh * 0.78} text={ph} size={Math.max(16, h * 0.085)} color={INK} anchor="middle" weight={800} at={-1000} />
			{tick !== undefined ? <DrawPath d={`M${b[0] - 6},${y + 6} l10,12 l20,-26`} at={tick} dur={10} color="#2f8a5b" width={5} /> : null}
		</g>
	);
};

// ---------- probe in holder ----------
export const holdW = (h: number) => picW(HOLDER, h);
export const holdPt = (x: number, y: number, h: number, n: [number, number]) => natPt(HOLDER, x, y, h, n[0], n[1]);

// ---------- meter screen helpers ----------
export const meterScreen = (x: number, y: number, h: number) => {
	const pts = METER_G.screen.map(([nx, ny]) => natPt(PHMETER, x, y, h, nx, ny));
	return {pts, cx: (pts[0][0] + pts[1][0] + pts[2][0] + pts[3][0]) / 4, cy: (pts[0][1] + pts[2][1]) / 2, right: pts[1][0], top: pts[0][1], bottom: pts[2][1]};
};
/** A small green "stable" dot (lights at `at`, optionally off at `out`). */
export const StableDot: React.FC<{x: number; y: number; at: number; out?: number; r?: number}> = ({x, y, at, out, r = 9}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 8);
	if (v <= 0.01) return null;
	return <g opacity={v}><circle cx={x} cy={y} r={r + 5} fill="#7fd08a" opacity={0.35} /><circle cx={x} cy={y} r={r} fill="#3fae55" stroke="#1f6f33" strokeWidth={2} /></g>;
};
/** Flickering digits that settle to `final` at `settle`. */
export const flicker = (from: number, settle: number, final: string, lo: number, hi: number, dp = 2) => (f: number) => {
	if (f < from) return '';
	if (f >= settle) return final;
	const r = Math.abs(Math.sin(f * 12.9898) * 43758.5453) % 1;
	return (lo + (hi - lo) * r).toFixed(dp);
};

// ---------- rinse stream and drops ----------
export const Stream: React.FC<{a: [number, number]; b: [number, number]; at: number; out: number; color?: string}> = ({a, b, at, out, color = '#9cc8e6'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 6);
	if (v <= 0.01) return null;
	const mx = (a[0] + b[0]) / 2, my = Math.min(a[1], b[1]) - 30;
	return (
		<g opacity={v}>
			<path d={`M${a[0]},${a[1]} Q${mx},${my} ${b[0]},${b[1]}`} fill="none" stroke={color} strokeWidth={7} strokeLinecap="round" opacity={0.85} />
			{[0, 1, 2].map(i => { const q = ((f - at + i * 7) % 20) / 20; return <circle key={i} cx={b[0] - 4 + i * 4} cy={b[1] + 10 + q * 90} r={4} fill={color} opacity={1 - q} />; })}
		</g>
	);
};
/** One drop clinging at (x, y0) from `at`, falling to y1 from `fall`, with a small ripple. */
export const ClingDrop: React.FC<{x: number; y0: number; y1: number; at: number; fall: number; color?: string; r?: number}> = ({x, y0, y1, at, fall, color = '#9cc8e6', r = 9}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const q = smooth(clamp01((f - fall) / 16));
	const rip = clamp01((f - fall - 16) / 24);
	return (
		<g>
			{q < 1 ? <ellipse cx={x} cy={lerp(y0, y1, q * q)} rx={r * 0.8} ry={r} fill={color} stroke={INK_SOFT} strokeWidth={1.5} opacity={prog(f, at, 8)} /> : null}
			{rip > 0 && rip < 1 ? <ellipse cx={x} cy={y1} rx={14 + rip * 40} ry={5 + rip * 10} fill="none" stroke={color} strokeWidth={3} opacity={1 - rip} /> : null}
		</g>
	);
};

// ---------- pH scale with tinted halves ----------
export const phPos = (x: number, w: number, p: number) => x + (p / 14) * w;
export const ScaleP: React.FC<{x: number; y: number; w: number; at: number; out?: number; o?: number; size?: number}> = ({x, y, w, at, out, o = 1, size = 28}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const d = smooth(prog(f, at, 20));
	const X = (p: number) => phPos(x, w, p);
	return (
		<g opacity={v}>
			<rect x={x} y={y - 14} width={(X(7) - x) * d} height={28} rx={8} fill={PROTON} opacity={0.18} />
			<rect x={X(7)} y={y - 14} width={(x + w - X(7)) * d} height={28} rx={8} fill={BASE} opacity={0.18} />
			<line x1={x} y1={y} x2={x + w * d} y2={y} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
			{Array.from({length: 15}, (_, i) => (
				<g key={i} opacity={prog(f, at + i, 8)}>
					<line x1={X(i)} y1={y - 14} x2={X(i)} y2={y + 14} stroke={i === 7 ? INK : INK_SOFT} strokeWidth={i === 7 ? 4 : 2.5} />
					<Sx x={X(i)} y={y + size + 22} text={String(i)} size={size} color={i === 7 ? INK : INK_SOFT} anchor="middle" weight={i === 7 ? 800 : 600} at={-1000} />
				</g>
			))}
			<Sx x={X(7)} y={y + size * 2 + 34} text="7 (neutral at 25 °C)" size={size * 0.9} color={INK_SOFT} anchor="middle" weight={600} at={at + 14} />
			<Sx x={x - 18} y={y + 10} text="pH" size={size + 2} color={INK_SOFT} anchor="end" weight={700} at={-1000} />
		</g>
	);
};

// ---------- schematic hydronium / hydroxide bars ----------
export const BarPair: React.FC<{x: number; base: number; hT: number; hV: number; at: number; out?: number; o?: number; tag: string; tagColor: string; bw?: number}> = ({x, base, hT, hV, at, out, o = 1, tag, tagColor, bw = 56}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const g = smooth(prog(f, at, 20));
	return (
		<g opacity={v}>
			<line x1={x - 20} y1={base} x2={x + 2 * bw + 50} y2={base} stroke={INK_SOFT} strokeWidth={3} />
			<rect x={x} y={base - hT * g} width={bw} height={Math.max(2, hT * g)} rx={8} fill={PROTON} opacity={0.88} />
			<rect x={x + bw + 30} y={base - hV * g} width={bw} height={Math.max(2, hV * g)} rx={8} fill={BASE} opacity={0.88} />
			<Sx x={x + bw / 2} y={base + 30} text="H_3O^{+}" size={24} color={PROTON_INK} anchor="middle" weight={700} at={-1000} />
			<Sx x={x + bw * 1.5 + 30} y={base + 30} text="OH^{−}" size={24} color={BASE_INK} anchor="middle" weight={700} at={-1000} />
			<Sx x={x + bw + 15} y={base + 66} text={tag} size={28} color={tagColor} anchor="middle" weight={700} at={at + 10} />
		</g>
	);
};

// ---------- calibration graph: meter signal against pH ----------
export const sig = (p: number, slope = 1) => 0.5 + ((7 - p) / 7) * 0.42 * slope;
export const CalAxes: React.FC<{g: GG; at: number; out?: number; o?: number; size?: number}> = ({g, at, out, o = 1, size = 24}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<line x1={g.x} y1={g.y + g.h} x2={g.x + g.w} y2={g.y + g.h} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			<line x1={g.x} y1={g.y + g.h} x2={g.x} y2={g.y} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			{[0, 2, 4, 6, 7, 8, 10, 12, 14].map(t => (
				<g key={t}>
					<line x1={gx(g, t)} y1={g.y + g.h} x2={gx(g, t)} y2={g.y + g.h + 9} stroke={INK} strokeWidth={3} />
					<Sx x={gx(g, t)} y={g.y + g.h + size * 1.3} text={String(t)} size={size} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />
				</g>
			))}
			<Sx x={g.x + g.w / 2} y={g.y + g.h + size * 2.6} text="pH" size={size + 2} color={INK} anchor="middle" weight={700} at={-1000} />
			<Sx x={g.x - 10} y={g.y - 18} text="meter signal (voltage)" size={size + 2} color={INK} weight={700} at={-1000} />
		</g>
	);
};
/** A buffer point dropping onto the line at pH p. */
export const CalPt: React.FC<{g: GG; p: number; at: number; o?: number; slope?: number}> = ({g, p, at, o = 1, slope = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const q = smooth(clamp01((f - at) / 16));
	return <circle cx={gx(g, p)} cy={lerp(g.y - 20, gy(g, sig(p, slope)), q)} r={11} fill="#6aa3d8" stroke="#2f5d9e" strokeWidth={3} opacity={o} />;
};
/** Segment of the calibration line between pH a and b. */
export const CalSeg: React.FC<{g: GG; a: number; b: number; at: number; color: string; dash?: string; width?: number; out?: number; o?: number; slope?: number; pivot?: number}> = ({g, a, b, at, color, dash, width = 5, out, o = 1, slope = 1, pivot = 7}) => {
	const f = useCurrentFrame();
	const v = vis(f, at - 1, out, 10) * o;
	if (v <= 0.01) return null;
	const s = (p: number) => sig(pivot) + (sig(p, slope) - sig(pivot, slope));
	return <g opacity={v}><DrawPath d={`M${gx(g, a)},${gy(g, s(a))} L${gx(g, b)},${gy(g, s(b))}`} at={at} dur={16} color={color} width={width} dash={dash} /></g>;
};
void AMBER_INK; void Fade; void holdW; void HOLD_N;
