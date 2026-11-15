// Lesson parts for math-a12-s01 (Revision 4: discrete distributions from data and from a model; a board-game die
// rolled 200 times), on the maths studio kit's probability set (prob-parts.tsx) and the f01 to f15 board parts
// (imported read-only through ../math-a12-f09/parts). These parts also serve s02 and s03 (same builder; import
// them read-only from here). Lesson-local rigs:
// - plates (die, top views, coins, spinner, calendar, counters) with measured alpha boxes (alpha > 32);
// - barGeom / YAxis: the kit ProbabilityBars geometry without grid lines (no line runs through a bar label);
// - PairBars: data (blue) and model (teal) bars side by side on one axis;
// - Table: a multi-row distribution table with per-row and per-cell reveals and a highlighted column;
// - RelFreqTrace: the relative frequency of a four against rolls (s01 scene 3's replay);
// - TokenDrop: roll tokens flying from the die to the top of their face's bar;
// - Spinner: the painted spinner with coded sectors and its pointer; CounterBag: the A2 counters;
// - DeskCalendar: the painted pad with a coded date on its page; DateAxes: the empty 1 to 31 axes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, MATH_ROLES, SpinnerSectors, SvgPlate, plateHeight, tallyOf, usePlatePreload, vis} from '../../math/studio';
import type {PlateSpec, RoleKey} from '../../math/studio';

export * from '../math-a12-f09/parts';

