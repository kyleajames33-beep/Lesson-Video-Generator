// B7 shared pieces: painted plates placed by their alpha box (with a dashed stand-in when a plate is not delivered),
// the coded protein pieces (a bead chain that folds by a small deterministic relaxation, a blob with a pocket,
// haemoglobin, keratin, receptor, antibody), the five-station chain-to-trait strip, the range bar, soil strips, gene
// cards, aluminium dots and pigment rings. B6c's beads, links and computed genetic code are reused.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/b7/measured/lesson.json';
import {
	AMBER, AMBER_INK, AnswerBox, Chip, Cross, DrawPath, FONT_DISPLAY, FONT_HAND, Fade, GREYT, GREY_INK, GreyTag, Heading, INK, INK_SOFT, MRNA, MRNA_INK,
	MistakeChip, ModelLine, Overlay, PLUM, PlainArrow, Ring, SpanBracket, Strand, Sx, Tick, chipW, kf, mistakeW, prog, sceneOf, scribbleEllipse, tw, wrap,
} from '../bio-m5-b06b/shared';
import {AABead, PepLink, aaFill, codonToAA} from '../bio-m5-b06c/shared';
import {pulse} from '../bio-m5-b04/dna';
import {Countdown, Enter, HandText, rng} from '../../kit';
import * as A from './assets';

export {
	AMBER, AMBER_INK, AnswerBox, Chip, Cross, DrawPath, FONT_DISPLAY, FONT_HAND, Fade, GREYT, GREY_INK, GreyTag, Heading, INK, INK_SOFT, MRNA, MRNA_INK,
	MistakeChip, ModelLine, Overlay, PLUM, PlainArrow, Ring, SpanBracket, Strand, Sx, Tick, chipW, kf, mistakeW, prog, scribbleEllipse, tw, wrap,
	AABead, PepLink, aaFill, codonToAA, pulse, Countdown, Enter, HandText, rng,
};
export const S = sceneOf(lesson as unknown as {scenes: unknown[]});
export const GREEN = '#2f8a5b';
export const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const hexMix = (a: string, b: string, t: number) => {
	const p = (h: string) => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
	const x = p(a), y = p(b), u = clamp01(t);
	return '#' + x.map((v, i) => Math.round(v + (y[i] - v) * u).toString(16).padStart(2, '0')).join('');
};

// ---------- painted plates by alpha box ----------
/** A plate with its alpha box; have = false draws the dashed stand-in (each lesson sets it from its own HAVE list). */
export type PB = {src: string; nat: [number, number]; box: [number, number, number, number]; have?: boolean};
const P = (src: string, nat: [number, number], box: [number, number, number, number]): PB => ({src, nat, box, have: A.HAVE.has(src)});
/** Pink and blue hydrangea share one box so a crossfade stays aligned (same canvas). */
const HYD_BOX: [number, number, number, number] = [266, 289, 1737, 1718];
const SNAP_BOX: [number, number, number, number] = [612, 218, 1452, 1781];
const MUSCLE_BOX: [number, number, number, number] = [209, 185, 2271, 539];
/** Rabbit box is a guess for a 2000 square side view; check it when brief 59 lands. */
const RABBIT_BOX: [number, number, number, number] = [200, 300, 1800, 1700];
export const PLT = {
	hydBlue: P(A.HYD_BLUE, [2000, 2000], HYD_BOX),
	hydPink: P(A.HYD_PINK, [2000, 2000], HYD_BOX),
	enzyme: P(A.ENZYME, [2000, 2000], [292, 383, 1709, 1625]),
	rbc: P(A.RBC, [2000, 2000], [304, 332, 1749, 1689]),
	sickle: P(A.SICKLE, [2000, 2000], [200, 597, 1800, 1403]),
	normalHalf: P(A.SICKLE, [2000, 2000], [200, 597, 1040, 1403]),
	sickleHalf: P(A.SICKLE, [2000, 2000], [1080, 597, 1800, 1403]),
	muscleR: P(A.MUSCLE_R, [2500, 724], MUSCLE_BOX),
	muscleC: P(A.MUSCLE_C, [2500, 724], MUSCLE_BOX),
	bloodTile: P(A.BLOOD_TILE, [2000, 2000], [240, 764, 1748, 1340]),
	snapRed: P(A.SNAP_RED, [2000, 2000], SNAP_BOX),
	snapWhite: P(A.SNAP_WHITE, [2000, 2000], SNAP_BOX),
	peaYR: P(A.PEA_YR, [2000, 2000], [383, 383, 1618, 1619]),
	bact: P(A.BACT, [2044, 900], [243, 192, 1880, 704]),
	rabbit: P(A.RABBIT, [2000, 2000], RABBIT_BOX),
	rabbitPatch: P(A.RABBIT_PATCH, [2000, 2000], RABBIT_BOX),
};
export const pbW = (p: PB) => p.box[2] - p.box[0];
export const pbH = (p: PB, w: number) => (w * (p.box[3] - p.box[1])) / pbW(p);
/** Screen point of a natural pixel for a plate centred (by its box) at cx, cy with box width w. */
export const pbPt = (p: PB, cx: number, cy: number, w: number) => (u: number, v: number): [number, number] => {
	const k = w / pbW(p);
	return [cx + (u - (p.box[0] + p.box[2]) / 2) * k, cy + (v - (p.box[1] + p.box[3]) / 2) * k];
};
/**
 * A painted plate (SVG), its alpha box centred at (cx, cy) with width w. `crop` clips to the box (for a half plate,
 * give it an id). A plate that is not delivered draws a dashed stand-in box with a small grey note.
 */
