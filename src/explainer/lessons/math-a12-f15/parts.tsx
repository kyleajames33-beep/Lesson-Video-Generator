// Lesson parts for math-a12-f15 (Revision 3: annuity problems with their conditions; a holiday fund with a goal), on
// the maths studio kit (its money engine and GoalMeter) and the f09 finance parts (imported read-only through
// ../math-a12-f09/parts). Lesson-local rigs:
// - Suitcase: the painted travel suitcase;
// - GoalPhone: f14's last frame as its design describes it (the phone in goal mode, the suitcase);
// - FrequencyBars: the die chart of s01's opening (one bar at face 4, five "?" outlines).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, INK_SOFT, prog} from '../../kit';
import {CARD, FrameSvg, MATHS_KIT2B_PLATES, MATH_ROLES, SvgPlate, annuityFV, usePlatePreload, vis} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';

export * from '../math-a12-f09/parts';
import {PhoneApp} from '../math-a12-f13/parts';

export const DEP = MATH_ROLES.deposit;
// ---------- the numbers (design "Numbers to verify", from the kit's money engine) ----------
export const FAC24 = annuityFV(1, 0.005, 24);
{
	const c2 = (v: number) => Math.round(v * 100 + 1e-7) / 100;
	const near = (a: number, b: number, t = 0.005) => Math.abs(a - b) < t;
	const checks: [string, boolean][] = [
		['holiday M', c2(6000 / FAC24) === 235.92 && near(FAC24, 25.432, 0.001) && c2(annuityFV(235.92, 0.005, 24)) === 5999.91 && c2(annuityFV(235.93, 0.005, 24)) === 6000.16 && c2(24 * 235.93) === 5662.32],
		['600k', c2(600000 / annuityFV(1, 0.005, 360)) === 597.3 && c2(annuityFV(597.3, 0.005, 360)) === 599996.83 && c2(600000 / 360) === 1666.67],
		['fortnights', c2(annuityFV(450, 0.064 / 26, 650)) === 720885.32 && c2(annuityFV(450, 0.002462, 650)) === 721020.61 && 450 * 650 === 292500],
		['time', near(Math.log(1.15) / Math.log(1.005), 28.02, 0.005) && c2(annuityFV(200, 0.005, 28)) === 5994.9 && c2(annuityFV(200, 0.005, 29)) === 6224.88],
		['stop', c2(annuityFV(250, 0.005, 24)) === 6357.99 && c2(annuityFV(250, 0.005, 24) * 1.005 ** 12) === 6750.14 && c2(annuityFV(250, 0.005, 36)) === 9834.03],
		['A1', c2(30000 / annuityFV(1, 0.011, 24)) === 1099.07 && annuityFV(1099.07, 0.011, 24) < 30000 && annuityFV(1099.08, 0.011, 24) >= 30000 && 30000 / 24 === 1250],
		['A2', c2(annuityFV(2000, 0.04, 10)) === 24012.21 && c2(annuityFV(2000, 0.04, 10) * 1.04 ** 5) === 29214.53 && c2(annuityFV(2000, 0.04, 15)) === 40047.18],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-f15 numbers: ' + bad.join(', '));
}

// ---------- plates ----------
/** Brief 240 (ma12-f15-provenance.json): measured alpha box (alpha > 32). */
export const SUITCASE: PlateSpec = {src: 'assets/maths/ma12-travel-suitcase-v1.png', nat: [1106, 1422], box: [284, 226, 819, 1239]};
export const suitW = (h: number) => (h * (SUITCASE.box[2] - SUITCASE.box[0])) / (SUITCASE.box[3] - SUITCASE.box[1]);
export const Suitcase: React.FC<{x: number; y: number; h: number; at?: number; out?: number}> = ({x, y, h, at = -30, out}) => {
	usePlatePreload([SUITCASE.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	return <FrameSvg style={{opacity: o}}><SvgPlate plate={SUITCASE} x={x} y={y} w={suitW(h)} /></FrameSvg>;
};
export const PH = MATHS_KIT2B_PLATES.phone;
export const phoneW = (h: number) => (h * (PH.box[2] - PH.box[0])) / (PH.box[3] - PH.box[1]);
/** The phone in goal mode: a $6,000 goal in 2 years at 6% p.a. monthly, the deposit a "?", a goal line and a ghost. */
export const GoalPhone: React.FC<{x: number; y: number; h: number; deposit?: string; bare?: boolean}> = ({x, y, h, deposit, bare}) => (
	<PhoneApp x={x} y={y} h={h} bare={bare} title="Holiday goal" rows={[{label: 'Goal', value: '$6,000', role: 'balance'}, {label: 'In', value: '2 years'}, {label: 'Rate (monthly)', value: '6% p.a.', role: 'interest'}, {label: 'Deposit', value: deposit ?? '?', role: 'deposit', question: deposit === undefined}]}
		balance={{label: 'Balance', value: '$6,000.00'}} graph={{fn: t => annuityFV(250, 0.005, t), ghost: t => annuityFV(180, 0.005, t), xMax: 24, yMax: 7000, goal: 6000}} />
);
// ---------- the die chart (s01's opening frame) ----------
export const FrequencyBars: React.FC<{x: number; y: number; w: number; h: number; bar?: number; q?: number; at?: number}> = ({x, y, w, h, bar = 1, q = 1, at = -30}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	const X = (face: number) => x + 90 + (face - 0.5) * ((w - 110) / 6);
	const Y = (c: number) => y + h - (c / 50) * h;
	const T = (s: number, c: string): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: s, fill: c} as React.CSSProperties);
	const bw = ((w - 110) / 6) * 0.62;
	return <FrameSvg style={{opacity: o}}>
		{[10, 20, 30, 40, 50].map(c => <g key={c}><line x1={x + 80} x2={x + w} y1={Y(c)} y2={Y(c)} stroke="#e4dccd" strokeWidth={2} /><text x={x + 66} y={Y(c) + 10} textAnchor="end" style={T(30, INK_SOFT)}>{c}</text></g>)}
		<line x1={x + 80} x2={x + w} y1={Y(0)} y2={Y(0)} stroke={INK} strokeWidth={4} />
		<line x1={x + 80} x2={x + 80} y1={Y(0)} y2={Y(50) - 20} stroke={INK} strokeWidth={4} />
		<text x={x + 80} y={Y(50) - 34} style={T(30, INK)}>count</text>
		<text x={x + w} y={Y(0) + 84} textAnchor="end" style={T(30, INK)}>face</text>
		{[1, 2, 3, 4, 5, 6].map(face => <g key={face}>
			<text x={X(face)} y={Y(0) + 44} textAnchor="middle" style={T(34, INK)}>{face}</text>
			{face === 4 ? <g opacity={bar}><rect x={X(4) - bw / 2} y={Y(38 * bar)} width={bw} height={Y(0) - Y(38 * bar)} fill={MATH_ROLES.a.soft} stroke={MATH_ROLES.a.stroke} strokeWidth={4} /><text x={X(4)} y={Y(38 * bar) - 14} textAnchor="middle" style={T(44, MATH_ROLES.a.ink)}>38</text></g>
				: <g opacity={q}><rect x={X(face) - bw / 2} y={Y(34)} width={bw} height={Y(0) - Y(34)} fill="none" stroke={INK_SOFT} strokeWidth={3.5} strokeDasharray="10 8" /><text x={X(face)} y={Y(17) + 18} textAnchor="middle" style={T(52, INK_SOFT)}>?</text></g>}
		</g>)}
		<rect x={x + w - 230} y={y - 10} width={210} height={58} rx={14} fill={CARD} stroke={INK} strokeWidth={3} />
		<text x={x + w - 125} y={y + 30} textAnchor="middle" style={T(32, INK)}>200 rolls</text>
	</FrameSvg>;
};
export {INK};
