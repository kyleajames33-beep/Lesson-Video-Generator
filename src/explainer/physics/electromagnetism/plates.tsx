// Parallel-plate electric field kit (additive kit file, 25 November 2026; first used by phys-y12-m6-v01 to v03,
// planned for the rest of Module 6). Course-neutral: no lesson wording here; every label, number and colour of
// meaning is passed in by the lesson. It holds the look of the uniform-field board:
//   - the painted high-voltage supply (uniform scale only) with a live display, a turning knob (a circular cut of
//     the same plate, rotated, never stretched) and terminal anchors for coded leads;
//   - the painted oil drop;
//   - coded exam-style parts: two horizontal plates with sign rows, field lines whose density follows E (lines
//     thin or fill in smoothly as E halves or doubles), edge fringe bulges, charged particles (ink discs carrying
//     their sign), leads, equipotential lines, an exam-style electron gun (cathode and anode blocks), a region of
//     magnetic-field crosses, and a slider control;
//   - plate runs on the field motion engine (sims/field-motion): a uniform field between the plates only, so the
//     curve inside and the straight line after the plates are one computed path.
// Supply plate anchors (phys-y11-eht-supply-v1.png, 1536 x 1024, read from the plate on a grid, 25 Nov 2026):
// body (108, 158) to (1428, 875); display window (862, 402) to (1218, 524); knob centre (570, 548), radius 168;
// terminals: black (887, 685), cream (1077, 685), green (1275, 683).
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {CARD, INK, INK_SOFT, TONES} from '../../shared/tokens';
import {runMotion} from '../../sims/field-motion';
import type {MotionPath} from '../../sims/field-motion';

export const SUPPLY_SRC = 'assets/physics/phys-y11-eht-supply-v1.png';
export const OIL_DROP_SRC = 'assets/physics/phys-y11-oil-drop-v1.png';
export const EM_PLATES = [SUPPLY_SRC, OIL_DROP_SRC];

const svgText = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color, paintOrder: 'stroke', stroke: CARD, strokeWidth: 6, strokeLinejoin: 'round'} as React.CSSProperties);

// ---------------------------------------------------------------- the painted supply
/** Supply placed by the top-left corner of its body (x, y) and the body's width w (px). */
export type SupplyAt = {x: number; y: number; w: number};
export const supplyPts = (g: SupplyAt) => {
	const s = g.w / 1320;
	const P = (px: number, py: number): [number, number] => [g.x + (px - 108) * s, g.y + (py - 158) * s];
	return {s, h: 717 * s, neg: P(887, 685), pos: P(1077, 685), earth: P(1275, 683), display: P(1040, 463), knob: P(570, 548), displayH: 122 * s, displayW: 356 * s};
};
let clipSeq = 0;
/** The painted supply with a live display reading and a knob that turns by `knobDeg`. */
export const Supply: React.FC<{at: SupplyAt; reading?: React.ReactNode; knobDeg?: number; opacity?: number; color?: string; size?: number; id?: string}> = ({at, reading, knobDeg = 0, opacity = 1, color = '#1f3a68', size, id}) => {
	const p = supplyPts(at);
	const [clip] = React.useState(() => id ?? `em-knob-${++clipSeq}`);
	const ix = at.x - 108 * p.s, iy = at.y - 158 * p.s, W = 1536 * p.s, H = 1024 * p.s;
	const len = typeof reading === 'string' ? reading.length : 5;
	const fs = Math.min(size ?? Math.max(29, p.displayH * 0.62), (p.displayW * 0.94) / (len * 0.6));
	return (
		<g opacity={opacity}>
			<image href={staticFile(SUPPLY_SRC)} x={ix} y={iy} width={W} height={H} />
			{knobDeg ? (
				<g>
					<defs><clipPath id={clip}><circle cx={p.knob[0]} cy={p.knob[1]} r={170 * p.s} /></clipPath></defs>
					<g clipPath={`url(#${clip})`}>
						<g transform={`rotate(${knobDeg} ${p.knob[0]} ${p.knob[1]})`}><image href={staticFile(SUPPLY_SRC)} x={ix} y={iy} width={W} height={H} /></g>
					</g>
				</g>
			) : null}
			{reading !== undefined ? <text x={p.display[0]} y={p.display[1] + fs * 0.36} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: fs, fill: color, fontVariantNumeric: 'tabular-nums'} as React.CSSProperties}>{reading}</text> : null}
		</g>
	);
};
/** A coded lead (wire) through a list of points, with small rounded joins. */
export const Lead: React.FC<{pts: readonly [number, number][]; color?: string; width?: number; opacity?: number}> = ({pts, color = INK, width = 4, opacity = 1}) => (
	<g opacity={opacity}>
		<polyline points={pts.map(q => q.join(',')).join(' ')} fill="none" stroke={color} strokeWidth={width} strokeLinejoin="round" strokeLinecap="round" />
		<circle cx={pts[0][0]} cy={pts[0][1]} r={width * 1.6} fill={color} />
		<circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r={width * 1.4} fill={color} />
	</g>
);