export const PlateB: React.FC<{p: PB; cx: number; cy: number; w: number; o?: number; rot?: number; id?: string; flipX?: boolean; filter?: string}> = ({p, cx, cy, w, o = 1, rot = 0, id, flipX = false, filter}) => {
	if (o <= 0.01) return null;
	const k = w / pbW(p);
	const h = pbH(p, w);
	if (p.have === false) {
		return (
			<g opacity={o}>
				<rect x={cx - w / 2} y={cy - h / 2} width={w} height={h} rx={24} fill="rgba(255,253,248,0.5)" stroke={GREYT} strokeWidth={4} strokeDasharray="14 10" />
				<text x={cx} y={cy + 10} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: Math.max(18, Math.min(26, w / 16))}} fill={GREY_INK}>painted plate pending</text>
			</g>
		);
	}
	const bx = (p.box[0] + p.box[2]) / 2, by = (p.box[1] + p.box[3]) / 2;
	const clipId = id ? `${id}-clip` : undefined;
	return (
		<g opacity={o} transform={`translate(${cx},${cy}) rotate(${rot}) scale(${flipX ? -k : k},${k})`} style={filter ? {filter} : undefined}>
			{clipId ? <defs><clipPath id={clipId} clipPathUnits="userSpaceOnUse"><rect x={p.box[0] - bx} y={p.box[1] - by} width={p.box[2] - p.box[0]} height={p.box[3] - p.box[1]} /></clipPath></defs> : null}
			<g clipPath={clipId ? `url(#${clipId})` : undefined}>
				<image href={staticFile(p.src)} x={-bx} y={-by} width={p.nat[0]} height={p.nat[1]} />
			</g>
		</g>
	);
};

// ---------- the enzyme plate, split into enzyme and substrate ----------
/** Substrate region in natural pixels (it sits right of the C-shaped pocket). */
const SUB_POLY = 'M1225,905 L1302,905 L1302,795 L1725,795 L1725,1280 L1302,1280 L1302,1140 L1225,1140 Z';
/** Natural-pixel shift that docks the substrate's left lobe in the pocket. */
export const SUB_DOCK: [number, number] = [-178, 0];
/** Pocket outline (natural pixels), the active site. */
export const POCKET_D = (squeeze = 0) => {
	const ix = 1050 + squeeze * 120;
	return `M1292,812 C1180,796 ${ix + 10},880 ${ix},1002 C${ix - 4},1112 1162,1196 1292,1182`;
};
/** Enzyme plate with a movable substrate. sub 0 = apart (as painted), 1 = docked; bump adds a shove away. */
export const EnzymePlate: React.FC<{id: string; cx: number; cy: number; w: number; sub?: number; o?: number; subO?: number; pocket?: number; squeeze?: number; bump?: number; breathe?: number}> = ({id, cx, cy, w, sub = 0, o = 1, subO = 1, pocket = 0, squeeze = 0, bump = 0, breathe = 0}) => {
	if (o <= 0.01) return null;
	const p = PLT.enzyme;
	const k = w / pbW(p);
	const bx = (p.box[0] + p.box[2]) / 2, by = (p.box[1] + p.box[3]) / 2;
	const dx = SUB_DOCK[0] * sub + bump * 160, dy = -bump * 60;
	const img = <image href={staticFile(p.src)} x={0} y={0} width={p.nat[0]} height={p.nat[1]} />;
	return (
		<g opacity={o} transform={`translate(${cx},${cy}) scale(${k}) translate(${-bx},${-by})`}>
			<defs>
				<clipPath id={`${id}-e`} clipPathUnits="userSpaceOnUse"><path clipRule="evenodd" d={`M0,0 L2000,0 L2000,2000 L0,2000 Z ${SUB_POLY}`} /></clipPath>
				<clipPath id={`${id}-s`} clipPathUnits="userSpaceOnUse"><path d={SUB_POLY} /></clipPath>
			</defs>
			<g clipPath={`url(#${id}-e)`}>{img}</g>
			{subO > 0.01 ? <g transform={`translate(${dx},${dy})`} opacity={subO}><g clipPath={`url(#${id}-s)`}>{img}</g></g> : null}
			{pocket > 0.01 ? (
				<g transform={breathe > 0.01 ? `translate(1170,1000) scale(${1 + 0.06 * breathe}) translate(-1170,-1000)` : undefined}>
					<path d={POCKET_D(squeeze)} fill="none" stroke={AMBER} strokeWidth={16} strokeLinecap="round" strokeDasharray="34 22" opacity={pocket} />
				</g>
			) : null}
		</g>
	);
};

