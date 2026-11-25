// Transformer and grid kit for Module 6 (additive kit file, 25 November 2026; first used by phys-y12-m6-v13 to v15,
// offered to the rest of Module 6 and to Year 11 electricity). Course-neutral: every label, number and colour of
// meaning is passed in by the lesson. Painted plates are placed by their visible (alpha) box at uniform scale (bench.tsx
// `Plate`, never stretched); everything else here is a coded diagram part: the closed-core schematic with role-coloured
// windings, a heat tint and leakage loops, the assumption card, a core cross-section with flux dots, lamination lines and
// eddy loops, a grid of domain arrows, an AC trace strip, a resistor zigzag, a power line with moving charges, a
// multimeter readout, and a concentric-windings cut-away.
//
// Plate anchors (native pixels, read from the plates on a 100 px grid, 25 November 2026):
//   transformer (1448 x 1086): visible box (349, 233) to (1098, 867); few thick turns on the left limb, many thin turns
//     on the right; terminal posts left (363, 458) and (363, 628), right (1042, 475) and (1042, 633);
//   power point (1536 x 1024): box (243, 146) to (1464, 906); the plug's cord ends at (1464, 830);
//   transmission tower (1071 x 1469): box (197, 40) to (874, 1428); insulator tips upper (316, 455) and (755, 455),
//     lower (205, 752) and (866, 752);
//   power station v2 (1774 x 887): box (239, 46) to (1443, 817); switchyard insulators (1417, 640);
//   house (1774 x 887): box (219, 134) to (1549, 782); left eave (230, 300);
//   pole transformer (1003 x 1568): box (252, 285) to (767, 1312); middle cross-arm insulator (544, 547), low-voltage
//     wires leave at (731, 787);
//   substation (1663 x 946): box (302, 163) to (1360, 804); gantry insulators (1230, 380);
//   DC motor model (1536 x 1024): box (236, 160) to (1297, 898); split ring (767, 725), coil centre on the axle
//     (767, 450), brushes (650, 700) and (883, 700), terminal screws (483, 750) and (1053, 750);
//   laminations (1586 x 992): box (230, 196) to (1367, 821); soft-iron rod (2172 x 724): box (202, 296) to (1970, 426);
//   multimeter (bench.tsx DMM): display (293, 270) to (787, 480).
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD, INK} from '../../shared/tokens';
import {DMM, Plate, placeOf} from './bench';
import type {Place} from './bench';
import {coreGeom} from './induction';

