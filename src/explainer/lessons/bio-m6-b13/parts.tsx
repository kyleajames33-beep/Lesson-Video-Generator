// M6 B13 drawing parts: the weighing board (four row labels with small icons; two plate-headed case columns whose
// widths shift to the case being weighed; chip cells whose lines brighten on their cue and dim when the next writes;
// a small balance per column with a "provided that ..." condition weight), the pros-and-cons list, the mini evidence
// ladder, the mini levels icon, coded mosquito glyphs, the native cotton flower, the refuge strip, the season field
// icon, return arrows (solid and broken), the chromosome mini panel and offspring marks, ring clusters, check boxes and
// verdict bars. B01, B07, B08, B09, B10, B11 and B12 parts are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {Sx} from '../bio-m5-b13/shared';
import {BIO_INK, CARD, EDGE, GREYT, GREY_INK, FillBar, clamp01, lerp, smooth, vis} from '../bio-m6-b01/parts';
import {platePt, tw} from '../bio-m6-b07/parts';
import {Rg} from '../bio-m6-b08/parts';
import type {RK} from '../bio-m6-b08/parts';
import {Pl, plH} from '../bio-m6-b09/parts';
import {DriveMark, Homolog, MarkText, Pill, bandY} from '../bio-m6-b11/parts';
import {MarkGlyph} from '../bio-m6-b12/parts';
import {PLATES} from './assets';

export {AMBER, AMBER_INK, INK, INK_SOFT, BIO_INK, CARD, EDGE, GREYT, GREY_INK, FillBar, clamp01, lerp, smooth, vis, prog, DrawPath, Pl, plH, platePt, tw, Rg, DriveMark, Homolog, MarkText, Pill, bandY, MarkGlyph, PLATES};
export type {RK};
export const GREEN = '#2f8a5b', RED = '#b5483a';

// ---------- board geometry ----------
export const LBL = {x0: 90, x1: 540};
export const BOARD = {x0: 560, x1: 1820, gap: 20};
export type ColG = {x0: number; x1: number; w: number; wide: number};
/** Column geometry: `t` -1 = Bt cotton wide, 0 = equal, 1 = gene drive wide. */
export const colsAt = (t: number): [ColG, ColG] => {
	const eq = (BOARD.x0 + BOARD.x1) / 2;
	const split = t < 0 ? lerp(eq, 1510, smooth(-t)) : lerp(eq, 870, smooth(t));
	const a = {x0: BOARD.x0, x1: split - BOARD.gap / 2};
	const b = {x0: split + BOARD.gap / 2, x1: BOARD.x1};
	const mk = (c: {x0: number; x1: number}): ColG => ({...c, w: c.x1 - c.x0, wide: clamp01((c.x1 - c.x0 - 640) / 280)});
	return [mk(a), mk(b)];
};
export const ROWY = [310, 455, 600, 745];
export const ROW_H = 136;
export const ROW_LABELS: {key: string; q: string}[] = [
	{key: 'benefit', q: 'how big, how proven?'},
	{key: 'biodiversity', q: 'which level, compared with what?'},
	{key: 'can it be undone?', q: ''},
	{key: 'who gains,', q: 'who carries the risk?'},
];
/** Thumbnail box inside a wide cell (right part). */
export const thumbBox = (c: ColG, r: number) => ({x0: c.x1 - 320, x1: c.x1 - 14, y0: ROWY[r] + 8, y1: ROWY[r] + ROW_H - 8, cx: c.x1 - 167, cy: ROWY[r] + ROW_H / 2});

