// Shared pieces for the bio-y11-m2a (Cells to systems: organisation and plants)
// diorama kinds.
//
// Timing and drawing helpers are reused read-only from merged lanes
// (chem-y11-m1: fadeAt, popAt, Arrow, GlossDefs, Ball, shade; chem-y12-m6:
// textWidth; bio-y12-m7: Title, Lines, wrap, Mark). Lane-local additions: `COL`
// (this lane's colours of meaning), `Tag` (a pill with an optional leader line),
// `Notes` (footer lines on beats), `PlantArt` (a potted plant in a glass pot,
// used by the whole-plant kinds) and `mix` (colour blend). `Tag`, `Notes` and
// `PlantArt` could be promoted into diorama.tsx if other lanes want them.

import type {ReactNode} from 'react';
import {TOK} from '../../../../styles/tokens';
import {fadeAt, popAt, textWidth} from './reexports';

export {clamp, fadeAt, popAt, shade, Arrow, GlossDefs, Ball, textWidth, Title, Lines, wrap, Mark} from './reexports';

export const W = 760;
export const H = 530;

/** Lane palette (colours of meaning). */
export const COL = {
	leaf: '#5f9e3a',
	leafDark: '#3f7a26',
	leafLight: '#9ccc6a',
	yellow: '#d9c23f',
	stem: '#6f8f3a',
	water: '#3f93d6',
	vapour: '#8fc3ea',
	sugar: '#e0842a',
	co2: '#6b6b6b',
	o2: '#e0433a',
	mineral: '#8e5bd6',
	xylem: '#a8763e',
	lignin: '#7a5228',
	phloem: '#d9a24a',
	cell: '#f3d9bf',
	cellEdge: '#c79a74',
	nucleus: '#8e5bd6',
	mito: '#e07a5a',
	chloro: '#4f9a36',
	soil: '#8a6a48',
	glass: '#dcecf3',
	dye: '#c8433a',
	muscle: '#d9776a',
	blood: '#c8433a',
	stop: '#b3261e',
	ok: '#2e8b57',
	sun: '#f4c542',
} as const;

export const GLOSS: Record<string, string> = {...COL};

export const mix = (a: string, c: string, t: number) => {
	const pa = parseInt(a.slice(1), 16);
	const pc = parseInt(c.slice(1), 16);
	const ch = (s: number) => Math.round(((pa >> s) & 255) * (1 - t) + ((pc >> s) & 255) * t);
	return `#${((1 << 24) | (ch(16) << 16) | (ch(8) << 8) | ch(0)).toString(16).slice(1)}`;
};

export type Tone = 'accent' | 'amber' | 'warm' | 'ink' | 'water' | 'sugar' | 'leaf' | 'stop';
export const toneColor = (tone: Tone | undefined, accent: string) =>
	tone === 'amber' ? TOK.amberInk
		: tone === 'warm' ? '#b5562e'
			: tone === 'ink' ? TOK.ink
				: tone === 'water' ? '#2a6fa8'
					: tone === 'sugar' ? '#b0621a'
						: tone === 'leaf' ? COL.leafDark
							: tone === 'stop' ? COL.stop
								: accent;

/** A label pill centred on (x, y), popping in at `at`, with an optional leader to (tx, ty). */
export const Tag = ({
	frame, fps, at, x, y, text, tone, accent, size = 18, tx, ty, fill,
}: {
	frame: number; fps: number; at: number; x: number; y: number; text: string; tone?: Tone; accent: string;
	size?: number; tx?: number; ty?: number; fill?: string;
}) => {
	const p = popAt(frame, fps, at);
	if (p <= 0) return null;
	const c = toneColor(tone, accent);
	const w = textWidth(text, size) + 22;
	const h = size + 12;
	return (
		<g opacity={Math.min(1, p * 1.5)}>
			{tx !== undefined && ty !== undefined && (
				<line x1={x} y1={y} x2={x + (tx - x) * Math.min(1, p)} y2={y + (ty - y) * Math.min(1, p)} stroke={c} strokeWidth={2} strokeDasharray="4 4" />
			)}
			{tx !== undefined && ty !== undefined && <circle cx={tx} cy={ty} r={4} fill={c} opacity={fadeAt(frame, at + 8)} />}
			<g transform={`translate(${x}, ${y}) scale(${Math.min(1, p)})`}>
				<rect x={-w / 2} y={-h / 2} width={w} height={h} rx={h / 2} fill={fill ?? (tone === 'amber' ? '#fff6e6' : '#ffffff')} stroke={c} strokeWidth={2} />
				<text y={size * 0.36} textAnchor="middle" fill={c} fontSize={size} fontWeight={800}>{text}</text>
			</g>
		</g>
	);
};

