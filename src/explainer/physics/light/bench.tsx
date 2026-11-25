// Optical bench kit for Module 7 (additive kit file, 25 November 2026; first used by phys-y12-m7-v05 and v06).
// Course-neutral: colours, slit sizes and patterns come from the lesson.
// The painted optical bench with three carriers at one uniform scale (brief 191 bench fit,
// docs/production/claude-pm/assets/brief191-qa/bench-fit.json): the laser module, the slide holder and the screen
// carrier. The bench-fit record found the laser aperture lower than the slide window and screen, so the whole laser
// plate is lifted on a short coded bench block in the bench's grey (never stretched).
// Visible boxes measured from the alpha channel (threshold 20) on 25 November 2026; anchors read the same day:
//   optical bench (2172 x 724): rail top y 312;
//   laser module (1774 x 887): aperture (1100, 318) facing right, carrier foot line y 720;
//   slide holder (1113 x 1413): clear window (485, 354) to (599, 586), centre (542, 470), foot line y 1152;
//   screen carrier (1199 x 1312): screen card about x 572 to 627, y 243 to 581, centre (600, 412), foot line y 1119;
//   ripple tank (1312 x 1199) and metre rule (2172 x 724, top edge y 319 from x 349 to 1823).
// - OpticsBench: bench, block, laser, beam, slide holder with a coded slide (single slit, double slit, a hair, a
//   ruled grating or clear), screen carrier.
// - ScreenView: a face-on view of the screen: bands in the light's true colour from a brightness function.
// - PatternGraph: brightness against position (or angle) as a curve.
import React from 'react';
import {INK} from '../../shared/tokens';
import {LASER, LPlate, placeByAnchor} from './plates';
import type {LightSpec, Place} from './plates';

type Pt = [number, number];
const P = (name: string) => `assets/physics/${name}.png`;
export const BENCH: LightSpec = {src: P('phys-y11-optical-bench-v1'), W: 2172, H: 724, box: [119, 310, 2053, 493]};
export const HOLDER: LightSpec = {src: P('y12p-slide-holder-v1'), W: 1113, H: 1413, box: [107, 257, 1006, 1152]};
export const SCREEN_CARRIER: LightSpec = {src: P('phys-y11-screen-carrier-v1'), W: 1199, H: 1312, box: [134, 219, 1061, 1119]};
export const RIPPLE: LightSpec = {src: P('phys-y11-ripple-tank-v1'), W: 1312, H: 1199, box: [155, 110, 1147, 1113]};
export const METRE_RULE: LightSpec = {src: P('phys-y11-metre-rule-v1'), W: 2172, H: 724, box: [317, 317, 1855, 406]};
export const BENCH_PLATES = [BENCH, HOLDER, SCREEN_CARRIER, RIPPLE, METRE_RULE, LASER].map(s => s.src);
export const BENCH_ANCHOR = {railY: 312, laserAp: [1100, 318], laserFoot: 720, win: [485, 354, 599, 586], winC: [542, 470], holderFoot: 1152, screenC: [600, 412], screenCard: [572, 243, 627, 581], screenFoot: 1119} as const;
/** Bench-fit uniform scales (brief 191) for one carrier scale unit g = 1. */
const FIT = {laser: 0.17193, holder: 0.22759, screen: 0.22};
export const BENCH_GREY = '#8f9196';

/** Bench layout: the bench's visible box (x, y, w), a carrier scale g, and the screen x of the laser aperture, the slit
 * (window centre) and the screen card centre. */
