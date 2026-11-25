// Bench plate kit for Module 6 (additive kit file, 25 November 2026; first used by phys-y12-m6-v07 to v09, offered to
// the rest of Module 6). Course-neutral: every label, number and colour of meaning is passed in by the lesson.
// Each painted plate is placed by the left and top of its visible (alpha) box and a visible width, so scale is always
// uniform (never stretched); `at(x, y)` maps a native plate pixel to the screen for coded leads and readouts.
// Native anchors were read from the plates on a 100 px grid (25 November 2026) or taken from the sidecar json:
//   copper rod (2172 x 724): visible box (201, 296) to (1971, 429), centre (1086, 362);
//   knife switch base and blade (1774 x 887, one canvas): blade pivot (545, 305), terminals (530, 445) and (1230, 445);
//   low-voltage supply (1600 x 1000): red + terminal (1125, 535), black - terminal (1295, 535);
//   retort stand (600 x 2400): rod centre line x 230 from y 216 to 2127, base line y 2183; boss (800 x 800): rod hole (269, 404);
//   loudspeaker (2172 x 724): cone rim x 1336 from y 195 to 535, voice coil about (1268, 365), magnet about (1165, 365);
//   cone layer (2172 x 724): rim x 1107 from y 175 to 543, registered on the speaker at scale 0.924 (rim on rim);
//   car battery (1466 x 1073): terminals (353, 146) and (1059, 84);
//   wire-through-card stand (1024 x 1536): wire x 531, card hole (531, 687), wire ends y 77 and 1426;
//   plotting compass (1261 x 1247): centre (627, 612), face radius 365 (needle coded);
//   top-pan balance (1400 x 900): display (387, 427) to (871, 530), pan top y 290 from x 193 to 1207;
//   digital multimeter (1086 x 1448): display (293, 270) to (787, 480), terminals (364, 1118), (539, 1118), (712, 1118);
//   wooden block (1600 x 1000): visible box (144, 425) to (1456, 575);
//   galvanometer body and needle (1354 x 1161, one canvas): needle pivot (677, 658), end ticks at +/-58 degrees,
//   terminals red (457, 865) and black (896, 865);
//   solenoid coil (1774 x 887): terminals (601, 710) and (1631, 615);
//   bar magnet (2172 x 724): end faces (286, 365) red and (1885, 365) grey.
import React from 'react';
import {staticFile} from 'remotion';
import {FONT_DISPLAY} from '../../kit';
import {INK} from '../../shared/tokens';

type Spec = {src: string; W: number; H: number; box: readonly [number, number, number, number]};
const P = (name: string) => `assets/physics/${name}.png`;
export const ROD: Spec = {src: P('phys-y11-rod-copper-v1'), W: 2172, H: 724, box: [201, 296, 1971, 429]};
export const SWITCH: Spec = {src: P('phys-y11-knife-switch-v1'), W: 1774, H: 887, box: [236, 187, 1537, 746]};
export const BLADE_SRC = P('phys-y11-knife-switch-blade-v1');
export const LVS: Spec = {src: P('phys-y11-low-voltage-supply-v1'), W: 1600, H: 1000, box: [144, 236, 1456, 763]};
export const STAND: Spec = {src: P('phys-y11-retort-stand-v1'), W: 600, H: 2400, box: [201, 216, 400, 2184]};
export const BOSS: Spec = {src: P('phys-y11-boss-crossbar-v1'), W: 800, H: 800, box: [72, 269, 728, 530]};
export const SPEAKER: Spec = {src: P('phys-y11-loudspeaker-v1'), W: 2172, H: 724, box: [815, 129, 1353, 600]};
export const CONE_SRC = P('phys-y11-loudspeaker-cone-v1');
export const BATTERY: Spec = {src: P('phys-y11-car-battery-v1'), W: 1466, H: 1073, box: [155, 56, 1306, 1021]};
export const WIRECARD: Spec = {src: P('phys-y11-wire-card-stand-v1'), W: 1024, H: 1536, box: [47, 69, 948, 1471]};
export const COMPASS: Spec = {src: P('phys-y11-plotting-compass-v1'), W: 1261, H: 1247, box: [176, 148, 1067, 1082]};
export const BALANCE: Spec = {src: P('phys-y11-top-pan-balance-v1'), W: 1400, H: 900, box: [126, 286, 1274, 613]};
export const DMM: Spec = {src: P('phys-y11-digital-multimeter-v1'), W: 1086, H: 1448, box: [201, 149, 874, 1296]};
export const BLOCK: Spec = {src: P('phys-y11-wooden-block-v1'), W: 1600, H: 1000, box: [144, 425, 1456, 575]};
export const GALV: Spec = {src: P('y12p-galvanometer-v1'), W: 1354, H: 1161, box: [149, 112, 1206, 1065]};
export const NEEDLE_SRC = P('y12p-galvanometer-needle-v1');
export const COIL: Spec = {src: P('phys-y11-solenoid-coil-v1'), W: 1774, H: 887, box: [211, 194, 1647, 778]};
export const BARMAG: Spec = {src: P('phys-y11-bar-magnet-v1'), W: 2172, H: 724, box: [262, 227, 1910, 497]};

