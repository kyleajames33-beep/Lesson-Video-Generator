// Lesson parts for math-a12-f07 (Revision 3: the limiting sum; a bouncing ball), on the maths studio kit and the f01
// to f06 board parts (imported read-only through ../math-a12-f06/parts). Lesson-local rigs:
// - DotLine: values landing as dots on a number line with a dashed target (terms closing on 0, totals on a sum);
// - RBand: the ratio line from −2 to 2 with the band −1 < r < 1 marked;
// - DistanceBar: distance travelled so far against a dashed total;
// - XLine: a number line for x with an open interval shaded.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, FrameSvg, smooth, vis} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';
import {AMBER, AMBER_SOFT, AMBER_STROKE, BLUE, POS, RED, TEAL, TEAL_SOFT} from '../math-a12-f06/parts';

export * from '../math-a12-f06/parts';

// ---------- the numbers (design "Numbers to verify") ----------
export const gpSum = (a: number, r: number, n: number) => Array.from({length: n}, (_, i) => a * r ** i).reduce((s, v) => s + v, 0);
export const BOUNCES = [64, 32, 16, 8, 4, 2, 1, 0.5];
/** Distance travelled when bounce n has finished (the drop, then each height up and down). */
export const travelled = (n: number) => 128 + 2 * gpSum(64, 0.5, n);
{
	const near = (a: number, b: number, tol = 1e-9) => Math.abs(a - b) < tol;
	const checks: [string, boolean][] = [
		['opening', [64, 96, 112, 120, 124, 126, 127, 127.5].every((v, i) => gpSum(64, 0.5, i + 1) === v && 128 - v === BOUNCES[i]) && gpSum(64, 0.5, 9) === 127.75 && gpSum(64, 0.5, 10) === 127.875],
		['terms', 0.5 ** 10 === 1 / 1024 && Math.abs(1 / 1024 - 0.00098) < 0.00001 && 1 / 1024 < 0.001],
		['split', [1, 5, 9, 14].every(n => near(gpSum(64, 0.5, n), 128 - 128 * 0.5 ** n)) && Math.abs(128 * 0.5 ** 14 - 0.008) < 0.0005],
		['limit', 64 / (1 - 0.5) === 128 && 1 / (1 - 0.5) === 2],
		['journey', [256, 320, 352, 368, 376, 380].every((v, i) => travelled(i + 1) === v) && 128 + 2 * 128 === 384 && 128 + 128 === 256],
		['no limit', [1, 3, 7, 15, 31, 63].every((v, i) => gpSum(1, 2, i + 1) === v) && [1, 0, 1, 0].every((v, i) => gpSum(1, -1, i + 1) === v) && near(1 / (1 - 0.9), 10)],
		['one third', near(4 / 12, 1 / 3) && near(4 / 3 / 4, 1 / 3) && near(12 / (1 - 1 / 3), 18) && near(12 * 1.5, 18) && near(gpSum(12, 1 / 3, 3), 52 / 3) && near(12 / (1 + 1 / 3), 9)],
		['zigzag', [8, 4, 6, 5, 5.5].every((v, i) => gpSum(8, -0.5, i + 1) === v) && near(8 / 1.5, 16 / 3) && Math.abs(16 / 3 - 5.33) < 0.005],
		['decimal', near(0.27 / 0.99, 3 / 11) && near(27 / 99, 3 / 11) && Math.abs(3 / 11 - 0.272727) < 1e-6],
		['A1', near(10 / (1 - 0.75), 40) && 10 / 40 === 0.25 && 1 - 40 / 10 === -3],
		['A2', near(1 / (1 - 2 * 0.25), 2)],
		['town', 20000 * 1.05 === 21000],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-f07 numbers: ' + bad.join(', '));
}
export const TOWN: PlateSpec = {src: 'assets/maths/ma12-country-town-v1.png', nat: [1920, 819], box: [213, 175, 1723, 678]};
const T = (size: number, fill: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size, fill} as React.CSSProperties);

// ---------- dots landing on a number line ----------
/** Dots at `values` on a line from range[0] to range[1], landing at `at[i]`; labels alternate above and below. */
export const DotLine: React.FC<{x: number; y: number; w: number; range: readonly [number, number]; values: readonly number[]; at: readonly number[]; ticks: readonly {v: number; label: string}[];
	target?: {v: number; label: string; at: number}; color?: string; label?: (v: number, i: number) => string | null; o?: number}> = ({x, y, w, range, values, at, ticks, target, color = BLUE, label, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.001) return null;
	const X = (v: number) => x + ((v - range[0]) / (range[1] - range[0])) * w;
	return <FrameSvg style={{opacity: o}}>
		<line x1={x - 12} x2={x + w + 12} y1={y} y2={y} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		{ticks.map(t => <g key={t.label}><line x1={X(t.v)} x2={X(t.v)} y1={y - 12} y2={y + 12} stroke={INK} strokeWidth={3} /><text x={X(t.v)} y={y + 96} textAnchor="middle" style={T(32, INK)}>{t.label}</text></g>)}
		{target ? <g opacity={prog(f, target.at, 12)}><line x1={X(target.v)} x2={X(target.v)} y1={y - 78} y2={y - 16} stroke={INK} strokeWidth={4} strokeDasharray="10 7" /><text x={X(target.v)} y={y - 92} textAnchor="middle" style={T(38, INK)}>{target.label}</text></g> : null}
		{values.map((v, i) => {const p = prog(f, at[i], 14); if (p <= 0.01) return null; const lb = label ? label(v, i) : null; return <g key={i} opacity={p}>
			<circle cx={X(v)} cy={y - (1 - smooth(p)) * 60} r={13} fill={color} stroke={CARD} strokeWidth={4} />
			{lb ? <text x={X(v)} y={y + 54} textAnchor="middle" style={T(32, color)}>{lb}</text> : null}
		</g>;})}
	</FrameSvg>;
};

