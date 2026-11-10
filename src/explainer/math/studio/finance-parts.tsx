// Kit pass 2B, finance set (root decisions 47 and 50; f09 to f15, g03): the loan balance bar (ghost and deposit
// modes), coded fields on a plate, a coded app on a plate's screen (explorer and goal modes), a target dial, the
// deposit calendar, the deposit tower, the goal meter and a loan balance graph with a P dial. Every amount comes
// from money.ts. Roles: balance ink, interest amber, repayments and withdrawals teal, deposits blue, start violet,
// goals dashed ink; red and green only for slips and answers.
import React, {useId} from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, PlateSpec, SvgPlate, vis} from './primitives';
import {FIN_GOAL_DASH, MATH_ROLES, RoleKey} from './roles';
import {LiveReadoutBoard, ParameterSlider, ReadoutRow} from './readouts';
import {PlotTick, StudioPlot, TXT, fmtMoney} from './plot-core';
import {plateMap, usePlatePreload} from './rig';
import {loanBalance, loanSchedule, savingsSchedule} from './money';

const B = MATH_ROLES.balance, I = MATH_ROLES.interest, RP = MATH_ROLES.repay, D = MATH_ROLES.deposit;

// ---------- LoanBalanceBar ----------
export type LoanBarState = {month: number; phase: number; balance: number; interest: number; payment: number; ghost: number; done: boolean};
/** The bar's state at month progress t (month k + phase): interest goes on in the first half of a month, the payment in the second. */
export const loanBarState = (P: number, r: number, M: number, t: number, mode: 'loan' | 'deposit' = 'loan'): LoanBarState => {
	const months = Math.max(0, Math.floor(t)), phase = t - months;
	if (mode === 'deposit') {
		const rows = savingsSchedule(P, r, M, months + 1);
		const open = months ? rows[months - 1].closing : P, row = rows[months];
		return {month: months, phase, balance: open, interest: row.interest, payment: row.deposit, ghost: P + M * months, done: false};
	}
	const rows = loanSchedule(P, r, M, months + 1);
	if (months >= rows.length) return {month: rows.length, phase: 0, balance: 0, interest: 0, payment: 0, ghost: Math.max(0, P - M * months), done: true};
	const row = rows[months];
	return {month: months, phase, balance: row.opening, interest: row.interest, payment: row.repayment, ghost: Math.max(0, P - M * months), done: false};
};
/**
 * A tall ink balance bar, month by month: an amber interest cap grows on top ("× (1 + r)"), then a teal repayment
 * bite drops off (loan) or a blue deposit block lands (deposit mode). `t` is months elapsed, fractional (drive it
 * from frames). `ghost` adds a dashed interest-free bar beside it (it empties at P ÷ M). Readout rows from the
 * same state.
 */
