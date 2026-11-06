// M8 G02 (Chemistry practice) drawing parts. The practice board (question cards, columns, tables, chips, answer boxes,
// crossed mistakes, framed answers, pause hold) is bio-m8-g01's board, imported read-only; the pre-countdown ring is
// bio-m8-b07's PreRing and the key-notes board is chem-m5-c06a's. New here (lesson-local, coded abstract diagrams):
// - Graph: a calibration grid whose axes, grid and tick marks are solid from the first frame (numbers and axis titles
//   can write on cue), with crosses, ruled lines, the linear range band, an absorbance marker, read-off lines and a
//   slope triangle;
// - CheckStrip: the four checks (inside the standards, every dilution, line starts at zero, right sample);
// - BarSplit: a sample's absorbance bar split into the reagent's share and the iron's share;
// - GuideBar: a lead concentration scale with the guideline, the quantification limit and one marker per sample;
// - PipeStrip: overnight, first drink, flushed: a schematic pipe with lead dots gathering and flushing away.
// Plates are scaled uniformly, never stretched. Nothing here draws people.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, BLUE, Box, CARD, Chip, DrawPath, EDGE, GREYT, GREY_FILL, GTag, INK, INK_SOFT, Pic, PicH, QPart, RED, Sx, TEAL, Tag, Tbl, marksCheck, mw, prog, pulse, smooth, vis,
} from '../bio-m8-g01/board';
import type {QMark} from '../bio-m8-g01/board';
import {PL} from './assets';
import {CU_A, CU_C, CU_ICPT, CU_SLOPE, FE_A, FE_C, FE_EQ, FE_ICPT, FE_SLOPE, Q1_DATA, Q1_DEM, Q1_STEM, Q1_T_COL, Q1_T_FULL, Q2_DATA, Q2_DEM, Q2_STEM, Q3_DEM, Q3_GUIDE, Q3_STEM, Q3_T_COL, Q3_T_FULL} from './common';

export * from '../bio-m8-g01/board';
export {PreRing} from '../bio-m8-b07/parts';
export {KeyNotesBoard} from '../chem-m5-c06a/s4';

// ---------- colour key (design) ----------
export const CU = '#2b6fc4', CU_INK = '#1d4f8a', FE = '#d0532b', FE_INK = '#9c3a1a', PB = '#5f6670', PB_INK = '#3f454d';
export const GIV = '#24407a', BAND = '#2f8a5b', TERRA = '#b5502b', GREYX = '#8d857a';

