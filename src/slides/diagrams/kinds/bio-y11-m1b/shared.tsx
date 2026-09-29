// Shared pieces for the bio-y11-m1b lane (Cells as the basis of life:
// respiration, photosynthesis, enzymes, DNA and cell division). Lane-local on
// purpose (docs/diorama-system.md). The generic helpers come read-only from the
// bio-y12-m5 lane's shared file; what is added here (glossy molecule tokens,
// organelles, a tiny formula parser for atom tallies, the enzyme blob) could be
// promoted into diorama.tsx if other biology lanes want them.
//
// Colour conventions: the subject accent is "the main thing", CORAL is "the
// second thing" (products, the other strand, the other parent), amber (TOK.amber
// / TOK.amberInk) is only ever the single most important thing on screen.

import type {ReactNode} from 'react';
import {TOK} from '../../../../styles/tokens';
import {ELEMENT_COLORS} from '../../diorama';

export {
	clamp, fadeAt, popAt, ease, lerp, shade, mix, hash01, CORAL, GREEN, PURPLE, SLATE, CYTO,
	GlossDefs, Ball, textWidth, Pill, Arrow, Ledge, CellBody, Chromosome, BaseTile, Caption, PAIR_DNA, baseTone,
} from '../bio-y12-m5/shared';

export const LEAF = '#4f9d57';
// ATP is drawn in a warm red-orange distinct from amber (amber is reserved).
export const CORAL_ATP = '#d9644a';
export const GOLD = '#d9a520';

/** Unicode subscript digits → plain digits, so "C₆H₁₂O₆" parses. */
const SUB: Record<string, string> = {'₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9'};

/**
 * Atom counts for one side of an equation, e.g. [["6CO₂"], ["6H₂O"]] or
 * "C₆H₁₂O₆". A leading number is the coefficient. Only element symbols and
 * digits are supported (all these lessons need).
 */
export const atomCount = (terms: string[]): Record<string, number> => {
	const out: Record<string, number> = {};
	for (const raw of terms) {
		const t = [...raw].map((c) => SUB[c] ?? c).join('');
		const m = /^(\d*)(.*)$/.exec(t);
		const coef = m && m[1] ? parseInt(m[1], 10) : 1;
		const body = m ? m[2] : t;
		const re = /([A-Z][a-z]?)(\d*)/g;
		let g: RegExpExecArray | null;
		while ((g = re.exec(body))) {
			out[g[1]] = (out[g[1]] ?? 0) + coef * (g[2] ? parseInt(g[2], 10) : 1);
		}
	}
	return out;
};

/** Glossy fills for atoms (CPK) under this lane's id prefix. */
export const AtomDefs = ({id}: {id: string}) => (
	<defs>
		{Object.entries(ELEMENT_COLORS).map(([el, base]) => (
			<radialGradient key={el} id={`${id}-at-${el}`} cx="38%" cy="32%" r="70%" fx="32%" fy="26%">
				<stop offset="0%" stopColor="#ffffff" />
				<stop offset="30%" stopColor={base} />
				<stop offset="100%" stopColor={base} stopOpacity={0.85} />
			</radialGradient>
		))}
	</defs>
);

const Atom = ({id, el, x, y, r}: {id: string; el: string; x: number; y: number; r: number}) => (
	<circle cx={x} cy={y} r={r} fill={`url(#${id}-at-${el})`} stroke="rgba(0,0,0,0.35)" strokeWidth={1} />
);

/**
 * Small molecules drawn with correct geometry: O₂ (diatomic), H₂O (bent),
 * CO₂ (LINEAR, O=C=O). Centred on (x, y).
 */
export const SmallMolecule = ({id, kind, x, y, r = 11, opacity = 1}: {id: string; kind: 'O2' | 'H2O' | 'CO2'; x: number; y: number; r?: number; opacity?: number}) => {
	let parts: ReactNode;
	if (kind === 'O2') {
		parts = (
			<>
				<Atom id={id} el="O" x={x - r * 0.72} y={y} r={r} />
				<Atom id={id} el="O" x={x + r * 0.72} y={y} r={r} />
			</>
		);
	} else if (kind === 'CO2') {
		parts = (
			<>
				<Atom id={id} el="O" x={x - r * 1.45} y={y} r={r * 0.92} />
				<Atom id={id} el="O" x={x + r * 1.45} y={y} r={r * 0.92} />
				<Atom id={id} el="C" x={x} y={y} r={r} />
			</>
		);
	} else {
		const a = (52 * Math.PI) / 180;
		const d = r * 1.05;
		parts = (
			<>
				<Atom id={id} el="O" x={x} y={y - r * 0.2} r={r} />
				<Atom id={id} el="H" x={x - d * Math.sin(a)} y={y - r * 0.2 + d * Math.cos(a)} r={r * 0.68} />
				<Atom id={id} el="H" x={x + d * Math.sin(a)} y={y - r * 0.2 + d * Math.cos(a)} r={r * 0.68} />
			</>
		);
	}
	return (
		<g opacity={opacity}>
			<ellipse cx={x} cy={y + r * 1.3} rx={r * (kind === 'CO2' ? 2.4 : 1.6)} ry={r * 0.26} fill="rgba(40,36,30,0.18)" />
			{parts}
		</g>
	);
};

