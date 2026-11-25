// Lesson parts for phys-y12-m6-v01: the colour roles for Module 6 (root decision 1, Revision 2), number
// formatting (scientific notation rounded half up, so 4.005 shows as 4.01), the plate-stage layout helpers and the
// shared parts from the Module 5 run (T, Lbl, Ring, VecArrow) plus the electromagnetism kit.
// Colour key (design "Colour roles"): electric field lines, E and field readouts blue; force arrows and F amber;
// acceleration violet; velocity teal; voltage V and gap d navy (givens); particles ink discs carrying their sign;
// answers in dark-ink frames; mistakes slate (root rule R1).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter} from '../../kit';
import {CARD, CARD_SHADOW, INK, TONES} from '../../shared/tokens';
import {DISPLAY, ROLE, VecArrow} from '../../physics/projectile/board';
import {Lbl} from '../phys-y12-m5-v02/parts';
import {Ring} from '../phys-y12-m5-v03/parts';
import {T} from '../phys-y12-m5-v17/parts';
import {EM_PLATES, FieldLines, PlatePair, Supply, supplyPts, Lead} from '../../physics/electromagnetism/plates';
import type {PG, SupplyAt} from '../../physics/electromagnetism/plates';

export {Lbl, Ring, T, VecArrow};
export const BLUE = TONES.blue, AMBER = ROLE.w, VIOLET = ROLE.a, TEAL = ROLE.x, NAVY = ROLE.given, GREY = TONES.grey, ORANGE = ROLE.v, SLATE = ROLE.slate;
/** Plates used: the high-voltage supply and the oil drop. */
export const V01_PLATES = [...EM_PLATES];

// ---------------------------------------------------------------- numbers
const SUP: Record<string, string> = {'0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻'};
/** Scientific notation with `d` decimals, rounded half up: 8.01 × 10⁻¹⁶. A true minus sign on negatives. */
export const sci = (v: number, d = 2) => {
	if (v === 0) return '0';
	const neg = v < 0, a = Math.abs(v);
	let e = Math.floor(Math.log10(a));
	let m = Math.round((a / 10 ** e) * 10 ** d * (1 + 1e-12)) / 10 ** d;
	if (m >= 10) { e += 1; m = Math.round((a / 10 ** e) * 10 ** d * (1 + 1e-12)) / 10 ** d; }
	return `${neg ? '−' : ''}${m.toFixed(d)} × 10${String(e).split('').map(c => SUP[c]).join('')}`;
};
/** Fixed decimals, half up, true minus sign. */
export const fx = (v: number, d = 0) => { const r = Math.round(Math.abs(v) * 10 ** d * (1 + 1e-12)) / 10 ** d; return (v < 0 && r > 0 ? '−' : '') + r.toFixed(d); };
export const comma = (v: number) => Math.round(v).toLocaleString('en-AU');
/** Interpolate on a log scale (for readouts that sweep through powers of ten). */
export const logLerp = (a: number, b: number, t: number) => Math.exp(Math.log(a) + (Math.log(b) - Math.log(a)) * Math.min(1, Math.max(0, t)));

