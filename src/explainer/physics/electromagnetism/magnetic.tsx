// Magnetic field kit (additive kit file, 25 November 2026; first used by phys-y12-m6-v04 to v06, offered to the
// rest of Module 6). Course-neutral: every label, number and colour of meaning is passed in by the lesson.
//   - a simple 3D camera (`project`) for coded oblique views: tilt 0 faces the page (a field into the page is a
//     grid of crosses), tilt 1 looks across the field (the same field lines are parallel arrows running down);
//   - the 3D field box (kit gap 4): box edges, field arrows, and the cross or dot symbols they collapse to;
//   - an arrow in 3D (`Arrow3`), the axis triad (three labelled perpendicular arrows that rotate together; no hand),
//     a right-angle mark, an end-on arrow (feathers become a cross, the tip becomes a dot);
//   - flat dot regions (field out of the page) to sit beside the kit's cross regions;
//   - the painted horseshoe magnet placed by its pole faces (uniform scale only);
//   - a slit barrier, and a straight wire with drifting charges (the current panel offered to v07).
// Horseshoe plate anchors (y12p-horseshoe-magnet-v1.png, 1341 x 1173, sidecar json): gap rectangle (440, 519) to
// (1144, 714), so the pole faces are the lines y 519 (upper, north, red) and y 714 (lower, south, grey), centre x 792.
import React from 'react';
import {staticFile} from 'remotion';
import {FONT_DISPLAY} from '../../kit';
import {CARD, INK, TONES} from '../../shared/tokens';

export const HORSESHOE_SRC = 'assets/physics/y12p-horseshoe-magnet-v1.png';
export const MAG_PLATES = [HORSESHOE_SRC];

const sm = (a: number, b: number, t: number) => { const u = Math.min(1, Math.max(0, (t - a) / (b - a))); return u * u * (3 - 2 * u); };