// ---------- the numbers (design "Numbers to verify") ----------
export const FACES = ['1', '2', '3', '4', '5', '6'] as const;
export const COUNTS = [28, 35, 31, 38, 34, 34] as const;
/** The stored roll order (author note h): Python random.Random(5).shuffle of the site counts, faces 1 to 6. */
const ORDER = '14422554643234563123313241256545642646133554216162361522556234444112311146233636454261615436545662224116155254525543424464144562652543335353313254313456252336262112246521642342165154644221634156663635';
/** Roll sequence as face indices 0 to 5 (the RollSimulator's form). */
export const ROLLS: readonly number[] = ORDER.split('').map(c => Number(c) - 1);
export const EST = COUNTS.map(c => c / 200);
export const EST_TEXT = ['0.14', '0.175', '0.155', '0.19', '0.17', '0.17'] as const;
/** Simulated fair runs (author note c), faces 1 to 6. */
export const RUNS = {A: [41, 37, 23, 38, 34, 27], B: [20, 40, 36, 29, 33, 42], C: [32, 40, 28, 37, 30, 33]} as const;
{
	const near = (a: number, b: number, t = 1e-9) => Math.abs(a - b) < t;
	const t = (k: number) => tallyOf(ROLLS, k, 6);
	const eq = (a: readonly number[], b: readonly number[]) => a.length === b.length && a.every((v, i) => v === b[i]);
	const far = (r: readonly number[]) => Math.max(...r.map(v => Math.abs(v - 200 / 6)));
	const checks: [string, boolean][] = [
		['roll order', ROLLS.length === 200 && eq(t(200), COUNTS) && eq(t(10), [1, 2, 0, 4, 2, 1]) && eq(t(50), [7, 9, 8, 10, 8, 8]) && eq(t(150), [21, 24, 25, 31, 27, 22]) && near(t(10)[3] / 10, 0.4) && near(t(50)[3] / 50, 0.2)],
		['estimates', near(EST.reduce((s, v) => s + v, 0), 1) && EST_TEXT.every((s, i) => near(Number(s), EST[i]))],
		['runs', Object.values(RUNS).every(r => r.reduce((s, v) => s + v, 0) === 200 && far(r) > 38 - 200 / 6)],
		['coins', [0, 1, 2, 3].map(h => ['HHH', 'HHT', 'HTH', 'THH', 'HTT', 'THT', 'TTH', 'TTT'].filter(s => s.split('H').length - 1 === h).length).join() === '1,3,3,1'],
		['A1', 55 + 70 + 60 + 65 === 250 && near(70 / 250, 0.28)],
		['A2', ['R1R2', 'R1Y1', 'R1Y2', 'R2Y1', 'R2Y2', 'Y1Y2'].map(p => (p.match(/R/g) ?? []).length).sort().join() === '0,1,1,1,1,2'],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-s01 numbers: ' + bad.join(', '));
}

// ---------- colours ----------
export const DATA = MATH_ROLES.a;
export const MODEL = MATH_ROLES.b;
export const ASK = MATH_ROLES.k;
export const GOOD = MATH_ROLES.answer;
export const BAD = MATH_ROLES.mistake;

// ---------- plates (alpha > 32 boxes, measured 16 Nov) ----------
const M = 'assets/maths/';
export const DIE_RED: PlateSpec = {src: M + 'ma12-die-red-v1.png', nat: [1254, 1254], box: [264, 252, 1021, 1058]};
/** Six top views, one framing (the union of their boxes) so cuts between them do not jump. */
export const DIE_TOP: PlateSpec[] = [1, 2, 3, 4, 5, 6].map(n => ({src: M + `ma12-die-top-${n}-v1.png`, nat: [1254, 1254], box: [201, 168, 1045, 1083]}));
export const COIN_H: PlateSpec = {src: M + 'ma12-coin-heads-v1.png', nat: [1254, 1254], box: [137, 133, 1105, 1111]};
export const COIN_T: PlateSpec = {src: M + 'ma12-coin-tails-v1.png', nat: [1254, 1254], box: [135, 130, 1108, 1112]};
export const SPIN_BASE: PlateSpec = {src: M + 'ma12-spinner-base-v1.png', nat: [1254, 1254], box: [233, 241, 1019, 1026]};
/** The pointer shares the base's canvas, so it is drawn with the base's box (it then sits on the pin). */
export const SPIN_PTR: PlateSpec = {src: M + 'ma12-spinner-pointer-v1.png', nat: [1254, 1254], box: [233, 241, 1019, 1026]};
export const SPIN_DISC = {cx: 626, cy: 633, r: 347, pivot: [628, 635] as const};
export const CAL: PlateSpec = {src: M + 'ma12-desk-calendar-v1.png', nat: [1173, 1341], box: [142, 238, 1032, 1101]};
export const CAL_PAGE = [266, 391, 906, 974] as const;
export const COUNTER_R: PlateSpec = {src: 'assets/physics/y12p-counter-red-v1.png', nat: [1254, 1254], box: [242, 273, 997, 1012]};
export const COUNTER_Y: PlateSpec = {src: 'assets/physics/y12p-counter-yellow-v1.png', nat: [1254, 1254], box: [240, 272, 999, 1013]};
export const S01_PLATES = [DIE_RED, ...DIE_TOP, COIN_H, COIN_T, SPIN_BASE, SPIN_PTR, CAL, COUNTER_R, COUNTER_Y];

/** Any plate, its alpha box's top left at (x, y), w wide; fades in at `at`. */
export const Plate: React.FC<{plate: PlateSpec; x: number; y: number; w: number; at?: number; out?: number; rot?: number; o?: number}> = ({plate, x, y, w, at = -30, out, rot = 0, o = 1}) => {
	usePlatePreload([plate.src]);
	const f = useCurrentFrame();
	const op = vis(f, at, out, 14) * o;
	if (op <= 0.001) return null;
	const h = plateHeight(plate, w);
	return <FrameSvg style={{opacity: op}}><g transform={rot ? `rotate(${rot} ${x + w / 2} ${y + h / 2})` : undefined}><SvgPlate plate={plate} x={x} y={y} w={w} /></g></FrameSvg>;
};
export const RedDie: React.FC<{x: number; y: number; w: number; at?: number; out?: number; rot?: number}> = p => <Plate plate={DIE_RED} {...p} />;

/** The white simulated die tumbling through its painted top views while `rolling` (frames since a roll start). */
export const TumblingDie: React.FC<{x: number; y: number; w: number; from: number; to: number; at?: number; out?: number; seed?: number}> = ({x, y, w, from, to, at = -30, out, seed = 3}) => {
	usePlatePreload(DIE_TOP.map(p => p.src));
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const live = f >= from && f < to;
	const step = Math.floor((Math.max(from, Math.min(f, to)) - from) / 5);
	const face = (step * 5 + seed) % 6;
	const wob = live ? Math.sin(f * 0.9) * 10 : 0;
	const h = plateHeight(DIE_TOP[0], w);
	return <FrameSvg style={{opacity: o}}><g transform={`rotate(${wob} ${x + w / 2} ${y + h / 2})`}><SvgPlate plate={DIE_TOP[face]} x={x} y={y} w={w} /></g></FrameSvg>;
};

// ---------- bar geometry without grid lines ----------
/** The kit ProbabilityBars geometry when it is given no yTicks (so it draws no grid lines). */
export const barGeom = (x: number, y: number, w: number, h: number, n: number, xLabel = true, barFraction = 0.66) => {
	const L = 30, T = 56, B = xLabel ? 96 : 60, pw = w - L - 20, ph = h - T - B, slot = pw / n;
	return {left: x + L, right: x + L + pw, top: y + T, base: y + T + ph, pw, ph, slot, bw: slot * barFraction, cx: (i: number) => x + L + i * slot + slot / 2,
		Y: (v: number, max: number, min = 0) => y + T + ph - ((v - min) / (max - min)) * ph};
};
/** A y axis with short ticks and labels outside the plot (no grid lines). */
export const YAxis: React.FC<{x: number; y: number; w: number; h: number; n: number; max: number; min?: number; ticks: readonly {value: number; label: string}[]; xLabel?: boolean; at?: number; out?: number; o?: number}> = ({x, y, w, h, n, max, min = 0, ticks, xLabel = true, at = -30, out, o = 1}) => {
	const f = useCurrentFrame();
	const op = vis(f, at, out, 14) * o;
	if (op <= 0.001) return null;
	const g = barGeom(x, y, w, h, n, xLabel);
	return <FrameSvg style={{opacity: op}}>
		<line x1={g.left} x2={g.left} y1={g.top - 6} y2={g.base} stroke={INK} strokeWidth={3.5} />
		{ticks.map(t => <g key={t.label}><line x1={g.left - 12} x2={g.left} y1={g.Y(t.value, max, min)} y2={g.Y(t.value, max, min)} stroke={INK} strokeWidth={3} /><text x={g.left - 20} y={g.Y(t.value, max, min) + 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>{t.label}</text></g>)}
	</FrameSvg>;
};
export const countTicks = [10, 20, 30, 40, 50].map(v => ({value: v, label: String(v)}));
export const propTicks = [0.05, 0.1, 0.15, 0.2, 0.25].map(v => ({value: v * 200, label: String(v)}));

// ---------- PairBars: data beside model ----------
/** Data (blue) and model (teal) bars side by side per value. `dataDash` (0..1) turns the data bars into dashed outlines. */
export const PairBars: React.FC<{
	x: number; y: number; w: number; h: number; labels: readonly string[]; data?: readonly number[]; model?: readonly number[]; max: number;
	ticks: readonly {value: number; label: string}[]; xLabel?: string; yLabel?: string; modelGrow?: number; dataO?: number; dataDash?: number;
	dataText?: (v: number, i: number) => string | null; modelText?: (v: number, i: number) => string | null; at?: number; out?: number;
	refLine?: {value: number; label?: string; o: number}; highlight?: {index: number; o: number}; legend?: {o: number};
}> = ({x, y, w, h, labels, data, model, max, ticks, xLabel, yLabel, modelGrow = 1, dataO = 1, dataDash = 0, dataText, modelText, at = -30, out, refLine, highlight, legend}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const g = barGeom(x, y, w, h, labels.length, !!xLabel, 0.7);
	const one = model && data ? g.bw / 2 - 3 : g.bw * 0.94;
	const T = (s: number, c: string, wgt = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: wgt, fontSize: s, fill: c});
	return <FrameSvg style={{opacity: o}}>
		{yLabel ? <text x={g.left} y={g.top - 26} style={T(30, INK, 700)}>{yLabel}</text> : null}
		{labels.map((lab, i) => {
			const c = g.cx(i);
			const dx = data && model ? c - one - 3 : c - one / 2;
			const mx = data && model ? c + 3 : c - one / 2;
			const dv = data?.[i], mv = model?.[i];
			const hl = highlight && highlight.index === i ? highlight.o : 0;
			return <g key={i}>
				{dv !== undefined && dataO > 0.01 ? <g opacity={dataO}>
					<rect x={dx} y={g.Y(dv, max)} width={one} height={g.base - g.Y(dv, max)} rx={5} fill={DATA.stroke} fillOpacity={1 - 0.88 * dataDash} stroke={DATA.ink} strokeWidth={dataDash > 0.5 ? 4 : 2} strokeDasharray={dataDash > 0.5 ? '10 7' : undefined} />
					{dataText && dataText(dv, i) ? <text x={dx + one / 2} y={g.Y(dv, max) - 12} textAnchor="middle" style={T(30, DATA.ink)}>{dataText(dv, i)}</text> : null}
				</g> : null}
				{mv !== undefined && modelGrow > 0.01 ? <g>
					<rect x={mx} y={g.Y(mv * modelGrow, max)} width={one} height={g.base - g.Y(mv * modelGrow, max)} rx={5} fill={MODEL.stroke} stroke={MODEL.ink} strokeWidth={2} />
					{modelText && modelText(mv, i) && modelGrow > 0.9 ? <text x={mx + one / 2} y={g.Y(mv, max) - 12} textAnchor="middle" style={T(30, MODEL.ink)}>{modelText(mv, i)}</text> : null}
				</g> : null}
				{hl > 0.01 ? <rect x={c - g.bw / 2 - 10} y={g.Y(Math.max(dv ?? 0, mv ?? 0), max) - 54} width={g.bw + 20} height={g.base - g.Y(Math.max(dv ?? 0, mv ?? 0), max) + 54} rx={12} fill="none" stroke={ASK.stroke} strokeWidth={6} opacity={hl} /> : null}
				<text x={c} y={g.base + 44} textAnchor="middle" style={T(32, INK, 700)}>{lab}</text>
			</g>;
		})}
		{refLine && refLine.o > 0.01 ? <g opacity={refLine.o}>
			<line x1={g.left} x2={g.right} y1={g.Y(refLine.value, max)} y2={g.Y(refLine.value, max)} stroke={ASK.stroke} strokeWidth={5} strokeDasharray="16 10" />
		</g> : null}
		<line x1={g.left} x2={g.right} y1={g.base} y2={g.base} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		<line x1={g.left} x2={g.left} y1={g.top - 6} y2={g.base} stroke={INK} strokeWidth={3.5} />
		{ticks.map(t => <g key={t.label}><line x1={g.left - 12} x2={g.left} y1={g.Y(t.value, max)} y2={g.Y(t.value, max)} stroke={INK} strokeWidth={3} /><text x={g.left - 20} y={g.Y(t.value, max) + 10} textAnchor="end" style={T(30, INK, 700)}>{t.label}</text></g>)}
		{xLabel ? <text x={(g.left + g.right) / 2} y={y + h - 10} textAnchor="middle" style={T(30, INK, 700)}>{xLabel}</text> : null}
		{legend && legend.o > 0.01 ? <g opacity={legend.o}>
			{data ? <><rect x={g.right - 330} y={g.top - 50} width={30} height={30} rx={5} fill={DATA.stroke} /><text x={g.right - 290} y={g.top - 25} style={T(30, DATA.ink)}>data</text></> : null}
			{model ? <><rect x={g.right - 190} y={g.top - 50} width={30} height={30} rx={5} fill={MODEL.stroke} /><text x={g.right - 150} y={g.top - 25} style={T(30, MODEL.ink)}>fair model</text></> : null}
		</g> : null}
	</FrameSvg>;
};

// ---------- Table: a multi-row distribution table ----------
export type TRow = {head: React.ReactNode; cells: readonly React.ReactNode[]; color?: string; at?: number; cellAt?: readonly number[]; out?: number};
export const Table: React.FC<{x: number; y: number; rows: readonly TRow[]; colW?: number; headW?: number; size?: number; at?: number; out?: number; hl?: {col: number; at: number; out?: number; role?: RoleKey}; strike?: {row: number; col: number; at: number}}> = ({x, y, rows, colW = 120, headW = 190, size = 40, at = -30, out, hl, strike}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const rowH = size * 1.62;
	const ho = hl ? vis(f, hl.at, hl.out, 12) : 0;
	const R = MATH_ROLES[hl?.role ?? 'k'];
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.12)', overflow: 'hidden'}}>
		{rows.map((r, ri) => {
			const ro = r.at === undefined ? 1 : vis(f, r.at, r.out, 12);
			return <div key={ri} style={{display: 'flex', borderTop: ri ? `2.5px solid ${INK}` : undefined}}>
				<div style={{width: headW, height: rowH, boxSizing: 'border-box', paddingLeft: 20, display: 'flex', alignItems: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size * 0.86, color: r.color ?? INK, opacity: ro, whiteSpace: 'pre'}}>{r.head}</div>
				{r.cells.map((c, ci) => {
					const co = ro * (r.cellAt?.[ci] !== undefined ? prog(f, r.cellAt[ci], 10) : 1);
					const on = hl && hl.col === ci ? ho : 0;
					const st = strike && strike.row === ri && strike.col === ci ? prog(f, strike.at, 12) : 0;
					return <div key={ci} style={{position: 'relative', width: colW, height: rowH, display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: `2px solid ${PAPER_DEEP}`, background: on > 0 ? `rgba(248,232,200,${on})` : undefined, boxShadow: on > 0 ? `inset 0 0 0 4px ${R.stroke}` : undefined,
						fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: st > 0.5 ? BAD.ink : r.color ?? INK, fontVariantNumeric: 'tabular-nums', whiteSpace: 'pre'}}>
						<span style={{opacity: co}}>{c}</span>
					</div>;
				})}
			</div>;
		})}
	</div>;
};

