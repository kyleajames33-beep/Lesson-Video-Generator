// Lesson parts for math-a12-f02 (Revision 3: arithmetic sequences; a stack of chairs, then a pyramid of tins), on the
// maths studio kit and f01's board parts (imported read-only). Lesson-local rigs:
// - ChairRig: the painted stacking chair (brief 240 plate) nested by the measured 6 cm offset (81.075 file px at
//   13.5125 px per cm), each new chair drawn behind, against a coded height scale in cm; px per cm can change
//   smoothly (uniform scale about the floor point, never stretched); door and reference lines, amber step brackets
//   between chair tops, a dashed ghost chair that can be crossed, and a ring on the bottom chair;
// - Arcs: amber step arcs between ladder slots with labels that can change (forward or back, numbered);
// - TinPyramid: the painted tin (brief 240 plate, visible body 1448 × 575 file px) stacked row by row from the top,
//   on the painted display base (its measured top contact line, file y 308), with row labels.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, FrameSvg, SpriteStack, SvgPlate, plateHeight, usePlatePreload, vis} from '../../math/studio';

import type {PlateSpec} from '../../math/studio';
import {AMBER, AMBER_STROKE, BLUE, CHAIR, POS, RED} from '../math-a12-f01/parts';

export * from '../math-a12-f01/parts';

