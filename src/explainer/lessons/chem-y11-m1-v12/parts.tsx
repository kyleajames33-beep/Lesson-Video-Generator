// Drawing parts for Y11 Chem M1 V12 (groups, periods and blocks). Reuses the M1 V11 parts (and through them V10,
// V08, V06, V01 and M2 V06: text, chips, framed answers, pen marks, plates, brackets, readouts, the short table).
// New here, all coded (abstract models): the full periodic grid with the two f-block rows, block tints, element-type
// colouring and lit cells; row, column and region outlines; the table reader (four live readouts read from the
// element's place); plates placed by their bottom centre; and the Stage 5 shell model inside an equal dashed circle.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {CELLS, cellRC, blockOf, readerOf, symOf, typeOfZ} from './common';
import type {Block, PDef} from './common';
import {D_INK, DrawPath, F_INK, INK, NAVY_T, P_INK, Plate, RO, S_INK, Sx, TEAL_INK, lerp, prog, smooth} from '../chem-y11-m1-v11/parts';

export * from '../chem-y11-m1-v11/parts';

// ---------- colour key (design Revision 4, fixed for the whole video) ----------
export const GOLD_T = '#8a6a0e';
export const VIOLET_T = '#5b2aa8';
export const TEAL_T = '#12827b';
export const BINK: Record<Block, string> = {s: S_INK, p: P_INK, d: D_INK, f: F_INK};
/** Block fills strong enough to read at phone size (scene 3); lower tint values give the low-opacity final frame. */
export const BFILL: Record<Block, string> = {s: '#b9d0f1', p: '#bde2c8', d: '#f6d197', f: '#cdd2da'};
export const TYPE_C = {metal: {stroke: INK, fill: '#c9bb9c'}, nonmetal: {stroke: TEAL_T, fill: '#93d3c9'}, metalloid: {stroke: VIOLET_T, fill: '#c6aef0'}, none: {stroke: INK, fill: '#fffdf8'}} as const;

// ---------- grid geometry ----------
export type PG = {x: number; y: number; cw: number; ch: number; fg?: number};
export const lerpG = (a: PG, b: PG, t: number): PG => ({x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t), cw: lerp(a.cw, b.cw, t), ch: lerp(a.ch, b.ch, t), fg: lerp(a.fg ?? a.ch * 0.3, b.fg ?? b.ch * 0.3, t)});
const fgap = (g: PG) => g.fg ?? g.ch * 0.3;
/** Top-left of row r (1 to 9) and column c. */
export const rcXY = (g: PG, r: number, c: number): [number, number] => [g.x + (c - 1) * g.cw, r <= 7 ? g.y + (r - 1) * g.ch : g.y + 7 * g.ch + fgap(g) + (r - 8) * g.ch];
export const cellXY = (g: PG, z: number): [number, number] => { const [, r, c] = cellRC(z); return rcXY(g, r, c); };
export const cellC = (g: PG, z: number): [number, number] => { const [x, y] = cellXY(g, z); return [x + g.cw / 2, y + g.ch / 2]; };
/** Box round rows r0..r1 of columns c0..c1 (main table rows only). */
export const boxRC = (g: PG, r0: number, r1: number, c0: number, c1: number) => {
	const [x0, y0] = rcXY(g, r0, c0);
	return {x: x0, y: y0, w: (c1 - c0 + 1) * g.cw, h: (r1 - r0 + 1) * g.ch};
};
export const gridBottom = (g: PG, fRows = true) => (fRows ? g.y + 9 * g.ch + fgap(g) : g.y + 7 * g.ch);