export const LoanBalanceBar: React.FC<{
	x: number; y: number; width?: number; height?: number; max: number; P: number; r: number; M: number; t: number; mode?: 'loan' | 'deposit';
	ghost?: {label?: string; at?: number}; label?: string; capText?: string; biteText?: string; readout?: {x: number; y: number; width?: number; rows?: (s: LoanBarState) => ReadoutRow[]};
	at?: number; out?: number;
}> = ({x, y, width = 180, height = 760, max, P, r, M, t, mode = 'loan', ghost, label, capText, biteText, readout, at = 0, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	const st = loanBarState(P, r, M, t, mode);
	if (o <= 0.001) return null;
	const sc = height / max, base = y + height;
	const capU = Math.min(1, st.phase / 0.45), payU = Math.max(0, (st.phase - 0.5) / 0.45);
	const balH = st.balance * sc, capH = st.interest * sc * capU, payH = st.payment * sc;
	const gx = x + width + 190, go = ghost ? vis(f, ghost.at ?? at) : 0;
	return <>
		<FrameSvg style={{opacity: o}}>
			<line x1={x - 30} x2={x + width + (ghost ? width + 220 : 30)} y1={base} y2={base} stroke={INK} strokeWidth={4} />
			<rect x={x} y={base - balH} width={width} height={balH} fill={B.stroke} />
			{!st.done && capH > 0.5 ? <rect x={x} y={base - balH - capH} width={width} height={capH} fill={I.stroke} /> : null}
			{!st.done && capU > 0.6 && payU < 0.1 ? <text x={x + width + 14} y={base - balH - capH / 2 + 12} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, fill: I.ink}}>{capText ?? `× ${(1 + r).toFixed(r < 0.01 ? 3 : 2)}`}</text> : null}
			{!st.done && mode === 'loan' && payU > 0 ? (() => {
				const top = base - balH - capH, yb = top + payU * 80;
				return <g opacity={1 - Math.max(0, payU - 0.6) / 0.4}>
					<rect x={x + payU * 40} y={yb} width={width} height={payH} fill={RP.stroke} stroke={CARD} strokeWidth={3} />
					<text x={x + width + 14 + payU * 40} y={yb + payH / 2 + 14} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: RP.ink}}>{biteText ?? `−${fmtMoney(st.payment, st.payment % 1 ? 2 : 0)}`}</text>
				</g>;
			})() : null}
			{!st.done && mode === 'deposit' && payU > 0 ? (() => {
				const top = base - balH - capH, h = payH, yb = top - h - (1 - payU) * 120;
				return <g opacity={Math.min(1, payU * 3)}><rect x={x} y={yb} width={width} height={h} fill={D.stroke} stroke={CARD} strokeWidth={3} />
					<text x={x + width + 14} y={yb + h / 2 + 14} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: D.ink}}>{biteText ?? `+${fmtMoney(M)}`}</text></g>;
			})() : null}
			{ghost ? <g opacity={go}><rect x={gx} y={base - st.ghost * sc} width={width} height={st.ghost * sc} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="12 8" />
				<text x={gx + width / 2} y={base + 44} textAnchor="middle" style={TXT(28, INK_SOFT, 700)}>{ghost.label ?? 'no interest'}</text></g> : null}
			{label ? <text x={x + width / 2} y={base + 44} textAnchor="middle" style={TXT(30, INK, 800)}>{label}</text> : null}
			{st.done ? <text x={x + width / 2} y={base - 20} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, fill: MATH_ROLES.answer.ink}}>paid off</text> : null}
		</FrameSvg>
		{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 500} at={at} out={out} inline rows={readout.rows ? readout.rows(st) : [
			{label: 'month', value: st.month + (st.phase >= 0.5 && !st.done ? 1 : 0), digits: 0},
			{label: 'interest added', value: st.interest * capU, format: v => fmtMoney(v, 2), role: 'interest'},
			{label: mode === 'loan' ? 'repayment' : 'deposit', value: payU > 0 ? st.payment : 0, format: v => fmtMoney(v, 2), role: mode === 'loan' ? 'repay' : 'deposit'},
			{label: mode === 'loan' ? 'balance owing' : 'balance', value: st.done ? 0 : st.balance + st.interest * capU + (payU >= 1 ? (mode === 'loan' ? -st.payment : st.payment) : 0), format: v => fmtMoney(v, 2), role: 'balance'},
		]} /> : null}
	</>;
};

