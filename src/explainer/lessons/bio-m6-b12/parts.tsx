// M6 B12 drawing parts: the levels board (three rows, top to bottom ecosystem, species, genetic, each with a grey
// label and a small zoom icon; case columns for the crop and the conservation case, a baseline chip per column and a
// mark cell per row: an up arrow, a down arrow or a grey "?", each with a short caption and a "vs ..." line), the
// habitat patches, gene-pool rings (b08's shape-marked kinds), the coded sprayed field, spray drift, the landscape
// strip, the bottleneck outline and the balance glyph. B01, B07, B08, B09, B10 and B11 parts are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {Sx} from '../bio-m5-b13/shared';
import {BIO_INK, CARD, EDGE, GREYT, GREY_INK, SlimStrand, clamp01, lerp, smooth, vis} from '../bio-m6-b01/parts';
import {HalfPlate, platePt, tw} from '../bio-m6-b07/parts';
import {Rg} from '../bio-m6-b08/parts';
import type {RK} from '../bio-m6-b08/parts';
import {Pl, Strip, plH} from '../bio-m6-b09/parts';
import {Embryos} from '../bio-m6-b10/parts';
import {Arr, MarkText, Pill, pillW} from '../bio-m6-b11/parts';
import {BANANA_SPLIT, FIELD_SPLIT, PLATES} from './assets';

export {AMBER, AMBER_INK, INK, INK_SOFT, BIO_INK, CARD, EDGE, GREYT, GREY_INK, SlimStrand, clamp01, lerp, smooth, vis, prog, DrawPath, Pl, Strip, plH, HalfPlate, platePt, tw, Rg, Embryos, Arr, MarkText, Pill, pillW, PLATES};
export type {RK};
export const GREEN = '#2f8a5b', RED = '#b5483a';

// ---------- plate halves ----------
export const BananaHalf: React.FC<{side: 'L' | 'R'; cx: number; cy: number; w: number; o?: number; id: string}> = ({side, cx, cy, w, o = 1, id}) => (
	<HalfPlate p={PLATES.banana} cx={cx} cy={cy} w={w} side={side} split={BANANA_SPLIT} o={o} id={id} />
);
/** One half of the field plate (L = monoculture, R = mixed planting), placed so that half is centred at (x, y). */
export const FieldHalf: React.FC<{side: 'L' | 'R'; x: number; y: number; w: number; o?: number; id: string}> = ({side, x, y, w, o = 1, id}) => {
	const p = PLATES.field;
	const k = w / (p.box[2] - p.box[0]);
	const mid = side === 'L' ? (p.box[0] + FIELD_SPLIT) / 2 : (FIELD_SPLIT + p.box[2]) / 2;
	const cx = x - (mid - (p.box[0] + p.box[2]) / 2) * k;
	return <HalfPlate p={p} cx={cx} cy={y} w={w} side={side} split={FIELD_SPLIT} o={o} id={id} />;
};
export const fieldHalfW = (w: number) => w / 2;

// ---------- board geometry ----------
export const ROWS = [{key: 'ecosystem', y0: 320}, {key: 'species', y0: 490}, {key: 'genetic', y0: 660}];
export const ROW_H = 160;
export const rowC = (r: number) => ROWS[r].y0 + ROW_H / 2;
export const LBL = {x0: 100, x1: 360};
export const CROP = {x0: 380, x1: 1000, a: 380, b: 695, w: 305};
export const CONS = {x0: 1020, x1: 1460};
export const PANEL = {x0: 1490, x1: 1820};
export const GLOSS = ['habitats across a region', 'species in an area', 'alleles in a gene pool'];