// ---------- the numbers (design "Numbers to verify") ----------
export const chairH = (n: number) => 80 + 6 * (n - 1);
{
	const eq = (a: readonly number[], b: readonly number[]) => a.length === b.length && a.every((v, i) => v === b[i]);
	const ap = (a: number, d: number) => (n: number) => a + (n - 1) * d;
	const checks: [string, boolean][] = [
		['guess', 80 + 20 * 6 === 200 && chairH(20) === 194 && 80 + 19 * 6 === 194],
		['line', eq([1, 2, 3, 4, 5, 6, 7, 8].map(chairH), [80, 86, 92, 98, 104, 110, 116, 122]) && [1, 5, 9].every(n => chairH(n) === 6 * n + 74)],
		['150', eq([11, 12, 13, 14].map(chairH), [140, 146, 152, 158]) && Math.abs((150 - 74) / 6 - 38 / 3) < 1e-12 && Math.abs(70 / 6 - (38 / 3 - 1)) < 1e-12],
		['WE1', ap(5, 3)(10) === 32 && ap(5, 3)(16) === 50],
		['WE2', ap(1, 4)(4) === 13 && ap(1, 4)(9) === 33 && 20 / 5 === 4 && 13 - 12 === 1],
		['problem 1', eq([1, 2, 3, 4, 5].map(ap(7, -4)), [7, 3, -1, -5, -9]) && [1, 2, 3, 4].every(n => ap(7, -4)(n) === 11 - 4 * n) && 11 / 4 === 2.75],
		['A1', ap(12, -5)(20) === -83 && 12 + 20 * -5 === -88],
		['A2', ap(2, 4)(3) === 10 && ap(2, 4)(7) === 26 && 16 / 5 === 3.2],
		['tins', Array.from({length: 15}, (_, i) => i + 1).reduce((s, v) => s + v, 0) === 120],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-f02 numbers: ' + bad.join(', '));
}

// ---------- the chair rig ----------
const PX_PER_FILE_CM = 13.5125;
export const chairW = (pxcm: number) => (CHAIR.box[2] - CHAIR.box[0]) * (pxcm / PX_PER_FILE_CM);
export type Rig = {cx: number; floor: number; pxcm: number; scaleX: number; maxCm: number; tick: number};
export const topY = (r: Rig, n: number) => r.floor - chairH(n) * r.pxcm;
/** The chair stack: `count` chairs (fractional: the newest drops in behind), on a coded scale. */
export const ChairRig: React.FC<{r: Rig; count: number; door?: number; doorLabel?: string; ref?: {cm: number; o: number; label: string}; brackets?: readonly {i: number; o: number; label?: string}[]; ghost?: {at: number; out?: number; crossAt?: number}; ring0?: number; tops?: readonly {n: number; o: number; label?: string}[]; o?: number; floorW?: number}> = ({r, count, door = 0, doorLabel = 'door: 2 m', ref, brackets = [], ghost, ring0 = 0, tops = [], o = 1, floorW = 600}) => {
	usePlatePreload([CHAIR.src]);
	const f = useCurrentFrame();
	if (o <= 0.001) return null;
	const n = Math.max(1, Math.ceil(count));
	const N = Math.max(21, n + 1);
	const offs = Array.from({length: N}, (_, i) => [0, -6 * 6 * i] as const);
	const ticks: number[] = [];
	for (let v = 0; v <= r.maxCm + 1e-6; v += r.tick) ticks.push(v);
	const w = chairW(r.pxcm);
	const rx = r.cx + w / 2 + 10;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			{r.maxCm > 0 ? <FrameSvg>
				<line x1={r.scaleX} x2={r.scaleX} y1={r.floor} y2={r.floor - r.maxCm * r.pxcm - 10} stroke={INK} strokeWidth={4} />
				{ticks.map(v => <g key={v}><line x1={r.scaleX - 12} x2={r.scaleX + 12} y1={r.floor - v * r.pxcm} y2={r.floor - v * r.pxcm} stroke={INK} strokeWidth={3.5} /><text x={r.scaleX - 24} y={r.floor - v * r.pxcm + 11} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>{v}</text></g>)}
				<text x={r.scaleX + 22} y={r.floor - r.maxCm * r.pxcm + 11} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: POS}}>cm</text>
				<line x1={r.scaleX - 50} x2={r.scaleX - 50 + floorW} y1={r.floor} y2={r.floor} stroke={INK} strokeWidth={4} />
				{door > 0.01 ? <g opacity={door}><line x1={r.scaleX + 14} x2={r.scaleX + floorW - 60} y1={r.floor - 200 * r.pxcm} y2={r.floor - 200 * r.pxcm} stroke={INK} strokeWidth={4} strokeDasharray="14 10" /><text x={r.scaleX + 40} y={r.floor - 200 * r.pxcm - 16} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: INK}} stroke={CARD} strokeWidth={14} strokeLinejoin="round" paintOrder="stroke">{doorLabel}</text></g> : null}
				{ref && ref.o > 0.01 ? <g opacity={ref.o}><line x1={r.scaleX + 14} x2={r.scaleX + floorW - 60} y1={r.floor - ref.cm * r.pxcm} y2={r.floor - ref.cm * r.pxcm} stroke={INK} strokeWidth={4} strokeDasharray="14 10" /><text x={r.scaleX + floorW - 60} y={r.floor - ref.cm * r.pxcm - 14} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{ref.label}</text></g> : null}
			</FrameSvg> : null}
			<SpriteStack plate={CHAIR} x={r.cx} y={r.floor + 1} w={chairW(6)} scale={r.pxcm / 6} offsets={offs.slice(0, n)} count={count} z="behind" dropFrom={80} at={-30} />
			{ghost ? (() => {const go = vis(f, ghost.at, ghost.out, 12); if (go <= 0.01) return null; const t21 = topY(r, 21), t20 = topY(r, 20), gx = r.cx - w / 2, gw = w * 0.42, cr = ghost.crossAt !== undefined ? prog(f, ghost.crossAt, 12) : 0; const ch = plateHeight(CHAIR, w); return <FrameSvg style={{opacity: go}}>
				<g opacity={0.35}><SvgPlate plate={CHAIR} x={gx} y={r.floor - 6 * 20 * r.pxcm - ch} w={w} /></g>
				<rect x={gx - 8} y={t21 - 10} width={gw + 16} height={t20 - t21 + 44} rx={8} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 8" />
				{cr > 0 ? <><DrawPath d={`M${gx - 8},${t21 - 10} L${gx + gw + 8},${t20 + 34}`} at={ghost.crossAt!} dur={10} color={RED} width={7} /><DrawPath d={`M${gx + gw + 8},${t21 - 10} L${gx - 8},${t20 + 34}`} at={ghost.crossAt! + 5} dur={10} color={RED} width={7} /></> : null}
			</FrameSvg>;})() : null}
			<FrameSvg>
				{tops.map((t, i) => t.o > 0.01 ? <g key={'t' + i} opacity={t.o}><line x1={r.scaleX + 14} x2={rx + 30} y1={topY(r, t.n)} y2={topY(r, t.n)} stroke={BLUE} strokeWidth={3} strokeDasharray="8 8" />{t.label ? <text x={rx + 40} y={topY(r, t.n) + 11} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: BLUE}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{t.label}</text> : null}</g> : null)}
				{brackets.map((b, i) => b.o > 0.01 ? <g key={'b' + i} opacity={b.o}><path d={`M${rx},${topY(r, b.i + 1)} h14 V${topY(r, b.i)} h-14`} stroke={AMBER_STROKE} strokeWidth={4} fill="none" />{b.label ? <text x={rx + 24} y={(topY(r, b.i) + topY(r, b.i + 1)) / 2 + 11} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, fill: AMBER}} stroke={CARD} strokeWidth={6} paintOrder="stroke">{b.label}</text> : null}</g> : null)}
				{ring0 > 0.01 ? <ellipse cx={r.cx} cy={r.floor - 40 * r.pxcm} rx={w * 0.62} ry={44 * r.pxcm} fill="none" stroke={AMBER_STROKE} strokeWidth={6} opacity={ring0} /> : null}
			</FrameSvg>
		</div>
	);
};

