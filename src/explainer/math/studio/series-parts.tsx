// Studio kit pass 2A, decision 42 (f01 to f08): sprite stacks and fields, term plots with riders and a live
// ratio, step counters, the pairing rectangle, period timelines, folding layers, a log ruler, shift-and-cancel
// rows, a chessboard grid, a bounce rig, a convergence strip, big numbers, and studio versions of the term
// ladder, partial-sum stack and sigma builder. Every plate is drawn at its native aspect (uniform scale only).
import React, {useId} from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER_DEEP, prog, rng} from '../../kit';
import type {Range} from '../graphs';
import {CARD, CARD_SHADOW, FrameSvg, PlateSpec, SvgPlate, kf, niceNum, plateHeight, smooth, vis} from './primitives';
import {MATH_AMBER, MATH_ANSWER, MATH_EXCLUDED, MATH_GRADIENT, MATH_MISTAKE, MATH_ROLES, MATH_TEAL, RoleKey, roleInk} from './roles';
import {plateMap, usePlatePreload} from './rig';
import {PlotMap, PlotTick, StudioPlot, TXT, makePlot} from './plot-core';

type Ticks = readonly (number | PlotTick)[];
const VIOLET_TINT = '#6b4fa0';

/** SVG filter that tints a sprite (multiply with a flood colour); render once inside the same SVG. */
const TintFilter: React.FC<{id: string; color: string; amount?: number}> = ({id, color, amount = 0.55}) => (
	<filter id={id} colorInterpolationFilters="sRGB">
		<feFlood floodColor={color} floodOpacity={amount} result="fl" />
		<feComposite in="fl" in2="SourceAlpha" operator="in" result="tint" />
		<feBlend in="tint" in2="SourceGraphic" mode="multiply" />
	</filter>
);

// ---------- SpriteStack ----------
/**
 * Copies of one plate sprite at native aspect, placed by offsets (px, about a base point: the first copy's
 * bottom centre at (x, y)), or by pyramid mode (rows of n down to 1, centred, half-sprite offset). `count` (may
 * be fractional) shows the first copies, the newest dropping in; `z` draws each new copy in front or behind;
 * `scale` changes uniformly about the base point (a camera pull-back); `ghost` is a faded dashed copy at the next
 * offset that can be crossed; pyramid rows can glow and carry labels; `tint` colours chosen copies (violet copy).
 */
