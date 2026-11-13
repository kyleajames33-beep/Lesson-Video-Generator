// Lesson parts for math-a12-f06 (Revision 3: the finite geometric sum by expansion; rice on a chessboard), on the
// maths studio kit and the f01 to f05 board parts (imported read-only through ../math-a12-f05/parts). Lesson-local rigs:
// - GrainStrip: the first squares of the board's bottom row, enlarged (the plate cropped to Codex's measured lines),
//   holding piles that can double, slide one square along, fade or glow; each pile sits on a coloured tray that
//   says which row it belongs to (blue: the sum, amber: the doubled row, grey: the row taken away);
// - GrainBoard: the whole board with grains on any number of squares (tidy grains up to 64, the heap plate above),
//   fitted to the measured row and column lines; squares run left to right from the bottom row up;
// - Frac (a stacked fraction), ValueSlider (r on a track with r = 1 marked as not allowed), ReadStrip (three live
//   values in one row).
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, SvgPlate, usePlatePreload, vis} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';
import {AMBER, AMBER_SOFT, AMBER_STROKE, BLUE, BLUE_SOFT, BOARD8, BOARD_COLS, BOARD_ROWS, GRAIN, POS, RED, TEAL} from '../math-a12-f05/parts';

export * from '../math-a12-f05/parts';

