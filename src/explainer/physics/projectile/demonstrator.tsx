// The painted "drop and launch" demonstrator (sliding-shaft mechanism) for the Module 5 hook.
// Plates: y12p-drop-launch-base-v1.png and y12p-drop-launch-slider-v1.png (Codex brief 222 candidates, approved by
// root on 21 November 2026; native 1568 x 1003, used unchanged: uniform scale, no stretch, no crop).
//
// Registration (measured from the alpha channels, native px):
//   base:   B's ledge top y = 449, x 1293 to 1415; A's stop post x 1091 to 1121; bench wood top y = 616,
//           wood bottom y = 759, wood right edge x = 540.
//   slider: lower support pin top y = 478, left tip x = 1073; striker face (the stub right of the upright)
//           right edge x = 1406, y 451 to 473.
//   base also: the ledge's own stem (the upright above the T) occupies x 1346 to 1376 down to the ledge.
// Two known registration issues (brief 222 findings) are fixed by translating the whole slider layer only:
//   1. the pin sat 29 px below the ledge: slider moved up 29 px, so A (on the pin) and B (on the ledge) start
//      at one height (ball bottoms at y 449);
//   2. the face overlapped B's start: slider moved left 30 px; B (60 native px) sits on the ledge's right part,
//      clear of the stem and about 4 px clear of the face; A sits on the pin just in from its tip.
// Acceptance test (alpha pixel test, 21 November 2026): with the slider at travel 0 to 3 px the pin is under A's
// centre and nothing overlaps either ball; at travel 4 px the pin has left A and the face reaches B (overlap
// begins by 5 px). The slide covers 20 px per frame, so both happen on the first frame of the slide.
import React from 'react';
import {staticFile} from 'remotion';

export const DROP_LAUNCH = {
	ready: true,
	base: 'assets/physics/y12p-drop-launch-base-v1.png',
	slider: 'assets/physics/y12p-drop-launch-slider-v1.png',
	canvas: [1568, 1003] as [number, number],
	/** Whole-layer translation of the slider in its cocked pose (native px). */
	sliderOffset: [-30, -29] as [number, number],
	/** Ball centres in the start pose (native px) for a ball of `ballNative` px. */
	seatA: [1046, 419] as [number, number],
	seatB: [1408, 419] as [number, number],
	ballNative: 60,
	/** Slider travel to the right when fired (native px, one ball diameter). */
	travel: 60,
	/** Clearances in the start pose (native px): face to B, and pin tip to A's centre. */
	clearB: 4,
	clearA: 4,
	bench: {top: 616, bottom: 759, edge: 540},
};
/** Plates the lesson must list in its assets. */
export const dropLaunchAssets = () => (DROP_LAUNCH.ready ? [DROP_LAUNCH.base, DROP_LAUNCH.slider] : []);

/** Frame geometry when B's seat centre is at (bx, by) and the balls are `ballD` px across. */
export const dropLaunchGeom = (bx: number, by: number, ballD: number) => {
	const s = ballD / DROP_LAUNCH.ballNative;
	const X = (nx: number) => bx + (nx - DROP_LAUNCH.seatB[0]) * s;
	const Y = (ny: number) => by + (ny - DROP_LAUNCH.seatB[1]) * s;
	return {s, X, Y, aX: X(DROP_LAUNCH.seatA[0]), aY: Y(DROP_LAUNCH.seatA[1]), benchTop: Y(DROP_LAUNCH.bench.top), benchBottom: Y(DROP_LAUNCH.bench.bottom), benchEdge: X(DROP_LAUNCH.bench.edge)};
};

/**
 * The demonstrator. `slide` 0..1 is the slider's progress along its travel (0 cocked, 1 fired).
 * Draw it under the balls.
 */
export const DropLaunch: React.FC<{bx: number; by: number; ballD: number; slide?: number; opacity?: number}> = ({bx, by, ballD, slide = 0, opacity = 1}) => {
	if (!DROP_LAUNCH.ready) return null;
	const g = dropLaunchGeom(bx, by, ballD);
	const [W, H] = DROP_LAUNCH.canvas;
	const x0 = g.X(0), y0 = g.Y(0);
	const [ox, oy] = DROP_LAUNCH.sliderOffset;
	const sl = (ox + slide * DROP_LAUNCH.travel) * g.s;
	return (
		<g opacity={opacity}>
			<image href={staticFile(DROP_LAUNCH.base)} x={x0} y={y0} width={W * g.s} height={H * g.s} preserveAspectRatio="none" />
			<image href={staticFile(DROP_LAUNCH.slider)} x={x0 + sl} y={y0 + oy * g.s} width={W * g.s} height={H * g.s} preserveAspectRatio="none" />
		</g>
	);
};
/** Slide progress for a release at frame `fireAt` (the slider takes `frames` frames to complete its travel). */
export const slideAt = (f: number, fireAt: number, frames = 3) => Math.max(0, Math.min(1, (f - fireAt) / frames));