// ---------- the folding chain ----------
export const HYDRO = new Set(['Val', 'Leu', 'Phe', 'Ile']);
export const POS = new Set(['Lys', 'Arg']);
export const NEG = new Set(['Glu', 'Asp']);
const HYDRO_FILL = '#c4c9d0';
const WARM_FILL: Record<string, string> = {Gly: '#ead2a4', Thr: '#dcc0a6', Ser: '#e2c9b4', Asn: '#d9bf9c', Gln: '#e6c6a0', Ala: '#d8c48e', Trp: '#cfa98a', Asp: '#e0ae86', His: '#d9b48f', Pro: '#d6b0c4'};
export const beadFill = (aa: string) => (HYDRO.has(aa) ? HYDRO_FILL : aa === 'Cys' ? '#e9d08e' : WARM_FILL[aa] ?? aaFill(aa));
export type Pt = [number, number];
/** The worked chain (twelve beads: two Cys, three water-avoiding, one + and one -). */
export const CHAIN12 = ['Ser', 'Cys', 'Val', 'Lys', 'Thr', 'Leu', 'Gly', 'Phe', 'Glu', 'Asn', 'Cys', 'Gln'];
/** The same twelve, shuffled (a different order). */
export const CHAIN12B = ['Gly', 'Phe', 'Cys', 'Ser', 'Glu', 'Val', 'Gln', 'Cys', 'Thr', 'Lys', 'Leu', 'Asn'];
if ([...CHAIN12].sort().join() !== [...CHAIN12B].sort().join()) throw new Error('shuffled chain must hold the same beads');
export const LINK = 80;
/**
 * Deterministic relaxation: links keep their length, beads keep apart, water-avoiding beads pull to the centre
 * (hydro), named pairs pull together (pairs), and a weak pull keeps the chain compact. Returns positions centred on c.
 */
