// Induction kit for Module 6 (additive kit file, 25 November 2026; first used by phys-y12-m6-v10 to v12, offered to
// the rest of Module 6: generators, transformers, eddy currents). Course-neutral: every label, number and colour of
// meaning is passed in by the lesson. Painted plates come from bench.tsx (placed by their visible box, uniform scale);
// everything here that is not a plate is a coded diagram part (field lines, turns of a cutaway coil, curled current
// arrows, the end-on view, energy bars, circuit symbols, the top view of a rod on rails, the closed-core schematic).
//
// Coil plate axes (read from the plates on a 50 px grid, 25 November 2026; the painted tube is drawn in perspective,
// so its axis rises about 6.4 degrees to the right):
//   close-wound coil (1774 x 887): left mouth centre (257, 465), half height 125; right mouth centre (1455, 330);
//   spread coil (1774 x 887): left mouth centre (165, 460), half height 110; right mouth centre (1560, 300);
//   terminals: close (601, 710) and (1631, 615) (bench.tsx); spread (380, 700) and (1680, 525).
import React from 'react';
import {staticFile} from 'remotion';
import {FONT_DISPLAY} from '../../kit';
import {CARD, INK} from '../../shared/tokens';
import {barLines} from '../../sims/magnetic-field';
import type {MagnetSource} from '../../sims/magnetic-field';
import {BARMAG, COIL, placeOf} from './bench';
import type {Place} from './bench';

type Pt = [number, number];
const rad = (d: number) => (d * Math.PI) / 180;
const svgText = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color, paintOrder: 'stroke', stroke: CARD, strokeWidth: 7, strokeLinejoin: 'round'} as React.CSSProperties);

