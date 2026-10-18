// B13 shared pieces (G03 and P03 import some of them): the measured lesson, plates (by alpha box, dashed stand-in when
// not in HAVE), and new coded parts: panels, a number ticker, sample tube chips and the tube grid, site badges with
// streams, the sample-bounce simulation (seeded normal draws, computed spread), coded allele beads, diversity trays,
// a crash line, the founder boat, data tables, a scatter plot and small map chips. The genetics kit (pedigree symbols,
// MistakeChip, ModelLine, Countdown, Heading, Overlay, Sx and the rest) comes from B9's shared chain.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/b13/measured/lesson.json';
import {sceneOf} from '../bio-m5-b06b/shared';
import {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, Fade, GREYT, GREY_INK, INK, INK_SOFT, Sx, clamp01, lerp, prog, rng, tw} from '../bio-m5-b09/shared';
import type {PB} from '../bio-m5-b09/shared';
import {proj, smoothPath} from './world';
import type {LL} from './world';
import * as A from './assets';

export * from '../bio-m5-b09/shared';
export {cw, Cross} from '../bio-m5-b06b/shared';
export const S = sceneOf(lesson as unknown as {scenes: unknown[]});
export const hold = (id: string) => S(id).responseHold as {startFrame: number; endFrame: number};
export const TEAL = '#2f7f86';
export const TEAL_SOFT = '#d6ecee';
export const RED_BLOOD = '#9e2a22';
export const CARD = '#fffdf8';
export const EDGE = 'rgba(60,45,20,0.22)';

// ---------- plates ----------
export const P = (src: string, nat: [number, number], box: [number, number, number, number], have: Set<string> = A.HAVE): PB => ({src, nat, box, have: have.has(src)});
export const PL13 = {
	sickle: P(A.SICKLE, [2000, 2000], [200, 597, 1800, 1403]),
	normalHalf: P(A.SICKLE, [2000, 2000], [200, 597, 1040, 1403]),
	sickleHalf: P(A.SICKLE, [2000, 2000], [1080, 597, 1800, 1403]),
	plasmo: P(A.PLASMO, [2000, 2000], [201, 334, 1799, 1667]),
	rack: P(A.RACK, [2000, 2000], [320, 424, 1723, 1566]),
	mosquito: P(A.MOSQUITO, [2000, 2000], [293, 344, 1749, 1631]),
	devil: P(A.DEVIL, [2000, 2000], [225, 359, 1784, 1652]),
};

// ---------- small helpers ----------
export const vis = (f: number, at: number, out?: number, d = 12) => prog(f, at, d) * (out === undefined ? 1 : 1 - prog(f, out, d));
export const fmtN = (n: number) => Math.round(n).toLocaleString('en-AU');
/** A rounded card panel. */
export const Panel: React.FC<{x: number; y: number; w: number; h: number; o?: number; stroke?: string; sw?: number; fill?: string; r?: number; dash?: string}> = ({x, y, w, h, o = 1, stroke = EDGE, sw = 3, fill = CARD, r = 22, dash}) => (o <= 0.01 ? null : (
	<rect x={x} y={y} width={w} height={h} rx={r} fill={fill} stroke={stroke} strokeWidth={sw} strokeDasharray={dash} opacity={o} />
));
/** A number that ticks from `from` to `to` between frames a and b. */
export const Ticker: React.FC<{x: number; y: number; from?: number; to: number; a: number; b: number; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'; prefix?: string; suffix?: string; dp?: number; at?: number}> = ({x, y, from = 0, to, a, b, size = 48, color = INK, anchor = 'start', prefix = '', suffix = '', dp = 0, at}) => {
	const f = useCurrentFrame();
	const t = prog(f, a, Math.max(1, b - a));
	const v = lerp(from, to, t);
	const txt = dp ? v.toFixed(dp) : fmtN(v);
	return <Sx x={x} y={y} text={prefix + txt + suffix} size={size} color={color} weight={800} anchor={anchor} at={at ?? a} />;
};
/** A grey "?" mark. */
export const QMark: React.FC<{x: number; y: number; size?: number; o?: number; color?: string}> = ({x, y, size = 60, o = 1, color = AMBER_INK}) => (o <= 0.01 ? null : (
	<text x={x} y={y} textAnchor="middle" opacity={o} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size}} fill={color}>?</text>
));

