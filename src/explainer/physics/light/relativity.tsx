// Special-relativity board kit for Module 7 (additive kit file, 25 November 2026; first used by phys-y12-m7-v13 to v15,
// offered to later relativity videos). Course-neutral: every label, number and colour of meaning comes from the lesson.
// Every geometry that carries physics is driven by the relativity engine (`sims/relativity.ts`): the light clock's path
// (`lightClockAt`), the tick ratio (`lightClockTicks`), gamma, contraction and the momentum curve.
// Plates (visible boxes measured from the alpha channel, threshold 20, on 25 November 2026; anchors read on a 100 px grid
// the same day or from docs/production/claude-pm/assets/brief191-manifest.json):
//   cloud chamber (1448 x 1086): glass top about (545, 150) to (905, 225), centre (724, 190);
//   atomic clock (1514 x 1039): blank display about (1040, 345) to (1310, 440) (manifest);
//   space station (2172 x 724): flat deck line y 280 from x 442 to 1760 (manifest);
//   linac tunnel (1774 x 887): beam line from about (1700, 395) at the right towards the vanishing point (380, 610).
// - ClockDial: a coded clock face in a role colour whose hand turns with its own time.
// - LightClockPanel: a light clock at rest or moving sideways at beta inside a panel; the pulse path and tick counts come
//   from the engine, so a moving clock's ticks take gamma times longer.
// - CurvePlot: y against v/c (0 to 1) with an optional classical dashed line, a dashed asymptote at v = c, a marker and
//   an optional light grid (HSC graph-paper style).
// - AtmosColumn: an atmosphere column with muon dots that fall and decay (deterministic exponential decay lengths).
// - ShipOutline: a contracted outline and ruler over a faded, unscaled spacecraft plate (never stretched).
// - SpeedGauge, MomentumBar, Globe (flight loops seen from above a pole) and StorageRing.
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {INK} from '../../shared/tokens';
import {lightClockAt, lightClockTicks} from '../../sims/relativity';
import {LPlate} from './plates';
import type {LightSpec, Place} from './plates';
import {SHIP} from './frames';

type Pt = [number, number];
const P = (name: string) => `assets/physics/${name}.png`;
export const CLOUD_CHAMBER: LightSpec = {src: P('y12p-cloud-chamber-v1'), W: 1448, H: 1086, box: [426, 146, 1032, 956]};
export const ATOMIC_CLOCK: LightSpec = {src: P('y12p-atomic-clock-v1'), W: 1514, H: 1039, box: [94, 138, 1449, 923]};
export const SPACE_STATION: LightSpec = {src: P('y12p-space-station-v1'), W: 2172, H: 724, box: [282, 279, 1892, 507]};
export const LINAC: LightSpec = {src: P('y12p-linac-tunnel-v1'), W: 1774, H: 887, box: [33, 21, 1749, 871]};
export const REL_ANCHOR = {chamberGlass: [545, 150, 905, 225], chamberC: [724, 190], clockDisplay: [1040, 345, 1310, 440], deckY: 280, deckX: [442, 1760], beamFar: [380, 610], beamNear: [1700, 395]} as const;
export const REL_PLATES = [CLOUD_CHAMBER, ATOMIC_CLOCK, SPACE_STATION, LINAC].map(s => s.src);

const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color});

