// Lesson parts for math-a12-f09 (Revision 3: a reducing-balance loan month by month; a first car loan), on the maths
// studio kit (its money engine) and the f01 to f07 board parts (imported read-only through ../math-a12-f07/parts).
// These parts also serve f11, f13 and f15 (same builder; import them read-only from here). Lesson-local rigs:
// - Statement: the painted loan statement with coded text in its four measured field rows;
// - ZoomBar: the top of the balance bar (a broken axis, so a month's interest is visible): an amber interest cap
//   grows on, then a teal repayment bite drops off, with history ticks A₀, A₁, … and a live readout;
// - SplitBar: one repayment as a bar, amber interest part and teal debt-paid-off part;
// - MoneyTable: the balance table on a card, cell by cell on cues;
// - LoanStrip: f08's handoff strip ($30,000 owed, ×1.006, −$600, ?), used for scene 1's opening;
// - LoanGraph: balance against years for one or more loans, with a half line, a chord, a ghost and a marker.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, MATH_ROLES, StudioPlot, SvgPlate, fmtMoney, loanBalance, loanBarState, loanSchedule, plateMap, smooth, usePlatePreload, vis} from '../../math/studio';
import type {PlateSpec, PlotMap} from '../../math/studio';

export * from '../math-a12-f07/parts';

export const INT = MATH_ROLES.interest;
export const REP = MATH_ROLES.repay;
export const ANS = MATH_ROLES.answer;
export const MIS = MATH_ROLES.mistake;
/** Money to the cent, en-AU: 30000 → "$30,000.00". */
export const m2 = (v: number) => fmtMoney(v, 2);
/** Whole dollars, en-AU: 30000 → "$30,000". */
export const m0 = (v: number) => fmtMoney(v, 0);

