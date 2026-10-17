// B6b shared pieces (also imported by B6c): RNA tokens (terracotta mRNA, amber U tile, ochre RNA polymerase), a
// computed complementRNA with a build-time check, coded strands built from B4's tile shapes and B6a's plum DNA,
// end tags, the arrow rule (small grey backbone arrowheads, large amber process arrows with a verb), the nucleus
// board (dashed envelope arc with a pore), the painted cell plate geometry, a flexible mRNA ribbon that threads
// through pores, chips, answer boxes, model lines and the crossed-out mistake chip.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/b6b/measured/lesson.json';
import type {CueScene} from '../../cues';
import {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog, scribbleEllipse} from '../../kit';
import {FILL, LINE, Sugar, tilePath} from '../bio-m5-b04/dna';
import {Fade, GREYT, GREY_INK, GreyTag, Heading, Overlay, PL, PLUM, PLUM_SOFT, Pl, Sx, kf, plPt, tw} from '../bio-m5-b06a/shared';
import type {PDef} from '../bio-m5-b06a/shared';
import {wrap} from '../bio-m5-b06a/s5';
import * as A from './assets';

export {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog, scribbleEllipse};
export {Fade, GREYT, GREY_INK, GreyTag, Heading, Overlay, PL, PLUM, PLUM_SOFT, Pl, Sx, kf, plPt, tw, wrap};
export type {PDef};
export const W = 1920, H = 1080;
export const GREEN = '#2f8a5b', RED = '#c4432f';

// ---------- tokens ----------
/** mRNA backbone (terracotta), never blue or green. */
export const MRNA = '#c46a3a';
export const MRNA_INK = '#8f4521';
/** The U tile: T's jigsaw shape (so it visibly fits A) with an amber fill. */
export const U_FILL = '#f6c35a';
/** RNA polymerase (soft ochre bean). */
export const POL = '#d9a441';
export const POL_INK = '#8a6420';
/** Promoter band (grey-plum). */
export const PROMO = '#9c8bb0';
/** Dim rule: a strand that is not being used. */
export const DIM = 0.35;

