// Light plate kit for Module 7 (additive kit file, 25 November 2026; first used by phys-y12-m7-v01 to v03, offered to
// the rest of Module 7). Course-neutral: every label, number and colour of meaning is passed in by the lesson.
// Each painted plate is placed by the left and top of its visible (alpha) box and a visible width (uniform scale only,
// never stretched) through the bench kit's `Plate`; `at(x, y)` maps a native plate pixel to the screen.
// Visible boxes were measured from the alpha channel (threshold 20) on 25 November 2026; anchors come from
// docs/production/claude-pm/assets/brief191-manifest.json or were read on a 100 px grid the same day:
//   radio mast (887 x 1774): top spike x 443 from y 75 to about 530;
//   spark-gap transmitter (1683 x 935): spark gap centre (842, 322), rod line y 322;
//   loop receiver (1254 x 1254): spark gap (625, 201), loop centre (624, 527), radius about 332;
//   Jupiter, Sun, Earth, Moon (1254 x 1254): discs centred in their visible boxes;
//   toothed wheel (1254 x 1254): centre (626, 626), rim radius about 434, 60 teeth, pitch 6 degrees;
//   laser module (1774 x 887): aperture about (1090, 318) facing right, carrier foot line y 720;
//   light sensor (1112 x 1415): window centre (431, 572) facing left, carrier foot line y 1128;
//   plane mirror (1774 x 887): glass strip along y 516 from x 398 to 1394 (wooden holder above it);
//   filament lamp (1536 x 1024): filament coil about (712, 250);
//   ray box (1199 x 1312): slit about (596, 1020);
//   discharge tube (1003 x 1568): capillary x 502 from y 540 to 890;
//   pocket spectroscope (1896 x 830): slit about (414, 326) at the left, eyepiece at the right;
//   vapour cell (1942 x 809): window (740, 180) to (1200, 300), beam axis y 238 (sidecar json).
import React from 'react';
import {Plate, placeOf} from '../electromagnetism/bench';
import type {Place} from '../electromagnetism/bench';

export type LightSpec = {src: string; W: number; H: number; box: readonly [number, number, number, number]};
const P = (name: string) => `assets/physics/${name}.png`;
export const SUN: LightSpec = {src: P('phys-y11-sun-v1'), W: 1254, H: 1254, box: [75, 90, 1152, 1165]};
export const EARTH: LightSpec = {src: P('phys-y11-earth-v1'), W: 1254, H: 1254, box: [157, 150, 1092, 1122]};
export const MOON: LightSpec = {src: P('y12p-moon-v1'), W: 1254, H: 1254, box: [158, 150, 1092, 1106]};
export const JUPITER: LightSpec = {src: P('y12p-jupiter-v1'), W: 1254, H: 1254, box: [206, 194, 1039, 1044]};
export const MAST: LightSpec = {src: P('phys-y11-radio-mast-v1'), W: 887, H: 1774, box: [251, 75, 637, 1703]};
export const SPARK_TX: LightSpec = {src: P('y12p-spark-gap-transmitter-v1'), W: 1683, H: 935, box: [203, 261, 1480, 743]};
export const SPARK_RX: LightSpec = {src: P('y12p-spark-loop-receiver-v1'), W: 1254, H: 1254, box: [289, 183, 954, 1095]};
export const WHEEL: LightSpec = {src: P('y12p-toothed-wheel-v1'), W: 1254, H: 1254, box: [192, 192, 1060, 1061]};
export const LASER: LightSpec = {src: P('y12p-laser-module-v1'), W: 1774, H: 887, box: [291, 252, 1482, 720]};
export const SENSOR: LightSpec = {src: P('y12p-light-sensor-v1'), W: 1112, H: 1415, box: [98, 419, 1105, 1129]};
export const MIRROR: LightSpec = {src: P('phys-y11-plane-mirror-v1'), W: 1774, H: 887, box: [386, 312, 1388, 586]};
export const LAMP: LightSpec = {src: P('phys-y11-filament-lamp-v1'), W: 1536, H: 1024, box: [463, 39, 1280, 987]};
export const RAYBOX: LightSpec = {src: P('phys-y11-ray-box-v1'), W: 1199, H: 1312, box: [257, 131, 935, 1088]};
export const TUBE: LightSpec = {src: P('y12p-discharge-tube-v1'), W: 1003, H: 1568, box: [220, 134, 782, 1427]};
export const SPECTRO: LightSpec = {src: P('y12p-pocket-spectroscope-v1'), W: 1896, H: 830, box: [367, 179, 1542, 729]};
export const SATELLITE: LightSpec = {src: P('y12p-satellite-v1'), W: 1585, H: 992, box: [188, 399, 1395, 671]};
export const PAPER_SHEET: LightSpec = {src: P('phys-y11-paper-sheet-flat-v1'), W: 2172, H: 724, box: [132, 234, 2036, 509]};
export const VCELL: LightSpec = {src: P('y12p-vapour-cell-v1'), W: 1942, H: 809, box: [510, 139, 1433, 717]};
export const EHT_SRC = P('phys-y11-eht-supply-v1');

