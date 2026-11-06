// Drawing parts for M8 P04 (calibration practical). Re-exports M8 P03 (and through it M8 C04's coded lineGraph pieces,
// C03b, C03a, C01 and the M6/M5 chain), so the results writer, risk grid, write-on text and glow are shared. New here:
// - CalGraph: the example calibration (blank and five standards; the line of best fit through the blank and the first
//   four; the dashed extension; the linear range band) with every element timed;
// - Cuv: a copper cuvette placed by height (states cross-fade in place on the shared canvas); cuvPt for anchors;
// - Ridges: hatched "hold here" outlines on a cuvette's ridged sides, and the clear-face outline;
// - CTube: a coded test tube whose fill rises in two colours (stock, then water); Stream: a falling liquid stream;
// - MiniBeam: lamp, cuvette tint, beam (thins by a frame function), detector and a dark readout;
// - Screen: a dark readout drawn over the spectrophotometer plate's screen.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {CAxes, CBand, CPts, CSeg, FlaskStates, INK, INK_SOFT, PicF, Sx, clamp01, gx, gy, lerp, natPt, smooth, vis} from '../chem-m8-p03/parts';
import type {CG, FState} from '../chem-m8-p03/parts';
import {CUV, CUV_A, UVV, UVV_A} from './common';
import type {PDef} from './common';

export * from '../chem-m8-p03/parts';

// ---------- colour key (design) ----------
export const CU = '#2b6fc4', CU_PALE = '#9fd0f0', CU_INK = '#1d4f8a', GIV = '#24407a', BAND = '#2f8a5b', OUT = '#b5502b', ANS = '#1f7f78';

// ---------- the example calibration data ----------
export const STD_C = [0, 0.02, 0.04, 0.06, 0.08, 0.12];
export const STD_A = [0, 0.238, 0.479, 0.712, 0.957, 1.33];
export const SLOPE = 11.94, ICPT = -0.0004;
export const fitA = (c: number) => SLOPE * c + ICPT;
export type CalT = {axes?: number; pts?: number[]; line?: number; ext?: number; fifth?: number; band?: number; o?: number};
/** The calibration graph. `t.pts[i]` plots point i (0 = blank); `fifth` turns the 0.120 point terracotta. */
export const CalGraph: React.FC<{g: CG; t: CalT; size?: number; grid?: boolean}> = ({g, t, size = 28, grid = false}) => {
	const f = useCurrentFrame();
	const pts = t.pts ?? STD_C.map(() => -1000);
	const red = t.fifth === undefined ? 0 : prog(f, t.fifth, 12);
	const xt = [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14].filter(v => v <= g.x1 + 1e-9);
	const yt = [0, 0.4, 0.8, 1.2, 1.6].filter(v => v <= g.y1 + 1e-9);
	return (
		<g opacity={t.o ?? 1}>
			<CAxes g={g} at={t.axes ?? -1000} xLabel="concentration (mol/L)" yLabel="absorbance" xTicks={xt} yTicks={yt} fx={n => (n === 0 ? '0' : n.toFixed(2))} fy={n => (n === 0 ? '0' : n.toFixed(1))} size={size} grid={grid ? {dx: 0.02, dy: 0.2} : undefined} />
			{t.band !== undefined ? <CBand g={g} lo={0} hi={0.08} at={t.band} color={BAND} /> : null}
			{t.line !== undefined ? <CSeg g={g} a={[0, fitA(0)]} b={[0.08, fitA(0.08)]} at={t.line} color={GIV} width={5} dur={30} /> : null}
			{t.ext !== undefined ? <CSeg g={g} a={[0.08, fitA(0.08)]} b={[Math.min(g.x1, 0.13), fitA(Math.min(g.x1, 0.13))]} at={t.ext} color={GIV} width={4} dash="12 10" dur={24} /> : null}
			<CPts g={g} pts={STD_C.map((c, i) => ({x: c, y: STD_A[i], at: pts[i] ?? -1000, color: i === 5 && red > 0.5 ? OUT : GIV}))} r={11} />
			{i5Ring(g, red)}
		</g>
	);
};
const i5Ring = (g: CG, red: number) => (red > 0.01 ? <circle cx={gx(g, 0.12)} cy={gy(g, 1.33)} r={22} fill="none" stroke={OUT} strokeWidth={4} opacity={red} /> : null);

