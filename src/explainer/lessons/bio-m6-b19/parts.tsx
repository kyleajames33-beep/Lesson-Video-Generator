// M6 B19 drawing parts: the benefit board (a column card per case scene with three test cells, two to four word
// chips and strength dots; the mini board in the top-right corner; the full board for the ranking), the test icons
// (two pans, a magnifier, a group of recipient dots; no people), tree icons, the viral and plant strips, harvest bars,
// insulin bead strips, trial bars, supply lines, enzyme glyphs, the sealed tank outline, pollen and insect glyphs, a
// world outline and a small vial glyph. B01, B07, B09 and B13 parts are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog, scribbleEllipse} from '../../kit';
import {Sx, tw} from '../bio-m5-b13/shared';
import {CARD, EDGE, GREYT, GREY_INK, GTag, clamp01, lerp, smooth, vis} from '../bio-m6-b01/parts';
import {GreyCross, Tg} from '../bio-m6-b07/parts';
import {Pl, plH} from '../bio-m6-b09/parts';
import {InsectG, MiniLevels, RefugeStrip} from '../bio-m6-b13/parts';
import type {PB} from '../bio-m5-b07/shared';
import {PLATES} from './assets';

export {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog, scribbleEllipse, Sx, tw, CARD, EDGE, GREYT, GREY_INK, GTag, clamp01, lerp, smooth, vis, GreyCross, Tg, Pl, plH, InsectG, MiniLevels, RefugeStrip, PLATES};
export type {PB};
export const TERRA = '#c0643f', GREEN = '#2f8a5b', RED_GREY = '#a8665a', LEAF = '#5e8a3a';

// ---------- strength dots ----------
export type DotK = 'full' | 'half' | 'none';
/** Amber filled: holds up strongly; amber half: partly; grey ring: not shown. */
export const Dot: React.FC<{x: number; y: number; k: DotK; r?: number; o?: number; grey?: number}> = ({x, y, k, r = 13, o = 1, grey = 0}) => {
	if (o <= 0.01) return null;
	const col = grey > 0.5 ? '#c7b48a' : AMBER;
	if (k === 'none') return <circle cx={x} cy={y} r={r} fill="none" stroke={GREYT} strokeWidth={3} opacity={o} />;
	return (
		<g opacity={o}>
			<circle cx={x} cy={y} r={r} fill={k === 'full' ? col : CARD} stroke={col} strokeWidth={3} />
			{k === 'half' ? <path d={`M${x},${y - r} A${r},${r} 0 0 0 ${x},${y + r} Z`} fill={col} /> : null}
		</g>
	);
};

