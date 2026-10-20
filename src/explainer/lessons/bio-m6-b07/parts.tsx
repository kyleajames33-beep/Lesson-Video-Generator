// M6 B07 drawing parts: clean HSC-style meiosis diagrams (owner, 20 Oct: no coded chromosomes over painted cell
// plates). Simple ink cell outlines; large chromosomes as capsule bars in a rose set and a teal set; each locus is a thin
// band across the chromosome with a white letter bead, homologous loci at the same height; amber fill only for the new
// allele. Also: the island board (finches, half seed plate, beak-depth dot strips), source chips, letters-only Punnett
// squares, gamete cells and small labels. B01, B04 and B05 parts are imported, never edited.
//
// Swap point (brief 88 painted division plates, not yet reviewed): `InkCell` is the only cell drawing used by the
// meiosis scenes; replacing it with a reviewed plate (drawn by its alpha box, chromosomes painted in at scale) changes
// no cue or layout elsewhere.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog, scribbleEllipse} from '../../kit';
import {Fade, GREYT, GREY_INK, PlateB, Sx, tw} from '../bio-m5-b13/shared';
import type {PB} from '../bio-m5-b07/shared';
import {BIO_INK, CARD, EDGE, clamp01, lerp, smooth, vis} from '../bio-m6-b01/parts';
import {TEALC} from '../bio-m6-b04/parts';
import {SEED_SPLIT} from './assets';

export {clamp01, lerp, smooth, vis, CARD, EDGE, BIO_INK, TEALC, AMBER, AMBER_INK, INK, INK_SOFT, GREYT, GREY_INK, prog, FONT_DISPLAY, FONT_HAND};
export const ROSE = '#c0577a', ROSE_FILL = '#f6d6e0', TEAL_FILL = '#cfece7';
export const NEW_FILL = '#f6c35a';
export type SetK = 'rose' | 'teal';
const SF: Record<SetK, string> = {rose: ROSE_FILL, teal: TEAL_FILL};
const SL: Record<SetK, string> = {rose: ROSE, teal: TEALC};

// ---------- cells ----------
/** A plain ink cell outline (the swap point for reviewed painted division plates). */
export const InkCell: React.FC<{cx: number; cy: number; rx: number; ry?: number; o?: number; sw?: number; fill?: string}> = ({cx, cy, rx, ry, o = 1, sw = 3.5, fill = '#fdf8ec'}) => (o <= 0.01 ? null : (
	<ellipse cx={cx} cy={cy} rx={rx} ry={ry ?? rx} fill={fill} stroke={INK_SOFT} strokeWidth={sw} opacity={o} />
));

