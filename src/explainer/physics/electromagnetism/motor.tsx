// Motor and generator kit for Module 6 (additive kit file, 25 November 2026; first used by phys-y12-m6-v16 to v18,
// offered to the induction-motor and braking videos). Course-neutral: every label, number and colour of meaning is
// passed in by the lesson. Painted plates are placed by their visible (alpha) box at uniform scale (bench.tsx `Plate`,
// never stretched); everything else here is a coded HSC-style schematic:
//   - the three-quarter motor or generator model: two pole blocks, field lines, a rectangular coil turning on an axle
//     that runs into the screen, and at the front end a split ring, two slip rings or nothing, with two brushes;
//   - the end-on coil: the axle, the coil as a line through it with a dot side and a cross side, field lines, the force
//     on each side, the area normal, the radial lever arm and the perpendicular arm, and the angle arc;
//   - the ring close-up seen along the axle (two or six segments, or slip rings), brushes and current arrows;
//   - a coil turning model with inertia and friction (rocks and settles face on without a commutator; spins with one);
//   - a function graph with a cursor, an oscilloscope screen trace, a coded needle ammeter with a second (earlier)
//     needle, the hobby motor with its turning flywheel, and a ring of stator coils with a turning field arrow.
//
// Angle convention (author note a of phys-y12-m6-v16): B along +x; the coil turns by alpha; its plane runs along
// u = (-sin alpha, cos alpha) and its area normal along n = (cos alpha, sin alpha), so alpha is the angle between the
// normal and B (theta). alpha = 0 is face on (coil upright in the end-on view), alpha = 90 is edge on. Side "+" sits at
// +u. With the side "+" current out of the screen, the torque about the axle is -k sin(alpha): it turns the coil
// towards face on. A two-segment commutator whose gaps lie along n swaps the brushes at alpha = 0 and 180.
//
// Plate anchors (native pixels, read on a 50 px grid, 25 November 2026):
//   hobby motor (1585 x 992): visible box (384, 249) to (1210, 746); solder tabs (414, 344) and (404, 491); shaft from
//     the end bell (944, 500) to its tip (1199, 539);
//   flywheel (1254 x 1254): box (202, 194) to (1042, 1052), hub at the box centre (622, 623);
//   oscilloscope (2172 x 724): box (767, 197) to (1404, 562); screen (806, 238) to (1183, 497); inputs (1244, 472) and
//     (1340, 472);
//   lamp holder (1536 x 1024): box (216, 119) to (1319, 902); terminals (390, 590) and (1120, 590); bulb (760, 260);
//   rheostat (1572 x 1001): box (105, 106) to (1476, 907); end terminals (156, 578) and (1389, 433); slider rail from
//     (267, 384) to (1311, 200);
//   power station v1 (1774 x 887): box (218, 51) to (1608, 815); squirrel-cage rotor (1568 x 1003): box (175, 180) to
//     (1393, 841); bench pulley (1200 x 1200): box (109, 199) to (1092, 1001); slotted masses (1000 x 1000): box (355, 90)
//     to (645, 910); mass hanger (600 x 1400): box (165, 126) to (435, 1274).
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD, INK} from '../../shared/tokens';
import {Plate, placeOf} from './bench';
import type {Place} from './bench';
import {Arrow2} from './magnetic';
import {EndOnWire} from './wires';

type Pt = [number, number];
type Spec = {src: string; W: number; H: number; box: readonly [number, number, number, number]};
const P = (name: string) => `assets/physics/${name}.png`;
export const HOBBY_MOTOR: Spec = {src: P('y12p-hobby-motor-v1'), W: 1585, H: 992, box: [384, 249, 1210, 746]};
export const FLYWHEEL: Spec = {src: P('y12p-motor-flywheel-v1'), W: 1254, H: 1254, box: [202, 194, 1042, 1052]};
export const SCOPE: Spec = {src: P('phys-y11-oscilloscope-v1'), W: 2172, H: 724, box: [767, 197, 1404, 562]};
export const LAMP_HOLDER: Spec = {src: P('phys-y11-lamp-holder-v1'), W: 1536, H: 1024, box: [216, 119, 1319, 902]};
export const RHEOSTAT: Spec = {src: P('phys-y11-rheostat-v1'), W: 1572, H: 1001, box: [105, 106, 1476, 907]};
export const STATION_V1: Spec = {src: P('phys-y11-power-station-v1'), W: 1774, H: 887, box: [218, 51, 1608, 815]};
export const CAGE_ROTOR: Spec = {src: P('y12p-squirrel-cage-rotor-v1'), W: 1568, H: 1003, box: [175, 180, 1393, 841]};
export const PULLEY: Spec = {src: P('phys-y11-bench-pulley-v1'), W: 1200, H: 1200, box: [109, 199, 1092, 1001]};
export const SLOTTED: Spec = {src: P('phys-y11-slotted-masses-v1'), W: 1000, H: 1000, box: [355, 90, 645, 910]};
export const HANGER: Spec = {src: P('phys-y11-mass-hanger-v1'), W: 600, H: 1400, box: [165, 126, 435, 1274]};
export const MOTOR_KIT_PLATES = [HOBBY_MOTOR, FLYWHEEL, SCOPE, LAMP_HOLDER, RHEOSTAT, STATION_V1, CAGE_ROTOR, PULLEY, SLOTTED, HANGER].map(s => s.src);
export const MANCHOR = {
	hobby: {tabHi: [414, 344] as Pt, tabLo: [404, 491] as Pt, shaftRoot: [944, 500] as Pt, shaftTip: [1199, 539] as Pt},
	flywheelHub: [622, 623] as Pt,
	scope: {screen: [806, 238, 1183, 497] as const, in1: [1244, 472] as Pt, in2: [1340, 472] as Pt},
	lamp: {tL: [390, 590] as Pt, tR: [1120, 590] as Pt, bulb: [760, 260] as Pt},
	rheostat: {tL: [156, 578] as Pt, tR: [1389, 433] as Pt, rail0: [267, 384] as Pt, rail1: [1311, 200] as Pt},
};
export const COPPER_RING = '#b8642a', COPPER_SOFT = '#efc9a2', BRUSH = '#7d7a74';
const rad = (d: number) => (d * Math.PI) / 180;
const svgText = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color, paintOrder: 'stroke', stroke: CARD, strokeWidth: 7, strokeLinejoin: 'round'} as React.CSSProperties);
const arcPath = (cx: number, cy: number, r: number, a0: number, a1: number) => {
	// math angles (degrees, anticlockwise, y up) to an SVG arc on screen (y down).
	const p0: Pt = [cx + r * Math.cos(rad(a0)), cy - r * Math.sin(rad(a0))], p1: Pt = [cx + r * Math.cos(rad(a1)), cy - r * Math.sin(rad(a1))];
	const large = Math.abs(a1 - a0) > 180 ? 1 : 0, sweep = a1 > a0 ? 0 : 1;
	return `M${p0[0].toFixed(1)},${p0[1].toFixed(1)} A${r},${r} 0 ${large} ${sweep} ${p1[0].toFixed(1)},${p1[1].toFixed(1)}`;
};

