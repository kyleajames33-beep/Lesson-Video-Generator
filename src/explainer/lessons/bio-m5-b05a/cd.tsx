import React, {useEffect, useId, useState} from 'react';
import {continueRender, delayRender, Easing, interpolate, staticFile} from 'remotion';
import {AMBER, AMBER_INK, FONT_DISPLAY, INK} from '../bio-m5-b01/shared';

// ---------- Brief 88 painted cell-division plates (revision 7, 20 Oct) ----------
// Owner, 20 Oct: no coded chromosome bars pasted over painted cells. Every brief 88 plate is a 2000 x 2000 RGBA canvas and
// the stage plates share one cell canvas, so they crossfade. The chromosomes are painted in; code adds only labels,
// letters, arrows, rings and counters BESIDE them, placed from docs/production/claude-pm/assets/brief88-anchors.json
// (the values used are copied below, so this file does not depend on that untracked file). Where a scene needs a counted
// abstract model that no plate covers, it uses the clean HSC-style coded panel at the end of this file, in its own panel.
// New file: B5a and B5b scenes import it; no other lesson does, so published lessons are unchanged.

const BIO = 'assets/biology/';
export const CD = (name: string, empty = false) => `${BIO}cd-${name}${empty ? '-empty' : ''}-v1.png`;
export const SPREAD = `${BIO}m6-metaphase-spread-v1.png`;