export type BenchAt = {x: number; y: number; w: number; g: number; ap: number; slit: number; scr: number};
export const benchGeom = (b: BenchAt) => {
	const sb = b.w / (BENCH.box[2] - BENCH.box[0]);
	const railY = b.y + (BENCH_ANCHOR.railY - BENCH.box[1]) * sb;
	const sH = FIT.holder * b.g, sL = FIT.laser * b.g, sS = FIT.screen * b.g;
	const beamY = railY - (BENCH_ANCHOR.holderFoot - BENCH_ANCHOR.winC[1]) * sH;
	const laser = placeByAnchor(LASER, BENCH_ANCHOR.laserAp[0], BENCH_ANCHOR.laserAp[1], b.ap, beamY, (LASER.box[2] - LASER.box[0]) * sL);
	const holder = placeByAnchor(HOLDER, BENCH_ANCHOR.winC[0], BENCH_ANCHOR.winC[1], b.slit, beamY, (HOLDER.box[2] - HOLDER.box[0]) * sH);
	const screen = placeByAnchor(SCREEN_CARRIER, BENCH_ANCHOR.screenC[0], BENCH_ANCHOR.screenC[1], b.scr, beamY, (SCREEN_CARRIER.box[2] - SCREEN_CARRIER.box[0]) * sS);
	const laserFootY = beamY + (BENCH_ANCHOR.laserFoot - BENCH_ANCHOR.laserAp[1]) * sL;
	const lx = (nx: number) => laser.x + (nx - LASER.box[0]) * sL;
	const hx = (nx: number) => holder.x + (nx - HOLDER.box[0]) * sH, hy = (ny: number) => holder.y + (ny - HOLDER.box[1]) * sH;
	const sx = (nx: number) => screen.x + (nx - SCREEN_CARRIER.box[0]) * sS, sy = (ny: number) => screen.y + (ny - SCREEN_CARRIER.box[1]) * sS;
	const W = BENCH_ANCHOR.win, C = BENCH_ANCHOR.screenCard;
	return {
		bench: {x: b.x, y: b.y, w: b.w} as Place, railY, beamY, laser, holder, screen,
		block: {x: lx(330), y: laserFootY - 4, w: lx(1440) - lx(330), h: railY - laserFootY + 4},
		aperture: [b.ap, beamY] as Pt,
		window: {x: hx(W[0]), y: hy(W[1]), w: hx(W[2]) - hx(W[0]), h: hy(W[3]) - hy(W[1])},
		slitC: [b.slit, beamY] as Pt,
		card: {x: sx(C[0]), y: sy(C[1]), w: sx(C[2]) - sx(C[0]), h: sy(C[3]) - sy(C[1])},
		screenC: [b.scr, beamY] as Pt,
	};
};
export type BenchGeom = ReturnType<typeof benchGeom>;

export type SlideKind = 'clear' | 'single' | 'double' | 'hair' | 'grating' | 'none';
/** The coded slide in the holder's clear window: dark card with the opening(s) drawn light. `gap` and `sep` in px. */
export const CodedSlide: React.FC<{win: BenchGeom['window']; kind: SlideKind; gap?: number; sep?: number; lit?: string; opacity?: number}> = ({win, kind, gap = 4, sep = 12, lit = '#f4efe3', opacity = 1}) => {
	if (kind === 'none' || opacity <= 0.001) return null;
	const cx = win.x + win.w / 2;
	const dark = '#34322f';
	return (
		<g opacity={opacity}>
			<rect x={win.x} y={win.y} width={win.w} height={win.h} fill={kind === 'clear' || kind === 'hair' ? '#eef3f5' : dark} />
			{kind === 'single' ? <rect x={cx - gap / 2} y={win.y + 4} width={gap} height={win.h - 8} fill={lit} /> : null}
			{kind === 'double' ? [-1, 1].map(s => <rect key={s} x={cx + (s * sep) / 2 - gap / 2} y={win.y + 4} width={gap} height={win.h - 8} fill={lit} />) : null}
			{kind === 'hair' ? <line x1={cx} y1={win.y} x2={cx} y2={win.y + win.h} stroke={dark} strokeWidth={Math.max(1.5, gap)} /> : null}
			{kind === 'grating' ? Array.from({length: Math.max(2, Math.floor(win.w / Math.max(2, sep)))}, (_, i) => <line key={i} x1={win.x + 2 + i * sep} y1={win.y + 3} x2={win.x + 2 + i * sep} y2={win.y + win.h - 3} stroke={lit} strokeWidth={Math.max(0.8, gap)} />) : null}
		</g>
	);
};

/** The bench, block, laser, beam, slide holder (with a coded slide) and screen carrier. `beam` 0 to 1 draws the beam
 * from the aperture; `spread` is the half-width (px) of the light fan at the screen card. */
