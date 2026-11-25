// Frames-of-reference kit for Module 7 relativity (additive kit file, 25 November 2026; first used by phys-y12-m7-v11
// (handoff) and v12, offered to v13 to v15). Course-neutral: labels, colours and numbers come from the lesson.
// Plates (visible boxes measured from the alpha channel, threshold 20, on 25 November 2026; anchors from
// docs/production/claude-pm/assets/brief191-manifest.json or read on a 100 px grid the same day):
//   spacecraft (2048 x 768): facing right; nose tip about (1767, 418); nozzle opening about (306, 420); hull rectangle for
//   overlays about (520, 330) to (1620, 510);
//   spacecraft exhaust (2048 x 768, same canvas, pixel-aligned to the nozzle): drawn with the ship's box so it registers;
//   steel ball (800 x 800), car seen from above (1600 x 800, facing right), lift car (1400 x 2000).
// - Ship: the spacecraft with its exhaust layer faded in or out (never stretched).
// - FrameBadge: a coded ruler-and-clock badge (a frame of reference: rulers and clocks), the clock hand turning with t.
// - Starfield: deterministic coded star dots streaming left at a set offset (the scene passes the offset).
// - Interferometer: an HSC-style schematic (source, half-silvered splitter, two arms with mirrors, detector) that can
//   rotate, run beams out and back and shorten the horizontal arm.
// - FringeStrip: a fringe pattern from the waves engine (`sumAt` of two waves whose path difference the caller sets),
//   with a shift in fringes.
// - LightClock: two short mirrors (for example on a ship's hull) and a pulse between them.
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {INK} from '../../shared/tokens';
import {sumAt} from '../../sims/waves';
import type {Wave} from '../../sims/waves';
import {LPlate} from './plates';
import type {LightSpec, Place} from './plates';
import {nat} from './thermal';

type Pt = [number, number];
const P = (name: string) => `assets/physics/${name}.png`;
export const SHIP: LightSpec = {src: P('y12p-spacecraft-v1'), W: 2048, H: 768, box: [285, 138, 1768, 587]};
export const EXHAUST: LightSpec = {src: P('y12p-spacecraft-exhaust-v1'), W: 2048, H: 768, box: [285, 138, 1768, 587]};
export const STEEL_BALL: LightSpec = {src: P('phys-y11-steel-ball-v1'), W: 800, H: 800, box: [81, 72, 719, 728]};
export const CAR_TOP: LightSpec = {src: P('phys-y11-car-top-v1'), W: 1600, H: 800, box: [144, 95, 1456, 704]};
export const LIFT_CAR: LightSpec = {src: P('phys-y11-lift-car-v1'), W: 1400, H: 2000, box: [153, 180, 1247, 1820]};
export const SHIP_ANCHOR = {nose: [1767, 418], nozzle: [306, 420], hull: [520, 330, 1620, 510]} as const;
export const FRAME_PLATES = [SHIP, EXHAUST, STEEL_BALL, CAR_TOP, LIFT_CAR].map(s => s.src);