/** Anchor values (native px of the 2000 canvas) from brief88-anchors.json. Chromosome order is the anchors' order. */
export const AN = {
	interphase: {nuc: [1000, 990, 385] as [number, number, number]},
	prophase: {cen: [[850, 830], [1140, 830], [900, 1120], [1110, 1120]] as [number, number][], len: [188, 188, 124, 124], poles: [[340, 960], [1655, 960]] as [number, number][]},
	/** pink long, teal long, teal short, pink short on the equator x 1000 */
	metaphase: {cen: [[1000, 710], [1000, 915], [1000, 1100], [1000, 1260]] as [number, number][], len: [180, 180, 118, 118], poles: [[365, 960], [1640, 960]] as [number, number][]},
	/** single chromatids: left group x 700, right group x 1300, same order */
	anaphase: {y: [785, 955, 1115, 1250], len: [134, 134, 88, 88], x: [700, 1300], poles: [[290, 995], [1690, 995]] as [number, number][]},
	telophase: {nuc: [[475, 980], [1520, 980]] as [number, number][], r: 220, cen: [[405, 895], [545, 895], [405, 1065], [545, 1065], [1450, 895], [1590, 895], [1450, 1065], [1590, 1065]] as [number, number][], furrow: 1000},
	daughters: {nuc: [[510, 990], [1490, 990]] as [number, number][], r: 220, cells: [[1, 485, 996, 1546], [1019, 478, 2000, 1556]]},
	nucleusZoom: {c: [1000, 1000] as [number, number], r: 765},
	/** duplicated X chromosomes: pink long, teal long, pink short, teal short */
	breaking: {cen: [[800, 790], [1350, 830], [830, 1375], [1175, 1380]] as [number, number][]},
	/** pink long, teal long, pink short, teal short (pairs side by side in the nucleus) */
	m1prophase: {nuc: [1010, 975, 475] as [number, number, number], cen: [[825, 950], [925, 950], [1155, 1050], [1260, 1050]] as [number, number][], ends: [[[770, 650], [810, 1270]], [[900, 675], [925, 1275]], [[1090, 880], [1150, 1225]], [[1200, 890], [1245, 1230]]] as [number, number][][]},
	/** pink long (left), teal long (right), teal short (left), pink short (right); equator x 1000 */
	m1metaphase: {cen: [[875, 885], [1125, 885], [875, 1245], [1125, 1245]] as [number, number][], ends: [[[815, 625], [840, 1110]], [[1065, 625], [1100, 1110]], [[830, 1130], [845, 1370]], [[1080, 1130], [1100, 1370]]] as [number, number][][], poles: [[340, 960], [1660, 960]] as [number, number][]},
	/** pink long and teal short to the left pole, teal long and pink short to the right */
	m1anaphase: {cen: [[580, 900], [620, 1125], [1435, 900], [1405, 1130]] as [number, number][], poles: [[180, 1015], [1820, 1015]] as [number, number][]},
	/** left cell pink long + teal short, right cell teal long + pink short */
	m1telophase: {nuc: [[650, 1010], [1400, 1010]] as [number, number][], r: 300, cen: [[575, 1010], [740, 1010], [1325, 1010], [1490, 1010]] as [number, number][], ends: [[[510, 760], [520, 1230]], [[705, 890], [700, 1160]], [[1270, 760], [1275, 1230]], [[1460, 895], [1455, 1155]]] as [number, number][][]},
	pairMetaphase: {cells: [[130, 615, 950, 1370], [1070, 615, 1870, 1370]], cen: [[470, 1000], [625, 1000], [1400, 1000], [1540, 1000]] as [number, number][], ends: [[[420, 830], [420, 1180]], [[595, 910], [595, 1090]], [[1350, 830], [1350, 1180]], [[1510, 910], [1510, 1090]]] as [number, number][][]},
	/** left cell: pink long chromatids at (330, 910) and (690, 910), teal short at (330, 1100) and (690, 1100); right cell: teal long, pink short */
	pairAnaphase: {cells: [[35, 710, 995, 1290], [1020, 710, 1965, 1290]], cen: [[330, 910], [330, 1100], [690, 910], [690, 1100], [1300, 910], [1300, 1100], [1680, 910], [1680, 1100]] as [number, number][]},
	/** TL pink long + teal short, TR teal long + pink short, BL as TL, BR as TR */
	fourCells: {cells: [[40, 50, 975, 975], [1025, 50, 1970, 975], [40, 1020, 975, 1950], [1025, 1020, 1970, 1950]], nuc: [[530, 555], [1510, 555], [530, 1520], [1510, 1520]] as [number, number][], r: 210},
	/** homologous pair (pink left, teal right): bands at the same three heights on every chromatid */
	loci: {nuc: [1000, 985, 880] as [number, number, number], cen: [[765, 945], [1235, 945]] as [number, number][], bands: [570, 1145, 1435], top: 350, bot: 1610, chromatidX: [690, 840, 1160, 1310]},
	/** synapsed pair: chromatids (left to right) pink, pink, teal, teal; the inner two exchange their distal segments below y 1200 */
	crossing: {bands: [570, 1145, 1435], top: 350, bot: 1620, chromatidX: [755, 922, 1078, 1244], chiasma: [1000, 1175] as [number, number], cen: [[875, 945], [1125, 945]] as [number, number][]},
};

// ---------- preload: SVG <image> is not tracked by Remotion, so hold the frame until the plates have decoded ----------
const READY = new Set<string>();
export const usePlates = (srcs: string[]) => {
	const [handle] = useState(() => (srcs.some(s => !READY.has(s)) ? delayRender('brief 88 plates') : null));
	useEffect(() => {
		if (handle === null) return;
		let live = true;
		Promise.all(srcs.map(s => new Promise<void>(res => {
			if (READY.has(s)) return res();
			const im = new Image();
			im.onload = () => { READY.add(s); res(); };
			im.onerror = () => res();
			im.src = staticFile(s);
		}))).then(() => { if (live) continueRender(handle); });
		return () => { live = false; };
	}, [handle]);
};

