// M6 B12 readable levels board (quality fix, 6 Nov 2026). A lesson-local variant of the parts.tsx board: B13 and B15
// import parts.tsx, so it is left unchanged. Three layouts:
// - 'crop' (scenes 4 and 5): the label column and the crop column only, two wide sub-cells (32 px captions);
// - 'cons' (scene 7): the label column and the conservation column only, one wide cell per row (34 px captions);
// - 'both' (scene 8): both columns with short captions (28 px) and a side panel.
// Row labels are 40 px; column titles 44 px; the baseline chip 30 px.
import React from 'react';
import {AMBER, CARD, EDGE, GREYT, GREY_INK, INK, MarkGlyph, PLATES, Pl, Rg, clamp01, tw} from './parts';
import type {MK, RK} from './parts';
import {Habitats} from './parts';
import {Sx} from '../bio-m5-b13/shared';

export type Mode = 'crop' | 'cons' | 'both';
export const R2 = [{key: 'ecosystem', y0: 320}, {key: 'species', y0: 492}, {key: 'genetic', y0: 664}];
export const RH2 = 168;
export const rc2 = (r: number) => R2[r].y0 + (RH2 - 8) / 2;
export const L2 = {x0: 90, x1: 300};
export const LAY: Record<Mode, {a: number; b: number; cons: number; x1: number; cw: number}> = {
	crop: {a: 310, b: 735, cons: -1, x1: 1160, cw: 425},
	cons: {a: -1, b: -1, cons: 310, x1: 1160, cw: 850},
	both: {a: 310, b: 640, cons: 970, x1: 1360, cw: 330},
};
export const PANEL2 = {x0: 1390, x1: 1850};

/** Small species icons (painted plates) under the "species" label. */
const Species: React.FC<{x: number; y: number}> = ({x, y}) => (
	<g>
		<Pl p={PLATES.bee} cx={x} cy={y} w={48} />
		<Pl p={PLATES.finch} cx={x + 50} cy={y} w={46} />
		<Pl p={PLATES.snap} cx={x + 100} cy={y} w={24} />
		<Pl p={PLATES.lizard} cx={x + 150} cy={y} w={56} />
	</g>
);
const MIX: RK[] = ['A', 'B', 'C', 'D', 'flow'];

/** The readable board: rows (opacity per row), `lit` per row, the label column with icons, frames to `x1`. */
export const BigBoard: React.FC<{mode: Mode; rows?: number[]; lit?: number[]; o?: number; ecoLit?: number; x1?: number}> = ({mode, rows = [1, 1, 1], lit = [0, 0, 0], o = 1, ecoLit = 0, x1: X1}) => {
	if (o <= 0.01) return null;
	const x1 = X1 ?? LAY[mode].x1;
	return (
		<g opacity={o}>
			{R2.map((row, r) => {
				const a = clamp01(rows[r]);
				if (a <= 0.01) return null;
				const L = clamp01(lit[r]);
				return (
					<g key={r} opacity={a}>
						<rect x={L2.x0} y={row.y0} width={x1 - L2.x0} height={RH2 - 8} rx={20} fill={L > 0.5 ? '#fffaf0' : CARD} stroke={L > 0.5 ? AMBER : EDGE} strokeWidth={L > 0.5 ? 4 : 2.5} />
						<line x1={L2.x1} y1={row.y0 + 14} x2={L2.x1} y2={row.y0 + RH2 - 22} stroke={EDGE} strokeWidth={2} />
						<Sx x={L2.x0 + 20} y={row.y0 + 54} text={row.key} size={40} color={L > 0.5 ? INK : GREY_INK} weight={800} />
						{r === 0 ? <Habitats x={L2.x0 + 108} y={row.y0 + 112} s={0.6} lit={ecoLit} /> : null}
						{r === 1 ? <Species x={L2.x0 + 30} y={row.y0 + 112} /> : null}
						{r === 2 ? <g>{MIX.map((k, i) => <Rg key={i} x={L2.x0 + 30 + i * 38} y={row.y0 + 112} r={13} k={k} />)}</g> : null}
					</g>
				);
			})}
		</g>
	);
};

/** Column title and its baseline chip ("compared with: ..."); `flash` adds an amber halo. */
export const BigHead: React.FC<{x0: number; x1: number; title: string; base?: string; o?: number; lit?: number; flash?: number}> = ({x0, x1, title, base, o = 1, lit = 1, flash = 0}) => {
	if (o <= 0.01) return null;
	const cx = (x0 + x1) / 2;
	const t = base ? `compared with: ${base}` : 'compared with: ...';
	const w = Math.min(x1 - x0 - 10, tw(t, 30, true) + 50);
	return (
		<g opacity={o}>
			<Sx x={cx} y={212} text={title} size={44} color={lit > 0.5 ? INK : GREY_INK} weight={800} anchor="middle" />
			{flash > 0.01 ? <rect x={cx - w / 2 - 9} y={225} width={w + 18} height={68} rx={34} fill={AMBER} opacity={0.25 * flash} /> : null}
			<rect x={cx - w / 2} y={232} width={w} height={54} rx={27} fill={base ? '#fff6e3' : CARD} stroke={base ? AMBER : GREYT} strokeWidth={2.5} strokeDasharray={base ? undefined : '8 6'} />
			<Sx x={cx} y={270} text={t} size={30} color={base ? INK : GREY_INK} hand anchor="middle" />
		</g>
	);
};

