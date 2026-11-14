// Lesson parts for math-a12-f12 (Revision 3: what cash flows define an annuity; saving for a first apartment on a
// wall calendar), on the maths studio kit and f09's loan parts (imported read-only through ../math-a12-f09/parts,
// which re-exports f01 to f07's board parts). Lesson rigs:
// - Calendar: the painted wall calendar with a month label and amber interest / blue deposit stamps on a month-end cell;
// - CashStrip: balance bars per period with blue "+M" arrows in, teal "−M" arrows out and amber "×(1 + r)" arcs;
// - FundBar: the fund's balance bar on a broken scale (so the $400 interest and the $1,050.91 withdrawal show);
// - Statement: the super statement with its coded fields (f13's opening frame).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, MATH_ROLES, SvgPlate, fmtMoney, loanBalance, plateMap, savingsSchedule, smooth, usePlatePreload, vis} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';

export * from '../math-a12-f09/parts';

export const INTR = MATH_ROLES.interest;
export const OUT = MATH_ROLES.repay;
export const IN = MATH_ROLES.deposit;
export const ANSR = MATH_ROLES.answer;
export const GREY = '#5f574c';
export const c2 = (v: number) => fmtMoney(v, 2);

// ---------- the numbers (design "Numbers to verify") ----------
export const SAVE = savingsSchedule(0, 0.005, 200, 60);
export const FUND = {P: 100000, r: 0.004, M: 1050.91} as const;
export const fundRows = (() => {const out: {k: number; open: number; interest: number; pay: number; close: number}[] = []; let b = FUND.P; for (let k = 1; k <= 130 && b > 1e-9; k++) {const i = b * FUND.r, pay = Math.min(FUND.M, b + i); out.push({k, open: b, interest: i, pay, close: b + i - pay}); b = b + i - pay;} return out;})();
/** Fund balance after k withdrawals (closed form, fractional k drawn smoothly), never below 0. */
export const fundAt = (k: number) => Math.max(0, loanBalance(FUND.P, FUND.r, FUND.M, k));
{
	const near = (a: number, b: number, t = 0.005) => Math.abs(a - b) < t;
	const checks: [string, boolean][] = [
		['savings', near(SAVE[0].closing, 200) && near(SAVE[1].interest, 1) && near(SAVE[1].closing, 401) && near(SAVE[2].interest, 2.005) && near(SAVE[2].closing, 603.005) && SAVE[0].interest === 0],
		['fund', near(fundRows[0].interest, 400) && near(fundRows[0].close, 99349.09) && near(fundRows[1].close, 98695.58) && near(fundRows[59].interest, 227.13) && near(FUND.M - fundRows[59].interest, 823.78) && fundRows.length === 120 && near(fundRows[119].pay, 1050.33)],
		['exact M', near((FUND.P * FUND.r) / (1 - (1 + FUND.r) ** -120), 1050.906, 0.001)],
		['period', near(0.06 / 12, 0.005, 1e-12) && 2 * 12 === 24],
		['A2', near(400 * 1.005 + 400, 802) && near(802 * 1.005 + 400, 1206.01)],
		['handoff', 60 * 200 === 12000],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-f12 numbers: ' + bad.join(', '));
}

// ---------- plates (brief 240 provenance) ----------
export const CAL: PlateSpec = {src: 'assets/maths/ma12-wall-calendar-v1.png', nat: [1122, 1402], box: [183, 214, 940, 1193]};
export const CAL_GRID = [196, 713, 928, 1180] as const;
export const CAL_MONTH = [200, 645, 924, 702] as const;
export const FLAT: PlateSpec = {src: 'assets/maths/ma12-apartment-building-v1.png', nat: [1182, 1330], box: [236, 285, 947, 1063]};
export const SUPER: PlateSpec = {src: 'assets/maths/ma12-super-statement-v1.png', nat: [1070, 1470], box: [214, 321, 857, 1165]};
export const SUPER_ROWS = [[392, 605, 824, 638], [392, 649, 824, 681], [392, 693, 824, 725], [392, 737, 824, 769]] as const;
export const SUPER_HEAD = [359, 486, 853, 540] as const;
export const SUPER_PANEL = [383, 836, 830, 1101] as const;
export const plateW = (p: PlateSpec, h: number) => (h * (p.box[2] - p.box[0])) / (p.box[3] - p.box[1]);

const T = (size: number, fill: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size, fill} as React.CSSProperties);