// ---------- the stage: a 2000 x 2000 canvas placed on screen, with a camera ----------
export type Cam = {zoom: number; fx: number; fy: number};
export type Base = {cx: number; cy: number; size: number};
export const BASE: Base = {cx: 960, cy: 555, size: 820};
const easeC = Easing.inOut(Easing.cubic);
/** Camera from keyframes [frame, zoom, fx, fy]. */
export const camAt = (f: number, keys: [number, number, number, number][]): Cam => {
	if (keys.length === 1) return {zoom: keys[0][1], fx: keys[0][2], fy: keys[0][3]};
	const fr: number[] = [];
	keys.forEach((k, i) => fr.push(i ? Math.max(k[0], fr[i - 1] + 1) : k[0]));
	const g = (i: 1 | 2 | 3) => interpolate(f, fr, keys.map(k => k[i]), {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeC});
	return {zoom: g(1), fx: g(2), fy: g(3)};
};
export const kOf = (cam: Cam, base: Base = BASE) => (base.size / 2000) * cam.zoom;
/** Native canvas point to screen. */
export const toS = (cam: Cam, nx: number, ny: number, base: Base = BASE): [number, number] => {
	const k = kOf(cam, base);
	return [base.cx + (nx - cam.fx) * k, base.cy + (ny - cam.fy) * k];
};
export const stageT = (cam: Cam, base: Base = BASE) => `translate(${base.cx},${base.cy}) scale(${kOf(cam, base)}) translate(${-cam.fx},${-cam.fy})`;

/** Crossfade weights that never show the paper through two overlapping paintings: B comes in over A, then A goes. */
export const xf = (t: number) => ({a: Math.max(0, Math.min(1, 2 - 2 * t)), b: Math.max(0, Math.min(1, 2 * t))});
export const smooth = (a: number, b: number, t: number) => { const u = Math.max(0, Math.min(1, (t - a) / (b - a))); return u * u * (3 - 2 * u); };

/** The stage group. `win` softly fades the paintings out under the heading band and above the bottom strip. */
export const Stage: React.FC<{cam: Cam; base?: Base; o?: number; win?: [number, number, number, number] | null; srcs?: string[]; children: React.ReactNode}> = ({cam, base = BASE, o = 1, win = [150, 205, 915, 950], srcs = [], children}) => {
	usePlates(srcs);
	const id = 'st' + useId().replace(/[^a-zA-Z0-9]/g, '');
	if (o <= 0.004) return null;
	return (
		<g opacity={o}>
			{win ? (
				<defs>
					<linearGradient id={id + 'g'} x1={0} y1={0} x2={0} y2={1080} gradientUnits="userSpaceOnUse">
						<stop offset={win[0] / 1080} stopColor="#000" />
						<stop offset={win[1] / 1080} stopColor="#fff" />
						<stop offset={win[2] / 1080} stopColor="#fff" />
						<stop offset={win[3] / 1080} stopColor="#000" />
					</linearGradient>
					<mask id={id} maskUnits="userSpaceOnUse" x={-200} y={-200} width={2320} height={1480}><rect x={-200} y={-200} width={2320} height={1480} fill={`url(#${id}g)`} /></mask>
				</defs>
			) : null}
			<g mask={win ? `url(#${id})` : undefined}>
				<g transform={stageT(cam, base)}>{children}</g>
			</g>
		</g>
	);
};

/** A plate on the native canvas. `box` (x0, y0, x1, y1) crops it with a feathered edge (or `circ` cx, cy, r, a soft
 *  circle); dx, dy move the crop; `mirror` flips it about the vertical line x = mirror with horizontal scale sx (1 normal,
 *  -1 mirrored; values between show the pair turning edge-on). `fit` places the whole canvas in a native rectangle
 *  (uniform scale only, so plates are never stretched). */