/** A readable mark cell: glyph at the left, caption lines, an optional grey "vs ..." line. */
export const BigCell: React.FC<{x: number; r: number; kind: MK; lines: string[]; vs?: string; o?: number; lit?: number; size?: number; glow?: number}> = ({x, r, kind, lines, vs, o = 1, lit = 1, size = 32, glow = 0}) => {
	if (o <= 0.01) return null;
	const yc = rc2(r);
	const L = clamp01(lit);
	const vsz = Math.max(26, size - 4);
	const lh = size * 1.18;
	const tot = lines.length * lh + (vs ? vsz * 1.18 : 0);
	const y0 = yc - tot / 2 + size * 0.86;
	return (
		<g opacity={o}>
			{glow > 0.01 ? <circle cx={x + 40} cy={yc} r={48} fill={AMBER} opacity={0.28 * glow} /> : null}
			<MarkGlyph x={x + 40} y={yc} kind={kind} o={0.5 + 0.5 * L} s={1.1} />
			{lines.map((t, i) => <Sx key={i} x={x + 88} y={y0 + i * lh} text={t} size={size} color={L > 0.5 ? INK : GREY_INK} hand />)}
			{vs ? <Sx x={x + 88} y={y0 + lines.length * lh + 2} text={vs} size={vsz} color={GREY_INK} hand /> : null}
		</g>
	);
};

// ---------- the cells ----------
type CellDef = {r: number; kind: MK; lines: string[]; vs?: string; short: string[]};
export const CROP2: Record<'genA' | 'genB' | 'spA' | 'spB' | 'ecoA', CellDef & {col: 'a' | 'b'}> = {
	genA: {col: 'a', r: 2, kind: 'up', lines: ['adds one useful gene'], vs: 'vs ordinary Cavendish', short: ['+1 useful gene']},
	genB: {col: 'b', r: 2, kind: 'down', lines: ['still one clone'], vs: 'vs many varieties', short: ['still one clone']},
	spA: {col: 'a', r: 1, kind: 'up', lines: ['more insect species'], vs: 'vs sprayed cotton', short: ['Bt: more insects']},
	spB: {col: 'b', r: 1, kind: 'down', lines: ['fewer wildflowers', 'and insects'], vs: 'vs fields with weeds', short: ['fewer wildflowers']},
	ecoA: {col: 'a', r: 0, kind: 'q', lines: ['could spare land'], vs: 'only if it is protected', short: ['spare land?', 'if protected']},
};
export type CropKey2 = keyof typeof CROP2;
export const CONS2: Record<'sp' | 'genDown' | 'genQ' | 'eco', CellDef> = {
	sp: {r: 1, kind: 'q', lines: ['adds a species to an area only if white', 'rhinos are absent from that baseline area'], short: ['a species only if', 'absent from that area']},
	genDown: {r: 2, kind: 'down', lines: ['a bottleneck from the start:', "one female's eggs, a few males' sperm"], short: ['a bottleneck']},
	genQ: {r: 2, kind: 'q', lines: ['wider if more founders:', 'the stem-cell route, still in research'], short: ['bottleneck; wider', 'if more founders']},
	eco: {r: 0, kind: 'q', lines: ['rhinos grazing grasslands again:', 'decades away at best'], short: ['grazing again:', 'decades away']},
};
export type ConsKey2 = keyof typeof CONS2;

export const CropCells2: React.FC<{mode: Mode; o: Partial<Record<CropKey2, number>>; lit?: Partial<Record<CropKey2, number>>}> = ({mode, o, lit = {}}) => (
	<>
		{(Object.keys(CROP2) as CropKey2[]).map(k => {
			const c = CROP2[k];
			const x = c.col === 'a' ? LAY[mode].a : LAY[mode].b;
			const both = mode === 'both';
			return <BigCell key={k} x={x} r={c.r} kind={c.kind} lines={both ? c.short : c.lines} vs={both ? undefined : c.vs} o={o[k] ?? 0} lit={lit[k] ?? 0} size={both ? 28 : 32} />;
		})}
	</>
);
export const ConsCells2: React.FC<{mode: Mode; o: Partial<Record<ConsKey2, number>>; lit?: Partial<Record<ConsKey2, number>>; glow?: Partial<Record<ConsKey2, number>>}> = ({mode, o, lit = {}, glow = {}}) => (
	<>
		{(Object.keys(CONS2) as ConsKey2[]).map(k => {
			const c = CONS2[k];
			const both = mode === 'both';
			return <BigCell key={k} x={LAY[mode].cons} r={c.r} kind={c.kind} lines={both ? c.short : c.lines} o={o[k] ?? 0} lit={lit[k] ?? 0} size={both ? 28 : 34} glow={glow[k] ?? 0} />;
		})}
	</>
);

/** A plate drawn clipped to its own alpha box (for one plant cut from a row plate). */
export const ClipPl: React.FC<{p: typeof PLATES.kale; cx: number; cy: number; w: number; o?: number; id: string}> = ({p, cx, cy, w, o = 1, id}) => {
	if (o <= 0.01) return null;
	const h = (w * (p.box[3] - p.box[1])) / (p.box[2] - p.box[0]);
	return (
		<g opacity={o}>
			<defs><clipPath id={id}><rect x={cx - w / 2 - 2} y={cy - h / 2 - 2} width={w + 4} height={h + 4} /></clipPath></defs>
			<g clipPath={`url(#${id})`}><Pl p={p} cx={cx} cy={cy} w={w} /></g>
		</g>
	);
};
