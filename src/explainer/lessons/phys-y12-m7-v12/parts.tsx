// Lesson parts for phys-y12-m7-v12: the colour roles (relativity key, root decision 1, with root rule R1), the cabin
// cut-away on the painted spacecraft's hull, a coded spring, the evidence ledger and v11's parts re-exported.
// Colour key: Earth frame ink (ruler and clock); spacecraft frame teal; light pulses amber; velocities orange arrows;
// the aether and its wind grey; evidence ticks green; answers in dark-ink frames; mistakes slate (root rule R1).
import React from 'react';
import {Enter} from '../../kit';
import {CARD, INK, TONES} from '../../shared/tokens';
import {EARTH} from '../../physics/light/plates';
import {FRAME_PLATES, STEEL_BALL} from '../../physics/light/frames';
import {LPlate} from '../../physics/light/plates';
import {AMBER, GREY, Lbl, NAVY, ORANGE, SLATE, Shrunk, Strip, V11_PLATES, fx, sci} from '../phys-y12-m7-v11/parts';

export {AMBER, GREY, INK, Lbl, NAVY, ORANGE, SLATE, Shrunk, Strip, fx, sci};
export const TEAL = TONES.teal, GREEN = TONES.green;
export const V12_PLATES = [...new Set([...V11_PLATES, ...FRAME_PLATES, EARTH.src])];
type Pt = [number, number];

/** A steel-ball plate centred at (cx, cy) with diameter d. */
export const Ball: React.FC<{cx: number; cy: number; d: number; opacity?: number}> = ({cx, cy, d, opacity = 1}) => <LPlate spec={STEEL_BALL} p={{x: cx - d / 2, y: cy - d / 2, w: d}} opacity={opacity} />;
/** A coded spring (zigzag) from x0 to x1 at height y. */
export const Spring: React.FC<{x0: number; x1: number; y: number; coils?: number; amp?: number; color?: string}> = ({x0, x1, y, coils = 9, amp = 14, color = INK}) => {
	const n = coils * 2;
	const d = Array.from({length: n + 1}, (_, i) => `${i ? 'L' : 'M'}${x0 + ((x1 - x0) * i) / n},${y + (i === 0 || i === n ? 0 : i % 2 ? -amp : amp)}`).join(' ');
	return <path d={d} fill="none" stroke={color} strokeWidth={4} strokeLinejoin="round" />;
};
/** A cabin cut-away window (dark-lined box) at x, y, w, h. */
export const CabinBox: React.FC<{x: number; y: number; w: number; h: number; opacity?: number; children?: React.ReactNode}> = ({x, y, w, h, opacity = 1, children}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<rect x={x} y={y} width={w} height={h} rx={10} fill="#f3efe7" stroke={INK} strokeWidth={4} />
		{children}
	</g>
));
/** An orange velocity arrow from a to b with a label. */
export const VArrow: React.FC<{a: Pt; b: Pt; color?: string; width?: number; dash?: string; opacity?: number}> = ({a, b, color = ORANGE.stroke, width = 7, dash, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const ang = Math.atan2(b[1] - a[1], b[0] - a[0]), hl = 22;
	return (
		<g opacity={opacity}>
			<line x1={a[0]} y1={a[1]} x2={b[0] - hl * 0.7 * Math.cos(ang)} y2={b[1] - hl * 0.7 * Math.sin(ang)} stroke={color} strokeWidth={width} strokeDasharray={dash} strokeLinecap="round" />
			<path d={`M${b[0]},${b[1]} L${b[0] - hl * Math.cos(ang - 0.45)},${b[1] - hl * Math.sin(ang - 0.45)} L${b[0] - hl * Math.cos(ang + 0.45)},${b[1] - hl * Math.sin(ang + 0.45)} Z`} fill={color} />
		</g>
	);
};
/** The evidence ledger card: a title and rows that drop in at their frames. */
export const Ledger: React.FC<{x: number; y: number; w: number; title: string; rows: readonly {at: number; text: string; mark?: 'tick' | 'caution'; color?: string}[]; size?: number}> = ({x, y, w, title, rows, size = 30}) => (
	<div style={{position: 'absolute', left: x, top: y, width: w, background: CARD, border: '3px solid rgba(60,45,20,0.2)', borderRadius: 18, padding: '14px 22px 18px'}}>
		<div style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, color: INK, marginBottom: 8}}>{title}</div>
		{rows.map((r, i) => (
			<Enter key={i} at={r.at} style={{display: 'flex', gap: 12, alignItems: 'baseline', marginTop: 10}}>
				<span style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: size + 4, color: r.mark === 'tick' ? GREEN.ink : GREY.ink, minWidth: 30}}>{r.mark === 'tick' ? '✓' : r.mark === 'caution' ? '!' : '•'}</span>
				<span style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: size, color: r.color ?? INK, lineHeight: 1.2}}>{r.text}</span>
			</Enter>
		))}
	</div>
);

