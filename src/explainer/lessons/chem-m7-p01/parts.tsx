// M7 P01 board pieces, on the M6 P02 practical kit (readout, graph axes, risk table, titled cards, pen links; imported)
// and the M7 molecule kit. README for Claude:
// - RUN: the three alkanes' fixed colours (heptane teal, octane amber, nonane violet), used on bottle labels, graph
//   lines, table rows, bars and the agreement strip.
// - Bottle: the P03 dropper bottle with coded label text on its blank label (never stretched).
// - SetUp: the probe stand (new plate) with an optional fume cupboard behind it at lower opacity, a sample tube that
//   slides in, rises until the sleeve is under the liquid, holds and lowers away (coded path, no hands), the amber
//   readout on the cable, and evaporation wisps carrying warm-orange energy dots. All in one local frame; place it
//   with a transform. SU gives its key points.
// - RunLine: one logged run plotted point by point on a TGraph, with a ring on its lowest point.
// - SkelSmall: a quick skeletal chain (n carbons, optional branch) for ladders and attempts.
// - Bars: three shrinking bars in the run colours.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {AMBER, AMBER_INK, INK, INK_SOFT, PicH, Sx, TEAL, TRead, gx, gy, picW, smooth} from '../chem-m6-p02/parts';
import type {GG} from '../chem-m6-p02/parts';
import {BRANCH, Skel, VIOLET, outward, zig} from '../chem-m7-c01/molecules';
import type {Bond, V2} from '../chem-m7-c01/molecules';
import {lerp, vis} from '../chem-m7-c04a/parts';
import {DBOTTLE, HOOD, PROBE, TUBE} from './common';

export const RUN = [TEAL, AMBER, VIOLET];
export const RUN_INK = [TEAL, AMBER_INK, VIOLET];
export const NAMES = ['heptane', 'octane', 'nonane'];
export const FORMULAS = ['C_7H_16', 'C_8H_18', 'C_9H_20'];
export const HAZ = '#b5502b';
export const GREENC = '#2f8a5b';
export const ENERGY = '#e08a3c';

// ---------- dropper bottle with a coded label ----------
export const Bottle: React.FC<{cx: number; top: number; h: number; i: number; labelAt: number; o?: number; dimLabel?: number}> = ({cx, top, h, i, labelAt, o = 1, dimLabel}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const w = picW(DBOTTLE, h);
	const x = cx - w / 2;
	const ly0 = top + 0.52 * h, ly1 = top + 0.82 * h;
	const lo = prog(f, labelAt, 12) * (dimLabel === undefined ? 1 : 1 - 0.55 * prog(f, dimLabel, 14));
	const sz = Math.max(16, h * 0.062);
	return (
		<g opacity={o}>
			<PicH p={DBOTTLE} x={x} y={top} h={h} />
			{lo > 0.01 ? (
				<g opacity={lo}>
					<rect x={x + w * 0.05} y={ly0 + 3} width={w * 0.9} height={ly1 - ly0 - 6} rx={6} fill="none" stroke={RUN[i]} strokeWidth={4} />
					<Sx x={cx} y={(ly0 + ly1) / 2 - sz * 0.1} text={NAMES[i]} size={sz} color={INK} anchor="middle" weight={800} at={-1000} />
					<Sx x={cx} y={(ly0 + ly1) / 2 + sz * 1.1} text={FORMULAS[i]} size={sz * 0.9} color={RUN_INK[i]} anchor="middle" weight={700} at={-1000} />
				</g>
			) : null}
		</g>
	);
};

