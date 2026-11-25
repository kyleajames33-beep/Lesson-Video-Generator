// Module 8 kit, part 12: particles, quarks and the table (additive kit file, 26 November 2026; first used by
// phys-y12-m8-v20 to v22). Course-neutral: every label, number and colour of meaning comes from the lesson.
// - QDot: a small labelled quark (or any particle) dot; an antiparticle is drawn with a dashed outline.
// - QBag: a dashed boundary (a hadron "model") with an optional tag under it.
// - Diamond: a small carrier diamond with a label.
// - CrossGrid: a field into the page drawn as a grid of small crosses inside a box.
// - SchemCard: a pale grey observation card with a title and a permanent "schematic" note.
// - Bars: schematic bars from values (0 to 1 of the bar height), outline or filled, revealed left to right.
// - TreeNode / TreeLink: a classification tree built from boxed nodes and elbow links, each with its own reveal.
// - GridTable: a cell grid (the Standard Model table and similar) whose cells fill, tint, light and tag by state.
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD, INK} from '../../shared/tokens';
import type {Tone} from '../../shared/tokens';

const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color, paintOrder: 'stroke', stroke: CARD, strokeWidth: 6, strokeLinejoin: 'round'} as React.CSSProperties);
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

/** A labelled dot: tone outline and label, soft fill; `anti` draws a dashed outline (the label carries its bar). */
export const QDot: React.FC<{x: number; y: number; r?: number; label: string; tone: Tone; anti?: boolean; opacity?: number; size?: number; ring?: number}> = ({x, y, r = 30, label, tone, anti = false, opacity = 1, size, ring = 0}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		{ring > 0.001 ? <circle cx={x} cy={y} r={r + 12} fill="none" stroke={tone.stroke} strokeWidth={5} opacity={ring} /> : null}
		<circle cx={x} cy={y} r={r} fill={tone.soft} stroke={tone.stroke} strokeWidth={5} strokeDasharray={anti ? '9 6' : undefined} />
		<text x={x} y={y + (size ?? r * 1.05) * 0.36} textAnchor="middle" style={T(size ?? r * 1.05, tone.ink)}>{label}</text>
	</g>
));

/** A dashed hadron boundary of radius r about (x, y), with an optional tag under it (for example "model"). */
export const QBag: React.FC<{x: number; y: number; r: number; tag?: string; tagSize?: number; opacity?: number; fill?: string; color?: string; children?: React.ReactNode}> = ({x, y, r, tag, tagSize = 28, opacity = 1, fill = 'none', color = INK, children}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<circle cx={x} cy={y} r={r} fill={fill} stroke={color} strokeWidth={4} strokeDasharray="14 10" />
		{children}
		{tag ? <text x={x} y={y + r + tagSize + 10} textAnchor="middle" style={T(tagSize, color, 700)}>{tag}</text> : null}
	</g>
));

/** A carrier diamond of half-width s at (x, y), filled in its tone, label in white. */
export const Diamond: React.FC<{x: number; y: number; s?: number; tone: Tone; label: string; size?: number; opacity?: number; outline?: boolean}> = ({x, y, s = 30, tone, label, size, opacity = 1, outline = false}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<path d={`M${x},${y - s} L${x + s},${y} L${x},${y + s} L${x - s},${y} Z`} fill={outline ? 'none' : tone.stroke} stroke={outline ? tone.stroke : INK} strokeWidth={outline ? 4 : 2.5} strokeDasharray={outline ? '8 6' : undefined} />
		{label ? <text x={x} y={y + (size ?? s * 0.9) * 0.36} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size ?? s * 0.9, fill: outline ? tone.ink : '#ffffff'}}>{label}</text> : null}
	</g>
));