// ---------- sample tubes ----------
const CAPS = ['#8e7cc3', '#4f9fc9', '#c4432f'];
/** One small capped sample tube (coded). */
export const TubeChip: React.FC<{x: number; y: number; s?: number; o?: number; cap?: number; tint?: number}> = ({x, y, s = 1, o = 1, cap = 0, tint = 0}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<rect x={-6} y={-14} width={12} height={30} rx={5} fill={tint > 0.01 ? '#f4efe2' : '#fbfaf5'} stroke={INK_SOFT} strokeWidth={1.6} />
		<rect x={-4.5} y={0} width={9} height={14} rx={4} fill={RED_BLOOD} />
		<rect x={-7} y={-19} width={14} height={7} rx={2} fill={CAPS[cap % 3]} />
	</g>
));
/** A grid of tube chips filling row by row as p goes 0..1. */
export const TubeGrid: React.FC<{x: number; y: number; cols: number; rows: number; dx?: number; dy?: number; p: number; s?: number; o?: number; tint?: number; seed?: number}> = ({x, y, cols, rows, dx = 22, dy = 44, p, s = 0.8, o = 1, tint = 0, seed = 3}) => {
	if (o <= 0.01) return null;
	const n = cols * rows;
	const r = rng(seed);
	const order = Array.from({length: n}, (_, i) => ({i, k: r()}));
	const shown = Math.floor(clamp01(p) * n);
	return (
		<g opacity={o}>
			{order.map(({i}) => {
				if (i >= shown) return null;
				const c = i % cols, rr = Math.floor(i / cols);
				return <TubeChip key={i} x={x + c * dx} y={y + rr * dy} s={s} cap={(i * 7) % 3} tint={tint} />;
			})}
			{tint > 0.01 ? <rect x={x - 14} y={y - 24} width={cols * dx + 6} height={rows * dy + 4} rx={14} fill="#7fae8a" opacity={0.18 * tint} /> : null}
		</g>
	);
};

// ---------- site badges and streams ----------
/** A coded lab badge: a ring with a small flask. */
export const SiteBadge: React.FC<{x: number; y: number; r?: number; o?: number; label?: string; size?: number}> = ({x, y, r = 34, o = 1, label, size = 22}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill={CARD} stroke={TEAL} strokeWidth={3.5} />
		<path d={`M${x - r * 0.18},${y - r * 0.5} L${x - r * 0.18},${y - r * 0.1} L${x - r * 0.45},${y + r * 0.42} L${x + r * 0.45},${y + r * 0.42} L${x + r * 0.18},${y - r * 0.1} L${x + r * 0.18},${y - r * 0.5}`} fill="none" stroke={TEAL} strokeWidth={3} strokeLinejoin="round" />
		<path d={`M${x - r * 0.33},${y + r * 0.2} L${x + r * 0.33},${y + r * 0.2} L${x + r * 0.42},${y + r * 0.38} L${x - r * 0.42},${y + r * 0.38} Z`} fill={TEAL} opacity={0.5} />
		{label ? <text x={x} y={y + r + size + 4} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size}} fill={INK}>{label}</text> : null}
	</g>
));
/** A dashed line with small chips flowing from a to b after `at`. */
export const Stream: React.FC<{a: [number, number]; b: [number, number]; at: number; o?: number; n?: number; color?: string; tubes?: boolean}> = ({a, b, at, o = 1, n = 4, color = TEAL, tubes = false}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16);
	if (p <= 0.01 || o <= 0.01) return null;
	const dots = Array.from({length: n}, (_, i) => {
		const t = (((f - at) / 46 + i / n) % 1 + 1) % 1;
		return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), t] as const;
	});
	return (
		<g opacity={o}>
			<line x1={a[0]} y1={a[1]} x2={lerp(a[0], b[0], p)} y2={lerp(a[1], b[1], p)} stroke={color} strokeWidth={2.5} strokeDasharray="7 7" opacity={0.7} />
			{p >= 0.99 ? dots.map(([x, y, t], i) => (tubes ? <TubeChip key={i} x={x} y={y} s={0.55} o={Math.sin(Math.PI * t)} cap={i} /> : <circle key={i} cx={x} cy={y} r={6} fill={color} opacity={Math.sin(Math.PI * t)} />)) : null}
		</g>
	);
};

