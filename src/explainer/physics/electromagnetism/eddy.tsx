// Eddy-current and braking kit for Module 6 (additive kit file, 25 November 2026; first used by phys-y12-m6-v19's
// handoff and phys-y12-m6-v20). Course-neutral: every label, number and colour of meaning is passed in by the lesson.
// Painted plates are placed at uniform scale (never stretched); the rest is a coded HSC-style schematic:
//   - the copper pendulum (solid or slotted plate) hanging from the painted boss on a painted retort stand, swinging
//     about its pivot; a field region of crosses (B into the screen);
//   - eddy swirls (a closed loop with arrowheads and moving current dots, either sense);
//   - the upright copper tube (solid or slotted plate) with a coded cut-away window showing the painted magnet inside,
//     and eddy rings round the tube;
//   - the coaster car on a coded track with its fin in the painted brake rail (the rail's front row redrawn in front
//     of the fin, the hidden part of the fin dashed);
//   - the copper tube seen end on (a coded copper ring) with a curling electric field and current dots;
//   - plate specs for the desk fan (with its turning blades layer), the sailing dinghy and the metal sheet.
// Plate anchors (native pixels, from the delivered sidecars, brief 190 and Revision 3):
//   copper pendulum (1003 x 1568): pivot (501, 247), plate (351, 1020) to (653, 1305); slotted: pivot (501, 244),
//     plate (348, 1017) to (655, 1304);
//   neodymium magnet (1254 x 1254): box (239, 320) to (1025, 972), long axis (380, 840) to (934, 449): turned 55
//     degrees anticlockwise its axis stands upright; at 0.34 of the tube's scale it fits the bore;
//   copper tube and slotted tube (946 x 1663): outer box (392, 288) to (555, 1373), bore 137 wide at the top;
//   coaster car (1663 x 946): box (322, 221) to (1325, 789), fin (580, 645) to (1087, 789), wheels on y 707;
//   brake rail (2172 x 724): box (235, 218) to (1938, 565), channel opening along y 334 from x 435 to 1745, front face
//     about 100 deep;
//   sailing dinghy (887 x 1774): box (92, 404) to (793, 1420), waterline y 1350, sail centre (620, 865);
//   desk fan and its blades layer (1199 x 1312, one canvas): box (196, 110) to (924, 1207), hub (505, 505);
//   metal sheet (1536 x 1024): box (74, 95) to (1442, 944); boss: rod hole (269, 404), crossbar end ball (108, 400).
import React from 'react';
import {staticFile} from 'remotion';
import {FONT_DISPLAY} from '../../kit';
import {CARD, INK} from '../../shared/tokens';
import {Boss, Stand, placeOf} from './bench';
import type {Place} from './bench';
import {ArcArrow} from './induction-motor';