// ---------- the ratio line with the band −1 < r < 1 ----------
export const RBand: React.FC<{x: number; y: number; w: number; at: number; out?: number; outside?: number; mark?: {r: number; label: string}}> = ({x, y, w, at, out, outside = 0, mark}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const X = (v: number) => x + ((v + 2) / 4) * w;
	return <FrameSvg style={{opacity: o}}>
		<text x={x - 20} y={y + 16} textAnchor="end" style={{...T(60, AMBER, true)}}>r</text>
		<line x1={X(-2)} x2={X(2)} y1={y} y2={y} stroke={AMBER_SOFT} strokeWidth={16} strokeLinecap="round" />
		{outside > 0.01 ? <g opacity={outside}><line x1={X(-2)} x2={X(-1)} y1={y} y2={y} stroke={INK_SOFT} strokeWidth={16} strokeLinecap="round" /><line x1={X(1)} x2={X(2)} y1={y} y2={y} stroke={INK_SOFT} strokeWidth={16} strokeLinecap="round" /></g> : null}
		<line x1={X(-1) + 12} x2={X(1) - 12} y1={y} y2={y} stroke={TEAL} strokeWidth={16} />
		{[-1, 1].map(v => <circle key={v} cx={X(v)} cy={y} r={12} fill={CARD} stroke={TEAL} strokeWidth={5} />)}
		{[-2, -1, 0, 1, 2].map(v => <text key={v} x={X(v)} y={y + 60} textAnchor="middle" style={T(32, INK)}>{String(v).replace('-', '−')}</text>)}
		<text x={X(0)} y={y - 30} textAnchor="middle" style={T(36, TEAL)}>−1 &lt; r &lt; 1</text>
		{mark ? <g><circle cx={X(mark.r)} cy={y} r={20} fill={CARD} stroke={AMBER_STROKE} strokeWidth={7} /><circle cx={X(mark.r)} cy={y} r={7} fill={AMBER_STROKE} /></g> : null}
	</FrameSvg>;
};

// ---------- distance travelled ----------
export const DistanceBar: React.FC<{x: number; y: number; w: number; max: number; value: number; total: number; totalAt: number; at?: number}> = ({x, y, w, max, value, total, totalAt, at = -30}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.001) return null;
	const X = (v: number) => x + (v / max) * w;
	return <FrameSvg style={{opacity: o}}>
		<rect x={x} y={y} width={w} height={44} rx={10} fill={CARD} stroke={INK} strokeWidth={3.5} />
		<rect x={x} y={y} width={Math.max(0, X(Math.min(max, value)) - x)} height={44} rx={10} fill={TEAL_SOFT} stroke={TEAL} strokeWidth={3.5} />
		{[0, 100, 200, 300, 400].map(v => <text key={v} x={X(v)} y={y + 84} textAnchor="middle" style={T(30, INK)}>{v}</text>)}
		<text x={x} y={y - 16} style={T(32, TEAL)}>distance travelled (cm)</text>
		<g opacity={prog(f, totalAt, 12)}><line x1={X(total)} x2={X(total)} y1={y - 26} y2={y + 56} stroke={INK} strokeWidth={4} strokeDasharray="10 7" /><text x={X(total)} y={y - 38} textAnchor="middle" style={T(36, INK)}>{total}</text></g>
	</FrameSvg>;
};

// ---------- a number line for x ----------
export const XLine: React.FC<{x: number; y: number; w: number; shadeAt?: number; from?: number; to?: number; cross?: number}> = ({x, y, w, shadeAt, from = -0.5, to = 0.5}) => {
	const f = useCurrentFrame();
	const X = (v: number) => x + ((v + 1.5) / 3) * w;
	const s = shadeAt === undefined ? 0 : prog(f, shadeAt, 14);
	return <FrameSvg>
		<line x1={x - 12} x2={x + w + 12} y1={y} y2={y} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		{[-1.5, -1, -0.5, 0, 0.5, 1, 1.5].map(v => <g key={v}><line x1={X(v)} x2={X(v)} y1={y - 12} y2={y + 12} stroke={INK} strokeWidth={3} /><text x={X(v)} y={y + 58} textAnchor="middle" style={T(34, INK)}>{v === -0.5 ? '−½' : v === 0.5 ? '½' : v === -1.5 ? '−1½' : v === 1.5 ? '1½' : String(v).replace('-', '−')}</text></g>)}
		<text x={x + w + 30} y={y + 12} style={T(36, POS)}>x</text>
		{s > 0.01 ? <g opacity={s}><line x1={X(from) + 14} x2={X(to) - 14} y1={y} y2={y} stroke={TEAL} strokeWidth={14} />{[from, to].map(v => <circle key={v} cx={X(v)} cy={y} r={13} fill={CARD} stroke={TEAL} strokeWidth={5} />)}</g> : null}
	</FrameSvg>;
};
export {RED};
