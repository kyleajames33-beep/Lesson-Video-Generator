// Lesson parts for math-a12-f03 (Revision 3: arithmetic partial sums; a pyramid of tins, then a planting crew), on the
// maths studio kit and the f01/f02 board parts (imported read-only through ../math-a12-f02/parts). Lesson-local rigs:
// - TinFlip: the 15-row tin pyramid (brief 240 tin plate at 96 px wide: visible body 1448 × 575 file px, so a row is
//   38.1 px tall) on the display base (measured top contact line, file y 308), placed by its bottom-centre base point
//   and a uniform scale S (a camera pull-back; never stretched). Rows glow, carry labels and pair arcs; a violet-tinted
//   copy lifts, turns 180° about the pyramid's centre and slides 8 tins right, so every row holds 16 tins; row
//   readouts and a ringed row;
// - PlantingStrip: f04's opening frame (stand-in; f04 is not built): the painted hillside strip (brief 240, measured
//   top profile) with day tabs, painted tube seedlings (one per 10 planted) on the slope, day bars 50, 80, 110 with
//   "+30" arcs, "?" tabs and the dashed "1,200 in total?" line beside an empty total column.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, FrameSvg, MATH_GRADIENT, SpriteStack, SvgPlate, plateHeight, usePlatePreload} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';
import {AMBER, AMBER_STROKE, BASE, BLUE, POS, TEAL, TIN, TIN_W, tinH} from '../math-a12-f02/parts';

export * from '../math-a12-f02/parts';
export const VIOLET = MATH_GRADIENT;