export type GridOpts = {
	g: PG;
	o?: number;
	/** block tint strength 0..1 per block */
	tint?: Partial<Record<Block, number>>;
	/** element-type colouring 0..1 (metal, metalloid, non-metal) */
	types?: number;
	/** symbol opacity 0..1 (0: the plain outline) */
	sym?: number;
	symSize?: number;
	/** f-block rows opacity */
	fRows?: number;
	/** main rows shown (periods 1..maxP) */
	maxP?: number;
	sw?: number;
	/** atomic-number size (0: none); with it the symbol sits low in the cell, as on V11's table */
	zs?: number;
};
const mixHex = (a: string, b: string, t: number) => {
	const pa = parseInt(a.slice(1), 16), pb = parseInt(b.slice(1), 16);
	const ch = (s: number) => Math.round((((pa >> s) & 255) * (1 - t)) + (((pb >> s) & 255) * t));
	return '#' + [16, 8, 0].map(s => ch(s).toString(16).padStart(2, '0')).join('');
};
/** The full periodic grid in dark ink; tints, type colours and symbols are opacity-driven so they can sweep in. */
export const PGrid: React.FC<GridOpts> = ({g, o = 1, tint = {}, types = 0, sym = 0, symSize, fRows = 1, maxP = 7, sw, zs = 0}) => {
	if (o <= 0.005) return null;
	const ss = symSize ?? Math.max(18, Math.round(g.ch * 0.46));
	const stroke = sw ?? Math.max(2.6, Math.min(3.5, g.cw / 22));
	return (
		<g opacity={o}>
			{CELLS.filter(c => (c[1] <= 7 ? c[1] <= maxP : fRows > 0.005)).map(([z, r]) => {
				const [x, y] = cellXY(g, z);
				const b = blockOf(z), t = Math.max(0, Math.min(1, tint[b] ?? 0));
				let fill = mixHex('#fffdf8', BFILL[b], t);
				let st = INK;
				if (types > 0.001) {
					const ty = TYPE_C[typeOfZ(z)];
					fill = mixHex(fill, ty.fill, types);
					st = types > 0.5 ? ty.stroke : INK;
				}
				const fo = r >= 8 ? fRows : 1;
				return (
					<g key={z} opacity={fo}>
						<rect x={x} y={y} width={g.cw} height={g.ch} fill={fill} stroke={st} strokeWidth={stroke} />
						{sym > 0.005 && zs > 0 ? <Sx x={x + 5} y={y + zs + 1} text={`${z}`} size={zs} color={INK} weight={700} at={-1000} opacity={sym} /> : null}
						{sym > 0.005 ? <Sx x={x + g.cw / 2} y={zs > 0 ? y + g.ch * 0.8 : y + g.ch / 2 + ss * 0.36} text={symOf(z)} size={ss} color={INK} anchor="middle" weight={800} at={-1000} opacity={sym} /> : null}
					</g>
				);
			})}
			{types > 0.5 ? CELLS.filter(c => typeOfZ(c[0]) !== 'metal' && typeOfZ(c[0]) !== 'none' && c[1] <= maxP).map(([z]) => {
				// redraw coloured outlines on top so shared edges show the type colour
				const [x, y] = cellXY(g, z);
				return <rect key={'t' + z} x={x} y={y} width={g.cw} height={g.ch} fill="none" stroke={TYPE_C[typeOfZ(z)].stroke} strokeWidth={stroke + 1.5} />;
			}) : null}
		</g>
	);
};

/** A lit cell: coloured frame and fill, the symbol, and an optional second line (a configuration ending or a word). */
export const LitCell: React.FC<{g: PG; z: number; at: number; out?: number; color: string; fill: string; sub?: string; subColor?: string; pop?: number; symSize?: number; subSize?: number; noSym?: boolean}> = ({g, z, at, out, color, fill, sub, subColor, pop = 1.2, symSize, subSize, noSym}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 10) * (out === undefined ? 1 : 1 - prog(f, out, 10));
	if (v <= 0.005) return null;
	const [x, y] = cellXY(g, z);
	const s = 1 + (pop - 1) * smooth(prog(f, at, 12));
	const cx = x + g.cw / 2, cy = y + g.ch / 2;
	const ss = symSize ?? Math.max(20, Math.round(g.ch * (sub ? 0.4 : 0.5)));
	const bs = subSize ?? Math.max(26, Math.round(g.ch * 0.34));
	return (
		<g opacity={v} transform={`translate(${cx},${cy}) scale(${s}) translate(${-cx},${-cy})`}>
			<rect x={x} y={y} width={g.cw} height={g.ch} rx={5} fill={fill} stroke={color} strokeWidth={4.5} />
			{noSym ? null : <Sx x={cx} y={sub ? y + g.ch * 0.46 : cy + ss * 0.36} text={symOf(z)} size={ss} color={INK} anchor="middle" weight={800} at={-1000} />}
			{sub ? <Sx x={cx} y={y + g.ch * 0.88} text={sub} size={bs} color={subColor ?? color} anchor="middle" weight={800} at={-1000} /> : null}
		</g>
	);
};

/** A rectangle outline that draws on (pen), then holds. */
export const DrawBox: React.FC<{x: number; y: number; w: number; h: number; at: number; out?: number; color?: string; width?: number; pad?: number; dur?: number}> = ({x, y, w, h, at, out, color = INK, width = 6, pad = 4, dur = 20}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (o <= 0.005) return null;
	const X = x - pad, Y = y - pad, W = w + 2 * pad, H = h + 2 * pad;
	return <g opacity={o}><DrawPath d={`M${X},${Y} L${X + W},${Y} L${X + W},${Y + H} L${X},${Y + H} Z`} at={at} dur={dur} color={color} width={width} /></g>;
};