// ---------- the numbers (design "Numbers to verify", recomputed from the kit's money engine) ----------
export const CAR = {P: 30000, r: 0.006, M: 600} as const;
export const HOME = {P: 400000, r: 1 / 240, M: 2147.29} as const;
export const CAR_ROWS = loanSchedule(CAR.P, CAR.r, CAR.M);
export const HOME_ROWS = loanSchedule(HOME.P, HOME.r, HOME.M);
/** Balance after k car repayments (exact, from the schedule). */
export const carAfter = (k: number) => (k <= 0 ? CAR.P : CAR_ROWS[Math.min(k, CAR_ROWS.length) - 1].closing);
{
	const c2 = (v: number) => Math.round(v * 100) / 100;
	const near = (a: number, b: number, tol = 0.005) => Math.abs(a - b) < tol;
	const R = CAR_ROWS, H = HOME_ROWS;
	const checks: [string, boolean][] = [
		['rate', near(0.072 / 12, 0.006, 1e-12) && 30000 * 1.006 === 30180 && 30180 - 600 === 29580],
		['table', near(R[0].interest, 180) && near(R[0].closing, 29580) && near(R[1].interest, 177.48) && near(R[1].closing, 29157.48) && near(R[2].interest, 174.94488, 1e-6) && near(R[2].closing, 28732.42488, 1e-6)
			&& c2(R[2].interest) === 174.94 && c2(600 - R[2].interest) === 425.06 && c2(R[2].closing) === 28732.42],
		['closed form', near(1.006 ** 3, 1.018108216, 1e-9) && near(30000 * 1.006 ** 3, 30543.24648, 1e-6) && near(100000 * (1.006 ** 3 - 1), 1810.8216, 1e-6) && near(loanBalance(30000, 0.006, 600, 3), 28732.42488, 1e-6) && 600 / 0.006 === 100000],
		['whole car loan', R.length === 60 && c2(R[11].interest) === 151.43 && c2(R[23].interest) === 118.05 && c2(R[35].interest) === 82.18 && c2(R[47].interest) === 43.64 && c2(R[58].interest) === 5.8
			&& c2(R[58].closing) === 372.58 && c2(R[59].repayment) === 374.81 && c2(R[59].interest) === 2.24 && c2(R.reduce((s, x) => s + x.repayment, 0)) === 35774.81
			&& c2(R[11].closing) === 24790.31 && c2(R[23].closing) === 19192.89 && c2(R[35].closing) === 13178.89 && c2(R[47].closing) === 6717.3 && c2(R[57].closing) === 966.78],
		['home loan', H.length === 360 && c2(H[0].interest) === 1666.67 && c2(H[0].repayment - H[0].interest) === 480.62 && c2(H[179].closing) === 271534.7 && H[240].closing > 200000 && H[241].closing < 200000
			&& c2(H[299].closing) === 113784.14 && c2(H[359].repayment) === 2144.37 && near(H[0].interest / 2147.29, 0.7762, 0.0001)],
		['A1', near(12000 * 1.005 - 250, 11810, 1e-9) && near(11810 * 1.005, 11869.05, 1e-9) && near(11810 * 1.005 - 250, 11619.05, 1e-9) && 12000 - 2 * 250 === 11500],
		['A2', 900 / 0.004 === 225000 && near(loanBalance(50000, 0.004, 900, 12), 41412.71, 0.005) && near(50000 * 1.004 ** 12 - 225000 * (1.004 ** 12 - 1), 41412.71, 0.005)],
		['handoff', loanSchedule(400000, 1 / 240, 2500).length === 265],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-f09 numbers: ' + bad.join(', '));
}

// ---------- plates ----------
/** Brief 240 (ma12-f09-provenance.json): measured alpha boxes (alpha > 32), field rows, table lines. */
export const CAR_PLATE: PlateSpec = {src: 'assets/maths/ma12-used-hatchback-v1.png', nat: [1774, 887], box: [264, 184, 1491, 750]};
export const STATEMENT: PlateSpec = {src: 'assets/maths/ma12-loan-statement-v1.png', nat: [1070, 1470], box: [144, 223, 924, 1258]};
export const ST_ROWS = [[177, 416, 560, 449], [177, 466, 560, 498], [177, 517, 560, 550], [177, 569, 560, 600]] as const;
export const ST_DIV = 305;
export const ST_TABLE = [171, 667, 899, 1178] as const;
export const ST_HEADER = [176, 270, 892, 365] as const;
const stW = (h: number) => (h * (STATEMENT.box[2] - STATEMENT.box[0])) / (STATEMENT.box[3] - STATEMENT.box[1]);
export const carH = (w: number) => (w * (CAR_PLATE.box[3] - CAR_PLATE.box[1])) / (CAR_PLATE.box[2] - CAR_PLATE.box[0]);
/** Frame mapping for the statement drawn with its alpha box's top left at (x, y) and its box h tall. */
export const stMap = (x: number, y: number, h: number) => plateMap(STATEMENT, x, y, stW(h));
export const stWidth = stW;

/** A generous width estimate (in em) for Inter Tight 800 with tabular digits, used to fit statement values. */
const textEm = (t: string) => 1.06 * [...t].reduce((a, c) => a + (/[0-9$]/.test(c) ? 0.64 : /[,.]/.test(c) ? 0.3 : c === ' ' ? 0.26 : c === '/' ? 0.42 : c === '%' ? 0.92 : /[mwMW]/.test(c) ? 0.92 : /[A-Z]/.test(c) ? 0.72 : /[ijlt]/.test(c) ? 0.36 : c === '?' ? 0.56 : 0.6), 0);

export type StField = {label: string; value: React.ReactNode; at?: number; size?: number; color?: string; glow?: {from: number; to: number; color: string}};
/**
 * The painted statement, its alpha box's top left at (x, y), h tall; up to four coded fields written into the
 * measured rows: a short label in the grey label cell, the value in the white cell (text sizes clamp to fit).
 * `header` writes a title in the blue header band.
 */
export const Statement: React.FC<{x: number; y: number; h: number; fields?: readonly (StField | null)[]; header?: React.ReactNode; labelSize?: number; at?: number; out?: number; children?: React.ReactNode}> = ({x, y, h, fields = [], header, labelSize = 28, at = -30, out, children}) => {
	usePlatePreload([STATEMENT.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const m = stMap(x, y, h);
	const [hx0, hy0] = m.at(ST_HEADER[0], ST_HEADER[1]), [hx1, hy1] = m.at(ST_HEADER[2], ST_HEADER[3]);
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		<FrameSvg><SvgPlate plate={STATEMENT} x={x} y={y} w={stW(h)} /></FrameSvg>
		{header ? <div style={{position: 'absolute', left: hx0 + 18, top: hy0, height: hy1 - hy0, width: hx1 - hx0 - 36, display: 'flex', alignItems: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: Math.max(28, Math.min(40, (hy1 - hy0) * 0.55)), color: INK, whiteSpace: 'pre'}}>{header}</div> : null}
		{(() => {
			// Fit each value to its ruled cell (shrink towards 26 px). When a value still overruns its painted cell,
			// across or up and down, redraw that statement's field rows as coded cells sized to the text.
			const sc = m.s, pitch = 51 * sc, lw = Math.max(1.6, 2.6 * sc);
			const rows = fields.map((fd, i) => {
				if (!fd) return null;
				const r = ST_ROWS[i];
				const [a0, b0] = m.at(r[0], r[1]), [dv] = m.at(ST_DIV, r[1]), [a1, b1] = m.at(r[2], r[3]);
				const hh = b1 - b0, mid = (b0 + b1) / 2, want = fd.size ?? 36;
				const em = typeof fd.value === 'string' ? textEm(fd.value) : 0;
				const fs = Math.max(26, Math.min(want, (pitch - 4) / 1.02, em > 0 ? (a1 - dv - 24) / em : want));
				const need = em > 0 ? dv + 10 + em * fs + 14 : a1;
				return {fd, a0, a1, dv, hh, mid, fs, need, over: need > a1 + 0.5 || fs * 0.84 > hh};
			});
			const redraw = rows.some(q => q?.over);
			const right = Math.max(...rows.map(q => (q ? Math.max(q.a1 + 4 * sc, q.need) : 0)));
			return rows.map((q, i) => {
				if (!q) return null;
				const {fd, a0, dv, mid, fs} = q;
				const H = redraw ? Math.max(q.hh + 5 * sc, Math.min(pitch - 4, fs * 1.02)) : q.hh, top = mid - H / 2, cr = redraw ? right : q.a1;
				const fo = vis(f, fd.at ?? at, undefined, 12);
				const g = fd.glow ? vis(f, fd.glow.from, fd.glow.to, 10) : 0;
				return <React.Fragment key={i}>
					{redraw ? <svg style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}} width={1} height={1}>
						<rect x={a0 - 4 * sc} y={top - 3 * sc} width={cr - a0 + 8 * sc} height={H + 6 * sc} fill="#f8f2e6" />
						<rect x={a0} y={top} width={dv - a0} height={H} fill="#f2ebe1" />
						<rect x={dv} y={top} width={cr - dv} height={H} fill="#fdfaf1" />
						<rect x={a0} y={top} width={cr - a0} height={H} fill="none" stroke="#6c6a62" strokeWidth={lw} />
						<line x1={dv} x2={dv} y1={top} y2={top + H} stroke="#6c6a62" strokeWidth={lw} />
					</svg> : null}
					<div style={{opacity: fo}}>
					{g > 0.01 ? <div style={{position: 'absolute', left: a0 - 8, top: top - 8, width: cr - a0 + 16, height: H + 16, borderRadius: 10, background: fd.glow!.color, opacity: 0.45 * g, boxShadow: `0 0 0 3px ${fd.glow!.color}`}} /> : null}
					<div style={{position: 'absolute', left: a0, width: dv - a0, top: mid - 30, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: labelSize, color: INK, whiteSpace: 'pre'}}>{fd.label}</div>
					<div style={{position: 'absolute', left: dv + 10, top: mid - 40, height: 80, display: 'flex', alignItems: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: fs, color: fd.color ?? INK, whiteSpace: 'pre', fontVariantNumeric: 'tabular-nums'}}>{fd.value}</div>
					</div>
				</React.Fragment>;
			});
		})()}
		{children}
	</div>;
};

/** The painted car, its alpha box's top left at (x, y), w wide. */
export const Car: React.FC<{x: number; y: number; w: number; at?: number; out?: number}> = ({x, y, w, at = -30, out}) => {
	usePlatePreload([CAR_PLATE.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	return <FrameSvg style={{opacity: o}}><SvgPlate plate={CAR_PLATE} x={x} y={y} w={w} /></FrameSvg>;
};

// ---------- the zoomed balance bar ----------
const SUBS = '₀₁₂₃₄₅₆₇₈₉';
export const sub = (n: number | string) => String(n).split('').map(c => (c >= '0' && c <= '9' ? SUBS[+c] : c)).join('');
/**
 * The top of the balance bar, drawn from `lo` (a zigzag marks the broken axis) at `pxPer` px per dollar. `t` is
 * months elapsed (fractional): the amber interest cap grows in the first half of each month, the teal repayment
 * bite drops off in the second. Scale lines and labels at `scale`; history ticks Aₖ on the right once passed.
 */
export const ZoomBar: React.FC<{
	x: number; base: number; width?: number; lo: number; pxPer: number; P: number; r: number; M: number; t: number;
	scale?: readonly number[]; ticks?: readonly {k: number; label: string; at?: number}[]; readout?: {x: number; y: number; at?: number};
	capText?: (v: number) => string; label?: string; at?: number; out?: number;
}> = ({x, base, width = 170, lo, pxPer, P, r, M, t, scale = [], ticks = [], readout, capText, label = 'balance owed', at = -30, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const st = loanBarState(P, r, M, t);
	const Y = (v: number) => base - (v - lo) * pxPer;
	const capU = Math.min(1, st.phase / 0.45), payU = Math.max(0, (st.phase - 0.5) / 0.45);
	const top = Y(st.balance), capTop = Y(st.balance + st.interest * capU);
	const shown = st.balance + st.interest * capU - (payU > 0.35 ? st.payment : 0);
	const zz = Array.from({length: 7}, (_, i) => `${i ? 'L' : 'M'}${x + (i * width) / 6},${base + (i % 2 ? 12 : -12)}`).join(' ');
	const after = (k: number) => (k === 0 ? P : loanSchedule(P, r, M, k)[k - 1].closing);
	return <>
		<FrameSvg style={{opacity: o}}>
			{scale.map(v => <g key={v}><line x1={x - 18} x2={x + width + 18} y1={Y(v)} y2={Y(v)} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 8" /><text x={x - 26} y={Y(v) + 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK_SOFT}}>{m0(v)}</text></g>)}
			<rect x={x} y={top} width={width} height={base - top + 14} fill={INK} />
			<path d={zz + ` L${x + width},${base + 40} L${x},${base + 40} Z`} fill="#f6f1e7" />
			<path d={zz} fill="none" stroke={INK} strokeWidth={4} strokeLinejoin="round" />
			{capU > 0 && payU < 1 ? <rect x={x} y={capTop} width={width} height={top - capTop} fill={INT.stroke} /> : null}
			{capU > 0.5 && payU <= 0 ? <text x={x + width + 18} y={(capTop + top) / 2 + 14} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, fill: INT.ink}}>{capText ? capText(st.interest) : `+${m2(st.interest)}`}</text> : null}
			{payU > 0 ? (() => {
				const bh = st.payment * pxPer, yb = capTop + payU * 70, op = 1 - Math.max(0, payU - 0.65) / 0.35;
				return <g opacity={op}>
					<rect x={x + payU * 46} y={yb} width={width} height={bh} fill={REP.stroke} stroke={CARD} strokeWidth={3} />
					<text x={x + width + 26 + payU * 46} y={yb + bh / 2 + 14} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, fill: REP.ink}}>{`−${m2(st.payment)}`}</text>
				</g>;
			})() : null}
			{ticks.map(tk => {
				const passed = tk.k === 0 || st.month + (payU > 0.35 ? 1 : 0) >= tk.k;
				const to = Math.min(passed ? 1 : 0, tk.at === undefined ? 1 : prog(f, tk.at, 12));
				if (to <= 0.01) return null;
				const ty = Y(after(tk.k));
				return <g key={tk.k} opacity={to}><line x1={x - 14} x2={x} y1={ty} y2={ty} stroke={INK} strokeWidth={4} /><text x={x - 22} y={ty + 11} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: INK}} stroke="#f6f1e7" strokeWidth={8} paintOrder="stroke">{tk.label}</text></g>;
			})}
			<text x={x + width / 2} y={base + 74} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: INK}}>{label}</text>
		</FrameSvg>
		{readout ? <div style={{position: 'absolute', left: readout.x, top: readout.y, opacity: o * prog(f, readout.at ?? at, 12), background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.12)', padding: '4px 22px 6px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: INK, fontVariantNumeric: 'tabular-nums', whiteSpace: 'pre'}}>{m2(shown)}</div> : null}
	</>;
};