/** A field into the page: small crosses on a grid inside the box (gap in px). */
export const CrossGrid: React.FC<{x: number; y: number; w: number; h: number; gap?: number; color?: string; size?: number; opacity?: number}> = ({x, y, w, h, gap = 70, color = '#1f3a68', size = 9, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const marks: React.ReactNode[] = [];
	for (let my = y + gap / 2; my < y + h; my += gap) for (let mx = x + gap / 2; mx < x + w; mx += gap) marks.push(<path key={`${mx}_${my}`} d={`M${mx - size},${my - size} L${mx + size},${my + size} M${mx + size},${my - size} L${mx - size},${my + size}`} stroke={color} strokeWidth={3} strokeLinecap="round" />);
	return <g opacity={opacity * 0.75}>{marks}</g>;
};

/** A pale grey observation card with a title at the top left and a permanent note at the bottom right. */
export const SchemCard: React.FC<{x: number; y: number; w: number; h: number; title?: string; note?: string; size?: number; opacity?: number; fill?: string}> = ({x, y, w, h, title, note = 'schematic, not data', size = 30, opacity = 1, fill = '#eeebe5'}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<rect x={x} y={y} width={w} height={h} rx={18} fill={fill} stroke="rgba(60,45,20,0.28)" strokeWidth={3} />
		{title ? <text x={x + 24} y={y + size + 14} style={T(size, INK)}>{title}</text> : null}
		{note ? <text x={x + w - 20} y={y + h - 16} textAnchor="end" style={T(26, '#6b6358', 700)}>{note}</text> : null}
	</g>
));

/** Schematic bars in a box: `values` are fractions of the box height; `reveal` (0 to 1) grows them left to right. */
export const Bars: React.FC<{x: number; y: number; w: number; h: number; values: readonly number[]; color: string; outline?: boolean; reveal?: number; gap?: number; opacity?: number; width?: number}> = ({x, y, w, h, values, color, outline = false, reveal = 1, gap = 0.28, opacity = 1, width = 4}) => {
	if (opacity <= 0.001 || reveal <= 0.001) return null;
	const n = values.length, bw = w / n;
	return (
		<g opacity={opacity}>
			{values.map((v, i) => {
				const g = clamp01(reveal * n - i);
				if (g <= 0.001) return null;
				const hh = v * h * g;
				return <rect key={i} x={x + i * bw + (bw * gap) / 2} y={y + h - hh} width={bw * (1 - gap)} height={hh} fill={outline ? 'none' : color} stroke={color} strokeWidth={outline ? width : 2} strokeDasharray={outline ? '10 6' : undefined} />;
			})}
		</g>
	);
};

/** A boxed tree node centred at (x, y); text lines in the node's tone. */
export const TreeNode: React.FC<{x: number; y: number; w: number; lines: readonly string[]; tone: Tone; size?: number; opacity?: number; empty?: boolean}> = ({x, y, w, lines, tone, size = 30, opacity = 1, empty = false}) => {
	if (opacity <= 0.001) return null;
	const h = lines.length * (size * 1.18) + 22;
	return (
		<g opacity={opacity}>
			<rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={14} fill={empty ? CARD : tone.soft} stroke={tone.stroke} strokeWidth={4} strokeDasharray={empty ? '10 7' : undefined} />
			{empty ? null : lines.map((l, i) => <text key={i} x={x} y={y - h / 2 + 11 + size * 0.95 + i * size * 1.18} textAnchor="middle" style={T(i ? size - 4 : size, i ? INK : tone.ink, i ? 700 : 800)}>{l}</text>)}
		</g>
	);
};
/** An elbow link from a parent's bottom (x0, y0) to a child's top (x1, y1), drawn as it reveals (0 to 1). */
export const TreeLink: React.FC<{x0: number; y0: number; x1: number; y1: number; reveal?: number; color?: string}> = ({x0, y0, x1, y1, reveal = 1, color = INK}) => {
	if (reveal <= 0.001) return null;
	const ym = (y0 + y1) / 2, len = Math.abs(ym - y0) + Math.abs(x1 - x0) + Math.abs(y1 - ym);
	return <path d={`M${x0},${y0} L${x0},${ym} L${x1},${ym} L${x1},${y1}`} fill="none" stroke={color} strokeWidth={4} strokeDasharray={len} strokeDashoffset={len * (1 - clamp01(reveal))} />;
};