// ---------- lesson scenes and word cues ----------
export type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
export const sceneOf = (src: {scenes: unknown[]}) => (id: string): SceneL => {
	const s = (src.scenes as SceneL[]).find(x => x.id === id);
	if (!s) throw new Error(`scene ${id} missing`);
	return s;
};
export const S = sceneOf(lesson as unknown as {scenes: unknown[]});
const normW = (w: string) => w.toLowerCase().replace(/[^a-z0-9']/g, '');
/**
 * Frame of word `k` (0-based) inside the `occ`-th match of an exact narration phrase, so a tile can land on the
 * very word that names it. Throws when the phrase is missing, like cueFrame.
 */
export const cw = (scene: SceneL, phrase: string, k = 0, occ = 1, fps = 30): number => {
	const words = (scene.captions ?? []).map(c => ({w: normW(c.text), ms: c.startMs}));
	const target = phrase.split(/\s+/).map(normW).filter(Boolean);
	let seen = 0;
	for (let i = 0; i + target.length <= words.length; i++) {
		if (target.every((t, j) => words[i + j].w === t)) {
			seen++;
			if (seen === occ) return Math.round((words[i + Math.min(k, target.length - 1)].ms / 1000) * fps);
		}
	}
	throw new Error(`Cue "${phrase}" (#${occ}) not found in scene ${scene.id}`);
};
export const speechEndOf = (scene: SceneL) => {
	const c = scene.captions ?? [];
	return c.length ? Math.round((c[c.length - 1].endMs / 1000) * 30) : 0;
};

// ---------- computed pairing (never typed) ----------
const RNA_OF: Record<string, string> = {A: 'U', T: 'A', C: 'G', G: 'C'};
const DNA_OF: Record<string, string> = {A: 'T', T: 'A', C: 'G', G: 'C'};
/** mRNA bases paired to a DNA template, in the same left-to-right order (antiparallel, so ends swap). */
export const complementRNA = (template: string) => template.split('').map(c => RNA_OF[c] ?? '?').join('');
export const complementDNA = (s: string) => s.split('').map(c => DNA_OF[c] ?? '?').join('');
/** The coding strand read as RNA (T to U). */
export const asRNA = (s: string) => s.replace(/T/g, 'U');
// Build check against the sequences in the B6b and B6c designs.
([['TACCGAATT', 'AUGGCUUAA'], ['TGCAATCGG', 'ACGUUAGCC'], ['ACGTTAGCC', 'UGCAAUCGG'], ['TACTTCGGAACT', 'AUGAAGCCUUGA'], ['TACTGAATT', 'AUGACUUAA']] as [string, string][]).forEach(([t, m]) => {
	if (complementRNA(t) !== m) throw new Error(`complementRNA(${t}) gave ${complementRNA(t)}, expected ${m}`);
});
if (asRNA(complementDNA('TACCGAATT')) !== 'AUGGCUUAA') throw new Error('coding strand check failed');

// ---------- base tiles and strands ----------
export type TileTone = 'grey' | 'ghost' | undefined;
const GREYL = '#8d949b';
/** A base tile attached at x,y (centre of its backbone edge). U uses T's notched shape with an amber fill. */
export const BaseTile: React.FC<{x: number; y: number; face: 'down' | 'up'; l: string; w?: number; h?: number; o?: number; glow?: number; tone?: TileTone; rot?: number; s?: number}> = ({x, y, face, l, w = 84, h = 62, o = 1, glow = 0, tone, rot = 0, s = 1}) => {
	if (o <= 0.01) return null;
	const cy = y + (face === 'down' ? h / 2 : -h / 2);
	const shape = l === 'U' ? 'T' : l;
	const fill = tone === 'grey' ? '#d3d6da' : tone === 'ghost' ? 'none' : l === 'U' ? U_FILL : FILL[l] ?? '#ddd';
	const stroke = tone === 'grey' ? GREYL : tone === 'ghost' ? INK_SOFT : l === 'U' ? AMBER_INK : LINE[l] ?? INK;
	const fs = h * 0.6;
	const flip = face === 'up' ? 'scale(1,-1)' : undefined;
	return (
		<g transform={`translate(${x},${cy}) rotate(${rot}) scale(${s})`} opacity={o}>
			{glow > 0.01 ? <g transform={flip}><path d={tilePath(shape, w + 16, h + 16)} fill={AMBER} opacity={0.55 * glow} /></g> : null}
			<g transform={flip}><path d={tilePath(shape, w, h)} fill={fill} stroke={stroke} strokeWidth={3.5} strokeLinejoin="round" strokeDasharray={tone === 'ghost' ? '9 7' : undefined} /></g>
			{tone === 'ghost' ? null : <text x={0} y={fs * 0.36} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: fs}} fill={tone === 'grey' ? GREY_INK : INK}>{l}</text>}
		</g>
	);
};

export type StrandProps = {
	x: number; y: number; letters: string; pitch: number; face: 'down' | 'up'; color: string;
	tw?: number; th?: number; so?: number; o?: number; thick?: number;
	/** presence of nucleotide i (backbone piece, sugar and tile), 0..1 */
	unit?: (i: number) => number;
	/** vertical offset of the whole column (opening a bubble) */
	colDy?: (i: number) => number;
	/** extra offset of the tile only (a free nucleotide drifting in) */
	tileDx?: (i: number) => number; tileDy?: (i: number) => number; tileO?: (i: number) => number;
	glow?: (i: number) => number; letterOf?: (i: number) => string; tone?: (i: number) => TileTone;
	/** amber glow along the backbone (a strand being read) */
	bbGlow?: number;
};
/** One coded strand: backbone with sugars, phosphate dots between them, and a base tile per column ('.' = no tile). */
export const Strand: React.FC<StrandProps> = ({x, y, letters, pitch, face, color, tw: tW = 84, th = 62, so = 22, o = 1, thick = 9, unit, colDy, tileDx, tileDy, tileO, glow, letterOf, tone, bbGlow = 0}) => {
	if (o <= 0.01) return null;
	const n = letters.length;
	const sg = face === 'down' ? 1 : -1;
	const u = (i: number) => (unit ? unit(i) : 1);
	const cy = (i: number) => y + (colDy ? colDy(i) : 0);
	const cx = (i: number) => x + i * pitch;
	const bb: React.ReactNode[] = [], glows: React.ReactNode[] = [], cols: React.ReactNode[] = [];
	for (let i = 0; i < n; i++) {
		const ui = u(i);
		if (ui <= 0.01) continue;
		if (i + 1 < n && u(i + 1) > 0.01) {
			const uu = Math.min(ui, u(i + 1));
			if (bbGlow > 0.01) glows.push(<line key={'g' + i} x1={cx(i)} y1={cy(i)} x2={cx(i + 1)} y2={cy(i + 1)} stroke={AMBER} strokeWidth={thick + 16} strokeLinecap="round" opacity={0.45 * bbGlow * uu} />);
			bb.push(<line key={'b' + i} x1={cx(i)} y1={cy(i)} x2={cx(i + 1)} y2={cy(i + 1)} stroke={color} strokeWidth={thick} strokeLinecap="round" opacity={uu} />);
			bb.push(<circle key={'p' + i} cx={(cx(i) + cx(i + 1)) / 2} cy={(cy(i) + cy(i + 1)) / 2} r={7} fill={color} stroke="#fffdf8" strokeWidth={2} opacity={uu} />);
		}
		const l = letterOf ? letterOf(i) : letters[i];
		const to = (tileO ? tileO(i) : 1) * ui;
		cols.push(
			<g key={'c' + i}>
				{l !== '.' ? <line x1={cx(i)} y1={cy(i) + sg * 10} x2={cx(i)} y2={cy(i) + sg * so} stroke={color} strokeWidth={5} opacity={ui} /> : null}
				<Sugar x={cx(i)} y={cy(i)} r={14} color={color} o={ui} />
				{l !== '.' ? <BaseTile x={cx(i) + (tileDx ? tileDx(i) : 0)} y={cy(i) + sg * so + (tileDy ? tileDy(i) : 0)} face={face} l={l} w={tW} h={th} o={to} glow={glow ? glow(i) : 0} tone={tone ? tone(i) : undefined} /> : null}
			</g>,
		);
	}
	return <g opacity={o}>{glows}{bb}{cols}</g>;
};