// ---------- RelFreqTrace: the relative frequency of a four as the rolls arrive ----------
export const RelFreqTrace: React.FC<{x: number; y: number; w: number; h: number; seq: readonly number[]; face: number; shown: number; at?: number; out?: number; marks?: readonly {k: number; label: string; at: number}[]}> = ({x, y, w, h, seq, face, shown, at = -30, out, marks = []}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const L = 96, B = 70, T = 20, pw = w - L - 30, ph = h - B - T, N = seq.length;
	const X = (k: number) => x + L + (k / N) * pw, Y = (v: number) => y + T + ph - (v / 0.5) * ph;
	let c = 0;
	const pts: string[] = [];
	for (let k = 1; k <= Math.min(N, shown); k++) {if (seq[k - 1] === face) c++; pts.push(`${k === 1 ? 'M' : 'L'}${X(k).toFixed(1)},${Y(c / k).toFixed(1)}`);}
	const S = (s: number, col: string, wgt = 700): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: wgt, fontSize: s, fill: col});
	return <FrameSvg style={{opacity: o}}>
		<rect x={x} y={y - 10} width={w} height={h + 20} rx={18} fill={CARD} stroke="rgba(60,45,20,0.12)" strokeWidth={2.5} />
		<line x1={x + L} x2={x + L} y1={y + T} y2={y + T + ph} stroke={INK} strokeWidth={3} />
		<line x1={x + L} x2={x + L + pw} y1={y + T + ph} y2={y + T + ph} stroke={INK} strokeWidth={3} />
		{[0.2, 0.4].map(v => <g key={v}><line x1={x + L - 10} x2={x + L} y1={Y(v)} y2={Y(v)} stroke={INK} strokeWidth={3} /><text x={x + L - 16} y={Y(v) + 10} textAnchor="end" style={S(30, INK)}>{v}</text></g>)}
		{[0, 50, 100, 150, 200].map(k => <text key={k} x={X(k)} y={y + T + ph + 36} textAnchor="middle" style={S(28, INK)}>{k}</text>)}
		<text x={x + L + pw} y={y + T + ph + 66} textAnchor="end" style={S(28, INK_SOFT)}>rolls</text>
		<path d={pts.join(' ')} fill="none" stroke={ASK.stroke} strokeWidth={5} strokeLinejoin="round" />
		{marks.map(m => (f >= m.at && shown >= m.k ? (() => {let cc = 0; for (let i = 0; i < m.k; i++) if (seq[i] === face) cc++; const px = X(m.k), py = Y(cc / m.k); return <g key={m.k} opacity={prog(f, m.at, 10)}>
			<circle cx={px} cy={py} r={11} fill={ASK.ink} stroke={CARD} strokeWidth={3} />
			<text x={px + 18} y={py - 18} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, fill: ASK.ink}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{m.label}</text>
		</g>;})() : null))}
	</FrameSvg>;
};