/** Screen points of a ship placed at p: nose, nozzle and the hull rectangle. */
export const shipGeom = (p: Place) => {
	const A = SHIP_ANCHOR;
	const h0 = nat(SHIP, p, A.hull[0], A.hull[1]), h1 = nat(SHIP, p, A.hull[2], A.hull[3]);
	return {nose: nat(SHIP, p, A.nose[0], A.nose[1]), nozzle: nat(SHIP, p, A.nozzle[0], A.nozzle[1]), hull: [h0[0], h0[1], h1[0], h1[1]] as [number, number, number, number], s: p.w / (SHIP.box[2] - SHIP.box[0])};
};
/** The spacecraft, with the exhaust layer at `thrust` (0 to 1) opacity. */
export const Ship: React.FC<{p: Place; thrust?: number; opacity?: number}> = ({p, thrust = 0, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	return (
		<g opacity={opacity}>
			{thrust > 0.001 ? <LPlate spec={EXHAUST} p={p} opacity={thrust} /> : null}
			<LPlate spec={SHIP} p={p} />
		</g>
	);
};

/** A ruler-and-clock badge: a short ruler with ticks and a clock whose hand turns once per `turn` seconds of t. */
export const FrameBadge: React.FC<{x: number; y: number; color: string; label?: string; t?: number; turn?: number; scale?: number; opacity?: number; size?: number}> = ({x, y, color, label, t = 0, turn = 2, scale = 1, opacity = 1, size = 28}) => {
	if (opacity <= 0.001) return null;
	const a = (2 * Math.PI * t) / turn - Math.PI / 2;
	return (
		<g opacity={opacity} transform={`translate(${x} ${y}) scale(${scale})`}>
			<rect x={-8} y={-38} width={label ? 176 + label.length * size * 0.56 : 160} height={76} rx={14} fill="#fffdf8" stroke={color} strokeWidth={3} />
			<rect x={4} y={-10} width={84} height={20} rx={3} fill="#fffdf8" stroke={color} strokeWidth={3} />
			{Array.from({length: 7}, (_, i) => <line key={i} x1={8 + i * 12.6} y1={-10} x2={8 + i * 12.6} y2={i % 2 ? -2 : 3} stroke={color} strokeWidth={2.5} />)}
			<circle cx={120} cy={0} r={24} fill="#fffdf8" stroke={color} strokeWidth={3.5} />
			{[0, 1, 2, 3].map(k => <line key={k} x1={120 + 18 * Math.cos((k * Math.PI) / 2)} y1={18 * Math.sin((k * Math.PI) / 2)} x2={120 + 24 * Math.cos((k * Math.PI) / 2)} y2={24 * Math.sin((k * Math.PI) / 2)} stroke={color} strokeWidth={2.5} />)}
			<line x1={120} y1={0} x2={120 + 17 * Math.cos(a)} y2={17 * Math.sin(a)} stroke={color} strokeWidth={3.5} strokeLinecap="round" />
			<circle cx={120} cy={0} r={3.5} fill={color} />
			{label ? <text x={158} y={size * 0.36} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fill: color}}>{label}</text> : null}
		</g>
	);
};

/** Deterministic star dots in a box, shifted left by `offset` px (wrapping). */
export const Starfield: React.FC<{x: number; y: number; w: number; h: number; offset?: number; n?: number; opacity?: number; color?: string; streak?: number}> = ({x, y, w, h, offset = 0, n = 70, opacity = 1, color = '#8a8378', streak = 0}) => {
	if (opacity <= 0.001) return null;
	return (
		<g opacity={opacity}>
			{Array.from({length: n}, (_, i) => {
				const u = (Math.sin(i * 12.9898) * 43758.5453) % 1, v = (Math.sin(i * 78.233) * 12345.678) % 1;
				const px = x + ((((Math.abs(u) * w - offset) % w) + w) % w), py = y + Math.abs(v) * h, r = 1.6 + (i % 3);
				return streak > 0.5 ? <line key={i} x1={px} y1={py} x2={px + streak} y2={py} stroke={color} strokeWidth={r} strokeLinecap="round" /> : <circle key={i} cx={px} cy={py} r={r} fill={color} />;
			})}
		</g>
	);
};

/**
 * Michelson interferometer schematic centred on its splitter at c, arms of length L px (right and up before rotation),
 * rotated by deg. `out` and `back` (0 to 1) run the beams; `shrink` shortens the right arm by that fraction.
 */
