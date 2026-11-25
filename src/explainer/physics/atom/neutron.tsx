// Chadwick apparatus kit for Module 8 (additive kit file, 26 November 2026; first used by phys-y12-m8-v09).
// Course-neutral: labels, numbers and colours of meaning are passed in by the lesson.
// - Plate specs for the polonium-beryllium source vessel, the lead bricks, the paraffin wax on its stand and the
//   ionisation chamber (cylinder, cable, amplifier and arched meter) with its separate needle layer. Visible boxes were
//   measured from the alpha channel (threshold 20) on 26 November 2026; anchors were read on a 100 px grid the same day
//   from the delivered plates (root decisions 17 and 18):
//     source (1920 x 819): polonium disc (505, 490), beryllium disc (1175, 470), exit window (1640, 500), axis y 490;
//     lead bricks (2172 x 724): middle brick axis y 406, bricks from x 184 to 1984;
//     paraffin wax (1536 x 1024): slab from (694, 28) to (842, 753), centre (768, 390);
//     ionisation chamber (1920 x 819): entry window (45, 615), meter needle pivot (1565, 395); the painted needle points
//     up and to the left (low reading); turning it clockwise about the pivot by up to about 100 degrees sweeps the dial.
// - IonChamber: the chamber with its needle turned to a reading (0 to 1 of the sweep).
// - Disc: a coded particle disc with a letter (p, n, N, α); `HeadOn`: the inset of a head-on hit on a body at rest, run
//   on the collisions engine (`sims/collisions.ts`), drawn on a track.
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD, INK} from '../../shared/tokens';
import {LPlate, placeOf} from '../light/plates';
import type {LightSpec, Place} from '../light/plates';
import {collisionAt, runCollision} from '../../sims/collisions';
import type {CollisionRun} from '../../sims/collisions';

const P = (name: string) => `assets/physics/${name}.png`;
export const PO_BE: LightSpec = {src: P('y12p-po-be-source-v1'), W: 1920, H: 819, box: [124, 39, 1794, 790]};
export const LEAD: LightSpec = {src: P('y12p-lead-bricks-v1'), W: 2172, H: 724, box: [184, 83, 1984, 656]};
export const WAX: LightSpec = {src: P('y12p-paraffin-wax-v1'), W: 1536, H: 1024, box: [439, 18, 1097, 1002]};
export const ION: LightSpec = {src: P('y12p-ionisation-chamber-v1'), W: 1920, H: 819, box: [21, 58, 1893, 742]};
/** The needle layer shares the chamber's canvas, so it is placed with the chamber's box. */
export const ION_NEEDLE: LightSpec = {src: P('y12p-ionisation-chamber-needle-v1'), W: 1920, H: 819, box: [21, 58, 1893, 742]};
export const NEUTRON_AT = {
	po: [505, 490], be: [1175, 470], window: [1640, 500], axisY: 490,
	leadAxisY: 406,
	slab: [768, 390], slabX: [694, 842], slabY: [28, 753],
	ionWindow: [45, 615], pivot: [1565, 395],
} as const;
export const NEUTRON_PLATES = [PO_BE, LEAD, WAX, ION, ION_NEEDLE].map(s => s.src);

export const at = (spec: LightSpec, p: Place, nx: number, ny: number): [number, number] => placeOf(spec, p).at(nx, ny);
/** Visible height of a plate placed at visible width w. */
export const hOf = (spec: LightSpec, w: number) => (w * (spec.box[3] - spec.box[1])) / (spec.box[2] - spec.box[0]);

/** The ionisation chamber with its needle turned to `reading` (0 = as painted, 1 = full sweep of about 100 degrees). */
export const IonChamber: React.FC<{p: Place; reading?: number; opacity?: number}> = ({p, reading = 0, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const [px, py] = at(ION, p, NEUTRON_AT.pivot[0], NEUTRON_AT.pivot[1]);
	const deg = 100 * Math.max(0, Math.min(1, reading));
	return (
		<g opacity={opacity}>
			<LPlate spec={ION} p={p} />
			<LPlate spec={ION_NEEDLE} p={p} rotate={{deg, px, py}} />
		</g>
	);
};

// ---------------------------------------------------------------- particle discs
const T = (size: number, color: string): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fill: color});
/** A coded particle disc with a letter; `ring` draws an outline only (for an empty place). */
export const Disc: React.FC<{x: number; y: number; r?: number; fill: string; text?: string; textColor?: string; opacity?: number; ring?: boolean; stroke?: string}> = ({x, y, r = 22, fill, text, textColor = '#ffffff', opacity = 1, ring = false, stroke = INK}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<circle cx={x} cy={y} r={r} fill={ring ? CARD : fill} stroke={ring ? fill : stroke} strokeWidth={ring ? 4 : 2.5} strokeDasharray={ring ? '8 6' : undefined} />
		{text && !ring ? <text x={x} y={y + r * 0.36} textAnchor="middle" style={T(Math.max(19, r), textColor)}>{text}</text> : null}
	</g>
));

// ---------------------------------------------------------------- a head-on hit on a track (collisions engine)
/** A head-on elastic hit: body 1 (mass m1, speed 1) runs into body 2 (mass m2) at rest; positions in track units. */
export const headOnRun = (m1: number, m2: number, gap = 3, duration = 8): CollisionRun => runCollision({m1, m2, u1: 1, u2: 0, x1: 0, x2: gap, size1: 0.3, size2: 0.3, duration});
/** Screen positions of the two bodies at run time t, on a track from x0 at `k` px per unit. */
export const headOnAt = (run: CollisionRun, t: number, x0: number, k: number) => {
	const s = collisionAt(run, t);
	return {x1: x0 + s.x1 * k, x2: x0 + s.x2 * k, v1: s.v1, v2: s.v2, hit: s.hit, k1: s.k1, k2: s.k2};
};
