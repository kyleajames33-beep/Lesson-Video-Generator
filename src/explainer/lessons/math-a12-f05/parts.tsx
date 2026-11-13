// Lesson parts for math-a12-f05 (Revision 3: geometric sequences; folding a sheet of paper), on the maths studio kit
// and the f01 to f04 board parts (imported read-only through ../math-a12-f04/parts). Lesson-local rigs:
// - FoldRig: the painted sheet (flat, then the folded plate at its own smaller width; brief 240) with the kit's layer
//   stack beside it;
// - ThickRuler: a vertical log scale of thickness with everyday decade labels, a blue fill up to the current
//   thickness, landmark labels and plates (the reused house and Moon) at their heights;
// - GapTexts (a line of text in each gap of a ladder), RSlider (the ratio r on a track with r = 0 marked as not
//   allowed), MiniLadder (the memory aid's two ladders), RiceBoard (the chessboard plate with grains on its first
//   squares, fitted to Codex's measured row and column lines).
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import {CARD, CARD_SHADOW, FoldLayers, FrameSvg, SvgPlate, usePlatePreload, vis} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';
import {AMBER, AMBER_SOFT, AMBER_STROKE, BLUE, BLUE_SOFT, POS, RED} from '../math-a12-f04/parts';

export * from '../math-a12-f04/parts';

// ---------- the numbers (design "Numbers to verify") ----------
/** Paper thickness in mm after n folds (0.1 mm unfolded). */
export const thick = (folds: number) => 0.1 * 2 ** folds;
export const gp = (a: number, r: number) => (n: number) => a * r ** (n - 1);
{
	const near = (a: number, b: number, tol = 1e-9) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(b));
	const checks: [string, boolean][] = [
		['opening', [2, 4, 8, 16].every((v, i, a) => i === 0 || v / a[i - 1] === 2)],
		['paper', near(thick(1), 0.2) && near(thick(2), 0.4) && near(thick(8), 25.6) && near(thick(15) / 1000, 3.2768) && near(thick(27) / 1e6, 13.4217728) && near(thick(42) / 1e6, 439804.6511104) && 2 ** 42 === 4398046511104 && thick(42) / 1e6 > 384400],
		['ratios', 6 / 2 === 3 && 18 / 6 === 3 && 54 / 18 === 3 && 10 / 5 === 2 && 20 / 10 === 2 && 35 / 20 === 1.75],
		['fraction and negative', [100, 50, 25, 12.5].every((v, i) => gp(100, 0.5)(i + 1) === v) && [1, -2, 4, -8].every((v, i) => gp(1, -2)(i + 1) === v)],
		['plot', [3, 6, 12, 24, 48, 96].every((v, i) => gp(3, 2)(i + 1) === v && near(1.5 * 2 ** (i + 1), v)) && [3, 1.5, 0.75].every((v, i) => gp(3, 0.5)(i + 1) === v) && [3, -6, 12, -24, 48, -96].every((v, i) => gp(3, -2)(i + 1) === v)],
		['a8', gp(3, 2)(8) === 384 && 2 ** 7 === 128 && 3 * 2 ** 8 === 768],
		['threshold', Math.abs(Math.log(1000 / 3) / Math.log(2) - 8.38) < 0.005 && gp(3, 2)(9) === 768 && gp(3, 2)(10) === 1536 && 768 < 1000 && 1536 > 1000],
		['two terms', 96 / 12 === 8 && 2 ** 3 === 8 && 12 / 2 ** 2 === 3 && gp(3, 2)(3) === 12 && gp(3, 2)(6) === 96 && [3, 6, 12, 24, 48, 96].every((v, i) => gp(3, 2)(i + 1) === v)],
		['A1', -12 / 4 === -3 && gp(4, -3)(6) === -972 && (-3) ** 5 === -243 && 4 * (-3) ** 6 === 2916 && [4, -12, 36, -108, 324, -972].every((v, i) => gp(4, -3)(i + 1) === v)],
		['A2', 54 / 6 === 9 && gp(2, 3)(2) === 6 && gp(2, 3)(4) === 54 && gp(-2, -3)(2) === 6 && gp(-2, -3)(4) === 54 && [-2, 6, -18, 54].every((v, i) => gp(-2, -3)(i + 1) === v)],
		['handoff', [1, 3, 7, 15, 31].every((v, i) => 2 ** (i + 1) - 1 === v) && 2 ** 9 === 512],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-f05 numbers: ' + bad.join(', '));
}
/** A thickness in everyday units: mm below 1 m, m below 1 km, km above. */
export const fmtThick = (mm: number) => {
	const sig = (v: number) => (v >= 100 ? Math.round(v).toLocaleString('en-AU').replace(/,/g, ' ') : v >= 10 ? v.toFixed(1).replace(/\.0$/, '') : String(Number(v.toPrecision(2))));
	if (mm < 1000) return sig(mm) + ' mm';
	if (mm < 1e6) return sig(mm / 1000) + ' m';
	return sig(mm / 1e6) + ' km';
};