export const Interferometer: React.FC<{c: Pt; L: number; deg?: number; out?: number; back?: number; shrink?: number; beam: string; color?: string; opacity?: number; detectorTo?: number}> = ({c, L, deg = 0, out = 0, back = 0, shrink = 0, beam, color = INK, opacity = 1, detectorTo = 0.55}) => {
	if (opacity <= 0.001) return null;
	const Lx = L * (1 - shrink), src = -L * 0.75, det = L * detectorTo;
	const seg = (x1: number, y1: number, x2: number, y2: number, u: number) => (u <= 0.001 ? null : <line x1={x1} y1={y1} x2={x1 + (x2 - x1) * Math.min(1, u)} y2={y1 + (y2 - y1) * Math.min(1, u)} stroke={beam} strokeWidth={6} strokeLinecap="round" />);
	const o1 = Math.min(1, out * 2), o2 = Math.max(0, out * 2 - 1);
	return (
		<g opacity={opacity} transform={`translate(${c[0]} ${c[1]}) rotate(${-deg})`}>
			{seg(src + 40, 0, 0, 0, o1)}
			{seg(0, 0, Lx - 8, 0, o2)}
			{seg(0, 0, 0, -L + 8, o2)}
			{seg(Lx - 8, 4, 0, 4, back)}
			{seg(4, -L + 8, 4, 0, back)}
			{seg(0, 6, 0, det - 30, Math.max(0, back * 2 - 1))}
			<rect x={src - 30} y={-26} width={70} height={52} rx={8} fill="#fffdf8" stroke={color} strokeWidth={4} />
			<line x1={-34} y1={34} x2={34} y2={-34} stroke={color} strokeWidth={7} />
			<line x1={Lx} y1={-44} x2={Lx} y2={44} stroke={color} strokeWidth={10} />
			<line x1={-44} y1={-L} x2={44} y2={-L} stroke={color} strokeWidth={10} />
			<rect x={-34} y={det - 30} width={68} height={44} rx={8} fill="#fffdf8" stroke={color} strokeWidth={4} />
		</g>
	);
};
/** Interferometer part positions (unrotated offsets from the splitter) for labels: source, mirrors, detector. */
export const ifoParts = (L: number, shrink = 0, detectorTo = 0.55) => ({source: [-L * 0.75, 0] as Pt, mirrorX: [L * (1 - shrink), 0] as Pt, mirrorY: [0, -L] as Pt, detector: [0, L * detectorTo] as Pt});

/** A light clock: two short horizontal mirrors h px apart (lower mirror centred at (x, y)) and a pulse at height u (0 to 1). */
export const LightClock: React.FC<{x: number; y: number; h: number; u?: number; w?: number; color?: string; pulse: string; opacity?: number; showPulse?: boolean}> = ({x, y, h, u = 0, w = 70, color = INK, pulse, opacity = 1, showPulse = true}) => {
	if (opacity <= 0.001) return null;
	return (
		<g opacity={opacity}>
			<line x1={x - w / 2} y1={y} x2={x + w / 2} y2={y} stroke={color} strokeWidth={7} strokeLinecap="round" />
			<line x1={x - w / 2} y1={y - h} x2={x + w / 2} y2={y - h} stroke={color} strokeWidth={7} strokeLinecap="round" />
			{showPulse ? <circle cx={x} cy={y - 8 - (h - 16) * u} r={9} fill={pulse} stroke="#fff" strokeWidth={2.5} /> : null}
		</g>
	);
};

/** A fringe strip: brightness across x from two waves (waves engine) whose phase difference shifts by `shift` fringes. */
export const FringeStrip: React.FC<{x: number; y: number; w: number; h: number; shift?: number; fringes?: number; color?: string; opacity?: number}> = ({x, y, w, h, shift = 0, fringes = 6, color = '#f2c14e', opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const N = 120, lam = 1;
	const cols = Array.from({length: N}, (_, i) => {
		const u = i / (N - 1);
		const phase = 2 * Math.PI * (u * fringes - shift);
		const waves: Wave[] = [{amplitude: 1, wavelength: lam, period: 1}, {amplitude: 1, wavelength: lam, period: 1, phase}];
		const a = sumAt(waves, 0, 0), b = sumAt(waves, 0, 0.25);
		return (a * a + b * b) / 4;
	});
	return (
		<g opacity={opacity}>
			<rect x={x} y={y} width={w} height={h} rx={6} fill="#1b1714" />
			{cols.map((I, i) => <rect key={i} x={x + (i * w) / N} y={y + 3} width={w / N + 0.6} height={h - 6} fill={color} opacity={I} />)}
			<rect x={x} y={y} width={w} height={h} rx={6} fill="none" stroke={INK} strokeWidth={3} />
		</g>
	);
};