// ---------- chromosomes ----------
export type Loc = {t: number; l: string; amber?: boolean; o?: number};
export type Piece = {t0: number; t1: number; set: SetK; dx?: number; dy?: number};
const capsule = (x: number, y0: number, y1: number, w: number, top: boolean, bot: boolean) => {
	const r = w / 2;
	const a = top ? `M${x - r},${y0 + r} A${r},${r} 0 0 1 ${x + r},${y0 + r}` : `M${x - r},${y0} L${x + r},${y0}`;
	const b = bot ? `L${x + r},${y1 - r} A${r},${r} 0 0 1 ${x - r},${y1 - r}` : `L${x + r},${y1} L${x - r},${y1}`;
	return `${a} ${b} Z`;
};
/** A white allele bead with a serif-free letter; amber filled only for the new allele. */
export const ABead: React.FC<{x: number; y: number; l: string; r?: number; amber?: boolean; o?: number; ghost?: boolean; glow?: number}> = ({x, y, l, r = 19, amber = false, o = 1, ghost = false, glow = 0}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{glow > 0.01 ? <circle cx={x} cy={y} r={r * 1.9} fill={AMBER} opacity={0.3 * glow} /> : null}
		<circle cx={x} cy={y} r={r} fill={ghost ? 'none' : amber ? NEW_FILL : '#ffffff'} stroke={amber || ghost ? AMBER_INK : INK_SOFT} strokeWidth={ghost ? 3 : 2.5} strokeDasharray={ghost ? '6 5' : undefined} />
		{l ? <text x={x} y={y + r * 0.42} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: r * 1.25, fontStyle: 'italic'}} fill={INK}>{l}</text> : null}
	</g>
));
/** One chromatid (vertical capsule from y to y + L) made of coloured pieces; loci ride on their piece. */
export const Chromatid: React.FC<{x: number; y: number; L: number; w?: number; pieces: Piece[]; loci?: Loc[]; o?: number; cen?: number; beadR?: number}> = ({x, y, L, w = 46, pieces, loci = [], o = 1, cen = 0.5, beadR}) => {
	if (o <= 0.01) return null;
	const at = (t: number) => pieces.find(p => t >= p.t0 && t <= p.t1) ?? pieces[0];
	return (
		<g opacity={o}>
			{pieces.map((p, i) => (
				<path key={i} d={capsule(x + (p.dx ?? 0), y + p.t0 * L + (p.dy ?? 0), y + p.t1 * L + (p.dy ?? 0), w, p.t0 <= 0.001, p.t1 >= 0.999)} fill={SF[p.set]} stroke={SL[p.set]} strokeWidth={3} strokeLinejoin="round" />
			))}
			{loci.map((lc, i) => {
				const p = at(lc.t);
				const lx = x + (p.dx ?? 0), ly = y + lc.t * L + (p.dy ?? 0);
				const lo = lc.o ?? 1;
				return lo > 0.01 ? (
					<g key={i} opacity={lo}>
						<line x1={lx - w / 2 + 2} y1={ly} x2={lx + w / 2 - 2} y2={ly} stroke={SL[p.set]} strokeWidth={2} />
						<ABead x={lx} y={ly} l={lc.l} r={beadR ?? w * 0.4} amber={lc.amber} />
					</g>
				) : null;
			})}
			{(() => { const p = at(cen); return <circle cx={x + (p.dx ?? 0)} cy={y + cen * L + (p.dy ?? 0)} r={w * 0.13} fill={INK} />; })()}
		</g>
	);
};
/** A chromosome of one set; `dup` (0..1) parts it into two sister chromatids joined at the centromere. */
export const Chrom: React.FC<{x: number; y: number; L: number; w?: number; set: SetK; loci?: Loc[]; dup?: number; o?: number; cen?: number; piecesA?: Piece[]; piecesB?: Piece[]; lociA?: Loc[]; lociB?: Loc[]; beadR?: number}> = ({x, y, L, w = 46, set, loci = [], dup = 0, o = 1, cen = 0.5, piecesA, piecesB, lociA, lociB, beadR}) => {
	if (o <= 0.01) return null;
	const base: Piece[] = [{t0: 0, t1: 1, set}];
	const d = smooth(dup) * (w / 2 + 1);
	return (
		<g opacity={o}>
			{dup > 0.01 ? <Chromatid x={x + d} y={y} L={L} w={w} pieces={piecesB ?? base} loci={lociB ?? loci} cen={cen} o={clamp01(dup * 3)} beadR={beadR} /> : null}
			<Chromatid x={x - d} y={y} L={L} w={w} pieces={piecesA ?? base} loci={lociA ?? loci} cen={cen} beadR={beadR} />
			{dup > 0.01 ? <rect x={x - d} y={y + cen * L - w * 0.07} width={2 * d} height={w * 0.14} rx={w * 0.07} fill={INK} opacity={0.75 * clamp01(dup * 3)} /> : null}
		</g>
	);
};

