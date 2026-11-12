// Drawing part for the magnetic field engine (magnetic-field.ts): field lines with arrows,
// the sources in exam-paper symbols (a bar with two ends, a wire end-on as a dot or a cross,
// a loop or solenoid cut through as a row of dots and a row of crosses) and compass needles
// that point along the field where they sit. Trace the lines once, outside the component,
// and pass them in. Labels come from the lesson. Sizes and colours come from tokens.ts.
import React from 'react';
import {FONT_DISPLAY} from '../kit';
import {CARD, INK, TYPE, Tone, ToneName, tone} from '../shared/tokens';
import {Bounds, FieldLine, MagnetSource, compassAngle} from './magnetic-field';

/** Where the slice of the world sits in the frame. The scale is the same both ways, so shapes are true. */
export type FieldStage = {x: number; y: number; w: number; h: number; world: Bounds};
export const fieldScale = (s: FieldStage) => {
	const {x0, x1, y0, y1} = s.world, k = Math.min(s.w / (x1 - x0), s.h / (y1 - y0));
	const ox = s.x + (s.w - k * (x1 - x0)) / 2, oy = s.y + (s.h - k * (y1 - y0)) / 2;
	return {k, X: (wx: number) => ox + (wx - x0) * k, Y: (wy: number) => oy + (y1 - wy) * k};
};
export type CompassSpec = {x: number; y: number; label?: string};

const Cross: React.FC<{cx: number; cy: number; r: number; out: boolean; c: Tone}> = ({cx, cy, r, out, c}) => {
	const d = r * 0.5;
	return (
		<g>
			<circle cx={cx} cy={cy} r={r} fill={CARD} stroke={c.stroke} strokeWidth={5} />
			{out ? <circle cx={cx} cy={cy} r={r * 0.28} fill={c.stroke} /> : <path d={`M${cx - d},${cy - d} L${cx + d},${cy + d} M${cx - d},${cy + d} L${cx + d},${cy - d}`} stroke={c.stroke} strokeWidth={5} strokeLinecap="round" />}
		</g>
	);
};

/**
 * The field picture. `reveal` (0 to 1) draws each line part-way, for a line that grows.
 * A compass needle's coloured half points the way the field points at its centre.
 */
