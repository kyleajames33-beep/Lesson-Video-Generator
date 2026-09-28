// mol — the organic-molecule engine for the chem-y12-m7 lane.
//
// A molecule is written as its heavy-atom skeleton in a compact string form,
// and every hydrogen is filled in automatically from valency, so a structure
// on screen can never have a five-bond carbon or a missing H:
//
//   atoms: "c1:C@0,0 c2:C@1,0 o:O@2,0"      id:Element@x,y  (grid units, y down)
//   bonds: "c1-c2 c2-o"                       a-b single, a=b double, a#b triple
//
// Hydrogens get ids `${atomId}h0`, `${atomId}h1`, … and are placed at the
// directions that sit furthest from the atom's existing bonds (a chain carbon
// gets H up and down, a terminal CH₃ gets a cross, an sp² =CH₂ gets the
// 120° fork). Explicit H atoms (el "H") can be written when an H must move
// on its own during a reaction; they count toward the partner's valency.
// `h: {id: [angles]}` overrides the auto directions (degrees, 0 = right,
// 90 = up); `h: {id: []}` with `hCount: {id: n}` is never needed for neutral
// molecules, but charged species can set `hCount`.
//
// Lane-local on purpose (docs/diorama-system.md). `MolView` and the parser are
// general enough to be promoted into diorama.tsx later.

import type {ReactNode} from 'react';
import {interpolate, spring} from 'remotion';
import {TOK} from '../../../../styles/tokens';

export const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
export const fadeAt = (frame: number, d: number, len = 12) => interpolate(frame, [d, d + len], [0, 1], clamp);
export const popAt = (frame: number, fps: number, d: number) =>
	Math.max(0, spring({frame: frame - d, fps, config: {damping: 12, stiffness: 190, mass: 0.6}}));

export const shade = (hex: string, amt: number) => {
	const n = parseInt(hex.slice(1), 16);
	const ch = (v: number) => Math.max(0, Math.min(255, Math.round(v + amt * 255)));
	return `#${((1 << 24) | (ch((n >> 16) & 255) << 16) | (ch((n >> 8) & 255) << 8) | ch(n & 255)).toString(16).slice(1)}`;
};

// CPK colours (matches diorama.tsx ELEMENT_COLORS, plus the halogens this
// module needs: Br dark red-brown, I violet, F pale green).
export const EL_COLOR: Record<string, string> = {
	H: '#f2f2ef',
	C: '#3b3b3b',
	O: '#e0433a',
	N: '#3f6fd8',
	Cl: '#4fbf4a',
	Br: '#a3321f',
	I: '#7b3fa8',
	F: '#9ad86a',
	S: '#f0c93a',
	Na: '#8e5bd6',
	X: '#8a8f99',
};
const VALENCE: Record<string, number> = {H: 1, C: 4, O: 2, N: 3, Cl: 1, Br: 1, I: 1, F: 1, S: 2, X: 1};
const RADIUS: Record<string, number> = {H: 0.19, C: 0.27, O: 0.26, N: 0.26, Cl: 0.3, Br: 0.32, I: 0.34, F: 0.24, S: 0.3, Na: 0.3, X: 0.3};
/** Elements that carry their symbol on the ball (C and H are recognised by colour). */
const LABELLED = new Set(['O', 'N', 'Cl', 'Br', 'I', 'F', 'S', 'Na', 'X']);
export const H_BOND = 0.66;

export type MolSpec = {
	atoms: string;
	bonds?: string;
	/** Override H directions, degrees (0 right, 90 up). */
	h?: Record<string, number[]>;
	/** Override the H count (charged species). */
	hCount?: Record<string, number>;
	/** Ball text overrides, e.g. {"c1": "1"} (chain numbering is separate). */
	charge?: Record<string, string>;
};

export type Atom = {id: string; el: string; x: number; y: number; parent?: string; charge?: string};
export type Bond = {a: string; b: string; order: number};
export type Mol = {atoms: Atom[]; bonds: Bond[]};