// ---------- gametes and genotypes ----------
/** Letters-only genotype: dominant letter first. */
export const geno = (a: string, b: string) => [a, b].sort((p, q) => Number(p !== p.toUpperCase()) - Number(q !== q.toUpperCase())).join('');
/** A small gamete cell with one or two chromosomes inside (single chromatids). */
export const GameteCell: React.FC<{x: number; y: number; r?: number; o?: number; chroms: {set: SetK; loci: Loc[]; L?: number; dx?: number; pieces?: Piece[]; cen?: number}[]; w?: number}> = ({x, y, r = 70, o = 1, chroms, w = 30}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<InkCell cx={x} cy={y} rx={r} sw={3} />
		{chroms.map((c, i) => {
			const L = c.L ?? r * 1.3;
			return <Chromatid key={i} x={x + (c.dx ?? 0)} y={y - L / 2} L={L} w={w} pieces={c.pieces ?? [{t0: 0, t1: 1, set: c.set}]} loci={c.loci} beadR={w * 0.48} cen={c.cen ?? 0.5} />;
		})}
	</g>
));

// ---------- the letters-only Punnett square ----------
export const Punnett: React.FC<{x: number; y: number; c?: number; top: [string, string]; side: [string, string]; at: number; o?: number; size?: number; hot?: (i: number, j: number) => number; ring?: {i: number; j: number; at: number; out?: number}; pulse?: number}> = ({x, y, c = 120, top, side, at, o = 1, size = 46, hot, ring, pulse = 0}) => {
	const f = useCurrentFrame();
	const a = prog(f, at, 12) * o;
	if (a <= 0.01) return null;
	return (
		<g opacity={a}>
			{top.map((t, j) => <text key={'t' + j} x={x + c * (j + 0.5)} y={y - 22} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fontStyle: 'italic'}} fill={INK}>{t}</text>)}
			{side.map((s, i) => <text key={'s' + i} x={x - 30} y={y + c * (i + 0.5) + size * 0.36} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fontStyle: 'italic'}} fill={INK}>{s}</text>)}
			{side.map((s, i) => top.map((t, j) => {
				const k = i * 2 + j;
				const bo = prog(f, at + 14 + k * 8, 10);
				const h = hot ? hot(i, j) : 0;
				const pl = h > 0.01 ? 1 + 0.05 * pulse : 1;
				const cx = x + c * (j + 0.5), cy = y + c * (i + 0.5);
				return (
					<g key={k}>
						<rect x={x + c * j} y={y + c * i} width={c} height={c} fill={CARD} stroke={INK_SOFT} strokeWidth={3} />
						{h > 0.01 ? <rect x={x + c * j + 4} y={y + c * i + 4} width={c - 8} height={c - 8} fill="#fbe2a8" opacity={h} transform={`translate(${cx},${cy}) scale(${pl}) translate(${-cx},${-cy})`} /> : null}
						<text x={cx} y={cy + size * 0.36} textAnchor="middle" opacity={bo} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fontStyle: 'italic'}} fill={INK}>{geno(s, t)}</text>
					</g>
				);
			}))}
			{ring && f >= ring.at ? <g opacity={ring.out === undefined ? 1 : 1 - prog(f, ring.out, 10)}><DrawPath d={scribbleEllipse(x + c * (ring.j + 0.5), y + c * (ring.i + 0.5), c * 0.62, c * 0.58, 5)} at={ring.at} dur={16} color={AMBER} width={5} /></g> : null}
		</g>
	);
};

