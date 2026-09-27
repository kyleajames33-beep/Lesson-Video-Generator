// Shared pieces for the chem-y12-m7b (organic chemistry L13–L23) diorama kinds.
//
// `Mol` draws a 2D ball-and-stick structural formula from a preset or a raw
// atom/bond list (see molecules.ts): glossy CPK balls, grey sticks, double
// bonds as two parallel sticks. Condensed groups (CH₃, CH₂, …) are one carbon
// ball carrying a label, so structures stay readable at card size. It is
// lane-local; it could be promoted into diorama.tsx if other lanes want it.
//
// Timing helpers (fadeAt, popAt, Chip, Arrow) are reused read-only from the
// merged chem-y11-m1 lane.

import type {ReactNode} from 'react';
import {TOK} from '../../../../styles/tokens';
import {ELEMENT_COLORS, idlePulse} from '../../diorama';
import {MOLECULES, type MolSpec} from './molecules';
import {shade} from '../chem-y11-m1/shared';

export {clamp, fadeAt, popAt, shade, Chip, Arrow} from '../chem-y11-m1/shared';

export const BOND = '#6d6d6d';
/** Elements every m7b kind asks DioramaDefs for. */
export const ELEMENTS = ['C', 'H', 'O', 'N', 'Cl', 'Na', 'S'];

/** Ball radius for an element (at scale 1). Labelled groups get a bigger carbon. */
export const atomR = (el: string, label?: string) => {
	if (el === 'H') return 12;
	if (label && label.length > 1) return 21;
	if (el === 'Cl') return 20;
	if (el === 'Na') return 20;
	return 18;
};

export const resolveMol = (mol: string | MolSpec): MolSpec => {
	if (typeof mol !== 'string') return mol;
	const spec = MOLECULES[mol];
	if (!spec) throw new Error(`chem-y12-m7b: unknown molecule preset "${mol}"`);
	return spec;
};

export type MolProps = {
	id: string;
	mol: string | MolSpec;
	/** Centre of the molecule's bounding box. */
	x: number;
	y: number;
	/** Pixels per bond length. */
	bond?: number;
	/** Ball size multiplier. */
	ballScale?: number;
	opacity?: number;
	/** Atom indices to ring (amber = the one thing that matters). */
	highlight?: number[];
	highlightColor?: string;
	highlightOpacity?: number;
	frame?: number;
	/** Per-atom opacity override (e.g. an atom leaving). */
	atomOpacity?: Record<number, number>;
	/** Per-atom offset in px (e.g. an atom being pulled away). */
	atomOffset?: Record<number, {dx: number; dy: number}>;
	/** Bond indices to hide (opacity) — e.g. a bond breaking. */
	bondOpacity?: Record<number, number>;
	/** Bond indices to tint. */
	bondColor?: Record<number, string>;
	/** Mirror left-right. */
	flipX?: boolean;
	/** Rotation in degrees about the centre. */
	rotate?: number;
	children?: ReactNode;
};

/** Bounding-box centre of a spec (in bond units). */
const centreOf = (spec: MolSpec) => {
	const xs = spec.atoms.map((a) => a.x);
	const ys = spec.atoms.map((a) => a.y);
	return {cx: (Math.min(...xs) + Math.max(...xs)) / 2, cy: (Math.min(...ys) + Math.max(...ys)) / 2};
};

/** Screen position of atom `i` of a molecule drawn with the same props. */
export const atomPos = (
	mol: string | MolSpec, i: number, x: number, y: number, bond = 62, flipX = false, rotate = 0,
) => {
	const spec = resolveMol(mol);
	const {cx, cy} = centreOf(spec);
	let dx = (spec.atoms[i].x - cx) * bond * (flipX ? -1 : 1);
	let dy = (spec.atoms[i].y - cy) * bond;
	if (rotate) {
		const a = (rotate * Math.PI) / 180;
		[dx, dy] = [dx * Math.cos(a) - dy * Math.sin(a), dx * Math.sin(a) + dy * Math.cos(a)];
	}
	return {x: x + dx, y: y + dy};
};

/** Width/height of a molecule in px (atom centres only). */
export const molSize = (mol: string | MolSpec, bond = 62) => {
	const spec = resolveMol(mol);
	const xs = spec.atoms.map((a) => a.x);
	const ys = spec.atoms.map((a) => a.y);
	return {w: (Math.max(...xs) - Math.min(...xs)) * bond, h: (Math.max(...ys) - Math.min(...ys)) * bond};
};