// ---------- the set-up ----------
const SH = 470, SX = 380, ST = 296;
const SW = picW(PROBE, SH);
const HH = 1300, HW = picW(HOOD, HH);
const TH = 170, TW = picW(TUBE, TH);
/** Key points of the set-up in its local frame. */
export const SU = {tipX: SX + 0.499 * SW, tipY: ST + 0.623 * SH, sleeveY: ST + 0.49 * SH, base: ST + SH, cable: [SX + 0.996 * SW, ST + 0.26 * SH] as V2, hoodX: SX + 0.499 * SW - 0.46 * HW, hoodY: -40, hoodW: HW, hoodH: HH, standX: SX};
export type TubeT = {inAt: number; upAt: number; downAt: number; outAt: number};
/** Evaporation wisps from the sleeve: n wisps per cycle (more = faster), each with a warm energy dot. lean: drift x. */
export const Wisps: React.FC<{x: number; y: number; at: number; out?: number; n?: number; lean?: number; o?: number; dots?: boolean}> = ({x, y, at, out, n = 4, lean = 0, o = 1, dots = true}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			{Array.from({length: n}, (_, k) => {
				const ph = (((f - at) * 1.1 + (k * 90) / n) % 90) / 90;
				const yy = y - ph * 170, xx = x + (k % 2 ? 12 : -12) + Math.sin(ph * 5 + k) * 12 + lean * ph * 120;
				const a = Math.sin(ph * Math.PI);
				return (
					<g key={k} opacity={a}>
						<path d={`M${xx},${yy} c10,-10 -10,-20 0,-30 c10,-10 -10,-20 0,-30`} fill="none" stroke="#a9b6c2" strokeWidth={4} strokeLinecap="round" />
						{dots ? <circle cx={xx} cy={yy - 6} r={6} fill={ENERGY} /> : null}
					</g>
				);
			})}
		</g>
	);
};
/** The probe stand, optional fume cupboard behind it, the sample tube on its path, readout and wisps. */
export const SetUp: React.FC<{at: number; hood?: number; hoodO?: number; tube?: TubeT; read?: (f: number) => string; readAt?: number; wisps?: {at: number; out?: number; n?: number; lean?: number}; tag?: string}> = ({at, hood, hoodO = 0.5, tube, read, readAt, wisps, tag = 'heptane'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at);
	if (v <= 0.01) return null;
	const ho = hood === undefined ? 0 : prog(f, hood, 20) * hoodO;
	let tx = SU.tipX - TW / 2, ty = 620, to = 0;
	if (tube) {
		const slideIn = smooth(prog(f, tube.inAt, 20)), up = smooth(prog(f, tube.upAt, 24)), down = smooth(prog(f, tube.downAt, 20)), away = smooth(prog(f, tube.outAt, 20));
		tx = lerp(SU.tipX + 260, SU.tipX, slideIn) - TW / 2 + away * 260;
		ty = lerp(620, 455, up - down);
		to = slideIn * (1 - away);
	}
	return (
		<g opacity={v}>
			{ho > 0.01 ? <g><clipPath id="p01-hood-clip"><rect x={-2000} y={70} width={6000} height={3000} /></clipPath><g clipPath="url(#p01-hood-clip)"><PicH p={HOOD} x={SU.hoodX} y={SU.hoodY} h={HH} o={ho} /></g></g> : null}
			<PicH p={PROBE} x={SX} y={ST} h={SH} />
			{to > 0.01 ? (
				<g opacity={to}>
					<PicH p={TUBE} x={tx} y={ty} h={TH} />
					<Sx x={tx + TW / 2} y={ty + TH + 30} text={tag} size={24} color={TEAL} anchor="middle" weight={700} at={-1000} />
				</g>
			) : null}
			{wisps ? <Wisps x={SU.tipX} y={SU.sleeveY + 10} at={wisps.at} out={wisps.out} n={wisps.n} lean={wisps.lean} /> : null}
			{read ? <TRead x={SU.cable[0] - 40} y={SU.cable[1] - 150} text={read} at={readAt ?? at} sample="21.8 °C" /> : null}
		</g>
	);
};
/** Readout text falling from a to b between frames f0 and f1 (one decimal place). */
export const fall = (a: number, b: number, f0: number, f1: number) => (f: number) => `${lerp(a, b, smooth(Math.max(0, Math.min(1, (f - f0) / (f1 - f0))))).toFixed(1)} °C`;