// ---------- the numbers (design "Numbers to verify") ----------
export const gsum = (a: number, r: number, n: number) => (r === 1 ? n * a : (a * (r ** n - 1)) / (r - 1));
export const BOARD_TOTAL = '18 446 744 073 709 551 615';
{
	const add = (a: number, r: number, n: number) => Array.from({length: n}, (_, i) => a * r ** i).reduce((s, v) => s + v, 0);
	const checks: [string, boolean][] = [
		['totals', [1, 3, 7, 15, 31, 63, 127, 255, 511, 1023].every((v, i) => add(1, 2, i + 1) === v && 2 ** (i + 1) - 1 === v) && 2 ** 9 === 512],
		['numeric expansion', (2 - 1) * (1 + 2 + 4 + 8) === 15 && 2 + 4 + 8 + 16 - 1 - 2 - 4 - 8 === 15 && 16 - 1 === 15],
		['identity', [2, 3, -2, 0.5].every(x => [1, 2, 3, 4, 5, 6].every(n => Math.abs((x - 1) * add(1, x, n) - (x ** n - 1)) < 1e-9))],
		['forms', [2, 0.5, -3].every(r => Math.abs(gsum(3, r, 4) - (3 * (1 - r ** 4)) / (1 - r)) < 1e-9) && 2 ** 4 - 1 === 15 && 1 - 0.5 ** 4 === 0.9375 && gsum(5, 1, 7) === 35],
		['board', Math.abs(Number(BOARD_TOTAL.replace(/ /g, '')) - (2 ** 64 - 1)) < 4096 && BOARD_TOTAL.replace(/ /g, '').length === 20 && 2 ** 64 / 1e19 > 1.84 && 2 ** 64 / 1e19 < 1.85],
		['sigma', gsum(3, 2, 6) === 189 && add(3, 2, 6) === 189 && 2 ** 6 === 64 && 3 * 63 === 189],
		['negative', add(1, -3, 6) === -182 && (-3) ** 6 === 729 && (1 - 729) / 4 === -182 && [1, -2, 7, -20, 61, -182].every((v, i) => add(1, -3, i + 1) === v)],
		['half', add(64, 0.5, 8) === 127.5 && 128 * (1 - 1 / 256) === 127.5 && [64, 96, 112, 120, 124, 126, 127, 127.5].every((v, i) => add(64, 0.5, i + 1) === v)],
		['A1', gsum(2, 3, 5) === 242 && add(2, 3, 5) === 242 && (2 * (3 ** 4 - 1)) / 2 === 80],
		['A2', 48 / 6 === 8 && gsum(3, 2, 8) === 765 && 3 * 255 === 765 && 6 * 255 === 1530],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-f06 numbers: ' + bad.join(', '));
}

// ---------- plates ----------
export const HEAP: PlateSpec = {src: 'assets/maths/ma12-rice-heap-v1.png', nat: [1402, 1122], box: [132, 232, 1257, 901]};
export const BALL: PlateSpec = {src: 'assets/biology/b6a-tennis-ball-v1.png', nat: [1600, 1600], box: [174, 166, 1427, 1413]};
export const FLOOR: PlateSpec = {src: 'assets/physics/phys-y11-surface-floor-v1.png', nat: [2400, 300], box: [0, 48, 2400, 254]};
const ph = (p: PlateSpec, w: number) => (w * (p.box[3] - p.box[1])) / (p.box[2] - p.box[0]);

// ---------- piles on the enlarged strip ----------
export type Pile = {pos: number; count: number; of?: number; tone?: 'blue' | 'amber' | 'grey'; o?: number; glow?: number};
const TRAY = {blue: [BLUE_SOFT, BLUE], amber: [AMBER_SOFT, AMBER_STROKE], grey: ['#e6e1d6', INK_SOFT]} as const;
/** Width of the strip of n squares when each square is drawn sq px wide (the plate's own proportions are kept). */
export const stripSize = (n: number, sq: number) => {const s = sq / ((BOARD_COLS[n] - BOARD_COLS[0]) / n); return {w: (BOARD_COLS[n] - BOARD_COLS[0]) * s, h: (BOARD_ROWS[8] - BOARD_ROWS[7]) * s, s};};
/**
 * n squares of the bottom row. A pile at `pos` (a square index from 0, fractional while it slides) shows `count`
 * grains (fractional: the newest grain fades in) laid out for `of` grains (default: its own count rounded up to a
 * power of two), on a tray in its row colour. `labels` are counts under the squares.
 */
export const GrainStrip: React.FC<{x: number; y: number; n: number; sq: number; piles: readonly Pile[]; labels?: readonly {i: number; text: string; o?: number; color?: string}[]; o?: number}> = ({x, y, n, sq, piles, labels = [], o = 1}) => {
	usePlatePreload([BOARD8.src, GRAIN.src]);
	if (o <= 0.001) return null;
	const {w, h, s} = stripSize(n, sq);
	const X = (p: number) => {const i = Math.max(0, Math.min(n - 1, Math.floor(p))), u = p - i; return x + (BOARD_COLS[i] - BOARD_COLS[0]) * s + u * (BOARD_COLS[i + 1] - BOARD_COLS[i]) * s;};
	return <FrameSvg style={{opacity: o}}>
		<svg x={x} y={y} width={w} height={h} viewBox={`${BOARD_COLS[0]} ${BOARD_ROWS[7]} ${BOARD_COLS[n] - BOARD_COLS[0]} ${BOARD_ROWS[8] - BOARD_ROWS[7]}`}><image href={staticFile(BOARD8.src)} x={0} y={0} width={BOARD8.nat[0]} height={BOARD8.nat[1]} /></svg>
		<rect x={x} y={y} width={w} height={h} fill="none" stroke={INK} strokeWidth={4} />
		{piles.map((p, k) => {
			const po = p.o ?? 1;
			if (po <= 0.01 || p.count <= 0) return null;
			const full = p.of ?? 2 ** Math.ceil(Math.log2(Math.max(1, p.count))), kk = Math.ceil(Math.sqrt(full)), rows = Math.ceil(full / kk);
			const x0 = X(p.pos), cell = (Math.min(sq, h) * 0.74) / kk, gw = Math.min(cell * 0.95, sq * 0.36);
			const [fill, edge] = TRAY[p.tone ?? 'blue'];
			return <g key={k} opacity={po}>
				<rect x={x0 + sq * 0.08} y={y + h * 0.08} width={sq * 0.84} height={h * 0.84} rx={14} fill={fill} opacity={0.82} stroke={edge} strokeWidth={p.glow ? 4 + 5 * p.glow : 4} strokeDasharray={p.tone === 'grey' ? '10 8' : undefined} />
				{Array.from({length: Math.min(Math.ceil(p.count), full)}, (_, j) => {const part = Math.min(1, p.count - j); const gx = x0 + sq / 2 + ((j % kk) - (kk - 1) / 2) * cell, gy = y + h / 2 + (Math.floor(j / kk) - (rows - 1) / 2) * cell; return <SvgPlate key={j} plate={GRAIN} x={gx - gw / 2} y={gy - ph(GRAIN, gw) / 2} w={gw} opacity={part * (p.tone === 'grey' ? 0.55 : 1)} />;})}
			</g>;
		})}
		{labels.map((l, k) => ((l.o ?? 1) > 0.01 ? <text key={'l' + k} x={X(l.i) + sq / 2} y={y + h + 46} textAnchor="middle" opacity={l.o ?? 1} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, fill: l.color ?? BLUE}}>{l.text}</text> : null))}
	</FrameSvg>;
};

