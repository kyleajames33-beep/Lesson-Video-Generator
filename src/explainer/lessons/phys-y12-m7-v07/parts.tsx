// Lesson parts for phys-y12-m7-v07: the colour roles, a top view of a grating, its screen and its rays (the order fan),
// a face-on spot screen, the coded polarising filter used in the handoff, and v06's parts re-exported.
// Colour key (design, Revision 2): beams, spots and spectra in their true colours (450 nm blue, 532 nm green, 647 nm and
// 661 nm red; white-light orders violet inner to red outer); grating lines dark grey; angles navy; screen distances
// orange; d rose; answers in dark-ink frames; mistakes slate (root rule R1).
import React from 'react';
import {INK} from '../../shared/tokens';
import {LIGHT_PLATES} from '../../physics/light/plates';
import {BENCH_PLATES} from '../../physics/light/bench';
import {GratingBar, Ray, arcPath, rayEnd} from '../../physics/light/grating';
import {FilterFace} from '../../physics/light/polar';
import {GREY, Lbl, NAVY, ORANGE, PLUM, RED_INK, ROSE, Shrunk, Strip, TEAL, col, fx, sci} from '../phys-y12-m7-v06/parts';
import {V06_PLATES} from '../phys-y12-m7-v06/parts';
import {SLATE} from '../phys-y12-m6-v01/parts';

export {GREY, Lbl, NAVY, ORANGE, PLUM, RED_INK, ROSE, SLATE, Shrunk, Strip, TEAL, col, fx, sci};
export const V07_PLATES = [...new Set([...V06_PLATES, ...BENCH_PLATES, ...LIGHT_PLATES.filter(s => s.includes('spectroscope'))])];
export const RED = col(647), GREEN = col(532), BLUE = col(450);
type Pt = [number, number];

/** A top view: a grating at g (edge-on), rays to orders at the given angles (degrees, up positive), a screen line at
 * distance L px (if given). `orders` carries per-ray draw progress and colour. */
export const TopView: React.FC<{g: Pt; len: number; orders: readonly {deg: number; draw?: number; color?: string; dash?: string; opacity?: number}[]; beam?: string; beamIn?: number; screenX?: number; screenH?: number; gh?: number; tiltDeg?: number; width?: number}> = ({g, len, orders, beam = RED, beamIn = 1, screenX, screenH = 300, gh = 120, tiltDeg = 0, width = 5}) => (
	<g>
		{beamIn > 0.001 ? <line x1={g[0] - 260 * beamIn} y1={g[1]} x2={g[0]} y2={g[1]} stroke={beam} strokeWidth={width + 1} strokeLinecap="round" /> : null}
		{orders.map((o, i) => <Ray key={i} o={g} deg={o.deg} len={len} color={o.color ?? beam} width={width} draw={o.draw ?? 1} dash={o.dash} opacity={o.opacity ?? 1} />)}
		<GratingBar x={g[0]} y0={g[1] - gh / 2} y1={g[1] + gh / 2} n={12} rotate={tiltDeg} />
		{screenX !== undefined ? <line x1={screenX} y1={g[1] - screenH} x2={screenX} y2={g[1] + screenH} stroke={INK} strokeWidth={6} strokeLinecap="round" /> : null}
	</g>
);
/** A navy angle arc at c from a0 to a1 degrees. */
export const Arc: React.FC<{c: Pt; r: number; a0: number; a1: number; color?: string; width?: number; opacity?: number}> = ({c, r, a0, a1, color = NAVY.stroke, width = 4, opacity = 1}) => (opacity <= 0.001 ? null : <path d={arcPath(c, r, a0, a1)} fill="none" stroke={color} strokeWidth={width} opacity={opacity} />);
/** A bracket from a to b (px) on one side, with end ticks of length t (normal direction n). */
export const Bracket: React.FC<{a: Pt; b: Pt; n: Pt; color: string; t?: number; width?: number; opacity?: number}> = ({a, b, n, color, t = 14, width = 4, opacity = 1}) => (opacity <= 0.001 ? null : (
	<path d={`M${a[0] - n[0] * t},${a[1] - n[1] * t} L${a[0]},${a[1]} L${b[0]},${b[1]} L${b[0] - n[0] * t},${b[1] - n[1] * t}`} fill="none" stroke={color} strokeWidth={width} opacity={opacity} strokeLinejoin="round" />
));
/** A face-on spot screen: dark card, spots at positions u (-1 to 1) in a colour, sharp. */
export const SpotScreen: React.FC<{x: number; y: number; w: number; h: number; spots: readonly {u: number; color: string; o?: number}[]; opacity?: number}> = ({x, y, w, h, spots, opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<rect x={x} y={y} width={w} height={h} rx={8} fill="#171412" />
		{spots.map((s, i) => (s.o ?? 1) <= 0.001 ? null : <g key={i} opacity={s.o ?? 1}><ellipse cx={x + ((s.u + 1) / 2) * w} cy={y + h / 2} rx={9} ry={h * 0.34} fill={s.color} opacity={0.35} /><ellipse cx={x + ((s.u + 1) / 2) * w} cy={y + h / 2} rx={4} ry={h * 0.28} fill={s.color} /></g>)}
		<rect x={x} y={y} width={w} height={h} rx={8} fill="none" stroke={INK} strokeWidth={3} />
	</g>
));
export {FilterFace, rayEnd};
export type {Pt};
