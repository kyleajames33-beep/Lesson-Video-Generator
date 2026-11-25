// Electromagnetic wave kit for Module 7 (additive kit file, 25 November 2026; first used by phys-y12-m7-v01 to v03).
// Course-neutral: colours, labels and numbers come from the lesson. Every part takes a deterministic phase or progress,
// so a frame depends only on its inputs.
// - EMWave: a plane EM wave along x. E (one colour) in the page plane, B (another colour) in the plane at right angles,
//   in phase, both zero at the same points. `tilt` turns the view: 0 shows B end on (dots out of and crosses into the
//   page, symbol size = |B|), 1 shows B in an oblique horizontal plane (a three-quarter view). E x B points along +x.
// - LoopChain: alternating E loops (upright) and B loops (flat) linking along a line, each drawn on in turn.
// - FrontArcs and frontRadii: wave fronts released at given times from a source, growing at a set speed.
// - Spark: a flickering zigzag between two points. ChargeDot: a signed charge.
// - CapCircuit: an exam-style circuit (cell, switch, two parallel plates) with current dots, charge on the plates,
//   field lines in the gap and magnetic loops curling round the gap and round a wire.
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD, INK} from '../../shared/tokens';

type Pt = [number, number];
const clamp01 = (u: number) => Math.max(0, Math.min(1, u));
/** Seeded pseudo-random in [0, 1) for a frame (deterministic flicker). */
export const hash01 = (n: number) => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };

/** A straight arrow with a filled head. */
export const Arrow: React.FC<{from: Pt; to: Pt; color: string; width?: number; head?: number; opacity?: number; dash?: string}> = ({from, to, color, width = 5, head = 18, opacity = 1, dash}) => {
	const L = Math.hypot(to[0] - from[0], to[1] - from[1]);
	if (opacity <= 0.001 || L < 2) return null;
	const u: Pt = [(to[0] - from[0]) / L, (to[1] - from[1]) / L], n: Pt = [-u[1], u[0]];
	const h = Math.min(head, L * 0.6);
	const b: Pt = [to[0] - u[0] * h, to[1] - u[1] * h];
	return (
		<g opacity={opacity}>
			<line x1={from[0]} y1={from[1]} x2={b[0]} y2={b[1]} stroke={color} strokeWidth={width} strokeLinecap="round" strokeDasharray={dash} />
			<path d={`M${to[0]},${to[1]} L${b[0] + n[0] * h * 0.55},${b[1] + n[1] * h * 0.55} L${b[0] - n[0] * h * 0.55},${b[1] - n[1] * h * 0.55} Z`} fill={color} />
		</g>
	);
};

