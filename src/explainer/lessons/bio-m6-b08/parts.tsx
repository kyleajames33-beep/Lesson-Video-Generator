// M6 B08 drawing parts: allele rings (B01's open, dotted, new and gene-flow rings, plus two lesson-local kinds with
// their own shape marks so no kind relies on colour), small panther and puma icons (the painted plates drawn small),
// the seeded Wright-Fisher sampler and drift-line plot (values computed, never typed), coins, the three top chips that
// fill in scene by scene, the southern US outline and the island. B01 and B07 parts are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog, rng} from '../../kit';
import {PlateB, Sx} from '../bio-m5-b13/shared';
import {AlleleRing, BIO_INK, CARD, EDGE, FillBar, PoolBasin, basinSlots, clamp01, lerp, smooth, vis} from '../bio-m6-b01/parts';
import {GREYT, GREY_INK, SrcChip, platePt} from '../bio-m6-b07/parts';
import {PLATES, TAIL} from './assets';

export {AMBER, AMBER_INK, INK, INK_SOFT, BIO_INK, CARD, EDGE, GREYT, GREY_INK, FillBar, PoolBasin, basinSlots, clamp01, lerp, smooth, vis, prog, FONT_DISPLAY, FONT_HAND};

// ---------- allele rings ----------
export type RK = 'A' | 'B' | 'C' | 'D' | 'new' | 'flow' | 'ghost';
export const Rg: React.FC<{x: number; y: number; r?: number; k: RK; o?: number; glow?: number}> = ({x, y, r = 13, k, o = 1, glow = 0}) => {
	if (o <= 0.01) return null;
	if (k === 'A') return <AlleleRing x={x} y={y} r={r} kind="a" o={o} glow={glow} />;
	if (k === 'B') return <AlleleRing x={x} y={y} r={r} kind="b" o={o} glow={glow} />;
	if (k === 'new') return <AlleleRing x={x} y={y} r={r} kind="new" o={o} glow={glow} />;
	if (k === 'flow') return <AlleleRing x={x} y={y} r={r} kind="flow" o={o} glow={glow} />;
	const sw = Math.max(2.5, r * 0.32);
	if (k === 'ghost') return <circle cx={x} cy={y} r={r} fill="none" stroke={GREYT} strokeWidth={2.2} strokeDasharray="4 4" opacity={o} />;
	return (
		<g opacity={o}>
			{glow > 0.01 ? <circle cx={x} cy={y} r={r * 2.1} fill={AMBER} opacity={0.28 * glow} /> : null}
			<circle cx={x} cy={y} r={r} fill={CARD} stroke={INK_SOFT} strokeWidth={sw} />
			{k === 'C' ? <line x1={x - r * 0.62} y1={y} x2={x + r * 0.62} y2={y} stroke={INK_SOFT} strokeWidth={sw * 0.8} strokeLinecap="round" /> : null}
			{k === 'D' ? <circle cx={x} cy={y} r={r * 0.45} fill="none" stroke={INK_SOFT} strokeWidth={sw * 0.7} /> : null}
		</g>
	);
};

// ---------- animals ----------
/** A panther (Florida) or puma (Texas) drawn by its alpha box; `grey` desaturates. */
export const Cat: React.FC<{x: number; y: number; w: number; texas?: boolean; o?: number; grey?: number}> = ({x, y, w, texas = false, o = 1, grey = 0}) => (o <= 0.01 ? null : (
	<g opacity={1 - 0.5 * clamp01(grey)}>
		<PlateB p={texas ? PLATES.puma : PLATES.panther} cx={x} cy={y} w={w} o={o} filter={grey > 0.01 ? `grayscale(${clamp01(grey)})` : undefined} />
	</g>
));
export const tailPt = (x: number, y: number, w: number) => platePt(PLATES.panther, x, y, w, TAIL[0], TAIL[1]);
/** A small kinked-tail mark (amber ring) on an icon. */
export const TailMark: React.FC<{x: number; y: number; w: number; o?: number}> = ({x, y, w, o = 1}) => {
	if (o <= 0.01) return null;
	const [tx, ty] = tailPt(x, y, w);
	return <circle cx={tx} cy={ty} r={Math.max(9, w * 0.15)} fill="none" stroke={AMBER} strokeWidth={Math.max(3, w * 0.045)} opacity={o} />;
};