/** Placement of a plate by its visible box: left x, top y and visible width w. */
export type Place = {x: number; y: number; w: number};
export const placeOf = (spec: Spec, p: Place) => {
	const s = p.w / (spec.box[2] - spec.box[0]);
	const ix = p.x - spec.box[0] * s, iy = p.y - spec.box[1] * s;
	return {s, ix, iy, h: (spec.box[3] - spec.box[1]) * s, at: (nx: number, ny: number): [number, number] => [ix + nx * s, iy + ny * s]};
};
/** A plate drawn by its visible box (uniform scale). `flip` mirrors it left to right about its visible box. */
export const Plate: React.FC<{spec: Spec; p: Place; opacity?: number; flip?: boolean; rotate?: {deg: number; px: number; py: number}}> = ({spec, p, opacity = 1, flip = false, rotate}) => {
	if (opacity <= 0.001) return null;
	const g = placeOf(spec, p);
	const img = <image href={staticFile(spec.src)} x={g.ix} y={g.iy} width={spec.W * g.s} height={spec.H * g.s} />;
	const tf = [flip ? `translate(${2 * p.x + p.w} 0) scale(-1 1)` : '', rotate ? `rotate(${rotate.deg} ${rotate.px} ${rotate.py})` : ''].filter(Boolean).join(' ');
	return <g opacity={opacity} transform={tf || undefined}>{img}</g>;
};

