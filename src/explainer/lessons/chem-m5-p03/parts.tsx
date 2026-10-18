// Drawing parts for P03 (investigating solubility rules): the painted 48-well plate with coded well fills placed on
// the measured well centres, the 5 x 5 results matrix, ion labels, prediction marks, close-up wells, painted dropper
// bottles with formula tags. Cards, tables, chips, the countdown and key notes are shared (P01, C11, C13, G03c, C6a).
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog, rng} from '../../kit';
import {Arrow, Card, Chip, Fade, GivensCard, KeyNotesBoard, MistakeChip, Overlay, PauseHold, PicH, Ring, Stand, Sx, TEAL, TaskLine, Table, Tick, mw, picW, pulseAt, smooth} from '../chem-m5-p01/parts';
import type {TRow} from '../chem-m5-p01/parts';
import {AN_INK, BROWN, CAT_INK, PEN} from './common';
import {DBOTTLE, PLATE_BLACK, PLATE_NAT, PLATE_WHITE, WELL_R, WELL_X, WELL_Y, have} from './assets';
import type {PDef} from './assets';

export {Arrow, Card, Chip, Fade, GivensCard, KeyNotesBoard, MistakeChip, Overlay, PauseHold, PicH, Ring, Sx, TEAL, TaskLine, Table, Tick, mw, picW, pulseAt, smooth};
export type {TRow};
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

/** P03 plate with its stand-in (checks P03's own HAVE list). */
export const Pic: React.FC<{p: PDef; x: number; y: number; h: number; o?: number}> = ({p, x, y, h, o = 1}) =>
	o <= 0.005 ? null : have(p) ? <PicH p={p} x={x} y={y} h={h} o={o} /> : <Stand p={p} x={x} y={y} h={h} o={o} />;

// ---------- the matrix ----------
export const CATS = ['Na^{+}', 'Ca^{2+}', 'Ba^{2+}', 'Pb^{2+}', 'Ag^{+}'];
export const ANS = ['Cl^{-}', 'I^{-}', 'SO_4^{2-}', 'CO_3^{2-}', 'OH^{-}'];
export const CAT_SALT = ['NaNO_3', 'Ca(NO_3)_2', 'Ba(NO_3)_2', 'Pb(NO_3)_2', 'AgNO_3'];
export const AN_SALT = ['NaCl', 'NaI', 'Na_2SO_4', 'Na_2CO_3', 'NaOH'];
export type WellKind = 'empty' | 'clear' | 'faint' | 'white' | 'yellow' | 'paleY' | 'cream' | 'brown';
/** Expected results at 0.1 mol/L stock, 3 + 3 drops, so about 0.05 mol/L of each ion (design Decisions table, Revision 3:
 * CaSO4, Ca(OH)2, PbCl2 and Ag2SO4 are slightly soluble but still precipitate at 0.05 mol/L); rows are cations, columns anions. */
export const MATRIX: WellKind[][] = [
	['clear', 'clear', 'clear', 'clear', 'clear'],
	['clear', 'clear', 'white', 'white', 'white'],
	['clear', 'clear', 'white', 'white', 'clear'],
	['white', 'yellow', 'white', 'white', 'white'],
	['white', 'paleY', 'white', 'paleY', 'brown'],
];

// ---------- plate geometry: the whole canvas is drawn at (ox, oy) with scale k ----------
export type PlateG = {ox: number; oy: number; k: number};
export const wellXY = (g: PlateG, r: number, c: number): [number, number] => [g.ox + WELL_X[c] * g.k, g.oy + WELL_Y[r] * g.k];
export const wellR = (g: PlateG) => WELL_R * g.k;
export const plateBox = (g: PlateG) => ({x: g.ox + PLATE_BLACK.box[0] * g.k, y: g.oy + PLATE_BLACK.box[1] * g.k, w: PLATE_BLACK.box[2] * g.k, h: PLATE_BLACK.box[3] * g.k});
/** The plate: white tile under it until `blackFrom`, then the black card wipes in left to right up to `blackTo` (0..1). */
export const Plate: React.FC<{g: PlateG; black?: number; o?: number; pulse?: number}> = ({g, black = 1, o = 1, pulse}) => {
	const f = useCurrentFrame();
	const b = plateBox(g);
	const s = pulse === undefined ? 1 : pulseAt(f, pulse, 0.02, 30);
	const W = PLATE_NAT[0] * g.k, H = PLATE_NAT[1] * g.k;
	const cut = b.x + b.w * clamp01(black);
	const id = `p03-cut-${Math.round(g.ox)}-${Math.round(g.oy)}`;
	return (
		<g opacity={o} transform={`translate(${b.x + b.w / 2},${b.y + b.h / 2}) scale(${s}) translate(${-(b.x + b.w / 2)},${-(b.y + b.h / 2)})`}>
			{black < 1 ? (have(PLATE_WHITE) ? <image href={staticFile(PLATE_WHITE.src)} x={g.ox} y={g.oy} width={W} height={H} /> : <Stand p={PLATE_WHITE} x={b.x} y={b.y} h={b.h} />) : null}
			{black > 0 ? (
				<>
					<clipPath id={id}><rect x={g.ox - 10} y={g.oy - 10} width={cut - g.ox + 10} height={H + 20} /></clipPath>
					<g clipPath={black < 1 ? `url(#${id})` : undefined}>
						{have(PLATE_BLACK) ? <image href={staticFile(PLATE_BLACK.src)} x={g.ox} y={g.oy} width={W} height={H} /> : <Stand p={PLATE_BLACK} x={b.x} y={b.y} h={b.h} />}
					</g>
				</>
			) : null}
		</g>
	);
};