// ---------- plates (brief 240; the house and the Moon are reused) ----------
export const SHEET: PlateSpec = {src: 'assets/maths/ma12-paper-sheet-v1.png', nat: [1448, 1086], box: [124, 339, 1337, 871]};
export const FOLDED: PlateSpec = {src: 'assets/maths/ma12-paper-folded-v1.png', nat: [1448, 1086], box: [313, 383, 1128, 771]};
export const MOON: PlateSpec = {src: 'assets/physics/y12p-moon-v1.png', nat: [1254, 1254], box: [159, 150, 1092, 1106]};
export const HOUSE: PlateSpec = {src: 'assets/physics/phys-y11-house-v1.png', nat: [1774, 887], box: [219, 134, 1549, 782]};
export const BOARD8: PlateSpec = {src: 'assets/maths/ma12-chessboard-top-v1.png', nat: [1254, 1254], box: [160, 159, 1095, 1120]};
export const GRAIN: PlateSpec = {src: 'assets/maths/ma12-rice-grain-v1.png', nat: [1254, 1254], box: [294, 317, 963, 939]};
/** Codex's measured square boundaries on the board plate (file px). */
export const BOARD_COLS = [176, 289, 402, 514, 627, 739, 852, 964, 1079];
export const BOARD_ROWS = [176, 295, 414, 532, 650, 766, 884, 995, 1104];
const ph = (p: PlateSpec, w: number) => (w * (p.box[3] - p.box[1])) / (p.box[2] - p.box[0]);

/** A framed formula (ink double rule). */
export const Framed: React.FC<{x: number; y: number; at: number; out?: number; size?: number; children: React.ReactNode}> = ({x, y, at, out, size = 56, children}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, background: CARD, border: `5px solid ${INK}`, borderRadius: 18, padding: '0.34em 28px 10px', boxShadow: `inset 0 0 0 5px ${CARD}, inset 0 0 0 7px ${INK}, 0 12px 26px rgba(60,45,20,0.12)`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, whiteSpace: 'pre'}}>{children}</div>;
};
/** Empty or filled slots in a row with a label under each (question-card pictures). */
export const SlotRow: React.FC<{x: number; y: number; cardW?: number; gap?: number; h?: number; vals: readonly string[]; labels: readonly string[]; size?: number}> = ({x, y, cardW = 130, gap = 26, h = 100, vals, labels, size = 50}) => (
	<>
		{vals.map((v, i) => {
			const filled = v !== '' && v !== '?';
			return <React.Fragment key={i}>
				<div style={{position: 'absolute', left: x + i * (cardW + gap), top: y, width: cardW, height: h, boxSizing: 'border-box', borderRadius: 14, border: `4px ${filled ? 'solid' : 'dashed'} ${filled ? BLUE : INK_SOFT}`, background: CARD, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: filled ? BLUE : INK_SOFT}}>{v}</div>
				<div style={{position: 'absolute', left: x + i * (cardW + gap) - 10, top: y + h + 8, width: cardW + 20, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: POS}}>{labels[i]}</div>
			</React.Fragment>;
		})}
	</>
);

