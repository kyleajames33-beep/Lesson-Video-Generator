// mol-draw: a tiny structural-formula renderer for the chem-y12-m8 "molecules"
// group (SkeletalDiagram, ChiralityDiagram, PolymerDiagram). Lane-local; could
// be promoted if another lane needs skeletal formulas.
//
// A molecule is a list of atoms (positions in BOND-LENGTH units, SVG y-down)
// and bonds. An unlabelled atom is a skeletal carbon vertex; a labelled atom
// ("OH", "O", "CH₃", "HN"…) has the bonding atom's letter centred on the point
// (`align: 'left'` = text runs rightwards from it, `'right'` = leftwards).
// Every structure below was drawn from its known connectivity and checked:
// aromatic rings are Kekulé hexagons (alternate double bonds drawn inside).

import type {ReactNode} from 'react';
import {TOK} from '../../../../styles/tokens';

export type MAtom = {x: number; y: number; label?: string; align?: 'left' | 'right' | 'center'};
/** order 2: `ring` gives the ring centre (inner second line), else a centred double line. */
export type MBond = {a: number; b: number; order?: 1 | 2; ring?: [number, number]};
export type MolDef = {atoms: MAtom[]; bonds: MBond[]};

const S3 = Math.sqrt(3) / 2; // 0.866
const dir = (deg: number): [number, number] => [Math.cos((deg * Math.PI) / 180), Math.sin((deg * Math.PI) / 180)];
export const step = (from: MAtom, deg: number, label?: string, align?: MAtom['align']): MAtom => {
	const [dx, dy] = dir(deg);
	return {x: from.x + dx, y: from.y + dy, label, align};
};

/** Pointy-top benzene ring (vertex 0 at the top, clockwise), centred on (cx, cy). */
export const ring6 = (cx = 0, cy = 0): {atoms: MAtom[]; bonds: MBond[]} => {
	const atoms = Array.from({length: 6}, (_, k) => {
		const [dx, dy] = dir(-90 + 60 * k);
		return {x: cx + dx, y: cy + dy};
	});
	const bonds: MBond[] = atoms.map((_, k) => ({a: k, b: (k + 1) % 6, order: k % 2 === 0 ? 2 : 1, ring: [cx, cy] as [number, number]}));
	return {atoms, bonds};
};

// ── The structures ──────────────────────────────────────────────────────────
// Ring vertices: 0 top (C1), 1 upper-right (C2), 2 lower-right, 3 bottom, 4 lower-left, 5 upper-left.

/** Salicylic acid (2-hydroxybenzoic acid): -COOH on C1, -OH on C2 (ortho).
 * Atoms 6-8 = COOH (6 C, 7 =O, 8 OH), 9 = phenol O(H). */
export const salicylicAcid = (): MolDef => {
	const r = ring6();
	const c = step(r.atoms[0], -90);
	return {
		atoms: [...r.atoms, c, step(c, -30, 'O', 'center'), step(c, -150, 'HO', 'right'), step(r.atoms[1], -30, 'OH', 'left')],
		bonds: [...r.bonds, {a: 0, b: 6}, {a: 6, b: 7, order: 2}, {a: 6, b: 8}, {a: 1, b: 9}],
	};
};

/** Aspirin (2-acetoxybenzoic acid): -COOH on C1, -O-C(=O)-CH₃ on C2 (ortho).
 * Atoms 0-8 as salicylic acid; 9 ester O, 10 ester C, 11 C=O oxygen, 12 CH₃. */
export const aspirin = (): MolDef => {
	const sa = salicylicAcid();
	const o = {...sa.atoms[9], label: 'O', align: 'center' as const};
	const c = step(o, 30);
	return {
		atoms: [...sa.atoms.slice(0, 9), o, c, step(c, -90, 'O', 'center'), step(c, 30, 'CH₃', 'left')],
		bonds: [...sa.bonds, {a: 9, b: 10}, {a: 10, b: 11, order: 2}, {a: 10, b: 12}],
	};
};

/** Paracetamol: -NH-C(=O)-CH₃ on C1 (top), -OH on C4 (bottom), para.
 * 6 N(H), 7 C, 8 =O, 9 CH₃, 10 phenol O(H). */