// ---------------------------------------------------------------- coil plates and their axes
export const COIL_SPREAD = {src: 'assets/physics/phys-y11-solenoid-coil-spread-v1.png', W: 1774, H: 887, box: [118, 189, 1712, 733] as const};
const AXES = {
	close: {l: [257, 465] as Pt, r: [1455, 330] as Pt, hr: 125, a: [601, 710] as Pt, b: [1631, 615] as Pt},
	spread: {l: [165, 460] as Pt, r: [1560, 300] as Pt, hr: 110, a: [380, 700] as Pt, b: [1680, 525] as Pt},
};
export type CoilKind = keyof typeof AXES;
/** Screen geometry of a coil plate: its two mouth centres, the bore half-height, the axis angle and the terminals. */
export const coilAxis = (p: Place, kind: CoilKind = 'close') => {
	const spec = kind === 'close' ? COIL : COIL_SPREAD;
	const g = placeOf(spec, p), ax = AXES[kind];
	const left = g.at(...ax.l), right = g.at(...ax.r);
	const deg = (Math.atan2(right[1] - left[1], right[0] - left[0]) * 180) / Math.PI;
	const len = Math.hypot(right[0] - left[0], right[1] - left[1]);
	/** A point on the axis, `u` px from the left mouth (negative: outside, to the left). */
	const along = (u: number): Pt => [left[0] + (u * (right[0] - left[0])) / len, left[1] + (u * (right[1] - left[1])) / len];
	return {s: g.s, left, right, deg, len, r: ax.hr * g.s, along, a: g.at(...ax.a), b: g.at(...ax.b)};
};
/** A coil plate (close-wound or spread), uniform scale, by its visible box. */
export const CoilPlate: React.FC<{p: Place; kind?: CoilKind; opacity?: number}> = ({p, kind = 'close', opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const spec = kind === 'close' ? COIL : COIL_SPREAD;
	const g = placeOf(spec, p);
	return <image href={staticFile(spec.src)} x={g.ix} y={g.iy} width={spec.W * g.s} height={spec.H * g.s} opacity={opacity} />;
};

// ---------------------------------------------------------------- the bar magnet on an axis
/**
 * The painted bar magnet centred at (cx, cy), visible length `w`, turned `deg` (screen degrees, clockwise positive).
 * `northRight` puts the red (north) end on the right. Coded "N" and "S" sit on the two halves.
 */
export const MagnetAt: React.FC<{cx: number; cy: number; w: number; deg?: number; northRight?: boolean; letters?: boolean; opacity?: number; letterSize?: number}> = ({cx, cy, w, deg = 0, northRight = true, letters = true, opacity = 1, letterSize = 34}) => {
	if (opacity <= 0.001) return null;
	const s = w / (BARMAG.box[2] - BARMAG.box[0]);
	const h = (BARMAG.box[3] - BARMAG.box[1]) * s;
	const x0 = cx - w / 2, y0 = cy - h / 2;
	const ix = x0 - BARMAG.box[0] * s, iy = y0 - BARMAG.box[1] * s;
	const img = <image href={staticFile(BARMAG.src)} x={ix} y={iy} width={BARMAG.W * s} height={BARMAG.H * s} />;
	const nX = cx + (northRight ? 1 : -1) * w * 0.3, sX = cx - (northRight ? 1 : -1) * w * 0.3;
	const ls: React.CSSProperties = {fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: letterSize, fill: CARD};
	return (
		<g opacity={opacity} transform={deg ? `rotate(${deg} ${cx} ${cy})` : undefined}>
			{northRight ? <g transform={`translate(${2 * cx} 0) scale(-1 1)`}>{img}</g> : img}
			{letters ? <><text x={nX} y={cy + letterSize * 0.36} textAnchor="middle" style={ls}>N</text><text x={sX} y={cy + letterSize * 0.36} textAnchor="middle" style={ls}>S</text></> : null}
		</g>
	);
};
/** Height of the magnet plate drawn at visible length w. */
export const magnetH = (w: number) => ((BARMAG.box[3] - BARMAG.box[1]) * w) / (BARMAG.box[2] - BARMAG.box[0]);

// ---------------------------------------------------------------- a bar magnet's field lines (traced once)
const lineCache = new Map<string, Pt[][]>();
/**
 * Field lines of a bar magnet of length L px (north end to the right, centred at the origin), traced with the
 * magnetic-field sim, in px relative to the magnet's centre. Cached, so a moving magnet is a translation.
 */
export const magnetLines = (L: number, count = 9, width = L / 5, reach = 3.2): Pt[][] => {
	const key = `${L}|${count}|${width}|${reach}`;
	const hit = lineCache.get(key);
	if (hit) return hit;
	const bar: Extract<MagnetSource, {kind: 'bar'}> = {kind: 'bar', x: 0, y: 0, length: L, width, strength: 1};
	const lines = barLines([bar], bar, count, {bounds: {x0: -reach * L, x1: reach * L, y0: -reach * L * 0.7, y1: reach * L * 0.7}, step: L / 60, maxSteps: 900});
	const out = lines.map(l => l.points.map(([x, y]) => [x, y] as Pt));
	lineCache.set(key, out);
	return out;
};
/** Does a traced line (shifted by dx) cross the plane x = px within |y| <= r? */
export const crossesPlane = (pts: readonly Pt[], dx: number, px: number, r: number) => {
	for (let i = 1; i < pts.length; i++) {
		const xa = pts[i - 1][0] + dx, xb = pts[i][0] + dx;
		if ((xa - px) * (xb - px) <= 0 && xa !== xb) {
			const t = (px - xa) / (xb - xa), y = pts[i - 1][1] + t * (pts[i][1] - pts[i - 1][1]);
			if (Math.abs(y) <= r) return true;
		}
	}
	return false;
};
/** Draw traced lines at (x, y), with a lit colour for those crossing the plane x = planeX within r. */
export const MagnetField: React.FC<{lines: readonly Pt[][]; x: number; y: number; color: string; lit?: {planeX: number; r: number; color: string}; width?: number; opacity?: number; heads?: boolean}> = ({lines, x, y, color, lit, width = 3.5, opacity = 1, heads = true}) => {
	if (opacity <= 0.001) return null;
	return (
		<g opacity={opacity}>
			{lines.map((l, i) => {
				const on = lit ? crossesPlane(l, x, lit.planeX, lit.r) : false;
				const c = on ? lit!.color : color;
				const d = l.map((p, k) => `${k ? 'L' : 'M'}${(p[0] + x).toFixed(1)},${(p[1] + y).toFixed(1)}`).join(' ');
				const m = Math.floor(l.length * 0.5), a = l[Math.max(0, m - 2)], b = l[Math.min(l.length - 1, m + 2)];
				const ang = Math.atan2(b[1] - a[1], b[0] - a[0]), hx = l[m][0] + x, hy = l[m][1] + y, hs = 11;
				return (
					<g key={i}>
						<path d={d} fill="none" stroke={c} strokeWidth={on ? width + 1.5 : width} strokeLinecap="round" />
						{heads && l.length > 6 ? <path d={`M${hx + hs * Math.cos(ang)},${hy + hs * Math.sin(ang)} L${hx + hs * Math.cos(ang + 2.5)},${hy + hs * Math.sin(ang + 2.5)} L${hx + hs * Math.cos(ang - 2.5)},${hy + hs * Math.sin(ang - 2.5)} Z`} fill={c} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------------------------------------------------------------- a cutaway coil (coded turns)
/**
 * The turns of a coil seen from the front and a little to the left, as ink ellipses along a horizontal axis.
 * Draw `half="back"` first, then anything that threads the coil, then `half="front"` on top. `glow` lists turns
 * to highlight (index from the left).
 */
export const CoilTurns: React.FC<{x1: number; x2: number; cy: number; r: number; n: number; half: 'back' | 'front'; color?: string; width?: number; glow?: readonly number[]; glowColor?: string; opacity?: number}> = ({x1, x2, cy, r, n, half, color = '#b8642a', width = 7, glow = [], glowColor = '#c04a7a', opacity = 1}) => {
	const rx = r * 0.26;
	return (
		<g opacity={opacity}>
			{Array.from({length: n}, (_, i) => {
				const x = n === 1 ? (x1 + x2) / 2 : x1 + ((x2 - x1) * i) / (n - 1);
				const on = glow.includes(i);
				// front: the left half of the ellipse (towards the viewer); back: the right half, thinner and paler.
				const d = half === 'front' ? `M${x},${cy - r} A${rx},${r} 0 0 0 ${x},${cy + r}` : `M${x},${cy - r} A${rx},${r} 0 0 1 ${x},${cy + r}`;
				return <path key={i} d={d} fill="none" stroke={on ? glowColor : color} strokeWidth={half === 'front' ? (on ? width + 4 : width) : width * 0.6} strokeOpacity={half === 'front' ? 1 : 0.55} strokeLinecap="round" />;
			})}
		</g>
	);
};
/** x of turn i of a cutaway coil. */
export const turnX = (x1: number, x2: number, n: number, i: number) => (n === 1 ? (x1 + x2) / 2 : x1 + ((x2 - x1) * i) / (n - 1));

// ---------------------------------------------------------------- moving charges along a path
/** Dots moving along a polyline: `phase` in px (grows with time), one every `gap` px. */
export const FlowDots: React.FC<{pts: readonly Pt[]; phase: number; gap?: number; r?: number; color: string; opacity?: number}> = ({pts, phase, gap = 46, r = 7, color, opacity = 1}) => {
	if (opacity <= 0.001 || pts.length < 2) return null;
	const seg: number[] = [];
	let total = 0;
	for (let i = 1; i < pts.length; i++) { const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); seg.push(l); total += l; }
	const out: Pt[] = [];
	const start = ((phase % gap) + gap) % gap;
	for (let s = start; s < total; s += gap) {
		let k = 0, acc = 0;
		while (k < seg.length - 1 && acc + seg[k] < s) { acc += seg[k]; k++; }
		const t = seg[k] ? (s - acc) / seg[k] : 0;
		out.push([pts[k][0] + t * (pts[k + 1][0] - pts[k][0]), pts[k][1] + t * (pts[k + 1][1] - pts[k][1])]);
	}
	return <g opacity={opacity}>{out.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r={r} fill={color} stroke={CARD} strokeWidth={2} />)}</g>;
};

// ---------------------------------------------------------------- curled current arrows and the end-on view
/**
 * A curled arrow round a coil end seen from the front: an ellipse (rx, ry) about (cx, cy). The front half is solid
 * with a head; the back half dashed. `up` true: the front half runs up the screen (anticlockwise seen from the left
 * for a coil whose near side is drawn on the left).
 */
export const CurlArrow: React.FC<{cx: number; cy: number; rx: number; ry: number; up: boolean; color: string; width?: number; opacity?: number; deg?: number}> = ({cx, cy, rx, ry, up, color, width = 7, opacity = 1, deg = 0}) => {
	if (opacity <= 0.001) return null;
	const top: Pt = [cx, cy - ry], bot: Pt = [cx, cy + ry];
	const [a, b] = up ? [bot, top] : [top, bot];
	const sweep = up ? 1 : 0;
	const tip = b, dir = up ? -1 : 1;
	const head = `M${tip[0] + 6},${tip[1]} L${tip[0] - 16},${tip[1] - dir * 4} L${tip[0] - 2},${tip[1] + dir * 18} Z`;
	return (
		<g opacity={opacity} transform={deg ? `rotate(${deg} ${cx} ${cy})` : undefined}>
			<path d={`M${top[0]},${top[1]} A${rx},${ry} 0 0 1 ${bot[0]},${bot[1]}`} fill="none" stroke={color} strokeWidth={width * 0.6} strokeDasharray="10 9" strokeLinecap="round" />
			<path d={`M${a[0]},${a[1]} A${rx},${ry} 0 0 ${sweep} ${b[0]},${b[1]}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" />
			<path d={head} fill={color} transform={`rotate(${up ? 12 : -12} ${tip[0]} ${tip[1]})`} />
		</g>
	);
};
/**
 * A loop seen end on (a circle) with a curved current arrow round it, clockwise or anticlockwise, and the field
 * through its centre as a dot (towards the viewer) or a cross (away). Labels come from the lesson.
 */
export const EndOnLoop: React.FC<{cx: number; cy: number; r: number; sense: 'cw' | 'acw' | 'none'; centre?: 'dot' | 'cross' | 'none'; color: string; ring?: string; width?: number; opacity?: number}> = ({cx, cy, r, sense, centre = 'none', color, ring = '#b8642a', width = 7, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const R = r + 22, a0 = -150, a1 = 150;
	const P = (d: number): Pt => [cx + R * Math.cos(rad(d)), cy + R * Math.sin(rad(d))];
	// screen angles: clockwise increases the angle (y down). The arc runs a0 -> a1 for clockwise, reversed for anticlockwise.
	const [s, e] = sense === 'cw' ? [a0, a1] : [a1, a0];
	const ps = P(s), pe = P(e);
	const tang = sense === 'cw' ? rad(e + 90) : rad(e - 90);
	const hs = 22;
	return (
		<g opacity={opacity}>
			<circle cx={cx} cy={cy} r={r} fill="none" stroke={ring} strokeWidth={10} />
			{sense !== 'none' ? <>
				<path d={`M${ps[0]},${ps[1]} A${R},${R} 0 1 ${sense === 'cw' ? 1 : 0} ${pe[0]},${pe[1]}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" />
				<path d={`M${pe[0] + hs * Math.cos(tang)},${pe[1] + hs * Math.sin(tang)} L${pe[0] + 0.6 * hs * Math.cos(tang + 2.2)},${pe[1] + 0.6 * hs * Math.sin(tang + 2.2)} L${pe[0] + 0.6 * hs * Math.cos(tang - 2.2)},${pe[1] + 0.6 * hs * Math.sin(tang - 2.2)} Z`} fill={color} />
			</> : null}
			{centre === 'dot' ? <><circle cx={cx} cy={cy} r={16} fill="none" stroke={color} strokeWidth={4} /><circle cx={cx} cy={cy} r={6} fill={color} /></> : null}
			{centre === 'cross' ? <><circle cx={cx} cy={cy} r={16} fill="none" stroke={color} strokeWidth={4} /><path d={`M${cx - 9},${cy - 9} L${cx + 9},${cy + 9} M${cx + 9},${cy - 9} L${cx - 9},${cy + 9}`} stroke={color} strokeWidth={4} strokeLinecap="round" /></> : null}
		</g>
	);
};
/** The grip rule as a coded axis (no hand): a straight thumb arrow with a curled arrow round it. */
export const GripAxis: React.FC<{x: number; y: number; len: number; dir: 1 | -1; color: string; opacity?: number}> = ({x, y, len, dir, color, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const x1 = x - (dir * len) / 2, x2 = x + (dir * len) / 2;
	return (
		<g opacity={opacity}>
			<line x1={x1} y1={y} x2={x2 - dir * 16} y2={y} stroke={color} strokeWidth={8} strokeLinecap="round" />
			<path d={`M${x2 + dir * 8},${y} L${x2 - dir * 18},${y - 14} L${x2 - dir * 18},${y + 14} Z`} fill={color} />
			{/* the curl: front half runs up the screen when the thumb points left (anticlockwise seen from the left) */}
			<CurlArrow cx={x} cy={y} rx={30} ry={58} up={dir === -1} color={color} width={6} />
		</g>
	);
};

// ---------------------------------------------------------------- bars, symbols, cells
/** A vertical bar from a base line, filled to `frac` of `h`, with a label under it and an optional value above. */
export const Bar: React.FC<{x: number; base: number; w: number; h: number; frac: number; color: string; soft?: string; label?: string; value?: string; size?: number; opacity?: number; outline?: boolean}> = ({x, base, w, h, frac, color, soft = '#f3ece0', label, value, size = 30, opacity = 1, outline = true}) => {
	if (opacity <= 0.001) return null;
	const f = Math.max(-1, Math.min(1.2, frac));
	const top = f >= 0 ? base - h * f : base, hh = Math.abs(h * f);
	return (
		<g opacity={opacity}>
			{outline ? <rect x={x} y={base - h} width={w} height={h} fill={soft} stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} rx={6} /> : null}
			<rect x={x} y={top} width={w} height={hh} fill={color} rx={4} />
			{label ? <text x={x + w / 2} y={base + size + 10} textAnchor="middle" style={svgText(size, INK, 700)}>{label}</text> : null}
			{value ? <text x={x + w / 2} y={(f >= 0 ? top : top + hh + size) - 12 + (f >= 0 ? 0 : 12)} textAnchor="middle" style={svgText(size, color)}>{value}</text> : null}
		</g>
	);
};
/** A circuit-symbol meter (a circle with a letter), exam style. */
export const MeterSymbol: React.FC<{x: number; y: number; r?: number; letter?: string; opacity?: number}> = ({x, y, r = 30, letter = 'G', opacity = 1}) => (
	<g opacity={opacity}>
		<circle cx={x} cy={y} r={r} fill={CARD} stroke={INK} strokeWidth={4} />
		<text x={x} y={y + r * 0.4} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: r * 1.1, fill: INK}}>{letter}</text>
	</g>
);
/** A resistor symbol (box) centred at (x, y), horizontal or vertical. */
export const ResistorSymbol: React.FC<{x: number; y: number; vertical?: boolean; len?: number; opacity?: number}> = ({x, y, vertical = false, len = 70, opacity = 1}) => (
	<rect x={vertical ? x - 14 : x - len / 2} y={vertical ? y - len / 2 : y - 14} width={vertical ? 28 : len} height={vertical ? len : 28} fill={CARD} stroke={INK} strokeWidth={4} opacity={opacity} />
);
/** A row of n cells in series (long and short plates), left to right from (x, y). */
export const CellsRow: React.FC<{x: number; y: number; n: number; gap?: number; color?: string; opacity?: number; lit?: number}> = ({x, y, n, gap = 70, color = INK, opacity = 1, lit = n}) => (
	<g opacity={opacity}>
		<line x1={x - 30} y1={y} x2={x + n * gap} y2={y} stroke={color} strokeWidth={4} />
		{Array.from({length: n}, (_, i) => {
			const cx = x + i * gap + gap / 2;
			return (
				<g key={i} opacity={i < lit ? 1 : 0.25}>
					<rect x={cx - 12} y={y - 34} width={24} height={68} fill={CARD} />
					<line x1={cx - 8} y1={y - 32} x2={cx - 8} y2={y + 32} stroke={color} strokeWidth={5} />
					<line x1={cx + 8} y1={y - 18} x2={cx + 8} y2={y + 18} stroke={color} strokeWidth={9} />
				</g>
			);
		})}
	</g>
);
/** An AC source symbol (a circle with a sine wave). */
export const ACSymbol: React.FC<{x: number; y: number; r?: number; opacity?: number}> = ({x, y, r = 34, opacity = 1}) => (
	<g opacity={opacity}>
		<circle cx={x} cy={y} r={r} fill={CARD} stroke={INK} strokeWidth={4} />
		<path d={`M${x - r * 0.6},${y} C${x - r * 0.3},${y - r * 0.7} ${x - r * 0.05},${y - r * 0.7} ${x},${y} S${x + r * 0.3},${y + r * 0.7} ${x + r * 0.6},${y}`} fill="none" stroke={INK} strokeWidth={4} />
	</g>
);
/** A lamp symbol (a circle with a cross). */
export const LampSymbol: React.FC<{x: number; y: number; r?: number; opacity?: number}> = ({x, y, r = 30, opacity = 1}) => {
	const d = r * 0.7;
	return (
		<g opacity={opacity}>
			<circle cx={x} cy={y} r={r} fill={CARD} stroke={INK} strokeWidth={4} />
			<path d={`M${x - d},${y - d} L${x + d},${y + d} M${x + d},${y - d} L${x - d},${y + d}`} stroke={INK} strokeWidth={4} />
		</g>
	);
};
/** A switch symbol between (x1, y) and (x2, y), open by `open` (0 closed, 1 open). */
export const SwitchSymbol: React.FC<{x1: number; x2: number; y: number; open?: number; opacity?: number}> = ({x1, x2, y, open = 1, opacity = 1}) => {
	const a = rad(-28 * open), L = x2 - x1;
	return (
		<g opacity={opacity}>
			<circle cx={x1} cy={y} r={6} fill={INK} /><circle cx={x2} cy={y} r={6} fill={INK} />
			<line x1={x1} y1={y} x2={x1 + L * Math.cos(a)} y2={y + L * Math.sin(a)} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		</g>
	);
};
/** A battery symbol (long and short plate) centred at (x, y), horizontal leads. */
export const BatterySymbol: React.FC<{x: number; y: number; opacity?: number}> = ({x, y, opacity = 1}) => (
	<g opacity={opacity}>
		<rect x={x - 14} y={y - 34} width={28} height={68} fill={CARD} />
		<line x1={x - 8} y1={y - 32} x2={x - 8} y2={y + 32} stroke={INK} strokeWidth={5} />
		<line x1={x + 8} y1={y - 18} x2={x + 8} y2={y + 18} stroke={INK} strokeWidth={9} />
	</g>
);

// ---------------------------------------------------------------- the closed-core schematic (exam style)
/**
 * A square soft-iron core (grey) centred at (cx, cy), outer size `s`, limb width `t`, with a primary winding of
 * `np` drawn turns on the left limb and a secondary of `ns` on the right. Flux chevrons circulate round the core
 * (clockwise) with `phase` px. Wiring and source symbols are left to the lesson; `ends` returns the winding ends.
 */
export const coreGeom = (cx: number, cy: number, s: number, t: number) => {
	const o = s / 2, i = o - t, m = (o + i) / 2;
	return {o, i, m, lx: cx - m, rx: cx + m, top: cy - o, bot: cy + o, ends: {pTop: [cx - o - 46, cy - i + 30] as Pt, pBot: [cx - o - 46, cy + i - 30] as Pt, sTop: [cx + o + 46, cy - i + 30] as Pt, sBot: [cx + o + 46, cy + i - 30] as Pt}};
};
export const ClosedCore: React.FC<{cx: number; cy: number; s: number; t: number; np: number; ns: number; phase?: number; flux?: number; flowColor?: string; windColor?: string; pulseP?: number; pulseS?: number; opacity?: number}> = ({cx, cy, s, t, np, ns, phase = 0, flux = 1, flowColor = '#55606b', windColor = '#b8642a', pulseP = 0, pulseS = 0, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const g = coreGeom(cx, cy, s, t);
	const span = 2 * g.i - 60;
	const wind = (x: number, n: number, side: -1 | 1, pulse: number) => Array.from({length: n}, (_, k) => {
		const y = cy - span / 2 + (n === 1 ? span / 2 : (span * k) / (n - 1));
		return <path key={k} d={`M${x - t / 2 - 10},${y + 8} Q${x},${y - 14} ${x + t / 2 + 10},${y + 8}`} fill="none" stroke={windColor} strokeWidth={7 + 4 * pulse} strokeLinecap="round" />;
	});
	// chevrons along the core centre line (a square of half-side m), clockwise
	const per = 8 * g.m, gap = per / 12;
	const chev = Array.from({length: 12}, (_, k) => {
		const u = (((k * gap + phase) % per) + per) % per;
		const side = Math.floor(u / (2 * g.m)), w = u - side * 2 * g.m;
		const pts: [Pt, number][] = [[[cx - g.m + w, cy - g.m], 0], [[cx + g.m, cy - g.m + w], 90], [[cx + g.m - w, cy + g.m], 180], [[cx - g.m, cy + g.m - w], 270]];
		const [[px, py], ang] = pts[side];
		return <path key={k} d="M-12,-14 L10,0 L-12,14" transform={`translate(${px} ${py}) rotate(${ang})`} fill="none" stroke={flowColor} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" opacity={flux} />;
	});
	return (
		<g opacity={opacity}>
			<path d={`M${cx - g.o},${cy - g.o} H${cx + g.o} V${cy + g.o} H${cx - g.o} Z M${cx - g.i},${cy - g.i} V${cy + g.i} H${cx + g.i} V${cy - g.i} Z`} fill="#b9bdc2" stroke="#5b6168" strokeWidth={4} fillRule="evenodd" />
			{chev}
			{wind(g.lx, np, -1, pulseP)}
			{wind(g.rx, ns, 1, pulseS)}
		</g>
	);
};

// ---------------------------------------------------------------- a rod on rails, seen from above (exam style)
/**
 * Two horizontal rails from x1 to x2 at y1 and y2, joined at the left by an end bar at x1 that carries `children`
 * (a resistor and a meter symbol, drawn by the lesson). The enclosed area from x1 to the rod at `rodX` is shaded
 * when `shade` > 0. The rod itself (a painted plate) is drawn by the lesson.
 */
export const Rails: React.FC<{x1: number; x2: number; y1: number; y2: number; rodX: number; shade?: number; shadeColor?: string; outline?: number; opacity?: number; children?: React.ReactNode}> = ({x1, x2, y1, y2, rodX, shade = 0, shadeColor = '#cfd6de', outline = 0, opacity = 1, children}) => (
	<g opacity={opacity}>
		{shade > 0.001 ? <rect x={x1} y={y1} width={Math.max(0, rodX - x1)} height={y2 - y1} fill={shadeColor} opacity={0.75 * shade} /> : null}
		<line x1={x1} y1={y1} x2={x2} y2={y1} stroke="#8d8f93" strokeWidth={14} strokeLinecap="round" />
		<line x1={x1} y1={y2} x2={x2} y2={y2} stroke="#8d8f93" strokeWidth={14} strokeLinecap="round" />
		<line x1={x1} y1={y1} x2={x1} y2={y2} stroke={INK} strokeWidth={5} />
		{outline > 0.001 ? <rect x={x1} y={y1} width={Math.max(0, rodX - x1)} height={y2 - y1} fill="none" stroke={INK} strokeWidth={5} strokeDasharray="14 8" opacity={outline} /> : null}
		{children}
	</g>
);