export const relax = (seq: string[], start: Pt[], o: {hydro?: number; pairs?: [number, number][]; compact?: number; iters?: number; c: Pt}): Pt[] => {
	const n = seq.length;
	const pos = start.map((p, i) => [p[0], p[1] + Math.sin(i * 1.7) * 6] as Pt);
	const it = o.iters ?? 900;
	for (let t = 0; t < it; t++) {
		const F = pos.map(() => [0, 0] as Pt);
		const cx = pos.reduce((a, p) => a + p[0], 0) / n, cy = pos.reduce((a, p) => a + p[1], 0) / n;
		const spring = (i: number, j: number, rest: number, k: number) => {
			const dx = pos[j][0] - pos[i][0], dy = pos[j][1] - pos[i][1];
			const d = Math.hypot(dx, dy) || 0.01;
			const f = (d - rest) * k;
			F[i][0] += (f * dx) / d; F[i][1] += (f * dy) / d;
			F[j][0] -= (f * dx) / d; F[j][1] -= (f * dy) / d;
		};
		for (let i = 0; i + 1 < n; i++) spring(i, i + 1, LINK, 0.35);
		for (const [a, b] of o.pairs ?? []) spring(a, b, 76, 0.3);
		for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) {
			const dx = pos[j][0] - pos[i][0], dy = pos[j][1] - pos[i][1];
			const d = Math.hypot(dx, dy) || 0.01;
			if (d < 78) {
				const f = (78 - d) * 0.4;
				F[i][0] -= (f * dx) / d; F[i][1] -= (f * dy) / d;
				F[j][0] += (f * dx) / d; F[j][1] += (f * dy) / d;
			}
		}
		for (let i = 0; i < n; i++) {
			const h = HYDRO.has(seq[i]) ? (o.hydro ?? 0) : 0;
			const k = 0.004 * (o.compact ?? 0) + 0.03 * h;
			F[i][0] += (cx - pos[i][0]) * k; F[i][1] += (cy - pos[i][1]) * k;
		}
		const step = 0.5 * (1 - t / it) + 0.05;
		for (let i = 0; i < n; i++) { pos[i][0] += F[i][0] * step; pos[i][1] += F[i][1] * step; }
	}
	const cx = pos.reduce((a, p) => a + p[0], 0) / n, cy = pos.reduce((a, p) => a + p[1], 0) / n;
	return pos.map(p => [p[0] - cx + o.c[0], p[1] - cy + o.c[1]] as Pt);
};
export const straight = (n: number, x0: number, y: number, pitch = 120): Pt[] => Array.from({length: n}, (_, i) => [x0 + i * pitch, y] as Pt);
const idxOf = (seq: string[], aa: string, occ = 1) => { let s = 0; for (let i = 0; i < seq.length; i++) if (seq[i] === aa && ++s === occ) return i; return -1; };
export const pairsOf = (seq: string[]) => ({cys: [idxOf(seq, 'Cys', 1), idxOf(seq, 'Cys', 2)] as [number, number], ion: [seq.findIndex(a => POS.has(a)), seq.findIndex(a => NEG.has(a))] as [number, number]});
/** Fold stages for a chain, all centred on c: water-avoiding in, then charges, then the S-S link. */
export const foldStages = (seq: string[], c: Pt, x0: number, y: number, pitch = 120) => {
	const s0 = straight(seq.length, x0, y, pitch);
	const pr = pairsOf(seq);
	const s1 = relax(seq, s0, {hydro: 1, compact: 0.4, c});
	const s2 = relax(seq, s1, {hydro: 1, compact: 0.6, pairs: [pr.ion], c});
	const s3 = relax(seq, s2, {hydro: 1, compact: 0.8, pairs: [pr.ion, pr.cys], c});
	return {s0, s1, s2, s3, pr};
};
export const mixPts = (a: Pt[], b: Pt[], t: number): Pt[] => a.map((p, i) => [lerp(p[0], b[i][0], t), lerp(p[1], b[i][1], t)] as Pt);
export const scalePts = (a: Pt[], c: Pt, k: number, to: Pt): Pt[] => a.map(p => [to[0] + (p[0] - c[0]) * k, to[1] + (p[1] - c[1]) * k] as Pt);
/** Smooth convex outline round a set of beads (support function), inflated by pad. */
export const hullPath = (pts: Pt[], pad: number, seed = 1) => {
	const cx = pts.reduce((a, p) => a + p[0], 0) / pts.length, cy = pts.reduce((a, p) => a + p[1], 0) / pts.length;
	const N = 72;
	const out: string[] = [];
	for (let i = 0; i <= N; i++) {
		const a = (i / N) * Math.PI * 2;
		const ux = Math.cos(a), uy = Math.sin(a);
		const r = Math.max(...pts.map(p => (p[0] - cx) * ux + (p[1] - cy) * uy)) + pad * (1 + 0.05 * Math.sin(5 * a + seed));
		out.push(`${i ? 'L' : 'M'}${(cx + r * ux).toFixed(1)},${(cy + r * uy).toFixed(1)}`);
	}
	return out.join(' ') + ' Z';
};
/** A small bead with its three-letter name; charge mark (+ or -) beside charged beads. */
export const ABead: React.FC<{x: number; y: number; aa: string; r?: number; o?: number; ring?: number; charge?: number}> = ({x, y, aa, r = 32, o = 1, ring = 0, charge = 0}) => {
	if (o <= 0.01) return null;
	const sign = POS.has(aa) ? '+' : NEG.has(aa) ? '-' : '';
	return (
		<g opacity={o}>
			{ring > 0.01 ? <circle cx={x} cy={y} r={r + 11} fill="none" stroke={AMBER} strokeWidth={6} opacity={ring} /> : null}
			<circle cx={x} cy={y} r={r} fill={beadFill(aa)} stroke={HYDRO.has(aa) ? '#7d848c' : INK_SOFT} strokeWidth={3} />
			<text x={x} y={y + r * 0.3} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: r * 0.72}} fill={INK}>{aa}</text>
			{sign && charge > 0.01 ? (
				<g opacity={charge}>
					<circle cx={x + r * 0.78} cy={y - r * 0.78} r={r * 0.42} fill="#fffdf8" stroke={INK} strokeWidth={2.5} />
					<text x={x + r * 0.78} y={y - r * 0.78 + r * 0.2} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: r * 0.62}} fill={INK}>{sign === '-' ? '−' : '+'}</text>
				</g>
			) : null}
		</g>
	);
};
/** A chain of beads at given positions with links; S-S link between the Cys pair (ss 0..1), dotted pull between charges. */
export const ChainView: React.FC<{seq: string[]; pts: Pt[]; r?: number; o?: number; ss?: number; pull?: number; charge?: number; hull?: number; ring?: (i: number) => number; labelOf?: (i: number) => string; hullFill?: string}> = ({seq, pts, r = 32, o = 1, ss = 0, pull = 0, charge = 0, hull = 0, ring, labelOf, hullFill = '#efe3cf'}) => {
	if (o <= 0.01) return null;
	const pr = pairsOf(seq);
	return (
		<g opacity={o}>
			{hull > 0.01 ? <path d={hullPath(pts, r + 18)} fill={hullFill} stroke={INK_SOFT} strokeWidth={3.5} opacity={hull} /> : null}
			{pts.slice(1).map((p, i) => <line key={i} x1={pts[i][0]} y1={pts[i][1]} x2={p[0]} y2={p[1]} stroke={INK} strokeWidth={5} strokeLinecap="round" />)}
			{pull > 0.01 && pr.ion[0] >= 0 && pr.ion[1] >= 0 ? <line x1={pts[pr.ion[0]][0]} y1={pts[pr.ion[0]][1]} x2={pts[pr.ion[1]][0]} y2={pts[pr.ion[1]][1]} stroke={AMBER_INK} strokeWidth={4} strokeDasharray="3 9" strokeLinecap="round" opacity={pull} /> : null}
			{ss > 0.01 ? (() => { const a = pts[pr.cys[0]], b = pts[pr.cys[1]]; return <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={AMBER} strokeWidth={14} strokeLinecap="round" opacity={ss} />; })() : null}
			{pts.map((p, i) => <ABead key={i} x={p[0]} y={p[1]} aa={labelOf ? labelOf(i) : seq[i]} r={r} charge={charge} ring={ring ? ring(i) : 0} />)}
			{ss > 0.01 ? (() => {
				const a = pts[pr.cys[0]], b = pts[pr.cys[1]];
				const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
				return (
					<g opacity={ss}>
						<rect x={mx - r * 0.875} y={my - r * 0.53} width={r * 1.75} height={r * 1.06} rx={r * 0.3} fill={AMBER} stroke={AMBER_INK} strokeWidth={2.5} />
						<text x={mx} y={my + r * 0.28} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: r * 0.72}} fill="#fffdf8">S-S</text>
					</g>
				);
			})() : null}
		</g>
	);
};

