import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../bio-m5-b01/shared';

// ---------- B5a coded chromosome kit ----------
// One chromosome picture used everywhere: a bar (chromatid) with a cream centromere disc. A copied
// chromosome is two identical bars of one colour joined at one disc. Counting rule on screen:
// one centromere disc = one chromosome. Set 1 is plum, set 2 is teal. Frame-driven only.

export const PLUM = '#a8508f';
export const TEALC = '#2b9a8e';
export const CREAM = '#fbf0cf';
export const CELL_FILL = '#fbf6e8';
export const CELL_LINE = '#8a7a63';
export const NUC_FILL = 'rgba(226,214,238,0.62)';
export const NUC_LINE = '#5b4d70';

/** The model cell geometry (screen centre and radii) and the kinds of chromosome. */
export const CX = 960, CY = 535, RX = 470, RY = 305, NUC_R = 230;
export type Kind = 'L' | 'M' | 'S';
export const KLEN: Record<Kind, number> = {L: 170, M: 140, S: 112};
export type CDef = {kind: Kind; color: string; name: string};
/** Model cell chromosomes in nucleus order after the pairing scene: long plum, long teal, short plum, short teal. */
export const CH: CDef[] = [
	{kind: 'L', color: PLUM, name: 'LP'}, {kind: 'L', color: TEALC, name: 'LT'},
	{kind: 'S', color: PLUM, name: 'SP'}, {kind: 'S', color: TEALC, name: 'ST'},
];
export const NUC_X = [-175, -105, 105, 175];
/** Metaphase slot (y offset from the cell centre), unpaired order from the top: long teal, short plum, long plum, short teal. */
export const META_Y = [65, -195, -65, 195];
export const ANA_X = 360;
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const clamp01 = (t: number) => Math.max(0, Math.min(1, t));

export type ChromProps = {
	x: number; y: number; kind: Kind; color: string;
	/** 0 one chromatid, 1 two sister chromatids */
	dup?: number;
	/** 0 long thin thread, 1 short thick X */
	coil?: number;
	/** px each chromatid has moved from the joined position (A left, B right) */
	split?: number;
	/** override: 0 joined, 1 separated */
	sep?: number;
	xa?: number; xb?: number; ya?: number; yb?: number;
	/** 0..1 V shape, centromere leading */
	bend?: number;
	da?: -1 | 1; db?: -1 | 1;
	o?: number; s?: number; hiA?: number; hiB?: number; disc?: number;
	/** draw only one chromatid (a separated chromosome) */
	only?: 'A' | 'B';
};

export const chromGeom = (p: ChromProps) => {
	const {kind, dup = 1, coil = 0, split = 0, bend = 0} = p;
	const sep = p.sep ?? Math.min(1, split / 16);
	const len = KLEN[kind] * (1 - 0.38 * coil);
	const wid = 9 + 8 * coil;
	const gap = 7 * (1 - coil) * dup * (1 - sep);
	const T = 19 * coil * dup * (1 - sep) * (len / 105);
	const xa = p.xa ?? -gap - split;
	const xb = p.xb ?? gap + split;
	const ya = p.ya ?? 0, yb = p.yb ?? 0;
	const b = 17 * bend * (len / 105);
	return {sep, len, wid, gap, T, xa, xb, ya, yb, b};
};
/** Screen position of the two centromeres (A is the left chromatid). */
export const cenPts = (p: ChromProps): {a: [number, number]; b: [number, number]} => {
	const g = chromGeom(p);
	return {a: [p.x + g.xa, p.y + g.ya], b: [p.x + g.xb, p.y + g.yb]};
};

