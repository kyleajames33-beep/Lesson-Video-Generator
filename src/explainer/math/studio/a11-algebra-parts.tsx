// Year 11 Advanced kit, wave 1 (brief 245): algebra parts for w01 to w04, w15 and g06 (maths-a11-kit-needs.md
// items 1 to 3). FactorStack (index laws as tiles), AlgebraTileGrid (expand and factorise as one rectangle, with
// signed tiles), CompleteSquareTiles (the missing corner) and RootExtract (a square steps out of the root).
// Frame-driven only: every state is a pure function of useCurrentFrame and the props.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, FrameSvg, PlateSpec, SvgPlate, smooth, vis} from './primitives';
import {MATH_ANSWER, MATH_EXCLUDED, MATH_MISTAKE, MATH_ROLES, Pow, RoleKey, roleInk} from './roles';
import {TXT} from './plot-core';
import {Radical, squareSplit} from './exact-surd';

const MINUS = '−';
const hexA = (h: string, a: number) => {
	const n = parseInt(h.slice(1), 16);
	return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
};
const lerp = (a: number, b: number, u: number) => a + (b - a) * u;
const hand = (size: number, color: string): React.CSSProperties => ({fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, fill: color} as React.CSSProperties);

// =====================================================================================================
// FactorStack (w01)
// =====================================================================================================
export type FactorStackMode =
	/** One row of `left` tiles, or two groups (left and right) that slide together into one row at joinAt. */
	| {kind: 'join'; left: number; right?: number; joinAt?: number}
	/** `top` tiles over a fraction bar, `bottom` under it; pairs strike in red from cancelAt, survivors close up. */
	| {kind: 'cancel'; top: number; bottom: number; cancelAt: number; fillAt?: number}
	/** `groups` bracketed groups of `per` tiles (a power of a power). */
	| {kind: 'group'; groups: number; per: number; stagger?: number};

/** The index the stack shows once settled: the label is computed from the tiles, never typed. */
export const factorStackIndex = (m: FactorStackMode) => m.kind === 'join' ? m.left + (m.right ?? 0) : m.kind === 'cancel' ? m.top - m.bottom : m.groups * m.per;

/**
 * Index laws as tiles: identical base tiles (role colour, default blue) joined with × (multiply), struck in pairs
 * across a fraction bar (divide), or bracketed in groups (power of a power). The label base^index is computed
 * from the surviving tiles (top minus bottom), so it cannot disagree with the picture. When every tile cancels,
 * the empty bar fills with a large green 1 at fillAt. `cx` is the centre of the stack, `y` its top.
 */