// ---------------------------------------------------------------- the coil turning model
/**
 * The coil's angle (degrees) frame by frame under torque -k sin(alpha) (no commutator: `kind` 'rock') or
 * -k |sin(alpha)| (split ring: 'spin'), with viscous friction c, from rest at alpha0. Deterministic (fixed steps per
 * frame) and cached. With 'spin' the coil turns clockwise on screen (alpha decreasing).
 */
const runCache = new Map<string, number[]>();
export const coilRun = (kind: 'rock' | 'spin', frames: number, o: {alpha0?: number; k?: number; c?: number; w0?: number} = {}) => {
	const {alpha0 = 100, k = 0.0045, c = 0.03, w0 = 0} = o;
	const key = `${kind}|${frames}|${alpha0}|${k}|${c}|${w0}`;
	const hit = runCache.get(key);
	if (hit) return hit;
	const out: number[] = [];
	let a = rad(alpha0), w = rad(w0);
	const steps = 8, dt = 1 / steps;
	for (let f = 0; f <= frames; f++) {
		out.push((a * 180) / Math.PI);
		for (let s = 0; s < steps; s++) {
			const tq = kind === 'rock' ? -k * Math.sin(a) : -k * Math.abs(Math.sin(a)) - 0.0004;
			w += (tq - c * w) * dt;
			a += w * dt;
		}
	}
	runCache.set(key, out);
	return out;
};
/** The run's angle at frame f (held at its last value). */
export const runAt = (run: readonly number[], f: number) => run[Math.max(0, Math.min(run.length - 1, Math.round(f)))];
/** Which brush polarity reaches side "+" through a two-segment commutator: +1 for alpha in (0, 180), else -1. */
export const commSign = (alphaDeg: number) => {
	const a = ((alphaDeg % 360) + 360) % 360;
	return a > 0 && a < 180 ? 1 : -1;
};

// ---------------------------------------------------------------- the three-quarter model
export type MCam = {cx: number; cy: number; k: number};
/** World: x right, y up, z into the screen along the axle (drawn up and to the right). */
export const m3 = (c: MCam, p: readonly [number, number, number]): Pt => [c.cx + c.k * (p[0] + 0.42 * p[2]), c.cy - c.k * (p[1] + 0.3 * p[2])];
export const MODEL = {w: 1, L: 1.25, poleX: 1.55, poleW: 0.62, poleH: 1.35, poleD: 1.5, ringZ: -2.0, ringR: 0.34, slipGap: 0.8};
/** Screen points of the model: coil corners, the ring centre, brush contact points and lead ends. */
export const modelGeom = (c: MCam, alpha: number, ring: 'split' | 'slip' | 'none' = 'split') => {
	const {w, L, ringZ, ringR, slipGap} = MODEL;
	const u: [number, number] = [-Math.sin(rad(alpha)), Math.cos(rad(alpha))];
	const plus = (z: number) => m3(c, [w * u[0], w * u[1], z]), minus = (z: number) => m3(c, [-w * u[0], -w * u[1], z]);
	const rc = m3(c, [0, 0, ringZ]);
	const slip2 = m3(c, [0, 0, ringZ - slipGap]);
	const br = ring === 'slip'
		? {L: [rc[0], rc[1] + c.k * (ringR + 0.12)] as Pt, R: [slip2[0], slip2[1] + c.k * (ringR + 0.12)] as Pt}
		: {L: [rc[0] - c.k * (ringR + 0.14), rc[1]] as Pt, R: [rc[0] + c.k * (ringR + 0.14), rc[1]] as Pt};
	const leadDrop = c.k * 1.25;
	return {u, plusFront: plus(-L), plusBack: plus(L), minusFront: minus(-L), minusBack: minus(L), rc, slip2, br, leadL: [br.L[0], br.L[1] + leadDrop] as Pt, leadR: [br.R[0], br.R[1] + leadDrop] as Pt, axleBack: m3(c, [0, 0, L + 0.6]), axleFront: m3(c, [0, 0, ringZ - (ring === 'slip' ? slipGap + 0.3 : 0.3)])};
};
const Box3: React.FC<{c: MCam; x0: number; x1: number; h: number; d: number; fill: string; label: string; labelColor: string}> = ({c, x0, x1, h, d, fill, label, labelColor}) => {
	const q = (x: number, y: number, z: number) => m3(c, [x, y, z]);
	const poly = (pts: Pt[]) => pts.map(p => p.join(',')).join(' ');
	const front = [q(x0, -h, -d), q(x1, -h, -d), q(x1, h, -d), q(x0, h, -d)];
	const top = [q(x0, h, -d), q(x1, h, -d), q(x1, h, d), q(x0, h, d)];
	const side = [q(x1, -h, -d), q(x1, -h, d), q(x1, h, d), q(x1, h, -d)];
	const lc = q((x0 + x1) / 2, 0, -d);
	return (
		<g>
			<polygon points={poly(top)} fill="#d4cec4" stroke={INK} strokeWidth={3.5} strokeLinejoin="round" />
			<polygon points={poly(side)} fill="#bdb6aa" stroke={INK} strokeWidth={3.5} strokeLinejoin="round" />
			<polygon points={poly(front)} fill={fill} stroke={INK} strokeWidth={3.5} strokeLinejoin="round" />
			<text x={lc[0]} y={lc[1] + c.k * 0.22} textAnchor="middle" style={svgText(c.k * 0.62, labelColor)}>{label}</text>
		</g>
	);
};
/**
 * The three-quarter model. `alpha` turns the coil; `ring` picks the front-end part; `ringO` fades the ring part and its
 * brushes (the hook takes the split ring away); `directLeads` draws leads straight to the coil's front ends instead.
 * `fieldColor`, `coilColor` and `normalColor` come from the lesson; `normal` 0 to 1 draws the area normal; `markA`
 * labels side "+" as "a"; `fieldO` fades the field lines.
 */