// ---------- one repayment, split ----------
/** One repayment as a bar (w px for the full M): amber interest part, teal debt-paid-off part, labelled. */
export const SplitBar: React.FC<{x: number; y: number; w: number; M: number; pay?: number; interest: number; label: string; at: number; h?: number; ring?: number; size?: number}> = ({x, y, w, M, pay, interest, label, at, h = 42, ring, size = 30}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.001) return null;
	const P = pay ?? M, wi = (interest / M) * w, wt = ((P - interest) / M) * w, grow = smooth(prog(f, at, 18));
	const T = (c: string, s = size): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: s, fill: c, fontVariantNumeric: 'tabular-nums'} as React.CSSProperties);
	const ro = ring === undefined ? 0 : prog(f, ring, 12);
	return <FrameSvg style={{opacity: o}}>
		<text x={x - 196} y={y + h / 2 + 11} textAnchor="end" style={T(INK_SOFT, 30)}>{label}</text>
		<text x={x - 16} y={y + h / 2 + 11} textAnchor="end" style={T(INT.ink)}>{m2(interest)}</text>
		<rect x={x} y={y} width={Math.max(2, wi * grow)} height={h} fill={INT.stroke} />
		<rect x={x + wi * grow} y={y} width={wt * grow} height={h} fill={REP.stroke} />
		<rect x={x} y={y} width={(wi + wt) * grow} height={h} fill="none" stroke={INK} strokeWidth={2.5} />
		<text x={x + (wi + wt) * grow - 14} y={y + h / 2 + 11} textAnchor="end" opacity={prog(f, at + 10, 10)} style={T('#ffffff')}>{m2(P - interest)}</text>
		{ro > 0.01 ? <g opacity={ro}><ellipse cx={x - 76} cy={y + h / 2} rx={98} ry={38} fill="none" stroke={INT.stroke} strokeWidth={5} /></g> : null}
	</FrameSvg>;
};

