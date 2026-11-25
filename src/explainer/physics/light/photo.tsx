// Photoelectric kit for Module 7 (additive kit file, 25 November 2026; first used by phys-y12-m7-v10 and v11, offered
// to the rest of Module 7). Course-neutral: every label, number and colour of meaning is passed in by the lesson.
// Plates (visible boxes measured from the alpha channel, threshold 20, on 25 November 2026; anchors from
// docs/production/claude-pm/assets/brief191-manifest.json or the electromagnetism bench kit):
//   photocell (1073 x 1466): cathode inner face about x 300 to 470, y 295 to 690 (curved half-cylinder, left);
//   anode wire x 557 from y 335 to 900; terminals (394, 1188) and (651, 1188);
//   digital timer (1600 x 1000): display about (300, 280) to (1300, 540), shown blank;
//   digital multimeter (the bench kit's DMM): display (293, 270) to (787, 480), terminals at y 1118;
//   low-voltage supply (the bench kit's LVS): + terminal (1125, 535), - terminal (1295, 535).
// - Meter: the painted multimeter with a coded display (any short reading).
// - Beam: a coded light beam from an aperture to a target, its width carrying intensity.
// - Electron, Packet: navy electron dots and amber photon packets (a short wave train in a capsule).
// - EnergyBar: a vertical photon-energy bar against a work-function line; the part above the line can turn orange.
// - Well: the energy step an electron must climb to leave the metal (slate), with the electron's height.
// - Axes2 / ax2: a plain pair of axes with a value-to-pixel mapping, arrowheads and optional ticks.
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {INK} from '../../shared/tokens';
import {DMM, LVS} from '../electromagnetism/bench';
import {LPlate} from './plates';
import type {LightSpec, Place} from './plates';
import {nat} from './thermal';

type Pt = [number, number];
const P = (name: string) => `assets/physics/${name}.png`;
export const PHOTOCELL: LightSpec = {src: P('y12p-photocell-v1'), W: 1073, H: 1466, box: [184, 71, 878, 1416]};
export const TIMER: LightSpec = {src: P('phys-y11-digital-timer-v1'), W: 1600, H: 1000, box: [144, 100, 1455, 899]};
export const METER: LightSpec = DMM;
export const SUPPLY: LightSpec = LVS;
export const PHOTO_ANCHOR = {
	cathode: [300, 295, 470, 690], anodeX: 557, anodeY: [335, 900], terminals: [[394, 1188], [651, 1188]],
	meterDisplay: [293, 270, 787, 480], meterTerminals: [[364, 1118], [712, 1118]],
	supplyPlus: [1125, 535], supplyMinus: [1295, 535],
} as const;
export const PHOTO_PLATES = [PHOTOCELL, TIMER, DMM, LVS].map(s => s.src);

/** Screen geometry of a photocell placed at p: cathode face centre, anode line, terminals. */
export const cellGeom = (p: Place) => {
	const A = PHOTO_ANCHOR;
	const cTop = nat(PHOTOCELL, p, A.cathode[2] - 20, A.cathode[1] + 40), cBot = nat(PHOTOCELL, p, A.cathode[2] - 20, A.cathode[3] - 40);
	const aTop = nat(PHOTOCELL, p, A.anodeX, A.anodeY[0]), aBot = nat(PHOTOCELL, p, A.anodeX, A.anodeY[1]);
	return {
		cathode: [(cTop[0] + cBot[0]) / 2, (cTop[1] + cBot[1]) / 2] as Pt, cTop, cBot, aTop, aBot,
		anode: [(aTop[0] + aBot[0]) / 2, (aTop[1] + aBot[1]) / 2] as Pt,
		t1: nat(PHOTOCELL, p, A.terminals[0][0], A.terminals[0][1]), t2: nat(PHOTOCELL, p, A.terminals[1][0], A.terminals[1][1]),
		s: p.w / (PHOTOCELL.box[2] - PHOTOCELL.box[0]),
	};
};