// ---------- the sample-bounce simulation ----------
/** Seeded standard normal draws (Box-Muller). */
export const normals = (seed: number, n: number) => {
	const r = rng(seed);
	return Array.from({length: n}, () => {
		const u = Math.max(1e-9, r()), v = r();
		return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
	});
};
/** Standard error of a difference of two proportions with n people in each group. */
export const seDiff = (p1: number, p2: number, n: number) => Math.sqrt((p1 * (1 - p1)) / n + (p2 * (1 - p2)) / n);
/** Simulated study results (difference in percentage points) for groups of n each; true values p1 and p2. */
export const studyResults = (seed: number, count: number, p1: number, p2: number, n: number) => normals(seed, count).map(z => (p2 - p1 + z * seDiff(p1, p2, n)) * 100);
/**
 * A dot strip: an axis from lo to hi (percentage points), a zero line, and dots landing one by one from `at`
 * (each `gap` frames), stacked when they collide.
 */
export const BounceStrip: React.FC<{x: number; y: number; w: number; vals: number[]; at: number; gap?: number; lo?: number; hi?: number; color?: string; o?: number; r?: number; truth?: number; axisLabel?: string}> = ({x, y, w, vals, at, gap = 4, lo = -15, hi = 15, color = AMBER, o = 1, r = 11, truth, axisLabel}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const X = (v: number) => x + ((Math.max(lo, Math.min(hi, v)) - lo) / (hi - lo)) * w;
	const placed: {x: number; lvl: number}[] = [];
	const pts = vals.map(v => {
		const px = X(v);
		let lvl = 0;
		while (placed.some(q => q.lvl === lvl && Math.abs(q.x - px) < r * 2)) lvl++;
		placed.push({x: px, lvl});
		return {x: px, lvl};
	});
	const ticks = [];
	for (let t = Math.ceil(lo / 5) * 5; t <= hi; t += 5) ticks.push(t);
	return (
		<g opacity={o}>
			<line x1={x} y1={y} x2={x + w} y2={y} stroke={INK} strokeWidth={3} />
			{ticks.map(t => (
				<g key={t}>
					<line x1={X(t)} y1={y} x2={X(t)} y2={y + 10} stroke={INK} strokeWidth={2} />
					<text x={X(t)} y={y + 36} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 22}} fill={INK_SOFT}>{t > 0 ? '+' + t : t}</text>
				</g>
			))}
			<line x1={X(0)} y1={y - 150} x2={X(0)} y2={y} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="6 6" />
			<text x={X(0) - 10} y={y - 128} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 22}} fill={INK_SOFT}>no difference</text>
			{truth !== undefined ? <line x1={X(truth)} y1={y - 120} x2={X(truth)} y2={y} stroke={TEAL} strokeWidth={2.5} /> : null}
			{axisLabel ? <text x={x + w / 2} y={y + 70} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 22}} fill={INK_SOFT}>{axisLabel}</text> : null}
			{pts.map((q, i) => {
				const p = prog(f, at + i * gap, 8);
				if (p <= 0.01) return null;
				const cy = y - r - 4 - q.lvl * (r * 2 + 2);
				return <circle key={i} cx={q.x} cy={lerp(cy - 50, cy, p)} r={r} fill={color} stroke={AMBER_INK} strokeWidth={2} opacity={p} />;
			})}
		</g>
	);
};

// ---------- allele beads and diversity trays ----------
export const BEADC = ['#c4632e', '#3d7fb0', '#e2b13b', '#5e9c5a', '#8e6bb3', '#d0708f', '#4aa9a5', '#9a7b54', '#e08a3c'];
/** A coded allele bead; c indexes BEADC, or c = -1 for a plain cream bead. */
export const Bead: React.FC<{x: number; y: number; c: number; r?: number; o?: number; glow?: number}> = ({x, y, c, r = 12, o = 1, glow = 0}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{glow > 0.01 ? <circle cx={x} cy={y} r={r + 11} fill={AMBER} opacity={0.85 * glow} /> : null}
		<circle cx={x} cy={y} r={r} fill={c < 0 ? '#efe6d2' : BEADC[c % BEADC.length]} stroke="rgba(38,35,31,0.55)" strokeWidth={1.8} />
		<circle cx={x - r * 0.3} cy={y - r * 0.32} r={r * 0.28} fill="#fff" opacity={0.45} />
	</g>
));
/**
 * A tray of five markers (columns), each holding `per` beads; colours per marker come from `kinds[m]` distinct
 * alleles (seeded). Counts of distinct alleles are written under each column.
 */