// ---------- the balance table ----------
export type TableCol = {head: string; w: number; color?: string; align?: 'left' | 'right' | 'center'};
export type TableCell = {text: React.ReactNode; at: number; frame?: number; color?: string};
/** A card table: headings, then rows written cell by cell on cues; a cell can get a green answer frame. */
export const MoneyTable: React.FC<{x: number; y: number; cols: readonly TableCol[]; rows: readonly (readonly TableCell[])[]; at?: number; out?: number; size?: number; headSize?: number; rowH?: number; dim?: (row: number) => number; note?: {text: React.ReactNode; at: number}; glowCol?: {col: number; from: number; to: number}}> = ({x, y, cols, rows, at = -30, out, size = 36, headSize = 26, rowH = 66, dim, note, glowCol}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const W = cols.reduce((s, c) => s + c.w, 0);
	const g = glowCol ? vis(f, glowCol.from, glowCol.to, 10) : 0;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.12)', padding: '8px 18px 12px'}}>
		<div style={{display: 'flex', borderBottom: `3px solid ${INK}`}}>
			{cols.map((c, j) => <div key={j} style={{width: c.w, boxSizing: 'border-box', padding: '4px 10px 8px', textAlign: c.align ?? 'right', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: headSize, letterSpacing: 0.5, lineHeight: 1.1, color: c.color ?? INK, background: glowCol && glowCol.col === j && g > 0 ? `rgba(248,232,200,${g})` : undefined, borderRadius: 8}}>{c.head}</div>)}
		</div>
		{rows.map((row, i) => <div key={i} style={{display: 'flex', height: rowH, alignItems: 'center', borderBottom: i < rows.length - 1 ? `2px solid ${PAPER_DEEP}` : undefined, opacity: 1 - 0.45 * (dim ? dim(i) : 0)}}>
			{row.map((c, j) => {
				const co = prog(f, c.at, 10), fr = c.frame === undefined ? 0 : prog(f, c.frame, 12);
				return <div key={j} style={{width: cols[j].w, boxSizing: 'border-box', padding: '0 10px', textAlign: cols[j].align ?? 'right', opacity: co, transform: `translateY(${(1 - co) * -14}px)`}}>
					<span style={{display: 'inline-block', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: c.color ?? cols[j].color ?? INK, fontVariantNumeric: 'tabular-nums', whiteSpace: 'pre', border: fr > 0 ? `4px solid rgba(40,115,71,${fr})` : '4px solid transparent', borderRadius: 12, padding: '0 8px', margin: '0 -12px'}}>{c.text}</span>
				</div>;
			})}
		</div>)}
		{note ? <div style={{width: W, marginTop: 6, opacity: prog(f, note.at, 12), fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 30, color: INK_SOFT}}>{note.text}</div> : null}
	</div>;
};