export const FactorStack: React.FC<{
	cx: number; y: number; mode: FactorStackMode; base?: string; tile?: number; at?: number; out?: number;
	role?: RoleKey; indexRole?: RoleKey;
	/** The computed label base^index (blue base, amber index) to the right of the stack, or at (x, y). */
	label?: {at: number; x?: number; y?: number; size?: number};
	/** A brace under the row with a hand tag (default "n factors"). Join and group modes. */
	brace?: {at: number; text?: string; role?: RoleKey};
}> = ({cx, y, mode, base = '3', tile = 90, at = 0, out, role = 'a', indexRole = 'k', label, brace}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const R = MATH_ROLES[role];
	const gap = tile * 0.55;
	type T = {x: number; y: number; o: number; strike?: number; lift?: number};
	const tiles: T[] = [];
	const times: {x: number; y: number; o: number; size?: number}[] = [];
	const brackets: {x1: number; x2: number; y: number; o: number}[] = [];
	let rowW = tile, rowY = y, extra: React.ReactNode = null;
	const rowXs = (n: number, centre: number) => Array.from({length: n}, (_, i) => centre - ((n - 1) * (tile + gap)) / 2 + i * (tile + gap));
	if (mode.kind === 'join') {
		const L = mode.left, Rn = mode.right ?? 0, n = L + Rn;
		const u = mode.joinAt === undefined || !Rn ? 1 : smooth(Math.min(1, Math.max(0, (f - mode.joinAt) / 24)));
		const post = rowXs(n, cx);
		const G = tile * 1.3;
		const preW = n * tile + (n - 2) * gap + G;
		const pre = Array.from({length: n}, (_, i) => cx - preW / 2 + tile / 2 + i * (tile + gap) + (i >= L ? G - gap : 0));
		const xs = Rn ? post.map((p, i) => lerp(pre[i], p, u)) : post;
		xs.forEach(x => tiles.push({x, y, o: 1}));
		for (let i = 0; i + 1 < n; i++) times.push({x: (xs[i] + xs[i + 1]) / 2, y: y + tile / 2, o: 1, size: i === L - 1 && Rn ? lerp(1.35, 1, u) : 1});
		rowW = (n - 1) * (tile + gap) + tile;
	} else if (mode.kind === 'group') {
		const st = mode.stagger ?? 8;
		const bw = tile * 0.42, gw = mode.per * tile + (mode.per - 1) * gap + 2 * bw, ggap = tile * 0.7;
		const total = mode.groups * gw + (mode.groups - 1) * ggap;
		for (let g = 0; g < mode.groups; g++) {
			const go = prog(f, at + g * st, 14);
			const gx = cx - total / 2 + g * (gw + ggap);
			for (let k = 0; k < mode.per; k++) {
				const x = gx + bw + tile / 2 + k * (tile + gap);
				tiles.push({x, y, o: go, lift: (1 - go) * 24});
				if (k + 1 < mode.per) times.push({x: x + (tile + gap) / 2, y: y + tile / 2, o: go});
			}
			brackets.push({x1: gx + bw * 0.55, x2: gx + gw - bw * 0.55, y, o: go});
			if (g + 1 < mode.groups) times.push({x: gx + gw + ggap / 2, y: y + tile / 2, o: go, size: 1.2});
		}
		rowW = total;
	} else {
		const {top, bottom, cancelAt} = mode;
		const k = Math.min(top, bottom);
		const fadeAt = cancelAt + k * 8 + 14;
		const u = k ? smooth(Math.min(1, Math.max(0, (f - fadeAt) / 20))) : 0;
		const barY = y + tile + 22, botY = barY + 22;
		const place = (n: number, yy: number) => {
			const full = rowXs(n, cx), surv = rowXs(n - k, cx);
			full.forEach((x0, i) => {
				const struck = i < k;
				const strike = struck ? prog(f, cancelAt + i * 8, 10) : 0;
				tiles.push({x: struck ? x0 : lerp(x0, surv[i - k], u), y: yy, o: struck ? 1 - prog(f, fadeAt, 12) : 1, strike});
			});
			for (let i = 0; i + 1 < n; i++) {
				const a = tiles[tiles.length - n + i], b = tiles[tiles.length - n + i + 1];
				times.push({x: (a.x + b.x) / 2, y: yy + tile / 2, o: Math.min(a.o, b.o)});
			}
		};
		place(top, y);
		place(bottom, botY);
		const wOf = (n: number) => Math.max(1, n) * tile + Math.max(0, n - 1) * gap;
		const barW = lerp(wOf(Math.max(top, bottom)), wOf(Math.max(top - k, bottom - k)), u) + 30;
		const topLeft = top - k, botLeft = bottom - k;
		const fillAt = mode.fillAt ?? fadeAt + 26;
		const barO = botLeft === 0 && topLeft > 0 ? 1 - u : topLeft === 0 && botLeft === 0 ? 1 - prog(f, fillAt, 12) : 1;
		const oneTop = topLeft === 0 && botLeft > 0 ? prog(f, fadeAt + 14, 12) : 0;
		const fill = topLeft === 0 && botLeft === 0 ? prog(f, fillAt, 14) : 0;
		extra = (
			<g>
				<line x1={cx - barW / 2} x2={cx + barW / 2} y1={barY} y2={barY} stroke={INK} strokeWidth={6} strokeLinecap="round" opacity={barO} />
				{oneTop > 0 ? <text x={cx} y={y + tile * 0.78} textAnchor="middle" style={TXT(tile * 0.8, R.ink, 800)} opacity={oneTop}>1</text> : null}
				{fill > 0 ? <g opacity={fill} transform={`translate(${cx},${barY}) scale(${0.6 + 0.4 * fill})`}>
					<text x={0} y={tile * 0.42} textAnchor="middle" style={TXT(tile * 1.3, MATH_ANSWER, 800)}>1</text>
				</g> : null}
			</g>
		);
		rowW = wOf(Math.max(top, bottom));
		rowY = y;
	}
	const index = factorStackIndex(mode);
	const lab = label ? prog(f, label.at, 14) : 0;
	const labX = label?.x ?? cx + rowW / 2 + 70;
	const labY = label?.y ?? (mode.kind === 'cancel' ? y + tile + 22 : y + tile / 2);
	const labSize = label?.size ?? 64;
	const brO = brace ? prog(f, brace.at, 16) : 0;
	const bc = MATH_ROLES[brace?.role ?? indexRole];
	const count = mode.kind === 'cancel' ? mode.top : index;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o, pointerEvents: 'none'}}>
			<FrameSvg>
				{extra}
				{tiles.map((t, i) => t.o > 0.001 ? (
					<g key={i} opacity={t.o} transform={`translate(0,${-(t.lift ?? 0)})`}>
						<rect x={t.x - tile / 2} y={t.y} width={tile} height={tile} rx={tile * 0.16} fill={R.soft} stroke={R.stroke} strokeWidth={4} />
						<text x={t.x} y={t.y + tile * 0.7} textAnchor="middle" style={TXT(tile * 0.56, t.strike && t.strike > 0.5 ? INK_SOFT : R.ink, 800)}>{base}</text>
						{t.strike ? <path d={`M${t.x - tile * 0.42},${t.y + tile * 0.88} L${t.x + tile * 0.42},${t.y + tile * 0.12}`} stroke={MATH_MISTAKE} strokeWidth={7} strokeLinecap="round" fill="none" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - t.strike} /> : null}
					</g>
				) : null)}
				{times.map((t, i) => t.o > 0.001 ? <text key={'x' + i} x={t.x} y={t.y + tile * 0.16 * (t.size ?? 1)} textAnchor="middle" opacity={t.o} style={TXT(tile * 0.42 * (t.size ?? 1), INK_SOFT, 700)}>×</text> : null)}
				{brackets.map((b, i) => b.o > 0.001 ? <g key={'b' + i} opacity={b.o} fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round">
					<path d={`M${b.x1 + 10},${b.y - 8} Q${b.x1 - 10},${b.y + tile / 2} ${b.x1 + 10},${b.y + tile + 8}`} />
					<path d={`M${b.x2 - 10},${b.y - 8} Q${b.x2 + 10},${b.y + tile / 2} ${b.x2 - 10},${b.y + tile + 8}`} />
				</g> : null)}
				{brace && brO > 0 ? <g opacity={brO}>
					<path d={`M${cx - rowW / 2},${rowY + tile + 18} Q${cx - rowW / 2},${rowY + tile + 38} ${cx - rowW / 2 + 24},${rowY + tile + 38} L${cx - 22},${rowY + tile + 38} Q${cx},${rowY + tile + 38} ${cx},${rowY + tile + 58} Q${cx},${rowY + tile + 38} ${cx + 22},${rowY + tile + 38} L${cx + rowW / 2 - 24},${rowY + tile + 38} Q${cx + rowW / 2},${rowY + tile + 38} ${cx + rowW / 2},${rowY + tile + 18}`} fill="none" stroke={bc.stroke} strokeWidth={5} strokeLinecap="round" />
					<text x={cx} y={rowY + tile + 106} textAnchor="middle" style={hand(46, bc.ink)}>{brace.text ?? `${count} factors`}</text>
				</g> : null}
			</FrameSvg>
			{lab > 0 ? (
				<div style={{position: 'absolute', left: labX, top: labY - labSize * 0.62, opacity: lab, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: labSize, whiteSpace: 'pre', transform: `translateY(${(1 - lab) * 12}px)`}}>
					<span style={{color: R.ink}}>{base}</span><Pow><span style={{color: roleInk(indexRole)}}>{index < 0 ? MINUS + Math.abs(index) : index}</span></Pow>
				</div>
			) : null}
		</div>
	);
};