// ---------- PlateFields ----------
/** Coded text written into a plate's blank areas (a statement's lines, a swing tag): each field is a file-pixel rectangle. */
export const PlateFields: React.FC<{
	plate: PlateSpec; x: number; y: number; w: number; drawPlate?: boolean;
	fields: readonly {rect: readonly [number, number, number, number]; label?: string; value: React.ReactNode; at?: number; role?: RoleKey; align?: 'left' | 'right' | 'center'; size?: number; question?: boolean}[];
	/** Text on a dark screen (a laptop or phone): light ink, and role colours lifted to their pale tints. */
	dark?: boolean; at?: number; out?: number;
}> = ({plate, x, y, w, drawPlate = true, fields, dark = false, at = 0, out}) => {
	usePlatePreload(drawPlate ? [plate.src] : []);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const m = plateMap(plate, x, y, w);
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		{drawPlate ? <FrameSvg><SvgPlate plate={plate} x={x} y={y} w={w} /></FrameSvg> : null}
		{fields.map((fd, i) => {
			const [a0, b0] = m.at(fd.rect[0], fd.rect[1]), [a1, b1] = m.at(fd.rect[2], fd.rect[3]);
			const hh = b1 - b0, size = Math.max(26, fd.size ?? Math.min(52, hh * 0.62));
			const fo = vis(f, fd.at ?? at, undefined, 12), base = dark ? '#f2efe6' : INK, c = fd.role ? (dark ? MATH_ROLES[fd.role].soft : MATH_ROLES[fd.role].ink) : base, qc = dark ? '#c9c2b4' : INK_SOFT;
			return <div key={i} style={{position: 'absolute', left: a0, top: b0, width: a1 - a0, height: hh, opacity: fo, display: 'flex', alignItems: 'center', justifyContent: fd.align === 'right' ? 'flex-end' : fd.align === 'center' ? 'center' : fd.label ? 'space-between' : 'flex-start', gap: 12, whiteSpace: 'pre', overflow: 'visible'}}>
				{fd.label ? <span style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: Math.max(26, size * 0.72), color: base}}>{fd.label}</span> : null}
				<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: fd.question ? qc : c, fontVariantNumeric: 'tabular-nums', border: fd.question ? `3px dashed ${qc}` : undefined, borderRadius: 8, padding: fd.question ? '0 10px' : undefined}}>{fd.value}</span>
			</div>;
		})}
	</div>;
};

// ---------- ScreenApp ----------
export type AppControl = {label: string; value: string; frac: number; role?: RoleKey; glow?: boolean; question?: boolean};
export type AppGraph = {fn: (t: number) => number; xMax: number; yMax: number; upTo?: number; ghost?: (t: number) => number; goal?: number; color?: string};
/**
 * A plain, unbranded app drawn on a plate's measured screen rectangle (file pixels): a title, slider controls,
 * big readouts and a mini graph. Explorer mode shows every control live; goal mode highlights the control being
 * solved for with a "?" and draws the dashed goal line. Sizes scale with the screen but never go below 26 px.
 */