// ---------- test icons ----------
export type TestK = 0 | 1 | 2;
export const TESTS = ['Better than what?', 'Shown how?', 'Who gets it?'];
/** 0: two-pan outline (compared with what?); 1: magnifier (evidence); 2: a group of small dots (recipients). */
export const TestIcon: React.FC<{k: TestK; x: number; y: number; s?: number; o?: number; color?: string}> = ({k, x, y, s = 1, o = 1, color = INK_SOFT}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`} fill="none" stroke={color} strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round">
		{k === 0 ? <><path d="M0,-20 L0,20 M-12,20 L12,20 M-24,-12 L24,-12" /><path d="M-24,-12 L-33,6 L-15,6 Z M24,-12 L15,6 L33,6 Z" /></> : null}
		{k === 1 ? <><circle cx={-5} cy={-5} r={14} /><path d="M6,6 L22,22" strokeWidth={6} /></> : null}
		{k === 2 ? [[-14, -8], [0, -12], [14, -8], [-8, 6], [8, 6], [0, 18]].map(([dx, dy], i) => <circle key={i} cx={dx} cy={dy} r={5.5} fill={i === 5 ? AMBER : CARD} />) : null}
	</g>
));

// ---------- the column card (one case, three tests) ----------
export type Cell = {text: string; k: DotK; at: number; more?: {text: string; at: number}};
export const COL = {x: 1250, y: 210, w: 600};
const CELL_Y0 = 112, CELL_H = 196;
export const cellY = (r: number, y = COL.y) => y + CELL_Y0 + r * CELL_H;
const chipLines = (text: string, w: number, size: number) => {
	const words = text.split(' ');
	const out: string[] = [];
	let cur = '';
	for (const wd of words) {
		const t = cur ? cur + ' ' + wd : wd;
		if (tw(t, size, true) > w && cur) { out.push(cur); cur = wd; } else cur = t;
	}
	if (cur) out.push(cur);
	return out;
};
/**
 * A case column: header (plate thumbnail + title), three test rows with icons and labels, each cell's chip writing on
 * at its cue with its dot; a filled cell dims when the next one lands; `dimAll` greys the column; `pulseRow` glows a
 * row label at a frame. `cells[r]` may be undefined (empty).
 */
export const ColumnCard: React.FC<{title: string; sub?: string; plate?: PB; plateW?: number; cells: (Cell | undefined)[]; at: number; out?: number; dimAll?: number; x?: number; y?: number; w?: number; pulseRow?: {r: number; at: number}; emptyNote?: {r: number; text: string; at: number}; noLabels?: boolean; titleColor?: string}> = ({title, sub, plate, plateW = 70, cells, at, out, dimAll, x = COL.x, y = COL.y, w = COL.w, pulseRow, emptyNote, noLabels = false, titleColor}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.01) return null;
	const dimK = dimAll === undefined ? 0 : prog(f, dimAll, 16);
	const lift = (1 - smooth(prog(f, at, 16))) * 30;
	const h = CELL_Y0 + 3 * CELL_H + 10;
	const landed = cells.map(c => (c ? f >= c.at : false));
	return (
		<g opacity={o} transform={`translate(${lift},0)`}>
			<rect x={x} y={y} width={w} height={h} rx={22} fill={CARD} stroke={dimK > 0.5 ? EDGE : AMBER} strokeWidth={dimK > 0.5 ? 2.5 : 3.5} />
			{plate ? <Pl p={plate} cx={x + 30 + plateW / 2} cy={y + 56} w={plateW} dim={dimK} /> : null}
			<Sx x={x + (plate ? 50 + plateW : 30)} y={y + (sub ? 56 : 70)} text={title} size={44} color={dimK > 0.5 ? GREY_INK : titleColor ?? INK} hand weight={700} />
			{sub ? <Sx x={x + (plate ? 50 + plateW : 30)} y={y + 90} text={sub} size={22} color={GREY_INK} weight={600} /> : null}
			{[0, 1, 2].map(r => {
				const cy = y + CELL_Y0 + r * CELL_H;
				const c = cells[r];
				const pr = pulseRow && pulseRow.r === r ? Math.max(0, Math.sin(clamp01((f - pulseRow.at) / 40) * Math.PI)) : 0;
				const nextLanded = landed.slice(r + 1).some(Boolean);
				const cDim = Math.max(dimK, c ? prog(f, Math.min(...cells.slice(r + 1).filter((q): q is Cell => !!q).map(q => q.at), 1e9), 12) : 0);
				const co = c ? prog(f, c.at, 12) : 0;
				const base = c ? chipLines(c.text, w - 130, 32) : [];
				const extra = c?.more ? chipLines(c.more.text, w - 130, 32) : [];
				const lines = [...base, ...extra];
				const lineO = (i: number) => (i < base.length || !c?.more ? 1 : prog(f, c.more.at, 12));
				return (
					<g key={r}>
						<line x1={x + 20} x2={x + w - 20} y1={cy - 8} y2={cy - 8} stroke={EDGE} strokeWidth={2} />
						{pr > 0.01 ? <rect x={x + 12} y={cy} width={w - 24} height={44} rx={12} fill="#f6d77a" opacity={0.7 * pr} /> : null}
						{noLabels ? null : <TestIcon k={r as TestK} x={x + 44} y={cy + 22} s={0.7} />}
						{noLabels ? null : <Sx x={x + 76} y={cy + 32} text={TESTS[r]} size={24} color={GREY_INK} weight={700} />}
						{c && co > 0.01 ? (
							<g opacity={co * (1 - 0.55 * cDim)}>
								<rect x={x + 22} y={cy + 50} width={w - 44} height={lines.length * 40 + 24} rx={16} fill={cDim > 0.5 ? '#f3f2ee' : '#fff8e6'} stroke={cDim > 0.5 ? EDGE : AMBER} strokeWidth={2.5} />
								{lines.map((t, i) => <Sx key={i} x={x + 46} y={cy + 84 + i * 40} text={t} size={32} color={cDim > 0.5 ? GREY_INK : INK} hand weight={700} at={-100} opacity={lineO(i)} />)}
								<Dot x={x + w - 52} y={cy + 50 + (lines.length * 40 + 24) / 2} k={c.k} r={15} grey={cDim} />
							</g>
						) : null}
						{!c && emptyNote && emptyNote.r === r ? <GTag x={x + 30} y={cy + 56} text={emptyNote.text} at={emptyNote.at} size={22} /> : null}
						{void nextLanded}
					</g>
				);
			})}
		</g>
	);
};

// ---------- the mini board (top-right corner) ----------
export const MINI_COLS = ['farm', 'medicine', 'hormone', 'industry'];
export type MiniCell = {c: number; r: number; k: DotK; at: number};
/** The whole board in miniature: four columns of three dots. `active` column glows. */
export const MiniBoard: React.FC<{cells: MiniCell[]; active?: number; o?: number; x?: number; y?: number}> = ({cells, active = -1, o = 1, x = 1500, y = 34}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const cw = 86, rh = 32;
	return (
		<g opacity={o}>
			<rect x={x - 8} y={y - 4} width={4 * cw + 16} height={150} rx={14} fill={CARD} stroke={EDGE} strokeWidth={2} />
			{MINI_COLS.map((t, c) => (
				<g key={t}>
					{c === active ? <rect x={x + c * cw} y={y + 2} width={cw - 4} height={138} rx={10} fill="#fff3d9" stroke={AMBER} strokeWidth={2} /> : null}
					<Sx x={x + c * cw + cw / 2 - 2} y={y + 28} text={t} size={17} color={c === active ? INK : GREY_INK} weight={700} anchor="middle" />
					{[0, 1, 2].map(r => <circle key={r} cx={x + c * cw + cw / 2 - 2} cy={y + 50 + r * rh} r={9} fill="none" stroke="#dedad2" strokeWidth={2} />)}
				</g>
			))}
			{cells.map((m, i) => <Dot key={i} x={x + m.c * cw + cw / 2 - 2} y={y + 50 + m.r * rh} k={m.k} r={9} o={prog(f, m.at, 10)} />)}
		</g>
	);
};
/** Cells settled by the end of each case scene (for the mini board in later scenes). */
export const DONE = {
	farm: [{c: 0, r: 0, k: 'full'}, {c: 0, r: 1, k: 'full'}, {c: 0, r: 2, k: 'full'}] as MiniCell[],
	medicine: [{c: 1, r: 0, k: 'half'}, {c: 1, r: 1, k: 'full'}, {c: 1, r: 2, k: 'half'}] as MiniCell[],
	hormone: [{c: 2, r: 0, k: 'full'}, {c: 2, r: 1, k: 'full'}] as MiniCell[],
	industry: [{c: 3, r: 0, k: 'full'}, {c: 3, r: 1, k: 'full'}, {c: 3, r: 2, k: 'full'}] as MiniCell[],
};
export const past = (cells: MiniCell[]) => cells.map(c => ({...c, at: -100}));

// ---------- small glyphs ----------
/** A tiny coded tree (trunk and crown). */
export const TreeIcon: React.FC<{x: number; y: number; s?: number; o?: number; sick?: number}> = ({x, y, s = 1, o = 1, sick = 0}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<rect x={-4} y={-6} width={8} height={40} rx={3} fill="#b59a72" stroke="#7d6646" strokeWidth={2} />
		{[-24, -8, 8, 24].map((dx, i) => <ellipse key={i} cx={dx * 0.9} cy={-14 - (i % 2) * 6} rx={16} ry={9} transform={`rotate(${dx} ${dx * 0.9} ${-14 - (i % 2) * 6})`} fill={sick > 0.5 ? '#d9d29a' : '#9cc47a'} stroke={sick > 0.5 ? '#9a8f4a' : LEAF} strokeWidth={2} />)}
	</g>
));
/** A small vial glyph (coded) for access or product icons. */
export const VialG: React.FC<{x: number; y: number; s?: number; o?: number; grey?: boolean}> = ({x, y, s = 1, o = 1, grey = false}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<rect x={-9} y={-24} width={18} height={8} rx={2} fill={grey ? '#c9cdd1' : '#9aa3ab'} />
		<rect x={-12} y={-16} width={24} height={36} rx={6} fill={grey ? '#f1f1ef' : '#eef6fb'} stroke={grey ? GREYT : '#7d93a6'} strokeWidth={2.5} />
		<rect x={-9} y={2} width={18} height={14} rx={3} fill={grey ? '#dfe1e3' : '#cfe3f0'} />
	</g>
));
/** A world outline glyph (grey). */
export const WorldG: React.FC<{x: number; y: number; r?: number; o?: number}> = ({x, y, r = 40, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} fill="none" stroke={GREYT} strokeWidth={2.5}>
		<circle cx={x} cy={y} r={r} fill={CARD} />
		<ellipse cx={x} cy={y} rx={r * 0.45} ry={r} />
		<path d={`M${x - r},${y} L${x + r},${y} M${x - r * 0.87},${y - r * 0.5} L${x + r * 0.87},${y - r * 0.5} M${x - r * 0.87},${y + r * 0.5} L${x + r * 0.87},${y + r * 0.5}`} />
	</g>
));
/** A pollen dot. */
export const Pollen: React.FC<{x: number; y: number; o?: number}> = ({x, y, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}><circle cx={x} cy={y} r={7} fill="#f2d57a" stroke="#b48d2a" strokeWidth={2} /></g>
));

// ---------- the papaya gene strips ----------
/** A thin terracotta viral RNA strip (x..x+w) with one amber stretch (a0..a1 as fractions); `draw` 0..1. */
export const ViralStrip: React.FC<{x: number; y: number; w: number; a0?: number; a1?: number; draw?: number; o?: number; amberO?: number}> = ({x, y, w, a0 = 0.62, a1 = 0.74, draw = 1, o = 1, amberO = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<path d={`M${x},${y} ${Array.from({length: 24}, (_, i) => `Q${x + (w * (i + 0.5)) / 24},${y + (i % 2 ? 7 : -7)} ${x + (w * (i + 1)) / 24},${y}`).join(' ')}`} fill="none" stroke={TERRA} strokeWidth={5} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - clamp01(draw)} />
		<rect x={x + w * a0} y={y - 9} width={w * (a1 - a0)} height={18} rx={8} fill={AMBER} opacity={amberO * clamp01(draw * 1.4 - 0.4)} />
	</g>
));
/** A short double-strand DNA piece (plant DNA) with an amber insert in the middle. */
export const PlantDna: React.FC<{x: number; y: number; w: number; ins?: number; o?: number}> = ({x, y, w, ins = 0, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<line x1={x} y1={y} x2={x + w} y2={y} stroke="#6f8a4a" strokeWidth={5} strokeLinecap="round" />
		<line x1={x} y1={y + 26} x2={x + w} y2={y + 26} stroke="#6f8a4a" strokeWidth={5} strokeLinecap="round" />
		{Array.from({length: Math.floor(w / 22)}, (_, i) => <line key={i} x1={x + 11 + i * 22} y1={y + 4} x2={x + 11 + i * 22} y2={y + 22} stroke="#a9bf8c" strokeWidth={3} />)}
		<rect x={x + w * 0.4} y={y - 7} width={w * 0.2} height={40} rx={8} fill={AMBER} opacity={ins} />
	</g>
));

// ---------- harvest bars ----------
/** Three harvest bars (first full, second about half, third about three quarters), each with its own grow frame. */
export const HarvestBars: React.FC<{x: number; y: number; h: number; grow: [number, number, number]; labels: [string, string, string]; o?: number}> = ({x, y, h, grow, labels, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const vals = [1, 0.49, 0.75];
	const bw = 110, gap = 60;
	return (
		<g opacity={o}>
			<line x1={x - 20} x2={x + 3 * bw + 2 * gap + 20} y1={y} y2={y} stroke={INK_SOFT} strokeWidth={3} />
			{vals.map((v, i) => {
				const p = smooth(prog(f, grow[i], 20));
				if (p <= 0.001) return null;
				const bx = x + i * (bw + gap);
				const hh = h * v * p;
				return (
					<g key={i}>
						<rect x={bx} y={y - hh} width={bw} height={hh} rx={8} fill={i === 2 ? AMBER : i === 1 ? '#d9cfae' : '#b7c99a'} stroke={i === 2 ? AMBER_INK : INK_SOFT} strokeWidth={2.5} />
						<Sx x={bx + bw / 2} y={y + 34} text={labels[i]} size={24} color={GREY_INK} weight={700} anchor="middle" at={grow[i]} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- insulin bead strips ----------
/** A short amino acid bead strip; `ring` indices get an amber ring (`ringO`). */
export const BeadStrip: React.FC<{x: number; y: number; n?: number; ring?: number[]; ringO?: number; o?: number; draw?: number; label?: string; fill?: string}> = ({x, y, n = 12, ring = [], ringO = 1, o = 1, draw = 1, label, fill = '#e8b48a'}) => {
	if (o <= 0.01) return null;
	const d = 38;
	const shown = Math.ceil(n * clamp01(draw));
	return (
		<g opacity={o}>
			{label ? <Sx x={x - 20} y={y + 9} text={label} size={26} color={GREY_INK} weight={700} anchor="end" /> : null}
			<line x1={x} y1={y} x2={x + (shown - 1) * d} y2={y} stroke={INK_SOFT} strokeWidth={2.5} />
			{Array.from({length: shown}, (_, i) => <circle key={i} cx={x + i * d} cy={y} r={14} fill={ring.includes(i) ? '#f6c35a' : fill} stroke="#a8704a" strokeWidth={2} />)}
			{ring.map(i => (i < shown ? <circle key={'r' + i} cx={x + i * d} cy={y} r={22} fill="none" stroke={AMBER} strokeWidth={4} opacity={ringO} /> : null))}
		</g>
	);
};

// ---------- trial bars ----------
export const TrialBars: React.FC<{x: number; y: number; w: number; p: number; o?: number; bracket?: number}> = ({x, y, w, p, o = 1, bracket = 0}) => {
	if (o <= 0.01) return null;
	const v = 0.82 * smooth(p);
	const bh = 54;
	return (
		<g opacity={o}>
			<Sx x={x} y={y - 18} text="blood sugar control" size={24} color={GREY_INK} weight={700} />
			{[0, 1].map(i => (
				<g key={i}>
					<rect x={x} y={y + i * 90} width={w} height={bh} rx={10} fill="#f3f2ee" stroke={EDGE} strokeWidth={2} />
					<rect x={x} y={y + i * 90} width={w * v * (i === 1 ? 0.98 : 1)} height={bh} rx={10} fill={i === 0 ? '#e8b48a' : '#d9b88f'} />
					<Sx x={x + 18} y={y + i * 90 + 37} text={i === 0 ? 'human insulin' : 'purified pig insulin'} size={28} color={INK} weight={700} />
				</g>
			))}
			{bracket > 0.01 ? (
				<g opacity={bracket}>
					<path d={`M${x + w * 0.8 + 6},${y - 6} L${x + w * 0.8 + 22},${y - 6} L${x + w * 0.8 + 22},${y + 90 + bh + 6} L${x + w * 0.8 + 6},${y + 90 + bh + 6}`} fill="none" stroke={AMBER_INK} strokeWidth={4} />
				</g>
			) : null}
		</g>
	);
};

// ---------- supply line ----------
/** A supply line from a to b: `thick` 0..1 (thin dashed to thick solid), `gaps` dashes missing, `warn` turns one
 *  dash grey-red with a warning ring, `amber` 0..1 tints it. */
export const SupplyLine: React.FC<{a: [number, number]; b: [number, number]; draw: number; thick?: number; gaps?: number; warn?: number; amber?: number; o?: number}> = ({a, b, draw, thick = 0, gaps = 0, warn = 0, amber = 0, o = 1}) => {
	if (o <= 0.01 || draw <= 0.01) return null;
	const n = 12;
	const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
	const ux = (b[0] - a[0]) / L, uy = (b[1] - a[1]) / L;
	const segL = L / n;
	const t = smooth(thick);
	const col = amber > 0.5 ? AMBER : '#9aa3ab';
	const missing = new Set(gaps > 0.5 ? [2, 5, 9] : []);
	const segs = Array.from({length: Math.ceil(n * clamp01(draw))}, (_, i) => i);
	return (
		<g opacity={o}>
			{t > 0.02 ? <line x1={a[0]} y1={a[1]} x2={a[0] + ux * L * clamp01(draw)} y2={a[1] + uy * L * clamp01(draw)} stroke={col} strokeWidth={4 + 14 * t} strokeLinecap="round" opacity={t} /> : null}
			{segs.map(i => {
				if (missing.has(i) && t < 0.5) return null;
				const x0 = a[0] + ux * (i * segL + 4), y0 = a[1] + uy * (i * segL + 4);
				const x1 = a[0] + ux * ((i + 1) * segL - 8), y1 = a[1] + uy * ((i + 1) * segL - 8);
				const w = i === 7 && warn > 0.01 && t < 0.5;
				return <line key={i} x1={x0} y1={y0} x2={x1} y2={y1} stroke={w ? RED_GREY : col} strokeWidth={5} strokeLinecap="round" opacity={1 - t} />;
			})}
			{warn > 0.01 && t < 0.5 ? <circle cx={a[0] + ux * 7.5 * segL} cy={a[1] + uy * 7.5 * segL} r={24} fill="none" stroke={RED_GREY} strokeWidth={3.5} opacity={warn * (1 - t)} /> : null}
		</g>
	);
};

// ---------- enzyme glyphs ----------
/** A coded enzyme blob with a notch; `alt` gives the slightly different (fungal) shape. */
export const EnzymeG: React.FC<{x: number; y: number; s?: number; o?: number; alt?: boolean; grey?: boolean}> = ({x, y, s = 1, o = 1, alt = false, grey = false}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<path d={alt ? 'M-40,-6 C-44,-34 -6,-40 14,-30 C34,-22 46,-2 38,16 C30,36 -6,40 -26,28 L-10,10 L-24,-2 Z' : 'M-38,-10 C-40,-34 -8,-38 12,-32 C34,-26 42,-6 36,14 C30,34 -4,38 -26,28 L-8,8 L-28,0 Z'} fill={grey ? '#e3e1dc' : '#cfe0c4'} stroke={grey ? GREYT : '#5e8a5a'} strokeWidth={3} strokeLinejoin="round" />
	</g>
));

// ---------- the sealed tank outline ----------
/** A sealed outline round the fermenter with microbe dots swirling inside. */
export const SealedTank: React.FC<{cx: number; cy: number; w: number; h: number; o?: number; dots?: number}> = ({cx, cy, w, h, o = 1, dots = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<rect x={cx - w / 2} y={cy - h / 2} width={w} height={h} rx={28} fill="none" stroke={INK_SOFT} strokeWidth={4} />
			{Array.from({length: 9}, (_, i) => {
				const a = (f / 30) * 1.4 + (i * Math.PI * 2) / 9;
				const r = 26 + (i % 3) * 14;
				return <ellipse key={i} cx={cx + Math.cos(a) * r} cy={cy + 30 + Math.sin(a) * r * 0.6} rx={9} ry={5} transform={`rotate(${(a * 180) / Math.PI} ${cx + Math.cos(a) * r} ${cy + 30 + Math.sin(a) * r * 0.6})`} fill="#cfe3b8" stroke="#5e8a3a" strokeWidth={2} opacity={dots} />;
			})}
		</g>
	);
};
export const useF = () => useCurrentFrame();
void lerp; void GreyCross; void Tg; void plH; void InsectG; void MiniLevels; void RefugeStrip; void PLATES; void DrawPath; void scribbleEllipse;