// ---------------------------------------------------------------- the plane wave
/** Field value (-1 to 1) at screen x for a wave travelling +x: sin(2 pi (x - x0) / lambda - phase). */
export const emAt = (x: number, x0: number, lambda: number, phase: number) => Math.sin((2 * Math.PI * (x - x0)) / lambda - phase);
export const Z_DIR: Pt = [-0.5, 0.42];
export const EMWave: React.FC<{
	x0: number; x1: number; y: number; amp: number; lambda: number; phase: number;
	eColor: string; bColor: string; axisColor?: string;
	tilt?: number; grow?: number; arrows?: number; e?: number; b?: number; axis?: number; width?: number; opacity?: number; marker?: number; markerColor?: string;
}> = ({x0, x1, y, amp, lambda, phase, eColor, bColor, axisColor = INK, tilt = 1, grow = 1, arrows = 1, e = 1, b = 1, axis = 1, width = 6, opacity = 1, marker, markerColor = INK}) => {
	if (opacity <= 0.001) return null;
	const xe = x0 + (x1 - x0) * clamp01(grow);
	const n = Math.max(2, Math.round((xe - x0) / 4));
	const ePts: string[] = [], bPts: string[] = [];
	const t = clamp01(tilt), bAmp = amp * 0.9;
	for (let i = 0; i <= n; i++) {
		const x = x0 + ((xe - x0) * i) / n, v = emAt(x, x0, lambda, phase);
		ePts.push(`${i ? 'L' : 'M'}${x.toFixed(1)},${(y - v * amp).toFixed(1)}`);
		bPts.push(`${i ? 'L' : 'M'}${(x + Z_DIR[0] * v * bAmp * t).toFixed(1)},${(y + Z_DIR[1] * v * bAmp * t).toFixed(1)}`);
	}
	const step = lambda / 8;
	const samples: number[] = [];
	for (let x = x0 + step / 2; x < xe - 4; x += step) samples.push(x);
	return (
		<g opacity={opacity}>
			{axis > 0.001 ? <Arrow from={[x0 - 30, y]} to={[x1 + 60, y]} color={axisColor} width={4} head={22} opacity={axis} /> : null}
			{b > 0.001 && t > 0.02 ? <g opacity={b * clamp01(t * 2)}>
				{arrows > 0.001 ? samples.map((x, i) => { const v = emAt(x, x0, lambda, phase); return Math.abs(v) < 0.12 ? null : <Arrow key={i} from={[x, y]} to={[x + Z_DIR[0] * v * bAmp * t, y + Z_DIR[1] * v * bAmp * t]} color={bColor} width={2.5} head={10} opacity={arrows * 0.8} />; }) : null}
				<path d={bPts.join(' ')} fill="none" stroke={bColor} strokeWidth={width} strokeLinejoin="round" />
			</g> : null}
			{b > 0.001 && t < 0.5 ? <g opacity={b * (1 - t * 2)}>
				{samples.map((x, i) => { const v = emAt(x, x0, lambda, phase); const r = 4 + 12 * Math.abs(v); return Math.abs(v) < 0.12 ? null : v > 0
					? <g key={i}><circle cx={x} cy={y + 46} r={r} fill="none" stroke={bColor} strokeWidth={3} /><circle cx={x} cy={y + 46} r={Math.max(2.5, r * 0.3)} fill={bColor} /></g>
					: <g key={i} stroke={bColor} strokeWidth={3.5}><line x1={x - r * 0.75} y1={y + 46 - r * 0.75} x2={x + r * 0.75} y2={y + 46 + r * 0.75} /><line x1={x + r * 0.75} y1={y + 46 - r * 0.75} x2={x - r * 0.75} y2={y + 46 + r * 0.75} /></g>; })}
			</g> : null}
			{e > 0.001 ? <g opacity={e}>
				{arrows > 0.001 ? samples.map((x, i) => { const v = emAt(x, x0, lambda, phase); return Math.abs(v) < 0.12 ? null : <Arrow key={i} from={[x, y]} to={[x, y - v * amp]} color={eColor} width={2.5} head={10} opacity={arrows * 0.8} />; }) : null}
				<path d={ePts.join(' ')} fill="none" stroke={eColor} strokeWidth={width} strokeLinejoin="round" />
			</g> : null}
			{marker !== undefined ? (() => { const v = emAt(marker, x0, lambda, phase); return <g>
				<line x1={marker} y1={y - amp - 30} x2={marker} y2={y + amp * 0.6 + 30} stroke={markerColor} strokeWidth={3} strokeDasharray="8 7" />
				<circle cx={marker} cy={y - v * amp} r={11} fill={CARD} stroke={eColor} strokeWidth={5} />
				<circle cx={marker + Z_DIR[0] * v * bAmp * t} cy={y + Z_DIR[1] * v * bAmp * t} r={11} fill={CARD} stroke={bColor} strokeWidth={5} />
			</g>; })() : null}
		</g>
	);
};