// ---------- f08's handoff strip ----------
const LS = {x: 120, base: 560, tabW: 230, gap: 40, unit: 0.0062};
const lsX = (i: number) => LS.x + i * (LS.tabW + LS.gap) + LS.tabW / 2;
/** Bar top for strip slot i (the "?" slots stand 96 px). */
const lsTop = (i: number) => (i === 0 ? LS.base - 30000 * LS.unit : i === 1 ? LS.base - 30180 * LS.unit : LS.base - 96);
export const LS_GEOM = {...LS, cx: lsX, top: lsTop};
/**
 * The loan strip of f08's last frame: "t = 0" $30,000 owed, an amber "×1.006" arc to $30,180, a "−$600" arc to a
 * "?" bar (red, turning teal as `teal` goes 0 → 1), and a faint "month 2: ?" tab. `answer` fills the "?" bar with
 * $29,580. Every part is shown by its own opacity (0..1).
 */
export const LoanStrip: React.FC<{show?: Partial<Record<'t0' | 'arc1' | 'bar1' | 'tag' | 'arc2' | 'q' | 'tab2', number>>; teal?: number; answer?: number; pulse1?: number; pulse2?: number}> = ({show = {}, teal = 0, answer = 0, pulse1 = 0, pulse2 = 0}) => {
	const s = (k: keyof NonNullable<typeof show>) => show[k] ?? 1;
	const T = (size: number, fill: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size, fill} as React.CSSProperties);
	const lerp = (a: number[], b: number[], u: number) => `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * u)).join(',')})`;
	const arc2c = lerp([184, 50, 42], [31, 138, 143], teal), arc2ink = lerp([184, 50, 42], [19, 118, 122], teal);
	const bar = (i: number, value: number, text: string, o: number) => o <= 0.01 ? null : <g opacity={o}>
		<rect x={lsX(i) - LS.tabW / 2 + 14} y={LS.base - value * LS.unit} width={LS.tabW - 28} height={value * LS.unit} rx={8} fill="#ebe4d6" stroke={INK} strokeWidth={4} />
		<text x={lsX(i)} y={LS.base - value * LS.unit - 16} textAnchor="middle" style={T(44, INK)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{text}</text>
	</g>;
	const qbox = (i: number, o: number, faint = false) => o <= 0.01 ? null : <g opacity={o * (faint ? 0.55 : 1)}>
		<rect x={lsX(i) - LS.tabW / 2 + 14} y={LS.base - 96} width={LS.tabW - 28} height={86} rx={14} fill={CARD} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 8" />
		<text x={lsX(i)} y={LS.base - 36} textAnchor="middle" style={T(52, INK_SOFT)}>?</text>
	</g>;
	const a1x0 = lsX(0), a1x1 = lsX(1), a1y = lsTop(1) - 70;
	const a2x0 = lsX(1) + 30, a2x1 = lsX(2), a2y0 = lsTop(1) - 66, a2y1 = lsTop(2) - 14;
	return <FrameSvg>
		<line x1={LS.x - 20} x2={lsX(3) + LS.tabW / 2 + 10} y1={LS.base} y2={LS.base} stroke={INK} strokeWidth={4} />
		<g opacity={s('t0')}><text x={lsX(0)} y={LS.base + 50} textAnchor="middle" style={T(32, INK)}>t = 0</text></g>
		{bar(0, 30000, '$30,000', s('t0'))}
		<g opacity={s('t0')}><text x={lsX(0)} y={LS.base + 92} textAnchor="middle" style={T(34, INK_SOFT, true)}>owed</text></g>
		{s('arc1') > 0.01 ? <g opacity={s('arc1')}>
			<path d={`M${a1x0},${lsTop(0) - 64} Q${(a1x0 + a1x1) / 2},${a1y - 70} ${a1x1},${lsTop(1) - 64}`} fill="none" stroke={INT.stroke} strokeWidth={5 + 4 * pulse1} strokeLinecap="round" />
			<text x={(a1x0 + a1x1) / 2} y={a1y - 44} textAnchor="middle" style={T(44 + 6 * pulse1, INT.ink, true)} stroke={CARD} strokeWidth={7} paintOrder="stroke">×1.006</text>
		</g> : null}
		{bar(1, 30180, '$30,180', s('bar1'))}
		<g opacity={s('bar1')}><text x={lsX(1)} y={LS.base + 50} textAnchor="middle" style={T(32, INK)}>+ interest</text></g>
		<g opacity={s('tag')}><text x={(a1x0 + a1x1) / 2} y={a1y - 104} textAnchor="middle" style={T(32, INK_SOFT)}>interest: 0.6% a month</text></g>
		{s('arc2') > 0.01 ? <g opacity={s('arc2')}>
			<path d={`M${a2x0},${a2y0} Q${(a2x0 + a2x1) / 2 + 30},${a2y0 - 40} ${a2x1},${a2y1}`} fill="none" stroke={arc2c} strokeWidth={5 + 4 * pulse2} strokeLinecap="round" />
			<path d={`M${a2x1 - 16},${a2y1 - 22} L${a2x1},${a2y1} L${a2x1 + 20},${a2y1 - 16}`} fill="none" stroke={arc2c} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
			<text x={(a2x0 + a2x1) / 2 + 60} y={a2y0 - 30} textAnchor="middle" style={T(44 + 6 * pulse2, arc2ink, true)} stroke={CARD} strokeWidth={7} paintOrder="stroke">−$600</text>
		</g> : null}
		{answer < 0.99 ? qbox(2, s('q') * (1 - answer)) : null}
		{bar(2, 29580, '$29,580', answer)}
		<g opacity={s('q')}><text x={lsX(2)} y={LS.base + 50} textAnchor="middle" style={T(32, INK)}>month 1</text></g>
		{qbox(3, s('tab2'), true)}
		<g opacity={s('tab2') * 0.7}><text x={lsX(3)} y={LS.base + 50} textAnchor="middle" style={T(32, INK)}>month 2</text></g>
	</FrameSvg>;
};