export const Chrom: React.FC<ChromProps> = p => {
	const {x, y, color, o = 1, s = 1, hiA = 0, hiB = 0, disc = 1, da = -1, db = 1, dup = 1, coil = 0} = p;
	if (o <= 0.01) return null;
	const g = chromGeom(p);
	const mk = (k: 1 | -1, mx: number, my: number, d: -1 | 1) =>
		`M${(x + mx - k * g.T - d * g.b).toFixed(1)},${(y + my - g.len / 2).toFixed(1)} L${(x + mx).toFixed(1)},${(y + my).toFixed(1)} L${(x + mx + k * g.T - d * g.b).toFixed(1)},${(y + my + g.len / 2).toFixed(1)}`;
	const pa = mk(1, g.xa, g.ya, da);
	const pb = mk(-1, g.xb, g.yb, db);
	const showA = p.only !== 'B';
	const showB = dup > 0.02 && p.only !== 'A';
	const r = (8 + 3 * coil) * disc;
	const joinedDisc = g.sep < 0.5 && dup > 0.5 && !p.only;
	const Disc: React.FC<{cx: number; cy: number; rr: number}> = ({cx, cy, rr}) => <circle cx={cx} cy={cy} r={rr} fill={CREAM} stroke={INK} strokeWidth={3} />;
	return (
		<g opacity={o} transform={s === 1 ? undefined : `translate(${x},${y}) scale(${s}) translate(${-x},${-y})`}>
			{hiA > 0 ? <path d={pa} fill="none" stroke={AMBER} strokeWidth={g.wid + 20} strokeLinecap="round" strokeLinejoin="round" opacity={hiA * 0.85} /> : null}
			{hiB > 0 && showB ? <path d={pb} fill="none" stroke={AMBER} strokeWidth={g.wid + 20} strokeLinecap="round" strokeLinejoin="round" opacity={hiB * 0.85} /> : null}
			{showA ? <path d={pa} fill="none" stroke={INK} strokeWidth={g.wid + 5} strokeLinecap="round" strokeLinejoin="round" /> : null}
			{showA ? <path d={pa} fill="none" stroke={color} strokeWidth={g.wid} strokeLinecap="round" strokeLinejoin="round" /> : null}
			{showB ? (
				<g opacity={clamp01(dup * 1.4)}>
					<path d={pb} fill="none" stroke={INK} strokeWidth={g.wid + 5} strokeLinecap="round" strokeLinejoin="round" />
					<path d={pb} fill="none" stroke={color} strokeWidth={g.wid} strokeLinecap="round" strokeLinejoin="round" />
				</g>
			) : null}
			{joinedDisc ? <Disc cx={x + (g.xa + g.xb) / 2} cy={y + (g.ya + g.yb) / 2} rr={r} /> : (
				<>
					{showA ? <Disc cx={x + g.xa} cy={y + g.ya} rr={r * (p.only || showB ? 0.85 : 1)} /> : null}
					{showB && (dup > 0.5 || p.only) ? <Disc cx={x + g.xb} cy={y + g.yb} rr={r * 0.85} /> : null}
				</>
			)}
		</g>
	);
};

export const ANA_GRID: Record<number, [number, number]> = {1: [-40, -95], 2: [40, -95], 0: [-40, 95], 3: [40, 95]};
/** Offsets of chromatid A (left) and B (right) of chromosome i while they travel to the poles (e 0..1), relative to the chromosome's metaphase spot. */
export const anaOffsets = (i: number, e: number, reach = ANA_X) => {
	const [gx, gy] = ANA_GRID[i];
	const dy = gy - META_Y[i];
	return {xa: lerp(0, -reach + gx, e), ya: lerp(0, dy, e), xb: lerp(0, reach + gx, e), yb: lerp(0, dy, e), sep: Math.min(1, e * 25)};
};

/** Position of chromosome i (offsets from the cell centre) as it lines up: 0 nucleus, 1 metaphase plate. */
export const lineUp = (i: number, t: number): [number, number] => [lerp(NUC_X[i], 0, t), lerp(0, META_Y[i], t)];

// ---------- cell, nucleus, envelope ----------
export const CellBody: React.FC<{cx?: number; cy?: number; rx?: number; ry?: number; o?: number; fill?: string; sw?: number}> = ({cx = CX, cy = CY, rx = RX, ry = RY, o = 1, fill = CELL_FILL, sw = 6}) => (
	<ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={fill} stroke={CELL_LINE} strokeWidth={sw} opacity={o} />
);