export const PL: React.FC<{src: string; o?: number; box?: [number, number, number, number]; circ?: [number, number, number]; feather?: number; dx?: number; dy?: number; mirror?: number; sx?: number; at?: [number, number, number]; filter?: string}> = ({src, o = 1, box, circ, feather = 22, dx = 0, dy = 0, mirror, sx = 1, at, filter}) => {
	const id = 'pl' + useId().replace(/[^a-zA-Z0-9]/g, '');
	if (o <= 0.004) return null;
	const tr: string[] = [];
	if (dx || dy) tr.push(`translate(${dx.toFixed(2)},${dy.toFixed(2)})`);
	if (mirror !== undefined) tr.push(`translate(${mirror},0) scale(${sx.toFixed(4)},1) translate(${-mirror},0)`);
	// `at` = [cx, cy, s]: draw the whole canvas scaled by s about its centre, with its centre at (cx, cy)
	if (at) tr.push(`translate(${at[0]},${at[1]}) scale(${at[2]}) translate(-1000,-1000)`);
	const masked = !!box || !!circ;
	return (
		<g transform={tr.length ? tr.join(' ') : undefined} opacity={o}>
			{box ? (
				<defs>
					<filter id={id + 'f'} x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation={feather / 2} /></filter>
					<mask id={id} maskUnits="userSpaceOnUse" x={0} y={0} width={2000} height={2000}>
						<rect x={box[0] + feather / 2} y={box[1] + feather / 2} width={Math.max(1, box[2] - box[0] - feather)} height={Math.max(1, box[3] - box[1] - feather)} rx={feather} fill="#fff" filter={`url(#${id}f)`} />
					</mask>
				</defs>
			) : null}
			{circ ? (
				<defs>
					<radialGradient id={id + 'r'} cx={circ[0]} cy={circ[1]} r={circ[2]} gradientUnits="userSpaceOnUse">
						<stop offset={1 - feather / circ[2]} stopColor="#fff" />
						<stop offset={1} stopColor="#000" />
					</radialGradient>
					<mask id={id} maskUnits="userSpaceOnUse" x={0} y={0} width={2000} height={2000}><rect x={0} y={0} width={2000} height={2000} fill={`url(#${id}r)`} /></mask>
				</defs>
			) : null}
			<image href={staticFile(src)} x={0} y={0} width={2000} height={2000} mask={masked ? `url(#${id})` : undefined} style={filter ? {filter} : undefined} />
		</g>
	);
};

/** Dissolve between two whole plates (t 0..1). */
export const Dissolve: React.FC<{a: string; b: string; t: number; o?: number}> = ({a, b, t, o = 1}) => {
	const w = xf(t);
	return (
		<g opacity={o}>
			{w.a > 0.004 ? <PL src={a} o={w.a} /> : null}
			{w.b > 0.004 ? <PL src={b} o={w.b} /> : null}
		</g>
	);
};

/** A painted piece that travels: crop `boxA` of plate A moves from its place to anchor B while it fades into crop `boxB`
 *  of plate B arriving from anchor A. Pieces ride over a dissolve of the two empty plates, so painted chromosomes move. */
export type Piece = {a: [number, number]; b: [number, number]; boxA: [number, number, number, number]; boxB: [number, number, number, number]};
export const Morph: React.FC<{A: string; B: string; t: number; pieces: Piece[]; move?: number; fade?: [number, number]; bg?: [number, number]}> = ({A, B, t, pieces, move, fade = [0.35, 0.75], bg = [0.4, 0.62]}) => {
	const m = move ?? t;
	const pb = smooth(fade[0], fade[1], t);
	// the cell outline changes quickly in the middle of the move, so two cell shapes are never seen together for long
	const tb = Math.max(0, Math.min(1, (t - bg[0]) / (bg[1] - bg[0])));
	if (t <= 0) return <PL src={A} />;
	if (t >= 1) return <PL src={B} />;
	return (
		<>
			<Dissolve a={A.replace('-v1.png', '-empty-v1.png')} b={B.replace('-v1.png', '-empty-v1.png')} t={tb} />
			{pieces.map((p, i) => {
				const dx = (p.b[0] - p.a[0]) * m, dy = (p.b[1] - p.a[1]) * m;
				return (
					<g key={i}>
						{pb < 0.996 ? <PL src={A} box={p.boxA} dx={dx} dy={dy} o={1 - pb} feather={14} /> : null}
						{pb > 0.004 ? <PL src={B} box={p.boxB} dx={dx - (p.b[0] - p.a[0])} dy={dy - (p.b[1] - p.a[1])} o={pb} feather={14} /> : null}
					</g>
				);
			})}
		</>
	);
};
/** Crop box around a chromosome from its centromere and arm length (native px), with a half width. */
export const cbox = (cx: number, cy: number, up: number, down: number, hw: number): [number, number, number, number] => [cx - hw, cy - up, cx + hw, cy + down];