// ---------- a blob with a pocket (active site) ----------
/**
 * A coded folded enzyme: a wobbly outline with a C-shaped pocket on the right, rim beads, and an optional substrate.
 * squeeze 0..1 narrows the pocket; sub 0..1 docks the substrate; bump shoves it away.
 */
export const PocketBlob: React.FC<{cx: number; cy: number; R?: number; squeeze?: number; sub?: number; bump?: number; o?: number; lip?: string; lipRing?: number; far?: string; farRing?: number; subO?: number}> = ({cx, cy, R = 130, squeeze = 0, sub = 1, bump = 0, o = 1, lip = 'His', lipRing = 0, far = 'Ser', farRing = 0, subO = 1}) => {
	if (o <= 0.01) return null;
	const width = 0.62 * (1 - 0.55 * squeeze), depth = 0.5 * (1 - 0.35 * squeeze);
	const rAt = (a: number) => {
		const aa = Math.atan2(Math.sin(a), Math.cos(a));
		return R * (1 + 0.06 * Math.sin(5 * a + 1) + 0.04 * Math.cos(9 * a)) * (1 - depth * Math.exp(-((aa / width) ** 4)));
	};
	const d = Array.from({length: 121}, (_, i) => {
		const a = (i / 120) * Math.PI * 2;
		return `${i ? 'L' : 'M'}${(cx + rAt(a) * Math.cos(a)).toFixed(1)},${(cy + rAt(a) * Math.sin(a)).toFixed(1)}`;
	}).join(' ') + ' Z';
	const rim = (a: number): Pt => [cx + (rAt(a) - inset) * Math.cos(a), cy + (rAt(a) - inset) * Math.sin(a)];
	const lipA = -width * 1.25, farA = Math.PI * 0.95;
	const others: [number, string][] = [[-1.5, 'Gly'], [-2.3, 'Thr'], [2.2, 'Asn'], [1.4, 'Gln'], [width * 1.25, 'Ala']];
	const br = Math.max(18, Math.round(R * 0.2)), inset = br + 6;
	const subX = lerp(cx + R * 1.55, cx + R * 0.62, sub) + bump * 90, subY = cy - bump * 70;
	return (
		<g opacity={o}>
			<path d={d} fill="#d7e3e0" stroke="#3d6b66" strokeWidth={4} />
			{others.map(([a, aa], i) => { const p = rim(a); return <ABead key={i} x={p[0]} y={p[1]} aa={aa} r={br} />; })}
			{(() => { const p = rim(farA); return <ABead x={p[0]} y={p[1]} aa={far} r={br} ring={farRing} />; })()}
			{(() => { const p = rim(lipA); return <ABead x={p[0]} y={p[1]} aa={lip} r={br} ring={lipRing} />; })()}
			{subO > 0.01 ? <Substrate x={subX} y={subY} s={R / 130} o={subO} /> : null}
		</g>
	);
};
export const Substrate: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<path d="M-34,-6 C-40,-34 -6,-42 8,-30 C26,-46 52,-30 44,-6 C58,10 42,38 18,30 C4,44 -30,40 -28,18 C-46,14 -46,-2 -34,-6 Z" fill="#e7c27c" stroke="#8a6420" strokeWidth={3.5} />
	</g>
);

// ---------- haemoglobin ----------
/** A coded haemoglobin: four lobes (two alpha, two beta), haem dots; optional O2 dots, Val patches on the beta lobes. */
export const Hb: React.FC<{x: number; y: number; s?: number; o?: number; o2?: number; o2Off?: number; val?: number; valPulse?: number; labels?: boolean; rot?: number}> = ({x, y, s = 1, o = 1, o2 = 0, o2Off = 0, val = 0, valPulse = 0, labels = true, rot = 0}) => {
	if (o <= 0.01) return null;
	const lobes: [number, number, 'a' | 'b'][] = [[-24, -22, 'a'], [24, -22, 'b'], [-24, 22, 'b'], [24, 22, 'a']];
	return (
		<g opacity={o} transform={`translate(${x},${y}) rotate(${rot}) scale(${s})`}>
			{lobes.map(([lx, ly, t], i) => (
				<g key={i}>
					<circle cx={lx} cy={ly} r={27} fill={t === 'a' ? '#e0b1ab' : '#cf948c'} stroke="#7d3b34" strokeWidth={3} />
					<circle cx={lx + (lx > 0 ? 6 : -6)} cy={ly + (ly > 0 ? 6 : -6)} r={6} fill="#b8322a" />
					{labels ? <text x={lx - (lx > 0 ? 2 : -2)} y={ly + 2} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 18}} fill="#5a2620">{t === 'a' ? 'α' : 'β'}</text> : null}
					{t === 'b' && val > 0.01 ? (
						<g opacity={val}>
							<circle cx={lx + (lx > 0 ? 24 : -24)} cy={ly} r={12 + 4 * valPulse} fill={HYDRO_FILL} stroke="#6d747c" strokeWidth={2.5} />
						</g>
					) : null}
					{o2 > 0.01 ? <circle cx={lx * 2.1 + (lx > 0 ? 10 : -10) * o2Off * 3} cy={ly * 2.1 - o2Off * 40} r={7} fill="#e04b3c" stroke="#8a221a" strokeWidth={2} opacity={o2 * (1 - o2Off)} /> : null}
				</g>
			))}
		</g>
	);
};