// ---------- the sheet and its layer stack ----------
/**
 * The sheet lies with its bottom edge at `base`; from the first fold the folded plate (drawn at 0.56 of the sheet's
 * width: a folded sheet is smaller, and each plate keeps its own aspect) takes its place. The layer stack stands to
 * the right on the same base line.
 */
export const FoldRig: React.FC<{x: number; base: number; w: number; folds: number; swapAt: number; stackX: number; stackW?: number; layerPx?: number; maxH?: number; at?: number; out?: number}> = ({x, base, w, folds, swapAt, stackX, stackW = 120, layerPx = 14, maxH = 280, at = -30, out}) => {
	usePlatePreload([SHEET.src, FOLDED.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const sw = prog(f, swapAt, 14), fw = w * 0.56;
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		<FrameSvg>
			<g opacity={1 - sw}><SvgPlate plate={SHEET} x={x} y={base - ph(SHEET, w)} w={w} /></g>
			{sw > 0.01 ? <g opacity={sw}><SvgPlate plate={FOLDED} x={x + (w - fw) / 2} y={base - ph(FOLDED, fw)} w={fw} /></g> : null}
			<line x1={stackX - 16} x2={stackX + stackW + 16} y1={base + 2} y2={base + 2} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		</FrameSvg>
		<FoldLayers x={stackX} y={base} width={stackW} layerPx={layerPx} folds={folds} maxH={maxH} at={-30} />
	</div>;
};

// ---------- the thickness ruler ----------
export type RulerSpec = {x: number; top: number; bottom: number};
const LO = -1, HI = 12;
export const rulerY = (R: RulerSpec, mm: number) => R.bottom - ((Math.log10(mm) - LO) / (HI - LO)) * (R.bottom - R.top);
const DECADES: [number, string][] = [[-1, '0.1 mm'], [1, '1 cm'], [3, '1 m'], [5, '100 m'], [7, '10 km'], [9, '1 000 km']];
export type Landmark = {mm: number; label?: string; plate?: PlateSpec; plateW?: number; at: number; lines?: readonly string[]};
export const ThickRuler: React.FC<{R: RulerSpec; mm: number; landmarks?: readonly Landmark[]; topLabel?: {text: string; at: number}; size?: number; at?: number; out?: number}> = ({R, mm, landmarks = [], topLabel, size = 30, at = -30, out}) => {
	usePlatePreload(landmarks.filter(l => l.plate).map(l => l.plate!.src));
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const Y = (v: number) => rulerY(R, v);
	const my = Math.max(R.top, Math.min(R.bottom, Y(Math.max(0.1, mm))));
	const txt = (s: number, fill: string): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: s, fill} as React.CSSProperties);
	return <FrameSvg style={{opacity: o}}>
		<rect x={R.x - 15} y={R.top - 12} width={30} height={R.bottom - R.top + 24} rx={15} fill={PAPER_DEEP} stroke={INK} strokeWidth={3.5} />
		<rect x={R.x - 9} y={my} width={18} height={R.bottom + 6 - my} rx={9} fill={BLUE} />
		{Array.from({length: HI - LO + 1}, (_, i) => {const e = LO + i, yy = Y(10 ** e); return <line key={e} x1={R.x - 26} x2={R.x - 15} y1={yy} y2={yy} stroke={INK} strokeWidth={3.5} />;})}
		{DECADES.map(([e, s]) => <text key={e} x={R.x - 36} y={Y(10 ** e) + size * 0.36} textAnchor="end" style={txt(size, INK)}>{s}</text>)}
		<circle cx={R.x} cy={my} r={13} fill={BLUE} stroke={CARD} strokeWidth={4} />
		{landmarks.map((l, i) => {const lo = prog(f, l.at, 12); if (lo <= 0.01) return null; const yy = Y(l.mm), pw = l.plateW ?? 150, hh = l.plate ? ph(l.plate, pw) : 0; const tx = R.x + 70 + (l.plate ? pw + 16 : 0); const lines = l.lines ?? (l.label ? [l.label] : []); return <g key={i} opacity={lo}>
			<line x1={R.x + 20} x2={R.x + 58} y1={yy} y2={yy} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="6 5" />
			{l.plate ? <SvgPlate plate={l.plate} x={R.x + 70} y={yy - hh / 2} w={pw} /> : null}
			{lines.map((s, j) => <text key={j} x={tx} y={yy + size * 0.36 + (j - (lines.length - 1) / 2) * (size + 6)} style={txt(size, INK)}>{s}</text>)}
		</g>;})}
		{topLabel ? <text x={R.x - 36} y={Y(thick(42)) + 12} textAnchor="end" opacity={prog(f, topLabel.at, 12)} style={txt(34, BLUE)}>{topLabel.text}</text> : null}
	</FrameSvg>;
};