// ---------------------------------------------------------------- the plate stage (kit gap 1)
/** One plate stage: supply at `sup`, plates at `g`, leads from the supply's + and − terminals to the plates' left ends. */
export const Stage: React.FC<{g: PG; sup?: SupplyAt; reading?: React.ReactNode; knobDeg?: number; density?: number; grow?: number; linesOpacity?: number; top?: '+' | '−' | ''; bot?: '+' | '−' | ''; supplyOpacity?: number; signsOpacity?: number; step?: number; children?: React.ReactNode}> = ({g, sup, reading, knobDeg = 0, density = 1, grow = 1, linesOpacity = 1, top = '+', bot = '−', supplyOpacity = 1, signsOpacity = 1, step = 110, children}) => {
	const p = sup ? supplyPts(sup) : null;
	return (
		<g>
			{p && sup ? <g opacity={supplyOpacity}>
				<Lead pts={[p.pos, [p.pos[0], p.pos[1] + 0.22 * p.h], [g.x1 - 70, p.pos[1] + 0.22 * p.h], [g.x1 - 70, g.yTop - 11], [g.x1, g.yTop - 11]]} />
				<Lead pts={[p.neg, [p.neg[0], p.neg[1] + 0.32 * p.h], [g.x1 - 40, p.neg[1] + 0.32 * p.h], [g.x1 - 40, g.yBot + 11], [g.x1, g.yBot + 11]]} />
				<Supply at={sup} reading={reading} knobDeg={knobDeg} />
			</g> : null}
			<FieldLines g={g} density={density} grow={grow} opacity={linesOpacity} step={step} />
			<PlatePair g={g} top={top} bot={bot} signsOpacity={signsOpacity} />
			{children}
		</g>
	);
};
/** A geometry tween between two plate layouts (for camera pushes and gap changes). */
export const lerpG = (a: PG, b: PG, t: number): PG => ({x1: a.x1 + (b.x1 - a.x1) * t, x2: a.x2 + (b.x2 - a.x2) * t, yTop: a.yTop + (b.yTop - a.yTop) * t, yBot: a.yBot + (b.yBot - a.yBot) * t});
export const lerpS = (a: SupplyAt, b: SupplyAt, t: number): SupplyAt => ({x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, w: a.w + (b.w - a.w) * t});
/** A pulsing scale factor (0 to 1 and back) after `at`. */
export const usePulse = (at: number, len = 24) => { const f = useCurrentFrame(); return Math.sin(Math.PI * Math.max(0, Math.min(1, (f - at) / len))); };

// ---------------------------------------------------------------- strips, givens, cards
/** A one-line strip (task strip, equation strip, tag rows). */
export const Strip: React.FC<{x: number; y: number; at: number; w?: number; children: React.ReactNode; size?: number; border?: string; color?: string; bg?: string; out?: number}> = ({x, y, at, w, children, size = 34, border = 'rgba(60,45,20,0.16)', color = INK, bg = CARD, out}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: 'inline-block', background: bg, border: `3px solid ${border}`, borderRadius: 14, padding: '6px 20px 8px', ...DISPLAY(size, color, 800), whiteSpace: 'normal'}}>{children}</div>
	</Enter>
);
/** Grouped givens (navy). */
export const Givens: React.FC<{x: number; y: number; w: number; at: number; lines: React.ReactNode[]; size?: number; out?: number}> = ({x, y, w, at, lines, size = 32, out}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{background: NAVY.soft, border: `3px solid ${NAVY.stroke}`, borderRadius: 14, padding: '6px 22px 10px'}}>
			{lines.map((t, i) => <div key={i} style={{...DISPLAY(size, NAVY.ink, 800), whiteSpace: 'normal'}}>{t}</div>)}
		</div>
	</Enter>
);
/** The attempt card shrunk to a full-text strip, with a navy givens strip under it (feedback scenes). */
export const Shrunk: React.FC<{children: React.ReactNode; givens: React.ReactNode; gy: number; w?: number; accent: string}> = ({children, givens, gy, w = 1110, accent}) => (
	<>
		<div style={{position: 'absolute', left: 96, top: 166, width: w, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, borderLeft: `8px solid ${accent}`, padding: '8px 22px', ...DISPLAY(26, INK, 600), whiteSpace: 'normal', lineHeight: 1.24}}>{children}</div>
		<div style={{position: 'absolute', left: 96, top: gy, width: w, background: NAVY.soft, borderRadius: 12, border: `3px solid ${NAVY.stroke}`, padding: '6px 20px', ...DISPLAY(30, NAVY.ink, 700), whiteSpace: 'normal'}}>{givens}</div>
	</>
);
/** Card-style background rectangle in SVG. */
export const CardRect: React.FC<{x: number; y: number; w: number; h: number; opacity?: number}> = ({x, y, w, h, opacity = 1}) => <rect x={x} y={y} width={w} height={h} rx={16} fill={CARD} stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} opacity={opacity} />;
