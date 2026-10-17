import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, CELL_FILL, CELL_LINE, CREAM, Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PLUM, TEALC, prog, lerp, clamp01,
	ChromPlate, plateOf, PCell, poleDX, RX, NUC_FILL, NUC_LINE,
} from '../bio-m5-b05a/shared';
import type {BPlate} from '../bio-m5-b05a/shared';

// ---------- B5b coded meiosis chromosomes ----------
// Extends the b05a look (ink-outlined bar, cream centromere disc, plum and teal sets) with:
//  - a colour per piece, so a swapped piece keeps its parent's colour after crossing over,
//  - white allele beads that carry a letter (never colour only),
//  - separate control of the two sister chromatids (joined, separated, one only).
// One disc = one chromosome. Frame-driven only.

export type Col = 'P' | 'T';
/** top colour, bottom colour of one chromatid (the long chromosome has a break level between its two genes). */
export type Strand = [Col, Col];
export type MK = 'L' | 'M' | 'S';
export const COL: Record<Col, string> = {P: PLUM, T: TEALC};
/** Overall size of the meiosis chromosomes relative to the b05a bars (readable allele letters). */
export const SZ = 1.25;
export const LEN: Record<MK, number> = {L: 200, M: 160, S: 128};
/** Centromere row: the duplicated plate's painted constriction (was 0.4 on the coded bar). */
export const CEN = 0.468;
export const CUT = 0.62;
export const BW = 12;
export const HALF_GAP = 15;

export const PP: Strand = ['P', 'P'];
export const TT: Strand = ['T', 'T'];
/** The four long chromatids once the model cell has crossed over: AB, Ab (plum chromosome), aB, ab (teal chromosome). */
export const LP_AB: Strand = ['P', 'P'];
export const LP_Ab: Strand = ['P', 'T'];
export const LT_aB: Strand = ['T', 'P'];
export const LT_ab: Strand = ['T', 'T'];

export type MCProps = {
	x: number; y: number; kind: MK;
	a: Strand; b?: Strand;
	/** 0 one chromatid, 1 two sister chromatids */
	dup?: number;
	/** px each chromatid has moved away from the joined position */
	sep?: number;
	s?: number; o?: number;
	/** 0..1 bead opacity (or [upper gene, lower gene]) */
	beads?: number | [number, number];
	hiA?: number; hiB?: number;
	/** lower piece offsets (crossing over animation) */
	pa?: [number, number]; pb?: [number, number];
	disc?: number;
};

export const geomY = (y: number, kind: MK, s: number, frac: number) => y - (LEN[kind] * s * SZ) / 2 + LEN[kind] * s * SZ * frac;
/** Where the centromere disc sits (screen y). */
export const discY = (y: number, kind: MK, s = 1) => geomY(y, kind, s, CEN);
export const letterFor = (kind: MK, level: 'top' | 'bot', c: Col) => (kind === 'L' ? (level === 'top' ? (c === 'P' ? 'A' : 'a') : (c === 'P' ? 'B' : 'b')) : kind === 'S' ? (c === 'P' ? 'D' : 'd') : '');
const beadFrac = (kind: MK, level: 'top' | 'bot') => (kind === 'L' ? (level === 'top' ? 0.17 : 0.83) : kind === 'S' ? 0.76 : -1);

export const Bead: React.FC<{x: number; y: number; r: number; text: string; o?: number}> = ({x, y, r, text, o = 1}) => (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill="#fffdf8" stroke={INK} strokeWidth={Math.max(2, r * 0.2)} />
		<text x={x} y={y + r * 0.38} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: r * 1.15}} fill={INK}>{text}</text>
	</g>
);