export const OpticsBench: React.FC<{b: BenchAt; beam?: number; color?: string; spread?: number; slide?: SlideKind; gap?: number; sep?: number; laser?: boolean; holder?: boolean; screen?: boolean; opacity?: number; children?: React.ReactNode}> = ({b, beam = 1, color = '#d8312c', spread = 6, slide = 'single', gap, sep, laser = true, holder = true, screen = true, opacity = 1, children}) => {
	if (opacity <= 0.001) return null;
	const g = benchGeom(b);
	const u = Math.max(0, Math.min(1, beam));
	const L1 = g.slitC[0] - g.aperture[0], L2 = g.screenC[0] - g.slitC[0];
	const d = u * (L1 + L2);
	const x1 = g.aperture[0] + Math.min(d, L1), x2 = g.slitC[0] + Math.max(0, d - L1);
	const k = L2 > 0 ? (x2 - g.slitC[0]) / L2 : 0;
	return (
		<g opacity={opacity}>
			<LPlate spec={BENCH} p={g.bench} />
			{laser ? <rect x={g.block.x} y={g.block.y} width={g.block.w} height={g.block.h} rx={4} fill={BENCH_GREY} stroke="#5c5e63" strokeWidth={2.5} /> : null}
			{laser ? <LPlate spec={LASER} p={g.laser} /> : null}
			{u > 0.001 && laser ? <line x1={g.aperture[0]} y1={g.beamY} x2={x1} y2={g.beamY} stroke={color} strokeWidth={4} strokeLinecap="round" /> : null}
			{d > L1 && holder ? <path d={`M${g.slitC[0]},${g.beamY - 2} L${x2},${g.beamY - spread * k} L${x2},${g.beamY + spread * k} L${g.slitC[0]},${g.beamY + 2} Z`} fill={color} opacity={0.45} /> : null}
			{d > L1 && holder ? <line x1={g.slitC[0]} y1={g.beamY} x2={x2} y2={g.beamY} stroke={color} strokeWidth={3} /> : null}
			{holder ? <LPlate spec={HOLDER} p={g.holder} /> : null}
			{holder ? <CodedSlide win={g.window} kind={slide} gap={gap} sep={sep} /> : null}
			{screen ? <LPlate spec={SCREEN_CARRIER} p={g.screen} /> : null}
			{children}
		</g>
	);
};

/** A face-on view of the screen: a dark card with bands in the light's colour. `bright(u)` gives 0 to 1 brightness at
 * u from -1 (left edge) to 1 (right edge). */
export const ScreenView: React.FC<{x: number; y: number; w: number; h: number; bright: (u: number) => number; color: string; n?: number; opacity?: number; frame?: string; gamma?: number}> = ({x, y, w, h, bright, color, n = 160, opacity = 1, frame = INK, gamma = 0.7}) => {
	if (opacity <= 0.001) return null;
	return (
		<g opacity={opacity}>
			<rect x={x} y={y} width={w} height={h} rx={8} fill="#171412" />
			{Array.from({length: n}, (_, i) => {
				const u = -1 + (2 * (i + 0.5)) / n;
				const v = Math.max(0, Math.min(1, bright(u)));
				return v < 0.01 ? null : <rect key={i} x={x + (w * i) / n} y={y + 4} width={w / n + 0.8} height={h - 8} fill={color} opacity={Math.pow(v, gamma)} />;
			})}
			<rect x={x} y={y} width={w} height={h} rx={8} fill="none" stroke={frame} strokeWidth={3} />
		</g>
	);
};

/** Brightness against position: a curve over u from -1 to 1 drawn in a box (baseline at the bottom). */
export const PatternGraph: React.FC<{x: number; y: number; w: number; h: number; fn: (u: number) => number; color: string; n?: number; dashed?: boolean; draw?: number; axis?: boolean; width?: number; opacity?: number; fill?: boolean}> = ({x, y, w, h, fn, color, n = 240, dashed = false, draw = 1, axis = true, width = 4, opacity = 1, fill = false}) => {
	if (opacity <= 0.001) return null;
	const m = Math.max(2, Math.round(n * Math.max(0, Math.min(1, draw))));
	const pts = Array.from({length: m}, (_, i) => { const u = -1 + (2 * i) / (n - 1); return [x + ((u + 1) / 2) * w, y + h - h * Math.max(0, Math.min(1, fn(u)))] as Pt; });
	const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
	return (
		<g opacity={opacity}>
			{axis ? <line x1={x} y1={y + h} x2={x + w} y2={y + h} stroke={INK} strokeWidth={3} /> : null}
			{fill ? <path d={`${d} L${pts[pts.length - 1][0]},${y + h} L${pts[0][0]},${y + h} Z`} fill={color} opacity={0.18} /> : null}
			<path d={d} fill="none" stroke={color} strokeWidth={width} strokeDasharray={dashed ? '10 8' : undefined} strokeLinejoin="round" />
		</g>
	);
};