// ---------- small coded pieces for the jobs board ----------
export const Keratin: React.FC<{x: number; y: number; h?: number; o?: number; t?: number}> = ({x, y, h = 200, o = 1, t = 0}) => {
	if (o <= 0.01) return null;
	const strand = (ph: number, col: string) => Array.from({length: 41}, (_, i) => {
		const v = i / 40;
		return `${i ? 'L' : 'M'}${(x + 18 * Math.sin(v * Math.PI * 5 + ph + t)).toFixed(1)},${(y - h / 2 + v * h).toFixed(1)}`;
	}).join(' ');
	return (
		<g opacity={o}>
			<path d={strand(0, '')} fill="none" stroke="#8a6420" strokeWidth={9} strokeLinecap="round" />
			<path d={strand(2.1, '')} fill="none" stroke="#b98a3e" strokeWidth={9} strokeLinecap="round" />
			<path d={strand(4.2, '')} fill="none" stroke="#d9b36a" strokeWidth={9} strokeLinecap="round" />
		</g>
	);
};
/** Membrane strip with a cup receptor; sig 0..1 brings the signal molecule in; spark 0..1 passes a spark inward. */
export const Receptor: React.FC<{x: number; y: number; w?: number; sig?: number; spark?: number; o?: number}> = ({x, y, w = 260, sig = 0, spark = 0, o = 1}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<rect x={x - w / 2} y={y} width={w} height={26} rx={13} fill="#ead9c0" stroke={INK_SOFT} strokeWidth={3} />
			{Array.from({length: Math.floor(w / 22)}, (_, i) => <circle key={i} cx={x - w / 2 + 12 + i * 22} cy={y + 6} r={5} fill="#c9b08a" />)}
			<path d={`M${x - 34},${y + 40} L${x - 34},${y - 30} C${x - 34},${y - 70} ${x - 52},${y - 74} ${x - 50},${y - 96} M${x + 34},${y + 40} L${x + 34},${y - 30} C${x + 34},${y - 70} ${x + 52},${y - 74} ${x + 50},${y - 96}`} fill="none" stroke="#7b4fb3" strokeWidth={16} strokeLinecap="round" />
			<path d={`M${x - 34},${y + 40} L${x + 34},${y + 40}`} stroke="#7b4fb3" strokeWidth={16} strokeLinecap="round" />
			<g transform={`translate(${x},${lerp(y - 210, y - 72, sig)})`}>
				<path d="M-20,-14 L20,-14 L26,8 L0,22 L-26,8 Z" fill={AMBER} stroke={AMBER_INK} strokeWidth={3} />
			</g>
			{spark > 0.01 && spark < 1 ? <circle cx={x} cy={lerp(y - 40, y + 90, spark)} r={10} fill={AMBER} opacity={Math.sin(Math.PI * spark)} /> : null}
			{spark > 0.01 ? <text x={x} y={y + 112} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 26}} fill={AMBER_INK} opacity={clamp01(spark * 3)}>signal in</text> : null}
		</g>
	);
};
/** A coded antibody (Y) clamping onto a bacterium's surface marker. grab 0..1 moves the Y in. */
export const Antibody: React.FC<{x: number; y: number; grab?: number; o?: number}> = ({x, y, grab = 0, o = 1}) => {
	if (o <= 0.01) return null;
	const ay = lerp(y - 220, y - 92, grab);
	return (
		<g opacity={o}>
			<rect x={x - 110} y={y - 30} width={220} height={110} rx={55} fill="#e8d6a8" stroke="#8a7240" strokeWidth={4} />
			{[-60, 0, 60].map((dx, i) => <path key={i} d={`M${x + dx - 12},${y - 30} L${x + dx},${y - 50} L${x + dx + 12},${y - 30} Z`} fill="#a77f3a" stroke="#6d5224" strokeWidth={2.5} />)}
			<g transform={`translate(${x},${ay})`}>
				<path d="M0,-70 L0,0 M0,0 L-34,40 M0,0 L34,40" fill="none" stroke="#3d6b66" strokeWidth={16} strokeLinecap="round" />
			</g>
		</g>
	);
};
/** A tiny bead chain that coils into a knot (fold 0..1). */
export const MiniFold: React.FC<{x: number; y: number; fold: number; o?: number; n?: number}> = ({x, y, fold, o = 1, n = 9}) => {
	if (o <= 0.01) return null;
	const pts: Pt[] = Array.from({length: n}, (_, i) => {
		const sx = x - ((n - 1) * 20) / 2 + i * 20, sy = y;
		const a = i * 0.95, r = 10 + 16 * Math.abs(Math.sin(i * 0.8));
		return [lerp(sx, x + r * Math.cos(a), fold), lerp(sy, y + r * Math.sin(a), fold)];
	});
	return (
		<g opacity={o}>
			{pts.slice(1).map((p, i) => <line key={i} x1={pts[i][0]} y1={pts[i][1]} x2={p[0]} y2={p[1]} stroke={INK} strokeWidth={3} />)}
			{pts.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r={7} fill={['#e7b98f', '#c4c9d0', '#dba6a0', '#cfc58e', '#b7c79f'][i % 5]} stroke={INK_SOFT} strokeWidth={2} />)}
		</g>
	);
};

