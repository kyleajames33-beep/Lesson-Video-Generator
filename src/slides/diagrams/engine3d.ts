// engine3d — shared 3D-in-SVG engine for coded diagrams.
//
// Pipeline: rotate (yaw→pitch turntable) → weak-perspective project →
// depth cues via depthLerp → painter's-algorithm sort. Callers derive yaw/
// pitch from useCurrentFrame()/useVideoConfig() only — this module holds pure
// math, no hooks, no time source of its own.
//
// Conventions:
//  - Model space is right-handed: +x right, +y up, +z toward the camera.
//  - Geometry should fit inside |p| ≲ 1.4 model units so the default camera
//    distance gives gentle (not fisheye) perspective.
//  - SVG y grows downward; project() flips y for you.

import type {ReactNode} from 'react';

export type Vec3 = readonly [number, number, number];

export type Projected = {
	x: number;
	y: number;
	/** Perspective scale factor at this depth — multiply radii/font sizes by it. */
	scale: number;
	/** Rotated-space z, + toward camera. Feed to depthLerp / painter sort. */
	z: number;
};

/** Distance from camera to origin, in model units. */
export const CAMERA_DIST = 4.2;

/**
 * Rotate a point about Y (yaw), then about X (pitch) — turntable order.
 * Positive yaw spins the model left-to-right; positive pitch tips the far
 * side up (i.e. you look slightly down onto +z-facing content).
 */
export const rotate = ([x, y, z]: Vec3, yaw: number, pitch: number): Vec3 => {
	const cy = Math.cos(yaw);
	const sy = Math.sin(yaw);
	const cp = Math.cos(pitch);
	const sp = Math.sin(pitch);
	// yaw about Y
	const x1 = x * cy + z * sy;
	const z1 = -x * sy + z * cy;
	// pitch about X
	const y2 = y * cp - z1 * sp;
	const z2 = y * sp + z1 * cp;
	return [x1, y2, z2];
};

export type ViewSpec = {
	/** SVG-space centre of the scene. */
	cx: number;
	cy: number;
	/** Pixels per model unit at z = 0. */
	unit: number;
	/** Override camera distance (model units). Default CAMERA_DIST. */
	camera?: number;
};

/**
 * Weak-perspective projection of an ALREADY-ROTATED point onto SVG space.
 * Points nearer the camera (+z) project larger and lower-index in nothing —
 * ordering is the caller's job via paintersSort.
 */
export const project = (p: Vec3, view: ViewSpec): Projected => {
	const cam = view.camera ?? CAMERA_DIST;
	const scale = cam / (cam - p[2]);
	return {
		x: view.cx + p[0] * view.unit * scale,
		y: view.cy - p[1] * view.unit * scale,
		scale,
		z: p[2],
	};
};

/**
 * Map a rotated-space depth z ∈ [−range, +range] to [far, near].
 * Use for opacity / stroke-width / lightness depth cues, e.g.
 * `depthLerp(p.z, 0.55, 1)` for atoms that dim as they swing behind.
 */
export const depthLerp = (z: number, far: number, near: number, range = 1): number => {
	const t = Math.min(1, Math.max(0, (z / range + 1) / 2));
	return far + (near - far) * t;
};

/** One depth-sortable render item for the painter's algorithm. */
export type DepthItem = {depth: number; el: ReactNode};

/** Painter's algorithm: far (low z) first, near (high z) last. Stable input order breaks ties. */
export const paintersSort = (items: DepthItem[]): ReactNode[] =>
	[...items].sort((a, b) => a.depth - b.depth).map((item) => item.el);

/**
 * Spherical interpolation between two unit vectors — used to sample arcs
 * (e.g. bond-angle markers) that live on the model sphere and must rotate
 * with the scene.
 */
export const slerp = (a: Vec3, b: Vec3, t: number): Vec3 => {
	const dot = Math.min(1, Math.max(-1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));
	const theta = Math.acos(dot);
	if (theta < 1e-5) return a;
	const s = Math.sin(theta);
	const wa = Math.sin((1 - t) * theta) / s;
	const wb = Math.sin(t * theta) / s;
	return [a[0] * wa + b[0] * wb, a[1] * wa + b[1] * wb, a[2] * wa + b[2] * wb];
};
