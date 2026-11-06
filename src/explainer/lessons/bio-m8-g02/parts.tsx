// M8 G02 (Biology practice) drawing parts. The practice board (question cards, columns, tables, chips, answer boxes,
// crossed mistakes, framed answers, pause hold, plates) is bio-m8-g01's board and the pre-countdown ring is bio-m8-b07's
// PreRing, both imported read-only. New here (coded abstract diagrams; organs and objects stay painted plates):
// - EvalStrip: the four-slot evaluation frame (how it works, what the evidence shows, a real limit, judgement);
// - Ladder: b13's process, impact, outcome ladder (rebuilt locally; b13 is not built);
// - PairBars: kit returns before and after for Region A and Region B, with brackets and the difference bar (axes and
//   empty bar outlines solid from the first frame);
// - Prevented: b14's "what is prevented" strip (rebuilt locally);
// - Dots: plain dot fields with a tinted count;
// - ScoreChart: speech scores before and after (quiet, noise), outlines solid from the first frame;
// - Spread: individual scores behind an average.
// Nothing here draws people.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, BLUE, Box, CARD, Chip, EDGE, GREYT, GREY_FILL, GTag, INK, INK_SOFT, QPart, Sx, TEAL, Tag, Tbl, marksCheck, mw, prog, pulse, smooth, vis, wrapM,
} from '../bio-m8-g01/board';
import type {QMark} from '../bio-m8-g01/board';
import {Q1_DEM, Q1_STEM, Q1_T_COL, Q1_T_FULL, Q2_CHIP, Q2_DEM, Q2_STEM, Q2_T_COL, Q2_T_FULL, Q3_DEM, Q3_STEM, Q3_T_COL, Q3_T_FULL, Q3_WAIT} from './common';

export * from '../bio-m8-g01/board';
export {PreRing} from '../bio-m8-b07/parts';
export {PL, RETINA} from './assets';

export const A_COL = '#2f7f86', B_COL = '#9a8f80', DIFF = '#b5502b', GOOD = '#2f8a5b';
const rng = (seed: number) => { let s = seed >>> 0 || 1; return () => { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; }; };

// ---------- question cards ----------
const Illus: React.FC<{x: number; y: number; size?: number; text?: string}> = ({x, y, size = 28, text = 'illustrative data'}) => <GTag x={x} y={y} text={text} size={size} />;
export const Q1Full: React.FC = () => (
	<g>
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q1_STEM} x={126} y={212} w={1150} size={36} />
		<Tbl t={Q1_T_FULL} x={126} y={512} size={36} headSize={30} rowH={64} />
		<Illus x={126} y={756} />
		<QPart blocks={Q1_DEM} x={126} y={866} w={1150} size={38} />
	</g>
);
export const q1Marks = (m: QMark[]) => marksCheck([Q1_STEM, Q1_DEM], m);
export const Q1Col: React.FC<{marks?: QMark[]; cells?: Record<string, number>}> = ({marks = [], cells = {}}) => (
	<g>
		<Box x={40} y={150} w={680} h={890} />
		<QPart blocks={Q1_STEM} marks={marks} x={62} y={196} w={636} size={27} />
		<Tbl t={Q1_T_COL} x={62} y={500} size={30} headSize={26} rowH={54} marks={cells} />
		<Illus x={62} y={746} size={26} />
		<QPart blocks={Q1_DEM} marks={marks} x={62} y={846} w={636} size={27} />
	</g>
);
export const Q2Full: React.FC = () => (
	<g>
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q2_STEM} x={126} y={210} w={1150} size={35} />
		<Tbl t={Q2_T_FULL} x={126} y={540} size={34} headSize={30} rowH={58} />
		<Illus x={126} y={760} text={Q2_CHIP} />
		<QPart blocks={Q2_DEM} x={126} y={872} w={1150} size={36} />
	</g>
);
export const q2Marks = (m: QMark[]) => marksCheck([Q2_STEM, Q2_DEM], m);
export const Q2Col: React.FC<{marks?: QMark[]; cells?: Record<string, number>}> = ({marks = [], cells = {}}) => (
	<g>
		<Box x={40} y={150} w={680} h={890} />
		<QPart blocks={Q2_STEM} marks={marks} x={62} y={196} w={636} size={27} />
		<Tbl t={Q2_T_COL} x={62} y={516} size={28} headSize={26} rowH={50} marks={cells} />
		<Tag x={62} y={748} w={636} text={Q2_CHIP} size={26} color="#8d857a" ink={GREYT} fill={GREY_FILL} />
		<QPart blocks={Q2_DEM} marks={marks} x={62} y={858} w={636} size={27} />
	</g>
);
export const Q3Full: React.FC = () => (
	<g>
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q3_STEM} x={126} y={206} w={1150} size={34} />
		<Tbl t={{...Q3_T_FULL, rows: Q3_T_FULL.rows.map((r, i) => [i === 0 ? 'Words correctly repeated from sentences\nin quiet (average %)' : i === 1 ? 'Words correctly repeated from sentences\nwith background noise (average %)' : r[0], r[1], r[2]])}} x={126} y={328} size={28} headSize={28} rowH={74} boldCol0={false} />
		<QPart blocks={Q3_WAIT} x={126} y={700} w={760} size={32} />
		<Illus x={900} y={672} size={26} />
		<QPart blocks={Q3_DEM} x={126} y={772} w={1150} size={32} lh={40} />
	</g>
);
export const q3Marks = (m: QMark[]) => marksCheck([Q3_STEM, Q3_WAIT, Q3_DEM], m);
export const Q3Col: React.FC<{marks?: QMark[]; cells?: Record<string, number>}> = ({marks = [], cells = {}}) => (
	<g>
		<Box x={40} y={150} w={680} h={890} />
		<QPart blocks={Q3_STEM} marks={marks} x={62} y={190} w={636} size={27} lh={33} />
		<Tbl t={Q3_T_COL} x={62} y={316} size={26} headSize={26} rowH={86} marks={cells} boldCol0={false} />
		<QPart blocks={Q3_WAIT} marks={marks} x={62} y={754} w={636} size={27} />
		<QPart blocks={Q3_DEM} marks={marks} x={62} y={796} w={636} size={26} lh={32} />
	</g>
);
/** A short strip of key givens for the answer side of a question card (from the first frame). */
export const Givens: React.FC<{x: number; y: number; items: [string, string][]; size?: number; gap?: number}> = ({x, y, items, size = 28, gap = 10}) => (
	<g>
		<Sx x={x} y={y - 12} text="key givens" size={28} color={INK_SOFT} hand weight={700} at={-1000} />
		{items.map(([t, c], i) => <Chip key={i} x={x} y={y + i * (size * 1.55 + gap)} text={t} size={size} color={c} ink={INK} />)}
	</g>
);