// ---------- the numbers (design "Numbers to verify") ----------
export const apSum = (a: number, d: number, n: number) => (n / 2) * (2 * a + (n - 1) * d);
{
	const sumTo = (f: (k: number) => number, n: number) => Array.from({length: n}, (_, i) => f(i + 1)).reduce((s, v) => s + v, 0);
	const near = (a: number, b: number) => Math.abs(a - b) < 1e-9;
	const checks: [string, boolean][] = [
		['pyramid', sumTo(k => k, 15) === 120 && 15 * 16 === 240 && near(7.5 * 16, 120) && sumTo(k => k, 50) === 1275 && 25 * 51 === 1275],
		['tally', [1, 3, 6, 10, 15, 21, 28, 36, 45].every((v, i) => sumTo(k => k, i + 1) === v) && sumTo(k => k, 10) === 55],
		['card 07', apSum(3, 4, 20) === 820 && 3 + 19 * 4 === 79 && 10 * (3 + 79) === 820 && 10 * (6 + 20 * 4) === 860],
		['50 to 200', 200 - 50 + 1 === 151 && 151 * 125 === 18875 && sumTo(k => 49 + k, 151) === 18875],
		['problem 2c', apSum(4, 5, 13) === 442 && apSum(4, 5, 14) === 511 && Math.abs((-3 + Math.sqrt(20009)) / 10 - 13.85) < 0.005 && 5 * 13.85 ** 2 + 3 * 13.85 - 1000 > -1 && apSum(4, 5, 13) < 500 && apSum(4, 5, 14) > 500],
		['two roots', [11, 20, 27, 32, 35, 36, 35, 32, 27].every((v, i) => apSum(11, -2, i + 1) === v) && 3 + 1 - 1 - 3 === 0],
		['aid', 1 + 2 + 4 === 7 && near(((1 + 4) / 2) * 3, 7.5)],
		['A1', 5 + 29 * 3 === 92 && apSum(5, 3, 30) === 1455 && 15 * (10 + 30 * 3) === 1500],
		['A2', [10, 11].every(n => apSum(2, 4, n) === 2 * n * n) && apSum(2, 4, 10) === 200 && apSum(2, 4, 11) === 242],
		['crew', [50, 80, 110].every((v, i) => v === 50 + 30 * i)],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-f03 numbers: ' + bad.join(', '));
}

// ---------- the tin pyramid and its upside-down copy ----------
export const ROWS = 15;
export const TH = tinH(TIN_W);
const BASE_TOP = 308;
const pyrOffsets = (() => {
	const out: [number, number][] = [];
	for (let r = 1; r <= ROWS; r++) for (let i = 0; i < r; i++) out.push([(i - (r - 1) / 2) * TIN_W, -(ROWS - r) * TH]);
	return out;
})();
export type FlipState = {o: number; lift: number; rot: number; slide: number};
export type TinFlipProps = {
	bx: number; by: number; S?: number; count?: number; base?: number;
	glow?: (r: number) => number; glowColor?: string; labels?: number; labelSize?: number;
	copy?: FlipState; readouts?: {at: number; stagger?: number; size?: number; out?: number}; ring?: {row: number; o: number};
	arcs?: readonly {a: number; b: number; o: number}[]; o?: number;
};
/** Frame geometry of the original pyramid at base (bx, by) and scale S. */
export const rowBox = (bx: number, by: number, S: number, r: number) => ({x0: bx - r * (TIN_W / 2) * S, x1: bx + r * (TIN_W / 2) * S, y0: by - (ROWS - r + 1) * TH * S, y1: by - (ROWS - r) * TH * S});
export const TinFlip: React.FC<TinFlipProps> = ({bx, by, S = 1, count, base = 1, glow, glowColor = 'rgba(31,111,178,0.10)', labels = 1, labelSize = 30, copy, readouts, ring, arcs = [], o = 1}) => {
	usePlatePreload([TIN.src, BASE.src]);
	const f = useCurrentFrame();
	if (o <= 0.001) return null;
	const bw = 1560 * S, bs = bw / (BASE.box[2] - BASE.box[0]);
	const baseY = by - (BASE_TOP - BASE.box[1]) * bs;
	const midY = by - (ROWS / 2) * TH * S;
	const shown = count ?? pyrOffsets.length;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			{base > 0.01 ? <FrameSvg style={{opacity: base}}><SvgPlate plate={BASE} x={bx - bw / 2} y={baseY} w={bw} /></FrameSvg> : null}
			<SpriteStack plate={TIN} x={bx} y={by} w={TIN_W} scale={S} offsets={pyrOffsets} count={shown} z="front" dropFrom={40} at={-30} />
			{glow ? <FrameSvg>{Array.from({length: ROWS}, (_, k) => {const r = k + 1, g = glow(r); if (g <= 0.01) return null; const b = rowBox(bx, by, S, r); return <rect key={r} x={b.x0 - 4} y={b.y0} width={b.x1 - b.x0 + 8} height={b.y1 - b.y0} rx={6} fill={glowColor} stroke={BLUE} strokeWidth={3} opacity={g} />;})}</FrameSvg> : null}
			{copy && copy.o > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: copy.o, transformOrigin: `${bx}px ${midY}px`, transform: `translate(${copy.slide * 16 * (TIN_W / 2) * S}px, ${-copy.lift * 70 * S}px) rotate(${copy.rot * 180}deg)`, filter: 'hue-rotate(245deg) saturate(0.75) brightness(0.92)'}}>
				<SpriteStack plate={TIN} x={bx} y={by} w={TIN_W} scale={S} offsets={pyrOffsets} z="front" at={-30} />
			</div> : null}
			<FrameSvg>
				{labels > 0.01 ? Array.from({length: ROWS}, (_, k) => {const r = k + 1, b = rowBox(bx, by, S, r); const vis = shown >= (r * (r - 1)) / 2 + 0.5; return vis ? <text key={r} x={b.x0 - 14} y={(b.y0 + b.y1) / 2 + labelSize * 0.36} textAnchor="end" opacity={labels} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: labelSize, fill: POS}}>{r}</text> : null;}) : null}
				{arcs.map((a, i) => {if (a.o <= 0.01) return null; const A = rowBox(bx, by, S, a.a), B = rowBox(bx, by, S, a.b); const ax = A.x0 - 54, ay = (A.y0 + A.y1) / 2, bxx = B.x0 - 54, byy = (B.y0 + B.y1) / 2; const cx = Math.min(ax, bxx) - 140; return <path key={i} d={`M${ax},${ay} Q${cx},${(ay + byy) / 2} ${bxx},${byy}`} stroke={TEAL} strokeWidth={5} fill="none" opacity={a.o} />;})}
				{readouts ? Array.from({length: ROWS}, (_, k) => {const r = k + 1, b = rowBox(bx, by, S, r); const xr = bx + (16 * (TIN_W / 2) + (16 - r) * (TIN_W / 2)) * S + 10; const p = prog(f, readouts.at + k * (readouts.stagger ?? 3), 8) * (readouts.out === undefined ? 1 : 1 - prog(f, readouts.out, 10)); return p > 0.01 ? <text key={'r' + r} x={xr} y={(b.y0 + b.y1) / 2 + (readouts.size ?? 26) * 0.36} opacity={p} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: readouts.size ?? 26, fill: TEAL}}>16</text> : null;}) : null}
				{ring && ring.o > 0.01 ? (() => {const b = rowBox(bx, by, S, ring.row); const x1 = bx + (16 * (TIN_W / 2) + (16 - ring.row) * (TIN_W / 2)) * S; return <rect x={b.x0 - 8} y={b.y0 - 4} width={x1 - b.x0 + 16} height={b.y1 - b.y0 + 8} rx={10} fill="none" stroke={AMBER_STROKE} strokeWidth={5} opacity={ring.o} />;})() : null}
			</FrameSvg>
		</div>
	);
};
/** Ease between two values. */
export const mix = (a: number, b: number, u: number) => a + (b - a) * u;