export const ScreenApp: React.FC<{
	plate: PlateSpec; x: number; y: number; w: number; screen: readonly [number, number, number, number]; drawPlate?: boolean;
	title?: string; controls: readonly AppControl[]; readouts: readonly {label: string; value: string; role?: RoleKey}[]; graph?: AppGraph; mode?: 'explorer' | 'goal'; at?: number; out?: number;
}> = ({plate, x, y, w, screen, drawPlate = true, title, controls, readouts, graph, mode = 'explorer', at = 0, out}) => {
	usePlatePreload(drawPlate ? [plate.src] : []);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const m = plateMap(plate, x, y, w);
	const [sx0, sy0] = m.at(screen[0], screen[1]), [sx1, sy1] = m.at(screen[2], screen[3]);
	const sw = sx1 - sx0, sh = sy1 - sy0, base = Math.max(26, Math.min(34, sw / 13));
	const gH = graph ? Math.max(90, sh * 0.26) : 0;
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		{drawPlate ? <FrameSvg><SvgPlate plate={plate} x={x} y={y} w={w} /></FrameSvg> : null}
		<div style={{position: 'absolute', left: sx0, top: sy0, width: sw, height: sh, background: '#f7f4ec', borderRadius: Math.min(24, sw * 0.05), overflow: 'hidden', boxSizing: 'border-box', padding: `${base * 0.4}px ${base * 0.5}px`, display: 'flex', flexDirection: 'column', gap: base * 0.22}}>
			{title ? <div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: base, color: INK, borderBottom: `2px solid ${PAPER_DEEP}`, paddingBottom: 2}}>{title}</div> : null}
			{controls.map((c, i) => {
				const R = MATH_ROLES[c.role ?? 'balance'], hl = c.glow || (mode === 'goal' && c.question);
				return <div key={i} style={{background: hl ? R.soft : undefined, borderRadius: 10, padding: '0 6px', boxShadow: hl ? `inset 0 0 0 3px ${R.stroke}` : undefined}}>
					<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontFamily: FONT_DISPLAY, whiteSpace: 'pre'}}>
						<span style={{fontWeight: 700, fontSize: base * 0.85 < 26 ? 26 : base * 0.85, color: R.ink}}>{c.label}</span>
						<span style={{fontWeight: 800, fontSize: base, color: c.question ? INK_SOFT : R.ink, fontVariantNumeric: 'tabular-nums'}}>{c.question ? '?' : c.value}</span>
					</div>
					{!c.question ? <div style={{position: 'relative', height: 12, borderRadius: 6, background: R.soft, margin: '4px 0 6px'}}>
						<div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: `${Math.max(0, Math.min(1, c.frac)) * 100}%`, borderRadius: 6, background: R.stroke}} />
						<div style={{position: 'absolute', left: `calc(${Math.max(0, Math.min(1, c.frac)) * 100}% - 11px)`, top: -6, width: 22, height: 22, borderRadius: 11, background: '#fff', border: `4px solid ${R.stroke}`, boxSizing: 'border-box'}} />
					</div> : null}
				</div>;
			})}
			{readouts.map((r, i) => <div key={'r' + i} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontFamily: FONT_DISPLAY, whiteSpace: 'pre', borderTop: i ? undefined : `2px solid ${PAPER_DEEP}`, paddingTop: i ? 0 : 4}}>
				<span style={{fontWeight: 700, fontSize: Math.max(26, base * 0.85), color: MATH_ROLES[r.role ?? 'balance'].ink}}>{r.label}</span>
				<span style={{fontWeight: 800, fontSize: Math.max(30, base * 1.35), color: MATH_ROLES[r.role ?? 'balance'].ink, fontVariantNumeric: 'tabular-nums'}}>{r.value}</span>
			</div>)}
			{graph ? (() => {
				const gw = sw - base, X = (t: number) => (t / graph.xMax) * gw, Y = (v: number) => gH - (Math.max(0, Math.min(graph.yMax, v)) / graph.yMax) * gH;
				const path = (fn: (t: number) => number, to: number) => Array.from({length: 61}, (_, i) => {const t = (to * i) / 60; return `${i ? 'L' : 'M'}${X(t).toFixed(1)},${Y(fn(t)).toFixed(1)}`;}).join(' ');
				return <svg width={gw} height={gH} style={{overflow: 'visible', marginTop: 'auto'}}>
					<line x1={0} x2={gw} y1={gH} y2={gH} stroke={INK} strokeWidth={3} /><line x1={0} x2={0} y1={0} y2={gH} stroke={INK} strokeWidth={3} />
					{graph.ghost ? <path d={path(graph.ghost, graph.xMax)} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 6" /> : null}
					{graph.goal !== undefined ? <line x1={0} x2={gw} y1={Y(graph.goal)} y2={Y(graph.goal)} stroke={INK} strokeWidth={3} strokeDasharray={FIN_GOAL_DASH} /> : null}
					<path d={path(graph.fn, graph.upTo ?? graph.xMax)} fill="none" stroke={graph.color ?? INK} strokeWidth={5} strokeLinejoin="round" />
				</svg>;
			})() : null}
		</div>
	</div>;
};