// ---------- the chain-to-trait strip ----------
export const ST_LABELS = ['gene (DNA)', 'polypeptide', 'protein shape', 'cell', 'trait'];
export const ST_W = 316, ST_GAP = 38;
export const stX = (i: number) => 960 + (i - 2) * (ST_W + ST_GAP);
/** Frames, labels and arrows of the five-station strip at top y with height h. lit[i] glows station i; o[i] fades a frame. */
export const TraitStrip: React.FC<{y: number; h: number; at: number; lit?: number[]; draw?: number[]; o?: number}> = ({y, h, at, lit = [], draw, o = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16) * o;
	if (p <= 0.01) return null;
	return (
		<g opacity={p}>
			{ST_LABELS.map((l, i) => {
				const x0 = stX(i) - ST_W / 2;
				const dp = draw ? draw[i] : 1;
				const li = lit[i] ?? 0;
				return (
					<g key={l} opacity={dp}>
						{li > 0.01 ? <rect x={x0 - 6} y={y - 6} width={ST_W + 12} height={h + 12} rx={22} fill="none" stroke={AMBER} strokeWidth={8} opacity={li} /> : null}
						<rect x={x0} y={y} width={ST_W} height={h} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.28)" strokeWidth={3} />
						<text x={stX(i)} y={y + 38} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={INK_SOFT}>{l}</text>
						{i < 4 ? <path d={`M${x0 + ST_W + 9},${y + h / 2 - 12} L${x0 + ST_W + 27},${y + h / 2} L${x0 + ST_W + 9},${y + h / 2 + 12}`} fill="none" stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" /> : null}
					</g>
				);
			})}
		</g>
	);
};
/** Station summary text (one or two lines, centred in station i). */
export const StText: React.FC<{i: number; y: number; lines: string[]; at: number; size?: number; color?: string; out?: number}> = ({i, y, lines, at, size = 30, color = INK, out}) => (
	<>{lines.map((l, k) => <Sx key={k} x={stX(i)} y={y + k * (size + 8)} text={l} size={size} color={color} weight={700} anchor="middle" at={at + k * 4} out={out} />)}</>
);