/** A glucose token: a glossy hexagonal ring (the sugar ring) labelled C₆H₁₂O₆ below. */
export const Glucose = ({x, y, s = 1, opacity = 1, label = true, color = GOLD}: {x: number; y: number; s?: number; opacity?: number; label?: boolean; color?: string}) => {
	const r = 20 * s;
	const pts = Array.from({length: 6}, (_, k) => {
		const a = (k * Math.PI) / 3 + Math.PI / 6;
		return `${x + Math.cos(a) * r},${y + Math.sin(a) * r}`;
	}).join(' ');
	return (
		<g opacity={opacity}>
			<ellipse cx={x} cy={y + r * 1.15} rx={r * 1.1} ry={r * 0.22} fill="rgba(40,36,30,0.18)" />
			<polygon points={pts} fill={color} stroke="rgba(0,0,0,0.35)" strokeWidth={1.5} />
			<polygon points={pts} fill="none" stroke="#ffffff" strokeOpacity={0.55} strokeWidth={2} transform={`translate(${x},${y}) scale(0.62) translate(${-x},${-y})`} />
			<circle cx={x - r * 0.35} cy={y - r * 0.4} r={r * 0.22} fill="#ffffff" opacity={0.55} />
			{label && (
				<text x={x} y={y + r + 22 * Math.max(0.8, s)} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>
					glucose
				</text>
			)}
		</g>
	);
};

/** An ATP token: a glossy rounded capsule with "ATP". */
export const AtpToken = ({x, y, s = 1, opacity = 1, color = CORAL_ATP}: {x: number; y: number; s?: number; opacity?: number; color?: string}) => {
	const w = 46 * s, h = 26 * s;
	return (
		<g opacity={opacity}>
			<rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={h / 2} fill={color} stroke="rgba(0,0,0,0.3)" strokeWidth={1} />
			<rect x={x - w / 2 + 5 * s} y={y - h / 2 + 3 * s} width={w - 10 * s} height={h * 0.28} rx={h * 0.14} fill="#ffffff" opacity={0.45} />
			<text x={x} y={y + 5.5 * s} textAnchor="middle" fill="#ffffff" fontSize={15 * s} fontWeight={800}>ATP</text>
		</g>
	);
};
/** A mitochondrion (outer membrane + folded cristae), centred on (x, y). */
export const Mitochondrion = ({id, x, y, rx = 120, ry = 62, opacity = 1}: {id: string; x: number; y: number; rx?: number; ry?: number; opacity?: number}) => {
	const folds = 6;
	let d = `M ${x - rx * 0.82} ${y}`;
	for (let i = 0; i < folds; i++) {
		const x0 = x - rx * 0.82 + (i * rx * 1.64) / folds;
		const x1 = x0 + (rx * 1.64) / folds;
		const up = i % 2 === 0 ? -1 : 1;
		d += ` L ${x0 + (x1 - x0) * 0.35} ${y + up * ry * 0.62} Q ${x0 + (x1 - x0) * 0.5} ${y + up * ry * 0.78} ${x0 + (x1 - x0) * 0.65} ${y + up * ry * 0.62} L ${x1} ${y}`;
	}
	return (
		<g opacity={opacity}>
			<ellipse cx={x + 6} cy={y + ry + 10} rx={rx * 0.9} ry={ry * 0.16} fill="rgba(40,36,30,0.18)" />
			<ellipse cx={x} cy={y} rx={rx} ry={ry} fill={`url(#${id}-mito)`} stroke="#b0523e" strokeWidth={4} />
			<ellipse cx={x} cy={y} rx={rx - 12} ry={ry - 11} fill="#f6d3c4" stroke="#c8705a" strokeWidth={2} />
			<path d={d} fill="none" stroke="#c8705a" strokeWidth={5} strokeLinejoin="round" strokeLinecap="round" />
		</g>
	);
};