export const MagneticFieldView: React.FC<{
	sources: readonly MagnetSource[]; lines: readonly FieldLine[]; stage: FieldStage;
	tone?: ToneName | Tone; currentTone?: ToneName | Tone;
	/** Letters written on a bar magnet's two ends. Left out, the ends are coloured only. */
	poles?: {north: string; south: string};
	northTone?: ToneName | Tone; southTone?: ToneName | Tone;
	compasses?: readonly CompassSpec[]; compassSize?: number;
	/** Distance in px between arrowheads along a line (default 190). */
	arrowGap?: number;
	reveal?: number; lineWidth?: number; opacity?: number;
}> = ({sources, lines, stage, tone: lineTone = 'cool', currentTone = 'amber', poles, northTone = 'red', southTone = 'blue', compasses = [], compassSize = 38, arrowGap = 190, reveal = 1, lineWidth = 4, opacity = 1}) => {
	const {k, X, Y} = fieldScale(stage), lt = tone(lineTone), ct = tone(currentTone), nt = tone(northTone), st = tone(southTone);
	const text: React.CSSProperties = {fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: TYPE.support};
	const drawn = lines.map((line, i) => {
		const pts = line.points.map(([wx, wy]) => [X(wx), Y(wy)] as [number, number]);
		if (pts.length < 2) return null;
		const cum = [0];
		for (let j = 1; j < pts.length; j++) cum.push(cum[j - 1] + Math.hypot(pts[j][0] - pts[j - 1][0], pts[j][1] - pts[j - 1][1]));
		const total = cum[cum.length - 1], shown = total * Math.min(1, Math.max(0, reveal));
		let d = '';
		for (let j = 0; j < pts.length && cum[j] <= shown; j++) d += `${j ? 'L' : 'M'}${pts[j][0].toFixed(1)},${pts[j][1].toFixed(1)} `;
		if (line.closed && reveal >= 1) d += 'Z';
		const heads: React.ReactNode[] = [], count = Math.max(1, Math.round(total / arrowGap)), gap = total / count;
		for (let a = 0, j = 1; a < count; a++) {
			const at = gap * (a + 0.5);
			if (at > shown) break;
			while (j < pts.length - 1 && cum[j] < at) j++;
			const [ax, ay] = pts[j - 1], [bx, by] = pts[j], ang = Math.atan2(by - ay, bx - ax), u = (at - cum[j - 1]) / Math.max(1e-9, cum[j] - cum[j - 1]);
			const hx = ax + (bx - ax) * u, hy = ay + (by - ay) * u, wing = (da: number) => `${(hx - 20 * Math.cos(ang + da)).toFixed(1)},${(hy - 20 * Math.sin(ang + da)).toFixed(1)}`;
			heads.push(<polygon key={a} points={`${(hx + 8 * Math.cos(ang)).toFixed(1)},${(hy + 8 * Math.sin(ang)).toFixed(1)} ${wing(0.5)} ${wing(-0.5)}`} fill={lt.stroke} />);
		}
		return <g key={i}><path d={d} fill="none" stroke={lt.stroke} strokeWidth={lineWidth} strokeLinecap="round" strokeLinejoin="round" />{heads}</g>;
	});
	const symbols = sources.map((s, i) => {
		if (s.kind === 'uniform') return null;
		const cx = X(s.x), cy = Y(s.y);
		if (s.kind === 'wire') return <Cross key={i} cx={cx} cy={cy} r={22} out={s.current >= 0} c={ct} />;
		const deg = (-(s.angle ?? 0) * 180) / Math.PI;
		if (s.kind === 'bar') {
			const L = s.length * k, W = (s.width ?? s.length / 4) * k;
			return (
				<g key={i} transform={`translate(${cx},${cy}) rotate(${deg})`}>
					<rect x={-L / 2} y={-W / 2} width={L / 2} height={W} fill={st.soft} />
					<rect x={0} y={-W / 2} width={L / 2} height={W} fill={nt.soft} />
					<rect x={-L / 2} y={-W / 2} width={L} height={W} fill="none" stroke={INK} strokeWidth={5} strokeLinejoin="round" />
					<line x1={0} y1={-W / 2} x2={0} y2={W / 2} stroke={INK} strokeWidth={3} />
					{poles ? <>
						<text transform={`translate(${L / 4},0) rotate(${-deg})`} y={11} textAnchor="middle" style={text} fill={nt.ink}>{poles.north}</text>
						<text transform={`translate(${-L / 4},0) rotate(${-deg})`} y={11} textAnchor="middle" style={text} fill={st.ink}>{poles.south}</text>
					</> : null}
				</g>
			);
		}
		// Loop or solenoid, cut through by the page: each turn shows as a dot on one side and a cross on the other.
		const R = s.radius * k, len = s.kind === 'solenoid' ? s.length * k : 0, n = s.kind === 'solenoid' ? Math.max(2, Math.min(Math.round(s.turns), Math.round(len / 50))) : 1;
		const out = s.current >= 0, r = s.kind === 'solenoid' ? Math.min(18, (len / n) * 0.42) : 20;
		return (
			<g key={i} transform={`translate(${cx},${cy}) rotate(${deg})`}>
				{s.kind === 'solenoid' ? <rect x={-len / 2 - r} y={-R} width={len + 2 * r} height={2 * R} fill="none" stroke={ct.stroke} strokeWidth={2.5} strokeDasharray="8 10" opacity={0.7} /> : <line x1={0} y1={-R} x2={0} y2={R} stroke={ct.stroke} strokeWidth={2.5} strokeDasharray="8 10" opacity={0.7} />}
				{Array.from({length: n}, (_, j) => {
					const u = n === 1 ? 0 : -len / 2 + (len * (j + 0.5)) / n;
					// In the drawing, up the screen is the side a quarter turn anticlockwise from the axis: current comes out there when it is positive.
					return <g key={j}><Cross cx={u} cy={-R} r={r} out={out} c={ct} /><Cross cx={u} cy={R} r={r} out={!out} c={ct} /></g>;
				})}
			</g>
		);
	});
	const needles = compasses.map((c, i) => {
		const cx = X(c.x), cy = Y(c.y), deg = (-compassAngle(sources, c.x, c.y) * 180) / Math.PI, r = compassSize;
		return (
			<g key={i}>
				<circle cx={cx} cy={cy} r={r} fill={CARD} stroke={INK} strokeWidth={4} />
				<g transform={`translate(${cx},${cy}) rotate(${deg})`}>
					<polygon points={`${r * 0.82},0 0,${r * 0.24} 0,${-r * 0.24}`} fill={nt.stroke} />
					<polygon points={`${-r * 0.82},0 0,${r * 0.24} 0,${-r * 0.24}`} fill={INK} opacity={0.55} />
					<circle r={4} fill={CARD} stroke={INK} strokeWidth={2} />
				</g>
				{c.label ? <text x={cx} y={cy + r + 36} textAnchor="middle" style={text} fill={INK} stroke={CARD} strokeWidth={7} paintOrder="stroke">{c.label}</text> : null}
			</g>
		);
	});
	return (
		<svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, overflow: 'visible', opacity}}>
			{drawn}
			{symbols}
			{needles}
		</svg>
	);
};