// ---------- revision 5 (16 Oct, owner: better drawings): painted plates ----------
// A copied chromosome is the brief 54 duplicated plate (an X) at MC_WK of its natural width (so partners fit side by
// side); before copying, and once sisters separate, each chromatid is the single plate. Colour pieces are clipped
// quadrants: chromatid A is the left half of the X, chromatid B the right half, and the long kind's lower piece (below
// CUT) can come from the other colour's plate, so a swapped piece keeps its parent's colour. Beads sit on the painted
// arms (armX). The centromere disc sits on the painted constriction (CEN). MCCoded keeps the old coded bars.
export const MC_WK = 0.78;
/** Arm centre offset of the duplicated plate (fraction of its height) at height fraction fr (0 top, 1 bottom). */
const ARM: [number, number][] = [[0, 0.132], [0.08, 0.133], [0.17, 0.117], [0.3, 0.09], [0.4, 0.065], [0.468, 0.02], [0.55, 0.066], [0.62, 0.083], [0.7, 0.106], [0.76, 0.12], [0.83, 0.134], [0.9, 0.154], [1, 0.155]];
export const armX = (fr: number) => {
	if (fr <= ARM[0][0]) return ARM[0][1];
	for (let i = 1; i < ARM.length; i++) if (fr <= ARM[i][0]) return ARM[i - 1][1] + ((ARM[i][1] - ARM[i - 1][1]) * (fr - ARM[i - 1][0])) / (ARM[i][0] - ARM[i - 1][0]);
	return ARM[ARM.length - 1][1];
};
const cutN = (p: BPlate) => p.box[1] + p.box[3] * CUT;
/** One quadrant (or half) of the X plate in colour c: side -1 = chromatid A (left), 1 = chromatid B (right). */
const XPart: React.FC<{c: Col; x: number; yc: number; len: number; wk: number; side: -1 | 1; part: 'top' | 'bot' | 'all'; o?: number}> = ({c, x, yc, len, wk, side, part, o = 1}) => {
	const {p, filter} = plateOf(COL[c], true);
	const band: [number, number] | undefined = part === 'top' ? [0, cutN(p)] : part === 'bot' ? [cutN(p), 2000] : undefined;
	return <ChromPlate p={p} cx={x} cy={yc} h={len} wk={wk} clipX={side} band={band} o={o} filter={filter} />;
};
/** One chromatid as the single plate, its lower piece (long kind) in the strand's second colour. */
const SPart: React.FC<{st: Strand; x: number; yc: number; len: number; kind: MK; o?: number}> = ({st, x, yc, len, kind, o = 1}) => {
	if (o <= 0.01) return null;
	const pt = plateOf(COL[st[0]], false);
	if (kind !== 'L' || st[0] === st[1]) return <ChromPlate p={pt.p} cx={x} cy={yc} h={len} wk={MC_WK + 0.12} o={o} filter={pt.filter} />;
	const pb = plateOf(COL[st[1]], false);
	return (
		<g opacity={o}>
			<ChromPlate p={pt.p} cx={x} cy={yc} h={len} wk={MC_WK + 0.12} band={[0, cutN(pt.p)]} filter={pt.filter} />
			<ChromPlate p={pb.p} cx={x} cy={yc} h={len} wk={MC_WK + 0.12} band={[cutN(pb.p), 2000]} filter={pb.filter} />
		</g>
	);
};