// ---------- TokenDrop: one token per roll, from the die to the top of its face's bar ----------
export const TokenDrop: React.FC<{from: [number, number]; items: readonly number[]; at: number; every: number; colX: (i: number) => number; topY: (i: number) => number; r?: number; fly?: number; stay?: number; arc?: number}> = ({from, items, at, every, colX, topY, r = 16, fly = 16, stay = 30, arc = 140}) => {
	const f = useCurrentFrame();
	const stack = new Array(6).fill(0);
	return <FrameSvg>
		{items.map((col, i) => {
			const lvl = stack[col]++;
			const a = f - (at + i * every);
			if (a < 0 || a > fly + stay + 10) return null;
			const u = Math.min(1, a / fly), tx = colX(col), ty = topY(col) - r - 4 - lvl * (2 * r + 4);
			const px = from[0] + (tx - from[0]) * u, py = from[1] + (ty - from[1]) * u - Math.sin(Math.PI * u) * arc;
			const o = a > fly + stay ? 1 - (a - fly - stay) / 10 : 1;
			return <circle key={i} cx={px} cy={py} r={r} fill={ASK.stroke} stroke={CARD} strokeWidth={4} opacity={o} />;
		})}
	</FrameSvg>;
};

// ---------- the spinner ----------
/** The painted spinner, its base's alpha box at (x, y), w wide, with coded sectors and the painted pointer. */
export const Spinner: React.FC<{x: number; y: number; w: number; sectors: readonly {label?: string; role?: RoleKey; color?: string}[]; pointer?: number; at?: number; out?: number; labelSize?: number}> = ({x, y, w, sectors, pointer = 30, at = -30, out, labelSize = 40}) => {
	usePlatePreload([SPIN_BASE.src, SPIN_PTR.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const s = w / (SPIN_BASE.box[2] - SPIN_BASE.box[0]);
	const cx = x + (SPIN_DISC.cx - SPIN_BASE.box[0]) * s, cy = y + (SPIN_DISC.cy - SPIN_BASE.box[1]) * s, r = SPIN_DISC.r * s * 0.98;
	const px = x + (SPIN_DISC.pivot[0] - SPIN_BASE.box[0]) * s, py = y + (SPIN_DISC.pivot[1] - SPIN_BASE.box[1]) * s;
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		<FrameSvg><SvgPlate plate={SPIN_BASE} x={x} y={y} w={w} /></FrameSvg>
		<SpinnerSectors cx={cx} cy={cy} r={r} sectors={sectors.map(q => ({weight: 1, ...q}))} rim={false} labelSize={labelSize} />
		<FrameSvg><g transform={`rotate(${pointer} ${px} ${py})`}><SvgPlate plate={SPIN_PTR} x={x} y={y} w={w} /></g></FrameSvg>
	</div>;
};

// ---------- the counters in a bag (A2) ----------
export const CounterBag: React.FC<{x: number; y: number; d?: number; at?: number; out?: number; labels?: boolean}> = ({x, y, d = 120, at = -30, out, labels = false}) => {
	usePlatePreload([COUNTER_R.src, COUNTER_Y.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const pos: [number, number, PlateSpec, string][] = [[x + 40, y + 60, COUNTER_R, 'R1'], [x + 40 + d + 30, y + 40, COUNTER_R, 'R2'], [x + 60, y + 90 + d, COUNTER_Y, 'Y1'], [x + 70 + d + 30, y + 70 + d, COUNTER_Y, 'Y2']];
	const W = 2 * d + 140, H = 2 * d + 180;
	return <FrameSvg style={{opacity: o}}>
		<path d={`M${x},${y + 20} Q${x - 10},${y + H} ${x + W / 2},${y + H} Q${x + W + 10},${y + H} ${x + W},${y + 20}`} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="12 9" />
		{pos.map(([px, py, p, lab], i) => <g key={i}><SvgPlate plate={p} x={px} y={py} w={d} />{labels ? <text x={px + d / 2} y={py + d / 2 + 12} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: '#ffffff'}}>{lab}</text> : null}</g>)}
		<text x={x + W / 2} y={y + H + 44} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, fill: INK}}>bag</text>
	</FrameSvg>;
};