/** Three habitat patches (grassland, woodland, wetland); `lit` brightens the grassland. */
export const Habitats: React.FC<{x: number; y: number; s?: number; o?: number; lit?: number}> = ({x, y, s = 1, o = 1, lit = 0}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<rect x={-150} y={-34} width={92} height={68} rx={12} fill={lit > 0.5 ? '#f3e7b0' : '#efe9c9'} stroke={lit > 0.5 ? AMBER : '#b7a65f'} strokeWidth={3} />
		{[-136, -118, -100, -82].map(dx => <path key={dx} d={`M${dx},18 l4,-16 M${dx + 6},18 l0,-18 M${dx + 12},18 l-4,-16`} stroke="#8a9a44" strokeWidth={2.5} fill="none" strokeLinecap="round" />)}
		<rect x={-46} y={-34} width={92} height={68} rx={12} fill="#dfeedd" stroke="#5f8a5a" strokeWidth={3} />
		{[[-24, -6], [0, 6], [22, -8], [-10, 16], [14, 18]].map(([dx, dy], i) => <circle key={i} cx={dx} cy={dy} r={11} fill="#7fae74" stroke="#4f7a4a" strokeWidth={2} />)}
		<rect x={58} y={-34} width={92} height={68} rx={12} fill="#dcebf3" stroke="#5b8fae" strokeWidth={3} />
		{[-12, 4, 18].map(dy => <path key={dy} d={`M72,${dy} q8,-6 16,0 t16,0 t16,0 t16,0`} stroke="#5b8fae" strokeWidth={2.5} fill="none" />)}
	</g>
));
/** Four species icons (painted plates): a bee, a finch, a snapdragon and a lizard. */
export const SpeciesRow: React.FC<{x: number; y: number; gap?: number; w?: number; o?: number}> = ({x, y, gap = 70, w = 60, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<Pl p={PLATES.bee} cx={x} cy={y} w={w * 0.9} />
		<Pl p={PLATES.finch} cx={x + gap} cy={y} w={w * 0.85} />
		<Pl p={PLATES.snap} cx={x + gap * 2} cy={y} w={w * 0.45} />
		<Pl p={PLATES.lizard} cx={x + gap * 3} cy={y} w={w * 1.05} />
	</g>
));
/** A row of allele rings (a gene pool sample). */
export const RingRow: React.FC<{x: number; y: number; kinds: RK[]; gap?: number; r?: number; o?: number}> = ({x, y, kinds, gap = 36, r = 12, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>{kinds.map((k, i) => <Rg key={i} x={x + i * gap} y={y} r={r} k={k} />)}</g>
));
const MIX: RK[] = ['A', 'B', 'C', 'D', 'flow'];

/** The levels board. `rows[r]` 0..1 draws row r; `wide` 1 spans the full width with big icons at the right (scene
 * 2), 0 the board width with small icons under the labels; `lit[r]` brightens a row; `glossO[r]` shows its gloss. */
export const Board: React.FC<{rows?: number[]; wide?: number; lit?: number[]; glossO?: number[]; glossLit?: number[]; o?: number; ecoLit?: number; x1?: number}> = ({rows = [1, 1, 1], wide = 0, lit = [0, 0, 0], glossO = [0, 0, 0], glossLit = [0, 0, 0], o = 1, ecoLit = 0, x1: X1}) => {
	if (o <= 0.01) return null;
	const x1 = X1 ?? (wide > 0.5 ? 1820 : CONS.x1);
	return (
		<g opacity={o}>
			{ROWS.map((row, r) => {
				const a = clamp01(rows[r]);
				if (a <= 0.01) return null;
				const L = clamp01(lit[r]);
				const yc = rowC(r);
				return (
					<g key={r} opacity={a}>
						<rect x={LBL.x0} y={row.y0} width={x1 - LBL.x0} height={ROW_H - 8} rx={18} fill={L > 0.5 ? '#fffaf0' : CARD} stroke={L > 0.5 ? AMBER : EDGE} strokeWidth={L > 0.5 ? 3.5 : 2.5} />
						<Sx x={LBL.x0 + 24} y={row.y0 + 46} text={row.key} size={wide > 0.5 ? 46 : 36} color={L > 0.5 ? INK : GREY_INK} weight={800} />
						{wide > 0.5 ? (
							<g>
								{r === 0 ? <Habitats x={1550} y={yc - 4} s={1.35} lit={ecoLit} /> : null}
								{r === 1 ? <SpeciesRow x={1360} y={yc - 4} gap={120} w={100} /> : null}
								{r === 2 ? <RingRow x={1350} y={yc - 4} kinds={MIX} gap={96} r={22} /> : null}
								{glossO[r] > 0.01 ? <Sx x={560} y={yc + 14} text={GLOSS[r]} size={40} color={glossLit[r] > 0.5 ? INK : GREY_INK} hand opacity={glossO[r]} /> : null}
							</g>
						) : (
							<g>
								{r === 0 ? <Habitats x={LBL.x0 + 154} y={yc + 34} s={0.72} lit={ecoLit} /> : null}
								{r === 1 ? <SpeciesRow x={LBL.x0 + 52} y={yc + 34} gap={52} w={46} /> : null}
								{r === 2 ? <RingRow x={LBL.x0 + 44} y={yc + 34} kinds={MIX} gap={40} r={12} /> : null}
							</g>
						)}
					</g>
				);
			})}
		</g>
	);
};
/** Column title and its baseline chip ("compared with: ..."); `flash` adds an amber halo. */
export const ColHead: React.FC<{x0: number; x1: number; title: string; base?: string; o?: number; baseO?: number; lit?: number; flash?: number}> = ({x0, x1, title, base, o = 1, baseO = 1, lit = 1, flash = 0}) => {
	if (o <= 0.01) return null;
	const cx = (x0 + x1) / 2;
	const t = base ? `compared with: ${base}` : 'compared with: ...';
	const w = Math.min(x1 - x0, tw(t, 24, true) + 40);
	return (
		<g opacity={o}>
			<Sx x={cx} y={232} text={title} size={36} color={lit > 0.5 ? INK : GREY_INK} weight={800} anchor="middle" />
			<g opacity={baseO}>
				{flash > 0.01 ? <rect x={cx - w / 2 - 8} y={246} width={w + 16} height={58} rx={29} fill={AMBER} opacity={0.25 * flash} /> : null}
				<rect x={cx - w / 2} y={252} width={w} height={46} rx={23} fill={base ? '#fff6e3' : CARD} stroke={base ? AMBER : GREYT} strokeWidth={2.5} strokeDasharray={base ? undefined : '8 6'} />
				<Sx x={cx} y={284} text={t} size={24} color={base ? INK : GREY_INK} hand anchor="middle" />
			</g>
		</g>
	);
};