// ---------- range bar, soil, gene card ----------
/** Vertical range bar: band (genes allow), pointer p (0 bottom .. 1 top of band). */
export const RangeBar: React.FC<{x: number; y0: number; y1: number; b0?: number; b1?: number; p: number; o?: number; w?: number; pointerO?: number}> = ({x, y0, y1, b0 = 0.25, b1 = 0.95, p, o = 1, w = 56, pointerO = 1}) => {
	if (o <= 0.01) return null;
	const yb = (t: number) => lerp(y1, y0, t);
	const py = lerp(yb(b0), yb(b1), p);
	return (
		<g opacity={o}>
			<rect x={x - w / 2} y={y0} width={w} height={y1 - y0} rx={w / 2} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} />
			<rect x={x - w / 2 + 6} y={yb(b1)} width={w - 12} height={yb(b0) - yb(b1)} rx={(w - 12) / 2} fill="#e9d6a8" stroke={AMBER_INK} strokeWidth={2.5} />
			{pointerO > 0.01 ? (
				<g opacity={pointerO}>
					<path d={`M${x + w / 2 + 6},${py} L${x + w / 2 + 34},${py - 16} L${x + w / 2 + 34},${py + 16} Z`} fill={INK} />
					<line x1={x - w / 2 - 6} y1={py} x2={x + w / 2 + 6} y2={py} stroke={INK} strokeWidth={5} strokeLinecap="round" />
				</g>
			) : null}
		</g>
	);
};
export const rangeY = (y0: number, y1: number, b0: number, b1: number, p: number) => lerp(lerp(y1, y0, b0), lerp(y1, y0, b1), p);
export const Soil: React.FC<{x: number; y: number; w: number; h?: number; o?: number; dry?: number}> = ({x, y, w, h = 46, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={x - w / 2} y={y} width={w} height={h} rx={12} fill="#a9825a" stroke="#6b4a2b" strokeWidth={3} />
		{Array.from({length: Math.floor(w / 34)}, (_, i) => <circle key={i} cx={x - w / 2 + 18 + i * 34} cy={y + 14 + (i % 2) * 14} r={4} fill="#7c5a37" />)}
	</g>
));
/** Gene card: a short plum DNA icon and a label. */
export const GeneCard: React.FC<{x: number; y: number; text: string; at: number; out?: number; w?: number; tick?: number; color?: string}> = ({x, y, text, at, out, w, tick, color = PLUM}) => {
	const ww = w ?? tw(text, 30, true) * 1.1 + 120;
	return (
		<Fade at={at} out={out}>
			<rect x={x - ww / 2} y={y} width={ww} height={64} rx={16} fill="#fffdf8" stroke={color} strokeWidth={3.5} />
			<DnaIcon x={x - ww / 2 + 42} y={y + 32} s={0.9} />
			<Sx x={x - ww / 2 + 84} y={y + 43} text={text} size={30} color={color} hand at={at} />
			{tick !== undefined ? <Tick x={x + ww / 2 + 30} y={y + 30} at={tick} s={34} /> : null}
		</Fade>
	);
};
export const DnaIcon: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<path d="M-20,-22 C0,-12 0,12 -20,22 M20,-22 C0,-12 0,12 20,22" fill="none" stroke={PLUM} strokeWidth={4.5} strokeLinecap="round" />
		{[-14, 0, 14].map(yy => <line key={yy} x1={-12 + Math.abs(yy) * 0.25} y1={yy} x2={12 - Math.abs(yy) * 0.25} y2={yy} stroke={PLUM} strokeWidth={3} />)}
	</g>
);
/** Pigment ring icon (pink without aluminium, blue with); al 0..1 clips Al dots on. */
export const PigmentRing: React.FC<{x: number; y: number; r?: number; blue?: number; al?: number; o?: number}> = ({x, y, r = 22, blue = 0, al = 0, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<path d={Array.from({length: 7}, (_, i) => { const a = (i / 6) * Math.PI * 2 + Math.PI / 6; return `${i ? 'L' : 'M'}${(x + r * Math.cos(a)).toFixed(1)},${(y + r * Math.sin(a)).toFixed(1)}`; }).join(' ') + ' Z'} fill={hexMix('#e48fb4', '#6f8fd8', blue)} stroke={hexMix('#a3466f', '#33508f', blue)} strokeWidth={3} />
		{al > 0.01 ? <AlDot x={x + r * 0.9} y={y - r * 0.9} o={al} r={10} /> : null}
	</g>
));
export const AlDot: React.FC<{x: number; y: number; r?: number; o?: number}> = ({x, y, r = 12, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={3} />
		<text x={x} y={y + r * 0.36} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: r * 0.95}} fill={AMBER_INK}>Al</text>
	</g>
));
/** Ice pack icon. */
export const IcePack: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<rect x={-60} y={-38} width={120} height={76} rx={18} fill="#e6ecf1" stroke="#6d7f8f" strokeWidth={4} />
		<path d="M-30,-14 L-14,0 L-30,14 M0,-18 L0,18 M-16,-9 L16,9 M16,-9 L-16,9 M30,-14 L14,0 L30,14" fill="none" stroke="#6d7f8f" strokeWidth={3.5} strokeLinecap="round" />
	</g>
));
/** Codon card: codon, arrow, codon; amino acids computed below. */
export const CodonSwap: React.FC<{x: number; y: number; a: string; b: string; at: number; aaAt: number; size?: number; out?: number}> = ({x, y, a, b, at, aaAt, size = 40, out}) => {
	const wA = tw(a, size) + 12;
	return (
		<Fade at={at} out={out}>
			<Sx x={x} y={y} text={a} size={size} color={MRNA_INK} weight={800} at={at} />
			<PlainArrow x1={x + wA} y1={y - size * 0.35} x2={x + wA + 70} y2={y - size * 0.35} at={at + 6} color={INK_SOFT} width={4} />
			<Sx x={x + wA + 88} y={y} text={b} size={size} color={MRNA_INK} weight={800} at={at + 10} />
			<Sx x={x} y={y + size + 12} text={codonToAA(a)} size={size * 0.85} color={INK} weight={700} at={aaAt} />
			<PlainArrow x1={x + wA} y1={y + size * 0.65} x2={x + wA + 70} y2={y + size * 0.65} at={aaAt + 4} color={INK_SOFT} width={4} />
			<Sx x={x + wA + 88} y={y + size + 12} text={codonToAA(b)} size={size * 0.85} color={INK} weight={700} at={aaAt + 8} />
		</Fade>
	);
};
/** Small chart excerpt card (computed rows). lit[codon] highlights a row. */
export const ExcerptCard: React.FC<{x: number; y: number; w: number; rows: string[]; at: number; lit?: Record<string, number>; rh?: number; title?: string; size?: number}> = ({x, y, w, rows, at, lit = {}, rh = 46, title = 'Codon chart (part)', size = 32}) => (
	<Fade at={at}>
		<rect x={x} y={y} width={w} height={74 + rows.length * rh} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
		<text x={x + 24} y={y + 46} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={INK_SOFT}>{title}</text>
		{rows.map((c, i) => {
			const yy = y + 102 + i * rh;
			const l = lit[c] ?? 0;
			return (
				<g key={c}>
					{l > 0.01 ? <rect x={x + 12} y={yy - size - 2} width={w - 24} height={size + 14} rx={8} fill={AMBER} opacity={0.4 * l} /> : null}
					<text x={x + 28} y={yy} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size}} fill={MRNA_INK}>{c}</text>
					<text x={x + 28 + size * 3.1} y={yy} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: size}} fill={INK}>{codonToAA(c)}</text>
				</g>
			);
		})}
	</Fade>
);
/** Notes list for the key notes hold. */
export const notesCheck = (notes: string[]) => { for (const n of notes) if (n.includes(String.fromCharCode(0x2014))) throw new Error('em dash in notes'); return notes; };
void Chip; void Cross; void GREEN; void Ring; void SpanBracket; void Strand; void MRNA; void AABead; void PepLink; void pulse; void kf; void scribbleEllipse; void wrap; void chipW; void mistakeW; void MistakeChip; void ModelLine; void AnswerBox; void Heading; void Overlay; void GreyTag; void GREEN;
