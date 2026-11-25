// Module 8 kit, part 5: discovering the electron (additive kit file, 26 November 2026; first used by phys-y12-m8-v06's
// final frame and phys-y12-m8-v07). Course-neutral: every label, number and colour of meaning comes from the lesson.
// Plates (visible boxes measured from the alpha channel, threshold 20; anchors read from the plates on a grid,
// 26 November 2026; never stretched):
//   Maltese-cross tube (2172 x 724): disc cathode centre (448, 300); cross centre (1297, 270), cross 1160 to 1437 wide;
//     the wide end of the bulb at x about 2090, its glow face centre (2012, 322); glass on cream only (root decision 18).
//   paddle-wheel tube (2172 x 724): electrode discs at x 212 and 1955 on the axis y 345; the upper glass rail top
//     y 386 from x 235 to 1935.
//   paddle wheel (1536 x 1024): hub centre (768, 512); vane tips at radius about 470.
//   Millikan plates (1774 x 887): top plate face centre (840, 292) with its hole at (855, 290); the plate gap at the
//     front edge y 372 to 392 (read from the plate as painted, root decision 18); plates span x 378 to 1305.
//   atomiser (1920 x 819): nozzle tip (1846, 395).
//   top-pan balance (1400 x 900; brief 192 anchors): display inner corners (398, 432) to (862, 524).
// - ExamTube: an exam-style cathode ray tube diagram (gun blocks, one pair of deflection plates, a screen line and a
//   dashed evacuated-tube boundary), used while the painted CRT plate is held.
// - ChargeAxis: a horizontal |q| axis with dashed multiples of e and drops that fall onto it.
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import type {LightSpec} from '../light/plates';

const P = (name: string) => `assets/physics/${name}.png`;
export const MALTESE: LightSpec = {src: P('y12p-maltese-cross-tube-v1'), W: 2172, H: 724, box: [60, 10, 2094, 715]};
export const MALTESE_AT = {cathode: [448, 300], cross: [1297, 270], crossHalf: 138, endX: 2090, glow: [2012, 322], glowR: [64, 220]} as const;
export const PADDLE_TUBE: LightSpec = {src: P('y12p-paddle-wheel-tube-v1'), W: 2172, H: 724, box: [16, 192, 2156, 596]};
export const PADDLE_TUBE_AT = {cathode: [212, 345], anode: [1955, 345], railY: 386, railX0: 235, railX1: 1935} as const;
export const PADDLE_WHEEL = {src: P('y12p-paddle-wheel-v1'), W: 1536, H: 1024, hub: [768, 512], tip: 470} as const;
export const MILLIKAN: LightSpec = {src: P('y12p-millikan-plates-v1'), W: 1774, H: 887, box: [16, 219, 1761, 820]};
export const MILLIKAN_AT = {hole: [855, 290], gapTop: 372, gapBot: 392, plateX0: 378, plateX1: 1305} as const;
export const ATOMISER: LightSpec = {src: P('y12p-atomiser-v1'), W: 1920, H: 819, box: [43, 22, 1862, 800]};
export const ATOMISER_AT = {nozzle: [1846, 395]} as const;
export const BALANCE_DISPLAY = {x0: 398, y0: 432, x1: 862, y1: 524} as const;
export const ELECTRON_PLATES = [MALTESE, PADDLE_TUBE, MILLIKAN, ATOMISER].map(s => s.src).concat([PADDLE_WHEEL.src]);
const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color});