type Pt = [number, number];
type Spec = {src: string; W: number; H: number; box: readonly [number, number, number, number]};
const P = (name: string) => `assets/physics/${name}.png`;
export const XFMR: Spec = {src: P('y12p-transformer-v1'), W: 1448, H: 1086, box: [349, 233, 1098, 867]};
export const POWER_POINT: Spec = {src: P('phys-y11-power-point-v1'), W: 1536, H: 1024, box: [243, 146, 1464, 906]};
export const TOWER: Spec = {src: P('phys-y11-transmission-tower-v1'), W: 1071, H: 1469, box: [197, 40, 874, 1428]};
export const STATION: Spec = {src: P('phys-y11-power-station-v2'), W: 1774, H: 887, box: [239, 46, 1443, 817]};
export const HOUSE: Spec = {src: P('phys-y11-house-v1'), W: 1774, H: 887, box: [219, 134, 1549, 782]};
export const POLE_XFMR: Spec = {src: P('y12p-pole-transformer-v1'), W: 1003, H: 1568, box: [252, 285, 767, 1312]};
export const LAMINATIONS: Spec = {src: P('y12p-lamination-sheets-v1'), W: 1586, H: 992, box: [230, 196, 1367, 821]};
export const SUBSTATION: Spec = {src: P('y12p-substation-v1'), W: 1663, H: 946, box: [302, 163, 1360, 804]};
export const DC_MOTOR: Spec = {src: P('y12p-dc-motor-model-v1'), W: 1536, H: 1024, box: [236, 160, 1297, 898]};
export const SOFT_IRON_ROD: Spec = {src: P('phys-y11-rod-soft-iron-v1'), W: 2172, H: 724, box: [202, 296, 1970, 426]};
export const LVS_PLATE: Spec = {src: P('phys-y11-low-voltage-supply-v1'), W: 1600, H: 1000, box: [144, 236, 1456, 763]};
export const TRANSFORMER_KIT_PLATES = [XFMR, POWER_POINT, TOWER, STATION, HOUSE, POLE_XFMR, LAMINATIONS, SUBSTATION, DC_MOTOR, SOFT_IRON_ROD, LVS_PLATE, DMM].map(s => s.src);
export const ANCHOR = {
	xfmr: {l1: [363, 458] as Pt, l2: [363, 628] as Pt, r1: [1042, 475] as Pt, r2: [1042, 633] as Pt},
	powerPointCord: [1464, 830] as Pt,
	tower: {uL: [316, 455] as Pt, uR: [755, 455] as Pt, lL: [205, 752] as Pt, lR: [866, 752] as Pt},
	station: [1417, 640] as Pt,
	houseEave: [230, 300] as Pt,
	pole: {arm: [544, 547] as Pt, lv: [731, 787] as Pt},
	substation: [1230, 380] as Pt,
	motor: {ring: [767, 725] as Pt, coil: [767, 450] as Pt, brushL: [650, 700] as Pt, brushR: [883, 700] as Pt, termL: [483, 750] as Pt, termR: [1053, 750] as Pt},
	lvs: {pos: [1125, 535] as Pt, neg: [1295, 535] as Pt, inlet: [150, 520] as Pt},
};
/** A plate placed by its visible height (uniform scale). */
export const byHeight = (spec: Spec, x: number, y: number, h: number): Place => ({x, y, w: (h * (spec.box[2] - spec.box[0])) / (spec.box[3] - spec.box[1])});
/** Visible height of a plate drawn at visible width w. */
export const plateH = (spec: Spec, w: number) => (w * (spec.box[3] - spec.box[1])) / (spec.box[2] - spec.box[0]);
/** Screen point of a native plate pixel; `flip` mirrors it about the plate's visible box (as `Plate flip`). */
export const anchorAt = (spec: Spec, p: Place, n: readonly [number, number], flip = false): Pt => {
	const q = placeOf(spec, p).at(n[0], n[1]);
	return flip ? [2 * p.x + p.w - q[0], q[1]] : q;
};

const svgText = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color, paintOrder: 'stroke', stroke: CARD, strokeWidth: 7, strokeLinejoin: 'round'} as React.CSSProperties);
export const HEAT = '#d9542b';
export const COPPER = '#b8642a';

// ---------------------------------------------------------------- the closed-core schematic, extended
/** Geometry of `XCore` (the same core as induction.tsx `ClosedCore`): the y of drawn turn k of n, limb centres, ends. */
export const xGeom = (cx: number, cy: number, s: number, t: number) => {
	const g = coreGeom(cx, cy, s, t);
	const span = 2 * g.i - 60;
	return {...g, span, turnY: (n: number, k: number) => cy - span / 2 + (n === 1 ? span / 2 : (span * k) / (n - 1))};
};
/**
 * A square soft-iron core (grey) with a primary of `np` drawn turns on the left limb and a secondary of `ns` on the
 * right, each in its own colour and wire width (drawn exactly as `ClosedCore` when both are copper and 7 px), with
 * slate flux chevrons circulating clockwise by `phase` px (strength `flux`), highlighted turns (`glowP`, `glowS`),
 * a warm heat tint over the windings and the core (`heat` 0 to 1, `heatP`/`heatS` per winding) and dashed leakage
 * loops that leave the core beside the primary and close through the air (`leak` 0 to 1).
 */