export const paracetamol = (): MolDef => {
	const r = ring6();
	const n = step(r.atoms[0], -90, 'HN', 'right');
	const c = step(n, -30);
	return {
		atoms: [...r.atoms, n, c, step(c, -90, 'O', 'center'), step(c, 30, 'CH₃', 'left'), step(r.atoms[3], 90, 'OH', 'left')],
		bonds: [...r.bonds, {a: 0, b: 6}, {a: 6, b: 7}, {a: 7, b: 8, order: 2}, {a: 7, b: 9}, {a: 3, b: 10}],
	};
};

/** Ibuprofen: -CH(CH₃)-COOH on C1 (top), -CH₂-CH(CH₃)₂ on C4 (bottom), para.
 * 6 CH (α), 7 CH₃, 8 C(OOH), 9 =O, 10 OH, 11 CH₂, 12 CH, 13 CH₃, 14 CH₃. */
export const ibuprofen = (): MolDef => {
	const r = ring6();
	const a = step(r.atoms[0], -90);
	const cc = step(a, -30);
	const ch2 = step(r.atoms[3], 90);
	const ch = step(ch2, 30);
	return {
		atoms: [
			...r.atoms, a, step(a, -150, 'H₃C', 'right'), cc, step(cc, -90, 'O', 'center'), step(cc, 30, 'OH', 'left'),
			ch2, ch, step(ch, 90, 'CH₃', 'left'), step(ch, -30, 'CH₃', 'left'),
		],
		bonds: [
			...r.bonds, {a: 0, b: 6}, {a: 6, b: 7}, {a: 6, b: 8}, {a: 8, b: 9, order: 2}, {a: 8, b: 10},
			{a: 3, b: 11}, {a: 11, b: 12}, {a: 12, b: 13}, {a: 12, b: 14},
		],
	};
};

/** Ethanoic (acetic) anhydride, (CH₃CO)₂O. 0 CH₃, 1 C, 2 =O, 3 bridging O, 4 C, 5 =O, 6 CH₃. */
export const aceticAnhydride = (): MolDef => {
	const m1: MAtom = {x: 0, y: 0, label: 'H₃C', align: 'right'};
	const c1 = step(m1, -30);
	const o = step(c1, 30, 'O', 'center');
	const c2 = step(o, -30);
	return {
		atoms: [m1, c1, step(c1, -90, 'O', 'center'), o, c2, step(c2, -90, 'O', 'center'), step(c2, 30, 'CH₃', 'left')],
		bonds: [{a: 0, b: 1}, {a: 1, b: 2, order: 2}, {a: 1, b: 3}, {a: 3, b: 4}, {a: 4, b: 5, order: 2}, {a: 4, b: 6}],
	};
};

/** Ethanoic (acetic) acid, CH₃COOH. 0 CH₃, 1 C, 2 =O, 3 OH. */
export const ethanoicAcid = (): MolDef => {
	const m: MAtom = {x: 0, y: 0, label: 'H₃C', align: 'right'};
	const c = step(m, -30);
	return {atoms: [m, c, step(c, -90, 'O', 'center'), step(c, 30, 'OH', 'left')], bonds: [{a: 0, b: 1}, {a: 1, b: 2, order: 2}, {a: 1, b: 3}]};
};

/** Butane, skeletal zigzag (4 carbons in a chain). */
export const butane = (): MolDef => ({
	atoms: [{x: 0, y: 0.25}, {x: S3, y: -0.25}, {x: 2 * S3, y: 0.25}, {x: 3 * S3, y: -0.25}],
	bonds: [{a: 0, b: 1}, {a: 1, b: 2}, {a: 2, b: 3}],
});
/** Methylpropane: one carbon bonded to three others. */
export const methylpropane = (): MolDef => ({
	atoms: [{x: 0, y: 0.1}, {x: 0, y: -0.9}, {x: S3, y: 0.6}, {x: -S3, y: 0.6}],
	bonds: [{a: 0, b: 1}, {a: 0, b: 2}, {a: 0, b: 3}],
});
/** But-2-ene: C2=C3 with the two CH₃ ends on the same side (cis) or opposite sides (trans). */
export const but2ene = (cis: boolean): MolDef => ({
	atoms: [{x: 0, y: 0}, {x: 1, y: 0}, {x: -0.5, y: -S3}, cis ? {x: 1.5, y: -S3} : {x: 1.5, y: S3}],
	bonds: [{a: 0, b: 1, order: 2, ring: [0.5, cis ? -2 : 0.0001]}, {a: 0, b: 2}, {a: 1, b: 3}],
});