/** The painted multimeter with a coded reading in its display. */
export const Meter: React.FC<{p: Place; reading: string; color?: string; size?: number; opacity?: number}> = ({p, reading, color = '#9fe3a0', size, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const D = PHOTO_ANCHOR.meterDisplay;
	const a = nat(METER, p, D[0], D[1]), b = nat(METER, p, D[2], D[3]);
	const fs = size ?? Math.min(52, (b[1] - a[1]) * 0.62);
	return (
		<g opacity={opacity}>
			<LPlate spec={METER} p={p} />
			<rect x={a[0] + 4} y={a[1] + 4} width={b[0] - a[0] - 8} height={b[1] - a[1] - 8} rx={6} fill="#14201a" />
			<text x={(a[0] + b[0]) / 2} y={(a[1] + b[1]) / 2 + fs * 0.36} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: fs, fill: color, fontVariantNumeric: 'tabular-nums'}}>{reading}</text>
		</g>
	);
};

/** A coded beam from point a (aperture) to point b (target), half-widths wa at a and wb at b. */
export const Beam: React.FC<{a: Pt; b: Pt; wa?: number; wb?: number; color: string; opacity?: number; core?: boolean}> = ({a, b, wa = 10, wb = 30, color, opacity = 1, core = true}) => {
	if (opacity <= 0.001) return null;
	const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1, nx = -dy / L, ny = dx / L;
	const d = `M${a[0] + nx * wa},${a[1] + ny * wa} L${b[0] + nx * wb},${b[1] + ny * wb} L${b[0] - nx * wb},${b[1] - ny * wb} L${a[0] - nx * wa},${a[1] - ny * wa} Z`;
	return (
		<g opacity={opacity}>
			<path d={d} fill={color} opacity={0.42} />
			{core ? <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={color} strokeWidth={4} opacity={0.9} /> : null}
		</g>
	);
};

/** A navy electron dot. */
export const Electron: React.FC<{x: number; y: number; r?: number; color: string; opacity?: number}> = ({x, y, r = 10, color, opacity = 1}) => (opacity <= 0.001 ? null : <circle cx={x} cy={y} r={r} fill={color} stroke="#fff" strokeWidth={2.5} opacity={opacity} />);

/** An amber photon packet travelling along angle deg (0 = right), centred at (x, y). */
export const Packet: React.FC<{x: number; y: number; deg?: number; len?: number; color: string; opacity?: number; label?: string; size?: number; labelColor?: string}> = ({x, y, deg = 0, len = 64, color, opacity = 1, label, size = 28, labelColor}) => {
	if (opacity <= 0.001) return null;
	const n = 28, amp = len * 0.16;
	const d = Array.from({length: n + 1}, (_, i) => { const u = i / n; const env = Math.sin(Math.PI * u); return `${i ? 'L' : 'M'}${(u - 0.5) * len},${-amp * env * Math.sin(u * Math.PI * 6)}`; }).join(' ');
	return (
		<g opacity={opacity}>
			<g transform={`translate(${x} ${y}) rotate(${deg})`}>
				<rect x={-len / 2 - 8} y={-amp - 9} width={len + 16} height={2 * amp + 18} rx={amp + 9} fill="#fff6e2" stroke={color} strokeWidth={2.5} />
				<path d={d} fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" />
			</g>
			{label ? <text x={x} y={y - amp - 18} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fill: labelColor ?? color}}>{label}</text> : null}
		</g>
	);
};

/**
 * A vertical energy bar standing on `base` (px), `scale` px per unit, for a photon of energy `hf` against a work
 * function `phi`. `grow` (0 to 1) raises it; `split` (0 to 1) turns the part above phi orange and the part below slate.
 */