/** Two overlapping ovals that pull apart: the union has a waist that pinches shut, then two cells separate. d is the half distance. */
export const SplitCells: React.FC<{cx?: number; cy?: number; rx?: number; ry?: number; d: number; o?: number; sw?: number}> = ({cx = CX, cy = CY, rx = RX, ry = RY, d, o = 1, sw = 6}) => {
	const e = Math.min(d, rx / 2);
	const rxe = rx - e;
	const rye = ry * (1 - 0.42 * clamp01(d / (rx / 2)));
	return (
		<g opacity={o}>
			<ellipse cx={cx - d} cy={cy} rx={rxe} ry={rye} fill="none" stroke={CELL_LINE} strokeWidth={sw * 2} />
			<ellipse cx={cx + d} cy={cy} rx={rxe} ry={rye} fill="none" stroke={CELL_LINE} strokeWidth={sw * 2} />
			<ellipse cx={cx - d} cy={cy} rx={rxe} ry={rye} fill={CELL_FILL} />
			<ellipse cx={cx + d} cy={cy} rx={rxe} ry={rye} fill={CELL_FILL} />
		</g>
	);
};

/** Dashed nuclear envelope. p dissolves it (0 whole, 1 gone). */
export const Envelope: React.FC<{cx?: number; cy?: number; r?: number; p?: number; o?: number; grow?: number}> = ({cx = CX, cy = CY, r = NUC_R, p = 0, o = 1, grow = 1}) => {
	const op = o * (1 - p) * clamp01(grow * 1.2);
	if (op <= 0.01) return null;
	const rr = r * (1 + 0.14 * (1 - grow));
	return (
		<g opacity={op}>
			<circle cx={cx} cy={cy} r={rr} fill={NUC_FILL} opacity={1 - p * 0.5} />
			<circle cx={cx} cy={cy} r={rr} fill="none" stroke={NUC_LINE} strokeWidth={5} strokeDasharray={`${26 * (1 - p) + 3} ${10 + 34 * p}`} strokeLinecap="round" />
		</g>
	);
};

// ---------- spindle ----------
export const Pole: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12);
	if (p <= 0) return null;
	return (
		<g transform={`translate(${x},${y}) scale(${p})`}>
			<circle r={15} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={5} />
			<circle r={6} fill={AMBER_INK} />
		</g>
	);
};
/** A thin fibre from a pole towards a point. p 0..1 is how far it has grown. */
export const Fibre: React.FC<{x1: number; y1: number; x2: number; y2: number; p?: number; o?: number; color?: string; w?: number}> = ({x1, y1, x2, y2, p = 1, o = 1, color = INK_SOFT, w = 3.2}) => {
	if (p <= 0.01) return null;
	return <line x1={x1} y1={y1} x2={lerp(x1, x2, clamp01(p))} y2={lerp(y1, y2, clamp01(p))} stroke={color} strokeWidth={w} strokeLinecap="round" opacity={0.62 * o} />;
};

// ---------- stage strip ----------
export const STAGES = ['1 prophase', '2 metaphase', '3 anaphase', '4 telophase', 'cytokinesis'];
export const StageStrip: React.FC<{at: (number | null)[]; active?: number; x?: number; y?: number; k?: number}> = ({at, active = -1, x = 96, y = 892, k = 1}) => {
	const f = useCurrentFrame();
	return (
		<div style={{position: 'absolute', left: x, top: y, display: 'flex', gap: 14 * k, transformOrigin: '0 0', transform: `scale(${k})`}}>
			{STAGES.map((t, i) => {
				const a = at[i];
				if (a === null || a === undefined) return null;
				const p = prog(f, a, 14);
				const on = i === active;
				return (
					<span key={t} style={{opacity: p, transform: `translateY(${(1 - p) * -30}px) scale(${1 + 0.1 * (1 - p)})`, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: on ? AMBER_INK : INK, background: on ? '#ffe6a8' : '#fffdf8', border: `3px solid ${on ? AMBER_INK : '#c9bda6'}`, borderRadius: 999, padding: '0 24px 4px', whiteSpace: 'nowrap', boxShadow: '0 6px 14px rgba(60,45,20,0.08)'}}>{t}</span>
				);
			})}
		</div>
	);
};