// ---------------------------------------------------------------- the copper rod
/** The copper rod by its centre and visible length, turned by `deg` (screen degrees, clockwise positive). */
export const rodAt = (cx: number, cy: number, len: number) => {
	const s = len / 1770;
	return {s, thick: 133 * s, x1: cx - len / 2, x2: cx + len / 2};
};
export const Rod: React.FC<{cx: number; cy: number; len: number; deg?: number; opacity?: number}> = ({cx, cy, len, deg = 0, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const s = len / 1770;
	return <g opacity={opacity} transform={deg ? `rotate(${deg} ${cx} ${cy})` : undefined}><image href={staticFile(ROD.src)} x={cx - 1086 * s} y={cy - 362 * s} width={2172 * s} height={724 * s} /></g>;
};

// ---------------------------------------------------------------- the knife switch
export const switchPts = (p: Place) => {
	const g = placeOf(SWITCH, p);
	return {...g, pivot: g.at(545, 305), left: g.at(530, 445), right: g.at(1230, 445)};
};
/** The knife switch with its blade raised by `open` (0 closed, 1 fully open, about 32 degrees). */
export const KnifeSwitch: React.FC<{p: Place; open?: number; opacity?: number}> = ({p, open = 0, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const g = switchPts(p);
	return (
		<g opacity={opacity}>
			<image href={staticFile(SWITCH.src)} x={g.ix} y={g.iy} width={SWITCH.W * g.s} height={SWITCH.H * g.s} />
			<g transform={`rotate(${-32 * open} ${g.pivot[0]} ${g.pivot[1]})`}><image href={staticFile(BLADE_SRC)} x={g.ix} y={g.iy} width={SWITCH.W * g.s} height={SWITCH.H * g.s} /></g>
		</g>
	);
};
export const lvsPts = (p: Place) => { const g = placeOf(LVS, p); return {...g, pos: g.at(1125, 535), neg: g.at(1295, 535)}; };
export const standPts = (rodX: number, baseY: number, height: number) => {
	const s = height / (2183 - 216);
	return {s, ix: rodX - 230 * s, iy: baseY - 2183 * s, top: baseY - (2183 - 216) * s};
};
/** A retort stand placed by its rod's x, its base line y and its height (base to rod top). */
export const Stand: React.FC<{rodX: number; baseY: number; height: number; opacity?: number}> = ({rodX, baseY, height, opacity = 1}) => {
	const g = standPts(rodX, baseY, height);
	return <image href={staticFile(STAND.src)} x={g.ix} y={g.iy} width={600 * g.s} height={2400 * g.s} opacity={opacity} />;
};
/** The boss clamp with its rod hole on (x, y), `w` visible width. */
export const Boss: React.FC<{x: number; y: number; w: number; opacity?: number}> = ({x, y, w, opacity = 1}) => {
	const s = w / 656;
	return <image href={staticFile(BOSS.src)} x={x - 269 * s} y={y - 404 * s} width={800 * s} height={800 * s} opacity={opacity} />;
};

// ---------------------------------------------------------------- the loudspeaker
export const speakerPts = (p: Place) => { const g = placeOf(SPEAKER, p); return {...g, rim: g.at(1336, 365), rimTop: g.at(1336, 195), rimBot: g.at(1336, 535), coil: g.at(1268, 365), magnet: g.at(1165, 365)}; };
/** The loudspeaker cross-section with its cone registered at the rim and pushed out by `dx` screen px. */
export const Loudspeaker: React.FC<{p: Place; dx?: number; opacity?: number}> = ({p, dx = 0, opacity = 1}) => {
	const g = placeOf(SPEAKER, p);
	const cs = g.s * 0.924;
	const [rx, ry] = g.at(1336, 365);
	return (
		<g opacity={opacity}>
			<image href={staticFile(SPEAKER.src)} x={g.ix} y={g.iy} width={SPEAKER.W * g.s} height={SPEAKER.H * g.s} />
			<image href={staticFile(CONE_SRC)} x={rx - 1107 * cs + dx} y={ry - 359 * cs} width={2172 * cs} height={724 * cs} />
		</g>
	);
};

// ---------------------------------------------------------------- meters and other plates
export const batteryPts = (p: Place) => { const g = placeOf(BATTERY, p); return {...g, a: g.at(353, 146), b: g.at(1059, 84)}; };
export const wireCardPts = (p: Place) => { const g = placeOf(WIRECARD, p); return {...g, hole: g.at(531, 687), top: g.at(531, 77), bot: g.at(531, 1426)}; };
/** A plotting compass by its centre and face radius, with a coded needle pointing at `deg` (screen degrees, 0 = right, clockwise). */
export const Compass: React.FC<{cx: number; cy: number; r: number; deg: number; opacity?: number}> = ({cx, cy, r, deg, opacity = 1}) => {
	const s = r / 365;
	const a = (deg * Math.PI) / 180, ux = Math.cos(a), uy = Math.sin(a), L = r * 0.78, w = r * 0.16;
	return (
		<g opacity={opacity}>
			<image href={staticFile(COMPASS.src)} x={cx - 627 * s} y={cy - 612 * s} width={1261 * s} height={1247 * s} />
			<path d={`M${cx + ux * L},${cy + uy * L} L${cx - uy * w},${cy + ux * w} L${cx + uy * w},${cy - ux * w} Z`} fill="#c0392b" stroke={INK} strokeWidth={1.5} />
			<path d={`M${cx - ux * L},${cy - uy * L} L${cx - uy * w},${cy + ux * w} L${cx + uy * w},${cy - ux * w} Z`} fill="#e9e4da" stroke={INK} strokeWidth={1.5} />
		</g>
	);
};
export const balancePts = (p: Place) => { const g = placeOf(BALANCE, p); return {...g, display: [g.at(387, 427), g.at(871, 530)] as const, panY: g.at(700, 290)[1], panL: g.at(193, 290)[0], panR: g.at(1207, 290)[0]}; };
export const dmmPts = (p: Place) => { const g = placeOf(DMM, p); return {...g, display: [g.at(293, 270), g.at(787, 480)] as const, com: g.at(539, 1118), amp: g.at(364, 1118)}; };
/** A coded reading in a plate's display window (tabular digits, scaled to the window). */
export const Display: React.FC<{box: readonly [readonly [number, number], readonly [number, number]]; text: string; color?: string; opacity?: number}> = ({box, text, color = '#1d2a1d', opacity = 1}) => {
	const [[x1, y1], [x2, y2]] = box;
	const h = y2 - y1, w = x2 - x1;
	const fs = Math.min(h * 0.7, (w * 0.9) / (Math.max(4, text.length) * 0.6));
	return <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 + fs * 0.36} textAnchor="middle" opacity={opacity} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: fs, fill: color, fontVariantNumeric: 'tabular-nums'} as React.CSSProperties}>{text}</text>;
};
export const galvPts = (p: Place) => { const g = placeOf(GALV, p); return {...g, pivot: g.at(677, 658), red: g.at(457, 865), black: g.at(896, 865)}; };
/** The galvanometer with its needle turned `deg` from the centre zero (+ to the right; the end ticks are at +/-58). */
export const Galvanometer: React.FC<{p: Place; deg?: number; opacity?: number}> = ({p, deg = 0, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const g = galvPts(p);
	return (
		<g opacity={opacity}>
			<image href={staticFile(GALV.src)} x={g.ix} y={g.iy} width={GALV.W * g.s} height={GALV.H * g.s} />
			<g transform={`rotate(${deg} ${g.pivot[0]} ${g.pivot[1]})`}><image href={staticFile(NEEDLE_SRC)} x={g.ix} y={g.iy} width={GALV.W * g.s} height={GALV.H * g.s} /></g>
		</g>
	);
};
export const coilPts = (p: Place) => { const g = placeOf(COIL, p); return {...g, a: g.at(601, 710), b: g.at(1631, 615)}; };
/** The bar magnet by its visible box; `flip` puts the red (north) end on the right. Returns nothing else: label it in code. */
export const barMagnetPts = (p: Place, flip = false) => {
	const g = placeOf(BARMAG, p);
	const red = g.at(286, 365), grey = g.at(1885, 365);
	const m = (pt: [number, number]): [number, number] => (flip ? [2 * p.x + p.w - pt[0], pt[1]] : pt);
	return {...g, red: m(red), grey: m(grey)};
};
export const BENCH_PLATES = [ROD, SWITCH, LVS, STAND, BOSS, SPEAKER, BATTERY, WIRECARD, COMPASS, BALANCE, DMM, BLOCK, GALV, COIL, BARMAG].map(s => s.src).concat([BLADE_SRC, CONE_SRC, NEEDLE_SRC]);