// ---------- the seeded sampler ----------
export const binom = (r: () => number, n: number, p: number) => { let c = 0; for (let i = 0; i < n; i++) if (r() < p) c++; return c; };
/** Wright-Fisher run: N individuals (2N copies), `gens` generations from p0. */
export const driftRun = (seed: number, N: number, gens: number, p0: number) => {
	const r = rng(seed);
	const out = [p0];
	let p = p0;
	for (let g = 0; g < gens; g++) { p = binom(r, 2 * N, p) / (2 * N); out.push(p); }
	return out;
};
export const driftSet = (seed0: number, N: number, gens: number, p0: number, reps: number) => Array.from({length: reps}, (_, k) => driftRun(seed0 + k * 101, N, gens, p0));
/** The first seed (from `from`) whose replicate set passes `ok`. */
export const findSet = (from: number, N: number, gens: number, p0: number, reps: number, ok: (s: number[][]) => boolean) => {
	for (let s = from; s < from + 4000; s++) { const set = driftSet(s, N, gens, p0, reps); if (ok(set)) return set; }
	throw new Error('no drift seed found');
};
/** Drift lines on a small plot (y: 0 to 1, labels 0, 0.5, 1 only). `draw` 0..1 reveals generations. */
export const DriftLines: React.FC<{x: number; y: number; w: number; h: number; runs: number[][]; draw: number; o?: number; hot?: number; hotO?: number; label?: string; colors?: string[]; axis?: boolean; xLabel?: string}> = ({x, y, w, h, runs, draw, o = 1, hot = -1, hotO = 0, label, colors, axis = true, xLabel = 'generations'}) => {
	if (o <= 0.01) return null;
	const G = runs[0].length - 1;
	const upto = G * clamp01(draw);
	const px = (g: number) => x + (w * g) / G, py = (p: number) => y + h - h * p;
	const COL = colors ?? ['#8a6a48', '#3d7fb0', '#c4632e', '#5e9c5a', '#8e6bb3'];
	return (
		<g opacity={o}>
			{axis ? (
				<g>
					<line x1={x} y1={y} x2={x} y2={y + h} stroke={INK_SOFT} strokeWidth={2.5} />
					<line x1={x} y1={y + h} x2={x + w} y2={y + h} stroke={INK_SOFT} strokeWidth={2.5} />
					<line x1={x} y1={y + h / 2} x2={x + w} y2={y + h / 2} stroke={INK_SOFT} strokeWidth={1.5} strokeDasharray="5 7" opacity={0.6} />
					{[['1', 0], ['0.5', 0.5], ['0', 1]].map(([t, k]) => <text key={t as string} x={x - 12} y={y + (k as number) * h + 9} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 24}} fill={INK_SOFT}>{t}</text>)}
					<text x={x + w} y={y + h + 34} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 26}} fill={INK_SOFT}>{xLabel}</text>
				</g>
			) : null}
			{label ? <text x={x + w / 2} y={y - 20} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36}} fill={INK}>{label}</text> : null}
			{runs.map((run, k) => {
				const pts: string[] = [];
				for (let g = 0; g <= Math.floor(upto); g++) pts.push(`${px(g).toFixed(1)},${py(run[g]).toFixed(1)}`);
				const gi = Math.floor(upto);
				if (gi < G) pts.push(`${px(upto).toFixed(1)},${py(lerp(run[gi], run[gi + 1], upto - gi)).toFixed(1)}`);
				return <polyline key={k} points={pts.join(' ')} fill="none" stroke={COL[k % COL.length]} strokeWidth={k === hot ? 4 + 2 * hotO : 3.5} strokeLinejoin="round" opacity={hot >= 0 && k !== hot ? 1 - 0.4 * hotO : 1} />;
			})}
		</g>
	);
};
/** First generation at which a run reaches 0 (or -1). */
export const lostAt = (run: number[]) => run.findIndex(p => p === 0);