export const ANCHOR = {
	mastTop: [443, 80], mastSpikeBot: [443, 530],
	txGap: [842, 322], rxGap: [625, 201], rxLoop: [624, 527],
	wheelHub: [626, 626], wheelRim: 434,
	laserOut: [1090, 318], sensorWin: [431, 572],
	mirrorGlassY: 516, mirrorGlassX: [398, 1394],
	lampCoil: [712, 250], raySlit: [596, 1020],
	tubeCap: [502, 540, 890], spectroSlit: [414, 326], spectroEye: [1530, 326],
	cellWin: [740, 180, 1200, 300], cellAxisY: 238,
} as const;

export const LIGHT_PLATES = [SUN, EARTH, MOON, JUPITER, MAST, SPARK_TX, SPARK_RX, WHEEL, LASER, SENSOR, MIRROR, LAMP, RAYBOX, TUBE, SPECTRO, SATELLITE, PAPER_SHEET, VCELL].map(s => s.src).concat([EHT_SRC]);

export {Plate, placeOf};
export type {Place};

/** A plate drawn by its visible box (left, top, visible width). */
export const LPlate: React.FC<{spec: LightSpec; p: Place; opacity?: number; flip?: boolean; rotate?: {deg: number; px: number; py: number}}> = ({spec, p, opacity = 1, flip, rotate}) => <Plate spec={spec} p={p} opacity={opacity} flip={flip} rotate={rotate} />;
/** Place for a round body (Sun, planet, Moon, wheel) by its centre and visible diameter. */
export const discPlace = (spec: LightSpec, cx: number, cy: number, d: number): Place => {
	const bw = spec.box[2] - spec.box[0], bh = spec.box[3] - spec.box[1];
	const h = (d * bh) / bw;
	return {x: cx - d / 2, y: cy - h / 2, w: d};
};
/** A round body drawn by centre and diameter; `spin` turns it about its visible centre (degrees). */
export const Disc: React.FC<{spec: LightSpec; cx: number; cy: number; d: number; spin?: number; opacity?: number}> = ({spec, cx, cy, d, spin = 0, opacity = 1}) => (
	<Plate spec={spec} p={discPlace(spec, cx, cy, d)} opacity={opacity} rotate={spin ? {deg: spin, px: cx, py: cy} : undefined} />
);
/** Screen point of a native plate pixel for a plate placed at p. */
export const anchorAt = (spec: LightSpec, p: Place, nx: number, ny: number): [number, number] => placeOf(spec, p).at(nx, ny);
/** Visible height of a plate placed at visible width w. */
export const plateH = (spec: LightSpec, w: number) => (w * (spec.box[3] - spec.box[1])) / (spec.box[2] - spec.box[0]);
/** Place a plate so that its native anchor (nx, ny) lands on screen point (sx, sy) at visible width w. */
export const placeByAnchor = (spec: LightSpec, nx: number, ny: number, sx: number, sy: number, w: number): Place => {
	const s = w / (spec.box[2] - spec.box[0]);
	return {x: sx - (nx - spec.box[0]) * s, y: sy - (ny - spec.box[1]) * s, w};
};