/** The row frames and labels. `rows[r]` 0..1 draws row r; `lit[r]` brightens its label; `x1` is the board's right edge. */
export const RowFrames: React.FC<{rows?: number[]; lit?: number[]; x1?: number; o?: number; icons?: number; labels?: number[]}> = ({rows = [1, 1, 1, 1], lit = [0, 0, 0, 0], x1 = BOARD.x1, o = 1, icons = 1, labels = [1, 1, 1, 1]}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{ROWY.map((y0, r) => {
				const a = clamp01(rows[r]);
				if (a <= 0.01) return null;
				const L = clamp01(lit[r]);
				const lab = ROW_LABELS[r];
				return (
					<g key={r} opacity={a}>
						<rect x={LBL.x0} y={y0} width={x1 - LBL.x0} height={ROW_H} rx={18} fill={L > 0.5 ? '#fffaf0' : CARD} stroke={L > 0.5 ? AMBER : EDGE} strokeWidth={L > 0.5 ? 3.5 : 2.5} />
						<g opacity={icons * labels[r]}><RowIcon r={r} x={LBL.x0 + 42} y={y0 + ROW_H / 2} lit={L} /></g>
						<g opacity={labels[r]}><Sx x={LBL.x0 + 84} y={y0 + (lab.q ? 58 : 78)} text={lab.key} size={lerp(30, 36, L)} color={L > 0.5 ? INK : GREY_INK} weight={800} />
						{lab.q ? <Sx x={LBL.x0 + 84} y={y0 + 98} text={lab.q} size={lerp(26, 27, L)} color={L > 0.5 ? INK : GREY_INK} hand /> : null}</g>
					</g>
				);
			})}
		</g>
	);
};
/** Small row icons: the evidence ladder, the levels icon, a return arrow, the two "who" glyphs (a field and a roof). */
export const RowIcon: React.FC<{r: number; x: number; y: number; lit?: number}> = ({r, x, y, lit = 0}) => {
	const c = lit > 0.5 ? INK_SOFT : GREYT;
	if (r === 0) return <MiniLadder x={x} y={y} h={70} w={34} color={c} />;
	if (r === 1) return <MiniLevels x={x - 22} y={y - 30} w={44} h={60} color={c} />;
	if (r === 2) return <ReturnArrow x={x} y={y + 8} w={50} kind="solid" color={c} />;
	return (
		<g fill="none" stroke={c} strokeWidth={3} strokeLinejoin="round">
			<path d={`M${x - 30},${y - 2} L${x - 22},${y - 22} L${x - 4},${y - 22} L${x + 4},${y - 2} Z`} fill="#eef3e2" />
			<path d={`M${x - 4},${y + 30} L${x - 4},${y + 14} L${x + 12},${y + 2} L${x + 28},${y + 14} L${x + 28},${y + 30} Z`} fill="#f1ede4" />
		</g>
	);
};

// ---------- column heads ----------
export const HEAD_Y = 232;
/** A plate-headed column title; `lit` 0 greys it. */
const headGeom = (c: ColG, kind: 'bt' | 'gd') => {
	const w = kind === 'bt' ? 92 : 128;
	const title = kind === 'bt' ? 'Bt cotton' : 'gene drive';
	const size = lerp(32, 38, c.wide);
	const tW = tw(title, size) + w + 20;
	const x = (c.x0 + c.x1) / 2 - tW / 2;
	return {w, title, size, x, cx: x + w / 2, cy: HEAD_Y - 6};
};
/** Where a column head's plate sits (for plates flying in from the hook). */
export const headPlate = (c: ColG, kind: 'bt' | 'gd') => {
	const g = headGeom(c, kind);
	return {cx: g.cx, cy: g.cy, w: g.w};
};
export const ColHead: React.FC<{c: ColG; kind: 'bt' | 'gd'; o?: number; lit?: number; plate?: number}> = ({c, kind, o = 1, lit = 1, plate = 1}) => {
	if (o <= 0.01) return null;
	const L = clamp01(lit);
	const p = kind === 'bt' ? PLATES.cotton : PLATES.mosquito;
	const g = headGeom(c, kind);
	return (
		<g opacity={o}>
			<Pl p={p} cx={g.cx} cy={g.cy} w={g.w} dim={1 - L} o={plate} />
			<Sx x={g.x + g.w + 20} y={HEAD_Y + 12} text={g.title} size={g.size} color={L > 0.5 ? INK : GREY_INK} weight={800} />
		</g>
	);
};

// ---------- cell lines ----------
export type CL = {t: string; at: number; out?: number; dimAt?: number; glyph?: 'up' | 'down' | 'q'; vs?: boolean; size?: number; pulse?: number};
/** Text lines in a cell, starting at the cell's top left. Each line writes at `at` (bright) and greys at `dimAt`.
 * `glyph` draws a small arrow or grey "?" at the line's left. */
