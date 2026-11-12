// Magnetic fields drawn from their sources: a long straight wire, a bar magnet, a single
// loop and a solenoid, alone or together. Plain TypeScript, no React. The engine works out
// the field at any point of the page by adding the sources' fields, and traces field lines
// by following that field, so the lines, a compass needle and a readout all come from the
// same sum. SI units: metres, amperes, tesla.
//
// The page is a flat slice through the sources:
//   - a wire runs at right angles to the page (positive current comes out of the page);
//   - a bar magnet, a loop's axis and a solenoid's axis all lie in the page.

export const MU0 = 4e-7 * Math.PI;

export type MagnetSource =
	/** A long straight wire through the page at (x, y). Positive current comes out of the page (field circles anticlockwise). */
	| {kind: 'wire'; x: number; y: number; current: number}
	/**
	 * A bar magnet centred at (x, y), its north end pointing along `angle` (radians, default 0: to the right).
	 * `strength` is its pole strength in A m (dipole moment = strength x length). `width` is only its drawn thickness.
	 */
	| {kind: 'bar'; x: number; y: number; angle?: number; length: number; width?: number; strength: number}
	/** A circular loop centred at (x, y) whose axis points along `angle`. Positive current gives a field along the axis at the centre. */
	| {kind: 'loop'; x: number; y: number; angle?: number; radius: number; current: number; turns?: number}
	/** A solenoid centred at (x, y), axis along `angle`, with `turns` turns spread evenly over `length`. */
	| {kind: 'solenoid'; x: number; y: number; angle?: number; radius: number; length: number; turns: number; current: number}
	/** The same field everywhere (between wide flat poles, or the Earth's field over a bench). */
	| {kind: 'uniform'; bx: number; by: number};

export type FieldVector = {bx: number; by: number; /** Size of the field in tesla. */ b: number; /** Direction a compass points, radians anticlockwise from +x. */ angle: number};

const RING_STEPS = 72, MAX_RINGS = 48;
/** Field of one ring (radius R, current I) at the point u along its axis and w off it, in the ring's own axes. */
const ringField = (R: number, I: number, u: number, w: number): [number, number] => {
	let bu = 0, bw = 0;
	const d = (2 * Math.PI) / RING_STEPS, soft = (R * 1e-3) ** 2;
	for (let k = 0; k < RING_STEPS; k++) {
		const phi = (k + 0.5) * d, c = Math.cos(phi), s = Math.sin(phi);
		const r2 = u * u + (w - R * c) ** 2 + (R * s) ** 2 + soft, r3 = r2 * Math.sqrt(r2);
		bu += (R * (R - w * c)) / r3;
		bw += (R * u * c) / r3;
	}
	const k = (MU0 * I * d) / (4 * Math.PI);
	return [bu * k, bw * k];
};

/** The field at a point of the page: every source's field, added. */
export const magneticFieldAt = (sources: readonly MagnetSource[], x: number, y: number): FieldVector => {
	let bx = 0, by = 0;
	for (const s of sources) {
		if (s.kind === 'uniform') { bx += s.bx; by += s.by; continue; }
		const dx = x - s.x, dy = y - s.y;
		if (s.kind === 'wire') {
			const r2 = Math.max(dx * dx + dy * dy, 1e-18), k = (MU0 * s.current) / (2 * Math.PI * r2);
			bx += -dy * k; by += dx * k;
			continue;
		}
		const a = s.angle ?? 0, ca = Math.cos(a), sa = Math.sin(a);
		const u = dx * ca + dy * sa, w = -dx * sa + dy * ca;   // along the axis, and across it
		let bu = 0, bw = 0;
		if (s.kind === 'bar') {
			const h = s.length / 2, k = (MU0 * s.strength) / (4 * Math.PI);
			const n3 = Math.max(((u - h) ** 2 + w * w) ** 1.5, 1e-27), s3 = Math.max(((u + h) ** 2 + w * w) ** 1.5, 1e-27);
			bu = k * ((u - h) / n3 - (u + h) / s3); bw = k * (w / n3 - w / s3);
		} else if (s.kind === 'loop') {
			[bu, bw] = ringField(s.radius, s.current * (s.turns ?? 1), u, w);
		} else {
			const rings = Math.max(1, Math.min(MAX_RINGS, Math.round(s.turns))), each = (s.current * s.turns) / rings;
			for (let i = 0; i < rings; i++) {
				const at = rings === 1 ? 0 : -s.length / 2 + (s.length * (i + 0.5)) / rings, [pu, pw] = ringField(s.radius, each, u - at, w);
				bu += pu; bw += pw;
			}
		}
		bx += bu * ca - bw * sa; by += bu * sa + bw * ca;
	}
	return {bx, by, b: Math.hypot(bx, by), angle: Math.atan2(by, bx)};
};
/** The direction a small compass needle settles in at this point (radians anticlockwise from +x). */
export const compassAngle = (sources: readonly MagnetSource[], x: number, y: number) => magneticFieldAt(sources, x, y).angle;

// Textbook results, for readouts and checks.
/** Field a distance r from a long straight wire: B = mu0 I / (2 pi r). */
export const wireField = (current: number, r: number) => (MU0 * current) / (2 * Math.PI * r);
/** Field at the centre of a flat coil: B = mu0 N I / (2 R). */
export const loopCentreField = (current: number, radius: number, turns = 1) => (MU0 * turns * current) / (2 * radius);
/** Field inside a long solenoid: B = mu0 n I, with n turns per metre. */
export const solenoidField = (current: number, turnsPerMetre: number) => MU0 * turnsPerMetre * current;
/** Force per metre between two long parallel wires a distance r apart: F / l = mu0 I1 I2 / (2 pi r). Positive: attraction (currents the same way). */
export const forceBetweenWires = (i1: number, i2: number, r: number) => (MU0 * i1 * i2) / (2 * Math.PI * r);

