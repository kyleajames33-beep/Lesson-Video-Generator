// Lesson parts for phys-y12-m5-v19: the rooftop (the painted house with the painted roof dish placed by their
// sidecar anchors), the polar-view sync diagram (a coded top-down Earth disc seen from above the North Pole, a
// ground marker, satellites on circles), the side view (the painted Earth with its equator and a tilted orbit
// ring projected from 3D), and the shared v17/v18 parts (satellite, Earth, stages, number formats).
// Colour key (design, root decisions 2 and 10; Revision 2): velocity teal, r navy, altitude grey (full
// opacity), Earth's rotation grey, the equator a dashed grey line, orbit planes navy, answers in dark-ink
// frames, mistakes slate (root rule R1).
import React from 'react';
import {staticFile} from 'remotion';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import {EARTH_SRC} from '../phys-y12-m5-v16/parts';
import {AMBER, AUS, DashCircle, Earth, GREY, Lbl, NAVY, Ring, Satellite, SLATE, T, TEAL, VIOLET, comma, fx, polar, sci, txt} from '../phys-y12-m5-v17/parts';
import {SAT_SRC} from '../phys-y12-m5-v17/parts';
import {RunTrail, VecArrow, rPx, toPx} from '../phys-y12-m5-v18/parts';
import type {Stage} from '../phys-y12-m5-v18/parts';

export {AMBER, AUS, DashCircle, Earth, GREY, Lbl, NAVY, Ring, RunTrail, Satellite, SLATE, T, TEAL, VIOLET, VecArrow, comma, fx, polar, rPx, sci, toPx, txt};
export type {Stage};
export const HOUSE_SRC = 'assets/physics/phys-y11-house-v1.png';
export const DISH_SRC = 'assets/physics/y12p-roof-dish-v1.png';
export const V19_PLATES = [EARTH_SRC, SAT_SRC, HOUSE_SRC, DISH_SRC];

// ---------------------------------------------------------------- the rooftop
/** The house plate (1774 x 887; ground contact line y = 782) placed with its image left edge at x and its
 * ground line at groundY, scale s. `pt` maps a native plate point to the screen. */
export const houseGeom = (x: number, groundY: number, s: number) => {
	const y = groundY - 782 * s;
	return {x, y, s, pt: (nx: number, ny: number): [number, number] => [x + nx * s, y + ny * s]};
};
export const House: React.FC<{x: number; groundY: number; s: number}> = ({x, groundY, s}) => {
	const g = houseGeom(x, groundY, s);
	return <image href={staticFile(HOUSE_SRC)} x={g.x} y={g.y} width={1774 * s} height={887 * s} />;
};
/** A point on the right hip of the house roof (native (1330, 200), measured on the plate). */
export const ROOF_PT: [number, number] = [1330, 200];
/** The roof dish plate (1254 square) by its base bottom centre (native (449, 1087)) at scale s.
 * Its aim axis runs from native (605, 501) towards (925, 181): 45 degrees up to the right. */
export const dishGeom = (bx: number, by: number, s: number) => {
	const x = bx - 449 * s, y = by - 1087 * s;
	return {x, y, s, aim: [x + 605 * s, y + 501 * s] as [number, number], dir: [Math.SQRT1_2, -Math.SQRT1_2] as [number, number]};
};
export const RoofDish: React.FC<{bx: number; by: number; s: number}> = ({bx, by, s}) => {
	const g = dishGeom(bx, by, s);
	return <image href={staticFile(DISH_SRC)} x={g.x} y={g.y} width={1254 * s} height={1254 * s} />;
};
/** Coded sky over a coded ground line. */
export const SkyGround: React.FC<{groundY: number; top?: number}> = ({groundY, top = 0}) => (
	<g>
		<defs>
			<linearGradient id="v19sky" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0" stopColor="#d7e6ef" />
				<stop offset="1" stopColor="#f3efe6" />
			</linearGradient>
		</defs>
		<rect x={0} y={top} width={1920} height={groundY - top} fill="url(#v19sky)" />
		<rect x={0} y={groundY} width={1920} height={1080 - groundY} fill="#e4d8bf" />
		<line x1={0} y1={groundY} x2={1920} y2={groundY} stroke={INK} strokeWidth={4} />
	</g>
);

// ---------------------------------------------------------------- the polar-view sync diagram
/** A coded top-down Earth disc seen from above the North Pole, turned `deg` anticlockwise, with its ground
 * marker ("dish") on the rim at 0 degrees of the disc. Screen angles run clockwise from 3 o'clock, so the
 * disc's anticlockwise turn is a negative screen angle. */