// =====================================================================================================
// AlgebraTileGrid (w02, w03, w04)
// =====================================================================================================
/** One term of a bracket: coef × sym (sym omitted for a number). `len` overrides the drawn length in units. */
export type TileTerm = {coef: number; sym?: string; len?: number};

const termLen = (t: TileTerm, values: Record<string, number>) => t.len ?? Math.abs(t.coef) * (t.sym ? (values[t.sym] ?? 1) : 1);
const symsKey = (syms: string[]) => {
	const c = new Map<string, number>();
	for (const s of syms) c.set(s, (c.get(s) ?? 0) + 1);
	return [...c.entries()].sort((a, b) => (a[0] < b[0] ? -1 : 1)).map(([s, n]) => (n === 1 ? s : `${s}${n === 2 ? '²' : n === 3 ? '³' : '^' + n}`)).join('');
};
const termText = (coef: number, key: string, first: boolean) => {
	const a = Math.abs(coef);
	const body = key ? (a === 1 ? key : `${a}${key}`) : String(a);
	return coef < 0 ? (first ? MINUS + body : ` ${MINUS} ${body}`) : first ? body : ` + ${body}`;
};
/** Side label of a bracket: "x + 1", "2x + 1", "a − b". */
export const bracketText = (terms: readonly TileTerm[]) => terms.map((t, i) => termText(t.coef, t.sym ?? '', i === 0)).join('');
/** The product of two terms as written in its cell: "x²", "3x", "−ab", "3". */
export const cellText = (r: TileTerm, c: TileTerm) => termText(r.coef * c.coef, symsKey([r.sym, c.sym].filter(Boolean) as string[]), true);
const degree = (r: TileTerm, c: TileTerm) => (r.sym ? 1 : 0) + (c.sym ? 1 : 0);
/** Expanded and collected: tiles (x + 1)(x + 3) give "x² + 4x + 3". Highest degree first. */
export const expandTiles = (rows: readonly TileTerm[], cols: readonly TileTerm[]) => {
	const acc = new Map<string, {coef: number; deg: number}>();
	for (const r of rows) for (const c of cols) {
		const key = symsKey([r.sym, c.sym].filter(Boolean) as string[]);
		const e = acc.get(key) ?? {coef: 0, deg: degree(r, c)};
		e.coef += r.coef * c.coef;
		acc.set(key, e);
	}
	const list = [...acc.entries()].filter(([, e]) => e.coef !== 0).sort((a, b) => b[1].deg - a[1].deg || (a[0] < b[0] ? -1 : 1));
	return list.length ? list.map(([k, e], i) => termText(e.coef, k, i === 0)).join('') : '0';
};
/** Numeric total of all cell areas at given values (signed). Equals product of the bracket values. */
export const tileGridValue = (rows: readonly TileTerm[], cols: readonly TileTerm[], values: Record<string, number>) => {
	const v = (t: TileTerm) => t.coef * (t.sym ? values[t.sym] ?? NaN : 1);
	return rows.reduce((a, r) => a + v(r), 0) * cols.reduce((a, c) => a + v(c), 0);
};