export const Ball = ({
	id, el, x, y, r, label, opacity = 1,
}: {id: string; el: string; x: number; y: number; r: number; label?: string; opacity?: number}) => {
	const base = ELEMENT_COLORS[el] ?? '#9a9a9a';
	const light = el === 'H' || el === 'S';
	const fs = label ? Math.min(r * 0.78, 17) : 0;
	return (
		<g opacity={opacity}>
			<circle cx={x} cy={y} r={r} fill={`url(#${id}-atom-${el})`} stroke={shade(base, -0.35)} strokeWidth={1} />
			{label && (
				<text x={x} y={y + fs * 0.36} textAnchor="middle" fill={light ? TOK.ink : '#ffffff'} fontSize={fs} fontWeight={800}>
					{label}
				</text>
			)}
		</g>
	);
};

export const Stick = ({
	x1, y1, x2, y2, order = 1, color = BOND, width = 5, opacity = 1, gap = 5,
}: {x1: number; y1: number; x2: number; y2: number; order?: number; color?: string; width?: number; opacity?: number; gap?: number}) => {
	const len = Math.hypot(x2 - x1, y2 - y1) || 1;
	const nx = (-(y2 - y1) / len) * gap;
	const ny = ((x2 - x1) / len) * gap;
	// 1.5 = delocalised: one solid stick plus one dashed.
	const offs = order === 2 || order === 1.5 ? [-1, 1] : order === 3 ? [-1.6, 0, 1.6] : [0];
	return (
		<g opacity={opacity}>
			{offs.map((o, k) => (
				<line key={k} x1={x1 + nx * o} y1={y1 + ny * o} x2={x2 + nx * o} y2={y2 + ny * o} stroke={color} strokeWidth={order > 1 ? width - 1 : width} strokeLinecap="round" strokeDasharray={order === 1.5 && k === 1 ? '4 5' : undefined} />
			))}
		</g>
	);
};

/** A 2D ball-and-stick structural formula. */
export const Mol = ({
	id, mol, x, y, bond = 62, ballScale = 1, opacity = 1, highlight = [], highlightColor = TOK.amber, highlightOpacity = 1,
	frame = 0, atomOpacity = {}, atomOffset = {}, bondOpacity = {}, bondColor = {}, flipX = false, rotate = 0, children,
}: MolProps) => {
	const spec = resolveMol(mol);
	const pos = spec.atoms.map((_, i) => {
		const p = atomPos(spec, i, x, y, bond, flipX, rotate);
		const o = atomOffset[i];
		return o ? {x: p.x + o.dx, y: p.y + o.dy} : p;
	});
	const pulse = idlePulse(frame);
	// Paint order: sticks, then balls (H last so they sit on top of the stick ends).
	const order = spec.atoms.map((a, i) => i).sort((a, b) => (spec.atoms[a].el === 'H' ? 1 : 0) - (spec.atoms[b].el === 'H' ? 1 : 0));
	return (
		<g opacity={opacity}>
			{spec.bonds.map(([a, b, o], k) => (
				<Stick
					key={`b${k}`}
					x1={pos[a].x} y1={pos[a].y} x2={pos[b].x} y2={pos[b].y}
					order={o ?? 1}
					color={bondColor[k] ?? BOND}
					opacity={Math.min(bondOpacity[k] ?? 1, atomOpacity[a] ?? 1, atomOpacity[b] ?? 1)}
				/>
			))}
			{highlight.map((i) => {
				const a = spec.atoms[i];
				const r = atomR(a.el, a.label) * ballScale;
				return (
					<circle key={`h${i}`} cx={pos[i].x} cy={pos[i].y} r={r + 7 + pulse * 2} fill="none" stroke={highlightColor} strokeWidth={3.5} strokeDasharray="5 4" opacity={highlightOpacity * (atomOpacity[i] ?? 1)} />
				);
			})}
			{order.map((i) => {
				const a = spec.atoms[i];
				return <Ball key={`a${i}`} id={id} el={a.el} x={pos[i].x} y={pos[i].y} r={atomR(a.el, a.label) * ballScale} label={a.label} opacity={atomOpacity[i] ?? 1} />;
			})}
			{spec.charges?.map((c, k) => {
				const p = pos[c.atom];
				const r = atomR(spec.atoms[c.atom].el, spec.atoms[c.atom].label) * ballScale;
				return (
					<text key={`c${k}`} x={p.x + r * 0.9} y={p.y - r * 0.7} fill={TOK.ink} fontSize={20} fontWeight={900} opacity={atomOpacity[c.atom] ?? 1}>
						{c.text}
					</text>
				);
			})}
			{children}
		</g>
	);
};