// ---------- labels beside painted chromosomes ----------
/** A short amber leader line from a label point to a painted target (screen px). */
export const Leader: React.FC<{x1: number; y1: number; x2: number; y2: number; o?: number; color?: string; w?: number}> = ({x1, y1, x2, y2, o = 1, color = AMBER_INK, w = 4}) => (o > 0.01 ? <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={w} strokeLinecap="round" opacity={o} /> : null);
/** An allele letter in a white bead with an ink ring (letters, never colour only). */
export const Letter: React.FC<{x: number; y: number; t: string; r?: number; o?: number; hi?: number}> = ({x, y, t, r = 20, o = 1, hi = 0}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{hi > 0.01 ? <circle cx={x} cy={y} r={r + 9} fill="none" stroke={AMBER} strokeWidth={6} opacity={hi} /> : null}
			<circle cx={x} cy={y} r={r} fill="#fffdf8" stroke={INK} strokeWidth={3} />
			<text x={x} y={y + r * 0.4} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: r * 1.15}} fill={INK}>{t}</text>
		</g>
	);
};
/** A thin tick from a letter to the painted band it names. */
export const BandTick: React.FC<{x1: number; x2: number; y: number; o?: number}> = ({x1, x2, y, o = 1}) => (o > 0.01 ? <line x1={x1} y1={y} x2={x2} y2={y} stroke={INK} strokeWidth={2.5} strokeDasharray="2 6" strokeLinecap="round" opacity={0.7 * o} /> : null);
/** A pulsing amber ring on a painted point (a centromere, a band). */
export const Ring: React.FC<{x: number; y: number; r?: number; o?: number; w?: number}> = ({x, y, r = 26, o = 1, w = 5}) => (o > 0.01 ? <circle cx={x} cy={y} r={r} fill="none" stroke={AMBER} strokeWidth={w} opacity={o} /> : null);