// ---------- a line of text in each gap of a ladder ----------
export const GapTexts: React.FC<{x: number; y: number; cardW: number; gap: number; h: number; items: readonly {text: React.ReactNode; at: number; out?: number; color?: string}[]; size?: number; dy?: number}> = ({x, y, cardW, gap, h, items, size = 40, dy = 0}) => {
	const f = useCurrentFrame();
	return <>{items.map((it, i) => {const o = vis(f, it.at, it.out, 10); return o > 0.01 ? <div key={i} style={{position: 'absolute', left: x + i * (cardW + gap) + cardW - 20, width: gap + 40, top: y + (h - size * 1.2) / 2 + dy, textAlign: 'center', opacity: o, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, lineHeight: 1.2, color: it.color ?? POS, whiteSpace: 'pre'}}>{it.text}</div> : null;})}</>;
};

// ---------- the ratio slider ----------
/** r on a track from −2.4 to 2.4; r = 0 carries a red "not allowed" mark and the knob never rests on it. */
export const RSlider: React.FC<{x: number; y: number; w: number; r: number; at?: number; out?: number; zeroAt?: number}> = ({x, y, w, r, at = -30, out, zeroAt = -30}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const X = (v: number) => x + ((v + 2.4) / 4.8) * w;
	const txt = (s: number, fill: string): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: s, fill} as React.CSSProperties);
	const shown = Math.abs(r - Math.round(r * 2) / 2) < 0.02 ? String(Math.round(r * 2) / 2).replace('0.5', '½') : r.toFixed(2);
	const zo = prog(f, zeroAt, 12);
	return <FrameSvg style={{opacity: o}}>
		<text x={x - 22} y={y + 16} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, fill: AMBER}}>r</text>
		<line x1={X(-2.4)} x2={X(2.4)} y1={y} y2={y} stroke={AMBER_SOFT} strokeWidth={14} strokeLinecap="round" />
		{[-2, -1, 1, 2].map(v => <g key={v}><line x1={X(v)} x2={X(v)} y1={y + 16} y2={y + 30} stroke={INK_SOFT} strokeWidth={3} strokeLinecap="round" /><text x={X(v)} y={y + 64} textAnchor="middle" style={txt(30, INK_SOFT)}>{v < 0 ? '−' + -v : v}</text></g>)}
		<g opacity={zo}>
			<line x1={X(0)} x2={X(0)} y1={y - 26} y2={y + 30} stroke={RED} strokeWidth={6} strokeLinecap="round" />
			<circle cx={X(0)} cy={y} r={12} fill={CARD} stroke={RED} strokeWidth={5} />
			<text x={X(0)} y={y + 64} textAnchor="middle" style={txt(30, RED)}>0</text>
		</g>
		<circle cx={X(r)} cy={y} r={24} fill={CARD} stroke={AMBER_STROKE} strokeWidth={7} />
		<circle cx={X(r)} cy={y} r={8} fill={AMBER_STROKE} />
		<rect x={X(2.4) + 40} y={y - 40} width={230} height={80} rx={18} fill={CARD} stroke={AMBER_STROKE} strokeWidth={4} />
		<text x={X(2.4) + 155} y={y + 17} textAnchor="middle" style={{...txt(48, AMBER), fontVariantNumeric: 'tabular-nums'} as React.CSSProperties}>r = {shown.replace('-', '−')}</text>
	</FrameSvg>;
};
/** Keep r at least 0.1 from zero, on the side it is on. */
export const awayFromZero = (r: number) => (Math.abs(r) >= 0.1 ? r : r >= 0 ? 0.1 : -0.1);