export const MC: React.FC<MCProps & {swapT?: number}> = p => {
	const {x, y, kind, a, dup = 1, sep = 0, o = 1, hiA = 0, hiB = 0, disc = 1, swapT = 0} = p;
	const s = (p.s ?? 1) * SZ;
	const bt = Array.isArray(p.beads) ? p.beads[0] : (p.beads ?? 1);
	const bb = Array.isArray(p.beads) ? p.beads[1] : (p.beads ?? 1);
	if (o <= 0.01) return null;
	const b = p.b ?? a;
	const len = LEN[kind] * s;
	const top = y - len / 2;
	const yc = top + len * CEN;
	const bot = top + len;
	const gap = (HALF_GAP * dup + sep) * s;
	const xa = x - gap * (dup > 0.01 ? 1 : 0);
	const xb = x + gap;
	const showB = dup > 0.02;
	const r = 8.5 * s * disc;
	const sepP = clamp01(sep / 14);
	const beadR = 11.5 * s;
	const dupC = clamp01(dup);
	const xwk = MC_WK * (0.42 + 0.58 * dupC);
	const joinW = showB ? dupC * (1 - sepP) : 0;
	const preW = 1 - dupC;
	const splitW = showB ? dupC * sepP : 0;
	const long = kind === 'L';
	// the swapping lower pieces (crossing over): pa / pb move the piece; swapT mirrors it as it lands on the partner
	const moving = (off?: [number, number]) => !!off && (Math.abs(off[0]) > 0.01 || Math.abs(off[1]) > 0.01 || swapT > 0);
	const movA = long && moving(p.pa), movB = long && moving(p.pb);
	const mirror = Math.cos(Math.PI * clamp01(swapT));
	// bead centres: on the painted arms while joined, on the straight chromatid when single or separated
	const fTop = kind === 'L' ? 0.17 : kind === 'S' ? 0.76 : -1;
	const fBot = kind === 'L' ? 0.83 : -1;
	const beadX = (side: -1 | 1, fr: number) => {
		const arm = x + side * armX(fr) * len * xwk;
		const str = side < 0 ? xa : xb;
		if (!showB) return xa;
		return lerp(lerp(x, arm, dupC), str, sepP);
	};
	const glowPath = (side: -1 | 1) => {
		if (joinW > 0.5) return `M${x + side * armX(0.03) * len * xwk},${top + len * 0.03} L${x + side * 3},${yc} L${x + side * armX(0.97) * len * xwk},${bot - len * 0.03}`;
		const cx = side < 0 ? xa : xb;
		return `M${cx},${top + len * 0.03} L${cx},${bot - len * 0.03}`;
	};
	const strandBeads = (side: -1 | 1, st: Strand, off: [number, number] | undefined, mov: boolean, bo: number) => {
		if (kind === 'M' || bo <= 0.01) return null;
		const tx = beadX(side, fTop);
		let lx = fBot >= 0 ? beadX(side, fBot) : 0, ly = top + len * fBot;
		if (mov && off) {
			lx = x + off[0] + side * armX(fBot) * len * xwk * mirror;
			ly += off[1];
		}
		return (
			<g opacity={bo}>
				{fTop >= 0 && bt > 0.02 ? <Bead x={tx} y={top + len * fTop} r={beadR} text={letterFor(kind, 'top', st[0])} o={bt} /> : null}
				{long && bb > 0.02 ? <Bead x={lx} y={ly} r={beadR} text={letterFor(kind, 'bot', st[1])} o={bb} /> : null}
			</g>
		);
	};
	const Disc: React.FC<{cx: number; rr: number}> = ({cx, rr}) => (rr > 0.5 ? <circle cx={cx} cy={yc} r={rr} fill={CREAM} stroke={INK} strokeWidth={3 * Math.max(0.7, s)} /> : null);
	const joinedPieces = () => {
		if (!long) return <><XPart c={a[0]} x={x} yc={yc} len={len} wk={xwk} side={-1} part="all" /><XPart c={b[0]} x={x} yc={yc} len={len} wk={xwk} side={1} part="all" /></>;
		return (
			<>
				<XPart c={a[0]} x={x} yc={yc} len={len} wk={xwk} side={-1} part="top" />
				<XPart c={b[0]} x={x} yc={yc} len={len} wk={xwk} side={1} part="top" />
				{movA && p.pa ? null : <XPart c={a[1]} x={x} yc={yc} len={len} wk={xwk} side={-1} part="bot" />}
				{movB && p.pb ? null : <XPart c={b[1]} x={x} yc={yc} len={len} wk={xwk} side={1} part="bot" />}
			</>
		);
	};
	return (
		<g opacity={o}>
			{hiA > 0 ? <path d={glowPath(-1)} fill="none" stroke={AMBER} strokeWidth={BW * s + 30 * s} strokeLinecap="round" strokeLinejoin="round" opacity={hiA * 0.8} /> : null}
			{hiB > 0 && showB ? <path d={glowPath(1)} fill="none" stroke={AMBER} strokeWidth={BW * s + 30 * s} strokeLinecap="round" strokeLinejoin="round" opacity={hiB * 0.8} /> : null}
			{preW > 0.01 ? <SPart st={a} x={xa} yc={yc} len={len} kind={kind} o={preW} /> : null}
			{joinW > 0.01 ? <g opacity={joinW}>{joinedPieces()}</g> : null}
			{splitW > 0.01 ? <><SPart st={a} x={xa} yc={yc} len={len} kind={kind} o={splitW} /><SPart st={b} x={xb} yc={yc} len={len} kind={kind} o={splitW} /></> : null}
			{/* the travelling pieces, drawn over both chromosomes */}
			{movA && p.pa ? <XPart c={a[1]} x={x + p.pa[0]} yc={yc + p.pa[1]} len={len} wk={xwk * mirror} side={-1} part="bot" /> : null}
			{movB && p.pb ? <XPart c={b[1]} x={x + p.pb[0]} yc={yc + p.pb[1]} len={len} wk={xwk * mirror} side={1} part="bot" /> : null}
			{strandBeads(-1, a, p.pa, movA, 1)}
			{showB ? strandBeads(1, b, p.pb, movB, clamp01(dup * 1.4)) : null}
			{showB && sepP < 0.98 ? <Disc cx={x} rr={r * (1 - sepP)} /> : null}
			{showB ? <><Disc cx={xa} rr={r * 0.9 * sepP} /><Disc cx={xb} rr={r * 0.9 * sepP} /></> : <Disc cx={xa} rr={r} />}
		</g>
	);
};