export type Note = {text: string; at: number; amber?: boolean};

/** Footer lines, bottom-aligned, each fading in on its beat. */
export const Notes = ({frame, notes, size = 20, bottom = H - 10}: {frame: number; notes?: Note[]; size?: number; bottom?: number}) => (
	<g>
		{(notes ?? []).map((n, i, arr) => (
			<text
				key={i}
				x={W / 2}
				y={bottom - (arr.length - 1 - i) * (size + 7)}
				textAnchor="middle"
				fill={n.amber ? TOK.amberInk : TOK.inkDim}
				fontSize={size}
				fontWeight={800}
				opacity={fadeAt(frame, n.at, 14)}
			>
				{n.text}
			</text>
		))}
	</g>
);

/** Leaf blade pointing along `angle` (degrees, 0 = right) from (x, y). */
export const LeafShape = ({x, y, len, angle, fill, stroke = COL.leafDark, opacity = 1}: {x: number; y: number; len: number; angle: number; fill: string; stroke?: string; opacity?: number}) => (
	<g transform={`translate(${x},${y}) rotate(${angle})`} opacity={opacity}>
		<path d={`M 0 0 C ${len * 0.3} ${-len * 0.34}, ${len * 0.75} ${-len * 0.3}, ${len} 0 C ${len * 0.75} ${len * 0.3}, ${len * 0.3} ${len * 0.34}, 0 0 Z`} fill={fill} stroke={stroke} strokeWidth={1.5} />
		<path d={`M 2 0 L ${len * 0.92} 0`} stroke={stroke} strokeWidth={1.2} opacity={0.6} />
	</g>
);

/** Geometry for PlantArt, so kinds can route flows along the plant. */
export const plantGeom = (cx: number, groundY: number, h: number) => {
	const top = groundY - h;
	return {
		cx,
		groundY,
		top,
		potTop: groundY - 6,
		potBottom: groundY + 92,
		leaves: [
			{x: cx, y: top + h * 0.28, side: -1},
			{x: cx, y: top + h * 0.5, side: 1},
			{x: cx, y: top + h * 0.72, side: -1},
		],
		leafTip: (i: number) => {
			const L = [{x: cx, y: top + h * 0.28, side: -1}, {x: cx, y: top + h * 0.5, side: 1}, {x: cx, y: top + h * 0.72, side: -1}][i];
			return {x: L.x + L.side * 96, y: L.y - 26};
		},
		rootY: groundY + 58,
	};
};

/**
 * A potted plant: a clear glass pot (soil and roots visible) with a stem, three
 * leaves and an optional flower or tuber. `leafTint` 0..1 fades leaves toward yellow.
 */
