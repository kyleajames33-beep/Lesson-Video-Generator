// The whirling-bung apparatus (additive kit file, 24 November 2026; first used by phys-y12-m5-v15's handoff and
// phys-y12-m5-v16). Course-neutral: no lesson wording here. Painted plates at uniform scale only: retort stand,
// boss, the tube-and-clamp plate (tube top (860, 347), bottom (861, 930), rod left end (128, 637) from its
// sidecar), the rubber stopper as the bung, the clean paper clip (top (626.5, 178), bottom (626, 1076)) and the
// mass hanger. The hanger's slotted masses are restacked from cuts of the same plate (rod and top disc, a middle
// disc, the last disc and base), so the stack can show one to four masses without stretching anything.
// The string, the dashed circle in perspective and every arrow are coded.
import React from 'react';
import {staticFile} from 'remotion';
import {INK, INK_SOFT} from '../../shared/tokens';
import {Bench} from '../projectile/board';

const STAND_SRC = 'assets/physics/phys-y11-retort-stand-v1.png';
const BOSS_SRC = 'assets/physics/phys-y11-boss-crossbar-v1.png';
const CLAMP_SRC = 'assets/physics/y12p-tube-clamp-v1.png';
const BUNG_SRC = 'assets/chemistry/m5x-stopper-v1.png';
const CLIP_SRC = 'assets/physics/y12p-paper-clip-v1.png';
const HANGER_SRC = 'assets/physics/phys-y11-mass-hanger-v1.png';
export const BUNG_PLATES = [STAND_SRC, BOSS_SRC, CLAMP_SRC, BUNG_SRC, CLIP_SRC, HANGER_SRC];

const rad = (d: number) => (d * Math.PI) / 180;
/** Apparatus layout (px). tubeX/tubeTop: the top opening of the glass tube; L: string length out to the bung. */
export type BungLayout = {tubeX: number; tubeTop: number; benchY: number; L: number; tiltK: number; clampS: number; hangerS: number; bungD: number; benchLeft?: number; benchRight?: number};
export const BUNG_DEFAULT: BungLayout = {tubeX: 640, tubeTop: 400, benchY: 915, L: 340, tiltK: 0.28, clampS: 0.3, hangerS: 0.3, bungD: 56, benchLeft: 96, benchRight: 1250};

/** Droop angle below horizontal (degrees) for bung mass m and hanging mass M: sin(alpha) = m / M. */
export const droopDeg = (m: number, M: number) => (Math.asin(Math.min(1, m / M)) * 180) / Math.PI;

/** Positions of every part for droop `alpha` (degrees) and bung phase `phase` (radians; 0 = right-hand edge, pi/2 = near side). */
export const bungGeom = (lay: BungLayout, alpha: number, phase: number) => {
	const {tubeX, tubeTop, L, tiltK, clampS} = lay;
	const r = L * Math.cos(rad(alpha)), drop = L * Math.sin(rad(alpha));
	const c: [number, number] = [tubeX, tubeTop + drop];
	const bung: [number, number] = [c[0] + r * Math.cos(phase), c[1] + r * tiltK * Math.sin(phase)];
	const tubeBottom = tubeTop + (930 - 347) * clampS;
	const rodLeft = tubeX - (860 - 128) * clampS;
	const standX = rodLeft - 40;
	const rodY = tubeTop + (637 - 347) * clampS;
	const clipTop = tubeBottom + 8;
	const hookY = tubeBottom + 70;
	return {r, drop, c, bung, tubeBottom, rodLeft, standX, rodY, clipTop, hookY, top: [tubeX, tubeTop] as [number, number]};
};

/**
 * Hanger plate cuts (plate y ranges) for n = 1 to 4 slotted masses, as [y0, y1, top-on-screen offset]. The long
 * rod is shortened by cutting out plate rows 400 to 870 (a cut, not a stretch), so the hanger can be drawn larger.
 */
const CUT = 470;
const hangerPieces = (n: number): [number, number, number][] => {
	const H: [number, number, number] = [0, 400, 0];
	const A: [number, number, number] = [870, 1094, 400];
	const t = (y: number) => y - CUT;
	if (n <= 1) return [H, A, [1226, 1275, t(1094)]];
	if (n === 2) return [H, A, [1166, 1275, t(1094)]];
	if (n === 3) return [H, A, [1094, 1166, t(1094)], [1166, 1275, t(1166)]];
	return [H, A, [1094, 1166, t(1094)], [1094, 1166, t(1166)], [1166, 1275, t(1238)]];
};
/** Height of the hanger stack (plate px) from the top of the plate to the bottom of the base. */
export const hangerHeight = (n: number) => { const p = hangerPieces(n); const last = p[p.length - 1]; return last[2] + last[1] - last[0]; };
/** The mass hanger with n slotted masses, hung so its hook top sits at (x, y), drawn `s` times native size. */
export const Hanger: React.FC<{x: number; y: number; s: number; n: number; glow?: number}> = ({x, y, s, n, glow = 0}) => {
	const X = x - 300 * s, Y = y - 130 * s;
	const h = hangerHeight(n);
	return (
		<g>
			{glow > 0.01 ? <ellipse cx={x} cy={Y + (h - 100) * s} rx={170 * s} ry={(h - 560) * s * 0.6 + 30} fill="#f6c76b" opacity={0.55 * glow} /> : null}
			{hangerPieces(n).map(([y0, y1, top], i) => (
				<svg key={i} x={X} y={Y + top * s} width={600 * s} height={(y1 - y0) * s} viewBox={`0 ${y0} 600 ${y1 - y0}`} overflow="hidden">
					<image href={staticFile(HANGER_SRC)} x={0} y={0} width={600} height={1400} />
				</svg>
			))}
		</g>
	);
};
/** Bottom of the hanger (screen y) when its hook top is at y. */
export const hangerBottom = (y: number, s: number, n: number) => y - 130 * s + (hangerHeight(n) - 5) * s;