// ---------------------------------------------------------------- the painted horseshoe magnet
/** Placement of the horseshoe plate so its pole faces are the lines y = top and y = bot, centred on x. */
export const horseshoeAt = (x: number, top: number, bot: number) => {
	const s = (bot - top) / (714 - 519);
	return {s, ix: x - 792 * s, iy: top - 519 * s, W: 1341 * s, H: 1173 * s, gapL: x - 352 * s, gapR: x + 352 * s, left: x - 614 * s, right: x + 360 * s, upper: top - 217 * s, lower: bot + 185 * s};
};
export const Horseshoe: React.FC<{x: number; top: number; bot: number; opacity?: number}> = ({x, top, bot, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const h = horseshoeAt(x, top, bot);
	return <image href={staticFile(HORSESHOE_SRC)} x={h.ix} y={h.iy} width={h.W} height={h.H} opacity={opacity} />;
};

// ---------------------------------------------------------------- the 3D camera
/** World: x right, y up the page, z out of the page (px units times k). tilt 0 faces the page; tilt 1 is turned by `maxDeg`. */
export type Cam = {cx: number; cy: number; k: number; tilt: number; maxDeg?: number; depthX?: number; depthY?: number};
export type V3 = readonly [number, number, number];
export const project = (c: Cam, p: V3): [number, number] => {
	const phi = (c.tilt * (c.maxDeg ?? 90) * Math.PI) / 180;
	const [x, y, z] = p;
	const up = y * Math.cos(phi) + z * Math.sin(phi);
	const depth = y * Math.sin(phi) - z * Math.cos(phi);
	const sh = Math.sin(phi);
	return [c.cx + c.k * (x + (c.depthX ?? 0.55) * sh * depth), c.cy - c.k * (up + (c.depthY ?? 0.3) * sh * depth)];
};
export const lerpCam = (a: Cam, b: Cam, t: number): Cam => ({...a, cx: a.cx + (b.cx - a.cx) * t, cy: a.cy + (b.cy - a.cy) * t, k: a.k + (b.k - a.k) * t, tilt: a.tilt + (b.tilt - a.tilt) * t});
export const add3 = (a: V3, b: V3, s = 1): V3 => [a[0] + b[0] * s, a[1] + b[1] * s, a[2] + b[2] * s];

/** A flat 2D arrow between two screen points (shaft and solid or dashed head). */
export const Arrow2: React.FC<{from: [number, number]; to: [number, number]; color: string; width?: number; head?: number; dash?: string; opacity?: number}> = ({from, to, color, width = 6, head = 20, dash, opacity = 1}) => {
	const [x1, y1] = from, [x2, y2] = to;
	const L = Math.hypot(x2 - x1, y2 - y1);
	if (L < 2 || opacity <= 0.001) return null;
	const ux = (x2 - x1) / L, uy = (y2 - y1) / L, h = Math.min(head, L * 0.55);
	return (
		<g opacity={opacity}>
			<line x1={x1} y1={y1} x2={x2 - ux * h * 0.6} y2={y2 - uy * h * 0.6} stroke={color} strokeWidth={width} strokeLinecap="round" strokeDasharray={dash} />
			<path d={`M${x2},${y2} L${x2 - ux * h - uy * h * 0.5},${y2 - uy * h + ux * h * 0.5} L${x2 - ux * h + uy * h * 0.5},${y2 - uy * h - ux * h * 0.5} Z`} fill={dash ? CARD : color} stroke={color} strokeWidth={dash ? 3 : 0} strokeLinejoin="round" />
		</g>
	);
};
/** An arrow in world space from p by vector d, projected with the camera. */
export const Arrow3: React.FC<{cam: Cam; p: V3; d: V3; color: string; width?: number; head?: number; dash?: string; opacity?: number}> = ({cam, p, d, ...rest}) => <Arrow2 from={project(cam, p)} to={project(cam, add3(p, d))} {...rest} />;

/** The symbol for a field line seen end-on: a cross (into the page) or a dot (out of the page). */
export const FieldSymbol: React.FC<{x: number; y: number; dir: 'in' | 'out'; size?: number; color?: string; opacity?: number; ring?: boolean}> = ({x, y, dir, size = 11, color = TONES.grey.stroke, opacity = 1, ring = false}) => {
	if (opacity <= 0.001) return null;
	return (
		<g opacity={opacity}>
			{ring ? <circle cx={x} cy={y} r={size * 1.9} fill={CARD} stroke={color} strokeWidth={3.5} /> : null}
			{dir === 'in' ? <path d={`M${x - size},${y - size} L${x + size},${y + size} M${x + size},${y - size} L${x - size},${y + size}`} stroke={color} strokeWidth={3.5} strokeLinecap="round" /> : <circle cx={x} cy={y} r={size * 0.5} fill={color} />}
		</g>
	);
};

/**
 * The 3D field box: a box of half-sizes (hx, hy, hz), field lines along z through a grid of (x, y) points. Seen
 * face-on (tilt 0) the lines are crosses (`dir` 'in') or dots ('out'); as the camera turns they open into arrows.
 * `arrowRows`/`arrowCols` pick the lines drawn as arrows; `crossStep` sets the face-on grid spacing.
 */
export const FieldBox3D: React.FC<{cam: Cam; hx: number; hy: number; hz: number; dir?: 'in' | 'out'; crossStep?: number; arrowCols?: number; arrowRows?: number; color?: string; edges?: number; opacity?: number; arrowInset?: number}> = ({cam, hx, hy, hz, dir = 'in', crossStep = 80, arrowCols = 5, arrowRows = 3, color = TONES.grey.stroke, edges, opacity = 1, arrowInset = 0.82}) => {
	if (opacity <= 0.001) return null;
	const crossO = 1 - sm(0.04, 0.3, cam.tilt), arrowO = sm(0.1, 0.4, cam.tilt), edgeO = edges ?? 1;
	const nx = Math.floor((2 * hx) / crossStep), ny = Math.floor((2 * hy) / crossStep);
	const ox = -((nx - 1) * crossStep) / 2, oy = -((ny - 1) * crossStep) / 2;
	const zs = dir === 'in' ? [hz, -hz] : [-hz, hz];
	const corners: V3[] = [];
	for (const x of [-hx, hx]) for (const y of [-hy, hy]) for (const z of [-hz, hz]) corners.push([x, y, z]);
	const edgesList: [number, number][] = [];
	corners.forEach((a, i) => corners.forEach((b, j) => { if (j > i && [0, 1, 2].filter(k => a[k] !== b[k]).length === 1) edgesList.push([i, j]); }));
	const lines: React.ReactNode[] = [];
	for (let r = 0; r < arrowRows; r++) for (let c = 0; c < arrowCols; c++) {
		const x = arrowCols === 1 ? 0 : -hx * arrowInset + (2 * hx * arrowInset * c) / (arrowCols - 1);
		const y = arrowRows === 1 ? 0 : hy * arrowInset - (2 * hy * arrowInset * r) / (arrowRows - 1);
		const a = project(cam, [x, y, zs[0]]), b = project(cam, [x, y, zs[1]]);
		const m: [number, number] = [(a[0] + b[0]) / 2 + (b[0] - a[0]) * 0.12, (a[1] + b[1]) / 2 + (b[1] - a[1]) * 0.12];
		lines.push(<g key={`${r}-${c}`}><line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={color} strokeWidth={4} strokeLinecap="round" /><Arrow2 from={a} to={m} color={color} width={0.01} head={20} /></g>);
	}
	return (
		<g opacity={opacity}>
			<g opacity={edgeO}>{edgesList.map(([i, j], k) => { const a = project(cam, corners[i]), b = project(cam, corners[j]); return <line key={k} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={color} strokeWidth={3} strokeDasharray="10 8" />; })}</g>
			{crossO > 0.001 ? <g opacity={crossO}>{Array.from({length: nx * ny}, (_, i) => { const [sx, sy] = project(cam, [ox + (i % nx) * crossStep, -(oy + Math.floor(i / nx) * crossStep), hz]); return <FieldSymbol key={i} x={sx} y={sy} dir={dir} size={11 * cam.k} color={color} />; })}</g> : null}
			{arrowO > 0.001 ? <g opacity={arrowO}>{lines}</g> : null}
		</g>
	);
};

/** A rectangle filled with a regular grid of dots (field out of the page), the partner of the kit's CrossRegion. */
export const DotRegion: React.FC<{x: number; y: number; w: number; h: number; step?: number; color?: string; opacity?: number; border?: boolean; r?: number}> = ({x, y, w, h, step = 70, color = TONES.grey.stroke, opacity = 1, border = true, r = 6}) => {
	const nx = Math.floor(w / step), ny = Math.floor(h / step);
	const ox = x + (w - (nx - 1) * step) / 2, oy = y + (h - (ny - 1) * step) / 2;
	return (
		<g opacity={opacity}>
			{border ? <rect x={x} y={y} width={w} height={h} fill="none" stroke={color} strokeWidth={3} strokeDasharray="10 8" rx={8} /> : null}
			{Array.from({length: nx * ny}, (_, i) => <circle key={i} cx={ox + (i % nx) * step} cy={oy + Math.floor(i / nx) * step} r={r} fill={color} />)}
		</g>
	);
};

/** A right-angle mark at (x, y) between two screen directions (unit vectors are made inside). */
export const RightAngle: React.FC<{x: number; y: number; u: [number, number]; v: [number, number]; size?: number; color?: string; width?: number; opacity?: number}> = ({x, y, u, v, size = 22, color = INK, width = 3.5, opacity = 1}) => {
	const lu = Math.hypot(u[0], u[1]) || 1, lv = Math.hypot(v[0], v[1]) || 1;
	const a = [u[0] / lu * size, u[1] / lu * size], b = [v[0] / lv * size, v[1] / lv * size];
	return <polyline points={`${x + a[0]},${y + a[1]} ${x + a[0] + b[0]},${y + a[1] + b[1]} ${x + b[0]},${y + b[1]}`} fill="none" stroke={color} strokeWidth={width} opacity={opacity} />;
};

// ---------------------------------------------------------------- the axis triad
/** Rotation of a vector by angles (degrees) about x, then y, then z. */
export const rot3 = (p: V3, ax: number, ay: number, az: number): V3 => {
	const r = Math.PI / 180;
	let [x, y, z] = p;
	[y, z] = [y * Math.cos(ax * r) - z * Math.sin(ax * r), y * Math.sin(ax * r) + z * Math.cos(ax * r)];
	[x, z] = [x * Math.cos(ay * r) + z * Math.sin(ay * r), -x * Math.sin(ay * r) + z * Math.cos(ay * r)];
	[x, y] = [x * Math.cos(az * r) - y * Math.sin(az * r), x * Math.sin(az * r) + y * Math.cos(az * r)];
	return [x, y, z];
};
/** Oblique corner view for small diagrams: into the page (−z) recedes up and to the right. */
export const oblique = (cx: number, cy: number, k: number, p: V3): [number, number] => [cx + k * (p[0] - 0.5 * p[2]), cy - k * (p[1] - 0.38 * p[2])];
export type TriadArm = {d: V3; color: string; label: React.ReactNode; dash?: string};
/** Three labelled arrows from one corner, rotated by (ax, ay, az) degrees, drawn in the oblique corner view. */
export const AxisTriad: React.FC<{cx: number; cy: number; len: number; arms: readonly TriadArm[]; ax?: number; ay?: number; az?: number; size?: number; opacity?: number}> = ({cx, cy, len, arms, ax = 0, ay = 0, az = 0, size = 36, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	return (
		<g opacity={opacity}>
			<circle cx={cx} cy={cy} r={8} fill={INK} />
			{arms.map((a, i) => {
				const d = rot3(a.d, ax, ay, az);
				const [x2, y2] = oblique(cx, cy, len, d);
				const L = Math.hypot(x2 - cx, y2 - cy) || 1;
				const lx = x2 + ((x2 - cx) / L) * 26, ly = y2 + ((y2 - cy) / L) * 26;
				return (
					<g key={i}>
						<Arrow2 from={[cx, cy]} to={[x2, y2]} color={a.color} width={8} head={26} dash={a.dash} />
						<text x={lx} y={ly + size * 0.35} textAnchor={lx < cx - 20 ? 'end' : lx > cx + 20 ? 'start' : 'middle'} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fill: a.color, paintOrder: 'stroke', stroke: CARD, strokeWidth: 7, strokeLinejoin: 'round'} as React.CSSProperties}>{a.label}</text>
					</g>
				);
			})}
		</g>
	);
};