// ---------- graph ----------
export type GG = {x: number; y: number; w: number; h: number; x0: number; x1: number; y0: number; y1: number};
export const gx = (g: GG, v: number) => g.x + ((v - g.x0) / (g.x1 - g.x0)) * g.w;
export const gy = (g: GG, v: number) => g.y + g.h - ((v - g.y0) / (g.y1 - g.y0)) * g.h;
/** Graph paper with solid axes, grid and tick marks from the first frame. Numbers and titles write on at xlAt/ylAt. */
export const Graph: React.FC<{g: GG; xt: number[]; yt: number[]; fx: (n: number) => string; fy: (n: number) => string; xl: string; yl: string; size?: number; xlAt?: number; ylAt?: number; dx?: number; dy?: number; o?: number; xlPulse?: number; ylPulse?: number}> = ({g, xt, yt, fx, fy, xl, yl, size = 30, xlAt = -1000, ylAt = -1000, dx, dy, o = 1, xlPulse, ylPulse}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const gxs: number[] = [], gys: number[] = [];
	const sx = dx ?? (xt[1] - xt[0]) / 2, sy = dy ?? (yt[1] - yt[0]) / 2;
	for (let t = g.x0; t <= g.x1 + 1e-9; t += sx) gxs.push(t);
	for (let t = g.y0; t <= g.y1 + 1e-9; t += sy) gys.push(t);
	const xa = prog(f, xlAt, 14), ya = prog(f, ylAt, 14);
	const xp = xlPulse === undefined ? 0 : pulse(f, xlPulse, 40), yp = ylPulse === undefined ? 0 : pulse(f, ylPulse, 40);
	return (
		<g opacity={o}>
			<rect x={g.x - 8} y={g.y - 8} width={g.w + 16} height={g.h + 8} fill={CARD} />
			{gxs.map((t, i) => <line key={'a' + i} x1={gx(g, t)} x2={gx(g, t)} y1={g.y} y2={g.y + g.h} stroke="#d6dfe8" strokeWidth={1.5} />)}
			{gys.map((t, i) => <line key={'b' + i} x1={g.x} x2={g.x + g.w} y1={gy(g, t)} y2={gy(g, t)} stroke="#d6dfe8" strokeWidth={1.5} />)}
			<path d={`M${g.x},${g.y - 18} L${g.x},${g.y + g.h} L${g.x + g.w + 18},${g.y + g.h}`} fill="none" stroke={INK} strokeWidth={4.5} strokeLinejoin="round" />
			{xt.map(t => <line key={'xt' + t} x1={gx(g, t)} x2={gx(g, t)} y1={g.y + g.h} y2={g.y + g.h + 12} stroke={INK} strokeWidth={3} />)}
			{yt.map(t => <line key={'yt' + t} x1={g.x - 12} x2={g.x} y1={gy(g, t)} y2={gy(g, t)} stroke={INK} strokeWidth={3} />)}
			{xa > 0.01 ? <g opacity={xa}>
				{xt.map(t => <Sx key={'xn' + t} x={gx(g, t)} y={g.y + g.h + size + 14} text={fx(t)} size={size} color={INK} anchor="middle" weight={700} at={-1000} />)}
				<Sx x={g.x + g.w / 2} y={g.y + g.h + size * 2.45 + 14} text={xl} size={size + 4 + 6 * xp} color={xp > 0.01 ? AMBER_INK : INK} anchor="middle" weight={800} at={-1000} />
			</g> : null}
			{ya > 0.01 ? <g opacity={ya}>
				{yt.map(t => <Sx key={'yn' + t} x={g.x - 18} y={gy(g, t) + size * 0.35} text={fy(t)} size={size} color={INK} anchor="end" weight={700} at={-1000} />)}
				<g transform={`translate(${g.x - size * 4.1},${g.y + g.h / 2}) rotate(-90)`}><Sx x={0} y={0} text={yl} size={size + 4 + 6 * yp} color={yp > 0.01 ? AMBER_INK : INK} anchor="middle" weight={800} at={-1000} /></g>
			</g> : null}
		</g>
	);
};
/** Small crosses (s06): each drops in at its frame. */
export const Crosses: React.FC<{g: GG; pts: [number, number][]; at: number[] | number; color?: string; r?: number; o?: number; hi?: number; pre?: number}> = ({g, pts, at, color = GIV, r = 12, o = 1, hi, pre = 0}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const h = hi === undefined ? 0 : pulse(f, hi, 40);
	return (
		<g opacity={o}>
			{pts.map(([a, b], i) => {
				const t = Array.isArray(at) ? at[i] : at;
				const k0 = prog(f, t, 10);
				const k = Math.max(pre, k0);
				if (k <= 0.01) return null;
				const x = gx(g, a), y = gy(g, b) - (k0 > 0.01 && k0 < 1 ? (1 - smooth(k0)) * 26 : 0);
				const rr = r * (1 + 0.4 * h);
				return <path key={i} d={`M${x - rr},${y - rr} L${x + rr},${y + rr} M${x + rr},${y - rr} L${x - rr},${y + rr}`} stroke={color} strokeWidth={5} strokeLinecap="round" opacity={k} />;
			})}
		</g>
	);
};
/** A ruled segment in data coordinates, drawn on at `at`. */
export const GLine: React.FC<{g: GG; a: [number, number]; b: [number, number]; at?: number; out?: number; color?: string; width?: number; dash?: string; dur?: number; o?: number}> = ({g, a, b, at = -1000, out, color = GIV, width = 5, dash, dur = 26, o = 1}) => {
	const f = useCurrentFrame();
	const v = (out === undefined ? 1 : 1 - prog(f, out, 12)) * o;
	if (f < at || v <= 0.01) return null;
	return <g opacity={v}><DrawPath d={`M${gx(g, a[0])},${gy(g, a[1])} L${gx(g, b[0])},${gy(g, b[1])}`} at={at} dur={dur} color={color} width={width} dash={dash} /></g>;
};
/** The standards' range (pale green band) with an optional tag above it. */
export const GBand: React.FC<{g: GG; lo: number; hi: number; at?: number; tag?: string; tagAt?: number; size?: number}> = ({g, lo, hi, at = -1000, tag, tagAt, size = 30}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 16);
	if (v <= 0.01) return null;
	const w = (gx(g, hi) - gx(g, lo)) * smooth(prog(f, at, 24));
	return (
		<g opacity={v}>
			<rect x={gx(g, lo)} y={g.y} width={w} height={g.h} fill={BAND} opacity={0.1} />
			<rect x={gx(g, lo)} y={g.y + g.h - 10} width={w} height={10} fill={BAND} opacity={0.55} />
			{tag ? <Sx x={gx(g, hi) - 14} y={g.y + g.h - 24} text={tag} size={size} color={BAND} anchor="end" hand weight={700} at={tagAt ?? at} /> : null}
		</g>
	);
};
/** A horizontal absorbance marker across the graph; `v` may move with the frame. */
export const ALine: React.FC<{g: GG; v: (f: number) => number; at: number; out?: number; color?: string; label?: (f: number) => string; size?: number; lx?: number; o?: number}> = ({g, v, at, out, color = AMBER_INK, label, size = 36, lx, o = 1}) => {
	const f = useCurrentFrame();
	const k = vis(f, at, out, 12) * o;
	if (k <= 0.01) return null;
	const y = gy(g, v(f));
	const w = smooth(prog(f, at, 20));
	return (
		<g opacity={k}>
			<line x1={g.x} x2={g.x + g.w * w} y1={y} y2={y} stroke={color} strokeWidth={5} strokeDasharray="14 9" />
			<circle cx={g.x} cy={y} r={9} fill={color} />
			{label ? <Sx x={lx ?? g.x + 18} y={y - 14} text={label(f)} size={size} color={color} weight={800} at={at + 6} /> : null}
		</g>
	);
};
/** Read across from absorbance `a` to the line at concentration `c`, then down, with the value chip on the x axis. */
export const ReadOff: React.FC<{g: GG; a: number; c: number; at: number; downAt: number; value: string; valueAt?: number; out?: number; color?: string; size?: number; aLabel?: string}> = ({g, a, c, at, downAt, value, valueAt, out, color = AMBER_INK, size = 36, aLabel}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const x = gx(g, c), y = gy(g, a);
	const va = valueAt ?? downAt + 22;
	const vw = mw(value, size, false, 800) + 30;
	return (
		<g opacity={v}>
			{aLabel ? <Sx x={g.x + 14} y={y - 14} text={aLabel} size={size} color={color} weight={800} at={at} /> : null}
			<DrawPath d={`M${g.x},${y} L${x},${y}`} at={at + 4} dur={22} color={color} width={5} dash="12 9" />
			<circle cx={x} cy={y} r={10} fill={color} opacity={prog(f, at + 24, 8)} />
			<DrawPath d={`M${x},${y} L${x},${g.y + g.h}`} at={downAt} dur={20} color={color} width={5} dash="12 9" />
			<g opacity={prog(f, va, 10)}>
				<rect x={x - vw / 2} y={g.y + g.h + 6} width={vw} height={size * 1.4} rx={10} fill="#fff3e3" stroke={color} strokeWidth={3} />
				<Sx x={x} y={g.y + g.h + 6 + size * 1.04} text={value} size={size} color={color} anchor="middle" weight={800} at={-1000} />
			</g>
		</g>
	);
};
/** Slope triangle between two concentrations on a line A = m c + b. */
export const SlopeTri: React.FC<{g: GG; c0: number; c1: number; m: number; b: number; at: number; color?: string; size?: number}> = ({g, c0, c1, m, b, at, color = GIV, size = 30}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.01) return null;
	const x0 = gx(g, c0), x1 = gx(g, c1), y0 = gy(g, m * c0 + b), y1 = gy(g, m * c1 + b);
	return (
		<g opacity={v}>
			<DrawPath d={`M${x0},${y0} L${x1},${y0} L${x1},${y1}`} at={at} dur={24} color={color} width={4} dash="10 7" />
			<Sx x={(x0 + x1) / 2} y={y0 + size + 8} text={`${(c1 - c0).toFixed(2)} mg L⁻¹`} size={size} color={color} anchor="middle" weight={700} at={at + 10} />
			<Sx x={x1 + 12} y={(y0 + y1) / 2 + 10} text={`${(m * (c1 - c0)).toFixed(3)}`} size={size} color={color} weight={700} at={at + 16} />
		</g>
	);
};
export const fitCu = (c: number) => CU_SLOPE * c + CU_ICPT;
export const fitFe = (c: number) => FE_SLOPE * c + FE_ICPT;
export const CU_PTS: [number, number][] = CU_C.map((c, i) => [c, CU_A[i]]);
export const FE_PTS: [number, number][] = FE_C.map((c, i) => [c, FE_A[i]]);
const f2 = (n: number) => n.toFixed(2);
const f3 = (n: number) => (n === 0 ? '0' : n.toFixed(3));
const f1 = (n: number) => (n === 0 ? '0' : n.toFixed(1));
/** Q1's copper grid (0 to 5.00 mg/L, 0 to 0.700). */
export const CuGraph: React.FC<{g: GG; size?: number; xlAt?: number; ylAt?: number; xlPulse?: number; ylPulse?: number}> = ({g, size = 30, xlAt, ylAt, xlPulse, ylPulse}) => (
	<Graph g={g} xt={[0, 1, 2, 3, 4, 5]} yt={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7]} fx={n => (n === 0 ? '0' : f2(n))} fy={f3} xl="copper concentration (mg L⁻¹)" yl="absorbance" size={size} xlAt={xlAt} ylAt={ylAt} dx={0.5} dy={0.05} xlPulse={xlPulse} ylPulse={ylPulse} />
);
/** Q2's iron graph (given): points, line and equation. */
export const FeGraph: React.FC<{g: GG; size?: number; eq?: boolean; eqXY?: [number, number]; eqSize?: number; lineO?: number; ptsO?: number; eqText?: string}> = ({g, size = 28, eq = true, eqXY, eqSize = 32, lineO = 1, ptsO = 1, eqText = FE_EQ}) => (
	<g>
		<Graph g={g} xt={[0, 0.5, 1, 1.5, 2, 2.5]} yt={[0, 0.1, 0.2, 0.3, 0.4, 0.5]} fx={n => (n === 0 ? '0' : f2(n))} fy={f1} xl="iron concentration (mg L⁻¹)" yl="absorbance" size={size} dx={0.25} dy={0.05} />
		<GLine g={g} a={[0, fitFe(0)]} b={[2.4, fitFe(2.4)]} color={FE_INK} width={5} o={lineO} />
		<Crosses g={g} pts={FE_PTS} at={-1000} color={GIV} o={ptsO} />
		{eq ? <Sx x={eqXY ? eqXY[0] : g.x + 24} y={eqXY ? eqXY[1] : g.y + 34} text={eqText} size={eqSize} color={FE_INK} weight={800} at={-1000} /> : null}
	</g>
);