// ---------------------------------------------------------------- the table
export type GridCell = {id: string; sym: string; name?: string; note?: string; mass?: string; x: number; y: number; tone: Tone};
/** Per-cell state: o shows the content (0 to 1), lit draws a glow ring, dim greys the cell (text stays solid),
 *  mass shows the small mass label, tag shows a small round badge at the top right (its meaning goes in a legend the
 *  lesson draws; `tagText` is one short symbol at most), big enlarges it, tint fills it in its soft tone. */
export type CellState = {o?: number; lit?: number; dim?: number; mass?: number; tag?: number; big?: number; tint?: number};
/** A grid of cells (cell w x h px) whose positions come from the lesson; `state(id)` sets each one. Empty cells keep a
 *  dashed outline so the grid reads as a table before it fills. */
export const GridTable: React.FC<{cells: readonly GridCell[]; w: number; h: number; state: (id: string) => CellState; symSize?: number; nameSize?: number; tagText?: string; tagColor?: string; opacity?: number}> = ({cells, w, h, state, symSize = 44, nameSize = 26, tagText = '', tagColor = INK, opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		{cells.map(c => {
			const s = state(c.id), o = clamp01(s.o ?? 0), dim = clamp01(s.dim ?? 0), big = 1 + 0.25 * clamp01(s.big ?? 0), tint = clamp01(s.tint ?? 0);
			const cx = c.x + w / 2, cy = c.y + h / 2;
			const fill = dim > 0.5 ? '#ece8e1' : tint > 0.01 ? c.tone.soft : CARD;
			const ink = dim > 0.5 ? '#6b6358' : c.tone.ink;
			return (
				<g key={c.id} transform={`translate(${cx},${cy}) scale(${big}) translate(${-cx},${-cy})`}>
					<rect x={c.x} y={c.y} width={w} height={h} rx={14} fill={o > 0.01 ? fill : 'none'} stroke={o > 0.01 ? c.tone.stroke : 'rgba(60,45,20,0.35)'} strokeWidth={o > 0.01 ? 4 : 3} strokeDasharray={o > 0.01 ? undefined : '10 8'} />
					{(s.lit ?? 0) > 0.01 ? <rect x={c.x - 8} y={c.y - 8} width={w + 16} height={h + 16} rx={20} fill="none" stroke={c.tone.stroke} strokeWidth={6} opacity={s.lit} /> : null}
					<g opacity={o}>
						<text x={c.x + 16} y={c.y + symSize + 6} style={T(symSize, ink)}>{c.sym}</text>
						{c.note ? <text x={c.x + w - 14} y={c.y + nameSize + 10} textAnchor="end" style={T(nameSize, ink, 800)}>{c.note}</text> : null}
						{c.name ? <text x={c.x + 16} y={c.y + h - 14} style={T(nameSize, INK, 700)}>{c.name}</text> : null}
					</g>
					{c.mass && (s.mass ?? 0) > 0.01 ? <text x={c.x + w - 14} y={c.y + h - 14} textAnchor="end" opacity={s.mass} style={T(nameSize, '#4a5560', 700)}>{c.mass}</text> : null}
					{(s.tag ?? 0) > 0.01 ? <g opacity={s.tag}><circle cx={c.x + w - 4} cy={c.y + 4} r={15} fill={tagColor} stroke={CARD} strokeWidth={4} />{tagText ? <text x={c.x + w - 4} y={c.y + 12} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 22, fill: '#ffffff'}}>{tagText}</text> : null}</g> : null}
				</g>
			);
		})}
	</g>
));
