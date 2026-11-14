// Lesson parts for math-a12-f13 (Revision 3: annuity future value as a geometric sum; a super account), on the maths
// studio kit (its money engine and DepositTower) and the f09 finance parts (imported read-only through
// ../math-a12-f09/parts). Lesson-local rigs:
// - SuperSheet: the painted super statement with coded lines on its four measured rules and its lower panel;
// - SaveStrip: f12's last frame as its design describes it (three month bars, then "?" to "after 5 years").
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, FrameSvg, MATHS_KIT2B_ANCHORS, MATHS_KIT2B_PLATES, MATH_ROLES, SvgPlate, annuityFV, plateMap, savingsSchedule, usePlatePreload, vis} from '../../math/studio';
import type {RoleKey} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';

export * from '../math-a12-f09/parts';

export const DEP = MATH_ROLES.deposit;
// ---------- the numbers (design "Numbers to verify", from the kit's money engine) ----------
{
	const c2 = (v: number) => Math.round(v * 100 + 1e-7) / 100;
	const near = (a: number, b: number, t = 0.005) => Math.abs(a - b) < t;
	const S = savingsSchedule(0, 0.005, 200, 60);
	const fv316 = annuityFV(300, 0.004, 316), fv315 = annuityFV(300, 0.004, 315);
	const checks: [string, boolean][] = [
		['FV', c2(annuityFV(200, 0.005, 60)) === 13954.01 && near(S[59].closing, annuityFV(200, 0.005, 60), 1e-6) && c2(annuityFV(200, 0.005, 60) - 12000) === 1954.01],
		['deposits', c2(200 * 1.005 ** 59) === 268.43 && c2(200 * 1.005) === 201 && c2(200 * 1.005 ** 58) === 267.09],
		['n = 3', c2(annuityFV(200, 0.005, 3)) === 603.01 && c2(S[1].closing) === 401 && near(S[2].closing, 603.005, 1e-6)],
		['Problem 1', c2(annuityFV(300, 0.004, 60)) === 20298.05 && c2(annuityFV(300, 0.004, 60) - 18000) === 2298.05],
		['30 years', c2(annuityFV(300, 0.004, 360)) === 240644.24 && fv316 - 300 * 316 > 300 * 316 && fv315 - 300 * 315 < 300 * 315 && c2(fv316) === 189797.88],
		['A1', c2(annuityFV(900, 0.05, 5)) === 4973.07 && c2(annuityFV(900, 0.05, 5) * 1.05) === 5221.72],
		['A2', c2(annuityFV(250, 0.003, 24)) === 6211.63 && c2(annuityFV(250, 0.003, 24) - 6000) === 211.63 && c2(250 * (1.036 ** 2 - 1) / 0.036) === 509],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-f13 numbers: ' + bad.join(', '));
}

// ---------- the super statement ----------
/** Brief 240 (ma12-f13-provenance.json): measured alpha box (alpha > 32), header band, four rules, lower panel. */
export const SUPER: PlateSpec = {src: 'assets/maths/ma12-super-statement-v1.png', nat: [1070, 1470], box: [214, 321, 857, 1165]};
export const SUPER_RULES = [641, 684, 728, 772] as const;
export const SUPER_X = [392, 824] as const;
export const SUPER_HEADER = [359, 486, 853, 540] as const;
export const SUPER_PANEL = [383, 836, 830, 1101] as const;
export const superW = (h: number) => (h * (SUPER.box[2] - SUPER.box[0])) / (SUPER.box[3] - SUPER.box[1]);
export type SheetLine = {text: React.ReactNode; at?: number; color?: string; size?: number; glow?: {from: number; to: number; color: string}};
/** The statement, its alpha box's top left at (x, y), h tall: a header, four lines on the rules and the panel. */
export const SuperSheet: React.FC<{x: number; y: number; h: number; header?: React.ReactNode; lines?: readonly (SheetLine | null)[]; panel?: React.ReactNode; size?: number; at?: number; out?: number}> = ({x, y, h, header, lines = [], panel, size = 28, at = -30, out}) => {
	usePlatePreload([SUPER.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const m = plateMap(SUPER, x, y, superW(h));
	const [hx0, hy0] = m.at(SUPER_HEADER[0], SUPER_HEADER[1]), [hx1, hy1] = m.at(SUPER_HEADER[2], SUPER_HEADER[3]);
	const [px0, py0] = m.at(SUPER_PANEL[0], SUPER_PANEL[1]), [px1, py1] = m.at(SUPER_PANEL[2], SUPER_PANEL[3]);
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		<FrameSvg><SvgPlate plate={SUPER} x={x} y={y} w={superW(h)} /></FrameSvg>
		{header ? <div style={{position: 'absolute', left: hx0 + 14, top: hy0, height: hy1 - hy0, width: hx1 - hx0 - 28, display: 'flex', alignItems: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: Math.max(26, Math.min(36, (hy1 - hy0) * 0.66)), color: INK, whiteSpace: 'pre'}}>{header}</div> : null}
		{lines.map((ln, i) => {
			if (!ln) return null;
			const [lx, ly] = m.at(SUPER_X[0], SUPER_RULES[i]), [rx] = m.at(SUPER_X[1], SUPER_RULES[i]);
			const s = ln.size ?? size, g = ln.glow ? vis(f, ln.glow.from, ln.glow.to, 10) : 0;
			return <div key={i} style={{opacity: vis(f, ln.at ?? at, undefined, 12)}}>
				{g > 0.01 ? <div style={{position: 'absolute', left: lx - 8, top: ly - s * 1.25, width: rx - lx + 16, height: s * 1.25, borderRadius: 8, background: ln.glow!.color, opacity: 0.55 * g}} /> : null}
				<div style={{position: 'absolute', left: lx + 2, top: ly - s * 1.22, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: s, lineHeight: 1.2, color: ln.color ?? INK, whiteSpace: 'pre', fontVariantNumeric: 'tabular-nums'}}>{ln.text}</div>
			</div>;
		})}
		{panel ? <div style={{position: 'absolute', left: px0 + 16, top: py0 + 10, width: px1 - px0 - 32, height: py1 - py0 - 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4, fontFamily: FONT_DISPLAY, fontWeight: 800, color: INK}}>{panel}</div> : null}
	</div>;
};

// ---------- f12's last frame: the statement, the month strip and the three choices ----------
export const SS = {x: 760, base: 700, slot: 170, unit: 0.36};
const ssX = (i: number) => SS.x + i * SS.slot + SS.slot / 2;
export const SAVE3 = [200, 401, 603.005];
/** The month strip of f12's last frame: bars for months 1 to 3 with blue "+$200" arrows, "…" and "?" at 5 years. */
export const SaveStrip: React.FC<{bars?: number; arrows?: number; q?: number}> = ({bars = 1, arrows = 1, q = 1}) => {
	const T = (s: number, c: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: s, fill: c} as React.CSSProperties);
	const top = (i: number) => SS.base - SAVE3[i] * SS.unit;
	const lab = ['$200.00', '$401.00', '$603.01'];
	return <FrameSvg>
		<line x1={SS.x - 10} x2={ssX(5) + SS.slot / 2} y1={SS.base} y2={SS.base} stroke={INK} strokeWidth={4} />
		{[0, 1, 2].map(i => <g key={i}>
			<text x={ssX(i)} y={SS.base + 44} textAnchor="middle" style={T(30, INK)}>{`month ${i + 1}`}</text>
			<g opacity={bars}><rect x={ssX(i) - 52} y={top(i)} width={104} height={SS.base - top(i)} fill={DEP.soft} stroke={DEP.stroke} strokeWidth={4} />
				<text x={ssX(i)} y={top(i) - 14} textAnchor="middle" style={T(34, INK)} stroke={CARD} strokeWidth={6} paintOrder="stroke">{lab[i]}</text></g>
			<g opacity={arrows}><path d={`M${ssX(i) + 66},${top(i) - 90} V${top(i) - 20} M${ssX(i) + 52},${top(i) - 36} L${ssX(i) + 66},${top(i) - 20} L${ssX(i) + 80},${top(i) - 36}`} fill="none" stroke={DEP.stroke} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" /></g>
		</g>)}
		<g opacity={arrows}><text x={ssX(0) + 66} y={top(0) - 100} textAnchor="middle" style={T(30, DEP.ink)}>+$200</text></g>
		<text x={ssX(3.5)} y={SS.base - 30} textAnchor="middle" style={T(48, INK_SOFT)}>…</text>
		<g opacity={q}><rect x={ssX(5) - 60} y={SS.base - 110} width={120} height={100} rx={14} fill={CARD} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 8" />
			<text x={ssX(5)} y={SS.base - 42} textAnchor="middle" style={T(56, INK_SOFT)}>?</text>
			<text x={ssX(5)} y={SS.base + 44} textAnchor="middle" style={T(30, INK)}>after 5 years</text></g>
	</FrameSvg>;
};
// ---------- a phone with a plain app at 34 px (lesson part; the kit ScreenApp sizes text to the screen) ----------
export const PHONE_PLATE = MATHS_KIT2B_PLATES.phone;
const PSCR = MATHS_KIT2B_ANCHORS.phoneScreen;
export const phoneWidth = (h: number) => (h * (PHONE_PLATE.box[2] - PHONE_PLATE.box[0])) / (PHONE_PLATE.box[3] - PHONE_PLATE.box[1]);
const APP = {pad: 12, title: 50, row: 84};
/** Frame y of the centre of app row i, for a phone whose alpha box's top left is at y and which is h tall. */
export const phoneRowY = (y: number, h: number, i: number) => {
	const sc = h / (PHONE_PLATE.box[3] - PHONE_PLATE.box[1]);
	return y + (PSCR[1] - PHONE_PLATE.box[1]) * sc + APP.pad + APP.title + i * APP.row + APP.row / 2;
};
export type AppRow = {label: string; value: string; role?: RoleKey; question?: boolean};
/**
 * The painted phone with an unbranded app on its measured screen: a title, label and value rows, a balance row and
 * a mini graph, all text at 34 px or more (labels above values). `bare` draws the screen with the graph only (for
 * thumbnails too small for text).
 */
export const PhoneApp: React.FC<{x: number; y: number; h: number; title: string; rows: readonly AppRow[]; balance: {label: string; value: string};
	graph?: {fn: (t: number) => number; xMax: number; yMax: number; goal?: number; ghost?: (t: number) => number}; bare?: boolean; at?: number}> = ({x, y, h, title, rows, balance, graph, bare = false, at = -30}) => {
	usePlatePreload([PHONE_PLATE.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, undefined, 14);
	if (o <= 0.001) return null;
	const w = phoneWidth(h), m = plateMap(PHONE_PLATE, x, y, w);
	const [sx0, sy0] = m.at(PSCR[0], PSCR[1]), [sx1, sy1] = m.at(PSCR[2], PSCR[3]);
	const sw = sx1 - sx0, sh = sy1 - sy0;
	const used = bare ? 0 : APP.pad + APP.title + rows.length * APP.row + APP.row + 8;
	const gH = Math.max(60, sh - used - APP.pad), gW = sw - 2 * APP.pad;
	const g = graph ? (() => {
		const X = (t: number) => (t / graph.xMax) * gW, Y = (v: number) => gH - (Math.max(0, Math.min(graph.yMax, v)) / graph.yMax) * gH;
		const path = (fn: (t: number) => number) => Array.from({length: 61}, (_, i) => {const t = (graph.xMax * i) / 60; return `${i ? 'L' : 'M'}${X(t).toFixed(1)},${Y(fn(t)).toFixed(1)}`;}).join(' ');
		return <svg width={gW} height={gH} style={{display: 'block', marginTop: 'auto', overflow: 'visible'}}>
			<line x1={0} x2={gW} y1={gH} y2={gH} stroke={INK} strokeWidth={3} /><line x1={0} x2={0} y1={0} y2={gH} stroke={INK} strokeWidth={3} />
			{graph.ghost ? <path d={path(graph.ghost)} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 6" /> : null}
			{graph.goal !== undefined ? <line x1={0} x2={gW} y1={Y(graph.goal)} y2={Y(graph.goal)} stroke={INK} strokeWidth={3} strokeDasharray="12 8" /> : null}
			<path d={path(graph.fn)} fill="none" stroke={INK} strokeWidth={5} />
		</svg>;
	})() : null;
	const txt = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, color, lineHeight: 1.12, whiteSpace: 'pre'});
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		<FrameSvg><SvgPlate plate={PHONE_PLATE} x={x} y={y} w={w} /></FrameSvg>
		<div style={{position: 'absolute', left: sx0, top: sy0, width: sw, height: sh, boxSizing: 'border-box', padding: APP.pad, background: '#f7f4ec', borderRadius: Math.min(24, sw * 0.06), overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
			{!bare ? <>
				<div style={{...txt(36, INK), height: APP.title, borderBottom: '3px solid #e4dccd'}}>{title}</div>
				{rows.map((r, i) => <div key={i} style={{height: APP.row, display: 'flex', flexDirection: 'column', justifyContent: 'center', borderBottom: '2px solid #ebe4d6'}}>
					<div style={txt(34, r.role ? MATH_ROLES[r.role].ink : INK, 700)}>{r.label}</div>
					<div style={{...txt(34, r.question ? INK_SOFT : r.role ? MATH_ROLES[r.role].ink : INK)}}>{r.question ? '?' : r.value}</div>
				</div>)}
				<div style={{height: APP.row, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
					<div style={txt(34, INK, 700)}>{balance.label}</div><div style={txt(38, INK)}>{balance.value}</div>
				</div>
			</> : null}
			{g}
		</div>
	</div>;
};
export {prog};