type Pt = [number, number];
type Spec = {src: string; W: number; H: number; box: readonly [number, number, number, number]};
const P = (name: string) => `assets/physics/${name}.png`;
const rad = (d: number) => (d * Math.PI) / 180;
export const PENDULUM: Spec = {src: P('y12p-copper-pendulum-v1'), W: 1003, H: 1568, box: [350, 221, 654, 1307]};
export const PENDULUM_SLOT: Spec = {src: P('y12p-copper-pendulum-slotted-v1'), W: 1003, H: 1568, box: [346, 212, 657, 1306]};
export const NEO: Spec = {src: P('y12p-neodymium-magnet-v1'), W: 1254, H: 1254, box: [239, 320, 1025, 972]};
export const TUBE: Spec = {src: P('y12p-copper-tube-v1'), W: 946, H: 1663, box: [392, 288, 555, 1373]};
export const TUBE_SLOT: Spec = {src: P('y12p-copper-tube-slotted-v1'), W: 946, H: 1663, box: [390, 287, 557, 1378]};
export const CAR: Spec = {src: P('y12p-coaster-car-v1'), W: 1663, H: 946, box: [322, 221, 1325, 789]};
export const RAIL: Spec = {src: P('y12p-coaster-brake-rail-v1'), W: 2172, H: 724, box: [235, 218, 1938, 565]};
export const DINGHY: Spec = {src: P('y12p-sailing-dinghy-v1'), W: 887, H: 1774, box: [92, 404, 793, 1420]};
export const FAN: Spec = {src: P('phys-y11-desk-fan-v1'), W: 1199, H: 1312, box: [196, 110, 924, 1207]};
export const FAN_BLADES_SRC = P('phys-y11-desk-fan-blades-v1');
export const METAL_SHEET: Spec = {src: P('phys-y11-metal-plate-v1'), W: 1536, H: 1024, box: [74, 95, 1442, 944]};
export const EDDY_PLATES = [PENDULUM, PENDULUM_SLOT, NEO, TUBE, TUBE_SLOT, CAR, RAIL, DINGHY, FAN, METAL_SHEET].map(s => s.src).concat([FAN_BLADES_SRC]);
export const DINGHY_ANCHOR = {waterY: 1350, sail: [620, 865] as Pt};
const img = (spec: Spec, ix: number, iy: number, s: number) => <image href={staticFile(spec.src)} x={ix} y={iy} width={spec.W * s} height={spec.H * s} />;