// ---------------------------------------------------------------- the field chain
/** A curling loop with one arrowhead (E loops upright, B loops flat). `draw` 0 to 1 draws it on. */
export const CurlLoop: React.FC<{cx: number; cy: number; rx: number; ry: number; color: string; draw?: number; width?: number; sense?: 1 | -1; opacity?: number}> = ({cx, cy, rx, ry, color, draw = 1, width = 6, sense = 1, opacity = 1}) => {
	if (opacity <= 0.001 || draw <= 0.001) return null;
	const C = 2 * Math.PI * Math.sqrt((rx * rx + ry * ry) / 2);
	const a = sense > 0 ? -Math.PI / 2 : Math.PI / 2;
	const p: Pt = [cx + rx * Math.cos(a), cy - ry * Math.sin(a)];
	const d: Pt = [-rx * Math.sin(a) * sense, -ry * Math.cos(a) * sense];
	const L = Math.hypot(d[0], d[1]) || 1, u: Pt = [d[0] / L, d[1] / L], nn: Pt = [u[1], -u[0]], h = 14 + width;
	return (
		<g opacity={opacity}>
			<ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="none" stroke={color} strokeWidth={width} strokeDasharray={`${C * clamp01(draw)} ${C}`} />
			{draw > 0.95 ? <path d={`M${p[0] + u[0] * h * 0.6},${p[1] + u[1] * h * 0.6} L${p[0] - u[0] * h * 0.5 + nn[0] * h * 0.55},${p[1] - u[1] * h * 0.5 + nn[1] * h * 0.55} L${p[0] - u[0] * h * 0.5 - nn[0] * h * 0.55},${p[1] - u[1] * h * 0.5 - nn[1] * h * 0.55} Z`} fill={color} /> : null}
		</g>
	);
};
/**
 * Alternating E (upright, colour a) and B (flat, colour b) loops linked along +x from (x, y), spacing `gap`.
 * `count` (fractional) is how many loops are drawn so far; `pulse` (array of 0 to 1 per loop) thickens a loop.
 */
export const LoopChain: React.FC<{x: number; y: number; count: number; a: string; b: string; gap?: number; size?: number; shift?: number; pulse?: readonly number[]; opacity?: number; width?: number}> = ({x, y, count, a, b, gap = 120, size = 90, shift = 0, pulse = [], opacity = 1, width = 6}) => {
	if (opacity <= 0.001) return null;
	const n = Math.ceil(count);
	return (
		<g opacity={opacity}>
			{Array.from({length: n}, (_, k) => {
				const e = k % 2 === 0, cx = x + shift + k * gap, pl = pulse[k] ?? 0;
				return <CurlLoop key={k} cx={cx} cy={y} rx={(e ? size * 0.42 : size * 0.95) * (1 + 0.1 * pl)} ry={(e ? size * 0.95 : size * 0.36) * (1 + 0.1 * pl)} color={e ? a : b} draw={Math.min(1, count - k)} width={width + 4 * pl} sense={e ? 1 : -1} />;
			})}
		</g>
	);
};

// ---------------------------------------------------------------- wave fronts
/** Radii (px) at time t of fronts released at `emit` times (same units as t), growing at `speed` px per unit. */
export const frontRadii = (emit: readonly number[], t: number, speed: number, maxR: number) =>
	emit.filter(e => e <= t).map((e, i) => ({r: (t - e) * speed, k: i})).filter(f => f.r > 2 && f.r < maxR);