export const CellLines: React.FC<{c: ColG; r: number; lines: CL[]; size?: number; o?: number; lineH?: number; y0?: number}> = ({c, r, lines, size = 26, o = 1, lineH, y0}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const LH = lineH ?? size * 1.22;
	const top = (y0 ?? ROWY[r]) + 14 + size;
	return (
		<g opacity={o}>
			{lines.map((l, i) => {
				const s = l.size ?? size;
				const a = vis(f, l.at, l.out, 10);
				if (a <= 0.01) return null;
				const lit = l.vs ? 0 : 1 - prog(f, l.dimAt ?? 1e9, 10);
				const gx = l.glyph ? 32 : 0;
				const y = top + i * LH;
				return (
					<g key={i} opacity={a}>
						{l.glyph === 'q' ? <Sx x={c.x0 + 30} y={y + 2} text="?" size={s * 1.15} color={GREY_INK} weight={800} anchor="middle" opacity={1} /> : null}
						{l.glyph === 'q' && l.pulse ? <circle cx={c.x0 + 30} cy={y - s * 0.32} r={s * 0.75} fill={AMBER} opacity={0.3 * l.pulse} /> : null}
						{l.glyph === 'up' || l.glyph === 'down' ? <MarkGlyph x={c.x0 + 30} y={y - s * 0.34} kind={l.glyph} s={0.42} o={0.55 + 0.45 * lit} /> : null}
						<Sx x={c.x0 + 20 + gx} y={y} text={l.t} size={s} color={lit > 0.5 && !l.vs ? INK : GREY_INK} hand />
					</g>
				);
			})}
		</g>
	);
};

// ---------- the balance ----------
/** A coded balance: post, beam tilted by `tilt` degrees (positive = right pan down), two pans. A condition weight sits
 * on the right pan when `weight` > 0, labelled below; `glow` lights the weight. `q` puts a grey "?" on the pivot. */
export const Balance: React.FC<{x: number; y: number; s?: number; tilt?: number; o?: number; weight?: number; label?: string; glow?: number; q?: number; labelLit?: number; draw?: number}> = ({x, y, s = 1, tilt = 0, o = 1, weight = 0, label, glow = 0, q = 0, labelLit = 0, draw = 1}) => {
	if (o <= 0.01) return null;
	const L = 70 * s, H = 64 * s;
	const a = (tilt * Math.PI) / 180;
	const ends: [number, number][] = [[x - L * Math.cos(a), y - H - L * Math.sin(a)], [x + L * Math.cos(a), y - H + L * Math.sin(a)]];
	const pan = (p: [number, number], k: number) => (
		<g key={k}>
			<line x1={p[0]} y1={p[1]} x2={p[0] - 20 * s} y2={p[1] + 30 * s} stroke={INK_SOFT} strokeWidth={2.5} />
			<line x1={p[0]} y1={p[1]} x2={p[0] + 20 * s} y2={p[1] + 30 * s} stroke={INK_SOFT} strokeWidth={2.5} />
			<path d={`M${p[0] - 30 * s},${p[1] + 30 * s} Q${p[0]},${p[1] + 46 * s} ${p[0] + 30 * s},${p[1] + 30 * s} Z`} fill="#f3eee2" stroke={INK_SOFT} strokeWidth={3} />
		</g>
	);
	return (
		<g opacity={o * clamp01(draw * 2)}>
			<line x1={x} y1={y} x2={x} y2={y - H} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
			<line x1={x - 26 * s} y1={y} x2={x + 26 * s} y2={y} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
			<line x1={ends[0][0]} y1={ends[0][1]} x2={ends[1][0]} y2={ends[1][1]} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
			<circle cx={x} cy={y - H} r={5 * s} fill={INK_SOFT} />
			{ends.map((p, k) => pan(p, k))}
			{weight > 0.01 ? (
				<g opacity={weight}>
					{glow > 0.01 ? <circle cx={ends[1][0]} cy={ends[1][1] + 22 * s} r={26 * s} fill={AMBER} opacity={0.35 * glow} /> : null}
					<rect x={ends[1][0] - 15 * s} y={ends[1][1] + 6 * s} width={30 * s} height={24 * s} rx={5} fill={labelLit > 0.5 || glow > 0.3 ? '#fff3d9' : CARD} stroke={AMBER_INK} strokeWidth={2.5} strokeDasharray="5 4" />
				</g>
			) : null}
			{label && weight > 0.01 ? <Sx x={x} y={y + 34 * s} text={label} size={24 * s} color={labelLit > 0.5 ? AMBER_INK : GREY_INK} hand anchor="middle" opacity={weight} /> : null}
			{q > 0.01 ? <Sx x={x} y={y - H - 18 * s} text="?" size={40 * s} color={GREY_INK} weight={800} anchor="middle" opacity={q} /> : null}
		</g>
	);
};