export const DiversityTray: React.FC<{x: number; y: number; kinds: number[]; per?: number; o?: number; p?: number; seed?: number; glowAt?: (m: number, k: number) => number; label?: string; r?: number}> = ({x, y, kinds, per = 6, o = 1, p = 1, seed = 5, glowAt, label, r = 12}) => {
	if (o <= 0.01) return null;
	const rr = rng(seed);
	const colW = 64, rowH = r * 2 + 6;
	const w = kinds.length * colW + 20;
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={per * rowH + 74} rx={16} fill={CARD} stroke={EDGE} strokeWidth={3} />
			{label ? <text x={x + w / 2} y={y - 14} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 26}} fill={INK}>{label}</text> : null}
			{kinds.map((k, m) => {
				const base = Math.floor(rr() * BEADC.length);
				return (
					<g key={m}>
						{Array.from({length: per}, (_, j) => {
							const c = (base + (j % k)) % BEADC.length;
							const show = clamp01(p * (per + 2) - j - m * 0.3);
							return <Bead key={j} x={x + 42 + m * colW} y={y + 24 + j * rowH} c={c} r={r} o={show} glow={glowAt ? glowAt(m, j) : 0} />;
						})}
						<text x={x + 42 + m * colW} y={y + per * rowH + 52} textAnchor="middle" opacity={clamp01(p * 2 - 1)} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 22}} fill={INK_SOFT}>{k}</text>
					</g>
				);
			})}
		</g>
	);
};

// ---------- small line charts, boat, map chips ----------
/** A small population line that crashes and recovers narrow (illustrative). */
export const CrashLine: React.FC<{x: number; y: number; w: number; h: number; at: number; o?: number; color?: string}> = ({x, y, w, h, at, o = 1, color = INK}) => {
	const pts: [number, number][] = [[0, 0.2], [0.3, 0.22], [0.42, 0.25], [0.5, 0.92], [0.6, 0.88], [0.8, 0.6], [1, 0.5]];
	const d = pts.map((q, i) => `${i ? 'L' : 'M'}${x + q[0] * w},${y + q[1] * h}`).join(' ');
	return (
		<Fade at={at}>
			<g opacity={o}>
				<line x1={x} y1={y + h} x2={x + w} y2={y + h} stroke={INK_SOFT} strokeWidth={2.5} />
				<line x1={x} y1={y} x2={x} y2={y + h} stroke={INK_SOFT} strokeWidth={2.5} />
				<DrawPath d={d} at={at} dur={30} color={color} width={4.5} />
			</g>
		</Fade>
	);
};
/** A small coded boat carrying beads (founders). */
export const Boat: React.FC<{x: number; y: number; s?: number; o?: number; beads?: number[]}> = ({x, y, s = 1, o = 1, beads = []}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<path d="M-70,0 L70,0 L50,30 L-50,30 Z" fill="#b98a5a" stroke="#6b4a2b" strokeWidth={3.5} strokeLinejoin="round" />
		<line x1={0} y1={0} x2={0} y2={-70} stroke="#6b4a2b" strokeWidth={3.5} />
		<path d="M4,-66 L48,-18 L4,-18 Z" fill="#f1e6cc" stroke="#6b4a2b" strokeWidth={2.5} />
		{beads.map((c, i) => <Bead key={i} x={-52 + i * 22} y={-10} c={c} r={10} />)}
	</g>
));
/** A coded outline chip of a land shape (lon, lat polygon) fitted into a box. */
export const LandChip: React.FC<{pts: LL[]; x: number; y: number; w: number; o?: number; fill?: string; stroke?: string; label?: string; size?: number}> = ({pts, x, y, w, o = 1, fill = '#efe6cf', stroke = INK_SOFT, label, size = 24}) => {
	if (o <= 0.01) return null;
	const lons = pts.map(p => p[0]), lats = pts.map(p => p[1]);
	const lo0 = Math.min(...lons), lo1 = Math.max(...lons), la0 = Math.max(...lats), la1 = Math.min(...lats);
	// shrink longitude by cos(latitude) so a high-latitude island keeps its shape
	const cl = Math.cos((((la0 + la1) / 2) * Math.PI) / 180);
	const k = w / ((lo1 - lo0) * cl);
	const xy = pts.map(([lo, la]) => [x + (lo - lo0) * k * cl, y + (la0 - la) * k] as [number, number]);
	return (
		<g opacity={o}>
			<path d={smoothPath(xy, 0.4)} fill={fill} stroke={stroke} strokeWidth={3} />
			{label ? <text x={x + w / 2} y={y + (la0 - la1) * k + size + 10} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size}} fill={INK}>{label}</text> : null}
		</g>
	);
};
/** A generic island blob (no geographic claim). */
export const ISLAND: LL[] = [[0, 0], [3, 1], [6, 0.4], [8, -1.5], [7, -4], [4, -5], [1, -4], [-1, -2]];
export const MAINLAND: LL[] = [[0, 0], [5, 1.4], [11, 1], [16, -1], [17, -5], [15, -9], [10, -10.5], [4, -9], [0, -6], [-1, -3]];