export const EnergyBar: React.FC<{x: number; base: number; w?: number; scale: number; hf: number; phi: number; grow?: number; split?: number; amber: string; slate: string; orange: string; line?: boolean; opacity?: number}> = ({x, base, w = 70, scale, hf, phi, grow = 1, split = 0, amber, slate, orange, line = true, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const h = hf * scale * grow, hp = Math.min(h, phi * scale);
	return (
		<g opacity={opacity}>
			<rect x={x} y={base - h} width={w} height={h} rx={6} fill={amber} />
			{split > 0.001 ? <rect x={x} y={base - hp} width={w} height={hp} rx={6} fill={slate} opacity={split} /> : null}
			{split > 0.001 && h > hp ? <rect x={x} y={base - h} width={w} height={h - hp} rx={6} fill={orange} opacity={split} /> : null}
			<rect x={x} y={base - h} width={w} height={h} rx={6} fill="none" stroke={INK} strokeWidth={3} />
			{line ? <line x1={x - 30} y1={base - phi * scale} x2={x + w + 30} y2={base - phi * scale} stroke={slate} strokeWidth={5} strokeDasharray="12 8" /> : null}
		</g>
	);
};

/** The energy step at a metal's surface: a floor inside the metal (left) and a step of height phi*scale up to the outside. */
export const Well: React.FC<{x: number; base: number; w: number; stepX: number; phi: number; scale: number; color: string; fill?: string; opacity?: number}> = ({x, base, w, stepX, phi, scale, color, fill = '#e9e4da', opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const top = base - phi * scale;
	return (
		<g opacity={opacity}>
			<rect x={x} y={top} width={stepX - x} height={phi * scale} fill={fill} />
			<path d={`M${x},${base} L${stepX},${base} L${stepX},${top} L${x + w},${top}`} fill="none" stroke={color} strokeWidth={7} strokeLinejoin="round" />
		</g>
	);
};

/** A pair of axes. `ax2(g)` maps values to pixels. Ticks are values; `fmt` formats their labels. */
export type AxGeom = {x: number; y: number; w: number; h: number; x0: number; x1: number; y0: number; y1: number};
export const ax2 = (g: AxGeom) => ({px: (v: number) => g.x + ((v - g.x0) / (g.x1 - g.x0)) * g.w, py: (v: number) => g.y + g.h - ((v - g.y0) / (g.y1 - g.y0)) * g.h});
export const Axes2: React.FC<{g: AxGeom; xTicks?: readonly number[]; yTicks?: readonly number[]; fmtX?: (v: number) => string; fmtY?: (v: number) => string; grid?: boolean; tick?: number; opacity?: number; width?: number}> = ({g, xTicks = [], yTicks = [], fmtX = v => `${v}`, fmtY = v => `${v}`, grid = false, tick = 26, opacity = 1, width = 4}) => {
	if (opacity <= 0.001) return null;
	const {px, py} = ax2(g);
	const ox = px(Math.max(g.x0, Math.min(g.x1, 0))), oy = py(Math.max(g.y0, Math.min(g.y1, 0)));
	return (
		<g opacity={opacity}>
			{grid ? <g stroke="rgba(60,45,20,0.12)" strokeWidth={2}>{xTicks.map(v => <line key={`gx${v}`} x1={px(v)} y1={g.y} x2={px(v)} y2={g.y + g.h} />)}{yTicks.map(v => <line key={`gy${v}`} x1={g.x} y1={py(v)} x2={g.x + g.w} y2={py(v)} />)}</g> : null}
			<line x1={g.x} y1={oy} x2={g.x + g.w + 20} y2={oy} stroke={INK} strokeWidth={width} />
			<path d={`M${g.x + g.w + 32},${oy} l-18,-9 v18 z`} fill={INK} />
			<line x1={ox} y1={g.y + g.h} x2={ox} y2={g.y - 20} stroke={INK} strokeWidth={width} />
			<path d={`M${ox},${g.y - 32} l-9,18 h18 z`} fill={INK} />
			{xTicks.map(v => <g key={`x${v}`}><line x1={px(v)} y1={oy - 8} x2={px(v)} y2={oy + 8} stroke={INK} strokeWidth={3} /><text x={px(v)} y={oy + 12 + tick} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: tick, fill: INK}}>{fmtX(v)}</text></g>)}
			{yTicks.map(v => <g key={`y${v}`}><line x1={ox - 8} y1={py(v)} x2={ox + 8} y2={py(v)} stroke={INK} strokeWidth={3} /><text x={ox - 14} y={py(v) + tick * 0.35} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: tick, fill: INK}}>{fmtY(v)}</text></g>)}
		</g>
	);
};