// ---------- the whole board ----------
/** Frame rectangle of square i (0-based: left to right along the bottom row, then the next row up). */
export const boardCell = (x: number, y: number, w: number, i: number) => {
	const s = w / (BOARD8.box[2] - BOARD8.box[0]), c = i % 8, r = 7 - Math.floor(i / 8);
	const fx = (v: number) => x + (v - BOARD8.box[0]) * s, fy = (v: number) => y + (v - BOARD8.box[1]) * s;
	return {x0: fx(BOARD_COLS[c]), x1: fx(BOARD_COLS[c + 1]), y0: fy(BOARD_ROWS[r]), y1: fy(BOARD_ROWS[r + 1])};
};
export const boardHeight = (w: number) => ph(BOARD8, w);
/**
 * `filled` squares hold their doubling piles (fractional: the newest fades in): tidy painted grains up to 64, the
 * painted heap at one fixed size above that. `glow` rings a square; `dim` tints the squares before `dim.upTo`.
 */
export const GrainBoard: React.FC<{x: number; y: number; w: number; filled: number; glow?: {i: number; o: number}; teal?: {upTo: number; o: number}; o?: number}> = ({x, y, w, filled, glow, teal, o = 1}) => {
	usePlatePreload([BOARD8.src, GRAIN.src, HEAP.src]);
	if (o <= 0.001) return null;
	return <FrameSvg style={{opacity: o}}>
		<SvgPlate plate={BOARD8} x={x} y={y} w={w} />
		{Array.from({length: Math.min(64, Math.ceil(filled))}, (_, i) => {
			const q = boardCell(x, y, w, i), sw = q.x1 - q.x0, sh = q.y1 - q.y0, op = Math.min(1, filled - i), count = 2 ** i;
			if (count > 64) {const hw = sw * 0.8; return <g key={i} opacity={op}><SvgPlate plate={HEAP} x={q.x0 + (sw - hw) / 2} y={q.y0 + sh * 0.5 - ph(HEAP, hw) / 2} w={hw} /></g>;}
			const kk = Math.ceil(Math.sqrt(count)), rows = Math.ceil(count / kk), cell = (Math.min(sw, sh) * 0.8) / kk, gw = Math.min(cell * 0.95, sw * 0.42);
			return <g key={i} opacity={op}>{Array.from({length: count}, (_, j) => <SvgPlate key={j} plate={GRAIN} x={q.x0 + sw / 2 + ((j % kk) - (kk - 1) / 2) * cell - gw / 2} y={q.y0 + sh / 2 + (Math.floor(j / kk) - (rows - 1) / 2) * cell - ph(GRAIN, gw) / 2} w={gw} />)}</g>;
		})}
		{teal && teal.o > 0.01 ? Array.from({length: teal.upTo}, (_, i) => {const q = boardCell(x, y, w, i); return <rect key={'t' + i} x={q.x0 + 2} y={q.y0 + 2} width={q.x1 - q.x0 - 4} height={q.y1 - q.y0 - 4} fill={TEAL} opacity={0.28 * teal.o} />;}) : null}
		{glow && glow.o > 0.01 ? (() => {const q = boardCell(x, y, w, glow.i); return <rect x={q.x0 + 3} y={q.y0 + 3} width={q.x1 - q.x0 - 6} height={q.y1 - q.y0 - 6} rx={6} fill="none" stroke={AMBER_STROKE} strokeWidth={8} opacity={glow.o} />;})() : null}
	</FrameSvg>;
};

// ---------- a stacked fraction ----------
export const Frac: React.FC<{n: React.ReactNode; d: React.ReactNode}> = ({n, d}) => (
	<span style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'center', verticalAlign: 'middle', margin: '0 0.12em', lineHeight: 1.12}}>
		<span style={{padding: '0 0.14em 0.04em', whiteSpace: 'pre'}}>{n}</span>
		<span style={{alignSelf: 'stretch', height: '0.07em', background: 'currentColor', borderRadius: 2}} />
		<span style={{padding: '0.04em 0.14em 0', whiteSpace: 'pre'}}>{d}</span>
	</span>
);