const parseAtoms = (s: string): Atom[] =>
	s
		.trim()
		.split(/\s+/)
		.filter(Boolean)
		.map((tok) => {
			const m = tok.match(/^([A-Za-z0-9_]+):([A-Z][a-z]?)@(-?[\d.]+),(-?[\d.]+)$/);
			if (!m) throw new Error(`mol: bad atom token "${tok}"`);
			return {id: m[1], el: m[2], x: Number(m[3]), y: Number(m[4])};
		});

const parseBonds = (s: string | undefined): Bond[] =>
	(s ?? '')
		.trim()
		.split(/\s+/)
		.filter(Boolean)
		.map((tok) => {
			const m = tok.match(/^([A-Za-z0-9_]+)([-=#])([A-Za-z0-9_]+)$/);
			if (!m) throw new Error(`mol: bad bond token "${tok}"`);
			return {a: m[1], b: m[3], order: m[2] === '-' ? 1 : m[2] === '=' ? 2 : 3};
		});

const angDist = (a: number, b: number) => {
	const d = Math.abs((((a - b) % 360) + 360) % 360);
	return Math.min(d, 360 - d);
};

// Preference used only to break exact ties: up, down, right, left, then the rest.
const PREF = [90, 270, 0, 180, 60, 120, 240, 300, 30, 150, 210, 330];
const prefRank = (a: number) => {
	const i = PREF.indexOf(a);
	return i < 0 ? PREF.length + a / 360 : i;
};

/** Best `n` H directions around an atom whose bonds point along `taken` (degrees). */
export const bestHDirs = (taken: number[], n: number): number[] => {
	if (n <= 0) return [];
	const cands = Array.from({length: 24}, (_, i) => i * 15).filter((c) => taken.every((t) => angDist(c, t) > 1));
	let best: number[] = [];
	let bestScore = [-1, -1, -1];
	const combos = (start: number, pick: number[]) => {
		if (pick.length === n) {
			const all = [...taken, ...pick];
			let minD = 360, sumMin = 0;
			for (let i = 0; i < all.length; i++) {
				let mi = 360;
				for (let j = 0; j < all.length; j++) if (i !== j) mi = Math.min(mi, angDist(all[i], all[j]));
				minD = Math.min(minD, mi);
				sumMin += mi;
			}
			const pref = -pick.reduce((s, a) => s + prefRank(a), 0);
			const score = [Math.round(minD), Math.round(sumMin), pref];
			for (let k = 0; k < 3; k++) {
				if (score[k] > bestScore[k]) {
					best = [...pick];
					bestScore = score;
					return;
				}
				if (score[k] < bestScore[k]) return;
			}
			return;
		}
		for (let i = start; i < cands.length; i++) combos(i + 1, [...pick, cands[i]]);
	};
	combos(0, []);
	return best;
};

const cache = new Map<string, Mol>();

/** Parse a spec and add every implicit hydrogen. Memoised per spec. */
export const buildMol = (spec: MolSpec): Mol => {
	const key = JSON.stringify(spec);
	const hit = cache.get(key);
	if (hit) return hit;
	const atoms = parseAtoms(spec.atoms);
	const bonds = parseBonds(spec.bonds);
	const byId = new Map(atoms.map((a) => [a.id, a]));
	for (const b of bonds) {
		if (!byId.has(b.a) || !byId.has(b.b)) throw new Error(`mol: bond ${b.a}–${b.b} names a missing atom`);
	}
	const out: Atom[] = [];
	for (const a of atoms) {
		if (spec.charge?.[a.id]) a.charge = spec.charge[a.id];
		out.push(a);
		if (a.el === 'H') continue;
		const mine = bonds.filter((b) => b.a === a.id || b.b === a.id);
		const used = mine.reduce((s, b) => s + b.order, 0);
		const nH = spec.hCount?.[a.id] ?? (VALENCE[a.el] ?? 0) - used;
		if (nH < 0) throw new Error(`mol: ${a.id} (${a.el}) has ${used} bonds, more than its valency`);
		const taken = mine.map((b) => {
			const o = byId.get(b.a === a.id ? b.b : b.a)!;
			return ((Math.atan2(-(o.y - a.y), o.x - a.x) * 180) / Math.PI + 360) % 360;
		});
		const dirs = spec.h?.[a.id] ?? bestHDirs(taken, nH);
		dirs.slice(0, nH).forEach((deg, k) => {
			const r = (deg * Math.PI) / 180;
			const id = `${a.id}h${k}`;
			out.push({id, el: 'H', x: a.x + Math.cos(r) * H_BOND, y: a.y - Math.sin(r) * H_BOND, parent: a.id});
			bonds.push({a: a.id, b: id, order: 1});
		});
	}
	const mol = {atoms: out, bonds};
	cache.set(key, mol);
	return mol;
};

/** Molecular formula in Hill order (C, H, then alphabetical), with Unicode subscripts. */
export const formulaOf = (mol: Mol) => {
	const n: Record<string, number> = {};
	for (const a of mol.atoms) n[a.el] = (n[a.el] ?? 0) + 1;
	const sub = (k: number) => (k === 1 ? '' : String(k).replace(/\d/g, (d) => '₀₁₂₃₄₅₆₇₈₉'[Number(d)]));
	const keys = Object.keys(n).sort((a, b) => (a === 'C' ? -1 : b === 'C' ? 1 : a === 'H' ? -1 : b === 'H' ? 1 : a.localeCompare(b)));
	return keys.map((k) => k + sub(n[k])).join('');
};

export const bboxOf = (atoms: {x: number; y: number; el: string}[]) => {
	let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
	for (const a of atoms) {
		const r = RADIUS[a.el] ?? 0.3;
		x0 = Math.min(x0, a.x - r);
		y0 = Math.min(y0, a.y - r);
		x1 = Math.max(x1, a.x + r);
		y1 = Math.max(y1, a.y + r);
	}
	if (!Number.isFinite(x0)) return {x0: 0, y0: 0, x1: 0, y1: 0, w: 0, h: 0, cx: 0, cy: 0};
	return {x0, y0, x1, y1, w: x1 - x0, h: y1 - y0, cx: (x0 + x1) / 2, cy: (y0 + y1) / 2};
};

/** Glossy-ball gradients for every element this lane draws. */
export const MolDefs = ({id}: {id: string}) => (
	<defs>
		{Object.entries(EL_COLOR).map(([el, base]) => (
			<radialGradient key={el} id={`${id}-el-${el}`} cx="38%" cy="32%" r="70%" fx="32%" fy="26%">
				<stop offset="0%" stopColor="#ffffff" />
				<stop offset="22%" stopColor={shade(base, 0.08)} />
				<stop offset="75%" stopColor={base} />
				<stop offset="100%" stopColor={shade(base, -0.28)} />
			</radialGradient>
		))}
		<filter id={`${id}-soft`} x="-40%" y="-40%" width="180%" height="180%">
			<feGaussianBlur stdDeviation="5" />
		</filter>
	</defs>
);

export const BOND_COLOR = '#6f6c66';

/** A drawn atom: position in px, scale (pop), opacity, optional text on the ball. */
export type DrawAtom = {id: string; el: string; x: number; y: number; s: number; o: number; text?: string; textColor?: string};
/** A drawn bond: `lines` is 1–3; each line has its own opacity (a fading π bond). */
export type DrawBond = {x1: number; y1: number; x2: number; y2: number; lines: number[]; spread: number; color?: string; width?: number; colors?: (string | undefined)[]; count?: number};

/** Paint bonds then atoms. `u` is the grid unit in px. */
export const MolLayer = ({id, atoms, bonds, u}: {id: string; atoms: DrawAtom[]; bonds: DrawBond[]; u: number}) => {
	const bw = Math.max(3, u * 0.075);
	return (
		<g>
			{bonds.map((b, i) => {
				const dx = b.x2 - b.x1, dy = b.y2 - b.y1;
				const len = Math.hypot(dx, dy) || 1;
				const nx = -dy / len, ny = dx / len;
				const k = b.count ?? b.lines.length;
				const gap = u * 0.13 * b.spread;
				return (
					<g key={i}>
						{b.lines.map((o, j) => {
							const off = (j - (k - 1) / 2) * gap;
							return o > 0.001 ? (
								<line
									key={j}
									x1={b.x1 + nx * off}
									y1={b.y1 + ny * off}
									x2={b.x2 + nx * off}
									y2={b.y2 + ny * off}
									stroke={b.colors?.[j] ?? b.color ?? BOND_COLOR}
									strokeWidth={b.width ?? bw}
									strokeLinecap="round"
									opacity={o}
								/>
							) : null;
						})}
					</g>
				);
			})}
			{atoms.map((a) => {
				if (a.o <= 0.001 || a.s <= 0.001) return null;
				const r = (RADIUS[a.el] ?? 0.3) * u;
				const base = EL_COLOR[a.el] ?? EL_COLOR.X;
				const label = a.text ?? (LABELLED.has(a.el) ? a.el : undefined);
				const fs = label && label.length > 1 ? r * 0.95 : r * 1.1;
				return (
					<g key={a.id} opacity={a.o} transform={`translate(${a.x},${a.y}) scale(${a.s})`}>
						<circle r={r} fill={`url(#${id}-el-${a.el in EL_COLOR ? a.el : 'X'})`} stroke={shade(base, -0.35)} strokeWidth={1} />
						{label && (
							<text y={fs * 0.35} textAnchor="middle" fill={a.textColor ?? (a.el === 'H' ? TOK.ink : '#ffffff')} fontSize={fs} fontWeight={800}>
								{label}
							</text>
						)}
					</g>
				);
			})}
		</g>
	);
};

/** Soft halo behind a group of atoms (functional-group spotlight). */
export const Halo = ({pts, r, color, opacity, width}: {pts: {x: number; y: number}[]; r: number; color: string; opacity: number; width?: number}) => {
	if (opacity <= 0.001 || !pts.length) return null;
	return (
		<g opacity={opacity * 0.34}>
			{pts.map((p, i) => (
				<circle key={`c${i}`} cx={p.x} cy={p.y} r={r} fill={color} />
			))}
			{pts.slice(1).map((p, i) => (
				<line key={`l${i}`} x1={pts[i].x} y1={pts[i].y} x2={p.x} y2={p.y} stroke={color} strokeWidth={width ?? r * 1.6} strokeLinecap="round" />
			))}
		</g>
	);
};

/** Rounded tag with centred text. */
export const Chip = ({
	x, y, text, color, fill = '#ffffff', size = 16, opacity = 1, anchor = 'middle',
}: {x: number; y: number; text: string; color: string; fill?: string; size?: number; opacity?: number; anchor?: 'start' | 'middle' | 'end'}) => {
	if (opacity <= 0.001) return null;
	const w = [...text].length * size * 0.56 + 22;
	const h = size + 12;
	const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'start' ? x : x - w;
	return (
		<g opacity={opacity}>
			<rect x={x0} y={y - h / 2} width={w} height={h} rx={h / 2} fill={fill} stroke={color} strokeWidth={2} />
			<text x={x0 + w / 2} y={y + size * 0.36} textAnchor="middle" fill={color} fontSize={size} fontWeight={800}>
				{text}
			</text>
		</g>
	);
};

/** A long, low stone stage (the standard plinth squashed), for molecules to stand over. */
export const StageSlab = ({id, cx, cy, rx, children}: {id: string; cx: number; cy: number; rx: number; children?: ReactNode}) => {
	const ry = Math.min(rx * 0.14, 18);
	const depth = Math.min(rx * 0.06, 10);
	return (
		<g>
			<defs>
				<radialGradient id={`${id}-slab-top`} cx="38%" cy="30%" r="80%">
					<stop offset="0%" stopColor="#e4e1db" />
					<stop offset="70%" stopColor="#d3cfc7" />
					<stop offset="100%" stopColor="#bdb8ae" />
				</radialGradient>
				<linearGradient id={`${id}-slab-side`} x1="0" x2="1" y1="0" y2="0">
					<stop offset="0%" stopColor="#cfccc5" />
					<stop offset="40%" stopColor="#b3afa7" />
					<stop offset="100%" stopColor="#8f8b83" />
				</linearGradient>
				<filter id={`${id}-soft`} x="-40%" y="-40%" width="180%" height="180%">
					<feGaussianBlur stdDeviation="5" />
				</filter>
			</defs>
			<ellipse cx={cx + rx * 0.05} cy={cy + depth + ry * 0.6} rx={rx * 1.03} ry={ry * 0.95} fill="rgba(40,36,30,0.2)" filter={`url(#${id}-soft)`} />
			<path d={`M ${cx - rx} ${cy} L ${cx - rx} ${cy + depth} A ${rx} ${ry} 0 0 0 ${cx + rx} ${cy + depth} L ${cx + rx} ${cy} Z`} fill={`url(#${id}-slab-side)`} />
			<ellipse cx={cx} cy={cy + 1.5} rx={rx} ry={ry} fill="#bdb8ae" />
			<ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={`url(#${id}-slab-top)`} />
			<ellipse cx={cx} cy={cy} rx={rx * 0.92} ry={ry * 0.8} fill="none" stroke="#ffffff" strokeOpacity={0.35} strokeWidth={1.5} />
			{children}
		</g>
	);
};

/** A glass test tube whose liquid colour cross-fades from `from` to `to`. */
export const Tube = ({
	x, y, h = 150, w = 46, from, to, t, label, labelColor = TOK.inkDim,
}: {x: number; y: number; h?: number; w?: number; from: string; to: string; t: number; label?: string; labelColor?: string}) => {
	const top = y - h;
	const level = top + h * 0.3;
	const r = w / 2;
	const body = `M ${x - r} ${level} L ${x - r} ${y - r} A ${r} ${r} 0 0 0 ${x + r} ${y - r} L ${x + r} ${level} Z`;
	const glass = `M ${x - r - 5} ${top} L ${x - r} ${top + 6} L ${x - r} ${y - r} A ${r} ${r} 0 0 0 ${x + r} ${y - r} L ${x + r} ${top + 6} L ${x + r + 5} ${top}`;
	return (
		<g>
			<ellipse cx={x + 4} cy={y + 6} rx={w * 0.7} ry={6} fill="rgba(40,36,30,0.18)" />
			<path d={body} fill={from} opacity={1 - t} />
			<path d={body} fill={to} opacity={t} />
			<path d={glass} fill="none" stroke="rgba(70,90,110,0.6)" strokeWidth={3} strokeLinejoin="round" />
			<rect x={x - r + 6} y={top + 14} width={6} height={h - 40} rx={3} fill="#ffffff" opacity={0.5} />
			{label && (
				<text x={x} y={y + 30} textAnchor="middle" fill={labelColor} fontSize={16} fontWeight={800}>
					{label}
				</text>
			)}
		</g>
	);
};

/** Text with independently fading pieces, laid out as one line (no reflow as pieces arrive). */
export type NamePart = {t: string; at?: number; c?: 'ink' | 'accent' | 'amber' | 'dim' | 'second'};
export const partColor = (c: NamePart['c'], accent: string) =>
	c === 'accent' ? accent : c === 'amber' ? TOK.amberInk : c === 'dim' ? TOK.inkDim : c === 'second' ? SECOND : TOK.ink;
/** Second colour of meaning (the "other half" in two-part comparisons). */
export const SECOND = '#3f6fd8';

export const PartsText = ({
	x, y, parts, frame, size, accent, anchor = 'middle', weight = 800,
}: {x: number; y: number; parts: NamePart[]; frame: number; size: number; accent: string; anchor?: 'start' | 'middle' | 'end'; weight?: number}) => (
	<text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={weight}>
		{parts.map((p, i) => (
			<tspan key={i} fill={partColor(p.c, accent)} fillOpacity={p.at === undefined ? 1 : fadeAt(frame, p.at, 10)}>
				{p.t}
			</tspan>
		))}
	</text>
);

/** "a string" | NamePart[] → NamePart[] */
export const toParts = (v: string | NamePart[] | undefined, at?: number): NamePart[] =>
	v === undefined ? [] : typeof v === 'string' ? [{t: v, at}] : v.map((p) => ({...p, at: p.at ?? at}));