export const MotorModel: React.FC<{c: MCam; alpha: number; ring?: 'split' | 'slip' | 'none'; ringO?: number; directLeads?: number; fieldColor: string; coilColor: string; normalColor?: string; normal?: number; markA?: number; aColor?: string; fieldO?: number; poleFill?: readonly [string, string]; letterColor?: string; opacity?: number}> = ({c, alpha, ring = 'split', ringO = 1, directLeads = 0, fieldColor, coilColor, normalColor = '#1f3a68', normal = 0, markA = 0, aColor = '#d0761c', fieldO = 1, poleFill = ['#e9e4da', '#e9e4da'], letterColor = INK, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const {w, L, poleX, poleW, poleH, poleD, ringR} = MODEL;
	const g = modelGeom(c, alpha, ring);
	const back = Math.cos(rad(alpha)) < 0; // side "+" is lower half: drawing order hint only
	const coil = [g.plusFront, g.plusBack, g.minusBack, g.minusFront];
	const field = [-0.9, -0.3, 0.3, 0.9].flatMap(y => [-0.9, 0.9].map(z => [y, z] as const));
	const n0 = m3(c, [0, 0, -L - 0.05]), n1 = m3(c, [1.35 * Math.cos(rad(alpha)), 1.35 * Math.sin(rad(alpha)), -L - 0.05]);
	const sideMid = m3(c, [w * g.u[0], w * g.u[1], 0]);
	return (
		<g opacity={opacity}>
			<Box3 c={c} x0={-poleX - poleW} x1={-poleX} h={poleH} d={poleD} fill={poleFill[0]} label="N" labelColor={letterColor} />
			<g opacity={fieldO}>{field.map(([y, z], i) => <Arrow2 key={i} from={m3(c, [-poleX + 0.05, y, z])} to={m3(c, [poleX - 0.08, y, z])} color={fieldColor} width={3} head={14} />)}</g>
			<line x1={g.axleBack[0]} y1={g.axleBack[1]} x2={g.axleFront[0]} y2={g.axleFront[1]} stroke="#6f6a62" strokeWidth={c.k * 0.1} strokeLinecap="round" />
			<polygon points={coil.map(p => p.join(',')).join(' ')} fill={back ? '#f3e2d2' : '#f8ecdf'} opacity={0.55} />
			<polygon points={coil.map(p => p.join(',')).join(' ')} fill="none" stroke={coilColor} strokeWidth={c.k * 0.09} strokeLinejoin="round" />
			<Box3 c={c} x0={poleX} x1={poleX + poleW} h={poleH} d={poleD} fill={poleFill[1]} label="S" labelColor={letterColor} />
			{markA > 0.001 ? <g opacity={markA}>
				<line x1={g.plusFront[0]} y1={g.plusFront[1]} x2={g.plusBack[0]} y2={g.plusBack[1]} stroke={aColor} strokeWidth={c.k * 0.2} strokeLinecap="round" opacity={0.55} />
				<text x={sideMid[0] - c.k * 0.25} y={sideMid[1] - c.k * 0.12} textAnchor="middle" style={svgText(c.k * 0.42, aColor)}>a</text>
			</g> : null}
			{/* leads from the coil's front ends to the ring end (or straight out) */}
			<g opacity={ringO}>
				{ring === 'slip' ? <>
					<path d={`M${g.plusFront[0]},${g.plusFront[1]} L${g.rc[0] + c.k * ringR * 0.6},${g.rc[1] - c.k * ringR}`} stroke={coilColor} strokeWidth={c.k * 0.06} fill="none" />
					<path d={`M${g.minusFront[0]},${g.minusFront[1]} L${g.slip2[0] - c.k * ringR * 0.2},${g.slip2[1] + c.k * ringR * 0.3}`} stroke={coilColor} strokeWidth={c.k * 0.06} fill="none" />
					{[g.rc, g.slip2].map((q, i) => <g key={i}>
						<ellipse cx={q[0]} cy={q[1]} rx={c.k * ringR} ry={c.k * ringR} fill={i ? '#e1ddd5' : '#ece8e0'} stroke="#6f6a62" strokeWidth={c.k * 0.07} />
						<circle cx={q[0]} cy={q[1]} r={c.k * 0.05} fill="#6f6a62" />
					</g>)}
				</> : ring === 'split' ? <>
					<path d={`M${g.plusFront[0]},${g.plusFront[1]} L${g.rc[0]},${g.rc[1]}`} stroke={coilColor} strokeWidth={c.k * 0.05} fill="none" opacity={0.6} />
					<path d={`M${g.minusFront[0]},${g.minusFront[1]} L${g.rc[0]},${g.rc[1]}`} stroke={coilColor} strokeWidth={c.k * 0.05} fill="none" opacity={0.6} />
					<RingFace cx={g.rc[0]} cy={g.rc[1]} r={c.k * ringR} alpha={alpha} width={c.k * 0.11} />
				</> : null}
				{ring !== 'none' ? <>
					<BrushBlock at={g.br.L} side={ring === 'slip' ? 'below' : 'left'} s={c.k} />
					<BrushBlock at={g.br.R} side={ring === 'slip' ? 'below' : 'right'} s={c.k} />
				</> : null}
			</g>
			{directLeads > 0.001 ? <g opacity={directLeads}>
				<path d={`M${g.plusFront[0]},${g.plusFront[1]} L${g.plusFront[0] - c.k * 0.5},${g.plusFront[1] + c.k * 0.9}`} stroke={coilColor} strokeWidth={c.k * 0.06} fill="none" />
				<path d={`M${g.minusFront[0]},${g.minusFront[1]} L${g.minusFront[0] + c.k * 0.5},${g.minusFront[1] + c.k * 0.9}`} stroke={coilColor} strokeWidth={c.k * 0.06} fill="none" />
			</g> : null}
			{normal > 0.001 ? <Arrow2 from={n0} to={[n0[0] + (n1[0] - n0[0]) * normal, n0[1] + (n1[1] - n0[1]) * normal]} color={normalColor} width={c.k * 0.08} head={c.k * 0.24} /> : null}
		</g>
	);
};
/** A two-segment split ring face seen along the axle, gaps along the normal (alpha). */
export const RingFace: React.FC<{cx: number; cy: number; r: number; alpha: number; width?: number; gap?: number; segments?: number; colors?: readonly string[]}> = ({cx, cy, r, alpha, width = 12, gap = 14, segments = 2, colors}) => {
	const step = 360 / segments;
	return (
		<g>
			<circle cx={cx} cy={cy} r={r} fill="none" stroke="#e7d6c5" strokeWidth={width + 4} />
			{Array.from({length: segments}, (_, i) => {
				const a0 = alpha + i * step + gap / 2, a1 = alpha + (i + 1) * step - gap / 2;
				return <path key={i} d={arcPath(cx, cy, r, a0, a1)} stroke={colors ? colors[i % colors.length] : COPPER_RING} strokeWidth={width} fill="none" strokeLinecap="butt" />;
			})}
		</g>
	);
};
/** A brush: a small grey block pressing on the ring from the left, the right or below. */
export const BrushBlock: React.FC<{at: Pt; side: 'left' | 'right' | 'below'; s: number; color?: string}> = ({at, side, s, color = BRUSH}) => {
	const bw = s * 0.22, bh = s * 0.16;
	const x = side === 'left' ? at[0] - bw : side === 'right' ? at[0] : at[0] - bh / 2;
	const y = side === 'below' ? at[1] : at[1] - bh / 2;
	return <rect x={x} y={y} width={side === 'below' ? bh : bw} height={side === 'below' ? bw : bh} rx={3} fill={color} stroke={INK} strokeWidth={2.5} />;
};
/** A curved turning arrow round the model's axle at the back (amber outline), `sense` -1 clockwise on screen. */
export const ModelSpin: React.FC<{c: MCam; t: number; sense?: 1 | -1; color: string; opacity?: number; r?: number}> = ({c, t, sense = -1, color, opacity = 1, r = 1.3}) => {
	if (opacity <= 0.001) return null;
	const z = MODEL.L + 0.5;
	const pts = Array.from({length: 31}, (_, i) => m3(c, [r * Math.cos(rad(100 + i * 9)), r * Math.sin(rad(100 + i * 9)), z]));
	const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
	const end = sense < 0 ? pts[0] : pts[pts.length - 1], prev = sense < 0 ? pts[2] : pts[pts.length - 3];
	const ang = Math.atan2(end[1] - prev[1], end[0] - prev[0]);
	const h = c.k * 0.28;
	return (
		<g opacity={opacity}>
			<path d={d} fill="none" stroke={color} strokeWidth={c.k * 0.08} strokeDasharray={`${c.k * 0.5} ${c.k * 0.16}`} strokeDashoffset={-sense * t * 4} strokeLinecap="round" />
			<path d={`M${end[0] + h * Math.cos(ang)},${end[1] + h * Math.sin(ang)} L${end[0] + h * 0.6 * Math.cos(ang + 2.3)},${end[1] + h * 0.6 * Math.sin(ang + 2.3)} L${end[0] + h * 0.6 * Math.cos(ang - 2.3)},${end[1] + h * 0.6 * Math.sin(ang - 2.3)} Z`} fill={color} />
		</g>
	);
};

// ---------------------------------------------------------------- the end-on coil
export type EndOnProps = {
	cx: number; cy: number; R: number; alpha: number;
	/** Current in side "+": 1 out of the screen (dot), -1 into it (cross), 0 none. Side "-" carries the opposite. */
	plusI: 1 | -1 | 0;
	fieldColor: string; coilColor: string; forceColor: string; normalColor: string; armColor?: string;
	field?: number; forces?: number; forceLen?: number; normal?: number; arc?: number; radial?: number; arms?: number;
	/** Field box half-width and the rows of field lines (px above and below the axle). */
	fieldW?: number; rows?: readonly number[]; plusTint?: string; minusTint?: string; wireR?: number; normalLen?: number; thetaLabel?: string;
};
/** Screen points of the end-on coil: side "+", side "-" and the axle. */
export const endOnGeom = (cx: number, cy: number, R: number, alpha: number) => {
	const u: [number, number] = [-Math.sin(rad(alpha)), Math.cos(rad(alpha))];
	return {plus: [cx + R * u[0], cy - R * u[1]] as Pt, minus: [cx - R * u[0], cy + R * u[1]] as Pt, axle: [cx, cy] as Pt, n: [Math.cos(rad(alpha)), Math.sin(rad(alpha))] as const};
};
export const EndOnCoil: React.FC<EndOnProps> = ({cx, cy, R, alpha, plusI, fieldColor, coilColor, forceColor, normalColor, armColor = INK, field = 1, forces = 0, forceLen = 150, normal = 0, arc = 0, radial = 0, arms = 0, fieldW = 420, rows = [-240, -120, 0, 120, 240], plusTint, minusTint, wireR = 36, normalLen, thetaLabel = 'θ'}) => {
	const g = endOnGeom(cx, cy, R, alpha);
	const nl = normalLen ?? R * 0.95;
	const nTip: Pt = [cx + nl * g.n[0], cy - nl * g.n[1]];
	const dirP = plusI === 0 ? null : plusI > 0 ? 'out' : 'in';
	const dirM = plusI === 0 ? null : plusI > 0 ? 'in' : 'out';
	const fUp = (side: 'plus' | 'minus') => (plusI === 0 ? 0 : side === 'plus' ? plusI : -plusI);
	const arcR = 70;
	return (
		<g>
			<g opacity={field}>{rows.map(y => <Arrow2 key={y} from={[cx - fieldW, cy + y]} to={[cx + fieldW, cy + y]} color={fieldColor} width={3.5} head={18} />)}</g>
			{radial > 0.001 ? <g opacity={radial}>
				<line x1={cx} y1={cy} x2={g.plus[0]} y2={g.plus[1]} stroke={armColor} strokeWidth={5} strokeDasharray="14 10" />
			</g> : null}
			<line x1={g.minus[0]} y1={g.minus[1]} x2={g.plus[0]} y2={g.plus[1]} stroke={coilColor} strokeWidth={9} strokeLinecap="round" opacity={radial > 0.5 ? 0.35 : 1} />
			{arms > 0.001 ? <g opacity={arms} stroke={armColor} strokeWidth={5} strokeDasharray="12 9">
				<line x1={cx} y1={cy} x2={g.plus[0]} y2={cy} /><line x1={cx} y1={cy} x2={g.minus[0]} y2={cy} />
				<line x1={g.plus[0]} y1={cy} x2={g.plus[0]} y2={g.plus[1]} strokeDasharray="4 8" strokeWidth={3} />
				<line x1={g.minus[0]} y1={cy} x2={g.minus[0]} y2={g.minus[1]} strokeDasharray="4 8" strokeWidth={3} />
			</g> : null}
			<circle cx={cx} cy={cy} r={16} fill={CARD} stroke={INK} strokeWidth={5} />
			<circle cx={cx} cy={cy} r={4} fill={INK} />
			{plusTint ? <circle cx={g.plus[0]} cy={g.plus[1]} r={wireR + 12} fill={plusTint} opacity={0.5} /> : null}
			{minusTint ? <circle cx={g.minus[0]} cy={g.minus[1]} r={wireR + 12} fill={minusTint} opacity={0.5} /> : null}
			{dirP ? <EndOnWire cx={g.plus[0]} cy={g.plus[1]} r={wireR} dir={dirP} color={coilColor} /> : <circle cx={g.plus[0]} cy={g.plus[1]} r={wireR} fill="#f6dcc0" stroke={coilColor} strokeWidth={4} />}
			{dirM ? <EndOnWire cx={g.minus[0]} cy={g.minus[1]} r={wireR} dir={dirM} color={coilColor} /> : <circle cx={g.minus[0]} cy={g.minus[1]} r={wireR} fill="#f6dcc0" stroke={coilColor} strokeWidth={4} />}
			{forces > 0.001 && plusI !== 0 ? <g opacity={forces}>
				{(['plus', 'minus'] as const).map(s => { const p = g[s], up = fUp(s); return <Arrow2 key={s} from={[p[0], p[1] - up * (wireR + 4)]} to={[p[0], p[1] - up * (wireR + 4 + forceLen)]} color={forceColor} width={9} head={28} />; })}
			</g> : null}
			{normal > 0.001 ? <Arrow2 from={[cx, cy]} to={[cx + (nTip[0] - cx) * normal, cy + (nTip[1] - cy) * normal]} color={normalColor} width={8} head={26} /> : null}
			{arc > 0.001 && Math.abs(Math.sin(rad(alpha))) > 0.03 ? <g opacity={arc}>
				<path d={arcPath(cx, cy, arcR, 0, alpha % 360)} stroke={normalColor} strokeWidth={4} fill="none" />
				<text x={cx + (arcR + 30) * Math.cos(rad(alpha / 2))} y={cy - (arcR + 30) * Math.sin(rad(alpha / 2)) + 12} textAnchor="middle" style={svgText(34, normalColor)}>{thetaLabel}</text>
			</g> : null}
		</g>
	);
};

// ---------------------------------------------------------------- the ring close-up seen along the axle
/**
 * The front view of the ring end: a split ring of `segments` (2 or 6) turning with alpha (gaps along the normal), or
 * slip rings (two concentric rings, `slip`), with two brushes left and right. `current` +1 sends the orange arrow in
 * at the left brush and out at the right; -1 the other way; 0 none. `tint` colours the half touching each brush.
 */
export const RingCloseUp: React.FC<{cx: number; cy: number; r: number; alpha: number; segments?: number; slip?: boolean; current?: number; currentColor: string; brushRing?: number; ringColors?: readonly string[]; opacity?: number; leads?: boolean; width?: number}> = ({cx, cy, r, alpha, segments = 2, slip = false, current = 0, currentColor, ringColors, opacity = 1, leads = true, width}) => {
	if (opacity <= 0.001) return null;
	const wd = width ?? r * 0.26;
	const bW = r * 0.5, bH = r * 0.34;
	return (
		<g opacity={opacity}>
			<circle cx={cx} cy={cy} r={r * 0.22} fill="#bdb6aa" stroke={INK} strokeWidth={3} />
			{slip ? <>
				<circle cx={cx} cy={cy} r={r} fill="none" stroke="#9a958c" strokeWidth={wd} />
				<circle cx={cx} cy={cy} r={r * 0.62} fill="none" stroke="#c9c4bb" strokeWidth={wd * 0.8} />
			</> : <RingFace cx={cx} cy={cy} r={r} alpha={alpha} width={wd} gap={segments > 2 ? 8 : 16} segments={segments} colors={ringColors} />}
			<rect x={cx - r - wd / 2 - bW} y={cy - bH / 2} width={bW} height={bH} rx={5} fill={BRUSH} stroke={INK} strokeWidth={3} />
			<rect x={cx + r + wd / 2} y={cy - bH / 2} width={bW} height={bH} rx={5} fill={BRUSH} stroke={INK} strokeWidth={3} />
			{leads ? <>
				<line x1={cx - r - wd / 2 - bW} y1={cy} x2={cx - r - wd / 2 - bW - r * 0.6} y2={cy} stroke={INK} strokeWidth={5} />
				<line x1={cx + r + wd / 2 + bW} y1={cy} x2={cx + r + wd / 2 + bW + r * 0.6} y2={cy} stroke={INK} strokeWidth={5} />
			</> : null}
			{current !== 0 ? <g>
				<Arrow2 from={current > 0 ? [cx - r - wd / 2 - bW - r * 0.6, cy - bH] : [cx - r - wd / 2 - bW, cy - bH]} to={current > 0 ? [cx - r - wd / 2 - bW * 0.2, cy - bH] : [cx - r - wd / 2 - bW - r * 0.6, cy - bH]} color={currentColor} width={7} head={22} />
				<Arrow2 from={current > 0 ? [cx + r + wd / 2 + bW * 0.2, cy - bH] : [cx + r + wd / 2 + bW + r * 0.6, cy - bH]} to={current > 0 ? [cx + r + wd / 2 + bW + r * 0.6, cy - bH] : [cx + r + wd / 2 + bW * 0.2, cy - bH]} color={currentColor} width={7} head={22} />
			</g> : null}
		</g>
	);
};

// ---------------------------------------------------------------- a function graph with a cursor
export type FnBox = {x: number; y: number; w: number; h: number; x0?: number; x1: number; ymin: number; ymax: number};
export const fnMap = (b: FnBox) => ({X: (u: number) => b.x + ((u - (b.x0 ?? 0)) / (b.x1 - (b.x0 ?? 0))) * b.w, Y: (v: number) => b.y + b.h - ((v - b.ymin) / (b.ymax - b.ymin)) * b.h});
/** Axes (with a zero line when ymin < 0), and the curve of `fn` from x0 to x0 + grow (x1 - x0). */
export const FnGraph: React.FC<{b: FnBox; fn?: (u: number) => number; grow?: number; color?: string; width?: number; axes?: boolean; xLabel?: React.ReactNode; yLabel?: React.ReactNode; size?: number; dash?: string; cursor?: number; cursorColor?: string; n?: number; opacity?: number; xTicks?: readonly (readonly [number, string])[]}> = ({b, fn, grow = 1, color = INK, width = 6, axes = true, xLabel, yLabel, size = 30, dash, cursor, cursorColor = INK, n = 240, opacity = 1, xTicks = []}) => {
	if (opacity <= 0.001) return null;
	const m = fnMap(b), x0 = b.x0 ?? 0;
	const zeroY = b.ymin < 0 && b.ymax > 0 ? m.Y(0) : b.y + b.h;
	const pts: string[] = [];
	if (fn) for (let i = 0; i <= n; i++) { const u = x0 + ((b.x1 - x0) * i) / n; if (i / n > grow + 1e-9) break; pts.push(`${i ? 'L' : 'M'}${m.X(u).toFixed(1)},${m.Y(fn(u)).toFixed(1)}`); }
	return (
		<g opacity={opacity}>
			{axes ? <g>
				<line x1={b.x} y1={zeroY} x2={b.x + b.w + 24} y2={zeroY} stroke={INK} strokeWidth={4} />
				<line x1={b.x} y1={b.y + b.h + (b.ymin < 0 ? 0 : 0)} x2={b.x} y2={b.y - 20} stroke={INK} strokeWidth={4} />
				{xTicks.map(([u, l]) => <g key={l}><line x1={m.X(u)} y1={zeroY - 8} x2={m.X(u)} y2={zeroY + 8} stroke={INK} strokeWidth={3} /><text x={m.X(u)} y={zeroY + size + 10} textAnchor="middle" style={svgText(size, INK, 700)}>{l}</text></g>)}
				{xLabel ? <text x={b.x + b.w + 30} y={zeroY + 10} style={svgText(size, INK, 700)}>{xLabel}</text> : null}
				{yLabel ? <text x={b.x - 14} y={b.y - 30} style={svgText(size, color, 800)}>{yLabel}</text> : null}
			</g> : null}
			{pts.length > 1 ? <path d={pts.join(' ')} fill="none" stroke={color} strokeWidth={width} strokeDasharray={dash} strokeLinejoin="round" /> : null}
			{cursor !== undefined && fn ? <g>
				<line x1={m.X(cursor)} y1={b.y - 10} x2={m.X(cursor)} y2={b.y + b.h} stroke={cursorColor} strokeWidth={3} strokeDasharray="8 8" />
				<circle cx={m.X(cursor)} cy={m.Y(fn(cursor))} r={13} fill={color} stroke={CARD} strokeWidth={4} />
			</g> : null}
		</g>
	);
};

// ---------------------------------------------------------------- the oscilloscope screen
/** Screen box of the oscilloscope plate placed at p. */
export const scopeScreen = (p: Place) => { const g = placeOf(SCOPE, p); const s = MANCHOR.scope.screen; const a = g.at(s[0], s[1]), b = g.at(s[2], s[3]); return {x: a[0], y: a[1], w: b[0] - a[0], h: b[1] - a[1], in1: g.at(...MANCHOR.scope.in1), in2: g.at(...MANCHOR.scope.in2)}; };
/**
 * The oscilloscope plate with a coded trace on its screen: `fn(u)` for u from 0 to `span` across the screen, values in
 * -1 to 1 times `amp`; a dashed zero line; `grow` draws the trace from the left; `ghost` adds a dashed earlier trace.
 */
export const Scope: React.FC<{p: Place; fn?: (u: number) => number; span?: number; amp?: number; grow?: number; color?: string; ghost?: (u: number) => number; ghostAmp?: number; ghostSpan?: number; q?: number; opacity?: number; grid?: boolean}> = ({p, fn, span = 2, amp = 0.8, grow = 1, color = '#ff9ec4', ghost, ghostAmp = 0.8, ghostSpan = 2, q = 0, opacity = 1, grid = true}) => {
	if (opacity <= 0.001) return null;
	const s = scopeScreen(p);
	const midY = s.y + s.h / 2, padX = s.w * 0.04;
	const line = (f: (u: number) => number, a: number, sp: number, gr: number) => {
		const out: string[] = [];
		const n = 220;
		for (let i = 0; i <= n * gr; i++) { const t = i / n; out.push(`${i ? 'L' : 'M'}${(s.x + padX + t * (s.w - 2 * padX)).toFixed(1)},${(midY - f(t * sp) * a * s.h * 0.45).toFixed(1)}`); }
		return out.join(' ');
	};
	return (
		<g opacity={opacity}>
			<Plate spec={SCOPE} p={p} />
			{grid ? <g stroke="rgba(180,230,200,0.18)" strokeWidth={1.5}>{[1, 2, 3, 4, 5, 6, 7].map(i => <line key={i} x1={s.x + (s.w * i) / 8} y1={s.y + 6} x2={s.x + (s.w * i) / 8} y2={s.y + s.h - 6} />)}{[1, 2, 3].map(i => <line key={`h${i}`} x1={s.x + 6} y1={s.y + (s.h * i) / 4} x2={s.x + s.w - 6} y2={s.y + (s.h * i) / 4} />)}</g> : null}
			<line x1={s.x + padX} y1={midY} x2={s.x + s.w - padX} y2={midY} stroke="#d8f3e3" strokeWidth={2.5} strokeDasharray="10 8" />
			{ghost ? <path d={line(ghost, ghostAmp, ghostSpan, 1)} fill="none" stroke="#d8f3e3" strokeWidth={3} strokeDasharray="10 8" /> : null}
			{fn && grow > 0.001 ? <path d={line(fn, amp, span, grow)} fill="none" stroke={color} strokeWidth={5} strokeLinejoin="round" /> : null}
			{q > 0.001 ? <text x={s.x + s.w / 2} y={midY - s.h * 0.12} textAnchor="middle" opacity={q} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: s.h * 0.42, fill: '#ffe9a8'}}>?</text> : null}
		</g>
	);
};