// ---------- chips and labels ----------
/** A source chip; `lit` brightens it (amber edge). */
export const SrcChip: React.FC<{x: number; y: number; text: string; o?: number; lit?: number; size?: number; anchor?: 'start' | 'middle'; icon?: React.ReactNode}> = ({x, y, text, o = 1, lit = 0, size = 34, anchor = 'middle', icon}) => {
	if (o <= 0.01) return null;
	const pad = icon ? 64 : 0;
	const w = tw(text, size, true) * 0.96 + 44 + pad;
	const x0 = anchor === 'middle' ? x - w / 2 : x;
	const h = size * 1.6;
	return (
		<g opacity={o}>
			<rect x={x0} y={y - h / 2} width={w} height={h} rx={h / 2} fill={lit > 0.5 ? '#fff3d9' : CARD} stroke={lit > 0.5 ? AMBER : EDGE} strokeWidth={lit > 0.5 ? 4 : 2.5} />
			{icon ? <g transform={`translate(${x0 + 22 + 20},${y})`}>{icon}</g> : null}
			<text x={x0 + 22 + pad} y={y + size * 0.35} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size}} fill={lit > 0.5 ? AMBER_INK : INK_SOFT}>{text}</text>
		</g>
	);
};
export const chipWidth = (text: string, size = 34, icon = false) => tw(text, size, true) * 0.96 + 44 + (icon ? 64 : 0);
/** A hand tag (amber by default) that fades in and out. */
export const Tg: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, text, at, out, size = 38, color = AMBER_INK, anchor = 'start'}) => (
	<Sx x={x} y={y} text={text} size={size} color={color} hand anchor={anchor} at={at} out={out} />
);
/** A small grey tag (pill) that fades. */
export const GPill: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; anchor?: 'start' | 'middle'}> = ({x, y, text, at, out, size = 26, anchor = 'start'}) => {
	const w = tw(text, size) + 32;
	const x0 = anchor === 'middle' ? x - w / 2 : x;
	return (
		<Fade at={at} out={out}>
			<rect x={x0} y={y - size - 6} width={w} height={size + 20} rx={11} fill="#eceeef" stroke={GREYT} strokeWidth={2.2} />
			<Sx x={x0 + 16} y={y} text={text} size={size} color={GREY_INK} weight={600} at={at} />
		</Fade>
	);
};
/** A bracket over a span, with a label. */
export const Brace: React.FC<{x1: number; x2: number; y: number; at: number; out?: number; label?: string; size?: number; color?: string; down?: boolean}> = ({x1, x2, y, at, out, label, size = 36, color = AMBER_INK, down = false}) => {
	const s = down ? -1 : 1;
	return (
		<Fade at={at} out={out}>
			<DrawPath d={`M${x1},${y + s * 14} L${x1},${y} L${x2},${y} L${x2},${y + s * 14}`} at={at} dur={14} color={color} width={4} />
			{label ? <Sx x={(x1 + x2) / 2} y={down ? y + size + 6 : y - 14} text={label} size={size} color={color} hand anchor="middle" at={at + 6} /> : null}
		</Fade>
	);
};
export const ScribbleRing: React.FC<{cx: number; cy: number; rx: number; ry: number; at: number; out?: number; color?: string; seed?: number}> = ({cx, cy, rx, ry, at, out, color = AMBER, seed = 3}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (f < at || o <= 0.01) return null;
	return <g opacity={o}><DrawPath d={scribbleEllipse(cx, cy, rx, ry, seed)} at={at} dur={18} color={color} width={5} /></g>;
};
export const GreyCross: React.FC<{x: number; y: number; at: number; s?: number}> = ({x, y, at, s = 30}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	return (
		<g>
			<DrawPath d={`M${x - s},${y - s} L${x + s},${y + s}`} at={at} dur={8} color={GREYT} width={6} />
			<DrawPath d={`M${x + s},${y - s} L${x - s},${y + s}`} at={at + 5} dur={8} color={GREYT} width={6} />
		</g>
	);
};
export const TickG: React.FC<{x: number; y: number; at: number; s?: number}> = ({x, y, at, s = 30}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	return <DrawPath d={`M${x - s * 0.5},${y} L${x - s * 0.12},${y + s * 0.45} L${x + s * 0.55},${y - s * 0.5}`} at={at} dur={12} color="#2f8a5b" width={6} />;
};