// ---------- logged runs ----------
export type Pt = [number, number];
export const RUNS: Pt[][] = [
	[[0, 21.8], [20, 19.3], [40, 17.7], [60, 16.6], [80, 16.0], [100, 15.8], [120, 15.9], [140, 16.3], [160, 16.9], [180, 17.5]],
	[[0, 21.8], [20, 21.0], [40, 20.5], [60, 20.1], [80, 19.9], [100, 19.7], [120, 19.6], [140, 19.5], [160, 19.5], [180, 19.5]],
	[[0, 21.8], [20, 21.6], [40, 21.5], [60, 21.4], [80, 21.3], [100, 21.3], [120, 21.2], [140, 21.2], [160, 21.1], [180, 21.1]],
];
export const LOW: Pt[] = [[100, 15.8], [140, 19.5], [160, 21.1]];
/** One run plotted point by point from `at` (step frames apart); ring on the lowest point at `ring`. */
export const RunLine: React.FC<{g: GG; i: number; at: number; step?: number; ring?: number; o?: number}> = ({g, i, at, step = 6, ring, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01 || f < at) return null;
	const pts = RUNS[i];
	const n = Math.min(pts.length, Math.floor((f - at) / step) + 1);
	const d = 'M' + pts.slice(0, n).map(p => `${gx(g, p[0])},${gy(g, p[1])}`).join(' L');
	const rg = ring === undefined ? 0 : prog(f, ring, 10);
	const L = LOW[i];
	return (
		<g opacity={o}>
			<path d={d} fill="none" stroke={RUN[i]} strokeWidth={5} strokeLinejoin="round" strokeLinecap="round" />
			{pts.slice(0, n).map((p, k) => <circle key={k} cx={gx(g, p[0])} cy={gy(g, p[1])} r={7} fill={RUN[i]} stroke={INK} strokeWidth={2} />)}
			{rg > 0.01 ? <circle cx={gx(g, L[0])} cy={gy(g, L[1])} r={18 * (1 + 0.4 * (1 - rg))} fill="none" stroke={RUN_INK[i]} strokeWidth={4} opacity={rg} /> : null}
		</g>
	);
};
/** ΔT bracket from the start line down to run i's lowest point (label optional). */
export const DropBracket: React.FC<{g: GG; i: number; at: number; label?: string; labelAt?: number; dx?: number; o?: number; size?: number}> = ({g, i, at, label, labelAt, dx = 26, o = 1, size = 28}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const X = gx(g, LOW[i][0]) + dx, y1 = gy(g, 21.8), y2 = gy(g, LOW[i][1]);
	return (
		<g opacity={v}>
			<DrawPath d={`M${X - 8},${y1} L${X},${y1} L${X},${y2} L${X - 8},${y2}`} at={at} dur={12} color={RUN_INK[i]} width={4} />
			{label ? <Sx x={X + 10} y={(y1 + y2) / 2 + size * 0.35} text={label} size={size} color={RUN_INK[i]} weight={800} at={labelAt ?? at} /> : null}
		</g>
	);
};

// ---------- small skeletal chains ----------
/** Straight chain of n carbons (zigzag), optional methyl branch on carbon `br` (0-based) in amber. */
export const chainPts = (n: number, x: number, y: number, dx = 44, dy = 26): V2[] => zig(n, x, y, dx, dy);
export const SkelSmall: React.FC<{n: number; x: number; y: number; at: number; out?: number; dx?: number; dy?: number; br?: number; brColor?: string; color?: string; o?: number; width?: number}> = ({n, x, y, at, out, dx = 44, dy = 26, br, brColor = BRANCH, color = INK, o = 1, width = 4}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const pts = chainPts(n, x, y, dx, dy);
	const bonds: Bond[] = Array.from({length: n - 1}, (_, i) => ({a: i, b: i + 1}));
	const all = [...pts];
	if (br !== undefined) { all.push(outward(pts, br, dx)); bonds.push({a: br, b: all.length - 1, color: brColor}); }
	return <g opacity={v}><Skel pts={all} bonds={bonds} at={at} stagger={2} width={width} color={color} /></g>;
};

// ---------- bars ----------
export const MEANS = [6.0, 2.2, 0.7];
export const Bars: React.FC<{x: number; y: number; at: number; w?: number; k?: number; gap?: number; o?: number; labels?: boolean}> = ({x, y, at, w = 70, k = 22, gap = 40, o = 1, labels = true}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			{MEANS.map((m, i) => {
				const h = m * k * smooth(prog(f, at + i * 6, 16));
				const X = x + i * (w + gap);
				return (
					<g key={i}>
						<rect x={X} y={y - h} width={w} height={h} rx={6} fill={RUN[i]} opacity={0.85} />
						{labels ? <Sx x={X + w / 2} y={y + 30} text={NAMES[i]} size={22} color={RUN_INK[i]} anchor="middle" weight={700} at={-1000} /> : null}
					</g>
				);
			})}
			<line x1={x - 10} x2={x + 3 * w + 2 * gap + 10} y1={y} y2={y} stroke={INK} strokeWidth={3} />
		</g>
	);
};
export {INK, INK_SOFT, TEAL, AMBER, AMBER_INK, VIOLET};