// ---------------------------------------------------------------- the painted oil drop
/** The oil drop plate (1263 x 1246; drop centre about (608, 638), diameter about 1217) by centre and diameter. */
export const OilDrop: React.FC<{cx: number; cy: number; d: number; opacity?: number}> = ({cx, cy, d, opacity = 1}) => {
	const s = d / 1217;
	return <image href={staticFile(OIL_DROP_SRC)} x={cx - 608 * s} y={cy - 638 * s} width={1263 * s} height={1246 * s} opacity={opacity} />;
};

// ---------------------------------------------------------------- plates and field lines
/** Plate geometry in px: x1 to x2 along the plates, yTop = the top plate's lower face, yBot = the bottom plate's upper face. */
export type PG = {x1: number; x2: number; yTop: number; yBot: number};
export const PLATE_FILL = '#d9d2c4';
/** Two coded plates with optional sign rows ('+' above the top plate and '−' below the bottom one, or swapped). */
export const PlatePair: React.FC<{g: PG; thick?: number; top?: '+' | '−' | ''; bot?: '+' | '−' | ''; signSize?: number; signStep?: number; signsOpacity?: number; opacity?: number; topSignsOpacity?: number}> = ({g, thick = 22, top = '+', bot = '−', signSize = 34, signStep = 110, signsOpacity = 1, opacity = 1, topSignsOpacity}) => {
	const n = Math.max(1, Math.floor((g.x2 - g.x1) / signStep));
	const xs = Array.from({length: n}, (_, i) => g.x1 + ((i + 0.5) * (g.x2 - g.x1)) / n);
	return (
		<g opacity={opacity}>
			<rect x={g.x1} y={g.yTop - thick} width={g.x2 - g.x1} height={thick} fill={PLATE_FILL} stroke={INK} strokeWidth={4} />
			<rect x={g.x1} y={g.yBot} width={g.x2 - g.x1} height={thick} fill={PLATE_FILL} stroke={INK} strokeWidth={4} />
			{top ? <g opacity={topSignsOpacity ?? signsOpacity}>{xs.map((x, i) => <text key={i} x={x} y={g.yTop - thick - 8} textAnchor="middle" style={svgText(signSize, INK)}>{top}</text>)}</g> : null}
			{bot ? <g opacity={signsOpacity}>{xs.map((x, i) => <text key={i} x={x} y={g.yBot + thick + signSize * 0.86} textAnchor="middle" style={svgText(signSize, INK)}>{bot}</text>)}</g> : null}
		</g>
	);
};
/**
 * Field lines between the plates. `density` 1 is the base spacing `step`; at 2 the lines between fill in, at 0.5
 * every other line fades out, so a change of E is seen as a change of line density. `grow` (0 to 1) draws the
 * lines on from the top (or the bottom for `up`). Each line carries one arrowhead at its middle.
 */