// ---------- the island board ----------
/** A painted finch (deep or slender beak); `grey` desaturates and dims it. */
export const Finch: React.FC<{deep: boolean; cx: number; cy: number; w: number; o?: number; grey?: number; plates: {deep: PB; slender: PB}}> = ({deep, cx, cy, w, o = 1, grey = 0, plates}) => (o <= 0.01 ? null : (
	<g opacity={1 - 0.55 * clamp01(grey)}>
		<PlateB p={deep ? plates.deep : plates.slender} cx={cx} cy={cy} w={w} o={o} filter={grey > 0.01 ? `grayscale(${clamp01(grey)})` : undefined} />
	</g>
));
/** One half of a plate (left of or right of a natural x), placed by the plate's full alpha box. */
export const HalfPlate: React.FC<{p: PB; cx: number; cy: number; w: number; side: 'L' | 'R'; split?: number; o?: number; id: string}> = ({p, cx, cy, w, side, split = SEED_SPLIT, o = 1, id}) => {
	if (o <= 0.01) return null;
	const k = w / (p.box[2] - p.box[0]);
	const bx = (p.box[0] + p.box[2]) / 2, by = (p.box[1] + p.box[3]) / 2;
	const x0 = side === 'L' ? 0 : split, x1 = side === 'L' ? split : p.nat[0];
	return (
		<g opacity={o} transform={`translate(${cx},${cy}) scale(${k})`}>
			<defs><clipPath id={id} clipPathUnits="userSpaceOnUse"><rect x={x0 - bx} y={-by} width={x1 - x0} height={p.nat[1]} /></clipPath></defs>
			<g clipPath={`url(#${id})`}><image href={staticFile(p.src)} x={-bx} y={-by} width={p.nat[0]} height={p.nat[1]} /></g>
		</g>
	);
};
/** Screen point of a natural pixel for a plate placed by its alpha box. */
export const platePt = (p: PB, cx: number, cy: number, w: number, u: number, v: number): [number, number] => {
	const k = w / (p.box[2] - p.box[0]);
	return [cx + (u - (p.box[0] + p.box[2]) / 2) * k, cy + (v - (p.box[1] + p.box[3]) / 2) * k];
};
/** A soft island outline (closed smooth blob through the given points). */
export const blobPath = (pts: [number, number][]) => {
	const n = pts.length;
	let d = '';
	for (let i = 0; i < n; i++) {
		const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
		if (i === 0) d += `M${p1[0]},${p1[1]}`;
		const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
		d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0]},${p2[1]}`;
	}
	return d + ' Z';
};
/** A beak-depth dot strip: a short line with one dot per bird (no numbers). */
export type SDot = {v: number; o?: number; dy?: number; glow?: number; amber?: boolean};
export const DotStrip: React.FC<{x0: number; x1: number; y: number; dots: SDot[]; o?: number; lineO?: number; r?: number}> = ({x0, x1, y, dots, o = 1, lineO = 1, r = 11}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<line x1={x0} y1={y} x2={x1} y2={y} stroke={INK_SOFT} strokeWidth={2.5} opacity={lineO} />
		{dots.map((d, i) => {
			const dO = d.o ?? 1;
			if (dO <= 0.01) return null;
			const x = lerp(x0 + 20, x1 - 20, d.v);
			return (
				<g key={i} opacity={dO}>
					{(d.glow ?? 0) > 0.01 ? <circle cx={x} cy={y - 14 + (d.dy ?? 0)} r={r * 2} fill={AMBER} opacity={0.35 * (d.glow ?? 0)} /> : null}
					<circle cx={x} cy={y - 14 + (d.dy ?? 0)} r={r} fill={d.amber ? '#f3b54a' : '#8a6a48'} stroke={INK} strokeWidth={1.5} />
				</g>
			);
		})}
	</g>
));
export const stripX = (x0: number, x1: number, v: number) => lerp(x0 + 20, x1 - 20, v);

/** "Pause here to answer." hand line. */
export {tw};