// ---------- the wall calendar ----------
export type Stamp = {text: string; tone: 'interest' | 'deposit' | 'out'; at: number; dx?: number; dy?: number};
/** The calendar (alpha box top left at x, y; h tall) with a month label, optional day numbers, a ringed month-end cell and stamps. */
export const Calendar: React.FC<{x: number; y: number; h: number; month?: string; days?: boolean; lastCell?: number; ring?: number; stamps?: readonly Stamp[]; stampSize?: number; o?: number}> = ({x, y, h, month, days = false, lastCell = 30, ring = 0, stamps = [], stampSize = 34, o = 1}) => {
	usePlatePreload([CAL.src]);
	const f = useCurrentFrame();
	if (o <= 0.001) return null;
	const w = plateW(CAL, h), m = plateMap(CAL, x, y, w);
	const [gx0, gy0] = m.at(CAL_GRID[0], CAL_GRID[1]), [gx1, gy1] = m.at(CAL_GRID[2], CAL_GRID[3]);
	const cw = (gx1 - gx0) / 7, ch = (gy1 - gy0) / 5;
	const cell = (i: number) => ({x: gx0 + (i % 7) * cw, y: gy0 + Math.floor(i / 7) * ch});
	const [mx0, my0] = m.at(CAL_MONTH[0], CAL_MONTH[1]), [mx1, my1] = m.at(CAL_MONTH[2], CAL_MONTH[3]);
	const lc = cell(lastCell);
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		<FrameSvg>
			<SvgPlate plate={CAL} x={x} y={y} w={w} />
			{month ? <text x={(mx0 + mx1) / 2} y={(my0 + my1) / 2 + Math.max(26, (my1 - my0) * 0.7) * 0.36} textAnchor="middle" style={T(Math.max(26, (my1 - my0) * 0.72), INK)}>{month}</text> : null}
			{days ? Array.from({length: 31}, (_, i) => {const c = cell(i); return <text key={i} x={c.x + 8} y={c.y + 30} style={T(26, i === lastCell ? INK : INK_SOFT)}>{i + 1}</text>;}) : null}
			{ring > 0.01 ? <rect x={lc.x + 3} y={lc.y + 3} width={cw - 6} height={ch - 6} rx={8} fill="none" stroke={IN.stroke} strokeWidth={6} opacity={ring} /> : null}
		</FrameSvg>
		{stamps.map((s, i) => {const so = prog(f, s.at, 10); if (so <= 0.001) return null; const R = s.tone === 'interest' ? INTR : s.tone === 'deposit' ? IN : OUT; const sc = 1.25 - 0.25 * smooth(prog(f, s.at, 10)); return <div key={i} style={{position: 'absolute', left: lc.x + cw / 2 + (s.dx ?? 0), top: lc.y + ch / 2 + (s.dy ?? 0), transform: `translate(-50%, -50%) scale(${sc}) rotate(-6deg)`, opacity: so, background: R.soft, border: `4px solid ${R.stroke}`, borderRadius: 12, padding: '2px 12px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: stampSize, color: R.ink, whiteSpace: 'pre', boxShadow: '0 6px 14px rgba(60,45,20,0.12)'}}>{s.text}</div>;})}
	</div>;
};

// ---------- a strip of periods with money in or out ----------
export type StripTab = {label: string; value?: number; text?: string; unknown?: boolean; at?: number};
/**
 * Tabs centred at x + i·pitch on a baseline; ink balance bars (value × unit, measured from `from`), "?" slots;
 * `arrows` drop a blue "+M" into a bar top (in) or lift a teal "−M" out of it (out); `arcs` are amber "×(1 + r)".
 */
export const CashStrip: React.FC<{x: number; base: number; pitch: number; barW: number; unit: number; from?: number; tabs: readonly StripTab[]; arrows?: readonly {i: number; text: string; dir: 'in' | 'out'; at: number; glow?: number}[]; arcs?: readonly {from: number; to: number; at: number; glow?: number}[]; labelSize?: number; valueSize?: number; o?: number; marks?: number}> = ({x, base, pitch, barW, unit, from = 0, tabs, arrows = [], arcs = [], labelSize = 30, valueSize = 34, o = 1, marks = 0}) => {
	const f = useCurrentFrame();
	if (o <= 0.001) return null;
	const cx = (i: number) => x + i * pitch;
	const top = (i: number) => {const t = tabs[i]; return t.value === undefined || t.unknown ? base - 90 : base - (t.value - from) * unit;};
	return <FrameSvg style={{opacity: o}}>
		<line x1={cx(0) - pitch / 2} x2={cx(tabs.length - 1) + pitch / 2} y1={base} y2={base} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		{marks > 0.01 ? tabs.map((_, i) => <line key={'mk' + i} x1={cx(i) + pitch / 2} x2={cx(i) + pitch / 2} y1={base - 14} y2={base + 14} stroke={IN.stroke} strokeWidth={6} opacity={marks} />) : null}
		{tabs.map((t, i) => {
			const po = prog(f, t.at ?? -30, 12);
			if (po <= 0.001) return null;
			return <g key={i} opacity={po}>
				<text x={cx(i)} y={base + labelSize + 10} textAnchor="middle" style={T(labelSize, INK)}>{t.label}</text>
				{t.unknown ? <g><rect x={cx(i) - barW / 2} y={base - 90} width={barW} height={82} rx={12} fill={CARD} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 8" /><text x={cx(i)} y={base - 32} textAnchor="middle" style={T(46, INK_SOFT)}>?</text></g>
					: t.value !== undefined ? <g><rect x={cx(i) - barW / 2} y={top(i)} width={barW} height={base - top(i)} rx={6} fill="#ebe4d6" stroke={INK} strokeWidth={4} />
						{t.text ? <text x={cx(i)} y={top(i) - 12} textAnchor="middle" style={T(valueSize, INK)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{t.text}</text> : null}</g> : null}
			</g>;
		})}
		{arcs.map((a, i) => {const x0 = cx(a.from) + barW / 2 - 6, x1 = cx(a.to) - barW / 2 + 6, y0 = Math.min(top(a.from), top(a.to)) - 64; return <g key={'a' + i}>
			<DrawPath d={`M${x0},${y0 + 12} Q${(x0 + x1) / 2},${y0 - 34} ${x1},${y0 + 12}`} at={a.at} dur={12} color={INTR.stroke} width={4 + 4 * (a.glow ?? 0)} />
			<text x={(x0 + x1) / 2} y={y0 - 24} textAnchor="middle" opacity={prog(f, a.at + 6, 10)} style={T(28, INTR.ink, true)} stroke={CARD} strokeWidth={6} paintOrder="stroke">×(1 + r)</text>
		</g>;})}
		{arrows.map((a, i) => {const ao = prog(f, a.at, 10); if (ao <= 0.01) return null; const R = a.dir === 'in' ? IN : OUT, xx = cx(a.i) + barW / 2 + 16, ty = top(a.i), g = a.glow ?? 0; const y0 = a.dir === 'in' ? ty - 70 : ty - 10, y1 = a.dir === 'in' ? ty - 8 : ty - 72; return <g key={'r' + i} opacity={ao}>
			<line x1={xx} x2={xx} y1={y0} y2={y1} stroke={R.stroke} strokeWidth={6 + 4 * g} strokeLinecap="round" />
			<path d={`M${xx - 12},${y1 + (a.dir === 'in' ? -14 : 14)} L${xx},${y1} L${xx + 12},${y1 + (a.dir === 'in' ? -14 : 14)}`} fill="none" stroke={R.stroke} strokeWidth={6 + 4 * g} strokeLinecap="round" strokeLinejoin="round" />
			<text x={xx + 10} y={y0 + (a.dir === 'in' ? -8 : 40)} textAnchor="middle" style={T(28, R.ink)} stroke={CARD} strokeWidth={6} paintOrder="stroke">{a.text}</text>
		</g>;})}
	</FrameSvg>;
};

// ---------- the fund on a broken scale ----------
/** The fund's balance bar from `lo` to `hi` dollars (broken at the bottom): an amber interest cap, then a teal withdrawal lifts out. */
export const FundBar: React.FC<{x: number; y: number; w: number; h: number; lo: number; hi: number; bal: number; cap: number; out: number; capText?: string; outText?: string}> = ({x, y, w, h, lo, hi, bal, cap, out, capText, outText}) => {
	const Y = (v: number) => y + h - ((v - lo) / (hi - lo)) * h;
	const iw = 400 * cap, top = bal + iw, gone = FUND.M * out;
	return <FrameSvg>
		<path d={`M${x - 20},${y + h} h${w + 40} M${x - 10},${y + h + 22} l20,-10 l20,10 l20,-10`} stroke={INK} strokeWidth={4} fill="none" />
		{[lo + 1000, lo + 2000, lo + 3000, hi].filter(v => v <= hi).map(v => <g key={v}><line x1={x - 18} x2={x - 6} y1={Y(v)} y2={Y(v)} stroke={INK} strokeWidth={3} /><text x={x - 24} y={Y(v) + 10} textAnchor="end" style={T(28, INK)}>{fmtMoney(v, 0)}</text></g>)}
		<rect x={x} y={Y(Math.min(bal, top - gone))} width={w} height={y + h - Y(Math.min(bal, top - gone))} fill="#ebe4d6" stroke={INK} strokeWidth={4} />
		{cap > 0.01 ? <rect x={x} y={Y(top)} width={w} height={Y(bal) - Y(top)} fill={INTR.soft} stroke={INTR.stroke} strokeWidth={4} opacity={1 - out} /> : null}
		{cap > 0.6 && out < 0.05 && capText ? <text x={x + w + 16} y={(Y(top) + Y(bal)) / 2 + 12} style={T(36, INTR.ink, true)}>{capText}</text> : null}
		{out > 0.01 ? <g opacity={1 - Math.max(0, out - 0.7) / 0.3}><rect x={x + out * 60} y={Y(top) - out * 90} width={w} height={Y(top - FUND.M) - Y(top)} fill={OUT.soft} stroke={OUT.stroke} strokeWidth={4} />
			{outText ? <text x={x + w + 16 + out * 60} y={Y(top) - out * 90 + (Y(top - FUND.M) - Y(top)) / 2 + 12} style={T(38, OUT.ink, true)}>{outText}</text> : null}</g> : null}
	</FrameSvg>;
};

// ---------- the super statement (f13's opening frame) ----------
export const Statement: React.FC<{x: number; y: number; h: number; head?: string; rows?: readonly ({text: React.ReactNode; at?: number; color?: string} | null)[]; panel?: readonly {text: React.ReactNode; at?: number; color?: string}[]; o?: number}> = ({x, y, h, head, rows = [], panel = [], o = 1}) => {
	usePlatePreload([SUPER.src]);
	const f = useCurrentFrame();
	if (o <= 0.001) return null;
	const w = plateW(SUPER, h), m = plateMap(SUPER, x, y, w);
	const box = (r: readonly number[]) => {const [a, b] = m.at(r[0], r[1]), [c, d] = m.at(r[2], r[3]); return {x: a, y: b, w: c - a, h: d - b};};
	const hd = box(SUPER_HEAD), pn = box(SUPER_PANEL);
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		<FrameSvg><SvgPlate plate={SUPER} x={x} y={y} w={w} /></FrameSvg>
		{head ? <div style={{position: 'absolute', left: hd.x + 10, top: hd.y, height: hd.h, display: 'flex', alignItems: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, color: CARD}}>{head}</div> : null}
		{rows.map((r, i) => {if (!r) return null; const b = box(SUPER_ROWS[i]); return <div key={i} style={{position: 'absolute', left: b.x, top: b.y + b.h - 40, opacity: vis(f, r.at ?? -30), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, color: r.color ?? INK, whiteSpace: 'pre'}}>{r.text}</div>;})}
		<div style={{position: 'absolute', left: pn.x + 16, top: pn.y + 10, width: pn.w - 32, display: 'flex', flexDirection: 'column', gap: 10}}>
			{panel.map((p, i) => <div key={i} style={{opacity: vis(f, p.at ?? -30), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, lineHeight: 1.2, color: p.color ?? INK}}>{p.text}</div>)}
		</div>
	</div>;
};
export {CARD_SHADOW, DrawPath, SvgPlate, smooth, plateMap};