/** The coded bars (pre-revision 5), kept for reference and as the crossing-over fallback. */
export const MCCoded: React.FC<MCProps> = p => {
	const {x, y, kind, a, dup = 1, sep = 0, o = 1, hiA = 0, hiB = 0, disc = 1} = p;
	const s = (p.s ?? 1) * SZ;
	const bt = Array.isArray(p.beads) ? p.beads[0] : (p.beads ?? 1);
	const bb = Array.isArray(p.beads) ? p.beads[1] : (p.beads ?? 1);
	if (o <= 0.01) return null;
	const b = p.b ?? a;
	const len = LEN[kind] * s;
	const top = y - len / 2;
	const yc = top + len * CEN;
	const cut = kind === 'L' ? top + len * CUT : top + len;
	const bot = top + len;
	const gap = (HALF_GAP * dup + sep) * s;
	const xa = x - gap * (dup > 0.01 ? 1 : 0);
	const xb = x + gap;
	const bw = BW * s;
	const showB = dup > 0.02;
	const r = 8.5 * s * disc;
	const sepP = clamp01(sep / 14);
	const beadR = 11.5 * s;
	const strand = (cx: number, st: Strand, off: [number, number] | undefined, glow: number, bo: number) => {
		const [dx, dy] = off ?? [0, 0];
		const hasBottom = kind === 'L';
		const topEnd = hasBottom ? cut : bot;
		const tp = `M${cx},${top} L${cx},${topEnd}`;
		const bp = `M${cx + dx},${cut + dy} L${cx + dx},${bot + dy}`;
		const ft = beadFrac(kind, 'top'), fb = beadFrac(kind, 'bot');
		return (
			<g opacity={bo}>
				{glow > 0 ? <path d={hasBottom ? tp + ' ' + bp : tp} fill="none" stroke={AMBER} strokeWidth={bw + 22 * s} strokeLinecap="round" opacity={glow * 0.8} /> : null}
				<path d={tp} fill="none" stroke={INK} strokeWidth={bw + 5 * s} strokeLinecap="round" />
				{hasBottom ? <path d={bp} fill="none" stroke={INK} strokeWidth={bw + 5 * s} strokeLinecap="round" /> : null}
				<path d={tp} fill="none" stroke={COL[st[0]]} strokeWidth={bw} strokeLinecap="round" />
				{hasBottom ? <path d={bp} fill="none" stroke={COL[st[1]]} strokeWidth={bw} strokeLinecap="round" /> : null}
				{kind !== 'M' ? (
					<g>
						{ft >= 0 && bt > 0.02 ? <Bead x={cx} y={top + len * ft} r={beadR} text={letterFor(kind, 'top', st[0])} o={bt} /> : null}
						{hasBottom && bb > 0.02 ? <Bead x={cx + dx} y={top + len * fb + dy} r={beadR} text={letterFor(kind, 'bot', st[1])} o={bb} /> : null}
					</g>
				) : null}
			</g>
		);
	};
	const Disc: React.FC<{cx: number; rr: number}> = ({cx, rr}) => (rr > 0.5 ? <circle cx={cx} cy={yc} r={rr} fill={CREAM} stroke={INK} strokeWidth={3 * Math.max(0.7, s)} /> : null);
	return (
		<g opacity={o}>
			{strand(xa, a, p.pa, hiA, 1)}
			{showB ? strand(xb, b, p.pb, hiB, clamp01(dup * 1.4)) : null}
			{showB && sepP < 0.98 ? <Disc cx={x} rr={r * (1 - sepP)} /> : null}
			{showB ? <><Disc cx={xa} rr={r * 0.9 * sepP} /><Disc cx={xb} rr={r * 0.9 * sepP} /></> : <Disc cx={xa} rr={r} />}
		</g>
	);
};

/** Bead centre (screen) for the chromatid A (left) or B (right) of a chromosome. */
export const beadAt = (x: number, y: number, kind: MK, s: number, level: 'top' | 'bot', side: 'A' | 'B', dup = 1, sep = 0): [number, number] => {
	const gap = (HALF_GAP * dup + sep) * s * SZ;
	const str = side === 'A' ? x - (dup > 0.01 ? gap : 0) : x + gap;
	const fr = beadFrac(kind, level);
	const yy = geomY(y, kind, s, fr);
	if (dup <= 0.02) return [str, yy];
	const dupC = clamp01(dup);
	const len = LEN[kind] * s * SZ;
	const arm = x + (side === 'A' ? -1 : 1) * armX(fr) * len * MC_WK * (0.42 + 0.58 * dupC);
	return [lerp(lerp(x, arm, dupC), str, clamp01(sep / 14)), yy];
};