export const PlantArt = ({
	id, cx, groundY, h, frame, leafTint = 0, flower = false, tuber = false, children,
}: {id: string; cx: number; groundY: number; h: number; frame: number; leafTint?: number; flower?: boolean; tuber?: boolean; children?: ReactNode}) => {
	const g = plantGeom(cx, groundY, h);
	const sway = Math.sin(frame / 40) * 1.5;
	const leafFill = mix(COL.leaf, COL.yellow, leafTint);
	return (
		<g>
			<defs>
				<linearGradient id={`${id}-pot`} x1="0" x2="1" y1="0" y2="0">
					<stop offset="0%" stopColor="#ffffff" stopOpacity={0.55} />
					<stop offset="40%" stopColor={COL.glass} stopOpacity={0.35} />
					<stop offset="100%" stopColor="#9fb8c4" stopOpacity={0.45} />
				</linearGradient>
			</defs>
			{/* soil + roots inside the glass pot */}
			<path d={`M ${cx - 74} ${g.potTop + 8} L ${cx + 74} ${g.potTop + 8} L ${cx + 60} ${g.potBottom} L ${cx - 60} ${g.potBottom} Z`} fill={COL.soil} opacity={0.85} />
			{[-1, 1].map((s) => (
				<path key={s} d={`M ${cx} ${g.potTop + 10} C ${cx + s * 10} ${g.potTop + 30}, ${cx + s * 34} ${g.potTop + 44}, ${cx + s * 46} ${g.potBottom - 14}`} fill="none" stroke="#e8dcc0" strokeWidth={3} strokeLinecap="round" />
			))}
			<path d={`M ${cx} ${g.potTop + 10} L ${cx} ${g.potBottom - 10}`} stroke="#e8dcc0" strokeWidth={3.5} strokeLinecap="round" />
			{[-1, 1].map((s) => (
				<path key={`r${s}`} d={`M ${cx + s * 4} ${g.potTop + 40} C ${cx + s * 16} ${g.potTop + 50}, ${cx + s * 22} ${g.potTop + 64}, ${cx + s * 22} ${g.potTop + 78}`} fill="none" stroke="#e8dcc0" strokeWidth={2} strokeLinecap="round" />
			))}
			{tuber && <ellipse cx={cx + 30} cy={g.potTop + 56} rx={22} ry={15} fill="#c9a36a" stroke="#8a6a3a" strokeWidth={1.5} />}
			<path d={`M ${cx - 80} ${g.potTop} L ${cx + 80} ${g.potTop} L ${cx + 64} ${g.potBottom + 4} L ${cx - 64} ${g.potBottom + 4} Z`} fill={`url(#${id}-pot)`} stroke="#8fa9b6" strokeWidth={2} />
			<ellipse cx={cx} cy={g.potTop} rx={80} ry={9} fill="none" stroke="#8fa9b6" strokeWidth={2} />
			{/* stem */}
			<path d={`M ${cx} ${g.potTop + 8} C ${cx + 2} ${groundY - h * 0.4}, ${cx - 2 + sway} ${groundY - h * 0.8}, ${cx + sway} ${g.top}`} fill="none" stroke={COL.stem} strokeWidth={9} strokeLinecap="round" />
			{g.leaves.map((L, i) => (
				<LeafShape key={i} x={L.x + sway * (1 - i * 0.3)} y={L.y} len={104} angle={L.side < 0 ? 196 + Math.sin(frame / 33 + i) * 2 : -16 + Math.sin(frame / 33 + i) * 2} fill={leafFill} />
			))}
			{flower && (
				<g transform={`translate(${cx + sway}, ${g.top - 6})`}>
					{[0, 72, 144, 216, 288].map((a) => (
						<ellipse key={a} cx={0} cy={-13} rx={8} ry={14} fill="#e98fb4" stroke="#b85a82" strokeWidth={1.2} transform={`rotate(${a})`} />
					))}
					<circle r={7} fill="#f4c542" stroke="#b8902a" />
				</g>
			)}
			{!flower && <circle cx={cx + sway} cy={g.top} r={6} fill={COL.leafLight} stroke={COL.leafDark} strokeWidth={1.5} />}
			{children}
		</g>
	);
};

/** A small sun (light source) with slowly turning rays. */
export const Sun = ({x, y, r, frame, opacity = 1}: {x: number; y: number; r: number; frame: number; opacity?: number}) => (
	<g opacity={opacity} transform={`translate(${x},${y})`}>
		<g transform={`rotate(${frame * 0.4})`}>
			{Array.from({length: 10}, (_, i) => (
				<line key={i} x1={0} y1={-r * 1.3} x2={0} y2={-r * 1.7} stroke="#e0a82a" strokeWidth={3} strokeLinecap="round" transform={`rotate(${i * 36})`} />
			))}
		</g>
		<circle r={r} fill={COL.sun} stroke="#c8962a" strokeWidth={1.5} />
	</g>
);

/** A crescent moon. */
export const Moon = ({x, y, r, opacity = 1}: {x: number; y: number; r: number; opacity?: number}) => (
	<g opacity={opacity}>
		<path d={`M ${x + r * 0.3} ${y - r} A ${r} ${r} 0 1 0 ${x + r * 0.3} ${y + r} A ${r * 0.8} ${r * 0.8} 0 1 1 ${x + r * 0.3} ${y - r} Z`} fill="#f1e6b8" stroke="#bfae6a" strokeWidth={1.5} />
	</g>
);

/** A labelled glossy token (e.g. "CO₂") drawn from GlossDefs colour `name`. */
export const Token = ({id, name, x, y, r = 15, label, opacity = 1, size}: {id: string; name: keyof typeof COL; x: number; y: number; r?: number; label: string; opacity?: number; size?: number}) => (
	<g opacity={opacity}>
		<circle cx={x} cy={y} r={r} fill={`url(#${id}-ball-${name})`} stroke="rgba(0,0,0,0.25)" strokeWidth={1} />
		<text x={x} y={y + (size ?? r * 0.72) * 0.36} textAnchor="middle" fill="#ffffff" fontSize={size ?? r * 0.72} fontWeight={800}>{label}</text>
	</g>
);