// ------------------------------------------------------------------ field lines
export type Bounds = {x0: number; x1: number; y0: number; y1: number};
export type FieldLine = {points: [number, number][]; /** True when the line came back to where it started. */ closed: boolean};
export type TraceOptions = {
	/** The line stops where it leaves this box. */
	bounds: Bounds;
	/** Step along the line in metres (default: 1/400 of the box's longer side). */
	step?: number;
	/** Most steps taken each way (default 4000). */
	maxSteps?: number;
	/** 'both' (default) follows the field forwards and backwards from the start; 'forward' only along it. */
	direction?: 'both' | 'forward' | 'backward';
};
const insideBar = (sources: readonly MagnetSource[], x: number, y: number) => sources.some(s => {
	if (s.kind !== 'bar') return false;
	const a = s.angle ?? 0, dx = x - s.x, dy = y - s.y, u = dx * Math.cos(a) + dy * Math.sin(a), w = -dx * Math.sin(a) + dy * Math.cos(a);
	return Math.abs(u) < s.length / 2 && Math.abs(w) < (s.width ?? s.length / 4) / 2;
});
/**
 * Follow the field from a starting point. A line stops at the edge of the box, where it
 * enters a bar magnet (lines are drawn outside the magnet only), or when it closes on itself.
 */
export const fieldLine = (sources: readonly MagnetSource[], x: number, y: number, o: TraceOptions): FieldLine => {
	const {bounds: bd} = o, step = o.step ?? Math.max(bd.x1 - bd.x0, bd.y1 - bd.y0) / 400, max = o.maxSteps ?? 4000;
	let closed = false;
	const walk = (sign: 1 | -1) => {
		const pts: [number, number][] = [];
		let px = x, py = y;
		for (let i = 0; i < max; i++) {
			const f1 = magneticFieldAt(sources, px, py);
			if (!(f1.b > 0)) break;
			const mx = px + (sign * 0.5 * step * f1.bx) / f1.b, my = py + (sign * 0.5 * step * f1.by) / f1.b, f2 = magneticFieldAt(sources, mx, my);
			if (!(f2.b > 0)) break;
			px += (sign * step * f2.bx) / f2.b; py += (sign * step * f2.by) / f2.b;
			if (px < bd.x0 || px > bd.x1 || py < bd.y0 || py > bd.y1 || insideBar(sources, px, py)) { pts.push([px, py]); break; }
			pts.push([px, py]);
			if (i > 8 && Math.hypot(px - x, py - y) < step * 0.9) { closed = true; break; }
		}
		return pts;
	};
	const dir = o.direction ?? 'both';
	const fwd = dir === 'backward' ? [] : walk(1);
	const back = closed || dir === 'forward' ? [] : walk(-1);
	return {points: [...back.reverse(), [x, y], ...fwd], closed};
};
/** Trace one line from each starting point. */
export const fieldLines = (sources: readonly MagnetSource[], seeds: readonly (readonly [number, number])[], o: TraceOptions) => seeds.map(([sx, sy]) => fieldLine(sources, sx, sy, o));

/** Starting points fanned round the north end of a bar magnet (trace them with direction 'forward'). */
export const barSeeds = (bar: Extract<MagnetSource, {kind: 'bar'}>, count = 9): [number, number][] => {
	const a = bar.angle ?? 0, w = bar.width ?? bar.length / 4, nx = bar.x + (bar.length / 2) * Math.cos(a), ny = bar.y + (bar.length / 2) * Math.sin(a);
	return Array.from({length: count}, (_, k) => {
		const th = a + (count === 1 ? 0 : -1.75 + (3.5 * k) / (count - 1));
		return [nx + 0.62 * w * Math.cos(th), ny + 0.62 * w * Math.sin(th)] as [number, number];
	});
};
/**
 * Field lines of a bar magnet, drawn outside it: `count` lines leaving the north end, and
 * the matching lines arriving at the south end from outside the box. Lines that run from
 * one end round to the other are traced once.
 */
export const barLines = (sources: readonly MagnetSource[], bar: Extract<MagnetSource, {kind: 'bar'}>, count: number, o: Omit<TraceOptions, 'direction'>): FieldLine[] => {
	const north = fieldLines(sources, barSeeds(bar, count), {...o, direction: 'forward'});
	const flipped = {...bar, angle: (bar.angle ?? 0) + Math.PI};
	const south = fieldLines(sources, barSeeds(flipped, count), {...o, direction: 'backward'}).filter(l => { const [x, y] = l.points[0]; return !insideBar(sources, x, y); });
	return [...north, ...south];
};
/** Starting points at these distances from a wire: each traces one circle. */
export const wireSeeds = (wire: Extract<MagnetSource, {kind: 'wire'}>, radii: readonly number[]): [number, number][] => radii.map(r => [wire.x + r, wire.y]);
/** Starting points spread across the inside of a loop or solenoid, on the line through its centre at right angles to the axis. */
export const coilSeeds = (coil: Extract<MagnetSource, {kind: 'loop' | 'solenoid'}>, count = 7, fill = 0.8): [number, number][] => {
	const a = coil.angle ?? 0;
	return Array.from({length: count}, (_, k) => {
		const w = count === 1 ? 0 : coil.radius * fill * (-1 + (2 * k) / (count - 1));
		return [coil.x - w * Math.sin(a), coil.y + w * Math.cos(a)] as [number, number];
	});
};