export const PolarEarth: React.FC<{cx: number; cy: number; R: number; deg: number; marker?: boolean; spinArrow?: boolean}> = ({cx, cy, R, deg, marker = true, spinArrow = true}) => {
	const lines = [0, 45, 90, 135];
	const [mx, my] = polar(cx, cy, R, -deg);
	const arcR = R + 16;
	const [ax0, ay0] = polar(cx, cy, arcR, 30), [ax1, ay1] = polar(cx, cy, arcR, -60);
	// Anticlockwise on screen at screen angle th runs along (sin th, -cos th).
	const th = (-60 * Math.PI) / 180, tx = Math.sin(th), ty = -Math.cos(th), nx = -ty, ny = tx;
	const head = `M${ax1 + tx * 14},${ay1 + ty * 14} L${ax1 - tx * 8 + nx * 9},${ay1 - ty * 8 + ny * 9} L${ax1 - tx * 8 - nx * 9},${ay1 - ty * 8 - ny * 9} Z`;
	return (
		<g>
			<circle cx={cx} cy={cy} r={R} fill="#9cc0dc" stroke={INK} strokeWidth={3} />
			{lines.map(a => { const [x0, y0] = polar(cx, cy, R, -deg + a), [x1, y1] = polar(cx, cy, R, -deg + a + 180); return <line key={a} x1={x0} y1={y0} x2={x1} y2={y1} stroke="#4f7fa3" strokeWidth={1.6} />; })}
			<circle cx={cx} cy={cy} r={R * 0.45} fill="none" stroke="#4f7fa3" strokeWidth={1.6} />
			<circle cx={cx} cy={cy} r={4} fill={INK} />
			{spinArrow ? <g>
				<path d={`M${ax0},${ay0} A${arcR},${arcR} 0 0 0 ${ax1},${ay1}`} fill="none" stroke={GREY.ink} strokeWidth={4} />
				<path d={head} fill={GREY.ink} />
			</g> : null}
			{marker ? <g>
				<circle cx={mx} cy={my} r={9} fill={NAVY.stroke} stroke={CARD} strokeWidth={3} />
			</g> : null}
		</g>
	);
};
/** The marker position on the rim of a polar disc turned `deg`. */
export const markerAt = (cx: number, cy: number, R: number, deg: number) => polar(cx, cy, R, -deg);
/** Pixel radius of an orbit of radius r (m) on a polar disc of radius R px (true scale). */
export const orbitPx = (R: number, r: number) => (r / 6.371e6) * R;

// ---------------------------------------------------------------- the side view (painted Earth, 3D ring)
/** The Earth plate is seen from about 12.8 degrees south of the equator, above longitude ~130 E (the
 * equator crosses the plate's front centre 105 native px above its centre). Vectors: X towards the viewer at
 * the front-centre longitude, Y east, Z north. */