export const DotLink: React.FC<{p1: [number, number]; p2: [number, number]; o?: number; color?: string; w?: number}> = ({p1, p2, o = 1, color = INK_SOFT, w = 3.5}) => {
	if (o <= 0.01) return null;
	return <line x1={p1[0]} y1={p1[1]} x2={p2[0]} y2={p2[1]} stroke={color} strokeWidth={w} strokeDasharray="2 9" strokeLinecap="round" opacity={o} />;
};

// ---------- the board: cell centre local coordinates, scalable ----------
export const BoardG: React.FC<{cx: number; cy: number; k?: number; o?: number; children: React.ReactNode}> = ({cx, cy, k = 1, o = 1, children}) => (
	<g transform={`translate(${cx},${cy}) scale(${k})`} opacity={o}>{children}</g>
);

/** Pair positions: nucleus before pairing (LP, LT, SP, ST), then the paired spot, then the metaphase plate. Offsets from the cell centre. */
export const SCATTER: [number, number][] = [[-190, -40], [-60, 50], [80, -30], [200, 40]];
export const PAIRED: [number, number][] = [[-195, 0], [-70, 0], [100, 0], [200, 0]]; // revision 5: was -180 and 110 (room for the painted X)
/** Metaphase I: o = -1 plum partner on the left, +1 on the right. Long pair on the upper row, short pair on the lower row. */
export const plateXY = (i: number, oLong: number, oShort: number): [number, number] => {
	const long = i < 2;
	const o = long ? oLong : oShort;
	const plum = i === 0 || i === 2;
	return [(plum ? 1 : -1) * 58 * o, long ? -110 : 125]; // revision 5: partners 58 off the line (was 44) for the painted X
};
/** Spindle poles sit on the painted centrosomes of the model cell plate (was 430). */
export const POLE = poleDX(RX);

// ---------- stage strip with divider pills and scrolling ----------
const CHIP_W = 285, DIV_W = 215, CHIP_GAP = 14;
export const M_CHIPS = ['1 prophase I', '2 metaphase I', '3 anaphase I', '4 telophase I', '5 prophase II', '6 metaphase II', '7 anaphase II', '8 telophase II'];
export const MStrip: React.FC<{at: (number | null)[]; active?: number; scroll?: number; x?: number; y?: number; w?: number; note?: number}> = ({at, active = -1, scroll = 0, x = 96, y = 892, w = 1728, note}) => {
	const f = useCurrentFrame();
	const items: {key: string; text: string; at: number | null; chip: number; left: number; w: number}[] = [];
	let left = 0;
	[0, 1].forEach(g => {
		items.push({key: 'd' + g, text: g === 0 ? 'meiosis I' : 'meiosis II', at: at[g * 4], chip: -1, left, w: DIV_W});
		left += DIV_W + CHIP_GAP;
		for (let k = 0; k < 4; k++) {
			items.push({key: 'c' + (g * 4 + k), text: M_CHIPS[g * 4 + k], at: at[g * 4 + k], chip: g * 4 + k, left, w: CHIP_W});
			left += CHIP_W + CHIP_GAP;
		}
	});
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, height: 70, overflow: 'hidden'}}>
			<div style={{position: 'absolute', left: -scroll, top: 0}}>
				{items.map(it => {
					if (it.at === null || it.at === undefined) return null;
					const pp = prog(f, it.at, 14);
					const on = it.chip === active;
					const div = it.chip < 0;
					return (
						<span key={it.key} style={{position: 'absolute', left: it.left, top: 0, width: it.w, textAlign: 'center', boxSizing: 'border-box', opacity: pp, transform: `translateY(${(1 - pp) * -30}px)`, fontFamily: FONT_HAND, fontWeight: 700, fontSize: div ? 40 : 38, color: div ? '#fff' : on ? AMBER_INK : INK, background: div ? AMBER_INK : on ? '#ffe6a8' : '#fffdf8', border: `3px solid ${div ? AMBER_INK : on ? AMBER_INK : '#c9bda6'}`, borderRadius: 999, padding: '0 14px 4px', whiteSpace: 'nowrap', boxShadow: '0 6px 14px rgba(60,45,20,0.08)'}}>{it.text}</span>
					);
				})}
			</div>
			{note !== undefined ? <span style={{position: 'absolute', left: 1330, top: 12, fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 26, color: INK_SOFT, opacity: prog(f, note, 14)}}>same four stage names as mitosis</span> : null}
		</div>
	);
};
export const STRIP_SCROLL = DIV_W + CHIP_GAP + 4 * (CHIP_W + CHIP_GAP);