// ---------- evaluation frame strip ----------
export const SLOTS = ['how it works', 'what the evidence shows', 'a real limit', 'judgement'];
export type Fill = {t: string; at: number};
/** Four slots; each fills on its cue (from -1000 = carried from an earlier scene). */
export const EvalStrip: React.FC<{x?: number; y?: number; w?: number; h?: number; fills: (Fill | undefined)[]; size?: number; pulseAt?: [number, number][]; o?: number}> = ({x = 790, y = 878, w = 1050, h = 160, fills, size = 28, pulseAt = [], o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const gap = 12, sw = (w - gap * 3) / 4;
	return (
		<g opacity={o}>
			{SLOTS.map((lab, i) => {
				const sx = x + i * (sw + gap);
				const fl = fills[i];
				const v = fl ? prog(f, fl.at, 12) : 0;
				const pu = pulseAt.filter(p => p[0] === i).reduce((m, p) => Math.max(m, pulse(f, p[1], 40)), 0);
				return (
					<g key={i}>
						{pu > 0.01 ? <rect x={sx - 7} y={y - 7} width={sw + 14} height={h + 14} rx={18} fill={AMBER} opacity={0.35 * pu} /> : null}
						<rect x={sx} y={y} width={sw} height={h} rx={14} fill={v > 0.5 ? '#fffaf0' : CARD} stroke={v > 0.5 ? BLUE : EDGE} strokeWidth={v > 0.5 ? 4 : 2.5} strokeDasharray={v > 0.5 ? undefined : '10 8'} />
						<Sx x={sx + 14} y={y + 34} text={lab} size={28} color={BLUE} hand weight={700} at={-1000} />
						{fl && v > 0.01 ? <g opacity={v}>{wrapM(fl.t, size, sw - 26, true, 700).slice(0, 4).map((l, j) => <Sx key={j} x={sx + 14} y={y + 38 + size * 1.06 * (j + 1)} text={l} size={size} color={INK} hand weight={700} at={-1000} />)}</g> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- measure ladder ----------
export type Rung = {lit?: number; pulseAt?: number; relabel?: [string, number]; tag?: [string, number]};
/** Process, impact, outcome: what we did, what people did, what the disease did. */
export const Ladder: React.FC<{x: number; y: number; w: number; rh?: number; rungs?: Rung[]; o?: number; size?: number}> = ({x, y, w, rh = 104, rungs = [], o = 1, size = 34}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const R: [string, string][] = [['outcome', 'what the disease did'], ['impact', 'what people did'], ['process', 'what we did']];
	const map = [2, 1, 0];
	return (
		<g opacity={o}>
			<Sx x={x} y={y - 12} text="b13: the measure ladder" size={28} color={GREYT} hand weight={700} at={-1000} />
			{R.map(([name, desc], k) => {
				const r = rungs[map[k]] ?? {};
				const yy = y + k * (rh + 12);
				const L = r.lit === undefined ? 0 : prog(f, r.lit, 12);
				const p = r.pulseAt === undefined ? 0 : pulse(f, r.pulseAt, 44);
				const d = r.relabel && f >= r.relabel[1] ? r.relabel[0] : desc;
				return (
					<g key={name}>
						{p > 0.01 ? <rect x={x - 8} y={yy - 8} width={w + 16} height={rh + 16} rx={20} fill={AMBER} opacity={0.35 * p} /> : null}
						<rect x={x} y={yy} width={w} height={rh} rx={16} fill={L > 0.5 ? TEAL : CARD} stroke={L > 0.5 ? TEAL : EDGE} strokeWidth={3} />
						<Sx x={x + 20} y={yy + rh * 0.44} text={name} size={size} color={L > 0.5 ? CARD : INK} weight={800} at={-1000} />
						<Sx x={x + 20} y={yy + rh * 0.44 + size * 1.08} text={d} size={size - 4} color={L > 0.5 ? CARD : INK} hand weight={700} at={-1000} />
						{r.tag && f >= r.tag[1] ? <Sx x={x + w - 16} y={yy + rh * 0.44} text={r.tag[0]} size={28} color={L > 0.5 ? CARD : AMBER_INK} anchor="end" hand weight={700} at={r.tag[1]} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- Q1: paired bars ----------
export type PBT = {aB?: number; aA?: number; bB?: number; bA?: number; brA?: number; brB?: number; diff?: number; pulseB?: number; pulseD?: number; dimAt?: number};
/** Kit returns (%): Region A and Region B, before and after, plus the difference bar. Axes, ticks and empty bar
 *  outlines are solid from the first frame; fills grow on cue. */
export const PairBars: React.FC<{x: number; base: number; h: number; bw?: number; t: PBT; size?: number; o?: number}> = ({x, base, h, bw = 66, t, size = 30, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const max = 60, Y = (v: number) => base - (v / max) * h;
	const gap = 12, grp = 2 * bw + gap + 84;
	const dim = t.dimAt === undefined ? 0 : prog(f, t.dimAt, 14);
	const bars: [number, number, number | undefined, string, string][] = [[0, 38, t.aB, A_COL, 'before'], [1, 47, t.aA, A_COL, 'after'], [2, 38, t.bB, B_COL, 'before'], [3, 40, t.bA, B_COL, 'after']];
	const bx = (i: number) => x + 40 + (i >= 2 ? grp : 0) + (i % 2) * (bw + gap);
	const dX = x + 40 + 2 * grp + 10;
	const dk = t.diff === undefined ? 0 : smooth(prog(f, t.diff, 22));
	const pd = t.pulseD === undefined ? 0 : pulse(f, t.pulseD, 44);
	const pb = t.pulseB === undefined ? 0 : pulse(f, t.pulseB, 44);
	const bracket = (i0: number, i1: number, v0: number, v1: number, at: number | undefined, label: string, col: string, pu: number) => {
		if (at === undefined) return null;
		const k = prog(f, at, 12);
		if (k <= 0.01) return null;
		const xx = bx(i1) + bw + 10;
		return (
			<g opacity={k}>
				{pu > 0.01 ? <rect x={bx(i0) - 8} y={Y(v1) - 60} width={bw * 2 + gap + 72} height={Y(v0) - Y(v1) + 70} rx={12} fill={AMBER} opacity={0.3 * pu} /> : null}
				<path d={`M${xx},${Y(v0)} l10,0 L${xx + 10},${Y(v1)} l-10,0`} fill="none" stroke={col} strokeWidth={4} />
				<Sx x={xx + 16} y={(Y(v0) + Y(v1)) / 2 + 12} text={label} size={size + 4} color={col} weight={800} at={-1000} />
			</g>
		);
	};
	return (
		<g opacity={o}>
			<g opacity={1 - 0.5 * dim}>
				<line x1={x} x2={x} y1={base - h - 16} y2={base} stroke={INK} strokeWidth={4} />
				<line x1={x} x2={dX + bw + 30} y1={base} y2={base} stroke={INK} strokeWidth={4} />
				{[0, 20, 40, 60].map(v => <g key={v}><line x1={x - 10} x2={x} y1={Y(v)} y2={Y(v)} stroke={INK} strokeWidth={3} /><Sx x={x - 16} y={Y(v) + 10} text={`${v}`} size={size - 2} color={INK} anchor="end" weight={700} at={-1000} /></g>)}
				<g transform={`translate(${x - 62},${base - h / 2}) rotate(-90)`}><Sx x={0} y={0} text="kits returned (%)" size={size - 2} color={INK} anchor="middle" weight={800} at={-1000} /></g>
				{bars.map(([i, v, at, col, lab]) => {
					const k = at === undefined ? 0 : smooth(prog(f, at, 20));
					const hh = (v / max) * h;
					return (
						<g key={i}>
							<rect x={bx(i)} y={base - hh} width={bw} height={hh} rx={6} fill={CARD} stroke={col} strokeWidth={3} />
							{k > 0.01 ? <rect x={bx(i) + 2} y={base - hh * k} width={bw - 4} height={hh * k - 2} rx={5} fill={col} opacity={i % 2 === 0 ? 0.45 : 0.85} /> : null}
							{k > 0.5 ? <Sx x={bx(i) + bw / 2} y={base - hh - 12} text={`${v}`} size={size + 2} color={INK} anchor="middle" weight={800} at={-1000} /> : null}
							<Sx x={bx(i) + bw / 2} y={base + size + 6} text={lab} size={size - 6} color={INK} anchor="middle" hand weight={700} at={-1000} />
						</g>
					);
				})}
				<Sx x={bx(0) + bw + gap / 2} y={base + size * 2 + 14} text="Region A" size={size} color={A_COL} anchor="middle" weight={800} at={-1000} />
				<Sx x={bx(2) + bw + gap / 2} y={base + size * 2 + 14} text="Region B" size={size} color={GREYT} anchor="middle" weight={800} at={-1000} />
				{bracket(0, 1, 38, 47, t.brA, '+9', A_COL, 0)}
				{bracket(2, 3, 38, 40, t.brB, '+2', GREYT, pb)}
			</g>
			<rect x={dX} y={Y(7)} width={bw} height={base - Y(7)} rx={6} fill={CARD} stroke={DIFF} strokeWidth={3} strokeDasharray="8 6" />
			{dk > 0.01 ? <g>
				{pd > 0.01 ? <rect x={dX - 10} y={Y(7) - 60} width={bw + 20} height={base - Y(7) + 66} rx={12} fill={AMBER} opacity={0.35 * pd} /> : null}
				<rect x={dX + 2} y={base - (base - Y(7)) * dk} width={bw - 4} height={(base - Y(7)) * dk - 2} rx={5} fill={DIFF} opacity={0.85} />
				<Sx x={dX + bw / 2} y={Y(7) - 12} text="≈ 7" size={size + 6} color={DIFF} anchor="middle" weight={800} at={-1000} />
			</g> : null}
			<Sx x={dX + bw / 2} y={base + size + 6} text="9 − 2" size={size - 6} color={INK} anchor="middle" hand weight={700} at={-1000} />
			<Sx x={dX + bw / 2} y={base + size * 2 + 14} text="campaign" size={size} color={DIFF} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};
export const pairW = (bw = 66) => 40 + 2 * (2 * bw + 12 + 84) + 10 + bw + 30;

// ---------- Q2: prevented strip and dots ----------
/** b14's question: what does this method prevent? Symptoms in one person, an affected birth, or the gene in the next
 *  generation. All three slots show from the first frame; one lights green, one amber, on cue. */
export const Prevented: React.FC<{x: number; y: number; w: number; h?: number; green?: number; amber?: number; amberLabel?: string; pulseG?: number; pulseA?: number; size?: number}> = ({x, y, w, h = 120, green, amber, amberLabel = 'body cells only', pulseG, pulseA, size = 34}) => {
	const f = useCurrentFrame();
	const T3 = ['symptoms, in one person', 'an affected birth', 'the gene in the next generation'];
	const gap = 14, sw = (w - 2 * gap) / 3;
	return (
		<g>
			<Sx x={x} y={y - 14} text="what does it prevent?" size={30} color={GREYT} hand weight={700} at={-1000} />
			{T3.map((t, i) => {
				const sx = x + i * (sw + gap);
				const g = i === 0 && green !== undefined ? prog(f, green, 12) : 0;
				const a = i === 2 && amber !== undefined ? prog(f, amber, 12) : 0;
				const p = i === 0 && pulseG !== undefined ? pulse(f, pulseG, 44) : i === 2 && pulseA !== undefined ? pulse(f, pulseA, 44) : 0;
				const col = g > 0.5 ? GOOD : a > 0.5 ? AMBER_INK : EDGE;
				const lines = wrapM(t, size, sw - 40, true, 700);
				return (
					<g key={i}>
						{p > 0.01 ? <rect x={sx - 8} y={y - 8} width={sw + 16} height={h + 16} rx={20} fill={AMBER} opacity={0.35 * p} /> : null}
						<rect x={sx} y={y} width={sw} height={h} rx={16} fill={g > 0.5 ? '#e8f4ec' : a > 0.5 ? '#fdf1e2' : CARD} stroke={col} strokeWidth={g > 0.5 || a > 0.5 ? 5 : 3} />
						{lines.map((l, j) => <Sx key={j} x={sx + sw / 2} y={y + h / 2 + size * 0.36 + (j - (lines.length - 1) / 2) * size * 1.08} text={l} size={size} color={INK} anchor="middle" hand weight={700} at={-1000} />)}
						{g > 0.5 ? <path d={`M${sx + sw - 44},${y + 26} l10,10 l18,-20`} fill="none" stroke={GOOD} strokeWidth={5} strokeLinecap="round" /> : null}
						{i === 2 && a > 0.01 ? <Sx x={sx + sw / 2} y={y + h + 38} text={amberLabel} size={30} color={AMBER_INK} anchor="middle" hand weight={700} at={amber} /> : null}
					</g>
				);
			})}
		</g>
	);
};
/** cols x rows plain dots (solid from the first frame); `n` of them tint teal one by one from `tint`. */
export const Dots: React.FC<{x: number; y: number; cols: number; rows: number; sp: number; n: number; tint?: number; label?: string; color?: string; pulseAt?: number}> = ({x, y, cols, rows, sp, n, tint, label, color = TEAL, pulseAt}) => {
	const f = useCurrentFrame();
	const N = cols * rows;
	const pu = pulseAt === undefined ? 0 : pulse(f, pulseAt, 40);
	return (
		<g>
			<rect x={x - sp * 0.6} y={y - sp * 0.6} width={cols * sp + sp * 0.2} height={rows * sp + sp * 0.2} rx={12} fill={CARD} stroke={pu > 0.01 ? AMBER : EDGE} strokeWidth={2.5 + 3 * pu} />
			{Array.from({length: N}, (_, i) => {
				const t = i < n && tint !== undefined ? prog(f, tint + i * 2, 6) : 0;
				return <circle key={i} cx={x + (i % cols) * sp} cy={y + Math.floor(i / cols) * sp} r={sp * 0.32} fill={t > 0.5 ? color : '#b9b2a4'} />;
			})}
			{label ? <Sx x={x - sp * 0.6} y={y - sp * 0.6 - 14} text={label} size={32} color={INK} hand weight={700} at={-1000} /> : null}
		</g>
	);
};

// ---------- Q3: score chart and spread ----------
export type SCT = {quiet?: number; noise?: number; pulseNoise?: number};
/** Words correct (%), before (best hearing aids) and 12 months after the implant, in quiet and in noise. Axes and empty
 *  outlines solid from the first frame; fills on cue. */
export const ScoreChart: React.FC<{x: number; y: number; w: number; h: number; t: SCT; size?: number}> = ({x, y, w, h, t, size = 28}) => {
	const f = useCurrentFrame();
	const base = y + h, Y = (v: number) => base - (v / 100) * h;
	const bw = 70, gap = 10, grp = (w - 60) / 2;
	const sets: [number, number, number, number | undefined, string][] = [[0, 0, 15, t.quiet, 'quiet'], [0, 1, 70, t.quiet, 'quiet'], [1, 0, 5, t.noise, 'noise'], [1, 1, 35, t.noise, 'noise']];
	const bx = (g: number, k: number) => x + 50 + g * grp + (grp - 2 * bw - gap) / 2 + k * (bw + gap);
	const pn = t.pulseNoise === undefined ? 0 : pulse(f, t.pulseNoise, 44);
	return (
		<g>
			<line x1={x} x2={x} y1={y - 14} y2={base} stroke={INK} strokeWidth={4} />
			<line x1={x} x2={x + w} y1={base} y2={base} stroke={INK} strokeWidth={4} />
			{[0, 25, 50, 75, 100].map(v => <g key={v}><line x1={x - 10} x2={x} y1={Y(v)} y2={Y(v)} stroke={INK} strokeWidth={3} /><line x1={x} x2={x + w} y1={Y(v)} y2={Y(v)} stroke="#e4ddd0" strokeWidth={1.5} /><Sx x={x - 14} y={Y(v) + 9} text={`${v}`} size={size - 2} color={INK} anchor="end" weight={700} at={-1000} /></g>)}
			<g transform={`translate(${x - 64},${y + h / 2}) rotate(-90)`}><Sx x={0} y={0} text="words correct (%)" size={size - 2} color={INK} anchor="middle" weight={800} at={-1000} /></g>
			{sets.map(([g, k, v, at, _l], i) => {
				const kk = at === undefined ? 0 : smooth(prog(f, at + k * 10, 20));
				const hh = (v / 100) * h;
				const col = k === 0 ? '#9a8f80' : TEAL;
				const isN = g === 1 && k === 1;
				return (
					<g key={i}>
						{isN && pn > 0.01 ? <rect x={bx(g, k) - 8} y={base - hh - 56} width={bw + 16} height={hh + 60} rx={10} fill={AMBER} opacity={0.35 * pn} /> : null}
						<rect x={bx(g, k)} y={base - hh} width={bw} height={hh} rx={6} fill={CARD} stroke={col} strokeWidth={3} />
						{kk > 0.01 ? <rect x={bx(g, k) + 2} y={base - hh * kk} width={bw - 4} height={hh * kk - 2} rx={5} fill={col} opacity={0.85} /> : null}
						{kk > 0.5 ? <Sx x={bx(g, k) + bw / 2} y={base - hh - 10} text={`${v}`} size={size + 4} color={INK} anchor="middle" weight={800} at={-1000} /> : null}
						<Sx x={bx(g, k) + bw / 2} y={base + size + 4} text={k === 0 ? 'before' : 'after'} size={size - 4} color={INK} anchor="middle" hand weight={700} at={-1000} />
					</g>
				);
			})}
			<Sx x={bx(0, 0) + bw + gap / 2} y={base + size * 2 + 12} text="in quiet" size={size + 2} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={bx(1, 0) + bw + gap / 2} y={base + size * 2 + 12} text="in noise" size={size + 2} color={INK} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};
/** Individual scores behind an average of 70: axis and average marker solid; dots spread on cue. */
export const Spread: React.FC<{x: number; y: number; w: number; at: number; size?: number}> = ({x, y, w, at, size = 30}) => {
	const f = useCurrentFrame();
	const X = (v: number) => x + (v / 100) * w;
	const R = rng(41);
	const vals = [32, 41, 48, 55, 58, 62, 64, 66, 68, 69, 70, 71, 72, 73, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 95, 60, 77, 85, 52, 79];
	const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
	const adj = vals.map(v => v + (70 - mean));
	const ys = adj.map(() => y - 26 - R() * 100);
	return (
		<g>
			<line x1={x} x2={x + w} y1={y} y2={y} stroke={INK} strokeWidth={4} />
			{[0, 20, 40, 60, 80, 100].map(v => <g key={v}><line x1={X(v)} x2={X(v)} y1={y} y2={y + 12} stroke={INK} strokeWidth={3} /><Sx x={X(v)} y={y + 14 + size} text={`${v}`} size={size} color={INK} anchor="middle" weight={700} at={-1000} /></g>)}
			<Sx x={x + w} y={y + 30 + size * 2} text="words correct in quiet (%)" size={size} color={INK} anchor="end" weight={800} at={-1000} />
			<line x1={X(70)} x2={X(70)} y1={y - 150} y2={y + 4} stroke={TEAL} strokeWidth={6} />
			<Sx x={X(70)} y={y - 162} text="average 70" size={size + 6} color={TEAL} anchor="middle" weight={800} at={-1000} />
			{adj.map((v, i) => {
				const k = prog(f, at + i * 2, 10);
				if (k <= 0.01) return null;
				return <circle key={i} cx={X(v)} cy={ys[i]} r={11} fill="#7b838c" opacity={k} />;
			})}
		</g>
	);
};
void mw; void vis;