// ---------- the desk calendar ----------
/** The painted desk calendar, alpha box at (x, y), w wide, with a coded date (and optional month) on its blank page. */
export const DeskCalendar: React.FC<{x: number; y: number; w: number; date?: string; month?: string; at?: number; out?: number; accent?: string}> = ({x, y, w, date = '15', month, at = -30, out, accent = BAD.ink}) => {
	usePlatePreload([CAL.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const s = w / (CAL.box[2] - CAL.box[0]);
	const px = x + (CAL_PAGE[0] - CAL.box[0]) * s, py = y + (CAL_PAGE[1] - CAL.box[1]) * s, pw = (CAL_PAGE[2] - CAL_PAGE[0]) * s, ph = (CAL_PAGE[3] - CAL_PAGE[1]) * s;
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		<FrameSvg><SvgPlate plate={CAL} x={x} y={y} w={w} /></FrameSvg>
		<div style={{position: 'absolute', left: px, top: py, width: pw, height: ph, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
			{month ? <div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: Math.max(28, ph * 0.13), color: accent, textTransform: 'uppercase', letterSpacing: 2}}>{month}</div> : null}
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: Math.max(44, ph * 0.5), color: INK, lineHeight: 1}}>{date}</div>
		</div>
	</div>;
};
/** Empty date axes 1 to 31 (labels write on left to right from `writeAt`), with a "?" over them. */
export const DateAxes: React.FC<{x: number; y: number; w: number; h: number; writeAt?: number; at?: number; out?: number; q?: number; yTop?: string}> = ({x, y, w, h, writeAt = -300, at = -30, out, q = 1, yTop = '0.04'}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const L = 80, pw = w - L - 20, base = y + h - 70, top = y + 40;
	const X = (d: number) => x + L + ((d - 0.5) / 31) * pw;
	const shown = Math.floor(31 * Math.min(1, Math.max(0, (f - writeAt) / 40)));
	const S = (s: number, c: string, wgt = 700): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: wgt, fontSize: s, fill: c});
	return <FrameSvg style={{opacity: o}}>
		<line x1={x + L} x2={x + L + pw} y1={base} y2={base} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		<line x1={x + L} x2={x + L} y1={top} y2={base} stroke={INK} strokeWidth={3.5} />
		<line x1={x + L - 12} x2={x + L} y1={top + 10} y2={top + 10} stroke={INK} strokeWidth={3} />
		<text x={x + L - 18} y={top + 20} textAnchor="end" style={S(28, INK)}>{yTop}</text>
		<text x={x + L - 18} y={base + 10} textAnchor="end" style={S(28, INK)}>0</text>
		{[1, 5, 10, 15, 20, 25, 31].map(d => <text key={d} x={X(d)} y={base + 40} textAnchor="middle" style={S(30, INK)} opacity={writeAt > -300 ? (d <= Math.max(1, shown) ? 1 : 0) : 1}>{d}</text>)}
		{Array.from({length: 31}, (_, i) => <line key={i} x1={X(i + 1)} x2={X(i + 1)} y1={base} y2={base + 10} stroke={INK} strokeWidth={2.5} opacity={writeAt > -300 ? (i < Math.max(1, shown) ? 1 : 0) : 1} />)}
		<text x={x + L + pw / 2} y={base + 76} textAnchor="middle" style={S(30, INK)}>date</text>
		<text x={x + L + pw / 2} y={(top + base) / 2 + 40} textAnchor="middle" opacity={q} style={S(120, INK_SOFT, 800)}>?</text>
	</FrameSvg>;
};
export {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT};