// ---------- TargetDial ----------
/** A half-dial gauge from min to max with a target mark and a needle at `value`; the readout under it is 52 px. */
export const TargetDial: React.FC<{cx: number; cy: number; r?: number; min: number; max: number; value: number; target?: number; label?: string; valueText?: (v: number) => string; role?: RoleKey; ticks?: readonly {value: number; label: string}[]; at?: number; out?: number}> = ({cx, cy, r = 200, min, max, value, target, label, valueText, role = 'gradient', ticks = [], at = 0, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const R = MATH_ROLES[role], ang = (v: number) => Math.PI * (1 - (Math.max(min, Math.min(max, v)) - min) / (max - min));
	const pt = (v: number, rr: number) => [cx + rr * Math.cos(ang(v)), cy - rr * Math.sin(ang(v))];
	const [nx, ny] = pt(value, r * 0.82);
	return <FrameSvg style={{opacity: o}}>
		<path d={`M${cx - r},${cy} A${r},${r} 0 0 1 ${cx + r},${cy}`} fill={CARD} stroke={R.stroke} strokeWidth={8} />
		{ticks.map(t => {const [a, b] = pt(t.value, r * 0.88), [c, d] = pt(t.value, r), [lx, ly] = pt(t.value, r + 58); return <g key={t.label}><line x1={a} y1={b} x2={c} y2={d} stroke={INK} strokeWidth={3} /><text x={lx} y={ly + 10} textAnchor="middle" style={TXT(28, INK, 700)}>{t.label}</text></g>;})}
		{target !== undefined ? (() => {const [a, b] = pt(target, r * 0.55), [c, d] = pt(target, r + 6); return <line x1={a} y1={b} x2={c} y2={d} stroke={INK} strokeWidth={5} strokeDasharray="8 6" />;})() : null}
		<line x1={cx} y1={cy} x2={nx} y2={ny} stroke={R.stroke} strokeWidth={9} strokeLinecap="round" />
		<circle cx={cx} cy={cy} r={14} fill={R.stroke} />
		{label ? <text x={cx} y={cy + 46} textAnchor="middle" style={TXT(30, R.ink, 700)}>{label}</text> : null}
		<text x={cx} y={cy + 104} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, fill: R.ink}}>{valueText ? valueText(value) : value.toFixed(2)}</text>
	</FrameSvg>;
};

// ---------- CalendarDeposits ----------
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/**
 * A coded month page (7-column grid) for a saving account: through each month the days fill, then an amber
 * interest stamp and a blue deposit stamp land on the last day, and the page flips to the next month. `t` is
 * months elapsed (fractional). Amounts come from savingsSchedule, so month 1's interest stamp reads "+$0.00".
 */