// ---------- clean HSC-style coded panel (counted abstract models only, never over a painting) ----------
export const HPLUM = {fill: '#c27aac', line: '#5b2a4e'};
export const HTEAL = {fill: '#55b3a6', line: '#1f5c54'};
export const HGREY = {fill: '#c9c6bf', line: '#6b6760'};
export type HCol = 'P' | 'T' | 'G';
const hc = (c: HCol) => (c === 'P' ? HPLUM : c === 'T' ? HTEAL : HGREY);
/** A diagram panel: a white card with a soft edge. */
export const Panel: React.FC<{x: number; y: number; w: number; h: number; o?: number}> = ({x, y, w, h, o = 1}) => (o > 0.01 ? (
	<g opacity={o}>
		<rect x={x + 3} y={y + 8} width={w} height={h} rx={26} fill="rgba(60,45,20,0.06)" />
		<rect x={x} y={y} width={w} height={h} rx={26} fill="#fffdf8" stroke="rgba(60,45,20,0.14)" strokeWidth={2} />
	</g>
) : null);
/** One chromatid outline from y0 to y1 with a waist at yc. */
const capsule = (x: number, y0: number, y1: number, yc: number, w: number) => {
	const r = w / 2, n = w * 0.3, h = w * 0.55;
	return `M${x - r},${y0 + r} A${r},${r} 0 0 1 ${x + r},${y0 + r} L${x + r},${yc - h} Q${x + n},${yc} ${x + r},${yc + h} L${x + r},${y1 - r} A${r},${r} 0 0 1 ${x - r},${y1 - r} L${x - r},${yc + h} Q${x - n},${yc} ${x - r},${yc - h} Z`;
};
/** Segment colours down one chromatid: [colour, from fraction] pairs, first from 0. */
export type Segs = [HCol, number][];
export type HChromProps = {
	x: number; y: number; len: number; col: HCol;
	/** 0 one chromatid, 1 two sister chromatids side by side */
	dup?: number;
	/** px each chromatid has moved out from the joined position (separated sisters) */
	sep?: number;
	w?: number; cen?: number; bands?: number[]; o?: number; hi?: number; hiA?: number; hiB?: number;
	/** chromatid A (left) and B (right) colour pieces, for crossing over */
	segA?: Segs; segB?: Segs;
	/** letters per band (top to bottom) for chromatid A and B, drawn beside the outer edge */
	lettersA?: string[]; lettersB?: string[]; letterO?: number;
	disc?: number;
};
export const HChrom: React.FC<HChromProps> = p => {
	const {x, y, len, col, dup = 0, sep = 0, cen = 0.42, bands = [], o = 1, hi = 0, disc = 1, letterO = 1} = p;
	const id = 'hc' + useId().replace(/[^a-zA-Z0-9]/g, '');
	if (o <= 0.01) return null;
	const w = p.w ?? Math.max(14, len * 0.15);
	const y0 = y - len * cen, y1 = y0 + len, yc = y;
	const off = (w / 2) * Math.max(0, Math.min(1, dup));
	const xa = x - off - sep, xb = x + off + sep;
	const showB = dup > 0.01;
	const chromatid = (cx: number, segs: Segs, side: 'A' | 'B', glow: number, oo: number) => {
		const d = capsule(cx, y0, y1, yc, w);
		const s = segs.length ? segs : ([[col, 0]] as Segs);
		return (
			<g opacity={oo}>
				{glow > 0.01 ? <path d={d} fill="none" stroke={AMBER} strokeWidth={16} strokeLinejoin="round" opacity={glow * 0.85} /> : null}
				<clipPath id={id + side}><path d={d} /></clipPath>
				<g clipPath={`url(#${id + side})`}>
					{s.map(([c, fr], i) => {
						const top = y0 + len * fr, bot = i + 1 < s.length ? y0 + len * s[i + 1][1] : y1;
						return <rect key={i} x={cx - w} y={top} width={2 * w} height={bot - top + 0.5} fill={hc(c).fill} />;
					})}
					{bands.map((b, i) => <rect key={'b' + i} x={cx - w} y={y0 + len * b - 3.5} width={2 * w} height={7} fill="#2c2a28" opacity={0.78} />)}
					{s.length > 1 ? s.slice(1).map(([, fr], i) => <line key={'j' + i} x1={cx - w} x2={cx + w} y1={y0 + len * fr} y2={y0 + len * fr} stroke="#fffdf8" strokeWidth={2} opacity={0.8} />) : null}
				</g>
				<path d={d} fill="none" stroke={hc(s[0][0]).line} strokeWidth={3.2} strokeLinejoin="round" />
			</g>
		);
	};
	const lt = (cx: number, side: -1 | 1, letters?: string[]) => (letters && letterO > 0.01 ? letters.map((t, i) => (t ? <Letter key={i} x={cx + side * (w / 2 + 24)} y={y0 + len * (bands[i] ?? 0.2)} t={t} r={17} o={letterO} /> : null)) : null);
	const r = w * 0.42 * disc;
	const sepP = Math.max(0, Math.min(1, sep / 10));
	return (
		<g opacity={o}>
			{chromatid(xa, p.segA ?? [], 'A', Math.max(hi, p.hiA ?? 0), 1)}
			{showB ? chromatid(xb, p.segB ?? [], 'B', Math.max(hi, p.hiB ?? 0), Math.min(1, dup * 1.5)) : null}
			{showB ? lt(xa, -1, p.lettersA) : lt(xa, 1, p.lettersA)}
			{showB ? lt(xb, 1, p.lettersB) : null}
			{r > 0.5 ? (showB && sepP < 0.98 ? <circle cx={x} cy={yc} r={r * (1 - sepP) + r * 0.9 * sepP} fill="#fbf0cf" stroke={INK} strokeWidth={2.6} opacity={1 - sepP} /> : null) : null}
			{r > 0.5 && showB && sepP > 0.02 ? <><circle cx={xa} cy={yc} r={r * 0.85} fill="#fbf0cf" stroke={INK} strokeWidth={2.4} opacity={sepP} /><circle cx={xb} cy={yc} r={r * 0.85} fill="#fbf0cf" stroke={INK} strokeWidth={2.4} opacity={sepP} /></> : null}
			{r > 0.5 && !showB ? <circle cx={xa} cy={yc} r={r * 0.85} fill="#fbf0cf" stroke={INK} strokeWidth={2.4} /> : null}
		</g>
	);
};
/** A simple outline cell (HSC exam style): ink outline, cream fill, optional dashed nucleus. */
export const HCell: React.FC<{cx: number; cy: number; rx: number; ry?: number; o?: number; nuc?: number; nucR?: number; dashed?: boolean; sw?: number}> = ({cx, cy, rx, ry, o = 1, nuc = 0, nucR, dashed, sw = 4}) => (o > 0.01 ? (
	<g opacity={o}>
		<ellipse cx={cx} cy={cy} rx={rx} ry={ry ?? rx} fill="#fdf8ec" stroke="#5f5242" strokeWidth={sw} strokeDasharray={dashed ? '14 10' : undefined} />
		{nuc > 0.01 ? <circle cx={cx} cy={cy} r={nucR ?? Math.min(rx, ry ?? rx) * 0.62} fill="#f3ecf4" stroke="#6a5a78" strokeWidth={sw * 0.8} strokeDasharray="12 8" opacity={nuc} /> : null}
	</g>
) : null);
/** An outline cell pinching into two (d = half distance between the two lobes' centres). */
export const HSplit: React.FC<{cx: number; cy: number; rx: number; ry: number; d: number; o?: number; sw?: number}> = ({cx, cy, rx, ry, d, o = 1, sw = 4}) => {
	if (o <= 0.01) return null;
	const e = Math.min(d, rx / 2);
	const rxe = rx - e;
	const rye = ry * (1 - 0.3 * Math.min(1, d / (rx / 2)));
	return (
		<g opacity={o}>
			<ellipse cx={cx - d} cy={cy} rx={rxe} ry={rye} fill="none" stroke="#5f5242" strokeWidth={sw * 2} />
			<ellipse cx={cx + d} cy={cy} rx={rxe} ry={rye} fill="none" stroke="#5f5242" strokeWidth={sw * 2} />
			<ellipse cx={cx - d} cy={cy} rx={rxe} ry={rye} fill="#fdf8ec" />
			<ellipse cx={cx + d} cy={cy} rx={rxe} ry={rye} fill="#fdf8ec" />
		</g>
	);
};
/** Thin spindle fibres from a pole to targets (p 0..1 grown). */
export const HFibres: React.FC<{pole: [number, number]; to: [number, number][]; p?: number; o?: number; color?: string}> = ({pole, to, p = 1, o = 1, color = '#9a8a6a'}) => (o > 0.01 && p > 0.01 ? (
	<g opacity={o}>
		<circle cx={pole[0]} cy={pole[1]} r={7} fill={color} />
		{to.map(([x, y], i) => <line key={i} x1={pole[0]} y1={pole[1]} x2={pole[0] + (x - pole[0]) * p} y2={pole[1] + (y - pole[1]) * p} stroke={color} strokeWidth={2.6} strokeLinecap="round" opacity={0.85} />)}
	</g>
) : null);