// ---------- f04's opening frame (stand-in): the planting strip ----------
export const HILL: PlateSpec = {src: 'assets/maths/ma12-hillside-strip-v1.png', nat: [2172, 724], box: [0, 450, 2172, 724]};
export const SEED: PlateSpec = {src: 'assets/maths/ma12-tube-seedling-v1.png', nat: [1024, 1536], box: [207, 221, 817, 1320]};
const HILL_PROFILE = [[0, 517], [543, 501], [1086, 461], [1629, 505], [2171, 517]] as const;
const ST = {x: 60, w: 1800, top: 640};
const HS = ST.w / HILL.nat[0];
/** Frame y of the hillside's top surface at frame x (linear between the measured profile points). */
export const hillY = (x: number) => {
	const fx = (x - ST.x) / HS;
	let y: number = HILL_PROFILE[0][1];
	for (let i = 0; i < HILL_PROFILE.length - 1; i++) {const [x0, y0] = HILL_PROFILE[i], [x1, y1] = HILL_PROFILE[i + 1]; if (fx >= x0 && fx <= x1) y = y0 + ((y1 - y0) * (fx - x0)) / (x1 - x0);}
	return ST.top + (y - HILL.box[1]) * HS;
};
export const dayX = (d: number) => ST.x + 70 + (d - 1) * 148;
const DAYS = [50, 80, 110];
const BAR_UNIT = 2.6;
export const PlantingStrip: React.FC<{strip?: number; days?: readonly number[]; arcs?: number; q?: number; line?: number; o?: number}> = ({strip = 1, days = [1, 1, 1], arcs = 1, q = 1, line = 1, o = 1}) => {
	usePlatePreload([HILL.src, SEED.src]);
	if (o <= 0.001) return null;
	const sh = 66, sw = (sh * (SEED.box[2] - SEED.box[0])) / (SEED.box[3] - SEED.box[1]);
	const hh = (HILL.box[3] - HILL.box[1]) * HS;
	const barTop = (d: number) => hillY(dayX(d)) - 70 - DAYS[d - 1] * BAR_UNIT;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<FrameSvg style={{opacity: strip}}>
				<SvgPlate plate={HILL} x={ST.x} y={ST.top} w={ST.w} />
				{Array.from({length: 12}, (_, i) => <text key={i} x={dayX(i + 1)} y={ST.top + hh + 34} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>day {i + 1}</text>)}
			</FrameSvg>
			<FrameSvg>
				{DAYS.map((v, i) => {const d = i + 1, op = days[i]; if (op <= 0.01) return null; const cx = dayX(d), n = v / 10; const cols = Math.ceil(n / 2); return <g key={d} opacity={op}>
					{Array.from({length: n}, (_, j) => {const row = j % 2, col = Math.floor(j / 2); const x = cx + (col - (cols - 1) / 2) * (sw * 0.7) + (row ? sw * 0.35 : 0); const y = hillY(x) + 10 + row * 14; return <SvgPlate key={j} plate={SEED} x={x - sw / 2} y={y - sh} w={sw} />;})}
					<rect x={cx - 34} y={barTop(d)} width={68} height={v * BAR_UNIT} rx={6} fill="#dceaf7" stroke={BLUE} strokeWidth={4} />
					<text x={cx} y={barTop(d) - 14} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: BLUE}}>{v}</text>
				</g>;})}
				{[0, 1].map(i => {const x0 = dayX(i + 1) + 36, x1 = dayX(i + 2) - 36, y0 = barTop(i + 1) - 64, y1 = barTop(i + 2) - 64; return <g key={'a' + i} opacity={arcs}><path d={`M${x0},${y0} Q${(x0 + x1) / 2},${Math.min(y0, y1) - 60} ${x1},${y1}`} stroke={AMBER_STROKE} strokeWidth={5} fill="none" /><text x={(x0 + x1) / 2} y={Math.min(y0, y1) - 48} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: AMBER}} stroke={CARD} strokeWidth={6} paintOrder="stroke">+30</text></g>;})}
				{Array.from({length: 9}, (_, i) => <text key={'q' + i} x={dayX(i + 4)} y={hillY(dayX(i + 4)) - 90} textAnchor="middle" opacity={q} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, fill: INK_SOFT}}>?</text>)}
				<g opacity={line}>
					<rect x={1700} y={230} width={110} height={hillY(1755) - 250} rx={8} fill="none" stroke={TEAL} strokeWidth={4} strokeDasharray="12 8" />
					<line x1={1060} x2={1840} y1={300} y2={300} stroke={INK} strokeWidth={4} strokeDasharray="14 10" />
					<text x={1680} y={286} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">1,200 in total?</text>
					<text x={1755} y={hillY(1755) - 30} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: TEAL}}>total</text>
				</g>
			</FrameSvg>
		</div>
	);
};
export {DrawPath, plateHeight};