export const XCore: React.FC<{cx: number; cy: number; s: number; t: number; np: number; ns: number; phase?: number; flux?: number; flowColor?: string; pColor?: string; sColor?: string; pWidth?: number; sWidth?: number; glowP?: readonly number[]; glowS?: readonly number[]; glowColor?: string; heat?: number; heatP?: number; heatS?: number; heatCore?: number; leak?: number; pulseP?: number; pulseS?: number; sOpacity?: number; opacity?: number}> = ({cx, cy, s, t, np, ns, phase = 0, flux = 1, flowColor = '#55606b', pColor = COPPER, sColor = COPPER, pWidth = 7, sWidth = 7, glowP = [], glowS = [], glowColor = '#c04a7a', heat = 0, heatP, heatS, heatCore, leak = 0, pulseP = 0, pulseS = 0, sOpacity = 1, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const g = xGeom(cx, cy, s, t);
	const hp = heatP ?? heat, hs = heatS ?? heat, hc = heatCore ?? heat;
	const wind = (x: number, n: number, color: string, w: number, glow: readonly number[], pulse: number, hh: number) => Array.from({length: n}, (_, k) => {
		const y = g.turnY(n, k), on = glow.includes(k);
		const d = `M${x - t / 2 - 10},${y + 8} Q${x},${y - 14} ${x + t / 2 + 10},${y + 8}`;
		return (
			<g key={k}>
				{hh > 0.01 ? <path d={d} fill="none" stroke={HEAT} strokeWidth={w + 14} strokeLinecap="round" opacity={0.45 * hh} /> : null}
				<path d={d} fill="none" stroke={on ? glowColor : color} strokeWidth={w + 4 * pulse + (on ? 4 : 0)} strokeLinecap="round" />
			</g>
		);
	});
	const per = 8 * g.m, gap = per / 12;
	const chev = flux <= 0.001 ? null : Array.from({length: 12}, (_, k) => {
		const u = (((k * gap + phase) % per) + per) % per;
		const side = Math.floor(u / (2 * g.m)), w = u - side * 2 * g.m;
		const pts: [Pt, number][] = [[[cx - g.m + w, cy - g.m], 0], [[cx + g.m, cy - g.m + w], 90], [[cx + g.m - w, cy + g.m], 180], [[cx - g.m, cy + g.m - w], 270]];
		const [[px, py], ang] = pts[side];
		return <path key={k} d="M-12,-14 L10,0 L-12,14" transform={`translate(${px} ${py}) rotate(${ang})`} fill="none" stroke={flowColor} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" opacity={flux} />;
	});
	const corePath = `M${cx - g.o},${cy - g.o} H${cx + g.o} V${cy + g.o} H${cx - g.o} Z M${cx - g.i},${cy - g.i} V${cy + g.i} H${cx + g.i} V${cy - g.i} Z`;
	// leakage: loops that leave the left limb's outer face and close back into it through the air, missing the secondary
	const lk = leak > 0.001 ? [0.55, 0.85, 1.15].map((r, k) => {
		const x0 = g.lx - t / 2, h = g.i * (0.5 + 0.18 * k), bulge = (90 + 70 * k) * r * leak + 10;
		return <path key={k} d={`M${x0},${cy - h} C${x0 - bulge},${cy - h * 0.7} ${x0 - bulge},${cy + h * 0.7} ${x0},${cy + h}`} fill="none" stroke={flowColor} strokeWidth={5} strokeDasharray="14 10" opacity={Math.min(1, leak * 1.5)} />;
	}) : null;
	const lk2 = leak > 0.001 ? [0, 1].map(k => {
		const x0 = g.lx + t / 2, h = g.i * (0.45 + 0.2 * k), bulge = (70 + 60 * k) * leak + 10;
		return <path key={k} d={`M${x0},${cy - h} C${x0 + bulge},${cy - h * 0.6} ${x0 + bulge},${cy + h * 0.6} ${x0},${cy + h}`} fill="none" stroke={flowColor} strokeWidth={5} strokeDasharray="14 10" opacity={Math.min(1, leak * 1.5)} />;
	}) : null;
	return (
		<g opacity={opacity}>
			<path d={corePath} fill="#b9bdc2" stroke="#5b6168" strokeWidth={4} fillRule="evenodd" />
			{hc > 0.01 ? <path d={corePath} fill={HEAT} fillRule="evenodd" opacity={0.3 * hc} /> : null}
			{chev}
			{lk}{lk2}
			{wind(g.lx, np, pColor, pWidth, glowP, pulseP, hp)}
			<g opacity={sOpacity}>{wind(g.rx, ns, sColor, sWidth, glowS, pulseS, hs)}</g>
		</g>
	);
};

// ---------------------------------------------------------------- the assumption card (SVG)
export type CardItem = {text: string; mark?: 'tick' | 'q' | 'cross' | 'none'; markO?: number; strike?: number; note?: string; noteO?: number; noteColor?: string; fix?: string; fixO?: number; fixColor?: string; hi?: number};
/**
 * A card of numbered assumptions with a mark per item (an ink tick, a "?", or a slate cross), an optional strike,
 * a note under the item (for example the loss that breaks it) and a fix line. All text solid; `hi` pulses a row.
 */
export const AssumptionCard: React.FC<{x: number; y: number; w: number; title?: string; items: readonly CardItem[]; size?: number; rowH?: number; opacity?: number; markColor?: string; crossColor?: string}> = ({x, y, w, title, items, size = 28, rowH, opacity = 1, markColor = INK, crossColor = '#8a8378'}) => {
	if (opacity <= 0.001) return null;
	const lines = (it: CardItem) => 1 + (it.note ? 1 : 0) + (it.fix ? 1 : 0);
	const rh = (it: CardItem) => rowH ?? size * 1.32 * lines(it) + 10;
	const top = y + (title ? size * 1.6 : 12);
	const h = top - y + items.reduce((a, it) => a + rh(it), 0) + 10;
	let yy = top;
	return (
		<g opacity={opacity}>
			<rect x={x} y={y} width={w} height={h} rx={16} fill={CARD} stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
			{title ? <text x={x + 20} y={y + size * 1.15} style={svgText(size, INK, 800)}>{title}</text> : null}
			{items.map((it, i) => {
				const ry = yy; yy += rh(it);
				const ty = ry + size;
				const mx = x + w - 34, my = ty - size * 0.35, mo = it.markO ?? 1;
				const tw = Math.min(w - 110, it.text.length * size * 0.5);
				return (
					<g key={i}>
						{(it.hi ?? 0) > 0.01 ? <rect x={x + 8} y={ry - 4} width={w - 16} height={rh(it) - 2} rx={10} fill="#f8e8c8" opacity={it.hi} /> : null}
						<text x={x + 20} y={ty} style={svgText(size, INK, 800)}>{i + 1}.</text>
						<text x={x + 20 + size * 1.2} y={ty} style={svgText(size, INK, 600)}>{it.text}</text>
						{(it.strike ?? 0) > 0.01 ? <line x1={x + 18 + size * 1.2} y1={ty - size * 0.32} x2={x + 18 + size * 1.2 + tw * (it.strike ?? 0)} y2={ty - size * 0.32} stroke={crossColor} strokeWidth={4} strokeLinecap="round" /> : null}
						{it.note ? <text x={x + 20 + size * 1.2} y={ty + size * 1.3} opacity={it.noteO ?? 1} style={svgText(size, it.noteColor ?? INK, 800)}>{it.note}</text> : null}
						{it.fix ? <text x={x + 20 + size * 1.2} y={ty + size * 1.3 * (it.note ? 2 : 1)} opacity={it.fixO ?? 1} style={svgText(size, it.fixColor ?? INK, 700)}>{it.fix}</text> : null}
						{it.mark === 'tick' ? <path d={`M${mx - 14},${my} L${mx - 3},${my + 12} L${mx + 16},${my - 14}`} fill="none" stroke={markColor} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" opacity={mo} /> : null}
						{it.mark === 'q' ? <text x={mx} y={ty + 2} textAnchor="middle" opacity={mo} style={svgText(size * 1.25, INK, 800)}>?</text> : null}
						{it.mark === 'cross' ? <path d={`M${mx - 14},${my - 14} L${mx + 14},${my + 14} M${mx + 14},${my - 14} L${mx - 14},${my + 14}`} stroke={crossColor} strokeWidth={6} strokeLinecap="round" opacity={mo} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------------------------------------------------------------- a core cross-section
/**
 * A slice of a core cut at right angles to the flux: a grey block divided into `sheets` vertical strips by cream
 * insulation lines (`split` 0 to 1 draws them), slate flux dots (out of the screen, `flux` > 0) or crosses (into it)
 * whose size follows |flux|, one rose eddy loop per strip whose arrows show the sense (`eddy` > 0 clockwise as seen,
 * size of |eddy| sets the opacity), a dashed outline loop (`loop`), and a warm heat tint (`heat`).
 */
export const CoreSlice: React.FC<{x: number; y: number; w: number; h: number; sheets?: number; split?: number; flux?: number; eddy?: number; loop?: number; heat?: number; dots?: number; eddyColor?: string; fluxColor?: string; enlarge?: number; opacity?: number}> = ({x, y, w, h, sheets = 1, split = 1, flux = 0, eddy = 0, loop = 0, heat = 0, dots = 1, eddyColor = '#c04a7a', fluxColor = '#55606b', enlarge = -1, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const n = Math.max(1, Math.round(sheets)), sw = w / n;
	const step = Math.max(46, Math.min(80, w / 7));
	const cols = Math.max(1, Math.floor(w / step)), rows = Math.max(1, Math.floor(h / step));
	const dx0 = x + (w - (cols - 1) * step) / 2, dy0 = y + (h - (rows - 1) * step) / 2;
	const r = 4 + 9 * Math.min(1, Math.abs(flux));
	const loops = Array.from({length: n}, (_, k) => {
		const lx = x + k * sw + Math.max(8, sw * 0.16), ly = y + h * 0.09, lw = sw - 2 * Math.max(8, sw * 0.16), lh = h * 0.82;
		const big = k === enlarge;
		const a = Math.min(1, Math.abs(eddy)), cw = eddy >= 0;
		const hs = Math.min(18, Math.max(10, lw * 0.5));
		const head = (hx: number, hy: number, down: boolean) => <path d={down ? `M${hx - hs * 0.7},${hy - hs} L${hx + hs * 0.7},${hy - hs} L${hx},${hy + hs * 0.4} Z` : `M${hx - hs * 0.7},${hy + hs} L${hx + hs * 0.7},${hy + hs} L${hx},${hy - hs * 0.4} Z`} fill={eddyColor} />;
		return (
			<g key={k}>
				{loop > 0.001 && n === 1 ? <rect x={lx} y={ly} width={lw} height={lh} rx={Math.min(lw, lh) * 0.22} fill="none" stroke={eddyColor} strokeWidth={5} strokeDasharray="16 10" opacity={loop * (1 - a)} /> : null}
				{a > 0.001 ? <g opacity={a}>
					<rect x={lx} y={ly} width={lw} height={lh} rx={Math.min(lw / 2, lh * 0.22)} fill="none" stroke={eddyColor} strokeWidth={big ? 7 : n > 6 ? 4 : 6} />
					{head(lx + lw, y + h / 2, cw)}{head(lx, y + h / 2, !cw)}
				</g> : null}
			</g>
		);
	});
	return (
		<g opacity={opacity}>
			<rect x={x} y={y} width={w} height={h} fill="#b9bdc2" stroke="#5b6168" strokeWidth={4} />
			{heat > 0.01 ? <rect x={x} y={y} width={w} height={h} fill={HEAT} opacity={0.42 * Math.min(1, heat)} /> : null}
			{dots > 0.001 ? <g opacity={dots}>{Array.from({length: cols * rows}, (_, i) => {
				const cx = dx0 + (i % cols) * step, cy = dy0 + Math.floor(i / cols) * step;
				return flux >= 0 ? <g key={i}><circle cx={cx} cy={cy} r={r + 5} fill="none" stroke={fluxColor} strokeWidth={2.5} /><circle cx={cx} cy={cy} r={r * 0.55} fill={fluxColor} /></g>
					: <g key={i}><circle cx={cx} cy={cy} r={r + 5} fill="none" stroke={fluxColor} strokeWidth={2.5} /><path d={`M${cx - r * 0.7},${cy - r * 0.7} L${cx + r * 0.7},${cy + r * 0.7} M${cx + r * 0.7},${cy - r * 0.7} L${cx - r * 0.7},${cy + r * 0.7}`} stroke={fluxColor} strokeWidth={3} /></g>;
			})}</g> : null}
			{n > 1 ? Array.from({length: n - 1}, (_, k) => <line key={k} x1={x + (k + 1) * sw} y1={y} x2={x + (k + 1) * sw} y2={y + h * Math.min(1, split)} stroke="#efe0b4" strokeWidth={n > 6 ? 5 : 7} />) : null}
			{loops}
		</g>
	);
};

// ---------------------------------------------------------------- domain arrows
/**
 * A grid of coded magnetisation arrows (cols x rows, cell px) that turn together: `dir` 1 points right, -1 left,
 * values between turn the arrows through the vertical (each with a small fixed tilt). `pulse` adds a warm glow.
 */
export const DomainGrid: React.FC<{x: number; y: number; cols: number; rows: number; cell: number; dir: number; color?: string; pulse?: number; opacity?: number}> = ({x, y, cols, rows, cell, dir, color = '#6b6358', pulse = 0, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const d = Math.max(-1, Math.min(1, dir));
	return (
		<g opacity={opacity}>
			<rect x={x} y={y} width={cols * cell} height={rows * cell} rx={18} fill="#d4d6d9" stroke="#5b6168" strokeWidth={4} />
			{pulse > 0.01 ? <rect x={x} y={y} width={cols * cell} height={rows * cell} rx={18} fill={HEAT} opacity={0.35 * pulse} /> : null}
			{Array.from({length: cols * rows}, (_, i) => {
				const c = i % cols, r = Math.floor(i / cols);
				const jit = (((i * 37) % 11) - 5) * 2.2;
				const ang = jit + 90 * (1 - d);
				const cx = x + (c + 0.5) * cell, cy = y + (r + 0.5) * cell, L = cell * 0.34;
				return (
					<g key={i} transform={`translate(${cx} ${cy}) rotate(${ang})`}>
						<line x1={-L} y1={0} x2={L - 10} y2={0} stroke={color} strokeWidth={7} strokeLinecap="round" />
						<path d={`M${L + 4},0 L${L - 16},-12 L${L - 16},12 Z`} fill={color} />
					</g>
				);
			})}
		</g>
	);
};

// ---------------------------------------------------------------- traces, lines, resistors, meters
/** An alternating trace strip: `cycles` sine cycles across w, drawn up to `grow` (0 to 1), with a cursor at `now`. */
export const ACTrace: React.FC<{x: number; y: number; w: number; h: number; cycles?: number; amp?: number; grow?: number; now?: number; color?: string; axis?: boolean; width?: number; opacity?: number}> = ({x, y, w, h, cycles = 2, amp = 1, grow = 1, now, color = '#55606b', axis = true, width = 5, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const N = 160, yc = y + h / 2;
	const pts = Array.from({length: N + 1}, (_, i) => i / N).filter(u => u <= grow + 1e-9).map(u => [x + u * w, yc - (h / 2) * amp * Math.sin(2 * Math.PI * cycles * u)]);
	const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
	return (
		<g opacity={opacity}>
			{axis ? <line x1={x} y1={yc} x2={x + w} y2={yc} stroke={INK} strokeWidth={2.5} opacity={0.6} /> : null}
			{pts.length > 1 ? <path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinejoin="round" /> : null}
			{now !== undefined ? <><line x1={x + now * w} y1={y - 6} x2={x + now * w} y2={y + h + 6} stroke={INK} strokeWidth={3} strokeDasharray="8 7" /><circle cx={x + now * w} cy={yc - (h / 2) * amp * Math.sin(2 * Math.PI * cycles * now)} r={10} fill={color} stroke={CARD} strokeWidth={3} /></> : null}
		</g>
	);
};
/** A resistor zigzag from (x1, y1) to (x2, y2) (n points, amplitude amp px), on a straight lead. */
export const Zigzag: React.FC<{x1: number; y1: number; x2: number; y2: number; n?: number; amp?: number; color?: string; width?: number; opacity?: number}> = ({x1, y1, x2, y2, n = 6, amp = 16, color = INK, width = 4.5, opacity = 1}) => {
	const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L, nx = -uy, ny = ux;
	const pts: Pt[] = [[x1, y1]];
	for (let k = 0; k < 2 * n; k++) { const t = (k + 0.5) / (2 * n), s = k % 2 ? -1 : 1; pts.push([x1 + ux * L * t + nx * amp * s, y1 + uy * L * t + ny * amp * s]); }
	pts.push([x2, y2]);
	return <path d={pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')} fill="none" stroke={color} strokeWidth={width} strokeLinejoin="round" opacity={opacity} />;
};
/** A wire along a polyline, with a warm heat glow under it (`tint` 0 to 1). */
export const HotWire: React.FC<{pts: readonly Pt[]; tint?: number; color?: string; width?: number; opacity?: number; dash?: string}> = ({pts, tint = 0, color = INK, width = 4, opacity = 1, dash}) => {
	const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
	return (
		<g opacity={opacity}>
			{tint > 0.01 ? <path d={d} fill="none" stroke={HEAT} strokeWidth={width + 18} strokeLinecap="round" strokeLinejoin="round" opacity={0.5 * Math.min(1, tint)} /> : null}
			<path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={dash} />
		</g>
	);
};
/** A sagging span between two points (a quadratic dip of `sag` px), as a polyline for `HotWire` and `FlowDots`. */
export const sagPts = (a: Pt, b: Pt, sag: number, n = 16): Pt[] => Array.from({length: n + 1}, (_, i) => { const t = i / n; return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t + 4 * sag * t * (1 - t)]; });
/** The painted multimeter with a coded readout in its display window. */
export const Multimeter: React.FC<{p: Place; text?: string; color?: string; size?: number; opacity?: number}> = ({p, text, color = INK, size = 44, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const g = placeOf(DMM, p), a = g.at(293, 270), b = g.at(787, 480);
	return (
		<g opacity={opacity}>
			<Plate spec={DMM} p={p} />
			{text ? <text x={(a[0] + b[0]) / 2} y={(a[1] + b[1]) / 2 + size * 0.36} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fill: color}}>{text}</text> : null}
		</g>
	);
};
/** Where a multimeter's terminals are (common, then the V/ohm socket), for coded leads. */
export const meterPts = (p: Place) => { const g = placeOf(DMM, p); return {com: g.at(539, 1118), v: g.at(712, 1118), a: g.at(364, 1118), h: g.h}; };

// ---------------------------------------------------------------- concentric windings (cut-away of one limb)
/**
 * One core limb cut lengthways (grey bar, vertical) with the primary wound on it (orange layer) and the secondary
 * wound on top of the primary (rose layer), seen as rows of wire cross-sections either side of the limb.
 */
export const ConcentricLimb: React.FC<{x: number; y: number; h: number; t?: number; pColor: string; sColor: string; rows?: number; opacity?: number}> = ({x, y, h, t = 70, pColor, sColor, rows = 7, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const pitch = (h - 40) / rows;
	const dots = (side: -1 | 1) => Array.from({length: rows}, (_, k) => {
		const cy = y + 20 + pitch * (k + 0.5), x0 = x + t / 2 + 4;
		return <g key={k}>
			<circle cx={side > 0 ? x0 + 14 : x - t / 2 - 18} cy={cy} r={pitch * 0.38} fill={pColor} />
			<circle cx={side > 0 ? x0 + 14 + pitch * 0.85 : x - t / 2 - 18 - pitch * 0.85} cy={cy} r={pitch * 0.38} fill={sColor} />
		</g>;
	});
	return (
		<g opacity={opacity}>
			<rect x={x - t / 2} y={y} width={t} height={h} fill="#b9bdc2" stroke="#5b6168" strokeWidth={4} />
			{dots(-1)}{dots(1)}
		</g>
	);
};
