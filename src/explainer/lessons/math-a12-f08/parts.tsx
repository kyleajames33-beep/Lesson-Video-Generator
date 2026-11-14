// Lesson parts for math-a12-f08 (Revision 3: geometric growth and decay models; a growing country town), on the
// maths studio kit and the f01 to f07 board parts (imported read-only through ../math-a12-f07/parts). Lesson rigs:
// - TabStrip: period tabs on a baseline with value bars, "?" slots, numbered "×r" arcs and labels (the town, the
//   oil well, the ticket and the mine strips, the loan);
// - PctBar: a 100% bar that gains or loses a block (a fixed percentage as a ratio);
// - TotalsColumns: running totals S₁, S₂, … as teal columns under a dashed limit;
// The handoff draws f09's own LoanStrip (imported read-only), so f08's final frame is f09's opening frame exactly.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, FrameSvg, SvgPlate, smooth, vis} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';
import {AMBER, AMBER_SOFT, AMBER_STROKE, BLUE, BLUE_SOFT, POS, RED, TEAL, TEAL_SOFT} from '../math-a12-f07/parts';

export * from '../math-a12-f07/parts';

// ---------- the numbers (design "Numbers to verify") ----------
export const town = (t: number) => 20000 * 1.05 ** t;
export const chain = (t: number) => 500 * 3 ** t;
export const trailer = (n: number) => 30000 * 0.85 ** n;
export const straight = (n: number) => 30000 - 4500 * n;
export const oilS = (n: number) => (50000 * (1 - 0.9 ** n)) / 0.1;
export const ticket = (t: number) => 120 * 1.04 ** t;
export const mineS = (n: number) => (80000 * (1 - 0.95 ** n)) / 0.05;
{
	const near = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
	const checks: [string, boolean][] = [
		['town', Math.round(town(6)) === 26802 && Math.round(town(5)) === 25526 && near(town(1), 21000) && [21000, 22050, 23153, 24310, 25526, 26802].every((v, i) => Math.round(town(i + 1)) === v)],
		['houses', [1, 2, 3, 4, 5, 6].every(k => Math.floor((town(k) - 20000) / 1000) === k)],
		['ratios', near(1 + 5 / 100, 1.05) && near(1 - 20 / 100, 0.8) && near(1 - 0.15, 0.85) && near(1 + 0.04, 1.04) && near(1 - 0.05, 0.95) && near(1 - 0.1, 0.9)],
		['chain', chain(5) === 121500 && chain(6) === 364500 && chain(7) === 1093500 && Math.abs(Math.log(2000) / Math.log(3) - 6.92) < 0.005 && 1000000 / 500 === 2000],
		['trailer', Math.round(trailer(5)) === 13311 && Math.round(trailer(6)) === 11314 && Math.round(trailer(7)) === 9617 && Math.abs(Math.log(1 / 3) / Math.log(0.85) - 6.76) < 0.005 && Math.log10(0.85) < 0 && Math.round(trailer(12)) === 4267],
		['straight', near(30000 / 4500, 20 / 3) && near(4500 * 0.85, 3825) && near(3825 * 0.85, 3251.25) && near(trailer(0) - trailer(1), 4500) && near(trailer(1) - trailer(2), 3825)],
		['oil', near(0.9 ** 10, 0.3486784401, 1e-10) && Math.abs(oilS(10) - 325660.78) < 0.01 && near(50000 / 0.1, 500000) && near(oilS(2), 95000) && near(oilS(3), 135500) && near(oilS(4), 171950)],
		['A1', Math.abs(ticket(5) - 145.998) < 0.001 && ticket(5).toFixed(2) === '146.00' && ticket(4).toFixed(2) === '140.38'],
		['A2', near(80000 / (1 - 0.95), 1600000, 1e-3) && Math.round(80000 / (1 - 0.05)) === 84211 && mineS(200) < 1600000],
		['loan', near(30000 * 1.006, 30180) && near(0.072 / 12, 0.006)],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-f08 numbers: ' + bad.join(', '));
}
/** Whole numbers grouped by thin spaces (counts: 26 802); money keeps en-AU commas ($30,000). */
export const sp = (v: number) => Math.round(v).toLocaleString('en-AU').replace(/,/g, ' ');
export const money = (v: number, digits = 0) => '$' + v.toLocaleString('en-AU', {minimumFractionDigits: digits, maximumFractionDigits: digits});

// ---------- plates (alpha > 32 boxes from the brief 240 provenance) ----------
export const TRAILER: PlateSpec = {src: 'assets/maths/ma12-camper-trailer-v1.png', nat: [1671, 941], box: [299, 226, 1346, 735]};
export const TICKET: PlateSpec = {src: 'assets/maths/ma12-concert-ticket-v1.png', nat: [1774, 887], box: [376, 208, 1413, 690]};
export const PHONE: PlateSpec = {src: 'assets/maths/ma12-phone-v1.png', nat: [971, 1657], box: [138, 148, 830, 1524]};
/** The phone's blank screen (file px, brief 235 manifest). */
export const PHONE_SCREEN = [175, 239, 795, 1429] as const;
/** House bases on the town plate's empty land (file px; the land is [1270, 551, 1705, 652]): back row, then front. */
export const HOUSE_SLOTS: readonly (readonly [number, number])[] = [[1330, 596], [1460, 596], [1590, 596], [1395, 646], [1525, 646], [1655, 646]];

const T = (size: number, fill: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size, fill} as React.CSSProperties);