const DEG_FILL = ['#f8e8c8', '#d6eeee', '#efe7d8'];
const DEG_STROKE = ['#d18f1f', '#1f8a8f', INK];

/**
 * A rectangle split into labelled regions, one per pair of bracket terms (rows down the left, columns across the
 * top). Region sizes come from `values` (drive values.x from a timeline to resize it live); signed regions (negative
 * products) are hatched and labelled with their minus. Reads forward as expanding and backward as factorising.
 * Options: split lines draw at splitAt; region labels write in turn from cellAt; the off-diagonal (middle) regions
 * tint violet at middles.at; opposite middles slide together and vanish at cancelMiddles.at; `assemble` flies
 * every unit piece (x² squares, x strips, unit squares) in from a loose pile and snaps it into the rectangle.
 * `cellLabels` replaces the computed labels (a surd grid such as 5, −3√5, 2√5, −6 in w03); `cellSize` fixes
 * equal cells in px for such grids. A plate can sit under the grid (positioning is the author's job).
 */
export const AlgebraTileGrid: React.FC<{
	x: number; y: number; unit?: number; values?: Record<string, number>;
	rows: readonly TileTerm[]; cols: readonly TileTerm[];
	at?: number; out?: number; splitAt?: number; cellAt?: number; cellStagger?: number; labelSize?: number;
	cellLabels?: readonly (readonly React.ReactNode[])[]; cellSize?: number;
	sides?: {at: number; role?: RoleKey; rowText?: string; colText?: string; size?: number};
	middles?: {at: number; role?: RoleKey};
	cancelMiddles?: {at: number; role?: RoleKey};
	pieces?: boolean;
	assemble?: {at: number; pile: {x: number; y: number; w: number}; stagger?: number; dur?: number; showAt?: number};
	plate?: {spec: PlateSpec; x: number; y: number; w: number; opacity?: number};
}> = ({x, y, unit = 90, values = {x: 3}, rows, cols, at = 0, out, splitAt, cellAt, cellStagger = 10, labelSize = 44, cellLabels, cellSize, sides, middles, cancelMiddles, pieces, assemble, plate}) => {
	const f = useCurrentFrame();
	const o = vis(f, assemble ? Math.min(at, assemble.showAt ?? assemble.at) : at, out, 14);
	if (o <= 0.001) return null;
	const ws = cols.map(c => (cellSize ?? termLen(c, values) * unit));
	const hs = rows.map(r => (cellSize ?? termLen(r, values) * unit));
	const xs = ws.reduce<number[]>((a, w) => [...a, a[a.length - 1] + w], [x]);
	const ys = hs.reduce<number[]>((a, h) => [...a, a[a.length - 1] + h], [y]);
	const W = xs[xs.length - 1] - x, Hh = ys[ys.length - 1] - y;
	const split = splitAt === undefined ? 1 : prog(f, splitAt, 18);
	const mid = middles ? prog(f, middles.at, 14) : 0;
	const midR = MATH_ROLES[middles?.role ?? 'gradient'];
	const canR = MATH_ROLES[cancelMiddles?.role ?? 'gradient'];
	const can = cancelMiddles ? smooth(Math.min(1, Math.max(0, (f - cancelMiddles.at) / 26))) : 0;
	const canOut = cancelMiddles ? prog(f, cancelMiddles.at + 26, 14) : 0;
	const isMid = (i: number, j: number) => rows.length === 2 && cols.length === 2 && i !== j;
	const pid = `hatch-${x}-${y}`.replace(/\./g, '_');
	// Unit pieces for assemble / pieces.
	type Piece = {tx: number; ty: number; w: number; h: number; deg: number; neg: boolean; k: number};
	const piecesList: Piece[] = [];
	if (assemble || pieces) {
		rows.forEach((r, i) => cols.forEach((c, j) => {
			const nr = r.sym ? Math.max(1, Math.round(Math.abs(r.coef))) : 1, nc = c.sym ? Math.max(1, Math.round(Math.abs(c.coef))) : 1;
			const sr = r.sym ? 1 : Math.max(1, Math.round(Math.abs(r.coef))), sc = c.sym ? 1 : Math.max(1, Math.round(Math.abs(c.coef)));
			const pr = nr * sr, pc = nc * sc;
			for (let a = 0; a < pr; a++) for (let b = 0; b < pc; b++) piecesList.push({tx: xs[j] + (b * ws[j]) / pc, ty: ys[i] + (a * hs[i]) / pr, w: ws[j] / pc, h: hs[i] / pr, deg: degree(r, c), neg: r.coef * c.coef < 0, k: piecesList.length});
		}));
	}
	let pileEls: React.ReactNode = null;
	if (assemble) {
		const order = [...piecesList].sort((a, b) => b.deg - a.deg || b.h - a.h);
		let px = assemble.pile.x, py = assemble.pile.y, lineH = 0;
		const st = assemble.stagger ?? 5, dur = assemble.dur ?? 22;
		pileEls = order.map((p, n) => {
			const pw = p.deg === 1 && p.h > p.w ? p.h : p.w, ph = p.deg === 1 && p.h > p.w ? p.w : p.h; // strips lie flat in the pile
			if (px + pw > assemble.pile.x + assemble.pile.w) {px = assemble.pile.x; py += lineH + 18; lineH = 0;}
			const sx = px, sy = py;
			px += pw + 14; lineH = Math.max(lineH, ph);
			const u = smooth(Math.min(1, Math.max(0, (f - assemble.at - n * st) / dur)));
			const rot = p.deg === 1 && p.h > p.w ? 1 - u : 0; // turn the strip upright as it flies
			const cxp = lerp(sx + pw / 2, p.tx + p.w / 2, u), cyp = lerp(sy + ph / 2, p.ty + p.h / 2, u);
			return (
				<g key={p.k} transform={`translate(${cxp},${cyp}) rotate(${rot * 90})`}>
					<rect x={-p.w / 2} y={-p.h / 2} width={p.w} height={p.h} fill={DEG_FILL[p.deg]} stroke={DEG_STROKE[p.deg]} strokeWidth={3} />
					{p.neg ? <rect x={-p.w / 2} y={-p.h / 2} width={p.w} height={p.h} fill={`url(#${pid})`} /> : null}
				</g>
			);
		});
	}
	const landed = assemble ? prog(f, assemble.at + piecesList.length * (assemble.stagger ?? 5) + (assemble.dur ?? 22), 12) : 1;
	const sideO = sides ? prog(f, sides.at, 14) : 0;
	const SR = MATH_ROLES[sides?.role ?? 'a'];
	const sideSize = sides?.size ?? 44;
	return (
		<FrameSvg style={{opacity: o}}>
			<defs>
				<pattern id={pid} width={14} height={14} patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
					<line x1={0} y1={0} x2={0} y2={14} stroke="rgba(38,35,31,0.30)" strokeWidth={4} />
				</pattern>
			</defs>
			{plate ? <SvgPlate plate={plate.spec} x={plate.x} y={plate.y} w={plate.w} opacity={plate.opacity ?? 1} /> : null}
			<g opacity={landed}>
				{rows.map((r, i) => cols.map((c, j) => {
					const deg = degree(r, c), neg = r.coef * c.coef < 0;
					const m = isMid(i, j) ? mid : 0;
					const gone = isMid(i, j) ? canOut : 0;
					return (
						<g key={`${i}-${j}`} opacity={1 - 0.85 * gone}>
							<rect x={xs[j]} y={ys[i]} width={ws[j]} height={hs[i]} fill={m > 0 ? midR.soft : DEG_FILL[deg]} />
							{neg ? <rect x={xs[j]} y={ys[i]} width={ws[j]} height={hs[i]} fill={`url(#${pid})`} /> : null}
						</g>
					);
				}))}
				{pieces && !assemble ? piecesList.map(p => <rect key={'p' + p.k} x={p.tx} y={p.ty} width={p.w} height={p.h} fill="none" stroke="rgba(38,35,31,0.35)" strokeWidth={2} />) : null}
				<rect x={x} y={y} width={W} height={Hh} fill="none" stroke={INK} strokeWidth={5} />
				{xs.slice(1, -1).map((lx, i) => <line key={'v' + i} x1={lx} x2={lx} y1={y} y2={y + Hh * split} stroke={INK} strokeWidth={3.5} />)}
				{ys.slice(1, -1).map((ly, i) => <line key={'h' + i} x1={x} x2={x + W * split} y1={ly} y2={ly} stroke={INK} strokeWidth={3.5} />)}
			</g>
			{pileEls}
			{rows.map((r, i) => cols.map((c, j) => {
				const n = i * cols.length + j;
				const lo = cellAt === undefined ? (assemble ? landed : 1) : prog(f, cellAt + n * cellStagger, 12);
				if (lo <= 0.001) return null;
				let cx = xs[j] + ws[j] / 2, cy = ys[i] + hs[i] / 2;
				let lo2 = lo;
				if (cancelMiddles && isMid(i, j) && can > 0) {
					const mx = (xs[1] + ws[1] / 2 + xs[0] + ws[0] / 2) / 2, my = (ys[0] + hs[0] / 2 + ys[1] + hs[1] / 2) / 2;
					cx = lerp(cx, mx + (j === 1 ? 1 : -1) * labelSize * 1.2, can); cy = lerp(cy, my, can);
					lo2 = lo * (1 - canOut);
				}
				const isM = isMid(i, j) && mid > 0.5;
				const col = isM ? midR.ink : INK;
				const fs = Math.min(labelSize, Math.max(26, Math.min(ws[j], hs[i]) * 0.55));
				const content = cellLabels?.[i]?.[j];
				return (
					<foreignObject key={'l' + n} x={cx - 260} y={cy - fs * 0.75} width={520} height={fs * 1.5} opacity={lo2} style={{overflow: 'visible'}}>
						<div style={{width: 520, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: fs, color: col, lineHeight: 1.5, whiteSpace: 'pre'}}><span style={{background: 'rgba(255,253,248,0.82)', borderRadius: 10, padding: '0 0.18em'}}>{content ?? cellText(r, c)}</span></div>
					</foreignObject>
				);
			}))}
			{cancelMiddles && can > 0.6 ? (() => {
				const mx = (xs[1] + ws[1] / 2 + xs[0] + ws[0] / 2) / 2, my = (ys[0] + hs[0] / 2 + ys[1] + hs[1] / 2) / 2;
				const d = labelSize * 2.6;
				return <g opacity={1 - canOut}><DrawPath d={`M${mx - d},${my + 10} Q${mx},${my - 16} ${mx + d},${my - 6}`} at={cancelMiddles.at + 16} dur={12} color={canR.stroke} width={7} /></g>;
			})() : null}
			{sides && sideO > 0 ? <g opacity={sideO}>
				<text x={x + W / 2} y={y - 22} textAnchor="middle" style={TXT(sideSize, SR.ink, 800)}>{sides.colText ?? bracketText(cols)}</text>
				<text x={x - 22} y={y + Hh / 2 + sideSize * 0.35} textAnchor="end" style={TXT(sideSize, SR.ink, 800)}>{sides.rowText ?? bracketText(rows)}</text>
			</g> : null}
		</FrameSvg>
	);
};