// ---------- a well fill (top view) ----------
const KIND: Record<Exclude<WellKind, 'empty'>, {c: string; o: number; solid: boolean}> = {
	clear: {c: '#cfe6f5', o: 0.28, solid: false},
	faint: {c: '#ffffff', o: 0.42, solid: false},
	white: {c: '#f7f6f2', o: 0.95, solid: true},
	yellow: {c: '#f2cf3a', o: 0.97, solid: true},
	paleY: {c: '#f1e39a', o: 0.95, solid: true},
	cream: {c: '#efe2b8', o: 0.95, solid: true},
	brown: {c: BROWN, o: 0.95, solid: true},
};
/** One well's contents: p 0..1 is the bloom (liquid first, then the cloud or solid). */
export const Well: React.FC<{cx: number; cy: number; r: number; kind: WellKind; p: number; seed?: number; speck?: number}> = ({cx, cy, r, kind, p, seed = 1, speck = 0}) => {
	if (kind === 'empty' || p <= 0.01) return speck > 0.01 ? <Speck cx={cx} cy={cy} r={r} o={speck} /> : null;
	const K = KIND[kind];
	const liquid = clamp01(p * 2.5);
	const bloom = clamp01((p - 0.25) / 0.75);
	const q = rng(seed * 13 + 5);
	const blobs = Array.from({length: 9}, () => [q() * 2 - 1, q() * 2 - 1, 0.25 + q() * 0.3]);
	return (
		<g>
			<circle cx={cx} cy={cy} r={r * 0.94} fill="#d7ecf7" opacity={0.22 * liquid} />
			<path d={`M${cx - r * 0.55},${cy - r * 0.45} A${r * 0.75},${r * 0.75} 0 0 1 ${cx + r * 0.2},${cy - r * 0.72}`} fill="none" stroke="#ffffff" strokeWidth={Math.max(1.5, r * 0.07)} strokeLinecap="round" opacity={0.5 * liquid} />
			{kind === 'clear' ? null : K.solid ? (
				<g opacity={bloom}>
					<circle cx={cx} cy={cy} r={r * (0.45 + 0.4 * bloom)} fill={K.c} opacity={K.o} />
					{blobs.map(([u, v, s], i) => <circle key={i} cx={cx + u * r * 0.55} cy={cy + v * r * 0.55} r={r * s * bloom} fill={K.c} opacity={0.9} stroke="rgba(0,0,0,0.12)" strokeWidth={1} />)}
				</g>
			) : (
				<g opacity={bloom}>
					{blobs.map(([u, v, s], i) => <circle key={i} cx={cx + u * r * 0.55} cy={cy + v * r * 0.55} r={r * s * 0.9} fill={K.c} opacity={K.o * 0.6} />)}
					<circle cx={cx} cy={cy} r={r * 0.7} fill={K.c} opacity={K.o * 0.45} />
				</g>
			)}
			{speck > 0.01 ? <Speck cx={cx} cy={cy} r={r} o={speck} /> : null}
		</g>
	);
};
const Speck: React.FC<{cx: number; cy: number; r: number; o: number}> = ({cx, cy, r, o}) => (
	<g opacity={o}>
		{[[0.3, -0.2, 0.09], [-0.25, 0.3, 0.07], [0.05, 0.4, 0.06], [-0.35, -0.3, 0.05]].map(([u, v, s], i) => <circle key={i} cx={cx + u * r} cy={cy + v * r} r={r * s} fill="#8b7d6b" />)}
		<circle cx={cx} cy={cy} r={r * 0.5} fill="#ffffff" opacity={0.25} />
	</g>
);
export type Cell = {r: number; c: number; kind: WellKind; at: number; dur?: number; speck?: number};
/** Fills on the plate: each cell blooms from its `at`. */
export const Fills: React.FC<{g: PlateG; cells: Cell[]}> = ({g, cells}) => {
	const f = useCurrentFrame();
	const r = wellR(g);
	return (
		<g>
			{cells.map((cl, i) => {
				const [x, y] = wellXY(g, cl.r, cl.c);
				return <Well key={i} cx={x} cy={y} r={r} kind={cl.kind} p={prog(f, cl.at, cl.dur ?? 24)} seed={cl.r * 8 + cl.c + 1} speck={cl.speck} />;
			})}
		</g>
	);
};
/** Matrix cells from MATRIX, with a per-cell start (default: all at `at`). */
export const matrixCells = (atOf: (r: number, c: number) => number, dur = 24): Cell[] =>
	MATRIX.flatMap((row, r) => row.map((kind, c) => ({r, c, kind, at: atOf(r, c), dur})));