// ---------- balance against years ----------
export type LoanCurve = {P: number; r: number; M: number; color?: string; dash?: string; width?: number; upTo?: number; label?: {text: string; atYears: number; dy?: number; color?: string}};
/** Balance owing after `years` (months = 12 × years), from the closed form, clamped at 0 past the payoff. */
export const balAtYears = (c: {P: number; r: number; M: number}, years: number) => Math.max(0, loanBalance(c.P, c.r, c.M, years * 12));
/**
 * A loan graph in years (x) and dollars (y): curves from the closed form (drawn to `upTo` years), an optional
 * dashed half line, a dashed straight chord, and a marker riding the first curve at `marker` months.
 */
export const LoanGraph: React.FC<{
	x: number; y: number; width: number; height: number; xMax?: number; yMax?: number; curves: readonly LoanCurve[];
	half?: {value: number; label: string; o: number}; chord?: number; marker?: {months: number; o: number}; at?: number; out?: number; extra?: (m: PlotMap) => React.ReactNode;
}> = ({x, y, width, height, xMax = 31, yMax = 420000, curves, half, chord = 0, marker, at = -30, out, extra}) => (
	<StudioPlot x={x} y={y} width={width} height={height} window={{x: [0, xMax], y: [0, yMax]}} xTicks={[5, 10, 15, 20, 25, 30]}
		yTicks={[100000, 200000, 300000, 400000].map(v => ({value: v, label: m0(v)}))} xLabel="years" yLabel="balance owed" at={at} out={out}>
		{m => {
			const c0 = curves[0];
			const path = (c: LoanCurve) => {
				const end = Math.min(c.upTo ?? xMax, xMax);
				let d = '';
				for (let i = 0; i <= 240; i++) {const yr = (end * i) / 240, [a, b] = m.p(yr, balAtYears(c, yr)); d += `${i ? 'L' : 'M'}${a.toFixed(1)},${b.toFixed(1)} `;}
				return d;
			};
			const [hx0, hy] = half ? m.p(0, half.value) : [0, 0], [hx1] = m.p(xMax, 0);
			return <g>
				{half && half.o > 0.01 ? <g opacity={half.o}><line x1={hx0} x2={hx1} y1={hy} y2={hy} stroke={INK} strokeWidth={4} strokeDasharray="14 10" /><text x={hx1 - 6} y={hy - 14} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{half.label}</text></g> : null}
				{chord > 0.01 ? (() => {const [a, b] = m.p(0, c0.P), [c, d] = m.p(30, 0); return <line x1={a} y1={b} x2={c} y2={d} stroke={INK_SOFT} strokeWidth={3.5} strokeDasharray="10 9" opacity={chord} />;})() : null}
				<g clipPath={m.clip}>{curves.map((c, i) => (c.upTo ?? 1) > 0 ? <path key={i} d={path(c)} fill="none" stroke={c.color ?? INK} strokeWidth={c.width ?? 7} strokeDasharray={c.dash} strokeLinejoin="round" /> : null)}</g>
				{curves.map((c, i) => c.label ? (() => {const [a, b] = m.p(c.label.atYears, balAtYears(c, c.label.atYears)); return <text key={'l' + i} x={a} y={b + (c.label.dy ?? -22)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, fill: c.label.color ?? c.color ?? INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{c.label.text}</text>;})() : null)}
				{marker && marker.o > 0.01 ? (() => {const [a, b] = m.p(marker.months / 12, Math.max(0, loanBalance(c0.P, c0.r, c0.M, marker.months))); return <g opacity={marker.o}><circle cx={a} cy={b} r={17} fill={CARD} stroke={INK} strokeWidth={6} /><circle cx={a} cy={b} r={6} fill={INK} /></g>;})() : null}
				{extra ? extra(m) : null}
			</g>;
		}}
	</StudioPlot>
);
export {DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, CARD, CARD_SHADOW, FrameSvg, smooth, vis, prog};