// ---------- crossing-over segments on the generic meiosis plates ----------
// The brief 88 meiosis plates after prophase I show each chromosome in one colour. After crossing over, one chromatid of
// each long homologue carries its partner's distal segment. Recolor paints that segment in the partner's colour by
// filtering the painted pixels inside a tight capsule along the arm (fitted: painted pink to painted teal and back).
export const TO_TEAL = 'hue-rotate(175deg) saturate(0.5)';
export const TO_PINK = 'hue-rotate(180deg) saturate(1.5) brightness(1.04)';
export const Recolor: React.FC<{src: string; a: [number, number]; b: [number, number]; w: number; to: 'teal' | 'pink'; o?: number}> = ({src, a, b, w, to, o = 1}) => {
	const id = 'rc' + useId().replace(/[^a-zA-Z0-9]/g, '');
	if (o <= 0.004) return null;
	// stop the capsule half a width short of the painted tip, so its round cap sits inside the rounded end
	const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1;
	const bx = b[0] - (dx / L) * w * 0.45, by = b[1] - (dy / L) * w * 0.45;
	return (
		<g opacity={o}>
			<defs>
				<filter id={id + 'f'} x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation={3} /></filter>
				<mask id={id} maskUnits="userSpaceOnUse" x={0} y={0} width={2000} height={2000}>
					<line x1={a[0]} y1={a[1]} x2={bx} y2={by} stroke="#fff" strokeWidth={w * 0.86} strokeLinecap="round" filter={`url(#${id}f)`} />
				</mask>
			</defs>
			<image href={staticFile(src)} x={0} y={0} width={2000} height={2000} mask={`url(#${id})`} style={{filter: to === 'teal' ? TO_TEAL : TO_PINK}} />
		</g>
	);
};
export type Seg = {a: [number, number]; b: [number, number]; w: number; to: 'teal' | 'pink'};
/** The exchanged segments per plate (native px), fitted on the plates. Pink homologue: its inner (right) chromatid;
 *  teal homologue: its inner (left) chromatid. Line-up 2 is followed from anaphase I on (the plates' arrangement). */