// ---------- small ladders for the memory aid ----------
export const MiniLadder: React.FC<{x: number; y: number; values: readonly string[]; step: string; color: string; stepColor: string; cardW?: number; gap?: number; h?: number; size?: number; stepSize?: number; o?: number; stepsO?: number}> = ({x, y, values, step, color, stepColor, cardW = 110, gap = 70, h = 76, size = 44, stepSize = 40, o = 1, stepsO = 1}) => (
	<div style={{position: 'absolute', inset: 0, opacity: o}}>
		{values.map((v, i) => <div key={i} style={{position: 'absolute', left: x + i * (cardW + gap), top: y, width: cardW, height: h, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', background: CARD, borderRadius: 14, border: `4px solid ${color}`, boxShadow: CARD_SHADOW, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color}}>{v}</div>)}
		{values.slice(1).map((_, i) => <div key={'s' + i} style={{position: 'absolute', left: x + i * (cardW + gap) + cardW - 10, width: gap + 20, top: y + (h - stepSize * 1.15) / 2, textAlign: 'center', opacity: stepsO, fontFamily: FONT_HAND, fontWeight: 700, fontSize: stepSize, lineHeight: 1.15, color: stepColor}}>{step}</div>)}
	</div>
);

// ---------- rice on the chessboard ----------
export type RiceBoardProps = {x: number; y: number; w: number; grains: readonly number[]; labels?: number; arcs?: readonly number[]; o?: number};
/** Frame geometry of bottom-row square i (0-based from the left) on the board plate drawn at (x, y, width w). */
export const boardSquare = (x: number, y: number, w: number, i: number) => {
	const s = w / (BOARD8.box[2] - BOARD8.box[0]);
	const fx = (v: number) => x + (v - BOARD8.box[0]) * s, fy = (v: number) => y + (v - BOARD8.box[1]) * s;
	return {x0: fx(BOARD_COLS[i]), x1: fx(BOARD_COLS[i + 1]), y0: fy(BOARD_ROWS[7]), y1: fy(BOARD_ROWS[8]), bottom: fy(BOARD8.box[3])};
};
/**
 * The board with painted grains on the first squares of its bottom row (`grains[i]`, may be fractional: the newest
 * grain pops in), blue count labels under the board and amber "×2" steps between them.
 */
export const RiceBoard: React.FC<RiceBoardProps> = ({x, y, w, grains, labels = 1, arcs = [], o = 1}) => {
	usePlatePreload([BOARD8.src, GRAIN.src]);
	if (o <= 0.001) return null;
	const sq = (i: number) => boardSquare(x, y, w, i);
	const ly = sq(0).bottom + 46;
	return <FrameSvg style={{opacity: o}}>
		<SvgPlate plate={BOARD8} x={x} y={y} w={w} />
		{grains.map((c, i) => {
			if (c <= 0) return null;
			const q = sq(i), n = Math.ceil(c), full = 2 ** i, k = Math.ceil(Math.sqrt(full)), sw = q.x1 - q.x0, sh = q.y1 - q.y0, cell = (Math.min(sw, sh) * 0.8) / k, gw = Math.min(cell * 0.95, sw * 0.42);
			return <g key={i}>{Array.from({length: Math.min(n, full)}, (_, j) => {const part = Math.min(1, c - j); const gx = q.x0 + sw / 2 + ((j % k) - (k - 1) / 2) * cell, gy = q.y0 + sh / 2 + (Math.floor(j / k) - (Math.ceil(full / k) - 1) / 2) * cell; return <SvgPlate key={j} plate={GRAIN} x={gx - gw / 2} y={gy - ph(GRAIN, gw) / 2} w={gw} opacity={part} />;})}</g>;
		})}
		{grains.map((c, i) => {const q = sq(i), op = labels * Math.min(1, c); return op > 0.01 ? <text key={'l' + i} x={(q.x0 + q.x1) / 2} y={ly} textAnchor="middle" opacity={op} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: BLUE}}>{2 ** i}</text> : null;})}
		{arcs.map((ao, i) => {if (ao <= 0.01) return null; const a = sq(i), b = sq(i + 1), x0 = (a.x0 + a.x1) / 2 + 16, x1 = (b.x0 + b.x1) / 2 - 16, yy = ly + 12; return <g key={'a' + i} opacity={ao}>
			<path d={`M${x0},${yy} Q${(x0 + x1) / 2},${yy + 30} ${x1},${yy}`} stroke={AMBER_STROKE} strokeWidth={4.5} fill="none" />
			<text x={(x0 + x1) / 2} y={yy + 58} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, fill: AMBER}}>×2</text>
		</g>;})}
	</FrameSvg>;
};
/**
 * The first five squares of the board's bottom row, enlarged: the same plate cropped to Codex's measured lines
 * (uniform scale), with the grains, blue counts under the squares and amber "×2" between the counts.
 */