// ── Geometry helpers ────────────────────────────────────────────────────────
export const bbox = (m: MolDef) => {
	const xs = m.atoms.map((a) => a.x), ys = m.atoms.map((a) => a.y);
	return {x0: Math.min(...xs), x1: Math.max(...xs), y0: Math.min(...ys), y1: Math.max(...ys)};
};

// ── Renderer ────────────────────────────────────────────────────────────────
export type MolDrawProps = {
	mol: MolDef;
	/** Screen position of the molecule's (0, 0) point and the bond length in px. */
	x: number; y: number; s: number;
	font?: number;
	stroke?: string;
	width?: number;
	/** 0..1 draw progress for each bond (default 1). */
	bondP?: (i: number) => number;
	/** 0..1 opacity for each atom label (default 1). */
	atomP?: (i: number) => number;
	/** Label override per atom index. */
	labels?: Record<number, string | undefined>;
	/** Per-atom label colour. */
	labelColor?: (i: number) => string | undefined;
	opacity?: number;
	halo?: string; // text knock-out colour
	children?: ReactNode;
};

const charW = 0.6;

export const MolDraw = ({
	mol, x, y, s, font = 20, stroke = TOK.ink, width = 3, bondP, atomP, labels, labelColor, opacity = 1, halo = '#ffffff', children,
}: MolDrawProps) => {
	const P = (i: number) => ({X: x + mol.atoms[i].x * s, Y: y + mol.atoms[i].y * s});
	const lab = (i: number) => (labels && i in labels ? labels[i] : mol.atoms[i].label);
	const trim = font * 0.62;
	return (
		<g opacity={opacity}>
			{mol.bonds.map((b, j) => {
				const p = bondP ? bondP(j) : 1;
				if (p <= 0) return null;
				const A = P(b.a), B = P(b.b);
				const len = Math.hypot(B.X - A.X, B.Y - A.Y);
				const ux = (B.X - A.X) / len, uy = (B.Y - A.Y) / len;
				const ta = lab(b.a) ? trim : 0, tb = lab(b.b) ? trim : 0;
				const x1 = A.X + ux * ta, y1 = A.Y + uy * ta;
				const full = len - ta - tb;
				const x2 = x1 + ux * full * p, y2 = y1 + uy * full * p;
				const nx = -uy, ny = ux;
				const lines: [number, number, number, number][] = [];
				if (b.order === 2 && b.ring) {
					// second line inside the ring, shortened
					const cx = x + b.ring[0] * s, cy = y + b.ring[1] * s;
					const mx = (A.X + B.X) / 2, my = (A.Y + B.Y) / 2;
					const side = (cx - mx) * nx + (cy - my) * ny > 0 ? 1 : -1;
					const off = s * 0.17 * side;
					const sh = s * 0.16;
					lines.push([x1, y1, x2, y2]);
					const ix1 = x1 + ux * sh + nx * off, iy1 = y1 + uy * sh + ny * off;
					const ifull = Math.max(0, full - sh * 2);
					lines.push([ix1, iy1, ix1 + ux * ifull * p, iy1 + uy * ifull * p]);
				} else if (b.order === 2) {
					const off = s * 0.085;
					lines.push([x1 + nx * off, y1 + ny * off, x2 + nx * off, y2 + ny * off]);
					lines.push([x1 - nx * off, y1 - ny * off, x2 - nx * off, y2 - ny * off]);
				} else {
					lines.push([x1, y1, x2, y2]);
				}
				return (
					<g key={j}>
						{lines.map(([a1, b1, a2, b2], k) => (
							<line key={k} x1={a1} y1={b1} x2={a2} y2={b2} stroke={stroke} strokeWidth={width} strokeLinecap="round" />
						))}
					</g>
				);
			})}
			{mol.atoms.map((a, i) => {
				const L = lab(i);
				if (!L) return null;
				const op = atomP ? atomP(i) : 1;
				if (op <= 0) return null;
				const {X, Y} = P(i);
				const half = (font * charW) / 2;
				const al = a.align ?? 'center';
				const tx = al === 'left' ? X - half : al === 'right' ? X + half : X;
				const anchor = al === 'left' ? 'start' : al === 'right' ? 'end' : 'middle';
				return (
					<text
						key={i}
						x={tx}
						y={Y + font * 0.36}
						textAnchor={anchor}
						fontSize={font}
						fontWeight={800}
						fill={labelColor?.(i) ?? stroke}
						stroke={halo}
						strokeWidth={4}
						paintOrder="stroke"
						opacity={op}
					>
						{L}
					</text>
				);
			})}
			{children}
		</g>
	);
};