// ---------------------------------------------------------------- a needle ammeter (coded, exam style)
/** A circle with "A", a scale arc and a needle at `value` (0 to 1 of full scale); `ghost` draws an earlier needle. */
export const NeedleMeter: React.FC<{cx: number; cy: number; r?: number; value: number; ghost?: number; color?: string; ghostColor?: string; letter?: string; opacity?: number}> = ({cx, cy, r = 90, value, ghost, color = INK, ghostColor = INK, letter = 'A', opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const ang = (v: number) => 150 - 120 * Math.max(0, Math.min(1, v));
	const needle = (v: number, c: string, w: number) => { const a = rad(ang(v)); return <line x1={cx} y1={cy + r * 0.25} x2={cx + r * 0.78 * Math.cos(a)} y2={cy + r * 0.25 - r * 0.78 * Math.sin(a)} stroke={c} strokeWidth={w} strokeLinecap="round" />; };
	return (
		<g opacity={opacity}>
			<circle cx={cx} cy={cy} r={r} fill={CARD} stroke={INK} strokeWidth={5} />
			<path d={arcPath(cx, cy + r * 0.25, r * 0.78, 150, 30)} stroke={INK} strokeWidth={3} fill="none" />
			{[0, 0.25, 0.5, 0.75, 1].map(v => { const a = rad(ang(v)); return <line key={v} x1={cx + r * 0.7 * Math.cos(a)} y1={cy + r * 0.25 - r * 0.7 * Math.sin(a)} x2={cx + r * 0.86 * Math.cos(a)} y2={cy + r * 0.25 - r * 0.86 * Math.sin(a)} stroke={INK} strokeWidth={3} />; })}
			<text x={cx} y={cy + r * 0.72} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: r * 0.42, fill: INK}}>{letter}</text>
			{ghost !== undefined ? needle(ghost, ghostColor, 4) : null}
			{needle(value, color, 7)}
			<circle cx={cx} cy={cy + r * 0.25} r={7} fill={INK} />
		</g>
	);
};