/** A coded clock face (no numerals) in colour `color`; its hand turns once per `turn` units of t. */
export const ClockDial: React.FC<{cx: number; cy: number; r?: number; t: number; turn?: number; color: string; label?: string; size?: number; opacity?: number; ring?: number}> = ({cx, cy, r = 34, t, turn = 1, color, label, size = 28, opacity = 1, ring = 0}) => {
	if (opacity <= 0.001) return null;
	const a = (2 * Math.PI * t) / turn - Math.PI / 2;
	return (
		<g opacity={opacity}>
			{ring > 0.001 ? <circle cx={cx} cy={cy} r={r + 14} fill="none" stroke={color} strokeWidth={4} opacity={ring} /> : null}
			<circle cx={cx} cy={cy} r={r} fill="#fffdf8" stroke={color} strokeWidth={4.5} />
			{Array.from({length: 12}, (_, k) => <line key={k} x1={cx + (r - (k % 3 ? 5 : 10)) * Math.cos((k * Math.PI) / 6)} y1={cy + (r - (k % 3 ? 5 : 10)) * Math.sin((k * Math.PI) / 6)} x2={cx + (r - 1) * Math.cos((k * Math.PI) / 6)} y2={cy + (r - 1) * Math.sin((k * Math.PI) / 6)} stroke={color} strokeWidth={k % 3 ? 2 : 3.5} />)}
			<line x1={cx} y1={cy} x2={cx + (r - 9) * Math.cos(a)} y2={cy + (r - 9) * Math.sin(a)} stroke={color} strokeWidth={4.5} strokeLinecap="round" />
			<circle cx={cx} cy={cy} r={4} fill={color} />
			{label ? <text x={cx} y={cy + r + size + 6} textAnchor="middle" style={T(size, color)}>{label}</text> : null}
		</g>
	);
};

/**
 * A light clock inside a panel box. The lower mirror starts at (x0, base), mirrors `sep` px apart and `mw` px wide.
 * `tau` is the time elapsed in the panel's frame, in rest ticks (2d/c). At beta > 0 the clock moves right and the pulse
 * traces the engine's zigzag; the path restarts every `cycle` moving ticks so the clock stays in the panel.
 */