/** A free nucleotide (sugar, stalk and tile) floating at x,y, used for docking and turned-away tiles. */
export const FreeNuc: React.FC<{x: number; y: number; l: string; face: 'down' | 'up'; color?: string; o?: number; tw?: number; th?: number; so?: number; tone?: TileTone; glow?: number}> = ({x, y, l, face, color = MRNA, o = 1, tw: tW = 84, th = 62, so = 22, tone, glow = 0}) => {
	if (o <= 0.01) return null;
	const sg = face === 'down' ? 1 : -1;
	return (
		<g opacity={o}>
			<line x1={x} y1={y + sg * 10} x2={x} y2={y + sg * so} stroke={color} strokeWidth={5} />
			<Sugar x={x} y={y} r={14} color={color} />
			<BaseTile x={x} y={y + sg * so} face={face} l={l} w={tW} h={th} tone={tone} glow={glow} />
		</g>
	);
};

/** 5' and 3' tags at the two ends of a strand (centred on the backbone). */
export const Ends: React.FC<{x: number; y: number; n: number; pitch: number; left: string; right: string; at: number; out?: number; color?: string; size?: number; o?: number; leftDy?: number; rightDy?: number; gap?: number}> = ({x, y, n, pitch, left, right, at, out, color = INK, size = 44, o = 1, leftDy = 0, rightDy = 0, gap = 0.62}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12) * (out === undefined ? 1 : 1 - prog(f, out, 10)) * o;
	if (p <= 0.01) return null;
	const st = {fontFamily: FONT_HAND, fontWeight: 700, fontSize: size} as const;
	return (
		<g opacity={p}>
			<text x={x - pitch * gap} y={y + size * 0.34 + leftDy} textAnchor="middle" style={st} fill={color}>{left}</text>
			<text x={x + (n - 1) * pitch + pitch * gap} y={y + size * 0.34 + rightDy} textAnchor="middle" style={st} fill={color}>{right}</text>
		</g>
	);
};
/** Small grey arrowhead on a backbone, pointing 5' to 3' (dir 1 = to the right). */
export const BbArrow: React.FC<{x: number; y: number; dir: 1 | -1; o?: number}> = ({x, y, dir, o = 1}) => (o <= 0.01 ? null : (
	<path d={`M${x - dir * 9},${y - 13} L${x + dir * 7},${y} L${x - dir * 9},${y + 13}`} fill="none" stroke={GREYT} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" opacity={o} />
));
/** Large amber process arrow with its verb label ("read", "built"): the only large arrows on a strand board. */
export const BigArrow: React.FC<{x1: number; x2: number; y: number; at: number; label: string; out?: number; size?: number; labelSide?: 'above' | 'right' | 'left'; color?: string; width?: number}> = ({x1, x2, y, at, label, out, size = 38, labelSide = 'right', color = AMBER_INK, width = 7}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 22);
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (p <= 0.01 || o <= 0.01) return null;
	const s = x2 > x1 ? 1 : -1;
	const tip = x1 + (x2 - x1) * p;
	const lx = labelSide === 'above' ? (x1 + x2) / 2 : labelSide === 'right' ? Math.max(x1, x2) + 26 : Math.min(x1, x2) - 26;
	const anchor = labelSide === 'above' ? 'middle' : labelSide === 'right' ? 'start' : 'end';
	return (
		<g opacity={o}>
			<line x1={x1} y1={y} x2={tip} y2={y} stroke={color} strokeWidth={width} strokeLinecap="round" />
			<path d={`M${tip - s * 22},${y - 16} L${tip},${y} L${tip - s * 22},${y + 16}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
			<text x={lx} y={labelSide === 'above' ? y - 18 : y + size * 0.32} textAnchor={anchor} opacity={prog(f, at + 10, 12)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size}} fill={color}>{label}</text>
		</g>
	);
};

/** RNA polymerase: a soft ochre bean, see-through so the pairing under it stays visible. */
export const RnaPol: React.FC<{x: number; y: number; w?: number; h?: number; o?: number; label?: boolean; labelText?: string; clamp?: number}> = ({x, y, w = 330, h = 250, o = 1, label = true, labelText = 'RNA polymerase', clamp = 0}) => {
	if (o <= 0.01) return null;
	const a = w / 2, b = h / 2;
	const d = `M${-a},${b * 0.1} C${-a},${-b * 1.25} ${a},${-b * 1.25} ${a},${b * 0.1} C${a},${b * 1.05} ${a * 0.25},${b * 0.95} 0,${b * 0.78} C${-a * 0.25},${b * 0.95} ${-a},${b * 1.05} ${-a},${b * 0.1} Z`;
	return (
		<g transform={`translate(${x},${y})`} opacity={o}>
			<path d={d} fill={POL} fillOpacity={0.26} stroke={POL_INK} strokeWidth={5} strokeLinejoin="round" />
			<path d={`M${-a * 0.62},${-b * 0.6} C${-a * 0.3},${-b * 0.85} ${a * 0.3},${-b * 0.85} ${a * 0.62},${-b * 0.6}`} fill="none" stroke="#fff6e0" strokeWidth={6} strokeLinecap="round" opacity={0.8} />
			{clamp > 0.01 ? (
				<g opacity={clamp}>
					<rect x={-a * 0.7} y={-b * 0.25} width={a * 1.4} height={b * 0.5} rx={18} fill="#d3d6da" fillOpacity={0.75} stroke={GREYT} strokeWidth={4} />
					<Sx x={0} y={b * 0.1} text="stuck" size={34} color={GREY_INK} weight={700} anchor="middle" at={-100} />
				</g>
			) : null}
			{label ? <text x={0} y={b * 0.12} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: Math.min(38, w / 8)}} fill={POL_INK}>{labelText}</text> : null}
		</g>
	);
};

// ---------- the nucleus board ----------
/** The transcription board geometry: 12 columns (promoter 0 to 2, gene 3 to 11). */
export const BD = {x0: 300, pitch: 120, n: 12, tw: 84, th: 62, so: 22, yc: 440, gap: 36, openT: 150, openB: 110};
export const colX = (i: number) => BD.x0 + i * BD.pitch;
export const YT = BD.yc + 2 * BD.so + 2 * BD.th + BD.gap; // template backbone (closed)
export const YM = YT + BD.openB - 2 * BD.so - 2 * BD.th - 14; // mRNA backbone inside the open bubble
export const GENE0 = 3, GENE1 = 11;
/** Envelope arc across the top of the board (screen y for screen x). */
export const arcY = (x: number) => 214 + ((x - 960) / 960) ** 2 * 40;
export const PORE_X = 1600;
export const EnvelopeArc: React.FC<{o?: number; poreX?: number; poreHi?: number}> = ({o = 1, poreX = PORE_X, poreHi = 0}) => {
	if (o <= 0.01) return null;
	const seg = (x0: number, x1: number, dy: number) => {
		let d = '';
		for (let x = x0; x <= x1; x += 20) d += `${d ? 'L' : 'M'}${x},${(arcY(x) + dy).toFixed(1)} `;
		return d;
	};
	const g = 30;
	return (
		<g opacity={o}>
			{[-7, 7].map(dy => (
				<g key={dy}>
					<path d={seg(-40, poreX - g, dy)} fill="none" stroke="#5b4d70" strokeWidth={4} strokeDasharray="20 10" strokeLinecap="round" opacity={0.7} />
					<path d={seg(poreX + g, 1960, dy)} fill="none" stroke="#5b4d70" strokeWidth={4} strokeDasharray="20 10" strokeLinecap="round" opacity={0.7} />
				</g>
			))}
			<ellipse cx={poreX - g} cy={arcY(poreX - g)} rx={9} ry={12} fill="#e9dff0" stroke="#5b4d70" strokeWidth={3.5} />
			<ellipse cx={poreX + g} cy={arcY(poreX + g)} rx={9} ry={12} fill="#e9dff0" stroke="#5b4d70" strokeWidth={3.5} />
			{poreHi > 0.01 ? <circle cx={poreX} cy={arcY(poreX)} r={44} fill={AMBER} opacity={0.18 * poreHi} /> : null}
			<text x={40} y={arcY(40) - 22} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30}} fill="#5b4d70" opacity={0.75}>nuclear envelope</text>
			<text x={40} y={arcY(40) + 46} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30}} fill="#5b4d70" opacity={0.6}>inside the nucleus</text>
		</g>
	);
};

/** A DNA double strand on the board: coding (top, tiles down) and template (bottom, tiles up). */
export const Duplex: React.FC<{
	top: string; bot: string; open?: (i: number) => number; topO?: number; botO?: number; bonds?: (i: number) => number;
	topGlow?: number; botGlow?: number; topTileGlow?: (i: number) => number; botTileGlow?: (i: number) => number; x0?: number; yc?: number;
	topLetterOf?: (i: number) => string; botLetterOf?: (i: number) => string; unit?: (i: number) => number; color?: string; topDy?: number;
	/** override the top strand's vertical offset (px) per column; bonds still follow `open` */
	topColDy?: (i: number) => number; topTone?: (i: number) => TileTone; botTone?: (i: number) => TileTone;
}> = ({top, bot, open, topO = 1, botO = 1, bonds, topGlow = 0, botGlow = 0, topTileGlow, botTileGlow, x0 = BD.x0, yc = BD.yc, topLetterOf, botLetterOf, unit, color = PLUM, topDy = 0, topColDy, topTone, botTone}) => {
	const op = (i: number) => (open ? open(i) : 0);
	const yt = yc + (YT - BD.yc);
	const faceT = yc + BD.so + BD.th, faceB = yt - BD.so - BD.th;
	const n = top.length;
	const u = (i: number) => (unit ? unit(i) : 1);
	return (
		<g>
			{Array.from({length: n}, (_, i) => {
				const bp = (bonds ? bonds(i) : 1) * (1 - Math.min(1, op(i) * 2.5)) * u(i);
				if (bp <= 0.01) return null;
				const l = top[i];
				const offs = l === 'A' || l === 'T' ? [-0.25, 0.25] : [-0.3, 0, 0.3];
				return <g key={i} opacity={bp * Math.min(topO, botO)}>{offs.map((k, j) => <line key={j} x1={x0 + i * BD.pitch + k * BD.tw} x2={x0 + i * BD.pitch + k * BD.tw} y1={faceT + 4} y2={faceB - 4} stroke="#6b5a45" strokeWidth={5} strokeLinecap="round" strokeDasharray="0.1 9" />)}</g>;
			})}
			<Strand x={x0} y={yc + topDy} letters={top} pitch={BD.pitch} face="down" color={color} o={topO} colDy={topColDy ?? (i => -op(i) * BD.openT)} bbGlow={topGlow} glow={topTileGlow} letterOf={topLetterOf} unit={unit} tone={topTone} />
			<Strand x={x0} y={yt} letters={bot} pitch={BD.pitch} face="up" color={color} o={botO} colDy={i => op(i) * BD.openB} bbGlow={botGlow} glow={botTileGlow} letterOf={botLetterOf} unit={unit} tone={botTone} />
		</g>
	);
};
/** Opening profile: columns a..b open fully at progress p (with soft shoulders). */
export const bubble = (a: number, b: number, p: number) => (i: number) => (i >= a && i <= b ? p : i === a - 1 || i === b + 1 ? p * 0.3 : 0);

// ---------- painted cell plate ----------
export const PL_CELL: PDef = {src: A.CELL, nat: [2000, 2000], ref: [1035, 1032]};
/** Natural-pixel features of m5x-cell-protein-synthesis-v1 (read off the plate). */
export const CELLPT = {
	nuc: [1035, 1032] as [number, number], nucR: 295,
	pores: {top: [974, 748], ul: [815, 841], l: [741, 1021], ll: [786, 1186], tr: [1174, 780], r: [1300, 918], b: [1082, 1307]} as Record<string, [number, number]>,
	erRibo: [[603, 643], [550, 696], [683, 593], [528, 1160]] as [number, number][],
	freeRibo: [[1240, 712], [1380, 890], [1098, 473], [1413, 822], [900, 1440], [910, 1357]] as [number, number][],
};
export const CellPlate: React.FC<{x: number; y: number; k: number; o?: number}> = ({x, y, k, o = 1}) => <Pl p={PL_CELL} x={x} y={y} k={k} o={o} />;

// ---------- paths and the mRNA ribbon ----------
export type Pt = [number, number];
export type PathS = {pts: Pt[]; cum: number[]; len: number};
/** Sample a cubic bezier into a polyline with arc length. */
export const cubic = (p0: Pt, c1: Pt, c2: Pt, p1: Pt, n = 60): Pt[] => Array.from({length: n + 1}, (_, i) => {
	const t = i / n, m = 1 - t;
	return [m * m * m * p0[0] + 3 * m * m * t * c1[0] + 3 * m * t * t * c2[0] + t * t * t * p1[0], m * m * m * p0[1] + 3 * m * m * t * c1[1] + 3 * m * t * t * c2[1] + t * t * t * p1[1]];
});
export const mkPath = (pts: Pt[]): PathS => {
	const cum = [0];
	for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
	return {pts, cum, len: cum[cum.length - 1]};
};
export const ptAt = (p: PathS, s: number): Pt => {
	if (s <= 0) return p.pts[0];
	if (s >= p.len) return p.pts[p.pts.length - 1];
	let i = 1;
	while (p.cum[i] < s) i++;
	const u = (s - p.cum[i - 1]) / (p.cum[i] - p.cum[i - 1]);
	return [p.pts[i - 1][0] + (p.pts[i][0] - p.pts[i - 1][0]) * u, p.pts[i - 1][1] + (p.pts[i][1] - p.pts[i - 1][1]) * u];
};
export const polyD = (pts: Pt[]) => pts.map((q, i) => `${i ? 'L' : 'M'}${q[0].toFixed(1)},${q[1].toFixed(1)}`).join(' ');
const RIB_COLS = ['#f4b5a4', U_FILL, '#d3a2dc', '#adb6ee'];
/**
 * A small mRNA strand travelling along a path: its 5' end (head) at arc length `head`, `len` px long behind it.
 * Base ticks alternate colours. fray 0..1 breaks it into pieces and fades it (broken down).
 */
export const Ribbon: React.FC<{path: PathS; head: number; len?: number; o?: number; width?: number; fray?: number; ticks?: number}> = ({path, head, len = 90, o = 1, width = 6, fray = 0, ticks = 9}) => {
	if (o <= 0.01) return null;
	const n = 24;
	const pts: Pt[] = [];
	for (let i = 0; i <= n; i++) pts.push(ptAt(path, Math.max(0, head - (len * i) / n)));
	const tk: React.ReactNode[] = [];
	for (let j = 0; j < ticks; j++) {
		const s0 = Math.max(0, head - (len * (j + 0.5)) / ticks);
		const a = ptAt(path, s0), b = ptAt(path, Math.max(0, s0 - 2));
		const ang = Math.atan2(a[1] - b[1], a[0] - b[0]) + Math.PI / 2;
		const dx = Math.cos(ang) * width * 1.6, dy = Math.sin(ang) * width * 1.6;
		const jit = fray > 0 ? (j % 2 ? 1 : -1) * fray * 10 : 0;
		tk.push(<line key={j} x1={a[0] + jit} y1={a[1] + jit} x2={a[0] + dx + jit} y2={a[1] + dy + jit} stroke={RIB_COLS[j % 4]} strokeWidth={width * 0.9} strokeLinecap="round" opacity={1 - fray * (j % 3 === 0 ? 1 : 0.6)} />);
	}
	const pieces = fray > 0.01 ? [0, 1, 2, 3].map(k => pts.slice(k * 6, k * 6 + 6)) : [pts];
	return (
		<g opacity={o * (1 - fray * 0.85)}>
			{tk}
			{pieces.map((q, k) => <path key={k} d={polyD(q.map(v => [v[0] + (fray ? (k - 1.5) * fray * 9 : 0), v[1] + (fray ? (k % 2 ? 1 : -1) * fray * 7 : 0)] as Pt))} fill="none" stroke={MRNA} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />)}
			<circle cx={pts[0][0]} cy={pts[0][1]} r={width * 0.75} fill={MRNA_INK} />
		</g>
	);
};

// ---------- chips, boxes, marks ----------
/** A rounded chip with hand text. */
export const Chip: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; color?: string; stroke?: string; fill?: string; anchor?: 'start' | 'middle' | 'end'; hand?: boolean; dashed?: boolean; hot?: number; weight?: number}> = ({x, y, text, at, out, size = 36, color = INK, stroke = 'rgba(60,45,20,0.25)', fill = '#fffdf8', anchor = 'start', hand = true, dashed = false, hot = 0, weight = 700}) => {
	const w = tw(text, size, hand) * (hand ? 1.1 : 1.04) + 48;
	const h = size + 26;
	const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
	return (
		<Fade at={at} out={out}>
			<rect x={x0} y={y} width={w} height={h} rx={h / 2} fill={fill} stroke={hot > 0.01 ? AMBER : stroke} strokeWidth={hot > 0.01 ? 5 : 3} strokeDasharray={dashed ? '9 7' : undefined} />
			<Sx x={x0 + 22} y={y + size * 0.82 + 10} text={text} size={size} color={color} hand={hand} weight={weight} at={at} />
		</Fade>
	);
};
export const chipW = (text: string, size = 36, hand = true) => tw(text, size, hand) * (hand ? 1.1 : 1.04) + 48;
/** Answer box with optional ruled lines. */
export const AnswerBox: React.FC<{x: number; y: number; w: number; h: number; at: number; lines?: number; label?: string}> = ({x, y, w, h, at, lines = 1, label}) => (
	<Fade at={at}>
		<rect x={x} y={y} width={w} height={h} rx={12} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="10 7" />
		{label ? <text x={x + 18} y={y + 36} fill={INK_SOFT} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 26}}>{label}</text> : null}
		{Array.from({length: lines}, (_, i) => {
			const ly = y + ((i + 1) * h) / (lines + 0.45);
			return <path key={i} d={`M${x + (label ? 70 : 20)},${ly} L${x + w - 20},${ly}`} stroke="rgba(60,45,20,0.22)" strokeWidth={2} strokeDasharray="6 8" />;
		})}
	</Fade>
);
/** A model-answer line: amber tick, then the line. */
export const ModelLine: React.FC<{x: number; y: number; text: string; at: number; size?: number; color?: string}> = ({x, y, text, at, size = 30, color = INK}) => (
	<g>
		<Fade at={at}><DrawPath d={`M${x - 28},${y - 11} L${x - 19},${y - 2} L${x - 6},${y - 22}`} at={at} dur={10} color={AMBER} width={5} /></Fade>
		<Sx x={x} y={y} text={text} size={size} color={color} weight={600} at={at} />
	</g>
);
/** The classic-mistake chip: grey text that takes a grey scribble cross. */
export const MistakeChip: React.FC<{x: number; y: number; text: string; at: number; cross: number; size?: number}> = ({x, y, text, at, cross, size = 30}) => {
	const w = tw(text, size) + 48;
	return (
		<Fade at={at}>
			<rect x={x} y={y} width={w} height={size + 28} rx={(size + 28) / 2} fill="#eceeef" stroke={GREYT} strokeWidth={2.5} />
			<Sx x={x + 24} y={y + size + 6} text={text} size={size} color={GREY_INK} weight={600} at={at} />
			<DrawPath d={scribbleEllipse(x + w / 2, y + (size + 28) / 2, w / 2 + 8, (size + 28) / 2 + 6, 7, 1.1)} at={cross} dur={16} color={GREYT} width={4} />
			<DrawPath d={`M${x + 10},${y + size + 20} L${x + w - 10},${y + 8}`} at={cross + 8} dur={10} color={GREYT} width={6} />
		</Fade>
	);
};
export const mistakeW = (text: string, size = 30) => tw(text, size) + 48;
/** Scribble ring that can fade out. */
export const Ring: React.FC<{cx: number; cy: number; rx: number; ry: number; at: number; out?: number; color?: string; seed?: number; width?: number}> = ({cx, cy, rx, ry, at, out, color = AMBER, seed = 3, width = 5}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (f < at || o <= 0.01) return null;
	return <g opacity={o}><DrawPath d={scribbleEllipse(cx, cy, rx, ry, seed)} at={at} dur={18} color={color} width={width} /></g>;
};
export const Cross: React.FC<{x: number; y: number; at: number; s?: number; color?: string; out?: number}> = ({x, y, at, s = 26, color = GREYT, out}) => (
	<Fade at={at} out={out}>
		<DrawPath d={`M${x - s},${y - s} L${x + s},${y + s}`} at={at} dur={8} color={color} width={6} />
		<DrawPath d={`M${x + s},${y - s} L${x - s},${y + s}`} at={at + 5} dur={8} color={color} width={6} />
	</Fade>
);
export const Tick: React.FC<{x: number; y: number; at: number; s?: number; color?: string}> = ({x, y, at, s = 30, color = GREEN}) => (
	<DrawPath d={`M${x - s * 0.5},${y} L${x - s * 0.12},${y + s * 0.45} L${x + s * 0.55},${y - s * 0.5}`} at={at} dur={12} color={color} width={6} />
);
/** A plain arrow (not a strand arrow): for paths and pointers. */
export const PlainArrow: React.FC<{x1: number; y1: number; x2: number; y2: number; at: number; color?: string; width?: number; dash?: string; out?: number}> = ({x1, y1, x2, y2, at, color = INK_SOFT, width = 4, dash, out}) => {
	const a = Math.atan2(y2 - y1, x2 - x1), h = 16;
	return (
		<Fade at={at} out={out}>
			<DrawPath d={`M${x1},${y1} L${x2},${y2}`} at={at} dur={14} color={color} width={width} dash={dash} />
			<Fade at={at + 10}><path d={`M${x2 - h * Math.cos(a - 0.5)},${y2 - h * Math.sin(a - 0.5)} L${x2},${y2} L${x2 - h * Math.cos(a + 0.5)},${y2 - h * Math.sin(a + 0.5)}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></Fade>
		</Fade>
	);
};
/** A bracket under (or over) a span, with an optional label. */
export const SpanBracket: React.FC<{x1: number; x2: number; y: number; at: number; out?: number; label?: string; color?: string; up?: boolean; size?: number; width?: number}> = ({x1, x2, y, at, out, label, color = AMBER_INK, up = false, size = 36, width = 5}) => {
	const s = up ? -1 : 1;
	return (
		<Fade at={at} out={out}>
			<DrawPath d={`M${x1},${y - s * 14} L${x1},${y} L${x2},${y} L${x2},${y - s * 14}`} at={at} dur={14} color={color} width={width} />
			{label ? <Sx x={(x1 + x2) / 2} y={up ? y - 18 : y + size + 4} text={label} size={size} color={color} hand anchor="middle" at={at + 6} /> : null}
		</Fade>
	);
};
/** Amino-acid style bead (used for the polypeptide side chip). */
export const Bead: React.FC<{x: number; y: number; r?: number; fill?: string; o?: number; label?: string}> = ({x, y, r = 16, fill = '#e8b48a', o = 1, label}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill={fill} stroke={INK_SOFT} strokeWidth={2.5} />
		{label ? <text x={x} y={y + r * 0.32} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: r * 0.82}} fill={INK}>{label}</text> : null}
	</g>
));
/** Small coded protein blob (a folded chain). */
export const Blob: React.FC<{x: number; y: number; r?: number; o?: number; fill?: string; seed?: number; s?: number}> = ({x, y, r = 22, o = 1, fill = AMBER, seed = 1, s = 1}) => {
	if (o <= 0.01) return null;
	const d = Array.from({length: 37}, (_, i) => {
		const t = (i / 36) * Math.PI * 2;
		const w = 1 + 0.12 * Math.sin(4 * t + seed) + 0.08 * Math.cos(7 * t + seed * 2);
		return `${i ? 'L' : 'M'}${(x + r * s * w * Math.cos(t)).toFixed(1)},${(y + r * s * w * Math.sin(t)).toFixed(1)}`;
	}).join(' ') + ' Z';
	return <path d={d} fill={fill} fillOpacity={0.85} stroke={AMBER_INK} strokeWidth={2.5} opacity={o} />;
};
/** The pair rule card that stays in the top right corner (scenes 3 to 5b). */
export const PairRule: React.FC<{at?: number; out?: number}> = ({at = -100, out}) => (
	<Chip x={1824} y={84} anchor="end" text="RNA: A with U, C with G" at={at} out={out} size={38} color={MRNA_INK} stroke={MRNA} />
);
export const Q = (f: number, keys: [number, number][]) => kf(f, keys);
void PLUM_SOFT; void plPt; void PL; void wrap; void Heading; void Overlay; void GreyTag;