/** Ion labels: cations down the left (amber), anions across the top (violet). */
export const IonLabels: React.FC<{g: PlateG; rowsAt: number; colsAt: number; size?: number; every?: number; salts?: boolean; out?: number}> = ({g, rowsAt, colsAt, size = 34, every = 5, out}) => {
	const b = plateBox(g);
	return (
		<g>
			{CATS.map((t, r) => <Sx key={'r' + r} x={b.x - 14} y={wellXY(g, r, 0)[1] + size * 0.34} text={t} size={size} color={CAT_INK} anchor="end" weight={800} at={rowsAt + r * every} out={out} />)}
			{ANS.map((t, c) => <Sx key={'c' + c} x={wellXY(g, 0, c)[0]} y={b.y - 14 - (c % 2) * size * 1.05} text={t} size={size} color={AN_INK} anchor="middle" weight={800} at={colsAt + c * every} out={out} />)}
		</g>
	);
};

/** Pen prediction marks at each cell's top right: a dot for "precipitate", a dash for "none", a small "sl" for slight. */
export type Pred = 'ppt' | 'none' | 'slight';
export const PREDICT: Pred[][] = [
	['none', 'none', 'none', 'none', 'none'],
	['none', 'none', 'slight', 'ppt', 'slight'],
	['none', 'none', 'ppt', 'ppt', 'ppt'],
	['slight', 'ppt', 'ppt', 'ppt', 'ppt'],
	['ppt', 'ppt', 'slight', 'ppt', 'ppt'],
];
export const PredMarks: React.FC<{g: PlateG; at: number; every?: number; dx?: number; dy?: number}> = ({g, at, every = 2, dx, dy}) => {
	const f = useCurrentFrame();
	const r = wellR(g);
	return (
		<g>
			{PREDICT.flatMap((row, i) => row.map((p, j) => {
				const o = prog(f, at + (i * 5 + j) * every, 8);
				if (o <= 0.01) return null;
				const [x, y] = wellXY(g, i, j);
				const mx = x + (dx ?? r * 1.12), my = y - (dy ?? r * 1.12);
				return (
					<g key={i + '-' + j} opacity={o}>
						<circle cx={mx} cy={my} r={r * 0.27} fill="#fff8e6" stroke={PEN} strokeWidth={1.6} opacity={0.95} />
						{p === 'ppt' ? <circle cx={mx} cy={my} r={r * 0.14} fill={PEN} /> : p === 'none' ? <path d={`M${mx - r * 0.16},${my} L${mx + r * 0.16},${my}`} stroke={PEN} strokeWidth={3} strokeLinecap="round" /> : <text x={mx} y={my + r * 0.12} textAnchor="middle" style={{fontFamily: 'Caveat', fontWeight: 700, fontSize: r * 0.42}} fill={PEN}>sl</text>}
					</g>
				);
			}))}
		</g>
	);
};

// ---------- a large close-up well (top view on a card) ----------
export const BigWell: React.FC<{cx: number; cy: number; r: number; kind: WellKind; p: number; bg?: 'black' | 'white'; at: number; out?: number; label?: string; labelColor?: string; speck?: number; seed?: number}> = ({cx, cy, r, kind, p, bg = 'black', at, out, label, labelColor = INK, speck = 0, seed = 3}) => (
	<Fade at={at} out={out}>
		<rect x={cx - r * 1.35} y={cy - r * 1.35} width={r * 2.7} height={r * 2.7} rx={r * 0.3} fill={bg === 'black' ? '#1f1f22' : '#ffffff'} stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
		<circle cx={cx} cy={cy} r={r * 1.08} fill="none" stroke="#c9d3da" strokeWidth={r * 0.14} opacity={0.9} />
		<circle cx={cx} cy={cy} r={r} fill={bg === 'black' ? '#141416' : '#fbfbfb'} />
		<Well cx={cx} cy={cy} r={r} kind={kind} p={p} seed={seed} speck={speck} />
		{label ? <Sx x={cx} y={cy + r * 1.35 + 40} text={label} size={30} color={labelColor} anchor="middle" hand at={at} /> : null}
	</Fade>
);