// ---------- mark cells ----------
export type MK = 'up' | 'down' | 'q';
/** A mark glyph: an up or down arrow (shape carries the meaning, colour helps) or a grey "?". */
export const MarkGlyph: React.FC<{x: number; y: number; kind: MK; o?: number; s?: number}> = ({x, y, kind, o = 1, s = 1}) => {
	if (o <= 0.01) return null;
	if (kind === 'q') return <Sx x={x} y={y + 20 * s} text="?" size={64 * s} color={GREY_INK} weight={800} anchor="middle" opacity={o} />;
	const up = kind === 'up';
	const c = up ? GREEN : RED;
	const d = up ? -1 : 1;
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
			<line x1={0} y1={-d * 26} x2={0} y2={d * 24} stroke={c} strokeWidth={9} strokeLinecap="round" />
			<path d={`M-18,${d * 6} L0,${d * 28} L18,${d * 6}`} fill="none" stroke={c} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />
		</g>
	);
};
/** A mark cell: glyph at the left, caption lines, an optional grey "vs ..." line. `lit` 0 greys the text. */
export const Cell: React.FC<{x: number; r: number; kind: MK; lines: string[]; vs?: string; o?: number; lit?: number; size?: number; glow?: number}> = ({x, r, kind, lines, vs, o = 1, lit = 1, size = 24, glow = 0}) => {
	if (o <= 0.01) return null;
	const yc = rowC(r) - 4;
	const L = clamp01(lit);
	const n = lines.length + (vs ? 1 : 0);
	const y0 = yc - ((n - 1) * size * 1.18) / 2 + size * 0.36;
	return (
		<g opacity={o}>
			{glow > 0.01 ? <circle cx={x + 36} cy={yc} r={44} fill={AMBER} opacity={0.28 * glow} /> : null}
			<MarkGlyph x={x + 36} y={yc} kind={kind} o={0.5 + 0.5 * L} />
			{lines.map((t, i) => <Sx key={i} x={x + 76} y={y0 + i * size * 1.18} text={t} size={size} color={L > 0.5 ? INK : GREY_INK} hand />)}
			{vs ? <Sx x={x + 76} y={y0 + lines.length * size * 1.18} text={vs} size={size * 0.92} color={GREY_INK} hand /> : null}
		</g>
	);
};

