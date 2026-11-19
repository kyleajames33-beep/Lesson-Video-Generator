// Drawing parts for Y11 Chem M1 V05. Reuses the M1 V01 to V04 parts (text, chips, readouts, plates, pen marks, the
// handoff strip). New here: the developing strip (one clock: the solvent front and every spot obey
// spot height = Rf x front distance, read at every frame), a vertical dimension line with a value, a crosshair and
// the painted jar drawn as two layers with the coded strip and solvent between them.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {INK, Plate, Sx, plateMap, prog} from '../chem-y11-m1-v04/parts';
import {JAR_B, JAR_F} from './common';

export * from '../chem-y11-m1-v04/parts';

export const SLATE_INK = '#4f5966'; // stationary phase, "stuck"
export const RF_INK = '#9c5a00'; // the Rf result (amber)

export type Spot = {c: string; rf: number; label?: string};
/** Developing strip. `travel` is the solvent front's distance above the baseline in px (0 = not started).
 *  `base` is the baseline's height above the strip's bottom edge. Spots sit at rf x travel above the baseline;
 *  `sep` (0..1) blends them from the dot to their places (they start merged). */
export const DevStrip: React.FC<{x: number; y: number; w: number; h: number; base: number; travel: number; spots: Spot[]; dot?: string; sep?: number; tint?: boolean; spotR?: number; frontLine?: boolean; o?: number}> = ({x, y, w, h, base, travel, spots, dot = '#1d1b1a', sep, tint = true, spotR = 15, frontLine = false, o = 1}) => {
	const by = y + h - base;
	const fy = by - travel;
	const s = sep ?? (travel > 6 ? 1 : 0);
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} rx={4} fill="#ffffff" stroke="#8a8378" strokeWidth={3} />
			{tint && travel > 0 ? <rect x={x + 2} y={fy} width={w - 4} height={y + h - fy - 2} fill="rgba(120,170,220,0.22)" /> : null}
			{tint && travel > 0 ? <line x1={x + 2} x2={x + w - 2} y1={fy} y2={fy} stroke="#5b8fc2" strokeWidth={3} /> : null}
			{frontLine ? <line x1={x + 2} x2={x + w - 2} y1={fy} y2={fy} stroke="#4a4642" strokeWidth={3} strokeDasharray="8 6" /> : null}
			<line x1={x + 8} x2={x + w - 8} y1={by} y2={by} stroke="#4a4642" strokeWidth={3.5} />
			{s < 1 ? <circle cx={x + w / 2} cy={by} r={spotR - 1} fill={dot} opacity={1 - s} /> : null}
			{spots.map((p, i) => {
				const cy = by - p.rf * travel * s;
				return <ellipse key={i} cx={x + w / 2} cy={cy} rx={spotR} ry={spotR * (0.85 + 0.25 * s)} fill={p.c} opacity={0.35 + 0.65 * s} stroke="rgba(30,30,30,0.35)" strokeWidth={1.5} />;
			})}
		</g>
	);
};
/** Spot centre y on a strip. */
export const spotY = (y: number, h: number, base: number, travel: number, rf: number) => y + h - base - rf * travel;

/** Vertical dimension line from y0 (bottom) to y1 (top) at x, with a value label beside it. */
export const Dim: React.FC<{x: number; y0: number; y1: number; at: number; label?: string; color?: string; side?: 'left' | 'right'; size?: number; out?: number; dashed?: boolean}> = ({x, y0, y1, at, label, color = INK, side = 'right', size = 34, out, dashed}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 10) * (out === undefined ? 1 : 1 - prog(f, out, 10));
	if (o <= 0.01) return null;
	const p = prog(f, at, 18);
	const yt = y0 + (y1 - y0) * p;
	return (
		<g opacity={o}>
			<line x1={x} x2={x} y1={y0} y2={yt} stroke={color} strokeWidth={4} strokeDasharray={dashed ? '10 7' : undefined} />
			<line x1={x - 12} x2={x + 12} y1={y0} y2={y0} stroke={color} strokeWidth={4} />
			{p > 0.98 ? <path d={`M${x - 12},${y1} L${x + 12},${y1} M${x - 9},${y1 + 14} L${x},${y1} L${x + 9},${y1 + 14}`} fill="none" stroke={color} strokeWidth={4} /> : null}
			{label ? <Sx x={side === 'right' ? x + 18 : x - 18} y={(y0 + y1) / 2 + size * 0.35} text={label} size={size} color={color} anchor={side === 'right' ? 'start' : 'end'} weight={800} at={at + 10} /> : null}
		</g>
	);
};
/** Small crosshair. */
export const Cross: React.FC<{x: number; y: number; at: number; color?: string}> = ({x, y, at, color = INK}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 10);
	return o > 0.01 ? <g opacity={o}><line x1={x - 22} x2={x + 22} y1={y} y2={y} stroke={color} strokeWidth={3} /><line x1={x} x2={x} y1={y - 22} y2={y + 22} stroke={color} strokeWidth={3} /></g> : null;
};

/** The jar (two painted layers) at (x, y) with height h; children (strip, solvent) go between the layers. */
export const jarGeo = (x: number, y: number, h: number) => {
	const m = plateMap(JAR_B, x, y, h);
	return {...m, cx: m.X(463), inL: m.X(185), inR: m.X(742), bot: m.Y(1388), lidTop: m.Y(310), lidBot: m.Y(440), lidC: [m.X(463), m.Y(370)] as [number, number]};
};
export const Jar: React.FC<{x: number; y: number; h: number; o?: number; front?: number; children?: React.ReactNode}> = ({x, y, h, o = 1, front = 1, children}) => (
	<g opacity={o}>
		<Plate p={JAR_B} x={x} y={y} h={h} />
		{children}
		<Plate p={JAR_F} x={x} y={y} h={h} o={front} />
	</g>
);
/** Solvent layer in the jar, up to height lvl px above the jar's inside bottom. */
export const Solvent: React.FC<{g: ReturnType<typeof jarGeo>; lvl: number; o?: number}> = ({g, lvl, o = 1}) => (o > 0.01 && lvl > 0 ? <g opacity={o}><rect x={g.inL + 4} y={g.bot - lvl} width={g.inR - g.inL - 8} height={lvl} fill="rgba(120,170,220,0.45)" /><line x1={g.inL + 4} x2={g.inR - 4} y1={g.bot - lvl} y2={g.bot - lvl} stroke="#4a7aa5" strokeWidth={3} /></g> : null);