export const CalendarDeposits: React.FC<{x: number; y: number; w?: number; t: number; r: number; M: number; start?: number; firstMonth?: number; firstWeekday?: number; at?: number; out?: number}> = ({x, y, w = 640, t, r, M, start = 0, firstMonth = 0, firstWeekday = 0, at = 0, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const k = Math.max(0, Math.floor(t)), u = t - k;
	const rows = savingsSchedule(start, r, M, k + 1), row = rows[k];
	const mi = (firstMonth + k) % 12, days = MONTH_DAYS[mi];
	let wd = firstWeekday;
	for (let j = 0; j < k; j++) wd = (wd + MONTH_DAYS[(firstMonth + j) % 12]) % 7;
	const cell = w / 7, lit = Math.floor(Math.min(1, u / 0.5) * days), iU = prog(u * 100, 55, 8), dU = prog(u * 100, 70, 8), flip = Math.max(0, (u - 0.88) / 0.12);
	const lastIdx = wd + days - 1, lr = Math.floor(lastIdx / 7), lc = lastIdx % 7;
	const gridH = cell * 0.8 * 6;
	return <div style={{position: 'absolute', left: x, top: y, width: w, opacity: o * (1 - flip * 0.6), transform: `perspective(1400px) rotateX(${flip * 70}deg)`, transformOrigin: 'top center', background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, overflow: 'hidden'}}>
		<div style={{background: '#5a4a3a', color: '#fff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, padding: '8px 20px', display: 'flex', justifyContent: 'space-between'}}><span>{MONTH_NAMES[mi]}</span><span style={{fontSize: 32}}>{`month ${k + 1}`}</span></div>
		<svg width={w} height={gridH + 10}>
			{Array.from({length: days}, (_, d) => {const i = wd + d, rr = Math.floor(i / 7), cc = i % 7; return <g key={d}>
				<rect x={cc * cell + 4} y={rr * cell * 0.8 + 6} width={cell - 8} height={cell * 0.8 - 8} rx={6} fill={d < lit ? PAPER_DEEP : '#fffdf8'} stroke="rgba(60,45,20,0.15)" strokeWidth={2} />
				<text x={cc * cell + 14} y={rr * cell * 0.8 + 36} style={TXT(26, INK_SOFT, 700)}>{d + 1}</text>
			</g>;})}
			<g transform={`translate(${lc * cell + cell / 2},${lr * cell * 0.8 + cell * 0.4 + 6})`}>
				{iU > 0 ? <g opacity={iU} transform={`rotate(-8) scale(${1 + (1 - iU) * 0.6})`}><rect x={-cell * 1.6} y={-cell * 0.55} width={cell * 1.5} height={cell * 0.5} rx={8} fill={I.soft} stroke={I.stroke} strokeWidth={4} /><text x={-cell * 0.85} y={-cell * 0.18} textAnchor="middle" style={TXT(30, I.ink, 800)}>{`+${fmtMoney(row.interest, 2)}`}</text></g> : null}
				{dU > 0 ? <g opacity={dU} transform={`rotate(6) scale(${1 + (1 - dU) * 0.6})`}><rect x={-cell * 1.6} y={cell * 0.02} width={cell * 1.5} height={cell * 0.5} rx={8} fill={D.soft} stroke={D.stroke} strokeWidth={4} /><text x={-cell * 0.85} y={cell * 0.4} textAnchor="middle" style={TXT(30, D.ink, 800)}>{`+${fmtMoney(row.deposit, row.deposit % 1 ? 2 : 0)}`}</text></g> : null}
			</g>
		</svg>
	</div>;
};

// ---------- DepositTower ----------
/**
 * One blue block per deposit, standing at its month; at every later month end each standing block grows by its own
 * amber layer (× (1 + r)), so older blocks are taller: a falling staircase. `t` is months elapsed (fractional, the
 * growth eases in); `merge` (0..1) first eases the scale from `max` (one block) to `mergeMax` (the whole column),
 * then slides the blocks into one column at the right whose top is the balance.
 */
export const DepositTower: React.FC<{x: number; y: number; width?: number; height?: number; M: number; r: number; t: number; maxMonths: number; max: number; mergeMax?: number; merge?: number; readout?: {x: number; y: number; width?: number}; label?: string; at?: number; out?: number}> = ({x, y, width = 1100, height = 600, M, r, t, maxMonths, max, mergeMax, merge = 0, readout, label, at = 0, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	const n = Math.max(0, Math.min(maxMonths, Math.floor(t))), u = Math.min(1, t - n);
	const val = (j: number) => M * (1 + r) ** (n - j) * (j < n ? 1 + r * u : 1);
	const total = Array.from({length: n}, (_, i) => val(i + 1)).reduce((s, v) => s + v, 0);
	if (o <= 0.001) return null;
	const sm = (v: number) => {const c = Math.max(0, Math.min(1, v)); return c * c * (3 - 2 * c);};
	const e1 = sm(merge * 2), e = sm(merge * 2 - 1);
	const slot = width / (maxMonths + 3), bw = Math.max(4, slot * 0.8), sc = height / (max + ((mergeMax ?? max) - max) * e1), base = y + height;
	const colX = x + width - Math.max(80, slot * 1.6) - 10;
	let stackTop = base;
	return <>
		<FrameSvg style={{opacity: o}}>
			<line x1={x} x2={x + width} y1={base} y2={base} stroke={INK} strokeWidth={4} />
			{Array.from({length: n}, (_, i) => {
				const j = i + 1, v = val(j), hD = M * sc, hI = (v - M) * sc;
				const sx = x + i * slot, sy = base;
				const tx = colX, ty = stackTop;
				stackTop -= v * sc;
				const px = sx + (tx - sx) * e, py = sy + (ty - sy) * e, w2 = bw + (Math.max(80, slot * 1.6) - bw) * e;
				return <g key={j}><rect x={px} y={py - hD} width={w2} height={hD} fill={D.stroke} stroke={CARD} strokeWidth={e > 0.5 ? 1 : 0.5} />
					{hI > 0.2 ? <rect x={px} y={py - hD - hI} width={w2} height={hI} fill={I.stroke} /> : null}</g>;
			})}
			{label ? <text x={x} y={base + 44} style={TXT(30, INK_SOFT, 700)}>{label}</text> : null}
		</FrameSvg>
		{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 460} at={at} out={out} inline rows={[
			{label: 'deposits made', value: n, digits: 0, role: 'deposit'},
			{label: 'put in', value: n * M, format: v => fmtMoney(v, 2), role: 'deposit'},
			{label: 'balance', value: total, format: v => fmtMoney(v, 2), role: 'balance'},
		]} /> : null}
	</>;
};

// ---------- GoalMeter ----------
/**
 * A tall meter filling month by month towards a dashed ink goal line: each month an amber interest sliver (on the
 * balance so far), then a blue deposit block. Deposits stop after `depositMonths` (interest keeps adding). A
 * magnifier can show the last gap ("9 cents short"). `t` is months elapsed (fractional).
 */
export const GoalMeter: React.FC<{
	x: number; y: number; width?: number; height?: number; goal: number; M: number; r: number; t: number; max: number; depositMonths?: number; start?: number;
	magnifier?: {cx: number; cy: number; R: number; at: number; text?: (gap: number) => string}; readout?: {x: number; y: number; width?: number}; goalLabel?: string; at?: number; out?: number;
}> = ({x, y, width = 200, height = 760, goal, M, r, t, max, depositMonths = Infinity, start = 0, magnifier, readout, goalLabel = 'goal', at = 0, out}) => {
	const f = useCurrentFrame();
	const magId = `gm-${useId().replace(/:/g, '')}`;
	const o = vis(f, at, out, 14);
	const n = Math.max(0, Math.floor(t)), u = t - n;
	const rows = savingsSchedule(start, r, k => (k <= depositMonths ? M : 0), n + 1);
	const done = rows.slice(0, n), cur = rows[n];
	const segs: {v: number; kind: 'i' | 'd'}[] = [];
	if (start > 0) segs.push({v: start, kind: 'd'});
	done.forEach(rw => {segs.push({v: rw.interest, kind: 'i'}); if (rw.deposit) segs.push({v: rw.deposit, kind: 'd'});});
	if (cur) {segs.push({v: cur.interest * Math.min(1, u / 0.5), kind: 'i'}); if (cur.deposit && u > 0.5) segs.push({v: cur.deposit * Math.min(1, (u - 0.5) / 0.4), kind: 'd'});}
	const bal = segs.reduce((s, q) => s + q.v, 0), deps = done.filter(rw => rw.deposit > 0).length + (cur && cur.deposit && u >= 0.9 ? 1 : 0);
	if (o <= 0.001) return null;
	const sc = height / max, base = y + height, gy = base - goal * sc;
	let top = base;
	const rects = segs.map((q, i) => {const h = q.v * sc; top -= h; return h > 0.05 ? <rect key={i} x={x} y={top} width={width} height={h} fill={q.kind === 'i' ? I.stroke : D.stroke} stroke={q.kind === 'd' && h > 6 ? CARD : 'none'} strokeWidth={1.5} /> : null;});
	const gap = goal - bal;
	return <>
		<FrameSvg style={{opacity: o}}>
			<rect x={x - 6} y={y} width={width + 12} height={height + 6} rx={14} fill="none" stroke={INK_SOFT} strokeWidth={4} />
			{rects}
			<line x1={x - 40} x2={x + width + 40} y1={gy} y2={gy} stroke={INK} strokeWidth={5} strokeDasharray={FIN_GOAL_DASH} />
			<text x={x + width + 52} y={gy + 12} style={TXT(32, INK, 800)}>{`${goalLabel} ${fmtMoney(goal)}`}</text>
			{magnifier ? (() => {const mo = prog(f, magnifier.at, 14), k = Math.min(400, (magnifier.R * 0.6) / Math.max(0.02, Math.abs(gap) * sc)); return <g opacity={mo}>
				<line x1={x + width} y1={gy} x2={magnifier.cx - magnifier.R * 0.7} y2={magnifier.cy - magnifier.R * 0.7} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 7" />
				<circle cx={magnifier.cx} cy={magnifier.cy} r={magnifier.R} fill={CARD} stroke={INK} strokeWidth={5} />
				<clipPath id={magId}><circle cx={magnifier.cx} cy={magnifier.cy} r={magnifier.R - 3} /></clipPath>
				<g clipPath={`url(#${magId})`}>
					<rect x={magnifier.cx - magnifier.R} y={magnifier.cy + gap * sc * k / 2} width={magnifier.R * 2} height={magnifier.R * 2} fill={D.stroke} />
					<line x1={magnifier.cx - magnifier.R} x2={magnifier.cx + magnifier.R} y1={magnifier.cy - gap * sc * k / 2} y2={magnifier.cy - gap * sc * k / 2} stroke={INK} strokeWidth={5} strokeDasharray={FIN_GOAL_DASH} />
				</g>
				<text x={magnifier.cx} y={magnifier.cy + magnifier.R + 48} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, fill: gap > 0 ? MATH_ROLES.mistake.ink : MATH_ROLES.answer.ink}}>{magnifier.text ? magnifier.text(gap) : gap > 0 ? `${fmtMoney(gap, 2)} short` : 'goal reached'}</text>
			</g>;})() : null}
		</FrameSvg>
		{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 460} at={at} out={out} inline rows={[
			{label: 'deposits', value: deps, digits: 0, role: 'deposit'},
			{label: 'balance', value: bal, format: v => fmtMoney(v, 2), role: 'balance'},
			{label: 'to go', value: Math.max(0, gap), format: v => fmtMoney(v, 2)},
		]} /> : null}
	</>;
};