export const SpriteStack: React.FC<{
	plate: PlateSpec; x: number; y: number; w: number; offsets?: readonly (readonly [number, number])[];
	pyramid?: {rows: number; gapX?: number; rowStep?: number; labels?: (row: number) => string; labelSide?: 'left' | 'right'; glow?: {row: number; at: number; out?: number}};
	count?: number; z?: 'front' | 'behind'; scale?: number; dropFrom?: number;
	ghost?: {at: number; out?: number; crossAt?: number}; tint?: {color?: string; copies?: readonly number[]; amount?: number};
	at?: number; out?: number;
}> = ({plate, x, y, w, offsets: offsIn, pyramid, count, z = 'front', scale = 1, dropFrom = 160, ghost, tint, at = 0, out}) => {
	usePlatePreload([plate.src]);
	const f = useCurrentFrame();
	const id = `ss-${useId().replace(/:/g, '')}`;
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const sw = w * scale, sh = plateHeight(plate, sw);
	let offs: [number, number][] = (offsIn ?? []).map(q => [q[0] * scale, q[1] * scale]);
	const rowOf: number[] = [];
	if (pyramid) {
		offs = [];
		const n = pyramid.rows, gx = (pyramid.gapX ?? 0.04) * sw, rs = (pyramid.rowStep ?? 0.98) * sh;
		for (let r = 0; r < n; r++) {const k = n - r; for (let i = 0; i < k; i++) {offs.push([(i - (k - 1) / 2) * (sw + gx), -r * rs]); rowOf.push(n - r);}}
	}
	const N = offs.length;
	const c = count === undefined ? N : Math.max(0, Math.min(N, count));
	const full = Math.floor(c), part = c - full;
	const idx = Array.from({length: Math.min(N, full + (part > 0 ? 1 : 0))}, (_, i) => i);
	const order = z === 'front' ? idx : [...idx].reverse();
	const tinted = new Set(tint ? (tint.copies ?? idx) : []);
	const sprite = (i: number) => {
		const [dx, dy] = offs[i];
		const drop = i === full && part > 0 ? (1 - smooth(part)) * dropFrom : 0;
		const op = i === full && part > 0 ? Math.min(1, part * 3) : 1;
		return <g key={i} opacity={op} filter={tinted.has(i) ? `url(#${id}t)` : undefined}><SvgPlate plate={plate} x={x + dx - sw / 2} y={y + dy - sh - drop} w={sw} /></g>;
	};
	const gl = pyramid?.glow ? vis(f, pyramid.glow.at, pyramid.glow.out) : 0;
	return <FrameSvg style={{opacity: o}}>
		{tint ? <defs><TintFilter id={`${id}t`} color={tint.color ?? VIOLET_TINT} amount={tint.amount} /></defs> : null}
		{pyramid && gl > 0 ? (() => {const r = pyramid.glow!.row, k = r, rs = (pyramid.rowStep ?? 0.98) * sh, gx = (pyramid.gapX ?? 0.04) * sw, half = (k * (sw + gx)) / 2 + 16, yy = y - (pyramid.rows - r) * rs - sh - 10; return <rect x={x - half} y={yy} width={half * 2} height={sh + 20} rx={18} fill={MATH_ROLES.k.soft} opacity={0.9 * gl} />;})() : null}
		{order.map(sprite)}
		{ghost && N > 0 ? (() => {
			const go = vis(f, ghost.at, ghost.out);
			if (go <= 0.001) return null;
			const last = offs[Math.min(N - 1, full)], prev = offs[Math.max(0, Math.min(N - 1, full) - 1)];
			const gxy: [number, number] = full < N ? offs[full] : [last[0] + (last[0] - prev[0]), last[1] + (last[1] - prev[1])];
			const gx0 = x + gxy[0] - sw / 2, gy0 = y + gxy[1] - sh, cr = ghost.crossAt !== undefined ? prog(f, ghost.crossAt, 12) : 0;
			return <g opacity={go}>
				<g opacity={0.28}><SvgPlate plate={plate} x={gx0} y={gy0} w={sw} /></g>
				<rect x={gx0 - 6} y={gy0 - 6} width={sw + 12} height={sh + 12} rx={12} fill="none" stroke={INK_SOFT} strokeWidth={3.5} strokeDasharray="12 9" />
				{cr > 0 ? <><DrawPath d={`M${gx0},${gy0} L${gx0 + sw},${gy0 + sh}`} at={ghost.crossAt!} dur={10} color={MATH_MISTAKE} width={8} /><DrawPath d={`M${gx0 + sw},${gy0} L${gx0},${gy0 + sh}`} at={ghost.crossAt! + 6} dur={10} color={MATH_MISTAKE} width={8} /></> : null}
			</g>;
		})() : null}
		{pyramid?.labels ? Array.from({length: pyramid.rows}, (_, r) => {const row = r + 1, k = row, rs = (pyramid.rowStep ?? 0.98) * sh, gx = (pyramid.gapX ?? 0.04) * sw, side = pyramid.labelSide ?? 'left', yy = y - (pyramid.rows - row) * rs - sh / 2 + 12, xx = side === 'left' ? x - (k * (sw + gx)) / 2 - 24 : x + (k * (sw + gx)) / 2 + 24; return <text key={r} x={xx} y={yy} textAnchor={side === 'left' ? 'end' : 'start'} style={TXT(34, INK, 800)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{pyramid.labels!(row)}</text>;}) : null}
	</FrameSvg>;
};

// ---------- TermPlot ----------
export type TermSeries = {term: (n: number) => number; color?: string; at?: number; stagger?: number; labels?: {at: number; text?: (n: number, v: number) => string}; open?: boolean};
/**
 * Discrete points (n, aₙ) for whole n only. Points arrive one by one (or fly in from a frame position), with
 * 52 px labels on cue, an optional dashed guide line, a gradient triangle, hollow "no term" markers, a horizontal
 * reference line with a tinted side, a vertical boundary with a tinted side, a second series, a limit line whose
 * opacity the caller ties to a condition (|r| < 1; see insideFade), plate riders that move along a series in step
 * with a slider (one may stop at a floor), and an animated window (zoom). Pass a term that reads the current r for
 * the live-ratio mode.
 */
export const TermPlot: React.FC<{
	x: number; y: number; width?: number; height?: number; window: {x: Range; y: Range} | readonly {frame: number; x: Range; y: Range}[];
	nRange: readonly [number, number]; series: readonly TermSeries[]; flyFrom?: readonly [number, number];
	guide?: {fn: (n: number) => number; at: number; out?: number; color?: string}; triangle?: {n: number; run?: number; at: number; label?: string};
	noTerm?: readonly {n: number; Y: number; at: number; label?: string}[];
	refLine?: {Y: number; label?: string; at: number; out?: number; tint?: 'above' | 'below'; color?: string};
	boundary?: {n: number; label?: string; at: number; tint?: 'left' | 'right'};
	limitLine?: {Y: number; label?: string; opacity: number};
	riders?: readonly {series: number; n: number; plate: PlateSpec; w: number; floor?: number}[];
	xTicks?: Ticks; yTicks?: Ticks; xLabel?: string; yLabel?: string; at?: number; out?: number;
	children?: (m: PlotMap) => React.ReactNode;
}> = ({x, y, width = 1100, height = 720, window: winIn, nRange, series, flyFrom, guide, triangle, noTerm = [], refLine, boundary, limitLine, riders = [], xTicks, yTicks, xLabel = 'n', yLabel = 'aₙ', at = 0, out, children}) => {
	const f = useCurrentFrame();
	usePlatePreload(riders.map(r => r.plate.src));
	const win = 'x' in winIn ? winIn : (() => {const keys = winIn as readonly {frame: number; x: Range; y: Range}[]; const g = (sel: (k: (typeof keys)[number]) => number) => kf(f, keys.map(k => [k.frame, sel(k)] as const)); return {x: [g(k => k.x[0]), g(k => k.x[1])] as Range, y: [g(k => k.y[0]), g(k => k.y[1])] as Range};})();
	const ns: number[] = [];
	for (let n = Math.ceil(nRange[0]); n <= nRange[1]; n++) ns.push(n);
	return <StudioPlot x={x} y={y} width={width} height={height} window={win} xTicks={xTicks} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} at={at} out={out}>
		{m => <>
			<g clipPath={m.clip}>
				{refLine ? (() => {const ro = vis(f, refLine.at, refLine.out); const [, ry] = m.p(0, refLine.Y); return <g opacity={ro}>
					{refLine.tint ? <rect x={m.box.left} y={refLine.tint === 'above' ? m.box.top : ry} width={m.box.width} height={refLine.tint === 'above' ? ry - m.box.top : m.box.top + m.box.height - ry} fill={MATH_ROLES.k.soft} opacity={0.6} /> : null}
					<line x1={m.box.left} x2={m.box.left + m.box.width} y1={ry} y2={ry} stroke={refLine.color ?? MATH_ROLES.k.stroke} strokeWidth={4} strokeDasharray="14 9" />
				</g>;})() : null}
				{boundary ? (() => {const bo = vis(f, boundary.at); const [bx] = m.p(boundary.n, 0); return <g opacity={bo}>
					{boundary.tint ? <rect x={boundary.tint === 'left' ? m.box.left : bx} y={m.box.top} width={boundary.tint === 'left' ? bx - m.box.left : m.box.left + m.box.width - bx} height={m.box.height} fill={MATH_ROLES.b.soft} opacity={0.6} /> : null}
					<line x1={bx} x2={bx} y1={m.box.top} y2={m.box.top + m.box.height} stroke={MATH_ROLES.b.stroke} strokeWidth={4} strokeDasharray="10 8" />
				</g>;})() : null}
				{limitLine && limitLine.opacity > 0.001 ? (() => {const [, ly] = m.p(0, limitLine.Y); return <line x1={m.box.left} x2={m.box.left + m.box.width} y1={ly} y2={ly} stroke={MATH_ANSWER} strokeWidth={5} strokeDasharray="16 10" opacity={limitLine.opacity} />;})() : null}
				{guide ? (() => {const g = guide; let d = ''; for (let i = 0; i <= 120; i++) {const X = win.x[0] + ((win.x[1] - win.x[0]) * i) / 120; const [px, py] = m.p(X, g.fn(X)); d += `${i ? 'L' : 'M'}${px},${py} `;} return <path d={d} stroke={g.color ?? INK_SOFT} strokeWidth={4} strokeDasharray="12 10" fill="none" opacity={vis(f, g.at, g.out)} />;})() : null}
				{triangle ? (() => {const s = series[0], run = triangle.run ?? 1, [ax, ay] = m.p(triangle.n, s.term(triangle.n)), [cx2] = m.p(triangle.n + run, 0), [, ey] = m.p(0, s.term(triangle.n + run)); return <g opacity={vis(f, triangle.at)}><path d={`M${ax},${ay} H${cx2} V${ey}`} stroke={MATH_GRADIENT} strokeWidth={4.5} strokeDasharray="10 7" fill="none" />{triangle.label ? <text x={cx2 + 14} y={(ay + ey) / 2 + 12} style={TXT(36, MATH_GRADIENT, 800)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{triangle.label}</text> : null}</g>;})() : null}
			</g>
			{series.map((s, si) => ns.map((n, i) => {
				const a0 = (s.at ?? at) + i * (s.stagger ?? 10);
				const po = prog(f, a0, 14);
				if (po <= 0.001) return null;
				const v = s.term(n);
				if (!Number.isFinite(v)) return null;
				let [px, py] = m.p(n, v);
				if (flyFrom && po < 1) {const u = smooth(po), fx = flyFrom[0] - m.x, fy = flyFrom[1] - m.y; px = fx + (px - fx) * u; py = fy + (py - fy) * u - Math.sin(Math.PI * u) * 80;}
				const inBox = px >= m.box.left - 2 && px <= m.box.left + m.box.width + 2 && py >= m.box.top - 2 && py <= m.box.top + m.box.height + 2;
				if (!inBox && po >= 1) return null;
				const col = s.color ?? (si === 0 ? MATH_ROLES.a.stroke : MATH_ROLES.k.stroke);
				const lo = s.labels ? prog(f, s.labels.at + i * (s.stagger ?? 10), 12) : 0;
				return <g key={`${si}-${n}`}>
					<circle cx={px} cy={py} r={13} fill={s.open ? CARD : col} stroke={s.open ? col : CARD} strokeWidth={5} />
					{lo > 0 ? <text x={px} y={py - 26} textAnchor="middle" opacity={lo} style={TXT(44, roleInk(si === 0 ? 'a' : 'k'), 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{s.labels!.text ? s.labels!.text(n, v) : niceNum(v, 2)}</text> : null}
				</g>;
			}))}
			{noTerm.map((q, i) => {const [px, py] = m.p(q.n, q.Y); const qo = vis(f, q.at); return <g key={'nt' + i} opacity={qo}><circle cx={px} cy={py} r={13} fill={CARD} stroke={MATH_EXCLUDED} strokeWidth={5} />{q.label ? <text x={px + 20} y={py - 20} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, fill: MATH_EXCLUDED}}>{q.label}</text> : null}</g>;})}
			{refLine?.label ? (() => {const [, ry] = m.p(0, refLine.Y); return <text x={m.box.left + m.box.width - 10} y={ry - 14} textAnchor="end" opacity={vis(f, refLine.at, refLine.out)} style={TXT(34, MATH_AMBER, 800)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{refLine.label}</text>;})() : null}
			{boundary?.label ? (() => {const [bx] = m.p(boundary.n, 0); return <text x={bx + 12} y={m.box.top + 36} opacity={vis(f, boundary.at)} style={TXT(34, MATH_TEAL, 800)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{boundary.label}</text>;})() : null}
			{limitLine?.label && limitLine.opacity > 0.001 ? (() => {const [, ly] = m.p(0, limitLine.Y); return <text x={m.box.left + 14} y={ly - 14} opacity={limitLine.opacity} style={TXT(36, MATH_ANSWER, 800)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{limitLine.label}</text>;})() : null}
			{riders.map((r, i) => {
				const s = series[r.series];
				const n0 = Math.floor(r.n), u = r.n - n0;
				let v = s.term(n0) + (s.term(n0 + 1) - s.term(n0)) * u;
				let n = r.n;
				if (r.floor !== undefined && v < r.floor) {v = r.floor; for (let k = Math.floor(nRange[0]); k <= nRange[1]; k++) if (s.term(k) < r.floor) {n = Math.min(n, k - 1 + (s.term(k - 1) - r.floor) / (s.term(k - 1) - s.term(k))); break;}}
				const [px, py] = m.p(Math.max(win.x[0], Math.min(win.x[1], n)), Math.max(win.y[0], Math.min(win.y[1], v))), rh = plateHeight(r.plate, r.w);
				return <SvgPlate key={'rd' + i} plate={r.plate} x={px - r.w / 2} y={py - rh - 10} w={r.w} />;
			})}
			{children ? children(m) : null}
		</>}
	</StudioPlot>;
};
/** Opacity that is 1 well inside |r| < bound and fades to 0 at the boundary (the conditional S∞ line). */
export const insideFade = (r: number, bound = 1, width = 0.06) => Math.max(0, Math.min(1, (bound - Math.abs(r)) / width));

// ---------- StepCounter ----------
/**
 * Step labels between ladder cards: arcs from each card to the next labelled "1 step", "2 steps", ... (mode
 * 'steps', cumulative), or numbers 1 to k across the gaps ('numbers'), with a bracket "k steps" and a "0 steps"
 * flash on the first card. Card centres are frame x positions on one row at y (the top of the cards).
 */
export const StepCounter: React.FC<{xs: readonly number[]; y: number; at: number; stagger?: number; mode?: 'steps' | 'numbers'; bracket?: {label: string; at: number; y?: number}; zeroFlash?: {at: number; label?: string}; role?: RoleKey; out?: number}> = ({xs, y, at, stagger = 16, mode = 'steps', bracket, zeroFlash, role = 'k', out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const col = MATH_ROLES[role];
	return <FrameSvg style={{opacity: o}}>
		{xs.slice(1).map((x1, i) => {const x0 = xs[i], a = at + i * stagger, mid = (x0 + x1) / 2; return <g key={i}>
			<DrawPath d={`M${x0 + 10},${y - 6} Q${mid},${y - 70} ${x1 - 10},${y - 6}`} at={a} dur={14} color={col.stroke} width={5} />
			<DrawPath d={`M${x1 - 26},${y - 18} L${x1 - 10},${y - 6} L${x1 - 28},${y + 0}`} at={a + 12} dur={5} color={col.stroke} width={5} />
			<text x={mid} y={y - 62} textAnchor="middle" opacity={prog(f, a + 6, 10)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, fill: col.ink}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{mode === 'numbers' ? String(i + 1) : `${i + 1} step${i ? 's' : ''}`}</text>
		</g>;})}
		{zeroFlash ? (() => {const z = vis(zeroFlash.at === undefined ? 0 : f, zeroFlash.at, zeroFlash.at + 40); return <text x={xs[0]} y={y - 40} textAnchor="middle" opacity={z} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, fill: MATH_GRADIENT}}>{zeroFlash.label ?? '0 steps'}</text>;})() : null}
		{bracket ? (() => {const by = bracket.y ?? y - 120, x0 = xs[0], x1 = xs[xs.length - 1]; return <g opacity={prog(f, bracket.at, 12)}><path d={`M${x0},${by + 16} V${by} H${x1} V${by + 16}`} stroke={col.stroke} strokeWidth={5} fill="none" /><text x={(x0 + x1) / 2} y={by - 14} textAnchor="middle" style={TXT(40, col.ink, 800)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{bracket.label}</text></g>;})() : null}
	</FrameSvg>;
};

// ---------- PairingRectangle ----------
/**
 * Gauss's pairing on sprites: a pyramid of rows 1 to n (centred, bottom row n at y), its violet copy appears
 * beside it, turns 180° as a group, and slides against the sloping side so every row holds n + 1; each row then
 * shows a readout. Bar mode (an icon): bars a, a + d, ..., the copy flipped onto their tops to make equal columns.
 */
export const PairingRectangle: React.FC<{
	x: number; y: number; n: number; sprite?: {plate: PlateSpec; w: number; rowStep?: number};
	bars?: {a: number; d: number; unit: number; barW: number};
	copyAt: number; rotateAt: number; slideAt: number; dur?: number; readouts?: {at: number; text?: (row: number, total: number) => string; stagger?: number};
	tint?: string; at?: number; out?: number;
}> = ({x, y, n, sprite, bars, copyAt, rotateAt, slideAt, dur = 30, readouts, tint = VIOLET_TINT, at = 0, out}) => {
	usePlatePreload(sprite ? [sprite.plate.src] : []);
	const f = useCurrentFrame();
	const id = `pr-${useId().replace(/:/g, '')}`;
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const co = prog(f, copyAt, 14), rot = smooth(prog(f, rotateAt, dur)), sl = smooth(prog(f, slideAt, dur));
	if (bars) {
		const {a, d, unit, barW} = bars;
		const hs = Array.from({length: n}, (_, i) => a + i * d), tot = a + hs[n - 1];
		const gap = 60, x0c = x + n * barW + gap;
		return <FrameSvg style={{opacity: o}}>
			{hs.map((h, i) => <rect key={'o' + i} x={x + i * barW} y={y - h * unit} width={barW - 3} height={h * unit} fill={MATH_ROLES.a.soft} stroke={MATH_ROLES.a.stroke} strokeWidth={2.5} />)}
			{co > 0 ? hs.map((h, i) => {
				const col = n - 1 - i, xs = x0c + i * barW, xe = x + col * barW;
				const ys = y - h * unit, ye = y - tot * unit; // final: hanging from the top of the rectangle
				const flipY = (1 - 2 * rot);
				const xx = xs + (xe - xs) * sl, yy = ys + (ye - ys) * sl;
				return <g key={'c' + i} opacity={co} transform={`translate(0 ${yy + (h * unit) / 2}) scale(1 ${Math.abs(flipY) < 0.02 ? 0.02 : flipY}) translate(0 ${-(yy + (h * unit) / 2)})`}><rect x={xx} y={yy} width={barW - 3} height={h * unit} fill={'#e7e0f2'} stroke={tint} strokeWidth={2.5} /></g>;
			}) : null}
			{readouts ? hs.map((h, i) => <text key={'r' + i} x={x + i * barW + barW / 2} y={y - tot * unit - 14} textAnchor="middle" opacity={prog(f, readouts.at + i * (readouts.stagger ?? 0), 10)} style={TXT(28, INK, 800)}>{readouts.text ? readouts.text(i + 1, tot) : niceNum(tot)}</text>) : null}
		</FrameSvg>;
	}
	if (!sprite) throw new RangeError('PairingRectangle: give a sprite or bars');
	const sw = sprite.w, sh = plateHeight(sprite.plate, sw), rs = (sprite.rowStep ?? 0.98) * sh;
	const rowY = (row: number) => y - (n - row) * rs - sh / 2; // centre y of row (1 at the top)
	const cyMid = (rowY(1) + rowY(n)) / 2;
	const items: {dx: number; row: number}[] = [];
	for (let row = 1; row <= n; row++) for (let i = 0; i < row; i++) items.push({dx: (i - (row - 1) / 2) * sw, row});
	const cx0 = x + (n + 1) * sw + 40, cxF = x + ((n + 1) * sw) / 2;
	const ccx = cx0 + (cxF - cx0) * sl, th = Math.PI * rot;
	return <FrameSvg style={{opacity: o}}>
		<defs><TintFilter id={`${id}t`} color={tint} /></defs>
		{items.map((it, i) => <SvgPlate key={'o' + i} plate={sprite.plate} x={x + it.dx - sw / 2} y={rowY(it.row) - sh / 2} w={sw} />)}
		{co > 0 ? <g opacity={co} filter={`url(#${id}t)`}>{items.map((it, i) => {
			const rx = it.dx, ry = rowY(it.row) - cyMid;
			const qx = rx * Math.cos(th) - ry * Math.sin(th), qy = rx * Math.sin(th) + ry * Math.cos(th);
			const px = ccx + qx, py = cyMid + qy;
			return <g key={'c' + i} transform={`rotate(${(th * 180) / Math.PI} ${px} ${py})`}><SvgPlate plate={sprite.plate} x={px - sw / 2} y={py - sh / 2} w={sw} /></g>;
		})}</g> : null}
		{readouts ? Array.from({length: n}, (_, r) => {const row = r + 1; return <text key={'r' + r} x={x + ((n + 1) * sw) / 2 + ((n + 1) * sw) / 2 + 26} y={rowY(row) + 12} opacity={prog(f, readouts.at + r * (readouts.stagger ?? 6), 10)} style={TXT(34, INK, 800)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{readouts.text ? readouts.text(row, n + 1) : `${row} + ${n + 1 - row} = ${n + 1}`}</text>;}) : null}
	</FrameSvg>;
};

// ---------- PeriodTimeline ----------
/**
 * Period tabs along a baseline ("day 1", or "t = 0", "after 1 year" in time mode) with optional bars (value ×
 * unit px), "?" slots, amber step arcs ("+30", "×3"), a bracket, a teal total column beside the last tab and a
 * dashed reference line with a label.
 */
export const PeriodTimeline: React.FC<{
	x: number; y: number; tabW?: number; gap?: number; unit?: number;
	periods: readonly {label: string; value?: number; valueText?: string; at: number; unknown?: boolean}[];
	arcs?: readonly {from: number; to: number; label: string; at: number}[];
	bracket?: {from: number; to: number; label: string; at: number};
	total?: {value: number; label?: string; text?: string; at: number};
	refLine?: {value: number; label: string; at: number};
	timeMode?: {at: number; label?: string};
	role?: RoleKey; out?: number;
}> = ({x, y, tabW = 150, gap = 26, unit = 3, periods, arcs = [], bracket, total, refLine, timeMode, role = 'a', out}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 12);
	if (o <= 0.001) return null;
	const col = MATH_ROLES[role];
	const off = timeMode ? tabW + gap : 0;
	const cx = (i: number) => x + off + i * (tabW + gap) + tabW / 2;
	const top = (i: number) => (periods[i].value === undefined ? y - 90 : y - periods[i].value! * unit);
	return <FrameSvg style={{opacity: o}}>
		<line x1={x - 20} x2={cx(periods.length - 1) + tabW / 2 + (total ? tabW + gap * 2 : 20)} y1={y} y2={y} stroke={INK} strokeWidth={4} />
		{timeMode ? <g opacity={prog(f, timeMode.at, 12)}><line x1={x + tabW / 2} x2={x + tabW / 2} y1={y - 30} y2={y + 14} stroke={INK} strokeWidth={4} /><text x={x + tabW / 2} y={y + 50} textAnchor="middle" style={TXT(32, INK, 800)}>{timeMode.label ?? 't = 0'}</text></g> : null}
		{refLine ? (() => {const ry = y - refLine.value * unit; return <g opacity={prog(f, refLine.at, 12)}><line x1={x} x2={cx(periods.length - 1) + tabW} y1={ry} y2={ry} stroke={INK_SOFT} strokeWidth={3.5} strokeDasharray="12 9" /><text x={x} y={ry - 12} style={TXT(32, INK_SOFT, 800)}>{refLine.label}</text></g>;})() : null}
		{periods.map((p, i) => {
			const po = prog(f, p.at, 12), h = p.value === undefined ? 0 : p.value * unit * smooth(prog(f, p.at, 18));
			return <g key={i} opacity={po}>
				<text x={cx(i)} y={y + 50} textAnchor="middle" style={TXT(32, INK, 800)}>{p.label}</text>
				{p.unknown ? <g><rect x={cx(i) - tabW / 2 + 8} y={y - 96} width={tabW - 16} height={86} rx={14} fill={CARD} stroke={col.stroke} strokeWidth={4} strokeDasharray="10 8" /><text x={cx(i)} y={y - 36} textAnchor="middle" style={TXT(52, col.ink, 800)}>?</text></g>
					: p.value !== undefined ? <g><rect x={cx(i) - tabW / 2 + 12} y={y - h} width={tabW - 24} height={h} rx={8} fill={col.soft} stroke={col.stroke} strokeWidth={4} /><text x={cx(i)} y={y - h - 14} textAnchor="middle" style={TXT(44, col.ink, 800)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{p.valueText ?? niceNum(p.value)}</text></g> : null}
			</g>;
		})}
		{arcs.map((a, i) => {const x0 = cx(a.from), x1 = cx(a.to), ty = Math.min(top(a.from), top(a.to)) - 70, mid = (x0 + x1) / 2; return <g key={'a' + i}>
			<DrawPath d={`M${x0},${top(a.from) - 58} Q${mid},${ty - 50} ${x1},${top(a.to) - 58}`} at={a.at} dur={16} color={MATH_ROLES.k.stroke} width={5} />
			<text x={mid} y={ty - 40} textAnchor="middle" opacity={prog(f, a.at + 8, 10)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, fill: MATH_AMBER}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{a.label}</text>
		</g>;})}
		{bracket ? (() => {const x0 = cx(bracket.from) - tabW / 2, x1 = cx(bracket.to) + tabW / 2, by = y + 78; return <g opacity={prog(f, bracket.at, 12)}><path d={`M${x0},${by} V${by + 16} H${x1} V${by}`} stroke={INK_SOFT} strokeWidth={4} fill="none" /><text x={(x0 + x1) / 2} y={by + 56} textAnchor="middle" style={TXT(34, INK, 800)}>{bracket.label}</text></g>;})() : null}
		{total ? (() => {const tx = cx(periods.length - 1) + tabW + gap * 2, h = total.value * unit * smooth(prog(f, total.at, 20)); return <g opacity={prog(f, total.at, 12)}><rect x={tx - tabW / 2 + 8} y={y - h} width={tabW - 16} height={h} rx={8} fill={MATH_ROLES.b.soft} stroke={MATH_ROLES.b.stroke} strokeWidth={4} /><text x={tx} y={y - h - 14} textAnchor="middle" style={TXT(44, MATH_TEAL, 800)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{total.text ?? niceNum(total.value)}</text><text x={tx} y={y + 50} textAnchor="middle" style={TXT(32, MATH_TEAL, 800)}>{total.label ?? 'total'}</text></g>;})() : null}
	</FrameSvg>;
};

// ---------- SpriteField ----------
/** Frame positions for slot points measured on a plate in file pixels (houses on a town plate's empty land). */
export const slotsFromPlate = (plate: PlateSpec, x: number, y: number, w: number, fileSlots: readonly (readonly [number, number])[]) => {
	const m = plateMap(plate, x, y, w);
	return fileSlots.map(s => m.at(s[0], s[1]));
};
/**
 * Plate sprites placed in order, at native aspect, `count` of them (fractional: the newest pops in): in rows over
 * a frame region (seeded small jitter, filling bottom row first), or at fixed placement slots (bottom-centre points).
 * Capacity is rows × cols or the slot count; a count above it throws.
 */
export const SpriteField: React.FC<{plate: PlateSpec; w: number; count: number; region?: {x: number; y: number; w: number; h: number; cols: number; rows: number}; slots?: readonly (readonly [number, number])[]; seed?: number; jitter?: number; at?: number; out?: number}> = ({plate, w, count, region, slots, seed = 5, jitter = 0.18, at = 0, out}) => {
	usePlatePreload([plate.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const sh = plateHeight(plate, w);
	let pts: [number, number][] = [];
	if (slots) pts = slots.map(s => [s[0], s[1]]);
	else if (region) {
		const r = rng(seed), cw = region.w / region.cols, rh = region.h / region.rows;
		for (let row = 0; row < region.rows; row++) for (let c = 0; c < region.cols; c++) pts.push([region.x + (c + 0.5 + (r() - 0.5) * jitter) * cw + (row % 2 ? cw * 0.25 : 0), region.y + region.h - row * rh - (r() - 0.5) * jitter * rh]);
	} else throw new RangeError('SpriteField: give a region or slots');
	if (count > pts.length + 1e-9) throw new RangeError(`SpriteField: count ${count} exceeds capacity ${pts.length}`);
	const full = Math.floor(count), part = count - full;
	// back rows first so nearer sprites overlap farther ones
	const shown = pts.slice(0, Math.min(pts.length, full + (part > 0 ? 1 : 0))).map((p, i) => ({p, i})).sort((a, b) => a.p[1] - b.p[1]);
	return <FrameSvg style={{opacity: o}}>{shown.map(({p, i}) => {const s = i === full ? 0.4 + 0.6 * smooth(part) : 1; return <g key={i} opacity={i === full ? Math.min(1, part * 2.5) : 1}><SvgPlate plate={plate} x={p[0] - (w * s) / 2} y={p[1] - sh * s} w={w * s} /></g>;})}</FrameSvg>;
};

// ---------- GrowingPlate ----------
/** A plate drawn at a height given by a value (uniform scale from its bottom-centre base point, aspect fixed), with an optional coded scale beside it. */
export const GrowingPlate: React.FC<{plate: PlateSpec; baseX: number; baseY: number; height: number; scale?: {x: number; unitPx: number; max: number; step: number; unit?: string; value?: number}; at?: number; out?: number}> = ({plate, baseX, baseY, height, scale, at = 0, out}) => {
	usePlatePreload([plate.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const w = (Math.max(1, height) * (plate.box[2] - plate.box[0])) / (plate.box[3] - plate.box[1]);
	return <FrameSvg style={{opacity: o}}>
		{scale ? <g>
			<line x1={scale.x} x2={scale.x} y1={baseY} y2={baseY - scale.max * scale.unitPx} stroke={INK} strokeWidth={4} />
			{Array.from({length: Math.floor(scale.max / scale.step) + 1}, (_, i) => {const v = i * scale.step, yy = baseY - v * scale.unitPx; return <g key={i}><line x1={scale.x - 12} x2={scale.x} y1={yy} y2={yy} stroke={INK} strokeWidth={3} /><text x={scale.x - 20} y={yy + 10} textAnchor="end" style={TXT(30, INK, 700)}>{niceNum(v)}</text></g>;})}
			{scale.unit ? <text x={scale.x} y={baseY - scale.max * scale.unitPx - 20} textAnchor="middle" style={TXT(28, INK_SOFT, 700)}>{scale.unit}</text> : null}
			{scale.value !== undefined ? (() => {const yy = baseY - scale.value * scale.unitPx; return <g><line x1={scale.x} x2={baseX} y1={yy} y2={yy} stroke={MATH_ROLES.a.stroke} strokeWidth={3} strokeDasharray="8 7" /><circle cx={scale.x} cy={yy} r={9} fill={MATH_ROLES.a.stroke} /></g>;})() : null}
		</g> : null}
		<SvgPlate plate={plate} x={baseX - w / 2} y={baseY - height} w={w} />
	</FrameSvg>;
};

// ---------- FoldLayers ----------
/**
 * A side-on stack of thin layers that doubles with each fold: `folds` (may be fractional; the new half fades in)
 * gives 2^folds layers of `layerPx` each; above `maxH` the stack is a dense block with its true height in the
 * readout. An optional painted sheet swaps from flat to folded on the first fold.
 */
export const FoldLayers: React.FC<{x: number; y: number; width?: number; layerPx?: number; folds: number; maxH?: number; readout?: (folds: number, layers: number) => React.ReactNode;
	sheet?: {flat: PlateSpec; folded: PlateSpec; x: number; y: number; w: number; swapAt: number}; color?: string; at?: number; out?: number}> = ({x, y, width = 360, layerPx = 6, folds, maxH = 560, readout, sheet, color = '#e9e2d0', at = 0, out}) => {
	usePlatePreload(sheet ? [sheet.flat.src, sheet.folded.src] : []);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const k = Math.max(0, folds), full = Math.floor(k), part = k - full;
	const layers = 2 ** full, next = 2 ** (full + 1);
	const shownLayers = layers + (next - layers) * smooth(part);
	const H = shownLayers * layerPx;
	const dense = H > maxH;
	const sw = sheet ? prog(f, sheet.swapAt, 14) : 0;
	return <>
		<FrameSvg style={{opacity: o}}>
			{sheet ? <><g opacity={1 - sw}><SvgPlate plate={sheet.flat} x={sheet.x} y={sheet.y} w={sheet.w} /></g><g opacity={sw}><SvgPlate plate={sheet.folded} x={sheet.x} y={sheet.y} w={sheet.w} /></g></> : null}
			{dense ? <g><rect x={x} y={y - maxH} width={width} height={maxH} fill={color} stroke={INK} strokeWidth={3} />{Array.from({length: 40}, (_, i) => <line key={i} x1={x} x2={x + width} y1={y - (i + 0.5) * (maxH / 40)} y2={y - (i + 0.5) * (maxH / 40)} stroke={INK_SOFT} strokeWidth={1} opacity={0.5} />)}<path d={`M${x + width + 14},${y - maxH} l12,-24 l12,24`} stroke={INK} strokeWidth={4} fill="none" /></g>
				: Array.from({length: Math.ceil(shownLayers)}, (_, i) => {const isNew = i >= layers; return <rect key={i} x={x} y={y - (i + 1) * layerPx} width={width} height={layerPx - Math.min(2, layerPx * 0.25)} fill={isNew ? MATH_ROLES.a.soft : color} stroke={isNew ? MATH_ROLES.a.stroke : INK_SOFT} strokeWidth={1} opacity={isNew ? smooth(part) : 1} />;})}
		</FrameSvg>
		{readout ? <div style={{position: 'absolute', left: x, top: y + 18, opacity: o, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK, whiteSpace: 'pre'}}>{readout(k, layers)}</div> : null}
	</>;
};

// ---------- LogRuler ----------
const SUPD: Record<string, string> = {'0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻'};
const pow10 = (e: number) => '10' + String(e).split('').map(c => SUPD[c] ?? c).join('');
/**
 * A vertical base-10 log scale from 10^lo (bottom) to 10^hi (top) with decade labels, a marker driven by a value,
 * and landmark slots holding a coded label or a plate (drawn at a fixed width, never stretched) at given values.
 */
export const LogRuler: React.FC<{x: number; yTop: number; yBottom: number; decades: readonly [number, number]; value?: number; markerLabel?: string; unit?: string; labelEvery?: number;
	landmarks?: readonly {value: number; label?: string; plate?: PlateSpec; plateW?: number; side?: 'left' | 'right'; at: number}[]; at?: number; out?: number}> = ({x, yTop, yBottom, decades, value, markerLabel, unit, labelEvery = 1, landmarks = [], at = 0, out}) => {
	usePlatePreload(landmarks.filter(l => l.plate).map(l => l.plate!.src));
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const [lo, hi] = decades;
	const Y = (v: number) => yBottom - ((Math.log10(v) - lo) / (hi - lo)) * (yBottom - yTop);
	return <FrameSvg style={{opacity: o}}>
		<rect x={x - 14} y={yTop - 10} width={28} height={yBottom - yTop + 20} rx={14} fill={PAPER_DEEP} stroke={INK} strokeWidth={3} />
		{Array.from({length: hi - lo + 1}, (_, i) => {const e = lo + i, yy = Y(10 ** e); return <g key={e}>
			<line x1={x - 24} x2={x + 24} y1={yy} y2={yy} stroke={INK} strokeWidth={3.5} />
			{(e - lo) % labelEvery === 0 ? <text x={x - 34} y={yy + 11} textAnchor="end" style={TXT(32, INK, 800)}>{pow10(e)}</text> : null}
			{e < hi ? [2, 3, 5].map(k => <line key={k} x1={x - 12} x2={x + 12} y1={Y(k * 10 ** e)} y2={Y(k * 10 ** e)} stroke={INK_SOFT} strokeWidth={2} />) : null}
		</g>;})}
		{unit ? <text x={x} y={yTop - 26} textAnchor="middle" style={TXT(28, INK_SOFT, 700)}>{unit}</text> : null}
		{landmarks.map((l, i) => {const lo2 = prog(f, l.at, 12), yy = Y(l.value), side = l.side ?? 'right', dx = side === 'right' ? 1 : -1; const pw = l.plateW ?? 110, ph = l.plate ? plateHeight(l.plate, pw) : 0; return <g key={i} opacity={lo2}>
			<line x1={x + dx * 18} x2={x + dx * 60} y1={yy} y2={yy} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="6 5" />
			{l.plate ? <SvgPlate plate={l.plate} x={side === 'right' ? x + 70 : x - 70 - pw} y={yy - ph / 2} w={pw} /> : null}
			{l.label ? <text x={x + dx * (l.plate ? 90 + pw : 72)} y={yy + 11} textAnchor={side === 'right' ? 'start' : 'end'} style={TXT(32, INK, 800)} stroke={CARD} strokeWidth={6} paintOrder="stroke">{l.label}</text> : null}
		</g>;})}
		{value !== undefined && value > 0 ? (() => {const yy = Math.max(yTop, Math.min(yBottom, Y(value))); return <g><path d={`M${x - 46},${yy} l-22,-16 v32 Z`} fill={MATH_AMBER} stroke={CARD} strokeWidth={3} /><circle cx={x} cy={yy} r={11} fill={MATH_AMBER} stroke={CARD} strokeWidth={4} />{markerLabel ? <text x={x - 78} y={yy + 11} textAnchor="end" style={TXT(36, MATH_AMBER, 800)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{markerLabel}</text> : null}</g>;})() : null}
	</FrameSvg>;
};

// ---------- ShiftCancelRows ----------
export type ShiftTerm = {key: number | string; display: React.ReactNode; sign: 1 | -1};
/**
 * Two rows of signed terms in a shared column grid keyed by column key, so equal terms of opposite sign stand in one
 * column: rows enter, the lower (shifted, amber) row slides from written order into its columns, matched pairs are
 * struck in ink and fade, survivors glow. A pair strikes only if its two terms share a key and have opposite signs
 * (throws otherwise); `check` verifies that both rows sum to the boxed result.
 */
export const ShiftCancelRows: React.FC<{x: number; y: number; colW?: number; rowGap?: number; columns: readonly (number | string)[]; top: readonly ShiftTerm[]; bottom: readonly ShiftTerm[];
	enterAt: readonly [number, number]; alignAt: number; strike: {all: true; at: number; stagger?: number} | readonly {key: number | string; at: number}[];
	survivorsAt?: number; labels?: readonly [React.ReactNode, React.ReactNode]; check?: {value: (t: ShiftTerm) => number; result: number}; size?: number; out?: number}> = ({x, y, colW = 170, rowGap = 110, columns, top, bottom, enterAt, alignAt, strike, survivorsAt, labels, check, size = 52, out}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 12);
	const colX = (k: number | string) => {const i = columns.indexOf(k); if (i < 0) throw new RangeError(`ShiftCancelRows: no column for key ${k}`); return x + 150 + i * colW;};
	const strikes = Array.isArray(strike) ? strike as readonly {key: number | string; at: number}[] : columns.filter(k => top.some(t => t.key === k) && bottom.some(b => b.key === k)).map((k, i) => ({key: k, at: (strike as {at: number}).at + i * ((strike as {stagger?: number}).stagger ?? 8)}));
	for (const s of strikes) {const a = top.find(t => t.key === s.key), b = bottom.find(t => t.key === s.key); if (!a || !b || a.sign === b.sign) throw new RangeError(`ShiftCancelRows: column ${s.key} has no opposite-sign pair to strike`);}
	if (check) {const sum = [...top, ...bottom].reduce((s, t) => s + check.value(t), 0); if (Math.abs(sum - check.result) > 1e-9 * Math.max(1, Math.abs(check.result))) throw new RangeError(`ShiftCancelRows: rows sum to ${sum}, not ${check.result}`);}
	if (o <= 0.001) return null;
	const al = smooth(prog(f, alignAt, 24));
	const struck = (k: number | string) => {const s = strikes.find(q => q.key === k); return s ? prog(f, s.at, 12) : 0;};
	const surv = survivorsAt !== undefined ? vis(f, survivorsAt) : 0;
	const cell = (t: ShiftTerm, cx: number, cy: number, row: 0 | 1, i: number) => {
		const st = struck(t.key), isSurv = !strikes.some(s => s.key === t.key);
		return <div key={`${row}-${i}`} style={{position: 'absolute', left: cx - colW / 2, top: cy, width: colW, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, whiteSpace: 'pre', color: row ? MATH_ROLES.k.ink : INK, opacity: prog(f, enterAt[row] + i * 4, 12) * (1 - 0.6 * st)}}>
			<span style={{position: 'relative', display: 'inline-block', padding: '0 8px', borderRadius: 12, background: isSurv && surv > 0 ? `rgba(220,239,226,${surv})` : undefined, boxShadow: isSurv && surv > 0 ? `0 0 0 4px rgba(46,125,79,${surv})` : undefined}}>
				{t.sign < 0 ? '−' : '+'}{t.display}
				{st > 0 ? <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -4, top: 0, width: 'calc(100% + 8px)', height: '100%', overflow: 'visible'}}><path d="M0,70 L100,30" stroke={INK} strokeWidth={5} vectorEffect="non-scaling-stroke" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - st} /></svg> : null}
			</span>
		</div>;
	};
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		{labels ? labels.map((l, r) => <div key={r} style={{position: 'absolute', left: x, top: y + r * rowGap, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: r ? MATH_ROLES.k.ink : INK, opacity: prog(f, enterAt[r], 12), whiteSpace: 'pre'}}>{l}</div>) : null}
		{top.map((t, i) => cell(t, colX(t.key), y, 0, i))}
		{bottom.map((t, i) => {const written = x + 150 + i * colW, aligned = colX(t.key); return cell(t, written + (aligned - written) * al, y + rowGap, 1, i);})}
	</div>;
};

// ---------- BoardGrid ----------
/**
 * An 8 × 8 grid fitted to a chessboard plate's measured playing area (or a coded board), with per-square contents:
 * up to `tidyMax` grains laid out in a tidy pattern (a sprite or coded grains), above that a heap (plate or coded)
 * with a count label. Squares fill in order (row-major from the top left) as `filled` grows; a glow can mark a
 * square; `slide` moves every square's contents one square along (0 to 1).
 */
export const BoardGrid: React.FC<{
	plate?: {plate: PlateSpec; x: number; y: number; w: number; area: readonly [number, number, number, number]}; coded?: {x: number; y: number; size: number};
	count: (i: number) => number; filled: number; grain?: PlateSpec; heap?: PlateSpec; tidyMax?: number; labels?: boolean | ((i: number, c: number) => string);
	glow?: {index: number; at: number; out?: number}; slide?: number; at?: number; out?: number;
}> = ({plate, coded, count, filled, grain, heap, tidyMax = 64, labels = false, glow, slide = 0, at = 0, out}) => {
	usePlatePreload([plate?.plate, grain, heap].filter((p): p is PlateSpec => !!p).map(p => p.src));
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	let X0: number, Y0: number, S: number;
	if (plate) {const mp = plateMap(plate.plate, plate.x, plate.y, plate.w); const [a0, b0] = mp.at(plate.area[0], plate.area[1]), [a1] = mp.at(plate.area[2], plate.area[3]); X0 = a0; Y0 = b0; S = (a1 - a0) / 8;}
	else if (coded) {X0 = coded.x; Y0 = coded.y; S = coded.size / 8;}
	else throw new RangeError('BoardGrid: give a plate or a coded board');
	const sq = (i: number): [number, number] => [X0 + (i % 8) * S, Y0 + Math.floor(i / 8) * S];
	const sl = smooth(Math.max(0, Math.min(1, slide)));
	const contents = (i: number, c: number, ox: number, oy: number) => {
		if (c <= 0) return null;
		if (c <= tidyMax) {
			const k = Math.ceil(Math.sqrt(c)), cell = (S * 0.78) / k, gw = cell * 0.82;
			return Array.from({length: c}, (_, j) => {const gx = ox + S * 0.11 + (j % k + 0.5) * cell, gy = oy + S * 0.11 + (Math.floor(j / k) + 0.5) * cell; return grain ? <SvgPlate key={j} plate={grain} x={gx - gw / 2} y={gy - plateHeight(grain, gw) / 2} w={gw} /> : <ellipse key={j} cx={gx} cy={gy} rx={gw * 0.42} ry={gw * 0.22} fill="#f3ead2" stroke="#b9a678" strokeWidth={Math.max(0.6, gw * 0.06)} />;});
		}
		const hw = S * 0.78;
		return <g>{heap ? <SvgPlate plate={heap} x={ox + (S - hw) / 2} y={oy + S * 0.18} w={hw} /> : <path d={`M${ox + S * 0.12},${oy + S * 0.8} Q${ox + S / 2},${oy + S * 0.05} ${ox + S * 0.88},${oy + S * 0.8} Z`} fill="#f0e3c2" stroke="#b9a678" strokeWidth={2} />}</g>;
	};
	return <FrameSvg style={{opacity: o}}>
		{plate ? <SvgPlate plate={plate.plate} x={plate.x} y={plate.y} w={plate.w} /> : Array.from({length: 64}, (_, i) => {const [sx, sy] = sq(i); return <rect key={'b' + i} x={sx} y={sy} width={S} height={S} fill={(i % 8 + Math.floor(i / 8)) % 2 ? '#b98a5c' : '#ecd9b6'} />;})}
		{glow ? (() => {const [gx, gy] = sq(glow.index); return <rect x={gx + 3} y={gy + 3} width={S - 6} height={S - 6} fill="none" stroke={MATH_AMBER} strokeWidth={6} rx={6} opacity={vis(f, glow.at, glow.out)} />;})() : null}
		{Array.from({length: 64}, (_, i) => {
			const shown = Math.max(0, Math.min(1, filled - i));
			if (shown <= 0) return null;
			const [sx, sy] = sq(i), [nx, ny] = sq(Math.min(63, i + 1));
			const ox = sx + (nx - sx) * sl, oy = sy + (ny - sy) * sl;
			const c = count(i);
			const lab = typeof labels === 'function' ? labels(i, c) : labels ? (c > tidyMax ? niceNum(c) : '') : '';
			const ls = Math.min(S * 0.3, (S * 0.94) / Math.max(1, lab.length * 0.58));
			return <g key={i} opacity={shown}>{contents(i, c, ox, oy)}{lab && ls >= 26 ? <text x={ox + S / 2} y={oy + S - 8} textAnchor="middle" style={TXT(ls, INK, 800)} stroke={CARD} strokeWidth={6} paintOrder="stroke">{lab}</text> : null}</g>;
		})}
	</FrameSvg>;
};

/** A big-number card: a label and a long value (an exact 20-digit integer, or scientific form) sized to fit its width (never below 40 px). */
export const BigNumberCard: React.FC<{x: number; y: number; w: number; label: React.ReactNode; value: string; role?: RoleKey; at?: number; out?: number; maxSize?: number}> = ({x, y, w, label, value, role, at = 0, out, maxSize = 72}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const size = Math.max(40, Math.min(maxSize, (w - 60) / (value.length * 0.6)));
	return <div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, background: CARD, borderRadius: 20, padding: '14px 28px', boxShadow: CARD_SHADOW, border: `3px solid ${role ? MATH_ROLES[role].stroke : 'rgba(60,45,20,0.12)'}`, boxSizing: 'border-box'}}>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: roleInk(role, INK)}}>{label}</div>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: roleInk(role, INK), fontVariantNumeric: 'tabular-nums', whiteSpace: 'pre'}}>{value}</div>
	</div>;
};

// ---------- BounceRig ----------
export type BounceState = {bounce: number; height: number; travelled: number; x: number};
/** Bounce state at progress t: segment 0 is the drop from peaks[0]; segment i ≥ 1 rises to peaks[i] and falls. Distance is exact. */
export const bounceAt = (peaks: readonly number[], t: number): BounceState => {
	const T = Math.max(0, Math.min(peaks.length, t)), seg = Math.min(peaks.length - 1, Math.floor(T)), u = T - seg;
	let travelled = 0;
	for (let j = 0; j < seg; j++) travelled += j === 0 ? peaks[0] : 2 * peaks[j];
	let height: number;
	if (seg === 0) {height = peaks[0] * (1 - u * u); travelled += peaks[0] - height;}
	else {height = 4 * peaks[seg] * u * (1 - u); travelled += u < 0.5 ? height : 2 * peaks[seg] - height;}
	return {bounce: seg, height, travelled, x: T};
};
/**
 * A ball plate on a parabola-shaped path between peaks (heights in units, `unit` px each), over a floor plate tiled
 * at native aspect, beside a coded height scale, with a dotted trail and optional up and down arrows per bounce.
 * Bounce widths follow the square root of each peak, so the ball comes to rest visually while the readouts (from
 * onState) keep their exact values.
 */
export const BounceRig: React.FC<{x: number; floorY: number; unit: number; peaks: readonly number[]; t: number; spacing?: number; ball: {plate: PlateSpec; w: number}; floor?: {plate: PlateSpec; h: number};
	scale?: {x: number; max: number; step: number; unit?: string}; trail?: boolean; arrows?: {at: number; upTo?: number}; onState?: (s: BounceState) => React.ReactNode; at?: number; out?: number}> = ({x, floorY, unit, peaks, t, spacing = 260, ball, floor, scale, trail = true, arrows, onState, at = 0, out}) => {
	usePlatePreload([ball.plate.src, ...(floor ? [floor.plate.src] : [])]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const wSeg = (j: number) => (j === 0 ? spacing / 2 : spacing * Math.sqrt(peaks[j] / peaks[0]));
	const segX = (j: number) => {let s = x; for (let k = 0; k < j; k++) s += wSeg(k); return s;};
	const posAt = (tt: number): [number, number] => {const s = bounceAt(peaks, tt), seg = s.bounce, u = Math.max(0, Math.min(peaks.length, tt)) - seg; return [segX(seg) + wSeg(seg) * u, floorY - s.height * unit];};
	const st = bounceAt(peaks, t);
	const [bx, by] = posAt(t);
	const bh = plateHeight(ball.plate, ball.w);
	const tiles: React.ReactNode[] = [];
	if (floor) {const pl = floor.plate, tw = (floor.h * (pl.box[2] - pl.box[0])) / (pl.box[3] - pl.box[1]); const end = segX(peaks.length) + 200; for (let k = 0; x - 200 + k * tw < end; k++) tiles.push(<SvgPlate key={k} plate={pl} x={x - 200 + k * tw} y={floorY - floor.h * 0.15} w={tw} />);}
	const dots: [number, number][] = [];
	if (trail) for (let tt = 0; tt < t; tt += 0.04) dots.push(posAt(tt));
	return <>
		<FrameSvg style={{opacity: o}}>
			{tiles}
			{!floor ? <line x1={x - 120} x2={segX(peaks.length) + 120} y1={floorY} y2={floorY} stroke={INK} strokeWidth={5} /> : null}
			{scale ? <g><line x1={scale.x} x2={scale.x} y1={floorY} y2={floorY - scale.max * unit} stroke={INK} strokeWidth={4} />{Array.from({length: Math.floor(scale.max / scale.step) + 1}, (_, i) => {const v = i * scale.step, yy = floorY - v * unit; return <g key={i}><line x1={scale.x - 12} x2={scale.x} y1={yy} y2={yy} stroke={INK} strokeWidth={3} /><text x={scale.x - 20} y={yy + 10} textAnchor="end" style={TXT(30, INK, 700)}>{niceNum(v)}</text></g>;})}{scale.unit ? <text x={scale.x} y={floorY - scale.max * unit - 20} textAnchor="middle" style={TXT(28, INK_SOFT, 700)}>{scale.unit}</text> : null}</g> : null}
			{dots.map((d, i) => <circle key={i} cx={d[0]} cy={d[1]} r={4} fill={MATH_ROLES.a.stroke} opacity={0.5} />)}
			{arrows ? peaks.map((p, j) => {if (j === 0 || j > (arrows.upTo ?? peaks.length) || p * unit < 20) return null; const cx = segX(j) + wSeg(j) / 2, ao = prog(f, arrows.at + j * 10, 10); return <g key={'ar' + j} opacity={ao}>
				<line x1={cx - 16} x2={cx - 16} y1={floorY - 10} y2={floorY - p * unit + 12} stroke={MATH_TEAL} strokeWidth={4} /><path d={`M${cx - 26},${floorY - p * unit + 26} L${cx - 16},${floorY - p * unit + 10} L${cx - 6},${floorY - p * unit + 26}`} stroke={MATH_TEAL} strokeWidth={4} fill="none" />
				<line x1={cx + 16} x2={cx + 16} y1={floorY - p * unit + 12} y2={floorY - 10} stroke={MATH_AMBER} strokeWidth={4} /><path d={`M${cx + 6},${floorY - 26} L${cx + 16},${floorY - 10} L${cx + 26},${floorY - 26}`} stroke={MATH_AMBER} strokeWidth={4} fill="none" />
			</g>;}) : null}
			<SvgPlate plate={ball.plate} x={bx - ball.w / 2} y={by - bh} w={ball.w} />
		</FrameSvg>
		{onState ? <div style={{position: 'absolute', inset: 0, pointerEvents: 'none', opacity: o}}>{onState(st)}</div> : null}
	</>;
};

// ---------- ConvergenceStrip ----------
/**
 * A number line with a target marker; dots land one after another (terms or totals), joined by zigzag arcs, with
 * a bracket from the newest dot to the target that shrinks as they close in, grey value readouts, an optional
 * second row, and `feedFrom` so each dot can fly in from a frame point (such as the bounce rig's peaks).
 */
export const ConvergenceStrip: React.FC<{x: number; y: number; width?: number; range: Range; target: {value: number; label?: string}; values: readonly number[]; at: number; stagger?: number;
	arcs?: boolean; bracket?: boolean; readouts?: boolean | ((v: number, i: number) => string); row2?: {values: readonly number[]; at: number; stagger?: number; color?: string; dy?: number};
	feedFrom?: (i: number) => readonly [number, number]; ticks?: readonly {value: number; label: string}[]; color?: string; out?: number}> = ({x, y, width = 1400, range, target, values, at, stagger = 24, arcs = true, bracket = true, readouts = true, row2, feedFrom, ticks = [], color = MATH_ROLES.a.stroke, out}) => {
	const f = useCurrentFrame();
	const {fps} = useVideoConfig();
	const o = out === undefined ? 1 : 1 - prog(f, out, 12);
	if (o <= 0.001) return null;
	const X = (v: number) => x + ((v - range[0]) / (range[1] - range[0])) * width;
	const landed = values.map((_, i) => f >= at + i * stagger);
	const lastI = landed.lastIndexOf(true);
	const dot = (v: number, i: number, a: number, yy: number, c: string, key: string) => {
		const p = prog(f, a, 16);
		if (p <= 0) return null;
		let px = X(v), py = yy;
		if (feedFrom && p < 1) {const [fx, fy] = feedFrom(i), u = smooth(p); px = fx + (px - fx) * u; py = fy + (py - fy) * u;}
		const pop = spring({frame: f - a - 14, fps, config: {damping: 12, stiffness: 180}});
		return <g key={key}><circle cx={px} cy={py} r={12 * (feedFrom ? 1 : 0.6 + 0.4 * pop)} fill={c} stroke={CARD} strokeWidth={4} />
			{readouts && p >= 1 ? <text x={px} y={yy + (i % 2 ? 58 : -24)} textAnchor="middle" style={TXT(28, INK_SOFT, 700)}>{typeof readouts === 'function' ? readouts(v, i) : niceNum(v, 3)}</text> : null}</g>;
	};
	return <FrameSvg style={{opacity: o}}>
		<line x1={x - 10} x2={x + width + 10} y1={y} y2={y} stroke={INK} strokeWidth={4} />
		{ticks.map(t => <g key={t.label}><line x1={X(t.value)} x2={X(t.value)} y1={y - 10} y2={y + 10} stroke={INK} strokeWidth={3} /><text x={X(t.value)} y={y + 100} textAnchor="middle" style={TXT(30, INK, 700)}>{t.label}</text></g>)}
		<g><line x1={X(target.value)} x2={X(target.value)} y1={y - 60} y2={y + 60} stroke={MATH_ANSWER} strokeWidth={5} strokeDasharray="10 7" />{target.label ? <text x={X(target.value)} y={y - 74} textAnchor="middle" style={TXT(36, MATH_ANSWER, 800)}>{target.label}</text> : null}</g>
		{arcs ? values.slice(1).map((v, i) => {const a = at + (i + 1) * stagger; const x0 = X(values[i]), x1 = X(v); return <DrawPath key={'z' + i} d={`M${x0},${y - 8} Q${(x0 + x1) / 2},${y - 40 - 30 * (i % 2)} ${x1},${y - 8}`} at={a} dur={14} color={INK_SOFT} width={3} />;}) : null}
		{values.map((v, i) => dot(v, i, at + i * stagger, y, color, 'd' + i))}
		{row2 ? row2.values.map((v, i) => dot(v, i, row2.at + i * (row2.stagger ?? stagger), y + (row2.dy ?? 130), row2.color ?? MATH_ROLES.k.stroke, 'e' + i)) : null}
		{row2 ? <line x1={x - 10} x2={x + width + 10} y1={y + (row2.dy ?? 130)} y2={y + (row2.dy ?? 130)} stroke={INK} strokeWidth={3} opacity={prog(f, row2.at, 12)} /> : null}
		{bracket && lastI >= 0 ? (() => {const xa = X(values[lastI]), xb = X(target.value), by = y + 34; return Math.abs(xb - xa) > 6 ? <path d={`M${xa},${by - 10} V${by} H${xb} V${by - 10}`} stroke={MATH_AMBER} strokeWidth={4} fill="none" /> : null;})() : null}
	</FrameSvg>;
};

// ---------- term ladder, partial sums, sigma ----------
/**
 * A row of value cards (52 px) on fixed position slots with grey position labels (labelPrefix + n): cards drop in,
 * can glow, reorder along arcs while the labels stay put, take step arcs with labels, an end cap after a card, and
 * a run-off of extra dashed cards. At most six cards.
 */
export const StudioTermLadder: React.FC<{x: number; y: number; values: readonly React.ReactNode[]; start?: number; labelPrefix?: string; dropAt: number; stagger?: number; cardW?: number; gap?: number; role?: RoleKey;
	glow?: {index: number; at: number; out?: number}; reorder?: {to: readonly number[]; at: number; dur?: number}; arcs?: readonly {from: number; to: number; label: string; at: number}[];
	endCap?: {after: number; at: number; label?: string}; runOff?: {extra: number; at: number}; out?: number}> = ({x, y, values, start = 1, labelPrefix = 'n = ', dropAt, stagger = 12, cardW = 200, gap = 34, role = 'a', glow, reorder, arcs = [], endCap, runOff, out}) => {
	const f = useCurrentFrame();
	if (values.length > 6) throw new RangeError('StudioTermLadder: at most six cards');
	const o = out === undefined ? 1 : 1 - prog(f, out, 12);
	if (o <= 0.001) return null;
	const col = MATH_ROLES[role];
	const slotX = (i: number) => x + i * (cardW + gap);
	const ro = reorder ? smooth(prog(f, reorder.at, reorder.dur ?? 30)) : 0;
	const H = 110;
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		{values.map((_, i) => <div key={'l' + i} style={{position: 'absolute', left: slotX(i), top: y + H + 14, width: cardW, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: INK_SOFT, opacity: prog(f, dropAt + i * stagger, 12)}}>{labelPrefix}{start + i}</div>)}
		{values.map((v, i) => {
			const a = dropAt + i * stagger, p = smooth(prog(f, a, 14));
			const to = reorder ? reorder.to[i] : i, cx = slotX(i) + (slotX(to) - slotX(i)) * ro, lift = reorder ? -Math.sin(Math.PI * ro) * 90 * (i % 2 ? -1 : 1) : 0;
			const g = glow && glow.index === i ? vis(f, glow.at, glow.out) : 0;
			return <div key={i} style={{position: 'absolute', left: cx, top: y - (1 - p) * 60 + lift, width: cardW, height: H, opacity: p, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', background: g > 0 ? `rgba(248,232,200,${g})` : CARD, borderRadius: 18, border: `4px solid ${g > 0 ? MATH_ROLES.k.stroke : col.stroke}`, boxShadow: CARD_SHADOW, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: col.ink, whiteSpace: 'pre'}}>{v}</div>;
		})}
		{runOff ? Array.from({length: runOff.extra}, (_, k) => <div key={'ro' + k} style={{position: 'absolute', left: slotX(values.length + k), top: y, width: cardW, height: H, boxSizing: 'border-box', borderRadius: 18, border: `4px dashed ${INK_SOFT}`, opacity: prog(f, runOff.at + k * 8, 12), display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: INK_SOFT}}>…</div>) : null}
		<FrameSvg>
			{arcs.map((a, i) => {const x0 = slotX(a.from) + cardW / 2, x1 = slotX(a.to) + cardW / 2, mid = (x0 + x1) / 2; return <g key={i}><DrawPath d={`M${x0},${y - 8} Q${mid},${y - 80} ${x1},${y - 8}`} at={a.at} dur={14} color={MATH_ROLES.k.stroke} width={5} /><text x={mid} y={y - 66} textAnchor="middle" opacity={prog(f, a.at + 6, 10)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, fill: MATH_AMBER}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{a.label}</text></g>;})}
			{endCap ? (() => {const ex = slotX(endCap.after) + cardW + gap / 2; return <g opacity={prog(f, endCap.at, 12)}><line x1={ex} x2={ex} y1={y - 20} y2={y + H + 20} stroke={MATH_MISTAKE} strokeWidth={7} strokeLinecap="round" />{endCap.label ? <text x={ex + 12} y={y - 26} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: MATH_MISTAKE}}>{endCap.label}</text> : null}</g>;})() : null}
		</FrameSvg>
	</div>;
};

/**
 * Columns of stacked blocks, one block per term (positive terms): column j holds the first j + 1 terms and is
 * built at buildAt[j]. Labels under the columns (S₁, S₂, ...), total readouts on top (checked against the block
 * totals when given; a mismatch throws), a pulsing top, a difference bracket between two columns, and onBuilt,
 * which renders in step with the number of built columns (to flip a plate readout).
 */
export const StudioPartialSumStack: React.FC<{x: number; y: number; terms: readonly number[]; columns?: number; buildAt: number | readonly number[]; stagger?: number; blockW?: number; gap?: number; unit?: number;
	labels?: (j: number) => string; readouts?: readonly number[] | true; pulseTop?: {column: number; at: number}; difference?: {upper: number; lower: number; at: number; label?: string};
	onBuilt?: (built: number) => React.ReactNode; out?: number}> = ({x, y, terms, columns, buildAt, stagger = 30, blockW = 120, gap = 40, unit = 12, labels = j => `S${String(j + 1).split('').map(c => '₀₁₂₃₄₅₆₇₈₉'[+c]).join('')}`, readouts = true, pulseTop, difference, onBuilt, out}) => {
	const f = useCurrentFrame();
	if (terms.some(t => !(t > 0))) throw new RangeError('StudioPartialSumStack: positive terms only in this version');
	const nc = columns ?? terms.length;
	const totals = Array.from({length: nc}, (_, j) => terms.slice(0, j + 1).reduce((s, v) => s + v, 0));
	if (Array.isArray(readouts)) readouts.forEach((r, j) => {if (Math.abs(r - totals[j]) > 1e-9) throw new RangeError(`StudioPartialSumStack: readout ${r} for column ${j + 1} does not match the blocks (${totals[j]})`);});
	const at = (j: number) => (typeof buildAt === 'number' ? buildAt + j * stagger : buildAt[j]);
	const o = out === undefined ? 1 : 1 - prog(f, out, 12);
	if (o <= 0.001) return null;
	const built = Array.from({length: nc}, (_, j) => f >= at(j)).filter(Boolean).length;
	const roles: RoleKey[] = ['a', 'b', 'k', 'gradient', 'answer'];
	const cx = (j: number) => x + j * (blockW + gap);
	return <>
		<FrameSvg style={{opacity: o}}>
			<line x1={x - 20} x2={cx(nc - 1) + blockW + 20} y1={y} y2={y} stroke={INK} strokeWidth={4} />
			{Array.from({length: nc}, (_, j) => {
				const a = at(j);
				let base = y;
				return <g key={j}>
					{terms.slice(0, j + 1).map((t, k) => {const p = smooth(prog(f, a + k * 4, 12)); const h = t * unit, yy = base - h; base = yy; return <rect key={k} x={cx(j)} y={yy - (1 - p) * 40} width={blockW} height={h - 2} rx={6} fill={MATH_ROLES[roles[k % roles.length]].soft} stroke={MATH_ROLES[roles[k % roles.length]].stroke} strokeWidth={3} opacity={p} />;})}
					<text x={cx(j) + blockW / 2} y={y + 44} textAnchor="middle" opacity={prog(f, a, 12)} style={TXT(34, INK, 800)}>{labels(j)}</text>
					{readouts ? (() => {const pul = pulseTop && pulseTop.column === j ? 1 + 0.2 * Math.sin(Math.PI * Math.min(1, Math.max(0, (f - pulseTop.at) / 20))) : 1; return <text x={cx(j) + blockW / 2} y={y - totals[j] * unit - 16} textAnchor="middle" opacity={prog(f, a + (j + 1) * 4 + 6, 12)} style={{...TXT(44 * pul, INK, 800)}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{niceNum(totals[j])}</text>;})() : null}
				</g>;
			})}
			{difference ? (() => {const xu = cx(difference.upper) + blockW + 8, yu = y - totals[difference.upper] * unit, yl = y - totals[difference.lower] * unit; return <g opacity={prog(f, difference.at, 12)}><line x1={cx(difference.lower)} x2={xu + 10} y1={yl} y2={yl} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 7" /><path d={`M${xu},${yu} h14 V${yl} h-14`} stroke={MATH_AMBER} strokeWidth={5} fill="none" /><text x={xu + 26} y={(yu + yl) / 2 + 12} style={TXT(38, MATH_AMBER, 800)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{difference.label ?? niceNum(totals[difference.upper] - totals[difference.lower])}</text></g>;})() : null}
		</FrameSvg>
		{onBuilt ? <div style={{position: 'absolute', inset: 0, pointerEvents: 'none', opacity: o}}>{onBuilt(built)}</div> : null}
	</>;
};

/**
 * A large ∑ with lower, upper and right slots that reveal on cues; a counter dial runs k from start to stop, each
 * value dropping a term card into a row; then the term count ("stop − start + 1 terms") and the total. Throws
 * when stop < start. The total is computed from ruleFn.
 */
export const StudioSigmaBuilder: React.FC<{x: number; y: number; start: number; stop: number; rule: React.ReactNode; ruleFn: (k: number) => number; counter?: string; size?: number;
	revealAt: {lower: number; upper: number; rule: number}; dial?: {at: number; per?: number}; cardsY?: number; cardW?: number; count?: {at: number}; total?: {at: number}; role?: RoleKey; out?: number}> = ({x, y, start, stop, rule, ruleFn, counter = 'k', size = 150, revealAt, dial, cardsY, cardW, count, total, role = 'a', out}) => {
	const f = useCurrentFrame();
	if (stop < start) throw new RangeError('StudioSigmaBuilder: stop must not be below start');
	const o = out === undefined ? 1 : 1 - prog(f, out, 12);
	if (o <= 0.001) return null;
	const ks = Array.from({length: stop - start + 1}, (_, i) => start + i);
	const sum = ks.reduce((s, k) => s + ruleFn(k), 0);
	const per = dial?.per ?? 24;
	const step = dial ? Math.floor((f - dial.at) / per) : -1;
	const curK = dial && step >= 0 ? ks[Math.min(ks.length - 1, step)] : undefined;
	const col = MATH_ROLES[role];
	const slot = (a: number, c: React.ReactNode, st: React.CSSProperties) => <div style={{position: 'absolute', opacity: prog(f, a, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, whiteSpace: 'pre', ...st}}>{c}</div>;
	const cy = cardsY ?? y + size * 1.9;
	const cw = cardW ?? Math.min(170, 1500 / ks.length);
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		<div style={{position: 'absolute', left: x, top: y, fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: size, lineHeight: 1, color: INK}}>∑</div>
		{slot(revealAt.upper, stop, {left: x + size * 0.18, top: y - size * 0.42, fontSize: size * 0.32, color: col.ink})}
		{slot(revealAt.lower, `${counter} = ${start}`, {left: x - size * 0.05, top: y + size * 1.02, fontSize: size * 0.3, color: col.ink})}
		{slot(revealAt.rule, rule, {left: x + size * 0.8, top: y + size * 0.22, fontSize: size * 0.42, color: INK})}
		{curK !== undefined ? <div style={{position: 'absolute', left: x + size * 3.4, top: y + size * 0.1, background: CARD, borderRadius: 18, padding: '6px 24px', border: `4px solid ${col.stroke}`, boxShadow: CARD_SHADOW, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: col.ink, fontVariantNumeric: 'tabular-nums'}}>{counter} = {curK}</div> : null}
		{dial ? ks.map((k, i) => {const a = dial.at + i * per + 6, p = smooth(prog(f, a, 12)); return p > 0 ? <div key={k} style={{position: 'absolute', left: x + i * (cw + 14), top: cy - (1 - p) * 50, width: cw, opacity: p, textAlign: 'center', background: CARD, borderRadius: 14, border: `3px solid ${MATH_ROLES.k.stroke}`, padding: '4px 0', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: MATH_ROLES.k.ink, boxSizing: 'border-box'}}>{niceNum(ruleFn(k))}<div style={{fontSize: 28, fontWeight: 700, color: INK_SOFT}}>{counter} = {k}</div></div> : null;}) : null}
		{count ? slot(count.at, `${stop} − ${start} + 1 = ${ks.length} terms`, {left: x, top: cy + 120, fontSize: 40, color: INK_SOFT}) : null}
		{total ? slot(total.at, <span>total = <span style={{color: MATH_ANSWER}}>{niceNum(sum)}</span></span>, {left: x + ks.length * (cw + 14) + 20, top: cy + 10, fontSize: 56, color: INK}) : null}
	</div>;
};

/** Live value of a geometric term for the live-ratio mode: a·r^(n−1), r eased by the caller. */
export const geometricTerm = (a: number, r: number) => (n: number) => a * r ** (n - 1);