export const FieldLines: React.FC<{g: PG; step?: number; density?: number; dir?: 'down' | 'up'; color?: string; width?: number; grow?: number; inset?: number; opacity?: number}> = ({g, step = 110, density = 1, dir = 'down', color = TONES.blue.stroke, width = 4, grow = 1, inset = 30, opacity = 1}) => {
	if (grow <= 0 || opacity <= 0) return null;
	const half = step / 2, w = g.x2 - g.x1 - 2 * inset;
	const kMax = Math.floor(w / 2 / (half / 2));
	const lines: React.ReactNode[] = [];
	for (let k = -kMax; k <= kMax; k++) {
		const level = k % 4 === 0 ? 0 : k % 2 === 0 ? 1 : 2;
		const o = level === 0 ? Math.min(1, Math.max(0, (density - 0.25) / 0.25)) : level === 1 ? Math.min(1, Math.max(0, (density - 0.5) / 0.5)) : Math.min(1, Math.max(0, density - 1));
		if (o <= 0.01) continue;
		const x = (g.x1 + g.x2) / 2 + (k * half) / 2;
		const y0 = dir === 'down' ? g.yTop + 6 : g.yBot - 6, y1 = dir === 'down' ? g.yBot - 6 : g.yTop + 6;
		const ye = y0 + (y1 - y0) * grow, ym = (y0 + y1) / 2, sgn = dir === 'down' ? 1 : -1;
		lines.push(
			<g key={k} opacity={o}>
				<line x1={x} y1={y0} x2={x} y2={ye} stroke={color} strokeWidth={width} strokeLinecap="round" />
				{(dir === 'down' ? ye >= ym + 8 : ye <= ym - 8) ? <path d={`M${x},${ym + sgn * 10} l-9,${-sgn * 16} l18,0 Z`} fill={color} /> : null}
			</g>,
		);
	}
	return <g opacity={opacity}>{lines}</g>;
};
/** Fringe bulges at both plate ends: the field lines bow outwards beyond the plate edges. */
export const Fringe: React.FC<{g: PG; color?: string; opacity?: number; n?: number}> = ({g, color = TONES.grey.stroke, opacity = 1, n = 3}) => {
	if (opacity <= 0) return null;
	const gap = g.yBot - g.yTop;
	const paths: string[] = [];
	for (let i = 0; i < n; i++) {
		const off = 10 + i * 18, bulge = gap * (0.12 + 0.11 * i);
		paths.push(`M${g.x1 + off},${g.yTop + 4} C${g.x1 + off - bulge},${g.yTop + gap * 0.3} ${g.x1 + off - bulge},${g.yBot - gap * 0.3} ${g.x1 + off},${g.yBot - 4}`);
		paths.push(`M${g.x2 - off},${g.yTop + 4} C${g.x2 - off + bulge},${g.yTop + gap * 0.3} ${g.x2 - off + bulge},${g.yBot - gap * 0.3} ${g.x2 - off},${g.yBot - 4}`);
	}
	return <g opacity={opacity}>{paths.map((d, i) => <path key={i} d={d} fill="none" stroke={color} strokeWidth={3.5} />)}</g>;
};
/** Equipotential lines across the gap (parallel to the plates), `n` lines including both plate faces. */
export const Equipotentials: React.FC<{g: PG; n: number; color?: string; opacity?: number; dash?: string; extend?: number}> = ({g, n, color = TONES.grey.stroke, opacity = 1, dash = '14 9', extend = 0}) => (
	<g opacity={opacity}>
		{Array.from({length: n}, (_, i) => { const y = g.yTop + ((g.yBot - g.yTop) * i) / (n - 1); return <line key={i} x1={g.x1 - extend} y1={y} x2={g.x2 + extend} y2={y} stroke={color} strokeWidth={3} strokeDasharray={dash} />; })}
	</g>
);

// ---------------------------------------------------------------- particles
export const PARTICLE_FILL = '#f3d9a8';
/** A charged particle: an ink-outlined disc carrying its sign (sign, not colour, shows the charge). */
export const Particle: React.FC<{cx: number; cy: number; sign: '+' | '−'; r?: number; opacity?: number; fill?: string}> = ({cx, cy, sign, r = 24, opacity = 1, fill = PARTICLE_FILL}) => (
	<g opacity={opacity}>
		<circle cx={cx} cy={cy} r={r} fill={fill} stroke={INK} strokeWidth={4} />
		<text x={cx} y={cy + r * 0.42} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: r * 1.25, fill: INK} as React.CSSProperties}>{sign}</text>
	</g>
);
/** A strobe image (a fainter-filled particle outline, drawn solid) left behind at equal time steps. */
export const StrobeDot: React.FC<{cx: number; cy: number; r?: number; color?: string}> = ({cx, cy, r = 13, color = INK}) => <circle cx={cx} cy={cy} r={r} fill={CARD} stroke={color} strokeWidth={3} />;

// ---------------------------------------------------------------- the exam-style electron gun
/** Exam-style gun on a horizontal axis at y: a filled cathode block, then an anode block with a hole on the axis. */
export const Gun: React.FC<{x: number; y: number; h?: number; gap?: number; opacity?: number}> = ({x, y, h = 120, gap = 70, opacity = 1}) => {
	const hole = 14;
	return (
		<g opacity={opacity}>
			<rect x={x} y={y - h * 0.32} width={34} height={h * 0.64} fill={INK_SOFT} stroke={INK} strokeWidth={3.5} rx={4} />
			<rect x={x + 34 + gap} y={y - h / 2} width={26} height={h / 2 - hole} fill={PLATE_FILL} stroke={INK} strokeWidth={3.5} />
			<rect x={x + 34 + gap} y={y + hole} width={26} height={h / 2 - hole} fill={PLATE_FILL} stroke={INK} strokeWidth={3.5} />
		</g>
	);
};
export const gunPts = (x: number, y: number, h = 120, gap = 70) => ({cathode: [x + 17, y] as [number, number], anodeIn: [x + 34 + gap, y] as [number, number], exit: [x + 34 + gap + 26, y] as [number, number], cathodeTop: [x + 17, y - h * 0.32] as [number, number], anodeTop: [x + 34 + gap + 13, y - h / 2] as [number, number], cathodeBot: [x + 17, y + h * 0.32] as [number, number], anodeBot: [x + 34 + gap + 13, y + h / 2] as [number, number]});