// ---------- period tabs with bars, "?" slots and numbered arcs ----------
export type Tab = {label: string; value?: number; text?: string; at?: number; unknown?: boolean; faint?: boolean; tone?: 'blue' | 'teal' | 'ink'};
export type TabArc = {from: number; to: number; label: string; at: number; num?: string; numAt?: number; red?: boolean};
/**
 * Tabs centred at x + i·pitch on a baseline: a bar (value × unit px) with its text above, or a dashed "?" slot;
 * labels under the line. Arcs run bar top to bar top with the label above; `num` puts a grey step number on the arc.
 */
export const TabStrip: React.FC<{x: number; base: number; pitch: number; barW: number; unit: number; tabs: readonly Tab[]; arcs?: readonly TabArc[]; labelSize?: number; valueSize?: number; arcSize?: number; lineEnd?: number; o?: number}> = ({x, base, pitch, barW, unit, tabs, arcs = [], labelSize = 32, valueSize = 40, arcSize = 40, lineEnd, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.001) return null;
	const cx = (i: number) => x + i * pitch;
	const hOf = (i: number) => {const t = tabs[i]; return t.value === undefined || t.unknown ? 92 : t.value * unit;};
	const top = (i: number) => base - hOf(i);
	return <FrameSvg style={{opacity: o}}>
		<line x1={cx(0) - pitch / 2} x2={lineEnd ?? cx(tabs.length - 1) + pitch / 2} y1={base} y2={base} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		{tabs.map((t, i) => {
			const po = prog(f, t.at ?? -30, 12);
			if (po <= 0.001) return null;
			const col = t.tone === 'teal' ? [TEAL, TEAL_SOFT] : t.tone === 'ink' ? [INK_SOFT, '#ece6da'] : [BLUE, BLUE_SOFT];
			const fo = t.faint ? 0.5 : 1;
			return <g key={i} opacity={po}>
				<text x={cx(i)} y={base + labelSize + 12} textAnchor="middle" opacity={fo} style={T(labelSize, INK)}>{t.label}</text>
				{t.unknown ? <g opacity={fo}><rect x={cx(i) - barW / 2} y={base - 92} width={barW} height={84} rx={14} fill={CARD} stroke={col[0]} strokeWidth={4} strokeDasharray="10 8" /><text x={cx(i)} y={base - 32} textAnchor="middle" style={T(50, col[0])}>?</text></g>
					: t.value !== undefined ? (() => {const h = t.value * unit * smooth(prog(f, t.at ?? -30, 16)); return <g>
						<rect x={cx(i) - barW / 2} y={base - h} width={barW} height={h} rx={8} fill={col[1]} stroke={col[0]} strokeWidth={4} />
						{t.text ? <text x={cx(i)} y={base - h - 14} textAnchor="middle" style={T(valueSize, col[0])} stroke={CARD} strokeWidth={7} paintOrder="stroke">{t.text}</text> : null}
					</g>;})() : null}
			</g>;
		})}
		{arcs.map((a, i) => {
			const x0 = cx(a.from), x1 = cx(a.to), y0 = top(a.from) - (tabs[a.from].text ? 58 : 16), y1 = top(a.to) - (tabs[a.to].text && !tabs[a.to].unknown ? 58 : 16);
			const cy = Math.min(y0, y1) - 92, mid = (x0 + x1) / 2, apex = 0.25 * y0 + 0.5 * cy + 0.25 * y1;
			const stroke = a.red ? RED : AMBER_STROKE, ink = a.red ? RED : AMBER;
			return <g key={'a' + i}>
				<DrawPath d={`M${x0 + 14},${y0} Q${mid},${cy} ${x1 - 14},${y1}`} at={a.at} dur={14} color={stroke} width={5} />
				<DrawPath d={`M${x1 - 32},${y1 - 10} L${x1 - 14},${y1} L${x1 - 30},${y1 + 10}`} at={a.at + 12} dur={5} color={stroke} width={5} />
				{a.num ? <g opacity={prog(f, a.numAt ?? a.at + 6, 10)}><circle cx={mid} cy={apex} r={19} fill={CARD} stroke={POS} strokeWidth={3.5} /><text x={mid} y={apex + 10} textAnchor="middle" style={T(28, POS)}>{a.num}</text></g> : null}
				<text x={mid} y={apex - (a.num ? 30 : 16)} textAnchor="middle" opacity={prog(f, a.at + 8, 10)} style={T(arcSize, ink, true)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{a.label}</text>
			</g>;
		})}
	</FrameSvg>;
};
/** Bar top (frame y) of tab i on a TabStrip, for placing marks. */
export const tabTop = (base: number, unit: number, v?: number) => (v === undefined ? base - 92 : base - v * unit);

// ---------- a 100% bar that gains or loses a block ----------
/**
 * A blue 100% bar (w px for 100%) with a block of `pct` %: added at the end in amber (`gain`), or cut from the end
 * and slid away as a grey outline (loss). `move` (0..1) runs the change.
 */
export const PctBar: React.FC<{x: number; y: number; w: number; h?: number; pct: number; gain: boolean; move: number; at?: number; out?: number; labels?: {keep: string; block: string}}> = ({x, y, w, h = 86, pct, gain, move, at = -30, out, labels}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const bw = (w * pct) / 100, u = smooth(move);
	const keepW = gain ? w : w - bw;
	return <FrameSvg style={{opacity: o}}>
		<rect x={x} y={y} width={keepW} height={h} rx={10} fill={BLUE_SOFT} stroke={BLUE} strokeWidth={4} />
		{gain ? <g opacity={u}><rect x={x + w + (1 - u) * 60} y={y} width={bw} height={h} rx={8} fill={AMBER_SOFT} stroke={AMBER_STROKE} strokeWidth={4} /></g>
			: <g><rect x={x + keepW + u * 70} y={y + u * 26} width={bw} height={h} rx={8} fill={u > 0.3 ? 'none' : BLUE_SOFT} stroke={u > 0.3 ? INK_SOFT : BLUE} strokeWidth={4} strokeDasharray={u > 0.3 ? '10 8' : undefined} /></g>}
		{labels ? <>
			<text x={x + keepW / 2} y={y + h / 2 + 15} textAnchor="middle" style={T(44, BLUE)}>{labels.keep}</text>
			<text x={gain ? x + w + bw / 2 + (1 - u) * 60 : x + keepW + bw / 2 + u * 70} y={gain ? y - 18 : y + h + u * 26 + 44} textAnchor="middle" opacity={u} style={T(40, gain ? AMBER : INK_SOFT)}>{labels.block}</text>
		</> : null}
	</FrameSvg>;
};

// ---------- running totals under a dashed limit ----------
/** Teal columns for S₁ … S_count (count may be fractional: the newest grows), a dashed limit line and its label. */
export const TotalsColumns: React.FC<{x: number; base: number; colW: number; gap: number; unit: number; total: (n: number) => number; count: number; max: number; limit?: {v: number; label: string; o: number}; o?: number; xLabels?: readonly number[]; labelSize?: number}> = ({x, base, colW, gap, unit, total, count, max, limit, o = 1, xLabels = [], labelSize = 30}) => {
	if (o <= 0.001) return null;
	const cx = (j: number) => x + j * (colW + gap);
	const full = Math.floor(count), part = count - full;
	return <FrameSvg style={{opacity: o}}>
		<line x1={x - 16} x2={cx(max - 1) + colW + 16} y1={base} y2={base} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		{Array.from({length: Math.min(max, full + (part > 0 ? 1 : 0))}, (_, j) => {const h = total(j + 1) * unit * (j < full ? 1 : smooth(part)); return <rect key={j} x={cx(j)} y={base - h} width={colW} height={h} rx={4} fill={TEAL_SOFT} stroke={TEAL} strokeWidth={3} />;})}
		{xLabels.map(n => <text key={n} x={cx(n - 1) + colW / 2} y={base + labelSize + 10} textAnchor="middle" style={T(labelSize, INK)}>{n}</text>)}
		{limit && limit.o > 0.01 ? <g opacity={limit.o}><line x1={x - 16} x2={cx(max - 1) + colW + 16} y1={base - limit.v * unit} y2={base - limit.v * unit} stroke={INK} strokeWidth={4} strokeDasharray="14 10" />
			<text x={x - 4} y={base - limit.v * unit - 16} style={T(34, INK)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{limit.label}</text></g> : null}
	</FrameSvg>;
};

export {AMBER, BLUE, POS, RED, TEAL};