const PHI0 = (-12.8 * Math.PI) / 180;
const SINP = Math.sin(PHI0), COSP = Math.cos(PHI0);
export type V3 = [number, number, number];
/** Screen offset (right, down) and depth (towards the viewer) of a 3D point, scaled by k px per unit. */
export const proj = ([X, Y, Z]: V3, k: number) => ({dx: Y * k, dy: -(Z * COSP - X * SINP) * k, depth: X * COSP + Z * SINP});
export const surface = (latDeg: number, lonDeg: number): V3 => {
	const p = (latDeg * Math.PI) / 180, l = (lonDeg * Math.PI) / 180;
	return [Math.cos(p) * Math.cos(l), Math.cos(p) * Math.sin(l), Math.sin(p)];
};
/** A point on an orbit ring of radius rho (in Earth radii), inclination i (deg), node line turned alpha (deg). */
export const ringPoint = (u: number, iDeg: number, rho: number, alphaDeg = 35): V3 => {
	const i = (iDeg * Math.PI) / 180, a = (alphaDeg * Math.PI) / 180;
	const n: V3 = [Math.sin(a), -Math.cos(a), 0], m: V3 = [Math.cos(a), Math.sin(a), 0];
	const c = Math.cos(u), s = Math.sin(u);
	return [rho * (c * n[0] + s * Math.cos(i) * m[0]), rho * (c * n[1] + s * Math.cos(i) * m[1]), rho * s * Math.sin(i)];
};
/** The point below a 24 h satellite in Earth's own (turning) frame: latitude and longitude (deg). */
export const subPoint = (u: number, iDeg: number) => {
	const i = (iDeg * Math.PI) / 180;
	const lat = Math.asin(Math.sin(u) * Math.sin(i));
	let lon = Math.atan2(Math.sin(u) * Math.cos(i), Math.cos(u)) - u;
	lon = Math.atan2(Math.sin(lon), Math.cos(lon));
	return {lat: (lat * 180) / Math.PI, lon: (lon * 180) / Math.PI};
};
const pathOf = (pts: [number, number][]) => pts.map(([x, y], k) => `${k ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
/** The dashed grey equator: the front half of the circle of latitude 0 on the plate. */
export const Equator: React.FC<{cx: number; cy: number; R: number; opacity?: number}> = ({cx, cy, R, opacity = 1}) => {
	const pts: [number, number][] = Array.from({length: 61}, (_, k) => { const q = proj(surface(0, -90 + 3 * k), R); return [cx + q.dx, cy + q.dy]; });
	return <path d={pathOf(pts)} fill="none" stroke={GREY.ink} strokeWidth={4} strokeDasharray="12 9" opacity={opacity} />;
};
/** A meridian (longitude lon, deg) on the plate, front half only. */
export const meridianPath = (cx: number, cy: number, R: number, lon: number) => {
	const pts: [number, number][] = [];
	for (let k = 0; k <= 60; k++) { const v = surface(-90 + 3 * k, lon), q = proj(v, R); if (q.depth >= -0.02) pts.push([cx + q.dx, cy + q.dy]); }
	return pts.length > 1 ? pathOf(pts) : '';
};
/** The tilted orbit ring round the side-view Earth plate: back half under the plate, front half over it, an
 * optional translucent navy plane, the satellite plate at angle u and the point below it on the surface. */
export const RingStage: React.FC<{cx: number; cy: number; R: number; rho: number; iDeg: number; u: number; alpha?: number; plane?: number; sat?: boolean; satW?: number; dot?: boolean; trail?: [number, number][]; centre?: boolean; earthOpacity?: number}> = ({cx, cy, R, rho, iDeg, u, alpha = 35, plane = 0, sat = true, satW = 54, dot = false, trail, centre = false}) => {
	const N = 120;
	const pts = Array.from({length: N + 1}, (_, k) => { const q = proj(ringPoint((2 * Math.PI * k) / N, iDeg, rho, alpha), R); return {x: cx + q.dx, y: cy + q.dy, z: q.depth}; });
	const seg = (front: boolean) => {
		const out: string[] = [];
		let cur: [number, number][] = [];
		for (const p of pts) {
			if ((p.z >= 0) === front) cur.push([p.x, p.y]);
			else if (cur.length) { out.push(pathOf(cur)); cur = []; }
		}
		if (cur.length) out.push(pathOf(cur));
		return out;
	};
	const sp = proj(ringPoint(u, iDeg, rho, alpha), R);
	const [sx, sy] = [cx + sp.dx, cy + sp.dy];
	const sub = subPoint(u, iDeg);
	const dp = proj(surface(sub.lat, sub.lon), R);
	const satEl = sat ? <Satellite cx={sx} cy={sy} w={satW} rotate={(Math.atan2(cy - sy, cx - sx) * 180) / Math.PI - 90} /> : null;
	return (
		<g>
			{plane > 0 ? <path d={pathOf(pts.map(p => [p.x, p.y]))} fill={NAVY.soft} stroke="none" opacity={0.55 * plane} /> : null}
			{seg(false).map((d, k) => <path key={'b' + k} d={d} fill="none" stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="10 8" />)}
			{sp.depth < 0 ? satEl : null}
			<Earth cx={cx} cy={cy} d={2 * R} />
			<Equator cx={cx} cy={cy} R={R} />
			{trail && trail.length > 1 ? <path d={pathOf(trail)} fill="none" stroke={NAVY.stroke} strokeWidth={4} /> : null}
			{seg(true).map((d, k) => <path key={'f' + k} d={d} fill="none" stroke={NAVY.stroke} strokeWidth={5} />)}
			{centre ? <circle cx={cx} cy={cy} r={8} fill={NAVY.stroke} stroke={CARD} strokeWidth={3} /> : null}
			{dot ? <circle cx={cx + dp.dx} cy={cy + dp.dy} r={10} fill={INK} stroke={CARD} strokeWidth={3} /> : null}
			{sp.depth >= 0 ? satEl : null}
		</g>
	);
};
/** The surface point (screen) below the 24 h satellite at angle u. */
export const subPointPx = (cx: number, cy: number, R: number, u: number, iDeg: number): [number, number] => {
	const s = subPoint(u, iDeg), q = proj(surface(s.lat, s.lon), R);
	return [cx + q.dx, cy + q.dy];
};
export const satPx = (cx: number, cy: number, R: number, rho: number, u: number, iDeg: number, alpha = 35): [number, number] => {
	const q = proj(ringPoint(u, iDeg, rho, alpha), R);
	return [cx + q.dx, cy + q.dy];
};
/** "30° N" style latitude text. */
export const latText = (lat: number) => (Math.abs(lat) < 0.5 ? '0°' : `${Math.round(Math.abs(lat))}° ${lat > 0 ? 'N' : 'S'}`);

/** A light card for coded insets. */
export const InsetCard: React.FC<{x: number; y: number; w: number; h: number}> = ({x, y, w, h}) => (
	<rect x={x} y={y} width={w} height={h} rx={20} fill={CARD} stroke="rgba(60,45,20,0.16)" strokeWidth={2.5} />
);
export {INK, INK_SOFT};