// ---------------------------------------------------------------- a magnetic field region
/** A rectangle filled with a regular grid of crosses (field into the page). */
export const CrossRegion: React.FC<{x: number; y: number; w: number; h: number; step?: number; color?: string; opacity?: number; border?: boolean}> = ({x, y, w, h, step = 70, color = TONES.grey.stroke, opacity = 1, border = true}) => {
	const nx = Math.floor(w / step), ny = Math.floor(h / step);
	const ox = x + (w - (nx - 1) * step) / 2, oy = y + (h - (ny - 1) * step) / 2, c = 11;
	return (
		<g opacity={opacity}>
			{border ? <rect x={x} y={y} width={w} height={h} fill="none" stroke={color} strokeWidth={3} strokeDasharray="10 8" rx={8} /> : null}
			{Array.from({length: nx * ny}, (_, i) => { const cx = ox + (i % nx) * step, cy = oy + Math.floor(i / nx) * step; return <path key={i} d={`M${cx - c},${cy - c} L${cx + c},${cy + c} M${cx + c},${cy - c} L${cx - c},${cy + c}`} stroke={color} strokeWidth={3.5} strokeLinecap="round" />; })}
		</g>
	);
};

// ---------------------------------------------------------------- a slider control
/** A coded slider: track from x to x + w at y, knob at fraction `value`, label above the left end, tick labels under. */
export const Slider: React.FC<{x: number; y: number; w: number; value: number; color?: string; label?: React.ReactNode; ticks?: readonly [number, string][]; size?: number; opacity?: number}> = ({x, y, w, value, color = INK, label, ticks = [], size = 28, opacity = 1}) => {
	const v = Math.min(1, Math.max(0, value));
	return (
		<g opacity={opacity}>
			{label !== undefined ? <text x={x} y={y - 22} style={svgText(size + 2, color)}>{label}</text> : null}
			<line x1={x} y1={y} x2={x + w} y2={y} stroke={'#d8cfbd'} strokeWidth={10} strokeLinecap="round" />
			<line x1={x} y1={y} x2={x + w * v} y2={y} stroke={color} strokeWidth={10} strokeLinecap="round" />
			{ticks.map(([t, s], i) => <g key={i}><line x1={x + w * t} y1={y + 10} x2={x + w * t} y2={y + 20} stroke={INK_SOFT} strokeWidth={3} /><text x={x + w * t} y={y + 20 + size} textAnchor="middle" style={svgText(size, INK_SOFT, 700)}>{s}</text></g>)}
			<circle cx={x + w * v} cy={y} r={17} fill={CARD} stroke={color} strokeWidth={5} />
		</g>
	);
};

// ---------------------------------------------------------------- plate runs on the field motion engine
/**
 * A charge entering between plates of length L (m) at x = 0 on the axis y = 0 with speed vx, with acceleration
 * `ay` (m/s², up positive) only while 0 <= x <= L, then no force. Stops at a plate face (|y| >= halfGap) if given.
 */
export const plateRun = (o: {vx: number; ay: number; L: number; beyond?: number; halfGap?: number; vy?: number; steps?: number}): MotionPath => {
	const tIn = o.L / o.vx, tOut = (o.beyond ?? 0) / o.vx;
	return runMotion({
		field: {kind: 'custom', accel: x => [0, x >= 0 && x <= o.L ? o.ay : 0]},
		start: {x: 0, y: 0, vx: o.vx, vy: o.vy ?? 0},
		duration: tIn + tOut,
		steps: o.steps ?? 1600,
		stopWhen: o.halfGap === undefined ? undefined : s => Math.abs(s.y) >= o.halfGap!,
	});
};
/** A charge released from rest at one plate, accelerating at `a` (m/s²) across the gap d (m); y = distance travelled. */
export const crossRun = (a: number, d: number, steps = 600): MotionPath =>
	runMotion({field: {kind: 'uniform', ax: 0, ay: a}, start: {x: 0, y: 0, vx: 0, vy: 0}, duration: Math.sqrt((2 * d) / a), steps});

/** Opacity helper for parts that fade in at `at` and out at `out`. */
export const fadeIO = (f: number, at: number, out?: number, dur = 12) => prog(f, at, dur) * (out === undefined ? 1 : 1 - prog(f, out, dur));
export const useFade = (at: number, out?: number, dur = 12) => fadeIO(useCurrentFrame(), at, out, dur);