// ---------- painted dropper bottle with a coded colour band and a formula tag under it ----------
export const dbW = (h: number) => picW(DBOTTLE, h);
export const DBottle: React.FC<{x: number; y: number; h: number; formula?: string; at: number; out?: number; band?: string; size?: number; pulse?: number; tilt?: number}> = ({x, y, h, formula, at, out, band, size = 26, pulse, tilt = 0}) => {
	const f = useCurrentFrame();
	const w = dbW(h);
	const s = pulse === undefined ? 1 : pulseAt(f, pulse, 0.08, 24);
	const k = h / DBOTTLE.box[3];
	const lx = x + (1000 - DBOTTLE.box[0]) * k, ly = y + (1300 - DBOTTLE.box[1]) * k;
	return (
		<Fade at={at} out={out}>
			<g transform={`translate(${x + w / 2},${y + h}) rotate(${tilt}) scale(${s}) translate(${-(x + w / 2)},${-(y + h)})`}>
				<Pic p={DBOTTLE} x={x} y={y} h={h} />
				{band ? <rect x={lx - w * 0.3} y={ly - h * 0.03} width={w * 0.6} height={h * 0.06} rx={3} fill={band} opacity={0.85} /> : null}
			</g>
			{formula ? <Sx x={x + w / 2} y={y + h + size + 8} text={formula} size={size} anchor="middle" weight={700} at={-1000} /> : null}
		</Fade>
	);
};
/** A drop falling from (x, y0) to (x, y1). */
export const Drop: React.FC<{x: number; y0: number; y1: number; at: number; n?: number; every?: number; r?: number}> = ({x, y0, y1, at, n = 1, every = 10, r = 8}) => {
	const f = useCurrentFrame();
	return (
		<g>
			{Array.from({length: n}, (_, i) => {
				const u = (f - at - i * every) / 12;
				if (u < 0 || u > 1.1) return null;
				const yy = y0 + (y1 - y0) * Math.min(1, u * u);
				return <path key={i} d={`M${x},${yy - r * 1.6} Q${x + r},${yy - r * 0.2} ${x},${yy + r * 0.6} Q${x - r},${yy - r * 0.2} ${x},${yy - r * 1.6} Z`} fill="#bcd9ec" stroke="#6f9cbd" strokeWidth={2} opacity={u > 1 ? 1 - (u - 1) * 10 : 1} />;
			})}
		</g>
	);
};
/** Highlight a stretch of label text (e.g. the nitrate in Ca(NO3)2) with a grey band. */
export const Band: React.FC<{x: number; y: number; w: number; h: number; at: number; color?: string; out?: number}> = ({x, y, w, h, at, color = '#d9d3c7', out}) => (
	<Fade at={at} out={out}><rect x={x} y={y} width={w} height={h} rx={h / 3} fill={color} /></Fade>
);
/** Pen bracket along a row (horizontal) or down a column (vertical) of wells. */
export const RunBracket: React.FC<{g: PlateG; kind: 'row' | 'col'; i: number; from: number; to: number; at: number; color?: string}> = ({g, kind, i, from, to, at, color = AMBER_INK}) => {
	const r = wellR(g);
	if (kind === 'row') {
		const [x0, y] = wellXY(g, i, from), [x1] = wellXY(g, i, to);
		return <DrawPath d={`M${x0 - r * 1.1},${y + r * 1.15} Q${(x0 + x1) / 2},${y + r * 1.45} ${x1 + r * 1.1},${y + r * 1.15}`} at={at} dur={22} color={color} width={5} />;
	}
	const [x, y0] = wellXY(g, from, i), [, y1] = wellXY(g, to, i);
	return <DrawPath d={`M${x + r * 1.15},${y0 - r * 1.1} Q${x + r * 1.45},${(y0 + y1) / 2} ${x + r * 1.15},${y1 + r * 1.1}`} at={at} dur={22} color={color} width={5} />;
};
export {AMBER, AMBER_INK, INK, INK_SOFT, PEN, DrawPath};