/** A plate placed by its bottom centre (uniform scale). */
export const PlateB: React.FC<{p: PDef; cx: number; bottom: number; h: number; at?: number; out?: number; o?: number; dy?: number}> = ({p, cx, bottom, h, at, out, o, dy}) => {
	const w = (h / p.box[3]) * p.box[2];
	return <Plate p={p} x={cx - w / 2} y={bottom - h} h={h} at={at} out={out} o={o} dy={dy} />;
};

// ---------- the table reader ----------
export type ReaderLayout = {x: number; y: number; w: number; dx?: number; dy?: number; cols?: number};
/** Four live readouts read from the element's place in the table (period, group, block, valence electrons). */
export const Reader: React.FC<{z: number; L: ReaderLayout; o?: number; size?: number; q?: boolean}> = ({z, L, o = 1, size = 52, q = false}) => {
	if (o <= 0.005) return null;
	const r = readerOf(z);
	const items: {label: string; text: string; color: string}[] = [
		{label: 'period', text: q ? '?' : `${r.period}`, color: NAVY_T},
		{label: 'group', text: q ? '?' : `${r.group}`, color: GOLD_T},
		{label: 'block', text: q ? '?' : r.block, color: q ? INK : BINK[r.block]},
		{label: 'valence electrons', text: q ? '?' : `${r.valence}`, color: INK},
	];
	const cols = L.cols ?? 4, dx = L.dx ?? L.w + 24, dy = L.dy ?? size * 1.45 + 56;
	return (
		<g opacity={o}>
			{items.map((it, i) => <RO key={i} x={L.x + (i % cols) * dx} y={L.y + Math.floor(i / cols) * dy} w={L.w} label={it.label} text={it.text} color={it.color} size={size} />)}
		</g>
	);
};
/** Element (atomic number) the reader is on at frame f: steps [frame, z] in order. */
export const stepZ = (f: number, steps: [number, number][]) => { let z = steps[0][1]; for (const [at, zz] of steps) if (f >= at) z = zz; return z; };

// ---------- Stage 5 shell model inside an equal dashed circle (final frame) ----------
export const ShellModel: React.FC<{cx: number; cy: number; Rc: number; counts: number[]; at: number; label?: string; labelSide?: 'top' | 'left'}> = ({cx, cy, Rc, counts, at, label = 'radius?', labelSide = 'top'}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const p = prog(f, at, 30), n = counts.length;
	const circ = 2 * Math.PI * Rc;
	return (
		<g opacity={Math.min(1, p * 3)}>
			<circle cx={cx} cy={cy} r={Rc} fill="#fffdf8" stroke={INK} strokeWidth={3.5} strokeDasharray="11 8" strokeDashoffset={circ * (1 - smooth(p))} />
			{counts.map((k, i) => {
				const r = (Rc * 0.84 * (i + 1)) / n;
				const rp = prog(f, at + 6 + i * 4, 12);
				return (
					<g key={i} opacity={rp}>
						<circle cx={cx} cy={cy} r={r} fill="none" stroke="#6b6358" strokeWidth={2.5} />
						{Array.from({length: k}, (_, j) => {
							const a = -Math.PI / 2 + (j / k) * Math.PI * 2 + i * 0.4;
							return <circle key={j} cx={cx + r * Math.cos(a)} cy={cy + r * Math.sin(a)} r={5.5} fill="#2f6fd0" stroke="#1f4f9e" strokeWidth={1.5} />;
						})}
					</g>
				);
			})}
			<circle cx={cx} cy={cy} r={8} fill="#c95a4c" stroke="#6b6358" strokeWidth={2.5} />
			<g opacity={prog(f, at + 18, 12)}>
				<line x1={cx} y1={cy} x2={cx + Rc * 0.94} y2={cy - Rc * 0.34} stroke={INK} strokeWidth={2.5} strokeDasharray="6 5" />
				<Sx x={cx + Rc + 8} y={cy - Rc * 0.3} text="?" size={34} color={INK} weight={800} at={-1000} />
				{labelSide === 'top' ? <Sx x={cx} y={cy - Rc - 12} text={label} size={28} color={INK} anchor="middle" weight={800} at={-1000} /> : <Sx x={cx - Rc - 12} y={cy + 10} text={label} size={28} color={INK} anchor="end" weight={800} at={-1000} />}
			</g>
		</g>
	);
};
void TEAL_INK;