// ---------- check strip ----------
export const CHECKS = ['inside the standards?', 'every dilution?', 'line starts at zero?', 'right sample for the question?'];
export type Tick = {at: number; note?: string; color?: string};
/** The four checks as two rows of pills; a row lights (blue) on `lit`, ticks on `tick`. `dim` turns it to an outline. */
export const CheckStrip: React.FC<{x: number; y: number; w: number; lit?: (number | undefined)[]; tick?: (Tick | undefined)[]; dim?: boolean; size?: number; build?: number[]}> = ({x, y, w, lit = [], tick = [], dim = false, size = 26, build}) => {
	const f = useCurrentFrame();
	const gap = 10, pw = (w - gap) / 2, ph = size * 1.75;
	return (
		<g opacity={dim ? 0.55 : 1}>
			<Sx x={x} y={y - 10} text="check" size={26} color={INK_SOFT} hand weight={700} at={-1000} />
			{CHECKS.map((c, i) => {
				const bx = x + (i % 2) * (pw + gap), by = y + Math.floor(i / 2) * (ph + gap);
				const bo = build ? prog(f, build[i], 12) : 1;
				if (bo <= 0.01) return null;
				const l = lit[i] === undefined ? 0 : prog(f, lit[i] as number, 12);
				const t = tick[i];
				const tk = t ? prog(f, t.at, 12) : 0;
				const col = t?.color ?? TEAL;
				const on = Math.max(l, tk) > 0.5 && !dim;
				return (
					<g key={i} opacity={bo}>
						<rect x={bx} y={by} width={pw} height={ph} rx={ph / 2} fill={on ? '#fffaf0' : CARD} stroke={on ? (tk > 0.5 ? col : BLUE) : EDGE} strokeWidth={on ? 3.5 : 2.5} strokeDasharray={dim ? '8 6' : undefined} />
						<Sx x={bx + 18} y={by + ph / 2 + size * 0.35} text={tk > 0.5 && t?.note ? t.note : c} size={size} color={INK} hand weight={700} at={-1000} />
						{tk > 0.01 ? <path d={`M${bx + pw - 46},${by + ph / 2} l10,10 l18,-20`} fill="none" stroke={col} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" opacity={tk} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- question cards ----------
export const Q1Full: React.FC = () => (
	<g>
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q1_STEM} x={126} y={210} w={1150} size={36} />
		<Tbl t={Q1_T_FULL} x={126} y={318} size={34} headSize={30} rowH={58} />
		<QPart blocks={Q1_DATA} x={126} y={500} w={1150} size={36} />
		<QPart blocks={Q1_DEM} x={126} y={702} w={1150} size={36} />
	</g>
);
export const q1Marks = (m: QMark[]) => marksCheck([Q1_STEM, Q1_DATA, Q1_DEM], m);
export const Q1Col: React.FC<{marks?: QMark[]; cells?: Record<string, number>; checks?: React.ReactNode}> = ({marks = [], cells = {}, checks}) => (
	<g>
		<Box x={40} y={150} w={680} h={890} />
		<QPart blocks={Q1_STEM} marks={marks} x={62} y={194} w={636} size={27} />
		<Tbl t={Q1_T_COL} x={62} y={318} size={27} headSize={26} rowH={46} marks={cells} />
		<QPart blocks={Q1_DATA} marks={marks} x={62} y={490} w={636} size={27} />
		<QPart blocks={Q1_DEM} marks={marks} x={62} y={692} w={636} size={27} />
		{checks}
	</g>
);
export const Q2Full: React.FC = () => (
	<g>
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q2_STEM} x={126} y={210} w={1150} size={36} />
		<FeGraph g={{x: 290, y: 410, w: 460, h: 280, x0: 0, x1: 2.5, y0: 0, y1: 0.5}} size={26} eq={false} />
		<Sx x={800} y={520} text="A = 0.199c + 0.032" size={40} color={FE_INK} weight={800} at={-1000} />
		<Sx x={800} y={572} text="(c in mg L⁻¹)" size={34} color={FE_INK} weight={700} at={-1000} />
		<Sx x={800} y={640} text="standards 0.00 to 2.00 mg L⁻¹" size={30} color={INK} weight={600} at={-1000} />
		<QPart blocks={Q2_DATA} x={126} y={850} w={1150} size={36} />
		<QPart blocks={Q2_DEM} x={126} y={916} w={1150} size={34} />
	</g>
);
export const q2Marks = (m: QMark[]) => marksCheck([Q2_STEM, Q2_DATA, Q2_DEM], m);
export const Q2Col: React.FC<{marks?: QMark[]; checks?: React.ReactNode}> = ({marks = [], checks}) => (
	<g>
		<Box x={40} y={150} w={680} h={890} />
		<QPart blocks={Q2_STEM} marks={marks} x={62} y={194} w={636} size={27} />
		<Sx x={62} y={470} text={FE_EQ} size={27} color={FE_INK} weight={800} at={-1000} />
		<Sx x={62} y={510} text="(calibration graph shown, right)" size={26} color={INK_SOFT} hand weight={700} at={-1000} />
		<QPart blocks={Q2_DATA} marks={marks} x={62} y={572} w={636} size={27} />
		<QPart blocks={Q2_DEM} marks={marks} x={62} y={640} w={636} size={27} />
		{checks}
	</g>
);
export const Q3Full: React.FC = () => (
	<g>
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q3_STEM} x={126} y={210} w={1150} size={36} />
		<Tbl t={{...Q3_T_FULL, rows: [['Sample 1: first draw at 8 am, after the water stood\nin the pipes overnight', '0.012'], ['Sample 2: after the bubbler had run for 2 minutes', '0.002']]}} x={126} y={322} size={32} headSize={30} rowH={86} boldCol0={false} />
		<QPart blocks={Q3_GUIDE} x={126} y={598} w={1150} size={36} />
		<QPart blocks={Q3_DEM} x={126} y={740} w={1150} size={38} />
	</g>
);
export const q3Marks = (m: QMark[]) => marksCheck([Q3_STEM, Q3_GUIDE, Q3_DEM], m);
export const Q3Col: React.FC<{marks?: QMark[]; cells?: Record<string, number>; checks?: React.ReactNode}> = ({marks = [], cells = {}, checks}) => (
	<g>
		<Box x={40} y={150} w={680} h={890} />
		<QPart blocks={Q3_STEM} marks={marks} x={62} y={194} w={636} size={27} />
		<Tbl t={Q3_T_COL} x={62} y={322} size={26} headSize={26} rowH={84} boldCol0={false} marks={cells} />
		<QPart blocks={Q3_GUIDE} marks={marks} x={62} y={610} w={636} size={27} />
		<QPart blocks={Q3_DEM} marks={marks} x={62} y={712} w={636} size={27} />
		{checks}
	</g>
);
/** A short strip of key givens for the answer side of a question card (from the first frame). */
export const Givens: React.FC<{x: number; y: number; items: [string, string][]; size?: number; gap?: number}> = ({x, y, items, size = 32, gap = 12}) => (
	<g>
		<Sx x={x} y={y - 12} text="key givens" size={28} color={INK_SOFT} hand weight={700} at={-1000} />
		{items.map(([t, c], i) => <Chip key={i} x={x} y={y + i * (size * 1.55 + gap)} text={t} size={size} color={c} ink={INK} />)}
	</g>
);

// ---------- Q2: the absorbance bar split ----------
/** A vertical bar of the sample's absorbance (0.290): the outline solid from the first frame; at `split` the grey
 *  reagent share (0.032) and the iron share (0.258) fill and label. */
export const BarSplit: React.FC<{x: number; base: number; h: number; w?: number; fill?: number; split: number; size?: number; o?: number; pulseGrey?: number}> = ({x, base, h, w = 130, fill = -1000, split, size = 34, o = 1, pulseGrey}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const max = 0.3;
	const hT = (0.29 / max) * h, hG = (0.032 / max) * h;
	const fl = smooth(prog(f, fill, 20));
	const sp = smooth(prog(f, split, 20));
	const pg = pulseGrey === undefined ? 0 : pulse(f, pulseGrey, 40);
	return (
		<g opacity={o}>
			<line x1={x - 30} x2={x + w + 30} y1={base} y2={base} stroke={INK} strokeWidth={4} />
			<rect x={x} y={base - hT} width={w} height={hT} rx={6} fill={CARD} stroke={INK} strokeWidth={3} />
			{fl > 0.01 && sp < 0.99 ? <rect x={x + 3} y={base - hT * fl} width={w - 6} height={hT * fl - 2} fill={FE} opacity={0.75 * (1 - sp)} /> : null}
			{sp > 0.01 ? <g>
				<rect x={x + 3} y={base - hG} width={w - 6} height={hG - 2} fill={GREYX} opacity={sp} />
				<rect x={x + 3} y={base - hT} width={w - 6} height={(hT - hG) * sp} fill={FE} opacity={0.8} />
				{pg > 0.01 ? <rect x={x - 8} y={base - hG - 8} width={w + 16} height={hG + 12} rx={8} fill="none" stroke={AMBER} strokeWidth={5} opacity={pg} /> : null}
				<Sx x={x + w + 24} y={base - hG / 2 + size * 0.35} text="0.032 reagent" size={size} color={GREYT} weight={800} at={split + 8} />
				<Sx x={x + w + 24} y={base - hG - (hT - hG) / 2 + size * 0.35} text="0.258 iron" size={size} color={FE_INK} weight={800} at={split + 14} />
			</g> : null}
			<Sx x={x + w / 2} y={base - hT - 16} text="A = 0.290" size={size} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={x + w / 2} y={base + size + 10} text="bore water" size={size - 4} color={INK} anchor="middle" hand weight={700} at={-1000} />
		</g>
	);
};

// ---------- Q3: the guideline bar ----------
export type GMark = {v: number; label: string; at: number; color?: string; dimAt?: number; pulseAt?: number; below?: boolean; slideFrom?: number};
/** Lead concentration 0 to 0.015 mg/L: guideline (terracotta) at 0.005 and quantification limit tick at 0.001, solid
 *  from the first frame; one marker per sample on cue; the "x 5" bracket draws above the bar. */
export const GuideBar: React.FC<{x: number; y: number; w: number; marks?: GMark[]; size?: number; bracket?: number; o?: number; glPulse?: number}> = ({x, y, w, marks = [], size = 30, bracket, o = 1, glPulse}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const X = (v: number) => x + (v / 0.015) * w;
	const br = bracket === undefined ? 0 : prog(f, bracket, 14);
	const gp = glPulse === undefined ? 0 : pulse(f, glPulse, 40);
	return (
		<g opacity={o}>
			<rect x={x} y={y - 22} width={w} height={44} rx={10} fill={CARD} stroke={EDGE} strokeWidth={2.5} />
			<rect x={X(0.005)} y={y - 20} width={w - (X(0.005) - x) - 2} height={40} fill={TERRA} opacity={0.12} />
			{[0, 0.005, 0.01, 0.015].map(v => <g key={v}><line x1={X(v)} x2={X(v)} y1={y + 22} y2={y + 36} stroke={INK} strokeWidth={3} /><Sx x={X(v)} y={y + 36 + size} text={v === 0 ? '0' : v === 0.015 ? '0.015 mg L⁻¹' : v.toFixed(3)} size={size} color={INK} anchor={v === 0.015 ? 'end' : 'middle'} weight={700} at={-1000} /></g>)}
			<line x1={X(0.005)} x2={X(0.005)} y1={y - 64} y2={y + 26} stroke={TERRA} strokeWidth={6 + 3 * gp} />
			<Sx x={X(0.005) + 10} y={y - 70} text="guideline 0.005" size={size + 2} color={TERRA} weight={800} at={-1000} />
			<line x1={X(0.001)} x2={X(0.001)} y1={y - 34} y2={y + 22} stroke={GREYX} strokeWidth={5} />
			<Sx x={X(0.001) + 2} y={y - 42} text="limit 0.001" size={size - 2} color={GREYT} anchor="middle" weight={800} at={-1000} />
			{br > 0.01 ? <g opacity={br}>
				<path d={`M${X(0.001)},${y - 98} l0,-14 L${X(0.005)},${y - 112} l0,14`} fill="none" stroke={BAND} strokeWidth={4} />
				<Sx x={(X(0.001) + X(0.005)) / 2} y={y - 126} text="× 5: it can measure at the guideline" size={size + 2} color={BAND} anchor="middle" hand weight={700} at={-1000} />
			</g> : null}
			{marks.map((m, i) => {
				const k = prog(f, m.at, 14);
				if (k <= 0.01) return null;
				const d = m.dimAt === undefined ? 0 : prog(f, m.dimAt, 14);
				const p = m.pulseAt === undefined ? 0 : pulse(f, m.pulseAt, 40);
				const vx = m.slideFrom === undefined ? m.v : m.slideFrom + (m.v - m.slideFrom) * smooth(prog(f, m.at, 30));
				const col = m.color ?? PB;
				const cx = X(vx);
				return (
					<g key={i} opacity={k * (1 - 0.6 * d)}>
						<circle cx={cx} cy={y} r={17 + 6 * p} fill={col} stroke={CARD} strokeWidth={3} />
						{m.below ? <Sx x={cx} y={y + 36 + size * 2.5} text={m.label} size={size + 4} color={col} anchor="middle" weight={800} at={-1000} />
							: <Sx x={cx} y={y - 32} text={m.label} size={size + 4} color={col} anchor="middle" weight={800} at={-1000} />}
					</g>
				);
			})}
		</g>
	);
};

// ---------- Q3: the time-of-day strip ----------
/** Three panels (overnight, first drink, flushed): a schematic pipe section with slate lead dots that gather while
 *  the water stands and wash out when it runs. Abstract diagram, not a plate. */
export const PipeStrip: React.FC<{x: number; y: number; w: number; at: number; size?: number; o?: number}> = ({x, y, w, at, size = 30, o = 1}) => {
	const f = useCurrentFrame();
	const v = o;
	if (v <= 0.01) return null;
	const live = f >= at;
	const gap = 46, pw = (w - 2 * gap) / 3, ph = 86;
	const caps = ['overnight: water stands', '8 am: first drink', 'after 2 min: flushed'];
	const dots = [[0.1, 0.3], [0.22, 0.65], [0.34, 0.4], [0.46, 0.7], [0.58, 0.32], [0.7, 0.6], [0.82, 0.42], [0.9, 0.7], [0.16, 0.5], [0.52, 0.5], [0.76, 0.28], [0.4, 0.22]];
	return (
		<g opacity={v}>
			{[0, 1, 2].map(i => {
				const px = x + i * (pw + gap);
				const gather = i === 0 ? smooth(prog(f, at + 6, 50)) : 1;
				const n = i === 2 ? 2 : dots.length;
				const flow = i === 0 ? 0 : ((f - at) % 60) / 60;
				return (
					<g key={i}>
						<rect x={px} y={y} width={pw} height={ph} rx={ph / 2} fill="#dbe9f4" stroke="#8a929b" strokeWidth={6} />
						{(live ? dots.slice(0, Math.round(n * (i === 0 ? gather : 1))) : []).map(([u, w2], k) => {
							const dx = i === 0 ? 0 : (flow * 40 + k * 9) % 30;
							return <circle key={k} cx={px + 24 + u * (pw - 48) + dx} cy={y + 14 + w2 * (ph - 28)} r={8} fill={PB} />;
						})}
						{i > 0 ? <path d={`M${px + pw - 6},${y + ph / 2} l38,0 m-12,-12 l12,12 l-12,12`} fill="none" stroke={BLUE} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" /> : null}
						<Sx x={px + pw / 2} y={y + ph + size + 12} text={caps[i]} size={size} color={INK} anchor="middle" hand weight={700} at={-1000} />
					</g>
				);
			})}
			<Sx x={x} y={y - 18} text="lead dissolves into water that stands in the pipes and fittings" size={size} color={PB_INK} hand weight={700} at={at} />
		</g>
	);
};

// ---------- plates helpers ----------
export {PL};
void Pic; void PicH; void GTag; void Tag; void RED; void GREY_FILL;