// ---------- cuvettes ----------
export const cuvW = (h: number) => (CUV.c1.box[2] / CUV.c1.box[3]) * h;
export const cuvPt = (x: number, y: number, h: number, nx: number, ny: number) => natPt(CUV.c1, x, y, h, nx, ny);
export const Cuv: React.FC<{x: number; y: number; h: number; states: FState[]; at?: number; out?: number; o?: number}> = ({x, y, h, states, at = -1000, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	return <FlaskStates x={x} y={y} h={h} states={states} o={v} />;
};
/** Hatched outlines on both ridged sides (from `at`) and a light-blue outline on the clear face (from `face`). */
export const Ridges: React.FC<{x: number; y: number; h: number; at: number; face?: number; out?: number}> = ({x, y, h, at, face, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	const fv = face === undefined ? 0 : vis(f, face, out, 12);
	const P = (nx: number, ny: number) => cuvPt(x, y, h, nx, ny);
	const side = (a: number, b: number, k: string) => {
		const [x0, y0] = P(a, CUV_A.top + 30), [x1, y1] = P(b, CUV_A.bottom - 30);
		return (
			<g key={k}>
				<rect x={x0 - 6} y={y0} width={x1 - x0 + 12} height={y1 - y0} rx={8} fill="none" stroke="#b07a12" strokeWidth={5} />
				{Array.from({length: Math.floor((y1 - y0) / 26)}, (_, i) => <line key={i} x1={x0 - 4} x2={x1 + 4} y1={y0 + 14 + i * 26} y2={y0 + 30 + i * 26} stroke="#b07a12" strokeWidth={3} opacity={0.8} />)}
			</g>
		);
	};
	const [fx0, fy0] = P(CUV_A.ridgeL[1] + 8, CUV_A.top + 40), [fx1, fy1] = P(CUV_A.ridgeR[0] - 8, CUV_A.bottom - 40);
	return (
		<g>
			{v > 0.01 ? <g opacity={v}>{side(CUV_A.ridgeL[0], CUV_A.ridgeL[1], 'l')}{side(CUV_A.ridgeR[0], CUV_A.ridgeR[1], 'r')}</g> : null}
			{fv > 0.01 ? <rect x={fx0} y={fy0} width={fx1 - fx0} height={fy1 - fy0} rx={6} fill="none" stroke="#3b86c4" strokeWidth={5} strokeDasharray="14 8" opacity={fv} /> : null}
		</g>
	);
};

// ---------- coded test tube with a two-colour fill ----------
/** fillA(f), fillB(f): fractions (0..1 of the tube's working height) of stock (blue) and water (clear) added. */
export const CTube: React.FC<{x: number; y: number; w?: number; h?: number; a: (f: number) => number; b: (f: number) => number; mix?: number; at?: number; o?: number; color?: string; marks?: {v: number; label: string; at: number}[]}> = ({x, y, w = 70, h = 300, a, b, mix, at = -1000, o = 1, color = CU, marks = []}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const fa = clamp01(a(f)), fb = clamp01(b(f));
	const m = mix === undefined ? 0 : smooth(prog(f, mix, 30));
	const H = h - w / 2 - 20;
	const bottom = y + h - w / 2;
	const rock = mix === undefined ? 0 : Math.sin(clamp01((f - mix) / 40) * Math.PI * 3) * 8;
	const ya = bottom - H * fa, yb = ya - H * fb;
	const mixed = lerp(0, 1, m);
	return (
		<g opacity={v} transform={`rotate(${rock},${x + w / 2},${y})`}>
			<path d={`M${x},${y} L${x},${bottom} A${w / 2},${w / 2} 0 0 0 ${x + w},${bottom} L${x + w},${y}`} fill="#f4f8fb" stroke={INK_SOFT} strokeWidth={4} />
			{fa > 0.001 ? <path d={`M${x + 4},${ya} L${x + 4},${bottom} A${w / 2 - 4},${w / 2 - 4} 0 0 0 ${x + w - 4},${bottom} L${x + w - 4},${ya} Z`} fill={color} opacity={lerp(0.85, 0.4, mixed)} /> : null}
			{fb > 0.001 ? <rect x={x + 4} y={yb} width={w - 8} height={ya - yb} fill={mixed > 0.01 ? color : '#d7ecf7'} opacity={mixed > 0.01 ? 0.4 * mixed + 0.25 * (1 - mixed) : 0.55} /> : null}
			{marks.map((mk, i) => {
				const my = bottom - H * mk.v;
				const mo = prog(f, mk.at, 10);
				return mo > 0.01 ? <g key={i} opacity={mo}><line x1={x + w} x2={x + w + 26} y1={my} y2={my} stroke={INK} strokeWidth={3} /><Sx x={x + w + 34} y={my + 10} text={mk.label} size={28} color={INK} weight={800} at={-1000} /></g> : null;
			})}
			<rect x={x - 8} y={y - 10} width={w + 16} height={14} rx={7} fill="#f4f8fb" stroke={INK_SOFT} strokeWidth={3} />
		</g>
	);
};
export const Stream: React.FC<{x: number; y0: number; y1: number; at: number; until: number; color?: string; w?: number}> = ({x, y0, y1, at, until, color = CU, w = 6}) => {
	const f = useCurrentFrame();
	if (f < at || f > until + 10) return null;
	const grow = smooth(clamp01((f - at) / 8)), stop = smooth(clamp01((f - until) / 10));
	const ya = lerp(y0, y1, stop), yb = lerp(y0, y1, grow);
	return <line x1={x} x2={x} y1={ya} y2={yb} stroke={color} strokeWidth={w} strokeLinecap="round" opacity={0.8} />;
};

// ---------- mini beam cutaway ----------
export const MiniBeam: React.FC<{x: number; y: number; w: number; h?: number; at: number; out?: number; tint: string; thin: (f: number) => number; read: (f: number) => string; title?: string; smudge?: number; slivers?: number; o?: number; size?: number}> = ({x, y, w, h = 230, at, out, tint, thin, read, title, smudge, slivers, o = 1, size = 36}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const by = y + h * 0.5, bh = 46;
	const lampX = x + 60, cuvX = x + w * 0.38, detX = x + w * 0.62, rdX = x + w * 0.68;
	const k = thin(f);
	const sm = smudge === undefined ? 0 : prog(f, smudge, 14);
	const sl = slivers === undefined ? 0 : prog(f, slivers, 16);
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
			{title ? <Sx x={x + 22} y={y + 38} text={title} size={28} color={INK} hand weight={700} at={-1000} /> : null}
			<circle cx={lampX} cy={by} r={28} fill="#fff1b8" stroke={INK} strokeWidth={4} />
			<rect x={lampX + 28} y={by - bh / 2} width={cuvX - 36 - lampX - 28} height={bh} fill="#fff3c4" stroke="#e8d9a8" strokeWidth={2} />
			<rect x={cuvX + 36} y={by - (bh * k) / 2} width={detX - 20 - cuvX - 36} height={bh * k} fill="#fff3c4" stroke="#e8d9a8" strokeWidth={2} />
			<rect x={cuvX - 34} y={by - 80} width={68} height={160} rx={6} fill="#f4f8fb" stroke={INK_SOFT} strokeWidth={3} />
			<rect x={cuvX - 28} y={by - 40} width={56} height={114} fill={tint} opacity={0.85} />
			{sm > 0.01 ? <ellipse cx={cuvX - 30} cy={by - 6} rx={14} ry={30} fill="#9a8a70" opacity={0.55 * sm} /> : null}
			{sl > 0.01 ? (
				<g opacity={sl}>
					<rect x={cuvX - 60} y={by - bh / 2 - 46 * sl} width={10} height={bh} fill="#b9b2a5" />
					<rect x={cuvX - 44} y={by - bh / 2 - 46 * sl} width={10} height={bh} fill="#9fc6dd" />
				</g>
			) : null}
			<rect x={detX - 18} y={by - 46} width={36} height={92} rx={8} fill="#cfd6de" stroke={INK} strokeWidth={4} />
			<Sx x={lampX} y={y + h - 18} text="lamp" size={28} color={INK} anchor="middle" hand weight={700} at={-1000} />
			<Sx x={cuvX} y={y + h - 18} text="cuvette" size={28} color={INK} anchor="middle" hand weight={700} at={-1000} />
			<Sx x={detX} y={y + h - 18} text="detector" size={28} color={INK} anchor="middle" hand weight={700} at={-1000} />
			<rect x={rdX} y={by - 42} width={x + w - 20 - rdX} height={84} rx={12} fill="#2b3138" />
			<Sx x={(rdX + x + w - 20) / 2} y={by + 14} text={read(f)} size={size} color="#9be3b8" anchor="middle" weight={700} at={-1000} />
		</g>
	);
};

// ---------- spectrophotometer screen readout ----------
export const Screen: React.FC<{p?: PDef; x: number; y: number; h: number; text: (f: number) => string; at: number; out?: number}> = ({p = UVV, x, y, h, text, at, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (v <= 0.01) return null;
	const [a, b, c, d] = UVV_A.scr;
	const [x0, y0] = natPt(p, x, y, h, a + 20, b + 20), [x1, y1] = natPt(p, x, y, h, c - 30, d - 20);
	return (
		<g opacity={v}>
			<rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} rx={8} fill="#24302c" />
			<Sx x={(x0 + x1) / 2} y={(y0 + y1) / 2 + (y1 - y0) * 0.2} text={text(f)} size={(y1 - y0) * 0.5} color="#9fe3b0" anchor="middle" weight={700} at={-1000} />
		</g>
	);
};
export const slotPt = (x: number, y: number, h: number) => natPt(UVV, x, y, h, UVV_A.slot[0], UVV_A.slot[1]);
export {INK, PicF, gx, gy, lerp, smooth, clamp01, vis};