// ---------- step arcs between slots ----------
export type ArcSpec = {from: number; to: number; label: React.ReactNode; at: number; out?: number; below?: boolean; color?: string; ring?: number};
export const Arcs: React.FC<{x: number; y: number; cardW: number; gap: number; h?: number; arcs: readonly ArcSpec[]; size?: number}> = ({x, y, cardW, gap, h = 100, arcs, size = 40}) => {
	const f = useCurrentFrame();
	const cx = (i: number) => x + i * (cardW + gap) + cardW / 2;
	return <>
		<FrameSvg>
			{arcs.map((a, i) => {const o = vis(f, a.at, a.out, 10); if (o <= 0.001) return null; const x0 = cx(a.from), x1 = cx(a.to), mid = (x0 + x1) / 2, yy = a.below ? y + h + 8 : y - 8, dy = a.below ? 60 : -60; return <g key={i} opacity={o}><DrawPath d={`M${x0},${yy} Q${mid},${yy + dy * 1.25} ${x1},${yy}`} at={a.at} dur={12} color={a.color ?? AMBER_STROKE} width={5} />{a.ring ? <ellipse cx={mid} cy={yy + dy * 0.95} rx={44} ry={30} fill="none" stroke={RED} strokeWidth={5} opacity={a.ring} /> : null}</g>;})}
		</FrameSvg>
		{arcs.map((a, i) => {const o = vis(f, a.at + 4, a.out, 10); if (o <= 0.001) return null; const mid = (cx(a.from) + cx(a.to)) / 2; return <div key={'l' + i} style={{position: 'absolute', left: mid - 160, width: 320, top: a.below ? y + h + 62 : y - 66 - size * 0.6, textAlign: 'center', opacity: o, fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color: a.color === INK_SOFT ? INK_SOFT : AMBER, whiteSpace: 'pre', lineHeight: 1}}>{a.label}</div>;})}
	</>;
};

// ---------- the tin pyramid ----------
export const TIN: PlateSpec = {src: 'assets/maths/ma12-food-tin-v1.png', nat: [1774, 887], box: [163, 156, 1611, 731]};
export const BASE: PlateSpec = {src: 'assets/maths/ma12-display-base-v1.png', nat: [2172, 724], box: [105, 306, 2066, 493]};
const BASE_TOP = 308;
export const TIN_W = 96;
export const tinH = (w = TIN_W) => plateHeight(TIN, w);
/** Offsets (px about the bottom row's centre point) of a pyramid of `rows` rows, listed from the top row down. */
const pyramidOffsets = (rows: number, w: number) => {
	const h = tinH(w);
	const out: [number, number][] = [];
	for (let r = 1; r <= rows; r++) for (let i = 0; i < r; i++) out.push([(i - (r - 1) / 2) * w, -(rows - r) * h]);
	return out;
};
/** The pyramid on its display base: `count` tins (fractional; top row first), row labels on the left. */
export const TinPyramid: React.FC<{cx: number; floor: number; rows?: number; count?: number; labels?: number; baseW?: number; w?: number; o?: number}> = ({cx, floor, rows = 15, count, labels = 1, baseW = 1560, w = TIN_W, o = 1}) => {
	usePlatePreload([TIN.src, BASE.src]);
	const f = useCurrentFrame();
	if (o <= 0.001) return null;
	const offs = pyramidOffsets(rows, w);
	const bs = baseW / (BASE.box[2] - BASE.box[0]);
	const baseY = floor - (BASE_TOP - BASE.box[1]) * bs;
	const h = tinH(w);
	const shown = count ?? offs.length;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<FrameSvg><SvgPlate plate={BASE} x={cx - baseW / 2} y={baseY} w={baseW} /></FrameSvg>
			<SpriteStack plate={TIN} x={cx} y={floor} w={w} offsets={offs} count={shown} z="front" dropFrom={40} at={-30} />
			<FrameSvg style={{opacity: labels}}>
				{Array.from({length: rows}, (_, k) => {const r = k + 1, rowFull = (r * (r + 1)) / 2; const yy = floor - (rows - r) * h - h / 2 + 11; return <text key={r} x={cx - (r * w) / 2 - 14} y={yy} textAnchor="end" opacity={prog(f, -30, 1) * (shown >= rowFull - r + 0.5 ? 1 : 0)} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: POS}}>{r}</text>;})}
			</FrameSvg>
		</div>
	);
};
export const tinCount = (rows: number) => (rows * (rows + 1)) / 2;