// =====================================================================================================
// CompleteSquareTiles (w04, w15, g06)
// =====================================================================================================
const fmtHalf = (v: number) => {
	const r = Math.round(v * 2) / 2;
	const s = Number.isInteger(r) ? String(Math.abs(r)) : `${Math.abs(r * 2)}/2`;
	return {s, neg: r < 0};
};
/** Text of (x + b/2): "x + 1", "x − 3". */
export const completedSide = (b: number, sym = 'x') => {
	const h = fmtHalf(b / 2);
	return `${sym} ${h.neg ? MINUS : '+'} ${h.s}`;
};
/** The corner (b/2)² as text: 1, 9, 9/4. */
export const cornerText = (b: number) => {
	const q = (b / 2) ** 2;
	if (Number.isInteger(q)) return String(q);
	const num = b * b;
	return `${num}/4`;
};

/**
 * Completing the square with tiles: an x² square and a b-by-x strip (signed and hatched when b < 0). At splitAt
 * the strip halves; at moveAt one half swings round to the bottom; at gapAt a dashed corner (b/2)² blinks; at
 * fillAt it fills (violet by default) and, at labelAt, the sides read "x + b/2". `offset` shows the matching
 * "− (b/2)²" tile outside in grey (w15: + 9 − 9, no change). Tile areas always total x² + bx + (b/2)² after the
 * fill. `xValue` is the drawn length of x in units (it is not the solution).
 */
