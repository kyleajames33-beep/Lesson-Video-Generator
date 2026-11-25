// Current-carrying wire kit for Module 6 (additive kit file, 25 November 2026; first used by phys-y12-m6-v07 and v08,
// offered to the rest of Module 6). Course-neutral: labels, numbers and colours of meaning come from the lesson.
//   - an end-on wire (HSC style: a circle with a dot for current out of the page, a cross for into the page);
//   - field circles round a wire with tangent arrowheads (anticlockwise or clockwise as seen on the page);
//   - a zoomed band of a metal: fixed positive ions in a lattice and drifting electrons, each electron able to carry
//     a small force arrow and to bunch towards one edge (the motor effect's microscopic picture);
//   - a straight current arrow along any direction and its split into across-field and along-field parts.
import React from 'react';
import {CARD, INK} from '../../shared/tokens';
import {Arrow2} from './magnetic';

/** A wire seen end-on: radius r, a dot (current out of the page) or a cross (into the page). */
export const EndOnWire: React.FC<{cx: number; cy: number; r?: number; dir: 'out' | 'in'; color?: string; fill?: string; opacity?: number}> = ({cx, cy, r = 50, dir, color = '#c46a1c', fill = '#f6dcc0', opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const k = r * 0.48;
	return (
		<g opacity={opacity}>
			<circle cx={cx} cy={cy} r={r} fill={fill} stroke={color} strokeWidth={Math.max(4, r * 0.1)} />
			{dir === 'out' ? <circle cx={cx} cy={cy} r={r * 0.2} fill={INK} /> : <path d={`M${cx - k},${cy - k} L${cx + k},${cy + k} M${cx + k},${cy - k} L${cx - k},${cy + k}`} stroke={INK} strokeWidth={Math.max(4, r * 0.12)} strokeLinecap="round" />}
		</g>
	);
};

/**
 * Field circles round a wire at (cx, cy): one circle per radius, each with arrowheads at `heads` angles (degrees,
 * measured anticlockwise from the right as seen on the page). `sense` 'ccw' runs anticlockwise on the page (current
 * out of the page), 'cw' clockwise (into the page). `grow` 0 to 1 draws each circle round from angle 0.
 */
export const FieldCircles: React.FC<{cx: number; cy: number; radii: readonly number[]; sense: 'ccw' | 'cw'; color: string; width?: number; heads?: readonly number[]; head?: number; grow?: number; opacity?: number; dash?: string}> = ({cx, cy, radii, sense, color, width = 4, heads = [90, 270], head = 18, grow = 1, opacity = 1, dash}) => {
	if (opacity <= 0.001 || grow <= 0.001) return null;
	const sg = sense === 'ccw' ? 1 : -1;
	return (
		<g opacity={opacity}>
			{radii.map((R, i) => {
				const span = Math.min(1, grow) * 2 * Math.PI;
				const n = 72, pts = Array.from({length: n + 1}, (_, k) => { const a = sg * (span * k) / n; return `${(cx + R * Math.cos(a)).toFixed(1)},${(cy - R * Math.sin(a)).toFixed(1)}`; });
				return (
					<g key={i}>
						<polyline points={pts.join(' ')} fill="none" stroke={color} strokeWidth={width} strokeDasharray={dash} />
						{grow >= 0.98 ? heads.map(hd => {
							const a = (hd * Math.PI) / 180, px = cx + R * Math.cos(a), py = cy - R * Math.sin(a);
							const tx = -sg * Math.sin(a), ty = -sg * Math.cos(a);
							return <path key={hd} d={`M${px + tx * head * 0.7},${py + ty * head * 0.7} L${px - tx * head * 0.5 - ty * head * 0.55},${py - ty * head * 0.5 + tx * head * 0.55} L${px - tx * head * 0.5 + ty * head * 0.55},${py - ty * head * 0.5 - tx * head * 0.55} Z`} fill={color} />;
						}) : null}
					</g>
				);
			})}
		</g>
	);
};

/**
 * A zoomed band of metal from x1 to x2 centred on y (height h): fixed positive ions in two staggered rows and a row of
 * electrons drifting by `phase` px (negative drifts left). `push` 0 to 1 grows a small force arrow on each electron
 * (length `pushLen`, pointing up the page when positive), `bunch` 0 to 1 moves the electrons towards that edge.
 */
export const ChargeBand: React.FC<{x1: number; x2: number; y: number; h: number; phase: number; step?: number; push?: number; pushLen?: number; bunch?: number; ionColor?: string; eColor?: string; forceColor: string; opacity?: number}> = ({x1, x2, y, h, phase, step = 120, push = 0, pushLen = 52, bunch = 0, ionColor = '#b9a7c9', eColor = '#5d6670', forceColor, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const n = Math.floor((x2 - x1) / step), span = n * step;
	const ions: [number, number][] = [];
	for (let i = 0; i < n; i++) { ions.push([x1 + step / 2 + i * step, y - h * 0.27]); ions.push([x1 + step + i * step - (i === n - 1 ? step / 2 : 0), y + h * 0.27]); }
	const ey = y - Math.sign(pushLen) * bunch * h * 0.18;
	const es = Array.from({length: n}, (_, i) => x1 + step / 2 + ((((i * step + phase) % span) + span) % span));
	const ir = h * 0.12, er = h * 0.1;
	/** Signs are drawn as strokes (not text), so they stay crisp at any zoom. */
	const txt = (x: number, yy: number, s: number, c: string, t: string) => <path d={`M${x - s * 0.32},${yy} L${x + s * 0.32},${yy}${t === '+' ? ` M${x},${yy - s * 0.32} L${x},${yy + s * 0.32}` : ''}`} stroke={c} strokeWidth={Math.max(2, s * 0.14)} strokeLinecap="round" />;
	return (
		<g opacity={opacity}>
			{ions.map(([x, yy], i) => <g key={`i${i}`}><circle cx={x} cy={yy} r={ir} fill="#efe6f5" stroke={ionColor} strokeWidth={3} />{txt(x, yy, ir * 1.5, '#6c5a80', '+')}</g>)}
			{es.map((x, i) => (
				<g key={`e${i}`}>
					<circle cx={x} cy={ey} r={er} fill={CARD} stroke={eColor} strokeWidth={3} />
					{txt(x, ey, er * 1.6, eColor, '−')}
					{push > 0.01 ? <Arrow2 from={[x, ey - Math.sign(pushLen) * (er + 4)]} to={[x, ey - Math.sign(pushLen) * (er + 4) - pushLen * push]} color={forceColor} width={4} head={14} /> : null}
				</g>
			))}
		</g>
	);
};

/** A current arrow from (x, y) of length `len` at screen angle `deg` (0 = right, anticlockwise positive). */
export const CurrentArrow: React.FC<{x: number; y: number; len: number; deg: number; color: string; width?: number; head?: number; opacity?: number; dash?: string}> = ({x, y, len, deg, color, width = 7, head = 24, opacity = 1, dash}) => {
	const a = (deg * Math.PI) / 180;
	return <Arrow2 from={[x, y]} to={[x + len * Math.cos(a), y - len * Math.sin(a)]} color={color} width={width} head={head} opacity={opacity} dash={dash} />;
};