/** The bung (rubber stopper plate) centred at (x, y), `d` px wide. */
export const Bung: React.FC<{x: number; y: number; d: number; opacity?: number}> = ({x, y, d, opacity = 1}) => {
	const s = d / 860;
	return <image href={staticFile(BUNG_SRC)} x={x - 1002 * s} y={y - 1003 * s} width={2000 * s} height={2000 * s} opacity={opacity} />;
};
/** The paper clip, its top at (x, top), `len` px long. */
export const PaperClip: React.FC<{x: number; top: number; len: number; glow?: number}> = ({x, top, len, glow = 0}) => {
	const s = len / 898;
	return (
		<g>
			{glow > 0.01 ? <ellipse cx={x} cy={top + len / 2} rx={len * 0.45} ry={len * 0.7} fill="#9fc3e8" opacity={0.6 * glow} /> : null}
			<image href={staticFile(CLIP_SRC)} x={x - 626.5 * s} y={top - 178 * s} width={1254 * s} height={1254 * s} />
		</g>
	);
};

/**
 * The whole apparatus: bench, stand, boss, tube clamp, the string out to the bung (drooping at `alpha` below the
 * horizontal) and down through the tube past the paper clip to the hanger with `n` masses. `circle` draws the
 * bung's dashed path in perspective. `clipDrop` slides the clip down the string (marker drift).
 */
export const BungRig: React.FC<{lay?: BungLayout; alpha: number; phase: number; n: number; circle?: boolean; hangerGlow?: number; clipGlow?: number; bungGlow?: number; bench?: boolean; clipDrop?: number; stand?: boolean}> = ({lay = BUNG_DEFAULT, alpha, phase, n, circle = true, hangerGlow = 0, clipGlow = 0, bungGlow = 0, bench = true, clipDrop = 0, stand = true}) => {
	const g = bungGeom(lay, alpha, phase);
	const st = (lay.benchY - (lay.tubeTop - 70)) / (2183 - 216);
	const sb = 0.22;
	const far = Math.sin(phase) < 0; // the bung is on the far side of the circle
	const bungEl = (
		<g>
			{bungGlow > 0.01 ? <circle cx={g.bung[0]} cy={g.bung[1]} r={lay.bungD * 0.85} fill="#f6c76b" opacity={0.55 * bungGlow} /> : null}
			<line x1={g.top[0]} y1={g.top[1]} x2={g.bung[0]} y2={g.bung[1]} stroke={INK} strokeWidth={3} />
			<Bung x={g.bung[0]} y={g.bung[1]} d={lay.bungD} />
		</g>
	);
	return (
		<g>
			{bench ? <Bench edgeX={lay.benchRight ?? 1250} topY={lay.benchY} left={lay.benchLeft ?? 96} floorY={4000} legs={false} /> : null}
			{circle ? <ellipse cx={g.c[0]} cy={g.c[1]} rx={g.r} ry={g.r * lay.tiltK} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="12 9" /> : null}
			{far ? bungEl : null}
			{stand ? <image href={staticFile(STAND_SRC)} x={g.standX - 230 * st} y={lay.benchY - 2183 * st} width={600 * st} height={2400 * st} /> : null}
			<line x1={lay.tubeX} y1={lay.tubeTop} x2={lay.tubeX} y2={g.hookY + clipDrop} stroke={INK} strokeWidth={3} />
			<image href={staticFile(CLAMP_SRC)} x={lay.tubeX - 860 * lay.clampS} y={lay.tubeTop - 347 * lay.clampS} width={1254 * lay.clampS} height={1254 * lay.clampS} />
			{stand ? <image href={staticFile(BOSS_SRC)} x={g.standX - 269 * sb} y={g.rodY - 404 * sb} width={800 * sb} height={800 * sb} /> : null}
			<PaperClip x={lay.tubeX} top={g.clipTop + clipDrop} len={50} glow={clipGlow} />
			<Hanger x={lay.tubeX} y={g.hookY + clipDrop} s={lay.hangerS} n={n} glow={hangerGlow} />
			{far ? null : bungEl}
		</g>
	);
};