/** A chloroplast (envelope + stacked grana), centred on (x, y). */
export const Chloroplast = ({id, x, y, rx = 120, ry = 62, opacity = 1}: {id: string; x: number; y: number; rx?: number; ry?: number; opacity?: number}) => {
	const stacks = [-0.55, -0.18, 0.2, 0.56];
	return (
		<g opacity={opacity}>
			<ellipse cx={x + 6} cy={y + ry + 10} rx={rx * 0.9} ry={ry * 0.16} fill="rgba(40,36,30,0.18)" />
			<ellipse cx={x} cy={y} rx={rx} ry={ry} fill={`url(#${id}-chloro)`} stroke="#2f6b35" strokeWidth={4} />
			<ellipse cx={x} cy={y} rx={rx - 10} ry={ry - 9} fill="#cfe8c4" stroke="#4f9d57" strokeWidth={2} />
			{stacks.map((f, i) => (
				<g key={i}>
					{[0, 1, 2, 3].map((k) => (
						<rect key={k} x={x + f * rx - 16} y={y - 22 + k * 11 + (i % 2) * 6} width={32} height={9} rx={4.5} fill="#3f8a46" stroke="#2f6b35" strokeWidth={1} />
					))}
				</g>
			))}
			<path d={`M ${x - rx * 0.4} ${y + 6} L ${x + rx * 0.4} ${y + 2}`} stroke="#3f8a46" strokeWidth={2} opacity={0.6} />
		</g>
	);
};

/** Gradient defs for the organelles. */
export const OrganelleDefs = ({id}: {id: string}) => (
	<defs>
		<radialGradient id={`${id}-mito`} cx="40%" cy="32%" r="75%">
			<stop offset="0%" stopColor="#ffe9df" />
			<stop offset="100%" stopColor="#e9a58f" />
		</radialGradient>
		<radialGradient id={`${id}-chloro`} cx="40%" cy="32%" r="75%">
			<stop offset="0%" stopColor="#e8f5e0" />
			<stop offset="100%" stopColor="#8cc47f" />
		</radialGradient>
	</defs>
);

/** A small sun with rays; `t` 0→1 grows the rays. */
export const Sun = ({x, y, r = 26, t = 1, frame = 0}: {x: number; y: number; r?: number; t?: number; frame?: number}) => (
	<g>
		{Array.from({length: 10}, (_, k) => {
			const a = (k * Math.PI * 2) / 10 + frame / 120;
			return (
				<line key={k} x1={x + Math.cos(a) * (r + 6)} y1={y + Math.sin(a) * (r + 6)} x2={x + Math.cos(a) * (r + 6 + 14 * t)} y2={y + Math.sin(a) * (r + 6 + 14 * t)} stroke={GOLD} strokeWidth={4} strokeLinecap="round" />
			);
		})}
		<circle cx={x} cy={y} r={r} fill="#f6c945" stroke="#d9a520" strokeWidth={2} />
		<circle cx={x - r * 0.3} cy={y - r * 0.35} r={r * 0.3} fill="#ffffff" opacity={0.45} />
	</g>
);

/** A small flame (heat). */
export const Flame = ({x, y, s = 1, opacity = 1, frame = 0}: {x: number; y: number; s?: number; opacity?: number; frame?: number}) => {
	const f = 1 + Math.sin(frame / 5) * 0.06;
	return (
		<g opacity={opacity} transform={`translate(${x},${y}) scale(${s},${s * f})`}>
			<path d="M 0 -30 C 12 -14 18 -6 14 6 C 11 16 -11 16 -14 6 C -18 -6 -6 -12 0 -30 Z" fill="#e8743b" />
			<path d="M 0 -14 C 6 -6 8 0 6 6 C 4 11 -4 11 -6 6 C -8 0 -3 -6 0 -14 Z" fill="#f6c945" />
		</g>
	);
};

/** A tick in a circle / a cross in a circle. */
export const Verdict = ({x, y, ok, r = 13, opacity = 1}: {x: number; y: number; ok: boolean; r?: number; opacity?: number}) => (
	<g opacity={opacity}>
		<circle cx={x} cy={y} r={r} fill={ok ? '#4f9d57' : '#c0473a'} />
		{ok ? (
			<path d={`M ${x - r * 0.45} ${y} L ${x - r * 0.1} ${y + r * 0.4} L ${x + r * 0.5} ${y - r * 0.4}`} fill="none" stroke="#ffffff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
		) : (
			<path d={`M ${x - r * 0.4} ${y - r * 0.4} L ${x + r * 0.4} ${y + r * 0.4} M ${x + r * 0.4} ${y - r * 0.4} L ${x - r * 0.4} ${y + r * 0.4}`} stroke="#ffffff" strokeWidth={3} strokeLinecap="round" />
		)}
	</g>
);

/** Wrap text into lines of at most `max` characters (word boundaries). */
export const wrap = (text: string, max: number): string[] => {
	const out: string[] = [];
	let line = '';
	for (const w of text.split(' ')) {
		if ((line + ' ' + w).trim().length > max && line) {
			out.push(line);
			line = w;
		} else line = (line + ' ' + w).trim();
	}
	if (line) out.push(line);
	return out;
};