// ---------- tables ----------
export type Col = {w: number; head: string; align?: 'start' | 'middle'};
/** A data table: header row then rows of cells; each row has its own appearance frame. */
export const DataTable: React.FC<{x: number; y: number; cols: Col[]; rows: string[][]; rowAt?: number[]; at: number; size?: number; rowH?: number; hot?: (r: number) => number; dim?: (r: number) => number; headSize?: number}> = ({x, y, cols, rows, rowAt, at, size = 30, rowH = 56, hot, dim, headSize}) => {
	const f = useCurrentFrame();
	const W = cols.reduce((a, c) => a + c.w, 0);
	const xs = cols.map((_, i) => x + cols.slice(0, i).reduce((a, c) => a + c.w, 0));
	const hs = headSize ?? size * 0.82;
	return (
		<g opacity={prog(f, at, 12)}>
			<rect x={x} y={y} width={W} height={rowH * (rows.length + 1)} rx={14} fill={CARD} stroke={EDGE} strokeWidth={3} />
			<rect x={x} y={y} width={W} height={rowH} rx={14} fill="#efe6d4" />
			{cols.map((c, i) => <text key={i} x={c.align === 'middle' ? xs[i] + c.w / 2 : xs[i] + 18} y={y + rowH * 0.66} textAnchor={c.align === 'middle' ? 'middle' : 'start'} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: hs}} fill={INK}>{c.head}</text>)}
			{rows.map((r, ri) => {
				const ro = rowAt ? prog(f, rowAt[ri], 12) : 1;
				const ry = y + rowH * (ri + 1);
				const h = hot ? hot(ri) : 0;
				const dm = dim ? dim(ri) : 0;
				return (
					<g key={ri} opacity={ro * (1 - 0.55 * dm)}>
						<line x1={x + 10} y1={ry} x2={x + W - 10} y2={ry} stroke={EDGE} strokeWidth={2} />
						{h > 0.01 ? <rect x={x + 4} y={ry + 4} width={W - 8} height={rowH - 8} rx={10} fill="none" stroke={AMBER} strokeWidth={4} opacity={h} /> : null}
						{r.map((t, ci) => <Sx key={ci} x={cols[ci].align === 'middle' ? xs[ci] + cols[ci].w / 2 : xs[ci] + 18} y={ry + rowH * 0.66} text={t} size={size} color={INK} weight={600} anchor={cols[ci].align === 'middle' ? 'middle' : 'start'} at={-100} />)}
					</g>
				);
			})}
		</g>
	);
};
/** Small labelled bar (horizontal) with a value-proportional length. */
export const HBar: React.FC<{x: number; y: number; w: number; v: number; max: number; p?: number; h?: number; color?: string; label?: string; size?: number; o?: number}> = ({x, y, w, v, max, p = 1, h = 26, color = AMBER, label, size = 24, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{label ? <text x={x - 12} y={y + h * 0.75} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: size}} fill={INK}>{label}</text> : null}
		<rect x={x} y={y} width={w} height={h} rx={6} fill="#f1ebdd" stroke={EDGE} strokeWidth={1.5} />
		<rect x={x} y={y} width={Math.max(0, (w * v * clamp01(p)) / max)} height={h} rx={6} fill={color} />
	</g>
));
void GREYT; void GREY_INK; void tw; void proj;