// ---------------------------------------------------------------- the hobby motor and its flywheel
/** Points of the hobby motor placed at p, and where its flywheel sits (centre and radius) on the shaft. */
export const hobbyPts = (p: Place, fly = 0.5) => {
	const g = placeOf(HOBBY_MOTOR, p);
	const tip = g.at(...MANCHOR.hobby.shaftTip), root = g.at(...MANCHOR.hobby.shaftRoot);
	return {...g, tabHi: g.at(...MANCHOR.hobby.tabHi), tabLo: g.at(...MANCHOR.hobby.tabLo), tip, root, fly: [root[0] + (tip[0] - root[0]) * 0.78, root[1] + (tip[1] - root[1]) * 0.78] as Pt, flyR: g.h * fly};
};
/** The hobby motor with the flywheel (face-on disc, turned `deg`) on its shaft. */
export const HobbyMotor: React.FC<{p: Place; deg: number; fly?: number; opacity?: number; flywheel?: number}> = ({p, deg, fly = 0.5, opacity = 1, flywheel = 1}) => {
	if (opacity <= 0.001) return null;
	const h = hobbyPts(p, fly);
	const fw = 2 * h.flyR;
	const fp: Place = {x: h.fly[0] - fw / 2, y: h.fly[1] - fw / 2 * ((FLYWHEEL.box[3] - FLYWHEEL.box[1]) / (FLYWHEEL.box[2] - FLYWHEEL.box[0])), w: fw};
	const hub = placeOf(FLYWHEEL, fp).at(...MANCHOR.flywheelHub);
	return (
		<g opacity={opacity}>
			<Plate spec={HOBBY_MOTOR} p={p} />
			<g opacity={flywheel}><Plate spec={FLYWHEEL} p={fp} rotate={{deg, px: hub[0], py: hub[1]}} /></g>
		</g>
	);
};