// ---------- LoanDialGraph (the P dial) ----------
/**
 * A loan balance graph whose principal P is a dial (g03 W1): the balance curve for the current P is drawn to month
 * N; too big a P leaves money owing at N, too small finishes early (the curve hits 0 before N). Readout "balance
 * after N months" from the closed form, and a violet ParameterSlider for P.
 */
export const LoanDialGraph: React.FC<{
	x: number; y: number; width?: number; height?: number; P: number; r: number; M: number; N: number; yMax: number; xTicks?: readonly (number | PlotTick)[]; yTicks?: readonly (number | PlotTick)[];
	slider?: {x: number; y: number; width?: number; min: number; max: number; ticks: {value: number; label: string}[]}; readout?: {x: number; y: number; width?: number}; at?: number; out?: number;
}> = ({x, y, width = 1100, height = 600, P, r, M, N, yMax, xTicks, yTicks, slider, readout, at = 0, out}) => {
	const end = loanBalance(P, r, M, N);
	return <>
		<StudioPlot x={x} y={y} width={width} height={height} window={{x: [0, N * 1.08], y: [0, yMax]}} xTicks={xTicks} yTicks={yTicks} xLabel="months" yLabel="balance owing ($)" at={at} out={out}>
			{m => {
				let d = '', pen = true;
				for (let i = 0; i <= 240; i++) {const k = (N * i) / 240, v = loanBalance(P, r, M, k); if (v < 0 && pen) {const [a, b] = m.p(k, 0); d += `L${a},${b}`; pen = false; break;} const [a, b] = m.p(k, Math.min(yMax * 1.1, v)); d += `${i ? 'L' : 'M'}${a.toFixed(1)},${b.toFixed(1)} `;}
				const [nx, ny] = m.p(N, Math.max(0, end)), [, zy] = m.p(N, 0);
				return <g>
					<line x1={nx} x2={nx} y1={m.box.top} y2={zy} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 7" />
					<g clipPath={m.clip}><path d={d} stroke={B.stroke} strokeWidth={7} fill="none" /></g>
					<circle cx={nx} cy={ny} r={12} fill={Math.abs(end) < 1 ? MATH_ROLES.answer.stroke : end > 0 ? I.stroke : RP.stroke} stroke={CARD} strokeWidth={4} />
				</g>;
			}}
		</StudioPlot>
		{slider ? <ParameterSlider x={slider.x} y={slider.y} width={slider.width ?? 520} symbol="P" role="start" value={P / 1000} min={slider.min / 1000} max={slider.max / 1000} ticks={slider.ticks.map(t => ({value: t.value / 1000, label: t.label}))} at={at} out={out} digits={0} /> : null}
		{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 520} at={at} out={out} rows={[
			{label: 'loan P', value: P, format: v => fmtMoney(v, 0), role: 'start'},
			{label: `balance after ${N} months`, value: end, format: v => fmtMoney(v, 2), role: Math.abs(end) < 1 ? 'answer' : end > 0 ? 'interest' : 'repay'},
		]} /> : null}
	</>;
};