export const RECOMB: Record<string, Seg[]> = {
	'm1-metaphase': [{a: [903, 990], b: [937, 1100], w: 52, to: 'teal'}, {a: [1100, 982], b: [1069, 1100], w: 52, to: 'pink'}],
	'm1-anaphase': [{a: [783, 951], b: [935, 988], w: 48, to: 'teal'}, {a: [1241, 951], b: [1098, 988], w: 48, to: 'pink'}],
	'm1-telophase': [{a: [602, 1101], b: [636, 1213], w: 56, to: 'teal'}, {a: [1302, 1098], b: [1273, 1205], w: 56, to: 'pink'}],
	'pair-metaphase': [{a: [484, 1079], b: [500, 1175], w: 44, to: 'teal'}, {a: [1381, 1079], b: [1358, 1175], w: 44, to: 'pink'}],
	'pair-anaphase': [{a: [700, 891], b: [640, 868], w: 36, to: 'teal'}, {a: [1302, 896], b: [1360, 872], w: 36, to: 'pink'}],
	/** bottom-left cell (A b d) and top-right cell (a B D) */
	'four-cells': [{a: [500, 1555], b: [503, 1640], w: 50, to: 'teal'}, {a: [1462, 595], b: [1462, 680], w: 50, to: 'pink'}],
};
export const Recombs: React.FC<{plate: string; o?: number; only?: number}> = ({plate, o = 1, only}) => (
	<>{RECOMB[plate].map((s, i) => (only === undefined || only === i ? <Recolor key={i} src={CD(plate)} a={s.a} b={s.b} w={s.w} to={s.to} o={o} /> : null))}</>
);

/** Only the travelling pieces of a Morph: crops of plate A move by `move` (0..1) and fade into crops of plate B (fade 0..1). */
export const Pieces: React.FC<{A: string; B: string; move: number; fade: number; pieces: Piece[]; mirrorB?: number}> = ({A, B, move, fade, pieces}) => (
	<>
		{pieces.map((p, i) => {
			const dx = (p.b[0] - p.a[0]) * move, dy = (p.b[1] - p.a[1]) * move;
			return (
				<g key={i}>
					{fade < 0.996 ? <PL src={A} box={p.boxA} dx={dx} dy={dy} o={1 - fade} feather={34} /> : null}
					{fade > 0.004 ? <PL src={B} box={p.boxB} dx={dx - (p.b[0] - p.a[0])} dy={dy - (p.b[1] - p.a[1])} o={fade} feather={34} /> : null}
				</g>
			);
		})}
	</>
);