// ---------------------------------------------------------------- an arrow seen turning end-on
/**
 * A large arrow centred at (cx, cy), turning from side-on (turn 0, pointing right) to end-on (turn 1). `away`: the
 * tail faces the viewer at the end, so the four feathers make a cross; otherwise the tip faces the viewer: a dot.
 */
export const EndOnArrow: React.FC<{cx: number; cy: number; len: number; turn: number; away: boolean; color?: string; opacity?: number}> = ({cx, cy, len, turn, away, color = TONES.grey.stroke, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const a = (Math.min(1, Math.max(0, turn)) * Math.PI) / 2;
	const half = (len / 2) * Math.cos(a);
	const sym = sm(0.75, 1, turn), side = 1 - sm(0.85, 1, turn);
	const tailX = cx - half, tipX = cx + half;
	const f = len * 0.14;
	const R = len * 0.11;
	return (
		<g opacity={opacity}>
			<g opacity={side}>
				<line x1={tailX} y1={cy} x2={tipX - f * 0.6 * Math.cos(a)} y2={cy} stroke={color} strokeWidth={8} strokeLinecap="round" />
				{away ? null : <path d={`M${tipX},${cy} L${tipX - f * 1.3 * Math.cos(a)},${cy - R} L${tipX - f * 1.3 * Math.cos(a)},${cy + R} Z`} fill={color} />}
				{away ? <g>{[-1, 1].map(s => <line key={s} x1={tailX} y1={cy} x2={tailX - f * Math.cos(a)} y2={cy + s * R} stroke={color} strokeWidth={6} strokeLinecap="round" />)}</g> : null}
			</g>
			{sym > 0.001 ? <g opacity={sym}>
				<circle cx={cx} cy={cy} r={R * 1.6} fill={CARD} stroke={color} strokeWidth={6} />
				{away ? <path d={`M${cx - R},${cy - R} L${cx + R},${cy + R} M${cx + R},${cy - R} L${cx - R},${cy + R}`} stroke={color} strokeWidth={8} strokeLinecap="round" /> : <circle cx={cx} cy={cy} r={R * 0.45} fill={color} />}
			</g> : null}
		</g>
	);
};

// ---------------------------------------------------------------- a slit barrier and a wire
/** A vertical exam-style barrier at x from y1 to y2 with a slit of half-width `half` centred on y. */
export const SlitBarrier: React.FC<{x: number; y1: number; y2: number; y: number; half?: number; w?: number; opacity?: number}> = ({x, y1, y2, y, half = 22, w = 26, opacity = 1}) => (
	<g opacity={opacity}>
		<rect x={x} y={y1} width={w} height={y - half - y1} fill="#cfc6b6" stroke={INK} strokeWidth={4} />
		<rect x={x} y={y + half} width={w} height={y2 - y - half} fill="#cfc6b6" stroke={INK} strokeWidth={4} />
	</g>
);
export const COPPER = {fill: '#d99a5b', stroke: '#8a4f1c'};
/** A straight horizontal wire (coded copper bar) with charges drifting by `phase` px; `sign` marks each charge. */
export const Wire: React.FC<{x1: number; x2: number; y: number; h?: number; phase?: number; step?: number; sign?: '+' | '−'; charge?: string; opacity?: number; children?: (x: number) => React.ReactNode}> = ({x1, x2, y, h = 44, phase = 0, step = 120, sign = '−', charge = INK, opacity = 1, children}) => {
	const n = Math.floor((x2 - x1) / step);
	const xs = Array.from({length: n}, (_, i) => x1 + step / 2 + ((((i * step + phase) % (n * step)) + n * step) % (n * step)));
	return (
		<g opacity={opacity}>
			<rect x={x1} y={y - h / 2} width={x2 - x1} height={h} rx={h / 2} fill={COPPER.fill} stroke={COPPER.stroke} strokeWidth={4} />
			{xs.map((x, i) => (
				<g key={i}>
					<circle cx={x} cy={y} r={h * 0.3} fill={CARD} stroke={charge} strokeWidth={3} />
					<text x={x} y={y + h * 0.13} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: h * 0.42, fill: charge} as React.CSSProperties}>{sign}</text>
					{children ? children(x) : null}
				</g>
			))}
		</g>
	);
};