/** A pair of lone-pair dots beside an atom, pointing along `angle` degrees (0 = right, -90 = up). */
export const LonePair = ({x, y, angle, dist = 30, opacity = 1, color = TOK.ink}: {x: number; y: number; angle: number; dist?: number; opacity?: number; color?: string}) => {
	const a = (angle * Math.PI) / 180;
	const cx = x + Math.cos(a) * dist;
	const cy = y + Math.sin(a) * dist;
	const px = -Math.sin(a) * 6;
	const py = Math.cos(a) * 6;
	return (
		<g opacity={opacity}>
			<circle cx={cx + px} cy={cy + py} r={4.2} fill={color} />
			<circle cx={cx - px} cy={cy - py} r={4.2} fill={color} />
		</g>
	);
};

/** Dashed hydrogen bond. */
export const HBond = ({x1, y1, x2, y2, opacity = 1, color = TOK.amber, width = 4}: {x1: number; y1: number; x2: number; y2: number; opacity?: number; color?: string; width?: number}) => (
	<line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={width} strokeDasharray="3 7" strokeLinecap="round" opacity={opacity} />
);

/** Curly arrow (electron-pair movement) from p0 to p1 bowing by `bow` px. */
export const CurlyArrow = ({x1, y1, x2, y2, bow = 30, color = TOK.amber, opacity = 1, progress = 1}: {x1: number; y1: number; x2: number; y2: number; bow?: number; color?: string; opacity?: number; progress?: number}) => {
	const mx = (x1 + x2) / 2;
	const my = (y1 + y2) / 2;
	const len = Math.hypot(x2 - x1, y2 - y1) || 1;
	const cx = mx + (-(y2 - y1) / len) * bow;
	const cy = my + ((x2 - x1) / len) * bow;
	// Point on the quadratic at t, and its tangent.
	const t = Math.max(0.001, Math.min(1, progress));
	const qx = (1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * cx + t * t * x2;
	const qy = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * cy + t * t * y2;
	const tx = 2 * (1 - t) * (cx - x1) + 2 * t * (x2 - cx);
	const ty = 2 * (1 - t) * (cy - y1) + 2 * t * (y2 - cy);
	const ang = Math.atan2(ty, tx);
	const h = 14;
	// Sub-curve from 0..t (de Casteljau).
	const c1x = x1 + (cx - x1) * t;
	const c1y = y1 + (cy - y1) * t;
	return (
		<g opacity={opacity}>
			<path d={`M ${x1} ${y1} Q ${c1x} ${c1y} ${qx} ${qy}`} fill="none" stroke={color} strokeWidth={4.5} strokeLinecap="round" />
			<path
				d={`M ${qx} ${qy} L ${qx - Math.cos(ang) * h + Math.cos(ang + Math.PI / 2) * h * 0.55} ${qy - Math.sin(ang) * h + Math.sin(ang + Math.PI / 2) * h * 0.55} L ${qx - Math.cos(ang) * h - Math.cos(ang + Math.PI / 2) * h * 0.55} ${qy - Math.sin(ang) * h - Math.sin(ang + Math.PI / 2) * h * 0.55} Z`}
				fill={color}
			/>
		</g>
	);
};

/** Diagram title line used by every m7b kind. */
export const Title = ({text, opacity = 1, y = 34}: {text: string; opacity?: number; y?: number}) => (
	<text x={380} y={y} textAnchor="middle" fill={TOK.ink} fontSize={28} fontWeight={800} opacity={opacity}>
		{text}
	</text>
);

/** Seconds-into-scene → frames after the diagram's `delay` (bullets carry `at` in seconds). */
export const secToBeat = (sec: number, delay = 62) => Math.max(0, Math.round(sec * 30 - delay));