export const LightClockPanel: React.FC<{x0: number; base: number; sep: number; beta: number; tau: number; mw?: number; mirror: string; path: string; pulse: string; cycle?: number; showPath?: boolean; showVert?: boolean; opacity?: number}> = ({x0, base, sep, beta, tau, mw = 120, mirror, path, pulse, cycle = 2, showPath = true, showVert = false, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const tk = lightClockTicks({height: 1, beta});
	const tMove = tau * tk.rest;
	const per = cycle * tk.moving;
	const local = beta > 0 ? tMove % per : tMove;
	const s = lightClockAt({height: 1, beta}, local);
	const cx = x0 + s.x * sep;
	const pts = s.path.map(([px, py], i) => `${i ? 'L' : 'M'}${(x0 + px * sep).toFixed(1)},${(base - 8 - py * (sep - 16)).toFixed(1)}`).join(' ');
	const py = base - 8 - s.y * (sep - 16);
	return (
		<g opacity={opacity}>
			{showPath && beta > 0 ? <path d={pts} fill="none" stroke={path} strokeWidth={5} strokeLinejoin="round" /> : null}
			{showVert ? <line x1={cx} y1={base - 8} x2={cx} y2={base - sep + 8} stroke={path} strokeWidth={5} /> : null}
			<line x1={cx - mw / 2} y1={base} x2={cx + mw / 2} y2={base} stroke={mirror} strokeWidth={8} strokeLinecap="round" />
			<line x1={cx - mw / 2} y1={base - sep} x2={cx + mw / 2} y2={base - sep} stroke={mirror} strokeWidth={8} strokeLinecap="round" />
			<circle cx={cx} cy={py} r={11} fill={pulse} stroke="#fff" strokeWidth={3} />
		</g>
	);
};
/** Ticks completed in the panel's frame after tau rest ticks: rest clock floor(tau), moving clock floor(tau / gamma). */
export const clockTicks = (beta: number, tau: number) => Math.floor(tau / lightClockTicks({height: 1, beta}).gamma + 1e-9);
/** Screen x of the moving clock's centre (for labels that ride with it). */
export const clockX = (x0: number, sep: number, beta: number, tau: number, cycle = 2) => {
	const tk = lightClockTicks({height: 1, beta});
	return x0 + lightClockAt({height: 1, beta}, beta > 0 ? (tau * tk.rest) % (cycle * tk.moving) : 0).x * sep;
};

export type PlotBox = {x: number; y: number; w: number; h: number; yMax: number; yMin?: number};
/** Screen x for v/c and screen y for a value on a plot box. */
export const plotX = (b: PlotBox, beta: number) => b.x + beta * b.w;
export const plotY = (b: PlotBox, v: number) => b.y + b.h - ((Math.min(v, b.yMax) - (b.yMin ?? 0)) / (b.yMax - (b.yMin ?? 0))) * b.h;
/**
 * y against v/c from 0 to `draw` x `betaMax` (the curve stops short of c: no point is plotted at c). `classical` is an
 * optional straight dashed line drawn to `classicalDraw`; `asym` draws a dashed line at v = c.
 */
export const CurvePlot: React.FC<{b: PlotBox; f: (beta: number) => number; color: string; draw?: number; betaMax?: number; classical?: (beta: number) => number; classicalDraw?: number; classicalColor?: string; asym?: number; asymColor?: string; marker?: number; markerColor?: string; xTicks?: readonly number[]; yTicks?: readonly number[]; xLabel?: string; yLabel?: string; size?: number; opacity?: number; axisColor?: string; grid?: {dx: number; dy: number}}> = ({b, f, color, draw = 1, betaMax = 0.9995, classical, classicalDraw = 0, classicalColor = '#8a8378', asym = 0, asymColor = '#c8443a', marker, markerColor, xTicks = [0, 0.5, 1], yTicks = [], xLabel = 'v/c', yLabel, size = 30, opacity = 1, axisColor = INK, grid}) => {
	if (opacity <= 0.001) return null;
	const N = 260, top = b.y - 10;
	const curve: string[] = [];
	for (let i = 0; i <= N; i++) {
		const beta = (betaMax * draw * i) / N;
		const v = f(beta);
		if (v > b.yMax * 1.02) break;
		curve.push(`${i ? 'L' : 'M'}${plotX(b, beta).toFixed(1)},${Math.max(top, plotY(b, v)).toFixed(1)}`);
	}
	const cl = classical && classicalDraw > 0 ? `M${plotX(b, 0)},${plotY(b, classical(0))} L${plotX(b, classicalDraw)},${plotY(b, classical(classicalDraw))}` : '';
	return (
		<g opacity={opacity}>
			{grid ? <g stroke="#c2b8a6" strokeWidth={2.5}>
				{Array.from({length: Math.floor(1 / grid.dx + 1e-9)}, (_, i) => <line key={`x${i}`} x1={plotX(b, (i + 1) * grid.dx)} y1={b.y} x2={plotX(b, (i + 1) * grid.dx)} y2={b.y + b.h} />)}
				{Array.from({length: Math.floor((b.yMax - (b.yMin ?? 0)) / grid.dy + 1e-9)}, (_, i) => <line key={`y${i}`} x1={b.x} y1={plotY(b, (b.yMin ?? 0) + (i + 1) * grid.dy)} x2={b.x + b.w} y2={plotY(b, (b.yMin ?? 0) + (i + 1) * grid.dy)} />)}
			</g> : null}
			<line x1={b.x} y1={b.y + b.h} x2={b.x + b.w + 30} y2={b.y + b.h} stroke={axisColor} strokeWidth={4} />
			<line x1={b.x} y1={b.y + b.h} x2={b.x} y2={b.y - 20} stroke={axisColor} strokeWidth={4} />
			{xTicks.map(t => <g key={t}><line x1={plotX(b, t)} y1={b.y + b.h} x2={plotX(b, t)} y2={b.y + b.h + 12} stroke={axisColor} strokeWidth={3} /><text x={plotX(b, t)} y={b.y + b.h + 12 + size} textAnchor="middle" style={T(size, axisColor, 700)}>{String(t)}</text></g>)}
			{yTicks.map(t => <g key={t}><line x1={b.x - 12} y1={plotY(b, t)} x2={b.x} y2={plotY(b, t)} stroke={axisColor} strokeWidth={3} /><text x={b.x - 18} y={plotY(b, t) + size * 0.35} textAnchor="end" style={T(size, axisColor, 700)}>{String(t)}</text></g>)}
			<text x={b.x + b.w + 36} y={b.y + b.h + 10} style={T(size, axisColor)}>{xLabel}</text>
			{yLabel ? <text x={b.x + 14} y={b.y - 26} style={T(size, axisColor)}>{yLabel}</text> : null}
			{asym > 0.001 ? <line x1={plotX(b, 1)} y1={b.y + b.h} x2={plotX(b, 1)} y2={b.y + b.h - (b.h + 10) * asym} stroke={asymColor} strokeWidth={4} strokeDasharray="12 9" /> : null}
			{cl ? <path d={cl} fill="none" stroke={classicalColor} strokeWidth={5} strokeDasharray="14 10" /> : null}
			<path d={curve.join(' ')} fill="none" stroke={color} strokeWidth={6} strokeLinecap="round" />
			{marker !== undefined ? <circle cx={plotX(b, marker)} cy={Math.max(top, plotY(b, f(marker)))} r={13} fill={markerColor ?? color} stroke="#fff" strokeWidth={3.5} /> : null}
		</g>
	);
};

/** Deterministic 0..1 hash. */
const h01 = (i: number, k = 1) => { const v = Math.sin(i * 127.1 + k * 311.7) * 43758.5453; return v - Math.floor(v); };
/**
 * An atmosphere column (x, y, w, h) with a ground strip at the bottom. `depth` (0 to 1) is the column height shown above
 * the ground (1 for Earth's frame; smaller when the atmosphere is contracted). Muon k starts at the top at a staggered
 * time, falls `speed` px per frame and decays after an exponential distance with mean `decayPx` (a flash where it ends).
 * `hold` keeps muons still at the top while the column (and its ground) rises towards them (the muon's frame).
 */
export const AtmosColumn: React.FC<{x: number; y: number; w: number; h: number; f: number; depth?: number; decayPx: number; speed?: number; n?: number; dot: string; ground?: string; rise?: number; hold?: boolean; opacity?: number; label?: string; size?: number; showMuons?: boolean; start?: number}> = ({x, y, w, h, f, depth = 1, decayPx, speed = 9, n = 14, dot, ground = '#8d7b5f', rise = 0, hold = false, opacity = 1, label = 'sea level', size = 28, showMuons = true, start = 0}) => {
	if (opacity <= 0.001) return null;
	const colH = h * depth, gy = y + colH - rise * colH;
	const id = `atm${Math.round(x)}${Math.round(y)}`;
	const period = Math.ceil(h / speed) + 20;
	return (
		<g opacity={opacity}>
			<defs><linearGradient id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#dce8f4" /><stop offset="1" stopColor="#b9d3ea" /></linearGradient></defs>
			<rect x={x} y={y} width={w} height={Math.max(0, gy - y)} fill={`url(#${id})`} stroke="#7d93ab" strokeWidth={2.5} />
			<rect x={x - 20} y={gy} width={w + 40} height={26} fill={ground} />
			<line x1={x - 20} y1={gy} x2={x + w + 20} y2={gy} stroke={INK} strokeWidth={3} />
			{label ? <text x={x + w / 2} y={gy + 26 + size} textAnchor="middle" style={T(size, INK, 700)}>{label}</text> : null}
			{showMuons ? Array.from({length: n}, (_, k) => {
				const age = (((f - start - (k / n) * period) % period) + period) % period;
				if (f - start < (k / n) * period) return null;
				const life = -decayPx * Math.log(Math.max(1e-6, h01(k, 5)));
				const mx = x + 18 + h01(k, 2) * (w - 36);
				if (hold) return <circle key={k} cx={mx} cy={y + 14 + (k % 3) * 10} r={8} fill={dot} stroke="#fff" strokeWidth={2} />;
				const d = age * speed;
				if (d > life + 18 || y + d > gy + 4) return null;
				if (d > life) return <circle key={k} cx={mx} cy={y + life} r={6 + (d - life)} fill="none" stroke={dot} strokeWidth={3} opacity={1 - (d - life) / 18} />;
				return <circle key={k} cx={mx} cy={y + d} r={8} fill={dot} stroke="#fff" strokeWidth={2} />;
			}) : null}
		</g>
	);
};

/**
 * A spacecraft measured at length factor k (l / l0) along its motion: the plate stays unscaled and faded at p; a coded
 * outline of length k times the plate's hull is drawn over it (centred on the hull), with an optional ruler under it.
 */
export const ShipOutline: React.FC<{p: Place; k: number; color: string; plateOpacity?: number; ruler?: string; size?: number; opacity?: number; anchor?: 'centre' | 'tail'}> = ({p, k, color, plateOpacity = 0.4, ruler, size = 32, opacity = 1, anchor = 'centre'}) => {
	if (opacity <= 0.001) return null;
	const s = p.w / (SHIP.box[2] - SHIP.box[0]);
	const hL = p.x + (420 - SHIP.box[0]) * s, hR = p.x + (1767 - SHIP.box[0]) * s, top = p.y + (330 - SHIP.box[1]) * s, bot = p.y + (510 - SHIP.box[1]) * s;
	const full = hR - hL, len = full * k, x0 = anchor === 'tail' ? hL : hL + (full - len) / 2, mid = (top + bot) / 2, nose = Math.min(len * 0.18, (bot - top) * 0.9);
	const d = `M${x0},${top} L${x0 + len - nose},${top} Q${x0 + len},${mid - 4} ${x0 + len},${mid} Q${x0 + len},${mid + 4} ${x0 + len - nose},${bot} L${x0},${bot} Z`;
	const ry = bot + 40;
	return (
		<g opacity={opacity}>
			<LPlate spec={SHIP} p={p} opacity={plateOpacity} />
			<path d={d} fill="none" stroke={color} strokeWidth={6} strokeLinejoin="round" />
			{ruler ? <g>
				<line x1={x0} y1={ry} x2={x0 + len} y2={ry} stroke={color} strokeWidth={5} />
				{Array.from({length: 11}, (_, i) => <line key={i} x1={x0 + (len * i) / 10} y1={ry - (i % 5 ? 8 : 16)} x2={x0 + (len * i) / 10} y2={ry} stroke={color} strokeWidth={3} />)}
				<text x={x0 + len / 2} y={ry + size + 6} textAnchor="middle" style={T(size, color)}>{ruler}</text>
			</g> : null}
		</g>
	);
};
/** Screen extent of a ShipOutline's hull (left x, right x, top y, bottom y) at k. */
export const outlineExtent = (p: Place, k: number, anchor: 'centre' | 'tail' = 'centre') => {
	const s = p.w / (SHIP.box[2] - SHIP.box[0]);
	const hL = p.x + (420 - SHIP.box[0]) * s, hR = p.x + (1767 - SHIP.box[0]) * s;
	const full = hR - hL, len = full * k, x0 = anchor === 'tail' ? hL : hL + (full - len) / 2;
	return {x0, x1: x0 + len, top: p.y + (330 - SHIP.box[1]) * s, bot: p.y + (510 - SHIP.box[1]) * s};
};

/** A half-dial speed gauge from 0 to c: needle at beta, a red stop at c. */
export const SpeedGauge: React.FC<{cx: number; cy: number; r: number; beta: number; color: string; stop?: string; label?: string; size?: number; opacity?: number; tremble?: number}> = ({cx, cy, r, beta, color, stop = '#c8443a', label, size = 30, opacity = 1, tremble = 0}) => {
	if (opacity <= 0.001) return null;
	const ang = (u: number) => Math.PI + Math.PI * u;
	const a = ang(Math.min(0.999, beta) - tremble);
	return (
		<g opacity={opacity}>
			<path d={`M${cx - r},${cy} A${r},${r} 0 0 1 ${cx + r},${cy}`} fill="#fffdf8" stroke={INK} strokeWidth={4} />
			{[0, 0.25, 0.5, 0.75].map(u => <line key={u} x1={cx + (r - 14) * Math.cos(ang(u))} y1={cy + (r - 14) * Math.sin(ang(u))} x2={cx + r * Math.cos(ang(u))} y2={cy + r * Math.sin(ang(u))} stroke={INK} strokeWidth={3} />)}
			<line x1={cx + (r - 28) * Math.cos(ang(1))} y1={cy + (r - 28) * Math.sin(ang(1))} x2={cx + (r + 8) * Math.cos(ang(1))} y2={cy + (r + 8) * Math.sin(ang(1))} stroke={stop} strokeWidth={9} strokeLinecap="round" />
			<text x={cx + r + 14} y={cy + 4} style={T(size, stop)}>c</text>
			<text x={cx - r - 14} y={cy + 4} textAnchor="end" style={T(size, INK, 700)}>0</text>
			<line x1={cx} y1={cy} x2={cx + (r - 18) * Math.cos(a)} y2={cy + (r - 18) * Math.sin(a)} stroke={color} strokeWidth={7} strokeLinecap="round" />
			<circle cx={cx} cy={cy} r={9} fill={color} />
			{label ? <text x={cx} y={cy + size + 14} textAnchor="middle" style={T(size, color)}>{label}</text> : null}
		</g>
	);
};

/** A vertical bar of equal blocks standing on (x, base): `n` blocks (fractional allowed), each `bh` px tall. */
export const MomentumBar: React.FC<{x: number; base: number; w: number; bh: number; n: number; color: string; soft?: string; label?: string; size?: number; opacity?: number; maxH?: number}> = ({x, base, w, bh, n, color, soft = '#f8e8c8', label, size = 30, opacity = 1, maxH}) => {
	if (opacity <= 0.001) return null;
	const whole = Math.floor(n), frac = n - whole;
	const blocks = Array.from({length: whole + (frac > 0.01 ? 1 : 0)}, (_, i) => ({y: base - (i + 1) * bh, h: i < whole ? bh : bh * frac}));
	return (
		<g opacity={opacity}>
			<line x1={x - 14} y1={base} x2={x + w + 14} y2={base} stroke={INK} strokeWidth={4} />
			{blocks.map((b, i) => (maxH !== undefined && base - b.y > maxH + bh ? null : <rect key={i} x={x} y={i < whole ? b.y : base - i * bh - b.h} width={w} height={b.h - 3} rx={4} fill={soft} stroke={color} strokeWidth={3.5} />))}
			{label ? <text x={x + w / 2} y={base + size + 10} textAnchor="middle" style={T(size, color)}>{label}</text> : null}
		</g>
	);
};

/** A coded globe seen from above a pole, with eastward and westward flight loops drawn to `east` and `west` (0 to 1). */
export const Globe: React.FC<{cx: number; cy: number; r: number; east?: number; west?: number; eastColor: string; westColor: string; t?: number; opacity?: number}> = ({cx, cy, r, east = 0, west = 0, eastColor, westColor, t = 0, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const loop = (rr: number, u: number, dir: 1 | -1) => {
		if (u <= 0.001) return '';
		const n = 120, pts: string[] = [];
		for (let i = 0; i <= n * u; i++) { const a = -Math.PI / 2 + (dir * 2 * Math.PI * i) / n; pts.push(`${i ? 'L' : 'M'}${(cx + rr * Math.cos(a)).toFixed(1)},${(cy + rr * Math.sin(a)).toFixed(1)}`); }
		return pts.join(' ');
	};
	const dot = (rr: number, u: number, dir: 1 | -1) => { const a = -Math.PI / 2 + dir * 2 * Math.PI * u; return [cx + rr * Math.cos(a), cy + rr * Math.sin(a)] as Pt; };
	const de = dot(r + 50, (t * 0.12) % 1, 1), dw = dot(r + 95, (t * 0.12) % 1, -1);
	return (
		<g opacity={opacity}>
			<circle cx={cx} cy={cy} r={r} fill="#dce8f4" stroke={INK} strokeWidth={4} />
			{[0.35, 0.7].map(k => <circle key={k} cx={cx} cy={cy} r={r * k} fill="none" stroke="#7d93ab" strokeWidth={2} />)}
			{Array.from({length: 6}, (_, i) => <line key={i} x1={cx} y1={cy} x2={cx + r * Math.cos((i * Math.PI) / 3)} y2={cy + r * Math.sin((i * Math.PI) / 3)} stroke="#7d93ab" strokeWidth={2} />)}
			<circle cx={cx} cy={cy} r={7} fill={INK} />
			<path d={loop(r + 50, east, 1)} fill="none" stroke={eastColor} strokeWidth={6} strokeLinecap="round" />
			<path d={loop(r + 95, west, -1)} fill="none" stroke={westColor} strokeWidth={6} strokeLinecap="round" strokeDasharray="16 8" />
			{east >= 1 ? <circle cx={de[0]} cy={de[1]} r={10} fill={eastColor} stroke="#fff" strokeWidth={2.5} /> : null}
			{west >= 1 ? <circle cx={dw[0]} cy={dw[1]} r={10} fill={westColor} stroke="#fff" strokeWidth={2.5} /> : null}
		</g>
	);
};

/** A coded storage ring seen from above: double line, dipole sections marked with field symbols, dots circling. */
export const StorageRing: React.FC<{cx: number; cy: number; r: number; t: number; period?: number; dot: string; n?: number; field?: string; fieldIn?: boolean; opacity?: number; trail?: boolean}> = ({cx, cy, r, t, period = 2, dot, n = 3, field = '#6b6358', fieldIn = true, opacity = 1, trail = true}) => {
	if (opacity <= 0.001) return null;
	return (
		<g opacity={opacity}>
			<circle cx={cx} cy={cy} r={r + 16} fill="none" stroke={INK} strokeWidth={4} />
			<circle cx={cx} cy={cy} r={r - 16} fill="none" stroke={INK} strokeWidth={4} />
			{Array.from({length: 8}, (_, i) => {
				const a = (i * Math.PI) / 4 + Math.PI / 8, x = cx + r * Math.cos(a), y = cy + r * Math.sin(a);
				return fieldIn ? <g key={i}><line x1={x - 7} y1={y - 7} x2={x + 7} y2={y + 7} stroke={field} strokeWidth={3} /><line x1={x + 7} y1={y - 7} x2={x - 7} y2={y + 7} stroke={field} strokeWidth={3} /></g> : <circle key={i} cx={x} cy={y} r={5} fill={field} />;
			})}
			{Array.from({length: n}, (_, k) => {
				const a = (2 * Math.PI * t) / period + (2 * Math.PI * k) / n;
				return <g key={k}>{trail ? <path d={`M${cx + r * Math.cos(a - 0.5)},${cy + r * Math.sin(a - 0.5)} A${r},${r} 0 0 1 ${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`} fill="none" stroke={dot} strokeWidth={4} opacity={0.5} /> : null}<circle cx={cx + r * Math.cos(a)} cy={cy + r * Math.sin(a)} r={10} fill={dot} stroke="#fff" strokeWidth={2.5} /></g>;
			})}
		</g>
	);
};

/** A coded beam pipe (horizontal, HSC style) with dots moving right at `speed` px per frame. */
export const BeamPipe: React.FC<{x: number; y: number; w: number; f: number; dot: string; speed?: number; n?: number; opacity?: number; rider?: React.ReactNode}> = ({x, y, w, f, dot, speed = 6, n = 5, opacity = 1, rider}) => {
	if (opacity <= 0.001) return null;
	return (
		<g opacity={opacity}>
			<rect x={x} y={y - 26} width={w} height={52} rx={26} fill="#eef1f4" stroke={INK} strokeWidth={4} />
			{Array.from({length: n}, (_, k) => { const px = x + 30 + ((((f * speed + (k * (w - 60)) / n) % (w - 60)) + (w - 60)) % (w - 60)); return <circle key={k} cx={px} cy={y} r={10} fill={dot} stroke="#fff" strokeWidth={2.5} />; })}
			{rider}
		</g>
	);
};