/** Arcs of the given radii round (cx, cy) from a0 to a1 degrees (0 = +x, counterclockwise up); alternate colours. */
export const FrontArcs: React.FC<{cx: number; cy: number; fronts: readonly {r: number; k: number}[]; a0?: number; a1?: number; colors: readonly string[]; maxR: number; width?: number; opacity?: number}> = ({cx, cy, fronts, a0 = -60, a1 = 60, colors, maxR, width = 5, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const rad = (d: number) => (d * Math.PI) / 180;
	return (
		<g opacity={opacity}>
			{fronts.map(f => {
				const p0: Pt = [cx + f.r * Math.cos(rad(a0)), cy - f.r * Math.sin(rad(a0))], p1: Pt = [cx + f.r * Math.cos(rad(a1)), cy - f.r * Math.sin(rad(a1))];
				const large = Math.abs(a1 - a0) > 180 ? 1 : 0;
				return <path key={f.k} d={`M${p0[0]},${p0[1]} A${f.r},${f.r} 0 ${large} 0 ${p1[0]},${p1[1]}`} fill="none" stroke={colors[f.k % colors.length]} strokeWidth={width} strokeLinecap="round" opacity={1 - 0.7 * clamp01(f.r / maxR)} />;
			})}
		</g>
	);
};

// ---------------------------------------------------------------- spark and charges
/** A flickering spark between a and b at frame f (`on` 0 to 1). */
export const Spark: React.FC<{a: Pt; b: Pt; f: number; on?: number; color?: string; width?: number}> = ({a, b, f, on = 1, color = '#4f8fe0', width = 4}) => {
	if (on <= 0.001) return null;
	const flick = hash01(Math.floor(f / 2)) > 0.25 ? 1 : 0.35;
	const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1, n: Pt = [-(b[1] - a[1]) / L, (b[0] - a[0]) / L];
	const pts: string[] = [];
	for (let i = 0; i <= 6; i++) { const u = i / 6, j = i === 0 || i === 6 ? 0 : (hash01(f * 7 + i) - 0.5) * L * 0.5; pts.push(`${i ? 'L' : 'M'}${a[0] + (b[0] - a[0]) * u + n[0] * j},${a[1] + (b[1] - a[1]) * u + n[1] * j}`); }
	return (
		<g opacity={on * flick}>
			<path d={pts.join(' ')} fill="none" stroke="#dcebff" strokeWidth={width * 3} strokeLinecap="round" strokeLinejoin="round" opacity={0.7} />
			<path d={pts.join(' ')} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
		</g>
	);
};
/** A charge drawn as a disc with its sign. */
export const ChargeDot: React.FC<{x: number; y: number; r?: number; color: string; sign?: '+' | '−' | ''; opacity?: number}> = ({x, y, r = 12, color, sign = '−', opacity = 1}) => (
	opacity <= 0.001 ? null : <g opacity={opacity}>
		<circle cx={x} cy={y} r={r} fill={color} stroke={CARD} strokeWidth={2.5} />
		{sign ? <text x={x} y={y + r * 0.42} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: r * 1.5, fill: '#fff'}}>{sign}</text> : null}
	</g>
);

// ---------------------------------------------------------------- the charging capacitor
export type CapGeom = {x: number; y: number; w: number; h: number; gap: number; plateH: number};
/** Key points of the circuit: plates at the top centre, cell at the bottom centre, switch at the bottom left. */
export const capGeom = (g: CapGeom) => {
	const cx = g.x + g.w / 2, top = g.y + 40, bot = g.y + g.h;
	return {cx, top, bot, pl: cx - g.gap / 2, pr: cx + g.gap / 2, plateY0: top - g.plateH / 2, plateY1: top + g.plateH / 2, cellX: cx, swX: g.x + g.w * 0.22};
};
/**
 * The circuit: wires as a rectangle broken by the plate gap (top) and the cell (bottom). `closed` 0 to 1 closes the
 * switch; `current` shows orange dots flowing; `charge` 0 to 1 piles + and − on the plates; `field` 0 to 1 grows E
 * lines in the gap; `loops` 0 to 1 draws B loops round the gap and round the left wire.
 */