// ---------- pen tapping centromeres ----------
export const Pencil: React.FC<{x: number; y: number; o?: number}> = ({x, y, o = 1}) => (
	<g transform={`translate(${x},${y}) rotate(35)`} opacity={o}>
		<path d="M0,0 L-9,-24 L9,-24 Z" fill="#ecd3a6" stroke={INK} strokeWidth={3} strokeLinejoin="round" />
		<path d="M0,0 L-3,-8 L3,-8 Z" fill={INK} />
		<rect x={-9} y={-96} width={18} height={72} fill="#f2b53d" stroke={INK} strokeWidth={3} />
		<rect x={-9} y={-110} width={18} height={14} rx={4} fill="#e58a7a" stroke={INK} strokeWidth={3} />
	</g>
);
/** A pencil that taps points in turn; each tap leaves a numbered badge. */
export const PenTap: React.FC<{pts: [number, number][]; at: number[]; badge?: [number, number]; color?: string; showPen?: boolean; out?: number}> = ({pts, at, badge = [34, -34], color = AMBER_INK, showPen = true, out}) => {
	const f = useCurrentFrame();
	let idx = -1;
	at.forEach((a, i) => { if (f >= a) idx = i; });
	const penO = (showPen ? 1 : 0) * (out === undefined ? 1 : 1 - prog(f, out, 12)) * prog(f, at[0] - 16, 10);
	let px = pts[0][0], py = pts[0][1];
	if (idx >= 0) {
		const nxt = idx + 1 < pts.length ? idx + 1 : -1;
		px = pts[idx][0]; py = pts[idx][1];
		if (nxt >= 0) {
			const t = prog(f, at[nxt] - 16, 16);
			px = lerp(pts[idx][0], pts[nxt][0], t); py = lerp(pts[idx][1], pts[nxt][1], t);
		}
	} else {
		const t = prog(f, at[0] - 16, 16);
		px = pts[0][0] + 80 * (1 - t); py = pts[0][1] - 60 * (1 - t);
	}
	const dip = idx >= 0 ? Math.max(0, 1 - (f - at[idx]) / 8) * 7 : 0;
	return (
		<g>
			{pts.map((pt, i) => {
				if (i > idx) return null;
				const t = f - at[i];
				const ring = t < 18 ? prog(f, at[i], 18) : 1;
				return (
					<g key={i}>
						{t < 18 ? <circle cx={pt[0]} cy={pt[1]} r={14 + 30 * ring} fill="none" stroke={color} strokeWidth={5} opacity={1 - ring} /> : null}
						<g transform={`translate(${pt[0] + badge[0]},${pt[1] + badge[1]}) scale(${0.6 + 0.4 * prog(f, at[i] + 2, 8)})`} opacity={prog(f, at[i] + 2, 8)}>
							<circle r={22} fill={AMBER} stroke={AMBER_INK} strokeWidth={3} />
							<text y={11} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30}} fill="#fff">{i + 1}</text>
						</g>
					</g>
				);
			})}
			<Pencil x={px} y={py - dip} o={penO} />
		</g>
	);
};

// ---------- misc coded drawing ----------
export const arcPath = (cx: number, cy: number, r: number, a0: number, a1: number) => {
	const rad = (a: number) => ((a - 90) * Math.PI) / 180;
	const p0: [number, number] = [cx + r * Math.cos(rad(a0)), cy + r * Math.sin(rad(a0))];
	const p1: [number, number] = [cx + r * Math.cos(rad(a1)), cy + r * Math.sin(rad(a1))];
	return `M${p0[0].toFixed(1)},${p0[1].toFixed(1)} A${r},${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${p1[0].toFixed(1)},${p1[1].toFixed(1)}`;
};
export const onCircle = (cx: number, cy: number, r: number, a: number): [number, number] => [cx + r * Math.sin((a * Math.PI) / 180), cy - r * Math.cos((a * Math.PI) / 180)];

/** Hand-drawn grey cross (a wrong idea, never red). */
export const GreyCross: React.FC<{x: number; y: number; at: number; s?: number}> = ({x, y, at, s = 1}) => (
	<g>
		<DrawPath d={`M${x - 22 * s},${y - 22 * s} L${x + 22 * s},${y + 22 * s}`} at={at} dur={8} color="#7a8088" width={7} />
		<DrawPath d={`M${x + 22 * s},${y - 22 * s} L${x - 22 * s},${y + 22 * s}`} at={at + 6} dur={8} color="#7a8088" width={7} />
	</g>
);

/** The model cell body with its nucleus, drawn at any scale, for small icons. */
export const MiniCell: React.FC<{cx: number; cy: number; rx: number; ry: number; o?: number; sw?: number}> = ({cx, cy, rx, ry, o = 1, sw = 4}) => (
	<g opacity={o}>
		<CellBody cx={cx} cy={cy} rx={rx} ry={ry} sw={sw} />
	</g>
);

export const Ink = INK;
