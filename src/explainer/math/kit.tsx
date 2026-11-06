import React from 'react';
import {useCurrentFrame} from 'remotion';
import {BLUE, FONT_DISPLAY, INK, INK_SOFT, prog} from '../kit';

// The explainer skills series uses this darker amber for small readable text.
export const MATH_ACCENT = '#8a5a12';

// Geometry for this pilot's square function. All plotted points and the tangent
// use the same mathematical functions as the displayed working.
export const square = (x: number) => x * x;
export const squareSlope = (x: number) => 2 * x;
export const tangentAt = (a: number, x: number) => square(a) + squareSlope(a) * (x - a);

const plot = {left: 92, top: 42, width: 620, height: 480, xMax: 4, yMax: 10};
export const graphPoint = (x: number, y: number) => ({
	x: plot.left + x / plot.xMax * plot.width,
	y: plot.top + plot.height - y / plot.yMax * plot.height,
});
// A quadratic Bezier represents y = x² exactly. Its control point is the
// intersection of the endpoint tangents, (2, 0), for endpoints (0, 0), (4, 16).
const start = graphPoint(0, 0), control = graphPoint(2, 0), end = graphPoint(4, 16);
const path = `M${start.x} ${start.y} Q${control.x} ${control.y} ${end.x} ${end.y}`;

const SvgLabel: React.FC<{x: number; y: number; children: React.ReactNode; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, children, size = 30, color = INK, anchor = 'start'}) =>
	<text x={x} y={y} fill={color} textAnchor={anchor} style={{fontFamily: FONT_DISPLAY, fontSize: size, fontWeight: 650}}>{children}</text>;

/** Axes, ticks and a readable origin, sized for a 1920 x 1080 frame. */
export const CoordinateAxes: React.FC = () => {
	const o = graphPoint(0, 0);
	return <g>
		{[0, 1, 2, 3, 4].map(x => { const p = graphPoint(x, 0); return <g key={x}><line x1={p.x} x2={p.x} y1={plot.top} y2={o.y} stroke="#dcd3c3" strokeWidth={2} /><line x1={p.x} x2={p.x} y1={o.y} y2={o.y + 10} stroke={INK} strokeWidth={3} /><SvgLabel x={p.x} y={o.y + 45} anchor="middle" size={32}>{x}</SvgLabel></g>; })}
		{[2, 4, 6, 8, 10].map(y => { const p = graphPoint(0, y); return <g key={y}><line x1={o.x} x2={graphPoint(4, 0).x} y1={p.y} y2={p.y} stroke="#e2d9c9" strokeWidth={2} /><line x1={o.x - 10} x2={o.x} y1={p.y} y2={p.y} stroke={INK} strokeWidth={3} /><SvgLabel x={o.x - 21} y={p.y + 10} anchor="end" size={32}>{y}</SvgLabel></g>; })}
		<path d={`M${o.x} ${plot.top - 16} V${o.y} H${graphPoint(4, 0).x + 24}`} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" />
		<SvgLabel x={graphPoint(4, 0).x + 35} y={o.y + 10} size={35}>x</SvgLabel>
		<SvgLabel x={o.x - 9} y={plot.top - 25} size={35}>y</SvgLabel>
	</g>;
};

/** Exact moving tangent. The fixed rise/run demonstration is valid only at a = 2. */
export const SquareGraph: React.FC<{a: number; showRise: boolean}> = ({a, showRise}) => {
	if (showRise && a !== 2) throw new RangeError('SquareGraph rise/run demonstration requires a = 2.');
	const f = useCurrentFrame();
	const p = graphPoint(a, square(a));
	const lineStart = graphPoint(0.75, tangentAt(a, 0.75));
	const lineEnd = graphPoint(3.2, tangentAt(a, 3.2));
	const q = graphPoint(3, tangentAt(2, 3));
	const corner = graphPoint(3, square(2));
	return <svg width="790" height="665" viewBox="0 0 790 665" role="img" aria-label="Graph of y equals x squared with a moving point and its tangent. At x equals 2, the tangent rises 4 for a run of 1.">
		<defs><clipPath id="math-pilot-plot"><rect x={plot.left} y={plot.top} width={plot.width} height={plot.height} /></clipPath></defs>
		<CoordinateAxes />
		<path d={path} clipPath="url(#math-pilot-plot)" fill="none" stroke={BLUE} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
		<SvgLabel x={220} y={110} size={37} color={BLUE}>y = x²</SvgLabel>
		<line clipPath="url(#math-pilot-plot)" x1={lineStart.x} y1={lineStart.y} x2={lineEnd.x} y2={lineEnd.y} stroke={MATH_ACCENT} strokeWidth={6} strokeLinecap="round" opacity={prog(f, 18, 20)} />
		<circle cx={p.x} cy={p.y} r={14} fill={MATH_ACCENT} stroke="#fffaf2" strokeWidth={5} />
		{showRise && <g opacity={prog(f, 130, 16)}>
			<circle cx={q.x} cy={q.y} r={9} fill={MATH_ACCENT} />
			<path d={`M${p.x} ${p.y} H${corner.x} V${q.y}`} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="9 8" />
			<SvgLabel x={(p.x + corner.x) / 2} y={p.y + 43} anchor="middle" size={34}>run = 1</SvgLabel>
			<SvgLabel x={corner.x + 18} y={(corner.y + q.y) / 2 + 8} size={34}>rise = 4</SvgLabel>
		</g>}
		{a === 2 && <SvgLabel x={p.x - 16} y={p.y - 26} anchor="end" size={36} color={MATH_ACCENT}>(2, 4)</SvgLabel>}
		<line x1={92} x2={142} y1={615} y2={615} stroke={MATH_ACCENT} strokeWidth={6} />
		<SvgLabel x={158} y={625} size={33} color={MATH_ACCENT}>tangent{a === 2 ? ': y = 4x − 4' : ''}</SvgLabel>
	</svg>;
};

export * from './algebra';
export * from './curve-layers';
export * from './lesson-parts';
export * from './graphs';

export * from './reflection';

export * from './strand-parts';

export * from './brief143-parts';