export const CapCircuit: React.FC<{g: CapGeom; closed?: number; current?: number; charge?: number; field?: number; loops?: number; wireLoop?: number; phase?: number; wire?: string; currentColor: string; plusColor: string; eColor: string; bColor: string; width?: number}> = ({g, closed = 1, current = 0, charge = 0, field = 0, loops = 0, wireLoop = 0, phase = 0, wire = INK, currentColor, plusColor, eColor, bColor, width = 5}) => {
	const k = capGeom(g);
	const L = g.x, R = g.x + g.w, T = k.top, B = k.bot;
	const swA: Pt = [k.swX - 40, B], swB: Pt = [k.swX + 40, B];
	const ang = (1 - clamp01(closed)) * 32;
	const blade: Pt = [swA[0] + 80 * Math.cos((ang * Math.PI) / 180), B - 80 * Math.sin((ang * Math.PI) / 180)];
	// current path: from the cell's + side round to the left plate (left half), and right plate back to the cell (right half)
	const pathL: Pt[] = [[k.cellX - 14, B], [L, B], [L, T], [k.pl, T]];
	const pathR: Pt[] = [[k.pr, T], [R, T], [R, B], [k.cellX + 14, B]];
	const along = (pts: Pt[], u: number): Pt => {
		const seg = pts.slice(1).map((p, i) => Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]));
		let d = u * seg.reduce((s, v) => s + v, 0);
		for (let i = 0; i < seg.length; i++) { if (d <= seg[i]) { const t = d / seg[i]; return [pts[i][0] + (pts[i + 1][0] - pts[i][0]) * t, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * t]; } d -= seg[i]; }
		return pts[pts.length - 1];
	};
	const nq = Math.round(5 * clamp01(charge));
	const nLines = Math.round(1 + 5 * clamp01(field));
	return (
		<g>
			<path d={`M${k.pl},${T} H${L} V${B} H${swA[0]} M${swB[0]},${B} H${k.cellX - 14} M${k.cellX + 14},${B} H${R} V${T} H${k.pr}`} fill="none" stroke={wire} strokeWidth={width} strokeLinejoin="round" />
			<line x1={swA[0]} y1={B} x2={blade[0]} y2={blade[1]} stroke={wire} strokeWidth={width} strokeLinecap="round" />
			<circle cx={swA[0]} cy={B} r={7} fill={CARD} stroke={wire} strokeWidth={3} /><circle cx={swB[0]} cy={B} r={7} fill={CARD} stroke={wire} strokeWidth={3} />
			<line x1={k.cellX - 14} y1={B - 40} x2={k.cellX - 14} y2={B + 40} stroke={wire} strokeWidth={6} />
			<line x1={k.cellX + 14} y1={B - 22} x2={k.cellX + 14} y2={B + 22} stroke={wire} strokeWidth={10} />
			<line x1={k.pl} y1={k.plateY0} x2={k.pl} y2={k.plateY1} stroke={wire} strokeWidth={12} />
			<line x1={k.pr} y1={k.plateY0} x2={k.pr} y2={k.plateY1} stroke={wire} strokeWidth={12} />
			{field > 0.001 ? <g opacity={clamp01(field * 3)}>{Array.from({length: nLines}, (_, i) => { const yy = k.plateY0 + 20 + ((g.plateH - 40) * (i + 0.5)) / nLines; return <Arrow key={i} from={[k.pl + 12, yy]} to={[k.pr - 12, yy]} color={eColor} width={2 + 3 * field} head={14} />; })}</g> : null}
			{nq > 0 ? Array.from({length: nq}, (_, i) => { const yy = k.plateY0 + 20 + ((g.plateH - 40) * (i + 0.5)) / nq; return <g key={i}><ChargeDot x={k.pl - 26} y={yy} r={18} color={plusColor} sign="+" /><ChargeDot x={k.pr + 26} y={yy} r={18} color={plusColor} sign="−" /></g>; }) : null}
			{current > 0.001 ? <g opacity={current}>{[0, 0.25, 0.5, 0.75].map(o => { const u = (o + phase) % 1; const a = along(pathL, u), b = along(pathR, u); return <g key={o}><circle cx={a[0]} cy={a[1]} r={8} fill={currentColor} /><circle cx={b[0]} cy={b[1]} r={8} fill={currentColor} /></g>; })}</g> : null}
			{loops > 0.001 ? <g opacity={loops}>{[0, 1].map(i => <CurlLoop key={i} cx={k.cx} cy={T} rx={34 + 18 * i} ry={g.plateH * (0.66 + 0.2 * i)} color={bColor} draw={clamp01(loops * 1.6 - i * 0.5)} width={5} />)}</g> : null}
			{wireLoop > 0.001 ? <g opacity={wireLoop}>{[0, 1].map(i => <CurlLoop key={i} cx={L} cy={(T + B) / 2 - 40 + 80 * i} rx={52} ry={16} color={bColor} draw={1} width={4} />)}</g> : null}
		</g>
	);
};