// ---------- coins ----------
export const CoinRow: React.FC<{x: number; y: number; faces: boolean[]; at: number; o?: number; gap?: number; r?: number}> = ({x, y, faces, at, o = 1, gap = 74, r = 30}) => {
	const f = useCurrentFrame();
	if (o <= 0.01 || f < at) return null;
	return (
		<g opacity={o}>
			{faces.map((h, i) => {
				const t0 = at + i * 4;
				const spin = clamp01((f - t0) / 22);
				const sx = spin < 1 ? Math.abs(Math.cos(spin * Math.PI * 3)) : 1;
				const cx = x + i * gap;
				return (
					<g key={i} transform={`translate(${cx},${y}) scale(${Math.max(0.06, sx)},1)`} opacity={prog(f, t0, 6)}>
						<circle r={r} fill={spin >= 1 && h ? '#f3d27a' : '#efe6d4'} stroke={AMBER_INK} strokeWidth={3} />
						{spin >= 1 ? <text y={r * 0.38} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: r}} fill={INK}>{h ? 'H' : 'T'}</text> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- the three top chips (filled one scene at a time) ----------
const TOP = ['drift', 'mutation', 'gene flow'];
const TOPX = [1180, 1420, 1680];
export const TopChips: React.FC<{show: number; filled: number[]; lit?: number}> = ({show, filled, lit = -1}) => (show <= 0.01 ? null : (
	<g opacity={show}>
		{TOP.map((t, i) => (
			<g key={t}>
				{filled[i] < 0.99 ? <rect x={TOPX[i] - 100} y={124 - 24} width={200} height={48} rx={24} fill="none" stroke={EDGE} strokeWidth={2.5} strokeDasharray="7 6" opacity={1 - filled[i]} /> : null}
				<SrcChip x={TOPX[i]} y={124} text={t} size={30} o={filled[i] * (lit === i ? 1 : 0.6)} lit={lit === i ? 1 : 0} />
			</g>
		))}
	</g>
));

// ---------- outlines ----------
/** A plain coded outline of the southern United States (no labels): Texas at the left, Florida at the right. */
export const US_PATH = 'M150,300 L1700,300 L1715,470 L1660,560 L1700,690 L1720,800 L1690,915 L1640,935 L1600,880 L1560,790 L1500,720 L1420,700 L1260,705 L1100,712 L960,735 L860,770 L770,840 L700,920 L640,950 L590,900 L520,800 L430,720 L330,660 L230,640 L150,620 Z';
/** A small island outline around a basin. */
export const islandPath = (cx: number, cy: number, rx: number, ry: number) => {
	const n = 10;
	const r = rng(77);
	const pts = Array.from({length: n}, (_, i) => { const a = (i / n) * Math.PI * 2; const k = 0.88 + 0.22 * r(); return [cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]; });
	return pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ') + ' Z';
};
/** Basin with rings in slots (kinds per slot; optional per-slot opacity and glow). */
export const RingBasin: React.FC<{x: number; y: number; w: number; h: number; kinds: RK[]; cols: number; o?: number; ringO?: (i: number) => number; glow?: (i: number) => number; label?: string; r?: number; kindOf?: (i: number) => RK}> = ({x, y, w, h, kinds, cols, o = 1, ringO, glow, label, r = 13, kindOf}) => {
	if (o <= 0.01) return null;
	const slots = basinSlots(x, y, w, h, kinds.length, cols);
	return (
		<g opacity={o}>
			<PoolBasin x={x} y={y} w={w} h={h} label={label} />
			{slots.map(([sx, sy], i) => <Rg key={i} x={sx} y={sy + 18} r={r} k={kindOf ? kindOf(i) : kinds[i]} o={ringO ? ringO(i) : 1} glow={glow ? glow(i) : 0} />)}
		</g>
	);
};
export const slotsOf = (x: number, y: number, w: number, h: number, n: number, cols: number) => basinSlots(x, y, w, h, n, cols).map(([sx, sy]) => [sx, sy + 18] as [number, number]);
/** Frequency of one kind as a decimal (computed from the ring list). */
export const freq = (kinds: RK[], k: RK) => kinds.filter(q => q === k).length / kinds.length;
export const fmt = (p: number, dp = 2) => {
	const s = p.toFixed(dp);
	return s.replace(/0+$/, '').replace(/\.$/, '') || '0';
};
/** A one-line frequency bar with its decimal. */
export const FreqBar: React.FC<{x: number; y: number; w: number; p: number; o?: number; text?: string; color?: string; size?: number}> = ({x, y, w, p, o = 1, text, color = '#8a8f96', size = 34}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<FillBar x={x} y={y} w={w} h={26} p={p} color={color} />
		{text ? <Sx x={x + w + 18} y={y + 24} text={text} size={size} color={INK} weight={800} /> : null}
	</g>
));
export {DrawPath, vis as visF};