// ---------------------------------------------------------------- stator ring with a turning field
/** A ring of `n` grey stator coils round (cx, cy) with a dashed field arrow at `fieldDeg` (screen degrees, anticlockwise). */
export const StatorRing: React.FC<{cx: number; cy: number; r: number; n?: number; fieldDeg: number; fieldColor: string; coilColor?: string; pulse?: number; opacity?: number}> = ({cx, cy, r, n = 6, fieldDeg, fieldColor, coilColor = '#8a8378', pulse = -1, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const L = r * 0.82, a = rad(fieldDeg);
	return (
		<g opacity={opacity}>
			<circle cx={cx} cy={cy} r={r + 34} fill="none" stroke="#c9c2b6" strokeWidth={22} />
			{Array.from({length: n}, (_, i) => {
				const t = (360 / n) * i;
				return <g key={i} transform={`rotate(${-t} ${cx} ${cy})`}>
					<rect x={cx + r - 12} y={cy - 40} width={56} height={80} rx={10} fill={i === pulse ? '#f6dce7' : '#efe9de'} stroke={coilColor} strokeWidth={4} />
					{[0, 1, 2, 3].map(k => <line key={k} x1={cx + r - 4 + k * 13} y1={cy - 36} x2={cx + r - 4 + k * 13} y2={cy + 36} stroke={coilColor} strokeWidth={3} />)}
				</g>;
			})}
			<Arrow2 from={[cx - L * Math.cos(a), cy + L * Math.sin(a)]} to={[cx + L * Math.cos(a), cy - L * Math.sin(a)]} color={fieldColor} width={8} head={30} dash="22 14" />
		</g>
	);
};
/** A coded end-on cage rotor: a ring with bar dots round its rim and an index mark at `deg`. */
export const EndOnCage: React.FC<{cx: number; cy: number; r: number; deg: number; bars?: number; color?: string; mark?: string; opacity?: number}> = ({cx, cy, r, deg, bars = 12, color = '#6f6a62', mark = '#1f3a68', opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const a = rad(deg);
	return (
		<g opacity={opacity}>
			<circle cx={cx} cy={cy} r={r} fill="#e4e0d8" stroke={color} strokeWidth={6} />
			{Array.from({length: bars}, (_, i) => { const t = a + (2 * Math.PI * i) / bars; return <circle key={i} cx={cx + r * 0.8 * Math.cos(t)} cy={cy - r * 0.8 * Math.sin(t)} r={r * 0.08} fill={color} />; })}
			<circle cx={cx} cy={cy} r={r * 0.16} fill="#bdb6aa" stroke={color} strokeWidth={3} />
			<line x1={cx} y1={cy} x2={cx + r * 0.95 * Math.cos(a)} y2={cy - r * 0.95 * Math.sin(a)} stroke={mark} strokeWidth={8} strokeLinecap="round" />
		</g>
	);
};