export const CompleteSquareTiles: React.FC<{
	x: number; y: number; b: number; xValue?: number; unit?: number; sym?: string;
	at?: number; out?: number; splitAt?: number; moveAt?: number; gapAt?: number; fillAt?: number; labelAt?: number;
	stripRole?: RoleKey; cornerRole?: RoleKey; sideRole?: RoleKey; size?: number;
	offset?: {at: number; dx?: number};
}> = ({x, y, b, xValue = 4, unit = 100, sym = 'x', at = 0, out, splitAt, moveAt, gapAt, fillAt, labelAt, stripRole = 'b', cornerRole = 'gradient', sideRole = 'a', size = 44, offset}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const X = xValue * unit, h = (Math.abs(b) / 2) * unit, negB = b < 0;
	const SR = MATH_ROLES[stripRole], CR = MATH_ROLES[cornerRole];
	const sp = splitAt === undefined ? 0 : prog(f, splitAt, 14);
	const mv = moveAt === undefined ? 0 : Math.min(1, Math.max(0, (f - moveAt) / 36));
	const gp = gapAt === undefined ? 0 : prog(f, gapAt, 10);
	const blink = gapAt !== undefined && (fillAt === undefined || f < fillAt) ? 0.55 + 0.45 * Math.cos(((f - gapAt) / 30) * Math.PI * 2) : 1;
	const fl = fillAt === undefined ? 0 : prog(f, fillAt, 16);
	const lb = labelAt === undefined ? 0 : prog(f, labelAt, 14);
	const pid = `cst-${x}-${y}`.replace(/\./g, '_');
	const bTxt = Math.abs(b) === 1 ? '' : String(Math.abs(b));
	const half = fmtHalf(b / 2);
	const halfTxt = half.s === '1' ? '' : half.s;
	const stripLabel = sp < 0.5 ? `${negB ? MINUS : ''}${bTxt}${sym}` : `${negB ? MINUS : ''}${halfTxt}${sym}`;
	// The outer half travels to its place under the square, turning a quarter turn about its own centre; its
	// label stays upright.
	const px = x + X, py = y + X;
	const lab = (cx: number, cy: number, w: number, hh: number) => {
		const fs = Math.min(size, Math.max(26, Math.min(w, hh) * 0.62));
		return <text x={cx} y={cy + fs * 0.35} textAnchor="middle" style={TXT(fs, SR.ink, 800)}>{stripLabel}</text>;
	};
	const block = (key: string, cx: number, cy: number, rot: number) => (
		<g key={key}>
			<g transform={`translate(${cx},${cy}) rotate(${rot}) translate(${-h / 2},${-X / 2})`}>
				<rect x={0} y={0} width={h} height={X} fill={SR.soft} stroke={SR.stroke} strokeWidth={4} />
				{negB ? <rect x={0} y={0} width={h} height={X} fill={`url(#${pid})`} /> : null}
			</g>
			{lab(cx, cy, rot > 45 ? X : h, rot > 45 ? h : X)}
		</g>
	);
	const mvU = smooth(mv);
	const fromC = [px + 1.5 * h, y + X / 2], toC = [x + X / 2, py + h / 2];
	const arc = Math.sin(mvU * Math.PI) * 60;
	const moveC = [lerp(fromC[0], toC[0], mvU) + arc * 0.4, lerp(fromC[1], toC[1], mvU) + arc];
	const offO = offset ? prog(f, offset.at, 14) : 0;
	const offX = x + X + h + (offset?.dx ?? 80);
	return (
		<FrameSvg style={{opacity: o}}>
			<defs>
				<pattern id={pid} width={14} height={14} patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
					<line x1={0} y1={0} x2={0} y2={14} stroke="rgba(38,35,31,0.30)" strokeWidth={4} />
				</pattern>
			</defs>
			<rect x={x} y={y} width={X} height={X} fill="#efe7d8" stroke={INK} strokeWidth={5} />
			<text x={x + X / 2} y={y + X / 2 + size * 0.4} textAnchor="middle" style={TXT(size * 1.1, INK, 800)}>{sym}²</text>
			{sp < 0.5 ? <g>
				<rect x={px} y={y} width={2 * h} height={X} fill={SR.soft} stroke={SR.stroke} strokeWidth={4} />
				{negB ? <rect x={px} y={y} width={2 * h} height={X} fill={`url(#${pid})`} /> : null}
				{lab(px + h, y + X / 2, 2 * h, X)}
			</g> : <>
				{block('stay', px + h / 2, y + X / 2, 0)}
				{block('move', moveC[0], moveC[1], 90 * mvU)}
			</>}
			{sp > 0 && sp < 1 ? <line x1={px + h} x2={px + h} y1={y} y2={y + X * sp} stroke={SR.stroke} strokeWidth={4} strokeDasharray="10 8" /> : null}
			{gp > 0 ? <rect x={px} y={py} width={h} height={h} fill={fl > 0 ? hexA(CR.soft, fl) : 'none'} stroke={CR.stroke} strokeWidth={4} strokeDasharray={fl >= 1 ? undefined : '10 8'} opacity={gp * (fl > 0 ? 1 : blink)} /> : null}
			{fl > 0 ? <text x={px + h / 2} y={py + h / 2 + Math.min(size, h * 0.6) * 0.36} textAnchor="middle" opacity={fl} style={TXT(Math.min(size, Math.max(26, h * 0.6)), CR.ink, 800)}>{negB ? '+' : ''}{cornerText(b)}</text> : null}
			{lb > 0 ? <g opacity={lb}>
				<text x={x + (X + h) / 2} y={y - 20} textAnchor="middle" style={TXT(size, MATH_ROLES[sideRole].ink, 800)}>{completedSide(b, sym)}</text>
				<text x={x - 20} y={y + (X + h) / 2 + size * 0.35} textAnchor="end" style={TXT(size, MATH_ROLES[sideRole].ink, 800)}>{completedSide(b, sym)}</text>
			</g> : null}
			{offO > 0 ? <g opacity={offO}>
				<rect x={offX} y={py} width={h} height={h} fill="#ebe6dc" stroke={MATH_EXCLUDED} strokeWidth={4} />
				<text x={offX + h / 2} y={py + h / 2 + Math.min(size, h * 0.6) * 0.36} textAnchor="middle" style={TXT(Math.min(size, Math.max(26, h * 0.6)), INK_SOFT, 800)}>{MINUS}{cornerText(b)}</text>
			</g> : null}
		</FrameSvg>
	);
};