// ---------- small coded pieces ----------
/** A coded field outline with crop rows (the sprayed conventional field). */
export const PlainField: React.FC<{x: number; y: number; w: number; h: number; o?: number}> = ({x, y, w, h, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<path d={`M${x + 30},${y} L${x + w - 30},${y} L${x + w},${y + h} L${x},${y + h} Z`} fill="#efe6cf" stroke="#a39a6a" strokeWidth={3} strokeLinejoin="round" />
		{Array.from({length: 7}, (_, k) => {
			const t = (k + 0.5) / 7;
			return <line key={k} x1={x + 30 + t * (w - 60)} y1={y + 8} x2={x + t * w} y2={y + h - 8} stroke="#7c9a5a" strokeWidth={4} strokeLinecap="round" strokeDasharray="10 8" />;
		})}
	</g>
));
/** A spray can (coded outline). */
export const SprayCan: React.FC<{x: number; y: number; o?: number; s?: number}> = ({x, y, o = 1, s = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`} fill="none" stroke={INK_SOFT} strokeWidth={3.5} strokeLinejoin="round">
		<rect x={-14} y={-14} width={28} height={42} rx={6} fill="#f1ede4" />
		<rect x={-7} y={-24} width={14} height={10} />
		<line x1={7} y1={-20} x2={16} y2={-20} />
		{[[24, -28], [28, -20], [24, -12], [32, -26], [32, -14]].map(([dx, dy], i) => <circle key={i} cx={dx} cy={dy} r={1.8} fill={INK_SOFT} stroke="none" />)}
	</g>
));
/** A drift of spray droplets sweeping left to right across [x0, x1] at `t` 0..1. */
export const SprayDrift: React.FC<{x0: number; x1: number; y: number; t: number; o?: number; h?: number}> = ({x0, x1, y, t, o = 1, h = 120}) => {
	if (o <= 0.01 || t <= 0 || t >= 1.2) return null;
	const front = lerp(x0, x1, clamp01(t));
	return (
		<g opacity={o * (1 - clamp01((t - 1) * 5))}>
			{Array.from({length: 36}, (_, i) => {
				const u = (i * 0.618) % 1, v = (i * 0.37) % 1;
				const x = front - u * 220;
				if (x < x0 || x > x1) return null;
				return <circle key={i} cx={x} cy={y - h / 2 + v * h} r={3.5} fill="#9db7c9" opacity={0.75} />;
			})}
		</g>
	);
};
/** A landscape block: a farm block (rows) or a bush block (trees) that can clear (`clear` 0..1). */
export const LandBlock: React.FC<{x: number; y: number; w: number; h: number; kind: 'farm' | 'bush'; clear?: number; o?: number; crop?: 'rows' | 'dots'}> = ({x, y, w, h, kind, clear = 0, o = 1, crop = 'rows'}) => {
	if (o <= 0.01) return null;
	const c = clamp01(clear);
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} rx={12} fill={kind === 'farm' ? '#f3e7b0' : lerp(0, 1, c) > 0.5 ? '#e9dfc8' : '#dfeedd'} stroke={kind === 'farm' ? '#b7a65f' : '#5f8a5a'} strokeWidth={3} />
			{kind === 'farm' && crop === 'rows' ? Array.from({length: 6}, (_, k) => <line key={k} x1={x + 14 + (k * (w - 28)) / 5} y1={y + 10} x2={x + 14 + (k * (w - 28)) / 5} y2={y + h - 10} stroke="#9aa04a" strokeWidth={3.5} strokeDasharray="8 6" />) : null}
			{kind === 'farm' && crop === 'dots' ? Array.from({length: 15}, (_, k) => <circle key={k} cx={x + 20 + (k % 5) * ((w - 40) / 4)} cy={y + 18 + Math.floor(k / 5) * ((h - 36) / 2)} r={6} fill="#c2a04a" />) : null}
			{kind === 'bush' ? Array.from({length: 9}, (_, k) => {
				const tx = x + 22 + (k % 3) * ((w - 44) / 2) + (Math.floor(k / 3) % 2) * 12, ty = y + 22 + Math.floor(k / 3) * ((h - 44) / 2);
				const kk = clamp01(c * 1.6 - k * 0.07);
				return <circle key={k} cx={tx} cy={ty} r={14 * (1 - kk)} fill="#7fae74" stroke="#4f7a4a" strokeWidth={2} opacity={1 - kk} />;
			}) : null}
		</g>
	);
};
/** A bottleneck outline: a funnel narrowing to a neck. */
export const Bottleneck: React.FC<{x: number; y: number; w: number; o?: number}> = ({x, y, w, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round">
		<path d={`M${x - w / 2},${y} C${x - w / 2},${y + 40} ${x - 22},${y + 40} ${x - 22},${y + 70} L${x - 22},${y + 96}`} />
		<path d={`M${x + w / 2},${y} C${x + w / 2},${y + 40} ${x + 22},${y + 40} ${x + 22},${y + 70} L${x + 22},${y + 96}`} />
	</g>
));
/** A coded balance (the next video: weighing). */
export const Balance: React.FC<{x: number; y: number; o?: number}> = ({x, y, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round">
		<line x1={x} y1={y - 40} x2={x} y2={y + 34} /><line x1={x - 26} y1={y + 34} x2={x + 26} y2={y + 34} />
		<line x1={x - 52} y1={y - 30} x2={x + 52} y2={y - 38} />
		<path d={`M${x - 52},${y - 30} l-18,34 h36 Z`} fill="#f3eee2" /><path d={`M${x + 52},${y - 38} l-18,34 h36 Z`} fill="#f3eee2" />
	</g>
));
/** A coded female symbol (circle and cross). */
export const FemaleSym: React.FC<{x: number; y: number; o?: number; s?: number}> = ({x, y, o = 1, s = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} fill="none" stroke={BIO_INK} strokeWidth={4} strokeLinecap="round">
		<circle cx={x} cy={y - 8 * s} r={11 * s} /><line x1={x} y1={y + 3 * s} x2={x} y2={y + 20 * s} /><line x1={x - 7 * s} y1={y + 13 * s} x2={x + 7 * s} y2={y + 13 * s} />
	</g>
));
export const useF = () => useCurrentFrame();
void vis; void smooth; void platePt; void Strip; void plH; void Embryos; void Arr; void MarkText; void Pill; void pillW;