/**
 * A soft highlight blob behind a group of atoms (draw BEFORE MolDraw).
 * Covers the listed atoms plus every bond between two of them; `fillRing`
 * (ring-centre coordinates) also floods the inside of an aromatic ring.
 */
export const GroupHalo = ({
	mol, x, y, s, atoms, color, opacity = 1, r, fillRing, pad = 1,
}: {mol: MolDef; x: number; y: number; s: number; atoms: number[]; color: string; opacity?: number; r?: number; fillRing?: [number, number]; pad?: number}) => {
	if (opacity <= 0) return null;
	const rad = (r ?? s * 0.42) * pad;
	const set = new Set(atoms);
	const P = (i: number) => ({X: x + mol.atoms[i].x * s, Y: y + mol.atoms[i].y * s});
	const bonds = mol.bonds.filter((b) => set.has(b.a) && set.has(b.b));
	const ringPts = fillRing ? atoms.map((i) => P(i)) : [];
	return (
		<g opacity={opacity}>
			{fillRing && <polygon points={ringPts.map((p) => `${p.X},${p.Y}`).join(' ')} fill={color} stroke={color} strokeWidth={rad * 2} strokeLinejoin="round" />}
			{bonds.map((b, j) => {
				const A = P(b.a), B = P(b.b);
				return <line key={j} x1={A.X} y1={A.Y} x2={B.X} y2={B.Y} stroke={color} strokeWidth={rad * 2} strokeLinecap="round" />;
			})}
			{atoms.map((i) => {
				const p = P(i);
				const L = mol.atoms[i].label;
				const al = mol.atoms[i].align ?? 'center';
				// stretch the blob over multi-letter labels
				const extra = L && L.length > 1 ? (L.length - 1) * s * 0.3 : 0;
				const cx = al === 'left' ? p.X + extra / 2 : al === 'right' ? p.X - extra / 2 : p.X;
				return <rect key={i} x={cx - rad - extra / 2} y={p.Y - rad} width={rad * 2 + extra} height={rad * 2} rx={rad} fill={color} />;
			})}
		</g>
	);
};

/** Screen position of atom i. */
export const atomXY = (mol: MolDef, i: number, x: number, y: number, s: number) => ({X: x + mol.atoms[i].x * s, Y: y + mol.atoms[i].y * s});

/** Pixel extent of a drawn molecule (labels included) relative to its (0, 0) origin. */
export const molExtent = (mol: MolDef, s: number, font: number) => {
	let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
	for (const a of mol.atoms) {
		const X = a.x * s, Y = a.y * s;
		let l = X - 3, r = X + 3;
		if (a.label) {
			const w = a.label.length * font * charW;
			const al = a.align ?? 'center';
			if (al === 'left') { l = X - font * 0.3; r = l + w; }
			else if (al === 'right') { r = X + font * 0.3; l = r - w; }
			else { l = X - w / 2; r = X + w / 2; }
		}
		x0 = Math.min(x0, l); x1 = Math.max(x1, r);
		y0 = Math.min(y0, Y - (a.label ? font * 0.55 : 3)); y1 = Math.max(y1, Y + (a.label ? font * 0.55 : 3));
	}
	return {x0, x1, y0, y1, w: x1 - x0, h: y1 - y0};
};

/** Origin that centres the molecule's drawn extent on (cx, cy). */
export const centreOn = (mol: MolDef, s: number, font: number, cx: number, cy: number) => {
	const e = molExtent(mol, s, font);
	return {x: cx - (e.x0 + e.x1) / 2, y: cy - (e.y0 + e.y1) / 2, e};
};