// ---------- small cells ----------
export const Cell: React.FC<{cx: number; cy: number; rx: number; ry?: number; o?: number; nuc?: number; sw?: number; spindle?: number}> = ({cx, cy, rx, ry, o = 1, nuc = 0, sw = 5, spindle = 0}) => (
	<g opacity={o}>
		<PCell cx={cx} cy={cy} rx={rx} ry={ry ?? rx} spindle={spindle} />
		{nuc > 0 ? <circle cx={cx} cy={cy} r={Math.min(rx, ry ?? rx) * 0.55} fill={NUC_FILL} stroke={NUC_LINE} strokeWidth={sw * 0.8} strokeDasharray="14 7" opacity={nuc} /> : null}
	</g>
);
/** The old coded cell outline. */
export const CellCoded: React.FC<{cx: number; cy: number; rx: number; ry?: number; o?: number; sw?: number}> = ({cx, cy, rx, ry, o = 1, sw = 5}) => (
	<ellipse cx={cx} cy={cy} rx={rx} ry={ry ?? rx} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={sw} opacity={o} />
);

/** Little bar standing for a whole chromosome in cell sets of 23 (no allele beads). */
export const MiniBar: React.FC<{x: number; y: number; h?: number; col: Col; o?: number; w?: number}> = ({x, y, h = 40, col, o = 1, w = 10}) => {
	if (o <= 0.01) return null;
	// the painted single chromosome, centred where the coded bar was
	const {p, filter} = plateOf(COL[col], false);
	const hh = h * 1.12;
	const wk = Math.min(1.6, Math.max(0.9, (w * 1.2) / (0.17 * hh)));
	return <g opacity={o}><ChromPlate p={p} cx={x} cy={y - hh / 2 + hh * p.cen} h={hh} wk={wk} filter={filter} /></g>;
};

/** A big number that pops when it lands. */
export const Num: React.FC<{at: number; x: number; y: number; text: string; color?: string; size?: number; out?: number; w?: number}> = ({at, x, y, text, color = INK, size = 96, out, w = 300}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	const o = p * (out === undefined ? 1 : 1 - prog(f, out, 10));
	return <div style={{position: 'absolute', left: x - w / 2, top: y, width: w, textAlign: 'center', opacity: o, transform: `scale(${1 + 0.35 * (1 - p)})`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color, lineHeight: 1}}>{text}</div>;
};

export const Cen: React.FC<{at: number; out?: number; x: number; y: number; w?: number; size?: number; color?: string; hand?: boolean; weight?: number; children: React.ReactNode}> = ({at, out, x, y, w = 300, size = 46, color = INK, hand = true, weight = 700, children}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x - w / 2, top: y, width: w, textAlign: 'center'}}>
		<div style={{fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: weight, fontSize: size, color, lineHeight: 1.05}}>{children}</div>
	</Enter>
);

/** Coin that flips (frame driven) between a plum and a teal face. */
export const Coin: React.FC<{x: number; y: number; r?: number; from: number; to: number; face: Col; o?: number}> = ({x, y, r = 24, from, to, face, o = 1}) => {
	const f = useCurrentFrame();
	const t = clamp01((f - from) / Math.max(1, to - from));
	const turns = 2.5;
	const ang = t * turns * Math.PI * 2;
	const sy = Math.abs(Math.cos(ang));
	const showing: Col = t >= 1 ? face : (Math.floor((ang + Math.PI / 2) / Math.PI) % 2 === 0 ? face : (face === 'P' ? 'T' : 'P'));
	const lift = Math.sin(t * Math.PI) * 26;
	const op = o * clamp01((f - from + 8) / 8);
	return (
		<g opacity={op} transform={`translate(${x},${y - lift})`}>
			<ellipse rx={r} ry={Math.max(2, r * sy)} fill={COL[showing]} stroke={INK} strokeWidth={3.5} />
		</g>
	);
};

export const WRONG = '#7a8088';
export {lerp};