// ---------------------------------------------------------------- the pendulum
const PIV = {solid: [501, 247] as Pt, slot: [501, 244] as Pt};
const PLATE_C: Pt = [502, 1162];
/** Screen geometry of a pendulum hung at pivot (px, py), scale s, swung `deg` (positive: the plate moves right). */
export const pendGeom = (px: number, py: number, s: number, deg: number) => {
	const L = (PLATE_C[1] - PIV.solid[1]) * s;
	const c: Pt = [px + L * Math.sin(rad(deg)), py + L * Math.cos(rad(deg))];
	return {L, c, hw: 151 * s, hh: 142 * s, s};
};
/** The copper pendulum (solid or slotted) hung at (px, py) by its pivot, scale s, swung `deg`. */
export const Pendulum: React.FC<{px: number; py: number; s: number; deg: number; slotted?: boolean; opacity?: number; tint?: number; tintColor?: string}> = ({px, py, s, deg, slotted = false, opacity = 1, tint = 0, tintColor = '#d8452f'}) => {
	if (opacity <= 0.001) return null;
	const spec = slotted ? PENDULUM_SLOT : PENDULUM;
	const pv = slotted ? PIV.slot : PIV.solid;
	const g = pendGeom(px, py, s, deg);
	return (
		<g opacity={opacity} transform={`rotate(${-deg} ${px} ${py})`}>
			{img(spec, px - pv[0] * s, py - pv[1] * s, s)}
			{tint > 0.001 ? <rect x={px - g.hw} y={py + g.L - g.hh} width={2 * g.hw} height={2 * g.hh} fill={tintColor} opacity={0.32 * tint} /> : null}
		</g>
	);
};
/** The painted stand and boss holding a pivot at (px, py): the rod `side` px to the right (negative: to the left). */
export const PivotStand: React.FC<{px: number; py: number; bossW: number; baseY: number; opacity?: number}> = ({px, py, bossW, baseY, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const s = bossW / 656;
	const rodX = px + (269 - 108) * s;
	const top = py - 50;
	return (
		<g opacity={opacity}>
			<Stand rodX={rodX} baseY={baseY} height={baseY - top} />
			<Boss x={rodX} y={py} w={bossW} />
		</g>
	);
};
/** A field region of crosses (B into the screen). */
export const FieldRegion: React.FC<{x: number; y: number; w: number; h: number; color: string; step?: number; opacity?: number; fill?: string; size?: number}> = ({x, y, w, h, color, step = 56, opacity = 1, fill = '#e3e7ec', size = 11}) => {
	if (opacity <= 0.001) return null;
	const nx = Math.max(1, Math.round(w / step)), ny = Math.max(1, Math.round(h / step));
	const dx = w / nx, dy = h / ny;
	return (
		<g opacity={opacity}>
			<rect x={x} y={y} width={w} height={h} rx={10} fill={fill} fillOpacity={0.55} stroke={color} strokeWidth={4} strokeDasharray="16 10" />
			{Array.from({length: nx * ny}, (_, i) => { const cx = x + dx * ((i % nx) + 0.5), cy = y + dy * (Math.floor(i / nx) + 0.5); return <path key={i} d={`M${cx - size},${cy - size} L${cx + size},${cy + size} M${cx + size},${cy - size} L${cx - size},${cy + size}`} stroke={color} strokeWidth={4} strokeLinecap="round" />; })}
		</g>
	);
};
/** A field region of dots (B out of the screen), round or square. */
export const DotField: React.FC<{cx: number; cy: number; r: number; color: string; step?: number; opacity?: number}> = ({cx, cy, r, color, step = 50, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const out: Pt[] = [];
	for (let y = -r; y <= r; y += step) for (let x = -r; x <= r; x += step) if (Math.hypot(x, y) < r - 14) out.push([cx + x, cy + y]);
	return <g opacity={opacity}>{out.map((p, i) => <g key={i}><circle cx={p[0]} cy={p[1]} r={11} fill="none" stroke={color} strokeWidth={3.5} /><circle cx={p[0]} cy={p[1]} r={4} fill={color} /></g>)}</g>;
};

// ---------------------------------------------------------------- eddy swirls
/** A closed swirl: an ellipse with two arrowheads and current dots, `sense` 1 anticlockwise, -1 clockwise (screen). */
export const Swirl: React.FC<{cx: number; cy: number; rx: number; ry: number; sense: 1 | -1; color: string; phase?: number; opacity?: number; width?: number; dots?: number}> = ({cx, cy, rx, ry, sense, color, phase = 0, opacity = 1, width = 6, dots = 1}) => {
	if (opacity <= 0.001) return null;
	const at = (t: number): Pt => [cx + rx * Math.cos(t), cy - ry * Math.sin(t)];
	const head = (t: number) => {
		const p = at(t);
		const d: Pt = [-rx * Math.sin(t) * sense, -ry * Math.cos(t) * sense];
		const L = Math.hypot(d[0], d[1]) || 1;
		const u: Pt = [d[0] / L, d[1] / L], n: Pt = [u[1], -u[0]];
		const h = 18 + width;
		return `M${p[0] + u[0] * h * 0.6},${p[1] + u[1] * h * 0.6} L${p[0] - u[0] * h * 0.5 + n[0] * h * 0.55},${p[1] - u[1] * h * 0.5 + n[1] * h * 0.55} L${p[0] - u[0] * h * 0.5 - n[0] * h * 0.55},${p[1] - u[1] * h * 0.5 - n[1] * h * 0.55} Z`;
	};
	const nd = Math.max(3, Math.round((rx + ry) / 22));
	return (
		<g opacity={opacity}>
			<ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="none" stroke={color} strokeWidth={width} />
			<path d={head(Math.PI / 2)} fill={color} />
			<path d={head((3 * Math.PI) / 2)} fill={color} />
			{dots > 0.001 ? Array.from({length: nd}, (_, i) => { const t = (2 * Math.PI * i) / nd + sense * phase; const p = at(t); return <circle key={i} cx={p[0]} cy={p[1]} r={width * 0.9} fill={CARD} stroke={color} strokeWidth={3} opacity={dots} />; }) : null}
		</g>
	);
};

// ---------------------------------------------------------------- the tube with a cut-away window
export const tubeGeom = (p: Place, slotted = false) => {
	const g = placeOf(slotted ? TUBE_SLOT : TUBE, p);
	const top = g.at(473, 300)[1], bot = g.at(473, 1365)[1];
	return {...g, cx: g.at(473, 0)[0], top, bot, halfW: (163 / 2) * g.s, bore: 137 * g.s};
};
/**
 * An upright tube plate with a coded cut-away window (from `win0` to `win1` of its length) through which the magnet
 * shows at `my` (screen y of the magnet's centre). `magnet` 0 hides it. Rings: [y, sense, opacity] eddy rings.
 */
export const CutTube: React.FC<{p: Place; slotted?: boolean; my?: number; magnet?: number; win?: number; win0?: number; win1?: number; ringColor?: string; rings?: readonly (readonly [number, 1 | -1, number, boolean?])[]; id: string; opacity?: number}> = ({p, slotted = false, my, magnet = 1, win = 1, win0 = 0.06, win1 = 0.96, ringColor = '#c04a7a', rings = [], id, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const spec = slotted ? TUBE_SLOT : TUBE;
	const g = tubeGeom(p, slotted);
	const wx = g.cx - g.bore * 0.42, ww = g.bore * 0.84;
	const wy = g.top + (g.bot - g.top) * win0, wh = (g.bot - g.top) * (win1 - win0);
	const ms = g.s * 0.34;
	return (
		<g opacity={opacity}>
			{img(spec, g.ix, g.iy, g.s)}
			{win > 0.001 ? <g opacity={win}>
				<rect x={wx} y={wy} width={ww} height={wh} rx={6} fill="#3a2a22" />
				<clipPath id={`${id}-clip`}><rect x={wx} y={wy} width={ww} height={wh} rx={6} /></clipPath>
				{my !== undefined && magnet > 0.001 ? <g clipPath={`url(#${id}-clip)`} opacity={magnet}>
					<g transform={`rotate(-55 ${g.cx} ${my})`}>{img(NEO, g.cx - 632 * ms, my - 646 * ms, ms)}</g>
				</g> : null}
				<rect x={wx} y={wy} width={ww} height={wh} rx={6} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="10 7" />
			</g> : null}
			{rings.map(([y, sense, o, broken], i) => o > 0.001 ? <TubeRing key={i} cx={g.cx} y={y} rx={g.halfW + 16} sense={sense} color={ringColor} opacity={o} broken={broken} /> : null)}
		</g>
	);
};
/** An eddy ring round an upright tube at height y; the front arrow shows `sense` (1: left to right across the front). */
export const TubeRing: React.FC<{cx: number; y: number; rx: number; sense: 1 | -1; color: string; opacity?: number; broken?: boolean}> = ({cx, y, rx, sense, color, opacity = 1, broken = false}) => {
	const ry = rx * 0.28;
	const hx = cx + sense * 10;
	return (
		<g opacity={opacity}>
			<path d={`M${cx - rx},${y} A${rx},${ry} 0 0 1 ${cx + rx},${y}`} fill="none" stroke={color} strokeWidth={4} strokeDasharray="8 7" />
			<path d={broken ? `M${cx - rx},${y} A${rx},${ry} 0 0 0 ${cx - 14},${y + ry * 0.99} M${cx + 14},${y + ry * 0.99} A${rx},${ry} 0 0 0 ${cx + rx},${y}` : `M${cx - rx},${y} A${rx},${ry} 0 0 0 ${cx + rx},${y}`} fill="none" stroke={color} strokeWidth={6} />
			{broken ? null : <path d={`M${hx + sense * 16},${y + ry} L${hx - sense * 8},${y + ry - 11} L${hx - sense * 8},${y + ry + 11} Z`} fill={color} />}
		</g>
	);
};

// ---------------------------------------------------------------- the coaster on the brake rail
/** Geometry: the car by its visible left x, wheel line y and visible width; the rail by its visible left x and width. */
export const coasterGeom = (carX: number, wheelY: number, carW: number, railX: number, railW: number) => {
	const s = carW / (CAR.box[2] - CAR.box[0]);
	const ix = carX - CAR.box[0] * s, iy = wheelY - 707 * s;
	const sr = railW / (RAIL.box[2] - RAIL.box[0]);
	const rix = railX - RAIL.box[0] * sr, riy = wheelY - 334 * sr;
	const at = (nx: number, ny: number): Pt => [ix + nx * s, iy + ny * s];
	return {s, ix, iy, sr, rix, riy, fin: {x0: at(580, 645)[0], y0: at(580, 645)[1], x1: at(1087, 789)[0], y1: at(1087, 789)[1]}, chan: {x0: rix + 435 * sr, x1: rix + 1745 * sr, y: wheelY, face: 100 * sr}, at};
};
/** The car on a coded track with its fin in the rail; the rail's front row is redrawn in front and the hidden fin dashed. */
export const CoasterBrake: React.FC<{carX: number; wheelY: number; carW: number; railX: number; railW: number; finTint?: number; tintColor?: string; id: string; track?: readonly [number, number]; children?: React.ReactNode}> = ({carX, wheelY, carW, railX, railW, finTint = 0, tintColor = '#d8452f', id, track = [0, 1920], children}) => {
	const g = coasterGeom(carX, wheelY, carW, railX, railW);
	const frontTop = g.riy + 340 * g.sr;
	return (
		<g>
			<line x1={track[0]} y1={wheelY + 4} x2={track[1]} y2={wheelY + 4} stroke="#6f6a62" strokeWidth={8} />
			{img(RAIL, g.rix, g.riy, g.sr)}
			{img(CAR, g.ix, g.iy, g.s)}
			{finTint > 0.001 ? <rect x={g.fin.x0} y={g.fin.y0} width={g.fin.x1 - g.fin.x0} height={g.fin.y1 - g.fin.y0} fill={tintColor} opacity={0.4 * finTint} /> : null}
			{children}
			<clipPath id={`${id}-front`}><rect x={g.rix + RAIL.box[0] * g.sr} y={frontTop} width={(RAIL.box[2] - RAIL.box[0]) * g.sr} height={(RAIL.box[3] - 340) * g.sr} /></clipPath>
			<g clipPath={`url(#${id}-front)`}>{img(RAIL, g.rix, g.riy, g.sr)}</g>
			{(() => { const x0 = Math.max(g.fin.x0, g.chan.x0), x1 = Math.min(g.fin.x1, g.chan.x1); return x1 > x0 + 4 ? <rect x={x0} y={frontTop} width={x1 - x0} height={g.fin.y1 - frontTop} fill="none" stroke="#b8642a" strokeWidth={4} strokeDasharray="12 8" /> : null; })()}
		</g>
	);
};

// ---------------------------------------------------------------- the tube end on, with a curling electric field
/** The copper tube end on (a coded copper ring) with B dots inside, blue curling E arrows and current dots. */
export const CurlRing: React.FC<{cx: number; cy: number; r: number; bColor: string; eColor: string; iColor: string; b?: number; e?: number; i?: number; phase?: number; opacity?: number}> = ({cx, cy, r, bColor, eColor, iColor, b = 1, e = 0, i = 0, phase = 0, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const nd = 14;
	return (
		<g opacity={opacity}>
			<circle cx={cx} cy={cy} r={r} fill="#fbf3ea" stroke="#b8642a" strokeWidth={30} />
			<circle cx={cx} cy={cy} r={r + 15} fill="none" stroke="#8a4f1c" strokeWidth={3} />
			<circle cx={cx} cy={cy} r={r - 15} fill="none" stroke="#8a4f1c" strokeWidth={3} />
			<DotField cx={cx} cy={cy} r={r * 0.5} color={bColor} step={46} opacity={b} />
			{e > 0.001 ? <g opacity={e}>{[0, 120, 240].map(a => <ArcArrow key={a} cx={cx} cy={cy} r={r * 0.74} a0={a + 10 + phase} a1={a + 100 + phase} color={eColor} width={7} head={24} />)}</g> : null}
			{i > 0.001 ? <g opacity={i}>{Array.from({length: nd}, (_, k) => { const t = rad((360 / nd) * k + phase * 1.5); return <circle key={k} cx={cx + r * Math.cos(t)} cy={cy - r * Math.sin(t)} r={8} fill={CARD} stroke={iColor} strokeWidth={4} />; })}</g> : null}
		</g>
	);
};
/** A chain of linked loops (alternately `a` and `b` colour) drifting right by `shift`. */
export const LinkedLoops: React.FC<{x: number; y: number; n?: number; a: string; b: string; shift?: number; opacity?: number; w?: number}> = ({x, y, n = 6, a, b, shift = 0, opacity = 1, w = 70}) => {
	if (opacity <= 0.001) return null;
	return (
		<g opacity={opacity}>
			{Array.from({length: n}, (_, k) => { const cx = x + shift + k * w * 0.8; const vert = k % 2 === 0; return <ellipse key={k} cx={cx} cy={y} rx={vert ? w * 0.32 : w * 0.55} ry={vert ? w * 0.55 : w * 0.3} fill="none" stroke={vert ? a : b} strokeWidth={5} opacity={1 - k * 0.08} />; })}
		</g>
	);
};

// ---------------------------------------------------------------- the desk fan and the dinghy
/** The desk fan with its blades layer turned `deg` about the hub (the blades sit behind the guard). */
export const DeskFan: React.FC<{p: Place; deg: number; opacity?: number}> = ({p, deg, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const g = placeOf(FAN, p);
	const hub = g.at(505, 505);
	return (
		<g opacity={opacity}>
			<g transform={`rotate(${deg} ${hub[0]} ${hub[1]})`}><image href={staticFile(FAN_BLADES_SRC)} x={g.ix} y={g.iy} width={FAN.W * g.s} height={FAN.H * g.s} /></g>
			{img(FAN, g.ix, g.iy, g.s)}
		</g>
	);
};
/** The dinghy placed by its waterline: left x of its visible box, waterline y and visible height. */
export const dinghyGeom = (x: number, waterY: number, h: number) => {
	const s = h / (DINGHY.box[3] - DINGHY.box[1]);
	const ix = x - DINGHY.box[0] * s, iy = waterY - DINGHY_ANCHOR.waterY * s;
	return {s, ix, iy, sail: [ix + DINGHY_ANCHOR.sail[0] * s, iy + DINGHY_ANCHOR.sail[1] * s] as Pt, w: (DINGHY.box[2] - DINGHY.box[0]) * s, top: iy + DINGHY.box[1] * s};
};
export const Dinghy: React.FC<{x: number; waterY: number; h: number; opacity?: number}> = ({x, waterY, h, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const g = dinghyGeom(x, waterY, h);
	return <g opacity={opacity}>{img(DINGHY, g.ix, g.iy, g.s)}</g>;
};
/** Small SVG text helper in the display face with a paper halo. */
export const SvgLabel: React.FC<{x: number; y: number; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'; children: React.ReactNode; opacity?: number}> = ({x, y, size = 30, color = INK, anchor = 'start', children, opacity = 1}) => (
	<text x={x} y={y} textAnchor={anchor} opacity={opacity} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fill: color, paintOrder: 'stroke', stroke: CARD, strokeWidth: 7, strokeLinejoin: 'round'} as React.CSSProperties}>{children}</text>
);
/** The painted magnet stood upright (turned 55 degrees) with its centre at (cx, cy), scale s (about 0.34 of a tube's). */
export const UprightMagnet: React.FC<{cx: number; cy: number; s: number; opacity?: number}> = ({cx, cy, s, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	return <g opacity={opacity} transform={`rotate(-55 ${cx} ${cy})`}>{img(NEO, cx - 632 * s, cy - 646 * s, s)}</g>;
};
/** Half the height of the upright magnet at scale s (screen px). */
export const magnetHalfH = (s: number) => 439 * s;