// =====================================================================================================
// RootExtract (w03, w04)
// =====================================================================================================
/** Collapsing inline slot: its width opens from 0 (u = 0) to the content's width (u = 1). */
const Slot: React.FC<{u: number; children: React.ReactNode; em: number; fade?: number; style?: React.CSSProperties}> = ({u, children, em, fade, style}) => (
	<span style={{display: 'inline-block', maxWidth: u >= 1 ? undefined : `${em * u}em`, overflow: u >= 1 ? undefined : 'hidden', verticalAlign: 'bottom', whiteSpace: 'pre', opacity: fade ?? Math.min(1, u * 1.6), ...style}}>{children}</span>
);
const emOf = (s: string) => s.length * 0.66 + 0.2;

/**
 * A square factor stepping out of a root: √648 splits into √(324 × 2) at splitAt (square teal), 324 rewrites as
 * 18² at rewriteAt, and at stepAt the 18 steps out in front of the root, leaving 18√2 (green frame at answerAt).
 * The square defaults to the largest square factor; pass `square` (for example 4) to show an unfinished split.
 * Throws unless square × rest equals the radicand. Use size 44 to 52 for the small worked-example rows.
 */
export const RootExtract: React.FC<{
	x: number; y: number; n: number; square?: number; size?: number; at?: number; out?: number;
	splitAt?: number; rewriteAt?: number; stepAt?: number; answerAt?: number;
	squareRole?: RoleKey; rootRole?: RoleKey; prefix?: React.ReactNode; tone?: 'ink' | 'grey';
	/** Keep the original root on the left as "√72 =" (the small worked-example rows). */
	equation?: boolean;
}> = ({x, y, n, square, size = 64, at = 0, out, splitAt, rewriteAt, stepAt, answerAt, squareRole = 'b', rootRole = 'a', prefix, tone = 'ink', equation = false}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const sq = square ?? squareSplit(n).s ** 2;
	const s = Math.round(Math.sqrt(sq));
	if (s * s !== sq || n % sq !== 0) throw new RangeError(`RootExtract: ${sq} is not a square factor of ${n}`);
	const rest = n / sq;
	const sp = splitAt === undefined ? 0 : smooth(prog(f, splitAt, 16));
	const rw = rewriteAt === undefined ? 0 : prog(f, rewriteAt, 14);
	const st = stepAt === undefined ? 0 : smooth(Math.min(1, Math.max(0, (f - stepAt) / 22)));
	const an = answerAt === undefined ? 0 : prog(f, answerAt, 12);
	const ink = tone === 'grey' ? INK_SOFT : INK;
	const sqc = tone === 'grey' ? INK_SOFT : roleInk(squareRole);
	const rc = tone === 'grey' ? INK_SOFT : roleInk(rootRole);
	const restC = st > 0.5 ? rc : ink;
	const sqWord = `${sq}`, sWord = `${s}²`;
	return (
		<div style={{position: 'absolute', left: x, top: y, opacity: o, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: ink, whiteSpace: 'pre', display: 'flex', alignItems: 'center'}}>
			{prefix ? <span style={{marginRight: '0.3em'}}>{prefix}</span> : null}
			{equation ? <span style={{marginRight: '0.3em', display: 'inline-flex'}}><Radical>{n}</Radical><span style={{marginLeft: '0.3em'}}>=</span></span> : null}
			<span style={{display: 'inline-flex', alignItems: 'center', padding: '0.04em 0.3em', margin: '0 -0.3em', borderRadius: 16, border: `5px solid ${an > 0 ? MATH_ANSWER : 'transparent'}`, background: an > 0 ? CARD : undefined}}>
				<Slot u={st} em={emOf(String(s)) + 0.05} fade={st} style={{color: sqc}}>{s}</Slot>
				<Radical color={st > 0.5 ? rc : undefined}>
					<Slot u={1 - sp} em={emOf(String(n))}>{n}</Slot>
					<Slot u={sp * (1 - st)} em={Math.max(emOf(sqWord), emOf(sWord)) + 1.4} fade={Math.min(1, sp * 1.6) * (1 - st) ** 2}>
						<span style={{display: 'inline-grid'}}>
							<span style={{gridArea: '1/1', color: sqc, opacity: 1 - rw}}>{sqWord}</span>
							<span style={{gridArea: '1/1', color: sqc, opacity: rw}}>{s}<Pow>2</Pow></span>
						</span>
						<span> × </span>
					</Slot>
					<Slot u={sp} em={emOf(String(rest))}><span style={{color: restC}}>{rest}</span></Slot>
				</Radical>
			</span>
			{an > 0 ? <svg width="0.9em" height="0.9em" viewBox="0 0 60 60" style={{overflow: 'visible', marginLeft: '0.5em'}}><DrawPath d="M8,32 L24,48 L54,10" at={(answerAt ?? 0) + 10} dur={12} color={MATH_ANSWER} width={8} /></svg> : null}
		</div>
	);
};