// ---------- small coded pieces ----------
/** A tiny evidence ladder (five rungs); `lit` rung brightens amber. */
export const MiniLadder: React.FC<{x: number; y: number; h: number; w: number; lit?: number; color?: string; o?: number}> = ({x, y, h, w, lit = -1, color = GREYT, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<line x1={x - w / 2} y1={y - h / 2} x2={x - w / 2} y2={y + h / 2} stroke={color} strokeWidth={3} strokeLinecap="round" />
		<line x1={x + w / 2} y1={y - h / 2} x2={x + w / 2} y2={y + h / 2} stroke={color} strokeWidth={3} strokeLinecap="round" />
		{[0, 1, 2, 3, 4].map(k => {
			const yy = y + h / 2 - 6 - (k * (h - 12)) / 4;
			return <line key={k} x1={x - w / 2} y1={yy} x2={x + w / 2} y2={yy} stroke={k === lit ? AMBER : color} strokeWidth={k === lit ? 6 : 3} strokeLinecap="round" />;
		})}
	</g>
));
export const ladderRungY = (y: number, h: number, k: number) => y + h / 2 - 6 - (k * (h - 12)) / 4;
/** A tiny three-row levels icon (b12's board in miniature). `marks` puts glyphs in rows (0 ecosystem, 1 species, 2 genetic). */
export const MiniLevels: React.FC<{x: number; y: number; w: number; h: number; color?: string; o?: number; marks?: {r: number; kind: 'up' | 'down' | 'q'; o?: number}[]; labels?: boolean; lit?: number[]}> = ({x, y, w, h, color = GREYT, o = 1, marks = [], labels = false, lit = [0, 0, 0]}) => {
	if (o <= 0.01) return null;
	const rh = h / 3;
	const names = ['ecosystem', 'species', 'genetic'];
	return (
		<g opacity={o}>
			{[0, 1, 2].map(r => (
				<g key={r}>
					<rect x={x} y={y + r * rh + 2} width={w} height={rh - 4} rx={5} fill={lit[r] > 0.5 ? '#fffaf0' : CARD} stroke={lit[r] > 0.5 ? AMBER : color} strokeWidth={2.2} />
					{labels ? <Sx x={x + 10} y={y + r * rh + rh / 2 + 7} text={names[r]} size={Math.min(22, rh * 0.5)} color={GREY_INK} hand /> : null}
				</g>
			))}
			{marks.map((m, i) => (m.kind === 'q'
				? <Sx key={i} x={x + w - 26} y={y + m.r * rh + rh / 2 + 10} text="?" size={rh * 0.75} color={GREY_INK} weight={800} anchor="middle" opacity={m.o ?? 1} />
				: <MarkGlyph key={i} x={x + w - 26} y={y + m.r * rh + rh / 2} kind={m.kind} s={rh / 90} o={m.o ?? 1} />))}
		</g>
	);
};
/** A return arrow: `solid` (green, a full loop back), `broken` (grey, breaks off short with a gap). */
export const ReturnArrow: React.FC<{x: number; y: number; w: number; kind: 'solid' | 'broken'; color?: string; o?: number; draw?: number}> = ({x, y, w, kind, color, o = 1, draw = 1}) => {
	if (o <= 0.01) return null;
	const c = color ?? (kind === 'solid' ? GREEN : GREYT);
	const d = `M${x + w / 2},${y} C${x + w / 2},${y - w * 0.55} ${x - w / 2},${y - w * 0.55} ${x - w / 2},${y}`;
	const p = clamp01(draw);
	return (
		<g opacity={o}>
			{kind === 'solid' ? (
				<>
					<path d={d} fill="none" stroke={c} strokeWidth={4} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} />
					<path d={`M${x - w / 2 - 9},${y - 10} L${x - w / 2},${y + 2} L${x - w / 2 + 10},${y - 9}`} fill="none" stroke={c} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" opacity={p > 0.9 ? 1 : 0} />
				</>
			) : (
				<>
					<path d={d} fill="none" stroke={c} strokeWidth={4} strokeLinecap="round" strokeDasharray="0.06 0.04" pathLength={1} style={{clipPath: `inset(0 0 0 ${lerp(100, 45, p)}%)`}} />
					<path d={`M${x - w * 0.04},${y - w * 0.46} l-6,-6 M${x - w * 0.04},${y - w * 0.46} l-6,6`} stroke={c} strokeWidth={3.5} strokeLinecap="round" opacity={p > 0.9 ? 1 : 0} />
				</>
			)}
		</g>
	);
};
/** A coded mosquito glyph (a slim body, wings and legs); `hot` gives the target kind an amber body. */
export const MosqG: React.FC<{x: number; y: number; s?: number; hot?: boolean; o?: number}> = ({x, y, s = 1, hot = false, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`} fill="none" strokeLinecap="round">
		<ellipse cx={0} cy={0} rx={14} ry={3.5} fill={hot ? '#e7b04a' : '#c9c4bb'} stroke={hot ? AMBER_INK : GREYT} strokeWidth={1.6} />
		<circle cx={-16} cy={-1} r={3.2} fill={hot ? AMBER_INK : GREYT} />
		<ellipse cx={-2} cy={-7} rx={9} ry={3} fill="rgba(255,255,255,0.7)" stroke={GREYT} strokeWidth={1.2} transform="rotate(-18)" />
		{[-8, -2, 4].map(dx => <path key={dx} d={`M${dx},2 l-4,9 M${dx},2 l4,9`} stroke={GREYT} strokeWidth={1.2} />)}
	</g>
));
/** A coded native cotton flower outline (five petals). */
export const NativeFlower: React.FC<{x: number; y: number; r?: number; o?: number}> = ({x, y, r = 26, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{[0, 1, 2, 3, 4].map(k => {
			const a = (k * 72 - 90) * (Math.PI / 180);
			return <ellipse key={k} cx={x + Math.cos(a) * r * 0.62} cy={y + Math.sin(a) * r * 0.62} rx={r * 0.5} ry={r * 0.34} transform={`rotate(${k * 72} ${x + Math.cos(a) * r * 0.62} ${y + Math.sin(a) * r * 0.62})`} fill="#f2dfee" stroke="#9a6b8f" strokeWidth={2.2} />;
		})}
		<circle cx={x} cy={y} r={r * 0.22} fill="#8a3d6e" />
	</g>
));
/** A refuge strip: a coded field block with a non-Bt band (dashed edge, labelled small). */
export const RefugeStrip: React.FC<{x: number; y: number; w: number; h: number; o?: number}> = ({x, y, w, h, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={x} y={y} width={w} height={h} rx={8} fill="#eef3e2" stroke="#7c9a5a" strokeWidth={2.5} />
		{Array.from({length: 5}, (_, k) => <line key={k} x1={x + 10 + (k * (w * 0.62 - 14)) / 4} y1={y + 6} x2={x + 10 + (k * (w * 0.62 - 14)) / 4} y2={y + h - 6} stroke={GREEN} strokeWidth={3} strokeDasharray="6 5" />)}
		<rect x={x + w * 0.68} y={y + 3} width={w * 0.3} height={h - 6} rx={6} fill="#f7f0dc" stroke="#b7a65f" strokeWidth={2} strokeDasharray="5 4" />
		<Sx x={x + w * 0.83} y={y + h + 22} text="refuge" size={20} color={GREY_INK} hand anchor="middle" />
	</g>
));
/** A field icon whose label switches across season ticks: `phase` 0..1 Bt -> plain (and `back` 0..1 returns). */
export const SeasonField: React.FC<{x: number; y: number; w: number; phase: number; labels?: [string, string]; o?: number}> = ({x, y, w, phase, labels = ['Bt', 'plain'], o = 1}) => {
	if (o <= 0.01) return null;
	const h = w * 0.38;
	const p = clamp01(phase);
	return (
		<g opacity={o}>
			<path d={`M${x + 14},${y} L${x + w - 14},${y} L${x + w},${y + h} L${x},${y + h} Z`} fill={p > 0.5 ? '#f3ecd6' : '#e6efd8'} stroke="#8a9a5a" strokeWidth={2.5} strokeLinejoin="round" />
			{[0.2, 0.4, 0.6, 0.8].map(t => <line key={t} x1={x + 14 + t * (w - 28)} y1={y + 4} x2={x + t * w} y2={y + h - 4} stroke={p > 0.5 ? '#b49a5a' : GREEN} strokeWidth={2.5} strokeDasharray="5 4" />)}
			<rect x={x + w / 2 - 32} y={y + h / 2 - 14} width={64} height={28} rx={14} fill={CARD} stroke={GREYT} strokeWidth={2} />
			<Sx x={x + w / 2} y={y + h / 2 + 8} text={p > 0.5 ? labels[1] : labels[0]} size={20} color={GREY_INK} hand anchor="middle" />
			{[0, 1, 2].map(k => <line key={k} x1={x + 10 + k * (w - 20) / 2} y1={y + h + 8} x2={x + 10 + k * (w - 20) / 2} y2={y + h + 18} stroke={GREYT} strokeWidth={2.5} />)}
			<line x1={x + 10} y1={y + h + 13} x2={x + w - 10} y2={y + h + 13} stroke={GREYT} strokeWidth={2} />
		</g>
	);
};
/** A cluster of allele rings in a soft basin. */
export const RingCluster: React.FC<{x: number; y: number; kinds: RK[]; cols: number; gap?: number; r?: number; o?: number; ringO?: (i: number) => number; kindOf?: (i: number) => RK; basin?: boolean}> = ({x, y, kinds, cols, gap = 34, r = 11, o = 1, ringO, kindOf, basin = true}) => {
	if (o <= 0.01) return null;
	const rows = Math.ceil(kinds.length / cols);
	const w = cols * gap + 20, h = rows * gap + 20;
	return (
		<g opacity={o}>
			{basin ? <rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={16} fill="#eef4f9" stroke="#8ba9c4" strokeWidth={2.5} /> : null}
			{kinds.map((k, i) => {
				const cx = x - ((cols - 1) * gap) / 2 + (i % cols) * gap;
				const cy = y - ((rows - 1) * gap) / 2 + Math.floor(i / cols) * gap;
				return <Rg key={i} x={cx} y={cy} r={r} k={kindOf ? kindOf(i) : k} o={ringO ? ringO(i) : 1} />;
			})}
		</g>
	);
};
export const clusterPt = (x: number, y: number, n: number, cols: number, i: number, gap = 34): [number, number] => {
	const rows = Math.ceil(n / cols);
	return [x - ((cols - 1) * gap) / 2 + (i % cols) * gap, y - ((rows - 1) * gap) / 2 + Math.floor(i / cols) * gap];
};
/** A chromosome mini panel: two homologues; `band` fills the left band, `copy` 0..1 copies it across. */
export const ChromoMini: React.FC<{x: number; y: number; h?: number; copy?: number; o?: number; gap?: number}> = ({x, y, h = 110, copy = 0, o = 1, gap = 50}) => {
	if (o <= 0.01) return null;
	const by = bandY(y, h);
	return (
		<g opacity={o}>
			<Homolog x={x - gap / 2} y={y} h={h} w={22} band={1} />
			<Homolog x={x + gap / 2} y={y} h={h} w={22} band={clamp01(copy)} />
			{copy > 0.05 && copy < 0.98 ? <path d={`M${x - gap / 2 + 12},${by - 8} Q${x},${by - 30} ${x + gap / 2 - 12},${by - 8}`} fill="none" stroke={AMBER} strokeWidth={3.5} strokeLinecap="round" /> : null}
		</g>
	);
};
/** A row of `n` offspring marks: filled amber (carries) or open grey. `carry(i)` 0..1, `grey(i)` dims a dead one. */
export const OffRow: React.FC<{x: number; y: number; n: number; gap?: number; carry: (i: number) => number; o?: (i: number) => number; s?: number}> = ({x, y, n, gap = 52, carry, o, s = 1}) => (
	<g>
		{Array.from({length: n}, (_, i) => {
			const a = o ? o(i) : 1;
			if (a <= 0.01) return null;
			return <g key={i} transform={`translate(${x + i * gap},${y}) scale(${s})`}><DriveMark x={0} y={0} carry={carry(i)} o={a} /></g>;
		})}
	</g>
);
/** A check box with its question; `tick` 0..1 draws a tick, `q` shows a grey "?" inside instead. */
export const CheckBox: React.FC<{x: number; y: number; text: string; o?: number; tick?: number; q?: number; lit?: number; size?: number}> = ({x, y, text, o = 1, tick = 0, q = 0, lit = 1, size = 32}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<rect x={x} y={y - 26} width={44} height={44} rx={8} fill={CARD} stroke={lit > 0.5 ? AMBER_INK : GREYT} strokeWidth={3} />
			{tick > 0.01 ? <path d={`M${x + 9},${y - 3} l10,12 l17,-22`} fill="none" stroke={GREEN} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" opacity={tick} /> : null}
			{q > 0.01 ? <Sx x={x + 22} y={y + 12} text="?" size={36} color={GREY_INK} weight={800} anchor="middle" opacity={q} /> : null}
			<Sx x={x + 62} y={y + 8} text={text} size={size} color={lit > 0.5 ? INK : GREY_INK} hand />
		</g>
	);
};
/** A generic coded insect outline (for "a species"). */
export const InsectG: React.FC<{x: number; y: number; s?: number; o?: number; color?: string}> = ({x, y, s = 1, o = 1, color = INK_SOFT}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`} fill="none" stroke={color} strokeWidth={3} strokeLinecap="round">
		<ellipse cx={8} cy={0} rx={16} ry={9} fill="#f1ede4" />
		<circle cx={-12} cy={0} r={7} fill="#f1ede4" />
		<circle cx={-22} cy={-2} r={5} fill="#f1ede4" />
		<path d="M-26,-6 q-6,-10 -2,-16 M-24,-6 q2,-10 8,-14" />
		{[-12, -4, 6].map(dx => <path key={dx} d={`M${dx},6 l-6,12 M${dx},-6 l-6,-12`} />)}
	</g>
));
/** A village roof glyph (the people affected: no person drawn). */
export const RoofG: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`} fill="#f1ede4" stroke={INK_SOFT} strokeWidth={3} strokeLinejoin="round">
		<path d="M-40,8 L-20,-14 L0,8 L0,30 L-40,30 Z" />
		<path d="M4,8 L24,-14 L44,8 L44,30 L4,30 Z" />
		<rect x={-26} y={14} width={10} height={16} /><rect x={18} y={14} width={10} height={16} />
	</g>
));
/** A coded wild grass tuft cluster. */
export const GrassTufts: React.FC<{x: number; y: number; n?: number; o?: number}> = ({x, y, n = 4, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} fill="none" stroke="#6f8a4a" strokeWidth={3} strokeLinecap="round">
		{Array.from({length: n}, (_, k) => {
			const bx = x + k * 34;
			return <path key={k} d={`M${bx},${y} q-8,-30 -14,-46 M${bx},${y} q2,-34 4,-54 M${bx},${y} q10,-26 16,-40`} />;
		})}
	</g>
));
/** A verdict bar: a cream card with hand lines built from parts (marked parts underline amber). `lit` 0 greys it. */
export const VerdictBar: React.FC<{x: number; y: number; w: number; h: number; lines: {t: string; mark?: number}[][]; at: number; size?: number; lit?: number; pulse?: number; o?: number}> = ({x, y, w, h, lines, at, size = 30, lit = 1, pulse = 0, o = 1}) => {
	const f = useCurrentFrame();
	const a = prog(f, at, 12) * o;
	if (a <= 0.01) return null;
	const L = clamp01(lit);
	return (
		<g opacity={a}>
			{pulse > 0.01 ? <rect x={x - 8} y={y - 8} width={w + 16} height={h + 16} rx={26} fill={AMBER} opacity={0.22 * pulse} /> : null}
			<rect x={x} y={y} width={w} height={h} rx={20} fill={L > 0.5 ? '#fff3d9' : CARD} stroke={L > 0.5 ? AMBER : EDGE} strokeWidth={L > 0.5 ? 4 : 2.5} />
			{lines.map((parts, i) => (
				<MarkText key={i} x={x + 24} y={y + 16 + size + i * size * 1.25} size={size} at={at + i * 6} parts={parts} color={L > 0.5 ? INK : GREY_INK} markColor={L > 0.5 ? AMBER_INK : GREY_INK} />
			))}
		</g>
	);
};
export const useF = () => useCurrentFrame();
void platePt; void plH; void Pill; void BIO_INK; void FillBar;