// ---------- a value on a track, with one value not allowed ----------
export const ValueSlider: React.FC<{x: number; y: number; w: number; value: number; min: number; max: number; ticks: readonly number[]; excluded: number; symbol?: string; at?: number; out?: number}> = ({x, y, w, value, min, max, ticks, excluded, symbol = 'r', at = -30, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const X = (v: number) => x + ((v - min) / (max - min)) * w;
	const txt = (s: number, fill: string): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: s, fill} as React.CSSProperties);
	return <FrameSvg style={{opacity: o}}>
		<text x={x - 22} y={y + 16} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, fill: AMBER}}>{symbol}</text>
		<line x1={X(min)} x2={X(max)} y1={y} y2={y} stroke={AMBER_SOFT} strokeWidth={14} strokeLinecap="round" />
		{ticks.map(v => <g key={v}><line x1={X(v)} x2={X(v)} y1={y + 16} y2={y + 30} stroke={INK_SOFT} strokeWidth={3} strokeLinecap="round" /><text x={X(v)} y={y + 64} textAnchor="middle" style={txt(30, INK_SOFT)}>{String(v).replace('-', '−')}</text></g>)}
		<line x1={X(excluded)} x2={X(excluded)} y1={y - 26} y2={y + 30} stroke={RED} strokeWidth={6} strokeLinecap="round" />
		<circle cx={X(excluded)} cy={y} r={12} fill={CARD} stroke={RED} strokeWidth={5} />
		<text x={X(excluded)} y={y + 64} textAnchor="middle" style={txt(30, RED)}>{excluded}</text>
		<circle cx={X(value)} cy={y} r={24} fill={CARD} stroke={AMBER_STROKE} strokeWidth={7} />
		<circle cx={X(value)} cy={y} r={8} fill={AMBER_STROKE} />
		<rect x={X(max) + 40} y={y - 40} width={230} height={80} rx={18} fill={CARD} stroke={AMBER_STROKE} strokeWidth={4} />
		<text x={X(max) + 155} y={y + 17} textAnchor="middle" style={{...txt(48, AMBER), fontVariantNumeric: 'tabular-nums'} as React.CSSProperties}>{symbol} = {String(value).replace('-', '−')}</text>
	</FrameSvg>;
};

// ---------- three live values in one row ----------
export const ReadStrip: React.FC<{x: number; y: number; at: number; out?: number; cells: readonly {label: string; value: React.ReactNode; color?: string}[]}> = ({x, y, at, out, cells}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, display: 'flex', gap: 34, alignItems: 'baseline', background: CARD, borderRadius: 18, padding: '6px 26px 8px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)'}}>
		{cells.map((c, i) => <div key={i} style={{display: 'flex', gap: 12, alignItems: 'baseline', whiteSpace: 'pre'}}>
			<span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: c.color ?? POS}}>{c.label}</span>
			<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, color: c.color ?? INK, fontVariantNumeric: 'tabular-nums'}}>{c.value}</span>
		</div>)}
	</div>;
};
// ---------- the bounce rig's own scale and floor ----------
/** A height scale without the "0" label (the kit scale prints "0" on top of the floor plate). */
export const HeightScale: React.FC<{x: number; floorY: number; unit: number; max: number; step: number}> = ({x, floorY, unit, max, step}) => (
	<FrameSvg>
		<line x1={x} x2={x} y1={floorY - 12} y2={floorY - max * unit} stroke={INK} strokeWidth={4} />
		{Array.from({length: Math.floor(max / step)}, (_, i) => {const v = (i + 1) * step, yy = floorY - v * unit; return <g key={v}><line x1={x - 12} x2={x} y1={yy} y2={yy} stroke={INK} strokeWidth={3} /><text x={x - 20} y={yy + 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>{v}</text></g>;})}
	</FrameSvg>
);
/** The floor plate tiled at its native aspect from x0 and cut off at x1 (the kit rig tiles 200 px past the last bounce). */
export const FloorStrip: React.FC<{x0: number; x1: number; floorY: number; h: number}> = ({x0, x1, floorY, h}) => {
	usePlatePreload([FLOOR.src]);
	const tw = (h * (FLOOR.box[2] - FLOOR.box[0])) / (FLOOR.box[3] - FLOOR.box[1]), y = floorY - h * 0.15, id = `floor-${x0}-${x1}`;
	const tiles: React.ReactNode[] = [];
	for (let k = 0; x0 + k * tw < x1; k++) tiles.push(<SvgPlate key={k} plate={FLOOR} x={x0 + k * tw} y={y} w={tw} />);
	return <FrameSvg><defs><clipPath id={id}><rect x={x0} y={y - 2} width={x1 - x0} height={h + 4} /></clipPath></defs><g clipPath={`url(#${id})`}>{tiles}</g></FrameSvg>;
};
export {prog};