export const RiceStrip: React.FC<{x: number; y: number; w: number; grains: readonly number[]; steps?: readonly number[]; o?: number}> = ({x, y, w, grains, steps = [], o = 1}) => {
	usePlatePreload([BOARD8.src, GRAIN.src]);
	if (o <= 0.001) return null;
	const nSq = Math.max(5, Math.min(8, grains.length));
	const fx0 = BOARD_COLS[0], fx1 = BOARD_COLS[nSq], fy0 = BOARD_ROWS[7], fy1 = BOARD_ROWS[8];
	const s = w / (BOARD_COLS[5] - fx0), h = (fy1 - fy0) * s, wAll = (fx1 - fx0) * s;
	const X = (i: number) => x + (BOARD_COLS[i] - fx0) * s;
	return <FrameSvg style={{opacity: o}}>
		<svg x={x} y={y} width={wAll} height={h} viewBox={`${fx0} ${fy0} ${fx1 - fx0} ${fy1 - fy0}`}><image href={staticFile(BOARD8.src)} x={0} y={0} width={BOARD8.nat[0]} height={BOARD8.nat[1]} /></svg>
		<rect x={x} y={y} width={wAll} height={h} fill="none" stroke={INK} strokeWidth={4} />
		{grains.map((c, i) => {
			if (c <= 0) return null;
			const x0 = X(i), sw = X(i + 1) - x0, full = 2 ** i, k = Math.ceil(Math.sqrt(full)), cell = (Math.min(sw, h) * 0.84) / k, gw = Math.min(cell * 0.95, sw * 0.4);
			return <g key={i}>{Array.from({length: Math.min(Math.ceil(c), full)}, (_, j) => {const part = Math.min(1, c - j); const gx = x0 + sw / 2 + ((j % k) - (k - 1) / 2) * cell, gy = y + h / 2 + (Math.floor(j / k) - (Math.ceil(full / k) - 1) / 2) * cell; return <SvgPlate key={j} plate={GRAIN} x={gx - gw / 2} y={gy - ph(GRAIN, gw) / 2} w={gw} opacity={part} />;})}</g>;
		})}
		{grains.map((c, i) => {const op = Math.min(1, c); return op > 0.01 ? <text key={'l' + i} x={(X(i) + X(i + 1)) / 2} y={y + h + 46} textAnchor="middle" opacity={op} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, fill: BLUE}}>{2 ** i}</text> : null;})}
		{steps.map((so, i) => (so > 0.01 ? <text key={'s' + i} x={X(i + 1)} y={y + h + 44} textAnchor="middle" opacity={so} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, fill: AMBER}}>×2</text> : null))}
	</FrameSvg>;
};
export {BLUE_SOFT};
