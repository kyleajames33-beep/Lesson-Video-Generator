// Module 8 kit, part 11: fusion against repulsion (additive kit file, 26 November 2026; first used by phys-y12-m8-v19).
// Course-neutral: every label, number and colour of meaning comes from the lesson.
// - SepBox / sepX / sepY: a graph box with separation r (fm) from 0 to rMax across and a value range down the side.
// - SepAxes: axes, r ticks and titles for that box.
// - fnPath: the path of any y = fn(r) over a range of r, clipped to the box.
// - Hill: a schematic energy-against-separation curve, a Coulomb hill rising towards the contact distance rc and a deep
//   well inside it (heights in px, so the lesson labels it "schematic, not to scale"); hillY gives the curve's height
//   at r, so markers can ride it; hillR gives the outer r where the hill reaches a height (for a tunnelling path).
// - torusPt / HelixLines: points on a helical field line wound round a torus seen from above at an angle, for coded
//   field lines over a painted tokamak; the same function places a charge spiralling along a line.
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD, INK} from '../../shared/tokens';

const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color, paintOrder: 'stroke', stroke: CARD, strokeWidth: 6, strokeLinejoin: 'round'} as React.CSSProperties);

export type SepBox = {x: number; y: number; w: number; h: number; rMax: number; yMin: number; yMax: number};
export const sepX = (b: SepBox, r: number) => b.x + (r / b.rMax) * b.w;
export const sepY = (b: SepBox, v: number) => b.y + b.h - ((v - b.yMin) / (b.yMax - b.yMin)) * b.h;
export const SepAxes: React.FC<{b: SepBox; ticks?: readonly number[]; xTitle?: string; yTitle?: string; size?: number; zero?: boolean; opacity?: number}> = ({b, ticks = [0, 2, 4, 6, 8, 10], xTitle = 'separation r (fm)', yTitle = '', size = 28, zero = true, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const y0 = zero ? sepY(b, 0) : b.y + b.h;
	return (
		<g opacity={opacity}>
			<line x1={b.x} y1={b.y - 10} x2={b.x} y2={b.y + b.h} stroke={INK} strokeWidth={4} />
			<line x1={b.x} y1={y0} x2={b.x + b.w + 16} y2={y0} stroke={INK} strokeWidth={4} />
			{ticks.map(r => <g key={r}><line x1={sepX(b, r)} y1={y0} x2={sepX(b, r)} y2={y0 + 12} stroke={INK} strokeWidth={3} /><text x={sepX(b, r)} y={y0 + 14 + size} textAnchor="middle" style={T(size, INK, 700)}>{r}</text></g>)}
			{xTitle ? <text x={b.x + b.w + 16} y={y0 + 2 * size + 28} textAnchor="end" style={T(size, INK)}>{xTitle}</text> : null}
			{yTitle ? <text x={b.x + 12} y={b.y - 24} style={T(size, INK)}>{yTitle}</text> : null}
		</g>
	);
};
export const fnPath = (b: SepBox, fn: (r: number) => number, r0: number, r1: number, n = 120) => {
	const pts: string[] = [];
	for (let i = 0; i <= n; i++) {
		const r = r0 + ((r1 - r0) * i) / n, v = Math.max(b.yMin, Math.min(b.yMax, fn(r)));
		pts.push(`${pts.length ? 'L' : 'M'}${sepX(b, r).toFixed(1)},${sepY(b, v).toFixed(1)}`);
	}
	return pts.join(' ');
};

// ---------------------------------------------------------------- the schematic hill and valley
/** Hill geometry in screen px: the curve's zero line y0, hill top height `top` (px above y0) at x = xc, well floor
 *  `deep` px below y0 from x = xw0 to xw1 (inside xc), and the far right end x1 where the hill has almost gone. */
export type HillG = {x0: number; x1: number; xc: number; xw0: number; xw1: number; y0: number; top: number; deep: number; p?: number};
/** Screen y of the curve at screen x. Outside xc the hill falls as ((xc − x0)/(x − x0))^p: p = 1 is the true 1/r
 *  shape; a larger p is a compressed schematic (the lesson says so). */
export const hillY = (g: HillG, x: number) => {
	if (x >= g.xc) return g.y0 - g.top * ((g.xc - g.x0) / Math.max(1, x - g.x0)) ** (g.p ?? 1);
	if (x >= g.xw1) { const t = (x - g.xw1) / (g.xc - g.xw1); return g.y0 + g.deep - (g.deep + g.top) * t * t * (3 - 2 * t); }
	if (x >= g.xw0) return g.y0 + g.deep;
	return g.y0 + g.deep - Math.min(g.deep * 0.6, ((g.xw0 - x) / Math.max(1, g.xw0 - g.x0)) * g.deep * 0.6);
};
/** Screen x outside the top where the hill stands h px above the zero line. */
export const hillX = (g: HillG, h: number) => g.x0 + (g.xc - g.x0) * (g.top / Math.max(0.5, h)) ** (1 / (g.p ?? 1));
/** Screen x inside the top (on the steep inner side) where the curve stands h px above the zero line. */
export const hillXin = (g: HillG, h: number) => { let lo = g.xw1, hi = g.xc; for (let i = 0; i < 30; i++) { const m = (lo + hi) / 2; if (g.y0 - hillY(g, m) < h) lo = m; else hi = m; } return (lo + hi) / 2; };
export const hillPath = (g: HillG, n = 160) => Array.from({length: n + 1}, (_, i) => { const x = g.x0 + ((g.x1 - g.x0) * i) / n; return `${i ? 'L' : 'M'}${x.toFixed(1)},${hillY(g, x).toFixed(1)}`; }).join(' ');
export const Hill: React.FC<{g: HillG; hillFill?: string; wellFill?: string; shadeHill?: number; shadeWell?: number; color?: string; width?: number; flat?: boolean; opacity?: number}> = ({g, hillFill = '#f3c7c2', wellFill = '#cfd8ee', shadeHill = 0, shadeWell = 0, color = INK, width = 5, flat = false, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const yAt = (x: number) => (flat && x >= g.xc ? g.y0 : flat && x > g.xw1 ? Math.max(hillY(g, x), g.y0) : hillY(g, x));
	const path = Array.from({length: 161}, (_, i) => { const x = g.x0 + ((g.x1 - g.x0) * i) / 160; return `${i ? 'L' : 'M'}${x.toFixed(1)},${yAt(x).toFixed(1)}`; }).join(' ');
	const hillArea = `M${g.xw1},${g.y0} ` + Array.from({length: 81}, (_, i) => { const x = g.xw1 + ((g.x1 - g.xw1) * i) / 80; return `L${x.toFixed(1)},${Math.min(g.y0, yAt(x)).toFixed(1)}`; }).join(' ') + ` L${g.x1},${g.y0} Z`;
	const wellArea = `M${g.x0},${g.y0} ` + Array.from({length: 81}, (_, i) => { const x = g.x0 + ((g.xc - g.x0) * i) / 80; return `L${x.toFixed(1)},${Math.max(g.y0, yAt(x)).toFixed(1)}`; }).join(' ') + ` L${g.xc},${g.y0} Z`;
	return (
		<g opacity={opacity}>
			<line x1={g.x0} y1={g.y0} x2={g.x1 + 10} y2={g.y0} stroke={INK} strokeWidth={2.5} strokeDasharray="8 6" opacity={0.6} />
			{shadeHill > 0.001 && !flat ? <path d={hillArea} fill={hillFill} opacity={shadeHill} /> : null}
			{shadeWell > 0.001 ? <path d={wellArea} fill={wellFill} opacity={shadeWell} /> : null}
			<path d={path} fill="none" stroke={color} strokeWidth={width} strokeLinejoin="round" />
		</g>
	);
};

// ---------------------------------------------------------------- helical field lines round a torus
export type TorusG = {cx: number; cy: number; R: number; a: number; tilt: number};
/** Point at toroidal angle phi on a field line that winds `turns` times round the minor circle per circuit. */
export const torusPt = (g: TorusG, phi: number, turns: number, phase = 0): [number, number, number] => {
	const th = turns * phi + phase, rr = g.R + g.a * Math.cos(th);
	const x = g.cx + rr * Math.cos(phi), yFlat = rr * Math.sin(phi), z = g.a * Math.sin(th);
	return [x, g.cy + yFlat * g.tilt - z * Math.sqrt(1 - g.tilt * g.tilt), Math.sin(phi)];
};
/** Field lines drawn as short segments; segments on the far side (behind the plasma) are fainter. */
export const HelixLines: React.FC<{g: TorusG; turns: number; lines?: number; draw?: number; color: string; width?: number; opacity?: number}> = ({g, turns, lines = 2, draw = 1, color, width = 3.5, opacity = 1}) => {
	if (opacity <= 0.001 || draw <= 0.001) return null;
	const n = 360, segs: React.ReactNode[] = [];
	for (let l = 0; l < lines; l++) {
		for (let i = 0; i < n * draw; i++) {
			const p0 = (i / n) * Math.PI * 2, p1 = ((i + 1) / n) * Math.PI * 2;
			const [x0, y0, s0] = torusPt(g, p0, turns, (l * Math.PI * 2) / lines), [x1, y1] = torusPt(g, p1, turns, (l * Math.PI * 2) / lines);
			segs.push(<line key={`${l}-${i}`} x1={x0} y1={y0} x2={x1} y2={y1} stroke={color} strokeWidth={width} strokeLinecap="round" opacity={s0 < 0 ? 0.45 : 1} />);
		}
	}
	return <g opacity={opacity}>{segs}</g>;
};