/** Exam-style tube geometry: gun at x0 on the axis y; plates from px1 to px2 (half gap hg); screen at sx. */
export type TubeG = {x0: number; y: number; px1: number; px2: number; hg: number; sx: number; top: number; bot: number};
/** The exam-style cathode ray tube: dashed evacuated boundary, cathode and anode blocks, deflection plates, screen. */
export const ExamTube: React.FC<{g: TubeG; plates?: number; signs?: boolean; opacity?: number; size?: number}> = ({g, plates = 1, signs = true, opacity = 1, size = 28}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<rect x={g.x0 - 30} y={g.top} width={g.sx - g.x0 + 60} height={g.bot - g.top} rx={40} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="14 10" />
		<rect x={g.x0} y={g.y - 40} width={28} height={80} rx={4} fill={INK_SOFT} stroke={INK} strokeWidth={3} />
		<rect x={g.x0 + 80} y={g.y - 60} width={22} height={48} fill="#d9d2c4" stroke={INK} strokeWidth={3} />
		<rect x={g.x0 + 80} y={g.y + 12} width={22} height={48} fill="#d9d2c4" stroke={INK} strokeWidth={3} />
		{plates > 0.001 ? <g opacity={plates}>
			<rect x={g.px1} y={g.y - g.hg - 16} width={g.px2 - g.px1} height={16} fill="#d9d2c4" stroke={INK} strokeWidth={3.5} />
			<rect x={g.px1} y={g.y + g.hg} width={g.px2 - g.px1} height={16} fill="#d9d2c4" stroke={INK} strokeWidth={3.5} />
			{signs ? <><text x={(g.px1 + g.px2) / 2} y={g.y - g.hg - 26} textAnchor="middle" style={T(size + 4, INK)}>+</text><text x={(g.px1 + g.px2) / 2} y={g.y + g.hg + 16 + size + 6} textAnchor="middle" style={T(size + 4, INK)}>−</text></> : null}
		</g> : null}
		<line x1={g.sx} y1={g.top + 30} x2={g.sx} y2={g.bot - 30} stroke={INK} strokeWidth={6} />
	</g>
));

/** A horizontal |q| axis from x0 to x1 for 0 to qMax (units of 10⁻¹⁹ C) with dashed lines at multiples of e. */
export type AxisG = {x0: number; x1: number; y: number; qMax: number};
export const qX = (g: AxisG, q: number) => g.x0 + (q / g.qMax) * (g.x1 - g.x0);
export const ChargeAxis: React.FC<{g: AxisG; e: number; lines?: number; size?: number; title?: string; ticks?: readonly number[]; labelColor?: string}> = ({g, e, lines = 1, size = 28, title, ticks = [0, 2, 4, 6, 8, 10], labelColor = INK}) => (
	<g>
		<line x1={g.x0} y1={g.y} x2={g.x1 + 20} y2={g.y} stroke={INK} strokeWidth={4} />
		{ticks.map(t => <g key={t}><line x1={qX(g, t)} y1={g.y} x2={qX(g, t)} y2={g.y + 12} stroke={INK} strokeWidth={3} /><text x={qX(g, t)} y={g.y + 14 + size} textAnchor="middle" style={T(size, INK, 700)}>{t}</text></g>)}
		{lines > 0.001 ? <g opacity={lines}>{Array.from({length: Math.floor(g.qMax / e)}, (_, i) => <g key={i}><line x1={qX(g, (i + 1) * e)} y1={g.y - 300} x2={qX(g, (i + 1) * e)} y2={g.y} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 7" /><text x={qX(g, (i + 1) * e)} y={g.y - 312} textAnchor="middle" style={T(size, labelColor)}>{`${i + 1}e`}</text></g>)}</g> : null}
		{title ? <text x={g.x1} y={g.y + 2 * size + 30} textAnchor="end" style={T(size, INK)}>{title}</text> : null}
	</g>
);
/** A balance display reading drawn over the painted balance placed with `at` (plate px to screen). */
export const BalanceReading: React.FC<{at: (x: number, y: number) => [number, number]; text: string; size?: number; color?: string}> = ({at, text, size = 52, color = '#1f3a68'}) => {
	const [x0, y0] = at(BALANCE_DISPLAY.x0, BALANCE_DISPLAY.y0), [x1, y1] = at(BALANCE_DISPLAY.x1, BALANCE_DISPLAY.y1);
	return <g><rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} rx={6} fill={CARD} /><text x={(x0 + x1) / 2} y={(y0 + y1) / 2 + size * 0.36} textAnchor="middle" style={T(Math.min(size, (y1 - y0) * 0.8), color)}>{text}</text></g>;
};
